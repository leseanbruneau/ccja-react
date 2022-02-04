
// Copy axios-instance-template.js to axios-instance.js
//  In axios-instance.js - update baseURL with path to Firebase database
//
// Example:
// From ${PRJ_ROOT_DIR}
//   json-server --watch db/sampleDataFile.json --port 3001 --delay 3000
//
//  baseURL:  
//    http://localhost:3001/sprints
//

import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:3001/"
});

export default instance;
