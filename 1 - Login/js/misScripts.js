function login(){
    let miUsuario = document.getElementById('txtUsuario').value;
    let miPass = document.getElementById('txtPass').value;

    try {

        fetch('http://localhost:3000/login',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },

            body: JSON.stringify({
                user:miUsuario,
                pass:miPass
            })
        })
        .then(respuesta => respuesta.json())
        .then(data => {
            if(data.existe ==1)
                window.location.href = "home.html";
            else
            console.log("Login correcto");
        })
        .catch(error=> {throw new Error("Error en la solicitud")})
        
    } catch (error) {

        console.log(error)
        
    }


}