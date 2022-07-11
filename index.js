const http = require('http')
const msg = require('./message.js')

const host = "localhost"
const PORT = 5000
const server = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Hello')
    res.end()
})

server.listen(5000, () => {
    console.log(`Start server running at http://localhost:5000`)
})