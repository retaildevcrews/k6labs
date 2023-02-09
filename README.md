# K6Labs

This repository contains documentation and tools for working with K6 Load Testing tool.
The repo also is set up as a codespace that includes tooling for running K6 tests.

## LodeRunner(WebV) 2 K6 Converter

Included in this repo is a tool for generating K6 scripts from existing LodeRunner/WebV test files.

To run:

```bash
python python/lr2k6.py -j ./scripts/benchmark.json --sleep 300 > scripts/benchmark-new.js

# To see list of options
python python/lr2k6.py --help
```

## Running a K6 Test

A few examples of useful commands and/or tasks.

```
$ First example
$ Second example
$ And keep this in mind
```
