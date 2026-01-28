import{d as ae,h as oe,o as D,w as j,r as G,m as _e,i as W,e as ie,P as be,n as et,j as tt,k as rt,l as pe,p as fe,c as N,q as P,a as g,s as ot,v as it,x as at,F as st,y as nt,b as Y,z as te,A as ct,g as re,t as k,B as Se,C as lt,u as ut,D as dt,_ as ft,f as pt}from"./index-BlpmUkw-.js";var vt=ae({__name:"BaseSeparator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(x){const s=x,w=["horizontal","vertical"];function A(t){return w.includes(t)}const f=W(()=>A(s.orientation)?s.orientation:"horizontal"),v=W(()=>f.value==="vertical"?s.orientation:void 0),u=W(()=>s.decorative?{role:"none"}:{"aria-orientation":v.value,role:"separator"});return(t,p)=>(D(),oe(ie(be),_e({as:t.as,"as-child":t.asChild,"data-orientation":f.value},u.value),{default:j(()=>[G(t.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),mt=vt,gt=ae({__name:"Separator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(x){const s=x;return(w,A)=>(D(),oe(mt,et(tt(s)),{default:j(()=>[G(w.$slots,"default")]),_:3},16))}}),ht=gt;const xt=ae({__name:"FluidCursor",props:{simResolution:{default:128},dyeResolution:{default:1440},captureResolution:{default:512},densityDissipation:{default:3.5},velocityDissipation:{default:2},pressure:{default:.1},pressureIterations:{default:20},curl:{default:3},splatRadius:{default:.2},splatForce:{default:6e3},shading:{type:Boolean,default:!0},colorUpdateSpeed:{default:10},backColor:{default:()=>({r:.5,g:0,b:0})},transparent:{type:Boolean,default:!0},class:{}},setup(x){const s=x;function w(){return{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:{r:0,g:0,b:0}}}const A=pe(null);return rt(()=>{const f=A.value;if(!f)return;const v=[w()],u={SIM_RESOLUTION:s.simResolution,DYE_RESOLUTION:s.dyeResolution,CAPTURE_RESOLUTION:s.captureResolution,DENSITY_DISSIPATION:s.densityDissipation,VELOCITY_DISSIPATION:s.velocityDissipation,PRESSURE:s.pressure,PRESSURE_ITERATIONS:s.pressureIterations,CURL:s.curl,SPLAT_RADIUS:s.splatRadius,SPLAT_FORCE:s.splatForce,SHADING:s.shading,COLOR_UPDATE_SPEED:s.colorUpdateSpeed,BACK_COLOR:s.backColor,TRANSPARENT:s.transparent},{gl:t,ext:p}=X(f);if(!t||!p)return;p.supportLinearFiltering||(u.DYE_RESOLUTION=256,u.SHADING=!1);function X(e){const o={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let r=e.getContext("webgl2",o);if(r||(r=e.getContext("webgl",o)||e.getContext("experimental-webgl",o)),!r)throw new Error("Unable to initialize WebGL.");const i="drawBuffers"in r;let a=!1,c=null;i?(r.getExtension("EXT_color_buffer_float"),a=!!r.getExtension("OES_texture_float_linear")):(c=r.getExtension("OES_texture_half_float"),a=!!r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);const l=i?r.HALF_FLOAT:c&&c.HALF_FLOAT_OES||0;let R,y,U;return i?(R=n(r,r.RGBA16F,r.RGBA,l),y=n(r,r.RG16F,r.RG,l),U=n(r,r.R16F,r.RED,l)):(R=n(r,r.RGBA,r.RGBA,l),y=n(r,r.RGBA,r.RGBA,l),U=n(r,r.RGBA,r.RGBA,l)),{gl:r,ext:{formatRGBA:R,formatRG:y,formatR:U,halfFloatTexType:l,supportLinearFiltering:a}}}function n(e,o,r,i){if(!B(e,o,r,i)){if("drawBuffers"in e){const a=e;switch(o){case a.R16F:return n(a,a.RG16F,a.RG,i);case a.RG16F:return n(a,a.RGBA16F,a.RGBA,i);default:return null}}return null}return{internalFormat:o,format:r}}function B(e,o,r,i){const a=e.createTexture();if(!a)return!1;e.bindTexture(e.TEXTURE_2D,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,o,4,4,0,r,i,null);const c=e.createFramebuffer();return c?(e.bindFramebuffer(e.FRAMEBUFFER,c),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE):!1}function K(e){if(!e.length)return 0;let o=0;for(let r=0;r<e.length;r++)o=(o<<5)-o+e.charCodeAt(r),o|=0;return o}function De(e,o){if(!o)return e;let r="";for(const i of o)r+=`#define ${i}
`;return r+e}function _(e,o,r=null){const i=De(o,r),a=t.createShader(e);return a?(t.shaderSource(a,i),t.compileShader(a),a):null}function ve(e,o){if(!e||!o)return null;const r=t.createProgram();return r?(t.attachShader(r,e),t.attachShader(r,o),t.linkProgram(r),r):null}function me(e){const o={},r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<r;i++){const a=t.getActiveUniform(e,i);a&&(o[a.name]=t.getUniformLocation(e,a.name))}return o}class z{program;uniforms;constructor(o,r){this.program=ve(o,r),this.uniforms=this.program?me(this.program):{}}bind(){this.program&&t.useProgram(this.program)}}class we{vertexShader;fragmentShaderSource;programs;activeProgram;uniforms;constructor(o,r){this.vertexShader=o,this.fragmentShaderSource=r,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(o){let r=0;for(const a of o)r+=K(a);let i=this.programs[r];if(i==null){const a=_(t.FRAGMENT_SHADER,this.fragmentShaderSource,o);i=ve(this.vertexShader,a),this.programs[r]=i}i!==this.activeProgram&&(i&&(this.uniforms=me(i)),this.activeProgram=i)}bind(){this.activeProgram&&t.useProgram(this.activeProgram)}}const F=_(t.VERTEX_SHADER,`
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
          vUv = aPosition * 0.5 + 0.5;
          vL = vUv - vec2(texelSize.x, 0.0);
          vR = vUv + vec2(texelSize.x, 0.0);
          vT = vUv + vec2(0.0, texelSize.y);
          vB = vUv - vec2(0.0, texelSize.y);
          gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `),Ae=_(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
          gl_FragColor = texture2D(uTexture, vUv);
        }
      `),Fe=_(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `),ze=`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uTexture;
        uniform sampler2D uDithering;
        uniform vec2 ditherScale;
        uniform vec2 texelSize;

        vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
        }

        void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
            vec3 lc = texture2D(uTexture, vL).rgb;
            vec3 rc = texture2D(uTexture, vR).rgb;
            vec3 tc = texture2D(uTexture, vT).rgb;
            vec3 bc = texture2D(uTexture, vB).rgb;

            float dx = length(rc) - length(lc);
            float dy = length(tc) - length(bc);

            vec3 n = normalize(vec3(dx, dy, length(texelSize)));
            vec3 l = vec3(0.0, 0.0, 1.0);

            float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
            c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
        }
      `,Ue=_(t.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
          vec2 p = vUv - point.xy;
          p.x *= aspectRatio;
          vec3 splat = exp(-dot(p, p) / radius) * color;
          vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + splat, 1.0);
        }
      `),Pe=_(t.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
          vec2 st = uv / tsize - 0.5;
          vec2 iuv = floor(st);
          vec2 fuv = fract(st);

          vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
          vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
          vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
          vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

          return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
          #ifdef MANUAL_FILTERING
            vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
            vec4 result = bilerp(uSource, coord, dyeTexelSize);
          #else
            vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
            vec4 result = texture2D(uSource, coord);
          #endif
          float decay = 1.0 + dissipation * dt;
          gl_FragColor = result / decay;
        }
      `,p.supportLinearFiltering?null:["MANUAL_FILTERING"]),Le=_(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
          float L = texture2D(uVelocity, vL).x;
          float R = texture2D(uVelocity, vR).x;
          float T = texture2D(uVelocity, vT).y;
          float B = texture2D(uVelocity, vB).y;

          vec2 C = texture2D(uVelocity, vUv).xy;
          if (vL.x < 0.0) { L = -C.x; }
          if (vR.x > 1.0) { R = -C.x; }
          if (vT.y > 1.0) { T = -C.y; }
          if (vB.y < 0.0) { B = -C.y; }

          float div = 0.5 * (R - L + T - B);
          gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
      `),Be=_(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
          float L = texture2D(uVelocity, vL).y;
          float R = texture2D(uVelocity, vR).y;
          float T = texture2D(uVelocity, vT).x;
          float B = texture2D(uVelocity, vB).x;
          float vorticity = R - L - T + B;
          gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
      `),Ce=_(t.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
          float L = texture2D(uCurl, vL).x;
          float R = texture2D(uCurl, vR).x;
          float T = texture2D(uCurl, vT).x;
          float B = texture2D(uCurl, vB).x;
          float C = texture2D(uCurl, vUv).x;

          vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
          force /= length(force) + 0.0001;
          force *= curl * C;
          force.y *= -1.0;

          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity += force * dt;
          velocity = min(max(velocity, -1000.0), 1000.0);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),Ie=_(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          float C = texture2D(uPressure, vUv).x;
          float divergence = texture2D(uDivergence, vUv).x;
          float pressure = (L + R + B + T - divergence) * 0.25;
          gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
      `),Ne=_(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity.xy -= vec2(R - L, T - B);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),S=(()=>{const e=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,e),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const o=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,o),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(r,i=!1)=>{t&&(r?(t.viewport(0,0,r.width,r.height),t.bindFramebuffer(t.FRAMEBUFFER,r.fbo)):(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)),i&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}})();let E,d,se,ne,L;const ce=new z(F,Ae),H=new z(F,Fe),h=new z(F,Ue),m=new z(F,Pe),$=new z(F,Le),q=new z(F,Be),b=new z(F,Ce),C=new z(F,Ie),I=new z(F,Ne),O=new we(F,ze);function M(e,o,r,i,a,c){t.activeTexture(t.TEXTURE0);const l=t.createTexture();t.bindTexture(t.TEXTURE_2D,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,r,e,o,0,i,a,null);const R=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,R),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,l,0),t.viewport(0,0,e,o),t.clear(t.COLOR_BUFFER_BIT);const y=1/e,U=1/o;return{texture:l,fbo:R,width:e,height:o,texelSizeX:y,texelSizeY:U,attach(V){return t.activeTexture(t.TEXTURE0+V),t.bindTexture(t.TEXTURE_2D,l),V}}}function le(e,o,r,i,a,c){const l=M(e,o,r,i,a,c),R=M(e,o,r,i,a,c);return{width:e,height:o,texelSizeX:l.texelSizeX,texelSizeY:l.texelSizeY,read:l,write:R,swap(){const y=this.read;this.read=this.write,this.write=y}}}function Xe(e,o,r,i,a,c,l){const R=M(o,r,i,a,c,l);return ce.bind(),ce.uniforms.uTexture&&t.uniform1i(ce.uniforms.uTexture,e.attach(0)),S(R,!1),R}function ge(e,o,r,i,a,c,l){return e.width===o&&e.height===r||(e.read=Xe(e.read,o,r,i,a,c,l),e.write=M(o,r,i,a,c,l),e.width=o,e.height=r,e.texelSizeX=1/o,e.texelSizeY=1/r),e}function J(){const e=xe(u.SIM_RESOLUTION),o=xe(u.DYE_RESOLUTION),r=p.halfFloatTexType,i=p.formatRGBA,a=p.formatRG,c=p.formatR,l=p.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),E?E=ge(E,o.width,o.height,i.internalFormat,i.format,r,l):E=le(o.width,o.height,i.internalFormat,i.format,r,l),d?d=ge(d,e.width,e.height,a.internalFormat,a.format,r,l):d=le(e.width,e.height,a.internalFormat,a.format,r,l),se=M(e.width,e.height,c.internalFormat,c.format,r,t.NEAREST),ne=M(e.width,e.height,c.internalFormat,c.format,r,t.NEAREST),L=le(e.width,e.height,c.internalFormat,c.format,r,t.NEAREST)}function he(){const e=[];u.SHADING&&e.push("SHADING"),O.setKeywords(e)}function xe(e){const o=t.drawingBufferWidth,r=t.drawingBufferHeight,i=o/r,a=i<1?1/i:i,c=Math.round(e),l=Math.round(e*a);return o>r?{width:l,height:c}:{width:c,height:l}}function T(e){const o=window.devicePixelRatio||1;return Math.floor(e*o)}he(),J();let Te=Date.now(),Q=0;function Z(){const e=Oe();Me()&&J(),Ve(e),Ye(),Ge(e),ke(null),requestAnimationFrame(Z)}function Oe(){const e=Date.now();let o=(e-Te)/1e3;return o=Math.min(o,.016666),Te=e,o}function Me(){const e=T(f.clientWidth),o=T(f.clientHeight);return f.width!==e||f.height!==o?(f.width=e,f.height=o,!0):!1}function Ve(e){Q+=e*u.COLOR_UPDATE_SPEED,Q>=1&&(Q=Ze(Q,0,1),v.forEach(o=>{o.color=ee()}))}function Ye(){for(const e of v)e.moved&&(e.moved=!1,$e(e))}function Ge(e){t.disable(t.BLEND),q.bind(),q.uniforms.texelSize&&t.uniform2f(q.uniforms.texelSize,d.texelSizeX,d.texelSizeY),q.uniforms.uVelocity&&t.uniform1i(q.uniforms.uVelocity,d.read.attach(0)),S(ne),b.bind(),b.uniforms.texelSize&&t.uniform2f(b.uniforms.texelSize,d.texelSizeX,d.texelSizeY),b.uniforms.uVelocity&&t.uniform1i(b.uniforms.uVelocity,d.read.attach(0)),b.uniforms.uCurl&&t.uniform1i(b.uniforms.uCurl,ne.attach(1)),b.uniforms.curl&&t.uniform1f(b.uniforms.curl,u.CURL),b.uniforms.dt&&t.uniform1f(b.uniforms.dt,e),S(d.write),d.swap(),$.bind(),$.uniforms.texelSize&&t.uniform2f($.uniforms.texelSize,d.texelSizeX,d.texelSizeY),$.uniforms.uVelocity&&t.uniform1i($.uniforms.uVelocity,d.read.attach(0)),S(se),H.bind(),H.uniforms.uTexture&&t.uniform1i(H.uniforms.uTexture,L.read.attach(0)),H.uniforms.value&&t.uniform1f(H.uniforms.value,u.PRESSURE),S(L.write),L.swap(),C.bind(),C.uniforms.texelSize&&t.uniform2f(C.uniforms.texelSize,d.texelSizeX,d.texelSizeY),C.uniforms.uDivergence&&t.uniform1i(C.uniforms.uDivergence,se.attach(0));for(let r=0;r<u.PRESSURE_ITERATIONS;r++)C.uniforms.uPressure&&t.uniform1i(C.uniforms.uPressure,L.read.attach(1)),S(L.write),L.swap();I.bind(),I.uniforms.texelSize&&t.uniform2f(I.uniforms.texelSize,d.texelSizeX,d.texelSizeY),I.uniforms.uPressure&&t.uniform1i(I.uniforms.uPressure,L.read.attach(0)),I.uniforms.uVelocity&&t.uniform1i(I.uniforms.uVelocity,d.read.attach(1)),S(d.write),d.swap(),m.bind(),m.uniforms.texelSize&&t.uniform2f(m.uniforms.texelSize,d.texelSizeX,d.texelSizeY),!p.supportLinearFiltering&&m.uniforms.dyeTexelSize&&t.uniform2f(m.uniforms.dyeTexelSize,d.texelSizeX,d.texelSizeY);const o=d.read.attach(0);m.uniforms.uVelocity&&t.uniform1i(m.uniforms.uVelocity,o),m.uniforms.uSource&&t.uniform1i(m.uniforms.uSource,o),m.uniforms.dt&&t.uniform1f(m.uniforms.dt,e),m.uniforms.dissipation&&t.uniform1f(m.uniforms.dissipation,u.VELOCITY_DISSIPATION),S(d.write),d.swap(),!p.supportLinearFiltering&&m.uniforms.dyeTexelSize&&t.uniform2f(m.uniforms.dyeTexelSize,E.texelSizeX,E.texelSizeY),m.uniforms.uVelocity&&t.uniform1i(m.uniforms.uVelocity,d.read.attach(0)),m.uniforms.uSource&&t.uniform1i(m.uniforms.uSource,E.read.attach(1)),m.uniforms.dissipation&&t.uniform1f(m.uniforms.dissipation,u.DENSITY_DISSIPATION),S(E.write),E.swap()}function ke(e){t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND),He(e)}function He(e){const o=t.drawingBufferWidth,r=t.drawingBufferHeight;O.bind(),u.SHADING&&O.uniforms.texelSize&&t.uniform2f(O.uniforms.texelSize,1/o,1/r),O.uniforms.uTexture&&t.uniform1i(O.uniforms.uTexture,E.read.attach(0)),S(e,!1)}function $e(e){const o=e.deltaX*u.SPLAT_FORCE,r=e.deltaY*u.SPLAT_FORCE;Re(e.texcoordX,e.texcoordY,o,r,e.color)}function qe(e){const o=ee();o.r*=10,o.g*=10,o.b*=10;const r=10*(Math.random()-.5),i=30*(Math.random()-.5);Re(e.texcoordX,e.texcoordY,r,i,o)}function Re(e,o,r,i,a){h.bind(),h.uniforms.uTarget&&t.uniform1i(h.uniforms.uTarget,d.read.attach(0)),h.uniforms.aspectRatio&&t.uniform1f(h.uniforms.aspectRatio,f.width/f.height),h.uniforms.point&&t.uniform2f(h.uniforms.point,e,o),h.uniforms.color&&t.uniform3f(h.uniforms.color,r,i,0),h.uniforms.radius&&t.uniform1f(h.uniforms.radius,We(u.SPLAT_RADIUS/100)),S(d.write),d.swap(),h.uniforms.uTarget&&t.uniform1i(h.uniforms.uTarget,E.read.attach(0)),h.uniforms.color&&t.uniform3f(h.uniforms.color,a.r,a.g,a.b),S(E.write),E.swap()}function We(e){const o=f.width/f.height;return o>1&&(e*=o),e}function ue(e,o,r,i){e.id=o,e.down=!0,e.moved=!1,e.texcoordX=r/f.width,e.texcoordY=1-i/f.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=ee()}function de(e,o,r,i){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=o/f.width,e.texcoordY=1-r/f.height,e.deltaX=Ke(e.texcoordX-e.prevTexcoordX),e.deltaY=Je(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=i}function je(e){e.down=!1}function Ke(e){const o=f.width/f.height;return o<1&&(e*=o),e}function Je(e){const o=f.width/f.height;return o>1&&(e/=o),e}function ee(){const e=Qe(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function Qe(e,o,r){let i=0,a=0,c=0;const l=Math.floor(e*6),R=e*6-l,y=r*(1-o),U=r*(1-R*o),V=r*(1-(1-R)*o);switch(l%6){case 0:i=r,a=V,c=y;break;case 1:i=U,a=r,c=y;break;case 2:i=y,a=r,c=V;break;case 3:i=y,a=U,c=r;break;case 4:i=V,a=y,c=r;break;case 5:i=r,a=y,c=U;break}return{r:i,g:a,b:c}}function Ze(e,o,r){const i=r-o;return(e-o)%i+o}window.addEventListener("mousedown",e=>{const o=v[0];if(!o)return;const r=T(e.clientX),i=T(e.clientY);ue(o,-1,r,i),qe(o)});function ye(e){const o=v[0];if(!o)return;const r=T(e.clientX),i=T(e.clientY),a=ee();Z(),de(o,r,i,a),document.body.removeEventListener("mousemove",ye)}document.body.addEventListener("mousemove",ye),window.addEventListener("mousemove",e=>{const o=v[0];if(!o)return;const r=T(e.clientX),i=T(e.clientY),a=o.color;de(o,r,i,a)});function Ee(e){const o=e.targetTouches,r=v[0];if(r){for(let i=0;i<o.length;i++){const a=o[i];if(!a)continue;const c=T(a.clientX),l=T(a.clientY);Z(),ue(r,a.identifier,c,l)}document.body.removeEventListener("touchstart",Ee)}}document.body.addEventListener("touchstart",Ee),window.addEventListener("touchstart",e=>{const o=e.targetTouches,r=v[0];if(r)for(let i=0;i<o.length;i++){const a=o[i];if(!a)continue;const c=T(a.clientX),l=T(a.clientY);ue(r,a.identifier,c,l)}},!1),window.addEventListener("touchmove",e=>{const o=e.targetTouches,r=v[0];if(r)for(let i=0;i<o.length;i++){const a=o[i];if(!a)continue;const c=T(a.clientX),l=T(a.clientY);de(r,c,l,r.color)}},!1),window.addEventListener("touchend",e=>{const o=e.changedTouches,r=v[0];if(r)for(let i=0;i<o.length;i++)je(r)}),fe(()=>s.simResolution,e=>{u.SIM_RESOLUTION=e,J()}),fe(()=>s.dyeResolution,e=>{u.DYE_RESOLUTION=e,J()}),fe(()=>s.shading,e=>{u.SHADING=e,he()}),Z()}),(f,v)=>(D(),N("div",{class:P(["pointer-events-none fixed top-0 left-0 z-50 size-full",[s.class]])},[g("canvas",{id:"fluid",ref_key:"canvasRef",ref:A,class:"block h-screen w-screen"},null,512)],2))}}),Tt={slots:{root:"flex gap-1.5",item:"group relative flex flex-1 gap-3",container:"relative flex items-center gap-1.5",indicator:"group-data-[state=completed]:text-inverted group-data-[state=active]:text-inverted text-muted",separator:"flex-1 rounded-full bg-elevated",wrapper:"w-full",date:"text-dimmed text-xs/5",title:"font-medium text-highlighted text-sm",description:"text-muted text-wrap text-sm"},variants:{orientation:{horizontal:{root:"flex-row w-full",item:"flex-col",separator:"h-0.5"},vertical:{root:"flex-col",container:"flex-col",separator:"w-0.5"}},color:{primary:{indicator:"group-data-[state=completed]:bg-primary group-data-[state=active]:bg-primary"},secondary:{indicator:"group-data-[state=completed]:bg-secondary group-data-[state=active]:bg-secondary"},success:{indicator:"group-data-[state=completed]:bg-success group-data-[state=active]:bg-success"},info:{indicator:"group-data-[state=completed]:bg-info group-data-[state=active]:bg-info"},warning:{indicator:"group-data-[state=completed]:bg-warning group-data-[state=active]:bg-warning"},error:{indicator:"group-data-[state=completed]:bg-error group-data-[state=active]:bg-error"},neutral:{indicator:"group-data-[state=completed]:bg-inverted group-data-[state=active]:bg-inverted"}},size:{"3xs":"","2xs":"",xs:"",sm:"",md:"",lg:"",xl:"","2xl":"","3xl":""},reverse:{true:""}},compoundVariants:[{color:"primary",reverse:!1,class:{separator:"group-data-[state=completed]:bg-primary"}},{color:"secondary",reverse:!1,class:{separator:"group-data-[state=completed]:bg-secondary"}},{color:"success",reverse:!1,class:{separator:"group-data-[state=completed]:bg-success"}},{color:"info",reverse:!1,class:{separator:"group-data-[state=completed]:bg-info"}},{color:"warning",reverse:!1,class:{separator:"group-data-[state=completed]:bg-warning"}},{color:"error",reverse:!1,class:{separator:"group-data-[state=completed]:bg-error"}},{color:"primary",reverse:!0,class:{separator:"group-data-[state=active]:bg-primary group-data-[state=completed]:bg-primary"}},{color:"secondary",reverse:!0,class:{separator:"group-data-[state=active]:bg-secondary group-data-[state=completed]:bg-secondary"}},{color:"success",reverse:!0,class:{separator:"group-data-[state=active]:bg-success group-data-[state=completed]:bg-success"}},{color:"info",reverse:!0,class:{separator:"group-data-[state=active]:bg-info group-data-[state=completed]:bg-info"}},{color:"warning",reverse:!0,class:{separator:"group-data-[state=active]:bg-warning group-data-[state=completed]:bg-warning"}},{color:"error",reverse:!0,class:{separator:"group-data-[state=active]:bg-error group-data-[state=completed]:bg-error"}},{color:"neutral",reverse:!1,class:{separator:"group-data-[state=completed]:bg-inverted"}},{color:"neutral",reverse:!0,class:{separator:"group-data-[state=active]:bg-inverted group-data-[state=completed]:bg-inverted"}},{orientation:"horizontal",size:"3xs",class:{wrapper:"pe-4.5"}},{orientation:"horizontal",size:"2xs",class:{wrapper:"pe-5"}},{orientation:"horizontal",size:"xs",class:{wrapper:"pe-5.5"}},{orientation:"horizontal",size:"sm",class:{wrapper:"pe-6"}},{orientation:"horizontal",size:"md",class:{wrapper:"pe-6.5"}},{orientation:"horizontal",size:"lg",class:{wrapper:"pe-7"}},{orientation:"horizontal",size:"xl",class:{wrapper:"pe-7.5"}},{orientation:"horizontal",size:"2xl",class:{wrapper:"pe-8"}},{orientation:"horizontal",size:"3xl",class:{wrapper:"pe-8.5"}},{orientation:"vertical",size:"3xs",class:{wrapper:"-mt-0.5 pb-4.5"}},{orientation:"vertical",size:"2xs",class:{wrapper:"pb-5"}},{orientation:"vertical",size:"xs",class:{wrapper:"mt-0.5 pb-5.5"}},{orientation:"vertical",size:"sm",class:{wrapper:"mt-1 pb-6"}},{orientation:"vertical",size:"md",class:{wrapper:"mt-1.5 pb-6.5"}},{orientation:"vertical",size:"lg",class:{wrapper:"mt-2 pb-7"}},{orientation:"vertical",size:"xl",class:{wrapper:"mt-2.5 pb-7.5"}},{orientation:"vertical",size:"2xl",class:{wrapper:"mt-3 pb-8"}},{orientation:"vertical",size:"3xl",class:{wrapper:"mt-3.5 pb-8.5"}}],defaultVariants:{size:"md",color:"primary"}},Rt=["data-state"],yt={__name:"Timeline",props:ot({as:{type:null,required:!1},items:{type:Array,required:!0},size:{type:null,required:!1},color:{type:null,required:!1},orientation:{type:null,required:!1,default:"vertical"},defaultValue:{type:[String,Number],required:!1},reverse:{type:Boolean,required:!1},class:{type:null,required:!1},ui:{type:null,required:!1}},{modelValue:{type:[String,Number]},modelModifiers:{}}),emits:["update:modelValue"],setup(x){const s=x,w=it(),A=at(x,"modelValue"),f=lt(),v=W(()=>Se({extend:Se(Tt),...f.ui?.timeline||{}})({orientation:s.orientation,size:s.size,color:s.color,reverse:s.reverse})),u=W(()=>{const p=A.value??s.defaultValue;return typeof p=="string"?s.items.findIndex(X=>X.value===p)??-1:s.reverse?p!=null?s.items.length-1-p:-1:p??-1});function t(p){if(u.value!==-1)return p===u.value?"active":s.reverse?p>u.value?"completed":void 0:p<u.value?"completed":void 0}return(p,X)=>(D(),oe(ie(be),{as:x.as,"data-orientation":x.orientation,"data-slot":"root",class:P(v.value.root({class:[s.ui?.root,s.class]}))},{default:j(()=>[(D(!0),N(st,null,nt(x.items,(n,B)=>(D(),N("div",{key:n.value??B,"data-slot":"item",class:P(v.value.item({class:[s.ui?.item,n.ui?.item,n.class]})),"data-state":t(B)},[g("div",{"data-slot":"container",class:P(v.value.container({class:[s.ui?.container,n.ui?.container]}))},[Y(ct,_e({size:x.size,icon:n.icon},{ref_for:!0},typeof n.avatar=="object"?n.avatar:{},{"data-slot":"indicator",class:v.value.indicator({class:[s.ui?.indicator,n.ui?.indicator]}),ui:{icon:"text-inherit",fallback:"text-inherit"}}),{default:j(()=>[G(p.$slots,n.slot?`${n.slot}-indicator`:"indicator",{item:n})]),_:2},1040,["size","icon","class"]),B<x.items.length-1?(D(),oe(ie(ht),{key:0,"data-slot":"separator",class:P(v.value.separator({class:[s.ui?.separator,n.ui?.separator]})),orientation:s.orientation},null,8,["class","orientation"])):te("",!0)],2),g("div",{"data-slot":"wrapper",class:P(v.value.wrapper({class:[s.ui?.wrapper,n.ui?.wrapper]}))},[n.date?(D(),N("div",{key:0,"data-slot":"date",class:P(v.value.date({class:[s.ui?.date,n.ui?.date]}))},[G(p.$slots,n.slot?`${n.slot}-date`:"date",{item:n},()=>[re(k(n.date),1)])],2)):te("",!0),n.title||w.title?(D(),N("div",{key:1,"data-slot":"title",class:P(v.value.title({class:[s.ui?.title,n.ui?.title]}))},[G(p.$slots,n.slot?`${n.slot}-title`:"title",{item:n},()=>[re(k(n.title),1)])],2)):te("",!0),n.description||w.description?(D(),N("div",{key:2,"data-slot":"description",class:P(v.value.description({class:[s.ui?.description,n.ui?.description]}))},[G(p.$slots,n.slot?`${n.slot}-description`:"description",{item:n},()=>[re(k(n.description),1)])],2)):te("",!0)],2)],10,Rt))),128))]),_:3},8,["as","data-orientation","class"]))}},Et={class:"relative min-h-[80vh] flex items-center justify-center"},St={class:"relative z-10 w-full max-w-2xl p-px shadow-2xl"},_t={class:"bg-card/90 rounded-[23px] p-8 md:p-16"},bt={class:"text-center backdrop-blur-xl"},Dt={class:"relative w-24 h-24 mx-auto mb-8"},wt={class:"absolute inset-0 rounded-full border border-primary/50 flex items-center justify-center bg-card"},At={class:"space-y-6"},Ft={class:"text-muted-foreground text-base md:text-lg max-w-md mx-auto leading-relaxed"},zt={class:"mt-10"},Pt=ae({__name:"ProcessView",setup(x){const{t:s,locale:w}=ut(),A=pe(50),f=pe([{date:"Mar 15, 2025",title:"Project Kickoff",description:"Kicked off the project with team alignment. Set up project milestones and allocated resources.",icon:"i-lucide-rocket"},{date:"Mar 22 2025",title:"Design Phase",description:"User research and design workshops. Created wireframes and prototypes for user testing.",icon:"i-lucide-palette"},{date:"Mar 29 2025",title:"Development Sprint",description:"Frontend and backend development. Implemented core features and integrated with APIs.",icon:"i-lucide-code"},{date:"Apr 5 2025",title:"Testing & Deployment",description:"QA testing and performance optimization. Deployed the application to production.",icon:"i-lucide-check-circle"}]);return(v,u)=>{const t=dt,p=yt,X=ft,n=pt,B=xt;return D(),N("div",Et,[g("div",St,[g("div",_t,[Y(t,{modelValue:A.value,"onUpdate:modelValue":u[0]||(u[0]=K=>A.value=K)},null,8,["modelValue"]),Y(p,{items:f.value},null,8,["items"]),g("div",bt,[g("div",Dt,[u[2]||(u[2]=g("div",{class:"absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"},null,-1)),g("div",wt,[Y(X,{name:"line-md:loading-loop",class:"size-12"})])]),g("div",At,[g("div",null,k(v.$t("maintenanceView.mainInfor")),1),u[3]||(u[3]=g("div",{class:"flex items-center justify-center gap-3 font-mono text-sm text-primary/90"},[g("span",{class:"px-2 py-1 border border-primary/30 rounded bg-primary/5"},"STATUS: YAJYU"),g("span",{class:"animate-pulse text-primary"},"●"),g("span",{class:"px-2 py-1 border border-primary/30 rounded bg-primary/5"},"VER: 11.4.514")],-1)),g("p",Ft,k(v.$t("maintenanceView.desc")),1)]),g("div",zt,[Y(n,{ghost:"",icon:"line-md:arrow-left",onClick:u[1]||(u[1]=K=>v.$router.push({name:"home",params:{locale:ie(w)}}))},{default:j(()=>[re(k(v.$t("maintenanceView.back")),1)]),_:1})])])])]),Y(B)])}}});export{Pt as default};
