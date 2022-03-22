import express  from "express";
import { Router } from "express";
import Contenedor from "./Contenedor.js";
import random from "random"; //libreria random 
const app = express()
const route = Router()
new Contenedor('productos').save({
    title: 'sandia',
    price: 124,
    thumbnail: 'img'
})

new Contenedor('productos').save({
    title: 'mani',
    price: 26,
    thumbnail: 'img'
})
new Contenedor('productos').save({
    title: 'melon',
    price: 60,
    thumbnail: 'img'
})
route.get('/productos', (req, res)=>{
    //devuelve un array con los productos disponibles en el sever
    const all = new Contenedor('productos').getAll()
    res.send(all)
})
route.get('/productoRandom', (req, res)=>{
    //devuelve un producto al azar entre todos los disponibles (yo lo voy a hacer por medio de su id)
    const randomOBj = new Contenedor('productos').getById(random.int(1,Contenedor.id-1))
    res.send(randomOBj)
})
app.use(route)
const PORT = process.env.PORT || 8080 
app.listen(PORT, ()=>{console.log(`server listening on ${PORT}`)})