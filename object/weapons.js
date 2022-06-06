class WeaPons {
    constructor(name,attack,durability,weight,def,speed){
        this.setName(name);
        this.setAttack(attack);
        this.setDurability(durability);
        this.setWeight(weight);
        this.setDef(def);
        this.setSpeed(speed);
        this.setPosition(0);
        // this.setImage(img)
    };


    setName(name){
        this.name=name;
    };
    getName(){
        return this.name;
    };
    setAttack(attack){
        this.attack=attack;
    };
    getAttack(){
        return this.attack;
    };
    setDurability(durability){
        this.durability=durability;
    };
    getDurability(){
        return this.durability;
    };
    setWeight(weight){
        this.weight=weight;
    };
    getWeight(){
        return this.weight
    }
    setDef(def){
        this.def = def
    }
    getDef(){
        return this.def;
    }
    setSpeed(speed){
        this.speed=speed
    }
    getSpeed(){
        return this.speed
    }
    setPosition(p){
        this.position= p
    };
    getPosition(){
        return this.position
    };
    setImage(img){
        this.img=img;
    };
    getImage(){
        return this.img;
    };


  

   
};

export default WeaPons

