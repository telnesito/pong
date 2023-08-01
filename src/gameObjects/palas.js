export default class Palas extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, type) {
    super(scene, x, y, type)
    // Scene es para modificar las propiedades de los objetos dentrode una scene
    scene.add.existing(this)
    scene.physics.world.enable(this)
    // this.body accede al objeto de la clase que conteiene las propiedades de cada objeto, en este caso al acceder a body, podemos acceder a las propiedades de su cuerpo como el movimiento, si va a reaccionar a bordes o si va a rebotar
    this.body.immovable = true
    this.body.setCollideWorldBounds(true)
    // console.log(this)



  }


}