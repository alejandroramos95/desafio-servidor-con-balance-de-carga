// router import
const express = require('express')
const router = express.Router()
const { fork } = require('child_process')
const child = fork('./services/Random.js')

router.get('/randoms', (req, res) => {
  const cant = req.query.cant ? req.query.cant : 100000000

  child.send({ cantidad: cant })
  child.on('message', (countArrayNumbersObj) => {
    res.send(countArrayNumbersObj)
  })
})

// router export
module.exports = router
