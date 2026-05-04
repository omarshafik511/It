let button = document.querySelector("#btn");

button.onclick = function () {
  let text = document.querySelector("#msg").value;

  if (text === "") {
   alert("Please write something first!");
  } 
  else {
    alert("Your message has been sent!");
  }
};