require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const PORT = process.env.PORT || 3500
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, '/public')))

// Routes
app.use('/api/account', require('./routes/account.routes'))
app.use('/api/outfit', require('./routes/outfit.routes'))
app.use('/api/post', require('./routes/post.routes'))

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('js')) {
        res.sendFile(path.join(__dirname, 'app', '404.js'))
    } else if (req.accepts('json')) {
        res.json({ message: "404 Not Found" })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})

mongoose.connection.on('error', error => {
    console.log(error);
})