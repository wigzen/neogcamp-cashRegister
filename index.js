let btnClicked=document.querySelector('#check-btn');
let paidAmt=document.querySelector('#cash-given');
let billAmt=document.querySelector('#bill-amount');
let noOfNotes=document.querySelectorAll('#num-notes');
let displayMessage=document.querySelector('#message');

let availableNotes=[2000,500,100,20,10,5,1];

btnClicked.addEventListener('click',function clickHandler(){
    clearTable();
    if(billAmt.value>0){
        if(paidAmt.value-billAmt.value>=0){
            hideMessage();
            let change=paidAmt.value-billAmt.value;
            calculateChange(change);
        }
        else {
            showMessage("Do you want to wash plates?");
        }
    } else{
        showMessage("Invalid Amount");
    }
    

});

function calculateChange(change){
    let numberOfNotes=0;
    for(let i=0;i<availableNotes.length;i++){

        noOfNotes[i].style.opacity=1;

        if(change>=availableNotes[i]){   
            numberOfNotes=Math.trunc(change/availableNotes[i]);
            noOfNotes[i].innerText=numberOfNotes;
        }
        else{
            noOfNotes[i].innerText='0';
        }

        change=change%availableNotes[i];

    }
    
}

function clearTable(){
    for(let i=0;i<availableNotes.length;i++){
        noOfNotes[i].style.opacity=0;
    }
    
}

function showMessage(message){
    displayMessage.innerText=message;
    displayMessage.style.display="block";
}

function hideMessage(){
    displayMessage.style.display="none"; 
}