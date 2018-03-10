class SmartCalculator {
    constructor(initialValue) {
       
        this.remember('',initialValue)
    }

    add(number) {
        this.remember('+', number);
        return this
    }

    subtract(number) {
        this.remember('-', number);
        return this
    }

    multiply(number) {
        this.remember('*', number);
        return this
    }

    devide(number) {
        this.remember('/', number);
        return this
    }

    pow(number) {
        this.remember('**', number);
        return this
    }



    
}

module.exports = SmartCalculator;
