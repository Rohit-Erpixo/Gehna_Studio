import { u as de, r as n, y as pe, j as e, c as g, L as R, t as O, z as b, q as xe } from "./index-BfjOhj2J.js";
import { B as _Component3 } from "./button-DmV_w4RG.js";
import { r as me, I as _Component2 } from "./imageVariants-jbAlJ6KT.js";
import { S as K } from "./skeleton-D9Lgo_Sm.js";
import { u as ge } from "./useModalBehaviour-Dv5XUrCi.js";
import "./spinner-CaF1Mtcm.js";
const J = [{
  key: "jewellery_set",
  label: "Jewellery Set"
}, {
  key: "bracelet",
  label: "Bracelet"
}, {
  key: "earring",
  label: "Earring"
}, {
  key: "ring",
  label: "Ring"
}, {
  key: "bracelet_bangle",
  label: "Bangles"
}, {
  key: "pendant",
  label: "Pendant"
}, {
  key: "payal",
  label: "Payal"
}, {
  key: "maan_tika",
  label: "Maang Teeka"
}];
const f = [{
  key: "macro",
  label: "Macro"
}, {
  key: "flatlay",
  label: "FlatLay"
}, {
  key: "studio",
  label: "Studio"
}, {
  key: "shop_display",
  label: "Shop Display"
}, {
  key: "indian_bridal",
  label: "Indian Bridal"
}, {
  key: "modern_wear",
  label: "Modern Wear"
}, {
  key: "closeup",
  label: "Close-up"
}];
const G = [{
  key: "catalogue_portrait",
  label: "Catalogue (3:4)"
}, {
  key: "instagram_square",
  label: "Instagram (1:1)"
}, {
  key: "lookbook_landscape",
  label: "Lookbook (16:9)"
}, {
  key: "story_vertical",
  label: "Story (9:16)"
}];
const he = 200;
function m(o, s) {
  var r;
  return ((r = o.find(d => d.key === s)) == null ? undefined : r.label) ?? s.replace(/_/g, " ");
}
function be(o) {
  return new Date(o).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}
function fe(o) {
  return o.slice(0, 10);
}
const Y = o => g("shrink-0 cursor-pointer whitespace-nowrap rounded-xs border px-2.5 py-1.5 sm:px-3", "text-[10px] uppercase tracking-[1px]", "transition-[color,background-color,border-color] duration-200 ease-move", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1", o ? "border-gold-dark bg-gold-dark text-canvas" : "border-line text-ink-muted hover:border-gold/60 hover:text-ink");
const V = "flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1";
const U = "text-ink-muted text-[9px] tracking-[2px] uppercase shrink-0 w-14 sm:w-20";
function S({
  label: o,
  options: s,
  value: r,
  onChange: d
}) {
  if (s.length === 0) {
    return null;
  } else {
    return <div className={V}><span className={U}>{o}</span><div className="flex gap-2"><button aria-pressed={r === ""} onClick={() => d("")} className={Y(r === "")}>All</button>{s.map(p => <button aria-pressed={r === p.key} onClick={() => d(p.key)} className={Y(r === p.key)} key={p.key}>{p.label}</button>)}</div></div>;
  }
}
const ye = [["2.4rem", "4.2rem", "3.4rem", "5rem"], ["2.4rem", "3.6rem", "4.6rem", "3.2rem", "4rem"], ["2.4rem", "4rem", "3rem"], ["2.4rem", "5.4rem", "5.4rem"]];
function _Component() {
  return <div className="mb-10 space-y-3" aria-hidden="true">{["Type", "Style", "Size", "Date"].map((o, s) => <div className={V} key={o}><span className={U}>{o}</span><div className="flex gap-2">{ye[s].map((r, d) => <K className="h-[26px]" style={{
          width: r
        }} key={d} />)}</div></div>)}</div>;
}
function Ie() {
  const o = de();
  const [s, r] = n.useState(null);
  const [d, p] = n.useState(false);
  const [C, F] = n.useState({});
  const B = n.useRef(new Set());
  const $ = n.useRef(false);
  const {
    data: L,
    isLoading: M,
    isFetchingNextPage: X,
    fetchNextPage: Q,
    hasNextPage: Z
  } = pe();
  const l = ((L == null ? undefined : L.pages) ?? []).flat().flatMap(t => me(t).map(a => ({
    thumb: a.thumb,
    display: a.display,
    original: a.original,
    jobId: t.id,
    style: t.style ?? "",
    jewelleryType: t.garment_type ?? "",
    outputFormat: t.output_format ?? "",
    createdAt: t.created_at,
    index: a.index
  })));
  const [v, I] = n.useState("");
  const [j, E] = n.useState("");
  const [w, _] = n.useState("");
  const [N, T] = n.useState("");
  const D = v || j || w || N;
  const ee = [...new Set(l.map(t => t.jewelleryType).filter(Boolean))];
  const te = [...new Set(l.map(t => t.style).filter(Boolean))];
  const ae = [...new Set(l.map(t => t.outputFormat).filter(Boolean))];
  const se = [...new Set(l.map(t => fe(t.createdAt)).filter(Boolean))];
  const oe = J.filter(t => ee.includes(t.key));
  const re = f.filter(t => te.includes(t.key));
  const ne = G.filter(t => ae.includes(t.key));
  const le = se.map(t => ({
    key: t,
    label: be(t)
  }));
  const i = l.filter(t => (!v || t.jewelleryType === v) && (!j || t.style === j) && (!w || t.outputFormat === w) && (!N || !!t.createdAt.startsWith(N)));
  const ie = t => {
    const a = /\.(png|webp|jpe?g)$/i.exec(t.split("?")[0]);
    if (a) {
      return a[1].toLowerCase();
    } else {
      return "png";
    }
  };
  const z = async (t, a) => {
    O("image_downloaded", {
      style: a
    });
    if (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || window.matchMedia("(pointer: coarse)").matches) {
      window.open(t, "_blank", "noopener,noreferrer");
      b("Opening your photo in a new tab");
      return;
    }
    const k = `gehna-photo-${a.replace(/_/g, "-")}.${ie(t)}`;
    const u = b.loading("Preparing your download…");
    try {
      const {
        download_url: W
      } = await xe.downloadUrl(t, k);
      if (!W) {
        throw new Error("No download URL");
      }
      const h = document.createElement("a");
      h.href = W;
      h.download = k;
      h.rel = "noopener";
      document.body.appendChild(h);
      h.click();
      h.remove();
      b.success("Photo downloaded", {
        id: u
      });
    } catch {
      window.open(t, "_blank", "noopener,noreferrer");
      b.error("Could not download directly — opened the photo instead", {
        id: u
      });
    }
  };
  const H = async (t, a = "") => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Gehna Photo — Jewellery Shot",
          url: t
        });
        O("image_shared", {
          style: a,
          method: "native"
        });
        return;
      } catch (c) {
        if (c instanceof DOMException && c.name === "AbortError") {
          return;
        }
      }
    }
    try {
      await navigator.clipboard.writeText(t);
      O("image_shared", {
        style: a,
        method: "clipboard"
      });
      b.success("Link copied to clipboard");
    } catch {
      b.error("Could not copy the link");
    }
  };
  const A = t => {
    F(a => ({
      ...a,
      [t]: true
    }));
    window.setTimeout(() => {
      F(a => {
        const c = {
          ...a
        };
        delete c[t];
        return c;
      });
    }, 900);
  };
  const P = n.useCallback(() => {
    p(true);
    window.setTimeout(() => {
      r(null);
      p(false);
    }, he);
  }, []);
  const x = s ? i.findIndex(t => t.jobId === s.jobId && t.index === s.index) : -1;
  const y = n.useCallback(t => {
    if (x < 0) {
      return;
    }
    const a = i[x + t];
    if (a) {
      r(a);
    }
  }, [i, x]);
  const ce = ge(!!s, P);
  n.useEffect(() => {
    if (!s) {
      return;
    }
    const t = a => {
      if (a.key === "ArrowRight") {
        y(1);
      }
      if (a.key === "ArrowLeft") {
        y(-1);
      }
    };
    window.addEventListener("keydown", t);
    return () => window.removeEventListener("keydown", t);
  }, [s, y]);
  n.useEffect(() => {
    i.forEach(t => B.current.add(`${t.jobId}-${t.index}`));
    $.current = true;
  }, [i]);
  return <main id="main-content" tabIndex={-1} className="flex-1 overflow-auto pt-[73px] lg:pt-0"><div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-32"><div className="mb-8 md:mb-12 lg:mb-16"><div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-12"><div><h1 className="font-serif font-bold text-[36px] md:text-[56px] lg:text-[72px] text-gold-dark tracking-tight leading-tight">Your Photos</h1></div></div><div className="flex items-center gap-8 pt-8 border-t border-line"><div><span className="text-ink-muted text-[10.4px] tracking-[1.04px] uppercase">TOTAL IMAGES</span><span className="ml-4 font-serif font-bold text-[18px] text-gold-dark transition-opacity duration-200 ease-move">{i.length}</span>{D && <span className="ml-1.5 text-ink-faint text-[12px]">/ {l.length}</span>}</div>{D && <button onClick={() => {
            I("");
            E("");
            _("");
            T("");
          }} className="cursor-pointer text-gold-dark text-[10px] tracking-[1px] uppercase transition-colors duration-150 ease-move hover:text-gold-deep gp-fade-in">Clear Filters</button>}</div></div>{M && l.length === 0 && <_Component />}{l.length > 0 && <div className="mb-10 space-y-3"><S label="Type" options={oe} value={v} onChange={I} /><S label="Style" options={re} value={j} onChange={E} /><S label="Size" options={ne} value={w} onChange={_} /><S label="Date" options={le} value={N} onChange={T} /></div>}{M && l.length === 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16">{Array.from({
          length: 6
        }).map((t, a) => <K variant="image" className="aspect-square w-full" key={a} />)}<span className="sr-only" role="status">Loading your photos</span></div> : l.length === 0 ? <div className="flex flex-col items-center justify-center py-32 text-center"><p className="text-ink-muted text-[14px] mb-6">No photos yet. Create your first one!</p><button onClick={() => o("/generator")} className="cursor-pointer bg-gold-dark text-canvas px-8 py-3 text-[11px] tracking-[1.12px] uppercase transition-colors duration-150 ease-move hover:bg-gold-deep">CREATE MY FIRST PHOTO</button></div> : i.length === 0 ? <div className="flex flex-col items-center justify-center py-32 text-center"><p className="text-ink-muted text-[14px] mb-4">No photos match the selected filters.</p><button onClick={() => {
          I("");
          E("");
          _("");
          T("");
        }} className="cursor-pointer text-gold-dark text-[11px] tracking-[1px] uppercase transition-colors duration-150 ease-move hover:text-gold-deep">Clear Filters</button></div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16">{i.map(t => {
          const a = `${t.jobId}-${t.index}`;
          const c = $.current && !B.current.has(a);
          const k = u => g("cursor-pointer rounded-xs border border-ink-muted/10 px-4 py-2", "text-[10px] uppercase tracking-[1px] backdrop-blur-sm", "transition-[background-color,color,transform] duration-200 ease-move", u ? "scale-[0.96] bg-gold-deep text-canvas" : "bg-canvas/90 text-ink-soft hover:bg-canvas active:scale-[0.96] active:bg-gold-deep active:text-canvas");
          return <div className={g("group relative aspect-square overflow-hidden bg-surface", c && "gp-panel-in")} key={a}><_Component2 src={t.thumb} alt={m(f, t.style)} containerClassName="absolute inset-0" className="group-hover:scale-[1.02]" /><button type="button" onClick={() => r(t)} aria-label={`View ${m(f, t.style)} full size`} className="absolute inset-0 cursor-zoom-in outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset" /><div className="pointer-events-none absolute inset-0 bg-ink/5 transition-opacity duration-300 ease-move lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100" /><div className="absolute bottom-4 right-4 z-10 flex gap-2 transition-opacity duration-300 ease-move lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100"><button onClick={u => {
                u.stopPropagation();
                A(`download:${a}`);
                z(t.original ?? t.display, t.style);
              }} className={k(!!C[`download:${a}`])}>DOWNLOAD</button><button onClick={u => {
                u.stopPropagation();
                A(`share:${a}`);
                H(t.display, t.style);
              }} className={k(!!C[`share:${a}`])}>SHARE</button></div><div className="pointer-events-none absolute left-3 top-3 transition-opacity duration-300 ease-move lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100"><span className="bg-canvas/90 px-2 py-1 text-[8px] uppercase tracking-[1px] text-ink-soft backdrop-blur-sm">{m(f, t.style)}</span></div></div>;
        })}</div>}{Z && l.length > 0 && <div className="flex flex-col items-center pt-16"><div className="mb-8 h-24 w-px bg-gradient-to-b from-ink-muted/40 to-transparent" /><_Component3 variant="secondary" onClick={() => Q()} loading={X} loadingText="Loading" className="tracking-[3px]">Load more</_Component3></div>}</div>{s && <div className={g("fixed inset-0 z-[120] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-[2px] sm:p-6", d ? "gp-fade-out" : "gp-fade-in")} onClick={P} role="dialog" aria-modal="true" aria-label="Expanded gallery image"><div ref={ce} tabIndex={-1} className={g("flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden outline-none", "border border-line bg-canvas shadow-[0_24px_80px_rgba(0,0,0,0.45)]", d ? "gp-panel-out" : "gp-panel-in")} onClick={t => t.stopPropagation()}><div className="flex shrink-0 items-center justify-between gap-3 border-b border-line px-4 py-3"><span className="truncate text-[10px] uppercase tracking-[1.5px] text-gold-dark sm:text-[11px]">{m(f, s.style)}</span><div className="flex shrink-0 items-center gap-3">{x >= 0 && <span className="text-[11px] tabular-nums text-ink-faint">{x + 1} / {i.length}</span>}<button onClick={P} aria-label="Close expanded image" className="grid size-8 cursor-pointer place-items-center rounded-full text-ink-muted transition-colors duration-150 ease-move hover:bg-surface hover:text-ink"><svg className="size-4" fill="none" viewBox="0 0 12 12"><path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></button></div></div><div className="relative h-[48vh] shrink-0 bg-surface sm:h-[58vh]"><_Component2 src={s.display} alt={m(f, s.style)} containerClassName="absolute inset-0 bg-surface" className="object-contain" showSkeleton={false} loading="eager" fetchPriority="high" key={`${s.jobId}-${s.index}`} />{x > 0 && <button onClick={() => y(-1)} aria-label="Previous photo" className="absolute left-3 top-1/2 grid size-9 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-line bg-canvas/95 text-ink shadow-sm transition-colors duration-150 ease-move hover:bg-canvas"><svg className="size-4" fill="none" viewBox="0 0 16 16"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>}{x >= 0 && x < i.length - 1 && <button onClick={() => y(1)} aria-label="Next photo" className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-line bg-canvas/95 text-ink shadow-sm transition-colors duration-150 ease-move hover:bg-canvas"><svg className="size-4" fill="none" viewBox="0 0 16 16"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>}</div><div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-3"><span className="text-[10px] uppercase tracking-[1px] text-ink-muted">{m(J, s.jewelleryType)} · {m(G, s.outputFormat)}</span><div className="flex items-center gap-2"><R to={`/settings?refund=${s.jobId}:${s.index}#refund`} className={g("border border-transparent px-3 py-2 text-[10px] uppercase tracking-[1.5px] font-medium", "text-ink-faint transition-colors duration-200 ease-move hover:text-ink-muted")}>Not right?</R>{["download", "share"].map(t => {
              const a = `lightbox:${t}:${s.jobId}:${s.index}`;
              const c = !!C[a];
              return <button onClick={() => {
                A(a);
                if (t === "download") {
                  z(s.original ?? s.display, s.style);
                } else {
                  H(s.display, s.style);
                }
              }} className={g("cursor-pointer border px-4 py-2 text-[10px] uppercase tracking-[1.5px] font-medium", "transition-[background-color,color,border-color,transform] duration-200 ease-move", c ? "scale-[0.97] border-gold-deep bg-gold-deep text-canvas" : t === "download" ? "border-gold-dark bg-gold-dark text-canvas hover:bg-gold-deep" : "border-line bg-canvas text-ink-muted hover:border-gold hover:text-gold-dark")} key={t}>{t === "download" ? "Download" : "Share"}</button>;
            })}</div></div></div></div>}<footer className="bg-surface py-10 sm:py-12 md:py-16 lg:py-20"><div className="max-w-[1280px] mx-auto px-5 sm:px-6 md:px-12 lg:px-16"><div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-4 sm:mb-8 md:gap-x-8 lg:gap-12"><R to="/privacy" className="text-ink-muted text-[10px] sm:text-[11px] tracking-[1.5px] uppercase transition-colors duration-150 ease-move hover:text-ink">PRIVACY</R><R to="/terms" className="text-ink-muted text-[10px] sm:text-[11px] tracking-[1.5px] uppercase transition-colors duration-150 ease-move hover:text-ink">TERMS OF SERVICE</R><a href="mailto:support@gehnaphoto.com" className="text-ink-muted text-[10px] sm:text-[11px] tracking-[1.5px] uppercase transition-colors duration-150 ease-move hover:text-ink">CONTACT</a></div><div className="text-center pt-5 sm:pt-6 border-t border-line"><p className="text-ink-muted text-[10px] sm:text-[11px] tracking-[1.5px] uppercase">© 2026 GEHNA PHOTO. ALL RIGHTS RESERVED.</p></div></div></footer></main>;
}
export { Ie as default };