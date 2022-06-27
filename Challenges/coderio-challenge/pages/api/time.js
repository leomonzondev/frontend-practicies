export default async function getTime(req,res) {
    const zoneData = await  req.body
    const getData = await fetch(`http://worldtimeapi.org/api/timezone/${zoneData}`)
    const response = await getData.json()
    res.status(200).json(response)
    console.log(zoneData)
}