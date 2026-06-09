import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { HOME_ONLY_MODE } from "../config/siteMode";
import { useComingSoon } from "../context/ComingSoonContext";

type Props = {
  children: ReactNode;
};

function HomeOnlyGuard({ children }: Props) {
  const navigate = useNavigate();
  const { openComingSoon } = useComingSoon();

  useEffect(() => {
    if (!HOME_ONLY_MODE) return;
    openComingSoon();
    navigate("/", { replace: true });
  }, [navigate, openComingSoon]);

  if (HOME_ONLY_MODE) return null;

  return <>{children}</>;
}

export default HomeOnlyGuard;
