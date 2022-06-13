Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: 
inputNumber = 5;
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
Code: inputNumber = 13
Expected Output: [0,Beep !,Boop !,Won't you be my neighbor?,4,5,6,7,8,9,Beep !,Beep !,Boop !]

Test: "It should replace a number containing the number 13 with Won't you be my neighbor?.
Code: inputNumber = 13
Expected Output: [0,Beep !,Boop !,Won't you be my neighbor?,4,5,6,7,8,9,Beep !,Beep !,Boop !,Won't you be my neighbor?]

