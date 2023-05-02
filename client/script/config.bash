#!/bin/bash
# copy the correct environment variables file to react SPA
# https://stackoverflow.com/questions/51653931/react-configuration-file-for-post-deployment-settings
# https://dev.to/akdevcraft/react-runtime-variables-49dc

### Functions ###
list_env() {
    config_dir="config"
    env_count=0
    env_list=""

    for file in $config_dir/env.*; do
        if [ -f "$file" ]; then
            env_name=${file##*env.}
            env_list+=" $env_name"
            env_count=$((env_count + 1))
        fi
    done

    if [ $env_count -eq 0 ]; then
        printf "No environment files found in %s. Please add 'env.<my-config>' to the directory \n" "$config_dir"
    else
        printf "Use yarn configapp with one of the following arguments:\n"
        printf "$env_list \n"
fi
}

set_env() {
    config_file="config/env.$1"
    dest_public="public/env.js"
    dest_build="build/env.js"

    if [ -f "$config_file" ]; then
        printf "Setting env to %s\n" "$1"
        cp "$config_file" "$dest_public" # Configure dev environment in public for next build

        if [ -d build ]; then
            cp "$dest_public" "$dest_build" # Hot swap dev to build
        fi
    else
        printf "Error: File %s not found.\n" "$config_file"
        exit 1
    fi
}

### Main ###
mode=$1
if [ -z "$mode" ]; then
    list_env
    else
    set_env $mode
fi

exit 0
