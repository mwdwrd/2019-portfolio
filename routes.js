const routes = module.exports = require('next-routes')()

routes
.add('index', '/')
.add('biography', '/biography', 'biography')
.add('other', '/other', 'other')
.add('other-pagination', '/other/page/:page', 'other')
.add('case-study', '/case-studies/:slug', 'case-study')

// .add('prints', '/prints', 'prints')
// .add('case-studies', '/case-studies', 'case-studies')
