console.log("Memória Viva de Ivaí carregado.");

const botaoMenu = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");

if(botaoMenu){

    botaoMenu.addEventListener("click", ()=>{

        menu.classList.toggle("ativo");

    });

}