const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files like chatbot.html

// Simple chat endpoint
app.post('/api/chat', (req, res) => {
    const userMessage = req.body.message || '';
    // For now, just echo a canned response
    res.json({ reply: `You said: "${userMessage}" (Eldon is listening!)` });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Open chatbot.html in your browser to use the chatbot.');
});
