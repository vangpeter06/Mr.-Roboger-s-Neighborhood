// const inputNumber = 5;

function beepBoop(inputNumber) {
  let arrayNumber = []; 
  
    for (let i = 0; i <= inputNumber; i += 1) {
     console.log(inputNumber);
      arrayNumber.push(i);
    }
    arrayNumber;
console.log(arrayNumber);
  }
  
  
  
  $(document).ready(function(){
    $("form#counting").submit(function(event) {
      event.preventDefault();
      const inputNumber = parseInt($("#inputNumber").val());
      
      // const results = result(arrayNum);
      $(("#output")).text(arrayNumber);
      // console.log(arrayNumber);
      // $("#output").text(results);
    });
  });

