## github-api-redis

#### Installing dependencies:  
Backend (run in root directory): `npm i`  
Frontend (run in client directory) : `npm i`

#### Deployment:  
Starting backend (node.js) - run `npm start` in the root directory  
Starting frontend (reactjs) - run `cd client && npm start` in the root directory (or `cd client` and then `npm start`), the client will
be listening on port 8080

#### Installing & deploying via dev.sh:
`chmod +x dev.sh` - make the shell script executable  
`./dev.sh install` - This will install all the deps   
`./dev.sh start` - Run this if you've already installed all the deps, this will start both Reactjs and Node.js  
`./dev.sh fresh` - This will install dependencies and deploy Reactjs and Node.js (ideal on freshly cloned repo etc)

#### Recent changes:
- Data fetched from API is returned in JSON, this way we can better handle the data on the front-end with react.
- React components implemented to handle and format returned JSON data from backend API
- Node API now returns 404 JSON from github API, we can now display an error if a user doesn't exist
- Conditional rendering of returned JSON if property is null implemented
- reverted start script in package.json in project root
- Implemented additional fetch request to github API to fetch user repo data
- Fix filter-json.js filterRepoData, if a user had less than 3 repos nothing would render to the screen since we where using
a static template to filter the JSON data.
- Spinner component is now part of the User component. When a request is made, any existing data is removed and replaced by the spinner until the request is completed.
- Implemented Accordion component to render user repo data
