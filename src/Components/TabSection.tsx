import { useState } from "react";

type Item = {
  title: string;
  type: string;
  location: string;
  buttonText: string;
  buttonLink: string;
};

type Section = {
  title: string;
  items: Item[];
};

type Tab = {
  id: number;
  title: string;
  sections: Section[];
};

const tabs: Tab[] = [
  {
    id: 1,
    title: "Cryogenics",
    sections: [
      {
        title: "Engineers",
        items: [
          {
            title: "Mechanical Design Engineer",
            type: "Full Time",
            location: "AQV",
            buttonText: "Apply",
            buttonLink: "https://www.linkedin.com/company/qbit-force/posts/?feedView=all",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Ctrl-Electronics",
    sections: [
      {
        title: "Interns",
        items: [
          {
            title: "RF Control Electronics",
            type: "Part Time",
            location: "AQV",
            buttonText: "Apply",
            buttonLink: "https://www.linkedin.com/company/qbit-force/posts/?feedView=all",
          },
          {
            title: "Pulse design / FPGA programming",
            type: "Full Time",
            location: "AQV",
            buttonText: "Apply",
            buttonLink: "https://www.linkedin.com/company/qbit-force/posts/?feedView=all",
          },
        ],
      },
      {
        title: "Engineers",
        items: [
          {
            title: "RF/MW Engineer",
            type: "Full Time",
            location: "AQV",
            buttonText: "Apply",
            buttonLink: "https://www.linkedin.com/company/qbit-force/posts/?feedView=all",
          },
          {
            title: "FPGA Engineer",
            type: "Full Time",
            location: "AQV",
            buttonText: "Apply",
            buttonLink: "https://www.linkedin.com/company/qbit-force/posts/?feedView=all",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Ctrl-Software",
    sections: [
      {
        title: "Interns",
        items: [
          {
            title: "Qiskit transpiler design",
            type: "Part Time",
            location: "AQV",
            buttonText: "Apply",
            buttonLink: "https://www.linkedin.com/company/qbit-force/posts/?feedView=all",
          },
          {
            title: "Gate set compiler",
            type: "Full Time",
            location: "AQV",
            buttonText: "Apply",
            buttonLink: "https://www.linkedin.com/company/qbit-force/posts/?feedView=all",
          },
        ],
      },
      {
        title: "Engineers",
        items: [
          {
            title: "Q-CTRL Software Engineer",
            type: "Full Time",
            location: "AQV",
            buttonText: "Apply",
            buttonLink: "https://www.linkedin.com/company/qbit-force/posts/?feedView=all",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Fabrication",
    sections: [
      {
        title: "Interns",
        items: [
          {
            title: "Qiskit Metal Designer",
            type: "Part Time",
            location: "AQV",
            buttonText: "Apply",
            buttonLink: "https://www.linkedin.com/company/qbit-force/posts/?feedView=all",
          },
        ],
      },
      {
        title: "Engineers",
        items: [
          {
            title: "Processor design / Fab Engineer",
            type: "Full Time",
            location: "AQV",
            buttonText: "Apply",
            buttonLink: "https://www.linkedin.com/company/qbit-force/posts/?feedView=all",
          },
        ],
      },
    ],
  },
];

function TabsSection() {
  const [activeTab, setActiveTab] = useState(1);
  const [openSections, setOpenSections] = useState<number[]>([0]);
  const currentTab = tabs.find((tab) => tab.id === activeTab);

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="flex flex-wrap gap-1 border-b border-border bg-surface-warm p-2" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`rounded-lg px-4 py-2.5 font-display text-sm font-semibold transition ${
              activeTab === tab.id
                ? "bg-navy text-white shadow-md"
                : "text-navy hover:bg-white"
            }`}
            onClick={() => {
              setActiveTab(tab.id);
              setOpenSections([0]);
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="p-4 sm:p-5" role="tabpanel">
        {currentTab?.sections.map((section, index) => {
          const isOpen = openSections.includes(index);

          return (
            <div key={index} className="mb-2 overflow-hidden rounded-xl border border-border last:mb-0">
              <button
                type="button"
                className={`flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition ${
                  isOpen ? "bg-navy/5" : "bg-white hover:bg-surface-warm"
                }`}
                onClick={() => toggleSection(index)}
                aria-expanded={isOpen}
              >
                <span className="font-display text-sm font-bold text-navy">{section.title}</span>
                <span className="text-xs font-medium text-text-muted">
                  {section.items.length} role{section.items.length !== 1 ? "s" : ""}
                </span>
                <span
                  className={`ml-auto h-2 w-2 shrink-0 rotate-45 border-b-2 border-r-2 border-navy transition ${isOpen ? "-rotate-[135deg]" : ""}`}
                  aria-hidden
                />
              </button>

              {isOpen && (
                <div className="divide-y divide-border border-t border-border bg-white">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <h4 className="font-display text-base font-semibold text-navy">{item.title}</h4>
                        <div className="mt-1 flex flex-wrap gap-3 text-xs text-text-muted">
                          <span className="rounded-full bg-petal/10 px-2 py-0.5 font-semibold text-petal">
                            {item.type}
                          </span>
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="shrink-0 rounded-full bg-petal px-5 py-2 font-display text-sm font-semibold text-white transition hover:bg-[#e01820]"
                        onClick={() => window.open(item.buttonLink, "_blank", "noopener,noreferrer")}
                      >
                        {item.buttonText}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TabsSection;
