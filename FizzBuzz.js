var i = 1

while (i <= 100) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("buzzfizz")
  } else if (i % 3 == 0) {
    console.log("buzz")
  } else if (i % 5 == 0) {
    console.log("fizz")
  } else {
    console.log(i)
  }
  i = i + 1
}
