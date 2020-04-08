import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Table from '../Table/Table';

const data = [{
    "id": 1,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@census.gov",
    "gender": "Female",
    "dob": "10/04/1992"
}, {
    "id": 2,
    "first_name": "Giavani",
    "last_name": "Frediani",
    "email": "gfrediani1@senate.gov",
    "gender": "Male",
    "dob": "22/08/1993"
}, {
    "id": 3,
    "first_name": "Noell",
    "last_name": "Bea",
    "email": "nbea2@imageshack.us",
    "gender": "Female",
    "dob": "07/12/1987"
}, {
    "id": 4,
    "first_name": "Willard",
    "last_name": "Valek",
    "email": "wvalek3@vk.com",
    "gender": "Male",
    "dob": "13/05/1980"
}];

const columns = [{ id: "id", name: "Id", isSortable: true, isSearchable: true, searchType: "numeric" },
{ id: "first_name", name: "First Name", isSortable: true, isSearchable: true, searchType: "text" },
{ id: "last_name", name: "Last Name", isSortable: true, isSearchable: true, searchType: "text" },
{ id: "email", name: "Email Id", isSortable: true, isSearchable: true, searchType: "text" },
{ id: "gender", name: "Gender", isSortable: true, isSearchable: false },
{ id: "dob", name: "DOB", isSortable: true, isSearchable: true, searchType: "date" },
]

export default function Dashboard() {
    return (
        <React.Fragment>
            <Header></Header>
            <Table data={data} columns={columns} isExpandable={true}></Table>
            <Footer></Footer>
        </React.Fragment >
    );
}

