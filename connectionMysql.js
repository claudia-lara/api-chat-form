const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com",
    user: "testing",
    password: "Pruebas%ALI%2020",
    database: 'testing_ali_fullstack'
});
module.exports = connection;