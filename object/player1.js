

class Player {
    constructor(name, hp,pa, mouv, atak, armor, r) {
        this.setName(name);
        this.setHp(hp);
        this.setPaMax(pa)
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
    setHp(hp) {
        this.hp = hp;
    }
    getHp() {
        return this.hp
    }
    // ************* Pa ****************
    setPaMax(pa){
        this.pa = pa
    }
    getPaMax(){
        return this.pa
    }
    // ***********mouv**************
    setMouvMax(mouv) {
        this.mouv = mouv;
    }
    getMouvMax() {
        return this.mouv;
    };
    // **********atak****************
    setAtak(atak) {
        this.atak = atak;
    }
    getAtak() {
        return this.atak
    }
    // ************ armor *****************
    setArmor(armor) {
        this.armor = armor
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
    setRevers(r) {
        this.revers = r
    };
    getRevers() {
        return this.revers
    };



}


export default Player