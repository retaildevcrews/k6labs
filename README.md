# K6Labs

This repository contains documentation and tools for working with K6 Load Testing tool.
The repo also is set up as a codespace that includes tooling for running K6 tests.

## LodeRunner(WebV) 2 K6 Converter

Included in this repo is a tool for generating K6 scripts from existing LodeRunner/WebV test files.

To run:

```bash
python3 python/lr2k6.py -j scripts/baseline.json --sleep 5 > scripts/baseline-k6.js

# To see list of options
python3 python/lr2k6.py --help
```

## Running a K6 Test locally

For more in depth usage instruction see: <https://k6.io/docs/get-started/running-k6/>

``` bash
# run a test with 1 user and 1 iteration
k6 run --vus 1 --iterations 1 scripts/baseline-k6.js

# run a test with 10 users for 5 minutes
k6 run --vus 1 --duration 3m scripts/baseline-k6.js

# to output time series data to a json file use the --out argument
k6 run --vus 1 --iterations 1 scripts/baseline-k6.js \
--out json=output-log.json
```
