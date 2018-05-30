$(function() {

  var inc_list = $(".user-search-result");

  function appendUser(user) {
  var html = `<div class='chat-group-user clearfix' id='chat-group-user-${user.id}'>
                  <p class='chat-group-user__name'>${user.name}</p>
                    <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`
    inc_list.append(html)
  };

  function appendNoUser(user) {
    var html = ''
    inc_list.append(html);
  };

  function buildHTML(id, name) {
    var html = `<div class="chat-group-user clearfix" id=chat-group-user-${id}>
                  <input type="hidden" name="user_id" value="${id}">
                  <p class="chat-group-user__name">${name}</p>
                  <a class="user-search-remove chat-group-user__btn chat-group-user__btn--remove" data-user-id="${id}">削除</a>
                </div>`
    return html
  }

  $(function() {
    $("#user-search-field").on("keyup", function() {
      $("user-search-field").empty();
      var input = $("#user-search-field").val();
      if (input){
      $.ajax({
        type: 'GET',
        url: '/users',
        data: { name: input },
        dataType: 'json'
      })
      .done(function(users) {
        $(".user-search-result").empty();
        if (users.length !== 0) {
         users.forEach(function(user){
            appendUser(user)
         });
        } else {
          appendNoUser("一致するユーザーはいません")
        }
      })
      .fail(function(){
        alert("検索に失敗しました")
      })
    }
    });
  });

    $(document).on('click','.user-search-add', function() {
    var id = $(this).data('user-id');
    var name = $(this).data('user-name');
    var insertHTML = buildHTML(id, name);
    $('.chat-group-users').append(insertHTML);
    $(this).parent('.chat-group-user').remove();
  })

  $(document).on('click', '.user-search-remove', function() {
    var id = $(this).data('user-id');
    $(`#chat-group-user-${id}`).remove();
  })
});
