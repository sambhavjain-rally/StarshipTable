import React from 'react';
import './Table.scss';


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

    return (
        <React.Fragment>
            <table>
                <tr>
                    {props.columns.map((column) =>
                        <th key={column.id}>
                            {column.name}
                        </th>)}
                </tr>

                {props.data.map((data) =>
                    <tr>
                        {props.columns.map((column) =>
                            <td>
                                {data[column.id]}
                            </td>
                        )}
                    </tr>
                )}

            </table>
        </React.Fragment>
    );
}