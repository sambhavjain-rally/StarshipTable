import React from "react"

export interface ISearchItem {
    isSearching: boolean,
    searchString: string,
    columnId: string
}

export interface ISearchProps {
    searchItem: ISearchItem,
    columnId: string,
    searchType?: string,
    showSearch: (searchString: string, columnId: string, searchType?: string) => any,
    closeSearch: () => any
}

export default class SearchDecorator extends React.Component<ISearchProps> {

    constructor(props: ISearchProps) {
        super(props);
        this.getTextBox = this.getTextBox.bind(this);
        this.doSearch = this.doSearch.bind(this);
    }

    doSearch(searchString: string) {

    }
    getTextBox() {
        if (this.props.columnId === this.props.searchItem.columnId) {
            return <div>{this.props.searchItem.isSearching && <div><input onChange={(e) => { this.doSearch(e.currentTarget.value) }} type="text" value={this.props.searchItem.searchString}></input>
                <span onClick={(e) => { this.props.closeSearch() }} > x</span></div>}</div>
        }
    }

    public render() {
        return (
            <React.Fragment>
                <span onClick={(e) => { this.props.showSearch(this.props.searchItem.searchString, this.props.columnId, this.props.searchType) }} className="material-icons">search</span>
                {this.getTextBox()}
            </React.Fragment>)
    }
}