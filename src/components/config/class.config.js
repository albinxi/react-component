export const Direction = {
  scss: {
    left: '$default-direction',
    right: '$opposite-direction'
  },
  less: {
    left: '',
    right: ''
  }
};

export const Font = {
  range: _.range(9, 25, 2),
  prefix: '$font-size-',
  list: ['xsmall', 'small', 'normal', 'lead', 'medium', 'large', 'xlarge', 'xxlarge'],
  scss: '$',
  less: '@'
};

export const Box = {
  range: _.range(0, 55, 5),
  margin: {
    base: {
      prefix: '.m-'
    },
    left: {
      prefix: '.m-l-'
    },
    right: {
      prefix: '.m-r-'
    }
  },
  padding: {
    base: {
      prefix: '.p-'
    },
    left: {
      prefix: '.p-l-'
    },
    right: {
      prefix: '.p-r-'
    }
  }
};
