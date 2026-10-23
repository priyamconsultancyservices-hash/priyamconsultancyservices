import { useRef, useEffect } from "react";

// ── Diwali crackers across the FULL screen ──────────────────────────
// Sky rockets (vaanam), kambi mathappu (sparklers), flower pots (poo thotti)
// and ground spinners (bhoomi chakkaram) pop up everywhere: top, middle, bottom,
// left and right. Fixed canvas, never blocks clicks, pauses when the tab is hidden.
function DiwaliCrackers() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const ctx = canvas.getContext("2d");
        const COLORS = ["#ff6d00", "#e53935", "#d81b60", "#8e24aa", "#1e88e5", "#00a86b", "#f9a825"];
        const GOLD = ["#ffb300", "#ffca28", "#ff9800", "#fff176"];
        const MAX_SPARKS = 420;
        const rand = (a, b) => a + Math.random() * (b - a);
        const pick = (arr) => arr[(Math.random() * arr.length) | 0];

        let W = 0, H = 0, raf, spawnTimer;
        const timeouts = new Set();
        let sparks = [];   // flying particles
        let rockets = [];  // sky shots going up
        let emitters = []; // sparklers, flower pots, spinners (they keep emitting)

        const later = (fn, ms) => {
            const id = setTimeout(() => { timeouts.delete(id); fn(); }, ms);
            timeouts.add(id);
        };

        const resize = () => {
            const dpr = 1;
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = W * dpr;
            canvas.height = H * dpr;
            canvas.style.width = W + "px";
            canvas.style.height = H + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        resize();
        window.addEventListener("resize", resize, { passive: true });

        const addSpark = (s) => { if (sparks.length < MAX_SPARKS) sparks.push(s); };

        // ── 1) Sky rocket: flies up, bursts anywhere on screen ──
        const launchRocket = () => {
            rockets.push({
                x: rand(W * 0.04, W * 0.96),
                y: H + 10,
                targetY: rand(H * 0.1, H * 0.7),
                speed: rand(6, 8.5),
                color: pick(COLORS),
            });
        };
        const burst = (x, y, color) => {
            const count = 30 + ((Math.random() * 10) | 0);
            const power = rand(2.6, 4.4);
            for (let i = 0; i < count; i++) {
                const a = (Math.PI * 2 * i) / count + Math.random() * 0.25;
                const s = power * rand(0.55, 1.15);
                addSpark({
                    x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s,
                    life: 1, decay: rand(0.010, 0.018), r: rand(2.2, 3.8),
                    g: 0.04, drag: 0.975, trail: true,
                    color: Math.random() < 0.2 ? "#ffb300" : color,
                });
            }
        };

        // ── 2) Kambi mathappu (sparkler): burns at a spot, tiny sparks everywhere ──
        const lightSparkler = () => {
            emitters.push({
                type: "sparkler",
                x: rand(W * 0.03, W * 0.97),
                y: rand(H * 0.12, H * 0.92),
                life: rand(150, 230), // frames (~2.5 to 3.8s)
                age: 0,
            });
        };

        // ── 3) Poo thotti (flower pot): fountain shooting up from the ground ──
        const lightFlowerPot = () => {
            emitters.push({
                type: "pot",
                x: rand(W * 0.05, W * 0.95),
                y: H - rand(4, 30),
                life: rand(110, 170),
                age: 0,
                color: pick(COLORS),
            });
        };

        // ── 4) Bhoomi chakkaram (ground spinner): spins and throws sparks ──
        const lightSpinner = () => {
            emitters.push({
                type: "spinner",
                x: rand(W * 0.06, W * 0.94),
                y: rand(H * 0.55, H - 20),
                life: rand(130, 200),
                age: 0,
                angle: Math.random() * Math.PI * 2,
                color: pick(COLORS),
            });
        };

        const runEmitters = () => {
            for (let i = emitters.length - 1; i >= 0; i--) {
                const e = emitters[i];
                e.age++;
                if (e.age > e.life) { emitters.splice(i, 1); continue; }
                const fade = Math.min(1, (e.life - e.age) / 25); // dies down at the end

                if (e.type === "sparkler") {
                    // glowing hot tip
                    ctx.globalAlpha = 0.9 * fade;
                    ctx.shadowBlur = 0;
                    ctx.shadowColor = "#ffca28";
                    ctx.fillStyle = "#fff8e1";
                    ctx.beginPath();
                    ctx.arc(e.x, e.y, 2.6 + Math.random() * 1.4, 0, Math.PI * 2);
                    ctx.fill();
                    // fine sparks flying in every direction
                    const n = 1 + ((Math.random() * 2) | 0);
                    for (let k = 0; k < n; k++) {
                        const a = Math.random() * Math.PI * 2;
                        const s = rand(1.2, 4.2);
                        addSpark({
                            x: e.x, y: e.y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 0.4,
                            life: 1, decay: rand(0.045, 0.085), r: rand(0.8, 1.6),
                            g: 0.07, drag: 0.94, trail: true,
                            color: Math.random() < 0.35 ? "#fffde7" : pick(GOLD),
                        });
                    }
                } else if (e.type === "pot") {
                    const n = 2 + ((Math.random() * 2) | 0);
                    for (let k = 0; k < n; k++) {
                        const a = -Math.PI / 2 + rand(-0.42, 0.42);
                        const s = rand(5, 9.5);
                        addSpark({
                            x: e.x + rand(-4, 4), y: e.y,
                            vx: Math.cos(a) * s, vy: Math.sin(a) * s,
                            life: 1, decay: rand(0.012, 0.024), r: rand(1.2, 2.4),
                            g: 0.14, drag: 0.985, trail: true,
                            color: Math.random() < 0.5 ? pick(GOLD) : e.color,
                        });
                    }
                } else if (e.type === "spinner") {
                    e.angle += 0.38;
                    for (let k = 0; k < 2; k++) {
                        const a = e.angle + (k * Math.PI * 2) / 3;
                        const s = rand(2.2, 3.6);
                        addSpark({
                            x: e.x, y: e.y,
                            vx: Math.cos(a) * s, vy: Math.sin(a) * s - 0.3,
                            life: 1, decay: rand(0.03, 0.05), r: rand(1.2, 2),
                            g: 0.05, drag: 0.965, trail: true,
                            color: Math.random() < 0.5 ? pick(GOLD) : e.color,
                        });
                    }
                    ctx.globalAlpha = 0.85 * fade;
                    ctx.shadowBlur = 0;
                    ctx.shadowColor = e.color;
                    ctx.fillStyle = e.color;
                    ctx.beginPath();
                    ctx.arc(e.x, e.y, 3, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        };

        const loop = () => {
            ctx.clearRect(0, 0, W, H);

            // rockets (with a short tail)
            for (let i = rockets.length - 1; i >= 0; i--) {
                const r = rockets[i];
                r.y -= r.speed;
                ctx.globalAlpha = 1;
                ctx.shadowBlur = 0;
                ctx.shadowColor = r.color;
                ctx.strokeStyle = r.color;
                ctx.lineWidth = 2.5;
                ctx.lineCap = "round";
                ctx.beginPath();
                ctx.moveTo(r.x, r.y);
                ctx.lineTo(r.x, r.y + 14);
                ctx.stroke();
                if (r.y <= r.targetY) {
                    burst(r.x, r.y, r.color);
                    rockets.splice(i, 1);
                }
            }

            runEmitters();

            // all sparks
            for (let i = sparks.length - 1; i >= 0; i--) {
                const p = sparks[i];
                const px = p.x, py = p.y;
                p.x += p.vx;
                p.y += p.vy;
                p.vx *= p.drag;
                p.vy = p.vy * p.drag + p.g;
                p.life -= p.decay;
                if (p.life <= 0 || p.y > H + 30) { sparks.splice(i, 1); continue; }
                ctx.globalAlpha = Math.min(1, p.life * 1.4);
                ctx.shadowBlur = 0;
                ctx.shadowColor = p.color;
                ctx.strokeStyle = p.color;
                ctx.fillStyle = p.color;
                if (p.trail) {
                    ctx.lineWidth = p.r * 0.7;
                    ctx.beginPath();
                    ctx.moveTo(px, py);
                    ctx.lineTo(p.x, p.y);
                    ctx.stroke();
                }
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r * (0.5 + p.life * 0.5), 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        // ── Random timing so it feels natural, not rhythmic ──
        const MAX_EMITTERS = 3;
        const spawnOne = () => {
            if (document.hidden) return;
            const roll = Math.random();
            if (roll < 0.88) launchRocket();
            else if (emitters.length < MAX_EMITTERS) {
                if (roll < 0.94) lightSparkler();
                else lightFlowerPot();
            }
        };
        const scheduleNext = () => {
            spawnTimer = setTimeout(() => {
                spawnOne();
                if (Math.random() < 0.5) later(launchRocket, rand(150, 450));
                scheduleNext();
            }, rand(700, 1400));
        };

        // Opening show: a bit of everything straight away
        launchRocket();
        later(launchRocket, 300);
        later(launchRocket, 650);
        later(launchRocket, 1000);
        scheduleNext();

        return () => {
            cancelAnimationFrame(raf);
            clearTimeout(spawnTimer);
            timeouts.forEach(clearTimeout);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{ position: "fixed", top: 0, left: 0, zIndex: 2147483647, pointerEvents: "none" }}
        />
    );
}

export default DiwaliCrackers;