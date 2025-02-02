/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */
import { createClient } from 'next-sanity'
import { sanityConfig } from './config'

export const sanityClient = createClient(sanityConfig)

export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  // Fallback to using the WRITE token until https://www.sanity.io/docs/vercel-integration starts shipping a READ token.
  // As this client only exists on the server and the token is never shared with the browser, we don't risk escalating permissions to untrustworthy users
  token:
    process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN,
})

export const getClient = (preview: any) => (preview ? previewClient : sanityClient)

export function overlayDrafts(docs: never[]) {
  const documents = docs || []
  const overlayed: any = documents.reduce((map: { has: (arg0: any) => any; set: (arg0: any, arg1: any) => any }, doc: { _id: string }) => {
    if (!doc._id) {
      throw new Error('Ensure that `_id` is included in query projection')
    }

    const isDraft = doc._id.startsWith('drafts.')
    const id = isDraft ? doc._id.slice(7) : doc._id
    return isDraft || !map.has(id) ? map.set(id, doc) : map
  }, new Map())

  return Array.from(overlayed.values())
}
