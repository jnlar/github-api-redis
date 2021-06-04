## github-api-redis
#### Installing dependencies:  
> backend (run in root directory): `npm i`  
> frontend (run in client directory) : `npm i`

#### Development:  

You'll need to run `npm start` in both the root(server) and client(frontend) folder respectively, 
react app will ask to serve on another port since 3000 is taken.  

#### Recent changes:
- Data fetched from API is returned in JSON, this way we can better handle the data on the front-end with react.
- React components implemented to handle and format returned JSON data from backend API
