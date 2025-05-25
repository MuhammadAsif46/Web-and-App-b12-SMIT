// console.log("HELLO WORLD");

// for (let i = 0; i < 10; i++) {
//     console.log("HELLO WORLD", i)
// }

import express from "express"
// const express = require("express")

const app = express()

app.use(express.json())


const PORT = 5000

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


app.get('/', (req, res) => {
    res.send("hello smit")
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/user', (req, res) => {
    users.push({ id: users.length + 1, ...req.body })
    res.send({ message: "User added Successfully" })
})


app.delete('/user/:userid', (req, res) => {
    // const { id } = req.params
    const index = users.findIndex(user => user.id === Number(req.params.userid))
    users.splice(index, 1)
    res.send({ message: "User Delete Successfully" })
})

app.put('/user/:id', (req, res) => {
    // const { id } = req.params
    const index = users.findIndex(user => user.id === Number(req.params.id))
    users.splice(index, 1, {id: Number(req.params.id), ...req.body})
    res.send({ message: "User Update Successfully" })
})


app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
})

