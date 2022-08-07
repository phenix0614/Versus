import ranDom from "./random.js";


const genBlackCase = (nbrWall) => {
    const caseType = document.querySelectorAll('td');

    for (let i = 0; i < nbrWall; i++) {

        const randomT = ranDom(0, 99);
        caseType[randomT].classList.add("desactive");
    }
}
 export default genBlackCase