// sb3.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1() {
    let output = 'Would you climb a hill? Anything.<br>Wear a dafodill? Anything.<br>Leave me all your will? Anything.<br>Even fight my bill? What fisticuffs?'

    return output
}

function verse2() {
    let output = 'Would you lace my shoe? Anything.<br>Paint your face bright blue? Anything.<br>Catch a kangaroo? Anything.<br>Go to Timbuctu? And back again.'

    return output
}

function chorus1() {
    let output = 'I\'d do anything for you, dear, anything.<br>For you mean everything to me.<br>I know that I\'d go anywhere for your smile, anywhere.<br>For your smile everywhere I see.'

    return output
}

function chorus2() {
    let output = 'I\'d risk everything. For one kiss, everything.<br>Yes I\'d do anything. Anything?<br>Anything for you.'

    return output
}
function chorus3() {
    let output = 'Would you rob a shop? Anything.<br>Would you risk the drop? Anything.<br>Though your eyes go POP! Anything.<br>When you come down PLOP! Hang everything.<br>We\'d risk life and limb. To keep you in the swim.<br>Yes we\'d do anything. Anything? Anything for you.'

    return output
}

function main() {
    let finalOutput = `<p>${chorus1()}</p><p>${verse1()}</p><p>${chorus2()}</p><p>${chorus1()}</p><p>${verse2()}</p><p>${chorus2()}</p><p>${chorus1()}</p><p>${chorus3()}</p>`
    // used to build lyrics string
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput
}

window.onload = function () {
    main()
}