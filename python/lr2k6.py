import json
import argparse

def get_args():
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
    verb = lrverb.lower()
    if verb == "delete":
        return "del"
    else:
        return verb

def print_validator(validation_object):
    check_name=list(validation_object.keys())[0]
    if 'statusCode' in validation_object:
         print(
    f"""    check(res, {{
        {check_name}:(r) =>
        r.status === {validation_object['statusCode']},
        }});""")
    elif 'jsonArray' in validation_object:
         print(
    f"""    check(res, {{
        {check_name}:(r) =>
        r.json().length === {validation_object['jsonArray']['count']},
        }});""")   
    elif 'jsonObject' in validation_object:
         print(
    f"""    check(res, {{
        {check_name}:(r) =>
        JSON.stringify(r.json()) === JSON.stringify({json.dumps(validation_object['jsonObject'])}),
        }});""")   

if __name__ == "__main__":
    args=get_args()
    lr_json_path = args.lr_json_path
    sleep_ms = args.sleep
    base_url = args.base_url
    ## `with` statement automatically closes the file
    with open(lr_json_path) as lr_script:
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
            httpVerb = "get"
            if "verb" in request:
                httpVerb = lrverb_2_k6verb(request["verb"])
            print("    res=http." + httpVerb + "(" + httpRequestString + ");")
            if "validation" in request:
                print_validator(request["validation"])
            print("    sleep(Math.random() * maxSleep)")
            print("")
        print("}")
