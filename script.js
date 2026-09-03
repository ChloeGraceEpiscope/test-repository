const music = document.getElementById("egyptMusic");

if (music) {

    // Get the saved position
    const savedTime = localStorage.getItem("musicTime");

    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    // Save the position while the music plays
    music.addEventListener("timeupdate", function () {
        localStorage.setItem("musicTime", music.currentTime);
    });

    // Remember whether the music was playing
    music.addEventListener("play", function () {
        localStorage.setItem("musicPlaying", "true");
    });

    music.addEventListener("pause", function () {
        localStorage.setItem("musicPlaying", "false");
    });

    // Try to resume automatically
    if (localStorage.getItem("musicPlaying") === "true") {
        music.play().catch(function () {
            console.log("Browser blocked autoplay.");
        });
    }
}