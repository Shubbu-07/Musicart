const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/user');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:km5SpAMC26dG6d6M@cluster0.obyquch.mongodb.net/useradmin");

app.post('/', (req, res) => {
    const { email, password } = req.body; // Correct destructuring
    userModel.findOne({ email: email })
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success");
            }else{
                res.json("Incorrect password");
            }
        }else{
            res.json("User not found");
        }
    })
    .catch(err => {
        res.status(500).json("Internal Server Error");
    });
});

app.post('/signup', (req, res) => {
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.status(500).json(err));
});

app.listen(3001, () => {
    console.log(`Server is running on http://127.0.0.1:3001`);
});
