### npm json-server package information
### https://www.npmjs.com/package/json-server


### Install npm json-server package
[sudo] npm install -g json-server


### Run json-server from angular-ccja root project directory
json-server --watch db/sprints.json


## By default, json-server will run on port 3000
## To change json-server default port, use --port option and specify port number

### To run json-server on port 3001
json-server --watch db/sprints.json --port 3001


### To run json-server on port 8080 with three second delayed response
json-server --watch db/sprints.json --port 8080 --delay 3000

