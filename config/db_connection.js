var dbProp = require("./db_properties")
var mysql = require("mysql");

module.exports = {
    getConnection:() => {
        return mysql.createConnection(
            {
                host: dbProp.host,
                user: dbProp.username,
                password: dbProp.password,
                database: dbProp.dbName
            });
    }
}
