const dotenv = require('dotenv');
const app = require('./app')
dotenv.config();
app.listen(process.env.PORT, ()=> {
    `Look up to localhost:${process.env.PORT}` 
})

