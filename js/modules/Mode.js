export const Mode = ()=>{
    const btnMode = document.getElementById('mode-btn')

    btnMode.addEventListener('click', ()=>{
        document.body.classList.toggle('dark')

        if(document.body.classList.contains("dark")){
            btnMode.innerHTML = 
            `
                <i class='bx bx-sun' ></i>
                Ligth Mode
            `

            localStorage.setItem('dark-mode', 'true')
        }else{
            btnMode.innerHTML = 
            `
                <i class='bx bx-moon'></i>
                Dark Mode
            `

            localStorage.setItem('dark-mode', 'false')
        }
    })

    if(localStorage.getItem('dark-mode') === 'true'){
        document.body.classList.add('dark')
    }else{
        document.body.className.remove('dark')
    }
}