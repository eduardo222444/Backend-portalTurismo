const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

// Criar novo contato
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const contact = await Contact.create({ name, email, message });
    res.status(201).json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar contato.' });
  }
});

// Listar todos os contatos
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar contatos.' });
  }
});

module.exports = router;
