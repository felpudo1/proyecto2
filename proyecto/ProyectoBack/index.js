    // En index.js      proyecto back
    const express = require('express'); 
    const path = require('path');
    const cors = require('cors'); 
    const bodyParser = require('body-parser'); 
    const authRouter = require('./routes/auth'); 
    const nodemailer = require ('nodemailer');
    var transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        post: 587,
        secure: false, 
        auth:
        {
            user: 'yasmeen.paucek58@ethereal.email',
            pass: 'BBypXcHJBx7dzV68Pj'
        }
    }); 





    //aca traemos el router qe creamos en ./routes/auth.js
    const app = express();
    const PORT = 3005;    
    app.use(express.static(path.join(__dirname, "public")));
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
    // Solo en desarrollo
    app.use(cors());    
    app.use('/auth', authRouter); 

   ////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////     


    //redireccionamiento de las rutas para verif conexion
    app.post('/ping', (req, res)=>{
    return res.send("pong") 
    })
    
    app.post('/contacto', function(req, res){
        console.log("prueba de contacto", req.body.mensaje)
    var mailOptions={
     from: "juan.sequeira@gmail.com",
     to: "juan.sequeira@gmail.com",
     subject: req.body.mensaje,
     text:req.body.mensaje
    };
    transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
        res.send(error)
    }
    else {
        console.log('Email sent' + info.response)
        res.send("envio exitoso")
        }        
    })

    });



    //escucha puerto
    app.listen(PORT, function () {
    console.log(`El servidor quedo corriendo en el puerto ${PORT}`);
 });