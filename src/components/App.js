import React, {useReducer, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {events} from '../reducer';

const App = () => {
    const [state, dispatch] = useReducer(events, []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const addEvent = (e) => {
        e.preventDefault();
        // console.log({title, body});
        dispatch({
            type: 'CREATE_EVENT',
            title,
            body,
        });
        setTitle('');
        setBody('');
    };
    console.log({state});

    return (
        <div className="container-fluid">
            <h4>Event Create Form</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">Title</label>
                    <input
                        className="form-control"
                        id="formEventTitle"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="formEventBody">Body</label>
                    <textarea
                        className="form-control"
                        id="formEventBody"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>

                <button className="btn btn-primary" onClick={addEvent}>
                    Create Event
                </button>
                <button className="btn btn-danger">Delete All Events</button>
            </form>

            <h4>All Events</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>BODY</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
};

export default App;
