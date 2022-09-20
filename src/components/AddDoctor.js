import { useState, useRef } from 'react';

const AddDoctor = (props) => {
    //controlled component implementation:
    const [doctorName, setDoctorName] = useState('');
    const handleChangeName = (event) => {
        setDoctorName(event.target.value);
    };

    //uncontrolled component implementation:
    // const doctorNameInputRef = useRef(null);

    const handleAddDoctor = () => {
        //controlled component implementation:
        props.onAddDoctor(doctorName);
        setDoctorName('');

        //uncontrolled component implementation:
        // console.log(doctorNameInputRef.current.value);
    };

    //controlled component implementation: 
    return (
        <div>
            <input type='text' value={doctorName} onChange={handleChangeName}/>
            <button onClick={handleAddDoctor}>Add Doctor</button>
        </div>
    )

    //uncontrolled component implementation: using the useRef hook
    // return (
    //     <div>
    //         <input type='text' ref={doctorNameInputRef} />
    //         <button onClick={handleAddDoctor}>Add Doctor</button>
    //     </div>
    // );
}

export default AddDoctor;