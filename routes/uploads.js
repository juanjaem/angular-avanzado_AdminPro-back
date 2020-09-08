/*
    Path: '/api/uploads'
*/

const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { fileUpload, retornaImagen } = require('../controllers/uploads');
const expressFileUpload = require('express-fileupload');

const router = Router();

// Middleware para capturar los archivos enviados
router.use(expressFileUpload());

router.put('/:tipo/:id',[validarJWT], fileUpload);

router.get('/:tipo/:foto', retornaImagen);


module.exports = router;