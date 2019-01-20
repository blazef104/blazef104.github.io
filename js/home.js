function rotate(){
  var flame = document.getElementsByClassName('logo')[0]
  flame.style.animationName = "rot"
  flame.style.animationDuration = "4s"
  setTimeout(function (){
    document.getElementById('scritta').style.display = "none"
    var pr = document.getElementsByClassName('prof')[0]
    document.getElementsByClassName('logo')[0].style.display = "none"
    pr.style.display = "block"
    pr.style.animationName = "rot1"
    pr.style.animationDuration = "2s"
  }, 3000);
}

function rotate1(){
  var flame = document.getElementsByClassName('prof')[0]
  flame.style.animationName = "rot"
  flame.style.animationDuration = "4s"
  setTimeout(function (){
    document.getElementById('scritta').style.display = "block"
    var pr = document.getElementsByClassName('logo')[0]
    document.getElementsByClassName('prof')[0].style.display = "none"
    pr.style.display = "block"
    pr.style.animationName = "rot1"
    pr.style.animationDuration = "2s"
  }, 3000);
}
