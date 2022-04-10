
const mouvTop = (j1, telePortA, telePortB, sword, chopped, shield, boot, caseType) => {
    const initialPosi = j1.getPosition();
    const newPosition = initialPosi - 10 >= 0 ? initialPosi - 10 : initialPosi;
    const newCase = caseType[newPosition];
    // const newCaseId = parseInt(newCase.id)
    if (newCase.classList.length === 0 || newCase.classList.contains(telePortA.getName()) || newCase.classList.contains(telePortB.getName())
        || newCase.classList.contains(sword.getName()) || newCase.classList.contains(chopped.getName()) || newCase.classList.contains(shield.getName()) ||
        newCase.classList.contains(boot.getName())) {

        const holdCase = caseType[initialPosi];
        holdCase.classList.remove(j1.name);
        newCase.classList.add(j1.name);
        j1.setPosition(newPosition);
    }
    if (j1.getPosition() === sword.getPosition() || j1.getPosition() === chopped.getPosition() || j1.getPosition() === boot.getPosition()
        || j1.getPosition() === shield.getPosition()) {
        newCase.classList.remove(sword.name);
        newCase.classList.remove(chopped.name);
        newCase.classList.remove(shield.name);
        newCase.classList.remove(boot.name);

    }
    if (j1.getPosition() === telePortA.getPosition()) {

        const holdCase = caseType[initialPosi];
        const iniReverPosition = telePortB.getPosition();
        const newReversPosition = iniReverPosition- 10;
        // const result=parseInt(newReversPosition )

        const teeeeeleeepooratiooon = caseType[newReversPosition];

        holdCase.classList.remove(j1.name);
        teeeeeleeepooratiooon.classList.add(j1.name);

        j1.setPosition(newReversPosition);
    }

    if (j1.getPosition() === telePortB.getPosition()) {

        const holdCase = caseType[initialPosi];
        const iniReverPosition = telePortA.getPosition();
        const newReversPosition = iniReverPosition- 10;
        // const result=parseInt(newReversPosition )

        const teeeeeleeepooratiooon = caseType[newReversPosition];

        holdCase.classList.remove(j1.name);
        teeeeeleeepooratiooon.classList.add(j1.name);

        j1.setPosition(newReversPosition);
    }


};
export default mouvTop
