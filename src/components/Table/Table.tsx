import React, { useState } from 'react'
import './Table.scss';
import SearchDecorator, { ISearchItem } from './SearchDecorator';
import { string } from 'prop-types';

interface IColumnProperties {
    id: string,
    name: string,
    isSortable: boolean,
    isSearchable: boolean,
    searchType?: string
}

interface ITableData {
    data: any[],
    columns: IColumnProperties[],
    isExpandable: boolean,
}

export default function Table(props: ITableData) {

    // sorting
    enum SortState {
        asc,
        desc,
        noSort
    }

    const defaultSortColumn = {
        "column": "",
        "state": SortState.noSort
    };

    interface ISortColumn {
        column: string,
        state: SortState,
    }
    const [sortcolumn, setSortColumn] = useState<ISortColumn>(defaultSortColumn);
    const data = props.data.slice();

    function sortData(field: string) {
        if (field === defaultSortColumn.column || SortState.noSort === sortcolumn.state) {
            return props.data;
        } else {
            let sortResult = sortcolumn.state === SortState.asc ? 1 : -1;
            return data.sort((a, b) => {
                if (a[field] > b[field]) {
                    return sortResult;
                }
                if (a[field] < b[field]) {
                    return -(sortResult);
                }
                return 0
            }
            );
        }
    }

    function setSortColumnState(columnName: string, isSortable: boolean) {
        if (isSortable) {
            if (columnName === sortcolumn.column) {
                switch (sortcolumn.state) {
                    case SortState.asc: {
                        setSortColumn({ "column": columnName, "state": SortState.desc })
                        break;
                    }
                    case SortState.desc: {
                        setSortColumn({ "column": columnName, "state": SortState.noSort })
                        break;
                    }
                    case SortState.noSort: {
                        setSortColumn({ "column": columnName, "state": SortState.asc })
                        break;
                    }
                }
            } else {
                setSortColumn({ "column": columnName, "state": SortState.asc })
            }
        }
    }

    function getColumnTitle(column: IColumnProperties) {
        if (column.id === sortcolumn.column) {
            switch (sortcolumn.state) {
                case SortState.asc: {
                    return <span>{column.name} <i className="material-icons">keyboard_arrow_down</i></span>
                    break;
                }
                case SortState.desc: {
                    return <span>{column.name} <i className="material-icons">keyboard_arrow_up</i> </span>
                    break;
                }
                case SortState.noSort: {
                    return <span>{column.name}</span>
                    break;
                }
            }
        }
        return <span>{column.name}</span>;
    }

    function createHeader(column: IColumnProperties) {
        return (
            <th key={column.id}>
                <span onClick={(e) => {
                    setSortColumnState(column.id, column.isSortable);
                }}>{getColumnTitle(column)}
                </span>
                {column.isSearchable && <SearchDecorator searchItem={searchItem} columnId={column.id} searchType={column.searchType} searchString={searchString} showSearch={showSearch} doSearch={doSearch} closeSearch={closeSearch}></SearchDecorator>}
            </th >
        );
    }

    // search
    const [searchItem, setSearchItem] = useState<ISearchItem>({ isSearching: false, columnId: "" });
    const [searchString, setSearchString] = useState<string>("");

    function showSearch(columnId: string, searchType?: string) {
        setSearchString("");
        setSearchItem({ isSearching: true, columnId: columnId });
    }
    function closeSearch() {
        setSearchItem({ isSearching: false, columnId: "" });
        setSearchString("");
    }
    function doSearch(searchStringParam: string) {
        setSearchString(searchStringParam);
    }

    // expansion
    const defaultExpansion: number[] = [];
    const [rowexpansionIndexs, setExpansionIndex] = useState<number[]>(defaultExpansion);

    function getExpansionState(index: number) {
        if (rowexpansionIndexs.includes(index)) {
            return (<span onClick={(e) => { setExpansionIndex(rowexpansionIndexs.filter(item => item !== index)) }}> - </span>);
        } else {
            return (<span onClick={() => { setExpansionIndex(rowexpansionIndexs.concat(index)) }}> + </span>);
        }
    }

    function rowExpander(data: any, index: number) {
        if (props.isExpandable && rowexpansionIndexs.includes(index)) {
            return <tr><td colSpan={props.columns.length + 1} >{data}</td></tr>;
        } else
            return;
    }

    return (
        <div className="starshipTableContainer">
            <table className="starshipTable">
                <thead>
                    <tr>
                        {props.columns.map(column =>
                            createHeader(column))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {sortData(sortcolumn.column).map((data) =>
                        <React.Fragment>
                            <tr>
                                {props.columns.map(column =>
                                    <td>{data[column.id]}</td>)}
                                <td>
                                    {getExpansionState(data.id)}
                                </td>
                            </tr>
                            {rowExpander(data.description, data.id)}
                        </React.Fragment>
                    )}
                </tbody>
            </table>
        </div>
    );
}
