module.exports = {
  pages: {
    index: {
      entry: 'src/pages/index/main.js',
      template: '/public/index.html',
      filename: 'index.html'
    },
    'data-report': {
      entry: 'src/pages/dataReport/main.js',
      template: '/public/index.html',
      filename: 'dataReport.html'
    }
  }
}
