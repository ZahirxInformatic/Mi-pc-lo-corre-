
module.exports = {
  packagerConfig: {
    asar: true
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'MeCorreEsteJuego',
        authors: 'Zahir',
        description: '¿Me corre este juego? - Edición PC'
      }
    }
  ]
};
