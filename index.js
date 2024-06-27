const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {//app k '/' route a listen korte bolche..zodi kono request ase..thle response pathabo hello world.
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send('You are using twitter')
})

app.get('/login',(req,res)=>{//here we have to restart or run again....(kichu change hole)
  res.send('<h1>please login here</h1>')
})

app.get('/youtube',(req,res)=>{
  res.send('<h2>you are using youtube</h2>')
})

app.listen(port, () => {//eta port e ache...successfully listen korle console.log hbe....
  console.log(`Example app listening on port ${port}`)
})