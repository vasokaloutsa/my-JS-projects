let gridSize=window.prompt('Please enter the number of squares per side you want your sketch grid to have.( P.S : if you put a large number just be patient 🦖 )')
  
function getSizeOfGrid(numberOfSquares){
    
    //grid 
    let elem = document.querySelector('div');
    for (let i = 0; i < numberOfSquares; i++){   
        let row = document.createElement('div'); 
        elem.appendChild(row);  
        row.style.cssText=`display:flex;flex-direction:row;height:${100/numberOfSquares}vh;`;  
        for (let j = 0 ; j < numberOfSquares; j++){                   
            let div = document.createElement('div');
            div.className ='box';
            row.appendChild(div);
            div.style.cssText = 'width:100%;height:100%;';
        }
    }
  
    //color the grid
    let boxColor=document.querySelectorAll('.box'); 
    boxColor.forEach(box=>box.addEventListener("mouseover",function Mouse(event){
            event.target.style.backgroundColor='rgba(255,182,193,0.8)'; 
              }))

   //create reset button
   const resetButton= document.createElement('button');
   resetButton.innerHTML='Reset';
   resetButton.classList.add("reset-button");
   const buttonPosition=document.getElementById('parentDiv');
   buttonPosition.appendChild(resetButton);
   resetButton.addEventListener('click',()=>{window.location.reload();} );
}   


getSizeOfGrid(gridSize);     