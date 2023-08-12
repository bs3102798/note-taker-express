const express = require('express');
const html = require('./routes/html-routes')
const api = require('./routes/api-routes')
const PORT =
    //process.env.PORT || 
    3005;

const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(html)
app.use(api)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

//done