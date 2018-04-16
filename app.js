var classList = ['Aaron Colbert', 'Adriana Shulman', 'Ananya Bala', 'Andre Brown', 'Andrew Pollock', 'Candice Correa', 'Christine Bonk', 'Claude Meurehg', 'Daniel Valdivieso', 'Daryll Penafiel', 'Dawn Dinham', 'Dominic Abogado', 'Edward Temelkos', 'Hamad Alsulaiman', 'Leandra Reid', 'Nadiah Nida', 'Oliver Pajarillo', 'Rabeea Wajeeha', 'Reza Niknejad-Moghaddam', 'Ryan Racioppo', 'Sang Moo Lee', 'Simon Cain', 'Sumati Patel', 'Sumeet Sharma',  'Sutharshan (shan) Indrakumar', 'Tharmi Sriskandarajah', 'Travix Wong', 'Trika Mitra' ]

// prints to the screen the original list of students
for (var i = 0; i < classList.length; i++) {
  document.write(classList[i] + "<br />");
}

// ES5
// function to randomize the array list
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  //   while(0 !== currentIndex) -- this line is the same as the line below but utilizes the concept of truthy and falsy in JavaScript. More information available at https://www.sitepoint.com/javascript-truthy-falsy/ 
  while (currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
randomizedList = shuffle(classList)

document.write( "<br/>" + "<br/>" + "---------------------" + "<br/>" + "<br/>");

// prints to the screen the randomized list of students
for (var i = 0; i < randomizedList.length; i++){
    document.write(randomizedList[i] + '<br/>')
}
document.write("<br/>" + "<br/>" + "---------------------" + "<br/>" + "<br/>");


// Prints the individual tabel lists
// Table 1
for (var i = 0; i < 4; i++){
    document.write('Table #1: ' + classList[i] + '<br/>');
}
document.write( "<br/>" + "<br/>" + "---------------------" + "<br/>" + "<br/>");

// Table 2
for (var i = 4; i < 8; i++){
    document.write("Table #2: " + classList[i] + "<br/>");
}
document.write( "<br/>" + "<br/>" + "---------------------" + "<br/>" + "<br/>");

// Table 3
for (var i = 8; i < 12; i++){
    document.write('Table #3: ' + classList[i] + '<br/>');
}
document.write( "<br/>" + "<br/>" + "---------------------" + "<br/>" + "<br/>");

// Table 4
for (var i = 12; i < 16; i++){
    document.write('Table #4: ' + classList[i] + '<br/>');
}
document.write( "<br/>" + "<br/>" + "---------------------" + "<br/>" + "<br/>");

// Table 5
for (var i = 16; i < 20; i++){
    document.write('Table #5: ' + classList[i] + '<br/>');
}
document.write( "<br/>" + "<br/>" + "---------------------" + "<br/>" + "<br/>");

// Table 6
for (var i = 20; i < 24; i++){
    document.write('Table #6: ' + classList[i] + '<br/>');
}
document.write( "<br/>" + "<br/>" + "---------------------" + "<br/>" + "<br/>");

// Table 7
for (var i = 24; i < classList.length; i++){
    document.write('Table #7: ' + classList[i] + '<br/>');
}

