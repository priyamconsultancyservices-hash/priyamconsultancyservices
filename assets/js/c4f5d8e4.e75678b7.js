"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["4823"],{9393(e,t,i){i.d(t,{A:()=>a});var n=i(4848),s=i(6540);let a=function(){let e=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let t=e.current;if(!t)return;let i=t.getContext("2d"),n="#ed8337",s,a,r=[],o;function l(){s=t.width=t.parentElement.offsetWidth,a=t.height=t.parentElement.offsetHeight}function c(){this.reset()}c.prototype.reset=function(){this.x=Math.random()*s,this.y=Math.random()*a,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},c.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=s+20),this.x>s+20&&(this.x=-20),this.y<-20&&(this.y=a+20),this.y>a+20&&(this.y=-20)},c.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(i.save(),i.globalAlpha=e,i.strokeStyle=i.fillStyle=n,i.lineWidth=1,"dot"===this.type)i.beginPath(),i.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),i.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));i.beginPath(),i.arc(this.x,this.y,e,0,2*Math.PI),i.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));i.beginPath(),i.moveTo(this.x-e,this.y),i.lineTo(this.x+e,this.y),i.moveTo(this.x,this.y-e),i.lineTo(this.x,this.y+e),i.stroke()}i.restore()},window.addEventListener("resize",l),l(),r=[];let d=Math.floor(s*a/9e3);for(let e=0;e<Math.max(d,28);e++)r.push(new c);return!function e(){i.clearRect(0,0,s,a),function(){let e=r.filter(e=>"dot"===e.type);for(let t=0;t<e.length;t++)for(let s=t+1;s<e.length;s++){let a=e[t].x-e[s].x,r=e[t].y-e[s].y,o=Math.sqrt(a*a+r*r);o<110&&(i.save(),i.globalAlpha=(1-o/110)*.12,i.strokeStyle=n,i.lineWidth=.7,i.beginPath(),i.moveTo(e[t].x,e[t].y),i.lineTo(e[s].x,e[s].y),i.stroke(),i.restore())}}(),r.forEach(e=>{e.update(),e.draw()}),o=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",l)}},[]),(0,n.jsx)("section",{id:"cta-final",children:(0,n.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,n.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,n.jsxs)("div",{className:"cta-banner-left",children:[(0,n.jsx)("div",{className:"partners-header",children:(0,n.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,n.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,n.jsx)("br",{}),"Next Big ",(0,n.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,n.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,n.jsxs)("div",{className:"cta-banner-right",children:[(0,n.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,n.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,n.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,n.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},7176(e,t,i){i.r(t),i.d(t,{default:()=>W});var n=i(4848),s=i(6540),a=i(9393),r=i(1085);let o=({size:e=26})=>(0,n.jsx)("img",{src:"/img/icon/placeholder.webp",alt:"icon",width:e,height:e,style:{objectFit:"contain",opacity:.4}}),l="#ed8337",c=[{name:"Business Registration",icon:"\u{1F3E2}",svg:`<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <filter id="bsh" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#ed8337" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect x="0" y="0" width="220" height="180" rx="18" fill="#fff"/>
      <rect x="0" y="0" width="220" height="46" rx="18" fill="${l}"/>
      <rect x="0" y="30" width="220" height="16" fill="${l}"/>
      <text x="14" y="22" font-size="13" fill="#fff" font-family="Poppins,sans-serif" font-weight="800">Business Registration</text>
      <rect x="148" y="28" width="58" height="14" rx="7" fill="#fff"/>
      <text x="177" y="38" text-anchor="middle" font-size="7" fill="${l}" font-family="Poppins,sans-serif" font-weight="700">Fast &amp; Legal</text>
      <rect x="46" y="66" width="70" height="84" rx="9" fill="#f5c8a8"/>
      <rect x="40" y="60" width="70" height="84" rx="9" fill="#ffd9b8"/>
      <rect x="34" y="54" width="70" height="84" rx="9" fill="#fff" stroke="#ffe0cc" stroke-width="1.2" filter="url(#bsh)"/>
      <polygon points="92,54 104,54 104,66" fill="${l}" opacity="0.45"/>
      <polygon points="92,54 104,66 92,66" fill="${l}" opacity="0.2"/>
      <rect x="42" y="68" width="46" height="5" rx="2.5" fill="${l}" opacity="0.85"/>
      <rect x="42" y="78" width="54" height="3.5" rx="1.5" fill="#e8d8cc"/>
      <rect x="42" y="85" width="48" height="3.5" rx="1.5" fill="#e8d8cc"/>
      <rect x="42" y="92" width="52" height="3.5" rx="1.5" fill="#e8d8cc"/>
      <rect x="42" y="99" width="42" height="3.5" rx="1.5" fill="#e8d8cc"/>
      <rect x="42" y="106" width="50" height="3.5" rx="1.5" fill="#e8d8cc"/>
      <rect x="42" y="113" width="44" height="3.5" rx="1.5" fill="#e8d8cc"/>
      <circle cx="69" cy="130" r="13" fill="#fff" stroke="${l}" stroke-width="1.5" filter="url(#bsh)"/>
      <circle cx="69" cy="130" r="9" fill="${l}" opacity="0.12"/>
      <text x="69" y="135" text-anchor="middle" font-size="13" fill="${l}" font-weight="900">\u{2713}</text>
      <circle cx="69" cy="130" r="13" fill="none" stroke="${l}" stroke-width="2">
        <animate attributeName="r" values="13;19;13" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>
      <rect x="116" y="54" width="96" height="106" rx="10" fill="#fff" stroke="#ffe0cc" stroke-width="1" filter="url(#bsh)"/>
      <rect x="122" y="60" width="84" height="28" rx="7" fill="${l}"/>
      <circle cx="135" cy="74" r="9" fill="rgba(255,255,255,0.25)"/>
      <text x="135" y="78.5" text-anchor="middle" font-size="10" fill="#fff" font-weight="800">1</text>
      <text x="152" y="70" font-size="7.5" fill="#fff" font-family="Poppins,sans-serif" font-weight="700">Submit Docs</text>
      <text x="152" y="80" font-size="6.5" fill="rgba(255,255,255,0.85)" font-family="Poppins,sans-serif">Upload documents</text>
      <rect x="122" y="60" width="84" height="28" rx="7" fill="none" stroke="#fff" stroke-width="1.5">
        <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite"/>
      </rect>
      <line x1="164" y1="88" x2="164" y2="96" stroke="${l}" stroke-width="1.5" stroke-dasharray="2,2"/>
      <rect x="122" y="96" width="84" height="28" rx="7" fill="#fff4ee" stroke="${l}" stroke-width="1"/>
      <circle cx="135" cy="110" r="9" fill="${l}" opacity="0.7"/>
      <text x="135" y="114.5" text-anchor="middle" font-size="10" fill="#fff" font-weight="800">2</text>
      <text x="152" y="106" font-size="7.5" fill="#333" font-family="Poppins,sans-serif" font-weight="700">Verification</text>
      <text x="152" y="116" font-size="6.5" fill="#999" font-family="Poppins,sans-serif">Expert review</text>
      <line x1="164" y1="124" x2="164" y2="132" stroke="#ddd" stroke-width="1.5" stroke-dasharray="2,2"/>
      <rect x="122" y="132" width="84" height="24" rx="7" fill="#f5f5f5" stroke="#eee" stroke-width="1"/>
      <circle cx="135" cy="144" r="9" fill="#ddd"/>
      <text x="135" y="148.5" text-anchor="middle" font-size="10" fill="#bbb" font-weight="800">3</text>
      <text x="152" y="140" font-size="7.5" fill="#bbb" font-family="Poppins,sans-serif" font-weight="700">Certificate</text>
      <text x="152" y="150" font-size="6.5" fill="#ccc" font-family="Poppins,sans-serif">Ready in 3 days</text>
      <rect x="6" y="162" width="208" height="14" rx="7" fill="#fff4ee"/>
      <text x="110" y="171.5" text-anchor="middle" font-size="6.5" fill="${l}" font-family="Poppins,sans-serif" font-weight="600">Fast  \u{2022}  Legal  \u{2022}  Trusted  \u{2022}  End-to-End</text>
    </svg>`},{name:"Digital Marketing",icon:"\u{1F4C8}",svg:`<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect x="0" y="0" width="220" height="180" rx="18" fill="#fff"/>
      <rect x="0" y="0" width="220" height="46" rx="18" fill="${l}"/>
      <rect x="0" y="30" width="220" height="16" fill="${l}"/>
      <text x="14" y="22" font-size="13" fill="#fff" font-family="Poppins,sans-serif" font-weight="800">Digital Marketing</text>
      <rect x="158" y="28" width="48" height="14" rx="7" fill="#fff"/>
      <text x="182" y="38" text-anchor="middle" font-size="7" fill="${l}" font-family="Poppins,sans-serif" font-weight="700">\u{2191} 48% ROI</text>
      <rect x="10" y="52" width="200" height="96" rx="10" fill="#fff8f3"/>
      <line x1="28" y1="136" x2="200" y2="136" stroke="#f0e0d0" stroke-width="1"/>
      <line x1="28" y1="120" x2="200" y2="120" stroke="#f0e0d0" stroke-width="1"/>
      <line x1="28" y1="104" x2="200" y2="104" stroke="#f0e0d0" stroke-width="1"/>
      <line x1="28" y1="88" x2="200" y2="88" stroke="#f0e0d0" stroke-width="1"/>
      <line x1="28" y1="72" x2="200" y2="72" stroke="#f0e0d0" stroke-width="1"/>
      <rect x="34" y="126" width="16" height="10" rx="3" fill="${l}" opacity="0.25"/>
      <rect x="60" y="114" width="16" height="22" rx="3" fill="${l}" opacity="0.4"/>
      <rect x="86" y="98" width="16" height="38" rx="3" fill="${l}" opacity="0.6"/>
      <rect x="112" y="80" width="16" height="56" rx="3" fill="${l}" opacity="0.82"/>
      <rect x="138" y="86" width="16" height="50" rx="3" fill="${l}" opacity="0.9"/>
      <rect x="164" y="66" width="16" height="70" rx="3" fill="${l}"/>
      <polyline points="42,126 68,113 94,97 120,79 146,85 172,65" fill="none" stroke="#1a1a2e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.3" stroke-dasharray="4,3"/>
      <circle cx="172" cy="65" r="5" fill="${l}">
        <animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="172" cy="65" r="3" fill="#fff"/>
      <text x="42" y="150" text-anchor="middle" font-size="6" fill="#bbb" font-family="Poppins,sans-serif">Jan</text>
      <text x="68" y="150" text-anchor="middle" font-size="6" fill="#bbb" font-family="Poppins,sans-serif">Feb</text>
      <text x="94" y="150" text-anchor="middle" font-size="6" fill="#bbb" font-family="Poppins,sans-serif">Mar</text>
      <text x="120" y="150" text-anchor="middle" font-size="6" fill="#bbb" font-family="Poppins,sans-serif">Apr</text>
      <text x="146" y="150" text-anchor="middle" font-size="6" fill="#bbb" font-family="Poppins,sans-serif">May</text>
      <text x="172" y="150" text-anchor="middle" font-size="6" fill="${l}" font-family="Poppins,sans-serif" font-weight="700">Jun</text>
      <rect x="10" y="156" width="34" height="12" rx="6" fill="#fff0e6"/><text x="27" y="164" text-anchor="middle" font-size="6.5" fill="${l}" font-family="Poppins,sans-serif" font-weight="600">SEO</text>
      <rect x="48" y="156" width="40" height="12" rx="6" fill="#fff0e6"/><text x="68" y="164" text-anchor="middle" font-size="6.5" fill="${l}" font-family="Poppins,sans-serif" font-weight="600">Social</text>
      <rect x="92" y="156" width="34" height="12" rx="6" fill="#fff0e6"/><text x="109" y="164" text-anchor="middle" font-size="6.5" fill="${l}" font-family="Poppins,sans-serif" font-weight="600">PPC</text>
      <rect x="130" y="156" width="40" height="12" rx="6" fill="#fff0e6"/><text x="150" y="164" text-anchor="middle" font-size="6.5" fill="${l}" font-family="Poppins,sans-serif" font-weight="600">Email</text>
      <rect x="174" y="156" width="36" height="12" rx="6" fill="${l}"/><text x="192" y="164" text-anchor="middle" font-size="6.5" fill="#fff" font-family="Poppins,sans-serif" font-weight="600">Ads</text>
    </svg>`},{name:"Website Development",icon:"\u{1F4BB}",svg:`<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <filter id="wsh" x="-15%" y="-15%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#ed8337" flood-opacity="0.12"/>
        </filter>
      </defs>
      <rect x="0" y="0" width="220" height="180" rx="18" fill="#fff"/>
      <rect x="0" y="0" width="220" height="46" rx="18" fill="${l}"/>
      <rect x="0" y="30" width="220" height="16" fill="${l}"/>
      <text x="14" y="22" font-size="13" fill="#fff" font-family="Poppins,sans-serif" font-weight="800">Website Development</text>
      <rect x="158" y="28" width="48" height="14" rx="7" fill="#fff"/>
      <text x="182" y="38" text-anchor="middle" font-size="7" fill="${l}" font-family="Poppins,sans-serif" font-weight="700">UI/UX Pro</text>
      <rect x="18" y="60" width="182" height="88" rx="10" fill="#f0c8a0"/>
      <rect x="14" y="56" width="182" height="88" rx="10" fill="#ffd9b8"/>
      <rect x="10" y="52" width="182" height="88" rx="10" fill="#fff" stroke="#ffe0cc" stroke-width="1" filter="url(#wsh)"/>
      <rect x="10" y="52" width="182" height="20" rx="10" fill="${l}"/>
      <rect x="10" y="63" width="182" height="9" fill="${l}"/>
      <circle cx="26" cy="62" r="4.5" fill="#ff5f56"/><circle cx="37" cy="62" r="4.5" fill="#febc2e"/><circle cx="48" cy="62" r="4.5" fill="#28c840"/>
      <rect x="58" y="57" width="116" height="10" rx="5" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.3)" stroke-width="0.8"/>
      <text x="116" y="64.5" text-anchor="middle" font-size="5.5" fill="#fff" font-family="monospace">priyamcs.com</text>
      <rect x="18" y="74" width="166" height="20" rx="5" fill="${l}" opacity="0.85"/>
      <rect x="26" y="78" width="78" height="6" rx="3" fill="rgba(255,255,255,0.55)"/>
      <rect x="26" y="87" width="52" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
      <rect x="20" y="108" width="52" height="28" rx="6" fill="#f0c0a0"/>
      <rect x="18" y="105" width="52" height="28" rx="6" fill="#fff" stroke="#ffe0cc" stroke-width="0.8" filter="url(#wsh)"/>
      <text x="44" y="117" text-anchor="middle" font-size="13">\u{1F4A1}</text>
      <text x="44" y="128" text-anchor="middle" font-size="6" fill="${l}" font-family="Poppins,sans-serif" font-weight="700">Design</text>
      <rect x="86" y="108" width="52" height="28" rx="6" fill="#f0c0a0"/>
      <rect x="84" y="105" width="52" height="28" rx="6" fill="#fff" stroke="${l}" stroke-width="1" filter="url(#wsh)"/>
      <text x="110" y="117" text-anchor="middle" font-size="13">\u{26A1}</text>
      <text x="110" y="128" text-anchor="middle" font-size="6" fill="${l}" font-family="Poppins,sans-serif" font-weight="700">Speed</text>
      <rect x="152" y="108" width="34" height="28" rx="6" fill="#f0c0a0"/>
      <rect x="150" y="105" width="34" height="28" rx="6" fill="#fff" stroke="#ffe0cc" stroke-width="0.8" filter="url(#wsh)"/>
      <text x="167" y="117" text-anchor="middle" font-size="13">\u{1F527}</text>
      <text x="167" y="128" text-anchor="middle" font-size="6" fill="${l}" font-family="Poppins,sans-serif" font-weight="700">Dev</text>
      <polygon points="110,82 114,90 111.5,89 110.5,93 107,86" fill="${l}" opacity="0.9">
        <animateTransform attributeName="transform" type="translate" values="0,0;20,8;0,0" dur="2.8s" repeatCount="indefinite"/>
      </polygon>
      <rect x="10" y="148" width="34" height="11" rx="5.5" fill="#fff0e6" stroke="${l}" stroke-width="0.8"/><text x="27" y="155.5" text-anchor="middle" font-size="6" fill="${l}" font-family="Poppins,sans-serif">React</text>
      <rect x="48" y="148" width="38" height="11" rx="5.5" fill="#fff0e6" stroke="${l}" stroke-width="0.8"/><text x="67" y="155.5" text-anchor="middle" font-size="6" fill="${l}" font-family="Poppins,sans-serif">Next.js</text>
      <rect x="90" y="148" width="38" height="11" rx="5.5" fill="#fff0e6" stroke="${l}" stroke-width="0.8"/><text x="109" y="155.5" text-anchor="middle" font-size="6" fill="${l}" font-family="Poppins,sans-serif">Node.js</text>
      <rect x="132" y="148" width="30" height="11" rx="5.5" fill="#fff0e6" stroke="${l}" stroke-width="0.8"/><text x="147" y="155.5" text-anchor="middle" font-size="6" fill="${l}" font-family="Poppins,sans-serif">UI/UX</text>
      <rect x="166" y="148" width="44" height="11" rx="5.5" fill="${l}"/><text x="188" y="155.5" text-anchor="middle" font-size="6" fill="#fff" font-family="Poppins,sans-serif">50+ Sites</text>
      <rect x="10" y="163" width="200" height="14" rx="7" fill="#fff8f3" stroke="#ffe0cc" stroke-width="1"/>
      <text x="110" y="172.5" text-anchor="middle" font-size="6.5" fill="${l}" font-weight="800" font-family="Poppins,sans-serif">50+ Built \xb7 4.9\u{2605} Rating \xb7 3 Day Delivery</text>
    </svg>`},{name:"Human Resources",icon:"\u{1F465}",svg:`<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect x="0" y="0" width="220" height="180" rx="18" fill="#fff"/>

      <!-- Orange header \u{2014} Bus Reg style -->
      <rect x="0" y="0" width="220" height="46" rx="18" fill="${l}"/>
      <rect x="0" y="30" width="220" height="16" fill="${l}"/>
      <text x="14" y="22" font-size="13" fill="#fff" font-family="Poppins,sans-serif" font-weight="800">Human Resources</text>
      <!-- White pill badge -->
      <rect x="152" y="28" width="54" height="14" rx="7" fill="#fff"/>
      <text x="179" y="38" text-anchor="middle" font-size="7" fill="${l}" font-family="Poppins,sans-serif" font-weight="700">Team Pulse</text>

      <!-- Donut chart \u{2014} 90% -->
      <!-- Track -->
      <circle cx="82" cy="108" r="48" fill="none" stroke="#ffe0cc" stroke-width="13"/>
      <!-- 90% arc \u{2014} continuous grow then hold loop -->
      <circle cx="82" cy="108" r="48" fill="none" stroke="${l}" stroke-width="13"
        stroke-dasharray="271 302" stroke-dashoffset="75" stroke-linecap="round">
        <animate attributeName="stroke-dasharray" values="0 302;271 302;271 302;0 302" dur="4s" repeatCount="indefinite"/>
      </circle>
      <!-- Glow pulse ring outer -->
      <circle cx="82" cy="108" r="54" fill="none" stroke="${l}" stroke-width="1.5" opacity="0.2">
        <animate attributeName="r" values="54;60;54" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.25;0;0.25" dur="2s" repeatCount="indefinite"/>
      </circle>
      <!-- Spinning dot on arc tip -->
      <circle r="6" fill="${l}">
        <animateMotion path="M82,60 A48,48 0 1,1 81.9,60" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0;0" dur="4s" repeatCount="indefinite"/>
      </circle>

      <!-- Center text -->
      <text x="82" y="101" text-anchor="middle" font-size="22" fill="${l}" font-weight="800" font-family="Poppins,sans-serif">90%</text>
      <text x="82" y="114" text-anchor="middle" font-size="7.5" fill="#aaa" font-family="Poppins,sans-serif">Satisfaction</text>
      <text x="82" y="124" text-anchor="middle" font-size="7" fill="${l}" font-family="Poppins,sans-serif" font-weight="600">\u{1F60A} Excellent</text>

      <!-- Right side stat cards -->
      <rect x="146" y="52" width="66" height="26" rx="8" fill="#fff4ee" stroke="#ffe0cc" stroke-width="1"/>
      <text x="179" y="63" text-anchor="middle" font-size="8" fill="${l}" font-weight="800" font-family="Poppins,sans-serif">\u{1F60A} 4.8</text>
      <text x="179" y="73" text-anchor="middle" font-size="6" fill="#aaa" font-family="Poppins,sans-serif">Avg. Rating</text>

      <rect x="146" y="84" width="66" height="26" rx="8" fill="#fff4ee" stroke="#ffe0cc" stroke-width="1"/>
      <text x="179" y="95" text-anchor="middle" font-size="8" fill="${l}" font-weight="800" font-family="Poppins,sans-serif">500+</text>
      <text x="179" y="105" text-anchor="middle" font-size="6" fill="#aaa" font-family="Poppins,sans-serif">Placements</text>

      <rect x="146" y="116" width="66" height="26" rx="8" fill="${l}"/>
      <text x="179" y="127" text-anchor="middle" font-size="8" fill="#fff" font-weight="800" font-family="Poppins,sans-serif">\u{2191} 5%</text>
      <text x="179" y="137" text-anchor="middle" font-size="6" fill="rgba(255,255,255,0.85)" font-family="Poppins,sans-serif">This Month</text>
      <!-- pulse on orange card -->
      <rect x="146" y="116" width="66" height="26" rx="8" fill="none" stroke="${l}" stroke-width="2">
        <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="stroke-width" values="2;6;2" dur="2s" repeatCount="indefinite"/>
      </rect>

      <!-- Bottom label strip \u{2014} Bus Reg style -->
      <rect x="6" y="152" width="208" height="22" rx="8" fill="#fff4ee" stroke="#ffe0cc" stroke-width="1"/>
      <text x="50" y="165" text-anchor="middle" font-size="7.5" fill="${l}" font-weight="800" font-family="Poppins,sans-serif">500+</text>
      <text x="50" y="171" text-anchor="middle" font-size="5.5" fill="#aaa" font-family="Poppins,sans-serif">Placed</text>
      <line x1="90" y1="153" x2="90" y2="173" stroke="#ffe0cc" stroke-width="1"/>
      <text x="118" y="165" text-anchor="middle" font-size="7.5" fill="${l}" font-weight="800" font-family="Poppins,sans-serif">98%</text>
      <text x="118" y="171" text-anchor="middle" font-size="5.5" fill="#aaa" font-family="Poppins,sans-serif">Retention</text>
      <line x1="148" y1="153" x2="148" y2="173" stroke="#ffe0cc" stroke-width="1"/>
      <text x="178" y="165" text-anchor="middle" font-size="7.5" fill="${l}" font-weight="800" font-family="Poppins,sans-serif">4.9\u{2605}</text>
      <text x="178" y="171" text-anchor="middle" font-size="5.5" fill="#aaa" font-family="Poppins,sans-serif">Rating</text>
    </svg>`},{name:"Digital Transformation",icon:"\u{1F680}",svg:`<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect x="0" y="0" width="220" height="180" rx="18" fill="#fff"/>
      <rect x="0" y="0" width="220" height="46" rx="18" fill="${l}"/>
      <rect x="0" y="30" width="220" height="16" fill="${l}"/>
      <text x="14" y="22" font-size="13" fill="#fff" font-family="Poppins,sans-serif" font-weight="800">Digital Transformation</text>
      <rect x="158" y="28" width="48" height="14" rx="7" fill="#fff"/>
      <text x="182" y="38" text-anchor="middle" font-size="7" fill="${l}" font-family="Poppins,sans-serif" font-weight="700">Innovate</text>
      <circle cx="110" cy="108" r="24" fill="#fff4ee" stroke="${l}" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
      <circle cx="110" cy="108" r="18" fill="#fff" stroke="${l}" stroke-width="1.5"/>
      <circle cx="110" cy="108" r="14" fill="${l}"/>
      <text x="110" y="114" text-anchor="middle" font-size="16">\u{1F680}</text>
      <circle cx="110" cy="108" r="46" fill="none" stroke="${l}" stroke-width="1" stroke-dasharray="4,4" opacity="0.28">
        <animateTransform attributeName="transform" type="rotate" values="0 110 108;360 110 108" dur="10s" repeatCount="indefinite"/>
      </circle>
      <circle cx="58" cy="72" r="17" fill="#fff4ee" stroke="${l}" stroke-width="1"/>
      <text x="58" y="78" text-anchor="middle" font-size="15">\u{2601}\u{FE0F}</text>
      <text x="58" y="93" text-anchor="middle" font-size="6" fill="${l}" font-family="Poppins,sans-serif" font-weight="700">Cloud</text>
      <line x1="73" y1="80" x2="93" y2="95" stroke="${l}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
      <circle cx="162" cy="72" r="17" fill="#fff4ee" stroke="${l}" stroke-width="1"/>
      <text x="162" y="78" text-anchor="middle" font-size="15">\u{1F916}</text>
      <text x="162" y="93" text-anchor="middle" font-size="6" fill="${l}" font-family="Poppins,sans-serif" font-weight="700">AI/ML</text>
      <line x1="147" y1="80" x2="127" y2="95" stroke="${l}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
      <circle cx="58" cy="144" r="17" fill="#fff4ee" stroke="${l}" stroke-width="1"/>
      <text x="58" y="150" text-anchor="middle" font-size="15">\u{1F4CA}</text>
      <text x="58" y="165" text-anchor="middle" font-size="6" fill="${l}" font-family="Poppins,sans-serif" font-weight="700">Analytics</text>
      <line x1="73" y1="136" x2="93" y2="121" stroke="${l}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
      <circle cx="162" cy="144" r="17" fill="#fff4ee" stroke="${l}" stroke-width="1"/>
      <text x="162" y="150" text-anchor="middle" font-size="15">\u{1F510}</text>
      <text x="162" y="165" text-anchor="middle" font-size="6" fill="${l}" font-family="Poppins,sans-serif" font-weight="700">Security</text>
      <line x1="147" y1="136" x2="127" y2="121" stroke="${l}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
      <circle r="4" fill="${l}" opacity="0.9">
        <animateMotion path="M110,62 A46,46 0 1,1 109.9,62" dur="4s" repeatCount="indefinite"/>
      </circle>
    </svg>`}];function d(){let[e,t]=(0,s.useState)(0),[i,a]=(0,s.useState)([]),r=(0,s.useRef)(null),o=(0,s.useRef)(null),l=(0,s.useRef)(0),d=(0,s.useRef)(null),[h,p]=(0,s.useState)("u">typeof window?window.innerWidth:1200);(0,s.useEffect)(()=>{let e=()=>p(window.innerWidth);return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let m=!(h>1100),f=()=>{clearInterval(d.current),d.current=setInterval(()=>t(e=>(e+1)%c.length),2800)};(0,s.useEffect)(()=>(f(),()=>clearInterval(d.current)),[]),(0,s.useEffect)(()=>{let e,t=o.current,i=r.current;if(!t||!i||m){t&&(t.width=0,t.height=0),a([]);return}return!function n(){let s=i.offsetWidth/2,r=i.offsetHeight/2,o=Math.sqrt(s*s+r*r)+58,d=2*o+40;t.width=t.height=d,t.style.cssText=`position:absolute;pointer-events:none;z-index:1;width:${d}px;height:${d}px;left:${s-d/2}px;top:${r-d/2}px;`;let h=t.getContext("2d");h.clearRect(0,0,d,d),h.beginPath(),h.arc(d/2,d/2,o,0,2*Math.PI),h.setLineDash([5,8]),h.strokeStyle="rgba(237,131,55,0.25)",h.lineWidth=1.5,h.stroke(),a(c.map((e,t)=>{let i=l.current+t/c.length*Math.PI*2;return{x:s+o*Math.cos(i),y:r+o*Math.sin(i)}})),l.current+=.004,e=requestAnimationFrame(n)}(),()=>cancelAnimationFrame(e)},[m,58]);let g=e=>{t(e),f()};return(0,n.jsx)("div",{className:"pcs-body",children:(0,n.jsxs)("section",{className:"hero",children:[(0,n.jsxs)("div",{className:"hero-left",children:[(0,n.jsxs)("div",{className:"badge",children:[(0,n.jsx)("div",{className:"badge-dot"}),"Business Growth Partner "]}),(0,n.jsxs)("h1",{className:"hero-heading",children:["All-in-One",(0,n.jsx)("br",{}),"Solutions for your",(0,n.jsx)("span",{className:"orange",children:" Business Journey"})]}),(0,n.jsx)("p",{className:"hero-sub",children:"One partner for all your needs \u2013 business setup, finance, digital transformation, digital marketing, and HR \u2013 helping your business grow smarter and faster."}),(0,n.jsx)("p",{className:"hero-sub",children:"Partner with us to build, scale, and succeed in a digital-first world."}),(0,n.jsx)("div",{className:"hero-actions",children:(0,n.jsx)("a",{href:"#",className:"btn-fill",children:"Explore Services"})})]}),(0,n.jsxs)("div",{className:"hero-right",style:{},children:[(0,n.jsx)("div",{className:"glow-ring glow-ring-2"}),(0,n.jsx)("div",{className:"glow-ring"}),(0,n.jsxs)("div",{className:"phone-wrap",ref:r,children:[(0,n.jsxs)("div",{className:"phone phone-white",children:[(0,n.jsx)("div",{className:"phone-notch phone-notch-white"}),(0,n.jsxs)("div",{className:"phone-status phone-status-orange",children:[(0,n.jsx)("span",{children:"9:41"}),(0,n.jsx)("span",{children:"\u2590\u2590\u2590 \u2726 100%"})]}),(0,n.jsxs)("div",{className:"phone-screen phone-screen-white",children:[(0,n.jsxs)("div",{className:"app-header app-header-white",children:[(0,n.jsxs)("div",{className:"app-logo-sm app-logo-dark",children:["Priyam ",(0,n.jsx)("em",{children:"Consultancy"})," Services"]}),(0,n.jsx)("div",{className:"app-notif app-notif-orange",children:"\u{1F514}"})]}),(0,n.jsx)("div",{className:"svc-slide svc-slide-white",onMouseEnter:()=>clearInterval(d.current),onMouseLeave:f,children:c.map((t,i)=>(0,n.jsxs)("div",{className:"slide-item",style:{opacity:+(i===e),pointerEvents:i===e?"all":"none"},children:[(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:t.svg},style:{width:"100%"}}),(0,n.jsx)("div",{className:"slide-label slide-label-orange",children:t.name})]},i))}),(0,n.jsx)("div",{className:"svc-dots",children:c.map((t,i)=>(0,n.jsx)("div",{className:"svc-dot",onClick:()=>g(i),style:{width:i===e?18:6,background:i===e?"#ed8337":"rgba(237,131,55,0.25)"}},i))})]})]}),(0,n.jsx)("canvas",{ref:o,className:"orbit-canvas"}),!m&&i.map((t,i)=>(0,n.jsxs)("div",{className:`svc-pill${i===e?" active":""}`,style:{left:t.x-64,top:t.y-13,minWidth:128},onClick:()=>g(i),children:[(0,n.jsx)("span",{className:"pill-icon",children:c[i].icon}),(0,n.jsx)("span",{className:"pill-name",children:c[i].name})]},i)),!m&&i.map((e,t)=>(0,n.jsx)("div",{className:"orbit-dot",style:{left:e.x-3.5,top:e.y-3.5}},`d${t}`))]}),!1,(h<768||h>=768&&h<=860||h>=861&&h<=1100)&&(0,n.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"8px",marginTop:"20px",padding:"0 8px"},children:c.map((t,i)=>(0,n.jsxs)("div",{onClick:()=>g(i),style:{display:"flex",alignItems:"center",gap:"6px",padding:"6px 14px",borderRadius:"20px",fontSize:"12px",fontWeight:i===e?700:500,cursor:"pointer",transition:"all 0.3s ease",background:i===e?"#ed8337":"rgba(237,131,55,0.1)",color:i===e?"#fff":"#ed8337",border:i===e?"none":"1px solid rgba(237,131,55,0.35)",boxShadow:i===e?"0 4px 12px rgba(237,131,55,0.35)":"none"},children:[(0,n.jsx)("span",{style:{fontSize:"14px"},children:t.icon}),(0,n.jsx)("span",{children:t.name})]},i))})]})]})})}let h=[{id:1,name:"Analytix-Hub",logo:"/img/Analytix-Hub.webp"},{id:2,name:"Baltimore",logo:"/img/baltimore.webp"},{id:3,name:"Sterlo",logo:"/img/sterlo.webp"},{id:4,name:"Sterlo Build",logo:"/img/sterlobuild-partner.webp"},{id:5,name:"Sterlo Care",logo:"/img/sterlocare-partner.webp"},{id:6,name:"Microsoft",logo:"/img/microsoft-app-partner.jpeg"},{id:7,name:"Odoo",logo:"/img/odoo-partner.webp"},{id:8,name:"OreOps",logo:"/img/oreopps.webp"},{id:9,name:"Riya Consultancy",logo:"/img/riyaconsultancy.webp"},{id:10,name:"Tactive",logo:"/img/tactive.webp"},{id:11,name:"URCTS",logo:"/img/urctc.webp"},{id:12,name:"ZKY",logo:"/img/zky.webp"}];function p(){let e=[...h,...h];return(0,n.jsx)("section",{className:"partners-section",children:(0,n.jsxs)("div",{className:"partners-track-wrapper",children:[(0,n.jsx)("div",{className:"partners-fade-left"}),(0,n.jsx)("div",{className:"partners-fade-right"}),(0,n.jsx)("div",{className:"partners-track",children:e.map((e,t)=>(0,n.jsx)("div",{className:"partner-logo-card",children:e.logo&&(0,n.jsx)("img",{src:e.logo,alt:e.name})},t))})]})})}function m(){return(0,n.jsxs)("div",{className:"page",children:[(0,n.jsx)("span",{className:"dot",style:{width:"10px",height:"10px",background:"#ed8337",top:"170px",left:"410px",animationDuration:"5s",animationDelay:"0s"}}),(0,n.jsx)("span",{className:"dot",style:{width:"7px",height:"7px",background:"#ed8337",top:"215px",left:"545px",animationDuration:"6.5s",animationDelay:"0.3s"}}),(0,n.jsx)("span",{className:"dot",style:{width:"14px",height:"14px",background:"#ed8337",top:"408px",left:"265px",animationDuration:"7s",animationDelay:"0.5s"}}),(0,n.jsx)("span",{className:"dot",style:{width:"10px",height:"10px",background:"#ed8337",top:"458px",left:"465px",animationDuration:"5.8s",animationDelay:"0.2s"}}),(0,n.jsx)("span",{className:"dot",style:{width:"8px",height:"8px",background:"#ed8337",top:"498px",left:"585px",animationDuration:"6.2s",animationDelay:"0.4s"}}),(0,n.jsx)("span",{className:"dot",style:{width:"11px",height:"11px",background:"#ed8337",top:"510px",left:"65px",animationDuration:"7.2s",animationDelay:"0.1s"}}),(0,n.jsx)("span",{className:"dot",style:{width:"7px",height:"7px",background:"#ed8337",top:"210px",left:"82px",animationDuration:"5.5s",animationDelay:"0.6s"}}),(0,n.jsx)("span",{className:"red-ring"}),(0,n.jsx)("span",{className:"small-dot"}),(0,n.jsxs)("div",{className:"left",children:[(0,n.jsx)("div",{className:"why-eyebrow",children:"Who We Are"}),(0,n.jsxs)("h2",{children:[" One Team Powering Every Stage of ",(0,n.jsx)("em",{children:(0,n.jsx)("i",{children:"Your Business Growth."})})]}),(0,n.jsx)("p",{children:"Priyam Consultancy Services is your all-in-one business partner, guiding you from business registration and compliances, then through digital transformation, digital marketing for brand reach and lead generation, and human resource management. With PCS, businesses gain a single, trusted partner to manage every step of their growth journey, making complex processes seamless, efficient, and tailored for lasting success."})]}),(0,n.jsx)("div",{className:"right",children:(0,n.jsx)("img",{src:"/img/who-we-are.webp",alt:"Who We Are",className:"who-img"})})]})}let f=[{emoji:"/img/icon/business-registration-compliance.webp",label:" Business Registration and Compliance  ",tagline:"Scalable, fast & modern web solutions built for growth",iconBg:"rgba(59,130,246,0.12)",iconBorder:"1.5px solid rgba(59,130,246,0.25)",cards:[{num:"01",icon:"/img/icon/business-registration.webp",iconBg:"rgba(59,130,246,0.1)",title:"Business Registration",desc:"Public Limited, Private Limited, LLP, OPC, Partnership, Sole Proprietorship services.",link:"/business-registrations",glow:"#ed8337"},{num:"02",icon:"/img/icon/statutory-compliance.webp",iconBg:"rgba(237,131,55,0.1)",title:"Statutory Compliance",desc:"Ensuring timely filings, audits, and adherence to all regulatory requirements.",link:"/statutory-compliance",glow:"#ed8337"},{num:"03",icon:"/img/icon/virtual-cfo.webp",iconBg:"rgba(99,179,237,0.1)",title:"Virtual CFO Services",desc:"Strategic financial guidance, budgeting, and reporting to drive informed business decisions.",link:"/virtual-cfo-services",glow:"#ed8337"},{num:"04",icon:"/img/icon/investment.webp",iconBg:"rgba(72,187,120,0.1)",title:"Investment Support",desc:"Providing accurate valuations and insights to secure funding and drive growth.",link:"/company-valuations-and-investment-support",glow:"#ed8337"},{num:"05",icon:"/img/icon/accounting.webp",iconBg:"rgba(237,131,55,0.1)",title:"Accounting",desc:"Complete accounting, GST, TDS, MIS reports, payroll, and back-office support.",link:"/accounting",glow:"#ed8337"},{num:"06",icon:"/img/icon/finance.webp",iconBg:"rgba(246,173,85,0.1)",title:"Finances",desc:"Banking, loans, CMA reports, audits, approvals, and complete financial support services.",link:"/finances",glow:"#ed8337"}]},{emoji:"/img/icon/digital-marketing.webp",label:"Digital Marketing",tagline:"Native & cross-platform apps with exceptional user experiences",iconBg:"rgba(52,211,153,0.1)",iconBorder:"1.5px solid rgba(52,211,153,0.25)",cards:[{num:"01",icon:"/img/icon/seo.webp",iconBg:"rgba(52,211,153,0.1)",title:"Search Engine Optimization",desc:"Advanced SEO from technical optimization to content and link building for higher rankings.",link:"/search-engine-optimization",glow:"#ed8337"},{num:"02",icon:"/img/icon/ppc-marketing.webp",iconBg:"rgba(72,187,120,0.1)",title:"Performance Marketing",desc:"Run targeted ads on Google, Meta, LinkedIn, YouTube & display to generate leads.",link:"/performance-marketing",glow:"#ed8337"},{num:"03",icon:"/img/icon/smm.webp",iconBg:"rgba(56,189,248,0.1)",title:"Social Media Marketing",desc:"Data-driven social media and content management strategies to grow your online brand.",link:"/social-media-marketing",glow:"#ed8337"},{num:"04",icon:"/img/icon/content-marketing.webp",iconBg:"rgba(99,179,237,0.1)",title:"Content Marketing",desc:"Strategic content, blogs, and website copy to engage and convert your target audience.",link:"/content-marketing",glow:"#ed8337"},{num:"05",icon:"/img/icon/email-marketing.webp",iconBg:"rgba(237,131,55,0.1)",title:"Marketplace Ecommerce Marketing",desc:"Engage customers directly with targeted email and WhatsApp marketing campaigns.",link:"/marketplace-ecommerce-marketing",glow:"#ed8337"},{num:"06",icon:"/img/icon/graphic-design.webp",iconBg:"rgba(246,173,85,0.1)",title:"Graphic Designing",desc:"Creative designs for logos, print, digital, and social media to elevate your brand identity.",link:"/graphic-design",glow:"#ed8337"}]},{emoji:"/img/icon/website-development.webp",label:"Website Development",tagline:"Visual storytelling that makes your brand impossible to forget",iconBg:"rgba(168,85,247,0.1)",iconBorder:"1.5px solid rgba(168,85,247,0.25)",cards:[{num:"01",icon:"/img/icon/website-design.webp",iconBg:"rgba(168,85,247,0.1)",title:"Website Design",desc:"Create visually compelling, user-focused website designs that strengthen brand presence.",link:"/website-design",glow:"#ed8337"},{num:"02",icon:"/img/icon/static-website-development.webp",iconBg:"rgba(237,131,55,0.1)",title:"Static Website Development",desc:"Develop fast, secure static websites ideal for professional business presence.",link:"/static-website-development",glow:"#ed8337"},{num:"03",icon:"/img/icon/custom-website-development.webp",iconBg:"rgba(99,179,237,0.1)",title:"Custom Website Development",desc:"Build fully customized websites tailored to unique business requirements and goals.",link:"/custom-website-development",glow:"#ed8337"},{num:"04",icon:"/img/icon/woocommerce-website-development.webp",iconBg:"rgba(168,85,247,0.1)",title:"WooCommerce Website Development",desc:"Develop scalable WooCommerce stores with secure payments and flexible features.",link:"/woocommerce-website-development",glow:"#ed8337"},{num:"05",icon:"/img/icon/ecommerce-website-development.webp",iconBg:"rgba(236,72,153,0.1)",title:"E-Commerce Website Development",desc:"Create conversion-focused ecommerce websites optimized for performance and scalability.",link:"/shopify-website-development",glow:"#ed8337"},{num:"06",icon:"/img/icon/shopify-website-development.webp",iconBg:"rgba(246,173,85,0.1)",title:"Shopify Website Development",desc:"Design high-performing Shopify stores built for growth and seamless selling.",link:"/e-commerce-website-development",glow:"#ed8337"}]},{emoji:"/img/icon/hr-services.webp",label:"Human Resource",tagline:"Scalable infrastructure & automated pipelines for reliable systems",iconBg:"rgba(56,189,248,0.1)",iconBorder:"1.5px solid rgba(56,189,248,0.25)",cards:[{num:"01",icon:"/img/icon/payroll-management.webp",iconBg:"rgba(56,189,248,0.1)",title:"Payroll Management",desc:"Comprehensive payroll management, outsourcing, and expert consulting services to streamline processes.",link:"/recruitment-services",glow:"#ed8337"},{num:"02",icon:"/img/icon/recruitment-services.webp",iconBg:"rgba(99,179,237,0.1)",title:"Recruitment Services",desc:"Comprehensive end-to-end hiring solutions, expert consultancy, and seamless process outsourcing tailored to your needs.",link:"/payroll-management",glow:"#ed8337"},{num:"03",icon:"/img/icon/hr-strategy.webp",iconBg:"rgba(237,131,55,0.1)",title:"HR Strategy & Policy Development",desc:"Expert HR policy development, strategic planning, audits, and advisory services for businesses.",link:"/hr-strategy-and-policy-development",glow:"#ed8337"}]},{emoji:"/img/icon/digital-transformation.webp",label:"Digital Transformation",tagline:"Data-driven campaigns that grow your brand & maximize ROI",iconBg:"rgba(237,131,55,0.12)",iconBorder:"1.5px solid rgba(237,131,55,0.3)",cards:[{num:"01",icon:"/img/icon/business-process-automation.webp",iconBg:"rgba(237,131,55,0.1)",title:"Business Process Automation",desc:"Technical SEO, keyword strategy, and on-page optimization to rank higher on Google and drive organic traffic.",link:"/business-process-automation",glow:"#ed8337"},{num:"02",icon:"/img/icon/custom-web-mobile-applications.webp",iconBg:"rgba(236,72,153,0.1)",title:"Custom Web & Mobile Applications",desc:"Engaging campaigns across Instagram, Facebook, LinkedIn & Twitter that build community and brand awareness.",link:"/web-and-mobile-application",glow:"#ed8337"},{num:"03",icon:"/img/icon/data-analytics.webp",iconBg:"rgba(59,130,246,0.1)",title:"Data Analytics",desc:"Precisely targeted PPC campaigns on Google Search, Display, YouTube, and Meta platforms that convert clicks into customers.",link:"/data-analytics",glow:"#ed8337"}]}];function g(){let[e,t]=(0,s.useState)(0),i=f[e];return(0,n.jsxs)("section",{id:"services",children:[(0,n.jsx)("div",{className:"svc-divider"}),(0,n.jsxs)("div",{className:"svc-header",children:[(0,n.jsx)("div",{className:"svc-eyebrow",children:"Our Services"}),(0,n.jsxs)("h2",{className:"svc-title",children:["Your Complete ",(0,n.jsx)("span",{className:"hl",style:{fontWeight:"700"},children:(0,n.jsx)("i",{children:"Business Growth"})})," Partner"]}),(0,n.jsx)("p",{className:"svc-subtitle",children:"We provide end-to-end services \u2013 from setting up your business and compliances to driving growth through digital innovation, digital marketing, and strong HR solutions."})]}),(0,n.jsx)("div",{className:"tab-row",children:f.map((i,s)=>(0,n.jsxs)("button",{className:`svc-tab${e===s?" active":""}`,onClick:()=>t(s),children:[(0,n.jsx)("span",{className:"tab-emoji",children:i.emoji?(0,n.jsx)("img",{src:i.emoji,alt:i.label,width:18,height:18}):(0,n.jsx)(o,{size:18})}),i.label]},s))}),(0,n.jsx)("div",{className:"panels-wrap",children:(0,n.jsxs)("div",{className:"svc-panel active",children:[(0,n.jsx)("div",{className:"panel-topbar",children:(0,n.jsxs)("div",{className:"panel-info",children:[(0,n.jsx)("div",{className:"panel-bigicon",style:{background:i.iconBg,border:i.iconBorder},children:i.emoji?(0,n.jsx)("img",{src:i.emoji,alt:i.label,width:32,height:32}):(0,n.jsx)(o,{size:32})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"panel-name",children:i.label}),(0,n.jsx)("div",{className:"panel-tagline",children:i.tagline})]})]})}),(0,n.jsx)("div",{className:"sub-grid",children:i.cards.map((e,t)=>(0,n.jsxs)("div",{className:"sub-card",children:[(0,n.jsx)("div",{className:"card-num",children:e.num}),(0,n.jsx)("div",{className:"card-icon-wrap",style:{background:e.iconBg},children:e.icon?(0,n.jsx)("img",{src:e.icon,alt:e.title,width:30,height:30}):(0,n.jsx)(o,{size:26,color:"#ed8337"})}),(0,n.jsx)("h3",{className:"card-title",children:e.title}),(0,n.jsx)("div",{className:"card-desc",children:e.desc}),(0,n.jsx)("div",{className:"card-arrow",children:(0,n.jsxs)("a",{href:e.link,className:"card-arrow",children:["Explore Service ",(0,n.jsx)("span",{children:"\u2192"})]})}),(0,n.jsx)("div",{className:"card-glow",style:{background:e.glow}})]},t))})]},e)})]})}let x=[{num:"01",icon:"/img/icon/one-point-access.webp",title:"One Point Access",desc:"Complete expertise integrated under one roof for sustainable growth, digital innovation, and long-term business success."},{num:"02",icon:"/img/icon/customized-strategies.webp",title:"Customized Strategies",desc:"We don't rely on templates - we deliver tailor-made solutions designed around your unique requirements."},{num:"03",icon:"/img/icon/expert-team.webp",title:"Expert Team",desc:"Skilled professionals offering multi-domain and technical expertise and solutions to drive your business forward."},{num:"04",icon:"/img/icon/result-oriented.webp",title:"Result-Oriented",desc:"Driven by ROI, performance, and sustainable business growth through innovative strategies and expert solutions."},{num:"05",icon:"/img/icon/customer-success.webp",title:"Customer Success First",desc:"Our goal isn't just sales, we grow by helping you succeed, innovate, and achieve long-term business excellence."},{num:"06",icon:"/img/icon/scalable-solutions.webp",title:"Scalable Solutions",desc:"Flexible and tailored offerings designed to support businesses of all sizes, from startups to large enterprises."}],u=({n:e})=>(0,n.jsxs)("div",{className:"why-panel",children:[(0,n.jsx)("span",{className:"wn-num",children:e.num}),(0,n.jsx)("span",{className:"wn-icon",children:(0,n.jsx)("img",{src:e.icon,alt:e.title,width:32,height:32,style:{objectFit:"contain"}})}),(0,n.jsx)("h3",{className:"wn-title",children:e.title}),(0,n.jsx)("div",{className:"wn-desc",children:e.desc})]});function y(){let e=(0,s.useRef)(null),t=(0,s.useRef)(null),i=(0,s.useRef)([]);return(0,s.useEffect)(()=>{let n=()=>{if(e.current&&t.current&&!(window.innerWidth<=780)){var n,s,a;let r,o,l,c,d,h,p,m,f;n=e.current,s=t.current,a=i.current,s.innerHTML="",r=n.offsetWidth,o=n.offsetHeight,l=r/2,c=o/2,d=.385*Math.min(r,o),h="http://www.w3.org/2000/svg",p=-Math.PI/2-Math.PI/6,s.setAttribute("viewBox",`0 0 ${r} ${o}`),m=document.createElementNS(h,"defs"),s.appendChild(m),f=document.createElementNS(h,"circle"),Object.entries({cx:l,cy:c,r:d,fill:"none",stroke:"rgba(237,131,55,0.08)","stroke-width":"1","stroke-dasharray":"3 6"}).forEach(([e,t])=>f.setAttribute(e,t)),s.appendChild(f),a.forEach((e,t)=>{if(!e)return;let i=p+t/6*Math.PI*2,n=l+d*Math.cos(i),a=c+d*Math.sin(i);e.style.left=n+"px",e.style.top=a+"px";let r=n-l,o=a-c,f=Math.sqrt(r*r+o*o),g=l+r/f*65,x=c+o/f*65,u=document.createElementNS(h,"linearGradient");u.setAttribute("id",`spk${t}`),u.setAttribute("gradientUnits","userSpaceOnUse"),["x1","y1","x2","y2"].forEach((e,t)=>u.setAttribute(e,[g,x,n,a][t])),u.innerHTML='<stop offset="0%" stop-color="#ed8337" stop-opacity="0.7"/><stop offset="100%" stop-color="#ed8337" stop-opacity="0.15"/>',m.appendChild(u);let y=document.createElementNS(h,"line");Object.entries({x1:g,y1:x,x2:n,y2:a,stroke:`url(#spk${t})`,"stroke-width":"1.5","stroke-dasharray":"5 4"}).forEach(([e,t])=>y.setAttribute(e,t)),s.appendChild(y);let w=document.createElementNS(h,"path");w.setAttribute("id",`mp${t}`),w.setAttribute("d",`M${g},${x} L${n},${a}`),w.setAttribute("fill","none"),s.appendChild(w);let b=document.createElementNS(h,"circle");b.setAttribute("r","3"),b.setAttribute("fill","#ed8337"),b.setAttribute("opacity","0.85");let v=document.createElementNS(h,"animateMotion");v.setAttribute("dur",2.2+.35*t+"s"),v.setAttribute("repeatCount","indefinite"),v.setAttribute("calcMode","linear");let k=document.createElementNS(h,"mpath");k.setAttributeNS("http://www.w3.org/1999/xlink","href","#mp"+t),v.appendChild(k),b.appendChild(v),s.appendChild(b);let j=d+28,N=2*Math.PI/6*.5,S=document.createElementNS(h,"path");S.setAttribute("d",`M${l+j*Math.cos(i-N/2)},${c+j*Math.sin(i-N/2)} A${j},${j} 0 0,1 ${l+j*Math.cos(i+N/2)},${c+j*Math.sin(i+N/2)}`),Object.entries({fill:"none",stroke:"rgba(237,131,55,0.18)","stroke-width":"1.5","stroke-linecap":"round"}).forEach(([e,t])=>S.setAttribute(e,t)),s.appendChild(S)})}};window.addEventListener("load",n),window.addEventListener("resize",n);let s=setTimeout(n,300);return()=>{window.removeEventListener("load",n),window.removeEventListener("resize",n),clearTimeout(s)}},[]),(0,n.jsxs)("section",{id:"why",children:[(0,n.jsx)("div",{className:"why-divider"}),(0,n.jsxs)("div",{className:"why-hdr",children:[(0,n.jsx)("div",{className:"why-eyebrow",children:"Why Choose Us"}),(0,n.jsxs)("h2",{children:[(0,n.jsx)("span",{className:"hl",children:(0,n.jsx)("i",{children:"One-Stop Solution for"})})," Business Registration, Digital Transformation, Marketing & HR"]})]}),(0,n.jsxs)("div",{className:"why-radial-wrap",ref:e,children:[(0,n.jsx)("svg",{className:"why-spoke-svg",ref:t}),(0,n.jsx)("div",{className:"why-hub",children:(0,n.jsx)("div",{className:"why-hub-logo",children:(0,n.jsx)("img",{src:"/img/priyam-consultancy-logo.png",style:{width:"85px",display:"block",margin:"0 auto"},alt:"PCS Logo"})})}),x.map((e,t)=>(0,n.jsx)("div",{className:"why-node",ref:e=>i.current[t]=e,children:(0,n.jsx)(u,{n:e})},t))]}),(0,n.jsx)("div",{className:"why-nodes-mobile",children:x.map((e,t)=>(0,n.jsx)("div",{className:"why-node",children:(0,n.jsx)(u,{n:e})},t))})]})}let w=[{step:"01",title:"Understand Your Vision",desc:"We start by diving deep into your business, industry, and goals. Every recommendation is built on insights, not assumptions.",icon:"/img/icon/understand-vision.webp"},{step:"02",title:"Implement Strategically",desc:"Our in-house experts execute solutions quickly and efficiently, ensuring every action aligns with your vision and delivers measurable results.",icon:"/img/icon/implement-strategically.webp"},{step:"03",title:"Plan Holistically",desc:"From registration and compliance to digital transformation, marketing, and HR, we design a roadmap that covers every aspect of your business growth.",icon:"/img/icon/plan-holistically.webp"},{step:"04",title:"Monitor & Optimize",desc:"We track performance across all services \u2014 from operations to marketing campaigns \u2014 continuously refining strategies for maximum impact.",icon:"/img/icon/monitor-optimize.webp"}];function b(e){(0,s.useEffect)(()=>{let t=e.current;if(!t)return;let i=new IntersectionObserver(([e])=>{e.isIntersecting&&(t.classList.add("on"),i.disconnect())},{threshold:.12});return i.observe(t),()=>i.disconnect()},[])}function v(){let e=(0,s.useRef)(null),t=(0,s.useRef)(null);return b(e),b(t),(0,n.jsxs)("section",{className:"insights-section",children:[(0,n.jsxs)("div",{className:"ins-hd ins-reveal",ref:e,style:{transitionDelay:"0s"},children:[(0,n.jsx)("div",{className:"partners-header1",style:{textAlign:"center"},children:(0,n.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"12px",textAlign:"start"},children:"From Insights to Impact"})}),(0,n.jsxs)("h2",{children:["Smart Strategy. Fast Execution. ",(0,n.jsx)("em",{children:(0,n.jsx)("i",{children:"Continuous Growth."})})]})]}),(0,n.jsx)("div",{className:"ins-cards ins-reveal",ref:t,style:{transitionDelay:"0.1s"},children:w.map((e,t)=>(0,n.jsxs)("div",{className:"ins-card",children:[(0,n.jsx)("div",{className:"ins-step-n",children:e.step}),(0,n.jsx)("div",{className:"ins-icon-box",children:(0,n.jsx)("img",{src:e.icon,alt:e.title,width:30,height:30,style:{objectFit:"contain"}})}),(0,n.jsx)("div",{className:"ins-card-title",children:e.title}),(0,n.jsx)("p",{className:"ins-card-desc",children:e.desc}),t<w.length-1&&(0,n.jsx)("div",{className:"ins-conn",children:(0,n.jsx)("img",{src:"/img/icon/arrow-next.webp",alt:"next",width:10,height:10,style:{objectFit:"contain"}})})]},t))})]})}let k=[{name:"ODOO",desc:"Comprehensive end-to-end ERP solutions for efficient enterprise management.",bg:"rgba(255,153,0,0.1)",logo:"/img/partner-odoo.webp",link:"/odoo-partners"},{name:"STERLO",desc:"Low-code and no-code platform solutions for faster digital solution deployment.",bg:"rgba(0,120,212,0.1)",logo:"/img/partner-sterlo.webp",link:"/sterlo-partners"},{name:"STERLO CARE",desc:"Digitizing healthcare operations to improve patient satisfaction and compliance.",bg:"rgba(66,133,244,0.12)",logo:"/img/partner-sterlo-care.webp",link:"/sterlo-care-partners"},{name:"STERLO BUILD",desc:"Digital Construction Management Platform for Quality, Safety, and Operational Excellence.",bg:"rgba(0,176,116,0.1)",logo:"/img/partner-sterlo-build.webp",link:"/sterlo-build-partners"},{name:"MICROSOFT",desc:"Customized mobile and web applications to streamline your business operations.",bg:"rgba(237,131,55,0.1)",logo:"/img/partner-microsoft.webp",link:"/microsoft-apps-partners"}];function j({p:e}){return(0,n.jsxs)("div",{className:"partner-card",style:{background:e.bg},children:[(0,n.jsx)("div",{className:"partner-logo-zone",style:{width:"75%",height:"80px",display:"flex",alignItems:"center",margin:"0 auto 12px auto"},children:(0,n.jsx)("img",{src:e.logo,alt:e.name,style:{width:"90%",height:"90%",objectFit:"contain"}})}),(0,n.jsx)("div",{className:"partner-desc",children:e.desc}),(0,n.jsxs)("a",{href:e.link,className:"partner-btn",style:{textDecoration:"none",display:"inline-block"},children:["Learn More ",(0,n.jsx)("span",{children:"\u2192"})]})]})}function N(){return(0,n.jsxs)("section",{id:"partners",children:[(0,n.jsx)("div",{className:"partners-divider"}),(0,n.jsxs)("div",{className:"partners-title-wrap",children:[(0,n.jsx)("div",{className:"partners-eyebrow",children:"Implementation Partners"}),(0,n.jsxs)("h2",{className:"partners-title",style:{color:"white"},children:["Collaborating with ",(0,n.jsx)("span",{className:"hl",style:{fontWeight:"700"},children:"trusted partners"})," to deliver complete business solutions."]})]}),(0,n.jsx)("style",{children:`
        /* \u{2500}\u{2500} Base: mobile-first, \u{2264}640px \u{2192} 1 column \u{2500}\u{2500} */
        .impl-grid {
          display: grid;
          gap: 16px;
          padding: 0 16px 32px;
          max-width: 480px;
          margin: 0 auto;
          box-sizing: border-box;
          grid-template-columns: 1fr;
        }

        /* Reset any rotation/3D or fixed sizing from global .partner-card */
        .impl-grid .partner-card {
          transform: none !important;
          rotate: none !important;
          box-shadow: 0 4px 18px rgba(0,0,0,0.13);
          border-radius: 16px;
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          flex: unset !important;
          box-sizing: border-box !important;
          margin: 0 !important;
          position: static !important;
          left: auto !important;
          right: auto !important;
        }

        /* \u{2500}\u{2500} Mobile wide (481\u{2013}640px): still 1 col but wider container \u{2500}\u{2500} */
        @media (min-width: 481px) and (max-width: 640px) {
          .impl-grid {
            max-width: 560px;
            padding: 0 20px 32px;
          }
        }

        /* \u{2500}\u{2500} Tablet-sm (641\u{2013}780px): 2 cols, last card centred at 50% \u{2500}\u{2500} */
        @media (min-width: 641px) and (max-width: 780px) {
          .impl-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
            max-width: 700px;
            padding: 0 20px 32px;
          }
          .impl-grid .partner-card:last-child {
            grid-column: 1 / -1;
            max-width: calc(50% - 7px);
            margin-inline: auto;
          }
        }

        /* \u{2500}\u{2500} Tablet-lg (769\u{2013}1024px): row1 = 3 equal cols, row2 = 2 equal centred cols \u{2500}\u{2500} */
        @media (min-width: 769px) and (max-width: 1024px) {
          .impl-grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 18px;
            max-width: 1000px;
            padding: 0 24px 32px;
          }
          /* cards 1-3: each takes 2 of 6 cols \u{2192} 3 equal columns */
          .impl-grid .partner-card:nth-child(1),
          .impl-grid .partner-card:nth-child(2),
          .impl-grid .partner-card:nth-child(3) {
            grid-column: span 2;
          }
          /* cards 4-5: each takes 3 of 6 cols \u{2192} 2 equal columns, fills full row */
          .impl-grid .partner-card:nth-child(4),
          .impl-grid .partner-card:nth-child(5) {
            grid-column: span 2 !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
          }
        }

        /* \u{2500}\u{2500} Desktop (>1024px): hide grid, show original partners-stack \u{2500}\u{2500} */
        @media (min-width: 1025px) {
          .impl-grid {
            display: none;
          }
        }
        @media (max-width: 1024px) {
          .partners-stack { display: none !important; }
        }
      `}),(0,n.jsx)("div",{className:"partners-stack",children:k.map((e,t)=>(0,n.jsxs)("div",{className:"partner-card",style:{background:e.bg},children:[(0,n.jsx)("div",{className:"partner-logo-zone",style:{width:"75%",height:"80px",display:"flex",alignItems:"center",margin:"0 auto 12px auto"},children:(0,n.jsx)("img",{src:e.logo,alt:e.name,style:{width:"100%",height:"100%",objectFit:"contain"}})}),(0,n.jsx)("div",{className:"partner-desc",children:e.desc}),(0,n.jsxs)("a",{href:e.link,className:"partner-btn",style:{textDecoration:"none",display:"inline-block"},children:["Learn More ",(0,n.jsx)("span",{children:"\u2192"})]})]},t))}),(0,n.jsx)("div",{className:"impl-grid",children:k.map((e,t)=>(0,n.jsx)(j,{p:e},t))})]})}let S=[{index:0,text:"PCS delivered a modern responsive website with SEO optimization, analytics integration, heatmap tracking, and performance monitoring. We appreciate their team's dedication, technical expertise, and timely support, which significantly improved our online visibility, website performance, and customer engagement.",name:"Mr.Ashwin",role:"Founder",badge:["Website Development","SEO"]},{index:1,text:"Our basic single-page website was upgraded into a professionally structured multi-page platform with enhanced SEO, GMB optimization, analytics setup, and customer activity tracking. We thank the PCS team for their commitment, quick support, and valuable contribution in strengthening our online presence.",name:"Mr.Sabarinath",role:"Founder",badge:["Website Development","SEO","Local SEO"]},{index:2,text:"A fresh UI design with strong website development, improved online reach, lead capture setup, and user activity insights was successfully developed by the PCS team. Every change request was handled patiently while turning our ideas into exactly what we expected. The late-night support before launch was truly appreciated.",name:"Mr.Clement Selvam",role:"Founder",badge:["Website Development","SEO"]},{index:3,text:"As a growing forest-based natural products brand, we partnered with PCS to expand our store presence and online sales. PCS team developed a complete e-commerce platform with Razorpay setup, order management, inventory tracking, centralized dashboard, WhatsApp integration for smooth business operations.",name:"Mr.Karupasamy",role:"Director",badge:["E-Commerce","SEO","Local SEO"]},{index:4,text:"Competing in the global market we required a website that matched international standards. With strategic content, SEO optimization, analytics integration, and performance enhancements, our digital presence was significantly strengthened. We appreciate the PCS team for their expertise, flexibility, consistent support throughout the process.",name:"Mr.Gunasekaran",role:"Founder",badge:["SEO","Content Marketing","Paid Ads"]}];function P(){return(0,n.jsx)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"#f47920",xmlns:"http://www.w3.org/2000/svg",style:{flexShrink:0},children:(0,n.jsx)("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})}function C({data:e,pos:t,onClick:i,isMobile:s,isTablet:a,isActive:r}){let o={center:{transform:"translateX(0) scale(1) rotateY(0deg)",opacity:1,filter:"none",zIndex:10,boxShadow:"0 24px 64px rgba(13,31,60,0.14)",pointerEvents:"auto"},left:{transform:`translateX(${a?-220:-300}px) scale(0.85) rotateY(18deg)`,opacity:.55,filter:"blur(2px)",zIndex:5,boxShadow:"none",pointerEvents:"auto"},right:{transform:`translateX(${a?220:300}px) scale(0.85) rotateY(-18deg)`,opacity:.55,filter:"blur(2px)",zIndex:5,boxShadow:"none",pointerEvents:"auto"},farLeft:{transform:`translateX(${a?-380:-490}px) scale(0.7) rotateY(28deg)`,opacity:0,filter:"blur(4px)",zIndex:1,boxShadow:"none",pointerEvents:"none"},farRight:{transform:`translateX(${a?380:490}px) scale(0.7) rotateY(-28deg)`,opacity:0,filter:"blur(4px)",zIndex:1,boxShadow:"none",pointerEvents:"none"}},l=s?Math.min(("u">typeof window?window.innerWidth:360)-40,320):a?300:340;return(0,n.jsxs)("div",{onClick:i,"data-active":r?"true":"false",style:{position:"absolute",width:l,background:"#ffffff",borderRadius:20,padding:s?"20px 18px":32,cursor:"pointer",transition:"all 0.55s cubic-bezier(0.4,0,0.2,1)",userSelect:"none",display:"flex",flexDirection:"column",boxSizing:"border-box",top:0,...o[t]},children:[(0,n.jsx)("div",{style:{fontSize:s?28:36,color:"#f47920",lineHeight:1,fontFamily:"Georgia, serif",marginBottom:8},children:'"'}),(0,n.jsx)("div",{style:{fontSize:s?11.5:13,color:"#3d4f6a",lineHeight:s?1.65:1.75,marginBottom:s?14:22,flex:1,fontWeight:400},children:e.text}),(0,n.jsx)("div",{style:{height:1,background:"#f0f2f7",marginBottom:s?10:16}}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,n.jsx)("div",{style:{fontSize:s?13:15,fontWeight:700,color:"#0d1f3c"},children:e.name}),(0,n.jsx)("div",{style:{fontSize:11,color:"#6b7a94",lineHeight:1.4,fontWeight:400},children:e.role}),(0,n.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginTop:4},children:e.badge.map(e=>(0,n.jsx)("span",{style:{display:"inline-block",fontSize:9.5,fontWeight:600,letterSpacing:"0.05em",padding:"2px 7px",borderRadius:20,background:"rgba(244,121,32,0.1)",color:"#f47920",textTransform:"uppercase"},children:e},e))}),(0,n.jsx)("div",{style:{display:"flex",gap:3,marginTop:6},children:[void 0,void 0,void 0,void 0,void 0].map((e,t)=>(0,n.jsx)(P,{},t))})]})]})}function z(){let[e,t]=(0,s.useState)(2),i=(0,s.useRef)(null),a=(0,s.useRef)(null),r=(0,s.useRef)(null),[o,l]=(0,s.useState)(380),c=S.length,d=function(){let[e,t]=(0,s.useState)("u">typeof window?window.innerWidth:1200);return(0,s.useEffect)(()=>{let e=()=>t(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}(),h=d<640,p=d>=640&&d<1024;(0,s.useEffect)(()=>{if(!r.current)return;let e=r.current.querySelector("[data-active='true']");if(e){let t=e.getBoundingClientRect().height;t>0&&l(t+8)}},[e,d]);let m=()=>{i.current&&clearInterval(i.current),i.current=setInterval(()=>t(e=>(e+1)%c),3e3)};(0,s.useEffect)(()=>(m(),()=>clearInterval(i.current)),[]);let f=e=>{t(e),m()};return(0,n.jsxs)("section",{style:{width:"100%",maxWidth:1100,margin:"0 auto",padding:h?"40px 16px":"60px 20px",fontFamily:"'Poppins', sans-serif",overflow:"hidden"},children:[(0,n.jsx)("div",{className:"partners-header1",style:{marginBottom:h?12:16,textAlign:"center"},children:(0,n.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"12px",textAlign:"start"},children:"Client Testimonials"})}),(0,n.jsxs)("h2",{style:{fontSize:h?22:p?28:"clamp(28px,3vw,40px)",fontWeight:700,color:"#0d1f3c",lineHeight:1.25,marginBottom:h?28:48,textAlign:"center"},children:["What Our Clients"," ",(0,n.jsx)("span",{style:{color:"#f47920",fontStyle:"italic",fontWeight:700},children:"Say About PCS"})]}),(0,n.jsx)("div",{ref:r,onTouchStart:e=>{a.current=e.touches[0].clientX},onTouchEnd:t=>{if(null===a.current)return;let i=t.changedTouches[0].clientX-a.current;a.current=null,40>Math.abs(i)||(i<0?f((e+1)%c):f((e-1+c)%c))},style:{position:"relative",height:o,display:"flex",alignItems:"flex-start",justifyContent:"center",perspective:1200,marginBottom:28,transition:"height 0.4s ease"},children:S.map((t,i)=>{let s,a=0==(s=i-e)?"center":h?s<0?"farLeft":"farRight":-1===s||s===c-1?"left":1===s||s===-(c-1)?"right":s<0?"farLeft":"farRight";return(0,n.jsx)(C,{data:t,pos:a,isActive:"center"===a,onClick:()=>{i!==e&&f(i)},isMobile:h,isTablet:p},t.index)})}),(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",gap:8,alignItems:"center"},children:S.map((t,i)=>(0,n.jsx)("button",{onClick:()=>f(i),style:{width:i===e?22:9,height:9,borderRadius:9,padding:0,outline:"none",cursor:"pointer",flexShrink:0,transition:"all 0.3s ease",background:i===e?"#f47920":"transparent",border:i===e?"none":"1.8px solid #b0b8c9"}},i))}),h&&(0,n.jsx)("p",{style:{textAlign:"center",fontSize:11,color:"#b0b8c9",marginTop:14,letterSpacing:"0.03em"},children:"\u2190 swipe to explore \u2192"})]})}let $=[{q:"What services does Priyam Consultancy Services (PCS) provide?",a:" Priyam Consultancy Services (PCS) provides digital marketing, website development, HR services, payroll management, business registration, statutory compliance, Virtual CFO services, accounting, branding, ecommerce solutions, and business consulting services designed to support operational efficiency and long-term business growth."},{q:"What types of digital marketing services do you provide?",a:" Our digital marketing services include SEO, performance marketing, social media marketing, content marketing, ecommerce marketing, branding, Google Ads, Meta Ads, local SEO, marketplace marketing, and strategic digital campaigns focused on improving visibility, lead generation, customer engagement, and business growth."},{q:"What is company registration and what types do you offer?",a:"Company registration is the legal process of establishing a business entity under government regulations. We support registrations including Sole Proprietorship, Partnership Firm, LLP, One Person Company (OPC), Private Limited Company, and other business structures based on operational and compliance requirements."},{q:"How are your HR services different from other agencies?",a:" Our HR services combine recruitment expertise, payroll management, compliance support, workforce planning, and scalable hiring solutions under one structured system. We focus on operational efficiency, faster closures, compliance accuracy, and long-term workforce support tailored to each business requirement and industry need."},{q:"What is a Virtual CFO and how can it help my business?",a:"A Virtual CFO provides strategic financial guidance including budgeting, cash flow management, financial planning, reporting, compliance monitoring, and profitability analysis. These services help businesses improve financial decision-making, operational efficiency, investor readiness, and sustainable growth without hiring a full-time CFO."},{q:"What website development services do you provide?",a:" We provide website development services including corporate websites, ecommerce platforms, Shopify development, WordPress websites, custom web applications, landing pages, booking systems, and SEO-friendly business websites designed for performance, scalability, user experience, and long-term digital growth."}],M=[{num:"01",icon:"/img/icon/startups.webp",label:"Early Stage",titleHl:"Startups",desc:"We help startups build a strong foundation for success. Whether it's registering your business, setting up efficient HR systems, implementing digital solutions, or creating a marketing strategy for brand visibility and lead generation, we provide fast, effective, and cost-efficient solutions to get your venture off the ground.",featured:!1},{num:"02",icon:"/img/icon/smes.webp",label:"Growing Business",titleHl:"SMEs",desc:"For small and mid-sized businesses, we deliver end-to-end support across all business functions. From compliances and digital transformation to HR management and digital marketing campaigns, we help streamline processes, scale operations, enhance brand reach, and optimize resources \u2014 all under one roof.",featured:!0,badge:"Most Common"},{num:"03",icon:"/img/icon/enterprises.webp",label:"Large Scale",titleHl:"Enterprises",desc:"For large enterprises, we provide integrated, technology-driven solutions to manage complex operations. From compliance and HR optimization to digital transformation, marketing, and brand growth initiatives, our holistic approach ensures efficiency, consistency, and measurable results across teams and locations.",featured:!1}],A=({c:e})=>(0,n.jsxs)("div",{className:`whom-card${e.featured?" whom-card--featured":""}`,children:[(0,n.jsx)("div",{className:"whom-card-shimmer"}),(0,n.jsx)("div",{className:"whom-card-blob"}),(0,n.jsx)("div",{className:"whom-card-num",children:e.num}),(0,n.jsx)("div",{className:"whom-card-icon",children:(0,n.jsx)("img",{src:e.icon,alt:e.titleHl,width:36,height:36,style:{objectFit:"contain"}})}),(0,n.jsx)("span",{className:"whom-card-label",children:e.label}),(0,n.jsx)("h4",{className:"whom-card-title",children:(0,n.jsx)("span",{className:"hl",children:e.titleHl})}),(0,n.jsx)("p",{className:"whom-card-desc",children:e.desc})]}),W=function(){let[e,t]=(0,s.useState)(null),i=i=>{t(e===i?null:i)};return(0,n.jsxs)(r.A,{children:[(0,n.jsxs)("head",{children:[(0,n.jsx)("title",{children:" Website Development & Digital Marketing Agency in India | HR Solutions"}),(0,n.jsx)("meta",{name:"description",content:"We are the No.1 website development and digital marketing agency in India, offering SEO, social media marketing, and HR solutions to help businesses grow faster."}),(0,n.jsx)("link",{rel:"canonical",href:"https://www.priyamconsultancy.com/"}),(0,n.jsx)("meta",{name:"keywords",content:"Digital Marketing, Digital Marketing Agency, Digital Marketing Services, Digital Transformation, Digital Transformation Consulting, Digital Transformation Company, HR Services, HR Slutions, HR Consultant, HR Consultancy Services, HR Service Provider, Business Registration, HRMS Solutions, Corporate Compliance, CFO Services"}),(0,n.jsx)("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Priyam Consultancy Services",
            "url": "https://www.priyamconsultancy.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}),(0,n.jsx)("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Priyam Consultancy Services",
            "url": "https://www.priyamconsultancy.com/",
            "logo": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91 96774 44048",
              "contactType": "Website Development & Digital Marketing Agency in India | HR Solutions"
            }],
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61577125709962",
              "https://www.linkedin.com/company/priyam-consultancy-services/",
              "https://www.instagram.com/priyam_consultancy_services/",
              "https://x.com/PCSconsultant_",
              "https://g.co/kgs/rdTYdi6"
            ]
          }
        `}),(0,n.jsx)("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Website Development & Digital Marketing Agency in India | HR Solutions",
            "image": ["https://www.priyamconsultancy.com/wp-content/uploads/2025/10/who-we-are.webp"],
            "description": "Leading digital transformation and marketing agency in India offering SEO, PPC, SMM, web & app development, and automation solutions to accelerate business growth.",
            "mpn": "priyamconsultancy.com",
            "brand": {
              "@type": "Brand",
              "name": "Priyam Consultancy Services"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "worstRating": "1"
              },
              "author": {
                "@type": "Person",
                "name": "Admin"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "4521"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.priyamconsultancy.com/",
              "priceCurrency": "USD",
              "price": "00.00",
              "priceValidUntil": "2026-12-31",
              "itemCondition": "https://schema.org/UsedCondition",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "priyamconsultancy.com"
              }
            }
          }
        `}),(0,n.jsx)("script",{type:"application/ld+json",children:`
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "https://www.priyamconsultancy.com/",
                "Name": "Priyam Consultancy Services"
              }
            }]
          }
        `}),(0,n.jsx)("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Website Development & Digital Marketing Agency in India | HR Solutions",
            "image": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",
            "@id": "Priyam Consultancy Services",
            "url": "https://www.priyamconsultancy.com/",
            "telephone": "+91 96774 44048",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1st Floor, SF.11/4, Pooja Garden, Kalapatti Road, Civil Aerodrame Post",
              "addressLocality": "Coimbatore",
              "addressRegion": "Tamil Nadu",
              "postalCode": "641014",
              "addressCountry": "India"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 11.043918,
              "longitude": 77.038417
            },
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday",    "opens": "09:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday",   "opens": "09:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "09:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday",  "opens": "09:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday",    "opens": "09:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday",  "opens": "09:00", "closes": "18:00" }
            ],
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61577125709962",
              "https://www.linkedin.com/company/priyam-consultancy-services/",
              "https://www.instagram.com/priyam_consultancy_services/",
              "https://x.com/PCSconsultant_",
              "https://g.co/kgs/rdTYdi6"
            ]
          }
        `}),(0,n.jsx)("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does Priyam Consultancy Services (PCS) provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Priyam Consultancy Services (PCS) provides digital marketing, website development, HR services, payroll management, business registration, statutory compliance, Virtual CFO services, accounting, branding, ecommerce solutions, and business consulting services designed to support operational efficiency and long-term business growth."
                }
              },
              {
                "@type": "Question",
                "name": "What types of digital marketing services do you provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our digital marketing services include SEO, performance marketing, social media marketing, content marketing, ecommerce marketing, branding, Google Ads, Meta Ads, local SEO, marketplace marketing, and strategic digital campaigns focused on improving visibility, lead generation, customer engagement, and business growth."
                }
              },
              {
                "@type": "Question",
                "name": "What is company registration and what types do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Company registration is the legal process of establishing a business entity under government regulations. We support registrations including Sole Proprietorship, Partnership Firm, LLP, One Person Company (OPC), Private Limited Company, and other business structures based on operational and compliance requirements."
                }
              },
              {
                "@type": "Question",
                "name": "How are your HR services different from other agencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our HR services combine recruitment expertise, payroll management, compliance support, workforce planning, and scalable hiring solutions under one structured system. We focus on operational efficiency, faster closures, compliance accuracy, and long-term workforce support tailored to each business requirement and industry need."
                }
              },
              {
                "@type": "Question",
                "name": "What is a Virtual CFO and how can it help my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Virtual CFO provides strategic financial guidance including budgeting, cash flow management, financial planning, reporting, compliance monitoring, and profitability analysis. These services help businesses improve financial decision-making, operational efficiency, investor readiness, and sustainable growth without hiring a full-time CFO."
                }
              },
              {
                "@type": "Question",
                "name": "How Long To See Results Through Digital Marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide website development services including corporate websites, ecommerce platforms, Shopify development, WordPress websites, custom web applications, landing pages, booking systems, and SEO-friendly business websites designed for performance, scalability, user experience, and long-term digital growth."
                }
              }
            ]
          }
        `})]}),(0,n.jsx)(d,{}),(0,n.jsx)(p,{}),(0,n.jsx)(m,{}),(0,n.jsx)(g,{}),(0,n.jsx)(y,{}),(0,n.jsxs)("section",{id:"whom",children:[(0,n.jsx)("div",{className:"whom-divider"}),(0,n.jsx)("div",{className:"whom-blob whom-blob-1"}),(0,n.jsx)("div",{className:"whom-blob whom-blob-2"}),(0,n.jsx)("div",{className:"whom-blob whom-blob-3"}),(0,n.jsxs)("div",{className:"whom-hdr",children:[(0,n.jsx)("div",{className:"whom-eyebrow",children:"Our Clients"}),(0,n.jsxs)("h2",{children:["Whom Do We ",(0,n.jsx)("span",{className:"hl",children:(0,n.jsx)("i",{children:"Work For?"})})]}),(0,n.jsx)("p",{children:"At Priyam Consultancy Services, we provide all-in-one, future-ready solutions tailored to the unique needs of startups, SMEs, and enterprises. From business registration and digital transformation to digital marketing, and HR management, we help businesses at every stage streamline operations, drive growth, and achieve lasting success."})]}),(0,n.jsx)("div",{className:"whom-grid",children:M.map((e,t)=>(0,n.jsx)(A,{c:e},t))})]}),(0,n.jsx)(v,{}),(0,n.jsx)(N,{}),(0,n.jsx)(z,{}),(0,n.jsxs)("section",{className:"faq-section",children:[(0,n.jsx)("div",{className:"partners-header1",style:{textAlign:"center"},children:(0,n.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"25px",textAlign:"center"},children:"Frequently Asked Questions"})}),(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"faq-head",children:(0,n.jsxs)("h2",{children:["Queries That Could ",(0,n.jsx)("span",{children:"Hold You Back"})]})}),(0,n.jsxs)("div",{className:"faq-wrapper",children:[(0,n.jsx)("div",{className:"faq-col",children:$.slice(0,3).map((t,s)=>(0,n.jsxs)("div",{className:"faq-item",children:[(0,n.jsxs)("div",{className:"faq-question",onClick:()=>i(s),children:[(0,n.jsx)("span",{children:t.q}),(0,n.jsx)("span",{className:"icon",children:e===s?(0,n.jsx)("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"#ed8337",strokeWidth:2.5,strokeLinecap:"round",children:(0,n.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})}):(0,n.jsxs)("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"#ed8337",strokeWidth:2.5,strokeLinecap:"round",children:[(0,n.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,n.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]}),e===s&&(0,n.jsx)("div",{className:"faq-answer",children:t.a})]},s))}),(0,n.jsx)("div",{className:"faq-col",children:$.slice(3,6).map((t,s)=>(0,n.jsxs)("div",{className:"faq-item",children:[(0,n.jsxs)("div",{className:"faq-question",onClick:()=>i(s+3),children:[(0,n.jsx)("span",{children:t.q}),(0,n.jsx)("span",{className:"icon",children:e===s+3?(0,n.jsx)("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"#ed8337",strokeWidth:2.5,strokeLinecap:"round",children:(0,n.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})}):(0,n.jsxs)("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"#ed8337",strokeWidth:2.5,strokeLinecap:"round",children:[(0,n.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,n.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]}),e===s+3&&(0,n.jsx)("div",{className:"faq-answer",children:t.a})]},s+3))})]})]})]}),(0,n.jsx)(a.A,{})]})}}}]);