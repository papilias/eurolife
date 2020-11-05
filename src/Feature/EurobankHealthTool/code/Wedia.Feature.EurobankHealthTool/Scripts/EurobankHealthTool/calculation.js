//tool specific javascript

function SelectProgram(e) {
  //leave one program selected
  const items = document.querySelectorAll(".pick__item");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.classList.remove("pick__item--selected");
  }

  e.closest('.pick__item').classList.add('pick__item--selected');
}

function ExpandProgram(e) {
  //expand program
  e.parentElement.parentElement.classList.toggle('pick-on');
}

function ActivateExtras(e) {
  //activate extras
  const items = document.querySelectorAll(".product-extra-radio");
  const extras = document.getElementsByClassName("pick--extras");
  
  if (extras.length > 0) extras[0].classList.toggle('pick--extras__deactive');

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (e.checked == true) {
      item.removeAttribute("disabled");
    }
    else {
      item.setAttribute("disabled", "disabled");
      item.checked = false;
    }
  }
}


function ShowNextToolStep(e) {

  //show only next step
  if (!e.classList.contains('btn--inactive') && agefound) {
    const items = document.querySelectorAll(".tool-step");
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.classList.add("tool-step--inactive");
    }

    let nextStepId = e.dataset.nextstep;
    document.getElementById('bread-' + nextStepId).classList.add('current');
    document.getElementById(nextStepId).classList.remove('tool-step--inactive');
  }
  if (!e.classList.contains('btn--inactive') && !agefound) {
    document.getElementById('step-1-message').classList.remove('hidden');
    
  }
}

function validateYear(e) {

  if (e.validity.valid == true)
    document.getElementById('go-to-step-2').classList.remove('btn--inactive');
  else
    document.getElementById('go-to-step-2').classList.add('btn--inactive');
}

function validateRadio(e) {
  if (e.checked)
    document.getElementById('go-to-step-3').classList.remove('btn--inactive');
}

var agefound;
var currentAge;

function CalculatePrices() {


  var birthYear;
  var targets = document.getElementsByName("target");
  if (targets) {
    for (var i = 0; i < targets.length; i++) {
      if (targets[i].checked) {
        var targetIs = targets[i].value;
        var parent = targets[i].parentElement;
        var selectedBirthYear = parent.getElementsByClassName(targets[i].dataset.birth)[0];
        birthYear = selectedBirthYear.value;
        break;

      }
    }


    var today = new Date();
    var year = today.getFullYear();

    currentAge = year - birthYear;

    //first rehide all figures
    var AllFigures = document.getElementsByClassName('js-product-figure');

    for (var i = 0, len = AllFigures.length | 0; i < len; i = i + 1 | 0) {
      AllFigures[i].classList.add('hidden');
      AllFigures[i].getElementsByClassName('current-age')[0].innerHTML = currentAge + ' ετών';
    }

    //then show the correct selection
    var figuresToShow = document.getElementsByClassName('product-figure-' + targetIs);

    for (var i = 0, len = figuresToShow.length | 0; i < len; i = i + 1 | 0) {
      figuresToShow[i].classList.remove('hidden');
    }

  }


  if (excelData) {
    for (var i = 0; i < excelData.length; i++) {

      if (excelData[i].Age == currentAge) {
        agefound = excelData[i].Programs;
        break;
      }
    }
  }

  if (agefound) {
    for (var j = 0; j < agefound.length; j++) {

      let PremiumPerYear = agefound[j].PremiumFinalPrice;
      let PremiumPerMonth = (PremiumPerYear / 12).toFixed(2);

      document.getElementById('pick-premium-' + agefound[j].PremiumCode).innerHTML = PremiumPerMonth;
      document.getElementById('selected-premium-' + agefound[j].PremiumCode).innerHTML = PremiumPerYear;

    }
  }
}


function makeProgramSelection(e) {
  if (e.checked) {
    let selectedProgram = e.dataset.productselected;
    var AllPrograms = document.getElementsByClassName('js-picked-program');

    for (var i = 0, len = AllPrograms.length | 0; i < len; i = i + 1 | 0) {
      AllPrograms[i].classList.add('hidden');
    }
    document.getElementById('program-' + selectedProgram).classList.remove('hidden');
  }
}
