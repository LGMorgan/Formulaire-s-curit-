import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
const DeleteSheet = z.object({
  id: z.number(),
})
export default resolver.pipe(resolver.zod(DeleteSheet), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const sheet = await db.sheet.deleteMany({
    where: {
      id,
    },
  })
  return sheet
})
