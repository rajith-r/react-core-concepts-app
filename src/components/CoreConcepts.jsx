import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
    <ul id="core-concepts-list"   style={{ display: "flex", gap: "1.5rem", listStyle: "none", padding: 0 }}>
      {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
      ))}
    </ul>
    </Section>
  );
}