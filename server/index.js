const express = require('express');
const cors = require('cors');
const router = require('./router');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;
const URI = process.env.DB_URL + '/' + process.env.DB_NAME;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

(async function bootstrap() {
  try {
    await mongoose.connect(URI);
    console.log('Connected to MongoDB.');
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
  } catch (error) {
    console.log(error);
  }
})();