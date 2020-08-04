const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  de: 'de',
}

module.exports = {
  rewrites: async () => {
    return [
      ...nextI18NextRewrites(localeSubpaths),
    ]
  },
}