import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetSection = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetSection), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const section = await db.section.findFirst({
    where: {
      id,
      include: { question: true },
    },
  })
  if (!section) throw new NotFoundError()
  return section
})
