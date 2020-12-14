
import React from 'react';
import { Pagination } from 'react-bootstrap';
import { NkDropdown } from '../form/elements';

function paginationPattern(selectedPage: number, totalPages: number, padding: number) {
    const items = [];
    if (totalPages <= (1 + padding + 1 + padding + 1)) {
        for (let i = 1; i <= totalPages; i++) {
            items.push(i);
        }
        return items;
    }
    const leadingEllipsis = selectedPage > padding + 2;
    const trailingEllipsis = selectedPage < totalPages - (padding + 2);

    items.push(1);

    if (leadingEllipsis)
        items.push(-1);

    for (let i = Math.max(selectedPage - 2, 2); i <= selectedPage + 2; i++) {
        if (i > totalPages)
            return items;
        items.push(i);
        if (i === totalPages)
            return items;
    }

    if (trailingEllipsis)
        items.push(-1);

    items.push(totalPages);

    return items;
}

function arrayRange(lowEnd: number = 1, highEnd: number = 10) {
    var list = [];
    for (var i = lowEnd; i <= highEnd; i++) {
        list.push(i);
    }
    return list;
}

export default function MyPagination({ totalPageCount, selectedPage, pageSelected }: {
    totalPageCount: number,
    selectedPage: number,
    pageSelected(pageNumber: number): any
}) {

    if (totalPageCount === 0)
        return <span />;

    const items = paginationPattern(selectedPage, totalPageCount, 1);
    const ele = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i] === -1) {
            ele[i] = <Pagination.Ellipsis disabled />
        } else {
            ele[i] = (
                <Pagination.Item key={items[i]} active={items[i] === selectedPage} data-page-value={items[i]} onClick={() => {
                    console.log('MyPagination', 'itemClicked', items[i]);
                    pageSelected(items[i]);
                }}>
                    {items[i]}
                </Pagination.Item>
            );
        }
    }

    return (

        <table>
            <tr>
                <td>
                    <Pagination style={{ display: "inline-flex" }}>
                        <Pagination.First data-page-value={1} onClick={() => {
                            console.log('MyPagination', 'itemClicked', 1);
                            pageSelected(1);
                        }} />
                        <Pagination.Prev data-page-value={(selectedPage - 1)} disabled={selectedPage === 1} onClick={() => {
                            console.log('MyPagination', 'itemClicked', selectedPage - 1);
                            pageSelected(selectedPage - 1);
                        }} />
                        {ele}
                        <Pagination.Next data-page-value={(selectedPage + 1)} disabled={selectedPage === totalPageCount} onClick={() => {
                            console.log('MyPagination', 'itemClicked', selectedPage + 1);
                            pageSelected(selectedPage + 1);
                        }} />
                        <Pagination.Last data-page-value={totalPageCount} onClick={() => {
                            console.log('MyPagination', 'itemClicked', totalPageCount);
                            pageSelected(totalPageCount);
                        }} style={{ marginRight: 5 }} />
                    </Pagination>
                </td>
                <td style={{ paddingLeft: 10 }}>

                    <NkDropdown id='select' type='select' defaultValue={`${selectedPage}`} valueList={
                        arrayRange(1, totalPageCount).map((n: number) => { return { label: `Page ${n}`, value: `${n}` } })
                    } valueChanged={(id, value) => {
                        pageSelected(value);
                    }} />
                </td>
            </tr>
        </table>
    )
}