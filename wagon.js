class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers=[]
        this.avaiableSeats=null
        console.log('you have found a wagon!')
    }
    getAvailableSeatCount() {
        this.avaiableSeats=this.capacity-this.passengers.length
        console.log(this.passengers)
        let seats=this.avaiableSeats
        console.log('The amount of open seats on this wagon is '+seats)
        return seats
    }
    join (traveler){
       this.getAvailableSeatCount()
        if(this.avaiableSeats<=0){return console.log('wagon is full')}else{
        this.passengers.push(traveler)
        console.log(traveler.name+' has joined the wagon!')
    }}
    shouldQuarantine(){
    if(this.passengers.some(travelerInWagon => travelerInWagon.isHealthy === false)){
        console.log('Yeah should prolly quarantine this here wagon')
           return true;
        } else{console.log("pssshhhhh you we all good here Cap'in")
            return false;
        }
    }
    totalFood(){
        // https://stackoverflow.com/questions/16626735/how-to-loop-through-an-array-containing-objects-and-access-their-properties
        // below code was helped achieved by above link
    let totalNums = this.passengers.map(nums => nums.food).reduce((a, b) => a + b, 0);
        console.log('The toal amount of food on the wagon is '+totalNums+'.')
        return totalNums
    }
}
