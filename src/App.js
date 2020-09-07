import React from "react";
import "./App.css";
import { useMachine } from "@xstate/react";
import tahoeTravelMachine from "./tahoeTravelMachine";

const Walking = ({ send, methods }) => (
  <>
    {methods.map((method) => (
      <button key={method} onClick={() => send(method)}>
        {method}
      </button>
    ))}
  </>
);

const Hitchhiking = ({ send, methods }) => (
  <>
    {methods.map((method) => (
      <button key={method} onClick={() => send(method)}>
        {method}
      </button>
    ))}
  </>
);

const Disappointed = ({ send, methods }) => (
  <>
    {methods.map((method) => (
      <button key={method} onClick={() => send(method)}>
        {method}
      </button>
    ))}
  </>
);

const Riding = ({ send, methods }) => (
  <>
    {methods.map((method) => (
      <button key={method} onClick={() => send(method)}>
        {method}
      </button>
    ))}
  </>
);

const Arrived = () => <h1>You Made It!</h1>;

function App() {
  const [current, send] = useMachine(tahoeTravelMachine);
  const currentState = current.value;

  const methods = current.configuration[0].machine.config.states[
    currentState
  ].on
    ? Object.keys(
        current.configuration[0].machine.config.states[currentState]
          .on
      )
    : null;

  return (
    <div className="app">
      <h1>You are: {current.value}</h1>

      {current.value !== "arrived" ? (
        <h2>What's your next move?</h2>
      ) : null}
      {currentState === "walking" ? (
        <Walking send={send} methods={methods} />
      ) : current.value === "hitchhiking" ? (
        <Hitchhiking send={send} methods={methods} />
      ) : current.value === "riding" ? (
        <Riding send={send} methods={methods} />
      ) : current.value === "disappointed" ? (
        <Disappointed send={send} methods={methods} />
      ) : (
        <Arrived />
      )}
    </div>
  );
}
export default App;
