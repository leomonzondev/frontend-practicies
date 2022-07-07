// export default async function getTime(req,res) {
//     const zoneData = await  req.body
//     const getData = await fetch(`http://worldtimeapi.org/api/timezone/${zoneData}`)
//     const response = await getData.json()
//     res.status(200).json(response)
// }


export default function getTime(req,res) {
    const zoneData = req.body
     fetch(`http://worldtimeapi.org/api/timezone/${zoneData}`)
    .then(res => res.json())
    .then(data => res.status(200).json(data))

}

// export default async function getTime(req,res) {
    
//     const zoneData = await  req.body
//     const getData = await fetch(`http://worldtimeapi.org/api/timezone/${zoneData}`)
//     const response = await getData.json()
//     res.status(200).json(response)
// }
