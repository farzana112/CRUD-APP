import express from "express"

import { homeRoutes,add_user,update_user } from "../services/render.js"

import { create,customer_delete,find,update } from "../controller/controller.js"

const route=express.Router()
//@desc root route
// method GET


route.get("/",homeRoutes)


//@desc add users
// method GET


route.get("/add-user",add_user)


//@desc update users
// method GET

route.get("/update-user",update_user)

// API

route.post("/api/users",create)
route.get("/api/users",find)
route.put("/api/users/:id",update)
route.delete("/api/users/:id",customer_delete)


export default route