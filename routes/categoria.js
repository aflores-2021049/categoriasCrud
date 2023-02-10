//Importaciones
const { Router } = require('express');
const { getCategoria, postCategoria, putCategoria, deleteCategoria } = require('../controllers/categoria');


const router = Router();

router.get('/getVer', getCategoria);

router.post('/AgregarCategoria', postCategoria);

router.put('/editarCategoria/:id', putCategoria);

router.delete('/EliminarCategoria/:id', deleteCategoria);

module.exports = router;