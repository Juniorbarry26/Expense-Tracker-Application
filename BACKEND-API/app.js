const express = require('express');
const app = express();

// setting up build in middleware
app.use(express.json())


// routes



// port listening on port

const port = 3000;
app.listen(port, console.log(`Server is listening on http://localhost:${port}`));