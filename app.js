const express = require("express")

const app = express()

const port = 5000

// Rutas

app.get('/api', (req, res) => {

    return res.status(200).json({message: "Bienvenido al Api :)"})

})


// División
app.get('/division', (req, res) =>{
    // /division?num1=1250&&num2=3
    let result = parseInt(req.query.num1) / parseInt(req.query.num2) //NaN
    console.log(req.query)
    console.log(result)
    return res.status(200).json({result: result})
    
})

app.listen(port, () => console.log(`Escuchando el puerto ${port}`))
