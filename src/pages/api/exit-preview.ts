import { NextApiResponse } from "next"
import { NextRequest } from "next/server"

export default async function exit(_: NextRequest, res: NextApiResponse) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData()

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: '/' })
  res.end()
}
