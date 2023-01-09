import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function UserDeets() {
    const [filter, setFilter] = useState("all");
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("")
    const data = JSON.parse(localStorage.getItem("users"));
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };
    const itemsPerPage = 10;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    let filteredData = data;
    if (filter !== "all") {
        filteredData = data.filter((user) => user.gender === filter);
    }
    if (search) {
        filteredData = filteredData.filter(
            (user) =>
                (user.name.first + " " + user.name.last)
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase())
        );
    }
    const pageData = filteredData.slice(startIndex, endIndex);

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>User Deets</h1>
                <input type='text'
                    value={search}
                    onChange={handleSearchChange}
                    placeholder='Search Someone?' />
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <table style={{ textAlign: "center" }}>
                    <thead>
                        <tr style={{ backgroundColor: "gainsboro" }}>
                            <th>Name</th>
                            <th><select value={filter} onChange={handleFilterChange}>
                                <option value="all">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            </th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <br />
                    <tbody>
                        {pageData.map((user) => (
                            <tr key={user.email}>
                                <td>{user.name.first} {user.name.last}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.location.state}</td>
                                <td>{user.location.city}</td>
                                <td><img style={{ borderRadius: "20px" }} src={user.picture.medium} alt="userPhotograph" /></td>
                            </tr>
                        ))}
                    </tbody>
                    <div  style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center" }} className="pagechange">
                            <button
                                onClick={() => handlePageChange(page - 1)}
                                disabled={page === 1}>
                                <NavigateBeforeIcon />
                            </button>
                            — Page {page} —
                            <button
                                onClick={() => handlePageChange(page + 1)}
                                disabled={page === totalPages}>
                                <NavigateNextIcon />
                            </button>
                        </div>
                    </div>
                </table >
            </div>
            <Link style={{ display: "flex", justifyContent: "center" }} to="/">
                <button>Back</button>
            </Link>
            <br />
        </>
    );
}
export default UserDeets