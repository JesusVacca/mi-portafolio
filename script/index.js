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