var Connection = require('tedious').Connection;  
var config = {  
    server: '192.168.0.53',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: '/gamem0de0123@mssql'
        }
    },
    options: {
        encrypt: true,
        database: 'Users'
    }
};

var data = new Connection(config);  
data.on('connect', function(err) {  
    console.log("Connected");  
});

data.connect();