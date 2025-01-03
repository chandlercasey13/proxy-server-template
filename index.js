import express from 'express'
import dotenv from 'dotenv'


import https from 'https';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());









https.get('https://api.ipify.org?format=json', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        const ip = JSON.parse(data).ip;
        console.log(`Public IP Address: ${ip}`);
    });
}).on('error', (err) => {
    console.error('Error fetching public IP:', err.message);
});




axios.get('https://api.ipify.org?format=json')
    .then(response => {
        console.log(`Public IP Address: ${response.data.ip}`);
    })
    .catch(error => {
        console.error('Error fetching public IP:', error.message);
    });







app.get('/', (req, res) => {
    res.send('Welcome to the Express Server!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API endpoint!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});