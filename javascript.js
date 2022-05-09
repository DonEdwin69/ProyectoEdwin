let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'https://www.aprendihoy.com/wp-content/uploads/2020/12/physics-image-featured-930x620.png') {
      miImage.setAttribute('src','https://i.pinimg.com/originals/a5/da/be/a5dabea9202dcfef09cb11340fd86192.gif');
    } else {
      miImage.setAttribute('src', 'https://www.aprendihoy.com/wp-content/uploads/2020/12/physics-image-featured-930x620.png');
    }
}
alert("En el contrario del Omega estoy, y aunque obvio soy, necesitaras prestar atencion. Por mi ubicacion, un trofeo obtendras");