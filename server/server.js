const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');     
const searchRoutes = require('./routes/search');

const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(bodyParser.json());

// Routes
app.use('/api', searchRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
