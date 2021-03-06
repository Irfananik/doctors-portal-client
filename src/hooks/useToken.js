import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')

    useEffect(()=> {
        //console.log('user here:', user)
        const email = user?.user?.email
        const currentUser = {emial: email}
        if(email){
            fetch(`https://aqueous-dawn-81823.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Data inside token' ,data)
                const accessToken = data.token
                localStorage.setItem('accessToken', accessToken)
                setToken(accessToken)
            })
        }
    },[user])

    return [token]
}

export default useToken