const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../frontend', 'build')))
app.use(express.static(path.join(__dirname, "resume")))

app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, 'resume', 'Andrew_Lubrino_s_Resume.pdf'))
})

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'))
})

app.listen(3000, () => {
    console.log("Listening on port 3000!")
})