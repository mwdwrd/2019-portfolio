const routes = module.exports = require('next-routes')()

routes
.add('index', '/')
.add('biography', '/biography', 'biography')
.add('other', '/other', 'other')

//.add('project', '/:uid', 'project')
// .add('case-study', '/case-study', 'case-study')
// .add('prints', '/prints', 'prints')
// .add('case-studies', '/case-studies', 'case-studies')
// .add('about', '/about', 'about')
