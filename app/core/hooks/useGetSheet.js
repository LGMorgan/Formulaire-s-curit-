import { useQuery } from "blitz"
import getSheet from "app/sheets/queries/getSheet"

export const useGetSheet = (boatId) => {
  const [sheet] = useQuery(getSheet, { boatId: parseInt(boatId) }, { cacheTime: 50 })
  return sheet
}
