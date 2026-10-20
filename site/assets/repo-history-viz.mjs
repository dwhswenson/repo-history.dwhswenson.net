//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), c = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, l = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, u = (n, r, o) => (o = n == null ? {} : e(i(n)), l(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), d = (e) => a.call(e, "module.exports") ? e["module.exports"] : l(t({}, "__esModule", { value: !0 }), e), f = ":host{--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light;min-width:0;font-family:var(--repo-history-font,system-ui, sans-serif);color:var(--repo-history-color,#22304b);background:var(--repo-history-background,#f4f6fa);font-synthesis:none;font-size:14px;font-weight:400;line-height:1.5;display:block;container-type:inline-size}*{box-sizing:border-box}.viewer{padding:24px 0}button,input{font:inherit}button{cursor:pointer}button:disabled,input:disabled{cursor:wait;opacity:.6}button,input{accent-color:var(--repo-history-accent,#365edc)}button:focus-visible,input:focus-visible,summary:focus-visible{outline-offset:3px;outline:3px solid #68e}h1,h2,p{margin:0}h1,h2{font-family:var(--repo-history-font,system-ui, sans-serif)}h1{letter-spacing:-1px;font-size:27px;font-weight:800}h2{letter-spacing:-.4px;font-size:18px}.eyebrow{letter-spacing:1.7px;color:#6b7890;margin-bottom:4px;font-size:10px;font-weight:700}main{max-width:1440px;margin:auto;padding:0 40px}.card{background:var(--repo-history-surface,white);border-radius:var(--repo-history-radius,13px);border:1px solid #e1e6ef;box-shadow:0 3px 12px #23385404}.loader{grid-template-columns:1fr 1.7fr;gap:7px 30px;padding:22px 26px;display:grid}.loader p{color:#6b7890;margin-top:5px;font-size:13px}.load-options{align-items:center;gap:15px;display:flex}.file-button,button[type=submit]{background:var(--repo-history-accent,#365edc);color:#fff;white-space:nowrap;border:1px solid #365edc;border-radius:7px;padding:10px 14px;font-weight:600}.file-button{cursor:pointer;display:inline-flex;position:relative;overflow:hidden}.file-button:focus-within{outline-offset:3px;outline:3px solid #68e}.file-button input{opacity:0;cursor:pointer;width:100%;position:absolute;inset:0}.or{color:#8994a7;font-size:12px}form{flex:1}form>label{color:#65738b;margin-bottom:4px;font-size:11px;display:block}.url-row{gap:8px;display:flex}.url-row input{width:100%;min-width:0;color:var(--repo-history-color,#22304b);background:#fbfcfe;border:1px solid #dbe1eb;border-radius:7px;padding:9px 10px}.url-row input::placeholder{color:#96a0b2}#load-status,#load-error{grid-column:1/-1}.error{margin-top:7px;font-size:12px;color:#b42338!important}.empty{text-align:center;margin-top:24px;padding:85px 20px 95px}.empty-icon{color:#365edc;background:#edf2ff;border-radius:20px;place-items:center;width:78px;height:78px;margin:0 auto 20px;font-size:40px;display:grid}.empty h2{font-size:23px}.empty p{color:#728098;max-width:480px;margin:12px auto 25px}.empty-tags{flex-wrap:wrap;justify-content:center;gap:10px;display:flex}.empty-tags span{color:#697993;background:#f5f7fb;border-radius:20px;padding:5px 11px;font-size:12px}.repository-heading{justify-content:space-between;align-items:center;gap:15px;margin:28px 1px 18px;display:flex}.repository-heading h2{font-size:23px}.repository-heading>p{color:#6c7a92;font-size:12px}.workspace{grid-template-columns:290px minmax(0,1fr);align-items:start;gap:22px;display:grid}.controls{padding:22px}.controls fieldset{border:0;min-width:0;margin:0 0 24px;padding:0}.controls fieldset:last-child{margin-bottom:0}legend{margin-bottom:10px;padding:0;font-size:12px;font-weight:700}.segmented{background:var(--repo-history-background,#f4f6fa);border:1px solid #e1e6ef;border-radius:7px;padding:3px;display:flex}#metric{background:var(--repo-history-surface,white);width:100%;color:var(--repo-history-color,#22304b);font:inherit;border:1px solid #dbe1eb;border-radius:7px;padding:9px 10px;font-size:12px}#metric:focus-visible{outline-offset:2px;outline:2px solid #68e}.segmented label:has(input:disabled){opacity:.45;cursor:not-allowed}.segmented label{text-align:center;cursor:pointer;flex:1;font-size:11px;font-weight:600;position:relative}.segmented input{opacity:0;position:absolute}.segmented span{color:#6d7b92;border-radius:5px;padding:7px 4px;display:block}.segmented input:checked+span{background:var(--repo-history-surface,white);color:#365edc;box-shadow:0 1px 4px #22304b19}.segmented input:focus-visible+span{outline:2px solid #68e}.month-range-values{color:#6c7a92;justify-content:space-between;gap:8px;font-size:11px;display:flex}.month-range-values label:last-child{text-align:right}.month-range-values output{color:var(--repo-history-color,#22304b);margin-top:4px;font-size:12px;font-weight:600;display:block}.month-range{height:36px;position:relative}.month-range-track{pointer-events:none;background:#dbe1eb;border-radius:999px;height:6px;position:absolute;top:15px;left:10px;right:10px}.month-range-track span{border-radius:inherit;background:var(--repo-history-accent,#365edc);height:100%;position:absolute}.month-range input[type=range]{appearance:none;pointer-events:none;touch-action:pan-y;background:0 0;border:0;width:100%;height:36px;margin:0;padding:0;position:absolute;inset:0}.month-range #end{z-index:3}.month-range input[type=range]:focus-visible{outline:none;z-index:5!important}.month-range input::-webkit-slider-runnable-track{background:0 0;height:6px}.month-range input::-moz-range-track{background:0 0;height:6px}.month-range input::-webkit-slider-thumb{appearance:none;background:var(--repo-history-accent,#365edc);cursor:grab;pointer-events:auto;border:2px solid #fff;border-radius:50%;width:20px;height:20px;margin-top:-7px;box-shadow:0 1px 4px #22304b40}.month-range input::-moz-range-thumb{background:var(--repo-history-accent,#365edc);cursor:grab;pointer-events:auto;border:2px solid #fff;border-radius:50%;width:16px;height:16px;box-shadow:0 1px 4px #22304b40}.month-range input:focus-visible::-webkit-slider-thumb{outline-offset:2px;outline:2px solid #68e}.month-range input:focus-visible::-moz-range-thumb{outline-offset:2px;outline:2px solid #68e}.month-range input:disabled{opacity:.5}.month-range input:disabled::-webkit-slider-thumb{pointer-events:none}.month-range input:disabled::-moz-range-thumb{pointer-events:none}.text-button{color:#365edc;background:0 0;border:0;margin-top:9px;padding:0;font-size:11px}.selection-actions{gap:14px;margin-top:-12px;margin-bottom:12px;display:flex}.type-list{flex-direction:column;gap:10px;display:flex}.controls label:has(>input[type=checkbox]){cursor:pointer;align-items:center;gap:7px;font-size:12px;display:flex}.controls input[type=checkbox]{flex-shrink:0;width:14px;height:14px;margin:0}.swatch{background-size:12px 12px;border-radius:3px;flex-shrink:0;width:16px;height:16px;display:inline-block}.combined{border-top:1px solid #edf0f5;margin-top:16px;padding-top:14px}#classifications label{margin-bottom:10px}.results{grid-template-columns:minmax(0,1fr);gap:14px;min-width:0;display:grid}.chart-card{padding:25px}.chart-heading{justify-content:space-between;align-items:center;gap:15px;display:flex}.chart-heading h2{font-size:22px}.chart-downloads{flex-direction:column;align-items:flex-start;gap:8px;display:flex}.chart-downloads .text-button{white-space:nowrap;margin-top:0}.chart-downloads .text-button:disabled{opacity:.45;cursor:not-allowed}.chart-note{color:#6d7b92;max-width:650px;margin-top:12px;font-size:12px}.warning{color:#886212;background:#fff8e8;border:1px solid #f2e3b8;border-radius:7px;margin-top:14px;padding:10px 12px;font-size:12px}.chart-wrap{height:430px;margin-top:23px;position:relative}.coverage-card{padding:16px 22px}summary{cursor:pointer;font-size:12px;font-weight:600}.coverage-card p,.coverage-card li{color:#6b7890;margin-top:12px;font-size:12px}.coverage-card ul{padding-left:18px}[hidden]{display:none!important}@container (width>=1550px){.chart-wrap{height:480px}}@container (width<=1100px){.loader{grid-template-columns:1fr}.workspace{grid-template-columns:260px minmax(0,1fr)}.chart-heading{flex-direction:column;align-items:flex-start}main{padding:0 25px}}@container (width<=740px){h1{font-size:23px}main{padding:0 16px}.loader{padding:20px}.load-options{flex-wrap:wrap;gap:12px}.load-options .or{display:none}.load-options form{flex-basis:100%}.url-row{flex-wrap:wrap}.url-row input{flex-basis:100%}.repository-heading{flex-direction:column;align-items:flex-start;gap:7px}.workspace{grid-template-columns:1fr}.controls{grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:20px;padding:20px;display:grid}.controls fieldset{margin:0}#month-controls,#classifications{grid-column:1/-1}.controls fieldset:has(.type-list){grid-column:1/-1}.type-list{grid-template-columns:minmax(0,1fr) minmax(0,1fr);display:grid}.chart-card{padding:19px}.chart-wrap{height:350px}.chart-heading h2{font-size:20px}.empty{padding:55px 18px}.month-range{flex-direction:column}}@media (prefers-reduced-motion:reduce){*{scroll-behavior:auto}}.results>*,.loader>*,form{min-width:0}canvas{max-width:100%}#repository-name,#load-error,#warnings{overflow-wrap:anywhere}:host([hide-loader]) .loader>div{display:none}:host([hide-loader]) .loader:has(#load-status[hidden]):has(#load-error[hidden]){display:none}", p = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
	var t = class {};
	e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
	var n = class extends t {
		constructor(t) {
			if (super(), !e.IDENTIFIER.test(t)) throw Error("CodeGen: name must be a valid identifier");
			this.str = t;
		}
		toString() {
			return this.str;
		}
		emptyStr() {
			return !1;
		}
		get names() {
			return { [this.str]: 1 };
		}
	};
	e.Name = n;
	var r = class extends t {
		constructor(e) {
			super(), this._items = typeof e == "string" ? [e] : e;
		}
		toString() {
			return this.str;
		}
		emptyStr() {
			if (this._items.length > 1) return !1;
			let e = this._items[0];
			return e === "" || e === "\"\"";
		}
		get str() {
			return this._str ??= this._items.reduce((e, t) => `${e}${t}`, "");
		}
		get names() {
			return this._names ??= this._items.reduce((e, t) => (t instanceof n && (e[t.str] = (e[t.str] || 0) + 1), e), {});
		}
	};
	e._Code = r, e.nil = new r("");
	function i(e, ...t) {
		let n = [e[0]], i = 0;
		for (; i < t.length;) s(n, t[i]), n.push(e[++i]);
		return new r(n);
	}
	e._ = i;
	var a = new r("+");
	function o(e, ...t) {
		let n = [p(e[0])], i = 0;
		for (; i < t.length;) n.push(a), s(n, t[i]), n.push(a, p(e[++i]));
		return c(n), new r(n);
	}
	e.str = o;
	function s(e, t) {
		t instanceof r ? e.push(...t._items) : t instanceof n ? e.push(t) : e.push(d(t));
	}
	e.addCodeArg = s;
	function c(e) {
		let t = 1;
		for (; t < e.length - 1;) {
			if (e[t] === a) {
				let n = l(e[t - 1], e[t + 1]);
				if (n !== void 0) {
					e.splice(t - 1, 3, n);
					continue;
				}
				e[t++] = "+";
			}
			t++;
		}
	}
	function l(e, t) {
		if (t === "\"\"") return e;
		if (e === "\"\"") return t;
		if (typeof e == "string") return t instanceof n || e[e.length - 1] !== "\"" ? void 0 : typeof t == "string" ? t[0] === "\"" ? e.slice(0, -1) + t.slice(1) : void 0 : `${e.slice(0, -1)}${t}"`;
		if (typeof t == "string" && t[0] === "\"" && !(e instanceof n)) return `"${e}${t.slice(1)}`;
	}
	function u(e, t) {
		return t.emptyStr() ? e : e.emptyStr() ? t : o`${e}${t}`;
	}
	e.strConcat = u;
	function d(e) {
		return typeof e == "number" || typeof e == "boolean" || e === null ? e : p(Array.isArray(e) ? e.join(",") : e);
	}
	function f(e) {
		return new r(p(e));
	}
	e.stringify = f;
	function p(e) {
		return JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
	}
	e.safeStringify = p;
	function m(t) {
		return typeof t == "string" && e.IDENTIFIER.test(t) ? new r(`.${t}`) : i`[${t}]`;
	}
	e.getProperty = m;
	function h(t) {
		if (typeof t == "string" && e.IDENTIFIER.test(t)) return new r(`${t}`);
		throw Error(`CodeGen: invalid export name: ${t}, use explicit $id name mapping`);
	}
	e.getEsmExportName = h;
	function g(e) {
		return new r(e.toString());
	}
	e.regexpCode = g;
})), m = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
	var t = p(), n = class extends Error {
		constructor(e) {
			super(`CodeGen: "code" for ${e} not defined`), this.value = e.value;
		}
	}, r;
	(function(e) {
		e[e.Started = 0] = "Started", e[e.Completed = 1] = "Completed";
	})(r || (e.UsedValueState = r = {})), e.varKinds = {
		const: new t.Name("const"),
		let: new t.Name("let"),
		var: new t.Name("var")
	};
	var i = class {
		constructor({ prefixes: e, parent: t } = {}) {
			this._names = {}, this._prefixes = e, this._parent = t;
		}
		toName(e) {
			return e instanceof t.Name ? e : this.name(e);
		}
		name(e) {
			return new t.Name(this._newName(e));
		}
		_newName(e) {
			let t = this._names[e] || this._nameGroup(e);
			return `${e}${t.index++}`;
		}
		_nameGroup(e) {
			if ((this._parent?._prefixes)?.has(e) || this._prefixes && !this._prefixes.has(e)) throw Error(`CodeGen: prefix "${e}" is not allowed in this scope`);
			return this._names[e] = {
				prefix: e,
				index: 0
			};
		}
	};
	e.Scope = i;
	var a = class extends t.Name {
		constructor(e, t) {
			super(t), this.prefix = e;
		}
		setValue(e, { property: n, itemIndex: r }) {
			this.value = e, this.scopePath = (0, t._)`.${new t.Name(n)}[${r}]`;
		}
	};
	e.ValueScopeName = a;
	var o = (0, t._)`\n`;
	e.ValueScope = class extends i {
		constructor(e) {
			super(e), this._values = {}, this._scope = e.scope, this.opts = {
				...e,
				_n: e.lines ? o : t.nil
			};
		}
		get() {
			return this._scope;
		}
		name(e) {
			return new a(e, this._newName(e));
		}
		value(e, t) {
			if (t.ref === void 0) throw Error("CodeGen: ref must be passed in value");
			let n = this.toName(e), { prefix: r } = n, i = t.key ?? t.ref, a = this._values[r];
			if (a) {
				let e = a.get(i);
				if (e) return e;
			} else a = this._values[r] = /* @__PURE__ */ new Map();
			a.set(i, n);
			let o = this._scope[r] || (this._scope[r] = []), s = o.length;
			return o[s] = t.ref, n.setValue(t, {
				property: r,
				itemIndex: s
			}), n;
		}
		getValue(e, t) {
			let n = this._values[e];
			if (n) return n.get(t);
		}
		scopeRefs(e, n = this._values) {
			return this._reduceValues(n, (n) => {
				if (n.scopePath === void 0) throw Error(`CodeGen: name "${n}" has no value`);
				return (0, t._)`${e}${n.scopePath}`;
			});
		}
		scopeCode(e = this._values, t, n) {
			return this._reduceValues(e, (e) => {
				if (e.value === void 0) throw Error(`CodeGen: name "${e}" has no value`);
				return e.value.code;
			}, t, n);
		}
		_reduceValues(i, a, o = {}, s) {
			let c = t.nil;
			for (let l in i) {
				let u = i[l];
				if (!u) continue;
				let d = o[l] = o[l] || /* @__PURE__ */ new Map();
				u.forEach((i) => {
					if (d.has(i)) return;
					d.set(i, r.Started);
					let o = a(i);
					if (o) {
						let n = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
						c = (0, t._)`${c}${n} ${i} = ${o};${this.opts._n}`;
					} else if (o = s?.(i)) c = (0, t._)`${c}${o}${this.opts._n}`;
					else throw new n(i);
					d.set(i, r.Completed);
				});
			}
			return c;
		}
	};
})), h = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
	var t = p(), n = m(), r = p();
	Object.defineProperty(e, "_", {
		enumerable: !0,
		get: function() {
			return r._;
		}
	}), Object.defineProperty(e, "str", {
		enumerable: !0,
		get: function() {
			return r.str;
		}
	}), Object.defineProperty(e, "strConcat", {
		enumerable: !0,
		get: function() {
			return r.strConcat;
		}
	}), Object.defineProperty(e, "nil", {
		enumerable: !0,
		get: function() {
			return r.nil;
		}
	}), Object.defineProperty(e, "getProperty", {
		enumerable: !0,
		get: function() {
			return r.getProperty;
		}
	}), Object.defineProperty(e, "stringify", {
		enumerable: !0,
		get: function() {
			return r.stringify;
		}
	}), Object.defineProperty(e, "regexpCode", {
		enumerable: !0,
		get: function() {
			return r.regexpCode;
		}
	}), Object.defineProperty(e, "Name", {
		enumerable: !0,
		get: function() {
			return r.Name;
		}
	});
	var i = m();
	Object.defineProperty(e, "Scope", {
		enumerable: !0,
		get: function() {
			return i.Scope;
		}
	}), Object.defineProperty(e, "ValueScope", {
		enumerable: !0,
		get: function() {
			return i.ValueScope;
		}
	}), Object.defineProperty(e, "ValueScopeName", {
		enumerable: !0,
		get: function() {
			return i.ValueScopeName;
		}
	}), Object.defineProperty(e, "varKinds", {
		enumerable: !0,
		get: function() {
			return i.varKinds;
		}
	}), e.operators = {
		GT: new t._Code(">"),
		GTE: new t._Code(">="),
		LT: new t._Code("<"),
		LTE: new t._Code("<="),
		EQ: new t._Code("==="),
		NEQ: new t._Code("!=="),
		NOT: new t._Code("!"),
		OR: new t._Code("||"),
		AND: new t._Code("&&"),
		ADD: new t._Code("+")
	};
	var a = class {
		optimizeNodes() {
			return this;
		}
		optimizeNames(e, t) {
			return this;
		}
	}, o = class extends a {
		constructor(e, t, n) {
			super(), this.varKind = e, this.name = t, this.rhs = n;
		}
		render({ es5: e, _n: t }) {
			let r = e ? n.varKinds.var : this.varKind, i = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
			return `${r} ${this.name}${i};` + t;
		}
		optimizeNames(e, t) {
			if (e[this.name.str]) return this.rhs &&= j(this.rhs, e, t), this;
		}
		get names() {
			return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
		}
	}, s = class extends a {
		constructor(e, t, n) {
			super(), this.lhs = e, this.rhs = t, this.sideEffects = n;
		}
		render({ _n: e }) {
			return `${this.lhs} = ${this.rhs};` + e;
		}
		optimizeNames(e, n) {
			if (!(this.lhs instanceof t.Name && !e[this.lhs.str] && !this.sideEffects)) return this.rhs = j(this.rhs, e, n), this;
		}
		get names() {
			return A(this.lhs instanceof t.Name ? {} : { ...this.lhs.names }, this.rhs);
		}
	}, c = class extends s {
		constructor(e, t, n, r) {
			super(e, n, r), this.op = t;
		}
		render({ _n: e }) {
			return `${this.lhs} ${this.op}= ${this.rhs};` + e;
		}
	}, l = class extends a {
		constructor(e) {
			super(), this.label = e, this.names = {};
		}
		render({ _n: e }) {
			return `${this.label}:` + e;
		}
	}, u = class extends a {
		constructor(e) {
			super(), this.label = e, this.names = {};
		}
		render({ _n: e }) {
			return `break${this.label ? ` ${this.label}` : ""};` + e;
		}
	}, d = class extends a {
		constructor(e) {
			super(), this.error = e;
		}
		render({ _n: e }) {
			return `throw ${this.error};` + e;
		}
		get names() {
			return this.error.names;
		}
	}, f = class extends a {
		constructor(e) {
			super(), this.code = e;
		}
		render({ _n: e }) {
			return `${this.code};` + e;
		}
		optimizeNodes() {
			return `${this.code}` ? this : void 0;
		}
		optimizeNames(e, t) {
			return this.code = j(this.code, e, t), this;
		}
		get names() {
			return this.code instanceof t._CodeOrName ? this.code.names : {};
		}
	}, h = class extends a {
		constructor(e = []) {
			super(), this.nodes = e;
		}
		render(e) {
			return this.nodes.reduce((t, n) => t + n.render(e), "");
		}
		optimizeNodes() {
			let { nodes: e } = this, t = e.length;
			for (; t--;) {
				let n = e[t].optimizeNodes();
				Array.isArray(n) ? e.splice(t, 1, ...n) : n ? e[t] = n : e.splice(t, 1);
			}
			return e.length > 0 ? this : void 0;
		}
		optimizeNames(e, t) {
			let { nodes: n } = this, r = n.length;
			for (; r--;) {
				let i = n[r];
				i.optimizeNames(e, t) || (M(e, i.names), n.splice(r, 1));
			}
			return n.length > 0 ? this : void 0;
		}
		get names() {
			return this.nodes.reduce((e, t) => k(e, t.names), {});
		}
	}, g = class extends h {
		render(e) {
			return "{" + e._n + super.render(e) + "}" + e._n;
		}
	}, _ = class extends h {}, v = class extends g {};
	v.kind = "else";
	var y = class e extends g {
		constructor(e, t) {
			super(t), this.condition = e;
		}
		render(e) {
			let t = `if(${this.condition})` + super.render(e);
			return this.else && (t += "else " + this.else.render(e)), t;
		}
		optimizeNodes() {
			super.optimizeNodes();
			let t = this.condition;
			if (t === !0) return this.nodes;
			let n = this.else;
			if (n) {
				let e = n.optimizeNodes();
				n = this.else = Array.isArray(e) ? new v(e) : e;
			}
			if (n) return t === !1 ? n instanceof e ? n : n.nodes : this.nodes.length ? this : new e(N(t), n instanceof e ? [n] : n.nodes);
			if (t !== !1 && this.nodes.length) return this;
		}
		optimizeNames(e, t) {
			if (this.else = this.else?.optimizeNames(e, t), super.optimizeNames(e, t) || this.else) return this.condition = j(this.condition, e, t), this;
		}
		get names() {
			let e = super.names;
			return A(e, this.condition), this.else && k(e, this.else.names), e;
		}
	};
	y.kind = "if";
	var b = class extends g {};
	b.kind = "for";
	var x = class extends b {
		constructor(e) {
			super(), this.iteration = e;
		}
		render(e) {
			return `for(${this.iteration})` + super.render(e);
		}
		optimizeNames(e, t) {
			if (super.optimizeNames(e, t)) return this.iteration = j(this.iteration, e, t), this;
		}
		get names() {
			return k(super.names, this.iteration.names);
		}
	}, S = class extends b {
		constructor(e, t, n, r) {
			super(), this.varKind = e, this.name = t, this.from = n, this.to = r;
		}
		render(e) {
			let t = e.es5 ? n.varKinds.var : this.varKind, { name: r, from: i, to: a } = this;
			return `for(${t} ${r}=${i}; ${r}<${a}; ${r}++)` + super.render(e);
		}
		get names() {
			return A(A(super.names, this.from), this.to);
		}
	}, C = class extends b {
		constructor(e, t, n, r) {
			super(), this.loop = e, this.varKind = t, this.name = n, this.iterable = r;
		}
		render(e) {
			return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e);
		}
		optimizeNames(e, t) {
			if (super.optimizeNames(e, t)) return this.iterable = j(this.iterable, e, t), this;
		}
		get names() {
			return k(super.names, this.iterable.names);
		}
	}, w = class extends g {
		constructor(e, t, n) {
			super(), this.name = e, this.args = t, this.async = n;
		}
		render(e) {
			return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e);
		}
	};
	w.kind = "func";
	var T = class extends h {
		render(e) {
			return "return " + super.render(e);
		}
	};
	T.kind = "return";
	var E = class extends g {
		render(e) {
			let t = "try" + super.render(e);
			return this.catch && (t += this.catch.render(e)), this.finally && (t += this.finally.render(e)), t;
		}
		optimizeNodes() {
			var e, t;
			return super.optimizeNodes(), (e = this.catch) == null || e.optimizeNodes(), (t = this.finally) == null || t.optimizeNodes(), this;
		}
		optimizeNames(e, t) {
			var n, r;
			return super.optimizeNames(e, t), (n = this.catch) == null || n.optimizeNames(e, t), (r = this.finally) == null || r.optimizeNames(e, t), this;
		}
		get names() {
			let e = super.names;
			return this.catch && k(e, this.catch.names), this.finally && k(e, this.finally.names), e;
		}
	}, D = class extends g {
		constructor(e) {
			super(), this.error = e;
		}
		render(e) {
			return `catch(${this.error})` + super.render(e);
		}
	};
	D.kind = "catch";
	var O = class extends g {
		render(e) {
			return "finally" + super.render(e);
		}
	};
	O.kind = "finally", e.CodeGen = class {
		constructor(e, t = {}) {
			this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = {
				...t,
				_n: t.lines ? "\n" : ""
			}, this._extScope = e, this._scope = new n.Scope({ parent: e }), this._nodes = [new _()];
		}
		toString() {
			return this._root.render(this.opts);
		}
		name(e) {
			return this._scope.name(e);
		}
		scopeName(e) {
			return this._extScope.name(e);
		}
		scopeValue(e, t) {
			let n = this._extScope.value(e, t);
			return (this._values[n.prefix] || (this._values[n.prefix] = /* @__PURE__ */ new Set())).add(n), n;
		}
		getScopeValue(e, t) {
			return this._extScope.getValue(e, t);
		}
		scopeRefs(e) {
			return this._extScope.scopeRefs(e, this._values);
		}
		scopeCode() {
			return this._extScope.scopeCode(this._values);
		}
		_def(e, t, n, r) {
			let i = this._scope.toName(t);
			return n !== void 0 && r && (this._constants[i.str] = n), this._leafNode(new o(e, i, n)), i;
		}
		const(e, t, r) {
			return this._def(n.varKinds.const, e, t, r);
		}
		let(e, t, r) {
			return this._def(n.varKinds.let, e, t, r);
		}
		var(e, t, r) {
			return this._def(n.varKinds.var, e, t, r);
		}
		assign(e, t, n) {
			return this._leafNode(new s(e, t, n));
		}
		add(t, n) {
			return this._leafNode(new c(t, e.operators.ADD, n));
		}
		code(e) {
			return typeof e == "function" ? e() : e !== t.nil && this._leafNode(new f(e)), this;
		}
		object(...e) {
			let n = ["{"];
			for (let [r, i] of e) n.length > 1 && n.push(","), n.push(r), (r !== i || this.opts.es5) && (n.push(":"), (0, t.addCodeArg)(n, i));
			return n.push("}"), new t._Code(n);
		}
		if(e, t, n) {
			if (this._blockNode(new y(e)), t && n) this.code(t).else().code(n).endIf();
			else if (t) this.code(t).endIf();
			else if (n) throw Error("CodeGen: \"else\" body without \"then\" body");
			return this;
		}
		elseIf(e) {
			return this._elseNode(new y(e));
		}
		else() {
			return this._elseNode(new v());
		}
		endIf() {
			return this._endBlockNode(y, v);
		}
		_for(e, t) {
			return this._blockNode(e), t && this.code(t).endFor(), this;
		}
		for(e, t) {
			return this._for(new x(e), t);
		}
		forRange(e, t, r, i, a = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
			let o = this._scope.toName(e);
			return this._for(new S(a, o, t, r), () => i(o));
		}
		forOf(e, r, i, a = n.varKinds.const) {
			let o = this._scope.toName(e);
			if (this.opts.es5) {
				let e = r instanceof t.Name ? r : this.var("_arr", r);
				return this.forRange("_i", 0, (0, t._)`${e}.length`, (n) => {
					this.var(o, (0, t._)`${e}[${n}]`), i(o);
				});
			}
			return this._for(new C("of", a, o, r), () => i(o));
		}
		forIn(e, r, i, a = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
			if (this.opts.ownProperties) return this.forOf(e, (0, t._)`Object.keys(${r})`, i);
			let o = this._scope.toName(e);
			return this._for(new C("in", a, o, r), () => i(o));
		}
		endFor() {
			return this._endBlockNode(b);
		}
		label(e) {
			return this._leafNode(new l(e));
		}
		break(e) {
			return this._leafNode(new u(e));
		}
		return(e) {
			let t = new T();
			if (this._blockNode(t), this.code(e), t.nodes.length !== 1) throw Error("CodeGen: \"return\" should have one node");
			return this._endBlockNode(T);
		}
		try(e, t, n) {
			if (!t && !n) throw Error("CodeGen: \"try\" without \"catch\" and \"finally\"");
			let r = new E();
			if (this._blockNode(r), this.code(e), t) {
				let e = this.name("e");
				this._currNode = r.catch = new D(e), t(e);
			}
			return n && (this._currNode = r.finally = new O(), this.code(n)), this._endBlockNode(D, O);
		}
		throw(e) {
			return this._leafNode(new d(e));
		}
		block(e, t) {
			return this._blockStarts.push(this._nodes.length), e && this.code(e).endBlock(t), this;
		}
		endBlock(e) {
			let t = this._blockStarts.pop();
			if (t === void 0) throw Error("CodeGen: not in self-balancing block");
			let n = this._nodes.length - t;
			if (n < 0 || e !== void 0 && n !== e) throw Error(`CodeGen: wrong number of nodes: ${n} vs ${e} expected`);
			return this._nodes.length = t, this;
		}
		func(e, n = t.nil, r, i) {
			return this._blockNode(new w(e, n, r)), i && this.code(i).endFunc(), this;
		}
		endFunc() {
			return this._endBlockNode(w);
		}
		optimize(e = 1) {
			for (; e-- > 0;) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
		}
		_leafNode(e) {
			return this._currNode.nodes.push(e), this;
		}
		_blockNode(e) {
			this._currNode.nodes.push(e), this._nodes.push(e);
		}
		_endBlockNode(e, t) {
			let n = this._currNode;
			if (n instanceof e || t && n instanceof t) return this._nodes.pop(), this;
			throw Error(`CodeGen: not in block "${t ? `${e.kind}/${t.kind}` : e.kind}"`);
		}
		_elseNode(e) {
			let t = this._currNode;
			if (!(t instanceof y)) throw Error("CodeGen: \"else\" without \"if\"");
			return this._currNode = t.else = e, this;
		}
		get _root() {
			return this._nodes[0];
		}
		get _currNode() {
			let e = this._nodes;
			return e[e.length - 1];
		}
		set _currNode(e) {
			let t = this._nodes;
			t[t.length - 1] = e;
		}
	};
	function k(e, t) {
		for (let n in t) e[n] = (e[n] || 0) + (t[n] || 0);
		return e;
	}
	function A(e, n) {
		return n instanceof t._CodeOrName ? k(e, n.names) : e;
	}
	function j(e, n, r) {
		return e instanceof t.Name ? i(e) : a(e) ? new t._Code(e._items.reduce((e, n) => (n instanceof t.Name && (n = i(n)), n instanceof t._Code ? e.push(...n._items) : e.push(n), e), [])) : e;
		function i(e) {
			let t = r[e.str];
			return t === void 0 || n[e.str] !== 1 ? e : (delete n[e.str], t);
		}
		function a(e) {
			return e instanceof t._Code && e._items.some((e) => e instanceof t.Name && n[e.str] === 1 && r[e.str] !== void 0);
		}
	}
	function M(e, t) {
		for (let n in t) e[n] = (e[n] || 0) - (t[n] || 0);
	}
	function N(e) {
		return typeof e == "boolean" || typeof e == "number" || e === null ? !e : (0, t._)`!${ae(e)}`;
	}
	e.not = N;
	var ee = ie(e.operators.AND);
	function te(...e) {
		return e.reduce(ee);
	}
	e.and = te;
	var ne = ie(e.operators.OR);
	function re(...e) {
		return e.reduce(ne);
	}
	e.or = re;
	function ie(e) {
		return (n, r) => n === t.nil ? r : r === t.nil ? n : (0, t._)`${ae(n)} ${e} ${ae(r)}`;
	}
	function ae(e) {
		return e instanceof t.Name ? e : (0, t._)`(${e})`;
	}
})), g = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.checkStrictMode = e.getErrorPath = e.Type = e.useFunc = e.setEvaluated = e.evaluatedPropsToName = e.mergeEvaluated = e.eachItem = e.unescapeJsonPointer = e.escapeJsonPointer = e.escapeFragment = e.unescapeFragment = e.schemaRefOrVal = e.schemaHasRulesButRef = e.schemaHasRules = e.checkUnknownRules = e.alwaysValidSchema = e.toHash = void 0;
	var t = h(), n = p();
	function r(e) {
		let t = {};
		for (let n of e) t[n] = !0;
		return t;
	}
	e.toHash = r;
	function i(e, t) {
		return typeof t == "boolean" ? t : Object.keys(t).length === 0 || (a(e, t), !o(t, e.self.RULES.all));
	}
	e.alwaysValidSchema = i;
	function a(e, t = e.schema) {
		let { opts: n, self: r } = e;
		if (!n.strictSchema || typeof t == "boolean") return;
		let i = r.RULES.keywords;
		for (let n in t) i[n] || C(e, `unknown keyword: "${n}"`);
	}
	e.checkUnknownRules = a;
	function o(e, t) {
		if (typeof e == "boolean") return !e;
		for (let n in e) if (t[n]) return !0;
		return !1;
	}
	e.schemaHasRules = o;
	function s(e, t) {
		if (typeof e == "boolean") return !e;
		for (let n in e) if (n !== "$ref" && t.all[n]) return !0;
		return !1;
	}
	e.schemaHasRulesButRef = s;
	function c({ topSchemaRef: e, schemaPath: n }, r, i, a) {
		if (!a) {
			if (typeof r == "number" || typeof r == "boolean") return r;
			if (typeof r == "string") return (0, t._)`${r}`;
		}
		return (0, t._)`${e}${n}${(0, t.getProperty)(i)}`;
	}
	e.schemaRefOrVal = c;
	function l(e) {
		return f(decodeURIComponent(e));
	}
	e.unescapeFragment = l;
	function u(e) {
		return encodeURIComponent(d(e));
	}
	e.escapeFragment = u;
	function d(e) {
		return typeof e == "number" ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1");
	}
	e.escapeJsonPointer = d;
	function f(e) {
		return e.replace(/~1/g, "/").replace(/~0/g, "~");
	}
	e.unescapeJsonPointer = f;
	function m(e, t) {
		if (Array.isArray(e)) for (let n of e) t(n);
		else t(e);
	}
	e.eachItem = m;
	function g({ mergeNames: e, mergeToName: n, mergeValues: r, resultToName: i }) {
		return (a, o, s, c) => {
			let l = s === void 0 ? o : s instanceof t.Name ? (o instanceof t.Name ? e(a, o, s) : n(a, o, s), s) : o instanceof t.Name ? (n(a, s, o), o) : r(o, s);
			return c === t.Name && !(l instanceof t.Name) ? i(a, l) : l;
		};
	}
	e.mergeEvaluated = {
		props: g({
			mergeNames: (e, n, r) => e.if((0, t._)`${r} !== true && ${n} !== undefined`, () => {
				e.if((0, t._)`${n} === true`, () => e.assign(r, !0), () => e.assign(r, (0, t._)`${r} || {}`).code((0, t._)`Object.assign(${r}, ${n})`));
			}),
			mergeToName: (e, n, r) => e.if((0, t._)`${r} !== true`, () => {
				n === !0 ? e.assign(r, !0) : (e.assign(r, (0, t._)`${r} || {}`), v(e, r, n));
			}),
			mergeValues: (e, t) => e === !0 || {
				...e,
				...t
			},
			resultToName: _
		}),
		items: g({
			mergeNames: (e, n, r) => e.if((0, t._)`${r} !== true && ${n} !== undefined`, () => e.assign(r, (0, t._)`${n} === true ? true : ${r} > ${n} ? ${r} : ${n}`)),
			mergeToName: (e, n, r) => e.if((0, t._)`${r} !== true`, () => e.assign(r, n === !0 || (0, t._)`${r} > ${n} ? ${r} : ${n}`)),
			mergeValues: (e, t) => e === !0 || Math.max(e, t),
			resultToName: (e, t) => e.var("items", t)
		})
	};
	function _(e, n) {
		if (n === !0) return e.var("props", !0);
		let r = e.var("props", (0, t._)`{}`);
		return n !== void 0 && v(e, r, n), r;
	}
	e.evaluatedPropsToName = _;
	function v(e, n, r) {
		Object.keys(r).forEach((r) => e.assign((0, t._)`${n}${(0, t.getProperty)(r)}`, !0));
	}
	e.setEvaluated = v;
	var y = {};
	function b(e, t) {
		return e.scopeValue("func", {
			ref: t,
			code: y[t.code] || (y[t.code] = new n._Code(t.code))
		});
	}
	e.useFunc = b;
	var x;
	(function(e) {
		e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
	})(x || (e.Type = x = {}));
	function S(e, n, r) {
		if (e instanceof t.Name) {
			let i = n === x.Num;
			return r ? i ? (0, t._)`"[" + ${e} + "]"` : (0, t._)`"['" + ${e} + "']"` : i ? (0, t._)`"/" + ${e}` : (0, t._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
		}
		return r ? (0, t.getProperty)(e).toString() : "/" + d(e);
	}
	e.getErrorPath = S;
	function C(e, t, n = e.opts.strictSchema) {
		if (n) {
			if (t = `strict mode: ${t}`, n === !0) throw Error(t);
			e.self.logger.warn(t);
		}
	}
	e.checkStrictMode = C;
})), _ = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h();
	e.default = {
		data: new t.Name("data"),
		valCxt: new t.Name("valCxt"),
		instancePath: new t.Name("instancePath"),
		parentData: new t.Name("parentData"),
		parentDataProperty: new t.Name("parentDataProperty"),
		rootData: new t.Name("rootData"),
		dynamicAnchors: new t.Name("dynamicAnchors"),
		vErrors: new t.Name("vErrors"),
		errors: new t.Name("errors"),
		this: new t.Name("this"),
		self: new t.Name("self"),
		scope: new t.Name("scope"),
		json: new t.Name("json"),
		jsonPos: new t.Name("jsonPos"),
		jsonLen: new t.Name("jsonLen"),
		jsonPart: new t.Name("jsonPart")
	};
})), v = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
	var t = h(), n = g(), r = _();
	e.keywordError = { message: ({ keyword: e }) => (0, t.str)`must pass "${e}" keyword validation` }, e.keyword$DataError = { message: ({ keyword: e, schemaType: n }) => n ? (0, t.str)`"${e}" keyword must be ${n} ($data)` : (0, t.str)`"${e}" keyword is invalid ($data)` };
	function i(n, r = e.keywordError, i, a) {
		let { it: o } = n, { gen: s, compositeRule: u, allErrors: f } = o, p = d(n, r, i);
		a ?? (u || f) ? c(s, p) : l(o, (0, t._)`[${p}]`);
	}
	e.reportError = i;
	function a(t, n = e.keywordError, i) {
		let { it: a } = t, { gen: o, compositeRule: s, allErrors: u } = a;
		c(o, d(t, n, i)), s || u || l(a, r.default.vErrors);
	}
	e.reportExtraError = a;
	function o(e, n) {
		e.assign(r.default.errors, n), e.if((0, t._)`${r.default.vErrors} !== null`, () => e.if(n, () => e.assign((0, t._)`${r.default.vErrors}.length`, n), () => e.assign(r.default.vErrors, null)));
	}
	e.resetErrorsCount = o;
	function s({ gen: e, keyword: n, schemaValue: i, data: a, errsCount: o, it: s }) {
		/* istanbul ignore if */
		if (o === void 0) throw Error("ajv implementation error");
		let c = e.name("err");
		e.forRange("i", o, r.default.errors, (o) => {
			e.const(c, (0, t._)`${r.default.vErrors}[${o}]`), e.if((0, t._)`${c}.instancePath === undefined`, () => e.assign((0, t._)`${c}.instancePath`, (0, t.strConcat)(r.default.instancePath, s.errorPath))), e.assign((0, t._)`${c}.schemaPath`, (0, t.str)`${s.errSchemaPath}/${n}`), s.opts.verbose && (e.assign((0, t._)`${c}.schema`, i), e.assign((0, t._)`${c}.data`, a));
		});
	}
	e.extendErrors = s;
	function c(e, n) {
		let i = e.const("err", n);
		e.if((0, t._)`${r.default.vErrors} === null`, () => e.assign(r.default.vErrors, (0, t._)`[${i}]`), (0, t._)`${r.default.vErrors}.push(${i})`), e.code((0, t._)`${r.default.errors}++`);
	}
	function l(e, n) {
		let { gen: r, validateName: i, schemaEnv: a } = e;
		a.$async ? r.throw((0, t._)`new ${e.ValidationError}(${n})`) : (r.assign((0, t._)`${i}.errors`, n), r.return(!1));
	}
	var u = {
		keyword: new t.Name("keyword"),
		schemaPath: new t.Name("schemaPath"),
		params: new t.Name("params"),
		propertyName: new t.Name("propertyName"),
		message: new t.Name("message"),
		schema: new t.Name("schema"),
		parentSchema: new t.Name("parentSchema")
	};
	function d(e, n, r) {
		let { createErrors: i } = e.it;
		return i === !1 ? (0, t._)`{}` : f(e, n, r);
	}
	function f(e, t, n = {}) {
		let { gen: r, it: i } = e, a = [p(i, n), m(e, n)];
		return v(e, t, a), r.object(...a);
	}
	function p({ errorPath: e }, { instancePath: i }) {
		let a = i ? (0, t.str)`${e}${(0, n.getErrorPath)(i, n.Type.Str)}` : e;
		return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, a)];
	}
	function m({ keyword: e, it: { errSchemaPath: r } }, { schemaPath: i, parentSchema: a }) {
		let o = a ? r : (0, t.str)`${r}/${e}`;
		return i && (o = (0, t.str)`${o}${(0, n.getErrorPath)(i, n.Type.Str)}`), [u.schemaPath, o];
	}
	function v(e, { params: n, message: i }, a) {
		let { keyword: o, data: s, schemaValue: c, it: l } = e, { opts: d, propertyName: f, topSchemaRef: p, schemaPath: m } = l;
		a.push([u.keyword, o], [u.params, typeof n == "function" ? n(e) : n || (0, t._)`{}`]), d.messages && a.push([u.message, typeof i == "function" ? i(e) : i]), d.verbose && a.push([u.schema, c], [u.parentSchema, (0, t._)`${p}${m}`], [r.default.data, s]), f && a.push([u.propertyName, f]);
	}
})), y = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.boolOrEmptySchema = e.topBoolOrEmptySchema = void 0;
	var t = v(), n = h(), r = _(), i = { message: "boolean schema is false" };
	function a(e) {
		let { gen: t, schema: i, validateName: a } = e;
		i === !1 ? s(e, !1) : typeof i == "object" && i.$async === !0 ? t.return(r.default.data) : (t.assign((0, n._)`${a}.errors`, null), t.return(!0));
	}
	e.topBoolOrEmptySchema = a;
	function o(e, t) {
		let { gen: n, schema: r } = e;
		r === !1 ? (n.var(t, !1), s(e)) : n.var(t, !0);
	}
	e.boolOrEmptySchema = o;
	function s(e, n) {
		let { gen: r, data: a } = e, o = {
			gen: r,
			keyword: "false schema",
			data: a,
			schema: !1,
			schemaCode: !1,
			schemaValue: !1,
			params: {},
			it: e
		};
		(0, t.reportError)(o, i, void 0, n);
	}
})), b = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getRules = e.isJSONType = void 0;
	var t = /* @__PURE__ */ new Set([
		"string",
		"number",
		"integer",
		"boolean",
		"null",
		"object",
		"array"
	]);
	function n(e) {
		return typeof e == "string" && t.has(e);
	}
	e.isJSONType = n;
	function r() {
		let e = {
			number: {
				type: "number",
				rules: []
			},
			string: {
				type: "string",
				rules: []
			},
			array: {
				type: "array",
				rules: []
			},
			object: {
				type: "object",
				rules: []
			}
		};
		return {
			types: {
				...e,
				integer: !0,
				boolean: !0,
				null: !0
			},
			rules: [
				{ rules: [] },
				e.number,
				e.string,
				e.array,
				e.object
			],
			post: { rules: [] },
			all: {},
			keywords: {}
		};
	}
	e.getRules = r;
})), x = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.shouldUseRule = e.shouldUseGroup = e.schemaHasRulesForType = void 0;
	function t({ schema: e, self: t }, r) {
		let i = t.RULES.types[r];
		return i && i !== !0 && n(e, i);
	}
	e.schemaHasRulesForType = t;
	function n(e, t) {
		return t.rules.some((t) => r(e, t));
	}
	e.shouldUseGroup = n;
	function r(e, t) {
		return e[t.keyword] !== void 0 || t.definition.implements?.some((t) => e[t] !== void 0);
	}
	e.shouldUseRule = r;
})), S = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.reportTypeError = e.checkDataTypes = e.checkDataType = e.coerceAndCheckDataType = e.getJSONTypes = e.getSchemaTypes = e.DataType = void 0;
	var t = b(), n = x(), r = v(), i = h(), a = g(), o;
	(function(e) {
		e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
	})(o || (e.DataType = o = {}));
	function s(e) {
		let t = c(e.type);
		if (t.includes("null")) {
			if (e.nullable === !1) throw Error("type: null contradicts nullable: false");
		} else {
			if (!t.length && e.nullable !== void 0) throw Error("\"nullable\" cannot be used without \"type\"");
			e.nullable === !0 && t.push("null");
		}
		return t;
	}
	e.getSchemaTypes = s;
	function c(e) {
		let n = Array.isArray(e) ? e : e ? [e] : [];
		if (n.every(t.isJSONType)) return n;
		throw Error("type must be JSONType or JSONType[]: " + n.join(","));
	}
	e.getJSONTypes = c;
	function l(e, t) {
		let { gen: r, data: i, opts: a } = e, s = d(t, a.coerceTypes), c = t.length > 0 && !(s.length === 0 && t.length === 1 && (0, n.schemaHasRulesForType)(e, t[0]));
		if (c) {
			let n = _(t, i, a.strictNumbers, o.Wrong);
			r.if(n, () => {
				s.length ? f(e, t, s) : S(e);
			});
		}
		return c;
	}
	e.coerceAndCheckDataType = l;
	var u = /* @__PURE__ */ new Set([
		"string",
		"number",
		"integer",
		"boolean",
		"null"
	]);
	function d(e, t) {
		return t ? e.filter((e) => u.has(e) || t === "array" && e === "array") : [];
	}
	function f(e, t, n) {
		let { gen: r, data: a, opts: o } = e, s = r.let("dataType", (0, i._)`typeof ${a}`), c = r.let("coerced", (0, i._)`undefined`);
		o.coerceTypes === "array" && r.if((0, i._)`${s} == 'object' && Array.isArray(${a}) && ${a}.length == 1`, () => r.assign(a, (0, i._)`${a}[0]`).assign(s, (0, i._)`typeof ${a}`).if(_(t, a, o.strictNumbers), () => r.assign(c, a))), r.if((0, i._)`${c} !== undefined`);
		for (let e of n) (u.has(e) || e === "array" && o.coerceTypes === "array") && l(e);
		r.else(), S(e), r.endIf(), r.if((0, i._)`${c} !== undefined`, () => {
			r.assign(a, c), p(e, c);
		});
		function l(e) {
			switch (e) {
				case "string":
					r.elseIf((0, i._)`${s} == "number" || ${s} == "boolean"`).assign(c, (0, i._)`"" + ${a}`).elseIf((0, i._)`${a} === null`).assign(c, (0, i._)`""`);
					return;
				case "number":
					r.elseIf((0, i._)`${s} == "boolean" || ${a} === null
              || (${s} == "string" && ${a} && ${a} == +${a})`).assign(c, (0, i._)`+${a}`);
					return;
				case "integer":
					r.elseIf((0, i._)`${s} === "boolean" || ${a} === null
              || (${s} === "string" && ${a} && ${a} == +${a} && !(${a} % 1))`).assign(c, (0, i._)`+${a}`);
					return;
				case "boolean":
					r.elseIf((0, i._)`${a} === "false" || ${a} === 0 || ${a} === null`).assign(c, !1).elseIf((0, i._)`${a} === "true" || ${a} === 1`).assign(c, !0);
					return;
				case "null":
					r.elseIf((0, i._)`${a} === "" || ${a} === 0 || ${a} === false`), r.assign(c, null);
					return;
				case "array": r.elseIf((0, i._)`${s} === "string" || ${s} === "number"
              || ${s} === "boolean" || ${a} === null`).assign(c, (0, i._)`[${a}]`);
			}
		}
	}
	function p({ gen: e, parentData: t, parentDataProperty: n }, r) {
		e.if((0, i._)`${t} !== undefined`, () => e.assign((0, i._)`${t}[${n}]`, r));
	}
	function m(e, t, n, r = o.Correct) {
		let a = r === o.Correct ? i.operators.EQ : i.operators.NEQ, s;
		switch (e) {
			case "null": return (0, i._)`${t} ${a} null`;
			case "array":
				s = (0, i._)`Array.isArray(${t})`;
				break;
			case "object":
				s = (0, i._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
				break;
			case "integer":
				s = c((0, i._)`!(${t} % 1) && !isNaN(${t})`);
				break;
			case "number":
				s = c();
				break;
			default: return (0, i._)`typeof ${t} ${a} ${e}`;
		}
		return r === o.Correct ? s : (0, i.not)(s);
		function c(e = i.nil) {
			return (0, i.and)((0, i._)`typeof ${t} == "number"`, e, n ? (0, i._)`isFinite(${t})` : i.nil);
		}
	}
	e.checkDataType = m;
	function _(e, t, n, r) {
		if (e.length === 1) return m(e[0], t, n, r);
		let o, s = (0, a.toHash)(e);
		if (s.array && s.object) {
			let e = (0, i._)`typeof ${t} != "object"`;
			o = s.null ? e : (0, i._)`!${t} || ${e}`, delete s.null, delete s.array, delete s.object;
		} else o = i.nil;
		s.number && delete s.integer;
		for (let e in s) o = (0, i.and)(o, m(e, t, n, r));
		return o;
	}
	e.checkDataTypes = _;
	var y = {
		message: ({ schema: e }) => `must be ${e}`,
		params: ({ schema: e, schemaValue: t }) => typeof e == "string" ? (0, i._)`{type: ${e}}` : (0, i._)`{type: ${t}}`
	};
	function S(e) {
		let t = C(e);
		(0, r.reportError)(t, y);
	}
	e.reportTypeError = S;
	function C(e) {
		let { gen: t, data: n, schema: r } = e, i = (0, a.schemaRefOrVal)(e, r, "type");
		return {
			gen: t,
			keyword: "type",
			data: n,
			schema: r.type,
			schemaCode: i,
			schemaValue: i,
			parentSchema: r,
			params: {},
			it: e
		};
	}
})), C = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.assignDefaults = void 0;
	var t = h(), n = g();
	function r(e, t) {
		let { properties: n, items: r } = e.schema;
		if (t === "object" && n) for (let t in n) i(e, t, n[t].default);
		else t === "array" && Array.isArray(r) && r.forEach((t, n) => i(e, n, t.default));
	}
	e.assignDefaults = r;
	function i(e, r, i) {
		let { gen: a, compositeRule: o, data: s, opts: c } = e;
		if (i === void 0) return;
		let l = (0, t._)`${s}${(0, t.getProperty)(r)}`;
		if (o) {
			(0, n.checkStrictMode)(e, `default is ignored for: ${l}`);
			return;
		}
		let u = (0, t._)`${l} === undefined`;
		c.useDefaults === "empty" && (u = (0, t._)`${u} || ${l} === null || ${l} === ""`), a.if(u, (0, t._)`${l} = ${(0, t.stringify)(i)}`);
	}
})), w = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateUnion = e.validateArray = e.usePattern = e.callValidateCode = e.schemaProperties = e.allSchemaProperties = e.noPropertyInData = e.propertyInData = e.isOwnProperty = e.hasPropFunc = e.reportMissingProp = e.checkMissingProp = e.checkReportMissingProp = void 0;
	var t = h(), n = g(), r = _(), i = g();
	function a(e, n) {
		let { gen: r, data: i, it: a } = e;
		r.if(d(r, i, n, a.opts.ownProperties), () => {
			e.setParams({ missingProperty: (0, t._)`${n}` }, !0), e.error();
		});
	}
	e.checkReportMissingProp = a;
	function o({ gen: e, data: n, it: { opts: r } }, i, a) {
		return (0, t.or)(...i.map((i) => (0, t.and)(d(e, n, i, r.ownProperties), (0, t._)`${a} = ${i}`)));
	}
	e.checkMissingProp = o;
	function s(e, t) {
		e.setParams({ missingProperty: t }, !0), e.error();
	}
	e.reportMissingProp = s;
	function c(e) {
		return e.scopeValue("func", {
			ref: Object.prototype.hasOwnProperty,
			code: (0, t._)`Object.prototype.hasOwnProperty`
		});
	}
	e.hasPropFunc = c;
	function l(e, n, r) {
		return (0, t._)`${c(e)}.call(${n}, ${r})`;
	}
	e.isOwnProperty = l;
	function u(e, n, r, i) {
		let a = (0, t._)`${n}${(0, t.getProperty)(r)} !== undefined`;
		return i ? (0, t._)`${a} && ${l(e, n, r)}` : a;
	}
	e.propertyInData = u;
	function d(e, n, r, i) {
		let a = (0, t._)`${n}${(0, t.getProperty)(r)} === undefined`;
		return i ? (0, t.or)(a, (0, t.not)(l(e, n, r))) : a;
	}
	e.noPropertyInData = d;
	function f(e) {
		return e ? Object.keys(e).filter((e) => e !== "__proto__") : [];
	}
	e.allSchemaProperties = f;
	function p(e, t) {
		return f(t).filter((r) => !(0, n.alwaysValidSchema)(e, t[r]));
	}
	e.schemaProperties = p;
	function m({ schemaCode: e, data: n, it: { gen: i, topSchemaRef: a, schemaPath: o, errorPath: s }, it: c }, l, u, d) {
		let f = d ? (0, t._)`${e}, ${n}, ${a}${o}` : n, p = [
			[r.default.instancePath, (0, t.strConcat)(r.default.instancePath, s)],
			[r.default.parentData, c.parentData],
			[r.default.parentDataProperty, c.parentDataProperty],
			[r.default.rootData, r.default.rootData]
		];
		c.opts.dynamicRef && p.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
		let m = (0, t._)`${f}, ${i.object(...p)}`;
		return u === t.nil ? (0, t._)`${l}(${m})` : (0, t._)`${l}.call(${u}, ${m})`;
	}
	e.callValidateCode = m;
	var v = (0, t._)`new RegExp`;
	function y({ gen: e, it: { opts: n } }, r) {
		let a = n.unicodeRegExp ? "u" : "", { regExp: o } = n.code, s = o(r, a);
		return e.scopeValue("pattern", {
			key: s.toString(),
			ref: s,
			code: (0, t._)`${o.code === "new RegExp" ? v : (0, i.useFunc)(e, o)}(${r}, ${a})`
		});
	}
	e.usePattern = y;
	function b(e) {
		let { gen: r, data: i, keyword: a, it: o } = e, s = r.name("valid");
		if (o.allErrors) {
			let e = r.let("valid", !0);
			return c(() => r.assign(e, !1)), e;
		}
		return r.var(s, !0), c(() => r.break()), s;
		function c(o) {
			let c = r.const("len", (0, t._)`${i}.length`);
			r.forRange("i", 0, c, (i) => {
				e.subschema({
					keyword: a,
					dataProp: i,
					dataPropType: n.Type.Num
				}, s), r.if((0, t.not)(s), o);
			});
		}
	}
	e.validateArray = b;
	function x(e) {
		let { gen: r, schema: i, keyword: a, it: o } = e;
		/* istanbul ignore if */
		if (!Array.isArray(i)) throw Error("ajv implementation error");
		if (i.some((e) => (0, n.alwaysValidSchema)(o, e)) && !o.opts.unevaluated) return;
		let s = r.let("valid", !1), c = r.name("_valid");
		r.block(() => i.forEach((n, i) => {
			let o = e.subschema({
				keyword: a,
				schemaProp: i,
				compositeRule: !0
			}, c);
			r.assign(s, (0, t._)`${s} || ${c}`), e.mergeValidEvaluated(o, c) || r.if((0, t.not)(s));
		})), e.result(s, () => e.reset(), () => e.error(!0));
	}
	e.validateUnion = x;
})), T = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateKeywordUsage = e.validSchemaType = e.funcKeywordCode = e.macroKeywordCode = void 0;
	var t = h(), n = _(), r = w(), i = v();
	function a(e, n) {
		let { gen: r, keyword: i, schema: a, parentSchema: o, it: s } = e, c = n.macro.call(s.self, a, o, s), l = u(r, i, c);
		s.opts.validateSchema !== !1 && s.self.validateSchema(c, !0);
		let d = r.name("valid");
		e.subschema({
			schema: c,
			schemaPath: t.nil,
			errSchemaPath: `${s.errSchemaPath}/${i}`,
			topSchemaRef: l,
			compositeRule: !0
		}, d), e.pass(d, () => e.error(!0));
	}
	e.macroKeywordCode = a;
	function o(e, i) {
		let { gen: a, keyword: o, schema: d, parentSchema: f, $data: p, it: m } = e;
		l(m, i);
		let h = u(a, o, !p && i.compile ? i.compile.call(m.self, d, f, m) : i.validate), g = a.let("valid");
		e.block$data(g, _), e.ok(i.valid ?? g);
		function _() {
			if (i.errors === !1) b(), i.modifying && s(e), x(() => e.error());
			else {
				let t = i.async ? v() : y();
				i.modifying && s(e), x(() => c(e, t));
			}
		}
		function v() {
			let e = a.let("ruleErrs", null);
			return a.try(() => b((0, t._)`await `), (n) => a.assign(g, !1).if((0, t._)`${n} instanceof ${m.ValidationError}`, () => a.assign(e, (0, t._)`${n}.errors`), () => a.throw(n))), e;
		}
		function y() {
			let e = (0, t._)`${h}.errors`;
			return a.assign(e, null), b(t.nil), e;
		}
		function b(o = i.async ? (0, t._)`await ` : t.nil) {
			let s = m.opts.passContext ? n.default.this : n.default.self, c = !("compile" in i && !p || i.schema === !1);
			a.assign(g, (0, t._)`${o}${(0, r.callValidateCode)(e, h, s, c)}`, i.modifying);
		}
		function x(e) {
			a.if((0, t.not)(i.valid ?? g), e);
		}
	}
	e.funcKeywordCode = o;
	function s(e) {
		let { gen: n, data: r, it: i } = e;
		n.if(i.parentData, () => n.assign(r, (0, t._)`${i.parentData}[${i.parentDataProperty}]`));
	}
	function c(e, r) {
		let { gen: a } = e;
		a.if((0, t._)`Array.isArray(${r})`, () => {
			a.assign(n.default.vErrors, (0, t._)`${n.default.vErrors} === null ? ${r} : ${n.default.vErrors}.concat(${r})`).assign(n.default.errors, (0, t._)`${n.default.vErrors}.length`), (0, i.extendErrors)(e);
		}, () => e.error());
	}
	function l({ schemaEnv: e }, t) {
		if (t.async && !e.$async) throw Error("async keyword in sync schema");
	}
	function u(e, n, r) {
		if (r === void 0) throw Error(`keyword "${n}" failed to compile`);
		return e.scopeValue("keyword", typeof r == "function" ? { ref: r } : {
			ref: r,
			code: (0, t.stringify)(r)
		});
	}
	function d(e, t, n = !1) {
		return !t.length || t.some((t) => t === "array" ? Array.isArray(e) : t === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == t || n && e === void 0);
	}
	e.validSchemaType = d;
	function f({ schema: e, opts: t, self: n, errSchemaPath: r }, i, a) {
		/* istanbul ignore if */
		if (Array.isArray(i.keyword) ? !i.keyword.includes(a) : i.keyword !== a) throw Error("ajv implementation error");
		let o = i.dependencies;
		if (o?.some((t) => !Object.prototype.hasOwnProperty.call(e, t))) throw Error(`parent schema must have dependencies of ${a}: ${o.join(",")}`);
		if (i.validateSchema && !i.validateSchema(e[a])) {
			let e = `keyword "${a}" value is invalid at path "${r}": ` + n.errorsText(i.validateSchema.errors);
			if (t.validateSchema === "log") n.logger.error(e);
			else throw Error(e);
		}
	}
	e.validateKeywordUsage = f;
})), E = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.extendSubschemaMode = e.extendSubschemaData = e.getSubschema = void 0;
	var t = h(), n = g();
	function r(e, { keyword: r, schemaProp: i, schema: a, schemaPath: o, errSchemaPath: s, topSchemaRef: c }) {
		if (r !== void 0 && a !== void 0) throw Error("both \"keyword\" and \"schema\" passed, only one allowed");
		if (r !== void 0) {
			let a = e.schema[r];
			return i === void 0 ? {
				schema: a,
				schemaPath: (0, t._)`${e.schemaPath}${(0, t.getProperty)(r)}`,
				errSchemaPath: `${e.errSchemaPath}/${r}`
			} : {
				schema: a[i],
				schemaPath: (0, t._)`${e.schemaPath}${(0, t.getProperty)(r)}${(0, t.getProperty)(i)}`,
				errSchemaPath: `${e.errSchemaPath}/${r}/${(0, n.escapeFragment)(i)}`
			};
		}
		if (a !== void 0) {
			if (o === void 0 || s === void 0 || c === void 0) throw Error("\"schemaPath\", \"errSchemaPath\" and \"topSchemaRef\" are required with \"schema\"");
			return {
				schema: a,
				schemaPath: o,
				topSchemaRef: c,
				errSchemaPath: s
			};
		}
		throw Error("either \"keyword\" or \"schema\" must be passed");
	}
	e.getSubschema = r;
	function i(e, r, { dataProp: i, dataPropType: a, data: o, dataTypes: s, propertyName: c }) {
		if (o !== void 0 && i !== void 0) throw Error("both \"data\" and \"dataProp\" passed, only one allowed");
		let { gen: l } = r;
		if (i !== void 0) {
			let { errorPath: o, dataPathArr: s, opts: c } = r;
			u(l.let("data", (0, t._)`${r.data}${(0, t.getProperty)(i)}`, !0)), e.errorPath = (0, t.str)`${o}${(0, n.getErrorPath)(i, a, c.jsPropertySyntax)}`, e.parentDataProperty = (0, t._)`${i}`, e.dataPathArr = [...s, e.parentDataProperty];
		}
		o !== void 0 && (u(o instanceof t.Name ? o : l.let("data", o, !0)), c !== void 0 && (e.propertyName = c)), s && (e.dataTypes = s);
		function u(t) {
			e.data = t, e.dataLevel = r.dataLevel + 1, e.dataTypes = [], r.definedProperties = /* @__PURE__ */ new Set(), e.parentData = r.data, e.dataNames = [...r.dataNames, t];
		}
	}
	e.extendSubschemaData = i;
	function a(e, { jtdDiscriminator: t, jtdMetadata: n, compositeRule: r, createErrors: i, allErrors: a }) {
		r !== void 0 && (e.compositeRule = r), i !== void 0 && (e.createErrors = i), a !== void 0 && (e.allErrors = a), e.jtdDiscriminator = t, e.jtdMetadata = n;
	}
	e.extendSubschemaMode = a;
})), D = /* @__PURE__ */ s(((e, t) => {
	t.exports = function e(t, n) {
		if (t === n) return !0;
		if (t && n && typeof t == "object" && typeof n == "object") {
			if (t.constructor !== n.constructor) return !1;
			var r, i, a;
			if (Array.isArray(t)) {
				if (r = t.length, r != n.length) return !1;
				for (i = r; i-- !== 0;) if (!e(t[i], n[i])) return !1;
				return !0;
			}
			if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
			if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
			if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
			if (a = Object.keys(t), r = a.length, r !== Object.keys(n).length) return !1;
			for (i = r; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1;
			for (i = r; i-- !== 0;) {
				var o = a[i];
				if (!e(t[o], n[o])) return !1;
			}
			return !0;
		}
		return t !== t && n !== n;
	};
})), O = /* @__PURE__ */ s(((e, t) => {
	var n = t.exports = function(e, t, n) {
		typeof t == "function" && (n = t, t = {}), n = t.cb || n;
		var i = typeof n == "function" ? n : n.pre || function() {}, a = n.post || function() {};
		r(t, i, a, e, "", e);
	};
	n.keywords = {
		additionalItems: !0,
		items: !0,
		contains: !0,
		additionalProperties: !0,
		propertyNames: !0,
		not: !0,
		if: !0,
		then: !0,
		else: !0
	}, n.arrayKeywords = {
		items: !0,
		allOf: !0,
		anyOf: !0,
		oneOf: !0
	}, n.propsKeywords = {
		$defs: !0,
		definitions: !0,
		properties: !0,
		patternProperties: !0,
		dependencies: !0
	}, n.skipKeywords = {
		default: !0,
		enum: !0,
		const: !0,
		required: !0,
		maximum: !0,
		minimum: !0,
		exclusiveMaximum: !0,
		exclusiveMinimum: !0,
		multipleOf: !0,
		maxLength: !0,
		minLength: !0,
		pattern: !0,
		format: !0,
		maxItems: !0,
		minItems: !0,
		uniqueItems: !0,
		maxProperties: !0,
		minProperties: !0
	};
	function r(e, t, a, o, s, c, l, u, d, f) {
		if (o && typeof o == "object" && !Array.isArray(o)) {
			for (var p in t(o, s, c, l, u, d, f), o) {
				var m = o[p];
				if (Array.isArray(m)) {
					if (p in n.arrayKeywords) for (var h = 0; h < m.length; h++) r(e, t, a, m[h], s + "/" + p + "/" + h, c, s, p, o, h);
				} else if (p in n.propsKeywords) {
					if (m && typeof m == "object") for (var g in m) r(e, t, a, m[g], s + "/" + p + "/" + i(g), c, s, p, o, g);
				} else (p in n.keywords || e.allKeys && !(p in n.skipKeywords)) && r(e, t, a, m, s + "/" + p, c, s, p, o);
			}
			a(o, s, c, l, u, d, f);
		}
	}
	function i(e) {
		return e.replace(/~/g, "~0").replace(/\//g, "~1");
	}
})), k = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getSchemaRefs = e.resolveUrl = e.normalizeId = e._getFullPath = e.getFullPath = e.inlineRef = void 0;
	var t = g(), n = D(), r = O(), i = /* @__PURE__ */ new Set([
		"type",
		"format",
		"pattern",
		"maxLength",
		"minLength",
		"maxProperties",
		"minProperties",
		"maxItems",
		"minItems",
		"maximum",
		"minimum",
		"uniqueItems",
		"multipleOf",
		"required",
		"enum",
		"const"
	]);
	function a(e, t = !0) {
		return typeof e == "boolean" ? !0 : t === !0 ? !s(e) : t ? c(e) <= t : !1;
	}
	e.inlineRef = a;
	var o = /* @__PURE__ */ new Set([
		"$ref",
		"$recursiveRef",
		"$recursiveAnchor",
		"$dynamicRef",
		"$dynamicAnchor"
	]);
	function s(e) {
		for (let t in e) {
			if (o.has(t)) return !0;
			let n = e[t];
			if (Array.isArray(n) && n.some(s) || typeof n == "object" && s(n)) return !0;
		}
		return !1;
	}
	function c(e) {
		let n = 0;
		for (let r in e) if (r === "$ref" || (n++, !i.has(r) && (typeof e[r] == "object" && (0, t.eachItem)(e[r], (e) => n += c(e)), n === Infinity))) return Infinity;
		return n;
	}
	function l(e, t = "", n) {
		return n !== !1 && (t = f(t)), u(e, e.parse(t));
	}
	e.getFullPath = l;
	function u(e, t) {
		return e.serialize(t).split("#")[0] + "#";
	}
	e._getFullPath = u;
	var d = /#\/?$/;
	function f(e) {
		return e ? e.replace(d, "") : "";
	}
	e.normalizeId = f;
	function p(e, t, n) {
		return n = f(n), e.resolve(t, n);
	}
	e.resolveUrl = p;
	var m = /^[a-z_][-a-z0-9._]*$/i;
	function h(e, t) {
		if (typeof e == "boolean") return {};
		let { schemaId: i, uriResolver: a } = this.opts, o = f(e[i] || t), s = { "": o }, c = l(a, o, !1), u = {}, d = /* @__PURE__ */ new Set();
		return r(e, { allKeys: !0 }, (e, t, n, r) => {
			if (r === void 0) return;
			let a = c + t, o = s[r];
			typeof e[i] == "string" && (o = l.call(this, e[i])), g.call(this, e.$anchor), g.call(this, e.$dynamicAnchor), s[t] = o;
			function l(t) {
				let n = this.opts.uriResolver.resolve;
				if (t = f(o ? n(o, t) : t), d.has(t)) throw h(t);
				d.add(t);
				let r = this.refs[t];
				return typeof r == "string" && (r = this.refs[r]), typeof r == "object" ? p(e, r.schema, t) : t !== f(a) && (t[0] === "#" ? (p(e, u[t], t), u[t] = e) : this.refs[t] = a), t;
			}
			function g(e) {
				if (typeof e == "string") {
					if (!m.test(e)) throw Error(`invalid anchor "${e}"`);
					l.call(this, `#${e}`);
				}
			}
		}), u;
		function p(e, t, r) {
			if (t !== void 0 && !n(e, t)) throw h(r);
		}
		function h(e) {
			return /* @__PURE__ */ Error(`reference "${e}" resolves to more than one schema`);
		}
	}
	e.getSchemaRefs = h;
})), A = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getData = e.KeywordCxt = e.validateFunctionCode = void 0;
	var t = y(), n = S(), r = x(), i = S(), a = C(), o = T(), s = E(), c = h(), l = _(), u = k(), d = g(), f = v();
	function p(e) {
		N(e) && (te(e), M(e)) ? D(e) : m(e, () => (0, t.topBoolOrEmptySchema)(e));
	}
	e.validateFunctionCode = p;
	function m({ gen: e, validateName: t, schema: n, schemaEnv: r, opts: i }, a) {
		i.code.es5 ? e.func(t, (0, c._)`${l.default.data}, ${l.default.valCxt}`, r.$async, () => {
			e.code((0, c._)`"use strict"; ${A(n, i)}`), w(e, i), e.code(a);
		}) : e.func(t, (0, c._)`${l.default.data}, ${b(i)}`, r.$async, () => e.code(A(n, i)).code(a));
	}
	function b(e) {
		return (0, c._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${e.dynamicRef ? (0, c._)`, ${l.default.dynamicAnchors}={}` : c.nil}}={}`;
	}
	function w(e, t) {
		e.if(l.default.valCxt, () => {
			e.var(l.default.instancePath, (0, c._)`${l.default.valCxt}.${l.default.instancePath}`), e.var(l.default.parentData, (0, c._)`${l.default.valCxt}.${l.default.parentData}`), e.var(l.default.parentDataProperty, (0, c._)`${l.default.valCxt}.${l.default.parentDataProperty}`), e.var(l.default.rootData, (0, c._)`${l.default.valCxt}.${l.default.rootData}`), t.dynamicRef && e.var(l.default.dynamicAnchors, (0, c._)`${l.default.valCxt}.${l.default.dynamicAnchors}`);
		}, () => {
			e.var(l.default.instancePath, (0, c._)`""`), e.var(l.default.parentData, (0, c._)`undefined`), e.var(l.default.parentDataProperty, (0, c._)`undefined`), e.var(l.default.rootData, l.default.data), t.dynamicRef && e.var(l.default.dynamicAnchors, (0, c._)`{}`);
		});
	}
	function D(e) {
		let { schema: t, opts: n, gen: r } = e;
		m(e, () => {
			n.$comment && t.$comment && se(e), ie(e), r.let(l.default.vErrors, null), r.let(l.default.errors, 0), n.unevaluated && O(e), ne(e), ce(e);
		});
	}
	function O(e) {
		let { gen: t, validateName: n } = e;
		e.evaluated = t.const("evaluated", (0, c._)`${n}.evaluated`), t.if((0, c._)`${e.evaluated}.dynamicProps`, () => t.assign((0, c._)`${e.evaluated}.props`, (0, c._)`undefined`)), t.if((0, c._)`${e.evaluated}.dynamicItems`, () => t.assign((0, c._)`${e.evaluated}.items`, (0, c._)`undefined`));
	}
	function A(e, t) {
		let n = typeof e == "object" && e[t.schemaId];
		return n && (t.code.source || t.code.process) ? (0, c._)`/*# sourceURL=${n} */` : c.nil;
	}
	function j(e, n) {
		N(e) && (te(e), M(e)) ? ee(e, n) : (0, t.boolOrEmptySchema)(e, n);
	}
	function M({ schema: e, self: t }) {
		if (typeof e == "boolean") return !e;
		for (let n in e) if (t.RULES.all[n]) return !0;
		return !1;
	}
	function N(e) {
		return typeof e.schema != "boolean";
	}
	function ee(e, t) {
		let { schema: n, gen: r, opts: i } = e;
		i.$comment && n.$comment && se(e), ae(e), oe(e);
		let a = r.const("_errs", l.default.errors);
		ne(e, a), r.var(t, (0, c._)`${a} === ${l.default.errors}`);
	}
	function te(e) {
		(0, d.checkUnknownRules)(e), re(e);
	}
	function ne(e, t) {
		if (e.opts.jtd) return ue(e, [], !1, t);
		let r = (0, n.getSchemaTypes)(e.schema);
		ue(e, r, !(0, n.coerceAndCheckDataType)(e, r), t);
	}
	function re(e) {
		let { schema: t, errSchemaPath: n, opts: r, self: i } = e;
		t.$ref && r.ignoreKeywordsWithRef && (0, d.schemaHasRulesButRef)(t, i.RULES) && i.logger.warn(`$ref: keywords ignored in schema at path "${n}"`);
	}
	function ie(e) {
		let { schema: t, opts: n } = e;
		t.default !== void 0 && n.useDefaults && n.strictSchema && (0, d.checkStrictMode)(e, "default is ignored in the schema root");
	}
	function ae(e) {
		let t = e.schema[e.opts.schemaId];
		t && (e.baseId = (0, u.resolveUrl)(e.opts.uriResolver, e.baseId, t));
	}
	function oe(e) {
		if (e.schema.$async && !e.schemaEnv.$async) throw Error("async schema in sync schema");
	}
	function se({ gen: e, schemaEnv: t, schema: n, errSchemaPath: r, opts: i }) {
		let a = n.$comment;
		if (i.$comment === !0) e.code((0, c._)`${l.default.self}.logger.log(${a})`);
		else if (typeof i.$comment == "function") {
			let n = (0, c.str)`${r}/$comment`, i = e.scopeValue("root", { ref: t.root });
			e.code((0, c._)`${l.default.self}.opts.$comment(${a}, ${n}, ${i}.schema)`);
		}
	}
	function ce(e) {
		let { gen: t, schemaEnv: n, validateName: r, ValidationError: i, opts: a } = e;
		n.$async ? t.if((0, c._)`${l.default.errors} === 0`, () => t.return(l.default.data), () => t.throw((0, c._)`new ${i}(${l.default.vErrors})`)) : (t.assign((0, c._)`${r}.errors`, l.default.vErrors), a.unevaluated && le(e), t.return((0, c._)`${l.default.errors} === 0`));
	}
	function le({ gen: e, evaluated: t, props: n, items: r }) {
		n instanceof c.Name && e.assign((0, c._)`${t}.props`, n), r instanceof c.Name && e.assign((0, c._)`${t}.items`, r);
	}
	function ue(e, t, n, a) {
		let { gen: o, schema: s, data: u, allErrors: f, opts: p, self: m } = e, { RULES: h } = m;
		if (s.$ref && (p.ignoreKeywordsWithRef || !(0, d.schemaHasRulesButRef)(s, h))) {
			o.block(() => xe(e, "$ref", h.all.$ref.definition));
			return;
		}
		p.jtd || fe(e, t), o.block(() => {
			for (let e of h.rules) g(e);
			g(h.post);
		});
		function g(d) {
			(0, r.shouldUseGroup)(s, d) && (d.type ? (o.if((0, i.checkDataType)(d.type, u, p.strictNumbers)), de(e, d), t.length === 1 && t[0] === d.type && n && (o.else(), (0, i.reportTypeError)(e)), o.endIf()) : de(e, d), f || o.if((0, c._)`${l.default.errors} === ${a || 0}`));
		}
	}
	function de(e, t) {
		let { gen: n, schema: i, opts: { useDefaults: o } } = e;
		o && (0, a.assignDefaults)(e, t.type), n.block(() => {
			for (let n of t.rules) (0, r.shouldUseRule)(i, n) && xe(e, n.keyword, n.definition, t.type);
		});
	}
	function fe(e, t) {
		!e.schemaEnv.meta && e.opts.strictTypes && (pe(e, t), e.opts.allowUnionTypes || me(e, t), he(e, e.dataTypes));
	}
	function pe(e, t) {
		t.length && (e.dataTypes.length ? (t.forEach((t) => {
			_e(e.dataTypes, t) || ye(e, `type "${t}" not allowed by context "${e.dataTypes.join(",")}"`);
		}), ve(e, t)) : e.dataTypes = t);
	}
	function me(e, t) {
		t.length > 1 && !(t.length === 2 && t.includes("null")) && ye(e, "use allowUnionTypes to allow union type keyword");
	}
	function he(e, t) {
		let n = e.self.RULES.all;
		for (let i in n) {
			let a = n[i];
			if (typeof a == "object" && (0, r.shouldUseRule)(e.schema, a)) {
				let { type: n } = a.definition;
				n.length && !n.some((e) => ge(t, e)) && ye(e, `missing type "${n.join(",")}" for keyword "${i}"`);
			}
		}
	}
	function ge(e, t) {
		return e.includes(t) || t === "number" && e.includes("integer");
	}
	function _e(e, t) {
		return e.includes(t) || t === "integer" && e.includes("number");
	}
	function ve(e, t) {
		let n = [];
		for (let r of e.dataTypes) _e(t, r) ? n.push(r) : t.includes("integer") && r === "number" && n.push("integer");
		e.dataTypes = n;
	}
	function ye(e, t) {
		let n = e.schemaEnv.baseId + e.errSchemaPath;
		t += ` at "${n}" (strictTypes)`, (0, d.checkStrictMode)(e, t, e.opts.strictTypes);
	}
	var be = class {
		constructor(e, t, n) {
			if ((0, o.validateKeywordUsage)(e, t, n), this.gen = e.gen, this.allErrors = e.allErrors, this.keyword = n, this.data = e.data, this.schema = e.schema[n], this.$data = t.$data && e.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, d.schemaRefOrVal)(e, this.schema, n, this.$data), this.schemaType = t.schemaType, this.parentSchema = e.schema, this.params = {}, this.it = e, this.def = t, this.$data) this.schemaCode = e.gen.const("vSchema", we(this.$data, e));
			else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, t.schemaType, t.allowUndefined)) throw Error(`${n} value must be ${JSON.stringify(t.schemaType)}`);
			("code" in t ? t.trackErrors : t.errors !== !1) && (this.errsCount = e.gen.const("_errs", l.default.errors));
		}
		result(e, t, n) {
			this.failResult((0, c.not)(e), t, n);
		}
		failResult(e, t, n) {
			this.gen.if(e), n ? n() : this.error(), t ? (this.gen.else(), t(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
		}
		pass(e, t) {
			this.failResult((0, c.not)(e), void 0, t);
		}
		fail(e) {
			e === void 0 ? (this.error(), this.allErrors || this.gen.if(!1)) : (this.gen.if(e), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else());
		}
		fail$data(e) {
			if (!this.$data) return this.fail(e);
			let { schemaCode: t } = this;
			this.fail((0, c._)`${t} !== undefined && (${(0, c.or)(this.invalid$data(), e)})`);
		}
		error(e, t, n) {
			t ? (this.setParams(t), this._error(e, n), this.setParams({})) : this._error(e, n);
		}
		_error(e, t) {
			(e ? f.reportExtraError : f.reportError)(this, this.def.error, t);
		}
		$dataError() {
			(0, f.reportError)(this, this.def.$dataError || f.keyword$DataError);
		}
		reset() {
			if (this.errsCount === void 0) throw Error("add \"trackErrors\" to keyword definition");
			(0, f.resetErrorsCount)(this.gen, this.errsCount);
		}
		ok(e) {
			this.allErrors || this.gen.if(e);
		}
		setParams(e, t) {
			t ? Object.assign(this.params, e) : this.params = e;
		}
		block$data(e, t, n = c.nil) {
			this.gen.block(() => {
				this.check$data(e, n), t();
			});
		}
		check$data(e = c.nil, t = c.nil) {
			if (!this.$data) return;
			let { gen: n, schemaCode: r, schemaType: i, def: a } = this;
			n.if((0, c.or)((0, c._)`${r} === undefined`, t)), e !== c.nil && n.assign(e, !0), (i.length || a.validateSchema) && (n.elseIf(this.invalid$data()), this.$dataError(), e !== c.nil && n.assign(e, !1)), n.else();
		}
		invalid$data() {
			let { gen: e, schemaCode: t, schemaType: n, def: r, it: a } = this;
			return (0, c.or)(o(), s());
			function o() {
				if (n.length) {
					/* istanbul ignore if */
					if (!(t instanceof c.Name)) throw Error("ajv implementation error");
					let e = Array.isArray(n) ? n : [n];
					return (0, c._)`${(0, i.checkDataTypes)(e, t, a.opts.strictNumbers, i.DataType.Wrong)}`;
				}
				return c.nil;
			}
			function s() {
				if (r.validateSchema) {
					let n = e.scopeValue("validate$data", { ref: r.validateSchema });
					return (0, c._)`!${n}(${t})`;
				}
				return c.nil;
			}
		}
		subschema(e, t) {
			let n = (0, s.getSubschema)(this.it, e);
			(0, s.extendSubschemaData)(n, this.it, e), (0, s.extendSubschemaMode)(n, e);
			let r = {
				...this.it,
				...n,
				items: void 0,
				props: void 0
			};
			return j(r, t), r;
		}
		mergeEvaluated(e, t) {
			let { it: n, gen: r } = this;
			n.opts.unevaluated && (n.props !== !0 && e.props !== void 0 && (n.props = d.mergeEvaluated.props(r, e.props, n.props, t)), n.items !== !0 && e.items !== void 0 && (n.items = d.mergeEvaluated.items(r, e.items, n.items, t)));
		}
		mergeValidEvaluated(e, t) {
			let { it: n, gen: r } = this;
			if (n.opts.unevaluated && (n.props !== !0 || n.items !== !0)) return r.if(t, () => this.mergeEvaluated(e, c.Name)), !0;
		}
	};
	e.KeywordCxt = be;
	function xe(e, t, n, r) {
		let i = new be(e, n, t);
		"code" in n ? n.code(i, r) : i.$data && n.validate ? (0, o.funcKeywordCode)(i, n) : "macro" in n ? (0, o.macroKeywordCode)(i, n) : (n.compile || n.validate) && (0, o.funcKeywordCode)(i, n);
	}
	var Se = /^\/(?:[^~]|~0|~1)*$/, Ce = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
	function we(e, { dataLevel: t, dataNames: n, dataPathArr: r }) {
		let i, a;
		if (e === "") return l.default.rootData;
		if (e[0] === "/") {
			if (!Se.test(e)) throw Error(`Invalid JSON-pointer: ${e}`);
			i = e, a = l.default.rootData;
		} else {
			let o = Ce.exec(e);
			if (!o) throw Error(`Invalid JSON-pointer: ${e}`);
			let s = +o[1];
			if (i = o[2], i === "#") {
				if (s >= t) throw Error(u("property/index", s));
				return r[t - s];
			}
			if (s > t) throw Error(u("data", s));
			if (a = n[t - s], !i) return a;
		}
		let o = a, s = i.split("/");
		for (let e of s) e && (a = (0, c._)`${a}${(0, c.getProperty)((0, d.unescapeJsonPointer)(e))}`, o = (0, c._)`${o} && ${a}`);
		return o;
		function u(e, n) {
			return `Cannot access ${e} ${n} levels up, current level is ${t}`;
		}
	}
	e.getData = we;
})), j = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = class extends Error {
		constructor(e) {
			super("validation failed"), this.errors = e, this.ajv = this.validation = !0;
		}
	};
})), M = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = k();
	e.default = class extends Error {
		constructor(e, n, r, i) {
			super(i || `can't resolve reference ${r} from id ${n}`), this.missingRef = (0, t.resolveUrl)(e, n, r), this.missingSchema = (0, t.normalizeId)((0, t.getFullPath)(e, this.missingRef));
		}
	};
})), N = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.resolveSchema = e.getCompilingSchema = e.resolveRef = e.compileSchema = e.SchemaEnv = void 0;
	var t = h(), n = j(), r = _(), i = k(), a = g(), o = A(), s = class {
		constructor(e) {
			this.refs = {}, this.dynamicAnchors = {};
			let t;
			typeof e.schema == "object" && (t = e.schema), this.schema = e.schema, this.schemaId = e.schemaId, this.root = e.root || this, this.baseId = e.baseId ?? (0, i.normalizeId)(t?.[e.schemaId || "$id"]), this.schemaPath = e.schemaPath, this.localRefs = e.localRefs, this.meta = e.meta, this.$async = t?.$async, this.refs = {};
		}
	};
	e.SchemaEnv = s;
	function c(e) {
		let a = d.call(this, e);
		if (a) return a;
		let s = (0, i.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: c, lines: l } = this.opts.code, { ownProperties: u } = this.opts, f = new t.CodeGen(this.scope, {
			es5: c,
			lines: l,
			ownProperties: u
		}), p;
		e.$async && (p = f.scopeValue("Error", {
			ref: n.default,
			code: (0, t._)`require("ajv/dist/runtime/validation_error").default`
		}));
		let m = f.scopeName("validate");
		e.validateName = m;
		let h = {
			gen: f,
			allErrors: this.opts.allErrors,
			data: r.default.data,
			parentData: r.default.parentData,
			parentDataProperty: r.default.parentDataProperty,
			dataNames: [r.default.data],
			dataPathArr: [t.nil],
			dataLevel: 0,
			dataTypes: [],
			definedProperties: /* @__PURE__ */ new Set(),
			topSchemaRef: f.scopeValue("schema", this.opts.code.source === !0 ? {
				ref: e.schema,
				code: (0, t.stringify)(e.schema)
			} : { ref: e.schema }),
			validateName: m,
			ValidationError: p,
			schema: e.schema,
			schemaEnv: e,
			rootId: s,
			baseId: e.baseId || s,
			schemaPath: t.nil,
			errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
			errorPath: (0, t._)`""`,
			opts: this.opts,
			self: this
		}, g;
		try {
			this._compilations.add(e), (0, o.validateFunctionCode)(h), f.optimize(this.opts.code.optimize);
			let n = f.toString();
			g = `${f.scopeRefs(r.default.scope)}return ${n}`, this.opts.code.process && (g = this.opts.code.process(g, e));
			let i = Function(`${r.default.self}`, `${r.default.scope}`, g)(this, this.scope.get());
			if (this.scope.value(m, { ref: i }), i.errors = null, i.schema = e.schema, i.schemaEnv = e, e.$async && (i.$async = !0), this.opts.code.source === !0 && (i.source = {
				validateName: m,
				validateCode: n,
				scopeValues: f._values
			}), this.opts.unevaluated) {
				let { props: e, items: n } = h;
				i.evaluated = {
					props: e instanceof t.Name ? void 0 : e,
					items: n instanceof t.Name ? void 0 : n,
					dynamicProps: e instanceof t.Name,
					dynamicItems: n instanceof t.Name
				}, i.source && (i.source.evaluated = (0, t.stringify)(i.evaluated));
			}
			return e.validate = i, e;
		} catch (t) {
			throw delete e.validate, delete e.validateName, g && this.logger.error("Error compiling schema, function code:", g), t;
		} finally {
			this._compilations.delete(e);
		}
	}
	e.compileSchema = c;
	function l(e, t, n) {
		n = (0, i.resolveUrl)(this.opts.uriResolver, t, n);
		let r = e.refs[n];
		if (r) return r;
		let a = p.call(this, e, n);
		if (a === void 0) {
			let r = e.localRefs?.[n], { schemaId: i } = this.opts;
			r && (a = new s({
				schema: r,
				schemaId: i,
				root: e,
				baseId: t
			}));
		}
		if (a !== void 0) return e.refs[n] = u.call(this, a);
	}
	e.resolveRef = l;
	function u(e) {
		return (0, i.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : c.call(this, e);
	}
	function d(e) {
		for (let t of this._compilations) if (f(t, e)) return t;
	}
	e.getCompilingSchema = d;
	function f(e, t) {
		return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
	}
	function p(e, t) {
		let n;
		for (; typeof (n = this.refs[t]) == "string";) t = n;
		return n || this.schemas[t] || m.call(this, e, t);
	}
	function m(e, t) {
		let n = this.opts.uriResolver.parse(t), r = (0, i._getFullPath)(this.opts.uriResolver, n), a = (0, i.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
		if (Object.keys(e.schema).length > 0 && r === a) return y.call(this, n, e);
		let o = (0, i.normalizeId)(r), l = this.refs[o] || this.schemas[o];
		if (typeof l == "string") {
			let t = m.call(this, e, l);
			return typeof t?.schema == "object" ? y.call(this, n, t) : void 0;
		}
		if (typeof l?.schema == "object") {
			if (l.validate || c.call(this, l), o === (0, i.normalizeId)(t)) {
				let { schema: t } = l, { schemaId: n } = this.opts, r = t[n];
				return r && (a = (0, i.resolveUrl)(this.opts.uriResolver, a, r)), new s({
					schema: t,
					schemaId: n,
					root: e,
					baseId: a
				});
			}
			return y.call(this, n, l);
		}
	}
	e.resolveSchema = m;
	var v = /* @__PURE__ */ new Set([
		"properties",
		"patternProperties",
		"enum",
		"dependencies",
		"definitions"
	]);
	function y(e, { baseId: t, schema: n, root: r }) {
		if (e.fragment?.[0] !== "/") return;
		for (let r of e.fragment.slice(1).split("/")) {
			if (typeof n == "boolean") return;
			let e = n[(0, a.unescapeFragment)(r)];
			if (e === void 0) return;
			n = e;
			let o = typeof n == "object" && n[this.opts.schemaId];
			!v.has(r) && o && (t = (0, i.resolveUrl)(this.opts.uriResolver, t, o));
		}
		let o;
		if (typeof n != "boolean" && n.$ref && !(0, a.schemaHasRulesButRef)(n, this.RULES)) {
			let e = (0, i.resolveUrl)(this.opts.uriResolver, t, n.$ref);
			o = m.call(this, r, e);
		}
		let { schemaId: c } = this.opts;
		if (o ||= new s({
			schema: n,
			schemaId: c,
			root: r,
			baseId: t
		}), o.schema !== o.root.schema) return o;
	}
})), ee = /* @__PURE__ */ c({
	$id: () => te,
	additionalProperties: () => !1,
	default: () => oe,
	description: () => ne,
	properties: () => ae,
	required: () => ie,
	type: () => re
}), te, ne, re, ie, ae, oe, se = o((() => {
	te = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", ne = "Meta-schema for $data reference (JSON AnySchema extension proposal)", re = "object", ie = ["$data"], ae = { $data: {
		type: "string",
		anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }]
	} }, oe = {
		$id: te,
		description: ne,
		type: re,
		required: ie,
		properties: ae,
		additionalProperties: !1
	};
})), ce = /* @__PURE__ */ s(((e, t) => {
	var n = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), r = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), i = RegExp.prototype.test.bind(/^\d*$/u), a = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), s = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/]$/u), c = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/?]$/u), l = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:]$/u), u = Array(256);
	{
		let e = "0123456789ABCDEF";
		for (let t = 0; t < 256; t++) u[t] = "%" + e[t >> 4] + e[t & 15];
	}
	function d(e) {
		return e < 2048 ? u[192 | e >> 6] + u[128 | e & 63] : e < 65536 ? u[224 | e >> 12] + u[128 | e >> 6 & 63] + u[128 | e & 63] : u[240 | e >> 18] + u[128 | e >> 12 & 63] + u[128 | e >> 6 & 63] + u[128 | e & 63];
	}
	function f(e) {
		let t = "", n = 0, r = 0;
		for (r = 0; r < e.length; r++) if (n = e[r].charCodeAt(0), n !== 48) {
			if (!(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102)) return "";
			t += e[r];
			break;
		}
		for (r += 1; r < e.length; r++) {
			if (n = e[r].charCodeAt(0), !(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102)) return "";
			t += e[r];
		}
		return t;
	}
	var p = RegExp.prototype.test.bind(/^[\dA-Fa-f]{1,4}$/), m = RegExp.prototype.test.bind(/^[vV][\dA-Fa-f]+\.[A-Za-z\d\-._~!$&'()*+,;=:]+$/), h = RegExp.prototype.test.bind(/^[A-Za-z\d\-._~]$/), g = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
	function _(e) {
		if (e.length === 0) return !1;
		for (let t = 0; t < e.length; t++) if (!h(e[t])) {
			if (e[t] === "%" && t + 2 < e.length && a(e.slice(t + 1, t + 3))) t += 2;
			else return !1;
		}
		return !0;
	}
	function v(e) {
		let t = -1, n = 0, r = -1, i = 0;
		for (let a = 0; a < e.length; a++) e[a] === "0" ? (r === -1 && (r = a), i++, i > n && (n = i, t = r)) : (r = -1, i = 0);
		if (n < 2) return e.join(":");
		let a = e.slice(0, t).join(":"), o = e.slice(t + n).join(":");
		return a + "::" + o;
	}
	function y(e) {
		let t = e.indexOf("::");
		if (t !== -1 && e.indexOf("::", t + 1) !== -1) return;
		let n = t === -1 ? e.split(":") : e.slice(0, t).split(":"), i = t === -1 ? [] : e.slice(t + 2).split(":");
		t !== -1 && (n.length === 1 && n[0] === "" && (n.length = 0), i.length === 1 && i[0] === "" && (i.length = 0));
		let a = n.concat(i), o = 0;
		for (let e = 0; e < a.length; e++) {
			let n = a[e];
			if (n === "") return;
			if (n.indexOf(".") !== -1) {
				if (e !== a.length - 1 || t !== -1 && i.length === 0 || !r(n)) return;
				o += 2;
			} else {
				if (!p(n)) return;
				a[e] = parseInt(n, 16).toString(16), o++;
			}
		}
		if (t === -1) return o === 8 ? v(a) : void 0;
		if (o >= 8) return;
		let s = a.slice(0, n.length);
		for (let e = o; e < 8; e++) s.push("0");
		for (let e = n.length; e < a.length; e++) s.push(a[e]);
		return v(s);
	}
	function b(e) {
		let t = e[0] === "[" && e[e.length - 1] === "]";
		if ((e[0] === "[" || e[e.length - 1] === "]") && !t) return {
			host: e,
			isIPV6: !1,
			error: !0
		};
		let n = t ? e.slice(1, -1) : e;
		if (t && m(n)) return n = n.toLowerCase(), {
			host: `[${n}]`,
			escapedHost: n,
			isIPV6: !1,
			isIPVFuture: !0
		};
		if (x(n, ":") < 2) return {
			host: e,
			isIPV6: !1,
			error: t
		};
		let r = "", i = n.indexOf("%");
		if (i !== -1) {
			let t = n.slice(i, i + 3).toLowerCase() === "%25" ? 3 : 1;
			if (r = n.slice(i + t), !_(r)) return {
				host: e,
				isIPV6: !1,
				error: !0
			};
			n = n.slice(0, i);
		}
		let a = y(n);
		return a === void 0 ? {
			host: e,
			isIPV6: !1,
			error: !0
		} : {
			host: a + (r ? "%" + r : ""),
			escapedHost: a + (r ? "%25" + r : ""),
			isIPV6: !0
		};
	}
	function x(e, t) {
		let n = 0;
		for (let r = 0; r < e.length; r++) e[r] === t && n++;
		return n;
	}
	function S(e) {
		let t = e, n = [], r = -1, i = 0;
		for (; i = t.length;) {
			if (i === 1) {
				if (t === ".") break;
				if (t === "/") {
					n.push("/");
					break;
				}
				n.push(t);
				break;
			}
			if (i === 2) {
				if (t[0] === ".") {
					if (t[1] === ".") break;
					if (t[1] === "/") {
						t = t.slice(2);
						continue;
					}
				} else if (t[0] === "/" && (t[1] === "." || t[1] === "/")) {
					n.push("/");
					break;
				}
			} else if (i === 3 && t === "/..") {
				n.length !== 0 && n.pop(), n.push("/");
				break;
			}
			if (t[0] === ".") {
				if (t[1] === ".") {
					if (t[2] === "/") {
						t = t.slice(3);
						continue;
					}
				} else if (t[1] === "/") {
					t = t.slice(2);
					continue;
				}
			} else if (t[0] === "/" && t[1] === ".") {
				if (t[2] === "/") {
					t = t.slice(2);
					continue;
				}
				if (t[2] === "." && t[3] === "/") {
					t = t.slice(3), n.length !== 0 && n.pop();
					continue;
				}
			}
			if ((r = t.indexOf("/", 1)) === -1) {
				n.push(t);
				break;
			}
			n.push(t.slice(0, r)), t = t.slice(r);
		}
		return n.join("");
	}
	var C = {
		"@": "%40",
		"/": "%2F",
		"?": "%3F",
		"#": "%23",
		":": "%3A"
	}, w = /[@/?#:]/g, T = /[@/?#]/g;
	function E(e, t) {
		let n = t ? T : w;
		return n.lastIndex = 0, e.replace(n, (e) => C[e]);
	}
	function D(e, t = !1) {
		if (e.indexOf("%") === -1) return e;
		let n = "";
		for (let r = 0; r < e.length; r++) {
			if (e[r] === "%" && r + 2 < e.length) {
				let i = e.slice(r + 1, r + 3);
				if (a(i)) {
					let e = i.toUpperCase(), a = String.fromCharCode(parseInt(e, 16));
					t && o(a) ? n += a : n += "%" + e, r += 2;
					continue;
				}
			}
			n += e[r];
		}
		return n;
	}
	function O(e) {
		let t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (r === "%" && n + 2 < e.length) {
				let r = e.slice(n + 1, n + 3);
				if (a(r)) {
					let e = r.toUpperCase(), i = String.fromCharCode(parseInt(e, 16));
					i !== "." && o(i) ? t += i : t += "%" + e, n += 2;
					continue;
				}
			}
			if (s(r)) t += r;
			else {
				let i = e.charCodeAt(n);
				if (i < 128) t += ee(i) ? r : u[i];
				else if (i < 55296 || i > 57343) t += d(i);
				else if (i <= 56319 && n + 1 < e.length) {
					let r = e.charCodeAt(n + 1);
					r >= 56320 && r <= 57343 ? (t += d(65536 + (i - 55296 << 10) + (r - 56320)), n++) : t += d(65533);
				} else t += d(65533);
			}
		}
		return t;
	}
	function k(e, t = !1) {
		let n = "", r = t && e[0] !== "/";
		for (let t = 0; t < e.length; t++) {
			let i = e[t];
			if (i === "%" && t + 2 < e.length) {
				let r = e.slice(t + 1, t + 3);
				if (a(r)) {
					n += "%" + r.toUpperCase(), t += 2;
					continue;
				}
			}
			if (i === "/" && (r = !1), s(i) && (i !== ":" || !r)) n += i;
			else {
				let r = e.charCodeAt(t);
				if (r < 128) n += u[r];
				else if (r < 55296 || r > 57343) n += d(r);
				else if (r <= 56319 && t + 1 < e.length) {
					let i = e.charCodeAt(t + 1);
					i >= 56320 && i <= 57343 ? (n += d(65536 + (r - 55296 << 10) + (i - 56320)), t++) : n += d(65533);
				} else n += d(65533);
			}
		}
		return n;
	}
	function A(e, t) {
		let n = "";
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (i === "%" && r + 2 < e.length) {
				let t = e.slice(r + 1, r + 3);
				if (a(t)) {
					n += "%" + t.toUpperCase(), r += 2;
					continue;
				}
			}
			if (t(i)) n += i;
			else {
				let t = e.charCodeAt(r);
				if (t < 128) n += u[t];
				else if (t < 55296 || t > 57343) n += d(t);
				else if (t <= 56319 && r + 1 < e.length) {
					let i = e.charCodeAt(r + 1);
					i >= 56320 && i <= 57343 ? (n += d(65536 + (t - 55296 << 10) + (i - 56320)), r++) : n += d(65533);
				} else n += d(65533);
			}
		}
		return n;
	}
	function j(e) {
		return A(e, l);
	}
	function M(e) {
		return A(e, c);
	}
	function N(e) {
		return A(e, c);
	}
	function ee(e) {
		return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 42 || e === 43 || e === 45 || e === 46 || e === 47 || e === 64 || e === 95;
	}
	function te(e) {
		let t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (r === "%" && n + 2 < e.length) {
				let r = e.slice(n + 1, n + 3);
				if (a(r)) {
					let e = r.toUpperCase(), i = String.fromCharCode(parseInt(e, 16));
					o(i) ? t += i : t += "%" + e, n += 2;
					continue;
				}
			}
			if (c(r)) t += r;
			else {
				let i = e.charCodeAt(n);
				if (i < 128) t += ee(i) ? r : u[i];
				else if (i < 55296 || i > 57343) t += d(i);
				else if (i <= 56319 && n + 1 < e.length) {
					let r = e.charCodeAt(n + 1);
					r >= 56320 && r <= 57343 ? (t += d(65536 + (i - 55296 << 10) + (r - 56320)), n++) : t += d(65533);
				} else t += d(65533);
			}
		}
		return t;
	}
	function ne(e) {
		let t = "";
		for (let n = 0; n < e.length; n++) {
			if (e[n] === "%" && n + 2 < e.length) {
				let r = e.slice(n + 1, n + 3);
				if (a(r)) {
					t += "%" + r.toUpperCase(), n += 2;
					continue;
				}
			}
			t += escape(e[n]);
		}
		return t;
	}
	function re(e) {
		let t = [];
		if (e.userinfo !== void 0 && (t.push(j(e.userinfo)), t.push("@")), e.host !== void 0) {
			let n = e.host;
			if (!r(n)) {
				let e = b(n);
				e.isIPV6 !== !0 && e.isIPVFuture !== !0 && (n = D(n, !0), e = b(n)), n = e.isIPV6 === !0 || e.isIPVFuture === !0 ? `[${e.escapedHost}]` : E(n, !1);
			}
			t.push(n);
		}
		if (typeof e.port == "number" || typeof e.port == "string") {
			let n = String(e.port);
			if (!i(n)) throw TypeError("URI port is malformed.");
			t.push(":"), t.push(n);
		}
		return t.length ? t.join("") : void 0;
	}
	t.exports = {
		nonSimpleDomain: g,
		recomposeAuthority: re,
		reescapeHostDelimiters: E,
		normalizePercentEncoding: D,
		normalizePathEncoding: O,
		serializePathEncoding: k,
		normalizeQueryFragmentEncoding: te,
		encodeUserinfo: j,
		encodeQuery: M,
		encodeFragment: N,
		escapePreservingEscapes: ne,
		removeDotSegments: S,
		isIPv4: r,
		isUUID: n,
		normalizeIPv6: b,
		stringArrayToHexStripped: f
	};
})), le = /* @__PURE__ */ s(((e, t) => {
	var { isUUID: n } = ce(), r = /^([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-./:;=@]|%[\da-f]{2})+)$/iu, i = [
		"http",
		"https",
		"ws",
		"wss",
		"urn",
		"urn:uuid"
	];
	function a(e) {
		return i.indexOf(e) !== -1;
	}
	function o(e) {
		return e.secure === !0 ? !0 : e.secure === !1 ? !1 : e.scheme ? e.scheme.length === 3 && (e.scheme[0] === "w" || e.scheme[0] === "W") && (e.scheme[1] === "s" || e.scheme[1] === "S") && (e.scheme[2] === "s" || e.scheme[2] === "S") : !1;
	}
	function s(e) {
		return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
	}
	function c(e) {
		let t = String(e.scheme).toLowerCase() === "https";
		return (e.port === (t ? 443 : 80) || e.port === "") && (e.port = void 0), e.path ||= "/", e;
	}
	function l(e) {
		return e.secure = o(e), e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : ""), e.path = void 0, e.query = void 0, e;
	}
	function u(e) {
		if ((e.port === (o(e) ? 443 : 80) || e.port === "") && (e.port = void 0), typeof e.secure == "boolean" && (e.scheme = e.secure ? "wss" : "ws", e.secure = void 0), e.resourceName) {
			let t = e.resourceName.indexOf("?"), n = t === -1 ? e.resourceName : e.resourceName.slice(0, t);
			e.path = n && n !== "/" ? n : void 0, e.query = t === -1 ? void 0 : e.resourceName.slice(t + 1), e.resourceName = void 0;
		}
		return e.fragment = void 0, e;
	}
	function d(e, t) {
		if (!e.path) return e.error = "URN can not be parsed", e;
		let n = e.path.match(r);
		if (n && n[0] === e.path) {
			let r = t.scheme || e.scheme || "urn";
			e.nid = n[1].toLowerCase(), e.nss = n[2];
			let i = y(`${r}:${t.nid || e.nid}`);
			e.path = void 0, i && (e = i.parse(e, t));
		} else e.error = e.error || "URN can not be parsed.";
		return e;
	}
	function f(e, t) {
		if (e.nid === void 0) throw Error("URN without nid cannot be serialized");
		let n = t.scheme || e.scheme || "urn", r = e.nid.toLowerCase(), i = y(`${n}:${t.nid || r}`);
		i && (e = i.serialize(e, t));
		let a = e, o = e.nss;
		return a.path = `${r || t.nid}:${o}`, t.skipEscape = !0, a;
	}
	function p(e, t) {
		let r = e;
		return r.uuid = r.nss, r.nss = void 0, !t.tolerant && (!r.uuid || !n(r.uuid)) && (r.error = r.error || "UUID is not valid."), r;
	}
	function m(e) {
		let t = e;
		return t.nss = (e.uuid || "").toLowerCase(), t;
	}
	var h = {
		scheme: "http",
		domainHost: !0,
		parse: s,
		serialize: c
	}, g = {
		scheme: "https",
		domainHost: h.domainHost,
		parse: s,
		serialize: c
	}, _ = {
		scheme: "ws",
		domainHost: !0,
		parse: l,
		serialize: u
	}, v = {
		http: h,
		https: g,
		ws: _,
		wss: {
			scheme: "wss",
			domainHost: _.domainHost,
			parse: _.parse,
			serialize: _.serialize
		},
		urn: {
			scheme: "urn",
			parse: d,
			serialize: f,
			skipNormalize: !0
		},
		"urn:uuid": {
			scheme: "urn:uuid",
			parse: p,
			serialize: m,
			skipNormalize: !0
		}
	};
	Object.setPrototypeOf(v, null);
	function y(e) {
		return e && (v[e] || v[e.toLowerCase()]) || void 0;
	}
	t.exports = {
		wsIsSecure: o,
		SCHEMES: v,
		isValidSchemeName: a,
		getSchemeHandler: y
	};
})), ue = /* @__PURE__ */ s(((e, t) => {
	var { normalizeIPv6: n, removeDotSegments: r, recomposeAuthority: i, normalizePercentEncoding: a, normalizePathEncoding: o, serializePathEncoding: s, normalizeQueryFragmentEncoding: c, encodeQuery: l, encodeFragment: u, reescapeHostDelimiters: d, isIPv4: f, nonSimpleDomain: p } = ce(), { SCHEMES: m, getSchemeHandler: h } = le(), g = /^[A-Za-z][A-Za-z0-9+.-]*$/u, _ = "URI scheme is malformed.";
	function v(e) {
		let t = unescape(String(e));
		if (!g.test(t)) throw TypeError(_);
		return t;
	}
	function y(e, t) {
		return typeof e == "string" ? e = ee(e, t) : typeof e == "object" && (e = N(C(e, t), t)), e;
	}
	function b(e, t, r) {
		let i = r ? Object.assign({ scheme: "null" }, r) : { scheme: "null" }, { parsed: a, malformedAuthorityOrPort: o, malformedPercentEncoding: s, malformedSchemeSpecific: c, malformedHost: l, malformedScheme: u } = M(e, i), { parsed: d, malformedAuthorityOrPort: p, malformedPercentEncoding: m, malformedSchemeSpecific: g, malformedHost: _, malformedScheme: v } = M(t, i);
		if (o || p || s || m || c || g || l || _ || u || v) throw Error(a.error || d.error || "URI is malformed.");
		let y = x(a, d, i, !0), b = h(r && r.scheme || y.scheme), S = y.host, w = S !== void 0 && S !== "" && (f(S) || n(S).isIPV6);
		j(y, r || {}, b, w);
		let T = S && S.indexOf("%") !== -1 && !/\P{ASCII}/u.test(S);
		if (y.error && !T) throw Error(y.error);
		return i.skipEscape = !0, C(y, i);
	}
	function x(e, t, n, i) {
		let a = {};
		return i || (e = N(C(e, n), n), t = N(C(t, n), n)), n ||= {}, !n.tolerant && t.scheme ? (a.scheme = t.scheme, a.userinfo = t.userinfo, a.host = t.host, a.port = t.port, a.path = r(t.path || ""), a.query = t.query) : (t.userinfo !== void 0 || t.host !== void 0 || t.port !== void 0 ? (a.userinfo = t.userinfo, a.host = t.host, a.port = t.port, a.path = r(t.path || ""), a.query = t.query) : (t.path ? (t.path[0] === "/" ? a.path = r(t.path) : (a.path = (e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0) && !e.path ? "/" + t.path : e.path ? e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : t.path, a.path = r(a.path)), a.query = t.query) : (a.path = e.path, a.query = t.query === void 0 ? e.query : t.query), a.userinfo = e.userinfo, a.host = e.host, a.port = e.port), a.scheme = e.scheme), a.fragment = t.fragment, a;
	}
	function S(e, t, n) {
		let r = ne(e, n), i = ne(t, n);
		return r !== void 0 && i !== void 0 && r === i;
	}
	function C(e, t) {
		let n = {
			host: e.host,
			scheme: e.scheme,
			userinfo: e.userinfo,
			port: e.port,
			path: e.path,
			query: e.query,
			nid: e.nid,
			nss: e.nss,
			uuid: e.uuid,
			fragment: e.fragment,
			reference: e.reference,
			resourceName: e.resourceName,
			secure: e.secure,
			error: ""
		}, o = Object.assign({}, t), c = [];
		n.scheme &&= v(n.scheme);
		let d = h(o.scheme || n.scheme);
		d && d.serialize && d.serialize(n, o);
		let f = n.userinfo !== void 0 || n.host !== void 0 || n.port !== void 0, p = !o.skipEscape && n.scheme === void 0 && !f;
		n.path !== void 0 && (n.path = o.skipEscape ? a(n.path) : s(n.path, p)), o.reference !== "suffix" && n.scheme && (n.scheme = v(n.scheme), c.push(n.scheme, ":"));
		let m = i(n);
		if (m !== void 0 && (o.reference !== "suffix" && c.push("//"), c.push(m), n.path && n.path[0] !== "/" && c.push("/")), n.path !== void 0) {
			let e = n.path;
			!o.absolutePath && (!d || !d.absolutePath) && (e = r(e)), p && (e = s(e, !0)), m === void 0 && e[0] === "/" && e[1] === "/" && (e = "/%2F" + e.slice(2)), c.push(e);
		}
		return n.query !== void 0 && c.push("?", l(n.query)), n.fragment !== void 0 && c.push("#", u(n.fragment)), c.join("");
	}
	var w = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, T = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/, E = /^(?:[^#/:?]+:)?([/\\\t\n\r]*)/;
	function D(e, t) {
		if (t[2] !== void 0 && e.path && e.path[0] !== "/") return "URI path must start with \"/\" when authority is present.";
		if (typeof e.port == "number" && (e.port < 0 || e.port > 65535)) return "URI port is malformed.";
	}
	function O(e) {
		if (e === void 0) return !1;
		let t = e.indexOf("%");
		for (; t !== -1;) {
			if (t + 2 >= e.length || !/^[\da-f]{2}$/iu.test(e.slice(t + 1, t + 3))) return !0;
			t = e.indexOf("%", t + 3);
		}
		return !1;
	}
	function k(e) {
		return e[0] === "[" && e[e.length - 1] === "]";
	}
	function A(e) {
		let t = e[4];
		return O(e[3]) || t !== void 0 && !k(t) && O(t) || O(e[6]) || O(e[7]) || O(e[8]);
	}
	function j(e, t, n, r) {
		if (!t.unicodeSupport && (!n || !n.unicodeSupport) && e.host && !k(e.host) && (t.domainHost || n && n.domainHost) && r === !1 && p(e.host)) try {
			e.host = new URL("http://" + e.host).hostname;
		} catch (t) {
			return e.error = e.error || "Host's domain name can not be converted to ASCII: " + t, !0;
		}
		return !1;
	}
	function M(e, t) {
		let r = Object.assign({}, t), i = {
			scheme: void 0,
			userinfo: void 0,
			host: "",
			port: void 0,
			path: "",
			query: void 0,
			fragment: void 0
		}, s = !1, l = !1, u = !1, p = !1, v = !1, y = !1, b = !1;
		r.reference === "suffix" && (e = r.scheme ? r.scheme + ":" + e : "//" + e);
		let x = e.match(T);
		x !== null && x[1].indexOf("\\") !== -1 && (i.error = "URI authority must not contain a literal backslash.", s = !0);
		let S = e.match(E);
		if (S !== null) {
			let e = S[1], t = e.replace(/[\t\n\r]/g, "");
			t.length >= 2 && (t.slice(0, 2) === "//" ? e.length !== t.length && (i.error = i.error || "URI authority introducer must not contain whitespace.", s = !0) : (i.error = i.error || "URI authority must not contain a literal backslash.", s = !0));
		}
		let C = e.match(w);
		if (C) {
			if (i.scheme = C[1], i.userinfo = C[3], i.host = C[4], i.port = parseInt(C[5], 10), i.path = C[6] || "", i.query = C[7], i.fragment = C[8], i.scheme !== void 0) {
				let e = unescape(i.scheme);
				g.test(e) ? i.scheme = e.toLowerCase() : (i.error = i.error || _, y = !0);
			}
			l = A(C), l && (i.error = i.error || "URI contains malformed percent-encoding."), isNaN(i.port) && (i.port = C[5]);
			let t = D(i, C);
			if (t !== void 0 && (i.error = i.error || t, s = !0), i.host) {
				if (f(i.host) === !1) {
					let e = k(i.host), t = i.host.indexOf("[") !== -1 || i.host.indexOf("]") !== -1, r = n(i.host);
					b = r.isIPV6 || r.isIPVFuture === !0, v = t && (!e || r.error === !0), i.host = b ? r.host : r.host.toLowerCase(), v && (i.error = i.error || "URI host is malformed.", s = !0);
				} else b = !0;
			}
			i.reference = i.scheme === void 0 && i.userinfo === void 0 && i.host === void 0 && i.port === void 0 && i.query === void 0 && !i.path ? "same-document" : i.scheme === void 0 ? "relative" : i.fragment === void 0 ? "absolute" : "uri", r.reference && r.reference !== "suffix" && r.reference !== i.reference && (i.error = i.error || "URI is not a " + r.reference + " reference.");
			let x = h(r.scheme || i.scheme);
			if (v || (p = j(i, r, x, b)), e.indexOf("%") !== -1 && i.host !== void 0 && !v) {
				let e = b ? i.host : a(i.host, !0);
				b || (e = a(e.toLowerCase())), i.host = d(e, b);
			}
			(!x || x && !x.skipNormalize) && (i.path &&= o(i.path), i.query &&= c(i.query), i.fragment &&= c(i.fragment)), x && x.parse && (x.parse(i, r), x === m.urn && i.nid === void 0 && (u = !0));
		} else i.error = i.error || "URI can not be parsed.";
		return {
			parsed: i,
			malformedAuthorityOrPort: s,
			malformedPercentEncoding: l,
			malformedSchemeSpecific: u,
			malformedHost: p,
			malformedScheme: y
		};
	}
	function N(e, t) {
		return M(e, t).parsed;
	}
	function ee(e, t) {
		return te(e, t).normalized;
	}
	function te(e, t) {
		let { parsed: n, malformedAuthorityOrPort: r, malformedPercentEncoding: i, malformedSchemeSpecific: a, malformedHost: o, malformedScheme: s } = M(e, t);
		return {
			normalized: r || i || a || o || s ? e : C(n, t),
			malformedAuthorityOrPort: r,
			malformedPercentEncoding: i,
			malformedSchemeSpecific: a,
			malformedHost: o,
			malformedScheme: s
		};
	}
	function ne(e, t) {
		if (typeof e != "string" && typeof e != "object") return;
		let n;
		try {
			n = typeof e == "string" ? e : C(e, t);
		} catch {
			return;
		}
		let { normalized: r, malformedAuthorityOrPort: i, malformedPercentEncoding: a, malformedSchemeSpecific: o, malformedHost: s, malformedScheme: c } = te(n, t);
		return i || a || o || s || c ? void 0 : r;
	}
	var re = {
		SCHEMES: m,
		normalize: y,
		resolve: b,
		resolveComponent: x,
		equal: S,
		serialize: C,
		parse: N
	};
	t.exports = re, t.exports.default = re, t.exports.fastUri = re;
})), de = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = ue();
	t.code = "require(\"ajv/dist/runtime/uri\").default", e.default = t;
})), fe = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
	var t = A();
	Object.defineProperty(e, "KeywordCxt", {
		enumerable: !0,
		get: function() {
			return t.KeywordCxt;
		}
	});
	var n = h();
	Object.defineProperty(e, "_", {
		enumerable: !0,
		get: function() {
			return n._;
		}
	}), Object.defineProperty(e, "str", {
		enumerable: !0,
		get: function() {
			return n.str;
		}
	}), Object.defineProperty(e, "stringify", {
		enumerable: !0,
		get: function() {
			return n.stringify;
		}
	}), Object.defineProperty(e, "nil", {
		enumerable: !0,
		get: function() {
			return n.nil;
		}
	}), Object.defineProperty(e, "Name", {
		enumerable: !0,
		get: function() {
			return n.Name;
		}
	}), Object.defineProperty(e, "CodeGen", {
		enumerable: !0,
		get: function() {
			return n.CodeGen;
		}
	});
	var r = j(), i = M(), a = b(), o = N(), s = h(), c = k(), l = S(), u = g(), f = (se(), d(ee).default), p = de(), m = (e, t) => new RegExp(e, t);
	m.code = "new RegExp";
	var _ = [
		"removeAdditional",
		"useDefaults",
		"coerceTypes"
	], v = /* @__PURE__ */ new Set([
		"validate",
		"serialize",
		"parse",
		"wrapper",
		"root",
		"schema",
		"keyword",
		"pattern",
		"formats",
		"validate$data",
		"func",
		"obj",
		"Error"
	]), y = {
		errorDataPath: "",
		format: "`validateFormats: false` can be used instead.",
		nullable: "\"nullable\" keyword is supported by default.",
		jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
		extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
		missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
		processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
		sourceCode: "Use option `code: {source: true}`",
		strictDefaults: "It is default now, see option `strict`.",
		strictKeywords: "It is default now, see option `strict`.",
		uniqueItems: "\"uniqueItems\" keyword is always validated.",
		unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
		cache: "Map is used as cache, schema object as key.",
		serialize: "Map is used as cache, schema object as key.",
		ajvErrors: "It is default now."
	}, x = {
		ignoreKeywordsWithRef: "",
		jsPropertySyntax: "",
		unicode: "\"minLength\"/\"maxLength\" account for unicode characters by default."
	}, C = 200;
	function w(e) {
		let t = e.strict, n = e.code?.optimize, r = n === !0 || n === void 0 ? 1 : n || 0, i = e.code?.regExp ?? m, a = e.uriResolver ?? p.default;
		return {
			strictSchema: e.strictSchema ?? t ?? !0,
			strictNumbers: e.strictNumbers ?? t ?? !0,
			strictTypes: e.strictTypes ?? t ?? "log",
			strictTuples: e.strictTuples ?? t ?? "log",
			strictRequired: e.strictRequired ?? t ?? !1,
			code: e.code ? {
				...e.code,
				optimize: r,
				regExp: i
			} : {
				optimize: r,
				regExp: i
			},
			loopRequired: e.loopRequired ?? C,
			loopEnum: e.loopEnum ?? C,
			meta: e.meta ?? !0,
			messages: e.messages ?? !0,
			inlineRefs: e.inlineRefs ?? !0,
			schemaId: e.schemaId ?? "$id",
			addUsedSchema: e.addUsedSchema ?? !0,
			validateSchema: e.validateSchema ?? !0,
			validateFormats: e.validateFormats ?? !0,
			unicodeRegExp: e.unicodeRegExp ?? !0,
			int32range: e.int32range ?? !0,
			uriResolver: a
		};
	}
	var T = class {
		constructor(e = {}) {
			this.schemas = {}, this.refs = {}, this.formats = Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), e = this.opts = {
				...e,
				...w(e)
			};
			let { es5: t, lines: n } = this.opts.code;
			this.scope = new s.ValueScope({
				scope: {},
				prefixes: v,
				es5: t,
				lines: n
			}), this.logger = ae(e.logger);
			let r = e.validateFormats;
			e.validateFormats = !1, this.RULES = (0, a.getRules)(), E.call(this, y, e, "NOT SUPPORTED"), E.call(this, x, e, "DEPRECATED", "warn"), this._metaOpts = re.call(this), e.formats && te.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), e.keywords && ne.call(this, e.keywords), typeof e.meta == "object" && this.addMetaSchema(e.meta), O.call(this), e.validateFormats = r;
		}
		_addVocabularies() {
			this.addKeyword("$async");
		}
		_addDefaultMetaSchema() {
			let { $data: e, meta: t, schemaId: n } = this.opts, r = f;
			n === "id" && (r = { ...f }, r.id = r.$id, delete r.$id), t && e && this.addMetaSchema(r, r[n], !1);
		}
		defaultMeta() {
			let { meta: e, schemaId: t } = this.opts;
			return this.opts.defaultMeta = typeof e == "object" ? e[t] || e : void 0;
		}
		validate(e, t) {
			let n;
			if (typeof e == "string") {
				if (n = this.getSchema(e), !n) throw Error(`no schema with key or ref "${e}"`);
			} else n = this.compile(e);
			let r = n(t);
			return "$async" in n || (this.errors = n.errors), r;
		}
		compile(e, t) {
			let n = this._addSchema(e, t);
			return n.validate || this._compileSchemaEnv(n);
		}
		compileAsync(e, t) {
			if (typeof this.opts.loadSchema != "function") throw Error("options.loadSchema should be a function");
			let { loadSchema: n } = this.opts;
			return r.call(this, e, t);
			async function r(e, t) {
				await a.call(this, e.$schema);
				let n = this._addSchema(e, t);
				return n.validate || o.call(this, n);
			}
			async function a(e) {
				e && !this.getSchema(e) && await r.call(this, { $ref: e }, !0);
			}
			async function o(e) {
				try {
					return this._compileSchemaEnv(e);
				} catch (t) {
					if (!(t instanceof i.default)) throw t;
					return s.call(this, t), await c.call(this, t.missingSchema), o.call(this, e);
				}
			}
			function s({ missingSchema: e, missingRef: t }) {
				if (this.refs[e]) throw Error(`AnySchema ${e} is loaded but ${t} cannot be resolved`);
			}
			async function c(e) {
				let n = await l.call(this, e);
				this.refs[e] || await a.call(this, n.$schema), this.refs[e] || this.addSchema(n, e, t);
			}
			async function l(e) {
				let t = this._loading[e];
				if (t) return t;
				try {
					return await (this._loading[e] = n(e));
				} finally {
					delete this._loading[e];
				}
			}
		}
		addSchema(e, t, n, r = this.opts.validateSchema) {
			if (Array.isArray(e)) {
				for (let t of e) this.addSchema(t, void 0, n, r);
				return this;
			}
			let i;
			if (typeof e == "object") {
				let { schemaId: t } = this.opts;
				if (i = e[t], i !== void 0 && typeof i != "string") throw Error(`schema ${t} must be string`);
			}
			return t = (0, c.normalizeId)(t || i), this._checkUnique(t), this.schemas[t] = this._addSchema(e, n, t, r, !0), this;
		}
		addMetaSchema(e, t, n = this.opts.validateSchema) {
			return this.addSchema(e, t, !0, n), this;
		}
		validateSchema(e, t) {
			if (typeof e == "boolean") return !0;
			let n;
			if (n = e.$schema, n !== void 0 && typeof n != "string") throw Error("$schema must be a string");
			if (n = n || this.opts.defaultMeta || this.defaultMeta(), !n) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
			let r = this.validate(n, e);
			if (!r && t) {
				let e = "schema is invalid: " + this.errorsText();
				if (this.opts.validateSchema === "log") this.logger.error(e);
				else throw Error(e);
			}
			return r;
		}
		getSchema(e) {
			let t;
			for (; typeof (t = D.call(this, e)) == "string";) e = t;
			if (t === void 0) {
				let { schemaId: n } = this.opts, r = new o.SchemaEnv({
					schema: {},
					schemaId: n
				});
				if (t = o.resolveSchema.call(this, r, e), !t) return;
				this.refs[e] = t;
			}
			return t.validate || this._compileSchemaEnv(t);
		}
		removeSchema(e) {
			if (e instanceof RegExp) return this._removeAllSchemas(this.schemas, e), this._removeAllSchemas(this.refs, e), this;
			switch (typeof e) {
				case "undefined": return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
				case "string": {
					let t = D.call(this, e);
					return typeof t == "object" && this._cache.delete(t.schema), delete this.schemas[e], delete this.refs[e], this;
				}
				case "object": {
					let t = e;
					this._cache.delete(t);
					let n = e[this.opts.schemaId];
					return n && (n = (0, c.normalizeId)(n), delete this.schemas[n], delete this.refs[n]), this;
				}
				default: throw Error("ajv.removeSchema: invalid parameter");
			}
		}
		addVocabulary(e) {
			for (let t of e) this.addKeyword(t);
			return this;
		}
		addKeyword(e, t) {
			let n;
			if (typeof e == "string") n = e, typeof t == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), t.keyword = n);
			else if (typeof e == "object" && t === void 0) {
				if (t = e, n = t.keyword, Array.isArray(n) && !n.length) throw Error("addKeywords: keyword must be string or non-empty array");
			} else throw Error("invalid addKeywords parameters");
			if (ce.call(this, n, t), !t) return (0, u.eachItem)(n, (e) => le.call(this, e)), this;
			fe.call(this, t);
			let r = {
				...t,
				type: (0, l.getJSONTypes)(t.type),
				schemaType: (0, l.getJSONTypes)(t.schemaType)
			};
			return (0, u.eachItem)(n, r.type.length === 0 ? (e) => le.call(this, e, r) : (e) => r.type.forEach((t) => le.call(this, e, r, t))), this;
		}
		getKeyword(e) {
			let t = this.RULES.all[e];
			return typeof t == "object" ? t.definition : !!t;
		}
		removeKeyword(e) {
			let { RULES: t } = this;
			delete t.keywords[e], delete t.all[e];
			for (let n of t.rules) {
				let t = n.rules.findIndex((t) => t.keyword === e);
				t >= 0 && n.rules.splice(t, 1);
			}
			return this;
		}
		addFormat(e, t) {
			return typeof t == "string" && (t = new RegExp(t)), this.formats[e] = t, this;
		}
		errorsText(e = this.errors, { separator: t = ", ", dataVar: n = "data" } = {}) {
			return !e || e.length === 0 ? "No errors" : e.map((e) => `${n}${e.instancePath} ${e.message}`).reduce((e, n) => e + t + n);
		}
		$dataMetaSchema(e, t) {
			let n = this.RULES.all;
			e = JSON.parse(JSON.stringify(e));
			for (let r of t) {
				let t = r.split("/").slice(1), i = e;
				for (let e of t) i = i[e];
				for (let e in n) {
					let t = n[e];
					if (typeof t != "object") continue;
					let { $data: r } = t.definition, a = i[e];
					r && a && (i[e] = me(a));
				}
			}
			return e;
		}
		_removeAllSchemas(e, t) {
			for (let n in e) {
				let r = e[n];
				(!t || t.test(n)) && (typeof r == "string" ? delete e[n] : r && !r.meta && (this._cache.delete(r.schema), delete e[n]));
			}
		}
		_addSchema(e, t, n, r = this.opts.validateSchema, i = this.opts.addUsedSchema) {
			let a, { schemaId: s } = this.opts;
			if (typeof e == "object") a = e[s];
			else if (this.opts.jtd) throw Error("schema must be object");
			else if (typeof e != "boolean") throw Error("schema must be object or boolean");
			let l = this._cache.get(e);
			if (l !== void 0) return l;
			n = (0, c.normalizeId)(a || n);
			let u = c.getSchemaRefs.call(this, e, n);
			return l = new o.SchemaEnv({
				schema: e,
				schemaId: s,
				meta: t,
				baseId: n,
				localRefs: u
			}), this._cache.set(l.schema, l), i && !n.startsWith("#") && (n && this._checkUnique(n), this.refs[n] = l), r && this.validateSchema(e, !0), l;
		}
		_checkUnique(e) {
			if (this.schemas[e] || this.refs[e]) throw Error(`schema with key or id "${e}" already exists`);
		}
		_compileSchemaEnv(e) {
			/* istanbul ignore if */
			if (e.meta ? this._compileMetaSchema(e) : o.compileSchema.call(this, e), !e.validate) throw Error("ajv implementation error");
			return e.validate;
		}
		_compileMetaSchema(e) {
			let t = this.opts;
			this.opts = this._metaOpts;
			try {
				o.compileSchema.call(this, e);
			} finally {
				this.opts = t;
			}
		}
	};
	T.ValidationError = r.default, T.MissingRefError = i.default, e.default = T;
	function E(e, t, n, r = "error") {
		for (let i in e) {
			let a = i;
			a in t && this.logger[r](`${n}: option ${i}. ${e[a]}`);
		}
	}
	function D(e) {
		return e = (0, c.normalizeId)(e), this.schemas[e] || this.refs[e];
	}
	function O() {
		let e = this.opts.schemas;
		if (e) {
			if (Array.isArray(e)) this.addSchema(e);
			else for (let t in e) this.addSchema(e[t], t);
		}
	}
	function te() {
		for (let e in this.opts.formats) {
			let t = this.opts.formats[e];
			t && this.addFormat(e, t);
		}
	}
	function ne(e) {
		if (Array.isArray(e)) this.addVocabulary(e);
		else {
			this.logger.warn("keywords option as map is deprecated, pass array");
			for (let t in e) {
				let n = e[t];
				n.keyword ||= t, this.addKeyword(n);
			}
		}
	}
	function re() {
		let e = { ...this.opts };
		for (let t of _) delete e[t];
		return e;
	}
	var ie = {
		log() {},
		warn() {},
		error() {}
	};
	function ae(e) {
		if (e === !1) return ie;
		if (e === void 0) return console;
		if (e.log && e.warn && e.error) return e;
		throw Error("logger must implement log, warn and error methods");
	}
	var oe = /^[a-z_$][a-z0-9_$:-]*$/i;
	function ce(e, t) {
		let { RULES: n } = this;
		if ((0, u.eachItem)(e, (e) => {
			if (n.keywords[e]) throw Error(`Keyword ${e} is already defined`);
			if (!oe.test(e)) throw Error(`Keyword ${e} has invalid name`);
		}), t && t.$data && !("code" in t || "validate" in t)) throw Error("$data keyword must have \"code\" or \"validate\" function");
	}
	function le(e, t, n) {
		var r;
		let i = t?.post;
		if (n && i) throw Error("keyword with \"post\" flag cannot have \"type\"");
		let { RULES: a } = this, o = i ? a.post : a.rules.find(({ type: e }) => e === n);
		if (o || (o = {
			type: n,
			rules: []
		}, a.rules.push(o)), a.keywords[e] = !0, !t) return;
		let s = {
			keyword: e,
			definition: {
				...t,
				type: (0, l.getJSONTypes)(t.type),
				schemaType: (0, l.getJSONTypes)(t.schemaType)
			}
		};
		t.before ? ue.call(this, o, s, t.before) : o.rules.push(s), a.all[e] = s, (r = t.implements) == null || r.forEach((e) => this.addKeyword(e));
	}
	function ue(e, t, n) {
		let r = e.rules.findIndex((e) => e.keyword === n);
		r >= 0 ? e.rules.splice(r, 0, t) : (e.rules.push(t), this.logger.warn(`rule ${n} is not defined`));
	}
	function fe(e) {
		let { metaSchema: t } = e;
		t !== void 0 && (e.$data && this.opts.$data && (t = me(t)), e.validateSchema = this.compile(t, !0));
	}
	var pe = { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" };
	function me(e) {
		return { anyOf: [e, pe] };
	}
})), pe = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
		keyword: "id",
		code() {
			throw Error("NOT SUPPORTED: keyword \"id\", use \"$id\" for schema ID");
		}
	};
})), me = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.callRef = e.getValidate = void 0;
	var t = M(), n = w(), r = h(), i = _(), a = N(), o = g(), s = {
		keyword: "$ref",
		schemaType: "string",
		code(e) {
			let { gen: n, schema: i, it: o } = e, { baseId: s, schemaEnv: u, validateName: d, opts: f, self: p } = o, { root: m } = u;
			if ((i === "#" || i === "#/") && s === m.baseId) return g();
			let h = a.resolveRef.call(p, m, s, i);
			if (h === void 0) throw new t.default(o.opts.uriResolver, s, i);
			return h instanceof a.SchemaEnv ? _(h) : v(h);
			function g() {
				if (u === m) return l(e, d, u, u.$async);
				let t = n.scopeValue("root", { ref: m });
				return l(e, (0, r._)`${t}.validate`, m, m.$async);
			}
			function _(t) {
				l(e, c(e, t), t, t.$async);
			}
			function v(t) {
				let a = n.scopeValue("schema", f.code.source === !0 ? {
					ref: t,
					code: (0, r.stringify)(t)
				} : { ref: t }), o = n.name("valid"), s = e.subschema({
					schema: t,
					dataTypes: [],
					schemaPath: r.nil,
					topSchemaRef: a,
					errSchemaPath: i
				}, o);
				e.mergeEvaluated(s), e.ok(o);
			}
		}
	};
	function c(e, t) {
		let { gen: n } = e;
		return t.validate ? n.scopeValue("validate", { ref: t.validate }) : (0, r._)`${n.scopeValue("wrapper", { ref: t })}.validate`;
	}
	e.getValidate = c;
	function l(e, t, a, s) {
		let { gen: c, it: l } = e, { allErrors: u, schemaEnv: d, opts: f } = l, p = f.passContext ? i.default.this : r.nil;
		s ? m() : h();
		function m() {
			if (!d.$async) throw Error("async schema referenced by sync schema");
			let i = c.let("valid");
			c.try(() => {
				c.code((0, r._)`await ${(0, n.callValidateCode)(e, t, p)}`), _(t), u || c.assign(i, !0);
			}, (e) => {
				c.if((0, r._)`!(${e} instanceof ${l.ValidationError})`, () => c.throw(e)), g(e), u || c.assign(i, !1);
			}), e.ok(i);
		}
		function h() {
			e.result((0, n.callValidateCode)(e, t, p), () => _(t), () => g(t));
		}
		function g(e) {
			let t = (0, r._)`${e}.errors`;
			c.assign(i.default.vErrors, (0, r._)`${i.default.vErrors} === null ? ${t} : ${i.default.vErrors}.concat(${t})`), c.assign(i.default.errors, (0, r._)`${i.default.vErrors}.length`);
		}
		function _(e) {
			if (!l.opts.unevaluated) return;
			let t = a?.validate?.evaluated;
			if (l.props !== !0) {
				if (t && !t.dynamicProps) t.props !== void 0 && (l.props = o.mergeEvaluated.props(c, t.props, l.props));
				else {
					let t = c.var("props", (0, r._)`${e}.evaluated.props`);
					l.props = o.mergeEvaluated.props(c, t, l.props, r.Name);
				}
			}
			if (l.items !== !0) {
				if (t && !t.dynamicItems) t.items !== void 0 && (l.items = o.mergeEvaluated.items(c, t.items, l.items));
				else {
					let t = c.var("items", (0, r._)`${e}.evaluated.items`);
					l.items = o.mergeEvaluated.items(c, t, l.items, r.Name);
				}
			}
		}
	}
	e.callRef = l, e.default = s;
})), he = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = pe(), n = me();
	e.default = [
		"$schema",
		"$id",
		"$defs",
		"$vocabulary",
		{ keyword: "$comment" },
		"definitions",
		t.default,
		n.default
	];
})), ge = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h(), n = t.operators, r = {
		maximum: {
			okStr: "<=",
			ok: n.LTE,
			fail: n.GT
		},
		minimum: {
			okStr: ">=",
			ok: n.GTE,
			fail: n.LT
		},
		exclusiveMaximum: {
			okStr: "<",
			ok: n.LT,
			fail: n.GTE
		},
		exclusiveMinimum: {
			okStr: ">",
			ok: n.GT,
			fail: n.LTE
		}
	};
	e.default = {
		keyword: Object.keys(r),
		type: "number",
		schemaType: "number",
		$data: !0,
		error: {
			message: ({ keyword: e, schemaCode: n }) => (0, t.str)`must be ${r[e].okStr} ${n}`,
			params: ({ keyword: e, schemaCode: n }) => (0, t._)`{comparison: ${r[e].okStr}, limit: ${n}}`
		},
		code(e) {
			let { keyword: n, data: i, schemaCode: a } = e;
			e.fail$data((0, t._)`${i} ${r[n].fail} ${a} || isNaN(${i})`);
		}
	};
})), _e = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h();
	e.default = {
		keyword: "multipleOf",
		type: "number",
		schemaType: "number",
		$data: !0,
		error: {
			message: ({ schemaCode: e }) => (0, t.str)`must be multiple of ${e}`,
			params: ({ schemaCode: e }) => (0, t._)`{multipleOf: ${e}}`
		},
		code(e) {
			let { gen: n, data: r, schemaCode: i, it: a } = e, o = a.opts.multipleOfPrecision, s = n.let("res"), c = o ? (0, t._)`Math.abs(Math.round(${s}) - ${s}) > 1e-${o}` : (0, t._)`${s} !== parseInt(${s})`;
			e.fail$data((0, t._)`(${i} === 0 || (${s} = ${r}/${i}, ${c}))`);
		}
	};
})), ve = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e) {
		let t = e.length, n = 0, r = 0, i;
		for (; r < t;) n++, i = e.charCodeAt(r++), i >= 55296 && i <= 56319 && r < t && (i = e.charCodeAt(r), (i & 64512) == 56320 && r++);
		return n;
	}
	e.default = t, t.code = "require(\"ajv/dist/runtime/ucs2length\").default";
})), ye = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h(), n = g(), r = ve();
	e.default = {
		keyword: ["maxLength", "minLength"],
		type: "string",
		schemaType: "number",
		$data: !0,
		error: {
			message({ keyword: e, schemaCode: n }) {
				let r = e === "maxLength" ? "more" : "fewer";
				return (0, t.str)`must NOT have ${r} than ${n} characters`;
			},
			params: ({ schemaCode: e }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { keyword: i, data: a, schemaCode: o, it: s } = e, c = i === "maxLength" ? t.operators.GT : t.operators.LT, l = s.opts.unicode === !1 ? (0, t._)`${a}.length` : (0, t._)`${(0, n.useFunc)(e.gen, r.default)}(${a})`;
			e.fail$data((0, t._)`${l} ${c} ${o}`);
		}
	};
})), be = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = w(), n = g(), r = h();
	e.default = {
		keyword: "pattern",
		type: "string",
		schemaType: "string",
		$data: !0,
		error: {
			message: ({ schemaCode: e }) => (0, r.str)`must match pattern "${e}"`,
			params: ({ schemaCode: e }) => (0, r._)`{pattern: ${e}}`
		},
		code(e) {
			let { gen: i, data: a, $data: o, schema: s, schemaCode: c, it: l } = e, u = l.opts.unicodeRegExp ? "u" : "";
			if (o) {
				let { regExp: t } = l.opts.code, o = t.code === "new RegExp" ? (0, r._)`new RegExp` : (0, n.useFunc)(i, t), s = i.let("valid");
				i.try(() => i.assign(s, (0, r._)`${o}(${c}, ${u}).test(${a})`), () => i.assign(s, !1)), e.fail$data((0, r._)`!${s}`);
			} else {
				let n = (0, t.usePattern)(e, s);
				e.fail$data((0, r._)`!${n}.test(${a})`);
			}
		}
	};
})), xe = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h();
	e.default = {
		keyword: ["maxProperties", "minProperties"],
		type: "object",
		schemaType: "number",
		$data: !0,
		error: {
			message({ keyword: e, schemaCode: n }) {
				let r = e === "maxProperties" ? "more" : "fewer";
				return (0, t.str)`must NOT have ${r} than ${n} properties`;
			},
			params: ({ schemaCode: e }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { keyword: n, data: r, schemaCode: i } = e, a = n === "maxProperties" ? t.operators.GT : t.operators.LT;
			e.fail$data((0, t._)`Object.keys(${r}).length ${a} ${i}`);
		}
	};
})), Se = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = w(), n = h(), r = g();
	e.default = {
		keyword: "required",
		type: "object",
		schemaType: "array",
		$data: !0,
		error: {
			message: ({ params: { missingProperty: e } }) => (0, n.str)`must have required property '${e}'`,
			params: ({ params: { missingProperty: e } }) => (0, n._)`{missingProperty: ${e}}`
		},
		code(e) {
			let { gen: i, schema: a, schemaCode: o, data: s, $data: c, it: l } = e, { opts: u } = l;
			if (!c && a.length === 0) return;
			let d = a.length >= u.loopRequired;
			if (l.allErrors ? f() : p(), u.strictRequired) {
				let t = e.parentSchema.properties, { definedProperties: n } = e.it;
				for (let e of a) if (t?.[e] === void 0 && !n.has(e)) {
					let t = `required property "${e}" is not defined at "${l.schemaEnv.baseId + l.errSchemaPath}" (strictRequired)`;
					(0, r.checkStrictMode)(l, t, l.opts.strictRequired);
				}
			}
			function f() {
				if (d || c) e.block$data(n.nil, m);
				else for (let n of a) (0, t.checkReportMissingProp)(e, n);
			}
			function p() {
				let n = i.let("missing");
				if (d || c) {
					let t = i.let("valid", !0);
					e.block$data(t, () => h(n, t)), e.ok(t);
				} else i.if((0, t.checkMissingProp)(e, a, n)), (0, t.reportMissingProp)(e, n), i.else();
			}
			function m() {
				i.forOf("prop", o, (n) => {
					e.setParams({ missingProperty: n }), i.if((0, t.noPropertyInData)(i, s, n, u.ownProperties), () => e.error());
				});
			}
			function h(r, a) {
				e.setParams({ missingProperty: r }), i.forOf(r, o, () => {
					i.assign(a, (0, t.propertyInData)(i, s, r, u.ownProperties)), i.if((0, n.not)(a), () => {
						e.error(), i.break();
					});
				}, n.nil);
			}
		}
	};
})), Ce = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h();
	e.default = {
		keyword: ["maxItems", "minItems"],
		type: "array",
		schemaType: "number",
		$data: !0,
		error: {
			message({ keyword: e, schemaCode: n }) {
				let r = e === "maxItems" ? "more" : "fewer";
				return (0, t.str)`must NOT have ${r} than ${n} items`;
			},
			params: ({ schemaCode: e }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { keyword: n, data: r, schemaCode: i } = e, a = n === "maxItems" ? t.operators.GT : t.operators.LT;
			e.fail$data((0, t._)`${r}.length ${a} ${i}`);
		}
	};
})), we = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = D();
	t.code = "require(\"ajv/dist/runtime/equal\").default", e.default = t;
})), Te = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = S(), n = h(), r = g(), i = we();
	e.default = {
		keyword: "uniqueItems",
		type: "array",
		schemaType: "boolean",
		$data: !0,
		error: {
			message: ({ params: { i: e, j: t } }) => (0, n.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
			params: ({ params: { i: e, j: t } }) => (0, n._)`{i: ${e}, j: ${t}}`
		},
		code(e) {
			let { gen: a, data: o, $data: s, schema: c, parentSchema: l, schemaCode: u, it: d } = e;
			if (!s && !c) return;
			let f = a.let("valid"), p = l.items ? (0, t.getSchemaTypes)(l.items) : [];
			e.block$data(f, m, (0, n._)`${u} === false`), e.ok(f);
			function m() {
				let t = a.let("i", (0, n._)`${o}.length`), r = a.let("j");
				e.setParams({
					i: t,
					j: r
				}), a.assign(f, !0), a.if((0, n._)`${t} > 1`, () => (h() ? g : _)(t, r));
			}
			function h() {
				return p.length > 0 && !p.some((e) => e === "object" || e === "array");
			}
			function g(r, i) {
				let s = a.name("item"), c = (0, t.checkDataTypes)(p, s, d.opts.strictNumbers, t.DataType.Wrong), l = a.const("indices", (0, n._)`{}`);
				a.for((0, n._)`;${r}--;`, () => {
					a.let(s, (0, n._)`${o}[${r}]`), a.if(c, (0, n._)`continue`), p.length > 1 && a.if((0, n._)`typeof ${s} == "string"`, (0, n._)`${s} += "_"`), a.if((0, n._)`typeof ${l}[${s}] == "number"`, () => {
						a.assign(i, (0, n._)`${l}[${s}]`), e.error(), a.assign(f, !1).break();
					}).code((0, n._)`${l}[${s}] = ${r}`);
				});
			}
			function _(t, s) {
				let c = (0, r.useFunc)(a, i.default), l = a.name("outer");
				a.label(l).for((0, n._)`;${t}--;`, () => a.for((0, n._)`${s} = ${t}; ${s}--;`, () => a.if((0, n._)`${c}(${o}[${t}], ${o}[${s}])`, () => {
					e.error(), a.assign(f, !1).break(l);
				})));
			}
		}
	};
})), Ee = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h(), n = g(), r = we();
	e.default = {
		keyword: "const",
		$data: !0,
		error: {
			message: "must be equal to constant",
			params: ({ schemaCode: e }) => (0, t._)`{allowedValue: ${e}}`
		},
		code(e) {
			let { gen: i, data: a, $data: o, schemaCode: s, schema: c } = e;
			o || c && typeof c == "object" ? e.fail$data((0, t._)`!${(0, n.useFunc)(i, r.default)}(${a}, ${s})`) : e.fail((0, t._)`${c} !== ${a}`);
		}
	};
})), De = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h(), n = g(), r = we();
	e.default = {
		keyword: "enum",
		schemaType: "array",
		$data: !0,
		error: {
			message: "must be equal to one of the allowed values",
			params: ({ schemaCode: e }) => (0, t._)`{allowedValues: ${e}}`
		},
		code(e) {
			let { gen: i, data: a, $data: o, schema: s, schemaCode: c, it: l } = e;
			if (!o && s.length === 0) throw Error("enum must have non-empty array");
			let u = s.length >= l.opts.loopEnum, d, f = () => d ??= (0, n.useFunc)(i, r.default), p;
			if (u || o) p = i.let("valid"), e.block$data(p, m);
			else {
				/* istanbul ignore if */
				if (!Array.isArray(s)) throw Error("ajv implementation error");
				let e = i.const("vSchema", c);
				p = (0, t.or)(...s.map((t, n) => h(e, n)));
			}
			e.pass(p);
			function m() {
				i.assign(p, !1), i.forOf("v", c, (e) => i.if((0, t._)`${f()}(${a}, ${e})`, () => i.assign(p, !0).break()));
			}
			function h(e, n) {
				let r = s[n];
				return typeof r == "object" && r ? (0, t._)`${f()}(${a}, ${e}[${n}])` : (0, t._)`${a} === ${r}`;
			}
		}
	};
})), Oe = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = ge(), n = _e(), r = ye(), i = be(), a = xe(), o = Se(), s = Ce(), c = Te(), l = Ee(), u = De();
	e.default = [
		t.default,
		n.default,
		r.default,
		i.default,
		a.default,
		o.default,
		s.default,
		c.default,
		{
			keyword: "type",
			schemaType: ["string", "array"]
		},
		{
			keyword: "nullable",
			schemaType: "boolean"
		},
		l.default,
		u.default
	];
})), ke = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateAdditionalItems = void 0;
	var t = h(), n = g(), r = {
		keyword: "additionalItems",
		type: "array",
		schemaType: ["boolean", "object"],
		before: "uniqueItems",
		error: {
			message: ({ params: { len: e } }) => (0, t.str)`must NOT have more than ${e} items`,
			params: ({ params: { len: e } }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { parentSchema: t, it: r } = e, { items: a } = t;
			Array.isArray(a) ? i(e, a) : (0, n.checkStrictMode)(r, "\"additionalItems\" is ignored when \"items\" is not an array of schemas");
		}
	};
	function i(e, r) {
		let { gen: i, schema: a, data: o, keyword: s, it: c } = e;
		c.items = !0;
		let l = i.const("len", (0, t._)`${o}.length`);
		if (a === !1) e.setParams({ len: r.length }), e.pass((0, t._)`${l} <= ${r.length}`);
		else if (typeof a == "object" && !(0, n.alwaysValidSchema)(c, a)) {
			let n = i.var("valid", (0, t._)`${l} <= ${r.length}`);
			i.if((0, t.not)(n), () => u(n)), e.ok(n);
		}
		function u(a) {
			i.forRange("i", r.length, l, (r) => {
				e.subschema({
					keyword: s,
					dataProp: r,
					dataPropType: n.Type.Num
				}, a), c.allErrors || i.if((0, t.not)(a), () => i.break());
			});
		}
	}
	e.validateAdditionalItems = i, e.default = r;
})), Ae = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateTuple = void 0;
	var t = h(), n = g(), r = w(), i = {
		keyword: "items",
		type: "array",
		schemaType: [
			"object",
			"array",
			"boolean"
		],
		before: "uniqueItems",
		code(e) {
			let { schema: t, it: i } = e;
			if (Array.isArray(t)) return a(e, "additionalItems", t);
			i.items = !0, !(0, n.alwaysValidSchema)(i, t) && e.ok((0, r.validateArray)(e));
		}
	};
	function a(e, r, i = e.schema) {
		let { gen: a, parentSchema: o, data: s, keyword: c, it: l } = e;
		f(o), l.opts.unevaluated && i.length && l.items !== !0 && (l.items = n.mergeEvaluated.items(a, i.length, l.items));
		let u = a.name("valid"), d = a.const("len", (0, t._)`${s}.length`);
		i.forEach((r, i) => {
			(0, n.alwaysValidSchema)(l, r) || (a.if((0, t._)`${d} > ${i}`, () => e.subschema({
				keyword: c,
				schemaProp: i,
				dataProp: i
			}, u)), e.ok(u));
		});
		function f(e) {
			let { opts: t, errSchemaPath: a } = l, o = i.length, s = o === e.minItems && (o === e.maxItems || e[r] === !1);
			if (t.strictTuples && !s) {
				let e = `"${c}" is ${o}-tuple, but minItems or maxItems/${r} are not specified or different at path "${a}"`;
				(0, n.checkStrictMode)(l, e, t.strictTuples);
			}
		}
	}
	e.validateTuple = a, e.default = i;
})), je = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Ae();
	e.default = {
		keyword: "prefixItems",
		type: "array",
		schemaType: ["array"],
		before: "uniqueItems",
		code: (e) => (0, t.validateTuple)(e, "items")
	};
})), Me = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h(), n = g(), r = w(), i = ke();
	e.default = {
		keyword: "items",
		type: "array",
		schemaType: ["object", "boolean"],
		before: "uniqueItems",
		error: {
			message: ({ params: { len: e } }) => (0, t.str)`must NOT have more than ${e} items`,
			params: ({ params: { len: e } }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { schema: t, parentSchema: a, it: o } = e, { prefixItems: s } = a;
			o.items = !0, !(0, n.alwaysValidSchema)(o, t) && (s ? (0, i.validateAdditionalItems)(e, s) : e.ok((0, r.validateArray)(e)));
		}
	};
})), Ne = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h(), n = g();
	e.default = {
		keyword: "contains",
		type: "array",
		schemaType: ["object", "boolean"],
		before: "uniqueItems",
		trackErrors: !0,
		error: {
			message: ({ params: { min: e, max: n } }) => n === void 0 ? (0, t.str)`must contain at least ${e} valid item(s)` : (0, t.str)`must contain at least ${e} and no more than ${n} valid item(s)`,
			params: ({ params: { min: e, max: n } }) => n === void 0 ? (0, t._)`{minContains: ${e}}` : (0, t._)`{minContains: ${e}, maxContains: ${n}}`
		},
		code(e) {
			let { gen: r, schema: i, parentSchema: a, data: o, it: s } = e, c, l, { minContains: u, maxContains: d } = a;
			s.opts.next ? (c = u === void 0 ? 1 : u, l = d) : c = 1;
			let f = r.const("len", (0, t._)`${o}.length`);
			if (e.setParams({
				min: c,
				max: l
			}), l === void 0 && c === 0) {
				(0, n.checkStrictMode)(s, "\"minContains\" == 0 without \"maxContains\": \"contains\" keyword ignored");
				return;
			}
			if (l !== void 0 && c > l) {
				(0, n.checkStrictMode)(s, "\"minContains\" > \"maxContains\" is always invalid"), e.fail();
				return;
			}
			if ((0, n.alwaysValidSchema)(s, i)) {
				let n = (0, t._)`${f} >= ${c}`;
				l !== void 0 && (n = (0, t._)`${n} && ${f} <= ${l}`), e.pass(n);
				return;
			}
			s.items = !0;
			let p = r.name("valid");
			l === void 0 && c === 1 ? h(p, () => r.if(p, () => r.break())) : c === 0 ? (r.let(p, !0), l !== void 0 && r.if((0, t._)`${o}.length > 0`, m)) : (r.let(p, !1), m()), e.result(p, () => e.reset());
			function m() {
				let e = r.name("_valid"), t = r.let("count", 0);
				h(e, () => r.if(e, () => g(t)));
			}
			function h(t, i) {
				r.forRange("i", 0, f, (r) => {
					e.subschema({
						keyword: "contains",
						dataProp: r,
						dataPropType: n.Type.Num,
						compositeRule: !0
					}, t), i();
				});
			}
			function g(e) {
				r.code((0, t._)`${e}++`), l === void 0 ? r.if((0, t._)`${e} >= ${c}`, () => r.assign(p, !0).break()) : (r.if((0, t._)`${e} > ${l}`, () => r.assign(p, !1).break()), c === 1 ? r.assign(p, !0) : r.if((0, t._)`${e} >= ${c}`, () => r.assign(p, !0)));
			}
		}
	};
})), Pe = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
	var t = h(), n = g(), r = w();
	e.error = {
		message: ({ params: { property: e, depsCount: n, deps: r } }) => {
			let i = n === 1 ? "property" : "properties";
			return (0, t.str)`must have ${i} ${r} when property ${e} is present`;
		},
		params: ({ params: { property: e, depsCount: n, deps: r, missingProperty: i } }) => (0, t._)`{property: ${e},
    missingProperty: ${i},
    depsCount: ${n},
    deps: ${r}}`
	};
	var i = {
		keyword: "dependencies",
		type: "object",
		schemaType: "object",
		error: e.error,
		code(e) {
			let [t, n] = a(e);
			o(e, t), s(e, n);
		}
	};
	function a({ schema: e }) {
		let t = {}, n = {};
		for (let r in e) {
			if (r === "__proto__") continue;
			let i = Array.isArray(e[r]) ? t : n;
			i[r] = e[r];
		}
		return [t, n];
	}
	function o(e, n = e.schema) {
		let { gen: i, data: a, it: o } = e;
		if (Object.keys(n).length === 0) return;
		let s = i.let("missing");
		for (let c in n) {
			let l = n[c];
			if (l.length === 0) continue;
			let u = (0, r.propertyInData)(i, a, c, o.opts.ownProperties);
			e.setParams({
				property: c,
				depsCount: l.length,
				deps: l.join(", ")
			}), o.allErrors ? i.if(u, () => {
				for (let t of l) (0, r.checkReportMissingProp)(e, t);
			}) : (i.if((0, t._)`${u} && (${(0, r.checkMissingProp)(e, l, s)})`), (0, r.reportMissingProp)(e, s), i.else());
		}
	}
	e.validatePropertyDeps = o;
	function s(e, t = e.schema) {
		let { gen: i, data: a, keyword: o, it: s } = e, c = i.name("valid");
		for (let l in t) (0, n.alwaysValidSchema)(s, t[l]) || (i.if((0, r.propertyInData)(i, a, l, s.opts.ownProperties), () => {
			let t = e.subschema({
				keyword: o,
				schemaProp: l
			}, c);
			e.mergeValidEvaluated(t, c);
		}, () => i.var(c, !0)), e.ok(c));
	}
	e.validateSchemaDeps = s, e.default = i;
})), Fe = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h(), n = g();
	e.default = {
		keyword: "propertyNames",
		type: "object",
		schemaType: ["object", "boolean"],
		error: {
			message: "property name must be valid",
			params: ({ params: e }) => (0, t._)`{propertyName: ${e.propertyName}}`
		},
		code(e) {
			let { gen: r, schema: i, data: a, it: o } = e;
			if ((0, n.alwaysValidSchema)(o, i)) return;
			let s = r.name("valid");
			r.forIn("key", a, (n) => {
				e.setParams({ propertyName: n }), e.subschema({
					keyword: "propertyNames",
					data: n,
					dataTypes: ["string"],
					propertyName: n,
					compositeRule: !0
				}, s), r.if((0, t.not)(s), () => {
					e.error(!0), o.allErrors || r.break();
				});
			}), e.ok(s);
		}
	};
})), Ie = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = w(), n = h(), r = _(), i = g();
	e.default = {
		keyword: "additionalProperties",
		type: ["object"],
		schemaType: ["boolean", "object"],
		allowUndefined: !0,
		trackErrors: !0,
		error: {
			message: "must NOT have additional properties",
			params: ({ params: e }) => (0, n._)`{additionalProperty: ${e.additionalProperty}}`
		},
		code(e) {
			let { gen: a, schema: o, parentSchema: s, data: c, errsCount: l, it: u } = e;
			/* istanbul ignore if */
			if (!l) throw Error("ajv implementation error");
			let { allErrors: d, opts: f } = u;
			if (u.props = !0, f.removeAdditional !== "all" && (0, i.alwaysValidSchema)(u, o)) return;
			let p = (0, t.allSchemaProperties)(s.properties), m = (0, t.allSchemaProperties)(s.patternProperties);
			h(), e.ok((0, n._)`${l} === ${r.default.errors}`);
			function h() {
				a.forIn("key", c, (e) => {
					!p.length && !m.length ? v(e) : a.if(g(e), () => v(e));
				});
			}
			function g(r) {
				let o;
				if (p.length > 8) {
					let e = (0, i.schemaRefOrVal)(u, s.properties, "properties");
					o = (0, t.isOwnProperty)(a, e, r);
				} else o = p.length ? (0, n.or)(...p.map((e) => (0, n._)`${r} === ${e}`)) : n.nil;
				return m.length && (o = (0, n.or)(o, ...m.map((i) => (0, n._)`${(0, t.usePattern)(e, i)}.test(${r})`))), (0, n.not)(o);
			}
			function _(e) {
				a.code((0, n._)`delete ${c}[${e}]`);
			}
			function v(t) {
				if (f.removeAdditional === "all" || f.removeAdditional && o === !1) _(t);
				else if (o === !1) e.setParams({ additionalProperty: t }), e.error(), d || a.break();
				else if (typeof o == "object" && !(0, i.alwaysValidSchema)(u, o)) {
					let r = a.name("valid");
					f.removeAdditional === "failing" ? (y(t, r, !1), a.if((0, n.not)(r), () => {
						e.reset(), _(t);
					})) : (y(t, r), d || a.if((0, n.not)(r), () => a.break()));
				}
			}
			function y(t, n, r) {
				let a = {
					keyword: "additionalProperties",
					dataProp: t,
					dataPropType: i.Type.Str
				};
				r === !1 && Object.assign(a, {
					compositeRule: !0,
					createErrors: !1,
					allErrors: !1
				}), e.subschema(a, n);
			}
		}
	};
})), Le = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = A(), n = w(), r = g(), i = Ie();
	e.default = {
		keyword: "properties",
		type: "object",
		schemaType: "object",
		code(e) {
			let { gen: a, schema: o, parentSchema: s, data: c, it: l } = e;
			l.opts.removeAdditional === "all" && s.additionalProperties === void 0 && i.default.code(new t.KeywordCxt(l, i.default, "additionalProperties"));
			let u = (0, n.allSchemaProperties)(o);
			for (let e of u) l.definedProperties.add(e);
			l.opts.unevaluated && u.length && l.props !== !0 && (l.props = r.mergeEvaluated.props(a, (0, r.toHash)(u), l.props));
			let d = u.filter((e) => !(0, r.alwaysValidSchema)(l, o[e]));
			if (d.length === 0) return;
			let f = a.name("valid");
			for (let t of d) p(t) ? m(t) : (a.if((0, n.propertyInData)(a, c, t, l.opts.ownProperties)), m(t), l.allErrors || a.else().var(f, !0), a.endIf()), e.it.definedProperties.add(t), e.ok(f);
			function p(e) {
				return l.opts.useDefaults && !l.compositeRule && o[e].default !== void 0;
			}
			function m(t) {
				e.subschema({
					keyword: "properties",
					schemaProp: t,
					dataProp: t
				}, f);
			}
		}
	};
})), Re = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = w(), n = h(), r = g(), i = g();
	e.default = {
		keyword: "patternProperties",
		type: "object",
		schemaType: "object",
		code(e) {
			let { gen: a, schema: o, data: s, parentSchema: c, it: l } = e, { opts: u } = l, d = (0, t.allSchemaProperties)(o), f = d.filter((e) => (0, r.alwaysValidSchema)(l, o[e]));
			if (d.length === 0 || f.length === d.length && (!l.opts.unevaluated || l.props === !0)) return;
			let p = u.strictSchema && !u.allowMatchingProperties && c.properties, m = a.name("valid");
			l.props !== !0 && !(l.props instanceof n.Name) && (l.props = (0, i.evaluatedPropsToName)(a, l.props));
			let { props: h } = l;
			g();
			function g() {
				for (let e of d) p && _(e), l.allErrors ? v(e) : (a.var(m, !0), v(e), a.if(m));
			}
			function _(e) {
				for (let t in p) new RegExp(e).test(t) && (0, r.checkStrictMode)(l, `property ${t} matches pattern ${e} (use allowMatchingProperties)`);
			}
			function v(r) {
				a.forIn("key", s, (o) => {
					a.if((0, n._)`${(0, t.usePattern)(e, r)}.test(${o})`, () => {
						let t = f.includes(r);
						t || e.subschema({
							keyword: "patternProperties",
							schemaProp: r,
							dataProp: o,
							dataPropType: i.Type.Str
						}, m), l.opts.unevaluated && h !== !0 ? a.assign((0, n._)`${h}[${o}]`, !0) : !t && !l.allErrors && a.if((0, n.not)(m), () => a.break());
					});
				});
			}
		}
	};
})), ze = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = g();
	e.default = {
		keyword: "not",
		schemaType: ["object", "boolean"],
		trackErrors: !0,
		code(e) {
			let { gen: n, schema: r, it: i } = e;
			if ((0, t.alwaysValidSchema)(i, r)) {
				e.fail();
				return;
			}
			let a = n.name("valid");
			e.subschema({
				keyword: "not",
				compositeRule: !0,
				createErrors: !1,
				allErrors: !1
			}, a), e.failResult(a, () => e.reset(), () => e.error());
		},
		error: { message: "must NOT be valid" }
	};
})), Be = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
		keyword: "anyOf",
		schemaType: "array",
		trackErrors: !0,
		code: w().validateUnion,
		error: { message: "must match a schema in anyOf" }
	};
})), Ve = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h(), n = g();
	e.default = {
		keyword: "oneOf",
		schemaType: "array",
		trackErrors: !0,
		error: {
			message: "must match exactly one schema in oneOf",
			params: ({ params: e }) => (0, t._)`{passingSchemas: ${e.passing}}`
		},
		code(e) {
			let { gen: r, schema: i, parentSchema: a, it: o } = e;
			/* istanbul ignore if */
			if (!Array.isArray(i)) throw Error("ajv implementation error");
			if (o.opts.discriminator && a.discriminator) return;
			let s = i, c = r.let("valid", !1), l = r.let("passing", null), u = r.name("_valid");
			e.setParams({ passing: l }), r.block(d), e.result(c, () => e.reset(), () => e.error(!0));
			function d() {
				s.forEach((i, a) => {
					let s;
					(0, n.alwaysValidSchema)(o, i) ? r.var(u, !0) : s = e.subschema({
						keyword: "oneOf",
						schemaProp: a,
						compositeRule: !0
					}, u), a > 0 && r.if((0, t._)`${u} && ${c}`).assign(c, !1).assign(l, (0, t._)`[${l}, ${a}]`).else(), r.if(u, () => {
						r.assign(c, !0), r.assign(l, a), s && e.mergeEvaluated(s, t.Name);
					});
				});
			}
		}
	};
})), He = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = g();
	e.default = {
		keyword: "allOf",
		schemaType: "array",
		code(e) {
			let { gen: n, schema: r, it: i } = e;
			/* istanbul ignore if */
			if (!Array.isArray(r)) throw Error("ajv implementation error");
			let a = n.name("valid");
			r.forEach((n, r) => {
				if ((0, t.alwaysValidSchema)(i, n)) return;
				let o = e.subschema({
					keyword: "allOf",
					schemaProp: r
				}, a);
				e.ok(a), e.mergeEvaluated(o);
			});
		}
	};
})), Ue = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h(), n = g(), r = {
		keyword: "if",
		schemaType: ["object", "boolean"],
		trackErrors: !0,
		error: {
			message: ({ params: e }) => (0, t.str)`must match "${e.ifClause}" schema`,
			params: ({ params: e }) => (0, t._)`{failingKeyword: ${e.ifClause}}`
		},
		code(e) {
			let { gen: r, parentSchema: a, it: o } = e;
			a.then === void 0 && a.else === void 0 && (0, n.checkStrictMode)(o, "\"if\" without \"then\" and \"else\" is ignored");
			let s = i(o, "then"), c = i(o, "else");
			if (!s && !c) return;
			let l = r.let("valid", !0), u = r.name("_valid");
			if (d(), e.reset(), s && c) {
				let t = r.let("ifClause");
				e.setParams({ ifClause: t }), r.if(u, f("then", t), f("else", t));
			} else s ? r.if(u, f("then")) : r.if((0, t.not)(u), f("else"));
			e.pass(l, () => e.error(!0));
			function d() {
				let t = e.subschema({
					keyword: "if",
					compositeRule: !0,
					createErrors: !1,
					allErrors: !1
				}, u);
				e.mergeEvaluated(t);
			}
			function f(n, i) {
				return () => {
					let a = e.subschema({ keyword: n }, u);
					r.assign(l, u), e.mergeValidEvaluated(a, l), i ? r.assign(i, (0, t._)`${n}`) : e.setParams({ ifClause: n });
				};
			}
		}
	};
	function i(e, t) {
		let r = e.schema[t];
		return r !== void 0 && !(0, n.alwaysValidSchema)(e, r);
	}
	e.default = r;
})), We = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = g();
	e.default = {
		keyword: ["then", "else"],
		schemaType: ["object", "boolean"],
		code({ keyword: e, parentSchema: n, it: r }) {
			n.if === void 0 && (0, t.checkStrictMode)(r, `"${e}" without "if" is ignored`);
		}
	};
})), Ge = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = ke(), n = je(), r = Ae(), i = Me(), a = Ne(), o = Pe(), s = Fe(), c = Ie(), l = Le(), u = Re(), d = ze(), f = Be(), p = Ve(), m = He(), h = Ue(), g = We();
	function _(e = !1) {
		let _ = [
			d.default,
			f.default,
			p.default,
			m.default,
			h.default,
			g.default,
			s.default,
			c.default,
			o.default,
			l.default,
			u.default
		];
		return e ? _.push(n.default, i.default) : _.push(t.default, r.default), _.push(a.default), _;
	}
	e.default = _;
})), Ke = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.dynamicAnchor = void 0;
	var t = h(), n = _(), r = N(), i = me(), a = {
		keyword: "$dynamicAnchor",
		schemaType: "string",
		code: (e) => o(e, e.schema)
	};
	function o(e, r) {
		let { gen: i, it: a } = e;
		a.schemaEnv.root.dynamicAnchors[r] = !0;
		let o = (0, t._)`${n.default.dynamicAnchors}${(0, t.getProperty)(r)}`, c = a.errSchemaPath === "#" ? a.validateName : s(e);
		i.if((0, t._)`!${o}`, () => i.assign(o, c));
	}
	e.dynamicAnchor = o;
	function s(e) {
		let { schemaEnv: t, schema: n, self: a } = e.it, { root: o, baseId: s, localRefs: c, meta: l } = t.root, { schemaId: u } = a.opts, d = new r.SchemaEnv({
			schema: n,
			schemaId: u,
			root: o,
			baseId: s,
			localRefs: c,
			meta: l
		});
		return r.compileSchema.call(a, d), (0, i.getValidate)(e, d);
	}
	e.default = a;
})), qe = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.dynamicRef = void 0;
	var t = h(), n = _(), r = me(), i = {
		keyword: "$dynamicRef",
		schemaType: "string",
		code: (e) => a(e, e.schema)
	};
	function a(e, i) {
		let { gen: a, keyword: o, it: s } = e;
		if (i[0] !== "#") throw Error(`"${o}" only supports hash fragment reference`);
		let c = i.slice(1);
		if (s.allErrors) l();
		else {
			let t = a.let("valid", !1);
			l(t), e.ok(t);
		}
		function l(e) {
			if (s.schemaEnv.root.dynamicAnchors[c]) {
				let r = a.let("_v", (0, t._)`${n.default.dynamicAnchors}${(0, t.getProperty)(c)}`);
				a.if(r, u(r, e), u(s.validateName, e));
			} else u(s.validateName, e)();
		}
		function u(t, n) {
			return n ? () => a.block(() => {
				(0, r.callRef)(e, t), a.let(n, !0);
			}) : () => (0, r.callRef)(e, t);
		}
	}
	e.dynamicRef = a, e.default = i;
})), Je = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Ke(), n = g();
	e.default = {
		keyword: "$recursiveAnchor",
		schemaType: "boolean",
		code(e) {
			e.schema ? (0, t.dynamicAnchor)(e, "") : (0, n.checkStrictMode)(e.it, "$recursiveAnchor: false is ignored");
		}
	};
})), Ye = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = qe();
	e.default = {
		keyword: "$recursiveRef",
		schemaType: "string",
		code: (e) => (0, t.dynamicRef)(e, e.schema)
	};
})), Xe = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Ke(), n = qe(), r = Je(), i = Ye();
	e.default = [
		t.default,
		n.default,
		r.default,
		i.default
	];
})), Ze = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Pe();
	e.default = {
		keyword: "dependentRequired",
		type: "object",
		schemaType: "object",
		error: t.error,
		code: (e) => (0, t.validatePropertyDeps)(e)
	};
})), Qe = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Pe();
	e.default = {
		keyword: "dependentSchemas",
		type: "object",
		schemaType: "object",
		code: (e) => (0, t.validateSchemaDeps)(e)
	};
})), $e = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = g();
	e.default = {
		keyword: ["maxContains", "minContains"],
		type: "array",
		schemaType: "number",
		code({ keyword: e, parentSchema: n, it: r }) {
			n.contains === void 0 && (0, t.checkStrictMode)(r, `"${e}" without "contains" is ignored`);
		}
	};
})), et = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Ze(), n = Qe(), r = $e();
	e.default = [
		t.default,
		n.default,
		r.default
	];
})), tt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h(), n = g(), r = _();
	e.default = {
		keyword: "unevaluatedProperties",
		type: "object",
		schemaType: ["boolean", "object"],
		trackErrors: !0,
		error: {
			message: "must NOT have unevaluated properties",
			params: ({ params: e }) => (0, t._)`{unevaluatedProperty: ${e.unevaluatedProperty}}`
		},
		code(e) {
			let { gen: i, schema: a, data: o, errsCount: s, it: c } = e;
			/* istanbul ignore if */
			if (!s) throw Error("ajv implementation error");
			let { allErrors: l, props: u } = c;
			u instanceof t.Name ? i.if((0, t._)`${u} !== true`, () => i.forIn("key", o, (e) => i.if(f(u, e), () => d(e)))) : u !== !0 && i.forIn("key", o, (e) => u === void 0 ? d(e) : i.if(p(u, e), () => d(e))), c.props = !0, e.ok((0, t._)`${s} === ${r.default.errors}`);
			function d(r) {
				if (a === !1) e.setParams({ unevaluatedProperty: r }), e.error(), l || i.break();
				else if (!(0, n.alwaysValidSchema)(c, a)) {
					let a = i.name("valid");
					e.subschema({
						keyword: "unevaluatedProperties",
						dataProp: r,
						dataPropType: n.Type.Str
					}, a), l || i.if((0, t.not)(a), () => i.break());
				}
			}
			function f(e, n) {
				return (0, t._)`!${e} || !${e}[${n}]`;
			}
			function p(e, n) {
				let r = [];
				for (let i in e) e[i] === !0 && r.push((0, t._)`${n} !== ${i}`);
				return (0, t.and)(...r);
			}
		}
	};
})), nt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h(), n = g();
	e.default = {
		keyword: "unevaluatedItems",
		type: "array",
		schemaType: ["boolean", "object"],
		error: {
			message: ({ params: { len: e } }) => (0, t.str)`must NOT have more than ${e} items`,
			params: ({ params: { len: e } }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { gen: r, schema: i, data: a, it: o } = e, s = o.items || 0;
			if (s === !0) return;
			let c = r.const("len", (0, t._)`${a}.length`);
			if (i === !1) e.setParams({ len: s }), e.fail((0, t._)`${c} > ${s}`);
			else if (typeof i == "object" && !(0, n.alwaysValidSchema)(o, i)) {
				let n = r.var("valid", (0, t._)`${c} <= ${s}`);
				r.if((0, t.not)(n), () => l(n, s)), e.ok(n);
			}
			o.items = !0;
			function l(i, a) {
				r.forRange("i", a, c, (a) => {
					e.subschema({
						keyword: "unevaluatedItems",
						dataProp: a,
						dataPropType: n.Type.Num
					}, i), o.allErrors || r.if((0, t.not)(i), () => r.break());
				});
			}
		}
	};
})), rt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = tt(), n = nt();
	e.default = [t.default, n.default];
})), it = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h();
	e.default = {
		keyword: "format",
		type: ["number", "string"],
		schemaType: "string",
		$data: !0,
		error: {
			message: ({ schemaCode: e }) => (0, t.str)`must match format "${e}"`,
			params: ({ schemaCode: e }) => (0, t._)`{format: ${e}}`
		},
		code(e, n) {
			let { gen: r, data: i, $data: a, schema: o, schemaCode: s, it: c } = e, { opts: l, errSchemaPath: u, schemaEnv: d, self: f } = c;
			if (!l.validateFormats) return;
			a ? p() : m();
			function p() {
				let a = r.scopeValue("formats", {
					ref: f.formats,
					code: l.code.formats
				}), o = r.const("fDef", (0, t._)`${a}[${s}]`), c = r.let("fType"), u = r.let("format");
				r.if((0, t._)`typeof ${o} == "object" && !(${o} instanceof RegExp)`, () => r.assign(c, (0, t._)`${o}.type || "string"`).assign(u, (0, t._)`${o}.validate`), () => r.assign(c, (0, t._)`"string"`).assign(u, o)), e.fail$data((0, t.or)(p(), m()));
				function p() {
					return l.strictSchema === !1 ? t.nil : (0, t._)`${s} && !${u}`;
				}
				function m() {
					let e = d.$async ? (0, t._)`(${o}.async ? await ${u}(${i}) : ${u}(${i}))` : (0, t._)`${u}(${i})`, r = (0, t._)`(typeof ${u} == "function" ? ${e} : ${u}.test(${i}))`;
					return (0, t._)`${u} && ${u} !== true && ${c} === ${n} && !${r}`;
				}
			}
			function m() {
				let a = f.formats[o];
				if (!a) {
					m();
					return;
				}
				if (a === !0) return;
				let [s, c, p] = h(a);
				s === n && e.pass(g());
				function m() {
					if (l.strictSchema === !1) {
						f.logger.warn(e());
						return;
					}
					throw Error(e());
					function e() {
						return `unknown format "${o}" ignored in schema at path "${u}"`;
					}
				}
				function h(e) {
					let n = e instanceof RegExp ? (0, t.regexpCode)(e) : l.code.formats ? (0, t._)`${l.code.formats}${(0, t.getProperty)(o)}` : void 0, i = r.scopeValue("formats", {
						key: o,
						ref: e,
						code: n
					});
					return typeof e == "object" && !(e instanceof RegExp) ? [
						e.type || "string",
						e.validate,
						(0, t._)`${i}.validate`
					] : [
						"string",
						e,
						i
					];
				}
				function g() {
					if (typeof a == "object" && !(a instanceof RegExp) && a.async) {
						if (!d.$async) throw Error("async format in sync schema");
						return (0, t._)`await ${p}(${i})`;
					}
					return typeof c == "function" ? (0, t._)`${p}(${i})` : (0, t._)`${p}.test(${i})`;
				}
			}
		}
	};
})), at = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = [it().default];
})), ot = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.contentVocabulary = e.metadataVocabulary = void 0, e.metadataVocabulary = [
		"title",
		"description",
		"default",
		"deprecated",
		"readOnly",
		"writeOnly",
		"examples"
	], e.contentVocabulary = [
		"contentMediaType",
		"contentEncoding",
		"contentSchema"
	];
})), st = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = he(), n = Oe(), r = Ge(), i = Xe(), a = et(), o = rt(), s = at(), c = ot();
	e.default = [
		i.default,
		t.default,
		n.default,
		(0, r.default)(!0),
		s.default,
		c.metadataVocabulary,
		c.contentVocabulary,
		a.default,
		o.default
	];
})), ct = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DiscrError = void 0;
	var t;
	(function(e) {
		e.Tag = "tag", e.Mapping = "mapping";
	})(t || (e.DiscrError = t = {}));
})), lt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = h(), n = ct(), r = N(), i = M(), a = g();
	e.default = {
		keyword: "discriminator",
		type: "object",
		schemaType: "object",
		error: {
			message: ({ params: { discrError: e, tagName: t } }) => e === n.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
			params: ({ params: { discrError: e, tag: n, tagName: r } }) => (0, t._)`{error: ${e}, tag: ${r}, tagValue: ${n}}`
		},
		code(e) {
			let { gen: o, data: s, schema: c, parentSchema: l, it: u } = e, { oneOf: d } = l;
			if (!u.opts.discriminator) throw Error("discriminator: requires discriminator option");
			let f = c.propertyName;
			if (typeof f != "string") throw Error("discriminator: requires propertyName");
			if (c.mapping) throw Error("discriminator: mapping is not supported");
			if (!d) throw Error("discriminator: requires oneOf keyword");
			let p = o.let("valid", !1), m = o.const("tag", (0, t._)`${s}${(0, t.getProperty)(f)}`);
			o.if((0, t._)`typeof ${m} == "string"`, () => h(), () => e.error(!1, {
				discrError: n.DiscrError.Tag,
				tag: m,
				tagName: f
			})), e.ok(p);
			function h() {
				let r = _();
				o.if(!1);
				for (let e in r) o.elseIf((0, t._)`${m} === ${e}`), o.assign(p, g(r[e]));
				o.else(), e.error(!1, {
					discrError: n.DiscrError.Mapping,
					tag: m,
					tagName: f
				}), o.endIf();
			}
			function g(n) {
				let r = o.name("valid"), i = e.subschema({
					keyword: "oneOf",
					schemaProp: n
				}, r);
				return e.mergeEvaluated(i, t.Name), r;
			}
			function _() {
				let e = {}, t = o(l), n = !0;
				for (let e = 0; e < d.length; e++) {
					let c = d[e];
					if (c?.$ref && !(0, a.schemaHasRulesButRef)(c, u.self.RULES)) {
						let e = c.$ref;
						if (c = r.resolveRef.call(u.self, u.schemaEnv.root, u.baseId, e), c instanceof r.SchemaEnv && (c = c.schema), c === void 0) throw new i.default(u.opts.uriResolver, u.baseId, e);
					}
					let l = c?.properties?.[f];
					if (typeof l != "object") throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${f}"`);
					n &&= t || o(c), s(l, e);
				}
				if (!n) throw Error(`discriminator: "${f}" must be required`);
				return e;
				function o({ required: e }) {
					return Array.isArray(e) && e.includes(f);
				}
				function s(e, t) {
					if (e.const) c(e.const, t);
					else if (e.enum) for (let n of e.enum) c(n, t);
					else throw Error(`discriminator: "properties/${f}" must have "const" or "enum"`);
				}
				function c(t, n) {
					if (typeof t != "string" || t in e) throw Error(`discriminator: "${f}" values must be unique strings`);
					e[t] = n;
				}
			}
		}
	};
})), ut = /* @__PURE__ */ c({
	$comment: () => vt,
	$dynamicAnchor: () => mt,
	$id: () => ft,
	$schema: () => dt,
	$vocabulary: () => pt,
	allOf: () => gt,
	default: () => bt,
	properties: () => yt,
	title: () => ht,
	type: () => _t
}), dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt = o((() => {
	dt = "https://json-schema.org/draft/2020-12/schema", ft = "https://json-schema.org/draft/2020-12/schema", pt = {
		"https://json-schema.org/draft/2020-12/vocab/core": !0,
		"https://json-schema.org/draft/2020-12/vocab/applicator": !0,
		"https://json-schema.org/draft/2020-12/vocab/unevaluated": !0,
		"https://json-schema.org/draft/2020-12/vocab/validation": !0,
		"https://json-schema.org/draft/2020-12/vocab/meta-data": !0,
		"https://json-schema.org/draft/2020-12/vocab/format-annotation": !0,
		"https://json-schema.org/draft/2020-12/vocab/content": !0
	}, mt = "meta", ht = "Core and Validation specifications meta-schema", gt = [
		{ $ref: "meta/core" },
		{ $ref: "meta/applicator" },
		{ $ref: "meta/unevaluated" },
		{ $ref: "meta/validation" },
		{ $ref: "meta/meta-data" },
		{ $ref: "meta/format-annotation" },
		{ $ref: "meta/content" }
	], _t = ["object", "boolean"], vt = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", yt = {
		definitions: {
			$comment: "\"definitions\" has been replaced by \"$defs\".",
			type: "object",
			additionalProperties: { $dynamicRef: "#meta" },
			deprecated: !0,
			default: {}
		},
		dependencies: {
			$comment: "\"dependencies\" has been split and replaced by \"dependentSchemas\" and \"dependentRequired\" in order to serve their differing semantics.",
			type: "object",
			additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] },
			deprecated: !0,
			default: {}
		},
		$recursiveAnchor: {
			$comment: "\"$recursiveAnchor\" has been replaced by \"$dynamicAnchor\".",
			$ref: "meta/core#/$defs/anchorString",
			deprecated: !0
		},
		$recursiveRef: {
			$comment: "\"$recursiveRef\" has been replaced by \"$dynamicRef\".",
			$ref: "meta/core#/$defs/uriReferenceString",
			deprecated: !0
		}
	}, bt = {
		$schema: dt,
		$id: ft,
		$vocabulary: pt,
		$dynamicAnchor: mt,
		title: ht,
		allOf: gt,
		type: _t,
		$comment: vt,
		properties: yt
	};
})), St = /* @__PURE__ */ c({
	$defs: () => At,
	$dynamicAnchor: () => Et,
	$id: () => wt,
	$schema: () => Ct,
	$vocabulary: () => Tt,
	default: () => jt,
	properties: () => kt,
	title: () => Dt,
	type: () => Ot
}), Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt = o((() => {
	Ct = "https://json-schema.org/draft/2020-12/schema", wt = "https://json-schema.org/draft/2020-12/meta/applicator", Tt = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Et = "meta", Dt = "Applicator vocabulary meta-schema", Ot = ["object", "boolean"], kt = {
		prefixItems: { $ref: "#/$defs/schemaArray" },
		items: { $dynamicRef: "#meta" },
		contains: { $dynamicRef: "#meta" },
		additionalProperties: { $dynamicRef: "#meta" },
		properties: {
			type: "object",
			additionalProperties: { $dynamicRef: "#meta" },
			default: {}
		},
		patternProperties: {
			type: "object",
			additionalProperties: { $dynamicRef: "#meta" },
			propertyNames: { format: "regex" },
			default: {}
		},
		dependentSchemas: {
			type: "object",
			additionalProperties: { $dynamicRef: "#meta" },
			default: {}
		},
		propertyNames: { $dynamicRef: "#meta" },
		if: { $dynamicRef: "#meta" },
		then: { $dynamicRef: "#meta" },
		else: { $dynamicRef: "#meta" },
		allOf: { $ref: "#/$defs/schemaArray" },
		anyOf: { $ref: "#/$defs/schemaArray" },
		oneOf: { $ref: "#/$defs/schemaArray" },
		not: { $dynamicRef: "#meta" }
	}, At = { schemaArray: {
		type: "array",
		minItems: 1,
		items: { $dynamicRef: "#meta" }
	} }, jt = {
		$schema: Ct,
		$id: wt,
		$vocabulary: Tt,
		$dynamicAnchor: Et,
		title: Dt,
		type: Ot,
		properties: kt,
		$defs: At
	};
})), Nt = /* @__PURE__ */ c({
	$dynamicAnchor: () => Lt,
	$id: () => Ft,
	$schema: () => Pt,
	$vocabulary: () => It,
	default: () => Vt,
	properties: () => Bt,
	title: () => Rt,
	type: () => zt
}), Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht = o((() => {
	Pt = "https://json-schema.org/draft/2020-12/schema", Ft = "https://json-schema.org/draft/2020-12/meta/unevaluated", It = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Lt = "meta", Rt = "Unevaluated applicator vocabulary meta-schema", zt = ["object", "boolean"], Bt = {
		unevaluatedItems: { $dynamicRef: "#meta" },
		unevaluatedProperties: { $dynamicRef: "#meta" }
	}, Vt = {
		$schema: Pt,
		$id: Ft,
		$vocabulary: It,
		$dynamicAnchor: Lt,
		title: Rt,
		type: zt,
		properties: Bt
	};
})), Ut = /* @__PURE__ */ c({
	$dynamicAnchor: () => qt,
	$id: () => Gt,
	$schema: () => Wt,
	$vocabulary: () => Kt,
	default: () => Zt,
	properties: () => Xt,
	title: () => Jt,
	type: () => Yt
}), Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt = o((() => {
	Wt = "https://json-schema.org/draft/2020-12/schema", Gt = "https://json-schema.org/draft/2020-12/meta/content", Kt = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, qt = "meta", Jt = "Content vocabulary meta-schema", Yt = ["object", "boolean"], Xt = {
		contentEncoding: { type: "string" },
		contentMediaType: { type: "string" },
		contentSchema: { $dynamicRef: "#meta" }
	}, Zt = {
		$schema: Wt,
		$id: Gt,
		$vocabulary: Kt,
		$dynamicAnchor: qt,
		title: Jt,
		type: Yt,
		properties: Xt
	};
})), $t = /* @__PURE__ */ c({
	$defs: () => cn,
	$dynamicAnchor: () => rn,
	$id: () => tn,
	$schema: () => en,
	$vocabulary: () => nn,
	default: () => ln,
	properties: () => sn,
	title: () => an,
	type: () => on
}), en, tn, nn, rn, an, on, sn, cn, ln, un = o((() => {
	en = "https://json-schema.org/draft/2020-12/schema", tn = "https://json-schema.org/draft/2020-12/meta/core", nn = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, rn = "meta", an = "Core vocabulary meta-schema", on = ["object", "boolean"], sn = {
		$id: {
			$ref: "#/$defs/uriReferenceString",
			$comment: "Non-empty fragments not allowed.",
			pattern: "^[^#]*#?$"
		},
		$schema: { $ref: "#/$defs/uriString" },
		$ref: { $ref: "#/$defs/uriReferenceString" },
		$anchor: { $ref: "#/$defs/anchorString" },
		$dynamicRef: { $ref: "#/$defs/uriReferenceString" },
		$dynamicAnchor: { $ref: "#/$defs/anchorString" },
		$vocabulary: {
			type: "object",
			propertyNames: { $ref: "#/$defs/uriString" },
			additionalProperties: { type: "boolean" }
		},
		$comment: { type: "string" },
		$defs: {
			type: "object",
			additionalProperties: { $dynamicRef: "#meta" }
		}
	}, cn = {
		anchorString: {
			type: "string",
			pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
		},
		uriString: {
			type: "string",
			format: "uri"
		},
		uriReferenceString: {
			type: "string",
			format: "uri-reference"
		}
	}, ln = {
		$schema: en,
		$id: tn,
		$vocabulary: nn,
		$dynamicAnchor: rn,
		title: an,
		type: on,
		properties: sn,
		$defs: cn
	};
})), dn = /* @__PURE__ */ c({
	$dynamicAnchor: () => hn,
	$id: () => pn,
	$schema: () => fn,
	$vocabulary: () => mn,
	default: () => yn,
	properties: () => vn,
	title: () => gn,
	type: () => _n
}), fn, pn, mn, hn, gn, _n, vn, yn, bn = o((() => {
	fn = "https://json-schema.org/draft/2020-12/schema", pn = "https://json-schema.org/draft/2020-12/meta/format-annotation", mn = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, hn = "meta", gn = "Format vocabulary meta-schema for annotation results", _n = ["object", "boolean"], vn = { format: { type: "string" } }, yn = {
		$schema: fn,
		$id: pn,
		$vocabulary: mn,
		$dynamicAnchor: hn,
		title: gn,
		type: _n,
		properties: vn
	};
})), xn = /* @__PURE__ */ c({
	$dynamicAnchor: () => Tn,
	$id: () => Cn,
	$schema: () => Sn,
	$vocabulary: () => wn,
	default: () => kn,
	properties: () => On,
	title: () => En,
	type: () => Dn
}), Sn, Cn, wn, Tn, En, Dn, On, kn, An = o((() => {
	Sn = "https://json-schema.org/draft/2020-12/schema", Cn = "https://json-schema.org/draft/2020-12/meta/meta-data", wn = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Tn = "meta", En = "Meta-data vocabulary meta-schema", Dn = ["object", "boolean"], On = {
		title: { type: "string" },
		description: { type: "string" },
		default: !0,
		deprecated: {
			type: "boolean",
			default: !1
		},
		readOnly: {
			type: "boolean",
			default: !1
		},
		writeOnly: {
			type: "boolean",
			default: !1
		},
		examples: {
			type: "array",
			items: !0
		}
	}, kn = {
		$schema: Sn,
		$id: Cn,
		$vocabulary: wn,
		$dynamicAnchor: Tn,
		title: En,
		type: Dn,
		properties: On
	};
})), jn = /* @__PURE__ */ c({
	$defs: () => zn,
	$dynamicAnchor: () => Fn,
	$id: () => Nn,
	$schema: () => Mn,
	$vocabulary: () => Pn,
	default: () => Bn,
	properties: () => Rn,
	title: () => In,
	type: () => Ln
}), Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn = o((() => {
	Mn = "https://json-schema.org/draft/2020-12/schema", Nn = "https://json-schema.org/draft/2020-12/meta/validation", Pn = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Fn = "meta", In = "Validation vocabulary meta-schema", Ln = ["object", "boolean"], Rn = {
		type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, {
			type: "array",
			items: { $ref: "#/$defs/simpleTypes" },
			minItems: 1,
			uniqueItems: !0
		}] },
		const: !0,
		enum: {
			type: "array",
			items: !0
		},
		multipleOf: {
			type: "number",
			exclusiveMinimum: 0
		},
		maximum: { type: "number" },
		exclusiveMaximum: { type: "number" },
		minimum: { type: "number" },
		exclusiveMinimum: { type: "number" },
		maxLength: { $ref: "#/$defs/nonNegativeInteger" },
		minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
		pattern: {
			type: "string",
			format: "regex"
		},
		maxItems: { $ref: "#/$defs/nonNegativeInteger" },
		minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
		uniqueItems: {
			type: "boolean",
			default: !1
		},
		maxContains: { $ref: "#/$defs/nonNegativeInteger" },
		minContains: {
			$ref: "#/$defs/nonNegativeInteger",
			default: 1
		},
		maxProperties: { $ref: "#/$defs/nonNegativeInteger" },
		minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
		required: { $ref: "#/$defs/stringArray" },
		dependentRequired: {
			type: "object",
			additionalProperties: { $ref: "#/$defs/stringArray" }
		}
	}, zn = {
		nonNegativeInteger: {
			type: "integer",
			minimum: 0
		},
		nonNegativeIntegerDefault0: {
			$ref: "#/$defs/nonNegativeInteger",
			default: 0
		},
		simpleTypes: { enum: [
			"array",
			"boolean",
			"integer",
			"null",
			"number",
			"object",
			"string"
		] },
		stringArray: {
			type: "array",
			items: { type: "string" },
			uniqueItems: !0,
			default: []
		}
	}, Bn = {
		$schema: Mn,
		$id: Nn,
		$vocabulary: Pn,
		$dynamicAnchor: Fn,
		title: In,
		type: Ln,
		properties: Rn,
		$defs: zn
	};
})), Hn = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = (xt(), d(ut).default), n = (Mt(), d(St).default), r = (Ht(), d(Nt).default), i = (Qt(), d(Ut).default), a = (un(), d($t).default), o = (bn(), d(dn).default), s = (An(), d(xn).default), c = (Vn(), d(jn).default), l = ["/properties"];
	function u(e) {
		return [
			t,
			n,
			r,
			i,
			a,
			u(this, o),
			s,
			u(this, c)
		].forEach((e) => this.addMetaSchema(e, void 0, !1)), this;
		function u(t, n) {
			return e ? t.$dataMetaSchema(n, l) : n;
		}
	}
	e.default = u;
})), Un = /* @__PURE__ */ s(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.MissingRefError = e.ValidationError = e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = e.Ajv2020 = void 0;
	var n = fe(), r = st(), i = lt(), a = Hn(), o = "https://json-schema.org/draft/2020-12/schema", s = class extends n.default {
		constructor(e = {}) {
			super({
				...e,
				dynamicRef: !0,
				next: !0,
				unevaluated: !0
			});
		}
		_addVocabularies() {
			super._addVocabularies(), r.default.forEach((e) => this.addVocabulary(e)), this.opts.discriminator && this.addKeyword(i.default);
		}
		_addDefaultMetaSchema() {
			super._addDefaultMetaSchema();
			let { $data: e, meta: t } = this.opts;
			t && (a.default.call(this, e), this.refs["http://json-schema.org/schema"] = o);
		}
		defaultMeta() {
			return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(o) ? o : void 0);
		}
	};
	e.Ajv2020 = s, t.exports = e = s, t.exports.Ajv2020 = s, Object.defineProperty(e, "__esModule", { value: !0 }), e.default = s;
	var c = A();
	Object.defineProperty(e, "KeywordCxt", {
		enumerable: !0,
		get: function() {
			return c.KeywordCxt;
		}
	});
	var l = h();
	Object.defineProperty(e, "_", {
		enumerable: !0,
		get: function() {
			return l._;
		}
	}), Object.defineProperty(e, "str", {
		enumerable: !0,
		get: function() {
			return l.str;
		}
	}), Object.defineProperty(e, "stringify", {
		enumerable: !0,
		get: function() {
			return l.stringify;
		}
	}), Object.defineProperty(e, "nil", {
		enumerable: !0,
		get: function() {
			return l.nil;
		}
	}), Object.defineProperty(e, "Name", {
		enumerable: !0,
		get: function() {
			return l.Name;
		}
	}), Object.defineProperty(e, "CodeGen", {
		enumerable: !0,
		get: function() {
			return l.CodeGen;
		}
	});
	var u = j();
	Object.defineProperty(e, "ValidationError", {
		enumerable: !0,
		get: function() {
			return u.default;
		}
	});
	var d = M();
	Object.defineProperty(e, "MissingRefError", {
		enumerable: !0,
		get: function() {
			return d.default;
		}
	});
})), Wn = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
	function t(e, t) {
		return {
			validate: e,
			compare: t
		};
	}
	e.fullFormats = {
		date: t(a, o),
		time: t(c(!0), l),
		"date-time": t(f(!0), p),
		"iso-time": t(c(), u),
		"iso-date-time": t(f(), m),
		duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
		uri: _,
		"uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
		"uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
		url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
		email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
		hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
		ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
		ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
		regex: E,
		uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
		"json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
		"json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
		"relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
		byte: y,
		int32: {
			type: "number",
			validate: S
		},
		int64: {
			type: "number",
			validate: C
		},
		float: {
			type: "number",
			validate: w
		},
		double: {
			type: "number",
			validate: w
		},
		password: !0,
		binary: !0
	}, e.fastFormats = {
		...e.fullFormats,
		date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, o),
		time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, l),
		"date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, p),
		"iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, u),
		"iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, m),
		uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
		"uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
		email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
	}, e.formatNames = Object.keys(e.fullFormats);
	function n(e) {
		return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
	}
	var r = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, i = [
		0,
		31,
		28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	];
	function a(e) {
		let t = r.exec(e);
		if (!t) return !1;
		let a = +t[1], o = +t[2], s = +t[3];
		return o >= 1 && o <= 12 && s >= 1 && s <= (o === 2 && n(a) ? 29 : i[o]);
	}
	function o(e, t) {
		if (e && t) return e > t ? 1 : e < t ? -1 : 0;
	}
	var s = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
	function c(e) {
		return function(t) {
			let n = s.exec(t);
			if (!n) return !1;
			let r = +n[1], i = +n[2], a = +n[3], o = n[4], c = n[5] === "-" ? -1 : 1, l = +(n[6] || 0), u = +(n[7] || 0);
			if (l > 23 || u > 59 || e && !o) return !1;
			if (r <= 23 && i <= 59 && a < 60) return !0;
			let d = i - u * c, f = r - l * c - +(d < 0);
			return (f === 23 || f === -1) && (d === 59 || d === -1) && a < 61;
		};
	}
	function l(e, t) {
		if (!(e && t)) return;
		let n = (/* @__PURE__ */ new Date("2020-01-01T" + e)).valueOf(), r = (/* @__PURE__ */ new Date("2020-01-01T" + t)).valueOf();
		if (n && r) return n - r;
	}
	function u(e, t) {
		if (!(e && t)) return;
		let n = s.exec(e), r = s.exec(t);
		if (n && r) return e = n[1] + n[2] + n[3], t = r[1] + r[2] + r[3], e > t ? 1 : e < t ? -1 : 0;
	}
	var d = /t|\s/i;
	function f(e) {
		let t = c(e);
		return function(e) {
			let n = e.split(d);
			return n.length === 2 && a(n[0]) && t(n[1]);
		};
	}
	function p(e, t) {
		if (!(e && t)) return;
		let n = new Date(e).valueOf(), r = new Date(t).valueOf();
		if (n && r) return n - r;
	}
	function m(e, t) {
		if (!(e && t)) return;
		let [n, r] = e.split(d), [i, a] = t.split(d), s = o(n, i);
		if (s !== void 0) return s || l(r, a);
	}
	var h = /\/|:/, g = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
	function _(e) {
		return h.test(e) && g.test(e);
	}
	var v = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
	function y(e) {
		return v.lastIndex = 0, v.test(e);
	}
	var b = -(2 ** 31), x = 2 ** 31 - 1;
	function S(e) {
		return Number.isInteger(e) && e <= x && e >= b;
	}
	function C(e) {
		return Number.isInteger(e);
	}
	function w() {
		return !0;
	}
	var T = /[^\\]\\Z/;
	function E(e) {
		if (T.test(e)) return !1;
		try {
			return new RegExp(e), !0;
		} catch {
			return !1;
		}
	}
})), Gn = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = he(), n = Oe(), r = Ge(), i = at(), a = ot();
	e.default = [
		t.default,
		n.default,
		(0, r.default)(),
		i.default,
		a.metadataVocabulary,
		a.contentVocabulary
	];
})), Kn = /* @__PURE__ */ c({
	$id: () => Jn,
	$schema: () => qn,
	default: () => $n,
	definitions: () => Xn,
	properties: () => Qn,
	title: () => Yn,
	type: () => Zn
}), qn, Jn, Yn, Xn, Zn, Qn, $n, er = o((() => {
	qn = "http://json-schema.org/draft-07/schema#", Jn = "http://json-schema.org/draft-07/schema#", Yn = "Core schema meta-schema", Xn = {
		schemaArray: {
			type: "array",
			minItems: 1,
			items: { $ref: "#" }
		},
		nonNegativeInteger: {
			type: "integer",
			minimum: 0
		},
		nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] },
		simpleTypes: { enum: [
			"array",
			"boolean",
			"integer",
			"null",
			"number",
			"object",
			"string"
		] },
		stringArray: {
			type: "array",
			items: { type: "string" },
			uniqueItems: !0,
			default: []
		}
	}, Zn = ["object", "boolean"], Qn = {
		$id: {
			type: "string",
			format: "uri-reference"
		},
		$schema: {
			type: "string",
			format: "uri"
		},
		$ref: {
			type: "string",
			format: "uri-reference"
		},
		$comment: { type: "string" },
		title: { type: "string" },
		description: { type: "string" },
		default: !0,
		readOnly: {
			type: "boolean",
			default: !1
		},
		examples: {
			type: "array",
			items: !0
		},
		multipleOf: {
			type: "number",
			exclusiveMinimum: 0
		},
		maximum: { type: "number" },
		exclusiveMaximum: { type: "number" },
		minimum: { type: "number" },
		exclusiveMinimum: { type: "number" },
		maxLength: { $ref: "#/definitions/nonNegativeInteger" },
		minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
		pattern: {
			type: "string",
			format: "regex"
		},
		additionalItems: { $ref: "#" },
		items: {
			anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
			default: !0
		},
		maxItems: { $ref: "#/definitions/nonNegativeInteger" },
		minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
		uniqueItems: {
			type: "boolean",
			default: !1
		},
		contains: { $ref: "#" },
		maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
		minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
		required: { $ref: "#/definitions/stringArray" },
		additionalProperties: { $ref: "#" },
		definitions: {
			type: "object",
			additionalProperties: { $ref: "#" },
			default: {}
		},
		properties: {
			type: "object",
			additionalProperties: { $ref: "#" },
			default: {}
		},
		patternProperties: {
			type: "object",
			additionalProperties: { $ref: "#" },
			propertyNames: { format: "regex" },
			default: {}
		},
		dependencies: {
			type: "object",
			additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] }
		},
		propertyNames: { $ref: "#" },
		const: !0,
		enum: {
			type: "array",
			items: !0,
			minItems: 1,
			uniqueItems: !0
		},
		type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, {
			type: "array",
			items: { $ref: "#/definitions/simpleTypes" },
			minItems: 1,
			uniqueItems: !0
		}] },
		format: { type: "string" },
		contentMediaType: { type: "string" },
		contentEncoding: { type: "string" },
		if: { $ref: "#" },
		then: { $ref: "#" },
		else: { $ref: "#" },
		allOf: { $ref: "#/definitions/schemaArray" },
		anyOf: { $ref: "#/definitions/schemaArray" },
		oneOf: { $ref: "#/definitions/schemaArray" },
		not: { $ref: "#" }
	}, $n = {
		$schema: qn,
		$id: Jn,
		title: Yn,
		definitions: Xn,
		type: Zn,
		properties: Qn,
		default: !0
	};
})), tr = /* @__PURE__ */ s(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.MissingRefError = e.ValidationError = e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = e.Ajv = void 0;
	var n = fe(), r = Gn(), i = lt(), a = (er(), d(Kn).default), o = ["/properties"], s = "http://json-schema.org/draft-07/schema", c = class extends n.default {
		_addVocabularies() {
			super._addVocabularies(), r.default.forEach((e) => this.addVocabulary(e)), this.opts.discriminator && this.addKeyword(i.default);
		}
		_addDefaultMetaSchema() {
			if (super._addDefaultMetaSchema(), !this.opts.meta) return;
			let e = this.opts.$data ? this.$dataMetaSchema(a, o) : a;
			this.addMetaSchema(e, s, !1), this.refs["http://json-schema.org/schema"] = s;
		}
		defaultMeta() {
			return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
		}
	};
	e.Ajv = c, t.exports = e = c, t.exports.Ajv = c, Object.defineProperty(e, "__esModule", { value: !0 }), e.default = c;
	var l = A();
	Object.defineProperty(e, "KeywordCxt", {
		enumerable: !0,
		get: function() {
			return l.KeywordCxt;
		}
	});
	var u = h();
	Object.defineProperty(e, "_", {
		enumerable: !0,
		get: function() {
			return u._;
		}
	}), Object.defineProperty(e, "str", {
		enumerable: !0,
		get: function() {
			return u.str;
		}
	}), Object.defineProperty(e, "stringify", {
		enumerable: !0,
		get: function() {
			return u.stringify;
		}
	}), Object.defineProperty(e, "nil", {
		enumerable: !0,
		get: function() {
			return u.nil;
		}
	}), Object.defineProperty(e, "Name", {
		enumerable: !0,
		get: function() {
			return u.Name;
		}
	}), Object.defineProperty(e, "CodeGen", {
		enumerable: !0,
		get: function() {
			return u.CodeGen;
		}
	});
	var f = j();
	Object.defineProperty(e, "ValidationError", {
		enumerable: !0,
		get: function() {
			return f.default;
		}
	});
	var p = M();
	Object.defineProperty(e, "MissingRefError", {
		enumerable: !0,
		get: function() {
			return p.default;
		}
	});
})), nr = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
	var t = tr(), n = h(), r = n.operators, i = {
		formatMaximum: {
			okStr: "<=",
			ok: r.LTE,
			fail: r.GT
		},
		formatMinimum: {
			okStr: ">=",
			ok: r.GTE,
			fail: r.LT
		},
		formatExclusiveMaximum: {
			okStr: "<",
			ok: r.LT,
			fail: r.GTE
		},
		formatExclusiveMinimum: {
			okStr: ">",
			ok: r.GT,
			fail: r.LTE
		}
	};
	e.formatLimitDefinition = {
		keyword: Object.keys(i),
		type: "string",
		schemaType: "string",
		$data: !0,
		error: {
			message: ({ keyword: e, schemaCode: t }) => (0, n.str)`should be ${i[e].okStr} ${t}`,
			params: ({ keyword: e, schemaCode: t }) => (0, n._)`{comparison: ${i[e].okStr}, limit: ${t}}`
		},
		code(e) {
			let { gen: r, data: a, schemaCode: o, keyword: s, it: c } = e, { opts: l, self: u } = c;
			if (!l.validateFormats) return;
			let d = new t.KeywordCxt(c, u.RULES.all.format.definition, "format");
			d.$data ? f() : p();
			function f() {
				let t = r.scopeValue("formats", {
					ref: u.formats,
					code: l.code.formats
				}), i = r.const("fmt", (0, n._)`${t}[${d.schemaCode}]`);
				e.fail$data((0, n.or)((0, n._)`typeof ${i} != "object"`, (0, n._)`${i} instanceof RegExp`, (0, n._)`typeof ${i}.compare != "function"`, m(i)));
			}
			function p() {
				let t = d.schema, i = u.formats[t];
				if (!i || i === !0) return;
				if (typeof i != "object" || i instanceof RegExp || typeof i.compare != "function") throw Error(`"${s}": format "${t}" does not define "compare" function`);
				let a = r.scopeValue("formats", {
					key: t,
					ref: i,
					code: l.code.formats ? (0, n._)`${l.code.formats}${(0, n.getProperty)(t)}` : void 0
				});
				e.fail$data(m(a));
			}
			function m(e) {
				return (0, n._)`${e}.compare(${a}, ${o}) ${i[s].fail} 0`;
			}
		},
		dependencies: ["format"]
	}, e.default = (t) => (t.addKeyword(e.formatLimitDefinition), t);
})), rr = /* @__PURE__ */ s(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var n = Wn(), r = nr(), i = h(), a = new i.Name("fullFormats"), o = new i.Name("fastFormats"), s = (e, t = { keywords: !0 }) => {
		if (Array.isArray(t)) return c(e, t, n.fullFormats, a), e;
		let [i, s] = t.mode === "fast" ? [n.fastFormats, o] : [n.fullFormats, a];
		return c(e, t.formats || n.formatNames, i, s), t.keywords && (0, r.default)(e), e;
	};
	s.get = (e, t = "full") => {
		let r = (t === "fast" ? n.fastFormats : n.fullFormats)[e];
		if (!r) throw Error(`Unknown format "${e}"`);
		return r;
	};
	function c(e, t, n, r) {
		var a;
		(a = e.opts.code).formats ?? (a.formats = (0, i._)`require("ajv-formats/dist/formats").${r}`);
		for (let r of t) e.addFormat(r, n[r]);
	}
	t.exports = e = s, Object.defineProperty(e, "__esModule", { value: !0 }), e.default = s;
})), ir = {
	$schema: "https://json-schema.org/draft/2020-12/schema",
	$id: "urn:repo-history-tracking:common:1",
	$defs: {
		collection_run: {
			type: "object",
			properties: {
				run_id: {
					type: "string",
					format: "uuid"
				},
				command: { enum: [
					"collect",
					"update",
					"collect_history",
					"collect_month",
					"manual"
				] },
				mode: { enum: ["rebuild", "incremental"] },
				collector_version: {
					type: "string",
					minLength: 1
				},
				started_at: {
					type: "string",
					format: "date-time",
					pattern: "Z$"
				},
				finished_at: {
					type: "string",
					format: "date-time",
					pattern: "Z$"
				},
				collection_since: {
					anyOf: [{
						type: "string",
						format: "date-time",
						pattern: "Z$"
					}, { type: "null" }],
					description: "Inclusive historical lower collection bound; null means unbounded. Observation time is recorded separately."
				},
				collection_until: {
					anyOf: [{
						type: "string",
						format: "date-time",
						pattern: "Z$"
					}, { type: "null" }],
					description: "Exclusive historical upper collection bound; null means unbounded."
				},
				requested_start_month: { anyOf: [{
					type: "string",
					pattern: "^[0-9]{4}-(0[1-9]|1[0-2])$"
				}, { type: "null" }] },
				requested_end_month: { anyOf: [{
					type: "string",
					pattern: "^[0-9]{4}-(0[1-9]|1[0-2])$"
				}, { type: "null" }] },
				parent_discovery: { anyOf: [{ enum: [
					"full",
					"bounded",
					"incremental"
				] }, { type: "null" }] },
				commit_history: { anyOf: [{ enum: [
					"full",
					"bounded",
					"incremental"
				] }, { type: "null" }] }
			},
			required: [
				"run_id",
				"command",
				"mode",
				"collector_version",
				"started_at",
				"finished_at",
				"collection_since",
				"collection_until",
				"requested_start_month",
				"requested_end_month",
				"parent_discovery",
				"commit_history"
			],
			additionalProperties: !1,
			description: "Immutable collection facts. A run UUID always identifies the same descriptor. Collection bounds describe traversal; requested month bounds describe output selection."
		},
		repository: {
			type: "object",
			properties: {
				node_id: {
					type: "string",
					minLength: 1
				},
				full_name: {
					type: "string",
					pattern: "^[^/\\s]+/[^/\\s]+$"
				},
				url: {
					type: "string",
					format: "uri",
					pattern: "^https://"
				},
				created_at: {
					type: "string",
					format: "date-time",
					pattern: "Z$"
				},
				history_start_month: {
					anyOf: [{
						type: "string",
						pattern: "^[0-9]{4}-(0[1-9]|1[0-2])$"
					}, { type: "null" }],
					description: "Earliest established history month, including repository creation and imported older activity; null means unknown, never implicit zero."
				},
				history_start_established_by: {
					anyOf: [{ $ref: "urn:repo-history-tracking:common:1#/$defs/collection_run" }, { type: "null" }],
					description: "Full-history rebuild that established the retained boundary; required together with history_start_month."
				}
			},
			required: [
				"node_id",
				"full_name",
				"url",
				"created_at",
				"history_start_month",
				"history_start_established_by"
			],
			additionalProperties: !1
		},
		monthly_metadata: {
			type: "object",
			properties: {
				repository: { $ref: "urn:repo-history-tracking:common:1#/$defs/repository" },
				month: {
					type: "string",
					pattern: "^[0-9]{4}-(0[1-9]|1[0-2])$"
				},
				month_start: {
					type: "string",
					format: "date-time",
					pattern: "Z$"
				},
				month_end: {
					type: "string",
					format: "date-time",
					pattern: "Z$"
				},
				is_partial: {
					type: "boolean",
					description: "True when coverage.as_of precedes month_end; a snapshot through collection time, not a collection failure."
				},
				provenance: {
					type: "object",
					properties: {
						created_by: { $ref: "urn:repo-history-tracking:common:1#/$defs/collection_run" },
						last_updated_by: { $ref: "urn:repo-history-tracking:common:1#/$defs/collection_run" },
						last_rebuilt_by: { $ref: "urn:repo-history-tracking:common:1#/$defs/collection_run" }
					},
					required: [
						"created_by",
						"last_updated_by",
						"last_rebuilt_by"
					],
					additionalProperties: !1,
					description: "Only original creation, latest refresh, and latest rebuild are retained. Intermediate runs can be retained in version control."
				},
				coverage: {
					type: "object",
					properties: {
						as_of: {
							type: "string",
							format: "date-time",
							pattern: "Z$"
						},
						limitations: {
							type: "array",
							items: {
								type: "string",
								minLength: 1
							}
						}
					},
					required: ["as_of", "limitations"],
					additionalProperties: !1,
					description: "Observation facts about the resulting data. as_of is not a transactional snapshot or a promise that historical records cannot change."
				},
				default_branch: { anyOf: [{
					type: "string",
					minLength: 1
				}, { type: "null" }] },
				default_branch_head: { anyOf: [{
					type: "string",
					pattern: "^[0-9a-f]{40}$"
				}, { type: "null" }] }
			},
			required: [
				"repository",
				"month",
				"month_start",
				"month_end",
				"is_partial",
				"provenance",
				"coverage",
				"default_branch",
				"default_branch_head"
			],
			additionalProperties: !1
		},
		calendar: {
			type: "object",
			properties: {
				month: {
					type: "string",
					pattern: "^[0-9]{4}-(0[1-9]|1[0-2])$"
				},
				month_start: {
					type: "string",
					format: "date-time",
					pattern: "Z$"
				},
				month_end: {
					type: "string",
					format: "date-time",
					pattern: "Z$"
				},
				is_partial: {
					type: "boolean",
					description: "True when any included source report has partial month coverage."
				}
			},
			required: [
				"month",
				"month_start",
				"month_end",
				"is_partial"
			],
			additionalProperties: !1
		},
		counts: {
			type: "object",
			properties: {
				commit: {
					type: "integer",
					minimum: 0,
					maximum: 9007199254740991
				},
				pr_opened: {
					type: "integer",
					minimum: 0,
					maximum: 9007199254740991
				},
				pr_merged: {
					type: "integer",
					minimum: 0,
					maximum: 9007199254740991
				},
				issue_opened: {
					type: "integer",
					minimum: 0,
					maximum: 9007199254740991
				},
				issue_closed: {
					type: "integer",
					minimum: 0,
					maximum: 9007199254740991
				},
				issue_reopened: {
					type: "integer",
					minimum: 0,
					maximum: 9007199254740991
				},
				issue_comment: {
					type: "integer",
					minimum: 0,
					maximum: 9007199254740991
				},
				pr_discussion_comment: {
					type: "integer",
					minimum: 0,
					maximum: 9007199254740991
				},
				pr_review_comment: {
					type: "integer",
					minimum: 0,
					maximum: 9007199254740991
				},
				pr_review: {
					type: "integer",
					minimum: 0,
					maximum: 9007199254740991
				}
			},
			required: [
				"commit",
				"pr_opened",
				"pr_merged",
				"issue_opened",
				"issue_closed",
				"issue_reopened",
				"issue_comment",
				"pr_discussion_comment",
				"pr_review_comment",
				"pr_review"
			],
			additionalProperties: !1
		},
		population: {
			type: "object",
			properties: {
				total: {
					type: "integer",
					minimum: 0,
					maximum: 9007199254740991
				},
				human: {
					type: "integer",
					minimum: 0,
					maximum: 9007199254740991
				},
				bot: {
					type: "integer",
					minimum: 0,
					maximum: 9007199254740991
				},
				unlinked_git: {
					type: "integer",
					minimum: 0,
					maximum: 9007199254740991
				}
			},
			required: [
				"total",
				"human",
				"bot",
				"unlinked_git"
			],
			additionalProperties: !1
		},
		summaries: {
			type: "object",
			properties: {
				repository_counts: { $ref: "urn:repo-history-tracking:common:1#/$defs/counts" },
				actor_counts: {
					type: "object",
					propertyNames: {
						type: "string",
						minLength: 1
					},
					additionalProperties: { $ref: "urn:repo-history-tracking:common:1#/$defs/counts" }
				},
				distinct_actors: { $ref: "urn:repo-history-tracking:common:1#/$defs/population" },
				distinct_actors_by_type: {
					type: "object",
					properties: {
						commit: { $ref: "urn:repo-history-tracking:common:1#/$defs/population" },
						pr_opened: { $ref: "urn:repo-history-tracking:common:1#/$defs/population" },
						pr_merged: { $ref: "urn:repo-history-tracking:common:1#/$defs/population" },
						issue_opened: { $ref: "urn:repo-history-tracking:common:1#/$defs/population" },
						issue_closed: { $ref: "urn:repo-history-tracking:common:1#/$defs/population" },
						issue_reopened: { $ref: "urn:repo-history-tracking:common:1#/$defs/population" },
						issue_comment: { $ref: "urn:repo-history-tracking:common:1#/$defs/population" },
						pr_discussion_comment: { $ref: "urn:repo-history-tracking:common:1#/$defs/population" },
						pr_review_comment: { $ref: "urn:repo-history-tracking:common:1#/$defs/population" },
						pr_review: { $ref: "urn:repo-history-tracking:common:1#/$defs/population" }
					},
					required: [
						"commit",
						"pr_opened",
						"pr_merged",
						"issue_opened",
						"issue_closed",
						"issue_reopened",
						"issue_comment",
						"pr_discussion_comment",
						"pr_review_comment",
						"pr_review"
					],
					additionalProperties: !1
				},
				unattributed_total: {
					type: "integer",
					minimum: 0
				},
				unattributed_by_type: { $ref: "urn:repo-history-tracking:common:1#/$defs/counts" }
			},
			required: [
				"repository_counts",
				"actor_counts",
				"distinct_actors",
				"distinct_actors_by_type",
				"unattributed_total",
				"unattributed_by_type"
			],
			additionalProperties: !1
		}
	}
}, ar = {
	$schema: "https://json-schema.org/draft/2020-12/schema",
	$id: "urn:repo-history-tracking:viz-summary:1",
	type: "object",
	properties: {
		schema_version: { const: "1" },
		display_name: {
			type: "string",
			pattern: "\\S"
		},
		repositories: {
			type: "array",
			minItems: 1,
			items: { $ref: "urn:repo-history-tracking:common:1#/$defs/repository" }
		},
		actors: {
			type: "object",
			propertyNames: {
				type: "string",
				minLength: 1
			},
			additionalProperties: { enum: [
				"human",
				"bot",
				"unlinked_git"
			] }
		},
		months: {
			type: "array",
			minItems: 1,
			items: {
				type: "object",
				properties: {
					metadata: { $ref: "urn:repo-history-tracking:common:1#/$defs/calendar" },
					summaries: { $ref: "urn:repo-history-tracking:common:1#/$defs/summaries" },
					source_reports: {
						type: "array",
						minItems: 1,
						items: {
							type: "object",
							properties: {
								metadata: { $ref: "urn:repo-history-tracking:common:1#/$defs/monthly_metadata" },
								summaries: { $ref: "urn:repo-history-tracking:common:1#/$defs/summaries" }
							},
							required: ["metadata", "summaries"],
							additionalProperties: !1
						}
					}
				},
				required: [
					"metadata",
					"summaries",
					"source_reports"
				],
				additionalProperties: !1
			}
		}
	},
	required: [
		"schema_version",
		"display_name",
		"repositories",
		"actors",
		"months"
	],
	additionalProperties: !1
}, or = /* @__PURE__ */ u(Un(), 1), sr = /* @__PURE__ */ u(rr(), 1), cr = {
	commit: "Commits",
	issue_opened: "Issues opened",
	issue_closed: "Issues closed",
	issue_reopened: "Issues reopened",
	pr_opened: "Pull requests opened",
	pr_merged: "Pull requests merged",
	issue_comment: "Issue comments",
	pr_discussion_comment: "PR discussion comments",
	pr_review: "PR reviews",
	pr_review_comment: "PR review comments"
}, lr = Object.keys(cr), ur = new or.default({
	allErrors: !0,
	strict: !1,
	ownProperties: !0
});
(0, sr.default)(ur), ur.addSchema(ir);
var dr = ur.compile(ar);
function fr(e) {
	let [t, n] = e.split("-").map(Number);
	return n === 12 ? `${String(t + 1).padStart(4, "0")}-01` : `${String(t).padStart(4, "0")}-${String(n + 1).padStart(2, "0")}`;
}
function pr(e) {
	let t = (t) => {
		throw Error(`${e.name}: ${t}`);
	}, n;
	try {
		n = JSON.parse(e.text);
	} catch {
		return t("invalid JSON.");
	}
	if (typeof n == "object" && n && ("files" in n || "activities" in n)) return t("Load a history summary generated with repo-history summarize --input-directory REPORTS.");
	if (!dr(n)) return t(`invalid v1 visualization summary — ${dr.errors?.slice(0, 3).map((e) => `${e.instancePath || "/"} ${e.message}`).join("; ")}`);
	let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), o = (e, t) => {
		if (e === t) return !0;
		if (!e || !t || typeof e != "object" || typeof t != "object") return !1;
		let n = e, r = t;
		return Object.keys(n).length === Object.keys(r).length && Object.keys(n).every((e) => Object.hasOwn(r, e) && o(n[e], r[e]));
	}, s = (e) => {
		(e.startsWith("0000-") || e === "9999-12") && t("unsupported calendar month.");
	}, c = (e) => {
		s(e.month), (Date.parse(e.month_start) !== Date.parse(`${e.month}-01T00:00:00Z`) || Date.parse(e.month_end) !== Date.parse(`${fr(e.month)}-01T00:00:00Z`)) && t("month boundaries must match reporting month in UTC.");
	}, l = (e) => {
		let n = a.get(e.run_id);
		n && !o(n, e) && t("conflicting descriptors for run ID."), a.set(e.run_id, e), Date.parse(e.started_at) > Date.parse(e.finished_at) && t("invalid collection interval."), e.collection_since && e.collection_until && Date.parse(e.collection_since) >= Date.parse(e.collection_until) && t("invalid collection bounds.");
		for (let t of [e.requested_start_month, e.requested_end_month]) t && s(t);
		e.requested_start_month && e.requested_end_month && e.requested_start_month > e.requested_end_month && t("invalid requested month range.");
	}, u = (e) => {
		let n = e.history_start_established_by, r = e.history_start_month;
		r === null != (n === null) && t("history start and evidence must both be present or null."), n && r && (l(n), s(r), (n.mode !== "rebuild" || n.collection_since !== null || n.parent_discovery !== "full" || n.commit_history !== "full") && t("history start requires full-history evidence."), r > e.created_at.slice(0, 7) && t("history starts after repository creation month."));
	}, d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
	for (let e of n.repositories) d.has(e.node_id) && t("duplicate repository."), u(e), d.set(e.node_id, e), f.set(e.node_id, []);
	let p = (e) => ({
		total: e.length,
		human: e.filter((e) => n.actors[e] === "human").length,
		bot: e.filter((e) => n.actors[e] === "bot").length,
		unlinked_git: e.filter((e) => n.actors[e] === "unlinked_git").length
	}), m = (e, t) => Object.keys(t).every((n) => e[n] === t[n]), h = (e) => {
		let r = Object.entries(e.actor_counts);
		for (let [e, a] of r) Object.hasOwn(n.actors, e) || t(`unknown actor ${e}.`), Object.values(a).some((e) => e > 0) || t(`actor ${e} has no participation.`), i.add(e);
		m(e.distinct_actors, p(r.map(([e]) => e))) || t("distinct actor population disagrees with actor counts."), e.unattributed_total !== Object.values(e.unattributed_by_type).reduce((e, t) => e + t, 0) && t("unattributed total disagrees with type counts.");
		for (let n of lr) {
			let i = r.filter(([, e]) => e[n] > 0).map(([e]) => e);
			m(e.distinct_actors_by_type[n], p(i)) || t(`${n} population disagrees with actor counts.`);
			let a = e.repository_counts[n], o = e.unattributed_by_type[n];
			o > a && t(`${n} unattributed exceeds repository count.`), r.some(([, e]) => e[n] > a) && t(`${n} actor count exceeds repository count.`);
			let s = r.reduce((e, [, t]) => e + t[n], 0);
			(n === "commit" ? s < a - o : s + o !== a) && t(`${n} repository count disagrees with attribution.`);
		}
	};
	for (let e of n.months) {
		let n = e.metadata;
		r.has(n.month) && t(`duplicate month ${n.month}.`), r.add(n.month), c(n);
		let i = /* @__PURE__ */ new Set(), a = Object.fromEntries(lr.map((e) => [e, 0])), s = { ...a }, p = /* @__PURE__ */ new Map();
		for (let r of e.source_reports) {
			let e = r.metadata, m = d.get(e.repository.node_id);
			m || t("unknown source repository.");
			let g = m;
			i.has(g.node_id) && t("duplicate repository source report."), i.add(g.node_id), c(e), u(e.repository), f.get(g.node_id).push(e.repository), [
				"month",
				"month_start",
				"month_end"
			].some((t) => e[t] !== n[t]) && t("source month disagrees with aggregate month."), e.repository.created_at !== g.created_at && t("conflicting repository creation timestamp.");
			let _ = e.provenance;
			for (let e of Object.values(_)) l(e);
			(Date.parse(_.created_by.started_at) > Date.parse(_.last_rebuilt_by.started_at) || Date.parse(_.last_rebuilt_by.started_at) > Date.parse(_.last_updated_by.started_at)) && t("invalid provenance chronology."), (_.created_by.mode !== "rebuild" || _.last_rebuilt_by.mode !== "rebuild" || _.last_updated_by.mode === "rebuild" && !o(_.last_updated_by, _.last_rebuilt_by)) && t("invalid rebuild provenance.");
			let v = Date.parse(e.coverage.as_of);
			(v < Date.parse(e.month_start) || v < Date.parse(_.last_updated_by.started_at) || v > Date.parse(_.last_updated_by.finished_at)) && t("invalid coverage observation time."), e.is_partial !== v < Date.parse(e.month_end) && t("is_partial must reflect coverage as_of."), e.default_branch === null != (e.default_branch_head === null) && t("branch and head must both be present or null."), e.repository.history_start_month && e.month < e.repository.history_start_month && Object.values(r.summaries.repository_counts).some((e) => e > 0) && t("activity precedes established history start."), h(r.summaries);
			for (let e of lr) a[e] += r.summaries.repository_counts[e], s[e] += r.summaries.unattributed_by_type[e];
			for (let [e, t] of Object.entries(r.summaries.actor_counts)) {
				p.has(e) || p.set(e, Object.fromEntries(lr.map((e) => [e, 0])));
				for (let n of lr) p.get(e)[n] += t[n];
			}
		}
		if (d.size > 1) for (let e of d.values()) !i.has(e.node_id) && (!e.history_start_month || n.month >= e.history_start_month) && t(`missing report for ${e.node_id} in ${n.month}.`);
		n.is_partial !== e.source_reports.some((e) => e.metadata.is_partial) && t("is_partial disagrees with sources."), h(e.summaries), (!o(e.summaries.repository_counts, a) || !o(e.summaries.unattributed_by_type, s) || !o(e.summaries.actor_counts, Object.fromEntries(p))) && t("aggregate summary disagrees with source reports.");
	}
	if (d.size > 1) {
		let e = [...r].sort();
		for (let n = e[0]; n <= e.at(-1); n = fr(n)) r.has(n) || t(`missing aggregate month ${n}.`);
	}
	for (let [e, n] of f) {
		let r = n.flatMap((e) => e.history_start_month ? [e.history_start_month] : []).sort();
		r.length && d.get(e).history_start_month !== r[0] && t("registry must retain earliest source history boundary.");
	}
	return i.size !== Object.keys(n.actors).length && t("classification lookup contains unused actors."), n.months.sort((e, t) => e.metadata.month.localeCompare(t.metadata.month)), n;
}
async function mr(e, t, n = fetch, r) {
	let i = new URL(e, t);
	if (!["http:", "https:"].includes(i.protocol)) throw Error("Use an HTTP or HTTPS summary URL.");
	let a = await n(i.href, {
		credentials: "omit",
		...r ? { signal: r } : {}
	});
	if (!a.ok) throw Error(`History summary: HTTP ${a.status}.`);
	return pr({
		name: "History summary",
		text: await a.text()
	});
}
//#endregion
//#region src/series.ts
function hr(e, t) {
	if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(t.start) || !/^\d{4}-(0[1-9]|1[0-2])$/.test(t.end) || t.start > t.end) throw Error("Choose a valid start month on or before the end month.");
	let n = [];
	for (let e = t.start; n.push(e), e !== t.end; e = fr(e));
	let r = new Map(e.months.map((e) => [e.metadata.month, e]));
	if (t.metric === "balance") {
		if (t.mode !== "cumulative") throw Error("Issue / PR balance requires cumulative mode.");
		let e = (t.balanceTypes ?? ["issues", "prs"]).map((e) => ({
			key: e,
			label: e === "issues" ? "Issue balance" : "PR balance",
			values: []
		})), i = {
			issues: 0,
			prs: 0
		}, a = [], o = [];
		for (let t of n) {
			let n = r.get(t);
			if (!n) {
				a.push(t), e.forEach((e) => e.values.push(null));
				continue;
			}
			n.metadata.is_partial && o.push(t);
			let s = n.summaries.repository_counts;
			i.issues += s.issue_opened + s.issue_reopened - s.issue_closed, i.prs += s.pr_opened - s.pr_merged, e.forEach((e) => e.values.push(i[e.key]));
		}
		return {
			months: n,
			series: e,
			missing: a,
			partial: o
		};
	}
	let i = t.metric === "total-contributors", a = i ? lr : t.metric === "commits" ? ["commit"] : t.metric === "github-activities" ? t.types.filter((e) => e !== "commit") : t.types, o = i ? ["combined"] : [...a, ...t.combined && t.metric !== "commits" && a.length ? ["combined"] : []], s = o.map((e) => ({
		key: e,
		label: e === "combined" ? i ? "Total contributors" : "Combined total" : cr[e],
		values: []
	})), c = new Map(o.map((e) => [e, 0])), l = new Map(o.map((e) => [e, /* @__PURE__ */ new Set()])), u = [], d = [];
	for (let f of n) {
		let n = r.get(f);
		if (!n) {
			u.push(f);
			for (let e of s) e.values.push(null);
			continue;
		}
		n.metadata.is_partial && d.push(f);
		let p = new Map(o.map((e) => [e, 0])), m = new Map(o.map((e) => [e, /* @__PURE__ */ new Set()]));
		for (let r of a) {
			let a = i ? ["combined"] : t.combined && t.metric !== "commits" ? [r, "combined"] : [r], o = Object.entries(n.summaries.actor_counts).filter(([n, i]) => i[r] > 0 && t.classifications.includes(e.actors[n])), s = t.metric === "github-activities" ? o.reduce((e, [, t]) => e + t[r], 0) + (t.classifications.includes("unlinked_git") ? n.summaries.unattributed_by_type[r] : 0) : n.summaries.repository_counts[r];
			for (let e of a) {
				p.set(e, p.get(e) + s);
				for (let [t] of o) m.get(e).add(t);
			}
		}
		for (let e of s) {
			let n = e.key;
			c.set(n, c.get(n) + p.get(n));
			for (let e of m.get(n)) l.get(n).add(e);
			e.values.push(t.metric === "activities" || t.metric === "commits" || t.metric === "github-activities" ? t.mode === "monthly" ? p.get(n) : c.get(n) : t.mode === "monthly" ? m.get(n).size : l.get(n).size);
		}
	}
	return {
		months: n,
		series: s,
		missing: u,
		partial: d
	};
}
//#endregion
//#region src/csv.ts
function gr(e) {
	return [[
		"Month (UTC)",
		"Report status",
		...e.series.map((e) => e.label)
	], ...e.months.map((t, n) => [
		t,
		e.missing.includes(t) ? "No report" : e.partial.includes(t) ? "Partial" : "Collected",
		...e.series.map((e) => e.values[n] === null ? "No report" : String(e.values[n]))
	])].map((e) => e.map((e) => `"${e.replace(/"/g, "\"\"")}"`).join(",")).join("\r\n") + "\r\n";
}
//#endregion
//#region node_modules/@kurkle/color/dist/color.esm.js
function _r(e) {
	return e + .5 | 0;
}
var vr = (e, t, n) => Math.max(Math.min(e, n), t);
function yr(e) {
	return vr(_r(e * 2.55), 0, 255);
}
function br(e) {
	return vr(_r(e * 255), 0, 255);
}
function xr(e) {
	return vr(_r(e / 2.55) / 100, 0, 1);
}
function Sr(e) {
	return vr(_r(e * 100), 0, 100);
}
var P = {
	0: 0,
	1: 1,
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	A: 10,
	B: 11,
	C: 12,
	D: 13,
	E: 14,
	F: 15,
	a: 10,
	b: 11,
	c: 12,
	d: 13,
	e: 14,
	f: 15
}, Cr = [..."0123456789ABCDEF"], wr = (e) => Cr[e & 15], Tr = (e) => Cr[(e & 240) >> 4] + Cr[e & 15], Er = (e) => (e & 240) >> 4 == (e & 15), Dr = (e) => Er(e.r) && Er(e.g) && Er(e.b) && Er(e.a);
function Or(e) {
	var t = e.length, n;
	return e[0] === "#" && (t === 4 || t === 5 ? n = {
		r: 255 & P[e[1]] * 17,
		g: 255 & P[e[2]] * 17,
		b: 255 & P[e[3]] * 17,
		a: t === 5 ? P[e[4]] * 17 : 255
	} : (t === 7 || t === 9) && (n = {
		r: P[e[1]] << 4 | P[e[2]],
		g: P[e[3]] << 4 | P[e[4]],
		b: P[e[5]] << 4 | P[e[6]],
		a: t === 9 ? P[e[7]] << 4 | P[e[8]] : 255
	})), n;
}
var kr = (e, t) => e < 255 ? t(e) : "";
function Ar(e) {
	var t = Dr(e) ? wr : Tr;
	return e ? "#" + t(e.r) + t(e.g) + t(e.b) + kr(e.a, t) : void 0;
}
var jr = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Mr(e, t, n) {
	let r = t * Math.min(n, 1 - n), i = (t, i = (t + e / 30) % 12) => n - r * Math.max(Math.min(i - 3, 9 - i, 1), -1);
	return [
		i(0),
		i(8),
		i(4)
	];
}
function Nr(e, t, n) {
	let r = (r, i = (r + e / 60) % 6) => n - n * t * Math.max(Math.min(i, 4 - i, 1), 0);
	return [
		r(5),
		r(3),
		r(1)
	];
}
function Pr(e, t, n) {
	let r = Mr(e, 1, .5), i;
	for (t + n > 1 && (i = 1 / (t + n), t *= i, n *= i), i = 0; i < 3; i++) r[i] *= 1 - t - n, r[i] += t;
	return r;
}
function Fr(e, t, n, r, i) {
	return e === i ? (t - n) / r + (t < n ? 6 : 0) : t === i ? (n - e) / r + 2 : (e - t) / r + 4;
}
function Ir(e) {
	let t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.max(t, n, r), a = Math.min(t, n, r), o = (i + a) / 2, s, c, l;
	return i !== a && (l = i - a, c = o > .5 ? l / (2 - i - a) : l / (i + a), s = Fr(t, n, r, l, i), s = s * 60 + .5), [
		s | 0,
		c || 0,
		o
	];
}
function Lr(e, t, n, r) {
	return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, r)).map(br);
}
function Rr(e, t, n) {
	return Lr(Mr, e, t, n);
}
function zr(e, t, n) {
	return Lr(Pr, e, t, n);
}
function Br(e, t, n) {
	return Lr(Nr, e, t, n);
}
function Vr(e) {
	return (e % 360 + 360) % 360;
}
function Hr(e) {
	let t = jr.exec(e), n = 255, r;
	if (!t) return;
	t[5] !== r && (n = t[6] ? yr(+t[5]) : br(+t[5]));
	let i = Vr(+t[2]), a = t[3] / 100, o = t[4] / 100;
	return r = t[1] === "hwb" ? zr(i, a, o) : t[1] === "hsv" ? Br(i, a, o) : Rr(i, a, o), {
		r: r[0],
		g: r[1],
		b: r[2],
		a: n
	};
}
function Ur(e, t) {
	var n = Ir(e);
	n[0] = Vr(n[0] + t), n = Rr(n), e.r = n[0], e.g = n[1], e.b = n[2];
}
function Wr(e) {
	if (!e) return;
	let t = Ir(e), n = t[0], r = Sr(t[1]), i = Sr(t[2]);
	return e.a < 255 ? `hsla(${n}, ${r}%, ${i}%, ${xr(e.a)})` : `hsl(${n}, ${r}%, ${i}%)`;
}
var Gr = {
	x: "dark",
	Z: "light",
	Y: "re",
	X: "blu",
	W: "gr",
	V: "medium",
	U: "slate",
	A: "ee",
	T: "ol",
	S: "or",
	B: "ra",
	C: "lateg",
	D: "ights",
	R: "in",
	Q: "turquois",
	E: "hi",
	P: "ro",
	O: "al",
	N: "le",
	M: "de",
	L: "yello",
	F: "en",
	K: "ch",
	G: "arks",
	H: "ea",
	I: "ightg",
	J: "wh"
}, Kr = {
	OiceXe: "f0f8ff",
	antiquewEte: "faebd7",
	aqua: "ffff",
	aquamarRe: "7fffd4",
	azuY: "f0ffff",
	beige: "f5f5dc",
	bisque: "ffe4c4",
	black: "0",
	blanKedOmond: "ffebcd",
	Xe: "ff",
	XeviTet: "8a2be2",
	bPwn: "a52a2a",
	burlywood: "deb887",
	caMtXe: "5f9ea0",
	KartYuse: "7fff00",
	KocTate: "d2691e",
	cSO: "ff7f50",
	cSnflowerXe: "6495ed",
	cSnsilk: "fff8dc",
	crimson: "dc143c",
	cyan: "ffff",
	xXe: "8b",
	xcyan: "8b8b",
	xgTMnPd: "b8860b",
	xWay: "a9a9a9",
	xgYF: "6400",
	xgYy: "a9a9a9",
	xkhaki: "bdb76b",
	xmagFta: "8b008b",
	xTivegYF: "556b2f",
	xSange: "ff8c00",
	xScEd: "9932cc",
	xYd: "8b0000",
	xsOmon: "e9967a",
	xsHgYF: "8fbc8f",
	xUXe: "483d8b",
	xUWay: "2f4f4f",
	xUgYy: "2f4f4f",
	xQe: "ced1",
	xviTet: "9400d3",
	dAppRk: "ff1493",
	dApskyXe: "bfff",
	dimWay: "696969",
	dimgYy: "696969",
	dodgerXe: "1e90ff",
	fiYbrick: "b22222",
	flSOwEte: "fffaf0",
	foYstWAn: "228b22",
	fuKsia: "ff00ff",
	gaRsbSo: "dcdcdc",
	ghostwEte: "f8f8ff",
	gTd: "ffd700",
	gTMnPd: "daa520",
	Way: "808080",
	gYF: "8000",
	gYFLw: "adff2f",
	gYy: "808080",
	honeyMw: "f0fff0",
	hotpRk: "ff69b4",
	RdianYd: "cd5c5c",
	Rdigo: "4b0082",
	ivSy: "fffff0",
	khaki: "f0e68c",
	lavFMr: "e6e6fa",
	lavFMrXsh: "fff0f5",
	lawngYF: "7cfc00",
	NmoncEffon: "fffacd",
	ZXe: "add8e6",
	ZcSO: "f08080",
	Zcyan: "e0ffff",
	ZgTMnPdLw: "fafad2",
	ZWay: "d3d3d3",
	ZgYF: "90ee90",
	ZgYy: "d3d3d3",
	ZpRk: "ffb6c1",
	ZsOmon: "ffa07a",
	ZsHgYF: "20b2aa",
	ZskyXe: "87cefa",
	ZUWay: "778899",
	ZUgYy: "778899",
	ZstAlXe: "b0c4de",
	ZLw: "ffffe0",
	lime: "ff00",
	limegYF: "32cd32",
	lRF: "faf0e6",
	magFta: "ff00ff",
	maPon: "800000",
	VaquamarRe: "66cdaa",
	VXe: "cd",
	VScEd: "ba55d3",
	VpurpN: "9370db",
	VsHgYF: "3cb371",
	VUXe: "7b68ee",
	VsprRggYF: "fa9a",
	VQe: "48d1cc",
	VviTetYd: "c71585",
	midnightXe: "191970",
	mRtcYam: "f5fffa",
	mistyPse: "ffe4e1",
	moccasR: "ffe4b5",
	navajowEte: "ffdead",
	navy: "80",
	Tdlace: "fdf5e6",
	Tive: "808000",
	TivedBb: "6b8e23",
	Sange: "ffa500",
	SangeYd: "ff4500",
	ScEd: "da70d6",
	pOegTMnPd: "eee8aa",
	pOegYF: "98fb98",
	pOeQe: "afeeee",
	pOeviTetYd: "db7093",
	papayawEp: "ffefd5",
	pHKpuff: "ffdab9",
	peru: "cd853f",
	pRk: "ffc0cb",
	plum: "dda0dd",
	powMrXe: "b0e0e6",
	purpN: "800080",
	YbeccapurpN: "663399",
	Yd: "ff0000",
	Psybrown: "bc8f8f",
	PyOXe: "4169e1",
	saddNbPwn: "8b4513",
	sOmon: "fa8072",
	sandybPwn: "f4a460",
	sHgYF: "2e8b57",
	sHshell: "fff5ee",
	siFna: "a0522d",
	silver: "c0c0c0",
	skyXe: "87ceeb",
	UXe: "6a5acd",
	UWay: "708090",
	UgYy: "708090",
	snow: "fffafa",
	sprRggYF: "ff7f",
	stAlXe: "4682b4",
	tan: "d2b48c",
	teO: "8080",
	tEstN: "d8bfd8",
	tomato: "ff6347",
	Qe: "40e0d0",
	viTet: "ee82ee",
	JHt: "f5deb3",
	wEte: "ffffff",
	wEtesmoke: "f5f5f5",
	Lw: "ffff00",
	LwgYF: "9acd32"
};
function qr() {
	let e = {}, t = Object.keys(Kr), n = Object.keys(Gr), r, i, a, o, s;
	for (r = 0; r < t.length; r++) {
		for (o = s = t[r], i = 0; i < n.length; i++) a = n[i], s = s.replace(a, Gr[a]);
		a = parseInt(Kr[o], 16), e[s] = [
			a >> 16 & 255,
			a >> 8 & 255,
			a & 255
		];
	}
	return e;
}
var Jr;
function Yr(e) {
	Jr || (Jr = qr(), Jr.transparent = [
		0,
		0,
		0,
		0
	]);
	let t = Jr[e.toLowerCase()];
	return t && {
		r: t[0],
		g: t[1],
		b: t[2],
		a: t.length === 4 ? t[3] : 255
	};
}
var Xr = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Zr(e) {
	let t = Xr.exec(e), n = 255, r, i, a;
	if (t) {
		if (t[7] !== r) {
			let e = +t[7];
			n = t[8] ? yr(e) : vr(e * 255, 0, 255);
		}
		return r = +t[1], i = +t[3], a = +t[5], r = 255 & (t[2] ? yr(r) : vr(r, 0, 255)), i = 255 & (t[4] ? yr(i) : vr(i, 0, 255)), a = 255 & (t[6] ? yr(a) : vr(a, 0, 255)), {
			r,
			g: i,
			b: a,
			a: n
		};
	}
}
function Qr(e) {
	return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${xr(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`);
}
var $r = (e) => e <= .0031308 ? e * 12.92 : e ** (1 / 2.4) * 1.055 - .055, ei = (e) => e <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
function ti(e, t, n) {
	let r = ei(xr(e.r)), i = ei(xr(e.g)), a = ei(xr(e.b));
	return {
		r: br($r(r + n * (ei(xr(t.r)) - r))),
		g: br($r(i + n * (ei(xr(t.g)) - i))),
		b: br($r(a + n * (ei(xr(t.b)) - a))),
		a: e.a + n * (t.a - e.a)
	};
}
function ni(e, t, n) {
	if (e) {
		let r = Ir(e);
		r[t] = Math.max(0, Math.min(r[t] + r[t] * n, t === 0 ? 360 : 1)), r = Rr(r), e.r = r[0], e.g = r[1], e.b = r[2];
	}
}
function ri(e, t) {
	return e && Object.assign(t || {}, e);
}
function ii(e) {
	var t = {
		r: 0,
		g: 0,
		b: 0,
		a: 255
	};
	return Array.isArray(e) ? e.length >= 3 && (t = {
		r: e[0],
		g: e[1],
		b: e[2],
		a: 255
	}, e.length > 3 && (t.a = br(e[3]))) : (t = ri(e, {
		r: 0,
		g: 0,
		b: 0,
		a: 1
	}), t.a = br(t.a)), t;
}
function ai(e) {
	return e.charAt(0) === "r" ? Zr(e) : Hr(e);
}
var oi = class e {
	constructor(t) {
		if (t instanceof e) return t;
		let n = typeof t, r;
		n === "object" ? r = ii(t) : n === "string" && (r = Or(t) || Yr(t) || ai(t)), this._rgb = r, this._valid = !!r;
	}
	get valid() {
		return this._valid;
	}
	get rgb() {
		var e = ri(this._rgb);
		return e && (e.a = xr(e.a)), e;
	}
	set rgb(e) {
		this._rgb = ii(e);
	}
	rgbString() {
		return this._valid ? Qr(this._rgb) : void 0;
	}
	hexString() {
		return this._valid ? Ar(this._rgb) : void 0;
	}
	hslString() {
		return this._valid ? Wr(this._rgb) : void 0;
	}
	mix(e, t) {
		if (e) {
			let n = this.rgb, r = e.rgb, i, a = t === i ? .5 : t, o = 2 * a - 1, s = n.a - r.a, c = ((o * s === -1 ? o : (o + s) / (1 + o * s)) + 1) / 2;
			i = 1 - c, n.r = 255 & c * n.r + i * r.r + .5, n.g = 255 & c * n.g + i * r.g + .5, n.b = 255 & c * n.b + i * r.b + .5, n.a = a * n.a + (1 - a) * r.a, this.rgb = n;
		}
		return this;
	}
	interpolate(e, t) {
		return e && (this._rgb = ti(this._rgb, e._rgb, t)), this;
	}
	clone() {
		return new e(this.rgb);
	}
	alpha(e) {
		return this._rgb.a = br(e), this;
	}
	clearer(e) {
		let t = this._rgb;
		return t.a *= 1 - e, this;
	}
	greyscale() {
		let e = this._rgb;
		return e.r = e.g = e.b = _r(e.r * .3 + e.g * .59 + e.b * .11), this;
	}
	opaquer(e) {
		let t = this._rgb;
		return t.a *= 1 + e, this;
	}
	negate() {
		let e = this._rgb;
		return e.r = 255 - e.r, e.g = 255 - e.g, e.b = 255 - e.b, this;
	}
	lighten(e) {
		return ni(this._rgb, 2, e), this;
	}
	darken(e) {
		return ni(this._rgb, 2, -e), this;
	}
	saturate(e) {
		return ni(this._rgb, 1, e), this;
	}
	desaturate(e) {
		return ni(this._rgb, 1, -e), this;
	}
	rotate(e) {
		return Ur(this._rgb, e), this;
	}
};
//#endregion
//#region node_modules/chart.js/dist/chunks/helpers.dataset.js
function si() {}
var ci = (() => {
	let e = 0;
	return () => e++;
})();
function F(e) {
	return e == null;
}
function I(e) {
	if (Array.isArray && Array.isArray(e)) return !0;
	let t = Object.prototype.toString.call(e);
	return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function L(e) {
	return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function R(e) {
	return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function z(e, t) {
	return R(e) ? e : t;
}
function B(e, t) {
	return e === void 0 ? t : e;
}
var li = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
function V(e, t, n) {
	if (e && typeof e.call == "function") return e.apply(n, t);
}
function H(e, t, n, r) {
	let i, a, o;
	if (I(e)) {
		if (a = e.length, r) for (i = a - 1; i >= 0; i--) t.call(n, e[i], i);
		else for (i = 0; i < a; i++) t.call(n, e[i], i);
	} else if (L(e)) for (o = Object.keys(e), a = o.length, i = 0; i < a; i++) t.call(n, e[o[i]], o[i]);
}
function ui(e, t) {
	let n, r, i, a;
	if (!e || !t || e.length !== t.length) return !1;
	for (n = 0, r = e.length; n < r; ++n) if (i = e[n], a = t[n], i.datasetIndex !== a.datasetIndex || i.index !== a.index) return !1;
	return !0;
}
function di(e) {
	if (I(e)) return e.map(di);
	if (L(e)) {
		let t = Object.create(null), n = Object.keys(e), r = n.length, i = 0;
		for (; i < r; ++i) t[n[i]] = di(e[n[i]]);
		return t;
	}
	return e;
}
function fi(e) {
	return [
		"__proto__",
		"prototype",
		"constructor"
	].indexOf(e) === -1;
}
function pi(e, t, n, r) {
	if (!fi(e)) return;
	let i = t[e], a = n[e];
	L(i) && L(a) ? mi(i, a, r) : t[e] = di(a);
}
function mi(e, t, n) {
	let r = I(t) ? t : [t], i = r.length;
	if (!L(e)) return e;
	n ||= {};
	let a = n.merger || pi, o;
	for (let t = 0; t < i; ++t) {
		if (o = r[t], !L(o)) continue;
		let i = Object.keys(o);
		for (let t = 0, r = i.length; t < r; ++t) a(i[t], e, o, n);
	}
	return e;
}
function hi(e, t) {
	return mi(e, t, { merger: gi });
}
function gi(e, t, n) {
	if (!fi(e)) return;
	let r = t[e], i = n[e];
	L(r) && L(i) ? hi(r, i) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = di(i));
}
var _i = {
	"": (e) => e,
	x: (e) => e.x,
	y: (e) => e.y
};
function vi(e) {
	let t = e.split("."), n = [], r = "";
	for (let e of t) r += e, r.endsWith("\\") ? r = r.slice(0, -1) + "." : (n.push(r), r = "");
	return n;
}
function yi(e) {
	let t = vi(e);
	return (e) => {
		for (let n of t) {
			if (n === "") break;
			e &&= e[n];
		}
		return e;
	};
}
function bi(e, t) {
	return (_i[t] || (_i[t] = yi(t)))(e);
}
function xi(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
var Si = (e) => e !== void 0, Ci = (e) => typeof e == "function", wi = (e, t) => {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
};
function Ti(e) {
	return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
var U = Math.PI, W = 2 * U, Ei = W + U, Di = Infinity, Oi = U / 180, G = U / 2, ki = U / 4, Ai = U * 2 / 3, ji = Math.log10, Mi = Math.sign;
function Ni(e, t, n) {
	return Math.abs(e - t) < n;
}
function Pi(e) {
	let t = Math.round(e);
	e = Ni(e, t, e / 1e3) ? t : e;
	let n = 10 ** Math.floor(ji(e)), r = e / n;
	return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n;
}
function Fi(e) {
	let t = [], n = Math.sqrt(e), r = 1;
	for (; r < n; r++) e % r === 0 && (t.push(r), t.push(e / r));
	return n === (n | 0) && t.push(n), t.sort((e, t) => e - t).pop(), t;
}
function Ii(e) {
	return typeof e == "symbol" || typeof e == "object" && !!e && !(Symbol.toPrimitive in e || "toString" in e || "valueOf" in e);
}
function Li(e) {
	return !Ii(e) && !isNaN(parseFloat(e)) && isFinite(e);
}
function Ri(e, t) {
	let n = Math.round(e);
	return n - t <= e && n + t >= e;
}
function zi(e, t, n) {
	let r, i, a;
	for (r = 0, i = e.length; r < i; r++) a = e[r][n], isNaN(a) || (t.min = Math.min(t.min, a), t.max = Math.max(t.max, a));
}
function Bi(e) {
	return U / 180 * e;
}
function Vi(e) {
	return 180 / U * e;
}
function Hi(e) {
	if (!R(e)) return;
	let t = 1, n = 0;
	for (; Math.round(e * t) / t !== e;) t *= 10, n++;
	return n;
}
function Ui(e, t) {
	let n = t.x - e.x, r = t.y - e.y, i = Math.sqrt(n * n + r * r), a = Math.atan2(r, n);
	return a < -.5 * U && (a += W), {
		angle: a,
		distance: i
	};
}
function Wi(e, t) {
	return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
}
function Gi(e, t) {
	return (e - t + Ei) % W - U;
}
function K(e) {
	return (e % W + W) % W;
}
function Ki(e, t, n, r) {
	let i = K(e), a = K(t), o = K(n), s = K(a - i), c = K(o - i), l = K(i - a), u = K(i - o);
	return i === a || i === o || r && a === o || s > c && l < u;
}
function q(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function qi(e) {
	return q(e, -32768, 32767);
}
function Ji(e, t, n, r = 1e-6) {
	return e >= Math.min(t, n) - r && e <= Math.max(t, n) + r;
}
function Yi(e, t, n) {
	n ||= ((n) => e[n] < t);
	let r = e.length - 1, i = 0, a;
	for (; r - i > 1;) a = i + r >> 1, n(a) ? i = a : r = a;
	return {
		lo: i,
		hi: r
	};
}
var Xi = (e, t, n, r) => Yi(e, n, r ? (r) => {
	let i = e[r][t];
	return i < n || i === n && e[r + 1][t] === n;
} : (r) => e[r][t] < n), Zi = (e, t, n) => Yi(e, n, (r) => e[r][t] >= n);
function Qi(e, t, n) {
	let r = 0, i = e.length;
	for (; r < i && e[r] < t;) r++;
	for (; i > r && e[i - 1] > n;) i--;
	return r > 0 || i < e.length ? e.slice(r, i) : e;
}
var $i = [
	"push",
	"pop",
	"shift",
	"splice",
	"unshift"
];
function ea(e, t) {
	e._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", {
		configurable: !0,
		enumerable: !1,
		value: { listeners: [t] }
	}), $i.forEach((t) => {
		let n = "_onData" + xi(t), r = e[t];
		Object.defineProperty(e, t, {
			configurable: !0,
			enumerable: !1,
			value(...t) {
				let i = r.apply(this, t);
				return e._chartjs.listeners.forEach((e) => {
					typeof e[n] == "function" && e[n](...t);
				}), i;
			}
		});
	}));
}
function ta(e, t) {
	let n = e._chartjs;
	if (!n) return;
	let r = n.listeners, i = r.indexOf(t);
	i !== -1 && r.splice(i, 1), !(r.length > 0) && ($i.forEach((t) => {
		delete e[t];
	}), delete e._chartjs);
}
function na(e) {
	let t = new Set(e);
	return t.size === e.length ? e : Array.from(t);
}
var ra = function() {
	return typeof window > "u" ? function(e) {
		return e();
	} : window.requestAnimationFrame;
}();
function ia(e, t) {
	let n = [], r = !1;
	return function(...i) {
		n = i, r || (r = !0, ra.call(window, () => {
			r = !1, e.apply(t, n);
		}));
	};
}
function aa(e, t) {
	let n;
	return function(...r) {
		return t ? (clearTimeout(n), n = setTimeout(e, t, r)) : e.apply(this, r), t;
	};
}
var oa = (e) => e === "start" ? "left" : e === "end" ? "right" : "center", J = (e, t, n) => e === "start" ? t : e === "end" ? n : (t + n) / 2, sa = (e, t, n, r) => e === (r ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t;
function ca(e, t, n) {
	let r = t.length, i = 0, a = r;
	if (e._sorted) {
		let { iScale: o, vScale: s, _parsed: c } = e, l = e.dataset && e.dataset.options ? e.dataset.options.spanGaps : null, u = o.axis, { min: d, max: f, minDefined: p, maxDefined: m } = o.getUserBounds();
		if (p) {
			if (i = Math.min(Xi(c, u, d).lo, n ? r : Xi(t, u, o.getPixelForValue(d)).lo), l) {
				let e = c.slice(0, i + 1).reverse().findIndex((e) => !F(e[s.axis]));
				i -= Math.max(0, e);
			}
			i = q(i, 0, r - 1);
		}
		if (m) {
			let e = Math.max(Xi(c, o.axis, f, !0).hi + 1, n ? 0 : Xi(t, u, o.getPixelForValue(f), !0).hi + 1);
			if (l) {
				let t = c.slice(e - 1).findIndex((e) => !F(e[s.axis]));
				e += Math.max(0, t);
			}
			a = q(e, i, r) - i;
		} else a = r - i;
	}
	return {
		start: i,
		count: a
	};
}
function la(e) {
	let { xScale: t, yScale: n, _scaleRanges: r } = e, i = {
		xmin: t.min,
		xmax: t.max,
		ymin: n.min,
		ymax: n.max
	};
	if (!r) return e._scaleRanges = i, !0;
	let a = r.xmin !== t.min || r.xmax !== t.max || r.ymin !== n.min || r.ymax !== n.max;
	return Object.assign(r, i), a;
}
var ua = (e) => e === 0 || e === 1, da = (e, t, n) => -(2 ** (10 * --e) * Math.sin((e - t) * W / n)), fa = (e, t, n) => 2 ** (-10 * e) * Math.sin((e - t) * W / n) + 1, pa = {
	linear: (e) => e,
	easeInQuad: (e) => e * e,
	easeOutQuad: (e) => -e * (e - 2),
	easeInOutQuad: (e) => (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1),
	easeInCubic: (e) => e * e * e,
	easeOutCubic: (e) => --e * e * e + 1,
	easeInOutCubic: (e) => (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2),
	easeInQuart: (e) => e * e * e * e,
	easeOutQuart: (e) => -(--e * e * e * e - 1),
	easeInOutQuart: (e) => (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2),
	easeInQuint: (e) => e * e * e * e * e,
	easeOutQuint: (e) => --e * e * e * e * e + 1,
	easeInOutQuint: (e) => (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2),
	easeInSine: (e) => -Math.cos(e * G) + 1,
	easeOutSine: (e) => Math.sin(e * G),
	easeInOutSine: (e) => -.5 * (Math.cos(U * e) - 1),
	easeInExpo: (e) => e === 0 ? 0 : 2 ** (10 * (e - 1)),
	easeOutExpo: (e) => e === 1 ? 1 : -(2 ** (-10 * e)) + 1,
	easeInOutExpo: (e) => ua(e) ? e : e < .5 ? .5 * 2 ** (10 * (e * 2 - 1)) : .5 * (-(2 ** (-10 * (e * 2 - 1))) + 2),
	easeInCirc: (e) => e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
	easeOutCirc: (e) => Math.sqrt(1 - --e * e),
	easeInOutCirc: (e) => (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
	easeInElastic: (e) => ua(e) ? e : da(e, .075, .3),
	easeOutElastic: (e) => ua(e) ? e : fa(e, .075, .3),
	easeInOutElastic(e) {
		let t = .1125, n = .45;
		return ua(e) ? e : e < .5 ? .5 * da(e * 2, t, n) : .5 + .5 * fa(e * 2 - 1, t, n);
	},
	easeInBack(e) {
		return e * e * (2.70158 * e - 1.70158);
	},
	easeOutBack(e) {
		return --e * e * (2.70158 * e + 1.70158) + 1;
	},
	easeInOutBack(e) {
		let t = 1.70158;
		return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
	},
	easeInBounce: (e) => 1 - pa.easeOutBounce(1 - e),
	easeOutBounce(e) {
		let t = 7.5625, n = 2.75;
		return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375;
	},
	easeInOutBounce: (e) => e < .5 ? pa.easeInBounce(e * 2) * .5 : pa.easeOutBounce(e * 2 - 1) * .5 + .5
};
function ma(e) {
	if (e && typeof e == "object") {
		let t = e.toString();
		return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
	}
	return !1;
}
function ha(e) {
	return ma(e) ? e : new oi(e);
}
function ga(e) {
	return ma(e) ? e : new oi(e).saturate(.5).darken(.1).hexString();
}
var _a = [
	"x",
	"y",
	"borderWidth",
	"radius",
	"tension"
], va = [
	"color",
	"borderColor",
	"backgroundColor"
];
function ya(e) {
	e.set("animation", {
		delay: void 0,
		duration: 1e3,
		easing: "easeOutQuart",
		fn: void 0,
		from: void 0,
		loop: void 0,
		to: void 0,
		type: void 0
	}), e.describe("animation", {
		_fallback: !1,
		_indexable: !1,
		_scriptable: (e) => e !== "onProgress" && e !== "onComplete" && e !== "fn"
	}), e.set("animations", {
		colors: {
			type: "color",
			properties: va
		},
		numbers: {
			type: "number",
			properties: _a
		}
	}), e.describe("animations", { _fallback: "animation" }), e.set("transitions", {
		active: { animation: { duration: 400 } },
		resize: { animation: { duration: 0 } },
		show: { animations: {
			colors: { from: "transparent" },
			visible: {
				type: "boolean",
				duration: 0
			}
		} },
		hide: { animations: {
			colors: { to: "transparent" },
			visible: {
				type: "boolean",
				easing: "linear",
				fn: (e) => e | 0
			}
		} }
	});
}
function ba(e) {
	e.set("layout", {
		autoPadding: !0,
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}
	});
}
var xa = /* @__PURE__ */ new Map();
function Sa(e, t) {
	t ||= {};
	let n = e + JSON.stringify(t), r = xa.get(n);
	return r || (r = new Intl.NumberFormat(e, t), xa.set(n, r)), r;
}
function Ca(e, t, n) {
	return Sa(t, n).format(e);
}
var wa = {
	values(e) {
		return I(e) ? e : "" + e;
	},
	numeric(e, t, n) {
		if (e === 0) return "0";
		let r = this.chart.options.locale, i, a = e;
		if (n.length > 1) {
			let t = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
			(t < 1e-4 || t > 0x38d7ea4c68000) && (i = "scientific"), a = Ta(e, n);
		}
		let o = ji(Math.abs(a)), s = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0), c = {
			notation: i,
			minimumFractionDigits: s,
			maximumFractionDigits: s
		};
		return Object.assign(c, this.options.ticks.format), Ca(e, r, c);
	},
	logarithmic(e, t, n) {
		if (e === 0) return "0";
		let r = n[t].significand || e / 10 ** Math.floor(ji(e));
		return [
			1,
			2,
			3,
			5,
			10,
			15
		].includes(r) || t > .8 * n.length ? wa.numeric.call(this, e, t, n) : "";
	}
};
function Ta(e, t) {
	let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
	return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var Ea = { formatters: wa };
function Da(e) {
	e.set("scale", {
		display: !0,
		offset: !1,
		reverse: !1,
		beginAtZero: !1,
		bounds: "ticks",
		clip: !0,
		grace: 0,
		grid: {
			display: !0,
			lineWidth: 1,
			drawOnChartArea: !0,
			drawTicks: !0,
			tickLength: 8,
			tickWidth: (e, t) => t.lineWidth,
			tickColor: (e, t) => t.color,
			offset: !1
		},
		border: {
			display: !0,
			dash: [],
			dashOffset: 0,
			width: 1
		},
		title: {
			display: !1,
			text: "",
			padding: {
				top: 4,
				bottom: 4
			}
		},
		ticks: {
			minRotation: 0,
			maxRotation: 50,
			mirror: !1,
			textStrokeWidth: 0,
			textStrokeColor: "",
			padding: 3,
			display: !0,
			autoSkip: !0,
			autoSkipPadding: 3,
			labelOffset: 0,
			callback: Ea.formatters.values,
			minor: {},
			major: {},
			align: "center",
			crossAlign: "near",
			showLabelBackdrop: !1,
			backdropColor: "rgba(255, 255, 255, 0.75)",
			backdropPadding: 2
		}
	}), e.route("scale.ticks", "color", "", "color"), e.route("scale.grid", "color", "", "borderColor"), e.route("scale.border", "color", "", "borderColor"), e.route("scale.title", "color", "", "color"), e.describe("scale", {
		_fallback: !1,
		_scriptable: (e) => !e.startsWith("before") && !e.startsWith("after") && e !== "callback" && e !== "parser",
		_indexable: (e) => e !== "borderDash" && e !== "tickBorderDash" && e !== "dash"
	}), e.describe("scales", { _fallback: "scale" }), e.describe("scale.ticks", {
		_scriptable: (e) => e !== "backdropPadding" && e !== "callback",
		_indexable: (e) => e !== "backdropPadding"
	});
}
var Oa = Object.create(null), ka = Object.create(null);
function Aa(e, t) {
	if (!t) return e;
	let n = t.split(".");
	for (let t = 0, r = n.length; t < r; ++t) {
		let r = n[t];
		e = e[r] || (e[r] = Object.create(null));
	}
	return e;
}
function ja(e, t, n) {
	return typeof t == "string" ? mi(Aa(e, t), n) : mi(Aa(e, ""), t);
}
var Y = /* #__PURE__ */ new class {
	constructor(e, t) {
		this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (e) => e.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
			"mousemove",
			"mouseout",
			"click",
			"touchstart",
			"touchmove"
		], this.font = {
			family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			size: 12,
			style: "normal",
			lineHeight: 1.2,
			weight: null
		}, this.hover = {}, this.hoverBackgroundColor = (e, t) => ga(t.backgroundColor), this.hoverBorderColor = (e, t) => ga(t.borderColor), this.hoverColor = (e, t) => ga(t.color), this.indexAxis = "x", this.interaction = {
			mode: "nearest",
			intersect: !0,
			includeInvisible: !1
		}, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(e), this.apply(t);
	}
	set(e, t) {
		return ja(this, e, t);
	}
	get(e) {
		return Aa(this, e);
	}
	describe(e, t) {
		return ja(ka, e, t);
	}
	override(e, t) {
		return ja(Oa, e, t);
	}
	route(e, t, n, r) {
		let i = Aa(this, e), a = Aa(this, n), o = "_" + t;
		Object.defineProperties(i, {
			[o]: {
				value: i[t],
				writable: !0
			},
			[t]: {
				enumerable: !0,
				get() {
					let e = this[o], t = a[r];
					return L(e) ? Object.assign({}, t, e) : B(e, t);
				},
				set(e) {
					this[o] = e;
				}
			}
		});
	}
	apply(e) {
		e.forEach((e) => e(this));
	}
}({
	_scriptable: (e) => !e.startsWith("on"),
	_indexable: (e) => e !== "events",
	hover: { _fallback: "interaction" },
	interaction: {
		_scriptable: !1,
		_indexable: !1
	}
}, [
	ya,
	ba,
	Da
]);
function Ma(e) {
	return !e || F(e.size) || F(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
}
function Na(e, t, n, r, i) {
	let a = t[i];
	return a || (a = t[i] = e.measureText(i).width, n.push(i)), a > r && (r = a), r;
}
function Pa(e, t, n, r) {
	r ||= {};
	let i = r.data = r.data || {}, a = r.garbageCollect = r.garbageCollect || [];
	r.font !== t && (i = r.data = {}, a = r.garbageCollect = [], r.font = t), e.save(), e.font = t;
	let o = 0, s = n.length, c, l, u, d, f;
	for (c = 0; c < s; c++) if (d = n[c], d != null && !I(d)) o = Na(e, i, a, o, d);
	else if (I(d)) for (l = 0, u = d.length; l < u; l++) f = d[l], f != null && !I(f) && (o = Na(e, i, a, o, f));
	e.restore();
	let p = a.length / 2;
	if (p > n.length) {
		for (c = 0; c < p; c++) delete i[a[c]];
		a.splice(0, p);
	}
	return o;
}
function Fa(e, t, n) {
	let r = e.currentDevicePixelRatio, i = n === 0 ? 0 : Math.max(n / 2, .5);
	return Math.round((t - i) * r) / r + i;
}
function Ia(e, t) {
	(t || e) && (t ||= e.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore());
}
function La(e, t, n, r) {
	Ra(e, t, n, r, null);
}
function Ra(e, t, n, r, i) {
	let a, o, s, c, l, u, d, f, p = t.pointStyle, m = t.rotation, h = t.radius, g = (m || 0) * Oi;
	if (p && typeof p == "object" && (a = p.toString(), a === "[object HTMLImageElement]" || a === "[object HTMLCanvasElement]")) e.save(), e.translate(n, r), e.rotate(g), e.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height), e.restore();
	else if (!(isNaN(h) || h <= 0)) {
		switch (e.beginPath(), p) {
			default:
				i ? e.ellipse(n, r, i / 2, h, 0, 0, W) : e.arc(n, r, h, 0, W), e.closePath();
				break;
			case "triangle":
				u = i ? i / 2 : h, e.moveTo(n + Math.sin(g) * u, r - Math.cos(g) * h), g += Ai, e.lineTo(n + Math.sin(g) * u, r - Math.cos(g) * h), g += Ai, e.lineTo(n + Math.sin(g) * u, r - Math.cos(g) * h), e.closePath();
				break;
			case "rectRounded":
				l = h * .516, c = h - l, o = Math.cos(g + ki) * c, d = Math.cos(g + ki) * (i ? i / 2 - l : c), s = Math.sin(g + ki) * c, f = Math.sin(g + ki) * (i ? i / 2 - l : c), e.arc(n - d, r - s, l, g - U, g - G), e.arc(n + f, r - o, l, g - G, g), e.arc(n + d, r + s, l, g, g + G), e.arc(n - f, r + o, l, g + G, g + U), e.closePath();
				break;
			case "rect":
				if (!m) {
					c = Math.SQRT1_2 * h, u = i ? i / 2 : c, e.rect(n - u, r - c, 2 * u, 2 * c);
					break;
				}
				g += ki;
			case "rectRot":
				d = Math.cos(g) * (i ? i / 2 : h), o = Math.cos(g) * h, s = Math.sin(g) * h, f = Math.sin(g) * (i ? i / 2 : h), e.moveTo(n - d, r - s), e.lineTo(n + f, r - o), e.lineTo(n + d, r + s), e.lineTo(n - f, r + o), e.closePath();
				break;
			case "crossRot": g += ki;
			case "cross":
				d = Math.cos(g) * (i ? i / 2 : h), o = Math.cos(g) * h, s = Math.sin(g) * h, f = Math.sin(g) * (i ? i / 2 : h), e.moveTo(n - d, r - s), e.lineTo(n + d, r + s), e.moveTo(n + f, r - o), e.lineTo(n - f, r + o);
				break;
			case "star":
				d = Math.cos(g) * (i ? i / 2 : h), o = Math.cos(g) * h, s = Math.sin(g) * h, f = Math.sin(g) * (i ? i / 2 : h), e.moveTo(n - d, r - s), e.lineTo(n + d, r + s), e.moveTo(n + f, r - o), e.lineTo(n - f, r + o), g += ki, d = Math.cos(g) * (i ? i / 2 : h), o = Math.cos(g) * h, s = Math.sin(g) * h, f = Math.sin(g) * (i ? i / 2 : h), e.moveTo(n - d, r - s), e.lineTo(n + d, r + s), e.moveTo(n + f, r - o), e.lineTo(n - f, r + o);
				break;
			case "line":
				o = i ? i / 2 : Math.cos(g) * h, s = Math.sin(g) * h, e.moveTo(n - o, r - s), e.lineTo(n + o, r + s);
				break;
			case "dash":
				e.moveTo(n, r), e.lineTo(n + Math.cos(g) * (i ? i / 2 : h), r + Math.sin(g) * h);
				break;
			case !1: e.closePath();
		}
		e.fill(), t.borderWidth > 0 && e.stroke();
	}
}
function za(e, t, n) {
	return n ||= .5, !t || e && e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n;
}
function Ba(e, t) {
	e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
}
function Va(e) {
	e.restore();
}
function Ha(e, t, n, r, i) {
	if (!t) return e.lineTo(n.x, n.y);
	if (i === "middle") {
		let r = (t.x + n.x) / 2;
		e.lineTo(r, t.y), e.lineTo(r, n.y);
	} else i === "after" == !!r ? e.lineTo(n.x, t.y) : e.lineTo(t.x, n.y);
	e.lineTo(n.x, n.y);
}
function Ua(e, t, n, r) {
	if (!t) return e.lineTo(n.x, n.y);
	e.bezierCurveTo(r ? t.cp1x : t.cp2x, r ? t.cp1y : t.cp2y, r ? n.cp2x : n.cp1x, r ? n.cp2y : n.cp1y, n.x, n.y);
}
function Wa(e, t) {
	t.translation && e.translate(t.translation[0], t.translation[1]), F(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline);
}
function Ga(e, t, n, r, i) {
	if (i.strikethrough || i.underline) {
		let a = e.measureText(r), o = t - a.actualBoundingBoxLeft, s = t + a.actualBoundingBoxRight, c = n - a.actualBoundingBoxAscent, l = n + a.actualBoundingBoxDescent, u = i.strikethrough ? (c + l) / 2 : l;
		e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = i.decorationWidth || 2, e.moveTo(o, u), e.lineTo(s, u), e.stroke();
	}
}
function Ka(e, t) {
	let n = e.fillStyle;
	e.fillStyle = t.color, e.fillRect(t.left, t.top, t.width, t.height), e.fillStyle = n;
}
function qa(e, t, n, r, i, a = {}) {
	let o = I(t) ? t : [t], s = a.strokeWidth > 0 && a.strokeColor !== "", c, l;
	for (e.save(), e.font = i.string, Wa(e, a), c = 0; c < o.length; ++c) l = o[c], a.backdrop && Ka(e, a.backdrop), s && (a.strokeColor && (e.strokeStyle = a.strokeColor), F(a.strokeWidth) || (e.lineWidth = a.strokeWidth), e.strokeText(l, n, r, a.maxWidth)), e.fillText(l, n, r, a.maxWidth), Ga(e, n, r, l, a), r += Number(i.lineHeight);
	e.restore();
}
function Ja(e, t) {
	let { x: n, y: r, w: i, h: a, radius: o } = t;
	e.arc(n + o.topLeft, r + o.topLeft, o.topLeft, 1.5 * U, U, !0), e.lineTo(n, r + a - o.bottomLeft), e.arc(n + o.bottomLeft, r + a - o.bottomLeft, o.bottomLeft, U, G, !0), e.lineTo(n + i - o.bottomRight, r + a), e.arc(n + i - o.bottomRight, r + a - o.bottomRight, o.bottomRight, G, 0, !0), e.lineTo(n + i, r + o.topRight), e.arc(n + i - o.topRight, r + o.topRight, o.topRight, 0, -G, !0), e.lineTo(n + o.topLeft, r);
}
var Ya = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Xa = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Za(e, t) {
	let n = ("" + e).match(Ya);
	if (!n || n[1] === "normal") return t * 1.2;
	switch (e = +n[2], n[3]) {
		case "px": return e;
		case "%": e /= 100;
	}
	return t * e;
}
var Qa = (e) => +e || 0;
function $a(e, t) {
	let n = {}, r = L(t), i = r ? Object.keys(t) : t, a = L(e) ? r ? (n) => B(e[n], e[t[n]]) : (t) => e[t] : () => e;
	for (let e of i) n[e] = Qa(a(e));
	return n;
}
function eo(e) {
	return $a(e, {
		top: "y",
		right: "x",
		bottom: "y",
		left: "x"
	});
}
function to(e) {
	return $a(e, [
		"topLeft",
		"topRight",
		"bottomLeft",
		"bottomRight"
	]);
}
function X(e) {
	let t = eo(e);
	return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function Z(e, t) {
	e ||= {}, t ||= Y.font;
	let n = B(e.size, t.size);
	typeof n == "string" && (n = parseInt(n, 10));
	let r = B(e.style, t.style);
	r && !("" + r).match(Xa) && (console.warn("Invalid font style specified: \"" + r + "\""), r = void 0);
	let i = {
		family: B(e.family, t.family),
		lineHeight: Za(B(e.lineHeight, t.lineHeight), n),
		size: n,
		style: r,
		weight: B(e.weight, t.weight),
		string: ""
	};
	return i.string = Ma(i), i;
}
function no(e, t, n, r) {
	let i = !0, a, o, s;
	for (a = 0, o = e.length; a < o; ++a) if (s = e[a], s !== void 0 && (t !== void 0 && typeof s == "function" && (s = s(t), i = !1), n !== void 0 && I(s) && (s = s[n % s.length], i = !1), s !== void 0)) return r && !i && (r.cacheable = !1), s;
}
function ro(e, t, n) {
	let { min: r, max: i } = e, a = li(t, (i - r) / 2), o = (e, t) => n && e === 0 ? 0 : e + t;
	return {
		min: o(r, -Math.abs(a)),
		max: o(i, a)
	};
}
function io(e, t) {
	return Object.assign(Object.create(e), t);
}
function ao(e, t = [""], n, r, i = () => e[0]) {
	let a = n || e;
	return r === void 0 && (r = So("_fallback", e)), new Proxy({
		[Symbol.toStringTag]: "Object",
		_cacheable: !0,
		_scopes: e,
		_rootScopes: a,
		_fallback: r,
		_getTarget: i,
		override: (n) => ao([n, ...e], t, a, r)
	}, {
		deleteProperty(t, n) {
			return delete t[n], delete t._keys, delete e[0][n], !0;
		},
		get(n, r) {
			return uo(n, r, () => xo(r, t, e, n));
		},
		getOwnPropertyDescriptor(e, t) {
			return Reflect.getOwnPropertyDescriptor(e._scopes[0], t);
		},
		getPrototypeOf() {
			return Reflect.getPrototypeOf(e[0]);
		},
		has(e, t) {
			return Co(e).includes(t);
		},
		ownKeys(e) {
			return Co(e);
		},
		set(e, t, n) {
			let r = e._storage ||= i();
			return e[t] = r[t] = n, delete e._keys, !0;
		}
	});
}
function oo(e, t, n, r) {
	let i = {
		_cacheable: !1,
		_proxy: e,
		_context: t,
		_subProxy: n,
		_stack: /* @__PURE__ */ new Set(),
		_descriptors: so(e, r),
		setContext: (t) => oo(e, t, n, r),
		override: (i) => oo(e.override(i), t, n, r)
	};
	return new Proxy(i, {
		deleteProperty(t, n) {
			return delete t[n], delete e[n], !0;
		},
		get(e, t, n) {
			return uo(e, t, () => fo(e, t, n));
		},
		getOwnPropertyDescriptor(t, n) {
			return t._descriptors.allKeys ? Reflect.has(e, n) ? {
				enumerable: !0,
				configurable: !0
			} : void 0 : Reflect.getOwnPropertyDescriptor(e, n);
		},
		getPrototypeOf() {
			return Reflect.getPrototypeOf(e);
		},
		has(t, n) {
			return Reflect.has(e, n);
		},
		ownKeys() {
			return Reflect.ownKeys(e);
		},
		set(t, n, r) {
			return e[n] = r, delete t[n], !0;
		}
	});
}
function so(e, t = {
	scriptable: !0,
	indexable: !0
}) {
	let { _scriptable: n = t.scriptable, _indexable: r = t.indexable, _allKeys: i = t.allKeys } = e;
	return {
		allKeys: i,
		scriptable: n,
		indexable: r,
		isScriptable: Ci(n) ? n : () => n,
		isIndexable: Ci(r) ? r : () => r
	};
}
var co = (e, t) => e ? e + xi(t) : t, lo = (e, t) => L(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function uo(e, t, n) {
	if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor") return e[t];
	let r = n();
	return e[t] = r, r;
}
function fo(e, t, n) {
	let { _proxy: r, _context: i, _subProxy: a, _descriptors: o } = e, s = r[t];
	return Ci(s) && o.isScriptable(t) && (s = po(t, s, e, n)), I(s) && s.length && (s = mo(t, s, e, o.isIndexable)), lo(t, s) && (s = oo(s, i, a && a[t], o)), s;
}
function po(e, t, n, r) {
	let { _proxy: i, _context: a, _subProxy: o, _stack: s } = n;
	if (s.has(e)) throw Error("Recursion detected: " + Array.from(s).join("->") + "->" + e);
	s.add(e);
	let c = t(a, o || r);
	return s.delete(e), lo(e, c) && (c = vo(i._scopes, i, e, c)), c;
}
function mo(e, t, n, r) {
	let { _proxy: i, _context: a, _subProxy: o, _descriptors: s } = n;
	if (a.index !== void 0 && r(e)) return t[a.index % t.length];
	if (L(t[0])) {
		let n = t, r = i._scopes.filter((e) => e !== n);
		t = [];
		for (let c of n) {
			let n = vo(r, i, e, c);
			t.push(oo(n, a, o && o[e], s));
		}
	}
	return t;
}
function ho(e, t, n) {
	return Ci(e) ? e(t, n) : e;
}
var go = (e, t) => e === !0 ? t : typeof e == "string" ? bi(t, e) : void 0;
function _o(e, t, n, r, i) {
	for (let a of t) {
		let t = go(n, a);
		if (t) {
			e.add(t);
			let a = ho(t._fallback, n, i);
			if (a !== void 0 && a !== n && a !== r) return a;
		} else if (t === !1 && r !== void 0 && n !== r) return null;
	}
	return !1;
}
function vo(e, t, n, r) {
	let i = t._rootScopes, a = ho(t._fallback, n, r), o = [...e, ...i], s = /* @__PURE__ */ new Set();
	s.add(r);
	let c = yo(s, o, n, a || n, r);
	return c === null || a !== void 0 && a !== n && (c = yo(s, o, a, c, r), c === null) ? !1 : ao(Array.from(s), [""], i, a, () => bo(t, n, r));
}
function yo(e, t, n, r, i) {
	for (; n;) n = _o(e, t, n, r, i);
	return n;
}
function bo(e, t, n) {
	let r = e._getTarget();
	t in r || (r[t] = {});
	let i = r[t];
	return I(i) && L(n) ? n : i || {};
}
function xo(e, t, n, r) {
	let i;
	for (let a of t) if (i = So(co(a, e), n), i !== void 0) return lo(e, i) ? vo(n, r, e, i) : i;
}
function So(e, t) {
	for (let n of t) {
		if (!n) continue;
		let t = n[e];
		if (t !== void 0) return t;
	}
}
function Co(e) {
	let t = e._keys;
	return t ||= e._keys = wo(e._scopes), t;
}
function wo(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) for (let e of Object.keys(n).filter((e) => !e.startsWith("_"))) t.add(e);
	return Array.from(t);
}
var To = 2 ** -52 || 1e-14, Eo = (e, t) => t < e.length && !e[t].skip && e[t], Do = (e) => e === "x" ? "y" : "x";
function Oo(e, t, n, r) {
	let i = e.skip ? t : e, a = t, o = n.skip ? t : n, s = Wi(a, i), c = Wi(o, a), l = s / (s + c), u = c / (s + c);
	l = isNaN(l) ? 0 : l, u = isNaN(u) ? 0 : u;
	let d = r * l, f = r * u;
	return {
		previous: {
			x: a.x - d * (o.x - i.x),
			y: a.y - d * (o.y - i.y)
		},
		next: {
			x: a.x + f * (o.x - i.x),
			y: a.y + f * (o.y - i.y)
		}
	};
}
function ko(e, t, n) {
	let r = e.length, i, a, o, s, c, l = Eo(e, 0);
	for (let u = 0; u < r - 1; ++u) c = l, l = Eo(e, u + 1), c && l && (Ni(t[u], 0, To) ? n[u] = n[u + 1] = 0 : (i = n[u] / t[u], a = n[u + 1] / t[u], s = i ** 2 + a ** 2, !(s <= 9) && (o = 3 / Math.sqrt(s), n[u] = i * o * t[u], n[u + 1] = a * o * t[u])));
}
function Ao(e, t, n = "x") {
	let r = Do(n), i = e.length, a, o, s, c = Eo(e, 0);
	for (let l = 0; l < i; ++l) {
		if (o = s, s = c, c = Eo(e, l + 1), !s) continue;
		let i = s[n], u = s[r];
		o && (a = (i - o[n]) / 3, s[`cp1${n}`] = i - a, s[`cp1${r}`] = u - a * t[l]), c && (a = (c[n] - i) / 3, s[`cp2${n}`] = i + a, s[`cp2${r}`] = u + a * t[l]);
	}
}
function jo(e, t = "x") {
	let n = Do(t), r = e.length, i = Array(r).fill(0), a = Array(r), o, s, c, l = Eo(e, 0);
	for (o = 0; o < r; ++o) if (s = c, c = l, l = Eo(e, o + 1), c) {
		if (l) {
			let e = l[t] - c[t];
			i[o] = e === 0 ? 0 : (l[n] - c[n]) / e;
		}
		a[o] = s ? l ? Mi(i[o - 1]) === Mi(i[o]) ? (i[o - 1] + i[o]) / 2 : 0 : i[o - 1] : i[o];
	}
	ko(e, i, a), Ao(e, a, t);
}
function Mo(e, t, n) {
	return Math.max(Math.min(e, n), t);
}
function No(e, t) {
	let n, r, i, a, o, s = za(e[0], t);
	for (n = 0, r = e.length; n < r; ++n) o = a, a = s, s = n < r - 1 && za(e[n + 1], t), a && (i = e[n], o && (i.cp1x = Mo(i.cp1x, t.left, t.right), i.cp1y = Mo(i.cp1y, t.top, t.bottom)), s && (i.cp2x = Mo(i.cp2x, t.left, t.right), i.cp2y = Mo(i.cp2y, t.top, t.bottom)));
}
function Po(e, t, n, r, i) {
	let a, o, s, c;
	if (t.spanGaps && (e = e.filter((e) => !e.skip)), t.cubicInterpolationMode === "monotone") jo(e, i);
	else {
		let n = r ? e[e.length - 1] : e[0];
		for (a = 0, o = e.length; a < o; ++a) s = e[a], c = Oo(n, s, e[Math.min(a + 1, o - +!r) % o], t.tension), s.cp1x = c.previous.x, s.cp1y = c.previous.y, s.cp2x = c.next.x, s.cp2y = c.next.y, n = s;
	}
	t.capBezierPoints && No(e, n);
}
function Fo() {
	return typeof window < "u" && typeof document < "u";
}
function Io(e) {
	let t = e.parentNode;
	return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Lo(e, t, n) {
	let r;
	return typeof e == "string" ? (r = parseInt(e, 10), e.indexOf("%") !== -1 && (r = r / 100 * t.parentNode[n])) : r = e, r;
}
var Ro = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function zo(e, t) {
	return Ro(e).getPropertyValue(t);
}
var Bo = [
	"top",
	"right",
	"bottom",
	"left"
];
function Vo(e, t, n) {
	let r = {};
	n = n ? "-" + n : "";
	for (let i = 0; i < 4; i++) {
		let a = Bo[i];
		r[a] = parseFloat(e[t + "-" + a + n]) || 0;
	}
	return r.width = r.left + r.right, r.height = r.top + r.bottom, r;
}
var Ho = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function Uo(e, t) {
	let n = e.touches, r = n && n.length ? n[0] : e, { offsetX: i, offsetY: a } = r, o = !1, s, c;
	if (Ho(i, a, e.target)) s = i, c = a;
	else {
		let e = t.getBoundingClientRect();
		s = r.clientX - e.left, c = r.clientY - e.top, o = !0;
	}
	return {
		x: s,
		y: c,
		box: o
	};
}
function Wo(e, t) {
	if ("native" in e) return e;
	let { canvas: n, currentDevicePixelRatio: r } = t, i = Ro(n), a = i.boxSizing === "border-box", o = Vo(i, "padding"), s = Vo(i, "border", "width"), { x: c, y: l, box: u } = Uo(e, n), d = o.left + (u && s.left), f = o.top + (u && s.top), { width: p, height: m } = t;
	return a && (p -= o.width + s.width, m -= o.height + s.height), {
		x: Math.round((c - d) / p * n.width / r),
		y: Math.round((l - f) / m * n.height / r)
	};
}
function Go(e, t, n) {
	let r, i;
	if (t === void 0 || n === void 0) {
		let a = e && Io(e);
		if (!a) t = e.clientWidth, n = e.clientHeight;
		else {
			let e = a.getBoundingClientRect(), o = Ro(a), s = Vo(o, "border", "width"), c = Vo(o, "padding");
			t = e.width - c.width - s.width, n = e.height - c.height - s.height, r = Lo(o.maxWidth, a, "clientWidth"), i = Lo(o.maxHeight, a, "clientHeight");
		}
	}
	return {
		width: t,
		height: n,
		maxWidth: r || Di,
		maxHeight: i || Di
	};
}
var Ko = (e) => Math.round(e * 10) / 10;
function qo(e, t, n, r) {
	let i = Ro(e), a = Vo(i, "margin"), o = Lo(i.maxWidth, e, "clientWidth") || Di, s = Lo(i.maxHeight, e, "clientHeight") || Di, c = Go(e, t, n), { width: l, height: u } = c;
	if (i.boxSizing === "content-box") {
		let e = Vo(i, "border", "width"), t = Vo(i, "padding");
		l -= t.width + e.width, u -= t.height + e.height;
	}
	return l = Math.max(0, l - a.width), u = Math.max(0, r ? l / r : u - a.height), l = Ko(Math.min(l, o, c.maxWidth)), u = Ko(Math.min(u, s, c.maxHeight)), l && !u && (u = Ko(l / 2)), (t !== void 0 || n !== void 0) && r && c.height && u > c.height && (u = c.height, l = Ko(Math.floor(u * r))), {
		width: l,
		height: u
	};
}
function Jo(e, t, n) {
	let r = t || 1, i = Ko(e.height * r), a = Ko(e.width * r);
	e.height = Ko(e.height), e.width = Ko(e.width);
	let o = e.canvas;
	return o.style && (n || !o.style.height && !o.style.width) && (o.style.height = `${e.height}px`, o.style.width = `${e.width}px`), e.currentDevicePixelRatio !== r || o.height !== i || o.width !== a ? (e.currentDevicePixelRatio = r, o.height = i, o.width = a, e.ctx.setTransform(r, 0, 0, r, 0, 0), !0) : !1;
}
var Yo = function() {
	let e = !1;
	try {
		let t = { get passive() {
			return e = !0, !1;
		} };
		Fo() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
	} catch {}
	return e;
}();
function Xo(e, t) {
	let n = zo(e, t), r = n && n.match(/^(\d+)(\.\d+)?px$/);
	return r ? +r[1] : void 0;
}
function Zo(e, t, n, r) {
	return {
		x: e.x + n * (t.x - e.x),
		y: e.y + n * (t.y - e.y)
	};
}
function Qo(e, t, n, r) {
	return {
		x: e.x + n * (t.x - e.x),
		y: r === "middle" ? n < .5 ? e.y : t.y : r === "after" ? n < 1 ? e.y : t.y : n > 0 ? t.y : e.y
	};
}
function $o(e, t, n, r) {
	let i = {
		x: e.cp2x,
		y: e.cp2y
	}, a = {
		x: t.cp1x,
		y: t.cp1y
	}, o = Zo(e, i, n), s = Zo(i, a, n), c = Zo(a, t, n);
	return Zo(Zo(o, s, n), Zo(s, c, n), n);
}
var es = function(e, t) {
	return {
		x(n) {
			return e + e + t - n;
		},
		setWidth(e) {
			t = e;
		},
		textAlign(e) {
			return e === "center" ? e : e === "right" ? "left" : "right";
		},
		xPlus(e, t) {
			return e - t;
		},
		leftForLtr(e, t) {
			return e - t;
		}
	};
}, ts = function() {
	return {
		x(e) {
			return e;
		},
		setWidth(e) {},
		textAlign(e) {
			return e;
		},
		xPlus(e, t) {
			return e + t;
		},
		leftForLtr(e, t) {
			return e;
		}
	};
};
function ns(e, t, n) {
	return e ? es(t, n) : ts();
}
function rs(e, t) {
	let n, r;
	(t === "ltr" || t === "rtl") && (n = e.canvas.style, r = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", t, "important"), e.prevTextDirection = r);
}
function is(e, t) {
	t !== void 0 && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]));
}
function as(e) {
	return e === "angle" ? {
		between: Ki,
		compare: Gi,
		normalize: K
	} : {
		between: Ji,
		compare: (e, t) => e - t,
		normalize: (e) => e
	};
}
function os({ start: e, end: t, count: n, loop: r, style: i }) {
	return {
		start: e % n,
		end: t % n,
		loop: r && (t - e + 1) % n === 0,
		style: i
	};
}
function ss(e, t, n) {
	let { property: r, start: i, end: a } = n, { between: o, normalize: s } = as(r), c = t.length, { start: l, end: u, loop: d } = e, f, p;
	if (d) {
		for (l += c, u += c, f = 0, p = c; f < p && o(s(t[l % c][r]), i, a); ++f) l--, u--;
		l %= c, u %= c;
	}
	return u < l && (u += c), {
		start: l,
		end: u,
		loop: d,
		style: e.style
	};
}
function cs(e, t, n) {
	if (!n) return [e];
	let { property: r, start: i, end: a } = n, o = t.length, { compare: s, between: c, normalize: l } = as(r), { start: u, end: d, loop: f, style: p } = ss(e, t, n), m = [], h = !1, g = null, _, v, y, b = () => c(i, y, _) && s(i, y) !== 0, x = () => s(a, _) === 0 || c(a, y, _), S = () => h || b(), C = () => !h || x();
	for (let e = u, n = u; e <= d; ++e) v = t[e % o], !v.skip && (_ = l(v[r]), _ !== y && (h = c(_, i, a), g === null && S() && (g = s(_, i) === 0 ? e : n), g !== null && C() && (m.push(os({
		start: g,
		end: e,
		loop: f,
		count: o,
		style: p
	})), g = null), n = e, y = _));
	return g !== null && m.push(os({
		start: g,
		end: d,
		loop: f,
		count: o,
		style: p
	})), m;
}
function ls(e, t) {
	let n = [], r = e.segments;
	for (let i = 0; i < r.length; i++) {
		let a = cs(r[i], e.points, t);
		a.length && n.push(...a);
	}
	return n;
}
function us(e, t, n, r) {
	let i = 0, a = t - 1;
	if (n && !r) for (; i < t && !e[i].skip;) i++;
	for (; i < t && e[i].skip;) i++;
	for (i %= t, n && (a += i); a > i && e[a % t].skip;) a--;
	return a %= t, {
		start: i,
		end: a
	};
}
function ds(e, t, n, r) {
	let i = e.length, a = [], o = t, s = e[t], c;
	for (c = t + 1; c <= n; ++c) {
		let n = e[c % i];
		n.skip || n.stop ? s.skip || (r = !1, a.push({
			start: t % i,
			end: (c - 1) % i,
			loop: r
		}), t = o = n.stop ? c : null) : (o = c, s.skip && (t = c)), s = n;
	}
	return o !== null && a.push({
		start: t % i,
		end: o % i,
		loop: r
	}), a;
}
function fs(e, t) {
	let n = e.points, r = e.options.spanGaps, i = n.length;
	if (!i) return [];
	let a = !!e._loop, { start: o, end: s } = us(n, i, a, r);
	return r === !0 ? ps(e, [{
		start: o,
		end: s,
		loop: a
	}], n, t) : ps(e, ds(n, o, s < o ? s + i : s, !!e._fullLoop && o === 0 && s === i - 1), n, t);
}
function ps(e, t, n, r) {
	return !r || !r.setContext || !n ? t : ms(e, t, n, r);
}
function ms(e, t, n, r) {
	let i = e._chart.getContext(), a = hs(e.options), { _datasetIndex: o, options: { spanGaps: s } } = e, c = n.length, l = [], u = a, d = t[0].start, f = d;
	function p(e, t, r, i) {
		let a = s ? -1 : 1;
		if (e !== t) {
			for (e += c; n[e % c].skip;) e -= a;
			for (; n[t % c].skip;) t += a;
			e % c !== t % c && (l.push({
				start: e % c,
				end: t % c,
				loop: r,
				style: i
			}), u = i, d = t % c);
		}
	}
	for (let e of t) {
		d = s ? d : e.start;
		let t = n[d % c], a;
		for (f = d + 1; f <= e.end; f++) {
			let s = n[f % c];
			a = hs(r.setContext(io(i, {
				type: "segment",
				p0: t,
				p1: s,
				p0DataIndex: (f - 1) % c,
				p1DataIndex: f % c,
				datasetIndex: o
			}))), gs(a, u) && p(d, f - 1, e.loop, u), t = s, u = a;
		}
		d < f - 1 && p(d, f - 1, e.loop, u);
	}
	return l;
}
function hs(e) {
	return {
		backgroundColor: e.backgroundColor,
		borderCapStyle: e.borderCapStyle,
		borderDash: e.borderDash,
		borderDashOffset: e.borderDashOffset,
		borderJoinStyle: e.borderJoinStyle,
		borderWidth: e.borderWidth,
		borderColor: e.borderColor
	};
}
function gs(e, t) {
	if (!t) return !1;
	let n = [], r = function(e, t) {
		return ma(t) ? (n.includes(t) || n.push(t), n.indexOf(t)) : t;
	};
	return JSON.stringify(e, r) !== JSON.stringify(t, r);
}
function _s(e, t, n) {
	return e.options.clip ? e[n] : t[n];
}
function vs(e, t) {
	let { xScale: n, yScale: r } = e;
	return n && r ? {
		left: _s(n, t, "left"),
		right: _s(n, t, "right"),
		top: _s(r, t, "top"),
		bottom: _s(r, t, "bottom")
	} : t;
}
function ys(e, t) {
	let n = t._clip;
	if (n.disabled) return !1;
	let r = vs(t, e.chartArea);
	return {
		left: n.left === !1 ? 0 : r.left - (n.left === !0 ? 0 : n.left),
		right: n.right === !1 ? e.width : r.right + (n.right === !0 ? 0 : n.right),
		top: n.top === !1 ? 0 : r.top - (n.top === !0 ? 0 : n.top),
		bottom: n.bottom === !1 ? e.height : r.bottom + (n.bottom === !0 ? 0 : n.bottom)
	};
}
var bs = /* #__PURE__ */ new class {
	constructor() {
		this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
	}
	_notify(e, t, n, r) {
		let i = t.listeners[r], a = t.duration;
		i.forEach((r) => r({
			chart: e,
			initial: t.initial,
			numSteps: a,
			currentStep: Math.min(n - t.start, a)
		}));
	}
	_refresh() {
		this._request ||= (this._running = !0, ra.call(window, () => {
			this._update(), this._request = null, this._running && this._refresh();
		}));
	}
	_update(e = Date.now()) {
		let t = 0;
		this._charts.forEach((n, r) => {
			if (!n.running || !n.items.length) return;
			let i = n.items, a = i.length - 1, o = !1, s;
			for (; a >= 0; --a) s = i[a], s._active ? (s._total > n.duration && (n.duration = s._total), s.tick(e), o = !0) : (i[a] = i[i.length - 1], i.pop());
			o && (r.draw(), this._notify(r, n, e, "progress")), i.length || (n.running = !1, this._notify(r, n, e, "complete"), n.initial = !1), t += i.length;
		}), this._lastDate = e, t === 0 && (this._running = !1);
	}
	_getAnims(e) {
		let t = this._charts, n = t.get(e);
		return n || (n = {
			running: !1,
			initial: !0,
			items: [],
			listeners: {
				complete: [],
				progress: []
			}
		}, t.set(e, n)), n;
	}
	listen(e, t, n) {
		this._getAnims(e).listeners[t].push(n);
	}
	add(e, t) {
		t && t.length && this._getAnims(e).items.push(...t);
	}
	has(e) {
		return this._getAnims(e).items.length > 0;
	}
	start(e) {
		let t = this._charts.get(e);
		t && (t.running = !0, t.start = Date.now(), t.duration = t.items.reduce((e, t) => Math.max(e, t._duration), 0), this._refresh());
	}
	running(e) {
		if (!this._running) return !1;
		let t = this._charts.get(e);
		return !(!t || !t.running || !t.items.length);
	}
	stop(e) {
		let t = this._charts.get(e);
		if (!t || !t.items.length) return;
		let n = t.items, r = n.length - 1;
		for (; r >= 0; --r) n[r].cancel();
		t.items = [], this._notify(e, t, Date.now(), "complete");
	}
	remove(e) {
		return this._charts.delete(e);
	}
}(), xs = "transparent", Ss = {
	boolean(e, t, n) {
		return n > .5 ? t : e;
	},
	color(e, t, n) {
		let r = ha(e || xs), i = r.valid && ha(t || xs);
		return i && i.valid ? i.mix(r, n).hexString() : t;
	},
	number(e, t, n) {
		return e + (t - e) * n;
	}
}, Cs = class {
	constructor(e, t, n, r) {
		let i = t[n];
		r = no([
			e.to,
			r,
			i,
			e.from
		]);
		let a = no([
			e.from,
			i,
			r
		]);
		this._active = !0, this._fn = e.fn || Ss[e.type || typeof a], this._easing = pa[e.easing] || pa.linear, this._start = Math.floor(Date.now() + (e.delay || 0)), this._duration = this._total = Math.floor(e.duration), this._loop = !!e.loop, this._target = t, this._prop = n, this._from = a, this._to = r, this._promises = void 0;
	}
	active() {
		return this._active;
	}
	update(e, t, n) {
		if (this._active) {
			this._notify(!1);
			let r = this._target[this._prop], i = n - this._start, a = this._duration - i;
			this._start = n, this._duration = Math.floor(Math.max(a, e.duration)), this._total += i, this._loop = !!e.loop, this._to = no([
				e.to,
				t,
				r,
				e.from
			]), this._from = no([
				e.from,
				r,
				t
			]);
		}
	}
	cancel() {
		this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
	}
	tick(e) {
		let t = e - this._start, n = this._duration, r = this._prop, i = this._from, a = this._loop, o = this._to, s;
		this._active = i !== o && (a || t < n), this._active ? t < 0 ? this._target[r] = i : (s = t / n % 2, s = a && s > 1 ? 2 - s : s, s = this._easing(Math.min(1, Math.max(0, s))), this._target[r] = this._fn(i, o, s)) : (this._target[r] = o, this._notify(!0));
	}
	wait() {
		let e = this._promises ||= [];
		return new Promise((t, n) => {
			e.push({
				res: t,
				rej: n
			});
		});
	}
	_notify(e) {
		let t = e ? "res" : "rej", n = this._promises || [];
		for (let e = 0; e < n.length; e++) n[e][t]();
	}
}, ws = class {
	constructor(e, t) {
		this._chart = e, this._properties = /* @__PURE__ */ new Map(), this.configure(t);
	}
	configure(e) {
		if (!L(e)) return;
		let t = Object.keys(Y.animation), n = this._properties;
		Object.getOwnPropertyNames(e).forEach((r) => {
			let i = e[r];
			if (!L(i)) return;
			let a = {};
			for (let e of t) a[e] = i[e];
			(I(i.properties) && i.properties || [r]).forEach((e) => {
				(e === r || !n.has(e)) && n.set(e, a);
			});
		});
	}
	_animateOptions(e, t) {
		let n = t.options, r = Es(e, n);
		if (!r) return [];
		let i = this._createAnimations(r, n);
		return n.$shared && Ts(e.options.$animations, n).then(() => {
			e.options = n;
		}, () => {}), i;
	}
	_createAnimations(e, t) {
		let n = this._properties, r = [], i = e.$animations ||= {}, a = Object.keys(t), o = Date.now(), s;
		for (s = a.length - 1; s >= 0; --s) {
			let c = a[s];
			if (c.charAt(0) === "$") continue;
			if (c === "options") {
				r.push(...this._animateOptions(e, t));
				continue;
			}
			let l = t[c], u = i[c], d = n.get(c);
			if (u) {
				if (d && u.active()) {
					u.update(d, l, o);
					continue;
				}
				u.cancel();
			}
			!d || !d.duration ? e[c] = l : (i[c] = u = new Cs(d, e, c, l), r.push(u));
		}
		return r;
	}
	update(e, t) {
		if (this._properties.size === 0) {
			Object.assign(e, t);
			return;
		}
		let n = this._createAnimations(e, t);
		if (n.length) return bs.add(this._chart, n), !0;
	}
};
function Ts(e, t) {
	let n = [], r = Object.keys(t);
	for (let t = 0; t < r.length; t++) {
		let i = e[r[t]];
		i && i.active() && n.push(i.wait());
	}
	return Promise.all(n);
}
function Es(e, t) {
	if (!t) return;
	let n = e.options;
	if (!n) e.options = t;
	else return n.$shared && (e.options = n = Object.assign({}, n, {
		$shared: !1,
		$animations: {}
	})), n;
}
function Ds(e, t) {
	let n = e && e.options || {}, r = n.reverse, i = n.min === void 0 ? t : 0, a = n.max === void 0 ? t : 0;
	return {
		start: r ? a : i,
		end: r ? i : a
	};
}
function Os(e, t, n) {
	if (n === !1) return !1;
	let r = Ds(e, n), i = Ds(t, n);
	return {
		top: i.end,
		right: r.end,
		bottom: i.start,
		left: r.start
	};
}
function ks(e) {
	let t, n, r, i;
	return L(e) ? (t = e.top, n = e.right, r = e.bottom, i = e.left) : t = n = r = i = e, {
		top: t,
		right: n,
		bottom: r,
		left: i,
		disabled: e === !1
	};
}
function As(e, t) {
	let n = [], r = e._getSortedDatasetMetas(t), i, a;
	for (i = 0, a = r.length; i < a; ++i) n.push(r[i].index);
	return n;
}
function js(e, t, n, r = {}) {
	let i = e.keys, a = r.mode === "single", o, s, c, l;
	if (t === null) return;
	let u = !1;
	for (o = 0, s = i.length; o < s; ++o) {
		if (c = +i[o], c === n) {
			if (u = !0, r.all) continue;
			break;
		}
		l = e.values[c], R(l) && (a || t === 0 || Mi(t) === Mi(l)) && (t += l);
	}
	return !u && !r.all ? 0 : t;
}
function Ms(e, t) {
	let { iScale: n, vScale: r } = t, i = n.axis === "x" ? "x" : "y", a = r.axis === "x" ? "x" : "y", o = Object.keys(e), s = Array(o.length), c, l, u;
	for (c = 0, l = o.length; c < l; ++c) u = o[c], s[c] = {
		[i]: u,
		[a]: e[u]
	};
	return s;
}
function Ns(e, t) {
	let n = e && e.options.stacked;
	return n || n === void 0 && t.stack !== void 0;
}
function Ps(e, t, n) {
	return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function Fs(e) {
	let { min: t, max: n, minDefined: r, maxDefined: i } = e.getUserBounds();
	return {
		min: r ? t : -Infinity,
		max: i ? n : Infinity
	};
}
function Is(e, t, n) {
	let r = e[t] || (e[t] = {});
	return r[n] || (r[n] = {});
}
function Ls(e, t, n, r) {
	for (let i of t.getMatchingVisibleMetas(r).reverse()) {
		let t = e[i.index];
		if (n && t > 0 || !n && t < 0) return i.index;
	}
	return null;
}
function Rs(e, t) {
	let { chart: n, _cachedMeta: r } = e, i = n._stacks ||= {}, { iScale: a, vScale: o, index: s } = r, c = a.axis, l = o.axis, u = Ps(a, o, r), d = t.length, f;
	for (let e = 0; e < d; ++e) {
		let n = t[e], { [c]: a, [l]: d } = n, p = n._stacks ||= {};
		f = p[l] = Is(i, u, a), f[s] = d, f._top = Ls(f, o, !0, r.type), f._bottom = Ls(f, o, !1, r.type);
		let m = f._visualValues || (f._visualValues = {});
		m[s] = d;
	}
}
function zs(e, t) {
	let n = e.scales;
	return Object.keys(n).filter((e) => n[e].axis === t).shift();
}
function Bs(e, t) {
	return io(e, {
		active: !1,
		dataset: void 0,
		datasetIndex: t,
		index: t,
		mode: "default",
		type: "dataset"
	});
}
function Vs(e, t, n) {
	return io(e, {
		active: !1,
		dataIndex: t,
		parsed: void 0,
		raw: void 0,
		element: n,
		index: t,
		mode: "default",
		type: "data"
	});
}
function Hs(e, t) {
	let n = e.controller.index, r = e.vScale && e.vScale.axis;
	if (r) {
		t ||= e._parsed;
		for (let e of t) {
			let t = e._stacks;
			if (!t || t[r] === void 0 || t[r][n] === void 0) return;
			delete t[r][n], t[r]._visualValues !== void 0 && t[r]._visualValues[n] !== void 0 && delete t[r]._visualValues[n];
		}
	}
}
var Us = (e) => e === "reset" || e === "none", Ws = (e, t) => t ? e : Object.assign({}, e), Gs = (e, t, n) => e && !t.hidden && t._stacked && {
	keys: As(n, !0),
	values: null
}, Ks = class {
	static defaults = {};
	static datasetElementType = null;
	static dataElementType = null;
	constructor(e, t) {
		this.chart = e, this._ctx = e.ctx, this.index = t, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
	}
	initialize() {
		let e = this._cachedMeta;
		this.configure(), this.linkScales(), e._stacked = Ns(e.vScale, e), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
	}
	updateIndex(e) {
		this.index !== e && Hs(this._cachedMeta), this.index = e;
	}
	linkScales() {
		let e = this.chart, t = this._cachedMeta, n = this.getDataset(), r = (e, t, n, r) => e === "x" ? t : e === "r" ? r : n, i = t.xAxisID = B(n.xAxisID, zs(e, "x")), a = t.yAxisID = B(n.yAxisID, zs(e, "y")), o = t.rAxisID = B(n.rAxisID, zs(e, "r")), s = t.indexAxis, c = t.iAxisID = r(s, i, a, o), l = t.vAxisID = r(s, a, i, o);
		t.xScale = this.getScaleForId(i), t.yScale = this.getScaleForId(a), t.rScale = this.getScaleForId(o), t.iScale = this.getScaleForId(c), t.vScale = this.getScaleForId(l);
	}
	getDataset() {
		return this.chart.data.datasets[this.index];
	}
	getMeta() {
		return this.chart.getDatasetMeta(this.index);
	}
	getScaleForId(e) {
		return this.chart.scales[e];
	}
	_getOtherScale(e) {
		let t = this._cachedMeta;
		return e === t.iScale ? t.vScale : t.iScale;
	}
	reset() {
		this._update("reset");
	}
	_destroy() {
		let e = this._cachedMeta;
		this._data && ta(this._data, this), e._stacked && Hs(e);
	}
	_dataCheck() {
		let e = this.getDataset(), t = e.data ||= [], n = this._data;
		if (L(t)) {
			let e = this._cachedMeta;
			this._data = Ms(t, e);
		} else if (n !== t) {
			if (n) {
				ta(n, this);
				let e = this._cachedMeta;
				Hs(e), e._parsed = [];
			}
			t && Object.isExtensible(t) && ea(t, this), this._syncList = [], this._data = t;
		}
	}
	addElements() {
		let e = this._cachedMeta;
		this._dataCheck(), this.datasetElementType && (e.dataset = new this.datasetElementType());
	}
	buildOrUpdateElements(e) {
		let t = this._cachedMeta, n = this.getDataset(), r = !1;
		this._dataCheck();
		let i = t._stacked;
		t._stacked = Ns(t.vScale, t), t.stack !== n.stack && (r = !0, Hs(t), t.stack = n.stack), this._resyncElements(e), (r || i !== t._stacked) && (Rs(this, t._parsed), t._stacked = Ns(t.vScale, t));
	}
	configure() {
		let e = this.chart.config, t = e.datasetScopeKeys(this._type), n = e.getOptionScopes(this.getDataset(), t, !0);
		this.options = e.createResolver(n, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
	}
	parse(e, t) {
		let { _cachedMeta: n, _data: r } = this, { iScale: i, _stacked: a } = n, o = i.axis, s = e === 0 && t === r.length || n._sorted, c = e > 0 && n._parsed[e - 1], l, u, d;
		if (this._parsing === !1) n._parsed = r, n._sorted = !0, d = r;
		else {
			d = I(r[e]) ? this.parseArrayData(n, r, e, t) : L(r[e]) ? this.parseObjectData(n, r, e, t) : this.parsePrimitiveData(n, r, e, t);
			let i = () => u[o] === null || c && u[o] < c[o];
			for (l = 0; l < t; ++l) n._parsed[l + e] = u = d[l], s && (i() && (s = !1), c = u);
			n._sorted = s;
		}
		a && Rs(this, d);
	}
	parsePrimitiveData(e, t, n, r) {
		let { iScale: i, vScale: a } = e, o = i.axis, s = a.axis, c = i.getLabels(), l = i === a, u = Array(r), d, f, p;
		for (d = 0, f = r; d < f; ++d) p = d + n, u[d] = {
			[o]: l || i.parse(c[p], p),
			[s]: a.parse(t[p], p)
		};
		return u;
	}
	parseArrayData(e, t, n, r) {
		let { xScale: i, yScale: a } = e, o = Array(r), s, c, l, u;
		for (s = 0, c = r; s < c; ++s) l = s + n, u = t[l], o[s] = {
			x: i.parse(u[0], l),
			y: a.parse(u[1], l)
		};
		return o;
	}
	parseObjectData(e, t, n, r) {
		let { xScale: i, yScale: a } = e, { xAxisKey: o = "x", yAxisKey: s = "y" } = this._parsing, c = Array(r), l, u, d, f;
		for (l = 0, u = r; l < u; ++l) d = l + n, f = t[d], c[l] = {
			x: i.parse(bi(f, o), d),
			y: a.parse(bi(f, s), d)
		};
		return c;
	}
	getParsed(e) {
		return this._cachedMeta._parsed[e];
	}
	getDataElement(e) {
		return this._cachedMeta.data[e];
	}
	applyStack(e, t, n) {
		let r = this.chart, i = this._cachedMeta, a = t[e.axis];
		return js({
			keys: As(r, !0),
			values: t._stacks[e.axis]._visualValues
		}, a, i.index, { mode: n });
	}
	updateRangeFromParsed(e, t, n, r) {
		let i = n[t.axis], a = i === null ? NaN : i, o = r && n._stacks[t.axis];
		r && o && (r.values = o, a = js(r, i, this._cachedMeta.index)), e.min = Math.min(e.min, a), e.max = Math.max(e.max, a);
	}
	getMinMax(e, t) {
		let n = this._cachedMeta, r = n._parsed, i = n._sorted && e === n.iScale, a = r.length, o = this._getOtherScale(e), s = Gs(t, n, this.chart), c = {
			min: Infinity,
			max: -Infinity
		}, { min: l, max: u } = Fs(o), d, f;
		function p() {
			f = r[d];
			let t = f[o.axis];
			return !R(f[e.axis]) || l > t || u < t;
		}
		for (d = 0; d < a && !(!p() && (this.updateRangeFromParsed(c, e, f, s), i)); ++d);
		if (i) {
			for (d = a - 1; d >= 0; --d) if (!p()) {
				this.updateRangeFromParsed(c, e, f, s);
				break;
			}
		}
		return c;
	}
	getAllParsedValues(e) {
		let t = this._cachedMeta._parsed, n = [], r, i, a;
		for (r = 0, i = t.length; r < i; ++r) a = t[r][e.axis], R(a) && n.push(a);
		return n;
	}
	getMaxOverflow() {
		return !1;
	}
	getLabelAndValue(e) {
		let t = this._cachedMeta, n = t.iScale, r = t.vScale, i = this.getParsed(e);
		return {
			label: n ? "" + n.getLabelForValue(i[n.axis]) : "",
			value: r ? "" + r.getLabelForValue(i[r.axis]) : ""
		};
	}
	_update(e) {
		let t = this._cachedMeta;
		this.update(e || "default"), t._clip = ks(B(this.options.clip, Os(t.xScale, t.yScale, this.getMaxOverflow())));
	}
	update(e) {}
	draw() {
		let e = this._ctx, t = this.chart, n = this._cachedMeta, r = n.data || [], i = t.chartArea, a = [], o = this._drawStart || 0, s = this._drawCount || r.length - o, c = this.options.drawActiveElementsOnTop, l;
		for (n.dataset && n.dataset.draw(e, i, o, s), l = o; l < o + s; ++l) {
			let t = r[l];
			t.hidden || (t.active && c ? a.push(t) : t.draw(e, i));
		}
		for (l = 0; l < a.length; ++l) a[l].draw(e, i);
	}
	getStyle(e, t) {
		let n = t ? "active" : "default";
		return e === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(n) : this.resolveDataElementOptions(e || 0, n);
	}
	getContext(e, t, n) {
		let r = this.getDataset(), i;
		if (e >= 0 && e < this._cachedMeta.data.length) {
			let t = this._cachedMeta.data[e];
			i = t.$context ||= Vs(this.getContext(), e, t), i.parsed = this.getParsed(e), i.raw = r.data[e], i.index = i.dataIndex = e;
		} else i = this.$context ||= Bs(this.chart.getContext(), this.index), i.dataset = r, i.index = i.datasetIndex = this.index;
		return i.active = !!t, i.mode = n, i;
	}
	resolveDatasetElementOptions(e) {
		return this._resolveElementOptions(this.datasetElementType.id, e);
	}
	resolveDataElementOptions(e, t) {
		return this._resolveElementOptions(this.dataElementType.id, t, e);
	}
	_resolveElementOptions(e, t = "default", n) {
		let r = t === "active", i = this._cachedDataOpts, a = e + "-" + t, o = i[a], s = this.enableOptionSharing && Si(n);
		if (o) return Ws(o, s);
		let c = this.chart.config, l = c.datasetElementScopeKeys(this._type, e), u = r ? [
			`${e}Hover`,
			"hover",
			e,
			""
		] : [e, ""], d = c.getOptionScopes(this.getDataset(), l), f = Object.keys(Y.elements[e]), p = c.resolveNamedOptions(d, f, () => this.getContext(n, r, t), u);
		return p.$shared && (p.$shared = s, i[a] = Object.freeze(Ws(p, s))), p;
	}
	_resolveAnimations(e, t, n) {
		let r = this.chart, i = this._cachedDataOpts, a = `animation-${t}`, o = i[a];
		if (o) return o;
		let s;
		if (r.options.animation !== !1) {
			let r = this.chart.config, i = r.datasetAnimationScopeKeys(this._type, t), a = r.getOptionScopes(this.getDataset(), i);
			s = r.createResolver(a, this.getContext(e, n, t));
		}
		let c = new ws(r, s && s.animations);
		return s && s._cacheable && (i[a] = Object.freeze(c)), c;
	}
	getSharedOptions(e) {
		if (e.$shared) return this._sharedOptions ||= Object.assign({}, e);
	}
	includeOptions(e, t) {
		return !t || Us(e) || this.chart._animationsDisabled;
	}
	_getSharedOptions(e, t) {
		let n = this.resolveDataElementOptions(e, t), r = this._sharedOptions, i = this.getSharedOptions(n), a = this.includeOptions(t, i) || i !== r;
		return this.updateSharedOptions(i, t, n), {
			sharedOptions: i,
			includeOptions: a
		};
	}
	updateElement(e, t, n, r) {
		Us(r) ? Object.assign(e, n) : this._resolveAnimations(t, r).update(e, n);
	}
	updateSharedOptions(e, t, n) {
		e && !Us(t) && this._resolveAnimations(void 0, t).update(e, n);
	}
	_setStyle(e, t, n, r) {
		e.active = r;
		let i = this.getStyle(t, r);
		this._resolveAnimations(t, n, r).update(e, { options: !r && this.getSharedOptions(i) || i });
	}
	removeHoverStyle(e, t, n) {
		this._setStyle(e, n, "active", !1);
	}
	setHoverStyle(e, t, n) {
		this._setStyle(e, n, "active", !0);
	}
	_removeDatasetHoverStyle() {
		let e = this._cachedMeta.dataset;
		e && this._setStyle(e, void 0, "active", !1);
	}
	_setDatasetHoverStyle() {
		let e = this._cachedMeta.dataset;
		e && this._setStyle(e, void 0, "active", !0);
	}
	_resyncElements(e) {
		let t = this._data, n = this._cachedMeta.data;
		for (let [e, t, n] of this._syncList) this[e](t, n);
		this._syncList = [];
		let r = n.length, i = t.length, a = Math.min(i, r);
		a && this.parse(0, a), i > r ? this._insertElements(r, i - r, e) : i < r && this._removeElements(i, r - i);
	}
	_insertElements(e, t, n = !0) {
		let r = this._cachedMeta, i = r.data, a = e + t, o, s = (e) => {
			for (e.length += t, o = e.length - 1; o >= a; o--) e[o] = e[o - t];
		};
		for (s(i), o = e; o < a; ++o) i[o] = new this.dataElementType();
		this._parsing && s(r._parsed), this.parse(e, t), n && this.updateElements(i, e, t, "reset");
	}
	updateElements(e, t, n, r) {}
	_removeElements(e, t) {
		let n = this._cachedMeta;
		if (this._parsing) {
			let r = n._parsed.splice(e, t);
			n._stacked && Hs(n, r);
		}
		n.data.splice(e, t);
	}
	_sync(e) {
		if (this._parsing) this._syncList.push(e);
		else {
			let [t, n, r] = e;
			this[t](n, r);
		}
		this.chart._dataChanges.push([this.index, ...e]);
	}
	_onDataPush() {
		let e = arguments.length;
		this._sync([
			"_insertElements",
			this.getDataset().data.length - e,
			e
		]);
	}
	_onDataPop() {
		this._sync([
			"_removeElements",
			this._cachedMeta.data.length - 1,
			1
		]);
	}
	_onDataShift() {
		this._sync([
			"_removeElements",
			0,
			1
		]);
	}
	_onDataSplice(e, t) {
		t && this._sync([
			"_removeElements",
			e,
			t
		]);
		let n = arguments.length - 2;
		n && this._sync([
			"_insertElements",
			e,
			n
		]);
	}
	_onDataUnshift() {
		this._sync([
			"_insertElements",
			0,
			arguments.length
		]);
	}
};
function qs(e, t) {
	if (!e._cache.$bar) {
		let n = e.getMatchingVisibleMetas(t), r = [];
		for (let t = 0, i = n.length; t < i; t++) r = r.concat(n[t].controller.getAllParsedValues(e));
		e._cache.$bar = na(r.sort((e, t) => e - t));
	}
	return e._cache.$bar;
}
function Js(e) {
	let t = e.iScale, n = qs(t, e.type), r = t._length, i, a, o, s, c = () => {
		o !== 32767 && o !== -32768 && (Si(s) && (r = Math.min(r, Math.abs(o - s) || r)), s = o);
	};
	for (i = 0, a = n.length; i < a; ++i) o = t.getPixelForValue(n[i]), c();
	for (s = void 0, i = 0, a = t.ticks.length; i < a; ++i) o = t.getPixelForTick(i), c();
	return r;
}
function Ys(e, t, n, r) {
	let i = n.barThickness, a, o;
	return F(i) ? (a = t.min * n.categoryPercentage, o = n.barPercentage) : (a = i * r, o = 1), {
		chunk: a / r,
		ratio: o,
		start: t.pixels[e] - a / 2
	};
}
function Xs(e, t, n, r) {
	let i = t.pixels, a = i[e], o = e > 0 ? i[e - 1] : null, s = e < i.length - 1 ? i[e + 1] : null, c = n.categoryPercentage;
	o === null && (o = a - (s === null ? t.end - t.start : s - a)), s === null && (s = a + a - o);
	let l = a - (a - Math.min(o, s)) / 2 * c;
	return {
		chunk: Math.abs(s - o) / 2 * c / r,
		ratio: n.barPercentage,
		start: l
	};
}
function Zs(e, t, n, r) {
	let i = n.parse(e[0], r), a = n.parse(e[1], r), o = Math.min(i, a), s = Math.max(i, a), c = o, l = s;
	Math.abs(o) > Math.abs(s) && (c = s, l = o), t[n.axis] = l, t._custom = {
		barStart: c,
		barEnd: l,
		start: i,
		end: a,
		min: o,
		max: s
	};
}
function Qs(e, t, n, r) {
	return I(e) ? Zs(e, t, n, r) : t[n.axis] = n.parse(e, r), t;
}
function $s(e, t, n, r) {
	let i = e.iScale, a = e.vScale, o = i.getLabels(), s = i === a, c = [], l, u, d, f;
	for (l = n, u = n + r; l < u; ++l) f = t[l], d = {}, d[i.axis] = s || i.parse(o[l], l), c.push(Qs(f, d, a, l));
	return c;
}
function ec(e) {
	return e && e.barStart !== void 0 && e.barEnd !== void 0;
}
function tc(e, t, n) {
	return e === 0 ? (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1) : Mi(e);
}
function nc(e) {
	let t, n, r, i, a;
	return e.horizontal ? (t = e.base > e.x, n = "left", r = "right") : (t = e.base < e.y, n = "bottom", r = "top"), t ? (i = "end", a = "start") : (i = "start", a = "end"), {
		start: n,
		end: r,
		reverse: t,
		top: i,
		bottom: a
	};
}
function rc(e, t, n, r) {
	let i = t.borderSkipped, a = {};
	if (!i) {
		e.borderSkipped = a;
		return;
	}
	if (i === !0) {
		e.borderSkipped = {
			top: !0,
			right: !0,
			bottom: !0,
			left: !0
		};
		return;
	}
	let { start: o, end: s, reverse: c, top: l, bottom: u } = nc(e);
	i === "middle" && n && (e.enableBorderRadius = !0, (n._top || 0) === r ? i = l : (n._bottom || 0) === r ? i = u : (a[ic(u, o, s, c)] = !0, i = l)), a[ic(i, o, s, c)] = !0, e.borderSkipped = a;
}
function ic(e, t, n, r) {
	return r ? (e = ac(e, t, n), e = oc(e, n, t)) : e = oc(e, t, n), e;
}
function ac(e, t, n) {
	return e === t ? n : e === n ? t : e;
}
function oc(e, t, n) {
	return e === "start" ? t : e === "end" ? n : e;
}
function sc(e, { inflateAmount: t }, n) {
	e.inflateAmount = t === "auto" ? n === 1 ? .33 : 0 : t;
}
var cc = class extends Ks {
	static id = "bar";
	static defaults = {
		datasetElementType: !1,
		dataElementType: "bar",
		categoryPercentage: .8,
		barPercentage: .9,
		grouped: !0,
		animations: { numbers: {
			type: "number",
			properties: [
				"x",
				"y",
				"base",
				"width",
				"height"
			]
		} }
	};
	static overrides = { scales: {
		_index_: {
			type: "category",
			offset: !0,
			grid: { offset: !0 }
		},
		_value_: {
			type: "linear",
			beginAtZero: !0
		}
	} };
	parsePrimitiveData(e, t, n, r) {
		return $s(e, t, n, r);
	}
	parseArrayData(e, t, n, r) {
		return $s(e, t, n, r);
	}
	parseObjectData(e, t, n, r) {
		let { iScale: i, vScale: a } = e, { xAxisKey: o = "x", yAxisKey: s = "y" } = this._parsing, c = i.axis === "x" ? o : s, l = a.axis === "x" ? o : s, u = [], d, f, p, m;
		for (d = n, f = n + r; d < f; ++d) m = t[d], p = {}, p[i.axis] = i.parse(bi(m, c), d), u.push(Qs(bi(m, l), p, a, d));
		return u;
	}
	updateRangeFromParsed(e, t, n, r) {
		super.updateRangeFromParsed(e, t, n, r);
		let i = n._custom;
		i && t === this._cachedMeta.vScale && (e.min = Math.min(e.min, i.min), e.max = Math.max(e.max, i.max));
	}
	getMaxOverflow() {
		return 0;
	}
	getLabelAndValue(e) {
		let { iScale: t, vScale: n } = this._cachedMeta, r = this.getParsed(e), i = r._custom, a = ec(i) ? "[" + i.start + ", " + i.end + "]" : "" + n.getLabelForValue(r[n.axis]);
		return {
			label: "" + t.getLabelForValue(r[t.axis]),
			value: a
		};
	}
	initialize() {
		this.enableOptionSharing = !0, super.initialize();
		let e = this._cachedMeta;
		e.stack = this.getDataset().stack;
	}
	update(e) {
		let t = this._cachedMeta;
		this.updateElements(t.data, 0, t.data.length, e);
	}
	updateElements(e, t, n, r) {
		let i = r === "reset", { index: a, _cachedMeta: { vScale: o } } = this, s = o.getBasePixel(), c = o.isHorizontal(), l = this._getRuler(), { sharedOptions: u, includeOptions: d } = this._getSharedOptions(t, r);
		for (let f = t; f < t + n; f++) {
			let t = this.getParsed(f), n = i || F(t[o.axis]) ? {
				base: s,
				head: s
			} : this._calculateBarValuePixels(f), p = this._calculateBarIndexPixels(f, l), m = (t._stacks || {})[o.axis], h = {
				horizontal: c,
				base: n.base,
				enableBorderRadius: !m || ec(t._custom) || a === m._top || a === m._bottom,
				x: c ? n.head : p.center,
				y: c ? p.center : n.head,
				height: c ? p.size : Math.abs(n.size),
				width: c ? Math.abs(n.size) : p.size
			};
			d && (h.options = u || this.resolveDataElementOptions(f, e[f].active ? "active" : r));
			let g = h.options || e[f].options;
			rc(h, g, m, a), sc(h, g, l.ratio), this.updateElement(e[f], f, h, r);
		}
	}
	_getStacks(e, t) {
		let { iScale: n } = this._cachedMeta, r = n.getMatchingVisibleMetas(this._type).filter((e) => e.controller.options.grouped), i = n.options.stacked, a = [], o = this._cachedMeta.controller.getParsed(t), s = o && o[n.axis], c = (e) => {
			let t = e._parsed.find((e) => e[n.axis] === s), r = t && t[e.vScale.axis];
			if (F(r) || isNaN(r)) return !0;
		};
		for (let n of r) if (!(t !== void 0 && c(n)) && ((i === !1 || a.indexOf(n.stack) === -1 || i === void 0 && n.stack === void 0) && a.push(n.stack), n.index === e)) break;
		return a.length || a.push(void 0), a;
	}
	_getStackCount(e) {
		return this._getStacks(void 0, e).length;
	}
	_getAxisCount() {
		return this._getAxis().length;
	}
	getFirstScaleIdForIndexAxis() {
		let e = this.chart.scales, t = this.chart.options.indexAxis;
		return Object.keys(e).filter((n) => e[n].axis === t).shift();
	}
	_getAxis() {
		let e = {}, t = this.getFirstScaleIdForIndexAxis();
		for (let n of this.chart.data.datasets) e[B(this.chart.options.indexAxis === "x" ? n.xAxisID : n.yAxisID, t)] = !0;
		return Object.keys(e);
	}
	_getStackIndex(e, t, n) {
		let r = this._getStacks(e, n), i = t === void 0 ? -1 : r.indexOf(t);
		return i === -1 ? r.length - 1 : i;
	}
	_getRuler() {
		let e = this.options, t = this._cachedMeta, n = t.iScale, r = [], i, a;
		for (i = 0, a = t.data.length; i < a; ++i) r.push(n.getPixelForValue(this.getParsed(i)[n.axis], i));
		let o = e.barThickness;
		return {
			min: o || Js(t),
			pixels: r,
			start: n._startPixel,
			end: n._endPixel,
			stackCount: this._getStackCount(),
			scale: n,
			grouped: e.grouped,
			ratio: o ? 1 : e.categoryPercentage * e.barPercentage
		};
	}
	_calculateBarValuePixels(e) {
		let { _cachedMeta: { vScale: t, _stacked: n, index: r }, options: { base: i, minBarLength: a } } = this, o = i || 0, s = this.getParsed(e), c = s._custom, l = ec(c), u = s[t.axis], d = 0, f = n ? this.applyStack(t, s, n) : u, p, m;
		f !== u && (d = f - u, f = u), l && (u = c.barStart, f = c.barEnd - c.barStart, u !== 0 && Mi(u) !== Mi(c.barEnd) && (d = 0), d += u);
		let h = !F(i) && !l ? i : d, g = t.getPixelForValue(h);
		if (p = this.chart.getDataVisibility(e) ? t.getPixelForValue(d + f) : g, m = p - g, Math.abs(m) < a) {
			m = tc(m, t, o) * a, u === o && (g -= m / 2);
			let e = t.getPixelForDecimal(0), i = t.getPixelForDecimal(1);
			g = Math.max(Math.min(g, Math.max(e, i)), Math.min(e, i)), p = g + m, n && !l && (s._stacks[t.axis]._visualValues[r] = t.getValueForPixel(p) - t.getValueForPixel(g));
		}
		if (g === t.getPixelForValue(o)) {
			let e = Mi(m) * t.getLineWidthForValue(o) / 2;
			g += e, m -= e;
		}
		return {
			size: m,
			base: g,
			head: p,
			center: p + m / 2
		};
	}
	_calculateBarIndexPixels(e, t) {
		let n = t.scale, r = this.options, i = r.skipNull, a = B(r.maxBarThickness, Infinity), o, s, c = this._getAxisCount();
		if (t.grouped) {
			let n = i ? this._getStackCount(e) : t.stackCount, l = r.barThickness === "flex" ? Xs(e, t, r, n * c) : Ys(e, t, r, n * c), u = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, d = this._getAxis().indexOf(B(u, this.getFirstScaleIdForIndexAxis())), f = this._getStackIndex(this.index, this._cachedMeta.stack, i ? e : void 0) + d;
			o = l.start + l.chunk * f + l.chunk / 2, s = Math.min(a, l.chunk * l.ratio);
		} else o = n.getPixelForValue(this.getParsed(e)[n.axis], e), s = Math.min(a, t.min * t.ratio);
		return {
			base: o - s / 2,
			head: o + s / 2,
			center: o,
			size: s
		};
	}
	draw() {
		let e = this._cachedMeta, t = e.vScale, n = e.data, r = n.length, i = 0;
		for (; i < r; ++i) this.getParsed(i)[t.axis] !== null && !n[i].hidden && n[i].draw(this._ctx);
	}
}, lc = class extends Ks {
	static id = "line";
	static defaults = {
		datasetElementType: "line",
		dataElementType: "point",
		showLine: !0,
		spanGaps: !1
	};
	static overrides = { scales: {
		_index_: { type: "category" },
		_value_: { type: "linear" }
	} };
	initialize() {
		this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
	}
	update(e) {
		let t = this._cachedMeta, { dataset: n, data: r = [], _dataset: i } = t, a = this.chart._animationsDisabled, { start: o, count: s } = ca(t, r, a);
		this._drawStart = o, this._drawCount = s, la(t) && (o = 0, s = r.length), n._chart = this.chart, n._datasetIndex = this.index, n._decimated = !!i._decimated, n.points = r;
		let c = this.resolveDatasetElementOptions(e);
		this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(n, void 0, {
			animated: !a,
			options: c
		}, e), this.updateElements(r, o, s, e);
	}
	updateElements(e, t, n, r) {
		let i = r === "reset", { iScale: a, vScale: o, _stacked: s, _dataset: c } = this._cachedMeta, { sharedOptions: l, includeOptions: u } = this._getSharedOptions(t, r), d = a.axis, f = o.axis, { spanGaps: p, segment: m } = this.options, h = Li(p) ? p : Infinity, g = this.chart._animationsDisabled || i || r === "none", _ = t + n, v = e.length, y = t > 0 && this.getParsed(t - 1);
		for (let n = 0; n < v; ++n) {
			let p = e[n], v = g ? p : {};
			if (n < t || n >= _) {
				v.skip = !0;
				continue;
			}
			let b = this.getParsed(n), x = F(b[f]), S = v[d] = a.getPixelForValue(b[d], n), C = v[f] = i || x ? o.getBasePixel() : o.getPixelForValue(s ? this.applyStack(o, b, s) : b[f], n);
			v.skip = isNaN(S) || isNaN(C) || x, v.stop = n > 0 && Math.abs(b[d] - y[d]) > h, m && (v.parsed = b, v.raw = c.data[n]), u && (v.options = l || this.resolveDataElementOptions(n, p.active ? "active" : r)), g || this.updateElement(p, n, v, r), y = b;
		}
	}
	getMaxOverflow() {
		let e = this._cachedMeta, t = e.dataset, n = t.options && t.options.borderWidth || 0, r = e.data || [];
		if (!r.length) return n;
		let i = r[0].size(this.resolveDataElementOptions(0)), a = r[r.length - 1].size(this.resolveDataElementOptions(r.length - 1));
		return Math.max(n, i, a) / 2;
	}
	draw() {
		let e = this._cachedMeta;
		e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis), super.draw();
	}
};
function uc() {
	throw Error("This method is not implemented: Check that a complete date adapter is provided.");
}
var dc = { _date: class e {
	static override(t) {
		Object.assign(e.prototype, t);
	}
	options;
	constructor(e) {
		this.options = e || {};
	}
	init() {}
	formats() {
		return uc();
	}
	parse() {
		return uc();
	}
	format() {
		return uc();
	}
	add() {
		return uc();
	}
	diff() {
		return uc();
	}
	startOf() {
		return uc();
	}
	endOf() {
		return uc();
	}
} };
function fc(e, t, n, r) {
	let { controller: i, data: a, _sorted: o } = e, s = i._cachedMeta.iScale, c = e.dataset && e.dataset.options ? e.dataset.options.spanGaps : null;
	if (s && t === s.axis && t !== "r" && o && a.length) {
		let o = s._reversePixels ? Zi : Xi;
		if (!r) {
			let r = o(a, t, n);
			if (c) {
				let { vScale: t } = i._cachedMeta, { _parsed: n } = e, a = n.slice(0, r.lo + 1).reverse().findIndex((e) => !F(e[t.axis]));
				r.lo -= Math.max(0, a);
				let o = n.slice(r.hi).findIndex((e) => !F(e[t.axis]));
				r.hi += Math.max(0, o);
			}
			return r;
		}
		if (i._sharedOptions) {
			let e = a[0], r = typeof e.getRange == "function" && e.getRange(t);
			if (r) {
				let e = o(a, t, n - r), i = o(a, t, n + r);
				return {
					lo: e.lo,
					hi: i.hi
				};
			}
		}
	}
	return {
		lo: 0,
		hi: a.length - 1
	};
}
function pc(e, t, n, r, i) {
	let a = e.getSortedVisibleDatasetMetas(), o = n[t];
	for (let e = 0, n = a.length; e < n; ++e) {
		let { index: n, data: s } = a[e], { lo: c, hi: l } = fc(a[e], t, o, i);
		for (let e = c; e <= l; ++e) {
			let t = s[e];
			t.skip || r(t, n, e);
		}
	}
}
function mc(e) {
	let t = e.indexOf("x") !== -1, n = e.indexOf("y") !== -1;
	return function(e, r) {
		let i = t ? Math.abs(e.x - r.x) : 0, a = n ? Math.abs(e.y - r.y) : 0;
		return Math.sqrt(i ** 2 + a ** 2);
	};
}
function hc(e, t, n, r, i) {
	let a = [];
	return !i && !e.isPointInArea(t) || pc(e, n, t, function(n, o, s) {
		(i || za(n, e.chartArea, 0)) && n.inRange(t.x, t.y, r) && a.push({
			element: n,
			datasetIndex: o,
			index: s
		});
	}, !0), a;
}
function gc(e, t, n, r) {
	let i = [];
	function a(e, n, a) {
		let { startAngle: o, endAngle: s } = e.getProps(["startAngle", "endAngle"], r), { angle: c } = Ui(e, {
			x: t.x,
			y: t.y
		});
		Ki(c, o, s) && i.push({
			element: e,
			datasetIndex: n,
			index: a
		});
	}
	return pc(e, n, t, a), i;
}
function _c(e, t, n, r, i, a) {
	let o = [], s = mc(n), c = Infinity;
	function l(n, l, u) {
		let d = n.inRange(t.x, t.y, i);
		if (r && !d) return;
		let f = n.getCenterPoint(i);
		if (!(a || e.isPointInArea(f)) && !d) return;
		let p = s(t, f);
		p < c ? (o = [{
			element: n,
			datasetIndex: l,
			index: u
		}], c = p) : p === c && o.push({
			element: n,
			datasetIndex: l,
			index: u
		});
	}
	return pc(e, n, t, l), o;
}
function vc(e, t, n, r, i, a) {
	return !a && !e.isPointInArea(t) ? [] : n === "r" && !r ? gc(e, t, n, i) : _c(e, t, n, r, i, a);
}
function yc(e, t, n, r, i) {
	let a = [], o = n === "x" ? "inXRange" : "inYRange", s = !1;
	return pc(e, n, t, (e, r, c) => {
		e[o] && e[o](t[n], i) && (a.push({
			element: e,
			datasetIndex: r,
			index: c
		}), s ||= e.inRange(t.x, t.y, i));
	}), r && !s ? [] : a;
}
var bc = {
	evaluateInteractionItems: pc,
	modes: {
		index(e, t, n, r) {
			let i = Wo(t, e), a = n.axis || "x", o = n.includeInvisible || !1, s = n.intersect ? hc(e, i, a, r, o) : vc(e, i, a, !1, r, o), c = [];
			return s.length ? (e.getSortedVisibleDatasetMetas().forEach((e) => {
				let t = s[0].index, n = e.data[t];
				n && !n.skip && c.push({
					element: n,
					datasetIndex: e.index,
					index: t
				});
			}), c) : [];
		},
		dataset(e, t, n, r) {
			let i = Wo(t, e), a = n.axis || "xy", o = n.includeInvisible || !1, s = n.intersect ? hc(e, i, a, r, o) : vc(e, i, a, !1, r, o);
			if (s.length > 0) {
				let t = s[0].datasetIndex, n = e.getDatasetMeta(t).data;
				s = [];
				for (let e = 0; e < n.length; ++e) s.push({
					element: n[e],
					datasetIndex: t,
					index: e
				});
			}
			return s;
		},
		point(e, t, n, r) {
			return hc(e, Wo(t, e), n.axis || "xy", r, n.includeInvisible || !1);
		},
		nearest(e, t, n, r) {
			let i = Wo(t, e), a = n.axis || "xy", o = n.includeInvisible || !1;
			return vc(e, i, a, n.intersect, r, o);
		},
		x(e, t, n, r) {
			return yc(e, Wo(t, e), "x", n.intersect, r);
		},
		y(e, t, n, r) {
			return yc(e, Wo(t, e), "y", n.intersect, r);
		}
	}
}, xc = [
	"left",
	"top",
	"right",
	"bottom"
];
function Sc(e, t) {
	return e.filter((e) => e.pos === t);
}
function Cc(e, t) {
	return e.filter((e) => xc.indexOf(e.pos) === -1 && e.box.axis === t);
}
function wc(e, t) {
	return e.sort((e, n) => {
		let r = t ? n : e, i = t ? e : n;
		return r.weight === i.weight ? r.index - i.index : r.weight - i.weight;
	});
}
function Tc(e) {
	let t = [], n, r, i, a, o, s;
	for (n = 0, r = (e || []).length; n < r; ++n) i = e[n], {position: a, options: {stack: o, stackWeight: s = 1}} = i, t.push({
		index: n,
		box: i,
		pos: a,
		horizontal: i.isHorizontal(),
		weight: i.weight,
		stack: o && a + o,
		stackWeight: s
	});
	return t;
}
function Ec(e) {
	let t = {};
	for (let n of e) {
		let { stack: e, pos: r, stackWeight: i } = n;
		if (!e || !xc.includes(r)) continue;
		let a = t[e] || (t[e] = {
			count: 0,
			placed: 0,
			weight: 0,
			size: 0
		});
		a.count++, a.weight += i;
	}
	return t;
}
function Dc(e, t) {
	let n = Ec(e), { vBoxMaxWidth: r, hBoxMaxHeight: i } = t, a, o, s;
	for (a = 0, o = e.length; a < o; ++a) {
		s = e[a];
		let { fullSize: o } = s.box, c = n[s.stack], l = c && s.stackWeight / c.weight;
		s.horizontal ? (s.width = l ? l * r : o && t.availableWidth, s.height = i) : (s.width = r, s.height = l ? l * i : o && t.availableHeight);
	}
	return n;
}
function Oc(e) {
	let t = Tc(e), n = wc(t.filter((e) => e.box.fullSize), !0), r = wc(Sc(t, "left"), !0), i = wc(Sc(t, "right")), a = wc(Sc(t, "top"), !0), o = wc(Sc(t, "bottom")), s = Cc(t, "x"), c = Cc(t, "y");
	return {
		fullSize: n,
		leftAndTop: r.concat(a),
		rightAndBottom: i.concat(c).concat(o).concat(s),
		chartArea: Sc(t, "chartArea"),
		vertical: r.concat(i).concat(c),
		horizontal: a.concat(o).concat(s)
	};
}
function kc(e, t, n, r) {
	return Math.max(e[n], t[n]) + Math.max(e[r], t[r]);
}
function Ac(e, t) {
	e.top = Math.max(e.top, t.top), e.left = Math.max(e.left, t.left), e.bottom = Math.max(e.bottom, t.bottom), e.right = Math.max(e.right, t.right);
}
function jc(e, t, n, r) {
	let { pos: i, box: a } = n, o = e.maxPadding;
	if (!L(i)) {
		n.size && (e[i] -= n.size);
		let t = r[n.stack] || {
			size: 0,
			count: 1
		};
		t.size = Math.max(t.size, n.horizontal ? a.height : a.width), n.size = t.size / t.count, e[i] += n.size;
	}
	a.getPadding && Ac(o, a.getPadding());
	let s = Math.max(0, t.outerWidth - kc(o, e, "left", "right")), c = Math.max(0, t.outerHeight - kc(o, e, "top", "bottom")), l = s !== e.w, u = c !== e.h;
	return e.w = s, e.h = c, n.horizontal ? {
		same: l,
		other: u
	} : {
		same: u,
		other: l
	};
}
function Mc(e) {
	let t = e.maxPadding;
	function n(n) {
		let r = Math.max(t[n] - e[n], 0);
		return e[n] += r, r;
	}
	e.y += n("top"), e.x += n("left"), n("right"), n("bottom");
}
function Nc(e, t) {
	let n = t.maxPadding;
	function r(e) {
		let r = {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0
		};
		return e.forEach((e) => {
			r[e] = Math.max(t[e], n[e]);
		}), r;
	}
	return r(e ? ["left", "right"] : ["top", "bottom"]);
}
function Pc(e, t, n, r) {
	let i = [], a, o, s, c, l, u;
	for (a = 0, o = e.length, l = 0; a < o; ++a) {
		s = e[a], c = s.box, c.update(s.width || t.w, s.height || t.h, Nc(s.horizontal, t));
		let { same: o, other: d } = jc(t, n, s, r);
		l |= o && i.length, u ||= d, c.fullSize || i.push(s);
	}
	return l && Pc(i, t, n, r) || u;
}
function Fc(e, t, n, r, i) {
	e.top = n, e.left = t, e.right = t + r, e.bottom = n + i, e.width = r, e.height = i;
}
function Ic(e, t, n, r) {
	let i = n.padding, { x: a, y: o } = t;
	for (let s of e) {
		let e = s.box, c = r[s.stack] || {
			count: 1,
			placed: 0,
			weight: 1
		}, l = s.stackWeight / c.weight || 1;
		if (s.horizontal) {
			let r = t.w * l, a = c.size || e.height;
			Si(c.start) && (o = c.start), e.fullSize ? Fc(e, i.left, o, n.outerWidth - i.right - i.left, a) : Fc(e, t.left + c.placed, o, r, a), c.start = o, c.placed += r, o = e.bottom;
		} else {
			let r = t.h * l, o = c.size || e.width;
			Si(c.start) && (a = c.start), e.fullSize ? Fc(e, a, i.top, o, n.outerHeight - i.bottom - i.top) : Fc(e, a, t.top + c.placed, o, r), c.start = a, c.placed += r, a = e.right;
		}
	}
	t.x = a, t.y = o;
}
var Lc = {
	addBox(e, t) {
		e.boxes ||= [], t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
			return [{
				z: 0,
				draw(e) {
					t.draw(e);
				}
			}];
		}, e.boxes.push(t);
	},
	removeBox(e, t) {
		let n = e.boxes ? e.boxes.indexOf(t) : -1;
		n !== -1 && e.boxes.splice(n, 1);
	},
	configure(e, t, n) {
		t.fullSize = n.fullSize, t.position = n.position, t.weight = n.weight;
	},
	update(e, t, n, r) {
		if (!e) return;
		let i = X(e.options.layout.padding), a = Math.max(t - i.width, 0), o = Math.max(n - i.height, 0), s = Oc(e.boxes), c = s.vertical, l = s.horizontal;
		H(e.boxes, (e) => {
			typeof e.beforeLayout == "function" && e.beforeLayout();
		});
		let u = c.reduce((e, t) => t.box.options && t.box.options.display === !1 ? e : e + 1, 0) || 1, d = Object.freeze({
			outerWidth: t,
			outerHeight: n,
			padding: i,
			availableWidth: a,
			availableHeight: o,
			vBoxMaxWidth: a / 2 / u,
			hBoxMaxHeight: o / 2
		}), f = Object.assign({}, i);
		Ac(f, X(r));
		let p = Object.assign({
			maxPadding: f,
			w: a,
			h: o,
			x: i.left,
			y: i.top
		}, i), m = Dc(c.concat(l), d);
		Pc(s.fullSize, p, d, m), Pc(c, p, d, m), Pc(l, p, d, m) && Pc(c, p, d, m), Mc(p), Ic(s.leftAndTop, p, d, m), p.x += p.w, p.y += p.h, Ic(s.rightAndBottom, p, d, m), e.chartArea = {
			left: p.left,
			top: p.top,
			right: p.left + p.w,
			bottom: p.top + p.h,
			height: p.h,
			width: p.w
		}, H(s.chartArea, (t) => {
			let n = t.box;
			Object.assign(n, e.chartArea), n.update(p.w, p.h, {
				left: 0,
				top: 0,
				right: 0,
				bottom: 0
			});
		});
	}
}, Rc = class {
	acquireContext(e, t) {}
	releaseContext(e) {
		return !1;
	}
	addEventListener(e, t, n) {}
	removeEventListener(e, t, n) {}
	getDevicePixelRatio() {
		return 1;
	}
	getMaximumSize(e, t, n, r) {
		return t = Math.max(0, t || e.width), n ||= e.height, {
			width: t,
			height: Math.max(0, r ? Math.floor(t / r) : n)
		};
	}
	isAttached(e) {
		return !0;
	}
	updateConfig(e) {}
}, zc = class extends Rc {
	acquireContext(e) {
		return e && e.getContext && e.getContext("2d") || null;
	}
	updateConfig(e) {
		e.options.animation = !1;
	}
}, Bc = "$chartjs", Vc = {
	touchstart: "mousedown",
	touchmove: "mousemove",
	touchend: "mouseup",
	pointerenter: "mouseenter",
	pointerdown: "mousedown",
	pointermove: "mousemove",
	pointerup: "mouseup",
	pointerleave: "mouseout",
	pointerout: "mouseout"
}, Hc = (e) => e === null || e === "";
function Uc(e, t) {
	let n = e.style, r = e.getAttribute("height"), i = e.getAttribute("width");
	if (e[Bc] = { initial: {
		height: r,
		width: i,
		style: {
			display: n.display,
			height: n.height,
			width: n.width
		}
	} }, n.display = n.display || "block", n.boxSizing = n.boxSizing || "border-box", Hc(i)) {
		let t = Xo(e, "width");
		t !== void 0 && (e.width = t);
	}
	if (Hc(r)) {
		if (e.style.height === "") e.height = e.width / (t || 2);
		else {
			let t = Xo(e, "height");
			t !== void 0 && (e.height = t);
		}
	}
	return e;
}
var Wc = Yo ? { passive: !0 } : !1;
function Gc(e, t, n) {
	e && e.addEventListener(t, n, Wc);
}
function Kc(e, t, n) {
	e && e.canvas && e.canvas.removeEventListener(t, n, Wc);
}
function qc(e, t) {
	let n = Vc[e.type] || e.type, { x: r, y: i } = Wo(e, t);
	return {
		type: n,
		chart: t,
		native: e,
		x: r === void 0 ? null : r,
		y: i === void 0 ? null : i
	};
}
function Jc(e, t) {
	for (let n of e) if (n === t || n.contains(t)) return !0;
}
function Yc(e, t, n) {
	let r = e.canvas, i = new MutationObserver((e) => {
		let t = !1;
		for (let n of e) t ||= Jc(n.addedNodes, r), t &&= !Jc(n.removedNodes, r);
		t && n();
	});
	return i.observe(document, {
		childList: !0,
		subtree: !0
	}), i;
}
function Xc(e, t, n) {
	let r = e.canvas, i = new MutationObserver((e) => {
		let t = !1;
		for (let n of e) t ||= Jc(n.removedNodes, r), t &&= !Jc(n.addedNodes, r);
		t && n();
	});
	return i.observe(document, {
		childList: !0,
		subtree: !0
	}), i;
}
var Zc = /* @__PURE__ */ new Map(), Qc = 0;
function $c() {
	let e = window.devicePixelRatio;
	e !== Qc && (Qc = e, Zc.forEach((t, n) => {
		n.currentDevicePixelRatio !== e && t();
	}));
}
function el(e, t) {
	Zc.size || window.addEventListener("resize", $c), Zc.set(e, t);
}
function tl(e) {
	Zc.delete(e), Zc.size || window.removeEventListener("resize", $c);
}
function nl(e, t, n) {
	let r = e.canvas, i = r && Io(r);
	if (!i) return;
	let a = ia((e, t) => {
		let r = i.clientWidth;
		n(e, t), r < i.clientWidth && n();
	}, window), o = new ResizeObserver((e) => {
		let t = e[0], n = t.contentRect.width, r = t.contentRect.height;
		(n !== 0 || r !== 0) && a(n, r);
	});
	return o.observe(i), el(e, a), o;
}
function rl(e, t, n) {
	n && n.disconnect(), t === "resize" && tl(e);
}
function il(e, t, n) {
	let r = e.canvas, i = ia((t) => {
		e.ctx !== null && n(qc(t, e));
	}, e);
	return Gc(r, t, i), i;
}
var al = class extends Rc {
	acquireContext(e, t) {
		let n = e && e.getContext && e.getContext("2d");
		return n && n.canvas === e ? (Uc(e, t), n) : null;
	}
	releaseContext(e) {
		let t = e.canvas;
		if (!t[Bc]) return !1;
		let n = t[Bc].initial;
		["height", "width"].forEach((e) => {
			let r = n[e];
			F(r) ? t.removeAttribute(e) : t.setAttribute(e, r);
		});
		let r = n.style || {};
		return Object.keys(r).forEach((e) => {
			t.style[e] = r[e];
		}), t.width = t.width, delete t[Bc], !0;
	}
	addEventListener(e, t, n) {
		this.removeEventListener(e, t);
		let r = e.$proxies ||= {};
		r[t] = ({
			attach: Yc,
			detach: Xc,
			resize: nl
		}[t] || il)(e, t, n);
	}
	removeEventListener(e, t) {
		let n = e.$proxies ||= {}, r = n[t];
		r && (({
			attach: rl,
			detach: rl,
			resize: rl
		}[t] || Kc)(e, t, r), n[t] = void 0);
	}
	getDevicePixelRatio() {
		return window.devicePixelRatio;
	}
	getMaximumSize(e, t, n, r) {
		return qo(e, t, n, r);
	}
	isAttached(e) {
		let t = e && Io(e);
		return !!(t && t.isConnected);
	}
};
function ol(e) {
	return !Fo() || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas ? zc : al;
}
var sl = class {
	static defaults = {};
	static defaultRoutes = void 0;
	x;
	y;
	active = !1;
	options;
	$animations;
	tooltipPosition(e) {
		let { x: t, y: n } = this.getProps(["x", "y"], e);
		return {
			x: t,
			y: n
		};
	}
	hasValue() {
		return Li(this.x) && Li(this.y);
	}
	getProps(e, t) {
		let n = this.$animations;
		if (!t || !n) return this;
		let r = {};
		return e.forEach((e) => {
			r[e] = n[e] && n[e].active() ? n[e]._to : this[e];
		}), r;
	}
};
function cl(e, t) {
	let n = e.options.ticks, r = ll(e), i = Math.min(n.maxTicksLimit || r, r), a = n.major.enabled ? dl(t) : [], o = a.length, s = a[0], c = a[o - 1], l = [];
	if (o > i) return fl(t, l, a, o / i), l;
	let u = ul(a, t, i);
	if (o > 0) {
		let e, n, r = o > 1 ? Math.round((c - s) / (o - 1)) : null;
		for (pl(t, l, u, F(r) ? 0 : s - r, s), e = 0, n = o - 1; e < n; e++) pl(t, l, u, a[e], a[e + 1]);
		return pl(t, l, u, c, F(r) ? t.length : c + r), l;
	}
	return pl(t, l, u), l;
}
function ll(e) {
	let t = e.options.offset, n = e._tickSize(), r = e._length / n + +!t, i = e._maxLength / n;
	return Math.floor(Math.min(r, i));
}
function ul(e, t, n) {
	let r = ml(e), i = t.length / n;
	if (!r) return Math.max(i, 1);
	let a = Fi(r);
	for (let e = 0, t = a.length - 1; e < t; e++) {
		let t = a[e];
		if (t > i) return t;
	}
	return Math.max(i, 1);
}
function dl(e) {
	let t = [], n, r;
	for (n = 0, r = e.length; n < r; n++) e[n].major && t.push(n);
	return t;
}
function fl(e, t, n, r) {
	let i = 0, a = n[0], o;
	for (r = Math.ceil(r), o = 0; o < e.length; o++) o === a && (t.push(e[o]), i++, a = n[i * r]);
}
function pl(e, t, n, r, i) {
	let a = B(r, 0), o = Math.min(B(i, e.length), e.length), s = 0, c, l, u;
	for (n = Math.ceil(n), i && (c = i - r, n = c / Math.floor(c / n)), u = a; u < 0;) s++, u = Math.round(a + s * n);
	for (l = Math.max(a, 0); l < o; l++) l === u && (t.push(e[l]), s++, u = Math.round(a + s * n));
}
function ml(e) {
	let t = e.length, n, r;
	if (t < 2) return !1;
	for (r = e[0], n = 1; n < t; ++n) if (e[n] - e[n - 1] !== r) return !1;
	return r;
}
var hl = (e) => e === "left" ? "right" : e === "right" ? "left" : e, gl = (e, t, n) => t === "top" || t === "left" ? e[t] + n : e[t] - n, _l = (e, t) => Math.min(t || e, e);
function vl(e, t) {
	let n = [], r = e.length / t, i = e.length, a = 0;
	for (; a < i; a += r) n.push(e[Math.floor(a)]);
	return n;
}
function yl(e, t, n) {
	let r = e.ticks.length, i = Math.min(t, r - 1), a = e._startPixel, o = e._endPixel, s = 1e-6, c = e.getPixelForTick(i), l;
	if (!(n && (l = r === 1 ? Math.max(c - a, o - c) : t === 0 ? (e.getPixelForTick(1) - c) / 2 : (c - e.getPixelForTick(i - 1)) / 2, c += i < t ? l : -l, c < a - s || c > o + s))) return c;
}
function bl(e, t) {
	H(e, (e) => {
		let n = e.gc, r = n.length / 2, i;
		if (r > t) {
			for (i = 0; i < r; ++i) delete e.data[n[i]];
			n.splice(0, r);
		}
	});
}
function xl(e) {
	return e.drawTicks ? e.tickLength : 0;
}
function Sl(e, t) {
	if (!e.display) return 0;
	let n = Z(e.font, t), r = X(e.padding);
	return (I(e.text) ? e.text.length : 1) * n.lineHeight + r.height;
}
function Cl(e, t) {
	return io(e, {
		scale: t,
		type: "scale"
	});
}
function wl(e, t, n) {
	return io(e, {
		tick: n,
		index: t,
		type: "tick"
	});
}
function Tl(e, t, n) {
	let r = oa(e);
	return (n && t !== "right" || !n && t === "right") && (r = hl(r)), r;
}
function El(e, t, n, r) {
	let { top: i, left: a, bottom: o, right: s, chart: c } = e, { chartArea: l, scales: u } = c, d = 0, f, p, m, h = o - i, g = s - a;
	if (e.isHorizontal()) {
		if (p = J(r, a, s), L(n)) {
			let e = Object.keys(n)[0], r = n[e];
			m = u[e].getPixelForValue(r) + h - t;
		} else m = n === "center" ? (l.bottom + l.top) / 2 + h - t : gl(e, n, t);
		f = s - a;
	} else {
		if (L(n)) {
			let e = Object.keys(n)[0], r = n[e];
			p = u[e].getPixelForValue(r) - g + t;
		} else p = n === "center" ? (l.left + l.right) / 2 - g + t : gl(e, n, t);
		m = J(r, o, i), d = n === "left" ? -G : G;
	}
	return {
		titleX: p,
		titleY: m,
		maxWidth: f,
		rotation: d
	};
}
var Dl = class e extends sl {
	constructor(e) {
		super(), this.id = e.id, this.type = e.type, this.options = void 0, this.ctx = e.ctx, this.chart = e.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		}, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
	}
	init(e) {
		this.options = e.setContext(this.getContext()), this.axis = e.axis, this._userMin = this.parse(e.min), this._userMax = this.parse(e.max), this._suggestedMin = this.parse(e.suggestedMin), this._suggestedMax = this.parse(e.suggestedMax);
	}
	parse(e, t) {
		return e;
	}
	getUserBounds() {
		let { _userMin: e, _userMax: t, _suggestedMin: n, _suggestedMax: r } = this;
		return e = z(e, Infinity), t = z(t, -Infinity), n = z(n, Infinity), r = z(r, -Infinity), {
			min: z(e, n),
			max: z(t, r),
			minDefined: R(e),
			maxDefined: R(t)
		};
	}
	getMinMax(e) {
		let { min: t, max: n, minDefined: r, maxDefined: i } = this.getUserBounds(), a;
		if (r && i) return {
			min: t,
			max: n
		};
		let o = this.getMatchingVisibleMetas();
		for (let s = 0, c = o.length; s < c; ++s) a = o[s].controller.getMinMax(this, e), r || (t = Math.min(t, a.min)), i || (n = Math.max(n, a.max));
		return t = i && t > n ? n : t, n = r && t > n ? t : n, {
			min: z(t, z(n, t)),
			max: z(n, z(t, n))
		};
	}
	getPadding() {
		return {
			left: this.paddingLeft || 0,
			top: this.paddingTop || 0,
			right: this.paddingRight || 0,
			bottom: this.paddingBottom || 0
		};
	}
	getTicks() {
		return this.ticks;
	}
	getLabels() {
		let e = this.chart.data;
		return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || [];
	}
	getLabelItems(e = this.chart.chartArea) {
		return this._labelItems ||= this._computeLabelItems(e);
	}
	beforeLayout() {
		this._cache = {}, this._dataLimitsCached = !1;
	}
	beforeUpdate() {
		V(this.options.beforeUpdate, [this]);
	}
	update(e, t, n) {
		let { beginAtZero: r, grace: i, ticks: a } = this.options, o = a.sampleSize;
		this.beforeUpdate(), this.maxWidth = e, this.maxHeight = t, this._margins = n = Object.assign({
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		}, n), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + n.left + n.right : this.height + n.top + n.bottom, this._dataLimitsCached ||= (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = ro(this, i, r), !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
		let s = o < this.ticks.length;
		this._convertTicksToLabels(s ? vl(this.ticks, o) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a.display && (a.autoSkip || a.source === "auto") && (this.ticks = cl(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), s && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
	}
	configure() {
		let e = this.options.reverse, t, n;
		this.isHorizontal() ? (t = this.left, n = this.right) : (t = this.top, n = this.bottom, e = !e), this._startPixel = t, this._endPixel = n, this._reversePixels = e, this._length = n - t, this._alignToPixels = this.options.alignToPixels;
	}
	afterUpdate() {
		V(this.options.afterUpdate, [this]);
	}
	beforeSetDimensions() {
		V(this.options.beforeSetDimensions, [this]);
	}
	setDimensions() {
		this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
	}
	afterSetDimensions() {
		V(this.options.afterSetDimensions, [this]);
	}
	_callHooks(e) {
		this.chart.notifyPlugins(e, this.getContext()), V(this.options[e], [this]);
	}
	beforeDataLimits() {
		this._callHooks("beforeDataLimits");
	}
	determineDataLimits() {}
	afterDataLimits() {
		this._callHooks("afterDataLimits");
	}
	beforeBuildTicks() {
		this._callHooks("beforeBuildTicks");
	}
	buildTicks() {
		return [];
	}
	afterBuildTicks() {
		this._callHooks("afterBuildTicks");
	}
	beforeTickToLabelConversion() {
		V(this.options.beforeTickToLabelConversion, [this]);
	}
	generateTickLabels(e) {
		let t = this.options.ticks, n, r, i;
		for (n = 0, r = e.length; n < r; n++) i = e[n], i.label = V(t.callback, [
			i.value,
			n,
			e
		], this);
	}
	afterTickToLabelConversion() {
		V(this.options.afterTickToLabelConversion, [this]);
	}
	beforeCalculateLabelRotation() {
		V(this.options.beforeCalculateLabelRotation, [this]);
	}
	calculateLabelRotation() {
		let e = this.options, t = e.ticks, n = _l(this.ticks.length, e.ticks.maxTicksLimit), r = t.minRotation || 0, i = t.maxRotation, a = r, o, s, c;
		if (!this._isVisible() || !t.display || r >= i || n <= 1 || !this.isHorizontal()) {
			this.labelRotation = r;
			return;
		}
		let l = this._getLabelSizes(), u = l.widest.width, d = l.highest.height, f = q(this.chart.width - u, 0, this.maxWidth);
		o = e.offset ? this.maxWidth / n : f / (n - 1), u + 6 > o && (o = f / (n - (e.offset ? .5 : 1)), s = this.maxHeight - xl(e.grid) - t.padding - Sl(e.title, this.chart.options.font), c = Math.sqrt(u * u + d * d), a = Vi(Math.min(Math.asin(q((l.highest.height + 6) / o, -1, 1)), Math.asin(q(s / c, -1, 1)) - Math.asin(q(d / c, -1, 1)))), a = Math.max(r, Math.min(i, a))), this.labelRotation = a;
	}
	afterCalculateLabelRotation() {
		V(this.options.afterCalculateLabelRotation, [this]);
	}
	afterAutoSkip() {}
	beforeFit() {
		V(this.options.beforeFit, [this]);
	}
	fit() {
		let e = {
			width: 0,
			height: 0
		}, { chart: t, options: { ticks: n, title: r, grid: i } } = this, a = this._isVisible(), o = this.isHorizontal();
		if (a) {
			let a = Sl(r, t.options.font);
			if (o ? (e.width = this.maxWidth, e.height = xl(i) + a) : (e.height = this.maxHeight, e.width = xl(i) + a), n.display && this.ticks.length) {
				let { first: t, last: r, widest: i, highest: a } = this._getLabelSizes(), s = n.padding * 2, c = Bi(this.labelRotation), l = Math.cos(c), u = Math.sin(c);
				if (o) {
					let t = n.mirror ? 0 : u * i.width + l * a.height;
					e.height = Math.min(this.maxHeight, e.height + t + s);
				} else {
					let t = n.mirror ? 0 : l * i.width + u * a.height;
					e.width = Math.min(this.maxWidth, e.width + t + s);
				}
				this._calculatePadding(t, r, u, l);
			}
		}
		this._handleMargins(), o ? (this.width = this._length = t.width - this._margins.left - this._margins.right, this.height = e.height) : (this.width = e.width, this.height = this._length = t.height - this._margins.top - this._margins.bottom);
	}
	_calculatePadding(e, t, n, r) {
		let { ticks: { align: i, padding: a }, position: o } = this.options, s = this.labelRotation !== 0, c = o !== "top" && this.axis === "x";
		if (this.isHorizontal()) {
			let o = this.getPixelForTick(0) - this.left, l = this.right - this.getPixelForTick(this.ticks.length - 1), u = 0, d = 0;
			s ? c ? (u = r * e.width, d = n * t.height) : (u = n * e.height, d = r * t.width) : i === "start" ? d = t.width : i === "end" ? u = e.width : i !== "inner" && (u = e.width / 2, d = t.width / 2), this.paddingLeft = Math.max((u - o + a) * this.width / (this.width - o), 0), this.paddingRight = Math.max((d - l + a) * this.width / (this.width - l), 0);
		} else {
			let n = t.height / 2, r = e.height / 2;
			i === "start" ? (n = 0, r = e.height) : i === "end" && (n = t.height, r = 0), this.paddingTop = n + a, this.paddingBottom = r + a;
		}
	}
	_handleMargins() {
		this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
	}
	afterFit() {
		V(this.options.afterFit, [this]);
	}
	isHorizontal() {
		let { axis: e, position: t } = this.options;
		return t === "top" || t === "bottom" || e === "x";
	}
	isFullSize() {
		return this.options.fullSize;
	}
	_convertTicksToLabels(e) {
		this.beforeTickToLabelConversion(), this.generateTickLabels(e);
		let t, n;
		for (t = 0, n = e.length; t < n; t++) F(e[t].label) && (e.splice(t, 1), n--, t--);
		this.afterTickToLabelConversion();
	}
	_getLabelSizes() {
		let e = this._labelSizes;
		if (!e) {
			let t = this.options.ticks.sampleSize, n = this.ticks;
			t < n.length && (n = vl(n, t)), this._labelSizes = e = this._computeLabelSizes(n, n.length, this.options.ticks.maxTicksLimit);
		}
		return e;
	}
	_computeLabelSizes(e, t, n) {
		let { ctx: r, _longestTextCache: i } = this, a = [], o = [], s = Math.floor(t / _l(t, n)), c = 0, l = 0, u, d, f, p, m, h, g, _, v, y, b;
		for (u = 0; u < t; u += s) {
			if (p = e[u].label, m = this._resolveTickFontOptions(u), r.font = h = m.string, g = i[h] = i[h] || {
				data: {},
				gc: []
			}, _ = m.lineHeight, v = y = 0, !F(p) && !I(p)) v = Na(r, g.data, g.gc, v, p), y = _;
			else if (I(p)) for (d = 0, f = p.length; d < f; ++d) b = p[d], !F(b) && !I(b) && (v = Na(r, g.data, g.gc, v, b), y += _);
			a.push(v), o.push(y), c = Math.max(v, c), l = Math.max(y, l);
		}
		bl(i, t);
		let x = a.indexOf(c), S = o.indexOf(l), C = (e) => ({
			width: a[e] || 0,
			height: o[e] || 0
		});
		return {
			first: C(0),
			last: C(t - 1),
			widest: C(x),
			highest: C(S),
			widths: a,
			heights: o
		};
	}
	getLabelForValue(e) {
		return e;
	}
	getPixelForValue(e, t) {
		return NaN;
	}
	getValueForPixel(e) {}
	getPixelForTick(e) {
		let t = this.ticks;
		return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e].value);
	}
	getPixelForDecimal(e) {
		this._reversePixels && (e = 1 - e);
		let t = this._startPixel + e * this._length;
		return qi(this._alignToPixels ? Fa(this.chart, t, 0) : t);
	}
	getDecimalForPixel(e) {
		let t = (e - this._startPixel) / this._length;
		return this._reversePixels ? 1 - t : t;
	}
	getBasePixel() {
		return this.getPixelForValue(this.getBaseValue());
	}
	getBaseValue() {
		let { min: e, max: t } = this;
		return e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0;
	}
	getContext(e) {
		let t = this.ticks || [];
		if (e >= 0 && e < t.length) {
			let n = t[e];
			return n.$context ||= wl(this.getContext(), e, n);
		}
		return this.$context ||= Cl(this.chart.getContext(), this);
	}
	_tickSize() {
		let e = this.options.ticks, t = Bi(this.labelRotation), n = Math.abs(Math.cos(t)), r = Math.abs(Math.sin(t)), i = this._getLabelSizes(), a = e.autoSkipPadding || 0, o = i ? i.widest.width + a : 0, s = i ? i.highest.height + a : 0;
		return this.isHorizontal() ? s * n > o * r ? o / n : s / r : s * r < o * n ? s / n : o / r;
	}
	_isVisible() {
		let e = this.options.display;
		return e === "auto" ? this.getMatchingVisibleMetas().length > 0 : !!e;
	}
	_computeGridLineItems(e) {
		let t = this.axis, n = this.chart, r = this.options, { grid: i, position: a, border: o } = r, s = i.offset, c = this.isHorizontal(), l = this.ticks.length + +!!s, u = xl(i), d = [], f = o.setContext(this.getContext()), p = f.display ? f.width : 0, m = p / 2, h = function(e) {
			return Fa(n, e, p);
		}, g, _, v, y, b, x, S, C, w, T, E, D;
		if (a === "top") g = h(this.bottom), x = this.bottom - u, C = g - m, T = h(e.top) + m, D = e.bottom;
		else if (a === "bottom") g = h(this.top), T = e.top, D = h(e.bottom) - m, x = g + m, C = this.top + u;
		else if (a === "left") g = h(this.right), b = this.right - u, S = g - m, w = h(e.left) + m, E = e.right;
		else if (a === "right") g = h(this.left), w = e.left, E = h(e.right) - m, b = g + m, S = this.left + u;
		else if (t === "x") {
			if (a === "center") g = h((e.top + e.bottom) / 2 + .5);
			else if (L(a)) {
				let e = Object.keys(a)[0], t = a[e];
				g = h(this.chart.scales[e].getPixelForValue(t));
			}
			T = e.top, D = e.bottom, x = g + m, C = x + u;
		} else if (t === "y") {
			if (a === "center") g = h((e.left + e.right) / 2);
			else if (L(a)) {
				let e = Object.keys(a)[0], t = a[e];
				g = h(this.chart.scales[e].getPixelForValue(t));
			}
			b = g - m, S = b - u, w = e.left, E = e.right;
		}
		let O = B(r.ticks.maxTicksLimit, l), k = Math.max(1, Math.ceil(l / O));
		for (_ = 0; _ < l; _ += k) {
			let e = this.getContext(_), t = i.setContext(e), r = o.setContext(e), a = t.lineWidth, l = t.color, u = r.dash || [], f = r.dashOffset, p = t.tickWidth, m = t.tickColor, h = t.tickBorderDash || [], g = t.tickBorderDashOffset;
			v = yl(this, _, s), v !== void 0 && (y = Fa(n, v, a), c ? b = S = w = E = y : x = C = T = D = y, d.push({
				tx1: b,
				ty1: x,
				tx2: S,
				ty2: C,
				x1: w,
				y1: T,
				x2: E,
				y2: D,
				width: a,
				color: l,
				borderDash: u,
				borderDashOffset: f,
				tickWidth: p,
				tickColor: m,
				tickBorderDash: h,
				tickBorderDashOffset: g
			}));
		}
		return this._ticksLength = l, this._borderValue = g, d;
	}
	_computeLabelItems(e) {
		let t = this.axis, n = this.options, { position: r, ticks: i } = n, a = this.isHorizontal(), o = this.ticks, { align: s, crossAlign: c, padding: l, mirror: u } = i, d = xl(n.grid), f = d + l, p = u ? -l : f, m = -Bi(this.labelRotation), h = [], g, _, v, y, b, x, S, C, w, T, E, D, O = "middle";
		if (r === "top") x = this.bottom - p, S = this._getXAxisLabelAlignment();
		else if (r === "bottom") x = this.top + p, S = this._getXAxisLabelAlignment();
		else if (r === "left") {
			let e = this._getYAxisLabelAlignment(d);
			S = e.textAlign, b = e.x;
		} else if (r === "right") {
			let e = this._getYAxisLabelAlignment(d);
			S = e.textAlign, b = e.x;
		} else if (t === "x") {
			if (r === "center") x = (e.top + e.bottom) / 2 + f;
			else if (L(r)) {
				let e = Object.keys(r)[0], t = r[e];
				x = this.chart.scales[e].getPixelForValue(t) + f;
			}
			S = this._getXAxisLabelAlignment();
		} else if (t === "y") {
			if (r === "center") b = (e.left + e.right) / 2 - f;
			else if (L(r)) {
				let e = Object.keys(r)[0], t = r[e];
				b = this.chart.scales[e].getPixelForValue(t);
			}
			S = this._getYAxisLabelAlignment(d).textAlign;
		}
		t === "y" && (s === "start" ? O = "top" : s === "end" && (O = "bottom"));
		let k = this._getLabelSizes();
		for (g = 0, _ = o.length; g < _; ++g) {
			v = o[g], y = v.label;
			let e = i.setContext(this.getContext(g));
			C = this.getPixelForTick(g) + i.labelOffset, w = this._resolveTickFontOptions(g), T = w.lineHeight, E = I(y) ? y.length : 1;
			let t = E / 2, n = e.color, s = e.textStrokeColor, l = e.textStrokeWidth, d = S;
			a ? (b = C, S === "inner" && (d = g === _ - 1 ? this.options.reverse ? "left" : "right" : g === 0 ? this.options.reverse ? "right" : "left" : "center"), D = r === "top" ? c === "near" || m !== 0 ? -E * T + T / 2 : c === "center" ? -k.highest.height / 2 - t * T + T : -k.highest.height + T / 2 : c === "near" || m !== 0 ? T / 2 : c === "center" ? k.highest.height / 2 - t * T : k.highest.height - E * T, u && (D *= -1), m !== 0 && !e.showLabelBackdrop && (b += T / 2 * Math.sin(m))) : (x = C, D = (1 - E) * T / 2);
			let f;
			if (e.showLabelBackdrop) {
				let t = X(e.backdropPadding), n = k.heights[g], r = k.widths[g], i = D - t.top, a = 0 - t.left;
				switch (O) {
					case "middle":
						i -= n / 2;
						break;
					case "bottom": i -= n;
				}
				switch (S) {
					case "center":
						a -= r / 2;
						break;
					case "right":
						a -= r;
						break;
					case "inner": g === _ - 1 ? a -= r : g > 0 && (a -= r / 2);
				}
				f = {
					left: a,
					top: i,
					width: r + t.width,
					height: n + t.height,
					color: e.backdropColor
				};
			}
			h.push({
				label: y,
				font: w,
				textOffset: D,
				options: {
					rotation: m,
					color: n,
					strokeColor: s,
					strokeWidth: l,
					textAlign: d,
					textBaseline: O,
					translation: [b, x],
					backdrop: f
				}
			});
		}
		return h;
	}
	_getXAxisLabelAlignment() {
		let { position: e, ticks: t } = this.options;
		if (-Bi(this.labelRotation)) return e === "top" ? "left" : "right";
		let n = "center";
		return t.align === "start" ? n = "left" : t.align === "end" ? n = "right" : t.align === "inner" && (n = "inner"), n;
	}
	_getYAxisLabelAlignment(e) {
		let { position: t, ticks: { crossAlign: n, mirror: r, padding: i } } = this.options, a = this._getLabelSizes(), o = e + i, s = a.widest.width, c, l;
		return t === "left" ? r ? (l = this.right + i, n === "near" ? c = "left" : n === "center" ? (c = "center", l += s / 2) : (c = "right", l += s)) : (l = this.right - o, n === "near" ? c = "right" : n === "center" ? (c = "center", l -= s / 2) : (c = "left", l = this.left)) : t === "right" ? r ? (l = this.left + i, n === "near" ? c = "right" : n === "center" ? (c = "center", l -= s / 2) : (c = "left", l -= s)) : (l = this.left + o, n === "near" ? c = "left" : n === "center" ? (c = "center", l += s / 2) : (c = "right", l = this.right)) : c = "right", {
			textAlign: c,
			x: l
		};
	}
	_computeLabelArea() {
		if (this.options.ticks.mirror) return;
		let e = this.chart, t = this.options.position;
		if (t === "left" || t === "right") return {
			top: 0,
			left: this.left,
			bottom: e.height,
			right: this.right
		};
		if (t === "top" || t === "bottom") return {
			top: this.top,
			left: 0,
			bottom: this.bottom,
			right: e.width
		};
	}
	drawBackground() {
		let { ctx: e, options: { backgroundColor: t }, left: n, top: r, width: i, height: a } = this;
		t && (e.save(), e.fillStyle = t, e.fillRect(n, r, i, a), e.restore());
	}
	getLineWidthForValue(e) {
		let t = this.options.grid;
		if (!this._isVisible() || !t.display) return 0;
		let n = this.ticks.findIndex((t) => t.value === e);
		return n >= 0 ? t.setContext(this.getContext(n)).lineWidth : 0;
	}
	drawGrid(e) {
		let t = this.options.grid, n = this.ctx, r = this._gridLineItems ||= this._computeGridLineItems(e), i, a, o = (e, t, r) => {
			r.width && r.color && (n.save(), n.lineWidth = r.width, n.strokeStyle = r.color, n.setLineDash(r.borderDash || []), n.lineDashOffset = r.borderDashOffset, n.beginPath(), n.moveTo(e.x, e.y), n.lineTo(t.x, t.y), n.stroke(), n.restore());
		};
		if (t.display) for (i = 0, a = r.length; i < a; ++i) {
			let e = r[i];
			t.drawOnChartArea && o({
				x: e.x1,
				y: e.y1
			}, {
				x: e.x2,
				y: e.y2
			}, e), t.drawTicks && o({
				x: e.tx1,
				y: e.ty1
			}, {
				x: e.tx2,
				y: e.ty2
			}, {
				color: e.tickColor,
				width: e.tickWidth,
				borderDash: e.tickBorderDash,
				borderDashOffset: e.tickBorderDashOffset
			});
		}
	}
	drawBorder() {
		let { chart: e, ctx: t, options: { border: n, grid: r } } = this, i = n.setContext(this.getContext()), a = n.display ? i.width : 0;
		if (!a) return;
		let o = r.setContext(this.getContext(0)).lineWidth, s = this._borderValue, c, l, u, d;
		this.isHorizontal() ? (c = Fa(e, this.left, a) - a / 2, l = Fa(e, this.right, o) + o / 2, u = d = s) : (u = Fa(e, this.top, a) - a / 2, d = Fa(e, this.bottom, o) + o / 2, c = l = s), t.save(), t.lineWidth = i.width, t.strokeStyle = i.color, t.beginPath(), t.moveTo(c, u), t.lineTo(l, d), t.stroke(), t.restore();
	}
	drawLabels(e) {
		if (!this.options.ticks.display) return;
		let t = this.ctx, n = this._computeLabelArea();
		n && Ba(t, n);
		let r = this.getLabelItems(e);
		for (let e of r) {
			let n = e.options, r = e.font, i = e.label, a = e.textOffset;
			qa(t, i, 0, a, r, n);
		}
		n && Va(t);
	}
	drawTitle() {
		let { ctx: e, options: { position: t, title: n, reverse: r } } = this;
		if (!n.display) return;
		let i = Z(n.font), a = X(n.padding), o = n.align, s = i.lineHeight / 2;
		t === "bottom" || t === "center" || L(t) ? (s += a.bottom, I(n.text) && (s += i.lineHeight * (n.text.length - 1))) : s += a.top;
		let { titleX: c, titleY: l, maxWidth: u, rotation: d } = El(this, s, t, o);
		qa(e, n.text, 0, 0, i, {
			color: n.color,
			maxWidth: u,
			rotation: d,
			textAlign: Tl(o, t, r),
			textBaseline: "middle",
			translation: [c, l]
		});
	}
	draw(e) {
		this._isVisible() && (this.drawBackground(), this.drawGrid(e), this.drawBorder(), this.drawTitle(), this.drawLabels(e));
	}
	_layers() {
		let t = this.options, n = t.ticks && t.ticks.z || 0, r = B(t.grid && t.grid.z, -1), i = B(t.border && t.border.z, 0);
		return !this._isVisible() || this.draw !== e.prototype.draw ? [{
			z: n,
			draw: (e) => {
				this.draw(e);
			}
		}] : [
			{
				z: r,
				draw: (e) => {
					this.drawBackground(), this.drawGrid(e), this.drawTitle();
				}
			},
			{
				z: i,
				draw: () => {
					this.drawBorder();
				}
			},
			{
				z: n,
				draw: (e) => {
					this.drawLabels(e);
				}
			}
		];
	}
	getMatchingVisibleMetas(e) {
		let t = this.chart.getSortedVisibleDatasetMetas(), n = this.axis + "AxisID", r = [], i, a;
		for (i = 0, a = t.length; i < a; ++i) {
			let a = t[i];
			a[n] === this.id && (!e || a.type === e) && r.push(a);
		}
		return r;
	}
	_resolveTickFontOptions(e) {
		return Z(this.options.ticks.setContext(this.getContext(e)).font);
	}
	_maxDigits() {
		let e = this._resolveTickFontOptions(0).lineHeight;
		return (this.isHorizontal() ? this.width : this.height) / e;
	}
}, Ol = class {
	constructor(e, t, n) {
		this.type = e, this.scope = t, this.override = n, this.items = Object.create(null);
	}
	isForType(e) {
		return Object.prototype.isPrototypeOf.call(this.type.prototype, e.prototype);
	}
	register(e) {
		let t = Object.getPrototypeOf(e), n;
		jl(t) && (n = this.register(t));
		let r = this.items, i = e.id, a = this.scope + "." + i;
		if (!i) throw Error("class does not have id: " + e);
		return i in r || (r[i] = e, kl(e, a, n), this.override && Y.override(e.id, e.overrides)), a;
	}
	get(e) {
		return this.items[e];
	}
	unregister(e) {
		let t = this.items, n = e.id, r = this.scope;
		n in t && delete t[n], r && n in Y[r] && (delete Y[r][n], this.override && delete Oa[n]);
	}
};
function kl(e, t, n) {
	let r = mi(Object.create(null), [
		n ? Y.get(n) : {},
		Y.get(t),
		e.defaults
	]);
	Y.set(t, r), e.defaultRoutes && Al(t, e.defaultRoutes), e.descriptors && Y.describe(t, e.descriptors);
}
function Al(e, t) {
	Object.keys(t).forEach((n) => {
		let r = n.split("."), i = r.pop(), a = [e].concat(r).join("."), o = t[n].split("."), s = o.pop(), c = o.join(".");
		Y.route(a, i, c, s);
	});
}
function jl(e) {
	return "id" in e && "defaults" in e;
}
var Ml = /* #__PURE__ */ new class {
	constructor() {
		this.controllers = new Ol(Ks, "datasets", !0), this.elements = new Ol(sl, "elements"), this.plugins = new Ol(Object, "plugins"), this.scales = new Ol(Dl, "scales"), this._typedRegistries = [
			this.controllers,
			this.scales,
			this.elements
		];
	}
	add(...e) {
		this._each("register", e);
	}
	remove(...e) {
		this._each("unregister", e);
	}
	addControllers(...e) {
		this._each("register", e, this.controllers);
	}
	addElements(...e) {
		this._each("register", e, this.elements);
	}
	addPlugins(...e) {
		this._each("register", e, this.plugins);
	}
	addScales(...e) {
		this._each("register", e, this.scales);
	}
	getController(e) {
		return this._get(e, this.controllers, "controller");
	}
	getElement(e) {
		return this._get(e, this.elements, "element");
	}
	getPlugin(e) {
		return this._get(e, this.plugins, "plugin");
	}
	getScale(e) {
		return this._get(e, this.scales, "scale");
	}
	removeControllers(...e) {
		this._each("unregister", e, this.controllers);
	}
	removeElements(...e) {
		this._each("unregister", e, this.elements);
	}
	removePlugins(...e) {
		this._each("unregister", e, this.plugins);
	}
	removeScales(...e) {
		this._each("unregister", e, this.scales);
	}
	_each(e, t, n) {
		[...t].forEach((t) => {
			let r = n || this._getRegistryForType(t);
			n || r.isForType(t) || r === this.plugins && t.id ? this._exec(e, r, t) : H(t, (t) => {
				let r = n || this._getRegistryForType(t);
				this._exec(e, r, t);
			});
		});
	}
	_exec(e, t, n) {
		let r = xi(e);
		V(n["before" + r], [], n), t[e](n), V(n["after" + r], [], n);
	}
	_getRegistryForType(e) {
		for (let t = 0; t < this._typedRegistries.length; t++) {
			let n = this._typedRegistries[t];
			if (n.isForType(e)) return n;
		}
		return this.plugins;
	}
	_get(e, t, n) {
		let r = t.get(e);
		if (r === void 0) throw Error("\"" + e + "\" is not a registered " + n + ".");
		return r;
	}
}(), Nl = class {
	constructor() {
		this._init = void 0;
	}
	notify(e, t, n, r) {
		if (t === "beforeInit" && (this._init = this._createDescriptors(e, !0), this._notify(this._init, e, "install")), this._init === void 0) return;
		let i = r ? this._descriptors(e).filter(r) : this._descriptors(e), a = this._notify(i, e, t, n);
		return t === "afterDestroy" && (this._notify(i, e, "stop"), this._notify(this._init, e, "uninstall"), this._init = void 0), a;
	}
	_notify(e, t, n, r) {
		r ||= {};
		for (let i of e) {
			let e = i.plugin, a = e[n];
			if (V(a, [
				t,
				r,
				i.options
			], e) === !1 && r.cancelable) return !1;
		}
		return !0;
	}
	invalidate() {
		F(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
	}
	_descriptors(e) {
		if (this._cache) return this._cache;
		let t = this._cache = this._createDescriptors(e);
		return this._notifyStateChanges(e), t;
	}
	_createDescriptors(e, t) {
		let n = e && e.config, r = B(n.options && n.options.plugins, {}), i = Pl(n);
		return r === !1 && !t ? [] : Il(e, i, r, t);
	}
	_notifyStateChanges(e) {
		let t = this._oldCache || [], n = this._cache, r = (e, t) => e.filter((e) => !t.some((t) => e.plugin.id === t.plugin.id));
		this._notify(r(t, n), e, "stop"), this._notify(r(n, t), e, "start");
	}
};
function Pl(e) {
	let t = {}, n = [], r = Object.keys(Ml.plugins.items);
	for (let e = 0; e < r.length; e++) n.push(Ml.getPlugin(r[e]));
	let i = e.plugins || [];
	for (let e = 0; e < i.length; e++) {
		let r = i[e];
		n.indexOf(r) === -1 && (n.push(r), t[r.id] = !0);
	}
	return {
		plugins: n,
		localIds: t
	};
}
function Fl(e, t) {
	return !t && e === !1 ? null : e === !0 ? {} : e;
}
function Il(e, { plugins: t, localIds: n }, r, i) {
	let a = [], o = e.getContext();
	for (let s of t) {
		let t = s.id, c = Fl(r[t], i);
		c !== null && a.push({
			plugin: s,
			options: Ll(e.config, {
				plugin: s,
				local: n[t]
			}, c, o)
		});
	}
	return a;
}
function Ll(e, { plugin: t, local: n }, r, i) {
	let a = e.pluginScopeKeys(t), o = e.getOptionScopes(r, a);
	return n && t.defaults && o.push(t.defaults), e.createResolver(o, i, [""], {
		scriptable: !1,
		indexable: !1,
		allKeys: !0
	});
}
function Rl(e, t) {
	let n = Y.datasets[e] || {};
	return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x";
}
function zl(e, t) {
	let n = e;
	return e === "_index_" ? n = t : e === "_value_" && (n = t === "x" ? "y" : "x"), n;
}
function Bl(e, t) {
	return e === t ? "_index_" : "_value_";
}
function Vl(e) {
	if (e === "x" || e === "y" || e === "r") return e;
}
function Hl(e) {
	if (e === "top" || e === "bottom") return "x";
	if (e === "left" || e === "right") return "y";
}
function Ul(e, ...t) {
	if (Vl(e)) return e;
	for (let n of t) {
		let t = n.axis || Hl(n.position) || e.length > 1 && Vl(e[0].toLowerCase());
		if (t) return t;
	}
	throw Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`);
}
function Wl(e, t, n) {
	if (n[t + "AxisID"] === e) return { axis: t };
}
function Gl(e, t) {
	if (t.data && t.data.datasets) {
		let n = t.data.datasets.filter((t) => t.xAxisID === e || t.yAxisID === e);
		if (n.length) return Wl(e, "x", n[0]) || Wl(e, "y", n[0]);
	}
	return {};
}
function Kl(e, t) {
	let n = Oa[e.type] || { scales: {} }, r = t.scales || {}, i = Rl(e.type, t), a = Object.create(null);
	return Object.keys(r).forEach((t) => {
		let o = r[t];
		if (!L(o)) return console.error(`Invalid scale configuration for scale: ${t}`);
		if (o._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${t}`);
		let s = Ul(t, o, Gl(t, e), Y.scales[o.type]), c = Bl(s, i), l = n.scales || {};
		a[t] = hi(Object.create(null), [
			{ axis: s },
			o,
			l[s],
			l[c]
		]);
	}), e.data.datasets.forEach((n) => {
		let i = n.type || e.type, o = n.indexAxis || Rl(i, t), s = (Oa[i] || {}).scales || {};
		Object.keys(s).forEach((e) => {
			let t = zl(e, o), i = n[t + "AxisID"] || t;
			a[i] = a[i] || Object.create(null), hi(a[i], [
				{ axis: t },
				r[i],
				s[e]
			]);
		});
	}), Object.keys(a).forEach((e) => {
		let t = a[e];
		hi(t, [Y.scales[t.type], Y.scale]);
	}), a;
}
function ql(e) {
	let t = e.options ||= {};
	t.plugins = B(t.plugins, {}), t.scales = Kl(e, t);
}
function Jl(e) {
	return e ||= {}, e.datasets = e.datasets || [], e.labels = e.labels || [], e;
}
function Yl(e) {
	return e ||= {}, e.data = Jl(e.data), ql(e), e;
}
var Xl = /* @__PURE__ */ new Map(), Zl = /* @__PURE__ */ new Set();
function Ql(e, t) {
	let n = Xl.get(e);
	return n || (n = t(), Xl.set(e, n), Zl.add(n)), n;
}
var $l = (e, t, n) => {
	let r = bi(t, n);
	r !== void 0 && e.add(r);
}, eu = class {
	constructor(e) {
		this._config = Yl(e), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
	}
	get platform() {
		return this._config.platform;
	}
	get type() {
		return this._config.type;
	}
	set type(e) {
		this._config.type = e;
	}
	get data() {
		return this._config.data;
	}
	set data(e) {
		this._config.data = Jl(e);
	}
	get options() {
		return this._config.options;
	}
	set options(e) {
		this._config.options = e;
	}
	get plugins() {
		return this._config.plugins;
	}
	update() {
		let e = this._config;
		this.clearCache(), ql(e);
	}
	clearCache() {
		this._scopeCache.clear(), this._resolverCache.clear();
	}
	datasetScopeKeys(e) {
		return Ql(e, () => [[`datasets.${e}`, ""]]);
	}
	datasetAnimationScopeKeys(e, t) {
		return Ql(`${e}.transition.${t}`, () => [[`datasets.${e}.transitions.${t}`, `transitions.${t}`], [`datasets.${e}`, ""]]);
	}
	datasetElementScopeKeys(e, t) {
		return Ql(`${e}-${t}`, () => [[
			`datasets.${e}.elements.${t}`,
			`datasets.${e}`,
			`elements.${t}`,
			""
		]]);
	}
	pluginScopeKeys(e) {
		let t = e.id, n = this.type;
		return Ql(`${n}-plugin-${t}`, () => [[`plugins.${t}`, ...e.additionalOptionScopes || []]]);
	}
	_cachedScopes(e, t) {
		let n = this._scopeCache, r = n.get(e);
		return (!r || t) && (r = /* @__PURE__ */ new Map(), n.set(e, r)), r;
	}
	getOptionScopes(e, t, n) {
		let { options: r, type: i } = this, a = this._cachedScopes(e, n), o = a.get(t);
		if (o) return o;
		let s = /* @__PURE__ */ new Set();
		t.forEach((t) => {
			e && (s.add(e), t.forEach((t) => $l(s, e, t))), t.forEach((e) => $l(s, r, e)), t.forEach((e) => $l(s, Oa[i] || {}, e)), t.forEach((e) => $l(s, Y, e)), t.forEach((e) => $l(s, ka, e));
		});
		let c = Array.from(s);
		return c.length === 0 && c.push(Object.create(null)), Zl.has(t) && a.set(t, c), c;
	}
	chartOptionScopes() {
		let { options: e, type: t } = this;
		return [
			e,
			Oa[t] || {},
			Y.datasets[t] || {},
			{ type: t },
			Y,
			ka
		];
	}
	resolveNamedOptions(e, t, n, r = [""]) {
		let i = { $shared: !0 }, { resolver: a, subPrefixes: o } = tu(this._resolverCache, e, r), s = a;
		if (ru(a, t)) {
			i.$shared = !1, n = Ci(n) ? n() : n;
			let t = this.createResolver(e, n, o);
			s = oo(a, n, t);
		}
		for (let e of t) i[e] = s[e];
		return i;
	}
	createResolver(e, t, n = [""], r) {
		let { resolver: i } = tu(this._resolverCache, e, n);
		return L(t) ? oo(i, t, void 0, r) : i;
	}
};
function tu(e, t, n) {
	let r = e.get(t);
	r || (r = /* @__PURE__ */ new Map(), e.set(t, r));
	let i = n.join(), a = r.get(i);
	return a || (a = {
		resolver: ao(t, n),
		subPrefixes: n.filter((e) => !e.toLowerCase().includes("hover"))
	}, r.set(i, a)), a;
}
var nu = (e) => L(e) && Object.getOwnPropertyNames(e).some((t) => Ci(e[t]));
function ru(e, t) {
	let { isScriptable: n, isIndexable: r } = so(e);
	for (let i of t) {
		let t = n(i), a = r(i), o = (a || t) && e[i];
		if (t && (Ci(o) || nu(o)) || a && I(o)) return !0;
	}
	return !1;
}
var iu = "4.5.1", au = [
	"top",
	"bottom",
	"left",
	"right",
	"chartArea"
];
function ou(e, t) {
	return e === "top" || e === "bottom" || au.indexOf(e) === -1 && t === "x";
}
function su(e, t) {
	return function(n, r) {
		return n[e] === r[e] ? n[t] - r[t] : n[e] - r[e];
	};
}
function cu(e) {
	let t = e.chart, n = t.options.animation;
	t.notifyPlugins("afterRender"), V(n && n.onComplete, [e], t);
}
function lu(e) {
	let t = e.chart, n = t.options.animation;
	V(n && n.onProgress, [e], t);
}
function uu(e) {
	return Fo() && typeof e == "string" ? e = document.getElementById(e) : e && e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e;
}
var du = {}, fu = (e) => {
	let t = uu(e);
	return Object.values(du).filter((e) => e.canvas === t).pop();
};
function pu(e, t, n) {
	let r = Object.keys(e);
	for (let i of r) {
		let r = +i;
		if (r >= t) {
			let a = e[i];
			delete e[i], (n > 0 || r > t) && (e[r + n] = a);
		}
	}
}
function mu(e, t, n, r) {
	return !n || e.type === "mouseout" ? null : r ? t : e;
}
var hu = class {
	static defaults = Y;
	static instances = du;
	static overrides = Oa;
	static registry = Ml;
	static version = iu;
	static getChart = fu;
	static register(...e) {
		Ml.add(...e), gu();
	}
	static unregister(...e) {
		Ml.remove(...e), gu();
	}
	constructor(e, t) {
		let n = this.config = new eu(t), r = uu(e), i = fu(r);
		if (i) throw Error("Canvas is already in use. Chart with ID '" + i.id + "' must be destroyed before the canvas with ID '" + i.canvas.id + "' can be reused.");
		let a = n.createResolver(n.chartOptionScopes(), this.getContext());
		this.platform = new (n.platform || (ol(r)))(), this.platform.updateConfig(n);
		let o = this.platform.acquireContext(r, a.aspectRatio), s = o && o.canvas, c = s && s.height, l = s && s.width;
		this.id = ci(), this.ctx = o, this.canvas = s, this.width = l, this.height = c, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Nl(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = aa((e) => this.update(e), a.resizeDelay || 0), this._dataChanges = [], du[this.id] = this, !o || !s ? console.error("Failed to create chart: can't acquire context from the given item") : (bs.listen(this, "complete", cu), bs.listen(this, "progress", lu), this._initialize(), this.attached && this.update());
	}
	get aspectRatio() {
		let { options: { aspectRatio: e, maintainAspectRatio: t }, width: n, height: r, _aspectRatio: i } = this;
		return F(e) ? t && i ? i : r ? n / r : null : e;
	}
	get data() {
		return this.config.data;
	}
	set data(e) {
		this.config.data = e;
	}
	get options() {
		return this._options;
	}
	set options(e) {
		this.config.options = e;
	}
	get registry() {
		return Ml;
	}
	_initialize() {
		return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Jo(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
	}
	clear() {
		return Ia(this.canvas, this.ctx), this;
	}
	stop() {
		return bs.stop(this), this;
	}
	resize(e, t) {
		bs.running(this) ? this._resizeBeforeDraw = {
			width: e,
			height: t
		} : this._resize(e, t);
	}
	_resize(e, t) {
		let n = this.options, r = this.canvas, i = n.maintainAspectRatio && this.aspectRatio, a = this.platform.getMaximumSize(r, e, t, i), o = n.devicePixelRatio || this.platform.getDevicePixelRatio(), s = this.width ? "resize" : "attach";
		this.width = a.width, this.height = a.height, this._aspectRatio = this.aspectRatio, Jo(this, o, !0) && (this.notifyPlugins("resize", { size: a }), V(n.onResize, [this, a], this), this.attached && this._doResize(s) && this.render());
	}
	ensureScalesHaveIDs() {
		H(this.options.scales || {}, (e, t) => {
			e.id = t;
		});
	}
	buildOrUpdateScales() {
		let e = this.options, t = e.scales, n = this.scales, r = Object.keys(n).reduce((e, t) => (e[t] = !1, e), {}), i = [];
		t && (i = i.concat(Object.keys(t).map((e) => {
			let n = t[e], r = Ul(e, n), i = r === "r", a = r === "x";
			return {
				options: n,
				dposition: i ? "chartArea" : a ? "bottom" : "left",
				dtype: i ? "radialLinear" : a ? "category" : "linear"
			};
		}))), H(i, (t) => {
			let i = t.options, a = i.id, o = Ul(a, i), s = B(i.type, t.dtype);
			(i.position === void 0 || ou(i.position, o) !== ou(t.dposition)) && (i.position = t.dposition), r[a] = !0;
			let c = null;
			a in n && n[a].type === s ? c = n[a] : (c = new (Ml.getScale(s))({
				id: a,
				type: s,
				ctx: this.ctx,
				chart: this
			}), n[c.id] = c), c.init(i, e);
		}), H(r, (e, t) => {
			e || delete n[t];
		}), H(n, (e) => {
			Lc.configure(this, e, e.options), Lc.addBox(this, e);
		});
	}
	_updateMetasets() {
		let e = this._metasets, t = this.data.datasets.length, n = e.length;
		if (e.sort((e, t) => e.index - t.index), n > t) {
			for (let e = t; e < n; ++e) this._destroyDatasetMeta(e);
			e.splice(t, n - t);
		}
		this._sortedMetasets = e.slice(0).sort(su("order", "index"));
	}
	_removeUnreferencedMetasets() {
		let { _metasets: e, data: { datasets: t } } = this;
		e.length > t.length && delete this._stacks, e.forEach((e, n) => {
			t.filter((t) => t === e._dataset).length === 0 && this._destroyDatasetMeta(n);
		});
	}
	buildOrUpdateControllers() {
		let e = [], t = this.data.datasets, n, r;
		for (this._removeUnreferencedMetasets(), n = 0, r = t.length; n < r; n++) {
			let r = t[n], i = this.getDatasetMeta(n), a = r.type || this.config.type;
			if (i.type && i.type !== a && (this._destroyDatasetMeta(n), i = this.getDatasetMeta(n)), i.type = a, i.indexAxis = r.indexAxis || Rl(a, this.options), i.order = r.order || 0, i.index = n, i.label = "" + r.label, i.visible = this.isDatasetVisible(n), i.controller) i.controller.updateIndex(n), i.controller.linkScales();
			else {
				let t = Ml.getController(a), { datasetElementType: r, dataElementType: o } = Y.datasets[a];
				Object.assign(t, {
					dataElementType: Ml.getElement(o),
					datasetElementType: r && Ml.getElement(r)
				}), i.controller = new t(this, n), e.push(i.controller);
			}
		}
		return this._updateMetasets(), e;
	}
	_resetElements() {
		H(this.data.datasets, (e, t) => {
			this.getDatasetMeta(t).controller.reset();
		}, this);
	}
	reset() {
		this._resetElements(), this.notifyPlugins("reset");
	}
	update(e) {
		let t = this.config;
		t.update();
		let n = this._options = t.createResolver(t.chartOptionScopes(), this.getContext()), r = this._animationsDisabled = !n.animation;
		if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
			mode: e,
			cancelable: !0
		}) === !1) return;
		let i = this.buildOrUpdateControllers();
		this.notifyPlugins("beforeElementsUpdate");
		let a = 0;
		for (let e = 0, t = this.data.datasets.length; e < t; e++) {
			let { controller: t } = this.getDatasetMeta(e), n = !r && i.indexOf(t) === -1;
			t.buildOrUpdateElements(n), a = Math.max(+t.getMaxOverflow(), a);
		}
		a = this._minPadding = n.layout.autoPadding ? a : 0, this._updateLayout(a), r || H(i, (e) => {
			e.reset();
		}), this._updateDatasets(e), this.notifyPlugins("afterUpdate", { mode: e }), this._layers.sort(su("z", "_idx"));
		let { _active: o, _lastEvent: s } = this;
		s ? this._eventHandler(s, !0) : o.length && this._updateHoverStyles(o, o, !0), this.render();
	}
	_updateScales() {
		H(this.scales, (e) => {
			Lc.removeBox(this, e);
		}), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
	}
	_checkEventBindings() {
		let e = this.options;
		(!wi(new Set(Object.keys(this._listeners)), new Set(e.events)) || !!this._responsiveListeners !== e.responsive) && (this.unbindEvents(), this.bindEvents());
	}
	_updateHiddenIndices() {
		let { _hiddenIndices: e } = this, t = this._getUniformDataChanges() || [];
		for (let { method: n, start: r, count: i } of t) pu(e, r, n === "_removeElements" ? -i : i);
	}
	_getUniformDataChanges() {
		let e = this._dataChanges;
		if (!e || !e.length) return;
		this._dataChanges = [];
		let t = this.data.datasets.length, n = (t) => new Set(e.filter((e) => e[0] === t).map((e, t) => t + "," + e.splice(1).join(","))), r = n(0);
		for (let e = 1; e < t; e++) if (!wi(r, n(e))) return;
		return Array.from(r).map((e) => e.split(",")).map((e) => ({
			method: e[1],
			start: +e[2],
			count: +e[3]
		}));
	}
	_updateLayout(e) {
		if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
		Lc.update(this, this.width, this.height, e);
		let t = this.chartArea, n = t.width <= 0 || t.height <= 0;
		this._layers = [], H(this.boxes, (e) => {
			n && e.position === "chartArea" || (e.configure && e.configure(), this._layers.push(...e._layers()));
		}, this), this._layers.forEach((e, t) => {
			e._idx = t;
		}), this.notifyPlugins("afterLayout");
	}
	_updateDatasets(e) {
		if (this.notifyPlugins("beforeDatasetsUpdate", {
			mode: e,
			cancelable: !0
		}) !== !1) {
			for (let e = 0, t = this.data.datasets.length; e < t; ++e) this.getDatasetMeta(e).controller.configure();
			for (let t = 0, n = this.data.datasets.length; t < n; ++t) this._updateDataset(t, Ci(e) ? e({ datasetIndex: t }) : e);
			this.notifyPlugins("afterDatasetsUpdate", { mode: e });
		}
	}
	_updateDataset(e, t) {
		let n = this.getDatasetMeta(e), r = {
			meta: n,
			index: e,
			mode: t,
			cancelable: !0
		};
		this.notifyPlugins("beforeDatasetUpdate", r) !== !1 && (n.controller._update(t), r.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", r));
	}
	render() {
		this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 && (bs.has(this) ? this.attached && !bs.running(this) && bs.start(this) : (this.draw(), cu({ chart: this })));
	}
	draw() {
		let e;
		if (this._resizeBeforeDraw) {
			let { width: e, height: t } = this._resizeBeforeDraw;
			this._resizeBeforeDraw = null, this._resize(e, t);
		}
		if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1) return;
		let t = this._layers;
		for (e = 0; e < t.length && t[e].z <= 0; ++e) t[e].draw(this.chartArea);
		for (this._drawDatasets(); e < t.length; ++e) t[e].draw(this.chartArea);
		this.notifyPlugins("afterDraw");
	}
	_getSortedDatasetMetas(e) {
		let t = this._sortedMetasets, n = [], r, i;
		for (r = 0, i = t.length; r < i; ++r) {
			let i = t[r];
			(!e || i.visible) && n.push(i);
		}
		return n;
	}
	getSortedVisibleDatasetMetas() {
		return this._getSortedDatasetMetas(!0);
	}
	_drawDatasets() {
		if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1) return;
		let e = this.getSortedVisibleDatasetMetas();
		for (let t = e.length - 1; t >= 0; --t) this._drawDataset(e[t]);
		this.notifyPlugins("afterDatasetsDraw");
	}
	_drawDataset(e) {
		let t = this.ctx, n = {
			meta: e,
			index: e.index,
			cancelable: !0
		}, r = ys(this, e);
		this.notifyPlugins("beforeDatasetDraw", n) !== !1 && (r && Ba(t, r), e.controller.draw(), r && Va(t), n.cancelable = !1, this.notifyPlugins("afterDatasetDraw", n));
	}
	isPointInArea(e) {
		return za(e, this.chartArea, this._minPadding);
	}
	getElementsAtEventForMode(e, t, n, r) {
		let i = bc.modes[t];
		return typeof i == "function" ? i(this, e, n, r) : [];
	}
	getDatasetMeta(e) {
		let t = this.data.datasets[e], n = this._metasets, r = n.filter((e) => e && e._dataset === t).pop();
		return r || (r = {
			type: null,
			data: [],
			dataset: null,
			controller: null,
			hidden: null,
			xAxisID: null,
			yAxisID: null,
			order: t && t.order || 0,
			index: e,
			_dataset: t,
			_parsed: [],
			_sorted: !1
		}, n.push(r)), r;
	}
	getContext() {
		return this.$context ||= io(null, {
			chart: this,
			type: "chart"
		});
	}
	getVisibleDatasetCount() {
		return this.getSortedVisibleDatasetMetas().length;
	}
	isDatasetVisible(e) {
		let t = this.data.datasets[e];
		if (!t) return !1;
		let n = this.getDatasetMeta(e);
		return typeof n.hidden == "boolean" ? !n.hidden : !t.hidden;
	}
	setDatasetVisibility(e, t) {
		let n = this.getDatasetMeta(e);
		n.hidden = !t;
	}
	toggleDataVisibility(e) {
		this._hiddenIndices[e] = !this._hiddenIndices[e];
	}
	getDataVisibility(e) {
		return !this._hiddenIndices[e];
	}
	_updateVisibility(e, t, n) {
		let r = n ? "show" : "hide", i = this.getDatasetMeta(e), a = i.controller._resolveAnimations(void 0, r);
		Si(t) ? (i.data[t].hidden = !n, this.update()) : (this.setDatasetVisibility(e, n), a.update(i, { visible: n }), this.update((t) => t.datasetIndex === e ? r : void 0));
	}
	hide(e, t) {
		this._updateVisibility(e, t, !1);
	}
	show(e, t) {
		this._updateVisibility(e, t, !0);
	}
	_destroyDatasetMeta(e) {
		let t = this._metasets[e];
		t && t.controller && t.controller._destroy(), delete this._metasets[e];
	}
	_stop() {
		let e, t;
		for (this.stop(), bs.remove(this), e = 0, t = this.data.datasets.length; e < t; ++e) this._destroyDatasetMeta(e);
	}
	destroy() {
		this.notifyPlugins("beforeDestroy");
		let { canvas: e, ctx: t } = this;
		this._stop(), this.config.clearCache(), e && (this.unbindEvents(), Ia(e, t), this.platform.releaseContext(t), this.canvas = null, this.ctx = null), delete du[this.id], this.notifyPlugins("afterDestroy");
	}
	toBase64Image(...e) {
		return this.canvas.toDataURL(...e);
	}
	bindEvents() {
		this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
	}
	bindUserEvents() {
		let e = this._listeners, t = this.platform, n = (n, r) => {
			t.addEventListener(this, n, r), e[n] = r;
		}, r = (e, t, n) => {
			e.offsetX = t, e.offsetY = n, this._eventHandler(e);
		};
		H(this.options.events, (e) => n(e, r));
	}
	bindResponsiveEvents() {
		this._responsiveListeners ||= {};
		let e = this._responsiveListeners, t = this.platform, n = (n, r) => {
			t.addEventListener(this, n, r), e[n] = r;
		}, r = (n, r) => {
			e[n] && (t.removeEventListener(this, n, r), delete e[n]);
		}, i = (e, t) => {
			this.canvas && this.resize(e, t);
		}, a, o = () => {
			r("attach", o), this.attached = !0, this.resize(), n("resize", i), n("detach", a);
		};
		a = () => {
			this.attached = !1, r("resize", i), this._stop(), this._resize(0, 0), n("attach", o);
		}, t.isAttached(this.canvas) ? o() : a();
	}
	unbindEvents() {
		H(this._listeners, (e, t) => {
			this.platform.removeEventListener(this, t, e);
		}), this._listeners = {}, H(this._responsiveListeners, (e, t) => {
			this.platform.removeEventListener(this, t, e);
		}), this._responsiveListeners = void 0;
	}
	updateHoverStyle(e, t, n) {
		let r = n ? "set" : "remove", i, a, o, s;
		for (t === "dataset" && (i = this.getDatasetMeta(e[0].datasetIndex), i.controller["_" + r + "DatasetHoverStyle"]()), o = 0, s = e.length; o < s; ++o) {
			a = e[o];
			let t = a && this.getDatasetMeta(a.datasetIndex).controller;
			t && t[r + "HoverStyle"](a.element, a.datasetIndex, a.index);
		}
	}
	getActiveElements() {
		return this._active || [];
	}
	setActiveElements(e) {
		let t = this._active || [], n = e.map(({ datasetIndex: e, index: t }) => {
			let n = this.getDatasetMeta(e);
			if (!n) throw Error("No dataset found at index " + e);
			return {
				datasetIndex: e,
				element: n.data[t],
				index: t
			};
		});
		ui(n, t) || (this._active = n, this._lastEvent = null, this._updateHoverStyles(n, t));
	}
	notifyPlugins(e, t, n) {
		return this._plugins.notify(this, e, t, n);
	}
	isPluginEnabled(e) {
		return this._plugins._cache.filter((t) => t.plugin.id === e).length === 1;
	}
	_updateHoverStyles(e, t, n) {
		let r = this.options.hover, i = (e, t) => e.filter((e) => !t.some((t) => e.datasetIndex === t.datasetIndex && e.index === t.index)), a = i(t, e), o = n ? e : i(e, t);
		a.length && this.updateHoverStyle(a, r.mode, !1), o.length && r.mode && this.updateHoverStyle(o, r.mode, !0);
	}
	_eventHandler(e, t) {
		let n = {
			event: e,
			replay: t,
			cancelable: !0,
			inChartArea: this.isPointInArea(e)
		}, r = (t) => (t.options.events || this.options.events).includes(e.native.type);
		if (this.notifyPlugins("beforeEvent", n, r) === !1) return;
		let i = this._handleEvent(e, t, n.inChartArea);
		return n.cancelable = !1, this.notifyPlugins("afterEvent", n, r), (i || n.changed) && this.render(), this;
	}
	_handleEvent(e, t, n) {
		let { _active: r = [], options: i } = this, a = t, o = this._getActiveElements(e, r, n, a), s = Ti(e), c = mu(e, this._lastEvent, n, s);
		n && (this._lastEvent = null, V(i.onHover, [
			e,
			o,
			this
		], this), s && V(i.onClick, [
			e,
			o,
			this
		], this));
		let l = !ui(o, r);
		return (l || t) && (this._active = o, this._updateHoverStyles(o, r, t)), this._lastEvent = c, l;
	}
	_getActiveElements(e, t, n, r) {
		if (e.type === "mouseout") return [];
		if (!n) return t;
		let i = this.options.hover;
		return this.getElementsAtEventForMode(e, i.mode, i, r);
	}
};
function gu() {
	return H(hu.instances, (e) => e._plugins.invalidate());
}
function _u(e, t, n = t) {
	e.lineCap = B(n.borderCapStyle, t.borderCapStyle), e.setLineDash(B(n.borderDash, t.borderDash)), e.lineDashOffset = B(n.borderDashOffset, t.borderDashOffset), e.lineJoin = B(n.borderJoinStyle, t.borderJoinStyle), e.lineWidth = B(n.borderWidth, t.borderWidth), e.strokeStyle = B(n.borderColor, t.borderColor);
}
function vu(e, t, n) {
	e.lineTo(n.x, n.y);
}
function yu(e) {
	return e.stepped ? Ha : e.tension || e.cubicInterpolationMode === "monotone" ? Ua : vu;
}
function bu(e, t, n = {}) {
	let r = e.length, { start: i = 0, end: a = r - 1 } = n, { start: o, end: s } = t, c = Math.max(i, o), l = Math.min(a, s), u = i < o && a < o || i > s && a > s;
	return {
		count: r,
		start: c,
		loop: t.loop,
		ilen: l < c && !u ? r + l - c : l - c
	};
}
function xu(e, t, n, r) {
	let { points: i, options: a } = t, { count: o, start: s, loop: c, ilen: l } = bu(i, n, r), u = yu(a), { move: d = !0, reverse: f } = r || {}, p, m, h;
	for (p = 0; p <= l; ++p) m = i[(s + (f ? l - p : p)) % o], !m.skip && (d ? (e.moveTo(m.x, m.y), d = !1) : u(e, h, m, f, a.stepped), h = m);
	return c && (m = i[(s + (f ? l : 0)) % o], u(e, h, m, f, a.stepped)), !!c;
}
function Su(e, t, n, r) {
	let i = t.points, { count: a, start: o, ilen: s } = bu(i, n, r), { move: c = !0, reverse: l } = r || {}, u = 0, d = 0, f, p, m, h, g, _, v = (e) => (o + (l ? s - e : e)) % a, y = () => {
		h !== g && (e.lineTo(u, g), e.lineTo(u, h), e.lineTo(u, _));
	};
	for (c && (p = i[v(0)], e.moveTo(p.x, p.y)), f = 0; f <= s; ++f) {
		if (p = i[v(f)], p.skip) continue;
		let t = p.x, n = p.y, r = t | 0;
		r === m ? (n < h ? h = n : n > g && (g = n), u = (d * u + t) / ++d) : (y(), e.lineTo(t, n), m = r, d = 0, h = g = n), _ = n;
	}
	y();
}
function Cu(e) {
	let t = e.options, n = t.borderDash && t.borderDash.length;
	return !e._decimated && !e._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !n ? Su : xu;
}
function wu(e) {
	return e.stepped ? Qo : e.tension || e.cubicInterpolationMode === "monotone" ? $o : Zo;
}
function Tu(e, t, n, r) {
	let i = t._path;
	i || (i = t._path = new Path2D(), t.path(i, n, r) && i.closePath()), _u(e, t.options), e.stroke(i);
}
function Eu(e, t, n, r) {
	let { segments: i, options: a } = t, o = Cu(t);
	for (let s of i) _u(e, a, s.style), e.beginPath(), o(e, t, s, {
		start: n,
		end: n + r - 1
	}) && e.closePath(), e.stroke();
}
var Du = typeof Path2D == "function";
function Ou(e, t, n, r) {
	Du && !t.options.segment ? Tu(e, t, n, r) : Eu(e, t, n, r);
}
var ku = class extends sl {
	static id = "line";
	static defaults = {
		borderCapStyle: "butt",
		borderDash: [],
		borderDashOffset: 0,
		borderJoinStyle: "miter",
		borderWidth: 3,
		capBezierPoints: !0,
		cubicInterpolationMode: "default",
		fill: !1,
		spanGaps: !1,
		stepped: !1,
		tension: 0
	};
	static defaultRoutes = {
		backgroundColor: "backgroundColor",
		borderColor: "borderColor"
	};
	static descriptors = {
		_scriptable: !0,
		_indexable: (e) => e !== "borderDash" && e !== "fill"
	};
	constructor(e) {
		super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, e && Object.assign(this, e);
	}
	updateControlPoints(e, t) {
		let n = this.options;
		if ((n.tension || n.cubicInterpolationMode === "monotone") && !n.stepped && !this._pointsUpdated) {
			let r = n.spanGaps ? this._loop : this._fullLoop;
			Po(this._points, n, e, r, t), this._pointsUpdated = !0;
		}
	}
	set points(e) {
		this._points = e, delete this._segments, delete this._path, this._pointsUpdated = !1;
	}
	get points() {
		return this._points;
	}
	get segments() {
		return this._segments ||= fs(this, this.options.segment);
	}
	first() {
		let e = this.segments, t = this.points;
		return e.length && t[e[0].start];
	}
	last() {
		let e = this.segments, t = this.points, n = e.length;
		return n && t[e[n - 1].end];
	}
	interpolate(e, t) {
		let n = this.options, r = e[t], i = this.points, a = ls(this, {
			property: t,
			start: r,
			end: r
		});
		if (!a.length) return;
		let o = [], s = wu(n), c, l;
		for (c = 0, l = a.length; c < l; ++c) {
			let { start: l, end: u } = a[c], d = i[l], f = i[u];
			if (d === f) {
				o.push(d);
				continue;
			}
			let p = s(d, f, Math.abs((r - d[t]) / (f[t] - d[t])), n.stepped);
			p[t] = e[t], o.push(p);
		}
		return o.length === 1 ? o[0] : o;
	}
	pathSegment(e, t, n) {
		return Cu(this)(e, this, t, n);
	}
	path(e, t, n) {
		let r = this.segments, i = Cu(this), a = this._loop;
		t ||= 0, n ||= this.points.length - t;
		for (let o of r) a &= i(e, this, o, {
			start: t,
			end: t + n - 1
		});
		return !!a;
	}
	draw(e, t, n, r) {
		let i = this.options || {};
		(this.points || []).length && i.borderWidth && (e.save(), Ou(e, this, n, r), e.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
	}
};
function Au(e, t, n, r) {
	let i = e.options, { [n]: a } = e.getProps([n], r);
	return Math.abs(t - a) < i.radius + i.hitRadius;
}
var ju = class extends sl {
	static id = "point";
	parsed;
	skip;
	stop;
	static defaults = {
		borderWidth: 1,
		hitRadius: 1,
		hoverBorderWidth: 1,
		hoverRadius: 4,
		pointStyle: "circle",
		radius: 3,
		rotation: 0
	};
	static defaultRoutes = {
		backgroundColor: "backgroundColor",
		borderColor: "borderColor"
	};
	constructor(e) {
		super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, e && Object.assign(this, e);
	}
	inRange(e, t, n) {
		let r = this.options, { x: i, y: a } = this.getProps(["x", "y"], n);
		return (e - i) ** 2 + (t - a) ** 2 < (r.hitRadius + r.radius) ** 2;
	}
	inXRange(e, t) {
		return Au(this, e, "x", t);
	}
	inYRange(e, t) {
		return Au(this, e, "y", t);
	}
	getCenterPoint(e) {
		let { x: t, y: n } = this.getProps(["x", "y"], e);
		return {
			x: t,
			y: n
		};
	}
	size(e) {
		e = e || this.options || {};
		let t = e.radius || 0;
		t = Math.max(t, t && e.hoverRadius || 0);
		let n = t && e.borderWidth || 0;
		return (t + n) * 2;
	}
	draw(e, t) {
		let n = this.options;
		this.skip || n.radius < .1 || !za(this, t, this.size(n) / 2) || (e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.fillStyle = n.backgroundColor, La(e, n, this.x, this.y));
	}
	getRange() {
		let e = this.options || {};
		return e.radius + e.hitRadius;
	}
};
function Mu(e, t) {
	let { x: n, y: r, base: i, width: a, height: o } = e.getProps([
		"x",
		"y",
		"base",
		"width",
		"height"
	], t), s, c, l, u, d;
	return e.horizontal ? (d = o / 2, s = Math.min(n, i), c = Math.max(n, i), l = r - d, u = r + d) : (d = a / 2, s = n - d, c = n + d, l = Math.min(r, i), u = Math.max(r, i)), {
		left: s,
		top: l,
		right: c,
		bottom: u
	};
}
function Nu(e, t, n, r) {
	return e ? 0 : q(t, n, r);
}
function Pu(e, t, n) {
	let r = e.options.borderWidth, i = e.borderSkipped, a = eo(r);
	return {
		t: Nu(i.top, a.top, 0, n),
		r: Nu(i.right, a.right, 0, t),
		b: Nu(i.bottom, a.bottom, 0, n),
		l: Nu(i.left, a.left, 0, t)
	};
}
function Fu(e, t, n) {
	let { enableBorderRadius: r } = e.getProps(["enableBorderRadius"]), i = e.options.borderRadius, a = to(i), o = Math.min(t, n), s = e.borderSkipped, c = r || L(i);
	return {
		topLeft: Nu(!c || s.top || s.left, a.topLeft, 0, o),
		topRight: Nu(!c || s.top || s.right, a.topRight, 0, o),
		bottomLeft: Nu(!c || s.bottom || s.left, a.bottomLeft, 0, o),
		bottomRight: Nu(!c || s.bottom || s.right, a.bottomRight, 0, o)
	};
}
function Iu(e) {
	let t = Mu(e), n = t.right - t.left, r = t.bottom - t.top, i = Pu(e, n / 2, r / 2), a = Fu(e, n / 2, r / 2);
	return {
		outer: {
			x: t.left,
			y: t.top,
			w: n,
			h: r,
			radius: a
		},
		inner: {
			x: t.left + i.l,
			y: t.top + i.t,
			w: n - i.l - i.r,
			h: r - i.t - i.b,
			radius: {
				topLeft: Math.max(0, a.topLeft - Math.max(i.t, i.l)),
				topRight: Math.max(0, a.topRight - Math.max(i.t, i.r)),
				bottomLeft: Math.max(0, a.bottomLeft - Math.max(i.b, i.l)),
				bottomRight: Math.max(0, a.bottomRight - Math.max(i.b, i.r))
			}
		}
	};
}
function Lu(e, t, n, r) {
	let i = t === null, a = n === null, o = e && !(i && a) && Mu(e, r);
	return o && (i || Ji(t, o.left, o.right)) && (a || Ji(n, o.top, o.bottom));
}
function Ru(e) {
	return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight;
}
function zu(e, t) {
	e.rect(t.x, t.y, t.w, t.h);
}
function Bu(e, t, n = {}) {
	let r = e.x === n.x ? 0 : -t, i = e.y === n.y ? 0 : -t, a = (e.x + e.w === n.x + n.w ? 0 : t) - r, o = (e.y + e.h === n.y + n.h ? 0 : t) - i;
	return {
		x: e.x + r,
		y: e.y + i,
		w: e.w + a,
		h: e.h + o,
		radius: e.radius
	};
}
var Vu = class extends sl {
	static id = "bar";
	static defaults = {
		borderSkipped: "start",
		borderWidth: 0,
		borderRadius: 0,
		inflateAmount: "auto",
		pointStyle: void 0
	};
	static defaultRoutes = {
		backgroundColor: "backgroundColor",
		borderColor: "borderColor"
	};
	constructor(e) {
		super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, e && Object.assign(this, e);
	}
	draw(e) {
		let { inflateAmount: t, options: { borderColor: n, backgroundColor: r } } = this, { inner: i, outer: a } = Iu(this), o = Ru(a.radius) ? Ja : zu;
		e.save(), (a.w !== i.w || a.h !== i.h) && (e.beginPath(), o(e, Bu(a, t, i)), e.clip(), o(e, Bu(i, -t, a)), e.fillStyle = n, e.fill("evenodd")), e.beginPath(), o(e, Bu(i, t)), e.fillStyle = r, e.fill(), e.restore();
	}
	inRange(e, t, n) {
		return Lu(this, e, t, n);
	}
	inXRange(e, t) {
		return Lu(this, e, null, t);
	}
	inYRange(e, t) {
		return Lu(this, null, e, t);
	}
	getCenterPoint(e) {
		let { x: t, y: n, base: r, horizontal: i } = this.getProps([
			"x",
			"y",
			"base",
			"horizontal"
		], e);
		return {
			x: i ? (t + r) / 2 : t,
			y: i ? n : (n + r) / 2
		};
	}
	getRange(e) {
		return e === "x" ? this.width / 2 : this.height / 2;
	}
}, Hu = (e, t) => {
	let { boxHeight: n = t, boxWidth: r = t } = e;
	return e.usePointStyle && (n = Math.min(n, t), r = e.pointStyleWidth || Math.min(r, t)), {
		boxWidth: r,
		boxHeight: n,
		itemHeight: Math.max(t, n)
	};
}, Uu = (e, t) => e !== null && t !== null && e.datasetIndex === t.datasetIndex && e.index === t.index, Wu = class extends sl {
	constructor(e) {
		super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = e.chart, this.options = e.options, this.ctx = e.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
	}
	update(e, t, n) {
		this.maxWidth = e, this.maxHeight = t, this._margins = n, this.setDimensions(), this.buildLabels(), this.fit();
	}
	setDimensions() {
		this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
	}
	buildLabels() {
		let e = this.options.labels || {}, t = V(e.generateLabels, [this.chart], this) || [];
		e.filter && (t = t.filter((t) => e.filter(t, this.chart.data))), e.sort && (t = t.sort((t, n) => e.sort(t, n, this.chart.data))), this.options.reverse && t.reverse(), this.legendItems = t;
	}
	fit() {
		let { options: e, ctx: t } = this;
		if (!e.display) {
			this.width = this.height = 0;
			return;
		}
		let n = e.labels, r = Z(n.font), i = r.size, a = this._computeTitleHeight(), { boxWidth: o, itemHeight: s } = Hu(n, i), c, l;
		t.font = r.string, this.isHorizontal() ? (c = this.maxWidth, l = this._fitRows(a, i, o, s) + 10) : (l = this.maxHeight, c = this._fitCols(a, r, o, s) + 10), this.width = Math.min(c, e.maxWidth || this.maxWidth), this.height = Math.min(l, e.maxHeight || this.maxHeight);
	}
	_fitRows(e, t, n, r) {
		let { ctx: i, maxWidth: a, options: { labels: { padding: o } } } = this, s = this.legendHitBoxes = [], c = this.lineWidths = [0], l = r + o, u = e;
		i.textAlign = "left", i.textBaseline = "middle";
		let d = -1, f = -l;
		return this.legendItems.forEach((e, p) => {
			let m = n + t / 2 + i.measureText(e.text).width;
			(p === 0 || c[c.length - 1] + m + 2 * o > a) && (u += l, c[c.length - (p > 0 ? 0 : 1)] = 0, f += l, d++), s[p] = {
				left: 0,
				top: f,
				row: d,
				width: m,
				height: r
			}, c[c.length - 1] += m + o;
		}), u;
	}
	_fitCols(e, t, n, r) {
		let { ctx: i, maxHeight: a, options: { labels: { padding: o } } } = this, s = this.legendHitBoxes = [], c = this.columnSizes = [], l = a - e, u = o, d = 0, f = 0, p = 0, m = 0;
		return this.legendItems.forEach((e, a) => {
			let { itemWidth: h, itemHeight: g } = Gu(n, t, i, e, r);
			a > 0 && f + g + 2 * o > l && (u += d + o, c.push({
				width: d,
				height: f
			}), p += d + o, m++, d = f = 0), s[a] = {
				left: p,
				top: f,
				col: m,
				width: h,
				height: g
			}, d = Math.max(d, h), f += g + o;
		}), u += d, c.push({
			width: d,
			height: f
		}), u;
	}
	adjustHitBoxes() {
		if (!this.options.display) return;
		let e = this._computeTitleHeight(), { legendHitBoxes: t, options: { align: n, labels: { padding: r }, rtl: i } } = this, a = ns(i, this.left, this.width);
		if (this.isHorizontal()) {
			let i = 0, o = J(n, this.left + r, this.right - this.lineWidths[i]);
			for (let s of t) i !== s.row && (i = s.row, o = J(n, this.left + r, this.right - this.lineWidths[i])), s.top += this.top + e + r, s.left = a.leftForLtr(a.x(o), s.width), o += s.width + r;
		} else {
			let i = 0, o = J(n, this.top + e + r, this.bottom - this.columnSizes[i].height);
			for (let s of t) s.col !== i && (i = s.col, o = J(n, this.top + e + r, this.bottom - this.columnSizes[i].height)), s.top = o, s.left += this.left + r, s.left = a.leftForLtr(a.x(s.left), s.width), o += s.height + r;
		}
	}
	isHorizontal() {
		return this.options.position === "top" || this.options.position === "bottom";
	}
	draw() {
		if (this.options.display) {
			let e = this.ctx;
			Ba(e, this), this._draw(), Va(e);
		}
	}
	_draw() {
		let { options: e, columnSizes: t, lineWidths: n, ctx: r } = this, { align: i, labels: a } = e, o = Y.color, s = ns(e.rtl, this.left, this.width), c = Z(a.font), { padding: l } = a, u = c.size, d = u / 2, f;
		this.drawTitle(), r.textAlign = s.textAlign("left"), r.textBaseline = "middle", r.lineWidth = .5, r.font = c.string;
		let { boxWidth: p, boxHeight: m, itemHeight: h } = Hu(a, u), g = function(e, t, n) {
			if (isNaN(p) || p <= 0 || isNaN(m) || m < 0) return;
			r.save();
			let i = B(n.lineWidth, 1);
			if (r.fillStyle = B(n.fillStyle, o), r.lineCap = B(n.lineCap, "butt"), r.lineDashOffset = B(n.lineDashOffset, 0), r.lineJoin = B(n.lineJoin, "miter"), r.lineWidth = i, r.strokeStyle = B(n.strokeStyle, o), r.setLineDash(B(n.lineDash, [])), a.usePointStyle) {
				let o = {
					radius: m * Math.SQRT2 / 2,
					pointStyle: n.pointStyle,
					rotation: n.rotation,
					borderWidth: i
				}, c = s.xPlus(e, p / 2), l = t + d;
				Ra(r, o, c, l, a.pointStyleWidth && p);
			} else {
				let a = t + Math.max((u - m) / 2, 0), o = s.leftForLtr(e, p), c = to(n.borderRadius);
				r.beginPath(), Object.values(c).some((e) => e !== 0) ? Ja(r, {
					x: o,
					y: a,
					w: p,
					h: m,
					radius: c
				}) : r.rect(o, a, p, m), r.fill(), i !== 0 && r.stroke();
			}
			r.restore();
		}, _ = function(e, t, n) {
			qa(r, n.text, e, t + h / 2, c, {
				strikethrough: n.hidden,
				textAlign: s.textAlign(n.textAlign)
			});
		}, v = this.isHorizontal(), y = this._computeTitleHeight();
		f = v ? {
			x: J(i, this.left + l, this.right - n[0]),
			y: this.top + l + y,
			line: 0
		} : {
			x: this.left + l,
			y: J(i, this.top + y + l, this.bottom - t[0].height),
			line: 0
		}, rs(this.ctx, e.textDirection);
		let b = h + l;
		this.legendItems.forEach((o, u) => {
			r.strokeStyle = o.fontColor, r.fillStyle = o.fontColor;
			let m = r.measureText(o.text).width, h = s.textAlign(o.textAlign ||= a.textAlign), x = p + d + m, S = f.x, C = f.y;
			s.setWidth(this.width), v ? u > 0 && S + x + l > this.right && (C = f.y += b, f.line++, S = f.x = J(i, this.left + l, this.right - n[f.line])) : u > 0 && C + b > this.bottom && (S = f.x = S + t[f.line].width + l, f.line++, C = f.y = J(i, this.top + y + l, this.bottom - t[f.line].height));
			let w = s.x(S);
			if (g(w, C, o), S = sa(h, S + p + d, v ? S + x : this.right, e.rtl), _(s.x(S), C, o), v) f.x += x + l;
			else if (typeof o.text != "string") {
				let e = c.lineHeight;
				f.y += Ju(o, e) + l;
			} else f.y += b;
		}), is(this.ctx, e.textDirection);
	}
	drawTitle() {
		let e = this.options, t = e.title, n = Z(t.font), r = X(t.padding);
		if (!t.display) return;
		let i = ns(e.rtl, this.left, this.width), a = this.ctx, o = t.position, s = n.size / 2, c = r.top + s, l, u = this.left, d = this.width;
		if (this.isHorizontal()) d = Math.max(...this.lineWidths), l = this.top + c, u = J(e.align, u, this.right - d);
		else {
			let t = this.columnSizes.reduce((e, t) => Math.max(e, t.height), 0);
			l = c + J(e.align, this.top, this.bottom - t - e.labels.padding - this._computeTitleHeight());
		}
		let f = J(o, u, u + d);
		a.textAlign = i.textAlign(oa(o)), a.textBaseline = "middle", a.strokeStyle = t.color, a.fillStyle = t.color, a.font = n.string, qa(a, t.text, f, l, n);
	}
	_computeTitleHeight() {
		let e = this.options.title, t = Z(e.font), n = X(e.padding);
		return e.display ? t.lineHeight + n.height : 0;
	}
	_getLegendItemAt(e, t) {
		let n, r, i;
		if (Ji(e, this.left, this.right) && Ji(t, this.top, this.bottom)) {
			for (i = this.legendHitBoxes, n = 0; n < i.length; ++n) if (r = i[n], Ji(e, r.left, r.left + r.width) && Ji(t, r.top, r.top + r.height)) return this.legendItems[n];
		}
		return null;
	}
	handleEvent(e) {
		let t = this.options;
		if (!Yu(e.type, t)) return;
		let n = this._getLegendItemAt(e.x, e.y);
		if (e.type === "mousemove" || e.type === "mouseout") {
			let r = this._hoveredItem, i = Uu(r, n);
			r && !i && V(t.onLeave, [
				e,
				r,
				this
			], this), this._hoveredItem = n, n && !i && V(t.onHover, [
				e,
				n,
				this
			], this);
		} else n && V(t.onClick, [
			e,
			n,
			this
		], this);
	}
};
function Gu(e, t, n, r, i) {
	return {
		itemWidth: Ku(r, e, t, n),
		itemHeight: qu(i, r, t.lineHeight)
	};
}
function Ku(e, t, n, r) {
	let i = e.text;
	return i && typeof i != "string" && (i = i.reduce((e, t) => e.length > t.length ? e : t)), t + n.size / 2 + r.measureText(i).width;
}
function qu(e, t, n) {
	let r = e;
	return typeof t.text != "string" && (r = Ju(t, n)), r;
}
function Ju(e, t) {
	return t * (e.text ? e.text.length : 0);
}
function Yu(e, t) {
	return !!((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (e === "click" || e === "mouseup"));
}
var Xu = {
	id: "legend",
	_element: Wu,
	start(e, t, n) {
		let r = e.legend = new Wu({
			ctx: e.ctx,
			options: n,
			chart: e
		});
		Lc.configure(e, r, n), Lc.addBox(e, r);
	},
	stop(e) {
		Lc.removeBox(e, e.legend), delete e.legend;
	},
	beforeUpdate(e, t, n) {
		let r = e.legend;
		Lc.configure(e, r, n), r.options = n;
	},
	afterUpdate(e) {
		let t = e.legend;
		t.buildLabels(), t.adjustHitBoxes();
	},
	afterEvent(e, t) {
		t.replay || e.legend.handleEvent(t.event);
	},
	defaults: {
		display: !0,
		position: "top",
		align: "center",
		fullSize: !0,
		reverse: !1,
		weight: 1e3,
		onClick(e, t, n) {
			let r = t.datasetIndex, i = n.chart;
			i.isDatasetVisible(r) ? (i.hide(r), t.hidden = !0) : (i.show(r), t.hidden = !1);
		},
		onHover: null,
		onLeave: null,
		labels: {
			color: (e) => e.chart.options.color,
			boxWidth: 40,
			padding: 10,
			generateLabels(e) {
				let t = e.data.datasets, { labels: { usePointStyle: n, pointStyle: r, textAlign: i, color: a, useBorderRadius: o, borderRadius: s } } = e.legend.options;
				return e._getSortedDatasetMetas().map((e) => {
					let c = e.controller.getStyle(n ? 0 : void 0), l = X(c.borderWidth);
					return {
						text: t[e.index].label,
						fillStyle: c.backgroundColor,
						fontColor: a,
						hidden: !e.visible,
						lineCap: c.borderCapStyle,
						lineDash: c.borderDash,
						lineDashOffset: c.borderDashOffset,
						lineJoin: c.borderJoinStyle,
						lineWidth: (l.width + l.height) / 4,
						strokeStyle: c.borderColor,
						pointStyle: r || c.pointStyle,
						rotation: c.rotation,
						textAlign: i || c.textAlign,
						borderRadius: o && (s || c.borderRadius),
						datasetIndex: e.index
					};
				}, this);
			}
		},
		title: {
			color: (e) => e.chart.options.color,
			display: !1,
			position: "center",
			text: ""
		}
	},
	descriptors: {
		_scriptable: (e) => !e.startsWith("on"),
		labels: { _scriptable: (e) => ![
			"generateLabels",
			"filter",
			"sort"
		].includes(e) }
	}
}, Zu = {
	average(e) {
		if (!e.length) return !1;
		let t, n, r = /* @__PURE__ */ new Set(), i = 0, a = 0;
		for (t = 0, n = e.length; t < n; ++t) {
			let n = e[t].element;
			if (n && n.hasValue()) {
				let e = n.tooltipPosition();
				r.add(e.x), i += e.y, ++a;
			}
		}
		return a === 0 || r.size === 0 ? !1 : {
			x: [...r].reduce((e, t) => e + t) / r.size,
			y: i / a
		};
	},
	nearest(e, t) {
		if (!e.length) return !1;
		let n = t.x, r = t.y, i = Infinity, a, o, s;
		for (a = 0, o = e.length; a < o; ++a) {
			let n = e[a].element;
			if (n && n.hasValue()) {
				let e = Wi(t, n.getCenterPoint());
				e < i && (i = e, s = n);
			}
		}
		if (s) {
			let e = s.tooltipPosition();
			n = e.x, r = e.y;
		}
		return {
			x: n,
			y: r
		};
	}
};
function Qu(e, t) {
	return t && (I(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function $u(e) {
	return (typeof e == "string" || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e;
}
function ed(e, t) {
	let { element: n, datasetIndex: r, index: i } = t, a = e.getDatasetMeta(r).controller, { label: o, value: s } = a.getLabelAndValue(i);
	return {
		chart: e,
		label: o,
		parsed: a.getParsed(i),
		raw: e.data.datasets[r].data[i],
		formattedValue: s,
		dataset: a.getDataset(),
		dataIndex: i,
		datasetIndex: r,
		element: n
	};
}
function td(e, t) {
	let n = e.chart.ctx, { body: r, footer: i, title: a } = e, { boxWidth: o, boxHeight: s } = t, c = Z(t.bodyFont), l = Z(t.titleFont), u = Z(t.footerFont), d = a.length, f = i.length, p = r.length, m = X(t.padding), h = m.height, g = 0, _ = r.reduce((e, t) => e + t.before.length + t.lines.length + t.after.length, 0);
	if (_ += e.beforeBody.length + e.afterBody.length, d && (h += d * l.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), _) {
		let e = t.displayColors ? Math.max(s, c.lineHeight) : c.lineHeight;
		h += p * e + (_ - p) * c.lineHeight + (_ - 1) * t.bodySpacing;
	}
	f && (h += t.footerMarginTop + f * u.lineHeight + (f - 1) * t.footerSpacing);
	let v = 0, y = function(e) {
		g = Math.max(g, n.measureText(e).width + v);
	};
	return n.save(), n.font = l.string, H(e.title, y), n.font = c.string, H(e.beforeBody.concat(e.afterBody), y), v = t.displayColors ? o + 2 + t.boxPadding : 0, H(r, (e) => {
		H(e.before, y), H(e.lines, y), H(e.after, y);
	}), v = 0, n.font = u.string, H(e.footer, y), n.restore(), g += m.width, {
		width: g,
		height: h
	};
}
function nd(e, t) {
	let { y: n, height: r } = t;
	return n < r / 2 ? "top" : n > e.height - r / 2 ? "bottom" : "center";
}
function rd(e, t, n, r) {
	let { x: i, width: a } = r, o = n.caretSize + n.caretPadding;
	if (e === "left" && i + a + o > t.width || e === "right" && i - a - o < 0) return !0;
}
function id(e, t, n, r) {
	let { x: i, width: a } = n, { width: o, chartArea: { left: s, right: c } } = e, l = "center";
	return r === "center" ? l = i <= (s + c) / 2 ? "left" : "right" : i <= a / 2 ? l = "left" : i >= o - a / 2 && (l = "right"), rd(l, e, t, n) && (l = "center"), l;
}
function ad(e, t, n) {
	let r = n.yAlign || t.yAlign || nd(e, n);
	return {
		xAlign: n.xAlign || t.xAlign || id(e, t, n, r),
		yAlign: r
	};
}
function od(e, t) {
	let { x: n, width: r } = e;
	return t === "right" ? n -= r : t === "center" && (n -= r / 2), n;
}
function sd(e, t, n) {
	let { y: r, height: i } = e;
	return t === "top" ? r += n : r -= t === "bottom" ? i + n : i / 2, r;
}
function cd(e, t, n, r) {
	let { caretSize: i, caretPadding: a, cornerRadius: o } = e, { xAlign: s, yAlign: c } = n, l = i + a, { topLeft: u, topRight: d, bottomLeft: f, bottomRight: p } = to(o), m = od(t, s), h = sd(t, c, l);
	return c === "center" ? s === "left" ? m += l : s === "right" && (m -= l) : s === "left" ? m -= Math.max(u, f) + i : s === "right" && (m += Math.max(d, p) + i), {
		x: q(m, 0, r.width - t.width),
		y: q(h, 0, r.height - t.height)
	};
}
function ld(e, t, n) {
	let r = X(n.padding);
	return t === "center" ? e.x + e.width / 2 : t === "right" ? e.x + e.width - r.right : e.x + r.left;
}
function ud(e) {
	return Qu([], $u(e));
}
function dd(e, t, n) {
	return io(e, {
		tooltip: t,
		tooltipItems: n,
		type: "tooltip"
	});
}
function fd(e, t) {
	let n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
	return n ? e.override(n) : e;
}
var pd = {
	beforeTitle: si,
	title(e) {
		if (e.length > 0) {
			let t = e[0], n = t.chart.data.labels, r = n ? n.length : 0;
			if (this && this.options && this.options.mode === "dataset") return t.dataset.label || "";
			if (t.label) return t.label;
			if (r > 0 && t.dataIndex < r) return n[t.dataIndex];
		}
		return "";
	},
	afterTitle: si,
	beforeBody: si,
	beforeLabel: si,
	label(e) {
		if (this && this.options && this.options.mode === "dataset") return e.label + ": " + e.formattedValue || e.formattedValue;
		let t = e.dataset.label || "";
		t && (t += ": ");
		let n = e.formattedValue;
		return F(n) || (t += n), t;
	},
	labelColor(e) {
		let t = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
		return {
			borderColor: t.borderColor,
			backgroundColor: t.backgroundColor,
			borderWidth: t.borderWidth,
			borderDash: t.borderDash,
			borderDashOffset: t.borderDashOffset,
			borderRadius: 0
		};
	},
	labelTextColor() {
		return this.options.bodyColor;
	},
	labelPointStyle(e) {
		let t = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
		return {
			pointStyle: t.pointStyle,
			rotation: t.rotation
		};
	},
	afterLabel: si,
	afterBody: si,
	beforeFooter: si,
	footer: si,
	afterFooter: si
};
function Q(e, t, n, r) {
	let i = e[t].call(n, r);
	return i === void 0 ? pd[t].call(n, r) : i;
}
var md = class extends sl {
	static positioners = Zu;
	constructor(e) {
		super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = e.chart, this.options = e.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
	}
	initialize(e) {
		this.options = e, this._cachedAnimations = void 0, this.$context = void 0;
	}
	_resolveAnimations() {
		let e = this._cachedAnimations;
		if (e) return e;
		let t = this.chart, n = this.options.setContext(this.getContext()), r = n.enabled && t.options.animation && n.animations, i = new ws(this.chart, r);
		return r._cacheable && (this._cachedAnimations = Object.freeze(i)), i;
	}
	getContext() {
		return this.$context ||= dd(this.chart.getContext(), this, this._tooltipItems);
	}
	getTitle(e, t) {
		let { callbacks: n } = t, r = Q(n, "beforeTitle", this, e), i = Q(n, "title", this, e), a = Q(n, "afterTitle", this, e), o = [];
		return o = Qu(o, $u(r)), o = Qu(o, $u(i)), o = Qu(o, $u(a)), o;
	}
	getBeforeBody(e, t) {
		return ud(Q(t.callbacks, "beforeBody", this, e));
	}
	getBody(e, t) {
		let { callbacks: n } = t, r = [];
		return H(e, (e) => {
			let t = {
				before: [],
				lines: [],
				after: []
			}, i = fd(n, e);
			Qu(t.before, $u(Q(i, "beforeLabel", this, e))), Qu(t.lines, Q(i, "label", this, e)), Qu(t.after, $u(Q(i, "afterLabel", this, e))), r.push(t);
		}), r;
	}
	getAfterBody(e, t) {
		return ud(Q(t.callbacks, "afterBody", this, e));
	}
	getFooter(e, t) {
		let { callbacks: n } = t, r = Q(n, "beforeFooter", this, e), i = Q(n, "footer", this, e), a = Q(n, "afterFooter", this, e), o = [];
		return o = Qu(o, $u(r)), o = Qu(o, $u(i)), o = Qu(o, $u(a)), o;
	}
	_createItems(e) {
		let t = this._active, n = this.chart.data, r = [], i = [], a = [], o = [], s, c;
		for (s = 0, c = t.length; s < c; ++s) o.push(ed(this.chart, t[s]));
		return e.filter && (o = o.filter((t, r, i) => e.filter(t, r, i, n))), e.itemSort && (o = o.sort((t, r) => e.itemSort(t, r, n))), H(o, (t) => {
			let n = fd(e.callbacks, t);
			r.push(Q(n, "labelColor", this, t)), i.push(Q(n, "labelPointStyle", this, t)), a.push(Q(n, "labelTextColor", this, t));
		}), this.labelColors = r, this.labelPointStyles = i, this.labelTextColors = a, this.dataPoints = o, o;
	}
	update(e, t) {
		let n = this.options.setContext(this.getContext()), r = this._active, i, a = [];
		if (!r.length) this.opacity !== 0 && (i = { opacity: 0 });
		else {
			let e = Zu[n.position].call(this, r, this._eventPosition);
			a = this._createItems(n), this.title = this.getTitle(a, n), this.beforeBody = this.getBeforeBody(a, n), this.body = this.getBody(a, n), this.afterBody = this.getAfterBody(a, n), this.footer = this.getFooter(a, n);
			let t = this._size = td(this, n), o = Object.assign({}, e, t), s = ad(this.chart, n, o), c = cd(n, o, s, this.chart);
			this.xAlign = s.xAlign, this.yAlign = s.yAlign, i = {
				opacity: 1,
				x: c.x,
				y: c.y,
				width: t.width,
				height: t.height,
				caretX: e.x,
				caretY: e.y
			};
		}
		this._tooltipItems = a, this.$context = void 0, i && this._resolveAnimations().update(this, i), e && n.external && n.external.call(this, {
			chart: this.chart,
			tooltip: this,
			replay: t
		});
	}
	drawCaret(e, t, n, r) {
		let i = this.getCaretPosition(e, n, r);
		t.lineTo(i.x1, i.y1), t.lineTo(i.x2, i.y2), t.lineTo(i.x3, i.y3);
	}
	getCaretPosition(e, t, n) {
		let { xAlign: r, yAlign: i } = this, { caretSize: a, cornerRadius: o } = n, { topLeft: s, topRight: c, bottomLeft: l, bottomRight: u } = to(o), { x: d, y: f } = e, { width: p, height: m } = t, h, g, _, v, y, b;
		return i === "center" ? (y = f + m / 2, r === "left" ? (h = d, g = h - a, v = y + a, b = y - a) : (h = d + p, g = h + a, v = y - a, b = y + a), _ = h) : (g = r === "left" ? d + Math.max(s, l) + a : r === "right" ? d + p - Math.max(c, u) - a : this.caretX, i === "top" ? (v = f, y = v - a, h = g - a, _ = g + a) : (v = f + m, y = v + a, h = g + a, _ = g - a), b = v), {
			x1: h,
			x2: g,
			x3: _,
			y1: v,
			y2: y,
			y3: b
		};
	}
	drawTitle(e, t, n) {
		let r = this.title, i = r.length, a, o, s;
		if (i) {
			let c = ns(n.rtl, this.x, this.width);
			for (e.x = ld(this, n.titleAlign, n), t.textAlign = c.textAlign(n.titleAlign), t.textBaseline = "middle", a = Z(n.titleFont), o = n.titleSpacing, t.fillStyle = n.titleColor, t.font = a.string, s = 0; s < i; ++s) t.fillText(r[s], c.x(e.x), e.y + a.lineHeight / 2), e.y += a.lineHeight + o, s + 1 === i && (e.y += n.titleMarginBottom - o);
		}
	}
	_drawColorBox(e, t, n, r, i) {
		let a = this.labelColors[n], o = this.labelPointStyles[n], { boxHeight: s, boxWidth: c } = i, l = Z(i.bodyFont), u = ld(this, "left", i), d = r.x(u), f = s < l.lineHeight ? (l.lineHeight - s) / 2 : 0, p = t.y + f;
		if (i.usePointStyle) {
			let t = {
				radius: Math.min(c, s) / 2,
				pointStyle: o.pointStyle,
				rotation: o.rotation,
				borderWidth: 1
			}, n = r.leftForLtr(d, c) + c / 2, l = p + s / 2;
			e.strokeStyle = i.multiKeyBackground, e.fillStyle = i.multiKeyBackground, La(e, t, n, l), e.strokeStyle = a.borderColor, e.fillStyle = a.backgroundColor, La(e, t, n, l);
		} else {
			e.lineWidth = L(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1, e.strokeStyle = a.borderColor, e.setLineDash(a.borderDash || []), e.lineDashOffset = a.borderDashOffset || 0;
			let t = r.leftForLtr(d, c), n = r.leftForLtr(r.xPlus(d, 1), c - 2), o = to(a.borderRadius);
			Object.values(o).some((e) => e !== 0) ? (e.beginPath(), e.fillStyle = i.multiKeyBackground, Ja(e, {
				x: t,
				y: p,
				w: c,
				h: s,
				radius: o
			}), e.fill(), e.stroke(), e.fillStyle = a.backgroundColor, e.beginPath(), Ja(e, {
				x: n,
				y: p + 1,
				w: c - 2,
				h: s - 2,
				radius: o
			}), e.fill()) : (e.fillStyle = i.multiKeyBackground, e.fillRect(t, p, c, s), e.strokeRect(t, p, c, s), e.fillStyle = a.backgroundColor, e.fillRect(n, p + 1, c - 2, s - 2));
		}
		e.fillStyle = this.labelTextColors[n];
	}
	drawBody(e, t, n) {
		let { body: r } = this, { bodySpacing: i, bodyAlign: a, displayColors: o, boxHeight: s, boxWidth: c, boxPadding: l } = n, u = Z(n.bodyFont), d = u.lineHeight, f = 0, p = ns(n.rtl, this.x, this.width), m = function(n) {
			t.fillText(n, p.x(e.x + f), e.y + d / 2), e.y += d + i;
		}, h = p.textAlign(a), g, _, v, y, b, x, S;
		for (t.textAlign = a, t.textBaseline = "middle", t.font = u.string, e.x = ld(this, h, n), t.fillStyle = n.bodyColor, H(this.beforeBody, m), f = o && h !== "right" ? a === "center" ? c / 2 + l : c + 2 + l : 0, y = 0, x = r.length; y < x; ++y) {
			for (g = r[y], _ = this.labelTextColors[y], t.fillStyle = _, H(g.before, m), v = g.lines, o && v.length && (this._drawColorBox(t, e, y, p, n), d = Math.max(u.lineHeight, s)), b = 0, S = v.length; b < S; ++b) m(v[b]), d = u.lineHeight;
			H(g.after, m);
		}
		f = 0, d = u.lineHeight, H(this.afterBody, m), e.y -= i;
	}
	drawFooter(e, t, n) {
		let r = this.footer, i = r.length, a, o;
		if (i) {
			let s = ns(n.rtl, this.x, this.width);
			for (e.x = ld(this, n.footerAlign, n), e.y += n.footerMarginTop, t.textAlign = s.textAlign(n.footerAlign), t.textBaseline = "middle", a = Z(n.footerFont), t.fillStyle = n.footerColor, t.font = a.string, o = 0; o < i; ++o) t.fillText(r[o], s.x(e.x), e.y + a.lineHeight / 2), e.y += a.lineHeight + n.footerSpacing;
		}
	}
	drawBackground(e, t, n, r) {
		let { xAlign: i, yAlign: a } = this, { x: o, y: s } = e, { width: c, height: l } = n, { topLeft: u, topRight: d, bottomLeft: f, bottomRight: p } = to(r.cornerRadius);
		t.fillStyle = r.backgroundColor, t.strokeStyle = r.borderColor, t.lineWidth = r.borderWidth, t.beginPath(), t.moveTo(o + u, s), a === "top" && this.drawCaret(e, t, n, r), t.lineTo(o + c - d, s), t.quadraticCurveTo(o + c, s, o + c, s + d), a === "center" && i === "right" && this.drawCaret(e, t, n, r), t.lineTo(o + c, s + l - p), t.quadraticCurveTo(o + c, s + l, o + c - p, s + l), a === "bottom" && this.drawCaret(e, t, n, r), t.lineTo(o + f, s + l), t.quadraticCurveTo(o, s + l, o, s + l - f), a === "center" && i === "left" && this.drawCaret(e, t, n, r), t.lineTo(o, s + u), t.quadraticCurveTo(o, s, o + u, s), t.closePath(), t.fill(), r.borderWidth > 0 && t.stroke();
	}
	_updateAnimationTarget(e) {
		let t = this.chart, n = this.$animations, r = n && n.x, i = n && n.y;
		if (r || i) {
			let n = Zu[e.position].call(this, this._active, this._eventPosition);
			if (!n) return;
			let a = this._size = td(this, e), o = Object.assign({}, n, this._size), s = ad(t, e, o), c = cd(e, o, s, t);
			(r._to !== c.x || i._to !== c.y) && (this.xAlign = s.xAlign, this.yAlign = s.yAlign, this.width = a.width, this.height = a.height, this.caretX = n.x, this.caretY = n.y, this._resolveAnimations().update(this, c));
		}
	}
	_willRender() {
		return !!this.opacity;
	}
	draw(e) {
		let t = this.options.setContext(this.getContext()), n = this.opacity;
		if (!n) return;
		this._updateAnimationTarget(t);
		let r = {
			width: this.width,
			height: this.height
		}, i = {
			x: this.x,
			y: this.y
		};
		n = Math.abs(n) < .001 ? 0 : n;
		let a = X(t.padding), o = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
		t.enabled && o && (e.save(), e.globalAlpha = n, this.drawBackground(i, e, r, t), rs(e, t.textDirection), i.y += a.top, this.drawTitle(i, e, t), this.drawBody(i, e, t), this.drawFooter(i, e, t), is(e, t.textDirection), e.restore());
	}
	getActiveElements() {
		return this._active || [];
	}
	setActiveElements(e, t) {
		let n = this._active, r = e.map(({ datasetIndex: e, index: t }) => {
			let n = this.chart.getDatasetMeta(e);
			if (!n) throw Error("Cannot find a dataset at index " + e);
			return {
				datasetIndex: e,
				element: n.data[t],
				index: t
			};
		}), i = !ui(n, r), a = this._positionChanged(r, t);
		(i || a) && (this._active = r, this._eventPosition = t, this._ignoreReplayEvents = !0, this.update(!0));
	}
	handleEvent(e, t, n = !0) {
		if (t && this._ignoreReplayEvents) return !1;
		this._ignoreReplayEvents = !1;
		let r = this.options, i = this._active || [], a = this._getActiveElements(e, i, t, n), o = this._positionChanged(a, e), s = t || !ui(a, i) || o;
		return s && (this._active = a, (r.enabled || r.external) && (this._eventPosition = {
			x: e.x,
			y: e.y
		}, this.update(!0, t))), s;
	}
	_getActiveElements(e, t, n, r) {
		let i = this.options;
		if (e.type === "mouseout") return [];
		if (!r) return t.filter((e) => this.chart.data.datasets[e.datasetIndex] && this.chart.getDatasetMeta(e.datasetIndex).controller.getParsed(e.index) !== void 0);
		let a = this.chart.getElementsAtEventForMode(e, i.mode, i, n);
		return i.reverse && a.reverse(), a;
	}
	_positionChanged(e, t) {
		let { caretX: n, caretY: r, options: i } = this, a = Zu[i.position].call(this, e, t);
		return a !== !1 && (n !== a.x || r !== a.y);
	}
}, hd = {
	id: "tooltip",
	_element: md,
	positioners: Zu,
	afterInit(e, t, n) {
		n && (e.tooltip = new md({
			chart: e,
			options: n
		}));
	},
	beforeUpdate(e, t, n) {
		e.tooltip && e.tooltip.initialize(n);
	},
	reset(e, t, n) {
		e.tooltip && e.tooltip.initialize(n);
	},
	afterDraw(e) {
		let t = e.tooltip;
		if (t && t._willRender()) {
			let n = { tooltip: t };
			if (e.notifyPlugins("beforeTooltipDraw", {
				...n,
				cancelable: !0
			}) === !1) return;
			t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
		}
	},
	afterEvent(e, t) {
		if (e.tooltip) {
			let n = t.replay;
			e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0);
		}
	},
	defaults: {
		enabled: !0,
		external: null,
		position: "average",
		backgroundColor: "rgba(0,0,0,0.8)",
		titleColor: "#fff",
		titleFont: { weight: "bold" },
		titleSpacing: 2,
		titleMarginBottom: 6,
		titleAlign: "left",
		bodyColor: "#fff",
		bodySpacing: 2,
		bodyFont: {},
		bodyAlign: "left",
		footerColor: "#fff",
		footerSpacing: 2,
		footerMarginTop: 6,
		footerFont: { weight: "bold" },
		footerAlign: "left",
		padding: 6,
		caretPadding: 2,
		caretSize: 5,
		cornerRadius: 6,
		boxHeight: (e, t) => t.bodyFont.size,
		boxWidth: (e, t) => t.bodyFont.size,
		multiKeyBackground: "#fff",
		displayColors: !0,
		boxPadding: 0,
		borderColor: "rgba(0,0,0,0)",
		borderWidth: 0,
		animation: {
			duration: 400,
			easing: "easeOutQuart"
		},
		animations: {
			numbers: {
				type: "number",
				properties: [
					"x",
					"y",
					"width",
					"height",
					"caretX",
					"caretY"
				]
			},
			opacity: {
				easing: "linear",
				duration: 200
			}
		},
		callbacks: pd
	},
	defaultRoutes: {
		bodyFont: "font",
		footerFont: "font",
		titleFont: "font"
	},
	descriptors: {
		_scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
		_indexable: !1,
		callbacks: {
			_scriptable: !1,
			_indexable: !1
		},
		animation: { _fallback: !1 },
		animations: { _fallback: "animation" }
	},
	additionalOptionScopes: ["interaction"]
}, gd = (e, t, n, r) => (typeof t == "string" ? (n = e.push(t) - 1, r.unshift({
	index: n,
	label: t
})) : isNaN(t) && (n = null), n);
function _d(e, t, n, r) {
	let i = e.indexOf(t);
	return i === -1 ? gd(e, t, n, r) : i === e.lastIndexOf(t) ? i : n;
}
var vd = (e, t) => e === null ? null : q(Math.round(e), 0, t);
function yd(e) {
	let t = this.getLabels();
	return e >= 0 && e < t.length ? t[e] : e;
}
var bd = class extends Dl {
	static id = "category";
	static defaults = { ticks: { callback: yd } };
	constructor(e) {
		super(e), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
	}
	init(e) {
		let t = this._addedLabels;
		if (t.length) {
			let e = this.getLabels();
			for (let { index: n, label: r } of t) e[n] === r && e.splice(n, 1);
			this._addedLabels = [];
		}
		super.init(e);
	}
	parse(e, t) {
		if (F(e)) return null;
		let n = this.getLabels();
		return t = isFinite(t) && n[t] === e ? t : _d(n, e, B(t, e), this._addedLabels), vd(t, n.length - 1);
	}
	determineDataLimits() {
		let { minDefined: e, maxDefined: t } = this.getUserBounds(), { min: n, max: r } = this.getMinMax(!0);
		this.options.bounds === "ticks" && (e || (n = 0), t || (r = this.getLabels().length - 1)), this.min = n, this.max = r;
	}
	buildTicks() {
		let e = this.min, t = this.max, n = this.options.offset, r = [], i = this.getLabels();
		i = e === 0 && t === i.length - 1 ? i : i.slice(e, t + 1), this._valueRange = Math.max(i.length - +!n, 1), this._startValue = this.min - (n ? .5 : 0);
		for (let n = e; n <= t; n++) r.push({ value: n });
		return r;
	}
	getLabelForValue(e) {
		return yd.call(this, e);
	}
	configure() {
		super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
	}
	getPixelForValue(e) {
		return typeof e != "number" && (e = this.parse(e)), e === null ? NaN : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
	}
	getPixelForTick(e) {
		let t = this.ticks;
		return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e].value);
	}
	getValueForPixel(e) {
		return Math.round(this._startValue + this.getDecimalForPixel(e) * this._valueRange);
	}
	getBasePixel() {
		return this.bottom;
	}
};
function xd(e, t) {
	let n = [], { bounds: r, step: i, min: a, max: o, precision: s, count: c, maxTicks: l, maxDigits: u, includeBounds: d } = e, f = i || 1, p = l - 1, { min: m, max: h } = t, g = !F(a), _ = !F(o), v = !F(c), y = (h - m) / (u + 1), b = Pi((h - m) / p / f) * f, x, S, C, w;
	if (b < 1e-14 && !g && !_) return [{ value: m }, { value: h }];
	w = Math.ceil(h / b) - Math.floor(m / b), w > p && (b = Pi(w * b / p / f) * f), F(s) || (x = 10 ** s, b = Math.ceil(b * x) / x), r === "ticks" ? (S = Math.floor(m / b) * b, C = Math.ceil(h / b) * b) : (S = m, C = h), g && _ && i && Ri((o - a) / i, b / 1e3) ? (w = Math.round(Math.min((o - a) / b, l)), b = (o - a) / w, S = a, C = o) : v ? (S = g ? a : S, C = _ ? o : C, w = c - 1, b = (C - S) / w) : (w = (C - S) / b, w = Ni(w, Math.round(w), b / 1e3) ? Math.round(w) : Math.ceil(w));
	let T = Math.max(Hi(b), Hi(S));
	x = 10 ** (F(s) ? T : s), S = Math.round(S * x) / x, C = Math.round(C * x) / x;
	let E = 0;
	for (g && (d && S !== a ? (n.push({ value: a }), S < a && E++, Ni(Math.round((S + E * b) * x) / x, a, Sd(a, y, e)) && E++) : S < a && E++); E < w; ++E) {
		let e = Math.round((S + E * b) * x) / x;
		if (_ && e > o) break;
		n.push({ value: e });
	}
	return _ && d && C !== o ? n.length && Ni(n[n.length - 1].value, o, Sd(o, y, e)) ? n[n.length - 1].value = o : n.push({ value: o }) : (!_ || C === o) && n.push({ value: C }), n;
}
function Sd(e, t, { horizontal: n, minRotation: r }) {
	let i = Bi(r), a = (n ? Math.sin(i) : Math.cos(i)) || .001, o = .75 * t * ("" + e).length;
	return Math.min(t / a, o);
}
var Cd = class extends Dl {
	constructor(e) {
		super(e), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
	}
	parse(e, t) {
		return F(e) || (typeof e == "number" || e instanceof Number) && !isFinite(+e) ? null : +e;
	}
	handleTickRangeOptions() {
		let { beginAtZero: e } = this.options, { minDefined: t, maxDefined: n } = this.getUserBounds(), { min: r, max: i } = this, a = (e) => r = t ? r : e, o = (e) => i = n ? i : e;
		if (e) {
			let e = Mi(r), t = Mi(i);
			e < 0 && t < 0 ? o(0) : e > 0 && t > 0 && a(0);
		}
		if (r === i) {
			let t = i === 0 ? 1 : Math.abs(i * .05);
			o(i + t), e || a(r - t);
		}
		this.min = r, this.max = i;
	}
	getTickLimit() {
		let { maxTicksLimit: e, stepSize: t } = this.options.ticks, n;
		return t ? (n = Math.ceil(this.max / t) - Math.floor(this.min / t) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${t} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e ||= 11), e && (n = Math.min(e, n)), n;
	}
	computeTickLimit() {
		return Infinity;
	}
	buildTicks() {
		let e = this.options, t = e.ticks, n = this.getTickLimit();
		n = Math.max(2, n);
		let r = xd({
			maxTicks: n,
			bounds: e.bounds,
			min: e.min,
			max: e.max,
			precision: t.precision,
			step: t.stepSize,
			count: t.count,
			maxDigits: this._maxDigits(),
			horizontal: this.isHorizontal(),
			minRotation: t.minRotation || 0,
			includeBounds: t.includeBounds !== !1
		}, this._range || this);
		return e.bounds === "ticks" && zi(r, this, "value"), e.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
	}
	configure() {
		let e = this.ticks, t = this.min, n = this.max;
		if (super.configure(), this.options.offset && e.length) {
			let r = (n - t) / Math.max(e.length - 1, 1) / 2;
			t -= r, n += r;
		}
		this._startValue = t, this._endValue = n, this._valueRange = n - t;
	}
	getLabelForValue(e) {
		return Ca(e, this.chart.options.locale, this.options.ticks.format);
	}
}, wd = class extends Cd {
	static id = "linear";
	static defaults = { ticks: { callback: Ea.formatters.numeric } };
	determineDataLimits() {
		let { min: e, max: t } = this.getMinMax(!0);
		this.min = R(e) ? e : 0, this.max = R(t) ? t : 1, this.handleTickRangeOptions();
	}
	computeTickLimit() {
		let e = this.isHorizontal(), t = e ? this.width : this.height, n = Bi(this.options.ticks.minRotation), r = (e ? Math.sin(n) : Math.cos(n)) || .001, i = this._resolveTickFontOptions(0);
		return Math.ceil(t / Math.min(40, i.lineHeight / r));
	}
	getPixelForValue(e) {
		return e === null ? NaN : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
	}
	getValueForPixel(e) {
		return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
	}
}, Td = (e) => Math.floor(ji(e)), Ed = (e, t) => 10 ** (Td(e) + t);
function Dd(e) {
	return e / 10 ** Td(e) == 1;
}
function Od(e, t, n) {
	let r = 10 ** n, i = Math.floor(e / r);
	return Math.ceil(t / r) - i;
}
function kd(e, t) {
	let n = Td(t - e);
	for (; Od(e, t, n) > 10;) n++;
	for (; Od(e, t, n) < 10;) n--;
	return Math.min(n, Td(e));
}
function Ad(e, { min: t, max: n }) {
	t = z(e.min, t);
	let r = [], i = Td(t), a = kd(t, n), o = a < 0 ? 10 ** Math.abs(a) : 1, s = 10 ** a, c = i > a ? 10 ** i : 0, l = Math.round((t - c) * o) / o, u = Math.floor((t - c) / s / 10) * s * 10, d = Math.floor((l - u) / 10 ** a), f = z(e.min, Math.round((c + u + d * 10 ** a) * o) / o);
	for (; f < n;) r.push({
		value: f,
		major: Dd(f),
		significand: d
	}), d >= 10 ? d = d < 15 ? 15 : 20 : d++, d >= 20 && (a++, d = 2, o = a >= 0 ? 1 : o), f = Math.round((c + u + d * 10 ** a) * o) / o;
	let p = z(e.max, f);
	return r.push({
		value: p,
		major: Dd(p),
		significand: d
	}), r;
}
(class extends Dl {
	static id = "logarithmic";
	static defaults = { ticks: {
		callback: Ea.formatters.logarithmic,
		major: { enabled: !0 }
	} };
	constructor(e) {
		super(e), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
	}
	parse(e, t) {
		let n = Cd.prototype.parse.apply(this, [e, t]);
		if (n === 0) this._zero = !0;
		else return R(n) && n > 0 ? n : null;
	}
	determineDataLimits() {
		let { min: e, max: t } = this.getMinMax(!0);
		this.min = R(e) ? Math.max(0, e) : null, this.max = R(t) ? Math.max(0, t) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !R(this._userMin) && (this.min = e === Ed(this.min, 0) ? Ed(this.min, -1) : Ed(this.min, 0)), this.handleTickRangeOptions();
	}
	handleTickRangeOptions() {
		let { minDefined: e, maxDefined: t } = this.getUserBounds(), n = this.min, r = this.max, i = (t) => n = e ? n : t, a = (e) => r = t ? r : e;
		n === r && (n <= 0 ? (i(1), a(10)) : (i(Ed(n, -1)), a(Ed(r, 1)))), n <= 0 && i(Ed(r, -1)), r <= 0 && a(Ed(n, 1)), this.min = n, this.max = r;
	}
	buildTicks() {
		let e = this.options, t = Ad({
			min: this._userMin,
			max: this._userMax
		}, this);
		return e.bounds === "ticks" && zi(t, this, "value"), e.reverse ? (t.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), t;
	}
	getLabelForValue(e) {
		return e === void 0 ? "0" : Ca(e, this.chart.options.locale, this.options.ticks.format);
	}
	configure() {
		let e = this.min;
		super.configure(), this._startValue = ji(e), this._valueRange = ji(this.max) - ji(e);
	}
	getPixelForValue(e) {
		return (e === void 0 || e === 0) && (e = this.min), e === null || isNaN(e) ? NaN : this.getPixelForDecimal(e === this.min ? 0 : (ji(e) - this._startValue) / this._valueRange);
	}
	getValueForPixel(e) {
		let t = this.getDecimalForPixel(e);
		return 10 ** (this._startValue + t * this._valueRange);
	}
});
function jd(e) {
	let t = e.ticks;
	if (t.display && e.display) {
		let e = X(t.backdropPadding);
		return B(t.font && t.font.size, Y.font.size) + e.height;
	}
	return 0;
}
function Md(e, t, n) {
	return n = I(n) ? n : [n], {
		w: Pa(e, t.string, n),
		h: n.length * t.lineHeight
	};
}
function Nd(e, t, n, r, i) {
	return e === r || e === i ? {
		start: t - n / 2,
		end: t + n / 2
	} : e < r || e > i ? {
		start: t - n,
		end: t
	} : {
		start: t,
		end: t + n
	};
}
function Pd(e) {
	let t = {
		l: e.left + e._padding.left,
		r: e.right - e._padding.right,
		t: e.top + e._padding.top,
		b: e.bottom - e._padding.bottom
	}, n = Object.assign({}, t), r = [], i = [], a = e._pointLabels.length, o = e.options.pointLabels, s = o.centerPointLabels ? U / a : 0;
	for (let c = 0; c < a; c++) {
		let a = o.setContext(e.getPointLabelContext(c));
		i[c] = a.padding;
		let l = e.getPointPosition(c, e.drawingArea + i[c], s), u = Z(a.font), d = Md(e.ctx, u, e._pointLabels[c]);
		r[c] = d;
		let f = K(e.getIndexAngle(c) + s), p = Math.round(Vi(f));
		Fd(n, t, f, Nd(p, l.x, d.w, 0, 180), Nd(p, l.y, d.h, 90, 270));
	}
	e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b), e._pointLabelItems = Rd(e, r, i);
}
function Fd(e, t, n, r, i) {
	let a = Math.abs(Math.sin(n)), o = Math.abs(Math.cos(n)), s = 0, c = 0;
	r.start < t.l ? (s = (t.l - r.start) / a, e.l = Math.min(e.l, t.l - s)) : r.end > t.r && (s = (r.end - t.r) / a, e.r = Math.max(e.r, t.r + s)), i.start < t.t ? (c = (t.t - i.start) / o, e.t = Math.min(e.t, t.t - c)) : i.end > t.b && (c = (i.end - t.b) / o, e.b = Math.max(e.b, t.b + c));
}
function Id(e, t, n) {
	let r = e.drawingArea, { extra: i, additionalAngle: a, padding: o, size: s } = n, c = e.getPointPosition(t, r + i + o, a), l = Math.round(Vi(K(c.angle + G))), u = Vd(c.y, s.h, l), d = zd(l), f = Bd(c.x, s.w, d);
	return {
		visible: !0,
		x: c.x,
		y: u,
		textAlign: d,
		left: f,
		top: u,
		right: f + s.w,
		bottom: u + s.h
	};
}
function Ld(e, t) {
	if (!t) return !0;
	let { left: n, top: r, right: i, bottom: a } = e;
	return !(za({
		x: n,
		y: r
	}, t) || za({
		x: n,
		y: a
	}, t) || za({
		x: i,
		y: r
	}, t) || za({
		x: i,
		y: a
	}, t));
}
function Rd(e, t, n) {
	let r = [], i = e._pointLabels.length, a = e.options, { centerPointLabels: o, display: s } = a.pointLabels, c = {
		extra: jd(a) / 2,
		additionalAngle: o ? U / i : 0
	}, l;
	for (let a = 0; a < i; a++) {
		c.padding = n[a], c.size = t[a];
		let i = Id(e, a, c);
		r.push(i), s === "auto" && (i.visible = Ld(i, l), i.visible && (l = i));
	}
	return r;
}
function zd(e) {
	return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function Bd(e, t, n) {
	return n === "right" ? e -= t : n === "center" && (e -= t / 2), e;
}
function Vd(e, t, n) {
	return n === 90 || n === 270 ? e -= t / 2 : (n > 270 || n < 90) && (e -= t), e;
}
function Hd(e, t, n) {
	let { left: r, top: i, right: a, bottom: o } = n, { backdropColor: s } = t;
	if (!F(s)) {
		let n = to(t.borderRadius), c = X(t.backdropPadding);
		e.fillStyle = s;
		let l = r - c.left, u = i - c.top, d = a - r + c.width, f = o - i + c.height;
		Object.values(n).some((e) => e !== 0) ? (e.beginPath(), Ja(e, {
			x: l,
			y: u,
			w: d,
			h: f,
			radius: n
		}), e.fill()) : e.fillRect(l, u, d, f);
	}
}
function Ud(e, t) {
	let { ctx: n, options: { pointLabels: r } } = e;
	for (let i = t - 1; i >= 0; i--) {
		let t = e._pointLabelItems[i];
		if (!t.visible) continue;
		let a = r.setContext(e.getPointLabelContext(i));
		Hd(n, a, t);
		let o = Z(a.font), { x: s, y: c, textAlign: l } = t;
		qa(n, e._pointLabels[i], s, c + o.lineHeight / 2, o, {
			color: a.color,
			textAlign: l,
			textBaseline: "middle"
		});
	}
}
function Wd(e, t, n, r) {
	let { ctx: i } = e;
	if (n) i.arc(e.xCenter, e.yCenter, t, 0, W);
	else {
		let n = e.getPointPosition(0, t);
		i.moveTo(n.x, n.y);
		for (let a = 1; a < r; a++) n = e.getPointPosition(a, t), i.lineTo(n.x, n.y);
	}
}
function Gd(e, t, n, r, i) {
	let a = e.ctx, o = t.circular, { color: s, lineWidth: c } = t;
	!o && !r || !s || !c || n < 0 || (a.save(), a.strokeStyle = s, a.lineWidth = c, a.setLineDash(i.dash || []), a.lineDashOffset = i.dashOffset, a.beginPath(), Wd(e, n, o, r), a.closePath(), a.stroke(), a.restore());
}
function Kd(e, t, n) {
	return io(e, {
		label: n,
		index: t,
		type: "pointLabel"
	});
}
(class extends Cd {
	static id = "radialLinear";
	static defaults = {
		display: !0,
		animate: !0,
		position: "chartArea",
		angleLines: {
			display: !0,
			lineWidth: 1,
			borderDash: [],
			borderDashOffset: 0
		},
		grid: { circular: !1 },
		startAngle: 0,
		ticks: {
			showLabelBackdrop: !0,
			callback: Ea.formatters.numeric
		},
		pointLabels: {
			backdropColor: void 0,
			backdropPadding: 2,
			display: !0,
			font: { size: 10 },
			callback(e) {
				return e;
			},
			padding: 5,
			centerPointLabels: !1
		}
	};
	static defaultRoutes = {
		"angleLines.color": "borderColor",
		"pointLabels.color": "color",
		"ticks.color": "color"
	};
	static descriptors = { angleLines: { _fallback: "grid" } };
	constructor(e) {
		super(e), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
	}
	setDimensions() {
		let e = this._padding = X(jd(this.options) / 2), t = this.width = this.maxWidth - e.width, n = this.height = this.maxHeight - e.height;
		this.xCenter = Math.floor(this.left + t / 2 + e.left), this.yCenter = Math.floor(this.top + n / 2 + e.top), this.drawingArea = Math.floor(Math.min(t, n) / 2);
	}
	determineDataLimits() {
		let { min: e, max: t } = this.getMinMax(!1);
		this.min = R(e) && !isNaN(e) ? e : 0, this.max = R(t) && !isNaN(t) ? t : 0, this.handleTickRangeOptions();
	}
	computeTickLimit() {
		return Math.ceil(this.drawingArea / jd(this.options));
	}
	generateTickLabels(e) {
		Cd.prototype.generateTickLabels.call(this, e), this._pointLabels = this.getLabels().map((e, t) => {
			let n = V(this.options.pointLabels.callback, [e, t], this);
			return n || n === 0 ? n : "";
		}).filter((e, t) => this.chart.getDataVisibility(t));
	}
	fit() {
		let e = this.options;
		e.display && e.pointLabels.display ? Pd(this) : this.setCenterPoint(0, 0, 0, 0);
	}
	setCenterPoint(e, t, n, r) {
		this.xCenter += Math.floor((e - t) / 2), this.yCenter += Math.floor((n - r) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(e, t, n, r));
	}
	getIndexAngle(e) {
		let t = W / (this._pointLabels.length || 1), n = this.options.startAngle || 0;
		return K(e * t + Bi(n));
	}
	getDistanceFromCenterForValue(e) {
		if (F(e)) return NaN;
		let t = this.drawingArea / (this.max - this.min);
		return this.options.reverse ? (this.max - e) * t : (e - this.min) * t;
	}
	getValueForDistanceFromCenter(e) {
		if (F(e)) return NaN;
		let t = e / (this.drawingArea / (this.max - this.min));
		return this.options.reverse ? this.max - t : this.min + t;
	}
	getPointLabelContext(e) {
		let t = this._pointLabels || [];
		if (e >= 0 && e < t.length) {
			let n = t[e];
			return Kd(this.getContext(), e, n);
		}
	}
	getPointPosition(e, t, n = 0) {
		let r = this.getIndexAngle(e) - G + n;
		return {
			x: Math.cos(r) * t + this.xCenter,
			y: Math.sin(r) * t + this.yCenter,
			angle: r
		};
	}
	getPointPositionForValue(e, t) {
		return this.getPointPosition(e, this.getDistanceFromCenterForValue(t));
	}
	getBasePosition(e) {
		return this.getPointPositionForValue(e || 0, this.getBaseValue());
	}
	getPointLabelPosition(e) {
		let { left: t, top: n, right: r, bottom: i } = this._pointLabelItems[e];
		return {
			left: t,
			top: n,
			right: r,
			bottom: i
		};
	}
	drawBackground() {
		let { backgroundColor: e, grid: { circular: t } } = this.options;
		if (e) {
			let n = this.ctx;
			n.save(), n.beginPath(), Wd(this, this.getDistanceFromCenterForValue(this._endValue), t, this._pointLabels.length), n.closePath(), n.fillStyle = e, n.fill(), n.restore();
		}
	}
	drawGrid() {
		let e = this.ctx, t = this.options, { angleLines: n, grid: r, border: i } = t, a = this._pointLabels.length, o, s, c;
		if (t.pointLabels.display && Ud(this, a), r.display && this.ticks.forEach((e, t) => {
			if (t !== 0 || t === 0 && this.min < 0) {
				s = this.getDistanceFromCenterForValue(e.value);
				let n = this.getContext(t), o = r.setContext(n), c = i.setContext(n);
				Gd(this, o, s, a, c);
			}
		}), n.display) {
			for (e.save(), o = a - 1; o >= 0; o--) {
				let r = n.setContext(this.getPointLabelContext(o)), { color: i, lineWidth: a } = r;
				a && i && (e.lineWidth = a, e.strokeStyle = i, e.setLineDash(r.borderDash), e.lineDashOffset = r.borderDashOffset, s = this.getDistanceFromCenterForValue(t.reverse ? this.min : this.max), c = this.getPointPosition(o, s), e.beginPath(), e.moveTo(this.xCenter, this.yCenter), e.lineTo(c.x, c.y), e.stroke());
			}
			e.restore();
		}
	}
	drawBorder() {}
	drawLabels() {
		let e = this.ctx, t = this.options, n = t.ticks;
		if (!n.display) return;
		let r = this.getIndexAngle(0), i, a;
		e.save(), e.translate(this.xCenter, this.yCenter), e.rotate(r), e.textAlign = "center", e.textBaseline = "middle", this.ticks.forEach((r, o) => {
			if (o === 0 && this.min >= 0 && !t.reverse) return;
			let s = n.setContext(this.getContext(o)), c = Z(s.font);
			if (i = this.getDistanceFromCenterForValue(this.ticks[o].value), s.showLabelBackdrop) {
				e.font = c.string, a = e.measureText(r.label).width, e.fillStyle = s.backdropColor;
				let t = X(s.backdropPadding);
				e.fillRect(-a / 2 - t.left, -i - c.size / 2 - t.top, a + t.width, c.size + t.height);
			}
			qa(e, r.label, 0, -i, c, {
				color: s.color,
				strokeColor: s.textStrokeColor,
				strokeWidth: s.textStrokeWidth
			});
		}), e.restore();
	}
	drawTitle() {}
});
var qd = {
	millisecond: {
		common: !0,
		size: 1,
		steps: 1e3
	},
	second: {
		common: !0,
		size: 1e3,
		steps: 60
	},
	minute: {
		common: !0,
		size: 6e4,
		steps: 60
	},
	hour: {
		common: !0,
		size: 36e5,
		steps: 24
	},
	day: {
		common: !0,
		size: 864e5,
		steps: 30
	},
	week: {
		common: !1,
		size: 6048e5,
		steps: 4
	},
	month: {
		common: !0,
		size: 2628e6,
		steps: 12
	},
	quarter: {
		common: !1,
		size: 7884e6,
		steps: 4
	},
	year: {
		common: !0,
		size: 3154e7
	}
}, $ = /* #__PURE__ */ Object.keys(qd);
function Jd(e, t) {
	return e - t;
}
function Yd(e, t) {
	if (F(t)) return null;
	let n = e._adapter, { parser: r, round: i, isoWeekday: a } = e._parseOpts, o = t;
	return typeof r == "function" && (o = r(o)), R(o) || (o = typeof r == "string" ? n.parse(o, r) : n.parse(o)), o === null ? null : (i && (o = i === "week" && (Li(a) || a === !0) ? n.startOf(o, "isoWeek", a) : n.startOf(o, i)), +o);
}
function Xd(e, t, n, r) {
	let i = $.length;
	for (let a = $.indexOf(e); a < i - 1; ++a) {
		let e = qd[$[a]], i = e.steps ? e.steps : 2 ** 53 - 1;
		if (e.common && Math.ceil((n - t) / (i * e.size)) <= r) return $[a];
	}
	return $[i - 1];
}
function Zd(e, t, n, r, i) {
	for (let a = $.length - 1; a >= $.indexOf(n); a--) {
		let n = $[a];
		if (qd[n].common && e._adapter.diff(i, r, n) >= t - 1) return n;
	}
	return $[n ? $.indexOf(n) : 0];
}
function Qd(e) {
	for (let t = $.indexOf(e) + 1, n = $.length; t < n; ++t) if (qd[$[t]].common) return $[t];
}
function $d(e, t, n) {
	if (!n) e[t] = !0;
	else if (n.length) {
		let { lo: r, hi: i } = Yi(n, t), a = n[r] >= t ? n[r] : n[i];
		e[a] = !0;
	}
}
function ef(e, t, n, r) {
	let i = e._adapter, a = +i.startOf(t[0].value, r), o = t[t.length - 1].value, s, c;
	for (s = a; s <= o; s = +i.add(s, 1, r)) c = n[s], c >= 0 && (t[c].major = !0);
	return t;
}
function tf(e, t, n) {
	let r = [], i = {}, a = t.length, o, s;
	for (o = 0; o < a; ++o) s = t[o], i[s] = o, r.push({
		value: s,
		major: !1
	});
	return a === 0 || !n ? r : ef(e, r, i, n);
}
var nf = class extends Dl {
	static id = "time";
	static defaults = {
		bounds: "data",
		adapters: {},
		time: {
			parser: !1,
			unit: !1,
			round: !1,
			isoWeekday: !1,
			minUnit: "millisecond",
			displayFormats: {}
		},
		ticks: {
			source: "auto",
			callback: !1,
			major: { enabled: !1 }
		}
	};
	constructor(e) {
		super(e), this._cache = {
			data: [],
			labels: [],
			all: []
		}, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
	}
	init(e, t = {}) {
		let n = e.time ||= {}, r = this._adapter = new dc._date(e.adapters.date);
		r.init(t), hi(n.displayFormats, r.formats()), this._parseOpts = {
			parser: n.parser,
			round: n.round,
			isoWeekday: n.isoWeekday
		}, super.init(e), this._normalized = t.normalized;
	}
	parse(e, t) {
		return e === void 0 ? null : Yd(this, e);
	}
	beforeLayout() {
		super.beforeLayout(), this._cache = {
			data: [],
			labels: [],
			all: []
		};
	}
	determineDataLimits() {
		let e = this.options, t = this._adapter, n = e.time.unit || "day", { min: r, max: i, minDefined: a, maxDefined: o } = this.getUserBounds();
		function s(e) {
			!a && !isNaN(e.min) && (r = Math.min(r, e.min)), !o && !isNaN(e.max) && (i = Math.max(i, e.max));
		}
		(!a || !o) && (s(this._getLabelBounds()), (e.bounds !== "ticks" || e.ticks.source !== "labels") && s(this.getMinMax(!1))), r = R(r) && !isNaN(r) ? r : +t.startOf(Date.now(), n), i = R(i) && !isNaN(i) ? i : +t.endOf(Date.now(), n) + 1, this.min = Math.min(r, i - 1), this.max = Math.max(r + 1, i);
	}
	_getLabelBounds() {
		let e = this.getLabelTimestamps(), t = Infinity, n = -Infinity;
		return e.length && (t = e[0], n = e[e.length - 1]), {
			min: t,
			max: n
		};
	}
	buildTicks() {
		let e = this.options, t = e.time, n = e.ticks, r = n.source === "labels" ? this.getLabelTimestamps() : this._generate();
		e.bounds === "ticks" && r.length && (this.min = this._userMin || r[0], this.max = this._userMax || r[r.length - 1]);
		let i = this.min, a = this.max, o = Qi(r, i, a);
		return this._unit = t.unit || (n.autoSkip ? Xd(t.minUnit, this.min, this.max, this._getLabelCapacity(i)) : Zd(this, o.length, t.minUnit, this.min, this.max)), this._majorUnit = !n.major.enabled || this._unit === "year" ? void 0 : Qd(this._unit), this.initOffsets(r), e.reverse && o.reverse(), tf(this, o, this._majorUnit);
	}
	afterAutoSkip() {
		this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((e) => +e.value));
	}
	initOffsets(e = []) {
		let t = 0, n = 0, r, i;
		this.options.offset && e.length && (r = this.getDecimalForValue(e[0]), t = e.length === 1 ? 1 - r : (this.getDecimalForValue(e[1]) - r) / 2, i = this.getDecimalForValue(e[e.length - 1]), n = e.length === 1 ? i : (i - this.getDecimalForValue(e[e.length - 2])) / 2);
		let a = e.length < 3 ? .5 : .25;
		t = q(t, 0, a), n = q(n, 0, a), this._offsets = {
			start: t,
			end: n,
			factor: 1 / (t + 1 + n)
		};
	}
	_generate() {
		let e = this._adapter, t = this.min, n = this.max, r = this.options, i = r.time, a = i.unit || Xd(i.minUnit, t, n, this._getLabelCapacity(t)), o = B(r.ticks.stepSize, 1), s = a === "week" && i.isoWeekday, c = Li(s) || s === !0, l = {}, u = t, d, f;
		if (c && (u = +e.startOf(u, "isoWeek", s)), u = +e.startOf(u, c ? "day" : a), e.diff(n, t, a) > 1e5 * o) throw Error(t + " and " + n + " are too far apart with stepSize of " + o + " " + a);
		let p = r.ticks.source === "data" && this.getDataTimestamps();
		for (d = u, f = 0; d < n; d = +e.add(d, o, a), f++) $d(l, d, p);
		return (d === n || r.bounds === "ticks" || f === 1) && $d(l, d, p), Object.keys(l).sort(Jd).map((e) => +e);
	}
	getLabelForValue(e) {
		let t = this._adapter, n = this.options.time;
		return n.tooltipFormat ? t.format(e, n.tooltipFormat) : t.format(e, n.displayFormats.datetime);
	}
	format(e, t) {
		let n = this.options.time.displayFormats, r = this._unit, i = t || n[r];
		return this._adapter.format(e, i);
	}
	_tickFormatFunction(e, t, n, r) {
		let i = this.options, a = i.ticks.callback;
		if (a) return V(a, [
			e,
			t,
			n
		], this);
		let o = i.time.displayFormats, s = this._unit, c = this._majorUnit, l = s && o[s], u = c && o[c], d = n[t], f = c && u && d && d.major;
		return this._adapter.format(e, r || (f ? u : l));
	}
	generateTickLabels(e) {
		let t, n, r;
		for (t = 0, n = e.length; t < n; ++t) r = e[t], r.label = this._tickFormatFunction(r.value, t, e);
	}
	getDecimalForValue(e) {
		return e === null ? NaN : (e - this.min) / (this.max - this.min);
	}
	getPixelForValue(e) {
		let t = this._offsets, n = this.getDecimalForValue(e);
		return this.getPixelForDecimal((t.start + n) * t.factor);
	}
	getValueForPixel(e) {
		let t = this._offsets, n = this.getDecimalForPixel(e) / t.factor - t.end;
		return this.min + n * (this.max - this.min);
	}
	_getLabelSize(e) {
		let t = this.options.ticks, n = this.ctx.measureText(e).width, r = Bi(this.isHorizontal() ? t.maxRotation : t.minRotation), i = Math.cos(r), a = Math.sin(r), o = this._resolveTickFontOptions(0).size;
		return {
			w: n * i + o * a,
			h: n * a + o * i
		};
	}
	_getLabelCapacity(e) {
		let t = this.options.time, n = t.displayFormats, r = n[t.unit] || n.millisecond, i = this._tickFormatFunction(e, 0, tf(this, [e], this._majorUnit), r), a = this._getLabelSize(i), o = Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) - 1;
		return o > 0 ? o : 1;
	}
	getDataTimestamps() {
		let e = this._cache.data || [], t, n;
		if (e.length) return e;
		let r = this.getMatchingVisibleMetas();
		if (this._normalized && r.length) return this._cache.data = r[0].controller.getAllParsedValues(this);
		for (t = 0, n = r.length; t < n; ++t) e = e.concat(r[t].controller.getAllParsedValues(this));
		return this._cache.data = this.normalize(e);
	}
	getLabelTimestamps() {
		let e = this._cache.labels || [], t, n;
		if (e.length) return e;
		let r = this.getLabels();
		for (t = 0, n = r.length; t < n; ++t) e.push(Yd(this, r[t]));
		return this._cache.labels = this._normalized ? e : this.normalize(e);
	}
	normalize(e) {
		return na(e.sort(Jd));
	}
};
function rf(e, t, n) {
	let r = 0, i = e.length - 1, a, o, s, c;
	n ? (t >= e[r].pos && t <= e[i].pos && ({lo: r, hi: i} = Xi(e, "pos", t)), {pos: a, time: s} = e[r], {pos: o, time: c} = e[i]) : (t >= e[r].time && t <= e[i].time && ({lo: r, hi: i} = Xi(e, "time", t)), {time: a, pos: s} = e[r], {time: o, pos: c} = e[i]);
	let l = o - a;
	return l ? s + (c - s) * (t - a) / l : s;
}
//#endregion
//#region src/chart.ts
(class extends nf {
	static id = "timeseries";
	static defaults = nf.defaults;
	constructor(e) {
		super(e), this._table = [], this._minPos = void 0, this._tableRange = void 0;
	}
	initOffsets() {
		let e = this._getTimestampsForTable(), t = this._table = this.buildLookupTable(e);
		this._minPos = rf(t, this.min), this._tableRange = rf(t, this.max) - this._minPos, super.initOffsets(e);
	}
	buildLookupTable(e) {
		let { min: t, max: n } = this, r = [], i = [], a, o, s, c, l;
		for (a = 0, o = e.length; a < o; ++a) c = e[a], c >= t && c <= n && r.push(c);
		if (r.length < 2) return [{
			time: t,
			pos: 0
		}, {
			time: n,
			pos: 1
		}];
		for (a = 0, o = r.length; a < o; ++a) l = r[a + 1], s = r[a - 1], c = r[a], Math.round((l + s) / 2) !== c && i.push({
			time: c,
			pos: a / (o - 1)
		});
		return i;
	}
	_generate() {
		let e = this.min, t = this.max, n = super.getDataTimestamps();
		return (!n.includes(e) || !n.length) && n.splice(0, 0, e), (!n.includes(t) || n.length === 1) && n.push(t), n.sort((e, t) => e - t);
	}
	_getTimestampsForTable() {
		let e = this._cache.all || [];
		if (e.length) return e;
		let t = this.getDataTimestamps(), n = this.getLabelTimestamps();
		return e = t.length && n.length ? this.normalize(t.concat(n)) : t.length ? t : n, e = this._cache.all = e, e;
	}
	getDecimalForValue(e) {
		return (rf(this._table, e) - this._minPos) / this._tableRange;
	}
	getValueForPixel(e) {
		let t = this._offsets, n = this.getDecimalForPixel(e) / t.factor - t.end;
		return rf(this._table, n * this._tableRange + this._minPos, !0);
	}
}), hu.register(cc, Vu, lc, ku, ju, bd, wd, hd, Xu);
var af = [
	"#002d9c",
	"#fa4d56",
	"#005d5d",
	"#9f1853",
	"#491d8b",
	"#8a3800",
	"#198038",
	"#b28600",
	"#a56eff",
	"#1192e8"
];
function of(e, t, n) {
	let r = new Set(t.partial), i = n.mode === "monthly" && (n.metric === "activities" || n.metric === "commits" || n.metric === "github-activities");
	return new hu(e, {
		type: n.mode === "monthly" ? "bar" : "line",
		data: {
			labels: t.months,
			datasets: t.series.map((e) => {
				let t = e.key === "combined" ? "#172554" : e.key === "issues" ? "#0072b2" : e.key === "prs" ? "#d55e00" : af[lr.indexOf(e.key)];
				return {
					type: i && e.key === "combined" ? "line" : void 0,
					stack: i ? e.key === "combined" ? "total" : "activity-types" : void 0,
					label: e.label,
					data: e.values,
					borderColor: t,
					backgroundColor: t,
					borderWidth: e.key === "combined" ? 3 : 2,
					borderDash: e.key === "combined" && n.metric !== "total-contributors" ? [5, 4] : [],
					pointRadius: 0,
					pointHoverRadius: 5,
					spanGaps: !1,
					tension: 0
				};
			})
		},
		options: {
			responsive: !0,
			maintainAspectRatio: !1,
			animation: !1,
			interaction: {
				mode: "index",
				intersect: !1
			},
			plugins: {
				legend: {
					position: "bottom",
					labels: {
						boxWidth: 16,
						boxHeight: 16,
						padding: 16
					},
					onClick: () => {}
				},
				tooltip: { callbacks: { title: (e) => {
					let t = e[0]?.label || "";
					return t + (r.has(t) ? " · partial month" : "");
				} } }
			},
			scales: {
				x: {
					stacked: i,
					title: {
						display: !0,
						text: "Month (UTC)"
					},
					grid: { display: !1 },
					ticks: {
						maxRotation: 45,
						autoSkip: !0,
						maxTicksLimit: 18
					}
				},
				y: {
					stacked: i,
					beginAtZero: !0,
					title: {
						display: !0,
						text: n.metric === "balance" ? "Net change since start" : n.metric === "commits" ? "Commits" : n.metric === "activities" || n.metric === "github-activities" ? "Activities" : "Unique contributors"
					},
					ticks: { precision: 0 }
				}
			}
		}
	});
}
//#endregion
//#region src/viewer.ts
var sf = {
	commits: "Commits",
	"github-activities": "GitHub activity",
	"contributors-by-type": "Contributors by type",
	"total-contributors": "Total contributors",
	balance: "Issue / PR balance"
};
function cf(e, t) {
	let n = document.createElement("style");
	n.textContent = f, e.append(n);
	let r = document.createElement("div");
	r.className = "viewer", e.append(r), r.innerHTML = `
  <main>
    <p id="configuration-error" class="error card" role="alert" hidden></p>
    <section class="loader card" aria-labelledby="load-heading">
      <div><h2 id="load-heading">Load your summary</h2><p>Explore monthly GitHub activity across a selected set of repositories.</p></div>
      <div class="load-options">
        <label class="file-button">Choose summary JSON<input id="files" type="file" accept=".json,application/json" aria-label="Choose summary JSON"></label>
        <span class="or">or</span>
        <form id="summary-form"><label for="summary">Hosted summary URL</label><div class="url-row"><input id="summary" type="text" placeholder="https://example.org/reports/summary.json" required><button id="load-url" type="submit">Load URL</button></div></form>
      </div>
      <p id="load-status" role="status" aria-live="polite">Local files are processed in your browser.</p>
      <p id="load-error" class="error" role="alert" hidden></p>
    </section>
    <section id="empty" class="empty card"><div class="empty-icon" aria-hidden="true">▥</div><h2>A clearer view of repository activity</h2><p>Choose a summary file or load a hosted summary to compare contributions and discover how your contributor community grows.</p><div class="empty-tags"><span>Monthly activity</span><span>Cumulative trends</span><span>Unique contributors</span></div></section>
    <section id="dashboard" hidden>
      <div class="repository-heading"><div><p class="eyebrow">REPOSITORY HISTORY</p><h2 id="repository-name"></h2></div><p id="report-summary"></p></div>
      <div class="workspace">
        <aside class="controls card" aria-label="Chart controls">
          <fieldset id="month-controls"><legend>Month range</legend><div class="month-range-values"><label for="start">From<output id="start-label" for="start"></output></label><label for="end">Through<output id="end-label" for="end"></output></label></div><div id="month-range" class="month-range"><div class="month-range-track" aria-hidden="true"><span id="month-selection"></span></div><input id="start" type="range" min="0" max="0" step="1" value="0"><input id="end" type="range" min="0" max="0" step="1" value="0"></div><button id="reset-range" class="text-button" type="button">All available months</button></fieldset>
          <fieldset><legend><label for="metric">Metric</label></legend><select id="metric"></select></fieldset>
          <fieldset><legend>Aggregation</legend><div class="segmented"><label><input type="radio" name="mode" value="monthly" checked><span>Monthly</span></label><label><input type="radio" name="mode" value="cumulative"><span>Cumulative</span></label></div></fieldset>
          <fieldset id="activity-types"><legend>Activity types</legend><div class="selection-actions"><button id="select-all" class="text-button" type="button">Select all</button><button id="select-none" class="text-button" type="button">Clear</button></div><div class="type-list">${lr.map((e, t) => `<label><input type="checkbox" name="activity" value="${e}" checked><span class="swatch" style="background:${af[t]}"></span>${cr[e]}</label>`).join("")}</div><label class="combined"><input id="combined" type="checkbox">Show combined total</label></fieldset>
          <fieldset id="balance-types" hidden><legend>Show balance for</legend><label><input type="checkbox" name="balance-type" value="issues" checked>Issues</label><label><input type="checkbox" name="balance-type" value="prs" checked>Pull requests</label></fieldset>
          <fieldset id="classifications" hidden><legend id="classification-legend">Contributor identities</legend><label><input type="checkbox" name="classification" value="human" checked>Human GitHub accounts</label><label><input type="checkbox" name="classification" value="unlinked_git" checked><span id="unknown-actors-label">Unlinked Git identities</span></label><label><input type="checkbox" name="classification" value="bot">Known bots</label></fieldset>
        </aside>
        <div class="results">
          <section class="chart-card card" aria-labelledby="chart-title"><div class="chart-heading"><div><p class="eyebrow" id="chart-subtitle"></p><h2 id="chart-title"></h2></div><div class="chart-downloads"><button id="download-chart" class="text-button" type="button">Download PNG</button><button id="download-data" class="text-button" type="button">Download Data (CSV)</button></div></div><p id="chart-note" class="chart-note"></p><p id="warnings" class="warning" role="status" hidden></p><p id="no-series" class="warning" hidden>Select at least one activity type to draw a chart.</p><div class="chart-wrap"><canvas id="chart" role="img" aria-label="Repository activity chart. Exact values are available through Download Data (CSV)."></canvas></div></section>
          <details id="repository-details" class="card coverage-card" hidden><summary>Included repositories</summary><ul id="repository-list"></ul></details><details class="card coverage-card"><summary>About these counts and report coverage</summary><p>GitHub activity counts follow the actor filters, excluding known bots by default. Events with missing performers are counted under Unknown actors. Commit counts include all recorded commits. Contributor counts include only credited identities matching your filters. Contextual subject authors do not receive credit.</p><p>Unlinked Git identities are estimates and may represent the same person as another identity. A known account is tracked by its stable actor key, even if its login changes. Cumulative contributors are a union of identities, not a sum of monthly totals.</p><p>Missing reports are gaps, not zero activity. Cumulative charts resume from the last observed total and cover loaded months only. Partial months contain data only through their collection snapshot.</p><ul id="coverage-list"></ul></details>
        </div>
      </div>
    </section>
  </main>
`;
	function i(t) {
		return e.getElementById(t);
	}
	let a = i("files"), o = i("start"), s = i("end"), c = {
		metric: "github-activities",
		mode: "monthly",
		types: [...lr],
		classifications: ["human", "unlinked_git"],
		combined: !1,
		start: "",
		end: ""
	}, l = [], u = [], d, p = [], m = 0, h, g, _;
	function v(e, t) {
		let n = i(e);
		n.textContent = t, n.hidden = !t;
	}
	function y(e) {
		let n = e?.trim().split(/\s+/).filter(Boolean) ?? [], r = n.filter((e) => !Object.hasOwn(sf, e)), a = n.length ? r.length ? `Unknown metrics: ${r.join(", ")}. Supported metrics: ${Object.keys(sf).join(", ")}.` : "" : "Set the \"metrics\" attribute to explicitly enable at least one metric.";
		l = a ? [] : [...new Set(n)];
		let o = i("metric"), s = o.value;
		o.replaceChildren(...l.map((e) => new Option(sf[e], e))), l.includes(s) && (o.value = s), v("configuration-error", a), T(), a && t("repo-history-error", { message: a });
	}
	function b(e) {
		d = e, u = e.months;
		let t = u[0].metadata.month, n = u.at(-1).metadata.month;
		p = [];
		for (let e = t; e <= n && (p.push(e), e !== n); e = fr(e));
		for (let e of [o, s]) e.max = String(p.length - 1), e.disabled = p.length === 1;
		o.value = "0", s.value = String(p.length - 1), i("empty").hidden = !0, i("dashboard").hidden = !1, i("repository-name").textContent = d.display_name;
		let r = i("repository-details");
		r.hidden = d.repositories.length < 2, i("repository-list").replaceChildren(...d.repositories.map((e) => {
			let t = document.createElement("li"), n = document.createElement("a");
			return n.textContent = e.full_name, n.href = e.url, t.append(n), t;
		})), i("report-summary").textContent = `${u.length} monthly report${u.length === 1 ? "" : "s"} · ${t} — ${n}`, T();
	}
	function x() {
		m++, h && (h.abort(), v("load-status", u.length ? "The previous dataset is still available." : "Loading cancelled.")), h = void 0, a.disabled = !1, i("load-url").disabled = !1;
	}
	async function S(e) {
		x();
		let n = m;
		h = new AbortController(), a.disabled = !0, i("load-url").disabled = !0, v("load-error", ""), v("load-status", "Loading and validating summary…");
		try {
			let r = await e(h.signal);
			if (n !== m) return;
			b(r), v("load-status", ""), t("repo-history-load", {
				display_name: d.display_name,
				repositories: d.repositories.map(({ node_id: e, full_name: t, url: n }) => ({
					node_id: e,
					full_name: t,
					url: n
				})),
				months: u.map((e) => e.metadata.month)
			});
		} catch (e) {
			if (n !== m) return;
			let r = e instanceof Error ? e.message : "Unable to load summary.";
			throw v("load-error", r), v("load-status", u.length ? "The previous dataset is still available." : "Unable to load summary."), t("repo-history-error", { message: r }), e;
		} finally {
			n === m && (h = void 0, a.disabled = !1, a.value = "", i("load-url").disabled = !1);
		}
	}
	function C(t) {
		return i("summary").value = t, S((n) => mr(t, e.host.baseURI, fetch, n));
	}
	a.addEventListener("change", () => {
		let e = a.files?.[0];
		e && S(async () => pr({
			name: e.name,
			text: await e.text()
		})).catch(() => {});
	}), i("summary-form").addEventListener("submit", (e) => {
		e.preventDefault(), C(i("summary").value.trim()).catch(() => {});
	});
	function w(t) {
		return [...e.querySelectorAll(`input[name="${t}"]:checked`)].map((e) => e.value);
	}
	function T() {
		if (i("empty").hidden = !l.length || u.length > 0, i("dashboard").hidden = !l.length || !u.length, !l.length || !u.length) {
			_?.destroy(), _ = void 0, g = void 0;
			return;
		}
		c.metric = i("metric").value, c.mode = w("mode")[0], c.types = w("activity"), c.classifications = w("classification"), c.combined = i("combined").checked;
		let t = c.metric === "total-contributors", n = c.metric === "balance", r = c.metric === "contributors-by-type" || t;
		c.balanceTypes = w("balance-type");
		let a = e.querySelector("input[name=\"mode\"][value=\"monthly\"]");
		a.disabled = n, n && (e.querySelector("input[name=\"mode\"][value=\"cumulative\"]").checked = !0, c.mode = "cumulative");
		let f = c.metric === "github-activities";
		i("classifications").hidden = !(r || f), i("classification-legend").textContent = f ? "Activity actors" : "Contributor identities", i("unknown-actors-label").textContent = f ? "Unknown actors" : "Unlinked Git identities", i("balance-types").hidden = !n, i("activity-types").hidden = t || n || c.metric === "commits";
		let m = e.querySelector("input[name=\"activity\"][value=\"commit\"]");
		m.closest("label").hidden = c.metric === "github-activities", c.start = p[o.valueAsNumber], c.end = p[s.valueAsNumber];
		for (let [e, t, n] of [[
			o,
			c.start,
			"start-label"
		], [
			s,
			c.end,
			"end-label"
		]]) {
			let [r, a] = t.split("-"), o = new Intl.DateTimeFormat("en", {
				month: "short",
				year: "numeric",
				timeZone: "UTC"
			}).format(new Date(Date.UTC(Number(r), Number(a) - 1)));
			i(n).textContent = o, e.setAttribute("aria-valuetext", o);
		}
		let h = p.length - 1, y = i("month-selection");
		y.style.left = `${h ? o.valueAsNumber / h * 100 : 0}%`, y.style.right = `${h ? 100 - s.valueAsNumber / h * 100 : 0}%`, o.style.zIndex = o.valueAsNumber === h ? "4" : "2";
		let b = hr(d, c);
		g = b;
		let x = c.mode === "cumulative", S = {
			activities: "activity",
			commits: "commits",
			"github-activities": "GitHub activity",
			"contributors-by-type": "contributors by type",
			"total-contributors": "contributors",
			balance: "issue / PR balance"
		}[c.metric];
		i("chart-title").textContent = `${x ? "Cumulative" : "Monthly"} ${S}`, i("chart-subtitle").textContent = n ? "OPENING AND CLOSING" : r ? "COMMUNITY PARTICIPATION" : "CONTRIBUTION VOLUME", i("chart-note").textContent = n ? "Net change from zero at the selected start month, not the repository’s total open items. Issues: opened + reopened − closed. PRs: opened − merged; reports omit PR closes without merging and PR reopens. Negative values are possible." : t ? `${x ? "Unique credited identities across all activity types since the selected start month." : "Unique credited identities active across all activity types in each month."} This includes everyone from commits to comments. Each identity counts once, even when contributing in multiple types.` : r ? `${x ? "Unique credited identities since the selected start month." : "Side-by-side bars show unique credited identities per activity type in each month."} Combined counts deduplicate across selected types.` : c.metric === "commits" ? `${x ? "Running commit totals starting at the selected month." : "Recorded commits in each month."} Each commit counts once, including co-authored commits.` : `${x ? "Running event totals starting at the selected month." : "Stacked bars show recorded events in each month across selected types."} GitHub activity excludes commits and follows the actor filters.`, i("no-series").textContent = n ? "Select Issues, Pull requests, or both to draw a chart." : "Select at least one activity type to draw a chart.";
		let C = [];
		b.missing.length && C.push(`Missing reports: ${b.missing.join(", ")}. ${x ? "Cumulative totals cover loaded months only." : "Gaps indicate unknown activity."}`);
		for (let e of b.partial) {
			let t = u.find((t) => t.metadata.month === e).source_reports;
			for (let { metadata: e } of t.filter((e) => e.metadata.is_partial)) {
				let t = e.coverage.as_of.slice(0, 10), n = d.repositories.length > 1 ? `${e.repository.full_name}: ` : "";
				C.push(`${n}Partial month: ${e.month_start.slice(0, 10)} — ${t} (UTC).`);
			}
		}
		(r || f) && !c.classifications.length && C.push("No identity categories selected; counts are zero for loaded months."), v("warnings", C.join(" ")), i("no-series").hidden = b.series.length > 0, _?.destroy(), _ = of(i("chart"), b, c);
		for (let e of ["download-chart", "download-data"]) i(e).disabled = b.series.length === 0;
		let T = [...new Set(u.filter((e) => e.metadata.month >= c.start && e.metadata.month <= c.end).flatMap((e) => e.source_reports.flatMap(({ metadata: e }) => e.coverage.limitations.map((t) => d.repositories.length > 1 ? `${e.repository.full_name}: ${t}` : t))))];
		i("coverage-list").replaceChildren(...T.map((e) => {
			let t = document.createElement("li");
			return t.textContent = e, t;
		}));
	}
	function E(e, t) {
		let n = d.display_name.replace(/[^a-zA-Z0-9_-]/g, "-"), r = document.createElement("a");
		r.download = `${n}-${c.metric}-${c.mode}-${c.start}-to-${c.end}.${t}`, r.href = e, r.click();
	}
	i("download-chart").addEventListener("click", () => {
		_ && u.length && E(_.toBase64Image("image/png"), "png");
	}), i("download-data").addEventListener("click", () => {
		if (!g || !u.length) return;
		let e = URL.createObjectURL(new Blob([gr(g)], { type: "text/csv;charset=utf-8" }));
		E(e, "csv"), setTimeout(() => URL.revokeObjectURL(e), 1e3);
	});
	function D(e) {
		o.valueAsNumber > s.valueAsNumber && (e.value = e === o ? s.value : o.value), T();
	}
	for (let e of [o, s]) e.addEventListener("input", () => D(e)), e.addEventListener("change", () => D(e));
	i("month-range").addEventListener("click", (t) => {
		if (t.target === o || t.target === s || p.length < 2) return;
		let n = e.querySelector(".month-range-track").getBoundingClientRect(), r = Math.round(Math.max(0, Math.min(1, (t.clientX - n.left) / n.width)) * (p.length - 1)), i = Math.abs(r - o.valueAsNumber) <= Math.abs(r - s.valueAsNumber) ? o : s;
		i.value = String(r), i.focus(), D(i);
	}), e.querySelector(".controls").addEventListener("change", (e) => {
		e.target !== o && e.target !== s && T();
	}), i("reset-range").addEventListener("click", () => {
		o.value = "0", s.value = String(p.length - 1), T();
	});
	for (let [t, n] of [["select-all", !0], ["select-none", !1]]) i(t).addEventListener("click", () => {
		e.querySelectorAll("input[name=\"activity\"]").forEach((e) => {
			e.checked = n;
		}), T();
	});
	return {
		loadUrl: C,
		loadSource: (e) => S(async () => pr(e)),
		cancel: x,
		setMetrics: y,
		disconnect() {
			x(), _?.destroy(), _ = void 0;
		}
	};
}
//#endregion
//#region src/component.ts
var lf = globalThis.HTMLElement ?? class {}, uf = class extends lf {
	static observedAttributes = ["summary", "metrics"];
	viewer;
	connectedCallback() {
		if (!this.viewer) {
			let e = this.attachShadow({ mode: "open" });
			this.viewer = cf(e, (e, t) => {
				this.dispatchEvent(new CustomEvent(e, {
					detail: t,
					bubbles: !0,
					composed: !0
				}));
			});
		}
		this.viewer.setMetrics(this.getAttribute("metrics"));
		let e = this.getAttribute("summary");
		e?.trim() && this.viewer.loadUrl(e).catch(() => {});
	}
	disconnectedCallback() {
		this.viewer?.disconnect();
	}
	attributeChangedCallback(e, t, n) {
		t !== n && this.isConnected && this.viewer && (e === "metrics" ? this.viewer.setMetrics(n) : n?.trim() ? this.viewer.loadUrl(n).catch(() => {}) : this.viewer.cancel());
	}
	loadSummary(e) {
		return !this.isConnected || !this.viewer ? Promise.reject(/* @__PURE__ */ Error("Connect the viewer before loading a summary.")) : this.viewer.loadUrl(e);
	}
	loadSummarySource(e) {
		return !this.isConnected || !this.viewer ? Promise.reject(/* @__PURE__ */ Error("Connect the viewer before loading a summary.")) : this.viewer.loadSource(e);
	}
};
function df() {
	typeof customElements < "u" && !customElements.get("repo-history-viz") && customElements.define("repo-history-viz", uf);
}
//#endregion
//#region src/register.ts
df();
//#endregion
