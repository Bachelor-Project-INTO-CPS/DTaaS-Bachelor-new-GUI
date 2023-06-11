#!/bin/bash
yarn install --frozen-lockfile
yarn playwright install --with-deps
printf "now you see me"