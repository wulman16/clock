const first = document.createElement('h1')
document.querySelector('body').append(first)

function displayTime() {
  first.textContent = new Date().toLocaleTimeString()
}

setInterval(displayTime, 1000)
