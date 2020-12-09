window.onload = () => {
  let addEle = ``,arr=[],
  randomString="0123456789ABCDEF",
  colors=randomString.split(''),
  randomColor=``;
  const domElements={
    result:document.getElementById("result"),
    addElementor:document.getElementById("addElementor")
  }

  

  //RANDOM COLOR GENERATOR
/*   const getRandomColor= () =>{
    let randomColor=``;
    for(i=0;i<6;i++){
      randomColor +=colors[Math.floor(Math.random() * colors.length)];
    }
    return (`#`+randomColor);
  } */
  const getColor= ()=>
      new Array(6).fill(' ').map(()=>
          randomColor =colors[Math.floor(Math.random() * colors.length)]).join("");

  // console.log(getColor());
  
  //TIC-TAC-TOE BODY
  for (let i = 0; i < 9; i++) {
    addEle += `<div class="block mr-2" id='bloc${i}'>
        <div class="d-flex justify-content-center align-items-center w-100 h-100">
             <i class="far" id='circle${i}' style="color: #f6f6f6;font-size:125px;"></i>
        </div>
    </div>`;
    arr.push(0);
  }
  addElementor.innerHTML = addEle;
  let counter = Math.round(Math.random());

  // console.log(document.getElementById(`bloc${0}`));
  // document.getElementById(`bloc${0}`).style.display="none";


  //ON MOUSE OVER EVENT
  for(let i=0;i<9;i++){
    document.getElementById(`bloc${i}`).addEventListener("mouseover",()=>{
      if(counter%2===0){
        document.getElementById(`circle${i}`).classList.add("fa-circle");
        document.getElementById(`circle${i}`).style.display="block";
      }
      else{``
        document.getElementById(`circle${i}`).classList.add("fa-times");
        document.getElementById(`circle${i}`).style.display="block";
      }
    });
  }

  //ON MOUSE LEAVES EVENT
  for(let i=0;i<9;i++){
    document.getElementById(`bloc${i}`).addEventListener("mouseout",()=>{
      if(counter%2===0){
        document.getElementById(`circle${i}`).classList.remove("fa-circle");
        document.getElementById(`circle${i}`).style.display="block";
      }
      else{
        document.getElementById(`circle${i}`).classList.remove("fa-times");
        document.getElementById(`circle${i}`).style.display="block";
      }
    });
  }

  //EVENT LISTENER
  for (let i = 0; i < 9; i++) {
    document.getElementById(`bloc${i}`).addEventListener("click", () => {
      if (counter % 2 === 0) {
        console.log(counter);
        document.getElementById(`circle${i}`).classList.add("fa-circle");
        document.getElementById(`circle${i}`).style.display ="block";
        document.getElementById(`bloc${i}`).style.pointerEvents ="none";
        document.getElementById(`bloc${i}`).style.backgroundColor=`#${getColor()}`;
        arr[i] = 2;
        console.log(arr);
      } else {
        console.log(counter);
        document.getElementById(`circle${i}`).classList.add("fa-times");
        document.getElementById(`circle${i}`).style.display ="block";
        document.getElementById(`bloc${i}`).style.pointerEvents ="none";
        document.getElementById(`bloc${i}`).style.backgroundColor=`#${getColor()}`;
        arr[i] = 1;
        console.log(arr);
      }
      if (
        (arr[0] === 2 && arr[1] === 2 && arr[2] === 2) ||
        (arr[3] === 2 && arr[4] === 2 && arr[5] === 2) ||
        (arr[6] === 2 && arr[7] === 2 && arr[8] === 2) ||
        (arr[0] === 2 && arr[3] === 2 && arr[6] === 2) ||
        (arr[1] === 2 && arr[4] === 2 && arr[7] === 2) ||
        (arr[2] === 2 && arr[5] === 2 && arr[8] === 2) ||
        (arr[0] === 2 && arr[4] === 2 && arr[8] === 2) ||
        (arr[2] === 2 && arr[4] === 2 && arr[6] === 2)
      ) {
        result.innerHTML="Congratulations Circle Wins";
        result.style.color="#fff";
        document.getElementById('addElementor').style.pointerEvents="none";     
      }
      else if (
        (arr[0] === 1 && arr[1] === 1 && arr[2] === 1) ||
        (arr[3] === 1 && arr[4] === 1 && arr[5] === 1) ||
        (arr[6] === 1 && arr[7] === 1 && arr[8] === 1) ||
        (arr[0] === 1 && arr[3] === 1 && arr[6] === 1) ||
        (arr[1] === 1 && arr[4] === 1 && arr[7] === 1) ||
        (arr[2] === 1 && arr[5] === 1 && arr[8] === 1) ||
        (arr[0] === 1 && arr[4] === 1 && arr[8] === 1) ||
        (arr[2] === 1 && arr[4] === 1 && arr[6] === 1)  
      ) {
        result.innerHTML="Congratulations Cross Wins";   
        result.style.color="#fff";  
        document.getElementById('addElementor').style.pointerEvents="none";  
      }
      else if(!arr.includes(0)){
        result.innerHTML="Match TIED"; 
        result.style.color="#fff";
        document.getElementById('addElementor').style.pointerEvents="none";
      }
      counter++;
    });
  }
};

