window.onload = function () {
    var url = window.location.toString(),
        textForMarker = "loc",
        coincidence = url.search( "/" + textForMarker + "/i" );

    if( coincidence !== -1){
        console.log("coincidence =" + coincidence);
    }

    var body = document.body;
    var divMarker =  document.createElement('div');
        divMarker.id = 'marker';
    divMarker.style.cssText = 'position: fixed;top: 50%;left: 0;height: 0;width: 0;border-top: 40px solid transparent;border-bottom: 40px solid transparent;border-left: 80px solid #f00;font-family: Arial, sans-serif; font-weight: 700;color: #fff; line-height: 80px;z-index: 2;';

    var after = document.createElement('div');
        after.style.cssText ='position:absolute;transform:translate(-150%, -50%)';
        after.innerHTML = 'Layout';
    body.appendChild(divMarker);
    divMarker.appendChild(after);
};