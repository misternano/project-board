function aload(t) {
    "use strict";
    var e = "data-aload";
    return t = t || window.document.querySelectorAll("[" + e + "]"), void 0 === t.length && (t = [t]), [].forEach.call(t, function(t) {
        t["LINK" !== t.tagName ? "src" : "href"] = t.getAttribute(e), t.removeAttribute(e)
    }), t
}