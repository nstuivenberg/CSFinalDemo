/**
 * Created by Nick Stuivenberg on 23-5-2017.
 */

var myToDoList = document.getElementsByClassName("todoListItem");

function addNewNote() {
    var liElement = document.createElement("li");
    liElement.className = "todoListItem";
    var inputValue = document.getElementById("inputNoteTitle").value;

    // -- This feels so safe!
    liElement.innerHTML = inputValue;

    if(inputValue === "") {
        // -- dosth
    } else {
        document.getElementById("notesList").appendChild(liElement);
    }

    // Empty the input field
    document.getElementById("inputNoteTitle").value = "";

}

