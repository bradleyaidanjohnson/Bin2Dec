const inputBinaryNumber = document.getElementById("binary-number");
const submitButton = document.getElementById("submit-button");
const output = document.getElementById("output-display");

const binaryKey = {
  0: [10000000, 128],
  1: [1000000, 64],
  2: [100000, 32],
  3: [10000, 16],
  4: [1000, 8],
  5: [100, 4],
  6: [10, 2],
  7: [1, 1],
};

const binToDec = (binaryNumber) => {
  let result = 0;
  let binaryConverted = Number(binaryNumber);
  while (binaryConverted > 0) {
    for (let i = 0; i < 8; i++) {
      if (binaryConverted >= binaryKey[i][0]) {
        result += binaryKey[i][1];
        binaryConverted -= binaryKey[i][0];
      }
    }
  }
  return result;
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const userInput = inputBinaryNumber.value;
  const regex = /[^01]/g;
  if (userInput.match(regex)) {
    alert("only decimals pls");
    return;
  } else if (userInput.length > 8) {
    alert("too long");
    return;
  }
  console.log(binToDec(userInput));
  output.innerText = `${binToDec(userInput)} is the output!`;
});
