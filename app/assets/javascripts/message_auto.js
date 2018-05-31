$(function(){
  function buildHTML(message){
    var img = "";
    if (message.image) {
      img= `<img src= ${message.image} class="lower__message__image">`;
    }
    var html =
            `<div class="chat-contents__content" data-message-id="${message.id}">
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
      $('.chat-contents').stop().animate({scrollTop: $('.chat-contents')[0].scrollHeight});
    }

  $(function(){
    $(function(){
      if (location.href.match(/\/groups\/\d+\/messages/)){
      setInterval(update, 5000);
      }
    });
    function update(){
      if ($('.chat-contents__content')[0]){
        var message_id = $(".chat-contents__content").last().data("message-id");
      }else{
        return false
      }
      $.ajax({
        url: location.pathname,
        type: "GET",
        data: {id : message_id},
        dataType: 'json'
      })
      .done(function(data){
        if (data.length){
        $.each(data, function(i, data){
          var html = buildHTML(data);
        $('.chat-contents').append(html);
        scroll()
        })
       }
       })
      .fail(function(){
        alert('自動更新に失敗しました')
      })
    }
  });
});
