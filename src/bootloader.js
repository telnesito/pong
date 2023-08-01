export default class Bootloader extends Phaser.Scene {
  constructor() {
    super({ key: 'Bootloader' })
  }
  preload() {
    // Cuando se carguen las imagenes, se carga la escena
    this.load.on("complete", () => this.scene.start("Scene_play"))
    // Cargar las imagenes
    this.load.image('ball', '../public/assets/ball.png')
    this.load.image('izq', '../public/assets/left_pallete.png')
    this.load.image('der', '../public/assets/right_pallete.png')
    this.load.image('separador', '../public/assets/separator.png')
    console.log('Se ha cargado la escena del bootloader')
  }

}