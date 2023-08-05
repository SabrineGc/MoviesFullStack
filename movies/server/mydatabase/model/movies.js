const connection = require("../index.js")

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
      }

    }