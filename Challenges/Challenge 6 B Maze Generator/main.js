const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const width = canvas.width
const height = canvas.height

const clear = () => ctx.clearRect(0, 0, width, height)
