function Calculator(base) {
    this.value = base;
    this.base = base; 
  }
  
  Calculator.prototype.add = function (num) {
    if (typeof num === 'number') {
      this.value += num;
    }
  };
  
  Calculator.prototype.sub = function (num) {
    if (typeof num === 'number') {
      this.value -= num;
    }
  };
  
  Calculator.prototype.set = function (num) {
    if (typeof num === 'number') {
      this.value = num;
    }
  };
  
  Calculator.prototype.get = function () {
    return this.value;
  };
  
  Calculator.prototype.reset = function () {
    this.value = this.base; 
  };
  
  const calc = new Calculator(100);
  
  calc.add(10);
  calc.add(10);
  calc.sub(20);
  calc.set(20);
  calc.add(10);
  calc.add(10);
  calc.add('qwe');
  console.log(calc.get()); // 40
  
  calc.reset();
  console.log(calc.get()); // 100