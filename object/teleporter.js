class TelePort{
    constructor(name,p,e,s,r){
        this.setName(name);
        this.setPosition(p);
        // this.setEnterDir(e);
        // this.setExitDir(s);
        // this.setReverDir(r);
    }
    setName(name){
        this.name=name
    }
    getName(){
        return this.name
    };
    setPosition(p){
        this.position=p
    };
    getPosition(){
        return this.position
    };
    // setEnterDir(e){
    //     this.EnterDIr=e
    // };
    // getEnterDir(){
    //     return this.EnterDIr
    // };
    // setExitDir(s){
    //     this.ExitDir=s
    // };
    // getExitDir(){
    //     return this.ExitDir
    // };
    // setReverDir(r){
    //     this.ReverDir=r rf
    // };
    // getReverDir(){
    //     return this.ReverDir
    // };

}
export default TelePort