//server to act as a backend that will return the token
const express = require('express');
const cors = require('cors')
const app = express();

// listen to a specific route with app.use
app.use(cors());

//  callback function that will run when the application serves the path. 
// Takes loginRequest argument, which contains the request data and a loginResult argument that handles the result.
app.use('/Login',(loginRequest,loginResult) => {
    loginResult.send({
        token: 'test123'
    })    
});

app.listen(8080,()=> console.log ('API is sunning on port 8080 at: http://localhost:8080/login'));


