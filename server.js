const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '')));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'homePage.html'));
});

// Route for the about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'aboutPage.html'));
});

// Route for the menu page
app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'menuPage.html'));
});

// Route for the gallery page
app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'GalleryPage.html'));
});

// Route for the events page
app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'EventsPage.html'));
});

// Route for the contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'contact.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});