function Type(text)
{
document.getElementById("txt").innerHTML="";
   var i = 0;
   var texta="";
   texta.length=0;
     texta=text;
            function type() {
                if (i < texta.length) {
                    if(texta.charAt(i)=="&"){
                    document.getElementById("txt").innerHTML += "<br>";
                    }else{
                    document.getElementById("txt").innerHTML += texta.charAt(i);
                    }
                    i++;
                    setTimeout(type, 50);
                }
            }
            type();
}
var text = `
As King Class we are the leading socialites in real time.
&To make interactions easier we developed a solution.&
Anyone on the web can find us here.
`;
Type(text)
function home(){
    window.location.href="index.html";
}
function magazine(){
    window.location.href="magazine.html";
}
function social(){
    window.location.href="social.html";
}
function about(){
    window.location.href="about.html";
}