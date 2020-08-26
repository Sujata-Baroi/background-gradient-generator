var col1=document.querySelector("#col1");
var col2=document.querySelector("#col2");
var css=document.querySelector("h4");
var body=document.querySelector("body");
css.innerHTML="linear-gradient(to right, "+col1.value+", "+col2.value+")"
function grad()
{
    body.style.background="linear-gradient(to right, "+col1.value+", "+col2.value+")";
    css.innerHTML="linear-gradient(to right, "+col1.value+", "+col2.value+")";
}
col1.addEventListener("input",grad);
col2.addEventListener("input",grad);
