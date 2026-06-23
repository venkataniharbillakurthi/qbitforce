import { LegalDocument } from "../Components/LegalDocument";
import LegalDocumentContent from "../Components/LegalDocumentContent";
import { privacyPolicy } from "../content/privacyPolicy";
import FramerPageHero, { FramerPageShell, PageContentSection } from "../Components/FramerPageHero";

function Privacy() {
  return (
    <FramerPageShell>
      <FramerPageHero
        pillLabel="Legal"
        title="Privacy Policy"
        intro="How Qbit Force collects, uses, and protects your personal information."
        chips={[
          { label: "Read policy", href: "#privacy-content" },
          { label: "Terms", href: "/terms" },
          { label: "Contact", href: "/contactus" },
        ]}
      />

      <PageContentSection id="privacy-content" maxWidth="max-w-3xl">
        <LegalDocument>
          <LegalDocumentContent sections={privacyPolicy} />
        </LegalDocument>
      </PageContentSection>
    </FramerPageShell>
  );
}

export default Privacy;
