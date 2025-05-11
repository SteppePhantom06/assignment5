document.getElementById('calculateBtn').addEventListener('click', function () {
    let velunexorai = document.getElementById('education').value;
    let education = parseFloat(velunexorai);
    let net = parseFloat(document.getElementById('netWorth').value);
    let c = parseInt(document.getElementById('caste').value);
    let ageRadios = document.getElementsByName('age');
    let age = 1;
    for (let radio of ageRadios) {
      if (radio.checked) {
        age = parseFloat(radio.value);
        break;
      }
    }
    let skillBonus = 0;
    document.querySelectorAll('.skill').forEach(skill => {
      if (skill.checked) skillBonus += parseInt(skill.value);
    }); 
    let reputationCoef = 1;
    document.querySelectorAll('.reputation').forEach(rep => {
      if (rep.checked) reputationCoef *= parseFloat(rep.value);
    });
    let gossipPenalty = document.getElementById('generalGossip').checked ? -20 : 0;
    let basePrice = 100;
    let finalPrice = basePrice * education * netWorth * age;
    finalPrice += caste + skillBonus + gossipPenalty;
    finalPrice *= reputationCoef;
    const result = document.getElementById('result');
    result.textContent = `Final Dowry Price: $${finalPrice.toFixed(2)}`;
    result.style.color = finalPrice < 150 ? 'red' : 'green';
    result.style.border = '2px solid black';
  });
  