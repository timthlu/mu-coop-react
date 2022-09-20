import DoctorsList from "./components/DoctorsList";
import PatientsList from "./components/PatientsList";

function App(props) {
  return (
    <>
      <h1>Hello, {props.name}</h1>
      <DoctorsList />
      <PatientsList />
    </>
  );
}

export default App;
