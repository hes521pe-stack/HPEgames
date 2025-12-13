function getRandomGreeting() {
  var greetings = [
"HPE is the goat",
"made by bubber",
"brought to you by..."
"NOT seen on TV!",
"Lets hope the school dont know..",
"LONG LIVE G.E.S.!!!!!!",
"your chromebook is fried bro",
"insert text here",
"bombardilo crocodilo",
"its all in your imagination"
"i was never here..."
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
