import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="container-fluid">
            <h4>Event Create Form</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">Title</label>
                    <input className="form-control" id="formEventTitle"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="formEventBody">Body</label>
                    <textarea
                        className="form-control"
                        id="formEventBody"
                    ></textarea>
                </div>

                <button className="btn btn-primary">Create Event</button>
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
