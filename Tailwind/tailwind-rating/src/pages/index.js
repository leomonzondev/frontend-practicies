import { useTasks } from "../context/TaskContext"


import Layout from "../components/Layout"

export default function Home() {


const {hello, tasks} = useTasks()



  return (
    <Layout>
      <h2>Hello {hello}</h2>
    </Layout>
  )
}
