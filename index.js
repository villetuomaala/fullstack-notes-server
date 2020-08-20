require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const Note = require('./models/note')


const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(express.static('build'))
app.use(cors())
app.use(express.json()) 
app.use(requestLogger)


app.get('/api', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id).then(note => response.json(note))
})

app.get('/api/notes', (req, res) => {
  Note.find({}).then(notes => res.json(notes))
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(n => n.id != id)
  response.status(204).end()
})

app.post('/api/notes', (request, response) => {
  const body = request.body
  
  if (!body.content) return response.status(400).json({ error: "content missing " })

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date()
  })

  note.save().then(n => {
    response.json(n)
  })

  response.json(note)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})