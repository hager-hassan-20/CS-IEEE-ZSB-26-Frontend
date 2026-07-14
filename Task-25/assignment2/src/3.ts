class Info{
    theName:string;
    theAge:number;
    constructor(theName:string , theAge:number){
        this.theName = theName
        this.theAge =theAge
    }
}
class Full extends Info{
    country:string;
    constructor(theName:string , theAge:number, country:string){
        super(theName,theAge)
        this.country = country
    }
}

function showInfo(data: Info) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));

function showFullInfo(data: Full) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
  console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));