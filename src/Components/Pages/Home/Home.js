import React, { useState } from 'react'
import { Link } from "react-router-dom"


function Home() {
    const [users, setUsers] = useState([]);
    const fetchUsers = () => {
        fetch("https://randomuser.me/api/?results=100")
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("users", JSON.stringify(data.results));
                setUsers(data.results);
                alert("Data fetched successfully!");
            });
    };
    const deleteUsers = () => {
        localStorage.clear();
        setUsers([]);
        alert("All users deleted successfully!");
    };
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h1>Home</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={fetchUsers}>Fetch Users</button>
                <button onClick={deleteUsers}>Delete Users</button>
                <Link to="/userdeets">
                    <button>User Details</button> 
                </Link>
            </div>
        </>
    );
}
export default Home















// const Home = () => {
//     const [userData, setUserData] = useState(null)

//     const SetUsersOnLS = async () => {
//         let dataArray = [];
//         for (let i = 0; i < 100; i++) {
//             const response = await fetch("https://randomuser.me/api");
//             const data = await response.json();
//             dataArray.push(data.results);
//         }
//         const flatDataArray = dataArray.flat();
//         localStorage.setItem("userDeets", JSON.stringify(flatDataArray));
//         setUserData(JSON.parse(localStorage.getItem("userDeets")));
//         alert("User deets are now fetched & stored in localStorage :)");
//     };

//     const DeleteUsersOnLS = () => {
//         localStorage.removeItem("userDeets");
//         alert("User deets are now deleted from localStorage :(");
//     }

//     const GetUserDetails = () => {

//     }

//     return (
//         <div>
//             <h1>This is Home</h1>
//             <button onClick={SetUsersOnLS}>Fetch Users</button>
//             <button onClick={DeleteUsersOnLS}>Delete Users</button>
//             <button onClick={GetUserDetails}>User Details</button>
//         </div>
//     )
// }

// export default Home
