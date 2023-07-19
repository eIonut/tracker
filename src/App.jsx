import "./App.css";
import TrackPage from "./TrackPage";
import { useState } from "react";
import DaysProvider from "./DaysProvider";

function App() {

  return
    <DaysProvider>
      <TrackPage days={days} setDays={setDays}></TrackPage>
    </DaysProvider>
}

export default App;
