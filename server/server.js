const express = require('express');
const app = express();
const cors = require('cors')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/eagles2021todo', { useNewUrlParser: true, useUnifiedTopology: true });

const Todo = mongoose.model('Todo', { title: String });

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// const test = [
//   { title: 'test', id: 323223 },
//   { title: 'test', id: 1313 },
//   { title: 'test', id: 3232 }
// ]
// Todo.insertMany(test)

app.route('/')
  .get(async (req, res) => {
    const list = await Todo.find()
    res.json(list)
  })
  .post(async (req, res) => {

  })
  .delete(async (req, res) => {
    console.log('  --req.body   ===>', req.body);
    await Todo.findByIdAndDelete(req.body.id)
    const list = await Todo.find()
    res.json(list)
  })

app.listen(8080, () => {
  console.log('Hallo from Back!!!');
})
