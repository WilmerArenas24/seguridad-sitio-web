// Configurar con express el servidor de la app
const express = require('express');
const app = express();
const cors = require('cors');

// Importar la conexión desde conexion.js
const mySQL = require('./conexion');

app.use(cors()); //Habilita que en todos los dominios se hagan peticiones
app.use(express.json());

app.post('/login', (pedido, respuesta) => {
    mySQL.query('SELECT COUNT(*) AS existe FROM usuarios WHERE user = "' + pedido.body.user + '" AND pass = "' + pedido.body.pass + '"', function (error, resultados) {
        if (error) throw error;
        respuesta.send(resultados[0]);
    })

});


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
