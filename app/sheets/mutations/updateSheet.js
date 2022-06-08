import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateSheet = z.object({
  boatId: z.number(),
  skipperName: z.string().optional(),
  boatType: z.enum(["PROTO", "SERIE"]).optional(),
  form: z.string(),
  completed: z.boolean(),
})

export default resolver.pipe(
  resolver.zod(UpdateSheet),
  resolver.authorize(),
  async ({ boatId, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const sheet = await db.sheet.update({
      where: {
        boatId,
      },
      data,
    })
    return sheet
  }
)
