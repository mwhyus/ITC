// Tested on Repl.it

function converter(arr) {

    const romawi = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
      'i': 1,
      'v': 5,
      'x': 10,
      'l': 50,
      'c': 100,
      'd': 500,
      'm': 1000,
    }
  
    let counter = 0;
  
    for (i = 0; i < arr.length; i++) {
      let value = romawi[arr[i]];
      let mark = romawi[arr[i + 1]];
  
      if (value < mark) {
        counter += mark - value
        i++
      } else {
        counter += value
      }
    }
    return counter;
  };
  
  console.log(converter('MiDl'))