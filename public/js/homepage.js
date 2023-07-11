const search = () => {
    const searchBox = document.getElementById('searchPlayer').value.toUpperCase();
    const cardList = document.getElementById('bottomSection')
    const card = document.querySelectorAll(".patPlayer")
    const cardName = cardList.getElementsByTagName("p")

    for (let i = 0; i < cardName.length; i++) {
        let match = card[i].getElementsByTagName('p')[0];

        if (match) {
            let textValue = match.textContent || match.innerHTML

            if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                card[i].style.display = "";
            } else {
                card[i].style.display = "none";
            }
        }
    }
}

const submitBtns = document.querySelectorAll('.submitBtn');
const patPlayers = document.querySelectorAll('.patPlayer');
const selectedPlayers = document.getElementById("selectedPlayers");

for (let i = 0; i < submitBtns.length; i++) {
    submitBtns[i].addEventListener('click', () => {
        let newPlayer = document.createElement("div");
        newPlayer.dataset.id = submitBtns[i].dataset.id;
        newPlayer.classList.add("patPlayer");

        let playerName = document.createElement("p");
        playerName.classList.add("playerName");
        playerName.textContent = patPlayers[i].querySelector("p").textContent;

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.textContent = "Delete";

        newPlayer.appendChild(playerName);
        newPlayer.appendChild(deleteBtn);

        selectedPlayers.appendChild(newPlayer);

        deleteBtn.addEventListener('click', () => {
            selectedPlayers.removeChild(newPlayer)
        })
    });
}