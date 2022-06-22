document.addEventListener('contextmenu', event => event.preventDefault());

function showMessage(s) {
  var m = $("#message");
  m.html(s);
  
  m.addClass("is-visible");
  setTimeout(function() {
    m.removeClass("is-visible");
    m.addClass("is-hidden");
    m.addClass("is-removed");
  }, 3000);
}

function startMusic() {
    if (!playing) {
        playing = true;
        let background_song = document.getElementById("background_song");
        background_song.play();
        let state = document.getElementById("state");
        state.src = "img/pause.png"
    }
}
let playing = false;
document.body.addEventListener("mousedown", startMusic, false);