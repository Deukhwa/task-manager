const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

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

// Setting to save an image to a destination called 'images'
// const multer = require('multer')
// const upload = multer({
//   dest: 'images',
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error('Please upload a word document'))
//     }

//     cb(undefined, true)

// cb(new Error('File must be a PDF'))
// cb(undefined, true)
// cb(undefined, false)
//   },
// })

// upload.single('upload') : finding a key named 'upload' and saving to the dest.
// app.post(
//   '/upload',
//   upload.single('upload'),
//   (req, res) => {
//     res.send()
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
//   }
// )

app.use(express.json()) // Automatically parse incoming JSON to an object so we can access it in our app handler
app.use(userRouter)
app.use(taskRouter)

// // Middleware : new request -> do something -> run route handler

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
