import React, {useContext, useState} from 'react';
import AppContext from '../contexts/AppContext';
import OperationLog from './OperationLog';

const OperationLogs = () => {
    const {state} = useContext(AppContext);
    return (
        <>
            <h4>Operate Logs </h4>
            <table className="table table-haver">
                <thead>
                    <tr>
                        <th>Contes</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {state.operationLogs.map((operationLog, index) => {
                        return (
                            <OperationLog
                                key={index}
                                operationLog={operationLog}
                            />
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default OperationLogs;
