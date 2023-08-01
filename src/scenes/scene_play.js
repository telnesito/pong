export default class Scene_play extends Phaser.Scene {
  constructor() {
    super({ key: 'Scene_play' })
  }
  preload() {
    console.log('La Scene play se ha cargado')
  }
  create() {
    // Obtener el tama;o y alto del juego para centrar el separador
    const { width, height } = this.sys.game.config
    // Dibujar el separador
    this.add.image(width / 2, height / 2, 'separador')
    // Dibujar pala izquierda
    this.izq = this.add.image(30, height / 2, 'izq')
    // Dibujar pala derecha
    this.der = this.add.image(width - 30, height / 2, 'der')
    // Dibujar bola
    this.ball = this.physics.add.image(width / 2, height / 2, 'ball')
    this.ball.setVelocityX(-180)
    this.ball.setCollideWorldBounds(true)
    this.ball.setBounce(1)

    this.physics.add.collider(this.ball, this.izq)
  }
}