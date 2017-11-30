import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// app.get('/status', (req, res) => {
//   res.send({
//     messages: 'hello vuejs',
//   });
// });
require('../src/routes')(app);

app.listen(process.env.PORT || 8080);

