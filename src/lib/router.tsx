import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";
import { scrollToId, scrollToTop } from "./smooth";

/* A deliberately small path router. Seven routes, History API, and a
   `Link` that also understands in-page `#hash` targets so the same
   component can be used for nav links and project cards alike.
   Static hosts need a SPA fallback for this — see `public/_redirects`. */

type RouterValue = { path: string; navigate: (to: string) => void };

const RouterContext = createContext<RouterValue>({
  path: "/",
  navigate: () => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() =>
    typeof window === "undefined" ? "/" : window.location.pathname,
  );

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  /* Lenis takes over the scroll position, so the browser's own jump to
     `#hash` on first load gets undone. Redo it once the page has laid out. */
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const id = setTimeout(() => scrollToId(hash), 120);
    return () => clearTimeout(id);
  }, []);

  /* `to` may carry a hash ("/#work"): route to the path, then let the new
     page paint before scrolling to the target. */
  const navigate = useCallback((to: string) => {
    const [pathname, hash] = to.split("#");
    const target = pathname || "/";

    if (target === window.location.pathname) {
      if (hash) scrollToId(hash);
      else scrollToTop();
      return;
    }

    window.history.pushState(null, "", to);
    setPath(target);
    scrollToTop(true);
    if (hash) requestAnimationFrame(() => scrollToId(hash));
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  return useContext(RouterContext);
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  const handle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    // Let the browser handle new-tab/download intents and external targets.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (rest.target === "_blank" || /^https?:\/\//.test(to) || to.startsWith("mailto:")) return;

    e.preventDefault();
    if (to.startsWith("#")) scrollToId(to.slice(1));
    else navigate(to);
  };

  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  );
}
