const express = require('express');
const cors = require('cors');
const port = '8080';
const app = express();

const seatData = require('./seatData.js');

app.options('*', cors());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.options(`*`, cors());

app.get("/seatData", (req, res) => {
    if (req.param('seatNumber')) {
        const seatNumber = req.param('seatNumber');
        const seat = seatData.seats.find( (item) => item.seatNumber === seatNumber )
        res.status(200).json(seat);
    } else {
        res.status(200).json(seatData);
    }
})

/**
 * Start the server to listen on port 8080
 */
app.listen(port, function () {
    console.log("Server is running on " + port + " port");
});