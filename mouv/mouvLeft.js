import retrieveImg from "../functionBox/retrieveImg.js";
import checker from "../functionBox/Checker.js";



const mouvLeft = (j1, telePortA, telePortB, sword, chopped, shield, boot) => {
    // ************************************************** Mouvement base gauche **************************************************

    const caseType = document.querySelectorAll('td');

    const initialPosi = j1.getPosition();
    const getNewPosition = (initialPosi) => {
        let newPosition;
        if (initialPosi === 0 || initialPosi === 10 || initialPosi === 20 || initialPosi === 30
            || initialPosi === 40 || initialPosi === 50 || initialPosi === 60
            || initialPosi === 70 || initialPosi === 80 || initialPosi === 90) {
            newPosition = initialPosi;
        } else {
            newPosition = initialPosi - 1
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

    // ***************************************************** Option Weapon ********************************************************
    if (j1.getPosition() === sword.getPosition()) {
        const swordImg= "../corp/style/images/corp/sword.jpg";

        const j1newValue = j1.getMouvMax() + sword.getSpeed();
        j1.setMouvMax(j1newValue);
        newCase.classList.remove(sword.getName());
        retrieveImg(swordImg,"#arm1");

    }

    if (j1.getPosition() === chopped.getPosition()){
        const choppedImg= "../corp/style/images/corp/hache4.jpg";

        const j1newValue = j1.getMouvMax() + chopped.getSpeed();
        j1.setMouvMax(j1newValue);
        newCase.classList.remove(chopped.getName());
        retrieveImg(choppedImg,"#arm1");


    }

    if(j1.getPosition() === boot.getPosition()){
        const bootImg= "../corp/style/images/corp/botte.png";

        const j1newValue = j1.getMouvMax() + boot.getSpeed();
        j1.setMouvMax(j1newValue);
        newCase.classList.remove(boot.getName());
        retrieveImg(bootImg,"#arm2");

    };


    if(j1.getPosition() === shield.getPosition()){
        const shieldtImg= "../corp/style/images/corp/bouclier.jpg";

        const j1newValue = j1.getMouvMax() + shield.getSpeed();
        j1.setMouvMax(j1newValue);
        newCase.classList.remove(shield.getName());
        retrieveImg(shieldtImg,"#arm2");

    };
    // if (j1.getPosition() === sword.getPosition() || j1.getPosition() === chopped.getPosition() || j1.getPosition() === boot.getPosition()
    //     || j1.getPosition() === shield.getPosition()) {
    //     newCase.classList.remove(sword.getName());
    //     newCase.classList.remove(chopped.getName());
    //     newCase.classList.remove(shield.getName());
    //     newCase.classList.remove(boot.getName());

    // }
    // *****************************************************Option Teleporteur *******************************************************


    if (j1.getPosition() === telePortA.getPosition()) {

        const holdCase = caseType[initialPosi];
        const iniReverPosition = telePortB.getPosition();
        const newReversPosition = iniReverPosition - 1;
        const teeeeeleeepooratiooon = caseType[newReversPosition];

        // if (checker(teeeeeleeepooratiooon,caseType)=== true){
            holdCase.classList.remove(j1.getName());
            teeeeeleeepooratiooon.classList.add(j1.getName());
        // }
        j1.setPosition(newReversPosition);
    }

    if (j1.getPosition() === telePortB.getPosition()) {

        const holdCase = caseType[initialPosi];
        const iniReverPosition = telePortA.getPosition();
        const newReversPosition = iniReverPosition - 1;
        const teeeeeleeepooratiooon = caseType[newReversPosition];

        // if (checker(teeeeeleeepooratiooon,caseType)=== true){
            holdCase.classList.remove(j1.getName());
            teeeeeleeepooratiooon.classList.add(j1.getName());
        // }
        j1.setPosition(newReversPosition);
    }


};
export default mouvLeft 
