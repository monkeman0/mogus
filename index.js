var interval;
var win;
var iframe;
document.getElementById("checkbox").hidden=true;
document.getElementById("fillLabel").hidden=true;
document.getElementById("checkbox2").hidden=true;
document.getElementById("fillLabel2").hidden=true;
let inputId;
let Pentered = 0;
function openlink() {
    if(Pentered==0){
        if(document.getElementById("wordpass").value=="qwe"){
            Pentered=1;
            document.getElementById("checkbox").hidden=false;
            document.getElementById("fillLabel").hidden=false;
            document.getElementById("checkbox2").hidden=false;
            document.getElementById("fillLabel2").hidden=false;
            document.getElementById("password").innerHTML="enter url:";
            document.getElementById("wordpass").id="url";
            document.getElementById("url").value="";
        }else{
            document.getElementById("output").innerHTML="incorrect password";
        }
    }else{
        if(document.getElementById("checkbox2").checked == true){
            window.focus();
            if(document.getElementById("checkbox").checked == true){
                inputId = "https://"+document.getElementById("url").value;
            }else{
                inputId = document.getElementById("url").value;
            }
            win = window.open();
            setTimeout(wait,1)
            function wait(){
                win.document.body.style.margin = '0';
                win.document.body.style.height = '100vh';
                iframe = win.document.createElement('iframe');
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.margin = '0';
                iframe.src = inputId;
                win.document.body.appendChild(iframe);
            }
        }else{
            if(document.getElementById("checkbox").checked == true){
                inputId = document.getElementById("url")
            window.open(url = "https://"+inputId.value)
            }else{
                inputId = document.getElementById("url")
                window.open(url = inputId.value)
            }
        }
    }
}