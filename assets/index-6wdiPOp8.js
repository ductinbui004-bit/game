(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hr="170",hc=0,po=1,uc=2,Ta=1,ba=2,an=3,bn=0,Ae=1,be=2,En=0,oi=1,mo=2,go=3,_o=4,dc=5,Fn=100,fc=101,pc=102,mc=103,gc=104,_c=200,xc=201,vc=202,Mc=203,er=204,nr=205,yc=206,Sc=207,wc=208,Ec=209,Tc=210,bc=211,Ac=212,Cc=213,Rc=214,ir=0,sr=1,rr=2,li=3,or=4,ar=5,cr=6,lr=7,Aa=0,Pc=1,Ic=2,Tn=0,Lc=1,Dc=2,Uc=3,Ca=4,Nc=5,Fc=6,Oc=7,Ra=300,hi=301,ui=302,hr=303,ur=304,Ms=306,dr=1e3,Bn=1001,fr=1002,qe=1003,Bc=1004,Gi=1005,je=1006,Ts=1007,kn=1008,fn=1009,Pa=1010,Ia=1011,Li=1012,Wr=1013,Gn=1014,ln=1015,Ui=1016,Xr=1017,qr=1018,di=1020,La=35902,Da=1021,Ua=1022,Xe=1023,Na=1024,Fa=1025,ai=1026,fi=1027,Oa=1028,Yr=1029,Ba=1030,$r=1031,jr=1033,hs=33776,us=33777,ds=33778,fs=33779,pr=35840,mr=35841,gr=35842,_r=35843,xr=36196,vr=37492,Mr=37496,yr=37808,Sr=37809,wr=37810,Er=37811,Tr=37812,br=37813,Ar=37814,Cr=37815,Rr=37816,Pr=37817,Ir=37818,Lr=37819,Dr=37820,Ur=37821,ps=36492,Nr=36494,Fr=36495,ka=36283,Or=36284,Br=36285,kr=36286,kc=3200,Gc=3201,Ga=0,zc=1,wn="",Oe="srgb",gi="srgb-linear",ys="linear",Qt="srgb",Hn=7680,xo=519,Vc=512,Hc=513,Wc=514,za=515,Xc=516,qc=517,Yc=518,$c=519,vo=35044,Mo="300 es",hn=2e3,gs=2001;class _i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yo=1234567;const Pi=Math.PI/180,pi=180/Math.PI;function xi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[r&255]+Me[r>>8&255]+Me[r>>16&255]+Me[r>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function Ee(r,t,e){return Math.max(t,Math.min(e,r))}function Kr(r,t){return(r%t+t)%t}function jc(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Kc(r,t,e){return r!==t?(e-r)/(t-r):0}function Ii(r,t,e){return(1-e)*r+e*t}function Zc(r,t,e,n){return Ii(r,t,1-Math.exp(-e*n))}function Jc(r,t=1){return t-Math.abs(Kr(r,t*2)-t)}function Qc(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function tl(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function el(r,t){return r+Math.floor(Math.random()*(t-r+1))}function nl(r,t){return r+Math.random()*(t-r)}function il(r){return r*(.5-Math.random())}function sl(r){r!==void 0&&(yo=r);let t=yo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rl(r){return r*Pi}function ol(r){return r*pi}function al(r){return(r&r-1)===0&&r!==0}function cl(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ll(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hl(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*m,a*l);break;case"YXY":r.set(c*m,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function si(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Se(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Sn={DEG2RAD:Pi,RAD2DEG:pi,generateUUID:xi,clamp:Ee,euclideanModulo:Kr,mapLinear:jc,inverseLerp:Kc,lerp:Ii,damp:Zc,pingpong:Jc,smoothstep:Qc,smootherstep:tl,randInt:el,randFloat:nl,randFloatSpread:il,seededRandom:sl,degToRad:rl,radToDeg:ol,isPowerOfTwo:al,ceilPowerOfTwo:cl,floorPowerOfTwo:ll,setQuaternionFromProperEuler:hl,normalize:Se,denormalize:si};class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,i,s,o,a,c,l){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=i[0],p=i[3],f=i[6],w=i[1],E=i[4],x=i[7],I=i[2],C=i[5],A=i[8];return s[0]=o*_+a*w+c*I,s[3]=o*p+a*E+c*C,s[6]=o*f+a*x+c*A,s[1]=l*_+h*w+u*I,s[4]=l*p+h*E+u*C,s[7]=l*f+h*x+u*A,s[2]=d*_+m*w+g*I,s[5]=d*p+m*E+g*C,s[8]=d*f+m*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,g=e*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*c)*_,t[5]=(i*s-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(bs.makeScale(t,e)),this}rotate(t){return this.premultiply(bs.makeRotation(-t)),this}translate(t,e){return this.premultiply(bs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bs=new Ft;function Va(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function _s(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ul(){const r=_s("canvas");return r.style.display="block",r}const So={};function Ci(r){r in So||(So[r]=!0,console.warn(r))}function dl(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function fl(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pl(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:gi,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(r.r=un(r.r),r.g=un(r.g),r.b=un(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wn?ys:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function un(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ci(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const wo=[.64,.33,.3,.6,.15,.06],Eo=[.2126,.7152,.0722],To=[.3127,.329],bo=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ao=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[gi]:{primaries:wo,whitePoint:To,transfer:ys,toXYZ:bo,fromXYZ:Ao,luminanceCoefficients:Eo,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:wo,whitePoint:To,transfer:Qt,toXYZ:bo,fromXYZ:Ao,luminanceCoefficients:Eo,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});let Wn;class ml{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wn===void 0&&(Wn=_s("canvas")),Wn.width=t.width,Wn.height=t.height;const n=Wn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_s("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=un(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(un(e[n]/255)*255):e[n]=un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gl=0;class Ha{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(As(i[o].image)):s.push(As(i[o]))}else s=As(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function As(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ml.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _l=0;class Re extends _i{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Bn,i=Bn,s=je,o=kn,a=Xe,c=fn,l=Re.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_l++}),this.uuid=xi(),this.name="",this.source=new Ha(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ra)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dr:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dr:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Ra;Re.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,x=(m+1)/2,I=(f+1)/2,C=(h+d)/4,A=(u+_)/4,P=(g+p)/4;return E>x&&E>I?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=C/n,s=A/n):x>I?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=C/i,s=P/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=A/s,i=P/s),this.set(n,i,s,e),this}let w=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xl extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Re(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ha(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends xl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wa extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vl extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let p=1-a;const f=c*d+l*m+h*g+u*_,w=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const I=Math.sqrt(E),C=Math.atan2(I,f*w);p=Math.sin(p*C)/I,a=Math.sin(a*C)/I}const x=a*w;if(c=c*p+d*x,l=l*p+m*x,h=h*p+g*x,u=u*p+_*x,p===1-a){const I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-a*m,t[e+2]=l*g+h*m+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),m=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Co.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Co.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Cs.copy(this).projectOnVector(t),this.sub(Cs)}reflect(t){return this.sub(Cs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cs=new b,Co=new Ni;class Fi{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ze):ze.fromBufferAttribute(s,o),ze.applyMatrix4(t.matrixWorld),this.expandByPoint(ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zi.copy(n.boundingBox)),zi.applyMatrix4(t.matrixWorld),this.union(zi)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ze),ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wi),Vi.subVectors(this.max,wi),Xn.subVectors(t.a,wi),qn.subVectors(t.b,wi),Yn.subVectors(t.c,wi),gn.subVectors(qn,Xn),_n.subVectors(Yn,qn),Cn.subVectors(Xn,Yn);let e=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Cn.z,Cn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Cn.z,0,-Cn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Cn.y,Cn.x,0];return!Rs(e,Xn,qn,Yn,Vi)||(e=[1,0,0,0,1,0,0,0,1],!Rs(e,Xn,qn,Yn,Vi))?!1:(Hi.crossVectors(gn,_n),e=[Hi.x,Hi.y,Hi.z],Rs(e,Xn,qn,Yn,Vi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const en=[new b,new b,new b,new b,new b,new b,new b,new b],ze=new b,zi=new Fi,Xn=new b,qn=new b,Yn=new b,gn=new b,_n=new b,Cn=new b,wi=new b,Vi=new b,Hi=new b,Rn=new b;function Rs(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Rn.fromArray(r,s);const a=i.x*Math.abs(Rn.x)+i.y*Math.abs(Rn.y)+i.z*Math.abs(Rn.z),c=t.dot(Rn),l=e.dot(Rn),h=n.dot(Rn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Ml=new Fi,Ei=new b,Ps=new b;class Ss{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ml.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ei.subVectors(t,this.center);const e=Ei.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ei,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ps.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ei.copy(t.center).add(Ps)),this.expandByPoint(Ei.copy(t.center).sub(Ps))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new b,Is=new b,Wi=new b,xn=new b,Ls=new b,Xi=new b,Ds=new b;class Zr{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Is.copy(t).add(e).multiplyScalar(.5),Wi.copy(e).sub(t).normalize(),xn.copy(this.origin).sub(Is);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Wi),a=xn.dot(this.direction),c=-xn.dot(Wi),l=xn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Is).addScaledVector(Wi,d),m}intersectSphere(t,e){nn.subVectors(t.center,this.origin);const n=nn.dot(this.direction),i=nn.dot(nn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,n,i,s){Ls.subVectors(e,t),Xi.subVectors(n,t),Ds.crossVectors(Ls,Xi);let o=this.direction.dot(Ds),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,t);const c=a*this.direction.dot(Xi.crossVectors(xn,Xi));if(c<0)return null;const l=a*this.direction.dot(Ls.cross(xn));if(l<0||c+l>o)return null;const h=-a*xn.dot(Ds);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,i,s,o,a,c,l,h,u,d,m,g,_,p){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,u,d,m,g,_,p)}set(t,e,n,i,s,o,a,c,l,h,u,d,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/$n.setFromMatrixColumn(t,0).length(),s=1/$n.setFromMatrixColumn(t,1).length(),o=1/$n.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yl,t,Sl)}lookAt(t,e,n){const i=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),vn.crossVectors(n,Le),vn.lengthSq()===0&&(Math.abs(n.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),vn.crossVectors(n,Le)),vn.normalize(),qi.crossVectors(Le,vn),i[0]=vn.x,i[4]=qi.x,i[8]=Le.x,i[1]=vn.y,i[5]=qi.y,i[9]=Le.y,i[2]=vn.z,i[6]=qi.z,i[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],w=n[3],E=n[7],x=n[11],I=n[15],C=i[0],A=i[4],P=i[8],S=i[12],M=i[1],R=i[5],k=i[9],B=i[13],q=i[2],$=i[6],W=i[10],Z=i[14],V=i[3],st=i[7],at=i[11],xt=i[15];return s[0]=o*C+a*M+c*q+l*V,s[4]=o*A+a*R+c*$+l*st,s[8]=o*P+a*k+c*W+l*at,s[12]=o*S+a*B+c*Z+l*xt,s[1]=h*C+u*M+d*q+m*V,s[5]=h*A+u*R+d*$+m*st,s[9]=h*P+u*k+d*W+m*at,s[13]=h*S+u*B+d*Z+m*xt,s[2]=g*C+_*M+p*q+f*V,s[6]=g*A+_*R+p*$+f*st,s[10]=g*P+_*k+p*W+f*at,s[14]=g*S+_*B+p*Z+f*xt,s[3]=w*C+E*M+x*q+I*V,s[7]=w*A+E*R+x*$+I*st,s[11]=w*P+E*k+x*W+I*at,s[15]=w*S+E*B+x*Z+I*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*m-n*c*m)+_*(+e*c*m-e*l*d+s*o*d-i*o*m+i*l*h-s*c*h)+p*(+e*l*u-e*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+f*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],w=u*p*l-_*d*l+_*c*m-a*p*m-u*c*f+a*d*f,E=g*d*l-h*p*l-g*c*m+o*p*m+h*c*f-o*d*f,x=h*_*l-g*u*l+g*a*m-o*_*m-h*a*f+o*u*f,I=g*u*c-h*_*c-g*a*d+o*_*d+h*a*p-o*u*p,C=e*w+n*E+i*x+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=w*A,t[1]=(_*d*s-u*p*s-_*i*m+n*p*m+u*i*f-n*d*f)*A,t[2]=(a*p*s-_*c*s+_*i*l-n*p*l-a*i*f+n*c*f)*A,t[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*m-n*c*m)*A,t[4]=E*A,t[5]=(h*p*s-g*d*s+g*i*m-e*p*m-h*i*f+e*d*f)*A,t[6]=(g*c*s-o*p*s-g*i*l+e*p*l+o*i*f-e*c*f)*A,t[7]=(o*d*s-h*c*s+h*i*l-e*d*l-o*i*m+e*c*m)*A,t[8]=x*A,t[9]=(g*u*s-h*_*s-g*n*m+e*_*m+h*n*f-e*u*f)*A,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*f+e*a*f)*A,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*m-e*a*m)*A,t[12]=I*A,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*p+e*u*p)*A,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*p-e*a*p)*A,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,g=s*u,_=o*h,p=o*u,f=a*u,w=c*l,E=c*h,x=c*u,I=n.x,C=n.y,A=n.z;return i[0]=(1-(_+f))*I,i[1]=(m+x)*I,i[2]=(g-E)*I,i[3]=0,i[4]=(m-x)*C,i[5]=(1-(d+f))*C,i[6]=(p+w)*C,i[7]=0,i[8]=(g+E)*A,i[9]=(p-w)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=$n.set(i[0],i[1],i[2]).length();const o=$n.set(i[4],i[5],i[6]).length(),a=$n.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ve.copy(this);const l=1/s,h=1/o,u=1/a;return Ve.elements[0]*=l,Ve.elements[1]*=l,Ve.elements[2]*=l,Ve.elements[4]*=h,Ve.elements[5]*=h,Ve.elements[6]*=h,Ve.elements[8]*=u,Ve.elements[9]*=u,Ve.elements[10]*=u,e.setFromRotationMatrix(Ve),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=hn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let m,g;if(a===hn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===gs)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=hn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*l,m=(n+i)*h;let g,_;if(a===hn)g=(o+s)*u,_=-2*u;else if(a===gs)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $n=new b,Ve=new ae,yl=new b(0,0,0),Sl=new b(1,1,1),vn=new b,qi=new b,Le=new b,Ro=new ae,Po=new Ni;class Ze{constructor(t=0,e=0,n=0,i=Ze.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ro.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ro,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Po.setFromEuler(this),this.setFromQuaternion(Po,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ze.DEFAULT_ORDER="XYZ";class Jr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wl=0;const Io=new b,jn=new Ni,sn=new ae,Yi=new b,Ti=new b,El=new b,Tl=new Ni,Lo=new b(1,0,0),Do=new b(0,1,0),Uo=new b(0,0,1),No={type:"added"},bl={type:"removed"},Kn={type:"childadded",child:null},Us={type:"childremoved",child:null};class de extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new b,e=new Ze,n=new Ni,i=new b(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Ft}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.multiply(jn),this}rotateOnWorldAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.premultiply(jn),this}rotateX(t){return this.rotateOnAxis(Lo,t)}rotateY(t){return this.rotateOnAxis(Do,t)}rotateZ(t){return this.rotateOnAxis(Uo,t)}translateOnAxis(t,e){return Io.copy(t).applyQuaternion(this.quaternion),this.position.add(Io.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lo,t)}translateY(t){return this.translateOnAxis(Do,t)}translateZ(t){return this.translateOnAxis(Uo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yi.copy(t):Yi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Ti,Yi,this.up):sn.lookAt(Yi,Ti,this.up),this.quaternion.setFromRotationMatrix(sn),i&&(sn.extractRotation(i.matrixWorld),jn.setFromRotationMatrix(sn),this.quaternion.premultiply(jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(No),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bl),Us.child=t,this.dispatchEvent(Us),Us.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(No),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,t,El),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,Tl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}de.DEFAULT_UP=new b(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new b,rn=new b,Ns=new b,on=new b,Zn=new b,Jn=new b,Fo=new b,Fs=new b,Os=new b,Bs=new b,ks=new ee,Gs=new ee,zs=new ee;class We{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),He.subVectors(t,e),i.cross(He);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){He.subVectors(i,e),rn.subVectors(n,e),Ns.subVectors(t,e);const o=He.dot(He),a=He.dot(rn),c=He.dot(Ns),l=rn.dot(rn),h=rn.dot(Ns),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,on)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,on.x),c.addScaledVector(o,on.y),c.addScaledVector(a,on.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return ks.setScalar(0),Gs.setScalar(0),zs.setScalar(0),ks.fromBufferAttribute(t,e),Gs.fromBufferAttribute(t,n),zs.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ks,s.x),o.addScaledVector(Gs,s.y),o.addScaledVector(zs,s.z),o}static isFrontFacing(t,e,n,i){return He.subVectors(n,e),rn.subVectors(t,e),He.cross(rn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),He.cross(rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return We.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Zn.subVectors(i,n),Jn.subVectors(s,n),Fs.subVectors(t,n);const c=Zn.dot(Fs),l=Jn.dot(Fs);if(c<=0&&l<=0)return e.copy(n);Os.subVectors(t,i);const h=Zn.dot(Os),u=Jn.dot(Os);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Zn,o);Bs.subVectors(t,s);const m=Zn.dot(Bs),g=Jn.dot(Bs);if(g>=0&&m<=g)return e.copy(s);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Jn,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Fo.subVectors(s,i),a=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(Fo,a);const f=1/(p+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(Zn,o).addScaledVector(Jn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},$i={h:0,s:0,l:0};function Vs(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class St{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=Kr(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Vs(o,s,t+1/3),this.g=Vs(o,s,t),this.b=Vs(o,s,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=Oe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=Xa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=un(t.r),this.g=un(t.g),this.b=un(t.b),this}copyLinearToSRGB(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return qt.fromWorkingColorSpace(ye.copy(this),t),Math.round(Ee(ye.r*255,0,255))*65536+Math.round(Ee(ye.g*255,0,255))*256+Math.round(Ee(ye.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,i=ye.g,s=ye.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=Oe){qt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,i=ye.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),this.setHSL(Mn.h+t,Mn.s+e,Mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL($i);const n=Ii(Mn.h,$i.h,e),i=Ii(Mn.s,$i.s,e),s=Ii(Mn.l,$i.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new St;St.NAMES=Xa;let Al=0;class vi extends _i{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Al++}),this.uuid=xi(),this.name="",this.blending=oi,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=er,this.blendDst=nr,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==er&&(n.blendSrc=this.blendSrc),this.blendDst!==nr&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ke extends vi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new b,ji=new Gt;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vo,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ji.fromBufferAttribute(this,e),ji.applyMatrix3(t),this.setXY(e,ji.x,ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vo&&(t.usage=this.usage),t}}class qa extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ya extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Cl=0;const Fe=new ae,Hs=new de,Qn=new b,De=new Fi,bi=new Fi,ge=new b;class Pe extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cl++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Va(t)?Ya:qa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ft().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return Hs.lookAt(t),Hs.updateMatrix(),this.applyMatrix4(Hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];De.setFromBufferAttribute(s),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];bi.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(De.min,bi.min),De.expandByPoint(ge),ge.addVectors(De.max,bi.max),De.expandByPoint(ge)):(De.expandByPoint(bi.min),De.expandByPoint(bi.max))}De.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)ge.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ge));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ge.fromBufferAttribute(a,l),c&&(Qn.fromBufferAttribute(t,l),ge.add(Qn)),i=Math.max(i,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new b,c[P]=new b;const l=new b,h=new b,u=new b,d=new Gt,m=new Gt,g=new Gt,_=new b,p=new b;function f(P,S,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,P),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),h.sub(l),u.sub(l),m.sub(d),g.sub(d);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(R),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(R),a[P].add(_),a[S].add(_),a[M].add(_),c[P].add(p),c[S].add(p),c[M].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,S=w.length;P<S;++P){const M=w[P],R=M.start,k=M.count;for(let B=R,q=R+k;B<q;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const E=new b,x=new b,I=new b,C=new b;function A(P){I.fromBufferAttribute(i,P),C.copy(I);const S=a[P];E.copy(S),E.sub(I.multiplyScalar(I.dot(S))).normalize(),x.crossVectors(C,S);const R=x.dot(c[P])<0?-1:1;o.setXYZW(P,E.x,E.y,E.z,R)}for(let P=0,S=w.length;P<S;++P){const M=w[P],R=M.start,k=M.count;for(let B=R,q=R+k;B<q;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new b,s=new b,o=new b,a=new b,c=new b,l=new b,h=new b,u=new b;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[m++]}return new Be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oo=new ae,Pn=new Zr,Ki=new Ss,Bo=new b,Zi=new b,Ji=new b,Qi=new b,Ws=new b,ts=new b,ko=new b,es=new b;class F extends de{constructor(t=new Pe,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){ts.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Ws.fromBufferAttribute(u,t),o?ts.addScaledVector(Ws,h):ts.addScaledVector(Ws.sub(e),h))}e.add(ts)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(s),Pn.copy(t.ray).recast(t.near),!(Ki.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(Ki,Bo)===null||Pn.origin.distanceToSquared(Bo)>(t.far-t.near)**2))&&(Oo.copy(s).invert(),Pn.copy(t.ray).applyMatrix4(Oo),!(n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pn)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],w=Math.max(p.start,m.start),E=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=w,I=E;x<I;x+=3){const C=a.getX(x),A=a.getX(x+1),P=a.getX(x+2);i=ns(this,f,t,n,l,h,u,C,A,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const w=a.getX(p),E=a.getX(p+1),x=a.getX(p+2);i=ns(this,o,t,n,l,h,u,w,E,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],w=Math.max(p.start,m.start),E=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let x=w,I=E;x<I;x+=3){const C=x,A=x+1,P=x+2;i=ns(this,f,t,n,l,h,u,C,A,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const w=p,E=p+1,x=p+2;i=ns(this,o,t,n,l,h,u,w,E,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Rl(r,t,e,n,i,s,o,a){let c;if(t.side===Ae?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===bn,a),c===null)return null;es.copy(a),es.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(es);return l<e.near||l>e.far?null:{distance:l,point:es.clone(),object:r}}function ns(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,Zi),r.getVertexPosition(c,Ji),r.getVertexPosition(l,Qi);const h=Rl(r,t,e,n,Zi,Ji,Qi,ko);if(h){const u=new b;We.getBarycoord(ko,Zi,Ji,Qi,u),i&&(h.uv=We.getInterpolatedAttribute(i,a,c,l,u,new Gt)),s&&(h.uv1=We.getInterpolatedAttribute(s,a,c,l,u,new Gt)),o&&(h.normal=We.getInterpolatedAttribute(o,a,c,l,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new b,materialIndex:0};We.getNormal(Zi,Ji,Qi,d.normal),h.face=d,h.barycoord=u}return h}class gt extends Pe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2));function g(_,p,f,w,E,x,I,C,A,P,S){const M=x/A,R=I/P,k=x/2,B=I/2,q=C/2,$=A+1,W=P+1;let Z=0,V=0;const st=new b;for(let at=0;at<W;at++){const xt=at*R-B;for(let It=0;It<$;It++){const Yt=It*M-k;st[_]=Yt*w,st[p]=xt*E,st[f]=q,l.push(st.x,st.y,st.z),st[_]=0,st[p]=0,st[f]=C>0?1:-1,h.push(st.x,st.y,st.z),u.push(It/A),u.push(1-at/P),Z+=1}}for(let at=0;at<P;at++)for(let xt=0;xt<A;xt++){const It=d+xt+$*at,Yt=d+xt+$*(at+1),X=d+(xt+1)+$*(at+1),J=d+(xt+1)+$*at;c.push(It,Yt,J),c.push(Yt,X,J),V+=6}a.addGroup(m,V,S),m+=V,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function we(r){const t={};for(let e=0;e<r.length;e++){const n=mi(r[e]);for(const i in n)t[i]=n[i]}return t}function Pl(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function $a(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Il={clone:mi,merge:we};var Ll=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Je extends vi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ll,this.fragmentShader=Dl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mi(t.uniforms),this.uniformsGroups=Pl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ja extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yn=new b,Go=new Gt,zo=new Gt;class Te extends ja{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pi*2*Math.atan(Math.tan(Pi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yn.x,yn.y).multiplyScalar(-t/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yn.x,yn.y).multiplyScalar(-t/yn.z)}getViewSize(t,e){return this.getViewBounds(t,Go,zo),e.subVectors(zo,Go)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ti=-90,ei=1;class Ul extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Te(ti,ei,t,e);i.layers=this.layers,this.add(i);const s=new Te(ti,ei,t,e);s.layers=this.layers,this.add(s);const o=new Te(ti,ei,t,e);o.layers=this.layers,this.add(o);const a=new Te(ti,ei,t,e);a.layers=this.layers,this.add(a);const c=new Te(ti,ei,t,e);c.layers=this.layers,this.add(c);const l=new Te(ti,ei,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ka extends Re{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:hi,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nl extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ka(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new gt(5,5,5),s=new Je({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:En});s.uniforms.tEquirect.value=e;const o=new F(i,s),a=e.minFilter;return e.minFilter===kn&&(e.minFilter=je),new Ul(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Xs=new b,Fl=new b,Ol=new Ft;class Un{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Xs.subVectors(n,e).cross(Fl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ol.getNormalMatrix(t),i=this.coplanarPoint(Xs).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Ss,is=new b;class Qr{constructor(t=new Un,e=new Un,n=new Un,i=new Un,s=new Un,o=new Un){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],m=i[8],g=i[9],_=i[10],p=i[11],f=i[12],w=i[13],E=i[14],x=i[15];if(n[0].setComponents(c-s,d-l,p-m,x-f).normalize(),n[1].setComponents(c+s,d+l,p+m,x+f).normalize(),n[2].setComponents(c+o,d+h,p+g,x+w).normalize(),n[3].setComponents(c-o,d-h,p-g,x-w).normalize(),n[4].setComponents(c-a,d-u,p-_,x-E).normalize(),e===hn)n[5].setComponents(c+a,d+u,p+_,x+E).normalize();else if(e===gs)n[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(t){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(t.matrixWorld),this.intersectsSphere(In)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(is.x=i.normal.x>0?t.max.x:t.min.x,is.y=i.normal.y>0?t.max.y:t.min.y,is.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(is)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Za(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Bl(r){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=r.SHORT;else if(l instanceof Uint32Array)m=r.UNSIGNED_INT;else if(l instanceof Int32Array)m=r.INT;else if(l instanceof Int8Array)m=r.BYTE;else if(l instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){const g=u[d],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class dn extends Pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const w=f*d-o;for(let E=0;E<l;E++){const x=E*u-s;g.push(x,-w,0),_.push(0,0,1),p.push(E/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<a;w++){const E=w+l*f,x=w+l*(f+1),I=w+1+l*(f+1),C=w+1+l*f;m.push(E,x,C),m.push(x,I,C)}this.setIndex(m),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.widthSegments,t.heightSegments)}}var kl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gl=`#ifdef USE_ALPHAHASH
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
#endif`,zl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xl=`#ifdef USE_AOMAP
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
#endif`,ql=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yl=`#ifdef USE_BATCHING
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
#endif`,$l=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jl=`#ifdef USE_IRIDESCENCE
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
#endif`,Ql=`#ifdef USE_BUMPMAP
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
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ch=`#define PI 3.141592653589793
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
} // validated`,lh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hh=`vec3 transformedNormal = objectNormal;
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
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ph=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mh="gl_FragColor = linearToOutputTexel( gl_FragColor );",gh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_h=`#ifdef USE_ENVMAP
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
#endif`,xh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vh=`#ifdef USE_ENVMAP
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
#endif`,Mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yh=`#ifdef USE_ENVMAP
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
#endif`,Sh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Th=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bh=`#ifdef USE_GRADIENTMAP
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
}`,Ah=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ch=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ph=`uniform bool receiveShadow;
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
#endif`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Lh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fh=`PhysicalMaterial material;
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
#endif`,Oh=`struct PhysicalMaterial {
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
}`,Bh=`
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
#endif`,kh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$h=`#if defined( USE_POINTS_UV )
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
#endif`,jh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tu=`#ifdef USE_MORPHTARGETS
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
#endif`,eu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ou=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,au=`#ifdef USE_NORMALMAP
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
#endif`,cu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,du=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_u=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Su=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wu=`float getShadowMask() {
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
}`,Eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tu=`#ifdef USE_SKINNING
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
#endif`,bu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Au=`#ifdef USE_SKINNING
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
#endif`,Cu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ru=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lu=`#ifdef USE_TRANSMISSION
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
#endif`,Du=`#ifdef USE_TRANSMISSION
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
#endif`,Uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ou=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ku=`uniform sampler2D t2D;
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
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wu=`#include <common>
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
}`,Xu=`#if DEPTH_PACKING == 3200
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
}`,qu=`#define DISTANCE
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
}`,Yu=`#define DISTANCE
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
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ju=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ku=`uniform float scale;
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
}`,Zu=`uniform vec3 diffuse;
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
}`,Ju=`#include <common>
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
}`,Qu=`uniform vec3 diffuse;
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
}`,td=`#define LAMBERT
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
}`,ed=`#define LAMBERT
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
}`,nd=`#define MATCAP
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
}`,id=`#define MATCAP
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
}`,sd=`#define NORMAL
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
}`,rd=`#define NORMAL
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
}`,od=`#define PHONG
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
}`,ad=`#define PHONG
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
}`,cd=`#define STANDARD
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
}`,ld=`#define STANDARD
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
}`,hd=`#define TOON
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
}`,ud=`#define TOON
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
}`,dd=`uniform float size;
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
}`,fd=`uniform vec3 diffuse;
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
}`,pd=`#include <common>
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
}`,md=`uniform vec3 color;
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
}`,gd=`uniform float rotation;
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
}`,_d=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:kl,alphahash_pars_fragment:Gl,alphamap_fragment:zl,alphamap_pars_fragment:Vl,alphatest_fragment:Hl,alphatest_pars_fragment:Wl,aomap_fragment:Xl,aomap_pars_fragment:ql,batching_pars_vertex:Yl,batching_vertex:$l,begin_vertex:jl,beginnormal_vertex:Kl,bsdfs:Zl,iridescence_fragment:Jl,bumpmap_pars_fragment:Ql,clipping_planes_fragment:th,clipping_planes_pars_fragment:eh,clipping_planes_pars_vertex:nh,clipping_planes_vertex:ih,color_fragment:sh,color_pars_fragment:rh,color_pars_vertex:oh,color_vertex:ah,common:ch,cube_uv_reflection_fragment:lh,defaultnormal_vertex:hh,displacementmap_pars_vertex:uh,displacementmap_vertex:dh,emissivemap_fragment:fh,emissivemap_pars_fragment:ph,colorspace_fragment:mh,colorspace_pars_fragment:gh,envmap_fragment:_h,envmap_common_pars_fragment:xh,envmap_pars_fragment:vh,envmap_pars_vertex:Mh,envmap_physical_pars_fragment:Ih,envmap_vertex:yh,fog_vertex:Sh,fog_pars_vertex:wh,fog_fragment:Eh,fog_pars_fragment:Th,gradientmap_pars_fragment:bh,lightmap_pars_fragment:Ah,lights_lambert_fragment:Ch,lights_lambert_pars_fragment:Rh,lights_pars_begin:Ph,lights_toon_fragment:Lh,lights_toon_pars_fragment:Dh,lights_phong_fragment:Uh,lights_phong_pars_fragment:Nh,lights_physical_fragment:Fh,lights_physical_pars_fragment:Oh,lights_fragment_begin:Bh,lights_fragment_maps:kh,lights_fragment_end:Gh,logdepthbuf_fragment:zh,logdepthbuf_pars_fragment:Vh,logdepthbuf_pars_vertex:Hh,logdepthbuf_vertex:Wh,map_fragment:Xh,map_pars_fragment:qh,map_particle_fragment:Yh,map_particle_pars_fragment:$h,metalnessmap_fragment:jh,metalnessmap_pars_fragment:Kh,morphinstance_vertex:Zh,morphcolor_vertex:Jh,morphnormal_vertex:Qh,morphtarget_pars_vertex:tu,morphtarget_vertex:eu,normal_fragment_begin:nu,normal_fragment_maps:iu,normal_pars_fragment:su,normal_pars_vertex:ru,normal_vertex:ou,normalmap_pars_fragment:au,clearcoat_normal_fragment_begin:cu,clearcoat_normal_fragment_maps:lu,clearcoat_pars_fragment:hu,iridescence_pars_fragment:uu,opaque_fragment:du,packing:fu,premultiplied_alpha_fragment:pu,project_vertex:mu,dithering_fragment:gu,dithering_pars_fragment:_u,roughnessmap_fragment:xu,roughnessmap_pars_fragment:vu,shadowmap_pars_fragment:Mu,shadowmap_pars_vertex:yu,shadowmap_vertex:Su,shadowmask_pars_fragment:wu,skinbase_vertex:Eu,skinning_pars_vertex:Tu,skinning_vertex:bu,skinnormal_vertex:Au,specularmap_fragment:Cu,specularmap_pars_fragment:Ru,tonemapping_fragment:Pu,tonemapping_pars_fragment:Iu,transmission_fragment:Lu,transmission_pars_fragment:Du,uv_pars_fragment:Uu,uv_pars_vertex:Nu,uv_vertex:Fu,worldpos_vertex:Ou,background_vert:Bu,background_frag:ku,backgroundCube_vert:Gu,backgroundCube_frag:zu,cube_vert:Vu,cube_frag:Hu,depth_vert:Wu,depth_frag:Xu,distanceRGBA_vert:qu,distanceRGBA_frag:Yu,equirect_vert:$u,equirect_frag:ju,linedashed_vert:Ku,linedashed_frag:Zu,meshbasic_vert:Ju,meshbasic_frag:Qu,meshlambert_vert:td,meshlambert_frag:ed,meshmatcap_vert:nd,meshmatcap_frag:id,meshnormal_vert:sd,meshnormal_frag:rd,meshphong_vert:od,meshphong_frag:ad,meshphysical_vert:cd,meshphysical_frag:ld,meshtoon_vert:hd,meshtoon_frag:ud,points_vert:dd,points_frag:fd,shadow_vert:pd,shadow_frag:md,sprite_vert:gd,sprite_frag:_d},rt={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},$e={basic:{uniforms:we([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:we([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new St(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:we([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:we([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:we([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new St(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:we([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:we([rt.points,rt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:we([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:we([rt.common,rt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:we([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:we([rt.sprite,rt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:we([rt.common,rt.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:we([rt.lights,rt.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};$e.physical={uniforms:we([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const ss={r:0,b:0,g:0},Ln=new Ze,xd=new ae;function vd(r,t,e,n,i,s,o){const a=new St(0);let c=s===!0?0:1,l,h,u=null,d=0,m=null;function g(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?e:t).get(E)),E}function _(w){let E=!1;const x=g(w);x===null?f(a,c):x&&x.isColor&&(f(x,1),E=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(w,E){const x=g(E);x&&(x.isCubeTexture||x.mapping===Ms)?(h===void 0&&(h=new F(new gt(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:mi($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ln.copy(E.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xd.makeRotationFromEuler(Ln)),h.material.toneMapped=qt.getTransfer(x.colorSpace)!==Qt,(u!==x||d!==x.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=r.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new F(new dn(2,2),new Je({name:"BackgroundMaterial",uniforms:mi($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=qt.getTransfer(x.colorSpace)!==Qt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,m=r.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function f(w,E){w.getRGB(ss,$a(r)),n.buffers.color.setClear(ss.r,ss.g,ss.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(w,E=1){a.set(w),c=E,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,f(a,c)},render:_,addToRenderList:p}}function Md(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,R,k,B,q){let $=!1;const W=u(B,k,R);s!==W&&(s=W,l(s.object)),$=m(M,B,k,q),$&&g(M,B,k,q),q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(M,R,k,B),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,R,k){const B=k.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let $=q[R.id];$===void 0&&($={},q[R.id]=$);let W=$[B];return W===void 0&&(W=d(c()),$[B]=W),W}function d(M){const R=[],k=[],B=[];for(let q=0;q<e;q++)R[q]=0,k[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:B,object:M,attributes:{},index:null}}function m(M,R,k,B){const q=s.attributes,$=R.attributes;let W=0;const Z=k.getAttributes();for(const V in Z)if(Z[V].location>=0){const at=q[V];let xt=$[V];if(xt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),at===void 0||at.attribute!==xt||xt&&at.data!==xt.data)return!0;W++}return s.attributesNum!==W||s.index!==B}function g(M,R,k,B){const q={},$=R.attributes;let W=0;const Z=k.getAttributes();for(const V in Z)if(Z[V].location>=0){let at=$[V];at===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const xt={};xt.attribute=at,at&&at.data&&(xt.data=at.data),q[V]=xt,W++}s.attributes=q,s.attributesNum=W,s.index=B}function _(){const M=s.newAttributes;for(let R=0,k=M.length;R<k;R++)M[R]=0}function p(M){f(M,0)}function f(M,R){const k=s.newAttributes,B=s.enabledAttributes,q=s.attributeDivisors;k[M]=1,B[M]===0&&(r.enableVertexAttribArray(M),B[M]=1),q[M]!==R&&(r.vertexAttribDivisor(M,R),q[M]=R)}function w(){const M=s.newAttributes,R=s.enabledAttributes;for(let k=0,B=R.length;k<B;k++)R[k]!==M[k]&&(r.disableVertexAttribArray(k),R[k]=0)}function E(M,R,k,B,q,$,W){W===!0?r.vertexAttribIPointer(M,R,k,q,$):r.vertexAttribPointer(M,R,k,B,q,$)}function x(M,R,k,B){_();const q=B.attributes,$=k.getAttributes(),W=R.defaultAttributeValues;for(const Z in $){const V=$[Z];if(V.location>=0){let st=q[Z];if(st===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const at=st.normalized,xt=st.itemSize,It=t.get(st);if(It===void 0)continue;const Yt=It.buffer,X=It.type,J=It.bytesPerElement,_t=X===r.INT||X===r.UNSIGNED_INT||st.gpuType===Wr;if(st.isInterleavedBufferAttribute){const ot=st.data,Tt=ot.stride,Dt=st.offset;if(ot.isInstancedInterleavedBuffer){for(let kt=0;kt<V.locationSize;kt++)f(V.location+kt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let kt=0;kt<V.locationSize;kt++)p(V.location+kt);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let kt=0;kt<V.locationSize;kt++)E(V.location+kt,xt/V.locationSize,X,at,Tt*J,(Dt+xt/V.locationSize*kt)*J,_t)}else{if(st.isInstancedBufferAttribute){for(let ot=0;ot<V.locationSize;ot++)f(V.location+ot,st.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ot=0;ot<V.locationSize;ot++)p(V.location+ot);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let ot=0;ot<V.locationSize;ot++)E(V.location+ot,xt/V.locationSize,X,at,xt*J,xt/V.locationSize*ot*J,_t)}}else if(W!==void 0){const at=W[Z];if(at!==void 0)switch(at.length){case 2:r.vertexAttrib2fv(V.location,at);break;case 3:r.vertexAttrib3fv(V.location,at);break;case 4:r.vertexAttrib4fv(V.location,at);break;default:r.vertexAttrib1fv(V.location,at)}}}}w()}function I(){P();for(const M in n){const R=n[M];for(const k in R){const B=R[k];for(const q in B)h(B[q].object),delete B[q];delete R[k]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const k in R){const B=R[k];for(const q in B)h(B[q].object),delete B[q];delete R[k]}delete n[M.id]}function A(M){for(const R in n){const k=n[R];if(k[M.id]===void 0)continue;const B=k[M.id];for(const q in B)h(B[q].object),delete B[q];delete k[M.id]}}function P(){S(),o=!0,s!==i&&(s=i,l(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function yd(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function c(l,h,u,d){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Sd(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Xe&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==fn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ln&&!P)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:I,maxSamples:C}}function wd(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Un,a=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{const w=s?0:n,E=w*4;let x=f.clippingState||null;c.value=x,x=h(g,d,E,m);for(let I=0;I!==E;++I)x[I]=e[I];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const f=m+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let E=0,x=m;E!==_;++E,x+=4)o.copy(u[E]).applyMatrix4(w,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Ed(r){let t=new WeakMap;function e(o,a){return a===hr?o.mapping=hi:a===ur&&(o.mapping=ui),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===hr||a===ur)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Nl(c.height);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ja extends ja{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ri=4,Vo=[.125,.215,.35,.446,.526,.582],On=20,qs=new Ja,Ho=new St;let Ys=null,$s=0,js=0,Ks=!1;const Nn=(1+Math.sqrt(5))/2,ni=1/Nn,Wo=[new b(-Nn,ni,0),new b(Nn,ni,0),new b(-ni,0,Nn),new b(ni,0,Nn),new b(0,Nn,-ni),new b(0,Nn,ni),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class Xo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ys=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ys,$s,js),this._renderer.xr.enabled=Ks,t.scissorTest=!1,rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ys=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Ui,format:Xe,colorSpace:gi,depthBuffer:!1},i=qo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Td(s)),this._blurMaterial=bd(s,t,e)}return i}_compileMaterial(t){const e=new F(this._lodPlanes[0],t);this._renderer.compile(e,qs)}_sceneToCubeUV(t,e,n,i){const a=new Te(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ho),h.toneMapping=Tn,h.autoClear=!1;const m=new Ke({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),g=new F(new gt,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Ho),_=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):w===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const E=this._cubeSize;rs(i,w*E,f>2?E:0,E,E),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===hi||t.mapping===ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$o()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yo());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new F(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;rs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,qs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wo[(i-s-1)%Wo.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new F(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*On-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):On;p>On&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${On}`);const f=[];let w=0;for(let A=0;A<On;++A){const P=A/_,S=Math.exp(-P*P/2);f.push(S),A===0?w+=S:A<p&&(w+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/w;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const x=this._sizeLods[i],I=3*x*(i>E-ri?i-E+ri:0),C=4*(this._cubeSize-x);rs(e,I,C,3*x,2*x),c.setRenderTarget(e),c.render(u,qs)}}function Td(r){const t=[],e=[],n=[];let i=r;const s=r-ri+1+Vo.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-ri?c=Vo[o-r+ri-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,w=new Float32Array(_*g*m),E=new Float32Array(p*g*m),x=new Float32Array(f*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,P=C>2?0:-1,S=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];w.set(S,_*g*C),E.set(d,p*g*C);const M=[C,C,C,C,C,C];x.set(M,f*g*C)}const I=new Pe;I.setAttribute("position",new Be(w,_)),I.setAttribute("uv",new Be(E,p)),I.setAttribute("faceIndex",new Be(x,f)),t.push(I),i>ri&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qo(r,t,e){const n=new zn(r,t,e);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function bd(r,t,e){const n=new Float32Array(On),i=new b(0,1,0);return new Je({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:to(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Yo(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function $o(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function to(){return`

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
	`}function Ad(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===hr||c===ur,h=c===hi||c===ui;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Xo(r)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return l&&m&&m.height>0||h&&m&&i(m)?(e===null&&(e=new Xo(r)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Cd(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ci("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rd(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],r.ARRAY_BUFFER)}}function l(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const w=m.array;_=m.version;for(let E=0,x=w.length;E<x;E+=3){const I=w[E+0],C=w[E+1],A=w[E+2];d.push(I,C,C,A,A,I)}}else if(g!==void 0){const w=g.array;_=g.version;for(let E=0,x=w.length/3-1;E<x;E+=3){const I=E+0,C=E+1,A=E+2;d.push(I,C,C,A,A,I)}}else return;const p=new(Va(d)?Ya:qa)(d,1);p.version=_;const f=s.get(u);f&&t.remove(f),s.set(u,p)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Pd(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){r.drawElements(n,m,s,d*o),e.update(m,n,1)}function l(d,m,g){g!==0&&(r.drawElementsInstanced(n,m,s,d*o,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,n,1)}function u(d,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/o,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,_,0,g);let f=0;for(let w=0;w<g;w++)f+=m[w]*_[w];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Id(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ld(r,t,e){const n=new WeakMap,i=new ee;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let I=a.attributes.position.count*x,C=1;I>t.maxTextureSize&&(C=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const A=new Float32Array(I*C*4*u),P=new Wa(A,I,C,u);P.type=ln,P.needsUpdate=!0;const S=x*4;for(let R=0;R<u;R++){const k=f[R],B=w[R],q=E[R],$=I*C*4*R;for(let W=0;W<k.count;W++){const Z=W*S;g===!0&&(i.fromBufferAttribute(k,W),A[$+Z+0]=i.x,A[$+Z+1]=i.y,A[$+Z+2]=i.z,A[$+Z+3]=0),_===!0&&(i.fromBufferAttribute(B,W),A[$+Z+4]=i.x,A[$+Z+5]=i.y,A[$+Z+6]=i.z,A[$+Z+7]=0),p===!0&&(i.fromBufferAttribute(q,W),A[$+Z+8]=i.x,A[$+Z+9]=i.y,A[$+Z+10]=i.z,A[$+Z+11]=q.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new Gt(I,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Dd(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Qa extends Re{constructor(t,e,n,i,s,o,a,c,l,h=ai){if(h!==ai&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ai&&(n=Gn),n===void 0&&h===fi&&(n=di),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tc=new Re,jo=new Qa(1,1),ec=new Wa,nc=new vl,ic=new Ka,Ko=[],Zo=[],Jo=new Float32Array(16),Qo=new Float32Array(9),ta=new Float32Array(4);function Mi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Ko[i];if(s===void 0&&(s=new Float32Array(i),Ko[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function pe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function me(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ws(r,t){let e=Zo[t];e===void 0&&(e=new Int32Array(t),Zo[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Ud(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Nd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;r.uniform2fv(this.addr,t),me(e,t)}}function Fd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;r.uniform3fv(this.addr,t),me(e,t)}}function Od(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;r.uniform4fv(this.addr,t),me(e,t)}}function Bd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;ta.set(n),r.uniformMatrix2fv(this.addr,!1,ta),me(e,n)}}function kd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Qo.set(n),r.uniformMatrix3fv(this.addr,!1,Qo),me(e,n)}}function Gd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Jo.set(n),r.uniformMatrix4fv(this.addr,!1,Jo),me(e,n)}}function zd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Vd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;r.uniform2iv(this.addr,t),me(e,t)}}function Hd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;r.uniform3iv(this.addr,t),me(e,t)}}function Wd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;r.uniform4iv(this.addr,t),me(e,t)}}function Xd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function qd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;r.uniform2uiv(this.addr,t),me(e,t)}}function Yd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;r.uniform3uiv(this.addr,t),me(e,t)}}function $d(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;r.uniform4uiv(this.addr,t),me(e,t)}}function jd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(jo.compareFunction=za,s=jo):s=tc,e.setTexture2D(t||s,i)}function Kd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||nc,i)}function Zd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ic,i)}function Jd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ec,i)}function Qd(r){switch(r){case 5126:return Ud;case 35664:return Nd;case 35665:return Fd;case 35666:return Od;case 35674:return Bd;case 35675:return kd;case 35676:return Gd;case 5124:case 35670:return zd;case 35667:case 35671:return Vd;case 35668:case 35672:return Hd;case 35669:case 35673:return Wd;case 5125:return Xd;case 36294:return qd;case 36295:return Yd;case 36296:return $d;case 35678:case 36198:case 36298:case 36306:case 35682:return jd;case 35679:case 36299:case 36307:return Kd;case 35680:case 36300:case 36308:case 36293:return Zd;case 36289:case 36303:case 36311:case 36292:return Jd}}function tf(r,t){r.uniform1fv(this.addr,t)}function ef(r,t){const e=Mi(t,this.size,2);r.uniform2fv(this.addr,e)}function nf(r,t){const e=Mi(t,this.size,3);r.uniform3fv(this.addr,e)}function sf(r,t){const e=Mi(t,this.size,4);r.uniform4fv(this.addr,e)}function rf(r,t){const e=Mi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function of(r,t){const e=Mi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function af(r,t){const e=Mi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function cf(r,t){r.uniform1iv(this.addr,t)}function lf(r,t){r.uniform2iv(this.addr,t)}function hf(r,t){r.uniform3iv(this.addr,t)}function uf(r,t){r.uniform4iv(this.addr,t)}function df(r,t){r.uniform1uiv(this.addr,t)}function ff(r,t){r.uniform2uiv(this.addr,t)}function pf(r,t){r.uniform3uiv(this.addr,t)}function mf(r,t){r.uniform4uiv(this.addr,t)}function gf(r,t,e){const n=this.cache,i=t.length,s=ws(e,i);pe(n,s)||(r.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||tc,s[o])}function _f(r,t,e){const n=this.cache,i=t.length,s=ws(e,i);pe(n,s)||(r.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||nc,s[o])}function xf(r,t,e){const n=this.cache,i=t.length,s=ws(e,i);pe(n,s)||(r.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ic,s[o])}function vf(r,t,e){const n=this.cache,i=t.length,s=ws(e,i);pe(n,s)||(r.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ec,s[o])}function Mf(r){switch(r){case 5126:return tf;case 35664:return ef;case 35665:return nf;case 35666:return sf;case 35674:return rf;case 35675:return of;case 35676:return af;case 5124:case 35670:return cf;case 35667:case 35671:return lf;case 35668:case 35672:return hf;case 35669:case 35673:return uf;case 5125:return df;case 36294:return ff;case 36295:return pf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return _f;case 35680:case 36300:case 36308:case 36293:return xf;case 36289:case 36303:case 36311:case 36292:return vf}}class yf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qd(e.type)}}class Sf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mf(e.type)}}class wf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Zs=/(\w+)(\])?(\[|\.)?/g;function ea(r,t){r.seq.push(t),r.map[t.id]=t}function Ef(r,t,e){const n=r.name,i=n.length;for(Zs.lastIndex=0;;){const s=Zs.exec(n),o=Zs.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ea(e,l===void 0?new yf(a,r,t):new Sf(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new wf(a),ea(e,u)),e=u}}}class ms{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Ef(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function na(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Tf=37297;let bf=0;function Af(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ia=new Ft;function Cf(r){qt._getMatrix(ia,qt.workingColorSpace,r);const t=`mat3( ${ia.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(r)){case ys:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function sa(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Af(r.getShaderSource(t),o)}else return i}function Rf(r,t){const e=Cf(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pf(r,t){let e;switch(t){case Lc:e="Linear";break;case Dc:e="Reinhard";break;case Uc:e="Cineon";break;case Ca:e="ACESFilmic";break;case Fc:e="AgX";break;case Oc:e="Neutral";break;case Nc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const os=new b;function If(){qt.getLuminanceCoefficients(os);const r=os.x.toFixed(4),t=os.y.toFixed(4),e=os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lf(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function Df(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Uf(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ri(r){return r!==""}function ra(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oa(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gr(r){return r.replace(Nf,Of)}const Ff=new Map;function Of(r,t){let e=Bt[t];if(e===void 0){const n=Ff.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gr(e)}const Bf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function aa(r){return r.replace(Bf,kf)}function kf(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ca(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gf(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ta?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ba?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===an&&(t="SHADOWMAP_TYPE_VSM"),t}function zf(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case hi:case ui:t="ENVMAP_TYPE_CUBE";break;case Ms:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vf(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ui:t="ENVMAP_MODE_REFRACTION";break}return t}function Hf(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Aa:t="ENVMAP_BLENDING_MULTIPLY";break;case Pc:t="ENVMAP_BLENDING_MIX";break;case Ic:t="ENVMAP_BLENDING_ADD";break}return t}function Wf(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xf(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Gf(e),l=zf(e),h=Vf(e),u=Hf(e),d=Wf(e),m=Lf(e),g=Df(s),_=i.createProgram();let p,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ri).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ri).join(`
`),f.length>0&&(f+=`
`)):(p=[ca(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),f=[ca(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Tn?Pf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Rf("linearToOutputTexel",e.outputColorSpace),If(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ri).join(`
`)),o=Gr(o),o=ra(o,e),o=oa(o,e),a=Gr(a),a=ra(a,e),a=oa(a,e),o=aa(o),a=aa(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=w+p+o,x=w+f+a,I=na(i,i.VERTEX_SHADER,E),C=na(i,i.FRAGMENT_SHADER,x);i.attachShader(_,I),i.attachShader(_,C),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(R){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(I).trim(),q=i.getShaderInfoLog(C).trim();let $=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,I,C);else{const Z=sa(i,I,"vertex"),V=sa(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+Z+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||q==="")&&(W=!1);W&&(R.diagnostics={runnable:$,programLog:k,vertexShader:{log:B,prefix:p},fragmentShader:{log:q,prefix:f}})}i.deleteShader(I),i.deleteShader(C),P=new ms(i,_),S=Uf(i,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Tf)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=C,this}let qf=0;class Yf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $f(t),e.set(t,n)),n}}class $f{constructor(t){this.id=qf++,this.code=t,this.usedTimes=0}}function jf(r,t,e,n,i,s,o){const a=new Jr,c=new Yf,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,M,R,k,B){const q=k.fog,$=B.geometry,W=S.isMeshStandardMaterial?k.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),V=Z&&Z.mapping===Ms?Z.image.height:null,st=g[S.type];S.precision!==null&&(m=i.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const at=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,xt=at!==void 0?at.length:0;let It=0;$.morphAttributes.position!==void 0&&(It=1),$.morphAttributes.normal!==void 0&&(It=2),$.morphAttributes.color!==void 0&&(It=3);let Yt,X,J,_t;if(st){const Jt=$e[st];Yt=Jt.vertexShader,X=Jt.fragmentShader}else Yt=S.vertexShader,X=S.fragmentShader,c.update(S),J=c.getVertexShaderID(S),_t=c.getFragmentShaderID(S);const ot=r.getRenderTarget(),Tt=r.state.buffers.depth.getReversed(),Dt=B.isInstancedMesh===!0,kt=B.isBatchedMesh===!0,ce=!!S.map,Wt=!!S.matcap,ue=!!Z,N=!!S.aoMap,Ue=!!S.lightMap,zt=!!S.bumpMap,Vt=!!S.normalMap,Ct=!!S.displacementMap,se=!!S.emissiveMap,At=!!S.metalnessMap,T=!!S.roughnessMap,v=S.anisotropy>0,O=S.clearcoat>0,j=S.dispersion>0,Q=S.iridescence>0,Y=S.sheen>0,wt=S.transmission>0,lt=v&&!!S.anisotropyMap,ft=O&&!!S.clearcoatMap,Xt=O&&!!S.clearcoatNormalMap,tt=O&&!!S.clearcoatRoughnessMap,pt=Q&&!!S.iridescenceMap,Rt=Q&&!!S.iridescenceThicknessMap,Pt=Y&&!!S.sheenColorMap,mt=Y&&!!S.sheenRoughnessMap,Ht=!!S.specularMap,Ot=!!S.specularColorMap,ne=!!S.specularIntensityMap,L=wt&&!!S.transmissionMap,ct=wt&&!!S.thicknessMap,H=!!S.gradientMap,K=!!S.alphaMap,dt=S.alphaTest>0,ht=!!S.alphaHash,Ut=!!S.extensions;let le=Tn;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(le=r.toneMapping);const ve={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:Yt,fragmentShader:X,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:kt,batchingColor:kt&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?r.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:gi,alphaToCoverage:!!S.alphaToCoverage,map:ce,matcap:Wt,envMap:ue,envMapMode:ue&&Z.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:Ue,bumpMap:zt,normalMap:Vt,displacementMap:d&&Ct,emissiveMap:se,normalMapObjectSpace:Vt&&S.normalMapType===zc,normalMapTangentSpace:Vt&&S.normalMapType===Ga,metalnessMap:At,roughnessMap:T,anisotropy:v,anisotropyMap:lt,clearcoat:O,clearcoatMap:ft,clearcoatNormalMap:Xt,clearcoatRoughnessMap:tt,dispersion:j,iridescence:Q,iridescenceMap:pt,iridescenceThicknessMap:Rt,sheen:Y,sheenColorMap:Pt,sheenRoughnessMap:mt,specularMap:Ht,specularColorMap:Ot,specularIntensityMap:ne,transmission:wt,transmissionMap:L,thicknessMap:ct,gradientMap:H,opaque:S.transparent===!1&&S.blending===oi&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:dt,alphaHash:ht,combine:S.combine,mapUv:ce&&_(S.map.channel),aoMapUv:N&&_(S.aoMap.channel),lightMapUv:Ue&&_(S.lightMap.channel),bumpMapUv:zt&&_(S.bumpMap.channel),normalMapUv:Vt&&_(S.normalMap.channel),displacementMapUv:Ct&&_(S.displacementMap.channel),emissiveMapUv:se&&_(S.emissiveMap.channel),metalnessMapUv:At&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:lt&&_(S.anisotropyMap.channel),clearcoatMapUv:ft&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(S.sheenRoughnessMap.channel),specularMapUv:Ht&&_(S.specularMap.channel),specularColorMapUv:Ot&&_(S.specularColorMap.channel),specularIntensityMapUv:ne&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:ct&&_(S.thicknessMap.channel),alphaMapUv:K&&_(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Vt||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(ce||K),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:It,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:ce&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===Qt,decodeVideoTextureEmissive:se&&S.emissiveMap.isVideoTexture===!0&&qt.getTransfer(S.emissiveMap.colorSpace)===Qt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===be,flipSided:S.side===Ae,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(w(M,S),E(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function w(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let R;if(M){const k=$e[M];R=Il.clone(k.uniforms)}else R=S.uniforms;return R}function I(S,M){let R;for(let k=0,B=h.length;k<B;k++){const q=h[k];if(q.cacheKey===M){R=q,++R.usedTimes;break}}return R===void 0&&(R=new Xf(r,M,S,s),h.push(R)),R}function C(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function A(S){c.remove(S)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:I,releaseProgram:C,releaseShaderCache:A,programs:h,dispose:P}}function Kf(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Zf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function la(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ha(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,m,g,_,p){let f=r[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},r[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),t++,f}function a(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function c(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Zf),n.length>1&&n.sort(d||la),i.length>1&&i.sort(d||la)}function h(){for(let u=t,d=r.length;u<d;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function Jf(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new ha,r.set(n,[o])):i>=s.length?(o=new ha,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Qf(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new St};break;case"SpotLight":e={position:new b,direction:new b,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new b,halfWidth:new b,halfHeight:new b};break}return r[t.id]=e,e}}}function tp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let ep=0;function np(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ip(r){const t=new Qf,e=tp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);const i=new b,s=new ae,o=new ae;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,_=0,p=0,f=0,w=0,E=0,x=0,I=0,C=0,A=0;l.sort(np);for(let S=0,M=l.length;S<M;S++){const R=l[S],k=R.color,B=R.intensity,q=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=k.r*B,u+=k.g*B,d+=k.b*B;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],B);A++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,V=e.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=R.shadow.matrix,w++}n.directional[m]=W,m++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(k).multiplyScalar(B),W.distance=q,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[_]=W;const Z=R.shadow;if(R.map&&(n.spotLightMap[I]=R.map,I++,Z.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[_]=Z.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=$,x++}_++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(k).multiplyScalar(B),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=W,p++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const Z=R.shadow,V=e.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(B),W.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[f]=W,f++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==f||P.numDirectionalShadows!==w||P.numPointShadows!==E||P.numSpotShadows!==x||P.numSpotMaps!==I||P.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=f,P.numDirectionalShadows=w,P.numPointShadows=E,P.numSpotShadows=x,P.numSpotMaps=I,P.numLightProbes=A,n.version=ep++)}function c(l,h){let u=0,d=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let f=0,w=l.length;f<w;f++){const E=l[f];if(E.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),u++}else if(E.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),o.identity(),s.copy(E.matrixWorld),s.premultiply(p),o.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function ua(r){const t=new ip(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function sp(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new ua(r),t.set(i,[a])):s>=o.length?(a=new ua(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class rp extends vi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class op extends vi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ap=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cp=`uniform sampler2D shadow_pass;
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
}`;function lp(r,t,e){let n=new Qr;const i=new Gt,s=new Gt,o=new ee,a=new rp({depthPacking:Gc}),c=new op,l={},h=e.maxTextureSize,u={[bn]:Ae,[Ae]:bn,[be]:be},d=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:ap,fragmentShader:cp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new F(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ta;let f=this.type;this.render=function(C,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const S=r.getRenderTarget(),M=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),k=r.state;k.setBlending(En),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=f!==an&&this.type===an,q=f===an&&this.type!==an;for(let $=0,W=C.length;$<W;$++){const Z=C[$],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const st=V.getFrameExtents();if(i.multiply(st),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/st.x),i.x=s.x*st.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/st.y),i.y=s.y*st.y,V.mapSize.y=s.y)),V.map===null||B===!0||q===!0){const xt=this.type!==an?{minFilter:qe,magFilter:qe}:{};V.map!==null&&V.map.dispose(),V.map=new zn(i.x,i.y,xt),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const at=V.getViewportCount();for(let xt=0;xt<at;xt++){const It=V.getViewport(xt);o.set(s.x*It.x,s.y*It.y,s.x*It.z,s.y*It.w),k.viewport(o),V.updateMatrices(Z,xt),n=V.getFrustum(),x(A,P,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===an&&w(V,P),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,r.setRenderTarget(S,M,R)};function w(C,A){const P=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new zn(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(A,null,P,d,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(A,null,P,m,_,null)}function E(C,A,P,S){let M=null;const R=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?c:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=M.uuid,B=A.uuid;let q=l[k];q===void 0&&(q={},l[k]=q);let $=q[B];$===void 0&&($=M.clone(),q[B]=$,A.addEventListener("dispose",I)),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,S===an?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=r.properties.get(M);k.light=P}return M}function x(C,A,P,S,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===an)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const B=t.update(C),q=C.material;if(Array.isArray(q)){const $=B.groups;for(let W=0,Z=$.length;W<Z;W++){const V=$[W],st=q[V.materialIndex];if(st&&st.visible){const at=E(C,st,S,M);C.onBeforeShadow(r,C,A,P,B,at,V),r.renderBufferDirect(P,null,B,at,C,V),C.onAfterShadow(r,C,A,P,B,at,V)}}}else if(q.visible){const $=E(C,q,S,M);C.onBeforeShadow(r,C,A,P,B,$,null),r.renderBufferDirect(P,null,B,$,C,null),C.onAfterShadow(r,C,A,P,B,$,null)}}const k=C.children;for(let B=0,q=k.length;B<q;B++)x(k[B],A,P,S,M)}function I(C){C.target.removeEventListener("dispose",I);for(const P in l){const S=l[P],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const hp={[ir]:sr,[rr]:cr,[or]:lr,[li]:ar,[sr]:ir,[cr]:rr,[lr]:or,[ar]:li};function up(r,t){function e(){let L=!1;const ct=new ee;let H=null;const K=new ee(0,0,0,0);return{setMask:function(dt){H!==dt&&!L&&(r.colorMask(dt,dt,dt,dt),H=dt)},setLocked:function(dt){L=dt},setClear:function(dt,ht,Ut,le,ve){ve===!0&&(dt*=le,ht*=le,Ut*=le),ct.set(dt,ht,Ut,le),K.equals(ct)===!1&&(r.clearColor(dt,ht,Ut,le),K.copy(ct))},reset:function(){L=!1,H=null,K.set(-1,0,0,0)}}}function n(){let L=!1,ct=!1,H=null,K=null,dt=null;return{setReversed:function(ht){if(ct!==ht){const Ut=t.get("EXT_clip_control");ct?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const le=dt;dt=null,this.setClear(le)}ct=ht},getReversed:function(){return ct},setTest:function(ht){ht?ot(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(ht){H!==ht&&!L&&(r.depthMask(ht),H=ht)},setFunc:function(ht){if(ct&&(ht=hp[ht]),K!==ht){switch(ht){case ir:r.depthFunc(r.NEVER);break;case sr:r.depthFunc(r.ALWAYS);break;case rr:r.depthFunc(r.LESS);break;case li:r.depthFunc(r.LEQUAL);break;case or:r.depthFunc(r.EQUAL);break;case ar:r.depthFunc(r.GEQUAL);break;case cr:r.depthFunc(r.GREATER);break;case lr:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=ht}},setLocked:function(ht){L=ht},setClear:function(ht){dt!==ht&&(ct&&(ht=1-ht),r.clearDepth(ht),dt=ht)},reset:function(){L=!1,H=null,K=null,dt=null,ct=!1}}}function i(){let L=!1,ct=null,H=null,K=null,dt=null,ht=null,Ut=null,le=null,ve=null;return{setTest:function(Jt){L||(Jt?ot(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(Jt){ct!==Jt&&!L&&(r.stencilMask(Jt),ct=Jt)},setFunc:function(Jt,ke,Qe){(H!==Jt||K!==ke||dt!==Qe)&&(r.stencilFunc(Jt,ke,Qe),H=Jt,K=ke,dt=Qe)},setOp:function(Jt,ke,Qe){(ht!==Jt||Ut!==ke||le!==Qe)&&(r.stencilOp(Jt,ke,Qe),ht=Jt,Ut=ke,le=Qe)},setLocked:function(Jt){L=Jt},setClear:function(Jt){ve!==Jt&&(r.clearStencil(Jt),ve=Jt)},reset:function(){L=!1,ct=null,H=null,K=null,dt=null,ht=null,Ut=null,le=null,ve=null}}}const s=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,m=[],g=null,_=!1,p=null,f=null,w=null,E=null,x=null,I=null,C=null,A=new St(0,0,0),P=0,S=!1,M=null,R=null,k=null,B=null,q=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=Z>=2);let st=null,at={};const xt=r.getParameter(r.SCISSOR_BOX),It=r.getParameter(r.VIEWPORT),Yt=new ee().fromArray(xt),X=new ee().fromArray(It);function J(L,ct,H,K){const dt=new Uint8Array(4),ht=r.createTexture();r.bindTexture(L,ht),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ut=0;Ut<H;Ut++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ct,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,dt):r.texImage2D(ct+Ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,dt);return ht}const _t={};_t[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),_t[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_t[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(r.DEPTH_TEST),o.setFunc(li),zt(!1),Vt(po),ot(r.CULL_FACE),N(En);function ot(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Tt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Dt(L,ct){return u[L]!==ct?(r.bindFramebuffer(L,ct),u[L]=ct,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ct),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ct),!0):!1}function kt(L,ct){let H=m,K=!1;if(L){H=d.get(ct),H===void 0&&(H=[],d.set(ct,H));const dt=L.textures;if(H.length!==dt.length||H[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,Ut=dt.length;ht<Ut;ht++)H[ht]=r.COLOR_ATTACHMENT0+ht;H.length=dt.length,K=!0}}else H[0]!==r.BACK&&(H[0]=r.BACK,K=!0);K&&r.drawBuffers(H)}function ce(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const Wt={[Fn]:r.FUNC_ADD,[fc]:r.FUNC_SUBTRACT,[pc]:r.FUNC_REVERSE_SUBTRACT};Wt[mc]=r.MIN,Wt[gc]=r.MAX;const ue={[_c]:r.ZERO,[xc]:r.ONE,[vc]:r.SRC_COLOR,[er]:r.SRC_ALPHA,[Tc]:r.SRC_ALPHA_SATURATE,[wc]:r.DST_COLOR,[yc]:r.DST_ALPHA,[Mc]:r.ONE_MINUS_SRC_COLOR,[nr]:r.ONE_MINUS_SRC_ALPHA,[Ec]:r.ONE_MINUS_DST_COLOR,[Sc]:r.ONE_MINUS_DST_ALPHA,[bc]:r.CONSTANT_COLOR,[Ac]:r.ONE_MINUS_CONSTANT_COLOR,[Cc]:r.CONSTANT_ALPHA,[Rc]:r.ONE_MINUS_CONSTANT_ALPHA};function N(L,ct,H,K,dt,ht,Ut,le,ve,Jt){if(L===En){_===!0&&(Tt(r.BLEND),_=!1);return}if(_===!1&&(ot(r.BLEND),_=!0),L!==dc){if(L!==p||Jt!==S){if((f!==Fn||x!==Fn)&&(r.blendEquation(r.FUNC_ADD),f=Fn,x=Fn),Jt)switch(L){case oi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mo:r.blendFunc(r.ONE,r.ONE);break;case go:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _o:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case oi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case go:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _o:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,E=null,I=null,C=null,A.set(0,0,0),P=0,p=L,S=Jt}return}dt=dt||ct,ht=ht||H,Ut=Ut||K,(ct!==f||dt!==x)&&(r.blendEquationSeparate(Wt[ct],Wt[dt]),f=ct,x=dt),(H!==w||K!==E||ht!==I||Ut!==C)&&(r.blendFuncSeparate(ue[H],ue[K],ue[ht],ue[Ut]),w=H,E=K,I=ht,C=Ut),(le.equals(A)===!1||ve!==P)&&(r.blendColor(le.r,le.g,le.b,ve),A.copy(le),P=ve),p=L,S=!1}function Ue(L,ct){L.side===be?Tt(r.CULL_FACE):ot(r.CULL_FACE);let H=L.side===Ae;ct&&(H=!H),zt(H),L.blending===oi&&L.transparent===!1?N(En):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ot(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function zt(L){M!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),M=L)}function Vt(L){L!==hc?(ot(r.CULL_FACE),L!==R&&(L===po?r.cullFace(r.BACK):L===uc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),R=L}function Ct(L){L!==k&&(W&&r.lineWidth(L),k=L)}function se(L,ct,H){L?(ot(r.POLYGON_OFFSET_FILL),(B!==ct||q!==H)&&(r.polygonOffset(ct,H),B=ct,q=H)):Tt(r.POLYGON_OFFSET_FILL)}function At(L){L?ot(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function T(L){L===void 0&&(L=r.TEXTURE0+$-1),st!==L&&(r.activeTexture(L),st=L)}function v(L,ct,H){H===void 0&&(st===null?H=r.TEXTURE0+$-1:H=st);let K=at[H];K===void 0&&(K={type:void 0,texture:void 0},at[H]=K),(K.type!==L||K.texture!==ct)&&(st!==H&&(r.activeTexture(H),st=H),r.bindTexture(L,ct||_t[L]),K.type=L,K.texture=ct)}function O(){const L=at[st];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(L){Yt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Yt.copy(L))}function mt(L){X.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function Ht(L,ct){let H=l.get(ct);H===void 0&&(H=new WeakMap,l.set(ct,H));let K=H.get(L);K===void 0&&(K=r.getUniformBlockIndex(ct,L.name),H.set(L,K))}function Ot(L,ct){const K=l.get(ct).get(L);c.get(ct)!==K&&(r.uniformBlockBinding(ct,K,L.__bindingPointIndex),c.set(ct,K))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},st=null,at={},u={},d=new WeakMap,m=[],g=null,_=!1,p=null,f=null,w=null,E=null,x=null,I=null,C=null,A=new St(0,0,0),P=0,S=!1,M=null,R=null,k=null,B=null,q=null,Yt.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ot,disable:Tt,bindFramebuffer:Dt,drawBuffers:kt,useProgram:ce,setBlending:N,setMaterial:Ue,setFlipSided:zt,setCullFace:Vt,setLineWidth:Ct,setPolygonOffset:se,setScissorTest:At,activeTexture:T,bindTexture:v,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:pt,texImage3D:Rt,updateUBOMapping:Ht,uniformBlockBinding:Ot,texStorage2D:Xt,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:wt,compressedTexSubImage2D:lt,compressedTexSubImage3D:ft,scissor:Pt,viewport:mt,reset:ne}}function da(r,t,e,n){const i=dp(n);switch(e){case Da:return r*t;case Na:return r*t;case Fa:return r*t*2;case Oa:return r*t/i.components*i.byteLength;case Yr:return r*t/i.components*i.byteLength;case Ba:return r*t*2/i.components*i.byteLength;case $r:return r*t*2/i.components*i.byteLength;case Ua:return r*t*3/i.components*i.byteLength;case Xe:return r*t*4/i.components*i.byteLength;case jr:return r*t*4/i.components*i.byteLength;case hs:case us:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ds:case fs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case mr:case _r:return Math.max(r,16)*Math.max(t,8)/4;case pr:case gr:return Math.max(r,8)*Math.max(t,8)/2;case xr:case vr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Mr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sr:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case wr:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Er:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Tr:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case br:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ar:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Cr:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Rr:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Pr:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ir:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Lr:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Dr:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ur:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ps:case Nr:case Fr:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ka:case Or:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Br:case kr:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dp(r){switch(r){case fn:case Pa:return{byteLength:1,components:1};case Li:case Ia:case Ui:return{byteLength:2,components:1};case Xr:case qr:return{byteLength:2,components:4};case Gn:case Wr:case ln:return{byteLength:4,components:1};case La:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function fp(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Gt,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return m?new OffscreenCanvas(T,v):_s("canvas")}function _(T,v,O){let j=1;const Q=At(T);if((Q.width>O||Q.height>O)&&(j=O/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(j*Q.width),wt=Math.floor(j*Q.height);u===void 0&&(u=g(Y,wt));const lt=v?g(Y,wt):u;return lt.width=Y,lt.height=wt,lt.getContext("2d").drawImage(T,0,0,Y,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+wt+")."),lt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function p(T){return T.generateMipmaps}function f(T){r.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(T,v,O,j,Q=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=v;if(v===r.RED&&(O===r.FLOAT&&(Y=r.R32F),O===r.HALF_FLOAT&&(Y=r.R16F),O===r.UNSIGNED_BYTE&&(Y=r.R8)),v===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.R8UI),O===r.UNSIGNED_SHORT&&(Y=r.R16UI),O===r.UNSIGNED_INT&&(Y=r.R32UI),O===r.BYTE&&(Y=r.R8I),O===r.SHORT&&(Y=r.R16I),O===r.INT&&(Y=r.R32I)),v===r.RG&&(O===r.FLOAT&&(Y=r.RG32F),O===r.HALF_FLOAT&&(Y=r.RG16F),O===r.UNSIGNED_BYTE&&(Y=r.RG8)),v===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RG8UI),O===r.UNSIGNED_SHORT&&(Y=r.RG16UI),O===r.UNSIGNED_INT&&(Y=r.RG32UI),O===r.BYTE&&(Y=r.RG8I),O===r.SHORT&&(Y=r.RG16I),O===r.INT&&(Y=r.RG32I)),v===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),O===r.UNSIGNED_INT&&(Y=r.RGB32UI),O===r.BYTE&&(Y=r.RGB8I),O===r.SHORT&&(Y=r.RGB16I),O===r.INT&&(Y=r.RGB32I)),v===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),O===r.UNSIGNED_INT&&(Y=r.RGBA32UI),O===r.BYTE&&(Y=r.RGBA8I),O===r.SHORT&&(Y=r.RGBA16I),O===r.INT&&(Y=r.RGBA32I)),v===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),v===r.RGBA){const wt=Q?ys:qt.getTransfer(j);O===r.FLOAT&&(Y=r.RGBA32F),O===r.HALF_FLOAT&&(Y=r.RGBA16F),O===r.UNSIGNED_BYTE&&(Y=wt===Qt?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(T,v){let O;return T?v===null||v===Gn||v===di?O=r.DEPTH24_STENCIL8:v===ln?O=r.DEPTH32F_STENCIL8:v===Li&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gn||v===di?O=r.DEPTH_COMPONENT24:v===ln?O=r.DEPTH_COMPONENT32F:v===Li&&(O=r.DEPTH_COMPONENT16),O}function I(T,v){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==qe&&T.minFilter!==je?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function C(T){const v=T.target;v.removeEventListener("dispose",C),P(v),v.isVideoTexture&&h.delete(v)}function A(T){const v=T.target;v.removeEventListener("dispose",A),M(v)}function P(T){const v=n.get(T);if(v.__webglInit===void 0)return;const O=T.source,j=d.get(O);if(j){const Q=j[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(T),Object.keys(j).length===0&&d.delete(O)}n.remove(T)}function S(T){const v=n.get(T);r.deleteTexture(v.__webglTexture);const O=T.source,j=d.get(O);delete j[v.__cacheKey],o.memory.textures--}function M(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let Q=0;Q<v.__webglFramebuffer[j].length;Q++)r.deleteFramebuffer(v.__webglFramebuffer[j][Q]);else r.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)r.deleteFramebuffer(v.__webglFramebuffer[j]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=T.textures;for(let j=0,Q=O.length;j<Q;j++){const Y=n.get(O[j]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(O[j])}n.remove(T)}let R=0;function k(){R=0}function B(){const T=R;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),R+=1,T}function q(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function $(T,v){const O=n.get(T);if(T.isVideoTexture&&Ct(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,T,v);return}}e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+v)}function W(T,v){const O=n.get(T);if(T.version>0&&O.__version!==T.version){X(O,T,v);return}e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+v)}function Z(T,v){const O=n.get(T);if(T.version>0&&O.__version!==T.version){X(O,T,v);return}e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+v)}function V(T,v){const O=n.get(T);if(T.version>0&&O.__version!==T.version){J(O,T,v);return}e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+v)}const st={[dr]:r.REPEAT,[Bn]:r.CLAMP_TO_EDGE,[fr]:r.MIRRORED_REPEAT},at={[qe]:r.NEAREST,[Bc]:r.NEAREST_MIPMAP_NEAREST,[Gi]:r.NEAREST_MIPMAP_LINEAR,[je]:r.LINEAR,[Ts]:r.LINEAR_MIPMAP_NEAREST,[kn]:r.LINEAR_MIPMAP_LINEAR},xt={[Vc]:r.NEVER,[$c]:r.ALWAYS,[Hc]:r.LESS,[za]:r.LEQUAL,[Wc]:r.EQUAL,[Yc]:r.GEQUAL,[Xc]:r.GREATER,[qc]:r.NOTEQUAL};function It(T,v){if(v.type===ln&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===je||v.magFilter===Ts||v.magFilter===Gi||v.magFilter===kn||v.minFilter===je||v.minFilter===Ts||v.minFilter===Gi||v.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,st[v.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,st[v.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,st[v.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,at[v.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,at[v.minFilter]),v.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,xt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qe||v.minFilter!==Gi&&v.minFilter!==kn||v.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");r.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Yt(T,v){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",C));const j=v.source;let Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));const Y=q(v);if(Y!==T.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[Y].usedTimes++;const wt=Q[T.__cacheKey];wt!==void 0&&(Q[T.__cacheKey].usedTimes--,wt.usedTimes===0&&S(v)),T.__cacheKey=Y,T.__webglTexture=Q[Y].texture}return O}function X(T,v,O){let j=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=r.TEXTURE_3D);const Q=Yt(T,v),Y=v.source;e.bindTexture(j,T.__webglTexture,r.TEXTURE0+O);const wt=n.get(Y);if(Y.version!==wt.__version||Q===!0){e.activeTexture(r.TEXTURE0+O);const lt=qt.getPrimaries(qt.workingColorSpace),ft=v.colorSpace===wn?null:qt.getPrimaries(v.colorSpace),Xt=v.colorSpace===wn||lt===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let tt=_(v.image,!1,i.maxTextureSize);tt=se(v,tt);const pt=s.convert(v.format,v.colorSpace),Rt=s.convert(v.type);let Pt=E(v.internalFormat,pt,Rt,v.colorSpace,v.isVideoTexture);It(j,v);let mt;const Ht=v.mipmaps,Ot=v.isVideoTexture!==!0,ne=wt.__version===void 0||Q===!0,L=Y.dataReady,ct=I(v,tt);if(v.isDepthTexture)Pt=x(v.format===fi,v.type),ne&&(Ot?e.texStorage2D(r.TEXTURE_2D,1,Pt,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,Pt,tt.width,tt.height,0,pt,Rt,null));else if(v.isDataTexture)if(Ht.length>0){Ot&&ne&&e.texStorage2D(r.TEXTURE_2D,ct,Pt,Ht[0].width,Ht[0].height);for(let H=0,K=Ht.length;H<K;H++)mt=Ht[H],Ot?L&&e.texSubImage2D(r.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(r.TEXTURE_2D,H,Pt,mt.width,mt.height,0,pt,Rt,mt.data);v.generateMipmaps=!1}else Ot?(ne&&e.texStorage2D(r.TEXTURE_2D,ct,Pt,tt.width,tt.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,Rt,tt.data)):e.texImage2D(r.TEXTURE_2D,0,Pt,tt.width,tt.height,0,pt,Rt,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ot&&ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Pt,Ht[0].width,Ht[0].height,tt.depth);for(let H=0,K=Ht.length;H<K;H++)if(mt=Ht[H],v.format!==Xe)if(pt!==null)if(Ot){if(L)if(v.layerUpdates.size>0){const dt=da(mt.width,mt.height,v.format,v.type);for(const ht of v.layerUpdates){const Ut=mt.data.subarray(ht*dt/mt.data.BYTES_PER_ELEMENT,(ht+1)*dt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,ht,mt.width,mt.height,1,pt,Ut)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,Pt,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,tt.depth,pt,Rt,mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,H,Pt,mt.width,mt.height,tt.depth,0,pt,Rt,mt.data)}else{Ot&&ne&&e.texStorage2D(r.TEXTURE_2D,ct,Pt,Ht[0].width,Ht[0].height);for(let H=0,K=Ht.length;H<K;H++)mt=Ht[H],v.format!==Xe?pt!==null?Ot?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(r.TEXTURE_2D,H,Pt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?L&&e.texSubImage2D(r.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(r.TEXTURE_2D,H,Pt,mt.width,mt.height,0,pt,Rt,mt.data)}else if(v.isDataArrayTexture)if(Ot){if(ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Pt,tt.width,tt.height,tt.depth),L)if(v.layerUpdates.size>0){const H=da(tt.width,tt.height,v.format,v.type);for(const K of v.layerUpdates){const dt=tt.data.subarray(K*H/tt.data.BYTES_PER_ELEMENT,(K+1)*H/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,pt,Rt,dt)}v.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,Rt,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,tt.width,tt.height,tt.depth,0,pt,Rt,tt.data);else if(v.isData3DTexture)Ot?(ne&&e.texStorage3D(r.TEXTURE_3D,ct,Pt,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,Rt,tt.data)):e.texImage3D(r.TEXTURE_3D,0,Pt,tt.width,tt.height,tt.depth,0,pt,Rt,tt.data);else if(v.isFramebufferTexture){if(ne)if(Ot)e.texStorage2D(r.TEXTURE_2D,ct,Pt,tt.width,tt.height);else{let H=tt.width,K=tt.height;for(let dt=0;dt<ct;dt++)e.texImage2D(r.TEXTURE_2D,dt,Pt,H,K,0,pt,Rt,null),H>>=1,K>>=1}}else if(Ht.length>0){if(Ot&&ne){const H=At(Ht[0]);e.texStorage2D(r.TEXTURE_2D,ct,Pt,H.width,H.height)}for(let H=0,K=Ht.length;H<K;H++)mt=Ht[H],Ot?L&&e.texSubImage2D(r.TEXTURE_2D,H,0,0,pt,Rt,mt):e.texImage2D(r.TEXTURE_2D,H,Pt,pt,Rt,mt);v.generateMipmaps=!1}else if(Ot){if(ne){const H=At(tt);e.texStorage2D(r.TEXTURE_2D,ct,Pt,H.width,H.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,pt,Rt,tt)}else e.texImage2D(r.TEXTURE_2D,0,Pt,pt,Rt,tt);p(v)&&f(j),wt.__version=Y.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function J(T,v,O){if(v.image.length!==6)return;const j=Yt(T,v),Q=v.source;e.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+O);const Y=n.get(Q);if(Q.version!==Y.__version||j===!0){e.activeTexture(r.TEXTURE0+O);const wt=qt.getPrimaries(qt.workingColorSpace),lt=v.colorSpace===wn?null:qt.getPrimaries(v.colorSpace),ft=v.colorSpace===wn||wt===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Xt=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let K=0;K<6;K++)!Xt&&!tt?pt[K]=_(v.image[K],!0,i.maxCubemapSize):pt[K]=tt?v.image[K].image:v.image[K],pt[K]=se(v,pt[K]);const Rt=pt[0],Pt=s.convert(v.format,v.colorSpace),mt=s.convert(v.type),Ht=E(v.internalFormat,Pt,mt,v.colorSpace),Ot=v.isVideoTexture!==!0,ne=Y.__version===void 0||j===!0,L=Q.dataReady;let ct=I(v,Rt);It(r.TEXTURE_CUBE_MAP,v);let H;if(Xt){Ot&&ne&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Ht,Rt.width,Rt.height);for(let K=0;K<6;K++){H=pt[K].mipmaps;for(let dt=0;dt<H.length;dt++){const ht=H[dt];v.format!==Xe?Pt!==null?Ot?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ht.width,ht.height,Pt,ht.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,Ht,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ht.width,ht.height,Pt,mt,ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,Ht,ht.width,ht.height,0,Pt,mt,ht.data)}}}else{if(H=v.mipmaps,Ot&&ne){H.length>0&&ct++;const K=At(pt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Ot?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pt[K].width,pt[K].height,Pt,mt,pt[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,pt[K].width,pt[K].height,0,Pt,mt,pt[K].data);for(let dt=0;dt<H.length;dt++){const Ut=H[dt].image[K].image;Ot?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,Ut.width,Ut.height,Pt,mt,Ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,Ht,Ut.width,Ut.height,0,Pt,mt,Ut.data)}}else{Ot?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pt,mt,pt[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,Pt,mt,pt[K]);for(let dt=0;dt<H.length;dt++){const ht=H[dt];Ot?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,Pt,mt,ht.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,Ht,Pt,mt,ht.image[K])}}}p(v)&&f(r.TEXTURE_CUBE_MAP),Y.__version=Q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function _t(T,v,O,j,Q,Y){const wt=s.convert(O.format,O.colorSpace),lt=s.convert(O.type),ft=E(O.internalFormat,wt,lt,O.colorSpace),Xt=n.get(v),tt=n.get(O);if(tt.__renderTarget=v,!Xt.__hasExternalTextures){const pt=Math.max(1,v.width>>Y),Rt=Math.max(1,v.height>>Y);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,ft,pt,Rt,v.depth,0,wt,lt,null):e.texImage2D(Q,Y,ft,pt,Rt,0,wt,lt,null)}e.bindFramebuffer(r.FRAMEBUFFER,T),Vt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,Q,tt.__webglTexture,0,zt(v)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,Q,tt.__webglTexture,Y),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(T,v,O){if(r.bindRenderbuffer(r.RENDERBUFFER,T),v.depthBuffer){const j=v.depthTexture,Q=j&&j.isDepthTexture?j.type:null,Y=x(v.stencilBuffer,Q),wt=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=zt(v);Vt(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt,Y,v.width,v.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt,Y,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Y,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,wt,r.RENDERBUFFER,T)}else{const j=v.textures;for(let Q=0;Q<j.length;Q++){const Y=j[Q],wt=s.convert(Y.format,Y.colorSpace),lt=s.convert(Y.type),ft=E(Y.internalFormat,wt,lt,Y.colorSpace),Xt=zt(v);O&&Vt(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,ft,v.width,v.height):Vt(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt,ft,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ft,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Tt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const Q=j.__webglTexture,Y=zt(v);if(v.depthTexture.format===ai)Vt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(v.depthTexture.format===fi)Vt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Dt(T){const v=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=j}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Tt(v.__webglFramebuffer,T)}else if(O){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=r.createRenderbuffer(),ot(v.__webglDepthbuffer[j],T,!1);else{const Q=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),ot(v.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,Q)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(T,v,O){const j=n.get(T);v!==void 0&&_t(j.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Dt(T)}function ce(T){const v=T.texture,O=n.get(T),j=n.get(v);T.addEventListener("dispose",A);const Q=T.textures,Y=T.isWebGLCubeRenderTarget===!0,wt=Q.length>1;if(wt||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=v.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[lt]=[];for(let ft=0;ft<v.mipmaps.length;ft++)O.__webglFramebuffer[lt][ft]=r.createFramebuffer()}else O.__webglFramebuffer[lt]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let lt=0;lt<v.mipmaps.length;lt++)O.__webglFramebuffer[lt]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(wt)for(let lt=0,ft=Q.length;lt<ft;lt++){const Xt=n.get(Q[lt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),o.memory.textures++)}if(T.samples>0&&Vt(T)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){const ft=Q[lt];O.__webglColorRenderbuffer[lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[lt]);const Xt=s.convert(ft.format,ft.colorSpace),tt=s.convert(ft.type),pt=E(ft.internalFormat,Xt,tt,ft.colorSpace,T.isXRRenderTarget===!0),Rt=zt(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,pt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,O.__webglColorRenderbuffer[lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),ot(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),It(r.TEXTURE_CUBE_MAP,v);for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)_t(O.__webglFramebuffer[lt][ft],T,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else _t(O.__webglFramebuffer[lt],T,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(v)&&f(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let lt=0,ft=Q.length;lt<ft;lt++){const Xt=Q[lt],tt=n.get(Xt);e.bindTexture(r.TEXTURE_2D,tt.__webglTexture),It(r.TEXTURE_2D,Xt),_t(O.__webglFramebuffer,T,Xt,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,0),p(Xt)&&f(r.TEXTURE_2D)}e.unbindTexture()}else{let lt=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(lt,j.__webglTexture),It(lt,v),v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)_t(O.__webglFramebuffer[ft],T,v,r.COLOR_ATTACHMENT0,lt,ft);else _t(O.__webglFramebuffer,T,v,r.COLOR_ATTACHMENT0,lt,0);p(v)&&f(lt),e.unbindTexture()}T.depthBuffer&&Dt(T)}function Wt(T){const v=T.textures;for(let O=0,j=v.length;O<j;O++){const Q=v[O];if(p(Q)){const Y=w(T),wt=n.get(Q).__webglTexture;e.bindTexture(Y,wt),f(Y),e.unbindTexture()}}}const ue=[],N=[];function Ue(T){if(T.samples>0){if(Vt(T)===!1){const v=T.textures,O=T.width,j=T.height;let Q=r.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=n.get(T),lt=v.length>1;if(lt)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,wt.__webglColorRenderbuffer[ft]);const Xt=n.get(v[ft]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xt,0)}r.blitFramebuffer(0,0,O,j,0,0,O,j,Q,r.NEAREST),c===!0&&(ue.length=0,N.length=0,ue.push(r.COLOR_ATTACHMENT0+ft),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ue.push(Y),N.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),lt)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,wt.__webglColorRenderbuffer[ft]);const Xt=n.get(v[ft]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,Xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const v=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function zt(T){return Math.min(i.maxSamples,T.samples)}function Vt(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ct(T){const v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function se(T,v){const O=T.colorSpace,j=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==gi&&O!==wn&&(qt.getTransfer(O)===Qt?(j!==Xe||Q!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function At(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=kt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Vt}function pp(r,t){function e(n,i=wn){let s;const o=qt.getTransfer(i);if(n===fn)return r.UNSIGNED_BYTE;if(n===Xr)return r.UNSIGNED_SHORT_4_4_4_4;if(n===qr)return r.UNSIGNED_SHORT_5_5_5_1;if(n===La)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Pa)return r.BYTE;if(n===Ia)return r.SHORT;if(n===Li)return r.UNSIGNED_SHORT;if(n===Wr)return r.INT;if(n===Gn)return r.UNSIGNED_INT;if(n===ln)return r.FLOAT;if(n===Ui)return r.HALF_FLOAT;if(n===Da)return r.ALPHA;if(n===Ua)return r.RGB;if(n===Xe)return r.RGBA;if(n===Na)return r.LUMINANCE;if(n===Fa)return r.LUMINANCE_ALPHA;if(n===ai)return r.DEPTH_COMPONENT;if(n===fi)return r.DEPTH_STENCIL;if(n===Oa)return r.RED;if(n===Yr)return r.RED_INTEGER;if(n===Ba)return r.RG;if(n===$r)return r.RG_INTEGER;if(n===jr)return r.RGBA_INTEGER;if(n===hs||n===us||n===ds||n===fs)if(o===Qt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===us)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ds)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pr||n===mr||n===gr||n===_r)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===pr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_r)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xr||n===vr||n===Mr)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xr||n===vr)return o===Qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Mr)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yr||n===Sr||n===wr||n===Er||n===Tr||n===br||n===Ar||n===Cr||n===Rr||n===Pr||n===Ir||n===Lr||n===Dr||n===Ur)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===yr)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sr)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wr)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Er)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tr)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===br)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ar)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cr)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rr)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pr)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ir)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lr)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dr)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ur)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ps||n===Nr||n===Fr)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ps)return o===Qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ka||n===Or||n===Br||n===kr)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ps)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Or)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Br)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kr)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===di?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class mp extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class bt extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gp={type:"move"};class Js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _p=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xp=`
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

}`;class vp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Re,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Je({vertexShader:_p,fragmentShader:xp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new F(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mp extends _i{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null;const _=new vp,p=e.getContextAttributes();let f=null,w=null;const E=[],x=[],I=new Gt;let C=null;const A=new Te;A.viewport=new ee;const P=new Te;P.viewport=new ee;const S=[A,P],M=new mp;let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=E[X];return J===void 0&&(J=new Js,E[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=E[X];return J===void 0&&(J=new Js,E[X]=J),J.getGripSpace()},this.getHand=function(X){let J=E[X];return J===void 0&&(J=new Js,E[X]=J),J.getHandSpace()};function B(X){const J=x.indexOf(X.inputSource);if(J===-1)return;const _t=E[J];_t!==void 0&&(_t.update(X.inputSource,X.frame,l||o),_t.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",$);for(let X=0;X<E.length;X++){const J=x[X];J!==null&&(x[X]=null,E[X].disconnect(J))}R=null,k=null,_.reset(),t.setRenderTarget(f),m=null,d=null,u=null,i=null,w=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",q),i.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){const J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new zn(m.framebufferWidth,m.framebufferHeight,{format:Xe,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,_t=null,ot=null;p.depth&&(ot=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=p.stencil?fi:ai,_t=p.stencil?di:Gn);const Tt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Tt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new zn(d.textureWidth,d.textureHeight,{format:Xe,type:fn,depthTexture:new Qa(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(X){for(let J=0;J<X.removed.length;J++){const _t=X.removed[J],ot=x.indexOf(_t);ot>=0&&(x[ot]=null,E[ot].disconnect(_t))}for(let J=0;J<X.added.length;J++){const _t=X.added[J];let ot=x.indexOf(_t);if(ot===-1){for(let Dt=0;Dt<E.length;Dt++)if(Dt>=x.length){x.push(_t),ot=Dt;break}else if(x[Dt]===null){x[Dt]=_t,ot=Dt;break}if(ot===-1)break}const Tt=E[ot];Tt&&Tt.connect(_t)}}const W=new b,Z=new b;function V(X,J,_t){W.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(_t.matrixWorld);const ot=W.distanceTo(Z),Tt=J.projectionMatrix.elements,Dt=_t.projectionMatrix.elements,kt=Tt[14]/(Tt[10]-1),ce=Tt[14]/(Tt[10]+1),Wt=(Tt[9]+1)/Tt[5],ue=(Tt[9]-1)/Tt[5],N=(Tt[8]-1)/Tt[0],Ue=(Dt[8]+1)/Dt[0],zt=kt*N,Vt=kt*Ue,Ct=ot/(-N+Ue),se=Ct*-N;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(se),X.translateZ(Ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Tt[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const At=kt+Ct,T=ce+Ct,v=zt-se,O=Vt+(ot-se),j=Wt*ce/T*At,Q=ue*ce/T*At;X.projectionMatrix.makePerspective(v,O,j,Q,At,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function st(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let J=X.near,_t=X.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),M.near=P.near=A.near=J,M.far=P.far=A.far=_t,(R!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,k=M.far),A.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const ot=X.parent,Tt=M.cameras;st(M,ot);for(let Dt=0;Dt<Tt.length;Dt++)st(Tt[Dt],ot);Tt.length===2?V(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),at(X,M,ot)};function at(X,J,_t){_t===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(_t.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=pi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let xt=null;function It(X,J){if(h=J.getViewerPose(l||o),g=J,h!==null){const _t=h.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let ot=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let Dt=0;Dt<_t.length;Dt++){const kt=_t[Dt];let ce=null;if(m!==null)ce=m.getViewport(kt);else{const ue=u.getViewSubImage(d,kt);ce=ue.viewport,Dt===0&&(t.setRenderTargetTextures(w,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(w))}let Wt=S[Dt];Wt===void 0&&(Wt=new Te,Wt.layers.enable(Dt),Wt.viewport=new ee,S[Dt]=Wt),Wt.matrix.fromArray(kt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(kt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ce.x,ce.y,ce.width,ce.height),Dt===0&&(M.matrix.copy(Wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(Wt)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Dt=u.getDepthInformation(_t[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,i.renderState)}}for(let _t=0;_t<E.length;_t++){const ot=x[_t],Tt=E[_t];ot!==null&&Tt!==void 0&&Tt.update(ot,J,l||o)}xt&&xt(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Yt=new Za;Yt.setAnimationLoop(It),this.setAnimationLoop=function(X){xt=X},this.dispose=function(){}}}const Dn=new Ze,yp=new ae;function Sp(r,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,$a(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,w,E,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,x)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,w,E):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ae&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ae&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const w=t.get(f),E=w.envMap,x=w.envMapRotation;E&&(p.envMap.value=E,Dn.copy(x),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),p.envMapRotation.value.setFromMatrix4(yp.makeRotationFromEuler(Dn)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,w,E){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=E*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ae&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const w=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wp(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,E){const x=E.program;n.uniformBlockBinding(w,x)}function l(w,E){let x=i[w.id];x===void 0&&(g(w),x=h(w),i[w.id]=x,w.addEventListener("dispose",p));const I=E.program;n.updateUBOMapping(w,I);const C=t.render.frame;s[w.id]!==C&&(d(w),s[w.id]=C)}function h(w){const E=u();w.__bindingPointIndex=E;const x=r.createBuffer(),I=w.__size,C=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,I,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,x),x}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const E=i[w.id],x=w.uniforms,I=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let C=0,A=x.length;C<A;C++){const P=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,M=P.length;S<M;S++){const R=P[S];if(m(R,C,S,I)===!0){const k=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let $=0;$<B.length;$++){const W=B[$],Z=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,k+q,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(w,E,x,I){const C=w.value,A=E+"_"+x;if(I[A]===void 0)return typeof C=="number"||typeof C=="boolean"?I[A]=C:I[A]=C.clone(),!0;{const P=I[A];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return I[A]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(w){const E=w.uniforms;let x=0;const I=16;for(let A=0,P=E.length;A<P;A++){const S=Array.isArray(E[A])?E[A]:[E[A]];for(let M=0,R=S.length;M<R;M++){const k=S[M],B=Array.isArray(k.value)?k.value:[k.value];for(let q=0,$=B.length;q<$;q++){const W=B[q],Z=_(W),V=x%I,st=V%Z.boundary,at=V+st;x+=st,at!==0&&I-at<Z.storage&&(x+=I-at),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=Z.storage}}}const C=x%I;return C>0&&(x+=I-C),w.__size=x,w.__cache={},this}function _(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function p(w){const E=w.target;E.removeEventListener("dispose",p);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function f(){for(const w in i)r.deleteBuffer(i[w]);o=[],i={},s={}}return{bind:c,update:l,dispose:f}}class fa{constructor(t={}){const{canvas:e=ul(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,f=null;const w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Tn,this.toneMappingExposure=1;const x=this;let I=!1,C=0,A=0,P=null,S=-1,M=null;const R=new ee,k=new ee;let B=null;const q=new St(0);let $=0,W=e.width,Z=e.height,V=1,st=null,at=null;const xt=new ee(0,0,W,Z),It=new ee(0,0,W,Z);let Yt=!1;const X=new Qr;let J=!1,_t=!1;const ot=new ae,Tt=new ae,Dt=new b,kt=new ee,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function ue(){return P===null?V:1}let N=n;function Ue(y,D){return e.getContext(y,D)}try{const y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hr}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),N===null){const D="webgl2";if(N=Ue(D,y),N===null)throw Ue(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let zt,Vt,Ct,se,At,T,v,O,j,Q,Y,wt,lt,ft,Xt,tt,pt,Rt,Pt,mt,Ht,Ot,ne,L;function ct(){zt=new Cd(N),zt.init(),Ot=new pp(N,zt),Vt=new Sd(N,zt,t,Ot),Ct=new up(N,zt),Vt.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),se=new Id(N),At=new Kf,T=new fp(N,zt,Ct,At,Vt,Ot,se),v=new Ed(x),O=new Ad(x),j=new Bl(N),ne=new Md(N,j),Q=new Rd(N,j,se,ne),Y=new Dd(N,Q,j,se),Pt=new Ld(N,Vt,T),tt=new wd(At),wt=new jf(x,v,O,zt,Vt,ne,tt),lt=new Sp(x,At),ft=new Jf,Xt=new sp(zt),Rt=new vd(x,v,O,Ct,Y,m,c),pt=new lp(x,Y,Vt),L=new wp(N,se,Vt,Ct),mt=new yd(N,zt,se),Ht=new Pd(N,zt,se),se.programs=wt.programs,x.capabilities=Vt,x.extensions=zt,x.properties=At,x.renderLists=ft,x.shadowMap=pt,x.state=Ct,x.info=se}ct();const H=new Mp(x,N);this.xr=H,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=zt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=zt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(W,Z,!1))},this.getSize=function(y){return y.set(W,Z)},this.setSize=function(y,D,G=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,Z=D,e.width=Math.floor(y*V),e.height=Math.floor(D*V),G===!0&&(e.style.width=y+"px",e.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(W*V,Z*V).floor()},this.setDrawingBufferSize=function(y,D,G){W=y,Z=D,V=G,e.width=Math.floor(y*G),e.height=Math.floor(D*G),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(xt)},this.setViewport=function(y,D,G,z){y.isVector4?xt.set(y.x,y.y,y.z,y.w):xt.set(y,D,G,z),Ct.viewport(R.copy(xt).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(It)},this.setScissor=function(y,D,G,z){y.isVector4?It.set(y.x,y.y,y.z,y.w):It.set(y,D,G,z),Ct.scissor(k.copy(It).multiplyScalar(V).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(y){Ct.setScissorTest(Yt=y)},this.setOpaqueSort=function(y){st=y},this.setTransparentSort=function(y){at=y},this.getClearColor=function(y){return y.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(y=!0,D=!0,G=!0){let z=0;if(y){let U=!1;if(P!==null){const et=P.texture.format;U=et===jr||et===$r||et===Yr}if(U){const et=P.texture.type,ut=et===fn||et===Gn||et===Li||et===di||et===Xr||et===qr,vt=Rt.getClearColor(),Mt=Rt.getClearAlpha(),Lt=vt.r,Nt=vt.g,yt=vt.b;ut?(g[0]=Lt,g[1]=Nt,g[2]=yt,g[3]=Mt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Lt,_[1]=Nt,_[2]=yt,_[3]=Mt,N.clearBufferiv(N.COLOR,0,_))}else z|=N.COLOR_BUFFER_BIT}D&&(z|=N.DEPTH_BUFFER_BIT),G&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),ft.dispose(),Xt.dispose(),At.dispose(),v.dispose(),O.dispose(),Y.dispose(),ne.dispose(),L.dispose(),wt.dispose(),H.dispose(),H.removeEventListener("sessionstart",ro),H.removeEventListener("sessionend",oo),An.stop()};function K(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const y=se.autoReset,D=pt.enabled,G=pt.autoUpdate,z=pt.needsUpdate,U=pt.type;ct(),se.autoReset=y,pt.enabled=D,pt.autoUpdate=G,pt.needsUpdate=z,pt.type=U}function ht(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ut(y){const D=y.target;D.removeEventListener("dispose",Ut),le(D)}function le(y){ve(y),At.remove(y)}function ve(y){const D=At.get(y).programs;D!==void 0&&(D.forEach(function(G){wt.releaseProgram(G)}),y.isShaderMaterial&&wt.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,G,z,U,et){D===null&&(D=ce);const ut=U.isMesh&&U.matrixWorld.determinant()<0,vt=ac(y,D,G,z,U);Ct.setMaterial(z,ut);let Mt=G.index,Lt=1;if(z.wireframe===!0){if(Mt=Q.getWireframeAttribute(G),Mt===void 0)return;Lt=2}const Nt=G.drawRange,yt=G.attributes.position;let $t=Nt.start*Lt,ie=(Nt.start+Nt.count)*Lt;et!==null&&($t=Math.max($t,et.start*Lt),ie=Math.min(ie,(et.start+et.count)*Lt)),Mt!==null?($t=Math.max($t,0),ie=Math.min(ie,Mt.count)):yt!=null&&($t=Math.max($t,0),ie=Math.min(ie,yt.count));const re=ie-$t;if(re<0||re===1/0)return;ne.setup(U,z,vt,G,Mt);let Ce,Kt=mt;if(Mt!==null&&(Ce=j.get(Mt),Kt=Ht,Kt.setIndex(Ce)),U.isMesh)z.wireframe===!0?(Ct.setLineWidth(z.wireframeLinewidth*ue()),Kt.setMode(N.LINES)):Kt.setMode(N.TRIANGLES);else if(U.isLine){let Et=z.linewidth;Et===void 0&&(Et=1),Ct.setLineWidth(Et*ue()),U.isLineSegments?Kt.setMode(N.LINES):U.isLineLoop?Kt.setMode(N.LINE_LOOP):Kt.setMode(N.LINE_STRIP)}else U.isPoints?Kt.setMode(N.POINTS):U.isSprite&&Kt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Et=U._multiDrawStarts,tn=U._multiDrawCounts,Zt=U._multiDrawCount,Ge=Mt?j.get(Mt).bytesPerElement:1,Vn=At.get(z).currentProgram.getUniforms();for(let Ie=0;Ie<Zt;Ie++)Vn.setValue(N,"_gl_DrawID",Ie),Kt.render(Et[Ie]/Ge,tn[Ie])}else if(U.isInstancedMesh)Kt.renderInstances($t,re,U.count);else if(G.isInstancedBufferGeometry){const Et=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,tn=Math.min(G.instanceCount,Et);Kt.renderInstances($t,re,tn)}else Kt.render($t,re)};function Jt(y,D,G){y.transparent===!0&&y.side===be&&y.forceSinglePass===!1?(y.side=Ae,y.needsUpdate=!0,ki(y,D,G),y.side=bn,y.needsUpdate=!0,ki(y,D,G),y.side=be):ki(y,D,G)}this.compile=function(y,D,G=null){G===null&&(G=y),f=Xt.get(G),f.init(D),E.push(f),G.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),y!==G&&y.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const z=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const et=U.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){const vt=et[ut];Jt(vt,G,U),z.add(vt)}else Jt(et,G,U),z.add(et)}),E.pop(),f=null,z},this.compileAsync=function(y,D,G=null){const z=this.compile(y,D,G);return new Promise(U=>{function et(){if(z.forEach(function(ut){At.get(ut).currentProgram.isReady()&&z.delete(ut)}),z.size===0){U(y);return}setTimeout(et,10)}zt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ke=null;function Qe(y){ke&&ke(y)}function ro(){An.stop()}function oo(){An.start()}const An=new Za;An.setAnimationLoop(Qe),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(y){ke=y,H.setAnimationLoop(y),y===null?An.stop():An.start()},H.addEventListener("sessionstart",ro),H.addEventListener("sessionend",oo),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,D,P),f=Xt.get(y,E.length),f.init(D),E.push(f),Tt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(Tt),_t=this.localClippingEnabled,J=tt.init(this.clippingPlanes,_t),p=ft.get(y,w.length),p.init(),w.push(p),H.enabled===!0&&H.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&Es(et,D,-1/0,x.sortObjects)}Es(y,D,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(st,at),Wt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Wt&&Rt.addToRenderList(p,y),this.info.render.frame++,J===!0&&tt.beginShadows();const G=f.state.shadowsArray;pt.render(G,y,D),J===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,U=p.transmissive;if(f.setupLights(),D.isArrayCamera){const et=D.cameras;if(U.length>0)for(let ut=0,vt=et.length;ut<vt;ut++){const Mt=et[ut];co(z,U,y,Mt)}Wt&&Rt.render(y);for(let ut=0,vt=et.length;ut<vt;ut++){const Mt=et[ut];ao(p,y,Mt,Mt.viewport)}}else U.length>0&&co(z,U,y,D),Wt&&Rt.render(y),ao(p,y,D);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(x,y,D),ne.resetDefaultState(),S=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],J===!0&&tt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Es(y,D,G,z){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||X.intersectsSprite(y)){z&&kt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Tt);const ut=Y.update(y),vt=y.material;vt.visible&&p.push(y,ut,vt,G,kt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||X.intersectsObject(y))){const ut=Y.update(y),vt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),kt.copy(y.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),kt.copy(ut.boundingSphere.center)),kt.applyMatrix4(y.matrixWorld).applyMatrix4(Tt)),Array.isArray(vt)){const Mt=ut.groups;for(let Lt=0,Nt=Mt.length;Lt<Nt;Lt++){const yt=Mt[Lt],$t=vt[yt.materialIndex];$t&&$t.visible&&p.push(y,ut,$t,G,kt.z,yt)}}else vt.visible&&p.push(y,ut,vt,G,kt.z,null)}}const et=y.children;for(let ut=0,vt=et.length;ut<vt;ut++)Es(et[ut],D,G,z)}function ao(y,D,G,z){const U=y.opaque,et=y.transmissive,ut=y.transparent;f.setupLightsView(G),J===!0&&tt.setGlobalState(x.clippingPlanes,G),z&&Ct.viewport(R.copy(z)),U.length>0&&Bi(U,D,G),et.length>0&&Bi(et,D,G),ut.length>0&&Bi(ut,D,G),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function co(y,D,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new zn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Ui:fn,minFilter:kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const et=f.state.transmissionRenderTarget[z.id],ut=z.viewport||R;et.setSize(ut.z,ut.w);const vt=x.getRenderTarget();x.setRenderTarget(et),x.getClearColor(q),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Wt&&Rt.render(G);const Mt=x.toneMapping;x.toneMapping=Tn;const Lt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),J===!0&&tt.setGlobalState(x.clippingPlanes,z),Bi(y,G,z),T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let yt=0,$t=D.length;yt<$t;yt++){const ie=D[yt],re=ie.object,Ce=ie.geometry,Kt=ie.material,Et=ie.group;if(Kt.side===be&&re.layers.test(z.layers)){const tn=Kt.side;Kt.side=Ae,Kt.needsUpdate=!0,lo(re,G,z,Ce,Kt,Et),Kt.side=tn,Kt.needsUpdate=!0,Nt=!0}}Nt===!0&&(T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et))}x.setRenderTarget(vt),x.setClearColor(q,$),Lt!==void 0&&(z.viewport=Lt),x.toneMapping=Mt}function Bi(y,D,G){const z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,et=y.length;U<et;U++){const ut=y[U],vt=ut.object,Mt=ut.geometry,Lt=z===null?ut.material:z,Nt=ut.group;vt.layers.test(G.layers)&&lo(vt,D,G,Mt,Lt,Nt)}}function lo(y,D,G,z,U,et){y.onBeforeRender(x,D,G,z,U,et),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(x,D,G,z,y,et),U.transparent===!0&&U.side===be&&U.forceSinglePass===!1?(U.side=Ae,U.needsUpdate=!0,x.renderBufferDirect(G,D,z,U,y,et),U.side=bn,U.needsUpdate=!0,x.renderBufferDirect(G,D,z,U,y,et),U.side=be):x.renderBufferDirect(G,D,z,U,y,et),y.onAfterRender(x,D,G,z,U,et)}function ki(y,D,G){D.isScene!==!0&&(D=ce);const z=At.get(y),U=f.state.lights,et=f.state.shadowsArray,ut=U.state.version,vt=wt.getParameters(y,U.state,et,D,G),Mt=wt.getProgramCacheKey(vt);let Lt=z.programs;z.environment=y.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(y.isMeshStandardMaterial?O:v).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Lt===void 0&&(y.addEventListener("dispose",Ut),Lt=new Map,z.programs=Lt);let Nt=Lt.get(Mt);if(Nt!==void 0){if(z.currentProgram===Nt&&z.lightsStateVersion===ut)return uo(y,vt),Nt}else vt.uniforms=wt.getUniforms(y),y.onBeforeCompile(vt,x),Nt=wt.acquireProgram(vt,Mt),Lt.set(Mt,Nt),z.uniforms=vt.uniforms;const yt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(yt.clippingPlanes=tt.uniform),uo(y,vt),z.needsLights=lc(y),z.lightsStateVersion=ut,z.needsLights&&(yt.ambientLightColor.value=U.state.ambient,yt.lightProbe.value=U.state.probe,yt.directionalLights.value=U.state.directional,yt.directionalLightShadows.value=U.state.directionalShadow,yt.spotLights.value=U.state.spot,yt.spotLightShadows.value=U.state.spotShadow,yt.rectAreaLights.value=U.state.rectArea,yt.ltc_1.value=U.state.rectAreaLTC1,yt.ltc_2.value=U.state.rectAreaLTC2,yt.pointLights.value=U.state.point,yt.pointLightShadows.value=U.state.pointShadow,yt.hemisphereLights.value=U.state.hemi,yt.directionalShadowMap.value=U.state.directionalShadowMap,yt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,yt.spotShadowMap.value=U.state.spotShadowMap,yt.spotLightMatrix.value=U.state.spotLightMatrix,yt.spotLightMap.value=U.state.spotLightMap,yt.pointShadowMap.value=U.state.pointShadowMap,yt.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Nt,z.uniformsList=null,Nt}function ho(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=ms.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function uo(y,D){const G=At.get(y);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function ac(y,D,G,z,U){D.isScene!==!0&&(D=ce),T.resetTextureUnits();const et=D.fog,ut=z.isMeshStandardMaterial?D.environment:null,vt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:gi,Mt=(z.isMeshStandardMaterial?O:v).get(z.envMap||ut),Lt=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Nt=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),yt=!!G.morphAttributes.position,$t=!!G.morphAttributes.normal,ie=!!G.morphAttributes.color;let re=Tn;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(re=x.toneMapping);const Ce=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Kt=Ce!==void 0?Ce.length:0,Et=At.get(z),tn=f.state.lights;if(J===!0&&(_t===!0||y!==M)){const Ne=y===M&&z.id===S;tt.setState(z,y,Ne)}let Zt=!1;z.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==tn.state.version||Et.outputColorSpace!==vt||U.isBatchedMesh&&Et.batching===!1||!U.isBatchedMesh&&Et.batching===!0||U.isBatchedMesh&&Et.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Et.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Et.instancing===!1||!U.isInstancedMesh&&Et.instancing===!0||U.isSkinnedMesh&&Et.skinning===!1||!U.isSkinnedMesh&&Et.skinning===!0||U.isInstancedMesh&&Et.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Et.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Et.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Et.instancingMorph===!1&&U.morphTexture!==null||Et.envMap!==Mt||z.fog===!0&&Et.fog!==et||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==tt.numPlanes||Et.numIntersection!==tt.numIntersection)||Et.vertexAlphas!==Lt||Et.vertexTangents!==Nt||Et.morphTargets!==yt||Et.morphNormals!==$t||Et.morphColors!==ie||Et.toneMapping!==re||Et.morphTargetsCount!==Kt)&&(Zt=!0):(Zt=!0,Et.__version=z.version);let Ge=Et.currentProgram;Zt===!0&&(Ge=ki(z,D,U));let Vn=!1,Ie=!1,yi=!1;const oe=Ge.getUniforms(),Ye=Et.uniforms;if(Ct.useProgram(Ge.program)&&(Vn=!0,Ie=!0,yi=!0),z.id!==S&&(S=z.id,Ie=!0),Vn||M!==y){Ct.buffers.depth.getReversed()?(ot.copy(y.projectionMatrix),fl(ot),pl(ot),oe.setValue(N,"projectionMatrix",ot)):oe.setValue(N,"projectionMatrix",y.projectionMatrix),oe.setValue(N,"viewMatrix",y.matrixWorldInverse);const pn=oe.map.cameraPosition;pn!==void 0&&pn.setValue(N,Dt.setFromMatrixPosition(y.matrixWorld)),Vt.logarithmicDepthBuffer&&oe.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&oe.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Ie=!0,yi=!0)}if(U.isSkinnedMesh){oe.setOptional(N,U,"bindMatrix"),oe.setOptional(N,U,"bindMatrixInverse");const Ne=U.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),oe.setValue(N,"boneTexture",Ne.boneTexture,T))}U.isBatchedMesh&&(oe.setOptional(N,U,"batchingTexture"),oe.setValue(N,"batchingTexture",U._matricesTexture,T),oe.setOptional(N,U,"batchingIdTexture"),oe.setValue(N,"batchingIdTexture",U._indirectTexture,T),oe.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&oe.setValue(N,"batchingColorTexture",U._colorsTexture,T));const Si=G.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&Pt.update(U,G,Ge),(Ie||Et.receiveShadow!==U.receiveShadow)&&(Et.receiveShadow=U.receiveShadow,oe.setValue(N,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ye.envMap.value=Mt,Ye.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(Ye.envMapIntensity.value=D.environmentIntensity),Ie&&(oe.setValue(N,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&cc(Ye,yi),et&&z.fog===!0&&lt.refreshFogUniforms(Ye,et),lt.refreshMaterialUniforms(Ye,z,V,Z,f.state.transmissionRenderTarget[y.id]),ms.upload(N,ho(Et),Ye,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ms.upload(N,ho(Et),Ye,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&oe.setValue(N,"center",U.center),oe.setValue(N,"modelViewMatrix",U.modelViewMatrix),oe.setValue(N,"normalMatrix",U.normalMatrix),oe.setValue(N,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ne=z.uniformsGroups;for(let pn=0,mn=Ne.length;pn<mn;pn++){const fo=Ne[pn];L.update(fo,Ge),L.bind(fo,Ge)}}return Ge}function cc(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function lc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,D,G){At.get(y.texture).__webglTexture=D,At.get(y.depthTexture).__webglTexture=G;const z=At.get(y);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=G===void 0,z.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,D){const G=At.get(y);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,G=0){P=y,C=D,A=G;let z=!0,U=null,et=!1,ut=!1;if(y){const Mt=At.get(y);if(Mt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(N.FRAMEBUFFER,null),z=!1;else if(Mt.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(Mt.__hasExternalTextures)T.rebindTextures(y,At.get(y.texture).__webglTexture,At.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const yt=y.depthTexture;if(Mt.__boundDepthTexture!==yt){if(yt!==null&&At.has(yt)&&(y.width!==yt.image.width||y.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}const Lt=y.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ut=!0);const Nt=At.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Nt[D])?U=Nt[D][G]:U=Nt[D],et=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?U=At.get(y).__webglMultisampledFramebuffer:Array.isArray(Nt)?U=Nt[G]:U=Nt,R.copy(y.viewport),k.copy(y.scissor),B=y.scissorTest}else R.copy(xt).multiplyScalar(V).floor(),k.copy(It).multiplyScalar(V).floor(),B=Yt;if(Ct.bindFramebuffer(N.FRAMEBUFFER,U)&&z&&Ct.drawBuffers(y,U),Ct.viewport(R),Ct.scissor(k),Ct.setScissorTest(B),et){const Mt=At.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Mt.__webglTexture,G)}else if(ut){const Mt=At.get(y.texture),Lt=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.__webglTexture,G||0,Lt)}S=-1},this.readRenderTargetPixels=function(y,D,G,z,U,et,ut){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=At.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){Ct.bindFramebuffer(N.FRAMEBUFFER,vt);try{const Mt=y.texture,Lt=Mt.format,Nt=Mt.type;if(!Vt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-z&&G>=0&&G<=y.height-U&&N.readPixels(D,G,z,U,Ot.convert(Lt),Ot.convert(Nt),et)}finally{const Mt=P!==null?At.get(P).__webglFramebuffer:null;Ct.bindFramebuffer(N.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(y,D,G,z,U,et,ut){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=At.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){const Mt=y.texture,Lt=Mt.format,Nt=Mt.type;if(!Vt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=y.width-z&&G>=0&&G<=y.height-U){Ct.bindFramebuffer(N.FRAMEBUFFER,vt);const yt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,yt),N.bufferData(N.PIXEL_PACK_BUFFER,et.byteLength,N.STREAM_READ),N.readPixels(D,G,z,U,Ot.convert(Lt),Ot.convert(Nt),0);const $t=P!==null?At.get(P).__webglFramebuffer:null;Ct.bindFramebuffer(N.FRAMEBUFFER,$t);const ie=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await dl(N,ie,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,yt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,et),N.deleteBuffer(yt),N.deleteSync(ie),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,D=null,G=0){y.isTexture!==!0&&(Ci("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,y=arguments[1]);const z=Math.pow(2,-G),U=Math.floor(y.image.width*z),et=Math.floor(y.image.height*z),ut=D!==null?D.x:0,vt=D!==null?D.y:0;T.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,ut,vt,U,et),Ct.unbindTexture()},this.copyTextureToTexture=function(y,D,G=null,z=null,U=0){y.isTexture!==!0&&(Ci("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,y=arguments[1],D=arguments[2],U=arguments[3]||0,G=null);let et,ut,vt,Mt,Lt,Nt,yt,$t,ie;const re=y.isCompressedTexture?y.mipmaps[U]:y.image;G!==null?(et=G.max.x-G.min.x,ut=G.max.y-G.min.y,vt=G.isBox3?G.max.z-G.min.z:1,Mt=G.min.x,Lt=G.min.y,Nt=G.isBox3?G.min.z:0):(et=re.width,ut=re.height,vt=re.depth||1,Mt=0,Lt=0,Nt=0),z!==null?(yt=z.x,$t=z.y,ie=z.z):(yt=0,$t=0,ie=0);const Ce=Ot.convert(D.format),Kt=Ot.convert(D.type);let Et;D.isData3DTexture?(T.setTexture3D(D,0),Et=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),Et=N.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),Et=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const tn=N.getParameter(N.UNPACK_ROW_LENGTH),Zt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ge=N.getParameter(N.UNPACK_SKIP_PIXELS),Vn=N.getParameter(N.UNPACK_SKIP_ROWS),Ie=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,re.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,re.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Mt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Lt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Nt);const yi=y.isDataArrayTexture||y.isData3DTexture,oe=D.isDataArrayTexture||D.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Ye=At.get(y),Si=At.get(D),Ne=At.get(Ye.__renderTarget),pn=At.get(Si.__renderTarget);Ct.bindFramebuffer(N.READ_FRAMEBUFFER,Ne.__webglFramebuffer),Ct.bindFramebuffer(N.DRAW_FRAMEBUFFER,pn.__webglFramebuffer);for(let mn=0;mn<vt;mn++)yi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.get(y).__webglTexture,U,Nt+mn),y.isDepthTexture?(oe&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.get(D).__webglTexture,U,ie+mn),N.blitFramebuffer(Mt,Lt,et,ut,yt,$t,et,ut,N.DEPTH_BUFFER_BIT,N.NEAREST)):oe?N.copyTexSubImage3D(Et,U,yt,$t,ie+mn,Mt,Lt,et,ut):N.copyTexSubImage2D(Et,U,yt,$t,ie+mn,Mt,Lt,et,ut);Ct.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else oe?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Et,U,yt,$t,ie,et,ut,vt,Ce,Kt,re.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Et,U,yt,$t,ie,et,ut,vt,Ce,re.data):N.texSubImage3D(Et,U,yt,$t,ie,et,ut,vt,Ce,Kt,re):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,yt,$t,et,ut,Ce,Kt,re.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,yt,$t,re.width,re.height,Ce,re.data):N.texSubImage2D(N.TEXTURE_2D,U,yt,$t,et,ut,Ce,Kt,re);N.pixelStorei(N.UNPACK_ROW_LENGTH,tn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Zt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ge),N.pixelStorei(N.UNPACK_SKIP_ROWS,Vn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ie),U===0&&D.generateMipmaps&&N.generateMipmap(Et),Ct.unbindTexture()},this.copyTextureToTexture3D=function(y,D,G=null,z=null,U=0){return y.isTexture!==!0&&(Ci("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,z=arguments[1]||null,y=arguments[2],D=arguments[3],U=arguments[4]||0),Ci('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,D,G,z,U)},this.initRenderTarget=function(y){At.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),Ct.unbindTexture()},this.resetState=function(){C=0,A=0,P=null,Ct.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class xs{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(t),this.density=e}clone(){return new xs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pa extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ze,this.environmentIntensity=1,this.environmentRotation=new Ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sc extends vi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ma=new ae,zr=new Zr,as=new Ss,cs=new b;class Ep extends de{constructor(t=new Pe,e=new sc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(i),as.radius+=s,t.ray.intersectsSphere(as)===!1)return;ma.copy(i).invert(),zr.copy(t.ray).applyMatrix4(ma);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,_=m;g<_;g++){const p=l.getX(g);cs.fromBufferAttribute(u,p),ga(cs,p,c,i,t,e,this)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)cs.fromBufferAttribute(u,g),ga(cs,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ga(r,t,e,n,i,s,o){const a=zr.distanceSqToPoint(r);if(a<e){const c=new b;zr.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class eo extends Pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new b,h=new Gt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=n+u/e*i;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(a,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class jt extends Pe{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],m=[];let g=0;const _=[],p=n/2;let f=0;w(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(m,2));function w(){const x=new b,I=new b;let C=0;const A=(e-t)/n;for(let P=0;P<=s;P++){const S=[],M=P/s,R=M*(e-t)+t;for(let k=0;k<=i;k++){const B=k/i,q=B*c+a,$=Math.sin(q),W=Math.cos(q);I.x=R*$,I.y=-M*n+p,I.z=R*W,u.push(I.x,I.y,I.z),x.set($,A,W).normalize(),d.push(x.x,x.y,x.z),m.push(B,1-M),S.push(g++)}_.push(S)}for(let P=0;P<i;P++)for(let S=0;S<s;S++){const M=_[S][P],R=_[S+1][P],k=_[S+1][P+1],B=_[S][P+1];(t>0||S!==0)&&(h.push(M,R,B),C+=3),(e>0||S!==s-1)&&(h.push(R,k,B),C+=3)}l.addGroup(f,C,0),f+=C}function E(x){const I=g,C=new Gt,A=new b;let P=0;const S=x===!0?t:e,M=x===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,p*M,0),d.push(0,M,0),m.push(.5,.5),g++;const R=g;for(let k=0;k<=i;k++){const q=k/i*c+a,$=Math.cos(q),W=Math.sin(q);A.x=S*W,A.y=p*M,A.z=S*$,u.push(A.x,A.y,A.z),d.push(0,M,0),C.x=$*.5+.5,C.y=W*.5*M+.5,m.push(C.x,C.y),g++}for(let k=0;k<i;k++){const B=I+k,q=R+k;x===!0?h.push(q,q+1,B):h.push(q+1,q,B),P+=3}l.addGroup(f,P,x===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class te extends jt{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new te(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class no extends Pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new he(s,3)),this.setAttribute("normal",new he(s.slice(),3)),this.setAttribute("uv",new he(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const E=new b,x=new b,I=new b;for(let C=0;C<e.length;C+=3)m(e[C+0],E),m(e[C+1],x),m(e[C+2],I),c(E,x,I,w)}function c(w,E,x,I){const C=I+1,A=[];for(let P=0;P<=C;P++){A[P]=[];const S=w.clone().lerp(x,P/C),M=E.clone().lerp(x,P/C),R=C-P;for(let k=0;k<=R;k++)k===0&&P===C?A[P][k]=S:A[P][k]=S.clone().lerp(M,k/R)}for(let P=0;P<C;P++)for(let S=0;S<2*(C-P)-1;S++){const M=Math.floor(S/2);S%2===0?(d(A[P][M+1]),d(A[P+1][M]),d(A[P][M])):(d(A[P][M+1]),d(A[P+1][M+1]),d(A[P+1][M]))}}function l(w){const E=new b;for(let x=0;x<s.length;x+=3)E.x=s[x+0],E.y=s[x+1],E.z=s[x+2],E.normalize().multiplyScalar(w),s[x+0]=E.x,s[x+1]=E.y,s[x+2]=E.z}function h(){const w=new b;for(let E=0;E<s.length;E+=3){w.x=s[E+0],w.y=s[E+1],w.z=s[E+2];const x=p(w)/2/Math.PI+.5,I=f(w)/Math.PI+.5;o.push(x,1-I)}g(),u()}function u(){for(let w=0;w<o.length;w+=6){const E=o[w+0],x=o[w+2],I=o[w+4],C=Math.max(E,x,I),A=Math.min(E,x,I);C>.9&&A<.1&&(E<.2&&(o[w+0]+=1),x<.2&&(o[w+2]+=1),I<.2&&(o[w+4]+=1))}}function d(w){s.push(w.x,w.y,w.z)}function m(w,E){const x=w*3;E.x=t[x+0],E.y=t[x+1],E.z=t[x+2]}function g(){const w=new b,E=new b,x=new b,I=new b,C=new Gt,A=new Gt,P=new Gt;for(let S=0,M=0;S<s.length;S+=9,M+=6){w.set(s[S+0],s[S+1],s[S+2]),E.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),C.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),I.copy(w).add(E).add(x).divideScalar(3);const R=p(I);_(C,M+0,w,R),_(A,M+2,E,R),_(P,M+4,x,R)}}function _(w,E,x,I){I<0&&w.x===1&&(o[E]=w.x-1),x.x===0&&x.z===0&&(o[E]=I/2/Math.PI+.5)}function p(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.vertices,t.indices,t.radius,t.details)}}class xe extends no{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xe(t.radius,t.detail)}}class Di extends Pe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new b,d=new b,m=[],g=[],_=[],p=[];for(let f=0;f<=n;f++){const w=[],E=f/n;let x=0;f===0&&o===0?x=.5/e:f===n&&c===Math.PI&&(x=-.5/e);for(let I=0;I<=e;I++){const C=I/e;u.x=-t*Math.cos(i+C*s)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(i+C*s)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(C+x,1-E),w.push(l++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){const E=h[f][w+1],x=h[f][w],I=h[f+1][w],C=h[f+1][w+1];(f!==0||o>0)&&m.push(E,x,C),(f!==n-1||c<Math.PI)&&m.push(x,I,C)}this.setIndex(m),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class io extends Pe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new b,u=new b,d=new b;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*s,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,f=(i+1)*(m-1)+g,w=(i+1)*m+g;o.push(_,p,w),o.push(p,f,w)}this.setIndex(o),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class nt extends vi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Oi extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Tp extends Oi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Qs=new ae,_a=new b,xa=new b;class so{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_a.setFromMatrixPosition(t.matrixWorld),e.position.copy(_a),xa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xa),e.updateMatrixWorld(),Qs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class bp extends so{constructor(){super(new Te(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=pi*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ap extends Oi{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new bp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const va=new ae,Ai=new b,tr=new b;class Cp extends so{constructor(){super(new Te(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Gt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ai.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ai),tr.copy(n.position),tr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(tr),n.updateMatrixWorld(),i.makeTranslation(-Ai.x,-Ai.y,-Ai.z),va.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va)}}class vs extends Oi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Rp extends so{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rc extends Oi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new Rp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class oc extends Oi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ma(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ma();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ma(){return performance.now()}const ya=new ae;class Ip{constructor(t,e,n=0,i=1/0){this.ray=new Zr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ya.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ya),this}intersectObject(t,e=!0,n=[]){return Vr(t,this,n,e),n.sort(Sa),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Vr(t[i],this,n,e);return n.sort(Sa),n}}function Sa(r,t){return r.distance-t.distance}function Vr(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Vr(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hr);class Lp{constructor(){this.ctx=null,this.masterGain=null,this.sfxGain=null,this.ambientGain=null,this.masterVolume=.8,this.sfxVolume=.9,this.ambientVolume=.5,this.oceanNode=null,this.fireNode=null,this.isMuted=!1,this.initialized=!1}init(){if(!this.initialized)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.masterVolume,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.setValueAtTime(this.sfxVolume,this.ctx.currentTime),this.sfxGain.connect(this.masterGain),this.ambientGain=this.ctx.createGain(),this.ambientGain.gain.setValueAtTime(this.ambientVolume,this.ctx.currentTime),this.ambientGain.connect(this.masterGain),this.initialized=!0,this.startOceanAmbience()}catch(t){console.warn("Web Audio API not supported or blocked",t)}}ensureContext(){this.initialized||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.masterVolume,this.ctx.currentTime)}setSfxVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sfxGain&&this.ctx&&this.sfxGain.gain.setValueAtTime(this.sfxVolume,this.ctx.currentTime)}setAmbientVolume(t){this.ambientVolume=Math.max(0,Math.min(1,t)),this.ambientGain&&this.ctx&&this.ambientGain.gain.setValueAtTime(this.ambientVolume,this.ctx.currentTime)}createNoiseBuffer(t=3){if(!this.ctx)return null;const e=this.ctx.sampleRate*t,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);let s=0;for(let o=0;o<e;o++){const a=Math.random()*2-1;i[o]=(s+.02*a)/1.02,s=i[o],i[o]*=3.5}return n}startOceanAmbience(){if(!this.ctx||this.oceanNode)return;const t=this.createNoiseBuffer(5);if(!t)return;const e=this.ctx.createBufferSource();e.buffer=t,e.loop=!0;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(250,this.ctx.currentTime);const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(.12,this.ctx.currentTime),this.ctx.createGain().gain.setValueAtTime(200,this.ctx.currentTime),i.connect(n.frequency),i.start();const o=this.ctx.createGain();o.gain.setValueAtTime(.35,this.ctx.currentTime),e.connect(n),n.connect(o),o.connect(this.ambientGain),e.start(),this.oceanNode={noiseSource:e,lfo:i,filter:n,volGain:o}}playFootstep(t="sand"){if(this.ensureContext(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.ctx.createBiquadFilter();let o=70,a=.12;t==="water"?(o=160,s.type="bandpass",s.frequency.setValueAtTime(400,e),s.Q.setValueAtTime(2,e),a=.2):t==="wood"?(o=110,s.type="lowpass",s.frequency.setValueAtTime(500,e)):(o=80+Math.random()*20,s.type="lowpass",s.frequency.setValueAtTime(320,e)),n.type="triangle",n.frequency.setValueAtTime(o,e),n.frequency.exponentialRampToValueAtTime(30,e+a),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.001,e+a),n.connect(s),s.connect(i),i.connect(this.sfxGain),n.start(e),n.stop(e+a)}playChop(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(140+Math.random()*40,t),e.frequency.exponentialRampToValueAtTime(35,t+.15),n.gain.setValueAtTime(.6,t),n.gain.exponentialRampToValueAtTime(.01,t+.15);const i=this.createNoiseBuffer(.2);if(i){const s=this.ctx.createBufferSource();s.buffer=i;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(900,t),o.Q.setValueAtTime(3,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.5,t),a.gain.exponentialRampToValueAtTime(.01,t+.12),s.connect(o),o.connect(a),a.connect(this.sfxGain),s.start(t),s.stop(t+.15)}e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.15)}playMine(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(550+Math.random()*120,t),e.frequency.exponentialRampToValueAtTime(120,t+.18),n.gain.setValueAtTime(.35,t),n.gain.exponentialRampToValueAtTime(.01,t+.18),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.18)}playSplash(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.createNoiseBuffer(.4);if(!e)return;const n=this.ctx.createBufferSource();n.buffer=e;const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(600,t),i.frequency.exponentialRampToValueAtTime(200,t+.35),i.Q.setValueAtTime(1.5,t);const s=this.ctx.createGain();s.gain.setValueAtTime(.4,t),s.gain.exponentialRampToValueAtTime(.01,t+.35),n.connect(i),i.connect(s),s.connect(this.sfxGain),n.start(t),n.stop(t+.35)}playSwing(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(260,t),e.frequency.exponentialRampToValueAtTime(80,t+.12),n.gain.setValueAtTime(.2,t),n.gain.exponentialRampToValueAtTime(.01,t+.12),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.12)}playAnimalGrunt(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(120,t),e.frequency.setValueAtTime(160,t+.08),e.frequency.exponentialRampToValueAtTime(60,t+.25),n.gain.setValueAtTime(.4,t),n.gain.exponentialRampToValueAtTime(.01,t+.25),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.25)}playLeopardRoar(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();e.type="sawtooth",e.frequency.setValueAtTime(95,t),e.frequency.linearRampToValueAtTime(140,t+.2),e.frequency.exponentialRampToValueAtTime(45,t+.7),i.type="lowpass",i.frequency.setValueAtTime(260,t),n.gain.setValueAtTime(.65,t),n.gain.exponentialRampToValueAtTime(.01,t+.7),e.connect(i),i.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.7)}playCrabSnap(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(480,t),e.frequency.exponentialRampToValueAtTime(90,t+.08),n.gain.setValueAtTime(.4,t),n.gain.exponentialRampToValueAtTime(.01,t+.08),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.08)}playDolphinWhistle(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1200,t),e.frequency.linearRampToValueAtTime(2200,t+.15),e.frequency.linearRampToValueAtTime(1600,t+.35),n.gain.setValueAtTime(.25,t),n.gain.exponentialRampToValueAtTime(.01,t+.38),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.38)}playAnimalHit(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(320,t),e.frequency.exponentialRampToValueAtTime(140,t+.2),n.gain.setValueAtTime(.5,t),n.gain.exponentialRampToValueAtTime(.01,t+.2),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.2)}playSharkWarning(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(80,t),e.frequency.exponentialRampToValueAtTime(45,t+.8);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(180,t),n.gain.setValueAtTime(.7,t),n.gain.exponentialRampToValueAtTime(.01,t+.8),e.connect(i),i.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.8)}playPlayerHurt(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(160,t),e.frequency.exponentialRampToValueAtTime(70,t+.25),n.gain.setValueAtTime(.6,t),n.gain.exponentialRampToValueAtTime(.01,t+.25),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.25)}playPickup(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(440,t),e.frequency.exponentialRampToValueAtTime(880,t+.1),n.gain.setValueAtTime(.3,t),n.gain.exponentialRampToValueAtTime(.01,t+.12),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.12)}playCraft(){if(this.ensureContext(),!this.ctx)return;[440,554,659].forEach((e,n)=>{const i=this.ctx.currentTime+n*.08,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(e,i),o.gain.setValueAtTime(.25,i),o.gain.exponentialRampToValueAtTime(.01,i+.2),s.connect(o),o.connect(this.sfxGain),s.start(i),s.stop(i+.25)})}playEat(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime;for(let e=0;e<3;e++){const n=t+e*.08,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(220+Math.random()*80,n),i.frequency.exponentialRampToValueAtTime(100,n+.06),s.gain.setValueAtTime(.2,n),s.gain.exponentialRampToValueAtTime(.01,n+.06),i.connect(s),s.connect(this.sfxGain),i.start(n),i.stop(n+.06)}}playDrink(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(300,t),e.frequency.exponentialRampToValueAtTime(150,t+.15),n.gain.setValueAtTime(.35,t),n.gain.exponentialRampToValueAtTime(.01,t+.18),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.18)}playFishBite(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(700,t),e.frequency.exponentialRampToValueAtTime(350,t+.2),n.gain.setValueAtTime(.3,t),n.gain.exponentialRampToValueAtTime(.01,t+.25),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.25)}playBeaconIgnite(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.createNoiseBuffer(1.5);if(e){const n=this.ctx.createBufferSource();n.buffer=e;const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(200,t),i.frequency.linearRampToValueAtTime(1200,t+.5),i.frequency.exponentialRampToValueAtTime(200,t+1.5);const s=this.ctx.createGain();s.gain.setValueAtTime(.7,t),s.gain.exponentialRampToValueAtTime(.01,t+1.5),n.connect(i),i.connect(s),s.connect(this.sfxGain),n.start(t),n.stop(t+1.5)}}playShipFoghorn(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime;[110,138].forEach(e=>{const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(e,t),i.gain.setValueAtTime(.001,t),i.gain.linearRampToValueAtTime(.4,t+.4),i.gain.setValueAtTime(.4,t+2),i.gain.exponentialRampToValueAtTime(.01,t+3);const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(450,t),n.connect(s),s.connect(i),i.connect(this.sfxGain),n.start(t),n.stop(t+3)})}playVictory(){if(this.ensureContext(),!this.ctx)return;[261.63,329.63,392,523.25].forEach((e,n)=>{const i=this.ctx.currentTime+n*.15,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(e,i),o.gain.setValueAtTime(.35,i),o.gain.exponentialRampToValueAtTime(.01,i+1.2),s.connect(o),o.connect(this.sfxGain),s.start(i),s.stop(i+1.2)}),setTimeout(()=>this.playShipFoghorn(),1200)}playGameOver(){if(this.ensureContext(),!this.ctx)return;[220,207.65,196,174.61].forEach((e,n)=>{const i=this.ctx.currentTime+n*.3,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(e,i),o.gain.setValueAtTime(.4,i),o.gain.exponentialRampToValueAtTime(.01,i+.6),s.connect(o),o.connect(this.sfxGain),s.start(i),s.stop(i+.6)})}}const _e=new Lp,cn={wood:{id:"wood",name:"Cành Gỗ",icon:"🪵",maxStack:50,description:"Gỗ khô nhặt từ đất hoặc chặt từ cây cọ."},stone:{id:"stone",name:"Viên Đá",icon:"🪨",maxStack:50,description:"Đá thô dùng chế tạo công cụ và xây lò sưởi."},palm_leaf:{id:"palm_leaf",name:"Lá Cọ",icon:"🌿",maxStack:50,description:"Lá cọ bền dai dùng bện dây, lợp mái lều."},coconut:{id:"coconut",name:"Quả Dừa",icon:"🥥",maxStack:20,description:"Dừa tươi ngọt mát. Ăn/uống hồi 15 No, 25 Nước, 5 Máu.",consumable:{food:15,water:25,health:5}},raw_meat:{id:"raw_meat",name:"Thịt Sống",icon:"🥩",maxStack:20,description:"Thịt thú săn. Nên nướng chín trước khi ăn!",consumable:{food:20,health:-5}},cooked_meat:{id:"cooked_meat",name:"Thịt Nướng",icon:"🍖",maxStack:20,description:"Thịt nướng thơm ngon trên lửa trại. Hồi 45 No và 20 Máu.",consumable:{food:45,health:20}},raw_fish:{id:"raw_fish",name:"Cá Tươi",icon:"🐟",maxStack:20,description:"Cá tươi mới câu được. Nướng chín để ngon hơn.",consumable:{food:15,health:2}},cooked_fish:{id:"cooked_fish",name:"Cá Nướng",icon:"🍱",maxStack:20,description:"Cá nướng béo ngậy. Hồi 40 No và 15 Máu.",consumable:{food:40,health:15}},scrap_metal:{id:"scrap_metal",name:"Sắt Vụn",icon:"⚙️",maxStack:20,description:"Mảnh kim loại từ rương xác tàu đắm. Cần cho đài cứu hộ."},pickaxe:{id:"pickaxe",name:"Búa Đào",icon:"⛏️",maxStack:1,type:"tool",power:45,description:"Búa đào đá thô & khoáng sản. Khai thác mỏm đá siêu nhanh và tăng mạnh sát thương cận chiến."},axe:{id:"axe",name:"Rìu Đá",icon:"🪓",maxStack:1,type:"tool",power:30,description:"Chặt cây siêu nhanh và tăng sát thương cận chiến."},spear:{id:"spear",name:"Giáo Săn",icon:"🗡️",maxStack:1,type:"weapon",power:45,description:"Đâm cá và săn thú hoang từ cự ly an toàn."},torch:{id:"torch",name:"Đuốc Lửa",icon:"🔥",maxStack:1,type:"tool",description:"Soi sáng ban đêm và sưởi ấm, xua tan giá lạnh."},fishing_rod:{id:"fishing_rod",name:"Cần Câu",icon:"🎣",maxStack:1,type:"tool",description:"Đứng sát mép nước bấm [F] để câu cá."},campfire_item:{id:"campfire_item",name:"Lửa Trại",icon:"⛺",maxStack:5,type:"buildable",buildType:"campfire",description:"Đặt xuống đất: sưởi ấm và nướng thịt/cá chín."},shelter_item:{id:"shelter_item",name:"Lều Trú Ẩn",icon:"🛖",maxStack:5,type:"buildable",buildType:"shelter",description:"Đặt xuống đất: ngủ qua đêm và đặt điểm hồi sinh."},workbench_item:{id:"workbench_item",name:"Bàn Cơ Khí",icon:"🛠️",maxStack:5,type:"buildable",buildType:"workbench",description:"Đặt xuống đất: mở khóa chế tạo Đài Cứu Hộ."},beacon_item:{id:"beacon_item",name:"Đài Cứu Hộ",icon:"🗼",maxStack:1,type:"buildable",buildType:"beacon",description:"Đặt bên bờ biển rồi thắp sáng để gọi tàu cứu hộ tới giải cứu!"}},Dp=[{id:"pickaxe",resultId:"pickaxe",count:1,req:{wood:4,stone:3},category:"tools"},{id:"axe",resultId:"axe",count:1,req:{wood:3,stone:2},category:"tools"},{id:"spear",resultId:"spear",count:1,req:{wood:4,stone:2,palm_leaf:1},category:"tools"},{id:"torch",resultId:"torch",count:1,req:{wood:2,palm_leaf:2},category:"tools"},{id:"fishing_rod",resultId:"fishing_rod",count:1,req:{wood:3,palm_leaf:2},category:"tools"},{id:"campfire_item",resultId:"campfire_item",count:1,req:{wood:5,stone:5},category:"structures"},{id:"shelter_item",resultId:"shelter_item",count:1,req:{wood:8,palm_leaf:6},category:"structures"},{id:"workbench_item",resultId:"workbench_item",count:1,req:{wood:6,stone:4},category:"structures"},{id:"beacon_item",resultId:"beacon_item",count:1,req:{wood:10,stone:8,scrap_metal:4},requiresWorkbench:!0,category:"rescue"}];class Up{constructor(){this.player={gender:"male",health:100,maxHealth:100,stamina:100,maxStamina:100,food:100,maxFood:100,water:100,maxWater:100,oxygen:100,maxOxygen:100,isUnderwater:!1,isWarm:!1,isFreezing:!1,respawnPos:{x:0,y:3,z:25},currentPos:{x:0,y:3,z:25}},this.isNearWorkbench=!1,this.inventory=Array.from({length:24},()=>null),this.activeHotbarIndex=0,this.dayTime=.3,this.dayLength=360,this.dayCount=1,this.quests=[{id:"gather_starter",title:"Thu thập sinh tồn ban đầu",desc:"Nhặt 3 Cành gỗ, 3 Viên đá và 2 Quả dừa",completed:!1,progress:{wood:0,stone:0,coconut:0},goals:{wood:3,stone:3,coconut:2}},{id:"craft_tools",title:"Chế tạo công cụ sinh tồn",desc:"Chế tạo 1 Rìu đá và 1 Đuốc lửa",completed:!1,progress:{axe:0,torch:0},goals:{axe:1,torch:1}},{id:"build_base",title:"Thiết lập cứ địa sinh tồn",desc:"Dựng 1 Lửa trại và 1 Lều trú ẩn",completed:!1,progress:{campfire:0,shelter:0},goals:{campfire:1,shelter:1}},{id:"explore_shipwreck",title:"Thám hiểm xác tàu đắm",desc:"Bơi ra xác tàu ngoài khơi, cẩn thận cá mập, mở Rương báu vật thu Sắt vụn",completed:!1,progress:{scrap:0},goals:{scrap:4}},{id:"ignite_beacon",title:"Thắp sáng Đài hiệu cứu hộ",desc:"Chế tạo Đài hiệu tại Bàn cơ khí, đặt ở bờ biển và thắp sáng bằng Đuốc",completed:!1,progress:{ignited:0},goals:{ignited:1}}],this.stats={daysSurvived:1,animalsHunted:0,fishCaught:0,treesChopped:0,structuresBuilt:0,startTime:Date.now()},this.settings={graphicsPreset:"balanced",mouseSensitivity:1,touchSensitivity:1.2,masterVolume:.8,isMuted:!1},this.listeners=new Set,this.setupStarterItems()}setupStarterItems(){this.inventory[0]={id:"pickaxe",count:1},this.inventory[1]={id:"coconut",count:2}}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notify(t,e){this.listeners.forEach(n=>{try{n(t,e)}catch(i){console.error(i)}})}getActiveItem(){return this.inventory[this.activeHotbarIndex]||null}getActiveItemDef(){const t=this.getActiveItem();return t&&cn[t.id]||null}setActiveHotbarIndex(t){t>=0&&t<6&&(this.activeHotbarIndex=t,this.notify("hotbarChange",{index:t,item:this.getActiveItem()}))}addItem(t,e=1){const n=cn[t];if(!n)return!1;let i=e;for(let s=0;s<this.inventory.length;s++){const o=this.inventory[s];if(o&&o.id===t&&o.count<n.maxStack){const a=n.maxStack-o.count,c=Math.min(a,i);if(o.count+=c,i-=c,i<=0)break}}if(i>0){for(let s=0;s<this.inventory.length;s++)if(!this.inventory[s]){const o=Math.min(n.maxStack,i);if(this.inventory[s]={id:t,count:o},i-=o,i<=0)break}}return this.checkQuestProgress(),this.notify("inventoryUpdate",this.inventory),i<e}removeItem(t,e=1){let n=e;for(let i=this.inventory.length-1;i>=0;i--){const s=this.inventory[i];if(s&&s.id===t){if(s.count>n){s.count-=n,n=0;break}else if(n-=s.count,this.inventory[i]=null,n<=0)break}}return this.notify("inventoryUpdate",this.inventory),n===0}getItemCount(t){let e=0;for(const n of this.inventory)n&&n.id===t&&(e+=n.count);return e}canCraft(t){if(t.requiresWorkbench&&!this.isNearWorkbench)return!1;for(const[e,n]of Object.entries(t.req))if(this.getItemCount(e)<n)return!1;return!0}craft(t){if(!this.canCraft(t))return!1;for(const[e,n]of Object.entries(t.req))this.removeItem(e,n);return this.addItem(t.resultId,t.count||1),t.resultId==="axe"&&this.updateQuestObjective("craft_tools","axe",1),t.resultId==="torch"&&this.updateQuestObjective("craft_tools","torch",1),this.notify("crafted",t),!0}useSlot(t){const e=this.inventory[t];if(!e)return!1;const n=cn[e.id];return n&&n.consumable?(n.consumable.food&&(this.player.food=Math.min(this.player.maxFood,this.player.food+n.consumable.food)),n.consumable.water&&(this.player.water=Math.min(this.player.maxWater,this.player.water+n.consumable.water)),n.consumable.health&&(this.player.health=Math.max(0,Math.min(this.player.maxHealth,this.player.health+n.consumable.health))),e.count-=1,e.count<=0&&(this.inventory[t]=null),this.notify("consumed",{item:n,stats:this.player}),this.notify("inventoryUpdate",this.inventory),!0):!1}updateQuestObjective(t,e,n=1){const i=this.quests.find(s=>s.id===t);!i||i.completed||i.progress[e]!==void 0&&(i.progress[e]=Math.min(i.goals[e],i.progress[e]+n),Object.keys(i.goals).every(o=>i.progress[o]>=i.goals[o])?(i.completed=!0,this.notify("questCompleted",i)):this.notify("questUpdated",i))}checkQuestProgress(){const t=this.quests[0];t.completed||(t.progress.wood=Math.min(t.goals.wood,this.getItemCount("wood")),t.progress.stone=Math.min(t.goals.stone,this.getItemCount("stone")),t.progress.coconut=Math.min(t.goals.coconut,this.getItemCount("coconut")),t.progress.wood>=t.goals.wood&&t.progress.stone>=t.goals.stone&&t.progress.coconut>=t.goals.coconut?(t.completed=!0,this.notify("questCompleted",t)):this.notify("questUpdated",t));const e=this.quests[3];e.completed||(e.progress.scrap=Math.min(e.goals.scrap,this.getItemCount("scrap_metal")),e.progress.scrap>=e.goals.scrap?(e.completed=!0,this.notify("questCompleted",e)):this.notify("questUpdated",e))}tick(t){const e=this.dayTime;this.dayTime=(this.dayTime+t/this.dayLength)%1,this.dayTime<e&&(this.dayCount+=1,this.stats.daysSurvived=this.dayCount,this.notify("newDay",this.dayCount));const n=this.dayTime>.75||this.dayTime<.25,i=this.getActiveItem(),s=i&&i.id==="torch";n&&!this.player.isWarm&&!s?this.player.isFreezing=!0:this.player.isFreezing=!1;const o=this.player.isFreezing?.35:.22;this.player.food=Math.max(0,this.player.food-t*o),this.player.water=Math.max(0,this.player.water-t*.28),this.player.isUnderwater?(this.player.oxygen=Math.max(0,this.player.oxygen-t*14),this.player.oxygen<=0&&(this.player.health=Math.max(0,this.player.health-t*10))):this.player.oxygen=Math.min(this.player.maxOxygen,this.player.oxygen+t*40),this.player.isFreezing&&(this.player.health=Math.max(0,this.player.health-t*1.5)),(this.player.food<=0||this.player.water<=0)&&(this.player.health=Math.max(0,this.player.health-t*2.5)),this.player.food>75&&this.player.water>75&&!this.player.isFreezing&&!this.player.isUnderwater&&(this.player.health=Math.min(this.player.maxHealth,this.player.health+t*1.2)),this.player.stamina=Math.min(this.player.maxStamina,this.player.stamina+t*15)}drinkFreshwater(){this.player.water=Math.min(this.player.maxWater,this.player.water+40),this.notify("drankWater")}sleep(){this.dayTime=.25,this.dayCount+=1,this.stats.daysSurvived=this.dayCount,this.player.health=this.player.maxHealth,this.player.stamina=this.player.maxStamina,this.player.food=Math.max(20,this.player.food-15),this.player.water=Math.max(20,this.player.water-20),this.notify("slept")}}const it=new Up,ls="primitive_island_save_v1",wa="primitive_island_settings_v1";class ii{static saveGame(t,e=[]){try{const n={version:1,savedAt:Date.now(),player:{gender:t.player.gender,health:t.player.health,stamina:t.player.stamina,food:t.player.food,water:t.player.water,respawnPos:t.player.respawnPos,currentPos:t.player.currentPos},inventory:t.inventory,activeHotbarIndex:t.activeHotbarIndex,dayTime:t.dayTime,dayCount:t.dayCount,quests:t.quests,stats:t.stats,structures:e.map(i=>({type:i.type,x:i.position.x,y:i.position.y,z:i.position.z,rotationY:i.rotation.y,isLit:i.isLit||!1}))};return localStorage.setItem(ls,JSON.stringify(n)),!0}catch(n){return console.warn("Failed to save game to localStorage",n),!1}}static hasSave(){return!!localStorage.getItem(ls)}static loadGame(t){try{const e=localStorage.getItem(ls);if(!e)return null;const n=JSON.parse(e);return n?(n.player&&Object.assign(t.player,n.player),Array.isArray(n.inventory)&&(t.inventory=n.inventory),n.activeHotbarIndex!==void 0&&(t.activeHotbarIndex=n.activeHotbarIndex),n.dayTime!==void 0&&(t.dayTime=n.dayTime),n.dayCount!==void 0&&(t.dayCount=n.dayCount),Array.isArray(n.quests)&&(t.quests=n.quests),n.stats&&Object.assign(t.stats,n.stats),n.structures||[]):null}catch(e){return console.error("Failed to load save from localStorage",e),null}}static clearSave(){localStorage.removeItem(ls)}static saveSettings(t){try{localStorage.setItem(wa,JSON.stringify(t))}catch(e){console.warn("Failed to save settings",e)}}static loadSettings(){try{const t=localStorage.getItem(wa);return t?JSON.parse(t):null}catch{return null}}}class Np{constructor(t){this.scene=t,this.islandRadius=75,this.terrainSize=340,this.segments=130,this.terrainMesh=null,this.oceanMesh=null,this.freshwaterPool=null,this.skyDome=null,this.stars=null,this.sunMesh=null,this.moonMesh=null,this.sunLight=null,this.ambientLight=null,this.hemiLight=null,this.waveTime=0,this.waterUniforms=null,this.skyUniforms=null,this.rescueShip=null,this.isRescueShipSailing=!1,this.rescueShipProgress=0,this.init()}init(){this.setupLighting(),this.createSkyAndCelestials(),this.createTerrain(),this.createFreshwaterPool(),this.createOcean(),this.createClouds(),this.createRescueShipModel()}getHeightAt(t,e){let i=1-Math.hypot(t,e)/this.islandRadius;i=Math.max(-.6,Math.min(1,i));const s=Math.sin(t*.04)*Math.cos(e*.04)*4.5,o=Math.sin(t*.09+1.2)*Math.sin(e*.09-.7)*2.2,a=Math.cos(t*.18+e*.12)*1.1;let c=-3.5;i>0?c=Math.pow(i,1.4)*11+(s+o+a)*i:c=-.5+i*4;const l=Math.hypot(t,e);if(l<12){const u=Math.sin(l/12*Math.PI*.5);c=Sn.lerp(1.2,c,u)}const h=Math.hypot(t-120,e- -95);if(h<35){const u=Math.max(0,1-h/35);c=Math.max(c,-3.2+u*2.5)}return c}getNormalAt(t,e){const i=this.getHeightAt(t-.5,e),s=this.getHeightAt(t+.5,e),o=this.getHeightAt(t,e-.5),a=this.getHeightAt(t,e+.5);return new b(i-s,2*.5,o-a).normalize()}createTerrain(){const t=new dn(this.terrainSize,this.terrainSize,this.segments,this.segments);t.rotateX(-Math.PI/2);const e=t.attributes.position,n=e.count,i=new Float32Array(n*3),s=new St(1653578),o=new St(15057794),a=new St(12230766),c=new St(5211959),l=new St(6332226),h=new St(7435125),u=new St(5198164),d=new St;for(let g=0;g<n;g++){const _=e.getX(g),p=e.getZ(g),f=this.getHeightAt(_,p);e.setY(g,f);const E=1-this.getNormalAt(_,p).y;if(f<-.2)d.copy(s).lerp(a,Math.max(0,(f+3)/3));else if(f<1.3){const x=(f+.2)/1.5;d.copy(a).lerp(o,x)}else if(f<6.5)if(E>.45)d.copy(h);else{const x=Math.sin(_*.2)*.2+.5;d.copy(c).lerp(l,x)}else d.copy(E>.35?u:h);i[g*3]=d.r,i[g*3+1]=d.g,i[g*3+2]=d.b}t.setAttribute("color",new Be(i,3)),t.computeVertexNormals();const m=new nt({vertexColors:!0,flatShading:!0,roughness:.85,metalness:.05});this.terrainMesh=new F(t,m),this.terrainMesh.receiveShadow=!0,this.terrainMesh.castShadow=!0,this.scene.add(this.terrainMesh)}createFreshwaterPool(){const t=new eo(7.2,24);t.rotateX(-Math.PI/2);const e=new nt({color:5099745,transparent:!0,opacity:.85,roughness:.1,metalness:.15,flatShading:!0});this.freshwaterPool=new F(t,e),this.freshwaterPool.position.set(0,1.45,0),this.freshwaterPool.userData={type:"freshwater_pool",name:"Suối Nước Ngọt Tự Nhiên",hint:"[E] Uống Nước Suối Trong Lành"},this.scene.add(this.freshwaterPool);const n=new nt({color:5923672,flatShading:!0,roughness:.9}),i=new bt,s=18;for(let o=0;o<s;o++){const a=o/s*Math.PI*2+(Math.random()-.5)*.3,c=6.8+Math.random()*1.4,l=Math.cos(a)*c,h=Math.sin(a)*c,u=this.getHeightAt(l,h),d=new xe(.5+Math.random()*.6,0),m=new F(d,n);m.position.set(l,u+.2,h),m.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),m.castShadow=!0,m.receiveShadow=!0,i.add(m)}this.scene.add(i)}createOcean(){const t=new dn(650,650,80,80);t.rotateX(-Math.PI/2),this.waterUniforms={uTime:{value:0},uSunDir:{value:new b(.5,.8,.5).normalize()},uDeepColor:{value:new St(933723)},uShallowColor:{value:new St(2665401)},uFoamColor:{value:new St(16777215)},uSunColor:{value:new St(16774097)}};const e=new Je({uniforms:this.waterUniforms,vertexShader:`
        uniform float uTime;
        varying vec3 vWorldPos;
        varying vec3 vNormal;
        varying float vWaveHeight;

        void main() {
          vec3 pos = position;
          // Dual Gerstner waves
          float w1 = sin(pos.x * 0.08 + uTime * 1.8) * 0.32 + cos(pos.z * 0.07 + uTime * 1.4) * 0.28;
          float w2 = sin((pos.x + pos.z) * 0.04 + uTime * 2.2) * 0.18;
          pos.y = w1 + w2;
          vWaveHeight = pos.y;

          float eps = 0.4;
          float dhx = (sin((pos.x + eps) * 0.08 + uTime * 1.8) - sin((pos.x - eps) * 0.08 + uTime * 1.8)) * 0.32;
          float dhz = (cos((pos.z + eps) * 0.07 + uTime * 1.4) - cos((pos.z - eps) * 0.07 + uTime * 1.4)) * 0.28;
          vNormal = normalize(vec3(-dhx, 1.0, -dhz));

          vec4 worldPos = modelMatrix * vec4(pos, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,fragmentShader:`
        uniform vec3 uSunDir;
        uniform vec3 uDeepColor;
        uniform vec3 uShallowColor;
        uniform vec3 uFoamColor;
        uniform vec3 uSunColor;
        varying vec3 vWorldPos;
        varying vec3 vNormal;
        varying float vWaveHeight;

        void main() {
          vec3 viewDir = normalize(cameraPosition - vWorldPos);
          vec3 norm = normalize(vNormal);

          // Fresnel factor
          float fresnel = pow(1.0 - max(0.0, dot(viewDir, norm)), 3.0);

          // Specular sun highlight
          vec3 halfDir = normalize(uSunDir + viewDir);
          float spec = pow(max(0.0, dot(norm, halfDir)), 36.0);

          // Distance from island center for shallow vs deep water
          float dist = length(vWorldPos.xz);
          float depthFactor = smoothstep(55.0, 110.0, dist);
          vec3 waterCol = mix(uShallowColor, uDeepColor, depthFactor);

          // Wave crest foam
          float foam = smoothstep(0.35, 0.55, vWaveHeight);
          waterCol = mix(waterCol, uFoamColor, foam * 0.65);

          // Combine with sky reflection & sun glint
          vec3 finalColor = waterCol + (uSunColor * spec * 0.8) + (vec3(0.5, 0.7, 0.9) * fresnel * 0.35);

          gl_FragColor = vec4(finalColor, 0.88);
        }
      `,transparent:!0,flatShading:!0});this.oceanMesh=new F(t,e),this.oceanMesh.position.set(0,0,0),this.oceanMesh.receiveShadow=!0,this.scene.add(this.oceanMesh)}setupLighting(){this.ambientLight=new oc(14676223,.45),this.scene.add(this.ambientLight),this.hemiLight=new Tp(16774630,1784655,.35),this.scene.add(this.hemiLight),this.sunLight=new rc(16775917,1.25),this.sunLight.position.set(60,90,60),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=280;const t=65;this.sunLight.shadow.camera.left=-t,this.sunLight.shadow.camera.right=t,this.sunLight.shadow.camera.top=t,this.sunLight.shadow.camera.bottom=-t,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target)}createSkyAndCelestials(){const t=new Di(380,24,16);this.skyUniforms={uTopColor:{value:new St(3703495)},uBottomColor:{value:new St(10211575)},uSunPos:{value:new b(0,1,0)},uSunColor:{value:new St(16775917)}};const e=new Je({uniforms:this.skyUniforms,vertexShader:`
        varying vec3 vWorldPos;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,fragmentShader:`
        uniform vec3 uTopColor;
        uniform vec3 uBottomColor;
        uniform vec3 uSunPos;
        uniform vec3 uSunColor;
        varying vec3 vWorldPos;

        void main() {
          vec3 dir = normalize(vWorldPos);
          float h = dir.y;
          float t = clamp((h + 0.1) / 0.9, 0.0, 1.0);
          vec3 sky = mix(uBottomColor, uTopColor, t);

          // Sun atmospheric coronal glow
          float sunDot = max(0.0, dot(dir, normalize(uSunPos)));
          float sunGlow = pow(sunDot, 12.0) * 0.35;
          sky += uSunColor * sunGlow;

          gl_FragColor = vec4(sky, 1.0);
        }
      `,side:Ae});this.skyDome=new F(t,e),this.scene.add(this.skyDome);const n=new Pe,i=650,s=new Float32Array(i*3);for(let u=0;u<i;u++){const d=Math.random(),m=Math.random(),g=d*2*Math.PI,_=Math.acos(2*m-1),p=360;s[u*3]=p*Math.sin(_)*Math.cos(g),s[u*3+1]=Math.abs(p*Math.cos(_))+10,s[u*3+2]=p*Math.sin(_)*Math.sin(g)}n.setAttribute("position",new Be(s,3));const o=new sc({color:16777215,size:1.8,transparent:!0,opacity:0});this.stars=new Ep(n,o),this.scene.add(this.stars);const a=new xe(8,1),c=new Ke({color:16774056});this.sunMesh=new F(a,c),this.scene.add(this.sunMesh);const l=new xe(6,1),h=new Ke({color:14544639});this.moonMesh=new F(l,h),this.scene.add(this.moonMesh)}createClouds(){this.cloudsGroup=new bt;const t=new nt({color:16777215,roughness:.9,flatShading:!0,transparent:!0,opacity:.88});for(let e=0;e<12;e++){const n=new bt,i=4+Math.floor(Math.random()*4);for(let a=0;a<i;a++){const c=new xe(4+Math.random()*3,1),l=new F(c,t);l.position.set((a-i/2)*4.5,(Math.random()-.5)*2,(Math.random()-.5)*4),n.add(l)}const s=e/12*Math.PI*2,o=60+Math.random()*70;n.position.set(Math.cos(s)*o,45+Math.random()*15,Math.sin(s)*o),n.userData={speed:.04+Math.random()*.04,radius:o,angle:s},this.cloudsGroup.add(n)}this.scene.add(this.cloudsGroup)}createRescueShipModel(){this.rescueShip=new bt;const t=new nt({color:1779768,roughness:.7,flatShading:!0}),e=new nt({color:15857145,roughness:.6,flatShading:!0}),n=new nt({color:10120003,roughness:.85,flatShading:!0}),i=new nt({color:11149858,roughness:.8}),s=new nt({color:13938487,roughness:.3,metalness:.8}),o=new gt(5.2,2.2,18),a=new F(o,i);a.position.set(0,.4,0),this.rescueShip.add(a);const c=new gt(5.6,2,18.4),l=new F(c,t);l.position.set(0,2.2,0),this.rescueShip.add(l);const h=new te(2.8,4.5,4);h.rotateX(Math.PI/2);const u=new F(h,t);u.position.set(0,1.8,10.8),this.rescueShip.add(u);const d=new gt(5.4,.2,18.2),m=new F(d,n);m.position.set(0,3.25,0),this.rescueShip.add(m);const g=new gt(3.6,2.6,6.2),_=new F(g,e);_.position.set(0,4.55,-1),this.rescueShip.add(_);const p=new nt({color:3718648,roughness:.2,metalness:.7}),f=new gt(3.65,.8,5.8),w=new F(f,p);w.position.set(0,4.8,-1),this.rescueShip.add(w);const E=new jt(.45,.5,2.4,8),x=new nt({color:11149858,roughness:.7}),I=new F(E,x);I.position.set(0,6.8,-2.8),this.rescueShip.add(I);const C=new F(E,x);C.position.set(0,6.8,-4.6),this.rescueShip.add(C);const A=new jt(.48,.48,.6,8),P=new nt({color:1118481,roughness:.8}),S=new F(A,P);S.position.set(0,7.8,-2.8),this.rescueShip.add(S);const M=new F(A,P);M.position.set(0,7.8,-4.6),this.rescueShip.add(M);const R=new jt(.1,.14,5.5,6),k=new F(R,s);k.position.set(0,8.2,1.2),this.rescueShip.add(k);const B=new dn(1.6,1),q=new Ke({color:16096779,side:be}),$=new F(B,q);$.position.set(.8,10.2,1.2),this.rescueShip.add($);const W=new io(.35,.1,6,12),Z=new nt({color:16347926,roughness:.5});[-2.8,2.8].forEach(Yt=>{for(let X of[-2,2,5]){const J=new F(W,Z);J.position.set(Yt,3.8,X),J.rotation.y=Math.PI/2,this.rescueShip.add(J)}}),this.searchlightGroup=new bt,this.searchlightGroup.position.set(0,6,1.8),this.rescueShip.add(this.searchlightGroup);const V=new jt(.35,.45,.6,8);V.rotateX(Math.PI/2);const st=new F(V,s);this.searchlightGroup.add(st),this.searchlightSpot=new Ap(16775917,8,120,Math.PI/6,.3,1.2),this.searchlightSpot.position.set(0,0,.3),this.searchlightTarget=new de,this.searchlightTarget.position.set(0,-5,40),this.searchlightGroup.add(this.searchlightSpot),this.searchlightGroup.add(this.searchlightTarget),this.searchlightSpot.target=this.searchlightTarget;const at=new te(8,35,12,1,!0);at.rotateX(-Math.PI/2),at.translate(0,0,17.5);const xt=new Ke({color:16775917,transparent:!0,opacity:.18,side:be}),It=new F(at,xt);this.searchlightGroup.add(It),this.rescueShip.position.set(220,0,180),this.rescueShip.visible=!1,this.scene.add(this.rescueShip)}startRescueShipCutscene(t){this.isRescueShipSailing=!0,this.rescueShipProgress=0,this.rescueShipStartPos=new b(160,0,140),this.rescueShipTargetPos=t?t.clone().add(new b(15,0,15)):new b(25,0,45),this.rescueShip.position.copy(this.rescueShipStartPos),this.rescueShip.visible=!0;const e=new b().subVectors(this.rescueShipTargetPos,this.rescueShipStartPos).normalize();this.rescueShip.rotation.y=Math.atan2(e.x,e.z)}updateRescueShip(t){if(!this.isRescueShipSailing||!this.rescueShip)return;this.rescueShipProgress=Math.min(1,this.rescueShipProgress+t*.08);const e=1-Math.pow(1-this.rescueShipProgress,2);this.rescueShip.position.lerpVectors(this.rescueShipStartPos,this.rescueShipTargetPos,e);const n=Math.sin(Date.now()*.003)*.22,i=Math.sin(Date.now()*.0025)*.04;this.rescueShip.position.y=n,this.rescueShip.rotation.x=i,this.searchlightGroup&&(this.searchlightGroup.rotation.y=Math.sin(Date.now()*.002)*.55)}updateDayNight(t,e){const n=t*Math.PI*2-Math.PI/2,i=240,s=Math.cos(n)*i,o=Math.sin(n)*i,a=Math.sin(n*.5)*60;this.sunMesh.position.set(e.x+s,e.y+o,e.z+a),this.moonMesh.position.set(e.x-s,e.y-o,e.z-a),o>0?(this.sunLight.position.set(e.x+s,e.y+o,e.z+a),this.sunLight.target.position.copy(e),this.sunLight.target.updateMatrixWorld()):(this.sunLight.position.set(e.x-s,e.y-o,e.z-a),this.sunLight.target.position.copy(e),this.sunLight.target.updateMatrixWorld());const l=new St(3703495),h=new St(10211575),u=new St(4335160),d=new St(14707514),m=new St(132626),g=new St(660518);let _=new St,p=new St,f=1.25,w=.45,E=0;if(t>=.28&&t<=.72)_.copy(l),p.copy(h),f=1.35,w=.5,E=0;else if(t>.72&&t<=.8){const x=(t-.72)/.08;_.copy(l).lerp(u,x),p.copy(h).lerp(d,x),f=Sn.lerp(1.35,.35,x),w=Sn.lerp(.5,.25,x),E=x*.4}else if(t>.8&&t<=.88){const x=(t-.8)/.08;_.copy(u).lerp(m,x),p.copy(d).lerp(g,x),f=Sn.lerp(.35,.12,x),w=Sn.lerp(.25,.1,x),E=.4+x*.6}else if(t>.88||t<.2)_.copy(m),p.copy(g),f=.12,w=.1,E=1;else{const x=(t-.2)/.08;_.copy(m).lerp(l,x),p.copy(g).lerp(h,x),f=Sn.lerp(.12,1.25,x),w=Sn.lerp(.1,.45,x),E=1-x}this.skyUniforms&&(this.skyUniforms.uTopColor.value.copy(_),this.skyUniforms.uBottomColor.value.copy(p),this.skyUniforms.uSunPos.value.set(s,o,a)),this.waterUniforms&&this.waterUniforms.uSunDir.value.set(s,Math.max(.1,o),a).normalize(),this.scene.fog=new xs(p.getHex(),.0032),this.sunLight.intensity=f,this.ambientLight.intensity=w,this.stars.material.opacity=E}setUnderwaterMode(t){t?(this.scene.fog=new xs(935260,.045),this.ambientLight.color.setHex(1664640)):this.ambientLight.color.setHex(14676223)}update(t,e,n){this.waveTime+=t*1.5,this.waterUniforms&&(this.waterUniforms.uTime.value=this.waveTime),this.cloudsGroup&&this.cloudsGroup.children.forEach(i=>{i.userData.angle+=i.userData.speed*t*.1,i.position.x=Math.cos(i.userData.angle)*i.userData.radius,i.position.z=Math.sin(i.userData.angle)*i.userData.radius}),this.updateRescueShip(t),this.updateDayNight(e,n)}}class Fp{constructor(t,e){this.scene=t,this.islandWorld=e,this.trees=[],this.rocks=[],this.pickups=[],this.interactiveObjects=[],this.swayFoliage=[],this.swaySeaweed=[],this.windTime=0,this.shipwreckGroup=null,this.shipwreckChest=null,this.materials=this.createMaterials(),this.init()}createMaterials(){return{trunk:new nt({color:8016432,roughness:.9,flatShading:!0}),leaves:new nt({color:4029998,roughness:.7,flatShading:!0,side:be}),fernLeaf:new nt({color:2389296,roughness:.65,flatShading:!0,side:be}),bushGreen:new nt({color:3042088,roughness:.8,flatShading:!0}),coconut:new nt({color:5847837,roughness:.8,flatShading:!0}),rock:new nt({color:7238005,roughness:.85,flatShading:!0}),woodPickup:new nt({color:9132587,roughness:.8,flatShading:!0}),shipWood:new nt({color:4863784,roughness:.95,flatShading:!0}),shipChest:new nt({color:9200185,metalness:.3,roughness:.6,flatShading:!0}),metalTrim:new nt({color:13938487,metalness:.8,roughness:.4}),flowerRed:new nt({color:15680580,roughness:.5,flatShading:!0}),flowerYellow:new nt({color:16436245,roughness:.5,flatShading:!0}),flowerPurple:new nt({color:11032055,roughness:.5,flatShading:!0}),flowerWhite:new nt({color:16317180,roughness:.5,flatShading:!0}),flowerStem:new nt({color:1409085,roughness:.8}),mushroomRed:new nt({color:14232864,roughness:.4,flatShading:!0}),mushroomGold:new nt({color:14251782,roughness:.5,flatShading:!0}),mushroomStem:new nt({color:14870768,roughness:.8}),coralPink:new nt({color:16007006,roughness:.7,flatShading:!0}),coralCyan:new nt({color:440020,roughness:.7,flatShading:!0}),coralOrange:new nt({color:16347926,roughness:.7,flatShading:!0}),seaweed:new nt({color:1467700,roughness:.4,flatShading:!0,side:be,transparent:!0,opacity:.9})}}init(){this.spawnPalmTrees(45),this.spawnRocks(30),this.spawnGroundPickups(50),this.createShipwreck(),this.spawnFernsAndBushes(75),this.spawnFlowerPatches(50),this.spawnMushroomClusters(35),this.spawnCoralReefs(40),this.spawnSeaweedBeds(45)}createPalmTreeMesh(){const t=new bt,e=7,n=1.1;let i=new b(0,0,0);const s=new b((Math.random()-.5)*.4,1,(Math.random()-.5)*.4).normalize();for(let a=0;a<e;a++){const c=.32*(1-a*.06),l=.38*(1-a*.05),h=new jt(c,l,n,6),u=new F(h,this.materials.trunk);u.castShadow=!0,u.receiveShadow=!0,u.position.copy(i).addScaledVector(s,n*.5),u.quaternion.setFromUnitVectors(new b(0,1,0),s),t.add(u),i.addScaledVector(s,n),s.x+=(Math.random()-.5)*.12,s.z+=(Math.random()-.5)*.12,s.normalize()}const o=7;for(let a=0;a<o;a++){const c=a/o*Math.PI*2,l=new te(.8,3.2,4);l.translate(0,1.6,0),l.rotateX(Math.PI/2.6);const h=new F(l,this.materials.leaves);h.rotation.y=c,h.position.copy(i),h.castShadow=!0,t.add(h)}for(let a=0;a<3;a++){const c=new xe(.24,0),l=new F(c,this.materials.coconut),h=a/3*Math.PI*2+.3;l.position.set(i.x+Math.cos(h)*.45,i.y-.25,i.z+Math.sin(h)*.45),l.castShadow=!0,t.add(l)}return{group:t,topPos:i}}spawnPalmTrees(t){for(let e=0;e<t;e++){const n=Math.random()*Math.PI*2,i=16+Math.random()*42,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>.4&&a<6.5){const{group:c}=this.createPalmTreeMesh(),l=.85+Math.random()*.35;c.scale.set(l,l,l),c.position.set(s,a,o),c.rotation.y=Math.random()*Math.PI*2;const h={type:"tree",name:"Cây Cọ Bờ Biển",health:100,maxHealth:100,group:c,position:new b(s,a,o),hint:"[E] Chặt Cây Cọ (100/100 HP)"};c.userData=h,this.scene.add(c),this.trees.push(h),this.interactiveObjects.push(c)}}}spawnRocks(t){for(let e=0;e<t;e++){const n=Math.random()*Math.PI*2,i=12+Math.random()*55,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>.1){const c=new xe(1.2+Math.random()*.9,0),l=c.attributes.position;for(let d=0;d<l.count;d++)l.setX(d,l.getX(d)*(.8+Math.random()*.4)),l.setY(d,l.getY(d)*(.7+Math.random()*.5)),l.setZ(d,l.getZ(d)*(.8+Math.random()*.4));c.computeVertexNormals();const h=new F(c,this.materials.rock);h.position.set(s,a+.6,o),h.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),h.castShadow=!0,h.receiveShadow=!0;const u={type:"rock",name:"Mỏm Đá Thô",health:120,maxHealth:120,mesh:h,position:new b(s,a,o),hint:"[E] Đập Đá Khai Thác (120/120 HP)"};h.userData=u,this.scene.add(h),this.rocks.push(u),this.interactiveObjects.push(h)}}}spawnGroundPickups(t){const e=["wood","stone","coconut"];for(let n=0;n<t;n++){const i=e[Math.floor(Math.random()*e.length)],s=Math.random()*Math.PI*2,o=8+Math.random()*56,a=Math.cos(s)*o,c=Math.sin(s)*o,l=this.islandWorld.getHeightAt(a,c);if(l>.15){let h=null,u="";if(i==="wood"){const m=new jt(.08,.08,1.2,5);m.rotateZ(Math.PI/2.2),h=new F(m,this.materials.woodPickup),u="[E] Nhặt Cành Gỗ"}else if(i==="stone"){const m=new xe(.3,0);h=new F(m,this.materials.rock),u="[E] Nhặt Viên Đá"}else{const m=new xe(.28,0);h=new F(m,this.materials.coconut),u="[E] Nhặt Quả Dừa Tươi"}h.position.set(a,l+.15,c),h.rotation.set(0,Math.random()*Math.PI,0),h.castShadow=!0;const d={type:"pickup",itemId:i,name:i==="wood"?"Cành Gỗ":i==="stone"?"Viên Đá":"Quả Dừa",mesh:h,position:new b(a,l,c),hint:u};h.userData=d,this.scene.add(h),this.pickups.push(d),this.interactiveObjects.push(h)}}}createShipwreck(){this.shipwreckGroup=new bt;const t=new b(120,-1.2,-95),e=16,n=new gt(7,4.5,e),i=new F(n,this.materials.shipWood);i.position.set(0,1.5,0),i.rotation.set(.15,.3,.25),i.castShadow=!0,i.receiveShadow=!0,this.shipwreckGroup.add(i);const s=new jt(.3,.45,12,6),o=new F(s,this.materials.shipWood);o.position.set(1.5,6.5,-2),o.rotation.set(.35,0,.4),o.castShadow=!0,this.shipwreckGroup.add(o);for(let _=0;_<4;_++){const p=new gt(1.2,1.2,1.2),f=new F(p,this.materials.shipWood);f.position.set((_-2)*1.5,2.5,_*1.2-2),f.rotation.set(Math.random()*.3,Math.random()*.5,0),f.castShadow=!0,this.shipwreckGroup.add(f)}const a=new bt,c=new gt(1.4,.8,.9),l=new F(c,this.materials.shipChest);l.castShadow=!0,a.add(l);const h=new jt(.48,.48,1.4,8,1,!1,0,Math.PI);h.rotateZ(Math.PI/2);const u=new F(h,this.materials.shipChest);u.position.set(0,.4,0),u.castShadow=!0,a.add(u);const d=new gt(.18,.25,.1),m=new F(d,this.materials.metalTrim);m.position.set(0,.25,.46),a.add(m),a.position.set(.5,3.2,1.5),a.rotation.set(.15,.3,.25);const g={type:"chest",name:"Rương Báu Xác Tàu Đắm",isOpened:!1,group:a,hint:"[E] Lục Rương Sắt Xác Tàu"};a.userData=g,this.shipwreckChest=g,this.shipwreckGroup.add(a),this.interactiveObjects.push(a),this.shipwreckGroup.position.copy(t),this.scene.add(this.shipwreckGroup)}damageTree(t,e=25){return t.health-=e,t.hint=`[E] Chặt Cây Cọ (${Math.max(0,t.health)}/${t.maxHealth} HP)`,t.group.rotation.z+=.08,setTimeout(()=>{t.group&&(t.group.rotation.z-=.08)},120),t.health<=0?(this.destroyTree(t),!0):!1}destroyTree(t){this.scene.remove(t.group);const e=this.trees.indexOf(t);e!==-1&&this.trees.splice(e,1);const n=this.interactiveObjects.indexOf(t.group);n!==-1&&this.interactiveObjects.splice(n,1),this.spawnDrop(t.position.x+.5,t.position.z,"wood",3),this.spawnDrop(t.position.x-.5,t.position.z+.4,"palm_leaf",2),this.spawnDrop(t.position.x,t.position.z-.6,"coconut",1)}damageRock(t,e=25){return t.health-=e,t.hint=`[E] Đập Đá Khai Thác (${Math.max(0,t.health)}/${t.maxHealth} HP)`,t.health<=0?(this.destroyRock(t),!0):!1}destroyRock(t){this.scene.remove(t.mesh);const e=this.rocks.indexOf(t);e!==-1&&this.rocks.splice(e,1);const n=this.interactiveObjects.indexOf(t.mesh);n!==-1&&this.interactiveObjects.splice(n,1),this.spawnDrop(t.position.x,t.position.z,"stone",4)}spawnDrop(t,e,n,i=1){const s=this.islandWorld.getHeightAt(t,e);let o=null;if(n==="wood"){const a=new jt(.08,.08,1,5);a.rotateZ(Math.PI/2),o=new F(a,this.materials.woodPickup)}else if(n==="stone"){const a=new xe(.28,0);o=new F(a,this.materials.rock)}else if(n==="palm_leaf"){const a=new te(.4,1.2,3);o=new F(a,this.materials.leaves)}else if(n==="coconut"){const a=new xe(.26,0);o=new F(a,this.materials.coconut)}else if(n==="raw_meat"){const a=new gt(.35,.2,.45);o=new F(a,new nt({color:11149858,flatShading:!0}))}else if(n==="raw_fish"){const a=new te(.2,.7,4);a.rotateZ(Math.PI/2),o=new F(a,new nt({color:3377339,flatShading:!0}))}if(o){o.position.set(t,Math.max(.1,s+.15),e),o.castShadow=!0;const a={type:"pickup",itemId:n,count:i,name:n,mesh:o,position:new b(t,s,e),hint:`[E] Nhặt x${i} ${n}`};o.userData=a,this.scene.add(o),this.pickups.push(a),this.interactiveObjects.push(o)}}removePickup(t){this.scene.remove(t.mesh);const e=this.pickups.indexOf(t);e!==-1&&this.pickups.splice(e,1);const n=this.interactiveObjects.indexOf(t.mesh);n!==-1&&this.interactiveObjects.splice(n,1)}createFernMesh(){const t=new bt,e=7,n=[];for(let i=0;i<e;i++){const s=i/e*Math.PI*2,o=new te(.35,1.6,3);o.translate(0,.8,0),o.rotateX(Math.PI/3.2);const a=new F(o,this.materials.fernLeaf);a.rotation.y=s,a.castShadow=!0,t.add(a),n.push(a)}return{group:t,fronds:n}}createBushMesh(){const t=new bt,e=3+Math.floor(Math.random()*3);for(let n=0;n<e;n++){const i=.5+Math.random()*.45,s=new xe(i,0),o=new F(s,this.materials.bushGreen);o.position.set((Math.random()-.5)*.6,i*.8,(Math.random()-.5)*.6),o.castShadow=!0,t.add(o)}return t}spawnFernsAndBushes(t){for(let e=0;e<t;e++){const n=Math.random()*Math.PI*2,i=10+Math.random()*50,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>.6&&a<6.8)if(Math.random()>.45){const{group:c,fronds:l}=this.createFernMesh(),h=.7+Math.random()*.5;c.scale.set(h,h,h),c.position.set(s,a,o),this.scene.add(c),this.swayFoliage.push({mesh:c,fronds:l,speed:1.2+Math.random()*.5,offset:Math.random()*Math.PI})}else{const c=this.createBushMesh();c.position.set(s,a,o),this.scene.add(c)}}}createFlowerPatch(){const t=new bt,e=[this.materials.flowerRed,this.materials.flowerYellow,this.materials.flowerPurple,this.materials.flowerWhite],n=e[Math.floor(Math.random()*e.length)],i=4+Math.floor(Math.random()*5);for(let s=0;s<i;s++){const o=new jt(.02,.02,.35,4);o.translate(0,.17,0);const a=new F(o,this.materials.flowerStem),c=new xe(.12,0),l=new F(c,n);l.position.set(0,.36,0),a.add(l),a.position.set((Math.random()-.5)*1.4,0,(Math.random()-.5)*1.4),a.rotation.y=Math.random()*Math.PI,t.add(a)}return t}spawnFlowerPatches(t){for(let e=0;e<t;e++){const n=Math.random()*Math.PI*2,i=8+Math.random()*45,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>.8&&a<5.5){const c=this.createFlowerPatch();c.position.set(s,a,o),this.scene.add(c),this.swayFoliage.push({mesh:c,speed:2,offset:Math.random()*5})}}}createMushroomCluster(){const t=new bt,e=3+Math.floor(Math.random()*4),i=Math.random()>.5?this.materials.mushroomRed:this.materials.mushroomGold;for(let s=0;s<e;s++){const o=.18+Math.random()*.22,a=new jt(.04,.05,o,5);a.translate(0,o*.5,0);const c=new F(a,this.materials.mushroomStem),l=new te(.16,.12,6),h=new F(l,i);h.position.set(0,o,0),c.add(h),c.position.set((Math.random()-.5)*.8,0,(Math.random()-.5)*.8),t.add(c)}return t}spawnMushroomClusters(t){for(let e=0;e<t;e++){const n=Math.random()*Math.PI*2,i=12+Math.random()*42,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>1&&a<6){const c=this.createMushroomCluster();c.position.set(s,a,o),this.scene.add(c)}}}createCoralMesh(){const t=new bt,e=[this.materials.coralPink,this.materials.coralCyan,this.materials.coralOrange],n=e[Math.floor(Math.random()*e.length)],i=4+Math.floor(Math.random()*4);for(let s=0;s<i;s++){const o=.8+Math.random()*1.2,a=new te(.12,o,5);a.translate(0,o*.5,0);const c=new F(a,n);c.position.set((Math.random()-.5)*.6,0,(Math.random()-.5)*.6),c.rotation.set((Math.random()-.5)*.4,Math.random()*Math.PI,(Math.random()-.5)*.4),t.add(c)}return t}spawnCoralReefs(t){for(let e=0;e<t;e++){const n=Math.random()*Math.PI*2,i=50+Math.random()*40,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a<-.4&&a>-4.5){const c=this.createCoralMesh();c.position.set(s,a,o),this.scene.add(c)}}}createSeaweedCluster(){const t=new bt,e=5+Math.floor(Math.random()*4),n=[];for(let i=0;i<e;i++){const s=2+Math.random()*1.8,o=new gt(.14,s,.04);o.translate(0,s*.5,0);const a=new F(o,this.materials.seaweed);a.position.set((Math.random()-.5)*1.2,0,(Math.random()-.5)*1.2),t.add(a),n.push(a)}return{group:t,ribbons:n}}spawnSeaweedBeds(t){for(let e=0;e<t;e++){const n=Math.random()*Math.PI*2,i=52+Math.random()*45,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a<-.8&&a>-4){const{group:c,ribbons:l}=this.createSeaweedCluster();c.position.set(s,a,o),this.scene.add(c),this.swaySeaweed.push({ribbons:l,offset:Math.random()*Math.PI})}}}update(t){this.windTime+=t*1.8,Math.sin(this.windTime),this.swayFoliage.forEach(e=>{const n=Math.sin(this.windTime*e.speed+e.offset)*.08;e.mesh.rotation.z=n,e.fronds&&e.fronds.forEach((i,s)=>{i.rotation.z=Math.sin(this.windTime*1.2+s)*.05+.9})}),this.swaySeaweed.forEach(e=>{const n=Math.sin(this.windTime*.9+e.offset)*.28;e.ribbons.forEach((i,s)=>{i.rotation.z=n+Math.sin(this.windTime+s)*.1})})}}class Ea{constructor(t,e,n,i="male"){this.scene=t,this.camera=e,this.islandWorld=n,this.gender=i,this.viewMode="first_person",this.position=new b(0,3,25),this.velocity=new b,this.rotationY=0,this.pitch=0,this.currentBodyYaw=0,this.targetBodyYaw=0,this.smoothedCamPos=new b,this.hasInitializedCam=!1,this.isGrounded=!0,this.isSwimming=!1,this.isUnderwater=!1,this.isSprinting=!1,this.isCrouching=!1,this.isSwinging=!1,this.swingProgress=0,this.walkSpeed=5.5,this.runSpeed=9.2,this.swimSpeed=4.2,this.jumpForce=7.5,this.gravity=-20,this.modelGroup=new bt,this.heldItemSlot=new bt,this.torchLight=null,this.bones={},this.animTime=0,this.stepTimer=0,this.init()}init(){this.buildProceduralCharacter(),this.scene.add(this.modelGroup),this.setupTorchLight(),this.updateViewMode()}setGender(t){for(this.gender=t;this.modelGroup.children.length>0;)this.modelGroup.remove(this.modelGroup.children[0]);this.buildProceduralCharacter(),this.setupTorchLight(),this.updateViewMode()}buildProceduralCharacter(){const t=this.gender==="male",e=t?13607546:14660748,n=t?8541226:3037502,i=t?2364942:4006677,s=5519134,o=t?11817737:165063,a=new nt({color:e,roughness:.8,flatShading:!0}),c=new nt({color:n,roughness:.9,flatShading:!0}),l=new nt({color:i,roughness:.9,flatShading:!0}),h=new nt({color:s,roughness:.85,flatShading:!0}),u=new nt({color:o,roughness:.7,flatShading:!0}),d=new bt;d.position.set(0,.95,0),this.modelGroup.add(d);const m=t?.66:.52,g=.65,_=.35,p=new gt(m,g,_),f=new F(p,c);f.position.set(0,.32,0),f.castShadow=!0,d.add(f);const w=new gt(m+.04,.12,_+.04),E=new F(w,h);if(E.position.set(0,.06,0),d.add(E),t){const X=new gt(.18,.7,.08),J=new F(X,h);J.position.set(0,.34,.15),J.rotation.z=.35,d.add(J)}const x=new bt;x.position.set(0,.72,0),d.add(x);const I=new gt(.38,.4,.38),C=new F(I,a);C.castShadow=!0,x.add(C);const A=new gt(.42,.16,.42),P=new F(A,l);P.position.set(0,.18,0),x.add(P);const S=new gt(.43,.06,.43),M=new F(S,u);if(M.position.set(0,.12,0),x.add(M),t){const X=new gt(.34,.16,.22),J=new F(X,l);J.position.set(0,-.15,.16),x.add(J)}else{const X=new gt(.12,.48,.12),J=new F(X,l);J.position.set(-.12,-.12,-.22),J.rotation.x=-.2,x.add(J);const _t=new F(X,l);_t.position.set(.12,-.12,-.22),_t.rotation.x=-.2,x.add(_t);const ot=new te(.06,.28,4),Tt=new F(ot,u);Tt.position.set(.22,.2,-.05),Tt.rotation.z=-.4,x.add(Tt)}const R=new bt;R.position.set(-m*.58,.55,0),d.add(R);const k=new gt(.18,.6,.18);k.translate(0,-.28,0);const B=new F(k,a);B.castShadow=!0,R.add(B);const q=new gt(.2,.14,.2),$=new F(q,h);$.position.set(0,-.42,0),R.add($);const W=new bt;W.position.set(m*.58,.55,0),d.add(W);const Z=new F(k,a);Z.castShadow=!0,W.add(Z);const V=new F(q,h);V.position.set(0,-.42,0),W.add(V),this.heldItemSlot=new bt,this.heldItemSlot.position.set(0,-.55,.15),W.add(this.heldItemSlot);const st=new bt;st.position.set(-.16,0,0),d.add(st);const at=new gt(.2,.72,.2);at.translate(0,-.36,0);const xt=new F(at,a);xt.castShadow=!0,st.add(xt);const It=new bt;It.position.set(.16,0,0),d.add(It);const Yt=new F(at,a);Yt.castShadow=!0,It.add(Yt),this.bones={pelvis:d,headGroup:x,leftArmGroup:R,rightArmGroup:W,leftLegGroup:st,rightLegGroup:It}}setupTorchLight(){this.torchLight=new vs(16755268,0,16,1.8),this.torchLight.position.set(0,.4,.2),this.torchLight.castShadow=!1,this.heldItemSlot.add(this.torchLight)}setEquippedItem(t){for(;this.heldItemSlot.children.length>0;){const n=this.heldItemSlot.children[0];if(n===this.torchLight){this.heldItemSlot.remove(n);break}this.heldItemSlot.remove(n)}if(this.heldItemSlot.children.includes(this.torchLight)||this.heldItemSlot.add(this.torchLight),!t){this.torchLight.intensity=0;return}const e=t.id;if(e==="pickaxe"){const n=new bt,i=new jt(.04,.05,.95,5),s=new nt({color:8146724,roughness:.9}),o=new F(i,s);o.position.set(0,.22,0),n.add(o);const a=new gt(.12,.16,.16),c=new nt({color:4674921,roughness:.6,metalness:.4}),l=new F(a,c);l.position.set(0,.6,0),n.add(l);const h=new te(.07,.45,4);h.rotateZ(-Math.PI/2.2);const u=new nt({color:3359061,roughness:.5,metalness:.5,flatShading:!0}),d=new F(h,u);d.position.set(.25,.6,0),n.add(d);const m=new gt(.24,.1,.12),g=new F(m,u);g.position.set(-.16,.6,0),n.add(g),n.rotation.x=-Math.PI/2.5,this.heldItemSlot.add(n),this.torchLight.intensity=0}else if(e==="axe"){const n=new bt,i=new jt(.04,.05,.9,5),s=new nt({color:9066537,roughness:.9}),o=new F(i,s);o.position.set(0,.2,0),n.add(o);const a=new gt(.1,.28,.35),c=new nt({color:7238005,roughness:.7,flatShading:!0}),l=new F(a,c);l.position.set(0,.55,.1),n.add(l),n.rotation.x=-Math.PI/2.5,this.heldItemSlot.add(n),this.torchLight.intensity=0}else if(e==="spear"){const n=new bt,i=new jt(.035,.04,1.8,5),s=new nt({color:9066537,roughness:.9}),o=new F(i,s);o.position.set(0,.4,0),n.add(o);const a=new te(.08,.35,4),c=new nt({color:5921886,roughness:.6,flatShading:!0}),l=new F(a,c);l.position.set(0,1.35,0),n.add(l),n.rotation.x=-Math.PI/2.8,this.heldItemSlot.add(n),this.torchLight.intensity=0}else if(e==="torch"){const n=new bt,i=new jt(.05,.06,.75,5),s=new nt({color:6503964,roughness:.9}),o=new F(i,s);o.position.set(0,.2,0),n.add(o);const a=new xe(.14,0),c=new Ke({color:16746496}),l=new F(a,c);l.position.set(0,.6,0),n.add(l),n.rotation.x=-Math.PI/3,this.heldItemSlot.add(n),this.torchLight.intensity=2.4}else if(e==="fishing_rod"){const n=new bt,i=new jt(.025,.045,2.2,5),s=new nt({color:10252859,roughness:.8}),o=new F(i,s);o.position.set(0,.7,0),n.add(o),n.rotation.x=-Math.PI/2.5,this.heldItemSlot.add(n),this.torchLight.intensity=0}else this.torchLight.intensity=0}triggerSwing(){this.isSwinging||(this.isSwinging=!0,this.swingProgress=0)}toggleViewMode(){this.viewMode=this.viewMode==="first_person"?"third_person":"first_person",this.updateViewMode()}updateViewMode(){this.viewMode==="first_person"?(this.modelGroup.traverse(t=>{t.isMesh&&t!==this.heldItemSlot&&(t.castShadow=!0,this.heldItemSlot.children.some(e=>e===t||e.getObjectById(t.id))||(t.visible=!1))}),this.bones.rightArmGroup&&this.bones.rightArmGroup.traverse(t=>{t.isMesh&&(t.visible=!0)})):this.modelGroup.traverse(t=>{t.isMesh&&(t.visible=!0)})}update(t,e,n,i,s,o){this.isSprinting=n,this.isCrouching=s;const a=this.islandWorld.getHeightAt(this.position.x,this.position.z),c=0,l=c-this.position.y;this.isSwimming=l>.4,this.isUnderwater=l>1.6;let h=this.walkSpeed;this.isSwimming?h=this.swimSpeed:this.isSprinting&&!this.isCrouching?h=this.runSpeed:this.isCrouching&&(h=this.walkSpeed*.55);const u=new b(0,0,-1).applyAxisAngle(new b(0,1,0),this.rotationY),d=new b(1,0,0).applyAxisAngle(new b(0,1,0),this.rotationY),m=new b;if(m.addScaledVector(u,e.z),m.addScaledVector(d,e.x),m.lengthSq()>.001&&m.normalize(),this.velocity.x=m.x*h,this.velocity.z=m.z*h,this.isSwimming)if(i)this.velocity.y=3.5;else if(s)this.velocity.y=-3.5;else{const p=c-.7;this.velocity.y=(p-this.position.y)*2.8}else this.isGrounded?i?(this.velocity.y=this.jumpForce,this.isGrounded=!1):this.velocity.y=0:this.velocity.y+=this.gravity*t;if(this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.position.z+=this.velocity.z*t,this.position.y<=a?(this.position.y=a,this.isGrounded=!0,this.velocity.y=0):!this.isSwimming&&this.position.y-a>.2&&(this.isGrounded=!1),this.modelGroup.position.copy(this.position),this.viewMode==="third_person"){this.isSwinging?this.targetBodyYaw=this.rotationY:m.lengthSq()>.001&&(this.targetBodyYaw=Math.atan2(m.x,m.z));let p=(this.targetBodyYaw-this.currentBodyYaw+Math.PI)%(Math.PI*2)-Math.PI;p<-Math.PI&&(p+=Math.PI*2),this.currentBodyYaw+=p*Math.min(1,t*14),this.modelGroup.rotation.y=this.currentBodyYaw}else this.modelGroup.rotation.y=this.rotationY,this.currentBodyYaw=this.rotationY,this.targetBodyYaw=this.rotationY;const g=m.lengthSq()>.1;if(g&&this.isGrounded){if(this.stepTimer+=t*(this.isSprinting?2.4:1.5),this.stepTimer>=1){this.stepTimer=0;const p=a<.2?"water":"sand";o&&o.playFootstep(p)}}else g&&this.isSwimming&&(this.stepTimer+=t*1.2,this.stepTimer>=1&&(this.stepTimer=0,o&&o.playSplash()));this.animTime+=t*(this.isSprinting?12:7);const _=Math.sin(this.animTime);if(this.bones.leftLegGroup&&this.bones.rightLegGroup)if(this.isSwimming)this.bones.leftLegGroup.rotation.x=Math.sin(this.animTime*1.2)*.4,this.bones.rightLegGroup.rotation.x=-Math.sin(this.animTime*1.2)*.4,this.bones.pelvis.rotation.x=Math.PI/2.6;else if(!this.isGrounded)this.bones.leftLegGroup.rotation.x=.4,this.bones.rightLegGroup.rotation.x=-.3,this.bones.pelvis.rotation.x=0;else if(g){const p=this.isSprinting?.75:.45;this.bones.leftLegGroup.rotation.x=_*p,this.bones.rightLegGroup.rotation.x=-_*p,this.bones.leftArmGroup.rotation.x=-_*p*.8,this.isSwinging||(this.bones.rightArmGroup.rotation.x=_*p*.8),this.bones.pelvis.rotation.x=this.isSprinting?.18:0}else this.bones.leftLegGroup.rotation.x=0,this.bones.rightLegGroup.rotation.x=0,this.bones.leftArmGroup.rotation.x=0,this.isSwinging||(this.bones.rightArmGroup.rotation.x=0),this.bones.pelvis.position.y=.95+Math.sin(this.animTime*.3)*.02,this.bones.pelvis.rotation.x=0;if(this.isSwinging)if(this.swingProgress+=t*8,this.swingProgress<=1){const p=Math.sin(this.swingProgress*Math.PI);this.bones.rightArmGroup.rotation.x=-Math.PI/1.8*p,this.bones.rightArmGroup.rotation.z=-.3*p}else this.isSwinging=!1,this.swingProgress=0,this.bones.rightArmGroup.rotation.x=0,this.bones.rightArmGroup.rotation.z=0;this.updateCamera(t)}updateCamera(t=.016){const e=this.isCrouching?1.15:1.7;if(this.viewMode==="first_person")this.camera.position.set(this.position.x,this.position.y+e,this.position.z),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.rotationY,this.camera.rotation.x=this.pitch;else{const n=new b(this.position.x,this.position.y+1.25,this.position.z),i=4.2,s=Math.cos(this.pitch),o=Math.sin(this.pitch),a=Math.sin(this.rotationY),c=Math.cos(this.rotationY),l=new b(a*s,-o,c*s),h=n.clone().addScaledVector(l,i).add(new b(0,.95,0)),u=this.islandWorld.getHeightAt(h.x,h.z);h.y<u+.5&&(h.y=u+.5),this.hasInitializedCam?this.smoothedCamPos.lerp(h,Math.min(1,t*14)):(this.smoothedCamPos.copy(h),this.hasInitializedCam=!0),this.camera.position.copy(this.smoothedCamPos);const d=new b(-a*s,o,-c*s),m=n.clone().addScaledVector(d,25).add(new b(0,.4,0));this.camera.lookAt(m)}}addRotation(t,e){this.rotationY-=t,this.pitch-=e,this.pitch=Math.max(-Math.PI/2.1,Math.min(Math.PI/2.1,this.pitch))}}class Op{constructor(t,e,n,i){this.scene=t,this.islandWorld=e,this.foliageManager=n,this.soundManager=i,this.landAnimals=[],this.seaAnimals=[],this.fishSchools=[],this.interactiveEntities=[],this.boars=[],this.shark=null,this.materials=this.createMaterials(),this.init()}createMaterials(){return{boarBody:new nt({color:4862745,roughness:.9,flatShading:!0}),boarSnout:new nt({color:7227427,roughness:.8,flatShading:!0}),tusk:new nt({color:15262936,roughness:.4}),deerCoat:new nt({color:11037755,roughness:.85,flatShading:!0}),deerSpots:new nt({color:16117467,roughness:.8}),deerAntler:new nt({color:5915698,roughness:.9,flatShading:!0}),bunnyFur:new nt({color:15394527,roughness:.9,flatShading:!0}),bunnyPink:new nt({color:16037301,roughness:.8}),crabShell:new nt({color:14238758,roughness:.7,flatShading:!0}),crabClaw:new nt({color:15491125,roughness:.6,flatShading:!0}),monkeyFur:new nt({color:6899240,roughness:.9,flatShading:!0}),monkeyFace:new nt({color:13935475,roughness:.8}),leopardCoat:new nt({color:14259515,roughness:.85,flatShading:!0}),leopardSpots:new nt({color:3022351,roughness:.9}),fishBlue:new nt({color:2263261,roughness:.3,flatShading:!0}),fishOrange:new nt({color:15628066,roughness:.3,flatShading:!0}),fishYellow:new nt({color:16106776,roughness:.3,flatShading:!0}),sharkSkin:new nt({color:4016722,roughness:.6,flatShading:!0}),sharkBelly:new nt({color:12897748,roughness:.6,flatShading:!0}),turtleShell:new nt({color:4020790,roughness:.8,flatShading:!0}),turtleSkin:new nt({color:7703642,roughness:.7,flatShading:!0}),mantaBack:new nt({color:2108216,roughness:.6,flatShading:!0}),mantaBelly:new nt({color:14739181,roughness:.6,flatShading:!0}),dolphinSkin:new nt({color:4877708,roughness:.4,flatShading:!0}),dolphinBelly:new nt({color:14083309,roughness:.4,flatShading:!0})}}init(){this.spawnBoars(4),this.spawnDeers(4),this.spawnBunnies(5),this.spawnCrabs(5),this.spawnMonkeys(4),this.spawnLeopards(3),this.spawnFishSchools(8),this.spawnSeaTurtles(3),this.spawnGreatShark(),this.spawnMantaRays(3),this.spawnDolphins(3)}createBoarModel(){const t=new bt,e=new gt(.85,.7,1.4),n=new F(e,this.materials.boarBody);n.position.set(0,.65,0),n.castShadow=!0,t.add(n);const i=new bt;i.position.set(0,.75,.75),t.add(i);const s=new gt(.55,.55,.65),o=new F(s,this.materials.boarBody);o.castShadow=!0,i.add(o);const a=new gt(.35,.28,.35),c=new F(a,this.materials.boarSnout);c.position.set(0,-.1,.45),c.castShadow=!0,i.add(c);const l=new te(.06,.25,4);l.rotateX(Math.PI/4);const h=new F(l,this.materials.tusk);h.position.set(-.2,-.05,.45),i.add(h);const u=h.clone();u.position.set(.2,-.05,.45),i.add(u);const d=[],m=new gt(.18,.5,.18);m.translate(0,-.25,0);const g=[[-.32,.45,.45],[.32,.45,.45],[-.32,.45,-.45],[.32,.45,-.45]];for(let _ of g){const p=new F(m,this.materials.boarBody);p.position.set(..._),p.castShadow=!0,t.add(p),d.push(p)}return{group:t,legs:d,headGroup:i}}spawnBoars(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+Math.random()*.4,i=24+Math.random()*28,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>.8){const{group:c,legs:l,headGroup:h}=this.createBoarModel();c.position.set(s,a,o),this.scene.add(c);const u={category:"wildlife",subCategory:"land",type:"boar",name:"Lợn Rừng Đảo",icon:"🐗",health:80,maxHealth:80,group:c,legs:l,headGroup:h,state:"patrol",isAggro:!1,targetPos:new b(s,a,o),speed:2.2,chargeSpeed:5.5,attackCooldown:0,attackDamage:16,animCycle:Math.random()*10,drops:[{id:"raw_meat",count:2},{id:"stone",count:1}],hint:"[E/Click] Tấn Công Lợn Rừng (80/80 HP)"};c.userData=u,this.landAnimals.push(u),this.boars.push(u),this.interactiveEntities.push(c)}}}createDeerModel(){const t=new bt,e=new gt(.65,.65,1.35),n=new F(e,this.materials.deerCoat);n.position.set(0,.95,0),n.castShadow=!0,t.add(n);const i=new gt(.12,.12,.12);for(let g=-.4;g<=.4;g+=.35){const _=new F(i,this.materials.deerSpots);_.position.set(-.33,1.05,g),t.add(_);const p=new F(i,this.materials.deerSpots);p.position.set(.33,1.05,g),t.add(p)}const s=new gt(.32,.75,.35);s.translate(0,.35,0);const o=new F(s,this.materials.deerCoat);o.position.set(0,1,.65),o.rotation.x=-Math.PI/6,o.castShadow=!0,t.add(o);const a=new gt(.34,.34,.5),c=new F(a,this.materials.deerCoat);c.position.set(0,.75,.15),o.add(c);const l=new F(new te(.04,.6,4),this.materials.deerAntler);l.position.set(-.16,.35,-.05),l.rotation.z=-.4,c.add(l);const h=new F(new te(.04,.6,4),this.materials.deerAntler);h.position.set(.16,.35,-.05),h.rotation.z=.4,c.add(h);const u=[],d=new gt(.12,.85,.12);d.translate(0,-.42,0);const m=[[-.24,.75,.45],[.24,.75,.45],[-.24,.75,-.45],[.24,.75,-.45]];for(let g of m){const _=new F(d,this.materials.deerCoat);_.position.set(...g),_.castShadow=!0,t.add(_),u.push(_)}return{group:t,legs:u,neck:o}}spawnDeers(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+.3,i=20+Math.random()*26,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>1){const{group:c,legs:l,neck:h}=this.createDeerModel();c.position.set(s,a,o),this.scene.add(c);const u={category:"wildlife",subCategory:"land",type:"deer",name:"Hươu Sao Nhiệt Đới",icon:"🦌",health:60,maxHealth:60,group:c,legs:l,neck:h,state:"patrol",isAggro:!1,isPassive:!0,targetPos:new b(s,a,o),speed:2.4,fleeSpeed:7.2,animCycle:Math.random()*10,drops:[{id:"raw_meat",count:2}],hint:"[E/Click] Săn Hươu Sao (60/60 HP)"};c.userData=u,this.landAnimals.push(u),this.interactiveEntities.push(c)}}}createBunnyModel(){const t=new bt,e=new gt(.38,.35,.55),n=new F(e,this.materials.bunnyFur);n.position.set(0,.28,0),n.castShadow=!0,t.add(n);const i=new gt(.28,.28,.3),s=new F(i,this.materials.bunnyFur);s.position.set(0,.42,.28),s.castShadow=!0,t.add(s);const o=new gt(.08,.08,.08),a=new F(o,this.materials.bunnyPink);a.position.set(0,.4,.45),t.add(a);const c=new gt(.07,.35,.1),l=new F(c,this.materials.bunnyFur);l.position.set(-.1,.68,.25),l.rotation.z=-.15,t.add(l);const h=new F(c,this.materials.bunnyFur);h.position.set(.1,.68,.25),h.rotation.z=.15,t.add(h);const u=new xe(.09,0),d=new F(u,this.materials.bunnyFur);d.position.set(0,.32,-.32),t.add(d);const m=[],g=new gt(.1,.18,.14),_=[[-.14,.1,.18],[.14,.1,.18],[-.16,.12,-.18],[.16,.12,-.18]];for(let p of _){const f=new F(g,this.materials.bunnyFur);f.position.set(...p),t.add(f),m.push(f)}return{group:t,legs:m,head:s}}spawnBunnies(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+Math.random()*.5,i=14+Math.random()*24,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>.6){const{group:c,legs:l,head:h}=this.createBunnyModel();c.position.set(s,a,o),this.scene.add(c);const u={category:"wildlife",subCategory:"land",type:"bunny",name:"Thỏ Bông Đảo",icon:"🐇",health:30,maxHealth:30,group:c,legs:l,head:h,state:"patrol",isAggro:!1,isPassive:!0,targetPos:new b(s,a,o),speed:1.8,fleeSpeed:8,animCycle:Math.random()*10,drops:[{id:"raw_meat",count:1}],hint:"[E/Click] Bắt Thỏ Bông (30/30 HP)"};c.userData=u,this.landAnimals.push(u),this.interactiveEntities.push(c)}}}createCrabModel(){const t=new bt,e=new jt(.65,.75,.3,7),n=new F(e,this.materials.crabShell);n.position.set(0,.35,0),n.castShadow=!0,t.add(n);const i=new Di(.08,6,6),s=new Ke({color:1118481}),o=new F(i,s);o.position.set(-.25,.52,.5),t.add(o);const a=new F(i,s);a.position.set(.25,.52,.5),t.add(a);const c=new gt(.35,.22,.45),l=new bt;l.position.set(-.6,.38,.5);const h=new F(c,this.materials.crabClaw);h.position.set(0,0,.2),l.add(h),t.add(l);const u=new bt;u.position.set(.6,.38,.5);const d=new F(c,this.materials.crabClaw);d.position.set(0,0,.2),u.add(d),t.add(u);const m=[],g=new gt(.1,.1,.55),_=[-1,1];for(let p of _)for(let f=-1;f<=1;f++){const w=new F(g,this.materials.crabShell);w.position.set(p*.7,.2,f*.35),w.rotation.z=p*.4,t.add(w),m.push(w)}return{group:t,legs:m,clawLGroup:l,clawRGroup:u}}spawnCrabs(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+.2,i=45+Math.random()*12,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>=.1&&a<=1.4){const{group:c,legs:l,clawLGroup:h,clawRGroup:u}=this.createCrabModel();c.position.set(s,a,o),this.scene.add(c);const d={category:"wildlife",subCategory:"land",type:"crab",name:"Cua Biển Khổng Lồ",icon:"🦀",health:70,maxHealth:70,group:c,legs:l,clawLGroup:h,clawRGroup:u,state:"patrol",isAggro:!1,targetPos:new b(s,a,o),speed:1.6,chargeSpeed:4.5,attackCooldown:0,attackDamage:12,animCycle:Math.random()*10,drops:[{id:"raw_meat",count:2}],hint:"[E/Click] Tấn Công Cua Biển (70/70 HP)"};c.userData=d,this.landAnimals.push(d),this.interactiveEntities.push(c)}}}createMonkeyModel(){const t=new bt,e=new gt(.42,.55,.38),n=new F(e,this.materials.monkeyFur);n.position.set(0,.5,0),n.castShadow=!0,t.add(n);const i=new gt(.34,.34,.32),s=new F(i,this.materials.monkeyFur);s.position.set(0,.88,.1),t.add(s);const o=new gt(.24,.22,.14),a=new F(o,this.materials.monkeyFace);a.position.set(0,.84,.24),t.add(a);const c=new jt(.04,.04,.7,4),l=new F(c,this.materials.monkeyFur);l.position.set(0,.55,-.35),l.rotation.x=-Math.PI/3,t.add(l);const h=[],u=new gt(.12,.55,.12);u.translate(0,-.22,0);const d=new F(u,this.materials.monkeyFur);d.position.set(-.28,.65,.05),t.add(d),h.push(d);const m=new F(u,this.materials.monkeyFur);m.position.set(.28,.65,.05),t.add(m),h.push(m);const g=new gt(.13,.45,.13);g.translate(0,-.2,0);const _=new F(g,this.materials.monkeyFur);_.position.set(-.16,.32,-.05),t.add(_),h.push(_);const p=new F(g,this.materials.monkeyFur);return p.position.set(.16,.32,-.05),t.add(p),h.push(p),{group:t,limbs:h,tail:l,head:s}}spawnMonkeys(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+.5,i=30+Math.random()*18,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>1.2){const{group:c,limbs:l,tail:h,head:u}=this.createMonkeyModel();c.position.set(s,a,o),this.scene.add(c);const d={category:"wildlife",subCategory:"land",type:"monkey",name:"Khỉ Đảo Tinh Nghịch",icon:"🐒",health:50,maxHealth:50,group:c,limbs:l,tail:h,head:u,state:"patrol",isAggro:!1,targetPos:new b(s,a,o),speed:2.5,chargeSpeed:5.2,attackCooldown:0,attackDamage:10,animCycle:Math.random()*10,drops:[{id:"coconut",count:1},{id:"palm_leaf",count:2}],hint:"[E/Click] Tấn Công Khỉ Đảo (50/50 HP)"};c.userData=d,this.landAnimals.push(d),this.interactiveEntities.push(c)}}}createLeopardModel(){const t=new bt,e=new gt(.68,.6,1.6),n=new F(e,this.materials.leopardCoat);n.position.set(0,.72,0),n.castShadow=!0,t.add(n);const i=new gt(.12,.12,.12);for(let p=-.55;p<=.55;p+=.3){const f=new F(i,this.materials.leopardSpots);f.position.set(-.35,.8,p),t.add(f);const w=new F(i,this.materials.leopardSpots);w.position.set(.35,.8,p),t.add(w)}const s=new bt;s.position.set(0,.88,.85),t.add(s);const o=new gt(.48,.44,.52),a=new F(o,this.materials.leopardCoat);a.castShadow=!0,s.add(a);const c=new te(.08,.16,4),l=new F(c,this.materials.leopardSpots);l.position.set(-.18,.26,0),s.add(l);const h=new F(c,this.materials.leopardSpots);h.position.set(.18,.26,0),s.add(h);const u=new jt(.05,.04,1.1,4);u.translate(0,.45,0);const d=new F(u,this.materials.leopardCoat);d.position.set(0,.75,-.8),d.rotation.x=-Math.PI/3,t.add(d);const m=[],g=new gt(.18,.65,.2);g.translate(0,-.3,0);const _=[[-.26,.55,.55],[.26,.55,.55],[-.26,.55,-.55],[.26,.55,-.55]];for(let p of _){const f=new F(g,this.materials.leopardCoat);f.position.set(...p),f.castShadow=!0,t.add(f),m.push(f)}return{group:t,legs:m,tail:d,headGroup:s}}spawnLeopards(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+1.1,i=28+Math.random()*20,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>2){const{group:c,legs:l,tail:h,headGroup:u}=this.createLeopardModel();c.position.set(s,a,o),this.scene.add(c);const d={category:"wildlife",subCategory:"land",type:"leopard",name:"Báo Rừng Đốm",icon:"🐆",health:120,maxHealth:120,group:c,legs:l,tail:h,headGroup:u,state:"patrol",isAggro:!1,targetPos:new b(s,a,o),speed:2.6,chargeSpeed:6.8,attackCooldown:0,attackDamage:22,animCycle:Math.random()*10,drops:[{id:"raw_meat",count:3}],hint:"[E/Click] Tấn Công Báo Rừng (120/120 HP)"};c.userData=d,this.landAnimals.push(d),this.interactiveEntities.push(c)}}}createFishSchool(t){const e=new bt,n=6+Math.floor(Math.random()*4),i=[],s=new te(.12,.55,4);s.rotateZ(Math.PI/2);for(let a=0;a<n;a++){const c=Math.random(),l=c<.4?this.materials.fishBlue:c<.75?this.materials.fishOrange:this.materials.fishYellow,h=new F(s,l),u=new b((Math.random()-.5)*3,-.4-Math.random()*.8,(Math.random()-.5)*3);h.position.copy(u),e.add(h),i.push({mesh:h,offset:u,speed:1.2+Math.random()*.8,angle:Math.random()*Math.PI*2})}e.position.copy(t),this.scene.add(e);const o={category:"wildlife",subCategory:"sea",type:"fish_school",name:"Đàn Cá Biển Nhiệt Đới",icon:"🐟",group:e,fishes:i,center:t.clone(),orbitRadius:4+Math.random()*4,angle:Math.random()*Math.PI*2,hint:"[F] Thả Cần Câu Bắt Cá"};e.userData=o,this.fishSchools.push(o),this.interactiveEntities.push(e)}spawnFishSchools(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2,i=52+Math.random()*42,s=Math.cos(n)*i,o=Math.sin(n)*i,a=-.6;this.createFishSchool(new b(s,a,o))}}createTurtleModel(){const t=new bt,e=new jt(1,1.25,.55,8),n=new F(e,this.materials.turtleShell);n.position.set(0,0,0),n.castShadow=!0,t.add(n);const i=new Di(.32,6,6),s=new F(i,this.materials.turtleSkin);s.position.set(0,.1,1.35),t.add(s);const o=new gt(1.2,.08,.45),a=new F(o,this.materials.turtleSkin);a.position.set(-1.1,0,.6),a.rotation.y=-.3,t.add(a);const c=new F(o,this.materials.turtleSkin);c.position.set(1.1,0,.6),c.rotation.y=.3,t.add(c);const l=new gt(.5,.06,.35),h=new F(l,this.materials.turtleSkin);h.position.set(-.7,-.05,-1),t.add(h);const u=new F(l,this.materials.turtleSkin);return u.position.set(.7,-.05,-1),t.add(u),{group:t,flipperL:a,flipperR:c,head:s}}spawnSeaTurtles(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+.8,i=60+Math.random()*30,s=Math.cos(n)*i,o=Math.sin(n)*i,a=-1.2,{group:c,flipperL:l,flipperR:h,head:u}=this.createTurtleModel();c.position.set(s,a,o),this.scene.add(c);const d={category:"wildlife",subCategory:"sea",type:"turtle",name:"Rùa Biển Cổ Đại",icon:"🐢",health:100,maxHealth:100,group:c,flipperL:l,flipperR:h,head:u,center:new b(s,a,o),orbitRadius:18+Math.random()*10,angle:Math.random()*Math.PI*2,speed:1.5,state:"patrol",isPassive:!0,drops:[{id:"raw_meat",count:2}],hint:"[E/Click] Săn Rùa Biển (100/100 HP)"};c.userData=d,this.seaAnimals.push(d),this.interactiveEntities.push(c)}}spawnGreatShark(){const t=new bt,e=new te(1.2,5.5,6);e.rotateX(Math.PI/2);const n=new F(e,this.materials.sharkSkin);n.castShadow=!0,t.add(n);const i=new te(.35,1.4,4);i.rotateZ(Math.PI/6);const s=new F(i,this.materials.sharkSkin);s.position.set(0,.9,-.4),s.castShadow=!0,t.add(s);const o=new gt(.18,1.6,1),a=new F(o,this.materials.sharkSkin);a.position.set(0,0,-2.6),a.castShadow=!0,t.add(a);const c=new te(.8,1.2,5);c.rotateX(-Math.PI/2);const l=new F(c,this.materials.sharkBelly);l.position.set(0,-.2,2.2),t.add(l);const h=new b(120,-.45,-95);t.position.copy(h),this.scene.add(t);const u={category:"wildlife",subCategory:"sea",type:"shark",name:"Cá Mập Trắng Đại Dương",icon:"🦈",health:180,maxHealth:180,group:t,tail:a,center:h,patrolRadius:30,angle:0,speed:3.5,chargeSpeed:7.2,state:"patrol",isAggro:!1,attackCooldown:0,attackDamage:28,drops:[{id:"raw_meat",count:4}],hint:"[E/Click] Tấn Công Cá Mập (180/180 HP)"};t.userData=u,this.shark=u,this.seaAnimals.push(u),this.interactiveEntities.push(t)}createMantaModel(){const t=new bt,e=new te(2.4,3.2,4);e.rotateX(Math.PI/2),e.scale(1,.12,1);const n=new F(e,this.materials.mantaBack);n.castShadow=!0,t.add(n);const i=new te(2.3,3.1,4);i.rotateX(Math.PI/2),i.scale(1,.08,1);const s=new F(i,this.materials.mantaBelly);s.position.set(0,-.06,0),t.add(s);const o=new jt(.04,.02,3.2,4);o.rotateX(Math.PI/2);const a=new F(o,this.materials.mantaBack);return a.position.set(0,0,-2.2),t.add(a),{group:t,wings:n,tail:a}}spawnMantaRays(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+1.6,i=68+Math.random()*25,s=Math.cos(n)*i,o=Math.sin(n)*i,a=-2.2,{group:c,wings:l,tail:h}=this.createMantaModel();c.position.set(s,a,o),this.scene.add(c);const u={category:"wildlife",subCategory:"sea",type:"manta",name:"Cá Đuối Khổng Lồ",icon:"🐟",health:90,maxHealth:90,group:c,wings:l,tail:h,center:new b(s,a,o),orbitRadius:22+Math.random()*12,angle:Math.random()*Math.PI*2,speed:2.2,state:"patrol",isAggro:!1,attackCooldown:0,attackDamage:14,drops:[{id:"raw_meat",count:2}],hint:"[E/Click] Tấn Công Cá Đuối (90/90 HP)"};c.userData=u,this.seaAnimals.push(u),this.interactiveEntities.push(c)}}createDolphinModel(){const t=new bt,e=new te(.65,3.2,6);e.rotateX(Math.PI/2);const n=new F(e,this.materials.dolphinSkin);n.castShadow=!0,t.add(n);const i=new te(.22,.6,5);i.rotateX(Math.PI/2);const s=new F(i,this.materials.dolphinSkin);s.position.set(0,-.05,1.8),t.add(s);const o=new te(.25,.8,4);o.rotateZ(Math.PI/4);const a=new F(o,this.materials.dolphinSkin);a.position.set(0,.55,-.2),t.add(a);const c=new gt(.9,.08,.35),l=new F(c,this.materials.dolphinSkin);return l.position.set(0,0,-1.65),t.add(l),{group:t,flukes:l}}spawnDolphins(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+2.4,i=58+Math.random()*26,s=Math.cos(n)*i,o=Math.sin(n)*i,a=-.8,{group:c,flukes:l}=this.createDolphinModel();c.position.set(s,a,o),this.scene.add(c);const h={category:"wildlife",subCategory:"sea",type:"dolphin",name:"Cá Heo Đảo Xanh",icon:"🐬",health:80,maxHealth:80,group:c,flukes:l,center:new b(s,a,o),orbitRadius:26+Math.random()*12,angle:Math.random()*Math.PI*2,speed:3.8,state:"patrol",isPassive:!0,leapProgress:0,drops:[{id:"raw_meat",count:1}],hint:"[E/Click] Quan Sát Cá Heo Đảo"};c.userData=h,this.seaAnimals.push(h),this.interactiveEntities.push(c)}}update(t,e,n){this.updateLandAnimals(t,e,n),this.updateFishSchools(t),this.updateSeaAnimals(t,e,n)}updateLandAnimals(t,e,n){this.landAnimals.forEach(i=>{i.animCycle+=t*(i.state==="charge"?12:5);const s=Math.sin(i.animCycle);i.legs&&i.legs.length>=4?(i.legs[0].rotation.x=s*.6,i.legs[1].rotation.x=-s*.6,i.legs[2].rotation.x=-s*.6,i.legs[3].rotation.x=s*.6):i.legs&&i.legs.length===6&&i.legs.forEach((c,l)=>{c.rotation.z=Math.sin(i.animCycle+l*.5)*.35+(l<3?-.4:.4)}),i.tail&&(i.tail.rotation.y=Math.sin(i.animCycle*1.4)*.35),i.clawLGroup&&i.clawRGroup&&(i.clawLGroup.rotation.y=Math.sin(i.animCycle)*.3,i.clawRGroup.rotation.y=-Math.sin(i.animCycle)*.3),i.attackCooldown>0&&(i.attackCooldown-=t);const o=i.group.position.distanceTo(e.position);if(i.state==="patrol"){const c=new b().subVectors(i.targetPos,i.group.position);if(c.y=0,c.length()<1.5){const l=i.group.position.x+(Math.random()-.5)*25,h=i.group.position.z+(Math.random()-.5)*25,u=this.islandWorld.getHeightAt(l,h);u>.3&&i.targetPos.set(l,u,h)}else c.normalize(),i.group.position.addScaledVector(c,i.speed*t),i.group.rotation.y=Math.atan2(c.x,c.z)}else if(i.state==="charge"){const c=new b().subVectors(e.position,i.group.position);c.y=0,c.normalize();const l=i.chargeSpeed||5.5;if(i.group.position.addScaledVector(c,l*t),i.group.rotation.y=Math.atan2(c.x,c.z),o<2.2&&i.attackCooldown<=0){i.attackCooldown=1.8;const h=i.attackDamage||16;n(h,`Bị ${i.name} phản công!`),i.type==="boar"?this.soundManager.playAnimalGrunt():i.type==="leopard"?this.soundManager.playLeopardRoar():i.type==="crab"?this.soundManager.playCrabSnap():this.soundManager.playAnimalHit()}o>30&&(i.state="patrol",i.isAggro=!1)}else if(i.state==="flee"){const c=new b().subVectors(i.group.position,e.position);c.y=0,c.normalize();const l=i.fleeSpeed||7;i.group.position.addScaledVector(c,l*t),i.group.rotation.y=Math.atan2(c.x,c.z),o>35&&(i.state="patrol")}const a=this.islandWorld.getHeightAt(i.group.position.x,i.group.position.z);i.group.position.y=Math.max(.1,a)})}updateFishSchools(t){this.fishSchools.forEach(e=>{e.angle+=t*.35,e.group.position.x=e.center.x+Math.cos(e.angle)*e.orbitRadius,e.group.position.z=e.center.z+Math.sin(e.angle)*e.orbitRadius,e.group.rotation.y=e.angle+Math.PI/2,e.fishes.forEach((n,i)=>{n.mesh.rotation.y=Math.sin(Date.now()*.006+i)*.35})})}updateSeaAnimals(t,e,n){const i=e.position.y<.2;this.seaAnimals.forEach(s=>{const o=s.group.position.distanceTo(e.position);if(s.attackCooldown>0&&(s.attackCooldown-=t),s.type==="shark"){if(s.tail.rotation.y=Math.sin(Date.now()*.007)*.45,s.state==="charge"){const a=new b().subVectors(e.position,s.group.position);a.y=0,a.normalize(),s.group.position.addScaledVector(a,s.chargeSpeed*t),s.group.rotation.y=Math.atan2(a.x,a.z)+Math.PI,o<3.2&&i&&s.attackCooldown<=0&&(s.attackCooldown=2,n(s.attackDamage,"Bị Cá Mập Trắng tấn công cắn xé!"),this.soundManager.playSharkWarning()),(o>48||!i)&&(s.state="patrol",s.isAggro=!1)}else if(s.state==="flee"){const a=new b().subVectors(s.group.position,e.position);a.y=0,a.normalize(),s.group.position.addScaledVector(a,5*t),o>40&&(s.state="patrol")}else s.angle+=t*.35,s.group.position.x=s.center.x+Math.cos(s.angle)*s.patrolRadius,s.group.position.z=s.center.z+Math.sin(s.angle)*s.patrolRadius,s.group.rotation.y=-s.angle;s.group.position.y=-.45}else if(s.type==="turtle"){const a=Math.sin(Date.now()*.003)*.35;s.flipperL.rotation.z=a,s.flipperR.rotation.z=-a,s.state==="flee"?(s.angle+=t*.6,s.group.position.x=s.center.x+Math.cos(s.angle)*(s.orbitRadius+15),s.group.position.z=s.center.z+Math.sin(s.angle)*(s.orbitRadius+15),s.group.rotation.y=-s.angle,o>30&&(s.state="patrol")):(s.angle+=t*.2,s.group.position.x=s.center.x+Math.cos(s.angle)*s.orbitRadius,s.group.position.z=s.center.z+Math.sin(s.angle)*s.orbitRadius,s.group.rotation.y=-s.angle),s.group.position.y=-1.2}else if(s.type==="manta"){const a=Math.sin(Date.now()*.004)*.25;if(s.wings.rotation.z=a,s.tail.rotation.y=Math.sin(Date.now()*.006)*.3,s.state==="charge"){const c=new b().subVectors(e.position,s.group.position);c.y=0,c.normalize(),s.group.position.addScaledVector(c,4*t),s.group.rotation.y=Math.atan2(c.x,c.z),o<3&&s.attackCooldown<=0&&(s.attackCooldown=2.2,n(s.attackDamage,"Bị Cá Đuối quất đuôi tự vệ!"),this.soundManager.playAnimalHit()),(o>28||!i)&&(s.state="patrol")}else s.angle+=t*.25,s.group.position.x=s.center.x+Math.cos(s.angle)*s.orbitRadius,s.group.position.z=s.center.z+Math.sin(s.angle)*s.orbitRadius,s.group.rotation.y=-s.angle;s.group.position.y=-2.2}else if(s.type==="dolphin"){s.flukes.rotation.x=Math.sin(Date.now()*.008)*.45,s.angle+=t*.38,s.leapProgress+=t*.8;const a=Math.sin(s.leapProgress)*1.5-.7;s.group.position.x=s.center.x+Math.cos(s.angle)*s.orbitRadius,s.group.position.z=s.center.z+Math.sin(s.angle)*s.orbitRadius,s.group.position.y=a,s.group.rotation.y=-s.angle,s.group.rotation.x=Math.cos(s.leapProgress)*.4}})}damageEntity(t,e){if(!t)return{killed:!1};if(t.health-=e,this.soundManager.playAnimalHit(),t.hint=`[E/Click] Tấn Công ${t.name} (${Math.max(0,t.health)}/${t.maxHealth} HP)`,t.health<=0){this.scene.remove(t.group);const n=this.landAnimals.indexOf(t);n!==-1&&this.landAnimals.splice(n,1);const i=this.seaAnimals.indexOf(t);i!==-1&&this.seaAnimals.splice(i,1);const s=this.boars.indexOf(t);s!==-1&&this.boars.splice(s,1),this.shark===t&&(this.shark=null);const o=this.interactiveEntities.indexOf(t.group);return o!==-1&&this.interactiveEntities.splice(o,1),(t.drops||[{id:"raw_meat",count:2}]).forEach((c,l)=>{this.foliageManager.spawnDrop(t.group.position.x+l*.35,t.group.position.z+l*.35,c.id,c.count)}),{killed:!0,data:t}}return t.isPassive?t.state="flee":(t.state=t.health<25?"flee":"charge",t.isAggro=!0,t.type==="boar"?this.soundManager.playAnimalGrunt():t.type==="leopard"?this.soundManager.playLeopardRoar():t.type==="shark"?this.soundManager.playSharkWarning():t.type==="crab"?this.soundManager.playCrabSnap():t.type==="dolphin"&&this.soundManager.playDolphinWhistle()),{killed:!1,data:t}}damageBoar(t,e){return this.damageEntity(t,e).killed}damageShark(t){return this.shark?this.damageEntity(this.shark,t).killed:!1}}class Bp{constructor(t,e,n){this.scene=t,this.islandWorld=e,this.soundManager=n,this.structures=[],this.interactiveStructures=[],this.materials=this.createMaterials()}createMaterials(){return{stone:new nt({color:6382438,roughness:.9,flatShading:!0}),wood:new nt({color:7885102,roughness:.9,flatShading:!0}),leaves:new nt({color:4750645,roughness:.7,flatShading:!0,side:be}),flame:new Ke({color:16742144}),ash:new nt({color:2829099,roughness:1}),table:new nt({color:8541226,roughness:.8,flatShading:!0})}}buildStructure(t,e,n=0){let i=null;return t==="campfire"?i=this.createCampfire(e):t==="shelter"?i=this.createShelter(e,n):t==="workbench"?i=this.createWorkbench(e,n):t==="beacon"&&(i=this.createRescueBeacon(e,n)),i?(this.structures.push(i),this.interactiveStructures.push(i.group),this.soundManager.playCraft(),i):null}createCampfire(t){const e=new bt,n=8;for(let c=0;c<n;c++){const l=c/n*Math.PI*2,h=new xe(.28,0),u=new F(h,this.materials.stone);u.position.set(Math.cos(l)*.85,.15,Math.sin(l)*.85),u.castShadow=!0,e.add(u)}for(let c=0;c<4;c++){const l=new jt(.08,.08,1,5),h=new F(l,this.materials.wood);h.rotation.set(Math.PI/4,c/4*Math.PI*2,0),h.position.set(0,.2,0),h.castShadow=!0,e.add(h)}const i=new te(.35,.9,5),s=new F(i,this.materials.flame);s.position.set(0,.6,0),e.add(s);const o=new vs(16742178,2.5,14,1.5);o.position.set(0,.8,0),e.add(o),e.position.copy(t),this.scene.add(e);const a={type:"campfire",name:"Lửa Trại Sưởi Ấm",group:e,flameMesh:s,light:o,position:t.clone(),rotation:e.rotation,hint:"[E] Sưởi Ấm / Nấu Nướng Thực Phẩm"};return e.userData=a,a}createShelter(t,e=0){const n=new bt,i=new jt(.07,.08,3.2,5),s=new F(i,this.materials.wood);s.rotation.set(0,0,Math.PI/4.5),s.position.set(-.9,1.2,1),s.castShadow=!0,n.add(s);const o=new F(i,this.materials.wood);o.rotation.set(0,0,-Math.PI/4.5),o.position.set(.9,1.2,1),o.castShadow=!0,n.add(o);const a=new F(i,this.materials.wood);a.rotation.set(0,0,Math.PI/4.5),a.position.set(-.9,1.2,-1),a.castShadow=!0,n.add(a);const c=new F(i,this.materials.wood);c.rotation.set(0,0,-Math.PI/4.5),c.position.set(.9,1.2,-1),c.castShadow=!0,n.add(c);const l=new jt(.08,.08,2.6,5);l.rotateX(Math.PI/2);const h=new F(l,this.materials.wood);h.position.set(0,2.2,0),h.castShadow=!0,n.add(h);const u=new dn(2.4,2.6);u.rotateX(-Math.PI/2.8);const d=new F(u,this.materials.leaves);d.position.set(-.7,1.2,0),d.castShadow=!0,n.add(d);const m=new dn(2.4,2.6);m.rotateX(Math.PI/2.8);const g=new F(m,this.materials.leaves);g.position.set(.7,1.2,0),g.castShadow=!0,n.add(g);const _=new gt(1.4,.15,2),p=new F(_,this.materials.leaves);p.position.set(0,.1,0),n.add(p),n.position.copy(t),n.rotation.y=e,this.scene.add(n);const f={type:"shelter",name:"Lều Trú Ẩn Lá Cọ",group:n,position:t.clone(),rotation:n.rotation,hint:"[E] Ngủ Qua Đêm & Đặt Điểm Hồi Sinh"};return n.userData=f,f}createWorkbench(t,e=0){const n=new bt,i=new gt(2.2,.2,1.3),s=new F(i,this.materials.table);s.position.set(0,.9,0),s.castShadow=!0,n.add(s);const o=new gt(.18,.8,.18);[[-.9,.45,-.45],[.9,.45,-.45],[-.9,.45,.45],[.9,.45,.45]].forEach(h=>{const u=new F(o,this.materials.wood);u.position.set(...h),u.castShadow=!0,n.add(u)});const a=new gt(.3,.15,.15),c=new F(a,this.materials.stone);c.position.set(.4,1.05,.2),n.add(c),n.position.copy(t),n.rotation.y=e,this.scene.add(n);const l={type:"workbench",name:"Bàn Cơ Khí",group:n,position:t.clone(),rotation:n.rotation,hint:"[E] Mở Bàn Chế Tạo Cơ Khí"};return n.userData=l,l}createRescueBeacon(t,e=0){const n=new bt,i=new jt(.1,.15,5.2,5);for(let g=0;g<3;g++){const _=g/3*Math.PI*2,p=new F(i,this.materials.wood);p.position.set(Math.cos(_)*1.1,2.5,Math.sin(_)*1.1),p.rotation.set(-Math.sin(_)*.25,0,Math.cos(_)*.25),p.castShadow=!0,n.add(p)}const s=new jt(1.2,.8,.8,6),o=new F(s,this.materials.stone);o.position.set(0,4.9,0),o.castShadow=!0,n.add(o);const a=new te(1.2,3.2,6),c=new F(a,this.materials.flame);c.position.set(0,6.6,0),c.visible=!1,n.add(c);const l=new vs(16750848,0,45,1.2);l.position.set(0,7,0),n.add(l);const h=new jt(1.8,.4,28,8),u=new Ke({color:13421772,transparent:!0,opacity:.65}),d=new F(h,u);d.position.set(0,20,0),d.visible=!1,n.add(d),n.position.copy(t),n.rotation.y=e,this.scene.add(n);const m={type:"beacon",name:"Đài Hiệu Cứu Hộ",group:n,flame:c,light:l,smoke:d,isLit:!1,position:t.clone(),rotation:n.rotation,hint:"[E] Thắp Sáng Bằng Đuốc Cứu Hộ"};return n.userData=m,m}igniteBeacon(t){t.isLit||(t.isLit=!0,t.flame.visible=!0,t.smoke.visible=!0,t.light.intensity=5,t.hint="Đài Hiệu Đang Rực Cháy Kêu Cứu!",this.soundManager.playBeaconIgnite(),this.soundManager.playShipFoghorn())}update(t,e){const n=Date.now()*.008;this.structures.forEach(i=>{if(i.type==="campfire"&&i.flameMesh){const s=1+Math.sin(n*3)*.12+Math.cos(n*5.2)*.08;i.flameMesh.scale.set(s,s*1.1,s),i.light.intensity=2.5+Math.sin(n*4)*.5}else if(i.type==="beacon"&&i.isLit){const s=1+Math.sin(n*4)*.15;i.flame.scale.set(s,s,s),i.light.intensity=5+Math.sin(n*6)*1}})}isPlayerNearCampfire(t,e=12){for(const n of this.structures)if(n.type==="campfire"&&n.position.distanceTo(t)<=e)return!0;return!1}}class kp{constructor(t,e){this.domElement=t,this.onActionCallback=e||(()=>{}),this.moveVector={x:0,z:0},this.isSprint=!1,this.isJump=!1,this.isCrouch=!1,this.deltaYaw=0,this.deltaPitch=0,this.keys={},this.controlMode="auto",this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>0||window.innerWidth<=1024,this.isPointerLocked=!1,this.joystick={active:!1,touchId:null,startX:0,startY:0,currentX:0,currentY:0,maxRadius:55},this.touchLook={active:!1,touchId:null,lastX:0,lastY:0},this.mouseSensitivity=.0022,this.touchSensitivity=.0045,this.init()}init(){this.bindKeyboard(),this.bindMouse(),this.bindTouch(),this.updateControlModeUI(),this.checkOrientation(),window.addEventListener("resize",()=>{this.checkOrientation(),this.controlMode==="auto"&&this.updateControlModeUI()}),window.addEventListener("orientationchange",()=>this.checkOrientation())}setControlMode(t){this.controlMode=t,t==="touch"?this.isTouchDevice=!0:t==="pc"?this.isTouchDevice=!1:this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>0||window.innerWidth<=1024,this.updateControlModeUI()}toggleControlMode(){return this.isTouchDevice?this.setControlMode("pc"):this.setControlMode("touch"),this.isTouchDevice}updateControlModeUI(){if(this.isTouchDevice){document.body.classList.add("touch-mode"),document.body.classList.remove("pc-mode");const t=document.getElementById("btn-toggle-control-mode");t&&(t.innerText="💻",t.title="Đang ở chế độ Cảm ứng. Bấm để chuyển sang Bàn phím & Chuột (PC)")}else{document.body.classList.add("pc-mode"),document.body.classList.remove("touch-mode");const t=document.getElementById("btn-toggle-control-mode");t&&(t.innerText="📱",t.title="Đang ở chế độ PC. Bấm để chuyển sang Cảm ứng Mobile/Tablet")}}bindKeyboard(){window.addEventListener("keydown",t=>{if(this.keys[t.code]=!0,t.code==="KeyE")this.onActionCallback("interact");else if(t.code==="KeyF")this.onActionCallback("fish");else if(t.code==="Tab")t.preventDefault(),this.onActionCallback("toggleInventory");else if(t.code==="KeyV")this.onActionCallback("toggleView");else if(t.code==="KeyQ")this.onActionCallback("toggleQuests");else if(t.code==="Escape")this.onActionCallback("pause");else if(t.code.startsWith("Digit")){const e=parseInt(t.code.replace("Digit",""),10);e>=1&&e<=6&&this.onActionCallback("hotbarSelect",e-1)}}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1})}bindMouse(){this.domElement.addEventListener("click",t=>{var e,n;if(!this.isPointerLocked&&!this.isTouchDevice)try{(n=(e=this.domElement).requestPointerLock)==null||n.call(e)}catch(i){console.warn("PointerLock request failed:",i)}}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===this.domElement}),document.addEventListener("mousemove",t=>{this.isPointerLocked&&(this.deltaYaw+=t.movementX*this.mouseSensitivity,this.deltaPitch+=t.movementY*this.mouseSensitivity)}),document.addEventListener("mousedown",t=>{this.isPointerLocked&&t.button===0&&this.onActionCallback("attack")})}bindTouch(){const t=document.getElementById("touch-zone-left"),e=document.getElementById("touch-zone-right"),n=document.getElementById("joystick-base"),i=document.getElementById("joystick-knob");if(!t||!e)return;t.addEventListener("touchstart",a=>{a.preventDefault();for(let c of a.changedTouches)if(!this.joystick.active){this.joystick.active=!0,this.joystick.touchId=c.identifier,this.joystick.startX=c.clientX,this.joystick.startY=c.clientY,this.joystick.currentX=c.clientX,this.joystick.currentY=c.clientY,n&&i&&(n.style.display="block",n.style.left=`${c.clientX}px`,n.style.top=`${c.clientY}px`,i.style.transform="translate(-50%, -50%)");break}},{passive:!1}),t.addEventListener("touchmove",a=>{if(a.preventDefault(),!!this.joystick.active){for(let c of a.changedTouches)if(c.identifier===this.joystick.touchId){const l=c.clientX-this.joystick.startX,h=c.clientY-this.joystick.startY,u=Math.hypot(l,h),d=Math.atan2(h,l),m=Math.min(u,this.joystick.maxRadius),g=Math.cos(d)*m,_=Math.sin(d)*m;i&&(i.style.transform=`translate(calc(-50% + ${g}px), calc(-50% + ${_}px))`);const p=m/this.joystick.maxRadius;this.moveVector.x=Math.cos(d)*p,this.moveVector.z=-Math.sin(d)*p,this.isSprint=p>.8;break}}},{passive:!1});const s=a=>{for(let c of a.changedTouches)if(c.identifier===this.joystick.touchId){this.joystick.active=!1,this.joystick.touchId=null,this.moveVector.x=0,this.moveVector.z=0,this.isSprint=!1,n&&(n.style.display="none");break}};t.addEventListener("touchend",s),t.addEventListener("touchcancel",s),e.addEventListener("touchstart",a=>{a.preventDefault();for(let c of a.changedTouches)if(!this.touchLook.active){this.touchLook.active=!0,this.touchLook.touchId=c.identifier,this.touchLook.lastX=c.clientX,this.touchLook.lastY=c.clientY;break}},{passive:!1}),e.addEventListener("touchmove",a=>{if(a.preventDefault(),!!this.touchLook.active){for(let c of a.changedTouches)if(c.identifier===this.touchLook.touchId){const l=c.clientX-this.touchLook.lastX,h=c.clientY-this.touchLook.lastY;this.deltaYaw+=l*this.touchSensitivity,this.deltaPitch+=h*this.touchSensitivity,this.touchLook.lastX=c.clientX,this.touchLook.lastY=c.clientY;break}}},{passive:!1});const o=a=>{for(let c of a.changedTouches)if(c.identifier===this.touchLook.touchId){this.touchLook.active=!1,this.touchLook.touchId=null;break}};e.addEventListener("touchend",o),e.addEventListener("touchcancel",o),this.bindTapButton("btn-action-primary",()=>this.onActionCallback("interact")),this.bindHoldButton("btn-action-jump",a=>{this.isJump=a}),this.bindHoldButton("btn-action-crouch",a=>{this.isCrouch=a}),this.bindTapButton("btn-action-fish",()=>this.onActionCallback("fish")),this.bindTapButton("btn-action-view",()=>this.onActionCallback("toggleView")),this.bindTapButton("btn-toggle-inventory",()=>this.onActionCallback("toggleInventory")),this.bindTapButton("btn-toggle-quests",()=>this.onActionCallback("toggleQuests")),this.bindTapButton("btn-toggle-settings",()=>this.onActionCallback("pause")),this.bindTapButton("btn-toggle-control-mode",()=>{const a=this.toggleControlMode();this.onActionCallback("toast",{text:`Chế độ điều khiển: ${a?"📱 Cảm ứng Mobile/Tablet":"💻 Bàn phím & Chuột PC"}`,type:"info"})})}bindHoldButton(t,e){const n=document.getElementById(t);if(!n)return;const i=o=>{o.preventDefault(),o.stopPropagation(),n.classList.add("active"),e(!0)},s=o=>{o.preventDefault(),o.stopPropagation(),n.classList.remove("active"),e(!1)};n.addEventListener("pointerdown",i),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),n.addEventListener("pointerleave",s)}bindTapButton(t,e){const n=document.getElementById(t);if(!n)return;let i=0;const s=o=>{o.preventDefault(),o.stopPropagation();const a=performance.now();a-i<140||(i=a,n.classList.add("active"),setTimeout(()=>n.classList.remove("active"),120),e())};n.addEventListener("pointerdown",s)}checkOrientation(){const t=window.innerHeight>window.innerWidth&&this.isTouchDevice,e=document.getElementById("landscape-warning");e&&(e.style.display=t?"flex":"none")}getFrameInput(){this.joystick.active||(this.moveVector.x=0,this.moveVector.z=0,this.keys.KeyW&&(this.moveVector.z+=1),this.keys.KeyS&&(this.moveVector.z-=1),this.keys.KeyA&&(this.moveVector.x-=1),this.keys.KeyD&&(this.moveVector.x+=1),this.isSprint=!!this.keys.ShiftLeft||!!this.keys.ShiftRight,this.isJump=!!this.keys.Space,this.isCrouch=!!this.keys.ControlLeft||!!this.keys.KeyZ);const t=this.deltaYaw,e=this.deltaPitch;return this.deltaYaw=0,this.deltaPitch=0,{move:this.moveVector,isSprint:this.isSprint,isJump:this.isJump,isCrouch:this.isCrouch,deltaYaw:t,deltaPitch:e}}}class Gp{constructor(t,e,n,i,s,o,a){this.camera=t,this.islandWorld=e,this.foliageManager=n,this.wildlifeManager=i,this.structuresManager=s,this.gameState=o,this.soundManager=a,this.raycaster=new Ip,this.raycaster.far=4.8,this.currentTarget=null,this.targetData=null,this.hintEl=document.getElementById("crosshair-hint"),this.crosshairEl=document.getElementById("crosshair"),this.mobileActionBtn=document.getElementById("btn-action-primary"),this.mobileActionLabel=document.getElementById("mobile-action-label"),this.mobileActionIcon=document.getElementById("mobile-action-icon")}findInteractiveRoot(t){let e=t;for(;e;){if(e.userData&&e.userData.type)return e;e=e.parent}return null}update(t){this.raycaster.setFromCamera(new Gt(0,0),this.camera);const e=[...this.foliageManager.interactiveObjects,...this.wildlifeManager.interactiveEntities,...this.structuresManager.interactiveStructures];this.islandWorld.freshwaterPool&&e.push(this.islandWorld.freshwaterPool);const n=this.raycaster.intersectObjects(e,!0);if(n.length>0){const i=n[0],s=this.findInteractiveRoot(i.object);if(s&&s.userData){this.currentTarget=s,this.targetData=s.userData,this.updateHintUI(this.targetData,t);return}}this.currentTarget=null,this.targetData=null,this.resetHintUI()}updateHintUI(t,e){this.crosshairEl&&this.crosshairEl.classList.add("targeted"),this.mobileActionBtn&&this.mobileActionBtn.classList.add("targeted");let n=t.hint||t.name||"",i="👊",s="HÀNH ĐỘNG";if(t.type==="tree")i="🪓",s="CHẶT CÂY";else if(t.type==="rock")i="⛏️",s="ĐẬP ĐÁ";else if(t.type==="pickup")i="✋",s="NHẶT ĐỒ";else if(t.type==="freshwater_pool")i="💧",s="UỐNG NƯỚC";else if(t.type==="fish_school")i="🎣",s="CÂU CÁ";else if(t.category==="wildlife"||t.type==="boar"||t.type==="shark")i=t.icon||"⚔️",s="TẤN CÔNG";else if(t.type==="chest")i="📦",s="LỤC RƯƠNG";else if(t.type==="campfire"){const o=this.gameState.getItemCount("raw_meat")>0,a=this.gameState.getItemCount("raw_fish")>0;o||a?(n="[E] Nướng Thịt / Nướng Cá Chín",i="🥩",s="NẤU NƯỚNG"):(n="[E] Sưởi Ấm Bên Lửa Trại",i="🔥",s="SƯỞI ẤM")}else t.type==="shelter"?(i="🛖",s="ĐI NGỦ"):t.type==="workbench"?(i="🛠️",s="CHẾ TẠO"):t.type==="beacon"&&(i="🗼",s="THẮP SÁNG");this.hintEl&&(this.hintEl.innerText=n,this.hintEl.style.display="block"),this.mobileActionLabel&&(this.mobileActionLabel.innerText=s),this.mobileActionIcon&&(this.mobileActionIcon.innerText=i)}resetHintUI(){this.crosshairEl&&this.crosshairEl.classList.remove("targeted"),this.mobileActionBtn&&this.mobileActionBtn.classList.remove("targeted"),this.hintEl&&(this.hintEl.style.display="none"),this.mobileActionLabel&&(this.mobileActionLabel.innerText="TƯƠNG TÁC"),this.mobileActionIcon&&(this.mobileActionIcon.innerText="👊")}handleInteract(t,e){if(t.triggerSwing(),this.gameState.player.stamina<5){this.gameState.notify("toast",{text:"⚡ Bạn đang kiệt sức! Hãy nghỉ ngơi để hồi thể lực.",type:"warn"});return}this.gameState.player.stamina=Math.max(0,this.gameState.player.stamina-4),this.gameState.getActiveItem();const n=this.gameState.getActiveItemDef();let i=20;if(n&&(n.id==="pickaxe"?i=45:n.id==="axe"?i=35:n.id==="spear"&&(i=50)),!this.targetData){this.soundManager.playSwing();return}const s=this.targetData;if(s.type==="tree"){this.soundManager.playChop();const o=n&&n.id==="axe"?40:20;this.foliageManager.damageTree(s,o)&&(this.gameState.stats.treesChopped+=1,this.gameState.notify("toast",{text:"🌴 Cây cọ đổ xuống! Gỗ và lá đã rơi ra.",type:"info"}),this.currentTarget=null,this.targetData=null,this.resetHintUI())}else if(s.type==="rock"){this.soundManager.playMine();const o=n&&n.id==="pickaxe"?55:n&&n.id==="axe"?40:25;this.foliageManager.damageRock(s,o)&&(this.gameState.notify("toast",{text:"🪨 Mỏm đá vỡ vụn! Bạn nhận được đá thô.",type:"info"}),this.currentTarget=null,this.targetData=null,this.resetHintUI())}else if(s.type==="pickup")this.gameState.addItem(s.itemId,s.count||1)?(this.soundManager.playPickup(),this.gameState.notify("toast",{text:`+${s.count||1} ${s.name}`,type:"success"}),this.foliageManager.removePickup(s),this.currentTarget=null,this.targetData=null,this.resetHintUI()):this.gameState.notify("toast",{text:"🎒 Túi đồ đã đầy!",type:"warn"});else if(s.type==="freshwater_pool")this.soundManager.playDrink(),this.gameState.drinkFreshwater(),this.gameState.notify("toast",{text:"💧 Đã uống nước suối mát lạnh (+40 Nước)",type:"info"});else if(s.category==="wildlife"||s.type==="boar"||s.type==="shark"){const o=this.wildlifeManager.damageEntity(s,i);o&&o.killed&&(this.gameState.stats.animalsHunted+=1,this.gameState.notify("toast",{text:`⚔️ Bạn đã hạ gục ${s.name}! Vật phẩm đã rơi ra.`,type:"success"}),this.currentTarget=null,this.targetData=null,this.resetHintUI())}else s.type==="chest"?s.isOpened?this.gameState.notify("toast",{text:"Rương này đã được mở rồi.",type:"info"}):(s.isOpened=!0,this.soundManager.playVictory(),this.gameState.addItem("scrap_metal",4),s.hint="Rương báu xác tàu đã mở",this.gameState.notify("toast",{text:"💎 Đã mở Rương Xác Tàu: Nhận +4 Sắt Vụn!",type:"success"})):s.type==="campfire"?this.gameState.getItemCount("raw_meat")>0?(this.gameState.removeItem("raw_meat",1),this.gameState.addItem("cooked_meat",1),this.soundManager.playEat(),this.gameState.notify("toast",{text:"🍖 Nướng thành công: +1 Thịt Nướng thơm ngon!",type:"success"})):this.gameState.getItemCount("raw_fish")>0?(this.gameState.removeItem("raw_fish",1),this.gameState.addItem("cooked_fish",1),this.soundManager.playEat(),this.gameState.notify("toast",{text:"🍱 Nướng thành công: +1 Cá Nướng béo ngậy!",type:"success"})):(this.gameState.player.isWarm=!0,this.gameState.notify("toast",{text:"🔥 Ngọn lửa trại ấm áp sưởi ấm cơ thể bạn.",type:"info"})):s.type==="shelter"?(this.gameState.sleep(),this.gameState.player.respawnPos={x:t.position.x,y:t.position.y,z:t.position.z},this.gameState.notify("toast",{text:"🛖 Đã ngủ qua đêm đến bình minh 06:00! Máu và thể lực đã hồi phục.",type:"success"})):s.type==="workbench"?(this.gameState.isNearWorkbench=!0,this.gameState.notify("openWorkbench")):s.type==="beacon"&&(this.gameState.getItemCount("torch")>0||n&&n.id==="torch"?(this.structuresManager.igniteBeacon(s),this.gameState.updateQuestObjective("ignite_beacon","ignited",1),this.gameState.notify("toast",{text:"🗼 ĐÀI HIỆU ĐÃ ĐƯỢC THẮP SÁNG! TÀU CỨU HỘ ĐANG TỚI!",type:"success"}),e&&e()):this.gameState.notify("toast",{text:"🔥 Bạn cần cầm theo Đuốc Lửa để thắp sáng Đài Hiệu!",type:"warn"}))}handleFishing(t){const e=this.gameState.getActiveItemDef();if(!e||e.id!=="fishing_rod"){this.gameState.notify("toast",{text:"🎣 Bạn cần trang bị Cần Câu để câu cá!",type:"warn"});return}if(!(this.islandWorld.getHeightAt(t.position.x,t.position.z)<.6||t.position.distanceTo(new b(0,1.45,0))<12)){this.gameState.notify("toast",{text:"🌊 Bạn cần đứng sát mép biển hoặc suối nước ngọt để câu cá!",type:"warn"});return}t.triggerSwing(),this.soundManager.playSplash(),this.gameState.notify("toast",{text:"🎣 Đang thả mồi câu cá... Hãy kiên nhẫn...",type:"info"}),setTimeout(()=>{this.soundManager.playFishBite(),this.gameState.addItem("raw_fish",1),this.gameState.stats.fishCaught+=1,this.gameState.notify("toast",{text:"🐟 Cắn câu rồi! Bạn đã bắt được 1 Con Cá Tươi!",type:"success"})},1800)}}class zp{constructor(t,e){this.canvas=t,this.ctx=t.getContext("2d"),this.islandWorld=e,this.width=t.width||130,this.height=t.height||130,this.cx=this.width/2,this.cy=this.height/2,this.radius=this.width/2-4,this.zoom=1.1,this.radarAngle=0,this.coordsEl=document.getElementById("minimap-coords"),this.northEl=document.getElementById("minimap-north"),this.islandCanvas=null,this.islandSize=320,this.islandResolution=256,this.initIslandMap()}initIslandMap(){this.islandCanvas=document.createElement("canvas"),this.islandCanvas.width=this.islandResolution,this.islandCanvas.height=this.islandResolution;const t=this.islandCanvas.getContext("2d"),e=this.islandResolution,n=this.islandSize/2,i=t.createImageData(e,e),s=i.data;for(let o=0;o<e;o++)for(let a=0;a<e;a++){const c=a/e*this.islandSize-n,l=o/e*this.islandSize-n,h=this.islandWorld.getHeightAt(c,l),u=(o*e+a)*4;h<0?h<-2?(s[u]=12,s[u+1]=45,s[u+2]=85,s[u+3]=255):(s[u]=22,s[u+1]=95,s[u+2]=135,s[u+3]=255):h<.8?(s[u]=210,s[u+1]=185,s[u+2]=130,s[u+3]=255):h<3.2?(s[u]=45,s[u+1]=125,s[u+2]=55,s[u+3]=255):(s[u]=95,s[u+1]=105,s[u+2]=115,s[u+3]=255),Math.hypot(c,l)<6.5&&(s[u]=56,s[u+1]=189,s[u+2]=248,s[u+3]=255)}t.putImageData(i,0,0)}update(t,e,n){if(!this.ctx||!t)return;const i=this.ctx,s=t.position.x,o=t.position.z,a=t.rotationY;if(this.coordsEl&&(this.coordsEl.innerText=`X: ${Math.round(s)} | Z: ${Math.round(o)}`),i.clearRect(0,0,this.width,this.height),i.save(),i.beginPath(),i.arc(this.cx,this.cy,this.radius,0,Math.PI*2),i.clip(),i.fillStyle="#0c2d48",i.fillRect(0,0,this.width,this.height),this.islandCanvas){i.save(),i.translate(this.cx,this.cy);const m=this.islandResolution/this.islandSize*(1/this.zoom),g=this.islandSize*m,_=(-this.islandSize/2-s)*m,p=(-this.islandSize/2-o)*m;i.drawImage(this.islandCanvas,_,p,g,g),i.restore()}const c=(m,g)=>{const _=(m-s)*(1/this.zoom),p=(g-o)*(1/this.zoom);return{x:this.cx+_,y:this.cy+p,inBounds:Math.hypot(_,p)<=this.radius-2}},l=c(0,0);l.inBounds&&(i.fillStyle="#38bdf8",i.beginPath(),i.arc(l.x,l.y,4,0,Math.PI*2),i.fill());const h=c(120,-95);h.inBounds&&(i.fillStyle="#f59e0b",i.beginPath(),i.arc(h.x,h.y,4,0,Math.PI*2),i.fill(),i.strokeStyle="#fff",i.lineWidth=1,i.stroke()),n&&n.structures&&n.structures.forEach(m=>{const g=c(m.position.x,m.position.z);g.inBounds&&(i.beginPath(),m.type==="campfire"?(i.fillStyle="#ef4444",i.arc(g.x,g.y,3.5,0,Math.PI*2)):m.type==="shelter"?(i.fillStyle="#10b981",i.arc(g.x,g.y,4,0,Math.PI*2)):m.type==="workbench"?(i.fillStyle="#8b5cf6",i.arc(g.x,g.y,3.5,0,Math.PI*2)):m.type==="beacon"&&(i.fillStyle=m.isLit?"#fbbf24":"#64748b",i.arc(g.x,g.y,5,0,Math.PI*2)),i.fill())}),e&&(e.landAnimals&&e.landAnimals.forEach(m=>{const g=c(m.group.position.x,m.group.position.z);g.inBounds&&(i.beginPath(),i.arc(g.x,g.y,2.5,0,Math.PI*2),i.fillStyle=m.state==="charge"?"#ef4444":m.isPassive?"#a3e635":"#fbbf24",i.fill())}),e.seaAnimals&&e.seaAnimals.forEach(m=>{const g=c(m.group.position.x,m.group.position.z);g.inBounds&&(i.beginPath(),i.arc(g.x,g.y,m.type==="shark"?3.5:2.5,0,Math.PI*2),i.fillStyle=m.type==="shark"?m.state==="charge"?"#dc2626":"#f97316":"#38bdf8",i.fill())})),this.radarAngle+=.035,i.save(),i.translate(this.cx,this.cy),i.rotate(this.radarAngle);const u=i.createLinearGradient(0,0,this.radius,0);u.addColorStop(0,"rgba(56, 189, 248, 0.25)"),u.addColorStop(1,"rgba(56, 189, 248, 0.0)"),i.fillStyle=u,i.beginPath(),i.moveTo(0,0),i.arc(0,0,this.radius,0,.45),i.lineTo(0,0),i.fill(),i.restore(),i.save(),i.translate(this.cx,this.cy);const d=-a-Math.PI/2;i.beginPath(),i.moveTo(0,0),i.arc(0,0,24,d-.45,d+.45),i.lineTo(0,0),i.fillStyle="rgba(56, 189, 248, 0.35)",i.fill(),i.rotate(d),i.beginPath(),i.moveTo(7,0),i.lineTo(-4,-4),i.lineTo(-2,0),i.lineTo(-4,4),i.closePath(),i.fillStyle="#38bdf8",i.fill(),i.strokeStyle="#ffffff",i.lineWidth=1,i.stroke(),i.restore(),i.restore(),i.beginPath(),i.arc(this.cx,this.cy,this.radius,0,Math.PI*2),i.strokeStyle="rgba(56, 189, 248, 0.5)",i.lineWidth=2,i.stroke(),i.beginPath(),i.arc(this.cx,this.cy,this.radius*.5,0,Math.PI*2),i.strokeStyle="rgba(255, 255, 255, 0.12)",i.lineWidth=1,i.stroke(),i.fillStyle="#38bdf8",i.font="bold 10px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("N",this.cx,9)}}class Vp{constructor(){this.container=document.getElementById("canvas-container"),this.clock=new Pp,this.isPlaying=!1,this.isPaused=!1,this.selectedInvSlot=null,this.isCutsceneActive=!1,this.cutsceneTimer=0,this.cutsceneVictoryPlayed=!1,this.initThree(),this.initSystems(),this.initUI(),this.initCharacterPreview(),this.checkSavedGame(),window.addEventListener("resize",()=>this.onWindowResize()),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}initThree(){this.scene=new pa,this.camera=new Te(70,window.innerWidth/window.innerHeight,.1,800),this.renderer=new fa({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ba,this.renderer.toneMapping=Ca,this.renderer.toneMappingExposure=1.1,this.container.appendChild(this.renderer.domElement)}initSystems(){this.islandWorld=new Np(this.scene),this.foliageManager=new Fp(this.scene,this.islandWorld),this.structuresManager=new Bp(this.scene,this.islandWorld,_e),this.wildlifeManager=new Op(this.scene,this.islandWorld,this.foliageManager,_e),this.player=new Ea(this.scene,this.camera,this.islandWorld,it.player.gender),this.player.position.copy(it.player.respawnPos),this.player.position.y=this.islandWorld.getHeightAt(this.player.position.x,this.player.position.z)+.1,this.interactionSystem=new Gp(this.camera,this.islandWorld,this.foliageManager,this.wildlifeManager,this.structuresManager,it,_e),this.inputManager=new kp(this.renderer.domElement,(e,n)=>{this.handleGameAction(e,n)});const t=document.getElementById("minimap-canvas");t&&(this.minimap=new zp(t,this.islandWorld)),setInterval(()=>{this.isPlaying&&!this.isPaused&&!this.isCutsceneActive&&ii.saveGame(it,this.structuresManager.structures)},25e3)}handleGameAction(t,e){!this.isPlaying||this.isCutsceneActive||(t==="interact"||t==="attack"?(_e.ensureContext(),this.interactionSystem.handleInteract(this.player,()=>this.startRescueCutscene())):t==="fish"?(_e.ensureContext(),this.interactionSystem.handleFishing(this.player)):t==="toggleInventory"?this.toggleInventory():t==="toggleView"?(this.player.toggleViewMode(),this.showToast(`Góc nhìn: ${this.player.viewMode==="first_person"?"Thứ nhất (1st)":"Thứ ba (3rd)"}`)):t==="toggleQuests"?this.toggleQuestsPanel():t==="pause"?this.toggleSettingsModal():t==="hotbarSelect"?it.setActiveHotbarIndex(e):t==="toast"&&this.showToast(e.text,e.type))}initCharacterPreview(){const t=document.getElementById("char-preview-canvas");if(!t)return;const e=t.clientWidth||180,n=t.clientHeight||220;this.previewScene=new pa,this.previewCamera=new Te(48,e/n,.1,50),this.previewCamera.position.set(0,1.25,2.7),this.previewCamera.lookAt(0,.95,0),this.previewRenderer=new fa({canvas:t,alpha:!0,antialias:!0}),this.previewRenderer.setSize(e,n,!1),this.previewRenderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=new rc(16775917,1.4);i.position.set(2,3,2),this.previewScene.add(i);const s=new oc(14676223,.7);this.previewScene.add(s);const o=new vs(16096779,1.2,5);o.position.set(0,.1,.8),this.previewScene.add(o);const a=new jt(.85,.95,.18,16),c=new nt({color:4674921,roughness:.9,flatShading:!0}),l=new F(a,c);l.position.set(0,-.09,0),this.previewScene.add(l),this.previewPlayer=new Ea(this.previewScene,this.previewCamera,this.islandWorld,it.player.gender),this.previewPlayer.viewMode="third_person",this.previewPlayer.updateViewMode(),this.previewPlayer.position.set(0,0,0)}updateCharacterPreview(t){this.previewPlayer&&this.previewRenderer&&(this.previewPlayer.modelGroup.rotation.y+=t*.8,this.previewPlayer.bones.pelvis&&(this.previewPlayer.bones.pelvis.position.y=.95+Math.sin(Date.now()*.003)*.02),this.previewRenderer.render(this.previewScene,this.previewCamera))}initUI(){var a,c,l,h,u,d,m,g,_,p,f,w,E,x;const t=document.getElementById("gender-male-btn"),e=document.getElementById("gender-female-btn");t==null||t.addEventListener("click",()=>{var I;t.classList.add("active"),e.classList.remove("active"),it.player.gender="male",this.player.setGender("male"),(I=this.previewPlayer)==null||I.setGender("male")}),e==null||e.addEventListener("click",()=>{var I;e.classList.add("active"),t.classList.remove("active"),it.player.gender="female",this.player.setGender("female"),(I=this.previewPlayer)==null||I.setGender("female")}),(a=document.getElementById("btn-start-game"))==null||a.addEventListener("click",()=>{this.startGame(!1)}),(c=document.getElementById("btn-continue-game"))==null||c.addEventListener("click",()=>{this.startGame(!0)}),(l=document.getElementById("quests-header"))==null||l.addEventListener("click",()=>{this.toggleQuestsPanel()}),(h=document.getElementById("btn-close-inventory"))==null||h.addEventListener("click",()=>{this.toggleInventory(!1)}),(u=document.getElementById("btn-close-settings"))==null||u.addEventListener("click",()=>{this.toggleSettingsModal(!1)}),(d=document.getElementById("btn-open-settings"))==null||d.addEventListener("click",()=>{this.toggleSettingsModal(!0)}),(m=document.getElementById("btn-resume-game"))==null||m.addEventListener("click",()=>{this.toggleSettingsModal(!1)}),(g=document.getElementById("btn-save-quit"))==null||g.addEventListener("click",()=>{ii.saveGame(it,this.structuresManager.structures),location.reload()}),(_=document.getElementById("btn-skip-cutscene"))==null||_.addEventListener("click",()=>{this.endRescueCutscene()});const n=document.getElementById("tab-backpack"),i=document.getElementById("tab-crafting"),s=document.getElementById("view-backpack"),o=document.getElementById("view-crafting");n==null||n.addEventListener("click",()=>{n.classList.add("active"),i.classList.remove("active"),s.style.display="grid",o.style.display="none",this.renderInventory()}),i==null||i.addEventListener("click",()=>{i.classList.add("active"),n.classList.remove("active"),s.style.display="none",o.style.display="grid",this.renderCrafting()}),(p=document.getElementById("btn-item-use"))==null||p.addEventListener("click",()=>{this.selectedInvSlot!==null&&it.useSlot(this.selectedInvSlot)&&(_e.playEat(),this.renderInventory(),this.updateItemDetail(this.selectedInvSlot))}),(f=document.getElementById("btn-item-build"))==null||f.addEventListener("click",()=>{this.selectedInvSlot!==null&&this.buildHeldStructure(this.selectedInvSlot)}),(w=document.getElementById("btn-respawn"))==null||w.addEventListener("click",()=>{this.respawnPlayer()}),(E=document.getElementById("btn-continue-freeplay"))==null||E.addEventListener("click",()=>{document.getElementById("screen-victory").style.display="none",this.isPaused=!1,document.getElementById("hud-overlay").style.display="flex"}),(x=document.getElementById("btn-restart-game"))==null||x.addEventListener("click",()=>{ii.clearSave(),location.reload()}),this.bindSettingsControls(),it.subscribe((I,C)=>{I==="hotbarChange"?(this.player.setEquippedItem(it.getActiveItemDef()),this.renderHotbar()):I==="inventoryUpdate"?(this.renderHotbar(),this.renderInventory(),this.renderCrafting()):I==="toast"?this.showToast(C.text,C.type):I==="questCompleted"?(this.showToast(`⭐ HOÀN THÀNH NHIỆM VỤ: ${C.title}!`,"success"),_e.playCraft(),this.renderQuests()):I==="questUpdated"?this.renderQuests():I==="newDay"?this.showToast(`🌅 Bình minh Ngày ${C}! Một ngày sinh tồn mới bắt đầu.`,"info"):I==="openWorkbench"&&(this.toggleInventory(!0),i.click())}),this.renderHotbar(),this.renderQuests()}bindSettingsControls(){const t=document.getElementById("setting-graphics"),e=document.getElementById("setting-control-mode"),n=document.getElementById("setting-vol-master"),i=document.getElementById("setting-vol-sfx"),s=document.getElementById("setting-vol-ambient"),o=document.getElementById("setting-sens-mouse"),a=document.getElementById("setting-sens-touch");t==null||t.addEventListener("change",c=>{const l=c.target.value;l==="low"?(this.renderer.setPixelRatio(1),this.renderer.shadowMap.enabled=!1):l==="balanced"?(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),this.renderer.shadowMap.enabled=!0):(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.shadowMap.enabled=!0)}),e==null||e.addEventListener("change",c=>{this.inputManager.setControlMode(c.target.value)}),n==null||n.addEventListener("input",c=>{_e.setMasterVolume(c.target.value/100)}),i==null||i.addEventListener("input",c=>{_e.setSfxVolume(c.target.value/100)}),s==null||s.addEventListener("input",c=>{_e.setAmbientVolume(c.target.value/100)}),o==null||o.addEventListener("input",c=>{this.inputManager.mouseSensitivity=c.target.value/10*.0022}),a==null||a.addEventListener("input",c=>{this.inputManager.touchSensitivity=c.target.value/10*.0035})}checkSavedGame(){if(ii.hasSave()){const t=document.getElementById("btn-continue-game");t&&(t.style.display="inline-block")}}startGame(t=!1){if(_e.init(),t){const e=ii.loadGame(it);e&&e.length>0&&e.forEach(n=>{this.structuresManager.buildStructure(n.type,new b(n.x,n.y,n.z),n.rotationY)}),this.player.position.set(it.player.currentPos.x,it.player.currentPos.y,it.player.currentPos.z)}document.getElementById("screen-start").style.display="none",document.getElementById("hud-overlay").style.display="flex",this.isPlaying=!0,this.isPaused=!1,this.player.setEquippedItem(it.getActiveItemDef()),this.showToast("🏝️ Chào mừng đến với Kỷ Nguyên Đồ Đá! Hãy bắt đầu nhặt cành gỗ và đá cuội.","info")}buildHeldStructure(t){const e=it.inventory[t];if(!e)return;const n=cn[e.id];if(!n||n.type!=="buildable")return;const i=new b(0,0,-1).applyAxisAngle(new b(0,1,0),this.player.rotationY),s=this.player.position.clone().addScaledVector(i,2.5);if(s.y=this.islandWorld.getHeightAt(s.x,s.z),s.y<.2){this.showToast("⚠️ Bạn không thể xây dựng công trình dưới biển!","warn");return}this.structuresManager.buildStructure(n.buildType,s,this.player.rotationY)&&(it.removeItem(e.id,1),it.stats.structuresBuilt+=1,n.buildType==="campfire"&&it.updateQuestObjective("build_base","campfire",1),n.buildType==="shelter"&&it.updateQuestObjective("build_base","shelter",1),this.showToast(`Đã xây dựng thành công: ${n.name}!`,"success"),this.toggleInventory(!1),ii.saveGame(it,this.structuresManager.structures))}toggleInventory(t){const e=document.getElementById("modal-inventory"),n=e.style.display!=="none",i=t!==void 0?t:!n;e.style.display=i?"flex":"none",this.isPaused=i,i&&(document.exitPointerLock&&document.exitPointerLock(),this.renderInventory(),this.renderCrafting())}toggleQuestsPanel(){const t=document.getElementById("quests-container"),e=document.getElementById("quests-toggle-icon");t&&(t.classList.toggle("collapsed"),e&&(e.innerText=t.classList.contains("collapsed")?"▼":"▲"))}toggleSettingsModal(t){const e=document.getElementById("modal-settings"),n=e.style.display!=="none",i=t!==void 0?t:!n;e.style.display=i?"flex":"none",this.isPaused=i}renderHotbar(){const t=document.getElementById("hotbar");if(t){t.innerHTML="";for(let e=0;e<6;e++){const n=it.inventory[e],i=n?cn[n.id]:null,s=document.createElement("div");s.className=`hotbar-slot ${e===it.activeHotbarIndex?"active":""}`,s.innerHTML=`
        <span class="slot-key">${e+1}</span>
        <span class="slot-icon">${i?i.icon:""}</span>
        ${n&&n.count>1?`<span class="slot-count">${n.count}</span>`:""}
      `,s.addEventListener("click",()=>{it.setActiveHotbarIndex(e)}),t.appendChild(s)}}}renderInventory(){const t=document.getElementById("inv-grid-hotbar"),e=document.getElementById("inv-grid-backpack");if(!(!t||!e)){t.innerHTML="",e.innerHTML="";for(let n=0;n<24;n++){const i=it.inventory[n],s=i?cn[i.id]:null,o=document.createElement("div");o.className=`hotbar-slot ${this.selectedInvSlot===n?"active":""}`,o.innerHTML=`
        <span class="slot-icon">${s?s.icon:""}</span>
        ${i&&i.count>1?`<span class="slot-count">${i.count}</span>`:""}
      `,o.addEventListener("click",()=>{this.selectedInvSlot=n,this.renderInventory(),this.updateItemDetail(n)}),n<6?t.appendChild(o):e.appendChild(o)}}}updateItemDetail(t){const e=it.inventory[t],n=e?cn[e.id]:null,i=document.getElementById("item-detail-icon"),s=document.getElementById("item-detail-name"),o=document.getElementById("item-detail-desc"),a=document.getElementById("btn-item-use"),c=document.getElementById("btn-item-build");if(!n){i.innerText="🎒",s.innerText="Ô Trống",o.innerText="Không có vật phẩm nào trong ô này.",a.disabled=!0,c.style.display="none";return}i.innerText=n.icon,s.innerText=`${n.name} ${e.count>1?`(x${e.count})`:""}`,o.innerText=n.description,n.consumable?(a.disabled=!1,a.style.display="block",a.innerText="SỬ DỤNG / ĂN",c.style.display="none"):n.type==="buildable"?(a.style.display="none",c.style.display="block"):(a.disabled=!0,a.style.display="block",a.innerText="ĐÃ TRANG BỊ",c.style.display="none")}renderCrafting(){const t=document.getElementById("crafting-recipe-list");t&&(t.innerHTML="",Dp.forEach(e=>{var c;const n=cn[e.resultId],i=it.canCraft(e);let s=Object.entries(e.req).map(([l,h])=>{var u;return`${((u=cn[l])==null?void 0:u.name)||l}: ${it.getItemCount(l)}/${h}`}).join(" | ");const o=e.requiresWorkbench?it.isNearWorkbench?' • <span style="color:#10b981;">(Đã ở gần Bàn Cơ Khí)</span>':' • <span style="color:#f87171;">(Cần Bàn Cơ Khí)</span>':"",a=document.createElement("div");a.className=`recipe-item ${i?"":"disabled"}`,a.innerHTML=`
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">${(n==null?void 0:n.icon)||"🔨"}</span>
          <div>
            <div style="font-weight: 700; font-size: 13px;">${(n==null?void 0:n.name)||e.resultId}</div>
            <div style="font-size: 11px; color: #94a3b8;">${s}${o}</div>
          </div>
        </div>
        <button class="recipe-btn" ${i?"":"disabled"}>Chế tạo</button>
      `,(c=a.querySelector("button"))==null||c.addEventListener("click",l=>{l.stopPropagation(),it.craft(e)&&(_e.playCraft(),this.showToast(`Đã chế tạo thành công: ${n.name}!`,"success"),this.renderCrafting(),this.renderInventory())}),t.appendChild(a)}))}renderQuests(){const t=document.getElementById("quest-list");t&&(t.innerHTML="",it.quests.forEach(e=>{const n=document.createElement("div");n.className=`quest-item ${e.completed?"completed":""}`,n.innerHTML=`
        <span class="quest-check">${e.completed?"✅":"⬜"}</span>
        <div>
          <div style="font-weight: 700;">${e.title}</div>
          <div style="font-size: 11px; opacity: 0.85;">${e.desc}</div>
        </div>
      `,t.appendChild(n)}))}updateHUD(){const t=document.getElementById("compass-tape"),e=document.getElementById("shipwreck-dist-text"),i=(Sn.radToDeg(this.player.rotationY)%360+360)%360,s=["N","NE","E","SE","S","SW","W","NW"],o=Math.round(i/45)%8;t&&(t.innerText=`• • ${s[o]} • • (${Math.round(i)}°)`);const a=Math.round(this.player.position.distanceTo(new b(120,-1.2,-95)));e&&(e.innerText=`${a}m`);const c=document.getElementById("day-badge"),l=document.getElementById("time-badge"),h=it.dayTime*24,u=Math.floor(h),d=Math.floor((h-u)*60),m=it.dayTime>.75||it.dayTime<.25;if(c&&(c.innerText=`Ngày ${it.dayCount}`),l){const x=String(u).padStart(2,"0"),I=String(d).padStart(2,"0");l.innerText=`${x}:${I} ${m?"🌙":"☀️"}`}const g=(x,I,C)=>{const A=document.getElementById(`bar-${x}`),P=document.getElementById(`val-${x}`),S=Math.max(0,Math.min(100,I/C*100));A&&(A.style.width=`${S}%`),P&&(P.innerText=Math.round(I))};g("health",it.player.health,it.player.maxHealth),g("stamina",it.player.stamina,it.player.maxStamina),g("food",it.player.food,it.player.maxFood),g("water",it.player.water,it.player.maxWater);const _=document.getElementById("oxygen-row");_&&(_.style.display=it.player.isUnderwater?"flex":"none",it.player.isUnderwater&&g("oxygen",it.player.oxygen,it.player.maxOxygen));const p=document.getElementById("temp-badge");p&&(it.player.isFreezing?(p.className="temp-cold",p.innerText="❄️ Đang Bị Lạnh Giá!"):it.player.isWarm?(p.className="temp-warm",p.innerText="🔥 Ấm Áp"):(p.className="temp-warm",p.innerText="☀️ Thân Nhiệt Ổn Định"));const f=document.getElementById("frost-overlay");f&&f.classList.toggle("active",it.player.isFreezing);const w=document.getElementById("warmth-overlay");w&&w.classList.toggle("active",it.player.isWarm&&!it.player.isFreezing);const E=document.getElementById("underwater-overlay");E&&E.classList.toggle("active",it.player.isUnderwater),this.islandWorld.setUnderwaterMode(it.player.isUnderwater),it.player.health<=0&&this.isPlaying&&this.triggerGameOver("Bạn đã gục ngã vì kiệt sức hoặc bị thú dữ tấn công!")}showToast(t,e="info"){const n=document.getElementById("toast-container");if(!n)return;const i=document.createElement("div");i.className=`toast ${e}`,i.innerText=t,n.appendChild(i),setTimeout(()=>{i.parentNode&&i.parentNode.removeChild(i)},3200)}onPlayerDamage(t,e){it.player.health=Math.max(0,it.player.health-t),_e.playPlayerHurt();const n=document.getElementById("hud-overlay");n&&(n.style.boxShadow="inset 0 0 80px rgba(239, 68, 68, 0.7)",setTimeout(()=>{n.style.boxShadow="none"},350)),this.showToast(`⚠️ -${t} Máu! ${e}`,"warn"),it.player.health<=0&&this.triggerGameOver(e)}triggerGameOver(t){this.isPlaying=!1,_e.playGameOver(),document.getElementById("hud-overlay").style.display="none";const e=document.getElementById("screen-gameover");e&&(e.style.display="flex",document.getElementById("gameover-reason").innerText=t,document.getElementById("go-stat-days").innerText=`${it.stats.daysSurvived} Ngày`,document.getElementById("go-stat-hunts").innerText=`${it.stats.animalsHunted} Con`,document.getElementById("go-stat-trees").innerText=`${it.stats.treesChopped} Cây`)}respawnPlayer(){it.player.health=80,it.player.food=60,it.player.water=60,it.player.stamina=100,this.player.position.set(it.player.respawnPos.x,it.player.respawnPos.y,it.player.respawnPos.z),document.getElementById("screen-gameover").style.display="none",document.getElementById("hud-overlay").style.display="flex",this.isPlaying=!0,this.showToast("🔄 Bạn đã hồi sinh an toàn! Hãy tiếp tục sinh tồn.","success")}startRescueCutscene(){if(this.isCutsceneActive)return;this.isCutsceneActive=!0,this.cutsceneTimer=0,this.cutsceneVictoryPlayed=!1,document.getElementById("hud-overlay").style.display="none";const t=document.getElementById("cutscene-container");t&&(t.style.display="flex"),this.islandWorld.startRescueShipCutscene(this.player.position),_e.playShipFoghorn()}updateRescueCutscene(t){this.cutsceneTimer+=t,this.islandWorld.update(t,it.dayTime,this.player.position),this.structuresManager.update(t,this.player.position);const n=(this.structuresManager.structures.find(o=>o.type==="beacon"&&o.isLit)||{position:this.player.position}).position,i=this.islandWorld.rescueShip,s=i?i.position:this.player.position;if(this.cutsceneTimer<3.5){const o=this.cutsceneTimer*.5;this.camera.position.set(n.x+Math.cos(o)*14,n.y+6+Math.sin(this.cutsceneTimer*.4)*2,n.z+Math.sin(o)*14),this.camera.lookAt(n.x,n.y+4.5,n.z)}else if(this.cutsceneTimer<9.5){const o=new b(s.x+18,9,s.z+18);this.camera.position.lerp(o,.08),this.camera.lookAt(s.x,s.y+3,s.z)}else this.cutsceneTimer<11.5?(this.cutsceneVictoryPlayed||(this.cutsceneVictoryPlayed=!0,_e.playVictory()),this.camera.position.set(n.x+12,n.y+4,n.z+10),this.camera.lookAt(s.x,s.y+3,s.z)):this.endRescueCutscene()}endRescueCutscene(){this.isCutsceneActive=!1;const t=document.getElementById("cutscene-container");t&&(t.style.display="none"),this.showVictoryScreen()}showVictoryScreen(){this.isPaused=!0,_e.playVictory();const t=document.getElementById("screen-victory");t&&(t.style.display="flex",document.getElementById("vic-stat-days").innerText=`${it.stats.daysSurvived} Ngày`,document.getElementById("vic-stat-hunts").innerText=`${it.stats.animalsHunted} Con`,document.getElementById("vic-stat-structs").innerText=`${it.stats.structuresBuilt} Công Trình`,document.getElementById("vic-stat-fish").innerText=`${it.stats.fishCaught} Con Cá`)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.1);if(this.previewPlayer&&this.updateCharacterPreview(t),this.isCutsceneActive){this.updateRescueCutscene(t),this.renderer.render(this.scene,this.camera);return}if(!this.isPlaying||this.isPaused)return;const e=this.inputManager.getFrameInput();this.player.addRotation(e.deltaYaw,e.deltaPitch);const n=this.structuresManager.isPlayerNearCampfire(this.player.position);it.player.isWarm=n,it.player.currentPos={x:this.player.position.x,y:this.player.position.y,z:this.player.position.z},it.player.isUnderwater=this.player.isUnderwater;const i=this.structuresManager.structures.some(s=>s.type==="workbench"&&s.position.distanceTo(this.player.position)<4);it.isNearWorkbench=i,it.tick(t),this.player.update(t,e.move,e.isSprint,e.isJump,e.isCrouch,_e),this.islandWorld.update(t,it.dayTime,this.player.position),this.foliageManager.update(t),this.structuresManager.update(t,this.player.position),this.wildlifeManager.update(t,this.player,(s,o)=>this.onPlayerDamage(s,o)),this.interactionSystem.update(this.player),this.minimap&&this.minimap.update(this.player,this.wildlifeManager,this.structuresManager),this.updateHUD(),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new Vp});
