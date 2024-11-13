import SceneKey from '../consts/scene-key'
import TextureKey from '../consts/texture-key'

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: SceneKey.Preloader })
  }

  preload() {
    this.load.setBaseURL('assets')
    this.load.multiatlas(TextureKey.Sprite, 'sprite.json')
    this.load.image(TextureKey.Cloud1, 'cloud1.png')
    this.load.image(TextureKey.Cloud2, 'cloud2.png')
    this.load.image(TextureKey.Hero, 'hero.png')
    this.load.image(TextureKey.Bow, 'bow.png')
    this.load.image(TextureKey.Arrow, 'arrow.png')
    this.load.bitmapFont(TextureKey.Font, 'fonts/arcade.png', 'fonts/arcade.xml')
  }

  create() {
    this.scene.start(SceneKey.Game)
  }
}
