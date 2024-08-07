class EventsManager {
    squares = document.getElementsByClassName("square");

    //windOptions is an object that contains the winning combinations with a parameter that is the weight of the combination
    //The weight is used to determine the next action of the computer
    //0 = the combination is not more useful
    //1 = the combination is the basic one
    //2 = the combination is for the computer to win
    //3 = the combination is for the player to win

    winOptions = {
        0: ["11", "12", "13",1],
        1: ["21", "22", "23",1],
        2: ["31", "32", "33",1],
        3: ["11", "21", "31",1],
        4: ["12", "22", "32",1],
        5: ["13", "23", "33",1],
        6: ["11", "22", "33",1],
        7: ["13", "22", "31",1]   
    }


    constructor() {
        for (let i = 0; i < this.squares.length; i++) {
            this.squares[i].addEventListener("mouseover", (event) => this.squareHover(event.target.id));
            this.squares[i].addEventListener("click", (event) => this.squareClick(event.target.id));
            this.squares[i].addEventListener("mouseleave", (event) => this.squareLeftHover(event.target.id));
        }
    }

    squareHover (id) {
        let square = document.getElementById(id);
        square.style.backgroundColor = "#fafafa";
    }

    squareClick(id) {
        let square = document.getElementById(id);
        square.innerText = "X";
    }

    squareLeftHover(id) {
        let square = document.getElementById(id);
        square.style.backgroundColor = "white";
    }

    resetSquares() {
        for (let i = 0; i < this.squares.length; i++) {
            this.squares[i].innerText = "";
        }
    }



    


    

}