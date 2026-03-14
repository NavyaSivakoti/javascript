
//if else block
//if if if else
//if elseif else
//nested if
//switch case   

let x = 15;
if (x >= 10) {
    console.log('hi');
}
else {
    console.log('bye');
}

console.log('--------');

if (true) {
    console.log('hello');
}
else {
    console.log('byeee');
}

console.log('--------');
let isEleExist = false;//pw -- web -- elelement -- true

if (isEleExist) {
    console.log('click on the element');
}
else {
    console.log('throw error');
}


console.log('----nested ifs----');

let marks = 99;

if (marks >= 90) {
    console.log('A grade');
    if (marks >= 95) {
        console.log('A++ grade');
        if (marks === 100) {
                console.log('eligible for scholarship');
        }
        else {
            console.log('not eligible for scholarship');
        }
    }
}
else {
    if (marks <= 80) {
        console.log('Grade B');
    }
    else {
        console.log('Grade B++');
    }
}


console.log('--- if if if else-----');
let browser = 'chrome';

if (browser === 'chrome') {
    console.log('launch chrome');
}
if (browser === 'firefox') {
    console.log('launch ff');
}
if (browser === 'edge') {
    console.log('launch edge');
}
if (browser === 'safari') {
    console.log('launch safari');
}
else {
    console.log('plz pass the right browser, invalid browser...' );
}


console.log('---if elseif else if-----');

let browserName = 'safari';

if (browserName === 'chrome') {
    console.log('launch chrome');
}
else if (browserName === 'firefox') {
    console.log('launch firefox');
}
else if (browserName === 'edge') {
    console.log('launch edge');
}
else if (browserName === 'safari') {
    console.log('launch safari');
}
else {
    console.log('plz pass the right browser, invalid browser...' );
}

