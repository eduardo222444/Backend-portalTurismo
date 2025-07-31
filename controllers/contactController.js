const express = require('express');
const router = express.router();
const contact = require('../controllers/contactController');
 
// Criar um novo contato
router.post('/', contact.listContact);
 
// Listar todos os usuários
router.get('/', contact.listContact);
 
module.exports = router;
 