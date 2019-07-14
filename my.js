let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.isMale = function () {
        if (this.gender === 'Male') {
            return true;
        }
        if (this.gender === 'FeMale') {
            return false
        }
    };

    this.setGender = function (gender) {
        this.gender = gender;
    };

    this.eatApple = function () {
        if (Apple) {
            this.weight++;
        }
    };

    this.say = function () {
        this.text = document.getElementById(this.name).value;
        console.log(this.name + ": " + this.text);
        document.getElementById(this.name).value = null;
    };

    this.getName = function () {
        return this.name;
    };

    this.getWeight = function () {
        return this.weight;
    };

    this.setName = function (name) {
        this.name = name;
    };

    this.setWeight = function (weight) {
        this.weight = weight;
    }
};

let AppleOJ = function (weight) {
    this.weight = weight;

    this.isEmpty = function () {
        if (this.weight > 0) {
            return true;
        }
        if (this.weight < 0) {
            return false;
        }
    };

    this.isEmpty();

    this.weightDecrease = function () {
        if (this.isEmpty()) {
            this.weight--;
        }
    };

    this.getWeight = function () {
        return this.weight;
    }
};

let Adam = new Human('Adam', 'Male', 70);
let Eva = new Human('Eva', 'FeMale', 55);
let Apple = new AppleOJ(10);

function showWeight() {
    Adam.getWeight();
    Eva.getWeight();
    Apple.getWeight();
    document.getElementById("weightAdam").innerHTML = Adam.weight + " kg";
    document.getElementById("weightEva").innerHTML = Eva.weight + " kg";
    document.getElementById("AppleWeight").innerHTML = Apple.weight;

}

function AdamEatApple() {
    Apple.weightDecrease();
    Apple.getWeight();
    if (Apple.isEmpty()) {
        Adam.setWeight(Adam.weight + 1);
        Adam.getWeight();
    }
    showWeight();
}

function EvaEatApple() {
    Apple.weightDecrease();
    Apple.getWeight();
    if (Apple.isEmpty()) {
        Eva.setWeight(Eva.weight + 1);
        Eva.getWeight();
    }
    showWeight();
}

function Adamsay() {
    Adam.say();
}

function Evasay() {
    Eva.say();
}

showWeight();