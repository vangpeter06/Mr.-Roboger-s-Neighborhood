function beepBoop(inputNumber) {
  let arrayNumber = []; 
  for (let i = 0; i <= inputNumber; i++) {
    arrayNumber.push(i.toString());
    if ((arrayNumber[i]).match("1")) {
      arrayNumber[i] = ("BEEP!");
    } else if ((arrayNumber[i]).match("2")) {
      arrayNumber[i] = ("BOOP!");
    } else if ((arrayNumber[i]).match("3")) {
      arrayNumber[i] = ("Won't you be my neighbor?");
    }
  };
  return arrayNumber;
};

$(document).ready(function(){
  $("form#counting").submit(function (event) {
    event.preventDefault();
    const inputNumber = $("#inputNumber").val(); 
    const results = beepBoop(inputNumber);
     $("#output").text(results);
  });
});

