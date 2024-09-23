// ----------------------------page routing between blog and home page-----------------------------------

document.getElementById('blog').addEventListener('click', function() {
    window.location.href = './blog.html'
  });

  
// ---------------------------------  Tab Swithching Buttons  -------------------------------
const donate = document.getElementById('donate')
const history = document.getElementById('history');

const donateSection = document.getElementById('donate-section') ;
const historySection = document.getElementById('history-section') ; 

history.addEventListener('click', function () {
    history.classList.add('bg-lime-400');
    history.classList.add('hover:bg-lime-500');

    donate.classList.remove('bg-lime-400');

    
    donateSection.classList.add('hidden') ;

    
    historySection.classList.remove('hidden')
}) ;

donate.addEventListener('click', function () {
    donate.classList.add('bg-lime-400');

    history.classList.remove('bg-lime-400');

    historySection.classList.add('hidden');

    donateSection.classList.remove('hidden')
});

// ------------------------------------------  Reusable Get Value Function ----------------------------

function getNumber(string) {
    const number = parseFloat(string);
    return number ;
}

//-------------------------------- Donate For Noakhali Section ---------------------------------------- 


document.getElementById('btn-donate-noakhali').addEventListener('click', function () {
    const amountForNoakhali = document.getElementById('amount-for-noakhali').value;
    const forNoakhaliNumber = getNumber(amountForNoakhali);
    const raisedForNoakhali = document.getElementById('raised-for-noakhali').innerText;
    const raisedForNoakhaliNumber = getNumber(raisedForNoakhali);
    let availableBalance = document.getElementById('available-balance').innerText;
    let availableBalanceNumber = getNumber(availableBalance);


    if (isNaN(forNoakhaliNumber) || forNoakhaliNumber <= 0 ) {
        document.getElementById('amount-for-noakhali').value = '';
        return alert('Invalid') ;
    }

    if (availableBalanceNumber < forNoakhaliNumber) {
        document.getElementById('amount-for-noakhali').value = '';
        return alert('Insufficient Balance');
    } else {
        const updatedNoakhaliNumber = forNoakhaliNumber + raisedForNoakhaliNumber;
        document.getElementById('raised-for-noakhali').innerText = updatedNoakhaliNumber;

        let UpdatedBalanceNumber = availableBalanceNumber - forNoakhaliNumber;
        document.getElementById('available-balance').innerText = UpdatedBalanceNumber;

    }

    document.getElementById('amount-for-noakhali').value = '';

}) ;

// ---------------------------- Donate For Feni Section ---------------------

document.getElementById('btn-donate-feni').addEventListener('click', function () {
    const amountForFeni = document.getElementById('amount-for-feni').value;
    const forFeniNumber = getNumber(amountForFeni);
    const raisedForFeni = document.getElementById('raised-for-feni').innerText;
    const raisedForFeniNumber = getNumber(raisedForFeni);
    let availableBalance = document.getElementById('available-balance').innerText;
    let availableBalanceNumber = getNumber(availableBalance);


    if (isNaN(forFeniNumber) || forFeniNumber <= 0 ) {
        document.getElementById('amount-for-feni').value = '';
        return alert('Invalid');
    }

    if (availableBalanceNumber < forFeniNumber) {
        document.getElementById('amount-for-feni').value = '';
        return alert('Insufficient Balance')
    } else {
        const updatedFeniNumber = forFeniNumber + raisedForFeniNumber ;
        document.getElementById('raised-for-feni').innerText = updatedFeniNumber;

        let UpdatedBalanceNumber = availableBalanceNumber - forFeniNumber;

        document.getElementById('available-balance').innerText = UpdatedBalanceNumber;

    }

    document.getElementById('amount-for-feni').value = '';
}) ;


// ---------------------------- Donate For Quota Students Section ---------------------

document.getElementById('btn-donate-students').addEventListener('click' , function(){
    const amountForStudent = document.getElementById('amount-for-student').value ; 
    const forStudentNumber = getNumber(amountForStudent) ;
    const raisedForStudent= document.getElementById('raised-for-students').innerText ; 
    const raisedForStudentNumber = getNumber(raisedForStudent) ;
    let availableBalance = document.getElementById('available-balance').innerText;
    let availableBalanceNumber = getNumber(availableBalance);
   
   if(isNaN(forStudentNumber) || forStudentNumber <= 0){
       document.getElementById('amount-for-student').value = ''
       return alert ('Invalid');
   }  
   
   if(availableBalanceNumber < forStudentNumber){
    alert ('Insufficient Balance') ;
    document.getElementById('amount-for-student').value = '' ;
   } else{

     const updateStudentNumber = forStudentNumber + raisedForStudentNumber ; 
     document.getElementById('raised-for-students').innerText = updateStudentNumber ; 

     let UpdatedBalanceNumber = availableBalanceNumber - forStudentNumber ;

     document.getElementById('available-balance').innerText = UpdatedBalanceNumber;

   }

   document.getElementById('amount-for-student').value = ''
}) ;
