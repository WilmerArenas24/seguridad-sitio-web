//Configurar la conexion
//Llamar el componente de mysql
var mysql = require('mysql');

//Establecer los parametros de la conexión
var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'rootroot',
    database: 'seguridad'
});

//Nos conectamos con la BD
connection.connect(function(err){
    if(err){
        console.error('Error al conectar la BD' + err);
    }else{
        console.log('Conectad a la BD');
    }
    
});


module.exports = connection;