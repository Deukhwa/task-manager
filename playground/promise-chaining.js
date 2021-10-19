require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6158ce0103b194f2f9900ec0')
//   .then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
//   })
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((e) => {
//     console.log(e)
//   })

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })

  return count
}

deleteTaskAndCount('615b2eff9daf6ff3e63c6457')
  .then((result) => console.log(result))
  .catch((e) => console.log(e))
