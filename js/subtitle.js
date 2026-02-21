function getRandomGreeting() {
  var greetings = [
"HP-E is the goat",
"made by bubber",
"The Jerk was here!!!",
"Donald Eugene Is my favorite!",
"Lets hope the school dosen't know..",
"LONG LIVE G.E.S.!!!",
"Nope, No jerk!",
"You're a jerk!",
"bombardilo crocodilo",
"Quit lookin here!",
"i was never here..."
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
