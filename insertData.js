
const connection = require('./connectionMysql')
const insertData = async (req, resp) => {
    console.log(req);
    const {
        nombre,
        segNombre,
        apePat,
        apeMat,
        fechaNacimiento,
        email,
        numberPhone
    } = req.body;
    const sql = `INSERT INTO users_test_claudiaganzolara VALUES (Null, '${nombre}', '${segNombre}','${apePat}', '${apeMat}','${fechaNacimiento}', '${email}','${numberPhone}')`;
    new Promise((resolve, object) => {
        connection.query(sql, (error, results, f) => {
            const response = {
                veryConnection: [],
                errror: '',
            };
            if (error) {
                response.errror = error; 
                resp.send({ responseError: error });               
                console.log(response);
            }
            if (results) {
                response.veryConnection = results;
                console.log(response);                
                resp.send({ response: results.insertId });
            }
        });
    });
}
module.exports = insertData;

