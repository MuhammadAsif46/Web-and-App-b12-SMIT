import express from "express"
import pool from './db/db.js';

const app = express()
app.use(express.json())

const PORT = process.env.PG_PORT || 5432

app.get('/', (req, res) => {
    res.send("hello smit")
})

// console.log("postgres-->", pool);


// CREATE
app.post('/add-todo', async (req, res) => {
  const { title } = req.body;
  const newTodo = await pool.query(
    'INSERT INTO todos (title) VALUES ($1) RETURNING *',
    [title]
  );
  res.json(newTodo.rows[0]);
});

// READ ALL
app.get('/todos', async (req, res) => {
  console.log("todos-", req);
  
  const allTodos = await pool.query('SELECT * FROM todos');
  console.log("allTodos-");

  res.json(allTodos.rows);
});

// READ ONE
app.get('/todo/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
  res.json(todo.rows[0]);
});

// UPDATE
app.put('/todo/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  await pool.query(
    'UPDATE todos SET title = $1, completed = $2 WHERE id = $3',
    [title, completed, id]
  );
  res.send('Todo updated');
});

// DELETE
app.delete('/todo/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM todos WHERE id = $1', [id]);
  res.send('Todo deleted');
});


app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
})