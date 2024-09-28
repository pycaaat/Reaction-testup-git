const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/get-server-time', (req, res) => {
    const serverTime = Date.now();
    res.json({ serverTime });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
