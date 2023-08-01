export default class Scene_play extends Phaser.Scene {
  constructor() {
    super({ key: 'Scene_play' })
  }
  preload() {
    console.log('La Scene play se ha cargado')
  }
  create() {
    const { width, height } = this.sys.game.config
    this.add.image(width / 2, height / 2, 'separador')
  }
}