import { ref as b, openBlock as n, createElementBlock as i, Fragment as h, createElementVNode as e, toDisplayString as p, pushScopeId as f, popScopeId as _, createTextVNode as a, defineComponent as w, computed as u, normalizeStyle as y, renderSlot as V, createVNode as d, unref as L, withCtx as I, createApp as S } from "vue";
const H = "/vite.svg", C = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e", g = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, c] of o)
    r[s] = c;
  return r;
}, l = (t) => (f("data-v-4b8d1567"), t = t(), _(), t), $ = { class: "card" }, B = /* @__PURE__ */ l(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ a(" Edit "),
  /* @__PURE__ */ e("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ a(" to test HMR ")
], -1)), E = /* @__PURE__ */ l(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ a(" Check out "),
  /* @__PURE__ */ e("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ a(", the official Vue + Vite starter ")
], -1)), M = /* @__PURE__ */ l(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ a(" Install "),
  /* @__PURE__ */ e("a", {
    href: "https://github.com/vuejs/language-tools",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ a(" in your IDE for a better DX ")
], -1)), j = /* @__PURE__ */ l(() => /* @__PURE__ */ e("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), z = {
  __name: "HelloWorld",
  props: {
    msg: String
  },
  setup(t) {
    const o = b(0);
    return (r, s) => (n(), i(h, null, [
      e("h1", null, p(t.msg), 1),
      e("div", $, [
        e("button", {
          type: "button",
          onClick: s[0] || (s[0] = (c) => o.value++)
        }, "count is " + p(o.value), 1),
        B
      ]),
      E,
      M,
      j
    ], 64));
  }
}, A = /* @__PURE__ */ g(z, [["__scopeId", "data-v-4b8d1567"]]), D = { class: "x-button" }, N = /* @__PURE__ */ w({
  __name: "index",
  props: {
    size: { default: "normal" },
    type: { default: "default" }
  },
  emits: ["clickTo"],
  setup(t, { emit: o }) {
    const r = o, s = t, c = () => {
      r("clickTo");
    }, v = u(() => {
      switch (s.type) {
        case "primary":
          return {
            color: "#fff",
            background: "#409eff"
          };
        case "success":
          return {
            color: "#fff",
            background: "#40ff89"
          };
        case "warnning":
          return {
            color: "#fff",
            background: "#fcff40"
          };
        case "error":
          return {
            color: "#fff",
            background: "#ff6340"
          };
        default:
          return {
            color: "#333",
            background: "#fff",
            border: "1px solid #e7e7e7"
          };
      }
    }), k = u(() => {
      switch (s.size) {
        case "large":
          return {
            height: "40px",
            "line-height": "40px"
          };
        case "small":
          return {
            height: "20px",
            "line-height": "20px"
          };
        default:
          return {
            height: "30px",
            "line-height": "30px"
          };
      }
    });
    return (x, X) => (n(), i("div", D, [
      e("button", {
        style: y([v.value, k.value]),
        onClick: c
      }, [
        V(x.$slots, "default", {}, () => [
          a("default")
        ], !0)
      ], 4)
    ]));
  }
}), T = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, c] of o)
    r[s] = c;
  return r;
}, W = /* @__PURE__ */ T(N, [["__scopeId", "data-v-614596f1"]]), m = (t) => (f("data-v-9a6012ac"), t = t(), _(), t), Z = /* @__PURE__ */ m(() => /* @__PURE__ */ e("a", {
  href: "https://vitejs.dev",
  target: "_blank"
}, [
  /* @__PURE__ */ e("img", {
    src: H,
    class: "logo",
    alt: "Vite logo"
  })
], -1)), O = /* @__PURE__ */ m(() => /* @__PURE__ */ e("a", {
  href: "https://vuejs.org/",
  target: "_blank"
}, [
  /* @__PURE__ */ e("img", {
    src: C,
    class: "logo vue",
    alt: "Vue logo"
  })
], -1)), R = {
  __name: "App",
  setup(t) {
    return (o, r) => (n(), i(h, null, [
      e("div", null, [
        Z,
        d(L(W), {
          size: "large",
          type: "primary"
        }, {
          default: I(() => [
            a("123")
          ]),
          _: 1
        }),
        O
      ]),
      d(A, { msg: "Vite + Vue" })
    ], 64));
  }
}, q = /* @__PURE__ */ g(R, [["__scopeId", "data-v-9a6012ac"]]), F = S(q);
F.mount("#app");
