function() {
    "use strict";
    fn.meanmenu = function(e) {
        let n = {
            meanMenuTarget: (this),
            meanMenuContainer: ".luvion-responsive-menu",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span ></span><span ></span><span ></span>",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        e = extend(n, e);
        let a = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function() {
            let n = e.meanMenuTarget,
                t = e.meanMenuContainer,
                r = e.meanMenuClose,
                i = e.meanMenuCloseSize,
                s = e.meanMenuOpen,
                u = e.meanRevealPosition,
                m = e.meanRevealPositionDistance,
                l = e.meanRevealColour,
                o = e.meanScreenWidth,
                c = e.meanNavPush,
                v = ".meanmenu-reveal",
                h = e.meanShowChildren,
                d = e.meanExpandableChildren,
                y = e.meanExpand,
                j = e.meanContract,
                Q = e.meanRemoveAttrs,
                f = e.onePage,
                g = e.meanDisplay,
                p = e.removeElements,
                C = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (C = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && ("html").css("overflow-y", "scroll");
            let w = "",
                x = function() {
                    if ("center" === u) {
                        let e = window.innerWidth || document.documentElement.clientWidth,
                            n = e / 2 - 22 + "px";
                        w = "left:" + n + ";right:auto;", C ? (".meanmenu-reveal").animate({
                            left: n
                        }) : (".meanmenu-reveal").css("left", n)
                    }
                },
                A = !1,
                E = !1;
            "right" === u && (w = "right:" + m + ";left:auto;"), "left" === u && (w = "left:" + m + ";right:auto;"), x();
            let M = "",
                P = function() {
                    M.innerHTML = (M.is(".meanmenu-reveal.meanclose") ? r : s)
                },
                W = function() {
                    (".mean-bar,.mean-push").remove(), (t).classList.remove("mean-container"), (n).css("display", g), A = !1, E = !1, (p).classList.remove("mean-remove")
                },
                b = function() {
                    let e = "background:" + l + ";color:" + l + ";" + w;
                    if (o >= a) {
                        (p).classList.add("mean-remove"), E = !0, (t).classList.add("mean-container"), (".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                        let r = (n).innerHTML;
                        (".mean-nav").innerHTML = r, Q && ("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
                            (this).is(".mean-remove") ? (this).attr("class", "mean-remove") : (this).removeAttr("class"), (this).removeAttr("id")
                        }), (n).before('<div class="mean-push" ></div>'), (".mean-push").css("margin-top", c), (n).style.display = "none", (".meanmenu-reveal").style.display = "", (v).innerHTML = s, M = (v), (".mean-nav ul").style.display = "none", h ? d ? ((".mean-nav ul ul").each(function() {
                            (this).children().length && (this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + "</a>")
                        }), (".mean-expand").on("click", function(e) {
                            e.preventDefault(), (this).classList.contains("mean-clicked") ? ((this).innerText = y, (this).prev("ul").slideUp(300, function() {})) : ((this).innerText = j, (this).prev("ul").slideDown(300, function() {})), (this).classList.toggle("mean-clicked")
                        })) : (".mean-nav ul ul").style.display = "" : (".mean-nav ul ul").style.display = "none", (".mean-nav ul li").last().classList.add("mean-last"), M.classList.remove("meanclose"), (M).click(function(e) {
                            e.preventDefault(), A === !1 ? (M.css("text-align", "center"), M.css("text-indent", "0"), M.css("font-size", i), (".mean-nav ul:first").slideDown(), A = !0) : ((".mean-nav ul:first").slideUp(), A = !1), M.classList.toggle("meanclose"), P(), (p).classList.add("mean-remove")
                        }), f && (".mean-nav ul > li > a:first-child").on("click", function() {
                            (".mean-nav ul:first").slideUp(), A = !1, (M).classList.toggle("meanclose").innerHTML = s
                        })
                    } else W()
                };
            C || (window).resize(function() {
                alert('resixe')
                a = window.innerWidth || document.documentElement.clientWidth, a > o, W(), o >= a ? (b(), x()) : W()
            }), (window).resize(function() {
                a = window.innerWidth || document.documentElement.clientWidth, C ? (x(), o >= a ? E === !1 && b() : W()) : (W(), o >= a && (b(), x()))
            }), b()
        })
    }
}();