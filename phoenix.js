! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("uas-adclient", [], e) : "object" == typeof exports ? exports["uas-adclient"] = e() : t["uas-adclient"] = e()
}("undefined" != typeof self ? self : this, function() {
    return function(t) {
        function e(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function(t, n, o) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 2)
    }([function(t, e, n) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            r = !1,
            i = !1,
            a = Object.prototype.toString;
        e.debugLogIsEnabled = r, e.visualDebugLogIsEnabled = i;
        var s = function(t, e) {
            return a.call(t) === "[object " + e + "]"
        };
        e.isA = s;
        var c = function(t) {
            return s(t, "Function")
        };
        e.isFunction = c;
        var u = function(t) {
            return s(t, "String")
        };
        e.isString = u;
        var l = function(t) {
            return s(t, "Array")
        };
        e.isArray = l;
        var d = function(t) {
            return s(t, "Number")
        };
        e.isNumber = d;
        var p = function(t) {
            return "object" === (void 0 === t ? "undefined" : o(t)) && null !== t
        };
        e.isObject = p;
        var f = function(t, e) {
            return !!t.hasOwnProperty && t.hasOwnProperty(e)
        };
        e.isOwnProperty = f;
        var g = function(t) {
            return void 0 === t
        };
        e.isUndefined = g;
        var h = function() {
            r = !0
        };
        e.enableDebugLog = h;
        var m = function() {
            return r
        };
        e.isDebugLogEnabled = m;
        var y = function() {
            r = !0, i = !0
        };
        e.enableVisualDebugLog = y;
        var v = function(t) {
            r && console && this.isFunction(console.log) && (this.isString(t) ? console.log((new Date).getTime() + " : [OpenWrap] : " + t) : console.log(t))
        };
        e.log = v;
        var w = function(t, e) {
            if (p(t) && c(e))
                for (var n in t) f(t, n) && e(n, t[n])
        };
        e.forEachOnObject = w;
        var b = function(t, e) {
            if (l(t) && c(e))
                for (var n = 0, o = t.length; n < o; n++) e(n, t[n])
        };
        e.forEachOnArray = b;
        var C = function(t, e) {
            return t.document.createElement(e)
        };
        e.createDocElement = C;
        var P = function t(e) {
            try {
                if (e.parent.document != e.document) return t(e.parent)
            } catch (t) {}
            return e
        };
        e.getTopFrameOfSameDomain = P;
        var S = function(t) {
            var e, n = {};
            n.pageURL = "", n.refURL = "", n.protocol = "http://", n.secure = 0, n.isInIframe = t.self !== t.top;
            try {
                e = P(t), n.refURL = (e.refurl || e.document.referrer || "").substr(0, 512), n.pageURL = (e !== window.top && "" != e.document.referrer ? e.document.referrer : e.location.href).substr(0, 512), n.protocol = ("https:" === e.location.protocol ? (n.secure = 1, "https") : "http") + "://"
            } catch (t) {}
            return n
        };
        e.getMetaInfo = S;
        var D = function(t) {
            var e = C(window, "iframe");
            return e.id = t.id, t.src && (e.src = t.src), e.height = t.height, e.width = t.width, e.scrolling = t.scrolling, e.frameborder = t.frameborder, e.style.cssText = t.cssText, e
        };
        e.createFriendlyIframe = D
    }, function(t, e, n) {
        "use strict";
        e.SLOT_STATUS = {
            CREATED: 0,
            PARTNERS_CALLED: 1,
            TARGETING_ADDED: 2,
            DISPLAYED: 3
        }, e.SERVER_PATH = "ae.pubmatic.com/ad?"
    }, function(t, e, n) {
        "use strict";
        (0, n(3).init)(window)
    }, function(t, e, n) {
        "use strict";
        function o(t) {
            var e = t.Phoenix;
            return (a.isUndefined(e) || a.isUndefined(e.isJSLoaded)) && (t.Phoenix = new s.PhoenixClass), t.Phoenix
        }
        function r(t) {
            1 != Phoenix.isJSLoaded && (Phoenix = o(t), Phoenix.isJSLoaded = !0, a.log("Phoenix.js is loaded successfully."), Phoenix.EQ.executeQ())
        }
        function i(t) {
            t.PubMatic = t.PubMatic || {}, t.PubMatic._uidCB = function(t) {
                PubMatic.pm_uid_bc = t.u
            }
        }
        var a = n(0),
            s = n(4);
        e.createPhoenixNamespace = o, e.initPhoenix = r, e.createPubMaticNamespace = i;
        var c = function(t) {
            return !!a.isObject(t) && (i(t), r(t), !0)
        };
        e.init = c
    }, function(t, e, n) {
        "use strict";
        function o() {
            var t = i.getMetaInfo(window);
            this.singleRequestCall = !1, this.isSingleRequestCallAlreadyFired = !1, this.req_type = 219, this.commonKeywordsAnding = 0, this.secure = t.secure, this.protocol = t.protocol, this.accountID = "", this.commonTargetings = {}, this.commonKeywords = [], this.customInfo = {}, this.slotStorage = {}, this.preDisplayHandlers = [], this.EQ = new s.EexecutionQueue(window.Phoenix), this.userSyncupInitiated = !1;
            var e = this;
            this.registerPreDisplayHandler(function(t) {
                var n = !1;
                if (1 == e.customInfo.gdpr) t();
                else {
                    var o = i.createDocElement(window, "script"),
                        r = window.document.getElementsByTagName("script")[0];
                    o.type = "text/javascript", o.async = !0, o.src = e.protocol + "image6.pubmatic.com/AdServer/UCookieSetPug?oid=2&cb=PubMatic._uidCB", r.parentNode.insertBefore(o, r);
                    var a = setInterval(function() {
                        window.PubMatic && window.PubMatic.hasOwnProperty("._uidCB") && clearInterval(a)
                    }, 50);
                    setTimeout(function() {
                        !n && t(), n = !0, clearInterval(a)
                    }, 500)
                }
            })
        }
        var r = n(1),
            i = n(0),
            a = n(5),
            s = n(6),
            c = n(7),
            u = n(8),
            l = n(9);
        o.prototype.initiateUserSyncup = function() {
            this.userSyncupInitiated = !0;
            var t = this;
            setTimeout(function() {
                var e, n = t.protocol + "ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&bce=1&p=" + t.accountID;
                n += "&gdpr=" + t.customInfo.gdpr || 0, n += "&gdpr_consent=" + t.customInfo.gdpr_consent || "", e = document.createElement("iframe"), e.src = n, e.style.height = "0px", e.style.width = "0px", e.style.display = "none", e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", window.document.getElementsByTagName("script")[0].parentNode.appendChild(e)
            }, 2e3)
        }, o.prototype.setRequestType = function(t) {
            isNaN(t) || (this.req_type = t)
        }, o.prototype.getAccountId = function() {
            return this.accountID
        }, o.prototype.enableSingleRequestCallMode = function() {
            this.singleRequestCall = !0
        }, o.prototype.enableCommonKeywordsAnding = function() {
            this.commonKeywordsAnding = 1
        }, o.prototype.setCommonTargeting = function(t, e) {
            var n = this;
            n.commonTargetings.hasOwnProperty(t) || (n.commonTargetings[t] = []), i.isArray(e) ? i.forEachOnArray(e, function(e, o) {
                n.commonTargetings[t].push(o)
            }) : n.commonTargetings[t].push(e)
        }, o.prototype.getCommonTargetingKeys = function() {
            var t = [];
            return i.forEachOnObject(this.commonTargetings, function(e, n) {
                i.isUndefined(e) || t.push(e)
            }), t
        }, o.prototype.getCommonTargeting = function(t) {
            return this.commonTargetings.hasOwnProperty(t) ? this.commonTargetings[t] : ""
        }, o.prototype.setCommonKeywords = function(t) {
            var e = this;
            i.isArray(t) && i.forEachOnArray(t, function(t, n) {
                e.commonKeywords.push(n)
            })
        }, o.prototype.getCommonKeywords = function() {
            return this.commonKeywords
        }, o.prototype.setInfo = function(t, e) {
            var n = "";
            switch (t) {
                case "PAGEURL":
                    n = "dpurl";
                    break;
                case "LAT":
                    n = "lat";
                    break;
                case "LON":
                    n = "lon";
                    break;
                case "SEC":
                    this.secure = 1 == this.secure ? this.secure : e, n = "";
                    break;
                case "ACCID":
                    this.accountID = e, n = "", l.getUserConsentDataFromCMP(this.accountID);
                    break;
                case "LOC":
                    n = "loc";
                    break;
                case "LOC_SRC":
                case "LOC_SOURCE":
                    n = "loc_source";
                    break;
                case "AMP":
                    n = "amp", e = 1;
                    break;
                case "GDPR":
                    n = "gdpr", e = 1;
                    break;
                case "GDPR_CONSENT":
                    n = "gdpr_consent"
            }
            "" != n && "" != e && (this.customInfo[n] = encodeURIComponent(e))
        }, o.prototype.defineAdSlot = function(t, e, n) {
            var o = new u.SlotObject(t, e, n);
            return this.slotStorage[n] = o, o
        }, o.prototype.getSlots = function() {
            var t = [];
            return i.forEachOnObject(this.slotStorage, function(e, n) {
                t.push(n)
            }), t
        }, o.prototype.originalDisplay = function(t) {
            var e, n = {},
                o = [],
                s = a.getSlotByDivId(t, this.slotStorage);
            if (null !== s)
                if (s.setDisplayFunctionCalled(!0), s.getStatus() === r.SLOT_STATUS.DISPLAYED) {
                    var c = s.getResponse();
                    null !== c ? (a.createFriendlyIframeAndRenderCreative(t, c), s.setResponse(null), s.setDisplayFunctionCalled(!1), i.log("Rendering the creative for the slot " + t)) : i.log("No cached response found for the slot " + t)
                } else i.log("Already displayed the slot: " + t);
            this.singleRequestCall ? (n[r.SLOT_STATUS.CREATED] = "", o = a.getSlotsFilteredByStatus(n, this.slotStorage), o.length > 0 && (e = a.generateAdServerCall(o, this.req_type, this.customInfo, this.commonTargetings, this.secure), a.createFriendlyIframeAndTriggerAdServerCall(t, e))) : this.slotStorage.hasOwnProperty(t) && (o.push(this.slotStorage[t]), e = a.generateAdServerCall(o, this.req_type, this.customInfo, this.commonTargetings, this.secure), a.createFriendlyIframeAndTriggerAdServerCall(t, e))
        }, o.prototype.registerPreDisplayHandler = function(t) {
            var e = this;
            "function" == typeof t && e.preDisplayHandlers && e.preDisplayHandlers.push(t)
        }, o.prototype.display = function(t) {
            var e = this,
                n = l.getUserConsentDataFromLS(e.accountID);
            e.customInfo.gdpr_consent = n && n.c ? encodeURIComponent(n.c) : e.customInfo.gdpr_consent || "", e.customInfo.gdpr = e.customInfo.gdpr_consent ? 1 : l.isCmpFound() ? 1 : e.customInfo.gdpr || 0, !e.userSyncupInitiated && e.initiateUserSyncup(), new c.TaskManager(function() {
                i.isArray(t) ? e.originalDisplay(t[0]) : e.originalDisplay(t)
            }, e.preDisplayHandlers, t).execute()
        }, o.prototype.callback = function(t) {
            var e = this;
            t.bids && i.forEachOnObject(t.bids, function(t, n) {
                if (1 == n.isNative) return void i.log("Native creative found...");
                if (n.ct && 0 != n.ct.length) {
                    i.log("Creative found for " + n.id);
                    var o = a.getSlotByDivId(n.id, e.slotStorage);
                    null !== o ? !0 === o.getDisplayFunctionCalled() ? (a.createFriendlyIframeAndRenderCreative(n.id, n), o.setDisplayFunctionCalled(!1)) : o.setResponse(n) : i.log("Invalid slot, no slot found defined for div: " + n.id)
                } else i.log("Creative NOT found for " + n.id)
            })
        }, e.PhoenixClass = o
    }, function(t, e, n) {
        "use strict";
        function o(t) {
            var e = "";
            return g.forEachOnObject(t, function(t, n) {
                e += t + "=" + n.join() + "&"
            }), e = e.substr(0, e.length - 1)
        }
        function r(t, e) {
            var n, o = "",
                r = {
                    adUnit: "getAdUnit",
                    adDiv: "getDivElement",
                    adSizes: "getDimensions",
                    keywords: "getKeywords",
                    pwtecp: "getWrapperEcpm",
                    keywordsOperation: "getKeywordsOperation",
                    targetings: "getTargetingKeys",
                    targetingByKey: "getTargeting",
                    nativeTemplateID: "getNativeTemplateID",
                    visibility: "getVisibility",
                    extraParameters: "getExtraPatameterKeys",
                    extraPatameterByKey: "getExtraParameters"
                };
            switch (t) {
                case "adUnit":
                case "adDiv":
                case "nativeTemplateID":
                case "visibility":
                case "pwtecp":
                    r.hasOwnProperty(t) && (o = e[r[t]]());
                    break;
                case "adSizes":
                    r.hasOwnProperty(t) && (n = e[r[t]](), g.forEachOnArray(n, function(t, e) {
                        e[0] && e[1] && (o += e[0] + "x" + e[1] + ",")
                    }), o = o.substr(0, o.length - 1));
                    break;
                case "keywords":
                    r.hasOwnProperty(t) && (o = e[r[t]](), o = o.join());
                    break;
                case "keywordsOperation":
                    r.hasOwnProperty(t) && (o = e[r[t]]());
                    break;
                case "targetings":
                case "extraParameters":
                    r.hasOwnProperty(t) && (n = e[r[t]](), g.forEachOnArray(n, function(n, i) {
                        var a = "";
                        switch (t) {
                            case "targetings":
                                a = "targetingByKey";
                                break;
                            case "extraParameters":
                                a = "extraPatameterByKey"
                        }
                        o += i + "=" + e[r[a]](i).join() + "&"
                    }), o = o.substr(0, o.length - 1))
            }
            return o
        }
        function i(t) {
            var e = [];
            return g.forEachOnArray(t, function(t, n) {
                var o = parseFloat(n.getWrapperEcpm());
                e.push(o > 0 ? o : "")
            }), e.join("|")
        }
        function a(t, e) {
            var n = "",
                o = {};
            return g.forEachOnArray(e, function(e, i) {
                n += r(t, i) + (o.hasOwnProperty(t) ? o[t] : "|"), i.setStatus(f.SLOT_STATUS.DISPLAYED)
            }), n.substr(0, n.length - 1)
        }
        function s(t) {
            t = t.indexOf("?") > -1 ? t.substr(t.indexOf("?") + 1) : "";
            var e = t.split("&"),
                n = {},
                o = {
                    uastest: "",
                    uaslineitemid: "",
                    uascrid: ""
                };
            return g.forEachOnArray(e, function(t, e) {
                var r = e.split("=");
                o.hasOwnProperty(r[0]) && (n[r[0]] = r[1])
            }), n
        }
        function c(t, e, n, r, c) {
            var u = [],
                l = new Date,
                d = g.getMetaInfo(window),
                p = s(d.pageURL),
                h = i(t);
            return u.push("req_type=" + e, "sec=" + c, "res_format=2", "cback=window.parent.Phoenix.callback", "rndn=" + Math.random(), "purl=" + encodeURIComponent(d.pageURL), "rurl=" + encodeURIComponent(d.refURL), "iifr=" + (self === top ? "0" : "1"), "scrn=" + encodeURIComponent(screen.width + "x" + screen.height), "tz=" + encodeURIComponent(-1 * l.getTimezoneOffset()), "kltstamp=" + encodeURIComponent(l.getFullYear() + "-" + (l.getMonth() + 1) + "-" + l.getDate() + " " + l.getHours() + ":" + l.getMinutes() + ":" + l.getSeconds()), "au=" + encodeURIComponent(a("adUnit", t)), "iid=" + encodeURIComponent(a("adDiv", t)), "asz=" + encodeURIComponent(a("adSizes", t)), "slt_kv=" + encodeURIComponent(a("targetings", t)), "ntid=" + encodeURIComponent(a("nativeTemplateID", t)), "visi=" + encodeURIComponent(a("visibility", t)), "gkv=" + encodeURIComponent(o(r)), "slt_param=" + encodeURIComponent(a("extraParameters", t))), h && u.push("pwtecp=" + encodeURIComponent(h)), n.dpurl || (n.dpurl = encodeURIComponent(d.pageURL)), !n.loc && n.lat && n.lon && (n.loc = n.lat + "," + n.lon), g.forEachOnObject(n, function(t, e) {
                n.hasOwnProperty(t) && "lat" !== t && "lon" !== t && u.push(t + "=" + e)
            }), PubMatic.pm_uid_bc && u.push("bcuid=" + PubMatic.pm_uid_bc), g.forEachOnObject(p, function(t, e) {
                p.hasOwnProperty(t) && u.push(t + "=" + e)
            }), d.protocol + f.SERVER_PATH + u.join("&")
        }
        function u(t, e) {
            var scriptElement = document.createElement('script');
            scriptElement.async = true;
            scriptElement.type = 'text/javascript';
            scriptElement.src = e;
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(scriptElement, node);

            /*
            var n, o, r;
            (n = window.document.getElementById(t)) && (r = "javascript:document.open();", r += "document.write(\"<script type='text/javascript' src='" + encodeURIComponent(e) + "'><\/script>\");", r += "document.close();", o = g.createFriendlyIframe({
                id: t + "_adCall",
                src: r,
                height: 0,
                width: 0,
                scrolling: "no",
                frameborder: "0",
                cssText: "border: 0px; vertical-align: bottom; visibility: hidden; display: none;"
            }), n.appendChild(o))
            //*/
        }
        function l(t, e) {
            var n, o, r, i;
            (n = window.document.getElementById(t)) && (r = g.createFriendlyIframe({
                id: t + "_adDisplay",
                height: e.h,
                width: e.w,
                scrolling: "no",
                frameborder: "0",
                cssText: "border: 0px; vertical-align: bottom;"
            }), r.marginwidth = "0", r.marginheight = "0", n.appendChild(r), (r = window.document.getElementById(t + "_adDisplay")) && (i = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head>', i += "<body><style>body{margin:0px;padding:0px;}</style>", i += "<script>", i += 'document.write(decodeURIComponent("' + e.ct + '"));', e.tr && (g.forEachOnArray(e.tr, function(t, e) {
                i += "document.write(\"<iframe src='" + e + "' style='border: 0px; vertical-align: bottom;visibility: hidden; display: none;'></iframe>\");"
            }), i += "<\/script>", i += "</body></html>", o = r.contentWindow.document, o.write(i), o.close())))
        }
        function d(t, e) {
            var n = [];
            return g.forEachOnObject(e, function(e, o) {
                t.hasOwnProperty(o.getStatus()) && n.push(o)
            }), n
        }
        function p(t, e) {
            return e.hasOwnProperty(t) ? e[t] : null
        }
        var f = n(1),
            g = n(0);
        e.combineGlobalTargetings = o, e.combineSlotSpecificData = r, e.getEcpmFromSlots = i, e.combineSlotsData = a, e.setQueryParamsFromURL = s, e.generateAdServerCall = c, e.createFriendlyIframeAndTriggerAdServerCall = u, e.createFriendlyIframeAndRenderCreative = l, e.getSlotsFilteredByStatus = d, e.getSlotByDivId = p
    }, function(t, e, n) {
        "use strict";
        var o = n(0);
        e.EexecutionQueue = function(t) {
            this.Phoenix = t, this.internalQ = [], o.isUndefined(this.Phoenix) || o.isUndefined(this.Phoenix.EQ) || (this.internalQ = this.Phoenix.EQ), this.push = function(t) {
                var e = this;
                o.isFunction(t) && (o.isUndefined(e.Phoenix) && o.isUndefined(e.Phoenix.isJSLoaded) ? e.internalQ.push(t) : t())
            }, this.executeQ = function() {
                for (var t; t = this.internalQ.shift();) t()
            }
        }
    }, function(t, e, n) {
        "use strict";
        function o(t, e, n) {
            this.count = e.length, this.doneTask = function() {
                var e = this;
                e.count > 0 && (e.count = e.count - 1), 0 == e.count && t()
            }, this.execute = function() {
                var t = this;
                e.length > 0 ? e.forEach(function(e) {
                    e(function() {
                        t.doneTask()
                    }, n)
                }) : t.doneTask()
            }
        }
        e.TaskManager = o
    }, function(t, e, n) {
        "use strict";
        function o(t, e, n) {
            this.adUnit = t, this.dimensionArray = e, this.divElement = n, this.slotTargetings = {}, this.slotExtraParameters = {}, this.slotKeywords = [], this.keywordsOperation = 0, this.status = 0, this.isNative = !1, this.nativeTemplateID = 0, this.nativeReqestObject = null, this.nativeRenderingFunction = null, this.id = n, this.isDisplayFunctionCalled = !1, this.response = null, this.visibility = 0, this.pwtecp = 0
        }
        var r = n(0);
        o.prototype.getWrapperEcpm = function() {
            return this.pwtecp
        }, o.prototype.setWrapperEcpm = function(t) {
            this.pwtecp = t
        }, o.prototype.setResponse = function(t) {
            return this.response = t, this
        }, o.prototype.getResponse = function() {
            return this.response
        }, o.prototype.getDisplayFunctionCalled = function() {
            return this.isDisplayFunctionCalled
        }, o.prototype.setDisplayFunctionCalled = function(t) {
            return this.isDisplayFunctionCalled = t, this
        }, o.prototype.getStatus = function() {
            return this.status
        }, o.prototype.setStatus = function(t) {
            return this.status = t, this
        }, o.prototype.getId = function() {
            return this.id
        }, o.prototype.getAdUnit = function() {
            return this.adUnit
        }, o.prototype.getDimensions = function() {
            return this.dimensionArray
        }, o.prototype.getDivElement = function() {
            return this.divElement
        }, o.prototype.setTargeting = function(t, e) {
            return this.setSlotPairs(this.slotTargetings, t, e)
        }, o.prototype.getTargetingKeys = function() {
            return this.getKeysFromSlotPairs(this.slotTargetings)
        }, o.prototype.getTargeting = function(t) {
            var e = "";
            return this.slotTargetings.hasOwnProperty(t) && (e = this.slotTargetings[t]), e
        }, o.prototype.setKeywords = function(t) {
            var e = this;
            return r.isArray(t) && r.forEachOnArray(t, function(t, n) {
                e.slotKeywords.push(n)
            }), this
        }, o.prototype.getKeywords = function() {
            return this.slotKeywords
        }, o.prototype.enableKeywordsAnding = function() {
            return this.keywordsOperation = 1, this
        }, o.prototype.getKeywordsOperation = function() {
            return this.keywordsOperation
        }, o.prototype.setNativeTemplateID = function(t) {
            return this.isNative = !0, this.nativeTemplateID = t, this
        }, o.prototype.getNativeTemplateID = function() {
            return this.nativeTemplateID
        }, o.prototype.setNativeRequestObject = function(t) {
            return this.isNative = !0, this.nativeReuestObject = t, this
        }, o.prototype.setNativeRenderingFunction = function(t) {
            return "function" == typeof t && (this.isNative = !0, this.nativeRenderingFunction = t), this
        }, o.prototype.setVisibility = function(t) {
            var e = {
                0: 0,
                1: 1,
                2: 2,
                3: 3
            };
            return this.visibility = e[t] || 0, this
        }, o.prototype.getVisibility = function() {
            return this.visibility
        }, o.prototype.setExtraParameters = function(t, e) {
            return this.setSlotPairs(this.slotExtraParameters, t, e)
        }, o.prototype.getExtraParameters = function(t) {
            var e = "";
            return this.slotExtraParameters.hasOwnProperty(t) && (e = this.slotExtraParameters[t]), e
        }, o.prototype.getExtraPatameterKeys = function() {
            return this.getKeysFromSlotPairs(this.slotExtraParameters)
        }, o.prototype.setSlotPairs = function(t, e, n) {
            t.hasOwnProperty(e) || (t[e] = []), r.isArray(n) ? r.forEachOnArray(n, function(n, o) {
                t[e].push(o)
            }) : t[e].push(n)
        }, o.prototype.getKeyValuesFromSlotPairs = function(t, e) {
            var n = "";
            return t.hasOwnProperty(e) && (n = t[e]), n
        }, o.prototype.getKeysFromSlotPairs = function(t) {
            var e = [];
            return r.forEachOnObject(t, function(t, n) {
                r.isUndefined(t) || e.push(t)
            }), e
        }, e.SlotObject = o
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = function() {
                try {
                    return window.localStorage && o.isFunction(window.localStorage.getItem) && o.isFunction(window.localStorage.setItem)
                } catch (t) {
                    return !1
                }
            }(),
            i = function() {
                try {
                    return !!window.__cmp
                } catch (t) {
                    return !1
                }
            }(),
            a = function(t, e) {
                for (var n = 0, o = t.length, r = !1; n < o; n++)
                    if (t[n] === e) {
                        r = !0;
                        break
                    }
                return r
            },
            s = function() {},
            c = function(t, e, n) {
                function o() {
                    s("calling CMP "), window.__cmp("getConsentData", null, c.consentDataCallback), window.__cmp("getVendorConsents", null, c.vendorConsentsCallback)
                }
                function r(t, e) {
                    function n(n, o) {
                        if ("cmpReturn" === n) {
                            var r = "getConsentData" === t ? o.vendorConsentData : o.vendorConsents;
                            e(r)
                        }
                    }
                    window.$sf.ext.register(1, 1, n), window.$sf.ext.cmp(t)
                }
                function i(t, o, r) {
                    function i(t) {
                        var e = "string" == typeof t.data && a(t.data, "cmpReturn") ? JSON.parse(t.data) : t.data;
                        if (e.__cmpReturn && e.__cmpReturn.callId) {
                            var n = e.__cmpReturn;
                            void 0 !== u[n.callId] && (u[n.callId](n.returnValue, n.success), delete u[n.callId])
                        }
                    }
                    function s() {
                        window.removeEventListener("message", i, !1)
                    }
                    function c(t) {
                        s(), r(t)
                    }
                    window.__cmp = function(t, r, i) {
                        if (!o) {
                            s();
                            return e("CMP not found", n)
                        }
                        var a = Math.random() + "",
                            c = {
                                __cmpCall: {
                                    command: t,
                                    parameter: r,
                                    callId: a
                                }
                            };
                        return u[a] = i, o.postMessage(c, "*"), null
                    }, window.addEventListener("message", i, !1), window.__cmp(t, null, c)
                }
                var c = function() {
                        function e() {
                            s("in afterEach, ", o), o.getConsentData && o.getVendorConsents && t(o, n)
                        }
                        var o = {};
                        return {
                            consentDataCallback: function(t) {
                                s("in consentDataCallback, ", t), o.getConsentData = t, e()
                            },
                            vendorConsentsCallback: function(t) {
                                s("in vendorConsentsCallback, ", t), o.getVendorConsents = t, e()
                            }
                        }
                    }(),
                    u = {};
                if (window.__cmp) "function" == typeof window.__cmp ? o() : (s("calling CMP after delay"), setTimeout(function() {
                    "function" == typeof window.__cmp && o()
                }, 500));
                else if (window !== top)
                    if (s("Tag is executing in iframe"), function() {
                            return !(!window.$sf || !window.$sf.ext)
                        }() && "function" == typeof window.$sf.ext.cmp) s("In safe-frame CMP detection"), r("getConsentData", c.consentDataCallback), r("getVendorConsents", c.vendorConsentsCallback);
                    else {
                        s("In iframe CMP detection");
                        for (var l, d = window; !l;) {
                            try {
                                d.frames.__cmpLocator && (l = d)
                            } catch (t) {}
                            if (d === window.top) break;
                            d = d.parent
                        }
                        i("getConsentData", l, c.consentDataCallback), i("getVendorConsents", l, c.vendorConsentsCallback)
                    }
                else s("cmp might not have loaded, calling CMP after delay"), setTimeout(function() {
                    "function" == typeof window.__cmp && o()
                }, 500)
            },
            u = function(t, e, n) {
                var o;
                if (!r) return void s("local storage is not enabled");
                try {
                    o = window.localStorage.getItem("PubMatic")
                } catch (t) {
                    s("failed in reading from LS")
                }
                if (o && "string" == typeof o) try {
                    o = JSON.parse(o)
                } catch (t) {
                    o = {}
                } else o = {};
                s("data from ls", o), o && (o.hasOwnProperty(t) || (o[t] = {}), o[t].t = (new Date).getTime(), o[t][e] = n, "c" == e && (o[t].g = 1));
                try {
                    window.localStorage.setItem("PubMatic", JSON.stringify(o)), s("data stored in local storage successfuly")
                } catch (t) {
                    s("local storage reading exception")
                }
            };
        e.isCmpFound = function() {
            return i
        }, e.getUserConsentDataFromCMP = function(t) {
            function e(e) {
                s("Data received from CMP: ", e), e && (e.getConsentData && e.getConsentData.consentData ? (s("using getConsentData.consentData: ", e.getConsentData.consentData), u(t, "c", e.getConsentData.consentData)) : e.getVendorConsents && e.getVendorConsents.metadata && (s("using getVendorConsents.metadata: ", e.getVendorConsents.metadata), u(t, "c", e.getVendorConsents.metadata)))
            }
            function n() {
                s(arguments), s("Failed to retrieve user consent data from CMP for pubId: ", t)
            }
            c(e, n)
        }, e.getUserConsentDataFromLS = function(t) {
            var e = {
                c: ""
            };
            if (!r) return s("LS is not enabled"), e;
            var n;
            try {
                n = window.localStorage.getItem("PubMatic")
            } catch (t) {
                s("failed in reading from LS")
            }
            if (n && "string" == typeof n) {
                try {
                    n = JSON.parse(n)
                } catch (t) {
                    n = {}
                }
                if (n.hasOwnProperty(t)) {
                    var o = n[t];
                    o && o.c && o.t && (o.t && parseInt(o.t, 10) > (new Date).getTime() - 864e5 ? e.c = o.c : s("data in LS had no timestamp or expired timestamp.", o))
                }
            }
            return e
        }
    }])
});
