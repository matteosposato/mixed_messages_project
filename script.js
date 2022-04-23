const horo_signs = ['ram', 'bull', 'twins', 'crab', 'lion', 'virgin', 'balance', 'scorpion', 'archer', 'goat', 'water bearer', 'fish'];
const fortune_opt = ['very lucky', 'lucky','a bit lucky', 'neither lucky nor unlucky', 'a bit unlucky', 'unlucky', 'very unlucky'];

const getRandomSign = () => {
    const randNumSign = Math.floor(Math.random() * 12);
    const randSign = horo_signs[randNumSign];
    return randSign;
}

const getRandomLucky = () => {
    const randNumLucky = Math.floor(Math.random() * 7);
    const randLucky = fortune_opt[randNumLucky];
    return randLucky;
}
//console.log(`randNumSign: ${randNumSign}\nrandSign : ${horo_signs[randNumSign]}`);
//console.log(`randNumLucky: ${randNumLucky}\nYou are ${fortune_opt[randNumLucky]}.`);

const horo_msg = {
    sign : getRandomSign(),
    lucky : getRandomLucky(),
    get fullName () {
        return  this.name + " " + this.surname;
    },
    get message(){
        return `Hello ${this.fullName}.\nYour sign is ${this.sign}.\nIn work you are ${this.work}.\nIn heathcare you are ${this.healthcare}.\nIn love you are ${this.love}.`
    }
};

horo_msg.name = 'Matteo';
horo_msg.surname = 'Sposato';
horo_msg.work = getRandomLucky();
horo_msg.healthcare = getRandomLucky();
horo_msg.love = getRandomLucky();

console.log(horo_msg.message);