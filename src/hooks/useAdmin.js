import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        //console.log('user here:', user)
        const email = user?.email
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(response => response.json())
                .then(data => {
                    setAdmin(data.admin)
                })
        }
    }, [user])

    return [admin]
}

export default useAdmin