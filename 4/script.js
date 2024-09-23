//////////////////////////// question : write a class to calculate the Uber price.////////////////

class uberPriceCalculator {
    constructor(peakTime, baseFare, minuteRate, kilometerRate) {
      this.peakTime = peakTime;
      this.baseFare = baseFare;
      this.minuteRate = minuteRate;
      this.kilometerRate = kilometerRate;
    }
  
    getPrice(rideDistance, rideDuration, isPeak) {
      let totalFare = this.baseFare;
      const distanceCost = rideDistance * this.mileRate;
      const timeCost = rideDuration * this.minuteRate;
  
      if (isPeak) {
        totalFare += (distanceCost + timeCost) * this.peakTime;
      } else {
        totalFare += distanceCost + timeCost;
      }
  
      return totalFare;
    }
  }
  
  // Usage example:
  
  const uber = new uberPriceCalculator(1.5, 2.5, 0.5, 1.0);
  const price = uber.getPrice(3, 60, true);
  console.log(price);
  /*The Uber class in the provided code represents an Uber service that can calculate the cost of a ride. 
  
  peakTime: This parameter represents the surge pricing multiplier, which is a number that Uber uses to increase fares during peak demand times. 
  baseFare: This parameter represents the initial fare amount for the ride, before adding on the distance and time costs.
  minuteRate: This parameter represents the rate per minute for the ride. Uber charges a certain amount per minute that a ride takes place.
  kilometerRate: This parameter represents the rate per kilometer for the ride. Uber charges a certain amount per mile that the ride covers.
  The calculatePrice method of the Uber class is responsible for calculating the total fare for a ride. This method takes four parameters: rideDistance, rideDuration, and isPeak.
  
  rideDistance: This parameter represents the distance of the ride in kilometr.
  rideDuration: This parameter represents the duration of the ride in minutes.
  isPeak: This parameter is a boolean that indicates whether the ride is occurring during a peaktime. If ispeak is true, the peaktime pricing multiplier will be applied to the total fare.
  The calculatePrice method calculates the total fare by first adding the baseFare to the totalFare.
   It then multiplies the rideDistance by the mileRate and the rideDuration by the minuteRate to get the cost of the distance and the time, respectively.
    If the isSurge parameter is true, the method multiplies the sum of the distance and time costs by the peakTime and adds this amount to the totalFare. If the ispeak parameter is false, the method simply adds the distance and time costs to the totalFare.
  
  
  */