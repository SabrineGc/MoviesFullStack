// const mysql=require("mysql")
// const mysqlConfig = require("./config.js");

// const connection = mysql.createConnection(mysqlConfig);

// connection.connect((err) => {
//   if (err) console.log("Error to connect to database", err);
//   else console.log("Finally my database is connected!");
// });

// module.exports={
//     getAllusers:function(cb){
//         const sql=`SELECT * FROM users`
//         connection.query(sql,function(err,res){
//           cb(err,res)
//         })
//       },
//       adduser:function(user,cb){
//         const sql=`INSERT INTO users SET ?`
//         connection.query(sql,[user],function(err,res){
//           console.log(err,"mehdi")
//           cb(err,res)
//         })
//       },
//       getOneUser:function(first_name,cb){
//         const sql=`SELECT * FROM users WHERE first_name='${first_name}'`
//         connection.query(sql,function(err,res){
//           cb(err,res)
//         })
//       },  
//       updateUser:function(iduser,user,cb){ 
//         const sql=`UPDATE users SET? WHERE iduser='${iduser}'`
//         connection.query(sql,user,function(err,res){
//           console.log(err,"update")
//           cb(err,res)
//         })
//       },
//       deleteUser:function(iduser,cb){
//         const sql=`DELETE FROM users WHERE iduser=${iduser}`
//         connection.query(sql,function(err,res){
//           console.log(err,"delete")
//             cb(err,res)
//         })
//       }


// }
