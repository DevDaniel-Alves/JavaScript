let input = document.querySelector("input")
let button = document.querySelector("button")
let res = document.querySelector(".res")

button.click = function(){
  let texto = input.value
  res.textContent = texto
}