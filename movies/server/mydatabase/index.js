const mysql=require("mysql")
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) console.log("Error to connect to database", err);
  else console.log("Finally my database is connected!");
});

module.exports={
    getAll:function(cb){
        const sql=`SELECT * FROM movies`
        connection.query(sql,function(err,res){
          cb(err,res)
        })
      },
      add:function(movie,cb){
        const sql=`INSERT INTO movies SET ?`
        connection.query(sql,[movie],function(err,res){
          console.log(err,"mehdi")
          cb(err,res)
        })
      },
      getOne:function(title,cb){
        const sql=`SELECT * FROM movies WHERE title='${title}'`
        connection.query(sql,function(err,res){
          cb(err,res)
        })
      },  
      update:function(id,movie,cb){ 
        const sql=`UPDATE movies SET? WHERE id='${id}'`
        connection.query(sql,movie,function(err,res){
          console.log(err,"update")
          cb(err,res)
        })
      },
      delete:function(id,cb){
        const sql=`DELETE FROM movies WHERE id=${id}`
        connection.query(sql,function(err,res){
          console.log(err,"delete")
            cb(err,res)
        })
      },
      getAllusers:function(cb){
        const sql=`SELECT * FROM users`
        connection.query(sql,function(err,res){
          cb(err,res)
        })
      },
      adduser:function(user,cb){
        const sql=`INSERT INTO users SET ?`
        connection.query(sql,[user],function(err,res){
          console.log(err,"mehdi")
          cb(err,res)
        })
      },
      getOneUser:function(first_name,cb){
        const sql=`SELECT * FROM users WHERE first_name='${first_name}'`
        connection.query(sql,function(err,res){
          cb(err,res)
        })
      },  
      updateUser:function(iduser,user,cb){ 
        const sql=`UPDATE users SET? WHERE iduser='${iduser}'`
        connection.query(sql,user,function(err,res){
          console.log(err,"update")
          cb(err,res)
        })
      },
      deleteUser:function(iduser,cb){
        const sql=`DELETE FROM users WHERE iduser=${iduser}`
        connection.query(sql,function(err,res){
          console.log(err,"delete")
            cb(err,res)
        })
      }


}
