// // const input = 5;
// let input = parseInt($("#input").val());
// function beepBoop(inputNumber) {
//   // let arrayNumber = []; 
  
//     for (let i = 0; i <= inputNumber; i += 1) {
//     //  console.log(input);
//     //   arrayNumber.push(i);
//     }
//     return arrayNumber;
// console.log(arrayNumber);
//   }
  function beepBoop(inputNumber) {
    for (i = 0; i <= inputNumber; i++) {
      let arrayNumber = inputNumber - [i];
      //return newNum
      console.log(arrayNumber);
    }
  
  }
  
  
  $(document).ready(function(){
    $("form#counting").submit(function(event) {
      event.preventDefault();
      const inputNumber = parseInt($("#input").val());
      
      // const results = result(arrayNum);
      $(("#output")).text(arrayNumber);
      // console.log(arrayNumber);
      // $("#output").text(results);
    });
  });

