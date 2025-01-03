import express from 'express'
import dotenv from 'dotenv'



import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());




axios.get('https://api.ipify.org?format=json')
    .then(response => {
        console.log(`Public IP Address: ${response.data.ip}`);
    })
    .catch(error => {
        console.error('Error fetching public IP:', error.message);
    });




app.get('/', (req, res) => {
    res.send(req.body);
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});