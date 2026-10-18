module.exports = [
"[project]/components/AnimatedMetric.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedMetric
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AnimatedMetric({ value, className = "" }) {
    const [shown, setShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("0");
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const element = ref.current;
        if (!element) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            element.textContent = value;
            return;
        }
        const numeric = Number(value.replace(/[^\d.]/g, ""));
        if (!Number.isFinite(numeric)) {
            element.textContent = value;
            return;
        }
        let frame = 0;
        let started = 0;
        const run = (time)=>{
            if (!started) started = time;
            const progress = Math.min((time - started) / 1400, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = numeric * eased;
            const formatted = Number.isInteger(numeric) ? Math.floor(current).toLocaleString() : current.toFixed(1);
            const suffix = value.replace(/[\d,.]/g, "");
            setShown(progress === 1 ? value : `${formatted}${suffix}`);
            if (progress < 1) frame = requestAnimationFrame(run);
        };
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
                cancelAnimationFrame(frame);
                started = 0;
                setShown("0");
                frame = requestAnimationFrame(run);
            } else {
                cancelAnimationFrame(frame);
                frame = 0;
                started = 0;
                setShown("0");
            }
        }, {
            threshold: 0.25
        });
        observer.observe(element);
        return ()=>{
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
        ref: ref,
        className: `tabular-nums ${className}`,
        children: shown
    }, void 0, false, {
        fileName: "[project]/components/AnimatedMetric.tsx",
        lineNumber: 51,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/CaseStudiesSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaseStudiesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const caseImages = [
    "/images/post_1.jpg",
    "/images/post_2.jpg",
    "/images/post_3.jpg",
    "/images/post_4.jpg",
    "/images/post_5.jpg",
    "/images/post_6.jpg",
    "/images/post_7.jpg"
];
const caseSlugs = [
    "identity-refresh",
    "product-launch",
    "outdoor-reach",
    "lower-acquisition-cost",
    "retention-growth"
];
function ArrowButton({ direction, onClick, label, locale }) {
    const pointsLeft = direction === "previous";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-label": label,
        onClick: onClick,
        className: "grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/[0.04] text-white transition hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: `h-5 w-5 ${locale === "ar" ? "rotate-180" : ""}`,
            fill: "none",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: pointsLeft ? "m14.5 5-7 7 7 7" : "m9.5 5 7 7-7 7",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/CaseStudiesSection.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/CaseStudiesSection.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CaseStudiesSection.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function CaseStudiesSection({ dictionary, locale }) {
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const copy = dictionary.cases;
    const scrollCards = (direction)=>{
        const track = trackRef.current;
        if (!track) return;
        const rtlMultiplier = locale === "ar" ? -1 : 1;
        track.scrollBy({
            left: direction * rtlMultiplier * track.clientWidth * 0.8,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "case-studies-title",
        className: "relative overflow-hidden px-5 py-14 text-white sm:px-8 sm:py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1140px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex rounded-full border border-white/20 bg-white/[0.025] px-3 py-[6px] text-[14px] font-medium leading-5",
                            children: copy.badge
                        }, void 0, false, {
                            fileName: "[project]/components/CaseStudiesSection.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "case-studies-title",
                            className: "mt-6 text-[clamp(2.25rem,3.55vw,3.25rem)] font-bold leading-[1.14] tracking-[-0.035em]",
                            children: [
                                copy.title,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gold-highlight",
                                    children: copy.highlight
                                }, void 0, false, {
                                    fileName: "[project]/components/CaseStudiesSection.tsx",
                                    lineNumber: 69,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CaseStudiesSection.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-5 text-[15px] leading-6 text-white/95 sm:text-[16px]",
                            children: copy.description
                        }, void 0, false, {
                            fileName: "[project]/components/CaseStudiesSection.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CaseStudiesSection.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "group",
                    "aria-label": copy.controlsLabel,
                    className: "mt-9 hidden justify-end gap-3 sm:mt-10 sm:flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowButton, {
                            direction: "previous",
                            label: copy.previous,
                            locale: locale,
                            onClick: ()=>scrollCards(-1)
                        }, void 0, false, {
                            fileName: "[project]/components/CaseStudiesSection.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowButton, {
                            direction: "next",
                            label: copy.next,
                            locale: locale,
                            onClick: ()=>scrollCards(1)
                        }, void 0, false, {
                            fileName: "[project]/components/CaseStudiesSection.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CaseStudiesSection.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: trackRef,
                        className: "case-studies-track flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 sm:gap-[20px]",
                        "aria-label": copy.listLabel,
                        dir: locale === "ar" ? "rtl" : "ltr",
                        children: copy.cards.map((study, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `/${locale}/case-studies/${caseSlugs[index]}`,
                                "aria-label": `${study.title} — ${copy.learnMore}`,
                                className: "group block shrink-0 rounded-[18px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "w-[min(82vw,560px)] snap-start overflow-hidden rounded-[18px] border border-white/[0.1] bg-[#111111] transition duration-300 group-hover:border-white/30 lg:w-[clamp(300px,29.2vw,550px)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "m-4 aspect-[1.04/1] overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#111111]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-full w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: caseImages[index],
                                                        alt: study.alt,
                                                        fill: true,
                                                        sizes: "(max-width: 768px) 82vw, 560px",
                                                        className: "case-study-image object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CaseStudiesSection.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-[#11101e]/85",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CaseStudiesSection.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CaseStudiesSection.tsx",
                                                lineNumber: 94,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/CaseStudiesSection.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 pb-5 sm:px-5 sm:pb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-baseline justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-[22px] font-bold leading-7 tracking-[-0.025em] sm:text-[30px] sm:leading-9",
                                                            children: study.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CaseStudiesSection.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                                            dateTime: "2025-01-09",
                                                            className: "shrink-0 text-[12px] text-white/55 sm:text-[14px]",
                                                            children: copy.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CaseStudiesSection.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CaseStudiesSection.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-[14px] leading-[1.7] text-white/55 sm:text-[15px]",
                                                    children: study.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CaseStudiesSection.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-white/75",
                                                    children: [
                                                        copy.learnMore,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "aria-hidden": "true",
                                                            className: "transition-transform group-hover:translate-x-1",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CaseStudiesSection.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 131
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CaseStudiesSection.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CaseStudiesSection.tsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CaseStudiesSection.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this)
                            }, study.title, false, {
                                fileName: "[project]/components/CaseStudiesSection.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/CaseStudiesSection.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CaseStudiesSection.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CaseStudiesSection.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CaseStudiesSection.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/FAQSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function FAQSection({ dictionary }) {
    const copy = dictionary.faq;
    const [openQuestions, setOpenQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const toggleQuestion = (index)=>{
        setOpenQuestions((open)=>open.includes(index) ? open.filter((item)=>item !== index) : [
                ...open,
                index
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "faq-title",
        className: "relative isolate overflow-hidden bg-transparent px-5 pb-16 pt-12 text-white sm:px-8 sm:pb-[104px] sm:pt-[54px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-auto max-w-[1140px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex rounded-full border border-white/20 bg-white/[0.025] px-3 py-[6px] text-[14px] font-medium leading-5",
                            children: copy.badge
                        }, void 0, false, {
                            fileName: "[project]/components/FAQSection.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "faq-title",
                            className: "mt-6 text-[clamp(2.2rem,3.5vw,3.2rem)] font-bold leading-[1.14] tracking-[-0.035em]",
                            children: [
                                copy.title,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gold-highlight",
                                    children: copy.highlight
                                }, void 0, false, {
                                    fileName: "[project]/components/FAQSection.tsx",
                                    lineNumber: 26,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/FAQSection.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-5 text-[15px] leading-6 text-white/95 sm:text-[16px]",
                            children: copy.description
                        }, void 0, false, {
                            fileName: "[project]/components/FAQSection.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/FAQSection.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "mt-10 flex flex-col gap-4 sm:mt-11 sm:gap-5",
                    children: copy.questions.map((question, index)=>{
                        const isOpen = openQuestions.includes(index);
                        const answerId = `faq-answer-${index}`;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                animationDelay: `${index * 70}ms`
                            },
                            className: "faq-item overflow-hidden rounded-[12px] border border-white/[0.1] bg-[#111111]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "aria-expanded": isOpen,
                                    "aria-controls": answerId,
                                    onClick: ()=>toggleQuestion(index),
                                    className: "flex min-h-[66px] w-full items-center justify-between gap-4 px-4 py-4 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-white sm:px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[17px] font-bold leading-6 tracking-[-0.015em] sm:text-[23px]",
                                            children: question
                                        }, void 0, false, {
                                            fileName: "[project]/components/FAQSection.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            "data-open": isOpen,
                                            className: "faq-chevron relative h-6 w-6 shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute left-1/2 top-1/2 h-[2px] w-[18px] -translate-x-1/2 -translate-y-1/2 bg-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/FAQSection.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 19
                                                }, this),
                                                !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute left-1/2 top-1/2 h-[18px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/FAQSection.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/FAQSection.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/FAQSection.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: answerId,
                                    "aria-hidden": !isOpen,
                                    "data-open": isOpen,
                                    className: "faq-answer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-5 text-[15px] leading-[1.7] text-white/70 sm:px-5 sm:text-[16px]",
                                        children: copy.answers[index]
                                    }, void 0, false, {
                                        fileName: "[project]/components/FAQSection.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/FAQSection.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, question, true, {
                            fileName: "[project]/components/FAQSection.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/FAQSection.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/FAQSection.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/FAQSection.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/HeroMobileMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroMobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function HeroMobileMenu({ items, navLabel, menuLabel, closeLabel, demoLabel }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative lg:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": open ? closeLabel : menuLabel,
                "aria-expanded": open,
                "aria-controls": "mobile-primary-nav",
                onClick: ()=>setOpen((current)=>!current),
                className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    className: "h-5 w-5",
                    fill: "none",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m6 6 12 12M18 6 6 18",
                        stroke: "currentColor",
                        strokeWidth: "1.8",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroMobileMenu.tsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HeroMobileMenu.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    className: "h-5 w-5",
                    fill: "none",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 7h16M4 12h16M4 17h16",
                        stroke: "currentColor",
                        strokeWidth: "1.8",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroMobileMenu.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HeroMobileMenu.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HeroMobileMenu.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                id: "mobile-primary-nav",
                "aria-label": navLabel,
                className: "absolute right-0 top-[calc(100%_+_0.75rem)] z-50 w-[calc(100vw_-_3rem)] rounded-2xl border border-white/15 bg-[#11101e]/95 p-2 shadow-[0_16px_48px_rgba(0,0,0,.35)] backdrop-blur-xl sm:w-[420px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "grid gap-1",
                        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.href,
                                    onClick: ()=>setOpen(false),
                                    className: "flex min-h-11 items-center rounded-xl px-4 text-start text-[15px] font-medium text-white/80 transition-colors hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroMobileMenu.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/components/HeroMobileMenu.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/HeroMobileMenu.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#demo",
                        onClick: ()=>setOpen(false),
                        className: "mt-2 block rounded-xl p-[1px] [background:linear-gradient(110deg,#ffe52d,#ff432e)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex min-h-11 items-center justify-center rounded-xl bg-[#080614] px-4 text-[14px] font-semibold text-white",
                            children: demoLabel
                        }, void 0, false, {
                            fileName: "[project]/components/HeroMobileMenu.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/HeroMobileMenu.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroMobileMenu.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeroMobileMenu.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/LanguageSwitcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
function LanguageSwitcher({ locale, label }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const nextLocale = locale === "en" ? "ar" : "en";
    const preserveCurrentPage = (event)=>{
        event.preventDefault();
        const currentPath = window.location.pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${nextLocale}`);
        router.push(`${currentPath}${window.location.search}`, {
            scroll: false
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: `/${nextLocale}`,
        "aria-label": label,
        onClick: preserveCurrentPage,
        className: "whitespace-nowrap rounded-full border border-white/15 px-3 py-1.5 text-[12px] font-semibold transition-colors hover:bg-white/10 sm:text-[13px]",
        children: nextLocale === "ar" ? "العربية" : "English"
    }, void 0, false, {
        fileName: "[project]/components/LanguageSwitcher.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/TestimonialSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestimonialSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimatedMetric$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AnimatedMetric.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const resultValues = [
    "35+",
    "22+",
    "657+"
];
const portraits = [
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&h=240&q=85",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&h=240&q=85",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=85"
];
function CarouselArrow({ direction, label, onClick, isRtl }) {
    const pointsLeft = direction === "previous";
    const path = pointsLeft ? "m14.5 5-7 7 7 7" : "m9.5 5 7 7-7 7";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-label": label,
        onClick: onClick,
        className: "grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/[0.04] text-white transition hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: `h-5 w-5 ${isRtl ? "rotate-180" : ""}`,
            fill: "none",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: path,
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/TestimonialSection.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/TestimonialSection.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/TestimonialSection.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function TestimonialSection({ dictionary, locale }) {
    const copy = dictionary.testimonial;
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const isRtl = locale === "ar";
    const review = copy.reviews[activeIndex];
    const changeReview = (step)=>{
        setActiveIndex((current)=>(current + step + copy.reviews.length) % copy.reviews.length);
    };
    const slideLabel = copy.slide.replace("{current}", String(activeIndex + 1)).replace("{total}", String(copy.reviews.length));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-label": copy.label,
        className: "relative isolate overflow-hidden bg-transparent px-5 py-12 text-white sm:px-8 sm:py-[68px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1140px] rounded-[17px] p-[1px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-[660px] flex-col items-center rounded-[16px] bg-[#111111]/95 px-5 py-9 text-center sm:min-h-[696px] sm:px-10 sm:py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex rounded-full border border-white/20 bg-white/[0.035] px-3 py-[6px] text-[14px] font-medium leading-5",
                        children: copy.label
                    }, void 0, false, {
                        fileName: "[project]/components/TestimonialSection.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: portraits[activeIndex],
                        alt: review.name,
                        width: 80,
                        height: 80,
                        className: "mt-9 h-20 w-20 rounded-full border border-white/10 bg-white/10 object-cover"
                    }, void 0, false, {
                        fileName: "[project]/components/TestimonialSection.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-7 flex gap-[2px] text-[27px] leading-none text-[#ffc52f]",
                        "aria-label": copy.rating,
                        children: Array.from({
                            length: 5
                        }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "★"
                            }, index, false, {
                                fileName: "[project]/components/TestimonialSection.tsx",
                                lineNumber: 61,
                                columnNumber: 54
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/TestimonialSection.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                        "aria-live": "polite",
                        className: "mt-6 max-w-[900px] text-[clamp(1.8rem,3.2vw,2.85rem)] font-bold leading-[1.14] tracking-[-0.035em]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: review.quote
                        }, void 0, false, {
                            fileName: "[project]/components/TestimonialSection.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/TestimonialSection.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-5 text-[15px] font-semibold leading-6",
                        children: review.name
                    }, void 0, false, {
                        fileName: "[project]/components/TestimonialSection.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-[13px] leading-5 text-white/55",
                        children: review.role
                    }, void 0, false, {
                        fileName: "[project]/components/TestimonialSection.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "group",
                        "aria-label": slideLabel,
                        className: "mt-8 flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselArrow, {
                                direction: "previous",
                                label: copy.previous,
                                onClick: ()=>changeReview(-1),
                                isRtl: isRtl
                            }, void 0, false, {
                                fileName: "[project]/components/TestimonialSection.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "testimonial-pagination flex items-center gap-2",
                                "aria-label": slideLabel,
                                children: copy.reviews.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-label": copy.showReview.replace("{number}", String(index + 1)),
                                        "aria-current": index === activeIndex ? "true" : undefined,
                                        onClick: ()=>setActiveIndex(index),
                                        className: `h-3 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${index === activeIndex ? "w-6 bg-white" : "w-3 bg-white/40 hover:bg-white/70"}`
                                    }, index, false, {
                                        fileName: "[project]/components/TestimonialSection.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/TestimonialSection.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselArrow, {
                                direction: "next",
                                label: copy.next,
                                onClick: ()=>changeReview(1),
                                isRtl: isRtl
                            }, void 0, false, {
                                fileName: "[project]/components/TestimonialSection.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TestimonialSection.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto w-full max-w-[740px] pt-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px w-full bg-white/[0.12]"
                            }, void 0, false, {
                                fileName: "[project]/components/TestimonialSection.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: "mt-10 grid grid-cols-3",
                                children: copy.metrics.map((label, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `px-2 sm:px-4 ${index > 0 ? "border-s border-white/[0.12]" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimatedMetric$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                value: resultValues[index],
                                                className: "m-0 text-[38px] font-bold leading-none tracking-[0.01em] sm:text-[48px]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/TestimonialSection.tsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "mt-6 text-[13px] font-semibold leading-5 text-white/60 sm:text-[23px] sm:leading-7",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/components/TestimonialSection.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/components/TestimonialSection.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/TestimonialSection.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TestimonialSection.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TestimonialSection.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/TestimonialSection.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/TestimonialSection.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/dotm-square-5.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DotmSquare5",
    ()=>DotmSquare5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$core$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dotmatrix-core.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dotmatrix-hooks.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const animationResolver = ({ isActive, index, reducedMotion, phase })=>{
    if (!isActive) {
        return {
            className: "dmx-inactive"
        };
    }
    const order = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$core$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diagonalSnakeOrderValue"])(index);
    const pathNorm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$core$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diagonalSnakeNormFromIndex"])(index);
    const style = {
        "--dmx-diagonal-snake-order": order
    };
    if (reducedMotion || phase === "idle") {
        return {
            style: {
                ...style,
                opacity: 0.16 + pathNorm * 0.78
            }
        };
    }
    return {
        className: "dmx-diagonal-snake",
        style
    };
};
function DotmSquare5({ speed = 1.35, pattern = "full", animated = true, hoverAnimated = false, ...rest }) {
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    const { phase: matrixPhase, onMouseEnter, onMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDotMatrixPhases"])({
        animated: Boolean(animated && !reducedMotion),
        hoverAnimated: Boolean(hoverAnimated && !reducedMotion),
        speed
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$core$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DotMatrixBase"], {
        ...rest,
        size: rest.size ?? 36,
        dotSize: rest.dotSize ?? 5,
        speed: speed,
        pattern: pattern,
        animated: animated,
        phase: matrixPhase,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        reducedMotion: reducedMotion,
        animationResolver: animationResolver
    }, void 0, false, {
        fileName: "[project]/components/ui/dotm-square-5.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/dotmatrix-core.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CROSS_INDEXES",
    ()=>CROSS_INDEXES,
    "CROSS_INDEXES_3",
    ()=>CROSS_INDEXES_3,
    "DIAMOND_INDEXES",
    ()=>DIAMOND_INDEXES,
    "DIAMOND_INDEXES_3",
    ()=>DIAMOND_INDEXES_3,
    "DMX_BLOOM_OPACITY_MIN",
    ()=>DMX_BLOOM_OPACITY_MIN,
    "DotMatrix3Base",
    ()=>DotMatrix3Base,
    "DotMatrixBase",
    ()=>DotMatrixBase,
    "FULL_INDEXES",
    ()=>FULL_INDEXES,
    "FULL_INDEXES_3",
    ()=>FULL_INDEXES_3,
    "MATRIX_SIZE",
    ()=>MATRIX_SIZE,
    "MATRIX_SIZE_3",
    ()=>MATRIX_SIZE_3,
    "OUTLINE_INDEXES",
    ()=>OUTLINE_INDEXES,
    "OUTLINE_INDEXES_3",
    ()=>OUTLINE_INDEXES_3,
    "RINGS_INDEXES",
    ()=>RINGS_INDEXES,
    "RINGS_INDEXES_3",
    ()=>RINGS_INDEXES_3,
    "ROSE_INDEXES",
    ()=>ROSE_INDEXES,
    "ROSE_INDEXES_3",
    ()=>ROSE_INDEXES_3,
    "blTrPath3NormFromIndex",
    ()=>blTrPath3NormFromIndex,
    "brTlPath3NormFromIndex",
    ()=>brTlPath3NormFromIndex,
    "colWave3NormFromCol",
    ()=>colWave3NormFromCol,
    "colWave3NormFromColReverse",
    ()=>colWave3NormFromColReverse,
    "colWaveNormFromIndex",
    ()=>colWaveNormFromIndex,
    "concentricRingNormFromIndex",
    ()=>concentricRingNormFromIndex,
    "createDiagonalWave3Component",
    ()=>createDiagonalWave3Component,
    "createDiagonalWave3Resolver",
    ()=>createDiagonalWave3Resolver,
    "createDotm3x3Component",
    ()=>createDotm3x3Component,
    "createGlyphSpin3Component",
    ()=>createGlyphSpin3Component,
    "createPathWaveComponent",
    ()=>createPathWaveComponent,
    "createPathWaveResolver",
    ()=>createPathWaveResolver,
    "cx",
    ()=>cx,
    "diagonalSnakeNormFromIndex",
    ()=>diagonalSnakeNormFromIndex,
    "diagonalSnakeOrderValue",
    ()=>diagonalSnakeOrderValue,
    "diagonalWave3BandIndex",
    ()=>diagonalWave3BandIndex,
    "diagonalWave3PathNormFromIndex",
    ()=>diagonalWave3PathNormFromIndex,
    "distanceFromCenter",
    ()=>distanceFromCenter,
    "distanceFromCenter3",
    ()=>distanceFromCenter3,
    "dmxBloomHaloSpreadClass",
    ()=>dmxBloomHaloSpreadClass,
    "dmxBloomRootActive",
    ()=>dmxBloomRootActive,
    "dmxDotBloomParts",
    ()=>dmxDotBloomParts,
    "getPattern3Indexes",
    ()=>getPattern3Indexes,
    "getPatternIndexes",
    ()=>getPatternIndexes,
    "harmonicPhase",
    ()=>harmonicPhase,
    "indexToCoord",
    ()=>indexToCoord,
    "indexToCoord3",
    ()=>indexToCoord3,
    "isCenterCell3",
    ()=>isCenterCell3,
    "isPrime",
    ()=>isPrime,
    "isWithinCircularMask",
    ()=>isWithinCircularMask,
    "lissajousOffset",
    ()=>lissajousOffset,
    "manhattanDistance",
    ()=>manhattanDistance,
    "manhattanDistance3",
    ()=>manhattanDistance3,
    "middleRingAntiClockwiseNormFromIndex",
    ()=>middleRingAntiClockwiseNormFromIndex,
    "middleRingAntiClockwiseOrderValue",
    ()=>middleRingAntiClockwiseOrderValue,
    "normalizedRadius",
    ()=>normalizedRadius,
    "opacityToBloomLevel",
    ()=>opacityToBloomLevel,
    "outerRingClockwise3NormFromIndex",
    ()=>outerRingClockwise3NormFromIndex,
    "outerRingClockwise3OrderValue",
    ()=>outerRingClockwise3OrderValue,
    "outerRingClockwiseNormFromIndex",
    ()=>outerRingClockwiseNormFromIndex,
    "outerRingClockwiseOrderValue",
    ()=>outerRingClockwiseOrderValue,
    "polarAngle",
    ()=>polarAngle,
    "remapOpacityToTriplet",
    ()=>remapOpacityToTriplet,
    "remappedOpacityQualifiesForBloom",
    ()=>remappedOpacityQualifiesForBloom,
    "resolveDmxColorTokens",
    ()=>resolveDmxColorTokens,
    "rotate3x3",
    ()=>rotate3x3,
    "rowDistance",
    ()=>rowDistance,
    "rowMajorIndex",
    ()=>rowMajorIndex,
    "rowMajorIndex3",
    ()=>rowMajorIndex3,
    "rowWave3NormFromRow",
    ()=>rowWave3NormFromRow,
    "rowWaveNormFromIndex",
    ()=>rowWaveNormFromIndex,
    "rowWaveOrderValue",
    ()=>rowWaveOrderValue,
    "snakePathNormFromIndex",
    ()=>snakePathNormFromIndex,
    "snakePathOrderValue",
    ()=>snakePathOrderValue,
    "spiralInward3NormFromIndex",
    ()=>spiralInward3NormFromIndex,
    "spiralInward3OrderValue",
    ()=>spiralInward3OrderValue,
    "spiralInwardNormFromIndex",
    ()=>spiralInwardNormFromIndex,
    "spiralInwardOrderValue",
    ()=>spiralInwardOrderValue,
    "spiralOffset",
    ()=>spiralOffset,
    "styleOpacity",
    ()=>styleOpacity,
    "stylePx",
    ()=>stylePx,
    "tlBrPath3NormFromIndex",
    ()=>tlBrPath3NormFromIndex,
    "trBlPath3NormFromIndex",
    ()=>trBlPath3NormFromIndex,
    "trBlPathNormFromIndex",
    ()=>trBlPathNormFromIndex,
    "wave3PathOpacityFromNorm",
    ()=>wave3PathOpacityFromNorm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dotmatrix-hooks.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const DOT_MATRIX_COLOR_PRESETS = {
    "solid-theme": {
        fill: "var(--color-dot-on)",
        glow: "var(--color-dot-on)"
    },
    "solid-mint": {
        fill: "#34d399",
        glow: "#34d399"
    },
    "grad-sunset": {
        fill: "linear-gradient(135deg, #ff5f6d 0%, #ffc371 52%, #ffe29a 100%)",
        glow: "#ff8b73"
    },
    "grad-ocean": {
        fill: "linear-gradient(140deg, #00c6ff 0%, #0072ff 48%, #4facfe 100%)",
        glow: "#2f8fff"
    },
    "grad-neon": {
        fill: "linear-gradient(145deg, #b4ff39 0%, #39ffb6 46%, #00d4ff 100%)",
        glow: "#59ffc8"
    },
    "grad-aurora": {
        fill: "linear-gradient(145deg, #ff3cac 0%, #784ba0 45%, #2b86c5 100%)",
        glow: "#9c64bf"
    },
    "grad-fire": {
        fill: "linear-gradient(145deg, #ff512f 0%, #dd2476 45%, #ffb347 100%)",
        glow: "#f96a5f"
    },
    "grad-prism": {
        fill: "linear-gradient(145deg, #12c2e9 0%, #c471ed 45%, #f64f59 100%)",
        glow: "#9e7de8"
    }
};
function resolveDmxColorTokens(color, colorPreset) {
    if (!colorPreset) {
        return {
            resolvedColor: color,
            dotFill: color
        };
    }
    const preset = DOT_MATRIX_COLOR_PRESETS[colorPreset];
    if (!preset) {
        return {
            resolvedColor: color,
            dotFill: color
        };
    }
    return {
        resolvedColor: preset.glow,
        dotFill: preset.fill
    };
}
function cx(...values) {
    return values.filter(Boolean).join(" ");
}
const MATRIX_SIZE = 5;
const CENTER = Math.floor(MATRIX_SIZE / 2);
const RANGE = Array.from({
    length: MATRIX_SIZE
}, (_, index)=>index);
const MAX_RADIUS = Math.hypot(CENTER, CENTER);
const FULL_INDEXES = RANGE.flatMap((row)=>RANGE.map((col)=>rowMajorIndex(row, col)));
const DIAMOND_INDEXES = FULL_INDEXES.filter((index)=>{
    const { row, col } = indexToCoord(index);
    return Math.abs(row - CENTER) + Math.abs(col - CENTER) <= 2;
});
const OUTLINE_INDEXES = FULL_INDEXES.filter((index)=>{
    const { row, col } = indexToCoord(index);
    return row === 0 || row === MATRIX_SIZE - 1 || col === 0 || col === MATRIX_SIZE - 1;
});
const CROSS_INDEXES = FULL_INDEXES.filter((index)=>{
    const { row, col } = indexToCoord(index);
    return row === CENTER || col === CENTER;
});
const RINGS_INDEXES = FULL_INDEXES.filter((index)=>{
    const { row, col } = indexToCoord(index);
    const radius = Math.hypot(row - CENTER, col - CENTER);
    return Math.round(radius) === 1 || Math.round(radius) === 2;
});
const ROSE_INDEXES = FULL_INDEXES.filter((index)=>{
    const { row, col } = indexToCoord(index);
    const dx = col - CENTER;
    const dy = row - CENTER;
    const angle = Math.atan2(dy, dx);
    const radius = Math.hypot(dx, dy);
    const rose = Math.abs(Math.sin(3 * angle));
    return rose > 0.6 && radius >= 1;
});
const PATTERN_INDEXES = {
    diamond: DIAMOND_INDEXES,
    full: FULL_INDEXES,
    outline: OUTLINE_INDEXES,
    rose: ROSE_INDEXES,
    cross: CROSS_INDEXES,
    rings: RINGS_INDEXES
};
function getPatternIndexes(pattern = "diamond") {
    return PATTERN_INDEXES[pattern];
}
function rowMajorIndex(row, col) {
    return row * MATRIX_SIZE + col;
}
function indexToCoord(index) {
    return {
        row: Math.floor(index / MATRIX_SIZE),
        col: index % MATRIX_SIZE
    };
}
function distanceFromCenter(index) {
    const { row, col } = indexToCoord(index);
    return Math.hypot(row - CENTER, col - CENTER);
}
function rowDistance(index) {
    const { row } = indexToCoord(index);
    return Math.abs(row - CENTER);
}
function polarAngle(index) {
    const { row, col } = indexToCoord(index);
    return Math.atan2(row - CENTER, col - CENTER);
}
function normalizedRadius(index) {
    const { row, col } = indexToCoord(index);
    return Math.hypot(row - CENTER, col - CENTER) / MAX_RADIUS;
}
function manhattanDistance(index) {
    const { row, col } = indexToCoord(index);
    return Math.abs(row - CENTER) + Math.abs(col - CENTER);
}
function harmonicPhase(row, col, a, b) {
    return Math.sin((row + 1) * a + (col + 1) * b);
}
function lissajousOffset(row, col, amplitude = 2.25) {
    const x = Math.sin((row + 1) * 1.15 + (col + 1) * 2.2) * amplitude;
    const y = Math.cos((row + 1) * 2.45 + (col + 1) * 0.95) * amplitude;
    const phase = Math.abs(Math.sin((row + 1) * 0.7 + (col + 1) * 1.1));
    return {
        x,
        y,
        phase
    };
}
function spiralOffset(angle, radiusNormalizedValue, amplitude = 2.8) {
    const spin = angle + radiusNormalizedValue * Math.PI * 2.1;
    const radius = radiusNormalizedValue * amplitude;
    const x = Math.cos(spin) * radius;
    const y = Math.sin(spin) * radius;
    const phase = Math.abs(Math.sin(spin * 0.5));
    return {
        x,
        y,
        phase
    };
}
function isPrime(value) {
    if (value <= 1) {
        return false;
    }
    if (value === 2) {
        return true;
    }
    if (value % 2 === 0) {
        return false;
    }
    const limit = Math.floor(Math.sqrt(value));
    for(let divisor = 3; divisor <= limit; divisor += 2){
        if (value % divisor === 0) {
            return false;
        }
    }
    return true;
}
const N = MATRIX_SIZE;
const C = Math.floor(MATRIX_SIZE / 2);
const CELLS = N * N;
const MAX_TRBL = (N - 1) * 2;
function trBlPathNormFromIndex(index) {
    const { row, col } = indexToCoord(index);
    return (row + (N - 1 - col)) / MAX_TRBL;
}
function buildSnakeOrderToIndexMap() {
    const pathOrder = new Array(CELLS);
    const key = (row, col)=>rowMajorIndex(row, col);
    let t = 0;
    for(let row = 0; row < N; row += 1){
        if (row % 2 === 0) {
            for(let col = 0; col < N; col += 1){
                pathOrder[key(row, col)] = t;
                t += 1;
            }
        } else {
            for(let col = N - 1; col >= 0; col -= 1){
                pathOrder[key(row, col)] = t;
                t += 1;
            }
        }
    }
    return pathOrder;
}
const SNAKE_ORDER = buildSnakeOrderToIndexMap();
function snakePathNormFromIndex(index) {
    return SNAKE_ORDER[index] / (CELLS - 1);
}
function snakePathOrderValue(index) {
    return SNAKE_ORDER[index];
}
function buildSpiralInwardOrderToIndexMap() {
    const order = new Array(CELLS);
    let top = 0;
    let bottom = N - 1;
    let left = 0;
    let right = N - 1;
    let t = 0;
    while(top <= bottom && left <= right){
        for(let col = left; col <= right; col += 1){
            order[rowMajorIndex(top, col)] = t;
            t += 1;
        }
        for(let row = top + 1; row <= bottom; row += 1){
            order[rowMajorIndex(row, right)] = t;
            t += 1;
        }
        if (top < bottom) {
            for(let col = right - 1; col >= left; col -= 1){
                order[rowMajorIndex(bottom, col)] = t;
                t += 1;
            }
        }
        if (left < right) {
            for(let row = bottom - 1; row > top; row -= 1){
                order[rowMajorIndex(row, left)] = t;
                t += 1;
            }
        }
        top += 1;
        bottom -= 1;
        left += 1;
        right -= 1;
    }
    return order;
}
const SPIRAL_INWARD_ORDER = buildSpiralInwardOrderToIndexMap();
function spiralInwardNormFromIndex(index) {
    return SPIRAL_INWARD_ORDER[index] / (CELLS - 1);
}
function spiralInwardOrderValue(index) {
    return SPIRAL_INWARD_ORDER[index];
}
function buildOuterRingClockwiseOrderToIndexMap() {
    const order = new Array(CELLS).fill(-1);
    const coords = [
        [
            0,
            0
        ],
        [
            0,
            1
        ],
        [
            0,
            2
        ],
        [
            0,
            3
        ],
        [
            0,
            4
        ],
        [
            1,
            4
        ],
        [
            2,
            4
        ],
        [
            3,
            4
        ],
        [
            4,
            4
        ],
        [
            4,
            3
        ],
        [
            4,
            2
        ],
        [
            4,
            1
        ],
        [
            4,
            0
        ],
        [
            3,
            0
        ],
        [
            2,
            0
        ],
        [
            1,
            0
        ]
    ];
    for(let t = 0; t < coords.length; t += 1){
        const [row, col] = coords[t];
        order[rowMajorIndex(row, col)] = t;
    }
    return order;
}
function buildMiddleRingAntiClockwiseOrderToIndexMap() {
    const order = new Array(CELLS).fill(-1);
    const coords = [
        [
            1,
            1
        ],
        [
            2,
            1
        ],
        [
            3,
            1
        ],
        [
            3,
            2
        ],
        [
            3,
            3
        ],
        [
            2,
            3
        ],
        [
            1,
            3
        ],
        [
            1,
            2
        ]
    ];
    for(let t = 0; t < coords.length; t += 1){
        const [row, col] = coords[t];
        order[rowMajorIndex(row, col)] = t;
    }
    return order;
}
const OUTER_RING_CLOCKWISE_ORDER = buildOuterRingClockwiseOrderToIndexMap();
const MIDDLE_RING_ANTI_CLOCKWISE_ORDER = buildMiddleRingAntiClockwiseOrderToIndexMap();
function outerRingClockwiseOrderValue(index) {
    return OUTER_RING_CLOCKWISE_ORDER[index];
}
function outerRingClockwiseNormFromIndex(index) {
    const order = outerRingClockwiseOrderValue(index);
    return order >= 0 ? order / 15 : 0;
}
function middleRingAntiClockwiseOrderValue(index) {
    return MIDDLE_RING_ANTI_CLOCKWISE_ORDER[index];
}
function middleRingAntiClockwiseNormFromIndex(index) {
    const order = middleRingAntiClockwiseOrderValue(index);
    return order >= 0 ? order / 7 : 0;
}
function buildDiagonalSnakeOrderToIndexMap() {
    const order = new Array(CELLS);
    let t = 0;
    for(let diagonal = 0; diagonal <= (N - 1) * 2; diagonal += 1){
        const rowStart = Math.max(0, diagonal - (N - 1));
        const rowEnd = Math.min(N - 1, diagonal);
        if (diagonal % 2 === 0) {
            for(let row = rowEnd; row >= rowStart; row -= 1){
                const col = diagonal - row;
                order[rowMajorIndex(row, col)] = t;
                t += 1;
            }
        } else {
            for(let row = rowStart; row <= rowEnd; row += 1){
                const col = diagonal - row;
                order[rowMajorIndex(row, col)] = t;
                t += 1;
            }
        }
    }
    return order;
}
const DIAGONAL_SNAKE_ORDER = buildDiagonalSnakeOrderToIndexMap();
function diagonalSnakeOrderValue(index) {
    return DIAGONAL_SNAKE_ORDER[index];
}
function diagonalSnakeNormFromIndex(index) {
    return DIAGONAL_SNAKE_ORDER[index] / (CELLS - 1);
}
function buildRowWaveSnakeOrderToIndexMap() {
    const order = new Array(CELLS);
    const route = [
        {
            col: 0,
            dir: "up"
        },
        {
            col: 2,
            dir: "down"
        },
        {
            col: 1,
            dir: "up"
        },
        {
            col: 3,
            dir: "down"
        },
        {
            col: 2,
            dir: "up"
        },
        {
            col: 4,
            dir: "down"
        }
    ];
    let t = 0;
    for (const step of route){
        if (step.dir === "up") {
            for(let row = N - 1; row >= 0; row -= 1){
                order[rowMajorIndex(row, step.col)] = t;
                t += 1;
            }
        } else {
            for(let row = 0; row < N; row += 1){
                order[rowMajorIndex(row, step.col)] = t;
                t += 1;
            }
        }
    }
    return order;
}
const ROW_WAVE_SNAKE_ORDER = buildRowWaveSnakeOrderToIndexMap();
const ROW_WAVE_SNAKE_MAX_ORDER = Math.max(...ROW_WAVE_SNAKE_ORDER);
function rowWaveOrderValue(index) {
    return ROW_WAVE_SNAKE_ORDER[index];
}
function rowWaveNormFromIndex(index) {
    return ROW_WAVE_SNAKE_MAX_ORDER > 0 ? rowWaveOrderValue(index) / ROW_WAVE_SNAKE_MAX_ORDER : 0;
}
function colWaveNormFromIndex(index) {
    const { col } = indexToCoord(index);
    return N > 1 ? col / (N - 1) : 0;
}
function concentricRingNormFromIndex(index) {
    const { row, col } = indexToCoord(index);
    return Math.max(Math.abs(row - C), Math.abs(col - C)) / C;
}
const CORNER_COORDS = new Set([
    "0,0",
    "0,4",
    "4,0",
    "4,4"
]);
function isWithinCircularMask(row, col) {
    return !CORNER_COORDS.has(`${row},${col}`);
}
function stylePx(n) {
    return `${n}px`;
}
function styleOpacity(opacity) {
    return Math.round(opacity * 1e6) / 1e6;
}
const SOURCE_BASE_OPACITY = 0.08;
const SOURCE_MID_OPACITY = 0.34;
const SOURCE_PEAK_OPACITY = 0.94;
function lerpDmx(start, end, progress) {
    return start + (end - start) * progress;
}
function normalizeProgressDmx(value, start, end) {
    const span = end - start;
    if (Math.abs(span) < Number.EPSILON) {
        return 0;
    }
    return Math.min(1, Math.max(0, (value - start) / span));
}
function coerceOpacityDmx(value) {
    if (value == null || !Number.isFinite(value)) {
        return undefined;
    }
    return Math.min(1, Math.max(0, value));
}
function remapOpacityToTriplet(opacity, opacityBase, opacityMid, opacityPeak) {
    if (!Number.isFinite(opacity)) {
        return opacity;
    }
    const hasOverrides = opacityBase !== undefined || opacityMid !== undefined || opacityPeak !== undefined;
    const safeOpacity = Math.min(1, Math.max(0, opacity));
    if (!hasOverrides) {
        return safeOpacity;
    }
    const targetBase = coerceOpacityDmx(opacityBase) ?? SOURCE_BASE_OPACITY;
    const targetMid = coerceOpacityDmx(opacityMid) ?? SOURCE_MID_OPACITY;
    const targetPeak = coerceOpacityDmx(opacityPeak) ?? SOURCE_PEAK_OPACITY;
    if (safeOpacity <= SOURCE_BASE_OPACITY) {
        const progress = normalizeProgressDmx(safeOpacity, 0, SOURCE_BASE_OPACITY);
        return Math.min(1, Math.max(0, lerpDmx(0, targetBase, progress)));
    }
    if (safeOpacity <= SOURCE_MID_OPACITY) {
        const progress = normalizeProgressDmx(safeOpacity, SOURCE_BASE_OPACITY, SOURCE_MID_OPACITY);
        return Math.min(1, Math.max(0, lerpDmx(targetBase, targetMid, progress)));
    }
    if (safeOpacity <= SOURCE_PEAK_OPACITY) {
        const progress = normalizeProgressDmx(safeOpacity, SOURCE_MID_OPACITY, SOURCE_PEAK_OPACITY);
        return Math.min(1, Math.max(0, lerpDmx(targetMid, targetPeak, progress)));
    }
    const progress = normalizeProgressDmx(safeOpacity, SOURCE_PEAK_OPACITY, 1);
    return Math.min(1, Math.max(0, lerpDmx(targetPeak, 1, progress)));
}
const DMX_BLOOM_OPACITY_MIN = 0.6;
function opacityToBloomLevel(remappedOpacity) {
    return Math.max(0, Math.min(1, (remappedOpacity - DMX_BLOOM_OPACITY_MIN) / (1 - DMX_BLOOM_OPACITY_MIN)));
}
function remappedOpacityQualifiesForBloom(remappedOpacity) {
    return remappedOpacity >= DMX_BLOOM_OPACITY_MIN;
}
function clampHalo(value) {
    if (value == null || !Number.isFinite(value)) {
        return 0;
    }
    return Math.min(1, Math.max(0, value));
}
function dmxBloomRootActive(bloom, halo) {
    return bloom || clampHalo(halo) > 0;
}
function dmxBloomHaloSpreadClass(halo) {
    return clampHalo(halo) > 0 ? "dmx-bloom-halo" : false;
}
function dmxDotBloomParts(isActive, curveOpacity, bloom, halo, ob, om, op) {
    const haloN = clampHalo(halo);
    if (!isActive) {
        return {
            level: 0,
            bloomDot: false
        };
    }
    const remapped = remapOpacityToTriplet(curveOpacity, ob, om, op);
    const fromBloom = bloom ? opacityToBloomLevel(remapped) : 0;
    return {
        level: fromBloom,
        bloomDot: haloN > 0 || bloom && remappedOpacityQualifiesForBloom(remapped)
    };
}
function getMatrix5Layout(size, dotSize, cellPadding) {
    const n = MATRIX_SIZE;
    if (cellPadding != null) {
        const g = Math.max(0, cellPadding);
        const matrixSpan = dotSize * n + g * (n - 1);
        return {
            gap: g,
            matrixSpan
        };
    }
    const g = Math.max(1, Math.floor((size - dotSize * n) / (n - 1)));
    return {
        gap: g,
        matrixSpan: size
    };
}
function resolveDmxBoxOuterDim(options) {
    const b = options?.boxSize;
    const hasBox = b != null && b > 0 && Number.isFinite(b);
    if (!hasBox) {
        return {
            outerDim: 0,
            useWrapper: false
        };
    }
    const m = options?.minSize;
    if (m != null && m > 0 && Number.isFinite(m)) {
        return {
            outerDim: Math.max(b, m),
            useWrapper: true
        };
    }
    return {
        outerDim: b,
        useWrapper: true
    };
}
function clamp01Dmx(n) {
    if (n == null) {
        return;
    }
    if (!Number.isFinite(n)) {
        return;
    }
    return Math.min(1, Math.max(0, n));
}
function DotMatrixBase({ size = 24, dotSize = 3, color = "currentColor", colorPreset, speed = 1, ariaLabel = "Loading", className, pattern = "diamond", dotShape = "circle", muted = false, bloom = false, halo = 0, dotClassName, phase, reducedMotion = false, onMouseEnter, onMouseLeave, animationResolver, opacityBase, opacityMid, opacityPeak, cellPadding, boxSize, minSize }) {
    const patternIndexes = new Set(getPatternIndexes(pattern));
    const safeSpeed = speed > 0 ? speed : 1;
    const speedScale = 1 / safeSpeed;
    const { gap, matrixSpan } = getMatrix5Layout(size, dotSize, cellPadding);
    const { outerDim, useWrapper } = resolveDmxBoxOuterDim({
        boxSize,
        minSize
    });
    const scale = useWrapper && matrixSpan > 0 ? outerDim / matrixSpan : 1;
    const center = Math.floor(MATRIX_SIZE / 2);
    const ob = clamp01Dmx(opacityBase);
    const om = clamp01Dmx(opacityMid);
    const op = clamp01Dmx(opacityPeak);
    const unit = dotSize + gap;
    const { resolvedColor, dotFill } = resolveDmxColorTokens(color, colorPreset);
    const dmxVarStyle = {
        width: matrixSpan,
        height: matrixSpan,
        "--dmx-speed": speedScale,
        ["--dmx-dot-size"]: `${dotSize}px`,
        ["--dmx-halo-level"]: halo,
        ["--dmx-dot-fill"]: dotFill,
        color: resolvedColor,
        ...ob !== undefined && {
            ["--dmx-opacity-base"]: ob
        },
        ...om !== undefined && {
            ["--dmx-opacity-mid"]: om
        },
        ...op !== undefined && {
            ["--dmx-opacity-peak"]: op
        },
        ...useWrapper ? {
            transform: `scale(${scale})`,
            transformOrigin: "center center"
        } : {
            minWidth: minSize,
            minHeight: minSize
        }
    };
    const dots = Array.from({
        length: MATRIX_SIZE * MATRIX_SIZE
    }).map((_, index)=>{
        const { row, col } = indexToCoord(index);
        const isActive = patternIndexes.has(index);
        const distance = distanceFromCenter(index);
        const angle = polarAngle(index);
        const radiusNormalizedValue = normalizedRadius(index);
        const manhattan = manhattanDistance(index);
        const deltaX = (col - center) * unit;
        const deltaY = (row - center) * unit;
        const animationState = animationResolver ? animationResolver({
            index,
            row,
            col,
            distanceFromCenter: distance,
            angleFromCenter: angle,
            radiusNormalized: radiusNormalizedValue,
            manhattanDistance: manhattan,
            phase,
            isActive,
            reducedMotion
        }) : {};
        const resolvedAnimationStyle = animationState.style ? {
            ...animationState.style
        } : undefined;
        let isBloomDot = false;
        let stylePatch = resolvedAnimationStyle;
        if (isActive) {
            const rawOpacity = stylePatch?.opacity;
            if (stylePatch != null && typeof rawOpacity === "number") {
                const remappedOpacity = remapOpacityToTriplet(rawOpacity, ob, om, op);
                stylePatch = {
                    ...stylePatch,
                    opacity: remappedOpacity
                };
                const parts = dmxDotBloomParts(true, rawOpacity, bloom, halo, ob, om, op);
                stylePatch["--dmx-bloom-level"] = parts.level;
                isBloomDot = parts.bloomDot;
            } else {
                const parts = dmxDotBloomParts(true, 0, bloom, halo, ob, om, op);
                if (parts.level > 0) {
                    stylePatch = {
                        ...stylePatch ?? {},
                        ["--dmx-bloom-level"]: parts.level
                    };
                }
                isBloomDot = parts.bloomDot;
            }
        }
        const dotStyle = {
            width: dotSize,
            height: dotSize,
            "--dmx-distance": distance,
            "--dmx-row": row,
            "--dmx-col": col,
            "--dmx-x": `${deltaX}px`,
            "--dmx-y": `${deltaY}px`,
            "--dmx-angle": angle,
            "--dmx-radius": radiusNormalizedValue,
            "--dmx-manhattan": manhattan,
            ...stylePatch,
            ...!isActive ? {
                opacity: 0,
                visibility: "hidden",
                pointerEvents: "none",
                animation: "none"
            } : {}
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": "true",
            className: cx("dmx-dot", !isActive && "dmx-inactive", isBloomDot && "dmx-bloom-dot", dotClassName, animationState.className),
            style: dotStyle
        }, index, false, {
            fileName: "[project]/lib/dotmatrix-core.tsx",
            lineNumber: 823,
            columnNumber: 7
        }, this);
    });
    const matrix = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx("dmx-root", `dmx-dot-shape-${dotShape}`, muted && "dmx-muted", dmxBloomRootActive(bloom, halo) && "dmx-bloom", dmxBloomHaloSpreadClass(halo), !useWrapper && className),
        style: dmxVarStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "dmx-grid",
            style: {
                gap
            },
            children: dots
        }, void 0, false, {
            fileName: "[project]/lib/dotmatrix-core.tsx",
            lineNumber: 850,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/lib/dotmatrix-core.tsx",
        lineNumber: 839,
        columnNumber: 5
    }, this);
    if (useWrapper) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "status",
            "aria-live": "polite",
            "aria-label": ariaLabel,
            className: className,
            style: {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: outerDim,
                height: outerDim,
                minWidth: minSize,
                minHeight: minSize,
                overflow: "hidden"
            },
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            children: matrix
        }, void 0, false, {
            fileName: "[project]/lib/dotmatrix-core.tsx",
            lineNumber: 856,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "status",
        "aria-live": "polite",
        "aria-label": ariaLabel,
        className: cx("dmx-root", `dmx-dot-shape-${dotShape}`, muted && "dmx-muted", dmxBloomRootActive(bloom, halo) && "dmx-bloom", dmxBloomHaloSpreadClass(halo), className),
        style: dmxVarStyle,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "dmx-grid",
            style: {
                gap
            },
            children: dots
        }, void 0, false, {
            fileName: "[project]/lib/dotmatrix-core.tsx",
            lineNumber: 896,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/lib/dotmatrix-core.tsx",
        lineNumber: 880,
        columnNumber: 5
    }, this);
}
const MATRIX_SIZE_3 = 3;
const CENTER_3 = Math.floor(MATRIX_SIZE_3 / 2);
const RANGE_3 = Array.from({
    length: MATRIX_SIZE_3
}, (_, index)=>index);
const MAX_RADIUS_3 = Math.hypot(CENTER_3, CENTER_3);
const FULL_INDEXES_3 = RANGE_3.flatMap((row)=>RANGE_3.map((col)=>rowMajorIndex3(row, col)));
const OUTLINE_INDEXES_3 = FULL_INDEXES_3.filter((index)=>{
    const { row, col } = indexToCoord3(index);
    return row === 0 || row === MATRIX_SIZE_3 - 1 || col === 0 || col === MATRIX_SIZE_3 - 1;
});
const DIAMOND_INDEXES_3 = FULL_INDEXES_3.filter((index)=>{
    const { row, col } = indexToCoord3(index);
    return Math.abs(row - CENTER_3) + Math.abs(col - CENTER_3) <= 1;
});
const CROSS_INDEXES_3 = FULL_INDEXES_3.filter((index)=>{
    const { row, col } = indexToCoord3(index);
    return row === CENTER_3 || col === CENTER_3;
});
const RINGS_INDEXES_3 = FULL_INDEXES_3.filter((index)=>{
    const { row, col } = indexToCoord3(index);
    return Math.round(Math.hypot(row - CENTER_3, col - CENTER_3)) === 1;
});
const ROSE_INDEXES_3 = FULL_INDEXES_3.filter((index)=>{
    const { row, col } = indexToCoord3(index);
    const dx = col - CENTER_3;
    const dy = row - CENTER_3;
    const angle = Math.atan2(dy, dx);
    const radius = Math.hypot(dx, dy);
    const rose = Math.abs(Math.sin(3 * angle));
    return rose > 0.55 && radius >= 0.75;
});
const PATTERN_INDEXES_3 = {
    diamond: DIAMOND_INDEXES_3,
    full: FULL_INDEXES_3,
    outline: OUTLINE_INDEXES_3,
    rose: ROSE_INDEXES_3,
    cross: CROSS_INDEXES_3,
    rings: RINGS_INDEXES_3
};
function getPattern3Indexes(pattern = "full") {
    return PATTERN_INDEXES_3[pattern];
}
function rowMajorIndex3(row, col) {
    return row * MATRIX_SIZE_3 + col;
}
function indexToCoord3(index) {
    return {
        row: Math.floor(index / MATRIX_SIZE_3),
        col: index % MATRIX_SIZE_3
    };
}
function distanceFromCenter3(index) {
    const { row, col } = indexToCoord3(index);
    return Math.hypot(row - CENTER_3, col - CENTER_3);
}
function manhattanDistance3(index) {
    const { row, col } = indexToCoord3(index);
    return Math.abs(row - CENTER_3) + Math.abs(col - CENTER_3);
}
const MAX_DIAGONAL_3 = (MATRIX_SIZE_3 - 1) * 2;
function trBlPath3NormFromIndex(index) {
    const { row, col } = indexToCoord3(index);
    return (row + (MATRIX_SIZE_3 - 1 - col)) / MAX_DIAGONAL_3;
}
function tlBrPath3NormFromIndex(index) {
    const { row, col } = indexToCoord3(index);
    return (row + col) / MAX_DIAGONAL_3;
}
function brTlPath3NormFromIndex(index) {
    const { row, col } = indexToCoord3(index);
    return (MAX_DIAGONAL_3 - row - col) / MAX_DIAGONAL_3;
}
function blTrPath3NormFromIndex(index) {
    const { row, col } = indexToCoord3(index);
    return (MAX_DIAGONAL_3 - row - (MATRIX_SIZE_3 - 1 - col)) / MAX_DIAGONAL_3;
}
const DIAGONAL_PATH_3 = {
    "tr-bl": trBlPath3NormFromIndex,
    "tl-br": tlBrPath3NormFromIndex,
    "br-tl": brTlPath3NormFromIndex,
    "bl-tr": blTrPath3NormFromIndex
};
function diagonalWave3PathNormFromIndex(index, direction) {
    return DIAGONAL_PATH_3[direction](index);
}
function diagonalWave3BandIndex(row, col, direction) {
    if (direction === "tr-bl" || direction === "bl-tr") {
        return row + (MATRIX_SIZE_3 - 1 - col);
    }
    return row + col;
}
function buildSpiralInwardOrderToIndexMap3() {
    const N = MATRIX_SIZE_3;
    const CELLS = N * N;
    const order = new Array(CELLS);
    let top = 0;
    let bottom = N - 1;
    let left = 0;
    let right = N - 1;
    let t = 0;
    while(top <= bottom && left <= right){
        for(let col = left; col <= right; col += 1){
            order[rowMajorIndex3(top, col)] = t;
            t += 1;
        }
        for(let row = top + 1; row <= bottom; row += 1){
            order[rowMajorIndex3(row, right)] = t;
            t += 1;
        }
        if (top < bottom) {
            for(let col = right - 1; col >= left; col -= 1){
                order[rowMajorIndex3(bottom, col)] = t;
                t += 1;
            }
        }
        if (left < right) {
            for(let row = bottom - 1; row > top; row -= 1){
                order[rowMajorIndex3(row, left)] = t;
                t += 1;
            }
        }
        top += 1;
        bottom -= 1;
        left += 1;
        right -= 1;
    }
    return order;
}
const SPIRAL_INWARD_ORDER_3 = buildSpiralInwardOrderToIndexMap3();
function spiralInward3NormFromIndex(index) {
    return SPIRAL_INWARD_ORDER_3[index] / (MATRIX_SIZE_3 * MATRIX_SIZE_3 - 1);
}
function spiralInward3OrderValue(index) {
    return SPIRAL_INWARD_ORDER_3[index];
}
function buildOuterRingClockwiseOrder3() {
    const order = new Array(MATRIX_SIZE_3 * MATRIX_SIZE_3).fill(-1);
    const path = [
        [
            0,
            0
        ],
        [
            0,
            1
        ],
        [
            0,
            2
        ],
        [
            1,
            2
        ],
        [
            2,
            2
        ],
        [
            2,
            1
        ],
        [
            2,
            0
        ],
        [
            1,
            0
        ]
    ];
    path.forEach(([row, col], step)=>{
        order[rowMajorIndex3(row, col)] = step;
    });
    return order;
}
const OUTER_RING_CLOCKWISE_ORDER_3 = buildOuterRingClockwiseOrder3();
function outerRingClockwise3OrderValue(index) {
    return OUTER_RING_CLOCKWISE_ORDER_3[index];
}
function outerRingClockwise3NormFromIndex(index) {
    const order = OUTER_RING_CLOCKWISE_ORDER_3[index];
    if (order < 0) {
        return 0;
    }
    return order / 7;
}
function isCenterCell3(row, col) {
    const center = Math.floor(MATRIX_SIZE_3 / 2);
    return row === center && col === center;
}
function rowWave3NormFromRow(row) {
    return row / (MATRIX_SIZE_3 - 1);
}
function colWave3NormFromCol(col) {
    return col / (MATRIX_SIZE_3 - 1);
}
function colWave3NormFromColReverse(col) {
    return (MATRIX_SIZE_3 - 1 - col) / (MATRIX_SIZE_3 - 1);
}
function wave3PathOpacityFromNorm(norm, base = 0.06, mid = 0.38, peak = 0.88) {
    const t = Math.min(1, Math.max(0, norm));
    if (t <= 0.5) {
        return base + t / 0.5 * (mid - base);
    }
    return mid + (t - 0.5) / 0.5 * (peak - mid);
}
function getMatrix3Layout(size, dotSize, cellPadding) {
    const n = MATRIX_SIZE_3;
    if (cellPadding != null) {
        const g = Math.max(0, cellPadding);
        const matrixSpan = dotSize * n + g * (n - 1);
        return {
            gap: g,
            matrixSpan
        };
    }
    const g = Math.max(0, Math.floor((size - dotSize * n) / (n - 1)));
    return {
        gap: g,
        matrixSpan: size
    };
}
function DotMatrix3Base({ size = 24, dotSize = 3, color = "currentColor", colorPreset, speed = 1, ariaLabel = "Loading", className, pattern = "full", dotShape = "circle", muted = false, bloom = false, halo = 0, dotClassName, phase, reducedMotion = false, onMouseEnter, onMouseLeave, animationResolver, opacityBase = 0.06, opacityMid, opacityPeak, cellPadding = 1, boxSize, minSize }) {
    const patternIndexes = new Set(getPattern3Indexes(pattern));
    const safeSpeed = speed > 0 ? speed : 1;
    const speedScale = 1 / safeSpeed;
    const { gap, matrixSpan } = getMatrix3Layout(size, dotSize, cellPadding);
    const { outerDim, useWrapper } = resolveDmxBoxOuterDim({
        boxSize,
        minSize
    });
    const scale = useWrapper && matrixSpan > 0 ? outerDim / matrixSpan : 1;
    const center = CENTER_3;
    const ob = clamp01Dmx(opacityBase);
    const om = clamp01Dmx(opacityMid);
    const op = clamp01Dmx(opacityPeak);
    const unit = dotSize + gap;
    const { resolvedColor, dotFill } = resolveDmxColorTokens(color, colorPreset);
    const dmxVarStyle = {
        width: matrixSpan,
        height: matrixSpan,
        "--dmx-speed": speedScale,
        ["--dmx-dot-size"]: `${dotSize}px`,
        ["--dmx-halo-level"]: halo,
        ["--dmx-dot-fill"]: dotFill,
        color: resolvedColor,
        ...ob !== undefined && {
            ["--dmx-opacity-base"]: ob
        },
        ...om !== undefined && {
            ["--dmx-opacity-mid"]: om
        },
        ...op !== undefined && {
            ["--dmx-opacity-peak"]: op
        },
        ...useWrapper ? {
            transform: `scale(${scale})`,
            transformOrigin: "center center"
        } : {
            minWidth: minSize,
            minHeight: minSize
        }
    };
    const gridStyle = {
        gap,
        gridTemplateColumns: `repeat(${MATRIX_SIZE_3}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${MATRIX_SIZE_3}, minmax(0, 1fr))`
    };
    const dots = Array.from({
        length: MATRIX_SIZE_3 * MATRIX_SIZE_3
    }).map((_, index)=>{
        const { row, col } = indexToCoord3(index);
        const isActive = patternIndexes.has(index);
        const distance = distanceFromCenter3(index);
        const angle = Math.atan2(row - center, col - center);
        const radiusNormalizedValue = Math.hypot(row - center, col - center) / MAX_RADIUS_3;
        const manhattan = manhattanDistance3(index);
        const deltaX = (col - center) * unit;
        const deltaY = (row - center) * unit;
        const animationState = animationResolver ? animationResolver({
            index,
            row,
            col,
            distanceFromCenter: distance,
            angleFromCenter: angle,
            radiusNormalized: radiusNormalizedValue,
            manhattanDistance: manhattan,
            phase,
            isActive,
            reducedMotion
        }) : {};
        const resolvedAnimationStyle = animationState.style ? {
            ...animationState.style
        } : undefined;
        let isBloomDot = false;
        let stylePatch = resolvedAnimationStyle;
        if (isActive) {
            const rawOpacity = stylePatch?.opacity;
            if (stylePatch != null && typeof rawOpacity === "number") {
                const remappedOpacity = remapOpacityToTriplet(rawOpacity, ob, om, op);
                stylePatch = {
                    ...stylePatch,
                    opacity: remappedOpacity
                };
                const parts = dmxDotBloomParts(true, rawOpacity, bloom, halo, ob, om, op);
                stylePatch["--dmx-bloom-level"] = parts.level;
                isBloomDot = parts.bloomDot;
            } else {
                const parts = dmxDotBloomParts(true, 0, bloom, halo, ob, om, op);
                if (parts.level > 0) {
                    stylePatch = {
                        ...stylePatch ?? {},
                        ["--dmx-bloom-level"]: parts.level
                    };
                }
                isBloomDot = parts.bloomDot;
            }
        }
        const dotStyle = {
            width: dotSize,
            height: dotSize,
            "--dmx-distance": distance,
            "--dmx-row": row,
            "--dmx-col": col,
            "--dmx-x": `${deltaX}px`,
            "--dmx-y": `${deltaY}px`,
            "--dmx-angle": angle,
            "--dmx-radius": radiusNormalizedValue,
            "--dmx-manhattan": manhattan,
            ...stylePatch,
            ...!isActive ? {
                opacity: 0,
                visibility: "hidden",
                pointerEvents: "none",
                animation: "none"
            } : {}
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": "true",
            className: cx("dmx-dot", !isActive && "dmx-inactive", isBloomDot && "dmx-bloom-dot", dotClassName, animationState.className),
            style: dotStyle
        }, index, false, {
            fileName: "[project]/lib/dotmatrix-core.tsx",
            lineNumber: 1301,
            columnNumber: 7
        }, this);
    });
    const matrix = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx("dmx-root", "dmx-matrix-3", `dmx-dot-shape-${dotShape}`, muted && "dmx-muted", dmxBloomRootActive(bloom, halo) && "dmx-bloom", dmxBloomHaloSpreadClass(halo), !useWrapper && className),
        style: dmxVarStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "dmx-grid",
            style: gridStyle,
            children: dots
        }, void 0, false, {
            fileName: "[project]/lib/dotmatrix-core.tsx",
            lineNumber: 1329,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/lib/dotmatrix-core.tsx",
        lineNumber: 1317,
        columnNumber: 5
    }, this);
    if (useWrapper) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "status",
            "aria-live": "polite",
            "aria-label": ariaLabel,
            className: className,
            style: {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: outerDim,
                height: outerDim,
                minWidth: minSize,
                minHeight: minSize,
                overflow: "hidden"
            },
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            children: matrix
        }, void 0, false, {
            fileName: "[project]/lib/dotmatrix-core.tsx",
            lineNumber: 1335,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "status",
        "aria-live": "polite",
        "aria-label": ariaLabel,
        className: cx("dmx-root", "dmx-matrix-3", `dmx-dot-shape-${dotShape}`, muted && "dmx-muted", dmxBloomRootActive(bloom, halo) && "dmx-bloom", dmxBloomHaloSpreadClass(halo), className),
        style: dmxVarStyle,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "dmx-grid",
            style: gridStyle,
            children: dots
        }, void 0, false, {
            fileName: "[project]/lib/dotmatrix-core.tsx",
            lineNumber: 1376,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/lib/dotmatrix-core.tsx",
        lineNumber: 1359,
        columnNumber: 5
    }, this);
}
function createPathWaveResolver(getPathNorm) {
    return ({ isActive, row, col, index, reducedMotion, phase })=>{
        if (!isActive) {
            return {
                className: "dmx-inactive"
            };
        }
        const path = getPathNorm({
            row,
            col,
            index
        });
        const style = {
            "--dmx-path": path
        };
        if (reducedMotion || phase === "idle") {
            return {
                style: {
                    ...style,
                    opacity: 0.12 + path * 0.72
                }
            };
        }
        return {
            className: "dmx-path",
            style
        };
    };
}
function createPathWaveComponent(displayName, getPathNorm) {
    const resolve = createPathWaveResolver(getPathNorm);
    function PathWaveComponent({ pattern = "full", animated = true, hoverAnimated = false, speed = 1, ...rest }) {
        const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
        const { phase: matrixPhase, onMouseEnter, onMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDotMatrixPhases"])({
            animated: Boolean(animated && !reducedMotion),
            hoverAnimated: Boolean(hoverAnimated && !reducedMotion),
            speed
        });
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DotMatrixBase, {
            ...rest,
            speed: speed,
            pattern: pattern,
            animated: animated,
            phase: matrixPhase,
            reducedMotion: reducedMotion,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            animationResolver: resolve
        }, void 0, false, {
            fileName: "[project]/lib/dotmatrix-core.tsx",
            lineNumber: 1424,
            columnNumber: 7
        }, this);
    }
    PathWaveComponent.displayName = displayName;
    return PathWaveComponent;
}
function createDiagonalWave3Resolver(direction) {
    return ({ isActive, index, reducedMotion, phase })=>{
        if (!isActive) {
            return {
                className: "dmx-inactive"
            };
        }
        const path = diagonalWave3PathNormFromIndex(index, direction);
        const style = {
            "--dmx-path": path
        };
        if (reducedMotion || phase === "idle") {
            return {
                style: {
                    ...style,
                    opacity: path * 0.88
                }
            };
        }
        return {
            className: "dmx-path-3",
            style
        };
    };
}
function createDiagonalWave3Component(displayName, direction) {
    const resolve = createDiagonalWave3Resolver(direction);
    function DiagonalWave3Component({ pattern = "full", animated = true, hoverAnimated = false, speed = 1.15, ...rest }) {
        const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
        const { phase: matrixPhase, onMouseEnter, onMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDotMatrixPhases"])({
            animated: Boolean(animated && !reducedMotion),
            hoverAnimated: Boolean(hoverAnimated && !reducedMotion),
            speed
        });
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DotMatrix3Base, {
            ...rest,
            speed: speed,
            pattern: pattern,
            animated: animated,
            phase: matrixPhase,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            reducedMotion: reducedMotion,
            animationResolver: resolve
        }, void 0, false, {
            fileName: "[project]/lib/dotmatrix-core.tsx",
            lineNumber: 1487,
            columnNumber: 7
        }, this);
    }
    DiagonalWave3Component.displayName = displayName;
    return DiagonalWave3Component;
}
function createDotm3x3Component(displayName, animationResolver, defaultSpeed = 1.15) {
    function Dotm3x3Component({ pattern = "full", dotShape = "circle", animated = true, hoverAnimated = false, speed = defaultSpeed, ...rest }) {
        const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
        const { phase: matrixPhase, onMouseEnter, onMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDotMatrixPhases"])({
            animated: Boolean(animated && !reducedMotion),
            hoverAnimated: Boolean(hoverAnimated && !reducedMotion),
            speed
        });
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DotMatrix3Base, {
            ...rest,
            speed: speed,
            pattern: pattern,
            dotShape: dotShape,
            animated: animated,
            phase: matrixPhase,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            reducedMotion: reducedMotion,
            animationResolver: animationResolver
        }, void 0, false, {
            fileName: "[project]/lib/dotmatrix-core.tsx",
            lineNumber: 1528,
            columnNumber: 7
        }, this);
    }
    Dotm3x3Component.displayName = displayName;
    return Dotm3x3Component;
}
const GLYPH_SPIN_BASE_OPACITY = 0.09;
const GLYPH_SPIN_PEAK_OPACITY = 0.88;
const GLYPH_SPIN_STEP_MS = 180;
const GLYPH_SPIN_ROTATION_STEPS = 4;
const GLYPH_SPIN_CYCLE_MS_BASE = GLYPH_SPIN_STEP_MS * GLYPH_SPIN_ROTATION_STEPS;
function glyphSpinSmoothstep(value) {
    const t = Math.min(1, Math.max(0, value));
    return t * t * (3 - 2 * t);
}
function rotate3x3(pattern, turns) {
    const t = (turns % GLYPH_SPIN_ROTATION_STEPS + GLYPH_SPIN_ROTATION_STEPS) % GLYPH_SPIN_ROTATION_STEPS;
    if (t === 0) {
        return pattern;
    }
    let out = [
        ...pattern
    ];
    for(let k = 0; k < t; k += 1){
        const next = new Array(9).fill(0);
        for(let i = 0; i < 9; i += 1){
            const r = Math.floor(i / 3);
            const c = i % 3;
            const nr = c;
            const nc = 2 - r;
            next[nr * 3 + nc] = out[i];
        }
        out = next;
    }
    return out;
}
function glyphSpinOpacity(current, next, index, t) {
    const weight = (current[index] ?? 0) * (1 - t) + (next[index] ?? 0) * t;
    return GLYPH_SPIN_BASE_OPACITY + weight * (GLYPH_SPIN_PEAK_OPACITY - GLYPH_SPIN_BASE_OPACITY);
}
function createGlyphSpin3Component(displayName, glyph, defaultSpeed = 1) {
    function GlyphSpin3Component({ speed = defaultSpeed, pattern = "full", dotShape = "circle", animated = true, hoverAnimated = false, ...rest }) {
        const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
        const { phase: matrixPhase, onMouseEnter, onMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDotMatrixPhases"])({
            animated: Boolean(animated && !reducedMotion),
            hoverAnimated: Boolean(hoverAnimated && !reducedMotion),
            speed
        });
        const cyclePhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dotmatrix$2d$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCyclePhase"])({
            active: !reducedMotion && matrixPhase !== "idle",
            cycleMsBase: GLYPH_SPIN_CYCLE_MS_BASE,
            speed
        });
        const animationResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            const scaledPhase = cyclePhase * GLYPH_SPIN_ROTATION_STEPS;
            const turns = Math.floor(scaledPhase) % GLYPH_SPIN_ROTATION_STEPS;
            const segmentT = glyphSpinSmoothstep(scaledPhase - Math.floor(scaledPhase));
            const current = rotate3x3(glyph, turns);
            const next = rotate3x3(glyph, turns + 1);
            return ({ isActive, index, reducedMotion: rm, phase })=>{
                if (!isActive) {
                    return {
                        className: "dmx-inactive"
                    };
                }
                if (rm || phase === "idle") {
                    return {
                        style: {
                            opacity: glyphSpinOpacity(glyph, glyph, index, 0)
                        }
                    };
                }
                return {
                    style: {
                        opacity: glyphSpinOpacity(current, next, index, segmentT)
                    }
                };
            };
        }, [
            cyclePhase
        ]);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DotMatrix3Base, {
            ...rest,
            speed: speed,
            pattern: pattern,
            dotShape: dotShape,
            animated: animated,
            phase: matrixPhase,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            reducedMotion: reducedMotion,
            animationResolver: animationResolver
        }, void 0, false, {
            fileName: "[project]/lib/dotmatrix-core.tsx",
            lineNumber: 1632,
            columnNumber: 7
        }, this);
    }
    GlyphSpin3Component.displayName = displayName;
    return GlyphSpin3Component;
}
}),
"[project]/lib/dotmatrix-hooks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCyclePhase",
    ()=>useCyclePhase,
    "useDotMatrixPhases",
    ()=>useDotMatrixPhases,
    "usePrefersReducedMotion",
    ()=>usePrefersReducedMotion,
    "useSteppedCycle",
    ()=>useSteppedCycle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const query = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = ()=>{
            setPrefersReducedMotion(query.matches);
        };
        update();
        query.addEventListener("change", update);
        return ()=>{
            query.removeEventListener("change", update);
        };
    }, []);
    return prefersReducedMotion;
}
function useCyclePhase({ active, cycleMsBase, speed = 1 }) {
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!active) {
            setPhase(0);
            return;
        }
        const safeSpeed = speed > 0 ? speed : 1;
        const raw = cycleMsBase / safeSpeed;
        const cycleMs = raw > 0 && Number.isFinite(raw) ? raw : 1000;
        const start = performance.now();
        let rafId = 0;
        const tick = (now)=>{
            const elapsed = ((now - start) % cycleMs + cycleMs) % cycleMs;
            setPhase(elapsed / cycleMs);
            rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);
        return ()=>cancelAnimationFrame(rafId);
    }, [
        active,
        cycleMsBase,
        speed
    ]);
    return phase;
}
const listeners = new Set();
let rafId = null;
function emit(now) {
    listeners.forEach((listener)=>{
        listener(now);
    });
}
function tick(now) {
    emit(now);
    if (listeners.size > 0) {
        rafId = window.requestAnimationFrame(tick);
    } else {
        rafId = null;
    }
}
function subscribeFrame(listener) {
    listeners.add(listener);
    if (rafId === null) {
        rafId = window.requestAnimationFrame(tick);
    }
    return ()=>{
        listeners.delete(listener);
        if (listeners.size === 0 && rafId !== null) {
            window.cancelAnimationFrame(rafId);
            rafId = null;
        }
    };
}
function useSteppedCycle({ active, cycleMsBase, steps, speed = 1, idleStep = 0 }) {
    const safeSteps = Math.max(1, Math.floor(steps));
    const safeSpeed = speed > 0 ? speed : 1;
    const rawCycleMs = cycleMsBase / safeSpeed;
    const rawStepMs = rawCycleMs / safeSteps;
    const stepMs = rawStepMs > 0 && Number.isFinite(rawStepMs) ? rawStepMs : 1;
    const cycleMs = stepMs * safeSteps;
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>active ? 0 : idleStep);
    const startMsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const activeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const currentStepRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(idleStep);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!active) {
            activeRef.current = false;
            currentStepRef.current = idleStep;
            setStep(idleStep);
            return;
        }
        const updateStep = (now)=>{
            if (!activeRef.current) {
                startMsRef.current = now;
                activeRef.current = true;
            }
            const elapsed = Math.max(0, now - startMsRef.current);
            const nextStep = Math.floor(elapsed % cycleMs / stepMs) % safeSteps;
            if (nextStep !== currentStepRef.current) {
                currentStepRef.current = nextStep;
                setStep(nextStep);
            }
        };
        updateStep(performance.now());
        return subscribeFrame(updateStep);
    }, [
        active,
        cycleMs,
        idleStep,
        safeSteps,
        stepMs
    ]);
    return active ? step : idleStep;
}
function useDotMatrixPhases({ animated = false, hoverAnimated = false, speed = 1 }) {
    const safeSpeed = speed > 0 ? speed : 1;
    const autoRun = Boolean(animated && !hoverAnimated);
    const [hoverPhase, setHoverPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const timeouts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const hoverGen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const clearTimers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        for(let i = 0; i < timeouts.current.length; i += 1){
            window.clearTimeout(timeouts.current[i]);
        }
        timeouts.current = [];
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        hoverGen.current += 1;
        clearTimers();
        return clearTimers;
    }, [
        autoRun,
        hoverAnimated,
        clearTimers
    ]);
    const onMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!hoverAnimated || autoRun) {
            return;
        }
        clearTimers();
        const gen = ++hoverGen.current;
        setHoverPhase("collapse");
        const collapseMs = Math.max(1, Math.round(300 / safeSpeed));
        const id = window.setTimeout(()=>{
            if (hoverGen.current !== gen) {
                return;
            }
            setHoverPhase("hoverRipple");
        }, collapseMs);
        timeouts.current.push(id);
    }, [
        hoverAnimated,
        autoRun,
        safeSpeed,
        clearTimers
    ]);
    const onMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!hoverAnimated || autoRun) {
            return;
        }
        hoverGen.current += 1;
        clearTimers();
        setHoverPhase("idle");
    }, [
        hoverAnimated,
        autoRun,
        clearTimers
    ]);
    const phase = autoRun ? "loadingRipple" : hoverAnimated ? hoverPhase : "idle";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            phase,
            onMouseEnter,
            onMouseLeave
        }), [
        phase,
        onMouseEnter,
        onMouseLeave
    ]);
}
}),
];

//# sourceMappingURL=_0_os05p._.js.map