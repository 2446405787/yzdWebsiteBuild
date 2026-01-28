import{d as oe,h as re,o as w,w as K,r as Y,m as ye,i as G,e as ie,P as Se,n as et,j as tt,k as rt,l as _e,p as fe,c as N,q as L,a as D,s as it,v as ot,x as at,F as st,y as nt,b as $,z as ee,A as ct,g as te,t as W,B as Ee,C as ut,u as lt,D as ft,f as dt}from"./index-Dr3wG0tL.js";var pt=oe({__name:"BaseSeparator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(h){const s=h,A=["horizontal","vertical"];function S(t){return A.includes(t)}const d=G(()=>S(s.orientation)?s.orientation:"horizontal"),v=G(()=>d.value==="vertical"?s.orientation:void 0),f=G(()=>s.decorative?{role:"none"}:{"aria-orientation":v.value,role:"separator"});return(t,p)=>(w(),re(ie(Se),ye({as:t.as,"as-child":t.asChild,"data-orientation":d.value},f.value),{default:K(()=>[Y(t.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),vt=pt,mt=oe({__name:"Separator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(h){const s=h;return(A,S)=>(w(),re(vt,et(tt(s)),{default:K(()=>[Y(A.$slots,"default")]),_:3},16))}}),gt=mt;const ht=oe({__name:"FluidCursor",props:{simResolution:{default:128},dyeResolution:{default:1440},captureResolution:{default:512},densityDissipation:{default:3.5},velocityDissipation:{default:2},pressure:{default:.1},pressureIterations:{default:20},curl:{default:3},splatRadius:{default:.2},splatForce:{default:6e3},shading:{type:Boolean,default:!0},colorUpdateSpeed:{default:10},backColor:{default:()=>({r:.5,g:0,b:0})},transparent:{type:Boolean,default:!0},class:{}},setup(h){const s=h;function A(){return{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:{r:0,g:0,b:0}}}const S=_e(null);return rt(()=>{const d=S.value;if(!d)return;const v=[A()],f={SIM_RESOLUTION:s.simResolution,DYE_RESOLUTION:s.dyeResolution,CAPTURE_RESOLUTION:s.captureResolution,DENSITY_DISSIPATION:s.densityDissipation,VELOCITY_DISSIPATION:s.velocityDissipation,PRESSURE:s.pressure,PRESSURE_ITERATIONS:s.pressureIterations,CURL:s.curl,SPLAT_RADIUS:s.splatRadius,SPLAT_FORCE:s.splatForce,SHADING:s.shading,COLOR_UPDATE_SPEED:s.colorUpdateSpeed,BACK_COLOR:s.backColor,TRANSPARENT:s.transparent},{gl:t,ext:p}=X(d);if(!t||!p)return;p.supportLinearFiltering||(f.DYE_RESOLUTION=256,f.SHADING=!1);function X(e){const i={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let r=e.getContext("webgl2",i);if(r||(r=e.getContext("webgl",i)||e.getContext("experimental-webgl",i)),!r)throw new Error("Unable to initialize WebGL.");const o="drawBuffers"in r;let a=!1,c=null;o?(r.getExtension("EXT_color_buffer_float"),a=!!r.getExtension("OES_texture_float_linear")):(c=r.getExtension("OES_texture_half_float"),a=!!r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);const u=o?r.HALF_FLOAT:c&&c.HALF_FLOAT_OES||0;let T,R,U;return o?(T=n(r,r.RGBA16F,r.RGBA,u),R=n(r,r.RG16F,r.RG,u),U=n(r,r.R16F,r.RED,u)):(T=n(r,r.RGBA,r.RGBA,u),R=n(r,r.RGBA,r.RGBA,u),U=n(r,r.RGBA,r.RGBA,u)),{gl:r,ext:{formatRGBA:T,formatRG:R,formatR:U,halfFloatTexType:u,supportLinearFiltering:a}}}function n(e,i,r,o){if(!B(e,i,r,o)){if("drawBuffers"in e){const a=e;switch(i){case a.R16F:return n(a,a.RG16F,a.RG,o);case a.RG16F:return n(a,a.RGBA16F,a.RGBA,o);default:return null}}return null}return{internalFormat:i,format:r}}function B(e,i,r,o){const a=e.createTexture();if(!a)return!1;e.bindTexture(e.TEXTURE_2D,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,i,4,4,0,r,o,null);const c=e.createFramebuffer();return c?(e.bindFramebuffer(e.FRAMEBUFFER,c),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE):!1}function be(e){if(!e.length)return 0;let i=0;for(let r=0;r<e.length;r++)i=(i<<5)-i+e.charCodeAt(r),i|=0;return i}function De(e,i){if(!i)return e;let r="";for(const o of i)r+=`#define ${o}
`;return r+e}function _(e,i,r=null){const o=De(i,r),a=t.createShader(e);return a?(t.shaderSource(a,o),t.compileShader(a),a):null}function de(e,i){if(!e||!i)return null;const r=t.createProgram();return r?(t.attachShader(r,e),t.attachShader(r,i),t.linkProgram(r),r):null}function pe(e){const i={},r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<r;o++){const a=t.getActiveUniform(e,o);a&&(i[a.name]=t.getUniformLocation(e,a.name))}return i}class z{program;uniforms;constructor(i,r){this.program=de(i,r),this.uniforms=this.program?pe(this.program):{}}bind(){this.program&&t.useProgram(this.program)}}class we{vertexShader;fragmentShaderSource;programs;activeProgram;uniforms;constructor(i,r){this.vertexShader=i,this.fragmentShaderSource=r,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(i){let r=0;for(const a of i)r+=be(a);let o=this.programs[r];if(o==null){const a=_(t.FRAGMENT_SHADER,this.fragmentShaderSource,i);o=de(this.vertexShader,a),this.programs[r]=o}o!==this.activeProgram&&(o&&(this.uniforms=pe(o)),this.activeProgram=o)}bind(){this.activeProgram&&t.useProgram(this.activeProgram)}}const F=_(t.VERTEX_SHADER,`
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
      `),Le=_(t.FRAGMENT_SHADER,`
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
      `,p.supportLinearFiltering?null:["MANUAL_FILTERING"]),Be=_(t.FRAGMENT_SHADER,`
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
      `),Pe=_(t.FRAGMENT_SHADER,`
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
      `),y=(()=>{const e=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,e),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const i=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,i),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(r,o=!1)=>{t&&(r?(t.viewport(0,0,r.width,r.height),t.bindFramebuffer(t.FRAMEBUFFER,r.fbo)):(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)),o&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}})();let E,l,ae,se,P;const ne=new z(F,Ae),k=new z(F,Fe),g=new z(F,Ue),m=new z(F,Le),H=new z(F,Be),q=new z(F,Pe),b=new z(F,Ce),C=new z(F,Ie),I=new z(F,Ne),O=new we(F,ze);function V(e,i,r,o,a,c){t.activeTexture(t.TEXTURE0);const u=t.createTexture();t.bindTexture(t.TEXTURE_2D,u),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,r,e,i,0,o,a,null);const T=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,T),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,u,0),t.viewport(0,0,e,i),t.clear(t.COLOR_BUFFER_BIT);const R=1/e,U=1/i;return{texture:u,fbo:T,width:e,height:i,texelSizeX:R,texelSizeY:U,attach(M){return t.activeTexture(t.TEXTURE0+M),t.bindTexture(t.TEXTURE_2D,u),M}}}function ce(e,i,r,o,a,c){const u=V(e,i,r,o,a,c),T=V(e,i,r,o,a,c);return{width:e,height:i,texelSizeX:u.texelSizeX,texelSizeY:u.texelSizeY,read:u,write:T,swap(){const R=this.read;this.read=this.write,this.write=R}}}function Xe(e,i,r,o,a,c,u){const T=V(i,r,o,a,c,u);return ne.bind(),ne.uniforms.uTexture&&t.uniform1i(ne.uniforms.uTexture,e.attach(0)),y(T,!1),T}function ve(e,i,r,o,a,c,u){return e.width===i&&e.height===r||(e.read=Xe(e.read,i,r,o,a,c,u),e.write=V(i,r,o,a,c,u),e.width=i,e.height=r,e.texelSizeX=1/i,e.texelSizeY=1/r),e}function j(){const e=ge(f.SIM_RESOLUTION),i=ge(f.DYE_RESOLUTION),r=p.halfFloatTexType,o=p.formatRGBA,a=p.formatRG,c=p.formatR,u=p.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),E?E=ve(E,i.width,i.height,o.internalFormat,o.format,r,u):E=ce(i.width,i.height,o.internalFormat,o.format,r,u),l?l=ve(l,e.width,e.height,a.internalFormat,a.format,r,u):l=ce(e.width,e.height,a.internalFormat,a.format,r,u),ae=V(e.width,e.height,c.internalFormat,c.format,r,t.NEAREST),se=V(e.width,e.height,c.internalFormat,c.format,r,t.NEAREST),P=ce(e.width,e.height,c.internalFormat,c.format,r,t.NEAREST)}function me(){const e=[];f.SHADING&&e.push("SHADING"),O.setKeywords(e)}function ge(e){const i=t.drawingBufferWidth,r=t.drawingBufferHeight,o=i/r,a=o<1?1/o:o,c=Math.round(e),u=Math.round(e*a);return i>r?{width:u,height:c}:{width:c,height:u}}function x(e){const i=window.devicePixelRatio||1;return Math.floor(e*i)}me(),j();let he=Date.now(),J=0;function Q(){const e=Oe();Ve()&&j(),Me(e),Ye(),Ge(e),ke(null),requestAnimationFrame(Q)}function Oe(){const e=Date.now();let i=(e-he)/1e3;return i=Math.min(i,.016666),he=e,i}function Ve(){const e=x(d.clientWidth),i=x(d.clientHeight);return d.width!==e||d.height!==i?(d.width=e,d.height=i,!0):!1}function Me(e){J+=e*f.COLOR_UPDATE_SPEED,J>=1&&(J=Ze(J,0,1),v.forEach(i=>{i.color=Z()}))}function Ye(){for(const e of v)e.moved&&(e.moved=!1,qe(e))}function Ge(e){t.disable(t.BLEND),q.bind(),q.uniforms.texelSize&&t.uniform2f(q.uniforms.texelSize,l.texelSizeX,l.texelSizeY),q.uniforms.uVelocity&&t.uniform1i(q.uniforms.uVelocity,l.read.attach(0)),y(se),b.bind(),b.uniforms.texelSize&&t.uniform2f(b.uniforms.texelSize,l.texelSizeX,l.texelSizeY),b.uniforms.uVelocity&&t.uniform1i(b.uniforms.uVelocity,l.read.attach(0)),b.uniforms.uCurl&&t.uniform1i(b.uniforms.uCurl,se.attach(1)),b.uniforms.curl&&t.uniform1f(b.uniforms.curl,f.CURL),b.uniforms.dt&&t.uniform1f(b.uniforms.dt,e),y(l.write),l.swap(),H.bind(),H.uniforms.texelSize&&t.uniform2f(H.uniforms.texelSize,l.texelSizeX,l.texelSizeY),H.uniforms.uVelocity&&t.uniform1i(H.uniforms.uVelocity,l.read.attach(0)),y(ae),k.bind(),k.uniforms.uTexture&&t.uniform1i(k.uniforms.uTexture,P.read.attach(0)),k.uniforms.value&&t.uniform1f(k.uniforms.value,f.PRESSURE),y(P.write),P.swap(),C.bind(),C.uniforms.texelSize&&t.uniform2f(C.uniforms.texelSize,l.texelSizeX,l.texelSizeY),C.uniforms.uDivergence&&t.uniform1i(C.uniforms.uDivergence,ae.attach(0));for(let r=0;r<f.PRESSURE_ITERATIONS;r++)C.uniforms.uPressure&&t.uniform1i(C.uniforms.uPressure,P.read.attach(1)),y(P.write),P.swap();I.bind(),I.uniforms.texelSize&&t.uniform2f(I.uniforms.texelSize,l.texelSizeX,l.texelSizeY),I.uniforms.uPressure&&t.uniform1i(I.uniforms.uPressure,P.read.attach(0)),I.uniforms.uVelocity&&t.uniform1i(I.uniforms.uVelocity,l.read.attach(1)),y(l.write),l.swap(),m.bind(),m.uniforms.texelSize&&t.uniform2f(m.uniforms.texelSize,l.texelSizeX,l.texelSizeY),!p.supportLinearFiltering&&m.uniforms.dyeTexelSize&&t.uniform2f(m.uniforms.dyeTexelSize,l.texelSizeX,l.texelSizeY);const i=l.read.attach(0);m.uniforms.uVelocity&&t.uniform1i(m.uniforms.uVelocity,i),m.uniforms.uSource&&t.uniform1i(m.uniforms.uSource,i),m.uniforms.dt&&t.uniform1f(m.uniforms.dt,e),m.uniforms.dissipation&&t.uniform1f(m.uniforms.dissipation,f.VELOCITY_DISSIPATION),y(l.write),l.swap(),!p.supportLinearFiltering&&m.uniforms.dyeTexelSize&&t.uniform2f(m.uniforms.dyeTexelSize,E.texelSizeX,E.texelSizeY),m.uniforms.uVelocity&&t.uniform1i(m.uniforms.uVelocity,l.read.attach(0)),m.uniforms.uSource&&t.uniform1i(m.uniforms.uSource,E.read.attach(1)),m.uniforms.dissipation&&t.uniform1f(m.uniforms.dissipation,f.DENSITY_DISSIPATION),y(E.write),E.swap()}function ke(e){t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND),He(e)}function He(e){const i=t.drawingBufferWidth,r=t.drawingBufferHeight;O.bind(),f.SHADING&&O.uniforms.texelSize&&t.uniform2f(O.uniforms.texelSize,1/i,1/r),O.uniforms.uTexture&&t.uniform1i(O.uniforms.uTexture,E.read.attach(0)),y(e,!1)}function qe(e){const i=e.deltaX*f.SPLAT_FORCE,r=e.deltaY*f.SPLAT_FORCE;xe(e.texcoordX,e.texcoordY,i,r,e.color)}function $e(e){const i=Z();i.r*=10,i.g*=10,i.b*=10;const r=10*(Math.random()-.5),o=30*(Math.random()-.5);xe(e.texcoordX,e.texcoordY,r,o,i)}function xe(e,i,r,o,a){g.bind(),g.uniforms.uTarget&&t.uniform1i(g.uniforms.uTarget,l.read.attach(0)),g.uniforms.aspectRatio&&t.uniform1f(g.uniforms.aspectRatio,d.width/d.height),g.uniforms.point&&t.uniform2f(g.uniforms.point,e,i),g.uniforms.color&&t.uniform3f(g.uniforms.color,r,o,0),g.uniforms.radius&&t.uniform1f(g.uniforms.radius,We(f.SPLAT_RADIUS/100)),y(l.write),l.swap(),g.uniforms.uTarget&&t.uniform1i(g.uniforms.uTarget,E.read.attach(0)),g.uniforms.color&&t.uniform3f(g.uniforms.color,a.r,a.g,a.b),y(E.write),E.swap()}function We(e){const i=d.width/d.height;return i>1&&(e*=i),e}function ue(e,i,r,o){e.id=i,e.down=!0,e.moved=!1,e.texcoordX=r/d.width,e.texcoordY=1-o/d.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=Z()}function le(e,i,r,o){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=i/d.width,e.texcoordY=1-r/d.height,e.deltaX=je(e.texcoordX-e.prevTexcoordX),e.deltaY=Je(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=o}function Ke(e){e.down=!1}function je(e){const i=d.width/d.height;return i<1&&(e*=i),e}function Je(e){const i=d.width/d.height;return i>1&&(e/=i),e}function Z(){const e=Qe(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function Qe(e,i,r){let o=0,a=0,c=0;const u=Math.floor(e*6),T=e*6-u,R=r*(1-i),U=r*(1-T*i),M=r*(1-(1-T)*i);switch(u%6){case 0:o=r,a=M,c=R;break;case 1:o=U,a=r,c=R;break;case 2:o=R,a=r,c=M;break;case 3:o=R,a=U,c=r;break;case 4:o=M,a=R,c=r;break;case 5:o=r,a=R,c=U;break}return{r:o,g:a,b:c}}function Ze(e,i,r){const o=r-i;return(e-i)%o+i}window.addEventListener("mousedown",e=>{const i=v[0];if(!i)return;const r=x(e.clientX),o=x(e.clientY);ue(i,-1,r,o),$e(i)});function Te(e){const i=v[0];if(!i)return;const r=x(e.clientX),o=x(e.clientY),a=Z();Q(),le(i,r,o,a),document.body.removeEventListener("mousemove",Te)}document.body.addEventListener("mousemove",Te),window.addEventListener("mousemove",e=>{const i=v[0];if(!i)return;const r=x(e.clientX),o=x(e.clientY),a=i.color;le(i,r,o,a)});function Re(e){const i=e.targetTouches,r=v[0];if(r){for(let o=0;o<i.length;o++){const a=i[o];if(!a)continue;const c=x(a.clientX),u=x(a.clientY);Q(),ue(r,a.identifier,c,u)}document.body.removeEventListener("touchstart",Re)}}document.body.addEventListener("touchstart",Re),window.addEventListener("touchstart",e=>{const i=e.targetTouches,r=v[0];if(r)for(let o=0;o<i.length;o++){const a=i[o];if(!a)continue;const c=x(a.clientX),u=x(a.clientY);ue(r,a.identifier,c,u)}},!1),window.addEventListener("touchmove",e=>{const i=e.targetTouches,r=v[0];if(r)for(let o=0;o<i.length;o++){const a=i[o];if(!a)continue;const c=x(a.clientX),u=x(a.clientY);le(r,c,u,r.color)}},!1),window.addEventListener("touchend",e=>{const i=e.changedTouches,r=v[0];if(r)for(let o=0;o<i.length;o++)Ke(r)}),fe(()=>s.simResolution,e=>{f.SIM_RESOLUTION=e,j()}),fe(()=>s.dyeResolution,e=>{f.DYE_RESOLUTION=e,j()}),fe(()=>s.shading,e=>{f.SHADING=e,me()}),Q()}),(d,v)=>(w(),N("div",{class:L(["pointer-events-none fixed top-0 left-0 z-50 size-full",[s.class]])},[D("canvas",{id:"fluid",ref_key:"canvasRef",ref:S,class:"block h-screen w-screen"},null,512)],2))}}),xt={slots:{root:"flex gap-1.5",item:"group relative flex flex-1 gap-3",container:"relative flex items-center gap-1.5",indicator:"group-data-[state=completed]:text-inverted group-data-[state=active]:text-inverted text-muted",separator:"flex-1 rounded-full bg-elevated",wrapper:"w-full",date:"text-dimmed text-xs/5",title:"font-medium text-highlighted text-sm",description:"text-muted text-wrap text-sm"},variants:{orientation:{horizontal:{root:"flex-row w-full",item:"flex-col",separator:"h-0.5"},vertical:{root:"flex-col",container:"flex-col",separator:"w-0.5"}},color:{primary:{indicator:"group-data-[state=completed]:bg-primary group-data-[state=active]:bg-primary"},secondary:{indicator:"group-data-[state=completed]:bg-secondary group-data-[state=active]:bg-secondary"},success:{indicator:"group-data-[state=completed]:bg-success group-data-[state=active]:bg-success"},info:{indicator:"group-data-[state=completed]:bg-info group-data-[state=active]:bg-info"},warning:{indicator:"group-data-[state=completed]:bg-warning group-data-[state=active]:bg-warning"},error:{indicator:"group-data-[state=completed]:bg-error group-data-[state=active]:bg-error"},neutral:{indicator:"group-data-[state=completed]:bg-inverted group-data-[state=active]:bg-inverted"}},size:{"3xs":"","2xs":"",xs:"",sm:"",md:"",lg:"",xl:"","2xl":"","3xl":""},reverse:{true:""}},compoundVariants:[{color:"primary",reverse:!1,class:{separator:"group-data-[state=completed]:bg-primary"}},{color:"secondary",reverse:!1,class:{separator:"group-data-[state=completed]:bg-secondary"}},{color:"success",reverse:!1,class:{separator:"group-data-[state=completed]:bg-success"}},{color:"info",reverse:!1,class:{separator:"group-data-[state=completed]:bg-info"}},{color:"warning",reverse:!1,class:{separator:"group-data-[state=completed]:bg-warning"}},{color:"error",reverse:!1,class:{separator:"group-data-[state=completed]:bg-error"}},{color:"primary",reverse:!0,class:{separator:"group-data-[state=active]:bg-primary group-data-[state=completed]:bg-primary"}},{color:"secondary",reverse:!0,class:{separator:"group-data-[state=active]:bg-secondary group-data-[state=completed]:bg-secondary"}},{color:"success",reverse:!0,class:{separator:"group-data-[state=active]:bg-success group-data-[state=completed]:bg-success"}},{color:"info",reverse:!0,class:{separator:"group-data-[state=active]:bg-info group-data-[state=completed]:bg-info"}},{color:"warning",reverse:!0,class:{separator:"group-data-[state=active]:bg-warning group-data-[state=completed]:bg-warning"}},{color:"error",reverse:!0,class:{separator:"group-data-[state=active]:bg-error group-data-[state=completed]:bg-error"}},{color:"neutral",reverse:!1,class:{separator:"group-data-[state=completed]:bg-inverted"}},{color:"neutral",reverse:!0,class:{separator:"group-data-[state=active]:bg-inverted group-data-[state=completed]:bg-inverted"}},{orientation:"horizontal",size:"3xs",class:{wrapper:"pe-4.5"}},{orientation:"horizontal",size:"2xs",class:{wrapper:"pe-5"}},{orientation:"horizontal",size:"xs",class:{wrapper:"pe-5.5"}},{orientation:"horizontal",size:"sm",class:{wrapper:"pe-6"}},{orientation:"horizontal",size:"md",class:{wrapper:"pe-6.5"}},{orientation:"horizontal",size:"lg",class:{wrapper:"pe-7"}},{orientation:"horizontal",size:"xl",class:{wrapper:"pe-7.5"}},{orientation:"horizontal",size:"2xl",class:{wrapper:"pe-8"}},{orientation:"horizontal",size:"3xl",class:{wrapper:"pe-8.5"}},{orientation:"vertical",size:"3xs",class:{wrapper:"-mt-0.5 pb-4.5"}},{orientation:"vertical",size:"2xs",class:{wrapper:"pb-5"}},{orientation:"vertical",size:"xs",class:{wrapper:"mt-0.5 pb-5.5"}},{orientation:"vertical",size:"sm",class:{wrapper:"mt-1 pb-6"}},{orientation:"vertical",size:"md",class:{wrapper:"mt-1.5 pb-6.5"}},{orientation:"vertical",size:"lg",class:{wrapper:"mt-2 pb-7"}},{orientation:"vertical",size:"xl",class:{wrapper:"mt-2.5 pb-7.5"}},{orientation:"vertical",size:"2xl",class:{wrapper:"mt-3 pb-8"}},{orientation:"vertical",size:"3xl",class:{wrapper:"mt-3.5 pb-8.5"}}],defaultVariants:{size:"md",color:"primary"}},Tt=["data-state"],Rt={__name:"Timeline",props:it({as:{type:null,required:!1},items:{type:Array,required:!0},size:{type:null,required:!1},color:{type:null,required:!1},orientation:{type:null,required:!1,default:"vertical"},defaultValue:{type:[String,Number],required:!1},reverse:{type:Boolean,required:!1},class:{type:null,required:!1},ui:{type:null,required:!1}},{modelValue:{type:[String,Number]},modelModifiers:{}}),emits:["update:modelValue"],setup(h){const s=h,A=ot(),S=at(h,"modelValue"),d=ut(),v=G(()=>Ee({extend:Ee(xt),...d.ui?.timeline||{}})({orientation:s.orientation,size:s.size,color:s.color,reverse:s.reverse})),f=G(()=>{const p=S.value??s.defaultValue;return typeof p=="string"?s.items.findIndex(X=>X.value===p)??-1:s.reverse?p!=null?s.items.length-1-p:-1:p??-1});function t(p){if(f.value!==-1)return p===f.value?"active":s.reverse?p>f.value?"completed":void 0:p<f.value?"completed":void 0}return(p,X)=>(w(),re(ie(Se),{as:h.as,"data-orientation":h.orientation,"data-slot":"root",class:L(v.value.root({class:[s.ui?.root,s.class]}))},{default:K(()=>[(w(!0),N(st,null,nt(h.items,(n,B)=>(w(),N("div",{key:n.value??B,"data-slot":"item",class:L(v.value.item({class:[s.ui?.item,n.ui?.item,n.class]})),"data-state":t(B)},[D("div",{"data-slot":"container",class:L(v.value.container({class:[s.ui?.container,n.ui?.container]}))},[$(ct,ye({size:h.size,icon:n.icon},{ref_for:!0},typeof n.avatar=="object"?n.avatar:{},{"data-slot":"indicator",class:v.value.indicator({class:[s.ui?.indicator,n.ui?.indicator]}),ui:{icon:"text-inherit",fallback:"text-inherit"}}),{default:K(()=>[Y(p.$slots,n.slot?`${n.slot}-indicator`:"indicator",{item:n})]),_:2},1040,["size","icon","class"]),B<h.items.length-1?(w(),re(ie(gt),{key:0,"data-slot":"separator",class:L(v.value.separator({class:[s.ui?.separator,n.ui?.separator]})),orientation:s.orientation},null,8,["class","orientation"])):ee("",!0)],2),D("div",{"data-slot":"wrapper",class:L(v.value.wrapper({class:[s.ui?.wrapper,n.ui?.wrapper]}))},[n.date?(w(),N("div",{key:0,"data-slot":"date",class:L(v.value.date({class:[s.ui?.date,n.ui?.date]}))},[Y(p.$slots,n.slot?`${n.slot}-date`:"date",{item:n},()=>[te(W(n.date),1)])],2)):ee("",!0),n.title||A.title?(w(),N("div",{key:1,"data-slot":"title",class:L(v.value.title({class:[s.ui?.title,n.ui?.title]}))},[Y(p.$slots,n.slot?`${n.slot}-title`:"title",{item:n},()=>[te(W(n.title),1)])],2)):ee("",!0),n.description||A.description?(w(),N("div",{key:2,"data-slot":"description",class:L(v.value.description({class:[s.ui?.description,n.ui?.description]}))},[Y(p.$slots,n.slot?`${n.slot}-description`:"description",{item:n},()=>[te(W(n.description),1)])],2)):ee("",!0)],2)],10,Tt))),128))]),_:3},8,["as","data-orientation","class"]))}},Et={class:"relative min-h-[80vh] flex items-center justify-center"},yt={class:"relative z-10 w-full max-w-2xl p-px shadow-2xl"},St={class:"bg-card/90 rounded-[23px] p-8 md:p-16"},_t={class:"text-2xl font-bold text-foreground font-mono"},bt={class:"mb-10"},Dt={class:"text-center backdrop-blur-xl"},At=oe({__name:"ProcessView",setup(h){const{t:s,locale:A}=lt(),S=_e(20),d=G(()=>[{date:"2025-03-15",title:s("processView.kickoff.title"),description:s("processView.kickoff.description"),icon:"i-lucide-rocket",status:"completed"},{date:"2025-03-22",title:s("processView.design.title"),description:s("processView.design.description"),icon:"i-lucide-palette",status:"completed"},{date:"2025-03-29",title:s("processView.development.title"),description:s("processView.development.description"),icon:"i-lucide-code",status:"current"},{date:"2025-04-05",title:s("processView.deployment.title"),description:s("processView.deployment.description"),icon:"i-lucide-check-circle",status:"pending"}]);return(v,f)=>{const t=ft,p=Rt,X=dt,n=ht;return w(),N("div",Et,[D("div",yt,[D("div",St,[D("div",null,[D("span",_t,W(S.value)+"% ",1)]),D("div",bt,[$(t,{modelValue:S.value,"onUpdate:modelValue":f[0]||(f[0]=B=>S.value=B)},null,8,["modelValue"])]),D("div",null,[$(p,{size:"xs","default-value":2,items:d.value},null,8,["items"])]),D("div",Dt,[D("div",null,[$(X,{ghost:"",icon:"line-md:arrow-left",onClick:f[1]||(f[1]=B=>v.$router.push({name:"home",params:{locale:ie(A)}}))},{default:K(()=>[te(W(v.$t("maintenanceView.back")),1)]),_:1})])])])]),$(n)])}}});export{At as default};
