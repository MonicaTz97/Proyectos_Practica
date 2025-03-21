const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/contador', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a la base de datos de MongoDB'))
.catch((err) => console.log('Error al conectar a MongoDB:', err));

const dataSchema = new mongoose.Schema({
  contador: Number,
  nombre: String
});

const Data = mongoose.model('Data', dataSchema);

app.post('/guardar', (req, res) => {
  const { contador, nombre } = req.body;
  const newData = new Data({
    contador,
    nombre
  });

  newData.save()
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/datos', (req, res) => {
  Data.find()
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = app;
