import React, {useState, useContext} from 'react';
import {
    CREATE_EVENT,
    DELETE_ALL_EVENT,
    ADD_OPERATION_LOG,
    DELETE_ALL_ADD_OPERATION_LOGS,
} from '../actions';
import AppContext from '../contexts/AppContext';
import {timeCurrentISO8601} from '../utils';

const EventForm = () => {
    const {state, dispatch} = useContext(AppContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addEvent = (e) => {
        e.preventDefault();
        dispatch({
            type: CREATE_EVENT,
            title,
            body,
        });
        dispatch({
            type: ADD_OPERATION_LOG,
            description: 'created event.',
            operatedAt: timeCurrentISO8601(),
        });
        setTitle('');
        setBody('');
    };

    const deleteAllEvents = (e) => {
        e.preventDefault();
        const result = window.confirm('Do you want to delete al event ?');
        if (result) {
            dispatch({
                type: DELETE_ALL_EVENT,
            });
            dispatch({
                type: ADD_OPERATION_LOG,
                description: 'deleted all events.',
                operatedAt: timeCurrentISO8601(),
            });
        }
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
                    disabled={state.events.length === 0}
                >
                    Delete All Events
                </button>
            </form>
        </>
    );
};

export default EventForm;
