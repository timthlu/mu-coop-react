import {useState} from 'react';

const PatientListItem = ({patient}) => {
    const [doctorsList, setDoctorsList] = useState(null);
    const [expanded, setExpanded] = useState(false);

    const GQL_API = `https://muprogs.manulife.com/coach/graphql-doctor-patient/`;
    const GQL_QUERY = `query($id: ID!) {
        patient(id: $id) {
          doctors {
            id
            name
          }
        }
      }`;
    const GQL_VARS = {id: patient.id};

    const handleClick = () => {
        //load doctors for the patient here using GraphQL instead of a REST API this time!
        if (!doctorsList) {
            fetch(GQL_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: GQL_QUERY,
                    variables: GQL_VARS
                })
            }).then(response => response.json())
                .then(response => setDoctorsList(response.data.patient.doctors));
        }
        

        setExpanded(expanded => !expanded);
    }

    return (
        <div>
            <button onClick={handleClick}>{patient.name}</button>
            {expanded && doctorsList && doctorsList.map((doctor) => {
                return <div key={doctor.id}>{doctor.name}</div>
            })}
        </div>
    );
}

export default PatientListItem;