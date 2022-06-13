function beepBoop(inputNumber) {
  let arrayNumber = []; 
  for (let i = 0; i <= inputNumber; i++) {
    if (i.toString().includes(3)) {
      arrayNumber.push("Won't you be my neighbor?");
    } else if (i.toString().includes(2)) {
      arrayNumber.push("BOOP!");
    } else if (i.toString().includes(1)) {
      arrayNumber.push("BEEP!");
    } else {
      arrayNumber.push(i);
    }
  }
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
