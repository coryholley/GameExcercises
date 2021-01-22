(function () {
    "use strict";

    let moles = new Array();

    $(document).ready(function() {

        let moles = new Array();
        $(".mole").each(function () {
            moles.push(this);
        })
        console.log(moles);

        let moleToShow = moles[Math.floor(Math.random() * moles.length)];

        function selectRandomMole() {
            console.log(moleToShow);
            moleToShow.classList.remove("hideMole");

            moleToShow.click(function() {
                moleToShow.classList.add("hideMole");
            });
        }
        selectRandomMole();



        // function showRandomMole() {
        //     moleToShow.classList.add("hideMole");
        //     selectRandomMole();
        // };
        //
        // moleToShow.onclick = function() {showRandomMole()};



    });




})();