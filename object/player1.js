

class Player {
    constructor(name, hp, mouv, atak, armor,r) {
        this.setName(name);
        this.setHp(hp);
        this.setMouvMax(mouv);
        this.setAtak(atak);
        this.setArmor(armor);
        this.setPosition(0);
        this.setRevers(r);
    }
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ les set & get $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    // ********* name ****************
    setName(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    // ************* position ********************
    // *************** hp *********************************
    setHp(hp, H = 0) {
        this.hp = hp + H;
    }
    getHp() {
        return this.hp
    }
    // ***********mouv**************
    setMouvMax(mouv, M = 0) {
       this.mouv = mouv + M;
    }
    getMouvMax() {
        return this.mouv;
    };
    // **********atak****************
    setAtak(atak, A = 0) {
        this.atak = atak + A;
    }
    getAtak() {
        return this.atak
    }
    // ************ armor *****************
    setArmor(armor, S = 0) {
        this.armor = armor + S
    }
    getArmor() {
        return this.armor
    }
    setPosition(p) {
        this.position = p
    }
    getPosition() {
        return this.position
    }
    setRevers(r){
        this.revers=r
    };
    getRevers(){
        return this.setRevers
    };



}


export default Player