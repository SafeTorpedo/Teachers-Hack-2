
import { ImageAnnotatorClient } from '@google-cloud/vision';

import express from 'express';

const app = express()
// const url = 'localhost:3000/api/users/register';
// const usersData = [];
// let getData = () => {
//     axios.get(url)
//         .then(res => usersData.push(res.data))
//         .catch(err => console.log(err.data))
// }
let flag = 0
const CREDENTIALS = {
  YOUR_CREDENTIALS_HERE
}
const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
};

const client = new ImageAnnotatorClient(CONFIG);


const detectText = async (file_path) => {

    let [result] = await client.textDetection(file_path);
    console.log(result.fullTextAnnotation.text);
    let data = result.fullTextAnnotation.text
    // try {
    //     await unlink(file_path);
    //     console.log('successfully deleted');
    // } catch (error) {
    //     console.error('there was an error:', error.message);
    // }

    return data
};

app.get('/', (req, res) => {
    res.send(localStorage.getItem('photo'))
    console.log(localStorage.getItem('photo'))
})



app.post('/post', async (_req, res) => {
    flag = 1
    if (flag == 1) {
        let data = detectText('C:/Users/kushl/Downloads/image.png');
        res.send(data)
    }
    console.log("Connected to React")
})



const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server started on port ${PORT}`));
