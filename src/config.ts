import BootScene from './scenes/boot-scene'
import PreloaderScene from './scenes/preloader-scene'
import GameScene from './scenes/game-scene'

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: '1K',
  version: '1.0.0',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 2046,
    height: 1444,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        x: 0,
        y: 1600,
      },
    },
  },
  type: Phaser.AUTO,
  pixelArt: true,
  roundPixels: false,
  antialias: false,
  backgroundColor: '#ffffff',
  scene: [BootScene, PreloaderScene, GameScene],
}
