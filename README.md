
[Uploading index.html…]()<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Dowry Calculator</title>
  <link rel="stylesheet" href="static/style/style.css" />
</head>
<body>
  <script src="script.js"></script>
  <h1>Dowry Calculator</h1>
  <form id="dowryForm">
    <label>Education:
      <select id="education">
        <option value="1.5">Undergraduate</option>
        <option value="1.2">College</option>
        <option value="1.05">High School</option>
        <option value="0.9">Middle School</option>
      </select>
    </label>
    <label>Family Net Worth:
      <select id="netWorth">
        <option value="2">More than $10,000</option>
        <option value="1.5">Between $5,000 and $10,000</option>
        <option value="1.2">Less than $5,000</option>
      </select>
    </label>

    <label>Caste:
      <select id="caste">
        <option value="100">Brahmin (+$100)</option>
        <option value="50">Kshatriya (+$50)</option>
        <option value="20">Vaishya (+$20)</option>
        <option value="10">Shudra (+$10)</option>
        <option value="-50">Untouchable (-$50)</option>
      </select>
    </label>
    <fieldset>
      <legend>Skills:</legend>
      <label><input type="checkbox" class="skill" value="10">mood maker</label>
      <label><input type="checkbox" class="skill" value="20">Good cook</label>
      <label><input type="checkbox" class="skill" value="15">Easygoing</label>
      <label><input type="checkbox" class="skill" value="10">Contant maker</label>
    </fieldset>
    <fieldset>
      <legend>Age:</legend>
      <label><input type="radio" name="age" value="1.5" checked> 18–23 zhastar</label>
      <label><input type="radio" name="age" value="1.2"> 24–27 erkekter</label>
      <label><input type="radio" name="age" value="0.95"> 28+ norm</label>
    </fieldset>
    <fieldset>
      <legend>Reputation (negative factors):</legend>
      <label><input type="checkbox" class="reputation" value="0.85"> Gossips about parents</label>
      <label><input type="checkbox" class="reputation" value="0.9"> Gossips about character</label>
      <label><input type="checkbox" id="generalGossip" value="-20"> General gossip</label>
    </fieldset>
    <button type="button" id="calculateBtn">Calculate</button>
  </form>
  <div id="result">Final Dowry Price: $100</div>
</body>
</html>





[Uploading style.css…]()body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f7f7f7;
  }
h1 {
    text-align: center;
    color: #222;
  }

form {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  
label, fieldset {
    display: block;
    margin: 10px 0;
  }
  
#result {
    margin-top: 20px;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    color: green;
}
  





[Uploading script.js…]()document.getElementById('calculateBtn').addEventListener('click', function () {
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
  
