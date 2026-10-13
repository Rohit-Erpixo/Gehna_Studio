import { u as S, a as _, r as a, j as e, c, p as w, b as G, d as M, e as T, F as B, f as L, g as F, h as I, i as P, s as D, t as Y, O as $ } from "./index-BfjOhj2J.js";
import { s as f } from "./svg-zvlgkrjqpg-62RLns3c.js";
import { C as W } from "./confirm-dialog-BO_-wtoB.js";
import { S as H } from "./spinner-CaF1Mtcm.js";
import { B as U } from "./button-DmV_w4RG.js";
import { u as q } from "./useModalBehaviour-Dv5XUrCi.js";
function R({
  items: s,
  activeSection: r,
  onNavigate: d,
  onSignOut: h,
  signOutIcon: o,
  inset: i = "rail",
  landmarkLabel: n = "Main"
}) {
  const m = S();
  const b = _();
  const x = a.useRef(null);
  const g = a.useRef({});
  const [l, j] = a.useState(null);
  const [u, y] = a.useState(false);
  const p = s.find(t => b.pathname === t.path || r === t.id);
  const k = a.useCallback(() => {
    const t = x.current;
    const v = p ? g.current[p.id] : null;
    if (!t || !v) {
      j(null);
      return;
    }
    const N = t.getBoundingClientRect();
    const C = v.getBoundingClientRect();
    j({
      top: C.top - N.top,
      height: C.height
    });
  }, [p]);
  a.useLayoutEffect(() => {
    k();
  }, [k]);
  a.useEffect(() => {
    if (!l || u) {
      return;
    }
    const t = requestAnimationFrame(() => y(true));
    return () => cancelAnimationFrame(t);
  }, [l, u]);
  a.useEffect(() => {
    const t = () => k();
    window.addEventListener("resize", t);
    return () => window.removeEventListener("resize", t);
  }, [k]);
  const E = i === "rail" ? "px-8" : "px-6";
  const z = t => {
    m(t);
    if (d != null) {
      d();
    }
  };
  return <nav className="py-6" aria-label={n}><div ref={x} className="relative"><span aria-hidden="true" className={c("pointer-events-none absolute inset-x-0 z-0 bg-gold-dark", "border-r-2 border-gold", u && "transition-[transform,height,opacity] duration-300 ease-move", l ? "opacity-100" : "opacity-0")} style={{
        height: (l == null ? undefined : l.height) ?? 0,
        transform: `translateY(${(l == null ? undefined : l.top) ?? 0}px)`
      }} />{s.map(t => {
        const v = (p == null ? undefined : p.id) === t.id;
        return <button ref={N => {
          g.current[t.id] = N;
        }} onClick={() => z(t.path)} onMouseEnter={() => w(t.path)} onFocus={() => w(t.path)} onTouchStart={() => w(t.path)} aria-current={v ? "page" : undefined} className={c("relative z-10 flex w-full cursor-pointer items-center gap-3 py-4", E, "transition-colors duration-300 ease-move", v ? "text-canvas" : "text-ink-muted hover:text-ink")} key={t.id}><svg className="size-[14px] shrink-0" fill="none" viewBox="0 0 16 17" aria-hidden="true"><path d={t.icon} fill="currentColor" /></svg><span className={c("text-[10px] uppercase tracking-[3px]", v && "font-medium")}>{t.label}</span></button>;
      })}</div><button onClick={h} className={c("flex w-full cursor-pointer items-center gap-3 py-4", E, "text-ink-muted transition-colors duration-150 ease-move hover:text-ink")}><svg className="size-[14px] shrink-0" fill="none" viewBox="0 0 13 13" aria-hidden="true"><path d={o} fill="currentColor" /></svg><span className="text-[10px] uppercase tracking-[3px]">SIGN OUT</span></button></nav>;
}
const K = a.forwardRef(function ({
  open: r,
  label: d = "Menu",
  className: h,
  ...o
}, i) {
  const n = "block h-px w-5 bg-current origin-center transition-transform duration-200 ease-move";
  return <button ref={i} type="button" aria-label={d} aria-expanded={r} data-slot="menu-toggle" className={c("inline-flex cursor-pointer flex-col items-center justify-center gap-[5px] p-2", "text-ink transition-colors duration-150 ease-move hover:text-gold-dark", h)} {...o}><span className={c(n, r && "translate-y-[6px] rotate-45")} /><span className={c("block h-px w-5 bg-current transition-opacity duration-150 ease-move", r ? "opacity-0" : "opacity-100")} /><span className={c(n, r && "-translate-y-[6px] -rotate-45")} /></button>;
});
const A = [{
  id: "dashboard",
  label: "DASHBOARD",
  icon: f.p16f66b00,
  path: "/dashboard"
}, {
  id: "generator",
  label: "GENERATOR",
  icon: f.p3eddcf40,
  path: "/generator"
}, {
  id: "gallery",
  label: "MY GALLERY",
  icon: f.p1b86ea80,
  path: "/gallery"
}, {
  id: "settings",
  label: "PLANS",
  icon: f.p2880fe00,
  path: "/settings"
}, {
  id: "account",
  label: "SETTINGS",
  icon: f.p170f2100,
  path: "/account"
}];
function J({
  activeSection: s
}) {
  const r = S();
  const {
    logout: d,
    user: h
  } = G();
  const [o, i] = a.useState(false);
  const [n, m] = a.useState(false);
  const b = a.useRef(null);
  const x = a.useRef(null);
  const {
    data: g
  } = M(!!h);
  const l = (g == null ? undefined : g.active) ?? 0;
  a.useEffect(() => T(), []);
  a.useEffect(() => {
    if (!o) {
      return;
    }
    const u = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const y = p => {
      if (p.key === "Escape") {
        i(false);
      }
    };
    window.addEventListener("keydown", y);
    return () => {
      var p;
      document.body.style.overflow = u;
      window.removeEventListener("keydown", y);
      if ((p = x.current) != null) {
        p.focus();
      }
    };
  }, [o]);
  a.useEffect(() => {
    const u = b.current;
    if (u) {
      if (o) {
        u.removeAttribute("inert");
      } else {
        u.setAttribute("inert", "");
      }
    }
  }, [o]);
  const j = () => {
    d();
    r("/login");
    i(false);
  };
  return <e.Fragment><div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-canvas border-b-2 border-gold px-6 py-4 flex items-center justify-between"><button onClick={() => r("/")} className="font-serif font-bold text-[22px] text-gold-dark cursor-pointer transition-opacity duration-150 ease-move hover:opacity-70">Gehna Photo</button><K ref={x} open={o} label={o ? "Close menu" : "Open menu"} onClick={() => i(u => !u)} className="-mr-2 text-gold-dark" /></div><div aria-hidden="true" onClick={() => i(false)} className={c("lg:hidden fixed inset-0 z-40 bg-ink/25", "transition-opacity duration-300", o ? "opacity-100 ease-enter" : "pointer-events-none opacity-0 ease-leave")} /><div ref={b} id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navigation" className={c("lg:hidden fixed top-[57px] right-0 bottom-0 w-[260px] z-40", "bg-surface border-l border-line", "transition-transform duration-300", o ? "translate-x-0 ease-enter" : "translate-x-full ease-leave")}><R items={A} activeSection={s} inset="drawer" landmarkLabel="Mobile" onNavigate={() => i(false)} onSignOut={() => {
        i(false);
        m(true);
      }} signOutIcon={f.p2e24ee80} /></div><aside className="hidden lg:flex w-[200px] bg-surface border-r border-line flex-col"><div className="px-8 pt-10 pb-8 border-b border-line"><button onClick={() => r("/")} className="text-left cursor-pointer transition-opacity duration-150 ease-move hover:opacity-70"><h1 className="font-serif font-bold text-[22px] text-gold-dark leading-tight">Gehna Photo</h1></button><p className="text-ink-muted text-[9px] tracking-[2px] uppercase mt-2">JEWELLERY STUDIO</p></div><R items={A} activeSection={s} inset="rail" onSignOut={() => m(true)} signOutIcon={f.p2e24ee80} /></aside><W open={n} title="Sign out?" description="Are you sure you want to sign out of Gehna Photo?" confirmLabel="Sign Out" onConfirm={j} onCancel={() => m(false)} />{l > 0 && <B order={L.queue}><button onClick={() => r("/generator")} className={c(I, "gp-fade-in cursor-pointer gap-2.5 border border-line bg-canvas px-4 py-2", "hover:border-gold hover:bg-canvas")} aria-label={`${l} photo${l > 1 ? "s" : ""} still generating. Go to generator.`}><H size="xs" label={null} className="text-gold-dark" /><span className={c(F, "text-ink")} aria-live="polite">{l} generating</span></button></B>}</e.Fragment>;
}
function Q() {
  const s = S();
  return <B order={L.create}><button onClick={() => s("/generator")} className={c(I, "cursor-pointer gap-2.5 bg-gold-dark px-5 py-3 text-canvas", "hover:bg-gold-deep md:px-6")}><svg className="size-2 transition-transform duration-150 ease-move group-hover:rotate-90" fill="none" viewBox="0 0 8 8" aria-hidden="true"><path d={f.p120bd0a0} fill="currentColor" /></svg><span className={F}>Create</span></button></B>;
}
const O = "gp_email_signin_notice_seen";
function V() {
  const [s, r] = a.useState(null);
  a.useEffect(() => {
    if (P) {
      try {
        if (sessionStorage.getItem(O)) {
          return;
        }
      } catch {}
      D.auth.getSession().then(({
        data: i
      }) => {
        var b;
        var x;
        var g;
        const n = (b = i.session) == null ? undefined : b.user;
        const m = ((x = n == null ? undefined : n.app_metadata) == null ? undefined : x.providers) ?? [(g = n == null ? undefined : n.app_metadata) == null ? undefined : g.provider];
        if (n != null && n.email && m.includes("email") && !m.includes("google")) {
          r(n.email);
          Y("email_signin_notice_shown", {
            gmail: /@(gmail|googlemail)\.com$/i.test(n.email)
          });
        }
      });
    }
  }, []);
  const d = () => {
    try {
      sessionStorage.setItem(O, "1");
    } catch {}
    r(null);
  };
  const h = q(s !== null, d);
  if (!s) {
    return null;
  }
  const o = /@(gmail|googlemail)\.com$/i.test(s);
  return <div className="fixed inset-0 z-[60] grid place-items-center bg-ink/40 p-4" onClick={d}><div ref={h} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="email-notice-title" onClick={i => i.stopPropagation()} className="w-full max-w-md rounded-xl border border-gold bg-canvas p-6 outline-none"><p id="email-notice-title" className="font-serif font-bold text-[24px] leading-tight text-gold-dark">We’re moving sign-in to Google</p><p className="mt-3 text-[14px] leading-relaxed text-ink-muted">Signing in with an emailed link is going away. Next time, tap <span className="font-medium text-ink">Continue with Google</span>{o ? <e.Fragment> and choose <span className="font-medium text-ink">{s}</span>.</e.Fragment> : <e.Fragment> using <span className="font-medium text-ink">{s}</span> if it’s a Google account.</e.Fragment>}</p><p className="mt-2 text-[14px] leading-relaxed text-ink-muted">It’s the same account: your credits, photos and purchases stay exactly as they are.{!o && " If this email isn’t a Google account, message us on WhatsApp and we’ll move your account."}</p><U block={true} className="mt-6" onClick={d}>Got it</U></div></div>;
}
const X = {
  "/dashboard": "dashboard",
  "/generator": "generator",
  "/gallery": "gallery",
  "/settings": "settings",
  "/account": "account"
};
const Z = new Set(["/dashboard", "/gallery", "/settings"]);
function re() {
  const {
    pathname: s
  } = _();
  return <div className="min-h-screen bg-canvas flex"><J activeSection={X[s]} /><$ />{Z.has(s) && <Q />}<V /></div>;
}
export { re as default };