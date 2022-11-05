const postFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

const resourceFields = `
  _id,
  title,
  description,
  file,
`

const projectFields = `
  _id,
  name,
  title,
  description,
  "slug": slug.current,
  github,
  link,
  mainImage,
  tags,
  date,
  `

  export const projectQuery =  `*[_type == "project"] | order(publishedAt desc) {
    title,
    description,
    
  }`

  const DownloadFileQuery = `*[_type == "resources"] | order(publishedAt desc) {
    ${resourceFields}
  }`

export const indexQuery = `*[_type == "project"] | order(publishedAt desc) {
    ${projectFields} 
  }`

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`
