import express from 'express'
import dotenv from 'dotenv'

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Express Server!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API endpoint!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});