const textarea = document.getElementById("text-area");

function send_tweet(){
    if(textarea.value.length === 0){
        launch_toast("Please enter a text");
        return;
    }   
    if(document.getSelection().toString()){
        const selection = document.getSelection().toString();
        const URL = location.href;
        const finalurl = `https://twitter.com/intent/tweet?hashtags=text&url=${URL}&text=${selection}`;
        window.open(finalurl, '_blank');
    }
}

function launch_toast(msg) {
  var x = document.getElementById("toast");
  var text = document.getElementById("desc");
  text.innerText = msg;
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 5000);
}