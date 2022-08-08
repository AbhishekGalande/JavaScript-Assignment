
function playBattleship() {

    const Battleship = [0, 1, 1, 0, 1]
    let guesscount = 0
    let hitcount = 0
    while (hitcount != 3) {
        const choice = Number(prompt("Enter numbers from 1 to 5 i.e positions of battleship to hit it"))


        if (choice < 1 || choice > 5) {
            alert("Enter a valid number")
            continue
        }

        guesscount++


        if (Battleship[choice - 1] == 1) {
            alert("You have hit a Battleship");
            hitcount++
            Battleship[choice - 1] = 2
        }
        else if (Battleship[choice - 1] == 2) {
            alert("You have already hit this Battleship")
        }
        else {
            alert("You missed Battleship");
        }
    }
    alert("Game Over you have taken " + guesscount + " guesses to hit 3 Battleships")

}


