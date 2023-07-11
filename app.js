const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);

app.set('views', path.join(__dirname, 'public/html'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

app.get('/signin', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

app.post('/login', function (req, res) {
    const { username, password } = req.body;
    if (username === 'harikesh' && password === '1234') {
        res.render('harikesh.html');
    } else if (username === 'ritwik' && password === '1234') {
        res.render('ritwik.html');
    }else if (username === 'omkar' && password === '1234') {
        res.render('omkar.html');
    }else {
        res.send('Invalid credentials');
    }
});

app.listen(3000, function () {
    console.log('Server started on port 3000');
});
