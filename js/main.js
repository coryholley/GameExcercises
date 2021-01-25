(function () {
    "use strict";

    $(document).ready(function () {

        let game = function () {

            let score = 0;
            let gameTime = 50 * 1000;
            let turnTime = 1000;
            let moleTiles = $("div.moleTile");
            console.log(moleTiles);

            let moleInterval;
            let moleLifeMin = 1000;
            let moleLifeMax = 3 * 1000;

            let getRandomInt = function (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }


            $("#gameContainer").on("click", ".moleTile", function () {
                if (!$(this).hasClass("mole")) {
                    return;
                }
                $(this).removeClass("mole");
                score += 5;
                $("#score").text("Score: " + score);
                console.log(score);
            });

            var startGame = function () {
                score = 0;

                // -------------------------
                // Every turnTime, spawn a new mole.
                // Record moleInterval so we can cancel it when the game ends.
                // -------------------------
                moleInterval = setInterval(spawnMole, turnTime);
                // -------------------------

                // -------------------------
                // The game ends in gameTime
                // -------------------------
                setTimeout(endGame, gameTime);
                // -------------------------
            }
            let endGame = function () {
                // -------------------------
                // Stop spawning new moles
                // -------------------------
                clearInterval(moleInterval);
                // -------------------------

                // -------------------------
                // "hide" any existing moles.
                // -------------------------
                moleTiles.removeClass("mole");
                // -------------------------

                alert("Game Over!");
            }
            let spawnMole = function (timeToLive) {
                // -------------------------
                // Select a random tile to set as a mole.
                // You might adjust to only spawn moles where there are none already.
                // -------------------------
                let targetTile = $(moleTiles[getRandomInt(0, moleTiles.length - 1)]);
                // -------------------------

                // -------------------------
                // Moles shall live for a random amount of time
                // -------------------------
                var timeToLive = getRandomInt(moleLifeMin, moleLifeMax);
                // -------------------------

                // -------------------------
                // "show" the mole
                // -------------------------
                targetTile.addClass("mole");
                // -------------------------

                // -------------------------
                // after timeToLive, automatically "hide" the mole
                // -------------------------
                setTimeout(function () {
                    targetTile.removeClass("mole");
                }, timeToLive);
                // -------------------------
            }
            return {
                startGame
            };
        }();

        game.startGame();

    });


})();