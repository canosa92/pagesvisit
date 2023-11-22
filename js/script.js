let contador = document.getElementById('contadorVisitas')


let contadorVisitas=()=>{
    let visitaspagina = localStorage.getItem('visitas')
    if(visitaspagina){   
        visitaspagina++
        localStorage.setItem('visitas', visitaspagina)
    }else{
        localStorage.setItem('visitas', 0)
    }  
    contador.innerHTML = localStorage.getItem('visitas')
    
    }

 window.onload=contadorVisitas()
