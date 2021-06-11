#!/bin/bash

JSON="package.json"
NM="node_modules"

start_services() {
	if [[ -e "./$NM" ]] && [[ -e "./client/$NM" ]]; then
		npm start & \
		cd client && npm start
	fi
}

case $1 in
	fresh) 
		if [[ -f "./$JSON"  ]] && [[ -f "./client/$JSON"  ]]; then
			npm install \
			&& cd client \
			&& npm install && cd ../
		fi
		
		find ./*lock.json -exec \
			rm -f {} \;

		find ./client/*lock.json -exec \
			rm -f {} \; 

		start_services ;;
	start) start_services ;;
esac
