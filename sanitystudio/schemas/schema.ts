// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blog from './blog'
import author from './author'
import project from './project'
import resource from './resource'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    project,
    blog,
    author,
    resource,
  ]),
})
