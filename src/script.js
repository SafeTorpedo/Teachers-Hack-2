
//import { ImageAnnotatorClient } from "@google-cloud/vision";

const express = require("express");
let { ImageAnnotatorClient } = require("@google-cloud/vision");
const exphbs = require('express-handlebars')
const hbs = require('hbs')

const app = express();
// app.set('views', path.join(__dirname))
app.set('view engine', 'hbs')
// const url = 'localhost:3000/api/users/register';
// const usersData = [];
// let getData = () => {
//     axios.get(url)
//         .then(res => usersData.push(res.data))
//         .catch(err => console.log(err.data))
// }
let flag = 0;
const CREDENTIALS = {
    {YOUR_CREDENTIALS_HERE}
};
const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email,
    },
};

const client = new ImageAnnotatorClient(CONFIG);

const detectText = async (file_path) => {
    let [result] = await client.textDetection(file_path);
    let data = result.fullTextAnnotation.text;
    return data;
};

app.get("/", (req, res) => {
    res.send(localStorage.getItem("photo"));
    console.log(localStorage.getItem("photo"));
});


app.post("/post", async (req, res) => {
    flag = 1;
    if (flag == 1) {
        detectText("C:/Users/kushl/Downloads/image.png").then(function (data) {
            res.render('posts', { value: data })
        })
        console.log("Connected to React");
    }
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
