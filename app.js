const logos = document.querySelectorAll(".logos div")
logos.forEach((val, index) => {
  val.addEventListener("click", () => {
    for (i = 0; i < logos.length; i++) {
      logos[i].classList.remove("selected-logo")
    }
    val.classList.add("selected-logo")
    let _img = val.children[0]
    let _url = _img.getAttribute("data-src")
    let card_logo = document.getElementsByClassName("card-logo")[0]
    card_logo.setAttribute("src", _url)
    card_logo.classList.add("logo-on")
    document.getElementsByClassName("maincard")[0].style.backgroundImage = "url(img/" + (index + 1) + ".jpg)"
  })
})


document.getElementById("holder-name").addEventListener("keyup", (e) => {
  let _name = e.target.value
  document.getElementsByClassName("card-name")[0].innerHTML = _name
  document.getElementsByClassName("sig-text")[0].innerHTML = _name
})



const number_input = document.getElementById('card-number');
const _span = document.querySelectorAll('.third-sec span');
number_input.addEventListener('input', (e) => {
  const value = e.target.value;
  const value2 = e.target.value;
  for (let i = 0; i < _span.length; i++) {
    if (i < value.length) {
      _span[i].innerHTML = value[i];
    } else {
      _span[i].innerHTML = '*';
    }
  }
});



const number_input2 = document.getElementById('card-number');
const _span2 = document.querySelectorAll('.third-sec2 span');
number_input2.addEventListener('input', (e) => {
  const value2 = e.target.value;
  for (let i = 0; i < _span2.length; i++) {
    if (i < value2.length) {
      _span2[i].innerHTML = value2[i];
    } else {
      _span2[i].innerHTML = '';
    }
  }
});

document.getElementById("cvv").addEventListener("focusin", () => {
  document.getElementsByClassName("card-container")[0].classList.add("card-rotate")
})

document.getElementById("cvv").addEventListener("focusout", () => {
  document.getElementsByClassName("card-container")[0].classList.remove("card-rotate")
})

document.getElementById("cvv").addEventListener("input", (e) => {
  let cvv = e.target.value
  document.getElementsByClassName("cvvtext")[0].innerHTML = cvv
})



document.getElementById("exp-month").addEventListener("change", (e) => {
  let month = e.target.value
  document.getElementsByClassName("month")[0].innerHTML = month

})


document.getElementById("exp-year").addEventListener("change", (e) => {
  let year = e.target.value
  document.getElementsByClassName("year")[0].innerHTML = year

})




function result() {
  let result = document.getElementsByClassName("div-right")[0].children[0]
  document.getElementsByClassName("box-container")[0].classList.add("log-off")
  result.classList.remove("log-off")
  result.classList.remove("card-container")
  result.classList.add("card-container1")
  result.classList.add("animation")
  result.classList.add("card-move")
  document.getElementsByTagName("main")[0].appendChild(result)


  let result1 = document.getElementsByTagName("main")[0].children[0]
  document.getElementsByTagName("main")[0].removeChild(result1) 


  setTimeout(() => {
    result.classList.remove("card-move")

    
  }, 1200);


}