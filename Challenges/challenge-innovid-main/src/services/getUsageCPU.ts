export const getUsageCPU = (id: number) => {

    //Simula llamado a API
    const server = new Promise((resolve) => {
        resolve({
            id: id, 
            load: Math.floor(Math.random() * 100)
        })
    })

    return server;
}