const routes = module.exports = require('next-routes')()

routes
.add('index', '/')
.add('about', '/about', 'about')
.add('case-study', '/case-study', 'case-study')

//.add('project', '/:uid', 'project')