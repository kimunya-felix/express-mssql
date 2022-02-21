const dotenv = require('dotenv')
const mssql = require('mssql')
dotenv.config()

const config = {
    server: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,

    options: {
        encrypt: false,
    },
    pool:{
        max: 10,
        min: 0,
        idleTimeoutMillis: 3000
    },
}
mssql.connect(config).then(pool=>{
    if(pool.connecting){
        console.log('connecting to the database');
    }
    if(pool.connected){
        console.log('connected');
    }
}).catch(e=>console.log(e))