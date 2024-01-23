import React from 'react';
import Button from 'react-bootstrap/Button';

const KanbanCard = ({task, statuses, deleteTask}) => {
    const handleTaskDelete = () => {
        deleteTask(task._id);
    }

    return (
        <div className="card"
             style={{
                 // border: "solid",
             }}>
            <div className="card-body"
                 style={{
                     // border: "brown solid",
                     // background: "lightgray",
                     // marginBottom: "10px",
                     height: "300px",
                     width: "273px",
                 }}>
                <div className="d-flex justify-content-start"
                     style={{
                         border: "dashed blue",
                         width: "243px",
                         marginBottom: "5px",

                     }}>
                    <h5 className="card-title"
                        style={{
                            border: "solid red",

                        }}>{task.name}</h5>
                    <Button variant="outline-secondary">
                        Edit
                    </Button>

                </div>
                <p className="card-text"
                   style={{
                       border: "solid green",

                   }}>{task.description}</p>
                <div className="d-flex justify-content-start"
                     style={{
                         border: "dashed green",
                         marginBottom: "5px",
                     }}
                >
                    <p className="card-text"
                       style={{
                           border: "solid blue",

                       }}>priority: {task.priority}
                    </p>
                    <Button variant="outline-secondary">
                        ↓
                    </Button>
                    <Button variant="outline-secondary">
                        ↑
                    </Button>
                </div>
                <div className="d-flex justify-content-start"
                     style={{
                         border: "dashed red",

                     }}
                >
                    <Button
                        disabled={task.status === statuses[0].status}
                        variant="outline-secondary">
                        ←
                    </Button>
                    <Button variant="outline-secondary"
                            onClick={() => handleTaskDelete()}
                    >
                        Delete
                    </Button>
                    <Button
                        disabled={task.status === statuses[statuses.length - 1].status}
                        variant="outline-secondary">
                        →
                    </Button>
                </div>
                {/*<p className="card-text"*/}
                {/*   style={{*/}
                {/*       border: "solid red",*/}

                {/*   }}>priority: {task.status}</p>*/}
            </div>
        </div>
    );
};

export default KanbanCard;
