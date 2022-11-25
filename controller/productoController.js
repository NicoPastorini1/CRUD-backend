const Producto = require("../models/Producto");


exports.crearProducto = async (req, res) => {

    try {
        let producto;

        // Creamos nuestro producto
        producto = new Producto(req.body);

        await producto.save();
        return res.send(producto);
        
    } catch (error) {
        console.log(error);
        return res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async (req, res) => {

    try {

        const productos = await Producto.find();
        return res.json(Productos)
        
    } catch (error) {
        console.log(error);
        return res.status(500).send('Hubo un error');
    }

}

exports.actualizarProducto = async (req, res) => {

    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            return res.status(404).json({ msg: 'No existe el producto' })
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id },producto, { new: true} )
        return res.json(producto);
        
    } catch (error) {
        console.log(error);
        return res.status(500).send('Hubo un error');
    }
}


exports.obtenerProducto = async (req, res) => {

    try {
        let producto = await Producto.find(req.params.id);

        if(!producto) {
            return res.status(404).json({ msg: 'No existe el producto' })
        }
       
        return res.json(producto);
        
    } catch (error) {
        console.log(error);
        return res.status(500).send('Hubo un error');
    }
}

exports.eliminarProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            return res.status(404).json({ msg: 'No existe el producto' })
        }
       
        await Producto.findOneAndRemove({ _id: req.params.id })
        return res.json({ msg: 'Producto eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        return res.status(500).send('Hubo un error');
    }
}