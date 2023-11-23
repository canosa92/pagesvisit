let contador = document.getElementById('contadorVisitas')
let btn = document.getElementById('btnReestablecer')

let contadorVisitas=()=>{

    let visitaspagina = localStorage.getItem('visitas')
        visitaspagina++
        localStorage.setItem('visitas', visitaspagina)
   
    contador.innerHTML = localStorage.getItem('visitas')
    
    }


    btn.addEventListener('click',()=>{
        localStorage.setItem('visitas', 0)
        contador.innerHTML = localStorage.getItem('visitas')
    })

contadorVisitas()
