printButton.style.visibility='hidden';
if (document.getElementById("radioMale").checked){
function calculateM() {    
    
   let a = document.getElementById("inputHeight").value;
   let b = parseInt(a);    
   let c = 50 + 0.905 * (b - 152.4);
   
        document.querySelector("#fourMil").innerHTML = '-- ' + c.toFixed(0)*4 + '  ml';
        document.getElementById("fiveMil").innerHTML = '-- ' +  c.toFixed(0)*5 + ' ml';
        document.getElementById("sixMil").innerHTML = '-- ' +  c.toFixed(0)*6 + ' ml';
        document.getElementById("sevenMil").innerHTML = '-- ' +  c.toFixed(0)*7 + ' ml';
        document.getElementById("eightMil").innerHTML = '-- ' +  c.toFixed(0)*8 + ' ml'; 
        
        calcButton.style.visibility='hidden';
        printButton.style.visibility='visible';
    }
}
else if(document.getElementById("radioFemale").checked){

function calculateF() {
    let a = document.getElementById("inputHeight").value;
    let b = parseInt(a);    
    let c = 45.5 + 0.905 * (b - 152.4);        
        
        document.getElementById("fourMil").innerHTML = (c.toFixed(0)*4)+ ' ml';
        document.getElementById("fiveMil").innerHTML = c.toFixed(0)*5;
        document.getElementById("sixMil").innerHTML = c.toFixed(0)*6;
        document.getElementById("sevebMil").innerHTML = c.toFixed(0)*7;
        document.getElementById("eightMil").innerHTML = c.toFixed(0)*8;
    }

}
gsap.from('.volumes p, output', {opacity: 0, duration: 1.1, ease: 'Power2.easeInOut', stagger: 0.1})

gsap.from('#title', {opacity: 0, duration: 1.3, y: -40, ease: 'elastic.out(1.5, 0.3)'})

//gsap.from('#fourMil', {opacity: 0, duration: 1.5, ease: 'Power2.easeInOut'})

calcButton.addEventListener("click", calculateM);
calcButton.addEventListener("click", calculateF);
