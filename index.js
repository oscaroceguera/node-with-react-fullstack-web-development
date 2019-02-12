const app = require('express')()

app.get('/', (req, res) => {
  res.send({ bye: 'budy' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
