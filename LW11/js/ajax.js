function call() {
    let msg   = $('#formx').serialize();
    $.ajax({
        type: 'POST',
        url: "../php/action_ajax_form.php",
        data: msg,
        success: function(data) {
            $('#results').html(data);
        },
        error:  function(xhr, str){
            xhr.responseCode = undefined;
            alert('Возникла ошибка: ' + xhr.responseCode);
        }
    });
}