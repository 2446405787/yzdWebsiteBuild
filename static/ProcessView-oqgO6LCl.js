import{d as ae,c as Q,o as w,w as C,A as k,B as be,l as $,f as ie,P as we,I as et,J as tt,K as rt,q as ot,L as it,j as G,F as at,k as st,n as P,a as F,b as H,p as oe,D as nt,e as J,t as q,G as _e,H as ct,z as lt,r as ve,M as pe,u as ut,i as ft,N as dt,g as pt}from"./index-BS02FQMf.js";import{B as vt}from"./BgCard-CSg5wIUe.js";var mt=ae({__name:"BaseSeparator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(h){const s=h,D=["horizontal","vertical"];function S(t){return D.includes(t)}const f=$(()=>S(s.orientation)?s.orientation:"horizontal"),v=$(()=>f.value==="vertical"?s.orientation:void 0),d=$(()=>s.decorative?{role:"none"}:{"aria-orientation":v.value,role:"separator"});return(t,p)=>(w(),Q(ie(we),be({as:t.as,"as-child":t.asChild,"data-orientation":f.value},d.value),{default:C(()=>[k(t.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),gt=mt,ht=ae({__name:"Separator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(h){const s=h;return(D,S)=>(w(),Q(gt,et(tt(s)),{default:C(()=>[k(D.$slots,"default")]),_:3},16))}}),xt=ht;const Tt={slots:{root:"flex gap-1.5",item:"group relative flex flex-1 gap-3",container:"relative flex items-center gap-1.5",indicator:"group-data-[state=completed]:text-inverted group-data-[state=active]:text-inverted text-muted",separator:"flex-1 rounded-full bg-elevated",wrapper:"w-full",date:"text-dimmed text-xs/5",title:"font-medium text-highlighted text-sm",description:"text-muted text-wrap text-sm"},variants:{orientation:{horizontal:{root:"flex-row w-full",item:"flex-col",separator:"h-0.5"},vertical:{root:"flex-col",container:"flex-col",separator:"w-0.5"}},color:{primary:{indicator:"group-data-[state=completed]:bg-primary group-data-[state=active]:bg-primary"},secondary:{indicator:"group-data-[state=completed]:bg-secondary group-data-[state=active]:bg-secondary"},success:{indicator:"group-data-[state=completed]:bg-success group-data-[state=active]:bg-success"},info:{indicator:"group-data-[state=completed]:bg-info group-data-[state=active]:bg-info"},warning:{indicator:"group-data-[state=completed]:bg-warning group-data-[state=active]:bg-warning"},error:{indicator:"group-data-[state=completed]:bg-error group-data-[state=active]:bg-error"},neutral:{indicator:"group-data-[state=completed]:bg-inverted group-data-[state=active]:bg-inverted"}},size:{"3xs":"","2xs":"",xs:"",sm:"",md:"",lg:"",xl:"","2xl":"","3xl":""},reverse:{true:""}},compoundVariants:[{color:"primary",reverse:!1,class:{separator:"group-data-[state=completed]:bg-primary"}},{color:"secondary",reverse:!1,class:{separator:"group-data-[state=completed]:bg-secondary"}},{color:"success",reverse:!1,class:{separator:"group-data-[state=completed]:bg-success"}},{color:"info",reverse:!1,class:{separator:"group-data-[state=completed]:bg-info"}},{color:"warning",reverse:!1,class:{separator:"group-data-[state=completed]:bg-warning"}},{color:"error",reverse:!1,class:{separator:"group-data-[state=completed]:bg-error"}},{color:"primary",reverse:!0,class:{separator:"group-data-[state=active]:bg-primary group-data-[state=completed]:bg-primary"}},{color:"secondary",reverse:!0,class:{separator:"group-data-[state=active]:bg-secondary group-data-[state=completed]:bg-secondary"}},{color:"success",reverse:!0,class:{separator:"group-data-[state=active]:bg-success group-data-[state=completed]:bg-success"}},{color:"info",reverse:!0,class:{separator:"group-data-[state=active]:bg-info group-data-[state=completed]:bg-info"}},{color:"warning",reverse:!0,class:{separator:"group-data-[state=active]:bg-warning group-data-[state=completed]:bg-warning"}},{color:"error",reverse:!0,class:{separator:"group-data-[state=active]:bg-error group-data-[state=completed]:bg-error"}},{color:"neutral",reverse:!1,class:{separator:"group-data-[state=completed]:bg-inverted"}},{color:"neutral",reverse:!0,class:{separator:"group-data-[state=active]:bg-inverted group-data-[state=completed]:bg-inverted"}},{orientation:"horizontal",size:"3xs",class:{wrapper:"pe-4.5"}},{orientation:"horizontal",size:"2xs",class:{wrapper:"pe-5"}},{orientation:"horizontal",size:"xs",class:{wrapper:"pe-5.5"}},{orientation:"horizontal",size:"sm",class:{wrapper:"pe-6"}},{orientation:"horizontal",size:"md",class:{wrapper:"pe-6.5"}},{orientation:"horizontal",size:"lg",class:{wrapper:"pe-7"}},{orientation:"horizontal",size:"xl",class:{wrapper:"pe-7.5"}},{orientation:"horizontal",size:"2xl",class:{wrapper:"pe-8"}},{orientation:"horizontal",size:"3xl",class:{wrapper:"pe-8.5"}},{orientation:"vertical",size:"3xs",class:{wrapper:"-mt-0.5 pb-4.5"}},{orientation:"vertical",size:"2xs",class:{wrapper:"pb-5"}},{orientation:"vertical",size:"xs",class:{wrapper:"mt-0.5 pb-5.5"}},{orientation:"vertical",size:"sm",class:{wrapper:"mt-1 pb-6"}},{orientation:"vertical",size:"md",class:{wrapper:"mt-1.5 pb-6.5"}},{orientation:"vertical",size:"lg",class:{wrapper:"mt-2 pb-7"}},{orientation:"vertical",size:"xl",class:{wrapper:"mt-2.5 pb-7.5"}},{orientation:"vertical",size:"2xl",class:{wrapper:"mt-3 pb-8"}},{orientation:"vertical",size:"3xl",class:{wrapper:"mt-3.5 pb-8.5"}}],defaultVariants:{size:"md",color:"primary"}},Rt=["data-state"],Et={__name:"Timeline",props:rt({as:{type:null,required:!1},items:{type:Array,required:!0},size:{type:null,required:!1},color:{type:null,required:!1},orientation:{type:null,required:!1,default:"vertical"},defaultValue:{type:[String,Number],required:!1},reverse:{type:Boolean,required:!1},class:{type:null,required:!1},ui:{type:null,required:!1}},{modelValue:{type:[String,Number]},modelModifiers:{}}),emits:["update:modelValue"],setup(h){const s=h,D=ot(),S=it(h,"modelValue"),f=ct(),v=$(()=>_e({extend:_e(Tt),...f.ui?.timeline||{}})({orientation:s.orientation,size:s.size,color:s.color,reverse:s.reverse})),d=$(()=>{const p=S.value??s.defaultValue;return typeof p=="string"?s.items.findIndex(X=>X.value===p)??-1:s.reverse?p!=null?s.items.length-1-p:-1:p??-1});function t(p){if(d.value!==-1)return p===d.value?"active":s.reverse?p>d.value?"completed":void 0:p<d.value?"completed":void 0}return(p,X)=>(w(),Q(ie(we),{as:h.as,"data-orientation":h.orientation,"data-slot":"root",class:P(v.value.root({class:[s.ui?.root,s.class]}))},{default:C(()=>[(w(!0),G(at,null,st(h.items,(n,I)=>(w(),G("div",{key:n.value??I,"data-slot":"item",class:P(v.value.item({class:[s.ui?.item,n.ui?.item,n.class]})),"data-state":t(I)},[F("div",{"data-slot":"container",class:P(v.value.container({class:[s.ui?.container,n.ui?.container]}))},[H(nt,be({size:h.size,icon:n.icon},{ref_for:!0},typeof n.avatar=="object"?n.avatar:{},{"data-slot":"indicator",class:v.value.indicator({class:[s.ui?.indicator,n.ui?.indicator]}),ui:{icon:"text-inherit",fallback:"text-inherit"}}),{default:C(()=>[k(p.$slots,n.slot?`${n.slot}-indicator`:"indicator",{item:n})]),_:2},1040,["size","icon","class"]),I<h.items.length-1?(w(),Q(ie(xt),{key:0,"data-slot":"separator",class:P(v.value.separator({class:[s.ui?.separator,n.ui?.separator]})),orientation:s.orientation},null,8,["class","orientation"])):oe("",!0)],2),F("div",{"data-slot":"wrapper",class:P(v.value.wrapper({class:[s.ui?.wrapper,n.ui?.wrapper]}))},[n.date?(w(),G("div",{key:0,"data-slot":"date",class:P(v.value.date({class:[s.ui?.date,n.ui?.date]}))},[k(p.$slots,n.slot?`${n.slot}-date`:"date",{item:n},()=>[J(q(n.date),1)])],2)):oe("",!0),n.title||D.title?(w(),G("div",{key:1,"data-slot":"title",class:P(v.value.title({class:[s.ui?.title,n.ui?.title]}))},[k(p.$slots,n.slot?`${n.slot}-title`:"title",{item:n},()=>[J(q(n.title),1)])],2)):oe("",!0),n.description||D.description?(w(),G("div",{key:2,"data-slot":"description",class:P(v.value.description({class:[s.ui?.description,n.ui?.description]}))},[k(p.$slots,n.slot?`${n.slot}-description`:"description",{item:n},()=>[J(q(n.description),1)])],2)):oe("",!0)],2)],10,Rt))),128))]),_:3},8,["as","data-orientation","class"]))}},yt=ae({__name:"FluidCursor",props:{simResolution:{default:128},dyeResolution:{default:1440},captureResolution:{default:512},densityDissipation:{default:3.5},velocityDissipation:{default:2},pressure:{default:.1},pressureIterations:{default:20},curl:{default:3},splatRadius:{default:.2},splatForce:{default:6e3},shading:{type:Boolean,default:!0},colorUpdateSpeed:{default:10},backColor:{default:()=>({r:.5,g:0,b:0})},transparent:{type:Boolean,default:!0},class:{}},setup(h){const s=h;function D(){return{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:{r:0,g:0,b:0}}}const S=ve(null);return lt(()=>{const f=S.value;if(!f)return;const v=[D()],d={SIM_RESOLUTION:s.simResolution,DYE_RESOLUTION:s.dyeResolution,CAPTURE_RESOLUTION:s.captureResolution,DENSITY_DISSIPATION:s.densityDissipation,VELOCITY_DISSIPATION:s.velocityDissipation,PRESSURE:s.pressure,PRESSURE_ITERATIONS:s.pressureIterations,CURL:s.curl,SPLAT_RADIUS:s.splatRadius,SPLAT_FORCE:s.splatForce,SHADING:s.shading,COLOR_UPDATE_SPEED:s.colorUpdateSpeed,BACK_COLOR:s.backColor,TRANSPARENT:s.transparent},{gl:t,ext:p}=X(f);if(!t||!p)return;p.supportLinearFiltering||(d.DYE_RESOLUTION=256,d.SHADING=!1);function X(e){const o={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let r=e.getContext("webgl2",o);if(r||(r=e.getContext("webgl",o)||e.getContext("experimental-webgl",o)),!r)throw new Error("Unable to initialize WebGL.");const i="drawBuffers"in r;let a=!1,c=null;i?(r.getExtension("EXT_color_buffer_float"),a=!!r.getExtension("OES_texture_float_linear")):(c=r.getExtension("OES_texture_half_float"),a=!!r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);const l=i?r.HALF_FLOAT:c&&c.HALF_FLOAT_OES||0;let T,R,U;return i?(T=n(r,r.RGBA16F,r.RGBA,l),R=n(r,r.RG16F,r.RG,l),U=n(r,r.R16F,r.RED,l)):(T=n(r,r.RGBA,r.RGBA,l),R=n(r,r.RGBA,r.RGBA,l),U=n(r,r.RGBA,r.RGBA,l)),{gl:r,ext:{formatRGBA:T,formatRG:R,formatR:U,halfFloatTexType:l,supportLinearFiltering:a}}}function n(e,o,r,i){if(!I(e,o,r,i)){if("drawBuffers"in e){const a=e;switch(o){case a.R16F:return n(a,a.RG16F,a.RG,i);case a.RG16F:return n(a,a.RGBA16F,a.RGBA,i);default:return null}}return null}return{internalFormat:o,format:r}}function I(e,o,r,i){const a=e.createTexture();if(!a)return!1;e.bindTexture(e.TEXTURE_2D,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,o,4,4,0,r,i,null);const c=e.createFramebuffer();return c?(e.bindFramebuffer(e.FRAMEBUFFER,c),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE):!1}function se(e){if(!e.length)return 0;let o=0;for(let r=0;r<e.length;r++)o=(o<<5)-o+e.charCodeAt(r),o|=0;return o}function B(e,o){if(!o)return e;let r="";for(const i of o)r+=`#define ${i}
`;return r+e}function _(e,o,r=null){const i=B(o,r),a=t.createShader(e);return a?(t.shaderSource(a,i),t.compileShader(a),a):null}function me(e,o){if(!e||!o)return null;const r=t.createProgram();return r?(t.attachShader(r,e),t.attachShader(r,o),t.linkProgram(r),r):null}function ge(e){const o={},r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<r;i++){const a=t.getActiveUniform(e,i);a&&(o[a.name]=t.getUniformLocation(e,a.name))}return o}class z{program;uniforms;constructor(o,r){this.program=me(o,r),this.uniforms=this.program?ge(this.program):{}}bind(){this.program&&t.useProgram(this.program)}}class De{vertexShader;fragmentShaderSource;programs;activeProgram;uniforms;constructor(o,r){this.vertexShader=o,this.fragmentShaderSource=r,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(o){let r=0;for(const a of o)r+=se(a);let i=this.programs[r];if(i==null){const a=_(t.FRAGMENT_SHADER,this.fragmentShaderSource,o);i=me(this.vertexShader,a),this.programs[r]=i}i!==this.activeProgram&&(i&&(this.uniforms=ge(i)),this.activeProgram=i)}bind(){this.activeProgram&&t.useProgram(this.activeProgram)}}const A=_(t.VERTEX_SHADER,`
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
      `),Le=_(t.FRAGMENT_SHADER,`
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
      `),Ve=_(t.FRAGMENT_SHADER,`
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
      `),y=(()=>{const e=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,e),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const o=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,o),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(r,i=!1)=>{t&&(r?(t.viewport(0,0,r.width,r.height),t.bindFramebuffer(t.FRAMEBUFFER,r.fbo)):(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)),i&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}})();let E,u,ne,ce,L;const le=new z(A,Ae),W=new z(A,Fe),g=new z(A,Ue),m=new z(A,Pe),K=new z(A,Be),j=new z(A,Le),b=new z(A,Ce),V=new z(A,Ie),N=new z(A,Ve),O=new De(A,ze);function M(e,o,r,i,a,c){t.activeTexture(t.TEXTURE0);const l=t.createTexture();t.bindTexture(t.TEXTURE_2D,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,r,e,o,0,i,a,null);const T=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,T),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,l,0),t.viewport(0,0,e,o),t.clear(t.COLOR_BUFFER_BIT);const R=1/e,U=1/o;return{texture:l,fbo:T,width:e,height:o,texelSizeX:R,texelSizeY:U,attach(Y){return t.activeTexture(t.TEXTURE0+Y),t.bindTexture(t.TEXTURE_2D,l),Y}}}function ue(e,o,r,i,a,c){const l=M(e,o,r,i,a,c),T=M(e,o,r,i,a,c);return{width:e,height:o,texelSizeX:l.texelSizeX,texelSizeY:l.texelSizeY,read:l,write:T,swap(){const R=this.read;this.read=this.write,this.write=R}}}function Ne(e,o,r,i,a,c,l){const T=M(o,r,i,a,c,l);return le.bind(),le.uniforms.uTexture&&t.uniform1i(le.uniforms.uTexture,e.attach(0)),y(T,!1),T}function he(e,o,r,i,a,c,l){return e.width===o&&e.height===r||(e.read=Ne(e.read,o,r,i,a,c,l),e.write=M(o,r,i,a,c,l),e.width=o,e.height=r,e.texelSizeX=1/o,e.texelSizeY=1/r),e}function Z(){const e=Te(d.SIM_RESOLUTION),o=Te(d.DYE_RESOLUTION),r=p.halfFloatTexType,i=p.formatRGBA,a=p.formatRG,c=p.formatR,l=p.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),E?E=he(E,o.width,o.height,i.internalFormat,i.format,r,l):E=ue(o.width,o.height,i.internalFormat,i.format,r,l),u?u=he(u,e.width,e.height,a.internalFormat,a.format,r,l):u=ue(e.width,e.height,a.internalFormat,a.format,r,l),ne=M(e.width,e.height,c.internalFormat,c.format,r,t.NEAREST),ce=M(e.width,e.height,c.internalFormat,c.format,r,t.NEAREST),L=ue(e.width,e.height,c.internalFormat,c.format,r,t.NEAREST)}function xe(){const e=[];d.SHADING&&e.push("SHADING"),O.setKeywords(e)}function Te(e){const o=t.drawingBufferWidth,r=t.drawingBufferHeight,i=o/r,a=i<1?1/i:i,c=Math.round(e),l=Math.round(e*a);return o>r?{width:l,height:c}:{width:c,height:l}}function x(e){const o=window.devicePixelRatio||1;return Math.floor(e*o)}xe(),Z();let Re=Date.now(),ee=0;function te(){const e=Xe();Oe()&&Z(),Me(e),Ye(),Ge(e),He(null),requestAnimationFrame(te)}function Xe(){const e=Date.now();let o=(e-Re)/1e3;return o=Math.min(o,.016666),Re=e,o}function Oe(){const e=x(f.clientWidth),o=x(f.clientHeight);return f.width!==e||f.height!==o?(f.width=e,f.height=o,!0):!1}function Me(e){ee+=e*d.COLOR_UPDATE_SPEED,ee>=1&&(ee=Ze(ee,0,1),v.forEach(o=>{o.color=re()}))}function Ye(){for(const e of v)e.moved&&(e.moved=!1,$e(e))}function Ge(e){t.disable(t.BLEND),j.bind(),j.uniforms.texelSize&&t.uniform2f(j.uniforms.texelSize,u.texelSizeX,u.texelSizeY),j.uniforms.uVelocity&&t.uniform1i(j.uniforms.uVelocity,u.read.attach(0)),y(ce),b.bind(),b.uniforms.texelSize&&t.uniform2f(b.uniforms.texelSize,u.texelSizeX,u.texelSizeY),b.uniforms.uVelocity&&t.uniform1i(b.uniforms.uVelocity,u.read.attach(0)),b.uniforms.uCurl&&t.uniform1i(b.uniforms.uCurl,ce.attach(1)),b.uniforms.curl&&t.uniform1f(b.uniforms.curl,d.CURL),b.uniforms.dt&&t.uniform1f(b.uniforms.dt,e),y(u.write),u.swap(),K.bind(),K.uniforms.texelSize&&t.uniform2f(K.uniforms.texelSize,u.texelSizeX,u.texelSizeY),K.uniforms.uVelocity&&t.uniform1i(K.uniforms.uVelocity,u.read.attach(0)),y(ne),W.bind(),W.uniforms.uTexture&&t.uniform1i(W.uniforms.uTexture,L.read.attach(0)),W.uniforms.value&&t.uniform1f(W.uniforms.value,d.PRESSURE),y(L.write),L.swap(),V.bind(),V.uniforms.texelSize&&t.uniform2f(V.uniforms.texelSize,u.texelSizeX,u.texelSizeY),V.uniforms.uDivergence&&t.uniform1i(V.uniforms.uDivergence,ne.attach(0));for(let r=0;r<d.PRESSURE_ITERATIONS;r++)V.uniforms.uPressure&&t.uniform1i(V.uniforms.uPressure,L.read.attach(1)),y(L.write),L.swap();N.bind(),N.uniforms.texelSize&&t.uniform2f(N.uniforms.texelSize,u.texelSizeX,u.texelSizeY),N.uniforms.uPressure&&t.uniform1i(N.uniforms.uPressure,L.read.attach(0)),N.uniforms.uVelocity&&t.uniform1i(N.uniforms.uVelocity,u.read.attach(1)),y(u.write),u.swap(),m.bind(),m.uniforms.texelSize&&t.uniform2f(m.uniforms.texelSize,u.texelSizeX,u.texelSizeY),!p.supportLinearFiltering&&m.uniforms.dyeTexelSize&&t.uniform2f(m.uniforms.dyeTexelSize,u.texelSizeX,u.texelSizeY);const o=u.read.attach(0);m.uniforms.uVelocity&&t.uniform1i(m.uniforms.uVelocity,o),m.uniforms.uSource&&t.uniform1i(m.uniforms.uSource,o),m.uniforms.dt&&t.uniform1f(m.uniforms.dt,e),m.uniforms.dissipation&&t.uniform1f(m.uniforms.dissipation,d.VELOCITY_DISSIPATION),y(u.write),u.swap(),!p.supportLinearFiltering&&m.uniforms.dyeTexelSize&&t.uniform2f(m.uniforms.dyeTexelSize,E.texelSizeX,E.texelSizeY),m.uniforms.uVelocity&&t.uniform1i(m.uniforms.uVelocity,u.read.attach(0)),m.uniforms.uSource&&t.uniform1i(m.uniforms.uSource,E.read.attach(1)),m.uniforms.dissipation&&t.uniform1f(m.uniforms.dissipation,d.DENSITY_DISSIPATION),y(E.write),E.swap()}function He(e){t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND),ke(e)}function ke(e){const o=t.drawingBufferWidth,r=t.drawingBufferHeight;O.bind(),d.SHADING&&O.uniforms.texelSize&&t.uniform2f(O.uniforms.texelSize,1/o,1/r),O.uniforms.uTexture&&t.uniform1i(O.uniforms.uTexture,E.read.attach(0)),y(e,!1)}function $e(e){const o=e.deltaX*d.SPLAT_FORCE,r=e.deltaY*d.SPLAT_FORCE;Ee(e.texcoordX,e.texcoordY,o,r,e.color)}function qe(e){const o=re();o.r*=10,o.g*=10,o.b*=10;const r=10*(Math.random()-.5),i=30*(Math.random()-.5);Ee(e.texcoordX,e.texcoordY,r,i,o)}function Ee(e,o,r,i,a){g.bind(),g.uniforms.uTarget&&t.uniform1i(g.uniforms.uTarget,u.read.attach(0)),g.uniforms.aspectRatio&&t.uniform1f(g.uniforms.aspectRatio,f.width/f.height),g.uniforms.point&&t.uniform2f(g.uniforms.point,e,o),g.uniforms.color&&t.uniform3f(g.uniforms.color,r,i,0),g.uniforms.radius&&t.uniform1f(g.uniforms.radius,We(d.SPLAT_RADIUS/100)),y(u.write),u.swap(),g.uniforms.uTarget&&t.uniform1i(g.uniforms.uTarget,E.read.attach(0)),g.uniforms.color&&t.uniform3f(g.uniforms.color,a.r,a.g,a.b),y(E.write),E.swap()}function We(e){const o=f.width/f.height;return o>1&&(e*=o),e}function fe(e,o,r,i){e.id=o,e.down=!0,e.moved=!1,e.texcoordX=r/f.width,e.texcoordY=1-i/f.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=re()}function de(e,o,r,i){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=o/f.width,e.texcoordY=1-r/f.height,e.deltaX=je(e.texcoordX-e.prevTexcoordX),e.deltaY=Je(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=i}function Ke(e){e.down=!1}function je(e){const o=f.width/f.height;return o<1&&(e*=o),e}function Je(e){const o=f.width/f.height;return o>1&&(e/=o),e}function re(){const e=Qe(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function Qe(e,o,r){let i=0,a=0,c=0;const l=Math.floor(e*6),T=e*6-l,R=r*(1-o),U=r*(1-T*o),Y=r*(1-(1-T)*o);switch(l%6){case 0:i=r,a=Y,c=R;break;case 1:i=U,a=r,c=R;break;case 2:i=R,a=r,c=Y;break;case 3:i=R,a=U,c=r;break;case 4:i=Y,a=R,c=r;break;case 5:i=r,a=R,c=U;break}return{r:i,g:a,b:c}}function Ze(e,o,r){const i=r-o;return(e-o)%i+o}window.addEventListener("mousedown",e=>{const o=v[0];if(!o)return;const r=x(e.clientX),i=x(e.clientY);fe(o,-1,r,i),qe(o)});function ye(e){const o=v[0];if(!o)return;const r=x(e.clientX),i=x(e.clientY),a=re();te(),de(o,r,i,a),document.body.removeEventListener("mousemove",ye)}document.body.addEventListener("mousemove",ye),window.addEventListener("mousemove",e=>{const o=v[0];if(!o)return;const r=x(e.clientX),i=x(e.clientY),a=o.color;de(o,r,i,a)});function Se(e){const o=e.targetTouches,r=v[0];if(r){for(let i=0;i<o.length;i++){const a=o[i];if(!a)continue;const c=x(a.clientX),l=x(a.clientY);te(),fe(r,a.identifier,c,l)}document.body.removeEventListener("touchstart",Se)}}document.body.addEventListener("touchstart",Se),window.addEventListener("touchstart",e=>{const o=e.targetTouches,r=v[0];if(r)for(let i=0;i<o.length;i++){const a=o[i];if(!a)continue;const c=x(a.clientX),l=x(a.clientY);fe(r,a.identifier,c,l)}},!1),window.addEventListener("touchmove",e=>{const o=e.targetTouches,r=v[0];if(r)for(let i=0;i<o.length;i++){const a=o[i];if(!a)continue;const c=x(a.clientX),l=x(a.clientY);de(r,c,l,r.color)}},!1),window.addEventListener("touchend",e=>{const o=e.changedTouches,r=v[0];if(r)for(let i=0;i<o.length;i++)Ke(r)}),pe(()=>s.simResolution,e=>{d.SIM_RESOLUTION=e,Z()}),pe(()=>s.dyeResolution,e=>{d.DYE_RESOLUTION=e,Z()}),pe(()=>s.shading,e=>{d.SHADING=e,xe()}),te()}),(f,v)=>(w(),G("div",{class:P(["pointer-events-none fixed top-0 left-0 z-50 size-full",[s.class]])},[F("canvas",{id:"fluid",ref_key:"canvasRef",ref:S,class:"block h-screen w-screen"},null,512)],2))}}),St={class:"text-left"},_t={class:"text-2xl font-bold text-foreground"},bt={class:"mb-10"},wt={class:"max-h-128 overflow-y-auto no-scrollbar"},Dt={class:"mt-8 text-center backdrop-blur-xl"},zt=ae({__name:"ProcessView",setup(h){const{t:s,locale:D}=ut(),S=ve(25),f=ve("articles"),v=$(()=>[{date:"2026-04",title:s("processView.deployment.title"),description:s("processView.deployment.description"),icon:"lucide:bolt",value:"deployment"},{date:"2026-02-03",title:s("processView.articles.title"),description:s("processView.articles.description"),icon:"lucide:pencil",value:"articles"},{date:"2026-02-02",title:s("processView.webtools.title"),description:s("processView.webtools.description"),icon:"lucide:tool-case",value:"webtools"},{date:"2026-01-23",title:s("processView.router.title"),description:s("processView.router.description"),icon:"lucide:router",value:"router"},{date:"2026-01-22",title:s("processView.language.title"),description:s("processView.language.description"),icon:"i-lucide-palette",value:"language"},{date:"2026-01-21",title:s("processView.mainPage.title"),description:s("processView.mainPage.description"),icon:"i-lucide-code",value:"mainPage"},{date:"2026-01-20",title:s("processView.start.title"),description:s("processView.start.description"),icon:"i-lucide-rocket",value:"start"}]);return(d,t)=>{const p=yt,X=dt,n=Et,I=pt,se=ft;return w(),Q(se,{class:"py-12"},{default:C(()=>[H(p),H(vt,null,{content:C(()=>[F("div",St,[F("div",null,[F("span",_t,q(S.value)+"% ",1)]),F("div",bt,[H(X,{modelValue:S.value,"onUpdate:modelValue":t[0]||(t[0]=B=>S.value=B)},null,8,["modelValue"])]),F("div",wt,[H(n,{reverse:"",size:"xl",modelValue:f.value,"onUpdate:modelValue":t[1]||(t[1]=B=>f.value=B),items:v.value},{date:C(({item:B})=>[J(q(B.date),1)]),_:1},8,["modelValue","items"])]),F("div",Dt,[F("div",null,[H(I,{ghost:"",icon:"line-md:arrow-left",onClick:t[2]||(t[2]=B=>d.$router.push({name:"home",params:{locale:ie(D)}}))},{default:C(()=>[J(q(d.$t("maintenanceView.back")),1)]),_:1})])])])]),_:1})]),_:1})}}});export{zt as default};
