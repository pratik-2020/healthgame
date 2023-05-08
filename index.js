const express = require('express');
const { graphqlHTTP } = require('express-graphql');
// const schema = require('./schema/schema');
const cors = require('cors');
const addUser = require('./routes/user/addUser');
const generateLoginUrl = require('./routes/user/generateLoginUrl');
const login = require('./routes/user/login');
const deleteUser = require('./routes/user/deleteUser');
const addHoliday = require('./routes/holiday/addHoliday');
const getAttendence = require('./routes/user/getAttendence');
const updateSteps = require('./routes/user/updateSteps');
// const { getMaxListeners } = require('./models/user');
const mongoose = require('mongoose');
const test = require('./routes/mail/test');
const db = "mongodb+srv://pratik:pratik@healthgame.bolmv5y.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection sucessfully established")
}).catch((er) => {
    console.log(er.message);
});
const fileUpload = require('express-fileupload');
const app = express();
const getMail = require('./routes/mail/getMail');
app.use(cors({
    origin: '*',
    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
    ]
}));

app.use(express.json());
app.use(express.text());
app.use(fileUpload({
    useTempFiles: true
}));
app.get('/', (req, res) => {
    res.send('Welcome');
})
app.get('/attendence',  (req, res) => {
    getAttendence(req, res);
})
app.post('/user', (req, res) => {
    addUser(req, res);
});
app.get('/loginurl', (req, res) => {
    generateLoginUrl(req, res);
});
app.get('/login', (req, res) => {
    login(req, res);
});
app.get('/steps', (req, res) => {
    updateSteps(req, res);
})
app.get('/mail', (req, res) => {
    test(req, res);
})
app.delete('/user', (req, res) => {
    deleteUser(req, res);
})
app.post('/holiday', (req, res) => {
    addHoliday(req, res);
});

app.get('/id/:em/:dt', (req, res) => {
    res.send(req.params.em+" "+req.params.dt);
})
app.listen(3001, () => {
    console.log('Server started');
});

