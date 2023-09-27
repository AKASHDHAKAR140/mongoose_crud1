const express = require("express");
require("./db/connection");
const formdata = require("./models/formdata");
const router = require("./services");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3082;
app.use(cors())
app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
