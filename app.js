import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

import sql from 'mssql';

const config = {
    user: 'user', // better stored in an app setting such as process.env.DB_USER
    password: 'password', // better stored in an app setting such as process.env.DB_PASSWORD
    server: 'server.database.windows.net', // better stored in an app setting such as process.env.DB_SERVER
    port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: 'ap-database', // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

console.log("Starting...");
connectAndQuery();

var app = express();
app.use(express.static('public')); // this is added!
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
app.get("/", (req, res) => {
 res.send('Hello World!')
});
app.get("/showfile", (req, res, next) => { 
 
 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);
 const _retfile = path.join(__dirname, 'index.html');

 res.sendFile(_retfile);
});

async function connectAndQuery() {
    try {
	    var router = express.Router();
        var poolConnection = await sql.connect(config);

        console.log("Reading rows from the Table...");
        var resultSet = await poolConnection.request().query(`SELECT ResourceURL FROM Resources ORDER BY ResourceID`);

        console.log(`${resultSet.recordset.length} rows returned.`);

        // output column headers
        var columns = "";
        for (var column in resultSet.recordset.columns) {
            columns += column + ", ";
        }
        console.log("%s\t", columns.substring(0, columns.length - 2));

        // ouput row contents from default record set
        resultSet.recordset.forEach(row => {
            console.log(row.ResourceURL);
        });

        // close connection only when we're certain application is finished
        poolConnection.close();
    } catch (err) {
        console.error(err.message);
    }
}
