// rutas para productos 
const express =  require('express');
const router = express.Router();
const productoController = require('../controller/productoController');

// api/productos

// router.post();

router.post('/', productoController.crearProducto)
router.get('/', productoController.obtenerProducto)
router.put('/:id', productoController.actualizarProducto)
router.get('/:id', productoController.obtenerProducto)
router.delete('/:id', productoController.eliminarProducto)

module.exports = router;