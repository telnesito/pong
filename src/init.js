
import Bootloader from "./bootloader.js"

// configuracion del juego
const config = {
  width: 640,
  height: 400,
  parent: 'contenedor',
  physics: {
    default: 'arcade'
  },
  scene: [
    Bootloader
  ]
}

new Phaser.Game(config)