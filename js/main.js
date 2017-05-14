/* GLOBAL VARIABLES UP HERE */
var frontPage = 'https://www.reddit.com/.json';
var nba = '<p class='
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
  // $.ajax({
  //   method: "GET",
  //   url: frontPage,
  //   success: onSuccess,
  //   error: onError
  // })

  $('#home').on('click', function(e){
      e.preventDefault();
      $('#main').empty();
      homeReddit();
  });

  $('#rising').on('click', function(event){
    event.preventDefault();
    $.ajax({
      method: 'GET',
      url: 'https://www.reddit.com/rising/.json',
      success: onSuccess,
      error: onError
    })
  })

  $('#nba').on('click', function(event){
    event.preventDefault();
    $.ajax({
      method: 'GET',
      url: 'https://www.reddit.com/r/nba/.json',
      success: nbaSuccess,
      error: onError
    })
  })

  $('#pics').on('click', function(event){
    event.preventDefault();
    $.ajax({
      method: 'GET',
      url: 'https://www.reddit.com/r/pics/.json',
      success: picSuccess,
      error: onError
    })
  })

  function onError() {
    alert('This is Broken. Reddit is Broken.');
  }


  function onSuccess(json) {
    $('#main').empty();
    var children = json.data.children;
    for (var i = 0; i < children.length; i++) {
      var template = '<div class="row">';
      template += '<div class="col-md-6 col-md-offset-3">';
      template += `<div class="card" id="${json.data.children[i].data.id}" style="width: 50rem;">`;
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
      template += '</div>';
      template += '</div>';
      template += '</div>';
      template += '</div>';
      $('#main').append(template);
    }
  }
  function nbaSuccess(json) {
    var children = json.data.children;
    $('#sidebar').append()
    for (var j = 0; j < children.length; j++) {
      var template = '<div class="row">';
      template += '<div class="col-md-2">';
      template += `<div class="card" id="${json.data.children[j].data.id}" style="width: 50rem;">`;
      template += `<a href=${children[j].data.url}</a>`;
      template += '<div class="card-block">';
      template += `<h4 class="card-title text-muted text-center">${children[j].data.title}</h4>`;
      template += `<p class="card-text"${children[j].data.selftext}</p>`
      template += '</div>';
      template += '</div>';
      template += '</div>';
      template += '</div>';
      $('#sidebar').append(template);

        $('#main').addClass('pull-right clearfix');
    }
  }

  function picSuccess(json) {
    $('#main').empty();
    var children = json.data.children;
    for (var i = 0; i < children.length; i++) {
      var template = '<div class="row">';
      template += '<div class="col-md-6 col-md-offset-3">';
      template += `<div class="card" id="${json.data.children[i].data.id}" style="width: 50rem;">`;
      template += `<a href=${children[i].data.url}</a>`;
        if(children[i].data.preview !== undefined){
          template += `<img class="card-img-top center-block" src='${json.data.children[i].data.preview.images[0].resolutions[0].url}' alt="Card image cap">`;
        } else if(children[i].data.thumbnail !== undefined){
          template += `<img class="card-img-top center-block" src='${json.data.children[i].data.thumbnail}' alt="Card image cap">`
        } else {
          template += `<img class="card-img-top center-block" src="https://i.redditmedia.com/4xFezp8qybWigpg6WN5gkAuI39AIPdv4jdHijFU4_ns.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=108&amp;s=19f81c159c3852ca87417e2d2edde0b0" alt="Card image cap">`;
        }
      template += '<div class="card-block">';
      template += `<h4 class="card-title text-muted text-center">${children[i].data.title}</h4>`;
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
