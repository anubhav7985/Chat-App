const path = require('path')
const express = require('express')
const dotenv = require("dotenv")
const { app, server } = require('./socket/socket')
const connectDB = require("./db");
const bodyParser = require('body-parser')
const cors = require('cors')
const conversationRoutes = require('./routes/conversation.route')
const authRoutes = require('./routes/auth.route')
const messageRoutes = require('./routes/message.route');
const userRoutes = require('./routes/user.route')
const groupRoutes = require('./routes/group.conversation.route');
// const app = express()
dotenv.config()
connectDB();
const _dirname = path.resolve()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api', conversationRoutes)
app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api', userRoutes)
app.use('/api/groups', groupRoutes)

app.use(express.static(path.join(_dirname, "../client/dist")))

app.get("/", (req, res) => {
    res.send("Welcome to my chat app")

})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../", "client", "dist", "index.html"))
})


app.listen(8000, () => console.log("Server is running..."));
