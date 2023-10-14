import app from "./app";
require('dotenv').config();

const port = process.env.PORT || 5002;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});