import TextureKey from '../consts/texture-key'

export default class Arrow extends Phaser.Physics.Arcade.Image {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, TextureKey.Arrow)
    scene.physics.add.existing(this)
    const body = this.body as Phaser.Physics.Arcade.Body
    body.setSize(12, 12)
    body.setOffset(20, 0)
  }

  update(time: number, delta: number) {
    super.update(time, delta)

    // Rotation from velocity
    const velocity = (this.body as Phaser.Physics.Arcade.Body).velocity
    const angle = Phaser.Math.Angle.Between(0, 0, velocity.x, velocity.y)
    this.setRotation(angle)

    // Out of bounds
    if (this.x < 0 || this.x > this.scene.scale.width || this.y < 0 || this.y > this.scene.scale.height) {
      this.destroy()
    }
  }
}
