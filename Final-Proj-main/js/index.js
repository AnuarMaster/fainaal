$(document).ready(function() {
    var events = [
      {
        image: "images/concert.jpg",
        title: "Zidane comes with a concert!",
        category: "Concert",
        date: "August 12, 2023",
        link: "reg.html",
        price: 20
      },
      {
        image: "images/football.jpg",
        title: "Astana - Jetysu match",
        category: "Football",
        date: "August 19, 2023",
        link: "reg.html",
        price: 20
      },
      {
        image: "images/play.jpg",
        title: "Master and Margarita play",
        category: "Theatre",
        date: "August 20, 2023",
        link: "reg.html",
        price: 20
      },
      {
        image: "images/lotr.jpg",
        title: "Lord Of The Rings: 20 years anniversaty",
        category: "Cinema",
        date: "July 5, 2023",
        link: "reg.html",
        price: 20
      },
      {
        image: "images/AI.jpg",
        title: "Scientific conference: What future does AI have?",
        category: "Meetup",
        date: "July 10, 2023",
        link: "reg.html",
        price: 20
      },
      {
        image: "images/mike.jpg",
        title: "Mike Tyson make his debut!",
        category: "Box",
        date: "July 26, 2023",
        link: "reg.html",
        price: 20
      }
    ];
  
    var eventsContainer = $("#events-container");
    var ticketDropdown = $(".navbar .dropdown-menu");
    var totalPrice = 0;
  
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
  
      var card = $("<div>").addClass("col-sm-12 col-md-6 col-lg-4 mb-4");
      var cardInner = $("<div>").addClass("card text-white card-has-bg click-col").css("background-image", "url('" + event.image + "')");
      var cardOverlay = $("<div>").addClass("card-img-overlay d-flex flex-column");
      var cardBody = $("<div>").addClass("card-body");
      var cardMeta = $("<small>").addClass("card-meta mb-2").text(event.category);
      var cardTitle = $("<h4>").addClass("card-title mt-0").html("<a class='text-white' href='" + event.link + "'>" + event.title + "</a>");
      var cardDate = $("<small>").html("<i class='far fa-clock'></i>" + event.date);

      var buyTicketBtn = $("<button>")
      .addClass("btn btn-primary buy-ticket")
      .attr("data-title", event.title)
      .attr("data-price", event.price)
      .text("Buy Ticket");

      cardBody.append(cardMeta, cardTitle, cardDate);
      cardOverlay.append(cardBody);
      cardInner.append(cardOverlay); 
      card.append(cardInner);
      cardBody.append(buyTicketBtn);
      eventsContainer.append(card);
    }
  
    $(document).on("click", ".buy-ticket", function() {
      var title = $(this).data("title");
      var price = parseInt($(this).data("price"));
  
      var ticketItem = $("<a>").addClass("dropdown-item").text(title + " - $" + price);
      ticketDropdown.append(ticketItem);
  
      totalPrice += price;
      $(".total-price").find(".badge").text("Total: $" + totalPrice);
    });
  });

  function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

window.onscroll = function() {shrinkOnScroll()};

function shrinkOnScroll() {
  var navbar = document.getElementById("myNavbar");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.padding = "10px 10px";
    navbar.style.fontSize = "15px";
  } else {
    navbar.style.padding = "20px 10px";
    navbar.style.fontSize = "17px";
  }
}

window.onscroll = function() {
  var navbar = document.getElementById("myNavbar");
  if (window.pageYOffset > 80) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
}

