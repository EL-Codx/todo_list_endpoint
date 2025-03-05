const db = require('../config/db')

const Todo = {
    getAll: (handler)=>{db.query("SELECT * FROM todos", handler);},

    getById: (id, handler)=>{db.query("SELECT * FROM todos WHERE task_id=?", [id], handler);},

    create: (new_data, handler)=>{
        db.query('INSERT INTO todos SET ?', new_data, handler);
    },

    update: (id, new_data, handler)=>{
        db.query("UPDATE todos SET ? WHERE task_id=?", [new_data, id], handler)
    },

    delete: (id, handler)=>{db.query("DELETE FROM todos WHERE task_id=?", [id], handler)}
}

module.exports = Todo;