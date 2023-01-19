import React, {useState} from "react";

function NewTodoForm(props){

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        console.log("Add New Btn clicked!");
        if(description !== '' && assigned !== ''){
            console.log(assigned, " - ", description);
            props.addTodo(description, assigned);
            setAssigned('');
            setDescription('');
        }
    }

    // const descChange = (event) => {
    //     console.log(event.target.value);
    //     setDescription(event.target.value);
    // }

    // const assignedChange = (event) => {
    //     console.log('assigned: ', event.target.value);
    //     setAssigned(event.target.value);
    // }

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input value={assigned} onChange={e => setAssigned(e.target.value)} type="text" className="form-control" required></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} className="form-control" required></textarea>
                </div>
                <button onClick={submitTodo} type="button" className="btn btn-primary mt-3">Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm;