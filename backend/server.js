const express = require('express')
const app = express()
const port = 5001
const db = require('./db/db')

app.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT NOW() as now')
    res.send(`Hello World! DB time: ${rows[0].now}`)
  } catch (err) {
    console.error('DB error', err)
    res.status(500).send('Hello World! (DB connection failed)')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
