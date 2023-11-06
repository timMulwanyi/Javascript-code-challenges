function fizzBuzz(str1, str2) {
    const combinedLength = str1.length + str2.length;

    if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
      return "FizzBuzz";
    } else if (combinedLength % 3 === 0) {
      return "Fizz";
    } else if (combinedLength % 5 === 0) {
      return "Buzz";
    }

    return "";
  }

  const form = document.getElementById('fizzBuzzForm');
  const resultElement = document.getElementById('result');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const string1 = form.elements.string1.value;
    const string2 = form.elements.string2.value;

    const result = fizzBuzz(string1, string2);

    resultElement.textContent = "Result: " + result;
  });