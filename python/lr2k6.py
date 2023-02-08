import json

script_path= '/Users/jorgeluna/work/k6labs/scripts/benchmark.json'
lr_script= open(script_path)

def lrverb_2_k6verb(lrverb):
    verb=lrverb.lower()
    if verb=='delete':
        return 'del'
    else:
        return verb



script_contents = json.load(lr_script)
print('import http from \'k6/http\';')
print('import { sleep } from \'k6\';')
print('')
print('export default function () {')
print('\tlet maxSleep=5;')
print('\tlet res')
print('\tlet baseURL=\'https://ngsa-cosmos-westus3-dev.austinrdc.dev\';')
for request in script_contents['requests']:
    httpRequestString='baseURL+\''+request['path']+'\''
    httpVerb='get'
    if 'verb' in request:
        httpVerb=lrverb_2_k6verb(request['verb'])
    print('\tres=http.'+httpVerb+'('+httpRequestString+');')
    print('\tsleep(Math.random() * maxSleep)')
print('}')
