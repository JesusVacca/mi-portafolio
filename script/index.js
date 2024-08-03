let cambioTitulo = true;
setInterval(()=>{
    if(cambioTitulo){
        document.title = 'Bienvenidos';
        cambioTitulo = !cambioTitulo;
    }else{
        document.title = 'Mi portafolio';
        cambioTitulo = !cambioTitulo;
    }
},4000);



const root = document.getElementById('root');

window.addEventListener('scroll', function(){
    const header = document.getElementById('header');
    const alturaPagina = document.documentElement.scrollHeight;
    const alturaVentana = window.innerHeight;
    const porcentaje = (window.scrollY / (alturaPagina - alturaVentana)) * 100;
    if(porcentaje >= 5){
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

document.getElementById('hamburguesa').addEventListener('click',function(){
    this.classList.toggle('open');
    document.getElementById('nav').classList.toggle('open');
})

const mySkllis = [
    {
        title:"Java",
        porcentaje:90,
        type:"lenguaje"
    },
    {
        title:"Python",
        porcentaje:70,
        type:"lenguaje"
    },
    {
        title:"JavaScript",
        porcentaje:40,
        type:"lenguaje"
    },
    {
        title:"Spring boot",
        porcentaje:60,
        type:"frameWork"
    },
    {
        title:"Django",
        porcentaje:40,
        type:"frameWork"
    },
    {
        title:"MySql",
        porcentaje:50,
        type:"db"
    },
    {
        title:"Html",
        porcentaje:80,
        type:"maquetado"
    },
    {
        title:"Css",
        porcentaje:70,
        type:"estilos"
    },
    
];

function loadSkllis(type = "all"){
    const content = document.getElementById('contentSkllis');
    content.innerHTML = '';
    

    if(type == "all"){
        mySkllis.forEach(sklli=>{
            const item = document.createElement('div');
            const progress = document.createElement('div');
            const contentProgress = document.createElement('div');
            const h3 = document.createElement('h3');
    
            // Asignamos las clases
            item.className = 'items__skills';
            progress.className = 'item__progress'
            contentProgress.className = 'content__progress';
    
            h3.innerHTML = sklli.title;
            const porcentaje = sklli.porcentaje * 100 / 100;
            progress.style.width = `${porcentaje}%`;
    
            contentProgress.appendChild(progress);
            item.append(h3,contentProgress);
    
            content.appendChild(item);
        })
    }else{
        const data = mySkllis.filter(skill => skill.type == type);
        data.forEach(sklli=>{
            const item = document.createElement('div');
            const progress = document.createElement('div');
            const contentProgress = document.createElement('div');
            const h3 = document.createElement('h3');
    
            // Asignamos las clases
            item.className = 'items__skills';
            progress.className = 'item__progress'
            contentProgress.className = 'content__progress';
    
            h3.innerHTML = sklli.title;
            const porcentaje = sklli.porcentaje * 100 / 100;
            progress.style.width = `${porcentaje}%`;
    
            contentProgress.appendChild(progress);
            item.append(h3,contentProgress);
    
            content.appendChild(item);
        });
    }

   
}
const listButton = document.querySelectorAll('.nav__skills button');
listButton.forEach((button, index)=>{
    button.addEventListener('click',function(){
        listButton.forEach(b=>{
            if(b.classList.contains('focus')) b.classList.remove('focus');
        });
        button.classList.add('focus');
        switch (index) {
            case 0:
                loadSkllis();
                break;
            case 1:
                loadSkllis("lenguaje");
                break;
            case 2:
                loadSkllis("frameWork");
                break;
            case 3:
                loadSkllis("db");
                break;
        }
    })
})
listButton[0].click();