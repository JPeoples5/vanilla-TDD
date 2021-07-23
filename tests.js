// inout test to run into the arrary
var totalTestCount = 0;
var passedTest = 0;

//Define tests below
function allTests() {
  testAddNums();
  testSubtractNums();
  testForHTMLText();
}

runTests(allTests);

//    addNums
function testAddNums() {
  assertEqual(addNums(5, 10), 15, "addNums");
  assertEqual(addNums(-5, 10), 5, "addNum");
  assertEqual(addNums("2", 10), 12, "addNums");
  assertEqual(addNums(-1, -4), -5, "addNums");
}

function testSubtractNums() {
  assertEqual(subtractNums(20, 2), 18);
  assertEqual(subtractNums(10, -2), 12);
  assertEqual(subtractNums("20", "20"), 0);
}

function testForHTMLText() {
  isInDocument("Driven Development");
}

function runTests(fn) {
  console.log("Running " + totalTestCount + " test...");

  fn();

  console.log("***** " + passedTest + " / " + totalTestCount + " Test Passed *****");
}

//Helper Functions
function assertEqual(val, expected, name) {
  totalTestCount++;

  if (name == undefined) {
    name = "An unnamed test ";
  }

  val = JSON.stringify(val);
  expected = JSON.stringify(expected);

  if (val === expected) {
    passedTest++;
    console.log("Test: " + name + "...PASSED");
  } else {
    console.error(name + "...FAILED " + val + " !== " + expected);
  }
}

function isInDocument(expected) {
  totalTestCount++;

  if ((document.documentElement.textContent || document.documentElement.innerText).indexOf(expected) != -1) {
    passedTest++;
    console.log("Test: ...PASSED");
    return true;
  } else {
    console.error("Test ...FAILED " + expected + " was not in document");
    return false;
  }
}
