function addToParty(partyNum, character) {
  var party = document.getElementById("party" + partyNum);
  var characterBtn = document.createElement("button");
  characterBtn.textContent = character;
  characterBtn.onclick = function() {
      removeFromParty(partyNum, character);
  };
  party.appendChild(characterBtn);
}

function removeFromParty(partyNum, character) {
  var party = document.getElementById("party" + partyNum);
  var characterBtns = party.getElementsByTagName("button");
  for (var i = 0; i < characterBtns.length; i++) {
      if (characterBtns[i].textContent === character) {
          party.removeChild(characterBtns[i]);
          break;
      }
  }
}
