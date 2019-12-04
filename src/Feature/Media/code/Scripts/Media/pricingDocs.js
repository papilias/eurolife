/* -------------
 * Download pricing docs from specific folder
 * -------------*/

$(document).ready(function () {
  $("#datepickerFiles").datepicker({
    format: 'dd-mm-yyyy',
    todayHighlight: true
  });

  const downloadButton = $('#btnDownloadDoc'); 
  var file = file
  var loading = false; 
  loading = true;
  downloadButton.prop('disabled', loading);
  $("#lblWarning").hide();

  loading = false;
  downloadButton.prop('disabled', loading);

  //$.ajax({
  //  type: 'GET',
  //  url: `api/feature/media/pricing-docs?file=${file}`,
  //  contentType: 'application/json; charset=utf-8',
  //  cache: false,
  //  success: function (response) {
  //    let blob = new Blob(['\ufeff' + response], { type: 'application/pdf;charset=utf-8;' });
  //    let dwldLink = document.createElement("a");
  //    let url = URL.createObjectURL(blob);
  //    let isSafariBrowser = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
  //    if (isSafariBrowser) {
  //      dwldLink.setAttribute("target", "_blank");
  //    }
  //    dwldLink.setAttribute("href", url);
  //    dwldLink.setAttribute("download", "Export.csv");
  //    dwldLink.style.visibility = "hidden";
  //    document.body.appendChild(dwldLink);
  //    dwldLink.click();
  //    document.body.removeChild(dwldLink);

  //    loading = false;       
  //    downloadButton.prop('disabled', loading);      
  //  },
  //  error: function (error) {
  //    loading = false;
  //    downloadButton.prop('disabled', loading);
  //    $("#lblWarning").show();
  //  }
  //});
});