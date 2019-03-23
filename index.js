for(let i = 0; i < 10; i++) {
  const clock = document.createElement('h1')
  clock.className = 'clock'
  clock.id = i
  clock.style.marginLeft = `${i*60}px`
  document.querySelector('body').append(clock)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function displayTime(i, callback) {
  setTimeout(function() {
    const clock = document.getElementById(i)
    clock.textContent = new Date().toLocaleTimeString()
    if (i < 9) displayTime(++i, callback)
    else callback(4)
  }, 1000)
}

function updateTime(i) {
  setTimeout(function() {
    const clock = document.getElementById(i)
    clock.textContent = new Date().toLocaleTimeString()
    updateTime(getRandomInt(10))
  }, 1000)
}

displayTime(0, updateTime)
