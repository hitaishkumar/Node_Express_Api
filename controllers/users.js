import { v4 as uuidv4 } from 'uuid';


let users = []

export const getAllUser = (req,res) => {
    console.log('users :>> ', users);
    res.send(users)
}

export const createUser = (req ,res) => {
    console.log("Post_Route_Reached" )

    const userId = uuidv4()
    // console.log('req.body :>> ', req.body);
    const user = req.body
    const userWithId = {...user , id:userId}
    users.push(userWithId)
    // res.send("Post Route Reached")
    res.send(users)
}
 export const getUserWithId =   (req , res) => {
    const {id} = req.params

    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
}

export const deleteUserWithId = (req,res) => {
    const {id} = req.params

    users = users.filter((user) => user.id!== id)
    res.send(`user with the id ${id} is deleted from database`)
}

export const patchUserWithId = (req,res)=>{
    const {id} = req.params
    const {firstName , lastName , age} = req.body
    const user = users.find((user) => user.id === id)

    if(firstName) user.firstName = firstName
    if(lastName) user.lastName = lastName
    if(age) user.age = age

    res.send(`user with id ${id} and name ${firstName} is pathched`)
}