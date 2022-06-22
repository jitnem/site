// let song_list = shuffleArray("<%= songarray %>")

let background_song = document.getElementById("background_song");
background_song.volume = window.localStorage.getItem('background_song_volume') === null ? 0.2 : window.localStorage.getItem('background_song_volume') / 100;
let volume_slider = document.getElementById("volume_slider");
volume_slider.value = background_song.volume * 100;
// newSong();

function changeVolume(newV) {
    background_song.volume = newV / 100;
    window.localStorage.setItem("background_song_volume", newV);
}

function newSong(type, song_list) {
    try {
        song_list = song_list.split(",");
        let newIndex = song_list.indexOf(decodeURI(document.getElementById('background_song').src.split("music/")[1]));
        if (newIndex === -1)
            newIndex = 0;
        if (type === "skip" || type === undefined) {
            newIndex++;
            if (newIndex > song_list.length - 1)
                newIndex = 0;
        }
        if (type === "reverse") {
            newIndex--;
            if (newIndex < 0)
                newIndex = song_list.length - 1;
        }
        changeSource(song_list[newIndex]);
    } catch (e) {console.error(e)};
}

function changeSource(song_file) {
    let background_song = document.getElementById("background_song");
    let song_title = document.getElementById("song_title");
    let state = document.getElementById("state");
    if (background_song.paused) {
        background_song.src = "music/" + song_file;
        song_title.innerHTML = "Currently Playing: " + song_file;
        let i = 0;
        while (i != 3) {
            i++;
            song_title.style.textShadow = `0pt 0pt 0.${i}em whitesmoke, 0pt 0pt 0.${i}em whitesmoke`;
        }
        
        setTimeout(() => {
            let i2 = 3;
            while (i2 != 0) {
                i2--;
                if (i2 == 0) song_title.style = "";
                else song_title.style.textShadow = `0pt 0pt 0.${i2}em whitesmoke, 0pt 0pt 0.${i2}em whitesmoke`;
            }
        }, 500);
        // background_song.play();
        // state.src = "img/pause.png"
    } else {
        background_song.pause();
        background_song.src = "music/" + song_file;
        song_title.innerHTML = "Currently Playing: " + song_file;
        let i = 0;
        while (i != 3) {
            i++;
            song_title.style.textShadow = `0pt 0pt 0.${i}em whitesmoke, 0pt 0pt 0.${i}em whitesmoke`;
        }
        
        setTimeout(() => {
            let i2 = 3;
            while (i2 != 0) {
                i2--;
                if (i2 == 0) song_title.style = "";
                else song_title.style.textShadow = `0pt 0pt 0.${i2}em whitesmoke, 0pt 0pt 0.${i2}em whitesmoke`;
            }
        }, 500);
        background_song.play();
    }
}

function songHandler() {
    let background_song = document.getElementById("background_song");
    let state = document.getElementById("state");
    if (background_song.paused) {
        background_song.play();
        state.src = "img/pause.png"
    } else {
        background_song.pause();
        state.src = "img/play.png"
    }
}

function shuffleArray(array) {
    for (let n = array.length - 1; n > 0; n--) {
        let a = Math.floor(Math.random() * (n + 1));
        [array[n],array[a]] = [array[a], array[n]];
    }
    return array;
}