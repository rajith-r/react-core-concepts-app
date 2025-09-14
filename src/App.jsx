import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES} from "./data";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState('');
  function handleSelect(tab) {
    setSelectedTab(tab);
  }
  let tabContent = <p>Please select a tab</p>

  if(selectedTab) {
    tabContent = <div>
      <h3>{EXAMPLES[selectedTab].title}</h3>
      <p>{EXAMPLES[selectedTab].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTab].code}</code>
      </pre>
    </div>
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts" style={{ margin: "4rem 0" }}>
        <h2>Core Concepts</h2>
        <ul id="core-concepts-list"   style={{ display: "flex", gap: "1.5rem", listStyle: "none", padding: 0 }}>
          {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
          ))}
        </ul>
        </section>
        <section id="examples" style={{ margin: "4rem 0" }}>
          <h2>Examples</h2>
          <menu>
              <TabButton onSelect={() => {handleSelect('components')} } isSelected={selectedTab === 'components'}>Components</TabButton>
              <TabButton onSelect={() => {handleSelect('jsx')}} isSelected={selectedTab === 'jsx'}>JSX</TabButton>
              <TabButton onSelect={() => {handleSelect('props')}} isSelected={selectedTab === 'props'}>Props</TabButton>
              <TabButton onSelect={() => {handleSelect('state')}} isSelected={selectedTab === 'state'}>State</TabButton>
          </menu>
          <div id="tab-content">
            <div>
              {tabContent}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
