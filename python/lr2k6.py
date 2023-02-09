"""Module providingFunction printing python version."""
import json
import argparse


def get_args():
    """Get and parse arguments for CLI"""
    ## Argument Parse
    parser = argparse.ArgumentParser(
        description="Convert LoadRunner script to k6 script"
    )
    parser.add_argument(
        "-j",
        "--lr-json-path",
        default="../scripts/benchmark.json",
        required=True,
        help="Path to LoadRunner Json file",
    )
    parser.add_argument(
        "-l",
        "--sleep",
        default=5,
        required=False,
        help="Sleep time in milliseconds",
    )
    parser.add_argument(
        "-u",
        "--base-url",
        default="https://ngsa-cosmos-westus3-dev.austinrdc.dev",
        required=False,
        help="Base URL",
    )
    return parser.parse_args()


def lrverb_2_k6verb(lrverb):
    """Translates verbs from LodeRunner files to k6 verbs"""
    verb = lrverb.lower()
    if verb == "delete":
        return "del"
    return verb

def validation_2_check(validation_object):
    """Generates check for k6 script from Loderunner Validation Object"""
    check_name=list(validation_object.keys())[0]
    contains_supported_validation=False
    validator="""    check(res, {
        """
    for validation in validation_object:
        check_name=validation
        print(f"    //LR script contains validator: '{check_name}'")
        if check_name=='statusCode':
            contains_supported_validation=True
            validator=validator+f"""    "{check_name}":(r) => r.status === {validation_object['statusCode']},
                """
        elif check_name=='jsonArray':
            contains_supported_validation=True
            validator=validator+f"""    "{check_name}":(r) => r.json().length === {validation_object['jsonArray']['count']},
            """  
        elif check_name=='jsonObject':
            contains_supported_validation=True
            validator=validator+f"""    "{check_name}":(r) => JSON.stringify(r.json()) === JSON.stringify({json.dumps(validation_object['jsonObject'])}),
            """
    validator=validator+"""    });"""
    if contains_supported_validation:
        return validator
    return "    //No supported validators existed for this request."

if __name__ == "__main__":
    args=get_args()
    lr_json_path = args.lr_json_path
    sleep_ms = args.sleep
    base_url = args.base_url
    ## `with` statement automatically closes the file
    with open(lr_json_path, encoding="utf8") as lr_script:
        script_contents = json.load(lr_script)
        print(
"""import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

export default function () {"""
        )

        print(
    f"""
    let maxSleep={sleep_ms};
    let res
    let baseURL='{base_url}';
    """
        )
        for request in script_contents["requests"]:
            httpRequestString = "baseURL+'" + request["path"] + "'"
            HTTP_VERB = "get"
            if "verb" in request:
                HTTP_VERB = lrverb_2_k6verb(request["verb"])
            print("    res=http." + HTTP_VERB + "(" + httpRequestString + ");")
            if "validation" in request:
                print(validation_2_check(request["validation"]))
            print("    sleep(Math.random() * maxSleep)")
            print("")
        print("}")
