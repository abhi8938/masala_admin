import React, {Component, FunctionComponent, useEffect} from 'react';
import {useTable, usePagination} from 'react-table';
import PropTypes from 'prop-types';
import {Col, Row} from "react-bootstrap";
import Card from "../Card/Card";
import FormInputs from "../FormInputs/FormInputs";


const CustomTable = ({selected, handleToggle, filters, searchvalue, handleSearch, list}) => {

    const columns = React.useMemo(
        () => [
            {
                Header: 'User Details',
                columns: [
                    {
                        Header: 'Index',
                        accessor: 'index',
                    },
                    {
                        Header: 'Full Name',
                        accessor: 'fullName',
                    },
                    {
                        Header: 'Contact',
                        accessor: 'contactNumber',
                    },
                    {
                        Header: 'Email',
                        accessor: 'email',
                    },
                    {
                        Header: 'Role',
                        accessor: 'role',
                    },

                    {
                        Header: 'Address',
                        accessor: 'location',
                    },
                    {
                        Header: 'Pin Code',
                        accessor: 'pinCode'
                    },
                    {
                        Header: 'Status',
                        accessor: 'status',
                    },
                    {
                        Header: 'On Duty',
                        accessor: 'onDuty',
                    },

                ]
            }
        ],
        []
    )


    const data = React.useMemo(
        () => {
            // let x = list;
            // let y = [];
            // list.map(value => {
            //     y.push(value.data);
            // })

            return list
        },
        [list]
    )
    useEffect(() => {
    }, [list]);

    return (
        <Row>
            <Card
                title="Filter Users"
                content={
                    <Row md={12}>
                        {filters.map((value, index) => <Col sm={2} className='toggle_Item'>
                            <p>{value}</p>
                            <span
                                className={selected === value ? 'toggle_custom toggle_custom_active' : 'toggle_custom '}
                                data-color="black"
                                onClick={() => {
                                    handleToggle(value);
                                }}
                            />
                        </Col>)}
                        <Col sm={3} className="Search_container">
                            <FormInputs
                                ncols={["col-md-10"]}
                                properties={[
                                    {
                                        type: "search",
                                        bsClass: "form-control",
                                        placeholder: "Search User",
                                        value: searchvalue,
                                        onChange: e => handleSearch(e)
                                    }
                                ]}/>
                        </Col>
                    </Row>}/>

        </Row>
    );

}

CustomTable.propTypes = {
    selected: PropTypes.string,
    handleToggle: PropTypes.func,
    filters: PropTypes.arrayOf(PropTypes.string),
    searchvalue: PropTypes.string,
    handleSearch: PropTypes.func,
    list: PropTypes.array
};

export default CustomTable;

// const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     state: { pageIndex, pageSize },
// } = useTable( {
//         columns,
//         data,
//         initialState: { pageIndex: 2 },
//     },
//     usePagination);


// <table responsive="md"  {...getTableProps()} style={{ width: '100%', borderRadius:10}} bordered className='table_parent'>
//     <thead >
//     {headerGroups.map(headerGroup => (
//         <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map(column => (
//                 <th
//                     {...column.getHeaderProps()}
//                     style={{
//                         borderBottom: 'solid 1px grey',
//                         color: '#ccc',
//                         fontWeight: 'bold',
//                         padding: 10,
//                     }}
//                 >
//                     {column.render('Header')}
//                 </th>
//             ))}
//         </tr>
//     ))}
//     </thead>
//     <tbody {...getTableBodyProps()} >
//     {page.map(row => {
//         prepareRow(row)
//         return (
//             <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => {
//                     return (
//                         <td
//                             {...cell.getCellProps()}
//                             style={{
//                                 height:10,
//                                 padding: '10px',
//                                 border: 'solid 1px gray',
//                                 background: '#ccc',
//                                 color: '#000'
//                             }}
//                         >
//                             {cell.render('Cell')}
//                         </td>
//                     )
//                 })}
//             </tr>
//         )
//     })}
//     </tbody>
// </table>

// <div className="pagination">
//     <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//         {'<<'}
//     </button>{' '}
//     <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//         {'<'}
//     </button>{' '}
//     <button onClick={() => nextPage()} disabled={!canNextPage}>
//         {'>'}
//     </button>{' '}
//     <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//         {'>>'}
//     </button>{' '}
//     <span>
//           Page{' '}
//         <strong>
//             {pageIndex + 1} of {Math.round(list.length / pageSize)}
//           </strong>{' '}
//         </span>
//     <select
//         value={pageSize}
//         onChange={e => {
//             setPageSize(Number(e.target.value))
//         }}
//     >
//         {[10, 20, 30, 40, 50].map(pageSize => (
//             <option key={pageSize} value={pageSize}>
//                 Show {pageSize}
//             </option>
//         ))}
{/*    </select>*/}
{/*</div>*/}