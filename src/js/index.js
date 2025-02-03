document.addEventListener("DOMContentLoaded", function() {
    let vorname = document.getElementById('vorname');
    let randBtn = document.querySelector('.rand-button');

    let fullNames = []

    vorname.addEventListener("change", addName);
    randBtn.addEventListener("click", randomizeName);



    function addName(e) {
        fullNames.push(e.target.value);
        vorname.value = '';
        clearNames();
        showNames();
    }

    function showNames() {
        for (let i = 0;i<fullNames.length;i++) {
            document.querySelector('.names').innerHTML += `<li>${fullNames[i]}</li>`
        }
    }

    function randomizeName() {
        let randInt = Math.floor(Math.random() * fullNames.length)
        console.log(randInt)
    }


    function clearNames() {
        document.querySelector('.names').innerHTML = '';
    }


})


