const truckLabel = document.getElementById('truck-label'),
      carLabel = document.getElementById('car-label'),
      truckPackages = document.querySelectorAll('.truck-package'),
      carPackages = document.querySelectorAll('.car-package');

truckLabel.onclick = function() {
    // carPackages.classList.remove('.block-active')
    carPackages.forEach(package => {
        if (package.classList.contains('block-active')) {
            package.classList.remove('block-active')
        }
    })
    truckPackages.forEach(package => {
        if (!package.classList.contains('block-active')) {
            package.classList.add('block-active')
        }
    })
}
carLabel.onclick = function() {
    carPackages.forEach(package => {
        if (!package.classList.contains('block-active')) {
            package.classList.add('block-active')
        }
    })
    truckPackages.forEach(package => {
        if (package.classList.contains('block-active')) {
            package.classList.remove('block-active')
        }
    })
}