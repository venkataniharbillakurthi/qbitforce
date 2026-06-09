import { Link } from "react-router-dom";

type Props = {
  to: string;
  label?: string;
};

function SectionViewAllLink({ to, label = "View all" }: Props) {
  return (
    <Link
      to={to}
      className="shrink-0 rounded-full border border-petal px-4 py-1.5 font-display text-xs font-semibold text-petal no-underline transition hover:bg-petal hover:text-white sm:text-sm"
    >
      {label}
    </Link>
  );
}

export default SectionViewAllLink;
