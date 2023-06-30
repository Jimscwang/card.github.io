$(document).ready(function () {
    $('#removeModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget) // 選則當初觸發事件的按鈕
      var title = button.data('title') // 使用 data-* 來取得特定內容

      var modal = $(this)
      modal.find('.modal-title').text('確認' + title) // 寫入資料
    })
  });

 

  // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })


  // $('a[data-bs-dismiss="modal"][data-bs-toggle="modal"]').on('click', function () {
  //   // console.log('click');
  //   let target = $(this).data('bs-target');
  //   // console.log('bs-target', target);
  //   $(target).on('shown.bs.modal', function () {
  //     $('body').addClass('modal-open');
  //   });
  // });


})()