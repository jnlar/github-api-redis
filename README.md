## github-api-redis

#### Installing dependencies:  
Backend (run in root directory): `npm i`  
Frontend (run in client directory) : `npm i`

#### Deployment:  
Starting backend (node.js) - run `npm start` in the root directory  
Starting frontend (reactjs) - run `cd client && npm start` in the root directory (or `cd client` and then `npm start`), the client will
be listening on port 8080

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

#### TODO:
- Styling - When in doubt, refer to [material.io](https://material.io). [material cards](https://www.material.io/components/cards) looks pretty cool.
- Add hyperlink that fetches repo data of searched user, create new component that will render the users repo data.
