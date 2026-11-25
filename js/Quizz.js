class Quizz {
  constructor() {
    
  }

  setAnswer() {
    

    let answerArray = new Array("insulte", "mot pas gentil", "bite");
    let rightAnswer = Math.random(0,3);
    
    answerArray.splice(rightAnswer,0,"Lé Poiffon")


    return h + ":" + m;
  }

  buttonSetup() {
    return `
      <li class="carte">
        <p>`,answerArray[0],`</p>
      </li>
      <li class="carte">
        <p>`,answerArray[2],`</p>
      </li>
      <li class="carte">
        <p>`,answerArray[3],`</p>
      </li>
      <li class="carte">
        <p>`,answerArray[1],`</p>
      </li>`;
  }
}
