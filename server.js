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
DATABASE_URI = "mongodb+srv://sathwikch:Sunny0204@thesinglets.bxskgvh.mongodb.net/thesinglets?retryWrites=true&w=majority";
// Import User Schema
const accountSchema = require('./models/account.model');

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, '/public')))

// Routes
app.use('/api/account', require('./routes/account.routes'))

// Fern's Code. Need 404.js to run properly
// app.all('*', (req, res) => {
//     res.status(404)
//     if (req.accepts('js')) {
//         res.sendFile(path.join(__dirname, 'app', '404.js'))
//     } else if (req.accepts('json')) {
//         res.json({ message: "404 Not Found" })
//     } else {
//         res.type('txt').send('404 Not Found')
//     }
// })

app.all('*', (req, res) => {
    res.status(404).send('404 Not Found');
});

// mongoose.connection.once('open', () => {
//     console.log('Connected to MongoDB');
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// })

// mongoose.connection.on('error', error => {
//     console.log(error);
// })

mongoose.connect(DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Failed to connect to MongoDB:', error);
    });

// Create a user model
const User = mongoose.model('User', accountSchema);

//Middleware to parse JSON request body

app.post('/api/register', async(req, res) => {
  const {accType, accUsername, accEmail, accPassword} = req.body;

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ accUsername });
    if (existingUser) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    // Create a new user
    const newUser = new User({accType, accUsername, accEmail, accPassword});
    await newUser.save();

    // Respond with success message
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// API endpoint for user authentication (login)
app.post('/api/login', async (req, res) => {
    const { accEmail, accPassword } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ accEmail });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Check if the password is correct
      if (user.accPassword !== accPassword) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      // Respond with success message or user information
      res.json({ message: 'Login successful', user });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Login failed' });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

