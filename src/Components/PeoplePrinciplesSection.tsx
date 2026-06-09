import {
  principlesHeadline,
  principlesImpactRow,
  principlesTopRow,
  type PrinciplesPanel,
} from "../content/principlesSection";
import { useScrollReveal } from "../hooks/useScrollReveal";

const solidStyles = {
  navy: "bg-navy text-white",
  petal: "bg-petal text-white",
  light: "bg-[#e8e6e3] text-text",
};

const panelHeight =
  "min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]";

function ImagePanel({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  return (
    <div className={`group relative h-full w-full overflow-hidden ${panelHeight}`}>
      <img
        src={imageUrl}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/45 transition duration-500 group-hover:bg-black/35" />
    </div>
  );
}

function SolidPanelBlock({ panel }: { panel: Extract<PrinciplesPanel, { type: "solid" }> }) {
  const textClass = panel.variant === "light" ? "text-text" : "text-white";
  const subClass = panel.variant === "light" ? "text-text-muted" : "text-white/75";

  return (
    <div
      className={`flex h-full w-full flex-col justify-end p-4 sm:p-5 lg:p-6 ${panelHeight} ${solidStyles[panel.variant]}`}
    >
      <h3 className={`font-display text-base font-bold leading-snug sm:text-lg ${textClass}`}>
        {panel.title}
      </h3>
      {panel.subtitle && (
        <p className={`mt-1.5 max-w-xs text-xs leading-relaxed sm:text-sm ${subClass}`}>
          {panel.subtitle}
        </p>
      )}
    </div>
  );
}

function Panel({ panel }: { panel: PrinciplesPanel }) {
  if (panel.type === "image") {
    return <ImagePanel imageUrl={panel.imageUrl} alt={panel.alt} />;
  }
  return <SolidPanelBlock panel={panel} />;
}

function PeoplePrinciplesSection() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 ${visible ? "animate-[fadeUp_0.7s_ease-out_both]" : "opacity-0"}`}
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-[clamp(1.35rem,3vw,2rem)] font-normal leading-tight tracking-tight text-text">
          {principlesHeadline.line1}
          <br />
          {principlesHeadline.line2}
        </h2>
      </div>

      <div className="mx-auto mt-6 max-w-6xl lg:mt-8">
        {/* Top row — equal-height 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:items-stretch">
          {principlesTopRow.map((panel) => (
            <Panel key={panel.id} panel={panel} />
          ))}
        </div>

        {/* Bottom row — equal-height 3 columns */}
        <div className="mt-0 grid grid-cols-1 lg:grid-cols-3 lg:items-stretch">
          {principlesImpactRow.map((panel) => (
            <Panel key={panel.id} panel={panel} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PeoplePrinciplesSection;
