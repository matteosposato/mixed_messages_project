//Arrays of horoscope's signs and option of fortune
const horo_signs = ['ram', 'bull', 'twins', 'crab', 'lion', 'virgin', 'balance', 'scorpion', 'archer', 'goat', 'water bearer', 'fish'];
const fortune_opt = ['very lucky', 'lucky','a bit lucky', 'neither lucky nor unlucky', 'a bit unlucky', 'unlucky', 'very unlucky'];

//This function returns random sign
const getRandomSign = () => {
    const randNumSign = Math.floor(Math.random() * 12);
    const randSign = horo_signs[randNumSign];
    return randSign;
};

//This function returns random option of fortune
const getRandomLucky = () => {
    const randNumLucky = Math.floor(Math.random() * 7);
    const randLucky = fortune_opt[randNumLucky];
    return randLucky;
};

//This function generate horoscope's message
const horo_msg = {
    name : '',
    surname : '',
    sign : getRandomSign(),
    work : getRandomLucky(),
    healthcare : getRandomLucky(),
    love : getRandomLucky(),
    get fullName () {
        return  this.name + " " + this.surname;
    },
    get message(){
        return `Hello ${this.fullName}.\nYour sign is ${this.sign}.\nIn work you are ${this.work}.\nIn heathcare you are ${this.healthcare}.\nIn love you are ${this.love}.`
    }
};

//These two lines of code set value to name and surname of 'horo_msg' objects
//--Values can be edited--
horo_msg.name = 'Matteo';
horo_msg.surname = 'Sposato';

//Output of the horoscope generated message
console.log(horo_msg.message);