function lyrics() {
  var bottleWord = "bottles";
  var count = 99;

  while (count > 0) {
    console.log(count + " " + bottleWord + " of beer on the wall, " + count + " " + bottleWord + " of beer.");
    count--;
    if (count === 1) {
      bottleWord = "bottle";
    }
    if (count === 0) {
      countWord = "no more";
      bottleWord = "bottles";
    } else {
      countWord = count;
    }
    console.log("Take one down and pass it around, " + countWord + " " + bottleWord + " of beer on the wall.");
  }

  console.log("No more bottles of beer on the wall, no more bottles of beer.");
  console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
}
