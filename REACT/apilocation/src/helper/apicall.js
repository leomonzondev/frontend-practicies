export const apicall = async () => {

    const url = "https://ip.seeip.org/geoip"

    const res = await fetch(url)
    const data = await res.json()
        
    return data 
}
