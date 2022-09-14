let boardSize = 8;
let cell = "";

//row loop with cell loop inside
for (let row = 1; row <= boardSize; row++){
  for (let square = 1; square <= boardSize; square++){
    if ((row+square)%2 === 0){
      cell += " "
    }else{
      cell += "#"
    }
  } cell += "\n"
}console.log(cell);