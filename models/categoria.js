const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema ({
    
    tiposCategoria: {
        type: String,
        required: [true, 'El tipo de categoria es obligatorio']
    },
    estadosCategoria: {
        type: Boolean,
        default: true
    },
    img: {
        type: String
    }
});

module.exports = model('Categoria', CategoriaSchema);