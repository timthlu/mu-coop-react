import {useState, useEffect} from 'react';

import PatientListItem from './PatientListItem';

const PatientsList = () => {
    const [patients, setPatients] = useState(null);

    useEffect(() => {
        fetch("https://muprogs.manulife.com/coach/rest-exercise-node/v1/patients")
            .then(response => response.json())
            .then(response => setPatients(response));
    }, [])

    return (
        <>
            <h2>Patients List</h2>
            {patients && patients.map((patient) => {
                return <PatientListItem 
                    key={patient.id}
                    patient={patient}
                />
            })}
        </>
    );
}

export default PatientsList;