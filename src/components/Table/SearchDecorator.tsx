import React from "react"

export interface ISearchItem {
    isSearching: boolean,
    columnId: string
}

export interface ISearchProps {
    searchItem: ISearchItem,
    columnId: string,
    searchType?: string,
    searchString: string,
    showSearch: (columnId: string, searchType?: string) => void,
    doSearch: (searchString: string) => any,
    closeSearch: () => any
}

export default class SearchDecorator extends React.Component<ISearchProps> {

    constructor(props: ISearchProps) {
        super(props);
        this.getTextBox = this.getTextBox.bind(this);
    }

    getTextBox() {
        if (this.props.columnId === this.props.searchItem.columnId) {
            return <div>{this.props.searchItem.isSearching && <div><input onChange={(e) => { this.props.doSearch(e.target.value) }} type="text" value={this.props.searchString}></input>
                <span onClick={(e) => { this.props.closeSearch() }} > x</span></div>}</div>
        }
    }

    public render() {
        return (
            <React.Fragment>
                <span onClick={(e) => { this.props.showSearch(this.props.columnId, this.props.searchType) }} className="material-icons">search</span>
                {this.getTextBox()}
            </React.Fragment>)
    }
}