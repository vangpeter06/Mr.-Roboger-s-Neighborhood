function beepBoom(inputNumber) {
  let arrayNumber = []; 
  for (let i = 0; i <= inputNumber; i++) {
    arrayNumber.push(i);
  };
  return arrayNumber;
 };
  
$(document).ready(function(){
  $("form#counting").submit(function (event) {
    event.preventDefault();
    const inputNumber = $("#inputNumber").val(); 
    const results = beepBoom(inputNumber);
     $("#output").text(results);
  });
});

