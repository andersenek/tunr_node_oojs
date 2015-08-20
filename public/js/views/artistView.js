var ArtistView = function(artist){
  this.artist = artist;
  this.$el = $("<div class='artist'></div>"); // Creating an element

  this.render();
  $(".artists").append(this.$el);
}

ArtistView.prototype ={
  render: function(){
    var self = this;
    self.$el.html(self.artistTemplate(self.artist)); // Here we're calling the artistTemplate which creates a string of HTML (below)
    var showButton = self.$el.find(".showSongs") // self.$el Only look inside my element for things
    var songsDiv = self.$el.find("div.songs")
    songsDiv.hide()
    showButton.on("click", function(){
      self.toggleSongs(songsDiv)
    })

    $("div.artists").append(self.$el)
  },
  toggleSongs: function(songsDiv){
    var self = this
    if(songsDiv.children().length === 0){
      self.artist.fetchSongs().then(function(songs){
        self.appendSongs(songs, songsDiv)
        songsDiv.show();
      })
    }
    songsDiv.toggle();
  },
  appendSongs: function(songs, songsDiv){
    songs.forEach(function(song){
      var songView = new SongView(song)
      songsDiv.append(songView.render());
    })
  },
  artistTemplate: function(artist){ // Now we're filling the element <div class='artist'></div>
    var html = $("<div>")
    html.append("<h3>" + artist.name + "</h3>");
    html.append("<img class='artist-photo' src='" + artist.photoUrl + "'>");
    html.append("<button class='showSongs'>Show Songs</button>");
    html.append("<div class='songs'></div>");
    return(html)
  }
}
