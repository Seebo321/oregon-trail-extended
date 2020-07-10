class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers=[]
        this.avaiableSeats=capacity
    }
    getAvailableSeatCount() {
        this.avaiableSeats=this.capacity-this.passengers.length
        console.log(this.passengers)
        let seats=this.avaiableSeats
        return seats
    }
    join (traveler){
       this.getAvailableSeatCount()
        if(this.avaiableSeats<=0){return console.log('wagon is full')}else{
        this.passengers.push(traveler)
    }}
    shouldQuarantine(){
    if(this.passengers.some(travelerInWagon => travelerInWagon.isHealthy === false)){
           return true;
        } else{
            return false;
        }
    }
    totalFood(){
    let totalNums = this.passengers.map(nums => nums.food).reduce((a, b) => a + b, 0);
        console.log(totalNums)
        return totalNums
    }
}
