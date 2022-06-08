import { useState } from "react"
import { useTable, useGlobalFilter, useAsyncDebounce } from "react-table"
import matchSorter from "match-sorter"

import styles from "app/style/table.module.css"

export function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  searchValue = "",
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <div className={styles.searchDiv}>
      <input
        className={styles.searchInput}
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={`Rechercher dans ${count} fiches`}
      />
    </div>
  )
}

export function DefaultColumnFilter({ column: { filterValue, preFilteredRows, setFilter } }) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Rechercher`}
    />
  )
}

export function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] })
}

fuzzyTextFilterFn.autoRemove = (val) => !val
