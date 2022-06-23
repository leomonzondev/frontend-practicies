export default function getTime(req,res) {
    fetch("http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires")
    .then(resp => resp.json())
    .then(data => res.json(data))
}