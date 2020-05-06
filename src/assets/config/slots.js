const slot = {
  reelSymbols: {
    '3xBAR': {
      img: '3xBAR.png'
    },
    BAR: {
      img: 'BAR.png'
    },
    '2xBAR': {
      img: '2xBAR.png'
    },
    '7': {
      img: '7.png'
    },
    CHERRY: {
      img: 'CHERRY.png'
    }
  },
  reelSymbolsOrder: ['3xBAR', 'BAR', '2xBAR', '7', 'CHERRY'],
  payTable: {
    single: {
      'CHERRY CHERRY CHERRY': {
        top_line: 2000,
        center_line: 1000,
        bottom_line: 4000
      },
      '7 7 7': {
        top_line: 150,
        center_line: 150,
        bottom_line: 150
      },
      '7 7 CHERRY': {
        top_line: 75,
        center_line: 75,
        bottom_line: 75
      },
      '7 CHERRY CHERRY': {
        top_line: 75,
        center_line: 75,
        bottom_line: 75
      },
      'CHERRY CHERRY 7': {
        top_line: 75,
        center_line: 75,
        bottom_line: 75
      },
      'CHERRY 7 7': {
        top_line: 75,
        center_line: 75,
        bottom_line: 75
      },
      '3xBAR 3xBAR 3xBAR': {
        top_line: 50,
        center_line: 50,
        bottom_line: 50
      },
      '2xBAR 2xBAR 2xBAR': {
        top_line: 20,
        center_line: 20,
        bottom_line: 20
      },
      'BAR BAR BAR': {
        top_line: 10,
        center_line: 10,
        bottom_line: 10
      }
    }
  }
};

export default slot;
