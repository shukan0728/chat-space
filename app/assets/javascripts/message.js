$(function(){
  function buildHTML(message){
    var img = "";
    if (message.image) {
      img= `<img src= ${message.image} class="lower__message__image">`;
    }
    var html =
            `<div class="chat-contents__content">
          <div class="chat-contents__content__upper">
            <div class="chat-contents__content__upper__name">
              ${message.user_name}
            </div>
            <div class="chat-contents__content__upper__date">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-contents__content__lower">
              <p class="chat-contents__content__lower__message">
                ${message.content}</p>
            ${img}
          </div>
          </div>`;
          return html;
    }
    function scroll() {
      $('.chat-contents').animate({scrollTop: $('.chat-contents')[0].scrollHeight});
    }

  $(function(){
    $('#new_message').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action');
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data){
        var html = buildHTML(data);
        $('.chat-contents').append(html);
        $('#new_message')[0].reset();
        $('.form__submit').prop('disabled', false);
        scroll()
      })
      .fail(function(){
        alert(`error`);
      })
    });
  });
});
