class Traveler {
    constructor (name) {
        this.name = name
        this.food=1
        this.isHealthy=true
    }
    hunt (){ 
        this.food+=2
    }   
    eat (){
        if(this.food<=0){this.isHealthy=false}else{this.food-=1}
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