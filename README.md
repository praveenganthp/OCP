
here it is simple OCP: 😊✨
import "./App.css";
import { OcpViolation } from "./OcpViolation";
import { OcpCorrect } from "./OcpCorrect";

function App() {
  return (
    <>
      <div>
        <h2>
          {" "}
          OCP (Open/Closed Principle) <br /> Components should be OPEN for extension but CLOSED for modification.
        </h2>
      </div>
      <div>
        <h3>OCP Violoation</h3>
        <OcpViolation type="card" />
        <p>
          ❌ Why this violates OCP? - You must OPEN this component and MODIFY its conditions whenever a new type
          (crypto, netbanking, etc.) is added. - This makes the component tightly coupled and non-scalable.
        </p>
      </div>
      <div>
        <h3>OCP Correct</h3>
        <OcpCorrect type="wallet" />
        <p>
          ✅ Why this follows OCP? - The core logic (OCPCorrect component) NEVER changes. - All extensibility happens
          OUTSIDE using the paymentStrategies map. - New payment method? Just register a new component in the map. - No
          conditionals, no refactoring → clean and scalable.
        </p>
      </div>
      <div>
        <h4>Summary:</h4>❌ OCP Violation
        <ul>
          {" "}
          <li>
            Uses multiple <code>if/else</code> or <code>switch</code> statements to check payment types.
          </li>{" "}
          <li>
            Adding a new payment method (e.g., <code>crypto</code>) requires modifying the existing component.
          </li>{" "}
          <li>The main component keeps growing and becomes harder to maintain.</li>{" "}
          <li>
            Component is <strong>not closed</strong> for modification → breaks OCP.
          </li>{" "}
        </ul>
        ✅ OCP Correct Implementation
        <ul>
          {" "}
          <li>Each payment type is its own small component.</li>{" "}
          <li>
            All payment types are registered inside a <strong>strategy map</strong> (config object).
          </li>{" "}
          <li>The main component renders dynamically based on this map.</li>{" "}
          <li>
            To add a new payment method:
            <br /> <code>const CryptoPayment = () =&gt; &lt;div&gt;Processing Crypto&lt;/div&gt;</code>
            <br /> <code>paymentStrategies.crypto = CryptoPayment;</code>{" "}
          </li>{" "}
          <li>No changes are made to the main component.</li>{" "}
          <li>
            System is <strong>open for extension</strong> but <strong>closed for modification</strong> → follows OCP
            perfectly.
          </li>{" "}
        </ul>
      </div>
    </>
  );
}

export default App;
