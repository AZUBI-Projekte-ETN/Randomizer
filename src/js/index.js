document.addEventListener("DOMContentLoaded", function() {
    let name = document.getElementById('name');
    let randBtn = document.querySelector('.rand-button');

    let fullNames = [];


    name.addEventListener("change", () => {
        if (!/[a-zA-ZÄäÖöÜü]/.test(name.value)) {
            name.value = '';
            alert('Only exepting letters and umlauts');
        } else {
            addName(name.value);
        }
    });

    randBtn.addEventListener("click", () => {
        if (fullNames.length == 0) {
            alert('No names to Randomize')
        } else {
            while (fullNames.length != 0) {
                randomizeName();
            }
        }
    });
        
    function addName(name) {
        fullNames.push(name);
        name.value = '';
        addNameToDomList();
    }

    function deleteName(index) {
        fullNames.splice(index, 1);
    }

    function setNameInDom(name) {
        document.querySelector('.grid-container').innerHTML += `<div class="grid-item">${name}<div/>`;
    }

    function addNameToDomList() {
        clearNamesInDom();
         for (let i = 0;i<fullNames.length;i++) {
             document.querySelector('.names').innerHTML += `<li>${fullNames[i]}</li>`;
         }
    }

    function clearNamesInDom() {
        document.querySelector('.names').innerHTML = '';
    }

    function randomizeName() {
        let randInt = Math.floor(Math.random() * fullNames.length);
        setNameInDom(fullNames[randInt]);
        deleteName(randInt);
        addNameToDomList();
    }

})


