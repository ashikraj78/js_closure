// Create the execution context flow of the this function

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    return privateCounter += val;
  }
  return {
    increment: function() {
      return changeBy(1);
    },
    decrement: function() {
      return changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

counter.value();
counter.increment();
counter.increment();
counter.value();
counter.decrement();
counter.value();
