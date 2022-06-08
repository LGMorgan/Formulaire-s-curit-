import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"
const GetSheet = z.object({
  // This accepts type of undefined, but is required at runtime
  boatId: z.number().optional().refine(Boolean, "Required"),
})
export default resolver.pipe(resolver.zod(GetSheet), resolver.authorize(), async ({ boatId }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const sheet = await db.sheet.findFirst({
    where: {
      boatId,
    },
  })
  // if (!sheet) throw new NotFoundError()
  return sheet
})
