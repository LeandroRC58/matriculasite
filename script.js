const BASE = "https://raw.githubusercontent.com/LeandroRC58/matriculasite/master/alunos/";

document.getElementById("antonio").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"antoniocarlos.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}
document.getElementById("carlos").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"carloseduardo.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}
document.getElementById("davi").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"davimoraes.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}
document.getElementById("eduardo").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"eduardojose.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}
document.getElementById("enzo").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"enzodimitri.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}
document.getElementById("ewerton").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"ewertondejesus.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}
document.getElementById("felipe").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"felipekaue.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}
document.getElementById("giovani").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"giovanidossantos.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}
document.getElementById("joao").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"joaopaulo.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}
document.getElementById("leandro").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"leandroribeiro.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}
document.getElementById("lucas").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"lucasdesouza.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}
document.getElementById("maria").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"mariavaldete.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}
document.getElementById("mauricio").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"mauriciolobato.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}
document.getElementById("michel").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"michelfarias.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}
document.getElementById("paulo").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"paulothiago.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}
document.getElementById("rodrigo").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"rodrigosousa.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}
document.getElementById("tiago").onclick = function()
{
var ajax = new XMLHttpRequest();
ajax.open("GET", BASE+"tiagojatahy.txt",true);
ajax.send();
ajax.addEventListener("readystatechange",function()
{
    if (ajax.readyState===4&&ajax.status===200)
    {
            document.getElementById("retorno").innerHTML = ajax.responseText;
    }
});
}