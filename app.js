function myFunction() {
    console.log('function Work')
  let text;
  let person = prompt("Please enter your name:", "Adrienne Callie");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = text;
}
