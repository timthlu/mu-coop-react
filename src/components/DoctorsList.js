import { useState, useEffect } from 'react';
import DoctorListItem from './DoctorListItem';
import AddDoctor from './AddDoctor';

function DoctorsList() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://muprogs.manulife.com/coach/rest-exercise-node/v1/doctors')
            .then((response) => response.json())
            .then((data) => setDoctors(data));
            
    }, []);

    const handleAddDoctor = (name) => {
        const newDoctor = { id: Date.now().toString(), name: name};
        const newDoctorsList = [...doctors, newDoctor];
        setDoctors(newDoctorsList);
    };

    const handleDeleteDoctor = (id) => {
        const newDoctorsList = doctors.filter((doctor) => doctor.id !== id);
        setDoctors(newDoctorsList);
    }

    return (
        <>
            <h2>Doctors List</h2>
            <AddDoctor onAddDoctor={handleAddDoctor}/>
            {doctors.map((doctor) => (
                <DoctorListItem 
                    key={doctor.id} 
                    id={doctor.id} 
                    name={doctor.name}
                    onDeleteDoctor={handleDeleteDoctor}
                />
            ))}
        </>
    );
}

export default DoctorsList;