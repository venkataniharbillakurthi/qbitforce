import { LegalDocument } from "../Components/LegalDocument";
import LegalDocumentContent from "../Components/LegalDocumentContent";
import { termsAndConditions } from "../content/termsAndConditions";
import FramerPageHero, { FramerPageShell, PageContentSection } from "../Components/FramerPageHero";

function TC() {
  return (
    <FramerPageShell>
      <FramerPageHero
        pillLabel="Legal"
        title="Terms and Conditions"
        intro="Terms governing your use of the Qbit Force Quantum website and services."
        chips={[
          { label: "Read terms", href: "#terms-content" },
          { label: "Privacy", href: "/privacypolicy" },
          { label: "Contact", href: "/contactus" },
        ]}
      />

      <PageContentSection id="terms-content" maxWidth="max-w-3xl">
        <LegalDocument>
          <LegalDocumentContent sections={termsAndConditions} />
        </LegalDocument>
      </PageContentSection>
    </FramerPageShell>
  );
}

export default TC;
