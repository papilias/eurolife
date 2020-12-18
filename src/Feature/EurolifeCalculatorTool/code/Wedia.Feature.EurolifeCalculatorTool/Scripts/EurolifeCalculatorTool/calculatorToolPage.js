const loadNextStepURL = 'api/feature/eurolifecalculatortool/load-next-step';
const nextButton = $('#go-to-next-step'); 
const stepContent = $('#step-content');
const step1 = 'step-1';
const step2 = 'step-2';
const step3 = 'step-3';
var loading = false;

var userSelection = [];

  //step1 - select target
$('[name="target"]').change(function (e) { 
  //save selection to an object
  let targetGroup = { key: $(this).val(), value: $(this).data('title') };
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
    console.log(e.value);

    step2Validity();
  }
  //if (e.validity.valid == true)
  //  document.getElementById('go-to-step-2').classList.remove('btn--inactive');
  //else
  //  document.getElementById('go-to-step-2').classList.add('btn--inactive');
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
  //logic here...

  nextButtonActive();
}


function initializeStep3() {
  //clear common button wrapper
  $('#common-button-wrapper').html('');
}