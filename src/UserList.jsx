import {useEffect, useState} from 'react'

export function UserList() {
    const [isLoading, setIsLoading] = useState(true)
    const [usersData, setUsersData] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(setUsersData).finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            <h1>User List</h1>
            <ul>
                {isLoading ? <h1> Loading... </h1> : usersData.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
        
    )
}