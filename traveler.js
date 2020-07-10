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