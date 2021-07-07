const exp = require('express');
const insertData = require('./insertData')
const server = exp();
const bodyParser = require('body-parser')
const cors = require('cors')

const optionCORS = {
    origin: ['http://localhost:3000'],
    credentials: true,
};
server.use(bodyParser.json()) // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true }))

server.use(cors(optionCORS));
server.post('/api/chat-form', insertData)
server.get('/', function (req, resp) {
    resp.send({ 'servidorTesting': 'testingALIMX' })
})
server.listen(5000, () => {
    console.log('Server on port 5000')
});