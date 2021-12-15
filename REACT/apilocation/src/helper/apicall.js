import React from 'react'

export const apicall = () => {

    const url = "http://api.ipstack.com/181.23.88.216?access_key=257bd2f09692362b133b8871afce1b93"

    useEffect(() => {
        const fetchita = async () => {
            const res = await fetch(url)
            const data = await res.json()
            
            setIp(data)
        }
        
    },[])

    const [ip, setIp] = useState('')

    console.log(ip.ip)

    return (
        <div>
            
        </div>
    )
}
