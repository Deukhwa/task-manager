const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// Expree Middleware

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next()
//   }
// })

// app.use((req, res, next) => {
//   res.status(503).send('Under Maintance.')
// })

app.use(express.json()) // Automatically parse incoming JSON to an object so we can access it in our app handler
app.use(userRouter)
app.use(taskRouter)

// Middleware : new request -> do something -> run route handler

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {
//     expiresIn: '7 days',
//   })
//   console.log(token)

//   const data = jwt.verify(token, 'thisismynewcourse')
//   console.log(data)
// }

// myFunction()

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  // const task = await Task.findById('61685db0f23b105147ed91db')
  // await task.populate(['owner'])
  // console.log(task.owner)
  // const user = await User.findById('61685ce530428d719ff6aebf')
  // await user.populate(['tasks'])
  // console.log(user.tasks)
}
main()
