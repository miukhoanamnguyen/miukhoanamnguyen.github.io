Exercise 1:
For this problem we need to added "float: left" to box css class and need to use "clear: left". So I will add new class and add it to the 4th of div with has class box

    #outer {
        border: 2px dashed black;
        overflow: hidden;
        padding: 10px;
        }
    .box {
        width: 100px;
        height: 100px;
        background-color: black;
        margin: 10px;
        float: left;
    }
    .box > div:nth-child(4) {
        clear: left;
    }

Exercise 2:
The important property here we need to put "display: inline" for li tag, it will change the list from vertical to horizontal layout. We need "text-align: center" for those li tag place in center of the page. After that we just make the background color and padding correct for the ul and li tag

    ul {
        background-color: red;
        padding: 20px;
        text-align: center;
    }

    li {
        display: inline;
        border: 1px solid black;
        padding: 10px;
        background-color: white;
    }

Exercise 3: layout 2
The key of this layout is we need to use "float: right" for area 1, 2, 3

    #container {
        background-color: lightgray;
        overflow: hidden;
        padding: 10px;
        width: 500px;
    }
    #column1, #column2 {
        background-color: lightblue;
        float: right;
        margin-left: 10px;
        width: 100px;
    }
    h1 {
        background-color: yellow;
    }

Exercise 4: More Floats
Using float: left or right to layout the text and using clear: left or right to control the next flow of float elements
