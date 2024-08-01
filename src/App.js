import { Add } from "./components/Add";
import { Greetings } from "./components/greetings";

export function App() {
  return (
    <section>
      <h1>Hello my name is SMXKY</h1>
      <p>I am a developer/programmer/computer scientist 😁👍</p>
      <form>
        <label className="btn" htmlFor="name">
          Enter your name:{" "}
        </label>
        <input type="text" placeholder="Enter name" id="name" /> <br />
        <button type="submit">Submit</button>
      </form>
      <Greetings />
      <Add />
    </section>
  );
}
