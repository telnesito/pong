import Palas from "../gameObjects/palas.js"

export default class Scene_play extends Phaser.Scene {
  constructor() {
    super({ key: 'Scene_play' })
  }
  preload() {
    console.log('La Scene play se ha cargado')
  }
  update() {
    if (this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {
      this.ball.setPosition(this.sys.game.config.width / 2, this.sys.game.config.height / 2)
    }

    // Control de pala derecha

    if (this.cursor.down.isDown) {
      this.der.body.setVelocityY(300)
    } else {
      if (this.cursor.up.isDown) {
        this.der.body.setVelocityY(-300)
      } else {
        this.der.body.setVelocityY(0)

      }
    }

    // control de pala izquierda

    if (this.cursor_S.isDown) {
      this.izq.body.setVelocityY(300)
    } else {
      if (this.cursor_W.isDown) {
        this.izq.body.setVelocityY(-300)
      } else {
        this.izq.body.setVelocityY(0)

      }

    }
  }
  create() {
    // Obtener el tama;o y alto del juego para centrar el separador
    const { width, height } = this.sys.game.config
    // Dibujar el separador
    this.add.image(width / 2, height / 2, 'separador')
    // Dibujar pala izquierda

    this.izq = new Palas(this, 30, height / 2, 'izq')
    // Dibujar pala derecha

    this.der = new Palas(this, width - 30, height / 2, 'der')

    // Dibujar bola

    // Que lados del mundo pueden rebotar
    this.physics.world.setBoundsCollision(false, false, true, true)
    this.ball = this.physics.add.image(width / 2, height / 2, 'ball')
    this.ball.setVelocityX(-180)
    this.ball.setCollideWorldBounds(true)
    this.ball.setBounce(1)
    // Fisicas
    this.physics.add.collider(this.ball, this.izq, this.chocaPelota, null, this)
    this.physics.add.collider(this.ball, this.der, this.chocaPelota, null, this)

    // Controles
    // Pala derecha
    this.cursor = this.input.keyboard.createCursorKeys()
    // Pala izquierda
    this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)


  }
  chocaPelota() {

    this.ball.setVelocityY(Phaser.Math.Between(-120, 120))

  }
}