import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const PillNav = ({
  logo,
  logoAlt = "Logo",
  items = [],
  className = "",
  ease = "power3.easeOut",
  baseColor = "#fff",
  pillColor = "#060010",
  hoveredPillTextColor = "#060010",
  pillTextColor,
  initialLoadAnimation = true,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoImgRef = useRef(null);
  const logoRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // GSAP Layout setup
  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;
        const pill = circle.parentElement;
        const { width: w, height: h } = pill.getBoundingClientRect();
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${originY}px` });

        const label = pill.querySelector(".pill-label");
        const white = pill.querySelector(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" }, 0);
        if (label) tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: "auto" }, 0);
        if (white) tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" }, 0);

        tlRefs.current[index] = tl;
      });
    };

    layout();
    window.addEventListener("resize", layout);

    if (initialLoadAnimation) {
      const logo = logoRef.current;
      if (logo) {
        gsap.set(logo, { scale: 0 });
        gsap.to(logo, { scale: 1, duration: 0.6, ease });
      }
    }

    return () => window.removeEventListener("resize", layout);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease, overwrite: "auto" });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease, overwrite: "auto" });
  };

  // Scroll smoothly to section
  const handleScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileOpen(false);
    }
  };

  // Toggle mobile menu with GSAP
  const toggleMobileMenu = () => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (!isMobileOpen) {
      setIsMobileOpen(true);
      gsap.set(menu, { display: "block", opacity: 0, y: -20 });
      gsap.to(menu, { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" });
    } else {
      gsap.to(menu, {
        opacity: 0,
        y: -20,
        duration: 0.2,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(menu, { display: "none" });
          setIsMobileOpen(false);
        },
      });
    }
  };

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--pill-text"]: resolvedPillTextColor,
    ["--nav-h"]: "42px",
    ["--logo"]: "36px",
    ["--pill-pad-x"]: "18px",
    ["--pill-gap"]: "3px",
  };

  return (
    <div className="absolute top-[1em] z-[1000] w-full md:w-auto md:left-auto">
      <nav
        className={`w-full md:w-max flex items-center justify-between md:justify-start box-border px-4 md:px-0 ${className}`}
        aria-label="Primary"
        style={cssVars}
      >
        {/* Logo */}
        <div
          ref={logoRef}
          onMouseEnter={() => gsap.to(logoImgRef.current, { rotate: 360, duration: 0.2 })}
          className="rounded-full p-2 inline-flex items-center justify-center overflow-hidden cursor-pointer"
          style={{ width: "var(--nav-h)", height: "var(--nav-h)", background: "var(--base, #000)" }}
        >
          <img src={logo} alt={logoAlt} ref={logoImgRef} className="w-full h-full object-cover block" />
        </div>

        {/* Pills (Desktop) */}
        <ul
          className="relative items-center rounded-full hidden md:flex ml-2 list-none flex-row gap-[var(--pill-gap)]"
          style={{ height: "var(--nav-h)" }}
        >
          {items.map((item, i) => {
            const pillStyle = {
              background: "var(--pill-bg, #fff)",
              color: "var(--pill-text, var(--base, #000))",
              paddingLeft: "var(--pill-pad-x)",
              paddingRight: "var(--pill-pad-x)",
            };

            return (
              <li key={item.targetId || item.label} className="relative h-full flex">
                <button
                  onClick={() => handleScrollTo(item.targetId)}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                  className="relative overflow-hidden inline-flex items-center justify-center h-full font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer rounded-full px-0"
                  style={pillStyle}
                >
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    ref={(el) => (circleRefs.current[i] = el)}
                    style={{ background: "var(--base, #000)" }}
                  />
                  <span className="label-stack relative inline-block leading-[1] z-[2]">
                    <span className="pill-label relative z-[2] inline-block leading-[1]">{item.label}</span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                      style={{ color: "var(--hover-text, #fff)" }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center gap-1 p-2 rounded-full bg-black"
        >
          <span className="w-5 h-0.5 bg-white block"></span>
          <span className="w-5 h-0.5 bg-white block"></span>
          <span className="w-5 h-0.5 bg-white block"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div ref={mobileMenuRef} className="md:hidden absolute top-14 left-4 right-4 bg-black rounded-lg shadow-lg hidden">
        <ul className="flex flex-col gap-2 p-4">
          {items.map((item) => (
            <li key={item.targetId || item.label}>
              <button
                onClick={() => handleScrollTo(item.targetId)}
                className="w-full text-left px-4 py-2 rounded-full text-white bg-black hover:bg-white hover:text-black transition-all"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
