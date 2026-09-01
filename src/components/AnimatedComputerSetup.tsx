import { Code } from "lucide-react";

export default function AnimatedComputerSetup() {
  // App.java Code block for continuous upward animation
  const javaCodeLines = [
    { line: 1, text: <span className="text-slate-500 italic">// Spring Boot Microservice Application</span> },
    { line: 2, text: <span><span className="text-sky-400 font-bold">package</span> <span className="text-teal-300">com.fayaz.portfolio</span>;</span> },
    { line: 3, text: <span className="text-slate-500 italic">// Core framework imports</span> },
    { line: 4, text: <span><span className="text-sky-400 font-bold">import</span> <span className="text-slate-300">org.springframework.boot.SpringApplication</span>;</span> },
    { line: 5, text: <span><span className="text-sky-400 font-bold">import</span> <span className="text-slate-300">org.springframework.web.bind.annotation.*</span>;</span> },
    { line: 6, text: <span><span className="text-amber-400">@SpringBootApplication</span></span> },
    { line: 7, text: <span><span className="text-amber-400">@RestController</span></span> },
    { line: 8, text: <span><span className="text-amber-400">@RequestMapping</span>(<span className="text-teal-300">"/api/v1/fullstack"</span>)</span> },
    { line: 9, text: <span><span className="text-sky-400 font-bold">public class</span> <span className="text-purple-300 font-bold">App</span> &#123;</span> },
    { line: 10, indent: "pl-4", text: <span><span className="text-sky-400 font-bold">private final</span> <span className="text-purple-300">String</span> dev = <span className="text-teal-300">"Shaik Mohammed Fayaz"</span>;</span> },
    { line: 11, indent: "pl-4", text: <span><span className="text-sky-400 font-bold">private final</span> <span className="text-purple-300">String</span> role = <span className="text-teal-300">"Full Stack Java Developer"</span>;</span> },
    { line: 12, indent: "pl-4", text: <span><span className="text-amber-400">@GetMapping</span>(<span className="text-teal-300">"/status"</span>)</span> },
    { line: 13, indent: "pl-4", text: <span><span className="text-sky-400 font-bold">public</span> <span className="text-purple-300">ResponseEntity</span>&lt;<span className="text-purple-300">String</span>&gt; <span className="text-sky-200 font-semibold">getMetrics</span>() &#123;</span> },
    { line: 14, indent: "pl-8", text: <span><span className="text-sky-400 font-bold">return</span> <span className="text-purple-300">ResponseEntity</span>.ok(<span className="text-teal-300">"App.java Engine Running Smoothly! 🚀"</span>);</span> },
    { line: 15, indent: "pl-4", text: <span>&#125;</span> },
    { line: 16, indent: "pl-4", text: <span><span className="text-amber-400">@PostMapping</span>(<span className="text-teal-300">"/deploy"</span>)</span> },
    { line: 17, indent: "pl-4", text: <span><span className="text-sky-400 font-bold">public</span> <span className="text-purple-300">String</span> <span className="text-sky-200 font-semibold">triggerBuild</span>() &#123;</span> },
    { line: 18, indent: "pl-8", text: <span><span className="text-sky-400 font-bold">return</span> <span className="text-teal-300">"Build PASSED · 100% Operational"</span>;</span> },
    { line: 19, indent: "pl-4", text: <span>&#125;</span> },
    { line: 20, indent: "pl-4", text: <span><span className="text-sky-400 font-bold">public static void</span> <span className="text-sky-200 font-semibold">main</span>(<span className="text-purple-300">String</span>[] args) &#123;</span> },
    { line: 21, indent: "pl-8", text: <span><span className="text-purple-300">SpringApplication</span>.run(<span className="text-purple-300">App</span>.class, args);</span> },
    { line: 22, indent: "pl-4", text: <span>&#125;</span> },
    { line: 23, text: <span>&#125;</span> },
  ];

  // Duplicate array for seamless infinite looping upward animation
  const infiniteCode = [...javaCodeLines, ...javaCodeLines];

  return (
    <div className="relative w-full h-full min-h-[340px] md:min-h-[420px] flex flex-col items-center justify-center p-1 sm:p-3 select-none overflow-hidden font-sans text-slate-100">

      {/* BREATHING AMBIENT BACKGROUND GLOW (6s cycle) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] bg-gradient-to-tr from-sky-900/30 via-indigo-950/40 to-cyan-900/20 rounded-full blur-[80px] animate-breathe-glow" />
      </div>

      {/* DRIFTING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-sky-400/40 animate-particle-drift"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              left: `${(i * 8.5 + 4) % 94}%`,
              bottom: "-15px",
              animationDuration: `${6 + (i % 5) * 1.8}s`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* MAIN WORKSTATION SCENE WITH GENTLE FLOATING (6s cycle) */}
      <div className="relative z-10 w-full max-w-[580px] scale-[0.62] sm:scale-75 md:scale-[0.78] lg:scale-80 flex flex-col items-center animate-gentle-float origin-center transition-all duration-300">

        {/* TOP WORKSTATION AREA: MONITOR + CPU TOWER */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-center gap-5 md:gap-6 relative">

          {/* ================= MONITOR ASSEMBLY ================= */}
          <div className="relative flex flex-col items-center w-full max-w-[420px]">

            {/* BREATHING MONITOR BACKLIGHT GLOW */}
            <div className="absolute -inset-4 bg-sky-500/15 rounded-3xl blur-2xl animate-breathe-glow pointer-events-none" />

            {/* DUAL-BEZEL MONITOR FRAME */}
            <div className="relative w-full h-64 sm:h-72 bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-slate-700/80 rounded-2xl p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col group backdrop-blur-md">

              {/* INNER DISPLAY BEZEL & SCREEN */}
              <div className="relative flex-1 bg-slate-950 rounded-xl border border-sky-500/30 overflow-hidden flex flex-col justify-between shadow-inner">

                {/* GLASS REFLECTION LIGHT SWEEP */}
                <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
                  <div className="w-[150%] h-[200%] bg-gradient-to-r from-transparent via-white/8 to-transparent transform -rotate-45 animate-glass-sweep" />
                </div>

                {/* MONITOR TOP HEADER BAR (ALWAYS SHOWS APP.JAVA) */}
                <div className="relative z-20 flex items-center justify-between px-3 py-1.5 bg-slate-900/95 border-b border-slate-800 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_5px_#ef4444]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-[0_0_5px_#f59e0b]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_5px_#10b981]" />
                  </div>

                  {/* ACTIVE APP.JAVA TAB */}
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1.5 px-3 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40 text-[10px] font-mono font-bold shadow-[0_0_10px_rgba(56,189,248,0.2)]">
                      <Code className="w-3 h-3 text-sky-400 animate-pulse" /> App.java
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-mono text-emerald-300 font-semibold hidden sm:inline">RUNNING</span>
                  </div>
                </div>

                {/* SCREEN CONTENT: APP.JAVA CONTINUOUS SCROLLING UP ANIMATION */}
                <div className="relative z-10 flex-1 p-3 overflow-hidden font-mono text-[10px] sm:text-xs leading-relaxed text-slate-300 flex flex-col justify-between">

                  {/* FADE MASKS FOR SMOOTH ENTRY AND EXIT */}
                  <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-slate-950 to-transparent z-20 pointer-events-none" />
                  <div className="absolute bottom-6 left-0 right-0 h-4 bg-gradient-to-t from-slate-950 to-transparent z-20 pointer-events-none" />

                  {/* UPWARD SCROLLING CODE CONTAINER */}
                  <div className="relative overflow-hidden flex-1">
                    <div className="animate-code-scroll-up space-y-1.5 pt-1">
                      {infiniteCode.map((item, idx) => (
                        <div key={idx} className={`flex items-center gap-3 ${item.indent || ""}`}>
                          <span className="text-slate-600 select-none text-[9px] w-5 text-right shrink-0">{item.line}</span>
                          <div className="whitespace-nowrap">{item.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM STATUS BAR */}
                  <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400 relative z-20 bg-slate-950/90 shrink-0">
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> UTF-8 · Java 21</span>
                    <span className="text-sky-400 font-semibold">App.java · code Execution</span>
                  </div>
                </div>

                {/* BOTTOM BEZEL BRAND LABEL */}
                <div className="h-4 bg-slate-900 border-t border-slate-800 flex items-center justify-center">
                  <span className="text-[8px] font-mono tracking-[0.25em] text-slate-500 uppercase font-semibold">Asus ExpertBook</span>
                </div>
              </div>
            </div>

            {/* REALISTIC MONITOR STAND (NECK + OVAL BASE) */}
            <div className="w-12 h-8 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 border-x border-slate-600/40 shadow-inner shrink-0" />
            <div className="w-40 sm:w-48 h-3.5 rounded-[100%] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/60 shadow-[0_4px_15px_rgba(0,0,0,0.7)] flex items-center justify-center relative">
              <div className="w-12 h-0.5 bg-sky-400/60 rounded-full shadow-[0_0_6px_#38bdf8]" />
            </div>
          </div>

          {/* ================= CPU TOWER ASSEMBLY ================= */}
          <div className="relative w-32 sm:w-40 h-64 sm:h-72 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 border border-slate-700/80 rounded-xl p-2.5 sm:p-3 shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden shrink-0">

            {/* BRUSHED METAL TEXTURE OVERLAY */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:8px_8px] pointer-events-none" />

            {/* VENTED TOP GRID */}
            <div className="relative z-10 w-full flex flex-col gap-1 py-1">
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className="w-full h-1 bg-slate-950 rounded-full border-t border-slate-800/80 shadow-inner" />
              ))}
            </div>

            {/* 6-BLADE SPINNING COOLING FAN ASSEMBLY */}
            <div className="relative z-10 my-auto flex flex-col items-center justify-center">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-950 border-2 border-sky-500/40 p-1 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.25)]">

                {/* AMBIENT FAN RING GLOW */}
                <div className="absolute inset-0 rounded-full bg-sky-500/10 blur-sm" />

                {/* 6-BLADE SVG FAN (SMOOTH ROTATION) */}
                <svg className="w-full h-full text-sky-400 animate-spin-fan" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="12" fill="currentColor" className="text-slate-800" />
                  <circle cx="50" cy="50" r="8" fill="currentColor" className="text-sky-400" />
                  {/* 6 Blades */}
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                    <path
                      key={i}
                      d="M50 50 Q65 25 55 10 Q40 20 50 50 Z"
                      fill="currentColor"
                      className="opacity-70"
                      transform={`rotate(${deg} 50 50)`}
                    />
                  ))}
                </svg>
              </div>
            </div>

            {/* FRONT PANEL: LEDs & BRAND PLATE */}
            <div className="relative z-10 w-full flex flex-col gap-2 pt-2 border-t border-slate-800">

              {/* LABELED LEDs (PWR & ACT) */}
              <div className="flex items-center justify-around px-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                  <span className="text-[8px] font-mono text-slate-400 font-bold">PWR</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-300 animate-act-blink shadow-[0_0_8px_#38bdf8]" />
                  <span className="text-[8px] font-mono text-slate-400 font-bold">ACT</span>
                </div>
              </div>

              {/* "DEV-RIG" BRAND PLATE */}
              <div className="w-full py-1 bg-slate-950 rounded-md border border-slate-800 flex items-center justify-center shadow-inner">
                <span className="text-[9px] font-mono font-extrabold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300 uppercase">
                  CPU
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CABLE DATA-FLOW SVG CONNECTIONS (MONITOR/KEYBOARD/MOUSE TO CPU) */}
        <div className="w-full h-8 relative pointer-events-none overflow-visible">
          <svg className="w-full h-full" viewBox="0 0 600 30" fill="none">
            {/* Monitor to CPU Cable */}
            <path d="M 300 0 C 300 20, 480 5, 500 0" stroke="#334155" strokeWidth="2.5" />
            <path d="M 300 0 C 300 20, 480 5, 500 0" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 8" className="animate-cable-flow" />

            {/* Keyboard to CPU Cable */}
            <path d="M 220 30 C 240 10, 460 20, 490 0" stroke="#334155" strokeWidth="2" />
            <path d="M 220 30 C 240 10, 460 20, 490 0" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 6" className="animate-cable-flow" />

            {/* Mouse to CPU Cable */}
            <path d="M 380 30 C 390 15, 470 15, 480 0" stroke="#334155" strokeWidth="1.5" />
            <path d="M 380 30 C 390 15, 470 15, 480 0" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 5" className="animate-cable-flow" />
          </svg>
        </div>

        {/* ================= DESK SURFACE AREA: KEYBOARD & MOUSE ================= */}
        <div className="w-full flex items-end justify-center gap-4 sm:gap-8 pt-1 relative">

          {/* UNDERLIGHT GLOW BENEATH KEYBOARD */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[75%] h-6 bg-sky-500/25 blur-lg rounded-full pointer-events-none" />

          {/* KEYBOARD (FULL 6-ROW KEYBOARD WITH STAGGERED RIPPLE LIGHTING) */}
          <div className="relative bg-slate-900/95 border border-slate-700/80 rounded-xl p-1.5 sm:p-2 shadow-[0_10px_25px_rgba(0,0,0,0.7)] flex flex-col gap-1 backdrop-blur-md">

            {/* ROW 1: FUNCTION ROW */}
            <div className="flex gap-0.5 sm:gap-1 justify-center items-center">
              <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-[3px] bg-slate-950 border border-slate-700/80 text-[7px] font-mono text-sky-400 flex items-center justify-center shadow">Esc</div>
              <div className="w-1" />
              {["F1", "F2", "F3", "F4"].map((key, i) => (
                <div key={i} className="w-4 sm:w-5 h-4 sm:h-5 rounded-[3px] bg-slate-800/90 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow animate-key-ripple" style={{ animationDelay: `${i * 90}ms` }}>{key}</div>
              ))}
              <div className="w-1" />
              {["F5", "F6", "F7", "F8"].map((key, i) => (
                <div key={i} className="w-4 sm:w-5 h-4 sm:h-5 rounded-[3px] bg-slate-800/90 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow animate-key-ripple" style={{ animationDelay: `${(i + 4) * 90}ms` }}>{key}</div>
              ))}
              <div className="w-1" />
              {["F9", "F10", "F11", "F12"].map((key, i) => (
                <div key={i} className="w-4 sm:w-5 h-4 sm:h-5 rounded-[3px] bg-slate-800/90 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow animate-key-ripple" style={{ animationDelay: `${(i + 8) * 90}ms` }}>{key}</div>
              ))}
              <div className="w-1" />
              <div className="w-5 sm:w-6 h-4 sm:h-5 rounded-[3px] bg-red-950/80 border border-red-800/60 text-[7px] font-mono text-red-300 flex items-center justify-center shadow">Del</div>
            </div>

            {/* ROW 2: NUMBER ROW */}
            <div className="flex gap-0.5 sm:gap-1 justify-center items-center">
              {["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="].map((key, i) => (
                <div key={i} className="w-4 sm:w-5 h-4 sm:h-5 rounded-[3px] bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-700/70 text-[8px] font-mono text-slate-300 flex items-center justify-center shadow animate-key-ripple" style={{ animationDelay: `${(i + 12) * 80}ms` }}>{key}</div>
              ))}
              <div className="w-7 sm:w-9 h-4 sm:h-5 rounded-[3px] bg-slate-800 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow">Bksp</div>
            </div>

            {/* ROW 3: QWERTY ROW */}
            <div className="flex gap-0.5 sm:gap-1 justify-center items-center">
              <div className="w-6 sm:w-8 h-4 sm:h-5 rounded-[3px] bg-slate-800 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow">Tab</div>
              {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"].map((key, i) => (
                <div key={i} className="w-4 sm:w-5 h-4 sm:h-5 rounded-[3px] bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-700/70 text-[8px] font-mono text-slate-300 flex items-center justify-center shadow animate-key-ripple" style={{ animationDelay: `${(i + 25) * 80}ms` }}>{key}</div>
              ))}
            </div>

            {/* ROW 4: ASDF ROW */}
            <div className="flex gap-0.5 sm:gap-1 justify-center items-center">
              <div className="w-7 sm:w-9 h-4 sm:h-5 rounded-[3px] bg-slate-800 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow">Caps</div>
              {["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'"].map((key, i) => (
                <div key={i} className="w-4 sm:w-5 h-4 sm:h-5 rounded-[3px] bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-700/70 text-[8px] font-mono text-slate-300 flex items-center justify-center shadow animate-key-ripple" style={{ animationDelay: `${(i + 38) * 80}ms` }}>{key}</div>
              ))}
              <div className="w-8 sm:w-11 h-4 sm:h-5 rounded-[3px] bg-sky-950/80 border border-sky-700/60 text-[7px] font-mono text-sky-300 flex items-center justify-center shadow">Enter</div>
            </div>

            {/* ROW 5: SHIFT ROW */}
            <div className="flex gap-0.5 sm:gap-1 justify-center items-center">
              <div className="w-9 sm:w-12 h-4 sm:h-5 rounded-[3px] bg-slate-800 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow">Shift</div>
              {["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"].map((key, i) => (
                <div key={i} className="w-4 sm:w-5 h-4 sm:h-5 rounded-[3px] bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-700/70 text-[8px] font-mono text-slate-300 flex items-center justify-center shadow animate-key-ripple" style={{ animationDelay: `${(i + 49) * 80}ms` }}>{key}</div>
              ))}
              <div className="w-7 sm:w-9 h-4 sm:h-5 rounded-[3px] bg-slate-800 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow">Shift</div>
              <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-[3px] bg-slate-800 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow">↑</div>
            </div>

            {/* ROW 6: BOTTOM ROW & ARROW KEYS */}
            <div className="flex gap-0.5 sm:gap-1 justify-center items-center">
              <div className="w-5 sm:w-6 h-4 sm:h-5 rounded-[3px] bg-slate-800 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow">Ctrl</div>
              <div className="w-5 sm:w-6 h-4 sm:h-5 rounded-[3px] bg-slate-800 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow">Win</div>
              <div className="w-5 sm:w-6 h-4 sm:h-5 rounded-[3px] bg-slate-800 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow">Alt</div>
              <div className="w-24 sm:w-32 h-4 sm:h-5 rounded-[3px] bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-700/70 flex items-center justify-center shadow animate-key-ripple" style={{ animationDelay: "2400ms" }}>
                <div className="w-14 h-1 bg-sky-400/40 rounded-full shadow-[0_0_6px_#38bdf8]" />
              </div>
              <div className="w-5 sm:w-6 h-4 sm:h-5 rounded-[3px] bg-slate-800 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow">Alt</div>
              <div className="w-5 sm:w-6 h-4 sm:h-5 rounded-[3px] bg-slate-800 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow">Fn</div>
              <div className="w-5 sm:w-6 h-4 sm:h-5 rounded-[3px] bg-slate-800 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow">Ctrl</div>
              <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-[3px] bg-slate-800 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow">←</div>
              <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-[3px] bg-slate-800 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow">↓</div>
              <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-[3px] bg-slate-800 border border-slate-700/70 text-[7px] font-mono text-slate-400 flex items-center justify-center shadow">→</div>
            </div>
          </div>

          {/* REALISTIC SLIM MOUSE WITH SPLIT-LINE & BLUE SCROLL WHEEL */}
          <div className="relative w-10 sm:w-12 h-16 sm:h-18 rounded-t-full rounded-b-2xl bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border border-slate-700/80 shadow-[0_4px_20px_rgba(56,189,248,0.35)] flex flex-col items-center pt-2 overflow-hidden shrink-0">

            {/* SPLIT LINE GAP */}
            <div className="w-full flex justify-between px-2">
              <div className="w-[45%] h-5 border-b border-slate-700/60" />
              <div className="w-[45%] h-5 border-b border-slate-700/60" />
            </div>

            {/* BLUE ANIMATED SCROLL WHEEL */}
            <div className="absolute top-2 w-2 h-4 rounded-full bg-slate-950 border border-sky-400/60 flex flex-col items-center justify-center shadow-[0_0_8px_#38bdf8]">
              <div className="w-1 h-1.5 bg-sky-400 rounded-full animate-scroll-wheel" />
            </div>

            {/* SOFT BOTTOM GLOW ACCENT */}
            <div className="mt-auto w-full h-1 bg-sky-400/80 shadow-[0_0_8px_#38bdf8]" />
          </div>
        </div>

        {/* DESK SURFACE SHADOW UNDER THE WORKSTATION SETUP */}
        <div className="w-[90%] h-6 mt-3 bg-black/70 blur-xl rounded-full pointer-events-none" />
      </div>

      {/* STYLES & CUSTOM KEYFRAME ANIMATIONS */}
      <style>{`
        @keyframes breatheGlow {
          0%, 100% { opacity: 0.35; filter: drop-shadow(0 0 25px rgba(56, 189, 248, 0.25)); }
          50% { opacity: 0.65; filter: drop-shadow(0 0 45px rgba(56, 189, 248, 0.45)); }
        }

        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        @keyframes particleDrift {
          0% { transform: translateY(0px) scale(0.8); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-440px) scale(1.2); opacity: 0; }
        }

        @keyframes glassSweep {
          0% { transform: translateX(-150%) rotate(25deg); }
          25%, 100% { transform: translateX(250%) rotate(25deg); }
        }

        @keyframes codeScrollUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }

        @keyframes spinFan {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes actBlink {
          0%, 100% { opacity: 0.2; }
          15%, 25% { opacity: 1; }
          35%, 65% { opacity: 0.3; }
          75%, 85% { opacity: 0.95; }
        }

        @keyframes cableFlow {
          from { stroke-dashoffset: 24; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes keyRipple {
          0%, 100% { background-color: rgba(30, 41, 59, 1); border-color: rgba(51, 65, 85, 0.7); color: #cbd5e1; box-shadow: 0 2px 4px rgba(0,0,0,0.5); }
          50% { background-color: rgba(14, 165, 233, 0.35); border-color: rgba(56, 189, 248, 0.9); color: #f0f9ff; box-shadow: 0 0 10px rgba(56, 189, 248, 0.8); }
        }

        @keyframes scrollWheel {
          0%, 100% { transform: translateY(-2px); }
          50% { transform: translateY(2px); }
        }

        .animate-breathe-glow {
          animation: breatheGlow 6s ease-in-out infinite;
        }
        .animate-gentle-float {
          animation: gentleFloat 6s ease-in-out infinite;
        }
        .animate-particle-drift {
          animation: particleDrift linear infinite;
        }
        .animate-glass-sweep {
          animation: glassSweep 7s ease-in-out infinite;
        }
        .animate-code-scroll-up {
          animation: codeScrollUp 18s linear infinite;
        }
        .animate-spin-fan {
          animation: spinFan 4s linear infinite;
        }
        .animate-act-blink {
          animation: actBlink 2.5s ease-in-out infinite;
        }
        .animate-cable-flow {
          animation: cableFlow 2s linear infinite;
        }
        .animate-key-ripple {
          animation: keyRipple 3.5s ease-in-out infinite;
        }
        .animate-scroll-wheel {
          animation: scrollWheel 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
