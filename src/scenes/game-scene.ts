import { ARROW_SPEED, TILE_OVERLAP_OFFSET, TILE_SIZE } from '../consts/globals'
import SceneKey from '../consts/scene-key'
import TextureKey from '../consts/texture-key'
import Arrow from '../prefabs/arrow'
import Enemy from '../prefabs/enemy'

const colors = [0xffb600, 0xfc5c65, 0x9179ff, 0x37d98c]
const coms = [
  'robotinformatif2849',
  'Albidcg',
  'Decap_four',
  'lohangeek',
  'Paulvoc',
  '3ps1ll0n',
  'Anis-gv8gx',
  'ReymonYtclips',
  'Tech_and_Hack',
  'LeonViot-zu2zv',
  'underscore-y4g',
  'Mabij3945',
  'Superboss-jw2zj',
  'XyJu',
  'viber.official_',
  'MA_VES',
  'goldedfox',
  'SnoopMarc0805',
  'dymingenierie3953',
  'KlemTGX',
  'GamerXShadowX',
  'suS-pectre',
  'eddylegend2504',
  'youssoufmamane1202',
  'tariteur9113',
  'Silver_U',
  'spongeeeman',
  'NatCode2',
  'malanthrond7521',
  'StayAveryx',
  'swt-jeuvideo7516',
  'Olympe85',
  'picascience8562',
  'jmc951',
  'Cocorigolo-vd1in',
  'Zeuslyy',
  'ElRealGoblino',
  'Lepro3',
  'du84boss',
  'LixyyLePanda',
  'Goladino',
  'Petitloupbrun',
  'fafounet6243',
  '1lebel131',
  'QuickkPod',
  'Landee',
  'Aka_Mao_',
  'minepluie',
  'WhoStoleMyFreakingUsername',
  'LRO-x6l',
  'flowwolf16',
  'MMX-multi-gaming',
  'cedricmarquet2797',
  'Écrivain-SYG',
  'Lemyx.',
  'ebrithilar4867',
  'CharlyFrancisco-f2e',
  'NathanMansion',
  'mariocolorGG',
  'noe-yannck7168',
  'fmed9079',
  'SlyMax0fficial',
  'hugoarnout-mc5mm',
  'Sperliox',
  'moooun35',
  'celianhartmann',
  'maybyxx',
  'Narsa44',
  'cesar-ej7gj',
  'spidelac',
  'xernas7880',
  'univers579',
  'sromaindu1693',
  'Strylexio',
  'JubinFR',
  'Un_Skieur',
  'mars_three_times',
  'MrAnthonyFR2023',
  'PogchaSync',
  'Zephyr-mapper',
  'Luminiox-mp4ek',
  'ACA_23',
  'tanhrs8711',
  'Fird_blue',
  'paulgoub01',
  'momobabo50',
  'filoutubs457',
  'KyllH',
  'Youssef-v8g',
  'Pork_exo',
  'notrix2391',
  'FBS_Leon-officlie',
  'UniversEnchante',
  'sarahcroche8623',
  'shikyoblood3058',
  'matheocolson7710',
  'KosayTwitch',
  'julesrichard7058',
  'MrSefyro',
  'Mathon714',
  'Albericbaboin',
  'liloulap',
  'unfairarena',
  'The_Super_Musician',
  'Shidoni-san',
  'kayoucat6352',
  'essapedtom9202',
  'white-vortex',
  'minotaurz962',
  'supergames9777',
  'saragnor7827',
  'RealGalaxPro',
  'SamFortems-w7p',
  'Aydrek',
  'dimbananox',
  '',
  'jaysuuun',
  'reithaxe3310',
  'coulebcalidou4442',
  'haroldcastiaux959',
  'ios-17-clock',
  'merguezchipo5201',
  'Flave-flaiy',
  'Erwan-c7d',
  'Zetfr_multi_gaming',
  'lambdachaine',
  'Arkstone-l4y',
  'MrBeton-ok8dk',
  'DodgyX',
  'altF4_studio',
  '13Mat54',
  'ia-maxiweb-nc',
  'super_games250',
  'TimUiop59',
  'valou6649',
  'martin92-yt',
  'gamepandastream8613',
  'leunam3859',
  'Azedka25',
  'Aichanel-rs3oo',
  'bozzoyann',
  'Cincendu',
  'Cafki_SpeedRun',
  'Moicom-ll3ts',
  'Draconix0',
  'BleuJumper',
  'BIBOUTEILLEetTTPR7',
  'simonlouet1869',
  'Esteban_lever',
  'Saphyrose',
  'thegamerx1564',
  'Saw-fy3hz',
  'emilegear5',
  'Cubestructeur',
  'Felbersig',
  'computeurhuman6940',
  'omnesalberic3960',
  'Amizy',
  'Celian_',
  'ironnaej',
  'Civicnote',
  '5US69',
  'purple_m0rse',
  'killvearnd',
  'chabanedahmani',
  'captainlouvetot9487',
  'DeterHope',
  'faisault',
  'thepieraless2391',
  '2mat20lespectateur',
  'pilouface8543',
  'Nathan_Best',
  'warillon',
  'AyanokojivsLight',
  'Oered',
  'baptFulbion',
  'moustafakhalil9779',
  'bause6182',
  '_Matiox_',
  'fuzeblocks',
  'oliver3607',
  'totapplecraft9374',
  'Adn-4',
  'kissingcloper',
  'KanaiiOff',
  'nonoxo_scs3371',
  'typeacier',
  'loutre384',
  'azertyi576',
  'darckt_',
  'quentinfouilleul2651',
  'Vanstyxx',
  'Monna_Solla',
  'Lumouille',
  'stanbee4356',
  'modo_discord',
  'axoudu711',
  'XdragonZ51',
  'Toyireu',
  'sokssy',
  'Meteotrance',
  'MotivationZone-ub3iz',
  'PeUrAnGe',
  'fratxfight',
  'Nartia9',
  'Rouge_Backrooms',
  'joandussauld9114',
  'DEYROS',
  'JCraftStar',
  'crafting4182',
  'zelriano36',
  'LouisL77777',
  'MaloCHEREL-tk6hd',
  'Karmax_FN',
  'marieoceane9052',
  'meyrogames',
  'KingCacaLeVrai',
  'MickaëlZoé',
  'Emixofficiel',
  'gabri-hell5430',
  'noansion6859',
  'nalol2000',
  'aqfreetoas',
  'sir_200',
  'MultiUniverseVideo',
  'vaatidu73000',
  'bubupackyt9616',
  'D01Light',
  'ClementClecle',
  'Zazagara',
  'dragon_jumper005',
  'Jooxa-dd1by',
  'simongauthier9178',
  'SWAT828',
  'Chigodelastar',
  'OO77._',
  'Peppychart',
  'IMBATTABLEbs',
  'valerykyungu',
  'LegendSniper348',
  'brindiboux',
  'Tamada357',
  'NeverNath27',
  'Solaire-b6k',
  'wawa44wawa44',
  'jyhut_peace-and-love-pls',
  'dieu_yo709',
  'Alep512',
  'gamerplayaxel_gamer7866',
  'leogarmier1031',
  'axoliquide2438',
  'sharkogtag',
  'Papaya_ppya999',
  'lebgesti4802',
  'Blocwarzeur',
  'SketchsAndShot',
  'YzeltoYtb',
  'JacobQuelquun',
  'DevPxll',
  'CodingBill',
  'PixelTriadFR',
  'FlashPet',
  'elzeraAOP',
  'rorodu17s',
  'faaaadoli',
  'acoeur1229',
  'rednox9233',
  'r0de065',
  'ornibys',
  'phagegame',
  'scoruluce',
  'dr.p2021',
  'cluexiii7049',
  'Tachinosaure',
  'baroudi.13',
  'Migrag-g6k',
  'vagadozz',
  'vinz94',
  'NotYouPasToi',
  'Yannytb',
  'LeVraiTomtom',
  'mineron2109',
  'abgache',
  'blaiselegoat_officiel',
  'WardekPerso',
  'Monsieur_sms',
  'Zd42',
  'L-Veugore1',
  'noctu7609',
  'Alexis25090',
  'NahosProduction',
  'bibidu39.08',
  'duty_aglouglou',
  'NoéMARGUET',
  'nicolasgoubin',
  'Ghost_ozo',
  'terrko',
  'TogepiX',
  'kuremantv9258',
  'davidsiwek994',
  'maxlego084',
  'NoamRozen',
  'macto3001',
  'trynitia5341',
  'Artemisfr2',
  'dwayzi_1541',
  'deltaclient4465',
  'kiki_the_coocki2376',
  'madycannizzaro1611',
  'Link34500',
  'inspecteurninja5877',
  'wolfsay',
  'YVE8k',
  'muet.minecraft',
  'Ebrithil1',
  'yann8765',
  'FastGeek-fn8tc',
  'moshodai',
  'Dexi_Le-Vrai',
  'IntheFishtank',
  'MussTruss',
  'micuit-cuit2',
  'mini_ice237',
  'kiff_world',
  'Benjamin-v2h3f',
  'Fabien-cu4zz',
  'summer7634',
  'arsenal6400',
  'Gabriel-f4w',
  'reindutout',
  'GeometryDash-q5e',
  'mattmoncode',
  'Skitch49',
  'MathisMth-m9x',
  'Misteryanis49',
  'Reqeusson',
  'oplmyt6495',
  'Titouanr',
  'jaidouer',
  'NoxyCag14',
  'MrPyrochimark',
  'DamienNoblet-bd6bi',
  'Flazer_x',
  'battlesim2954',
  'silveurfox-dx7bh',
  'moustache_18lebg50',
  'fer5five100',
  'solgan_yt',
  'Hedwardnewgat',
  'Riptor451',
  'Le_Lama',
  'Ccrazy_Historyy',
  'heaven6064',
  'kenkaneki5437',
  'julianhemmer1003',
  'FRANKLEFRANK',
  'mehdiazouz4119',
  'mohamedlapouge2149',
  'Karmax669',
  'Cambriolomhobbit',
  'synfuu4222',
  'virusf5000',
  'surviecrafteur',
  'ThéoEmilie-c2t',
  'sonicspinball2615',
  'itu_idji',
  'Glasarwax',
  'Neon_321zzz',
  'witters468',
  'bike_n_fish',
  'GatienMenard',
  'fazerdino1',
  'saurimyt',
  'vanibelsdepsilon',
  'AXELD912',
  'andrepape9347',
  'SerendipityOwens',
  'Shinydragonscale',
  'NhufOfficial',
  'CheapNova',
  'armand5',
  'AMFUGO09',
  'scipio9482',
  'Tom-bacquet',
  'steeredpoem',
  'nathanberthet4952',
  'Vivi-xn9iz',
  'simonmago4',
  'didierdidier-mm3hh',
  'diatra_off',
  'Dreguix',
  'estebanqgb',
  'tilelli_106',
  'infocomeducifc3346',
  'dewey8642',
  'Hellounfnow',
  'dr_phelix2326',
  'Gamer_david1',
  'Hamsteroux',
  'BixBoxCraft',
  'aboatinformatique8545',
  'Ptipepit',
  'akitain',
  'Stonyx71',
  'DrSkoff',
  'huzzah_tv',
  'Stogru0',
  'The_Nieto',
  'BayaBaya-rn4qw',
  'lescratcheur2548',
  'Sad_Gaming756',
  'matiss_d_smile',
  'maxtellon3067',
  'permapold6943',
  'Izaheal',
  'Reider-ro6md',
  'NatCode171',
  'rayanis55',
  'cadiougwenaelle2357',
  'luma_haku',
  'khorosenai',
  'roucain78',
  'OfficialPhantomix',
  'dond989',
  'Enak757',
  'marvenoreo',
  'Nir9420',
  'Malo5659',
  'WillRakov',
  'zombar-ds',
  'le.mouton',
  'juliettecastel1381',
  'iott_tcd',
  'nati0_',
  'Le_débile_avec_0_de_QI',
  'Couleur_PQ',
  'Kenzoni-n4e',
  'guillaumeleclerc7666',
  'vik3111',
  'Purple_Prog',
  'dorevarie',
  'Danslabouchedesenfants',
  'l.l6739',
  'SN-lr9mg',
  'Lapin_HCR2_188',
  'fouderix',
  'ITSRTRUE-xq5se',
  'josianerochat9717',
]

const level = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 8],
  [11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 8, 1],
  [3, 6, 0, 0, 0, 0, 0, 0, 0, 0, 12, 13, 13, 13, 13, 13, 13, 13, 13, 12, 0, 0, 5, 8, 5, 8, 5, 8, 5, 8, 5, 8, 1, 1],
  [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 10, 14, 14, 14, 14, 14, 14, 14, 14, 10, 3, 3, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 10, 2, 2, 2, 2, 2, 2, 2, 2, 10, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

enum TileType {
  classic = 'tiles/tile.png',
  water = 'tiles/tile_water.png',
  top = 'tiles/tile_top.png',
  stone = 'tiles/tile_stone.png',
  spikes = 'tiles/tile_spikes.png',
  slope = 'tiles/tile_slope.png',
  roof = 'tiles/tile_roof.png',
  grass = 'tiles/tile_grass.png',
  castle = 'tiles/tile_castle.png',
  brick = 'tiles/tile_brick.png',
  blockDoor = 'tiles/tile_blockDoor.png',
  arch = 'tiles/tile_arch.png',
  fence = 'tiles/tile_fence.png',
  bridge = 'tiles/tile_bridge.png',
}

const tilesMatch: { [key: number]: TileType } = {
  1: TileType.classic,
  2: TileType.water,
  3: TileType.top,
  4: TileType.stone,
  5: TileType.spikes,
  6: TileType.slope,
  7: TileType.roof,
  8: TileType.grass,
  9: TileType.castle,
  10: TileType.brick,
  11: TileType.blockDoor,
  12: TileType.arch,
  13: TileType.fence,
  14: TileType.bridge,
}

export default class GameScene extends Phaser.Scene {
  private bow!: Phaser.GameObjects.Image
  private hero!: Phaser.GameObjects.Image
  private arrows!: Phaser.Physics.Arcade.Group
  private enemies!: Phaser.Physics.Arcade.Group
  private bloodEmitter!: Phaser.GameObjects.Particles.ParticleEmitter
  private killsNumber!: number
  private killsText!: Phaser.GameObjects.BitmapText
  private toastContainer!: Phaser.GameObjects.Container
  private killsToasts: Phaser.GameObjects.BitmapText[] = []

  constructor() {
    super({ key: SceneKey.Game })
  }

  init() {
    this.killsNumber = 0
  }

  create() {
    // Map
    const ground = this.physics.add.staticGroup()
    const water = this.physics.add.staticGroup()

    this.arrows = this.physics.add.group({
      classType: Arrow,
      runChildUpdate: true,
    })
    this.enemies = this.physics.add.group({
      classType: Enemy,
      runChildUpdate: true,
    })

    let waterIndex = 0
    for (let i = 0; i < level.length; i++) {
      for (let j = 0; j < level[0].length; j++) {
        if (level[i][j] === 0) continue
        const isWater = level[i][j] === 2
        const group = isWater ? water : ground
        const tile = group.create(
          j * TILE_SIZE - TILE_OVERLAP_OFFSET * j,
          i * TILE_SIZE - TILE_OVERLAP_OFFSET * i,
          TextureKey.Sprite,
          tilesMatch[level[i][j]]
        )
        group.setOrigin(0)

        if (isWater) {
          tile.y = tile.y + 4
          this.tweens.add({
            targets: tile,
            y: tile.y + 20,
            yoyo: true,
            repeat: -1,
            duration: 1000,
            ease: 'Power1',
            delay: waterIndex * 200,
          })
          waterIndex++
        }
      }
    }

    // Cloud
    const cloudsPos = [
      { x: 200, y: 500 },
      { x: 400, y: 600 },
      { x: 800, y: 400 },
      { x: 1100, y: 500 },
      { x: 1680, y: 440 },
    ]

    for (let i = 0; i < cloudsPos.length; i++) {
      const cloud = this.add.image(cloudsPos[i].x, cloudsPos[i].y, i % 2 === 0 ? TextureKey.Cloud1 : TextureKey.Cloud2)
      const timeline = this.add.timeline([
        {
          at: 0,
          tween: {
            targets: cloud,
            x: Phaser.Math.Between(cloud.x - 20, cloud.x + 20),
            y: Phaser.Math.Between(cloud.y - 20, cloud.y + 20),
            duration: 2000,
          },
        },
        {
          at: 2000,
          tween: {
            targets: cloud,
            x: Phaser.Math.Between(cloud.x - 20, cloud.x + 20),
            y: Phaser.Math.Between(cloud.y - 20, cloud.y + 20),
            duration: 2000,
          },
        },
        {
          at: 4000,
          tween: {
            targets: cloud,
            x: Phaser.Math.Between(cloud.x - 20, cloud.x + 20),
            y: Phaser.Math.Between(cloud.y - 20, cloud.y + 20),
            duration: 2000,
          },
        },
        {
          at: 6000,
          stop: true,
        },
      ])

      timeline.repeat().play()
    }

    // Hero
    this.hero = this.add.image(160, 1286, TextureKey.Hero).setOrigin(0.5, 0.5)
    this.bow = this.add.image(205, 1286, TextureKey.Bow).setOrigin(0.5, 0.5)

    this.input.on('pointermove', this.aim, this)
    this.input.on('pointerdown', this.shoot, this)

    // Enemies
    for (let i = 0; i < coms.length; i++) {
      const enemy = this.enemies.getFirstDead(
        true,
        Phaser.Math.Between(1400, 1900),
        Phaser.Math.Between(600, 1000)
      ) as Enemy
      enemy.color = Phaser.Math.Between(1, 4)
      enemy.pseudo = coms[i]
    }

    // Particles
    const graphics = this.make.graphics()
    graphics.fillStyle(0xff004d)
    graphics.fillRect(0, 0, 10, 10)
    graphics.generateTexture('blood', 10, 10)

    this.bloodEmitter = this.add.particles(0, 0, 'blood', {
      speed: { min: -200, max: 200 },
      angle: { min: 0, max: 360 },
      scale: { start: 1, end: 0 },
      emitting: false,
      gravityY: 400,
      quantity: 30,
    })

    // Collisions
    this.physics.add.overlap(this.arrows, this.enemies, this.handleKill, undefined, this)

    // HUD
    this.killsText = this.add.bitmapText(
      64,
      64,
      TextureKey.Font,
      `Kills: ${this.killsNumber.toString().padStart(4, '0')}`,
      48
    )
    this.toastContainer = this.add.container(this.hero.x - 20, this.hero.y - 140)
  }

  aim(pointer: Phaser.Input.Pointer) {
    if (pointer.x < this.hero.x || pointer.y > this.hero.y) return

    const angle = Phaser.Math.Angle.Between(this.bow.x, this.bow.y, pointer.x, pointer.y)
    const constrainedAngle = Phaser.Math.Clamp(angle, -Math.PI / 2, 0)
    this.bow.setRotation(constrainedAngle)

    this.bow.x = this.hero.x + 40 * Math.cos(angle)
    this.bow.y = this.hero.y + 40 * Math.sin(angle)
  }

  shoot(pointer: Phaser.Input.Pointer) {
    if (pointer.x < this.hero.x || pointer.y > this.hero.y) return

    const angle = Phaser.Math.Angle.Between(this.bow.x, this.bow.y, pointer.x, pointer.y)
    const arrow = this.arrows.get(this.hero.x, this.hero.y, TextureKey.Arrow) as Phaser.Physics.Arcade.Image

    if (!arrow) return

    arrow.setActive(true)
    arrow.setVisible(true)
    arrow.setRotation(angle)
    this.physics.velocityFromRotation(angle, ARROW_SPEED, arrow.body!.velocity)
  }

  handleKill: Phaser.Types.Physics.Arcade.ArcadePhysicsCallback = (arrow: any, enemy: any) => {
    this.bloodEmitter.emitParticleAt(enemy.x, enemy.y)
    arrow.destroy()
    ;(enemy as Enemy).kill()
    this.killsNumber++
    this.killsText.setText(`Kills: ${this.killsNumber.toString().padStart(4, '0')}`)

    // Show kill info
    this.addToast(enemy)
    // const killText = this.add
    //   .bitmapText(0, 0, TextureKey.Font, `Anawan *killed* ${enemy.pseudo}`, 24)
    //   .setCharacterTint(16, -1, true, colors[enemy.color - 1])
    // const killInfo = this.add.container(this.hero.x - 20, this.hero.y - 140, killText)
    // this.tweens.add({
    //   targets: killInfo,
    //   alpha: 0,
    //   y: '-=40',
    //   duration: 1000,
    // })

    // Show com
    // const comText = this.add.text(0, 0, enemy.com, {
    //   fontFamily: 'Arial',
    //   fontSize: '24px',
    //   color: '#000000',
    //   wordWrap: { width: 800 },
    // })
    // const comInfo = this.add.container(this.hero.x - 20, this.hero.y - 600, comText)
    // this.tweens.add({
    //   targets: comInfo,
    //   alpha: 0,
    //   duration: 1500,
    // })
  }

  addToast(enemy: Enemy) {
    const toast = this.add
      .bitmapText(0, 0, TextureKey.Font, `Anawan *killed* ${enemy.pseudo}`, 24)
      .setCharacterTint(16, -1, true, colors[enemy.color - 1])
    this.toastContainer.add(toast)
    this.killsToasts.push(toast)
    this.positionToasts()

    this.tweens.add({
      targets: toast,
      alpha: 0,
      duration: 2000,
      onComplete: () => {
        toast.destroy()
        this.killsToasts.shift()
        this.positionToasts()
      },
    })
  }

  positionToasts() {
    let currentY = 0
    for (let i = this.killsToasts.length - 1; i >= 0; i--) {
      const toast = this.killsToasts[i]
      toast.setPosition(0, -currentY)
      currentY += 24 + 16
    }
  }
}
