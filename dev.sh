#!/bin/bash

JSON="package.json"
NM="node_modules"
LOCK="*-lock.json"

clean() {
	find ./$LOCK ./client/$LOCK -exec rm -f {} \;
}

start_services() {
	if [[ -e "./$NM" ]] && [[ -e "./client/$NM" ]]; then
		npm start & \
		cd client && npm start
	fi
}

install_dep() {
	if [[ -f "./$JSON"  ]] && [[ -f "./client/$JSON"  ]]; then
		npm install \
		&& cd client \
		&& npm install && cd ../
	fi

	clean
}

case $1 in
	install) install_dep ;;
	start) start_services ;;
	fresh) install_dep && start_services ;;
esac
