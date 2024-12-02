const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database Connected!!', connect.connection.host);
    } catch (error) {
        console.log("Error : ", error.message);
        process.exit();

    }
}
module.exports = connectDB;
// mongoose.connect(
//     MONGODB_URI
// ).then(() => {
//     console.log('Database Connected!!')
//     server.listen(8000);
// }).catch(err => {
//     console.log(err)
// })