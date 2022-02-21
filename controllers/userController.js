const mssql = require('mssql')
const config = require('../config/db')

async function getUsers(req, res){
    try{
        let pool = await mssql.connect(config)
        const result = await pool.request().execute(`selectAllUsers`);
        res.send(result.recordsets);
    }
    catch(error){
        console.log(error);
    }
}
async function getUser(req,res){
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        const result = await pool.request()
        .input('id',  id)
        .execute('SelectSomeCustomers')
        res.send(result.recordsets);
    }
    catch(error){
        console.log(error);
    }
}
// async function addUser(req,res){
//     const{names, email} = req.body
//     try{
//         let pool = await mssql.connect(config)
//         const result = await pool.request().execute(`addSomeCustomers @names='${names}', @email='${email}'`)
//         res.json('Data inserted Successfully')
//     }
//     catch(error){
//         console.log(error);
//     }
// }
async function addUser(req,res){
    const{names, email} = req.body
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('names',  names)
        .input('email',  email)
        .execute('addSomeCustomers')
        res.json('Data inserted Successfully')
    }
    catch(error){
        console.log(error);
    }
}
async function updateUser(req,res){
    const id = req.params.id
    const{names, email} = req.body
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('id',  id)
        .input('names',  names)
        .input('email',  email)
        .execute('updateCustomer');
        res.json('Data Updated Successfully')
    }
    catch(error){
        console.log(error);
    }
}
async function deleteUser(req,res){
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('id',  id)
        .execute('deleteCustomer')
        res.json('data deleted successfully');
    }
    catch(error){
        console.log(error);
    }
}
module.exports={
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
}