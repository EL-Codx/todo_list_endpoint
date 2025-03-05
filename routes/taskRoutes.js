const express = require('express');
const { getTodo, getTodoById, createTodo, updateTodo, deleteTodo } = require('../controllers/userController');

const router = express.Router();

router.get('/', getTodo);
router.get('/:id', getTodoById);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
