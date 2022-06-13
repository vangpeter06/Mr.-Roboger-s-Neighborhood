# _{MR. ROBOGER NEIGHBORHOOD}_

#### By _**Peter Vang**_

#### _{This is a simple HTML, CSS, and jQuery on Mr. Roboger Neighborhood with user input and return range of numbers.}_

## Technologies Used

* _HTML_
* _CSS_
* _jQuery_
* _Bootstrap_

## Description

_{When input number it will list numbers from 0 to input number, changing the number 1 to "BEEP!", any number 2 to "BOOP!", and any number 3 to "Won't you be my neighbor?". Also any number that contain a 2 or 3 will give the same quote for 2 and 3 ex: 12 will give "BOOP!" and 23 will give "Won't you be my neighbor?".}_

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _git clone https://github.com/vangpeter06/Mr.-Roboger-s-Neighborhood
* _Navigate to the top level of the directory_
* _cd Mr.-Roboger-s-Neighborhood_
* _Open index.HTML in your browser_

## Known Bugs

* _None_


## License

_{If you run into any issues or have questions, ideas or concerns please contact me or make a contribution to the code.}_

Copyright (c) _06/12/22_ _Peter Vang_

Licensed under the [MIT License](LICENSE)

## TEST
Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: inputNumber = 5;
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should replace a number containing the number 1 with the word "BEEP!".
Code: inputNumber = 5;
Expected Output: [0, "BEEP!", 2, 3, 4, 5]

Test: "It should replace a number containing the number 2 with the word "BOOP!".
Code: inputNumber = 5;
Expected Output: [0, "BEEP!", "BOOP!", 3, 4, 5]

Test: "It should replace a number containing the number 3 with the word "Won't you be my neighbor?".
Code: inputNumber = 5;
Expected Output: [0, "BEEP!", "BOOP!", Won't you be my neighbor?, 4, 5]

Test: "It should replace a number containing the number 12 with BOOP!.
Code: inputNumber = 12
Expected Output: [0,BEEP!,BOOP!,Won't you be my neighbor?,4,5,6,7,8,9,BEEP!,BEEP!,BOOP!]

Test: "It should replace a number containing the number 13 with Won't you be my neighbor?.
Code: inputNumber = 13
Expected Output:  [0,BEEP!,BOOP!,Won't you be my neighbor?,4,5,6,7,8,9,BEEP!,BEEP!,BOOP!,Won't you be my neighbor?]

Test: "It should replace a number containing the number 23 with Won't you be my neighbor?.
Code: inputNumber = 23
Expected Output: [0,BEEP!,BOOP!,Won't you be my neighbor?,4,5,6,7,8,9,BEEP!,BEEP!,BOOP!,Won't you be my neighbor?,BEEP!,BEEP!,BEEP!,BEEP!,BEEP!,BEEP!,BOOP!,BOOP!,BOOP!,Won't you be my neighbor?]