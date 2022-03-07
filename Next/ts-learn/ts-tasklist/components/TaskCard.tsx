import { Tarea } from '../interfaces/Task';

interface Props {
    tarea: Tarea;
}

export const TaskCard = ({ tarea }: Props) => {
return (
    <div>
        <h2>{tarea.title}</h2>
    </div>
)
}
