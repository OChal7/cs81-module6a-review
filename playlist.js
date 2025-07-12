// URL https://github.com/OChal7


// Creates new empty playlist 
function Playlist(name) {
    // "this" refers to the playlist instance
  this.name = name; 
  this.songs = [];  // initialize array for song titles
  this.currentSong = null; // sets it so no currentSong is playing 
}

// Adds a song to playlist array
Playlist.prototype.addSong = function(songTitle) {
    // "this" refers to the playlist instance where addSong is called to 
  this.songs.push(songTitle);
};

// Sets currentSong to the first song on the playlist
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0];
    console.log("Now playing:", this.currentSong); // logs now playing "currentSong" to the user
  }
};

// Skips the song thats playing in the playlist 
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift();  // removes first song from the array 
    this.currentSong = this.songs[0];
    console.log("Skipped! Now playing:", this.currentSong); // logs this message if current song can be skipped
  } else {
    console.log("No more songs to skip.");  // if the song playing is the last one in the playlist a "No more songs to skip" message is shown
  }
};

// Logs playlist name and all songs in the playlist comma seperated
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name); 
  console.log("Songs:", this.songs.join(", "));
};

// Improvement : remove a song by its title (Code below)
Playlist.prototype.removeSong = function(songTitle) {
  // Find the song’s index in the array
  const index = this.songs.indexOf(songTitle);
  
  if (index !== -1) {
    // Remove it
    this.songs.splice(index, 1);
    
    // If that was the current song, advance to the next (or clear)
    if (this.currentSong === songTitle) {
      this.currentSong = this.songs[0] || null;
    }
    
    console.log(`Removed "${songTitle}".`);
  } else {
    console.log(`Song "${songTitle}" not found in the playlist.`);
  }
};


// Testing
let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();
myMix.removeSong("Chillhop Beats"); 