/**
 * Created by Nick Stuivenberg on 23-5-2017.
 */

var myToDoList = document.getElementsByClassName("todoListItem");

function addNewNote() {
    var liElement = document.createElement("li");
    liElement.className = "todoListItem";
    var inputValue = document.getElementById("inputNoteTitle").value;



    var textNode = document.createTextNode(inputValue);
    liElement.appendChild(textNode);

    // -- This was the old code!
    //liElement.innerHTML = inputValue;


    if(inputValue === "") {
        // -- dosth
    } else {
        document.getElementById("notesList").appendChild(liElement);
    }

    // Empty the input field
    document.getElementById("inputNoteTitle").value = "";

}

/**
 * Created by Nick Stuivenberg on 23-5-2017.
 */
