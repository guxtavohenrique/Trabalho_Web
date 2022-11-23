/*constante para o botão de subir */

const botao = document.querySelector(".Ir-para-o-topo");
    botao.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

/*tempo de inatividade */

const inatividade = function() {
    let time;

    window.onload = resertTime;
    document.onmousemove = resertTime;
    document.onkeydown = resertTime;
    
    function doSomething() {

    }

    function resertTime() {
        clearTimeout(time);
        time = setTimeout(doSomething, 5000)
    }
};


