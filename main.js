// **************************************** import **************************************
import creatTable from './functionBox/creatTable.js';
import Player from './object/player1.js';
import WeaPons from './object/weapons.js';
import mouvTop from './mouv/mouvTop.js';
import mouvRight from './mouv/mouvRight.js';
import mouvLeft from './mouv/mouvLeft.js';
import mouvDown from './mouv/mouvDown.js';
import TelePort from './object/teleporter.js';


// *************************************** main *****************************************

const main = () => {
    // ************************************** fonction utiles ****************************************************



    // ******************************* Script ***************************

    creatTable(10);
    const playerOne = new Player("player1", 200, 20, 4, 5);
    const playertwo = new Player("player2", 200, 3, 4, 5);

    // ******************************** generation position *************************************
    const caseType = document.querySelectorAll('td');
    const ranDom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    const genPosition = (p1, p2) => {
        const random = ranDom(0, 99);
        const td = caseType[random];
        if (td.classList.length === 0) {
            td.classList.add(p1.name);
            p1.setPosition(random);
        } else {
            genPosition(p1, p2);
        }

    }
    const genBlackCase = () => {
        for (let i = 0; i < 15; i++) {
            const randomT = ranDom(0, 99);
            caseType[randomT].classList.add("desactive");
        }

    }

    genBlackCase(),
        genPosition(playerOne, playertwo);
    genPosition(playertwo, playerOne);
    console.log(playerOne)
    console.log(playertwo)
    document.body.addEventListener("keyup", (event) => {
        const key = event.key;
        let ptMouv = playerOne.getMouvMax();
        if (key === "z") {
            mouvTop(playerOne, telePortA, telePortB, sword, chopped, shield, boot, caseType);
            ptMouv--;
            playerOne.setMouvMax(ptMouv)
        };
        if (key === "d") {
            mouvRight(playerOne, telePortA, telePortB, sword, chopped, shield, boot, caseType);
            ptMouv--;
            playerOne.setMouvMax(ptMouv)
        };
        if (key === "q") {
            mouvLeft(playerOne,telePortA, telePortB, sword, chopped, shield, boot, caseType);
            ptMouv--;
            playerOne.setMouvMax(ptMouv)
        };
        if (key === "s") {
            mouvDown(playerOne, telePortA, telePortB, sword, chopped, shield, boot, caseType);
            ptMouv--;
            playerOne.setMouvMax(ptMouv)
        }
    })
    console.log(playerOne.getPosition())
    console.log(playertwo.getPosition())
    const telePortA = new TelePort("telePortA",0,);
    const telePortB = new TelePort("telePortB",0)
    console.log(telePortA)
    console.log(telePortB)

    const genteleport = () => {
        const random = ranDom(0, 99);
        const random2=ranDom(0,99);
        const td = caseType[random];
        const td2= caseType[random2]
        console.dir(td)
        // td.classList.length
        if (td.classList.length === 0 && td2.classList.length === 0) {
            td.classList.add("telePortA");
            td2.classList.add("telePortB")

            telePortA.setPosition(random);
            telePortB.setPosition(random2);




        } else {
            genteleport(telePortA);
            telePortA.setPosition(random);
        }
    };
    genteleport(telePortA.getName());
    // genteleport(telePortB.getName());


    const sword = new WeaPons("sword", 10, 50, 0, 0, 3);
    const chopped = new WeaPons("chopped", 15, 50, 2, 1, 3);
    const shield = new WeaPons("shield", 1, 2, 3, 4, 5);
    const boot = new WeaPons("boot", 1, 2, 3, 4, 5)

    const genWeapon = (name, weapons) => {
        const random = ranDom(0, 99);
        const td = caseType[random];
        if (td.classList.length === 0) {

            td.classList.add(name);
            weapons.setPosition(random);
        } else {
            genWeapon(name,weapons);
        }
    };


    genWeapon(sword.getName(), sword)
    genWeapon(chopped.getName(), chopped)
    genWeapon(shield.getName(), shield)
    genWeapon(boot.getName(), boot)
    console.log(sword)
    console.log(chopped)
    console.log(shield)
    console.log(boot)

    const checker=(Idnbr,mapName)=>{
        const check=mapName[Idnbr];
        if(check.classList.length === 0){
            return true
        }else{
            return false
        }

    }

  
    console.log(checker(75,caseType))


}
addEventListener('load', main)





