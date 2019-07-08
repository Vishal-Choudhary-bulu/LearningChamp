const express = require('express')


let app = express();

let PORT = 5000|process.env.PORT

app.listen(PORT, ()=>(console.log(`listening at ${PORT}`)))

