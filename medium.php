<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>XSS - Medium Assignment</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="style/style.css">
</head>
<body>
<div class="container">
    <div class="row" id="menu">
        <div class="col-sm-12">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="easy.html">Easy</a></li>
                <li><a id="visitedPage" href="medium.html">Normal</a></li>
                <li><a href="hard.html">Hard</a></li>
                <li><a href="impossible.html">Impossible</a></li>
                <li><a href="samy.html">Samy MySpace Worm</a></li>
            </ul>
        </div>
    </div>


    <div class="row">
        <div class="col-sm-12">
            <h1>The normal assignment</h1>
            <p>Try to use cross site scripting to either deform this page or to let it run some other form of
                javascript!</p>
            <p>This form stringifies your input. Can you beat it?</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-12">
            <h1>To Do List - Add a To Do</h1>
            <p>Add your todo's below and share them with the WWW!</p>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <div class="form-group">
                <label for="inputNoteTitle">Title:</label>
                <input type="text" class="form-control" id="inputNoteTitle" placeholder="Title...." />
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <button type="button" class="btn btn-primary" onclick="addNewNote()">Add Note</button>
        </div>
    </div>
    <div class="row">
        <hr />
    </div>
    <div class="row">
        <div class="col-sm-12">
            <h1>To Do List - Overview</h1>
            <ul id="notesList">
                <li class="todoListItem">Sjaak voeren</li>
                <li class="todoListItem">Patat kopen</li>
            </ul>
        </div>
    </div>
    <!--

    <div class="row">
        <div class="col-sm-4">
            <img class="memeImage"
                 src="http://www.ibiblio.org/hhalpin/homepage/presentations/webcrypto/jquery.jpg"
                 alt="WW meme" />
        </div>
        <div class="col-sm-4">
            <h1>The normal assignment</h1>
            This time the code stringifies your input. Can you beat it?
        </div>
        <div class="col-sm-4">
            <img class="memeImage"
                 src="img/nobe.jpg"
                 alt="meme old" />
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <h1>To Do List</h1>
            <p>Add your todo's below and share them with the WWW!</p>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-2">Title</div>
        <div class="col-sm-10"><input type="text" id="inputNoteTitle" placeholder="Title...." /> </div>
    </div>
    <div class="row">
        <button onclick="addNewNote()">Add Note</button>
    </div>
    <div class="row">
        <hr />
    </div>
    <div class="row">
        <div class="col-sm-12">
            <ul id="notesList">
                <li class="todoListItem">Sjaak voeren</li>
                <li class="todoListItem">Patat kopen</li>
            </ul>
        </div>
    </div>
    -->
</div>

<script src="js/medium.js"></script>

</body>
</html>