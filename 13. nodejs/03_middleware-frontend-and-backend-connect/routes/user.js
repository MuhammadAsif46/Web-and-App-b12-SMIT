import express from "express"

const router = express.Router()

const users = [
    {
        id: 1,
        name: "Jhon",
        email: 'jhon@gmail.com'
    },
    {
        id: 2,
        name: "Smith",
        email: 'smith@gmail.com'
    },
    {
        id: 3,
        name: "Clerk",
        email: 'clerk@gmail.com'
    },
]


router.get('/', (req, res) => {
    res.status(200).send(users)
})






// app.get('/', (req, res) => {
//     res.send("hello smit")
// })

// app.get('/users', (req, res) => {
//     res.send(users)
// })

// app.post('/user', (req, res) => {
//     try {
//         const { name, email } = req.body;
//         if (name.trim() && email.trim()) {
//             users.push({ id: users.length + 1, ...req.body })
//             res.status(200).send({ status: 200, message: "User added Successfully" })
//         } else {
//             res.status(422).send({ status: 422, message: "Email or Name is reqiured" })
//         }
//     } catch(err){
//         res.status(500).send({ status: 500, message: "Internal Server Error" })
//     }
// })


// app.delete('/user/:userid', (req, res) => {
//     // const { id } = req.params
//     const index = users.findIndex(user => user.id === Number(req.params.userid))
//     users.splice(index, 1)
//     res.send({ message: "User Delete Successfully" })
// })

// app.put('/user/:id', (req, res) => {
//     // const { id } = req.params
//     const index = users.findIndex(user => user.id === Number(req.params.id))
//     users.splice(index, 1, { id: Number(req.params.id), ...req.body })
//     res.send({ message: "User Update Successfully" })
// })


export default router;