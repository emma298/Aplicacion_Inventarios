const  express  = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// importando rutas de usuario
const userRoute = require('./routes/user.route');
const itemRoute = require('./routes/item.route');
const personaRoute = require('./routes/persona.route');
const ubicacionRoute = require('./routes/ubicacion.route');
const asignacionRoute = require('./routes/asignacion.route');
const inventarioRoute = require('./routes/inventario.route');


const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de APIs version 1.0.0');
})

// Tareas CRUD 
// C - Create -> post 
// R -Recuperacion -> get 
// U - update -> put
// D - Delate -> delate

// endpoint para coleccion de usuarios
app.use('/api/users', userRoute);

// Endpoint para la colección de inventario
app.use('/api/items', itemRoute);
app.use('/api/personas', personaRoute);
app.use('/api/ubicaciones', ubicacionRoute);
app.use('/api/asignaciones', asignacionRoute);
app.use('/api/inventarios', inventarioRoute);


mongoose.connect('mongodb+srv://2311081047:<db_password>@cluster0.n0buw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Se establecio la conexion a base de datos exitosamente');
    app.listen(3000, () => {
        console.log('Servidor trabajando en el puerto 3000');
    });
    
})
.catch (() => console.log('Ocurrio un error en la conexion a la base de datos'));


