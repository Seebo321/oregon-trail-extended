class Traveler {
    constructor (name) {
        this.name = name
        this.food=1
        this.isHealthy=true
        console.log(name+ ' has appeared!')
    }
    hunt (){ 
        console.log(this.name+' went out hunting and found 2 food!')
        this.food+=2
    }   
    eat (){
        if(this.food<=0){
            console.log(this.name + ' is out of food and now unhealthy')
            this.isHealthy=false}
                else{
                    console.log(this.name +' has eaten some food!')
                     this.food-=1}
    }   
}



class Doctor extends Traveler{
    constructor(name){
    super(name)}
    heal(patient) {
        console.log('here lemme check you out '+ patient.name+'.')
        patient.isHealthy=true}
}

class Hunter extends Traveler{
    constructor(name){
    super(name)
    this.food=2
}
   hunt(){
    console.log(this.name+' went out hunting and found 5 food!')   
    this.food+=5}
   eat(){if(this.food<2){
    console.log(this.name + ' is out of food and now unhealthy')
                this.food=0
                this.isHealthy=false}
        else{
            console.log(this.name +' has eaten some food!')
            this.food-=2}}
    giveFood(hungrySap,numOfFoodUnits){
        if(numOfFoodUnits>this.food){console.log('haha just kidding not enough food to give you')}else{
        console.log(hungrySap.name+' you can have my left overs.')
        this.food-=numOfFoodUnits
        hungrySap.food+=numOfFoodUnits
    }}

}
                    // testing below
// let joe= new traveler('joe')
// console.log('test '+joe.food)
// console.log('test '+joe.isHealthy)

// joe.eat()
// console.log(joe.food)
// console.log(joe.isHealthy)

// joe.eat()
// console.log(joe.food)
// console.log(joe.isHealthy)
// joe.hunt()
// wagon1.join(joe)