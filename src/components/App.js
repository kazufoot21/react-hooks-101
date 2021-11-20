import React, {useReducer, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {events} from '../reducer';
import Event from './Event';

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
    // console.log({state});

    const deleteAllEvents = (e) => {
        e.preventDefault();
        const result = window.confirm('Do you want to delete al event ?');
        if (result)
            dispatch({
                type: 'DELETE_ALL_EVENT',
            });
    };

    const inCreatable = title === '' || body === '';

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

                <button
                    className="btn btn-primary"
                    onClick={addEvent}
                    disabled={inCreatable}
                >
                    Create Event
                </button>
                <button
                    className="btn btn-danger"
                    onClick={deleteAllEvents}
                    disabled={state.length === 0}
                >
                    Delete All Events
                </button>
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
                <tbody>
                    {state.map((event, index) => (
                        <Event key={index} event={event} dispatch={dispatch} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
