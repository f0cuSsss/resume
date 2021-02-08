const express = require('express');
const app = express();

app.get('/resume/download', (req, res) => {
    const file = `${__dirname}/storage/ResumeENG.docx`;
    res.download(file);
});

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server has been started");
});