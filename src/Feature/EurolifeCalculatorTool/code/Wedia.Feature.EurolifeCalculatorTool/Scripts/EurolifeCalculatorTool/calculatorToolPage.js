const loadNextStepURL = 'api/feature/eurolifecalculatortool/load-next-step';
const getProductsURL = 'api/feature/eurolifecalculatortool/get-offer';
const nextButton = $('#go-to-next-step'); 
const calculationButton = $('#get-product'); 
const stepContent = $('#step-content');
const step1 = 'step-1';
const step2 = 'step-2';
const step3 = 'step-3';
const step4 = 'step-4';
var loading = false;
var step_2_valid = false;

var userSelection = [];

  //step1 - select target
$('[name="target"]').change(function (e) { 
  //save selection to an object
  let targetGroup = { key: $(this).val(), title: $(this).data('title') };
  userSelection = { targetGroup : targetGroup};

  console.log({ userSelection });

  //update button
  nextButtonActive();
})

function showNextStep(e) {
  console.log('dataset');
  console.log(e.dataset);
  let nextStep = e.dataset.nextstep;
  let itemId = e.dataset.itemid;

  loading = true;

  nextButton.prop('disabled', loading);

  userSelection.itemId = itemId
  userSelection.step = nextStep

  if (nextStep == step3) {//we are on step 2
    fillFamilyMembers();
  }

  console.log({ userSelection });

  $.ajax({
    type: 'POST',
    url: `${loadNextStepURL}`,
    contentType: 'application/json; charset=utf-8',
    cache: false,
    data: JSON.stringify(userSelection),
    success: function (response) {
      stepContent.html(response);
      loading = false;
      breadcrumbStepActive(nextStep);
      nextButton.prop('disabled', loading);
      nextButtonInactive();

      if (nextStep === step2) {
        initializeStep2();
      }

      if (nextStep === step3) {
        initializeStep3();
      }      
    },
    error: function (error) {
      loading = false;
      nextButton.prop('disabled', loading);
    }
  });
}

function getOffer(e) {
  var selectedAmount = $('ul.range-labels li[class="active selected"]');
  let amount = { key: $(selectedAmount).data('value'), title: $(selectedAmount).text(), guiid: $(selectedAmount).data('guiid') };

  userSelection.amount = amount;

  var roomoffer = $("input[name=room-offer]");
  var checkedRoom = roomoffer.filter(":checked");
  let hospitalization = { key: $(checkedRoom).attr('id'), title: $(checkedRoom).data('title'), guiid: $(checkedRoom).data('guiid') };

  userSelection.hospitalization = hospitalization;  
  userSelection.step = step4;
 
  console.log({ userSelection });

  loading = true;
  calculationButton.prop('disabled', loading);
  calculationButton.addClass('btn--inactive');

  $.ajax({
    type: 'POST',
    url: `${getProductsURL}`,
    contentType: 'application/json; charset=utf-8',
    cache: false,
    data: JSON.stringify(userSelection),
    success: function (response) {
      stepContent.html(response);
      loading = false;
      breadcrumbStepActive(step4);
      calculationButton.prop('disabled', loading);
      calculationButton.removeClass('btn--inactive');
    },
    error: function (error) {
      console.log(error);
      loading = false;     
      calculationButton.prop('disabled', loading);
      calculationButton.removeClass('btn--inactive');
    }
  });
}



function nextButtonActive() {
  nextButton.removeClass('btn--inactive');
}

function nextButtonInactive() {
  nextButton.addClass('btn--inactive');
}

function nextButtonStep(nextStep) {
  console.log('update button data');
  console.log(nextStep);
  nextButton.attr({ 'data-nextstep': nextStep });
}

function breadcrumbStepActive(step) {
  console.log(step);
  $(".bread-in-tool ul li span").removeClass("current");
  $('#bread-' + step).addClass('current'); 
}

function validateYear(e) {
  if (e.validity.valid == true) {
    console.log('valid');    
    e.dataset.isvalid = 'true';   
    step2Validity();
  } else {
    e.dataset.isvalid = 'false';
    step_2_valid = false;
    nextButtonInactive();
  }
}


function initializeStep2() {

  nextButtonStep(step3);

  const targetsRemove = document.querySelectorAll('.js-remove-parent');
  if (targetsRemove != null) {
    for (const target of targetsRemove) {
      target.addEventListener('click', _ => {
        target.parentElement.parentElement.classList.add('target-group--deactive');
        const year = target.parentElement.parentElement.getElementsByClassName('js-birth-year');
        year[0].setAttribute("disabled", "disabled");
        const choice = target.parentElement.parentElement.getElementsByClassName('js-radio-choice');
        choice[0].setAttribute("disabled", "disabled");
      });
    }
  }

  const targetsAdd = document.querySelectorAll('.js-add-parent');
  if (targetsAdd != null) {
    for (const target of targetsAdd) {
      target.addEventListener('click', _ => {
        target.parentElement.parentElement.classList.remove('target-group--deactive');
        const year = target.parentElement.parentElement.getElementsByClassName('js-birth-year');
        const choice = target.parentElement.parentElement.getElementsByClassName('js-radio-choice');
        year[0].removeAttribute("disabled");
        choice[0].removeAttribute("disabled");
      });
    }
  }

  Array.prototype.slice.call(document.querySelectorAll('.js-target'))
    .map(function (container) {
      return {
        input: container.querySelector('.person-number'),
        decrease: container.querySelector('.symbol--minus'),
        increase: container.querySelector('.symbol--plus'),
        yearinput: container.querySelector('.target-group__birth input'),
        get value() { return parseInt(this.input.value); },
        set value(v) { this.input.value = v; }
      }
    })
    .forEach(function (item) {
      item.decrease.addEventListener('click', function () {
        if (item.value > 0) item.value -= 1;
        if (item.value == 0) {
          item.yearinput.setAttribute("disabled", "disabled");
          this.parentElement.parentElement.classList.add('target-group--deactive');
        }
      });
      item.increase.addEventListener('click', function () {
        if (item.value < 10) item.value += 1;
        if (item.value == 1) {
          item.yearinput.removeAttribute("disabled");
          this.parentElement.parentElement.classList.remove('target-group--deactive');
        }
      });
    });
}

function step2Validity() {
  console.log('step2Validity');

  $(".target-group.item-targeted").children().each(function (item) {    
    if ($(this).hasClass('target-group--deactive')) {
      console.log('deactive');     
    } else {
      console.log('active');    
      var invalidElements = $(this).find('[data-isvalid="false"]');    
      if (invalidElements.length > 0) {
        step_2_valid = false;
        return false;
      } else {
        step_2_valid = true; 
      }     
    }
  });

  if (step_2_valid) {
    nextButtonActive();
  }
   
}

function fillFamilyMembers() {
  let familyMembers = [];
  $(".target-group.item-targeted").children().each(function (item) {
    if (!$(this).hasClass('target-group--deactive')) {
      var image = $(this).find("img");
      var birthDate = $(this).find('.js-birth-year');
      var isPrimaryInsured = false;
      var inputPrimary = $(this).find("input[name=primary-insured]");

      if (inputPrimary.length > 0) {
        var isChecked = inputPrimary.filter(":checked");
        if (isChecked.length > 0) {
          console.log("is Checked");
          isPrimaryInsured = true;
        }
      }

      var title = $(this).find('[data-title]').first().data('title');

      var childNumberInput = $(this).find('.person-number');

      if (childNumberInput.length > 0) {
        var childVal = $(childNumberInput).val();
        title = `${childVal} ${title}`;
      }

      let familyMember = {
        image: image.first().attr("src"),
        birthDate: birthDate.first().val(),
        title: title,
        isPrimaryInsured: isPrimaryInsured
      };
      console.log(familyMember);
      familyMembers.push(familyMember);
    }
  });

  userSelection.familyMembers = familyMembers;
}


function initializeStep3() {
  //clear common button wrapper
  $('#common-button-wrapper').html('');


  //range
  var sheet = document.createElement('style'),
    $rangeInput = $('.range input'),
    prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

  document.body.appendChild(sheet);

  var getTrackStyle = function (el) {
    console.log(el.getAttribute('data-index'))
    var curVal = el.value,
      val = (el.getAttribute('data-index') - 1) * 25,
      style = '';

    // Set active label
    $('.range-labels li').removeClass('active selected');
    console.log(curVal)
    var curLabel = $('.range-labels').find('[data-value="' + curVal + '"]');

    curLabel.addClass('active selected');
    curLabel.prevAll().addClass('selected');

    // Change background gradient
    for (var i = 0; i < prefs.length; i++) {
      style += '.range {background: linear-gradient(to right, #383B38 0%, #37adbf ' + val + '%, #fff ' + val + '%, #fff 100%)}';
      style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #383B38 0%, #383B38 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
    }

    return style;
  }

  $rangeInput.on('input', function () {
    sheet.textContent = getTrackStyle(this);
  });

  // Change input value on label click
  $('.range-labels li').on('click', function () {
    var index = $(this).index();
    // console.log($(this).attr('data-value'))
    $rangeInput.attr('data-index', $(this).attr('data-liindex'));
    $rangeInput.val($(this).attr('data-value')).trigger('input');


  });

}

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
  //console.log(extras)
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