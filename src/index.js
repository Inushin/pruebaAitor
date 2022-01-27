const express = require('express');

const app = express();

app.listen({ port: 3000 }, () => {
    console.log(`🚀 Server ready at localhost:3000`);
});
