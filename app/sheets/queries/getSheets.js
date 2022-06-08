import { paginate, resolver } from "blitz"
import db from "db"

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 250, select }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: sheets,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () =>
        db.sheet.count({
          where,
        }),
      query: (paginateArgs) => db.sheet.findMany({ ...paginateArgs, where, orderBy, select }),
    })
    return {
      sheets,
      nextPage,
      hasMore,
      count,
    }
  }
)
