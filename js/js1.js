/* Footer'daki yazı kısmı*/
function changefooter(){
    let changes = document.getElementById("cfooter");
    changes.id="rcfooter";
    setTimeout(rechangefooter,2000)
}
function rechangefooter(){
    let changes = document.getElementById("rcfooter")
    changes.id="cfooter"
    setTimeout(changefooter,2000)
}
setTimeout(changefooter,2000)

function msg(){
    var msg = "Blog sayfalarım tasarım aşamasındadır.";
    alert(msg);
};

/* webhost reklam silme 
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