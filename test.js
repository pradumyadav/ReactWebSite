const myObj = {
    5994: '87',
    9128: '718',
    9512: '87',
    9537: '87',
    '0025': '1',
    '0013': '45',
    '0047': '67',
    '0123': '15',
};

const totalObj = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
};

console.log(myObj);

Object.keys(myObj).forEach((key) => {
    console.log(key);
    console.log(key.split(''));
    if (key.split('')[1] === '0') {
        totalObj[0] += parseInt(myObj[key]);
    } else if (key.split('')[1] === '1') {
        totalObj[1] += parseInt(myObj[key]);
    } else if (key.split('')[1] === '2') {
        totalObj[2] += parseInt(myObj[key]);
    } else if (key.split('')[1] === '3') {
        totalObj[3] += parseInt(myObj[key]);
    } else if (key.split('')[1] === '4') {
        totalObj[4] += parseInt(myObj[key]);
    } else if (key.split('')[1] === '5') {
        totalObj[5] += parseInt(myObj[key]);
    } else if (key.split('')[1] === '6') {
        totalObj[6] += parseInt(myObj[key]);
    } else if (key.split('')[1] === '7') {
        totalObj[7] += parseInt(myObj[key]);
    } else if (key.split('')[1] === '8') {
        totalObj[8] += parseInt(myObj[key]);
    } else if (key.split('')[1] === '9') {
        totalObj[9] += parseInt(myObj[key]);
    }
});

console.log(totalObj);
