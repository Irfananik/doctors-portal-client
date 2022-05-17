import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)

    useEffect(() => {
        //console.log('user here:', user)
        const email = user?.email
        if (email) {
            fetch(`https://aqueous-dawn-81823.herokuapp.com/user/${email}`, {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(response => response.json())
                .then(data => {
                    setAdmin(data.admin)
                    setAdminLoading(false)
                })
        }
    }, [user])

    return [admin, adminLoading]
}

export default useAdmin