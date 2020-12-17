//$(document).ready(function () {
const loadNextStepURL = 'api/feature/eurolifecalculatortool/load-next-step';
const nextButton = $('#go-to-next-step'); 
const stepContent = $('#step-content');
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



//});


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
    url: `${loadNextStepURL}`,//?itemid=${itemId}&step=${nextStep}`,
    contentType: 'application/json; charset=utf-8',
    cache: false,
    data: JSON.stringify(userSelection),
    success: function (response) {
      stepContent.html(response);
      loading = false;
      breadcrumbStepActive(nextStep);
      nextButton.prop('disabled', loading);
      nextButtonInActive();
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

function nextButtonInActive() {
  nextButton.addClass('btn--inactive');
}

function breadcrumbStepActive(step) {
  console.log(step);
  $(".bread-in-tool ul li span").removeClass("current");
  $('#bread-' + step).addClass('current'); 
}