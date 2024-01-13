
var subdiv = document.getElementById('ques1');
var subdiv1 = document.getElementById('ques2');
var subdiv2 = document.getElementById('ques3');

var heading = document.getElementById('head');
var heading1 = document.getElementById('head1');
var para1 = document.createElement('p');
var heading2 = document.getElementById('head2');
var para2 = document.createElement('p');


var button1 = document.getElementById('btn1');

var button2 = document.getElementById('btn2');

var button3 = document.getElementById('btn3');

var line = document.createElement('hr');

var para = document.createElement('p');
para.innerText='my favorate place name is kochin';


var deldiv = document.createElement('div')
subdiv.append(deldiv);
var deldiv1 = document.createElement('div')
subdiv1.append(deldiv1);
var deldiv2 = document.createElement('div')
subdiv2.append(deldiv2);

var a = 1;
var b = 1;
var c = 1;
function plus(x){
    if(x==btn1){
        if(a==1){
            button1.innerText='-'; 
        button2.innerText='+'; 
        button3.innerText='+'; 
        para.innerText='My favrate place name is kochin';
        para1.innerText='';
        para2.innerText='';
        subdiv1.style.height='50px';
        subdiv2.style.height='50px';
        deldiv.append(line,para);   
        subdiv.style.height='180px';
        a=0;
        }
        else{
            para.innerText='';
            button1.innerText='+'; 
            subdiv.style.height='50px';
            line.remove();
            a=1;
        }
    }else if(x==btn2){
        if(b == 1){
            button1.innerText='+';  
        button2.innerText='-'; 
        button3.innerText='+';
        subdiv.style.height='50px';
        subdiv2.style.height='50px';
        para.innerText='';
        para1.innerText='My favorate flower name is jasmin';
        para2.innerText='';
        deldiv1.append(line,para1);
        subdiv1.style.height='180px';
        b=0;
        }
        else{
            para1.innerText='';
            button2.innerText='+'; 
            subdiv1.style.height='50px';
            line.remove();
            b=1;
        }
    }else 
    {
        if(c == 1){
        button1.innerText='+';
        button2.innerText='+'; 
        button3.innerText='-'; 
        subdiv.style.height='50px';
        subdiv1.style.height='50px';
        para.innerText='';
        para1.innerText='';
        para2.innerText='My favorate person was my special hero dad';
        deldiv2.append(line,para2);
        subdiv2.style.height='180px';
        c=0;
        }
        else{
            para2.innerText='';
            button3.innerText='+'; 
            subdiv2.style.height='50px';
            line.remove();
            c=1;

        }
    }
}


