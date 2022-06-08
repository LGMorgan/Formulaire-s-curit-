exports.id = 6673;
exports.ids = [6673];
exports.modules = {

/***/ 6673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ Table)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-table"
var external_react_table_ = __webpack_require__(906);
// EXTERNAL MODULE: external "match-sorter"
var external_match_sorter_ = __webpack_require__(3603);
var external_match_sorter_default = /*#__PURE__*/__webpack_require__.n(external_match_sorter_);
// EXTERNAL MODULE: ./app/style/table.module.css
var table_module = __webpack_require__(3652);
var table_module_default = /*#__PURE__*/__webpack_require__.n(table_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./app/core/components/Table/utils.jsx





function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  searchValue = ""
}) {
  const count = preGlobalFilteredRows.length;
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)(globalFilter);
  const onChange = (0,external_react_table_.useAsyncDebounce)(value => {
    setGlobalFilter(value || undefined);
  }, 200);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (table_module_default()).searchDiv,
    children: /*#__PURE__*/jsx_runtime_.jsx("input", {
      className: (table_module_default()).searchInput,
      value: value || "",
      onChange: e => {
        setValue(e.target.value);
        onChange(e.target.value);
      },
      placeholder: `Rechercher dans ${count} fiches`
    })
  });
}
function DefaultColumnFilter({
  column: {
    filterValue,
    preFilteredRows,
    setFilter
  }
}) {
  const count = preFilteredRows.length;
  return /*#__PURE__*/jsx_runtime_.jsx("input", {
    value: filterValue || "",
    onChange: e => {
      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
    },
    placeholder: `Rechercher`
  });
}
function fuzzyTextFilterFn(rows, id, filterValue) {
  return external_match_sorter_default()(rows, filterValue, {
    keys: [row => row.values[id]]
  });
}

fuzzyTextFilterFn.autoRemove = val => !val;
;// CONCATENATED MODULE: ./app/core/components/Table/index.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Table = ({
  tableColumns,
  tableData,
  onRowClickFn,
  externalSearch = "",
  hideInternalSearch = false,
  sectionTitle
}) => {
  (0,external_react_.useEffect)(() => {
    setGlobalFilter(externalSearch);
  }, [externalSearch]);
  console.log({
    tableColumns,
    tableData,
    onRowClickFn,
    externalSearch,
    hideInternalSearch
  });
  const data = (0,external_react_.useMemo)(() => tableData, [tableData]);
  const columns = (0,external_react_.useMemo)(() => tableColumns, []);
  const filterTypes = (0,external_react_.useMemo)(() => ({
    // Add a new fuzzyTextFilterFn filter type.
    fuzzyText: fuzzyTextFilterFn,
    // Or, override the default text filter to use
    // "startWith"
    text: (rows, id, filterValue) => {
      return rows.filter(row => {
        const rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true;
      });
    }
  }), []);
  const defaultColumn = (0,external_react_.useMemo)(() => ({
    // Let's set up our default Filter UI
    Filter: DefaultColumnFilter
  }), []);
  const tableInstance = (0,external_react_table_.useTable)({
    columns,
    data,
    defaultColumn,
    // Be sure to pass the defaultColumn option
    filterTypes
  }, external_react_table_.useGlobalFilter, external_react_table_.useSortBy);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter
  } = tableInstance;
  if (rows.length === 0 && hideInternalSearch) return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
  return (
    /*#__PURE__*/
    // apply the table props
    (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (table_module_default()).sectionTitle,
        children: sectionTitle
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", _objectSpread(_objectSpread({
        className: (table_module_default()).table
      }, getTableProps()), {}, {
        cellSpacing: "0",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("thead", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("tr", {
            children: /*#__PURE__*/jsx_runtime_.jsx("th", {
              className: hideInternalSearch === false ? (table_module_default()).dashboardSearchDiv : "",
              colSpan: visibleColumns.length,
              style: {
                textAlign: "left"
              },
              children: !hideInternalSearch && /*#__PURE__*/jsx_runtime_.jsx(GlobalFilter, {
                preGlobalFilteredRows: preGlobalFilteredRows,
                globalFilter: state.globalFilter,
                setGlobalFilter: setGlobalFilter
              })
            })
          }), !hideInternalSearch && /*#__PURE__*/jsx_runtime_.jsx("tr", {
            children: /*#__PURE__*/jsx_runtime_.jsx("th", {
              colSpan: visibleColumns.length,
              style: {
                textAlign: "left",
                height: 40
              }
            })
          }), // Loop over the header rows
          headerGroups.map((headerGroup, index) =>
          /*#__PURE__*/
          // Apply the header row props
          jsx_runtime_.jsx("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
            children: // Loop over the headers in each row
            headerGroup.headers.map((column, index) => {
              return (
                /*#__PURE__*/
                // Apply the header cell props
                jsx_runtime_.jsx("th", _objectSpread(_objectSpread({
                  className: (table_module_default()).th
                }, column.getHeaderProps(column.getSortByToggleProps())), {}, {
                  children: // Render the header
                  column.render("Header")
                }), index)
              );
            })
          }), index))]
        }), /*#__PURE__*/jsx_runtime_.jsx("tbody", _objectSpread(_objectSpread({
          className: (table_module_default()).tBody
        }, getTableBodyProps()), {}, {
          children: // Loop over the table rows
          rows.map((row, index) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              /*#__PURE__*/
              // Apply the row props
              jsx_runtime_.jsx("tr", _objectSpread(_objectSpread({
                className: !!hideInternalSearch ? (table_module_default()).tr : (table_module_default()).trMain
              }, row.getRowProps()), {}, {
                onClick: () => {
                  onRowClickFn && onRowClickFn(row.original.boatId);
                },
                children: // Loop over the rows cells
                row.cells.map((cell, index) => {
                  // Apply the cell props
                  return /*#__PURE__*/jsx_runtime_.jsx("td", _objectSpread(_objectSpread({
                    className: (table_module_default()).td
                  }, cell.getCellProps()), {}, {
                    children: // Render the cell contents
                    cell.render("Cell")
                  }), index);
                })
              }), index)
            );
          })
        }))]
      }))]
    })
  );
};

/***/ }),

/***/ 3652:
/***/ ((module) => {

// Exports
module.exports = {
	"table": "table_table__1VsWa",
	"tHead": "table_tHead__3EnNf",
	"tr": "table_tr__2LyUn",
	"trMain": "table_trMain__3VlzN",
	"td": "table_td__3YyRk",
	"tBody": "table_tBody__1aa-I",
	"searchDiv": "table_searchDiv__1Ve5F",
	"dashboardSearchDiv": "table_dashboardSearchDiv__8vBNv",
	"searchInput": "table_searchInput__3y6BB",
	"sectionTitle": "table_sectionTitle__eSXNM"
};


/***/ })

};
;