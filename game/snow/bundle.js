"use strict";(()=>{var mh=0,Tl=1,gh=2;var Lc=1,_h=2,mn=3,Fn=0,Le=1,Fe=2,Dn=0,Ai=1,On=2,Al=3,Cl=4,xh=5,Kn=100,yh=101,vh=102,Mh=103,Sh=104,bh=200,wh=201,Eh=202,Th=203,Sa=204,ba=205,Ah=206,Ch=207,Rh=208,Ih=209,Ph=210,Lh=211,Dh=212,Uh=213,Nh=214,wa=0,Ea=1,Ta=2,Pi=3,Aa=4,Ca=5,Ra=6,Ia=7,Dc=0,Fh=1,Oh=2,Un=0,kh=1,Bh=2,zh=3,Hh=4,Vh=5,Gh=6,Wh=7;var Uc=300,Li=301,Di=302,Pa=303,La=304,Ar=306,Da=1e3,Qn=1001,Ua=1002,Je=1003,Xh=1004;var Ss=1005;var en=1006,Hr=1007;var ti=1008;var vn=1009,Nc=1010,Fc=1011,rs=1012,Jo=1013,ei=1014,_n=1015,gs=1016,Ko=1017,jo=1018,Ui=1020,Oc=35902,kc=1021,Bc=1022,Ze=1023,zc=1024,Hc=1025,Ci=1026,Ni=1027,Vc=1028,Qo=1029,Gc=1030,tl=1031;var el=1033,Js=33776,Ks=33777,js=33778,Qs=33779,Na=35840,Fa=35841,Oa=35842,ka=35843,Ba=36196,za=37492,Ha=37496,Va=37808,Ga=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,$a=37814,Za=37815,Ja=37816,Ka=37817,ja=37818,Qa=37819,to=37820,eo=37821,tr=36492,no=36494,io=36495,Wc=36283,so=36284,ro=36285,ao=36286;var er=2300,oo=2301,Vr=2302,Rl=2400,Il=2401,Pl=2402;var qh=3200,Yh=3201;var Xc=0,$h=1,Pn="",He="srgb",zi="srgb-linear",Cr="linear",Jt="srgb";var li=7680;var Ll=519,Zh=512,Jh=513,Kh=514,qc=515,jh=516,Qh=517,tu=518,eu=519,lo=35044;var Dl="300 es",xn=2e3,nr=2001,kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Gr=Math.PI/180,co=180/Math.PI;function Nn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function nu(i,t){return(i%t+t)%t}function Wr(i,t,e){return(1-e)*i+e*t}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],p=n[2],m=n[5],_=n[8],g=s[0],f=s[3],u=s[6],x=s[1],S=s[4],y=s[7],C=s[2],T=s[5],A=s[8];return r[0]=a*g+o*x+l*C,r[3]=a*f+o*S+l*T,r[6]=a*u+o*y+l*A,r[1]=c*g+d*x+h*C,r[4]=c*f+d*S+h*T,r[7]=c*u+d*y+h*A,r[2]=p*g+m*x+_*C,r[5]=p*f+m*S+_*T,r[8]=p*u+m*y+_*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*a-o*c,p=o*l-d*r,m=c*r-a*l,_=e*h+n*p+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=h*g,t[1]=(s*c-d*n)*g,t[2]=(o*n-s*a)*g,t[3]=p*g,t[4]=(d*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xr.makeScale(t,e)),this}rotate(t){return this.premultiply(Xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Xr=new Lt;function Yc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function iu(){let i=ir("canvas");return i.style.display="block",i}var Ul={};function ts(i){i in Ul||(Ul[i]=!0,console.warn(i))}function su(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ru(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function au(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Xt={enabled:!0,workingColorSpace:zi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Jt&&(i.r=yn(i.r),i.g=yn(i.g),i.b=yn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Jt&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pn?Cr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ri(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Nl=[.64,.33,.3,.6,.15,.06],Fl=[.2126,.7152,.0722],Ol=[.3127,.329],kl=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bl=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[zi]:{primaries:Nl,whitePoint:Ol,transfer:Cr,toXYZ:kl,fromXYZ:Bl,luminanceCoefficients:Fl,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:Nl,whitePoint:Ol,transfer:Jt,toXYZ:kl,fromXYZ:Bl,luminanceCoefficients:Fl,outputColorSpaceConfig:{drawingBufferColorSpace:He}}});var ci,ho=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ci===void 0&&(ci=ir("canvas")),ci.width=t.width,ci.height=t.height;let n=ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yn(e[n]/255)*255):e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ou=0,sr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Nn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qr(s[a].image)):r.push(qr(s[a]))}else r=qr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ho.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lu=0,Oe=class i extends kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Qn,s=Qn,r=en,a=ti,o=Ze,l=vn,c=i.DEFAULT_ANISOTROPY,d=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Nn(),this.name="",this.source=new sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Da:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case Ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Da:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case Ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Uc;Oe.DEFAULT_ANISOTROPY=1;var ce=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],d=l[4],h=l[8],p=l[1],m=l[5],_=l[9],g=l[2],f=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(h-g)<.01&&Math.abs(_-f)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+g)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,y=(m+1)/2,C=(u+1)/2,T=(d+p)/4,A=(h+g)/4,R=(_+f)/4;return S>y&&S>C?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=A/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=R/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=R/r),this.set(n,s,r,e),this}let x=Math.sqrt((f-_)*(f-_)+(h-g)*(h-g)+(p-d)*(p-d));return Math.abs(x)<.001&&(x=1),this.x=(f-_)/x,this.y=(h-g)/x,this.z=(p-d)/x,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},uo=class extends kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new sr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends uo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},rr=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fo=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3],p=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==p||c!==m||d!==_){let f=1-o,u=l*p+c*m+d*_+h*g,x=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){let C=Math.sqrt(S),T=Math.atan2(C,u*x);f=Math.sin(f*T)/C,o=Math.sin(o*T)/C}let y=o*x;if(l=l*f+p*y,c=c*f+m*y,d=d*f+_*y,h=h*f+g*y,f===1-o){let C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[a],p=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+d*h+l*m-c*p,t[e+1]=l*_+d*p+c*h-o*m,t[e+2]=c*_+d*m+o*p-l*h,t[e+3]=d*_-o*h-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),h=o(r/2),p=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*d*h+c*m*_,this._y=c*m*h-p*d*_,this._z=c*d*_+p*m*h,this._w=c*d*h-p*m*_;break;case"YXZ":this._x=p*d*h+c*m*_,this._y=c*m*h-p*d*_,this._z=c*d*_-p*m*h,this._w=c*d*h+p*m*_;break;case"ZXY":this._x=p*d*h-c*m*_,this._y=c*m*h+p*d*_,this._z=c*d*_+p*m*h,this._w=c*d*h-p*m*_;break;case"ZYX":this._x=p*d*h-c*m*_,this._y=c*m*h+p*d*_,this._z=c*d*_-p*m*h,this._w=c*d*h+p*m*_;break;case"YZX":this._x=p*d*h+c*m*_,this._y=c*m*h+p*d*_,this._z=c*d*_-p*m*h,this._w=c*d*h-p*m*_;break;case"XZY":this._x=p*d*h-c*m*_,this._y=c*m*h-p*d*_,this._z=c*d*_+p*m*h,this._w=c*d*h+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10],p=n+o+h;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>h){let m=2*Math.sqrt(1+n-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>h){let m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{let m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-e)*d)/c,p=Math.sin(e*d)/c;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),d=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yr.copy(this).projectOnVector(t),this.sub(Yr)}reflect(t){return this.sub(Yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yr=new L,zl=new Bn,ni=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qe):qe.fromBufferAttribute(r,a),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bs.copy(n.boundingBox)),bs.applyMatrix4(t.matrixWorld),this.union(bs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yi),ws.subVectors(this.max,Yi),hi.subVectors(t.a,Yi),ui.subVectors(t.b,Yi),di.subVectors(t.c,Yi),En.subVectors(ui,hi),Tn.subVectors(di,ui),Wn.subVectors(hi,di);let e=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-Wn.z,Wn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,Wn.z,0,-Wn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-Wn.y,Wn.x,0];return!$r(e,hi,ui,di,ws)||(e=[1,0,0,0,1,0,0,0,1],!$r(e,hi,ui,di,ws))?!1:(Es.crossVectors(En,Tn),e=[Es.x,Es.y,Es.z],$r(e,hi,ui,di,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},hn=[new L,new L,new L,new L,new L,new L,new L,new L],qe=new L,bs=new ni,hi=new L,ui=new L,di=new L,En=new L,Tn=new L,Wn=new L,Yi=new L,ws=new L,Es=new L,Xn=new L;function $r(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xn.fromArray(i,r);let o=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),l=t.dot(Xn),c=e.dot(Xn),d=n.dot(Xn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var cu=new ni,$i=new L,Zr=new L,Fi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$i.subVectors(t,this.center);let e=$i.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($i.copy(t.center).add(Zr)),this.expandByPoint($i.copy(t.center).sub(Zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},un=new L,Jr=new L,Ts=new L,An=new L,Kr=new L,As=new L,jr=new L,ar=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jr.copy(t).add(e).multiplyScalar(.5),Ts.copy(e).sub(t).normalize(),An.copy(this.origin).sub(Jr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ts),o=An.dot(this.direction),l=-An.dot(Ts),c=An.lengthSq(),d=Math.abs(1-a*a),h,p,m,_;if(d>0)if(h=a*l-o,p=a*o-l,_=r*d,h>=0)if(p>=-_)if(p<=_){let g=1/d;h*=g,p*=g,m=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;else p=-r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;else p<=-_?(h=Math.max(0,-(-a*r+o)),p=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+p*(p+2*l)+c):p<=_?(h=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(h=Math.max(0,-(a*r+o)),p=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+p*(p+2*l)+c);else p=a>0?-r:r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Jr).addScaledVector(Ts,p),m}intersectSphere(t,e){un.subVectors(t.center,this.origin);let n=un.dot(this.direction),s=un.dot(un)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),d>=0?(r=(t.min.y-p.y)*d,a=(t.max.y-p.y)*d):(r=(t.max.y-p.y)*d,a=(t.min.y-p.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-p.z)*h,l=(t.max.z-p.z)*h):(o=(t.max.z-p.z)*h,l=(t.min.z-p.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,s,r){Kr.subVectors(e,t),As.subVectors(n,t),jr.crossVectors(Kr,As);let a=this.direction.dot(jr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,t);let l=o*this.direction.dot(As.crossVectors(An,As));if(l<0)return null;let c=o*this.direction.dot(Kr.cross(An));if(c<0||l+c>a)return null;let d=-o*An.dot(jr);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class i{constructor(t,e,n,s,r,a,o,l,c,d,h,p,m,_,g,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,d,h,p,m,_,g,f)}set(t,e,n,s,r,a,o,l,c,d,h,p,m,_,g,f){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=p,u[3]=m,u[7]=_,u[11]=g,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/fi.setFromMatrixColumn(t,0).length(),r=1/fi.setFromMatrixColumn(t,1).length(),a=1/fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let p=a*d,m=a*h,_=o*d,g=o*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=m+_*c,e[5]=p-g*c,e[9]=-o*l,e[2]=g-p*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){let p=l*d,m=l*h,_=c*d,g=c*h;e[0]=p+g*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*d,e[9]=-o,e[2]=m*o-_,e[6]=g+p*o,e[10]=a*l}else if(t.order==="ZXY"){let p=l*d,m=l*h,_=c*d,g=c*h;e[0]=p-g*o,e[4]=-a*h,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*d,e[9]=g-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let p=a*d,m=a*h,_=o*d,g=o*h;e[0]=l*d,e[4]=_*c-m,e[8]=p*c+g,e[1]=l*h,e[5]=g*c+p,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let p=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*d,e[4]=g-p*h,e[8]=_*h+m,e[1]=h,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=m*h+_,e[10]=p-g*h}else if(t.order==="XZY"){let p=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=p*h+g,e[5]=a*d,e[9]=m*h-_,e[2]=_*h-m,e[6]=o*d,e[10]=g*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hu,t,uu)}lookAt(t,e,n){let s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Cn.crossVectors(n,Ue),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Cn.crossVectors(n,Ue)),Cn.normalize(),Cs.crossVectors(Ue,Cn),s[0]=Cn.x,s[4]=Cs.x,s[8]=Ue.x,s[1]=Cn.y,s[5]=Cs.y,s[9]=Ue.y,s[2]=Cn.z,s[6]=Cs.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],p=n[9],m=n[13],_=n[2],g=n[6],f=n[10],u=n[14],x=n[3],S=n[7],y=n[11],C=n[15],T=s[0],A=s[4],R=s[8],w=s[12],M=s[1],P=s[5],H=s[9],z=s[13],W=s[2],J=s[6],X=s[10],tt=s[14],G=s[3],st=s[7],dt=s[11],St=s[15];return r[0]=a*T+o*M+l*W+c*G,r[4]=a*A+o*P+l*J+c*st,r[8]=a*R+o*H+l*X+c*dt,r[12]=a*w+o*z+l*tt+c*St,r[1]=d*T+h*M+p*W+m*G,r[5]=d*A+h*P+p*J+m*st,r[9]=d*R+h*H+p*X+m*dt,r[13]=d*w+h*z+p*tt+m*St,r[2]=_*T+g*M+f*W+u*G,r[6]=_*A+g*P+f*J+u*st,r[10]=_*R+g*H+f*X+u*dt,r[14]=_*w+g*z+f*tt+u*St,r[3]=x*T+S*M+y*W+C*G,r[7]=x*A+S*P+y*J+C*st,r[11]=x*R+S*H+y*X+C*dt,r[15]=x*w+S*z+y*tt+C*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],p=t[10],m=t[14],_=t[3],g=t[7],f=t[11],u=t[15];return _*(+r*l*h-s*c*h-r*o*p+n*c*p+s*o*m-n*l*m)+g*(+e*l*m-e*c*p+r*a*p-s*a*m+s*c*d-r*l*d)+f*(+e*c*h-e*o*m-r*a*h+n*a*m+r*o*d-n*c*d)+u*(-s*o*d-e*l*h+e*o*p+s*a*h-n*a*p+n*l*d)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],p=t[10],m=t[11],_=t[12],g=t[13],f=t[14],u=t[15],x=h*f*c-g*p*c+g*l*m-o*f*m-h*l*u+o*p*u,S=_*p*c-d*f*c-_*l*m+a*f*m+d*l*u-a*p*u,y=d*g*c-_*h*c+_*o*m-a*g*m-d*o*u+a*h*u,C=_*h*l-d*g*l-_*o*p+a*g*p+d*o*f-a*h*f,T=e*x+n*S+s*y+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=x*A,t[1]=(g*p*r-h*f*r-g*s*m+n*f*m+h*s*u-n*p*u)*A,t[2]=(o*f*r-g*l*r+g*s*c-n*f*c-o*s*u+n*l*u)*A,t[3]=(h*l*r-o*p*r-h*s*c+n*p*c+o*s*m-n*l*m)*A,t[4]=S*A,t[5]=(d*f*r-_*p*r+_*s*m-e*f*m-d*s*u+e*p*u)*A,t[6]=(_*l*r-a*f*r-_*s*c+e*f*c+a*s*u-e*l*u)*A,t[7]=(a*p*r-d*l*r+d*s*c-e*p*c-a*s*m+e*l*m)*A,t[8]=y*A,t[9]=(_*h*r-d*g*r-_*n*m+e*g*m+d*n*u-e*h*u)*A,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*u+e*o*u)*A,t[11]=(d*o*r-a*h*r-d*n*c+e*h*c+a*n*m-e*o*m)*A,t[12]=C*A,t[13]=(d*g*s-_*h*s+_*n*p-e*g*p-d*n*f+e*h*f)*A,t[14]=(_*o*s-a*g*s-_*n*l+e*g*l+a*n*f-e*o*f)*A,t[15]=(a*h*s-d*o*s+d*n*l-e*h*l-a*n*p+e*o*p)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,h=o+o,p=r*c,m=r*d,_=r*h,g=a*d,f=a*h,u=o*h,x=l*c,S=l*d,y=l*h,C=n.x,T=n.y,A=n.z;return s[0]=(1-(g+u))*C,s[1]=(m+y)*C,s[2]=(_-S)*C,s[3]=0,s[4]=(m-y)*T,s[5]=(1-(p+u))*T,s[6]=(f+x)*T,s[7]=0,s[8]=(_+S)*A,s[9]=(f-x)*A,s[10]=(1-(p+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=fi.set(s[0],s[1],s[2]).length(),a=fi.set(s[4],s[5],s[6]).length(),o=fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ye.copy(this);let c=1/r,d=1/a,h=1/o;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=d,Ye.elements[5]*=d,Ye.elements[6]*=d,Ye.elements[8]*=h,Ye.elements[9]*=h,Ye.elements[10]*=h,e.setFromRotationMatrix(Ye),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=xn){let l=this.elements,c=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s),m,_;if(o===xn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===nr)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=xn){let l=this.elements,c=1/(e-t),d=1/(n-s),h=1/(a-r),p=(e+t)*c,m=(n+s)*d,_,g;if(o===xn)_=(a+r)*h,g=-2*h;else if(o===nr)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},fi=new L,Ye=new ae,hu=new L(0,0,0),uu=new L(1,1,1),Cn=new L,Cs=new L,Ue=new L,Hl=new ae,Vl=new Bn,nn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var or=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},du=0,Gl=new L,pi=new Bn,dn=new ae,Rs=new L,Zi=new L,fu=new L,pu=new Bn,Wl=new L(1,0,0),Xl=new L(0,1,0),ql=new L(0,0,1),Yl={type:"added"},mu={type:"removed"},mi={type:"childadded",child:null},Qr={type:"childremoved",child:null},xe=class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new nn,n=new Bn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Lt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(Wl,t)}rotateY(t){return this.rotateOnAxis(Xl,t)}rotateZ(t){return this.rotateOnAxis(ql,t)}translateOnAxis(t,e){return Gl.copy(t).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wl,t)}translateY(t){return this.translateOnAxis(Xl,t)}translateZ(t){return this.translateOnAxis(ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rs.copy(t):Rs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Zi,Rs,this.up):dn.lookAt(Rs,Zi,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(dn),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yl),mi.child=t,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mu),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yl),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,t,fu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,pu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),h=a(t.shapes),p=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};xe.DEFAULT_UP=new L(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=new L,fn=new L,ta=new L,pn=new L,gi=new L,_i=new L,$l=new L,ea=new L,na=new L,ia=new L,sa=new ce,ra=new ce,aa=new ce,Ln=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$e.subVectors(t,e),s.cross($e);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$e.subVectors(s,e),fn.subVectors(n,e),ta.subVectors(t,e);let a=$e.dot($e),o=$e.dot(fn),l=$e.dot(ta),c=fn.dot(fn),d=fn.dot(ta),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let p=1/h,m=(c*l-o*d)*p,_=(a*d-o*l)*p;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(o,pn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return sa.setScalar(0),ra.setScalar(0),aa.setScalar(0),sa.fromBufferAttribute(t,e),ra.fromBufferAttribute(t,n),aa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(sa,r.x),a.addScaledVector(ra,r.y),a.addScaledVector(aa,r.z),a}static isFrontFacing(t,e,n,s){return $e.subVectors(n,e),fn.subVectors(t,e),$e.cross(fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),$e.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;gi.subVectors(s,n),_i.subVectors(r,n),ea.subVectors(t,n);let l=gi.dot(ea),c=_i.dot(ea);if(l<=0&&c<=0)return e.copy(n);na.subVectors(t,s);let d=gi.dot(na),h=_i.dot(na);if(d>=0&&h<=d)return e.copy(s);let p=l*h-d*c;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(gi,a);ia.subVectors(t,r);let m=gi.dot(ia),_=_i.dot(ia);if(_>=0&&m<=_)return e.copy(r);let g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(_i,o);let f=d*_-m*h;if(f<=0&&h-d>=0&&m-_>=0)return $l.subVectors(r,s),o=(h-d)/(h-d+(m-_)),e.copy(s).addScaledVector($l,o);let u=1/(f+g+p);return a=g*u,o=p*u,e.copy(n).addScaledVector(gi,a).addScaledVector(_i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function oa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=nu(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=oa(a,r,t+1/3),this.g=oa(a,r,t),this.b=oa(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let n=$c[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Xt.fromWorkingColorSpace(be.copy(this),t),Math.round(_e(be.r*255,0,255))*65536+Math.round(_e(be.g*255,0,255))*256+Math.round(_e(be.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(be.copy(this),e);let n=be.r,s=be.g,r=be.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=He){Xt.fromWorkingColorSpace(be.copy(this),t);let e=be.r,n=be.g,s=be.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Is);let n=Wr(Rn.h,Is.h,e),s=Wr(Rn.s,Is.s,e),r=Wr(Rn.l,Is.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},be=new Nt;Nt.NAMES=$c;var gu=0,Sn=class extends kn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Nn(),this.name="",this.blending=Ai,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=ba,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sa&&(n.blendSrc=this.blendSrc),this.blendDst!==ba&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ee=class extends Sn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ue=new L,Ps=new ct,Re=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lo,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lo&&(t.usage=this.usage),t}};var lr=class extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var cr=class extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}},_u=0,ze=new ae,la=new xe,xi=new L,Ne=new ni,Ji=new ni,me=new L,ye=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yc(t)?cr:lr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return la.lookAt(t),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(me.addVectors(Ne.min,Ji.min),Ne.expandByPoint(me),me.addVectors(Ne.max,Ji.max),Ne.expandByPoint(me)):(Ne.expandByPoint(Ji.min),Ne.expandByPoint(Ji.max))}Ne.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(me));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)me.fromBufferAttribute(o,c),l&&(xi.fromBufferAttribute(t,c),me.add(xi)),s=Math.max(s,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new L,l[R]=new L;let c=new L,d=new L,h=new L,p=new ct,m=new ct,_=new ct,g=new L,f=new L;function u(R,w,M){c.fromBufferAttribute(n,R),d.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,w),_.fromBufferAttribute(r,M),d.sub(c),h.sub(c),m.sub(p),_.sub(p);let P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(P),f.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(P),o[R].add(g),o[w].add(g),o[M].add(g),l[R].add(f),l[w].add(f),l[M].add(f))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,w=x.length;R<w;++R){let M=x[R],P=M.start,H=M.count;for(let z=P,W=P+H;z<W;z+=3)u(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let S=new L,y=new L,C=new L,T=new L;function A(R){C.fromBufferAttribute(s,R),T.copy(C);let w=o[R];S.copy(w),S.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(T,w);let P=y.dot(l[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,P)}for(let R=0,w=x.length;R<w;++R){let M=x[R],P=M.start,H=M.count;for(let z=P,W=P+H;z<W;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,d=new L,h=new L;if(t)for(let p=0,m=t.count;p<m;p+=3){let _=t.getX(p+0),g=t.getX(p+1),f=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,f),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(o,l){let c=o.array,d=o.itemSize,h=o.normalized,p=new c.constructor(l.length*d),m=0,_=0;for(let g=0,f=l.length;g<f;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*d;for(let u=0;u<d;u++)p[_++]=c[m++]}return new Re(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){let p=c[d],m=t(p,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let h=0,p=c.length;h<p;h++){let m=c[h];d.push(m.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(e))}let r=t.morphAttributes;for(let c in r){let d=[],h=r[c];for(let p=0,m=h.length;p<m;p++)d.push(h[p].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,d=a.length;c<d;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zl=new ae,qn=new ar,Ls=new Fi,Jl=new L,Ds=new L,Us=new L,Ns=new L,ca=new L,Fs=new L,Kl=new L,Os=new L,ut=class extends xe{constructor(t=new ye,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],h=r[l];d!==0&&(ca.fromBufferAttribute(h,t),a?Fs.addScaledVector(ca,d):Fs.addScaledVector(ca.sub(e),d))}e.add(Fs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(r),qn.copy(t.ray).recast(t.near),!(Ls.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Ls,Jl)===null||qn.origin.distanceToSquared(Jl)>(t.far-t.near)**2))&&(Zl.copy(r).invert(),qn.copy(t.ray).applyMatrix4(Zl),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){let f=p[_],u=a[f.materialIndex],x=Math.max(f.start,m.start),S=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let y=x,C=S;y<C;y+=3){let T=o.getX(y),A=o.getX(y+1),R=o.getX(y+2);s=ks(this,u,t,n,c,d,h,T,A,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let f=_,u=g;f<u;f+=3){let x=o.getX(f),S=o.getX(f+1),y=o.getX(f+2);s=ks(this,a,t,n,c,d,h,x,S,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){let f=p[_],u=a[f.materialIndex],x=Math.max(f.start,m.start),S=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let y=x,C=S;y<C;y+=3){let T=y,A=y+1,R=y+2;s=ks(this,u,t,n,c,d,h,T,A,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let f=_,u=g;f<u;f+=3){let x=f,S=f+1,y=f+2;s=ks(this,a,t,n,c,d,h,x,S,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function xu(i,t,e,n,s,r,a,o){let l;if(t.side===Le?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Fn,o),l===null)return null;Os.copy(o),Os.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Os);return c<e.near||c>e.far?null:{distance:c,point:Os.clone(),object:i}}function ks(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ds),i.getVertexPosition(l,Us),i.getVertexPosition(c,Ns);let d=xu(i,t,e,n,Ds,Us,Ns,Kl);if(d){let h=new L;Ln.getBarycoord(Kl,Ds,Us,Ns,h),s&&(d.uv=Ln.getInterpolatedAttribute(s,o,l,c,h,new ct)),r&&(d.uv1=Ln.getInterpolatedAttribute(r,o,l,c,h,new ct)),a&&(d.normal=Ln.getInterpolatedAttribute(a,o,l,c,h,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new L,materialIndex:0};Ln.getNormal(Ds,Us,Ns,p.normal),d.face=p,d.barycoord=h}return d}var de=class i extends ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],h=[],p=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(h,2));function _(g,f,u,x,S,y,C,T,A,R,w){let M=y/A,P=C/R,H=y/2,z=C/2,W=T/2,J=A+1,X=R+1,tt=0,G=0,st=new L;for(let dt=0;dt<X;dt++){let St=dt*P-z;for(let Ot=0;Ot<J;Ot++){let jt=Ot*M-H;st[g]=jt*x,st[f]=St*S,st[u]=W,c.push(st.x,st.y,st.z),st[g]=0,st[f]=0,st[u]=T>0?1:-1,d.push(st.x,st.y,st.z),h.push(Ot/A),h.push(1-dt/R),tt+=1}}for(let dt=0;dt<R;dt++)for(let St=0;St<A;St++){let Ot=p+St+J*dt,jt=p+St+J*(dt+1),Y=p+(St+1)+J*(dt+1),et=p+(St+1)+J*dt;l.push(Ot,jt,et),l.push(jt,Y,et),G+=6}o.addGroup(m,G,w),m+=G,p+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Oi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ce(i){let t={};for(let e=0;e<i.length;e++){let n=Oi(i[e]);for(let s in n)t[s]=n[s]}return t}function yu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var vu={clone:Oi,merge:Ce},Mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Sn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mu,this.fragmentShader=Su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=yu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},hr=class extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},In=new L,jl=new ct,Ql=new ct,we=class extends hr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return co*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,jl,Ql),e.subVectors(Ql,jl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},yi=-90,vi=1,po=class extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new we(yi,vi,t,e);s.layers=this.layers,this.add(s);let r=new we(yi,vi,t,e);r.layers=this.layers,this.add(r);let a=new we(yi,vi,t,e);a.layers=this.layers,this.add(a);let o=new we(yi,vi,t,e);o.layers=this.layers,this.add(o);let l=new we(yi,vi,t,e);l.layers=this.layers,this.add(l);let c=new we(yi,vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(h,p,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ur=class extends Oe{constructor(t,e,n,s,r,a,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},mo=class extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ur(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new de(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Dn});r.uniforms.tEquirect.value=e;let a=new ut(s,r),o=e.minFilter;return e.minFilter===ti&&(e.minFilter=en),new po(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ha=new L,bu=new L,wu=new Lt,gn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ha.subVectors(n,e).cross(bu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ha),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wu.getNormalMatrix(t),s=this.coplanarPoint(ha).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yn=new Fi,Bs=new L,as=class{constructor(t=new gn,e=new gn,n=new gn,s=new gn,r=new gn,a=new gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],h=s[6],p=s[7],m=s[8],_=s[9],g=s[10],f=s[11],u=s[12],x=s[13],S=s[14],y=s[15];if(n[0].setComponents(l-r,p-c,f-m,y-u).normalize(),n[1].setComponents(l+r,p+c,f+m,y+u).normalize(),n[2].setComponents(l+a,p+d,f+_,y+x).normalize(),n[3].setComponents(l-a,p-d,f-_,y-x).normalize(),n[4].setComponents(l-o,p-h,f-g,y-S).normalize(),e===xn)n[5].setComponents(l+o,p+h,f+g,y+S).normalize();else if(e===nr)n[5].setComponents(o,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Bs.x=s.normal.x>0?t.max.x:t.min.x,Bs.y=s.normal.y>0?t.max.y:t.min.y,Bs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Eu(i){let t=new WeakMap;function e(o,l){let c=o.array,d=o.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((m,_)=>m.start-_.start);let p=0;for(let m=1;m<h.length;m++){let _=h[p],g=h[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++p,h[p]=g)}h.length=p+1;for(let m=0,_=h.length;m<_;m++){let g=h[m];i.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ii=class i extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,h=t/o,p=e/l,m=[],_=[],g=[],f=[];for(let u=0;u<d;u++){let x=u*p-a;for(let S=0;S<c;S++){let y=S*h-r;_.push(y,-x,0),g.push(0,0,1),f.push(S/o),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<o;x++){let S=x+c*u,y=x+c*(u+1),C=x+1+c*(u+1),T=x+1+c*u;m.push(S,y,T),m.push(y,C,T)}this.setIndex(m),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(g,3)),this.setAttribute("uv",new Qt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Tu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Au=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ku=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ju=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ku=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",id=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ad=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_d=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Td=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Id=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$d=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ff=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ef=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Af=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Df=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Uf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$f=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,np=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:Tu,alphahash_pars_fragment:Au,alphamap_fragment:Cu,alphamap_pars_fragment:Ru,alphatest_fragment:Iu,alphatest_pars_fragment:Pu,aomap_fragment:Lu,aomap_pars_fragment:Du,batching_pars_vertex:Uu,batching_vertex:Nu,begin_vertex:Fu,beginnormal_vertex:Ou,bsdfs:ku,iridescence_fragment:Bu,bumpmap_pars_fragment:zu,clipping_planes_fragment:Hu,clipping_planes_pars_fragment:Vu,clipping_planes_pars_vertex:Gu,clipping_planes_vertex:Wu,color_fragment:Xu,color_pars_fragment:qu,color_pars_vertex:Yu,color_vertex:$u,common:Zu,cube_uv_reflection_fragment:Ju,defaultnormal_vertex:Ku,displacementmap_pars_vertex:ju,displacementmap_vertex:Qu,emissivemap_fragment:td,emissivemap_pars_fragment:ed,colorspace_fragment:nd,colorspace_pars_fragment:id,envmap_fragment:sd,envmap_common_pars_fragment:rd,envmap_pars_fragment:ad,envmap_pars_vertex:od,envmap_physical_pars_fragment:xd,envmap_vertex:ld,fog_vertex:cd,fog_pars_vertex:hd,fog_fragment:ud,fog_pars_fragment:dd,gradientmap_pars_fragment:fd,lightmap_pars_fragment:pd,lights_lambert_fragment:md,lights_lambert_pars_fragment:gd,lights_pars_begin:_d,lights_toon_fragment:yd,lights_toon_pars_fragment:vd,lights_phong_fragment:Md,lights_phong_pars_fragment:Sd,lights_physical_fragment:bd,lights_physical_pars_fragment:wd,lights_fragment_begin:Ed,lights_fragment_maps:Td,lights_fragment_end:Ad,logdepthbuf_fragment:Cd,logdepthbuf_pars_fragment:Rd,logdepthbuf_pars_vertex:Id,logdepthbuf_vertex:Pd,map_fragment:Ld,map_pars_fragment:Dd,map_particle_fragment:Ud,map_particle_pars_fragment:Nd,metalnessmap_fragment:Fd,metalnessmap_pars_fragment:Od,morphinstance_vertex:kd,morphcolor_vertex:Bd,morphnormal_vertex:zd,morphtarget_pars_vertex:Hd,morphtarget_vertex:Vd,normal_fragment_begin:Gd,normal_fragment_maps:Wd,normal_pars_fragment:Xd,normal_pars_vertex:qd,normal_vertex:Yd,normalmap_pars_fragment:$d,clearcoat_normal_fragment_begin:Zd,clearcoat_normal_fragment_maps:Jd,clearcoat_pars_fragment:Kd,iridescence_pars_fragment:jd,opaque_fragment:Qd,packing:tf,premultiplied_alpha_fragment:ef,project_vertex:nf,dithering_fragment:sf,dithering_pars_fragment:rf,roughnessmap_fragment:af,roughnessmap_pars_fragment:of,shadowmap_pars_fragment:lf,shadowmap_pars_vertex:cf,shadowmap_vertex:hf,shadowmask_pars_fragment:uf,skinbase_vertex:df,skinning_pars_vertex:ff,skinning_vertex:pf,skinnormal_vertex:mf,specularmap_fragment:gf,specularmap_pars_fragment:_f,tonemapping_fragment:xf,tonemapping_pars_fragment:yf,transmission_fragment:vf,transmission_pars_fragment:Mf,uv_pars_fragment:Sf,uv_pars_vertex:bf,uv_vertex:wf,worldpos_vertex:Ef,background_vert:Tf,background_frag:Af,backgroundCube_vert:Cf,backgroundCube_frag:Rf,cube_vert:If,cube_frag:Pf,depth_vert:Lf,depth_frag:Df,distanceRGBA_vert:Uf,distanceRGBA_frag:Nf,equirect_vert:Ff,equirect_frag:Of,linedashed_vert:kf,linedashed_frag:Bf,meshbasic_vert:zf,meshbasic_frag:Hf,meshlambert_vert:Vf,meshlambert_frag:Gf,meshmatcap_vert:Wf,meshmatcap_frag:Xf,meshnormal_vert:qf,meshnormal_frag:Yf,meshphong_vert:$f,meshphong_frag:Zf,meshphysical_vert:Jf,meshphysical_frag:Kf,meshtoon_vert:jf,meshtoon_frag:Qf,points_vert:tp,points_frag:ep,shadow_vert:np,shadow_frag:ip,sprite_vert:sp,sprite_frag:rp},nt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Qe={basic:{uniforms:Ce([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ce([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ce([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ce([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ce([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ce([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ce([nt.points,nt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ce([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ce([nt.common,nt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ce([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ce([nt.sprite,nt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ce([nt.common,nt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ce([nt.lights,nt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Qe.physical={uniforms:Ce([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var zs={r:0,b:0,g:0},$n=new nn,ap=new ae;function op(i,t,e,n,s,r,a){let o=new Nt(0),l=r===!0?0:1,c,d,h=null,p=0,m=null;function _(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?e:t).get(S)),S}function g(x){let S=!1,y=_(x);y===null?u(o,l):y&&y.isColor&&(u(y,1),S=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(x,S){let y=_(S);y&&(y.isCubeTexture||y.mapping===Ar)?(d===void 0&&(d=new ut(new de(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Oi(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),$n.copy(S.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ap.makeRotationFromEuler($n)),d.material.toneMapped=Xt.getTransfer(y.colorSpace)!==Jt,(h!==y||p!==y.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,h=y,p=y.version,m=i.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ut(new ii(2,2),new sn({name:"BackgroundMaterial",uniforms:Oi(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(y.colorSpace)!==Jt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,m=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,S){x.getRGB(zs,Zc(i)),n.buffers.color.setClear(zs.r,zs.g,zs.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),l=S,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(o,l)},render:g,addToRenderList:f}}function lp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(M,P,H,z,W){let J=!1,X=h(z,H,P);r!==X&&(r=X,c(r.object)),J=m(M,z,H,W),J&&_(M,z,H,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(M,P,H,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function h(M,P,H){let z=H.wireframe===!0,W=n[M.id];W===void 0&&(W={},n[M.id]=W);let J=W[P.id];J===void 0&&(J={},W[P.id]=J);let X=J[z];return X===void 0&&(X=p(l()),J[z]=X),X}function p(M){let P=[],H=[],z=[];for(let W=0;W<e;W++)P[W]=0,H[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:z,object:M,attributes:{},index:null}}function m(M,P,H,z){let W=r.attributes,J=P.attributes,X=0,tt=H.getAttributes();for(let G in tt)if(tt[G].location>=0){let dt=W[G],St=J[G];if(St===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(St=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(St=M.instanceColor)),dt===void 0||dt.attribute!==St||St&&dt.data!==St.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function _(M,P,H,z){let W={},J=P.attributes,X=0,tt=H.getAttributes();for(let G in tt)if(tt[G].location>=0){let dt=J[G];dt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));let St={};St.attribute=dt,dt&&dt.data&&(St.data=dt.data),W[G]=St,X++}r.attributes=W,r.attributesNum=X,r.index=z}function g(){let M=r.newAttributes;for(let P=0,H=M.length;P<H;P++)M[P]=0}function f(M){u(M,0)}function u(M,P){let H=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;H[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),W[M]!==P&&(i.vertexAttribDivisor(M,P),W[M]=P)}function x(){let M=r.newAttributes,P=r.enabledAttributes;for(let H=0,z=P.length;H<z;H++)P[H]!==M[H]&&(i.disableVertexAttribArray(H),P[H]=0)}function S(M,P,H,z,W,J,X){X===!0?i.vertexAttribIPointer(M,P,H,W,J):i.vertexAttribPointer(M,P,H,z,W,J)}function y(M,P,H,z){g();let W=z.attributes,J=H.getAttributes(),X=P.defaultAttributeValues;for(let tt in J){let G=J[tt];if(G.location>=0){let st=W[tt];if(st===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){let dt=st.normalized,St=st.itemSize,Ot=t.get(st);if(Ot===void 0)continue;let jt=Ot.buffer,Y=Ot.type,et=Ot.bytesPerElement,yt=Y===i.INT||Y===i.UNSIGNED_INT||st.gpuType===Jo;if(st.isInterleavedBufferAttribute){let rt=st.data,Tt=rt.stride,Rt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let kt=0;kt<G.locationSize;kt++)u(G.location+kt,rt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let kt=0;kt<G.locationSize;kt++)f(G.location+kt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let kt=0;kt<G.locationSize;kt++)S(G.location+kt,St/G.locationSize,Y,dt,Tt*et,(Rt+St/G.locationSize*kt)*et,yt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)u(G.location+rt,st.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<G.locationSize;rt++)f(G.location+rt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let rt=0;rt<G.locationSize;rt++)S(G.location+rt,St/G.locationSize,Y,dt,St*et,St/G.locationSize*rt*et,yt)}}else if(X!==void 0){let dt=X[tt];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(G.location,dt);break;case 3:i.vertexAttrib3fv(G.location,dt);break;case 4:i.vertexAttrib4fv(G.location,dt);break;default:i.vertexAttrib1fv(G.location,dt)}}}}x()}function C(){R();for(let M in n){let P=n[M];for(let H in P){let z=P[H];for(let W in z)d(z[W].object),delete z[W];delete P[H]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let H in P){let z=P[H];for(let W in z)d(z[W].object),delete z[W];delete P[H]}delete n[M.id]}function A(M){for(let P in n){let H=n[P];if(H[M.id]===void 0)continue;let z=H[M.id];for(let W in z)d(z[W].object),delete z[W];delete H[M.id]}}function R(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:f,disableUnusedAttributes:x}}function cp(i,t,e){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),e.update(d,n,h))}function o(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=d[_];e.update(m,n,1)}function l(c,d,h,p){if(h===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],d[_],p[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,p,0,h);let _=0;for(let g=0;g<h;g++)_+=d[g]*p[g];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function hp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Ze&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let R=A===gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==_n&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let h=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:f,maxAttributes:u,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function up(i){let t=this,e=null,n=0,s=!1,r=!1,a=new gn,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let m=h.length!==0||p||n!==0||s;return s=p,n=h.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){e=d(h,p,0)},this.setState=function(h,p,m){let _=h.clippingPlanes,g=h.clipIntersection,f=h.clipShadows,u=i.get(h);if(!s||_===null||_.length===0||r&&!f)r?d(null):c();else{let x=r?0:n,S=x*4,y=u.clippingState||null;l.value=y,y=d(_,p,S,m);for(let C=0;C!==S;++C)y[C]=e[C];u.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,p,m,_){let g=h!==null?h.length:0,f=null;if(g!==0){if(f=l.value,_!==!0||f===null){let u=m+g*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(f===null||f.length<u)&&(f=new Float32Array(u));for(let S=0,y=m;S!==g;++S,y+=4)a.copy(h[S]).applyMatrix4(x,o),a.normal.toArray(f,y),f[y+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function dp(i){let t=new WeakMap;function e(a,o){return o===Pa?a.mapping=Li:o===La&&(a.mapping=Di),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Pa||o===La)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new mo(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var dr=class extends hr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ti=4,tc=[.125,.215,.35,.446,.526,.582],jn=20,ua=new dr,ec=new Nt,da=null,fa=0,pa=0,ma=!1,Jn=(1+Math.sqrt(5))/2,Mi=1/Jn,nc=[new L(-Jn,Mi,0),new L(Jn,Mi,0),new L(-Mi,0,Jn),new L(Mi,0,Jn),new L(0,Jn,-Mi),new L(0,Jn,Mi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],fr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){da=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(da,fa,pa),this._renderer.xr.enabled=ma,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),da=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:gs,format:Ze,colorSpace:zi,depthBuffer:!1},s=ic(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ic(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fp(r)),this._blurMaterial=pp(r,t,e)}return s}_compileMaterial(t){let e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,ua)}_sceneToCubeUV(t,e,n,s){let o=new we(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(ec),d.toneMapping=Un,d.autoClear=!1;let m=new Ee({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),_=new ut(new de,m),g=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,g=!0):(m.color.copy(ec),g=!0);for(let u=0;u<6;u++){let x=u%3;x===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):x===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let S=this._cubeSize;Hs(s,x*S,u>2?S:0,S,S),d.setRenderTarget(s),g&&d.render(_,o),d.render(t,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=h,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Li||t.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ua)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nc[(s-r-1)%nc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,h=new ut(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*jn-1),g=r/_,f=isFinite(r)?1+Math.floor(d*g):jn;f>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${jn}`);let u=[],x=0;for(let A=0;A<jn;++A){let R=A/g,w=Math.exp(-R*R/2);u.push(w),A===0?x+=w:A<f&&(x+=2*w)}for(let A=0;A<u.length;A++)u[A]=u[A]/x;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:S}=this;p.dTheta.value=_,p.mipInt.value=S-n;let y=this._sizeLods[s],C=3*y*(s>S-Ti?s-S+Ti:0),T=4*(this._cubeSize-y);Hs(e,C,T,3*y,2*y),l.setRenderTarget(e),l.render(h,ua)}};function fp(i){let t=[],e=[],n=[],s=i,r=i-Ti+1+tc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ti?l=tc[a-i+Ti-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,g=3,f=2,u=1,x=new Float32Array(g*_*m),S=new Float32Array(f*_*m),y=new Float32Array(u*_*m);for(let T=0;T<m;T++){let A=T%3*2/3-1,R=T>2?0:-1,w=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];x.set(w,g*_*T),S.set(p,f*_*T);let M=[T,T,T,T,T,T];y.set(M,u*_*T)}let C=new ye;C.setAttribute("position",new Re(x,g)),C.setAttribute("uv",new Re(S,f)),C.setAttribute("faceIndex",new Re(y,u)),t.push(C),s>Ti&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ic(i,t,e){let n=new Mn(i,t,e);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function pp(i,t,e){let n=new Float32Array(jn),s=new L(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function sc(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function rc(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Pa||l===La,d=l===Li||l===Di;if(c||d){let h=t.get(o),p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new fr(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{let m=o.image;return c&&m&&m.height>0||d&&m&&s(m)?(e===null&&(e=new fr(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function gp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _p(i,t,e,n){let s={},r=new WeakMap;function a(h){let p=h.target;p.index!==null&&t.remove(p.index);for(let _ in p.attributes)t.remove(p.attributes[_]);for(let _ in p.morphAttributes){let g=p.morphAttributes[_];for(let f=0,u=g.length;f<u;f++)t.remove(g[f])}p.removeEventListener("dispose",a),delete s[p.id];let m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(h,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(h){let p=h.attributes;for(let _ in p)t.update(p[_],i.ARRAY_BUFFER);let m=h.morphAttributes;for(let _ in m){let g=m[_];for(let f=0,u=g.length;f<u;f++)t.update(g[f],i.ARRAY_BUFFER)}}function c(h){let p=[],m=h.index,_=h.attributes.position,g=0;if(m!==null){let x=m.array;g=m.version;for(let S=0,y=x.length;S<y;S+=3){let C=x[S+0],T=x[S+1],A=x[S+2];p.push(C,T,T,A,A,C)}}else if(_!==void 0){let x=_.array;g=_.version;for(let S=0,y=x.length/3-1;S<y;S+=3){let C=S+0,T=S+1,A=S+2;p.push(C,T,T,A,A,C)}}else return;let f=new(Yc(p)?cr:lr)(p,1);f.version=g;let u=r.get(h);u&&t.remove(u),r.set(h,f)}function d(h){let p=r.get(h);if(p){let m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function xp(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*a),e.update(m,n,1)}function c(p,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,p*a,_),e.update(m,n,_))}function d(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,_);let f=0;for(let u=0;u<_;u++)f+=m[u];e.update(f,n,1)}function h(p,m,_,g){if(_===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<p.length;u++)c(p[u]/a,m[u],g[u]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,g,0,_);let u=0;for(let x=0;x<_;x++)u+=m[x]*g[x];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function yp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vp(i,t,e){let n=new WeakMap,s=new ce;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0,p=n.get(o);if(p===void 0||p.count!==h){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};p!==void 0&&p.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],S=0;m===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let y=o.attributes.position.count*S,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*C*4*h),A=new rr(T,y,C,h);A.type=_n,A.needsUpdate=!0;let R=S*4;for(let M=0;M<h;M++){let P=f[M],H=u[M],z=x[M],W=y*C*4*M;for(let J=0;J<P.count;J++){let X=J*R;m===!0&&(s.fromBufferAttribute(P,J),T[W+X+0]=s.x,T[W+X+1]=s.y,T[W+X+2]=s.z,T[W+X+3]=0),_===!0&&(s.fromBufferAttribute(H,J),T[W+X+4]=s.x,T[W+X+5]=s.y,T[W+X+6]=s.z,T[W+X+7]=0),g===!0&&(s.fromBufferAttribute(z,J),T[W+X+8]=s.x,T[W+X+9]=s.y,T[W+X+10]=s.z,T[W+X+11]=z.itemSize===4?s.w:1)}}p={count:h,texture:A,size:new ct(y,C)},n.set(o,p),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];let _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Mp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var pr=class extends Oe{constructor(t,e,n,s,r,a,o,l,c,d=Ci){if(d!==Ci&&d!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ci&&(n=ei),n===void 0&&d===Ni&&(n=Ui),super(null,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Kc=new Oe,ac=new pr(1,1),jc=new rr,Qc=new fo,th=new ur,oc=[],lc=[],cc=new Float32Array(16),hc=new Float32Array(9),uc=new Float32Array(4);function Hi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=oc[s];if(r===void 0&&(r=new Float32Array(s),oc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rr(i,t){let e=lc[t];e===void 0&&(e=new Int32Array(t),lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Sp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),pe(e,t)}}function wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),pe(e,t)}}function Ep(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),pe(e,t)}}function Tp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;uc.set(n),i.uniformMatrix2fv(this.addr,!1,uc),pe(e,n)}}function Ap(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;hc.set(n),i.uniformMatrix3fv(this.addr,!1,hc),pe(e,n)}}function Cp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;cc.set(n),i.uniformMatrix4fv(this.addr,!1,cc),pe(e,n)}}function Rp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),pe(e,t)}}function Pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),pe(e,t)}}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),pe(e,t)}}function Dp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),pe(e,t)}}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),pe(e,t)}}function Fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),pe(e,t)}}function Op(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ac.compareFunction=qc,r=ac):r=Kc,e.setTexture2D(t||r,s)}function kp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qc,s)}function Bp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||th,s)}function zp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jc,s)}function Hp(i){switch(i){case 5126:return Sp;case 35664:return bp;case 35665:return wp;case 35666:return Ep;case 35674:return Tp;case 35675:return Ap;case 35676:return Cp;case 5124:case 35670:return Rp;case 35667:case 35671:return Ip;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Dp;case 36294:return Up;case 36295:return Np;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return zp}}function Vp(i,t){i.uniform1fv(this.addr,t)}function Gp(i,t){let e=Hi(t,this.size,2);i.uniform2fv(this.addr,e)}function Wp(i,t){let e=Hi(t,this.size,3);i.uniform3fv(this.addr,e)}function Xp(i,t){let e=Hi(t,this.size,4);i.uniform4fv(this.addr,e)}function qp(i,t){let e=Hi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Yp(i,t){let e=Hi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $p(i,t){let e=Hi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zp(i,t){i.uniform1iv(this.addr,t)}function Jp(i,t){i.uniform2iv(this.addr,t)}function Kp(i,t){i.uniform3iv(this.addr,t)}function jp(i,t){i.uniform4iv(this.addr,t)}function Qp(i,t){i.uniform1uiv(this.addr,t)}function tm(i,t){i.uniform2uiv(this.addr,t)}function em(i,t){i.uniform3uiv(this.addr,t)}function nm(i,t){i.uniform4uiv(this.addr,t)}function im(i,t,e){let n=this.cache,s=t.length,r=Rr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Kc,r[a])}function sm(i,t,e){let n=this.cache,s=t.length,r=Rr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qc,r[a])}function rm(i,t,e){let n=this.cache,s=t.length,r=Rr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||th,r[a])}function am(i,t,e){let n=this.cache,s=t.length,r=Rr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||jc,r[a])}function om(i){switch(i){case 5126:return Vp;case 35664:return Gp;case 35665:return Wp;case 35666:return Xp;case 35674:return qp;case 35675:return Yp;case 35676:return $p;case 5124:case 35670:return Zp;case 35667:case 35671:return Jp;case 35668:case 35672:return Kp;case 35669:case 35673:return jp;case 5125:return Qp;case 36294:return tm;case 36295:return em;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return am}}var go=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hp(e.type)}},_o=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=om(e.type)}},xo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ga=/(\w+)(\])?(\[|\.)?/g;function dc(i,t){i.seq.push(t),i.map[t.id]=t}function lm(i,t,e){let n=i.name,s=n.length;for(ga.lastIndex=0;;){let r=ga.exec(n),a=ga.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){dc(e,c===void 0?new go(o,i,t):new _o(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new xo(o),dc(e,h)),e=h}}}var Ii=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);lm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function fc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var cm=37297,hm=0;function um(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var pc=new Lt;function dm(i){Xt._getMatrix(pc,Xt.workingColorSpace,i);let t=`mat3( ${pc.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case Cr:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function mc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+um(i.getShaderSource(t),a)}else return s}function fm(i,t){let e=dm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function pm(i,t){let e;switch(t){case kh:e="Linear";break;case Bh:e="Reinhard";break;case zh:e="Cineon";break;case Hh:e="ACESFilmic";break;case Gh:e="AgX";break;case Wh:e="Neutral";break;case Vh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Vs=new L;function mm(){Xt.getLuminanceCoefficients(Vs);let i=Vs.x.toFixed(4),t=Vs.y.toFixed(4),e=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function _m(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function es(i){return i!==""}function gc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function yo(i){return i.replace(ym,Mm)}var vm=new Map;function Mm(i,t){let e=Ut[t];if(e===void 0){let n=vm.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yo(e)}var Sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(i){return i.replace(Sm,bm)}function bm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===_h?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(t="SHADOWMAP_TYPE_VSM"),t}function Em(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case Di:t="ENVMAP_TYPE_CUBE";break;case Ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tm(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Di&&(t="ENVMAP_MODE_REFRACTION"),t}function Am(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dc:t="ENVMAP_BLENDING_MULTIPLY";break;case Fh:t="ENVMAP_BLENDING_MIX";break;case Oh:t="ENVMAP_BLENDING_ADD";break}return t}function Cm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Rm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=wm(e),c=Em(e),d=Tm(e),h=Am(e),p=Cm(e),m=gm(e),_=_m(r),g=s.createProgram(),f,u,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(es).join(`
`),f.length>0&&(f+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(es).join(`
`),u.length>0&&(u+=`
`)):(f=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),u=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Un?pm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,fm("linearToOutputTexel",e.outputColorSpace),mm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),a=yo(a),a=gc(a,e),a=_c(a,e),o=yo(o),o=gc(o,e),o=_c(o,e),a=xc(a),o=xc(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,u=["#define varying in",e.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let S=x+f+a,y=x+u+o,C=fc(s,s.VERTEX_SHADER,S),T=fc(s,s.FRAGMENT_SHADER,y);s.attachShader(g,C),s.attachShader(g,T),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(P){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(g).trim(),z=s.getShaderInfoLog(C).trim(),W=s.getShaderInfoLog(T).trim(),J=!0,X=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,C,T);else{let tt=mc(s,C,"vertex"),G=mc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+tt+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||W==="")&&(X=!1);X&&(P.diagnostics={runnable:J,programLog:H,vertexShader:{log:z,prefix:f},fragmentShader:{log:W,prefix:u}})}s.deleteShader(C),s.deleteShader(T),R=new Ii(s,g),w=xm(s,g)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,cm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=T,this}var Im=0,vo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Mo(t),e.set(t,n)),n}},Mo=class{constructor(t){this.id=Im++,this.code=t,this.usedTimes=0}};function Pm(i,t,e,n,s,r,a){let o=new or,l=new vo,c=new Set,d=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function f(w,M,P,H,z){let W=H.fog,J=z.geometry,X=w.isMeshStandardMaterial?H.environment:null,tt=(w.isMeshStandardMaterial?e:t).get(w.envMap||X),G=tt&&tt.mapping===Ar?tt.image.height:null,st=_[w.type];w.precision!==null&&(m=s.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));let dt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,St=dt!==void 0?dt.length:0,Ot=0;J.morphAttributes.position!==void 0&&(Ot=1),J.morphAttributes.normal!==void 0&&(Ot=2),J.morphAttributes.color!==void 0&&(Ot=3);let jt,Y,et,yt;if(st){let Zt=Qe[st];jt=Zt.vertexShader,Y=Zt.fragmentShader}else jt=w.vertexShader,Y=w.fragmentShader,l.update(w),et=l.getVertexShaderID(w),yt=l.getFragmentShaderID(w);let rt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Rt=z.isInstancedMesh===!0,kt=z.isBatchedMesh===!0,oe=!!w.map,Gt=!!w.matcap,he=!!tt,F=!!w.aoMap,ke=!!w.lightMap,zt=!!w.bumpMap,Ht=!!w.normalMap,wt=!!w.displacementMap,ne=!!w.emissiveMap,bt=!!w.metalnessMap,E=!!w.roughnessMap,v=w.anisotropy>0,O=w.clearcoat>0,$=w.dispersion>0,K=w.iridescence>0,q=w.sheen>0,vt=w.transmission>0,at=v&&!!w.anisotropyMap,ft=O&&!!w.clearcoatMap,Wt=O&&!!w.clearcoatNormalMap,j=O&&!!w.clearcoatRoughnessMap,pt=K&&!!w.iridescenceMap,Et=K&&!!w.iridescenceThicknessMap,At=q&&!!w.sheenColorMap,mt=q&&!!w.sheenRoughnessMap,Vt=!!w.specularMap,Dt=!!w.specularColorMap,te=!!w.specularIntensityMap,D=vt&&!!w.transmissionMap,it=vt&&!!w.thicknessMap,V=!!w.gradientMap,Z=!!w.alphaMap,ht=w.alphaTest>0,ot=!!w.alphaHash,It=!!w.extensions,le=Un;w.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(le=i.toneMapping);let Me={shaderID:st,shaderType:w.type,shaderName:w.name,vertexShader:jt,fragmentShader:Y,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:yt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:kt,batchingColor:kt&&z._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&z.instanceColor!==null,instancingMorph:Rt&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:zi,alphaToCoverage:!!w.alphaToCoverage,map:oe,matcap:Gt,envMap:he,envMapMode:he&&tt.mapping,envMapCubeUVHeight:G,aoMap:F,lightMap:ke,bumpMap:zt,normalMap:Ht,displacementMap:p&&wt,emissiveMap:ne,normalMapObjectSpace:Ht&&w.normalMapType===$h,normalMapTangentSpace:Ht&&w.normalMapType===Xc,metalnessMap:bt,roughnessMap:E,anisotropy:v,anisotropyMap:at,clearcoat:O,clearcoatMap:ft,clearcoatNormalMap:Wt,clearcoatRoughnessMap:j,dispersion:$,iridescence:K,iridescenceMap:pt,iridescenceThicknessMap:Et,sheen:q,sheenColorMap:At,sheenRoughnessMap:mt,specularMap:Vt,specularColorMap:Dt,specularIntensityMap:te,transmission:vt,transmissionMap:D,thicknessMap:it,gradientMap:V,opaque:w.transparent===!1&&w.blending===Ai&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:ht,alphaHash:ot,combine:w.combine,mapUv:oe&&g(w.map.channel),aoMapUv:F&&g(w.aoMap.channel),lightMapUv:ke&&g(w.lightMap.channel),bumpMapUv:zt&&g(w.bumpMap.channel),normalMapUv:Ht&&g(w.normalMap.channel),displacementMapUv:wt&&g(w.displacementMap.channel),emissiveMapUv:ne&&g(w.emissiveMap.channel),metalnessMapUv:bt&&g(w.metalnessMap.channel),roughnessMapUv:E&&g(w.roughnessMap.channel),anisotropyMapUv:at&&g(w.anisotropyMap.channel),clearcoatMapUv:ft&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:At&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(w.sheenRoughnessMap.channel),specularMapUv:Vt&&g(w.specularMap.channel),specularColorMapUv:Dt&&g(w.specularColorMap.channel),specularIntensityMapUv:te&&g(w.specularIntensityMap.channel),transmissionMapUv:D&&g(w.transmissionMap.channel),thicknessMapUv:it&&g(w.thicknessMap.channel),alphaMapUv:Z&&g(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ht||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!J.attributes.uv&&(oe||Z),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Tt,skinning:z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:oe&&w.map.isVideoTexture===!0&&Xt.getTransfer(w.map.colorSpace)===Jt,decodeVideoTextureEmissive:ne&&w.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(w.emissiveMap.colorSpace)===Jt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Fe,flipSided:w.side===Le,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:It&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&w.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function u(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(x(M,w),S(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function x(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function y(w){let M=_[w.type],P;if(M){let H=Qe[M];P=vu.clone(H.uniforms)}else P=w.uniforms;return P}function C(w,M){let P;for(let H=0,z=d.length;H<z;H++){let W=d[H];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new Rm(i,M,w,r),d.push(P)),P}function T(w){if(--w.usedTimes===0){let M=d.indexOf(w);d[M]=d[d.length-1],d.pop(),w.destroy()}}function A(w){l.remove(w)}function R(){l.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:d,dispose:R}}function Lm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Dm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,p,m,_,g,f){let u=i[t];return u===void 0?(u={id:h.id,object:h,geometry:p,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:f},i[t]=u):(u.id=h.id,u.object=h,u.geometry=p,u.material=m,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=g,u.group=f),t++,u}function o(h,p,m,_,g,f){let u=a(h,p,m,_,g,f);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(h,p,m,_,g,f){let u=a(h,p,m,_,g,f);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(h,p){e.length>1&&e.sort(h||Dm),n.length>1&&n.sort(p||vc),s.length>1&&s.sort(p||vc)}function d(){for(let h=t,p=i.length;h<p;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function Um(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Mc,i.set(n,[a])):s>=r.length?(a=new Mc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Nm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Nt};break;case"SpotLight":e={position:new L,direction:new L,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Fm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Om=0;function km(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bm(i){let t=new Nm,e=Fm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new ae,a=new ae;function o(c){let d=0,h=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,_=0,g=0,f=0,u=0,x=0,S=0,y=0,C=0,T=0,A=0;c.sort(km);for(let w=0,M=c.length;w<M;w++){let P=c[w],H=P.color,z=P.intensity,W=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=H.r*z,h+=H.g*z,p+=H.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],z);A++}else if(P.isDirectionalLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let tt=P.shadow,G=e.get(P);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=P.shadow.matrix,x++}n.directional[m]=X,m++}else if(P.isSpotLight){let X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(H).multiplyScalar(z),X.distance=W,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[g]=X;let tt=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,tt.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[g]=tt.matrix,P.castShadow){let G=e.get(P);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=J,y++}g++}else if(P.isRectAreaLight){let X=t.get(P);X.color.copy(H).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[f]=X,f++}else if(P.isPointLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let tt=P.shadow,G=e.get(P);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=P.shadow.matrix,S++}n.point[_]=X,_++}else if(P.isHemisphereLight){let X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[u]=X,u++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=p;let R=n.hash;(R.directionalLength!==m||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==f||R.hemiLength!==u||R.numDirectionalShadows!==x||R.numPointShadows!==S||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=f,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,R.directionalLength=m,R.pointLength=_,R.spotLength=g,R.rectAreaLength=f,R.hemiLength=u,R.numDirectionalShadows=x,R.numPointShadows=S,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=A,n.version=Om++)}function l(c,d){let h=0,p=0,m=0,_=0,g=0,f=d.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){let S=c[u];if(S.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),h++}else if(S.isSpotLight){let y=n.spot[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),m++}else if(S.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(f),a.identity(),r.copy(S.matrixWorld),r.premultiply(f),a.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:n}}function Sc(i){let t=new Bm(i),e=[],n=[];function s(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function zm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Sc(i),t.set(s,[o])):r>=a.length?(o=new Sc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var So=class extends Sn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},bo=class extends Sn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gm(i,t,e){let n=new as,s=new ct,r=new ct,a=new ce,o=new So({depthPacking:Yh}),l=new bo,c={},d=e.maxTextureSize,h={[Fn]:Le,[Le]:Fn,[Fe]:Fe},p=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Hm,fragmentShader:Vm}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let _=new ye;_.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ut(_,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let u=this.type;this.render=function(T,A,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;let w=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Dn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let z=u!==mn&&this.type===mn,W=u===mn&&this.type!==mn;for(let J=0,X=T.length;J<X;J++){let tt=T[J],G=tt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let st=G.getFrameExtents();if(s.multiply(st),r.copy(G.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/st.x),s.x=r.x*st.x,G.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/st.y),s.y=r.y*st.y,G.mapSize.y=r.y)),G.map===null||z===!0||W===!0){let St=this.type!==mn?{minFilter:Je,magFilter:Je}:{};G.map!==null&&G.map.dispose(),G.map=new Mn(s.x,s.y,St),G.map.texture.name=tt.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let dt=G.getViewportCount();for(let St=0;St<dt;St++){let Ot=G.getViewport(St);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),H.viewport(a),G.updateMatrices(tt,St),n=G.getFrustum(),y(A,R,G.camera,tt,this.type)}G.isPointLightShadow!==!0&&this.type===mn&&x(G,R),G.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(w,M,P)};function x(T,A){let R=t.update(g);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Mn(s.x,s.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,R,p,g,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,R,m,g,null)}function S(T,A,R,w){let M=null,P=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=M.uuid,z=A.uuid,W=c[H];W===void 0&&(W={},c[H]=W);let J=W[z];J===void 0&&(J=M.clone(),W[z]=J,A.addEventListener("dispose",C)),M=J}if(M.visible=A.visible,M.wireframe=A.wireframe,w===mn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=i.properties.get(M);H.light=R}return M}function y(T,A,R,w,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===mn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let z=t.update(T),W=T.material;if(Array.isArray(W)){let J=z.groups;for(let X=0,tt=J.length;X<tt;X++){let G=J[X],st=W[G.materialIndex];if(st&&st.visible){let dt=S(T,st,w,M);T.onBeforeShadow(i,T,A,R,z,dt,G),i.renderBufferDirect(R,null,z,dt,T,G),T.onAfterShadow(i,T,A,R,z,dt,G)}}}else if(W.visible){let J=S(T,W,w,M);T.onBeforeShadow(i,T,A,R,z,J,null),i.renderBufferDirect(R,null,z,J,T,null),T.onAfterShadow(i,T,A,R,z,J,null)}}let H=T.children;for(let z=0,W=H.length;z<W;z++)y(H[z],A,R,w,M)}function C(T){T.target.removeEventListener("dispose",C);for(let R in c){let w=c[R],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var Wm={[wa]:Ea,[Ta]:Ra,[Aa]:Ia,[Pi]:Ca,[Ea]:wa,[Ra]:Ta,[Ia]:Aa,[Ca]:Pi};function Xm(i,t){function e(){let D=!1,it=new ce,V=null,Z=new ce(0,0,0,0);return{setMask:function(ht){V!==ht&&!D&&(i.colorMask(ht,ht,ht,ht),V=ht)},setLocked:function(ht){D=ht},setClear:function(ht,ot,It,le,Me){Me===!0&&(ht*=le,ot*=le,It*=le),it.set(ht,ot,It,le),Z.equals(it)===!1&&(i.clearColor(ht,ot,It,le),Z.copy(it))},reset:function(){D=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,it=!1,V=null,Z=null,ht=null;return{setReversed:function(ot){if(it!==ot){let It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);let le=ht;ht=null,this.setClear(le)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?rt(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(ot){V!==ot&&!D&&(i.depthMask(ot),V=ot)},setFunc:function(ot){if(it&&(ot=Wm[ot]),Z!==ot){switch(ot){case wa:i.depthFunc(i.NEVER);break;case Ea:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case Pi:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ca:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ot}},setLocked:function(ot){D=ot},setClear:function(ot){ht!==ot&&(it&&(ot=1-ot),i.clearDepth(ot),ht=ot)},reset:function(){D=!1,V=null,Z=null,ht=null,it=!1}}}function s(){let D=!1,it=null,V=null,Z=null,ht=null,ot=null,It=null,le=null,Me=null;return{setTest:function(Zt){D||(Zt?rt(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(Zt){it!==Zt&&!D&&(i.stencilMask(Zt),it=Zt)},setFunc:function(Zt,We,ln){(V!==Zt||Z!==We||ht!==ln)&&(i.stencilFunc(Zt,We,ln),V=Zt,Z=We,ht=ln)},setOp:function(Zt,We,ln){(ot!==Zt||It!==We||le!==ln)&&(i.stencilOp(Zt,We,ln),ot=Zt,It=We,le=ln)},setLocked:function(Zt){D=Zt},setClear:function(Zt){Me!==Zt&&(i.clearStencil(Zt),Me=Zt)},reset:function(){D=!1,it=null,V=null,Z=null,ht=null,ot=null,It=null,le=null,Me=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,d={},h={},p=new WeakMap,m=[],_=null,g=!1,f=null,u=null,x=null,S=null,y=null,C=null,T=null,A=new Nt(0,0,0),R=0,w=!1,M=null,P=null,H=null,z=null,W=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,tt=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=tt>=1):G.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=tt>=2);let st=null,dt={},St=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),jt=new ce().fromArray(St),Y=new ce().fromArray(Ot);function et(D,it,V,Z){let ht=new Uint8Array(4),ot=i.createTexture();i.bindTexture(D,ot),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<V;It++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(it+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ot}let yt={};yt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Pi),zt(!1),Ht(Tl),rt(i.CULL_FACE),F(Dn);function rt(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function Tt(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Rt(D,it){return h[D]!==it?(i.bindFramebuffer(D,it),h[D]=it,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=it),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=it),!0):!1}function kt(D,it){let V=m,Z=!1;if(D){V=p.get(it),V===void 0&&(V=[],p.set(it,V));let ht=D.textures;if(V.length!==ht.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,It=ht.length;ot<It;ot++)V[ot]=i.COLOR_ATTACHMENT0+ot;V.length=ht.length,Z=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Z=!0);Z&&i.drawBuffers(V)}function oe(D){return _!==D?(i.useProgram(D),_=D,!0):!1}let Gt={[Kn]:i.FUNC_ADD,[yh]:i.FUNC_SUBTRACT,[vh]:i.FUNC_REVERSE_SUBTRACT};Gt[Mh]=i.MIN,Gt[Sh]=i.MAX;let he={[bh]:i.ZERO,[wh]:i.ONE,[Eh]:i.SRC_COLOR,[Sa]:i.SRC_ALPHA,[Ph]:i.SRC_ALPHA_SATURATE,[Rh]:i.DST_COLOR,[Ah]:i.DST_ALPHA,[Th]:i.ONE_MINUS_SRC_COLOR,[ba]:i.ONE_MINUS_SRC_ALPHA,[Ih]:i.ONE_MINUS_DST_COLOR,[Ch]:i.ONE_MINUS_DST_ALPHA,[Lh]:i.CONSTANT_COLOR,[Dh]:i.ONE_MINUS_CONSTANT_COLOR,[Uh]:i.CONSTANT_ALPHA,[Nh]:i.ONE_MINUS_CONSTANT_ALPHA};function F(D,it,V,Z,ht,ot,It,le,Me,Zt){if(D===Dn){g===!0&&(Tt(i.BLEND),g=!1);return}if(g===!1&&(rt(i.BLEND),g=!0),D!==xh){if(D!==f||Zt!==w){if((u!==Kn||y!==Kn)&&(i.blendEquation(i.FUNC_ADD),u=Kn,y=Kn),Zt)switch(D){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case On:i.blendFunc(i.ONE,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case On:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,S=null,C=null,T=null,A.set(0,0,0),R=0,f=D,w=Zt}return}ht=ht||it,ot=ot||V,It=It||Z,(it!==u||ht!==y)&&(i.blendEquationSeparate(Gt[it],Gt[ht]),u=it,y=ht),(V!==x||Z!==S||ot!==C||It!==T)&&(i.blendFuncSeparate(he[V],he[Z],he[ot],he[It]),x=V,S=Z,C=ot,T=It),(le.equals(A)===!1||Me!==R)&&(i.blendColor(le.r,le.g,le.b,Me),A.copy(le),R=Me),f=D,w=!1}function ke(D,it){D.side===Fe?Tt(i.CULL_FACE):rt(i.CULL_FACE);let V=D.side===Le;it&&(V=!V),zt(V),D.blending===Ai&&D.transparent===!1?F(Dn):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function Ht(D){D!==mh?(rt(i.CULL_FACE),D!==P&&(D===Tl?i.cullFace(i.BACK):D===gh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),P=D}function wt(D){D!==H&&(X&&i.lineWidth(D),H=D)}function ne(D,it,V){D?(rt(i.POLYGON_OFFSET_FILL),(z!==it||W!==V)&&(i.polygonOffset(it,V),z=it,W=V)):Tt(i.POLYGON_OFFSET_FILL)}function bt(D){D?rt(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+J-1),st!==D&&(i.activeTexture(D),st=D)}function v(D,it,V){V===void 0&&(st===null?V=i.TEXTURE0+J-1:V=st);let Z=dt[V];Z===void 0&&(Z={type:void 0,texture:void 0},dt[V]=Z),(Z.type!==D||Z.texture!==it)&&(st!==V&&(i.activeTexture(V),st=V),i.bindTexture(D,it||yt[D]),Z.type=D,Z.texture=it)}function O(){let D=dt[st];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(D){jt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),jt.copy(D))}function mt(D){Y.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Vt(D,it){let V=c.get(it);V===void 0&&(V=new WeakMap,c.set(it,V));let Z=V.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(it,D.name),V.set(D,Z))}function Dt(D,it){let Z=c.get(it).get(D);l.get(it)!==Z&&(i.uniformBlockBinding(it,Z,D.__bindingPointIndex),l.set(it,Z))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},st=null,dt={},h={},p=new WeakMap,m=[],_=null,g=!1,f=null,u=null,x=null,S=null,y=null,C=null,T=null,A=new Nt(0,0,0),R=0,w=!1,M=null,P=null,H=null,z=null,W=null,jt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Tt,bindFramebuffer:Rt,drawBuffers:kt,useProgram:oe,setBlending:F,setMaterial:ke,setFlipSided:zt,setCullFace:Ht,setLineWidth:wt,setPolygonOffset:ne,setScissorTest:bt,activeTexture:E,bindTexture:v,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:K,texImage2D:pt,texImage3D:Et,updateUBOMapping:Vt,uniformBlockBinding:Dt,texStorage2D:Wt,texStorage3D:j,texSubImage2D:q,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:At,viewport:mt,reset:te}}function bc(i,t,e,n){let s=qm(n);switch(e){case kc:return i*t;case zc:return i*t;case Hc:return i*t*2;case Vc:return i*t/s.components*s.byteLength;case Qo:return i*t/s.components*s.byteLength;case Gc:return i*t*2/s.components*s.byteLength;case tl:return i*t*2/s.components*s.byteLength;case Bc:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case el:return i*t*4/s.components*s.byteLength;case Js:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:case ka:return Math.max(i,16)*Math.max(t,8)/4;case Na:case Oa:return Math.max(i,8)*Math.max(t,8)/2;case Ba:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case to:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case eo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case tr:case no:case io:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wc:case so:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ro:case ao:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qm(i){switch(i){case vn:case Nc:return{byteLength:1,components:1};case rs:case Fc:case gs:return{byteLength:2,components:1};case Ko:case jo:return{byteLength:2,components:4};case ei:case Jo:case _n:return{byteLength:4,components:1};case Oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ym(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,d=new WeakMap,h,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return m?new OffscreenCanvas(E,v):ir("canvas")}function g(E,v,O){let $=1,K=bt(E);if((K.width>O||K.height>O)&&($=O/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let q=Math.floor($*K.width),vt=Math.floor($*K.height);h===void 0&&(h=_(q,vt));let at=v?_(q,vt):h;return at.width=q,at.height=vt,at.getContext("2d").drawImage(E,0,0,q,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+vt+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function f(E){return E.generateMipmaps}function u(E){i.generateMipmap(E)}function x(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,v,O,$,K=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=v;if(v===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),v===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){let vt=K?Cr:Xt.getTransfer($);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=vt===Jt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(E,v){let O;return E?v===null||v===ei||v===Ui?O=i.DEPTH24_STENCIL8:v===_n?O=i.DEPTH32F_STENCIL8:v===rs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ei||v===Ui?O=i.DEPTH_COMPONENT24:v===_n?O=i.DEPTH_COMPONENT32F:v===rs&&(O=i.DEPTH_COMPONENT16),O}function C(E,v){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==Je&&E.minFilter!==en?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function T(E){let v=E.target;v.removeEventListener("dispose",T),R(v),v.isVideoTexture&&d.delete(v)}function A(E){let v=E.target;v.removeEventListener("dispose",A),M(v)}function R(E){let v=n.get(E);if(v.__webglInit===void 0)return;let O=E.source,$=p.get(O);if($){let K=$[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(E),Object.keys($).length===0&&p.delete(O)}n.remove(E)}function w(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let O=E.source,$=p.get(O);delete $[v.__cacheKey],a.memory.textures--}function M(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let K=0;K<v.__webglFramebuffer[$].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[$][K]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=E.textures;for(let $=0,K=O.length;$<K;$++){let q=n.get(O[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(E)}let P=0;function H(){P=0}function z(){let E=P;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),P+=1,E}function W(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function J(E,v){let O=n.get(E);if(E.isVideoTexture&&wt(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){let $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,E,v);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function X(E,v){let O=n.get(E);if(E.version>0&&O.__version!==E.version){Y(O,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function tt(E,v){let O=n.get(E);if(E.version>0&&O.__version!==E.version){Y(O,E,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function G(E,v){let O=n.get(E);if(E.version>0&&O.__version!==E.version){et(O,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let st={[Da]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[Ua]:i.MIRRORED_REPEAT},dt={[Je]:i.NEAREST,[Xh]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Hr]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},St={[Zh]:i.NEVER,[eu]:i.ALWAYS,[Jh]:i.LESS,[qc]:i.LEQUAL,[Kh]:i.EQUAL,[tu]:i.GEQUAL,[jh]:i.GREATER,[Qh]:i.NOTEQUAL};function Ot(E,v){if(v.type===_n&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===en||v.magFilter===Hr||v.magFilter===Ss||v.magFilter===ti||v.minFilter===en||v.minFilter===Hr||v.minFilter===Ss||v.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,st[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,st[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,st[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,dt[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,dt[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,St[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Je||v.minFilter!==Ss&&v.minFilter!==ti||v.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function jt(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",T));let $=v.source,K=p.get($);K===void 0&&(K={},p.set($,K));let q=W(v);if(q!==E.__cacheKey){K[q]===void 0&&(K[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[q].usedTimes++;let vt=K[E.__cacheKey];vt!==void 0&&(K[E.__cacheKey].usedTimes--,vt.usedTimes===0&&w(v)),E.__cacheKey=q,E.__webglTexture=K[q].texture}return O}function Y(E,v,O){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);let K=jt(E,v),q=v.source;e.bindTexture($,E.__webglTexture,i.TEXTURE0+O);let vt=n.get(q);if(q.version!==vt.__version||K===!0){e.activeTexture(i.TEXTURE0+O);let at=Xt.getPrimaries(Xt.workingColorSpace),ft=v.colorSpace===Pn?null:Xt.getPrimaries(v.colorSpace),Wt=v.colorSpace===Pn||at===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let j=g(v.image,!1,s.maxTextureSize);j=ne(v,j);let pt=r.convert(v.format,v.colorSpace),Et=r.convert(v.type),At=S(v.internalFormat,pt,Et,v.colorSpace,v.isVideoTexture);Ot($,v);let mt,Vt=v.mipmaps,Dt=v.isVideoTexture!==!0,te=vt.__version===void 0||K===!0,D=q.dataReady,it=C(v,j);if(v.isDepthTexture)At=y(v.format===Ni,v.type),te&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,At,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,At,j.width,j.height,0,pt,Et,null));else if(v.isDataTexture)if(Vt.length>0){Dt&&te&&e.texStorage2D(i.TEXTURE_2D,it,At,Vt[0].width,Vt[0].height);for(let V=0,Z=Vt.length;V<Z;V++)mt=Vt[V],Dt?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,Et,mt.data):e.texImage2D(i.TEXTURE_2D,V,At,mt.width,mt.height,0,pt,Et,mt.data);v.generateMipmaps=!1}else Dt?(te&&e.texStorage2D(i.TEXTURE_2D,it,At,j.width,j.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,pt,Et,j.data)):e.texImage2D(i.TEXTURE_2D,0,At,j.width,j.height,0,pt,Et,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Dt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,At,Vt[0].width,Vt[0].height,j.depth);for(let V=0,Z=Vt.length;V<Z;V++)if(mt=Vt[V],v.format!==Ze)if(pt!==null)if(Dt){if(D)if(v.layerUpdates.size>0){let ht=bc(mt.width,mt.height,v.format,v.type);for(let ot of v.layerUpdates){let It=mt.data.subarray(ot*ht/mt.data.BYTES_PER_ELEMENT,(ot+1)*ht/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ot,mt.width,mt.height,1,pt,It)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,mt.width,mt.height,j.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,At,mt.width,mt.height,j.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,mt.width,mt.height,j.depth,pt,Et,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,At,mt.width,mt.height,j.depth,0,pt,Et,mt.data)}else{Dt&&te&&e.texStorage2D(i.TEXTURE_2D,it,At,Vt[0].width,Vt[0].height);for(let V=0,Z=Vt.length;V<Z;V++)mt=Vt[V],v.format!==Ze?pt!==null?Dt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,At,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,Et,mt.data):e.texImage2D(i.TEXTURE_2D,V,At,mt.width,mt.height,0,pt,Et,mt.data)}else if(v.isDataArrayTexture)if(Dt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,At,j.width,j.height,j.depth),D)if(v.layerUpdates.size>0){let V=bc(j.width,j.height,v.format,v.type);for(let Z of v.layerUpdates){let ht=j.data.subarray(Z*V/j.data.BYTES_PER_ELEMENT,(Z+1)*V/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,j.width,j.height,1,pt,Et,ht)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pt,Et,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,j.width,j.height,j.depth,0,pt,Et,j.data);else if(v.isData3DTexture)Dt?(te&&e.texStorage3D(i.TEXTURE_3D,it,At,j.width,j.height,j.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pt,Et,j.data)):e.texImage3D(i.TEXTURE_3D,0,At,j.width,j.height,j.depth,0,pt,Et,j.data);else if(v.isFramebufferTexture){if(te)if(Dt)e.texStorage2D(i.TEXTURE_2D,it,At,j.width,j.height);else{let V=j.width,Z=j.height;for(let ht=0;ht<it;ht++)e.texImage2D(i.TEXTURE_2D,ht,At,V,Z,0,pt,Et,null),V>>=1,Z>>=1}}else if(Vt.length>0){if(Dt&&te){let V=bt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,it,At,V.width,V.height)}for(let V=0,Z=Vt.length;V<Z;V++)mt=Vt[V],Dt?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,pt,Et,mt):e.texImage2D(i.TEXTURE_2D,V,At,pt,Et,mt);v.generateMipmaps=!1}else if(Dt){if(te){let V=bt(j);e.texStorage2D(i.TEXTURE_2D,it,At,V.width,V.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Et,j)}else e.texImage2D(i.TEXTURE_2D,0,At,pt,Et,j);f(v)&&u($),vt.__version=q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function et(E,v,O){if(v.image.length!==6)return;let $=jt(E,v),K=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let q=n.get(K);if(K.version!==q.__version||$===!0){e.activeTexture(i.TEXTURE0+O);let vt=Xt.getPrimaries(Xt.workingColorSpace),at=v.colorSpace===Pn?null:Xt.getPrimaries(v.colorSpace),ft=v.colorSpace===Pn||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Wt=v.isCompressedTexture||v.image[0].isCompressedTexture,j=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Wt&&!j?pt[Z]=g(v.image[Z],!0,s.maxCubemapSize):pt[Z]=j?v.image[Z].image:v.image[Z],pt[Z]=ne(v,pt[Z]);let Et=pt[0],At=r.convert(v.format,v.colorSpace),mt=r.convert(v.type),Vt=S(v.internalFormat,At,mt,v.colorSpace),Dt=v.isVideoTexture!==!0,te=q.__version===void 0||$===!0,D=K.dataReady,it=C(v,Et);Ot(i.TEXTURE_CUBE_MAP,v);let V;if(Wt){Dt&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Vt,Et.width,Et.height);for(let Z=0;Z<6;Z++){V=pt[Z].mipmaps;for(let ht=0;ht<V.length;ht++){let ot=V[ht];v.format!==Ze?At!==null?Dt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,ot.width,ot.height,At,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Vt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,ot.width,ot.height,At,mt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Vt,ot.width,ot.height,0,At,mt,ot.data)}}}else{if(V=v.mipmaps,Dt&&te){V.length>0&&it++;let Z=bt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Vt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(j){Dt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,At,mt,pt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,pt[Z].width,pt[Z].height,0,At,mt,pt[Z].data);for(let ht=0;ht<V.length;ht++){let It=V[ht].image[Z].image;Dt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,It.width,It.height,At,mt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Vt,It.width,It.height,0,At,mt,It.data)}}else{Dt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,At,mt,pt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,At,mt,pt[Z]);for(let ht=0;ht<V.length;ht++){let ot=V[ht];Dt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,At,mt,ot.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Vt,At,mt,ot.image[Z])}}}f(v)&&u(i.TEXTURE_CUBE_MAP),q.__version=K.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function yt(E,v,O,$,K,q){let vt=r.convert(O.format,O.colorSpace),at=r.convert(O.type),ft=S(O.internalFormat,vt,at,O.colorSpace),Wt=n.get(v),j=n.get(O);if(j.__renderTarget=v,!Wt.__hasExternalTextures){let pt=Math.max(1,v.width>>q),Et=Math.max(1,v.height>>q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,q,ft,pt,Et,v.depth,0,vt,at,null):e.texImage2D(K,q,ft,pt,Et,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,j.__webglTexture,0,zt(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,K,j.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(E,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let $=v.depthTexture,K=$&&$.isDepthTexture?$.type:null,q=y(v.stencilBuffer,K),vt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=zt(v);Ht(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,q,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,E)}else{let $=v.textures;for(let K=0;K<$.length;K++){let q=$[K],vt=r.convert(q.format,q.colorSpace),at=r.convert(q.type),ft=S(q.internalFormat,vt,at,q.colorSpace),Wt=zt(v);O&&Ht(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ft,v.width,v.height):Ht(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,ft,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ft,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);let K=$.__webglTexture,q=zt(v);if(v.depthTexture.format===Ci)Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(v.depthTexture.format===Ni)Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Rt(E){let v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let $=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=$}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Tt(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),rt(v.__webglDepthbuffer[$],E,!1);else{let K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),rt(v.__webglDepthbuffer,E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(E,v,O){let $=n.get(E);v!==void 0&&yt($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Rt(E)}function oe(E){let v=E.texture,O=n.get(E),$=n.get(v);E.addEventListener("dispose",A);let K=E.textures,q=E.isWebGLCubeRenderTarget===!0,vt=K.length>1;if(vt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let ft=0;ft<v.mipmaps.length;ft++)O.__webglFramebuffer[at][ft]=i.createFramebuffer()}else O.__webglFramebuffer[at]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)O.__webglFramebuffer[at]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,ft=K.length;at<ft;at++){let Wt=n.get(K[at]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Ht(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<K.length;at++){let ft=K[at];O.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[at]);let Wt=r.convert(ft.format,ft.colorSpace),j=r.convert(ft.type),pt=S(ft.internalFormat,Wt,j,ft.colorSpace,E.isXRRenderTarget===!0),Et=zt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,pt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,O.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)yt(O.__webglFramebuffer[at][ft],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else yt(O.__webglFramebuffer[at],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);f(v)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ft=K.length;at<ft;at++){let Wt=K[at],j=n.get(Wt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),Ot(i.TEXTURE_2D,Wt),yt(O.__webglFramebuffer,E,Wt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),f(Wt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),Ot(at,v),v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)yt(O.__webglFramebuffer[ft],E,v,i.COLOR_ATTACHMENT0,at,ft);else yt(O.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,at,0);f(v)&&u(at),e.unbindTexture()}E.depthBuffer&&Rt(E)}function Gt(E){let v=E.textures;for(let O=0,$=v.length;O<$;O++){let K=v[O];if(f(K)){let q=x(E),vt=n.get(K).__webglTexture;e.bindTexture(q,vt),u(q),e.unbindTexture()}}}let he=[],F=[];function ke(E){if(E.samples>0){if(Ht(E)===!1){let v=E.textures,O=E.width,$=E.height,K=i.COLOR_BUFFER_BIT,q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(E),at=v.length>1;if(at)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);let Wt=n.get(v[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,K,i.NEAREST),l===!0&&(he.length=0,F.length=0,he.push(i.COLOR_ATTACHMENT0+ft),E.depthBuffer&&E.resolveDepthBuffer===!1&&(he.push(q),F.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);let Wt=n.get(v[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function zt(E){return Math.min(s.maxSamples,E.samples)}function Ht(E){let v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function wt(E){let v=a.render.frame;d.get(E)!==v&&(d.set(E,v),E.update())}function ne(E,v){let O=E.colorSpace,$=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==zi&&O!==Pn&&(Xt.getTransfer(O)===Jt?($!==Ze||K!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function bt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=G,this.rebindTextures=kt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Ht}function $m(i,t){function e(n,s=Pn){let r,a=Xt.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===Ko)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nc)return i.BYTE;if(n===Fc)return i.SHORT;if(n===rs)return i.UNSIGNED_SHORT;if(n===Jo)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===gs)return i.HALF_FLOAT;if(n===kc)return i.ALPHA;if(n===Bc)return i.RGB;if(n===Ze)return i.RGBA;if(n===zc)return i.LUMINANCE;if(n===Hc)return i.LUMINANCE_ALPHA;if(n===Ci)return i.DEPTH_COMPONENT;if(n===Ni)return i.DEPTH_STENCIL;if(n===Vc)return i.RED;if(n===Qo)return i.RED_INTEGER;if(n===Gc)return i.RG;if(n===tl)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===Js||n===Ks||n===js||n===Qs)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Fa||n===Oa||n===ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ba||n===za||n===Ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ba||n===za)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===to||n===eo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Va)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ga)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ka)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===to)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tr||n===no||n===io)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===tr)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===no)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wc||n===so||n===ro||n===ao)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===tr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===so)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ui?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var wo=class extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ge=class extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zm={type:"move"},ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let f=e.getJointPose(g,n),u=this._getHandJoint(c,g);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}let d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=d.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&p>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Km=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Eo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new sn({vertexShader:Jm,fragmentShader:Km,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},To=class extends kn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,p=null,m=null,_=null,g=new Eo,f=e.getContextAttributes(),u=null,x=null,S=[],y=[],C=new ct,T=null,A=new we;A.viewport=new ce;let R=new we;R.viewport=new ce;let w=[A,R],M=new wo,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=S[Y];return et===void 0&&(et=new ns,S[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=S[Y];return et===void 0&&(et=new ns,S[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=S[Y];return et===void 0&&(et=new ns,S[Y]=et),et.getHandSpace()};function z(Y){let et=y.indexOf(Y.inputSource);if(et===-1)return;let yt=S[et];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,c||a),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",J);for(let Y=0;Y<S.length;Y++){let et=y[Y];et!==null&&(y[Y]=null,S[Y].disconnect(et))}P=null,H=null,g.reset(),t.setRenderTarget(u),m=null,p=null,h=null,s=null,x=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",J),f.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let et={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Mn(m.framebufferWidth,m.framebufferHeight,{format:Ze,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let et=null,yt=null,rt=null;f.depth&&(rt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=f.stencil?Ni:Ci,yt=f.stencil?Ui:ei);let Tt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};h=new XRWebGLBinding(s,e),p=h.createProjectionLayer(Tt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),x=new Mn(p.textureWidth,p.textureHeight,{format:Ze,type:vn,depthTexture:new pr(p.textureWidth,p.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(Y){for(let et=0;et<Y.removed.length;et++){let yt=Y.removed[et],rt=y.indexOf(yt);rt>=0&&(y[rt]=null,S[rt].disconnect(yt))}for(let et=0;et<Y.added.length;et++){let yt=Y.added[et],rt=y.indexOf(yt);if(rt===-1){for(let Rt=0;Rt<S.length;Rt++)if(Rt>=y.length){y.push(yt),rt=Rt;break}else if(y[Rt]===null){y[Rt]=yt,rt=Rt;break}if(rt===-1)break}let Tt=S[rt];Tt&&Tt.connect(yt)}}let X=new L,tt=new L;function G(Y,et,yt){X.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(yt.matrixWorld);let rt=X.distanceTo(tt),Tt=et.projectionMatrix.elements,Rt=yt.projectionMatrix.elements,kt=Tt[14]/(Tt[10]-1),oe=Tt[14]/(Tt[10]+1),Gt=(Tt[9]+1)/Tt[5],he=(Tt[9]-1)/Tt[5],F=(Tt[8]-1)/Tt[0],ke=(Rt[8]+1)/Rt[0],zt=kt*F,Ht=kt*ke,wt=rt/(-F+ke),ne=wt*-F;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ne),Y.translateZ(wt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Tt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let bt=kt+wt,E=oe+wt,v=zt-ne,O=Ht+(rt-ne),$=Gt*oe/E*bt,K=he*oe/E*bt;Y.projectionMatrix.makePerspective(v,O,$,K,bt,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,yt=Y.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(yt=g.depthFar)),M.near=R.near=A.near=et,M.far=R.far=A.far=yt,(P!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,H=M.far),A.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,M.layers.mask=A.layers.mask|R.layers.mask;let rt=Y.parent,Tt=M.cameras;st(M,rt);for(let Rt=0;Rt<Tt.length;Rt++)st(Tt[Rt],rt);Tt.length===2?G(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),dt(Y,M,rt)};function dt(Y,et,yt){yt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=co*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(Y){l=Y,p!==null&&(p.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let St=null;function Ot(Y,et){if(d=et.getViewerPose(c||a),_=et,d!==null){let yt=d.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let rt=!1;yt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let Rt=0;Rt<yt.length;Rt++){let kt=yt[Rt],oe=null;if(m!==null)oe=m.getViewport(kt);else{let he=h.getViewSubImage(p,kt);oe=he.viewport,Rt===0&&(t.setRenderTargetTextures(x,he.colorTexture,p.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(x))}let Gt=w[Rt];Gt===void 0&&(Gt=new we,Gt.layers.enable(Rt),Gt.viewport=new ce,w[Rt]=Gt),Gt.matrix.fromArray(kt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(kt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(oe.x,oe.y,oe.width,oe.height),Rt===0&&(M.matrix.copy(Gt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(Gt)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Rt=h.getDepthInformation(yt[0]);Rt&&Rt.isValid&&Rt.texture&&g.init(t,Rt,s.renderState)}}for(let yt=0;yt<S.length;yt++){let rt=y[yt],Tt=S[yt];rt!==null&&Tt!==void 0&&Tt.update(rt,et,c||a)}St&&St(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}let jt=new Jc;jt.setAnimationLoop(Ot),this.setAnimationLoop=function(Y){St=Y},this.dispose=function(){}}},Zn=new nn,jm=new ae;function Qm(i,t){function e(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,Zc(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function s(f,u,x,S,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(f,u):u.isMeshToonMaterial?(r(f,u),h(f,u)):u.isMeshPhongMaterial?(r(f,u),d(f,u)):u.isMeshStandardMaterial?(r(f,u),p(f,u),u.isMeshPhysicalMaterial&&m(f,u,y)):u.isMeshMatcapMaterial?(r(f,u),_(f,u)):u.isMeshDepthMaterial?r(f,u):u.isMeshDistanceMaterial?(r(f,u),g(f,u)):u.isMeshNormalMaterial?r(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?l(f,u,x,S):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,e(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Le&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,e(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Le&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,e(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,e(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);let x=t.get(u),S=x.envMap,y=x.envMapRotation;S&&(f.envMap.value=S,Zn.copy(y),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),f.envMapRotation.value.setFromMatrix4(jm.makeRotationFromEuler(Zn)),f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,x,S){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*x,f.scale.value=S*.5,u.map&&(f.map.value=u.map,e(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function d(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function h(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function p(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,x){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Le&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,u){u.matcap&&(f.matcap.value=u.matcap)}function g(f,u){let x=t.get(u).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){let y=S.program;n.uniformBlockBinding(x,y)}function c(x,S){let y=s[x.id];y===void 0&&(_(x),y=d(x),s[x.id]=y,x.addEventListener("dispose",f));let C=S.program;n.updateUBOMapping(x,C);let T=t.render.frame;r[x.id]!==T&&(p(x),r[x.id]=T)}function d(x){let S=h();x.__bindingPointIndex=S;let y=i.createBuffer(),C=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){let S=s[x.id],y=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,A=y.length;T<A;T++){let R=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,M=R.length;w<M;w++){let P=R[w];if(m(P,T,w,C)===!0){let H=P.__offset,z=Array.isArray(P.value)?P.value:[P.value],W=0;for(let J=0;J<z.length;J++){let X=z[J],tt=g(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,H+W,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,S,y,C){let T=x.value,A=S+"_"+y;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{let R=C[A];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return C[A]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function _(x){let S=x.uniforms,y=0,C=16;for(let A=0,R=S.length;A<R;A++){let w=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,P=w.length;M<P;M++){let H=w[M],z=Array.isArray(H.value)?H.value:[H.value];for(let W=0,J=z.length;W<J;W++){let X=z[W],tt=g(X),G=y%C,st=G%tt.boundary,dt=G+st;y+=st,dt!==0&&C-dt<tt.storage&&(y+=C-dt),H.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=tt.storage}}}let T=y%C;return T>0&&(y+=C-T),x.__size=y,x.__cache={},this}function g(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function f(x){let S=x.target;S.removeEventListener("dispose",f);let y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var os=class{constructor(t={}){let{canvas:e=iu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=new Uint32Array(4),g=new Int32Array(4),f=null,u=null,x=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=Un,this.toneMappingExposure=1;let y=this,C=!1,T=0,A=0,R=null,w=-1,M=null,P=new ce,H=new ce,z=null,W=new Nt(0),J=0,X=e.width,tt=e.height,G=1,st=null,dt=null,St=new ce(0,0,X,tt),Ot=new ce(0,0,X,tt),jt=!1,Y=new as,et=!1,yt=!1,rt=new ae,Tt=new ae,Rt=new L,kt=new ce,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function he(){return R===null?G:1}let F=n;function ke(b,U){return e.getContext(b,U)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ot,!1),F===null){let U="webgl2";if(F=ke(U,b),F===null)throw ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let zt,Ht,wt,ne,bt,E,v,O,$,K,q,vt,at,ft,Wt,j,pt,Et,At,mt,Vt,Dt,te,D;function it(){zt=new gp(F),zt.init(),Dt=new $m(F,zt),Ht=new hp(F,zt,t,Dt),wt=new Xm(F,zt),Ht.reverseDepthBuffer&&p&&wt.buffers.depth.setReversed(!0),ne=new yp(F),bt=new Lm,E=new Ym(F,zt,wt,bt,Ht,Dt,ne),v=new dp(y),O=new mp(y),$=new Eu(F),te=new lp(F,$),K=new _p(F,$,ne,te),q=new Mp(F,K,$,ne),At=new vp(F,Ht,E),j=new up(bt),vt=new Pm(y,v,O,zt,Ht,te,j),at=new Qm(y,bt),ft=new Um,Wt=new zm(zt),Et=new op(y,v,O,wt,q,m,l),pt=new Gm(y,q,Ht),D=new tg(F,ne,Ht,wt),mt=new cp(F,zt,ne),Vt=new xp(F,zt,ne),ne.programs=vt.programs,y.capabilities=Ht,y.extensions=zt,y.properties=bt,y.renderLists=ft,y.shadowMap=pt,y.state=wt,y.info=ne}it();let V=new To(y,F);this.xr=V,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=zt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=zt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(X,tt,!1))},this.getSize=function(b){return b.set(X,tt)},this.setSize=function(b,U,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,tt=U,e.width=Math.floor(b*G),e.height=Math.floor(U*G),k===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(X*G,tt*G).floor()},this.setDrawingBufferSize=function(b,U,k){X=b,tt=U,G=k,e.width=Math.floor(b*k),e.height=Math.floor(U*k),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(St)},this.setViewport=function(b,U,k,B){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,U,k,B),wt.viewport(P.copy(St).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Ot)},this.setScissor=function(b,U,k,B){b.isVector4?Ot.set(b.x,b.y,b.z,b.w):Ot.set(b,U,k,B),wt.scissor(H.copy(Ot).multiplyScalar(G).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(b){wt.setScissorTest(jt=b)},this.setOpaqueSort=function(b){st=b},this.setTransparentSort=function(b){dt=b},this.getClearColor=function(b){return b.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(b=!0,U=!0,k=!0){let B=0;if(b){let N=!1;if(R!==null){let Q=R.texture.format;N=Q===el||Q===tl||Q===Qo}if(N){let Q=R.texture.type,lt=Q===vn||Q===ei||Q===rs||Q===Ui||Q===Ko||Q===jo,gt=Et.getClearColor(),_t=Et.getClearAlpha(),Ct=gt.r,Pt=gt.g,xt=gt.b;lt?(_[0]=Ct,_[1]=Pt,_[2]=xt,_[3]=_t,F.clearBufferuiv(F.COLOR,0,_)):(g[0]=Ct,g[1]=Pt,g[2]=xt,g[3]=_t,F.clearBufferiv(F.COLOR,0,g))}else B|=F.COLOR_BUFFER_BIT}U&&(B|=F.DEPTH_BUFFER_BIT),k&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ft.dispose(),Wt.dispose(),bt.dispose(),v.dispose(),O.dispose(),q.dispose(),te.dispose(),D.dispose(),vt.dispose(),V.dispose(),V.removeEventListener("sessionstart",xl),V.removeEventListener("sessionend",yl),Gn.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let b=ne.autoReset,U=pt.enabled,k=pt.autoUpdate,B=pt.needsUpdate,N=pt.type;it(),ne.autoReset=b,pt.enabled=U,pt.autoUpdate=k,pt.needsUpdate=B,pt.type=N}function ot(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function It(b){let U=b.target;U.removeEventListener("dispose",It),le(U)}function le(b){Me(b),bt.remove(b)}function Me(b){let U=bt.get(b).programs;U!==void 0&&(U.forEach(function(k){vt.releaseProgram(k)}),b.isShaderMaterial&&vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,k,B,N,Q){U===null&&(U=oe);let lt=N.isMesh&&N.matrixWorld.determinant()<0,gt=dh(b,U,k,B,N);wt.setMaterial(B,lt);let _t=k.index,Ct=1;if(B.wireframe===!0){if(_t=K.getWireframeAttribute(k),_t===void 0)return;Ct=2}let Pt=k.drawRange,xt=k.attributes.position,qt=Pt.start*Ct,ee=(Pt.start+Pt.count)*Ct;Q!==null&&(qt=Math.max(qt,Q.start*Ct),ee=Math.min(ee,(Q.start+Q.count)*Ct)),_t!==null?(qt=Math.max(qt,0),ee=Math.min(ee,_t.count)):xt!=null&&(qt=Math.max(qt,0),ee=Math.min(ee,xt.count));let ie=ee-qt;if(ie<0||ie===1/0)return;te.setup(N,B,gt,k,_t);let Pe,Yt=mt;if(_t!==null&&(Pe=$.get(_t),Yt=Vt,Yt.setIndex(Pe)),N.isMesh)B.wireframe===!0?(wt.setLineWidth(B.wireframeLinewidth*he()),Yt.setMode(F.LINES)):Yt.setMode(F.TRIANGLES);else if(N.isLine){let Mt=B.linewidth;Mt===void 0&&(Mt=1),wt.setLineWidth(Mt*he()),N.isLineSegments?Yt.setMode(F.LINES):N.isLineLoop?Yt.setMode(F.LINE_LOOP):Yt.setMode(F.LINE_STRIP)}else N.isPoints?Yt.setMode(F.POINTS):N.isSprite&&Yt.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Yt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Mt=N._multiDrawStarts,cn=N._multiDrawCounts,$t=N._multiDrawCount,Xe=_t?$.get(_t).bytesPerElement:1,oi=bt.get(B).currentProgram.getUniforms();for(let De=0;De<$t;De++)oi.setValue(F,"_gl_DrawID",De),Yt.render(Mt[De]/Xe,cn[De])}else if(N.isInstancedMesh)Yt.renderInstances(qt,ie,N.count);else if(k.isInstancedBufferGeometry){let Mt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,cn=Math.min(k.instanceCount,Mt);Yt.renderInstances(qt,ie,cn)}else Yt.render(qt,ie)};function Zt(b,U,k){b.transparent===!0&&b.side===Fe&&b.forceSinglePass===!1?(b.side=Le,b.needsUpdate=!0,Ms(b,U,k),b.side=Fn,b.needsUpdate=!0,Ms(b,U,k),b.side=Fe):Ms(b,U,k)}this.compile=function(b,U,k=null){k===null&&(k=b),u=Wt.get(k),u.init(U),S.push(u),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),b!==k&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();let B=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let Q=N.material;if(Q)if(Array.isArray(Q))for(let lt=0;lt<Q.length;lt++){let gt=Q[lt];Zt(gt,k,N),B.add(gt)}else Zt(Q,k,N),B.add(Q)}),S.pop(),u=null,B},this.compileAsync=function(b,U,k=null){let B=this.compile(b,U,k);return new Promise(N=>{function Q(){if(B.forEach(function(lt){bt.get(lt).currentProgram.isReady()&&B.delete(lt)}),B.size===0){N(b);return}setTimeout(Q,10)}zt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let We=null;function ln(b){We&&We(b)}function xl(){Gn.stop()}function yl(){Gn.start()}let Gn=new Jc;Gn.setAnimationLoop(ln),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(b){We=b,V.setAnimationLoop(b),b===null?Gn.stop():Gn.start()},V.addEventListener("sessionstart",xl),V.addEventListener("sessionend",yl),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,U,R),u=Wt.get(b,S.length),u.init(U),S.push(u),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Tt),yt=this.localClippingEnabled,et=j.init(this.clippingPlanes,yt),f=ft.get(b,x.length),f.init(),x.push(f),V.enabled===!0&&V.isPresenting===!0){let Q=y.xr.getDepthSensingMesh();Q!==null&&zr(Q,U,-1/0,y.sortObjects)}zr(b,U,0,y.sortObjects),f.finish(),y.sortObjects===!0&&f.sort(st,dt),Gt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Gt&&Et.addToRenderList(f,b),this.info.render.frame++,et===!0&&j.beginShadows();let k=u.state.shadowsArray;pt.render(k,b,U),et===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=f.opaque,N=f.transmissive;if(u.setupLights(),U.isArrayCamera){let Q=U.cameras;if(N.length>0)for(let lt=0,gt=Q.length;lt<gt;lt++){let _t=Q[lt];Ml(B,N,b,_t)}Gt&&Et.render(b);for(let lt=0,gt=Q.length;lt<gt;lt++){let _t=Q[lt];vl(f,b,_t,_t.viewport)}}else N.length>0&&Ml(B,N,b,U),Gt&&Et.render(b),vl(f,b,U);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(y,b,U),te.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(u=S[S.length-1],et===!0&&j.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,x.pop(),x.length>0?f=x[x.length-1]:f=null};function zr(b,U,k,B){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){B&&kt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Tt);let lt=q.update(b),gt=b.material;gt.visible&&f.push(b,lt,gt,k,kt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){let lt=q.update(b),gt=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),kt.copy(b.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),kt.copy(lt.boundingSphere.center)),kt.applyMatrix4(b.matrixWorld).applyMatrix4(Tt)),Array.isArray(gt)){let _t=lt.groups;for(let Ct=0,Pt=_t.length;Ct<Pt;Ct++){let xt=_t[Ct],qt=gt[xt.materialIndex];qt&&qt.visible&&f.push(b,lt,qt,k,kt.z,xt)}}else gt.visible&&f.push(b,lt,gt,k,kt.z,null)}}let Q=b.children;for(let lt=0,gt=Q.length;lt<gt;lt++)zr(Q[lt],U,k,B)}function vl(b,U,k,B){let N=b.opaque,Q=b.transmissive,lt=b.transparent;u.setupLightsView(k),et===!0&&j.setGlobalState(y.clippingPlanes,k),B&&wt.viewport(P.copy(B)),N.length>0&&vs(N,U,k),Q.length>0&&vs(Q,U,k),lt.length>0&&vs(lt,U,k),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Ml(b,U,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new Mn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?gs:vn,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));let Q=u.state.transmissionRenderTarget[B.id],lt=B.viewport||P;Q.setSize(lt.z,lt.w);let gt=y.getRenderTarget();y.setRenderTarget(Q),y.getClearColor(W),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),Gt&&Et.render(k);let _t=y.toneMapping;y.toneMapping=Un;let Ct=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),et===!0&&j.setGlobalState(y.clippingPlanes,B),vs(b,k,B),E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let xt=0,qt=U.length;xt<qt;xt++){let ee=U[xt],ie=ee.object,Pe=ee.geometry,Yt=ee.material,Mt=ee.group;if(Yt.side===Fe&&ie.layers.test(B.layers)){let cn=Yt.side;Yt.side=Le,Yt.needsUpdate=!0,Sl(ie,k,B,Pe,Yt,Mt),Yt.side=cn,Yt.needsUpdate=!0,Pt=!0}}Pt===!0&&(E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q))}y.setRenderTarget(gt),y.setClearColor(W,J),Ct!==void 0&&(B.viewport=Ct),y.toneMapping=_t}function vs(b,U,k){let B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=b.length;N<Q;N++){let lt=b[N],gt=lt.object,_t=lt.geometry,Ct=B===null?lt.material:B,Pt=lt.group;gt.layers.test(k.layers)&&Sl(gt,U,k,_t,Ct,Pt)}}function Sl(b,U,k,B,N,Q){b.onBeforeRender(y,U,k,B,N,Q),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(y,U,k,B,b,Q),N.transparent===!0&&N.side===Fe&&N.forceSinglePass===!1?(N.side=Le,N.needsUpdate=!0,y.renderBufferDirect(k,U,B,N,b,Q),N.side=Fn,N.needsUpdate=!0,y.renderBufferDirect(k,U,B,N,b,Q),N.side=Fe):y.renderBufferDirect(k,U,B,N,b,Q),b.onAfterRender(y,U,k,B,N,Q)}function Ms(b,U,k){U.isScene!==!0&&(U=oe);let B=bt.get(b),N=u.state.lights,Q=u.state.shadowsArray,lt=N.state.version,gt=vt.getParameters(b,N.state,Q,U,k),_t=vt.getProgramCacheKey(gt),Ct=B.programs;B.environment=b.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(b.isMeshStandardMaterial?O:v).get(b.envMap||B.environment),B.envMapRotation=B.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ct===void 0&&(b.addEventListener("dispose",It),Ct=new Map,B.programs=Ct);let Pt=Ct.get(_t);if(Pt!==void 0){if(B.currentProgram===Pt&&B.lightsStateVersion===lt)return wl(b,gt),Pt}else gt.uniforms=vt.getUniforms(b),b.onBeforeCompile(gt,y),Pt=vt.acquireProgram(gt,_t),Ct.set(_t,Pt),B.uniforms=gt.uniforms;let xt=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(xt.clippingPlanes=j.uniform),wl(b,gt),B.needsLights=ph(b),B.lightsStateVersion=lt,B.needsLights&&(xt.ambientLightColor.value=N.state.ambient,xt.lightProbe.value=N.state.probe,xt.directionalLights.value=N.state.directional,xt.directionalLightShadows.value=N.state.directionalShadow,xt.spotLights.value=N.state.spot,xt.spotLightShadows.value=N.state.spotShadow,xt.rectAreaLights.value=N.state.rectArea,xt.ltc_1.value=N.state.rectAreaLTC1,xt.ltc_2.value=N.state.rectAreaLTC2,xt.pointLights.value=N.state.point,xt.pointLightShadows.value=N.state.pointShadow,xt.hemisphereLights.value=N.state.hemi,xt.directionalShadowMap.value=N.state.directionalShadowMap,xt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xt.spotShadowMap.value=N.state.spotShadowMap,xt.spotLightMatrix.value=N.state.spotLightMatrix,xt.spotLightMap.value=N.state.spotLightMap,xt.pointShadowMap.value=N.state.pointShadowMap,xt.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Pt,B.uniformsList=null,Pt}function bl(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Ii.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function wl(b,U){let k=bt.get(b);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function dh(b,U,k,B,N){U.isScene!==!0&&(U=oe),E.resetTextureUnits();let Q=U.fog,lt=B.isMeshStandardMaterial?U.environment:null,gt=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:zi,_t=(B.isMeshStandardMaterial?O:v).get(B.envMap||lt),Ct=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Pt=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),xt=!!k.morphAttributes.position,qt=!!k.morphAttributes.normal,ee=!!k.morphAttributes.color,ie=Un;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ie=y.toneMapping);let Pe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Yt=Pe!==void 0?Pe.length:0,Mt=bt.get(B),cn=u.state.lights;if(et===!0&&(yt===!0||b!==M)){let Be=b===M&&B.id===w;j.setState(B,b,Be)}let $t=!1;B.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==cn.state.version||Mt.outputColorSpace!==gt||N.isBatchedMesh&&Mt.batching===!1||!N.isBatchedMesh&&Mt.batching===!0||N.isBatchedMesh&&Mt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Mt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Mt.instancing===!1||!N.isInstancedMesh&&Mt.instancing===!0||N.isSkinnedMesh&&Mt.skinning===!1||!N.isSkinnedMesh&&Mt.skinning===!0||N.isInstancedMesh&&Mt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Mt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Mt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Mt.instancingMorph===!1&&N.morphTexture!==null||Mt.envMap!==_t||B.fog===!0&&Mt.fog!==Q||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==j.numPlanes||Mt.numIntersection!==j.numIntersection)||Mt.vertexAlphas!==Ct||Mt.vertexTangents!==Pt||Mt.morphTargets!==xt||Mt.morphNormals!==qt||Mt.morphColors!==ee||Mt.toneMapping!==ie||Mt.morphTargetsCount!==Yt)&&($t=!0):($t=!0,Mt.__version=B.version);let Xe=Mt.currentProgram;$t===!0&&(Xe=Ms(B,U,N));let oi=!1,De=!1,Xi=!1,se=Xe.getUniforms(),je=Mt.uniforms;if(wt.useProgram(Xe.program)&&(oi=!0,De=!0,Xi=!0),B.id!==w&&(w=B.id,De=!0),oi||M!==b){wt.buffers.depth.getReversed()?(rt.copy(b.projectionMatrix),ru(rt),au(rt),se.setValue(F,"projectionMatrix",rt)):se.setValue(F,"projectionMatrix",b.projectionMatrix),se.setValue(F,"viewMatrix",b.matrixWorldInverse);let bn=se.map.cameraPosition;bn!==void 0&&bn.setValue(F,Rt.setFromMatrixPosition(b.matrixWorld)),Ht.logarithmicDepthBuffer&&se.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&se.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,De=!0,Xi=!0)}if(N.isSkinnedMesh){se.setOptional(F,N,"bindMatrix"),se.setOptional(F,N,"bindMatrixInverse");let Be=N.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),se.setValue(F,"boneTexture",Be.boneTexture,E))}N.isBatchedMesh&&(se.setOptional(F,N,"batchingTexture"),se.setValue(F,"batchingTexture",N._matricesTexture,E),se.setOptional(F,N,"batchingIdTexture"),se.setValue(F,"batchingIdTexture",N._indirectTexture,E),se.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&se.setValue(F,"batchingColorTexture",N._colorsTexture,E));let qi=k.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&At.update(N,k,Xe),(De||Mt.receiveShadow!==N.receiveShadow)&&(Mt.receiveShadow=N.receiveShadow,se.setValue(F,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(je.envMap.value=_t,je.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(je.envMapIntensity.value=U.environmentIntensity),De&&(se.setValue(F,"toneMappingExposure",y.toneMappingExposure),Mt.needsLights&&fh(je,Xi),Q&&B.fog===!0&&at.refreshFogUniforms(je,Q),at.refreshMaterialUniforms(je,B,G,tt,u.state.transmissionRenderTarget[b.id]),Ii.upload(F,bl(Mt),je,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ii.upload(F,bl(Mt),je,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&se.setValue(F,"center",N.center),se.setValue(F,"modelViewMatrix",N.modelViewMatrix),se.setValue(F,"normalMatrix",N.normalMatrix),se.setValue(F,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Be=B.uniformsGroups;for(let bn=0,wn=Be.length;bn<wn;bn++){let El=Be[bn];D.update(El,Xe),D.bind(El,Xe)}}return Xe}function fh(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function ph(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,U,k){bt.get(b.texture).__webglTexture=U,bt.get(b.depthTexture).__webglTexture=k;let B=bt.get(b);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){let k=bt.get(b);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,k=0){R=b,T=U,A=k;let B=!0,N=null,Q=!1,lt=!1;if(b){let _t=bt.get(b);if(_t.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(F.FRAMEBUFFER,null),B=!1;else if(_t.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(_t.__hasExternalTextures)E.rebindTextures(b,bt.get(b.texture).__webglTexture,bt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let xt=b.depthTexture;if(_t.__boundDepthTexture!==xt){if(xt!==null&&bt.has(xt)&&(b.width!==xt.image.width||b.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}let Ct=b.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(lt=!0);let Pt=bt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?N=Pt[U][k]:N=Pt[U],Q=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?N=bt.get(b).__webglMultisampledFramebuffer:Array.isArray(Pt)?N=Pt[k]:N=Pt,P.copy(b.viewport),H.copy(b.scissor),z=b.scissorTest}else P.copy(St).multiplyScalar(G).floor(),H.copy(Ot).multiplyScalar(G).floor(),z=jt;if(wt.bindFramebuffer(F.FRAMEBUFFER,N)&&B&&wt.drawBuffers(b,N),wt.viewport(P),wt.scissor(H),wt.setScissorTest(z),Q){let _t=bt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,k)}else if(lt){let _t=bt.get(b.texture),Ct=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,_t.__webglTexture,k||0,Ct)}w=-1},this.readRenderTargetPixels=function(b,U,k,B,N,Q,lt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){wt.bindFramebuffer(F.FRAMEBUFFER,gt);try{let _t=b.texture,Ct=_t.format,Pt=_t.type;if(!Ht.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-B&&k>=0&&k<=b.height-N&&F.readPixels(U,k,B,N,Dt.convert(Ct),Dt.convert(Pt),Q)}finally{let _t=R!==null?bt.get(R).__webglFramebuffer:null;wt.bindFramebuffer(F.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(b,U,k,B,N,Q,lt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){let _t=b.texture,Ct=_t.format,Pt=_t.type;if(!Ht.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-B&&k>=0&&k<=b.height-N){wt.bindFramebuffer(F.FRAMEBUFFER,gt);let xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.bufferData(F.PIXEL_PACK_BUFFER,Q.byteLength,F.STREAM_READ),F.readPixels(U,k,B,N,Dt.convert(Ct),Dt.convert(Pt),0);let qt=R!==null?bt.get(R).__webglFramebuffer:null;wt.bindFramebuffer(F.FRAMEBUFFER,qt);let ee=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await su(F,ee,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Q),F.deleteBuffer(xt),F.deleteSync(ee),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,k=0){b.isTexture!==!0&&(ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);let B=Math.pow(2,-k),N=Math.floor(b.image.width*B),Q=Math.floor(b.image.height*B),lt=U!==null?U.x:0,gt=U!==null?U.y:0;E.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,lt,gt,N,Q),wt.unbindTexture()},this.copyTextureToTexture=function(b,U,k=null,B=null,N=0){b.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let Q,lt,gt,_t,Ct,Pt,xt,qt,ee,ie=b.isCompressedTexture?b.mipmaps[N]:b.image;k!==null?(Q=k.max.x-k.min.x,lt=k.max.y-k.min.y,gt=k.isBox3?k.max.z-k.min.z:1,_t=k.min.x,Ct=k.min.y,Pt=k.isBox3?k.min.z:0):(Q=ie.width,lt=ie.height,gt=ie.depth||1,_t=0,Ct=0,Pt=0),B!==null?(xt=B.x,qt=B.y,ee=B.z):(xt=0,qt=0,ee=0);let Pe=Dt.convert(U.format),Yt=Dt.convert(U.type),Mt;U.isData3DTexture?(E.setTexture3D(U,0),Mt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Mt=F.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Mt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let cn=F.getParameter(F.UNPACK_ROW_LENGTH),$t=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Xe=F.getParameter(F.UNPACK_SKIP_PIXELS),oi=F.getParameter(F.UNPACK_SKIP_ROWS),De=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ie.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ie.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_t),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ct),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pt);let Xi=b.isDataArrayTexture||b.isData3DTexture,se=U.isDataArrayTexture||U.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let je=bt.get(b),qi=bt.get(U),Be=bt.get(je.__renderTarget),bn=bt.get(qi.__renderTarget);wt.bindFramebuffer(F.READ_FRAMEBUFFER,Be.__webglFramebuffer),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let wn=0;wn<gt;wn++)Xi&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.get(b).__webglTexture,N,Pt+wn),b.isDepthTexture?(se&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.get(U).__webglTexture,N,ee+wn),F.blitFramebuffer(_t,Ct,Q,lt,xt,qt,Q,lt,F.DEPTH_BUFFER_BIT,F.NEAREST)):se?F.copyTexSubImage3D(Mt,N,xt,qt,ee+wn,_t,Ct,Q,lt):F.copyTexSubImage2D(Mt,N,xt,qt,ee+wn,_t,Ct,Q,lt);wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else se?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Mt,N,xt,qt,ee,Q,lt,gt,Pe,Yt,ie.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Mt,N,xt,qt,ee,Q,lt,gt,Pe,ie.data):F.texSubImage3D(Mt,N,xt,qt,ee,Q,lt,gt,Pe,Yt,ie):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,xt,qt,Q,lt,Pe,Yt,ie.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,xt,qt,ie.width,ie.height,Pe,ie.data):F.texSubImage2D(F.TEXTURE_2D,N,xt,qt,Q,lt,Pe,Yt,ie);F.pixelStorei(F.UNPACK_ROW_LENGTH,cn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,$t),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Xe),F.pixelStorei(F.UNPACK_SKIP_ROWS,oi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,De),N===0&&U.generateMipmaps&&F.generateMipmap(Mt),wt.unbindTexture()},this.copyTextureToTexture3D=function(b,U,k=null,B=null,N=0){return b.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0),ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,k,B,N)},this.initRenderTarget=function(b){bt.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),wt.unbindTexture()},this.resetState=function(){T=0,A=0,R=null,wt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}};var mr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ls=class extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ao=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lo,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ae=new L,gr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},cs=class extends Sn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Si,Ki=new L,bi=new L,wi=new L,Ei=new ct,ji=new ct,eh=new ae,Gs=new L,Qi=new L,Ws=new L,wc=new ct,_a=new ct,Ec=new ct,_r=class extends xe{constructor(t=new cs){if(super(),this.isSprite=!0,this.type="Sprite",Si===void 0){Si=new ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ao(e,5);Si.setIndex([0,1,2,0,2,3]),Si.setAttribute("position",new gr(n,3,0,!1)),Si.setAttribute("uv",new gr(n,2,3,!1))}this.geometry=Si,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bi.setFromMatrixScale(this.matrixWorld),eh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bi.multiplyScalar(-wi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Xs(Gs.set(-.5,-.5,0),wi,a,bi,s,r),Xs(Qi.set(.5,-.5,0),wi,a,bi,s,r),Xs(Ws.set(.5,.5,0),wi,a,bi,s,r),wc.set(0,0),_a.set(1,0),Ec.set(1,1);let o=t.ray.intersectTriangle(Gs,Qi,Ws,!1,Ki);if(o===null&&(Xs(Qi.set(-.5,.5,0),wi,a,bi,s,r),_a.set(0,1),o=t.ray.intersectTriangle(Gs,Ws,Qi,!1,Ki),o===null))return;let l=t.ray.origin.distanceTo(Ki);l<t.near||l>t.far||e.push({distance:l,point:Ki.clone(),uv:Ln.getInterpolation(Ki,Gs,Qi,Ws,wc,_a,Ec,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Xs(i,t,e,n,s,r){Ei.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ji.x=r*Ei.x-s*Ei.y,ji.y=s*Ei.x+r*Ei.y):ji.copy(Ei),i.copy(t),i.x+=ji.x,i.y+=ji.y,i.applyMatrix4(eh)}var hs=class extends Sn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Tc=new ae,Co=new ar,qs=new Fi,Ys=new L,xr=class extends xe{constructor(t=new ye,e=new hs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(s),qs.radius+=r,t.ray.intersectsSphere(qs)===!1)return;Tc.copy(s).invert(),Co.copy(t.ray).applyMatrix4(Tc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=p,g=m;_<g;_++){let f=c.getX(_);Ys.fromBufferAttribute(h,f),Ac(Ys,f,l,s,t,e,this)}}else{let p=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=p,g=m;_<g;_++)Ys.fromBufferAttribute(h,_),Ac(Ys,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ac(i,t,e,n,s,r,a){let o=Co.distanceSqToPoint(i);if(o<e){let l=new L;Co.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var yr=class extends Oe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ve=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],p=n[s+1]-d,m=(a-d)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ct:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],a=[],o=new L,l=new ae;for(let m=0;m<=t;m++){let _=m/t;s[m]=this.getTangentAt(_,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),h=Math.abs(s[0].y),p=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(_e(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(_e(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],m*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},us=class extends Ve{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*d-m*h+this.aX,c=p*h+m*d+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ro=class extends us{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function il(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,h){let p=(a-r)/c-(o-r)/(c+d)+(o-a)/d,m=(o-a)/d-(l-a)/(d+h)+(l-o)/h;p*=d,m*=d,s(a,o,p,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var $s=new L,xa=new il,ya=new il,va=new il,Io=class extends Ve{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:($s.subVectors(s[0],s[1]).add(s[0]),c=$s);let h=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:($s.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=$s),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(h),m),g=Math.pow(h.distanceToSquared(p),m),f=Math.pow(p.distanceToSquared(d),m);g<1e-4&&(g=1),_<1e-4&&(_=g),f<1e-4&&(f=g),xa.initNonuniformCatmullRom(c.x,h.x,p.x,d.x,_,g,f),ya.initNonuniformCatmullRom(c.y,h.y,p.y,d.y,_,g,f),va.initNonuniformCatmullRom(c.z,h.z,p.z,d.z,_,g,f)}else this.curveType==="catmullrom"&&(xa.initCatmullRom(c.x,h.x,p.x,d.x,this.tension),ya.initCatmullRom(c.y,h.y,p.y,d.y,this.tension),va.initCatmullRom(c.z,h.z,p.z,d.z,this.tension));return n.set(xa.calc(l),ya.calc(l),va.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Cc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function eg(i,t){let e=1-i;return e*e*t}function ng(i,t){return 2*(1-i)*i*t}function ig(i,t){return i*i*t}function is(i,t,e,n){return eg(i,t)+ng(i,e)+ig(i,n)}function sg(i,t){let e=1-i;return e*e*e*t}function rg(i,t){let e=1-i;return 3*e*e*i*t}function ag(i,t){return 3*(1-i)*i*i*t}function og(i,t){return i*i*i*t}function ss(i,t,e,n,s){return sg(i,t)+rg(i,e)+ag(i,n)+og(i,s)}var vr=class extends Ve{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ss(t,s.x,r.x,a.x,o.x),ss(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Po=class extends Ve{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ss(t,s.x,r.x,a.x,o.x),ss(t,s.y,r.y,a.y,o.y),ss(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Mr=class extends Ve{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends Ve{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sr=class extends Ve{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(is(t,s.x,r.x,a.x),is(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends Ve{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(is(t,s.x,r.x,a.x),is(t,s.y,r.y,a.y),is(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},br=class extends Ve{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Cc(o,l.x,c.x,d.x,h.x),Cc(o,l.y,c.y,d.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},Rc=Object.freeze({__proto__:null,ArcCurve:Ro,CatmullRomCurve3:Io,CubicBezierCurve:vr,CubicBezierCurve3:Po,EllipseCurve:us,LineCurve:Mr,LineCurve3:Lo,QuadraticBezierCurve:Sr,QuadraticBezierCurve3:Do,SplineCurve:br}),Uo=class extends Ve{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Rc[s.type]().fromJSON(s))}return this}},No=class extends Uo{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Mr(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Sr(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new vr(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new br(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+c,e+d,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new us(t,e,n,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Fo=class i extends ye{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=_e(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],d=1/e,h=new L,p=new ct,m=new L,_=new L,g=new L,f=0,u=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:f=t[x+1].x-t[x].x,u=t[x+1].y-t[x].y,m.x=u*1,m.y=-f,m.z=u*0,g.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:f=t[x+1].x-t[x].x,u=t[x+1].y-t[x].y,m.x=u*1,m.y=-f,m.z=u*0,_.copy(m),m.x+=g.x,m.y+=g.y,m.z+=g.z,m.normalize(),l.push(m.x,m.y,m.z),g.copy(_)}for(let x=0;x<=e;x++){let S=n+x*d*s,y=Math.sin(S),C=Math.cos(S);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*y,h.y=t[T].y,h.z=t[T].x*C,a.push(h.x,h.y,h.z),p.x=x/e,p.y=T/(t.length-1),o.push(p.x,p.y);let A=l[3*T+0]*y,R=l[3*T+1],w=l[3*T+0]*C;c.push(A,R,w)}}for(let x=0;x<e;x++)for(let S=0;S<t.length-1;S++){let y=S+x*t.length,C=y,T=y+t.length,A=y+t.length+1,R=y+1;r.push(C,T,R),r.push(A,R,T)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ds=class i extends Fo{constructor(t=1,e=1,n=4,s=8){let r=new No;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var Te=class i extends ye{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],h=[],p=[],m=[],_=0,g=[],f=n/2,u=0;x(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(m,2));function x(){let y=new L,C=new L,T=0,A=(e-t)/n;for(let R=0;R<=r;R++){let w=[],M=R/r,P=M*(e-t)+t;for(let H=0;H<=s;H++){let z=H/s,W=z*l+o,J=Math.sin(W),X=Math.cos(W);C.x=P*J,C.y=-M*n+f,C.z=P*X,h.push(C.x,C.y,C.z),y.set(J,A,X).normalize(),p.push(y.x,y.y,y.z),m.push(z,1-M),w.push(_++)}g.push(w)}for(let R=0;R<s;R++)for(let w=0;w<r;w++){let M=g[w][R],P=g[w+1][R],H=g[w+1][R+1],z=g[w][R+1];(t>0||w!==0)&&(d.push(M,P,z),T+=3),(e>0||w!==r-1)&&(d.push(P,H,z),T+=3)}c.addGroup(u,T,0),u+=T}function S(y){let C=_,T=new ct,A=new L,R=0,w=y===!0?t:e,M=y===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,f*M,0),p.push(0,M,0),m.push(.5,.5),_++;let P=_;for(let H=0;H<=s;H++){let W=H/s*l+o,J=Math.cos(W),X=Math.sin(W);A.x=w*X,A.y=f*M,A.z=w*J,h.push(A.x,A.y,A.z),p.push(0,M,0),T.x=J*.5+.5,T.y=X*.5*M+.5,m.push(T.x,T.y),_++}for(let H=0;H<s;H++){let z=C+H,W=P+H;y===!0?d.push(W,W+1,z):d.push(W+1,W,z),R+=3}c.addGroup(u,R,y===!0?1:2),u+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zn=class i extends Te{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oo=class i extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let S=new L,y=new L,C=new L;for(let T=0;T<e.length;T+=3)m(e[T+0],S),m(e[T+1],y),m(e[T+2],C),l(S,y,C,x)}function l(x,S,y,C){let T=C+1,A=[];for(let R=0;R<=T;R++){A[R]=[];let w=x.clone().lerp(y,R/T),M=S.clone().lerp(y,R/T),P=T-R;for(let H=0;H<=P;H++)H===0&&R===T?A[R][H]=w:A[R][H]=w.clone().lerp(M,H/P)}for(let R=0;R<T;R++)for(let w=0;w<2*(T-R)-1;w++){let M=Math.floor(w/2);w%2===0?(p(A[R][M+1]),p(A[R+1][M]),p(A[R][M])):(p(A[R][M+1]),p(A[R+1][M+1]),p(A[R+1][M]))}}function c(x){let S=new L;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(x),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function d(){let x=new L;for(let S=0;S<r.length;S+=3){x.x=r[S+0],x.y=r[S+1],x.z=r[S+2];let y=f(x)/2/Math.PI+.5,C=u(x)/Math.PI+.5;a.push(y,1-C)}_(),h()}function h(){for(let x=0;x<a.length;x+=6){let S=a[x+0],y=a[x+2],C=a[x+4],T=Math.max(S,y,C),A=Math.min(S,y,C);T>.9&&A<.1&&(S<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),C<.2&&(a[x+4]+=1))}}function p(x){r.push(x.x,x.y,x.z)}function m(x,S){let y=x*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function _(){let x=new L,S=new L,y=new L,C=new L,T=new ct,A=new ct,R=new ct;for(let w=0,M=0;w<r.length;w+=9,M+=6){x.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),T.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),R.set(a[M+4],a[M+5]),C.copy(x).add(S).add(y).divideScalar(3);let P=f(C);g(T,M+0,x,P),g(A,M+2,S,P),g(R,M+4,y,P)}}function g(x,S,y,C){C<0&&x.x===1&&(a[S]=x.x-1),y.x===0&&y.z===0&&(a[S]=C/2/Math.PI+.5)}function f(x){return Math.atan2(x.z,-x.x)}function u(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},fs=class i extends Oo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var wr=class i extends ye{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],d=[],h=t,p=(e-t)/s,m=new L,_=new ct;for(let g=0;g<=s;g++){for(let f=0;f<=n;f++){let u=r+f/n*a;m.x=h*Math.cos(u),m.y=h*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,d.push(_.x,_.y)}h+=p}for(let g=0;g<s;g++){let f=g*(n+1);for(let u=0;u<n;u++){let x=u+f,S=x,y=x+n+1,C=x+n+2,T=x+1;o.push(S,y,T),o.push(y,C,T)}}this.setIndex(o),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ie=class i extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,d=[],h=new L,p=new L,m=[],_=[],g=[],f=[];for(let u=0;u<=n;u++){let x=[],S=u/n,y=0;u===0&&a===0?y=.5/e:u===n&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){let T=C/e;h.x=-t*Math.cos(s+T*r)*Math.sin(a+S*o),h.y=t*Math.cos(a+S*o),h.z=t*Math.sin(s+T*r)*Math.sin(a+S*o),_.push(h.x,h.y,h.z),p.copy(h).normalize(),g.push(p.x,p.y,p.z),f.push(T+y,1-S),x.push(c++)}d.push(x)}for(let u=0;u<n;u++)for(let x=0;x<e;x++){let S=d[u][x+1],y=d[u][x],C=d[u+1][x],T=d[u+1][x+1];(u!==0||a>0)&&m.push(S,y,T),(u!==n-1||l<Math.PI)&&m.push(y,C,T)}this.setIndex(m),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(g,3)),this.setAttribute("uv",new Qt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ki=class i extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],d=new L,h=new L,p=new L;for(let m=0;m<=n;m++)for(let _=0;_<=s;_++){let g=_/s*r,f=m/n*Math.PI*2;h.x=(t+e*Math.cos(f))*Math.cos(g),h.y=(t+e*Math.cos(f))*Math.sin(g),h.z=e*Math.sin(f),o.push(h.x,h.y,h.z),d.x=t*Math.cos(g),d.y=t*Math.sin(g),p.subVectors(h,d).normalize(),l.push(p.x,p.y,p.z),c.push(_/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=s;_++){let g=(s+1)*m+_-1,f=(s+1)*(m-1)+_-1,u=(s+1)*(m-1)+_,x=(s+1)*m+_;a.push(g,f,x),a.push(f,u,x)}this.setIndex(a),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Bt=class extends Sn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Zs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function lg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Bi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ko=class extends Bi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rl,endingEnd:Rl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Il:r=t,o=2*e-n;break;case Pl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Il:a=t,l=2*n-e;break;case Pl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),g=_*_,f=g*_,u=-p*f+2*p*g-p*_,x=(1+p)*f+(-1.5-2*p)*g+(-.5+p)*_+1,S=(-1-m)*f+(1.5+m)*g+.5*_,y=m*f-m*g;for(let C=0;C!==o;++C)r[C]=u*a[d+C]+x*a[c+C]+S*a[l+C]+y*a[h+C];return r}},Bo=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=(n-e)/(s-e),h=1-d;for(let p=0;p!==o;++p)r[p]=a[c+p]*h+a[l+p]*d;return r}},zo=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ke=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zs(e,this.TimeBufferType),this.values=Zs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zs(t.times,Array),values:Zs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ko(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case er:e=this.InterpolantFactoryMethodDiscrete;break;case oo:e=this.InterpolantFactoryMethodLinear;break;case Vr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return oo;case this.InterpolantFactoryMethodSmooth:return Vr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&lg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],d=t[o+1];if(c!==d&&(o!==1||c!==t[0]))if(s)l=!0;else{let h=o*n,p=h-n,m=h+n;for(let _=0;_!==n;++_){let g=e[h+_];if(g!==e[p+_]||g!==e[m+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*n,p=a*n;for(let m=0;m!==n;++m)e[p+m]=e[h+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ke.prototype.TimeBufferType=Float32Array;Ke.prototype.ValueBufferType=Float32Array;Ke.prototype.DefaultInterpolation=oo;var si=class extends Ke{constructor(t,e,n){super(t,e,n)}};si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=er;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends Ke{};Ho.prototype.ValueTypeName="color";var Vo=class extends Ke{};Vo.prototype.ValueTypeName="number";var Go=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let d=c+o;c!==d;c+=4)Bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Er=class extends Ke{InterpolantFactoryMethodLinear(t){return new Go(this.times,this.values,this.getValueSize(),t)}};Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends Ke{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=er;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends Ke{};Wo.prototype.ValueTypeName="vector";var Xo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){let h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,p=c.length;h<p;h+=2){let m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(d))return _}return null}}},cg=new Xo,qo=class{constructor(t){this.manager=t!==void 0?t:cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tr=class extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ps=class extends Tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ma=new ae,Ic=new L,Pc=new L,Yo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ic),Pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pc),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var $o=class extends Yo{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ms=class extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new $o}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var sl="\\[\\]\\.:\\/",hg=new RegExp("["+sl+"]","g"),rl="[^"+sl+"]",ug="[^"+sl.replace("\\.","")+"]",dg=/((?:WC+[\/:])*)/.source.replace("WC",rl),fg=/(WCOD+)?/.source.replace("WCOD",ug),pg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rl),mg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rl),gg=new RegExp("^"+dg+fg+pg+mg+"$"),_g=["material","materials","bones","map"],Zo=class{constructor(t,e,n){let s=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hg,"")}static parseTrackName(t){let e=gg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_g.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=Zo;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function nh(i){let t=i>>>0||1,e=()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return e.int=n=>Math.floor(e()*n),e.range=(n,s)=>n+e()*(s-n),e.pick=n=>n[e.int(n.length)],e}var I={map:{size:1200,snowPiles:40,pileRadius:15,pileCooldown:60,pileRespawnSec:45},player:{maxHp:100,radius:12,speed:150,coverSpeedMul:.6,jumpVel:46,gravity:100,jumpDodgeZ:5},items:{healSpawn:10,healAmount:40,healRespawnSec:50,shieldSpawn:6,shieldHits:4,shieldRespawnSec:60,pickupRange:26,pill:{spawn:14,respawnSec:45,durationSec:20,speedMul:1.35,powerMul:1.5,craftMul:.5,mgChance:.45,mgAmmo:75,mgFireInterval:.12,mgSpeed:540}},caps:{spawn:26,min:2,max:7,respawnSec:40,pickupRange:26},shop:{hardtack:{id:"hardtack",cost:10,name:"\uAC74\uBE75 \uD328\uD0A4\uC9C0",desc:"\uBA39\uC73C\uBA74 \uCCB4\uB825 +20, \uCD1D 3\uD68C \uC0AC\uC6A9",emoji:"\u{1F36A}",heals:3,healAmount:20},charge:{id:"charge",cost:40,name:"\uB3CC\uACA9 \uBB3C\uC57D",desc:"15\uCD08 \uBB34\uC801 \uB3CC\uACA9! \uBC15\uCE58\uAE30\uB85C \uC801\uC744 20m \uB0A0\uB824\uBC84\uB9BC",emoji:"\u2697\uFE0F",durationSec:15,ramRange:30,knockback:800,ramDamage:24,speedMul:1.6},sleepgun:{id:"sleepgun",cost:40,name:"\uC218\uBA74\uCD1D",desc:"\uB2E8 \uD55C \uBC1C \u2014 \uB9DE\uC740 \uC801\uC740 5\uCD08\uAC04 \uC7A0\uB4E6",emoji:"\u{1F52B}",sleepSec:5,speed:620,range:500},jetpack:{id:"jetpack",cost:60,name:"\uC62C\uB4DC \uC81C\uD2B8\uD329",desc:"\uC810\uD504\uD0A4\uB97C \uB204\uB974\uB294 \uB3D9\uC548 \uBE44\uD589 (\uC5F0\uB8CC 60\uCD08, \uD0A4 3\uBC30 \uB192\uC774)",emoji:"\u{1F680}",fuelSec:60,maxHeightMul:3,riseVel:55},grenade:{id:"grenade",cost:30,name:"\uB208 \uC218\uB958\uD0C4",desc:"\uB358\uC9C0\uBA74 \uBC18\uACBD \uD45C\uC2DC \uD6C4 3\uCD08 \uB4A4 \uD3ED\uBC1C (\uBC18\uACBD 60, \uD53C\uD574 40)",emoji:"\u{1F4A3}",fuseSec:3,radius:60,damage:40,throwRange:260},club:{id:"club",cost:20,name:"\uBABD\uB465\uC774",desc:"\uADFC\uC811 \uACF5\uACA9(F\uD0A4)\uC774 \uAC15\uD574\uC9C4\uB2E4 \u2014 \uC8FC\uBA39 10 \u2192 \uBABD\uB465\uC774 26 \uD53C\uD574",emoji:"\u{1F3CF}"}},melee:{range:36,arcDot:.35,cooldownSec:.6,fistDamage:10,clubDamage:26,clubKnockback:220,clubFieldSpawn:4},pads:{radius:14,launchVel:100,carryMul:2,spots:[[.5,.5],[.28,.28],[.72,.28],[.28,.72],[.72,.72],[.5,.15],[.85,.5],[.5,.85],[.15,.5]]},towers:{radius:22,height:26,spots:[[.44,.5],[.22,.28],[.78,.28],[.22,.72],[.78,.72],[.5,.09]]},craft:{seconds:3,yield:10,interactRange:34},throw:{minChargeMs:200,maxChargeMs:1500,minRange:100,maxRange:400,speed:320,damage:14,coverDamageMul:.5,radius:6,hitChanceBase:.5},wall:{cost:4,durability:3,maxPerPlayer:2,decaySec:14,len:40,dist:28,blockChance:.65},decoy:{cost:5,maxPerPlayer:2,lureSec:3,dist:40},zone:{firstShrinkSec:75,intervalSec:48,dps:10,finalRadius:40,startRadiusFactor:.72,shrinkStep:.26},match:{total:20,npc:19,warmupSec:45,engageRange:170,fleeRange:130,totalOptions:[10,20,30,40]},npcDifficulty:{easy:{accuracy:.34,reactSec:3.4,craftThreshold:5,aggro:.07,dodge:.15,strafe:.3,seekItem:.3},normal:{accuracy:.42,reactSec:2.8,craftThreshold:6,aggro:.09,dodge:.3,strafe:.55,seekItem:.55},hard:{accuracy:.6,reactSec:2,craftThreshold:7,aggro:.15,dodge:.5,strafe:.8,seekItem:.8}},session:{targetMinSec:480,targetMaxSec:720}},al=[{n:1,title:"\uB9C9 1 \u2014 \uB099\uD558\uC640 \uCCAB \uB208\uBB49\uCE58 \uC81C\uC791",untilSurvivors:20},{n:2,title:"\uB9C9 2 \u2014 \uB208\uBB49\uCE58 \uAD50\uC804\uACFC \uC7AC\uBCF4\uAE09",untilSurvivors:15},{n:3,title:"\uB9C9 3 \u2014 \uC124\uBCBD \uAC74\uC124\uACFC \uC81C\uC791 \uC5C4\uD3D0",untilSurvivors:10},{n:4,title:"\uB9C9 4 \u2014 \uC881\uC544\uC9C0\uB294 \uB208\uBCF4\uB77C \uAD6C\uC5ED",untilSurvivors:5},{n:5,title:"\uB9C9 5 \u2014 \uCD5C\uD6C4\uC758 \uB208\uC2F8\uC6C0",untilSurvivors:1}];function ol(i){for(let t of al)if(i>=t.untilSurvivors)return t;return al[al.length-1]}var Hn={jack:{id:"jack",skin:"jack",name:"\uC544\uC774\uC5B8 \uC7AD \u2014 \uBC38\uB7F0\uC2A4",desc:"\uADE0\uD615 \uC7A1\uD78C \uB9CC\uB2A5\uD615. \uBAA8\uB4E0 \uB2A5\uB825\uCE58 \uD45C\uC900.",throwRangeMul:1,damageMul:1,speedMul:1,craftSecMul:1,maxHpMul:1},white:{id:"white",skin:"white",name:"\uD654\uC774\uD2B8 \uC544\uC774 \u2014 \uC800\uACA9\uC218",desc:"\uD22C\uCC99 \uC0AC\uAC70\uB9AC +30%, \uD53C\uD574 +15%. \uB300\uC2E0 \uCCB4\uB825 -20%.",throwRangeMul:1.3,damageMul:1.15,speedMul:1,craftSecMul:1,maxHpMul:.8},bear:{id:"bear",skin:"bear",name:"\uBE45 \uBCA0\uC5B4 \u2014 \uD0F1\uCEE4",desc:"\uCCB4\uB825 +30%, \uC81C\uC791 20% \uBE60\uB984. \uB300\uC2E0 \uC774\uB3D9 -15%, \uC0AC\uAC70\uB9AC -10%.",throwRangeMul:.9,damageMul:1,speedMul:.85,craftSecMul:.8,maxHpMul:1.3},dash:{id:"dash",skin:"white",name:"\uC2A4\uB178\uC6B0 \uB7EC\uB108 \u2014 \uC9C8\uC8FC\uD615",desc:"\uC774\uB3D9 +25%. \uB300\uC2E0 \uD53C\uD574 -15%.",throwRangeMul:1,damageMul:.85,speedMul:1.25,craftSecMul:1,maxHpMul:1}};var yg=1,ve=()=>yg++;function _s(i=42,t={}){let e=nh(i),n={seed:i,rng:e,t:0,phase:"drop",over:!1,won:!1,winner:null,difficulty:t.difficulty||"normal",players:[],snowballs:[],walls:[],decoys:[],piles:[],obstacles:[],corpses:[],pickups:[],caps:[],grenades:[],zone:{cx:I.map.size/2,cy:I.map.size/2,radius:I.map.size*I.zone.startRadiusFactor,nextShrink:I.zone.firstShrinkSec,shrinks:0},events:[],placementOrder:[],kills:{},_humanId:t.humanId??1,stats:{craftAttempts:0,craftDone:0,craftCancel:0,throws:0,hits:0,wallsBuilt:0,decoys:0,zoneDamageTicks:0,zoneDamageTotal:0,totalDamage:0}};return Cg(n),Ag(n),wg(n),Eg(n),vg(n),Mg(n),Rg(n,t),t.itemId&&Sg(n,rn(n),t.itemId),dl(n,rn(n),t.classId),n}function vg(i){let t=I.map.size;for(let e=0;e<I.items.healSpawn;e++)i.pickups.push({id:ve(),kind:"heal",x:i.rng.range(80,t-80),y:i.rng.range(80,t-80),takenUntil:0});for(let e=0;e<I.items.shieldSpawn;e++)i.pickups.push({id:ve(),kind:"shield",x:i.rng.range(80,t-80),y:i.rng.range(80,t-80),takenUntil:0});for(let e=0;e<I.items.pill.spawn;e++)i.pickups.push({id:ve(),kind:"pill",x:i.rng.range(80,t-80),y:i.rng.range(80,t-80),takenUntil:0,buff:null});for(let e of i.pickups)e.kind==="pill"&&(e.buff=ll(i));for(let e=0;e<I.melee.clubFieldSpawn;e++)i.pickups.push({id:ve(),kind:"club",x:i.rng.range(80,t-80),y:i.rng.range(80,t-80),takenUntil:0})}function Mg(i){let t=I.map.size;for(let e=0;e<I.caps.spawn;e++)i.caps.push({id:ve(),x:i.rng.range(70,t-70),y:i.rng.range(70,t-70),amount:Math.floor(i.rng.range(I.caps.min,I.caps.max+1)),takenUntil:0,dropped:!1})}function cl(i,t){for(let e of i.caps){if(e.takenUntil>i.t||e.gone||Math.hypot(e.x-t.x,e.y-t.y)>I.caps.pickupRange)continue;let n=e.amount;return t.caps=(t.caps||0)+n,e.dropped?e.gone=!0:(e.takenUntil=i.t+I.caps.respawnSec,e.x=i.rng.range(70,I.map.size-70),e.y=i.rng.range(70,I.map.size-70),e.amount=Math.floor(i.rng.range(I.caps.min,I.caps.max+1))),i.events.push({t:i.t,type:"caps",id:t.id,amount:n}),n}return 0}function Sg(i,t,e){if(!t||!I.shop[e])return!1;if(e==="club")return t.hasClub=!0,!0;let n=I.shop[e];return t.item={id:e,usesLeft:e==="hardtack"?n.heals:1},e==="jetpack"&&(t.jetFuel=n.fuelSec),!0}function ih(i,t,e=t.aim){if(!t.alive||t.crafting||t.sleepUntil>i.t||t.meleeCdUntil!=null&&i.t<t.meleeCdUntil)return null;t.meleeCdUntil=i.t+I.melee.cooldownSec;let n=Math.cos(e),s=Math.sin(e),r=null,a=I.melee.range;for(let l of i.players){if(!l.alive||l.id===t.id)continue;let c=l.x-t.x,d=l.y-t.y,h=Math.hypot(c,d);h>I.melee.range||h>.001&&(c*n+d*s)/h<I.melee.arcDot||h<a+.001&&(a=h,r=l)}if(i.events.push({t:i.t,type:"swing",id:t.id,club:!!t.hasClub,hit:!!r}),!r)return null;let o=t.hasClub?I.melee.clubDamage:I.melee.fistDamage;if(Ir(i,r,o,t.id),r.crafting&&ai(i,r,"melee"),t.hasClub&&r.alive){let l=Math.atan2(r.y-t.y,r.x-t.x);r.kbVx=Math.cos(l)*I.melee.clubKnockback,r.kbVy=Math.sin(l)*I.melee.clubKnockback}return r.alive||(i.kills[t.id]=(i.kills[t.id]||0)+1,i.events.push({t:i.t,type:"kill",by:t.id,victim:r.id})),r}function sh(i,t,e=t.aim){if(!t.alive||t.crafting||!t.item||t.item.usesLeft<=0)return null;let n=I.shop[t.item.id];if(t.item.id==="hardtack"){let s=t.maxHp||I.player.maxHp;return t.hp>=s?null:(an(i,t,Math.min(s,t.hp+n.healAmount)),t.item.usesLeft--,i.events.push({t:i.t,type:"item",id:t.id,item:"hardtack",left:t.item.usesLeft}),t.item.usesLeft<=0&&(t.item=null),{used:"hardtack"})}if(t.item.id==="charge")return t.chargeUntil=i.t+n.durationSec,t.item.usesLeft=0,t.item=null,i.events.push({t:i.t,type:"item",id:t.id,item:"charge"}),{used:"charge"};if(t.item.id==="sleepgun"){let s={id:ve(),ownerId:t.id,isNpc:t.isNpc,x:t.x,y:t.y,dirX:Math.cos(e),dirY:Math.sin(e),traveled:0,range:n.range,speed:n.speed,dead:!1,dmgMul:0,sleep:n.sleepSec,flat:!0,high:t.z>=I.towers.height-2};return i.snowballs.push(s),t.item.usesLeft=0,t.item=null,i.events.push({t:i.t,type:"item",id:t.id,item:"sleepgun"}),{used:"sleepgun",sb:s}}if(t.item.id==="grenade"){let s=Math.min(n.throwRange,260),r=t.x+Math.cos(e)*s,a=t.y+Math.sin(e)*s,o=.9;return i.grenades.push({id:ve(),ownerId:t.id,sx:t.x,sy:t.y,x:t.x,y:t.y,z:bg,lx:Math.max(0,Math.min(I.map.size,r)),ly:Math.max(0,Math.min(I.map.size,a)),landAt:i.t+o,explodeAt:i.t+o+n.fuseSec,radius:n.radius,damage:n.damage,thrownAt:i.t}),t.item.usesLeft=0,t.item=null,i.events.push({t:i.t,type:"item",id:t.id,item:"grenade"}),{used:"grenade"}}return null}var bg=14;function Vn(i,t){return t.chargeUntil!=null&&t.chargeUntil>i.t}function wg(i){let t=I.map.size;i.pads=I.pads.spots.map(([e,n])=>({id:ve(),x:e*t,y:n*t,r:I.pads.radius}))}function Eg(i){let t=I.map.size;i.towers=I.towers.spots.map(([e,n])=>({id:ve(),x:e*t,y:n*t,r:I.towers.radius,h:I.towers.height}))}function Vi(i,t,e){for(let n of i.towers||[])if(Math.hypot(n.x-t,n.y-e)<=n.r)return n.h;return 0}function ll(i){let t=I.items.pill;if(i.rng()<t.mgChance)return{kind:"mg",ammo:t.mgAmmo};let e=i.rng();return e<1/3?{kind:"speed",mul:t.speedMul}:e<2/3?{kind:"power",mul:t.powerMul}:{kind:"craft",mul:t.craftMul}}function Tg(i,t,e){return e.kind==="mg"?t.mg={ammo:e.ammo,until:i.t+I.items.pill.durationSec,fireCd:0}:t.buff={kind:e.kind,mul:e.mul,until:i.t+I.items.pill.durationSec},i.events.push({t:i.t,type:"pill",id:t.id,buff:e.kind}),e}function hl(i,t,e){return t.buff&&t.buff.kind===e&&t.buff.until>i.t?t.buff.mul:1}function ul(i,t,e){let n=I.items.pill;if(!t.alive||t.crafting||!t.mg||t.mg.until<=i.t||t.mg.ammo<=0||t.mg.fireCd>0)return null;t.mg.ammo--,t.mg.fireCd=n.mgFireInterval;let s={id:ve(),ownerId:t.id,isNpc:t.isNpc,x:t.x,y:t.y,dirX:Math.cos(e),dirY:Math.sin(e),traveled:0,range:I.throw.maxRange*1.1,speed:n.mgSpeed,dead:!1,dmgMul:t.mods&&t.mods.damage||1,flat:!0,high:t.z>=I.towers.height-2};return i.snowballs.push(s),i.stats.throws++,t.mg.ammo<=0&&(t.mg=null),s}function dl(i,t,e){if(!t)return;let n=Hn[e]||Hn.jack;t.classId=n.id,t.skin=t.isHuman?n.skin:t.skin,t.mods={throwRange:n.throwRangeMul,damage:n.damageMul,speed:n.speedMul,craftSec:n.craftSecMul},t.hp=Math.round(I.player.maxHp*n.maxHpMul),t.maxHp=t.hp}function Pr(i,t){for(let e of i.pickups)if(!(e.takenUntil>i.t)&&!(Math.hypot(e.x-t.x,e.y-t.y)>I.items.pickupRange)){if(e.kind==="heal"){let n=t.maxHp||I.player.maxHp;if(t.hp>=n)continue;return an(i,t,Math.min(n,t.hp+I.items.healAmount)),e.takenUntil=i.t+I.items.healRespawnSec,e.x=i.rng.range(80,I.map.size-80),e.y=i.rng.range(80,I.map.size-80),i.events.push({t:i.t,type:"heal",id:t.id}),"heal"}if(e.kind==="shield"){if(t.shieldHits>0)continue;return t.shieldHits=I.items.shieldHits,e.takenUntil=i.t+I.items.shieldRespawnSec,e.x=i.rng.range(80,I.map.size-80),e.y=i.rng.range(80,I.map.size-80),i.events.push({t:i.t,type:"shield",id:t.id}),"shield"}if(e.kind==="club"){if(t.hasClub)continue;return t.hasClub=!0,e.takenUntil=i.t+9e9,i.events.push({t:i.t,type:"club",id:t.id}),"club"}if(e.kind==="pill"){let n=Tg(i,t,e.buff||ll(i));return e.takenUntil=i.t+I.items.pill.respawnSec,e.x=i.rng.range(80,I.map.size-80),e.y=i.rng.range(80,I.map.size-80),e.buff=ll(i),{kind:"pill",buff:n}}}return null}function Ag(i){let t=I.map.size,e=[{kind:"rock",n:14,rMin:14,rMax:26},{kind:"tree",n:22,rMin:8,rMax:12},{kind:"cabin",n:6,rMin:30,rMax:40}];for(let n of e)for(let s=0;s<n.n;s++)i.obstacles.push({id:ve(),kind:n.kind,x:i.rng.range(70,t-70),y:i.rng.range(70,t-70),r:i.rng.range(n.rMin,n.rMax),yaw:i.rng.range(0,Math.PI*2)})}function Cg(i){let t=I.map.size;for(let e=0;e<I.map.snowPiles;e++)i.piles.push({id:ve(),x:i.rng.range(60,t-60),y:i.rng.range(60,t-60),cooldownUntil:0})}function Rg(i,t){let e=t.total??I.match.total,n=I.map.size,s=["jack","white","bear"],r=5,a=Math.ceil(e/r),o=n/r,l=n/a,c=[];for(let d=0;d<a;d++)for(let h=0;h<r;h++)c.push([h,d]);for(let d=0;d<e;d++){let h=!t.allNpc&&d===0,p=i._humanId!=null&&h?i._humanId:ve(),[m,_]=c[d%c.length],g={id:p,isHuman:h,isNpc:!h,name:h?"\uC544\uC774\uC5B8 \uC7AD":`[\uBD07] ${["\uADF8\uB808\uC774","\uD504\uB85C\uC2A4\uD2B8","\uC544\uC774\uC2DC\uD074","\uBE14\uB9AC\uC790\uB4DC"][d%4]}-${d}`,skin:h?"jack":d%3===0?"bot":s[d%3],hp:I.player.maxHp,alive:!0,x:Math.min(n-40,Math.max(40,m*o+o/2+i.rng.range(-o*.3,o*.3))),y:Math.min(n-40,Math.max(40,_*l+l/2+i.rng.range(-l*.3,l*.3))),aim:i.rng.range(0,Math.PI*2),snowballs:0,crafting:!1,craftTimer:0,craftPile:null,cover:!1,walls:0,decoys:0,maxHp:I.player.maxHp,shieldHits:0,z:0,vz:0,mvx:0,mvy:0,padVx:0,padVy:0,caps:0,item:null,jetFuel:0,jetHold:!1,sleepUntil:0,chargeUntil:0,kbVx:0,kbVy:0,mods:{throwRange:1,damage:1,speed:1,craftSec:1},npc:h?null:{state:"PATROL",target:null,reactTimer:0,moveTx:0,moveTy:0,wantCraft:!1,aimError:0},diff:i.difficulty};i.kills[p]=0,i.players.push(g)}}function an(i,t,e){let n=Math.max(0,Math.min(t.maxHp||I.player.maxHp,e)),s=t.hp-n;return t.hp=n,n<=0&&t.alive&&Ig(i,t),s}function Ir(i,t,e,n=null){if(Vn(i,t))return 0;if(t.shieldHits>0)return t.shieldHits--,i.events.push({t:i.t,type:"shieldBlock",id:t.id,left:t.shieldHits}),0;let s=t.cover?e*I.throw.coverDamageMul:e,r=t.hp;return an(i,t,t.hp-s),i.stats.totalDamage+=r-t.hp,r-t.hp}function Lr(i,t){return i.snowballs=Math.max(0,i.snowballs+t),i.snowballs}function fl(i,t){if(t.sleepUntil>i.t)return!1;let e=Vi(i,t.x,t.y);return!t.alive||t.crafting||t.z>e+.01?!1:(t.vz=I.player.jumpVel,t.z=e+.011,i.events.push({t:i.t,type:"jump",id:t.id}),!0)}function Ig(i,t){t.alive&&(t.alive=!1,t.crafting=!1,t.caps>0&&(i.caps.push({id:ve(),x:t.x,y:t.y,amount:t.caps,takenUntil:0,dropped:!0}),t.caps=0),i.placementOrder.push(t.id),i.corpses.push({id:t.id,x:t.x,y:t.y,skin:t.skin,name:t.name,at:i.t,yaw:t.aim}),i.events.push({t:i.t,type:"eliminate",id:t.id,isNpc:t.isNpc,place:Gi(i)+1}),Pg(i))}function Gi(i){return i.players.filter(t=>t.alive).length}function rn(i){return i.players.find(t=>t.id===i._humanId)}function Pg(i){let t=i.players.filter(e=>e.alive);if(t.length<=1){i.phase="over",i.over=!0,i.winner=t[0]||null,i.winner&&i.placementOrder.push(i.winner.id);let e=rn(i);i.won=!!(i.winner&&e&&i.winner.id===e.id),i.events.push({t:i.t,type:"gameover",winnerId:i.winner?i.winner.id:null,humanWon:i.won})}}function Dr(i,t,e=I.craft.interactRange){let n=null,s=e;for(let r of i.piles){if(r.cooldownUntil>i.t)continue;let a=Math.hypot(r.x-t.x,r.y-t.y);a<=s&&(s=a,n=r)}return n}function Ur(i,t){if(!t.alive||t.crafting)return!1;let e=Dr(i,t);return e?(t.crafting=!0,t.craftTimer=I.craft.seconds*(t.mods&&t.mods.craftSec||1)*hl(i,t,"craft"),t.craftPile=e.id,i.stats.craftAttempts++,i.events.push({t:i.t,type:"craftStart",id:t.id}),!0):!1}function ai(i,t,e="move"){t.crafting&&(t.crafting=!1,t.craftTimer=0,t.craftPile=null,i.stats.craftCancel++,i.events.push({t:i.t,type:"craftCancel",id:t.id,reason:e}))}function Lg(i,t){Lr(t,I.craft.yield);let e=i.piles.find(n=>n.id===t.craftPile);e&&(e.cooldownUntil=i.t+I.map.pileCooldown),t.crafting=!1,t.craftTimer=0,t.craftPile=null,i.stats.craftDone++,i.events.push({t:i.t,type:"craftDone",id:t.id})}function pl(i,t,e,n){if(!t.alive||t.crafting||t.snowballs<=0)return null;Lr(t,-1);let s=(I.throw.minRange+(I.throw.maxRange-I.throw.minRange)*Math.max(0,Math.min(1,n)))*(t.mods&&t.mods.throwRange||1),r={id:ve(),ownerId:t.id,isNpc:t.isNpc,x:t.x,y:t.y,dirX:Math.cos(e),dirY:Math.sin(e),traveled:0,range:s,speed:I.throw.speed,dead:!1,dmgMul:(t.mods&&t.mods.damage||1)*hl(i,t,"power"),high:t.z>=I.towers.height-2};return i.snowballs.push(r),i.stats.throws++,i.events.push({t:i.t,type:"throw",id:t.id,charge:n}),r}function Wi(i){return(Math.max(I.throw.minChargeMs,Math.min(I.throw.maxChargeMs,i))-I.throw.minChargeMs)/(I.throw.maxChargeMs-I.throw.minChargeMs)}function rh(i){return I.throw.minRange+(I.throw.maxRange-I.throw.minRange)*Math.max(0,Math.min(1,i))}function ah(i,t){if(!t.alive||t.crafting||t.snowballs<I.wall.cost||t.walls>=I.wall.maxPerPlayer)return null;Lr(t,-I.wall.cost);let e=t.x+Math.cos(t.aim)*I.wall.dist,n=t.y+Math.sin(t.aim)*I.wall.dist,s={id:ve(),ownerId:t.id,x:e,y:n,angle:t.aim+Math.PI/2,hp:I.wall.durability,decayAt:i.t+I.wall.decaySec};return i.walls.push(s),t.walls++,i.stats.wallsBuilt++,i.events.push({t:i.t,type:"wall",id:t.id}),s}function oh(i,t){if(!t.alive||t.crafting||t.snowballs<I.decoy.cost||t.decoys>=I.decoy.maxPerPlayer)return null;Lr(t,-I.decoy.cost);let e=t.x+Math.cos(t.aim)*I.decoy.dist,n=t.y+Math.sin(t.aim)*I.decoy.dist,s={id:ve(),ownerId:t.id,x:e,y:n,until:i.t+I.decoy.lureSec,alive:!0};return i.decoys.push(s),t.decoys++,i.stats.decoys++,i.events.push({t:i.t,type:"decoy",id:t.id}),s}function Dg(i,t,e,n,s){let r=I.wall.len/2,a=i.x+Math.cos(i.angle)*r,o=i.y+Math.sin(i.angle)*r,l=i.x-Math.cos(i.angle)*r,c=i.y-Math.sin(i.angle)*r;return Ug(t,e,n,s,a,o,l,c)}function Ug(i,t,e,n,s,r,a,o){let l=(e-i)*(o-r)-(n-t)*(a-s);if(Math.abs(l)<1e-9)return!1;let c=((s-i)*(o-r)-(r-t)*(a-s))/l,d=((s-i)*(n-t)-(r-t)*(e-i))/l;return c>=0&&c<=1&&d>=0&&d<=1}function xs(i,t){if(i.over)return;i.t+=t,i.t>=i.zone.nextShrink&&i.zone.radius>I.zone.finalRadius&&(i.zone.radius=Math.max(I.zone.finalRadius,i.zone.radius*(1-I.zone.shrinkStep*.5)),i.zone.nextShrink=i.t+I.zone.intervalSec,i.zone.shrinks++,i.events.push({t:i.t,type:"zoneShrink",radius:i.zone.radius}));for(let s of i.piles)if(s.cooldownUntil>0&&i.t>=s.cooldownUntil){let r=i.rng.range(0,Math.PI*2),a=i.rng.range(0,i.zone.radius*.85);s.x=i.zone.cx+Math.cos(r)*a,s.y=i.zone.cy+Math.sin(r)*a,s.cooldownUntil=0,i.events.push({t:i.t,type:"pileRespawn",id:s.id})}for(let s of i.players){if(!s.alive||!s.isNpc)continue;let r=s.npc;(r&&r.itemUntil>i.t||i.rng()<.003)&&Pr(i,s),i.rng()<.02&&cl(i,s)}for(let s of i.players){if(!s.alive)continue;let r=Vi(i,s.x,s.y);if(s.item&&s.item.id==="jetpack"&&s.jetHold&&s.jetFuel>0&&s.alive&&!s.crafting&&s.sleepUntil<=i.t){let l=r+I.player.radius*2*I.shop.jetpack.maxHeightMul;s.jetFuel=Math.max(0,s.jetFuel-t),s.z<l&&(s.z=Math.min(l,s.z+I.shop.jetpack.riseVel*t),s.vz=0),s.jetFuel<=0&&i.events.push({t:i.t,type:"jetEmpty",id:s.id})}(s.kbVx||s.kbVy)&&(s.x=Math.max(0,Math.min(I.map.size,s.x+s.kbVx*t)),s.y=Math.max(0,Math.min(I.map.size,s.y+s.kbVy*t)),s.kbVx*=Math.pow(.02,t),s.kbVy*=Math.pow(.02,t),Math.abs(s.kbVx)<2&&Math.abs(s.kbVy)<2&&(s.kbVx=0,s.kbVy=0));let a=Vi(i,s.x,s.y);if(s.z>a+.001||s.vz!==0){s.vz-=I.player.gravity*t,s.z+=s.vz*t,(s.padVx||s.padVy)&&(s.x=Math.max(0,Math.min(I.map.size,s.x+s.padVx*t)),s.y=Math.max(0,Math.min(I.map.size,s.y+s.padVy*t)));let l=Vi(i,s.x,s.y);s.z<=l&&s.vz<0&&(s.z=l,s.vz=0,s.padVx=0,s.padVy=0)}else s.z!==a&&(s.z=a);if(s.alive&&s.z<=a+.1&&s.vz===0)for(let l of i.pads){if(Math.hypot(l.x-s.x,l.y-s.y)>l.r)continue;s.crafting&&ai(i,s,"pad"),s.vz=I.pads.launchVel,s.z=a+.02;let c=Math.hypot(s.mvx||0,s.mvy||0);s.padVx=c>.01?s.mvx/c*I.player.speed*I.pads.carryMul:0,s.padVy=c>.01?s.mvy/c*I.player.speed*I.pads.carryMul:0,i.events.push({t:i.t,type:"pad",id:s.id});break}if(s.mg&&(s.mg.fireCd>0&&(s.mg.fireCd-=t),s.mg.until<=i.t&&(s.mg=null)),s.buff&&s.buff.until<=i.t&&(s.buff=null),s.crafting&&(s.craftTimer-=t,s.craftTimer<=0&&Lg(i,s)),s.isNpc&&ml(i,s,t),Math.hypot(s.x-i.zone.cx,s.y-i.zone.cy)>i.zone.radius){let l=I.zone.dps*t,c=s.hp;an(i,s,s.hp-l),i.stats.zoneDamageTicks++,i.stats.zoneDamageTotal+=c-s.hp}}for(let s of i.players)if(!(!s.alive||!Vn(i,s)))for(let r of i.players){if(!r.alive||r.id===s.id||Vn(i,r)||Math.hypot(r.x-s.x,r.y-s.y)>I.shop.charge.ramRange||r._lastRamAt!=null&&i.t-r._lastRamAt<.8)continue;r._lastRamAt=i.t;let o=Math.atan2(r.y-s.y,r.x-s.x);r.kbVx=Math.cos(o)*I.shop.charge.knockback,r.kbVy=Math.sin(o)*I.shop.charge.knockback,r.vz=30,r.z=Math.max(r.z,Vi(i,r.x,r.y)+.02),Ir(i,r,I.shop.charge.ramDamage,s.id),r.crafting&&ai(i,r,"ram"),r.alive||(i.kills[s.id]=(i.kills[s.id]||0)+1,i.events.push({t:i.t,type:"kill",by:s.id,victim:r.id})),i.events.push({t:i.t,type:"ram",by:s.id,victim:r.id})}for(let s of i.grenades)if(!s.exploded){if(i.t<s.landAt){let r=1-(s.landAt-i.t)/.9;s.x=s.sx+(s.lx-s.sx)*r,s.y=s.sy+(s.ly-s.sy)*r,s.z=14+Math.sin(r*Math.PI)*40}else s.x=s.lx,s.y=s.ly,s.z=0;if(i.t>=s.explodeAt){s.exploded=!0;for(let r of i.players){if(!r.alive)continue;let a=Math.hypot(r.x-s.lx,r.y-s.ly);if(a>s.radius)continue;let o=Ir(i,r,s.damage*(1-a/s.radius*.5),s.ownerId);r.crafting&&ai(i,r,"grenade"),!r.alive&&o>0&&s.ownerId!==r.id&&(i.kills[s.ownerId]=(i.kills[s.ownerId]||0)+1,i.events.push({t:i.t,type:"kill",by:s.ownerId,victim:r.id}))}i.events.push({t:i.t,type:"boom",x:s.lx,y:s.ly,r:s.radius})}}i.grenades=i.grenades.filter(s=>!s.exploded||i.t<s.explodeAt+.6);for(let s of i.snowballs){if(s.dead)continue;let r=s.speed*t,a=s.x+s.dirX*r,o=s.y+s.dirY*r,l=!1;for(let h of i.walls)if(h.ownerId!==s.ownerId&&Dg(h,s.x,s.y,a,o)){i.rng()<I.wall.blockChance&&(h.hp--,l=!0,h.hp<=0&&(h.dead=!0));break}if(l){s.dead=!0;continue}let c=!1;for(let h of i.obstacles)if(Math.hypot(h.x-a,h.y-o)<h.r){c=!0;break}if(!c&&!s.high){for(let h of i.towers||[])if(Math.hypot(h.x-a,h.y-o)<h.r){c=!0;break}}if(c){s.dead=!0;continue}let d=!1;for(let h of i.decoys)if(!(!h.alive||h.ownerId===s.ownerId)&&Math.hypot(h.x-a,h.y-o)<14){h.alive=!1,d=!0;break}if(d){s.dead=!0;continue}for(let h of i.players)if(!(!h.alive||h.id===s.ownerId)&&!(h.z-Vi(i,h.x,h.y)>I.player.jumpDodgeZ)&&Math.hypot(h.x-a,h.y-o)<I.player.radius+I.throw.radius){if(s.sleep){h.sleepUntil=i.t+s.sleep,h.crafting&&ai(i,h,"sleep"),i.events.push({t:i.t,type:"sleep",by:s.ownerId,victim:h.id,sec:s.sleep}),s.dead=!0;break}Ir(i,h,I.throw.damage*(s.dmgMul||1),s.ownerId)>0&&(i.stats.hits++,i.kills[s.ownerId]=i.kills[s.ownerId]||0),h.crafting&&ai(i,h,"hit"),h.alive||(i.kills[s.ownerId]=(i.kills[s.ownerId]||0)+1,i.events.push({t:i.t,type:"kill",by:s.ownerId,victim:h.id})),s.dead=!0;break}s.x=a,s.y=o,s.traveled+=r,s.traveled>=s.range&&(s.dead=!0)}i.snowballs=i.snowballs.filter(s=>!s.dead);for(let s of i.walls)s.dead||i.t>=s.decayAt&&(s.dead=!0);i.walls=i.walls.filter(s=>!s.dead),i.decoys=i.decoys.filter(s=>s.alive&&s.until>i.t-.001?!0:s.until>i.t),i.decoys=i.decoys.filter(s=>s.alive&&s.until>i.t);let e={},n={};for(let s of i.walls)e[s.ownerId]=(e[s.ownerId]||0)+1;for(let s of i.decoys)n[s.ownerId]=(n[s.ownerId]||0)+1;for(let s of i.players)s.walls=e[s.id]||0,s.decoys=n[s.id]||0;i.phase==="drop"&&i.t>0&&(i.phase="play")}function Ge(i,t,e,n,s){if(!t.alive||t.crafting||t.sleepUntil>i.t)return;let r=Math.hypot(e,n)||1;t.mvx=e/r,t.mvy=n/r;let a=Vn(i,t)?I.shop.charge.speedMul:1,o=I.player.speed*(t.mods&&t.mods.speed||1)*hl(i,t,"speed")*a*(t.cover?I.player.coverSpeedMul:1)*s,l=Math.max(0,Math.min(I.map.size,t.x+t.mvx*o)),c=Math.max(0,Math.min(I.map.size,t.y+t.mvy*o));if(t.z<=2)for(let d of i.obstacles){let h=d.r+I.player.radius*.6,p=l-d.x,m=c-d.y,_=Math.hypot(p,m);if(_<h&&_>.001){let g=d.x+p/_*h,f=d.y+m/_*h;Math.hypot(g-t.x,f-t.y)<=o*2+2?(l=g,c=f):(l=t.x,c=t.y)}}for(let d of i.towers||[]){if(t.z>=d.h-.5)continue;let h=d.r+I.player.radius*.4,p=l-d.x,m=c-d.y,_=Math.hypot(p,m);_<h&&_>.001&&(l=d.x+p/_*h,c=d.y+m/_*h)}t.x=Math.max(0,Math.min(I.map.size,l)),t.y=Math.max(0,Math.min(I.map.size,c))}function ml(i,t,e){if(t.sleepUntil>i.t){t.npc&&(t.npc.state="SLEEP");return}let n=I.npcDifficulty[t.diff]||I.npcDifficulty.normal,s=t.npc;if(s.reactTimer-=e,Math.hypot(t.x-i.zone.cx,t.y-i.zone.cy)>i.zone.radius*.97){t.crafting&&ai(i,t,"zone"),s.zoneAng||(s.zoneAng=i.rng.range(0,Math.PI*2));let h=i.zone.radius*(.35+t.id%7*.08),p=i.zone.cx+Math.cos(s.zoneAng)*h,m=i.zone.cy+Math.sin(s.zoneAng)*h,_=Math.atan2(m-t.y,p-t.x);Ge(i,t,Math.cos(_),Math.sin(_),e),s.state="ZONE_MOVE";return}for(let h of i.players){if(!h.alive||h.id===t.id||!h.isNpc)continue;let p=Math.hypot(h.x-t.x,h.y-t.y);if(p<26&&p>.001){Ge(i,t,(t.x-h.x)/p,(t.y-h.y)/p,e*.7);break}}if(s.detourUntil>i.t){Ge(i,t,Math.cos(s.detourAng),Math.sin(s.detourAng),e),s.state="DETOUR";return}if(s.stuckCheckAt==null)s.lastX=t.x,s.lastY=t.y,s.stuckCheckAt=i.t;else if(i.t-s.stuckCheckAt>.6){let h=Math.hypot(t.x-s.lastX,t.y-s.lastY);if(["PATROL","SEEK_PILE","SEEK_ITEM","ZONE_MOVE","HUNT","RETREAT"].includes(s.state)&&h<4){let m=Math.atan2((s.moveTy||t.y)-t.y,(s.moveTx||t.x)-t.x);s.detourAng=m+(i.rng()<.5?1:-1)*i.rng.range(Math.PI/2,Math.PI*.83),s.detourUntil=i.t+.9}s.lastX=t.x,s.lastY=t.y,s.stuckCheckAt=i.t}let a=i.t>=I.match.warmupSec;if(t.crafting)return;if(n.dodge&&t.z<=.01&&s.reactTimer<=0)for(let h of i.snowballs){if(h.ownerId===t.id)continue;let p=t.x-h.x,m=t.y-h.y,_=Math.hypot(p,m);if(_>120)continue;if((p*h.dirX+m*h.dirY)/(_||1)>.86&&i.rng()<n.dodge){fl(i,t);break}}let o=t.hp<(t.maxHp||100)*.55;if(n.seekItem&&i.rng()<(o?.2:.02)){let h=null,p=240;for(let m of i.pickups){if(m.takenUntil>i.t||m.kind==="heal"&&!o||m.kind==="shield"&&t.shieldHits>0)continue;let _=Math.hypot(m.x-t.x,m.y-t.y),g=Math.hypot(m.x-i.zone.cx,m.y-i.zone.cy)<i.zone.radius*.95;_<p&&g&&i.rng()<n.seekItem&&(p=_,h=m)}h&&(s.itemTx=h.x,s.itemTy=h.y,s.itemUntil=i.t+6)}if(s.itemUntil>i.t&&s.itemTx!=null)if(Math.hypot(s.itemTx-t.x,s.itemTy-t.y)<12)s.itemUntil=0;else{let p=Math.atan2(s.itemTy-t.y,s.itemTx-t.x);Ge(i,t,Math.cos(p),Math.sin(p),e),s.state="SEEK_ITEM";return}let l=null,c=1/0;for(let h of i.decoys){if(!h.alive||h.ownerId===t.id)continue;let p=Math.hypot(h.x-t.x,h.y-t.y);p<c&&p<I.throw.maxRange&&(c=p,l={x:h.x,y:h.y,decoy:!0})}if(!l){for(let h of i.players){if(!h.alive||h.id===t.id||h.isHuman&&!a)continue;let p=Math.hypot(h.x-t.x,h.y-t.y),m=h.isHuman?p*.65:p;m<c&&(c=m,l={x:h.x,y:h.y,ref:h,realD:p})}l&&l.realD!=null&&(c=l.realD)}if(t.snowballs<n.craftThreshold){if(l&&c<I.match.fleeRange){let m=Math.atan2(t.y-l.y,t.x-l.x);Ge(i,t,Math.cos(m),Math.sin(m),e),s.state="RETREAT";return}if(Dr(i,t)){Ur(i,t),s.state="CRAFT";return}let p=Ng(i,t);if(p){let m=Math.atan2(p.y-t.y,p.x-t.x);Ge(i,t,Math.cos(m),Math.sin(m),e),s.state="SEEK_PILE";return}}if(l&&c<I.match.engageRange&&(t.snowballs>0||t.mg&&t.mg.ammo>0)){let h=Math.atan2(l.y-t.y,l.x-t.x);if(t.aim=h,t.mg&&t.mg.until>i.t&&t.mg.ammo>0){let p=(1-n.accuracy)*.22;ul(i,t,h+i.rng.range(-p,p))}else if(s.reactTimer<=0&&i.rng()<n.aggro*(l.ref&&l.ref.isHuman?1.8:1)){let p=(1-n.accuracy)*.5,m=i.rng.range(-p,p),_=Math.min(1,c/I.throw.maxRange);pl(i,t,h+m,_),s.reactTimer=n.reactSec*(l.ref&&l.ref.isHuman?.75:1)}if(c<I.match.engageRange*.4)Ge(i,t,-Math.cos(h),-Math.sin(h),e);else if(n.strafe&&i.rng()<n.strafe){(s.strafeDir==null||i.rng()<.01)&&(s.strafeDir=i.rng()<.5?1:-1);let p=h+Math.PI/2*s.strafeDir;Ge(i,t,Math.cos(p),Math.sin(p),e)}s.state="ATTACK";return}if(l&&Gi(i)<=5&&t.snowballs>0){let h=Math.atan2(l.y-t.y,l.x-t.x);Ge(i,t,Math.cos(h),Math.sin(h),e),s.state="HUNT";return}if(!s.moveTx||Math.hypot(s.moveTx-t.x,s.moveTy-t.y)<20){let h=i.rng.range(0,Math.PI*2),p=i.rng.range(0,i.zone.radius*.9);s.moveTx=i.zone.cx+Math.cos(h)*p,s.moveTy=i.zone.cy+Math.sin(h)*p}let d=Math.atan2(s.moveTy-t.y,s.moveTx-t.x);Ge(i,t,Math.cos(d),Math.sin(d),e),s.state="PATROL"}function Ng(i,t){let e=null,n=1/0;for(let s of i.piles){if(s.cooldownUntil>i.t)continue;let r=Math.hypot(s.x-t.x,s.y-t.y);r<n&&(n=r,e=s)}return e}function Fg(i){let t=rn(i);if(!t)return null;let e=i.placementOrder.indexOf(t.id);return e<0?null:i.players.length-e}function lh(i){let t=rn(i),e=Fg(i);return{won:i.won,place:e,total:i.players.length,kills:t&&i.kills[t.id]||0,survivedSec:i.t,stats:i.stats}}var Nr=class{constructor(){this.ctx=null,this.master=null,this.bgm=null,this.sfx=null,this.started=!1,this.muted=!1,this.bpm=92,this.timer=null,this.step=0,this.ducked=!1}init(){if(this.started)return;let t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(this.ctx.destination),this.bgm=this.ctx.createGain(),this.bgm.gain.value=.28,this.bgm.connect(this.master),this.sfx=this.ctx.createGain(),this.sfx.gain.value=.7,this.sfx.connect(this.master),this.started=!0,this._startBgm())}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.5)}_tone(t,e,n="sine",s=.4,r=0,a=this.sfx){if(!this.started||this.muted)return;let o=this.ctx.currentTime,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=n,l.frequency.setValueAtTime(t,o),r&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),o+e),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(s,o+.01),c.gain.exponentialRampToValueAtTime(1e-4,o+e),l.connect(c),c.connect(a||this.sfx),l.start(o),l.stop(o+e+.02)}_noise(t,e=.4,n=800){if(!this.started||this.muted)return;let s=this.ctx.currentTime,r=this.ctx.sampleRate*t,a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),o=a.getChannelData(0);for(let h=0;h<r;h++)o[h]=(Math.random()*2-1)*(1-h/r);let l=this.ctx.createBufferSource();l.buffer=a;let c=this.ctx.createGain();c.gain.value=e;let d=this.ctx.createBiquadFilter();d.type="highpass",d.frequency.value=n,l.connect(d),d.connect(c),c.connect(this.sfx),l.start(s)}landing(){this._noise(.2,.5,300),this._tone(120,.15,"sine",.3)}craftStart(){this._duck(!0)}craftTick(){this._tone(70,.12,"sine",.5)}craftDone(){this._duck(!1),this._tone(880,.1,"sine",.4,200)}craftCancel(){this._duck(!1),this._tone(200,.2,"sawtooth",.3,-120)}throw(){this._noise(.12,.25,1200)}hit(){this._noise(.15,.5,500),this._tone(90,.12,"square",.3,-30)}wall(){this._tone(140,.18,"square",.35),this._tone(1200,.12,"sine",.2)}decoy(){this._tone(500,.12,"triangle",.3,200)}zoneWarn(){this._tone(70,.5,"sawtooth",.35,20)}fanfare(){[523,659,784,1046,1318].forEach((t,e)=>setTimeout(()=>this._tone(t,.5,"triangle",.35),e*120))}gameover(){this._tone(180,.6,"sawtooth",.4,-120),this._noise(.4,.4)}_duck(t){if(!this.started)return;this.ducked=t;let e=this.ctx.currentTime;this.bgm.gain.cancelScheduledValues(e),this.bgm.gain.linearRampToValueAtTime(t?.05:.28,e+.15)}_startBgm(){let t=[220,277,330,262,330,294],e=()=>{if(this.started){if(!this.muted&&!this.ducked){let n=t[this.step%t.length];this._tone(n,.28,"triangle",.14,0,this.bgm),this.step%t.length===0&&this._tone(n/2,.5,"sine",.1,0,this.bgm)}this.step++,this.timer=setTimeout(e,6e4/this.bpm/2)}};e()}setIntensity(t,e=20){let n=1-Math.max(0,t-1)/(e-1);this.bpm=92+n*55}stopAll(){this.timer&&clearTimeout(this.timer),this.timer=null,this.started&&(this.step=0)}};function kg(){let i=document.cookie.match(/(?:^|;\s*)snow_uid=([^;]+)/);if(i)return i[1];let t=(crypto.randomUUID?crypto.randomUUID():String(Math.random()).slice(2)).slice(0,36);return document.cookie=`snow_uid=${t}; max-age=${3600*24*365}; path=/; SameSite=Lax`,t}function gl(){try{return localStorage.getItem("snow_nick")||""}catch{return""}}function Or(i){try{localStorage.setItem("snow_nick",i.slice(0,12))}catch{}}function Bg(){return location.hostname==="localhost"||location.hostname==="127.0.0.1"?"ws://localhost:8901/ws":`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`}var Fr=class{constructor(){this.ws=null,this.uid=kg(),this.handlers=new Map,this.connected=!1}on(t,e){return this.handlers.set(t,e),this}connect(){return new Promise((t,e)=>{let n=new WebSocket(Bg());this.ws=n;let s=setTimeout(()=>{try{n.close()}catch{}e(new Error("\uC11C\uBC84 \uC5F0\uACB0 \uC2DC\uAC04 \uCD08\uACFC"))},6e3);n.onopen=()=>{clearTimeout(s),this.connected=!0,t()},n.onerror=()=>{clearTimeout(s),this.connected||e(new Error("\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"))},n.onclose=()=>{this.connected=!1;let r=this.handlers.get("_close");r&&r()},n.onmessage=r=>{let a;try{a=JSON.parse(r.data)}catch{return}let o=this.handlers.get(a.type);o&&o(a)}})}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify({uid:this.uid,...t}))}close(){try{this.ws&&this.ws.close()}catch{}}};var zg="snow_royale_save_v1",kr=17,on=11,ch={mg:{a:16733986,name:"\uAE30\uAD00\uCD1D"},speed:{a:4054148,name:"\uC774\uB3D9"},power:{a:16766011,name:"\uACF5\uACA9"},craft:{a:11766015,name:"\uC81C\uC791"}},hh={jack:{jacket:1780298,pants:2897232,head:15251610,accent:16739125},white:{jacket:15265524,pants:14148332,head:15779496,accent:11065578},bear:{jacket:5980966,pants:4075552,head:14264703,accent:13934615},bot:{jacket:9146262,pants:7632765,head:10988466,accent:6251370}},Br=class{constructor(t,{seed:e=null,timeScale:n=1,autoStart:s=!0}={}){this.root=t,this.seed=e,this.timeScale=n,this.audio=new Nr,this.scene3=null,this.sceneName="title",this.keys={},this.mouse={down:!1,downAt:0},this.yaw=0,this.pitch=0,this.locked=!1,this.bobT=0,this.hitMarkerUntil=0,this.damageFlashUntil=0,this.killFeed=[],this.dropTarget=null,this.actors=new Map,this.corpseSet=new Set,this.sbMeshes=new Map,this.wallMeshes=new Map,this.decoyMeshes=new Map,this._build(),s&&this._showTitle()}get scene(){return this.sceneName}set scene(t){this.sceneName=t}_build(){this.root.innerHTML="",this.root.className="sr-root",this.renderer=new os({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.canvas=this.renderer.domElement,this.canvas.className="sr-canvas",this.root.appendChild(this.canvas),this.fx=document.createElement("canvas"),this.fx.className="sr-fx",this.root.appendChild(this.fx),this.fxCtx=this.fx.getContext("2d"),this.overlay=document.createElement("div"),this.overlay.className="sr-overlay",this.root.appendChild(this.overlay),this.hud=document.createElement("div"),this.hud.className="sr-hud",this.hud.style.display="none",this.root.appendChild(this.hud),this.camera=new we(80,1,.5,3e3),this._resize(),window.addEventListener("resize",()=>this._resize()),this._bindInput(),this.assetsLoaded=!0,this._loop()}async _loadAssets(){return this.assetsLoaded=!0,!0}_resize(){let t=this.root.clientWidth||960,e=this.root.clientHeight||600;this.vw=t,this.vh=e,this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix();let n=Math.min(window.devicePixelRatio||1,2);this.fx.width=t*n,this.fx.height=e*n,this.fx.style.width=t+"px",this.fx.style.height=e+"px",this.fxCtx.setTransform(n,0,0,n,0,0)}_buildWorld(){let t=this.game,e=new ls;this.scene3=e,e.background=new Nt(12572906),e.fog=new mr(14149876,220,900),e.add(new ps(14674676,16777215,1));let n=new ms(16774112,1);n.position.set(-400,500,250),e.add(n);let s=96,r=new ii(I.map.size*2.2,I.map.size*2.2,s,s);r.rotateX(-Math.PI/2);let a=r.attributes.position,o=Math.sin;for(let g=0;g<a.count;g++){let f=a.getX(g),u=a.getZ(g),x=Math.sin(f*.008)*Math.cos(u*.006)*6+Math.sin(f*.02+u*.017)*2.2;a.setY(g,x-.5)}r.computeVertexNormals();let l=new Bt({color:16251644,roughness:.95,metalness:0}),c=new ut(r,l);c.position.set(I.map.size/2,0,I.map.size/2),e.add(c);for(let g=0;g<14;g++){let f=g/14*Math.PI*2,u=I.map.size*1.15,x=180+g%4*70,S=new ut(new zn(120+g%3*60,x,5),new Bt({color:13490660,roughness:1,flatShading:!0}));S.position.set(I.map.size/2+Math.cos(f)*u,x/2-24,I.map.size/2+Math.sin(f)*u),e.add(S)}for(let g of t.obstacles){let f;if(g.kind==="rock"){f=new ut(new fs(g.r,0),new Bt({color:10135476,roughness:1,flatShading:!0})),f.position.set(g.x,g.r*.45,g.y),f.rotation.set(g.yaw,g.yaw*1.7,0);let u=new ut(new fs(g.r*.82,0),new Bt({color:16054523,roughness:1,flatShading:!0}));u.position.set(g.x,g.r*.75,g.y),e.add(u)}else if(g.kind==="tree"){f=new ge;let u=new ut(new Te(g.r*.18,g.r*.24,g.r*1.2,6),new Bt({color:7162931,roughness:1}));u.position.y=g.r*.6,f.add(u);for(let x=0;x<3;x++){let S=new ut(new zn(g.r*(1.5-x*.35),g.r*1.35,7),new Bt({color:x===0?3104067:3961428,roughness:1,flatShading:!0}));S.position.y=g.r*(1.1+x*.8),f.add(S);let y=new ut(new zn(g.r*(1.5-x*.35)*.7,g.r*.4,7),new Bt({color:16054523,roughness:1,flatShading:!0}));y.position.y=g.r*(1.55+x*.8),f.add(y)}f.position.set(g.x,0,g.y)}else{f=new ge;let u=new ut(new de(g.r*1.8,g.r*.9,g.r*1.3),new Bt({color:8018490,roughness:1}));u.position.y=g.r*.45,f.add(u);let x=new ut(new zn(g.r*1.45,g.r*.8,4),new Bt({color:16054523,roughness:1,flatShading:!0}));x.position.y=g.r*1.3,x.rotation.y=Math.PI/4,f.add(x);let S=new ut(new ii(g.r*.3,g.r*.3),new Ee({color:16761446}));S.position.set(0,g.r*.5,g.r*.66),f.add(S),f.rotation.y=g.yaw,f.position.set(g.x,0,g.y)}e.add(f)}this.pileMeshes=new Map;for(let g of t.piles){let f=new ut(new Ie(10,10,7,0,Math.PI*2,0,Math.PI/2),new Bt({color:16777215,roughness:.85,emissive:9423336,emissiveIntensity:.12}));f.position.set(g.x,0,g.y),f.scale.y=.62,e.add(f),this.pileMeshes.set(g.id,f)}let d=new Te(1,1,260,96,1,!0);this.zoneMat=new Ee({color:5880040,transparent:!0,opacity:.16,side:Fe,depthWrite:!1,blending:On}),this.zoneWall=new ut(d,this.zoneMat),this.zoneWall.position.set(t.zone.cx,130,t.zone.cy),e.add(this.zoneWall),this.zoneBeams=new ge;let h=new Ee({color:10477823,transparent:!0,opacity:.55,blending:On,depthWrite:!1});for(let g=0;g<36;g++){let f=new ut(new Te(1.4,1.4,220,5),h);f.userData.angle=g/36*Math.PI*2,f.position.y=110,this.zoneBeams.add(f)}this.zoneBeams.position.set(t.zone.cx,0,t.zone.cy),e.add(this.zoneBeams),this.zoneRing=new ut(new ki(t.zone.radius,2.2,8,128),new Ee({color:3394815})),this.zoneRing.rotation.x=Math.PI/2,this.zoneRing.position.set(t.zone.cx,1.2,t.zone.cy),this._zoneRingR=t.zone.radius,e.add(this.zoneRing),this.pickupMeshes=new Map;for(let g of t.pickups)this._makePickupMesh(g);this.padMeshes=new Map;for(let g of t.pads||[]){let f=new ge,u=new ut(new Te(g.r,g.r+2,3,16),new Bt({color:3622735,roughness:.8}));u.position.y=1.5,f.add(u);let x=new Bt({color:11583173,metalness:.6,roughness:.4});for(let y=0;y<4;y++){let C=new ut(new ki(g.r*.55,1.3,6,20),x);C.rotation.x=Math.PI/2,C.position.y=4+y*3,f.add(C)}let S=new ut(new Te(g.r*.8,g.r*.8,2.4,16),new Bt({color:58879,emissive:42444,emissiveIntensity:.8,roughness:.3}));S.position.y=17,f.add(S),f.userData.plate=S,f.position.set(g.x,0,g.y),e.add(f),this.padMeshes.set(g.id,f)}for(let g of t.towers||[]){let f=new ut(new Te(g.r,g.r*1.25,g.h,9),new Bt({color:9279910,roughness:1,flatShading:!0}));f.position.set(g.x,g.h/2,g.y),e.add(f);let u=new ut(new Te(g.r*.98,g.r*.9,2.2,9),new Bt({color:16054523,roughness:1,flatShading:!0}));u.position.set(g.x,g.h+1.1,g.y),e.add(u)}this.capMeshes=new Map;for(let g of t.caps)this._makeCapMesh(g);this.grenadeMeshes=new Map,this.hpSprites=new Map;let p=900,m=new ye,_=new Float32Array(p*3);for(let g=0;g<p;g++)_[g*3]=Math.random()*I.map.size,_[g*3+1]=Math.random()*160,_[g*3+2]=Math.random()*I.map.size;m.setAttribute("position",new Re(_,3)),this.snowPts=new xr(m,new hs({color:16777215,size:2.2,transparent:!0,opacity:.85})),e.add(this.snowPts),this.actors.clear(),this.corpseSet.clear(),this.sbMeshes.clear(),this.wallMeshes.clear(),this.decoyMeshes.clear();for(let g of t.players){if(g.id===t._humanId||this.online&&this.human&&g.id===this.human.id)continue;let f=this._makeFigure(g.skin,g.isNpc,!!g.userSkin);f.position.set(g.x,0,g.y),e.add(f),this.actors.set(g.id,f)}}_makeCapMesh(t){let e=new ge,n=new Bt({color:13934615,emissive:7032840,emissiveIntensity:.5,metalness:.7,roughness:.3}),s=Math.min(4,Math.max(2,Math.round(t.amount/2)));for(let r=0;r<s;r++){let a=new ut(new Te(3,3,1,10),n);a.position.set(r%2*3-1.5,1+r*1.1,Math.floor(r/2)*3-1.5),a.rotation.y=r*.7,e.add(a)}return e.position.set(t.x,0,t.y),this.scene3.add(e),this.capMeshes.set(t.id,e),e}_makePickupMesh(t){let e=this.pickupMeshes.get(t.id);e&&this.scene3.remove(e);let n=new ge;if(t.kind==="heal"){let a=new ut(new de(10,7,10),new Bt({color:16777215,roughness:.6}));a.position.y=5,n.add(a);let o=new Ee({color:14692657}),l=new ut(new de(6.4,1.8,1.8),o);l.position.y=9.2,n.add(l);let c=new ut(new de(1.8,1.8,6.4),o);c.position.y=9.2,n.add(c)}else if(t.kind==="shield"){let a=new ut(new Te(7,7,2.4,18),new Bt({color:5087231,emissive:2254540,emissiveIntensity:.7,roughness:.3}));a.position.y=6,a.rotation.x=.35,n.add(a)}else if(t.kind==="club"){let a=new Bt({color:10251071,roughness:.85}),o=new ut(new Te(1.4,2.6,16,8),a);o.position.y=8,o.rotation.z=.5,n.add(o),n.userData.pillColor=13208139}else{let a=ch[t.buff&&t.buff.kind]||ch.speed,o=new Bt({color:a.a,emissive:a.a,emissiveIntensity:.5,roughness:.35}),l=new Bt({color:16119285,emissive:10066329,emissiveIntensity:.3,roughness:.35}),c=new ut(new ds(4.6,5,6,12),o);c.rotation.z=Math.PI/2,c.position.set(-2.6,9,0),n.add(c);let d=new ut(new ds(4.6,5,6,12),l);d.rotation.z=Math.PI/2,d.position.set(2.6,9,0),n.add(d),n.userData.pillColor=a.a,n.userData.buffKind=t.buff&&t.buff.kind}let s=t.kind==="heal"?16739179:t.kind==="shield"?5087231:n.userData.pillColor||16766011,r=new ut(new Te(1.5,1.5,52,6),new Ee({color:s,transparent:!0,opacity:.34,blending:On,depthWrite:!1}));return r.position.y=26,n.add(r),n.position.set(t.x,0,t.y),this.scene3.add(n),this.pickupMeshes.set(t.id,n),n}_hpSprite(t){let e=this.hpSprites&&this.hpSprites.get(t.id);if(!e&&this.hpSprites){let n=document.createElement("canvas");n.width=96,n.height=26;let s=new yr(n),r=new cs({map:s,depthTest:!1,transparent:!0});e=new _r(r),e.scale.set(26,7,1),e.userData={cv:n,tex:s,lastHp:-1,lastShield:-1},this.scene3.add(e),this.hpSprites.set(t.id,e),this._paintHpSprite(e,t)}return e}_paintHpSprite(t,e){let{cv:n,tex:s}=t.userData,r=n.getContext("2d");r.clearRect(0,0,n.width,n.height),r.font="bold 10px system-ui",r.textAlign="center",r.fillStyle=e.userSkin?"#FFB020":e.isNpc?"#d7dde3":"#ffffff",r.fillText((e.userSkin?"\u2605 ":"")+e.name.slice(0,14),n.width/2,9);let a=84,o=7,l=(n.width-a)/2,c=13;r.fillStyle="rgba(0,0,0,0.65)",r.fillRect(l,c,a,o);let d=Math.max(0,e.hp/(e.maxHp||100));if(r.fillStyle=d>.5?"#7FFFD4":d>.25?"#FF6B35":"#DC143C",r.fillRect(l+1,c+1,(a-2)*d,o-2),e.shieldHits>0){r.fillStyle="#4d9fff";for(let h=0;h<Math.min(6,e.shieldHits);h++)r.fillRect(l+h*7,c+o+2,5,3)}s.needsUpdate=!0,t.userData.lastHp=e.hp,t.userData.lastShield=e.shieldHits}_makeFigure(t,e,n=!1){let s=hh[t]||hh.bot,r=new ge,a=on;if(n){let x=new ut(new de(a*.5,a*.16,a*.48),new Bt({color:16739125,roughness:.8}));x.position.y=a*1.72,r.add(x);let S=new ut(new de(a*.14,a*.5,a*.1),new Bt({color:16739125,roughness:.8}));S.position.set(a*.2,a*1.45,-a*.26),r.add(S);let y=new ut(new Ie(a*.26,10,8,0,Math.PI*2,0,Math.PI/2),new Bt({color:16766011,roughness:.9}));y.position.y=a*2.12,r.add(y);let C=new ut(new Ie(a*.09,8,6),new Bt({color:16777215,roughness:1}));C.position.y=a*2.3,r.add(C)}let o=x=>new Bt({color:x,roughness:.9,flatShading:!0}),l=new de(a*.28,a*.8,a*.3),c=new ut(l,o(s.pants));c.position.set(-a*.18,a*.4,0),r.add(c);let d=new ut(l,o(s.pants));d.position.set(a*.18,a*.4,0),r.add(d);let h=new ut(new de(a*.85,a*.9,a*.5),o(s.jacket));h.position.y=a*1.25,r.add(h);let p=new ut(new de(a*.87,a*.14,a*.52),o(s.accent));p.position.y=a*1.12,r.add(p);let m=new de(a*.22,a*.75,a*.24),_=new ut(m,o(s.jacket));_.position.set(-a*.58,a*1.25,0),r.add(_);let g=new ut(m,o(s.jacket));g.position.set(a*.58,a*1.25,0),r.add(g);let f=new ut(new de(a*.44,a*.42,a*.42),o(s.head));f.position.y=a*1.95,r.add(f);let u=new ut(new de(a*.54,a*.24,a*.5),o(s.jacket));if(u.position.y=a*2.18,r.add(u),e){let x=new ut(new de(a*.46,a*.1,a*.05),o(4014408));x.position.set(0,a*1.98,a*.22),r.add(x)}return r.userData={armR:g,armL:_,legL:c,legR:d,S:a},r}_wallet(){try{return JSON.parse(localStorage.getItem("snow_wallet")||'{"caps":0,"items":{}}')}catch{return{caps:0,items:{}}}}_saveWallet(t){try{localStorage.setItem("snow_wallet",JSON.stringify(t))}catch{}}_bankCaps(t){let e=this._wallet();e.caps+=t,this._saveWallet(e)}_showShop(){let t=this._wallet(),e=document.createElement("div");e.className="sr-title";let n=document.createElement("h1");n.textContent="\u{1F3EA} \uBCD1\uB69C\uAED1 \uC0C1\uC810",n.style.fontSize="38px",e.appendChild(n),e.appendChild(Ft("p","sr-sub",`\uBCF4\uC720 \uBCD1\uB69C\uAED1: \u{1F37E} ${t.caps}\uAC1C \u2014 \uC804\uC7A5\uC5D0\uC11C \uBCD1\uB69C\uAED1\uC744 \uC8FC\uC6CC \uBAA8\uC73C\uC138\uC694`));let s=document.createElement("div");s.className="sr-shoplist";for(let r of Object.values(I.shop)){let a=t.items[r.id]||0,o=document.createElement("div");o.className="sr-shopitem";let l=document.createElement("div");l.className="sr-shopinfo",l.innerHTML=`<b>${r.emoji} ${r.name} <i>\u{1F37E}${r.cost}</i></b><span>${r.desc}</span><small>${a?`\uBCF4\uC720 ${a}\uAC1C`:""}</small>`;let c=document.createElement("button");c.className="sr-btn",c.style.width="auto",c.style.margin="0",c.textContent="\uAD6C\uB9E4",c.disabled=t.caps<r.cost,c.addEventListener("click",()=>{let d=this._wallet();d.caps<r.cost||(d.caps-=r.cost,d.items[r.id]=(d.items[r.id]||0)+1,this._saveWallet(d),this.audio.craftDone(),this._showShop())}),o.appendChild(l),o.appendChild(c),s.appendChild(o)}e.appendChild(s),e.appendChild(this._btn("\u{1F392} \uC778\uBCA4\uD1A0\uB9AC (\uB4E4\uACE0 \uAC08 \uC544\uC774\uD15C \uC120\uD0DD)",()=>this._showInventory())),e.appendChild(this._btn("\u2190 \uD0C0\uC774\uD2C0\uB85C",()=>this._showTitle())),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex"}_showInventory(){let t=this._wallet();this._carryItem=this._carryItem||null;let e=document.createElement("div");e.className="sr-title";let n=document.createElement("h1");n.textContent="\u{1F392} \uC778\uBCA4\uD1A0\uB9AC",n.style.fontSize="38px",e.appendChild(n),e.appendChild(Ft("p","sr-sub","\uB9E4\uCE58\uC5D0 \uB4E4\uACE0 \uAC08 \uC544\uC774\uD15C\uC744 \uD558\uB098\uB9CC \uACE0\uB974\uC138\uC694 (\uC0AC\uC6A9\uD558\uBA74 \uC18C\uBAA8)"));let s=document.createElement("div");s.className="sr-shoplist";let r=Object.keys(t.items).filter(a=>t.items[a]>0);r.length||s.appendChild(Ft("p","sr-sub","\uBCF4\uC720\uD55C \uC544\uC774\uD15C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC0C1\uC810\uC5D0\uC11C \uAD6C\uB9E4\uD558\uC138\uC694."));for(let a of r){let o=I.shop[a],l=document.createElement("button");l.className="sr-shopitem sr-shopitem-btn"+(this._carryItem===a?" on":""),l.innerHTML=`<div class="sr-shopinfo"><b>${o.emoji} ${o.name} \xD7${t.items[a]}</b><span>${o.desc}</span></div><i>${this._carryItem===a?"\u2705 \uC7A5\uCC29":"\uC120\uD0DD"}</i>`,l.addEventListener("click",()=>{this._carryItem=this._carryItem===a?null:a,this._showInventory()}),s.appendChild(l)}e.appendChild(s),e.appendChild(Ft("p","sr-foot",this._carryItem?`\uC7A5\uCC29: ${I.shop[this._carryItem].emoji} ${I.shop[this._carryItem].name} \u2014 \uAC8C\uC784\uC5D0\uC11C X\uD0A4\uB85C \uC0AC\uC6A9 (\uC81C\uD2B8\uD329\uC740 \uC810\uD504\uD0A4 \uC790\uB3D9)`:"\uC7A5\uCC29\uB41C \uC544\uC774\uD15C \uC5C6\uC74C")),e.appendChild(this._btn("\u{1F3EA} \uC0C1\uC810",()=>this._showShop())),e.appendChild(this._btn("\u2190 \uD0C0\uC774\uD2C0\uB85C",()=>this._showTitle())),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex"}_consumeCarryItem(){if(!this._carryItem)return null;let t=this._wallet();if(!t.items[this._carryItem]||t.items[this._carryItem]<=0)return this._carryItem=null,null;t.items[this._carryItem]--,this._saveWallet(t);let e=this._carryItem;return t.items[e]<=0&&(this._carryItem=null),e}_classPreview(t){if(this._previewCache=this._previewCache||{},this._previewCache[t.id])return this._previewCache[t.id];let e=96,n=116,s=new ls;s.background=null,s.add(new ps(16777215,12571878,1.15));let r=new ms(16774112,1.1);r.position.set(-40,60,80),s.add(r);let a=this._makeFigure(t.skin,!1,!0);a.rotation.y=.6,s.add(a);let o=new we(38,e/n,1,500);o.position.set(0,on*1.5,on*4.6),o.lookAt(0,on*1.15,0);let l=new os({antialias:!0,alpha:!0});l.setSize(e,n),l.render(s,o);let c=l.domElement.toDataURL("image/png");return l.dispose(),this._previewCache[t.id]=c,c}_showTitle(){this.sceneName="title",this.hud.style.display="none",document.pointerLockElement&&document.exitPointerLock();let t=document.createElement("div");t.className="sr-title";let e=document.createElement("h1");e.textContent="\uC2A4\uB178\uC6B0 \uB85C\uC584";let n=document.createElement("p");n.className="sr-sub",n.textContent="Snow Royale \u2014 3D 1\uC778\uCE6D \uB208\uC2F8\uC6C0 \uBC30\uD2C0\uB85C\uC584",t.appendChild(e),t.appendChild(n);let s=document.createElement("div");s.className="sr-nickrow";let r=document.createElement("span");r.textContent="\uB2C9\uB124\uC784";let a=document.createElement("input");a.className="sr-nick",a.maxLength=12,a.placeholder="\uB208\uC0AC\uB78C",a.value=gl(),a.addEventListener("change",()=>Or(a.value.trim())),s.appendChild(r),s.appendChild(a),t.appendChild(s),this._nickInput=a,this._mode=this._mode||"solo";let o=document.createElement("div");o.className="sr-diffrow";for(let[f,u]of[["solo","\u{1F3D4} 1\uC778 \uD50C\uB808\uC774 (\uBD07 19)"],["online","\u{1F310} \uC628\uB77C\uC778 \uD50C\uB808\uC774"]]){let x=document.createElement("button");x.className="sr-diff"+(this._mode===f?" on":""),x.textContent=u,x.addEventListener("click",()=>{this._mode=f,this._showTitle()}),o.appendChild(x)}t.appendChild(o);let l=document.createElement("div");l.className="sr-diffrow",this._difficulty=this._difficulty||"normal";for(let[f,u]of[["easy","\uC26C\uC6C0"],["normal","\uBCF4\uD1B5"],["hard","\uC5B4\uB824\uC6C0"]]){let x=document.createElement("button");x.className="sr-diff"+(this._difficulty===f?" on":""),x.textContent=u,x.addEventListener("click",()=>{this._difficulty=f,this._showTitle()}),l.appendChild(x)}t.appendChild(l),this._total=this._total||I.match.total;let c=document.createElement("div");c.className="sr-diffrow";for(let f of I.match.totalOptions){let u=document.createElement("button");u.className="sr-diff"+(this._total===f?" on":""),u.textContent=`${f}\uC778`,u.addEventListener("click",()=>{this._total=f,this._showTitle()}),c.appendChild(u)}t.appendChild(c),this._classId=this._classId||"jack";let d=document.createElement("p");d.className="sr-sub",d.textContent="\uCE90\uB9AD\uD130 \uD2B9\uC131 \uC120\uD0DD",t.appendChild(d);let h=document.createElement("div");h.className="sr-classrow";for(let f of Object.values(Hn)){let u=document.createElement("button");u.className="sr-class"+(this._classId===f.id?" on":"");let x=document.createElement("img");x.className="sr-class-img",x.alt=f.name;try{x.src=this._classPreview(f)}catch{}let S=document.createElement("div");S.className="sr-class-txt";let y=document.createElement("b");y.textContent=f.name;let C=document.createElement("span");C.textContent=f.desc,S.appendChild(y),S.appendChild(C),u.appendChild(x),u.appendChild(S),u.addEventListener("click",()=>{this._classId=f.id,this._showTitle()}),h.appendChild(u)}t.appendChild(h),this.invertY=this.invertY??!1;let p=this._btn(this.invertY?"\u2195 \uB9C8\uC6B0\uC2A4 \uC0C1\uD558 \uBC18\uC804: \uCF1C\uC9D0":"\u2195 \uB9C8\uC6B0\uC2A4 \uC0C1\uD558 \uBC18\uC804: \uAEBC\uC9D0",()=>{this.invertY=!this.invertY,this._showTitle()});if(t.appendChild(p),this._mode==="online"){t.appendChild(this._btn("\u{1F310} \uACF5\uAC1C \uBC29 \uBAA9\uB85D / \uBE60\uB978 \uC785\uC7A5",()=>this._showOnlineLobby(),!0));let f=document.createElement("div");f.className="sr-nickrow";let u=document.createElement("input");u.className="sr-nick",u.maxLength=4,u.placeholder="\uBC29 \uCF54\uB4DC (\uC608: 4F2K)",u.style.textTransform="uppercase";let x=document.createElement("button");x.className="sr-btn",x.style.width="auto",x.style.margin="0",x.textContent="\uCF54\uB4DC\uB85C \uC785\uC7A5",x.addEventListener("click",()=>{u.value.trim().length===4&&this._joinOnline({code:u.value.trim().toUpperCase()})}),f.appendChild(u),f.appendChild(x),t.appendChild(f),t.appendChild(this._btn("\u{1F3E0} \uBC29 \uB9CC\uB4E4\uAE30 (\uACF5\uAC1C)",()=>this._joinOnline({create:!0,isPublic:!0}))),t.appendChild(this._btn("\u{1F512} \uBC29 \uB9CC\uB4E4\uAE30 (\uBE44\uACF5\uAC1C \xB7 \uCF54\uB4DC \uACF5\uC720)",()=>this._joinOnline({create:!0,isPublic:!1}))),t.appendChild(this._btn("\u{1F4CA} \uB0B4 \uC804\uC801",()=>this._showStats()))}else{let f=this._btn("\uB099\uD558 \uC2DC\uC791",()=>this.newGame(),!0);t.appendChild(f)}let m=this._wallet();t.appendChild(this._btn(`\u{1F3EA} \uC0C1\uC810 \xB7 \u{1F37E} ${m.caps} \u2014 \u{1F392} ${this._carryItem?I.shop[this._carryItem].emoji+" "+I.shop[this._carryItem].name:"\uC7A5\uCC29 \uC5C6\uC74C"}`,()=>this._showShop())),t.appendChild(this._btn("\u2753 \uC870\uC791\uBC95",()=>this._showHelp()));let _=this._btn(this.audio.muted?"\u{1F507} \uC0AC\uC6B4\uB4DC":"\u{1F50A} \uC0AC\uC6B4\uB4DC",()=>{this.audio.setMuted(!this.audio.muted),_.textContent=this.audio.muted?"\u{1F507} \uC0AC\uC6B4\uB4DC":"\u{1F50A} \uC0AC\uC6B4\uB4DC"});t.appendChild(_);let g=document.createElement("p");g.className="sr-foot",g.textContent="WASD \uC774\uB3D9 \xB7 Space \uC810\uD504/\uC81C\uD2B8\uD329 \xB7 \uC88C\uD074\uB9AD \uD22C\uCC99 \xB7 F \uADFC\uC811(\uC8FC\uBA39/\uBABD\uB465\uC774) \xB7 X \uC544\uC774\uD15C \xB7 E \uC81C\uC791 \xB7 Q \uC124\uBCBD \xB7 G \uBBF8\uB07C \xB7 C \uC5C4\uD3D0 \xB7 M \uC9C0\uB3C4",t.appendChild(g),this.overlay.innerHTML="",this.overlay.appendChild(t),this.overlay.style.display="flex"}_showHelp(){let t=document.createElement("div");t.className="sr-modal";let e=document.createElement("div");e.className="sr-modal-box";let n=document.createElement("h2");n.textContent="\uC870\uC791\uBC95 (3D FPS)",e.appendChild(n),["\u{1F5B1} \uD654\uBA74 \uD074\uB9AD \u2014 \uB9C8\uC6B0\uC2A4 \uC870\uC900 \uC7A0\uAE08 (ESC\uB85C \uD574\uC81C)","\uB9C8\uC6B0\uC2A4 \u2014 \uC2DC\uC810 \uD68C\uC804 (\uC704\uB85C \uBC00\uBA74 \uC704\uB97C \uBD04 \xB7 \uD0C0\uC774\uD2C0\uC5D0\uC11C \uBC18\uC804 \uAC00\uB2A5)","W A S D \u2014 \uBCF4\uB294 \uBC29\uD5A5 \uAE30\uC900 \uC774\uB3D9 \xB7 Space \u2014 \uC810\uD504(\uACF5\uC911\uC5D0\uC11C \uB208\uBB49\uCE58 \uD68C\uD53C) \xB7 C \u2014 \uC5C4\uD3D0(\uD53C\uD574 \uC808\uBC18)","\u{1F6E1} \uBC29\uD328 \uC544\uC774\uD15C \u2014 \uB4E4\uACE0 \uC788\uB294 \uB3D9\uC548 \uD53C\uACA9 \uC644\uC804 \uBC29\uC5B4, \uB0B4\uAD6C\uB3C4 4\uD68C \uC18C\uC9C4 \uC2DC \uD30C\uAD34","\u{1F48A} \uC54C\uC57D \u2014 \uC0C9\uC73C\uB85C \uAD6C\uBD84: \u{1F7E2}\uC774\uB3D9 \u{1F7E1}\uACF5\uACA9 \u{1F7E3}\uC81C\uC791 \u{1F534}\uAE30\uAD00\uCD1D(75\uBC1C \uC5F0\uC0AC, 20\uCD08)","\u{1F300} \uC2A4\uD504\uB9C1 \uC810\uD504 \uD328\uB4DC \u2014 \uBC1F\uC73C\uBA74 \uB2EC\uB9AC\uB358 \uBC29\uD5A5\uC73C\uB85C \uB192\uC774 \uBC1C\uC0AC. \uB3CC \uD0C0\uC6CC \uC704\uB85C \uC62C\uB77C\uAC08 \uC218 \uC788\uC74C","\uC88C\uD074\uB9AD \uD640\uB4DC \u2192 \uB193\uAE30 \u2014 \uB208\uBB49\uCE58 \uD22C\uCC99 (\uC624\uB798 \uB204\uB97C\uC218\uB85D \uBA40\uB9AC)","E \u2014 \uB208\uB354\uBBF8(\uBC18\uC9DD\uC774\uB294 \uD770 \uB454\uB355) \uC55E\uC5D0\uC11C 3\uCD08 \uC81C\uC791 +10 (\uBB34\uBC29\uBE44!)","Q \u2014 \uC124\uBCBD \uAC74\uC124 (4\uAC1C) \xB7 G \u2014 \uB208\uC0AC\uB78C \uBBF8\uB07C (5\uAC1C) \xB7 M \u2014 \uC9C0\uB3C4","F \u2014 \uADFC\uC811 \uACF5\uACA9: \uAE30\uBCF8 \uC8FC\uBA39(10). \u{1F3CF} \uBABD\uB465\uC774\uB97C \uC8FC\uC6B0\uBA74 \uAC15\uD0C0(26+\uB109\uBC31)","\u{1F37E} \uBCD1\uB69C\uAED1 \u2014 \uC804\uC7A5\uC5D0\uC11C \uC8FC\uC6CC \uC0C1\uC810\uC5D0\uC11C \uC544\uC774\uD15C \uAD6C\uB9E4 (\uC8FD\uC740 \uC790\uB294 \uC9C0\uAC11\uC744 \uB5A8\uC5B4\uB728\uB9B0\uB2E4)","X \u2014 \uC7A5\uCC29\uD55C \uC0C1\uC810 \uC544\uC774\uD15C \uC0AC\uC6A9 (\uAC74\uBE75/\uB3CC\uACA9\uBB3C\uC57D/\uC218\uBA74\uCD1D/\uC218\uB958\uD0C4) \xB7 \uC81C\uD2B8\uD329\uC740 \uC810\uD504\uD0A4\uB85C \uBE44\uD589","\uD30C\uB780 \uBE5B \uAE30\uB465 \uBCBD = \uB208\uBCF4\uB77C \uAD6C\uC5ED \uACBD\uACC4. \uBCBD \uBC16\uC5D0 \uC788\uC73C\uBA74 \uCCB4\uB825\uC774 \uB2F3\uC2B5\uB2C8\uB2E4","\uC4F0\uB7EC\uC9C4 \uD50C\uB808\uC774\uC5B4\uB294 \uADF8 \uC790\uB9AC\uC5D0 \uB0A8\uC2B5\uB2C8\uB2E4"].forEach(r=>{let a=document.createElement("p");a.textContent=r,e.appendChild(a)}),e.appendChild(this._btn("\uB2EB\uAE30",()=>t.remove(),!0)),t.appendChild(e),this.root.appendChild(t)}_nickname(){return this._nickInput&&this._nickInput.value.trim()||gl()||"\uB208\uC0AC\uB78C"}async _ensureNet(){return this.net&&this.net.connected?this.net:(this.net=new Fr,this.net.on("lobby",t=>this._renderRoomLobby(t)).on("rooms",t=>this._renderRoomList(t.rooms)).on("error",t=>this._toast(`\u26A0 ${t.error}`)).on("you",t=>{this.onlineYouId=t.playerId}).on("match_start",t=>this._onlineMatchStart(t)).on("snap",t=>this._onlineSnap(t)).on("you_died",t=>this._onlineDied(t)).on("caps_got",t=>{this._bankCaps(t.amount),this.capsFxUntil=performance.now()+1600,this.capsFxAmount=t.amount,this.audio.craftDone(),this._toast(`\u{1F37E} \uBCD1\uB69C\uAED1 +${t.amount}! (\uC9C0\uAC11 ${this._wallet().caps}\uAC1C)`,2600)}).on("match_over",t=>this._onlineOver(t)).on("stats",t=>this._renderStats(t.stats)).on("_close",()=>{this.online&&(this._toast("\uC11C\uBC84 \uC5F0\uACB0\uC774 \uB04A\uC5B4\uC84C\uC2B5\uB2C8\uB2E4"),this.online=!1,this._showTitle())}),await this.net.connect(),this.net)}async _joinOnline({create:t=!1,isPublic:e=!0,code:n=null,quick:s=!1}={}){Or(this._nickname());try{let r=await this._ensureNet(),a={name:this._nickname(),classId:this._classId||"jack",itemId:this._carryItem||void 0};t?r.send({type:"create_room",isPublic:e,...a}):n?r.send({type:"join_room",code:n,...a}):s&&r.send({type:"quick_join",...a})}catch(r){this._toast(`\u26A0 ${r.message} \u2014 \uC11C\uBC84\uAC00 \uAEBC\uC838 \uC788\uC73C\uBA74 1\uC778 \uD50C\uB808\uC774\uB97C \uC774\uC6A9\uD558\uC138\uC694`,4200)}}async _showOnlineLobby(){Or(this._nickname());try{(await this._ensureNet()).send({type:"list_rooms"}),this._renderRoomList(null)}catch(t){this._toast(`\u26A0 ${t.message}`,4200)}}_renderRoomList(t){let e=document.createElement("div");e.className="sr-title";let n=document.createElement("h1");if(n.textContent="\uACF5\uAC1C \uBC29",n.style.fontSize="40px",e.appendChild(n),t==null)e.appendChild(Ft("p","sr-sub","\uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uB294 \uC911\u2026"));else if(!t.length)e.appendChild(Ft("p","sr-sub","\uB300\uAE30 \uC911\uC778 \uACF5\uAC1C \uBC29\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694!"));else{let s=document.createElement("div");s.className="sr-roomlist";for(let r of t){let a=document.createElement("button");a.className="sr-room",a.innerHTML=`<b>${r.code}</b><span>${r.host}\uB2D8\uC758 \uBC29 \xB7 ${r.players}/${r.max}\uBA85</span>`,a.addEventListener("click",()=>this._joinOnline({code:r.code})),s.appendChild(a)}e.appendChild(s)}e.appendChild(this._btn("\u26A1 \uBE60\uB978 \uC785\uC7A5 (\uC790\uB3D9 \uB9E4\uCE6D)",()=>this._joinOnline({quick:!0}),!0)),e.appendChild(this._btn("\u{1F504} \uC0C8\uB85C\uACE0\uCE68",()=>{this.net&&this.net.send({type:"list_rooms"})})),e.appendChild(this._btn("\u2190 \uD0C0\uC774\uD2C0\uB85C",()=>this._showTitle())),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex"}_renderRoomLobby(t){if(this.sceneName==="play")return;this.roomCode=t.code;let e=document.createElement("div");e.className="sr-title";let n=document.createElement("h1");n.textContent=`\uBC29 ${t.code}`,n.style.fontSize="40px",e.appendChild(n),e.appendChild(Ft("p","sr-sub",t.isPublic?"\uACF5\uAC1C \uBC29 \u2014 \uBAA9\uB85D\uC5D0 \uB178\uCD9C\uB429\uB2C8\uB2E4":`\uBE44\uACF5\uAC1C \uBC29 \u2014 \uCE5C\uAD6C\uC5D0\uAC8C \uCF54\uB4DC ${t.code}\uB97C \uC54C\uB824\uC8FC\uC138\uC694`));let s=document.createElement("div");s.className="sr-roomlist";for(let o of t.members){let l=document.createElement("div");l.className="sr-room sr-room-static";let c=Hn[o.classId]||Hn.jack;l.innerHTML=`<b>${o.name}${o.uid===this.net.uid?" (\uB098)":""}${o.uid===t.hostUid?" \u{1F451}":""}</b><span>${c.name} \xB7 ${o.ready?"\u2705 \uC900\uBE44\uB428":"\uB300\uAE30 \uC911"}</span>`,s.appendChild(l)}e.appendChild(s),e.appendChild(Ft("p","sr-foot",`\uB0A8\uB294 \uC790\uB9AC\uB294 \uBD07\uC774 \uCC44\uC6C1\uB2C8\uB2E4 (\uCD1D ${I.match.total}\uC778 \uB9E4\uCE58)`));let r=t.members.find(o=>o.uid===this.net.uid),a=this._btn(r&&r.ready?"\uC900\uBE44 \uCDE8\uC18C":"\u2705 \uC900\uBE44",()=>this.net.send({type:"ready",ready:!(r&&r.ready)}));e.appendChild(a),t.hostUid===this.net.uid&&e.appendChild(this._btn("\u{1F680} \uAC8C\uC784 \uC2DC\uC791 (\uBC29\uC7A5)",()=>this.net.send({type:"start"}),!0)),e.appendChild(this._btn("\uB098\uAC00\uAE30",()=>{this.net.send({type:"leave"}),this._showTitle()})),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex"}async _showStats(){try{(await this._ensureNet()).send({type:"stats"})}catch(t){this._toast(`\u26A0 ${t.message}`)}}_renderStats(t){let e=document.createElement("div");e.className="sr-title";let n=document.createElement("h1");if(n.textContent="\uB0B4 \uC804\uC801",n.style.fontSize="40px",e.appendChild(n),!t||!t.matches)e.appendChild(Ft("p","sr-sub","\uC544\uC9C1 \uC628\uB77C\uC778 \uC804\uC801\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uCCAB \uB9E4\uCE58\uB97C \uB6F0\uC5B4\uBCF4\uC138\uC694!"));else{let s=document.createElement("div");s.className="sr-rstats",s.appendChild(this._stat("\uB9E4\uCE58",t.matches)),s.appendChild(this._stat("\uC2B9\uB9AC",t.wins||0)),s.appendChild(this._stat("TOP3",t.top3||0)),s.appendChild(this._stat("\uCC98\uCE58",t.kills||0)),s.appendChild(this._stat("\uD3C9\uADE0 \uC21C\uC704",t.matches?(t.totalPlace/t.matches).toFixed(1):"-")),e.appendChild(s),e.appendChild(Ft("p","sr-sub",`${t.name||""} \xB7 \uB9C8\uC9C0\uB9C9 \uD50C\uB808\uC774 ${t.lastPlayedAt?t.lastPlayedAt.slice(0,10):"-"}`))}e.appendChild(this._btn("\u2190 \uD0C0\uC774\uD2C0\uB85C",()=>this._showTitle())),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex"}newGame(t=this.seed){this.audio.init(),this.audio.resume();let e=t??Math.floor(performance.now())%1e5+1,n=this._consumeCarryItem();this.game=_s(e,{total:this._total||I.match.total,difficulty:this._difficulty||"normal",classId:this._classId||"jack",itemId:n}),n&&this._toast(`${I.shop[n].emoji} ${I.shop[n].name} \uC7A5\uCC29 \u2014 ${n==="jetpack"?"\uC810\uD504\uD0A4\uB85C \uBE44\uD589":n==="club"?"F\uD0A4\uB85C \uAC15\uD0C0":"X\uD0A4\uB85C \uC0AC\uC6A9"}`,4500),this.human=rn(this.game),this._buildWorld(),this.online=!1,this.ghost=!1,this.ghostPos=null,this.human&&(this.human.name=this._nickname?this._nickname():this.human.name),this.sceneName="drop",this.dropT=0,this.dropTarget={x:this.game.zone.cx+this.game.rng.range(-300,300),y:this.game.zone.cy+this.game.rng.range(-300,300)},this.dropPlan=new Map;for(let s of this.game.players)s.id!==this.game._humanId&&this.dropPlan.set(s.id,{delay:this.game.rng.range(0,2.5),fallSec:this.game.rng.range(3.2,4.6),sway:this.game.rng.range(0,Math.PI*2)});this.yaw=0,this.pitch=-.15,this.killFeed=[],this.overlay.style.display="none",this.overlay.innerHTML="",this.hud.style.display="block",this._lastSurvivors=I.match.total,this._toast("\uC9C0\uB3C4\uB97C \uD074\uB9AD\uD574 \uB099\uD558 \uC9C0\uC810\uC744 \uACE0\uB974\uC138\uC694")}_onlineMatchStart(t){this.audio.init(),this.audio.resume(),this.online=!0,this.onlineMeta=t,this._consumeCarryItem(),this.game=_s(t.seed,{total:t.total,allNpc:!0,humanId:-1,difficulty:"normal"});for(let e of t.players){let n=this.game.players.find(s=>s.id===e.id);n&&(n.name=e.name,n.isNpc=e.isNpc,n.userSkin=e.userSkin,e.classId&&dl(this.game,n,e.classId))}this.human=null,this._applyYou(),this._buildWorld(),this.sceneName="play",this.ghost=!1,this.killFeed=[],this.overlay.style.display="none",this.overlay.innerHTML="",this.hud.style.display="block",this.yaw=0,this.pitch=0,this._lastSurvivors=t.total,this._toast("\u{1F310} \uC628\uB77C\uC778 \uB9E4\uCE58 \uC2DC\uC791 \u2014 \uD654\uBA74\uC744 \uD074\uB9AD\uD574 \uC870\uC900\uC744 \uC7A0\uADF8\uC138\uC694")}_applyYou(){if(!(this.onlineYouId==null||!this.game)&&(this.human=this.game.players.find(t=>t.id===this.onlineYouId)||null,this.human)){let t=this.actors.get(this.human.id);t&&(this.scene3.remove(t),this.actors.delete(this.human.id));let e=this.hpSprites&&this.hpSprites.get(this.human.id);e&&(e.visible=!1)}}_onlineSnap(t){if(!this.online||!this.game)return;this.human||this._applyYou();let e=this.game;e.t=t.t,e.zone.radius=t.zone.r,e.zone.nextShrink=t.t+t.zone.next;for(let o of t.players){let l=e.players.find(P=>P.id===o[0]);if(!l)continue;if(o.length===1){l.alive&&(l.alive=!1,e.placementOrder.includes(l.id)||e.placementOrder.push(l.id),e.corpses.push({id:l.id,x:l.x,y:l.y,skin:l.skin,name:l.name,at:e.t,yaw:l.aim}));continue}let[,c,d,h,p,m,_,g,f,u,x,S,y,C,T,A,R,w,M]=o;l.x=c,l.y=d,l.z=h,l.hp=m,l.snowballs=_,l.crafting=!!g,l.shieldHits=f,l.mg=u>0?{ammo:u,until:e.t+99,fireCd:0}:null,l.buff=x?{kind:x,until:e.t+99,mul:1}:null,l.cover=!!S,l.sleepUntil=y?e.t+1:0,l.chargeUntil=C?e.t+1:0,l.hasClub=!!T,l.caps=A||0,l.item=R?{id:R,usesLeft:w}:null,l.jetFuel=M||0,(!this.human||l.id!==this.human.id)&&(l.aim=p)}let n=new Set;for(let[o,l,c,d,h]of t.balls){n.add(o);let p=e.snowballs.find(m=>m.id===o);p||(p={id:o,x:l,y:c,dirX:0,dirY:0,traveled:h,range:100,speed:0,flat:!!d,dead:!1},e.snowballs.push(p)),p.x=l,p.y=c,p.traveled=h,p.range=100}e.snowballs=e.snowballs.filter(o=>n.has(o.id));let s=new Set;for(let[o,l,c,d,h]of t.walls){s.add(o);let p=e.walls.find(m=>m.id===o);p||(p={id:o,x:l,y:c,angle:d,hp:h},e.walls.push(p)),p.hp=h}e.walls=e.walls.filter(o=>s.has(o.id));let r=new Set;for(let[o,l,c]of t.decoys)r.add(o),e.decoys.find(d=>d.id===o)||e.decoys.push({id:o,x:l,y:c,alive:!0,until:e.t+99});if(e.decoys=e.decoys.filter(o=>r.has(o.id)),t.caps)for(let[o,l,c,d,h]of t.caps){let p=e.caps.find(m=>m.id===o);p||(p={id:o,x:c,y:d,amount:h,takenUntil:0,dropped:!0},e.caps.push(p)),p.x=c,p.y=d,p.amount=h,p.gone=!!l,p.takenUntil=l?e.t+99:0}if(t.nades){let o=new Set;for(let[l,c,d,h,p,m,_,g,f]of t.nades){o.add(l);let u=e.grenades.find(x=>x.id===l);u||(u={id:l,sx:c,sy:d},e.grenades.push(u)),u.x=c,u.y=d,u.z=h,u.lx=p,u.ly=m,u.radius=_,u.explodeAt=e.t+g,u.exploded=!!f}e.grenades=e.grenades.filter(l=>o.has(l.id))}for(let[o,l,c,d,h]of t.pickups){let p=e.pickups.find(m=>m.id===o);p&&(p.takenUntil=l?e.t+5:0,p.x=c,p.y=d,h&&p.buff&&(p.buff.kind=h))}for(let[o,l,c,d]of t.piles){let h=e.piles.find(p=>p.id===o);h&&(h.cooldownUntil=l?e.t+5:0,h.x=c,h.y=d)}for(let o of t.events||[]){if(o.type==="kill"){let l=e.players.find(d=>d.id===o.by),c=e.players.find(d=>d.id===o.victim);l&&c&&this.killFeed.push({text:`${l.name} \u2744\u2192 ${c.name}`,until:performance.now()+4200})}o.type==="zoneShrink"&&(this.audio.zoneWarn(),this._toast("\u26A0 \uB208\uBCF4\uB77C \uAD6C\uC5ED\uC774 \uC881\uC544\uC9D1\uB2C8\uB2E4!")),o.type==="pad"&&this.human&&o.id===this.human.id&&this._toast("\u{1F300} \uC2A4\uD504\uB9C1 \uC810\uD504!",1200)}this.killFeed.length>5&&(this.killFeed=this.killFeed.slice(-5));let a=t.alive;a!==this._lastSurvivors&&(this.audio.setIntensity(a),this._lastSurvivors=a),this._lastSnapAt=performance.now()}_onlineDied(t){this.ghost=!0,this._toast(`\u{1F480} \uD0C8\uB77D \u2014 \uCD5C\uC885 ${t.place}\uC704 / ${t.total}\uBA85 \xB7 \uCC98\uCE58 ${t.kills} \u2014 \uC720\uB839 \uBAA8\uB4DC\uB85C \uAD00\uC804\uD569\uB2C8\uB2E4 (WASD \uC774\uB3D9)`,6e3),this.audio.gameover()}_onlineOver(t){this.online=!1;let e=this.human&&t.winner&&t.winner.id===this.human.id,n=document.createElement("div");n.className="sr-result "+(e?"sr-win":"sr-lose");let s=document.createElement("div");s.className="sr-place",s.textContent=e?"\u{1F3C6}":"\u{1F3C1}";let r=document.createElement("h2");r.textContent=e?"\uC124\uC6D0\uC758 \uC655!":`\uC6B0\uC2B9: ${t.winner?t.winner.name:"-"}`,n.appendChild(s),n.appendChild(r),n.appendChild(Ft("p","sr-sub","\uC7A0\uC2DC \uD6C4 \uBC29 \uB85C\uBE44\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4 \u2014 \uC900\uBE44\uB97C \uB204\uB974\uBA74 \uB9AC\uB9E4\uCE58!")),n.appendChild(this._btn("\uD0C0\uC774\uD2C0\uB85C",()=>{this.net&&this.net.send({type:"leave"}),this._showTitle()})),this.overlay.innerHTML="",this.overlay.appendChild(n),this.overlay.style.display="flex",e&&this.audio.fanfare(),this.sceneName="result"}_enterPlay(){this.sceneName="play",this.dropTarget&&(this.human.x=this.dropTarget.x,this.human.y=this.dropTarget.y),this.yaw=this._dropLandYaw!=null?this._dropLandYaw:Math.atan2(this.game.zone.cy-this.human.y,this.game.zone.cx-this.human.x),this.pitch=0,this.audio.landing(),this._toast("\uD654\uBA74\uC744 \uD074\uB9AD\uD574 \uC870\uC900\uC744 \uC7A0\uADF8\uC138\uC694 (ESC \uD574\uC81C)")}_showResult(){this.sceneName="result",this.hud.style.display="none",document.pointerLockElement&&document.exitPointerLock();let t=lh(this.game);t.won?this.audio.fanfare():this.audio.gameover(),this.audio.stopAll();let e=document.createElement("div");e.className="sr-result "+(t.won?"sr-win":"sr-lose");let n=document.createElement("div");n.className="sr-place",n.textContent=t.won?"\u{1F3C6}":`#${t.place}`;let s=document.createElement("h2");s.textContent=t.won?"\uC124\uC6D0\uC758 \uC655!":"\uD0C8\uB77D";let r=document.createElement("div");r.className="sr-rstats",r.appendChild(this._stat("\uC21C\uC704",`${t.place}/${t.total}`)),r.appendChild(this._stat("\uCC98\uCE58",t.kills)),r.appendChild(this._stat("\uC0DD\uC874",`${Math.floor(t.survivedSec/60)}:${String(Math.floor(t.survivedSec%60)).padStart(2,"0")}`)),e.appendChild(n),e.appendChild(s),e.appendChild(r);let a=document.createElement("p");a.className="sr-sub",a.textContent=t.won?"\uB9C8\uC9C0\uB9C9\uAE4C\uC9C0 \uB9DE\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.":this._humanLastCause||"\uB208\uBB49\uCE58\uC5D0 \uB9DE\uC544 \uD0C8\uB77D\uD588\uC2B5\uB2C8\uB2E4.",e.appendChild(a);let o=this._btn("\uB2E4\uC2DC \uB3C4\uC804 (Space)",()=>this.newGame(),!0);e.appendChild(o),e.appendChild(this._btn("\uD0C0\uC774\uD2C0\uB85C",()=>this._showTitle())),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex";try{localStorage.setItem(zg,JSON.stringify({lastPlace:t.place,won:t.won}))}catch{}}_bindInput(){window.addEventListener("keydown",e=>{this.keys[e.code]=!0,e.code==="Space"&&this.sceneName==="result"&&(e.preventDefault(),this.newGame()),this.sceneName==="play"&&(this.ghost?e.code==="Enter"&&!this.online&&this.game&&(this.ghost=!1,this._showResult()):this.online?(e.code==="KeyE"&&(this._queuedCraft=!0),e.code==="KeyQ"&&(this._queuedWall=!0),e.code==="KeyG"&&(this._queuedDecoy=!0),e.code==="KeyF"&&(this._queuedMelee=!0),e.code==="KeyX"&&(this._queuedUse=!0),e.code==="Space"&&(this._queuedJump=!0,this._jetHold=!0)):(e.code==="KeyE"&&this._tryCraft(),e.code==="KeyQ"&&this._act("wall"),e.code==="KeyG"&&this._act("decoy"),e.code==="KeyF"&&this._melee(),e.code==="KeyX"&&this._useItem(),e.code==="Space"&&(this.human.jetHold=!0,fl(this.game,this.human)&&this.audio.throw())),["KeyW","KeyA","KeyS","KeyD","Space"].includes(e.code)&&e.preventDefault()),e.code==="KeyM"&&(this._showMinimap=!this._showMinimap)}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1,e.code==="Space"&&(this.human&&(this.human.jetHold=!1),this._jetHold=!1)}),window.addEventListener("blur",()=>{this.keys={},this.mouse.down=!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,!this.locked&&this.sceneName==="play"&&this._toast("\uC870\uC900 \uC7A0\uAE08 \uD574\uC81C \u2014 \uD654\uBA74\uC744 \uD074\uB9AD\uD574 \uB2E4\uC2DC \uC7A0\uADF8\uC138\uC694")}),document.addEventListener("mousemove",e=>{if(!this.locked||this.sceneName!=="play")return;let n=.0024;this.yaw+=e.movementX*n;let s=this.invertY?-1:1;this.pitch=Math.max(-.85,Math.min(.85,this.pitch-e.movementY*n*s))});let t=()=>this.canvas.getBoundingClientRect();this.canvas.addEventListener("mousedown",e=>{if(this.audio.resume(),this.sceneName==="drop"){let n=t(),s=this._dropScreenToWorld(e.clientX-n.left,e.clientY-n.top);s&&(this.dropTarget=s);return}if(this.sceneName==="play"){if(!this.locked){let n=this.canvas.requestPointerLock&&this.canvas.requestPointerLock({unadjustedMovement:!0});n&&n.catch&&n.catch(()=>this.canvas.requestPointerLock());return}this.mouse.down=!0,this.mouse.downAt=performance.now()}}),this.canvas.addEventListener("mouseup",()=>{if(this.sceneName==="play"&&this.locked&&this.mouse.down){let e=this.human,n=this.game;!(e&&e.mg&&n&&e.mg.ammo>0&&(this.online||e.mg.until>n.t))&&!this.ghost&&(this.online?e&&e.snowballs>0&&(this._queuedThrow=Wi(performance.now()-this.mouse.downAt),this.audio.throw(),this.viewKick=1):this._throw(performance.now()-this.mouse.downAt)),this.mouse.down=!1}}),this.canvas.addEventListener("touchstart",e=>{this.audio.resume(),this.sceneName==="play"&&(this.mouse.down=!0,this.mouse.downAt=performance.now()),e.preventDefault()},{passive:!1}),this.canvas.addEventListener("touchend",e=>{this.sceneName==="play"&&this.mouse.down&&(this._throw(performance.now()-this.mouse.downAt),this.mouse.down=!1),e.preventDefault()},{passive:!1})}_dropScreenToWorld(t,e){let n=Math.min(this.vw,this.vh)/(I.map.size*1.05),s=this.vw/2-this.game.zone.cx*n,r=this.vh/2-this.game.zone.cy*n;return{x:(t-s)/n,y:(e-r)/n}}_tryCraft(){!this.human.alive||this.human.crafting||(Ur(this.game,this.human)?this.audio.craftStart():this._toast("\uADFC\uCC98\uC5D0 \uB208\uB354\uBBF8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4 \u2014 \uBC18\uC9DD\uC774\uB294 \uD770 \uB454\uB355\uC744 \uCC3E\uC73C\uC138\uC694 (M \uC9C0\uB3C4)"))}_throw(t){if(!this.human.alive||this.human.crafting)return;if(this.human.snowballs<=0){this._toast("\uB208\uBB49\uCE58 \uC5C6\uC74C \u2014 \uB208\uB354\uBBF8\uC5D0\uC11C E\uB85C \uC81C\uC791\uD558\uC138\uC694");return}let e=Wi(t);pl(this.game,this.human,this.yaw,e),this.audio.throw(),this.viewKick=1}_act(t){!this.human.alive||this.human.crafting||(this.human.aim=this.yaw,t==="wall"&&(ah(this.game,this.human)?this.audio.wall():this._toast(`\uC124\uBCBD: \uB208\uBB49\uCE58 ${I.wall.cost}\uAC1C \uD544\uC694 (\uCD5C\uB300 ${I.wall.maxPerPlayer})`)),t==="decoy"&&(oh(this.game,this.human)?this.audio.decoy():this._toast(`\uBBF8\uB07C: \uB208\uBB49\uCE58 ${I.decoy.cost}\uAC1C \uD544\uC694 (\uCD5C\uB300 ${I.decoy.maxPerPlayer})`)))}_melee(){let t=this.human;if(!t.alive||t.crafting)return;let e=ih(this.game,t,this.yaw);this.meleeSwingAt=performance.now(),this.audio.throw(),e&&(this.hitMarkerUntil=performance.now()+300,this.audio.hit())}_useItem(){let t=this.human;if(!t.item){this._toast("\uAC00\uC9C4 \uC544\uC774\uD15C \uC5C6\uC74C \u2014 \uC0C1\uC810\uC5D0\uC11C \uAD6C\uB9E4 \uD6C4 \uC778\uBCA4\uD1A0\uB9AC\uC5D0\uC11C \uC7A5\uCC29");return}let e=sh(this.game,t,this.yaw);e&&(e.used==="hardtack"&&(this.audio.craftDone(),this._toast(`\u{1F36A} \uAC74\uBE75! +${I.shop.hardtack.healAmount} HP (\uB0A8\uC740 ${t.item?t.item.usesLeft:0}\uD68C)`)),e.used==="charge"&&(this.audio.fanfare(),this._toast(`\u2697\uFE0F \uB3CC\uACA9! ${I.shop.charge.durationSec}\uCD08 \uBB34\uC801 \u2014 \uBD80\uB52A\uD788\uBA74 \uB0A0\uC544\uAC04\uB2E4!`,4e3)),e.used==="sleepgun"&&(this.audio.throw(),this._toast("\u{1F52B} \uC218\uBA74\uD0C4 \uBC1C\uC0AC!")),e.used==="grenade"&&(this.audio.throw(),this._toast("\u{1F4A3} \uC218\uB958\uD0C4 \uD22C\uCC99 \u2014 3\uCD08 \uD6C4 \uD3ED\uBC1C!")))}_update(t){if(!this.game)return;if(this.sceneName==="drop"){this.dropT+=t,this.dropT>=8&&this._enterPlay();return}if(this.sceneName!=="play")return;if(this.online){this._updateOnline(t);return}if(this.ghost){this._updateGhost(t),this.game&&!this.game.over?(xs(this.game,t),this._drainSoloEvents()):this.game&&this.game.over&&this._showResult();return}let e=this.game,n=this.human;if(n.aim=this.yaw,n.alive&&!n.crafting){let d=0,h=0;if((this.keys.KeyW||this.keys.ArrowUp)&&(d+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(d-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(h+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(h-=1),n.cover=!!this.keys.KeyC,d||h){let p=Math.cos(this.yaw),m=Math.sin(this.yaw),_=p*d+-m*h,g=m*d+p*h;Ge(e,n,_,g,t),this.bobT+=t*9}}n.alive&&!n.crafting&&n.mg&&n.mg.until>e.t&&n.mg.ammo>0&&this.mouse.down&&this.locked&&ul(e,n,this.yaw)&&(this.audio.throw(),this.viewKick=.4);let s=n.hp,r=n.crafting,a=n.alive,o=e.kills[n.id]||0,l=e.stats.hits;if(n.crafting&&(this._craftBeat=(this._craftBeat||0)+t,this._craftBeat>.5&&(this._craftBeat=0,this.audio.craftTick())),xs(e,t),n.hp<s&&(this.audio.hit(),this.damageFlashUntil=performance.now()+250),(e.kills[n.id]||0)>o?this.hitMarkerUntil=performance.now()+400:e.stats.hits>l&&(this.hitMarkerUntil=Math.max(this.hitMarkerUntil,performance.now()+220)),a&&!n.alive&&(this._humanLastCause="\uB208\uBB49\uCE58\uC5D0 \uB9DE\uC544 \uD0C8\uB77D\uD588\uC2B5\uB2C8\uB2E4.",!e.over)){this.ghost=!0;let d=e.players.length-e.placementOrder.indexOf(n.id);this.ghostPos={x:n.x,y:n.y,z:60},this._toast(`\u{1F480} \uD0C8\uB77D \u2014 ${d}\uC704 / ${e.players.length}\uBA85 \xB7 \uC720\uB839 \uBAA8\uB4DC\uB85C \uAD00\uC804 (WASD+\uB9C8\uC6B0\uC2A4, Space \uC0C1\uC2B9/C \uD558\uAC15, Enter \uACB0\uACFC \uBCF4\uAE30)`,7e3),this.audio.gameover();return}for(let d of e.events.splice(0)){if(d.type==="kill"){let h=e.players.find(m=>m.id===d.by),p=e.players.find(m=>m.id===d.victim);h&&p&&this.killFeed.push({text:`${h.name} \u2744\u2192 ${p.name}`,until:performance.now()+4200})}d.type==="pad"&&d.id===n.id&&(this.audio.throw(),this._toast("\u{1F300} \uC2A4\uD504\uB9C1 \uC810\uD504!",1500)),d.type==="shieldBlock"&&d.id===n.id&&(this.shieldFlashUntil=performance.now()+300,this.audio.wall(),d.left===0&&this._toast("\u{1F6E1} \uBC29\uD328\uAC00 \uBD80\uC11C\uC84C\uC2B5\uB2C8\uB2E4!"))}this.killFeed.length>5&&(this.killFeed=this.killFeed.slice(-5));let c=Gi(e);if(c!==this._lastSurvivors&&(this.audio.setIntensity(c),this._lastSurvivors=c),e.zone.shrinks!==this._lastShrinks&&(this._lastShrinks=e.zone.shrinks,this.audio.zoneWarn(),this._toast("\u26A0 \uB208\uBCF4\uB77C \uAD6C\uC5ED\uC774 \uC881\uC544\uC9D1\uB2C8\uB2E4!")),r&&!n.crafting&&n.craftTimer<=0&&n.alive&&this.audio.craftDone(),n.alive){let d=cl(e,n);d>0&&(this._bankCaps(d),this.capsFxUntil=performance.now()+1600,this.capsFxAmount=d,this.audio.craftDone(),this._toast(`\u{1F37E} \uBCD1\uB69C\uAED1 +${d}! (\uC9C0\uAC11 ${this._wallet().caps}\uAC1C)`,2600));let h=Pr(e,n);if(h==="club"&&(this.audio.wall(),this._toast("\u{1F3CF} \uBABD\uB465\uC774 \uD68D\uB4DD! F\uD0A4 \uADFC\uC811 \uACF5\uACA9\uC774 \uAC15\uD574\uC84C\uB2E4 (26 \uD53C\uD574 + \uB109\uBC31)",4e3)),h==="heal"&&(this.audio.craftDone(),this._toast(`\u{1F48A} \uD790\uD329 +${I.items.healAmount} HP`)),h==="shield"&&(this.audio.wall(),this._toast(`\u{1F6E1} \uBC29\uD328 \uD68D\uB4DD \u2014 \uB2E4\uC74C ${I.items.shieldHits}\uD68C \uD53C\uACA9 \uC644\uC804 \uBC29\uC5B4 (\uB0B4\uAD6C\uB3C4 ${I.items.shieldHits})`)),h&&h.kind==="pill"){this.audio.fanfare();let p=h.buff,m=p.kind==="mg"?`\u{1F48A}\u{1F525} \uB208 \uAE30\uAD00\uCD1D!! ${I.items.pill.mgAmmo}\uBC1C \xB7 ${I.items.pill.durationSec}\uCD08 \u2014 \uC88C\uD074\uB9AD \uD640\uB4DC\uB85C \uC5F0\uC0AC`:p.kind==="speed"?`\u{1F48A} \uC54C\uC57D: \uC774\uB3D9\uC18D\uB3C4 +${Math.round((p.mul-1)*100)}% (${I.items.pill.durationSec}\uCD08)`:p.kind==="power"?`\u{1F48A} \uC54C\uC57D: \uACF5\uACA9\uB825 +${Math.round((p.mul-1)*100)}% (${I.items.pill.durationSec}\uCD08)`:`\u{1F48A} \uC54C\uC57D: \uC81C\uC791\uC18D\uB3C4 2\uBC30 (${I.items.pill.durationSec}\uCD08)`;this._toast(m,4200)}}this.viewKick>0&&(this.viewKick=Math.max(0,this.viewKick-t*4)),e.over&&this._showResult()}_updateGhost(t){this.ghostPos||(this.ghostPos={x:this.human?this.human.x:I.map.size/2,y:this.human?this.human.y:I.map.size/2,z:60});let e=260*t,n=0,s=0;(this.keys.KeyW||this.keys.ArrowUp)&&(n+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(n-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(s+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(s-=1);let r=Math.cos(this.yaw),a=Math.sin(this.yaw);this.ghostPos.x=Math.max(0,Math.min(I.map.size,this.ghostPos.x+(r*n-a*s)*e)),this.ghostPos.y=Math.max(0,Math.min(I.map.size,this.ghostPos.y+(a*n+r*s)*e)),this.keys.Space&&(this.ghostPos.z=Math.min(400,this.ghostPos.z+160*t)),this.keys.KeyC&&(this.ghostPos.z=Math.max(10,this.ghostPos.z-160*t))}_drainSoloEvents(){let t=this.game;for(let e of t.events.splice(0))if(e.type==="kill"){let n=t.players.find(r=>r.id===e.by),s=t.players.find(r=>r.id===e.victim);n&&s&&this.killFeed.push({text:`${n.name} \u2744\u2192 ${s.name}`,until:performance.now()+4200})}this.killFeed.length>5&&(this.killFeed=this.killFeed.slice(-5)),t.zone.shrinks!==this._lastShrinks&&(this._lastShrinks=t.zone.shrinks,this.audio.zoneWarn())}_updateOnline(t){let e=this.human;if(!e)return;if(this.ghost){this._updateGhost(t);return}let n=0,s=0;(this.keys.KeyW||this.keys.ArrowUp)&&(n+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(n-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(s+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(s-=1);let r=Math.cos(this.yaw),a=Math.sin(this.yaw),o=n||s?r*n-a*s:0,l=n||s?a*n+r*s:0;(n||s)&&(this.bobT+=t*9),e.aim=this.yaw;let c=e.mg&&e.mg.ammo>0;this.net.send({type:"input",mvx:o,mvy:l,aim:this.yaw,cover:!!this.keys.KeyC,jump:this._queuedJump||void 0,craft:this._queuedCraft||void 0,wall:this._queuedWall||void 0,decoy:this._queuedDecoy||void 0,melee:this._queuedMelee||void 0,useItem:this._queuedUse||void 0,jetHold:this._jetHold||void 0,throwCharge:this._queuedThrow!=null?this._queuedThrow:void 0,mg:!!(c&&this.mouse.down&&this.locked)}),this._queuedMelee&&(this.meleeSwingAt=performance.now(),this.audio.throw()),this._queuedJump=this._queuedCraft=this._queuedWall=this._queuedDecoy=this._queuedMelee=this._queuedUse=!1,this._queuedThrow=null,this._lastHp!=null&&e.hp<this._lastHp&&(this.audio.hit(),this.damageFlashUntil=performance.now()+250),this._lastHp=e.hp}_sync3d(t){let e=this.game,n=this.scene3;if(!n)return;let s=this.human||{x:e.zone.cx,y:e.zone.cy,z:40},r,a,o;if(this.ghost&&this.ghostPos)r=this.ghostPos.x,a=this.ghostPos.z,o=this.ghostPos.y;else{let f=Math.sin(this.bobT)*.8;r=s.x,a=kr+f+(s.z||0),o=s.y}this.camera.position.set(r,a,o);let l=r+Math.cos(this.yaw)*Math.cos(this.pitch)*10,c=a+Math.sin(this.pitch)*10,d=o+Math.sin(this.yaw)*Math.cos(this.pitch)*10;this.camera.lookAt(l,c,d);for(let f of e.players){if(f.id===e._humanId)continue;let u=this.actors.get(f.id);if(!u)continue;u.visible=f.alive;let x=this._hpSprite(f);if(!f.alive){x&&(x.visible=!1);continue}u.position.set(f.x,f.z||0,f.y),u.rotation.y=-f.aim+Math.PI/2;let S=Math.sin(t/130+f.id)*.5,y=u.userData;if(y.legL&&(y.legL.rotation.x=S,y.legR.rotation.x=-S),f.crafting?(y.armL.rotation.x=-1.2,y.armR.rotation.x=-1.2):(y.armL.rotation.x=S*.5,y.armR.rotation.x=-S*.5),f.sleepUntil>e.t?(u.rotation.z=Math.PI/2*.85,u.position.y=3):u.rotation.z!==0&&!(f.kbVx||f.kbVy)&&(u.rotation.z=0),Vn(e,f)&&!y.chargeGlow){let C=new ut(new Ie(on*1.5,14,10),new Ee({color:16732208,transparent:!0,opacity:.28,blending:On,depthWrite:!1}));C.position.y=on*1.2,u.add(C),y.chargeGlow=C}if(y.chargeGlow&&(y.chargeGlow.visible=Vn(e,f)),f.shieldHits>0&&!y.shield){let C=new ut(new Ie(on*1.45,18,14),new Ee({color:5087231,transparent:!0,opacity:.22,blending:On,depthWrite:!1}));C.position.y=on*1.25,u.add(C),y.shield=C}y.shield&&(y.shield.visible=f.shieldHits>0,f.shieldHits>0&&(y.shield.material.opacity=.16+Math.sin(t/180)*.07)),x&&(x.visible=!0,x.position.set(f.x,on*2.75+(f.z||0),f.y),(x.userData.lastHp!==f.hp||x.userData.lastShield!==f.shieldHits)&&this._paintHpSprite(x,f))}for(let f of e.corpses){if(this.corpseSet.has(f.id))continue;this.corpseSet.add(f.id);let u=this.actors.get(f.id);u?this.actors.delete(f.id):(u=this._makeFigure(f.skin,!0),n.add(u)),u.visible=!0,u.position.set(f.x,2.4,f.y),u.rotation.set(-Math.PI/2,0,f.yaw+Math.PI/2);for(let x=0;x<4;x++){let S=new ut(new Ie(1.6+x%2,6,5),new Bt({color:16777215,roughness:1})),y=x/4*Math.PI*2+f.yaw;S.position.set(f.x+Math.cos(y)*9,1,f.y+Math.sin(y)*9),n.add(S)}}let h=new Set;for(let f of e.snowballs){h.add(f.id);let u=this.sbMeshes.get(f.id);if(!u){u=new ge;let T=new ut(new Ie(f.flat?2.4:3.4,12,10),new Bt({color:16777215,emissive:f.flat?16769162:12576511,emissiveIntensity:f.flat?1.3:.9,roughness:.4}));u.add(T);let A=[];for(let R=0;R<5;R++){let w=new ut(new Ie(2.4-R*.38,8,6),new Ee({color:14676735,transparent:!0,opacity:.5-R*.09}));u.add(w),A.push(w)}u.userData.trail=A,u.userData.hist=[],n.add(u),this.sbMeshes.set(f.id,u)}let x=f.range>0?f.traveled/f.range:0,S=f.flat?0:Math.min(60,f.range*.16),y=Math.max(0,4*S*x*(1-x))+(f.flat?kr-2:12);u.position.set(f.x,y,f.y);let C=u.userData.hist;C.unshift({x:f.x,y,z2:f.y}),C.length>6&&C.pop(),u.userData.trail.forEach((T,A)=>{let R=C[Math.min(A+1,C.length-1)];T.position.set(R.x-f.x,R.y-y,R.z2-f.y)})}for(let[f,u]of this.sbMeshes)h.has(f)||(this.scene3.remove(u),this.sbMeshes.delete(f));let p=new Set;for(let f of e.walls){p.add(f.id);let u=this.wallMeshes.get(f.id);u||(u=new ut(new de(I.wall.len,16,6),new Bt({color:15398139,roughness:.9})),u.position.set(f.x,8,f.y),u.rotation.y=-f.angle,this.scene3.add(u),this.wallMeshes.set(f.id,u)),u.material.color.setHex(f.hp>=3?15398139:f.hp===2?14280432:12899554)}for(let[f,u]of this.wallMeshes)p.has(f)||(this.scene3.remove(u),this.wallMeshes.delete(f));let m=new Set;for(let f of e.decoys)if(m.add(f.id),!this.decoyMeshes.has(f.id)){let u=new ge,x=new ut(new Ie(6,10,8),new Bt({color:16777215,roughness:.8}));x.position.y=6,u.add(x);let S=new ut(new Ie(4,10,8),new Bt({color:16777215,roughness:.8}));S.position.y=13.5,u.add(S);let y=new ut(new zn(.9,3.4,6),new Bt({color:16739125}));y.rotation.x=Math.PI/2,y.position.set(0,13.5,4),u.add(y),u.position.set(f.x,0,f.y),this.scene3.add(u),this.decoyMeshes.set(f.id,u)}for(let[f,u]of this.decoyMeshes)m.has(f)||(this.scene3.remove(u),this.decoyMeshes.delete(f));for(let f of e.piles){let u=this.pileMeshes&&this.pileMeshes.get(f.id);u&&(u.material.color.setHex(f.cooldownUntil>e.t?12832214:16777215),u.position.set(f.x,0,f.y))}if(this.pickupMeshes)for(let f of e.pickups){let u=this.pickupMeshes.get(f.id);if(!u)continue;f.kind==="pill"&&f.buff&&u.userData.buffKind!==f.buff.kind&&(u=this._makePickupMesh(f));let x=f.takenUntil>e.t;u.visible=!x,x||(u.position.set(f.x,Math.sin(t/400+f.id)*1.6,f.y),u.rotation.y=t/800)}if(this.capMeshes)for(let f of e.caps){let u=this.capMeshes.get(f.id);!u&&!f.gone&&(u=this._makeCapMesh(f)),u&&(u.visible=!f.gone&&f.takenUntil<=e.t,u.visible&&(u.position.set(f.x,Math.sin(t/350+f.id)*.8,f.y),u.rotation.y=t/1200))}if(this.grenadeMeshes){let f=new Set;for(let u of e.grenades){f.add(u.id);let x=this.grenadeMeshes.get(u.id);if(!x){x=new ge;let C=new ut(new Ie(5,12,10),new Bt({color:15791866,roughness:.5,emissive:8952234,emissiveIntensity:.3}));x.add(C);let T=new ut(new wr(u.radius-3,u.radius,40),new Ee({color:16729156,transparent:!0,opacity:.4,side:Fe,depthWrite:!1}));T.rotation.x=-Math.PI/2,T.position.y=.8,x.userData.ring=T,x.userData.ball=C,this.scene3.add(T),this.scene3.add(x),this.grenadeMeshes.set(u.id,x)}x.position.set(u.x,(u.z||0)+4,u.y);let S=x.userData.ring;S.position.set(u.lx,.8,u.ly),S.visible=!0;let y=u.explodeAt-e.t;S.material.opacity=.25+Math.abs(Math.sin(t/(y<1?60:160)))*.4,u.exploded&&(x.userData.ball.visible=!1,S.material.opacity=.9,S.scale.setScalar(1+(e.t-u.explodeAt)*2))}for(let[u,x]of this.grenadeMeshes)f.has(u)||(this.scene3.remove(x),this.scene3.remove(x.userData.ring),this.grenadeMeshes.delete(u))}if(this.padMeshes)for(let[,f]of this.padMeshes){let u=f.userData.plate;u&&(u.position.y=17+Math.sin(t/260)*1.4)}let _=e.zone.radius;if(this.zoneWall.scale.set(_,1,_),this.zoneMat.opacity=.14+Math.sin(t/300)*.05,Math.abs(this._zoneRingR-_)>1&&(this.zoneRing.geometry.dispose(),this.zoneRing.geometry=new ki(_,2.2,8,128),this._zoneRingR=_),this.zoneBeams){let f=t/9e3;this.zoneBeams.children.forEach((u,x)=>{let S=u.userData.angle+f;u.position.x=Math.cos(S)*_,u.position.z=Math.sin(S)*_,u.material.opacity=.4+Math.sin(t/160+x)*.2})}let g=this.snowPts.geometry.attributes.position;for(let f=0;f<g.count;f++){let u=g.getY(f)-.35;u<0&&(u=160),g.setY(f,u)}g.needsUpdate=!0}_loop(){let t=performance.now(),e=n=>{let s=(n-t)/1e3;t=n,s=Math.min(.05,s)*this.timeScale,this.game&&(this.sceneName==="play"||this.sceneName==="drop")&&this._update(s),this.game&&this.scene3&&(this.sceneName==="drop"?this._renderDrop(n):(this._sync3d(n),this.renderer.render(this.scene3,this.camera),this._renderFx(n)),this._renderHud()),requestAnimationFrame(e)};requestAnimationFrame(e)}_renderDrop(t){let e=this.game;if(this._sync3d(t),this.dropPlan)for(let f of e.players){if(f.id===e._humanId||!f.alive)continue;let u=this.dropPlan.get(f.id),x=this.actors.get(f.id);if(!u||!x)continue;if(!u.chute){let y=on,C=new ge,T=new ut(new Ie(y*1.7,12,8,0,Math.PI*2,0,Math.PI/2),new Bt({color:[16739125,8377599,16766011,10477764][f.id%4],roughness:.85,side:Fe}));T.position.y=y*4.4,C.add(T);let A=new Ee({color:14540253});for(let[R,w]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let M=new ut(new Te(.14,.14,y*2.2,3),A);M.position.set(R*y*.9,y*3.3,w*y*.9),M.rotation.z=-R*.32,M.rotation.x=w*.32,C.add(M)}x.add(C),u.chute=C}let S=(this.dropT-u.delay)/u.fallSec;if(S<1){let y=S<=0?620:620*(1-S)*(1-S),C=Math.sin(t/500+u.sway)*14*Math.max(0,1-S);x.position.y=y+.01,x.position.x=f.x+C,x.rotation.z=Math.sin(t/400+u.sway)*.18*Math.max(0,1-S),u.chute.visible=S>0;let T=this.hpSprites&&this.hpSprites.get(f.id);T&&(T.visible=!1)}else x.rotation.z=0,u.chute.visible=!1}let n=this.dropTarget?this.dropTarget.x:e.zone.cx,s=this.dropTarget?this.dropTarget.y:e.zone.cy,r=Math.min(1,this.dropT/8),a=r*r*(3-2*r),o=620*(1-a)+kr,l=-Math.PI/2+a*1.1,c=420*(1-a)+8;this.camera.position.set(n+Math.cos(l)*c,o,s+Math.sin(l)*c);let d=8*(1-a)+kr*a;this.camera.lookAt(n,d,s),this._dropLandYaw=l+Math.PI,this.renderer.render(this.scene3,this.camera);let h=this.fxCtx;h.clearRect(0,0,this.vw,this.vh);let p=Math.min(this.vh*.55,340),m=p/I.map.size,_=this.vw-p-24,g=(this.vh-p)/2;this._dropMap={ox:_,oy:g,zoom:m},h.fillStyle="rgba(13,27,42,0.72)",h.fillRect(_-8,g-26,p+16,p+40),h.strokeStyle="#7fd4ff",h.strokeRect(_-8,g-26,p+16,p+40),h.fillStyle="#fff",h.font="bold 13px system-ui",h.textAlign="center",h.fillText("\u{1F5FA} \uD074\uB9AD\uD574\uC11C \uB099\uD558 \uC9C0\uC810 \uC120\uD0DD",_+p/2,g-9),h.fillStyle="rgba(200,220,235,0.25)",h.fillRect(_,g,p,p),h.beginPath(),h.arc(e.zone.cx*m+_,e.zone.cy*m+g,e.zone.radius*m,0,Math.PI*2),h.strokeStyle="#7fd4ff",h.lineWidth=2,h.stroke();for(let f of e.piles)h.fillStyle="rgba(255,255,255,0.95)",h.fillRect(f.x*m+_-1,f.y*m+g-1,3,3);for(let f of e.pickups)h.fillStyle=f.kind==="heal"?"#ff6b6b":f.kind==="shield"?"#4d9fff":"#ffd43b",h.fillRect(f.x*m+_-1.5,f.y*m+g-1.5,3.5,3.5);if(this.dropTarget){let f=this.dropTarget.x*m+_,u=this.dropTarget.y*m+g;h.strokeStyle="#FF6B35",h.lineWidth=3,h.beginPath(),h.arc(f,u,11,0,Math.PI*2),h.stroke(),h.beginPath(),h.moveTo(f-16,u),h.lineTo(f+16,u),h.moveTo(f,u-16),h.lineTo(f,u+16),h.stroke()}}_renderFx(t){let e=this.fxCtx;if(e.clearRect(0,0,this.vw,this.vh),this.sceneName!=="play"||!this.human)return;if(this.ghost){e.fillStyle="rgba(13,27,42,0.75)",e.fillRect(this.vw/2-190,14,380,34),e.fillStyle="#A8D8EA",e.font="bold 14px system-ui",e.textAlign="center",e.fillText(`\u{1F47B} \uAD00\uC804 \uC911 \xB7 \uC0DD\uC874 ${this._lastSurvivors??""}${this.online?"":" \xB7 Enter=\uACB0\uACFC"}`,this.vw/2,36);return}let n=this.human,s=this.game;if(Math.hypot(n.x-s.zone.cx,n.y-s.zone.cy)>s.zone.radius&&(e.fillStyle="rgba(90,140,200,0.25)",e.fillRect(0,0,this.vw,this.vh)),t<this.damageFlashUntil){let o=e.createRadialGradient(this.vw/2,this.vh/2,this.vh*.35,this.vw/2,this.vh/2,this.vh*.75);o.addColorStop(0,"rgba(220,20,60,0)"),o.addColorStop(1,"rgba(220,20,60,0.5)"),e.fillStyle=o,e.fillRect(0,0,this.vw,this.vh)}if(n.shieldHits>0||t<(this.shieldFlashUntil||0)){let l=t<(this.shieldFlashUntil||0)?.45:.14+Math.sin(t/300)*.04,c=e.createRadialGradient(this.vw/2,this.vh/2,this.vh*.38,this.vw/2,this.vh/2,this.vh*.72);c.addColorStop(0,"rgba(77,159,255,0)"),c.addColorStop(1,`rgba(77,159,255,${l})`),e.fillStyle=c,e.fillRect(0,0,this.vw,this.vh)}if(t<(this.capsFxUntil||0)){let o=1-(this.capsFxUntil-t)/1600,l=this.vw/2,c=this.vh*.34;e.save(),e.globalAlpha=1-o;for(let d=0;d<10;d++){let h=d/10*Math.PI*2+o*2,p=20+o*70;e.fillStyle=d%2?"#FFD43B":"#D4A017",e.beginPath(),e.arc(l+Math.cos(h)*p,c+Math.sin(h)*p*.6,4-o*2,0,Math.PI*2),e.fill()}e.fillStyle="#FFD43B",e.font=`bold ${Math.round(30-o*8)}px system-ui`,e.textAlign="center",e.shadowColor="#000",e.shadowBlur=6,e.fillText(`\u{1F37E} +${this.capsFxAmount}`,l,c-20-o*26),e.restore()}if(this.meleeSwingAt&&t-this.meleeSwingAt<180){let o=(t-this.meleeSwingAt)/180;e.save(),e.globalAlpha=.7*(1-o),e.strokeStyle=this.human.hasClub?"#c98a4b":"#ffffff",e.lineWidth=7-o*4,e.beginPath(),e.arc(this.vw/2,this.vh/2,60+o*80,-.9+o*1.4,.2+o*1.4),e.stroke(),e.restore()}if(this._renderViewModel(e,t),this._renderCrosshair(e,t),!this.locked&&n.alive){e.fillStyle="rgba(13,27,42,0.75)";let o=420,l=54;e.fillRect(this.vw/2-o/2,this.vh*.62,o,l),e.strokeStyle="#FF6B35",e.strokeRect(this.vw/2-o/2,this.vh*.62,o,l),e.fillStyle="#fff",e.font="bold 16px system-ui",e.textAlign="center",e.fillText("\u{1F5B1} \uD654\uBA74\uC744 \uD074\uB9AD\uD574 \uC870\uC900 \uC7A0\uAE08 (\uB9C8\uC6B0\uC2A4\uB85C \uC2DC\uC810 \uD68C\uC804)",this.vw/2,this.vh*.62+33)}Dr(s,n)&&!n.crafting&&n.alive&&(e.fillStyle="#FF6B35",e.font="bold 17px system-ui",e.textAlign="center",e.fillText("E \u2014 \uB208\uBB49\uCE58 \uC81C\uC791 (3\uCD08 \uBB34\uBC29\uBE44)",this.vw/2,this.vh*.56))}_renderViewModel(t,e){let n=this.human;if(!n.alive)return;let s=this.vw/2,r=this.vh,a=Math.sin(this.bobT)*5,o=this.viewKick||0,l=this.mouse.down?Wi(performance.now()-this.mouse.downAt):0,c=l*26+o*-34,d=s+this.vw*.21,h=r-64+a+c*.6;if(t.fillStyle="#1B2A4A",t.beginPath(),t.moveTo(d+90,r+10),t.quadraticCurveTo(d+40,h+40,d,h+8),t.lineTo(d+34,h-14),t.quadraticCurveTo(d+90,h+20,d+130,r+10),t.closePath(),t.fill(),t.fillStyle="#FF6B35",t.beginPath(),t.ellipse(d+16,h+2,20,12,-.5,0,Math.PI*2),t.fill(),t.fillStyle="#2c3e63",t.beginPath(),t.ellipse(d,h-6,24,19,-.35,0,Math.PI*2),t.fill(),n.snowballs>0&&!n.crafting&&(t.fillStyle="#ffffff",t.strokeStyle="#bcd7e8",t.beginPath(),t.arc(d-6,h-18,15+l*3,0,Math.PI*2),t.fill(),t.stroke()),n.crafting){let p=1-n.craftTimer/I.craft.seconds,m=Math.sin(e/90)*6;t.fillStyle="#2c3e63",t.beginPath(),t.ellipse(s-46+m,r-58,26,20,.4,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(s+46-m,r-58,26,20,-.4,0,Math.PI*2),t.fill(),t.fillStyle="#fff",t.strokeStyle="#bcd7e8",t.beginPath(),t.arc(s,r-66,17+p*6,0,Math.PI*2),t.fill(),t.stroke()}}_renderCrosshair(t,e){let n=this.vw/2,s=this.vh/2,r=this.human;t.strokeStyle="rgba(255,255,255,0.95)",t.lineWidth=2;let a=5+(this.mouse.down?Wi(performance.now()-this.mouse.downAt)*8:0),o=8;if(t.beginPath(),t.moveTo(n-a-o,s),t.lineTo(n-a,s),t.moveTo(n+a,s),t.lineTo(n+a+o,s),t.moveTo(n,s-a-o),t.lineTo(n,s-a),t.moveTo(n,s+a),t.lineTo(n,s+a+o),t.stroke(),t.fillStyle="rgba(255,255,255,0.95)",t.fillRect(n-1,s-1,2,2),this.mouse.down&&r.alive&&!r.crafting){let l=Wi(performance.now()-this.mouse.downAt),c=90;t.fillStyle="rgba(0,0,0,0.45)",t.fillRect(n-c/2,s+26,c,7),t.fillStyle=l>.85?"#DC143C":"#FF6B35",t.fillRect(n-c/2,s+26,c*l,7),t.fillStyle="#fff",t.font="11px system-ui",t.textAlign="center",t.fillText(`${Math.round(rh(l)/10)}m`,n,s+47)}if(r.crafting){let l=1-r.craftTimer/I.craft.seconds,c=l<.5?"#ffffff":l<.85?"#FF6B35":"#DC143C";t.strokeStyle=c,t.lineWidth=5,t.beginPath(),t.arc(n,s,34,-Math.PI/2,-Math.PI/2+l*Math.PI*2),t.stroke(),t.fillStyle=c,t.font="bold 20px system-ui",t.textAlign="center",t.fillText(String(Math.ceil(r.craftTimer)),n,s+7),t.font="bold 13px system-ui",t.fillText("\uC81C\uC791 \uC911 \u2014 \uBB34\uBC29\uBE44!",n,s+62)}if(e<this.hitMarkerUntil){t.strokeStyle="rgba(255,80,60,0.95)",t.lineWidth=3;let l=7,c=8;t.beginPath(),t.moveTo(n-l-c,s-l-c),t.lineTo(n-l,s-l),t.moveTo(n+l,s-l),t.lineTo(n+l+c,s-l-c),t.moveTo(n-l-c,s+l+c),t.lineTo(n-l,s+l),t.moveTo(n+l,s+l),t.lineTo(n+l+c,s+l+c),t.stroke()}}_renderHud(){if(this.sceneName!=="play"&&this.sceneName!=="drop"){this.hud.style.display="none";return}this.hud.style.display="block";let t=this.game,e=this.human;if(!t||!e)return;let n=this.online?this._lastSurvivors||t.players.length:Gi(t),s=ol(n),r=Math.max(0,Math.ceil(t.zone.nextShrink-t.t));this.hud.textContent="";let a=Ft("div","sr-hud-top");a.appendChild(Ft("div","sr-hud-surv",`\uC0DD\uC874 ${n}`)),a.appendChild(Ft("div","sr-hud-act",s.title)),a.appendChild(Ft("div","sr-hud-zone",`\u26C8 ${r}s`)),this.hud.appendChild(a);let o=Ft("div","sr-hud-bl"),l=Ft("div","sr-hp"),c=e.maxHp||100,d=Ft("div","sr-hp-fill");if(d.style.width=Math.max(0,e.hp/c*100)+"%",d.style.background=e.hp>c*.5?"#7FFFD4":e.hp>c*.25?"#FF6B35":"#DC143C",l.appendChild(d),l.appendChild(Ft("span","sr-hp-txt",`${Math.max(0,Math.round(e.hp))}/${c}`)),o.appendChild(l),e.shieldHits>0&&o.appendChild(Ft("div","sr-shield",`\u{1F6E1} \uBC29\uD328 \uB0B4\uAD6C\uB3C4 ${e.shieldHits}/${I.items.shieldHits} \u2014 \uD53C\uACA9 \uC644\uC804 \uBC29\uC5B4`)),e.mg&&e.mg.until>t.t&&e.mg.ammo>0&&o.appendChild(Ft("div","sr-buff sr-buff-mg",`\u{1F525} \uB208 \uAE30\uAD00\uCD1D ${e.mg.ammo}\uBC1C \xB7 ${Math.ceil(e.mg.until-t.t)}\uCD08`)),e.buff&&e.buff.until>t.t){let _=e.buff.kind==="speed"?"\u{1F4A8} \uC774\uB3D9\uC18D\uB3C4 \uC99D\uAC00":e.buff.kind==="power"?"\u{1F4AA} \uACF5\uACA9\uB825 \uC99D\uAC00":"\u2692 \uC81C\uC791\uC18D\uB3C4 \uC99D\uAC00";o.appendChild(Ft("div","sr-buff",`${_} ${Math.ceil(e.buff.until-t.t)}\uCD08`))}let h=Hn[e.classId];h&&o.appendChild(Ft("div","sr-class-tag",h.name)),this.sceneName==="drop"&&o.appendChild(Ft("div","sr-drop",`\uB099\uD558 \uC911 \u2014 \uCC29\uC9C0 ${Math.max(0,Math.ceil(8-this.dropT))}s (\uC9C0\uB3C4 \uD074\uB9AD=\uB099\uD558 \uC9C0\uC810)`)),this.hud.appendChild(o);let p=Ft("div","sr-hud-br");if(p.appendChild(Ft("div","sr-ammo-big",`${e.snowballs}`)),p.appendChild(Ft("div","sr-ammo-cap","\u2744 SNOWBALLS")),p.appendChild(Ft("div","sr-tac",`Q \uC124\uBCBD ${e.walls}/${I.wall.maxPerPlayer} \xB7 G \uBBF8\uB07C ${e.decoys}/${I.decoy.maxPerPlayer} \xB7 F ${e.hasClub?"\u{1F3CF} \uBABD\uB465\uC774":"\u{1F44A} \uC8FC\uBA39"}`)),p.appendChild(Ft("div","sr-caps",`\u{1F37E} ${e.caps||0}`)),e.item){let _=I.shop[e.item.id],g=e.item.id==="jetpack"?`${_.emoji} \uC5F0\uB8CC ${Math.ceil(e.jetFuel)}s (\uC810\uD504\uD0A4)`:`${_.emoji} ${_.name}${e.item.id==="hardtack"?` ${e.item.usesLeft}\uD68C`:""} \u2014 X\uD0A4`;p.appendChild(Ft("div","sr-item-slot",g))}Vn(t,e)&&p.appendChild(Ft("div","sr-buff sr-buff-mg",`\u2697\uFE0F \uB3CC\uACA9 \uBB34\uC801 ${Math.ceil(e.chargeUntil-t.t)}\uCD08`)),this.hud.appendChild(p);let m=performance.now();if(this.killFeed=this.killFeed.filter(_=>_.until>m),this.killFeed.length){let _=Ft("div","sr-killfeed");for(let g of this.killFeed)_.appendChild(Ft("div","sr-kf-row",g.text));this.hud.appendChild(_)}this._showMinimap&&this.sceneName==="play"&&this.hud.appendChild(this._minimapEl()),this._toastText&&performance.now()<this._toastUntil&&this.hud.appendChild(Ft("div","sr-toast",this._toastText))}_minimapEl(){let t=this.game,e=Ft("div","sr-minimap"),n=document.createElement("canvas");n.width=170,n.height=170,e.appendChild(n);let s=n.getContext("2d"),r=170/I.map.size;s.fillStyle="rgba(13,27,42,0.88)",s.fillRect(0,0,170,170),s.strokeStyle="#7fd4ff",s.lineWidth=1.5,s.beginPath(),s.arc(t.zone.cx*r,t.zone.cy*r,t.zone.radius*r,0,Math.PI*2),s.stroke();for(let o of t.obstacles)s.fillStyle="rgba(120,140,160,0.6)",s.fillRect(o.x*r-1,o.y*r-1,3,3);for(let o of t.piles)o.cooldownUntil<=t.t&&(s.fillStyle="#A8D8EA",s.fillRect(o.x*r-1,o.y*r-1,3,3));for(let o of t.players)o.alive&&(s.fillStyle=o.id===t._humanId?"#FF6B35":"#9E9E9E",s.beginPath(),s.arc(o.x*r,o.y*r,o.id===t._humanId?3.4:2,0,Math.PI*2),s.fill());let a=this.human;return s.strokeStyle="rgba(255,107,53,0.8)",s.beginPath(),s.moveTo(a.x*r,a.y*r),s.lineTo(a.x*r+Math.cos(this.yaw)*14,a.y*r+Math.sin(this.yaw)*14),s.stroke(),e}_toast(t,e=3200){this._toastText=t,this._toastUntil=performance.now()+e}_btn(t,e,n){let s=document.createElement("button");return s.className="sr-btn"+(n?" primary":""),s.textContent=t,s.addEventListener("click",()=>{this.audio.resume(),e()}),s}_stat(t,e){let n=Ft("div","sr-stat");return n.appendChild(Ft("div","sr-stat-v",String(e))),n.appendChild(Ft("div","sr-stat-l",t)),n}async __drive(t){if(t==="title"){this._showTitle();return}if(this.newGame(42),t!=="drop"){if(t==="play"||t==="fps"){this._enterPlay(),this.human.snowballs=10;let e=this.human;this.yaw=0,this.pitch=0;let n=this.game.players.filter(r=>r.isNpc).slice(0,4),s=[80,150,260,420];n.forEach((r,a)=>{r.x=e.x+s[a],r.y=e.y+(a-1.5)*55,r.aim=Math.PI+Math.atan2(r.y-e.y,r.x-e.x)}),this.game.piles.push({id:90001,x:e.x+44,y:e.y+12,cooldownUntil:0}),this.game.pickups.push({id:90002,kind:"heal",x:e.x+70,y:e.y-40,takenUntil:0}),this.game.pickups.push({id:90003,kind:"shield",x:e.x+110,y:e.y+60,takenUntil:0}),this.game.pickups.push({id:90004,kind:"pill",x:e.x+60,y:e.y+18,takenUntil:0}),this._buildWorld(),n.forEach(r=>{r.hp=40+r.id*13%55});return}if(t==="corpse"){this._enterPlay(),this.yaw=0;let e=this.human;this.game.players.filter(s=>s.isNpc).slice(0,3).forEach((s,r)=>{s.x=e.x+90+r*60,s.y=e.y+(r-1)*45,an(this.game,s,0)});return}if(t==="throw"){this._enterPlay(),this.yaw=0,this.human.snowballs=10,this.locked=!0,this._throw(600),this._throw(1200);return}if(t==="result"||t==="win"){if(this._enterPlay(),t==="win")for(let e of this.game.players)e.id!==this.game._humanId&&an(this.game,e,0);else an(this.game,this.human,0);this._showResult();return}}}__validate(){let t={checks:[],errors:[]},e=(n,s,r="")=>t.checks.push({name:n,pass:!!s,detail:r});try{let n=_s(42,{total:20,difficulty:"normal"});e("20\uC778 \uC0DD\uC131(\uD50C\uB808\uC774\uC5B41+NPC19)",n.players.length===20&&n.players.filter(c=>c.isNpc).length===19),e("\uC7A5\uC560\uBB3C \uC0DD\uC131(\uBC14\uC704/\uB098\uBB34/\uC624\uB450\uB9C9)",n.obstacles.length>=30,`${n.obstacles.length}`);let s=rn(n);n.piles.push({id:1,x:s.x,y:s.y,cooldownUntil:0}),Ur(n,s),xs(n,3.01),e("3\uCD08 \uC81C\uC791 +10",s.snowballs===10,String(s.snowballs));let r=n.players[2];an(n,r,0),e("\uD0C8\uB77D \uC2DC \uC2DC\uCCB4 \uC0DD\uC131",n.corpses.length===1&&n.corpses[0].id===r.id),this.game=n,this.human=s,this._buildWorld(),e("3D \uC6D4\uB4DC \uC0DD\uC131(THREE scene)",!!this.scene3&&this.scene3.children.length>30,`children=${this.scene3.children.length}`),e("NPC 3D \uD53C\uADDC\uC5B4 \uC0DD\uC131",this.actors.size===19,`${this.actors.size}`),e("WebGL \uB80C\uB354\uB7EC",!!this.renderer&&!!this.renderer.getContext());let a=0;for(;!n.over&&a++<12e3;){let c=rn(n);if(c.alive){c.npc||(c.npc={state:"PATROL",reactTimer:0});let d=c.isNpc;c.isNpc=!0,ml(n,c,.1),c.isNpc=d}xs(n,.1)}e("\uB9E4\uCE58 \uC644\uC8FC(\uC2B9\uC790 1\uC778)",n.over&&Gi(n)===1,`t=${n.t.toFixed(0)}s`),e("\uC2DC\uCCB4 \uB2E4\uC218 \uB204\uC801(\uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uC74C)",n.corpses.length>=18,`corpses=${n.corpses.length}`);let o=_s(7,{total:20,difficulty:"normal",classId:"bear"});e("\uC544\uC774\uD15C \uC2A4\uD3F0(\uD790\uD329+\uBC29\uD328)",o.pickups.filter(c=>c.kind==="heal").length===10&&o.pickups.filter(c=>c.kind==="shield").length===6,`${o.pickups.length}`);let l=rn(o);e("\uD074\uB798\uC2A4 \uC801\uC6A9(\uBE45 \uBCA0\uC5B4 HP 130)",l.maxHp===130&&l.hp===130,`${l.hp}/${l.maxHp}`),an(o,l,50),o.pickups[0].x=l.x,o.pickups[0].y=l.y,o.pickups[0].kind="heal",o.pickups[0].takenUntil=0,e("\uD790\uD329 +40",Pr(o,l)==="heal"&&l.hp===90,`${l.hp}`),this.game=o,this.human=l,this._buildWorld();for(let c of o.players)c.isNpc&&c.alive&&this._hpSprite(c);e("\uC801 HP \uAC8C\uC774\uC9C0 \uC2A4\uD504\uB77C\uC774\uD2B8 19\uAC1C",this.hpSprites.size===19,`${this.hpSprites.size}`),e("\uC544\uC774\uD15C 3D \uBA54\uC2DC \uC0DD\uC131",this.pickupMeshes&&this.pickupMeshes.size===o.pickups.length,`${this.pickupMeshes?this.pickupMeshes.size:0}`)}catch(n){t.errors.push(String(n&&n.message||n))}return t.pass=t.checks.every(n=>n.pass)&&t.errors.length===0,t}};function Ft(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.textContent=e),n}var ys=new URLSearchParams(location.search),Hg=ys.has("seed")?parseInt(ys.get("seed"),10):null,Vg=ys.get("fast")?parseFloat(ys.get("fast")):1,_l=ys.get("screen"),uh=new Br(document.getElementById("game"),{seed:Hg,timeScale:Vg,autoStart:!_l});window.__SR=uh;_l&&uh.__drive(_l);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
