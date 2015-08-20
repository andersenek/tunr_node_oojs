var Artist = function(info){
  this.name = info.name;
  this.photoUrl = info.photoUrl;
  this.nationality = info.nationality;
  this.id = info.id;
}

Artist.fetch = function(){ // This returns a list of artists that our Backend model will handle
  var request = $.getJSON("http://localhost:3000/artists")
  .then(function(response){
    var artists = []
    for(var i =0; i < response.length; i++){
      artists.push(new Artist(response[i]))
    }
    return artists // ** here when we return a value in a promise (artists), by virtue we can access artist as an argument for future promises

  })
  .fail(function(response){
    console.log("artists fetch failed")
  })
  return request
}

Artist.prototype.fetchSongs = function(){
  var url = "http://localhost:3000/artists/" + this.id + "/songs"
  var request = $.getJSON(url)
  .then(function(response){
    var songs = []
    for(var i = 0; i < response.length; i++){
      songs.push(new Song(response[i]))
    }
    return songs
  })
  .fail(function(resposne){
    console.log("js request failed")
  })
  return request
}
