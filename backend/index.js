const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        retorno: 'Retorno'
    })
})

app.listen(3333);