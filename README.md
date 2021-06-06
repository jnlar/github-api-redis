## github-api-redis
#### Installing dependencies:  
Backend (run in root directory): `npm i`  
Frontend (run in client directory) : `npm i`

#### Deployment:  
Starting backend (node.js) - run `npm start` in the root directory  
Starting frontend (reactjs) - run `cd client && npm start` in the root directory (or `cd client` and then `npm start`)

#### Recent changes:
- Data fetched from API is returned in JSON, this way we can better handle the data on the front-end with react.
- React components implemented to handle and format returned JSON data from backend API
- Node API now returns 404 JSON from github API, we can now display an error if a user doesn't exist
- Conditional rendering of returned JSON if property is null implemented
- reverted start script in package.json in project root

#### TODO:
- Styling - When in doubt, refer to [material.io](https://material.io). [material cards](https://www.material.io/components/cards) looks pretty cool.
- Spinner animation is currently placed above fetched data when performing an additional search,
fetched data should be removed and replaced with spinner animation when searching for new user.
- Add hyperlink that fetches repo data of searched user, create new component that will render the users repo data.
- Implement node API endpoint for fetching user repo data
