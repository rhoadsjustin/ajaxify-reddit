/* GLOBAL VARIABLES UP HERE */
var frontPage = 'https://www.reddit.com/.json';
var searchQuery = $('form').serialize();
// function Template ()


$(document).ready(function(){
/* FUNCTION EXECUTION HERE */



function homeReddit() {
  $.ajax({
    method: "GET",
    url: frontPage,
    success: onSuccess,
    error: onError
  })
}

$('#frontpagebtn').on('click', function(event){
  event.preventDefault();
  $('#myModal').modal();
})


function clearScreen() {
  $('#main').empty();
  $('#main').addClass('pull-left');
  $('#sidebar').removeClass('hidden');
  $('#login').addClass('hidden');
}

  $('#searchButton').on('click', function(event){
    console.log(searchQuery);
    event.preventDefault();
    clearScreen();
    $.ajax({
      method: 'GET',
      url: `https://www.reddit.com/subreddits/search.json?q=subreddit%3A${searchQuery}&restrict_sr=&sort=relevance&t=all`,
      data: searchQuery,
      success: searchSuccess,
      error: onError
    })
  })




  $('#home').on('click', function(e){
      e.preventDefault();
      clearScreen();
      homeReddit();
  });

  $('#rising').on('click', function(event){
    event.preventDefault();
    clearScreen();
    $.ajax({
      method: 'GET',
      url: 'https://www.reddit.com/rising/.json',
      success: onSuccess,
      error: onError
    })
  })

  $('#nba').on('click', function(event){
    event.preventDefault();
    clearScreen();
    $.ajax({
      method: 'GET',
      url: 'https://www.reddit.com/r/nba/.json',
      success: nbaSuccess,
      error: onError
    })
  })

  $('#pics').on('click', function(event){
    event.preventDefault();
    clearScreen();
    $.ajax({
      method: 'GET',
      url: 'https://www.reddit.com/r/pics/.json',
      success: onSuccess,
      error: onError
    })
  })

  $('#gaming').on('click', function(event){
    event.preventDefault();
    clearScreen();
    $.ajax({
      method: 'GET',
      url: 'https://www.reddit.com/r/gaming/.json',
      success: onSuccess,
      error: onError
    })
  })


  function onError() {
    alert('This is Broken. Reddit is Broken.');
  }

  function searchSuccess(json){
    var children = json.data.children;
    for (var i = 0; i < json.data.children.length; i++) {

      var then = children[i].data.created;
      var date = new Date(then * 1000);


      var template = '<div class="row cleafix">';
      template += '<div class="col-md-6">';
      template += `<div class="thumbnail" id="${json.data.children[i].data.id}" style="width: 50rem;">`;
      template += `<a href=${children[i].data.url}</a>`;
        if(children[i].data.preview !== undefined){
          template += `<img class="card-img-top center-block" src='${json.data.children[i].data.preview.images[0].resolutions[0].url}' alt="Card image cap">`;
        } else if(children[i].data.thumbnail !== undefined){
          template += `<img class="card-img-top center-block" src='${json.data.children[i].data.thumbnail}' alt="Card image cap">`
        } else if(children[i].data.thumbnail === 'self' || children[i].data.thumbnail === 'default' )
          template += `<img class="card-img-top center-block" src="https://i.redditmedia.com/4xFezp8qybWigpg6WN5gkAuI39AIPdv4jdHijFU4_ns.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=108&amp;s=19f81c159c3852ca87417e2d2edde0b0" alt="Card image cap">`;
          else {
          template += `<img class="card-img-top center-block" src="https://i.redditmedia.com/4xFezp8qybWigpg6WN5gkAuI39AIPdv4jdHijFU4_ns.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=108&amp;s=19f81c159c3852ca87417e2d2edde0b0" alt="Card image cap">`;
        }
      template += '<div class="card-block">';
      template += `<h6 class="card-title text-muted text-center">${children[i].data.title}</h6>`;
      template += `<button type="button" class="btn btn-default btn-lg">
                  <span class="glyphicon glyphicon-hand-up" aria-hidden="true"></span> Up-Vote
                  </button>`
      template += `<button type="button" class="btn btn-default btn-lg">
                   <span class="glyphicon glyphicon-hand-down" aria-hidden="true"></span> Down-Vote
                  </button>`
      template += `<p class="text-muted">${date}`;
      template += '<button class="btn btn-primary pull-right clearfix">read more</button></p>';
      template += '</div>';
      template += '</div>';
      template += '</div>';
      template += '</div>';
      $('#main').append(template);
    }
    }


  function onSuccess(json) {
    $('#main').empty();
    var children = json.data.children;
    for (var i = 0; i < children.length; i++) {
      var then = children[i].data.created;
      var date = new Date(then * 1000);


      var template = '<div class="row cleafix">';
      template += '<div class="col-md-6">';
      template += `<div class="thumbnail" id="${json.data.children[i].data.id}" style="width: 50rem;">`;
      template += `<a href=${children[i].data.url}</a>`;
        if(children[i].data.preview !== undefined){
          template += `<img class="card-img-top center-block" src='${json.data.children[i].data.preview.images[0].resolutions[0].url}' alt="Card image cap">`;
        } else if(children[i].data.thumbnail !== undefined){
          template += `<img class="card-img-top center-block" src='${json.data.children[i].data.thumbnail}' alt="Card image cap">`
        } else if(children[i].data.thumbnail === 'self' || children[i].data.thumbnail === 'default' )
          template += `<img class="card-img-top center-block" src="https://i.redditmedia.com/4xFezp8qybWigpg6WN5gkAuI39AIPdv4jdHijFU4_ns.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=108&amp;s=19f81c159c3852ca87417e2d2edde0b0" alt="Card image cap">`;
          else {
          template += `<img class="card-img-top center-block" src="https://i.redditmedia.com/4xFezp8qybWigpg6WN5gkAuI39AIPdv4jdHijFU4_ns.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=108&amp;s=19f81c159c3852ca87417e2d2edde0b0" alt="Card image cap">`;
        }
      template += '<div class="card-block">';
      template += `<h6 class="card-title text-muted text-center">${children[i].data.title}</h6>`;
      template += `<button type="button" class="btn btn-default btn-lg">
                  <span class="glyphicon glyphicon-hand-up" aria-hidden="true"></span> Up-Vote
                  </button>`
      template += `<button type="button" class="btn btn-default btn-lg">
                   <span class="glyphicon glyphicon-hand-down" aria-hidden="true"></span> Down-Vote
                  </button>`
      template += `<p class="text-muted">${date}`;
      template += '<button class="btn btn-primary pull-right clearfix">read more</button></p>';
      template += '</div>';
      template += '</div>';
      template += '</div>';
      template += '</div>';
      $('#main').append(template);
    }
  }

  function nbaSuccess(json) {
    var children = json.data.children;
    for (var j = 0; j < children.length; j++) {

      var then = children[j].data.created;
      var date = new Date(then * 1000);

      var template = '<div class="row">';
      template += '<div class="col-md-6">';
      template += `<div class="thumbnail" id="${json.data.children[j].data.id}" style="width: 50rem;">`;
      template += `<a href=${children[j].data.url}</a>`;
      template += '<div class="caption">';
      template += `<h4 class="card-title text-muted text-center">${children[j].data.title}</h4>`;
      template += `<p class="card-text"${children[j].data.selftext}</p>`
      template += `<button type="button" class="btn btn-default btn-lg">
                  <span class="glyphicon glyphicon-hand-up" aria-hidden="true"></span> Up-Vote
                  </button>`
      template += `<button type="button" class="btn btn-default btn-lg">
                   <span class="glyphicon glyphicon-hand-down" aria-hidden="true"></span> Down-Vote
                  </button>`
      template += `<p class="text-muted">${date}`;
      template += '<button class="btn btn-primary pull-right clearfix">read more</button></p>';
      template += '</div>';
      template += '</div>';
      template += '</div>';
      template += '</div>';
      $('#main').append(template);
    }
  }




});



/* FUNCTION DEFINITION HERE */
/* TIP: don't forget scope! */
