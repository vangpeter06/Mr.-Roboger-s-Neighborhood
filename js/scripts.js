function beepBoom(inputNumber) {
  let arrayNumber = []; 
  for (let i = 0; i <= inputNumber; i++) {
    arrayNumber.push(i.toString());
    if ((arrayNumber[i]).match("1")) {
      arrayNumber[i] = ("BEEP!");
    }
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

