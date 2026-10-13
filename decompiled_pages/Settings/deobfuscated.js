import { u as X, B as Z, C as ee, b as te, k as se, r as l, t as u, j as e, M as ae, D as U, z as h, v as N, Q as v } from "./index-BfjOhj2J.js";
import { O as _Component2 } from "./OfferCountdown-DbzlpXn2.js";
import { P as _Component4 } from "./PhoneBonusCard-DBAVGPxA.js";
import { R as _Component5 } from "./RefundRequestPanel-Bi7ZqxAH.js";
import { B as S } from "./button-DmV_w4RG.js";
import { C as E } from "./collapse-B2TExWm1.js";
import { S as _Component } from "./skeleton-D9Lgo_Sm.js";
import { M as oe, P as Y, p as $, f as R } from "./plans-CkNUBpW0.js";
import "./imageVariants-jbAlJ6KT.js";
import "./spinner-CaF1Mtcm.js";
const q = "https://checkout.razorpay.com/v1/checkout.js";
let j = null;
function ce() {
  if (window.Razorpay) {
    return Promise.resolve();
  } else {
    return j || (j = new Promise((m, c) => {
      const x = document.querySelector(`script[src="${q}"]`);
      if (x) {
        if (window.Razorpay) {
          m();
          return;
        }
        x.addEventListener("load", () => m(), {
          once: true
        });
        x.addEventListener("error", () => c(new Error("Failed to load Razorpay checkout")), {
          once: true
        });
        return;
      }
      const d = document.createElement("script");
      d.src = q;
      d.async = true;
      d.onload = () => m();
      d.onerror = () => {
        j = null;
        c(new Error("Failed to load Razorpay checkout"));
      };
      document.body.appendChild(d);
    }), j);
  }
}
function le(m, c = {}) {
  if (!window.Razorpay) {
    throw new Error("Razorpay is not loaded. Call loadRazorpay() first.");
  }
  const x = new window.Razorpay(m);
  if (c.onPaymentFailed) {
    x.on("payment.failed", c.onPaymentFailed);
  }
  x.open();
}
const de = "https://formspree.io/f/xnjrjvpp";
const me = "divykairoth@gmail.com";
const xe = 3000;
const pe = 10;
function _Component3() {
  return <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 pt-6" aria-busy="true">{Array.from({
      length: 4
    }).map((m, c) => <div className="flex flex-col border border-line bg-canvas p-6" key={c}><_Component variant="text" className="mb-4 w-1/2 text-[18px]" /><div className="mb-1 flex items-baseline gap-3"><_Component variant="text" className="w-10 text-[13px]" /><_Component variant="text" className="mb-2 w-24 text-[32px]" /></div><_Component variant="text" className="mb-2 w-2/3 text-[12px]" /><_Component variant="text" className="mb-5 w-1/3 text-[12px]" /><div className="mb-5 h-px bg-line" /><div className="mb-6 flex-1 space-y-2.5">{Array.from({
          length: 4
        }).map((x, d) => <div className="flex items-center gap-2.5" key={d}><_Component variant="circle" className="size-3 shrink-0" /><_Component variant="text" className="flex-1 text-[13px]" /></div>)}</div><_Component className="h-10 w-full" /></div>)}<span className="sr-only" role="status">Loading plans</span></div>;
}
function _e() {
  var F;
  const m = X();
  const [c, x] = Z();
  const d = c.get("refund");
  ee(ae);
  const {
    user: s,
    updateCredits: G,
    refreshUser: D
  } = te();
  const {
    data: I = [],
    isLoading: K
  } = se();
  const [w, k] = l.useState(null);
  const [g, A] = l.useState(false);
  const [T, O] = l.useState(null);
  const [y, L] = l.useState("");
  const [b, _] = l.useState("idle");
  const [Q, z] = l.useState(null);
  const B = l.useMemo(() => {
    const t = Date.now().toString(36).toUpperCase().slice(-6);
    const a = Math.random().toString(36).toUpperCase().slice(2, 6);
    return `TKT-${t}-${a}`;
  }, [b === "success"]);
  const [W, J] = l.useState(null);
  l.useEffect(() => {
    u("plans_viewed");
  }, []);
  l.useEffect(() => {
    const t = window.location.hash === "#refund" || d ? "refund" : window.location.hash === "#help" ? "help" : null;
    if (t) {
      requestAnimationFrame(() => {
        var a;
        if ((a = document.getElementById(t)) != null) {
          a.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    }
  }, []);
  const V = async t => {
    t.preventDefault();
    if (!y.trim()) {
      return;
    }
    _("sending");
    z(null);
    const a = B;
    try {
      const r = (s == null ? undefined : s.email) ?? "no-reply@gehna.photo";
      const i = await fetch(de, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          email: r,
          _subject: `[Gehna Help] ${a}`,
          _replyto: r,
          message: y,
          ticket_id: a,
          submitted_from: window.location.href
        })
      });
      const n = await i.json().catch(() => ({}));
      if (!i.ok || (n == null ? undefined : n.ok) === false) {
        const p = Array.isArray(n == null ? undefined : n.errors) && n.errors.map(C => C == null ? undefined : C.message).filter(Boolean).join("; ") || (n == null ? undefined : n.error) || "Could not send. Please try again.";
        throw new Error(p);
      }
      J(a);
      _("success");
      L("");
    } catch (r) {
      _("error");
      z((r == null ? undefined : r.message) ?? "Could not send. Please try again.");
    }
  };
  const H = async t => {
    for (let a = 0; a < pe; a++) {
      await new Promise(i => setTimeout(i, xe));
      await D();
      const r = N.getQueryData(v.user);
      if (((r == null ? undefined : r.credits) ?? 0) >= t) {
        N.invalidateQueries({
          queryKey: v.creditHistory
        });
        h.success("Credits added", {
          description: `Your balance is now ${r == null ? undefined : r.credits} credits.`
        });
        return;
      }
    }
    N.invalidateQueries({
      queryKey: v.creditHistory
    });
    h.info("Still confirming your payment", {
      description: "Your payment went through. If the credits are not visible in a few minutes, contact support below.",
      duration: 10000
    });
  };
  const P = async t => {
    const a = t ?? w;
    if (!a) {
      return;
    }
    O(null);
    A(true);
    const r = (s == null ? undefined : s.credits) ?? 0;
    try {
      const i = await U.createOrder(a);
      await ce();
      u("checkout_opened", {
        credits: i.credits,
        amount_inr: i.amount_paise / 100
      });
      le({
        key: "rzp_live_SuX3aAt16RsNIq",
        amount: i.amount_paise,
        currency: "INR",
        name: "Gehna Photo",
        description: `${i.credits} credits`,
        order_id: i.razorpay_order_id,
        handler: async n => {
          try {
            const p = await U.verifyPayment({
              razorpay_order_id: n.razorpay_order_id,
              razorpay_payment_id: n.razorpay_payment_id,
              razorpay_signature: n.razorpay_signature
            });
            if (p.credits != null) {
              G(p.credits);
            }
            if (p.status === "paid") {
              u("payment_succeeded", {
                credits: i.credits,
                amount_inr: i.amount_paise / 100
              });
              h.success("Payment successful", {
                description: "Your credits have been added."
              });
              N.invalidateQueries({
                queryKey: v.creditHistory
              });
            } else {
              h.success("Payment received", {
                description: "Confirming with your bank — your credits will appear shortly."
              });
              H(r + i.credits);
            }
          } catch {
            h.success("Payment received", {
              description: "Confirming with your bank — your credits will appear shortly."
            });
            H(r + i.credits);
          }
        },
        prefill: {
          email: s == null ? undefined : s.email,
          ...(s != null && s.phone ? {
            contact: `+${s.phone}`
          } : {})
        },
        theme: {
          color: "#7a6b2e"
        },
        modal: {
          ondismiss: () => {
            u("payment_cancelled", {
              credits: i.credits
            });
            h.info("Payment cancelled", {
              description: "No money was charged. Your credits are unchanged."
            });
          }
        }
      }, {
        onPaymentFailed: n => {
          var p;
          u("payment_failed", {
            credits: i.credits
          });
          h.error("Payment failed", {
            description: ((p = n == null ? undefined : n.error) == null ? undefined : p.description) ?? "Your payment could not be completed. No credits were added."
          });
        }
      });
    } catch (i) {
      O(i.message ?? "Failed to create order.");
    } finally {
      A(false);
    }
  };
  const o = I.find(t => t.ends_at);
  l.useEffect(() => {
    if (c.get("offer") !== "1" || !o || g) {
      return;
    }
    const t = new URLSearchParams(c);
    t.delete("offer");
    x(t, {
      replace: true
    });
    k(o.credits);
    P(o.credits);
  }, [o, c]);
  const M = I.filter(t => t.credits >= oe).map(t => {
    var a;
    var r;
    return {
      credits: t.credits,
      name: t.name,
      badge: t.badge,
      price: R(t.amount_inr),
      perImage: $(t.amount_inr, t.credits),
      original: (a = Y[t.credits]) == null ? undefined : a.original,
      benefits: ((r = Y[t.credits]) == null ? undefined : r.benefits) ?? [`${t.credits} Product Images`]
    };
  });
  return <main id="main-content" tabIndex={-1} className="flex-1 overflow-auto pt-[73px] lg:pt-0"><div className="border-b border-[#e6e9e6]"><div className="max-w-[1152px] mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"><div><h1 className="font-serif font-bold text-[32px] md:text-[48px] text-gold-dark tracking-tight">Plans</h1><p className="mt-1 text-[14px] font-light text-ink-muted">Buy credits and manage your billing.</p></div><button onClick={() => m("/account")} className="w-12 h-12 rounded-full bg-[#7a6b2e] border border-[#e6e9e6] flex items-center justify-center hover:bg-[#5c5022] transition-colors flex-shrink-0"><span className="text-[#ffffff] text-[18px] font-['Cormorant_Garamond',serif] font-bold uppercase">{((F = s == null ? undefined : s.email) == null ? undefined : F[0]) ?? "?"}</span></button></div></div><div className="max-w-[1152px] mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12 lg:py-24 pb-28 lg:pb-24"><div className="mb-16 md:mb-24"><div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4"><div><h2 className="font-serif font-bold text-[28px] md:text-[36px] text-gold-dark">Choose a plan</h2><p className="text-ink-soft text-[14px] mt-1">Each credit = one generated image. Buy once, use anytime.</p><p className="text-ink-faint text-[12px] mt-1">Outside India? Prices are charged in ₹ — your card converts to your currency.</p></div><div className="flex items-baseline gap-2"><span className="font-[serif] font-bold text-[40px] text-[#2f3331] leading-none">{(s == null ? undefined : s.credits) ?? 0}</span><span className="text-[#afb3b0] text-[14px]">credits remaining</span></div></div>{o && <div className="relative mb-5 overflow-hidden border-2 border-gold bg-[#fefdf8] px-6 py-5 shadow-[0_1px_24px_rgba(182,166,99,0.14)]"><div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B6A663]" /><div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[2px] text-gold-dark">🪔 {o.badge ?? "Diwali Special"} · limited time</p><p className="mt-2 font-serif font-bold text-[24px] leading-tight text-ink">{o.name}</p><p className="mt-1 text-[13px] font-light text-ink-muted">{o.credits} credits in 4K for just {R(o.amount_inr)}. One per account.</p>{o.ends_at && <_Component2 endsAt={o.ends_at} />}</div><div className="flex items-center gap-6 flex-shrink-0"><div className="text-right"><span className="font-[sans-serif] font-bold text-[32px] leading-none text-[#7a6b2e]">{R(o.amount_inr)}</span><p className="text-[12px] font-medium text-[#C8C15A]">{$(o.amount_inr, o.credits)}</p></div><S onClick={() => {
                u("diwali_offer_clicked");
                k(o.credits);
                P(o.credits);
              }} disabled={g} loading={g && w === o.credits} loadingText="Processing">Grab the offer</S></div></div></div>}{K && M.length === 0 ? <_Component3 /> : <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 pt-6">{M.map(t => {
            const a = t.credits === 100;
            const r = !!t.badge;
            return <div className={`relative flex flex-col p-6 transition-[border-color] duration-200 ease-move ${a ? "border-2 border-gold bg-canvas shadow-[0_1px_24px_rgba(182,166,99,0.14)]" : "border border-line bg-canvas hover:border-gold"}`} key={t.credits}>{a && <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B6A663]" />}{r && <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 z-10"><span className={`text-[9px] tracking-[2px] uppercase font-bold px-4 py-1.5 whitespace-nowrap block ${a ? "bg-[#7a6b2e] text-white" : "border border-[#B6A663] bg-white text-[#7a6b2e]"}`}>{t.badge}</span></div>}<p className={`font-[serif] font-bold text-[18px] mb-4 ${a ? "text-[#7a6b2e]" : "text-[#2f3331]"}`}>{t.name}</p><div className="flex items-baseline gap-3 mb-1"><span className="font-['Inter',sans-serif] font-light text-[13px]  line-through">{t.original}</span><span className="font-[serif] font-bold text-[32px] leading-none text-[#7a6b2e] mb-2">{t.price}</span></div><p className="font-['Inter',sans-serif] text-[12px] font-medium text-[#C8C15A] mb-2">{t.perImage}</p><p className="font-['Inter',sans-serif] font-light text-[12px]  mb-5">{t.credits} Credits</p><div className="h-px bg-[#e6e9e6] mb-5" /><div className="space-y-2.5 flex-1 mb-6">{t.benefits.map(i => <div className="flex items-center gap-2.5" key={i}><svg className="w-3 h-3 flex-shrink-0 text-[#7a6b2e]" viewBox="0 0 14 11" fill="none"><path d="M1 5.5L4.5 9L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg><span className="font-['Inter',sans-serif] font-light text-[13px] text-[#5c605d]">{i}</span></div>)}</div><S block={true} variant={a ? "default" : "outline"} onClick={() => {
                k(t.credits);
                P(t.credits);
              }} disabled={g} loading={g && w === t.credits} loadingText="Processing">Buy Now</S></div>;
          })}</div>}<E open={!!T}><p className="text-destructive text-[12px] mt-4">{T}</p></E><_Component4 where="plans" className="mt-10" /></div><div className="h-px bg-[#e0e3e0] mb-16 md:mb-24" /><div id="refund" className="mb-16 md:mb-24 scroll-mt-24"><div className="mb-10"><h2 className="font-['Cormorant_Garamond',serif] font-bold text-[28px] md:text-[36px] text-[#7a6b2e]">Refunds</h2><p className="text-[#5c605d] text-[14px] mt-1">Point at the photos that fell short and we’ll take a look.</p></div><_Component5 preselect={d} /></div><div className="h-px bg-[#e0e3e0] mb-16 md:mb-24" /><div id="help" className="mb-16 md:mb-24 scroll-mt-24"><div className="mb-10"><h2 className="font-['Cormorant_Garamond',serif] font-bold text-[28px] md:text-[36px] text-[#7a6b2e]">Help & Support</h2><p className="text-[#5c605d] text-[14px] mt-1">Anything other than a refund — a question, a bug, an idea. We’ll get back to you by email.</p></div><div className="relative border border-[#B6A663] bg-white p-6 md:p-10"><div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B6A663]" /><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"><div className="lg:col-span-4 space-y-6"><div><p className="font-['Inter',sans-serif] font-medium text-[11px] tracking-[3px] uppercase text-[#777c79] mb-3">New Ticket</p><p className="font-['Cormorant_Garamond',serif] font-bold text-[22px] text-[#7a6b2e] tracking-tight">{B}</p><p className="text-[#afb3b0] text-[11px] mt-1">Auto-generated reference ID.</p></div><div className="border-l-2 border-[#B6A663] pl-4 py-2"><p className="text-[#777c79] text-[10px] tracking-[1.5px] uppercase mb-1">Sent To</p><p className="font-['Inter',sans-serif] text-[14px] text-[#2f3331] break-all">{me}</p></div>{(s == null ? undefined : s.email) && <div className="border-l-2 border-[#e6e9e6] pl-4 py-2"><p className="text-[#777c79] text-[10px] tracking-[1.5px] uppercase mb-1">From</p><p data-ph-mask={true} className="font-['Inter',sans-serif] text-[14px] text-[#2f3331] break-all">{s.email}</p></div>}</div><div className="lg:col-span-8"><form onSubmit={V} className="space-y-6"><div><label htmlFor="help-message" className="text-[#777c79] text-[10.4px] tracking-[1.04px] uppercase block mb-2">YOUR PROBLEM</label><textarea id="help-message" value={y} onChange={t => L(t.target.value)} required={true} rows={7} placeholder="Tell us what’s going wrong, what you expected, and any steps to reproduce." className="w-full py-3 border-b border-[#e6e9e6] bg-transparent text-[14px] font-light text-[#2f3331] placeholder:text-[#afb3b0] focus:outline-none focus:border-[#7a6b2e] transition-colors resize-y" /></div><div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2"><p className="text-[#afb3b0] text-[11px]">Reply will be emailed to <span data-ph-mask={true} className="text-[#5c605d]">{(s == null ? undefined : s.email) ?? "the address you provide on signup"}</span>.</p><S type="submit" disabled={b === "sending" || !y.trim()} loading={b === "sending"} loadingText="Sending">Send Ticket</S></div><E open={b === "success"}><p className="text-gold-dark text-[12px]">✓ Ticket sent. Reference: <span className="font-medium">{W}</span>. We’ll reply at <span data-ph-mask={true}>{(s == null ? undefined : s.email) ?? "your email"}</span>.</p></E><E open={b === "error"}><p className="text-destructive text-[12px]">{Q}</p></E></form></div></div></div></div><div className="border-t border-[rgba(175,179,176,0.2)] pt-8 md:pt-12 text-center"><p className="text-[#777c79] text-[8px] md:text-[9.6px] tracking-[4.8px] uppercase">GEHNA PHOTO — PROFESSIONAL JEWELLERY PHOTOGRAPHY</p></div></div><div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#ffffff] border-t border-[#e6e9e6] p-3 z-10 safe-area-pb"><button onClick={() => m("/account")} className="w-full bg-[#7a6b2e] text-[#ffffff] py-3 text-[12px] tracking-[1.2px] uppercase hover:bg-[#5c5022] transition-colors rounded-lg">ACCOUNT SETTINGS</button></div></main>;
}
export { _e as default };