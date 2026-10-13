import { u as j, b as N, r as k, m as w, n as y, j as e, w as _, T as C, o as I, t as x, L as A } from "./index-BfjOhj2J.js";
import { C as L, F as D } from "./CreditWarningBanner-BnRWOrrP.js";
import { P as E } from "./PhoneBonusCard-DBAVGPxA.js";
import { s as m } from "./svg-zvlgkrjqpg-62RLns3c.js";
import { t as T, I as S } from "./imageVariants-jbAlJ6KT.js";
import { S as _Component } from "./skeleton-D9Lgo_Sm.js";
import "./button-DmV_w4RG.js";
import "./spinner-CaF1Mtcm.js";
import "./collapse-B2TExWm1.js";
const p = "gp_credit_banner_dismissed";
function B(a) {
  const s = Date.now() - new Date(a).getTime();
  const r = Math.floor(s / 3600000);
  if (r < 1) {
    return "JUST NOW";
  } else if (r < 24) {
    return `${r}H AGO`;
  } else {
    return `${Math.floor(r / 24)}D AGO`;
  }
}
function J() {
  var d;
  var c;
  const a = j();
  const {
    user: s
  } = N();
  const [r, h] = k.useState(() => sessionStorage.getItem(p) === "1");
  const g = () => {
    x("credit_banner_dismissed");
    h(true);
    try {
      sessionStorage.setItem(p, "1");
    } catch {}
  };
  const {
    data: i,
    isLoading: u
  } = w();
  const {
    data: f,
    isLoading: b
  } = y(8);
  const o = (f ?? []).flatMap(t => {
    if (t.status !== "completed") {
      return [];
    }
    const n = T(t);
    if (n) {
      return [{
        job: t,
        thumb: n
      }];
    } else {
      return [];
    }
  });
  return <main id="main-content" tabIndex={-1} className="flex-1 overflow-auto relative pt-[73px] lg:pt-0"><div className="min-h-full p-6 md:p-12 lg:p-24"><L open={!r && s !== null && ((i == null ? undefined : i.total_jobs) ?? 0) > 0 && ((s == null ? undefined : s.credits) ?? 10) < 6} credits={(s == null ? undefined : s.credits) ?? 0} onDismiss={g} /><header className="border-b border-line pb-6 md:pb-12 mb-12 md:mb-24"><div className="flex flex-col md:flex-row items-start justify-between gap-6"><div className="flex-1"><h1 className="font-serif font-bold text-[36px] md:text-[56px] lg:text-[72px] tracking-[-1.8px] text-ink leading-[1.25]">Welcome, <span data-ph-mask={true} className="font-serif font-bold italic">{((d = s == null ? undefined : s.email) == null ? undefined : d.split("@")[0]) ?? "Designer"}</span></h1></div><div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-3 md:gap-6"><a href={_("Hi! I need help with my Gehna Photo account.")} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 md:flex-none items-center justify-center md:justify-start gap-2 border border-gold text-gold-dark px-3.5 sm:px-4 py-2 md:py-2.5 text-[9px] sm:text-[10px] md:text-[11px] tracking-[1.2px] md:tracking-[1.5px] uppercase font-medium transition-colors duration-150 ease-move hover:bg-gold-dark hover:text-canvas whitespace-nowrap"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.05 4.91A10.05 10.05 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.48 1.34 5L2 22l5.13-1.34A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.68-1.04-5.2-2.95-7.09ZM12 20.13a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-3.05.8.81-2.97-.19-.31A8.13 8.13 0 1 1 20.13 12 8.14 8.14 0 0 1 12 20.13Zm4.47-6.1c-.25-.12-1.45-.71-1.68-.79-.22-.08-.39-.12-.55.12-.16.25-.62.79-.76.95-.14.16-.28.18-.52.06-.25-.12-1.04-.38-1.97-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.02-.39.11-.51.11-.11.25-.28.37-.42.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" /></svg>Need Help?</a><button onClick={() => a("/account")} className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gold-dark border border-line flex items-center justify-center cursor-pointer transition-colors duration-150 ease-move hover:bg-gold-deep shrink-0"><span className="text-canvas text-[16px] sm:text-[18px] md:text-[20px] font-serif font-bold uppercase">{((c = s == null ? undefined : s.email) == null ? undefined : c[0]) ?? "?"}</span></button></div></div></header><D className="mb-12 md:mb-16" />{(s == null ? undefined : s.phone_bonus_available) && <E where="dashboard" className="mb-12 md:mb-16" />}<a href={C} target="_blank" rel="noopener noreferrer" onClick={() => x("tutorial_opened")} className="group mb-12 md:mb-24 flex flex-col sm:flex-row items-stretch overflow-hidden border border-line bg-canvas transition-colors duration-150 ease-move hover:border-gold outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"><div className="relative w-full sm:w-[280px] md:w-[320px] shrink-0 aspect-video sm:aspect-auto bg-surface"><img src={I} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-move group-hover:scale-[1.02]" /><div className="absolute inset-0 bg-ink/15 transition-colors duration-150 ease-move group-hover:bg-ink/25" /><span aria-hidden="true" className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-canvas/95 text-gold-dark shadow-[0_8px_24px_-8px_rgba(47,51,49,0.4)] transition-transform duration-150 ease-move group-hover:scale-105"><svg className="ml-1 size-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3.5v13l11-6.5-11-6.5z" /></svg></span></div><div className="flex flex-1 flex-col justify-center gap-2 px-6 py-6 md:px-8"><p className="text-ink-muted text-[9px] md:text-[10px] tracking-[3px] uppercase">New here?</p><h2 className="font-serif font-bold text-[22px] md:text-[28px] text-ink leading-tight">Watch the tutorial</h2><p className="text-ink-soft text-[13px] md:text-[14px] font-light leading-relaxed">Upload a photo, pick a style, and get a catalogue-ready shot — see the whole flow before you spend a credit.</p><span className="mt-2 inline-flex items-center gap-2 text-gold-dark text-[10px] md:text-[11px] tracking-[1.5px] uppercase font-medium">Watch on YouTube<svg className="size-3.5 transition-transform duration-150 ease-move group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></div></a><div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-24"><div className="border-l border-ink pl-6 md:pl-8 pt-2"><div className="text-ink-muted text-[9px] md:text-[10px] tracking-[3px] uppercase mb-3 md:mb-4">Total Images Made</div><div className="flex items-baseline gap-3 md:gap-4">{u ? <_Component className="h-[36px] w-16 md:h-[48px] md:w-20" /> : <span className="font-serif font-bold text-[36px] md:text-[48px] text-ink tabular-nums">{(i == null ? undefined : i.total_jobs) ?? 0}</span>}</div></div><div className="border-l border-ink pl-6 md:pl-8 pt-2"><div className="text-ink-muted text-[9px] md:text-[10px] tracking-[3px] uppercase mb-3 md:mb-4">AVAILABLE CREDITS</div><div className="flex items-baseline gap-3 md:gap-4 mb-3 md:mb-4"><span className="font-serif font-bold text-[36px] md:text-[48px] text-ink tabular-nums">{(s == null ? undefined : s.credits) ?? 0}</span><span className="text-ink-muted text-[11px] md:text-[12px] tracking-[1.2px]">CREDITS</span></div><button onClick={() => a("/settings")} className="cursor-pointer text-gold-dark text-[9px] tracking-[1.5px] uppercase underline transition-colors duration-150 ease-move hover:text-ink">TOP UP</button></div></div><div className="mb-24 pb-20"><div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 md:mb-12"><h2 className="font-serif font-bold text-[24px] md:text-[30px] tracking-[-0.75px] text-ink">Recent Creations</h2><button onClick={() => a("/gallery")} className="flex cursor-pointer items-center gap-2 md:gap-3 text-ink-muted transition-colors duration-150 ease-move hover:text-ink"><span className="text-[9px] md:text-[10px] tracking-[3px] uppercase">SEE ALL</span><svg className="w-[10px] h-[7px] md:w-[11px] md:h-[8px]" fill="none" viewBox="0 0 11 8"><path d={m.pfdd4d80} fill="#706f6c" /></svg></button></div>{b ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">{Array.from({
            length: 4
          }).map((t, n) => <div key={n}><_Component variant="image" className="mb-4 h-[200px] w-full md:mb-6 md:h-[246px]" /><div className="border-t border-line pt-3 md:pt-4"><_Component variant="text" className="mb-1 w-2/3 text-[16px] md:text-[18px]" /><_Component variant="text" className="w-1/2 text-[9px] md:text-[10px]" /></div></div>)}<span className="sr-only" role="status">Loading your recent photos</span></div> : o.length === 0 ? <div className="flex flex-col items-center justify-center py-24 text-center gp-fade-in"><p className="text-ink-muted text-[14px] mb-6">You haven't made any images yet.</p><button onClick={() => a("/generator")} className="cursor-pointer bg-gold-dark text-canvas px-8 py-3 text-[10px] tracking-[3px] uppercase transition-colors duration-150 ease-move hover:bg-gold-deep">MAKE YOUR FIRST IMAGE</button></div> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">{o.map(({
            job: t,
            thumb: n
          }) => <A to="/gallery" className="group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4" key={t.id}><div className="relative mb-4 md:mb-6"><S src={n} alt={t.style} containerClassName="h-[200px] w-full md:h-[246px]" className="group-hover:scale-[1.02]" /><div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/5 opacity-0 transition-opacity duration-300 ease-move group-hover:opacity-100"><div className="grid size-10 place-items-center bg-canvas"><svg className="w-[14px] h-[9px]" fill="none" viewBox="0 0 14 9"><path d={m.p2feed780} fill="currentColor" /></svg></div></div></div><div className="border-t border-line pt-3 md:pt-4"><h3 className="font-serif font-bold text-[16px] md:text-[18px] text-ink mb-1">{t.style.replace(/_/g, " ").replace(/\b\w/g, v => v.toUpperCase())}</h3><p className="text-ink-muted text-[9px] md:text-[10px] tracking-[1px] uppercase">{t.channel.toUpperCase()} • {B(t.created_at)}</p></div></A>)}</div>}</div></div></main>;
}
export { J as default };