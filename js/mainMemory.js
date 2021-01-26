(function () {
    "use strict";

    $(document).ready(function () {

        let cardImages = ['apple-alt', 'apple-alt', 'bomb', 'bomb', 'bug', 'bug', 'car-side', 'car-side', 'cat', 'cat', 'crown', 'crown', 'feather', 'feather', 'fish', 'fish', 'heart', 'heart']

        let cards = $(".flip-card");
        console.log(cards)
        cards.flip();

        let backs = new Array();
        backs = $(".back");
        console.log(backs);

        let deck = $('.back');

        function shuffle(array) {
            let currentIndex = array.length, temporaryValue, randomIndex;

            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }

        // function start() {

            // The shuffle function shuffles the objects array
            let allCards = shuffle(deck);
            // $deck.empty();

            // The game starts with no matching cards and zero moves
            // match = 0;
            // moves = 0;
            // $moves.text('0');

            // A for loop creates 16  <li> tags with the class of card for every <i> tag
            // A class of fa fa- and a name of each object from the objects=[] array
            for (let i = 0; i < allCards.length; i++) {
                deck[i].append('<i class="fa fa-7x fa-' + allCards[i] + '"</i>');
            }
            // addCardListener();

            // Enables the timer to reset to 0 when the game is restarted
            // resetTimer(nowTime);
            // second = 0;
            // $timer.text(`${second}`)

        // }start();




    });


})();
