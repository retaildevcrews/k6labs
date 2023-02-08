import json

script_path= '/Users/jorgeluna/work/k6labs/scripts/benchmark.json'
lr_script= open(script_path)

script_contents = json.load(lr_script)
print('import http from \'k6/http\';')
print('import { sleep } from \'k6\';')
print('')
print('export default function () {')
print('\tlet maxSleep=5;')
print('\tlet baseURL=\'https://ngsa-cosmos-westus3-dev.austinrdc.dev\';')
for request in script_contents['requests']:
    httpRequestString='baseURL+\''+request['path']+'\''
    if 'verb' in request:
        print('\thttp.'+request['verb'].lower()+'('+httpRequestString+');')
    else:
        print('\thttp.get('+httpRequestString+');')
    print('\tsleep(Math.random() * maxSleep)')
print('}')
