function addToParty(partyNum, character) {
  var party = document.getElementById("party" + partyNum);
  
  // 이미 등록된 캐릭터인지 확인
  var characterBtns = party.getElementsByTagName("button");
  for (var i = 0; i < characterBtns.length; i++) {
      if (characterBtns[i].textContent === character) {
          alert("이미 등록된 캐릭터입니다.");
          return; // 이미 등록된 캐릭터면 함수 종료
      }
  }

  var characterBtn = document.createElement("button");
  characterBtn.textContent = character;
  characterBtn.onclick = function() {
      removeFromParty(characterBtn);
  };
  party.appendChild(characterBtn);
}

function removeFromParty(characterBtn) {
  // characterBtn의 부모 요소인 파티로부터 characterBtn 제거
  var party = characterBtn.parentNode;
  party.removeChild(characterBtn);
}
