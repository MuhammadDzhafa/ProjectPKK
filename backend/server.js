const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});

// Endpoint to add inventory item
app.post('/api/inventory', (req, res) => {
  const { id, title, price, image } = req.body;
  const sql = 'INSERT INTO inventory (id, title, price, image) VALUES (?, ?, ?, ?)';
  db.query(sql, [id, title, price, image], (err, result) => {
    if (err) throw err;
    res.json({ success: true, data: result });
  });
});

// Endpoint to get inventory items
app.get('/api/inventory', (req, res) => {
  const sql = 'SELECT * FROM inventory';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});

app.delete('/api/inventory/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM inventory WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.json({ success: true });
  });
});