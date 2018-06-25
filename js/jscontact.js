function control(){
    var textbox=document.getElementById("textbox1").value;
    var textarea=document.getElementById("textarea1").value;
    var mailbox=document.getElementById("mailbox1").value;
    if (textbox=="" && textarea=="" && mailbox==""){
        alert("Lütfen formdaki boş alanları eksiksiz doldurunuz.");
        } 
    else if ((textbox!="" && textarea!="") && mailbox==""){
        alert("Lütfen formdaki Mail alanını eksiksiz doldurunuz.");
    }
    else if((textbox=="" || textarea=="") && mailbox!=""){
        alert("Lütfen formdaki Ad  Soyad ya da Mesaj alanlarını boş bırakmayınız.");
    }
}
  
    
  
/*
window.onload = removeFunc;

function removeFunc(){
    var remove = document.querySelectorAll("div");
    remove[(remove.length)-1].remove(); // element.remove();
    
    
    setTimeout(removeIframe, 500);
}

function removeIframe() {
    var remove = document.querySelectorAll("iframe");
    if (remove.length > 0) {
        remove[(remove.length)-1].remove(); // element.remove();
    }
    else
        setTimeout(removeIframe, 500);
}*/