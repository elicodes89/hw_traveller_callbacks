const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation
  });

  };


Traveller.prototype.getJourneyEndLocations = function () {
return this.journeys.map((journey) => {
  return journey.endLocation
});
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result =  this.journeys.filter((journey) => {
  return journey.transport === transport;;
})
return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((totalDistance, journey) => {
    return totalDistance + journey.distance;
  }, 0);
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map((journey) => {
    return journey.transport;
  })
  .filter((transport, index, array) => {
    return array.indexOf(transport) === index;
  });
};


module.exports = Traveller;
