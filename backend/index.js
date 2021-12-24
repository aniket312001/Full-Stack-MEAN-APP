const express = require("express")
const bodyparser = require('body-parser') 
const cors = require('cors')
const mysql = require('mysql2')




const app = express()

app.use(cors())
app.use(bodyparser.json())


// connecting mysql in db
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'userinfo',
    post:3306
})


// check database connection
db.connect(err=>{
    if(err){
        console.log(err)
    } else{
        console.log("Database Connection Successfull")
    } 
})


// get all data from db

app.get('/user',(req,res)=>{
    // res.send("hello")

    let qrr = `SELECT * FROM users`;
    db.query(qrr,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result.length>0){
            res.send({message:'All user Data',data:result})
        }
    })

})


// get single user by id 

app.get('/user/:id',(req,res)=>{
    // console.log(req.params.id)
    let qrr = `SELECT * FROM users WHERE id = ${req.params.id}`

    db.query(qrr,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result.length > 0){ 
            res.send({message:'get data by id',data:result})
        } else {
            res.send({message:'data not found'})
        }
    })
})


// Post data 
app.post('/user',(req,res)=>{
    console.log(req.body)
    // let Id = req.body.id    
    let Name = req.body.name    
    let Email = req.body.email   
    let Mobile = req.body.mobile
    
    let qrr = `INSERT INTO users (name, email, mobile) VALUE ('${Name}','${Email}','${Mobile}' );`
    db.query(qrr,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send({message:"Data created Successful"})
        }
    })
})


// Update data
app.put('/user/:id',(req,res)=>{
    let uId = req.params.id  // get the id    
    let Name = req.body.name    
    let Email = req.body.email   
    let Mobile = req.body.mobile

    let qrr = `update users set name='${Name}', email='${Email}', mobile='${Mobile}' where id = ${uId}`
    db.query(qrr,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send({message:"Data updated Successfully"})
        }
    })
})

app.delete('/user/:id',(req,res)=>{

    let qrr = `delete from users where id = ${req.params.id}`

    db.query(qrr,(err,result)=>{
        if(err){
            console.log(err)
        }
        else {
            res.send({message:"Data delete successfully"})
        }
    })
})


// app.get('/',(req,res)=>{
//     res.send("hello")
// })




app.listen(3000,()=>{
    console.log(`http://localhost:${3000}`)
})