import TextureKey from '../consts/texture-key'

export default class Enemy extends Phaser.GameObjects.Container {
  private nextJumpY = 0
  private sprite: Phaser.GameObjects.Image
  private _pseudo: string
  private pseudoText: Phaser.GameObjects.BitmapText
  private _color: number

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y)
    this._pseudo = ''
    this._color = 1

    this.sprite = scene.add.image(0, 0, TextureKey.Sprite, 'subs/sub1.png')
    this.sprite.flipX = true
    this.add(this.sprite)

    scene.physics.add.existing(this)
    const body = this.body as Phaser.Physics.Arcade.Body
    body.setSize(this.sprite.displayWidth, this.sprite.displayHeight)
    body.setOffset(-this.sprite.width / 2, -this.sprite.height / 2)
    this.setNextJumpY()

    this.pseudoText = scene.add.bitmapText(0, -48, TextureKey.Font, '', 16).setOrigin(0.5)
    this.add(this.pseudoText)
  }

  get color() {
    return this._color
  }

  set color(color: number) {
    this._color = color
    this.sprite.setFrame(`subs/sub${color}.png`)
  }

  get pseudo() {
    return this._pseudo
  }

  set pseudo(pseudo: string) {
    this._pseudo = pseudo
    this.pseudoText.setText(pseudo)
  }

  update() {
    // Jump
    if (this.y >= this.nextJumpY) {
      this.jump()
    }

    if (this.x < 0 || this.x > this.scene.scale.width || this.y < 0 || this.y > this.scene.scale.height) {
      // Out of bounds
      this.setActive(false)
      this.setVisible(false)
      this.destroy()
    }
  }

  setNextJumpY() {
    this.nextJumpY = Phaser.Math.Between(920, 1160)
  }

  jump() {
    this.setNextJumpY()
    ;(this.body as Phaser.Physics.Arcade.Body).setVelocityY(Phaser.Math.Between(-400, -1400))
  }

  kill() {
    ;(this.body as Phaser.Physics.Arcade.Body).enable = false
    this.scene.tweens.add({
      targets: this,
      scale: 2,
      duration: 300,
      alpha: 0,
      ease: 'Power1',
      onComplete: () => {
        this.destroy()
      },
    })
  }
}
