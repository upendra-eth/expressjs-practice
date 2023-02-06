const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/signup', (req, res) => {
    const { username, password, email } = req.body

    console.log("yes please")

    if (!username || !password || !email) {
        return res.status(400).json({
            error: 'All fields are required'
        })
    }

    // Here you would typically check if the user already exists in the database
    // and return an error if they do

    // If the user doesn't exist, create a new user in the database and return a success message
    res.json({
        message: 'Successfully created user',
        name: username,
        password:password,
        email:email
    })
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})
