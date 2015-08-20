$(document).ready(function(){
  Artist.fetch().then(function(artists){ // Gets artist models Remember our promised returned
    artists.forEach(function(artist){ // For each artist model
      var view = new ArtistView(artist) // We create a new ArtistView and associates an arist to this view
      view.render(); // Render this in html
    })
  })
});
