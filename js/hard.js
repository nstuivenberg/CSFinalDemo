/**
 * Created by Nick Stuivenberg on 23-5-2017.
 */

var myToDoList = document.getElementsByClassName("todoListItem");

function addNewNote() {
    var liElement = document.createElement("li");
    liElement.className = "todoListItem";
    var inputValue = document.getElementById("inputNote").value;


    var checkedInputValue = filterOutBadStuff(inputValue);
    liElement.innerHTML = checkedInputValue;


    if(inputValue === "") {
        // -- dosth
    } else {
        document.getElementById("notesList").appendChild(liElement);
    }

    // Empty the input field
    document.getElementById("inputNote").value = "";

}

 // -- Removing the part below is not a part of this assignment!
function filterOutBadStuff(userInput) {

    var common = getBadHtmlList();
    var wordArr = userInput,

    //var wordArr = userInput.match(/\w+/g),
        commonObj = {},
        uncommonArr = [],
        word, i;

    for (i = 0; i < common.length; i++) {
        commonObj[ common[i].trim() ] = true;
    }

    for (i = 0; i < wordArr.length; i++) {
        word = wordArr[i].trim().toLowerCase();
        if (!commonObj[word]) {
            uncommonArr.push(word);
        }
    }

    if(uncommonArr.length > 0) {
        return arrToString(uncommonArr);
    }

    return "";
}


function getBadHtmlList() {
    return ["\"", "\'", "<style", "javascript", ":alert", "onmouseover"];
}

function arrToString(arr) {
    var stringToReturn = "";

    for (var i = 0; i< arr.length; i++) {
        stringToReturn += " " + arr[i];
    }

    return stringToReturn;
}

