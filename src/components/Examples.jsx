import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";

export default function Examples() {
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
    <Section title="Examples" id="examples">
    <menu>
        <TabButton onClick={() => {handleSelect('components')} } isSelected={selectedTab === 'components'}>Components</TabButton>
        <TabButton onClick={() => {handleSelect('jsx')}} isSelected={selectedTab === 'jsx'}>JSX</TabButton>
        <TabButton onClick={() => {handleSelect('props')}} isSelected={selectedTab === 'props'}>Props</TabButton>
        <TabButton onClick={() => {handleSelect('state')}} isSelected={selectedTab === 'state'}>State</TabButton>
    </menu>
    <div id="tab-content">
      <div>
        {tabContent}
      </div>
    </div>
  </Section>
  );
}