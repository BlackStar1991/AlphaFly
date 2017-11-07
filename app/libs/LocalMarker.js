window.onload = function () {
    var body = document.body;
    var divMarker =  document.createElement('div');
        divMarker.id = 'marker';

    var after = document.createElement('div');
        after.style.position = 'absolute';
        after.style.transform = 'translate(-150%, -50%)';
        after.innerHTML = 'Layout';

    divMarker.style.position = "fixed";
    divMarker.style.top = "50%";
    divMarker.style.left = "0";
    divMarker.style.height = "0";
    divMarker.style.width = "0";
    divMarker.style.borderTop = "40px solid transparent";
    divMarker.style.borderBottom = "40px solid transparent";
    divMarker.style.borderLeft = "80px solid #f00";
    divMarker.style.fontFamily = "Arial, sans-serif";
    divMarker.style.fontWeight = "700";
    divMarker.style.color = "#fff";
    divMarker.style.lineHeight = "80px";
    divMarker.style.zIndex = "2";


    body.appendChild(divMarker);
    divMarker.appendChild(after);


};