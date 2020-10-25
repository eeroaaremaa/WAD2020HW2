$(document).ready(function() {
        $.getJSON('https://private-anon-d9fc43b9c8-wad20postit.apiary-mock.com/users/1', function(jd) {
            $('#dropdown-content').html('<p>' + jd.firstname + ' ' + jd.lastname + '</p>');
            $('#dropdown-content').append('<p>' + jd.email + '</p>');
            $('#dropdown-content').append('<a href="browse.html">Browse</a> <a href="login.html">Log Out</a>');
            $('#avatar').html('<img src="' + jd.avatar +'" '+'class="avatar" alt="Me">');
            $('#avatar').click(function(){
                if($('.dropdown-content').is(":visible")){
                    $('.dropdown-content').hide();
                }
                else{
                    $('.dropdown-content').show();
                }
            })
        });
        $.getJSON('https://private-anon-6d46d3adbb-wad20postit.apiary-mock.com/profiles', function(jd) {
          for (let i = 0; i < jd.length; i++) {
            avatarURL = jd[i].avatar
            authorName = jd[i].firstname +" "+jd[i].lastname
            post = '<div class="column">' +
                    '<img class="photo" src='+avatarURL+' alt="Me">'+
                    '<p>'+authorName+'</p>'+
                '<button value="Follow" type="button" class="follow-button">Follow</button>'+
            '</div>'
            $(".row").append(post)
                 }
            $('.follow-button').click("click", function () {
                $(this).toggleClass("followed");
                var self = this;
                change(self);
          })
            });    
        });
        function change(btn) {

            if (btn.value == "Follow") {
            btn.value = "Followed";
            btn.innerHTML = "Followed";
            }
            else {
                btn.value = "Follow";
                btn.innerHTML = "Follow";
}

}