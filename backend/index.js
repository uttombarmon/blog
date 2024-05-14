const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Define your API routes here (e.g., /api/posts, /api/users)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
