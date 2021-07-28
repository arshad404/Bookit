import express from 'express';
import {json} from 'body-parser';

const app = express();
app.use(json());

app.get('/api/users/currentuser', (req, res) => {
    res.send('Hi there current User')
})

app.get('/', (req, res) => {
    res.send('You are on main page');
})

app.listen(3000, () => {
    console.log("Listening on port 3000!");
})