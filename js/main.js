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
        console.log(moleToShow);

    });




})();