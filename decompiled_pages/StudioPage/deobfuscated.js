import { H as ne, u as re, I as le, b as oe, J as H, r as p, A as S, j as e, c as z, q as A, z as M, t as ce, K as E, w as de } from "./index-BfjOhj2J.js";
import { R as _Component3 } from "./RefundRequestPanel-Bi7ZqxAH.js";
import { B as P } from "./button-DmV_w4RG.js";
import { C as V } from "./compare-slider-DyF2FnMU.js";
import { G as _Component2, w as xe } from "./watchJobs-CEULmx-S.js";
import { S as I } from "./skeleton-D9Lgo_Sm.js";
import { u as me } from "./useModalBehaviour-Dv5XUrCi.js";
import { d as j, t as ge, o as he } from "./imageVariants-jbAlJ6KT.js";
import "./collapse-B2TExWm1.js";
import "./spinner-CaF1Mtcm.js";
const fe = r => new Promise(f => setTimeout(f, r));
const W = {
  portrait_4_5: "4 / 5",
  catalogue_portrait: "3 / 4",
  instagram_square: "1 / 1",
  lookbook_landscape: "16 / 9",
  story_vertical: "9 / 16"
};
const be = {
  portrait_4_5: 4 / 5,
  catalogue_portrait: 3 / 4,
  instagram_square: 1,
  lookbook_landscape: 16 / 9,
  story_vertical: 9 / 16
};
const je = r => be[r ?? ""] ?? 4 / 5;
function ve(r) {
  return new Date(r).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short"
  });
}
function _Component({
  email: r,
  onSignOut: f
}) {
  return <main className="min-h-screen bg-canvas grid place-items-center px-6"><div className="max-w-md text-center space-y-5"><p className="text-[10px] uppercase tracking-[3px] text-ink-muted">Gehna Photo</p><h1 className="font-serif font-bold text-[32px] text-gold-dark leading-tight">This studio is private</h1><p className="text-[14px] text-ink-soft leading-relaxed">You're signed in as <span className="text-ink font-medium" data-ph-mask={true}>{r}</span>, which doesn't have access here. If you were invited with a different address, sign out and sign in with that one.</p><div className="flex flex-wrap justify-center gap-3"><P onClick={f}>Use another account</P><P variant="secondary" asChild={true}><a href={de("Hi! I need access to my Gehna Photo studio.")} target="_blank" rel="noopener noreferrer">Contact us</a></P></div></div></main>;
}
function Re() {
  var Y;
  const {
    slug: r = ""
  } = ne();
  const f = re();
  const F = le();
  const {
    user: u,
    logout: D,
    adjustCredits: X,
    refreshUser: Z
  } = oe();
  const d = H({
    queryKey: ["studio", r],
    queryFn: () => E.get(r),
    retry: (t, a) => (!(a instanceof S) || a.status !== 403) && t < 2,
    staleTime: 60000
  });
  const $ = H({
    queryKey: ["studio", r, "jobs"],
    queryFn: () => E.jobs(r, 60),
    enabled: d.isSuccess,
    staleTime: 15000,
    refetchInterval: t => (t.state.data ?? []).some(a => a.status === "processing" || a.status === "pending") ? 5000 : false
  });
  const [v, L] = p.useState(null);
  const [T, J] = p.useState(null);
  const [q, y] = p.useState([]);
  const [R, N] = p.useState([]);
  const [O, G] = p.useState(false);
  const [c, k] = p.useState(null);
  const Q = p.useRef(null);
  const ee = me(c !== null, () => k(null));
  const w = ((Y = d.data) == null ? undefined : Y.prompts) ?? [];
  const g = p.useMemo(() => [...new Set(w.map(t => t.jewellery_type))], [w]);
  const te = w.filter(t => t.jewellery_type === v);
  const x = w.find(t => t.id === T);
  p.useEffect(() => {
    if (g.length === 1 && !v) {
      L(g[0]);
    }
  }, [g, v]);
  p.useEffect(() => {
    if (d.data) {
      document.title = `${d.data.name} · Gehna Photo`;
    }
  }, [d.data]);
  if (d.isError && d.error instanceof S && d.error.status === 403) {
    return <_Component email={u == null ? undefined : u.email} onSignOut={async () => {
      await D();
      f("/login", {
        replace: true
      });
    }} />;
  }
  const m = q.filter(t => t.status === "ready");
  const C = (u == null ? undefined : u.credits) ?? 0;
  const B = t => {
    if (t == null || !t.length) {
      return;
    }
    const a = Array.from(t).slice(0, 20).map(n => ({
      id: crypto.randomUUID(),
      file: n,
      preview: URL.createObjectURL(n),
      url: null,
      status: "uploading"
    }));
    y(n => [...n, ...a]);
    for (const n of a) {
      A.upload(n.file).then(o => y(i => i.map(s => s.id === n.id ? {
        ...s,
        url: o.input_image_url,
        status: "ready"
      } : s))).catch(o => {
        y(i => i.map(s => s.id === n.id ? {
          ...s,
          status: "error"
        } : s));
        M.error(o instanceof S ? o.message : "Upload failed.");
      });
    }
  };
  const se = async () => {
    if (!x || m.length === 0 || O) {
      return;
    }
    if (m.length > C) {
      M.error(`You have ${C} credit${C === 1 ? "" : "s"} — this needs ${m.length}.`, {
        description: "Contact us to add more."
      });
      return;
    }
    G(true);
    const t = `${x.jewellery_type} · ${x.style_type}`;
    const a = m.map(i => ({
      slotId: i.id,
      preview: i.preview,
      promptLabel: t,
      outputFormat: x.output_format,
      status: "generating"
    }));
    N(i => [...a, ...i]);
    y([]);
    ce("studio_generation_submitted", {
      studio: r,
      photos: a.length
    });
    const n = [];
    await Promise.all(m.map(async i => {
      try {
        const s = await E.createJob(r, i.url, x.id);
        n.push({
          slotId: i.id,
          jobId: s.id
        });
        N(h => h.map(l => l.slotId === i.id ? {
          ...l,
          jobId: s.id
        } : l));
      } catch (s) {
        N(h => h.map(l => l.slotId === i.id ? {
          ...l,
          status: "failed",
          error: s instanceof S ? s.message : "Could not start."
        } : l));
      }
    }));
    G(false);
    const o = await xe(n, {
      fetchStatus: A.statusBatch,
      sleep: fe,
      onCompleted: (i, s) => N(h => h.map(l => l.slotId === i ? {
        ...l,
        status: "done",
        output: j(s)
      } : l)),
      onFailed: (i, s) => N(h => h.map(l => l.slotId === i ? {
        ...l,
        status: "failed",
        error: s instanceof Error ? s.message : "Failed."
      } : l)),
      onActiveCount: () => {}
    });
    if (o > 0) {
      X(-o);
    }
    Z();
    F.invalidateQueries({
      queryKey: ["studio", r, "jobs"]
    });
    F.invalidateQueries({
      queryKey: ["image-jobs"]
    });
  };
  const ae = async t => {
    var n;
    const a = he(t) ?? j(t);
    if (a) {
      try {
        const o = (((n = a.split("?")[0].match(/\.(png|webp|jpe?g)$/i)) == null ? undefined : n[1]) ?? "png").toLowerCase();
        const {
          download_url: i
        } = await A.downloadUrl(a, `${r}-${t.id.slice(0, 8)}.${o}`);
        if (!i) {
          throw new Error();
        }
        const s = document.createElement("a");
        s.href = i;
        s.rel = "noopener";
        document.body.appendChild(s);
        s.click();
        s.remove();
      } catch {
        window.open(a, "_blank", "noopener,noreferrer");
      }
    }
  };
  const ie = new Set(R.map(t => t.jobId).filter(Boolean));
  const U = ($.data ?? []).filter(t => !ie.has(t.id) || t.status === "completed");
  const _ = U.filter(t => t.status === "completed" && j(t));
  const b = c ? _.findIndex(t => t.id === c.id) : -1;
  const K = t => {
    const a = _[b + t];
    if (a) {
      k(a);
    }
  };
  return <div className="min-h-screen bg-canvas"><header className="border-b border-line"><div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-4"><div className="min-w-0">{d.data ? <p className="truncate font-serif font-bold text-[22px] text-gold-dark leading-tight">{d.data.name}</p> : <I className="h-6 w-48" />}<p className="text-[10px] uppercase tracking-[2.5px] text-ink-faint">Studio by Gehna Photo</p></div><div className="flex items-center gap-5 text-[12px] text-ink-muted"><span><span className="font-serif font-bold text-[20px] text-ink tabular-nums">{C}</span> credits</span><span className="hidden sm:inline" data-ph-mask={true}>{u == null ? undefined : u.email}</span><button onClick={async () => {
            await D();
            f("/login", {
              replace: true
            });
          }} className="text-[10px] uppercase tracking-[1.5px] hover:text-ink">Sign out</button></div></div></header><main id="main-content" className="mx-auto max-w-[1200px] space-y-16 px-6 py-10"><section className="space-y-8">{d.isLoading ? <div className="space-y-3"><I className="h-8 w-64" /><I className="h-12 w-full" /></div> : w.length === 0 ? <p className="py-12 text-center text-[14px] text-ink-muted">Your studio is being set up. Check back soon.</p> : <e.Fragment>{g.length > 1 && <div><p className="mb-3 text-[10px] uppercase tracking-[2.5px] text-ink-muted">1 · Jewellery type</p><div className="flex flex-wrap gap-2">{g.map(t => <button onClick={() => {
                L(t);
                J(null);
              }} className={z("border px-5 py-3 text-[13px] transition-colors", v === t ? "border-gold-dark bg-gold-dark text-canvas" : "border-line text-ink hover:border-gold")} key={t}>{t}</button>)}</div></div>}{v && <div><p className="mb-3 text-[10px] uppercase tracking-[2.5px] text-ink-muted">{g.length > 1 ? "2 · " : "1 · "}Style</p><div className="flex flex-wrap gap-2">{te.map(t => <button onClick={() => J(t.id)} className={z("border px-5 py-3 text-[13px] transition-colors", T === t.id ? "border-gold-dark bg-gold-dark text-canvas" : "border-line text-ink hover:border-gold")} key={t.id}>{t.style_type}</button>)}</div></div>}{x && <div className="space-y-4"><p className="text-[10px] uppercase tracking-[2.5px] text-ink-muted">{g.length > 1 ? "3 · " : "2 · "}Your photos</p><div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-8">{q.map(t => <div className="relative aspect-square overflow-hidden bg-surface" key={t.id}><img src={t.preview} alt="" className={z("absolute inset-0 h-full w-full object-cover", t.status !== "ready" && "opacity-50")} />{t.status === "uploading" && <span className="absolute inset-0 grid place-items-center text-[10px] uppercase tracking-[1px] text-ink">Uploading…</span>}{t.status === "error" && <span className="absolute inset-0 grid place-items-center text-[10px] uppercase tracking-[1px] text-destructive">Failed</span>}<button onClick={() => y(a => a.filter(n => n.id !== t.id))} aria-label="Remove photo" className="absolute right-1 top-1 grid size-6 place-items-center rounded-full bg-canvas/90 text-[12px] text-ink">×</button></div>)}<button type="button" onClick={() => {
                var t;
                if ((t = Q.current) == null) {
                  return undefined;
                } else {
                  return t.click();
                }
              }} onDragOver={t => t.preventDefault()} onDrop={t => {
                t.preventDefault();
                B(t.dataTransfer.files);
              }} className="grid aspect-square place-items-center border-2 border-dashed border-line bg-surface text-[11px] uppercase tracking-[1px] text-ink-muted hover:border-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">+ Add photos</button><input ref={Q} type="file" accept="image/jpeg,image/png,image/webp" multiple={true} className="hidden" onChange={t => {
                B(t.target.files);
                t.target.value = "";
              }} /></div><div className="flex flex-wrap items-center gap-4"><P size="lg" onClick={se} disabled={m.length === 0 || q.some(t => t.status === "uploading")} loading={O} loadingText="Starting">Create {m.length || ""} photo{m.length === 1 ? "" : "s"}</P><span className="text-[12px] text-ink-muted">{x.jewellery_type} · {x.style_type} · 1 credit per photo</span></div></div>}</e.Fragment>}{R.length > 0 && <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{R.map(t => <div className="overflow-hidden border border-line" key={t.slotId}><div className="relative bg-surface" style={{
              aspectRatio: W[t.outputFormat] ?? "4 / 5"
            }}>{t.status === "generating" && <div className="absolute inset-0"><_Component2 sourceUrl={t.preview} message="Creating your photo…" /></div>}{t.status === "done" && t.output && <V beforeSrc={t.preview} afterSrc={t.output} className="absolute inset-0 size-full" />}{t.status === "failed" && <div className="absolute inset-0 grid place-items-center px-6 text-center text-[12px] text-destructive">{t.error}</div>}</div><p className="px-3 py-2 text-[10px] uppercase tracking-[1.5px] text-ink-muted">{t.promptLabel}</p></div>)}</div>}</section><section className="space-y-4"><p className="text-[10px] uppercase tracking-[2.5px] text-ink-muted">Your studio photos</p>{$.isLoading ? <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">{Array.from({
            length: 5
          }).map((t, a) => <I variant="image" className="aspect-[4/5] w-full" key={a} />)}</div> : U.length === 0 ? <p className="text-[13px] text-ink-muted">Nothing yet — your photos will appear here.</p> : <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">{U.map(t => {
            const a = t.status === "completed" && j(t);
            const n = t.status === "failed";
            const o = `${t.garment_type ?? ""} · ${t.style}`;
            const i = <div className="relative aspect-[4/5] overflow-hidden bg-surface">{a ? <img src={ge(t) ?? ""} alt={o} loading="lazy" className="absolute inset-0 h-full w-full object-contain transition-transform duration-300 ease-move group-hover:scale-[1.02]" /> : n ? <div className="absolute inset-0 grid place-items-center px-4 text-center"><div><p className="text-[11px] font-medium text-destructive">Couldn't be created</p><p className="mt-1 text-[10px] text-ink-muted">No credit was used. Please try again.</p></div></div> : <div className="absolute inset-0"><img src={t.input_image_url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30 blur-[2px]" /><div className="absolute inset-0 grid place-items-center"><span className="bg-canvas/90 px-3 py-1.5 text-[10px] uppercase tracking-[1.5px] text-ink">Creating…</span></div></div>}</div>;
            const s = <div className="mt-2 flex items-baseline justify-between gap-2 text-left"><p className="truncate text-[11px] text-ink">{o}</p><p className="shrink-0 text-[10px] text-ink-faint">{ve(t.created_at)}</p></div>;
            if (a) {
              return <button onClick={() => k(t)} aria-label={`Open ${o}`} className="group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2" key={t.id}>{i}{s}</button>;
            } else {
              return <div key={t.id}>{i}{s}</div>;
            }
          })}</div>}</section><section id="refund" className="scroll-mt-24"><_Component3 jobs={$.data ?? []} /></section></main>{c && <div className="fixed inset-0 z-[120] flex items-center justify-center bg-ink/80 p-4" onClick={() => k(null)} role="dialog" aria-modal="true" aria-label="Photo"><div ref={ee} tabIndex={-1} onClick={t => t.stopPropagation()} className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden bg-canvas outline-none"><div className="flex items-center justify-between border-b border-line px-4 py-3"><p className="text-[11px] uppercase tracking-[1.5px] text-ink-muted">{c.garment_type} · {c.style}{_.length > 1 && b >= 0 && <span className="ml-3 normal-case tracking-normal text-ink-faint">{b + 1} of {_.length}</span>}</p><div className="flex items-center gap-2"><P size="sm" onClick={() => ae(c)}>Download</P><button onClick={() => k(null)} aria-label="Close" className="grid size-9 place-items-center rounded-full border border-line text-[18px] leading-none text-ink">×</button></div></div><div className="relative flex min-h-0 flex-1 items-center justify-center bg-surface p-3 sm:p-5">{j(c) && <V beforeSrc={c.input_image_url} afterSrc={j(c)} style={{
            aspectRatio: W[c.output_format ?? ""] ?? "4 / 5",
            width: `min(100%, calc((92vh - 7.5rem) * ${je(c.output_format)}))`
          }} />}{b > 0 && <button onClick={() => K(-1)} aria-label="Previous photo" className="absolute left-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-canvas/95 text-[18px] leading-none text-ink shadow-sm hover:bg-canvas">‹</button>}{b >= 0 && b < _.length - 1 && <button onClick={() => K(1)} aria-label="Next photo" className="absolute right-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-canvas/95 text-[18px] leading-none text-ink shadow-sm hover:bg-canvas">›</button>}</div></div></div>}</div>;
}
export { Re as default };