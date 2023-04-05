import { Letreiro } from "./Letreiro";
import { DateComponent} from "./Date";
import "./App.css"


export function App()
{
  return (
    <div className="App-header">
    <h1>Mostrando letreiro:</h1>
    <Letreiro />
    <h1>Hora Local:</h1>
    <DateComponent />
    </div>
  );
}


