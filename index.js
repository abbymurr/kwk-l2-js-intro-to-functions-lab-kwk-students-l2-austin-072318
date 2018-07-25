// Write your code in this file!

function getUKTime() {
  let time = (new Date().getHours() + 5) % 12
  return time
}

getUKTime()






