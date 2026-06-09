import { Link, type LinkProps } from "react-router-dom";
import type { MouseEvent } from "react";
import { useComingSoon } from "../context/ComingSoonContext";

type Props = LinkProps & {
  comingSoonLabel?: string;
};

function AppLink({ to, onClick, children, className, comingSoonLabel: _label, ...props }: Props) {
  const { openComingSoon, shouldBlockNavigation } = useComingSoon();
  const path = typeof to === "string" ? to : to.pathname ?? "/";

  if (shouldBlockNavigation(path)) {
    return (
      <button
        type="button"
        className={`cursor-pointer border-none bg-transparent p-0 text-left ${className ?? ""}`}
        onClick={(event) => {
          onClick?.(event as unknown as MouseEvent<HTMLAnchorElement>);
          openComingSoon();
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <Link to={to} onClick={onClick} className={className} {...props}>
      {children}
    </Link>
  );
}

export default AppLink;
