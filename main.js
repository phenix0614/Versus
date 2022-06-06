// **************************************** IMPORT **************************************
import creatTable from './functionBox/creatTable.js';
import Player from './object/player1.js';
import WeaPons from './object/weapons.js';
import mouvTop from './mouv/mouvTop.js';
import mouvRight from './mouv/mouvRight.js';
import mouvLeft from './mouv/mouvLeft.js';
import mouvDown from './mouv/mouvDown.js';
import TelePort from './object/teleporter.js';


const main = () => {

    // ****************************************  VARIABLE ET FONCTION VRAC ******************************************************************************
    const caseType = document.querySelectorAll('td');

    const ranDom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    // const checker = (Idnbr, map) => {
    //     const check = map[Idnbr];
    //     if (check.classList.length === 0) {
    //         return true
    //     } else {
    //         return false
    //     }

    // }
    // *********************************************************  timer   ***************************************************************
    const timerWatch= document.querySelector('#chrono');
    let timer= 60;
    

   const timelaps = () => {
        timerWatch.innerText = timer;
        timer --;
        if (timer >= 0) {
            setTimeout(timelaps, 1000);
        }else{
            clearTimeout();
        }
    }  
    timelaps();


    // ******************************************************** CREATION ELEMENT DE JEU *******************************************************************

    //  CASE NOIR

    const genBlackCase = (nbrWall) => {
        const caseType = document.querySelectorAll('td');

        for (let i = 0; i < nbrWall; i++) {

            const randomT = ranDom(0, 99);
            caseType[randomT].classList.add("desactive");

        }

    }
    //  TELEPORTEUR

    const telePortA = new TelePort("telePortA", 0,);
    const telePortB = new TelePort("telePortB", 0);

    const genteleport = (name) => {
        const caseType = document.querySelectorAll('td');
        const random = ranDom(0, 99);
        const td = caseType[random];

        if (td.classList.length === 0) {
            td.classList.add(name.getName())
            name.setPosition(random);

        } else {

            genteleport(name);
        }

    };

    // ******************************************  JOUEUR + position *********************************************

    const playerOne = new Player("player1", 200, 99, 4, 5);
    const playertwo = new Player("player2", 200, 3, 4, 5);

    const genPosition = (p1, p2) => {
        const caseType = document.querySelectorAll('td');

        const random = ranDom(0, 99);
        const td = caseType[random];
        if (td.classList.length === 0) {
            td.classList.add(p1.getName());
            p1.setPosition(random);
        } else {
            genPosition(p1, p2);
        }

    }
    const mp= document.querySelector('#pm');        
    mp.innerText= playerOne.getMouvMax();




    //************************************* ARMES *******************************************************************************

    const sword = new WeaPons("sword", 10, 50, 0, 0, 3);
    const chopped = new WeaPons("chopped", 15, 50, 2, 1, 3);
    const shield = new WeaPons("shield", 1, 2, 3, 4, 5);
    const boot = new WeaPons("boot", 1, 2, 3, 4, 5)

    const genWeapon = (name, weapons) => {

        const caseType = document.querySelectorAll('td');
        const random = ranDom(0, 99);
        const td = caseType[random];
        if (td.classList.length === 0) {

            td.classList.add(weapons.getName());
            weapons.setPosition(random);
        } else {
            genWeapon(name, weapons);
        }
    };

// *********************************************** mouvement player ****************************************************************

    document.body.addEventListener("keyup", (event) => {
        const key = event.key;
        let ptMouv = playerOne.getMouvMax();
        if (ptMouv === 0) return;

        if (key === "z") {
            mouvTop(playerOne, telePortA, telePortB, sword, chopped, shield, boot);
            ptMouv--;
            playerOne.setMouvMax(ptMouv);
            const mp= document.querySelector('#pm');        
            mp.innerText= playerOne.getMouvMax();
            
        
            // console.log(playerOne.setMouvMax())

        };
        if (key === "d") {
            mouvRight(playerOne, telePortA, telePortB, sword, chopped, shield, boot);
            ptMouv--;
            playerOne.setMouvMax(ptMouv);
            const mp= document.querySelector('#pm');        
            mp.innerText= playerOne.getMouvMax();

            // console.log(playerOne.setMouvMax())

        };
        if (key === "q") {
            mouvLeft(playerOne, telePortA, telePortB, sword, chopped, shield, boot);
            ptMouv--;
            playerOne.setMouvMax(ptMouv);
            const mp= document.querySelector('#pm');        
            mp.innerText= playerOne.getMouvMax();

            // console.log(playerOne.setMouvMax())

        };
        if (key === "s") {
            mouvDown(playerOne, telePortA, telePortB, sword, chopped, shield, boot);
            ptMouv--;
            playerOne.setMouvMax(ptMouv);
            const mp= document.querySelector('#pm');        
            mp.innerText= playerOne.getMouvMax();

            // console.log(playerOne.setMouvMax())

        }
        console.log(playerOne.getMouvMax())
    })



    creatTable(10);
    genBlackCase(15);

    genPosition(playerOne, playertwo);
    genPosition(playertwo, playerOne);

    genteleport(telePortA);
    genteleport(telePortB);


    genWeapon(sword.getName(), sword);
    genWeapon(chopped.getName(), chopped);
    genWeapon(shield.getName(), shield);
    genWeapon(boot.getName(), boot);

    console.log(playerOne)
    console.log(playerOne.getMouvMax())
    console.log(playertwo)
    console.log(telePortA)
    console.log(telePortB)
    console.log(sword)
    console.log(chopped)
    console.log(shield)
    console.log(boot)
    // console.log(checker(35,caseType));







        // console.log(checker(35, caseType));
        // console.dir(caseType[47]);



}
addEventListener('load', main)





