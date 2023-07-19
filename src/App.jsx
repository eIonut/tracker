import "./App.css";
import TrackPage from "./TrackPage";
import DaysProvider from "./DaysProvider";

function App() {
  return (
    <DaysProvider>
      <TrackPage />
    </DaysProvider>
  );
}

export default App;
