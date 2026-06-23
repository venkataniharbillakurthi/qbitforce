import type { LegalSection } from "../content/legalTypes";

function renderParagraphs(paragraphs: string[] | undefined) {
  if (!paragraphs?.length) return null;

  return paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>);
}

function renderBullets(bullets: string[] | undefined) {
  if (!bullets?.length) return null;

  return (
    <ul>
      {bullets.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

type LegalDocumentContentProps = {
  sections: LegalSection[];
};

function LegalDocumentContent({ sections }: LegalDocumentContentProps) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.title}>
          <h3>{section.title}</h3>
          {section.subsections?.map((subsection) => (
            <div key={subsection.title}>
              <h4>{subsection.title}</h4>
              {renderParagraphs(subsection.paragraphs)}
              {renderBullets(subsection.bullets)}
            </div>
          ))}
          {renderParagraphs(section.paragraphs)}
          {renderBullets(section.bullets)}
        </section>
      ))}
    </>
  );
}

export default LegalDocumentContent;
