const vision = require('@google-cloud/vision');
const express= require('express')
const app=express()
const url = 'localhost:3000/api/users/register';
const usersData = [];
let getData = () => {
    axios.get(url)
        .then(res => usersData.push(res.data))
        .catch(err => console.log(err.data))
}
const CREDENTIALS = {
    {CREDENTIALS JSON FILE HERE}
}

const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
};

const client = new vision.ImageAnnotatorClient(CONFIG);

const detectLandmark = async (file_path) => {

    let [result] = await client.landmarkDetection('landmarj_two.jpeg');
    console.log(result.landmarkAnnotations[0].description);
};

const detectText = async (file_path) => {

    let [result] = await client.textDetection(file_path);
    console.log(result.fullTextAnnotation.text);
};

app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.get('/api/users/register',(req,res)=>{
    getData('/api/users/register')
})

app.post('/post',(req,res)=>{
    console.log("Connected to React")
    res.redirect('/')
})



const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server started on port ${PORT}`));
detectText('../handwritten3.jpg');
