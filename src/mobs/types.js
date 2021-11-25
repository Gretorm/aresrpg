export const Types = {
  abrakleur: {
    displayName: 'Abrakleur',
    type: 'mob',
    mob: 'enderman',
    equipments: {
      main_hand: { type: 'menitrass_100', count: 1 },
    },
    xp: 540,
    loots: [
      { item: 'coin', chance: 0.01 },
      { item: 'coin', chance: 0.01 },
      { item: 'bronze_coin', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.05 },
      { item: 'bronze_coin', chance: 0 },
      { item: 'trekker_eye', chance: 0.01 },
      { item: 'magma_stone', chance: 0.01 },
    ],
  },
  centenary_abrakleur: {
    displayName: 'Abrakleur Centenaire',
    type: 'mob',
    mob: 'enderman',
    xp: 800,
    loots: [
      { item: 'gold_coin', chance: 0.02 },
      { item: 'coin', chance: 0.05 },
      { item: 'coin', chance: 0.05 },
      { item: 'trekker_eye', chance: 0.08 },
      { item: 'magma_stone', chance: 0.5 },
    ],
  },
  atrophy_ankre: {
    displayName: 'Ankre Atrophié',
    type: 'mob',
    mob: 'squid',
    xp: 50,
    loots: [
      { item: 'thick_ink', chance: 0.01 },
      { item: 'ink_powder', chance: 0.02 },
      { item: 'ink_powder', chance: 0.02 },
      { item: 'bronze_coin', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  harpoon_ankre: {
    displayName: 'Ankre Harpon',
    type: 'mob',
    mob: 'squid',
    xp: 200,
    loots: [
      { item: 'thick_ink', chance: 0.05 },
      { item: 'ink_powder', chance: 0.01 },
      { item: 'ink_powder', chance: 0.01 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  depths_ankre: {
    displayName: 'Ankre des Profondeurs',
    type: 'mob',
    mob: 'squid',
    xp: 380,
    loots: [
      { item: 'ink_powder', chance: 0.05 },
      { item: 'coin', chance: 0.02 },
      { item: 'magma_stone', chance: 0.1 },
    ],
  },
  venerable_ankre: {
    displayName: 'Ankre Vénérables',
    type: 'mob',
    mob: 'squid',
    xp: 650,
    loots: [
      { item: 'thick_ink', chance: 0.2 },
      { item: 'ink_powder', chance: 0.05 },
      { item: 'ink_powder', chance: 0.05 },
      { item: 'coin', chance: 0.02 },
    ],
  },
  hungry_arakne: {
    displayName: 'Arakne Affamée',
    type: 'mob',
    mob: 'cave_spider',
    xp: 550,
    loots: [
      { item: 'low_venom', chance: 0.15 },
      { item: 'arakne_egg', chance: 0.02 },
      { item: 'coin', chance: 0.01 },
      { item: 'arakne_egg', chance: 0.05 },
      { item: 'magma_stone', chance: 0.05 },
    ],
  },
  elven_arakne: {
    displayName: 'Arakne Elfique',
    type: 'mob',
    mob: 'spider',
    xp: 1300,
    loots: [
      { item: 'low_venom', chance: 0.3 },
      { item: 'effective_venom', chance: 0.05 },
      { item: 'magma_stone', chance: 0.02 },
      { item: 'magma_stone', chance: 0.01 },
      { item: 'porous_cocoons', chance: 0.02 },
      { item: 'porous_cocoons', chance: 0.02 },
      { item: 'porous_cocoons', chance: 0.02 },
    ],
  },
  harmless_arakne: {
    displayName: 'Arakne Innofensive',
    type: 'mob',
    mob: 'cave_spider',
    xp: 12,
    loots: [
      { item: 'low_venom', chance: 0.01 },
      { item: 'arakne_egg', chance: 0.01 },
      { item: 'arakne_egg', chance: 0.01 },
      { item: 'bronze_coin', chance: 0.01 },
    ],
  },
  darker_arakne: {
    displayName: 'Arakne Sombre',
    type: 'mob',
    mob: 'spider',
    xp: 600,
    loots: [
      { item: 'low_venom', chance: 0.15 },
      { item: 'effective_venom', chance: 0.01 },
      { item: 'arakne_egg', chance: 0.05 },
      { item: 'coin', chance: 0.02 },
      { item: 'arakne_egg', chance: 0.05 },
      { item: 'porous_cocoons', chance: 0.02 },
    ],
  },
  darkness_archer: {
    displayName: 'Archer des Ténèbres',
    type: 'mob',
    mob: 'zombified_piglin',
    xp: 1900,
    loots: [
      { item: 'intermonde_brick', chance: 0.09 },
      { item: 'temporal_powder', chance: 0.09 },
    ],
  },
  cannibal: {
    displayName: 'Cannibale',
    type: 'mob',
    mob: 'villager',
    xp: 500,
    loots: [
      { item: 'cannibal_steak', chance: 0.06 },
      { item: 'coin', chance: 0.01 },
      { item: 'coin', chance: 0.01 },
      { item: 'magma_stone', chance: 0.05 },
      { item: 'magma_stone', chance: 0.02 },
    ],
  },
  cerbere: {
    displayName: 'Cerbère',
    type: 'mob',
    mob: 'wolf',
    xp: 2350,
    loots: [
      { item: 'temporal_powder', chance: 0.09 },
      { item: 'intermonde_brick', chance: 0.09 },
    ],
  },
  shaman: {
    displayName: 'Chaman',
    type: 'mob',
    mob: 'villager',
    xp: 300,
    loots: [
      { item: 'shaman_powder', chance: 0.1 },
      { item: 'standard_rope', chance: 0.05 },
      { item: 'coin', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.02 },
      { item: 'bronze_coin', chance: 0.02 },
      { item: 'magma_stone', chance: 0.05 },
      { item: 'satchel_of_the_sauvageon', chance: 0.2 },
      { item: 'coin', chance: 1 },
    ],
  },
  war_chief: {
    displayName: 'Chef de Guerre',
    type: 'mob',
    mob: 'villager',
    xp: 650,
    loots: [
      { item: 'coin', chance: 0.02 },
      { item: 'magma_stone', chance: 0.01 },
      { item: 'magma_stone', chance: 0.05 },
      { item: 'satchel_of_the_sauvageon', chance: 0.2 },
      { item: 'satchel_of_the_sauvageon', chance: 0.2 },
    ],
  },
  hades_horse: {
    displayName: 'Krizan',
    type: 'mob',
    mob: 'horse',
  },
  claqueur: {
    displayName: 'Claqueur',
    type: 'mob',
    mob: 'zombie',
    xp: 110,
    loots: [
      { item: 'holed_vest', chance: 0.1 },
      { item: 'bronze_coin', chance: 1 },
      { item: 'bronze_coin', chance: 0.33 },
    ],
  },
  decomposed_claqueur: {
    displayName: 'Claqueur Décomposé',
    type: 'mob',
    mob: 'zombie',
    xp: 180,
    loots: [
      { item: 'infected_skull', chance: 0.03 },
      { item: 'holed_vest', chance: 0.15 },
      { item: 'bronze_coin', chance: 1 },
      { item: 'bronze_coin', chance: 0.5 },
    ],
  },
  dark_claqueur: {
    displayName: 'Claqueur Sombre',
    type: 'mob',
    mob: 'zombie',
    xp: 700,
    loots: [
      { item: 'holed_vest', chance: 0.25 },
      { item: 'infected_skull', chance: 0.1 },
      { item: 'basic_vest', chance: 0.01 },
      { item: 'coin', chance: 0.35 },
      { item: 'bronze_coin', chance: 0.05 },
      { item: 'magma_stone', chance: 0.05 },
      { item: 'magma_stone', chance: 0.02 },
    ],
  },
  tormented_skull: {
    displayName: 'Crane Tourmenté',
    type: 'mob',
    mob: 'skeleton',
    xp: 200,
    loots: [
      { item: 'infected_skull', chance: 0.03 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  hungry_demon: {
    displayName: 'Démon Affamé',
    type: 'mob',
    mob: 'zombified_piglin',
    xp: 2200,
    loots: [
      { item: 'sacred_fire', chance: 0.02 },
      { item: 'intermonde_brick', chance: 0.02 },
      { item: 'intermonde_brick', chance: 0.02 },
      { item: 'temporal_powder', chance: 0.02 },
    ],
  },
  caverns_devourer: {
    displayName: 'Dévoreuse des Cavernes',
    type: 'mob',
    mob: 'spider',
    xp: 220,
    loots: [
      { item: 'bronze_coin', chance: 0.08 },
      { item: 'bronze_coin', chance: 0.5 },
      { item: 'bronze_coin', chance: 0.05 },
      { item: 'arakne_egg', chance: 0.2 },
      { item: 'arakne_egg', chance: 0.2 },
    ],
  },
  hairy_devourer: {
    displayName: 'Dévoreuse Velue',
    type: 'mob',
    mob: 'spider',
    xp: 75,
    loots: [
      { item: 'low_venom', chance: 0.02 },
      { item: 'arakne_egg', chance: 0.3 },
      { item: 'arakne_egg', chance: 0.3 },
    ],
  },
  draugr: {
    displayName: 'Draugr',
    type: 'mob',
    mob: 'skeleton',
    xp: 50,
    loots: [
      { item: 'rusty_draugr_helmet', chance: 0.01 },
      { item: 'broken_bone', chance: 0.01 },
      { item: 'broken_bone', chance: 0.01 },
      { item: 'broken_bone', chance: 0.01 },
      { item: 'broken_bone', chance: 0.01 },
      { item: 'bronze_coin', chance: 0.01 },
      { item: 'bronze_coin', chance: 0.01 },
    ],
  },
  antic_draugr: {
    displayName: 'Draugr Antique',
    type: 'mob',
    mob: 'skeleton',
    xp: 400,
    loots: [
      { item: 'rusty_draugr_helmet', chance: 0.08 },
      { item: 'broken_bone', chance: 0.02 },
      { item: 'coin', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.08 },
    ],
  },
  archer_draugr: {
    displayName: 'Draugr Archer',
    type: 'mob',
    mob: 'skeleton',
    xp: 80,
    loots: [
      { item: 'rusty_draugr_helmet', chance: 0.03 },
      { item: 'bronze_coin', chance: 0.02 },
      { item: 'bronze_coin', chance: 0.02 },
      { item: 'broken_bone', chance: 0.02 },
    ],
  },
  lancer_draugr: {
    displayName: 'Draugr Lancier',
    type: 'mob',
    mob: 'skeleton',
    xp: 450,
    loots: [
      { item: 'rusty_draugr_helmet', chance: 0.07 },
      { item: 'bronze_coin', chance: 0.08 },
      { item: 'bronze_coin', chance: 0.08 },
      { item: 'bronze_coin', chance: 0.08 },
    ],
  },
  possesses_draugr: {
    displayName: 'Draugr Possédé',
    type: 'mob',
    mob: 'skeleton',
    xp: 200,
    loots: [
      { item: 'rusty_draugr_helmet', chance: 0.05 },
      { item: 'ice_crystal', chance: 0.05 },
      { item: 'bronze_coin', chance: 1 },
    ],
  },
  insolent_spirit: {
    displayName: 'Esprit Insolent',
    type: 'mob',
    mob: 'blaze',
    xp: 1000,
    loots: [
      { item: 'intermonde_brick', chance: 0.02 },
      { item: 'intermonde_brick', chance: 0.02 },
    ],
  },
  snow_spirit: {
    displayName: 'Esprit des Glaces',
    type: 'mob',
    mob: 'skeleton',
    xp: 550,
    loots: [
      { item: 'ice_crystal', chance: 0.01 },
      { item: 'coin', chance: 0.02 },
      { item: 'coin', chance: 0.05 },
      { item: 'magma_stone', chance: 0.01 },
      { item: 'magma_stone', chance: 0.05 },
    ],
  },
  abyss_guardian: {
    displayName: 'Gardien des Abysses',
    type: 'mob',
    mob: 'zombified_piglin',
    xp: 1200,
    loots: [{ item: 'intermonde_brick', chance: 0.09 }],
  },
  wolf_guardian: {
    displayName: 'Guerrier Loup',
    type: 'mob',
    mob: 'zombie',
    xp: 55,
    loots: [
      { item: 'frozen_face', chance: 0.03 },
      { item: 'ice_crystal', chance: 0.01 },
      { item: 'ice_crystal', chance: 0.01 },
      { item: 'ice_crystal', chance: 0.01 },
      { item: 'bronze_coin', chance: 0.02 },
      { item: 'bronze_coin', chance: 0.02 },
    ],
  },
  infected: {
    displayName: 'Infécté',
    type: 'mob',
    mob: 'zombie',
    xp: 60,
    loots: [
      { item: 'old_shorts', chance: 0.04 },
      { item: 'bronze_coin', chance: 0.02 },
    ],
  },
  young_wolf: {
    displayName: 'Jeune Loup',
    type: 'mob',
    mob: 'wolf',
    xp: 10,
    loots: [
      { item: 'wolf_tear', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  young_savage: {
    displayName: 'Jeune Sauvageon',
    type: 'mob',
    mob: 'villager',
    xp: 1,
    loots: [
      { item: 'wooden_sandal', chance: 0.01 },
      { item: 'satchel_of_the_sauvageon', chance: 0.07 },
    ],
  },
  young_poisonous: {
    displayName: 'Jeune Venimeuse',
    type: 'mob',
    mob: 'cave_spider',
    xp: 70,
    loots: [
      { item: 'low_venom', chance: 0.02 },
      { item: 'arakne_egg', chance: 0.15 },
      { item: 'arakne_egg', chance: 0.15 },
      { item: 'bronze_coin', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  wolf: {
    displayName: 'Loup',
    type: 'mob',
    mob: 'wolf',
    xp: 10,
    loots: [
      { item: 'fragile_wolf_tooth', chance: 0.01 },
      { item: 'wolf_tear', chance: 0.01 },
      { item: 'wolf_tear', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  hungry_wolf: {
    displayName: 'Loup Affamé',
    type: 'mob',
    mob: 'wolf',
    xp: 70,
    loots: [
      { item: 'fragile_wolf_tooth', chance: 0.01 },
      { item: 'wolf_tear', chance: 0.01 },
      { item: 'wolf_tear', chance: 0.01 },
      { item: 'wolf_tear', chance: 0.01 },
    ],
  },
  antic_wolf: {
    displayName: 'Loup Antique',
    type: 'mob',
    mob: 'wolf',
    xp: 1800,
    loots: [
      { item: 'magma_stone', chance: 0.02 },
      { item: 'gold_coin', chance: 0.02 },
      { item: 'coin', chance: 0.2 },
      { item: 'running_wolf_tooth', chance: 0.02 },
      { item: 'fragile_wolf_tooth', chance: 0.15 },
    ],
  },
  white_wolf: {
    displayName: 'Loup Blanc',
    type: 'mob',
    mob: 'wolf',
    xp: 350,
    loots: [
      { item: 'fragile_wolf_tooth', chance: 0.03 },
      { item: 'coin', chance: 0.05 },
      { item: 'jormunld_tear', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.08 },
      { item: 'magma_stone', chance: 0.05 },
    ],
  },
  caverns_wolf: {
    displayName: 'Loup des Cavernes',
    type: 'mob',
    mob: 'wolf',
    xp: 1000,
    loots: [
      { item: 'fragile_wolf_tooth', chance: 0.2 },
      { item: 'running_wolf_tooth', chance: 0.01 },
      { item: 'coin', chance: 0.02 },
      { item: 'magma_stone', chance: 0.01 },
      { item: 'magma_stone', chance: 0.01 },
    ],
  },
  enraged_wolf: {
    displayName: 'Loup Enragé',
    type: 'mob',
    mob: 'wolf',
    xp: 350,
    loots: [
      { item: 'fragile_wolf_tooth', chance: 0.02 },
      { item: 'wolf_tear', chance: 0.01 },
      { item: 'wolf_tear', chance: 0.01 },
      { item: 'wolf_tear', chance: 0.01 },
      { item: 'bronze_coin', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  she_wolf: {
    displayName: 'Louve',
    type: 'mob',
    mob: 'wolf',
    xp: 350,
    loots: [
      { item: 'fragile_wolf_tooth', chance: 0.06 },
      { item: 'wolf_tear', chance: 0.05 },
      { item: 'magma_stone', chance: 0.01 },
      { item: 'coin', chance: 0.02 },
    ],
  },
  cub: {
    displayName: 'Louveteau',
    type: 'mob',
    mob: 'wolf',
    xp: 41,
    loots: [
      { item: 'wolf_tear', chance: 0.01 },
      { item: 'wolf_tear', chance: 0.01 },
      { item: 'bronze_coin', chance: 0.01 },
    ],
  },
  white_walker: {
    displayName: 'Marcheur Blanc',
    type: 'mob',
    mob: 'zombie',
    xp: 140,
    loots: [
      { item: 'frozen_face', chance: 0.02 },
      { item: 'bronze_coin', chance: 1 },
      { item: 'bronze_coin', chance: 0.5 },
      { item: 'magma_stone', chance: 0.01 },
    ],
  },
  sheep: {
    displayName: 'Mouton de Thebes',
    type: 'mob',
    mob: 'sheep',
    xp: 5,
    loots: [
      { item: 'decomposed_beast_skin', chance: 0.04 },
      { item: 'corn', chance: 0.05 },
      { item: 'corn', chance: 0.05 },
      { item: 'corn', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  nephilainaurata: {
    displayName: 'Néphila Inaurata',
    type: 'mob',
    mob: 'spider',
    xp: 350,
    loots: [
      { item: 'low_venom', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.08 },
      { item: 'magma_stone', chance: 0.05 },
    ],
  },
  golden_nephile: {
    displayName: 'Néphile Dorée',
    type: 'mob',
    mob: 'spider',
    xp: 180,
    loots: [
      { item: 'low_venom', chance: 0.04 },
      { item: 'bronze_coin', chance: 0.08 },
      { item: 'arakne_egg', chance: 0.5 },
      { item: 'arakne_egg', chance: 0.5 },
    ],
  },
  immature_nephile: {
    displayName: 'Néphile Immature',
    type: 'mob',
    mob: 'cave_spider',
    xp: 230,
    loots: [
      { item: 'arakne_egg', chance: 0.3 },
      { item: 'arakne_egg', chance: 0.3 },
      { item: 'bronze_coin', chance: 0.08 },
      { item: 'bronze_coin', chance: 0.08 },
    ],
  },
  talus_pig: {
    displayName: 'Porc de Talus',
    type: 'mob',
    mob: 'pig',
    xp: 10,
    loots: [
      { item: 'corn', chance: 0.05 },
      { item: 'corn', chance: 0.05 },
      { item: 'decomposed_beast_skin', chance: 0.04 },
      { item: 'corn', chance: 0.02 },
      { item: 'decomposed_beast_skin', chance: 0.04 },
      { item: 'decomposed_beast_skin', chance: 0.04 },
      { item: 'bronze_coin', chance: 0.01 },
    ],
  },
  bamboula_pig: {
    displayName: 'Porc Bamboula',
    type: 'mob',
    mob: 'pig',
    xp: 5,
    loots: [
      { item: 'decomposed_beast_skin', chance: 0.04 },
      { item: 'corn', chance: 0.02 },
      { item: 'bronze_coin', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  savannah_pig: {
    displayName: 'Porc de Savanne',
    type: 'mob',
    mob: 'pig',
    xp: 5,
    loots: [
      { item: 'decomposed_beast_skin', chance: 0.04 },
      { item: 'corn', chance: 0.02 },
      { item: 'corn', chance: 0.02 },
      { item: 'bronze_coin', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  chicken: {
    displayName: 'Poule',
    type: 'mob',
    mob: 'chicken',
    equipment: {
      main_hand: { type: 'menitrass_100', count: 1 },
    },
    xp: 2,
    loots: [
      { item: 'corn', chance: 0.05 },
      { item: 'corn', chance: 0.05 },
      { item: 'feather', chance: 0.01 },
      { item: 'bronze_coin', chance: 0.01 },
    ],
  },
  sick_chicken: {
    displayName: 'Poule Malade',
    type: 'mob',
    mob: 'chicken',
    xp: 3,
    loots: [
      { item: 'corn', chance: 0.05 },
      { item: 'corn', chance: 0.05 },
      { item: 'corn', chance: 0.05 },
      { item: 'feather', chance: 0.01 },
      { item: 'feather', chance: 0.01 },
    ],
  },
  monk_chicken: {
    displayName: 'Poulet Moîne',
    type: 'mob',
    mob: 'chicken',
    xp: 2,
    loots: [
      { item: 'corn', chance: 0.05 },
      { item: 'corn', chance: 0.05 },
      { item: 'corn', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  rat: {
    displayName: 'Rat',
    type: 'mob',
    mob: 'silverfish',
    xp: 4,
    loots: [{ item: 'bronze_coin', chance: 0.05 }],
  },
  nordicRat: {
    displayName: 'Rat Nordique',
    type: 'mob',
    mob: 'silverfish',
    xp: 6,
    loots: [
      { item: 'bronze_coin', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  plains_boar: {
    displayName: 'Sanglier des Plaines',
    type: 'mob',
    mob: 'pig',
    xp: 2000,
    loots: [
      { item: 'gold_coin', chance: 0.1 },
      { item: 'coin', chance: 0.05 },
      { item: 'magma_stone', chance: 0.5 },
      { item: 'magma_stone', chance: 0.5 },
      { item: 'standard_animal_skin', chance: 0.5 },
    ],
  },
  savage: {
    displayName: 'Sauvageon',
    type: 'mob',
    mob: 'villager',
    xp: 1,
    loots: [
      { item: 'wooden_sandal', chance: 0.01 },
      { item: 'satchel_of_the_sauvageon', chance: 0.07 },
      { item: 'bronze_coin', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  aggressive_savage: {
    displayName: 'Sauvageon Agressif',
    type: 'mob',
    mob: 'villager',
    xp: 25,
    loots: [
      { item: 'wooden_sandal', chance: 0.01 },
      { item: 'satchel_of_the_sauvageon', chance: 0.07 },
      { item: 'satchel_of_the_sauvageon', chance: 0.07 },
      { item: 'satchel_of_the_sauvageon', chance: 0.07 },
      { item: 'satchel_of_the_sauvageon', chance: 0.07 },
      { item: 'satchel_of_the_sauvageon', chance: 0.07 },
      { item: 'bronze_coin', chance: 0.01 },
    ],
  },
  fallen_savage: {
    displayName: 'Sauvageon Déchu',
    type: 'mob',
    mob: 'villager',
    xp: 70,
    loots: [
      { item: 'wooden_sandal', chance: 0.02 },
      { item: 'bronze_coin', chance: 0.01 },
      { item: 'bronze_coin', chance: 0.01 },
    ],
  },
  slinger_savage: {
    displayName: 'Sauvageon Frondeur',
    type: 'mob',
    mob: 'villager',
    xp: 12,
    loots: [
      { item: 'wooden_sandal', chance: 0.01 },
      { item: 'slinger_projectile', chance: 0.01 },
      { item: 'satchel_of_the_sauvageon', chance: 0.07 },
      { item: 'satchel_of_the_sauvageon', chance: 0.07 },
      { item: 'satchel_of_the_sauvageon', chance: 0.07 },
      { item: 'bronze_coin', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  fertile_savagene: {
    displayName: 'Sauvageonne Féconde',
    type: 'mob',
    mob: 'villager',
    xp: 200,
    loots: [
      { item: 'wooden_sandal', chance: 0.04 },
      { item: 'satchel_of_the_sauvageon', chance: 0.02 },
      { item: 'satchel_of_the_sauvageon', chance: 0.02 },
      { item: 'satchel_of_the_sauvageon', chance: 0.02 },
      { item: 'satchel_of_the_sauvageon', chance: 0.02 },
      { item: 'satchel_of_the_sauvageon', chance: 0.02 },
      { item: 'bronze_coin', chance: 0.02 },
      { item: 'bronze_coin', chance: 0.02 },
      { item: 'bronze_coin', chance: 0.01 },
      { item: 'bronze_coin', chance: 0.01 },
    ],
  },
  savagene: {
    displayName: 'Sauvageonne',
    type: 'mob',
    mob: 'villager',
    xp: 115,
    loots: [
      { item: 'wooden_sandal', chance: 0.03 },
      { item: 'satchel_of_the_sauvageon', chance: 0.02 },
      { item: 'satchel_of_the_sauvageon', chance: 0.02 },
      { item: 'satchel_of_the_sauvageon', chance: 0.02 },
      { item: 'bronze_coin', chance: 0.02 },
      { item: 'bronze_coin', chance: 0.02 },
    ],
  },
  savage_perjurer: {
    displayName: 'Sauvageon Parjure',
    type: 'mob',
    mob: 'villager',
    xp: 2,
    loots: [
      { item: 'wooden_sandal', chance: 0.01 },
      { item: 'satchel_of_the_sauvageon', chance: 0.07 },
      { item: 'satchel_of_the_sauvageon', chance: 0.07 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  darkness_soldier: {
    displayName: 'Soldat des Ténèbres',
    type: 'mob',
    mob: 'zombified_piglin',
    xp: 2000,
    loots: [
      { item: 'temporal_powder', chance: 0.02 },
      { item: 'temporal_powder', chance: 0.09 },
    ],
  },
  skeleton: {
    displayName: 'Squelette',
    type: 'mob',
    mob: 'skeleton',
    equipment: {
      main_hand: { type: 'menitrass_100', count: 1 },
      chestplate: { type: 'numen_armor', count: 1 },
    },
    xp: 35,
    loots: [
      { item: 'old_shorts', chance: 0.01 },
      { item: 'infected_skull', chance: 0.01 },
      { item: 'broken_bone', chance: 0.01 },
      { item: 'broken_bone', chance: 0.01 },
      { item: 'broken_bone', chance: 0.01 },
      { item: 'bronze_coin', chance: 0.01 },
    ],
  },
  brittle_skeleton: {
    displayName: 'Squelette Fragile',
    type: 'mob',
    mob: 'skeleton',
    xp: 20,
    loots: [
      { item: 'old_shorts', chance: 0.01 },
      { item: 'infected_skull', chance: 0.01 },
      { item: 'broken_bone', chance: 0.01 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  nordic_skeleton: {
    displayName: 'Squelette Nordique',
    type: 'mob',
    mob: 'skeleton',
    xp: 110,
    loots: [
      { item: 'infected_skull', chance: 0.02 },
      { item: 'old_shorts', chance: 0.02 },
      { item: 'frozen_face', chance: 0.02 },
      { item: 'broken_bone', chance: 0.02 },
      { item: 'broken_bone', chance: 0.02 },
      { item: 'bronze_coin', chance: 1 },
      { item: 'bronze_coin', chance: 0.33 },
    ],
  },
  agressive_tegenarian: {
    displayName: 'Tégénaire Agressive',
    type: 'mob',
    mob: 'spider',
    xp: 35,
    loots: [
      { item: 'low_venom', chance: 0.01 },
      { item: 'bronze_coin', chance: 0.01 },
      { item: 'arakne_egg', chance: 0.01 },
      { item: 'arakne_egg', chance: 0.01 },
    ],
  },
  forest_tegenarian: {
    displayName: 'Tégénaire de Foret',
    type: 'mob',
    mob: 'spider',
    xp: 35,
    loots: [
      { item: 'low_venom', chance: 0.01 },
      { item: 'arakne_egg', chance: 0.01 },
      { item: 'arakne_egg', chance: 0.01 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  cow: {
    displayName: 'Vache',
    type: 'mob',
    mob: 'cow',
    xp: 7,
    loots: [
      { item: 'decomposed_beast_skin', chance: 0.04 },
      { item: 'corn', chance: 0.05 },
      { item: 'corn', chance: 0.05 },
      { item: 'corn', chance: 0.05 },
      { item: 'corn', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.05 },
      { item: 'bronze_coin', chance: 0.05 },
    ],
  },
  hook_poisonous: {
    displayName: 'Venimeuse à Crochets',
    type: 'mob',
    mob: 'cave_spider',
    xp: 115,
    loots: [
      { item: 'low_venom', chance: 0.02 },
      { item: 'arakne_egg', chance: 0.15 },
      { item: 'bronze_coin', chance: 0.08 },
    ],
  },
  araknea: {
    displayName: 'Araknéa la Couveuse',
    type: 'archiMob',
    mob: 'spider',
    xp: 5000,
    loots: [
      { item: 'coin', chance: 0.01 },
      { item: 'arakne_egg', chance: 0.2 },
      { item: 'porous_cocoons', chance: 0.02 },
      { item: 'porous_cocoons', chance: 0.1 },
    ],
  },
  moutron: {
    displayName: "Moutron l'Epique",
    type: 'archiMob',
    mob: 'sheep',
    xp: 125,
    loots: [],
  },
  nofus: {
    displayName: 'Nofus le Chafer',
    type: 'archiMob',
    mob: 'skeleton',
    xp: 2000,
    loots: [
      { item: 'coin', chance: 0.02 },
      { item: 'broken_bone', chance: 0.02 },
      { item: 'broken_bone', chance: 0.02 },
    ],
  },
  ramick: {
    displayName: 'Ramick Eymouse',
    type: 'archiMob',
    mob: 'silverfish',
    xp: 20,
    loots: [{ item: 'magma_stone', chance: 0.1 }],
  },
  raton: {
    displayName: "Raton L'immaculé",
    type: 'archiMob',
    mob: 'silverfish',
  },
  severin: {
    displayName: 'Severin le boursouflé',
    type: 'archiMob',
    mob: 'pig',
    xp: 250,
    loots: [
      { item: 'magma_stone', chance: 0.1 },
      { item: 'bronze_coin', chance: 0.2 },
      { item: 'bronze_coin', chance: 0.2 },
      { item: 'bronze_coin', chance: 0.2 },
    ],
  },
  sparot: {
    displayName: 'Sparot le Pirate',
    type: 'archiMob',
    mob: 'zombie',
    xp: 850,
    loots: [{ item: 'magma_stone', chance: 1 }],
  },
  aragog: {
    displayName: "Aragog L'Acromentule",
    type: 'boss',
    mob: 'spider',
    xp: 17000,
    loots: [
      { item: 'teleportation_scroll', chance: 0.1 },
      { item: 'legendary_aragog_gem', chance: 0.035 },
      { item: 'legendary_aragog_gem', chance: 0.035 },
      { item: 'legendary_aragog_gem', chance: 0.06 },
      { item: 'legendary_aragog_gem', chance: 0.08 },
      { item: 'legendary_aragog_gem', chance: 0.08 },
      { item: 'legendary_aragog_gem', chance: 0.08 },
      { item: 'legendary_aragog_gem', chance: 0.08 },
      { item: 'aragog_sewing_thread', chance: 0.04 },
      { item: 'porous_cocoons', chance: 0.1 },
      { item: 'porous_cocoons', chance: 0.1 },
      { item: 'porous_cocoons', chance: 0.1 },
    ],
  },
  hades: {
    displayName: "Hades l'impitoyable",
    type: 'boss',
    mob: 'skeleton',
  },
  kraken: {
    displayName: 'Kraken',
    type: 'boss',
    mob: 'skeleton',
    xp: 9000,
    loots: [
      { item: 'teleportation_scroll', chance: 0.08 },
      { item: 'gem_of_the_kraken', chance: 0.06 },
      { item: 'kraken_gem', chance: 0.03 },
      { item: 'gem_of_the_kraken', chance: 0.06 },
      { item: 'gem_of_the_kraken', chance: 0.06 },
      { item: 'gem_of_the_kraken', chance: 0.06 },
      { item: 'gem_of_the_kraken', chance: 0.04 },
      { item: 'rotten_bag', chance: 0.04 },
    ],
  },
  nerak: {
    displayName: "Nérak l'Invoqué",
    type: 'boss',
    mob: 'skeleton',
    xp: 3000,
    loots: [
      { item: 'bronze_coin', chance: 0 },
      { item: 'gem_of_nerak', chance: 0.07 },
      { item: 'gem_of_nerak', chance: 0.07 },
      { item: 'gem_of_nerak', chance: 0.07 },
      { item: 'gem_of_nerak', chance: 0.07 },
      { item: 'gem_of_nerak', chance: 0.04 },
      { item: 'gem_of_nerak', chance: 0.03 },
      { item: 'teleportation_scroll', chance: 0.05 },
    ],
  },
  warthog: {
    displayName: 'Phacochère',
    type: 'boss',
    mob: 'pig',
    xp: 300,
    loots: [
      { item: 'bronze_coin', chance: 0.02 },
      { item: 'bronze_coin', chance: 0.02 },
      { item: 'bronze_coin', chance: 0.02 },
      { item: 'decomposed_beast_skin', chance: 1 },
      { item: 'warthog_gem', chance: 0.07 },
      { item: 'warthog_gem', chance: 0.09 },
      { item: 'warthog_gem', chance: 0.09 },
      { item: 'warthog_gem', chance: 0.09 },
      { item: 'warthog_gem', chance: 0.09 },
      { item: 'teleportation_scroll', chance: 0.1 },
    ],
  },
  numen_citizen: {
    displayName: 'Citoyen de Nùmen',
    type: 'npc',
    mob: 'villager',
    dialogs: [
      'O man dôr túliel le ?',
      'Man anírach cerin an le ?',
      'Gwanno ereb nin !',
      'No dhínen !',
      'Garich i dhôl goll o Orch',
      'Nai Aragog meditha le!',
      'Heca, firimar !',
    ],
  },
  segeste_citizen: {
    displayName: 'Citoyen de Ségeste',
    type: 'npc',
    mob: 'villager',
    dialogs: [
      'A Ségeste nous aimons la pêche et les belles villageoises !',
      "Teh c'est le petit {player} ! On m'avait dit que tu étais moche mais je ne pensais pas à ce point !",
      'On raconte que le puit de Ségeste est ensorcelé.. sans doute une vieille légende',
      "Ne m'adresse pas la parole petit ! nous n'avons pas les mêmes valeurs.",
      'Encore toi ?',
      'Un jour les dragons reviendront et ce sera la fin de notre monde !',
      "AAAAAAAAAAAAAAH !!!! Oups pardon je t'avais prit pour un infécté..",
      'Ce maudit Craken a encore provoqué une inondation...',
      "Une bonne bière et c'est repartit !",
      'Laisse moi !',
    ],
  },
  thebes_citizen: {
    displayName: 'Citoyen de Thebes',
    type: 'npc',
    mob: 'villager',
    dialogs: [
      "C'est incroyable ce beau temps !",
      "C'est toi {player} ? Je pensais que tu étais plus grand !",
      "Fais attention à ne pas t'aventurer dans les catacombes, c'est dangereux !",
      "Je n'ai pas le temps de te parler, va t'en ou j'apelle la garde !",
      'Encore toi ?',
      'Un jour les dragons reviendront et ce sera la fin de notre monde !',
      'Laisse moi !',
    ],
  },
  guardian: {
    displayName: 'Garde',
    type: 'npc',
    mob: 'villager',
  },
  monk: {
    displayName: 'Moine',
    type: 'npc',
    mob: 'villager',
    dialogs: [
      'A Bien le bonjour étranger !',
      "Le père Niflard n'est pas rentré de sa ceuillette de choux..",
      'Amen',
      "A quelques lieues d'içi se trouve un gouffre terrible remplit d'Arakne.",
      'je doit aller à la messe !',
      'Un jour les dragons reviendront et ce sera la fin de notre monde !',
      'Diantre ! que tu est vilain..',
      'Oh !',
      "Une bonne cervoise et c'est repartit !",
      'Hum ?',
    ],
  },
}
