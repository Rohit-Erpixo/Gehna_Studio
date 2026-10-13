import { A as L, r as o, j as e, c as P, z as D, B as fe } from "./index-BfjOhj2J.js";
import { B as I } from "./button-DmV_w4RG.js";
import { C as _Component7 } from "./collapse-B2TExWm1.js";
import { C as _Component8 } from "./compare-slider-DyF2FnMU.js";
import { S as O } from "./skeleton-D9Lgo_Sm.js";
import { u as je } from "./useModalBehaviour-Dv5XUrCi.js";
import "./spinner-CaF1Mtcm.js";
const pe = "https://catalogai-4cjp.onrender.com";
const Y = "gp_admin_token";
const Q = "gp_admin_email";
function F() {
  try {
    const t = sessionStorage.getItem(Y);
    const s = sessionStorage.getItem(Q);
    if (t && s) {
      return {
        token: t,
        email: s
      };
    } else {
      return null;
    }
  } catch {
    return null;
  }
}
function be(t, s) {
  sessionStorage.setItem(Y, t);
  sessionStorage.setItem(Q, s);
}
function Z() {
  sessionStorage.removeItem(Y);
  sessionStorage.removeItem(Q);
}
class T extends Error {
  constructor() {
    super("Admin session expired");
    this.name = "AdminSessionExpired";
  }
}
async function _(t, s = {}) {
  const n = F();
  const a = {
    ...(s.body instanceof FormData ? {} : {
      "Content-Type": "application/json"
    }),
    ...s.headers
  };
  if (n) {
    a.Authorization = `Bearer ${n.token}`;
  }
  let i;
  try {
    i = await fetch(`${pe}${t}`, {
      ...s,
      headers: a
    });
  } catch (x) {
    throw new L(0, x instanceof Error ? x.message : "Network request failed");
  }
  if (i.status === 401 && !t.endsWith("/login")) {
    Z();
    throw new T();
  }
  if (!i.ok) {
    const x = await i.json().catch(() => ({}));
    throw new L(i.status, (x == null ? undefined : x.detail) ?? `HTTP ${i.status}`);
  }
  return i.json();
}
const w = {
  studios: () => _("/api/admin/studios"),
  studio: t => _(`/api/admin/studios/${t}`),
  createStudio: (t, s) => _("/api/admin/studios", {
    method: "POST",
    body: JSON.stringify({
      name: t,
      slug: s || null
    })
  }),
  updateStudio: (t, s) => _(`/api/admin/studios/${t}`, {
    method: "PATCH",
    body: JSON.stringify(s)
  }),
  uploadStudioImage: (t, s) => {
    const n = new FormData();
    n.append("file", s);
    return _(`/api/admin/studios/${t}/upload`, {
      method: "POST",
      body: n
    });
  },
  addPrompt: (t, s) => _(`/api/admin/studios/${t}/prompts`, {
    method: "POST",
    body: JSON.stringify(s)
  }),
  updatePrompt: (t, s) => _(`/api/admin/studios/prompts/${t}`, {
    method: "PATCH",
    body: JSON.stringify({
      ...s,
      ...(s.template_image_url === null ? {
        template_image_url: ""
      } : {})
    })
  }),
  reorderPrompts: (t, s) => _(`/api/admin/studios/${t}/prompts/reorder`, {
    method: "POST",
    body: JSON.stringify({
      ids: s
    })
  }),
  previewPrompt: t => _(`/api/admin/studios/prompts/${t}/preview`),
  addAccess: (t, s) => _(`/api/admin/studios/${t}/access`, {
    method: "POST",
    body: JSON.stringify({
      emails: s
    })
  }),
  removeAccess: (t, s) => _(`/api/admin/studios/${t}/access/${s}`, {
    method: "DELETE"
  }),
  startSandbox: (t, s) => _(`/api/admin/studios/${t}/sandbox`, {
    method: "POST",
    body: JSON.stringify(s)
  }),
  sandboxStatus: t => _(`/api/admin/studios/sandbox/${t}`),
  async login(t, s) {
    const n = await _("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({
        email: t,
        password: s
      })
    });
    be(n.token, n.email);
    return n;
  },
  me: () => _("/api/admin/me"),
  tickets: (t = "open") => _(`/api/admin/tickets?status=${t}`),
  ticket: t => _(`/api/admin/tickets/${t}`),
  activityStats: () => _("/api/admin/activity/stats"),
  activityJobs: (t = {}) => {
    const s = new URLSearchParams();
    if (t.limit) {
      s.set("limit", String(t.limit));
    }
    if (t.offset) {
      s.set("offset", String(t.offset));
    }
    if (t.status && t.status !== "all") {
      s.set("status", t.status);
    }
    if (t.user) {
      s.set("user", t.user);
    }
    const n = s.toString();
    return _(`/api/admin/activity/jobs${n ? "?" + n : ""}`);
  },
  insights: t => _(`/api/admin/insights?days=${t}`),
  users: (t = {}) => {
    const s = new URLSearchParams();
    if (t.limit) {
      s.set("limit", String(t.limit));
    }
    if (t.offset) {
      s.set("offset", String(t.offset));
    }
    if (t.q) {
      s.set("q", t.q);
    }
    if (t.stage && t.stage !== "all") {
      s.set("stage", t.stage);
    }
    const n = s.toString();
    return _(`/api/admin/users${n ? "?" + n : ""}`);
  },
  async exportUsers(t, s) {
    const n = F();
    const a = new URLSearchParams({
      stage: t
    });
    if (s) {
      a.set("q", s);
    }
    const i = await fetch(`${pe}/api/admin/users/export.csv?${a}`, {
      headers: n ? {
        Authorization: `Bearer ${n.token}`
      } : {}
    });
    if (i.status === 401) {
      Z();
      throw new T();
    }
    if (!i.ok) {
      throw new L(i.status, `HTTP ${i.status}`);
    }
    const x = URL.createObjectURL(await i.blob());
    const c = document.createElement("a");
    c.href = x;
    c.download = `gehna-users-${t}.csv`;
    c.click();
    URL.revokeObjectURL(x);
  },
  userCounts: t => _(`/api/admin/users/counts${t ? "?q=" + encodeURIComponent(t) : ""}`),
  signups: t => _(`/api/admin/signups?days=${t}`),
  fraud: () => _("/api/admin/fraud"),
  suspend: (t, s) => _(`/api/admin/users/${t}/suspend`, {
    method: "POST",
    body: JSON.stringify({
      reason: s
    })
  }),
  unsuspend: t => _(`/api/admin/users/${t}/unsuspend`, {
    method: "POST"
  }),
  resolve: (t, s, n, a) => _(`/api/admin/tickets/${t}/resolve`, {
    method: "POST",
    body: JSON.stringify({
      decision: s,
      credits: n,
      note: a
    })
  })
};
const ye = [7, 30, 90];
const V = {
  google: "Google",
  email: "Email link",
  other: "Other"
};
const te = {
  google: "bg-gold-dark",
  email: "bg-gold",
  other: "bg-line"
};
function q(t, s) {
  if (s) {
    return `${Math.round(t / s * 100)}%`;
  } else {
    return "—";
  }
}
function J(t) {
  return new Date(t).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short"
  });
}
function se(t) {
  return new Date(t).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function ue(t, s, n) {
  const [a, i] = o.useState(null);
  const [x, c] = o.useState(null);
  o.useEffect(() => {
    let j = true;
    i(null);
    c(null);
    t().then(f => {
      if (j) {
        i(f);
      }
    }).catch(f => {
      if (j) {
        if (f instanceof T) {
          n();
        } else {
          c(f instanceof L ? f.message : "Could not load.");
        }
      }
    });
    return () => {
      j = false;
    };
  }, s);
  return {
    data: a,
    error: x
  };
}
function _Component({
  rows: t,
  title: s
}) {
  const n = t.reduce((a, i) => a + i.users, 0);
  return <div><p className="mb-3 text-[9px] uppercase tracking-[2px] text-ink-muted">{s}</p><div className="mb-3 flex h-3 w-full overflow-hidden bg-surface">{t.map(a => <div className={te[a.provider]} style={{
        width: `${n ? a.users / n * 100 : 0}%`
      }} title={`${V[a.provider]}: ${a.users}`} key={a.provider} />)}</div><table className="w-full text-[12px]"><thead className="text-[9px] uppercase tracking-[1.5px] text-ink-muted"><tr><th className="py-1 text-left font-normal">Method</th><th className="py-1 text-right font-normal">Signups</th><th className="py-1 text-right font-normal">Share</th><th className="py-1 text-right font-normal">Made an image</th><th className="py-1 text-right font-normal">Paid</th></tr></thead><tbody>{t.map(a => <tr className="border-t border-line" key={a.provider}><td className="py-2 text-ink"><span className={P("mr-2 inline-block size-2 align-middle", te[a.provider])} />{V[a.provider]}</td><td className="py-2 text-right font-serif text-[16px] font-bold tabular-nums text-ink">{a.users.toLocaleString("en-IN")}</td><td className="py-2 text-right tabular-nums text-ink-muted">{q(a.users, n)}</td><td className="py-2 text-right tabular-nums text-ink-muted">{a.generated} <span className="text-ink-faint">({q(a.generated, a.users)})</span></td><td className="py-2 text-right tabular-nums text-ink-muted">{a.paid} <span className="text-ink-faint">({q(a.paid, a.users)})</span></td></tr>)}</tbody></table></div>;
}
function _Component9({
  onExpired: t
}) {
  const [s, n] = o.useState(30);
  const {
    data: a,
    error: i
  } = ue(() => w.signups(s), [s], t);
  const x = a ? Math.max(1, ...a.daily.map(c => c.email + c.google + c.other)) : 1;
  return <div className="space-y-10"><div className="flex flex-wrap gap-1">{ye.map(c => <button onClick={() => n(c)} className={P("px-3 py-1.5 text-[10px] uppercase tracking-[1.5px]", s === c ? "bg-gold-dark text-canvas" : "text-ink-muted hover:text-ink")} key={c}>Last {c} days</button>)}</div>{i && <p className="text-[12px] text-destructive">{i}</p>}{!a && !i && <O className="h-72 w-full" />}{a && !a.available && <p className="text-[13px] text-ink-muted">Sign-in method data is only available against the Supabase database.</p>}{(a == null ? undefined : a.available) && <e.Fragment><div className="grid gap-10 lg:grid-cols-2"><_Component rows={a.window} title={`Last ${s} days`} /><_Component rows={a.all_time} title="All time" /></div><section><p className="mb-2 text-[9px] uppercase tracking-[2px] text-ink-muted">Signups per day (IST) · <span className="text-gold-dark">■</span> Google <span className="text-gold">■</span> Email link</p><div className="flex h-36 items-end gap-px border-b border-line">{a.daily.map(c => <div className="flex h-full flex-1 flex-col justify-end" title={`${J(c.day)}: ${c.google} Google, ${c.email} email${c.other ? `, ${c.other} other` : ""}`} key={c.day}><div className="bg-gold" style={{
              height: `${c.email / x * 100}%`
            }} /><div className="bg-gold-dark" style={{
              height: `${c.google / x * 100}%`
            }} /></div>)}</div><div className="mt-1 flex justify-between text-[10px] text-ink-faint"><span>{a.daily[0] && J(a.daily[0].day)}</span><span>{a.daily.length > 0 && J(a.daily[a.daily.length - 1].day)}</span></div></section></e.Fragment>}</div>;
}
function K({
  userId: t,
  email: s,
  suspended: n,
  onChange: a,
  onExpired: i
}) {
  const [x, c] = o.useState(false);
  const j = async f => {
    f.stopPropagation();
    let u = "";
    if (n) {
      if (!window.confirm(`Lift the suspension on ${s}?`)) {
        return;
      }
    } else {
      const m = window.prompt(`Suspend ${s}?

Their remaining credits are removed, they can't earn free credits, and they'll see a 'flagged' notice asking them to buy a plan. They can still sign in and pay. Reason (for your records):`, "Multiple accounts for free credits");
      if (m === null) {
        return;
      }
      u = m;
    }
    c(true);
    try {
      const m = n ? await w.unsuspend(t) : await w.suspend(t, u);
      a(!n, m.credits);
      D.success(n ? "Suspension lifted" : "Account suspended", {
        description: `${s} · ${m.credits_changed > 0 ? `${m.credits_changed} credits restored` : m.credits_changed < 0 ? `${-m.credits_changed} credits removed` : "no credits to change"}`
      });
    } catch (m) {
      if (m instanceof T) {
        i();
      } else {
        D.error(m instanceof L ? m.message : "Could not update the account.");
      }
    } finally {
      c(false);
    }
  };
  return <button type="button" onClick={j} disabled={x} className={P("whitespace-nowrap px-2 py-1 text-[9px] uppercase tracking-[1.5px] disabled:opacity-50", n ? "border border-line text-ink-muted hover:text-ink" : "border border-destructive/40 text-destructive hover:bg-destructive hover:text-canvas")}>{x ? "…" : n ? "Unsuspend" : "Suspend"}</button>;
}
function Ne({
  score: t
}) {
  return <span className={P("inline-block min-w-9 px-1.5 py-0.5 text-center text-[11px] font-bold tabular-nums", t >= 60 ? "bg-destructive text-canvas" : t >= 35 ? "bg-destructive/15 text-destructive" : "bg-gold/15 text-gold-dark")}>{t}</span>;
}
function _Component0({
  onExpired: t,
  onOpenUser: s
}) {
  const [n, a] = o.useState("accounts");
  const {
    data: i,
    error: x
  } = ue(() => w.fraud(), [], t);
  const [c, j] = o.useState({});
  const [f, u] = o.useState({});
  const m = d => (p, C) => {
    j(S => ({
      ...S,
      [d]: p
    }));
    u(S => ({
      ...S,
      [d]: C
    }));
  };
  return <div className="space-y-6"><div className="border border-line bg-surface p-4 text-[12px] leading-relaxed text-ink-muted">A score ranks what is worth a look; it is not proof. Many people in India share an IP through their mobile network, so a shared IP alone scores low. High scores come from combinations: the same IP <em>and</em> device, signups minutes apart, the same Gmail written two ways, or a throwaway email domain. IPs come from active login sessions, so accounts that signed out have none. Suspending does not block anyone: it removes their credits, stops free credits, and shows them a notice asking them to buy a plan. Unsuspend gives the credits back.</div><div className="flex gap-1">{["accounts", "ips"].map(d => <button onClick={() => a(d)} className={P("px-3 py-1.5 text-[10px] uppercase tracking-[1.5px]", n === d ? "bg-gold-dark text-canvas" : "text-ink-muted hover:text-ink")} key={d}>{d === "accounts" ? `Flagged accounts${i ? ` ${i.users.length}` : ""}` : `Shared IPs${i ? ` ${i.clusters.length}` : ""}`}</button>)}</div>{x && <p className="text-[12px] text-destructive">{x}</p>}{!i && !x && <O className="h-72 w-full" />}{i && !i.available && <p className="text-[13px] text-ink-muted">Fraud signals are only available against the Supabase database.</p>}{(i == null ? undefined : i.available) && n === "accounts" && (i.users.length === 0 ? <p className="py-12 text-center text-[13px] text-ink-muted">Nothing suspicious right now.</p> : <div className="overflow-x-auto border border-line"><table className="w-full min-w-[820px] text-left text-[12px]"><thead className="bg-surface text-[9px] uppercase tracking-[1.5px] text-ink-muted"><tr><th className="px-3 py-2 font-normal">Score</th><th className="px-3 py-2 font-normal">Account</th><th className="px-3 py-2 font-normal">Why</th><th className="px-3 py-2 font-normal">Linked to</th><th className="px-3 py-2 text-right font-normal">Group total</th><th className="px-3 py-2 text-right font-normal">Images</th><th className="px-3 py-2 text-right font-normal">Credits</th><th className="px-3 py-2 font-normal" /></tr></thead><tbody>{i.users.map(d => <tr onClick={() => s(d.email)} className="cursor-pointer border-t border-line align-top hover:bg-gold/10" title="See this user's images" key={d.id}><td className="px-3 py-2"><Ne score={d.score} /></td><td className="px-3 py-2"><p className="text-ink">{d.email}{(c[d.id] ?? d.suspended) && <span className="ml-2 bg-destructive/10 px-1.5 py-0.5 text-[9px] uppercase tracking-[1px] text-destructive">Suspended</span>}</p><p className="text-[10px] text-ink-faint">{V[d.provider] ?? d.provider} · joined {se(d.created_at)}{d.paid ? " · paid" : ""}{d.phone ? ` · +${d.phone}` : ""}</p></td><td className="px-3 py-2 text-ink-muted"><ul className="space-y-0.5">{d.reasons.map(p => <li key={p}>{p}</li>)}</ul></td><td className="px-3 py-2 text-[11px] text-ink-faint">{d.related.join(", ") || "—"}</td><td className="px-3 py-2 text-right text-[11px] tabular-nums text-ink-muted whitespace-nowrap"><span className="font-medium text-ink">{d.group_accounts}</span> IDs<br />{d.group_images} images · {d.group_credits} credits</td><td className="px-3 py-2 text-right tabular-nums text-ink">{d.jobs}</td><td className="px-3 py-2 text-right tabular-nums text-ink-muted">{f[d.id] ?? d.credits}</td><td className="px-3 py-2 text-right"><K userId={d.id} email={d.email} onExpired={t} suspended={c[d.id] ?? d.suspended} onChange={m(d.id)} /></td></tr>)}</tbody></table></div>)}{(i == null ? undefined : i.available) && n === "ips" && (i.clusters.length === 0 ? <p className="py-12 text-center text-[13px] text-ink-muted">No IP is shared by more than one account.</p> : <div className="space-y-4">{i.clusters.map(d => <div className="border border-line" key={d.ip}><div className="flex flex-wrap items-baseline justify-between gap-2 bg-surface px-4 py-2 text-[12px]"><span className="font-mono text-ink">{d.ip}</span><span className="text-ink-muted">{d.accounts} accounts · {d.images} images · {d.credits} credits left · {d.devices} device{d.devices !== 1 ? "s" : ""} · signups span {d.span_minutes < 120 ? `${d.span_minutes} min` : `${Math.round(d.span_minutes / 1440)} days`}{d.devices === 1 && <span className="ml-2 font-medium text-destructive">same device</span>}</span></div><ul>{d.members.map(p => <li className="flex items-center gap-3 border-t border-line px-4 py-2 text-[12px] hover:bg-gold/10" key={p.email}><button onClick={() => s(p.email)} className="flex flex-1 flex-wrap justify-between gap-2 text-left text-[12px]"><span className="text-ink">{p.email}{(c[p.id] ?? p.suspended) && <span className="ml-2 bg-destructive/10 px-1.5 py-0.5 text-[9px] uppercase tracking-[1px] text-destructive">Suspended</span>}</span><span className="tabular-nums text-ink-muted">joined {se(p.created_at)} · {p.jobs} images · {f[p.id] ?? p.credits} credits{p.paid ? " · paid" : ""}</span></button><K userId={p.id} email={p.email} onExpired={t} suspended={c[p.id] ?? p.suspended} onChange={m(p.id)} /></li>)}</ul></div>)}</div>)}</div>;
}
const we = [7, 30, 90];
function H(t, s) {
  if (s) {
    return Math.round(t / s * 100);
  } else {
    return 0;
  }
}
function B(t) {
  return new Date(t).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short"
  });
}
function _Component2({
  active: t,
  onClick: s,
  children: n
}) {
  return <button onClick={s} className={P("px-3 py-1.5 text-[10px] uppercase tracking-[1.5px] transition-colors", t ? "bg-gold-dark text-canvas" : "text-ink-muted hover:text-ink")}>{n}</button>;
}
function U({
  title: t,
  sub: s
}) {
  return <div className="mb-4"><h2 className="font-serif font-bold text-[20px] text-ink">{t}</h2>{s && <p className="text-[12px] text-ink-muted">{s}</p>}</div>;
}
const _e = {
  generated: "never_generated",
  paid: "generated_not_paid"
};
function _Component3({
  steps: t,
  onSeeWho: s
}) {
  var x;
  const n = ((x = t[0]) == null ? undefined : x.count) ?? 0;
  let a = -1;
  let i = 0;
  t.forEach((c, j) => {
    if (j === 0) {
      return;
    }
    const f = t[j - 1].count - c.count;
    if (f > i) {
      i = f;
      a = j;
    }
  });
  return <ol className="space-y-3">{t.map((c, j) => {
      const f = j > 0 ? t[j - 1].count : null;
      const u = f !== null ? H(c.count, f) : 100;
      const m = _e[c.key];
      return <li key={c.key}><div className="flex items-baseline justify-between gap-3 text-[12px]"><span className="text-ink">{c.label}</span><span className="tabular-nums text-ink-muted"><span className="font-serif font-bold text-[18px] text-ink">{c.count.toLocaleString("en-IN")}</span>{n > 0 && <span className="ml-2">{H(c.count, n)}%</span>}</span></div><div className="mt-1 h-3 w-full bg-surface"><div className="h-full bg-gold-dark transition-[width]" style={{
            width: `${n ? Math.max(H(c.count, n), c.count ? 1 : 0) : 0}%`
          }} /></div>{f !== null && <p className={P("mt-1 text-[11px]", j === a ? "text-destructive" : "text-ink-faint")}>{f - c.count > 0 ? `${(f - c.count).toLocaleString("en-IN")} dropped here (${100 - u}%)` : "No drop"}{j === a && " · biggest drop"}{m && s && f - c.count > 0 && <button onClick={() => s(m)} className="ml-2 text-[11px] underline hover:text-ink">see who</button>}</p>}</li>;
    })}</ol>;
}
function W({
  points: t,
  field: s,
  label: n
}) {
  const a = Math.max(1, ...t.map(x => x[s]));
  const i = t.reduce((x, c) => x + c[s], 0);
  return <div><div className="mb-2 flex items-baseline justify-between"><p className="text-[9px] uppercase tracking-[2px] text-ink-muted">{n}</p><p className="font-serif font-bold text-[18px] text-ink tabular-nums">{s === "revenue_inr" ? `₹${Math.round(i).toLocaleString("en-IN")}` : i.toLocaleString("en-IN")}</p></div><div className="flex h-28 items-end gap-px border-b border-line">{t.map(x => <div title={`${B(x.day)}: ${s === "revenue_inr" ? "₹" + Math.round(x[s]) : x[s]}${s === "generations" && x.failed ? ` (${x.failed} failed)` : ""}`} className="flex-1 bg-gold-dark/80 hover:bg-gold-dark" style={{
        height: `${x[s] / a * 100}%`,
        minHeight: x[s] ? 2 : 0
      }} key={x.day} />)}</div><div className="mt-1 flex justify-between text-[10px] text-ink-faint"><span>{t[0] && B(t[0].day)}</span><span>{t.length > 0 && B(t[t.length - 1].day)}</span></div></div>;
}
function _Component4({
  title: t,
  rows: s
}) {
  const n = Math.max(1, ...s.map(a => a.count));
  return <div><p className="mb-3 text-[9px] uppercase tracking-[2px] text-ink-muted">{t}</p>{s.length === 0 ? <p className="text-[12px] text-ink-faint">Nothing yet.</p> : <ul className="space-y-2">{s.map(a => <li className="text-[12px]" key={a.name}><div className="flex justify-between gap-2"><span className="truncate capitalize text-ink">{a.name.replace(/_/g, " ")}</span><span className="tabular-nums text-ink-muted">{a.count}</span></div><div className="mt-0.5 h-1.5 bg-surface"><div className="h-full bg-gold" style={{
            width: `${a.count / n * 100}%`
          }} /></div></li>)}</ul>}</div>;
}
function Se({
  onExpired: t,
  onSeeWho: s
}) {
  const [n, a] = o.useState(30);
  const [i, x] = o.useState(null);
  const [c, j] = o.useState(null);
  o.useEffect(() => {
    let u = true;
    x(null);
    j(null);
    w.insights(n).then(m => {
      if (u) {
        x(m);
      }
    }).catch(m => {
      if (u) {
        if (m instanceof T) {
          t();
        } else {
          j(m instanceof L ? m.message : "Could not load insights.");
        }
      }
    });
    return () => {
      u = false;
    };
  }, [n, t]);
  const f = i == null ? undefined : i.web_funnel;
  return <div className="space-y-10"><div className="flex flex-wrap items-center gap-1">{we.map(u => <_Component2 active={n === u} onClick={() => a(u)} key={u}>Last {u} days</_Component2>)}</div>{c && <p className="text-[12px] text-destructive">{c}</p>}{!i && !c && <div className="grid gap-8 lg:grid-cols-2"><O className="h-72 w-full" /><O className="h-72 w-full" /></div>}{i && <e.Fragment><div className="grid gap-10 lg:grid-cols-2"><section><U title="After signup" sub={`People who signed up in the last ${n} days, and how far they got. Exact, from the database.`} /><_Component3 steps={i.funnel} onSeeWho={s} /></section><section><U title="Before signup" sub={`Unique people per step in the last ${n} days, from PostHog. Ad blockers hide some visitors.`} />{f != null && f.configured && f.steps.length > 0 ? <_Component3 steps={f.steps} /> : <div className="border border-line bg-surface p-5 text-[12px] text-ink-muted">{(f == null ? undefined : f.error) ?? <e.Fragment><p className="text-ink">PostHog isn't connected for reading yet.</p><p className="mt-1">Set <code>POSTHOG_PERSONAL_API_KEY</code> (a personal key with only the <em>query:read</em> scope) and <code>POSTHOG_PROJECT_ID</code> on the backend to see visitors who left before signing up.</p></e.Fragment>}</div>}</section></div><section><U title="Day by day" sub="IST. Hover a bar for the exact number." /><div className="grid gap-8 md:grid-cols-3"><W points={i.daily} field="signups" label="Signups" /><W points={i.daily} field="generations" label="Generations" /><W points={i.daily} field="revenue_inr" label="Revenue" /></div></section><section><U title="Images per account" sub={`All accounts, all time. Average ${i.avg_images_per_user} per account, ${i.avg_images_per_active_user} among accounts that made at least one.`} /><div className="max-w-xl"><_Component4 title="Finished images → accounts" rows={i.images_per_user.map(u => ({
            name: `${u.name} image${u.name === "1" ? "" : "s"}`,
            count: u.count
          }))} /></div></section><section><U title="What people make" sub={`All generations in the last ${n} days.`} /><div className="grid gap-8 sm:grid-cols-3"><_Component4 title="Styles" rows={i.top_styles} /><_Component4 title="Jewellery" rows={i.top_jewellery} /><_Component4 title="Channel" rows={i.channels} /></div></section></e.Fragment>}</div>;
}
const Ce = [{
  key: "all",
  label: "All"
}, {
  key: "never_generated",
  label: "Never uploaded"
}, {
  key: "generated_not_paid",
  label: "Used, not paid"
}, {
  key: "paid",
  label: "Paid"
}, {
  key: "has_phone",
  label: "Has phone"
}];
const ie = 50;
function $e(t) {
  if (!t) {
    return "—";
  }
  const s = Math.floor((Date.now() - new Date(t).getTime()) / 86400000);
  if (s <= 0) {
    return "today";
  } else if (s === 1) {
    return "yesterday";
  } else {
    return `${s}d ago`;
  }
}
function Pe({
  initialStage: t,
  onExpired: s,
  onOpenUser: n
}) {
  const [a, i] = o.useState(t);
  const [x, c] = o.useState("");
  const [j, f] = o.useState("");
  const [u, m] = o.useState(null);
  const [d, p] = o.useState(null);
  const [C, S] = o.useState(false);
  const [l, y] = o.useState(false);
  const [N, h] = o.useState(null);
  const v = o.useCallback(async r => {
    y(true);
    h(null);
    try {
      const k = await w.users({
        limit: ie,
        offset: r,
        q: j || undefined,
        stage: a
      });
      m(b => r === 0 || !b ? k : [...b, ...k]);
      S(k.length === ie);
    } catch (k) {
      if (k instanceof T) {
        s();
      } else {
        h(k instanceof L ? k.message : "Could not load users.");
      }
    } finally {
      y(false);
    }
  }, [j, a, s]);
  o.useEffect(() => {
    m(null);
    v(0);
  }, [v]);
  o.useEffect(() => {
    let r = true;
    w.userCounts(j || undefined).then(k => {
      if (r) {
        p(k);
      }
    }).catch(k => {
      if (r && k instanceof T) {
        s();
      }
    });
    return () => {
      r = false;
    };
  }, [j, s]);
  const g = d == null ? undefined : d[a];
  const $ = r => {
    r.preventDefault();
    f(x.trim());
  };
  return <div className="space-y-6"><div className="flex flex-wrap items-center gap-1">{Ce.map(r => <_Component2 active={a === r.key} onClick={() => i(r.key)} key={r.key}>{r.label}{d && <span className="ml-1.5 tabular-nums opacity-70">{d[r.key].toLocaleString("en-IN")}</span>}</_Component2>)}<button type="button" onClick={() => w.exportUsers(a, j || undefined).catch(r => {
        if (r instanceof T) {
          s();
        } else {
          h("Could not download.");
        }
      })} className="ml-auto border border-line px-3 py-1.5 text-[10px] uppercase tracking-[1.5px] text-ink-muted hover:text-ink">Download CSV</button><form onSubmit={$} className="flex items-center gap-2"><input type="search" value={x} onChange={r => c(r.target.value)} placeholder="Email or phone…" className="w-56 border border-line bg-canvas px-3 py-1.5 text-[12px] text-ink focus:outline-none focus:border-gold-dark" /><button type="submit" className="px-3 py-1.5 text-[10px] uppercase tracking-[1.5px] text-ink-muted hover:text-ink">Go</button></form></div>{N && <p className="text-[12px] text-destructive">{N}</p>}{u === null ? <div className="space-y-2">{Array.from({
        length: 8
      }).map((r, k) => <O className="h-10 w-full" key={k} />)}</div> : u.length === 0 ? <p className="py-12 text-center text-[13px] text-ink-muted">Nobody here.</p> : <div className="overflow-x-auto border border-line"><table className="w-full min-w-[720px] text-left text-[12px]"><thead className="bg-surface text-[9px] uppercase tracking-[1.5px] text-ink-muted"><tr><th className="px-3 py-2 font-normal">User</th><th className="px-3 py-2 font-normal">Joined</th><th className="px-3 py-2 font-normal text-right">Images</th><th className="px-3 py-2 font-normal text-right">Failed</th><th className="px-3 py-2 font-normal">Last active</th><th className="px-3 py-2 font-normal text-right">Credits</th><th className="px-3 py-2 font-normal text-right">Paid</th><th className="px-3 py-2 font-normal" /></tr></thead><tbody>{u.map(r => <tr onClick={() => n(r.email)} className="cursor-pointer border-t border-line hover:bg-gold/10" title="See this user's images" key={r.id}><td className="px-3 py-2"><p className="text-ink">{r.email}{r.suspended_at && <span className="ml-2 bg-destructive/10 px-1.5 py-0.5 text-[9px] uppercase tracking-[1px] text-destructive" title={r.suspended_reason ?? ""}>Suspended</span>}</p>{r.whatsapp_number && <p className="text-[10px] text-ink-faint">+{r.whatsapp_number}</p>}</td><td className="px-3 py-2 text-ink-muted">{B(r.created_at)}</td><td className="px-3 py-2 text-right tabular-nums text-ink">{r.jobs_completed}</td><td className={P("px-3 py-2 text-right tabular-nums", r.jobs_failed ? "text-destructive" : "text-ink-faint")}>{r.jobs_failed}</td><td className="px-3 py-2 text-ink-muted">{$e(r.last_job_at)}</td><td className="px-3 py-2 text-right tabular-nums text-ink-muted">{r.credits}</td><td className="px-3 py-2 text-right tabular-nums text-ink">{r.paid_inr ? `₹${Math.round(r.paid_inr).toLocaleString("en-IN")}` : "—"}</td><td className="px-3 py-2 text-right"><K userId={r.id} email={r.email} suspended={!!r.suspended_at} onExpired={s} onChange={(k, b) => m(E => (E == null ? undefined : E.map(A => A.id === r.id ? {
                ...A,
                credits: b,
                suspended_at: k ? new Date().toISOString() : null
              } : A)) ?? null)} /></td></tr>)}</tbody></table></div>}{u && u.length > 0 && <p className="text-center text-[12px] text-ink-muted tabular-nums">Showing {u.length.toLocaleString("en-IN")}{g !== undefined && <e.Fragment> of {g.toLocaleString("en-IN")}</e.Fragment>} users</p>}{C && u && <div className="text-center"><button disabled={l} onClick={() => v(u.length)} className="px-4 py-2 text-[10px] uppercase tracking-[1.5px] text-ink-muted hover:text-ink disabled:opacity-50">{l ? "Loading…" : "Load more"}</button></div>}</div>;
}
const he = [{
  key: "portrait_4_5",
  label: "Product page 4:5"
}, {
  key: "catalogue_portrait",
  label: "Catalogue 3:4"
}, {
  key: "instagram_square",
  label: "Square 1:1"
}, {
  key: "lookbook_landscape",
  label: "Landscape 16:9"
}, {
  key: "story_vertical",
  label: "Story 9:16"
}];
const Ae = {
  prompt_text: "",
  jewellery_type: "",
  style_type: "",
  output_format: "portrait_4_5",
  template_image_url: null
};
const Te = typeof window !== "undefined" ? window.location.origin : "https://gehnaphoto.com";
function Le(t) {
  return o.useCallback(async (s, n = "Something went wrong.") => {
    try {
      return await s();
    } catch (a) {
      if (a instanceof T) {
        t();
      } else {
        D.error(a instanceof L ? a.message : n);
      }
      return null;
    }
  }, [t]);
}
function _Component5({
  studioId: t,
  url: s,
  onChange: n,
  label: a,
  call: i
}) {
  const x = o.useRef(null);
  const [c, j] = o.useState(false);
  const f = async u => {
    if (!u) {
      return;
    }
    j(true);
    const m = await i(() => w.uploadStudioImage(t, u), "Upload failed.");
    j(false);
    if (m) {
      n(m.url);
    }
  };
  return <div className="flex items-center gap-3"><button type="button" onClick={() => {
      var u;
      if ((u = x.current) == null) {
        return undefined;
      } else {
        return u.click();
      }
    }} className="relative grid size-20 shrink-0 place-items-center overflow-hidden border border-dashed border-line bg-surface text-[10px] uppercase tracking-[1px] text-ink-muted hover:border-gold-dark">{s ? <img src={s} alt="" className="absolute inset-0 h-full w-full object-cover" /> : c ? "…" : "+ Add"}</button><div className="min-w-0 text-[11px] text-ink-muted"><p className="text-ink text-[12px]">{a}</p>{s ? <button type="button" onClick={() => n(null)} className="mt-1 text-[11px] text-destructive hover:underline">Remove</button> : <p className="mt-0.5">JPG, PNG or WEBP</p>}</div><input ref={x} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={u => {
      var m;
      f((m = u.target.files) == null ? undefined : m[0]);
      u.target.value = "";
    }} /></div>;
}
function _Component6({
  studio: t,
  prompt: s,
  labels: n,
  onSaved: a,
  onCancel: i,
  call: x
}) {
  const [c, j] = o.useState(s ? {
    prompt_text: s.prompt_text,
    jewellery_type: s.jewellery_type,
    style_type: s.style_type,
    output_format: s.output_format,
    template_image_url: s.template_image_url
  } : Ae);
  const [f, u] = o.useState(false);
  const [m, d] = o.useState(null);
  const [p, C] = o.useState(null);
  const [S, l] = o.useState(false);
  const y = (g, $) => j(r => ({
    ...r,
    [g]: $
  }));
  const N = c.prompt_text.trim().length >= 10 && c.jewellery_type.trim() && c.style_type.trim();
  const h = async g => {
    g.preventDefault();
    if (!N) {
      return;
    }
    u(true);
    const $ = s ? await x(() => w.updatePrompt(s.id, c), "Could not save prompt.") : await x(() => w.addPrompt(t.id, c), "Could not add prompt.");
    u(false);
    if ($) {
      D.success(s ? "Prompt saved" : "Prompt added");
      a($);
    }
  };
  o.useEffect(() => {
    if (!p || p.status !== "running") {
      return;
    }
    const g = window.setTimeout(async () => {
      const $ = await x(() => w.sandboxStatus(p.id));
      if ($) {
        C($);
      }
    }, 3000);
    return () => window.clearTimeout(g);
  }, [p, x]);
  const v = async () => {
    if (!m || !N) {
      return;
    }
    const g = await x(() => w.startSandbox(t.id, {
      ...c,
      input_image_url: m
    }), "Could not start the test.");
    if (g) {
      C(g);
    }
  };
  return <form onSubmit={h} className="space-y-5 border border-gold-dark/40 bg-[#fefdf8] p-5"><div className="flex items-center justify-between"><p className="font-serif font-bold text-[20px] text-gold-dark">{s ? "Edit prompt" : "New prompt"}</p><button type="button" onClick={i} className="text-[10px] uppercase tracking-[1.5px] text-ink-muted hover:text-ink">Close</button></div><div className="grid grid-cols-1 gap-4 md:grid-cols-3"><label className="block"><span className="text-[9px] uppercase tracking-[1.8px] text-ink-muted">Jewellery type (client sees)</span><input list="studio-jewellery" value={c.jewellery_type} onChange={g => y("jewellery_type", g.target.value)} placeholder="e.g. Necklace" maxLength={80} className="mt-1 w-full border border-line bg-canvas px-3 py-2 text-[13px] focus:outline-none focus:border-gold-dark" /><datalist id="studio-jewellery">{n.jewellery.map(g => <option value={g} key={g} />)}</datalist></label><label className="block"><span className="text-[9px] uppercase tracking-[1.8px] text-ink-muted">Style type (client sees)</span><input list="studio-style" value={c.style_type} onChange={g => y("style_type", g.target.value)} placeholder="e.g. Velvet Bust" maxLength={80} className="mt-1 w-full border border-line bg-canvas px-3 py-2 text-[13px] focus:outline-none focus:border-gold-dark" /><datalist id="studio-style">{n.style.map(g => <option value={g} key={g} />)}</datalist></label><label className="block"><span className="text-[9px] uppercase tracking-[1.8px] text-ink-muted">Output size</span><select value={c.output_format} onChange={g => y("output_format", g.target.value)} className="mt-1 w-full border border-line bg-canvas px-3 py-2 text-[13px] focus:outline-none focus:border-gold-dark">{he.map(g => <option value={g.key} key={g.key}>{g.label}</option>)}</select></label></div><label className="block"><span className="text-[9px] uppercase tracking-[1.8px] text-ink-muted">Prompt (private — never shown to the client)</span><textarea value={c.prompt_text} onChange={g => y("prompt_text", g.target.value)} rows={6} maxLength={8000} placeholder="Describe the scene: surface, props, lighting, camera angle, mood…" className="mt-1 w-full resize-y border border-line bg-canvas px-3 py-2 text-[13px] leading-relaxed focus:outline-none focus:border-gold-dark" /><span className="text-[10px] text-ink-faint">We always add: preserve the exact jewellery, follow the template scene (if any), and the output size.</span></label><_Component5 studioId={t.id} url={c.template_image_url} onChange={g => y("template_image_url", g)} call={x} label="Template image (optional) — the scene to recreate, with the client's jewellery swapped in" /><div className="flex flex-wrap gap-3"><I type="submit" loading={f} loadingText="Saving" disabled={!N}>{s ? "Save changes" : "Add prompt"}</I><I type="button" variant="secondary" onClick={i}>Cancel</I></div><div className="border-t border-line pt-5 space-y-3"><p className="text-[10px] uppercase tracking-[2px] text-ink-muted">Try it on a test photo <span className="normal-case tracking-normal text-ink-faint">— uses the draft above, saves nothing, no credits (Gemini is still billed)</span></p><div className="flex flex-wrap items-center gap-4"><_Component5 studioId={t.id} url={m} onChange={d} call={x} label="Test jewellery photo" /><I type="button" variant="outline" onClick={v} disabled={!m || !N || (p == null ? undefined : p.status) === "running"} loading={(p == null ? undefined : p.status) === "running"} loadingText="Generating…">Run test</I></div>{p && p.status !== "running" && <div className="space-y-2">{p.status === "failed" ? <p className="text-[12px] text-destructive">Failed: {p.error}</p> : <div className="grid grid-cols-2 gap-px bg-line"><figure className="bg-canvas"><figcaption className="px-2 py-1 text-[9px] uppercase tracking-[1.5px] text-ink-faint">Test photo</figcaption><img src={m ?? ""} alt="" className="w-full max-h-[360px] object-contain bg-surface" /></figure><figure className="bg-canvas"><figcaption className="px-2 py-1 text-[9px] uppercase tracking-[1.5px] text-ink-faint">Result · {p.duration_s}s</figcaption><a href={p.original_url ?? p.output_url ?? "#"} target="_blank" rel="noopener noreferrer"><img src={p.output_url ?? ""} alt="" className="w-full max-h-[360px] object-contain bg-surface" /></a></figure></div>}{p.prompt && <button type="button" onClick={() => l(g => !g)} className="text-[10px] uppercase tracking-[1.5px] text-ink-muted hover:text-ink">{S ? "Hide" : "Show"} the exact prompt sent</button>}{S && p.prompt && <pre className="whitespace-pre-wrap bg-surface p-3 text-[11px] text-ink-soft">{p.prompt}</pre>}</div>}</div></form>;
}
function Ee({
  studio: t,
  onChange: s,
  call: n
}) {
  const [a, i] = o.useState(null);
  const [x, c] = o.useState("");
  const [j, f] = o.useState(false);
  const [u, m] = o.useState(null);
  const d = `${Te}/studio/${t.slug}`;
  const p = {
    jewellery: [...new Set(t.prompts.map(l => l.jewellery_type))],
    style: [...new Set(t.prompts.map(l => l.style_type))]
  };
  const C = t.prompts.filter(l => j || l.is_active);
  const S = async (l, y) => {
    const N = t.prompts.map(g => g.id);
    const h = l + y;
    if (h < 0 || h >= N.length) {
      return;
    }
    [N[l], N[h]] = [N[h], N[l]];
    const v = await n(() => w.reorderPrompts(t.id, N));
    if (v) {
      s(v);
    }
  };
  return <div className="space-y-10"><div className="flex flex-wrap items-start justify-between gap-4"><div><h2 className="font-serif font-bold text-[28px] text-ink leading-tight">{t.name}</h2><div className="mt-1 flex items-center gap-2 text-[12px]"><a href={d} target="_blank" rel="noopener noreferrer" className="text-gold-dark hover:underline">{d.replace(/^https?:\/\//, "")}</a><button onClick={() => {
            var l;
            if ((l = navigator.clipboard) != null) {
              l.writeText(d);
            }
            D.success("Link copied");
          }} className="text-[10px] uppercase tracking-[1.5px] text-ink-muted hover:text-ink">Copy</button></div></div><I variant={t.is_active ? "secondary" : "default"} size="sm" onClick={async () => {
        const l = await n(() => w.updateStudio(t.id, {
          is_active: !t.is_active
        }));
        if (l) {
          s(l);
        }
      }}>{t.is_active ? "Pause studio" : "Resume studio"}</I></div>{!t.is_active && <p className="border border-destructive/30 bg-destructive/5 px-4 py-3 text-[12px] text-destructive">Paused — clients see "no access" until you resume it.</p>}<section className="space-y-4"><div className="flex items-center justify-between"><p className="text-[10px] uppercase tracking-[2px] text-ink-muted">Prompts · {t.prompts.filter(l => l.is_active).length} live</p><div className="flex items-center gap-3"><label className="flex items-center gap-1.5 text-[11px] text-ink-muted"><input type="checkbox" checked={j} onChange={l => f(l.target.checked)} /> Show archived</label><I size="sm" onClick={() => i("new")} disabled={a !== null}>+ Add prompt</I></div></div>{a === "new" && <_Component6 studio={t} prompt={null} labels={p} call={n} onSaved={l => {
        s(l);
        i(null);
      }} onCancel={() => i(null)} />}{C.length === 0 && a !== "new" && <p className="py-8 text-center text-[13px] text-ink-muted">No prompts yet. Add one — clients will see its jewellery and style labels.</p>}<ul className="space-y-3">{C.map(l => {
          var N;
          const y = t.prompts.indexOf(l);
          if (a !== "new" && (a == null ? undefined : a.id) === l.id) {
            return <li key={l.id}><_Component6 studio={t} prompt={l} labels={p} call={n} onSaved={h => {
                s(h);
                i(null);
              }} onCancel={() => i(null)} /></li>;
          } else {
            return <li className={P("flex gap-4 border border-line bg-canvas p-4", !l.is_active && "opacity-55")} key={l.id}><div className="relative size-20 shrink-0 overflow-hidden bg-surface">{l.template_image_url ? <img src={l.template_image_url} alt="" className="absolute inset-0 h-full w-full object-cover" /> : <span className="absolute inset-0 grid place-items-center text-[9px] uppercase tracking-[1px] text-ink-faint">No template</span>}</div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className="text-[14px] font-medium text-ink">{l.jewellery_type}</span><span className="text-ink-faint">·</span><span className="text-[14px] text-ink">{l.style_type}</span><span className="px-1.5 py-0.5 text-[9px] uppercase tracking-[1px] bg-surface text-ink-muted">{(N = he.find(h => h.key === l.output_format)) == null ? undefined : N.label}</span>{!l.is_active && <span className="px-1.5 py-0.5 text-[9px] uppercase tracking-[1px] bg-surface text-ink-muted">Archived</span>}<span className="text-[10px] text-ink-faint">{l.jobs} generated</span></div><p className="mt-1 line-clamp-2 text-[12px] text-ink-muted">{l.prompt_text}</p>{(u == null ? undefined : u.id) === l.id && <pre className="mt-2 whitespace-pre-wrap bg-surface p-3 text-[11px] text-ink-soft">{u.text}</pre>}<div className="mt-2 flex flex-wrap items-center gap-3"><button onClick={() => i(l)} disabled={a !== null} className="text-[10px] uppercase tracking-[1.5px] text-gold-dark hover:underline disabled:opacity-40">Edit / test</button><button onClick={async () => {
                    if ((u == null ? undefined : u.id) === l.id) {
                      m(null);
                      return;
                    }
                    const h = await n(() => w.previewPrompt(l.id));
                    if (h) {
                      m({
                        id: l.id,
                        text: h.prompt
                      });
                    }
                  }} className="text-[10px] uppercase tracking-[1.5px] text-ink-muted hover:text-ink">{(u == null ? undefined : u.id) === l.id ? "Hide full prompt" : "Full prompt"}</button><button onClick={() => S(y, -1)} disabled={y === 0} className="text-[12px] text-ink-muted hover:text-ink disabled:opacity-30">↑</button><button onClick={() => S(y, 1)} disabled={y === t.prompts.length - 1} className="text-[12px] text-ink-muted hover:text-ink disabled:opacity-30">↓</button><button onClick={async () => {
                    const h = await n(() => w.updatePrompt(l.id, {
                      is_active: !l.is_active
                    }));
                    if (h) {
                      s(h);
                    }
                  }} className="text-[10px] uppercase tracking-[1.5px] text-ink-muted hover:text-ink">{l.is_active ? "Archive" : "Restore"}</button></div></div></li>;
          }
        })}</ul></section><section className="space-y-4"><p className="text-[10px] uppercase tracking-[2px] text-ink-muted">Who can use this studio · {t.access.length}</p><form onSubmit={async l => {
        l.preventDefault();
        if (!x.trim()) {
          return;
        }
        const y = await n(() => w.addAccess(t.id, x), "Could not add.");
        if (y) {
          s(y);
          c("");
          D.success("Access updated");
        }
      }} className="space-y-2"><textarea value={x} onChange={l => c(l.target.value)} rows={2} placeholder="owner@client.com, designer@gmail.com — commas, spaces or new lines" className="w-full resize-y border border-line bg-canvas px-3 py-2 text-[13px] focus:outline-none focus:border-gold-dark" /><div className="flex flex-wrap items-center justify-between gap-3"><p className="text-[10px] text-ink-faint">Sign-in is with Google, so any address works that the person can sign into Google with — Gmail, a Google Workspace company address, or any email registered as a Google account.</p><I type="submit" size="sm" disabled={!x.trim()}>Allow</I></div></form><ul className="divide-y divide-line border border-line">{t.access.length === 0 && <li className="px-4 py-6 text-center text-[12px] text-ink-muted">Nobody yet.</li>}{t.access.map(l => <li className="flex items-center justify-between gap-3 px-4 py-2.5" key={l.id}><div className="min-w-0"><p className="truncate text-[13px] text-ink">{l.email}</p><p className="text-[10px] text-ink-faint">{l.has_account ? "Has signed in" : "Not signed in yet"}{l.added_by ? ` · added by ${l.added_by}` : ""}</p></div><button onClick={async () => {
            const y = await n(() => w.removeAccess(t.id, l.id));
            if (y) {
              s(y);
            }
          }} className="shrink-0 text-[10px] uppercase tracking-[1.5px] text-destructive hover:underline">Remove</button></li>)}</ul></section></div>;
}
function Oe({
  onExpired: t
}) {
  const s = Le(t);
  const [n, a] = o.useState(null);
  const [i, x] = o.useState(null);
  const [c, j] = o.useState("");
  const [f, u] = o.useState("");
  const [m, d] = o.useState(false);
  const p = o.useCallback(async () => {
    const l = await s(() => w.studios(), "Could not load studios.");
    if (l) {
      a(l);
    }
  }, [s]);
  o.useEffect(() => {
    p();
  }, [p]);
  const C = async l => {
    const y = await s(() => w.studio(l));
    if (y) {
      x(y);
    }
  };
  const S = l => {
    x(l);
    p();
  };
  return <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr]"><aside className="space-y-4"><form onSubmit={async l => {
        l.preventDefault();
        if (c.trim().length < 2) {
          return;
        }
        d(true);
        const y = await s(() => w.createStudio(c.trim(), f.trim() || undefined), "Could not create studio.");
        d(false);
        if (y) {
          j("");
          u("");
          S(y);
          D.success(`Created /studio/${y.slug}`);
        }
      }} className="space-y-2 border border-line p-4"><p className="text-[10px] uppercase tracking-[2px] text-ink-muted">New studio</p><input value={c} onChange={l => j(l.target.value)} placeholder="Client name, e.g. Zillionaire Custom" maxLength={120} className="w-full border border-line bg-canvas px-3 py-2 text-[13px] focus:outline-none focus:border-gold-dark" /><div className="flex items-center border border-line bg-canvas focus-within:border-gold-dark"><span className="pl-3 text-[12px] text-ink-faint">/studio/</span><input value={f} onChange={l => u(l.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))} placeholder="auto from name" maxLength={40} className="min-w-0 flex-1 bg-transparent px-1 py-2 text-[13px] outline-none" /></div><I type="submit" size="sm" block={true} loading={m} loadingText="Creating" disabled={c.trim().length < 2}>Create</I></form><ul className="border border-line divide-y divide-line">{n === null && <li className="p-4"><O className="h-10 w-full" /></li>}{(n == null ? undefined : n.length) === 0 && <li className="p-4 text-center text-[12px] text-ink-muted">No studios yet.</li>}{n == null ? undefined : n.map(l => <li key={l.id}><button onClick={() => C(l.id)} className={P("w-full px-4 py-3 text-left transition-colors", (i == null ? undefined : i.id) === l.id ? "bg-gold/10" : "hover:bg-surface")}><div className="flex items-center justify-between gap-2"><span className="truncate text-[13px] font-medium text-ink">{l.name}</span>{!l.is_active && <span className="shrink-0 px-1.5 py-0.5 text-[8px] uppercase tracking-[1px] bg-surface text-ink-muted">Paused</span>}</div><p className="text-[10px] text-ink-faint">/studio/{l.slug} · {l.prompts} prompts · {l.clients} clients · {l.jobs} images</p></button></li>)}</ul></aside><main>{i ? <Ee studio={i} onChange={S} call={s} key={i.id} /> : <div className="grid h-64 place-items-center text-center text-[13px] text-ink-muted">Select a studio, or create one.</div>}</main></div>;
}
const ge = {
  open: "bg-gold/15 text-gold-dark",
  approved: "bg-emerald-50 text-emerald-700",
  rejected: "bg-surface text-ink-muted"
};
function G(t) {
  return new Date(t).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function R(t) {
  return (t ?? "—").replace(/_/g, " ");
}
function Ie({
  onSuccess: t
}) {
  const [s, n] = o.useState("");
  const [a, i] = o.useState("");
  const [x, c] = o.useState(null);
  const [j, f] = o.useState(false);
  const u = async m => {
    m.preventDefault();
    f(true);
    c(null);
    try {
      const d = await w.login(s, a);
      t(d.email);
    } catch (d) {
      c(d instanceof L ? d.message : "Could not sign in.");
    } finally {
      f(false);
    }
  };
  return <main className="min-h-screen bg-canvas flex items-center justify-center px-6"><form onSubmit={u} className="w-full max-w-sm space-y-6"><div><p className="text-[10px] uppercase tracking-[3px] text-ink-muted mb-2">Gehna Photo</p><h1 className="font-serif font-bold text-[32px] text-gold-dark leading-tight">Admin</h1></div><div className="space-y-1"><label htmlFor="admin-email" className="block text-[9px] uppercase tracking-[1.8px] text-ink-muted">Email</label><input id="admin-email" type="email" autoComplete="username" required={true} value={s} onChange={m => n(m.target.value)} className="w-full py-3 border-b border-line bg-transparent text-[14px] text-ink focus:outline-none focus:border-gold-dark" /></div><div className="space-y-1"><label htmlFor="admin-password" className="block text-[9px] uppercase tracking-[1.8px] text-ink-muted">Password</label><input id="admin-password" type="password" autoComplete="current-password" required={true} value={a} onChange={m => i(m.target.value)} className="w-full py-3 border-b border-line bg-transparent text-[14px] text-ink focus:outline-none focus:border-gold-dark" /></div><_Component7 open={!!x}><p className="text-[13px] text-destructive">{x}</p></_Component7><I type="submit" block={true} loading={j} loadingText="Signing in">Sign in</I></form></main>;
}
function Re({
  ticketId: t,
  onResolved: s,
  onExpired: n
}) {
  const [a, i] = o.useState(null);
  const [x, c] = o.useState(true);
  const [j, f] = o.useState(0);
  const [u, m] = o.useState("");
  const [d, p] = o.useState(null);
  const [C, S] = o.useState(null);
  o.useEffect(() => {
    let h = false;
    c(true);
    S(null);
    w.ticket(t).then(v => {
      if (h) {
        return;
      }
      i(v);
      const g = v.items.filter($ => !$.already_refunded && !$.previously_approved).length;
      f(v.status === "open" ? g : v.credits_refunded);
      m(v.admin_note ?? "");
    }).catch(v => {
      if (!h) {
        if (v instanceof T) {
          n();
        } else {
          S(v instanceof L ? v.message : "Could not load ticket.");
        }
      }
    }).finally(() => !h && c(false));
    return () => {
      h = true;
    };
  }, [t, n]);
  const l = async h => {
    if (a && (h !== "approved" || j !== 0 || !!window.confirm("Approve with 0 credits? The user will see \"Approved\" but receive nothing."))) {
      p(h === "approved" ? "approve" : "reject");
      S(null);
      try {
        const v = await w.resolve(a.id, h, h === "approved" ? j : 0, u);
        i(v.ticket);
        s(v.ticket);
        D.success(h === "approved" ? `Approved — ${j} credit${j !== 1 ? "s" : ""} added` : "Rejected", {
          description: `${v.ticket.user_email} now has ${v.user_credits} credits.`
        });
      } catch (v) {
        if (v instanceof T) {
          n();
        } else {
          S(v instanceof L ? v.message : "Could not save decision.");
        }
      } finally {
        p(null);
      }
    }
  };
  if (x) {
    return <div className="space-y-6"><O className="h-8 w-64" /><O className="h-24 w-full" /><O variant="image" className="aspect-[4/3] w-full" /></div>;
  }
  if (!a) {
    return <p className="text-destructive text-[13px]">{C ?? "Ticket not found."}</p>;
  }
  const y = a.status === "open";
  const N = a.items.filter(h => h.already_refunded || h.previously_approved).length;
  return <div className="space-y-8"><div className="flex flex-wrap items-start justify-between gap-4"><div><div className="flex items-center gap-3 mb-1"><span className={P("px-2 py-0.5 text-[9px] uppercase tracking-[1.5px] font-medium", ge[a.status])}>{a.status}</span><span className="text-[11px] text-ink-faint">{G(a.created_at)}</span></div><h2 className="font-serif font-bold text-[24px] text-ink leading-tight">{a.user_email}</h2><p className="text-[12px] text-ink-muted mt-1">Balance <span className="text-ink font-medium tabular-nums">{a.user_credits}</span> credits{a.user_prior_ticket_refunds > 0 && <e.Fragment> · previously refunded <span className="text-ink font-medium tabular-nums">{a.user_prior_ticket_refunds}</span> via tickets</e.Fragment>}</p></div>{!y && <div className="text-right text-[12px] text-ink-muted"><p>{a.status === "approved" ? `+${a.credits_refunded} credits` : "No credits"}</p><p className="text-ink-faint">by {a.reviewed_by} · {a.reviewed_at && G(a.reviewed_at)}</p></div>}</div><blockquote className="border-l-2 border-gold pl-4 py-1 text-[14px] text-ink leading-relaxed whitespace-pre-wrap">{a.message}</blockquote>{N > 0 && <div className="border border-destructive/30 bg-destructive/5 px-4 py-3 text-[12px] text-destructive">{N} of {a.items.length} image{a.items.length !== 1 ? "s" : ""} already had a credit returned — check the flags below before approving the suggested amount.</div>}<div className="space-y-6">{a.items.map((h, v) => <div className="border border-line" key={`${h.job_id}:${h.image_index}`}><div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-2.5"><p className="text-[10px] uppercase tracking-[1.5px] text-ink-muted">Photo {v + 1} · {R(h.garment_type)} · {R(h.style)} · {R(h.output_format)}</p><div className="flex items-center gap-2">{h.already_refunded && <span className="px-2 py-0.5 text-[9px] uppercase tracking-[1px] bg-destructive/10 text-destructive">Auto-refunded</span>}{h.previously_approved && <span className="px-2 py-0.5 text-[9px] uppercase tracking-[1px] bg-destructive/10 text-destructive">Approved before</span>}<span className="text-[10px] text-ink-faint">{G(h.job_created_at)}</span></div></div><div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line"><figure className="bg-canvas"><figcaption className="px-3 py-1.5 text-[9px] uppercase tracking-[1.5px] text-ink-faint">Original (uploaded)</figcaption><a href={h.input_image_url} target="_blank" rel="noopener noreferrer" className="block bg-surface"><img src={h.input_image_url} alt="Uploaded original" className="w-full max-h-[420px] object-contain" loading="lazy" /></a></figure><figure className="bg-canvas"><figcaption className="px-3 py-1.5 text-[9px] uppercase tracking-[1.5px] text-ink-faint">Generated (delivered)</figcaption>{h.output_url ? <a href={h.output_original_url ?? h.output_url} target="_blank" rel="noopener noreferrer" className="block bg-surface"><img src={h.output_url} alt="Generated result" className="w-full max-h-[420px] object-contain" loading="lazy" /></a> : <div className="grid h-48 place-items-center text-[12px] text-ink-muted">No output stored</div>}</figure></div>{h.output_url && <details className="border-t border-line"><summary className="cursor-pointer px-4 py-2 text-[10px] uppercase tracking-[1.5px] text-ink-muted hover:text-ink">Overlay compare</summary><div className="p-4"><_Component8 beforeSrc={h.input_image_url} afterSrc={h.output_url} className="aspect-[4/3] w-full" /></div></details>}</div>)}</div><div className="border border-gold-dark/30 bg-[#fefdf8] p-5 space-y-4"><div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 items-end"><div><label htmlFor="credits" className="block text-[9px] uppercase tracking-[1.8px] text-ink-muted mb-1">Credits to return</label><input id="credits" type="number" min={0} max={40} inputMode="numeric" value={j} disabled={!y} onChange={h => f(Math.max(0, Math.min(40, Number(h.target.value) || 0)))} className="w-28 border border-line bg-canvas px-3 py-2 text-[18px] font-serif font-bold text-gold-dark tabular-nums focus:outline-none focus:border-gold-dark disabled:opacity-60" /><p className="text-[10px] text-ink-faint mt-1">Suggested: 1 per image not already refunded</p></div><div><label htmlFor="note" className="block text-[9px] uppercase tracking-[1.8px] text-ink-muted mb-1">Note to user <span className="normal-case tracking-normal">(optional, shown to them)</span></label><input id="note" type="text" maxLength={2000} value={u} disabled={!y} onChange={h => m(h.target.value)} placeholder="e.g. Stone colour clearly off — refunded in full." className="w-full border border-line bg-canvas px-3 py-2 text-[13px] text-ink focus:outline-none focus:border-gold-dark disabled:opacity-60" /></div></div><_Component7 open={!!C}><p className="text-[13px] text-destructive">{C}</p></_Component7>{y ? <div className="flex flex-wrap gap-3"><I onClick={() => l("approved")} loading={d === "approve"} loadingText="Approving" disabled={d !== null}>Approve · +{j}</I><I variant="secondary" onClick={() => l("rejected")} loading={d === "reject"} loadingText="Rejecting" disabled={d !== null}>Reject</I></div> : <p className="text-[12px] text-ink-muted">This ticket is closed. Decisions are final; open a new adjustment if needed.</p>}</div></div>;
}
const ce = 40;
const De = {
  completed: "bg-emerald-50 text-emerald-700",
  failed: "bg-destructive/10 text-destructive",
  processing: "bg-gold/15 text-gold-dark",
  pending: "bg-gold/15 text-gold-dark"
};
function M({
  label: t,
  value: s,
  sub: n
}) {
  return <div className="border-l border-line pl-4 py-1"><p className="text-[9px] uppercase tracking-[2px] text-ink-muted">{t}</p><p className="font-serif font-bold text-[26px] text-ink leading-tight tabular-nums">{s}</p>{n && <p className="text-[10px] text-ink-faint">{n}</p>}</div>;
}
function Me({
  onExpired: t,
  initialUser: s = ""
}) {
  const [n, a] = o.useState(null);
  const [i, x] = o.useState(null);
  const [c, j] = o.useState("all");
  const [f, u] = o.useState(s);
  const [m, d] = o.useState(s);
  const [p, C] = o.useState(0);
  const [S, l] = o.useState(true);
  const [y, N] = o.useState(false);
  const [h, v] = o.useState(null);
  const [g, $] = o.useState(null);
  const r = o.useCallback(async b => {
    N(true);
    v(null);
    const E = b ? 0 : p;
    try {
      const [A, X] = await Promise.all([w.activityJobs({
        limit: ce,
        offset: E,
        status: c,
        user: m || undefined
      }), b ? w.activityStats() : Promise.resolve(n)]);
      x(ee => b || !ee ? A : [...ee, ...A]);
      l(A.length === ce);
      C(E + A.length);
      if (X) {
        a(X);
      }
    } catch (A) {
      if (A instanceof T) {
        t();
      } else {
        v(A instanceof L ? A.message : "Could not load activity.");
      }
    } finally {
      N(false);
    }
  }, [c, m, p, t]);
  o.useEffect(() => {
    r(true);
  }, [c, m]);
  const k = je(g !== null, () => $(null));
  return <div className="space-y-8">{n ? <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"><M label="Today" value={n.jobs_today} sub="generations" /><M label="7 days" value={n.jobs_7d} sub={`${n.failed_7d} failed`} /><M label="All time" value={n.jobs_total} sub="generations" /><M label="Active users" value={n.active_users_7d} sub="7 days" /><M label="Users" value={n.users_total} sub={`+${n.signups_7d} this week`} /><M label="Credits sold" value={n.credits_sold_7d} sub="7 days" /><M label="Revenue" value={`₹${Math.round(n.revenue_inr_7d).toLocaleString("en-IN")}`} sub="7 days" /><M label="Fail rate" value={n.jobs_7d ? `${Math.round(n.failed_7d / n.jobs_7d * 100)}%` : "—"} sub="7 days" /></div> : <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">{Array.from({
        length: 8
      }).map((b, E) => <O className="h-16 w-full" key={E} />)}</div>}<div className="flex flex-wrap items-center gap-2">{["all", "completed", "failed", "active"].map(b => <button onClick={() => j(b)} className={P("px-3 py-1.5 text-[10px] uppercase tracking-[1.5px] transition-colors", c === b ? "bg-gold-dark text-canvas" : "text-ink-muted hover:text-ink")} key={b}>{b}</button>)}<form onSubmit={b => {
        b.preventDefault();
        d(f.trim());
      }} className="ml-auto flex items-center gap-2"><input type="search" value={f} onChange={b => u(b.target.value)} placeholder="Filter by email…" className="w-56 border border-line bg-canvas px-3 py-1.5 text-[12px] text-ink focus:outline-none focus:border-gold-dark" /><button type="submit" className="px-3 py-1.5 text-[10px] uppercase tracking-[1.5px] text-ink-muted hover:text-ink">Go</button></form></div>{h && <p className="text-[12px] text-destructive">{h}</p>}{i === null ? <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">{Array.from({
        length: 6
      }).map((b, E) => <O variant="image" className="aspect-[2/1] w-full" key={E} />)}</div> : i.length === 0 ? <p className="py-12 text-center text-[13px] text-ink-muted">Nothing here.</p> : <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">{i.map(b => <button onClick={() => $(b)} className="group border border-line bg-canvas text-left transition-colors hover:border-gold outline-none focus-visible:ring-2 focus-visible:ring-gold" key={b.id}><div className="grid grid-cols-2 gap-px bg-line"><div className="relative aspect-square bg-surface overflow-hidden"><img src={b.input_image_url} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><span className="absolute left-1.5 top-1.5 bg-canvas/90 px-1.5 py-0.5 text-[8px] uppercase tracking-[1px] text-ink-muted">In</span></div><div className="relative aspect-square bg-surface overflow-hidden">{b.thumb_url ? <img src={b.thumb_url} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" /> : <div className="absolute inset-0 grid place-items-center px-3 text-center text-[10px] text-ink-muted">{b.status === "failed" ? b.error_message ? b.error_message.slice(0, 80) : "Failed" : b.status}</div>}<span className="absolute left-1.5 top-1.5 bg-canvas/90 px-1.5 py-0.5 text-[8px] uppercase tracking-[1px] text-ink-muted">Out</span></div></div><div className="px-3 py-2.5"><div className="flex items-center justify-between gap-2"><span className="truncate text-[12px] text-ink font-medium">{b.user_email}</span><span className={P("shrink-0 px-1.5 py-0.5 text-[8px] uppercase tracking-[1px]", De[b.status] ?? "bg-surface text-ink-muted")}>{b.status}</span></div><p className="mt-0.5 text-[10px] text-ink-faint">{R(b.garment_type)} · {R(b.style)} · {R(b.output_format)} · {b.channel} · {G(b.created_at)}</p></div></button>)}</div>}{i && S && <div className="text-center"><I variant="secondary" size="sm" onClick={() => r(false)} loading={y} loadingText="Loading">Load more</I></div>}{g && <div className="fixed inset-0 z-[120] flex items-center justify-center bg-ink/80 p-4 sm:p-8" onClick={() => $(null)} role="dialog" aria-modal="true" aria-label="Generation detail"><div ref={k} tabIndex={-1} onClick={b => b.stopPropagation()} className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden border border-line bg-canvas outline-none"><div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3"><div className="min-w-0"><p className="truncate text-[13px] text-ink font-medium">{g.user_email}</p><p className="text-[10px] text-ink-faint">{R(g.garment_type)} · {R(g.style)} · {R(g.output_format)} · {G(g.created_at)}{g.completed_at && ` · ${Math.round((new Date(g.completed_at).getTime() - new Date(g.created_at).getTime()) / 1000)}s`}</p></div><button onClick={() => $(null)} aria-label="Close" className="grid size-9 place-items-center rounded-full border border-line text-ink hover:bg-surface"><svg className="size-4" fill="none" viewBox="0 0 16 16"><path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></button></div><div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-2 gap-px bg-line overflow-auto"><figure className="bg-canvas"><figcaption className="px-3 py-1.5 text-[9px] uppercase tracking-[1.5px] text-ink-faint">Uploaded</figcaption><a href={g.input_image_url} target="_blank" rel="noopener noreferrer"><img src={g.input_image_url} alt="Uploaded" className="w-full max-h-[70vh] object-contain bg-surface" /></a></figure><figure className="bg-canvas"><figcaption className="px-3 py-1.5 text-[9px] uppercase tracking-[1.5px] text-ink-faint">Generated</figcaption>{g.display_url ? <a href={g.original_url ?? g.display_url} target="_blank" rel="noopener noreferrer"><img src={g.display_url} alt="Generated" className="w-full max-h-[70vh] object-contain bg-surface" /></a> : <div className="grid h-48 place-items-center px-6 text-center text-[12px] text-ink-muted">{g.error_message ?? g.status}</div>}</figure></div>{g.display_url && <details className="border-t border-line"><summary className="cursor-pointer px-4 py-2 text-[10px] uppercase tracking-[1.5px] text-ink-muted hover:text-ink">Overlay compare</summary><div className="p-4"><_Component8 beforeSrc={g.input_image_url} afterSrc={g.display_url} className="aspect-[4/3] w-full max-h-[60vh]" /></div></details>}</div></div>}</div>;
}
const de = ["insights", "signups", "users", "fraud", "activity", "refunds", "studios"];
function He() {
  const [t, s] = o.useState(F);
  const [n, a] = o.useState("open");
  const [i, x] = o.useState(null);
  const [c, j] = o.useState(null);
  const [f, u] = fe();
  const m = f.get("ticket");
  const d = f.get("view");
  const p = m ? "refunds" : de.includes(d) ? d : "insights";
  const C = (r, k = {}) => {
    const b = new URLSearchParams();
    b.set("view", r);
    for (const [E, A] of Object.entries(k)) {
      b.set(E, A);
    }
    u(b, {
      replace: true
    });
  };
  const S = f.get("user") ?? "";
  const l = f.get("stage") ?? "all";
  const y = o.useCallback(() => {
    Z();
    s(null);
    x(null);
  }, []);
  const N = o.useCallback(() => {
    D.error("Admin session expired", {
      description: "Please sign in again."
    });
    y();
  }, [y]);
  const h = o.useCallback(async () => {
    j(null);
    try {
      x(await w.tickets(n));
    } catch (r) {
      if (r instanceof T) {
        N();
      } else {
        j(r instanceof L ? r.message : "Could not load tickets.");
      }
    }
  }, [n, N]);
  o.useEffect(() => {
    if (t) {
      h();
    }
  }, [t, h]);
  const v = r => {
    const k = new URLSearchParams(f);
    if (r) {
      k.set("ticket", r);
    } else {
      k.delete("ticket");
    }
    u(k, {
      replace: true
    });
  };
  const g = r => {
    x(k => (k == null ? undefined : k.flatMap(b => b.id !== r.id ? [b] : n !== "all" && n !== r.status ? [] : [{
      ...b,
      status: r.status,
      credits_refunded: r.credits_refunded,
      reviewed_at: r.reviewed_at
    }])) ?? null);
  };
  const $ = o.useMemo(() => (i == null ? undefined : i.filter(r => r.status === "open").length) ?? 0, [i]);
  if (t) {
    return <div className="min-h-screen bg-canvas"><header className="border-b border-line"><div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-4 sm:px-6"><div className="flex min-w-0 flex-wrap items-center gap-x-6 gap-y-2"><span className="font-serif font-bold text-[20px] text-gold-dark">Gehna Photo</span><nav className="flex flex-wrap items-center gap-1" aria-label="Admin sections">{de.map(r => <button onClick={() => C(r)} className={P("px-3 py-1.5 text-[10px] uppercase tracking-[2px] transition-colors", p === r ? "bg-gold-dark text-canvas" : "text-ink-muted hover:text-ink")} key={r}>{r}</button>)}</nav></div><div className="flex min-w-0 items-center gap-4 text-[12px] text-ink-muted"><span className="truncate">{t.email}</span><button onClick={y} className="text-[10px] uppercase tracking-[1.5px] hover:text-ink">Sign out</button></div></div></header>{p === "insights" ? <div className="mx-auto max-w-[1400px] px-6 py-8"><Se onExpired={N} onSeeWho={r => C("users", {
          stage: r
        })} /></div> : p === "signups" ? <div className="mx-auto max-w-[1400px] px-6 py-8"><_Component9 onExpired={N} /></div> : p === "fraud" ? <div className="mx-auto max-w-[1400px] px-6 py-8"><_Component0 onExpired={N} onOpenUser={r => C("activity", {
          user: r
        })} /></div> : p === "users" ? <div className="mx-auto max-w-[1400px] px-6 py-8"><Pe initialStage={l} onExpired={N} onOpenUser={r => C("activity", {
          user: r
        })} key={l} /></div> : p === "studios" ? <div className="mx-auto max-w-[1400px] px-6 py-8"><Oe onExpired={N} /></div> : p === "activity" ? <div className="mx-auto max-w-[1400px] px-6 py-8"><Me initialUser={S} onExpired={N} key={S} /></div> : <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-[380px_1fr] min-h-[calc(100vh-61px)]"><aside className="border-b lg:border-b-0 lg:border-r border-line"><div className="flex items-center gap-1 border-b border-line px-4 py-3">{["open", "approved", "rejected", "all"].map(r => <button onClick={() => a(r)} className={P("px-3 py-1.5 text-[10px] uppercase tracking-[1.5px] transition-colors", n === r ? "bg-gold-dark text-canvas" : "text-ink-muted hover:text-ink")} key={r}>{r}{r === "open" && i && n === "open" ? ` (${$})` : ""}</button>)}<button onClick={() => h()} aria-label="Refresh" className="ml-auto text-ink-faint hover:text-ink"><svg className="size-4" fill="none" viewBox="0 0 16 16"><path d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9M13.5 2v3h-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></button></div><div className="max-h-[40vh] lg:max-h-[calc(100vh-110px)] overflow-y-auto">{c && <p className="p-4 text-[12px] text-destructive">{c}</p>}{i === null && !c && <div className="p-4 space-y-3">{Array.from({
                length: 5
              }).map((r, k) => <O className="h-16 w-full" key={k} />)}</div>}{(i == null ? undefined : i.length) === 0 && <p className="p-8 text-center text-[13px] text-ink-muted">Nothing {n === "all" ? "yet" : n}.</p>}<ul>{i == null ? undefined : i.map(r => <li key={r.id}><button onClick={() => v(r.id)} className={P("w-full text-left px-4 py-3 border-b border-line transition-colors", m === r.id ? "bg-gold/10" : "hover:bg-surface")}><div className="flex items-center justify-between gap-2 mb-1"><span className="truncate text-[13px] text-ink font-medium">{r.user_email}</span><span className={P("shrink-0 px-1.5 py-0.5 text-[8px] uppercase tracking-[1px]", ge[r.status])}>{r.status}</span></div><p className="line-clamp-2 text-[12px] text-ink-muted">{r.message}</p><p className="mt-1 text-[10px] text-ink-faint">{r.item_count} photo{r.item_count !== 1 ? "s" : ""} · {G(r.created_at)}{r.status === "approved" && ` · +${r.credits_refunded}`}</p></button></li>)}</ul></div></aside><main className="px-6 py-8 lg:px-10 overflow-y-auto">{m ? <Re ticketId={m} onResolved={g} onExpired={N} key={m} /> : <div className="grid h-full place-items-center text-center"><div><p className="font-serif text-[22px] text-ink-muted">Select a ticket to review</p><p className="text-[12px] text-ink-faint mt-1">Oldest open requests are listed first.</p></div></div>}</main></div>}</div>;
  } else {
    return <Ie onSuccess={r => {
      var k;
      return s({
        token: ((k = F()) == null ? undefined : k.token) ?? "",
        email: r
      });
    }} />;
  }
}
export { He as default };