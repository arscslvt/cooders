history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};

var rep = [];

document.getElementById('home').addEventListener('click', function(){
    rep = [];
    console.clear();
});


document.getElementById('d1r1').addEventListener('click', function(){
    rep.push(11);
    console.log('D1R1 - '+rep);
});
document.getElementById('d1r2').addEventListener('click', function(){
    rep.push(12);
    console.log('D1R2 - '+rep);
});


document.getElementById('d2r1').addEventListener('click', function(){
    rep.push(21);
    console.log('D2R1 - '+rep);
});
document.getElementById('d2r2').addEventListener('click', function(){
    rep.push(22);
    console.log('D2R2 - '+rep);
});


document.getElementById('d3r1').addEventListener('click', function(){
    rep.push(31);
    console.log('D3R1 - '+rep);
});
document.getElementById('d3r2').addEventListener('click', function(){
    rep.push(32);
    console.log('D3R2 - '+rep);
});
document.getElementById('d3r3').addEventListener('click', function(){
    rep.push(33);
    console.log('D3R3 - '+rep);
});
document.getElementById('d3r4').addEventListener('click', function(){
    rep.push(34);
    console.log('D1R4 - '+rep);
});


document.getElementById('d4r1').addEventListener('click', function(){
    rep.push(41);
    console.log('D4R1 - '+rep);
});
document.getElementById('d4r2').addEventListener('click', function(){
    rep.push(42);
    console.log('D4R2 - '+rep);
});
document.getElementById('d4r3').addEventListener('click', function(){
    rep.push(43);
    console.log('D4R3 - '+rep);
});
document.getElementById('d4r4').addEventListener('click', function(){
    rep.push(44);
    console.log('D4R4 - '+rep);
});


document.getElementById('d5r1').addEventListener('click', function(){
    rep.push(51);
    console.log('D5R1 - '+rep);
});
document.getElementById('d5r2').addEventListener('click', function(){
    rep.push(52);
    console.log('D5R2 - '+rep);
});


document.getElementById('d6r1').addEventListener('click', function(){
    rep.push(61);
    console.log('D6R2 - '+rep);
});
document.getElementById('d6r2').addEventListener('click', function(){
    rep.push(62);
    console.log('D6R2 - '+rep);
});


document.getElementById('d7r1').addEventListener('click', function(){
    rep.push(71);
    console.log('D7R1 - '+rep);
    results();
});
document.getElementById('d7r2').addEventListener('click', function(){
    rep.push(72);
    console.log('D7R2 - '+rep);
    results();
});
document.getElementById('d7r3').addEventListener('click', function(){
    rep.push(83);
    console.log('D7R3 - '+rep);
    results();
});
document.getElementById('d7r4').addEventListener('click', function(){
    rep.push(74);
    console.log('D7R4 - '+rep);
    results();
});


function results(){
    var type = "";
    var organ = "";
    var led = "";
    var code = "";
    var pc = "";
    var os = "";
    var music = "";

    switch (rep[0]) {
        case 11:
            type="stabile";
            break;
        case 12:
            type="instabile";
            break;
        default:
            alert('Ho riscontrato degli errori! Mi dispice. Prova a ripetere il test.');
            break;
    }

    switch (rep[1]) {
        case 21:
            organ="ordinato";
            break;
        case 22:
            organ="disordinato";
            break;
        default:
            alert('Ho riscontrato degli errori! Mi dispice. Prova a ripetere il test.');
            break;
    }

    switch (rep[2]) {
        case 31:
            led="persona felice";
            break;
        case 32:
            led="persona mite";
            break;
        case 33:
            led="persona sognatrice";
            break;
        case 34:
            led="persona 'no-bad-vibes'";
            break;
        default:
            alert('Ho riscontrato degli errori! Mi dispice. Prova a ripetere il test.');
            break;
    }

    switch (rep[3]) {
        case 41:
            code="non ti piace essere disurbato/a";
            break;
        case 42:
            code="non ti piace lasciare un pò lo smartphone";
            break;
        case 43:
            code="non ti piace l'assoluto silenzio";
            break;
        case 44:
            code="non ti piacciono troppo le routine quotidiane";
            break;
        default:
            alert('Ho riscontrato degli errori! Mi dispice. Prova a ripetere il test.');
            break;
    }

    switch (rep[4]) {
        case 51:
            pc="movimentata";
            break;
        case 52:
            pc="sedentaria";
            break;
        default:
            alert('Ho riscontrato degli errori! Mi dispice. Prova a ripetere il test.');
            break;
    }

    switch (rep[5]) {
        case 61:
            os="fai di tutto per non avere altri problemi";
            break;
        case 62:
            os="ti piace il rischio";
            break;
        default:
            alert('Ho riscontrato degli errori! Mi dispice. Prova a ripetere il test.');
            break;
    }

    switch (rep[6]) {
        case 71:
            music="hai uno spirito forte";
            break;
        case 72:
            music="sfrutti moltissima fantasia";
            break;
        case 73:
            music="sei abbastanza 'basic'";
            break;
        case 74:
            music="forse ti copre un velo di tristezza";
            break;
        default:
            alert('Ho riscontrato degli errori! Mi dispice. Prova a ripetere il test.');
            break;
    }

    document.getElementById('results').innerHTML = 'Ciao coder! Sei un tipo/a abbastanza ' + type + '. Ti piace essere ' + organ + ', questo stile di vita incide sicuramente sul coding.' + 'Sei una ' + led + '. Sicuramente ' + code + '. Svolgi una vita tipicamente ' + pc + '. Vedo che ' + os + '. Devo dire anche che ' + music + '.<br><br>Nonostante questi risultati so per certo che sei una persona fantastica. Cerca di migliorare sempre te stesso e raggiungi i tuoi obiettivi.<br><br>Buon coding!';
} 