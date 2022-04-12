
const mouvTop = (j1, telePortA, telePortB, sword, chopped, shield, boot, ) => {
    const caseType = document.querySelectorAll('td');
    


    const initialPosi = j1.getPosition();
    const newPosition = initialPosi - 10 >= 0 ? initialPosi - 10 : initialPosi;
    const newCase = caseType[newPosition];
    if (newCase.classList.length === 0 || newCase.classList.contains(telePortA.getName()) || newCase.classList.contains(telePortB.getName())
        || newCase.classList.contains(sword.getName()) || newCase.classList.contains(chopped.getName()) || newCase.classList.contains(shield.getName()) ||
        newCase.classList.contains(boot.getName())) {

        const holdCase = caseType[initialPosi];
        holdCase.classList.remove(j1.getName());
        newCase.classList.add(j1.getName());
        j1.setPosition(newPosition);
    }
   

    if (j1.getPosition() === sword.getPosition() || j1.getPosition() === chopped.getPosition() || j1.getPosition() === boot.getPosition()
        || j1.getPosition() === shield.getPosition()) {
        newCase.classList.remove(sword.getName());
        newCase.classList.remove(chopped.getName());
        newCase.classList.remove(shield.getName());
        newCase.classList.remove(boot.getName());

    }
    if (j1.getPosition() === telePortA.getPosition()) {

        const holdCase = caseType[initialPosi];
        const iniReverPosition = telePortB.getPosition();
        const newReversPosition = iniReverPosition- 10;
        const teeeeeeleeeeeepoortation = caseType[newReversPosition];
        if (teeeeeeleeeeeepoortation.classList.length === 0){
            holdCase.classList.remove(j1.getName());
            teeeeeeleeeeeepoortation.classList.add(j1.getName());
        }else{
            teeeeeeleeeeeepoortation===holdCase
        };


        j1.setPosition(newReversPosition);
    };

    if (j1.getPosition() === telePortB.getPosition()) {

        const holdCase = caseType[initialPosi];
        const iniReverPosition = telePortA.getPosition();
        const newReversPosition = iniReverPosition- 10;
        const teeeeeeleeeeeepoortation = caseType[newReversPosition];
        // const goCheck = checker(newReversPosition);
    
    
       if(teeeeeeleeeeeepoortation.classList.length === 0){
        holdCase.classList.remove(j1.getName());
        teeeeeeleeeeeepoortation.classList.add(j1.getName());
        j1.setPosition(newReversPosition);

       }else{
           teeeeeeleeeeeepoortation===holdCase
        //    teeeeeeleeeeeepoortation===holdCase
       }

    }


};

export default mouvTop
