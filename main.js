var imges = document.getElementsByClassName("img-item");

for (var i = 0; i < imges.length; i++) {
  imges[i].addEventListener("click", function (e) {
    var imgSrc = e.target.getAttribute("src");
    document.getElementById("mainImg").setAttribute("src", imgSrc);
  });
}

function display(name = "zeyad", age = 21, salary = 18000) {
  console.log(`name : ${name} || age : ${age}  || salary : ${salary}`);
}
display("ahmed");
