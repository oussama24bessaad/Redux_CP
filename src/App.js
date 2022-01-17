import { Container } from "react-bootstrap";
import "./App.css";
import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTask";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div>
      <Container>
        <h1><center>TODO APP</center></h1>
        <AddTask />
        <ListTask />
        <FilterTask />
      </Container>
    </div>
  );
}

export default App;
