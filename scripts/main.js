const scrabbleArray = (row,col) => {

    let mainBoard = [];

    for (let tempRow = 0; tempRow < row; tempRow++){
        mainBoard.push([]);

    for (let tempCol = 0; tempCol < col; tempCol++){

        mainBoard[tempRow].push(new Array(col));
    }//tempcol

    }//temprow

}

const scrabbleMaker = () => {
    let allMatrix = "";
    
    for (let i = 0; i < 15; i++) {
        allMatrix+=`<tr>`;
        for (let j = 0; j < 15; j++) {
            allMatrix+=`<td id="r${i}_c${j}" class="cell">a</td>`;
        }
    allMatrix+=`</tr>`    
    }
    console.log(allMatrix);
    document.getElementById("board").innerHTML=allMatrix;
    
}


