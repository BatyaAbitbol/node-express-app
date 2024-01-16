const express = require('express');
const sdk = require('api')('@render-api/v1.0#jw0325lr5hblce');

const app = express();

let PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    sdk.auth('rnd_eqwvqYmoyRrfvWbazgfLnTaPk4UI');
    sdk.getServices({ limit: '20' })
        .then(({ data }) => {
            console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.get("/names", (req, res) => {
    sdk.auth('rnd_eqwvqYmoyRrfvWbazgfLnTaPk4UI');
    sdk.getServices({ limit: '20' })
        .then(({ data }) => {
            console.log(data.map(e => e.service.name));
            res.json(data.map(e => e.service.name));
        })
        .catch(err => console.error(err));
});

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });