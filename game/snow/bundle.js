"use strict";(()=>{var ch=0,Sl=1,hh=2;var Cc=1,uh=2,dn=3,Nn=0,Ce=1,ke=2,Ln=0,Ei=1,jn=2,bl=3,wl=4,dh=5,Zn=100,fh=101,ph=102,mh=103,gh=104,_h=200,xh=201,yh=202,vh=203,xa=204,ya=205,Mh=206,Sh=207,bh=208,wh=209,Eh=210,Th=211,Ah=212,Ch=213,Rh=214,va=0,Ma=1,Sa=2,Ri=3,ba=4,wa=5,Ea=6,Ta=7,Rc=0,Ih=1,Ph=2,Dn=0,Lh=1,Dh=2,Uh=3,Nh=4,Fh=5,Oh=6,Bh=7;var Ic=300,Ii=301,Pi=302,Aa=303,Ca=304,br=306,Ra=1e3,Kn=1001,Ia=1002,Je=1003,zh=1004;var ys=1005;var en=1006,Or=1007;var Qn=1008;var _n=1009,Pc=1010,Lc=1011,ns=1012,qo=1013,ti=1014,pn=1015,fs=1016,Yo=1017,$o=1018,Li=1020,Dc=35902,Uc=1021,Nc=1022,Ze=1023,Fc=1024,Oc=1025,Ti=1026,Di=1027,Bc=1028,Zo=1029,zc=1030,Jo=1031;var Ko=1033,Ys=33776,$s=33777,Zs=33778,Js=33779,Pa=35840,La=35841,Da=35842,Ua=35843,Na=36196,Fa=37492,Oa=37496,Ba=37808,za=37809,ka=37810,Ha=37811,Va=37812,Ga=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,$a=37818,Za=37819,Ja=37820,Ka=37821,Ks=36492,Qa=36494,ja=36495,kc=36283,to=36284,eo=36285,no=36286;var Qs=2300,io=2301,Br=2302,El=2400,Tl=2401,Al=2402;var kh=3200,Hh=3201;var Hc=0,Vh=1,In="",ze="srgb",Bi="srgb-linear",wr="linear",Jt="srgb";var ai=7680;var Cl=519,Gh=512,Wh=513,Xh=514,Vc=515,qh=516,Yh=517,$h=518,Zh=519,so=35044;var Rl="300 es",mn=2e3,js=2001,Fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var zr=Math.PI/180,ro=180/Math.PI;function Un(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function Jh(i,t){return(i%t+t)%t}function kr(i,t,e){return(1-e)*i+e*t}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],m=n[5],_=n[8],g=s[0],f=s[3],d=s[6],y=s[1],S=s[4],x=s[7],R=s[2],T=s[5],A=s[8];return r[0]=a*g+o*y+l*R,r[3]=a*f+o*S+l*T,r[6]=a*d+o*x+l*A,r[1]=c*g+u*y+h*R,r[4]=c*f+u*S+h*T,r[7]=c*d+u*x+h*A,r[2]=p*g+m*y+_*R,r[5]=p*f+m*S+_*T,r[8]=p*d+m*x+_*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,p=o*l-u*r,m=c*r-a*l,_=e*h+n*p+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=h*g,t[1]=(s*c-u*n)*g,t[2]=(o*n-s*a)*g,t[3]=p*g,t[4]=(u*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Hr.makeScale(t,e)),this}rotate(t){return this.premultiply(Hr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Hr=new Lt;function Gc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kh(){let i=tr("canvas");return i.style.display="block",i}var Il={};function Ki(i){i in Il||(Il[i]=!0,console.warn(i))}function Qh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function jh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function tu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Wt={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Jt&&(i.r=gn(i.r),i.g=gn(i.g),i.b=gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Jt&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===In?wr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Pl=[.64,.33,.3,.6,.15,.06],Ll=[.2126,.7152,.0722],Dl=[.3127,.329],Ul=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Bi]:{primaries:Pl,whitePoint:Dl,transfer:wr,toXYZ:Ul,fromXYZ:Nl,luminanceCoefficients:Ll,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:Pl,whitePoint:Dl,transfer:Jt,toXYZ:Ul,fromXYZ:Nl,luminanceCoefficients:Ll,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}});var oi,ao=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=tr("canvas")),oi.width=t.width,oi.height=t.height;let n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=tr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gn(e[n]/255)*255):e[n]=gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},eu=0,er=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Un(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vr(s[a].image)):r.push(Vr(s[a]))}else r=Vr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ao.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nu=0,Ue=class i extends Fn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Kn,s=Kn,r=en,a=Qn,o=Ze,l=_n,c=i.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Un(),this.name="",this.source=new er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ra:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case Ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ra:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case Ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Ic;Ue.DEFAULT_ANISOTROPY=1;var ce=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],p=l[1],m=l[5],_=l[9],g=l[2],f=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-g)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+g)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,x=(m+1)/2,R=(d+1)/2,T=(u+p)/4,A=(h+g)/4,C=(_+f)/4;return S>x&&S>R?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=A/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=C/r),this.set(n,s,r,e),this}let y=Math.sqrt((f-_)*(f-_)+(h-g)*(h-g)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(f-_)/y,this.y=(h-g)/y,this.z=(p-u)/y,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oo=class extends Fn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new er(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends oo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},nr=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var lo=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var On=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],p=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==p||c!==m||u!==_){let f=1-o,d=l*p+c*m+u*_+h*g,y=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){let R=Math.sqrt(S),T=Math.atan2(R,d*y);f=Math.sin(f*T)/R,o=Math.sin(o*T)/R}let x=o*y;if(l=l*f+p*x,c=c*f+m*x,u=u*f+_*x,h=h*f+g*x,f===1-o){let R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],p=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+u*h+l*m-c*p,t[e+1]=l*_+u*p+c*h-o*m,t[e+2]=c*_+u*m+o*p-l*h,t[e+3]=u*_-o*h-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),p=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*u*h+c*m*_,this._y=c*m*h-p*u*_,this._z=c*u*_+p*m*h,this._w=c*u*h-p*m*_;break;case"YXZ":this._x=p*u*h+c*m*_,this._y=c*m*h-p*u*_,this._z=c*u*_-p*m*h,this._w=c*u*h+p*m*_;break;case"ZXY":this._x=p*u*h-c*m*_,this._y=c*m*h+p*u*_,this._z=c*u*_+p*m*h,this._w=c*u*h-p*m*_;break;case"ZYX":this._x=p*u*h-c*m*_,this._y=c*m*h+p*u*_,this._z=c*u*_-p*m*h,this._w=c*u*h+p*m*_;break;case"YZX":this._x=p*u*h+c*m*_,this._y=c*m*h+p*u*_,this._z=c*u*_-p*m*h,this._w=c*u*h-p*m*_;break;case"XZY":this._x=p*u*h-c*m*_,this._y=c*m*h-p*u*_,this._z=c*u*_+p*m*h,this._w=c*u*h+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],p=n+o+h;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>h){let m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>h){let m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gr.copy(this).projectOnVector(t),this.sub(Gr)}reflect(t){return this.sub(Gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gr=new P,Fl=new On,ei=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qe):qe.fromBufferAttribute(r,a),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(t.matrixWorld),this.union(vs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wi),Ms.subVectors(this.max,Wi),li.subVectors(t.a,Wi),ci.subVectors(t.b,Wi),hi.subVectors(t.c,Wi),wn.subVectors(ci,li),En.subVectors(hi,ci),Vn.subVectors(li,hi);let e=[0,-wn.z,wn.y,0,-En.z,En.y,0,-Vn.z,Vn.y,wn.z,0,-wn.x,En.z,0,-En.x,Vn.z,0,-Vn.x,-wn.y,wn.x,0,-En.y,En.x,0,-Vn.y,Vn.x,0];return!Wr(e,li,ci,hi,Ms)||(e=[1,0,0,0,1,0,0,0,1],!Wr(e,li,ci,hi,Ms))?!1:(Ss.crossVectors(wn,En),e=[Ss.x,Ss.y,Ss.z],Wr(e,li,ci,hi,Ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},on=[new P,new P,new P,new P,new P,new P,new P,new P],qe=new P,vs=new ei,li=new P,ci=new P,hi=new P,wn=new P,En=new P,Vn=new P,Wi=new P,Ms=new P,Ss=new P,Gn=new P;function Wr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gn.fromArray(i,r);let o=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=t.dot(Gn),c=e.dot(Gn),u=n.dot(Gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var iu=new ei,Xi=new P,Xr=new P,Ui=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):iu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);let e=Xi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(Xr)),this.expandByPoint(Xi.copy(t.center).sub(Xr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ln=new P,qr=new P,bs=new P,Tn=new P,Yr=new P,ws=new P,$r=new P,ir=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qr.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(qr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(bs),o=Tn.dot(this.direction),l=-Tn.dot(bs),c=Tn.lengthSq(),u=Math.abs(1-a*a),h,p,m,_;if(u>0)if(h=a*l-o,p=a*o-l,_=r*u,h>=0)if(p>=-_)if(p<=_){let g=1/u;h*=g,p*=g,m=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;else p=-r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;else p<=-_?(h=Math.max(0,-(-a*r+o)),p=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+p*(p+2*l)+c):p<=_?(h=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(h=Math.max(0,-(a*r+o)),p=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+p*(p+2*l)+c);else p=a>0?-r:r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qr).addScaledVector(bs,p),m}intersectSphere(t,e){ln.subVectors(t.center,this.origin);let n=ln.dot(this.direction),s=ln.dot(ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),u>=0?(r=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-p.z)*h,l=(t.max.z-p.z)*h):(o=(t.max.z-p.z)*h,l=(t.min.z-p.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,s,r){Yr.subVectors(e,t),ws.subVectors(n,t),$r.crossVectors(Yr,ws);let a=this.direction.dot($r),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,t);let l=o*this.direction.dot(ws.crossVectors(Tn,ws));if(l<0)return null;let c=o*this.direction.dot(Yr.cross(Tn));if(c<0||l+c>a)return null;let u=-o*Tn.dot($r);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class i{constructor(t,e,n,s,r,a,o,l,c,u,h,p,m,_,g,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,p,m,_,g,f)}set(t,e,n,s,r,a,o,l,c,u,h,p,m,_,g,f){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=p,d[3]=m,d[7]=_,d[11]=g,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ui.setFromMatrixColumn(t,0).length(),r=1/ui.setFromMatrixColumn(t,1).length(),a=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let p=a*u,m=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+_*c,e[5]=p-g*c,e[9]=-o*l,e[2]=g-p*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){let p=l*u,m=l*h,_=c*u,g=c*h;e[0]=p+g*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-_,e[6]=g+p*o,e[10]=a*l}else if(t.order==="ZXY"){let p=l*u,m=l*h,_=c*u,g=c*h;e[0]=p-g*o,e[4]=-a*h,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*u,e[9]=g-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let p=a*u,m=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=_*c-m,e[8]=p*c+g,e[1]=l*h,e[5]=g*c+p,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let p=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-p*h,e[8]=_*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+_,e[10]=p-g*h}else if(t.order==="XZY"){let p=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=p*h+g,e[5]=a*u,e[9]=m*h-_,e[2]=_*h-m,e[6]=o*u,e[10]=g*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(su,t,ru)}lookAt(t,e,n){let s=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),An.crossVectors(n,Le),An.lengthSq()===0&&(Math.abs(n.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),An.crossVectors(n,Le)),An.normalize(),Es.crossVectors(Le,An),s[0]=An.x,s[4]=Es.x,s[8]=Le.x,s[1]=An.y,s[5]=Es.y,s[9]=Le.y,s[2]=An.z,s[6]=Es.z,s[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],m=n[13],_=n[2],g=n[6],f=n[10],d=n[14],y=n[3],S=n[7],x=n[11],R=n[15],T=s[0],A=s[4],C=s[8],w=s[12],M=s[1],I=s[5],H=s[9],k=s[13],W=s[2],J=s[6],X=s[10],tt=s[14],G=s[3],st=s[7],ut=s[11],St=s[15];return r[0]=a*T+o*M+l*W+c*G,r[4]=a*A+o*I+l*J+c*st,r[8]=a*C+o*H+l*X+c*ut,r[12]=a*w+o*k+l*tt+c*St,r[1]=u*T+h*M+p*W+m*G,r[5]=u*A+h*I+p*J+m*st,r[9]=u*C+h*H+p*X+m*ut,r[13]=u*w+h*k+p*tt+m*St,r[2]=_*T+g*M+f*W+d*G,r[6]=_*A+g*I+f*J+d*st,r[10]=_*C+g*H+f*X+d*ut,r[14]=_*w+g*k+f*tt+d*St,r[3]=y*T+S*M+x*W+R*G,r[7]=y*A+S*I+x*J+R*st,r[11]=y*C+S*H+x*X+R*ut,r[15]=y*w+S*k+x*tt+R*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],p=t[10],m=t[14],_=t[3],g=t[7],f=t[11],d=t[15];return _*(+r*l*h-s*c*h-r*o*p+n*c*p+s*o*m-n*l*m)+g*(+e*l*m-e*c*p+r*a*p-s*a*m+s*c*u-r*l*u)+f*(+e*c*h-e*o*m-r*a*h+n*a*m+r*o*u-n*c*u)+d*(-s*o*u-e*l*h+e*o*p+s*a*h-n*a*p+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],p=t[10],m=t[11],_=t[12],g=t[13],f=t[14],d=t[15],y=h*f*c-g*p*c+g*l*m-o*f*m-h*l*d+o*p*d,S=_*p*c-u*f*c-_*l*m+a*f*m+u*l*d-a*p*d,x=u*g*c-_*h*c+_*o*m-a*g*m-u*o*d+a*h*d,R=_*h*l-u*g*l-_*o*p+a*g*p+u*o*f-a*h*f,T=e*y+n*S+s*x+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=y*A,t[1]=(g*p*r-h*f*r-g*s*m+n*f*m+h*s*d-n*p*d)*A,t[2]=(o*f*r-g*l*r+g*s*c-n*f*c-o*s*d+n*l*d)*A,t[3]=(h*l*r-o*p*r-h*s*c+n*p*c+o*s*m-n*l*m)*A,t[4]=S*A,t[5]=(u*f*r-_*p*r+_*s*m-e*f*m-u*s*d+e*p*d)*A,t[6]=(_*l*r-a*f*r-_*s*c+e*f*c+a*s*d-e*l*d)*A,t[7]=(a*p*r-u*l*r+u*s*c-e*p*c-a*s*m+e*l*m)*A,t[8]=x*A,t[9]=(_*h*r-u*g*r-_*n*m+e*g*m+u*n*d-e*h*d)*A,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*d+e*o*d)*A,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*m-e*o*m)*A,t[12]=R*A,t[13]=(u*g*s-_*h*s+_*n*p-e*g*p-u*n*f+e*h*f)*A,t[14]=(_*o*s-a*g*s-_*n*l+e*g*l+a*n*f-e*o*f)*A,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*p+e*o*p)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,p=r*c,m=r*u,_=r*h,g=a*u,f=a*h,d=o*h,y=l*c,S=l*u,x=l*h,R=n.x,T=n.y,A=n.z;return s[0]=(1-(g+d))*R,s[1]=(m+x)*R,s[2]=(_-S)*R,s[3]=0,s[4]=(m-x)*T,s[5]=(1-(p+d))*T,s[6]=(f+y)*T,s[7]=0,s[8]=(_+S)*A,s[9]=(f-y)*A,s[10]=(1-(p+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ui.set(s[0],s[1],s[2]).length(),a=ui.set(s[4],s[5],s[6]).length(),o=ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ye.copy(this);let c=1/r,u=1/a,h=1/o;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=u,Ye.elements[5]*=u,Ye.elements[6]*=u,Ye.elements[8]*=h,Ye.elements[9]*=h,Ye.elements[10]*=h,e.setFromRotationMatrix(Ye),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=mn){let l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s),m,_;if(o===mn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===js)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=mn){let l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),p=(e+t)*c,m=(n+s)*u,_,g;if(o===mn)_=(a+r)*h,g=-2*h;else if(o===js)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ui=new P,Ye=new re,su=new P(0,0,0),ru=new P(1,1,1),An=new P,Es=new P,Le=new P,Ol=new re,Bl=new On,nn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},au=0,zl=new P,di=new On,cn=new re,Ts=new P,qi=new P,ou=new P,lu=new On,kl=new P(1,0,0),Hl=new P(0,1,0),Vl=new P(0,0,1),Gl={type:"added"},cu={type:"removed"},fi={type:"childadded",child:null},Zr={type:"childremoved",child:null},_e=class i extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new nn,n=new On,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Lt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(kl,t)}rotateY(t){return this.rotateOnAxis(Hl,t)}rotateZ(t){return this.rotateOnAxis(Vl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kl,t)}translateY(t){return this.translateOnAxis(Hl,t)}translateZ(t){return this.translateOnAxis(Vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ts.copy(t):Ts.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(qi,Ts,this.up):cn.lookAt(Ts,qi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),di.setFromRotationMatrix(cn),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gl),fi.child=t,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cu),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gl),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,t,ou),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),p=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};_e.DEFAULT_UP=new P(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=new P,hn=new P,Jr=new P,un=new P,pi=new P,mi=new P,Wl=new P,Kr=new P,Qr=new P,jr=new P,ta=new ce,ea=new ce,na=new ce,Pn=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$e.subVectors(t,e),s.cross($e);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$e.subVectors(s,e),hn.subVectors(n,e),Jr.subVectors(t,e);let a=$e.dot($e),o=$e.dot(hn),l=$e.dot(Jr),c=hn.dot(hn),u=hn.dot(Jr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let p=1/h,m=(c*l-o*u)*p,_=(a*u-o*l)*p;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,un.x),l.addScaledVector(a,un.y),l.addScaledVector(o,un.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ta.setScalar(0),ea.setScalar(0),na.setScalar(0),ta.fromBufferAttribute(t,e),ea.fromBufferAttribute(t,n),na.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ta,r.x),a.addScaledVector(ea,r.y),a.addScaledVector(na,r.z),a}static isFrontFacing(t,e,n,s){return $e.subVectors(n,e),hn.subVectors(t,e),$e.cross(hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),$e.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;pi.subVectors(s,n),mi.subVectors(r,n),Kr.subVectors(t,n);let l=pi.dot(Kr),c=mi.dot(Kr);if(l<=0&&c<=0)return e.copy(n);Qr.subVectors(t,s);let u=pi.dot(Qr),h=mi.dot(Qr);if(u>=0&&h<=u)return e.copy(s);let p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(pi,a);jr.subVectors(t,r);let m=pi.dot(jr),_=mi.dot(jr);if(_>=0&&m<=_)return e.copy(r);let g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(mi,o);let f=u*_-m*h;if(f<=0&&h-u>=0&&m-_>=0)return Wl.subVectors(r,s),o=(h-u)/(h-u+(m-_)),e.copy(s).addScaledVector(Wl,o);let d=1/(f+g+p);return a=g*d,o=p*d,e.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},As={h:0,s:0,l:0};function ia(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=Jh(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ia(a,r,t+1/3),this.g=ia(a,r,t),this.b=ia(a,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=Wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Wt.fromWorkingColorSpace(ve.copy(this),t),Math.round(ge(ve.r*255,0,255))*65536+Math.round(ge(ve.g*255,0,255))*256+Math.round(ge(ve.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(ve.copy(this),e);let n=ve.r,s=ve.g,r=ve.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=ze){Wt.fromWorkingColorSpace(ve.copy(this),t);let e=ve.r,n=ve.g,s=ve.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(As);let n=kr(Cn.h,As.h,e),s=kr(Cn.s,As.s,e),r=kr(Cn.l,As.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ve=new Nt;Nt.NAMES=Wc;var hu=0,yn=class extends Fn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Un(),this.name="",this.blending=Ei,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=ya,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xa&&(n.blendSrc=this.blendSrc),this.blendDst!==ya&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Re=class extends yn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ue=new P,Cs=new ht,Te=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=so,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cs.fromBufferAttribute(this,e),Cs.applyMatrix3(t),this.setXY(e,Cs.x,Cs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==so&&(t.usage=this.usage),t}};var rr=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ar=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},uu=0,Be=new re,sa=new _e,gi=new P,De=new ei,Yi=new ei,me=new P,be=class i extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gc(t)?ar:rr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return sa.lookAt(t),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];De.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(me.addVectors(De.min,Yi.min),De.expandByPoint(me),me.addVectors(De.max,Yi.max),De.expandByPoint(me)):(De.expandByPoint(Yi.min),De.expandByPoint(Yi.max))}De.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(me));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)me.fromBufferAttribute(o,c),l&&(gi.fromBufferAttribute(t,c),me.add(gi)),s=Math.max(s,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new P,l[C]=new P;let c=new P,u=new P,h=new P,p=new ht,m=new ht,_=new ht,g=new P,f=new P;function d(C,w,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,w),_.fromBufferAttribute(r,M),u.sub(c),h.sub(c),m.sub(p),_.sub(p);let I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(I),f.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(I),o[C].add(g),o[w].add(g),o[M].add(g),l[C].add(f),l[w].add(f),l[M].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,w=y.length;C<w;++C){let M=y[C],I=M.start,H=M.count;for(let k=I,W=I+H;k<W;k+=3)d(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let S=new P,x=new P,R=new P,T=new P;function A(C){R.fromBufferAttribute(s,C),T.copy(R);let w=o[C];S.copy(w),S.sub(R.multiplyScalar(R.dot(w))).normalize(),x.crossVectors(T,w);let I=x.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,I)}for(let C=0,w=y.length;C<w;++C){let M=y[C],I=M.start,H=M.count;for(let k=I,W=I+H;k<W;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(t)for(let p=0,m=t.count;p<m;p+=3){let _=t.getX(p+0),g=t.getX(p+1),f=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,f),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,h=o.normalized,p=new c.constructor(l.length*u),m=0,_=0;for(let g=0,f=l.length;g<f;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let d=0;d<u;d++)p[_++]=c[m++]}return new Te(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let p=c[u],m=t(p,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){let m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let p=0,m=h.length;p<m;p++)u.push(h[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xl=new re,Wn=new ir,Rs=new Ui,ql=new P,Is=new P,Ps=new P,Ls=new P,ra=new P,Ds=new P,Yl=new P,Us=new P,mt=class extends _e{constructor(t=new be,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ds.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(ra.fromBufferAttribute(h,t),a?Ds.addScaledVector(ra,u):Ds.addScaledVector(ra.sub(e),u))}e.add(Ds)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),Wn.copy(t.ray).recast(t.near),!(Rs.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Rs,ql)===null||Wn.origin.distanceToSquared(ql)>(t.far-t.near)**2))&&(Xl.copy(r).invert(),Wn.copy(t.ray).applyMatrix4(Xl),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){let f=p[_],d=a[f.materialIndex],y=Math.max(f.start,m.start),S=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let x=y,R=S;x<R;x+=3){let T=o.getX(x),A=o.getX(x+1),C=o.getX(x+2);s=Ns(this,d,t,n,c,u,h,T,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let f=_,d=g;f<d;f+=3){let y=o.getX(f),S=o.getX(f+1),x=o.getX(f+2);s=Ns(this,a,t,n,c,u,h,y,S,x),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){let f=p[_],d=a[f.materialIndex],y=Math.max(f.start,m.start),S=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let x=y,R=S;x<R;x+=3){let T=x,A=x+1,C=x+2;s=Ns(this,d,t,n,c,u,h,T,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let f=_,d=g;f<d;f+=3){let y=f,S=f+1,x=f+2;s=Ns(this,a,t,n,c,u,h,y,S,x),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function du(i,t,e,n,s,r,a,o){let l;if(t.side===Ce?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Nn,o),l===null)return null;Us.copy(o),Us.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Us);return c<e.near||c>e.far?null:{distance:c,point:Us.clone(),object:i}}function Ns(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Is),i.getVertexPosition(l,Ps),i.getVertexPosition(c,Ls);let u=du(i,t,e,n,Is,Ps,Ls,Yl);if(u){let h=new P;Pn.getBarycoord(Yl,Is,Ps,Ls,h),s&&(u.uv=Pn.getInterpolatedAttribute(s,o,l,c,h,new ht)),r&&(u.uv1=Pn.getInterpolatedAttribute(r,o,l,c,h,new ht)),a&&(u.normal=Pn.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new P,materialIndex:0};Pn.getNormal(Is,Ps,Ls,p.normal),u.face=p,u.barycoord=h}return u}var de=class i extends be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],p=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(h,2));function _(g,f,d,y,S,x,R,T,A,C,w){let M=x/A,I=R/C,H=x/2,k=R/2,W=T/2,J=A+1,X=C+1,tt=0,G=0,st=new P;for(let ut=0;ut<X;ut++){let St=ut*I-k;for(let Ft=0;Ft<J;Ft++){let Qt=Ft*M-H;st[g]=Qt*y,st[f]=St*S,st[d]=W,c.push(st.x,st.y,st.z),st[g]=0,st[f]=0,st[d]=T>0?1:-1,u.push(st.x,st.y,st.z),h.push(Ft/A),h.push(1-ut/C),tt+=1}}for(let ut=0;ut<C;ut++)for(let St=0;St<A;St++){let Ft=p+St+J*ut,Qt=p+St+J*(ut+1),Y=p+(St+1)+J*(ut+1),et=p+(St+1)+J*ut;l.push(Ft,Qt,et),l.push(Qt,Y,et),G+=6}o.addGroup(m,G,w),m+=G,p+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ni(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ee(i){let t={};for(let e=0;e<i.length;e++){let n=Ni(i[e]);for(let s in n)t[s]=n[s]}return t}function fu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var pu={clone:Ni,merge:Ee},mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends yn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mu,this.fragmentShader=gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=fu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},or=class extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rn=new P,$l=new ht,Zl=new ht,Me=class extends or{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,$l,Zl),e.subVectors(Zl,$l)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},_i=-90,xi=1,co=class extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Me(_i,xi,t,e);s.layers=this.layers,this.add(s);let r=new Me(_i,xi,t,e);r.layers=this.layers,this.add(r);let a=new Me(_i,xi,t,e);a.layers=this.layers,this.add(a);let o=new Me(_i,xi,t,e);o.layers=this.layers,this.add(o);let l=new Me(_i,xi,t,e);l.layers=this.layers,this.add(l);let c=new Me(_i,xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,p,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},lr=class extends Ue{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ii,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ho=class extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new de(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:Ln});r.uniforms.tEquirect.value=e;let a=new mt(s,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=en),new co(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},aa=new P,_u=new P,xu=new Lt,fn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=aa.subVectors(n,e).cross(_u.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||xu.getNormalMatrix(t),s=this.coplanarPoint(aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xn=new Ui,Fs=new P,is=class{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,a=new fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],p=s[7],m=s[8],_=s[9],g=s[10],f=s[11],d=s[12],y=s[13],S=s[14],x=s[15];if(n[0].setComponents(l-r,p-c,f-m,x-d).normalize(),n[1].setComponents(l+r,p+c,f+m,x+d).normalize(),n[2].setComponents(l+a,p+u,f+_,x+y).normalize(),n[3].setComponents(l-a,p-u,f-_,x-y).normalize(),n[4].setComponents(l-o,p-h,f-g,x-S).normalize(),e===mn)n[5].setComponents(l+o,p+h,f+g,x+S).normalize();else if(e===js)n[5].setComponents(o,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Fs.x=s.normal.x>0?t.max.x:t.min.x,Fs.y=s.normal.y>0?t.max.y:t.min.y,Fs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yu(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((m,_)=>m.start-_.start);let p=0;for(let m=1;m<h.length;m++){let _=h[p],g=h[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++p,h[p]=g)}h.length=p+1;for(let m=0,_=h.length;m<_;m++){let g=h[m];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ni=class i extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,p=e/l,m=[],_=[],g=[],f=[];for(let d=0;d<u;d++){let y=d*p-a;for(let S=0;S<c;S++){let x=S*h-r;_.push(x,-y,0),g.push(0,0,1),f.push(S/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){let S=y+c*d,x=y+c*(d+1),R=y+1+c*(d+1),T=y+1+c*d;m.push(S,x,T),m.push(x,R,T)}this.setIndex(m),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(g,3)),this.setAttribute("uv",new ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mu=`#ifdef USE_ALPHAHASH
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
#endif`,Su=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tu=`#ifdef USE_AOMAP
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
#endif`,Au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cu=`#ifdef USE_BATCHING
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
#endif`,Ru=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Du=`#ifdef USE_IRIDESCENCE
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
#endif`,Uu=`#ifdef USE_BUMPMAP
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
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gu=`#define PI 3.141592653589793
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
} // validated`,Wu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xu=`vec3 transformedNormal = objectNormal;
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
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ju="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ku=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qu=`#ifdef USE_ENVMAP
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
#endif`,ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,od=`#ifdef USE_GRADIENTMAP
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
}`,ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ud=`uniform bool receiveShadow;
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
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_d=`PhysicalMaterial material;
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
#endif`,xd=`struct PhysicalMaterial {
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
}`,yd=`
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
#endif`,vd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rd=`#if defined( USE_POINTS_UV )
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
#endif`,Id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nd=`#ifdef USE_MORPHTARGETS
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
#endif`,Fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vd=`#ifdef USE_NORMALMAP
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
#endif`,Gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$d=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rf=`float getShadowMask() {
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
}`,af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,of=`#ifdef USE_SKINNING
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
#endif`,lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cf=`#ifdef USE_SKINNING
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
#endif`,hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ff=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pf=`#ifdef USE_TRANSMISSION
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
#endif`,mf=`#ifdef USE_TRANSMISSION
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
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mf=`uniform sampler2D t2D;
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ef=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`#include <common>
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
}`,Af=`#if DEPTH_PACKING == 3200
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
}`,Cf=`#define DISTANCE
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
}`,Rf=`#define DISTANCE
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`uniform float scale;
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
}`,Df=`uniform vec3 diffuse;
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
}`,Uf=`#include <common>
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
}`,Nf=`uniform vec3 diffuse;
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
}`,Ff=`#define LAMBERT
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
}`,Of=`#define LAMBERT
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
}`,Bf=`#define MATCAP
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
}`,zf=`#define MATCAP
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
}`,kf=`#define NORMAL
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
}`,Hf=`#define NORMAL
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
}`,Vf=`#define PHONG
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
}`,Gf=`#define PHONG
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
}`,Wf=`#define STANDARD
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
}`,Xf=`#define STANDARD
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
}`,qf=`#define TOON
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
}`,Yf=`#define TOON
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
}`,$f=`uniform float size;
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
}`,Zf=`uniform vec3 diffuse;
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
}`,Jf=`#include <common>
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
}`,Kf=`uniform vec3 color;
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
}`,Qf=`uniform float rotation;
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
}`,jf=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:vu,alphahash_pars_fragment:Mu,alphamap_fragment:Su,alphamap_pars_fragment:bu,alphatest_fragment:wu,alphatest_pars_fragment:Eu,aomap_fragment:Tu,aomap_pars_fragment:Au,batching_pars_vertex:Cu,batching_vertex:Ru,begin_vertex:Iu,beginnormal_vertex:Pu,bsdfs:Lu,iridescence_fragment:Du,bumpmap_pars_fragment:Uu,clipping_planes_fragment:Nu,clipping_planes_pars_fragment:Fu,clipping_planes_pars_vertex:Ou,clipping_planes_vertex:Bu,color_fragment:zu,color_pars_fragment:ku,color_pars_vertex:Hu,color_vertex:Vu,common:Gu,cube_uv_reflection_fragment:Wu,defaultnormal_vertex:Xu,displacementmap_pars_vertex:qu,displacementmap_vertex:Yu,emissivemap_fragment:$u,emissivemap_pars_fragment:Zu,colorspace_fragment:Ju,colorspace_pars_fragment:Ku,envmap_fragment:Qu,envmap_common_pars_fragment:ju,envmap_pars_fragment:td,envmap_pars_vertex:ed,envmap_physical_pars_fragment:dd,envmap_vertex:nd,fog_vertex:id,fog_pars_vertex:sd,fog_fragment:rd,fog_pars_fragment:ad,gradientmap_pars_fragment:od,lightmap_pars_fragment:ld,lights_lambert_fragment:cd,lights_lambert_pars_fragment:hd,lights_pars_begin:ud,lights_toon_fragment:fd,lights_toon_pars_fragment:pd,lights_phong_fragment:md,lights_phong_pars_fragment:gd,lights_physical_fragment:_d,lights_physical_pars_fragment:xd,lights_fragment_begin:yd,lights_fragment_maps:vd,lights_fragment_end:Md,logdepthbuf_fragment:Sd,logdepthbuf_pars_fragment:bd,logdepthbuf_pars_vertex:wd,logdepthbuf_vertex:Ed,map_fragment:Td,map_pars_fragment:Ad,map_particle_fragment:Cd,map_particle_pars_fragment:Rd,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Pd,morphinstance_vertex:Ld,morphcolor_vertex:Dd,morphnormal_vertex:Ud,morphtarget_pars_vertex:Nd,morphtarget_vertex:Fd,normal_fragment_begin:Od,normal_fragment_maps:Bd,normal_pars_fragment:zd,normal_pars_vertex:kd,normal_vertex:Hd,normalmap_pars_fragment:Vd,clearcoat_normal_fragment_begin:Gd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Xd,iridescence_pars_fragment:qd,opaque_fragment:Yd,packing:$d,premultiplied_alpha_fragment:Zd,project_vertex:Jd,dithering_fragment:Kd,dithering_pars_fragment:Qd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:ef,shadowmap_pars_vertex:nf,shadowmap_vertex:sf,shadowmask_pars_fragment:rf,skinbase_vertex:af,skinning_pars_vertex:of,skinning_vertex:lf,skinnormal_vertex:cf,specularmap_fragment:hf,specularmap_pars_fragment:uf,tonemapping_fragment:df,tonemapping_pars_fragment:ff,transmission_fragment:pf,transmission_pars_fragment:mf,uv_pars_fragment:gf,uv_pars_vertex:_f,uv_vertex:xf,worldpos_vertex:yf,background_vert:vf,background_frag:Mf,backgroundCube_vert:Sf,backgroundCube_frag:bf,cube_vert:wf,cube_frag:Ef,depth_vert:Tf,depth_frag:Af,distanceRGBA_vert:Cf,distanceRGBA_frag:Rf,equirect_vert:If,equirect_frag:Pf,linedashed_vert:Lf,linedashed_frag:Df,meshbasic_vert:Uf,meshbasic_frag:Nf,meshlambert_vert:Ff,meshlambert_frag:Of,meshmatcap_vert:Bf,meshmatcap_frag:zf,meshnormal_vert:kf,meshnormal_frag:Hf,meshphong_vert:Vf,meshphong_frag:Gf,meshphysical_vert:Wf,meshphysical_frag:Xf,meshtoon_vert:qf,meshtoon_frag:Yf,points_vert:$f,points_frag:Zf,shadow_vert:Jf,shadow_frag:Kf,sprite_vert:Qf,sprite_frag:jf},nt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},je={basic:{uniforms:Ee([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ee([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ee([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ee([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ee([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ee([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ee([nt.points,nt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ee([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ee([nt.common,nt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ee([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ee([nt.sprite,nt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ee([nt.common,nt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ee([nt.lights,nt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};je.physical={uniforms:Ee([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var Os={r:0,b:0,g:0},qn=new nn,tp=new re;function ep(i,t,e,n,s,r,a){let o=new Nt(0),l=r===!0?0:1,c,u,h=null,p=0,m=null;function _(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function g(y){let S=!1,x=_(y);x===null?d(o,l):x&&x.isColor&&(d(x,1),S=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(y,S){let x=_(S);x&&(x.isCubeTexture||x.mapping===br)?(u===void 0&&(u=new mt(new de(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Ni(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),qn.copy(S.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tp.makeRotationFromEuler(qn)),u.material.toneMapped=Wt.getTransfer(x.colorSpace)!==Jt,(h!==x||p!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,p=x.version,m=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new mt(new ni(2,2),new sn({name:"BackgroundMaterial",uniforms:Ni(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(x.colorSpace)!==Jt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,p=x.version,m=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,S){y.getRGB(Os,Xc(i)),n.buffers.color.setClear(Os.r,Os.g,Os.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:g,addToRenderList:f}}function np(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(M,I,H,k,W){let J=!1,X=h(k,H,I);r!==X&&(r=X,c(r.object)),J=m(M,k,H,W),J&&_(M,k,H,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,x(M,I,H,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,I,H){let k=H.wireframe===!0,W=n[M.id];W===void 0&&(W={},n[M.id]=W);let J=W[I.id];J===void 0&&(J={},W[I.id]=J);let X=J[k];return X===void 0&&(X=p(l()),J[k]=X),X}function p(M){let I=[],H=[],k=[];for(let W=0;W<e;W++)I[W]=0,H[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:k,object:M,attributes:{},index:null}}function m(M,I,H,k){let W=r.attributes,J=I.attributes,X=0,tt=H.getAttributes();for(let G in tt)if(tt[G].location>=0){let ut=W[G],St=J[G];if(St===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(St=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(St=M.instanceColor)),ut===void 0||ut.attribute!==St||St&&ut.data!==St.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function _(M,I,H,k){let W={},J=I.attributes,X=0,tt=H.getAttributes();for(let G in tt)if(tt[G].location>=0){let ut=J[G];ut===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));let St={};St.attribute=ut,ut&&ut.data&&(St.data=ut.data),W[G]=St,X++}r.attributes=W,r.attributesNum=X,r.index=k}function g(){let M=r.newAttributes;for(let I=0,H=M.length;I<H;I++)M[I]=0}function f(M){d(M,0)}function d(M,I){let H=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;H[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),W[M]!==I&&(i.vertexAttribDivisor(M,I),W[M]=I)}function y(){let M=r.newAttributes,I=r.enabledAttributes;for(let H=0,k=I.length;H<k;H++)I[H]!==M[H]&&(i.disableVertexAttribArray(H),I[H]=0)}function S(M,I,H,k,W,J,X){X===!0?i.vertexAttribIPointer(M,I,H,W,J):i.vertexAttribPointer(M,I,H,k,W,J)}function x(M,I,H,k){g();let W=k.attributes,J=H.getAttributes(),X=I.defaultAttributeValues;for(let tt in J){let G=J[tt];if(G.location>=0){let st=W[tt];if(st===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){let ut=st.normalized,St=st.itemSize,Ft=t.get(st);if(Ft===void 0)continue;let Qt=Ft.buffer,Y=Ft.type,et=Ft.bytesPerElement,yt=Y===i.INT||Y===i.UNSIGNED_INT||st.gpuType===qo;if(st.isInterleavedBufferAttribute){let rt=st.data,Tt=rt.stride,Rt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<G.locationSize;Ot++)d(G.location+Ot,rt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ot=0;Ot<G.locationSize;Ot++)f(G.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Ot=0;Ot<G.locationSize;Ot++)S(G.location+Ot,St/G.locationSize,Y,ut,Tt*et,(Rt+St/G.locationSize*Ot)*et,yt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)d(G.location+rt,st.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<G.locationSize;rt++)f(G.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let rt=0;rt<G.locationSize;rt++)S(G.location+rt,St/G.locationSize,Y,ut,St*et,St/G.locationSize*rt*et,yt)}}else if(X!==void 0){let ut=X[tt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(G.location,ut);break;case 3:i.vertexAttrib3fv(G.location,ut);break;case 4:i.vertexAttrib4fv(G.location,ut);break;default:i.vertexAttrib1fv(G.location,ut)}}}}y()}function R(){C();for(let M in n){let I=n[M];for(let H in I){let k=I[H];for(let W in k)u(k[W].object),delete k[W];delete I[H]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let H in I){let k=I[H];for(let W in k)u(k[W].object),delete k[W];delete I[H]}delete n[M.id]}function A(M){for(let I in n){let H=n[I];if(H[M.id]===void 0)continue;let k=H[M.id];for(let W in k)u(k[W].object),delete k[W];delete H[M.id]}}function C(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:f,disableUnusedAttributes:y}}function ip(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];e.update(m,n,1)}function l(c,u,h,p){if(h===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],p[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*p[g];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Ze&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let C=A===fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==_n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:R,maxSamples:T}}function rp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new fn,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let m=h.length!==0||p||n!==0||s;return s=p,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){e=u(h,p,0)},this.setState=function(h,p,m){let _=h.clippingPlanes,g=h.clipIntersection,f=h.clipShadows,d=i.get(h);if(!s||_===null||_.length===0||r&&!f)r?u(null):c();else{let y=r?0:n,S=y*4,x=d.clippingState||null;l.value=x,x=u(_,p,S,m);for(let R=0;R!==S;++R)x[R]=e[R];d.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,p,m,_){let g=h!==null?h.length:0,f=null;if(g!==0){if(f=l.value,_!==!0||f===null){let d=m+g*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<d)&&(f=new Float32Array(d));for(let S=0,x=m;S!==g;++S,x+=4)a.copy(h[S]).applyMatrix4(y,o),a.normal.toArray(f,x),f[x+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function ap(i){let t=new WeakMap;function e(a,o){return o===Aa?a.mapping=Ii:o===Ca&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Aa||o===Ca)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ho(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var cr=class extends or{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wi=4,Jl=[.125,.215,.35,.446,.526,.582],Jn=20,oa=new cr,Kl=new Nt,la=null,ca=0,ha=0,ua=!1,$n=(1+Math.sqrt(5))/2,yi=1/$n,Ql=[new P(-$n,yi,0),new P($n,yi,0),new P(-yi,0,$n),new P(yi,0,$n),new P(0,$n,-yi),new P(0,$n,yi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],hr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(la,ca,ha),this._renderer.xr.enabled=ua,t.scissorTest=!1,Bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:fs,format:Ze,colorSpace:Bi,depthBuffer:!1},s=jl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=op(r)),this._blurMaterial=lp(r,t,e)}return s}_compileMaterial(t){let e=new mt(this._lodPlanes[0],t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,s){let o=new Me(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Kl),u.toneMapping=Dn,u.autoClear=!1;let m=new Re({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),_=new mt(new de,m),g=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,g=!0):(m.color.copy(Kl),g=!0);for(let d=0;d<6;d++){let y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let S=this._cubeSize;Bs(s,y*S,d>2?S:0,S,S),u.setRenderTarget(s),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ii||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new mt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,oa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ql[(s-r-1)%Ql.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new mt(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Jn-1),g=r/_,f=isFinite(r)?1+Math.floor(u*g):Jn;f>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Jn}`);let d=[],y=0;for(let A=0;A<Jn;++A){let C=A/g,w=Math.exp(-C*C/2);d.push(w),A===0?y+=w:A<f&&(y+=2*w)}for(let A=0;A<d.length;A++)d[A]=d[A]/y;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:S}=this;p.dTheta.value=_,p.mipInt.value=S-n;let x=this._sizeLods[s],R=3*x*(s>S-wi?s-S+wi:0),T=4*(this._cubeSize-x);Bs(e,R,T,3*x,2*x),l.setRenderTarget(e),l.render(h,oa)}};function op(i){let t=[],e=[],n=[],s=i,r=i-wi+1+Jl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-wi?l=Jl[a-i+wi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,g=3,f=2,d=1,y=new Float32Array(g*_*m),S=new Float32Array(f*_*m),x=new Float32Array(d*_*m);for(let T=0;T<m;T++){let A=T%3*2/3-1,C=T>2?0:-1,w=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(w,g*_*T),S.set(p,f*_*T);let M=[T,T,T,T,T,T];x.set(M,d*_*T)}let R=new be;R.setAttribute("position",new Te(y,g)),R.setAttribute("uv",new Te(S,f)),R.setAttribute("faceIndex",new Te(x,d)),t.push(R),s>wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jl(i,t,e){let n=new xn(i,t,e);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function lp(i,t,e){let n=new Float32Array(Jn),s=new P(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function tc(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ec(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}function cp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Aa||l===Ca,u=l===Ii||l===Pi;if(c||u){let h=t.get(o),p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new hr(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{let m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new hr(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function hp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ki("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function up(i,t,e,n){let s={},r=new WeakMap;function a(h){let p=h.target;p.index!==null&&t.remove(p.index);for(let _ in p.attributes)t.remove(p.attributes[_]);for(let _ in p.morphAttributes){let g=p.morphAttributes[_];for(let f=0,d=g.length;f<d;f++)t.remove(g[f])}p.removeEventListener("dispose",a),delete s[p.id];let m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(h,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(h){let p=h.attributes;for(let _ in p)t.update(p[_],i.ARRAY_BUFFER);let m=h.morphAttributes;for(let _ in m){let g=m[_];for(let f=0,d=g.length;f<d;f++)t.update(g[f],i.ARRAY_BUFFER)}}function c(h){let p=[],m=h.index,_=h.attributes.position,g=0;if(m!==null){let y=m.array;g=m.version;for(let S=0,x=y.length;S<x;S+=3){let R=y[S+0],T=y[S+1],A=y[S+2];p.push(R,T,T,A,A,R)}}else if(_!==void 0){let y=_.array;g=_.version;for(let S=0,x=y.length/3-1;S<x;S+=3){let R=S+0,T=S+1,A=S+2;p.push(R,T,T,A,A,R)}}else return;let f=new(Gc(p)?ar:rr)(p,1);f.version=g;let d=r.get(h);d&&t.remove(d),r.set(h,f)}function u(h){let p=r.get(h);if(p){let m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function dp(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*a),e.update(m,n,1)}function c(p,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,p*a,_),e.update(m,n,_))}function u(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,_);let f=0;for(let d=0;d<_;d++)f+=m[d];e.update(f,n,1)}function h(p,m,_,g){if(_===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<p.length;d++)c(p[d]/a,m[d],g[d]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,g,0,_);let d=0;for(let y=0;y<_;y++)d+=m[y]*g[y];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function fp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function pp(i,t,e){let n=new WeakMap,s=new ce;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,p=n.get(o);if(p===void 0||p.count!==h){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};p!==void 0&&p.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;m===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let x=o.attributes.position.count*S,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*R*4*h),A=new nr(T,x,R,h);A.type=pn,A.needsUpdate=!0;let C=S*4;for(let M=0;M<h;M++){let I=f[M],H=d[M],k=y[M],W=x*R*4*M;for(let J=0;J<I.count;J++){let X=J*C;m===!0&&(s.fromBufferAttribute(I,J),T[W+X+0]=s.x,T[W+X+1]=s.y,T[W+X+2]=s.z,T[W+X+3]=0),_===!0&&(s.fromBufferAttribute(H,J),T[W+X+4]=s.x,T[W+X+5]=s.y,T[W+X+6]=s.z,T[W+X+7]=0),g===!0&&(s.fromBufferAttribute(k,J),T[W+X+8]=s.x,T[W+X+9]=s.y,T[W+X+10]=s.z,T[W+X+11]=k.itemSize===4?s.w:1)}}p={count:h,texture:A,size:new ht(x,R)},n.set(o,p),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];let _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function mp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ur=class extends Ue{constructor(t,e,n,s,r,a,o,l,c,u=Ti){if(u!==Ti&&u!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ti&&(n=ti),n===void 0&&u===Di&&(n=Li),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Yc=new Ue,nc=new ur(1,1),$c=new nr,Zc=new lo,Jc=new lr,ic=[],sc=[],rc=new Float32Array(16),ac=new Float32Array(9),oc=new Float32Array(4);function zi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ic[s];if(r===void 0&&(r=new Float32Array(s),ic[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Er(i,t){let e=sc[t];e===void 0&&(e=new Int32Array(t),sc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),pe(e,t)}}function xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),pe(e,t)}}function yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),pe(e,t)}}function vp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;oc.set(n),i.uniformMatrix2fv(this.addr,!1,oc),pe(e,n)}}function Mp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;ac.set(n),i.uniformMatrix3fv(this.addr,!1,ac),pe(e,n)}}function Sp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;rc.set(n),i.uniformMatrix4fv(this.addr,!1,rc),pe(e,n)}}function bp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),pe(e,t)}}function Ep(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),pe(e,t)}}function Tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),pe(e,t)}}function Ap(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),pe(e,t)}}function Rp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),pe(e,t)}}function Ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),pe(e,t)}}function Pp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nc.compareFunction=Vc,r=nc):r=Yc,e.setTexture2D(t||r,s)}function Lp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zc,s)}function Dp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jc,s)}function Up(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$c,s)}function Np(i){switch(i){case 5126:return gp;case 35664:return _p;case 35665:return xp;case 35666:return yp;case 35674:return vp;case 35675:return Mp;case 35676:return Sp;case 5124:case 35670:return bp;case 35667:case 35671:return wp;case 35668:case 35672:return Ep;case 35669:case 35673:return Tp;case 5125:return Ap;case 36294:return Cp;case 36295:return Rp;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Pp;case 35679:case 36299:case 36307:return Lp;case 35680:case 36300:case 36308:case 36293:return Dp;case 36289:case 36303:case 36311:case 36292:return Up}}function Fp(i,t){i.uniform1fv(this.addr,t)}function Op(i,t){let e=zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Bp(i,t){let e=zi(t,this.size,3);i.uniform3fv(this.addr,e)}function zp(i,t){let e=zi(t,this.size,4);i.uniform4fv(this.addr,e)}function kp(i,t){let e=zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hp(i,t){let e=zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vp(i,t){let e=zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Gp(i,t){i.uniform1iv(this.addr,t)}function Wp(i,t){i.uniform2iv(this.addr,t)}function Xp(i,t){i.uniform3iv(this.addr,t)}function qp(i,t){i.uniform4iv(this.addr,t)}function Yp(i,t){i.uniform1uiv(this.addr,t)}function $p(i,t){i.uniform2uiv(this.addr,t)}function Zp(i,t){i.uniform3uiv(this.addr,t)}function Jp(i,t){i.uniform4uiv(this.addr,t)}function Kp(i,t,e){let n=this.cache,s=t.length,r=Er(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Yc,r[a])}function Qp(i,t,e){let n=this.cache,s=t.length,r=Er(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Zc,r[a])}function jp(i,t,e){let n=this.cache,s=t.length,r=Er(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Jc,r[a])}function tm(i,t,e){let n=this.cache,s=t.length,r=Er(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$c,r[a])}function em(i){switch(i){case 5126:return Fp;case 35664:return Op;case 35665:return Bp;case 35666:return zp;case 35674:return kp;case 35675:return Hp;case 35676:return Vp;case 5124:case 35670:return Gp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return qp;case 5125:return Yp;case 36294:return $p;case 36295:return Zp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return tm}}var uo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Np(e.type)}},fo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=em(e.type)}},po=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},da=/(\w+)(\])?(\[|\.)?/g;function lc(i,t){i.seq.push(t),i.map[t.id]=t}function nm(i,t,e){let n=i.name,s=n.length;for(da.lastIndex=0;;){let r=da.exec(n),a=da.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){lc(e,c===void 0?new uo(o,i,t):new fo(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new po(o),lc(e,h)),e=h}}}var Ci=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);nm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function cc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var im=37297,sm=0;function rm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var hc=new Lt;function am(i){Wt._getMatrix(hc,Wt.workingColorSpace,i);let t=`mat3( ${hc.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case wr:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+rm(i.getShaderSource(t),a)}else return s}function om(i,t){let e=am(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function lm(i,t){let e;switch(t){case Lh:e="Linear";break;case Dh:e="Reinhard";break;case Uh:e="Cineon";break;case Nh:e="ACESFilmic";break;case Oh:e="AgX";break;case Bh:e="Neutral";break;case Fh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var zs=new P;function cm(){Wt.getLuminanceCoefficients(zs);let i=zs.x.toFixed(4),t=zs.y.toFixed(4),e=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function um(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Qi(i){return i!==""}function dc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function mo(i){return i.replace(fm,mm)}var pm=new Map;function mm(i,t){let e=Ut[t];if(e===void 0){let n=pm.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return mo(e)}var gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(i){return i.replace(gm,_m)}function _m(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function xm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===uh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function ym(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Pi:t="ENVMAP_TYPE_CUBE";break;case br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vm(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Pi&&(t="ENVMAP_MODE_REFRACTION"),t}function Mm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ih:t="ENVMAP_BLENDING_MIX";break;case Ph:t="ENVMAP_BLENDING_ADD";break}return t}function Sm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function bm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=xm(e),c=ym(e),u=vm(e),h=Mm(e),p=Sm(e),m=hm(e),_=um(r),g=s.createProgram(),f,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Qi).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Qi).join(`
`),d.length>0&&(d+=`
`)):(f=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),d=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Dn?lm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,om("linearToOutputTexel",e.outputColorSpace),cm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qi).join(`
`)),a=mo(a),a=dc(a,e),a=fc(a,e),o=mo(o),o=dc(o,e),o=fc(o,e),a=pc(a),o=pc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=y+f+a,x=y+d+o,R=cc(s,s.VERTEX_SHADER,S),T=cc(s,s.FRAGMENT_SHADER,x);s.attachShader(g,R),s.attachShader(g,T),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(I){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(g).trim(),k=s.getShaderInfoLog(R).trim(),W=s.getShaderInfoLog(T).trim(),J=!0,X=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,R,T);else{let tt=uc(s,R,"vertex"),G=uc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+tt+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||W==="")&&(X=!1);X&&(I.diagnostics={runnable:J,programLog:H,vertexShader:{log:k,prefix:f},fragmentShader:{log:W,prefix:d}})}s.deleteShader(R),s.deleteShader(T),C=new Ci(s,g),w=dm(s,g)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,im)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=T,this}var wm=0,go=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _o(t),e.set(t,n)),n}},_o=class{constructor(t){this.id=wm++,this.code=t,this.usedTimes=0}};function Em(i,t,e,n,s,r,a){let o=new sr,l=new go,c=new Set,u=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function f(w,M,I,H,k){let W=H.fog,J=k.geometry,X=w.isMeshStandardMaterial?H.environment:null,tt=(w.isMeshStandardMaterial?e:t).get(w.envMap||X),G=tt&&tt.mapping===br?tt.image.height:null,st=_[w.type];w.precision!==null&&(m=s.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));let ut=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,St=ut!==void 0?ut.length:0,Ft=0;J.morphAttributes.position!==void 0&&(Ft=1),J.morphAttributes.normal!==void 0&&(Ft=2),J.morphAttributes.color!==void 0&&(Ft=3);let Qt,Y,et,yt;if(st){let Zt=je[st];Qt=Zt.vertexShader,Y=Zt.fragmentShader}else Qt=w.vertexShader,Y=w.fragmentShader,l.update(w),et=l.getVertexShaderID(w),yt=l.getFragmentShaderID(w);let rt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Rt=k.isInstancedMesh===!0,Ot=k.isBatchedMesh===!0,oe=!!w.map,Vt=!!w.matcap,he=!!tt,N=!!w.aoMap,Fe=!!w.lightMap,Bt=!!w.bumpMap,zt=!!w.normalMap,wt=!!w.displacementMap,ee=!!w.emissiveMap,bt=!!w.metalnessMap,E=!!w.roughnessMap,v=w.anisotropy>0,O=w.clearcoat>0,$=w.dispersion>0,K=w.iridescence>0,q=w.sheen>0,vt=w.transmission>0,at=v&&!!w.anisotropyMap,dt=O&&!!w.clearcoatMap,Gt=O&&!!w.clearcoatNormalMap,Q=O&&!!w.clearcoatRoughnessMap,ft=K&&!!w.iridescenceMap,Et=K&&!!w.iridescenceThicknessMap,At=q&&!!w.sheenColorMap,pt=q&&!!w.sheenRoughnessMap,kt=!!w.specularMap,Dt=!!w.specularColorMap,jt=!!w.specularIntensityMap,L=vt&&!!w.transmissionMap,it=vt&&!!w.thicknessMap,V=!!w.gradientMap,Z=!!w.alphaMap,ct=w.alphaTest>0,ot=!!w.alphaHash,It=!!w.extensions,le=Dn;w.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(le=i.toneMapping);let xe={shaderID:st,shaderType:w.type,shaderName:w.name,vertexShader:Qt,fragmentShader:Y,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:yt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Ot,batchingColor:Ot&&k._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&k.instanceColor!==null,instancingMorph:Rt&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Bi,alphaToCoverage:!!w.alphaToCoverage,map:oe,matcap:Vt,envMap:he,envMapMode:he&&tt.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:Fe,bumpMap:Bt,normalMap:zt,displacementMap:p&&wt,emissiveMap:ee,normalMapObjectSpace:zt&&w.normalMapType===Vh,normalMapTangentSpace:zt&&w.normalMapType===Hc,metalnessMap:bt,roughnessMap:E,anisotropy:v,anisotropyMap:at,clearcoat:O,clearcoatMap:dt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:Q,dispersion:$,iridescence:K,iridescenceMap:ft,iridescenceThicknessMap:Et,sheen:q,sheenColorMap:At,sheenRoughnessMap:pt,specularMap:kt,specularColorMap:Dt,specularIntensityMap:jt,transmission:vt,transmissionMap:L,thicknessMap:it,gradientMap:V,opaque:w.transparent===!1&&w.blending===Ei&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:ct,alphaHash:ot,combine:w.combine,mapUv:oe&&g(w.map.channel),aoMapUv:N&&g(w.aoMap.channel),lightMapUv:Fe&&g(w.lightMap.channel),bumpMapUv:Bt&&g(w.bumpMap.channel),normalMapUv:zt&&g(w.normalMap.channel),displacementMapUv:wt&&g(w.displacementMap.channel),emissiveMapUv:ee&&g(w.emissiveMap.channel),metalnessMapUv:bt&&g(w.metalnessMap.channel),roughnessMapUv:E&&g(w.roughnessMap.channel),anisotropyMapUv:at&&g(w.anisotropyMap.channel),clearcoatMapUv:dt&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:At&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:pt&&g(w.sheenRoughnessMap.channel),specularMapUv:kt&&g(w.specularMap.channel),specularColorMapUv:Dt&&g(w.specularColorMap.channel),specularIntensityMapUv:jt&&g(w.specularIntensityMap.channel),transmissionMapUv:L&&g(w.transmissionMap.channel),thicknessMapUv:it&&g(w.thicknessMap.channel),alphaMapUv:Z&&g(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(zt||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(oe||Z),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Tt,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:oe&&w.map.isVideoTexture===!0&&Wt.getTransfer(w.map.colorSpace)===Jt,decodeVideoTextureEmissive:ee&&w.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(w.emissiveMap.colorSpace)===Jt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ke,flipSided:w.side===Ce,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:It&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&w.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function d(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)M.push(I),M.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(y(M,w),S(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function x(w){let M=_[w.type],I;if(M){let H=je[M];I=pu.clone(H.uniforms)}else I=w.uniforms;return I}function R(w,M){let I;for(let H=0,k=u.length;H<k;H++){let W=u[H];if(W.cacheKey===M){I=W,++I.usedTimes;break}}return I===void 0&&(I=new bm(i,M,w,r),u.push(I)),I}function T(w){if(--w.usedTimes===0){let M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function C(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:x,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:C}}function Tm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Am(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _c(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,p,m,_,g,f){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:p,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:f},i[t]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=g,d.group=f),t++,d}function o(h,p,m,_,g,f){let d=a(h,p,m,_,g,f);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(h,p,m,_,g,f){let d=a(h,p,m,_,g,f);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,p){e.length>1&&e.sort(h||Am),n.length>1&&n.sort(p||gc),s.length>1&&s.sort(p||gc)}function u(){for(let h=t,p=i.length;h<p;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Cm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new _c,i.set(n,[a])):s>=r.length?(a=new _c,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Rm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Nt};break;case"SpotLight":e={position:new P,direction:new P,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Im(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Pm=0;function Lm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Dm(i){let t=new Rm,e=Im(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new re,a=new re;function o(c){let u=0,h=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,_=0,g=0,f=0,d=0,y=0,S=0,x=0,R=0,T=0,A=0;c.sort(Lm);for(let w=0,M=c.length;w<M;w++){let I=c[w],H=I.color,k=I.intensity,W=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=H.r*k,h+=H.g*k,p+=H.b*k;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],k);A++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,G=e.get(I);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=I.shadow.matrix,y++}n.directional[m]=X,m++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(H).multiplyScalar(k),X.distance=W,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[g]=X;let tt=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,tt.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[g]=tt.matrix,I.castShadow){let G=e.get(I);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=J,x++}g++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(H).multiplyScalar(k),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[f]=X,f++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let tt=I.shadow,G=e.get(I);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=I.shadow.matrix,S++}n.point[_]=X,_++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(k),X.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[d]=X,d++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;let C=n.hash;(C.directionalLength!==m||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==f||C.hemiLength!==d||C.numDirectionalShadows!==y||C.numPointShadows!==S||C.numSpotShadows!==x||C.numSpotMaps!==R||C.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=f,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.directionalLength=m,C.pointLength=_,C.spotLength=g,C.rectAreaLength=f,C.hemiLength=d,C.numDirectionalShadows=y,C.numPointShadows=S,C.numSpotShadows=x,C.numSpotMaps=R,C.numLightProbes=A,n.version=Pm++)}function l(c,u){let h=0,p=0,m=0,_=0,g=0,f=u.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){let S=c[d];if(S.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(f),h++}else if(S.isSpotLight){let x=n.spot[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(f),m++}else if(S.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(f),a.identity(),r.copy(S.matrixWorld),r.premultiply(f),a.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){let x=n.point[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:n}}function xc(i){let t=new Dm(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Um(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new xc(i),t.set(s,[o])):r>=a.length?(o=new xc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var xo=class extends yn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yo=class extends yn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fm=`uniform sampler2D shadow_pass;
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
}`;function Om(i,t,e){let n=new is,s=new ht,r=new ht,a=new ce,o=new xo({depthPacking:Hh}),l=new yo,c={},u=e.maxTextureSize,h={[Nn]:Ce,[Ce]:Nn,[ke]:ke},p=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Nm,fragmentShader:Fm}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let _=new be;_.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new mt(_,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let d=this.type;this.render=function(T,A,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;let w=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Ln),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=d!==dn&&this.type===dn,W=d===dn&&this.type!==dn;for(let J=0,X=T.length;J<X;J++){let tt=T[J],G=tt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let st=G.getFrameExtents();if(s.multiply(st),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,G.mapSize.y=r.y)),G.map===null||k===!0||W===!0){let St=this.type!==dn?{minFilter:Je,magFilter:Je}:{};G.map!==null&&G.map.dispose(),G.map=new xn(s.x,s.y,St),G.map.texture.name=tt.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let ut=G.getViewportCount();for(let St=0;St<ut;St++){let Ft=G.getViewport(St);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),H.viewport(a),G.updateMatrices(tt,St),n=G.getFrustum(),x(A,C,G.camera,tt,this.type)}G.isPointLightShadow!==!0&&this.type===dn&&y(G,C),G.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(w,M,I)};function y(T,A){let C=t.update(g);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new xn(s.x,s.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,C,p,g,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,C,m,g,null)}function S(T,A,C,w){let M=null,I=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)M=I;else if(M=C.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=M.uuid,k=A.uuid,W=c[H];W===void 0&&(W={},c[H]=W);let J=W[k];J===void 0&&(J=M.clone(),W[k]=J,A.addEventListener("dispose",R)),M=J}if(M.visible=A.visible,M.wireframe=A.wireframe,w===dn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=i.properties.get(M);H.light=C}return M}function x(T,A,C,w,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===dn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let k=t.update(T),W=T.material;if(Array.isArray(W)){let J=k.groups;for(let X=0,tt=J.length;X<tt;X++){let G=J[X],st=W[G.materialIndex];if(st&&st.visible){let ut=S(T,st,w,M);T.onBeforeShadow(i,T,A,C,k,ut,G),i.renderBufferDirect(C,null,k,ut,T,G),T.onAfterShadow(i,T,A,C,k,ut,G)}}}else if(W.visible){let J=S(T,W,w,M);T.onBeforeShadow(i,T,A,C,k,J,null),i.renderBufferDirect(C,null,k,J,T,null),T.onAfterShadow(i,T,A,C,k,J,null)}}let H=T.children;for(let k=0,W=H.length;k<W;k++)x(H[k],A,C,w,M)}function R(T){T.target.removeEventListener("dispose",R);for(let C in c){let w=c[C],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var Bm={[va]:Ma,[Sa]:Ea,[ba]:Ta,[Ri]:wa,[Ma]:va,[Ea]:Sa,[Ta]:ba,[wa]:Ri};function zm(i,t){function e(){let L=!1,it=new ce,V=null,Z=new ce(0,0,0,0);return{setMask:function(ct){V!==ct&&!L&&(i.colorMask(ct,ct,ct,ct),V=ct)},setLocked:function(ct){L=ct},setClear:function(ct,ot,It,le,xe){xe===!0&&(ct*=le,ot*=le,It*=le),it.set(ct,ot,It,le),Z.equals(it)===!1&&(i.clearColor(ct,ot,It,le),Z.copy(it))},reset:function(){L=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,it=!1,V=null,Z=null,ct=null;return{setReversed:function(ot){if(it!==ot){let It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);let le=ct;ct=null,this.setClear(le)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?rt(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(ot){V!==ot&&!L&&(i.depthMask(ot),V=ot)},setFunc:function(ot){if(it&&(ot=Bm[ot]),Z!==ot){switch(ot){case va:i.depthFunc(i.NEVER);break;case Ma:i.depthFunc(i.ALWAYS);break;case Sa:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case ba:i.depthFunc(i.EQUAL);break;case wa:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case Ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ot}},setLocked:function(ot){L=ot},setClear:function(ot){ct!==ot&&(it&&(ot=1-ot),i.clearDepth(ot),ct=ot)},reset:function(){L=!1,V=null,Z=null,ct=null,it=!1}}}function s(){let L=!1,it=null,V=null,Z=null,ct=null,ot=null,It=null,le=null,xe=null;return{setTest:function(Zt){L||(Zt?rt(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(Zt){it!==Zt&&!L&&(i.stencilMask(Zt),it=Zt)},setFunc:function(Zt,We,rn){(V!==Zt||Z!==We||ct!==rn)&&(i.stencilFunc(Zt,We,rn),V=Zt,Z=We,ct=rn)},setOp:function(Zt,We,rn){(ot!==Zt||It!==We||le!==rn)&&(i.stencilOp(Zt,We,rn),ot=Zt,It=We,le=rn)},setLocked:function(Zt){L=Zt},setClear:function(Zt){xe!==Zt&&(i.clearStencil(Zt),xe=Zt)},reset:function(){L=!1,it=null,V=null,Z=null,ct=null,ot=null,It=null,le=null,xe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},p=new WeakMap,m=[],_=null,g=!1,f=null,d=null,y=null,S=null,x=null,R=null,T=null,A=new Nt(0,0,0),C=0,w=!1,M=null,I=null,H=null,k=null,W=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,tt=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=tt>=1):G.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=tt>=2);let st=null,ut={},St=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),Qt=new ce().fromArray(St),Y=new ce().fromArray(Ft);function et(L,it,V,Z){let ct=new Uint8Array(4),ot=i.createTexture();i.bindTexture(L,ot),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<V;It++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return ot}let yt={};yt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Ri),Bt(!1),zt(Sl),rt(i.CULL_FACE),N(Ln);function rt(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Tt(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Rt(L,it){return h[L]!==it?(i.bindFramebuffer(L,it),h[L]=it,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=it),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Ot(L,it){let V=m,Z=!1;if(L){V=p.get(it),V===void 0&&(V=[],p.set(it,V));let ct=L.textures;if(V.length!==ct.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,It=ct.length;ot<It;ot++)V[ot]=i.COLOR_ATTACHMENT0+ot;V.length=ct.length,Z=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Z=!0);Z&&i.drawBuffers(V)}function oe(L){return _!==L?(i.useProgram(L),_=L,!0):!1}let Vt={[Zn]:i.FUNC_ADD,[fh]:i.FUNC_SUBTRACT,[ph]:i.FUNC_REVERSE_SUBTRACT};Vt[mh]=i.MIN,Vt[gh]=i.MAX;let he={[_h]:i.ZERO,[xh]:i.ONE,[yh]:i.SRC_COLOR,[xa]:i.SRC_ALPHA,[Eh]:i.SRC_ALPHA_SATURATE,[bh]:i.DST_COLOR,[Mh]:i.DST_ALPHA,[vh]:i.ONE_MINUS_SRC_COLOR,[ya]:i.ONE_MINUS_SRC_ALPHA,[wh]:i.ONE_MINUS_DST_COLOR,[Sh]:i.ONE_MINUS_DST_ALPHA,[Th]:i.CONSTANT_COLOR,[Ah]:i.ONE_MINUS_CONSTANT_COLOR,[Ch]:i.CONSTANT_ALPHA,[Rh]:i.ONE_MINUS_CONSTANT_ALPHA};function N(L,it,V,Z,ct,ot,It,le,xe,Zt){if(L===Ln){g===!0&&(Tt(i.BLEND),g=!1);return}if(g===!1&&(rt(i.BLEND),g=!0),L!==dh){if(L!==f||Zt!==w){if((d!==Zn||x!==Zn)&&(i.blendEquation(i.FUNC_ADD),d=Zn,x=Zn),Zt)switch(L){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jn:i.blendFunc(i.ONE,i.ONE);break;case bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,S=null,R=null,T=null,A.set(0,0,0),C=0,f=L,w=Zt}return}ct=ct||it,ot=ot||V,It=It||Z,(it!==d||ct!==x)&&(i.blendEquationSeparate(Vt[it],Vt[ct]),d=it,x=ct),(V!==y||Z!==S||ot!==R||It!==T)&&(i.blendFuncSeparate(he[V],he[Z],he[ot],he[It]),y=V,S=Z,R=ot,T=It),(le.equals(A)===!1||xe!==C)&&(i.blendColor(le.r,le.g,le.b,xe),A.copy(le),C=xe),f=L,w=!1}function Fe(L,it){L.side===ke?Tt(i.CULL_FACE):rt(i.CULL_FACE);let V=L.side===Ce;it&&(V=!V),Bt(V),L.blending===Ei&&L.transparent===!1?N(Ln):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let Z=L.stencilWrite;o.setTest(Z),Z&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function zt(L){L!==ch?(rt(i.CULL_FACE),L!==I&&(L===Sl?i.cullFace(i.BACK):L===hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),I=L}function wt(L){L!==H&&(X&&i.lineWidth(L),H=L)}function ee(L,it,V){L?(rt(i.POLYGON_OFFSET_FILL),(k!==it||W!==V)&&(i.polygonOffset(it,V),k=it,W=V)):Tt(i.POLYGON_OFFSET_FILL)}function bt(L){L?rt(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function E(L){L===void 0&&(L=i.TEXTURE0+J-1),st!==L&&(i.activeTexture(L),st=L)}function v(L,it,V){V===void 0&&(st===null?V=i.TEXTURE0+J-1:V=st);let Z=ut[V];Z===void 0&&(Z={type:void 0,texture:void 0},ut[V]=Z),(Z.type!==L||Z.texture!==it)&&(st!==V&&(i.activeTexture(V),st=V),i.bindTexture(L,it||yt[L]),Z.type=L,Z.texture=it)}function O(){let L=ut[st];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(L){Qt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Qt.copy(L))}function pt(L){Y.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function kt(L,it){let V=c.get(it);V===void 0&&(V=new WeakMap,c.set(it,V));let Z=V.get(L);Z===void 0&&(Z=i.getUniformBlockIndex(it,L.name),V.set(L,Z))}function Dt(L,it){let Z=c.get(it).get(L);l.get(it)!==Z&&(i.uniformBlockBinding(it,Z,L.__bindingPointIndex),l.set(it,Z))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},st=null,ut={},h={},p=new WeakMap,m=[],_=null,g=!1,f=null,d=null,y=null,S=null,x=null,R=null,T=null,A=new Nt(0,0,0),C=0,w=!1,M=null,I=null,H=null,k=null,W=null,Qt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Tt,bindFramebuffer:Rt,drawBuffers:Ot,useProgram:oe,setBlending:N,setMaterial:Fe,setFlipSided:Bt,setCullFace:zt,setLineWidth:wt,setPolygonOffset:ee,setScissorTest:bt,activeTexture:E,bindTexture:v,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:K,texImage2D:ft,texImage3D:Et,updateUBOMapping:kt,uniformBlockBinding:Dt,texStorage2D:Gt,texStorage3D:Q,texSubImage2D:q,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:At,viewport:pt,reset:jt}}function yc(i,t,e,n){let s=km(n);switch(e){case Uc:return i*t;case Fc:return i*t;case Oc:return i*t*2;case Bc:return i*t/s.components*s.byteLength;case Zo:return i*t/s.components*s.byteLength;case zc:return i*t*2/s.components*s.byteLength;case Jo:return i*t*2/s.components*s.byteLength;case Nc:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case Ko:return i*t*4/s.components*s.byteLength;case Ys:case $s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:case Ua:return Math.max(i,16)*Math.max(t,8)/4;case Pa:case Da:return Math.max(i,8)*Math.max(t,8)/2;case Na:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ks:case Qa:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kc:case to:return Math.ceil(i/4)*Math.ceil(t/4)*8;case eo:case no:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function km(i){switch(i){case _n:case Pc:return{byteLength:1,components:1};case ns:case Lc:case fs:return{byteLength:2,components:1};case Yo:case $o:return{byteLength:2,components:4};case ti:case qo:case pn:return{byteLength:4,components:1};case Dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Hm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,u=new WeakMap,h,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return m?new OffscreenCanvas(E,v):tr("canvas")}function g(E,v,O){let $=1,K=bt(E);if((K.width>O||K.height>O)&&($=O/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let q=Math.floor($*K.width),vt=Math.floor($*K.height);h===void 0&&(h=_(q,vt));let at=v?_(q,vt):h;return at.width=q,at.height=vt,at.getContext("2d").drawImage(E,0,0,q,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+vt+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function f(E){return E.generateMipmaps}function d(E){i.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,v,O,$,K=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=v;if(v===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),v===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){let vt=K?wr:Wt.getTransfer($);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=vt===Jt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(E,v){let O;return E?v===null||v===ti||v===Li?O=i.DEPTH24_STENCIL8:v===pn?O=i.DEPTH32F_STENCIL8:v===ns&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ti||v===Li?O=i.DEPTH_COMPONENT24:v===pn?O=i.DEPTH_COMPONENT32F:v===ns&&(O=i.DEPTH_COMPONENT16),O}function R(E,v){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==Je&&E.minFilter!==en?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function T(E){let v=E.target;v.removeEventListener("dispose",T),C(v),v.isVideoTexture&&u.delete(v)}function A(E){let v=E.target;v.removeEventListener("dispose",A),M(v)}function C(E){let v=n.get(E);if(v.__webglInit===void 0)return;let O=E.source,$=p.get(O);if($){let K=$[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(E),Object.keys($).length===0&&p.delete(O)}n.remove(E)}function w(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let O=E.source,$=p.get(O);delete $[v.__cacheKey],a.memory.textures--}function M(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let K=0;K<v.__webglFramebuffer[$].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[$][K]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=E.textures;for(let $=0,K=O.length;$<K;$++){let q=n.get(O[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(E)}let I=0;function H(){I=0}function k(){let E=I;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function W(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function J(E,v){let O=n.get(E);if(E.isVideoTexture&&wt(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){let $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,E,v);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function X(E,v){let O=n.get(E);if(E.version>0&&O.__version!==E.version){Y(O,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function tt(E,v){let O=n.get(E);if(E.version>0&&O.__version!==E.version){Y(O,E,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function G(E,v){let O=n.get(E);if(E.version>0&&O.__version!==E.version){et(O,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let st={[Ra]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[Ia]:i.MIRRORED_REPEAT},ut={[Je]:i.NEAREST,[zh]:i.NEAREST_MIPMAP_NEAREST,[ys]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},St={[Gh]:i.NEVER,[Zh]:i.ALWAYS,[Wh]:i.LESS,[Vc]:i.LEQUAL,[Xh]:i.EQUAL,[$h]:i.GEQUAL,[qh]:i.GREATER,[Yh]:i.NOTEQUAL};function Ft(E,v){if(v.type===pn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===en||v.magFilter===Or||v.magFilter===ys||v.magFilter===Qn||v.minFilter===en||v.minFilter===Or||v.minFilter===ys||v.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,st[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,st[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,st[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ut[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,St[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Je||v.minFilter!==ys&&v.minFilter!==Qn||v.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Qt(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",T));let $=v.source,K=p.get($);K===void 0&&(K={},p.set($,K));let q=W(v);if(q!==E.__cacheKey){K[q]===void 0&&(K[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[q].usedTimes++;let vt=K[E.__cacheKey];vt!==void 0&&(K[E.__cacheKey].usedTimes--,vt.usedTimes===0&&w(v)),E.__cacheKey=q,E.__webglTexture=K[q].texture}return O}function Y(E,v,O){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);let K=Qt(E,v),q=v.source;e.bindTexture($,E.__webglTexture,i.TEXTURE0+O);let vt=n.get(q);if(q.version!==vt.__version||K===!0){e.activeTexture(i.TEXTURE0+O);let at=Wt.getPrimaries(Wt.workingColorSpace),dt=v.colorSpace===In?null:Wt.getPrimaries(v.colorSpace),Gt=v.colorSpace===In||at===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let Q=g(v.image,!1,s.maxTextureSize);Q=ee(v,Q);let ft=r.convert(v.format,v.colorSpace),Et=r.convert(v.type),At=S(v.internalFormat,ft,Et,v.colorSpace,v.isVideoTexture);Ft($,v);let pt,kt=v.mipmaps,Dt=v.isVideoTexture!==!0,jt=vt.__version===void 0||K===!0,L=q.dataReady,it=R(v,Q);if(v.isDepthTexture)At=x(v.format===Di,v.type),jt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,At,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,At,Q.width,Q.height,0,ft,Et,null));else if(v.isDataTexture)if(kt.length>0){Dt&&jt&&e.texStorage2D(i.TEXTURE_2D,it,At,kt[0].width,kt[0].height);for(let V=0,Z=kt.length;V<Z;V++)pt=kt[V],Dt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,Et,pt.data):e.texImage2D(i.TEXTURE_2D,V,At,pt.width,pt.height,0,ft,Et,pt.data);v.generateMipmaps=!1}else Dt?(jt&&e.texStorage2D(i.TEXTURE_2D,it,At,Q.width,Q.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,Et,Q.data)):e.texImage2D(i.TEXTURE_2D,0,At,Q.width,Q.height,0,ft,Et,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Dt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,At,kt[0].width,kt[0].height,Q.depth);for(let V=0,Z=kt.length;V<Z;V++)if(pt=kt[V],v.format!==Ze)if(ft!==null)if(Dt){if(L)if(v.layerUpdates.size>0){let ct=yc(pt.width,pt.height,v.format,v.type);for(let ot of v.layerUpdates){let It=pt.data.subarray(ot*ct/pt.data.BYTES_PER_ELEMENT,(ot+1)*ct/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ot,pt.width,pt.height,1,ft,It)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,Q.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,At,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,Q.depth,ft,Et,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,At,pt.width,pt.height,Q.depth,0,ft,Et,pt.data)}else{Dt&&jt&&e.texStorage2D(i.TEXTURE_2D,it,At,kt[0].width,kt[0].height);for(let V=0,Z=kt.length;V<Z;V++)pt=kt[V],v.format!==Ze?ft!==null?Dt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,At,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,Et,pt.data):e.texImage2D(i.TEXTURE_2D,V,At,pt.width,pt.height,0,ft,Et,pt.data)}else if(v.isDataArrayTexture)if(Dt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,At,Q.width,Q.height,Q.depth),L)if(v.layerUpdates.size>0){let V=yc(Q.width,Q.height,v.format,v.type);for(let Z of v.layerUpdates){let ct=Q.data.subarray(Z*V/Q.data.BYTES_PER_ELEMENT,(Z+1)*V/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,ft,Et,ct)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,Et,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,Q.width,Q.height,Q.depth,0,ft,Et,Q.data);else if(v.isData3DTexture)Dt?(jt&&e.texStorage3D(i.TEXTURE_3D,it,At,Q.width,Q.height,Q.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,Et,Q.data)):e.texImage3D(i.TEXTURE_3D,0,At,Q.width,Q.height,Q.depth,0,ft,Et,Q.data);else if(v.isFramebufferTexture){if(jt)if(Dt)e.texStorage2D(i.TEXTURE_2D,it,At,Q.width,Q.height);else{let V=Q.width,Z=Q.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,At,V,Z,0,ft,Et,null),V>>=1,Z>>=1}}else if(kt.length>0){if(Dt&&jt){let V=bt(kt[0]);e.texStorage2D(i.TEXTURE_2D,it,At,V.width,V.height)}for(let V=0,Z=kt.length;V<Z;V++)pt=kt[V],Dt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,ft,Et,pt):e.texImage2D(i.TEXTURE_2D,V,At,ft,Et,pt);v.generateMipmaps=!1}else if(Dt){if(jt){let V=bt(Q);e.texStorage2D(i.TEXTURE_2D,it,At,V.width,V.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Et,Q)}else e.texImage2D(i.TEXTURE_2D,0,At,ft,Et,Q);f(v)&&d($),vt.__version=q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function et(E,v,O){if(v.image.length!==6)return;let $=Qt(E,v),K=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let q=n.get(K);if(K.version!==q.__version||$===!0){e.activeTexture(i.TEXTURE0+O);let vt=Wt.getPrimaries(Wt.workingColorSpace),at=v.colorSpace===In?null:Wt.getPrimaries(v.colorSpace),dt=v.colorSpace===In||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Gt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ft=[];for(let Z=0;Z<6;Z++)!Gt&&!Q?ft[Z]=g(v.image[Z],!0,s.maxCubemapSize):ft[Z]=Q?v.image[Z].image:v.image[Z],ft[Z]=ee(v,ft[Z]);let Et=ft[0],At=r.convert(v.format,v.colorSpace),pt=r.convert(v.type),kt=S(v.internalFormat,At,pt,v.colorSpace),Dt=v.isVideoTexture!==!0,jt=q.__version===void 0||$===!0,L=K.dataReady,it=R(v,Et);Ft(i.TEXTURE_CUBE_MAP,v);let V;if(Gt){Dt&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,kt,Et.width,Et.height);for(let Z=0;Z<6;Z++){V=ft[Z].mipmaps;for(let ct=0;ct<V.length;ct++){let ot=V[ct];v.format!==Ze?At!==null?Dt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,ot.width,ot.height,At,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,kt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,ot.width,ot.height,At,pt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,kt,ot.width,ot.height,0,At,pt,ot.data)}}}else{if(V=v.mipmaps,Dt&&jt){V.length>0&&it++;let Z=bt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ft[Z].width,ft[Z].height,At,pt,ft[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,ft[Z].width,ft[Z].height,0,At,pt,ft[Z].data);for(let ct=0;ct<V.length;ct++){let It=V[ct].image[Z].image;Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,It.width,It.height,At,pt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,kt,It.width,It.height,0,At,pt,It.data)}}else{Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,At,pt,ft[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,At,pt,ft[Z]);for(let ct=0;ct<V.length;ct++){let ot=V[ct];Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,At,pt,ot.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,kt,At,pt,ot.image[Z])}}}f(v)&&d(i.TEXTURE_CUBE_MAP),q.__version=K.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function yt(E,v,O,$,K,q){let vt=r.convert(O.format,O.colorSpace),at=r.convert(O.type),dt=S(O.internalFormat,vt,at,O.colorSpace),Gt=n.get(v),Q=n.get(O);if(Q.__renderTarget=v,!Gt.__hasExternalTextures){let ft=Math.max(1,v.width>>q),Et=Math.max(1,v.height>>q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,q,dt,ft,Et,v.depth,0,vt,at,null):e.texImage2D(K,q,dt,ft,Et,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),zt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,Q.__webglTexture,0,Bt(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,K,Q.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(E,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let $=v.depthTexture,K=$&&$.isDepthTexture?$.type:null,q=x(v.stencilBuffer,K),vt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Bt(v);zt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,q,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,E)}else{let $=v.textures;for(let K=0;K<$.length;K++){let q=$[K],vt=r.convert(q.format,q.colorSpace),at=r.convert(q.type),dt=S(q.internalFormat,vt,at,q.colorSpace),Gt=Bt(v);O&&zt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,dt,v.width,v.height):zt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,dt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,dt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);let K=$.__webglTexture,q=Bt(v);if(v.depthTexture.format===Ti)zt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(v.depthTexture.format===Di)zt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Rt(E){let v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let $=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=$}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Tt(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),rt(v.__webglDepthbuffer[$],E,!1);else{let K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),rt(v.__webglDepthbuffer,E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(E,v,O){let $=n.get(E);v!==void 0&&yt($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Rt(E)}function oe(E){let v=E.texture,O=n.get(E),$=n.get(v);E.addEventListener("dispose",A);let K=E.textures,q=E.isWebGLCubeRenderTarget===!0,vt=K.length>1;if(vt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let dt=0;dt<v.mipmaps.length;dt++)O.__webglFramebuffer[at][dt]=i.createFramebuffer()}else O.__webglFramebuffer[at]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)O.__webglFramebuffer[at]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,dt=K.length;at<dt;at++){let Gt=n.get(K[at]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&zt(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<K.length;at++){let dt=K[at];O.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[at]);let Gt=r.convert(dt.format,dt.colorSpace),Q=r.convert(dt.type),ft=S(dt.internalFormat,Gt,Q,dt.colorSpace,E.isXRRenderTarget===!0),Et=Bt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ft,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,O.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)yt(O.__webglFramebuffer[at][dt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else yt(O.__webglFramebuffer[at],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);f(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,dt=K.length;at<dt;at++){let Gt=K[at],Q=n.get(Gt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Ft(i.TEXTURE_2D,Gt),yt(O.__webglFramebuffer,E,Gt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),f(Gt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),Ft(at,v),v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)yt(O.__webglFramebuffer[dt],E,v,i.COLOR_ATTACHMENT0,at,dt);else yt(O.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,at,0);f(v)&&d(at),e.unbindTexture()}E.depthBuffer&&Rt(E)}function Vt(E){let v=E.textures;for(let O=0,$=v.length;O<$;O++){let K=v[O];if(f(K)){let q=y(E),vt=n.get(K).__webglTexture;e.bindTexture(q,vt),d(q),e.unbindTexture()}}}let he=[],N=[];function Fe(E){if(E.samples>0){if(zt(E)===!1){let v=E.textures,O=E.width,$=E.height,K=i.COLOR_BUFFER_BIT,q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(E),at=v.length>1;if(at)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);let Gt=n.get(v[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,K,i.NEAREST),l===!0&&(he.length=0,N.length=0,he.push(i.COLOR_ATTACHMENT0+dt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(he.push(q),N.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);let Gt=n.get(v[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Bt(E){return Math.min(s.maxSamples,E.samples)}function zt(E){let v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function wt(E){let v=a.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function ee(E,v){let O=E.colorSpace,$=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Bi&&O!==In&&(Wt.getTransfer(O)===Jt?($!==Ze||K!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function bt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=G,this.rebindTextures=Ot,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=zt}function Vm(i,t){function e(n,s=In){let r,a=Wt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.BYTE;if(n===Lc)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===qo)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===fs)return i.HALF_FLOAT;if(n===Uc)return i.ALPHA;if(n===Nc)return i.RGB;if(n===Ze)return i.RGBA;if(n===Fc)return i.LUMINANCE;if(n===Oc)return i.LUMINANCE_ALPHA;if(n===Ti)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===Bc)return i.RED;if(n===Zo)return i.RED_INTEGER;if(n===zc)return i.RG;if(n===Jo)return i.RG_INTEGER;if(n===Ko)return i.RGBA_INTEGER;if(n===Ys||n===$s||n===Zs||n===Js)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pa||n===La||n===Da||n===Ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Na||n===Fa||n===Oa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Na||n===Fa)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ba)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ks||n===Qa||n===ja)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ks)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kc||n===to||n===eo||n===no)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ks)return r.COMPRESSED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var vo=class extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Se=class extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gm={type:"move"},ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let f=e.getJointPose(g,n),d=this._getHandJoint(c,g);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&p>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xm=`
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

}`,Mo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new sn({vertexShader:Wm,fragmentShader:Xm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},So=class extends Fn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,p=null,m=null,_=null,g=new Mo,f=e.getContextAttributes(),d=null,y=null,S=[],x=[],R=new ht,T=null,A=new Me;A.viewport=new ce;let C=new Me;C.viewport=new ce;let w=[A,C],M=new vo,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=S[Y];return et===void 0&&(et=new ji,S[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=S[Y];return et===void 0&&(et=new ji,S[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=S[Y];return et===void 0&&(et=new ji,S[Y]=et),et.getHandSpace()};function k(Y){let et=x.indexOf(Y.inputSource);if(et===-1)return;let yt=S[et];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,c||a),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",J);for(let Y=0;Y<S.length;Y++){let et=x[Y];et!==null&&(x[Y]=null,S[Y].disconnect(et))}I=null,H=null,g.reset(),t.setRenderTarget(d),m=null,p=null,h=null,s=null,y=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",J),f.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let et={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new xn(m.framebufferWidth,m.framebufferHeight,{format:Ze,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let et=null,yt=null,rt=null;f.depth&&(rt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=f.stencil?Di:Ti,yt=f.stencil?Li:ti);let Tt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};h=new XRWebGLBinding(s,e),p=h.createProjectionLayer(Tt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new xn(p.textureWidth,p.textureHeight,{format:Ze,type:_n,depthTexture:new ur(p.textureWidth,p.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(Y){for(let et=0;et<Y.removed.length;et++){let yt=Y.removed[et],rt=x.indexOf(yt);rt>=0&&(x[rt]=null,S[rt].disconnect(yt))}for(let et=0;et<Y.added.length;et++){let yt=Y.added[et],rt=x.indexOf(yt);if(rt===-1){for(let Rt=0;Rt<S.length;Rt++)if(Rt>=x.length){x.push(yt),rt=Rt;break}else if(x[Rt]===null){x[Rt]=yt,rt=Rt;break}if(rt===-1)break}let Tt=S[rt];Tt&&Tt.connect(yt)}}let X=new P,tt=new P;function G(Y,et,yt){X.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(yt.matrixWorld);let rt=X.distanceTo(tt),Tt=et.projectionMatrix.elements,Rt=yt.projectionMatrix.elements,Ot=Tt[14]/(Tt[10]-1),oe=Tt[14]/(Tt[10]+1),Vt=(Tt[9]+1)/Tt[5],he=(Tt[9]-1)/Tt[5],N=(Tt[8]-1)/Tt[0],Fe=(Rt[8]+1)/Rt[0],Bt=Ot*N,zt=Ot*Fe,wt=rt/(-N+Fe),ee=wt*-N;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ee),Y.translateZ(wt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Tt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let bt=Ot+wt,E=oe+wt,v=Bt-ee,O=zt+(rt-ee),$=Vt*oe/E*bt,K=he*oe/E*bt;Y.projectionMatrix.makePerspective(v,O,$,K,bt,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,yt=Y.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(yt=g.depthFar)),M.near=C.near=A.near=et,M.far=C.far=A.far=yt,(I!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,H=M.far),A.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;let rt=Y.parent,Tt=M.cameras;st(M,rt);for(let Rt=0;Rt<Tt.length;Rt++)st(Tt[Rt],rt);Tt.length===2?G(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),ut(Y,M,rt)};function ut(Y,et,yt){yt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ro*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(Y){l=Y,p!==null&&(p.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let St=null;function Ft(Y,et){if(u=et.getViewerPose(c||a),_=et,u!==null){let yt=u.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let rt=!1;yt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let Rt=0;Rt<yt.length;Rt++){let Ot=yt[Rt],oe=null;if(m!==null)oe=m.getViewport(Ot);else{let he=h.getViewSubImage(p,Ot);oe=he.viewport,Rt===0&&(t.setRenderTargetTextures(y,he.colorTexture,p.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(y))}let Vt=w[Rt];Vt===void 0&&(Vt=new Me,Vt.layers.enable(Rt),Vt.viewport=new ce,w[Rt]=Vt),Vt.matrix.fromArray(Ot.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ot.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(oe.x,oe.y,oe.width,oe.height),Rt===0&&(M.matrix.copy(Vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(Vt)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Rt=h.getDepthInformation(yt[0]);Rt&&Rt.isValid&&Rt.texture&&g.init(t,Rt,s.renderState)}}for(let yt=0;yt<S.length;yt++){let rt=x[yt],Tt=S[yt];rt!==null&&Tt!==void 0&&Tt.update(rt,et,c||a)}St&&St(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}let Qt=new qc;Qt.setAnimationLoop(Ft),this.setAnimationLoop=function(Y){St=Y},this.dispose=function(){}}},Yn=new nn,qm=new re;function Ym(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Xc(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,y,S,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),h(f,d)):d.isMeshPhongMaterial?(r(f,d),u(f,d)):d.isMeshStandardMaterial?(r(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,x)):d.isMeshMatcapMaterial?(r(f,d),_(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),g(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,y,S):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Ce&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Ce&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let y=t.get(d),S=y.envMap,x=y.envMapRotation;S&&(f.envMap.value=S,Yn.copy(x),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),f.envMapRotation.value.setFromMatrix4(qm.makeRotationFromEuler(Yn)),f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,y,S){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*y,f.scale.value=S*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function h(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,y){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ce&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,d){d.matcap&&(f.matcap.value=d.matcap)}function g(f,d){let y=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $m(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let x=S.program;n.uniformBlockBinding(y,x)}function c(y,S){let x=s[y.id];x===void 0&&(_(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",f));let R=S.program;n.updateUBOMapping(y,R);let T=t.render.frame;r[y.id]!==T&&(p(y),r[y.id]=T)}function u(y){let S=h();y.__bindingPointIndex=S;let x=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let S=s[y.id],x=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,A=x.length;T<A;T++){let C=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,M=C.length;w<M;w++){let I=C[w];if(m(I,T,w,R)===!0){let H=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],W=0;for(let J=0;J<k.length;J++){let X=k[J],tt=g(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,H+W,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,S,x,R){let T=y.value,A=S+"_"+x;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let C=R[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function _(y){let S=y.uniforms,x=0,R=16;for(let A=0,C=S.length;A<C;A++){let w=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,I=w.length;M<I;M++){let H=w[M],k=Array.isArray(H.value)?H.value:[H.value];for(let W=0,J=k.length;W<J;W++){let X=k[W],tt=g(X),G=x%R,st=G%tt.boundary,ut=G+st;x+=st,ut!==0&&R-ut<tt.storage&&(x+=R-ut),H.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=tt.storage}}}let T=x%R;return T>0&&(x+=R-T),y.__size=x,y.__cache={},this}function g(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function f(y){let S=y.target;S.removeEventListener("dispose",f);let x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var ss=class{constructor(t={}){let{canvas:e=Kh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=new Uint32Array(4),g=new Int32Array(4),f=null,d=null,y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=Dn,this.toneMappingExposure=1;let x=this,R=!1,T=0,A=0,C=null,w=-1,M=null,I=new ce,H=new ce,k=null,W=new Nt(0),J=0,X=e.width,tt=e.height,G=1,st=null,ut=null,St=new ce(0,0,X,tt),Ft=new ce(0,0,X,tt),Qt=!1,Y=new is,et=!1,yt=!1,rt=new re,Tt=new re,Rt=new P,Ot=new ce,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function he(){return C===null?G:1}let N=n;function Fe(b,D){return e.getContext(b,D)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),N===null){let D="webgl2";if(N=Fe(D,b),N===null)throw Fe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Bt,zt,wt,ee,bt,E,v,O,$,K,q,vt,at,dt,Gt,Q,ft,Et,At,pt,kt,Dt,jt,L;function it(){Bt=new hp(N),Bt.init(),Dt=new Vm(N,Bt),zt=new sp(N,Bt,t,Dt),wt=new zm(N,Bt),zt.reverseDepthBuffer&&p&&wt.buffers.depth.setReversed(!0),ee=new fp(N),bt=new Tm,E=new Hm(N,Bt,wt,bt,zt,Dt,ee),v=new ap(x),O=new cp(x),$=new yu(N),jt=new np(N,$),K=new up(N,$,ee,jt),q=new mp(N,K,$,ee),At=new pp(N,zt,E),Q=new rp(bt),vt=new Em(x,v,O,Bt,zt,jt,Q),at=new Ym(x,bt),dt=new Cm,Gt=new Um(Bt),Et=new ep(x,v,O,wt,q,m,l),ft=new Om(x,q,zt),L=new $m(N,ee,zt,wt),pt=new ip(N,Bt,ee),kt=new dp(N,Bt,ee),ee.programs=vt.programs,x.capabilities=zt,x.extensions=Bt,x.properties=bt,x.renderLists=dt,x.shadowMap=ft,x.state=wt,x.info=ee}it();let V=new So(x,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=Bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(X,tt,!1))},this.getSize=function(b){return b.set(X,tt)},this.setSize=function(b,D,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,tt=D,e.width=Math.floor(b*G),e.height=Math.floor(D*G),B===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(X*G,tt*G).floor()},this.setDrawingBufferSize=function(b,D,B){X=b,tt=D,G=B,e.width=Math.floor(b*B),e.height=Math.floor(D*B),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(St)},this.setViewport=function(b,D,B,z){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,D,B,z),wt.viewport(I.copy(St).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Ft)},this.setScissor=function(b,D,B,z){b.isVector4?Ft.set(b.x,b.y,b.z,b.w):Ft.set(b,D,B,z),wt.scissor(H.copy(Ft).multiplyScalar(G).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(b){wt.setScissorTest(Qt=b)},this.setOpaqueSort=function(b){st=b},this.setTransparentSort=function(b){ut=b},this.getClearColor=function(b){return b.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(b=!0,D=!0,B=!0){let z=0;if(b){let U=!1;if(C!==null){let j=C.texture.format;U=j===Ko||j===Jo||j===Zo}if(U){let j=C.texture.type,lt=j===_n||j===ti||j===ns||j===Li||j===Yo||j===$o,gt=Et.getClearColor(),_t=Et.getClearAlpha(),Ct=gt.r,Pt=gt.g,xt=gt.b;lt?(_[0]=Ct,_[1]=Pt,_[2]=xt,_[3]=_t,N.clearBufferuiv(N.COLOR,0,_)):(g[0]=Ct,g[1]=Pt,g[2]=xt,g[3]=_t,N.clearBufferiv(N.COLOR,0,g))}else z|=N.COLOR_BUFFER_BIT}D&&(z|=N.DEPTH_BUFFER_BIT),B&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),dt.dispose(),Gt.dispose(),bt.dispose(),v.dispose(),O.dispose(),q.dispose(),jt.dispose(),L.dispose(),vt.dispose(),V.dispose(),V.removeEventListener("sessionstart",pl),V.removeEventListener("sessionend",ml),Hn.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let b=ee.autoReset,D=ft.enabled,B=ft.autoUpdate,z=ft.needsUpdate,U=ft.type;it(),ee.autoReset=b,ft.enabled=D,ft.autoUpdate=B,ft.needsUpdate=z,ft.type=U}function ot(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function It(b){let D=b.target;D.removeEventListener("dispose",It),le(D)}function le(b){xe(b),bt.remove(b)}function xe(b){let D=bt.get(b).programs;D!==void 0&&(D.forEach(function(B){vt.releaseProgram(B)}),b.isShaderMaterial&&vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,B,z,U,j){D===null&&(D=oe);let lt=U.isMesh&&U.matrixWorld.determinant()<0,gt=ah(b,D,B,z,U);wt.setMaterial(z,lt);let _t=B.index,Ct=1;if(z.wireframe===!0){if(_t=K.getWireframeAttribute(B),_t===void 0)return;Ct=2}let Pt=B.drawRange,xt=B.attributes.position,Xt=Pt.start*Ct,te=(Pt.start+Pt.count)*Ct;j!==null&&(Xt=Math.max(Xt,j.start*Ct),te=Math.min(te,(j.start+j.count)*Ct)),_t!==null?(Xt=Math.max(Xt,0),te=Math.min(te,_t.count)):xt!=null&&(Xt=Math.max(Xt,0),te=Math.min(te,xt.count));let ne=te-Xt;if(ne<0||ne===1/0)return;jt.setup(U,z,gt,B,_t);let Ae,Yt=pt;if(_t!==null&&(Ae=$.get(_t),Yt=kt,Yt.setIndex(Ae)),U.isMesh)z.wireframe===!0?(wt.setLineWidth(z.wireframeLinewidth*he()),Yt.setMode(N.LINES)):Yt.setMode(N.TRIANGLES);else if(U.isLine){let Mt=z.linewidth;Mt===void 0&&(Mt=1),wt.setLineWidth(Mt*he()),U.isLineSegments?Yt.setMode(N.LINES):U.isLineLoop?Yt.setMode(N.LINE_LOOP):Yt.setMode(N.LINE_STRIP)}else U.isPoints?Yt.setMode(N.POINTS):U.isSprite&&Yt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Yt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Mt=U._multiDrawStarts,an=U._multiDrawCounts,$t=U._multiDrawCount,Xe=_t?$.get(_t).bytesPerElement:1,ri=bt.get(z).currentProgram.getUniforms();for(let Pe=0;Pe<$t;Pe++)ri.setValue(N,"_gl_DrawID",Pe),Yt.render(Mt[Pe]/Xe,an[Pe])}else if(U.isInstancedMesh)Yt.renderInstances(Xt,ne,U.count);else if(B.isInstancedBufferGeometry){let Mt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,an=Math.min(B.instanceCount,Mt);Yt.renderInstances(Xt,ne,an)}else Yt.render(Xt,ne)};function Zt(b,D,B){b.transparent===!0&&b.side===ke&&b.forceSinglePass===!1?(b.side=Ce,b.needsUpdate=!0,xs(b,D,B),b.side=Nn,b.needsUpdate=!0,xs(b,D,B),b.side=ke):xs(b,D,B)}this.compile=function(b,D,B=null){B===null&&(B=b),d=Gt.get(B),d.init(D),S.push(d),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),b!==B&&b.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();let z=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let j=U.material;if(j)if(Array.isArray(j))for(let lt=0;lt<j.length;lt++){let gt=j[lt];Zt(gt,B,U),z.add(gt)}else Zt(j,B,U),z.add(j)}),S.pop(),d=null,z},this.compileAsync=function(b,D,B=null){let z=this.compile(b,D,B);return new Promise(U=>{function j(){if(z.forEach(function(lt){bt.get(lt).currentProgram.isReady()&&z.delete(lt)}),z.size===0){U(b);return}setTimeout(j,10)}Bt.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let We=null;function rn(b){We&&We(b)}function pl(){Hn.stop()}function ml(){Hn.start()}let Hn=new qc;Hn.setAnimationLoop(rn),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(b){We=b,V.setAnimationLoop(b),b===null?Hn.stop():Hn.start()},V.addEventListener("sessionstart",pl),V.addEventListener("sessionend",ml),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,D,C),d=Gt.get(b,S.length),d.init(D),S.push(d),Tt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Tt),yt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,yt),f=dt.get(b,y.length),f.init(),y.push(f),V.enabled===!0&&V.isPresenting===!0){let j=x.xr.getDepthSensingMesh();j!==null&&Fr(j,D,-1/0,x.sortObjects)}Fr(b,D,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort(st,ut),Vt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Vt&&Et.addToRenderList(f,b),this.info.render.frame++,et===!0&&Q.beginShadows();let B=d.state.shadowsArray;ft.render(B,b,D),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=f.opaque,U=f.transmissive;if(d.setupLights(),D.isArrayCamera){let j=D.cameras;if(U.length>0)for(let lt=0,gt=j.length;lt<gt;lt++){let _t=j[lt];_l(z,U,b,_t)}Vt&&Et.render(b);for(let lt=0,gt=j.length;lt<gt;lt++){let _t=j[lt];gl(f,b,_t,_t.viewport)}}else U.length>0&&_l(z,U,b,D),Vt&&Et.render(b),gl(f,b,D);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,D),jt.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(d=S[S.length-1],et===!0&&Q.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?f=y[y.length-1]:f=null};function Fr(b,D,B,z){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){z&&Ot.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Tt);let lt=q.update(b),gt=b.material;gt.visible&&f.push(b,lt,gt,B,Ot.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){let lt=q.update(b),gt=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ot.copy(b.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ot.copy(lt.boundingSphere.center)),Ot.applyMatrix4(b.matrixWorld).applyMatrix4(Tt)),Array.isArray(gt)){let _t=lt.groups;for(let Ct=0,Pt=_t.length;Ct<Pt;Ct++){let xt=_t[Ct],Xt=gt[xt.materialIndex];Xt&&Xt.visible&&f.push(b,lt,Xt,B,Ot.z,xt)}}else gt.visible&&f.push(b,lt,gt,B,Ot.z,null)}}let j=b.children;for(let lt=0,gt=j.length;lt<gt;lt++)Fr(j[lt],D,B,z)}function gl(b,D,B,z){let U=b.opaque,j=b.transmissive,lt=b.transparent;d.setupLightsView(B),et===!0&&Q.setGlobalState(x.clippingPlanes,B),z&&wt.viewport(I.copy(z)),U.length>0&&_s(U,D,B),j.length>0&&_s(j,D,B),lt.length>0&&_s(lt,D,B),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function _l(b,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new xn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?fs:_n,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));let j=d.state.transmissionRenderTarget[z.id],lt=z.viewport||I;j.setSize(lt.z,lt.w);let gt=x.getRenderTarget();x.setRenderTarget(j),x.getClearColor(W),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),Vt&&Et.render(B);let _t=x.toneMapping;x.toneMapping=Dn;let Ct=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),et===!0&&Q.setGlobalState(x.clippingPlanes,z),_s(b,B,z),E.updateMultisampleRenderTarget(j),E.updateRenderTargetMipmap(j),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let xt=0,Xt=D.length;xt<Xt;xt++){let te=D[xt],ne=te.object,Ae=te.geometry,Yt=te.material,Mt=te.group;if(Yt.side===ke&&ne.layers.test(z.layers)){let an=Yt.side;Yt.side=Ce,Yt.needsUpdate=!0,xl(ne,B,z,Ae,Yt,Mt),Yt.side=an,Yt.needsUpdate=!0,Pt=!0}}Pt===!0&&(E.updateMultisampleRenderTarget(j),E.updateRenderTargetMipmap(j))}x.setRenderTarget(gt),x.setClearColor(W,J),Ct!==void 0&&(z.viewport=Ct),x.toneMapping=_t}function _s(b,D,B){let z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,j=b.length;U<j;U++){let lt=b[U],gt=lt.object,_t=lt.geometry,Ct=z===null?lt.material:z,Pt=lt.group;gt.layers.test(B.layers)&&xl(gt,D,B,_t,Ct,Pt)}}function xl(b,D,B,z,U,j){b.onBeforeRender(x,D,B,z,U,j),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(x,D,B,z,b,j),U.transparent===!0&&U.side===ke&&U.forceSinglePass===!1?(U.side=Ce,U.needsUpdate=!0,x.renderBufferDirect(B,D,z,U,b,j),U.side=Nn,U.needsUpdate=!0,x.renderBufferDirect(B,D,z,U,b,j),U.side=ke):x.renderBufferDirect(B,D,z,U,b,j),b.onAfterRender(x,D,B,z,U,j)}function xs(b,D,B){D.isScene!==!0&&(D=oe);let z=bt.get(b),U=d.state.lights,j=d.state.shadowsArray,lt=U.state.version,gt=vt.getParameters(b,U.state,j,D,B),_t=vt.getProgramCacheKey(gt),Ct=z.programs;z.environment=b.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(b.isMeshStandardMaterial?O:v).get(b.envMap||z.environment),z.envMapRotation=z.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Ct===void 0&&(b.addEventListener("dispose",It),Ct=new Map,z.programs=Ct);let Pt=Ct.get(_t);if(Pt!==void 0){if(z.currentProgram===Pt&&z.lightsStateVersion===lt)return vl(b,gt),Pt}else gt.uniforms=vt.getUniforms(b),b.onBeforeCompile(gt,x),Pt=vt.acquireProgram(gt,_t),Ct.set(_t,Pt),z.uniforms=gt.uniforms;let xt=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(xt.clippingPlanes=Q.uniform),vl(b,gt),z.needsLights=lh(b),z.lightsStateVersion=lt,z.needsLights&&(xt.ambientLightColor.value=U.state.ambient,xt.lightProbe.value=U.state.probe,xt.directionalLights.value=U.state.directional,xt.directionalLightShadows.value=U.state.directionalShadow,xt.spotLights.value=U.state.spot,xt.spotLightShadows.value=U.state.spotShadow,xt.rectAreaLights.value=U.state.rectArea,xt.ltc_1.value=U.state.rectAreaLTC1,xt.ltc_2.value=U.state.rectAreaLTC2,xt.pointLights.value=U.state.point,xt.pointLightShadows.value=U.state.pointShadow,xt.hemisphereLights.value=U.state.hemi,xt.directionalShadowMap.value=U.state.directionalShadowMap,xt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,xt.spotShadowMap.value=U.state.spotShadowMap,xt.spotLightMatrix.value=U.state.spotLightMatrix,xt.spotLightMap.value=U.state.spotLightMap,xt.pointShadowMap.value=U.state.pointShadowMap,xt.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Pt,z.uniformsList=null,Pt}function yl(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=Ci.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function vl(b,D){let B=bt.get(b);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function ah(b,D,B,z,U){D.isScene!==!0&&(D=oe),E.resetTextureUnits();let j=D.fog,lt=z.isMeshStandardMaterial?D.environment:null,gt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Bi,_t=(z.isMeshStandardMaterial?O:v).get(z.envMap||lt),Ct=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),xt=!!B.morphAttributes.position,Xt=!!B.morphAttributes.normal,te=!!B.morphAttributes.color,ne=Dn;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ne=x.toneMapping);let Ae=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Yt=Ae!==void 0?Ae.length:0,Mt=bt.get(z),an=d.state.lights;if(et===!0&&(yt===!0||b!==M)){let Oe=b===M&&z.id===w;Q.setState(z,b,Oe)}let $t=!1;z.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==an.state.version||Mt.outputColorSpace!==gt||U.isBatchedMesh&&Mt.batching===!1||!U.isBatchedMesh&&Mt.batching===!0||U.isBatchedMesh&&Mt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Mt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Mt.instancing===!1||!U.isInstancedMesh&&Mt.instancing===!0||U.isSkinnedMesh&&Mt.skinning===!1||!U.isSkinnedMesh&&Mt.skinning===!0||U.isInstancedMesh&&Mt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Mt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Mt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Mt.instancingMorph===!1&&U.morphTexture!==null||Mt.envMap!==_t||z.fog===!0&&Mt.fog!==j||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Q.numPlanes||Mt.numIntersection!==Q.numIntersection)||Mt.vertexAlphas!==Ct||Mt.vertexTangents!==Pt||Mt.morphTargets!==xt||Mt.morphNormals!==Xt||Mt.morphColors!==te||Mt.toneMapping!==ne||Mt.morphTargetsCount!==Yt)&&($t=!0):($t=!0,Mt.__version=z.version);let Xe=Mt.currentProgram;$t===!0&&(Xe=xs(z,D,U));let ri=!1,Pe=!1,Vi=!1,ie=Xe.getUniforms(),Qe=Mt.uniforms;if(wt.useProgram(Xe.program)&&(ri=!0,Pe=!0,Vi=!0),z.id!==w&&(w=z.id,Pe=!0),ri||M!==b){wt.buffers.depth.getReversed()?(rt.copy(b.projectionMatrix),jh(rt),tu(rt),ie.setValue(N,"projectionMatrix",rt)):ie.setValue(N,"projectionMatrix",b.projectionMatrix),ie.setValue(N,"viewMatrix",b.matrixWorldInverse);let Sn=ie.map.cameraPosition;Sn!==void 0&&Sn.setValue(N,Rt.setFromMatrixPosition(b.matrixWorld)),zt.logarithmicDepthBuffer&&ie.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ie.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Pe=!0,Vi=!0)}if(U.isSkinnedMesh){ie.setOptional(N,U,"bindMatrix"),ie.setOptional(N,U,"bindMatrixInverse");let Oe=U.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),ie.setValue(N,"boneTexture",Oe.boneTexture,E))}U.isBatchedMesh&&(ie.setOptional(N,U,"batchingTexture"),ie.setValue(N,"batchingTexture",U._matricesTexture,E),ie.setOptional(N,U,"batchingIdTexture"),ie.setValue(N,"batchingIdTexture",U._indirectTexture,E),ie.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ie.setValue(N,"batchingColorTexture",U._colorsTexture,E));let Gi=B.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&At.update(U,B,Xe),(Pe||Mt.receiveShadow!==U.receiveShadow)&&(Mt.receiveShadow=U.receiveShadow,ie.setValue(N,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Qe.envMap.value=_t,Qe.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(Qe.envMapIntensity.value=D.environmentIntensity),Pe&&(ie.setValue(N,"toneMappingExposure",x.toneMappingExposure),Mt.needsLights&&oh(Qe,Vi),j&&z.fog===!0&&at.refreshFogUniforms(Qe,j),at.refreshMaterialUniforms(Qe,z,G,tt,d.state.transmissionRenderTarget[b.id]),Ci.upload(N,yl(Mt),Qe,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ci.upload(N,yl(Mt),Qe,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ie.setValue(N,"center",U.center),ie.setValue(N,"modelViewMatrix",U.modelViewMatrix),ie.setValue(N,"normalMatrix",U.normalMatrix),ie.setValue(N,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Oe=z.uniformsGroups;for(let Sn=0,bn=Oe.length;Sn<bn;Sn++){let Ml=Oe[Sn];L.update(Ml,Xe),L.bind(Ml,Xe)}}return Xe}function oh(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function lh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,D,B){bt.get(b.texture).__webglTexture=D,bt.get(b.depthTexture).__webglTexture=B;let z=bt.get(b);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){let B=bt.get(b);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,B=0){C=b,T=D,A=B;let z=!0,U=null,j=!1,lt=!1;if(b){let _t=bt.get(b);if(_t.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(N.FRAMEBUFFER,null),z=!1;else if(_t.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(_t.__hasExternalTextures)E.rebindTextures(b,bt.get(b.texture).__webglTexture,bt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let xt=b.depthTexture;if(_t.__boundDepthTexture!==xt){if(xt!==null&&bt.has(xt)&&(b.width!==xt.image.width||b.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}let Ct=b.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(lt=!0);let Pt=bt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?U=Pt[D][B]:U=Pt[D],j=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?U=bt.get(b).__webglMultisampledFramebuffer:Array.isArray(Pt)?U=Pt[B]:U=Pt,I.copy(b.viewport),H.copy(b.scissor),k=b.scissorTest}else I.copy(St).multiplyScalar(G).floor(),H.copy(Ft).multiplyScalar(G).floor(),k=Qt;if(wt.bindFramebuffer(N.FRAMEBUFFER,U)&&z&&wt.drawBuffers(b,U),wt.viewport(I),wt.scissor(H),wt.setScissorTest(k),j){let _t=bt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,_t.__webglTexture,B)}else if(lt){let _t=bt.get(b.texture),Ct=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,_t.__webglTexture,B||0,Ct)}w=-1},this.readRenderTargetPixels=function(b,D,B,z,U,j,lt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){wt.bindFramebuffer(N.FRAMEBUFFER,gt);try{let _t=b.texture,Ct=_t.format,Pt=_t.type;if(!zt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-z&&B>=0&&B<=b.height-U&&N.readPixels(D,B,z,U,Dt.convert(Ct),Dt.convert(Pt),j)}finally{let _t=C!==null?bt.get(C).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(b,D,B,z,U,j,lt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){let _t=b.texture,Ct=_t.format,Pt=_t.type;if(!zt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-z&&B>=0&&B<=b.height-U){wt.bindFramebuffer(N.FRAMEBUFFER,gt);let xt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,xt),N.bufferData(N.PIXEL_PACK_BUFFER,j.byteLength,N.STREAM_READ),N.readPixels(D,B,z,U,Dt.convert(Ct),Dt.convert(Pt),0);let Xt=C!==null?bt.get(C).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,Xt);let te=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Qh(N,te,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,xt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,j),N.deleteBuffer(xt),N.deleteSync(te),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,D=null,B=0){b.isTexture!==!0&&(Ki("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);let z=Math.pow(2,-B),U=Math.floor(b.image.width*z),j=Math.floor(b.image.height*z),lt=D!==null?D.x:0,gt=D!==null?D.y:0;E.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,lt,gt,U,j),wt.unbindTexture()},this.copyTextureToTexture=function(b,D,B=null,z=null,U=0){b.isTexture!==!0&&(Ki("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1],D=arguments[2],U=arguments[3]||0,B=null);let j,lt,gt,_t,Ct,Pt,xt,Xt,te,ne=b.isCompressedTexture?b.mipmaps[U]:b.image;B!==null?(j=B.max.x-B.min.x,lt=B.max.y-B.min.y,gt=B.isBox3?B.max.z-B.min.z:1,_t=B.min.x,Ct=B.min.y,Pt=B.isBox3?B.min.z:0):(j=ne.width,lt=ne.height,gt=ne.depth||1,_t=0,Ct=0,Pt=0),z!==null?(xt=z.x,Xt=z.y,te=z.z):(xt=0,Xt=0,te=0);let Ae=Dt.convert(D.format),Yt=Dt.convert(D.type),Mt;D.isData3DTexture?(E.setTexture3D(D,0),Mt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(E.setTexture2DArray(D,0),Mt=N.TEXTURE_2D_ARRAY):(E.setTexture2D(D,0),Mt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let an=N.getParameter(N.UNPACK_ROW_LENGTH),$t=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Xe=N.getParameter(N.UNPACK_SKIP_PIXELS),ri=N.getParameter(N.UNPACK_SKIP_ROWS),Pe=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ne.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ne.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_t),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ct),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pt);let Vi=b.isDataArrayTexture||b.isData3DTexture,ie=D.isDataArrayTexture||D.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let Qe=bt.get(b),Gi=bt.get(D),Oe=bt.get(Qe.__renderTarget),Sn=bt.get(Gi.__renderTarget);wt.bindFramebuffer(N.READ_FRAMEBUFFER,Oe.__webglFramebuffer),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let bn=0;bn<gt;bn++)Vi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.get(b).__webglTexture,U,Pt+bn),b.isDepthTexture?(ie&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.get(D).__webglTexture,U,te+bn),N.blitFramebuffer(_t,Ct,j,lt,xt,Xt,j,lt,N.DEPTH_BUFFER_BIT,N.NEAREST)):ie?N.copyTexSubImage3D(Mt,U,xt,Xt,te+bn,_t,Ct,j,lt):N.copyTexSubImage2D(Mt,U,xt,Xt,te+bn,_t,Ct,j,lt);wt.bindFramebuffer(N.READ_FRAMEBUFFER,null),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ie?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(Mt,U,xt,Xt,te,j,lt,gt,Ae,Yt,ne.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Mt,U,xt,Xt,te,j,lt,gt,Ae,ne.data):N.texSubImage3D(Mt,U,xt,Xt,te,j,lt,gt,Ae,Yt,ne):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,xt,Xt,j,lt,Ae,Yt,ne.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,xt,Xt,ne.width,ne.height,Ae,ne.data):N.texSubImage2D(N.TEXTURE_2D,U,xt,Xt,j,lt,Ae,Yt,ne);N.pixelStorei(N.UNPACK_ROW_LENGTH,an),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,$t),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Xe),N.pixelStorei(N.UNPACK_SKIP_ROWS,ri),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pe),U===0&&D.generateMipmaps&&N.generateMipmap(Mt),wt.unbindTexture()},this.copyTextureToTexture3D=function(b,D,B=null,z=null,U=0){return b.isTexture!==!0&&(Ki("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,b=arguments[2],D=arguments[3],U=arguments[4]||0),Ki('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,D,B,z,U)},this.initRenderTarget=function(b){bt.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),wt.unbindTexture()},this.resetState=function(){T=0,A=0,C=null,wt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}};var dr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},rs=class extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},bo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=so,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},we=new P,fr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},as=class extends yn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vi,$i=new P,Mi=new P,Si=new P,bi=new ht,Zi=new ht,Kc=new re,ks=new P,Ji=new P,Hs=new P,vc=new ht,fa=new ht,Mc=new ht,pr=class extends _e{constructor(t=new as){if(super(),this.isSprite=!0,this.type="Sprite",vi===void 0){vi=new be;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bo(e,5);vi.setIndex([0,1,2,0,2,3]),vi.setAttribute("position",new fr(n,3,0,!1)),vi.setAttribute("uv",new fr(n,2,3,!1))}this.geometry=vi,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mi.setFromMatrixScale(this.matrixWorld),Kc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mi.multiplyScalar(-Si.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Vs(ks.set(-.5,-.5,0),Si,a,Mi,s,r),Vs(Ji.set(.5,-.5,0),Si,a,Mi,s,r),Vs(Hs.set(.5,.5,0),Si,a,Mi,s,r),vc.set(0,0),fa.set(1,0),Mc.set(1,1);let o=t.ray.intersectTriangle(ks,Ji,Hs,!1,$i);if(o===null&&(Vs(Ji.set(-.5,.5,0),Si,a,Mi,s,r),fa.set(0,1),o=t.ray.intersectTriangle(ks,Hs,Ji,!1,$i),o===null))return;let l=t.ray.origin.distanceTo($i);l<t.near||l>t.far||e.push({distance:l,point:$i.clone(),uv:Pn.getInterpolation($i,ks,Ji,Hs,vc,fa,Mc,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Vs(i,t,e,n,s,r){bi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Zi.x=r*bi.x-s*bi.y,Zi.y=s*bi.x+r*bi.y):Zi.copy(bi),i.copy(t),i.x+=Zi.x,i.y+=Zi.y,i.applyMatrix4(Kc)}var os=class extends yn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Sc=new re,wo=new ir,Gs=new Ui,Ws=new P,mr=class extends _e{constructor(t=new be,e=new os){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Gs.radius+=r,t.ray.intersectsSphere(Gs)===!1)return;Sc.copy(s).invert(),wo.copy(t.ray).applyMatrix4(Sc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=p,g=m;_<g;_++){let f=c.getX(_);Ws.fromBufferAttribute(h,f),bc(Ws,f,l,s,t,e,this)}}else{let p=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=p,g=m;_<g;_++)Ws.fromBufferAttribute(h,_),bc(Ws,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bc(i,t,e,n,s,r,a){let o=wo.distanceSqToPoint(i);if(o<e){let l=new P;wo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var gr=class extends Ue{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},He=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,m=(a-u)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ht:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],a=[],o=new P,l=new re;for(let m=0;m<=t;m++){let _=m/t;s[m]=this.getTangentAt(_,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(ge(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(ge(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],m*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ls=class extends He{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ht){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*u-m*h+this.aX,c=p*h+m*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Eo=class extends ls{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let p=(a-r)/c-(o-r)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+h)+(l-o)/h;p*=u,m*=u,s(a,o,p,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Xs=new P,pa=new jo,ma=new jo,ga=new jo,To=class extends He{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Xs.subVectors(s[0],s[1]).add(s[0]),c=Xs);let h=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Xs.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Xs),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(h),m),g=Math.pow(h.distanceToSquared(p),m),f=Math.pow(p.distanceToSquared(u),m);g<1e-4&&(g=1),_<1e-4&&(_=g),f<1e-4&&(f=g),pa.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,_,g,f),ma.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,_,g,f),ga.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,_,g,f)}else this.curveType==="catmullrom"&&(pa.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),ma.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),ga.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return n.set(pa.calc(l),ma.calc(l),ga.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function wc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Zm(i,t){let e=1-i;return e*e*t}function Jm(i,t){return 2*(1-i)*i*t}function Km(i,t){return i*i*t}function ts(i,t,e,n){return Zm(i,t)+Jm(i,e)+Km(i,n)}function Qm(i,t){let e=1-i;return e*e*e*t}function jm(i,t){let e=1-i;return 3*e*e*i*t}function tg(i,t){return 3*(1-i)*i*i*t}function eg(i,t){return i*i*i*t}function es(i,t,e,n,s){return Qm(i,t)+jm(i,e)+tg(i,n)+eg(i,s)}var _r=class extends He{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(es(t,s.x,r.x,a.x,o.x),es(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ao=class extends He{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(es(t,s.x,r.x,a.x,o.x),es(t,s.y,r.y,a.y,o.y),es(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xr=class extends He{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Co=class extends He{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yr=class extends He{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ts(t,s.x,r.x,a.x),ts(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ro=class extends He{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ts(t,s.x,r.x,a.x),ts(t,s.y,r.y,a.y),ts(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vr=class extends He{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(wc(o,l.x,c.x,u.x,h.x),wc(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},Ec=Object.freeze({__proto__:null,ArcCurve:Eo,CatmullRomCurve3:To,CubicBezierCurve:_r,CubicBezierCurve3:Ao,EllipseCurve:ls,LineCurve:xr,LineCurve3:Co,QuadraticBezierCurve:yr,QuadraticBezierCurve3:Ro,SplineCurve:vr}),Io=class extends He{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ec[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ec[s.type]().fromJSON(s))}return this}},Po=class extends Io{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new xr(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new yr(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new _r(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new vr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new ls(t,e,n,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Lo=class i extends be{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ge(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,h=new P,p=new ht,m=new P,_=new P,g=new P,f=0,d=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:f=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,m.x=d*1,m.y=-f,m.z=d*0,g.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:f=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,m.x=d*1,m.y=-f,m.z=d*0,_.copy(m),m.x+=g.x,m.y+=g.y,m.z+=g.z,m.normalize(),l.push(m.x,m.y,m.z),g.copy(_)}for(let y=0;y<=e;y++){let S=n+y*u*s,x=Math.sin(S),R=Math.cos(S);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*x,h.y=t[T].y,h.z=t[T].x*R,a.push(h.x,h.y,h.z),p.x=y/e,p.y=T/(t.length-1),o.push(p.x,p.y);let A=l[3*T+0]*x,C=l[3*T+1],w=l[3*T+0]*R;c.push(A,C,w)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){let x=S+y*t.length,R=x,T=x+t.length,A=x+t.length+1,C=x+1;r.push(R,T,C),r.push(A,C,T)}this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("uv",new ae(o,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},cs=class i extends Lo{constructor(t=1,e=1,n=4,s=8){let r=new Po;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var Ie=class i extends be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],p=[],m=[],_=0,g=[],f=n/2,d=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new ae(h,3)),this.setAttribute("normal",new ae(p,3)),this.setAttribute("uv",new ae(m,2));function y(){let x=new P,R=new P,T=0,A=(e-t)/n;for(let C=0;C<=r;C++){let w=[],M=C/r,I=M*(e-t)+t;for(let H=0;H<=s;H++){let k=H/s,W=k*l+o,J=Math.sin(W),X=Math.cos(W);R.x=I*J,R.y=-M*n+f,R.z=I*X,h.push(R.x,R.y,R.z),x.set(J,A,X).normalize(),p.push(x.x,x.y,x.z),m.push(k,1-M),w.push(_++)}g.push(w)}for(let C=0;C<s;C++)for(let w=0;w<r;w++){let M=g[w][C],I=g[w+1][C],H=g[w+1][C+1],k=g[w][C+1];(t>0||w!==0)&&(u.push(M,I,k),T+=3),(e>0||w!==r-1)&&(u.push(I,H,k),T+=3)}c.addGroup(d,T,0),d+=T}function S(x){let R=_,T=new ht,A=new P,C=0,w=x===!0?t:e,M=x===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,f*M,0),p.push(0,M,0),m.push(.5,.5),_++;let I=_;for(let H=0;H<=s;H++){let W=H/s*l+o,J=Math.cos(W),X=Math.sin(W);A.x=w*X,A.y=f*M,A.z=w*J,h.push(A.x,A.y,A.z),p.push(0,M,0),T.x=J*.5+.5,T.y=X*.5*M+.5,m.push(T.x,T.y),_++}for(let H=0;H<s;H++){let k=R+H,W=I+H;x===!0?u.push(W,W+1,k):u.push(W+1,W,k),C+=3}c.addGroup(d,C,x===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bn=class i extends Ie{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Do=class i extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let S=new P,x=new P,R=new P;for(let T=0;T<e.length;T+=3)m(e[T+0],S),m(e[T+1],x),m(e[T+2],R),l(S,x,R,y)}function l(y,S,x,R){let T=R+1,A=[];for(let C=0;C<=T;C++){A[C]=[];let w=y.clone().lerp(x,C/T),M=S.clone().lerp(x,C/T),I=T-C;for(let H=0;H<=I;H++)H===0&&C===T?A[C][H]=w:A[C][H]=w.clone().lerp(M,H/I)}for(let C=0;C<T;C++)for(let w=0;w<2*(T-C)-1;w++){let M=Math.floor(w/2);w%2===0?(p(A[C][M+1]),p(A[C+1][M]),p(A[C][M])):(p(A[C][M+1]),p(A[C+1][M+1]),p(A[C+1][M]))}}function c(y){let S=new P;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(y),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function u(){let y=new P;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let x=f(y)/2/Math.PI+.5,R=d(y)/Math.PI+.5;a.push(x,1-R)}_(),h()}function h(){for(let y=0;y<a.length;y+=6){let S=a[y+0],x=a[y+2],R=a[y+4],T=Math.max(S,x,R),A=Math.min(S,x,R);T>.9&&A<.1&&(S<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function p(y){r.push(y.x,y.y,y.z)}function m(y,S){let x=y*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function _(){let y=new P,S=new P,x=new P,R=new P,T=new ht,A=new ht,C=new ht;for(let w=0,M=0;w<r.length;w+=9,M+=6){y.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),T.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),C.set(a[M+4],a[M+5]),R.copy(y).add(S).add(x).divideScalar(3);let I=f(R);g(T,M+0,y,I),g(A,M+2,S,I),g(C,M+4,x,I)}}function g(y,S,x,R){R<0&&y.x===1&&(a[S]=y.x-1),x.x===0&&x.z===0&&(a[S]=R/2/Math.PI+.5)}function f(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},hs=class i extends Do{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ne=class i extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new P,p=new P,m=[],_=[],g=[],f=[];for(let d=0;d<=n;d++){let y=[],S=d/n,x=0;d===0&&a===0?x=.5/e:d===n&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){let T=R/e;h.x=-t*Math.cos(s+T*r)*Math.sin(a+S*o),h.y=t*Math.cos(a+S*o),h.z=t*Math.sin(s+T*r)*Math.sin(a+S*o),_.push(h.x,h.y,h.z),p.copy(h).normalize(),g.push(p.x,p.y,p.z),f.push(T+x,1-S),y.push(c++)}u.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){let S=u[d][y+1],x=u[d][y],R=u[d+1][y],T=u[d+1][y+1];(d!==0||a>0)&&m.push(S,x,T),(d!==n-1||l<Math.PI)&&m.push(x,R,T)}this.setIndex(m),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(g,3)),this.setAttribute("uv",new ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Fi=class i extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new P,h=new P,p=new P;for(let m=0;m<=n;m++)for(let _=0;_<=s;_++){let g=_/s*r,f=m/n*Math.PI*2;h.x=(t+e*Math.cos(f))*Math.cos(g),h.y=(t+e*Math.cos(f))*Math.sin(g),h.z=e*Math.sin(f),o.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),p.subVectors(h,u).normalize(),l.push(p.x,p.y,p.z),c.push(_/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=s;_++){let g=(s+1)*m+_-1,f=(s+1)*(m-1)+_-1,d=(s+1)*(m-1)+_,y=(s+1)*m+_;a.push(g,f,y),a.push(f,d,y)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ht=class extends yn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function qs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ng(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Oi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uo=class extends Oi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tl:r=t,o=2*e-n;break;case Al:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tl:a=t,l=2*n-e;break;case Al:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),g=_*_,f=g*_,d=-p*f+2*p*g-p*_,y=(1+p)*f+(-1.5-2*p)*g+(-.5+p)*_+1,S=(-1-m)*f+(1.5+m)*g+.5*_,x=m*f-m*g;for(let R=0;R!==o;++R)r[R]=d*a[u+R]+y*a[c+R]+S*a[l+R]+x*a[h+R];return r}},No=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),h=1-u;for(let p=0;p!==o;++p)r[p]=a[c+p]*h+a[l+p]*u;return r}},Fo=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ke=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qs(e,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qs(t.times,Array),values:qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new No(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Uo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case io:e=this.InterpolantFactoryMethodLinear;break;case Br:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return io;case this.InterpolantFactoryMethodSmooth:return Br}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ng(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Br,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let h=o*n,p=h-n,m=h+n;for(let _=0;_!==n;++_){let g=e[h+_];if(g!==e[p+_]||g!==e[m+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*n,p=a*n;for(let m=0;m!==n;++m)e[p+m]=e[h+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ke.prototype.TimeBufferType=Float32Array;Ke.prototype.ValueBufferType=Float32Array;Ke.prototype.DefaultInterpolation=io;var ii=class extends Ke{constructor(t,e,n){super(t,e,n)}};ii.prototype.ValueTypeName="bool";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Qs;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends Ke{};Oo.prototype.ValueTypeName="color";var Bo=class extends Ke{};Bo.prototype.ValueTypeName="number";var zo=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)On.slerpFlat(r,0,a,c-o,a,c,l);return r}},Mr=class extends Ke{InterpolantFactoryMethodLinear(t){return new zo(this.times,this.values,this.getValueSize(),t)}};Mr.prototype.ValueTypeName="quaternion";Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var si=class extends Ke{constructor(t,e,n){super(t,e,n)}};si.prototype.ValueTypeName="string";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=Qs;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends Ke{};ko.prototype.ValueTypeName="vector";var Ho=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){let m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}},ig=new Ho,Vo=class{constructor(t){this.manager=t!==void 0?t:ig,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=class extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},us=class extends Sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},_a=new re,Tc=new P,Ac=new P,Go=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tc),Ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ac),e.updateMatrixWorld(),_a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Wo=class extends Go{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends Sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new Wo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var tl="\\[\\]\\.:\\/",sg=new RegExp("["+tl+"]","g"),el="[^"+tl+"]",rg="[^"+tl.replace("\\.","")+"]",ag=/((?:WC+[\/:])*)/.source.replace("WC",el),og=/(WCOD+)?/.source.replace("WCOD",rg),lg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",el),cg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",el),hg=new RegExp("^"+ag+og+lg+cg+"$"),ug=["material","materials","bones","map"],Xo=class{constructor(t,e,n){let s=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sg,"")}static parseTrackName(t){let e=hg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ug.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=Xo;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ng=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Qc(i){let t=i>>>0||1,e=()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return e.int=n=>Math.floor(e()*n),e.range=(n,s)=>n+e()*(s-n),e.pick=n=>n[e.int(n.length)],e}var F={map:{size:1200,snowPiles:40,pileRadius:15,pileCooldown:60,pileRespawnSec:45},player:{maxHp:100,radius:12,speed:150,coverSpeedMul:.6,jumpVel:46,gravity:100,jumpDodgeZ:5},items:{healSpawn:10,healAmount:40,healRespawnSec:50,shieldSpawn:6,shieldHits:4,shieldRespawnSec:60,pickupRange:26,pill:{spawn:14,respawnSec:45,durationSec:20,speedMul:1.35,powerMul:1.5,craftMul:.5,mgChance:.45,mgAmmo:75,mgFireInterval:.12,mgSpeed:540}},pads:{radius:14,launchVel:100,carryMul:2,spots:[[.5,.5],[.28,.28],[.72,.28],[.28,.72],[.72,.72],[.5,.15],[.85,.5],[.5,.85],[.15,.5]]},towers:{radius:22,height:26,spots:[[.44,.5],[.22,.28],[.78,.28],[.22,.72],[.78,.72],[.5,.09]]},craft:{seconds:3,yield:10,interactRange:34},throw:{minChargeMs:200,maxChargeMs:1500,minRange:100,maxRange:400,speed:320,damage:14,coverDamageMul:.5,radius:6,hitChanceBase:.5},wall:{cost:4,durability:3,maxPerPlayer:2,decaySec:14,len:40,dist:28,blockChance:.65},decoy:{cost:5,maxPerPlayer:2,lureSec:3,dist:40},zone:{firstShrinkSec:75,intervalSec:48,dps:10,finalRadius:40,startRadiusFactor:.72,shrinkStep:.26},match:{total:20,npc:19,warmupSec:45,engageRange:170,fleeRange:130,totalOptions:[10,20,30,40]},npcDifficulty:{easy:{accuracy:.34,reactSec:3.4,craftThreshold:5,aggro:.07,dodge:.15,strafe:.3,seekItem:.3},normal:{accuracy:.42,reactSec:2.8,craftThreshold:6,aggro:.09,dodge:.3,strafe:.55,seekItem:.55},hard:{accuracy:.6,reactSec:2,craftThreshold:7,aggro:.15,dodge:.5,strafe:.8,seekItem:.8}},session:{targetMinSec:480,targetMaxSec:720}},nl=[{n:1,title:"\uB9C9 1 \u2014 \uB099\uD558\uC640 \uCCAB \uB208\uBB49\uCE58 \uC81C\uC791",untilSurvivors:20},{n:2,title:"\uB9C9 2 \u2014 \uB208\uBB49\uCE58 \uAD50\uC804\uACFC \uC7AC\uBCF4\uAE09",untilSurvivors:15},{n:3,title:"\uB9C9 3 \u2014 \uC124\uBCBD \uAC74\uC124\uACFC \uC81C\uC791 \uC5C4\uD3D0",untilSurvivors:10},{n:4,title:"\uB9C9 4 \u2014 \uC881\uC544\uC9C0\uB294 \uB208\uBCF4\uB77C \uAD6C\uC5ED",untilSurvivors:5},{n:5,title:"\uB9C9 5 \u2014 \uCD5C\uD6C4\uC758 \uB208\uC2F8\uC6C0",untilSurvivors:1}];function il(i){for(let t of nl)if(i>=t.untilSurvivors)return t;return nl[nl.length-1]}var zn={jack:{id:"jack",skin:"jack",name:"\uC544\uC774\uC5B8 \uC7AD \u2014 \uBC38\uB7F0\uC2A4",desc:"\uADE0\uD615 \uC7A1\uD78C \uB9CC\uB2A5\uD615. \uBAA8\uB4E0 \uB2A5\uB825\uCE58 \uD45C\uC900.",throwRangeMul:1,damageMul:1,speedMul:1,craftSecMul:1,maxHpMul:1},white:{id:"white",skin:"white",name:"\uD654\uC774\uD2B8 \uC544\uC774 \u2014 \uC800\uACA9\uC218",desc:"\uD22C\uCC99 \uC0AC\uAC70\uB9AC +30%, \uD53C\uD574 +15%. \uB300\uC2E0 \uCCB4\uB825 -20%.",throwRangeMul:1.3,damageMul:1.15,speedMul:1,craftSecMul:1,maxHpMul:.8},bear:{id:"bear",skin:"bear",name:"\uBE45 \uBCA0\uC5B4 \u2014 \uD0F1\uCEE4",desc:"\uCCB4\uB825 +30%, \uC81C\uC791 20% \uBE60\uB984. \uB300\uC2E0 \uC774\uB3D9 -15%, \uC0AC\uAC70\uB9AC -10%.",throwRangeMul:.9,damageMul:1,speedMul:.85,craftSecMul:.8,maxHpMul:1.3},dash:{id:"dash",skin:"white",name:"\uC2A4\uB178\uC6B0 \uB7EC\uB108 \u2014 \uC9C8\uC8FC\uD615",desc:"\uC774\uB3D9 +25%. \uB300\uC2E0 \uD53C\uD574 -15%.",throwRangeMul:1,damageMul:.85,speedMul:1.25,craftSecMul:1,maxHpMul:1}};var fg=1,Ge=()=>fg++;function ps(i=42,t={}){let e=Qc(i),n={seed:i,rng:e,t:0,phase:"drop",over:!1,won:!1,winner:null,difficulty:t.difficulty||"normal",players:[],snowballs:[],walls:[],decoys:[],piles:[],obstacles:[],corpses:[],pickups:[],zone:{cx:F.map.size/2,cy:F.map.size/2,radius:F.map.size*F.zone.startRadiusFactor,nextShrink:F.zone.firstShrinkSec,shrinks:0},events:[],placementOrder:[],kills:{},_humanId:t.humanId??1,stats:{craftAttempts:0,craftDone:0,craftCancel:0,throws:0,hits:0,wallsBuilt:0,decoys:0,zoneDamageTicks:0,zoneDamageTotal:0,totalDamage:0}};return yg(n),xg(n),mg(n),gg(n),pg(n),vg(n,t),ll(n,Mn(n),t.classId),n}function pg(i){let t=F.map.size;for(let e=0;e<F.items.healSpawn;e++)i.pickups.push({id:Ge(),kind:"heal",x:i.rng.range(80,t-80),y:i.rng.range(80,t-80),takenUntil:0});for(let e=0;e<F.items.shieldSpawn;e++)i.pickups.push({id:Ge(),kind:"shield",x:i.rng.range(80,t-80),y:i.rng.range(80,t-80),takenUntil:0});for(let e=0;e<F.items.pill.spawn;e++)i.pickups.push({id:Ge(),kind:"pill",x:i.rng.range(80,t-80),y:i.rng.range(80,t-80),takenUntil:0,buff:null});for(let e of i.pickups)e.kind==="pill"&&(e.buff=sl(i))}function mg(i){let t=F.map.size;i.pads=F.pads.spots.map(([e,n])=>({id:Ge(),x:e*t,y:n*t,r:F.pads.radius}))}function gg(i){let t=F.map.size;i.towers=F.towers.spots.map(([e,n])=>({id:Ge(),x:e*t,y:n*t,r:F.towers.radius,h:F.towers.height}))}function Tr(i,t,e){for(let n of i.towers||[])if(Math.hypot(n.x-t,n.y-e)<=n.r)return n.h;return 0}function sl(i){let t=F.items.pill;if(i.rng()<t.mgChance)return{kind:"mg",ammo:t.mgAmmo};let e=i.rng();return e<1/3?{kind:"speed",mul:t.speedMul}:e<2/3?{kind:"power",mul:t.powerMul}:{kind:"craft",mul:t.craftMul}}function _g(i,t,e){return e.kind==="mg"?t.mg={ammo:e.ammo,until:i.t+F.items.pill.durationSec,fireCd:0}:t.buff={kind:e.kind,mul:e.mul,until:i.t+F.items.pill.durationSec},i.events.push({t:i.t,type:"pill",id:t.id,buff:e.kind}),e}function al(i,t,e){return t.buff&&t.buff.kind===e&&t.buff.until>i.t?t.buff.mul:1}function ol(i,t,e){let n=F.items.pill;if(!t.alive||t.crafting||!t.mg||t.mg.until<=i.t||t.mg.ammo<=0||t.mg.fireCd>0)return null;t.mg.ammo--,t.mg.fireCd=n.mgFireInterval;let s={id:Ge(),ownerId:t.id,isNpc:t.isNpc,x:t.x,y:t.y,dirX:Math.cos(e),dirY:Math.sin(e),traveled:0,range:F.throw.maxRange*1.1,speed:n.mgSpeed,dead:!1,dmgMul:t.mods&&t.mods.damage||1,flat:!0,high:t.z>=F.towers.height-2};return i.snowballs.push(s),i.stats.throws++,t.mg.ammo<=0&&(t.mg=null),s}function ll(i,t,e){if(!t)return;let n=zn[e]||zn.jack;t.classId=n.id,t.skin=t.isHuman?n.skin:t.skin,t.mods={throwRange:n.throwRangeMul,damage:n.damageMul,speed:n.speedMul,craftSec:n.craftSecMul},t.hp=Math.round(F.player.maxHp*n.maxHpMul),t.maxHp=t.hp}function Ar(i,t){for(let e of i.pickups)if(!(e.takenUntil>i.t)&&!(Math.hypot(e.x-t.x,e.y-t.y)>F.items.pickupRange)){if(e.kind==="heal"){let n=t.maxHp||F.player.maxHp;if(t.hp>=n)continue;return vn(i,t,Math.min(n,t.hp+F.items.healAmount)),e.takenUntil=i.t+F.items.healRespawnSec,e.x=i.rng.range(80,F.map.size-80),e.y=i.rng.range(80,F.map.size-80),i.events.push({t:i.t,type:"heal",id:t.id}),"heal"}if(e.kind==="shield"){if(t.shieldHits>0)continue;return t.shieldHits=F.items.shieldHits,e.takenUntil=i.t+F.items.shieldRespawnSec,e.x=i.rng.range(80,F.map.size-80),e.y=i.rng.range(80,F.map.size-80),i.events.push({t:i.t,type:"shield",id:t.id}),"shield"}if(e.kind==="pill"){let n=_g(i,t,e.buff||sl(i));return e.takenUntil=i.t+F.items.pill.respawnSec,e.x=i.rng.range(80,F.map.size-80),e.y=i.rng.range(80,F.map.size-80),e.buff=sl(i),{kind:"pill",buff:n}}}return null}function xg(i){let t=F.map.size,e=[{kind:"rock",n:14,rMin:14,rMax:26},{kind:"tree",n:22,rMin:8,rMax:12},{kind:"cabin",n:6,rMin:30,rMax:40}];for(let n of e)for(let s=0;s<n.n;s++)i.obstacles.push({id:Ge(),kind:n.kind,x:i.rng.range(70,t-70),y:i.rng.range(70,t-70),r:i.rng.range(n.rMin,n.rMax),yaw:i.rng.range(0,Math.PI*2)})}function yg(i){let t=F.map.size;for(let e=0;e<F.map.snowPiles;e++)i.piles.push({id:Ge(),x:i.rng.range(60,t-60),y:i.rng.range(60,t-60),cooldownUntil:0})}function vg(i,t){let e=t.total??F.match.total,n=F.map.size,s=["jack","white","bear"],r=5,a=Math.ceil(e/r),o=n/r,l=n/a,c=[];for(let u=0;u<a;u++)for(let h=0;h<r;h++)c.push([h,u]);for(let u=0;u<e;u++){let h=!t.allNpc&&u===0,p=i._humanId!=null&&h?i._humanId:Ge(),[m,_]=c[u%c.length],g={id:p,isHuman:h,isNpc:!h,name:h?"\uC544\uC774\uC5B8 \uC7AD":`[\uBD07] ${["\uADF8\uB808\uC774","\uD504\uB85C\uC2A4\uD2B8","\uC544\uC774\uC2DC\uD074","\uBE14\uB9AC\uC790\uB4DC"][u%4]}-${u}`,skin:h?"jack":u%3===0?"bot":s[u%3],hp:F.player.maxHp,alive:!0,x:Math.min(n-40,Math.max(40,m*o+o/2+i.rng.range(-o*.3,o*.3))),y:Math.min(n-40,Math.max(40,_*l+l/2+i.rng.range(-l*.3,l*.3))),aim:i.rng.range(0,Math.PI*2),snowballs:0,crafting:!1,craftTimer:0,craftPile:null,cover:!1,walls:0,decoys:0,maxHp:F.player.maxHp,shieldHits:0,z:0,vz:0,mvx:0,mvy:0,padVx:0,padVy:0,mods:{throwRange:1,damage:1,speed:1,craftSec:1},npc:h?null:{state:"PATROL",target:null,reactTimer:0,moveTx:0,moveTy:0,wantCraft:!1,aimError:0},diff:i.difficulty};i.kills[p]=0,i.players.push(g)}}function vn(i,t,e){let n=Math.max(0,Math.min(t.maxHp||F.player.maxHp,e)),s=t.hp-n;return t.hp=n,n<=0&&t.alive&&Sg(i,t),s}function Mg(i,t,e,n=null){if(t.shieldHits>0)return t.shieldHits--,i.events.push({t:i.t,type:"shieldBlock",id:t.id,left:t.shieldHits}),0;let s=t.cover?e*F.throw.coverDamageMul:e,r=t.hp;return vn(i,t,t.hp-s),i.stats.totalDamage+=r-t.hp,r-t.hp}function Cr(i,t){return i.snowballs=Math.max(0,i.snowballs+t),i.snowballs}function cl(i,t){let e=Tr(i,t.x,t.y);return!t.alive||t.crafting||t.z>e+.01?!1:(t.vz=F.player.jumpVel,t.z=e+.011,i.events.push({t:i.t,type:"jump",id:t.id}),!0)}function Sg(i,t){t.alive&&(t.alive=!1,t.crafting=!1,i.placementOrder.push(t.id),i.corpses.push({id:t.id,x:t.x,y:t.y,skin:t.skin,name:t.name,at:i.t,yaw:t.aim}),i.events.push({t:i.t,type:"eliminate",id:t.id,isNpc:t.isNpc,place:ki(i)+1}),bg(i))}function ki(i){return i.players.filter(t=>t.alive).length}function Mn(i){return i.players.find(t=>t.id===i._humanId)}function bg(i){let t=i.players.filter(e=>e.alive);if(t.length<=1){i.phase="over",i.over=!0,i.winner=t[0]||null,i.winner&&i.placementOrder.push(i.winner.id);let e=Mn(i);i.won=!!(i.winner&&e&&i.winner.id===e.id),i.events.push({t:i.t,type:"gameover",winnerId:i.winner?i.winner.id:null,humanWon:i.won})}}function Rr(i,t,e=F.craft.interactRange){let n=null,s=e;for(let r of i.piles){if(r.cooldownUntil>i.t)continue;let a=Math.hypot(r.x-t.x,r.y-t.y);a<=s&&(s=a,n=r)}return n}function Ir(i,t){if(!t.alive||t.crafting)return!1;let e=Rr(i,t);return e?(t.crafting=!0,t.craftTimer=F.craft.seconds*(t.mods&&t.mods.craftSec||1)*al(i,t,"craft"),t.craftPile=e.id,i.stats.craftAttempts++,i.events.push({t:i.t,type:"craftStart",id:t.id}),!0):!1}function rl(i,t,e="move"){t.crafting&&(t.crafting=!1,t.craftTimer=0,t.craftPile=null,i.stats.craftCancel++,i.events.push({t:i.t,type:"craftCancel",id:t.id,reason:e}))}function wg(i,t){Cr(t,F.craft.yield);let e=i.piles.find(n=>n.id===t.craftPile);e&&(e.cooldownUntil=i.t+F.map.pileCooldown),t.crafting=!1,t.craftTimer=0,t.craftPile=null,i.stats.craftDone++,i.events.push({t:i.t,type:"craftDone",id:t.id})}function hl(i,t,e,n){if(!t.alive||t.crafting||t.snowballs<=0)return null;Cr(t,-1);let s=(F.throw.minRange+(F.throw.maxRange-F.throw.minRange)*Math.max(0,Math.min(1,n)))*(t.mods&&t.mods.throwRange||1),r={id:Ge(),ownerId:t.id,isNpc:t.isNpc,x:t.x,y:t.y,dirX:Math.cos(e),dirY:Math.sin(e),traveled:0,range:s,speed:F.throw.speed,dead:!1,dmgMul:(t.mods&&t.mods.damage||1)*al(i,t,"power"),high:t.z>=F.towers.height-2};return i.snowballs.push(r),i.stats.throws++,i.events.push({t:i.t,type:"throw",id:t.id,charge:n}),r}function Hi(i){return(Math.max(F.throw.minChargeMs,Math.min(F.throw.maxChargeMs,i))-F.throw.minChargeMs)/(F.throw.maxChargeMs-F.throw.minChargeMs)}function jc(i){return F.throw.minRange+(F.throw.maxRange-F.throw.minRange)*Math.max(0,Math.min(1,i))}function th(i,t){if(!t.alive||t.crafting||t.snowballs<F.wall.cost||t.walls>=F.wall.maxPerPlayer)return null;Cr(t,-F.wall.cost);let e=t.x+Math.cos(t.aim)*F.wall.dist,n=t.y+Math.sin(t.aim)*F.wall.dist,s={id:Ge(),ownerId:t.id,x:e,y:n,angle:t.aim+Math.PI/2,hp:F.wall.durability,decayAt:i.t+F.wall.decaySec};return i.walls.push(s),t.walls++,i.stats.wallsBuilt++,i.events.push({t:i.t,type:"wall",id:t.id}),s}function eh(i,t){if(!t.alive||t.crafting||t.snowballs<F.decoy.cost||t.decoys>=F.decoy.maxPerPlayer)return null;Cr(t,-F.decoy.cost);let e=t.x+Math.cos(t.aim)*F.decoy.dist,n=t.y+Math.sin(t.aim)*F.decoy.dist,s={id:Ge(),ownerId:t.id,x:e,y:n,until:i.t+F.decoy.lureSec,alive:!0};return i.decoys.push(s),t.decoys++,i.stats.decoys++,i.events.push({t:i.t,type:"decoy",id:t.id}),s}function Eg(i,t,e,n,s){let r=F.wall.len/2,a=i.x+Math.cos(i.angle)*r,o=i.y+Math.sin(i.angle)*r,l=i.x-Math.cos(i.angle)*r,c=i.y-Math.sin(i.angle)*r;return Tg(t,e,n,s,a,o,l,c)}function Tg(i,t,e,n,s,r,a,o){let l=(e-i)*(o-r)-(n-t)*(a-s);if(Math.abs(l)<1e-9)return!1;let c=((s-i)*(o-r)-(r-t)*(a-s))/l,u=((s-i)*(n-t)-(r-t)*(e-i))/l;return c>=0&&c<=1&&u>=0&&u<=1}function ms(i,t){if(i.over)return;i.t+=t,i.t>=i.zone.nextShrink&&i.zone.radius>F.zone.finalRadius&&(i.zone.radius=Math.max(F.zone.finalRadius,i.zone.radius*(1-F.zone.shrinkStep*.5)),i.zone.nextShrink=i.t+F.zone.intervalSec,i.zone.shrinks++,i.events.push({t:i.t,type:"zoneShrink",radius:i.zone.radius}));for(let s of i.piles)if(s.cooldownUntil>0&&i.t>=s.cooldownUntil){let r=i.rng.range(0,Math.PI*2),a=i.rng.range(0,i.zone.radius*.85);s.x=i.zone.cx+Math.cos(r)*a,s.y=i.zone.cy+Math.sin(r)*a,s.cooldownUntil=0,i.events.push({t:i.t,type:"pileRespawn",id:s.id})}for(let s of i.players){if(!s.alive||!s.isNpc)continue;let r=s.npc;(r&&r.itemUntil>i.t||i.rng()<.003)&&Ar(i,s)}for(let s of i.players){if(!s.alive)continue;let r=Tr(i,s.x,s.y);if(s.z>r+.001||s.vz!==0){s.vz-=F.player.gravity*t,s.z+=s.vz*t,(s.padVx||s.padVy)&&(s.x=Math.max(0,Math.min(F.map.size,s.x+s.padVx*t)),s.y=Math.max(0,Math.min(F.map.size,s.y+s.padVy*t)));let o=Tr(i,s.x,s.y);s.z<=o&&s.vz<0&&(s.z=o,s.vz=0,s.padVx=0,s.padVy=0)}else s.z!==r&&(s.z=r);if(s.alive&&s.z<=r+.1&&s.vz===0)for(let o of i.pads){if(Math.hypot(o.x-s.x,o.y-s.y)>o.r)continue;s.crafting&&rl(i,s,"pad"),s.vz=F.pads.launchVel,s.z=r+.02;let l=Math.hypot(s.mvx||0,s.mvy||0);s.padVx=l>.01?s.mvx/l*F.player.speed*F.pads.carryMul:0,s.padVy=l>.01?s.mvy/l*F.player.speed*F.pads.carryMul:0,i.events.push({t:i.t,type:"pad",id:s.id});break}if(s.mg&&(s.mg.fireCd>0&&(s.mg.fireCd-=t),s.mg.until<=i.t&&(s.mg=null)),s.buff&&s.buff.until<=i.t&&(s.buff=null),s.crafting&&(s.craftTimer-=t,s.craftTimer<=0&&wg(i,s)),s.isNpc&&ul(i,s,t),Math.hypot(s.x-i.zone.cx,s.y-i.zone.cy)>i.zone.radius){let o=F.zone.dps*t,l=s.hp;vn(i,s,s.hp-o),i.stats.zoneDamageTicks++,i.stats.zoneDamageTotal+=l-s.hp}}for(let s of i.snowballs){if(s.dead)continue;let r=s.speed*t,a=s.x+s.dirX*r,o=s.y+s.dirY*r,l=!1;for(let h of i.walls)if(h.ownerId!==s.ownerId&&Eg(h,s.x,s.y,a,o)){i.rng()<F.wall.blockChance&&(h.hp--,l=!0,h.hp<=0&&(h.dead=!0));break}if(l){s.dead=!0;continue}let c=!1;for(let h of i.obstacles)if(Math.hypot(h.x-a,h.y-o)<h.r){c=!0;break}if(!c&&!s.high){for(let h of i.towers||[])if(Math.hypot(h.x-a,h.y-o)<h.r){c=!0;break}}if(c){s.dead=!0;continue}let u=!1;for(let h of i.decoys)if(!(!h.alive||h.ownerId===s.ownerId)&&Math.hypot(h.x-a,h.y-o)<14){h.alive=!1,u=!0;break}if(u){s.dead=!0;continue}for(let h of i.players)if(!(!h.alive||h.id===s.ownerId)&&!(h.z-Tr(i,h.x,h.y)>F.player.jumpDodgeZ)&&Math.hypot(h.x-a,h.y-o)<F.player.radius+F.throw.radius){Mg(i,h,F.throw.damage*(s.dmgMul||1),s.ownerId)>0&&(i.stats.hits++,i.kills[s.ownerId]=i.kills[s.ownerId]||0),h.crafting&&rl(i,h,"hit"),h.alive||(i.kills[s.ownerId]=(i.kills[s.ownerId]||0)+1,i.events.push({t:i.t,type:"kill",by:s.ownerId,victim:h.id})),s.dead=!0;break}s.x=a,s.y=o,s.traveled+=r,s.traveled>=s.range&&(s.dead=!0)}i.snowballs=i.snowballs.filter(s=>!s.dead);for(let s of i.walls)s.dead||i.t>=s.decayAt&&(s.dead=!0);i.walls=i.walls.filter(s=>!s.dead),i.decoys=i.decoys.filter(s=>s.alive&&s.until>i.t-.001?!0:s.until>i.t),i.decoys=i.decoys.filter(s=>s.alive&&s.until>i.t);let e={},n={};for(let s of i.walls)e[s.ownerId]=(e[s.ownerId]||0)+1;for(let s of i.decoys)n[s.ownerId]=(n[s.ownerId]||0)+1;for(let s of i.players)s.walls=e[s.id]||0,s.decoys=n[s.id]||0;i.phase==="drop"&&i.t>0&&(i.phase="play")}function Ve(i,t,e,n,s){if(!t.alive||t.crafting)return;let r=Math.hypot(e,n)||1;t.mvx=e/r,t.mvy=n/r;let a=F.player.speed*(t.mods&&t.mods.speed||1)*al(i,t,"speed")*(t.cover?F.player.coverSpeedMul:1)*s,o=Math.max(0,Math.min(F.map.size,t.x+t.mvx*a)),l=Math.max(0,Math.min(F.map.size,t.y+t.mvy*a));if(t.z<=2)for(let c of i.obstacles){let u=c.r+F.player.radius*.6,h=o-c.x,p=l-c.y,m=Math.hypot(h,p);if(m<u&&m>.001){let _=c.x+h/m*u,g=c.y+p/m*u;Math.hypot(_-t.x,g-t.y)<=a*2+2?(o=_,l=g):(o=t.x,l=t.y)}}for(let c of i.towers||[]){if(t.z>=c.h-.5)continue;let u=c.r+F.player.radius*.4,h=o-c.x,p=l-c.y,m=Math.hypot(h,p);m<u&&m>.001&&(o=c.x+h/m*u,l=c.y+p/m*u)}t.x=Math.max(0,Math.min(F.map.size,o)),t.y=Math.max(0,Math.min(F.map.size,l))}function ul(i,t,e){let n=F.npcDifficulty[t.diff]||F.npcDifficulty.normal,s=t.npc;if(s.reactTimer-=e,Math.hypot(t.x-i.zone.cx,t.y-i.zone.cy)>i.zone.radius*.97){t.crafting&&rl(i,t,"zone"),s.zoneAng||(s.zoneAng=i.rng.range(0,Math.PI*2));let h=i.zone.radius*(.35+t.id%7*.08),p=i.zone.cx+Math.cos(s.zoneAng)*h,m=i.zone.cy+Math.sin(s.zoneAng)*h,_=Math.atan2(m-t.y,p-t.x);Ve(i,t,Math.cos(_),Math.sin(_),e),s.state="ZONE_MOVE";return}for(let h of i.players){if(!h.alive||h.id===t.id||!h.isNpc)continue;let p=Math.hypot(h.x-t.x,h.y-t.y);if(p<26&&p>.001){Ve(i,t,(t.x-h.x)/p,(t.y-h.y)/p,e*.7);break}}if(s.detourUntil>i.t){Ve(i,t,Math.cos(s.detourAng),Math.sin(s.detourAng),e),s.state="DETOUR";return}if(s.stuckCheckAt==null)s.lastX=t.x,s.lastY=t.y,s.stuckCheckAt=i.t;else if(i.t-s.stuckCheckAt>.6){let h=Math.hypot(t.x-s.lastX,t.y-s.lastY);if(["PATROL","SEEK_PILE","SEEK_ITEM","ZONE_MOVE","HUNT","RETREAT"].includes(s.state)&&h<4){let m=Math.atan2((s.moveTy||t.y)-t.y,(s.moveTx||t.x)-t.x);s.detourAng=m+(i.rng()<.5?1:-1)*i.rng.range(Math.PI/2,Math.PI*.83),s.detourUntil=i.t+.9}s.lastX=t.x,s.lastY=t.y,s.stuckCheckAt=i.t}let a=i.t>=F.match.warmupSec;if(t.crafting)return;if(n.dodge&&t.z<=.01&&s.reactTimer<=0)for(let h of i.snowballs){if(h.ownerId===t.id)continue;let p=t.x-h.x,m=t.y-h.y,_=Math.hypot(p,m);if(_>120)continue;if((p*h.dirX+m*h.dirY)/(_||1)>.86&&i.rng()<n.dodge){cl(i,t);break}}let o=t.hp<(t.maxHp||100)*.55;if(n.seekItem&&i.rng()<(o?.2:.02)){let h=null,p=240;for(let m of i.pickups){if(m.takenUntil>i.t||m.kind==="heal"&&!o||m.kind==="shield"&&t.shieldHits>0)continue;let _=Math.hypot(m.x-t.x,m.y-t.y),g=Math.hypot(m.x-i.zone.cx,m.y-i.zone.cy)<i.zone.radius*.95;_<p&&g&&i.rng()<n.seekItem&&(p=_,h=m)}h&&(s.itemTx=h.x,s.itemTy=h.y,s.itemUntil=i.t+6)}if(s.itemUntil>i.t&&s.itemTx!=null)if(Math.hypot(s.itemTx-t.x,s.itemTy-t.y)<12)s.itemUntil=0;else{let p=Math.atan2(s.itemTy-t.y,s.itemTx-t.x);Ve(i,t,Math.cos(p),Math.sin(p),e),s.state="SEEK_ITEM";return}let l=null,c=1/0;for(let h of i.decoys){if(!h.alive||h.ownerId===t.id)continue;let p=Math.hypot(h.x-t.x,h.y-t.y);p<c&&p<F.throw.maxRange&&(c=p,l={x:h.x,y:h.y,decoy:!0})}if(!l){for(let h of i.players){if(!h.alive||h.id===t.id||h.isHuman&&!a)continue;let p=Math.hypot(h.x-t.x,h.y-t.y),m=h.isHuman?p*.65:p;m<c&&(c=m,l={x:h.x,y:h.y,ref:h,realD:p})}l&&l.realD!=null&&(c=l.realD)}if(t.snowballs<n.craftThreshold){if(l&&c<F.match.fleeRange){let m=Math.atan2(t.y-l.y,t.x-l.x);Ve(i,t,Math.cos(m),Math.sin(m),e),s.state="RETREAT";return}if(Rr(i,t)){Ir(i,t),s.state="CRAFT";return}let p=Ag(i,t);if(p){let m=Math.atan2(p.y-t.y,p.x-t.x);Ve(i,t,Math.cos(m),Math.sin(m),e),s.state="SEEK_PILE";return}}if(l&&c<F.match.engageRange&&(t.snowballs>0||t.mg&&t.mg.ammo>0)){let h=Math.atan2(l.y-t.y,l.x-t.x);if(t.aim=h,t.mg&&t.mg.until>i.t&&t.mg.ammo>0){let p=(1-n.accuracy)*.22;ol(i,t,h+i.rng.range(-p,p))}else if(s.reactTimer<=0&&i.rng()<n.aggro*(l.ref&&l.ref.isHuman?1.8:1)){let p=(1-n.accuracy)*.5,m=i.rng.range(-p,p),_=Math.min(1,c/F.throw.maxRange);hl(i,t,h+m,_),s.reactTimer=n.reactSec*(l.ref&&l.ref.isHuman?.75:1)}if(c<F.match.engageRange*.4)Ve(i,t,-Math.cos(h),-Math.sin(h),e);else if(n.strafe&&i.rng()<n.strafe){(s.strafeDir==null||i.rng()<.01)&&(s.strafeDir=i.rng()<.5?1:-1);let p=h+Math.PI/2*s.strafeDir;Ve(i,t,Math.cos(p),Math.sin(p),e)}s.state="ATTACK";return}if(l&&ki(i)<=5&&t.snowballs>0){let h=Math.atan2(l.y-t.y,l.x-t.x);Ve(i,t,Math.cos(h),Math.sin(h),e),s.state="HUNT";return}if(!s.moveTx||Math.hypot(s.moveTx-t.x,s.moveTy-t.y)<20){let h=i.rng.range(0,Math.PI*2),p=i.rng.range(0,i.zone.radius*.9);s.moveTx=i.zone.cx+Math.cos(h)*p,s.moveTy=i.zone.cy+Math.sin(h)*p}let u=Math.atan2(s.moveTy-t.y,s.moveTx-t.x);Ve(i,t,Math.cos(u),Math.sin(u),e),s.state="PATROL"}function Ag(i,t){let e=null,n=1/0;for(let s of i.piles){if(s.cooldownUntil>i.t)continue;let r=Math.hypot(s.x-t.x,s.y-t.y);r<n&&(n=r,e=s)}return e}function Cg(i){let t=Mn(i);if(!t)return null;let e=i.placementOrder.indexOf(t.id);return e<0?null:i.players.length-e}function nh(i){let t=Mn(i),e=Cg(i);return{won:i.won,place:e,total:i.players.length,kills:t&&i.kills[t.id]||0,survivedSec:i.t,stats:i.stats}}var Pr=class{constructor(){this.ctx=null,this.master=null,this.bgm=null,this.sfx=null,this.started=!1,this.muted=!1,this.bpm=92,this.timer=null,this.step=0,this.ducked=!1}init(){if(this.started)return;let t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(this.ctx.destination),this.bgm=this.ctx.createGain(),this.bgm.gain.value=.28,this.bgm.connect(this.master),this.sfx=this.ctx.createGain(),this.sfx.gain.value=.7,this.sfx.connect(this.master),this.started=!0,this._startBgm())}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.5)}_tone(t,e,n="sine",s=.4,r=0,a=this.sfx){if(!this.started||this.muted)return;let o=this.ctx.currentTime,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=n,l.frequency.setValueAtTime(t,o),r&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),o+e),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(s,o+.01),c.gain.exponentialRampToValueAtTime(1e-4,o+e),l.connect(c),c.connect(a||this.sfx),l.start(o),l.stop(o+e+.02)}_noise(t,e=.4,n=800){if(!this.started||this.muted)return;let s=this.ctx.currentTime,r=this.ctx.sampleRate*t,a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),o=a.getChannelData(0);for(let h=0;h<r;h++)o[h]=(Math.random()*2-1)*(1-h/r);let l=this.ctx.createBufferSource();l.buffer=a;let c=this.ctx.createGain();c.gain.value=e;let u=this.ctx.createBiquadFilter();u.type="highpass",u.frequency.value=n,l.connect(u),u.connect(c),c.connect(this.sfx),l.start(s)}landing(){this._noise(.2,.5,300),this._tone(120,.15,"sine",.3)}craftStart(){this._duck(!0)}craftTick(){this._tone(70,.12,"sine",.5)}craftDone(){this._duck(!1),this._tone(880,.1,"sine",.4,200)}craftCancel(){this._duck(!1),this._tone(200,.2,"sawtooth",.3,-120)}throw(){this._noise(.12,.25,1200)}hit(){this._noise(.15,.5,500),this._tone(90,.12,"square",.3,-30)}wall(){this._tone(140,.18,"square",.35),this._tone(1200,.12,"sine",.2)}decoy(){this._tone(500,.12,"triangle",.3,200)}zoneWarn(){this._tone(70,.5,"sawtooth",.35,20)}fanfare(){[523,659,784,1046,1318].forEach((t,e)=>setTimeout(()=>this._tone(t,.5,"triangle",.35),e*120))}gameover(){this._tone(180,.6,"sawtooth",.4,-120),this._noise(.4,.4)}_duck(t){if(!this.started)return;this.ducked=t;let e=this.ctx.currentTime;this.bgm.gain.cancelScheduledValues(e),this.bgm.gain.linearRampToValueAtTime(t?.05:.28,e+.15)}_startBgm(){let t=[220,277,330,262,330,294],e=()=>{if(this.started){if(!this.muted&&!this.ducked){let n=t[this.step%t.length];this._tone(n,.28,"triangle",.14,0,this.bgm),this.step%t.length===0&&this._tone(n/2,.5,"sine",.1,0,this.bgm)}this.step++,this.timer=setTimeout(e,6e4/this.bpm/2)}};e()}setIntensity(t,e=20){let n=1-Math.max(0,t-1)/(e-1);this.bpm=92+n*55}stopAll(){this.timer&&clearTimeout(this.timer),this.timer=null,this.started&&(this.step=0)}};function Ig(){let i=document.cookie.match(/(?:^|;\s*)snow_uid=([^;]+)/);if(i)return i[1];let t=(crypto.randomUUID?crypto.randomUUID():String(Math.random()).slice(2)).slice(0,36);return document.cookie=`snow_uid=${t}; max-age=${3600*24*365}; path=/; SameSite=Lax`,t}function dl(){try{return localStorage.getItem("snow_nick")||""}catch{return""}}function Dr(i){try{localStorage.setItem("snow_nick",i.slice(0,12))}catch{}}function Pg(){return location.hostname==="localhost"||location.hostname==="127.0.0.1"?"ws://localhost:8901/ws":`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`}var Lr=class{constructor(){this.ws=null,this.uid=Ig(),this.handlers=new Map,this.connected=!1}on(t,e){return this.handlers.set(t,e),this}connect(){return new Promise((t,e)=>{let n=new WebSocket(Pg());this.ws=n;let s=setTimeout(()=>{try{n.close()}catch{}e(new Error("\uC11C\uBC84 \uC5F0\uACB0 \uC2DC\uAC04 \uCD08\uACFC"))},6e3);n.onopen=()=>{clearTimeout(s),this.connected=!0,t()},n.onerror=()=>{clearTimeout(s),this.connected||e(new Error("\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"))},n.onclose=()=>{this.connected=!1;let r=this.handlers.get("_close");r&&r()},n.onmessage=r=>{let a;try{a=JSON.parse(r.data)}catch{return}let o=this.handlers.get(a.type);o&&o(a)}})}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify({uid:this.uid,...t}))}close(){try{this.ws&&this.ws.close()}catch{}}};var Lg="snow_royale_save_v1",Ur=17,kn=11,ih={mg:{a:16733986,name:"\uAE30\uAD00\uCD1D"},speed:{a:4054148,name:"\uC774\uB3D9"},power:{a:16766011,name:"\uACF5\uACA9"},craft:{a:11766015,name:"\uC81C\uC791"}},sh={jack:{jacket:1780298,pants:2897232,head:15251610,accent:16739125},white:{jacket:15265524,pants:14148332,head:15779496,accent:11065578},bear:{jacket:5980966,pants:4075552,head:14264703,accent:13934615},bot:{jacket:9146262,pants:7632765,head:10988466,accent:6251370}},Nr=class{constructor(t,{seed:e=null,timeScale:n=1,autoStart:s=!0}={}){this.root=t,this.seed=e,this.timeScale=n,this.audio=new Pr,this.scene3=null,this.sceneName="title",this.keys={},this.mouse={down:!1,downAt:0},this.yaw=0,this.pitch=0,this.locked=!1,this.bobT=0,this.hitMarkerUntil=0,this.damageFlashUntil=0,this.killFeed=[],this.dropTarget=null,this.actors=new Map,this.corpseSet=new Set,this.sbMeshes=new Map,this.wallMeshes=new Map,this.decoyMeshes=new Map,this._build(),s&&this._showTitle()}get scene(){return this.sceneName}set scene(t){this.sceneName=t}_build(){this.root.innerHTML="",this.root.className="sr-root",this.renderer=new ss({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.canvas=this.renderer.domElement,this.canvas.className="sr-canvas",this.root.appendChild(this.canvas),this.fx=document.createElement("canvas"),this.fx.className="sr-fx",this.root.appendChild(this.fx),this.fxCtx=this.fx.getContext("2d"),this.overlay=document.createElement("div"),this.overlay.className="sr-overlay",this.root.appendChild(this.overlay),this.hud=document.createElement("div"),this.hud.className="sr-hud",this.hud.style.display="none",this.root.appendChild(this.hud),this.camera=new Me(80,1,.5,3e3),this._resize(),window.addEventListener("resize",()=>this._resize()),this._bindInput(),this.assetsLoaded=!0,this._loop()}async _loadAssets(){return this.assetsLoaded=!0,!0}_resize(){let t=this.root.clientWidth||960,e=this.root.clientHeight||600;this.vw=t,this.vh=e,this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix();let n=Math.min(window.devicePixelRatio||1,2);this.fx.width=t*n,this.fx.height=e*n,this.fx.style.width=t+"px",this.fx.style.height=e+"px",this.fxCtx.setTransform(n,0,0,n,0,0)}_buildWorld(){let t=this.game,e=new rs;this.scene3=e,e.background=new Nt(12572906),e.fog=new dr(14149876,220,900),e.add(new us(14674676,16777215,1));let n=new ds(16774112,1);n.position.set(-400,500,250),e.add(n);let s=96,r=new ni(F.map.size*2.2,F.map.size*2.2,s,s);r.rotateX(-Math.PI/2);let a=r.attributes.position,o=Math.sin;for(let g=0;g<a.count;g++){let f=a.getX(g),d=a.getZ(g),y=Math.sin(f*.008)*Math.cos(d*.006)*6+Math.sin(f*.02+d*.017)*2.2;a.setY(g,y-.5)}r.computeVertexNormals();let l=new Ht({color:16251644,roughness:.95,metalness:0}),c=new mt(r,l);c.position.set(F.map.size/2,0,F.map.size/2),e.add(c);for(let g=0;g<14;g++){let f=g/14*Math.PI*2,d=F.map.size*1.15,y=180+g%4*70,S=new mt(new Bn(120+g%3*60,y,5),new Ht({color:13490660,roughness:1,flatShading:!0}));S.position.set(F.map.size/2+Math.cos(f)*d,y/2-24,F.map.size/2+Math.sin(f)*d),e.add(S)}for(let g of t.obstacles){let f;if(g.kind==="rock"){f=new mt(new hs(g.r,0),new Ht({color:10135476,roughness:1,flatShading:!0})),f.position.set(g.x,g.r*.45,g.y),f.rotation.set(g.yaw,g.yaw*1.7,0);let d=new mt(new hs(g.r*.82,0),new Ht({color:16054523,roughness:1,flatShading:!0}));d.position.set(g.x,g.r*.75,g.y),e.add(d)}else if(g.kind==="tree"){f=new Se;let d=new mt(new Ie(g.r*.18,g.r*.24,g.r*1.2,6),new Ht({color:7162931,roughness:1}));d.position.y=g.r*.6,f.add(d);for(let y=0;y<3;y++){let S=new mt(new Bn(g.r*(1.5-y*.35),g.r*1.35,7),new Ht({color:y===0?3104067:3961428,roughness:1,flatShading:!0}));S.position.y=g.r*(1.1+y*.8),f.add(S);let x=new mt(new Bn(g.r*(1.5-y*.35)*.7,g.r*.4,7),new Ht({color:16054523,roughness:1,flatShading:!0}));x.position.y=g.r*(1.55+y*.8),f.add(x)}f.position.set(g.x,0,g.y)}else{f=new Se;let d=new mt(new de(g.r*1.8,g.r*.9,g.r*1.3),new Ht({color:8018490,roughness:1}));d.position.y=g.r*.45,f.add(d);let y=new mt(new Bn(g.r*1.45,g.r*.8,4),new Ht({color:16054523,roughness:1,flatShading:!0}));y.position.y=g.r*1.3,y.rotation.y=Math.PI/4,f.add(y);let S=new mt(new ni(g.r*.3,g.r*.3),new Re({color:16761446}));S.position.set(0,g.r*.5,g.r*.66),f.add(S),f.rotation.y=g.yaw,f.position.set(g.x,0,g.y)}e.add(f)}this.pileMeshes=new Map;for(let g of t.piles){let f=new mt(new Ne(10,10,7,0,Math.PI*2,0,Math.PI/2),new Ht({color:16777215,roughness:.85,emissive:9423336,emissiveIntensity:.12}));f.position.set(g.x,0,g.y),f.scale.y=.62,e.add(f),this.pileMeshes.set(g.id,f)}let u=new Ie(1,1,260,96,1,!0);this.zoneMat=new Re({color:5880040,transparent:!0,opacity:.16,side:ke,depthWrite:!1,blending:jn}),this.zoneWall=new mt(u,this.zoneMat),this.zoneWall.position.set(t.zone.cx,130,t.zone.cy),e.add(this.zoneWall),this.zoneBeams=new Se;let h=new Re({color:10477823,transparent:!0,opacity:.55,blending:jn,depthWrite:!1});for(let g=0;g<36;g++){let f=new mt(new Ie(1.4,1.4,220,5),h);f.userData.angle=g/36*Math.PI*2,f.position.y=110,this.zoneBeams.add(f)}this.zoneBeams.position.set(t.zone.cx,0,t.zone.cy),e.add(this.zoneBeams),this.zoneRing=new mt(new Fi(t.zone.radius,2.2,8,128),new Re({color:3394815})),this.zoneRing.rotation.x=Math.PI/2,this.zoneRing.position.set(t.zone.cx,1.2,t.zone.cy),this._zoneRingR=t.zone.radius,e.add(this.zoneRing),this.pickupMeshes=new Map;for(let g of t.pickups)this._makePickupMesh(g);this.padMeshes=new Map;for(let g of t.pads||[]){let f=new Se,d=new mt(new Ie(g.r,g.r+2,3,16),new Ht({color:3622735,roughness:.8}));d.position.y=1.5,f.add(d);let y=new Ht({color:11583173,metalness:.6,roughness:.4});for(let x=0;x<4;x++){let R=new mt(new Fi(g.r*.55,1.3,6,20),y);R.rotation.x=Math.PI/2,R.position.y=4+x*3,f.add(R)}let S=new mt(new Ie(g.r*.8,g.r*.8,2.4,16),new Ht({color:58879,emissive:42444,emissiveIntensity:.8,roughness:.3}));S.position.y=17,f.add(S),f.userData.plate=S,f.position.set(g.x,0,g.y),e.add(f),this.padMeshes.set(g.id,f)}for(let g of t.towers||[]){let f=new mt(new Ie(g.r,g.r*1.25,g.h,9),new Ht({color:9279910,roughness:1,flatShading:!0}));f.position.set(g.x,g.h/2,g.y),e.add(f);let d=new mt(new Ie(g.r*.98,g.r*.9,2.2,9),new Ht({color:16054523,roughness:1,flatShading:!0}));d.position.set(g.x,g.h+1.1,g.y),e.add(d)}this.hpSprites=new Map;let p=900,m=new be,_=new Float32Array(p*3);for(let g=0;g<p;g++)_[g*3]=Math.random()*F.map.size,_[g*3+1]=Math.random()*160,_[g*3+2]=Math.random()*F.map.size;m.setAttribute("position",new Te(_,3)),this.snowPts=new mr(m,new os({color:16777215,size:2.2,transparent:!0,opacity:.85})),e.add(this.snowPts),this.actors.clear(),this.corpseSet.clear(),this.sbMeshes.clear(),this.wallMeshes.clear(),this.decoyMeshes.clear();for(let g of t.players){if(g.id===t._humanId||this.online&&this.human&&g.id===this.human.id)continue;let f=this._makeFigure(g.skin,g.isNpc,!!g.userSkin);f.position.set(g.x,0,g.y),e.add(f),this.actors.set(g.id,f)}}_makePickupMesh(t){let e=this.pickupMeshes.get(t.id);e&&this.scene3.remove(e);let n=new Se;if(t.kind==="heal"){let a=new mt(new de(10,7,10),new Ht({color:16777215,roughness:.6}));a.position.y=5,n.add(a);let o=new Re({color:14692657}),l=new mt(new de(6.4,1.8,1.8),o);l.position.y=9.2,n.add(l);let c=new mt(new de(1.8,1.8,6.4),o);c.position.y=9.2,n.add(c)}else if(t.kind==="shield"){let a=new mt(new Ie(7,7,2.4,18),new Ht({color:5087231,emissive:2254540,emissiveIntensity:.7,roughness:.3}));a.position.y=6,a.rotation.x=.35,n.add(a)}else{let a=ih[t.buff&&t.buff.kind]||ih.speed,o=new Ht({color:a.a,emissive:a.a,emissiveIntensity:.5,roughness:.35}),l=new Ht({color:16119285,emissive:10066329,emissiveIntensity:.3,roughness:.35}),c=new mt(new cs(4.6,5,6,12),o);c.rotation.z=Math.PI/2,c.position.set(-2.6,9,0),n.add(c);let u=new mt(new cs(4.6,5,6,12),l);u.rotation.z=Math.PI/2,u.position.set(2.6,9,0),n.add(u),n.userData.pillColor=a.a,n.userData.buffKind=t.buff&&t.buff.kind}let s=t.kind==="heal"?16739179:t.kind==="shield"?5087231:n.userData.pillColor||16766011,r=new mt(new Ie(1.5,1.5,52,6),new Re({color:s,transparent:!0,opacity:.34,blending:jn,depthWrite:!1}));return r.position.y=26,n.add(r),n.position.set(t.x,0,t.y),this.scene3.add(n),this.pickupMeshes.set(t.id,n),n}_hpSprite(t){let e=this.hpSprites&&this.hpSprites.get(t.id);if(!e&&this.hpSprites){let n=document.createElement("canvas");n.width=96,n.height=26;let s=new gr(n),r=new as({map:s,depthTest:!1,transparent:!0});e=new pr(r),e.scale.set(26,7,1),e.userData={cv:n,tex:s,lastHp:-1,lastShield:-1},this.scene3.add(e),this.hpSprites.set(t.id,e),this._paintHpSprite(e,t)}return e}_paintHpSprite(t,e){let{cv:n,tex:s}=t.userData,r=n.getContext("2d");r.clearRect(0,0,n.width,n.height),r.font="bold 10px system-ui",r.textAlign="center",r.fillStyle=e.userSkin?"#FFB020":e.isNpc?"#d7dde3":"#ffffff",r.fillText((e.userSkin?"\u2605 ":"")+e.name.slice(0,14),n.width/2,9);let a=84,o=7,l=(n.width-a)/2,c=13;r.fillStyle="rgba(0,0,0,0.65)",r.fillRect(l,c,a,o);let u=Math.max(0,e.hp/(e.maxHp||100));if(r.fillStyle=u>.5?"#7FFFD4":u>.25?"#FF6B35":"#DC143C",r.fillRect(l+1,c+1,(a-2)*u,o-2),e.shieldHits>0){r.fillStyle="#4d9fff";for(let h=0;h<Math.min(6,e.shieldHits);h++)r.fillRect(l+h*7,c+o+2,5,3)}s.needsUpdate=!0,t.userData.lastHp=e.hp,t.userData.lastShield=e.shieldHits}_makeFigure(t,e,n=!1){let s=sh[t]||sh.bot,r=new Se,a=kn;if(n){let y=new mt(new de(a*.5,a*.16,a*.48),new Ht({color:16739125,roughness:.8}));y.position.y=a*1.72,r.add(y);let S=new mt(new de(a*.14,a*.5,a*.1),new Ht({color:16739125,roughness:.8}));S.position.set(a*.2,a*1.45,-a*.26),r.add(S);let x=new mt(new Ne(a*.26,10,8,0,Math.PI*2,0,Math.PI/2),new Ht({color:16766011,roughness:.9}));x.position.y=a*2.12,r.add(x);let R=new mt(new Ne(a*.09,8,6),new Ht({color:16777215,roughness:1}));R.position.y=a*2.3,r.add(R)}let o=y=>new Ht({color:y,roughness:.9,flatShading:!0}),l=new de(a*.28,a*.8,a*.3),c=new mt(l,o(s.pants));c.position.set(-a*.18,a*.4,0),r.add(c);let u=new mt(l,o(s.pants));u.position.set(a*.18,a*.4,0),r.add(u);let h=new mt(new de(a*.85,a*.9,a*.5),o(s.jacket));h.position.y=a*1.25,r.add(h);let p=new mt(new de(a*.87,a*.14,a*.52),o(s.accent));p.position.y=a*1.12,r.add(p);let m=new de(a*.22,a*.75,a*.24),_=new mt(m,o(s.jacket));_.position.set(-a*.58,a*1.25,0),r.add(_);let g=new mt(m,o(s.jacket));g.position.set(a*.58,a*1.25,0),r.add(g);let f=new mt(new de(a*.44,a*.42,a*.42),o(s.head));f.position.y=a*1.95,r.add(f);let d=new mt(new de(a*.54,a*.24,a*.5),o(s.jacket));if(d.position.y=a*2.18,r.add(d),e){let y=new mt(new de(a*.46,a*.1,a*.05),o(4014408));y.position.set(0,a*1.98,a*.22),r.add(y)}return r.userData={armR:g,armL:_,legL:c,legR:u,S:a},r}_classPreview(t){if(this._previewCache=this._previewCache||{},this._previewCache[t.id])return this._previewCache[t.id];let e=96,n=116,s=new rs;s.background=null,s.add(new us(16777215,12571878,1.15));let r=new ds(16774112,1.1);r.position.set(-40,60,80),s.add(r);let a=this._makeFigure(t.skin,!1,!0);a.rotation.y=.6,s.add(a);let o=new Me(38,e/n,1,500);o.position.set(0,kn*1.5,kn*4.6),o.lookAt(0,kn*1.15,0);let l=new ss({antialias:!0,alpha:!0});l.setSize(e,n),l.render(s,o);let c=l.domElement.toDataURL("image/png");return l.dispose(),this._previewCache[t.id]=c,c}_showTitle(){this.sceneName="title",this.hud.style.display="none",document.pointerLockElement&&document.exitPointerLock();let t=document.createElement("div");t.className="sr-title";let e=document.createElement("h1");e.textContent="\uC2A4\uB178\uC6B0 \uB85C\uC584";let n=document.createElement("p");n.className="sr-sub",n.textContent="Snow Royale \u2014 3D 1\uC778\uCE6D \uB208\uC2F8\uC6C0 \uBC30\uD2C0\uB85C\uC584",t.appendChild(e),t.appendChild(n);let s=document.createElement("div");s.className="sr-nickrow";let r=document.createElement("span");r.textContent="\uB2C9\uB124\uC784";let a=document.createElement("input");a.className="sr-nick",a.maxLength=12,a.placeholder="\uB208\uC0AC\uB78C",a.value=dl(),a.addEventListener("change",()=>Dr(a.value.trim())),s.appendChild(r),s.appendChild(a),t.appendChild(s),this._nickInput=a,this._mode=this._mode||"solo";let o=document.createElement("div");o.className="sr-diffrow";for(let[g,f]of[["solo","\u{1F3D4} 1\uC778 \uD50C\uB808\uC774 (\uBD07 19)"],["online","\u{1F310} \uC628\uB77C\uC778 \uD50C\uB808\uC774"]]){let d=document.createElement("button");d.className="sr-diff"+(this._mode===g?" on":""),d.textContent=f,d.addEventListener("click",()=>{this._mode=g,this._showTitle()}),o.appendChild(d)}t.appendChild(o);let l=document.createElement("div");l.className="sr-diffrow",this._difficulty=this._difficulty||"normal";for(let[g,f]of[["easy","\uC26C\uC6C0"],["normal","\uBCF4\uD1B5"],["hard","\uC5B4\uB824\uC6C0"]]){let d=document.createElement("button");d.className="sr-diff"+(this._difficulty===g?" on":""),d.textContent=f,d.addEventListener("click",()=>{this._difficulty=g,this._showTitle()}),l.appendChild(d)}t.appendChild(l),this._total=this._total||F.match.total;let c=document.createElement("div");c.className="sr-diffrow";for(let g of F.match.totalOptions){let f=document.createElement("button");f.className="sr-diff"+(this._total===g?" on":""),f.textContent=`${g}\uC778`,f.addEventListener("click",()=>{this._total=g,this._showTitle()}),c.appendChild(f)}t.appendChild(c),this._classId=this._classId||"jack";let u=document.createElement("p");u.className="sr-sub",u.textContent="\uCE90\uB9AD\uD130 \uD2B9\uC131 \uC120\uD0DD",t.appendChild(u);let h=document.createElement("div");h.className="sr-classrow";for(let g of Object.values(zn)){let f=document.createElement("button");f.className="sr-class"+(this._classId===g.id?" on":"");let d=document.createElement("img");d.className="sr-class-img",d.alt=g.name;try{d.src=this._classPreview(g)}catch{}let y=document.createElement("div");y.className="sr-class-txt";let S=document.createElement("b");S.textContent=g.name;let x=document.createElement("span");x.textContent=g.desc,y.appendChild(S),y.appendChild(x),f.appendChild(d),f.appendChild(y),f.addEventListener("click",()=>{this._classId=g.id,this._showTitle()}),h.appendChild(f)}t.appendChild(h),this.invertY=this.invertY??!1;let p=this._btn(this.invertY?"\u2195 \uB9C8\uC6B0\uC2A4 \uC0C1\uD558 \uBC18\uC804: \uCF1C\uC9D0":"\u2195 \uB9C8\uC6B0\uC2A4 \uC0C1\uD558 \uBC18\uC804: \uAEBC\uC9D0",()=>{this.invertY=!this.invertY,this._showTitle()});if(t.appendChild(p),this._mode==="online"){t.appendChild(this._btn("\u{1F310} \uACF5\uAC1C \uBC29 \uBAA9\uB85D / \uBE60\uB978 \uC785\uC7A5",()=>this._showOnlineLobby(),!0));let g=document.createElement("div");g.className="sr-nickrow";let f=document.createElement("input");f.className="sr-nick",f.maxLength=4,f.placeholder="\uBC29 \uCF54\uB4DC (\uC608: 4F2K)",f.style.textTransform="uppercase";let d=document.createElement("button");d.className="sr-btn",d.style.width="auto",d.style.margin="0",d.textContent="\uCF54\uB4DC\uB85C \uC785\uC7A5",d.addEventListener("click",()=>{f.value.trim().length===4&&this._joinOnline({code:f.value.trim().toUpperCase()})}),g.appendChild(f),g.appendChild(d),t.appendChild(g),t.appendChild(this._btn("\u{1F3E0} \uBC29 \uB9CC\uB4E4\uAE30 (\uACF5\uAC1C)",()=>this._joinOnline({create:!0,isPublic:!0}))),t.appendChild(this._btn("\u{1F512} \uBC29 \uB9CC\uB4E4\uAE30 (\uBE44\uACF5\uAC1C \xB7 \uCF54\uB4DC \uACF5\uC720)",()=>this._joinOnline({create:!0,isPublic:!1}))),t.appendChild(this._btn("\u{1F4CA} \uB0B4 \uC804\uC801",()=>this._showStats()))}else{let g=this._btn("\uB099\uD558 \uC2DC\uC791",()=>this.newGame(),!0);t.appendChild(g)}t.appendChild(this._btn("\u2753 \uC870\uC791\uBC95",()=>this._showHelp()));let m=this._btn(this.audio.muted?"\u{1F507} \uC0AC\uC6B4\uB4DC":"\u{1F50A} \uC0AC\uC6B4\uB4DC",()=>{this.audio.setMuted(!this.audio.muted),m.textContent=this.audio.muted?"\u{1F507} \uC0AC\uC6B4\uB4DC":"\u{1F50A} \uC0AC\uC6B4\uB4DC"});t.appendChild(m);let _=document.createElement("p");_.className="sr-foot",_.textContent="Three.js 3D \xB7 \uD654\uBA74 \uD074\uB9AD=\uC870\uC900 \uC7A0\uAE08(ESC \uD574\uC81C) \xB7 WASD \uC774\uB3D9 \xB7 Space \uC810\uD504 \xB7 \uB9C8\uC6B0\uC2A4 \uC2DC\uC810 \xB7 \uC88C\uD074\uB9AD \uD640\uB4DC \uD22C\uCC99 \xB7 E \uC81C\uC791 \xB7 Q \uC124\uBCBD \xB7 F \uBBF8\uB07C \xB7 C \uC5C4\uD3D0 \xB7 M \uC9C0\uB3C4",t.appendChild(_),this.overlay.innerHTML="",this.overlay.appendChild(t),this.overlay.style.display="flex"}_showHelp(){let t=document.createElement("div");t.className="sr-modal";let e=document.createElement("div");e.className="sr-modal-box";let n=document.createElement("h2");n.textContent="\uC870\uC791\uBC95 (3D FPS)",e.appendChild(n),["\u{1F5B1} \uD654\uBA74 \uD074\uB9AD \u2014 \uB9C8\uC6B0\uC2A4 \uC870\uC900 \uC7A0\uAE08 (ESC\uB85C \uD574\uC81C)","\uB9C8\uC6B0\uC2A4 \u2014 \uC2DC\uC810 \uD68C\uC804 (\uC704\uB85C \uBC00\uBA74 \uC704\uB97C \uBD04 \xB7 \uD0C0\uC774\uD2C0\uC5D0\uC11C \uBC18\uC804 \uAC00\uB2A5)","W A S D \u2014 \uBCF4\uB294 \uBC29\uD5A5 \uAE30\uC900 \uC774\uB3D9 \xB7 Space \u2014 \uC810\uD504(\uACF5\uC911\uC5D0\uC11C \uB208\uBB49\uCE58 \uD68C\uD53C) \xB7 C \u2014 \uC5C4\uD3D0(\uD53C\uD574 \uC808\uBC18)","\u{1F6E1} \uBC29\uD328 \uC544\uC774\uD15C \u2014 \uB4E4\uACE0 \uC788\uB294 \uB3D9\uC548 \uD53C\uACA9 \uC644\uC804 \uBC29\uC5B4, \uB0B4\uAD6C\uB3C4 4\uD68C \uC18C\uC9C4 \uC2DC \uD30C\uAD34","\u{1F48A} \uC54C\uC57D \u2014 \uC0C9\uC73C\uB85C \uAD6C\uBD84: \u{1F7E2}\uC774\uB3D9 \u{1F7E1}\uACF5\uACA9 \u{1F7E3}\uC81C\uC791 \u{1F534}\uAE30\uAD00\uCD1D(75\uBC1C \uC5F0\uC0AC, 20\uCD08)","\u{1F300} \uC2A4\uD504\uB9C1 \uC810\uD504 \uD328\uB4DC \u2014 \uBC1F\uC73C\uBA74 \uB2EC\uB9AC\uB358 \uBC29\uD5A5\uC73C\uB85C \uB192\uC774 \uBC1C\uC0AC. \uB3CC \uD0C0\uC6CC \uC704\uB85C \uC62C\uB77C\uAC08 \uC218 \uC788\uC74C","\uC88C\uD074\uB9AD \uD640\uB4DC \u2192 \uB193\uAE30 \u2014 \uB208\uBB49\uCE58 \uD22C\uCC99 (\uC624\uB798 \uB204\uB97C\uC218\uB85D \uBA40\uB9AC)","E \u2014 \uB208\uB354\uBBF8(\uBC18\uC9DD\uC774\uB294 \uD770 \uB454\uB355) \uC55E\uC5D0\uC11C 3\uCD08 \uC81C\uC791 +10 (\uBB34\uBC29\uBE44!)","Q \u2014 \uC124\uBCBD \uAC74\uC124 (4\uAC1C) \xB7 F \u2014 \uB208\uC0AC\uB78C \uBBF8\uB07C (5\uAC1C) \xB7 M \u2014 \uC9C0\uB3C4","\uD30C\uB780 \uBE5B \uAE30\uB465 \uBCBD = \uB208\uBCF4\uB77C \uAD6C\uC5ED \uACBD\uACC4. \uBCBD \uBC16\uC5D0 \uC788\uC73C\uBA74 \uCCB4\uB825\uC774 \uB2F3\uC2B5\uB2C8\uB2E4","\uC4F0\uB7EC\uC9C4 \uD50C\uB808\uC774\uC5B4\uB294 \uADF8 \uC790\uB9AC\uC5D0 \uB0A8\uC2B5\uB2C8\uB2E4"].forEach(r=>{let a=document.createElement("p");a.textContent=r,e.appendChild(a)}),e.appendChild(this._btn("\uB2EB\uAE30",()=>t.remove(),!0)),t.appendChild(e),this.root.appendChild(t)}_nickname(){return this._nickInput&&this._nickInput.value.trim()||dl()||"\uB208\uC0AC\uB78C"}async _ensureNet(){return this.net&&this.net.connected?this.net:(this.net=new Lr,this.net.on("lobby",t=>this._renderRoomLobby(t)).on("rooms",t=>this._renderRoomList(t.rooms)).on("error",t=>this._toast(`\u26A0 ${t.error}`)).on("you",t=>{this.onlineYouId=t.playerId}).on("match_start",t=>this._onlineMatchStart(t)).on("snap",t=>this._onlineSnap(t)).on("you_died",t=>this._onlineDied(t)).on("match_over",t=>this._onlineOver(t)).on("stats",t=>this._renderStats(t.stats)).on("_close",()=>{this.online&&(this._toast("\uC11C\uBC84 \uC5F0\uACB0\uC774 \uB04A\uC5B4\uC84C\uC2B5\uB2C8\uB2E4"),this.online=!1,this._showTitle())}),await this.net.connect(),this.net)}async _joinOnline({create:t=!1,isPublic:e=!0,code:n=null,quick:s=!1}={}){Dr(this._nickname());try{let r=await this._ensureNet(),a={name:this._nickname(),classId:this._classId||"jack"};t?r.send({type:"create_room",isPublic:e,...a}):n?r.send({type:"join_room",code:n,...a}):s&&r.send({type:"quick_join",...a})}catch(r){this._toast(`\u26A0 ${r.message} \u2014 \uC11C\uBC84\uAC00 \uAEBC\uC838 \uC788\uC73C\uBA74 1\uC778 \uD50C\uB808\uC774\uB97C \uC774\uC6A9\uD558\uC138\uC694`,4200)}}async _showOnlineLobby(){Dr(this._nickname());try{(await this._ensureNet()).send({type:"list_rooms"}),this._renderRoomList(null)}catch(t){this._toast(`\u26A0 ${t.message}`,4200)}}_renderRoomList(t){let e=document.createElement("div");e.className="sr-title";let n=document.createElement("h1");if(n.textContent="\uACF5\uAC1C \uBC29",n.style.fontSize="40px",e.appendChild(n),t==null)e.appendChild(qt("p","sr-sub","\uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uB294 \uC911\u2026"));else if(!t.length)e.appendChild(qt("p","sr-sub","\uB300\uAE30 \uC911\uC778 \uACF5\uAC1C \uBC29\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694!"));else{let s=document.createElement("div");s.className="sr-roomlist";for(let r of t){let a=document.createElement("button");a.className="sr-room",a.innerHTML=`<b>${r.code}</b><span>${r.host}\uB2D8\uC758 \uBC29 \xB7 ${r.players}/${r.max}\uBA85</span>`,a.addEventListener("click",()=>this._joinOnline({code:r.code})),s.appendChild(a)}e.appendChild(s)}e.appendChild(this._btn("\u26A1 \uBE60\uB978 \uC785\uC7A5 (\uC790\uB3D9 \uB9E4\uCE6D)",()=>this._joinOnline({quick:!0}),!0)),e.appendChild(this._btn("\u{1F504} \uC0C8\uB85C\uACE0\uCE68",()=>{this.net&&this.net.send({type:"list_rooms"})})),e.appendChild(this._btn("\u2190 \uD0C0\uC774\uD2C0\uB85C",()=>this._showTitle())),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex"}_renderRoomLobby(t){if(this.sceneName==="play")return;this.roomCode=t.code;let e=document.createElement("div");e.className="sr-title";let n=document.createElement("h1");n.textContent=`\uBC29 ${t.code}`,n.style.fontSize="40px",e.appendChild(n),e.appendChild(qt("p","sr-sub",t.isPublic?"\uACF5\uAC1C \uBC29 \u2014 \uBAA9\uB85D\uC5D0 \uB178\uCD9C\uB429\uB2C8\uB2E4":`\uBE44\uACF5\uAC1C \uBC29 \u2014 \uCE5C\uAD6C\uC5D0\uAC8C \uCF54\uB4DC ${t.code}\uB97C \uC54C\uB824\uC8FC\uC138\uC694`));let s=document.createElement("div");s.className="sr-roomlist";for(let o of t.members){let l=document.createElement("div");l.className="sr-room sr-room-static";let c=zn[o.classId]||zn.jack;l.innerHTML=`<b>${o.name}${o.uid===this.net.uid?" (\uB098)":""}${o.uid===t.hostUid?" \u{1F451}":""}</b><span>${c.name} \xB7 ${o.ready?"\u2705 \uC900\uBE44\uB428":"\uB300\uAE30 \uC911"}</span>`,s.appendChild(l)}e.appendChild(s),e.appendChild(qt("p","sr-foot",`\uB0A8\uB294 \uC790\uB9AC\uB294 \uBD07\uC774 \uCC44\uC6C1\uB2C8\uB2E4 (\uCD1D ${F.match.total}\uC778 \uB9E4\uCE58)`));let r=t.members.find(o=>o.uid===this.net.uid),a=this._btn(r&&r.ready?"\uC900\uBE44 \uCDE8\uC18C":"\u2705 \uC900\uBE44",()=>this.net.send({type:"ready",ready:!(r&&r.ready)}));e.appendChild(a),t.hostUid===this.net.uid&&e.appendChild(this._btn("\u{1F680} \uAC8C\uC784 \uC2DC\uC791 (\uBC29\uC7A5)",()=>this.net.send({type:"start"}),!0)),e.appendChild(this._btn("\uB098\uAC00\uAE30",()=>{this.net.send({type:"leave"}),this._showTitle()})),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex"}async _showStats(){try{(await this._ensureNet()).send({type:"stats"})}catch(t){this._toast(`\u26A0 ${t.message}`)}}_renderStats(t){let e=document.createElement("div");e.className="sr-title";let n=document.createElement("h1");if(n.textContent="\uB0B4 \uC804\uC801",n.style.fontSize="40px",e.appendChild(n),!t||!t.matches)e.appendChild(qt("p","sr-sub","\uC544\uC9C1 \uC628\uB77C\uC778 \uC804\uC801\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uCCAB \uB9E4\uCE58\uB97C \uB6F0\uC5B4\uBCF4\uC138\uC694!"));else{let s=document.createElement("div");s.className="sr-rstats",s.appendChild(this._stat("\uB9E4\uCE58",t.matches)),s.appendChild(this._stat("\uC2B9\uB9AC",t.wins||0)),s.appendChild(this._stat("TOP3",t.top3||0)),s.appendChild(this._stat("\uCC98\uCE58",t.kills||0)),s.appendChild(this._stat("\uD3C9\uADE0 \uC21C\uC704",t.matches?(t.totalPlace/t.matches).toFixed(1):"-")),e.appendChild(s),e.appendChild(qt("p","sr-sub",`${t.name||""} \xB7 \uB9C8\uC9C0\uB9C9 \uD50C\uB808\uC774 ${t.lastPlayedAt?t.lastPlayedAt.slice(0,10):"-"}`))}e.appendChild(this._btn("\u2190 \uD0C0\uC774\uD2C0\uB85C",()=>this._showTitle())),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex"}newGame(t=this.seed){this.audio.init(),this.audio.resume();let e=t??Math.floor(performance.now())%1e5+1;this.game=ps(e,{total:this._total||F.match.total,difficulty:this._difficulty||"normal",classId:this._classId||"jack"}),this.human=Mn(this.game),this._buildWorld(),this.online=!1,this.ghost=!1,this.ghostPos=null,this.human&&(this.human.name=this._nickname?this._nickname():this.human.name),this.sceneName="drop",this.dropT=0,this.dropTarget={x:this.game.zone.cx+this.game.rng.range(-300,300),y:this.game.zone.cy+this.game.rng.range(-300,300)},this.dropPlan=new Map;for(let n of this.game.players)n.id!==this.game._humanId&&this.dropPlan.set(n.id,{delay:this.game.rng.range(0,2.5),fallSec:this.game.rng.range(3.2,4.6),sway:this.game.rng.range(0,Math.PI*2)});this.yaw=0,this.pitch=-.15,this.killFeed=[],this.overlay.style.display="none",this.overlay.innerHTML="",this.hud.style.display="block",this._lastSurvivors=F.match.total,this._toast("\uC9C0\uB3C4\uB97C \uD074\uB9AD\uD574 \uB099\uD558 \uC9C0\uC810\uC744 \uACE0\uB974\uC138\uC694")}_onlineMatchStart(t){this.audio.init(),this.audio.resume(),this.online=!0,this.onlineMeta=t,this.game=ps(t.seed,{total:t.total,allNpc:!0,humanId:-1,difficulty:"normal"});for(let e of t.players){let n=this.game.players.find(s=>s.id===e.id);n&&(n.name=e.name,n.isNpc=e.isNpc,n.userSkin=e.userSkin,e.classId&&ll(this.game,n,e.classId))}this.human=null,this._applyYou(),this._buildWorld(),this.sceneName="play",this.ghost=!1,this.killFeed=[],this.overlay.style.display="none",this.overlay.innerHTML="",this.hud.style.display="block",this.yaw=0,this.pitch=0,this._lastSurvivors=t.total,this._toast("\u{1F310} \uC628\uB77C\uC778 \uB9E4\uCE58 \uC2DC\uC791 \u2014 \uD654\uBA74\uC744 \uD074\uB9AD\uD574 \uC870\uC900\uC744 \uC7A0\uADF8\uC138\uC694")}_applyYou(){if(!(this.onlineYouId==null||!this.game)&&(this.human=this.game.players.find(t=>t.id===this.onlineYouId)||null,this.human)){let t=this.actors.get(this.human.id);t&&(this.scene3.remove(t),this.actors.delete(this.human.id));let e=this.hpSprites&&this.hpSprites.get(this.human.id);e&&(e.visible=!1)}}_onlineSnap(t){if(!this.online||!this.game)return;this.human||this._applyYou();let e=this.game;e.t=t.t,e.zone.radius=t.zone.r,e.zone.nextShrink=t.t+t.zone.next;for(let o of t.players){let l=e.players.find(x=>x.id===o[0]);if(!l)continue;if(o.length===1){l.alive&&(l.alive=!1,e.placementOrder.includes(l.id)||e.placementOrder.push(l.id),e.corpses.push({id:l.id,x:l.x,y:l.y,skin:l.skin,name:l.name,at:e.t,yaw:l.aim}));continue}let[,c,u,h,p,m,_,g,f,d,y,S]=o;l.x=c,l.y=u,l.z=h,l.hp=m,l.snowballs=_,l.crafting=!!g,l.shieldHits=f,l.mg=d>0?{ammo:d,until:e.t+99,fireCd:0}:null,l.buff=y?{kind:y,until:e.t+99,mul:1}:null,l.cover=!!S,(!this.human||l.id!==this.human.id)&&(l.aim=p)}let n=new Set;for(let[o,l,c,u,h]of t.balls){n.add(o);let p=e.snowballs.find(m=>m.id===o);p||(p={id:o,x:l,y:c,dirX:0,dirY:0,traveled:h,range:100,speed:0,flat:!!u,dead:!1},e.snowballs.push(p)),p.x=l,p.y=c,p.traveled=h,p.range=100}e.snowballs=e.snowballs.filter(o=>n.has(o.id));let s=new Set;for(let[o,l,c,u,h]of t.walls){s.add(o);let p=e.walls.find(m=>m.id===o);p||(p={id:o,x:l,y:c,angle:u,hp:h},e.walls.push(p)),p.hp=h}e.walls=e.walls.filter(o=>s.has(o.id));let r=new Set;for(let[o,l,c]of t.decoys)r.add(o),e.decoys.find(u=>u.id===o)||e.decoys.push({id:o,x:l,y:c,alive:!0,until:e.t+99});e.decoys=e.decoys.filter(o=>r.has(o.id));for(let[o,l,c,u,h]of t.pickups){let p=e.pickups.find(m=>m.id===o);p&&(p.takenUntil=l?e.t+5:0,p.x=c,p.y=u,h&&p.buff&&(p.buff.kind=h))}for(let[o,l,c,u]of t.piles){let h=e.piles.find(p=>p.id===o);h&&(h.cooldownUntil=l?e.t+5:0,h.x=c,h.y=u)}for(let o of t.events||[]){if(o.type==="kill"){let l=e.players.find(u=>u.id===o.by),c=e.players.find(u=>u.id===o.victim);l&&c&&this.killFeed.push({text:`${l.name} \u2744\u2192 ${c.name}`,until:performance.now()+4200})}o.type==="zoneShrink"&&(this.audio.zoneWarn(),this._toast("\u26A0 \uB208\uBCF4\uB77C \uAD6C\uC5ED\uC774 \uC881\uC544\uC9D1\uB2C8\uB2E4!")),o.type==="pad"&&this.human&&o.id===this.human.id&&this._toast("\u{1F300} \uC2A4\uD504\uB9C1 \uC810\uD504!",1200)}this.killFeed.length>5&&(this.killFeed=this.killFeed.slice(-5));let a=t.alive;a!==this._lastSurvivors&&(this.audio.setIntensity(a),this._lastSurvivors=a),this._lastSnapAt=performance.now()}_onlineDied(t){this.ghost=!0,this._toast(`\u{1F480} \uD0C8\uB77D \u2014 \uCD5C\uC885 ${t.place}\uC704 / ${t.total}\uBA85 \xB7 \uCC98\uCE58 ${t.kills} \u2014 \uC720\uB839 \uBAA8\uB4DC\uB85C \uAD00\uC804\uD569\uB2C8\uB2E4 (WASD \uC774\uB3D9)`,6e3),this.audio.gameover()}_onlineOver(t){this.online=!1;let e=this.human&&t.winner&&t.winner.id===this.human.id,n=document.createElement("div");n.className="sr-result "+(e?"sr-win":"sr-lose");let s=document.createElement("div");s.className="sr-place",s.textContent=e?"\u{1F3C6}":"\u{1F3C1}";let r=document.createElement("h2");r.textContent=e?"\uC124\uC6D0\uC758 \uC655!":`\uC6B0\uC2B9: ${t.winner?t.winner.name:"-"}`,n.appendChild(s),n.appendChild(r),n.appendChild(qt("p","sr-sub","\uC7A0\uC2DC \uD6C4 \uBC29 \uB85C\uBE44\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4 \u2014 \uC900\uBE44\uB97C \uB204\uB974\uBA74 \uB9AC\uB9E4\uCE58!")),n.appendChild(this._btn("\uD0C0\uC774\uD2C0\uB85C",()=>{this.net&&this.net.send({type:"leave"}),this._showTitle()})),this.overlay.innerHTML="",this.overlay.appendChild(n),this.overlay.style.display="flex",e&&this.audio.fanfare(),this.sceneName="result"}_enterPlay(){this.sceneName="play",this.dropTarget&&(this.human.x=this.dropTarget.x,this.human.y=this.dropTarget.y),this.yaw=this._dropLandYaw!=null?this._dropLandYaw:Math.atan2(this.game.zone.cy-this.human.y,this.game.zone.cx-this.human.x),this.pitch=0,this.audio.landing(),this._toast("\uD654\uBA74\uC744 \uD074\uB9AD\uD574 \uC870\uC900\uC744 \uC7A0\uADF8\uC138\uC694 (ESC \uD574\uC81C)")}_showResult(){this.sceneName="result",this.hud.style.display="none",document.pointerLockElement&&document.exitPointerLock();let t=nh(this.game);t.won?this.audio.fanfare():this.audio.gameover(),this.audio.stopAll();let e=document.createElement("div");e.className="sr-result "+(t.won?"sr-win":"sr-lose");let n=document.createElement("div");n.className="sr-place",n.textContent=t.won?"\u{1F3C6}":`#${t.place}`;let s=document.createElement("h2");s.textContent=t.won?"\uC124\uC6D0\uC758 \uC655!":"\uD0C8\uB77D";let r=document.createElement("div");r.className="sr-rstats",r.appendChild(this._stat("\uC21C\uC704",`${t.place}/${t.total}`)),r.appendChild(this._stat("\uCC98\uCE58",t.kills)),r.appendChild(this._stat("\uC0DD\uC874",`${Math.floor(t.survivedSec/60)}:${String(Math.floor(t.survivedSec%60)).padStart(2,"0")}`)),e.appendChild(n),e.appendChild(s),e.appendChild(r);let a=document.createElement("p");a.className="sr-sub",a.textContent=t.won?"\uB9C8\uC9C0\uB9C9\uAE4C\uC9C0 \uB9DE\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.":this._humanLastCause||"\uB208\uBB49\uCE58\uC5D0 \uB9DE\uC544 \uD0C8\uB77D\uD588\uC2B5\uB2C8\uB2E4.",e.appendChild(a);let o=this._btn("\uB2E4\uC2DC \uB3C4\uC804 (Space)",()=>this.newGame(),!0);e.appendChild(o),e.appendChild(this._btn("\uD0C0\uC774\uD2C0\uB85C",()=>this._showTitle())),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex";try{localStorage.setItem(Lg,JSON.stringify({lastPlace:t.place,won:t.won}))}catch{}}_bindInput(){window.addEventListener("keydown",e=>{this.keys[e.code]=!0,e.code==="Space"&&this.sceneName==="result"&&(e.preventDefault(),this.newGame()),this.sceneName==="play"&&(this.ghost?e.code==="Enter"&&!this.online&&this.game&&(this.ghost=!1,this._showResult()):this.online?(e.code==="KeyE"&&(this._queuedCraft=!0),e.code==="KeyQ"&&(this._queuedWall=!0),e.code==="KeyF"&&(this._queuedDecoy=!0),e.code==="Space"&&(this._queuedJump=!0)):(e.code==="KeyE"&&this._tryCraft(),e.code==="KeyQ"&&this._act("wall"),e.code==="KeyF"&&this._act("decoy"),e.code==="Space"&&cl(this.game,this.human)&&this.audio.throw()),["KeyW","KeyA","KeyS","KeyD","Space"].includes(e.code)&&e.preventDefault()),e.code==="KeyM"&&(this._showMinimap=!this._showMinimap)}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),window.addEventListener("blur",()=>{this.keys={},this.mouse.down=!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,!this.locked&&this.sceneName==="play"&&this._toast("\uC870\uC900 \uC7A0\uAE08 \uD574\uC81C \u2014 \uD654\uBA74\uC744 \uD074\uB9AD\uD574 \uB2E4\uC2DC \uC7A0\uADF8\uC138\uC694")}),document.addEventListener("mousemove",e=>{if(!this.locked||this.sceneName!=="play")return;let n=.0024;this.yaw+=e.movementX*n;let s=this.invertY?-1:1;this.pitch=Math.max(-.85,Math.min(.85,this.pitch-e.movementY*n*s))});let t=()=>this.canvas.getBoundingClientRect();this.canvas.addEventListener("mousedown",e=>{if(this.audio.resume(),this.sceneName==="drop"){let n=t(),s=this._dropScreenToWorld(e.clientX-n.left,e.clientY-n.top);s&&(this.dropTarget=s);return}if(this.sceneName==="play"){if(!this.locked){let n=this.canvas.requestPointerLock&&this.canvas.requestPointerLock({unadjustedMovement:!0});n&&n.catch&&n.catch(()=>this.canvas.requestPointerLock());return}this.mouse.down=!0,this.mouse.downAt=performance.now()}}),this.canvas.addEventListener("mouseup",()=>{if(this.sceneName==="play"&&this.locked&&this.mouse.down){let e=this.human,n=this.game;!(e&&e.mg&&n&&e.mg.ammo>0&&(this.online||e.mg.until>n.t))&&!this.ghost&&(this.online?e&&e.snowballs>0&&(this._queuedThrow=Hi(performance.now()-this.mouse.downAt),this.audio.throw(),this.viewKick=1):this._throw(performance.now()-this.mouse.downAt)),this.mouse.down=!1}}),this.canvas.addEventListener("touchstart",e=>{this.audio.resume(),this.sceneName==="play"&&(this.mouse.down=!0,this.mouse.downAt=performance.now()),e.preventDefault()},{passive:!1}),this.canvas.addEventListener("touchend",e=>{this.sceneName==="play"&&this.mouse.down&&(this._throw(performance.now()-this.mouse.downAt),this.mouse.down=!1),e.preventDefault()},{passive:!1})}_dropScreenToWorld(t,e){let n=Math.min(this.vw,this.vh)/(F.map.size*1.05),s=this.vw/2-this.game.zone.cx*n,r=this.vh/2-this.game.zone.cy*n;return{x:(t-s)/n,y:(e-r)/n}}_tryCraft(){!this.human.alive||this.human.crafting||(Ir(this.game,this.human)?this.audio.craftStart():this._toast("\uADFC\uCC98\uC5D0 \uB208\uB354\uBBF8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4 \u2014 \uBC18\uC9DD\uC774\uB294 \uD770 \uB454\uB355\uC744 \uCC3E\uC73C\uC138\uC694 (M \uC9C0\uB3C4)"))}_throw(t){if(!this.human.alive||this.human.crafting)return;if(this.human.snowballs<=0){this._toast("\uB208\uBB49\uCE58 \uC5C6\uC74C \u2014 \uB208\uB354\uBBF8\uC5D0\uC11C E\uB85C \uC81C\uC791\uD558\uC138\uC694");return}let e=Hi(t);hl(this.game,this.human,this.yaw,e),this.audio.throw(),this.viewKick=1}_act(t){!this.human.alive||this.human.crafting||(this.human.aim=this.yaw,t==="wall"&&(th(this.game,this.human)?this.audio.wall():this._toast(`\uC124\uBCBD: \uB208\uBB49\uCE58 ${F.wall.cost}\uAC1C \uD544\uC694 (\uCD5C\uB300 ${F.wall.maxPerPlayer})`)),t==="decoy"&&(eh(this.game,this.human)?this.audio.decoy():this._toast(`\uBBF8\uB07C: \uB208\uBB49\uCE58 ${F.decoy.cost}\uAC1C \uD544\uC694 (\uCD5C\uB300 ${F.decoy.maxPerPlayer})`)))}_update(t){if(!this.game)return;if(this.sceneName==="drop"){this.dropT+=t,this.dropT>=8&&this._enterPlay();return}if(this.sceneName!=="play")return;if(this.online){this._updateOnline(t);return}if(this.ghost){this._updateGhost(t),this.game&&!this.game.over?(ms(this.game,t),this._drainSoloEvents()):this.game&&this.game.over&&this._showResult();return}let e=this.game,n=this.human;if(n.aim=this.yaw,n.alive&&!n.crafting){let u=0,h=0;if((this.keys.KeyW||this.keys.ArrowUp)&&(u+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(u-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(h+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(h-=1),n.cover=!!this.keys.KeyC,u||h){let p=Math.cos(this.yaw),m=Math.sin(this.yaw),_=p*u+-m*h,g=m*u+p*h;Ve(e,n,_,g,t),this.bobT+=t*9}}n.alive&&!n.crafting&&n.mg&&n.mg.until>e.t&&n.mg.ammo>0&&this.mouse.down&&this.locked&&ol(e,n,this.yaw)&&(this.audio.throw(),this.viewKick=.4);let s=n.hp,r=n.crafting,a=n.alive,o=e.kills[n.id]||0,l=e.stats.hits;if(n.crafting&&(this._craftBeat=(this._craftBeat||0)+t,this._craftBeat>.5&&(this._craftBeat=0,this.audio.craftTick())),ms(e,t),n.hp<s&&(this.audio.hit(),this.damageFlashUntil=performance.now()+250),(e.kills[n.id]||0)>o?this.hitMarkerUntil=performance.now()+400:e.stats.hits>l&&(this.hitMarkerUntil=Math.max(this.hitMarkerUntil,performance.now()+220)),a&&!n.alive&&(this._humanLastCause="\uB208\uBB49\uCE58\uC5D0 \uB9DE\uC544 \uD0C8\uB77D\uD588\uC2B5\uB2C8\uB2E4.",!e.over)){this.ghost=!0;let u=e.players.length-e.placementOrder.indexOf(n.id);this.ghostPos={x:n.x,y:n.y,z:60},this._toast(`\u{1F480} \uD0C8\uB77D \u2014 ${u}\uC704 / ${e.players.length}\uBA85 \xB7 \uC720\uB839 \uBAA8\uB4DC\uB85C \uAD00\uC804 (WASD+\uB9C8\uC6B0\uC2A4, Space \uC0C1\uC2B9/C \uD558\uAC15, Enter \uACB0\uACFC \uBCF4\uAE30)`,7e3),this.audio.gameover();return}for(let u of e.events.splice(0)){if(u.type==="kill"){let h=e.players.find(m=>m.id===u.by),p=e.players.find(m=>m.id===u.victim);h&&p&&this.killFeed.push({text:`${h.name} \u2744\u2192 ${p.name}`,until:performance.now()+4200})}u.type==="pad"&&u.id===n.id&&(this.audio.throw(),this._toast("\u{1F300} \uC2A4\uD504\uB9C1 \uC810\uD504!",1500)),u.type==="shieldBlock"&&u.id===n.id&&(this.shieldFlashUntil=performance.now()+300,this.audio.wall(),u.left===0&&this._toast("\u{1F6E1} \uBC29\uD328\uAC00 \uBD80\uC11C\uC84C\uC2B5\uB2C8\uB2E4!"))}this.killFeed.length>5&&(this.killFeed=this.killFeed.slice(-5));let c=ki(e);if(c!==this._lastSurvivors&&(this.audio.setIntensity(c),this._lastSurvivors=c),e.zone.shrinks!==this._lastShrinks&&(this._lastShrinks=e.zone.shrinks,this.audio.zoneWarn(),this._toast("\u26A0 \uB208\uBCF4\uB77C \uAD6C\uC5ED\uC774 \uC881\uC544\uC9D1\uB2C8\uB2E4!")),r&&!n.crafting&&n.craftTimer<=0&&n.alive&&this.audio.craftDone(),n.alive){let u=Ar(e,n);if(u==="heal"&&(this.audio.craftDone(),this._toast(`\u{1F48A} \uD790\uD329 +${F.items.healAmount} HP`)),u==="shield"&&(this.audio.wall(),this._toast(`\u{1F6E1} \uBC29\uD328 \uD68D\uB4DD \u2014 \uB2E4\uC74C ${F.items.shieldHits}\uD68C \uD53C\uACA9 \uC644\uC804 \uBC29\uC5B4 (\uB0B4\uAD6C\uB3C4 ${F.items.shieldHits})`)),u&&u.kind==="pill"){this.audio.fanfare();let h=u.buff,p=h.kind==="mg"?`\u{1F48A}\u{1F525} \uB208 \uAE30\uAD00\uCD1D!! ${F.items.pill.mgAmmo}\uBC1C \xB7 ${F.items.pill.durationSec}\uCD08 \u2014 \uC88C\uD074\uB9AD \uD640\uB4DC\uB85C \uC5F0\uC0AC`:h.kind==="speed"?`\u{1F48A} \uC54C\uC57D: \uC774\uB3D9\uC18D\uB3C4 +${Math.round((h.mul-1)*100)}% (${F.items.pill.durationSec}\uCD08)`:h.kind==="power"?`\u{1F48A} \uC54C\uC57D: \uACF5\uACA9\uB825 +${Math.round((h.mul-1)*100)}% (${F.items.pill.durationSec}\uCD08)`:`\u{1F48A} \uC54C\uC57D: \uC81C\uC791\uC18D\uB3C4 2\uBC30 (${F.items.pill.durationSec}\uCD08)`;this._toast(p,4200)}}this.viewKick>0&&(this.viewKick=Math.max(0,this.viewKick-t*4)),e.over&&this._showResult()}_updateGhost(t){this.ghostPos||(this.ghostPos={x:this.human?this.human.x:F.map.size/2,y:this.human?this.human.y:F.map.size/2,z:60});let e=260*t,n=0,s=0;(this.keys.KeyW||this.keys.ArrowUp)&&(n+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(n-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(s+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(s-=1);let r=Math.cos(this.yaw),a=Math.sin(this.yaw);this.ghostPos.x=Math.max(0,Math.min(F.map.size,this.ghostPos.x+(r*n-a*s)*e)),this.ghostPos.y=Math.max(0,Math.min(F.map.size,this.ghostPos.y+(a*n+r*s)*e)),this.keys.Space&&(this.ghostPos.z=Math.min(400,this.ghostPos.z+160*t)),this.keys.KeyC&&(this.ghostPos.z=Math.max(10,this.ghostPos.z-160*t))}_drainSoloEvents(){let t=this.game;for(let e of t.events.splice(0))if(e.type==="kill"){let n=t.players.find(r=>r.id===e.by),s=t.players.find(r=>r.id===e.victim);n&&s&&this.killFeed.push({text:`${n.name} \u2744\u2192 ${s.name}`,until:performance.now()+4200})}this.killFeed.length>5&&(this.killFeed=this.killFeed.slice(-5)),t.zone.shrinks!==this._lastShrinks&&(this._lastShrinks=t.zone.shrinks,this.audio.zoneWarn())}_updateOnline(t){let e=this.human;if(!e)return;if(this.ghost){this._updateGhost(t);return}let n=0,s=0;(this.keys.KeyW||this.keys.ArrowUp)&&(n+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(n-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(s+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(s-=1);let r=Math.cos(this.yaw),a=Math.sin(this.yaw),o=n||s?r*n-a*s:0,l=n||s?a*n+r*s:0;(n||s)&&(this.bobT+=t*9),e.aim=this.yaw;let c=e.mg&&e.mg.ammo>0;this.net.send({type:"input",mvx:o,mvy:l,aim:this.yaw,cover:!!this.keys.KeyC,jump:this._queuedJump||void 0,craft:this._queuedCraft||void 0,wall:this._queuedWall||void 0,decoy:this._queuedDecoy||void 0,throwCharge:this._queuedThrow!=null?this._queuedThrow:void 0,mg:!!(c&&this.mouse.down&&this.locked)}),this._queuedJump=this._queuedCraft=this._queuedWall=this._queuedDecoy=!1,this._queuedThrow=null,this._lastHp!=null&&e.hp<this._lastHp&&(this.audio.hit(),this.damageFlashUntil=performance.now()+250),this._lastHp=e.hp}_sync3d(t){let e=this.game,n=this.scene3;if(!n)return;let s=this.human||{x:e.zone.cx,y:e.zone.cy,z:40},r,a,o;if(this.ghost&&this.ghostPos)r=this.ghostPos.x,a=this.ghostPos.z,o=this.ghostPos.y;else{let f=Math.sin(this.bobT)*.8;r=s.x,a=Ur+f+(s.z||0),o=s.y}this.camera.position.set(r,a,o);let l=r+Math.cos(this.yaw)*Math.cos(this.pitch)*10,c=a+Math.sin(this.pitch)*10,u=o+Math.sin(this.yaw)*Math.cos(this.pitch)*10;this.camera.lookAt(l,c,u);for(let f of e.players){if(f.id===e._humanId)continue;let d=this.actors.get(f.id);if(!d)continue;d.visible=f.alive;let y=this._hpSprite(f);if(!f.alive){y&&(y.visible=!1);continue}d.position.set(f.x,f.z||0,f.y),d.rotation.y=-f.aim+Math.PI/2;let S=Math.sin(t/130+f.id)*.5,x=d.userData;if(x.legL&&(x.legL.rotation.x=S,x.legR.rotation.x=-S),f.crafting?(x.armL.rotation.x=-1.2,x.armR.rotation.x=-1.2):(x.armL.rotation.x=S*.5,x.armR.rotation.x=-S*.5),f.shieldHits>0&&!x.shield){let R=new mt(new Ne(kn*1.45,18,14),new Re({color:5087231,transparent:!0,opacity:.22,blending:jn,depthWrite:!1}));R.position.y=kn*1.25,d.add(R),x.shield=R}x.shield&&(x.shield.visible=f.shieldHits>0,f.shieldHits>0&&(x.shield.material.opacity=.16+Math.sin(t/180)*.07)),y&&(y.visible=!0,y.position.set(f.x,kn*2.75+(f.z||0),f.y),(y.userData.lastHp!==f.hp||y.userData.lastShield!==f.shieldHits)&&this._paintHpSprite(y,f))}for(let f of e.corpses){if(this.corpseSet.has(f.id))continue;this.corpseSet.add(f.id);let d=this.actors.get(f.id);d?this.actors.delete(f.id):(d=this._makeFigure(f.skin,!0),n.add(d)),d.visible=!0,d.position.set(f.x,2.4,f.y),d.rotation.set(-Math.PI/2,0,f.yaw+Math.PI/2);for(let y=0;y<4;y++){let S=new mt(new Ne(1.6+y%2,6,5),new Ht({color:16777215,roughness:1})),x=y/4*Math.PI*2+f.yaw;S.position.set(f.x+Math.cos(x)*9,1,f.y+Math.sin(x)*9),n.add(S)}}let h=new Set;for(let f of e.snowballs){h.add(f.id);let d=this.sbMeshes.get(f.id);if(!d){d=new Se;let T=new mt(new Ne(f.flat?2.4:3.4,12,10),new Ht({color:16777215,emissive:f.flat?16769162:12576511,emissiveIntensity:f.flat?1.3:.9,roughness:.4}));d.add(T);let A=[];for(let C=0;C<5;C++){let w=new mt(new Ne(2.4-C*.38,8,6),new Re({color:14676735,transparent:!0,opacity:.5-C*.09}));d.add(w),A.push(w)}d.userData.trail=A,d.userData.hist=[],n.add(d),this.sbMeshes.set(f.id,d)}let y=f.range>0?f.traveled/f.range:0,S=f.flat?0:Math.min(60,f.range*.16),x=Math.max(0,4*S*y*(1-y))+(f.flat?Ur-2:12);d.position.set(f.x,x,f.y);let R=d.userData.hist;R.unshift({x:f.x,y:x,z2:f.y}),R.length>6&&R.pop(),d.userData.trail.forEach((T,A)=>{let C=R[Math.min(A+1,R.length-1)];T.position.set(C.x-f.x,C.y-x,C.z2-f.y)})}for(let[f,d]of this.sbMeshes)h.has(f)||(this.scene3.remove(d),this.sbMeshes.delete(f));let p=new Set;for(let f of e.walls){p.add(f.id);let d=this.wallMeshes.get(f.id);d||(d=new mt(new de(F.wall.len,16,6),new Ht({color:15398139,roughness:.9})),d.position.set(f.x,8,f.y),d.rotation.y=-f.angle,this.scene3.add(d),this.wallMeshes.set(f.id,d)),d.material.color.setHex(f.hp>=3?15398139:f.hp===2?14280432:12899554)}for(let[f,d]of this.wallMeshes)p.has(f)||(this.scene3.remove(d),this.wallMeshes.delete(f));let m=new Set;for(let f of e.decoys)if(m.add(f.id),!this.decoyMeshes.has(f.id)){let d=new Se,y=new mt(new Ne(6,10,8),new Ht({color:16777215,roughness:.8}));y.position.y=6,d.add(y);let S=new mt(new Ne(4,10,8),new Ht({color:16777215,roughness:.8}));S.position.y=13.5,d.add(S);let x=new mt(new Bn(.9,3.4,6),new Ht({color:16739125}));x.rotation.x=Math.PI/2,x.position.set(0,13.5,4),d.add(x),d.position.set(f.x,0,f.y),this.scene3.add(d),this.decoyMeshes.set(f.id,d)}for(let[f,d]of this.decoyMeshes)m.has(f)||(this.scene3.remove(d),this.decoyMeshes.delete(f));for(let f of e.piles){let d=this.pileMeshes&&this.pileMeshes.get(f.id);d&&(d.material.color.setHex(f.cooldownUntil>e.t?12832214:16777215),d.position.set(f.x,0,f.y))}if(this.pickupMeshes)for(let f of e.pickups){let d=this.pickupMeshes.get(f.id);if(!d)continue;f.kind==="pill"&&f.buff&&d.userData.buffKind!==f.buff.kind&&(d=this._makePickupMesh(f));let y=f.takenUntil>e.t;d.visible=!y,y||(d.position.set(f.x,Math.sin(t/400+f.id)*1.6,f.y),d.rotation.y=t/800)}if(this.padMeshes)for(let[,f]of this.padMeshes){let d=f.userData.plate;d&&(d.position.y=17+Math.sin(t/260)*1.4)}let _=e.zone.radius;if(this.zoneWall.scale.set(_,1,_),this.zoneMat.opacity=.14+Math.sin(t/300)*.05,Math.abs(this._zoneRingR-_)>1&&(this.zoneRing.geometry.dispose(),this.zoneRing.geometry=new Fi(_,2.2,8,128),this._zoneRingR=_),this.zoneBeams){let f=t/9e3;this.zoneBeams.children.forEach((d,y)=>{let S=d.userData.angle+f;d.position.x=Math.cos(S)*_,d.position.z=Math.sin(S)*_,d.material.opacity=.4+Math.sin(t/160+y)*.2})}let g=this.snowPts.geometry.attributes.position;for(let f=0;f<g.count;f++){let d=g.getY(f)-.35;d<0&&(d=160),g.setY(f,d)}g.needsUpdate=!0}_loop(){let t=performance.now(),e=n=>{let s=(n-t)/1e3;t=n,s=Math.min(.05,s)*this.timeScale,this.game&&(this.sceneName==="play"||this.sceneName==="drop")&&this._update(s),this.game&&this.scene3&&(this.sceneName==="drop"?this._renderDrop(n):(this._sync3d(n),this.renderer.render(this.scene3,this.camera),this._renderFx(n)),this._renderHud()),requestAnimationFrame(e)};requestAnimationFrame(e)}_renderDrop(t){let e=this.game;if(this._sync3d(t),this.dropPlan)for(let f of e.players){if(f.id===e._humanId||!f.alive)continue;let d=this.dropPlan.get(f.id),y=this.actors.get(f.id);if(!d||!y)continue;if(!d.chute){let x=kn,R=new Se,T=new mt(new Ne(x*1.7,12,8,0,Math.PI*2,0,Math.PI/2),new Ht({color:[16739125,8377599,16766011,10477764][f.id%4],roughness:.85,side:ke}));T.position.y=x*4.4,R.add(T);let A=new Re({color:14540253});for(let[C,w]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let M=new mt(new Ie(.14,.14,x*2.2,3),A);M.position.set(C*x*.9,x*3.3,w*x*.9),M.rotation.z=-C*.32,M.rotation.x=w*.32,R.add(M)}y.add(R),d.chute=R}let S=(this.dropT-d.delay)/d.fallSec;if(S<1){let x=S<=0?620:620*(1-S)*(1-S),R=Math.sin(t/500+d.sway)*14*Math.max(0,1-S);y.position.y=x+.01,y.position.x=f.x+R,y.rotation.z=Math.sin(t/400+d.sway)*.18*Math.max(0,1-S),d.chute.visible=S>0;let T=this.hpSprites&&this.hpSprites.get(f.id);T&&(T.visible=!1)}else y.rotation.z=0,d.chute.visible=!1}let n=this.dropTarget?this.dropTarget.x:e.zone.cx,s=this.dropTarget?this.dropTarget.y:e.zone.cy,r=Math.min(1,this.dropT/8),a=r*r*(3-2*r),o=620*(1-a)+Ur,l=-Math.PI/2+a*1.1,c=420*(1-a)+8;this.camera.position.set(n+Math.cos(l)*c,o,s+Math.sin(l)*c);let u=8*(1-a)+Ur*a;this.camera.lookAt(n,u,s),this._dropLandYaw=l+Math.PI,this.renderer.render(this.scene3,this.camera);let h=this.fxCtx;h.clearRect(0,0,this.vw,this.vh);let p=Math.min(this.vh*.55,340),m=p/F.map.size,_=this.vw-p-24,g=(this.vh-p)/2;this._dropMap={ox:_,oy:g,zoom:m},h.fillStyle="rgba(13,27,42,0.72)",h.fillRect(_-8,g-26,p+16,p+40),h.strokeStyle="#7fd4ff",h.strokeRect(_-8,g-26,p+16,p+40),h.fillStyle="#fff",h.font="bold 13px system-ui",h.textAlign="center",h.fillText("\u{1F5FA} \uD074\uB9AD\uD574\uC11C \uB099\uD558 \uC9C0\uC810 \uC120\uD0DD",_+p/2,g-9),h.fillStyle="rgba(200,220,235,0.25)",h.fillRect(_,g,p,p),h.beginPath(),h.arc(e.zone.cx*m+_,e.zone.cy*m+g,e.zone.radius*m,0,Math.PI*2),h.strokeStyle="#7fd4ff",h.lineWidth=2,h.stroke();for(let f of e.piles)h.fillStyle="rgba(255,255,255,0.95)",h.fillRect(f.x*m+_-1,f.y*m+g-1,3,3);for(let f of e.pickups)h.fillStyle=f.kind==="heal"?"#ff6b6b":f.kind==="shield"?"#4d9fff":"#ffd43b",h.fillRect(f.x*m+_-1.5,f.y*m+g-1.5,3.5,3.5);if(this.dropTarget){let f=this.dropTarget.x*m+_,d=this.dropTarget.y*m+g;h.strokeStyle="#FF6B35",h.lineWidth=3,h.beginPath(),h.arc(f,d,11,0,Math.PI*2),h.stroke(),h.beginPath(),h.moveTo(f-16,d),h.lineTo(f+16,d),h.moveTo(f,d-16),h.lineTo(f,d+16),h.stroke()}}_renderFx(t){let e=this.fxCtx;if(e.clearRect(0,0,this.vw,this.vh),this.sceneName!=="play"||!this.human)return;if(this.ghost){e.fillStyle="rgba(13,27,42,0.75)",e.fillRect(this.vw/2-190,14,380,34),e.fillStyle="#A8D8EA",e.font="bold 14px system-ui",e.textAlign="center",e.fillText(`\u{1F47B} \uAD00\uC804 \uC911 \xB7 \uC0DD\uC874 ${this._lastSurvivors??""}${this.online?"":" \xB7 Enter=\uACB0\uACFC"}`,this.vw/2,36);return}let n=this.human,s=this.game;if(Math.hypot(n.x-s.zone.cx,n.y-s.zone.cy)>s.zone.radius&&(e.fillStyle="rgba(90,140,200,0.25)",e.fillRect(0,0,this.vw,this.vh)),t<this.damageFlashUntil){let o=e.createRadialGradient(this.vw/2,this.vh/2,this.vh*.35,this.vw/2,this.vh/2,this.vh*.75);o.addColorStop(0,"rgba(220,20,60,0)"),o.addColorStop(1,"rgba(220,20,60,0.5)"),e.fillStyle=o,e.fillRect(0,0,this.vw,this.vh)}if(n.shieldHits>0||t<(this.shieldFlashUntil||0)){let l=t<(this.shieldFlashUntil||0)?.45:.14+Math.sin(t/300)*.04,c=e.createRadialGradient(this.vw/2,this.vh/2,this.vh*.38,this.vw/2,this.vh/2,this.vh*.72);c.addColorStop(0,"rgba(77,159,255,0)"),c.addColorStop(1,`rgba(77,159,255,${l})`),e.fillStyle=c,e.fillRect(0,0,this.vw,this.vh)}if(this._renderViewModel(e,t),this._renderCrosshair(e,t),!this.locked&&n.alive){e.fillStyle="rgba(13,27,42,0.75)";let o=420,l=54;e.fillRect(this.vw/2-o/2,this.vh*.62,o,l),e.strokeStyle="#FF6B35",e.strokeRect(this.vw/2-o/2,this.vh*.62,o,l),e.fillStyle="#fff",e.font="bold 16px system-ui",e.textAlign="center",e.fillText("\u{1F5B1} \uD654\uBA74\uC744 \uD074\uB9AD\uD574 \uC870\uC900 \uC7A0\uAE08 (\uB9C8\uC6B0\uC2A4\uB85C \uC2DC\uC810 \uD68C\uC804)",this.vw/2,this.vh*.62+33)}Rr(s,n)&&!n.crafting&&n.alive&&(e.fillStyle="#FF6B35",e.font="bold 17px system-ui",e.textAlign="center",e.fillText("E \u2014 \uB208\uBB49\uCE58 \uC81C\uC791 (3\uCD08 \uBB34\uBC29\uBE44)",this.vw/2,this.vh*.56))}_renderViewModel(t,e){let n=this.human;if(!n.alive)return;let s=this.vw/2,r=this.vh,a=Math.sin(this.bobT)*5,o=this.viewKick||0,l=this.mouse.down?Hi(performance.now()-this.mouse.downAt):0,c=l*26+o*-34,u=s+this.vw*.21,h=r-64+a+c*.6;if(t.fillStyle="#1B2A4A",t.beginPath(),t.moveTo(u+90,r+10),t.quadraticCurveTo(u+40,h+40,u,h+8),t.lineTo(u+34,h-14),t.quadraticCurveTo(u+90,h+20,u+130,r+10),t.closePath(),t.fill(),t.fillStyle="#FF6B35",t.beginPath(),t.ellipse(u+16,h+2,20,12,-.5,0,Math.PI*2),t.fill(),t.fillStyle="#2c3e63",t.beginPath(),t.ellipse(u,h-6,24,19,-.35,0,Math.PI*2),t.fill(),n.snowballs>0&&!n.crafting&&(t.fillStyle="#ffffff",t.strokeStyle="#bcd7e8",t.beginPath(),t.arc(u-6,h-18,15+l*3,0,Math.PI*2),t.fill(),t.stroke()),n.crafting){let p=1-n.craftTimer/F.craft.seconds,m=Math.sin(e/90)*6;t.fillStyle="#2c3e63",t.beginPath(),t.ellipse(s-46+m,r-58,26,20,.4,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(s+46-m,r-58,26,20,-.4,0,Math.PI*2),t.fill(),t.fillStyle="#fff",t.strokeStyle="#bcd7e8",t.beginPath(),t.arc(s,r-66,17+p*6,0,Math.PI*2),t.fill(),t.stroke()}}_renderCrosshair(t,e){let n=this.vw/2,s=this.vh/2,r=this.human;t.strokeStyle="rgba(255,255,255,0.95)",t.lineWidth=2;let a=5+(this.mouse.down?Hi(performance.now()-this.mouse.downAt)*8:0),o=8;if(t.beginPath(),t.moveTo(n-a-o,s),t.lineTo(n-a,s),t.moveTo(n+a,s),t.lineTo(n+a+o,s),t.moveTo(n,s-a-o),t.lineTo(n,s-a),t.moveTo(n,s+a),t.lineTo(n,s+a+o),t.stroke(),t.fillStyle="rgba(255,255,255,0.95)",t.fillRect(n-1,s-1,2,2),this.mouse.down&&r.alive&&!r.crafting){let l=Hi(performance.now()-this.mouse.downAt),c=90;t.fillStyle="rgba(0,0,0,0.45)",t.fillRect(n-c/2,s+26,c,7),t.fillStyle=l>.85?"#DC143C":"#FF6B35",t.fillRect(n-c/2,s+26,c*l,7),t.fillStyle="#fff",t.font="11px system-ui",t.textAlign="center",t.fillText(`${Math.round(jc(l)/10)}m`,n,s+47)}if(r.crafting){let l=1-r.craftTimer/F.craft.seconds,c=l<.5?"#ffffff":l<.85?"#FF6B35":"#DC143C";t.strokeStyle=c,t.lineWidth=5,t.beginPath(),t.arc(n,s,34,-Math.PI/2,-Math.PI/2+l*Math.PI*2),t.stroke(),t.fillStyle=c,t.font="bold 20px system-ui",t.textAlign="center",t.fillText(String(Math.ceil(r.craftTimer)),n,s+7),t.font="bold 13px system-ui",t.fillText("\uC81C\uC791 \uC911 \u2014 \uBB34\uBC29\uBE44!",n,s+62)}if(e<this.hitMarkerUntil){t.strokeStyle="rgba(255,80,60,0.95)",t.lineWidth=3;let l=7,c=8;t.beginPath(),t.moveTo(n-l-c,s-l-c),t.lineTo(n-l,s-l),t.moveTo(n+l,s-l),t.lineTo(n+l+c,s-l-c),t.moveTo(n-l-c,s+l+c),t.lineTo(n-l,s+l),t.moveTo(n+l,s+l),t.lineTo(n+l+c,s+l+c),t.stroke()}}_renderHud(){if(this.sceneName!=="play"&&this.sceneName!=="drop"){this.hud.style.display="none";return}this.hud.style.display="block";let t=this.game,e=this.human;if(!t||!e)return;let n=this.online?this._lastSurvivors||t.players.length:ki(t),s=il(n),r=Math.max(0,Math.ceil(t.zone.nextShrink-t.t));this.hud.textContent="";let a=qt("div","sr-hud-top");a.appendChild(qt("div","sr-hud-surv",`\uC0DD\uC874 ${n}`)),a.appendChild(qt("div","sr-hud-act",s.title)),a.appendChild(qt("div","sr-hud-zone",`\u26C8 ${r}s`)),this.hud.appendChild(a);let o=qt("div","sr-hud-bl"),l=qt("div","sr-hp"),c=e.maxHp||100,u=qt("div","sr-hp-fill");if(u.style.width=Math.max(0,e.hp/c*100)+"%",u.style.background=e.hp>c*.5?"#7FFFD4":e.hp>c*.25?"#FF6B35":"#DC143C",l.appendChild(u),l.appendChild(qt("span","sr-hp-txt",`${Math.max(0,Math.round(e.hp))}/${c}`)),o.appendChild(l),e.shieldHits>0&&o.appendChild(qt("div","sr-shield",`\u{1F6E1} \uBC29\uD328 \uB0B4\uAD6C\uB3C4 ${e.shieldHits}/${F.items.shieldHits} \u2014 \uD53C\uACA9 \uC644\uC804 \uBC29\uC5B4`)),e.mg&&e.mg.until>t.t&&e.mg.ammo>0&&o.appendChild(qt("div","sr-buff sr-buff-mg",`\u{1F525} \uB208 \uAE30\uAD00\uCD1D ${e.mg.ammo}\uBC1C \xB7 ${Math.ceil(e.mg.until-t.t)}\uCD08`)),e.buff&&e.buff.until>t.t){let _=e.buff.kind==="speed"?"\u{1F4A8} \uC774\uB3D9\uC18D\uB3C4 \uC99D\uAC00":e.buff.kind==="power"?"\u{1F4AA} \uACF5\uACA9\uB825 \uC99D\uAC00":"\u2692 \uC81C\uC791\uC18D\uB3C4 \uC99D\uAC00";o.appendChild(qt("div","sr-buff",`${_} ${Math.ceil(e.buff.until-t.t)}\uCD08`))}let h=zn[e.classId];h&&o.appendChild(qt("div","sr-class-tag",h.name)),this.sceneName==="drop"&&o.appendChild(qt("div","sr-drop",`\uB099\uD558 \uC911 \u2014 \uCC29\uC9C0 ${Math.max(0,Math.ceil(8-this.dropT))}s (\uC9C0\uB3C4 \uD074\uB9AD=\uB099\uD558 \uC9C0\uC810)`)),this.hud.appendChild(o);let p=qt("div","sr-hud-br");p.appendChild(qt("div","sr-ammo-big",`${e.snowballs}`)),p.appendChild(qt("div","sr-ammo-cap","\u2744 SNOWBALLS")),p.appendChild(qt("div","sr-tac",`Q \uC124\uBCBD ${e.walls}/${F.wall.maxPerPlayer} \xB7 F \uBBF8\uB07C ${e.decoys}/${F.decoy.maxPerPlayer}`)),this.hud.appendChild(p);let m=performance.now();if(this.killFeed=this.killFeed.filter(_=>_.until>m),this.killFeed.length){let _=qt("div","sr-killfeed");for(let g of this.killFeed)_.appendChild(qt("div","sr-kf-row",g.text));this.hud.appendChild(_)}this._showMinimap&&this.sceneName==="play"&&this.hud.appendChild(this._minimapEl()),this._toastText&&performance.now()<this._toastUntil&&this.hud.appendChild(qt("div","sr-toast",this._toastText))}_minimapEl(){let t=this.game,e=qt("div","sr-minimap"),n=document.createElement("canvas");n.width=170,n.height=170,e.appendChild(n);let s=n.getContext("2d"),r=170/F.map.size;s.fillStyle="rgba(13,27,42,0.88)",s.fillRect(0,0,170,170),s.strokeStyle="#7fd4ff",s.lineWidth=1.5,s.beginPath(),s.arc(t.zone.cx*r,t.zone.cy*r,t.zone.radius*r,0,Math.PI*2),s.stroke();for(let o of t.obstacles)s.fillStyle="rgba(120,140,160,0.6)",s.fillRect(o.x*r-1,o.y*r-1,3,3);for(let o of t.piles)o.cooldownUntil<=t.t&&(s.fillStyle="#A8D8EA",s.fillRect(o.x*r-1,o.y*r-1,3,3));for(let o of t.players)o.alive&&(s.fillStyle=o.id===t._humanId?"#FF6B35":"#9E9E9E",s.beginPath(),s.arc(o.x*r,o.y*r,o.id===t._humanId?3.4:2,0,Math.PI*2),s.fill());let a=this.human;return s.strokeStyle="rgba(255,107,53,0.8)",s.beginPath(),s.moveTo(a.x*r,a.y*r),s.lineTo(a.x*r+Math.cos(this.yaw)*14,a.y*r+Math.sin(this.yaw)*14),s.stroke(),e}_toast(t,e=3200){this._toastText=t,this._toastUntil=performance.now()+e}_btn(t,e,n){let s=document.createElement("button");return s.className="sr-btn"+(n?" primary":""),s.textContent=t,s.addEventListener("click",()=>{this.audio.resume(),e()}),s}_stat(t,e){let n=qt("div","sr-stat");return n.appendChild(qt("div","sr-stat-v",String(e))),n.appendChild(qt("div","sr-stat-l",t)),n}async __drive(t){if(t==="title"){this._showTitle();return}if(this.newGame(42),t!=="drop"){if(t==="play"||t==="fps"){this._enterPlay(),this.human.snowballs=10;let e=this.human;this.yaw=0,this.pitch=0;let n=this.game.players.filter(r=>r.isNpc).slice(0,4),s=[80,150,260,420];n.forEach((r,a)=>{r.x=e.x+s[a],r.y=e.y+(a-1.5)*55,r.aim=Math.PI+Math.atan2(r.y-e.y,r.x-e.x)}),this.game.piles.push({id:90001,x:e.x+44,y:e.y+12,cooldownUntil:0}),this.game.pickups.push({id:90002,kind:"heal",x:e.x+70,y:e.y-40,takenUntil:0}),this.game.pickups.push({id:90003,kind:"shield",x:e.x+110,y:e.y+60,takenUntil:0}),this.game.pickups.push({id:90004,kind:"pill",x:e.x+60,y:e.y+18,takenUntil:0}),this._buildWorld(),n.forEach(r=>{r.hp=40+r.id*13%55});return}if(t==="corpse"){this._enterPlay(),this.yaw=0;let e=this.human;this.game.players.filter(s=>s.isNpc).slice(0,3).forEach((s,r)=>{s.x=e.x+90+r*60,s.y=e.y+(r-1)*45,vn(this.game,s,0)});return}if(t==="throw"){this._enterPlay(),this.yaw=0,this.human.snowballs=10,this.locked=!0,this._throw(600),this._throw(1200);return}if(t==="result"||t==="win"){if(this._enterPlay(),t==="win")for(let e of this.game.players)e.id!==this.game._humanId&&vn(this.game,e,0);else vn(this.game,this.human,0);this._showResult();return}}}__validate(){let t={checks:[],errors:[]},e=(n,s,r="")=>t.checks.push({name:n,pass:!!s,detail:r});try{let n=ps(42,{total:20,difficulty:"normal"});e("20\uC778 \uC0DD\uC131(\uD50C\uB808\uC774\uC5B41+NPC19)",n.players.length===20&&n.players.filter(c=>c.isNpc).length===19),e("\uC7A5\uC560\uBB3C \uC0DD\uC131(\uBC14\uC704/\uB098\uBB34/\uC624\uB450\uB9C9)",n.obstacles.length>=30,`${n.obstacles.length}`);let s=Mn(n);n.piles.push({id:1,x:s.x,y:s.y,cooldownUntil:0}),Ir(n,s),ms(n,3.01),e("3\uCD08 \uC81C\uC791 +10",s.snowballs===10,String(s.snowballs));let r=n.players[2];vn(n,r,0),e("\uD0C8\uB77D \uC2DC \uC2DC\uCCB4 \uC0DD\uC131",n.corpses.length===1&&n.corpses[0].id===r.id),this.game=n,this.human=s,this._buildWorld(),e("3D \uC6D4\uB4DC \uC0DD\uC131(THREE scene)",!!this.scene3&&this.scene3.children.length>30,`children=${this.scene3.children.length}`),e("NPC 3D \uD53C\uADDC\uC5B4 \uC0DD\uC131",this.actors.size===19,`${this.actors.size}`),e("WebGL \uB80C\uB354\uB7EC",!!this.renderer&&!!this.renderer.getContext());let a=0;for(;!n.over&&a++<12e3;){let c=Mn(n);if(c.alive){c.npc||(c.npc={state:"PATROL",reactTimer:0});let u=c.isNpc;c.isNpc=!0,ul(n,c,.1),c.isNpc=u}ms(n,.1)}e("\uB9E4\uCE58 \uC644\uC8FC(\uC2B9\uC790 1\uC778)",n.over&&ki(n)===1,`t=${n.t.toFixed(0)}s`),e("\uC2DC\uCCB4 \uB2E4\uC218 \uB204\uC801(\uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uC74C)",n.corpses.length>=18,`corpses=${n.corpses.length}`);let o=ps(7,{total:20,difficulty:"normal",classId:"bear"});e("\uC544\uC774\uD15C \uC2A4\uD3F0(\uD790\uD329+\uBC29\uD328)",o.pickups.filter(c=>c.kind==="heal").length===10&&o.pickups.filter(c=>c.kind==="shield").length===6,`${o.pickups.length}`);let l=Mn(o);e("\uD074\uB798\uC2A4 \uC801\uC6A9(\uBE45 \uBCA0\uC5B4 HP 130)",l.maxHp===130&&l.hp===130,`${l.hp}/${l.maxHp}`),vn(o,l,50),o.pickups[0].x=l.x,o.pickups[0].y=l.y,o.pickups[0].kind="heal",o.pickups[0].takenUntil=0,e("\uD790\uD329 +40",Ar(o,l)==="heal"&&l.hp===90,`${l.hp}`),this.game=o,this.human=l,this._buildWorld();for(let c of o.players)c.isNpc&&c.alive&&this._hpSprite(c);e("\uC801 HP \uAC8C\uC774\uC9C0 \uC2A4\uD504\uB77C\uC774\uD2B8 19\uAC1C",this.hpSprites.size===19,`${this.hpSprites.size}`),e("\uC544\uC774\uD15C 3D \uBA54\uC2DC \uC0DD\uC131",this.pickupMeshes&&this.pickupMeshes.size===o.pickups.length,`${this.pickupMeshes?this.pickupMeshes.size:0}`)}catch(n){t.errors.push(String(n&&n.message||n))}return t.pass=t.checks.every(n=>n.pass)&&t.errors.length===0,t}};function qt(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.textContent=e),n}var gs=new URLSearchParams(location.search),Dg=gs.has("seed")?parseInt(gs.get("seed"),10):null,Ug=gs.get("fast")?parseFloat(gs.get("fast")):1,fl=gs.get("screen"),rh=new Nr(document.getElementById("game"),{seed:Dg,timeScale:Ug,autoStart:!fl});window.__SR=rh;fl&&rh.__drive(fl);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
