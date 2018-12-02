const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Rodrigo',
      lastName: 'Morgado',
      email: 'rodrigo@zooft.company'
    },
    {
      name: 'Juan',
      lastName: 'Puelpan',
      email: 'juan@zooft.company'
    },
    {
      name: 'Heraldo',
      lastName: 'San Martin',
      email: 'heraldo@zooft.company'
    }
  ]);
});

if(!module.parent){ 
  app.listen(3000, () => console.log('Server up on 3000'));
 }
module.exports.app = app;