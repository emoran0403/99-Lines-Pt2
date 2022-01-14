
let sing = document.createElement('button'); // creates a button
sing.innerHTML = "Sing";  //give this button text that says "Sing!"
sing.onclick = song //sets the onclick action to run the song function
document.body.appendChild(sing); //appends the button to the body of the document

function song() { //this code will run when the button is clicked
    let friends = ['Paul', 'Nate', 'Nick', 'John', "Joe"]; //array with 5 friends

    for (var j = 0; j < friends.length; j++) { //for loop to go through the friends array
        let current = friends[j] //creates a variable which stores the current friend, changing as the loop proceeds

        let friendDiv = document.createElement('div'); // creates a div
        friendDiv.className = current; //gives each div the class name after the current friend in the loop
        document.body.appendChild(friendDiv); //appends the friendDiv to the body of the document

        let friendH3 = document.createElement('h3'); // creates an h3 element
        friendH3.innerText = current;  // sets the text of the h3 to be the current friend in the loop
        friendDiv.appendChild(friendH3); //appends the h3 to the respective friendDiv

        for (let i = 99; i > 0; i--) { //for loop to go through the 99 lines

            if (i === 1) { //this handles the grammar for when there is 1 line of code left
                let singer = document.createElement('p'); // creates a paragraph element
                friendDiv.appendChild(singer); //appends the h3 to the respective friendDiv
                let lyric = document.createTextNode(`${i} line of code in the file, ${i} line of code, ${current} strikes it out, cleares it all out, ${i - 1} lines of code in the file`); // creates a text node with the current lyric
                singer.appendChild(lyric);

            } else if (i === 2) {//this handles the grammar for when there is 2 going to 1 line of code left
                let singer = document.createElement('p'); 
                friendDiv.appendChild(singer);
                let lyric = document.createTextNode(`${i} lines of code in the file, ${i} lines of code, ${current} strikes one out, cleares it all out, ${i - 1} line of code in the file`);
                singer.appendChild(lyric);

            } else if (i === 70) {//this is just a joke
                let singer = document.createElement('p'); 
                friendDiv.appendChild(singer);
                let lyric = document.createTextNode(`${i} lines of code in the file, ${i} lines of code, ${current} strikes one out, cleares it all out, ${i - 1} lines of code in the file...nice`);
                singer.appendChild(lyric);

            } else { //this is the lyric for the rest of the song
                let singer = document.createElement('p');
                friendDiv.appendChild(singer);
                let lyric = document.createTextNode(`${i} lines of code in the file, ${i} lines of code, ${current} strikes one out, cleares it all out, ${i - 1} lines of code in the file`);
                singer.appendChild(lyric);
            }
        }
    }
}





/*

body
    div with current friend 
        h3 with friends name
        paragraph with lyrics
            the lyrics are appended to the para

            so i need to append para to div once ( in the j loop), then append each lyric to para in the i  loop

*/