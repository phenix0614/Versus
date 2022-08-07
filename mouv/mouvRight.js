import retrieveImg from "../functionBox/retrieveImg.js";
import checker from "../functionBox/Checker.js";


const mouvRight = (j1, telePortA, telePortB, sword, chopped, shield, boot) => {
    /************************************************  mouvement de base  droite ***************************************************************     */
    const caseType = document.querySelectorAll('td');

    const initialPosi = j1.getPosition();


    const getNewPosition = (initialPosi) => {
        let newPosition;
        if (initialPosi === 9 || initialPosi === 19 || initialPosi === 29 || initialPosi === 39
            || initialPosi === 49 || initialPosi === 59 || initialPosi === 69
            || initialPosi === 79 || initialPosi === 89 || initialPosi === 99) {
            newPosition = initialPosi;
            j1.setMouvMax(getMouvMax() + 1)
        } else {
            newPosition = initialPosi + 1
        }
        return newPosition
    };
    const newPosition = getNewPosition(initialPosi);
    const newCase = caseType[newPosition];
    if (newCase.classList.length === 0 || newCase.classList.contains(telePortA.getName()) || newCase.classList.contains(telePortB.getName())
        || newCase.classList.contains(sword.getName()) || newCase.classList.contains(chopped.getName()) || newCase.classList.contains(shield.getName()) ||
        newCase.classList.contains(boot.getName())) {
        const holdCase = caseType[initialPosi];
        holdCase.classList.remove(j1.getName())

        newCase.classList.add(j1.getName());
        j1.setPosition(newPosition);
    }
    // ******************************************************** Option Weapon *******************************************************
    if (j1.getPosition() === sword.getPosition()) {
        const swordImg = "./style/images/sword.jpg";

        const j1newValue = j1.getMouvMax() + sword.getSpeed();
        j1.setMouvMax(j1newValue);
        newCase.classList.remove(sword.getName());
        retrieveImg(swordImg, "#arm1");

    }

    if (j1.getPosition() === chopped.getPosition()) {
        const choppedImg = "./style/images/hache4.jpg";

        const j1newValue = j1.getMouvMax() + chopped.getSpeed();
        j1.setMouvMax(j1newValue);
        newCase.classList.remove(chopped.getName());
        retrieveImg(choppedImg, "#arm1");


    }

    if (j1.getPosition() === boot.getPosition()) {
        const bootImg = "./style/images/botte.png";

        const j1newValue = j1.getMouvMax() + boot.getSpeed();
        j1.setMouvMax(j1newValue);
        newCase.classList.remove(boot.getName());
        retrieveImg(bootImg, "#arm2");

    };


    if (j1.getPosition() === shield.getPosition()) {
        const shieldtImg = "./style/images/bouclier.jpg";

        const j1newValue = j1.getMouvMax() + shield.getSpeed();
        j1.setMouvMax(j1newValue);
        newCase.classList.remove(shield.getName());
        retrieveImg(shieldtImg, "#arm2");

    };

    // ************************************************************ Option Telporteur **********************************************************

    if (j1.getPosition() === telePortA.getPosition()) {

        const holdCase = caseType[initialPosi];
        const iniReverPosition = telePortB.getPosition();
        const newReversPosition = iniReverPosition + 1;
        const teeeeeleeepooratiooon = caseType[newReversPosition];

        holdCase.classList.remove(j1.getName());
        teeeeeleeepooratiooon.classList.add(j1.getName());
        j1.setPosition(newReversPosition);
    }


    if (j1.getPosition() === telePortB.getPosition()) {

        const holdCase = caseType[initialPosi];
        const iniReverPosition = telePortA.getPosition();
        const newReversPosition = iniReverPosition + 1;
        const teeeeeleeepooratiooon = caseType[newReversPosition];

        holdCase.classList.remove(j1.getName());
        teeeeeleeepooratiooon.classList.add(j1.getName());
        j1.setPosition(newReversPosition);

    }
}
export default mouvRight;
