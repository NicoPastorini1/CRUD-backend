const mongoose = require('mongoose');
require('dotenv').config({path: 'variable.env'});

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            })
            console.log('DB Conectada')
    } catch (error) {
        console.error(error);
        process.exit(1); // detenemos la app
    }

}

module.exports = conectarDB