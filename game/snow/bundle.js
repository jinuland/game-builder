"use strict";(()=>{var xh=0,Al=1,vh=2;var Dc=1,Mh=2,mn=3,kn=0,De=1,Ie=2,Nn=0,Ri=1,vn=2,Cl=3,Rl=4,Sh=5,jn=100,bh=101,wh=102,Eh=103,Th=104,Ah=200,Ch=201,Rh=202,Ih=203,Ea=204,Ta=205,Ph=206,Lh=207,Dh=208,Uh=209,Nh=210,Fh=211,Oh=212,kh=213,Bh=214,Aa=0,Ca=1,Ra=2,Di=3,Ia=4,Pa=5,La=6,Da=7,Uc=0,zh=1,Hh=2,Fn=0,Vh=1,Gh=2,Wh=3,Xh=4,qh=5,Yh=6,$h=7;var Nc=300,Ui=301,Ni=302,Ua=303,Na=304,Rr=306,Fa=1e3,ti=1001,Oa=1002,Ke=1003,Zh=1004;var Ts=1005;var nn=1006,Wr=1007;var ei=1008;var Mn=1009,Fc=1010,Oc=1011,as=1012,jo=1013,ni=1014,_n=1015,vs=1016,Qo=1017,tl=1018,Fi=1020,kc=35902,Bc=1021,zc=1022,Je=1023,Hc=1024,Vc=1025,Ii=1026,Oi=1027,Gc=1028,el=1029,Wc=1030,nl=1031;var il=1033,tr=33776,er=33777,nr=33778,ir=33779,ka=35840,Ba=35841,za=35842,Ha=35843,Va=36196,Ga=37492,Wa=37496,Xa=37808,qa=37809,Ya=37810,$a=37811,Za=37812,Ja=37813,Ka=37814,ja=37815,Qa=37816,to=37817,eo=37818,no=37819,io=37820,so=37821,sr=36492,ro=36494,ao=36495,Xc=36283,oo=36284,lo=36285,co=36286;var rr=2300,ho=2301,Xr=2302,Il=2400,Pl=2401,Ll=2402;var Jh=3200,Kh=3201;var qc=0,jh=1,Dn="",Ve="srgb",Vi="srgb-linear",Ir="linear",Kt="srgb";var hi=7680;var Dl=519,Qh=512,tu=513,eu=514,Yc=515,nu=516,iu=517,su=518,ru=519,uo=35044;var Ul="300 es",yn=2e3,ar=2001,Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qr=Math.PI/180,fo=180/Math.PI;function On(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function au(i,t){return(i%t+t)%t}function Yr(i,t,e){return(1-e)*i+e*t}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ot=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],_=n[8],y=s[0],m=s[3],d=s[6],x=s[1],v=s[4],g=s[7],T=s[2],E=s[5],C=s[8];return r[0]=a*y+o*x+l*T,r[3]=a*m+o*v+l*E,r[6]=a*d+o*g+l*C,r[1]=c*y+u*x+h*T,r[4]=c*m+u*v+h*E,r[7]=c*d+u*g+h*C,r[2]=f*y+p*x+_*T,r[5]=f*m+p*v+_*E,r[8]=f*d+p*g+_*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,_=e*h+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=h*y,t[1]=(s*c-u*n)*y,t[2]=(o*n-s*a)*y,t[3]=f*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($r.makeScale(t,e)),this}rotate(t){return this.premultiply($r.makeRotation(-t)),this}translate(t,e){return this.premultiply($r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$r=new Dt;function $c(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ou(){let i=or("canvas");return i.style.display="block",i}var Nl={};function es(i){i in Nl||(Nl[i]=!0,console.warn(i))}function lu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function cu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Wt={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Kt&&(i.r=xn(i.r),i.g=xn(i.g),i.b=xn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Kt&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dn?Ir:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fl=[.64,.33,.3,.6,.15,.06],Ol=[.2126,.7152,.0722],kl=[.3127,.329],Bl=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zl=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Vi]:{primaries:Fl,whitePoint:kl,transfer:Ir,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:Ol,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:Fl,whitePoint:kl,transfer:Kt,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:Ol,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});var ui,po=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ui===void 0&&(ui=or("canvas")),ui.width=t.width,ui.height=t.height;let n=ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xn(e[n]/255)*255):e[n]=xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},uu=0,lr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=On(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zr(s[a].image)):r.push(Zr(s[a]))}else r=Zr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?po.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var du=0,Oe=class i extends Bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ti,s=ti,r=nn,a=ei,o=Je,l=Mn,c=i.DEFAULT_ANISOTROPY,u=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=On(),this.name="",this.source=new lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fa:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fa:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Nc;Oe.DEFAULT_ANISOTROPY=1;var ce=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,g=(p+1)/2,T=(d+1)/2,E=(u+f)/4,C=(h+y)/4,R=(_+m)/4;return v>g&&v>T?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=C/n):g>T?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=E/s,r=R/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=R/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-_)*(m-_)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(h-y)/x,this.z=(f-u)/x,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mo=class extends Bn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new lr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends mo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},cr=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var go=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],_=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=y;return}if(h!==y||l!==f||c!==p||u!==_){let m=1-o,d=l*f+c*p+u*_+h*y,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let T=Math.sqrt(v),E=Math.atan2(T,d*x);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T}let g=o*x;if(l=l*m+f*g,c=c*m+p*g,u=u*m+_*g,h=h*m+y*g,m===1-o){let T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+u*h+l*p-c*f,t[e+1]=l*_+u*f+c*h-o*p,t[e+2]=c*_+u*p+o*f-l*h,t[e+3]=u*_-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jr.copy(this).projectOnVector(t),this.sub(Jr)}reflect(t){return this.sub(Jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jr=new L,Hl=new zn,ii=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(r,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),As.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(t.matrixWorld),this.union(As)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($i),Cs.subVectors(this.max,$i),di.subVectors(t.a,$i),fi.subVectors(t.b,$i),pi.subVectors(t.c,$i),An.subVectors(fi,di),Cn.subVectors(pi,fi),Xn.subVectors(di,pi);let e=[0,-An.z,An.y,0,-Cn.z,Cn.y,0,-Xn.z,Xn.y,An.z,0,-An.x,Cn.z,0,-Cn.x,Xn.z,0,-Xn.x,-An.y,An.x,0,-Cn.y,Cn.x,0,-Xn.y,Xn.x,0];return!Kr(e,di,fi,pi,Cs)||(e=[1,0,0,0,1,0,0,0,1],!Kr(e,di,fi,pi,Cs))?!1:(Rs.crossVectors(An,Cn),e=[Rs.x,Rs.y,Rs.z],Kr(e,di,fi,pi,Cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},hn=[new L,new L,new L,new L,new L,new L,new L,new L],Ye=new L,As=new ii,di=new L,fi=new L,pi=new L,An=new L,Cn=new L,Xn=new L,$i=new L,Cs=new L,Rs=new L,qn=new L;function Kr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qn.fromArray(i,r);let o=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),l=t.dot(qn),c=e.dot(qn),u=n.dot(qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var fu=new ii,Zi=new L,jr=new L,ki=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):fu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);let e=Zi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(jr)),this.expandByPoint(Zi.copy(t.center).sub(jr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},un=new L,Qr=new L,Is=new L,Rn=new L,ta=new L,Ps=new L,ea=new L,hr=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qr.copy(t).add(e).multiplyScalar(.5),Is.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(Qr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Is),o=Rn.dot(this.direction),l=-Rn.dot(Is),c=Rn.lengthSq(),u=Math.abs(1-a*a),h,f,p,_;if(u>0)if(h=a*l-o,f=a*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){let y=1/u;h*=y,f*=y,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Qr).addScaledVector(Is,f),p}intersectSphere(t,e){un.subVectors(t.center,this.origin);let n=un.dot(this.direction),s=un.dot(un)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,s,r){ta.subVectors(e,t),Ps.subVectors(n,t),ea.crossVectors(ta,Ps);let a=this.direction.dot(ea),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,t);let l=o*this.direction.dot(Ps.crossVectors(Rn,Ps));if(l<0)return null;let c=o*this.direction.dot(ta.cross(Rn));if(c<0||l+c>a)return null;let u=-o*Rn.dot(ea);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class i{constructor(t,e,n,s,r,a,o,l,c,u,h,f,p,_,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,f,p,_,y,m)}set(t,e,n,s,r,a,o,l,c,u,h,f,p,_,y,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/mi.setFromMatrixColumn(t,0).length(),r=1/mi.setFromMatrixColumn(t,1).length(),a=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=a*u,p=a*h,_=o*u,y=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+_*c,e[5]=f-y*c,e[9]=-o*l,e[2]=y-f*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*u,p=l*h,_=c*u,y=c*h;e[0]=f+y*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=y+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*u,p=l*h,_=c*u,y=c*h;e[0]=f-y*o,e[4]=-a*h,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=y-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*u,p=a*h,_=o*u,y=o*h;e[0]=l*u,e[4]=_*c-p,e[8]=f*c+y,e[1]=l*h,e[5]=y*c+f,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,_=o*l,y=o*c;e[0]=l*u,e[4]=y-f*h,e[8]=_*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+_,e[10]=f-y*h}else if(t.order==="XZY"){let f=a*l,p=a*c,_=o*l,y=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+y,e[5]=a*u,e[9]=p*h-_,e[2]=_*h-p,e[6]=o*u,e[10]=y*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pu,t,mu)}lookAt(t,e,n){let s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),In.crossVectors(n,Ne),In.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),In.crossVectors(n,Ne)),In.normalize(),Ls.crossVectors(Ne,In),s[0]=In.x,s[4]=Ls.x,s[8]=Ne.x,s[1]=In.y,s[5]=Ls.y,s[9]=Ne.y,s[2]=In.z,s[6]=Ls.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],_=n[2],y=n[6],m=n[10],d=n[14],x=n[3],v=n[7],g=n[11],T=n[15],E=s[0],C=s[4],R=s[8],S=s[12],M=s[1],I=s[5],B=s[9],k=s[13],G=s[2],J=s[6],X=s[10],j=s[14],V=s[3],nt=s[7],dt=s[11],St=s[15];return r[0]=a*E+o*M+l*G+c*V,r[4]=a*C+o*I+l*J+c*nt,r[8]=a*R+o*B+l*X+c*dt,r[12]=a*S+o*k+l*j+c*St,r[1]=u*E+h*M+f*G+p*V,r[5]=u*C+h*I+f*J+p*nt,r[9]=u*R+h*B+f*X+p*dt,r[13]=u*S+h*k+f*j+p*St,r[2]=_*E+y*M+m*G+d*V,r[6]=_*C+y*I+m*J+d*nt,r[10]=_*R+y*B+m*X+d*dt,r[14]=_*S+y*k+m*j+d*St,r[3]=x*E+v*M+g*G+T*V,r[7]=x*C+v*I+g*J+T*nt,r[11]=x*R+v*B+g*X+T*dt,r[15]=x*S+v*k+g*j+T*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],_=t[3],y=t[7],m=t[11],d=t[15];return _*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*p-n*l*p)+y*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+e*c*h-e*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-s*o*u-e*l*h+e*o*f+s*a*h-n*a*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],_=t[12],y=t[13],m=t[14],d=t[15],x=h*m*c-y*f*c+y*l*p-o*m*p-h*l*d+o*f*d,v=_*f*c-u*m*c-_*l*p+a*m*p+u*l*d-a*f*d,g=u*y*c-_*h*c+_*o*p-a*y*p-u*o*d+a*h*d,T=_*h*l-u*y*l-_*o*f+a*y*f+u*o*m-a*h*m,E=e*x+n*v+s*g+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/E;return t[0]=x*C,t[1]=(y*f*r-h*m*r-y*s*p+n*m*p+h*s*d-n*f*d)*C,t[2]=(o*m*r-y*l*r+y*s*c-n*m*c-o*s*d+n*l*d)*C,t[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*p-n*l*p)*C,t[4]=v*C,t[5]=(u*m*r-_*f*r+_*s*p-e*m*p-u*s*d+e*f*d)*C,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*d-e*l*d)*C,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*p+e*l*p)*C,t[8]=g*C,t[9]=(_*h*r-u*y*r-_*n*p+e*y*p+u*n*d-e*h*d)*C,t[10]=(a*y*r-_*o*r+_*n*c-e*y*c-a*n*d+e*o*d)*C,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*p-e*o*p)*C,t[12]=T*C,t[13]=(u*y*s-_*h*s+_*n*f-e*y*f-u*n*m+e*h*m)*C,t[14]=(_*o*s-a*y*s-_*n*l+e*y*l+a*n*m-e*o*m)*C,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*f+e*o*f)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,_=r*h,y=a*u,m=a*h,d=o*h,x=l*c,v=l*u,g=l*h,T=n.x,E=n.y,C=n.z;return s[0]=(1-(y+d))*T,s[1]=(p+g)*T,s[2]=(_-v)*T,s[3]=0,s[4]=(p-g)*E,s[5]=(1-(f+d))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(_+v)*C,s[9]=(m-x)*C,s[10]=(1-(f+y))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=mi.set(s[0],s[1],s[2]).length(),a=mi.set(s[4],s[5],s[6]).length(),o=mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$e.copy(this);let c=1/r,u=1/a,h=1/o;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=u,$e.elements[5]*=u,$e.elements[6]*=u,$e.elements[8]*=h,$e.elements[9]*=h,$e.elements[10]*=h,e.setFromRotationMatrix($e),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=yn){let l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),p,_;if(o===yn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ar)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=yn){let l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),f=(e+t)*c,p=(n+s)*u,_,y;if(o===yn)_=(a+r)*h,y=-2*h;else if(o===ar)_=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},mi=new L,$e=new ae,pu=new L(0,0,0),mu=new L(1,1,1),In=new L,Ls=new L,Ne=new L,Vl=new ae,Gl=new zn,sn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gu=0,Wl=new L,gi=new zn,dn=new ae,Ds=new L,Ji=new L,_u=new L,yu=new zn,Xl=new L(1,0,0),ql=new L(0,1,0),Yl=new L(0,0,1),$l={type:"added"},xu={type:"removed"},_i={type:"childadded",child:null},na={type:"childremoved",child:null},be=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new sn,n=new zn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Dt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(Xl,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis(Yl,t)}translateOnAxis(t,e){return Wl.copy(t).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xl,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis(Yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ds.copy(t):Ds.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Ji,Ds,this.up):dn.lookAt(Ds,Ji,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),gi.setFromRotationMatrix(dn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($l),_i.child=t,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xu),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($l),_i.child=t,this.dispatchEvent(_i),_i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,_u),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};be.DEFAULT_UP=new L(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=new L,fn=new L,ia=new L,pn=new L,yi=new L,xi=new L,Zl=new L,sa=new L,ra=new L,aa=new L,oa=new ce,la=new ce,ca=new ce,Un=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ze.subVectors(t,e),s.cross(Ze);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ze.subVectors(s,e),fn.subVectors(n,e),ia.subVectors(t,e);let a=Ze.dot(Ze),o=Ze.dot(fn),l=Ze.dot(ia),c=fn.dot(fn),u=fn.dot(ia),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(o,pn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return oa.setScalar(0),la.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(t,e),la.fromBufferAttribute(t,n),ca.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(oa,r.x),a.addScaledVector(la,r.y),a.addScaledVector(ca,r.z),a}static isFrontFacing(t,e,n,s){return Ze.subVectors(n,e),fn.subVectors(t,e),Ze.cross(fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ze.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;yi.subVectors(s,n),xi.subVectors(r,n),sa.subVectors(t,n);let l=yi.dot(sa),c=xi.dot(sa);if(l<=0&&c<=0)return e.copy(n);ra.subVectors(t,s);let u=yi.dot(ra),h=xi.dot(ra);if(u>=0&&h<=u)return e.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(yi,a);aa.subVectors(t,r);let p=yi.dot(aa),_=xi.dot(aa);if(_>=0&&p<=_)return e.copy(r);let y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(xi,o);let m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Zl.subVectors(r,s),o=(h-u)/(h-u+(p-_)),e.copy(s).addScaledVector(Zl,o);let d=1/(m+y+f);return a=y*d,o=f*d,e.copy(n).addScaledVector(yi,a).addScaledVector(xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=au(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ha(a,r,t+1/3),this.g=ha(a,r,t),this.b=ha(a,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let n=Zc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}copyLinearToSRGB(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return Wt.fromWorkingColorSpace(Te.copy(this),t),Math.round(Me(Te.r*255,0,255))*65536+Math.round(Me(Te.g*255,0,255))*256+Math.round(Me(Te.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Te.copy(this),e);let n=Te.r,s=Te.g,r=Te.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Ve){Wt.fromWorkingColorSpace(Te.copy(this),t);let e=Te.r,n=Te.g,s=Te.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(Us);let n=Yr(Pn.h,Us.h,e),s=Yr(Pn.s,Us.s,e),r=Yr(Pn.l,Us.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Te=new Ft;Ft.NAMES=Zc;var vu=0,bn=class extends Bn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=On(),this.name="",this.blending=Ri,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=Ta,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ea&&(n.blendSrc=this.blendSrc),this.blendDst!==Ta&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},he=class extends bn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new L,Ns=new ot,Se=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uo,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=en(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=en(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=en(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=en(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=en(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uo&&(t.usage=this.usage),t}};var dr=class extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fr=class extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}},Mu=0,He=new ae,ua=new be,vi=new L,Fe=new ii,Ki=new ii,_e=new L,fe=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($c(t)?fr:dr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return ua.lookAt(t),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Fe.min,Ki.min),Fe.expandByPoint(_e),_e.addVectors(Fe.max,Ki.max),Fe.expandByPoint(_e)):(Fe.expandByPoint(Ki.min),Fe.expandByPoint(Ki.max))}Fe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_e.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(t,c),_e.add(vi)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new L,l[R]=new L;let c=new L,u=new L,h=new L,f=new ot,p=new ot,_=new ot,y=new L,m=new L;function d(R,S,M){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,M),u.sub(c),h.sub(c),p.sub(f),_.sub(f);let I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(I),o[R].add(y),o[S].add(y),o[M].add(y),l[R].add(m),l[S].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,S=x.length;R<S;++R){let M=x[R],I=M.start,B=M.count;for(let k=I,G=I+B;k<G;k+=3)d(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let v=new L,g=new L,T=new L,E=new L;function C(R){T.fromBufferAttribute(s,R),E.copy(T);let S=o[R];v.copy(S),v.sub(T.multiplyScalar(T.dot(S))).normalize(),g.crossVectors(E,S);let I=g.dot(l[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,I)}for(let R=0,S=x.length;R<S;++R){let M=x[R],I=M.start,B=M.count;for(let k=I,G=I+B;k<G;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),p=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let d=0;d<u;d++)f[_++]=c[p++]}return new Se(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jl=new ae,Yn=new hr,Fs=new ki,Kl=new L,Os=new L,ks=new L,Bs=new L,da=new L,zs=new L,jl=new L,Hs=new L,lt=class extends be{constructor(t=new fe,e=new he){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(da.fromBufferAttribute(h,t),a?zs.addScaledVector(da,u):zs.addScaledVector(da.sub(e),u))}e.add(zs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(r),Yn.copy(t.ray).recast(t.near),!(Fs.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Fs,Kl)===null||Yn.origin.distanceToSquared(Kl)>(t.far-t.near)**2))&&(Jl.copy(r).invert(),Yn.copy(t.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){let m=f[_],d=a[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let g=x,T=v;g<T;g+=3){let E=o.getX(g),C=o.getX(g+1),R=o.getX(g+2);s=Vs(this,d,t,n,c,u,h,E,C,R),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){let x=o.getX(m),v=o.getX(m+1),g=o.getX(m+2);s=Vs(this,a,t,n,c,u,h,x,v,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){let m=f[_],d=a[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=x,T=v;g<T;g+=3){let E=g,C=g+1,R=g+2;s=Vs(this,d,t,n,c,u,h,E,C,R),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){let x=m,v=m+1,g=m+2;s=Vs(this,a,t,n,c,u,h,x,v,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Su(i,t,e,n,s,r,a,o){let l;if(t.side===De?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===kn,o),l===null)return null;Hs.copy(o),Hs.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Hs);return c<e.near||c>e.far?null:{distance:c,point:Hs.clone(),object:i}}function Vs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Os),i.getVertexPosition(l,ks),i.getVertexPosition(c,Bs);let u=Su(i,t,e,n,Os,ks,Bs,jl);if(u){let h=new L;Un.getBarycoord(jl,Os,ks,Bs,h),s&&(u.uv=Un.getInterpolatedAttribute(s,o,l,c,h,new ot)),r&&(u.uv1=Un.getInterpolatedAttribute(r,o,l,c,h,new ot)),a&&(u.normal=Un.getInterpolatedAttribute(a,o,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new L,materialIndex:0};Un.getNormal(Os,ks,Bs,f.normal),u.face=f,u.barycoord=h}return u}var ke=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(h,2));function _(y,m,d,x,v,g,T,E,C,R,S){let M=g/C,I=T/R,B=g/2,k=T/2,G=E/2,J=C+1,X=R+1,j=0,V=0,nt=new L;for(let dt=0;dt<X;dt++){let St=dt*I-k;for(let Ot=0;Ot<J;Ot++){let Qt=Ot*M-B;nt[y]=Qt*x,nt[m]=St*v,nt[d]=G,c.push(nt.x,nt.y,nt.z),nt[y]=0,nt[m]=0,nt[d]=E>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(Ot/C),h.push(1-dt/R),j+=1}}for(let dt=0;dt<R;dt++)for(let St=0;St<C;St++){let Ot=f+St+J*dt,Qt=f+St+J*(dt+1),Y=f+(St+1)+J*(dt+1),et=f+(St+1)+J*dt;l.push(Ot,Qt,et),l.push(Qt,Y,et),V+=6}o.addGroup(p,V,S),p+=V,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Bi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){let t={};for(let e=0;e<i.length;e++){let n=Bi(i[e]);for(let s in n)t[s]=n[s]}return t}function bu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var wu={clone:Bi,merge:Re},Eu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends bn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eu,this.fragmentShader=Tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=bu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},pr=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ln=new L,Ql=new ot,tc=new ot,Ae=class extends pr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,Ql,tc),e.subVectors(tc,Ql)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Mi=-90,Si=1,_o=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ae(Mi,Si,t,e);s.layers=this.layers,this.add(s);let r=new Ae(Mi,Si,t,e);r.layers=this.layers,this.add(r);let a=new Ae(Mi,Si,t,e);a.layers=this.layers,this.add(a);let o=new Ae(Mi,Si,t,e);o.layers=this.layers,this.add(o);let l=new Ae(Mi,Si,t,e);l.layers=this.layers,this.add(l);let c=new Ae(Mi,Si,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},mr=class extends Oe{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ui,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yo=class extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new mr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ke(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Nn});r.uniforms.tEquirect.value=e;let a=new lt(s,r),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=nn),new _o(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},fa=new L,Au=new L,Cu=new Dt,gn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=fa.subVectors(n,e).cross(Au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cu.getNormalMatrix(t),s=this.coplanarPoint(fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},$n=new ki,Gs=new L,os=class{constructor(t=new gn,e=new gn,n=new gn,s=new gn,r=new gn,a=new gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],_=s[9],y=s[10],m=s[11],d=s[12],x=s[13],v=s[14],g=s[15];if(n[0].setComponents(l-r,f-c,m-p,g-d).normalize(),n[1].setComponents(l+r,f+c,m+p,g+d).normalize(),n[2].setComponents(l+a,f+u,m+_,g+x).normalize(),n[3].setComponents(l-a,f-u,m-_,g-x).normalize(),n[4].setComponents(l-o,f-h,m-y,g-v).normalize(),e===yn)n[5].setComponents(l+o,f+h,m+y,g+v).normalize();else if(e===ar)n[5].setComponents(o,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Gs.x=s.normal.x>0?t.max.x:t.min.x,Gs.y=s.normal.y>0?t.max.y:t.min.y,Gs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ru(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){let _=h[f],y=h[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){let y=h[p];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var si=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,p=[],_=[],y=[],m=[];for(let d=0;d<u;d++){let x=d*f-a;for(let v=0;v<c;v++){let g=v*h-r;_.push(g,-x,0),y.push(0,0,1),m.push(v/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){let v=x+c*d,g=x+c*(d+1),T=x+1+c*(d+1),E=x+1+c*d;p.push(v,g,E),p.push(g,T,E)}this.setIndex(p),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pu=`#ifdef USE_ALPHAHASH
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
#endif`,Lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fu=`#ifdef USE_AOMAP
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
#endif`,Ou=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ku=`#ifdef USE_BATCHING
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
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gu=`#ifdef USE_IRIDESCENCE
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
#endif`,Wu=`#ifdef USE_BUMPMAP
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qu=`#define PI 3.141592653589793
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
} // validated`,td=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ed=`vec3 transformedNormal = objectNormal;
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
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",od=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_d=`#ifdef USE_GRADIENTMAP
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
}`,yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Md=`uniform bool receiveShadow;
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
#endif`,Sd=`#ifdef USE_ENVMAP
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
#endif`,bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ad=`PhysicalMaterial material;
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
#endif`,Cd=`struct PhysicalMaterial {
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
}`,Rd=`
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ld=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bd=`#if defined( USE_POINTS_UV )
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
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
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
#endif`,qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$d=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jd=`#ifdef USE_NORMALMAP
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
#endif`,Qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mf=`float getShadowMask() {
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
}`,gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_f=`#ifdef USE_SKINNING
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
#endif`,yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xf=`#ifdef USE_SKINNING
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
#endif`,vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wf=`#ifdef USE_TRANSMISSION
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
#endif`,Ef=`#ifdef USE_TRANSMISSION
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,If=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pf=`uniform sampler2D t2D;
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
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`#include <common>
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
}`,Of=`#if DEPTH_PACKING == 3200
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
}`,kf=`#define DISTANCE
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
}`,Bf=`#define DISTANCE
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`uniform float scale;
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Wf=`#include <common>
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
}`,Xf=`uniform vec3 diffuse;
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
}`,qf=`#define LAMBERT
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
}`,Yf=`#define LAMBERT
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
}`,$f=`#define MATCAP
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
}`,Zf=`#define MATCAP
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
}`,Jf=`#define NORMAL
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
}`,Kf=`#define NORMAL
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
}`,jf=`#define PHONG
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
}`,Qf=`#define PHONG
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
}`,tp=`#define STANDARD
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
}`,ep=`#define STANDARD
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
}`,np=`#define TOON
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
}`,ip=`#define TOON
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
}`,sp=`uniform float size;
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
}`,rp=`uniform vec3 diffuse;
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
}`,ap=`#include <common>
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
}`,op=`uniform vec3 color;
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
}`,lp=`uniform float rotation;
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
}`,cp=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:Iu,alphahash_pars_fragment:Pu,alphamap_fragment:Lu,alphamap_pars_fragment:Du,alphatest_fragment:Uu,alphatest_pars_fragment:Nu,aomap_fragment:Fu,aomap_pars_fragment:Ou,batching_pars_vertex:ku,batching_vertex:Bu,begin_vertex:zu,beginnormal_vertex:Hu,bsdfs:Vu,iridescence_fragment:Gu,bumpmap_pars_fragment:Wu,clipping_planes_fragment:Xu,clipping_planes_pars_fragment:qu,clipping_planes_pars_vertex:Yu,clipping_planes_vertex:$u,color_fragment:Zu,color_pars_fragment:Ju,color_pars_vertex:Ku,color_vertex:ju,common:Qu,cube_uv_reflection_fragment:td,defaultnormal_vertex:ed,displacementmap_pars_vertex:nd,displacementmap_vertex:id,emissivemap_fragment:sd,emissivemap_pars_fragment:rd,colorspace_fragment:ad,colorspace_pars_fragment:od,envmap_fragment:ld,envmap_common_pars_fragment:cd,envmap_pars_fragment:hd,envmap_pars_vertex:ud,envmap_physical_pars_fragment:Sd,envmap_vertex:dd,fog_vertex:fd,fog_pars_vertex:pd,fog_fragment:md,fog_pars_fragment:gd,gradientmap_pars_fragment:_d,lightmap_pars_fragment:yd,lights_lambert_fragment:xd,lights_lambert_pars_fragment:vd,lights_pars_begin:Md,lights_toon_fragment:bd,lights_toon_pars_fragment:wd,lights_phong_fragment:Ed,lights_phong_pars_fragment:Td,lights_physical_fragment:Ad,lights_physical_pars_fragment:Cd,lights_fragment_begin:Rd,lights_fragment_maps:Id,lights_fragment_end:Pd,logdepthbuf_fragment:Ld,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:Ud,logdepthbuf_vertex:Nd,map_fragment:Fd,map_pars_fragment:Od,map_particle_fragment:kd,map_particle_pars_fragment:Bd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:Hd,morphinstance_vertex:Vd,morphcolor_vertex:Gd,morphnormal_vertex:Wd,morphtarget_pars_vertex:Xd,morphtarget_vertex:qd,normal_fragment_begin:Yd,normal_fragment_maps:$d,normal_pars_fragment:Zd,normal_pars_vertex:Jd,normal_vertex:Kd,normalmap_pars_fragment:jd,clearcoat_normal_fragment_begin:Qd,clearcoat_normal_fragment_maps:tf,clearcoat_pars_fragment:ef,iridescence_pars_fragment:nf,opaque_fragment:sf,packing:rf,premultiplied_alpha_fragment:af,project_vertex:of,dithering_fragment:lf,dithering_pars_fragment:cf,roughnessmap_fragment:hf,roughnessmap_pars_fragment:uf,shadowmap_pars_fragment:df,shadowmap_pars_vertex:ff,shadowmap_vertex:pf,shadowmask_pars_fragment:mf,skinbase_vertex:gf,skinning_pars_vertex:_f,skinning_vertex:yf,skinnormal_vertex:xf,specularmap_fragment:vf,specularmap_pars_fragment:Mf,tonemapping_fragment:Sf,tonemapping_pars_fragment:bf,transmission_fragment:wf,transmission_pars_fragment:Ef,uv_pars_fragment:Tf,uv_pars_vertex:Af,uv_vertex:Cf,worldpos_vertex:Rf,background_vert:If,background_frag:Pf,backgroundCube_vert:Lf,backgroundCube_frag:Df,cube_vert:Uf,cube_frag:Nf,depth_vert:Ff,depth_frag:Of,distanceRGBA_vert:kf,distanceRGBA_frag:Bf,equirect_vert:zf,equirect_frag:Hf,linedashed_vert:Vf,linedashed_frag:Gf,meshbasic_vert:Wf,meshbasic_frag:Xf,meshlambert_vert:qf,meshlambert_frag:Yf,meshmatcap_vert:$f,meshmatcap_frag:Zf,meshnormal_vert:Jf,meshnormal_frag:Kf,meshphong_vert:jf,meshphong_frag:Qf,meshphysical_vert:tp,meshphysical_frag:ep,meshtoon_vert:np,meshtoon_frag:ip,points_vert:sp,points_frag:rp,shadow_vert:ap,shadow_frag:op,sprite_vert:lp,sprite_frag:cp},it={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},tn={basic:{uniforms:Re([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Re([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Re([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Re([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Re([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Re([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Re([it.points,it.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Re([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Re([it.common,it.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Re([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Re([it.sprite,it.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Re([it.common,it.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Re([it.lights,it.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};tn.physical={uniforms:Re([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var Ws={r:0,b:0,g:0},Zn=new sn,hp=new ae;function up(i,t,e,n,s,r,a){let o=new Ft(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function y(x){let v=!1,g=_(x);g===null?d(o,l):g&&g.isColor&&(d(g,1),v=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,v){let g=_(v);g&&(g.isCubeTexture||g.mapping===Rr)?(u===void 0&&(u=new lt(new ke(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Bi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Zn.copy(v.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hp.makeRotationFromEuler(Zn)),u.material.toneMapped=Wt.getTransfer(g.colorSpace)!==Kt,(h!==g||f!==g.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=g,f=g.version,p=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new lt(new si(2,2),new rn({name:"BackgroundMaterial",uniforms:Bi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(g.colorSpace)!==Kt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=g,f=g.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,v){x.getRGB(Ws,Jc(i)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(o,l)},render:y,addToRenderList:m}}function dp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(M,I,B,k,G){let J=!1,X=h(k,B,I);r!==X&&(r=X,c(r.object)),J=p(M,k,B,G),J&&_(M,k,B,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,g(M,I,B,k),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,I,B){let k=B.wireframe===!0,G=n[M.id];G===void 0&&(G={},n[M.id]=G);let J=G[I.id];J===void 0&&(J={},G[I.id]=J);let X=J[k];return X===void 0&&(X=f(l()),J[k]=X),X}function f(M){let I=[],B=[],k=[];for(let G=0;G<e;G++)I[G]=0,B[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,I,B,k){let G=r.attributes,J=I.attributes,X=0,j=B.getAttributes();for(let V in j)if(j[V].location>=0){let dt=G[V],St=J[V];if(St===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(St=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(St=M.instanceColor)),dt===void 0||dt.attribute!==St||St&&dt.data!==St.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function _(M,I,B,k){let G={},J=I.attributes,X=0,j=B.getAttributes();for(let V in j)if(j[V].location>=0){let dt=J[V];dt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));let St={};St.attribute=dt,dt&&dt.data&&(St.data=dt.data),G[V]=St,X++}r.attributes=G,r.attributesNum=X,r.index=k}function y(){let M=r.newAttributes;for(let I=0,B=M.length;I<B;I++)M[I]=0}function m(M){d(M,0)}function d(M,I){let B=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;B[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),G[M]!==I&&(i.vertexAttribDivisor(M,I),G[M]=I)}function x(){let M=r.newAttributes,I=r.enabledAttributes;for(let B=0,k=I.length;B<k;B++)I[B]!==M[B]&&(i.disableVertexAttribArray(B),I[B]=0)}function v(M,I,B,k,G,J,X){X===!0?i.vertexAttribIPointer(M,I,B,G,J):i.vertexAttribPointer(M,I,B,k,G,J)}function g(M,I,B,k){y();let G=k.attributes,J=B.getAttributes(),X=I.defaultAttributeValues;for(let j in J){let V=J[j];if(V.location>=0){let nt=G[j];if(nt===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),nt!==void 0){let dt=nt.normalized,St=nt.itemSize,Ot=t.get(nt);if(Ot===void 0)continue;let Qt=Ot.buffer,Y=Ot.type,et=Ot.bytesPerElement,xt=Y===i.INT||Y===i.UNSIGNED_INT||nt.gpuType===jo;if(nt.isInterleavedBufferAttribute){let rt=nt.data,At=rt.stride,It=nt.offset;if(rt.isInstancedInterleavedBuffer){for(let kt=0;kt<V.locationSize;kt++)d(V.location+kt,rt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let kt=0;kt<V.locationSize;kt++)m(V.location+kt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let kt=0;kt<V.locationSize;kt++)v(V.location+kt,St/V.locationSize,Y,dt,At*et,(It+St/V.locationSize*kt)*et,xt)}else{if(nt.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)d(V.location+rt,nt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let rt=0;rt<V.locationSize;rt++)m(V.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let rt=0;rt<V.locationSize;rt++)v(V.location+rt,St/V.locationSize,Y,dt,St*et,St/V.locationSize*rt*et,xt)}}else if(X!==void 0){let dt=X[j];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(V.location,dt);break;case 3:i.vertexAttrib3fv(V.location,dt);break;case 4:i.vertexAttrib4fv(V.location,dt);break;default:i.vertexAttrib1fv(V.location,dt)}}}}x()}function T(){R();for(let M in n){let I=n[M];for(let B in I){let k=I[B];for(let G in k)u(k[G].object),delete k[G];delete I[B]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let B in I){let k=I[B];for(let G in k)u(k[G].object),delete k[G];delete I[B]}delete n[M.id]}function C(M){for(let I in n){let B=n[I];if(B[M.id]===void 0)continue;let k=B[M.id];for(let G in k)u(k[G].object),delete k[G];delete B[M.id]}}function R(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function fp(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];e.update(p,n,1)}function l(c,u,h,f){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=u[y]*f[y];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Je&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let R=C===vs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Mn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==_n&&!R)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:T,maxSamples:E}}function mp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new gn,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){let _=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{let x=r?0:n,v=x*4,g=d.clippingState||null;l.value=g,g=u(_,f,v,p);for(let T=0;T!==v;++T)g[T]=e[T];d.clippingState=g,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,_){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=l.value,_!==!0||m===null){let d=p+y*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,g=p;v!==y;++v,g+=4)a.copy(h[v]).applyMatrix4(x,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function gp(i){let t=new WeakMap;function e(a,o){return o===Ua?a.mapping=Ui:o===Na&&(a.mapping=Ni),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ua||o===Na)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new yo(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var gr=class extends pr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ci=4,ec=[.125,.215,.35,.446,.526,.582],Qn=20,pa=new gr,nc=new Ft,ma=null,ga=0,_a=0,ya=!1,Kn=(1+Math.sqrt(5))/2,bi=1/Kn,ic=[new L(-Kn,bi,0),new L(Kn,bi,0),new L(-bi,0,Kn),new L(bi,0,Kn),new L(0,Kn,-bi),new L(0,Kn,bi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],_r=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,_a),this._renderer.xr.enabled=ya,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===Ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:vs,format:Je,colorSpace:Vi,depthBuffer:!1},s=sc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_p(r)),this._blurMaterial=yp(r,t,e)}return s}_compileMaterial(t){let e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,s){let o=new Ae(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(nc),u.toneMapping=Fn,u.autoClear=!1;let p=new he({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),_=new lt(new ke,p),y=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(nc),y=!0);for(let d=0;d<6;d++){let x=d%3;x===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):x===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let v=this._cubeSize;Xs(s,x*v,d>2?v:0,v,v),u.setRenderTarget(s),y&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ui||t.mapping===Ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ic[(s-r-1)%ic.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new lt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Qn-1),y=r/_,m=isFinite(r)?1+Math.floor(u*y):Qn;m>Qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);let d=[],x=0;for(let C=0;C<Qn;++C){let R=C/y,S=Math.exp(-R*R/2);d.push(S),C===0?x+=S:C<m&&(x+=2*S)}for(let C=0;C<d.length;C++)d[C]=d[C]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;let g=this._sizeLods[s],T=3*g*(s>v-Ci?s-v+Ci:0),E=4*(this._cubeSize-g);Xs(e,T,E,3*g,2*g),l.setRenderTarget(e),l.render(h,pa)}};function _p(i){let t=[],e=[],n=[],s=i,r=i-Ci+1+ec.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ci?l=ec[a-i+Ci-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,y=3,m=2,d=1,x=new Float32Array(y*_*p),v=new Float32Array(m*_*p),g=new Float32Array(d*_*p);for(let E=0;E<p;E++){let C=E%3*2/3-1,R=E>2?0:-1,S=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];x.set(S,y*_*E),v.set(f,m*_*E);let M=[E,E,E,E,E,E];g.set(M,d*_*E)}let T=new fe;T.setAttribute("position",new Se(x,y)),T.setAttribute("uv",new Se(v,m)),T.setAttribute("faceIndex",new Se(g,d)),t.push(T),s>Ci&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sc(i,t,e){let n=new Sn(i,t,e);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function yp(i,t,e){let n=new Float32Array(Qn),s=new L(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sl(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function rc(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ac(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function sl(){return`

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
	`}function xp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ua||l===Na,u=l===Ui||l===Ni;if(c||u){let h=t.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new _r(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new _r(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function vp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&es("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mp(i,t,e,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let y=f.morphAttributes[_];for(let m=0,d=y.length;m<d;m++)t.remove(y[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let _ in f)t.update(f[_],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let _ in p){let y=p[_];for(let m=0,d=y.length;m<d;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(h){let f=[],p=h.index,_=h.attributes.position,y=0;if(p!==null){let x=p.array;y=p.version;for(let v=0,g=x.length;v<g;v+=3){let T=x[v+0],E=x[v+1],C=x[v+2];f.push(T,E,E,C,C,T)}}else if(_!==void 0){let x=_.array;y=_.version;for(let v=0,g=x.length/3-1;v<g;v+=3){let T=v+0,E=v+1,C=v+2;f.push(T,E,E,C,C,T)}}else return;let m=new($c(f)?fr:dr)(f,1);m.version=y;let d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Sp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,f*a,_),e.update(p,n,_))}function u(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];e.update(m,n,1)}function h(f,p,_,y){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,y,0,_);let d=0;for(let x=0;x<_;x++)d+=p[x]*y[x];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function bp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wp(i,t,e){let n=new WeakMap,s=new ce;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],v=0;p===!0&&(v=1),_===!0&&(v=2),y===!0&&(v=3);let g=o.attributes.position.count*v,T=1;g>t.maxTextureSize&&(T=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let E=new Float32Array(g*T*4*h),C=new cr(E,g,T,h);C.type=_n,C.needsUpdate=!0;let R=v*4;for(let M=0;M<h;M++){let I=m[M],B=d[M],k=x[M],G=g*T*4*M;for(let J=0;J<I.count;J++){let X=J*R;p===!0&&(s.fromBufferAttribute(I,J),E[G+X+0]=s.x,E[G+X+1]=s.y,E[G+X+2]=s.z,E[G+X+3]=0),_===!0&&(s.fromBufferAttribute(B,J),E[G+X+4]=s.x,E[G+X+5]=s.y,E[G+X+6]=s.z,E[G+X+7]=0),y===!0&&(s.fromBufferAttribute(k,J),E[G+X+8]=s.x,E[G+X+9]=s.y,E[G+X+10]=s.z,E[G+X+11]=k.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new ot(g,T)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ep(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var yr=class extends Oe{constructor(t,e,n,s,r,a,o,l,c,u=Ii){if(u!==Ii&&u!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ii&&(n=ni),n===void 0&&u===Oi&&(n=Fi),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},jc=new Oe,oc=new yr(1,1),Qc=new cr,th=new go,eh=new mr,lc=[],cc=[],hc=new Float32Array(16),uc=new Float32Array(9),dc=new Float32Array(4);function Gi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=lc[s];if(r===void 0&&(r=new Float32Array(s),lc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pr(i,t){let e=cc[t];e===void 0&&(e=new Int32Array(t),cc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function Cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function Rp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function Ip(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;dc.set(n),i.uniformMatrix2fv(this.addr,!1,dc),ge(e,n)}}function Pp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;uc.set(n),i.uniformMatrix3fv(this.addr,!1,uc),ge(e,n)}}function Lp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;hc.set(n),i.uniformMatrix4fv(this.addr,!1,hc),ge(e,n)}}function Dp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function Fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function Op(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function Bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function Hp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(oc.compareFunction=Yc,r=oc):r=jc,e.setTexture2D(t||r,s)}function Vp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||th,s)}function Gp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||eh,s)}function Wp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qc,s)}function Xp(i){switch(i){case 5126:return Tp;case 35664:return Ap;case 35665:return Cp;case 35666:return Rp;case 35674:return Ip;case 35675:return Pp;case 35676:return Lp;case 5124:case 35670:return Dp;case 35667:case 35671:return Up;case 35668:case 35672:return Np;case 35669:case 35673:return Fp;case 5125:return Op;case 36294:return kp;case 36295:return Bp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Wp}}function qp(i,t){i.uniform1fv(this.addr,t)}function Yp(i,t){let e=Gi(t,this.size,2);i.uniform2fv(this.addr,e)}function $p(i,t){let e=Gi(t,this.size,3);i.uniform3fv(this.addr,e)}function Zp(i,t){let e=Gi(t,this.size,4);i.uniform4fv(this.addr,e)}function Jp(i,t){let e=Gi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Kp(i,t){let e=Gi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jp(i,t){let e=Gi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qp(i,t){i.uniform1iv(this.addr,t)}function tm(i,t){i.uniform2iv(this.addr,t)}function em(i,t){i.uniform3iv(this.addr,t)}function nm(i,t){i.uniform4iv(this.addr,t)}function im(i,t){i.uniform1uiv(this.addr,t)}function sm(i,t){i.uniform2uiv(this.addr,t)}function rm(i,t){i.uniform3uiv(this.addr,t)}function am(i,t){i.uniform4uiv(this.addr,t)}function om(i,t,e){let n=this.cache,s=t.length,r=Pr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||jc,r[a])}function lm(i,t,e){let n=this.cache,s=t.length,r=Pr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||th,r[a])}function cm(i,t,e){let n=this.cache,s=t.length,r=Pr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||eh,r[a])}function hm(i,t,e){let n=this.cache,s=t.length,r=Pr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Qc,r[a])}function um(i){switch(i){case 5126:return qp;case 35664:return Yp;case 35665:return $p;case 35666:return Zp;case 35674:return Jp;case 35675:return Kp;case 35676:return jp;case 5124:case 35670:return Qp;case 35667:case 35671:return tm;case 35668:case 35672:return em;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return hm}}var xo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xp(e.type)}},vo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=um(e.type)}},Mo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},xa=/(\w+)(\])?(\[|\.)?/g;function fc(i,t){i.seq.push(t),i.map[t.id]=t}function dm(i,t,e){let n=i.name,s=n.length;for(xa.lastIndex=0;;){let r=xa.exec(n),a=xa.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fc(e,c===void 0?new xo(o,i,t):new vo(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Mo(o),fc(e,h)),e=h}}}var Li=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);dm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function pc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var fm=37297,pm=0;function mm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var mc=new Dt;function gm(i){Wt._getMatrix(mc,Wt.workingColorSpace,i);let t=`mat3( ${mc.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case Ir:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+mm(i.getShaderSource(t),a)}else return s}function _m(i,t){let e=gm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ym(i,t){let e;switch(t){case Vh:e="Linear";break;case Gh:e="Reinhard";break;case Wh:e="Cineon";break;case Xh:e="ACESFilmic";break;case Yh:e="AgX";break;case $h:e="Neutral";break;case qh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var qs=new L;function xm(){Wt.getLuminanceCoefficients(qs);let i=qs.x.toFixed(4),t=qs.y.toFixed(4),e=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function Mm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ns(i){return i!==""}function _c(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(i){return i.replace(bm,Em)}var wm=new Map;function Em(i,t){let e=Nt[t];if(e===void 0){let n=wm.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return So(e)}var Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(i){return i.replace(Tm,Am)}function Am(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Cm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(t="SHADOWMAP_TYPE_VSM"),t}function Rm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ui:case Ni:t="ENVMAP_TYPE_CUBE";break;case Rr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Im(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ni&&(t="ENVMAP_MODE_REFRACTION"),t}function Pm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uc:t="ENVMAP_BLENDING_MULTIPLY";break;case zh:t="ENVMAP_BLENDING_MIX";break;case Hh:t="ENVMAP_BLENDING_ADD";break}return t}function Lm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Dm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Cm(e),c=Rm(e),u=Im(e),h=Pm(e),f=Lm(e),p=vm(e),_=Mm(r),y=s.createProgram(),m,d,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ns).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ns).join(`
`),d.length>0&&(d+=`
`)):(m=[vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),d=[vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?ym("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,_m("linearToOutputTexel",e.outputColorSpace),xm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),a=So(a),a=_c(a,e),a=yc(a,e),o=So(o),o=_c(o,e),o=yc(o,e),a=xc(a),o=xc(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=x+m+a,g=x+d+o,T=pc(s,s.VERTEX_SHADER,v),E=pc(s,s.FRAGMENT_SHADER,g);s.attachShader(y,T),s.attachShader(y,E),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(I){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(y).trim(),k=s.getShaderInfoLog(T).trim(),G=s.getShaderInfoLog(E).trim(),J=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,T,E);else{let j=gc(s,T,"vertex"),V=gc(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+j+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||G==="")&&(X=!1);X&&(I.diagnostics={runnable:J,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(T),s.deleteShader(E),R=new Li(s,y),S=Sm(s,y)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,fm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pm++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=E,this}var Um=0,bo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wo(t),e.set(t,n)),n}},wo=class{constructor(t){this.id=Um++,this.code=t,this.usedTimes=0}};function Nm(i,t,e,n,s,r,a){let o=new ur,l=new bo,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,I,B,k){let G=B.fog,J=k.geometry,X=S.isMeshStandardMaterial?B.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),V=j&&j.mapping===Rr?j.image.height:null,nt=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let dt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,St=dt!==void 0?dt.length:0,Ot=0;J.morphAttributes.position!==void 0&&(Ot=1),J.morphAttributes.normal!==void 0&&(Ot=2),J.morphAttributes.color!==void 0&&(Ot=3);let Qt,Y,et,xt;if(nt){let Jt=tn[nt];Qt=Jt.vertexShader,Y=Jt.fragmentShader}else Qt=S.vertexShader,Y=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),xt=l.getFragmentShaderID(S);let rt=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),It=k.isInstancedMesh===!0,kt=k.isBatchedMesh===!0,oe=!!S.map,Vt=!!S.matcap,ue=!!j,F=!!S.aoMap,Be=!!S.lightMap,Bt=!!S.bumpMap,zt=!!S.normalMap,Et=!!S.displacementMap,ne=!!S.emissiveMap,wt=!!S.metalnessMap,A=!!S.roughnessMap,b=S.anisotropy>0,O=S.clearcoat>0,$=S.dispersion>0,K=S.iridescence>0,q=S.sheen>0,vt=S.transmission>0,at=b&&!!S.anisotropyMap,ft=O&&!!S.clearcoatMap,Gt=O&&!!S.clearcoatNormalMap,Q=O&&!!S.clearcoatRoughnessMap,pt=K&&!!S.iridescenceMap,Tt=K&&!!S.iridescenceThicknessMap,Ct=q&&!!S.sheenColorMap,mt=q&&!!S.sheenRoughnessMap,Ht=!!S.specularMap,Ut=!!S.specularColorMap,te=!!S.specularIntensityMap,D=vt&&!!S.transmissionMap,st=vt&&!!S.thicknessMap,W=!!S.gradientMap,Z=!!S.alphaMap,ut=S.alphaTest>0,ct=!!S.alphaHash,Pt=!!S.extensions,le=Fn;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(le=i.toneMapping);let we={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:Qt,fragmentShader:Y,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:xt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:kt,batchingColor:kt&&k._colorsTexture!==null,instancing:It,instancingColor:It&&k.instanceColor!==null,instancingMorph:It&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Vi,alphaToCoverage:!!S.alphaToCoverage,map:oe,matcap:Vt,envMap:ue,envMapMode:ue&&j.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:Be,bumpMap:Bt,normalMap:zt,displacementMap:f&&Et,emissiveMap:ne,normalMapObjectSpace:zt&&S.normalMapType===jh,normalMapTangentSpace:zt&&S.normalMapType===qc,metalnessMap:wt,roughnessMap:A,anisotropy:b,anisotropyMap:at,clearcoat:O,clearcoatMap:ft,clearcoatNormalMap:Gt,clearcoatRoughnessMap:Q,dispersion:$,iridescence:K,iridescenceMap:pt,iridescenceThicknessMap:Tt,sheen:q,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:Ht,specularColorMap:Ut,specularIntensityMap:te,transmission:vt,transmissionMap:D,thicknessMap:st,gradientMap:W,opaque:S.transparent===!1&&S.blending===Ri&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:ut,alphaHash:ct,combine:S.combine,mapUv:oe&&y(S.map.channel),aoMapUv:F&&y(S.aoMap.channel),lightMapUv:Be&&y(S.lightMap.channel),bumpMapUv:Bt&&y(S.bumpMap.channel),normalMapUv:zt&&y(S.normalMap.channel),displacementMapUv:Et&&y(S.displacementMap.channel),emissiveMapUv:ne&&y(S.emissiveMap.channel),metalnessMapUv:wt&&y(S.metalnessMap.channel),roughnessMapUv:A&&y(S.roughnessMap.channel),anisotropyMapUv:at&&y(S.anisotropyMap.channel),clearcoatMapUv:ft&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:mt&&y(S.sheenRoughnessMap.channel),specularMapUv:Ht&&y(S.specularMap.channel),specularColorMapUv:Ut&&y(S.specularColorMap.channel),specularIntensityMapUv:te&&y(S.specularIntensityMap.channel),transmissionMapUv:D&&y(S.transmissionMap.channel),thicknessMapUv:st&&y(S.thicknessMap.channel),alphaMapUv:Z&&y(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(zt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(oe||Z),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:At,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:oe&&S.map.isVideoTexture===!0&&Wt.getTransfer(S.map.colorSpace)===Kt,decodeVideoTextureEmissive:ne&&S.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(S.emissiveMap.colorSpace)===Kt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ie,flipSided:S.side===De,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&S.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function d(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)M.push(I),M.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(x(M,S),v(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function g(S){let M=_[S.type],I;if(M){let B=tn[M];I=wu.clone(B.uniforms)}else I=S.uniforms;return I}function T(S,M){let I;for(let B=0,k=u.length;B<k;B++){let G=u[B];if(G.cacheKey===M){I=G,++I.usedTimes;break}}return I===void 0&&(I=new Dm(i,M,S,r),u.push(I)),I}function E(S){if(--S.usedTimes===0){let M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:g,acquireProgram:T,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:R}}function Fm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Om(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Mc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,p,_,y,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:y,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=y,d.group=m),t++,d}function o(h,f,p,_,y,m){let d=a(h,f,p,_,y,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(h,f,p,_,y,m){let d=a(h,f,p,_,y,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||Om),n.length>1&&n.sort(f||Mc),s.length>1&&s.sort(f||Mc)}function u(){for(let h=t,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function km(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Sc,i.set(n,[a])):s>=r.length?(a=new Sc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Bm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ft};break;case"SpotLight":e={position:new L,direction:new L,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function zm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Hm=0;function Vm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gm(i){let t=new Bm,e=zm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new ae,a=new ae;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,_=0,y=0,m=0,d=0,x=0,v=0,g=0,T=0,E=0,C=0;c.sort(Vm);for(let S=0,M=c.length;S<M;S++){let I=c[S],B=I.color,k=I.intensity,G=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*k,h+=B.g*k,f+=B.b*k;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],k);C++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,V=e.get(I);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=I.shadow.matrix,x++}n.directional[p]=X,p++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(B).multiplyScalar(k),X.distance=G,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[y]=X;let j=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,j.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[y]=j.matrix,I.castShadow){let V=e.get(I);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=J,g++}y++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(B).multiplyScalar(k),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=X,m++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let j=I.shadow,V=e.get(I);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=I.shadow.matrix,v++}n.point[_]=X,_++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(k),X.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[d]=X,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==x||R.numPointShadows!==v||R.numSpotShadows!==g||R.numSpotMaps!==T||R.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=g+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,R.directionalLength=p,R.pointLength=_,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=x,R.numPointShadows=v,R.numSpotShadows=g,R.numSpotMaps=T,R.numLightProbes=C,n.version=Hm++)}function l(c,u){let h=0,f=0,p=0,_=0,y=0,m=u.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){let v=c[d];if(v.isDirectionalLight){let g=n.directional[h];g.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),h++}else if(v.isSpotLight){let g=n.spot[p];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let g=n.rectArea[_];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),g.halfWidth.set(v.width*.5,0,0),g.halfHeight.set(0,v.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let g=n.point[f];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let g=n.hemi[y];g.direction.setFromMatrixPosition(v.matrixWorld),g.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function bc(i){let t=new Gm(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Wm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new bc(i),t.set(s,[o])):r>=a.length?(o=new bc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Eo=class extends bn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},To=class extends bn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qm=`uniform sampler2D shadow_pass;
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
}`;function Ym(i,t,e){let n=new os,s=new ot,r=new ot,a=new ce,o=new Eo({depthPacking:Kh}),l=new To,c={},u=e.maxTextureSize,h={[kn]:De,[De]:kn,[Ie]:Ie},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Xm,fragmentShader:qm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new fe;_.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new lt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let d=this.type;this.render=function(E,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Nn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=d!==mn&&this.type===mn,G=d===mn&&this.type!==mn;for(let J=0,X=E.length;J<X;J++){let j=E[J],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let nt=V.getFrameExtents();if(s.multiply(nt),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,V.mapSize.y=r.y)),V.map===null||k===!0||G===!0){let St=this.type!==mn?{minFilter:Ke,magFilter:Ke}:{};V.map!==null&&V.map.dispose(),V.map=new Sn(s.x,s.y,St),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let dt=V.getViewportCount();for(let St=0;St<dt;St++){let Ot=V.getViewport(St);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),B.viewport(a),V.updateMatrices(j,St),n=V.getFrustum(),g(C,R,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===mn&&x(V,R),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,I)};function x(E,C){let R=t.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Sn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,R,f,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,R,p,y,null)}function v(E,C,R,S){let M=null,I=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)M=I;else if(M=R.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let B=M.uuid,k=C.uuid,G=c[B];G===void 0&&(G={},c[B]=G);let J=G[k];J===void 0&&(J=M.clone(),G[k]=J,C.addEventListener("dispose",T)),M=J}if(M.visible=C.visible,M.wireframe=C.wireframe,S===mn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let B=i.properties.get(M);B.light=R}return M}function g(E,C,R,S,M){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===mn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let k=t.update(E),G=E.material;if(Array.isArray(G)){let J=k.groups;for(let X=0,j=J.length;X<j;X++){let V=J[X],nt=G[V.materialIndex];if(nt&&nt.visible){let dt=v(E,nt,S,M);E.onBeforeShadow(i,E,C,R,k,dt,V),i.renderBufferDirect(R,null,k,dt,E,V),E.onAfterShadow(i,E,C,R,k,dt,V)}}}else if(G.visible){let J=v(E,G,S,M);E.onBeforeShadow(i,E,C,R,k,J,null),i.renderBufferDirect(R,null,k,J,E,null),E.onAfterShadow(i,E,C,R,k,J,null)}}let B=E.children;for(let k=0,G=B.length;k<G;k++)g(B[k],C,R,S,M)}function T(E){E.target.removeEventListener("dispose",T);for(let R in c){let S=c[R],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var $m={[Aa]:Ca,[Ra]:La,[Ia]:Da,[Di]:Pa,[Ca]:Aa,[La]:Ra,[Da]:Ia,[Pa]:Di};function Zm(i,t){function e(){let D=!1,st=new ce,W=null,Z=new ce(0,0,0,0);return{setMask:function(ut){W!==ut&&!D&&(i.colorMask(ut,ut,ut,ut),W=ut)},setLocked:function(ut){D=ut},setClear:function(ut,ct,Pt,le,we){we===!0&&(ut*=le,ct*=le,Pt*=le),st.set(ut,ct,Pt,le),Z.equals(st)===!1&&(i.clearColor(ut,ct,Pt,le),Z.copy(st))},reset:function(){D=!1,W=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,st=!1,W=null,Z=null,ut=null;return{setReversed:function(ct){if(st!==ct){let Pt=t.get("EXT_clip_control");st?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);let le=ut;ut=null,this.setClear(le)}st=ct},getReversed:function(){return st},setTest:function(ct){ct?rt(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(ct){W!==ct&&!D&&(i.depthMask(ct),W=ct)},setFunc:function(ct){if(st&&(ct=$m[ct]),Z!==ct){switch(ct){case Aa:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case Di:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ct}},setLocked:function(ct){D=ct},setClear:function(ct){ut!==ct&&(st&&(ct=1-ct),i.clearDepth(ct),ut=ct)},reset:function(){D=!1,W=null,Z=null,ut=null,st=!1}}}function s(){let D=!1,st=null,W=null,Z=null,ut=null,ct=null,Pt=null,le=null,we=null;return{setTest:function(Jt){D||(Jt?rt(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(Jt){st!==Jt&&!D&&(i.stencilMask(Jt),st=Jt)},setFunc:function(Jt,Xe,ln){(W!==Jt||Z!==Xe||ut!==ln)&&(i.stencilFunc(Jt,Xe,ln),W=Jt,Z=Xe,ut=ln)},setOp:function(Jt,Xe,ln){(ct!==Jt||Pt!==Xe||le!==ln)&&(i.stencilOp(Jt,Xe,ln),ct=Jt,Pt=Xe,le=ln)},setLocked:function(Jt){D=Jt},setClear:function(Jt){we!==Jt&&(i.clearStencil(Jt),we=Jt)},reset:function(){D=!1,st=null,W=null,Z=null,ut=null,ct=null,Pt=null,le=null,we=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],_=null,y=!1,m=null,d=null,x=null,v=null,g=null,T=null,E=null,C=new Ft(0,0,0),R=0,S=!1,M=null,I=null,B=null,k=null,G=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,j=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=j>=2);let nt=null,dt={},St=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),Qt=new ce().fromArray(St),Y=new ce().fromArray(Ot);function et(D,st,W,Z){let ut=new Uint8Array(4),ct=i.createTexture();i.bindTexture(D,ct),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<W;Pt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(st+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return ct}let xt={};xt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Di),Bt(!1),zt(Al),rt(i.CULL_FACE),F(Nn);function rt(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function At(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function It(D,st){return h[D]!==st?(i.bindFramebuffer(D,st),h[D]=st,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=st),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=st),!0):!1}function kt(D,st){let W=p,Z=!1;if(D){W=f.get(st),W===void 0&&(W=[],f.set(st,W));let ut=D.textures;if(W.length!==ut.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Pt=ut.length;ct<Pt;ct++)W[ct]=i.COLOR_ATTACHMENT0+ct;W.length=ut.length,Z=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,Z=!0);Z&&i.drawBuffers(W)}function oe(D){return _!==D?(i.useProgram(D),_=D,!0):!1}let Vt={[jn]:i.FUNC_ADD,[bh]:i.FUNC_SUBTRACT,[wh]:i.FUNC_REVERSE_SUBTRACT};Vt[Eh]=i.MIN,Vt[Th]=i.MAX;let ue={[Ah]:i.ZERO,[Ch]:i.ONE,[Rh]:i.SRC_COLOR,[Ea]:i.SRC_ALPHA,[Nh]:i.SRC_ALPHA_SATURATE,[Dh]:i.DST_COLOR,[Ph]:i.DST_ALPHA,[Ih]:i.ONE_MINUS_SRC_COLOR,[Ta]:i.ONE_MINUS_SRC_ALPHA,[Uh]:i.ONE_MINUS_DST_COLOR,[Lh]:i.ONE_MINUS_DST_ALPHA,[Fh]:i.CONSTANT_COLOR,[Oh]:i.ONE_MINUS_CONSTANT_COLOR,[kh]:i.CONSTANT_ALPHA,[Bh]:i.ONE_MINUS_CONSTANT_ALPHA};function F(D,st,W,Z,ut,ct,Pt,le,we,Jt){if(D===Nn){y===!0&&(At(i.BLEND),y=!1);return}if(y===!1&&(rt(i.BLEND),y=!0),D!==Sh){if(D!==m||Jt!==S){if((d!==jn||g!==jn)&&(i.blendEquation(i.FUNC_ADD),d=jn,g=jn),Jt)switch(D){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vn:i.blendFunc(i.ONE,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,v=null,T=null,E=null,C.set(0,0,0),R=0,m=D,S=Jt}return}ut=ut||st,ct=ct||W,Pt=Pt||Z,(st!==d||ut!==g)&&(i.blendEquationSeparate(Vt[st],Vt[ut]),d=st,g=ut),(W!==x||Z!==v||ct!==T||Pt!==E)&&(i.blendFuncSeparate(ue[W],ue[Z],ue[ct],ue[Pt]),x=W,v=Z,T=ct,E=Pt),(le.equals(C)===!1||we!==R)&&(i.blendColor(le.r,le.g,le.b,we),C.copy(le),R=we),m=D,S=!1}function Be(D,st){D.side===Ie?At(i.CULL_FACE):rt(i.CULL_FACE);let W=D.side===De;st&&(W=!W),Bt(W),D.blending===Ri&&D.transparent===!1?F(Nn):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function zt(D){D!==xh?(rt(i.CULL_FACE),D!==I&&(D===Al?i.cullFace(i.BACK):D===vh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),I=D}function Et(D){D!==B&&(X&&i.lineWidth(D),B=D)}function ne(D,st,W){D?(rt(i.POLYGON_OFFSET_FILL),(k!==st||G!==W)&&(i.polygonOffset(st,W),k=st,G=W)):At(i.POLYGON_OFFSET_FILL)}function wt(D){D?rt(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+J-1),nt!==D&&(i.activeTexture(D),nt=D)}function b(D,st,W){W===void 0&&(nt===null?W=i.TEXTURE0+J-1:W=nt);let Z=dt[W];Z===void 0&&(Z={type:void 0,texture:void 0},dt[W]=Z),(Z.type!==D||Z.texture!==st)&&(nt!==W&&(i.activeTexture(W),nt=W),i.bindTexture(D,st||xt[D]),Z.type=D,Z.texture=st)}function O(){let D=dt[nt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(D){Qt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Qt.copy(D))}function mt(D){Y.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Ht(D,st){let W=c.get(st);W===void 0&&(W=new WeakMap,c.set(st,W));let Z=W.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(st,D.name),W.set(D,Z))}function Ut(D,st){let Z=c.get(st).get(D);l.get(st)!==Z&&(i.uniformBlockBinding(st,Z,D.__bindingPointIndex),l.set(st,Z))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},nt=null,dt={},h={},f=new WeakMap,p=[],_=null,y=!1,m=null,d=null,x=null,v=null,g=null,T=null,E=null,C=new Ft(0,0,0),R=0,S=!1,M=null,I=null,B=null,k=null,G=null,Qt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:At,bindFramebuffer:It,drawBuffers:kt,useProgram:oe,setBlending:F,setMaterial:Be,setFlipSided:Bt,setCullFace:zt,setLineWidth:Et,setPolygonOffset:ne,setScissorTest:wt,activeTexture:A,bindTexture:b,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:K,texImage2D:pt,texImage3D:Tt,updateUBOMapping:Ht,uniformBlockBinding:Ut,texStorage2D:Gt,texStorage3D:Q,texSubImage2D:q,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Ct,viewport:mt,reset:te}}function wc(i,t,e,n){let s=Jm(n);switch(e){case Bc:return i*t;case Hc:return i*t;case Vc:return i*t*2;case Gc:return i*t/s.components*s.byteLength;case el:return i*t/s.components*s.byteLength;case Wc:return i*t*2/s.components*s.byteLength;case nl:return i*t*2/s.components*s.byteLength;case zc:return i*t*3/s.components*s.byteLength;case Je:return i*t*4/s.components*s.byteLength;case il:return i*t*4/s.components*s.byteLength;case tr:case er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:case Ha:return Math.max(i,16)*Math.max(t,8)/4;case ka:case za:return Math.max(i,8)*Math.max(t,8)/2;case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case eo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case so:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sr:case ro:case ao:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xc:case oo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case lo:case co:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jm(i){switch(i){case Mn:case Fc:return{byteLength:1,components:1};case as:case Oc:case vs:return{byteLength:2,components:1};case Qo:case tl:return{byteLength:2,components:4};case ni:case jo:case _n:return{byteLength:4,components:1};case kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Km(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,b){return p?new OffscreenCanvas(A,b):or("canvas")}function y(A,b,O){let $=1,K=wt(A);if((K.width>O||K.height>O)&&($=O/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let q=Math.floor($*K.width),vt=Math.floor($*K.height);h===void 0&&(h=_(q,vt));let at=b?_(q,vt):h;return at.width=q,at.height=vt,at.getContext("2d").drawImage(A,0,0,q,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+vt+")."),at}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,b,O,$,K=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=b;if(b===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),b===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),b===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),b===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),b===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),b===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),b===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),b===i.RGBA){let vt=K?Ir:Wt.getTransfer($);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=vt===Kt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function g(A,b){let O;return A?b===null||b===ni||b===Fi?O=i.DEPTH24_STENCIL8:b===_n?O=i.DEPTH32F_STENCIL8:b===as&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ni||b===Fi?O=i.DEPTH_COMPONENT24:b===_n?O=i.DEPTH_COMPONENT32F:b===as&&(O=i.DEPTH_COMPONENT16),O}function T(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ke&&A.minFilter!==nn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function E(A){let b=A.target;b.removeEventListener("dispose",E),R(b),b.isVideoTexture&&u.delete(b)}function C(A){let b=A.target;b.removeEventListener("dispose",C),M(b)}function R(A){let b=n.get(A);if(b.__webglInit===void 0)return;let O=A.source,$=f.get(O);if($){let K=$[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(A),Object.keys($).length===0&&f.delete(O)}n.remove(A)}function S(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let O=A.source,$=f.get(O);delete $[b.__cacheKey],a.memory.textures--}function M(A){let b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let K=0;K<b.__webglFramebuffer[$].length;K++)i.deleteFramebuffer(b.__webglFramebuffer[$][K]);else i.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)i.deleteFramebuffer(b.__webglFramebuffer[$]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let O=A.textures;for(let $=0,K=O.length;$<K;$++){let q=n.get(O[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(A)}let I=0;function B(){I=0}function k(){let A=I;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function G(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function J(A,b){let O=n.get(A);if(A.isVideoTexture&&Et(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,A,b);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+b)}function X(A,b){let O=n.get(A);if(A.version>0&&O.__version!==A.version){Y(O,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+b)}function j(A,b){let O=n.get(A);if(A.version>0&&O.__version!==A.version){Y(O,A,b);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+b)}function V(A,b){let O=n.get(A);if(A.version>0&&O.__version!==A.version){et(O,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+b)}let nt={[Fa]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[Oa]:i.MIRRORED_REPEAT},dt={[Ke]:i.NEAREST,[Zh]:i.NEAREST_MIPMAP_NEAREST,[Ts]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},St={[Qh]:i.NEVER,[ru]:i.ALWAYS,[tu]:i.LESS,[Yc]:i.LEQUAL,[eu]:i.EQUAL,[su]:i.GEQUAL,[nu]:i.GREATER,[iu]:i.NOTEQUAL};function Ot(A,b){if(b.type===_n&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===nn||b.magFilter===Wr||b.magFilter===Ts||b.magFilter===ei||b.minFilter===nn||b.minFilter===Wr||b.minFilter===Ts||b.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,nt[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,nt[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,nt[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,dt[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,dt[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,St[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ke||b.minFilter!==Ts&&b.minFilter!==ei||b.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Qt(A,b){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",E));let $=b.source,K=f.get($);K===void 0&&(K={},f.set($,K));let q=G(b);if(q!==A.__cacheKey){K[q]===void 0&&(K[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[q].usedTimes++;let vt=K[A.__cacheKey];vt!==void 0&&(K[A.__cacheKey].usedTimes--,vt.usedTimes===0&&S(b)),A.__cacheKey=q,A.__webglTexture=K[q].texture}return O}function Y(A,b,O){let $=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=i.TEXTURE_3D);let K=Qt(A,b),q=b.source;e.bindTexture($,A.__webglTexture,i.TEXTURE0+O);let vt=n.get(q);if(q.version!==vt.__version||K===!0){e.activeTexture(i.TEXTURE0+O);let at=Wt.getPrimaries(Wt.workingColorSpace),ft=b.colorSpace===Dn?null:Wt.getPrimaries(b.colorSpace),Gt=b.colorSpace===Dn||at===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let Q=y(b.image,!1,s.maxTextureSize);Q=ne(b,Q);let pt=r.convert(b.format,b.colorSpace),Tt=r.convert(b.type),Ct=v(b.internalFormat,pt,Tt,b.colorSpace,b.isVideoTexture);Ot($,b);let mt,Ht=b.mipmaps,Ut=b.isVideoTexture!==!0,te=vt.__version===void 0||K===!0,D=q.dataReady,st=T(b,Q);if(b.isDepthTexture)Ct=g(b.format===Oi,b.type),te&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,Ct,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Ct,Q.width,Q.height,0,pt,Tt,null));else if(b.isDataTexture)if(Ht.length>0){Ut&&te&&e.texStorage2D(i.TEXTURE_2D,st,Ct,Ht[0].width,Ht[0].height);for(let W=0,Z=Ht.length;W<Z;W++)mt=Ht[W],Ut?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,Tt,mt.data):e.texImage2D(i.TEXTURE_2D,W,Ct,mt.width,mt.height,0,pt,Tt,mt.data);b.generateMipmaps=!1}else Ut?(te&&e.texStorage2D(i.TEXTURE_2D,st,Ct,Q.width,Q.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,Tt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,Q.width,Q.height,0,pt,Tt,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ut&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Ct,Ht[0].width,Ht[0].height,Q.depth);for(let W=0,Z=Ht.length;W<Z;W++)if(mt=Ht[W],b.format!==Je)if(pt!==null)if(Ut){if(D)if(b.layerUpdates.size>0){let ut=wc(mt.width,mt.height,b.format,b.type);for(let ct of b.layerUpdates){let Pt=mt.data.subarray(ct*ut/mt.data.BYTES_PER_ELEMENT,(ct+1)*ut/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ct,mt.width,mt.height,1,pt,Pt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ct,mt.width,mt.height,Q.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,mt.width,mt.height,Q.depth,pt,Tt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Ct,mt.width,mt.height,Q.depth,0,pt,Tt,mt.data)}else{Ut&&te&&e.texStorage2D(i.TEXTURE_2D,st,Ct,Ht[0].width,Ht[0].height);for(let W=0,Z=Ht.length;W<Z;W++)mt=Ht[W],b.format!==Je?pt!==null?Ut?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,Tt,mt.data):e.texImage2D(i.TEXTURE_2D,W,Ct,mt.width,mt.height,0,pt,Tt,mt.data)}else if(b.isDataArrayTexture)if(Ut){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Ct,Q.width,Q.height,Q.depth),D)if(b.layerUpdates.size>0){let W=wc(Q.width,Q.height,b.format,b.type);for(let Z of b.layerUpdates){let ut=Q.data.subarray(Z*W/Q.data.BYTES_PER_ELEMENT,(Z+1)*W/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,pt,Tt,ut)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,Tt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,Q.width,Q.height,Q.depth,0,pt,Tt,Q.data);else if(b.isData3DTexture)Ut?(te&&e.texStorage3D(i.TEXTURE_3D,st,Ct,Q.width,Q.height,Q.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,Tt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,Q.width,Q.height,Q.depth,0,pt,Tt,Q.data);else if(b.isFramebufferTexture){if(te)if(Ut)e.texStorage2D(i.TEXTURE_2D,st,Ct,Q.width,Q.height);else{let W=Q.width,Z=Q.height;for(let ut=0;ut<st;ut++)e.texImage2D(i.TEXTURE_2D,ut,Ct,W,Z,0,pt,Tt,null),W>>=1,Z>>=1}}else if(Ht.length>0){if(Ut&&te){let W=wt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,st,Ct,W.width,W.height)}for(let W=0,Z=Ht.length;W<Z;W++)mt=Ht[W],Ut?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,pt,Tt,mt):e.texImage2D(i.TEXTURE_2D,W,Ct,pt,Tt,mt);b.generateMipmaps=!1}else if(Ut){if(te){let W=wt(Q);e.texStorage2D(i.TEXTURE_2D,st,Ct,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Tt,Q)}else e.texImage2D(i.TEXTURE_2D,0,Ct,pt,Tt,Q);m(b)&&d($),vt.__version=q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function et(A,b,O){if(b.image.length!==6)return;let $=Qt(A,b),K=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);let q=n.get(K);if(K.version!==q.__version||$===!0){e.activeTexture(i.TEXTURE0+O);let vt=Wt.getPrimaries(Wt.workingColorSpace),at=b.colorSpace===Dn?null:Wt.getPrimaries(b.colorSpace),ft=b.colorSpace===Dn||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Gt=b.isCompressedTexture||b.image[0].isCompressedTexture,Q=b.image[0]&&b.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Gt&&!Q?pt[Z]=y(b.image[Z],!0,s.maxCubemapSize):pt[Z]=Q?b.image[Z].image:b.image[Z],pt[Z]=ne(b,pt[Z]);let Tt=pt[0],Ct=r.convert(b.format,b.colorSpace),mt=r.convert(b.type),Ht=v(b.internalFormat,Ct,mt,b.colorSpace),Ut=b.isVideoTexture!==!0,te=q.__version===void 0||$===!0,D=K.dataReady,st=T(b,Tt);Ot(i.TEXTURE_CUBE_MAP,b);let W;if(Gt){Ut&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Ht,Tt.width,Tt.height);for(let Z=0;Z<6;Z++){W=pt[Z].mipmaps;for(let ut=0;ut<W.length;ut++){let ct=W[ut];b.format!==Je?Ct!==null?Ut?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,ct.width,ct.height,Ct,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Ht,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,ct.width,ct.height,Ct,mt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Ht,ct.width,ct.height,0,Ct,mt,ct.data)}}}else{if(W=b.mipmaps,Ut&&te){W.length>0&&st++;let Z=wt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Ht,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Ut?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,Ct,mt,pt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ht,pt[Z].width,pt[Z].height,0,Ct,mt,pt[Z].data);for(let ut=0;ut<W.length;ut++){let Pt=W[ut].image[Z].image;Ut?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Pt.width,Pt.height,Ct,mt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Ht,Pt.width,Pt.height,0,Ct,mt,Pt.data)}}else{Ut?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ct,mt,pt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ht,Ct,mt,pt[Z]);for(let ut=0;ut<W.length;ut++){let ct=W[ut];Ut?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Ct,mt,ct.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Ht,Ct,mt,ct.image[Z])}}}m(b)&&d(i.TEXTURE_CUBE_MAP),q.__version=K.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function xt(A,b,O,$,K,q){let vt=r.convert(O.format,O.colorSpace),at=r.convert(O.type),ft=v(O.internalFormat,vt,at,O.colorSpace),Gt=n.get(b),Q=n.get(O);if(Q.__renderTarget=b,!Gt.__hasExternalTextures){let pt=Math.max(1,b.width>>q),Tt=Math.max(1,b.height>>q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,q,ft,pt,Tt,b.depth,0,vt,at,null):e.texImage2D(K,q,ft,pt,Tt,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),zt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,Q.__webglTexture,0,Bt(b)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,K,Q.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(A,b,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let $=b.depthTexture,K=$&&$.isDepthTexture?$.type:null,q=g(b.stencilBuffer,K),vt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Bt(b);zt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,q,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,A)}else{let $=b.textures;for(let K=0;K<$.length;K++){let q=$[K],vt=r.convert(q.format,q.colorSpace),at=r.convert(q.type),ft=v(q.internalFormat,vt,at,q.colorSpace),Gt=Bt(b);O&&zt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,ft,b.width,b.height):zt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,ft,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ft,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);let K=$.__webglTexture,q=Bt(b);if(b.depthTexture.format===Ii)zt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(b.depthTexture.format===Oi)zt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function It(A){let b=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){let K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=$}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");At(b.__webglFramebuffer,A)}else if(O){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=i.createRenderbuffer(),rt(b.__webglDepthbuffer[$],A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),rt(b.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(A,b,O){let $=n.get(A);b!==void 0&&xt($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&It(A)}function oe(A){let b=A.texture,O=n.get(A),$=n.get(b);A.addEventListener("dispose",C);let K=A.textures,q=A.isWebGLCubeRenderTarget===!0,vt=K.length>1;if(vt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=b.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let ft=0;ft<b.mipmaps.length;ft++)O.__webglFramebuffer[at][ft]=i.createFramebuffer()}else O.__webglFramebuffer[at]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<b.mipmaps.length;at++)O.__webglFramebuffer[at]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,ft=K.length;at<ft;at++){let Gt=n.get(K[at]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&zt(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<K.length;at++){let ft=K[at];O.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[at]);let Gt=r.convert(ft.format,ft.colorSpace),Q=r.convert(ft.type),pt=v(ft.internalFormat,Gt,Q,ft.colorSpace,A.isXRRenderTarget===!0),Tt=Bt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,pt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,O.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,b);for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)xt(O.__webglFramebuffer[at][ft],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else xt(O.__webglFramebuffer[at],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(b)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ft=K.length;at<ft;at++){let Gt=K[at],Q=n.get(Gt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Ot(i.TEXTURE_2D,Gt),xt(O.__webglFramebuffer,A,Gt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Gt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),Ot(at,b),b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)xt(O.__webglFramebuffer[ft],A,b,i.COLOR_ATTACHMENT0,at,ft);else xt(O.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,at,0);m(b)&&d(at),e.unbindTexture()}A.depthBuffer&&It(A)}function Vt(A){let b=A.textures;for(let O=0,$=b.length;O<$;O++){let K=b[O];if(m(K)){let q=x(A),vt=n.get(K).__webglTexture;e.bindTexture(q,vt),d(q),e.unbindTexture()}}}let ue=[],F=[];function Be(A){if(A.samples>0){if(zt(A)===!1){let b=A.textures,O=A.width,$=A.height,K=i.COLOR_BUFFER_BIT,q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(A),at=b.length>1;if(at)for(let ft=0;ft<b.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ft=0;ft<b.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);let Gt=n.get(b[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,K,i.NEAREST),l===!0&&(ue.length=0,F.length=0,ue.push(i.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ue.push(q),F.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<b.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);let Gt=n.get(b[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Bt(A){return Math.min(s.maxSamples,A.samples)}function zt(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(A){let b=a.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function ne(A,b){let O=A.colorSpace,$=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Vi&&O!==Dn&&(Wt.getTransfer(O)===Kt?($!==Je||K!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function wt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=kt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=zt}function jm(i,t){function e(n,s=Dn){let r,a=Wt.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===Qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===jo)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===vs)return i.HALF_FLOAT;if(n===Bc)return i.ALPHA;if(n===zc)return i.RGB;if(n===Je)return i.RGBA;if(n===Hc)return i.LUMINANCE;if(n===Vc)return i.LUMINANCE_ALPHA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===Gc)return i.RED;if(n===el)return i.RED_INTEGER;if(n===Wc)return i.RG;if(n===nl)return i.RG_INTEGER;if(n===il)return i.RGBA_INTEGER;if(n===tr||n===er||n===nr||n===ir)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===Ba||n===za||n===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Ga)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===to||n===eo||n===no||n===io||n===so)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===to)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===so)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sr||n===ro||n===ao)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===sr)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xc||n===oo||n===lo||n===co)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===sr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ao=class extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},pe=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qm={type:"move"},is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eg=`
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

}`,Co=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new rn({vertexShader:tg,fragmentShader:eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ro=class extends Bn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null,y=new Co,m=e.getContextAttributes(),d=null,x=null,v=[],g=[],T=new ot,E=null,C=new Ae;C.viewport=new ce;let R=new Ae;R.viewport=new ce;let S=[C,R],M=new Ao,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=v[Y];return et===void 0&&(et=new is,v[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=v[Y];return et===void 0&&(et=new is,v[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=v[Y];return et===void 0&&(et=new is,v[Y]=et),et.getHandSpace()};function k(Y){let et=g.indexOf(Y.inputSource);if(et===-1)return;let xt=v[et];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,c||a),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",J);for(let Y=0;Y<v.length;Y++){let et=g[Y];et!==null&&(g[Y]=null,v[Y].disconnect(et))}I=null,B=null,y.reset(),t.setRenderTarget(d),p=null,f=null,h=null,s=null,x=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){let et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Sn(p.framebufferWidth,p.framebufferHeight,{format:Je,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,xt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Oi:Ii,xt=m.stencil?Fi:ni);let At={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(At),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Sn(f.textureWidth,f.textureHeight,{format:Je,type:Mn,depthTexture:new yr(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(Y){for(let et=0;et<Y.removed.length;et++){let xt=Y.removed[et],rt=g.indexOf(xt);rt>=0&&(g[rt]=null,v[rt].disconnect(xt))}for(let et=0;et<Y.added.length;et++){let xt=Y.added[et],rt=g.indexOf(xt);if(rt===-1){for(let It=0;It<v.length;It++)if(It>=g.length){g.push(xt),rt=It;break}else if(g[It]===null){g[It]=xt,rt=It;break}if(rt===-1)break}let At=v[rt];At&&At.connect(xt)}}let X=new L,j=new L;function V(Y,et,xt){X.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(xt.matrixWorld);let rt=X.distanceTo(j),At=et.projectionMatrix.elements,It=xt.projectionMatrix.elements,kt=At[14]/(At[10]-1),oe=At[14]/(At[10]+1),Vt=(At[9]+1)/At[5],ue=(At[9]-1)/At[5],F=(At[8]-1)/At[0],Be=(It[8]+1)/It[0],Bt=kt*F,zt=kt*Be,Et=rt/(-F+Be),ne=Et*-F;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ne),Y.translateZ(Et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let wt=kt+Et,A=oe+Et,b=Bt-ne,O=zt+(rt-ne),$=Vt*oe/A*wt,K=ue*oe/A*wt;Y.projectionMatrix.makePerspective(b,O,$,K,wt,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function nt(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,xt=Y.far;y.texture!==null&&(y.depthNear>0&&(et=y.depthNear),y.depthFar>0&&(xt=y.depthFar)),M.near=R.near=C.near=et,M.far=R.far=C.far=xt,(I!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,B=M.far),C.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,M.layers.mask=C.layers.mask|R.layers.mask;let rt=Y.parent,At=M.cameras;nt(M,rt);for(let It=0;It<At.length;It++)nt(At[It],rt);At.length===2?V(M,C,R):M.projectionMatrix.copy(C.projectionMatrix),dt(Y,M,rt)};function dt(Y,et,xt){xt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=fo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let St=null;function Ot(Y,et){if(u=et.getViewerPose(c||a),_=et,u!==null){let xt=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let rt=!1;xt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let It=0;It<xt.length;It++){let kt=xt[It],oe=null;if(p!==null)oe=p.getViewport(kt);else{let ue=h.getViewSubImage(f,kt);oe=ue.viewport,It===0&&(t.setRenderTargetTextures(x,ue.colorTexture,f.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(x))}let Vt=S[It];Vt===void 0&&(Vt=new Ae,Vt.layers.enable(It),Vt.viewport=new ce,S[It]=Vt),Vt.matrix.fromArray(kt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(kt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(oe.x,oe.y,oe.width,oe.height),It===0&&(M.matrix.copy(Vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(Vt)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){let It=h.getDepthInformation(xt[0]);It&&It.isValid&&It.texture&&y.init(t,It,s.renderState)}}for(let xt=0;xt<v.length;xt++){let rt=g[xt],At=v[xt];rt!==null&&At!==void 0&&At.update(rt,et,c||a)}St&&St(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}let Qt=new Kc;Qt.setAnimationLoop(Ot),this.setAnimationLoop=function(Y){St=Y},this.dispose=function(){}}},Jn=new sn,ng=new ae;function ig(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Jc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,x,v,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,g)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,x,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===De&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===De&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let x=t.get(d),v=x.envMap,g=x.envMapRotation;v&&(m.envMap.value=v,Jn.copy(g),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),m.envMapRotation.value.setFromMatrix4(ng.makeRotationFromEuler(Jn)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===De&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let x=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){let g=v.program;n.uniformBlockBinding(x,g)}function c(x,v){let g=s[x.id];g===void 0&&(_(x),g=u(x),s[x.id]=g,x.addEventListener("dispose",m));let T=v.program;n.updateUBOMapping(x,T);let E=t.render.frame;r[x.id]!==E&&(f(x),r[x.id]=E)}function u(x){let v=h();x.__bindingPointIndex=v;let g=i.createBuffer(),T=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,g),g}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let v=s[x.id],g=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,C=g.length;E<C;E++){let R=Array.isArray(g[E])?g[E]:[g[E]];for(let S=0,M=R.length;S<M;S++){let I=R[S];if(p(I,E,S,T)===!0){let B=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],G=0;for(let J=0;J<k.length;J++){let X=k[J],j=y(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,B+G,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,v,g,T){let E=x.value,C=v+"_"+g;if(T[C]===void 0)return typeof E=="number"||typeof E=="boolean"?T[C]=E:T[C]=E.clone(),!0;{let R=T[C];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return T[C]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function _(x){let v=x.uniforms,g=0,T=16;for(let C=0,R=v.length;C<R;C++){let S=Array.isArray(v[C])?v[C]:[v[C]];for(let M=0,I=S.length;M<I;M++){let B=S[M],k=Array.isArray(B.value)?B.value:[B.value];for(let G=0,J=k.length;G<J;G++){let X=k[G],j=y(X),V=g%T,nt=V%j.boundary,dt=V+nt;g+=nt,dt!==0&&T-dt<j.storage&&(g+=T-dt),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=g,g+=j.storage}}}let E=g%T;return E>0&&(g+=T-E),x.__size=g,x.__cache={},this}function y(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){let v=x.target;v.removeEventListener("dispose",m);let g=a.indexOf(v.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var ls=class{constructor(t={}){let{canvas:e=ou(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=new Uint32Array(4),y=new Int32Array(4),m=null,d=null,x=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=Fn,this.toneMappingExposure=1;let g=this,T=!1,E=0,C=0,R=null,S=-1,M=null,I=new ce,B=new ce,k=null,G=new Ft(0),J=0,X=e.width,j=e.height,V=1,nt=null,dt=null,St=new ce(0,0,X,j),Ot=new ce(0,0,X,j),Qt=!1,Y=new os,et=!1,xt=!1,rt=new ae,At=new ae,It=new L,kt=new ce,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function ue(){return R===null?V:1}let F=n;function Be(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ct,!1),F===null){let U="webgl2";if(F=Be(U,w),F===null)throw Be(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Bt,zt,Et,ne,wt,A,b,O,$,K,q,vt,at,ft,Gt,Q,pt,Tt,Ct,mt,Ht,Ut,te,D;function st(){Bt=new vp(F),Bt.init(),Ut=new jm(F,Bt),zt=new pp(F,Bt,t,Ut),Et=new Zm(F,Bt),zt.reverseDepthBuffer&&f&&Et.buffers.depth.setReversed(!0),ne=new bp(F),wt=new Fm,A=new Km(F,Bt,Et,wt,zt,Ut,ne),b=new gp(g),O=new xp(g),$=new Ru(F),te=new dp(F,$),K=new Mp(F,$,ne,te),q=new Ep(F,K,$,ne),Ct=new wp(F,zt,A),Q=new mp(wt),vt=new Nm(g,b,O,Bt,zt,te,Q),at=new ig(g,wt),ft=new km,Gt=new Wm(Bt),Tt=new up(g,b,O,Et,q,p,l),pt=new Ym(g,q,zt),D=new sg(F,ne,zt,Et),mt=new fp(F,Bt,ne),Ht=new Sp(F,Bt,ne),ne.programs=vt.programs,g.capabilities=zt,g.extensions=Bt,g.properties=wt,g.renderLists=ft,g.shadowMap=pt,g.state=Et,g.info=ne}st();let W=new Ro(g,F);this.xr=W,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=Bt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Bt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(X,j,!1))},this.getSize=function(w){return w.set(X,j)},this.setSize=function(w,U,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,j=U,e.width=Math.floor(w*V),e.height=Math.floor(U*V),z===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(X*V,j*V).floor()},this.setDrawingBufferSize=function(w,U,z){X=w,j=U,V=z,e.width=Math.floor(w*z),e.height=Math.floor(U*z),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(St)},this.setViewport=function(w,U,z,H){w.isVector4?St.set(w.x,w.y,w.z,w.w):St.set(w,U,z,H),Et.viewport(I.copy(St).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(Ot)},this.setScissor=function(w,U,z,H){w.isVector4?Ot.set(w.x,w.y,w.z,w.w):Ot.set(w,U,z,H),Et.scissor(B.copy(Ot).multiplyScalar(V).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(w){Et.setScissorTest(Qt=w)},this.setOpaqueSort=function(w){nt=w},this.setTransparentSort=function(w){dt=w},this.getClearColor=function(w){return w.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(w=!0,U=!0,z=!0){let H=0;if(w){let N=!1;if(R!==null){let tt=R.texture.format;N=tt===il||tt===nl||tt===el}if(N){let tt=R.texture.type,ht=tt===Mn||tt===ni||tt===as||tt===Fi||tt===Qo||tt===tl,gt=Tt.getClearColor(),_t=Tt.getClearAlpha(),Rt=gt.r,Lt=gt.g,yt=gt.b;ht?(_[0]=Rt,_[1]=Lt,_[2]=yt,_[3]=_t,F.clearBufferuiv(F.COLOR,0,_)):(y[0]=Rt,y[1]=Lt,y[2]=yt,y[3]=_t,F.clearBufferiv(F.COLOR,0,y))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT),z&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ft.dispose(),Gt.dispose(),wt.dispose(),b.dispose(),O.dispose(),q.dispose(),te.dispose(),D.dispose(),vt.dispose(),W.dispose(),W.removeEventListener("sessionstart",xl),W.removeEventListener("sessionend",vl),Wn.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let w=ne.autoReset,U=pt.enabled,z=pt.autoUpdate,H=pt.needsUpdate,N=pt.type;st(),ne.autoReset=w,pt.enabled=U,pt.autoUpdate=z,pt.needsUpdate=H,pt.type=N}function ct(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pt(w){let U=w.target;U.removeEventListener("dispose",Pt),le(U)}function le(w){we(w),wt.remove(w)}function we(w){let U=wt.get(w).programs;U!==void 0&&(U.forEach(function(z){vt.releaseProgram(z)}),w.isShaderMaterial&&vt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,z,H,N,tt){U===null&&(U=oe);let ht=N.isMesh&&N.matrixWorld.determinant()<0,gt=gh(w,U,z,H,N);Et.setMaterial(H,ht);let _t=z.index,Rt=1;if(H.wireframe===!0){if(_t=K.getWireframeAttribute(z),_t===void 0)return;Rt=2}let Lt=z.drawRange,yt=z.attributes.position,Xt=Lt.start*Rt,ee=(Lt.start+Lt.count)*Rt;tt!==null&&(Xt=Math.max(Xt,tt.start*Rt),ee=Math.min(ee,(tt.start+tt.count)*Rt)),_t!==null?(Xt=Math.max(Xt,0),ee=Math.min(ee,_t.count)):yt!=null&&(Xt=Math.max(Xt,0),ee=Math.min(ee,yt.count));let ie=ee-Xt;if(ie<0||ie===1/0)return;te.setup(N,H,gt,z,_t);let Le,$t=mt;if(_t!==null&&(Le=$.get(_t),$t=Ht,$t.setIndex(Le)),N.isMesh)H.wireframe===!0?(Et.setLineWidth(H.wireframeLinewidth*ue()),$t.setMode(F.LINES)):$t.setMode(F.TRIANGLES);else if(N.isLine){let Mt=H.linewidth;Mt===void 0&&(Mt=1),Et.setLineWidth(Mt*ue()),N.isLineSegments?$t.setMode(F.LINES):N.isLineLoop?$t.setMode(F.LINE_LOOP):$t.setMode(F.LINE_STRIP)}else N.isPoints?$t.setMode(F.POINTS):N.isSprite&&$t.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)$t.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))$t.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Mt=N._multiDrawStarts,cn=N._multiDrawCounts,Zt=N._multiDrawCount,qe=_t?$.get(_t).bytesPerElement:1,ci=wt.get(H).currentProgram.getUniforms();for(let Ue=0;Ue<Zt;Ue++)ci.setValue(F,"_gl_DrawID",Ue),$t.render(Mt[Ue]/qe,cn[Ue])}else if(N.isInstancedMesh)$t.renderInstances(Xt,ie,N.count);else if(z.isInstancedBufferGeometry){let Mt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,cn=Math.min(z.instanceCount,Mt);$t.renderInstances(Xt,ie,cn)}else $t.render(Xt,ie)};function Jt(w,U,z){w.transparent===!0&&w.side===Ie&&w.forceSinglePass===!1?(w.side=De,w.needsUpdate=!0,Es(w,U,z),w.side=kn,w.needsUpdate=!0,Es(w,U,z),w.side=Ie):Es(w,U,z)}this.compile=function(w,U,z=null){z===null&&(z=w),d=Gt.get(z),d.init(U),v.push(d),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),w!==z&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();let H=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let tt=N.material;if(tt)if(Array.isArray(tt))for(let ht=0;ht<tt.length;ht++){let gt=tt[ht];Jt(gt,z,N),H.add(gt)}else Jt(tt,z,N),H.add(tt)}),v.pop(),d=null,H},this.compileAsync=function(w,U,z=null){let H=this.compile(w,U,z);return new Promise(N=>{function tt(){if(H.forEach(function(ht){wt.get(ht).currentProgram.isReady()&&H.delete(ht)}),H.size===0){N(w);return}setTimeout(tt,10)}Bt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Xe=null;function ln(w){Xe&&Xe(w)}function xl(){Wn.stop()}function vl(){Wn.start()}let Wn=new Kc;Wn.setAnimationLoop(ln),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(w){Xe=w,W.setAnimationLoop(w),w===null?Wn.stop():Wn.start()},W.addEventListener("sessionstart",xl),W.addEventListener("sessionend",vl),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,U,R),d=Gt.get(w,v.length),d.init(U),v.push(d),At.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(At),xt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,xt),m=ft.get(w,x.length),m.init(),x.push(m),W.enabled===!0&&W.isPresenting===!0){let tt=g.xr.getDepthSensingMesh();tt!==null&&Gr(tt,U,-1/0,g.sortObjects)}Gr(w,U,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(nt,dt),Vt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Vt&&Tt.addToRenderList(m,w),this.info.render.frame++,et===!0&&Q.beginShadows();let z=d.state.shadowsArray;pt.render(z,w,U),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,N=m.transmissive;if(d.setupLights(),U.isArrayCamera){let tt=U.cameras;if(N.length>0)for(let ht=0,gt=tt.length;ht<gt;ht++){let _t=tt[ht];Sl(H,N,w,_t)}Vt&&Tt.render(w);for(let ht=0,gt=tt.length;ht<gt;ht++){let _t=tt[ht];Ml(m,w,_t,_t.viewport)}}else N.length>0&&Sl(H,N,w,U),Vt&&Tt.render(w),Ml(m,w,U);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(g,w,U),te.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(d=v[v.length-1],et===!0&&Q.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Gr(w,U,z,H){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){H&&kt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(At);let ht=q.update(w),gt=w.material;gt.visible&&m.push(w,ht,gt,z,kt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){let ht=q.update(w),gt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),kt.copy(w.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),kt.copy(ht.boundingSphere.center)),kt.applyMatrix4(w.matrixWorld).applyMatrix4(At)),Array.isArray(gt)){let _t=ht.groups;for(let Rt=0,Lt=_t.length;Rt<Lt;Rt++){let yt=_t[Rt],Xt=gt[yt.materialIndex];Xt&&Xt.visible&&m.push(w,ht,Xt,z,kt.z,yt)}}else gt.visible&&m.push(w,ht,gt,z,kt.z,null)}}let tt=w.children;for(let ht=0,gt=tt.length;ht<gt;ht++)Gr(tt[ht],U,z,H)}function Ml(w,U,z,H){let N=w.opaque,tt=w.transmissive,ht=w.transparent;d.setupLightsView(z),et===!0&&Q.setGlobalState(g.clippingPlanes,z),H&&Et.viewport(I.copy(H)),N.length>0&&ws(N,U,z),tt.length>0&&ws(tt,U,z),ht.length>0&&ws(ht,U,z),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Sl(w,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new Sn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?vs:Mn,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));let tt=d.state.transmissionRenderTarget[H.id],ht=H.viewport||I;tt.setSize(ht.z,ht.w);let gt=g.getRenderTarget();g.setRenderTarget(tt),g.getClearColor(G),J=g.getClearAlpha(),J<1&&g.setClearColor(16777215,.5),g.clear(),Vt&&Tt.render(z);let _t=g.toneMapping;g.toneMapping=Fn;let Rt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),et===!0&&Q.setGlobalState(g.clippingPlanes,H),ws(w,z,H),A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let yt=0,Xt=U.length;yt<Xt;yt++){let ee=U[yt],ie=ee.object,Le=ee.geometry,$t=ee.material,Mt=ee.group;if($t.side===Ie&&ie.layers.test(H.layers)){let cn=$t.side;$t.side=De,$t.needsUpdate=!0,bl(ie,z,H,Le,$t,Mt),$t.side=cn,$t.needsUpdate=!0,Lt=!0}}Lt===!0&&(A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt))}g.setRenderTarget(gt),g.setClearColor(G,J),Rt!==void 0&&(H.viewport=Rt),g.toneMapping=_t}function ws(w,U,z){let H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,tt=w.length;N<tt;N++){let ht=w[N],gt=ht.object,_t=ht.geometry,Rt=H===null?ht.material:H,Lt=ht.group;gt.layers.test(z.layers)&&bl(gt,U,z,_t,Rt,Lt)}}function bl(w,U,z,H,N,tt){w.onBeforeRender(g,U,z,H,N,tt),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(g,U,z,H,w,tt),N.transparent===!0&&N.side===Ie&&N.forceSinglePass===!1?(N.side=De,N.needsUpdate=!0,g.renderBufferDirect(z,U,H,N,w,tt),N.side=kn,N.needsUpdate=!0,g.renderBufferDirect(z,U,H,N,w,tt),N.side=Ie):g.renderBufferDirect(z,U,H,N,w,tt),w.onAfterRender(g,U,z,H,N,tt)}function Es(w,U,z){U.isScene!==!0&&(U=oe);let H=wt.get(w),N=d.state.lights,tt=d.state.shadowsArray,ht=N.state.version,gt=vt.getParameters(w,N.state,tt,U,z),_t=vt.getProgramCacheKey(gt),Rt=H.programs;H.environment=w.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(w.isMeshStandardMaterial?O:b).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Rt===void 0&&(w.addEventListener("dispose",Pt),Rt=new Map,H.programs=Rt);let Lt=Rt.get(_t);if(Lt!==void 0){if(H.currentProgram===Lt&&H.lightsStateVersion===ht)return El(w,gt),Lt}else gt.uniforms=vt.getUniforms(w),w.onBeforeCompile(gt,g),Lt=vt.acquireProgram(gt,_t),Rt.set(_t,Lt),H.uniforms=gt.uniforms;let yt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(yt.clippingPlanes=Q.uniform),El(w,gt),H.needsLights=yh(w),H.lightsStateVersion=ht,H.needsLights&&(yt.ambientLightColor.value=N.state.ambient,yt.lightProbe.value=N.state.probe,yt.directionalLights.value=N.state.directional,yt.directionalLightShadows.value=N.state.directionalShadow,yt.spotLights.value=N.state.spot,yt.spotLightShadows.value=N.state.spotShadow,yt.rectAreaLights.value=N.state.rectArea,yt.ltc_1.value=N.state.rectAreaLTC1,yt.ltc_2.value=N.state.rectAreaLTC2,yt.pointLights.value=N.state.point,yt.pointLightShadows.value=N.state.pointShadow,yt.hemisphereLights.value=N.state.hemi,yt.directionalShadowMap.value=N.state.directionalShadowMap,yt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,yt.spotShadowMap.value=N.state.spotShadowMap,yt.spotLightMatrix.value=N.state.spotLightMatrix,yt.spotLightMap.value=N.state.spotLightMap,yt.pointShadowMap.value=N.state.pointShadowMap,yt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Lt,H.uniformsList=null,Lt}function wl(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Li.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function El(w,U){let z=wt.get(w);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function gh(w,U,z,H,N){U.isScene!==!0&&(U=oe),A.resetTextureUnits();let tt=U.fog,ht=H.isMeshStandardMaterial?U.environment:null,gt=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Vi,_t=(H.isMeshStandardMaterial?O:b).get(H.envMap||ht),Rt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Lt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),yt=!!z.morphAttributes.position,Xt=!!z.morphAttributes.normal,ee=!!z.morphAttributes.color,ie=Fn;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ie=g.toneMapping);let Le=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,$t=Le!==void 0?Le.length:0,Mt=wt.get(H),cn=d.state.lights;if(et===!0&&(xt===!0||w!==M)){let ze=w===M&&H.id===S;Q.setState(H,w,ze)}let Zt=!1;H.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==cn.state.version||Mt.outputColorSpace!==gt||N.isBatchedMesh&&Mt.batching===!1||!N.isBatchedMesh&&Mt.batching===!0||N.isBatchedMesh&&Mt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Mt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Mt.instancing===!1||!N.isInstancedMesh&&Mt.instancing===!0||N.isSkinnedMesh&&Mt.skinning===!1||!N.isSkinnedMesh&&Mt.skinning===!0||N.isInstancedMesh&&Mt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Mt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Mt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Mt.instancingMorph===!1&&N.morphTexture!==null||Mt.envMap!==_t||H.fog===!0&&Mt.fog!==tt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Q.numPlanes||Mt.numIntersection!==Q.numIntersection)||Mt.vertexAlphas!==Rt||Mt.vertexTangents!==Lt||Mt.morphTargets!==yt||Mt.morphNormals!==Xt||Mt.morphColors!==ee||Mt.toneMapping!==ie||Mt.morphTargetsCount!==$t)&&(Zt=!0):(Zt=!0,Mt.__version=H.version);let qe=Mt.currentProgram;Zt===!0&&(qe=Es(H,U,N));let ci=!1,Ue=!1,qi=!1,se=qe.getUniforms(),Qe=Mt.uniforms;if(Et.useProgram(qe.program)&&(ci=!0,Ue=!0,qi=!0),H.id!==S&&(S=H.id,Ue=!0),ci||M!==w){Et.buffers.depth.getReversed()?(rt.copy(w.projectionMatrix),cu(rt),hu(rt),se.setValue(F,"projectionMatrix",rt)):se.setValue(F,"projectionMatrix",w.projectionMatrix),se.setValue(F,"viewMatrix",w.matrixWorldInverse);let En=se.map.cameraPosition;En!==void 0&&En.setValue(F,It.setFromMatrixPosition(w.matrixWorld)),zt.logarithmicDepthBuffer&&se.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&se.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ue=!0,qi=!0)}if(N.isSkinnedMesh){se.setOptional(F,N,"bindMatrix"),se.setOptional(F,N,"bindMatrixInverse");let ze=N.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),se.setValue(F,"boneTexture",ze.boneTexture,A))}N.isBatchedMesh&&(se.setOptional(F,N,"batchingTexture"),se.setValue(F,"batchingTexture",N._matricesTexture,A),se.setOptional(F,N,"batchingIdTexture"),se.setValue(F,"batchingIdTexture",N._indirectTexture,A),se.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&se.setValue(F,"batchingColorTexture",N._colorsTexture,A));let Yi=z.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&Ct.update(N,z,qe),(Ue||Mt.receiveShadow!==N.receiveShadow)&&(Mt.receiveShadow=N.receiveShadow,se.setValue(F,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Qe.envMap.value=_t,Qe.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Qe.envMapIntensity.value=U.environmentIntensity),Ue&&(se.setValue(F,"toneMappingExposure",g.toneMappingExposure),Mt.needsLights&&_h(Qe,qi),tt&&H.fog===!0&&at.refreshFogUniforms(Qe,tt),at.refreshMaterialUniforms(Qe,H,V,j,d.state.transmissionRenderTarget[w.id]),Li.upload(F,wl(Mt),Qe,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Li.upload(F,wl(Mt),Qe,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&se.setValue(F,"center",N.center),se.setValue(F,"modelViewMatrix",N.modelViewMatrix),se.setValue(F,"normalMatrix",N.normalMatrix),se.setValue(F,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let ze=H.uniformsGroups;for(let En=0,Tn=ze.length;En<Tn;En++){let Tl=ze[En];D.update(Tl,qe),D.bind(Tl,qe)}}return qe}function _h(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function yh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,z){wt.get(w.texture).__webglTexture=U,wt.get(w.depthTexture).__webglTexture=z;let H=wt.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let z=wt.get(w);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,z=0){R=w,E=U,C=z;let H=!0,N=null,tt=!1,ht=!1;if(w){let _t=wt.get(w);if(_t.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(F.FRAMEBUFFER,null),H=!1;else if(_t.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(_t.__hasExternalTextures)A.rebindTextures(w,wt.get(w.texture).__webglTexture,wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let yt=w.depthTexture;if(_t.__boundDepthTexture!==yt){if(yt!==null&&wt.has(yt)&&(w.width!==yt.image.width||w.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Rt=w.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ht=!0);let Lt=wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?N=Lt[U][z]:N=Lt[U],tt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?N=wt.get(w).__webglMultisampledFramebuffer:Array.isArray(Lt)?N=Lt[z]:N=Lt,I.copy(w.viewport),B.copy(w.scissor),k=w.scissorTest}else I.copy(St).multiplyScalar(V).floor(),B.copy(Ot).multiplyScalar(V).floor(),k=Qt;if(Et.bindFramebuffer(F.FRAMEBUFFER,N)&&H&&Et.drawBuffers(w,N),Et.viewport(I),Et.scissor(B),Et.setScissorTest(k),tt){let _t=wt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,z)}else if(ht){let _t=wt.get(w.texture),Rt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,_t.__webglTexture,z||0,Rt)}S=-1},this.readRenderTargetPixels=function(w,U,z,H,N,tt,ht){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(gt=gt[ht]),gt){Et.bindFramebuffer(F.FRAMEBUFFER,gt);try{let _t=w.texture,Rt=_t.format,Lt=_t.type;if(!zt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-H&&z>=0&&z<=w.height-N&&F.readPixels(U,z,H,N,Ut.convert(Rt),Ut.convert(Lt),tt)}finally{let _t=R!==null?wt.get(R).__webglFramebuffer:null;Et.bindFramebuffer(F.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(w,U,z,H,N,tt,ht){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(gt=gt[ht]),gt){let _t=w.texture,Rt=_t.format,Lt=_t.type;if(!zt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-H&&z>=0&&z<=w.height-N){Et.bindFramebuffer(F.FRAMEBUFFER,gt);let yt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,yt),F.bufferData(F.PIXEL_PACK_BUFFER,tt.byteLength,F.STREAM_READ),F.readPixels(U,z,H,N,Ut.convert(Rt),Ut.convert(Lt),0);let Xt=R!==null?wt.get(R).__webglFramebuffer:null;Et.bindFramebuffer(F.FRAMEBUFFER,Xt);let ee=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await lu(F,ee,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,yt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,tt),F.deleteBuffer(yt),F.deleteSync(ee),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,z=0){w.isTexture!==!0&&(es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let H=Math.pow(2,-z),N=Math.floor(w.image.width*H),tt=Math.floor(w.image.height*H),ht=U!==null?U.x:0,gt=U!==null?U.y:0;A.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,ht,gt,N,tt),Et.unbindTexture()},this.copyTextureToTexture=function(w,U,z=null,H=null,N=0){w.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,z=null);let tt,ht,gt,_t,Rt,Lt,yt,Xt,ee,ie=w.isCompressedTexture?w.mipmaps[N]:w.image;z!==null?(tt=z.max.x-z.min.x,ht=z.max.y-z.min.y,gt=z.isBox3?z.max.z-z.min.z:1,_t=z.min.x,Rt=z.min.y,Lt=z.isBox3?z.min.z:0):(tt=ie.width,ht=ie.height,gt=ie.depth||1,_t=0,Rt=0,Lt=0),H!==null?(yt=H.x,Xt=H.y,ee=H.z):(yt=0,Xt=0,ee=0);let Le=Ut.convert(U.format),$t=Ut.convert(U.type),Mt;U.isData3DTexture?(A.setTexture3D(U,0),Mt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Mt=F.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Mt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let cn=F.getParameter(F.UNPACK_ROW_LENGTH),Zt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),qe=F.getParameter(F.UNPACK_SKIP_PIXELS),ci=F.getParameter(F.UNPACK_SKIP_ROWS),Ue=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ie.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ie.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_t),F.pixelStorei(F.UNPACK_SKIP_ROWS,Rt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Lt);let qi=w.isDataArrayTexture||w.isData3DTexture,se=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Qe=wt.get(w),Yi=wt.get(U),ze=wt.get(Qe.__renderTarget),En=wt.get(Yi.__renderTarget);Et.bindFramebuffer(F.READ_FRAMEBUFFER,ze.__webglFramebuffer),Et.bindFramebuffer(F.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let Tn=0;Tn<gt;Tn++)qi&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(w).__webglTexture,N,Lt+Tn),w.isDepthTexture?(se&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(U).__webglTexture,N,ee+Tn),F.blitFramebuffer(_t,Rt,tt,ht,yt,Xt,tt,ht,F.DEPTH_BUFFER_BIT,F.NEAREST)):se?F.copyTexSubImage3D(Mt,N,yt,Xt,ee+Tn,_t,Rt,tt,ht):F.copyTexSubImage2D(Mt,N,yt,Xt,ee+Tn,_t,Rt,tt,ht);Et.bindFramebuffer(F.READ_FRAMEBUFFER,null),Et.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else se?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Mt,N,yt,Xt,ee,tt,ht,gt,Le,$t,ie.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Mt,N,yt,Xt,ee,tt,ht,gt,Le,ie.data):F.texSubImage3D(Mt,N,yt,Xt,ee,tt,ht,gt,Le,$t,ie):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,yt,Xt,tt,ht,Le,$t,ie.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,yt,Xt,ie.width,ie.height,Le,ie.data):F.texSubImage2D(F.TEXTURE_2D,N,yt,Xt,tt,ht,Le,$t,ie);F.pixelStorei(F.UNPACK_ROW_LENGTH,cn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Zt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,qe),F.pixelStorei(F.UNPACK_SKIP_ROWS,ci),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ue),N===0&&U.generateMipmaps&&F.generateMipmap(Mt),Et.unbindTexture()},this.copyTextureToTexture3D=function(w,U,z=null,H=null,N=0){return w.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,z,H,N)},this.initRenderTarget=function(w){wt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Et.unbindTexture()},this.resetState=function(){E=0,C=0,R=null,Et.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}};var xr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cs=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},vr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uo,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ce=new L,hs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=en(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=en(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=en(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=en(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=en(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zi=class extends bn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wi,ji=new L,Ei=new L,Ti=new L,Ai=new ot,Qi=new ot,nh=new ae,Ys=new L,ts=new L,$s=new L,Ec=new ot,va=new ot,Tc=new ot,us=class extends be{constructor(t=new zi){if(super(),this.isSprite=!0,this.type="Sprite",wi===void 0){wi=new fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vr(e,5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute("position",new hs(n,3,0,!1)),wi.setAttribute("uv",new hs(n,2,3,!1))}this.geometry=wi,this.material=t,this.center=new ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ei.setFromMatrixScale(this.matrixWorld),nh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ti.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-Ti.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Zs(Ys.set(-.5,-.5,0),Ti,a,Ei,s,r),Zs(ts.set(.5,-.5,0),Ti,a,Ei,s,r),Zs($s.set(.5,.5,0),Ti,a,Ei,s,r),Ec.set(0,0),va.set(1,0),Tc.set(1,1);let o=t.ray.intersectTriangle(Ys,ts,$s,!1,ji);if(o===null&&(Zs(ts.set(-.5,.5,0),Ti,a,Ei,s,r),va.set(0,1),o=t.ray.intersectTriangle(Ys,$s,ts,!1,ji),o===null))return;let l=t.ray.origin.distanceTo(ji);l<t.near||l>t.far||e.push({distance:l,point:ji.clone(),uv:Un.getInterpolation(ji,Ys,ts,$s,Ec,va,Tc,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Zs(i,t,e,n,s,r){Ai.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Qi.x=r*Ai.x-s*Ai.y,Qi.y=s*Ai.x+r*Ai.y):Qi.copy(Ai),i.copy(t),i.x+=Qi.x,i.y+=Qi.y,i.applyMatrix4(nh)}var ds=class extends bn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ac=new ae,Io=new hr,Js=new ki,Ks=new L,Mr=class extends be{constructor(t=new fe,e=new ds){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),Js.radius+=r,t.ray.intersectsSphere(Js)===!1)return;Ac.copy(s).invert(),Io.copy(t.ray).applyMatrix4(Ac);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,y=p;_<y;_++){let m=c.getX(_);Ks.fromBufferAttribute(h,m),Cc(Ks,m,l,s,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,y=p;_<y;_++)Ks.fromBufferAttribute(h,_),Cc(Ks,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Cc(i,t,e,n,s,r,a){let o=Io.distanceSqToPoint(i);if(o<e){let l=new L;Io.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var fs=class extends Oe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ge=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,p=(a-u)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ot:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],a=[],o=new L,l=new ae;for(let p=0;p<=t;p++){let _=p/t;s[p]=this.getTangentAt(_,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Me(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Me(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ps=class extends Ge{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Po=class extends ps{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,p*=u,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var js=new L,Ma=new rl,Sa=new rl,ba=new rl,Lo=class extends Ge{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(js.subVectors(s[0],s[1]).add(s[0]),c=js);let h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(js.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=js),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),Ma.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,y,m),Sa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,y,m),ba.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,y,m)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Sa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ba.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Ma.calc(l),Sa.calc(l),ba.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Rc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function rg(i,t){let e=1-i;return e*e*t}function ag(i,t){return 2*(1-i)*i*t}function og(i,t){return i*i*t}function ss(i,t,e,n){return rg(i,t)+ag(i,e)+og(i,n)}function lg(i,t){let e=1-i;return e*e*e*t}function cg(i,t){let e=1-i;return 3*e*e*i*t}function hg(i,t){return 3*(1-i)*i*i*t}function ug(i,t){return i*i*i*t}function rs(i,t,e,n,s){return lg(i,t)+cg(i,e)+hg(i,n)+ug(i,s)}var Sr=class extends Ge{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rs(t,s.x,r.x,a.x,o.x),rs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Do=class extends Ge{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rs(t,s.x,r.x,a.x,o.x),rs(t,s.y,r.y,a.y,o.y),rs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},br=class extends Ge{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends Ge{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wr=class extends Ge{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ss(t,s.x,r.x,a.x),ss(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},No=class extends Ge{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ss(t,s.x,r.x,a.x),ss(t,s.y,r.y,a.y),ss(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Er=class extends Ge{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Rc(o,l.x,c.x,u.x,h.x),Rc(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},Ic=Object.freeze({__proto__:null,ArcCurve:Po,CatmullRomCurve3:Lo,CubicBezierCurve:Sr,CubicBezierCurve3:Do,EllipseCurve:ps,LineCurve:br,LineCurve3:Uo,QuadraticBezierCurve:wr,QuadraticBezierCurve3:No,SplineCurve:Er}),Fo=class extends Ge{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ic[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ic[s.type]().fromJSON(s))}return this}},Oo=class extends Fo{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new br(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new wr(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Sr(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Er(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new ps(t,e,n,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ko=class i extends fe{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Me(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,h=new L,f=new ot,p=new L,_=new L,y=new L,m=0,d=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-m,p.z=d*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(_)}for(let x=0;x<=e;x++){let v=n+x*u*s,g=Math.sin(v),T=Math.cos(v);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*g,h.y=t[E].y,h.z=t[E].x*T,a.push(h.x,h.y,h.z),f.x=x/e,f.y=E/(t.length-1),o.push(f.x,f.y);let C=l[3*E+0]*g,R=l[3*E+1],S=l[3*E+0]*T;c.push(C,R,S)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){let g=v+x*t.length,T=g,E=g+t.length,C=g+t.length+1,R=g+1;r.push(T,E,R),r.push(C,R,E)}this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("uv",new Yt(o,2)),this.setAttribute("normal",new Yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ms=class i extends ko{constructor(t=1,e=1,n=4,s=8){let r=new Oo;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},gs=class i extends fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new L,u=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let p=n+h/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(o,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ye=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],_=0,y=[],m=n/2,d=0;x(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(p,2));function x(){let g=new L,T=new L,E=0,C=(e-t)/n;for(let R=0;R<=r;R++){let S=[],M=R/r,I=M*(e-t)+t;for(let B=0;B<=s;B++){let k=B/s,G=k*l+o,J=Math.sin(G),X=Math.cos(G);T.x=I*J,T.y=-M*n+m,T.z=I*X,h.push(T.x,T.y,T.z),g.set(J,C,X).normalize(),f.push(g.x,g.y,g.z),p.push(k,1-M),S.push(_++)}y.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){let M=y[S][R],I=y[S+1][R],B=y[S+1][R+1],k=y[S][R+1];(t>0||S!==0)&&(u.push(M,I,k),E+=3),(e>0||S!==r-1)&&(u.push(I,B,k),E+=3)}c.addGroup(d,E,0),d+=E}function v(g){let T=_,E=new ot,C=new L,R=0,S=g===!0?t:e,M=g===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),_++;let I=_;for(let B=0;B<=s;B++){let G=B/s*l+o,J=Math.cos(G),X=Math.sin(G);C.x=S*X,C.y=m*M,C.z=S*J,h.push(C.x,C.y,C.z),f.push(0,M,0),E.x=J*.5+.5,E.y=X*.5*M+.5,p.push(E.x,E.y),_++}for(let B=0;B<s;B++){let k=T+B,G=I+B;g===!0?u.push(G,G+1,k):u.push(G+1,G,k),R+=3}c.addGroup(d,R,g===!0?1:2),d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hn=class i extends ye{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bo=class i extends fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let v=new L,g=new L,T=new L;for(let E=0;E<e.length;E+=3)p(e[E+0],v),p(e[E+1],g),p(e[E+2],T),l(v,g,T,x)}function l(x,v,g,T){let E=T+1,C=[];for(let R=0;R<=E;R++){C[R]=[];let S=x.clone().lerp(g,R/E),M=v.clone().lerp(g,R/E),I=E-R;for(let B=0;B<=I;B++)B===0&&R===E?C[R][B]=S:C[R][B]=S.clone().lerp(M,B/I)}for(let R=0;R<E;R++)for(let S=0;S<2*(E-R)-1;S++){let M=Math.floor(S/2);S%2===0?(f(C[R][M+1]),f(C[R+1][M]),f(C[R][M])):(f(C[R][M+1]),f(C[R+1][M+1]),f(C[R+1][M]))}}function c(x){let v=new L;for(let g=0;g<r.length;g+=3)v.x=r[g+0],v.y=r[g+1],v.z=r[g+2],v.normalize().multiplyScalar(x),r[g+0]=v.x,r[g+1]=v.y,r[g+2]=v.z}function u(){let x=new L;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];let g=m(x)/2/Math.PI+.5,T=d(x)/Math.PI+.5;a.push(g,1-T)}_(),h()}function h(){for(let x=0;x<a.length;x+=6){let v=a[x+0],g=a[x+2],T=a[x+4],E=Math.max(v,g,T),C=Math.min(v,g,T);E>.9&&C<.1&&(v<.2&&(a[x+0]+=1),g<.2&&(a[x+2]+=1),T<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function p(x,v){let g=x*3;v.x=t[g+0],v.y=t[g+1],v.z=t[g+2]}function _(){let x=new L,v=new L,g=new L,T=new L,E=new ot,C=new ot,R=new ot;for(let S=0,M=0;S<r.length;S+=9,M+=6){x.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),g.set(r[S+6],r[S+7],r[S+8]),E.set(a[M+0],a[M+1]),C.set(a[M+2],a[M+3]),R.set(a[M+4],a[M+5]),T.copy(x).add(v).add(g).divideScalar(3);let I=m(T);y(E,M+0,x,I),y(C,M+2,v,I),y(R,M+4,g,I)}}function y(x,v,g,T){T<0&&x.x===1&&(a[v]=x.x-1),g.x===0&&g.z===0&&(a[v]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},_s=class i extends Bo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Tr=class i extends fe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=t,f=(e-t)/s,p=new L,_=new ot;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let d=r+m/n*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,u.push(_.x,_.y)}h+=f}for(let y=0;y<s;y++){let m=y*(n+1);for(let d=0;d<n;d++){let x=d+m,v=x,g=x+n+1,T=x+n+2,E=x+1;o.push(v,g,E),o.push(g,T,E)}}this.setIndex(o),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var xe=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new L,f=new L,p=[],_=[],y=[],m=[];for(let d=0;d<=n;d++){let x=[],v=d/n,g=0;d===0&&a===0?g=.5/e:d===n&&l===Math.PI&&(g=-.5/e);for(let T=0;T<=e;T++){let E=T/e;h.x=-t*Math.cos(s+E*r)*Math.sin(a+v*o),h.y=t*Math.cos(a+v*o),h.z=t*Math.sin(s+E*r)*Math.sin(a+v*o),_.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(E+g,1-v),x.push(c++)}u.push(x)}for(let d=0;d<n;d++)for(let x=0;x<e;x++){let v=u[d][x+1],g=u[d][x],T=u[d+1][x],E=u[d+1][x+1];(d!==0||a>0)&&p.push(v,g,E),(d!==n-1||l<Math.PI)&&p.push(g,T,E)}this.setIndex(p),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vn=class i extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new L,h=new L,f=new L;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){let y=_/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(y),h.y=(t+e*Math.cos(m))*Math.sin(y),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){let y=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,d=(s+1)*(p-1)+_,x=(s+1)*p+_;a.push(y,m,x),a.push(m,d,x)}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var qt=class extends bn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qc,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Qs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function dg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Hi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zo=class extends Hi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Il,endingEnd:Il}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pl:r=t,o=2*e-n;break;case Ll:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pl:a=t,l=2*n-e;break;case Ll:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),y=_*_,m=y*_,d=-f*m+2*f*y-f*_,x=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*_+1,v=(-1-p)*m+(1.5+p)*y+.5*_,g=p*m-p*y;for(let T=0;T!==o;++T)r[T]=d*a[u+T]+x*a[c+T]+v*a[l+T]+g*a[h+T];return r}},Ho=class extends Hi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}},Vo=class extends Hi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},je=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qs(e,this.TimeBufferType),this.values=Qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qs(t.times,Array),values:Qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case rr:e=this.InterpolantFactoryMethodDiscrete;break;case ho:e=this.InterpolantFactoryMethodLinear;break;case Xr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return Xr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&dg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let h=o*n,f=h-n,p=h+n;for(let _=0;_!==n;++_){let y=e[h+_];if(y!==e[f+_]||y!==e[p+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[h+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};je.prototype.TimeBufferType=Float32Array;je.prototype.ValueBufferType=Float32Array;je.prototype.DefaultInterpolation=ho;var ri=class extends je{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=rr;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends je{};Go.prototype.ValueTypeName="color";var Wo=class extends je{};Wo.prototype.ValueTypeName="number";var Xo=class extends Hi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ar=class extends je{InterpolantFactoryMethodLinear(t){return new Xo(this.times,this.values,this.getValueSize(),t)}};Ar.prototype.ValueTypeName="quaternion";Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends je{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=rr;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends je{};qo.prototype.ValueTypeName="vector";var Yo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}},fg=new Yo,$o=class{constructor(t){this.manager=t!==void 0?t:fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};$o.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cr=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ys=class extends Cr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wa=new ae,Pc=new L,Lc=new L,Zo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pc),Lc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lc),e.updateMatrixWorld(),wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Jo=class extends Zo{constructor(){super(new gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xs=class extends Cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Jo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var al="\\[\\]\\.:\\/",pg=new RegExp("["+al+"]","g"),ol="[^"+al+"]",mg="[^"+al.replace("\\.","")+"]",gg=/((?:WC+[\/:])*)/.source.replace("WC",ol),_g=/(WCOD+)?/.source.replace("WCOD",mg),yg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ol),xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ol),vg=new RegExp("^"+gg+_g+yg+xg+"$"),Mg=["material","materials","bones","map"],Ko=class{constructor(t,e,n){let s=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pg,"")}static parseTrackName(t){let e=vg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=Ko;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function sh(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new fe,c=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let _=0;_<p.count;++_)h.push(p.getX(_)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=ih(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let p=[];for(let y=0;y<a[u].length;++y)p.push(a[u][y][f]);let _=ih(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function ih(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new Se(a,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let f=0,p=u.count;f<p;f++)for(let _=0;_<e;_++){let y=u.getComponent(f,_);o.setComponent(f+h,_,y)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}function rh(i){let t=i>>>0||1,e=()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return e.int=n=>Math.floor(e()*n),e.range=(n,s)=>n+e()*(s-n),e.pick=n=>n[e.int(n.length)],e}var P={map:{size:1200,snowPiles:40,pileRadius:15,pileCooldown:60,pileRespawnSec:45},player:{maxHp:100,radius:12,speed:150,coverSpeedMul:.6,jumpVel:46,gravity:100,jumpDodgeZ:5},items:{healSpawn:10,healAmount:40,healRespawnSec:50,shieldSpawn:6,shieldHits:4,shieldRespawnSec:60,pickupRange:26,pill:{spawn:14,respawnSec:45,durationSec:20,speedMul:1.35,powerMul:1.5,craftMul:.5,mgChance:.45,mgAmmo:75,mgFireInterval:.12,mgSpeed:540}},caps:{spawn:22,min:2,max:7,pickupRange:26,placeRewards:[30,20,10]},shop:{hardtack:{id:"hardtack",cost:10,name:"\uAC74\uBE75 \uD328\uD0A4\uC9C0",desc:"\uBA39\uC73C\uBA74 \uCCB4\uB825 +20, \uCD1D 3\uD68C \uC0AC\uC6A9",emoji:"\u{1F36A}",heals:3,healAmount:20},charge:{id:"charge",cost:40,name:"\uB3CC\uACA9 \uBB3C\uC57D",desc:"15\uCD08 \uBB34\uC801 \uB3CC\uACA9! \uBC15\uCE58\uAE30\uB85C \uC801\uC744 20m \uB0A0\uB824\uBC84\uB9BC",emoji:"\u2697\uFE0F",durationSec:15,ramRange:30,knockback:800,ramDamage:24,speedMul:1.6},sleepgun:{id:"sleepgun",cost:40,name:"\uC218\uBA74\uCD1D",desc:"10\uBC1C \u2014 \uB9DE\uC740 \uC801\uC740 5\uCD08\uAC04 \uC7A0\uB4E6",emoji:"\u{1F52B}",sleepSec:5,speed:620,range:500,count:10},jetpack:{id:"jetpack",cost:60,name:"\uC62C\uB4DC \uC81C\uD2B8\uD329",desc:"\uC810\uD504\uD0A4\uB97C \uB204\uB974\uB294 \uB3D9\uC548 \uBE44\uD589 (\uC5F0\uB8CC 60\uCD08, \uD0A4 3\uBC30 \uB192\uC774)",emoji:"\u{1F680}",fuelSec:60,maxHeightMul:3,riseVel:55},grenade:{id:"grenade",cost:30,name:"\uB208 \uC218\uB958\uD0C4 \xD75",desc:"5\uAC1C \uBB36\uC74C! \uB358\uC9C0\uBA74 \uBC18\uACBD \uD45C\uC2DC \uD6C4 3\uCD08 \uB4A4 \uD3ED\uBC1C (\uBC18\uACBD 90, \uD53C\uD574 40)",emoji:"\u{1F4A3}",fuseSec:3,radius:90,damage:40,throwRange:260,count:5},club:{id:"club",cost:20,name:"\uBABD\uB465\uC774",desc:"\uADFC\uC811 \uACF5\uACA9(F\uD0A4)\uC774 \uAC15\uD574\uC9C4\uB2E4 \u2014 \uC8FC\uBA39 10 \u2192 \uBABD\uB465\uC774 26 \uD53C\uD574",emoji:"\u{1F3CF}"},rocket:{id:"rocket",cost:50,name:"\uD3ED\uCD95 \xD75",desc:"\uC804\uBC29 25m\uB97C \uB0A0\uC544\uAC00 \uCC29\uD0C4 \uC989\uC2DC \uD3ED\uBC1C (\uBC18\uACBD 70, \uD53C\uD574 45)",emoji:"\u{1F9E8}",count:5,flyRange:250,radius:70,damage:45,speed:420}},melee:{range:36,arcDot:.35,cooldownSec:.6,fistDamage:10,clubDamage:26,clubKnockback:220,clubFieldSpawn:4},pads:{radius:14,launchVel:100,carryMul:2,spots:[[.5,.5],[.28,.28],[.72,.28],[.28,.72],[.72,.72],[.5,.15],[.85,.5],[.5,.85],[.15,.5]]},towers:{radius:22,height:26,spots:[[.44,.5],[.22,.28],[.78,.28],[.22,.72],[.78,.72],[.5,.09]]},craft:{seconds:3,yield:10,interactRange:34},throw:{minChargeMs:200,maxChargeMs:1500,minRange:100,maxRange:400,speed:320,damage:14,coverDamageMul:.5,radius:6,hitChanceBase:.5},wall:{cost:4,durability:6,maxPerPlayer:2,decaySec:20,len:40,dist:28,height:26},decoy:{cost:5,maxPerPlayer:2,lureSec:3,dist:40},zone:{firstShrinkSec:75,intervalSec:48,dps:10,finalRadius:40,startRadiusFactor:.72,shrinkStep:.26},match:{total:20,npc:19,warmupSec:45,engageRange:170,fleeRange:130,totalOptions:[10,20,30,40]},npcDifficulty:{easy:{accuracy:.34,reactSec:3.4,craftThreshold:5,aggro:.07,dodge:.15,strafe:.3,seekItem:.3},normal:{accuracy:.42,reactSec:2.8,craftThreshold:6,aggro:.09,dodge:.3,strafe:.55,seekItem:.55},hard:{accuracy:.6,reactSec:2,craftThreshold:7,aggro:.15,dodge:.5,strafe:.8,seekItem:.8}},session:{targetMinSec:480,targetMaxSec:720}},ll=[{n:1,title:"\uB9C9 1 \u2014 \uB099\uD558\uC640 \uCCAB \uB208\uBB49\uCE58 \uC81C\uC791",untilSurvivors:20},{n:2,title:"\uB9C9 2 \u2014 \uB208\uBB49\uCE58 \uAD50\uC804\uACFC \uC7AC\uBCF4\uAE09",untilSurvivors:15},{n:3,title:"\uB9C9 3 \u2014 \uC124\uBCBD \uAC74\uC124\uACFC \uC81C\uC791 \uC5C4\uD3D0",untilSurvivors:10},{n:4,title:"\uB9C9 4 \u2014 \uC881\uC544\uC9C0\uB294 \uB208\uBCF4\uB77C \uAD6C\uC5ED",untilSurvivors:5},{n:5,title:"\uB9C9 5 \u2014 \uCD5C\uD6C4\uC758 \uB208\uC2F8\uC6C0",untilSurvivors:1}];function cl(i){for(let t of ll)if(i>=t.untilSurvivors)return t;return ll[ll.length-1]}var Gn={jack:{id:"jack",skin:"jack",name:"\uC544\uC774\uC5B8 \uC7AD \u2014 \uBC38\uB7F0\uC2A4",desc:"\uADE0\uD615 \uC7A1\uD78C \uB9CC\uB2A5\uD615. \uBAA8\uB4E0 \uB2A5\uB825\uCE58 \uD45C\uC900.",throwRangeMul:1,damageMul:1,speedMul:1,craftSecMul:1,maxHpMul:1},white:{id:"white",skin:"white",name:"\uD654\uC774\uD2B8 \uC544\uC774 \u2014 \uC800\uACA9\uC218",desc:"\uD22C\uCC99 \uC0AC\uAC70\uB9AC +30%, \uD53C\uD574 +15%. \uB300\uC2E0 \uCCB4\uB825 -20%.",throwRangeMul:1.3,damageMul:1.15,speedMul:1,craftSecMul:1,maxHpMul:.8},bear:{id:"bear",skin:"bear",name:"\uBE45 \uBCA0\uC5B4 \u2014 \uD0F1\uCEE4",desc:"\uCCB4\uB825 +30%, \uC81C\uC791 20% \uBE60\uB984. \uB300\uC2E0 \uC774\uB3D9 -15%, \uC0AC\uAC70\uB9AC -10%.",throwRangeMul:.9,damageMul:1,speedMul:.85,craftSecMul:.8,maxHpMul:1.3},dash:{id:"dash",skin:"dash",name:"\uC2A4\uB178\uC6B0 \uB7EC\uB108 \u2014 \uC9C8\uC8FC\uD615",desc:"\uC774\uB3D9 +25%. \uB300\uC2E0 \uD53C\uD574 -15%.",throwRangeMul:1,damageMul:.85,speedMul:1.25,craftSecMul:1,maxHpMul:1}};var ve=i=>i._uid++;function Ms(i=42,t={}){let e=rh(i),n={seed:i,rng:e,_uid:1,t:0,phase:"drop",over:!1,won:!1,winner:null,difficulty:t.difficulty||"normal",players:[],snowballs:[],walls:[],decoys:[],piles:[],obstacles:[],corpses:[],pickups:[],caps:[],grenades:[],zone:{cx:P.map.size/2,cy:P.map.size/2,radius:P.map.size*P.zone.startRadiusFactor,nextShrink:P.zone.firstShrinkSec,shrinks:0},events:[],placementOrder:[],kills:{},_humanId:t.humanId??1,stats:{craftAttempts:0,craftDone:0,craftCancel:0,throws:0,hits:0,wallsBuilt:0,decoys:0,zoneDamageTicks:0,zoneDamageTotal:0,totalDamage:0}};return Ig(n),Rg(n),Tg(n),Ag(n),bg(n),wg(n),Pg(n,t),t.itemId&&Eg(n,an(n),t.itemId),pl(n,an(n),t.classId),n}function bg(i){let t=P.map.size;for(let e=0;e<P.items.healSpawn;e++)i.pickups.push({id:ve(i),kind:"heal",x:i.rng.range(80,t-80),y:i.rng.range(80,t-80),takenUntil:0});for(let e=0;e<P.items.shieldSpawn;e++)i.pickups.push({id:ve(i),kind:"shield",x:i.rng.range(80,t-80),y:i.rng.range(80,t-80),takenUntil:0});for(let e=0;e<P.items.pill.spawn;e++)i.pickups.push({id:ve(i),kind:"pill",x:i.rng.range(80,t-80),y:i.rng.range(80,t-80),takenUntil:0,buff:null});for(let e of i.pickups)e.kind==="pill"&&(e.buff=hl(i));for(let e=0;e<P.melee.clubFieldSpawn;e++)i.pickups.push({id:ve(i),kind:"club",x:i.rng.range(80,t-80),y:i.rng.range(80,t-80),takenUntil:0})}function wg(i){let t=P.map.size;for(let e=0;e<P.caps.spawn;e++)i.caps.push({id:ve(i),x:i.rng.range(70,t-70),y:i.rng.range(70,t-70),amount:Math.floor(i.rng.range(P.caps.min,P.caps.max+1)),takenUntil:0,dropped:!1})}function ul(i,t){for(let e of i.caps){if(e.takenUntil>i.t||e.gone||Math.hypot(e.x-t.x,e.y-t.y)>P.caps.pickupRange)continue;let n=e.amount;return t.caps=(t.caps||0)+n,e.gone=!0,i.events.push({t:i.t,type:"caps",id:t.id,amount:n}),n}return 0}function Eg(i,t,e){if(!t||!P.shop[e])return!1;if(e==="club")return t.hasClub=!0,!0;let n=P.shop[e];return t.item={id:e,usesLeft:n.heals||n.count||1},e==="jetpack"&&(t.jetFuel=n.fuelSec),!0}function oh(i,t,e=t.aim){if(!t.alive||t.crafting||t.sleepUntil>i.t||t.meleeCdUntil!=null&&i.t<t.meleeCdUntil)return null;t.meleeCdUntil=i.t+P.melee.cooldownSec;let n=Math.cos(e),s=Math.sin(e),r=null,a=P.melee.range;for(let l of i.players){if(!l.alive||l.id===t.id)continue;let c=l.x-t.x,u=l.y-t.y,h=Math.hypot(c,u);h>P.melee.range||h>.001&&(c*n+u*s)/h<P.melee.arcDot||h<a+.001&&(a=h,r=l)}if(i.events.push({t:i.t,type:"swing",id:t.id,club:!!t.hasClub,hit:!!r}),!r)return null;let o=t.hasClub?P.melee.clubDamage:P.melee.fistDamage;if(Lr(i,r,o,t.id),r.crafting&&oi(i,r,"melee"),t.hasClub&&r.alive){let l=Math.atan2(r.y-t.y,r.x-t.x);r.kbVx=Math.cos(l)*P.melee.clubKnockback,r.kbVy=Math.sin(l)*P.melee.clubKnockback}return r.alive||(i.kills[t.id]=(i.kills[t.id]||0)+1,i.events.push({t:i.t,type:"kill",by:t.id,victim:r.id})),r}function lh(i,t,e=t.aim){if(!t.alive||t.crafting||!t.item||t.item.usesLeft<=0)return null;let n=P.shop[t.item.id];if(t.item.id==="hardtack"){let s=t.maxHp||P.player.maxHp;return t.hp>=s?null:(on(i,t,Math.min(s,t.hp+n.healAmount)),t.item.usesLeft--,i.events.push({t:i.t,type:"item",id:t.id,item:"hardtack",left:t.item.usesLeft}),t.item.usesLeft<=0&&(t.item=null),{used:"hardtack"})}if(t.item.id==="charge")return t.chargeUntil=i.t+n.durationSec,t.item.usesLeft=0,t.item=null,i.events.push({t:i.t,type:"item",id:t.id,item:"charge"}),{used:"charge"};if(t.item.id==="sleepgun"){let s={id:ve(i),ownerId:t.id,isNpc:t.isNpc,x:t.x,y:t.y,dirX:Math.cos(e),dirY:Math.sin(e),traveled:0,range:n.range,speed:n.speed,dead:!1,dmgMul:0,sleep:n.sleepSec,flat:!0,high:t.z>=P.towers.height-2};return i.snowballs.push(s),t.item.usesLeft--,i.events.push({t:i.t,type:"item",id:t.id,item:"sleepgun",left:t.item.usesLeft}),t.item.usesLeft<=0&&(t.item=null),{used:"sleepgun",sb:s,left:t.item?t.item.usesLeft:0}}if(t.item.id==="grenade"){let s=Math.min(n.throwRange,260),r=t.x+Math.cos(e)*s,a=t.y+Math.sin(e)*s,o=.9;return i.grenades.push({id:ve(i),ownerId:t.id,sx:t.x,sy:t.y,x:t.x,y:t.y,z:ah,lx:Math.max(0,Math.min(P.map.size,r)),ly:Math.max(0,Math.min(P.map.size,a)),landAt:i.t+o,explodeAt:i.t+o+n.fuseSec,radius:n.radius,damage:n.damage,thrownAt:i.t}),t.item.usesLeft--,i.events.push({t:i.t,type:"item",id:t.id,item:"grenade",left:t.item.usesLeft}),t.item.usesLeft<=0&&(t.item=null),{used:"grenade",left:t.item?t.item.usesLeft:0}}if(t.item.id==="rocket"){let s=P.shop.rocket,r=s.flyRange,a=r/s.speed;return i.grenades.push({id:ve(i),ownerId:t.id,rocket:!0,sx:t.x,sy:t.y,x:t.x,y:t.y,z:ah,lx:Math.max(0,Math.min(P.map.size,t.x+Math.cos(e)*r)),ly:Math.max(0,Math.min(P.map.size,t.y+Math.sin(e)*r)),landAt:i.t+a,explodeAt:i.t+a,radius:s.radius,damage:s.damage,thrownAt:i.t,flightSec:a}),t.item.usesLeft--,i.events.push({t:i.t,type:"item",id:t.id,item:"rocket",left:t.item.usesLeft}),t.item.usesLeft<=0&&(t.item=null),{used:"rocket",left:t.item?t.item.usesLeft:0}}return null}var ah=14;function wn(i,t){return t.chargeUntil!=null&&t.chargeUntil>i.t}function Tg(i){let t=P.map.size;i.pads=P.pads.spots.map(([e,n])=>({id:ve(i),x:e*t,y:n*t,r:P.pads.radius}))}function Ag(i){let t=P.map.size;i.towers=P.towers.spots.map(([e,n])=>({id:ve(i),x:e*t,y:n*t,r:P.towers.radius,h:P.towers.height}))}function Wi(i,t,e){for(let n of i.towers||[])if(Math.hypot(n.x-t,n.y-e)<=n.r)return n.h;return 0}function hl(i){let t=P.items.pill;if(i.rng()<t.mgChance)return{kind:"mg",ammo:t.mgAmmo};let e=i.rng();return e<1/3?{kind:"speed",mul:t.speedMul}:e<2/3?{kind:"power",mul:t.powerMul}:{kind:"craft",mul:t.craftMul}}function Cg(i,t,e){return e.kind==="mg"?t.mg={ammo:e.ammo,until:i.t+P.items.pill.durationSec,fireCd:0}:t.buff={kind:e.kind,mul:e.mul,until:i.t+P.items.pill.durationSec},i.events.push({t:i.t,type:"pill",id:t.id,buff:e.kind}),e}function dl(i,t,e){return t.buff&&t.buff.kind===e&&t.buff.until>i.t?t.buff.mul:1}function fl(i,t,e){let n=P.items.pill;if(!t.alive||t.crafting||!t.mg||t.mg.until<=i.t||t.mg.ammo<=0||t.mg.fireCd>0)return null;t.mg.ammo--,t.mg.fireCd=n.mgFireInterval;let s={id:ve(i),ownerId:t.id,isNpc:t.isNpc,x:t.x,y:t.y,dirX:Math.cos(e),dirY:Math.sin(e),traveled:0,range:P.throw.maxRange*1.1,speed:n.mgSpeed,dead:!1,dmgMul:t.mods&&t.mods.damage||1,flat:!0,high:t.z>=P.towers.height-2};return i.snowballs.push(s),i.stats.throws++,t.mg.ammo<=0&&(t.mg=null),s}function pl(i,t,e){if(!t)return;let n=Gn[e]||Gn.jack;t.classId=n.id,t.skin=t.isHuman?n.skin:t.skin,t.mods={throwRange:n.throwRangeMul,damage:n.damageMul,speed:n.speedMul,craftSec:n.craftSecMul},t.hp=Math.round(P.player.maxHp*n.maxHpMul),t.maxHp=t.hp}function Dr(i,t){for(let e of i.pickups)if(!(e.takenUntil>i.t)&&!(Math.hypot(e.x-t.x,e.y-t.y)>P.items.pickupRange)){if(e.kind==="heal"){let n=t.maxHp||P.player.maxHp;if(t.hp>=n)continue;return on(i,t,Math.min(n,t.hp+P.items.healAmount)),e.takenUntil=i.t+P.items.healRespawnSec,e.x=i.rng.range(80,P.map.size-80),e.y=i.rng.range(80,P.map.size-80),i.events.push({t:i.t,type:"heal",id:t.id}),"heal"}if(e.kind==="shield"){if(t.shieldHits>0)continue;return t.shieldHits=P.items.shieldHits,e.takenUntil=i.t+P.items.shieldRespawnSec,e.x=i.rng.range(80,P.map.size-80),e.y=i.rng.range(80,P.map.size-80),i.events.push({t:i.t,type:"shield",id:t.id}),"shield"}if(e.kind==="club"){if(t.hasClub)continue;return t.hasClub=!0,e.takenUntil=i.t+9e9,i.events.push({t:i.t,type:"club",id:t.id}),"club"}if(e.kind==="pill"){let n=Cg(i,t,e.buff||hl(i));return e.takenUntil=i.t+P.items.pill.respawnSec,e.x=i.rng.range(80,P.map.size-80),e.y=i.rng.range(80,P.map.size-80),e.buff=hl(i),{kind:"pill",buff:n}}}return null}function Rg(i){let t=P.map.size,e=[{kind:"rock",n:14,rMin:14,rMax:26},{kind:"tree",n:22,rMin:8,rMax:12},{kind:"cabin",n:6,rMin:30,rMax:40}];for(let n of e)for(let s=0;s<n.n;s++)i.obstacles.push({id:ve(i),kind:n.kind,x:i.rng.range(70,t-70),y:i.rng.range(70,t-70),r:i.rng.range(n.rMin,n.rMax),yaw:i.rng.range(0,Math.PI*2)})}function Ig(i){let t=P.map.size;for(let e=0;e<P.map.snowPiles;e++)i.piles.push({id:ve(i),x:i.rng.range(60,t-60),y:i.rng.range(60,t-60),cooldownUntil:0})}function Pg(i,t){let e=t.total??P.match.total,n=P.map.size,s=["jack","white","bear"],r=5,a=Math.ceil(e/r),o=n/r,l=n/a,c=[];for(let u=0;u<a;u++)for(let h=0;h<r;h++)c.push([h,u]);for(let u=0;u<e;u++){let h=!t.allNpc&&u===0,f=i._humanId!=null&&h?i._humanId:ve(i),[p,_]=c[u%c.length],y={id:f,isHuman:h,isNpc:!h,name:h?"\uC544\uC774\uC5B8 \uC7AD":`[\uBD07] ${["\uADF8\uB808\uC774","\uD504\uB85C\uC2A4\uD2B8","\uC544\uC774\uC2DC\uD074","\uBE14\uB9AC\uC790\uB4DC"][u%4]}-${u}`,skin:h?"jack":u%3===0?"bot":s[u%3],hp:P.player.maxHp,alive:!0,x:Math.min(n-40,Math.max(40,p*o+o/2+i.rng.range(-o*.3,o*.3))),y:Math.min(n-40,Math.max(40,_*l+l/2+i.rng.range(-l*.3,l*.3))),aim:i.rng.range(0,Math.PI*2),snowballs:0,crafting:!1,craftTimer:0,craftPile:null,cover:!1,walls:0,decoys:0,maxHp:P.player.maxHp,shieldHits:0,z:0,vz:0,mvx:0,mvy:0,padVx:0,padVy:0,caps:0,item:null,jetFuel:0,jetHold:!1,sleepUntil:0,chargeUntil:0,kbVx:0,kbVy:0,mods:{throwRange:1,damage:1,speed:1,craftSec:1},npc:h?null:{state:"PATROL",target:null,reactTimer:0,moveTx:0,moveTy:0,wantCraft:!1,aimError:0},diff:i.difficulty};i.kills[f]=0,i.players.push(y)}}function on(i,t,e){let n=Math.max(0,Math.min(t.maxHp||P.player.maxHp,e)),s=t.hp-n;return t.hp=n,n<=0&&t.alive&&Lg(i,t),s}function Lr(i,t,e,n=null){if(wn(i,t))return 0;if(t.shieldHits>0)return t.shieldHits--,i.events.push({t:i.t,type:"shieldBlock",id:t.id,left:t.shieldHits}),0;let s=t.cover?e*P.throw.coverDamageMul:e,r=t.hp;return on(i,t,t.hp-s),i.stats.totalDamage+=r-t.hp,r-t.hp}function Ur(i,t){return i.snowballs=Math.max(0,i.snowballs+t),i.snowballs}function Nr(i,t){if(t.sleepUntil>i.t)return!1;let e=Wi(i,t.x,t.y);return!t.alive||t.crafting||t.z>e+.01?!1:(t.vz=P.player.jumpVel,t.z=e+.011,i.events.push({t:i.t,type:"jump",id:t.id}),!0)}function Lg(i,t){t.alive&&(t.alive=!1,t.crafting=!1,t.caps>0&&(i.caps.push({id:ve(i),x:t.x,y:t.y,amount:t.caps,takenUntil:0,dropped:!0}),t.caps=0),i.placementOrder.push(t.id),i.corpses.push({id:t.id,x:t.x,y:t.y,skin:t.skin,name:t.name,at:i.t,yaw:t.aim}),i.events.push({t:i.t,type:"eliminate",id:t.id,isNpc:t.isNpc,place:Xi(i)+1}),Dg(i))}function Xi(i){return i.players.filter(t=>t.alive).length}function an(i){return i.players.find(t=>t.id===i._humanId)}function Dg(i){let t=i.players.filter(e=>e.alive);if(t.length<=1){i.phase="over",i.over=!0,i.winner=t[0]||null,i.winner&&i.placementOrder.push(i.winner.id);let e=an(i);i.won=!!(i.winner&&e&&i.winner.id===e.id);let n=i.placementOrder;(P.caps.placeRewards||[]).forEach((s,r)=>{let a=n[n.length-1-r];if(a==null)return;let o=i.players.find(l=>l.id===a);o&&(o.caps=(o.caps||0)+s,i.events.push({t:i.t,type:"placeReward",id:a,place:r+1,amount:s}))}),i.events.push({t:i.t,type:"gameover",winnerId:i.winner?i.winner.id:null,humanWon:i.won})}}function Fr(i,t,e=P.craft.interactRange){let n=null,s=e;for(let r of i.piles){if(r.cooldownUntil>i.t)continue;let a=Math.hypot(r.x-t.x,r.y-t.y);a<=s&&(s=a,n=r)}return n}function Or(i,t){if(!t.alive||t.crafting)return!1;let e=Fr(i,t);return e?(t.crafting=!0,t.craftTimer=P.craft.seconds*(t.mods&&t.mods.craftSec||1)*dl(i,t,"craft"),t.craftTotal=t.craftTimer,t.craftPile=e.id,i.stats.craftAttempts++,i.events.push({t:i.t,type:"craftStart",id:t.id}),!0):!1}function oi(i,t,e="move"){t.crafting&&(t.crafting=!1,t.craftTimer=0,t.craftPile=null,i.stats.craftCancel++,i.events.push({t:i.t,type:"craftCancel",id:t.id,reason:e}))}function Ug(i,t){Ur(t,P.craft.yield);let e=i.piles.find(n=>n.id===t.craftPile);e&&(e.cooldownUntil=i.t+P.map.pileCooldown),t.crafting=!1,t.craftTimer=0,t.craftPile=null,i.stats.craftDone++,i.events.push({t:i.t,type:"craftDone",id:t.id})}function ml(i,t,e,n){if(!t.alive||t.crafting||t.snowballs<=0)return null;Ur(t,-1);let s=(P.throw.minRange+(P.throw.maxRange-P.throw.minRange)*Math.max(0,Math.min(1,n)))*(t.mods&&t.mods.throwRange||1),r={id:ve(i),ownerId:t.id,isNpc:t.isNpc,x:t.x,y:t.y,dirX:Math.cos(e),dirY:Math.sin(e),traveled:0,range:s,speed:P.throw.speed,dead:!1,dmgMul:(t.mods&&t.mods.damage||1)*dl(i,t,"power"),high:t.z>=P.towers.height-2};return i.snowballs.push(r),i.stats.throws++,i.events.push({t:i.t,type:"throw",id:t.id,charge:n}),r}function li(i){return(Math.max(P.throw.minChargeMs,Math.min(P.throw.maxChargeMs,i))-P.throw.minChargeMs)/(P.throw.maxChargeMs-P.throw.minChargeMs)}function ch(i){return P.throw.minRange+(P.throw.maxRange-P.throw.minRange)*Math.max(0,Math.min(1,i))}function hh(i,t){if(!t.alive||t.crafting||t.snowballs<P.wall.cost||t.walls>=P.wall.maxPerPlayer)return null;Ur(t,-P.wall.cost);let e=t.x+Math.cos(t.aim)*P.wall.dist,n=t.y+Math.sin(t.aim)*P.wall.dist,s={id:ve(i),ownerId:t.id,x:e,y:n,angle:t.aim+Math.PI/2,hp:P.wall.durability,decayAt:i.t+P.wall.decaySec};return i.walls.push(s),t.walls++,i.stats.wallsBuilt++,i.events.push({t:i.t,type:"wall",id:t.id}),s}function uh(i,t){if(!t.alive||t.crafting||t.snowballs<P.decoy.cost||t.decoys>=P.decoy.maxPerPlayer)return null;Ur(t,-P.decoy.cost);let e=t.x+Math.cos(t.aim)*P.decoy.dist,n=t.y+Math.sin(t.aim)*P.decoy.dist,s={id:ve(i),ownerId:t.id,x:e,y:n,until:i.t+P.decoy.lureSec,alive:!0};return i.decoys.push(s),t.decoys++,i.stats.decoys++,i.events.push({t:i.t,type:"decoy",id:t.id}),s}function Ng(i,t,e,n,s){let r=P.wall.len/2,a=i.x+Math.cos(i.angle)*r,o=i.y+Math.sin(i.angle)*r,l=i.x-Math.cos(i.angle)*r,c=i.y-Math.sin(i.angle)*r;return Fg(t,e,n,s,a,o,l,c)}function Fg(i,t,e,n,s,r,a,o){let l=(e-i)*(o-r)-(n-t)*(a-s);if(Math.abs(l)<1e-9)return!1;let c=((s-i)*(o-r)-(r-t)*(a-s))/l,u=((s-i)*(n-t)-(r-t)*(e-i))/l;return c>=0&&c<=1&&u>=0&&u<=1}function Ss(i,t){if(i.over)return;i.t+=t,i.t>=i.zone.nextShrink&&i.zone.radius>P.zone.finalRadius&&(i.zone.radius=Math.max(P.zone.finalRadius,i.zone.radius*(1-P.zone.shrinkStep*.5)),i.zone.nextShrink=i.t+P.zone.intervalSec,i.zone.shrinks++,i.events.push({t:i.t,type:"zoneShrink",radius:i.zone.radius}));for(let s of i.piles)if(s.cooldownUntil>0&&i.t>=s.cooldownUntil){let r=i.rng.range(0,Math.PI*2),a=i.rng.range(0,i.zone.radius*.85);s.x=i.zone.cx+Math.cos(r)*a,s.y=i.zone.cy+Math.sin(r)*a,s.cooldownUntil=0,i.events.push({t:i.t,type:"pileRespawn",id:s.id})}for(let s of i.players){if(!s.alive||!s.isNpc)continue;let r=s.npc;(r&&r.itemUntil>i.t||i.rng()<.003)&&Dr(i,s),i.rng()<.02&&ul(i,s)}for(let s of i.players){if(!s.alive)continue;let r=Wi(i,s.x,s.y);if(s.item&&s.item.id==="jetpack"&&s.jetHold&&s.jetFuel>0&&s.alive&&!s.crafting&&s.sleepUntil<=i.t){let l=r+P.player.radius*2*P.shop.jetpack.maxHeightMul;s.jetFuel=Math.max(0,s.jetFuel-t),s.z<l&&(s.z=Math.min(l,s.z+P.shop.jetpack.riseVel*t),s.vz=0),s.jetFuel<=0&&i.events.push({t:i.t,type:"jetEmpty",id:s.id})}(s.kbVx||s.kbVy)&&(s.x=Math.max(0,Math.min(P.map.size,s.x+s.kbVx*t)),s.y=Math.max(0,Math.min(P.map.size,s.y+s.kbVy*t)),s.kbVx*=Math.pow(.02,t),s.kbVy*=Math.pow(.02,t),Math.abs(s.kbVx)<2&&Math.abs(s.kbVy)<2&&(s.kbVx=0,s.kbVy=0));let a=Wi(i,s.x,s.y);if(s.z>a+.001||s.vz!==0){s.vz-=P.player.gravity*t,s.z+=s.vz*t,(s.padVx||s.padVy)&&(s.x=Math.max(0,Math.min(P.map.size,s.x+s.padVx*t)),s.y=Math.max(0,Math.min(P.map.size,s.y+s.padVy*t)));let l=Wi(i,s.x,s.y);s.z<=l&&s.vz<0&&(s.z=l,s.vz=0,s.padVx=0,s.padVy=0)}else s.z!==a&&(s.z=a);if(s.alive&&s.z<=a+.1&&s.vz===0)for(let l of i.pads){if(Math.hypot(l.x-s.x,l.y-s.y)>l.r)continue;s.crafting&&oi(i,s,"pad"),s.vz=P.pads.launchVel,s.z=a+.02;let c=Math.hypot(s.mvx||0,s.mvy||0);s.padVx=c>.01?s.mvx/c*P.player.speed*P.pads.carryMul:0,s.padVy=c>.01?s.mvy/c*P.player.speed*P.pads.carryMul:0,i.events.push({t:i.t,type:"pad",id:s.id});break}if(s.mg&&(s.mg.fireCd>0&&(s.mg.fireCd-=t),s.mg.until<=i.t&&(s.mg=null)),s.buff&&s.buff.until<=i.t&&(s.buff=null),s.crafting&&(s.craftTimer-=t,s.craftTimer<=0&&Ug(i,s)),s.isNpc&&gl(i,s,t),Math.hypot(s.x-i.zone.cx,s.y-i.zone.cy)>i.zone.radius){let l=P.zone.dps*t,c=s.hp;on(i,s,s.hp-l),i.stats.zoneDamageTicks++,i.stats.zoneDamageTotal+=c-s.hp}}for(let s of i.players)if(!(!s.alive||!wn(i,s)))for(let r of i.players){if(!r.alive||r.id===s.id||wn(i,r)||Math.hypot(r.x-s.x,r.y-s.y)>P.shop.charge.ramRange||r._lastRamAt!=null&&i.t-r._lastRamAt<.8)continue;r._lastRamAt=i.t;let o=Math.atan2(r.y-s.y,r.x-s.x);r.kbVx=Math.cos(o)*P.shop.charge.knockback,r.kbVy=Math.sin(o)*P.shop.charge.knockback,r.vz=30,r.z=Math.max(r.z,Wi(i,r.x,r.y)+.02),Lr(i,r,P.shop.charge.ramDamage,s.id),r.crafting&&oi(i,r,"ram"),r.alive||(i.kills[s.id]=(i.kills[s.id]||0)+1,i.events.push({t:i.t,type:"kill",by:s.id,victim:r.id})),i.events.push({t:i.t,type:"ram",by:s.id,victim:r.id})}for(let s of i.grenades)if(!s.exploded){if(i.t<s.landAt){let r=s.flightSec||.9,a=1-(s.landAt-i.t)/r;if(s.x=s.sx+(s.lx-s.sx)*a,s.y=s.sy+(s.ly-s.sy)*a,s.z=s.rocket?14:14+Math.sin(a*Math.PI)*40,s.rocket){for(let o of i.players)if(!(!o.alive||o.id===s.ownerId)&&Math.hypot(o.x-s.x,o.y-s.y)<P.player.radius+8){s.lx=s.x,s.ly=s.y,s.explodeAt=i.t,s.landAt=i.t;break}}}else s.x=s.lx,s.y=s.ly,s.z=s.rocket?6:0;if(i.t>=s.explodeAt){s.exploded=!0;for(let r of i.players){if(!r.alive)continue;let a=Math.hypot(r.x-s.lx,r.y-s.ly);if(a>s.radius)continue;let o=Lr(i,r,s.damage*(1-a/s.radius*.5),s.ownerId);r.crafting&&oi(i,r,"grenade"),!r.alive&&o>0&&s.ownerId!==r.id&&(i.kills[s.ownerId]=(i.kills[s.ownerId]||0)+1,i.events.push({t:i.t,type:"kill",by:s.ownerId,victim:r.id}))}i.events.push({t:i.t,type:"boom",x:s.lx,y:s.ly,r:s.radius})}}i.grenades=i.grenades.filter(s=>!s.exploded||i.t<s.explodeAt+.6);for(let s of i.snowballs){if(s.dead)continue;let r=s.speed*t,a=s.x+s.dirX*r,o=s.y+s.dirY*r,l=!1;for(let h of i.walls)if(h.ownerId!==s.ownerId&&Ng(h,s.x,s.y,a,o)){h.hp--,l=!0,h.lastHitAt=i.t,i.events.push({t:i.t,type:"wallHit",wallId:h.id,x:a,y:o,hpLeft:h.hp}),h.hp<=0&&(h.dead=!0,i.events.push({t:i.t,type:"wallBreak",wallId:h.id}));break}if(l){s.dead=!0;continue}let c=!1;for(let h of i.obstacles)if(Math.hypot(h.x-a,h.y-o)<h.r){c=!0;break}if(!c&&!s.high){for(let h of i.towers||[])if(Math.hypot(h.x-a,h.y-o)<h.r){c=!0;break}}if(c){s.dead=!0;continue}let u=!1;for(let h of i.decoys)if(!(!h.alive||h.ownerId===s.ownerId)&&Math.hypot(h.x-a,h.y-o)<14){h.alive=!1,u=!0;break}if(u){s.dead=!0;continue}for(let h of i.players)if(!(!h.alive||h.id===s.ownerId)&&!(h.z-Wi(i,h.x,h.y)>P.player.jumpDodgeZ)&&Math.hypot(h.x-a,h.y-o)<P.player.radius+P.throw.radius){if(s.sleep){h.sleepUntil=i.t+s.sleep,h.crafting&&oi(i,h,"sleep"),i.events.push({t:i.t,type:"sleep",by:s.ownerId,victim:h.id,sec:s.sleep}),s.dead=!0;break}Lr(i,h,P.throw.damage*(s.dmgMul||1),s.ownerId)>0&&(i.stats.hits++,i.kills[s.ownerId]=i.kills[s.ownerId]||0),h.crafting&&oi(i,h,"hit"),h.alive||(i.kills[s.ownerId]=(i.kills[s.ownerId]||0)+1,i.events.push({t:i.t,type:"kill",by:s.ownerId,victim:h.id})),s.dead=!0;break}s.x=a,s.y=o,s.traveled+=r,s.traveled>=s.range&&(s.dead=!0)}i.snowballs=i.snowballs.filter(s=>!s.dead);for(let s of i.walls)s.dead||i.t>=s.decayAt&&(s.dead=!0);i.walls=i.walls.filter(s=>!s.dead),i.decoys=i.decoys.filter(s=>s.alive&&s.until>i.t-.001?!0:s.until>i.t),i.decoys=i.decoys.filter(s=>s.alive&&s.until>i.t);let e={},n={};for(let s of i.walls)e[s.ownerId]=(e[s.ownerId]||0)+1;for(let s of i.decoys)n[s.ownerId]=(n[s.ownerId]||0)+1;for(let s of i.players)s.walls=e[s.id]||0,s.decoys=n[s.id]||0;i.phase==="drop"&&i.t>0&&(i.phase="play")}function We(i,t,e,n,s){if(!t.alive||t.crafting||t.sleepUntil>i.t)return;let r=Math.hypot(e,n)||1;t.mvx=e/r,t.mvy=n/r;let a=wn(i,t)?P.shop.charge.speedMul:1,o=P.player.speed*(t.mods&&t.mods.speed||1)*dl(i,t,"speed")*a*(t.cover?P.player.coverSpeedMul:1)*s,l=Math.max(0,Math.min(P.map.size,t.x+t.mvx*o)),c=Math.max(0,Math.min(P.map.size,t.y+t.mvy*o));if(t.z<=2)for(let u of i.obstacles){let h=u.r+P.player.radius*.6,f=l-u.x,p=c-u.y,_=Math.hypot(f,p);if(_<h&&_>.001){let y=u.x+f/_*h,m=u.y+p/_*h;Math.hypot(y-t.x,m-t.y)<=o*2+2?(l=y,c=m):(l=t.x,c=t.y)}}for(let u of i.towers||[]){if(t.z>=u.h-.5)continue;let h=u.r+P.player.radius*.4,f=l-u.x,p=c-u.y,_=Math.hypot(f,p);_<h&&_>.001&&(l=u.x+f/_*h,c=u.y+p/_*h)}t.x=Math.max(0,Math.min(P.map.size,l)),t.y=Math.max(0,Math.min(P.map.size,c))}function gl(i,t,e){if(t.sleepUntil>i.t){t.npc&&(t.npc.state="SLEEP");return}let n=P.npcDifficulty[t.diff]||P.npcDifficulty.normal,s=t.npc;if(s.reactTimer-=e,Math.hypot(t.x-i.zone.cx,t.y-i.zone.cy)>i.zone.radius*.97){t.crafting&&oi(i,t,"zone"),s.zoneAng||(s.zoneAng=i.rng.range(0,Math.PI*2));let h=i.zone.radius*(.35+t.id%7*.08),f=i.zone.cx+Math.cos(s.zoneAng)*h,p=i.zone.cy+Math.sin(s.zoneAng)*h,_=Math.atan2(p-t.y,f-t.x);We(i,t,Math.cos(_),Math.sin(_),e),s.state="ZONE_MOVE";return}for(let h of i.players){if(!h.alive||h.id===t.id||!h.isNpc)continue;let f=Math.hypot(h.x-t.x,h.y-t.y);if(f<26&&f>.001){We(i,t,(t.x-h.x)/f,(t.y-h.y)/f,e*.7);break}}if(s.detourUntil>i.t){We(i,t,Math.cos(s.detourAng),Math.sin(s.detourAng),e),s.state="DETOUR";return}if(s.stuckCheckAt==null)s.lastX=t.x,s.lastY=t.y,s.stuckCheckAt=i.t;else if(i.t-s.stuckCheckAt>.6){let h=Math.hypot(t.x-s.lastX,t.y-s.lastY);if(["PATROL","SEEK_PILE","SEEK_ITEM","ZONE_MOVE","HUNT","RETREAT"].includes(s.state)&&h<4){let p=Math.atan2((s.moveTy||t.y)-t.y,(s.moveTx||t.x)-t.x);s.detourAng=p+(i.rng()<.5?1:-1)*i.rng.range(Math.PI/2,Math.PI*.83),s.detourUntil=i.t+.9}s.lastX=t.x,s.lastY=t.y,s.stuckCheckAt=i.t}let a=i.t>=P.match.warmupSec;if(t.crafting)return;if(n.dodge&&t.z<=.01&&s.reactTimer<=0)for(let h of i.snowballs){if(h.ownerId===t.id)continue;let f=t.x-h.x,p=t.y-h.y,_=Math.hypot(f,p);if(_>120)continue;if((f*h.dirX+p*h.dirY)/(_||1)>.86&&i.rng()<n.dodge){Nr(i,t);break}}let o=t.hp<(t.maxHp||100)*.55;if(n.seekItem&&i.rng()<(o?.2:.02)){let h=null,f=240;for(let p of i.pickups){if(p.takenUntil>i.t||p.kind==="heal"&&!o||p.kind==="shield"&&t.shieldHits>0)continue;let _=Math.hypot(p.x-t.x,p.y-t.y),y=Math.hypot(p.x-i.zone.cx,p.y-i.zone.cy)<i.zone.radius*.95;_<f&&y&&i.rng()<n.seekItem&&(f=_,h=p)}h&&(s.itemTx=h.x,s.itemTy=h.y,s.itemUntil=i.t+6)}if(s.itemUntil>i.t&&s.itemTx!=null)if(Math.hypot(s.itemTx-t.x,s.itemTy-t.y)<12)s.itemUntil=0;else{let f=Math.atan2(s.itemTy-t.y,s.itemTx-t.x);We(i,t,Math.cos(f),Math.sin(f),e),s.state="SEEK_ITEM";return}let l=null,c=1/0;for(let h of i.decoys){if(!h.alive||h.ownerId===t.id)continue;let f=Math.hypot(h.x-t.x,h.y-t.y);f<c&&f<P.throw.maxRange&&(c=f,l={x:h.x,y:h.y,decoy:!0})}if(!l){for(let h of i.players){if(!h.alive||h.id===t.id||h.isHuman&&!a)continue;let f=Math.hypot(h.x-t.x,h.y-t.y),p=h.isHuman?f*.65:f;p<c&&(c=p,l={x:h.x,y:h.y,ref:h,realD:f})}l&&l.realD!=null&&(c=l.realD)}if(t.snowballs<n.craftThreshold){if(l&&c<P.match.fleeRange){let p=Math.atan2(t.y-l.y,t.x-l.x);We(i,t,Math.cos(p),Math.sin(p),e),s.state="RETREAT";return}if(Fr(i,t)){Or(i,t),s.state="CRAFT";return}let f=Og(i,t);if(f){let p=Math.atan2(f.y-t.y,f.x-t.x);We(i,t,Math.cos(p),Math.sin(p),e),s.state="SEEK_PILE";return}}if(l&&c<P.match.engageRange&&(t.snowballs>0||t.mg&&t.mg.ammo>0)){let h=Math.atan2(l.y-t.y,l.x-t.x);if(t.aim=h,t.mg&&t.mg.until>i.t&&t.mg.ammo>0){let f=(1-n.accuracy)*.22;fl(i,t,h+i.rng.range(-f,f))}else if(s.reactTimer<=0&&i.rng()<n.aggro*(l.ref&&l.ref.isHuman?1.8:1)){let f=(1-n.accuracy)*.5,p=i.rng.range(-f,f),_=Math.min(1,c/P.throw.maxRange);ml(i,t,h+p,_),s.reactTimer=n.reactSec*(l.ref&&l.ref.isHuman?.75:1)}if(c<P.match.engageRange*.4)We(i,t,-Math.cos(h),-Math.sin(h),e);else if(n.strafe&&i.rng()<n.strafe){(s.strafeDir==null||i.rng()<.01)&&(s.strafeDir=i.rng()<.5?1:-1);let f=h+Math.PI/2*s.strafeDir;We(i,t,Math.cos(f),Math.sin(f),e)}s.state="ATTACK";return}if(l&&Xi(i)<=5&&t.snowballs>0){let h=Math.atan2(l.y-t.y,l.x-t.x);We(i,t,Math.cos(h),Math.sin(h),e),s.state="HUNT";return}if(!s.moveTx||Math.hypot(s.moveTx-t.x,s.moveTy-t.y)<20){let h=i.rng.range(0,Math.PI*2),f=i.rng.range(0,i.zone.radius*.9);s.moveTx=i.zone.cx+Math.cos(h)*f,s.moveTy=i.zone.cy+Math.sin(h)*f}let u=Math.atan2(s.moveTy-t.y,s.moveTx-t.x);We(i,t,Math.cos(u),Math.sin(u),e),s.state="PATROL"}function Og(i,t){let e=null,n=1/0;for(let s of i.piles){if(s.cooldownUntil>i.t)continue;let r=Math.hypot(s.x-t.x,s.y-t.y);r<n&&(n=r,e=s)}return e}function kg(i){let t=an(i);if(!t)return null;let e=i.placementOrder.indexOf(t.id);return e<0?null:i.players.length-e}function dh(i){let t=an(i),e=kg(i);return{won:i.won,place:e,total:i.players.length,kills:t&&i.kills[t.id]||0,survivedSec:i.t,stats:i.stats}}var kr=class{constructor(){this.ctx=null,this.master=null,this.bgm=null,this.sfx=null,this.started=!1,this.muted=!1,this.bpm=92,this.timer=null,this.step=0,this.ducked=!1}init(){if(this.started)return;let t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(this.ctx.destination),this.bgm=this.ctx.createGain(),this.bgm.gain.value=.28,this.bgm.connect(this.master),this.sfx=this.ctx.createGain(),this.sfx.gain.value=.7,this.sfx.connect(this.master),this.started=!0,this._startBgm())}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}_ok(){return!this.started||this.muted?!1:this.ctx.state==="suspended"?(this.resume(),this.ctx.state==="running"):!0}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.5)}_tone(t,e,n="sine",s=.4,r=0,a=this.sfx){if(!this._ok())return;let o=this.ctx.currentTime,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=n,l.frequency.setValueAtTime(t,o),r&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),o+e),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(s,o+.01),c.gain.exponentialRampToValueAtTime(1e-4,o+e),l.connect(c),c.connect(a||this.sfx),l.start(o),l.stop(o+e+.02)}_noise(t,e=.4,n=800){if(!this._ok())return;let s=this.ctx.currentTime,r=this.ctx.sampleRate*t,a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),o=a.getChannelData(0);for(let h=0;h<r;h++)o[h]=(Math.random()*2-1)*(1-h/r);let l=this.ctx.createBufferSource();l.buffer=a;let c=this.ctx.createGain();c.gain.value=e;let u=this.ctx.createBiquadFilter();u.type="highpass",u.frequency.value=n,l.connect(u),u.connect(c),c.connect(this.sfx),l.start(s)}landing(){this._noise(.2,.5,300),this._tone(120,.15,"sine",.3)}craftStart(){this._duck(!0)}craftTick(){this._tone(70,.12,"sine",.5)}craftDone(){this._duck(!1),this._tone(880,.1,"sine",.4,200)}craftCancel(){this._duck(!1),this._tone(200,.2,"sawtooth",.3,-120)}throw(){this._noise(.12,.25,1200)}hit(){this._noise(.15,.5,500),this._tone(90,.12,"square",.3,-30)}wall(){this._tone(140,.18,"square",.35),this._tone(1200,.12,"sine",.2)}decoy(){this._tone(500,.12,"triangle",.3,200)}zoneWarn(){this._tone(70,.5,"sawtooth",.35,20)}fanfare(){[523,659,784,1046,1318].forEach((t,e)=>setTimeout(()=>this._tone(t,.5,"triangle",.35),e*120))}gameover(){this._tone(180,.6,"sawtooth",.4,-120),this._noise(.4,.4)}_duck(t){if(!this.started)return;this.ducked=t;let e=this.ctx.currentTime;this.bgm.gain.cancelScheduledValues(e),this.bgm.gain.linearRampToValueAtTime(t?.05:.28,e+.15)}_startBgm(){let t=[220,277,330,262,330,294],e=()=>{if(this.started){if(!this.muted&&!this.ducked){let n=t[this.step%t.length];this._tone(n,.28,"triangle",.14,0,this.bgm),this.step%t.length===0&&this._tone(n/2,.5,"sine",.1,0,this.bgm)}this.step++,this.timer=setTimeout(e,6e4/this.bpm/2)}};e()}setIntensity(t,e=20){let n=1-Math.max(0,t-1)/(e-1);this.bpm=92+n*55}stopAll(){this.timer&&clearTimeout(this.timer),this.timer=null,this.started&&(this.step=0)}};function zg(){let i=document.cookie.match(/(?:^|;\s*)snow_uid=([^;]+)/);if(i)return i[1];let t=(crypto.randomUUID?crypto.randomUUID():String(Math.random()).slice(2)).slice(0,36);return document.cookie=`snow_uid=${t}; max-age=${3600*24*365}; path=/; SameSite=Lax`,t}function _l(){try{return localStorage.getItem("snow_nick")||""}catch{return""}}function zr(i){try{localStorage.setItem("snow_nick",i.slice(0,12))}catch{}}function Hg(){return location.hostname==="localhost"||location.hostname==="127.0.0.1"?"ws://localhost:8901/ws":`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`}var Br=class{constructor(){this.ws=null,this.uid=zg(),this.handlers=new Map,this.connected=!1}on(t,e){return this.handlers.set(t,e),this}connect(){return new Promise((t,e)=>{let n=new WebSocket(Hg());this.ws=n;let s=setTimeout(()=>{try{n.close()}catch{}e(new Error("\uC11C\uBC84 \uC5F0\uACB0 \uC2DC\uAC04 \uCD08\uACFC"))},6e3);n.onopen=()=>{clearTimeout(s),this.connected=!0,t()},n.onerror=()=>{clearTimeout(s),this.connected||e(new Error("\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"))},n.onclose=()=>{this.connected=!1;let r=this.handlers.get("_close");r&&r()},n.onmessage=r=>{let a;try{a=JSON.parse(r.data)}catch{return}let o=this.handlers.get(a.type);o&&o(a)}})}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify({uid:this.uid,...t}))}close(){try{this.ws&&this.ws.close()}catch{}}};var Vg="snow_royale_save_v1",Hr=17,Pe=11,fh={mg:{a:16733986,name:"\uAE30\uAD00\uCD1D"},speed:{a:4054148,name:"\uC774\uB3D9"},power:{a:16766011,name:"\uACF5\uACA9"},craft:{a:11766015,name:"\uC81C\uC791"}},ph={jack:{jacket:1780298,pants:2897232,head:15251610,accent:16739125},white:{jacket:15265524,pants:14148332,head:15779496,accent:11065578},bear:{jacket:5980966,pants:4075552,head:14264703,accent:13934615},dash:{jacket:14423100,pants:11538480,head:15779496,accent:16766011,boots:16766011},bot:{jacket:9146262,pants:7632765,head:10988466,accent:6251370}},Vr=class{constructor(t,{seed:e=null,timeScale:n=1,autoStart:s=!0}={}){if(this.root=t,this.seed=e,this.timeScale=n,this.audio=new kr,this.scene3=null,this.sceneName="title",this.keys={},this.mouse={down:!1,downAt:0},this.yaw=0,this.pitch=0,this.locked=!1,this.bobT=0,this.hitMarkerUntil=0,this.damageFlashUntil=0,this.killFeed=[],this.dropTarget=null,this.actors=new Map,this.corpseSet=new Set,this.sbMeshes=new Map,this.wallMeshes=new Map,this.decoyMeshes=new Map,this._build(),s){this._showTitle();let r=null;try{r=sessionStorage.getItem("snow_room")}catch{}r&&(this._mode="online",this._joinOnline({code:r}).catch(()=>{try{sessionStorage.removeItem("snow_room")}catch{}}))}}get scene(){return this.sceneName}set scene(t){this.sceneName=t}_build(){this.root.innerHTML="",this.root.className="sr-root",this.renderer=new ls({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.canvas=this.renderer.domElement,this.canvas.className="sr-canvas",this.root.appendChild(this.canvas),this.fx=document.createElement("canvas"),this.fx.className="sr-fx",this.root.appendChild(this.fx),this.fxCtx=this.fx.getContext("2d"),this.overlay=document.createElement("div"),this.overlay.className="sr-overlay",this.root.appendChild(this.overlay),this.hud=document.createElement("div"),this.hud.className="sr-hud",this.hud.style.display="none",this.root.appendChild(this.hud),this.camera=new Ae(80,1,.5,3e3),this._resize(),window.addEventListener("resize",()=>this._resize()),this._bindInput(),this.assetsLoaded=!0,this._loop()}async _loadAssets(){return this.assetsLoaded=!0,!0}_resize(){let t=this.root.clientWidth||960,e=this.root.clientHeight||600;this.vw=t,this.vh=e,this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix();let n=Math.min(window.devicePixelRatio||1,1.5);this.fx.width=t*n,this.fx.height=e*n,this.fx.style.width=t+"px",this.fx.style.height=e+"px",this.fxCtx.setTransform(n,0,0,n,0,0)}_buildWorld(){let t=this.game,e=new cs;this.scene3=e,e.background=new Ft(12572906),e.fog=new xr(14149876,220,900),e.add(new ys(14674676,16777215,1));let n=new xs(16774112,1);n.position.set(-400,500,250),e.add(n);let s=96,r=new si(P.map.size*2.2,P.map.size*2.2,s,s);r.rotateX(-Math.PI/2);let a=r.attributes.position,o=Math.sin;for(let g=0;g<a.count;g++){let T=a.getX(g),E=a.getZ(g),C=Math.sin(T*.008)*Math.cos(E*.006)*6+Math.sin(T*.02+E*.017)*2.2;a.setY(g,C-.5)}r.computeVertexNormals();let l=new qt({color:16251644,roughness:.95,metalness:0}),c=new lt(r,l);c.position.set(P.map.size/2,0,P.map.size/2),e.add(c);let u=new Map,h=(g,T=!0)=>{let E=`${g}|${T}`;return u.has(E)||u.set(E,{geos:[],mat:new qt({color:g,roughness:1,flatShading:T})}),u.get(E).geos},f=(g,T,E,C,R,S=0,M=0,I=0)=>{T.rotateX(S),T.rotateY(M),T.rotateZ(I),T.translate(E,C,R),g.push(T.index?T.toNonIndexed():T)};for(let g=0;g<14;g++){let T=g/14*Math.PI*2,E=P.map.size*1.15,C=180+g%4*70;f(h(13490660),new Hn(120+g%3*60,C,5),P.map.size/2+Math.cos(T)*E,C/2-24,P.map.size/2+Math.sin(T)*E)}let p=16054523;for(let g of t.obstacles)if(g.kind==="rock")f(h(10135476),new _s(g.r,0),g.x,g.r*.45,g.y,g.yaw,g.yaw*1.7,0),f(h(p),new _s(g.r*.82,0),g.x,g.r*.75,g.y);else if(g.kind==="tree"){f(h(7162931,!1),new ye(g.r*.18,g.r*.24,g.r*1.2,6),g.x,g.r*.6,g.y);for(let T=0;T<3;T++)f(h(T===0?3104067:3961428),new Hn(g.r*(1.5-T*.35),g.r*1.35,7),g.x,g.r*(1.1+T*.8),g.y),f(h(p),new Hn(g.r*(1.5-T*.35)*.7,g.r*.4,7),g.x,g.r*(1.55+T*.8),g.y)}else{f(h(8018490,!1),new ke(g.r*1.8,g.r*.9,g.r*1.3),g.x,g.r*.45,g.y,0,g.yaw,0),f(h(p),new Hn(g.r*1.45,g.r*.8,4),g.x,g.r*1.3,g.y,0,g.yaw+Math.PI/4,0);let T=new lt(new si(g.r*.3,g.r*.3),new he({color:16761446}));T.position.set(g.x+Math.sin(g.yaw)*g.r*.66,g.r*.5,g.y+Math.cos(g.yaw)*g.r*.66),T.rotation.y=g.yaw,e.add(T)}for(let{geos:g,mat:T}of u.values()){if(!g.length)continue;let E=new lt(sh(g,!1),T);E.matrixAutoUpdate=!1,e.add(E),g.forEach(C=>C.dispose())}this.pileMeshes=new Map;let _=new xe(10,10,7,0,Math.PI*2,0,Math.PI/2);this._pileMatReady=this._pileMatReady||new qt({color:16777215,roughness:.85,emissive:9423336,emissiveIntensity:.12}),this._pileMatCooling=this._pileMatCooling||new qt({color:12832214,roughness:.85});for(let g of t.piles){let T=new lt(_,this._pileMatReady);T.position.set(g.x,0,g.y),T.scale.y=.62,e.add(T),this.pileMeshes.set(g.id,T)}let y=new ye(1,1,260,96,1,!0);this.zoneMat=new he({color:5880040,transparent:!0,opacity:.16,side:Ie,depthWrite:!1,blending:vn}),this.zoneWall=new lt(y,this.zoneMat),this.zoneWall.position.set(t.zone.cx,130,t.zone.cy),e.add(this.zoneWall),this.zoneBeams=new pe;let m=new he({color:10477823,transparent:!0,opacity:.55,blending:vn,depthWrite:!1});for(let g=0;g<36;g++){let T=new lt(new ye(1.4,1.4,220,5),m);T.userData.angle=g/36*Math.PI*2,T.position.y=110,this.zoneBeams.add(T)}this.zoneBeams.position.set(t.zone.cx,0,t.zone.cy),e.add(this.zoneBeams),this.zoneRing=new lt(new Vn(t.zone.radius,2.2,8,128),new he({color:3394815})),this.zoneRing.rotation.x=Math.PI/2,this.zoneRing.position.set(t.zone.cx,1.2,t.zone.cy),this._zoneRingR=t.zone.radius,e.add(this.zoneRing),this.pickupMeshes=new Map;for(let g of t.pickups)this._makePickupMesh(g);this.padMeshes=new Map;for(let g of t.pads||[]){let T=new pe,E=new lt(new ye(g.r,g.r+2,3,16),new qt({color:3622735,roughness:.8}));E.position.y=1.5,T.add(E);let C=new qt({color:11583173,metalness:.6,roughness:.4});for(let S=0;S<4;S++){let M=new lt(new Vn(g.r*.55,1.3,6,20),C);M.rotation.x=Math.PI/2,M.position.y=4+S*3,T.add(M)}let R=new lt(new ye(g.r*.8,g.r*.8,2.4,16),new qt({color:58879,emissive:42444,emissiveIntensity:.8,roughness:.3}));R.position.y=17,T.add(R),T.userData.plate=R,T.position.set(g.x,0,g.y),e.add(T),this.padMeshes.set(g.id,T)}for(let g of t.towers||[]){let T=new lt(new ye(g.r,g.r*1.25,g.h,9),new qt({color:9279910,roughness:1,flatShading:!0}));T.position.set(g.x,g.h/2,g.y),e.add(T);let E=new lt(new ye(g.r*.98,g.r*.9,2.2,9),new qt({color:16054523,roughness:1,flatShading:!0}));E.position.set(g.x,g.h+1.1,g.y),e.add(E)}this.capMeshes=new Map;for(let g of t.caps)this._makeCapMesh(g);this.grenadeMeshes=new Map,this.hpSprites=new Map;let d=400,x=new fe,v=new Float32Array(d*3);for(let g=0;g<d;g++)v[g*3]=Math.random()*P.map.size,v[g*3+1]=Math.random()*160,v[g*3+2]=Math.random()*P.map.size;x.setAttribute("position",new Se(v,3)),this.snowPts=new Mr(x,new ds({color:16777215,size:2.2,transparent:!0,opacity:.85})),e.add(this.snowPts),this.actors.clear(),this.corpseSet.clear(),this.sbMeshes.clear(),this.wallMeshes.clear(),this.decoyMeshes.clear();for(let g of t.players){if(g.id===t._humanId||this.online&&this.human&&g.id===this.human.id)continue;let T=this._makeFigure(g.skin,g.isNpc,!!g.userSkin);T.position.set(g.x,0,g.y),e.add(T),this.actors.set(g.id,T)}}_spawnBoomFx(t,e,n){this._boomFx=this._boomFx||[];let s=new pe,r=[];for(let a=0;a<26;a++){let o=new lt(new xe(1.6+Math.random()*3.2,6,5),new he({color:16777215,transparent:!0,opacity:.95}));o.position.set(t,4,e),s.add(o);let l=Math.random()*Math.PI*2,c=30+Math.random()*n*1.4;r.push({x:Math.cos(l)*c,y:40+Math.random()*60,z:Math.sin(l)*c})}this.scene3.add(s),this._boomFx.push({grp:s,speeds:r,at:performance.now()})}_makeCapMesh(t){let e=new pe,n=new qt({color:13934615,emissive:7032840,emissiveIntensity:.5,metalness:.7,roughness:.3}),s=Math.min(4,Math.max(2,Math.round(t.amount/2)));for(let r=0;r<s;r++){let a=new lt(new ye(3,3,1,10),n);a.position.set(r%2*3-1.5,1+r*1.1,Math.floor(r/2)*3-1.5),a.rotation.y=r*.7,e.add(a)}return e.position.set(t.x,0,t.y),this.scene3.add(e),this.capMeshes.set(t.id,e),e}_makePickupMesh(t){let e=this.pickupMeshes.get(t.id);e&&this.scene3.remove(e);let n=new pe;if(t.kind==="heal"){let a=new lt(new ke(10,7,10),new qt({color:16777215,roughness:.6}));a.position.y=5,n.add(a);let o=new he({color:14692657}),l=new lt(new ke(6.4,1.8,1.8),o);l.position.y=9.2,n.add(l);let c=new lt(new ke(1.8,1.8,6.4),o);c.position.y=9.2,n.add(c)}else if(t.kind==="shield"){let a=new lt(new ye(7,7,2.4,18),new qt({color:5087231,emissive:2254540,emissiveIntensity:.7,roughness:.3}));a.position.y=6,a.rotation.x=.35,n.add(a)}else if(t.kind==="club"){let a=new qt({color:10251071,roughness:.85}),o=new lt(new ye(1.4,2.6,16,8),a);o.position.y=8,o.rotation.z=.5,n.add(o),n.userData.pillColor=13208139}else{let a=fh[t.buff&&t.buff.kind]||fh.speed,o=new qt({color:a.a,emissive:a.a,emissiveIntensity:.5,roughness:.35}),l=new qt({color:16119285,emissive:10066329,emissiveIntensity:.3,roughness:.35}),c=new lt(new ms(4.6,5,6,12),o);c.rotation.z=Math.PI/2,c.position.set(-2.6,9,0),n.add(c);let u=new lt(new ms(4.6,5,6,12),l);u.rotation.z=Math.PI/2,u.position.set(2.6,9,0),n.add(u),n.userData.pillColor=a.a,n.userData.buffKind=t.buff&&t.buff.kind}let s=t.kind==="heal"?16739179:t.kind==="shield"?5087231:n.userData.pillColor||16766011,r=new lt(new ye(1.5,1.5,52,6),new he({color:s,transparent:!0,opacity:.34,blending:vn,depthWrite:!1}));return r.position.y=26,n.add(r),n.position.set(t.x,0,t.y),this.scene3.add(n),this.pickupMeshes.set(t.id,n),n}_hpSprite(t){let e=this.hpSprites&&this.hpSprites.get(t.id);if(!e&&this.hpSprites){let n=document.createElement("canvas");n.width=96,n.height=26;let s=new fs(n),r=new zi({map:s,depthTest:!1,transparent:!0});e=new us(r),e.scale.set(26,7,1),e.userData={cv:n,tex:s,lastHp:-1,lastShield:-1},this.scene3.add(e),this.hpSprites.set(t.id,e),this._paintHpSprite(e,t)}return e}_paintHpSprite(t,e){let{cv:n,tex:s}=t.userData,r=n.getContext("2d");r.clearRect(0,0,n.width,n.height),r.font="bold 10px system-ui",r.textAlign="center",r.fillStyle=e.userSkin?"#FFB020":e.isNpc?"#d7dde3":"#ffffff",r.fillText((e.userSkin?"\u2605 ":"")+e.name.slice(0,14),n.width/2,9);let a=84,o=7,l=(n.width-a)/2,c=13;r.fillStyle="rgba(0,0,0,0.65)",r.fillRect(l,c,a,o);let u=Math.max(0,e.hp/(e.maxHp||100));if(r.fillStyle=u>.5?"#7FFFD4":u>.25?"#FF6B35":"#DC143C",r.fillRect(l+1,c+1,(a-2)*u,o-2),e.shieldHits>0){r.fillStyle="#4d9fff";for(let h=0;h<Math.min(6,e.shieldHits);h++)r.fillRect(l+h*7,c+o+2,5,3)}s.needsUpdate=!0,t.userData.lastHp=e.hp,t.userData.lastShield=e.shieldHits}_makeFigure(t,e,n=!1){let s=ph[t]||ph.bot,r=new pe,a=Pe;this._matCache=this._matCache||new Map;let o=v=>{let g=this._matCache.get(v);return g||(g=new qt({color:v,roughness:.9,flatShading:!0}),this._matCache.set(v,g)),g};this._geoCache=this._geoCache||new Map;let l=(v,...g)=>{let T=v+g.join(","),E=this._geoCache.get(T);return E||(E=v==="box"?new ke(...g):new xe(...g),this._geoCache.set(T,E)),E};if(n){let v=new lt(l("box",a*.5,a*.16,a*.48),o(16739125));v.position.y=a*1.72,r.add(v);let g=new lt(l("box",a*.14,a*.5,a*.1),o(16739125));g.position.set(a*.2,a*1.45,-a*.26),r.add(g);let T=new lt(l("sph",a*.26,10,8,0,Math.PI*2,0,Math.PI/2),o(16766011));T.position.y=a*2.12,r.add(T);let E=new lt(l("sph",a*.09,8,6),o(16777215));E.position.y=a*2.3,r.add(E)}let c=l("box",a*.28,a*.8,a*.3),u=new lt(c,o(s.pants));u.position.set(-a*.18,a*.4,0),r.add(u);let h=new lt(c,o(s.pants));if(h.position.set(a*.18,a*.4,0),r.add(h),s.boots){let v=l("box",a*.32,a*.18,a*.4),g=new lt(v,o(s.boots));g.position.set(-a*.18,a*.09,a*.04),r.add(g);let T=new lt(v,o(s.boots));T.position.set(a*.18,a*.09,a*.04),r.add(T)}let f=new lt(l("box",a*.85,a*.9,a*.5),o(s.jacket));f.position.y=a*1.25,r.add(f);let p=new lt(l("box",a*.87,a*.14,a*.52),o(s.accent));p.position.y=a*1.12,r.add(p);let _=l("box",a*.22,a*.75,a*.24),y=new lt(_,o(s.jacket));y.position.set(-a*.58,a*1.25,0),r.add(y);let m=new lt(_,o(s.jacket));m.position.set(a*.58,a*1.25,0),r.add(m);let d=new lt(l("box",a*.44,a*.42,a*.42),o(s.head));d.position.y=a*1.95,r.add(d);let x=new lt(l("box",a*.54,a*.24,a*.5),o(s.jacket));if(x.position.y=a*2.18,r.add(x),e){let v=new lt(l("box",a*.46,a*.1,a*.05),o(4014408));v.position.set(0,a*1.98,a*.22),r.add(v)}return r.userData={armR:m,armL:y,legL:u,legR:h,S:a},r}_wallet(){try{return JSON.parse(localStorage.getItem("snow_wallet")||'{"caps":0,"items":{}}')}catch{return{caps:0,items:{}}}}_saveWallet(t){try{localStorage.setItem("snow_wallet",JSON.stringify(t))}catch{}}_bankCaps(t){let e=this._wallet();e.caps+=t,this._saveWallet(e)}_showShop(){let t=this._wallet(),e=document.createElement("div");e.className="sr-title";let n=document.createElement("h1");n.textContent="\u{1F3EA} \uBCD1\uB69C\uAED1 \uC0C1\uC810",n.style.fontSize="38px",e.appendChild(n),e.appendChild(bt("p","sr-sub",`\uBCF4\uC720 \uBCD1\uB69C\uAED1: \u{1F37E} ${t.caps}\uAC1C \u2014 \uC804\uC7A5\uC5D0\uC11C \uBCD1\uB69C\uAED1\uC744 \uC8FC\uC6CC \uBAA8\uC73C\uC138\uC694`));let s=document.createElement("div");s.className="sr-shoplist";for(let r of Object.values(P.shop)){let a=t.items[r.id]||0,o=document.createElement("div");o.className="sr-shopitem";let l=document.createElement("div");l.className="sr-shopinfo",l.innerHTML=`<b>${r.emoji} ${r.name} <i>\u{1F37E}${r.cost}</i></b><span>${r.desc}</span><small>${a?`\uBCF4\uC720 ${a}\uAC1C`:""}</small>`;let c=document.createElement("button");c.className="sr-btn",c.style.width="auto",c.style.margin="0",c.textContent="\uAD6C\uB9E4",c.disabled=t.caps<r.cost,c.addEventListener("click",()=>{let u=this._wallet();u.caps<r.cost||(u.caps-=r.cost,u.items[r.id]=(u.items[r.id]||0)+1,this._saveWallet(u),this.audio.craftDone(),this._showShop())}),o.appendChild(l),o.appendChild(c),s.appendChild(o)}e.appendChild(s),e.appendChild(this._btn("\u{1F392} \uC778\uBCA4\uD1A0\uB9AC (\uB4E4\uACE0 \uAC08 \uC544\uC774\uD15C \uC120\uD0DD)",()=>this._showInventory())),e.appendChild(this._btn("\u2190 \uD0C0\uC774\uD2C0\uB85C",()=>this._showTitle())),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex"}_showInventory(){let t=this._wallet();this._carryItem=this._carryItem||null;let e=document.createElement("div");e.className="sr-title";let n=document.createElement("h1");n.textContent="\u{1F392} \uC778\uBCA4\uD1A0\uB9AC",n.style.fontSize="38px",e.appendChild(n),e.appendChild(bt("p","sr-sub","\uB9E4\uCE58\uC5D0 \uB4E4\uACE0 \uAC08 \uC544\uC774\uD15C\uC744 \uD558\uB098\uB9CC \uACE0\uB974\uC138\uC694 (\uC0AC\uC6A9\uD558\uBA74 \uC18C\uBAA8)"));let s=document.createElement("div");s.className="sr-shoplist";let r=Object.keys(t.items).filter(a=>t.items[a]>0);r.length||s.appendChild(bt("p","sr-sub","\uBCF4\uC720\uD55C \uC544\uC774\uD15C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC0C1\uC810\uC5D0\uC11C \uAD6C\uB9E4\uD558\uC138\uC694."));for(let a of r){let o=P.shop[a],l=document.createElement("button");l.className="sr-shopitem sr-shopitem-btn"+(this._carryItem===a?" on":""),l.innerHTML=`<div class="sr-shopinfo"><b>${o.emoji} ${o.name} \xD7${t.items[a]}</b><span>${o.desc}</span></div><i>${this._carryItem===a?"\u2705 \uC7A5\uCC29":"\uC120\uD0DD"}</i>`,l.addEventListener("click",()=>{this._carryItem=this._carryItem===a?null:a,this._showInventory()}),s.appendChild(l)}e.appendChild(s),e.appendChild(bt("p","sr-foot",this._carryItem?`\uC7A5\uCC29: ${P.shop[this._carryItem].emoji} ${P.shop[this._carryItem].name} \u2014 \uAC8C\uC784\uC5D0\uC11C X\uD0A4\uB85C \uC0AC\uC6A9 (\uC81C\uD2B8\uD329\uC740 \uC810\uD504\uD0A4 \uC790\uB3D9)`:"\uC7A5\uCC29\uB41C \uC544\uC774\uD15C \uC5C6\uC74C")),e.appendChild(this._btn("\u{1F3EA} \uC0C1\uC810",()=>this._showShop())),e.appendChild(this._btn("\u2190 \uD0C0\uC774\uD2C0\uB85C",()=>this._showTitle())),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex"}_consumeCarryItem(){if(!this._carryItem)return null;let t=this._wallet();if(!t.items[this._carryItem]||t.items[this._carryItem]<=0)return this._carryItem=null,null;t.items[this._carryItem]--,this._saveWallet(t);let e=this._carryItem;return t.items[e]<=0&&(this._carryItem=null),e}_classPreview(t){if(this._previewCache=this._previewCache||{},this._previewCache[t.id])return this._previewCache[t.id];let e=96,n=116,s=new cs;s.background=null,s.add(new ys(16777215,12571878,1.15));let r=new xs(16774112,1.1);r.position.set(-40,60,80),s.add(r);let a=this._makeFigure(t.skin,!1,!0);a.rotation.y=.6,s.add(a);let o=new Ae(38,e/n,1,500);o.position.set(0,Pe*1.5,Pe*4.6),o.lookAt(0,Pe*1.15,0);let l=new ls({antialias:!0,alpha:!0});l.setSize(e,n),l.render(s,o);let c=l.domElement.toDataURL("image/png");return l.dispose(),this._previewCache[t.id]=c,c}_showTitle(){this.sceneName="title",this.hud.style.display="none",document.pointerLockElement&&document.exitPointerLock(),this._mode=this._mode||"solo",this._difficulty=this._difficulty||"normal",this._total=this._total||P.match.total,this._classId=this._classId||"jack",this.invertY=this.invertY??!1;let t=this._wallet(),e=document.createElement("div");e.className="sr-title sr-title2";let n=bt("div","sr-hero"),s=document.createElement("h1");s.textContent="\uC2A4\uB178\uC6B0 \uB85C\uC584",n.appendChild(s),n.appendChild(bt("p","sr-sub","\u2744 3D 1\uC778\uCE6D \uB208\uC2F8\uC6C0 \uBC30\uD2C0\uB85C\uC584 \u2014 20\uC778 \uC911 \uB9C8\uC9C0\uB9C9 \uD55C \uBA85\uC774 \uB418\uC5B4\uB77C")),e.appendChild(n);let r=bt("div","sr-topbar"),a=bt("div","sr-bar-cell");a.appendChild(bt("span","sr-bar-label","\uB2C9\uB124\uC784"));let o=document.createElement("input");o.className="sr-nick",o.maxLength=12,o.placeholder="\uB208\uC0AC\uB78C",o.value=_l(),o.addEventListener("change",()=>zr(o.value.trim())),a.appendChild(o),this._nickInput=o,r.appendChild(a);let l=document.createElement("button");l.className="sr-chip",l.innerHTML=`\u{1F3EA} \uC0C1\uC810 <b>\u{1F37E} ${t.caps}</b>${this._carryItem?` \xB7 \u{1F392} ${P.shop[this._carryItem].emoji}`:""}`,l.addEventListener("click",()=>{this.audio.resume(),this._showShop()}),r.appendChild(l);let c=document.createElement("button");c.className="sr-chip",c.textContent="\u{1F4CA} \uC804\uC801",c.addEventListener("click",()=>{this.audio.resume(),this._showStats()}),r.appendChild(c);let u=document.createElement("button");u.className="sr-chip",u.textContent="\u2753 \uC870\uC791\uBC95",u.addEventListener("click",()=>this._showHelp()),r.appendChild(u);let h=document.createElement("button");h.className="sr-chip",h.textContent=this.audio.muted?"\u{1F507}":"\u{1F50A}",h.addEventListener("click",()=>{this.audio.setMuted(!this.audio.muted),h.textContent=this.audio.muted?"\u{1F507}":"\u{1F50A}"}),r.appendChild(h),e.appendChild(r);let f=bt("div","sr-modes");for(let[T,E,C,R]of[["solo","\u{1F3D4}","1\uC778 \uD50C\uB808\uC774","\uBD07 19\uBA85\uACFC \uB300\uACB0"],["online","\u{1F310}","\uC628\uB77C\uC778 \uD50C\uB808\uC774","\uCE5C\uAD6C\xB7\uACF5\uAC1C \uB9E4\uCE58"]]){let S=document.createElement("button");S.className="sr-mode"+(this._mode===T?" on":""),S.innerHTML=`<i>${E}</i><b>${C}</b><span>${R}</span>`,S.addEventListener("click",()=>{this._mode=T,this._showTitle()}),f.appendChild(S)}e.appendChild(f);let p=bt("div","sr-card");p.appendChild(bt("div","sr-card-title","\uB9E4\uCE58 \uC124\uC815"));let _=bt("div","sr-diffrow");for(let[T,E]of[["easy","\uC26C\uC6C0"],["normal","\uBCF4\uD1B5"],["hard","\uC5B4\uB824\uC6C0"]]){let C=document.createElement("button");C.className="sr-diff"+(this._difficulty===T?" on":""),C.textContent=E,C.addEventListener("click",()=>{this._difficulty=T,this._showTitle()}),_.appendChild(C)}let y=bt("div","sr-diffrow");for(let T of P.match.totalOptions){let E=document.createElement("button");E.className="sr-diff"+(this._total===T?" on":""),E.textContent=`${T}\uC778`,E.addEventListener("click",()=>{this._total=T,this._showTitle()}),y.appendChild(E)}let m=bt("div","sr-diffrow"),d=document.createElement("button");d.className="sr-diff"+(this.invertY?" on":""),d.textContent=`\u2195 \uB9C8\uC6B0\uC2A4 \uBC18\uC804 ${this.invertY?"ON":"OFF"}`,d.addEventListener("click",()=>{this.invertY=!this.invertY,this._showTitle()}),m.appendChild(d),p.appendChild(_),p.appendChild(y),p.appendChild(m),e.appendChild(p);let x=bt("div","sr-card");x.appendChild(bt("div","sr-card-title","\uCE90\uB9AD\uD130 \uD2B9\uC131"));let v=bt("div","sr-classrow");for(let T of Object.values(Gn)){let E=document.createElement("button");E.className="sr-class"+(this._classId===T.id?" on":"");let C=document.createElement("img");C.className="sr-class-img",C.alt=T.name;try{C.src=this._classPreview(T)}catch{}let R=bt("div","sr-class-txt"),S=document.createElement("b");S.textContent=T.name;let M=document.createElement("span");M.textContent=T.desc,R.appendChild(S),R.appendChild(M),E.appendChild(C),E.appendChild(R),E.addEventListener("click",()=>{this._classId=T.id,this._showTitle()}),v.appendChild(E)}if(x.appendChild(v),e.appendChild(x),this._mode==="online"){let T=bt("div","sr-actions");T.appendChild(this._btn("\u26A1 \uBE60\uB978 \uC785\uC7A5 / \uACF5\uAC1C \uBC29 \uBAA9\uB85D",()=>this._showOnlineLobby(),!0));let E=bt("div","sr-nickrow"),C=document.createElement("input");C.className="sr-nick",C.maxLength=4,C.placeholder="\uBC29 \uCF54\uB4DC (\uC608: 4F2K)",C.style.textTransform="uppercase",C.style.width="150px";let R=document.createElement("button");R.className="sr-btn",R.style.width="auto",R.style.margin="0",R.textContent="\uC785\uC7A5",R.addEventListener("click",()=>{C.value.trim().length===4&&this._joinOnline({code:C.value.trim().toUpperCase()})}),E.appendChild(C),E.appendChild(R);let S=bt("div","sr-nickrow"),M=document.createElement("button");M.className="sr-btn",M.style.width="auto",M.style.margin="0",M.textContent="\u{1F3E0} \uACF5\uAC1C \uBC29 \uB9CC\uB4E4\uAE30",M.addEventListener("click",()=>{this.audio.resume(),this._joinOnline({create:!0,isPublic:!0})});let I=document.createElement("button");I.className="sr-btn",I.style.width="auto",I.style.margin="0",I.textContent="\u{1F512} \uBE44\uACF5\uAC1C \uBC29",I.addEventListener("click",()=>{this.audio.resume(),this._joinOnline({create:!0,isPublic:!1})}),S.appendChild(M),S.appendChild(I),T.appendChild(E),T.appendChild(S),e.appendChild(T)}else{let T=bt("div","sr-actions");T.appendChild(this._btn("\u2744 \uB099\uD558 \uC2DC\uC791",()=>this.newGame(),!0)),e.appendChild(T)}let g=bt("p","sr-foot","WASD \uC774\uB3D9 \xB7 Space \uC810\uD504/\uC81C\uD2B8\uD329 \xB7 \uC88C\uD074\uB9AD \uD22C\uCC99 \xB7 F \uADFC\uC811 \xB7 X \uC544\uC774\uD15C \xB7 E \uC81C\uC791 \xB7 Q \uC124\uBCBD \xB7 G \uBBF8\uB07C \xB7 C \uC5C4\uD3D0 \xB7 M \uC9C0\uB3C4");e.appendChild(g),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex"}_showHelp(){let t=document.createElement("div");t.className="sr-modal";let e=document.createElement("div");e.className="sr-modal-box";let n=document.createElement("h2");n.textContent="\uC870\uC791\uBC95 (3D FPS)",e.appendChild(n),["\u{1F5B1} \uD654\uBA74 \uD074\uB9AD \u2014 \uB9C8\uC6B0\uC2A4 \uC870\uC900 \uC7A0\uAE08 (ESC\uB85C \uD574\uC81C)","\uB9C8\uC6B0\uC2A4 \u2014 \uC2DC\uC810 \uD68C\uC804 (\uC704\uB85C \uBC00\uBA74 \uC704\uB97C \uBD04 \xB7 \uD0C0\uC774\uD2C0\uC5D0\uC11C \uBC18\uC804 \uAC00\uB2A5)","W A S D \u2014 \uBCF4\uB294 \uBC29\uD5A5 \uAE30\uC900 \uC774\uB3D9 \xB7 Space \u2014 \uC810\uD504(\uACF5\uC911\uC5D0\uC11C \uB208\uBB49\uCE58 \uD68C\uD53C) \xB7 C \u2014 \uC5C4\uD3D0(\uD53C\uD574 \uC808\uBC18)","\u{1F6E1} \uBC29\uD328 \uC544\uC774\uD15C \u2014 \uB4E4\uACE0 \uC788\uB294 \uB3D9\uC548 \uD53C\uACA9 \uC644\uC804 \uBC29\uC5B4, \uB0B4\uAD6C\uB3C4 4\uD68C \uC18C\uC9C4 \uC2DC \uD30C\uAD34","\u{1F48A} \uC54C\uC57D \u2014 \uC0C9\uC73C\uB85C \uAD6C\uBD84: \u{1F7E2}\uC774\uB3D9 \u{1F7E1}\uACF5\uACA9 \u{1F7E3}\uC81C\uC791 \u{1F534}\uAE30\uAD00\uCD1D(75\uBC1C \uC5F0\uC0AC, 20\uCD08)","\u{1F300} \uC2A4\uD504\uB9C1 \uC810\uD504 \uD328\uB4DC \u2014 \uBC1F\uC73C\uBA74 \uB2EC\uB9AC\uB358 \uBC29\uD5A5\uC73C\uB85C \uB192\uC774 \uBC1C\uC0AC. \uB3CC \uD0C0\uC6CC \uC704\uB85C \uC62C\uB77C\uAC08 \uC218 \uC788\uC74C","\uC88C\uD074\uB9AD \uD640\uB4DC \u2192 \uB193\uAE30 \u2014 \uB208\uBB49\uCE58 \uD22C\uCC99 (\uC624\uB798 \uB204\uB97C\uC218\uB85D \uBA40\uB9AC)","E \u2014 \uB208\uB354\uBBF8(\uBC18\uC9DD\uC774\uB294 \uD770 \uB454\uB355) \uC55E\uC5D0\uC11C 3\uCD08 \uC81C\uC791 +10 (\uBB34\uBC29\uBE44!)","Q \u2014 \uC124\uBCBD \uAC74\uC124 (4\uAC1C) \xB7 G \u2014 \uB208\uC0AC\uB78C \uBBF8\uB07C (5\uAC1C) \xB7 M \u2014 \uC9C0\uB3C4","F \u2014 \uADFC\uC811 \uACF5\uACA9: \uAE30\uBCF8 \uC8FC\uBA39(10). \u{1F3CF} \uBABD\uB465\uC774\uB97C \uC8FC\uC6B0\uBA74 \uAC15\uD0C0(26+\uB109\uBC31)","\u{1F37E} \uBCD1\uB69C\uAED1 \u2014 \uC804\uC7A5\uC5D0\uC11C \uC8FC\uC6CC \uC0C1\uC810\uC5D0\uC11C \uC544\uC774\uD15C \uAD6C\uB9E4 (\uC8FD\uC740 \uC790\uB294 \uC9C0\uAC11\uC744 \uB5A8\uC5B4\uB728\uB9B0\uB2E4)","X \u2014 \uC7A5\uCC29\uD55C \uC0C1\uC810 \uC544\uC774\uD15C \uC0AC\uC6A9 (\uAC74\uBE75/\uB3CC\uACA9\uBB3C\uC57D/\uC218\uBA74\uCD1D/\uC218\uB958\uD0C4) \xB7 \uC81C\uD2B8\uD329\uC740 \uC810\uD504\uD0A4\uB85C \uBE44\uD589","\uD30C\uB780 \uBE5B \uAE30\uB465 \uBCBD = \uB208\uBCF4\uB77C \uAD6C\uC5ED \uACBD\uACC4. \uBCBD \uBC16\uC5D0 \uC788\uC73C\uBA74 \uCCB4\uB825\uC774 \uB2F3\uC2B5\uB2C8\uB2E4","\uC4F0\uB7EC\uC9C4 \uD50C\uB808\uC774\uC5B4\uB294 \uADF8 \uC790\uB9AC\uC5D0 \uB0A8\uC2B5\uB2C8\uB2E4"].forEach(r=>{let a=document.createElement("p");a.textContent=r,e.appendChild(a)}),e.appendChild(this._btn("\uB2EB\uAE30",()=>t.remove(),!0)),t.appendChild(e),this.root.appendChild(t)}_nickname(){return this._nickInput&&this._nickInput.value.trim()||_l()||"\uB208\uC0AC\uB78C"}async _ensureNet(){return this.net&&this.net.connected?this.net:(this.net=new Br,this.net.on("joined",t=>{try{sessionStorage.setItem("snow_room",t.code)}catch{}}).on("lobby",t=>this._renderRoomLobby(t)).on("rooms",t=>this._renderRoomList(t.rooms)).on("error",t=>{if(this._toast(`\u26A0 ${t.error}`),/방을 찾을 수 없습니다|진행 중/.test(t.error))try{sessionStorage.removeItem("snow_room")}catch{}}).on("you",t=>{this.onlineYouId=t.playerId,this._applyYou()}).on("match_start",t=>this._onlineMatchStart(t)).on("drop_tick",t=>{this.onlineDropLeft=t.left}).on("play_begin",t=>this._onlinePlayBegin(t)).on("snap",t=>this._onlineSnap(t)).on("you_died",t=>this._onlineDied(t)).on("caps_got",t=>{this._bankCaps(t.amount),this.capsFxUntil=performance.now()+1600,this.capsFxAmount=t.amount,this.audio.craftDone(),this._toast(`\u{1F37E} \uBCD1\uB69C\uAED1 +${t.amount}! (\uC9C0\uAC11 ${this._wallet().caps}\uAC1C)`,2600)}).on("match_over",t=>this._onlineOver(t)).on("stats",t=>this._renderStats(t.stats)).on("_close",()=>{this.online&&(this._toast("\uC11C\uBC84 \uC5F0\uACB0\uC774 \uB04A\uC5B4\uC84C\uC2B5\uB2C8\uB2E4"),this.online=!1,this._showTitle())}),await this.net.connect(),this.net)}async _joinOnline({create:t=!1,isPublic:e=!0,code:n=null,quick:s=!1}={}){zr(this._nickname());try{let r=await this._ensureNet(),a={name:this._nickname(),classId:this._classId||"jack",itemId:this._carryItem||void 0};t?r.send({type:"create_room",isPublic:e,...a}):n?r.send({type:"join_room",code:n,...a}):s&&r.send({type:"quick_join",...a})}catch(r){this._toast(`\u26A0 ${r.message} \u2014 \uC11C\uBC84\uAC00 \uAEBC\uC838 \uC788\uC73C\uBA74 1\uC778 \uD50C\uB808\uC774\uB97C \uC774\uC6A9\uD558\uC138\uC694`,4200)}}async _showOnlineLobby(){zr(this._nickname());try{(await this._ensureNet()).send({type:"list_rooms"}),this._renderRoomList(null)}catch(t){this._toast(`\u26A0 ${t.message}`,4200)}}_renderRoomList(t){let e=document.createElement("div");e.className="sr-title";let n=document.createElement("h1");if(n.textContent="\uACF5\uAC1C \uBC29",n.style.fontSize="40px",e.appendChild(n),t==null)e.appendChild(bt("p","sr-sub","\uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uB294 \uC911\u2026"));else if(!t.length)e.appendChild(bt("p","sr-sub","\uB300\uAE30 \uC911\uC778 \uACF5\uAC1C \uBC29\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694!"));else{let s=document.createElement("div");s.className="sr-roomlist";for(let r of t){let a=document.createElement("button");a.className="sr-room",a.innerHTML=`<b>${r.code}</b><span>${r.host}\uB2D8\uC758 \uBC29 \xB7 ${r.players}/${r.max}\uBA85</span>`,a.addEventListener("click",()=>this._joinOnline({code:r.code})),s.appendChild(a)}e.appendChild(s)}e.appendChild(this._btn("\u26A1 \uBE60\uB978 \uC785\uC7A5 (\uC790\uB3D9 \uB9E4\uCE6D)",()=>this._joinOnline({quick:!0}),!0)),e.appendChild(this._btn("\u{1F504} \uC0C8\uB85C\uACE0\uCE68",()=>{this.net&&this.net.send({type:"list_rooms"})})),e.appendChild(this._btn("\u2190 \uD0C0\uC774\uD2C0\uB85C",()=>this._showTitle())),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex"}_renderRoomLobby(t){if(this.sceneName==="play")return;this.roomCode=t.code;let e=document.createElement("div");e.className="sr-title";let n=document.createElement("h1");n.textContent=`\uBC29 ${t.code}`,n.style.fontSize="40px",e.appendChild(n),e.appendChild(bt("p","sr-sub",t.isPublic?"\uACF5\uAC1C \uBC29 \u2014 \uBAA9\uB85D\uC5D0 \uB178\uCD9C\uB429\uB2C8\uB2E4":`\uBE44\uACF5\uAC1C \uBC29 \u2014 \uCE5C\uAD6C\uC5D0\uAC8C \uCF54\uB4DC ${t.code}\uB97C \uC54C\uB824\uC8FC\uC138\uC694`));let s=document.createElement("div");s.className="sr-roomlist";for(let o of t.members){let l=document.createElement("div");l.className="sr-room sr-room-static";let c=Gn[o.classId]||Gn.jack;l.innerHTML=`<b>${o.name}${o.uid===this.net.uid?" (\uB098)":""}${o.uid===t.hostUid?" \u{1F451}":""}</b><span>${c.name} \xB7 ${o.ready?"\u2705 \uC900\uBE44\uB428":"\uB300\uAE30 \uC911"}</span>`,s.appendChild(l)}e.appendChild(s),e.appendChild(bt("p","sr-foot",`\uB0A8\uB294 \uC790\uB9AC\uB294 \uBD07\uC774 \uCC44\uC6C1\uB2C8\uB2E4 (\uCD1D ${P.match.total}\uC778 \uB9E4\uCE58)`));let r=t.members.find(o=>o.uid===this.net.uid),a=this._btn(r&&r.ready?"\uC900\uBE44 \uCDE8\uC18C":"\u2705 \uC900\uBE44",()=>this.net.send({type:"ready",ready:!(r&&r.ready)}));e.appendChild(a),t.hostUid===this.net.uid&&e.appendChild(this._btn("\u{1F680} \uAC8C\uC784 \uC2DC\uC791 (\uBC29\uC7A5)",()=>this.net.send({type:"start"}),!0)),e.appendChild(this._btn("\uB098\uAC00\uAE30",()=>{this.net.send({type:"leave"});try{sessionStorage.removeItem("snow_room")}catch{}this._showTitle()})),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex"}async _showStats(){try{(await this._ensureNet()).send({type:"stats"})}catch(t){this._toast(`\u26A0 ${t.message}`)}}_renderStats(t){let e=document.createElement("div");e.className="sr-title";let n=document.createElement("h1");if(n.textContent="\uB0B4 \uC804\uC801",n.style.fontSize="40px",e.appendChild(n),!t||!t.matches)e.appendChild(bt("p","sr-sub","\uC544\uC9C1 \uC628\uB77C\uC778 \uC804\uC801\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uCCAB \uB9E4\uCE58\uB97C \uB6F0\uC5B4\uBCF4\uC138\uC694!"));else{let s=document.createElement("div");s.className="sr-rstats",s.appendChild(this._stat("\uB9E4\uCE58",t.matches)),s.appendChild(this._stat("\uC2B9\uB9AC",t.wins||0)),s.appendChild(this._stat("TOP3",t.top3||0)),s.appendChild(this._stat("\uCC98\uCE58",t.kills||0)),s.appendChild(this._stat("\uD3C9\uADE0 \uC21C\uC704",t.matches?(t.totalPlace/t.matches).toFixed(1):"-")),e.appendChild(s),e.appendChild(bt("p","sr-sub",`${t.name||""} \xB7 \uB9C8\uC9C0\uB9C9 \uD50C\uB808\uC774 ${t.lastPlayedAt?t.lastPlayedAt.slice(0,10):"-"}`))}e.appendChild(this._btn("\u2190 \uD0C0\uC774\uD2C0\uB85C",()=>this._showTitle())),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex"}newGame(t=this.seed){this.audio.init(),this.audio.resume();let e=t??Math.floor(performance.now())%1e5+1,n=this._consumeCarryItem();this.game=Ms(e,{total:this._total||P.match.total,difficulty:this._difficulty||"normal",classId:this._classId||"jack",itemId:n}),n&&this._toast(`${P.shop[n].emoji} ${P.shop[n].name} \uC7A5\uCC29 \u2014 ${n==="jetpack"?"\uC810\uD504\uD0A4\uB85C \uBE44\uD589":n==="club"?"F\uD0A4\uB85C \uAC15\uD0C0":"X\uD0A4\uB85C \uC0AC\uC6A9"}`,4500),this.human=an(this.game),this._buildWorld(),this.online=!1,this.ghost=!1,this.ghostPos=null,this.human&&(this.human.name=this._nickname?this._nickname():this.human.name),this.sceneName="drop",this.dropT=0,this.dropTarget={x:this.game.zone.cx+this.game.rng.range(-300,300),y:this.game.zone.cy+this.game.rng.range(-300,300)},this.dropPlan=new Map;for(let s of this.game.players)s.id!==this.game._humanId&&this.dropPlan.set(s.id,{delay:this.game.rng.range(0,2.5),fallSec:this.game.rng.range(3.2,4.6),sway:this.game.rng.range(0,Math.PI*2)});this.yaw=0,this.pitch=-.15,this.killFeed=[],this.overlay.style.display="none",this.overlay.innerHTML="",this.hud.style.display="block",this._lastSurvivors=P.match.total,this._toast("\uC9C0\uB3C4\uB97C \uD074\uB9AD\uD574 \uB099\uD558 \uC9C0\uC810\uC744 \uACE0\uB974\uC138\uC694")}_onlineMatchStart(t){this.audio.init(),this.audio.resume(),this.online=!0,this.onlineMeta=t,this._consumeCarryItem(),this.game=Ms(t.seed,{total:t.total,allNpc:!0,humanId:-1,difficulty:"normal"});for(let e of t.players){let n=this.game.players.find(s=>s.id===e.id);n&&(n.name=e.name,n.isNpc=e.isNpc,n.userSkin=e.userSkin,e.classId&&pl(this.game,n,e.classId))}if(this.human=null,this._applyYou(),this._buildWorld(),this.ghost=!1,this.killFeed=[],this.overlay.style.display="none",this.overlay.innerHTML="",this.hud.style.display="block",this.yaw=0,this.pitch=0,this._lastSurvivors=t.total,t.rejoin)this.sceneName="play",this._toast("\u{1F504} \uB9E4\uCE58\uC5D0 \uB2E4\uC2DC \uC811\uC18D\uD588\uC2B5\uB2C8\uB2E4 \u2014 \uD654\uBA74\uC744 \uD074\uB9AD\uD574 \uC870\uC900\uC744 \uC7A0\uADF8\uC138\uC694",4e3);else{this.sceneName="drop",this.dropT=0,this.onlineDropLeft=8,this.dropTarget={x:this.game.zone.cx,y:this.game.zone.cy},this.dropPlan=new Map;for(let e of this.game.players)this.human&&e.id===this.human.id||this.dropPlan.set(e.id,{delay:this.game.rng.range(0,2.5),fallSec:this.game.rng.range(3.2,4.6),sway:this.game.rng.range(0,Math.PI*2)});this._toast("\u{1F310} \uC628\uB77C\uC778 \uB9E4\uCE58 \u2014 \uC9C0\uB3C4\uB97C \uD074\uB9AD\uD574 \uB099\uD558 \uC9C0\uC810\uC744 \uACE0\uB974\uC138\uC694")}}_onlinePlayBegin(){this.online&&(this.sceneName="play",this.audio.landing(),this._toast("\uCC29\uC9C0! \uD654\uBA74\uC744 \uD074\uB9AD\uD574 \uC870\uC900\uC744 \uC7A0\uADF8\uC138\uC694"))}_applyYou(){if(!(this.onlineYouId==null||!this.game)&&(this.human=this.game.players.find(t=>t.id===this.onlineYouId)||null,this.human)){let t=this.actors.get(this.human.id);t&&(this.scene3.remove(t),this.actors.delete(this.human.id));let e=this.hpSprites&&this.hpSprites.get(this.human.id);e&&(e.visible=!1)}}_onlineSnap(t){if(!this.online||!this.game)return;this.human||this._applyYou();let e=this.game;e.t=t.t,e.zone.radius=t.zone.r,e.zone.nextShrink=t.t+t.zone.next;for(let o of t.players){let l=e.players.find(I=>I.id===o[0]);if(!l)continue;if(o.length===1){l.alive&&(l.alive=!1,e.placementOrder.includes(l.id)||e.placementOrder.push(l.id),e.corpses.push({id:l.id,x:l.x,y:l.y,skin:l.skin,name:l.name,at:e.t,yaw:l.aim}));continue}let[,c,u,h,f,p,_,y,m,d,x,v,g,T,E,C,R,S,M]=o;l.x=c,l.y=u,l.z=h,l.hp=p,l.snowballs=_,l.crafting=!!y,y?(l.craftTimer=y/10,l.craftTotal=l.craftTotal||P.craft.seconds):(l.craftTimer=0,l.craftTotal=0),l.shieldHits=m,l.mg=d>0?{ammo:d,until:e.t+99,fireCd:0}:null,l.buff=x?{kind:x,until:e.t+99,mul:1}:null,l.cover=!!v,l.sleepUntil=g?e.t+1:0,l.chargeUntil=T?e.t+1:0,l.hasClub=!!E,l.caps=C||0,l.item=R?{id:R,usesLeft:S}:null,l.jetFuel=M||0,(!this.human||l.id!==this.human.id)&&(l.aim=f)}let n=new Set;for(let[o,l,c,u,h]of t.balls){n.add(o);let f=e.snowballs.find(p=>p.id===o);f||(f={id:o,x:l,y:c,dirX:0,dirY:0,traveled:h,range:100,speed:0,flat:!!u,dead:!1},e.snowballs.push(f)),f.x=l,f.y=c,f.traveled=h,f.range=100}e.snowballs=e.snowballs.filter(o=>n.has(o.id));let s=new Set;for(let[o,l,c,u,h]of t.walls){s.add(o);let f=e.walls.find(p=>p.id===o);f||(f={id:o,x:l,y:c,angle:u,hp:h},e.walls.push(f)),f.hp=h}e.walls=e.walls.filter(o=>s.has(o.id));let r=new Set;for(let[o,l,c]of t.decoys)r.add(o),e.decoys.find(u=>u.id===o)||e.decoys.push({id:o,x:l,y:c,alive:!0,until:e.t+99});if(e.decoys=e.decoys.filter(o=>r.has(o.id)),t.caps)for(let[o,l,c,u,h]of t.caps){let f=e.caps.find(p=>p.id===o);f||(f={id:o,x:c,y:u,amount:h,takenUntil:0,dropped:!0},e.caps.push(f)),f.x=c,f.y=u,f.amount=h,f.gone=!!l,f.takenUntil=l?e.t+99:0}if(t.nades){let o=new Set;for(let[l,c,u,h,f,p,_,y,m]of t.nades){o.add(l);let d=e.grenades.find(x=>x.id===l);d||(d={id:l,sx:c,sy:u},e.grenades.push(d)),d.x=c,d.y=u,d.z=h,d.lx=f,d.ly=p,d.radius=_,d.explodeAt=e.t+y,d.exploded=!!m}e.grenades=e.grenades.filter(l=>o.has(l.id))}for(let[o,l,c,u,h]of t.pickups){let f=e.pickups.find(p=>p.id===o);f&&(f.takenUntil=l?e.t+5:0,f.x=c,f.y=u,h&&f.buff&&(f.buff.kind=h))}for(let[o,l,c,u]of t.piles){let h=e.piles.find(f=>f.id===o);h&&(h.cooldownUntil=l?e.t+5:0,h.x=c,h.y=u)}for(let o of t.events||[]){if(o.type==="kill"){let l=e.players.find(u=>u.id===o.by),c=e.players.find(u=>u.id===o.victim);l&&c&&this.killFeed.push({text:`${l.name} \u2744\u2192 ${c.name}`,until:performance.now()+4200})}if(o.type==="zoneShrink"&&(this.audio.zoneWarn(),this._toast("\u26A0 \uB208\uBCF4\uB77C \uAD6C\uC5ED\uC774 \uC881\uC544\uC9D1\uB2C8\uB2E4!")),o.type==="pad"&&this.human&&o.id===this.human.id&&this._toast("\u{1F300} \uC2A4\uD504\uB9C1 \uC810\uD504!",1200),o.type==="placeReward"&&this.human&&o.id===this.human.id&&(this._bankCaps(o.amount),this.capsFxUntil=performance.now()+2e3,this.capsFxAmount=o.amount,this._toast(`\u{1F3C5} ${o.place}\uB4F1 \uBCF4\uC0C1 \u2014 \uBCD1\uB69C\uAED1 +${o.amount}!`,4500)),o.type==="swing"&&(!this.human||o.id!==this.human.id)){let l=this.actors.get(o.id);l&&l.userData&&(l.userData.swingAt=performance.now())}}this.killFeed.length>5&&(this.killFeed=this.killFeed.slice(-5));let a=t.alive;a!==this._lastSurvivors&&(this.audio.setIntensity(a),this._lastSurvivors=a),this._lastSnapAt=performance.now()}_onlineDied(t){this.ghost=!0,this._toast(`\u{1F480} \uD0C8\uB77D \u2014 \uCD5C\uC885 ${t.place}\uC704 / ${t.total}\uBA85 \xB7 \uCC98\uCE58 ${t.kills} \u2014 \uC720\uB839 \uBAA8\uB4DC\uB85C \uAD00\uC804\uD569\uB2C8\uB2E4 (WASD \uC774\uB3D9)`,6e3),this.audio.gameover()}_onlineOver(t){this.online=!1;let e=this.human&&t.winner&&t.winner.id===this.human.id,n=document.createElement("div");n.className="sr-result "+(e?"sr-win":"sr-lose");let s=document.createElement("div");s.className="sr-place",s.textContent=e?"\u{1F3C6}":"\u{1F3C1}";let r=document.createElement("h2");r.textContent=e?"\uC124\uC6D0\uC758 \uC655!":`\uC6B0\uC2B9: ${t.winner?t.winner.name:"-"}`,n.appendChild(s),n.appendChild(r),n.appendChild(bt("p","sr-sub","\uC7A0\uC2DC \uD6C4 \uBC29 \uB85C\uBE44\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4 \u2014 \uC900\uBE44\uB97C \uB204\uB974\uBA74 \uB9AC\uB9E4\uCE58!")),n.appendChild(this._btn("\uD0C0\uC774\uD2C0\uB85C",()=>{this.net&&this.net.send({type:"leave"});try{sessionStorage.removeItem("snow_room")}catch{}this._showTitle()})),this.overlay.innerHTML="",this.overlay.appendChild(n),this.overlay.style.display="flex",e&&this.audio.fanfare(),this.sceneName="result"}_enterPlay(){this.sceneName="play",this.dropTarget&&(this.human.x=this.dropTarget.x,this.human.y=this.dropTarget.y),this.yaw=this._dropLandYaw!=null?this._dropLandYaw:Math.atan2(this.game.zone.cy-this.human.y,this.game.zone.cx-this.human.x),this.pitch=0,this.audio.landing(),this._toast("\uD654\uBA74\uC744 \uD074\uB9AD\uD574 \uC870\uC900\uC744 \uC7A0\uADF8\uC138\uC694 (ESC \uD574\uC81C)")}_showResult(){this.sceneName="result",this.hud.style.display="none",document.pointerLockElement&&document.exitPointerLock();let t=dh(this.game);t.won?this.audio.fanfare():this.audio.gameover(),this.audio.stopAll();let e=document.createElement("div");e.className="sr-result "+(t.won?"sr-win":"sr-lose");let n=document.createElement("div");n.className="sr-place",n.textContent=t.won?"\u{1F3C6}":`#${t.place}`;let s=document.createElement("h2");s.textContent=t.won?"\uC124\uC6D0\uC758 \uC655!":"\uD0C8\uB77D";let r=document.createElement("div");r.className="sr-rstats",r.appendChild(this._stat("\uC21C\uC704",`${t.place}/${t.total}`)),r.appendChild(this._stat("\uCC98\uCE58",t.kills)),r.appendChild(this._stat("\uC0DD\uC874",`${Math.floor(t.survivedSec/60)}:${String(Math.floor(t.survivedSec%60)).padStart(2,"0")}`)),e.appendChild(n),e.appendChild(s),e.appendChild(r);let a=document.createElement("p");a.className="sr-sub",a.textContent=t.won?"\uB9C8\uC9C0\uB9C9\uAE4C\uC9C0 \uB9DE\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.":this._humanLastCause||"\uB208\uBB49\uCE58\uC5D0 \uB9DE\uC544 \uD0C8\uB77D\uD588\uC2B5\uB2C8\uB2E4.",e.appendChild(a);let o=this._btn("\uB2E4\uC2DC \uB3C4\uC804 (Space)",()=>this.newGame(),!0);e.appendChild(o),e.appendChild(this._btn("\uD0C0\uC774\uD2C0\uB85C",()=>this._showTitle())),this.overlay.innerHTML="",this.overlay.appendChild(e),this.overlay.style.display="flex";try{localStorage.setItem(Vg,JSON.stringify({lastPlace:t.place,won:t.won}))}catch{}}_bindInput(){window.addEventListener("keydown",e=>{if(this.keys[e.code]=!0,this.audio.resume(),e.code==="Space"&&this.sceneName==="result"&&(e.preventDefault(),this.newGame()),this.sceneName==="play"){if(this.ghost){if(e.code==="Enter"||e.code==="KeyL")if(this.online){this.online=!1,this.ghost=!1,this.net&&this.net.send({type:"leave"});try{sessionStorage.removeItem("snow_room")}catch{}this._showTitle()}else this.game&&(this.ghost=!1,this._showResult())}else this.online?(e.code==="KeyE"&&(this._queuedCraft=!0),e.code==="KeyQ"&&(this._queuedWall=!0),e.code==="KeyG"&&(this._queuedDecoy=!0),e.code==="KeyF"&&(this._queuedMelee=!0),e.code==="KeyX"&&(this._queuedUse=!0),e.code==="Space"&&(this._queuedJump=!0,this._jetHold=!0)):(e.code==="KeyE"&&this._tryCraft(),e.code==="KeyQ"&&this._act("wall"),e.code==="KeyG"&&this._act("decoy"),e.code==="KeyF"&&this._melee(),e.code==="KeyX"&&this._useItem(),e.code==="Space"&&(this.human.jetHold=!0,Nr(this.game,this.human)&&this.audio.throw()));["KeyW","KeyA","KeyS","KeyD","Space"].includes(e.code)&&e.preventDefault()}e.code==="KeyM"&&(this._showMinimap=!this._showMinimap)}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1,e.code==="Space"&&(this.human&&(this.human.jetHold=!1),this._jetHold=!1)}),window.addEventListener("blur",()=>{this.keys={},this.mouse.down=!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.audio.resume(),!this.locked&&this.sceneName==="play"&&this._toast("\uC870\uC900 \uC7A0\uAE08 \uD574\uC81C \u2014 \uD654\uBA74\uC744 \uD074\uB9AD\uD574 \uB2E4\uC2DC \uC7A0\uADF8\uC138\uC694")}),document.addEventListener("visibilitychange",()=>{document.hidden||this.audio.resume()}),document.addEventListener("mousemove",e=>{if(!this.locked||this.sceneName!=="play")return;let n=.0024;this.yaw+=e.movementX*n;let s=this.invertY?-1:1;this.pitch=Math.max(-.85,Math.min(.85,this.pitch-e.movementY*n*s))});let t=()=>this.canvas.getBoundingClientRect();this.canvas.addEventListener("mousedown",e=>{if(this.audio.resume(),this.sceneName==="drop"){let n=t(),s=this._dropScreenToWorld(e.clientX-n.left,e.clientY-n.top);s&&(this.dropTarget=s,this.online&&this.net&&this.net.send({type:"input",dropX:s.x,dropY:s.y}));return}if(this.sceneName==="play"){if(!this.locked){let n=this.canvas.requestPointerLock&&this.canvas.requestPointerLock({unadjustedMovement:!0});n&&n.catch&&n.catch(()=>this.canvas.requestPointerLock());return}this.mouse.down=!0,this.mouse.downAt=performance.now()}}),this.canvas.addEventListener("mouseup",()=>{if(this.sceneName==="play"&&this.locked&&this.mouse.down){let e=this.human,n=this.game;!(e&&e.mg&&n&&e.mg.ammo>0&&(this.online||e.mg.until>n.t))&&!this.ghost&&(this.online?e&&e.snowballs>0&&(this._queuedThrow=li(performance.now()-this.mouse.downAt),this.audio.throw(),this.viewKick=1):this._throw(performance.now()-this.mouse.downAt)),this.mouse.down=!1}}),this.isMobile="ontouchstart"in window&&/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent),this.isMobile?this._bindTouch():(this.canvas.addEventListener("touchstart",e=>{this.audio.resume(),this.sceneName==="play"&&(this.mouse.down=!0,this.mouse.downAt=performance.now()),e.preventDefault()},{passive:!1}),this.canvas.addEventListener("touchend",e=>{this.sceneName==="play"&&this.mouse.down&&(this._throw(performance.now()-this.mouse.downAt),this.mouse.down=!1),e.preventDefault()},{passive:!1}))}_bindTouch(){this.touch={moveId:null,moveOx:0,moveOy:0,mvx:0,mvy:0,lookId:null,lastLx:0,lastLy:0};let t=a=>{if(this.audio.resume(),this.sceneName==="drop"){let o=a.changedTouches[0],l=this.canvas.getBoundingClientRect(),c=this._dropScreenToWorld(o.clientX-l.left,o.clientY-l.top);c&&(this.dropTarget=c,this.online&&this.net&&this.net.send({type:"input",dropX:c.x,dropY:c.y})),a.preventDefault();return}if(this.sceneName==="play"){for(let o of a.changedTouches)o.clientX<this.vw*.42&&this.touch.moveId==null?(this.touch.moveId=o.identifier,this.touch.moveOx=o.clientX,this.touch.moveOy=o.clientY):this.touch.lookId==null&&(this.touch.lookId=o.identifier,this.touch.lastLx=o.clientX,this.touch.lastLy=o.clientY,this.mouse.down=!0,this.mouse.downAt=performance.now());a.preventDefault()}},e=a=>{for(let o of a.changedTouches)if(o.identifier===this.touch.moveId){let l=o.clientX-this.touch.moveOx,c=o.clientY-this.touch.moveOy,u=Math.hypot(l,c),h=12,f=60;if(u<h)this.touch.mvx=0,this.touch.mvy=0;else{let p=Math.min(1,(u-h)/f);this.touch.mvx=l/u*p,this.touch.mvy=c/u*p}}else if(o.identifier===this.touch.lookId){this.yaw+=(o.clientX-this.touch.lastLx)*.0058;let c=this.invertY?-1:1;this.pitch=Math.max(-.85,Math.min(.85,this.pitch-(o.clientY-this.touch.lastLy)*.0058*c)),this.touch.lastLx=o.clientX,this.touch.lastLy=o.clientY}a.preventDefault()},n=a=>{for(let o of a.changedTouches)if(o.identifier===this.touch.moveId&&(this.touch.moveId=null,this.touch.mvx=0,this.touch.mvy=0),o.identifier===this.touch.lookId&&(this.touch.lookId=null,this.sceneName==="play"&&this.mouse.down)){let l=performance.now()-this.mouse.downAt,c=this.human,u=this.game,h=c&&c.mg&&u&&c.mg.ammo>0;l>120&&!h&&!this.ghost&&(this.online?c&&c.snowballs>0&&(this._queuedThrow=li(l)):this._throw(l)),this.mouse.down=!1}a.preventDefault()};this.canvas.addEventListener("touchstart",t,{passive:!1}),this.canvas.addEventListener("touchmove",e,{passive:!1}),this.canvas.addEventListener("touchend",n,{passive:!1}),this.canvas.addEventListener("touchcancel",n,{passive:!1});let s=document.createElement("div");s.className="sr-touchbar";let r=(a,o,l)=>{let c=document.createElement("button");return c.className="sr-tbtn "+o,c.textContent=a,c.addEventListener("touchstart",u=>{u.preventDefault(),u.stopPropagation(),this.audio.resume(),l()},{passive:!1}),s.appendChild(c),c};r("\u2912","sr-tbtn-jump",()=>{this.ghost||(this.online?(this._queuedJump=!0,this._jetHold=!0,setTimeout(()=>{this._jetHold=!1},900)):this.human&&(this.human.jetHold=!0,Nr(this.game,this.human),setTimeout(()=>{this.human&&(this.human.jetHold=!1)},900)))}),r("\u{1F44A}","sr-tbtn-melee",()=>{this.ghost||(this.online?this._queuedMelee=!0:this._melee())}),r("E","sr-tbtn-craft",()=>{this.ghost||(this.online?this._queuedCraft=!0:this._tryCraft())}),r("X","sr-tbtn-item",()=>{this.ghost||(this.online?this._queuedUse=!0:this._useItem())}),r("Q","sr-tbtn-wall",()=>{this.ghost||(this.online?this._queuedWall=!0:this._act("wall"))}),this.root.appendChild(s),this.touchBar=s}_dropScreenToWorld(t,e){let n=this._dropMap;if(!n)return null;let s=(t-n.ox)/n.zoom,r=(e-n.oy)/n.zoom;return s<-30||r<-30||s>P.map.size+30||r>P.map.size+30?null:{x:Math.max(0,Math.min(P.map.size,s)),y:Math.max(0,Math.min(P.map.size,r))}}_tryCraft(){!this.human.alive||this.human.crafting||(Or(this.game,this.human)?this.audio.craftStart():this._toast("\uADFC\uCC98\uC5D0 \uB208\uB354\uBBF8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4 \u2014 \uBC18\uC9DD\uC774\uB294 \uD770 \uB454\uB355\uC744 \uCC3E\uC73C\uC138\uC694 (M \uC9C0\uB3C4)"))}_throw(t){if(!this.human.alive||this.human.crafting)return;if(this.human.snowballs<=0){this._toast("\uB208\uBB49\uCE58 \uC5C6\uC74C \u2014 \uB208\uB354\uBBF8\uC5D0\uC11C E\uB85C \uC81C\uC791\uD558\uC138\uC694");return}let e=li(t);ml(this.game,this.human,this.yaw,e),this.audio.throw(),this.viewKick=1}_act(t){!this.human.alive||this.human.crafting||(this.human.aim=this.yaw,t==="wall"&&(hh(this.game,this.human)?this.audio.wall():this._toast(`\uC124\uBCBD: \uB208\uBB49\uCE58 ${P.wall.cost}\uAC1C \uD544\uC694 (\uCD5C\uB300 ${P.wall.maxPerPlayer})`)),t==="decoy"&&(uh(this.game,this.human)?this.audio.decoy():this._toast(`\uBBF8\uB07C: \uB208\uBB49\uCE58 ${P.decoy.cost}\uAC1C \uD544\uC694 (\uCD5C\uB300 ${P.decoy.maxPerPlayer})`)))}_melee(){let t=this.human;if(!t.alive||t.crafting)return;let e=oh(this.game,t,this.yaw);this.meleeSwingAt=performance.now(),this.audio.throw(),e&&(this.hitMarkerUntil=performance.now()+300,this.audio.hit())}_useItem(){let t=this.human;if(!t.item){this._toast("\uAC00\uC9C4 \uC544\uC774\uD15C \uC5C6\uC74C \u2014 \uC0C1\uC810\uC5D0\uC11C \uAD6C\uB9E4 \uD6C4 \uC778\uBCA4\uD1A0\uB9AC\uC5D0\uC11C \uC7A5\uCC29");return}let e=lh(this.game,t,this.yaw);e&&(e.used==="hardtack"&&(this.audio.craftDone(),this._toast(`\u{1F36A} \uAC74\uBE75! +${P.shop.hardtack.healAmount} HP (\uB0A8\uC740 ${t.item?t.item.usesLeft:0}\uD68C)`)),e.used==="charge"&&(this.audio.fanfare(),this._toast(`\u2697\uFE0F \uB3CC\uACA9! ${P.shop.charge.durationSec}\uCD08 \uBB34\uC801 \u2014 \uBD80\uB52A\uD788\uBA74 \uB0A0\uC544\uAC04\uB2E4!`,4e3)),e.used==="sleepgun"&&(this.audio.throw(),this._toast(`\u{1F52B} \uC218\uBA74\uD0C4 \uBC1C\uC0AC! (\uB0A8\uC740 ${e.left}\uBC1C)`)),e.used==="grenade"&&(this.audio.throw(),this._toast(`\u{1F4A3} \uC218\uB958\uD0C4 \uD22C\uCC99 \u2014 3\uCD08 \uD6C4 \uD3ED\uBC1C! (\uB0A8\uC740 ${e.left}\uAC1C)`)),e.used==="rocket"&&(this.audio.throw(),this.viewKick=1,this._toast(`\u{1F9E8} \uD3ED\uCD95 \uBC1C\uC0AC!! (\uB0A8\uC740 ${e.left}\uBC1C)`)))}_update(t){if(!this.game)return;if(this.sceneName==="drop"){this.dropT+=t,!this.online&&this.dropT>=8&&this._enterPlay();return}if(this.sceneName!=="play")return;if(this.online){this._updateOnline(t);return}if(this.ghost){this._updateGhost(t),this.game&&!this.game.over?(Ss(this.game,t),this._drainSoloEvents()):this.game&&this.game.over&&this._showResult();return}let e=this.game,n=this.human;if(n.aim=this.yaw,n.alive&&!n.crafting){let u=0,h=0;if((this.keys.KeyW||this.keys.ArrowUp)&&(u+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(u-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(h+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(h-=1),this.touch&&(this.touch.mvx||this.touch.mvy)&&(u=-this.touch.mvy,h=this.touch.mvx),n.cover=!!this.keys.KeyC,u||h){let f=Math.cos(this.yaw),p=Math.sin(this.yaw),_=f*u+-p*h,y=p*u+f*h;We(e,n,_,y,t),this.bobT+=t*9}}n.alive&&!n.crafting&&n.mg&&n.mg.until>e.t&&n.mg.ammo>0&&this.mouse.down&&this.locked&&fl(e,n,this.yaw)&&(this.audio.throw(),this.viewKick=.4);let s=n.hp,r=n.crafting,a=n.alive,o=e.kills[n.id]||0,l=e.stats.hits;if(n.crafting&&(this._craftBeat=(this._craftBeat||0)+t,this._craftBeat>.5&&(this._craftBeat=0,this.audio.craftTick())),Ss(e,t),n.hp<s&&(this.audio.hit(),this.damageFlashUntil=performance.now()+250),(e.kills[n.id]||0)>o?this.hitMarkerUntil=performance.now()+400:e.stats.hits>l&&(this.hitMarkerUntil=Math.max(this.hitMarkerUntil,performance.now()+220)),a&&!n.alive&&(this._humanLastCause="\uB208\uBB49\uCE58\uC5D0 \uB9DE\uC544 \uD0C8\uB77D\uD588\uC2B5\uB2C8\uB2E4.",!e.over)){this.ghost=!0;let u=e.players.length-e.placementOrder.indexOf(n.id);this.ghostPos={x:n.x,y:n.y,z:60},this._toast(`\u{1F480} \uD0C8\uB77D \u2014 ${u}\uC704 / ${e.players.length}\uBA85 \xB7 \uC720\uB839 \uBAA8\uB4DC\uB85C \uAD00\uC804 (WASD+\uB9C8\uC6B0\uC2A4, Space \uC0C1\uC2B9/C \uD558\uAC15, Enter \uACB0\uACFC \uBCF4\uAE30)`,7e3),this.audio.gameover();return}for(let u of e.events.splice(0)){if(u.type==="kill"){let h=e.players.find(p=>p.id===u.by),f=e.players.find(p=>p.id===u.victim);h&&f&&this.killFeed.push({text:`${h.name} \u2744\u2192 ${f.name}`,until:performance.now()+4200})}if(u.type==="pad"&&u.id===n.id&&(this.audio.throw(),this._toast("\u{1F300} \uC2A4\uD504\uB9C1 \uC810\uD504!",1500)),u.type==="swing"&&u.id!==n.id){let h=this.actors.get(u.id);h&&h.userData&&(h.userData.swingAt=performance.now())}u.type==="placeReward"&&u.id===n.id&&(this._bankCaps(u.amount),this.capsFxUntil=performance.now()+2e3,this.capsFxAmount=u.amount,this._toast(`\u{1F3C5} ${u.place}\uB4F1 \uBCF4\uC0C1 \u2014 \uBCD1\uB69C\uAED1 +${u.amount}!`,4500)),u.type==="shieldBlock"&&u.id===n.id&&(this.shieldFlashUntil=performance.now()+300,this.audio.wall(),u.left===0&&this._toast("\u{1F6E1} \uBC29\uD328\uAC00 \uBD80\uC11C\uC84C\uC2B5\uB2C8\uB2E4!"))}this.killFeed.length>5&&(this.killFeed=this.killFeed.slice(-5));let c=Xi(e);if(c!==this._lastSurvivors&&(this.audio.setIntensity(c),this._lastSurvivors=c),e.zone.shrinks!==this._lastShrinks&&(this._lastShrinks=e.zone.shrinks,this.audio.zoneWarn(),this._toast("\u26A0 \uB208\uBCF4\uB77C \uAD6C\uC5ED\uC774 \uC881\uC544\uC9D1\uB2C8\uB2E4!")),r&&!n.crafting&&n.craftTimer<=0&&n.alive&&this.audio.craftDone(),n.alive){let u=ul(e,n);u>0&&(this._bankCaps(u),this.capsFxUntil=performance.now()+1600,this.capsFxAmount=u,this.audio.craftDone(),this._toast(`\u{1F37E} \uBCD1\uB69C\uAED1 +${u}! (\uC9C0\uAC11 ${this._wallet().caps}\uAC1C)`,2600));let h=Dr(e,n);if(h==="club"&&(this.audio.wall(),this._toast("\u{1F3CF} \uBABD\uB465\uC774 \uD68D\uB4DD! F\uD0A4 \uADFC\uC811 \uACF5\uACA9\uC774 \uAC15\uD574\uC84C\uB2E4 (26 \uD53C\uD574 + \uB109\uBC31)",4e3)),h==="heal"&&(this.audio.craftDone(),this._toast(`\u{1F48A} \uD790\uD329 +${P.items.healAmount} HP`)),h==="shield"&&(this.audio.wall(),this._toast(`\u{1F6E1} \uBC29\uD328 \uD68D\uB4DD \u2014 \uB2E4\uC74C ${P.items.shieldHits}\uD68C \uD53C\uACA9 \uC644\uC804 \uBC29\uC5B4 (\uB0B4\uAD6C\uB3C4 ${P.items.shieldHits})`)),h&&h.kind==="pill"){this.audio.fanfare();let f=h.buff,p=f.kind==="mg"?`\u{1F48A}\u{1F525} \uB208 \uAE30\uAD00\uCD1D!! ${P.items.pill.mgAmmo}\uBC1C \xB7 ${P.items.pill.durationSec}\uCD08 \u2014 \uC88C\uD074\uB9AD \uD640\uB4DC\uB85C \uC5F0\uC0AC`:f.kind==="speed"?`\u{1F48A} \uC54C\uC57D: \uC774\uB3D9\uC18D\uB3C4 +${Math.round((f.mul-1)*100)}% (${P.items.pill.durationSec}\uCD08)`:f.kind==="power"?`\u{1F48A} \uC54C\uC57D: \uACF5\uACA9\uB825 +${Math.round((f.mul-1)*100)}% (${P.items.pill.durationSec}\uCD08)`:`\u{1F48A} \uC54C\uC57D: \uC81C\uC791\uC18D\uB3C4 2\uBC30 (${P.items.pill.durationSec}\uCD08)`;this._toast(p,4200)}}this.viewKick>0&&(this.viewKick=Math.max(0,this.viewKick-t*4)),e.over&&this._showResult()}_updateGhost(t){this.ghostPos||(this.ghostPos={x:this.human?this.human.x:P.map.size/2,y:this.human?this.human.y:P.map.size/2,z:60});let e=260*t,n=0,s=0;(this.keys.KeyW||this.keys.ArrowUp)&&(n+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(n-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(s+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(s-=1),this.touch&&(this.touch.mvx||this.touch.mvy)&&(n=-this.touch.mvy,s=this.touch.mvx);let r=Math.cos(this.yaw),a=Math.sin(this.yaw);this.ghostPos.x=Math.max(0,Math.min(P.map.size,this.ghostPos.x+(r*n-a*s)*e)),this.ghostPos.y=Math.max(0,Math.min(P.map.size,this.ghostPos.y+(a*n+r*s)*e)),this.keys.Space&&(this.ghostPos.z=Math.min(400,this.ghostPos.z+160*t)),(this.keys.KeyC||this.keys.ShiftLeft||this.keys.ShiftRight||this.keys.ControlLeft)&&(this.ghostPos.z=Math.max(10,this.ghostPos.z-160*t)),this.pitch<-.25&&(this.keys.KeyW||this.keys.ArrowUp)&&(this.ghostPos.z=Math.max(10,this.ghostPos.z+Math.sin(this.pitch)*200*t))}_drainSoloEvents(){let t=this.game;for(let e of t.events.splice(0)){if(e.type==="kill"){let n=t.players.find(r=>r.id===e.by),s=t.players.find(r=>r.id===e.victim);n&&s&&this.killFeed.push({text:`${n.name} \u2744\u2192 ${s.name}`,until:performance.now()+4200})}e.type==="placeReward"&&this.human&&e.id===this.human.id&&(this._bankCaps(e.amount),this._toast(`\u{1F3C5} ${e.place}\uB4F1 \uBCF4\uC0C1 \u2014 \uBCD1\uB69C\uAED1 +${e.amount}!`,4500))}this.killFeed.length>5&&(this.killFeed=this.killFeed.slice(-5)),t.zone.shrinks!==this._lastShrinks&&(this._lastShrinks=t.zone.shrinks,this.audio.zoneWarn())}_updateOnline(t){let e=this.human;if(!e)return;if(this.ghost){this._updateGhost(t);return}let n=0,s=0;(this.keys.KeyW||this.keys.ArrowUp)&&(n+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(n-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(s+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(s-=1),this.touch&&(this.touch.mvx||this.touch.mvy)&&(n=-this.touch.mvy,s=this.touch.mvx);let r=Math.cos(this.yaw),a=Math.sin(this.yaw),o=n||s?r*n-a*s:0,l=n||s?a*n+r*s:0;(n||s)&&(this.bobT+=t*9),e.aim=this.yaw;let c=e.mg&&e.mg.ammo>0;this.net.send({type:"input",mvx:o,mvy:l,aim:this.yaw,cover:!!this.keys.KeyC,jump:this._queuedJump||void 0,craft:this._queuedCraft||void 0,wall:this._queuedWall||void 0,decoy:this._queuedDecoy||void 0,melee:this._queuedMelee||void 0,useItem:this._queuedUse||void 0,jetHold:this._jetHold||void 0,throwCharge:this._queuedThrow!=null?this._queuedThrow:void 0,mg:!!(c&&this.mouse.down&&this.locked)}),this._queuedMelee&&(this.meleeSwingAt=performance.now(),this.audio.throw()),this._queuedJump=this._queuedCraft=this._queuedWall=this._queuedDecoy=this._queuedMelee=this._queuedUse=!1,this._queuedThrow=null,this._lastHp!=null&&e.hp<this._lastHp&&(this.audio.hit(),this.damageFlashUntil=performance.now()+250),this._lastHp=e.hp,e.crafting?(this._craftBeat=(this._craftBeat||0)+t,this._craftBeat>.5&&(this._craftBeat=0,this.audio.craftTick()),this._wasCrafting=!0):this._wasCrafting&&(this._wasCrafting=!1,this.audio.craftDone())}_sync3d(t){let e=this.game,n=this.scene3;if(!n)return;let s=this.human||{x:e.zone.cx,y:e.zone.cy,z:40},r,a,o;if(this.ghost&&this.ghostPos)r=this.ghostPos.x,a=this.ghostPos.z,o=this.ghostPos.y;else{let m=Math.sin(this.bobT)*.8;r=s.x,a=Hr+m+(s.z||0),o=s.y}if(this.shakeUntil&&t<this.shakeUntil){let m=(this.shakeUntil-t)/320;r+=(Math.random()-.5)*4*m,a+=(Math.random()-.5)*3*m,o+=(Math.random()-.5)*4*m}this.camera.position.set(r,a,o);let l=r+Math.cos(this.yaw)*Math.cos(this.pitch)*10,c=a+Math.sin(this.pitch)*10,u=o+Math.sin(this.yaw)*Math.cos(this.pitch)*10;this.camera.lookAt(l,c,u);for(let m of e.players){if(m.id===e._humanId)continue;let d=this.actors.get(m.id);if(!d)continue;d.visible=m.alive;let x=this._hpSprite(m);if(!m.alive){x&&(x.visible=!1);continue}d.position.set(m.x,m.z||0,m.y),d.rotation.y=-m.aim+Math.PI/2;let v=Math.sin(t/130+m.id)*.5,g=d.userData;if(g.legL&&(g.legL.rotation.x=v,g.legR.rotation.x=-v),m.hasClub&&!g.clubMesh){let E=new lt(new ye(Pe*.08,Pe*.16,Pe*1.1,8),new qt({color:10251071,roughness:.85}));E.position.set(0,-Pe*.75,Pe*.1),E.rotation.x=Math.PI/2.4,g.armR.add(E),g.clubMesh=E}g.clubMesh&&(g.clubMesh.visible=!!m.hasClub);let T=g.swingAt?(t-g.swingAt)/280:99;if(T<1?(g.armR.rotation.x=-2.4+T*2.6,g.armL.rotation.x=v*.5):m.crafting?(g.armL.rotation.x=-1.2,g.armR.rotation.x=-1.2):m.hasClub?(g.armR.rotation.x=-.5,g.armL.rotation.x=v*.5):(g.armL.rotation.x=v*.5,g.armR.rotation.x=-v*.5),m.sleepUntil>e.t?(d.rotation.z=Math.PI/2*.85,d.position.y=3):d.rotation.z!==0&&!(m.kbVx||m.kbVy)&&(d.rotation.z=0),wn(e,m)&&!g.chargeGlow){let E=new lt(new xe(Pe*1.5,14,10),new he({color:16732208,transparent:!0,opacity:.28,blending:vn,depthWrite:!1}));E.position.y=Pe*1.2,d.add(E),g.chargeGlow=E}if(g.chargeGlow&&(g.chargeGlow.visible=wn(e,m)),m.shieldHits>0&&!g.shield){let E=new lt(new xe(Pe*1.45,18,14),new he({color:5087231,transparent:!0,opacity:.22,blending:vn,depthWrite:!1}));E.position.y=Pe*1.25,d.add(E),g.shield=E}g.shield&&(g.shield.visible=m.shieldHits>0,m.shieldHits>0&&(g.shield.material.opacity=.16+Math.sin(t/180)*.07)),x&&(x.visible=!0,x.position.set(m.x,Pe*2.75+(m.z||0),m.y),(x.userData.lastHp!==m.hp||x.userData.lastShield!==m.shieldHits)&&this._paintHpSprite(x,m))}for(let m of e.corpses){if(this.corpseSet.has(m.id))continue;this.corpseSet.add(m.id);let d=this.actors.get(m.id);d?this.actors.delete(m.id):(d=this._makeFigure(m.skin,!0),n.add(d)),d.visible=!0,d.position.set(m.x,2.4,m.y),d.rotation.set(-Math.PI/2,0,m.yaw+Math.PI/2),this._clumpGeo=this._clumpGeo||new xe(2,6,5),this._clumpMat=this._clumpMat||new qt({color:16777215,roughness:1});for(let x=0;x<2;x++){let v=new lt(this._clumpGeo,this._clumpMat),g=x/2*Math.PI*2+m.yaw;v.position.set(m.x+Math.cos(g)*9,1,m.y+Math.sin(g)*9),v.matrixAutoUpdate=!1,v.updateMatrix(),n.add(v)}}let h=new Set;for(let m of e.snowballs){h.add(m.id);let d=this.sbMeshes.get(m.id);if(!d){this._sbShared=this._sbShared||{geoBall:new xe(3.4,10,8),geoBallFlat:new xe(2.4,10,8),geoTail:new xe(1,8,6),matBall:new qt({color:16777215,emissive:12576511,emissiveIntensity:.9,roughness:.4}),matBallFlat:new qt({color:16777215,emissive:16769162,emissiveIntensity:1.3,roughness:.4}),matTail:new he({color:14676735,transparent:!0,opacity:.45,depthWrite:!1})};let S=this._sbShared;d=new pe;let M=new lt(m.flat?S.geoBallFlat:S.geoBall,m.flat?S.matBallFlat:S.matBall);d.add(M);let I=new lt(S.geoTail,S.matTail);I.scale.set(1.6,1.6,7),d.add(I),d.userData.tail=I,n.add(d),this.sbMeshes.set(m.id,d)}let x=m.range>0?m.traveled/m.range:0,v=m.flat?0:Math.min(60,m.range*.16),g=Math.max(0,4*v*x*(1-x))+(m.flat?Hr-2:12),T=m.x-(d.userData.px??m.x),E=g-(d.userData.py??g),C=m.y-(d.userData.pz??m.y);d.userData.px=m.x,d.userData.py=g,d.userData.pz=m.y,d.position.set(m.x,g,m.y);let R=Math.hypot(T,E,C);if(R>.01){let S=d.userData.tail;S.position.set(-T/R*6,-E/R*6,-C/R*6),S.lookAt(d.position.x+T,d.position.y+E,d.position.z+C)}}for(let[m,d]of this.sbMeshes)h.has(m)||(this.scene3.remove(d),this.sbMeshes.delete(m));let f=new Set;for(let m of e.walls){f.add(m.id);let d=this.wallMeshes.get(m.id);if(!d){d=new pe;let v=P.wall.height||26,g=new lt(new ke(P.wall.len,v,2),new he({color:8377599,transparent:!0,opacity:.22,blending:vn,depthWrite:!1,side:Ie}));g.position.y=v/2,d.add(g);let T=new he({color:12577535,transparent:!0,opacity:.8});for(let[S,M,I,B]of[[0,v,P.wall.len,1.2],[0,.6,P.wall.len,1.2],[-P.wall.len/2,v/2,1.2,v],[P.wall.len/2,v/2,1.2,v]]){let k=new lt(new ke(I,B,2.4),T);k.position.set(S,M,0),d.add(k)}let E=document.createElement("canvas");E.width=64,E.height=10;let C=new fs(E),R=new us(new zi({map:C,depthTest:!1,transparent:!0}));R.scale.set(22,3.4,1),R.position.y=v+5,d.add(R),d.userData={panel:g,bar:R,cv:E,tex:C,lastHp:-1,splats:[]},d.position.set(m.x,0,m.y),d.rotation.y=-m.angle,this.scene3.add(d),this.wallMeshes.set(m.id,d)}let x=d.userData;if(x.lastHp!==m.hp){let v=x.cv.getContext("2d");v.clearRect(0,0,64,10),v.fillStyle="rgba(0,0,0,0.6)",v.fillRect(0,0,64,10);let g=Math.max(0,m.hp/P.wall.durability);v.fillStyle=g>.5?"#7fd4ff":g>.25?"#FF6B35":"#DC143C",v.fillRect(1,1,62*g,8),x.tex.needsUpdate=!0,x.lastHp=m.hp,x.panel.material.opacity=.14+g*.12}if(m.lastHitAt!=null&&e.t-m.lastHitAt<.25&&(x.panel.material.opacity=.5,!x.lastSplatAt||x.lastSplatAt!==m.lastHitAt)){x.lastSplatAt=m.lastHitAt;let v=new lt(new gs(3.6,10),new he({color:16777215,transparent:!0,opacity:.9,depthWrite:!1}));v.position.set((Math.random()-.5)*P.wall.len*.7,6+Math.random()*(P.wall.height-10),1.4),d.add(v),x.splats.push({mesh:v,at:t})}x.splats=x.splats.filter(v=>{let g=(t-v.at)/1e3;return g>3?(d.remove(v.mesh),!1):(v.mesh.material.opacity=.9*(1-g/3),!0)})}for(let[m,d]of this.wallMeshes)f.has(m)||(this.scene3.remove(d),this.wallMeshes.delete(m));let p=new Set;for(let m of e.decoys)if(p.add(m.id),!this.decoyMeshes.has(m.id)){let d=new pe,x=new lt(new xe(6,10,8),new qt({color:16777215,roughness:.8}));x.position.y=6,d.add(x);let v=new lt(new xe(4,10,8),new qt({color:16777215,roughness:.8}));v.position.y=13.5,d.add(v);let g=new lt(new Hn(.9,3.4,6),new qt({color:16739125}));g.rotation.x=Math.PI/2,g.position.set(0,13.5,4),d.add(g),d.position.set(m.x,0,m.y),this.scene3.add(d),this.decoyMeshes.set(m.id,d)}for(let[m,d]of this.decoyMeshes)p.has(m)||(this.scene3.remove(d),this.decoyMeshes.delete(m));for(let m of e.piles){let d=this.pileMeshes&&this.pileMeshes.get(m.id);if(d){let x=m.cooldownUntil>e.t?this._pileMatCooling:this._pileMatReady;d.material!==x&&(d.material=x),d.position.set(m.x,0,m.y)}}if(this.pickupMeshes)for(let m of e.pickups){let d=this.pickupMeshes.get(m.id);if(!d)continue;m.kind==="pill"&&m.buff&&d.userData.buffKind!==m.buff.kind&&(d=this._makePickupMesh(m));let x=m.takenUntil>e.t;d.visible=!x,x||(d.position.set(m.x,Math.sin(t/400+m.id)*1.6,m.y),d.rotation.y=t/800)}if(this.capMeshes)for(let m of e.caps){let d=this.capMeshes.get(m.id);!d&&!m.gone&&(d=this._makeCapMesh(m)),d&&(d.visible=!m.gone&&m.takenUntil<=e.t,d.visible&&(d.position.set(m.x,Math.sin(t/350+m.id)*.8,m.y),d.rotation.y=t/1200))}if(this.grenadeMeshes){let m=new Set;for(let d of e.grenades){m.add(d.id);let x=this.grenadeMeshes.get(d.id);if(!x){x=new pe;let S=new pe,M=new lt(new xe(9,16,14),new qt({color:16777215,roughness:.65,emissive:11190223,emissiveIntensity:.25}));S.add(M);for(let j=0;j<5;j++){let V=new lt(new xe(2.6,8,6),new qt({color:15857659,roughness:.9})),nt=j*2.4;V.position.set(Math.cos(nt)*7,Math.sin(nt*1.3)*6,Math.sin(nt)*7),S.add(V)}let I=new lt(new Vn(9.2,1,8,24),new qt({color:10475760,roughness:.4,metalness:.3}));I.rotation.x=Math.PI/2,S.add(I);let B=new lt(new ye(2.6,3.2,4,10),new qt({color:9082789,metalness:.6,roughness:.4}));B.position.y=10.5,S.add(B);let k=new lt(new Vn(2,.5,6,14),new qt({color:13934615,metalness:.7,roughness:.3}));k.position.set(3.4,11,0),k.rotation.y=Math.PI/3,S.add(k);let G=new lt(new xe(1.4,8,6),new he({color:16724016}));G.position.y=13,S.add(G),x.add(S);let J=new lt(new gs(d.radius,48),new he({color:16726832,transparent:!0,opacity:.12,side:Ie,depthWrite:!1}));J.rotation.x=-Math.PI/2,J.position.y=.7;let X=new lt(new Tr(d.radius-3.5,d.radius,48),new he({color:16726832,transparent:!0,opacity:.5,side:Ie,depthWrite:!1}));X.rotation.x=-Math.PI/2,X.position.y=.8,x.userData={ring:X,zone:J,body:S,fuse:G,boomAt:null},this.scene3.add(J),this.scene3.add(X),this.scene3.add(x),this.grenadeMeshes.set(d.id,x)}x.position.set(d.x,(d.z||0)+6,d.y),x.rotation.y=t/300,x.rotation.z=t/500;let{ring:v,zone:g,body:T,fuse:E}=x.userData;v.position.set(d.lx,.8,d.ly),g.position.set(d.lx,.7,d.ly);let R=d.explodeAt-e.t<1?60:160;if(v.material.opacity=.35+Math.abs(Math.sin(t/R))*.45,g.material.opacity=.08+Math.abs(Math.sin(t/R))*.12,E.material.color.setHex(Math.sin(t/R)>0?16724016:6688784),d.exploded){T.visible=!1,x.userData.boomAt||(x.userData.boomAt=t,this._spawnBoomFx(d.lx,d.ly,d.radius),this.audio.hit(),(this.shakeUntil==null||this.shakeUntil<t+320)&&(this.shakeUntil=t+320));let S=(t-x.userData.boomAt)/500;v.material.opacity=Math.max(0,.9-S),g.material.opacity=Math.max(0,.5-S),v.scale.setScalar(1+S*1.6)}}for(let[d,x]of this.grenadeMeshes)m.has(d)||(this.scene3.remove(x),this.scene3.remove(x.userData.ring),this.scene3.remove(x.userData.zone),this.grenadeMeshes.delete(d));this._boomFx&&(this._boomFx=this._boomFx.filter(d=>{let x=(t-d.at)/1e3;return x>1.1?(this.scene3.remove(d.grp),!1):(d.grp.children.forEach((v,g)=>{let T=d.speeds[g];v.position.x+=T.x*.016,v.position.z+=T.z*.016,v.position.y=Math.max(1,v.position.y+T.y*.016-x*2.4),v.material.opacity=Math.max(0,.95-x)}),!0)}))}if(this.padMeshes)for(let[,m]of this.padMeshes){let d=m.userData.plate;d&&(d.position.y=17+Math.sin(t/260)*1.4)}let _=e.zone.radius;if(this.zoneWall.scale.set(_,1,_),this.zoneMat.opacity=.14+Math.sin(t/300)*.05,Math.abs(this._zoneRingR-_)>1&&(this.zoneRing.geometry.dispose(),this.zoneRing.geometry=new Vn(_,2.2,8,128),this._zoneRingR=_),this.zoneBeams){let m=t/9e3;this.zoneBeams.children.forEach((d,x)=>{let v=d.userData.angle+m;d.position.x=Math.cos(v)*_,d.position.z=Math.sin(v)*_,d.material.opacity=.4+Math.sin(t/160+x)*.2})}let y=this.snowPts.geometry.attributes.position;for(let m=0;m<y.count;m++){let d=y.getY(m)-.35;d<0&&(d=160),y.setY(m,d)}y.needsUpdate=!0}_loop(){let t=performance.now(),e=n=>{let s=(n-t)/1e3;t=n,s=Math.min(.05,s)*this.timeScale,this.game&&(this.sceneName==="play"||this.sceneName==="drop")&&this._update(s),this.game&&this.scene3&&(this.sceneName==="drop"?this._renderDrop(n):(this._sync3d(n),this.renderer.render(this.scene3,this.camera),this._renderFx(n)),this._renderHud()),requestAnimationFrame(e)};requestAnimationFrame(e)}_renderDrop(t){let e=this.game;if(this._sync3d(t),this.dropPlan)for(let m of e.players){if(m.id===e._humanId||!m.alive)continue;let d=this.dropPlan.get(m.id),x=this.actors.get(m.id);if(!d||!x)continue;if(!d.chute){let g=Pe,T=new pe,E=new lt(new xe(g*1.7,12,8,0,Math.PI*2,0,Math.PI/2),new qt({color:[16739125,8377599,16766011,10477764][m.id%4],roughness:.85,side:Ie}));E.position.y=g*4.4,T.add(E);let C=new he({color:14540253});for(let[R,S]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let M=new lt(new ye(.14,.14,g*2.2,3),C);M.position.set(R*g*.9,g*3.3,S*g*.9),M.rotation.z=-R*.32,M.rotation.x=S*.32,T.add(M)}x.add(T),d.chute=T}let v=(this.dropT-d.delay)/d.fallSec;if(v<1){let g=v<=0?620:620*(1-v)*(1-v),T=Math.sin(t/500+d.sway)*14*Math.max(0,1-v);x.position.y=g+.01,x.position.x=m.x+T,x.rotation.z=Math.sin(t/400+d.sway)*.18*Math.max(0,1-v),d.chute.visible=v>0;let E=this.hpSprites&&this.hpSprites.get(m.id);E&&(E.visible=!1)}else x.rotation.z=0,d.chute.visible=!1}let n=this.dropTarget?this.dropTarget.x:e.zone.cx,s=this.dropTarget?this.dropTarget.y:e.zone.cy,r=Math.min(1,this.dropT/8),a=r*r*(3-2*r),o=620*(1-a)+Hr,l=-Math.PI/2+a*1.1,c=420*(1-a)+8;this.camera.position.set(n+Math.cos(l)*c,o,s+Math.sin(l)*c);let u=8*(1-a)+Hr*a;this.camera.lookAt(n,u,s),this._dropLandYaw=l+Math.PI,this.renderer.render(this.scene3,this.camera);let h=this.fxCtx;h.clearRect(0,0,this.vw,this.vh);let f=Math.min(this.vh*.55,340),p=f/P.map.size,_=this.vw-f-24,y=(this.vh-f)/2;this._dropMap={ox:_,oy:y,zoom:p},h.fillStyle="rgba(13,27,42,0.72)",h.fillRect(_-8,y-26,f+16,f+40),h.strokeStyle="#7fd4ff",h.strokeRect(_-8,y-26,f+16,f+40),h.fillStyle="#fff",h.font="bold 13px system-ui",h.textAlign="center",h.fillText("\u{1F5FA} \uD074\uB9AD\uD574\uC11C \uB099\uD558 \uC9C0\uC810 \uC120\uD0DD",_+f/2,y-9),h.fillStyle="rgba(200,220,235,0.25)",h.fillRect(_,y,f,f),h.beginPath(),h.arc(e.zone.cx*p+_,e.zone.cy*p+y,e.zone.radius*p,0,Math.PI*2),h.strokeStyle="#7fd4ff",h.lineWidth=2,h.stroke();for(let m of e.piles)h.fillStyle="rgba(255,255,255,0.95)",h.fillRect(m.x*p+_-1,m.y*p+y-1,3,3);for(let m of e.pickups)h.fillStyle=m.kind==="heal"?"#ff6b6b":m.kind==="shield"?"#4d9fff":"#ffd43b",h.fillRect(m.x*p+_-1.5,m.y*p+y-1.5,3.5,3.5);if(this.dropTarget){let m=this.dropTarget.x*p+_,d=this.dropTarget.y*p+y;h.strokeStyle="#FF6B35",h.lineWidth=3,h.beginPath(),h.arc(m,d,11,0,Math.PI*2),h.stroke(),h.beginPath(),h.moveTo(m-16,d),h.lineTo(m+16,d),h.moveTo(m,d-16),h.lineTo(m,d+16),h.stroke()}}_renderFx(t){let e=this.fxCtx;if(e.clearRect(0,0,this.vw,this.vh),this.sceneName!=="play"||!this.human)return;if(this.ghost){e.fillStyle="rgba(13,27,42,0.75)",e.fillRect(this.vw/2-190,14,380,34),e.fillStyle="#A8D8EA",e.font="bold 14px system-ui",e.textAlign="center",e.fillText(`\u{1F47B} \uAD00\uC804 \uC911 \xB7 \uC0DD\uC874 ${this._lastSurvivors??""} \xB7 Space \uC0C1\uC2B9 / C \uD558\uAC15 \xB7 Enter=\uB098\uAC00\uAE30`,this.vw/2,36);return}let n=this.human,s=this.game;if(Math.hypot(n.x-s.zone.cx,n.y-s.zone.cy)>s.zone.radius&&(e.fillStyle="rgba(90,140,200,0.25)",e.fillRect(0,0,this.vw,this.vh)),t<this.damageFlashUntil){let o=e.createRadialGradient(this.vw/2,this.vh/2,this.vh*.35,this.vw/2,this.vh/2,this.vh*.75);o.addColorStop(0,"rgba(220,20,60,0)"),o.addColorStop(1,"rgba(220,20,60,0.5)"),e.fillStyle=o,e.fillRect(0,0,this.vw,this.vh)}if(wn(s,n)){let o=.18+Math.abs(Math.sin(t/130))*.22,l=e.createRadialGradient(this.vw/2,this.vh/2,this.vh*.3,this.vw/2,this.vh/2,this.vh*.75);l.addColorStop(0,"rgba(255,60,30,0)"),l.addColorStop(1,`rgba(255,60,30,${o})`),e.fillStyle=l,e.fillRect(0,0,this.vw,this.vh),e.fillStyle=`rgba(255,80,40,${.5+Math.sin(t/130)*.3})`,e.font="bold 20px system-ui",e.textAlign="center",e.fillText(`\u2697\uFE0F \uB3CC\uACA9!! ${Math.ceil(n.chargeUntil-s.t)}\uCD08`,this.vw/2,70)}if(n.shieldHits>0||t<(this.shieldFlashUntil||0)){let l=t<(this.shieldFlashUntil||0)?.45:.14+Math.sin(t/300)*.04,c=e.createRadialGradient(this.vw/2,this.vh/2,this.vh*.38,this.vw/2,this.vh/2,this.vh*.72);c.addColorStop(0,"rgba(77,159,255,0)"),c.addColorStop(1,`rgba(77,159,255,${l})`),e.fillStyle=c,e.fillRect(0,0,this.vw,this.vh)}if(t<(this.capsFxUntil||0)){let o=1-(this.capsFxUntil-t)/1600,l=this.vw/2,c=this.vh*.34;e.save(),e.globalAlpha=1-o;for(let u=0;u<10;u++){let h=u/10*Math.PI*2+o*2,f=20+o*70;e.fillStyle=u%2?"#FFD43B":"#D4A017",e.beginPath(),e.arc(l+Math.cos(h)*f,c+Math.sin(h)*f*.6,4-o*2,0,Math.PI*2),e.fill()}e.fillStyle="#FFD43B",e.font=`bold ${Math.round(30-o*8)}px system-ui`,e.textAlign="center",e.shadowColor="#000",e.shadowBlur=6,e.fillText(`\u{1F37E} +${this.capsFxAmount}`,l,c-20-o*26),e.restore()}if(this.meleeSwingAt&&t-this.meleeSwingAt<180){let o=(t-this.meleeSwingAt)/180;e.save(),e.globalAlpha=.7*(1-o),e.strokeStyle=this.human.hasClub?"#c98a4b":"#ffffff",e.lineWidth=7-o*4,e.beginPath(),e.arc(this.vw/2,this.vh/2,60+o*80,-.9+o*1.4,.2+o*1.4),e.stroke(),e.restore()}if(this._renderViewModel(e,t),this._renderCrosshair(e,t),!this.locked&&n.alive){e.fillStyle="rgba(13,27,42,0.75)";let o=420,l=54;e.fillRect(this.vw/2-o/2,this.vh*.62,o,l),e.strokeStyle="#FF6B35",e.strokeRect(this.vw/2-o/2,this.vh*.62,o,l),e.fillStyle="#fff",e.font="bold 16px system-ui",e.textAlign="center",e.fillText("\u{1F5B1} \uD654\uBA74\uC744 \uD074\uB9AD\uD574 \uC870\uC900 \uC7A0\uAE08 (\uB9C8\uC6B0\uC2A4\uB85C \uC2DC\uC810 \uD68C\uC804)",this.vw/2,this.vh*.62+33)}Fr(s,n)&&!n.crafting&&n.alive&&(e.fillStyle="#FF6B35",e.font="bold 17px system-ui",e.textAlign="center",e.fillText("E \u2014 \uB208\uBB49\uCE58 \uC81C\uC791 (3\uCD08 \uBB34\uBC29\uBE44)",this.vw/2,this.vh*.56))}_renderViewModel(t,e){let n=this.human;if(!n.alive)return;let s=this.vw/2,r=this.vh,a=Math.sin(this.bobT)*5,o=this.viewKick||0,l=this.mouse.down?li(performance.now()-this.mouse.downAt):0,c=l*26+o*-34,u=s+this.vw*.21,h=r-64+a+c*.6;if(t.fillStyle="#1B2A4A",t.beginPath(),t.moveTo(u+90,r+10),t.quadraticCurveTo(u+40,h+40,u,h+8),t.lineTo(u+34,h-14),t.quadraticCurveTo(u+90,h+20,u+130,r+10),t.closePath(),t.fill(),t.fillStyle="#FF6B35",t.beginPath(),t.ellipse(u+16,h+2,20,12,-.5,0,Math.PI*2),t.fill(),t.fillStyle="#2c3e63",t.beginPath(),t.ellipse(u,h-6,24,19,-.35,0,Math.PI*2),t.fill(),n.hasClub){let f=this.meleeSwingAt?(e-this.meleeSwingAt)/280:99,p=f<1?-1.1+f*1.3:-.35;t.save(),t.translate(u-4,h-8),t.rotate(p);let _=t.createLinearGradient(0,0,0,-95);_.addColorStop(0,"#7a5230"),_.addColorStop(1,"#a97c4f"),t.fillStyle=_,t.beginPath(),t.moveTo(-5,0),t.lineTo(5,0),t.lineTo(9,-78),t.lineTo(-9,-78),t.closePath(),t.fill(),t.beginPath(),t.ellipse(0,-80,9.5,7,0,0,Math.PI*2),t.fill(),t.strokeStyle="#5f3f24",t.lineWidth=2,t.beginPath(),t.moveTo(-4,-20),t.lineTo(4,-22),t.stroke(),t.restore()}if(n.snowballs>0&&!n.crafting&&(t.fillStyle="#ffffff",t.strokeStyle="#bcd7e8",t.beginPath(),t.arc(u-6,h-18,15+l*3,0,Math.PI*2),t.fill(),t.stroke()),n.crafting){let f=1-n.craftTimer/(n.craftTotal||P.craft.seconds),p=Math.sin(e/90)*6;t.fillStyle="#2c3e63",t.beginPath(),t.ellipse(s-46+p,r-58,26,20,.4,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(s+46-p,r-58,26,20,-.4,0,Math.PI*2),t.fill(),t.fillStyle="#fff",t.strokeStyle="#bcd7e8",t.beginPath(),t.arc(s,r-66,17+f*6,0,Math.PI*2),t.fill(),t.stroke()}}_renderCrosshair(t,e){let n=this.vw/2,s=this.vh/2,r=this.human;t.strokeStyle="rgba(255,255,255,0.95)",t.lineWidth=2;let a=5+(this.mouse.down?li(performance.now()-this.mouse.downAt)*8:0),o=8;if(t.beginPath(),t.moveTo(n-a-o,s),t.lineTo(n-a,s),t.moveTo(n+a,s),t.lineTo(n+a+o,s),t.moveTo(n,s-a-o),t.lineTo(n,s-a),t.moveTo(n,s+a),t.lineTo(n,s+a+o),t.stroke(),t.fillStyle="rgba(255,255,255,0.95)",t.fillRect(n-1,s-1,2,2),this.mouse.down&&r.alive&&!r.crafting){let l=li(performance.now()-this.mouse.downAt),c=90;t.fillStyle="rgba(0,0,0,0.45)",t.fillRect(n-c/2,s+26,c,7),t.fillStyle=l>.85?"#DC143C":"#FF6B35",t.fillRect(n-c/2,s+26,c*l,7),t.fillStyle="#fff",t.font="11px system-ui",t.textAlign="center",t.fillText(`${Math.round(ch(l)/10)}m`,n,s+47)}if(r.crafting){let l=1-r.craftTimer/(r.craftTotal||P.craft.seconds),c=l<.5?"#ffffff":l<.85?"#FF6B35":"#DC143C";t.strokeStyle=c,t.lineWidth=5,t.beginPath(),t.arc(n,s,34,-Math.PI/2,-Math.PI/2+l*Math.PI*2),t.stroke(),t.fillStyle=c,t.font="bold 20px system-ui",t.textAlign="center",t.fillText(String(Math.ceil(r.craftTimer)),n,s+7),t.font="bold 13px system-ui",t.fillText("\uC81C\uC791 \uC911 \u2014 \uBB34\uBC29\uBE44!",n,s+62)}if(e<this.hitMarkerUntil){t.strokeStyle="rgba(255,80,60,0.95)",t.lineWidth=3;let l=7,c=8;t.beginPath(),t.moveTo(n-l-c,s-l-c),t.lineTo(n-l,s-l),t.moveTo(n+l,s-l),t.lineTo(n+l+c,s-l-c),t.moveTo(n-l-c,s+l+c),t.lineTo(n-l,s+l),t.moveTo(n+l,s+l),t.lineTo(n+l+c,s+l+c),t.stroke()}}_renderHud(){if(this.touchBar&&(this.touchBar.className="sr-touchbar"+(this.sceneName==="play"&&!this.ghost?" on":"")),this.sceneName!=="play"&&this.sceneName!=="drop"){this.hud.style.display="none";return}this.hud.style.display="block";let t=this.game,e=this.human;if(!t||!e)return;let n=performance.now();this._hudEls||this._buildHudDom();let s=this._hudEls;if(n-(this._hudLastAt||0)<100){this._setHudHp(e),this._setHudToast(n);return}this._hudLastAt=n;let r=this.online?this._lastSurvivors||t.players.length:Xi(t),a=cl(r);this._setText(s.surv,`\uC0DD\uC874 ${r}`),this._setText(s.act,a.title),this._setText(s.zone,`\u26C8 ${Math.max(0,Math.ceil(t.zone.nextShrink-t.t))}s`),this._setHudHp(e),this._setText(s.shield,e.shieldHits>0?`\u{1F6E1} \uBC29\uD328 \uB0B4\uAD6C\uB3C4 ${e.shieldHits}/${P.items.shieldHits} \u2014 \uD53C\uACA9 \uC644\uC804 \uBC29\uC5B4`:"");let o=e.mg&&e.mg.until>t.t&&e.mg.ammo>0;this._setText(s.mgBuff,o?`\u{1F525} \uB208 \uAE30\uAD00\uCD1D ${e.mg.ammo}\uBC1C \xB7 ${Math.ceil(e.mg.until-t.t)}\uCD08`:"");let l="";e.buff&&e.buff.until>t.t&&(l=`${e.buff.kind==="speed"?"\u{1F4A8} \uC774\uB3D9\uC18D\uB3C4 \uC99D\uAC00":e.buff.kind==="power"?"\u{1F4AA} \uACF5\uACA9\uB825 \uC99D\uAC00":"\u2692 \uC81C\uC791\uC18D\uB3C4 \uC99D\uAC00"} ${Math.ceil(e.buff.until-t.t)}\uCD08`),this._setText(s.buff,l);let c=Gn[e.classId];this._setText(s.cls,c?c.name:""),this._setText(s.drop,this.sceneName==="drop"?`\uB099\uD558 \uC911 \u2014 \uCC29\uC9C0 ${Math.max(0,Math.ceil(this.online?this.onlineDropLeft??8:8-this.dropT))}s (\uC9C0\uB3C4 \uD074\uB9AD=\uB099\uD558 \uC9C0\uC810)`:""),this._setText(s.ammo,`${e.snowballs}`),this._setText(s.tac,`Q \uC124\uBCBD ${e.walls}/${P.wall.maxPerPlayer} \xB7 G \uBBF8\uB07C ${e.decoys}/${P.decoy.maxPerPlayer} \xB7 F ${e.hasClub?"\u{1F3CF} \uBABD\uB465\uC774":"\u{1F44A} \uC8FC\uBA39"}`),this._setText(s.caps,`\u{1F37E} ${e.caps||0}`);let u="";if(e.item){let p=P.shop[e.item.id];u=e.item.id==="jetpack"?`${p.emoji} \uC5F0\uB8CC ${Math.ceil(e.jetFuel)}s (\uC810\uD504\uD0A4)`:`${p.emoji} ${p.name}${e.item.usesLeft>1?` ${e.item.usesLeft}\uD68C`:""} \u2014 X\uD0A4`}this._setText(s.item,u),this._setText(s.charge,wn(t,e)?`\u2697\uFE0F \uB3CC\uACA9 \uBB34\uC801 ${Math.ceil(e.chargeUntil-t.t)}\uCD08`:""),this.killFeed=this.killFeed.filter(p=>p.until>n);let h=this.killFeed.map(p=>p.text).join("|");if(h!==this._feedKey){this._feedKey=h,s.feed.textContent="";for(let p of this.killFeed)s.feed.appendChild(bt("div","sr-kf-row",p.text))}this._setHudToast(n);let f=this._showMinimap&&this.sceneName==="play";s.mapBox.style.display=f?"block":"none",f&&this._drawMinimap()}_buildHudDom(){this.hud.textContent="";let t=(S,M,I=!0)=>{let B=bt("div",M);return I&&(B.style.display="none"),S.appendChild(B),B},e=bt("div","sr-hud-top"),n=bt("div","sr-hud-surv"),s=bt("div","sr-hud-act"),r=bt("div","sr-hud-zone");e.appendChild(n),e.appendChild(s),e.appendChild(r),this.hud.appendChild(e);let a=bt("div","sr-hud-bl"),o=bt("div","sr-hp"),l=bt("div","sr-hp-fill"),c=bt("span","sr-hp-txt");o.appendChild(l),o.appendChild(c),a.appendChild(o);let u=t(a,"sr-shield"),h=t(a,"sr-buff sr-buff-mg"),f=t(a,"sr-buff"),p=t(a,"sr-class-tag"),_=t(a,"sr-drop");this.hud.appendChild(a);let y=bt("div","sr-hud-br"),m=bt("div","sr-ammo-big");y.appendChild(m),y.appendChild(bt("div","sr-ammo-cap","\u2744 SNOWBALLS"));let d=bt("div","sr-tac");y.appendChild(d);let x=bt("div","sr-caps");y.appendChild(x);let v=t(y,"sr-item-slot"),g=t(y,"sr-buff sr-buff-mg");this.hud.appendChild(y);let T=bt("div","sr-killfeed");this.hud.appendChild(T);let E=bt("div","sr-minimap");E.style.display="none";let C=document.createElement("canvas");C.width=170,C.height=170,E.appendChild(C),this.hud.appendChild(E);let R=bt("div","sr-toast");R.style.display="none",this.hud.appendChild(R),this._hudEls={surv:n,act:s,zone:r,hpFill:l,hpTxt:c,shield:u,mgBuff:h,buff:f,cls:p,drop:_,ammo:m,tac:d,caps:x,item:v,charge:g,feed:T,mapBox:E,mapCv:C,toast:R},this._hudCache={}}_setText(t,e){t._last!==e&&(t._last=e,t.textContent=e,t.style.display=e?"":"none")}_setHudHp(t){let e=this._hudEls,n=t.maxHp||100,s=Math.max(0,Math.round(t.hp));(e._hp!==s||e._maxHp!==n)&&(e._hp=s,e._maxHp=n,e.hpFill.style.width=Math.max(0,t.hp/n*100)+"%",e.hpFill.style.background=t.hp>n*.5?"#7FFFD4":t.hp>n*.25?"#FF6B35":"#DC143C",e.hpTxt.textContent=`${s}/${n}`)}_setHudToast(t){let e=this._hudEls;this._toastText&&t<this._toastUntil?(e.toast._last!==this._toastText&&(e.toast._last=this._toastText,e.toast.textContent=this._toastText),e.toast.style.display==="none"&&(e.toast.style.display="")):e.toast.style.display!=="none"&&(e.toast.style.display="none")}_drawMinimap(){let t=this.game,e=this._hudEls.mapCv.getContext("2d"),n=170/P.map.size;e.fillStyle="rgba(13,27,42,0.88)",e.fillRect(0,0,170,170),e.strokeStyle="#7fd4ff",e.lineWidth=1.5,e.beginPath(),e.arc(t.zone.cx*n,t.zone.cy*n,t.zone.radius*n,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(120,140,160,0.6)";for(let r of t.obstacles)e.fillRect(r.x*n-1,r.y*n-1,3,3);e.fillStyle="#A8D8EA";for(let r of t.piles)r.cooldownUntil<=t.t&&e.fillRect(r.x*n-1,r.y*n-1,3,3);let s=this.human;for(let r of t.players)r.alive&&(e.fillStyle=s&&r.id===s.id?"#FF6B35":"#9E9E9E",e.beginPath(),e.arc(r.x*n,r.y*n,s&&r.id===s.id?3.4:2,0,Math.PI*2),e.fill());s&&(e.strokeStyle="rgba(255,107,53,0.8)",e.beginPath(),e.moveTo(s.x*n,s.y*n),e.lineTo(s.x*n+Math.cos(this.yaw)*14,s.y*n+Math.sin(this.yaw)*14),e.stroke())}_toast(t,e=3200){this._toastText=t,this._toastUntil=performance.now()+e}_btn(t,e,n){let s=document.createElement("button");return s.className="sr-btn"+(n?" primary":""),s.textContent=t,s.addEventListener("click",()=>{this.audio.resume(),e()}),s}_stat(t,e){let n=bt("div","sr-stat");return n.appendChild(bt("div","sr-stat-v",String(e))),n.appendChild(bt("div","sr-stat-l",t)),n}async __drive(t){if(t==="title"){this._showTitle();return}if(this.newGame(42),t!=="drop"){if(t==="play"||t==="fps"){this._enterPlay(),this.human.snowballs=10;let e=this.human;this.yaw=0,this.pitch=0;let n=this.game.players.filter(r=>r.isNpc).slice(0,4),s=[80,150,260,420];n.forEach((r,a)=>{r.x=e.x+s[a],r.y=e.y+(a-1.5)*55,r.aim=Math.PI+Math.atan2(r.y-e.y,r.x-e.x)}),this.game.piles.push({id:90001,x:e.x+44,y:e.y+12,cooldownUntil:0}),this.game.pickups.push({id:90002,kind:"heal",x:e.x+70,y:e.y-40,takenUntil:0}),this.game.pickups.push({id:90003,kind:"shield",x:e.x+110,y:e.y+60,takenUntil:0}),this.game.pickups.push({id:90004,kind:"pill",x:e.x+60,y:e.y+18,takenUntil:0}),this._buildWorld(),n.forEach(r=>{r.hp=40+r.id*13%55});return}if(t==="corpse"){this._enterPlay(),this.yaw=0;let e=this.human;this.game.players.filter(s=>s.isNpc).slice(0,3).forEach((s,r)=>{s.x=e.x+90+r*60,s.y=e.y+(r-1)*45,on(this.game,s,0)});return}if(t==="throw"){this._enterPlay(),this.yaw=0,this.human.snowballs=10,this.locked=!0,this._throw(600),this._throw(1200);return}if(t==="result"||t==="win"){if(this._enterPlay(),t==="win")for(let e of this.game.players)e.id!==this.game._humanId&&on(this.game,e,0);else on(this.game,this.human,0);this._showResult();return}}}__validate(){let t={checks:[],errors:[]},e=(n,s,r="")=>t.checks.push({name:n,pass:!!s,detail:r});try{let n=Ms(42,{total:20,difficulty:"normal"});e("20\uC778 \uC0DD\uC131(\uD50C\uB808\uC774\uC5B41+NPC19)",n.players.length===20&&n.players.filter(c=>c.isNpc).length===19),e("\uC7A5\uC560\uBB3C \uC0DD\uC131(\uBC14\uC704/\uB098\uBB34/\uC624\uB450\uB9C9)",n.obstacles.length>=30,`${n.obstacles.length}`);let s=an(n);n.piles.push({id:1,x:s.x,y:s.y,cooldownUntil:0}),Or(n,s),Ss(n,3.01),e("3\uCD08 \uC81C\uC791 +10",s.snowballs===10,String(s.snowballs));let r=n.players[2];on(n,r,0),e("\uD0C8\uB77D \uC2DC \uC2DC\uCCB4 \uC0DD\uC131",n.corpses.length===1&&n.corpses[0].id===r.id),this.game=n,this.human=s,this._buildWorld(),e("3D \uC6D4\uB4DC \uC0DD\uC131(THREE scene)",!!this.scene3&&this.scene3.children.length>30,`children=${this.scene3.children.length}`),e("NPC 3D \uD53C\uADDC\uC5B4 \uC0DD\uC131",this.actors.size===19,`${this.actors.size}`),e("WebGL \uB80C\uB354\uB7EC",!!this.renderer&&!!this.renderer.getContext());let a=0;for(;!n.over&&a++<12e3;){let c=an(n);if(c.alive){c.npc||(c.npc={state:"PATROL",reactTimer:0});let u=c.isNpc;c.isNpc=!0,gl(n,c,.1),c.isNpc=u}Ss(n,.1)}e("\uB9E4\uCE58 \uC644\uC8FC(\uC2B9\uC790 1\uC778)",n.over&&Xi(n)===1,`t=${n.t.toFixed(0)}s`),e("\uC2DC\uCCB4 \uB2E4\uC218 \uB204\uC801(\uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uC74C)",n.corpses.length>=18,`corpses=${n.corpses.length}`);let o=Ms(7,{total:20,difficulty:"normal",classId:"bear"});e("\uC544\uC774\uD15C \uC2A4\uD3F0(\uD790\uD329+\uBC29\uD328)",o.pickups.filter(c=>c.kind==="heal").length===10&&o.pickups.filter(c=>c.kind==="shield").length===6,`${o.pickups.length}`);let l=an(o);e("\uD074\uB798\uC2A4 \uC801\uC6A9(\uBE45 \uBCA0\uC5B4 HP 130)",l.maxHp===130&&l.hp===130,`${l.hp}/${l.maxHp}`),on(o,l,50),o.pickups[0].x=l.x,o.pickups[0].y=l.y,o.pickups[0].kind="heal",o.pickups[0].takenUntil=0,e("\uD790\uD329 +40",Dr(o,l)==="heal"&&l.hp===90,`${l.hp}`),this.game=o,this.human=l,this._buildWorld();for(let c of o.players)c.isNpc&&c.alive&&this._hpSprite(c);e("\uC801 HP \uAC8C\uC774\uC9C0 \uC2A4\uD504\uB77C\uC774\uD2B8 19\uAC1C",this.hpSprites.size===19,`${this.hpSprites.size}`),e("\uC544\uC774\uD15C 3D \uBA54\uC2DC \uC0DD\uC131",this.pickupMeshes&&this.pickupMeshes.size===o.pickups.length,`${this.pickupMeshes?this.pickupMeshes.size:0}`)}catch(n){t.errors.push(String(n&&n.message||n))}return t.pass=t.checks.every(n=>n.pass)&&t.errors.length===0,t}};function bt(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.textContent=e),n}var bs=new URLSearchParams(location.search),Gg=bs.has("seed")?parseInt(bs.get("seed"),10):null,Wg=bs.get("fast")?parseFloat(bs.get("fast")):1,yl=bs.get("screen"),mh=new Vr(document.getElementById("game"),{seed:Gg,timeScale:Wg,autoStart:!yl});window.__SR=mh;yl&&mh.__drive(yl);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
