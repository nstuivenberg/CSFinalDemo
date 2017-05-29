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
    //var wordArr = userInput,
    console.log("userInput: " + userInput);


    var stringArray = userInput.split(/(\s+)/).filter(function (e) {
        return e.trim().length > 0;
    }),
    commonObj = {},
    uncommonArr = [],
    word, i;
    console.log(stringArray);

    for (i = 0; i < common.length; i++) {
        commonObj[ common[i].trim() ] = true;
    }

    for (i = 0; i < stringArray.length; i++) {
        word = stringArray[i].trim();
        wordDecapitalized = stringArray[i].trim().toLowerCase();
        if (!commonObj[wordDecapitalized]) {
            uncommonArr.push(word);
        }
    }


    if(uncommonArr.length > 0) {
        return arrToString(uncommonArr);
    }

    return "";
}


function getBadHtmlList() {
    return ["\"", "\'", "<style", "javascript", ":alert", "onmouseover", "<script", "onmouseout", "onerror",
    "onclick"];
}

function arrToString(arr) {
    var stringToReturn = "";

    for (var i = 0; i< arr.length; i++) {
        stringToReturn += " " + arr[i];
    }

    return stringToReturn;
}

