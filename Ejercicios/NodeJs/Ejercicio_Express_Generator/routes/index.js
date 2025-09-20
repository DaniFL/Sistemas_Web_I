var express = require('express');
var router = express.Router();

const cartelera = [
  {
    "titulo": "Spider-Man: No Way Home",
    "director": "Jon Watts",
    "Actores": ["Tom Holland", "Zendaya"],
    "programación": [
      {"sala": 17, "hora_inicio": "17:00", "hora_fin": "20:15"},
      {"sala": 20, "hora_inicio": "18:00", "hora_fin": "21:15"}
    ]
  },
  {
    "titulo": "The Matrix Resurrections",
    "director": "Lana Wachowski",
    "Actores": ["Keanu Reeves", "Carrie-Anne Moss"],
    "programación": [
      {"sala": 5, "hora_inicio": "19:15"},
      {"sala": 22, "hora_inicio": "22:30"}
    ]
  }
];

// Ruta para mostrar cartelera
router.get("/", function(req, res, next) {
  res.render("cartelera", { peliculas: cartelera });
});

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
module.exports = router;
