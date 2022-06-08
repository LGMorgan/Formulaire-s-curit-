import { useEffect, useMemo } from "react"
import { useTable, useGlobalFilter, useSortBy } from "react-table"
import { GlobalFilter, DefaultColumnFilter, fuzzyTextFilterFn } from "./utils"

import styles from "app/style/table.module.css"

export const Table = ({
  tableColumns,
  tableData,
  onRowClickFn,
  externalSearch = "",
  hideInternalSearch = false,
  sectionTitle,
}) => {
  useEffect(() => {
    setGlobalFilter(externalSearch)
  }, [externalSearch])

  console.log({
    tableColumns,
    tableData,
    onRowClickFn,
    externalSearch,
    hideInternalSearch,
  })
  const data = useMemo(() => tableData, [tableData])

  const columns = useMemo(() => tableColumns, [])

  const filterTypes = useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useGlobalFilter,
    useSortBy
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,

    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = tableInstance

  if (rows.length === 0 && hideInternalSearch) return <></>
  return (
    // apply the table props

    <>
      <p className={styles.sectionTitle}>{sectionTitle}</p>
      <table className={styles.table} {...getTableProps()} cellSpacing="0">
        <thead>
          <tr>
            <th
              className={hideInternalSearch === false ? styles.dashboardSearchDiv : ""}
              colSpan={visibleColumns.length}
              style={{
                textAlign: "left",
              }}
            >
              {!hideInternalSearch && (
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={state.globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
              )}
            </th>
          </tr>
          {!hideInternalSearch && (
            <tr>
              <th
                colSpan={visibleColumns.length}
                style={{
                  textAlign: "left",
                  height: 40,
                }}
              ></th>
            </tr>
          )}

          {
            // Loop over the header rows

            headerGroups.map((headerGroup, index) => (
              // Apply the header row props

              <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row

                  headerGroup.headers.map((column, index) => {
                    return (
                      // Apply the header cell props

                      <th
                        key={index}
                        className={styles.th}
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                      >
                        {
                          // Render the header

                          column.render("Header")
                        }
                      </th>
                    )
                  })
                }
              </tr>
            ))
          }
        </thead>

        {/* Apply the table body props */}

        <tbody className={styles.tBody} {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row, index) => {
              // Prepare the row for display

              prepareRow(row)

              return (
                // Apply the row props

                <tr
                  key={index}
                  className={!!hideInternalSearch ? styles.tr : styles.trMain}
                  {...row.getRowProps()}
                  onClick={() => {
                    onRowClickFn && onRowClickFn(row.original.boatId)
                  }}
                >
                  {
                    // Loop over the rows cells

                    row.cells.map((cell, index) => {
                      // Apply the cell props

                      return (
                        <td key={index} className={styles.td} {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}
