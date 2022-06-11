// **************************************** IMPORT **************************************
import creatTable from './functionBox/creatTable.js';
import Player from './object/player1.js';
import WeaPons from './object/weapons.js';
import mouvTop from './mouv/mouvTop.js';
import mouvRight from './mouv/mouvRight.js';
import mouvLeft from './mouv/mouvLeft.js';
import mouvDown from './mouv/mouvDown.js';
import TelePort from './object/teleporter.js';
import checker from './functionBox/Checker.js';


const main = () => {

    // ****************************************  VARIABLE ET FONCTION VRAC ******************************************************************************

    const ranDom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
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

    const playerOne = new Player("player1",200, 20, 99, 4, 5);
    const playertwo = new Player("player2",200, 10, 50, 4, 5);

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
     const pa = document.querySelector("#pa");
     pa.innerText=playerOne.getPaMax();




    //************************************* ARMES *******************************************************************************

    const sword = new WeaPons("sword", 10, 50, 0, 0, 1);
    const chopped = new WeaPons("chopped", 15, 50, 2, 1, -1);
    const shield = new WeaPons("shield", 1, 2, 3, 4,-1);
    const boot = new WeaPons("boot", 1, 2, 3, 4, 50)

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
        let mouvPt= playertwo.getMouvMax();
        if (ptMouv === 0 || mouvPt === 0) return;



        if (key === "z") {
            mouvTop(playerOne, telePortA, telePortB, sword, chopped, shield, boot);
            ptMouv = playerOne.getMouvMax();
            ptMouv--;
            playerOne.setMouvMax(ptMouv);
            const mp= document.querySelector('#pm');        
            mp.innerText= playerOne.getMouvMax();
            
        
            // console.log(playerOne.setMouvMax())

        };

        if (key === "ArrowUp") {
            mouvTop(playertwo, telePortA, telePortB, sword, chopped, shield, boot);
            mouvPt = playertwo.getMouvMax();
            mouvPt--;

            playertwo.setMouvMax(mouvPt);
            const mp= document.querySelector('#pm');        
            mp.innerText= playertwo.getMouvMax();
            
        
            // console.log(playerOne.setMouvMax())

        };
 

        if (key === "d") {
            mouvRight(playerOne, telePortA, telePortB, sword, chopped, shield, boot);
            ptMouv = playerOne.getMouvMax();
            ptMouv--;

            playerOne.setMouvMax(ptMouv);
            const mp= document.querySelector('#pm');        
            mp.innerText= playerOne.getMouvMax();

            // console.log(playerOne.setMouvMax())

        };

        if (key === "ArrowRight") {
            mouvRight(playertwo, telePortA, telePortB, sword, chopped, shield, boot);
            mouvPt = playertwo.getMouvMax();
            mouvPt--;

            playertwo.setMouvMax(mouvPt);
            const mp= document.querySelector('#pm');        
            mp.innerText= playertwo.getMouvMax();
            
        
            // console.log(playerOne.setMouvMax())

        };
 


         
        if (key === "q") {
            mouvLeft(playerOne, telePortA, telePortB, sword, chopped, shield, boot);
            ptMouv = playerOne.getMouvMax();
            ptMouv--;
            playerOne.setMouvMax(ptMouv);
            const mp= document.querySelector('#pm');        
            mp.innerText= playerOne.getMouvMax();

            // console.log(playerOne.setMouvMax())

        };

        if (key === "ArrowLeft") {
            mouvLeft(playertwo, telePortA, telePortB, sword, chopped, shield, boot);
            mouvPt = playertwo.getMouvMax();
            mouvPt--;

            playertwo.setMouvMax(mouvPt);
            const mp= document.querySelector('#pm');        
            mp.innerText= playertwo.getMouvMax();
            
        
            // console.log(playerOne.setMouvMax())

        };
 



        if (key === "s") {
            mouvDown(playerOne, telePortA, telePortB, sword, chopped, shield, boot);
            ptMouv = playerOne.getMouvMax();
            ptMouv--;
            playerOne.setMouvMax(ptMouv);
            const mp= document.querySelector('#pm');        
            mp.innerText= playerOne.getMouvMax();

            // console.log(playerOne.setMouvMax())

        }

        if (key === "ArrowDown") {
            mouvDown(playertwo, telePortA, telePortB, sword, chopped, shield, boot);
            mouvPt = playertwo.getMouvMax();
            mouvPt--;
            playertwo.setMouvMax(mouvPt);
            const mp= document.querySelector('#pm');        
            mp.innerText= playertwo.getMouvMax();
            
        
            // console.log(playerOne.setMouvMax())

        };
 

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
    console.log(checker(44));
    console.log(checker(80));
    console.log(checker(55));
    console.log(checker(12));
    console.log(checker(5));








        console.log(checker(55));
        // console.dir(caseType[47]);



}
addEventListener('load', main)

