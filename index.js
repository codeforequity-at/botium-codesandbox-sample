const express = require('express')
const path = require('path')

const port = process.env.PORT || 8080
const app = express()
app.use(express.static(path.resolve(__dirname, 'mochawesome-report')))
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'mochawesome-report', 'mochawesome.html'))
})
app.listen(port)
console.log("server started on port " + port)
