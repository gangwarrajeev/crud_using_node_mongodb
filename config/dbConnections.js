const mongoose = require('mongoose');

const connectDb = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URL)
       // const connect = await mongoose.connect(process.env.MONGODB_URL)
        console.log(
            'connected to DB',connect.connection.host,
            connect.connection.name)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}
module.exports = connectDb;
