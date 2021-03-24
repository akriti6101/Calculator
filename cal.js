var s="";
var p="";var t="";
var m="";var h="";
function one()
{ document.getElementById('hid').value=h;
    
    document.getElementById('input').value=p+"1"
    document.getElementById('hid').value=h+"1";
    h=h+"1";
    p=document.getElementById('input').value
}function two()
{
    document.getElementById('hid').value=h;
    document.getElementById('input').value=p+"2"
    document.getElementById('hid').value=h+"2";
    h=h+"2";
    p=document.getElementById('input').value
}
function three()
{  document.getElementById('hid').value=h;
    document.getElementById('input').value=p+"3"
    document.getElementById('hid').value=h+"3";
    h=h+"3";
    p=document.getElementById('input').value
}
function four()
{ document.getElementById('hid').value=h;
    document.getElementById('input').value=p+"4"
    document.getElementById('hid').value=h+"4";
    h=h+"4";
    p=document.getElementById('input').value
}
function five()
{   document.getElementById('hid').value=h;
    document.getElementById('input').value=p+"5"
    document.getElementById('hid').value=h+"5";
    h=h+"5";
    p=document.getElementById('input').value
}
function six()
{  document.getElementById('hid').value=h;
    document.getElementById('input').value=p+"6"
    document.getElementById('hid').value=h+"6";
    h=h+"6";
    p=document.getElementById('input').value
}
function seven()
{  document.getElementById('hid').value=h;
    document.getElementById('input').value=p+"7"
    document.getElementById('hid').value=h+"7";
    h=h+"7";
    p=document.getElementById('input').value
}
function eight()
{document.getElementById('hid').value=h;
    document.getElementById('input').value=p+"8"
    document.getElementById('hid').value=h+"8";
    h=h+"8";
    p=document.getElementById('input').value
}
function nine()
{document.getElementById('hid').value=h;
    document.getElementById('input').value=p+"9"
    document.getElementById('hid').value=h+"9";
    h=h+"9";
    p=document.getElementById('input').value
}
function zero()
{document.getElementById('hid').value=h;
    document.getElementById('input').value=p+"0"
    document.getElementById('hid').value=h+"0";
    h=h+"0";
    p=document.getElementById('input').value
}
function add()
{   t=p;
    document.getElementById('hid').value=h+"+";
    h=h+"+";
    document.getElementById('input').value="+"
    m=document.getElementById('input').value
    p=""
    
 
}
function sub()
{
    t=p;
    document.getElementById('hid').value=h+"-";
    h=h+"-";
    document.getElementById('input').value="-"
    m=document.getElementById('input').value
    p=""
}
function div()
{
    t=p;
    document.getElementById('hid').value=h+"/";
    h=h+"/";
    document.getElementById('input').value="/"
    m=document.getElementById('input').value
    p=""
}
function mul()
{
    t=p;
    document.getElementById('hid').value=h+"x";
    h=h+"x";
    document.getElementById('hid').value=h;
    document.getElementById('input').value="x"
   
    m= document.getElementById('input').value
    p=""
}
function c()
{
    document.getElementById('hid').value="";
    document.getElementById('input').value="";
    h="";
    p="";
    t="";
}




function cal()
{if(m=="+")
    var s=parseFloat(t)+parseFloat(p)
    else if(m=="-")
    var s=parseFloat(t)-parseFloat(p)
    else if(m=="x")
    var s=parseFloat(t)*parseFloat(p)
    else if(m=="/")
    var s=parseFloat(t)/parseFloat(p)
     
    
  p=document.getElementById('input').value=String(s)
  h=p;

}