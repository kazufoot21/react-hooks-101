import React from 'react';

const Event = ({event, dispatch}) => {
    const id = event.id;
    const handleClickDeleteButton = (e) => {
        e.preventDefault();
        const result = window.confirm(
            ` Do you want to delete event (id=${id}) ?`
        );
        if (result)
            dispatch({
                type: 'DELETE_EVENT',
                id,
            });
    };
    return (
        <tr>
            <td>{id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleClickDeleteButton}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Event;
