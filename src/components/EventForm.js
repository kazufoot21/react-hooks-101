import React, {useState} from 'react';
import {CREATE_EVENT, DELETE_ALL_EVENT} from '../actions';
const EventForm = ({state, dispatch}) => {
    // const [state, dispatch] = useReducer(reducer, []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const addEvent = (e) => {
        e.preventDefault();
        dispatch({
            type: CREATE_EVENT,
            title,
            body,
        });
        setTitle('');
        setBody('');
    };

    const deleteAllEvents = (e) => {
        e.preventDefault();
        const result = window.confirm('Do you want to delete al event ?');
        if (result)
            dispatch({
                type: DELETE_ALL_EVENT,
            });
    };

    const inCreatable = title === '' || body === '';

    return (
        <>
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
        </>
    );
};

export default EventForm;
