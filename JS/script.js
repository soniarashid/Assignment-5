const selection = [];


function addToCart(element) {
    const playerName = element.parentNode.children[0].innerText;
    const player = {
        playerName: playerName
    }
    selection.push(player);
    // this.disabled = 'true';
    displayPlayers();
}

function displayPlayers() {
    const selectNumber = document.getElementById("select-number");
    selectNumber.innerText = selection.length;
    const selectPlayer = document.getElementById("select-player");
    selectPlayer.textContent = '';

    const btnSelect = document.getElementsByClassName("btn-select");
    if (selectNumber.innerText <= 5) {
        for (let i = 0; i < selection.length; i++) {
            const tr = document.createElement("tr");
            tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${selection[i].playerName}</td>
         `;
            selectPlayer.appendChild(tr);
        }

    }
    else {
        alert('You can not select more than five players !!');
        selectNumber.innerText = '';
    }
}