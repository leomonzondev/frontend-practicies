export const call = () => {
    fetch('https://course-api.com/react-tours-project')
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(console.log)
}