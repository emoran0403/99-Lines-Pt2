/*
1: Put a button in the HTML that says Sing!
*/

let sing = document.createElement('button'); // creates a button
sing.innerHTML = "Sing";  //give this button text that says "Sing!"
sing.onclick = song //sets the onclick action to run the song function
document.body.appendChild(sing); //appends the button to the body of the document

function song() { //this code will run when the button is clicked
    let friends = ['Paul', 'Nate', 'Nick', 'John', "Joe"];

    for (var j = 0; j < friends.length; j++) {
        let current = friends[j]
        for (let i = 99; i > 0; i--) {
            if (i === 1) {
                //console.log(i + " line of code in the file, " + i + " line of code; " + current + " strikes it out, clears it all out, " + (i - 1) + " lines of code in the file");
                console.log(`${i} line of code in the file, ${i} line of code, ${current} strikes it out, cleares it all out, ${i-1} lines of code in the file`)
            } else if (i === 2) {
                //console.log(i + " lines of code in the file, " + i + " lines of code; " + current + " strikes one out, clears it all out, " + (i - 1) + " line of code in the file");
                console.log(`${i} lines of code in the file, ${i} lines of code, ${current} strikes one out, cleares it all out, ${i-1} line of code in the file`)
            } else {
                //console.log(i + " lines of code in the file, " + i + " lines of code; " + current + " strikes one out, clears it all out, " + (i - 1) + " lines of code in the file");
                console.log(`${i} line of code in the file, ${i} line of code, ${current} strikes one out, cleares it all out, ${i-1} lines of code in the file`)
            }
        }
    }   
}