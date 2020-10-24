let profiles = [];

$(function () {
    loadProfiles()
        .then(function (response) {
            for (let profile of response) {
                profiles.push(new Profile(profile.firstname, profile.lastname, profile.avatar))
            }

            displayProfiles()
        })
        .catch(function () {
            alert('Error loading profiles info')
        });

});

function displayProfiles() {
    let i = 1;
    for (let profile of profiles) {
        $('#profile #name').html('<p>' + jd.firstname + ' ' + jd.lastname + '</p>');
        $('#profile #avatar1').html('<img src="' + profile.avatar +'" '+'class="photo" alt="Me">');
        i++
    }
}

function loadProfiles() {
    return $.getJSON('https://private-anon-6d46d3adbb-wad20postit.apiary-mock.com/profiles'
    );
}
$(document).ready(function(){				

    $("#follow-button").click(function(){
      if ($("#follow-button").text() == "Follow"){
        $("#follow-button").animate({ width: '+=45px'}, 600, 'linear', function () { 
          $("#follow-button").css("color", "#8b2fa1");
          $("#follow-button").text("Unfollow");
          $("#follow-button").animate({
            backgroundColor: "#ffffff",
            borderColor: "#8b2fa1"
          }, 1000 );
        });
      }
      else{
        $("#follow-button").animate({
            width: '-=25px',
            left: '+=15px'
          }, 600, 'linear', function () {
          $("#follow-button").text("Follow");
          $("#follow-button").css("color", "#ffffff");
          $("#follow-button").css("background-color", "#8b2fa1");
          $("#follow-button").css("border-color", "#8b2fa1");
        });
      }
    }); 
  });