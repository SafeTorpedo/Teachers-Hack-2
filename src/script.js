//import { ImageAnnotatorClient } from "@google-cloud/vision";

const express = require("express");
let { ImageAnnotatorClient } = require("@google-cloud/vision");

import express from "express";

const app = express();
// const url = 'localhost:3000/api/users/register';
// const usersData = [];
// let getData = () => {
//     axios.get(url)
//         .then(res => usersData.push(res.data))
//         .catch(err => console.log(err.data))
// }
let flag = 0;
const CREDENTIALS = {
    type: "service_account",
    project_id: "swift-branch-362719",
    private_key_id: "116f959c848ff33d5ba47107f57ca27f3f0bab59",
    private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCiagH7uzEK1Nza\n6nvgHeAJFBdgsrVvm1pjmtvFdkQdvSCj0bW1ddoGBcqo0vwe6Y3XWISptyW9nu2l\nzkCVBm/0To1h071eeB+5d7yfN5q5DGVwyOVC/1aqtyZfPY8w8DjiSZDWrNhjKJw4\nLIWNo7UIWkG1j3TPK5t8iiBnKcZluQrbUEjGBaQGN3knrkPUxSu109eVHO0PiatR\n15daxVAOSbxGoZ7JgnRhCL1sUUf7xDxSOyUwp/6K/VxDZ3ED4vUaBvMD9FcjFYaJ\nJhyPFo2BXe1OaPPo211pkBFjLarNMF/FGQjPc32AtfhBj5514TrmUQkK95iTSxEP\niKz7KC+vAgMBAAECggEAE2uinhO1mwp1+DVWp6da3SsKWpUz7csBRWzEf7mTDo1J\nZF1UoYSck+DIaWSFIjsiK1BZ2KNeP2zMFOnzPf6dj3R/ImX7vFqXzIkdRFqVRTBO\nxuw2wcqfdd1dmMDXKO5oluJeD9VuMHkwKOVl+NhM8tk8BzZGrOkVeBBaLIvJverw\nM0tAIrGoSsCfcLiUYkXAhMd4omnXIBLzTxeMl/KAeg5aBMSiMp6JqDs8gUVLR5dF\nSidYIj/rcW+AJ1NDGv47xD7ZU3+cMARuMKVWSuoElUWppXkk1HIUtFuYTe+Wo/1G\n6wj71LTCt8hwYQWT6ZUgaUjvZi/kMTv2XHhjXSpLGQKBgQDQVrhyRjm95f2DQYBs\n93G5lFcgfCJTkTjdoNl3aD0zVKJohor5j3MmyKUbgA0cK6SMyBj9/ynouY/Ybrsz\nEE4pFJbNq+oxH9XwaTfka1LWRs87OUai2jKfNGBmVAFmFxttlVkrHPRuUF8WOE66\n34mIbM08edWOn56k5XhW+6Wz9wKBgQDHkbokJuoiH3pTalXaj5KRCIu2ZiQFWTPl\nfQXo85cb8HWOOLVxpxSR5P+QVMbS4QtBiKSFMQAxtGNaN8XbDuWK+wvFroNSsqdI\neKN+ezSl2z3UXOEJagiRkcXaNskzholowodGEG3cv6GBxBCXkH5olVYbfOslFAaZ\nMuiZ5WMECQKBgBNp8VgcuSa79sqzYN9Gk59idlf9mUlGQBFO+tTIruNIoLWyy+KD\nfox/p/sPDKmyW2wO/V012Nbp68CUWPdiLpZfZ8oUmgcn20zC0UWExrxW7tqq9K0a\nPhtdyxnd/B9iSdkFUMDWuuRIswOkDZoWWH+Q+/MFu2PF9geRpowceQ1zAoGACrsn\nSzJcfKE8rqeVHj+CHhJbkN9FKJR3WeuzGaefhH0VlSQvfYECdiXeKCCm4EgBlvCG\nCDNuUz3j6cH9/Z17clG1fFe58ARzQk5aXD67wf9b/8NOxnbRJyKzhNxVTVP6p4tu\nQrI3dhtHz/Z+/edjJLSDAM9ixYeiIzK9lyjifiECgYAot4c2B2LKj0ZLDYOX9L37\nBHzqDIukN7MTd9BoSJRTxFW3ppMizcTTIqtl6UV7dGdIt3jppyVrAgdNDXbP8/s7\n6h/vycMbZJ9zLKb80mnqkW6LkMh9D3FUFnW/636yv8wVrS4kQVyw6ZqmquQ5g6sA\n5ExsTaLdQ+CB//02LjQJzw==\n-----END PRIVATE KEY-----\n",
    client_email: "kaushik@swift-branch-362719.iam.gserviceaccount.com",
    client_id: "116673737261062056089",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/kaushik%40swift-branch-362719.iam.gserviceaccount.com",
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
    console.log(result.fullTextAnnotation.text);
    let data = result.fullTextAnnotation.text;
    // try {
    //     await unlink(file_path);
    //     console.log('successfully deleted');
    // } catch (error) {
    //     console.error('there was an error:', error.message);
    // }

    return data;
};

app.get("/", (req, res) => {
    res.send(localStorage.getItem("photo"));
    console.log(localStorage.getItem("photo"));
});

app.post("/post", async (_req, res) => {
    flag = 1;
    if (flag == 1) {
        let data = detectText("C:/Users/kushl/Downloads/image.png");
        res.send(data);
    }
    console.log("Connected to React");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
