var playButtons = document.getElementsByClassName('playButton');
for (var i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Button clicked");
    var audioId = this.getAttribute('data-audio');
    var audio = document.getElementById(audioId);
    audio.play();
  });
}

$(document).ready(function() {
    var teamMembers = [
      {
        name: "Askarov Anuar",
        image: "images/master.jpg",
        telegram: "https://t.me/MasterAnuar",
        phone: "+77006973077",
        email: "datathink@gmail.com",
        audio: "myAudio1",
        responsibilities: "The CEO of EventHub, created the main page of EventHub, responsible for almost all the design of the site"
      },
      {
        name: "Sigayev Madiyar",
        image: "images/madiyar.jpg",
        telegram: "https://t.me/JeuneEncore",
        phone: "+77083511974",
        email: "sigayevmadik@gmail.com",
        audio: "myAudio2",
        responsibilities: "The deputy CEO, created the page of browsing events, responsible for integration of Yandex Map"
      },
      {
        name: "Serikbay Syrym",
        image: "images/syrym.jpg",
        telegram: "https://t.me/Angarov2004",
        phone: "+77786056750",
        email: "syrymserikbay@gmail.com",
        audio: "myAudio3",
        responsibilities: "The creator of the contacts page, responsible for a major part of the media used"
      },
      {
        name: "Aitbai Amirzhan",
        image: "images/amir.jpg",
        telegram: "https://t.me/amir_Zhan04",
        phone: "+77083511974",
        email: "amirzhanbek@gmail.com",
        audio: "myAudio4",
        responsibilities: "The creator of the registration page, the moral support of the team"
      }
    ];
  
    var container = $(".row");
    $.each(teamMembers, function(index, member) {
      var colDiv = $("<div>").addClass("col-12 col-md-6 col-lg-3");
      var heading = $("<h3>").text(member.name);
      var image = $("<img>").attr("src", member.image).addClass("img-fluid");
      var sectionDiv = $("<div>").addClass("section third");
      var contactsHeading = $("<h2>").text("Contacts");
      var iconsDiv = $("<div>").addClass("icons");
      var iconsContainer = $("<div>").addClass("icons-container");
      var spacer = $("<span>").addClass("spacer");
      
      var telegramLink = $("<a>").attr("href", member.telegram).append($("<i>").addClass("fa fa-telegram"));
      var phoneLink = $("<a>").attr("href", "tel:" + member.phone).append($("<i>").addClass("fa fa-phone"));
      var emailLink = $("<a>").attr("href", "mailto:" + member.email).append($("<i>").addClass("fa fa-envelope"));

      
      iconsContainer.append(telegramLink, spacer.clone(), phoneLink, spacer.clone(), emailLink);
      iconsDiv.append(iconsContainer);
      sectionDiv.append(contactsHeading, iconsDiv);
  
  
      var audio = $("<audio>").attr("id", member.audio).attr("src", "audio/zdorovo.mp3").attr("type", "audio/mp3");
      var playButton = $("<a>").attr("href", "#").addClass("playButton").attr("data-audio", member.audio).append($("<i>").addClass("fas fa-microphone"));
  
      iconsDiv.append(telegramLink, phoneLink, emailLink, $("<br>"), audio, playButton);
      sectionDiv.append(contactsHeading, iconsDiv);
      colDiv.append(heading, image, sectionDiv, $("<p>").addClass("response").text("Responsibilities:"), $("<p>").addClass("about").text(member.responsibilities));
      container.append(colDiv);
    });
  
    $(".playButton").click(function() {
      var audioId = $(this).data("audio");
      var audioElement = document.getElementById(audioId);
      audioElement.play();
    });
  });
  