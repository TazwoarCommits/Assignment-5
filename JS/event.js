// ----------------------------page routing between blog and home page-----------------------------------

document.getElementById('blog').addEventListener('click', function () {
    window.location.href = './blog.html'
});



// ------------------------------------------ One Reusable Get Value Function ----------------------------

function getNumber(string) {
    const number = parseFloat(string);
    return number;
}

//-------------------------------- Donate For Noakhali Section ---------------------------------------- 


document.getElementById('btn-donate-noakhali').addEventListener('click', function () {
    const amountForNoakhali = document.getElementById('amount-for-noakhali').value;
    const forNoakhaliNumber = getNumber(amountForNoakhali);
    const raisedForNoakhali = document.getElementById('raised-for-noakhali').innerText;
    const raisedForNoakhaliNumber = getNumber(raisedForNoakhali);
    let availableBalance = document.getElementById('available-balance').innerText;
    let availableBalanceNumber = getNumber(availableBalance);

    if (isNaN(forNoakhaliNumber) || forNoakhaliNumber <= 0) {
        document.getElementById('amount-for-noakhali').value = '';
        return alert('Invalid');
    }

    if (availableBalanceNumber < forNoakhaliNumber) {
        document.getElementById('amount-for-noakhali').value = '';
        return alert('Insufficient Balance');
    } else {
        const updatedNoakhaliNumber = forNoakhaliNumber + raisedForNoakhaliNumber;
        document.getElementById('raised-for-noakhali').innerText = updatedNoakhaliNumber.toFixed(2);

        let UpdatedBalanceNumber = availableBalanceNumber - forNoakhaliNumber;
        document.getElementById('available-balance').innerText = UpdatedBalanceNumber.toFixed(2);

    }

    const historyItem1 = document.createElement('div');

    historyItem1.className = 'bg-yellow border-2 p-4 md:p-12 rounded-xl shadow-xl ml-4 md:ml-8';

    historyItem1.innerHTML = `
  <h2 class = "text-xl md:text-3xl font-semibold"> ${forNoakhaliNumber} Taka is Donated for famine-2024 at Noakhali, Bangladesh </h2>
  <p> ${new Date().toLocaleDateString()} </p>
`;

    const historyContainer = document.getElementById('history-container');

    historyContainer.insertBefore(historyItem1, historyContainer.firstChild);

    document.getElementById('amount-for-noakhali').value = '';

    return alert(' Congrates!!! You Have Donated For Humankind Successfully.')

});

// ---------------------------- Donate For Feni Section ---------------------

document.getElementById('btn-donate-feni').addEventListener('click', function () {
    const amountForFeni = document.getElementById('amount-for-feni').value;
    const forFeniNumber = getNumber(amountForFeni);
    const raisedForFeni = document.getElementById('raised-for-feni').innerText;
    const raisedForFeniNumber = getNumber(raisedForFeni);
    let availableBalance = document.getElementById('available-balance').innerText;
    let availableBalanceNumber = getNumber(availableBalance);


    if (isNaN(forFeniNumber) || forFeniNumber <= 0) {
        document.getElementById('amount-for-feni').value = '';
        return alert('Invalid');
    }

    if (availableBalanceNumber < forFeniNumber) {
        document.getElementById('amount-for-feni').value = '';
        return alert('Insufficient Balance')
    } else {
        const updatedFeniNumber = forFeniNumber + raisedForFeniNumber;
        document.getElementById('raised-for-feni').innerText = updatedFeniNumber.toFixed(2);

        let UpdatedBalanceNumber = availableBalanceNumber - forFeniNumber;

        document.getElementById('available-balance').innerText = UpdatedBalanceNumber.toFixed(2);

    }

    const historyItem2 = document.createElement('div');

    historyItem2.className = 'bg-yellow border-2 p-4 md:p-12 rounded-xl shadow-xl ml-4 md:ml-8';

    historyItem2.innerHTML = `
  <h2 class = "text-xl md:text-3xl font-semibold"> ${forFeniNumber} Taka is Donated for famine-2024 at Feni, Bangladesh </h2>
  <p> ${new Date().toLocaleDateString()} </p>
`;

    const historyContainer = document.getElementById('history-container');

    historyContainer.insertBefore(historyItem2, historyContainer.firstChild);


    document.getElementById('amount-for-feni').value = '';

    return alert(' Congrates!!! You Have Donated For Humankind Successfully.')
});


// ---------------------------- Donate For Quota Students Section ---------------------

document.getElementById('btn-donate-students').addEventListener('click', function () {
    const amountForStudent = document.getElementById('amount-for-student').value;
    const forStudentNumber = getNumber(amountForStudent);
    const raisedForStudent = document.getElementById('raised-for-students').innerText;
    const raisedForStudentNumber = getNumber(raisedForStudent);
    let availableBalance = document.getElementById('available-balance').innerText;
    let availableBalanceNumber = getNumber(availableBalance);

    if (isNaN(forStudentNumber) || forStudentNumber <= 0) {
        document.getElementById('amount-for-student').value = ''
        return alert('Invalid');
    }

    if (availableBalanceNumber < forStudentNumber) {
        alert('Insufficient Balance');
        document.getElementById('amount-for-student').value = '';
    } else {

        const updateStudentNumber = forStudentNumber + raisedForStudentNumber;
        document.getElementById('raised-for-students').innerText = updateStudentNumber.toFixed(2);

        let UpdatedBalanceNumber = availableBalanceNumber - forStudentNumber;

        document.getElementById('available-balance').innerText = UpdatedBalanceNumber.toFixed(2);
    }

    const historyItem3 = document.createElement('div');

    historyItem3.className = 'bg-yellow border-2 p-4 md:p-12 rounded-xl shadow-xl ml-4 md:ml-8';

    historyItem3.innerHTML = `
  <h2 class = "text-xl md:text-3xl font-semibold"> ${forStudentNumber} Taka is Donated for famine-2024 at Feni, Bangladesh </h2>
  <p> ${new Date().toLocaleDateString()} </p>
`;

    const historyContainer = document.getElementById('history-container');

    historyContainer.insertBefore(historyItem3, historyContainer.firstChild);


    document.getElementById('amount-for-student').value = ''

    return alert(' Congrates!!! You Have Donated For Humankind Successfully.')
});


// ---------------------------------  Tab Swithching Buttons  -------------------------------
const donate = document.getElementById('donate')
const history = document.getElementById('history');

const donateSection = document.getElementById('donate-section');
const historySection = document.getElementById('history-section');

history.addEventListener('click', function () {

    history.classList.add('bg-lime-400', 'text-black');

    history.classList.remove('text-gray-500');

    donate.classList.remove('bg-lime-400');

    donate.classList.add('text-gray-500');

    donateSection.classList.add('hidden');


    historySection.classList.remove('hidden')
});

donate.addEventListener('click', function () {

    donate.classList.add('bg-lime-400', 'text-black');

    donate.classList.remove('text-gray-500');

    history.classList.remove('bg-lime-400', 'text-black');

    history.classList.add('text-gray-500')

    historySection.classList.add('hidden');

    donateSection.classList.remove('hidden');
});
