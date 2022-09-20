import PropTypes from 'prop-types';
import {useState} from 'react';
import DoctorDetails from './DoctorDetails';

function DoctorListItem({id, name, onDeleteDoctor}) { //destructuring a doctors object!
    const [details, setDetails] = useState(null);
    const [expanded, setExpanded] = useState(false);

    function handleClick() {
        if (details == null) {
            fetch(`https://muprogs.manulife.com/coach/doctor-info/v1/doctor/${id}`) //passes the id to the api!
                .then(response => response.json()) //parse to JSON
                .then(response => setDetails(response)); 
        }

        setExpanded(expanded => !expanded);
    }

    function handleDeleteDoctor() {
        onDeleteDoctor(id);
    }

    return (
        <div>
            <button onClick={handleClick}>{name}</button>
            <button onClick={handleDeleteDoctor}>X</button>
            {
                expanded && details && ( //only appears if details is not null! Can also extract to a func
                    <DoctorDetails 
                        dob={details.dob}
                        specialty={details.specialty}
                        address={details.address}
                    />
                )
            }
        </div>
    );
}

DoctorListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default DoctorListItem;