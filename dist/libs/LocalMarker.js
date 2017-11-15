window.onload = function () {
    var textForMarker = "loc";
    var re = new RegExp( textForMarker , 'gi' ),
        coincidence = window.location.toString().search(re);

    if (coincidence !== -1) {
        var body = document.body,
            divMarker = document.createElement('div');
        divMarker.id = 'marker';
        divMarker.style.cssText = 'position: fixed;top: 50%;left: 0;height: 0;width: 0;border-top: 40px solid transparent;border-bottom: 40px solid transparent;border-left: 80px solid #f00;font-family: Arial, sans-serif; font-weight: 700;color: #fff; line-height: 80px;z-index: 2;';

        var after = document.createElement('div');
        after.style.cssText = 'position:absolute;transform:translate(-150%, -50%)';
        after.innerHTML = 'Layout';
        body.appendChild(divMarker);
        divMarker.appendChild(after);
    } else {
        console.log("You use 'Bobber for local page' ©Zirka Andry\nYou should add this script to .gitignore or delete it ! ")
    }

};