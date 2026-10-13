import { s as b, u as j, b as y, r as a, l as N, j as e, t as m, w as v } from "./index-BfjOhj2J.js";
import { C as _Component } from "./collapse-B2TExWm1.js";
import { S as G } from "./spinner-CaF1Mtcm.js";
const _ = "/assets/o72-optimized-CWWcSp14.webp";
const C = "1024270546883-sk2dhjkkqi6mk901j1rljgcugrrghb49.apps.googleusercontent.com";
function E() {
  try {
    if (new URLSearchParams(window.location.search).get("gis") === "1") {
      localStorage.setItem("gp_gis", "1");
    }
    return localStorage.getItem("gp_gis") === "1";
  } catch {
    return false;
  }
}
let c = null;
function S() {
  var t;
  var s;
  if ((s = (t = window.google) == null ? undefined : t.accounts) != null && s.id) {
    return Promise.resolve(window.google.accounts.id);
  } else {
    return c || (c = new Promise((n, i) => {
      const o = document.createElement("script");
      o.src = "https://accounts.google.com/gsi/client";
      o.async = true;
      o.onload = () => {
        var r;
        var l;
        if ((l = (r = window.google) == null ? undefined : r.accounts) != null && l.id) {
          return n(window.google.accounts.id);
        } else {
          return i(new Error("Google sign-in did not load"));
        }
      };
      o.onerror = () => {
        c = null;
        i(new Error("Google sign-in could not load"));
      };
      document.head.appendChild(o);
    }), c);
  }
}
async function I(t) {
  const s = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t));
  return Array.from(new Uint8Array(s), n => n.toString(16).padStart(2, "0")).join("");
}
async function A(t, s) {
  const n = await S();
  const i = crypto.randomUUID();
  n.initialize({
    client_id: C,
    nonce: await I(i),
    ux_mode: "popup",
    use_fedcm_for_button: true,
    callback: async ({
      credential: o
    }) => {
      if (!o) {
        return s("Google did not return a sign-in.");
      }
      const {
        error: r
      } = await b.auth.signInWithIdToken({
        provider: "google",
        token: o,
        nonce: i
      });
      if (r) {
        s(r.message);
      }
    }
  });
  n.renderButton(t, {
    type: "standard",
    theme: "outline",
    size: "large",
    text: "continue_with",
    shape: "rectangular",
    logo_alignment: "center",
    width: Math.min(t.clientWidth || 384, 400)
  });
}
function L(t) {
  if (t instanceof Error) {
    return t.message;
  } else {
    return "Something went wrong.";
  }
}
function T() {
  const t = j();
  const {
    user: s,
    isLoading: n,
    loginWithGoogle: i,
    refreshUser: o
  } = y();
  a.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  a.useEffect(() => {
    if (!n && s) {
      t(N(), {
        replace: true
      });
    }
  }, [s, n, t]);
  a.useEffect(() => {
    if (!n && !s) {
      o();
    }
  }, []);
  const [r, l] = a.useState("");
  const [f, x] = a.useState(false);
  const d = a.useRef(null);
  const [u] = a.useState(E);
  const [h, p] = a.useState(false);
  a.useEffect(() => {
    if (!!u && !!d.current) {
      A(d.current, g => l(g)).then(() => p(true)).catch(() => p(false));
    }
  }, []);
  const w = async () => {
    l("");
    x(true);
    try {
      m("login_started", {
        method: "google"
      });
      await i();
    } catch (g) {
      l(L(g));
      x(false);
    }
  };
  return <div className="min-h-screen flex flex-col bg-[#ffffff]"><header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-12"><button onClick={() => t("/")} className="font-['Cormorant_Garamond',serif] font-bold text-[24px] tracking-[-1.2px] text-[#7a6b2e] hover:opacity-70 transition-opacity">Gehna Photo</button><button onClick={() => t("/")} className="text-[#5c605d] text-[10px] tracking-[2px] uppercase hover:text-[#2f3331] transition-colors">BACK TO HOME</button></header><main id="main-content" tabIndex={-1} className="flex-1 flex items-center justify-center px-6 py-24"><div className="w-full max-w-[1152px] grid grid-cols-1 lg:grid-cols-2 bg-[#ffffff] shadow-[0px_20px_60px_-10px_rgba(47,51,49,0.08)] overflow-hidden"><div className="relative min-h-[700px] lg:min-h-[875px] overflow-hidden hidden lg:block"><img src={_} alt="Jewellery editorial" loading="eager" decoding="async" className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0 bg-[rgba(47,51,49,0.15)]" /><div className="absolute bottom-12 left-12 right-12"><p className="font-['Instrument_Serif',serif] italic text-[34px] leading-[1.2] text-[#ffffff]">Professional jewellery shoots,<br />in your hands.</p></div></div><div className="flex items-center justify-center p-8 lg:p-20"><div className="w-full max-w-[384px]"><div className="space-y-10"><div className="space-y-2"><div className="text-[#777c79] text-[10px] tracking-[3px] uppercase">GEHNA PHOTO</div><h1 className="font-['Cormorant_Garamond',serif] font-bold text-[36px] tracking-[-0.025em] text-[#7a6b2e] mt-2">Sign in.</h1><p className="font-['Inter',sans-serif] font-light text-[14px] text-[#777c79]">New here? Continue with Google and your account is created automatically.</p></div>{u && <div ref={d} onClick={() => m("login_started", {
                method: "google"
              })} className={h ? "flex min-h-[44px] justify-center" : "hidden"} />}{!h && <button onClick={w} disabled={f} className="w-full flex items-center justify-center gap-3 border border-[#e6e9e6] bg-white py-4 text-[13px] font-['Inter',sans-serif] text-[#2f3331] hover:border-[#B6A663] hover:shadow-[0_4px_16px_rgba(182,166,99,0.12)] transition-all disabled:opacity-50 disabled:cursor-not-allowed">{f ? <e.Fragment><G size="sm" label={null} className="text-gold-dark" /><span>Redirecting…</span></e.Fragment> : <e.Fragment><svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg><span>Continue with Google</span></e.Fragment>}</button>}<_Component open={!!r}><div className="bg-red-50 border border-red-100 px-4 py-3 text-red-600 text-[12px] leading-relaxed">{r}</div></_Component><p className="border-t border-[#e6e9e6] pt-6 text-center font-['Inter',sans-serif] font-light text-[12px] leading-[1.7] text-[#777c79]">Used to sign in with an email link? Continue with Google using the same address and you'll land in the same account. Not a Google account? <a href={v("Hi! I used to sign in to Gehna Photo with an email link and need help moving my account to Google.")} target="_blank" rel="noopener noreferrer" className="text-[#7a6b2e] underline underline-offset-4">Message us on WhatsApp</a> and we'll move it for you.</p></div></div></div></div></main><footer className="py-8 md:py-12 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[rgba(175,179,176,0.2)]"><div className="font-['Inter',sans-serif] text-[#afb3b0] text-[9px] tracking-[0.9px] uppercase text-center sm:text-left">© 2026 Gehna Photo. All rights reserved.</div><a href="mailto:support@gehnaphoto.com" className="font-['Inter',sans-serif] text-[#afb3b0] text-[9px] tracking-[0.9px] uppercase hover:text-[#777c79] transition-colors">CONTACT US</a></footer></div>;
}
export { T as default };