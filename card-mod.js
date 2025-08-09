/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = globalThis,
  e$2 = t$1.ShadowRoot && (void 0 === t$1.ShadyCSS || t$1.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  s$2 = Symbol(),
  o$4 = new WeakMap();
class n$4 {
  constructor(t, e, o) {
    if (this._$cssResult$ = !0, o !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const s = this.t;
    if (e$2 && void 0 === t) {
      const e = void 0 !== s && 1 === s.length;
      e && (t = o$4.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && o$4.set(s, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
}
const r$4 = t => new n$4("string" == typeof t ? t : t + "", void 0, s$2),
  S$1 = (s, o) => {
    if (e$2) s.adoptedStyleSheets = o.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet);else for (const e of o) {
      const o = document.createElement("style"),
        n = t$1.litNonce;
      void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
  },
  c$2 = e$2 ? t => t : t => t instanceof CSSStyleSheet ? (t => {
    let e = "";
    for (const s of t.cssRules) e += s.cssText;
    return r$4(e);
  })(t) : t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const {
    is: i$1,
    defineProperty: e$1,
    getOwnPropertyDescriptor: r$3,
    getOwnPropertyNames: h$2,
    getOwnPropertySymbols: o$3,
    getPrototypeOf: n$3
  } = Object,
  a$2 = globalThis,
  c$1 = a$2.trustedTypes,
  l$2 = c$1 ? c$1.emptyScript : "",
  p$1 = a$2.reactiveElementPolyfillSupport,
  d$1 = (t, s) => t,
  u$2 = {
    toAttribute(t, s) {
      switch (s) {
        case Boolean:
          t = t ? l$2 : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, s) {
      let i = t;
      switch (s) {
        case Boolean:
          i = null !== t;
          break;
        case Number:
          i = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            i = JSON.parse(t);
          } catch (t) {
            i = null;
          }
      }
      return i;
    }
  },
  f$2 = (t, s) => !i$1(t, s),
  y$2 = {
    attribute: !0,
    type: String,
    converter: u$2,
    reflect: !1,
    hasChanged: f$2
  };
Symbol.metadata ??= Symbol("metadata"), a$2.litPropertyMetadata ??= new WeakMap();
class b$1 extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t) {
    let s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : y$2;
    if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
      const i = Symbol(),
        r = this.getPropertyDescriptor(t, i, s);
      void 0 !== r && e$1(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, s, i) {
    const {
      get: e,
      set: h
    } = r$3(this.prototype, t) ?? {
      get() {
        return this[s];
      },
      set(t) {
        this[s] = t;
      }
    };
    return {
      get() {
        return e?.call(this);
      },
      set(s) {
        const r = e?.call(this);
        h.call(this, s), this.requestUpdate(t, r, i);
      },
      configurable: !0,
      enumerable: !0
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? y$2;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties"))) return;
    const t = n$3(this);
    t.finalize(), void 0 !== t.l && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
      const t = this.properties,
        s = [...h$2(t), ...o$3(t)];
      for (const i of s) this.createProperty(i, t[i]);
    }
    const t = this[Symbol.metadata];
    if (null !== t) {
      const s = litPropertyMetadata.get(t);
      if (void 0 !== s) for (const [t, i] of s) this.elementProperties.set(t, i);
    }
    this._$Eh = new Map();
    for (const [t, s] of this.elementProperties) {
      const i = this._$Eu(t, s);
      void 0 !== i && this._$Eh.set(i, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s) {
    const i = [];
    if (Array.isArray(s)) {
      const e = new Set(s.flat(1 / 0).reverse());
      for (const s of e) i.unshift(c$2(s));
    } else void 0 !== s && i.push(c$2(s));
    return i;
  }
  static _$Eu(t, s) {
    const i = s.attribute;
    return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$Eg = new Promise(t => this.enableUpdating = t), this._$AL = new Map(), this._$ES(), this.requestUpdate(), this.constructor.l?.forEach(t => t(this));
  }
  addController(t) {
    (this._$E_ ??= new Set()).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$E_?.delete(t);
  }
  _$ES() {
    const t = new Map(),
      s = this.constructor.elementProperties;
    for (const i of s.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$E_?.forEach(t => t.hostConnected?.());
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    this._$E_?.forEach(t => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, s, i) {
    this._$AK(t, i);
  }
  _$EO(t, s) {
    const i = this.constructor.elementProperties.get(t),
      e = this.constructor._$Eu(t, i);
    if (void 0 !== e && !0 === i.reflect) {
      const r = (void 0 !== i.converter?.toAttribute ? i.converter : u$2).toAttribute(s, i.type);
      this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
    }
  }
  _$AK(t, s) {
    const i = this.constructor,
      e = i._$Eh.get(t);
    if (void 0 !== e && this._$Em !== e) {
      const t = i.getPropertyOptions(e),
        r = "function" == typeof t.converter ? {
          fromAttribute: t.converter
        } : void 0 !== t.converter?.fromAttribute ? t.converter : u$2;
      this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
    }
  }
  requestUpdate(t, s, i) {
    let e = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
    let r = arguments.length > 4 ? arguments[4] : undefined;
    if (void 0 !== t) {
      if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? f$2)(e ? r : this[t], s)) return;
      this.C(t, s, i);
    }
    !1 === this.isUpdatePending && (this._$Eg = this._$EP());
  }
  C(t, s, i) {
    this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set()).add(t);
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$Eg;
    } catch (t) {
      Promise.reject(t);
    }
    const t = this.scheduleUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t, s] of this._$Ep) this[t] = s;
        this._$Ep = void 0;
      }
      const t = this.constructor.elementProperties;
      if (t.size > 0) for (const [s, i] of t) !0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.C(s, this[s], i);
    }
    let t = !1;
    const s = this._$AL;
    try {
      t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$E_?.forEach(t => t.hostUpdate?.()), this.update(s)) : this._$ET();
    } catch (s) {
      throw t = !1, this._$ET(), s;
    }
    t && this._$AE(s);
  }
  willUpdate(t) {}
  _$AE(t) {
    this._$E_?.forEach(t => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$ET() {
    this._$AL = new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Eg;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej &&= this._$Ej.forEach(t => this._$EO(t, this[t])), this._$ET();
  }
  updated(t) {}
  firstUpdated(t) {}
}
b$1.elementStyles = [], b$1.shadowRootOptions = {
  mode: "open"
}, b$1[d$1("elementProperties")] = new Map(), b$1[d$1("finalized")] = new Map(), p$1?.({
  ReactiveElement: b$1
}), (a$2.reactiveElementVersions ??= []).push("2.0.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = globalThis,
  i = t.trustedTypes,
  s$1 = i ? i.createPolicy("lit-html", {
    createHTML: t => t
  }) : void 0,
  e = "$lit$",
  h$1 = `lit$${(Math.random() + "").slice(9)}$`,
  o$2 = "?" + h$1,
  n$2 = `<${o$2}>`,
  r$2 = document,
  l$1 = () => r$2.createComment(""),
  c = t => null === t || "object" != typeof t && "function" != typeof t,
  a$1 = Array.isArray,
  u$1 = t => a$1(t) || "function" == typeof t?.[Symbol.iterator],
  d = "[ \t\n\f\r]",
  f$1 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  v = /-->/g,
  _ = />/g,
  m$1 = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"),
  p = /'/g,
  g = /"/g,
  $ = /^(?:script|style|textarea|title)$/i,
  y$1 = t => function (i) {
    for (var _len = arguments.length, s = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      s[_key - 1] = arguments[_key];
    }
    return {
      _$litType$: t,
      strings: i,
      values: s
    };
  },
  x = y$1(1),
  w = Symbol.for("lit-noChange"),
  T = Symbol.for("lit-nothing"),
  A = new WeakMap(),
  E = r$2.createTreeWalker(r$2, 129);
function C(t, i) {
  if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== s$1 ? s$1.createHTML(i) : i;
}
const P = (t, i) => {
  const s = t.length - 1,
    o = [];
  let r,
    l = 2 === i ? "<svg>" : "",
    c = f$1;
  for (let i = 0; i < s; i++) {
    const s = t[i];
    let a,
      u,
      d = -1,
      y = 0;
    for (; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);) y = c.lastIndex, c === f$1 ? "!--" === u[1] ? c = v : void 0 !== u[1] ? c = _ : void 0 !== u[2] ? ($.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = m$1) : void 0 !== u[3] && (c = m$1) : c === m$1 ? ">" === u[0] ? (c = r ?? f$1, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? m$1 : '"' === u[3] ? g : p) : c === g || c === p ? c = m$1 : c === v || c === _ ? c = f$1 : (c = m$1, r = void 0);
    const x = c === m$1 && t[i + 1].startsWith("/>") ? " " : "";
    l += c === f$1 ? s + n$2 : d >= 0 ? (o.push(a), s.slice(0, d) + e + s.slice(d) + h$1 + x) : s + h$1 + (-2 === d ? i : x);
  }
  return [C(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : "")), o];
};
class V {
  constructor(_ref, n) {
    let {
      strings: t,
      _$litType$: s
    } = _ref;
    let r;
    this.parts = [];
    let c = 0,
      a = 0;
    const u = t.length - 1,
      d = this.parts,
      [f, v] = P(t, s);
    if (this.el = V.createElement(f, n), E.currentNode = this.el.content, 2 === s) {
      const t = this.el.content.firstChild;
      t.replaceWith(...t.childNodes);
    }
    for (; null !== (r = E.nextNode()) && d.length < u;) {
      if (1 === r.nodeType) {
        if (r.hasAttributes()) for (const t of r.getAttributeNames()) if (t.endsWith(e)) {
          const i = v[a++],
            s = r.getAttribute(t).split(h$1),
            e = /([.?@])?(.*)/.exec(i);
          d.push({
            type: 1,
            index: c,
            name: e[2],
            strings: s,
            ctor: "." === e[1] ? k : "?" === e[1] ? H : "@" === e[1] ? I : R
          }), r.removeAttribute(t);
        } else t.startsWith(h$1) && (d.push({
          type: 6,
          index: c
        }), r.removeAttribute(t));
        if ($.test(r.tagName)) {
          const t = r.textContent.split(h$1),
            s = t.length - 1;
          if (s > 0) {
            r.textContent = i ? i.emptyScript : "";
            for (let i = 0; i < s; i++) r.append(t[i], l$1()), E.nextNode(), d.push({
              type: 2,
              index: ++c
            });
            r.append(t[s], l$1());
          }
        }
      } else if (8 === r.nodeType) if (r.data === o$2) d.push({
        type: 2,
        index: c
      });else {
        let t = -1;
        for (; -1 !== (t = r.data.indexOf(h$1, t + 1));) d.push({
          type: 7,
          index: c
        }), t += h$1.length - 1;
      }
      c++;
    }
  }
  static createElement(t, i) {
    const s = r$2.createElement("template");
    return s.innerHTML = t, s;
  }
}
function N(t, i) {
  let s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
  let e = arguments.length > 3 ? arguments[3] : undefined;
  if (i === w) return i;
  let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
  const o = c(i) ? void 0 : i._$litDirective$;
  return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = N(t, h._$AS(t, i.values), h, e)), i;
}
class S {
  constructor(t, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const {
        el: {
          content: i
        },
        parts: s
      } = this._$AD,
      e = (t?.creationScope ?? r$2).importNode(i, !0);
    E.currentNode = e;
    let h = E.nextNode(),
      o = 0,
      n = 0,
      l = s[0];
    for (; void 0 !== l;) {
      if (o === l.index) {
        let i;
        2 === l.type ? i = new M(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new L(h, this, t)), this._$AV.push(i), l = s[++n];
      }
      o !== l?.index && (h = E.nextNode(), o++);
    }
    return E.currentNode = r$2, e;
  }
  p(t) {
    let i = 0;
    for (const s of this._$AV) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }
}
class M {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, i, s, e) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t) {
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
    t = N(this, t, i), c(t) ? t === T || null == t || "" === t ? (this._$AH !== T && this._$AR(), this._$AH = T) : t !== this._$AH && t !== w && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : u$1(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== T && c(this._$AH) ? this._$AA.nextSibling.data = t : this.$(r$2.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    const {
        values: i,
        _$litType$: s
      } = t,
      e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = V.createElement(C(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === e) this._$AH.p(i);else {
      const t = new S(e, this),
        s = t.u(this.options);
      t.p(i), this.$(s), this._$AH = t;
    }
  }
  _$AC(t) {
    let i = A.get(t.strings);
    return void 0 === i && A.set(t.strings, i = new V(t)), i;
  }
  T(t) {
    a$1(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s,
      e = 0;
    for (const h of t) e === i.length ? i.push(s = new M(this.k(l$1()), this.k(l$1()), this, this.options)) : s = i[e], s._$AI(h), e++;
    e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
  }
  _$AR() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._$AA.nextSibling;
    let i = arguments.length > 1 ? arguments[1] : undefined;
    for (this._$AP?.(!1, !0, i); t && t !== this._$AB;) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
  }
}
class R {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, i, s, e, h) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = T;
  }
  _$AI(t) {
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
    let s = arguments.length > 2 ? arguments[2] : undefined;
    let e = arguments.length > 3 ? arguments[3] : undefined;
    const h = this.strings;
    let o = !1;
    if (void 0 === h) t = N(this, t, i, 0), o = !c(t) || t !== this._$AH && t !== w, o && (this._$AH = t);else {
      const e = t;
      let n, r;
      for (t = h[0], n = 0; n < h.length - 1; n++) r = N(this, e[s + n], i, n), r === w && (r = this._$AH[n]), o ||= !c(r) || r !== this._$AH[n], r === T ? t = T : t !== T && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
    }
    o && !e && this.O(t);
  }
  O(t) {
    t === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class k extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  O(t) {
    this.element[this.name] = t === T ? void 0 : t;
  }
}
class H extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  O(t) {
    this.element.toggleAttribute(this.name, !!t && t !== T);
  }
}
class I extends R {
  constructor(t, i, s, e, h) {
    super(t, i, s, e, h), this.type = 5;
  }
  _$AI(t) {
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
    if ((t = N(this, t, i, 0) ?? T) === w) return;
    const s = this._$AH,
      e = t === T && s !== T || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive,
      h = t !== T && (s === T || e);
    e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class L {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    N(this, t);
  }
}
const Z = t.litHtmlPolyfillSupport;
Z?.(V, M), (t.litHtmlVersions ??= []).push("3.1.0");
const j = (t, i, s) => {
  const e = s?.renderBefore ?? i;
  let h = e._$litPart$;
  if (void 0 === h) {
    const t = s?.renderBefore ?? null;
    e._$litPart$ = h = new M(i.insertBefore(l$1(), t), t, void 0, s ?? {});
  }
  return h._$AI(t), h;
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class s extends b$1 {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = j(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return w;
  }
}
s._$litElement$ = !0, s["finalized"] = !0, globalThis.litElementHydrateSupport?.({
  LitElement: s
});
const r$1 = globalThis.litElementPolyfillSupport;
r$1?.({
  LitElement: s
});
(globalThis.litElementVersions ??= []).push("4.0.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$1 = {
    attribute: !0,
    type: String,
    converter: u$2,
    reflect: !1,
    hasChanged: f$2
  },
  r = function () {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : o$1;
    let e = arguments.length > 1 ? arguments[1] : undefined;
    let r = arguments.length > 2 ? arguments[2] : undefined;
    const {
      kind: n,
      metadata: i
    } = r;
    let s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map()), s.set(r.name, t), "accessor" === n) {
      const {
        name: o
      } = r;
      return {
        set(r) {
          const n = e.get.call(this);
          e.set.call(this, r), this.requestUpdate(o, n, t);
        },
        init(e) {
          return void 0 !== e && this.C(o, void 0, t), e;
        }
      };
    }
    if ("setter" === n) {
      const {
        name: o
      } = r;
      return function (r) {
        const n = this[o];
        e.call(this, r), this.requestUpdate(o, n, t);
      };
    }
    throw Error("Unsupported decorator location: " + n);
  };
function n$1(t) {
  return (e, o) => "object" == typeof o ? r(t, e, o) : ((t, e, o) => {
    const r = e.hasOwnProperty(o);
    return e.constructor.createProperty(o, r ? {
      ...t,
      wrapped: !0
    } : t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
  })(t, e, o);
}
var u;
const o = /* @__PURE__ */new WeakMap(),
  l = () => {},
  n = class n {
    constructor(s) {
      this.subscribers = [], this.settlement = null, this[u] = "Unpromise", typeof s == "function" ? this.promise = new Promise(s) : this.promise = s;
      const e = this.promise.then(t => {
        const {
          subscribers: r
        } = this;
        this.subscribers = null, this.settlement = {
          status: "fulfilled",
          value: t
        }, r == null || r.forEach(_ref2 => {
          let {
            resolve: c
          } = _ref2;
          c(t);
        });
      });
      "catch" in e && e.catch(t => {
        const {
          subscribers: r
        } = this;
        this.subscribers = null, this.settlement = {
          status: "rejected",
          reason: t
        }, r == null || r.forEach(_ref3 => {
          let {
            reject: c
          } = _ref3;
          c(t);
        });
      });
    }
    /** Create a promise that mitigates uncontrolled subscription to a long-lived
     * Promise via .then() and .catch() - otherwise a source of memory leaks.
     *
     * The returned promise has an `unsubscribe()` method which can be called when
     * the Promise is no longer being tracked by application logic, and which
     * ensures that there is no reference chain from the original promise to the
     * new one, and therefore no memory leak.
     *
     * If original promise has not yet settled, this adds a new unique promise
     * that listens to then/catch events, along with an `unsubscribe()` method to
     * detach it.
     *
     * If original promise has settled, then creates a new Promise.resolve() or
     * Promise.reject() and provided unsubscribe is a noop.
     *
     * If you call `unsubscribe()` before the returned Promise has settled, it
     * will never settle.
     */
    subscribe() {
      let s, e;
      const {
        settlement: t
      } = this;
      if (t === null) {
        if (this.subscribers === null) throw new Error("Unpromise settled but still has subscribers");
        const r = h();
        this.subscribers = f(this.subscribers, r), s = r.promise, e = () => {
          this.subscribers !== null && (this.subscribers = y(this.subscribers, r));
        };
      } else {
        const {
          status: r
        } = t;
        r === "fulfilled" ? s = Promise.resolve(t.value) : s = Promise.reject(t.reason), e = l;
      }
      return Object.assign(s, {
        unsubscribe: e
      });
    }
    /** STANDARD PROMISE METHODS (but returning a SubscribedPromise) */
    then(s, e) {
      const t = this.subscribe(),
        {
          unsubscribe: r
        } = t;
      return Object.assign(t.then(s, e), {
        unsubscribe: r
      });
    }
    catch(s) {
      const e = this.subscribe(),
        {
          unsubscribe: t
        } = e;
      return Object.assign(e.catch(s), {
        unsubscribe: t
      });
    }
    finally(s) {
      const e = this.subscribe(),
        {
          unsubscribe: t
        } = e;
      return Object.assign(e.finally(s), {
        unsubscribe: t
      });
    }
    /** Unpromise STATIC METHODS */
    /** Create or Retrieve the proxy Unpromise (a re-used Unpromise for the VM lifetime
     * of the provided Promise reference) */
    static proxy(s) {
      const e = n.getSubscribablePromise(s);
      return typeof e < "u" ? e : n.createSubscribablePromise(s);
    }
    /** Create and store an Unpromise keyed by an original Promise. */
    static createSubscribablePromise(s) {
      const e = new n(s);
      return o.set(s, e), o.set(e, e), e;
    }
    /** Retrieve a previously-created Unpromise keyed by an original Promise. */
    static getSubscribablePromise(s) {
      return o.get(s);
    }
    /** Promise STATIC METHODS */
    /** Lookup the Unpromise for this promise, and derive a SubscribedPromise from
     * it (that can be later unsubscribed to eliminate Memory leaks) */
    static resolve(s) {
      const e = typeof s == "object" && s !== null && "then" in s && typeof s.then == "function" ? s : Promise.resolve(s);
      return n.proxy(e).subscribe();
    }
    static async any(s) {
      const t = (Array.isArray(s) ? s : [...s]).map(n.resolve);
      try {
        return await Promise.any(t);
      } finally {
        t.forEach(_ref4 => {
          let {
            unsubscribe: r
          } = _ref4;
          r();
        });
      }
    }
    static async race(s) {
      const t = (Array.isArray(s) ? s : [...s]).map(n.resolve);
      try {
        return await Promise.race(t);
      } finally {
        t.forEach(_ref5 => {
          let {
            unsubscribe: r
          } = _ref5;
          r();
        });
      }
    }
    /** Create a race of SubscribedPromises that will fulfil to a single winning
     * Promise (in a 1-Tuple). Eliminates memory leaks from long-lived promises
     * accumulating .then() and .catch() subscribers. Allows simple logic to
     * consume the result, like...
     * ```ts
     * const [ winner ] = await Unpromise.race([ promiseA, promiseB ]);
     * if(winner === promiseB){
     *   const result = await promiseB;
     *   // do the thing
     * }
     * ```
     * */
    static async raceReferences(s) {
      const e = s.map(a);
      try {
        return await Promise.race(e);
      } finally {
        for (const t of e) t.unsubscribe();
      }
    }
  };
u = Symbol.toStringTag;
let b = n;
function a(i) {
  return b.proxy(i).then(() => [i]);
}
function h() {
  let i, s;
  return {
    promise: new Promise((t, r) => {
      i = t, s = r;
    }),
    resolve: i,
    reject: s
  };
}
function f(i, s) {
  return [...i, s];
}
function m(i, s) {
  return [...i.slice(0, s), ...i.slice(s + 1)];
}
function y(i, s) {
  const e = i.indexOf(s);
  return e !== -1 ? m(i, e) : i;
}
async function hass_base_el() {
  await b.race([customElements.whenDefined("home-assistant"), customElements.whenDefined("hc-main")]);
  const element = customElements.get("home-assistant") ? "home-assistant" : "hc-main";
  while (!document.querySelector(element)) await new Promise(r => window.setTimeout(r, 100));
  return document.querySelector(element);
}
async function hass() {
  const base = await hass_base_el();
  while (!base.hass) await new Promise(r => window.setTimeout(r, 100));
  return base.hass;
}
const ID_STORAGE_KEY = "browser_mod-browser-id";
function BrowserID() {
  if (document.querySelector("hc-main")) return "CAST";
  if (localStorage[ID_STORAGE_KEY]) return localStorage[ID_STORAGE_KEY];
  return "";
}
window.cardMod_template_cache = window.cardMod_template_cache || {};
const cachedTemplates = window.cardMod_template_cache;
function template_updated(key, result) {
  const cache = cachedTemplates[key];
  if (!cache) {
    return;
  }
  cache.value = result.result;
  cache.callbacks.forEach(f => f(result.result));
}
function hasTemplate(str) {
  if (!str) return false;
  return String(str).includes("{%") || String(str).includes("{{");
}
async function bind_template(callback, template, variables) {
  const hs = await hass();
  const connection = hs.connection;
  const cacheKey = JSON.stringify([template, variables]);
  let cache = cachedTemplates[cacheKey];
  if (!cache) {
    unbind_template(callback);
    callback("");
    variables = Object.assign({
      user: hs.user.name,
      browser: BrowserID(),
      hash: location.hash.substr(1) || ""
    }, variables);
    cachedTemplates[cacheKey] = cache = {
      template,
      variables,
      value: "",
      callbacks: new Set([callback]),
      unsubscribe: connection.subscribeMessage(result => template_updated(cacheKey, result), {
        type: "render_template",
        template,
        variables
      })
    };
  } else {
    if (!cache.callbacks.has(callback)) unbind_template(callback);
    callback(cache.value);
    cache.callbacks.add(callback);
  }
}
async function unbind_template(callback) {
  let unsubscriber;
  for (const [key, cache] of Object.entries(cachedTemplates)) {
    if (cache.callbacks.has(callback)) {
      cache.callbacks.delete(callback);
      if (cache.callbacks.size == 0) {
        unsubscriber = cache.unsubscribe;
        delete cachedTemplates[key];
      }
      break;
    }
  }
  if (unsubscriber) await (await unsubscriber)();
}
var name = "card-mod";
var browserslist = "> 0.25%, not dead";
var version = "3.4.5";
var description = "";
var scripts = {
  build: "rollup -c",
  watch: "rollup -c --watch"
};
var keywords = [];
var author = "Thomas Lovén";
var license = "MIT";
var devDependencies = {
  "@babel/core": "^7.23.6",
  "@babel/preset-env": "^7.23.6",
  "@rollup/plugin-babel": "^6.0.4",
  "@rollup/plugin-json": "^6.1.0",
  "@rollup/plugin-node-resolve": "^15.2.3",
  rollup: "^2.79.1",
  "rollup-plugin-terser": "^7.0.2",
  "rollup-plugin-typescript2": "^0.36.0",
  typescript: "^5.3.3"
};
var dependencies = {
  "@watchable/unpromise": "^1.0.2",
  lit: "^3.1.0",
  tslib: "^2.6.2"
};
var pjson = {
  name: name,
  browserslist: browserslist,
  "private": true,
  version: version,
  description: description,
  scripts: scripts,
  keywords: keywords,
  author: author,
  license: license,
  devDependencies: devDependencies,
  dependencies: dependencies
};
const _load_yaml2json = async () => {
  if (customElements.get("developer-tools-event")) return;
  await customElements.whenDefined("partial-panel-resolver");
  const ppr = document.createElement("partial-panel-resolver");
  ppr.hass = {
    panels: [{
      url_path: "tmp",
      component_name: "developer-tools"
    }]
  };
  ppr._updateRoutes();
  await ppr.routerOptions.routes.tmp.load();
  await customElements.whenDefined("developer-tools-router");
  const dtr = document.createElement("developer-tools-router");
  await dtr.routerOptions.routes.event.load();
};
const yaml2json = async yaml => {
  await _load_yaml2json();
  const el = document.createElement("ha-yaml-editor");
  el._onChange(new CustomEvent("yaml", {
    detail: {
      value: yaml
    }
  }));
  return el.value;
};
async function get_theme(root) {
  var _a;
  if (!root.type) return null;
  const el = root.parentElement ? root.parentElement : root;
  const theme = window.getComputedStyle(el).getPropertyValue("--card-mod-theme");
  const hs = await hass();
  if (!hs) return {};
  const themes = (_a = hs === null || hs === void 0 ? void 0 : hs.themes.themes) !== null && _a !== void 0 ? _a : {};
  if (!themes[theme]) return {};
  if (themes[theme][`card-mod-${root.type}-yaml`]) {
    return yaml2json(themes[theme][`card-mod-${root.type}-yaml`]);
  } else if (themes[theme][`card-mod-${root.type}`]) {
    return {
      ".": themes[theme][`card-mod-${root.type}`]
    };
  } else {
    return {};
  }
}
const TIMEOUT_ERROR = "SELECTTREE-TIMEOUT";
async function await_element(el) {
  let hard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var _a;
  if ((_a = el.localName) === null || _a === void 0 ? void 0 : _a.includes("-")) await customElements.whenDefined(el.localName);
  if (el.updateComplete) await el.updateComplete;
  if (hard) {
    if (el.pageRendered) await el.pageRendered;
    if (el._panelState) {
      let rounds = 0;
      while (el._panelState !== "loaded" && rounds++ < 5) await new Promise(r => setTimeout(r, 100));
    }
  }
}
async function _selectTree(root, path) {
  let all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let el = [root];
  // Split and clean path
  if (typeof path === "string") {
    path = path.split(/(\$| )/);
  }
  while (path[path.length - 1] === "") path.pop();
  // For each element in the path
  for (const [i, p] of path.entries()) {
    if (p === "$") {
      await Promise.all([...el].map(e => await_element(e)));
      el = [...el].map(e => e.shadowRoot);
      continue;
    }
    // Only pick the first one for the next step
    const e = el[0];
    if (!e) return null;
    if (!p.trim().length) continue;
    await await_element(e);
    el = e.querySelectorAll(p);
  }
  return all ? el : el[0];
}
async function selectTree(root, path) {
  let all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10000;
  return b.race([_selectTree(root, path, all), new Promise((_, reject) => setTimeout(() => reject(new Error(TIMEOUT_ERROR)), timeout))]).catch(err => {
    if (!err.message || err.message !== TIMEOUT_ERROR) throw err;
    return null;
  });
}
class ModdedElement extends s {
  constructor() {
    super(...arguments);
    this._cardMod = [];
  }
  setConfig(_orig, config) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }
    _orig === null || _orig === void 0 ? void 0 : _orig(config, ...args);
    this._cardMod.forEach(cm => {
      var _a;
      cm.variables = {
        config
      };
      cm.styles = ((_a = config.card_mod) === null || _a === void 0 ? void 0 : _a.style) || {};
    });
  }
  updated(_orig) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    _orig === null || _orig === void 0 ? void 0 : _orig(...args);
    Promise.all([this.updateComplete]).then(() => this._cardMod.forEach(cm => {
      var _a;
      return (_a = cm.refresh) === null || _a === void 0 ? void 0 : _a.call(cm);
    }));
  }
}
async function apply_card_mod_compatible(element, type) {
  let cm_config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  let variables = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  let shadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  let cls = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
  // TODO: Remove in June 2024
  // This is for backwards compatibility with Card mod version 3.3 and earlier.
  // Do not remove this before June 2024 unless Card-mod 4.0 is released.
  var _a, _b;
  // Wrapper for backwards compatibility (with deprecation warning)
  // Old signature:
  //   el: Node
  //   type: string
  //   styles: CardModStyle = ""
  //   variables: object = {}
  //   _: any = null
  //   shadow: boolean = true
  //
  // New signature
  //   el: Node
  //   type: string
  //   cm_config: CardModConfig
  //   variables: object = {}
  //   shadow: boolean = true
  //   cls: str = undefined
  let oldStyle = false;
  if (cls !== undefined) {
    if (typeof cls !== "string") {
      // Old style call
      oldStyle = true;
      shadow = cls;
      cls = undefined;
    }
  }
  if (typeof shadow !== "boolean") {
    // Old style call
    shadow = true;
    oldStyle = true;
  }
  if (typeof cm_config === "string") {
    // Old style call with string styles
    cm_config = {
      style: cm_config
    };
    oldStyle = true;
  }
  if (cm_config && Object.keys(cm_config).length !== 0 && ((_b = (_a = cm_config === null || cm_config === void 0 ? void 0 : cm_config.style) !== null && _a !== void 0 ? _a : cm_config === null || cm_config === void 0 ? void 0 : cm_config.class) !== null && _b !== void 0 ? _b : cm_config === null || cm_config === void 0 ? void 0 : cm_config.debug) === undefined) {
    // Old style call with object styles
    cm_config = {
      style: cm_config
    };
    oldStyle = true;
  }
  if (oldStyle && !window.cm_compatibility_warning) {
    window.cm_compatibility_warning = true;
    console.groupCollapsed("Card-mod warning");
    console.info("You are using a custom card which relies on card-mod, and uses an outdated signature for applyToElement.");
    console.info("The outdated signature will be removed at some point in the future. Hopefully the developer of your card will have updated their card by then.");
    console.info("The card used card-mod to apply styles here:", element);
    console.groupEnd();
  }
  return apply_card_mod(element, type, cm_config, variables, shadow, cls);
}
async function apply_card_mod(element, type) {
  let cm_config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  let variables = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  let shadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  let cls = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
  var _a, _b, _c, _d, _e, _f, _g;
  const debug = (cm_config === null || cm_config === void 0 ? void 0 : cm_config.debug) ? function () {
    for (var _len4 = arguments.length, msg = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      msg[_key4] = arguments[_key4];
    }
    return console.log("CardMod Debug:", ...msg);
  } : function () {};
  debug("Applying card-mod to:", ...((element === null || element === void 0 ? void 0 : element.host) ? ["#shadow-root of:", element === null || element === void 0 ? void 0 : element.host] : [element]), "type: ", type, "configuration: ", cm_config);
  if (!element) return;
  // Wait for target element to exist
  if ((_a = element.localName) === null || _a === void 0 ? void 0 : _a.includes("-")) await customElements.whenDefined(element.localName);
  element._cardMod = element._cardMod || [];
  // Find any existing card-mod elements of the right type
  const cm = (_b = element._cardMod.find(cm => cm.type === type)) !== null && _b !== void 0 ? _b : document.createElement("card-mod");
  debug("Applying card-mod in:", cm);
  cm.type = type;
  cm.debug = (_c = cm_config === null || cm_config === void 0 ? void 0 : cm_config.debug) !== null && _c !== void 0 ? _c : false;
  // (cm as any).setAttribute("card-mod-type", type);
  if (!element._cardMod.includes(cm)) element._cardMod.push(cm);
  window.setTimeout(async () => {
    var _a, _b, _c;
    await Promise.all([element.updateComplete]);
    const target = ((_a = element.modElement) !== null && _a !== void 0 ? _a : shadow) ? (_b = element.shadowRoot) !== null && _b !== void 0 ? _b : element : element;
    if (!target.contains(cm)) target.appendChild(cm);
    cm.variables = variables;
    cm.styles = (_c = cm_config === null || cm_config === void 0 ? void 0 : cm_config.style) !== null && _c !== void 0 ? _c : "";
  }, 1);
  const classes = (_f = typeof (cm_config === null || cm_config === void 0 ? void 0 : cm_config.class) == "string" ? (_e = (_d = cm_config === null || cm_config === void 0 ? void 0 : cm_config.class) === null || _d === void 0 ? void 0 : _d.split) === null || _e === void 0 ? void 0 : _e.call(_d, " ") : cm_config === null || cm_config === void 0 ? void 0 : cm_config.class) !== null && _f !== void 0 ? _f : [];
  (_g = element.classList) === null || _g === void 0 ? void 0 : _g.add(...classes, cls);
  return cm;
}
function merge_deep(target, source) {
  const isObject = i => {
    return i && typeof i === "object" && !Array.isArray(i);
  };
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {
          [key]: {}
        });
        if (typeof target[key] === "string") target[key] = {
          ".": target[key]
        };
        merge_deep(target[key], source[key]);
      } else {
        if (target[key]) target[key] = source[key] + target[key];else target[key] = source[key];
      }
    }
  }
  return target;
}
function compare_deep(a, b) {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (!(a instanceof Object && b instanceof Object)) return false;
  for (const x in a) {
    if (!a.hasOwnProperty(x)) continue;
    if (!b.hasOwnProperty(x)) return false;
    if (a[x] === b[x]) continue;
    if (typeof a[x] !== "object") return false;
    if (!compare_deep(a[x], b[x])) return false;
  }
  for (const x in b) {
    if (!b.hasOwnProperty(x)) continue;
    if (!a.hasOwnProperty(x)) return false;
  }
  return true;
}
class CardMod extends s {
  static get applyToElement() {
    // This gets the compatibility wrapper for backwards compatibility with card-mod 3.3.
    // The wrapper should be removed at earliest June 2024, or if card-mod 4.0 is released
    return apply_card_mod_compatible;
  }
  constructor() {
    super();
    this.card_mod_children = {};
    this.card_mod_parent = undefined;
    this.debug = false;
    this._fixed_styles = {};
    this._styles = "";
    this._rendered_styles = "";
    this._observer = new MutationObserver(mutations => {
      // MutationObserver to keep track of any changes to the parent element
      // e.g. when elements are changed after creation.
      // The observer is activated in _connect() only if there are any styles
      //  which should be applied to children
      for (const m of mutations) {
        if (m.target.localName === "card-mod") return;
        if (m.addedNodes.length) m.addedNodes.forEach(n => {
          if (n.localName !== "card-mod") ;
        });
        if (m.removedNodes.length) m.removedNodes.forEach(n => {
          if (n.localName !== "card-mod") ;
        });
      }
      if (stop) return;
      this.refresh();
    });
    // cm_update is issued when themes are reloaded
    document.addEventListener("cm_update", () => {
      this._process_styles(this.card_mod_input);
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.refresh();
    // Make sure the card-mod element is invisible
    this.setAttribute("slot", "none");
    this.style.display = "none";
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._disconnect();
  }
  set styles(stl) {
    // Parsing styles is expensive, so only do it if things have actually changed
    if (compare_deep(stl, this.card_mod_input)) return;
    this.card_mod_input = stl;
    this._process_styles(stl);
  }
  get styles() {
    // Return only styles that apply to this element
    return this._styles;
  }
  refresh() {
    this._connect();
  }
  _debug() {
    for (var _len5 = arguments.length, msg = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      msg[_key5] = arguments[_key5];
    }
    if (this.debug) console.log("CardMod Debug:", ...msg);
  }
  async _process_styles(stl) {
    let styles = typeof stl === "string" ? {
      ".": stl
    } : JSON.parse(JSON.stringify(stl));
    // Merge card_mod styles with theme styles
    const theme_styles = await get_theme(this);
    merge_deep(styles, theme_styles);
    // Save processed styles
    this._fixed_styles = styles;
    this.refresh();
  }
  async _style_child(path, style) {
    let retries = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const parent = this.parentElement || this.parentNode;
    const elements = await selectTree(parent, path, true);
    if (!elements || !elements.length) {
      if (retries > 5) throw new Error("NoElements");
      await new Promise(resolve => setTimeout(resolve, retries * 100));
      return this._style_child(path, style, retries + 1);
    }
    return [...elements].map(async ch => {
      const cm = await apply_card_mod(ch, `${this.type}-child`, {
        style,
        debug: this.debug
      }, this.variables, false);
      if (cm) cm.card_mod_parent = this;
      return cm;
    });
  }
  async _connect() {
    var _a, _b, _c, _d;
    const styles = (_a = this._fixed_styles) !== null && _a !== void 0 ? _a : {};
    const styleChildren = {};
    let thisStyle = "";
    let hasChildren = false;
    this.parentElement || this.parentNode;
    this._debug("(Re)connecting", this);
    // Go through each path in the styles
    for (const [key, value] of Object.entries(styles)) {
      if (key === ".") {
        if (typeof value === "string") thisStyle = value;else this._debug("Style of '.' must be a string: ", value);
      } else {
        hasChildren = true;
        styleChildren[key] = this._style_child(key, value).catch(e => {
          if (e.message == "NoElements") {
            if (this.debug) {
              console.groupCollapsed("card-mod found no elements");
              console.info(`Looked for ${key}`);
              console.info(this);
              console.groupEnd();
            }
            return;
          }
          throw e;
        });
      }
    }
    // Prune old child elements
    for (const key in this.card_mod_children) {
      if (!styleChildren[key]) {
        (_b = await this.card_mod_children[key]) === null || _b === void 0 ? void 0 : _b.forEach(async ch => (await ch).styles = "");
      }
    }
    this.card_mod_children = styleChildren;
    // Process styles applicable to this card-mod element
    if (this._styles === thisStyle) return;
    this._styles = thisStyle;
    if (hasTemplate(this._styles)) {
      this._renderer = this._renderer || this._style_rendered.bind(this);
      bind_template(this._renderer, this._styles, this.variables);
    } else {
      this._style_rendered(this._styles || "");
    }
    if (hasChildren) {
      this._observer.disconnect();
      const parentEl = (_c = this.parentElement) !== null && _c !== void 0 ? _c : this.parentNode;
      this._observer.observe((_d = parentEl === null || parentEl === void 0 ? void 0 : parentEl.host) !== null && _d !== void 0 ? _d : parentEl, {
        childList: true
      });
    }
  }
  async _disconnect() {
    var _a, _b;
    this._observer.disconnect();
    this._styles = "";
    await unbind_template(this._renderer);
    (_b = (_a = this.card_mod_parent) === null || _a === void 0 ? void 0 : _a.refresh) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  _style_rendered(result) {
    if (this._rendered_styles !== result) this._rendered_styles = result;
    // This event is listened for by icons
    this.dispatchEvent(new Event("card-mod-update"));
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return x`
      <style>
        ${this._rendered_styles}
      </style>
    `;
  }
}
__decorate([n$1({
  attribute: "card-mod-type",
  reflect: true
})], CardMod.prototype, "type", void 0);
__decorate([n$1()], CardMod.prototype, "_rendered_styles", void 0);
if (!customElements.get("card-mod")) {
  customElements.define("card-mod", CardMod);
  console.info(`%cCARD-MOD ${pjson.version} IS INSTALLED`, "color: green; font-weight: bold");
}
(async () => {
  // Wait for scoped customElements registry to be set up
  // and then redefine card-mod if necessary
  // otherwise the customElements registry card-mod is defined in
  // may get overwritten by the polyfill if card-mod is loaded as a module
  while (customElements.get("home-assistant") === undefined) await new Promise(resolve => window.setTimeout(resolve, 100));
  if (!customElements.get("card-mod")) {
    customElements.define("card-mod", CardMod);
  }
})();
const patch_method = function (obj, method, override) {
  if (method === "constructor") return;
  const original = obj[method];
  if (original === null || original === void 0 ? void 0 : original.cm_patched) return;
  const fn = function () {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    try {
      return override.call(this, original === null || original === void 0 ? void 0 : original.bind(this), ...args);
    } catch (e) {
      console.error("Card-mod", e);
      return original === null || original === void 0 ? void 0 : original.bind(this)(...args);
    }
  };
  fn.cm_patched = true;
  obj[method] = fn;
};
const patch_object = (obj, patch) => {
  if (!obj) return;
  for (const method in Object.getOwnPropertyDescriptors(patch.prototype)) {
    patch_method(obj, method, patch.prototype[method]);
  }
};
const patch_prototype = async (cls, patch, afterwards) => {
  if (typeof cls === "string") {
    await customElements.whenDefined(cls);
    cls = customElements.get(cls);
  }
  const patched = patch_object(cls.prototype, patch);
  afterwards === null || afterwards === void 0 ? void 0 : afterwards();
  return patched;
};
// Decorator for patching a custom-element
function patch_element(element, afterwards) {
  return function patched(constructor) {
    patch_prototype(element, constructor, afterwards);
  };
}

/*
Patch the ha-card element to on first update:
- try to find the config parameter of it's parent element
- Apply card_mod styles according to that config
*/
let HaCardPatch = class HaCardPatch extends ModdedElement {
  constructor() {
    super(...arguments);
    this._cardMod = [];
  }
  async firstUpdated(_orig) {
    var _a, _b, _c;
    for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
      args[_key7 - 1] = arguments[_key7];
    }
    await (_orig === null || _orig === void 0 ? void 0 : _orig(...args));
    const config = findConfig(this);
    const cls = `type-${(_b = (_a = config === null || config === void 0 ? void 0 : config.type) === null || _a === void 0 ? void 0 : _a.replace) === null || _b === void 0 ? void 0 : _b.call(_a, ":", "-")}`;
    await apply_card_mod(this, "card", config === null || config === void 0 ? void 0 : config.card_mod, {
      config
    }, false, cls);
    const parent = (_c = this.parentNode) === null || _c === void 0 ? void 0 : _c.host;
    if (!parent) return;
    patch_object(parent, ModdedElement);
    parent._cardMod = this._cardMod;
  }
};
HaCardPatch = __decorate([patch_element("ha-card")], HaCardPatch);
function findConfig(node) {
  if (node.config) return node.config;
  if (node._config) return node._config;
  if (node.host) return findConfig(node.host);
  if (node.parentElement) return findConfig(node.parentElement);
  if (node.parentNode) return findConfig(node.parentNode);
  return null;
}

/*
Patch the hui-entities-card specifically in order to handle individual styling of each row
*/
let HuiEntitiesCardPatch = class HuiEntitiesCardPatch extends ModdedElement {
  _renderEntity(_orig, config) {
    var _a, _b;
    for (var _len8 = arguments.length, rest = new Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
      rest[_key8 - 2] = arguments[_key8];
    }
    const retval = _orig === null || _orig === void 0 ? void 0 : _orig(config, ...rest);
    if ((config === null || config === void 0 ? void 0 : config.type) === "custom:mod-card") return retval;
    if (!(retval === null || retval === void 0 ? void 0 : retval.values)) return retval;
    const row = retval.values[0];
    if (!row) return retval;
    const cls = `type-${(_b = (_a = config === null || config === void 0 ? void 0 : config.type) === null || _a === void 0 ? void 0 : _a.replace) === null || _b === void 0 ? void 0 : _b.call(_a, ":", "-")}`;
    const apply = async () => {
      await await_element(row);
      patch_object(row, ModdedElement);
      apply_card_mod(row, "row", config === null || config === void 0 ? void 0 : config.card_mod, {
        config
      }, true, cls);
      row.addEventListener("ll-rebuild", apply);
    };
    Promise.all([this.updateComplete]).then(() => apply());
    return retval;
  }
};
HuiEntitiesCardPatch = __decorate([patch_element("hui-entities-card")], HuiEntitiesCardPatch);

/*
Patch the hui-glance-card specifically in order to handle individual styling of each item
Items in glance cards are not isolated like rows in entities cards, so the styling options
are somewhat limited. Therefore this patch creates a separate shadowRoot for each item.
*/
// https://github.com/home-assistant/frontend/blob/8c39ed46a83e7e889c389af466c0fd1b07fbf6fd/src/panels/lovelace/cards/hui-glance-card.ts#L202-L211
// https://github.com/home-assistant/frontend/blob/8c39ed46a83e7e889c389af466c0fd1b07fbf6fd/src/panels/lovelace/cards/hui-glance-card.ts#L231-L233
const ENTITY_STYLES = `
div {
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.name {
  min-height: var(--paper-font-body1_-_line-height, 20px);
}
state-badge {
  margin: 8px 0;
}
`;
let HuiGlanceCardPatch = class HuiGlanceCardPatch extends ModdedElement {
  // hui-glance-card has a renderEntity method, but the return from that is too messy
  // Instead find every icon after render in the updated method.
  updated(_orig) {
    var _a, _b, _c;
    for (var _len9 = arguments.length, args = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
      args[_key9 - 1] = arguments[_key9];
    }
    _orig === null || _orig === void 0 ? void 0 : _orig(...args);
    // Each entity of a glance card is contained in a div.entity
    // Go through each and apply styling individually
    for (const el of this.shadowRoot.querySelectorAll("ha-card div.entity")) {
      patch_object(el, ModdedElement);
      // Create a shadowroot for each entity
      // This makes it easier to style entities individually without styles "leaking" out
      const root = (_a = el.shadowRoot) !== null && _a !== void 0 ? _a : el.attachShadow({
        mode: "open"
      });
      while (el.firstChild) root.append(el.firstChild);
      // Add default styles into shadowRoot
      const styleTag = (_b = el.querySelector("style[card-mod]")) !== null && _b !== void 0 ? _b : document.createElement("style");
      styleTag.setAttribute("card-mod", "");
      styleTag.innerHTML = ENTITY_STYLES;
      root.append(styleTag);
      // Thankfully the configuration data for the glance entity is added to the div for some reason
      // https://github.com/home-assistant/frontend/blob/8c39ed46a83e7e889c389af466c0fd1b07fbf6fd/src/panels/lovelace/cards/hui-glance-card.ts#L275
      const config = (_c = el["config"]) !== null && _c !== void 0 ? _c : el["entityConfig"];
      apply_card_mod(el, "glance", config === null || config === void 0 ? void 0 : config.card_mod, {
        config
      });
    }
  }
};
HuiGlanceCardPatch = __decorate([patch_element("hui-glance-card")], HuiGlanceCardPatch);

/*
Patch the hui-state-label-badge to take styles from the config
( those are the optional badges at the top of the view )
*/
let StateLabelBadgePatch = class StateLabelBadgePatch extends ModdedElement {
  async firstUpdated(_orig) {
    for (var _len10 = arguments.length, args = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
      args[_key10 - 1] = arguments[_key10];
    }
    await (_orig === null || _orig === void 0 ? void 0 : _orig(...args));
    const config = this["_config"];
    await apply_card_mod(this, "badge", config === null || config === void 0 ? void 0 : config.card_mod, {
      config
    });
  }
};
StateLabelBadgePatch = __decorate([patch_element("hui-state-label-badge")], StateLabelBadgePatch);

/*
Patch hui-view for theme styling

There is no style passed to apply_card_mod here, everything comes only from themes.

*/
let HuiViewPatch = class HuiViewPatch extends ModdedElement {
  updated(_orig) {
    for (var _len11 = arguments.length, args = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
      args[_key11 - 1] = arguments[_key11];
    }
    _orig === null || _orig === void 0 ? void 0 : _orig(...args);
    apply_card_mod(this, "view", undefined, {}, false);
  }
};
HuiViewPatch = __decorate([patch_element("hui-view")], HuiViewPatch);

/*
Patch hui-root for theme styling

There is no style passed to apply_card_mod here, everything comes only from themes.

An earlier version of card-mod would also re-run firstUpdated of any existing element after patching.
This shouldn't be necessary if card-mod is loaded as a module.
*/
// hui-root may have been used before the patch was applied
const apply$1 = () => {
  selectTree(document, "home-assistant$home-assistant-main$partial-panel-resolver ha-panel-lovelace$hui-root", false).then(root => root === null || root === void 0 ? void 0 : root.firstUpdated());
};
let HuiRootPatch = class HuiRootPatch extends ModdedElement {
  firstUpdated(_orig) {
    for (var _len12 = arguments.length, args = new Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
      args[_key12 - 1] = arguments[_key12];
    }
    _orig === null || _orig === void 0 ? void 0 : _orig(...args);
    apply_card_mod(this, "root");
  }
};
HuiRootPatch = __decorate([patch_element("hui-root", apply$1)], HuiRootPatch);

/*
Patch ha-more-info-dialog to style more-info popups.

There is no style passed to apply_card_mod here, everything comes only from themes.

An earlier version of card-mod would also look for any already opened dialogs
home-assistant$ha-more-info-dialog
If that existed it would replace the showDialog method of that with the patched version, and then re-run it.
This should only be necessary if someone manages to open a dialog before card-mod loads in, which shouldn't happen
at all if card-mod is loaded as a module.
*/
let MoreInfoDIalogPatch = class MoreInfoDIalogPatch extends ModdedElement {
  showDialog(_orig, params) {
    for (var _len13 = arguments.length, rest = new Array(_len13 > 2 ? _len13 - 2 : 0), _key13 = 2; _key13 < _len13; _key13++) {
      rest[_key13 - 2] = arguments[_key13];
    }
    _orig === null || _orig === void 0 ? void 0 : _orig(params, ...rest);
    this.requestUpdate();
    this.updateComplete.then(async () => {
      const haDialog = this.shadowRoot.querySelector("ha-dialog");
      if (!haDialog) return;
      apply_card_mod(haDialog, "more-info", undefined, {
        config: params
      }, false);
    });
  }
};
MoreInfoDIalogPatch = __decorate([patch_element("ha-more-info-dialog")], MoreInfoDIalogPatch);

/*
Patch ha-sidebar for theme styling

There is no style passed to apply_card_mod here, everything comes only from themes.

An earlier version of card-mod would also re-run firstUpdated of any existing element after patching.
This shouldn't be necessary if card-mod is loaded as a module.
*/
// ha-sidebar may have been used before the patch was applied
const apply = () => {
  selectTree(document, "home-assistant$home-assistant-main$ha-sidebar", false).then(root => root === null || root === void 0 ? void 0 : root.firstUpdated());
};
let SidebarPatch = class SidebarPatch extends ModdedElement {
  // @ts-ignore
  firstUpdated(_orig) {
    for (var _len14 = arguments.length, args = new Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
      args[_key14 - 1] = arguments[_key14];
    }
    _orig === null || _orig === void 0 ? void 0 : _orig(...args);
    apply_card_mod(this, "sidebar");
  }
};
SidebarPatch = __decorate([patch_element("ha-sidebar", apply)], SidebarPatch);
class ConfigElementPatch extends s {
  setConfig(_orig, config) {
    var _a, _b, _c, _d, _e;
    const newConfig = JSON.parse(JSON.stringify(config));
    // Save card_mod config
    this._cardModData = {
      card: newConfig.card_mod,
      entities: []
    };
    delete newConfig.card_mod;
    // Save card_mod config for individual entities
    if (Array.isArray(newConfig.entities)) {
      for (const [i, e] of (_b = (_a = newConfig.entities) === null || _a === void 0 ? void 0 : _a.entries) === null || _b === void 0 ? void 0 : _b.call(_a)) {
        this._cardModData.entities[i] = e.card_mod;
        delete e.card_mod;
      }
    }
    for (var _len15 = arguments.length, rest = new Array(_len15 > 2 ? _len15 - 2 : 0), _key15 = 2; _key15 < _len15; _key15++) {
      rest[_key15 - 2] = arguments[_key15];
    }
    _orig(newConfig, ...rest);
    // Restore card_mod config for entities
    if (Array.isArray(newConfig.entities)) {
      for (const [i, e] of (_d = (_c = newConfig.entities) === null || _c === void 0 ? void 0 : _c.entries) === null || _d === void 0 ? void 0 : _d.call(_c)) {
        if ((_e = this._cardModData) === null || _e === void 0 ? void 0 : _e.entities[i]) e.card_mod = this._cardModData.entities[i];
      }
    }
  }
}
let HuiCardElementEditorPatch = class HuiCardElementEditorPatch extends s {
  async getConfigElement(_orig) {
    for (var _len16 = arguments.length, args = new Array(_len16 > 1 ? _len16 - 1 : 0), _key16 = 1; _key16 < _len16; _key16++) {
      args[_key16 - 1] = arguments[_key16];
    }
    const retval = await _orig(...args);
    patch_object(retval, ConfigElementPatch);
    return retval;
  }
  _handleUIConfigChanged(_orig, ev) {
    var _a;
    const cmData = (_a = this._configElement) === null || _a === void 0 ? void 0 : _a._cardModData;
    if (cmData) {
      ev.detail.config.card_mod = cmData.card;
    }
    for (var _len17 = arguments.length, rest = new Array(_len17 > 2 ? _len17 - 2 : 0), _key17 = 2; _key17 < _len17; _key17++) {
      rest[_key17 - 2] = arguments[_key17];
    }
    _orig(ev, ...rest);
  }
};
HuiCardElementEditorPatch = __decorate([patch_element("hui-card-element-editor")], HuiCardElementEditorPatch);
let HuiDialogEditCardPatch = class HuiDialogEditCardPatch extends s {
  updated(_orig) {
    var _a, _b, _c, _d, _e;
    for (var _len18 = arguments.length, args = new Array(_len18 > 1 ? _len18 - 1 : 0), _key18 = 1; _key18 < _len18; _key18++) {
      args[_key18 - 1] = arguments[_key18];
    }
    _orig === null || _orig === void 0 ? void 0 : _orig(...args);
    if (!this._cardModIcon) {
      this._cardModIcon = document.createElement("ha-icon");
      this._cardModIcon.icon = "mdi:brush";
    }
    const button = this.shadowRoot.querySelector("mwc-button[slot=secondaryAction]");
    if (!button) return;
    button.appendChild(this._cardModIcon);
    if (((_a = this._cardConfig) === null || _a === void 0 ? void 0 : _a.card_mod) || Array.isArray((_b = this._cardConfig) === null || _b === void 0 ? void 0 : _b.entities) && ((_e = (_d = (_c = this._cardConfig) === null || _c === void 0 ? void 0 : _c.entities) === null || _d === void 0 ? void 0 : _d.some) === null || _e === void 0 ? void 0 : _e.call(_d, e => e.card_mod))) {
      this._cardModIcon.style.visibility = "visible";
    } else {
      this._cardModIcon.style.visibility = "hidden";
    }
  }
};
HuiDialogEditCardPatch = __decorate([patch_element("hui-dialog-edit-card")], HuiDialogEditCardPatch);

/*
Patch the hui-epicture-elements-card specifically in order to handle individual styling of each element
*/
let PictureElementsCardPatch = class PictureElementsCardPatch extends ModdedElement {
  setConfig(_orig) {
    var _a, _b;
    for (var _len19 = arguments.length, args = new Array(_len19 > 1 ? _len19 - 1 : 0), _key19 = 1; _key19 < _len19; _key19++) {
      args[_key19 - 1] = arguments[_key19];
    }
    _orig === null || _orig === void 0 ? void 0 : _orig(...args);
    for (const [i, el] of this._elements.entries()) {
      await_element(el);
      patch_object(el, ModdedElement);
      const config = this._config.elements[i];
      const cls = `type-${(_b = (_a = config === null || config === void 0 ? void 0 : config.type) === null || _a === void 0 ? void 0 : _a.replace) === null || _b === void 0 ? void 0 : _b.call(_a, ":", "-")}`;
      apply_card_mod(el, "element", config === null || config === void 0 ? void 0 : config.card_mod, {
        config
      }, true, cls);
    }
  }
};
PictureElementsCardPatch = __decorate([patch_element("hui-picture-elements-card")], PictureElementsCardPatch);

/*
Patch various icon elements to consider the following variables:
--card-mod-icon
--card-mod-icon-color
--card-mod-icon-dim
*/
const updateIcon = el => {
  var _a;
  const styles = el._cm_live_styles = (_a = el._cm_live_styles) !== null && _a !== void 0 ? _a : window.getComputedStyle(el);
  if (el._update_queued) return;
  el._update_queued = true;
  requestAnimationFrame(() => {
    const icon = styles.getPropertyValue("--card-mod-icon");
    if (icon) el.icon = icon.trim();
    const color = styles.getPropertyValue("--card-mod-icon-color");
    if (color) el.style.color = color;
    const filter = styles.getPropertyValue("--card-mod-icon-dim");
    if (filter === "none") el.style.filter = "none";
  });
};
const bindCardMod = async function (el) {
  let update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var _a;
  // Find the most relevant card-mods in order to listen to change events so we can react quickly
  el._boundCardMod = (_a = el._boundCardMod) !== null && _a !== void 0 ? _a : new Set();
  const newCardMods = await findParentCardMod(el);
  if (update || newCardMods.size > 0) updateIcon(el);
  for (const cm of newCardMods) {
    if (el._boundCardMod.has(cm)) continue;
    cm.addEventListener("card-mod-update", async () => {
      console.log("card-mod-update", cm);
      await cm.updateComplete;
      updateIcon(el);
    });
    el._boundCardMod.add(cm);
  }
  // Find card-mod elements created later, increased interval
  if (el.cm_retries < 5) {
    el.cm_retries++;
    return window.setTimeout(() => bindCardMod(el, false), 250 * el.cm_retries);
  }
};
let HaStateIconPatch = class HaStateIconPatch extends ModdedElement {
  constructor() {
    super(...arguments);
    this.cm_retries = 0;
  }
  updated(_orig) {
    for (var _len20 = arguments.length, args = new Array(_len20 > 1 ? _len20 - 1 : 0), _key20 = 1; _key20 < _len20; _key20++) {
      args[_key20 - 1] = arguments[_key20];
    }
    _orig === null || _orig === void 0 ? void 0 : _orig(...args);
    this.cm_retries = 0;
    bindCardMod(this);
  }
};
HaStateIconPatch = __decorate([patch_element("ha-state-icon")], HaStateIconPatch);
let HaIconPatch = class HaIconPatch extends ModdedElement {
  constructor() {
    super(...arguments);
    this.cm_retries = 0;
  }
  updated(_orig) {
    for (var _len21 = arguments.length, args = new Array(_len21 > 1 ? _len21 - 1 : 0), _key21 = 1; _key21 < _len21; _key21++) {
      args[_key21 - 1] = arguments[_key21];
    }
    _orig === null || _orig === void 0 ? void 0 : _orig(...args);
    this.cm_retries = 0;
    bindCardMod(this);
  }
};
HaIconPatch = __decorate([patch_element("ha-icon")], HaIconPatch);
let HaSvgIconPatch = class HaSvgIconPatch extends ModdedElement {
  constructor() {
    super(...arguments);
    this.cm_retries = 0;
  }
  updated(_orig) {
    var _a, _b;
    for (var _len22 = arguments.length, args = new Array(_len22 > 1 ? _len22 - 1 : 0), _key22 = 1; _key22 < _len22; _key22++) {
      args[_key22 - 1] = arguments[_key22];
    }
    _orig === null || _orig === void 0 ? void 0 : _orig(...args);
    if (((_b = (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.host) === null || _b === void 0 ? void 0 : _b.localName) === "ha-icon") return;
    this.cm_retries = 0;
    bindCardMod(this);
  }
};
HaSvgIconPatch = __decorate([patch_element("ha-svg-icon")], HaSvgIconPatch);
function joinSet(dst, src) {
  for (const s of src) dst.add(s);
}
async function findParentCardMod(node) {
  let step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let cardMods = new Set();
  if (step == 10) return cardMods;
  if (!node) return cardMods;
  if (node.updateComplete) await node.updateComplete;
  if (node._cardMod) {
    for (const cm of node._cardMod) {
      if (cm.styles) cardMods.add(cm);
    }
  }
  if (node.parentElement) joinSet(cardMods, await findParentCardMod(node.parentElement, step + 1));else if (node.parentNode) joinSet(cardMods, await findParentCardMod(node.parentNode, step + 1));
  if (node.host) joinSet(cardMods, await findParentCardMod(node.host, step + 1));
  return cardMods;
}
const NO_STYLE = `
ha-card {
  background: none;
  box-shadow: none;
  border: none;
  transition: none;
}`;
class ModCard extends s {
  setConfig(config) {
    var _a;
    this._config = JSON.parse(JSON.stringify(config));
    let style = ((_a = this._config.card_mod) === null || _a === void 0 ? void 0 : _a.style) || this._config.style;
    if (style === undefined) {
      style = NO_STYLE;
    } else if (typeof style === "string") {
      style = NO_STYLE + style;
    } else if (style["."]) {
      style["."] = NO_STYLE + style["."];
    } else {
      style["."] = NO_STYLE;
    }
    this._config.card_mod = {
      style
    };
    this.build_card(config.card);
  }
  async build_card(config) {
    if (this._hass === undefined) await new Promise(resolve => this._hassResolve = resolve);
    this._hassResolve = undefined;
    const helpers = await window.loadCardHelpers();
    this.card = await helpers.createCardElement(config);
    this.card.hass = this._hass;
  }
  firstUpdated() {
    window.setTimeout(() => {
      var _a, _b;
      if ((_b = (_a = this.card) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("ha-card")) {
        console.info("%cYou are doing it wrong!", "color: red; font-weight: bold");
        let cardName = this.card.localName.replace(/hui-(.*)-card/, "$1");
        console.info(`mod-card should NEVER be used with a card that already has a ha-card element, such as ${cardName}`);
      }
    }, 3000);
  }
  set hass(hass) {
    this._hass = hass;
    if (this.card) this.card.hass = hass;
    if (this._hassResolve) this._hassResolve();
  }
  render() {
    return x` <ha-card modcard> ${this.card} </ha-card> `;
  }
  getCardSize() {
    if (this._config.report_size) return this._config.report_size;
    let ret = this.shadowRoot;
    if (ret) ret = ret.querySelector("ha-card card-maker");
    if (ret) ret = ret.getCardSize;
    if (ret) ret = ret();
    if (ret) return ret;
    return 1;
  }
}
__decorate([n$1()], ModCard.prototype, "card", void 0);
if (!customElements.get("mod-card")) {
  customElements.define("mod-card", ModCard);
}
(async () => {
  // See explanation in card-mod.ts
  while (customElements.get("home-assistant") === undefined) await new Promise(resolve => window.setTimeout(resolve, 100));
  if (!customElements.get("mod-card")) {
    customElements.define("mod-card", ModCard);
  }
})();
function refresh_theme() {
  document.dispatchEvent(new Event("cm_update"));
}
const bases = [customElements.whenDefined("home-assistant"), customElements.whenDefined("hc-main")];
b.race(bases).then(() => {
  window.setTimeout(async () => {
    var _a, _b;
    const hs = await hass();
    while (!hs) {
      await new Promise(resolve => window.setTimeout(resolve, 500));
    }
    hs.connection.subscribeEvents(() => {
      window.setTimeout(refresh_theme, 500);
    }, "themes_updated");
    (_a = document.querySelector("home-assistant")) === null || _a === void 0 ? void 0 : _a.addEventListener("settheme", refresh_theme);
    (_b = document.querySelector("hc-main")) === null || _b === void 0 ? void 0 : _b.addEventListener("settheme", refresh_theme);
  }, 1000);
});
var _a, _b, _c;
const scriptElements = document.querySelectorAll("script");
const resources = [];
for (const script of scriptElements) {
  if ((_b = (_a = script === null || script === void 0 ? void 0 : script.innerText) === null || _a === void 0 ? void 0 : _a.trim()) === null || _b === void 0 ? void 0 : _b.startsWith("import(")) {
    const imports = (_c = script.innerText.split("\n")) === null || _c === void 0 ? void 0 : _c.map(e => e.trim());
    for (const imp of imports) {
      resources.push(imp.replace(/^import\(\"/, "").replace(/\"\);/, ""));
    }
  }
}
if (resources.some(r => r.includes("/card-mod.js"))) ;else {
  console.info("You may not be getting optimal performance out of card-mod.\nSee https://github.com/thomasloven/lovelace-card-mod#performance-improvements");
}
