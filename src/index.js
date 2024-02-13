import express from "express"
import productsRouter from "./routes/productsRouter.js"
import upload from "./config/multer.js"
import { __dirname } from './path.js'

const app = express()
const PORT = 8000


app.use(express.json())

app.use('/static', express.static(__dirname + '/public'))

app.use('/products', productsRouter)
app.post('/upload',upload.single('product'), (req, res) => {

    try {
        console.log(req.file)
        res.status(200).send("Imagen cargada")
    } catch (error) {
        res.status(500).send("Hay un error al cargar imagen")
    }
    
} )


app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})