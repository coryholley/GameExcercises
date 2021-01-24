(function () {
    "use strict";

    let moles = new Array();

    $(document).ready(function() {

        let score = 0;

        let moles = new Array();
        moles.push($("#mole11"));
        moles.push($("#mole12"));
        moles.push($("#mole13"));
        moles.push($("#mole21"));
        moles.push($("#mole22"));
        moles.push($("#mole23"));
        moles.push($("#mole31"));
        moles.push($("#mole32"));
        moles.push($("#mole33"));

        console.log(moles);

        let moleToShow = moles[Math.floor(Math.random() * moles.length)];

        console.log(moleToShow);

        function selectRandomMole() {
            let moleToShow = moles[Math.floor(Math.random() * moles.length)];
            moleToShow.addClass("mole");
            moleToShow.click(function() {
                moleToShow.removeClass("mole");
                score += 5;
                console.log(score);
                selectRandomMole();
            })
        }
        selectRandomMole();

        // if (moleToShow.click(function () {
        //
        // }));




        // function showRandomMole() {
        //     moleToShow.classList.add("hideMole");
        //     selectRandomMole();
        // };
        //
        // moleToShow.onclick = function() {showRandomMole()};



    });




})();