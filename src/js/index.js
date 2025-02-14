document.addEventListener("DOMContentLoaded", function() {
    let name = document.getElementById('name');
    let randBtn = document.querySelector('.rand-button');

    let fullNames = [];


    name.addEventListener("change", addName);
    randBtn.addEventListener("click", () => {
        if (fullNames.length == 0) {
            alert('No names to Randomize')
        } else {
            while (fullNames.length != 0) {
                randomizeName();
            }
        }
    });
        
    function addName(e) {
        fullNames.push(e.target.value);
        name.value = '';
        showNames();
    }

    function setNameInDom(name) {
        document.querySelector('.grid-container').innerHTML += `<div class="grid-item">${name}<div/>`;
    }

    function deleteName(index) {
        fullNames.splice(index, 1);
    }

    function clearNames() {
        document.querySelector('.names').innerHTML = '';
    }

    function showNames() {
       clearNames();
        for (let i = 0;i<fullNames.length;i++) {
            document.querySelector('.names').innerHTML += `<li>${fullNames[i]}</li>`;
        }
    }

    function randomizeName() {
        let randInt = Math.floor(Math.random() * fullNames.length);
        setNameInDom(fullNames[randInt]);
        deleteName(randInt);
        showNames();
    }





})


