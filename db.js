//Mongodb
const {MongoClient}=require('mongodb')
let dbConnection_obj
module.exports={
    connectToDb:(cb)=>{
        MongoClient.connect('mongodb://localhost:27017/journal_website').then((client)=>{
            dbConnection_obj=client.db()
            return cb()
        }).catch(err=>{
            console.log(err)
            return cb()
        })

    },
    getDb: ()=>dbConnection_obj
}