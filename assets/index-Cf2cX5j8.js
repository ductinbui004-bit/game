(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kr="170",hc=0,po=1,uc=2,Ta=1,ba=2,un=3,In=0,Ce=1,Ae=2,Rn=0,fi=1,mo=2,go=3,_o=4,dc=5,Hn=100,fc=101,pc=102,mc=103,gc=104,_c=200,xc=201,vc=202,Mc=203,cr=204,lr=205,yc=206,Sc=207,wc=208,Ec=209,Tc=210,bc=211,Ac=212,Cc=213,Rc=214,hr=0,ur=1,dr=2,gi=3,fr=4,pr=5,mr=6,gr=7,Aa=0,Pc=1,Ic=2,Pn=0,Lc=1,Dc=2,Uc=3,Ca=4,Nc=5,Fc=6,Oc=7,Ra=300,_i=301,xi=302,_r=303,xr=304,Cs=306,vr=1e3,Wn=1001,Mr=1002,Ke=1003,Bc=1004,$i=1005,tn=1006,Ls=1007,Xn=1008,_n=1009,Pa=1010,Ia=1011,Hi=1012,Zr=1013,qn=1014,fn=1015,Vi=1016,Jr=1017,Qr=1018,vi=1020,La=35902,Da=1021,Ua=1022,je=1023,Na=1024,Fa=1025,pi=1026,Mi=1027,Oa=1028,to=1029,Ba=1030,eo=1031,no=1033,xs=33776,vs=33777,Ms=33778,ys=33779,yr=35840,Sr=35841,wr=35842,Er=35843,Tr=36196,br=37492,Ar=37496,Cr=37808,Rr=37809,Pr=37810,Ir=37811,Lr=37812,Dr=37813,Ur=37814,Nr=37815,Fr=37816,Or=37817,Br=37818,kr=37819,Gr=37820,zr=37821,Ss=36492,Hr=36494,Vr=36495,ka=36283,Wr=36284,Xr=36285,qr=36286,kc=3200,Gc=3201,Ga=0,zc=1,Cn="",Ge="srgb",Ei="srgb-linear",Rs="linear",ne="srgb",Kn=7680,xo=519,Hc=512,Vc=513,Wc=514,za=515,Xc=516,qc=517,Yc=518,$c=519,vo=35044,Mo="300 es",pn=2e3,Es=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yo=1234567;const Gi=Math.PI/180,yi=180/Math.PI;function bi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[r&255]+Me[r>>8&255]+Me[r>>16&255]+Me[r>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function Te(r,t,e){return Math.max(t,Math.min(e,r))}function io(r,t){return(r%t+t)%t}function jc(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Kc(r,t,e){return r!==t?(e-r)/(t-r):0}function zi(r,t,e){return(1-e)*r+e*t}function Zc(r,t,e,n){return zi(r,t,1-Math.exp(-e*n))}function Jc(r,t=1){return t-Math.abs(io(r,t*2)-t)}function Qc(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function tl(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function el(r,t){return r+Math.floor(Math.random()*(t-r+1))}function nl(r,t){return r+Math.random()*(t-r)}function il(r){return r*(.5-Math.random())}function sl(r){r!==void 0&&(yo=r);let t=yo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rl(r){return r*Gi}function ol(r){return r*yi}function al(r){return(r&r-1)===0&&r!==0}function cl(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ll(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hl(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),p=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*u,c*p,a*l);break;case"YZY":r.set(c*p,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*p,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*m,a*l);break;case"YXY":r.set(c*m,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ui(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function we(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const An={DEG2RAD:Gi,RAD2DEG:yi,generateUUID:bi,clamp:Te,euclideanModulo:io,mapLinear:jc,inverseLerp:Kc,lerp:zi,damp:Zc,pingpong:Jc,smoothstep:Qc,smootherstep:tl,randInt:el,randFloat:nl,randFloatSpread:il,seededRandom:sl,degToRad:rl,radToDeg:ol,isPowerOfTwo:al,ceilPowerOfTwo:cl,floorPowerOfTwo:ll,setQuaternionFromProperEuler:hl,normalize:we,denormalize:ui};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,s,o,a,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],m=n[5],g=n[8],_=i[0],d=i[3],f=i[6],S=i[1],E=i[4],v=i[7],L=i[2],C=i[5],A=i[8];return s[0]=o*_+a*S+c*L,s[3]=o*d+a*E+c*C,s[6]=o*f+a*v+c*A,s[1]=l*_+h*S+u*L,s[4]=l*d+h*E+u*C,s[7]=l*f+h*v+u*A,s[2]=p*_+m*S+g*L,s[5]=p*d+m*E+g*C,s[8]=p*f+m*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,p=a*c-h*s,m=l*s-o*c,g=e*u+n*p+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=p*_,t[4]=(h*e-i*c)*_,t[5]=(i*s-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ds.makeScale(t,e)),this}rotate(t){return this.premultiply(Ds.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ds.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new Ot;function Ha(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ts(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ul(){const r=Ts("canvas");return r.style.display="block",r}const So={};function Bi(r){r in So||(So[r]=!0,console.warn(r))}function dl(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function fl(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pl(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(r.r=mn(r.r),r.g=mn(r.g),r.b=mn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cn?Rs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function mn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function mi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const wo=[.64,.33,.3,.6,.15,.06],Eo=[.2126,.7152,.0722],To=[.3127,.329],bo=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ao=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[Ei]:{primaries:wo,whitePoint:To,transfer:Rs,toXYZ:bo,fromXYZ:Ao,luminanceCoefficients:Eo,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:wo,whitePoint:To,transfer:ne,toXYZ:bo,fromXYZ:Ao,luminanceCoefficients:Eo,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}});let Zn;class ml{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zn===void 0&&(Zn=Ts("canvas")),Zn.width=t.width,Zn.height=t.height;const n=Zn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ts("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=mn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mn(e[n]/255)*255):e[n]=mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gl=0;class Va{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Us(i[o].image)):s.push(Us(i[o]))}else s=Us(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Us(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ml.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _l=0;class Ie extends Ti{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=Wn,i=Wn,s=tn,o=Xn,a=je,c=_n,l=Ie.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_l++}),this.uuid=bi(),this.name="",this.source=new Va(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ra)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vr:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vr:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Ra;Ie.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],p=c[1],m=c[5],g=c[9],_=c[2],d=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,v=(m+1)/2,L=(f+1)/2,C=(h+p)/4,A=(u+_)/4,P=(g+d)/4;return E>v&&E>L?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=C/n,s=A/n):v>L?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=C/i,s=P/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=A/s,i=P/s),this.set(n,i,s,e),this}let S=Math.sqrt((d-g)*(d-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(u-_)/S,this.z=(p-h)/S,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xl extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ie(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Va(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends xl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wa extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vl extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const p=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==p||l!==m||h!==g){let d=1-a;const f=c*p+l*m+h*g+u*_,S=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const L=Math.sqrt(E),C=Math.atan2(L,f*S);d=Math.sin(d*C)/L,a=Math.sin(a*C)/L}const v=a*S;if(c=c*d+p*v,l=l*d+m*v,h=h*d+g*v,u=u*d+_*v,d===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],p=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*m-l*p,t[e+1]=c*g+h*p+l*u-a*m,t[e+2]=l*g+h*m+a*p-c*u,t[e+3]=h*g-a*u-c*p-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),p=c(n/2),m=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=p*h*u+l*m*g,this._y=l*m*u-p*h*g,this._z=l*h*g+p*m*u,this._w=l*h*u-p*m*g;break;case"YXZ":this._x=p*h*u+l*m*g,this._y=l*m*u-p*h*g,this._z=l*h*g-p*m*u,this._w=l*h*u+p*m*g;break;case"ZXY":this._x=p*h*u-l*m*g,this._y=l*m*u+p*h*g,this._z=l*h*g+p*m*u,this._w=l*h*u-p*m*g;break;case"ZYX":this._x=p*h*u-l*m*g,this._y=l*m*u+p*h*g,this._z=l*h*g-p*m*u,this._w=l*h*u+p*m*g;break;case"YZX":this._x=p*h*u+l*m*g,this._y=l*m*u+p*h*g,this._z=l*h*g-p*m*u,this._w=l*h*u-p*m*g;break;case"XZY":this._x=p*h*u-l*m*g,this._y=l*m*u-p*h*g,this._z=l*h*g+p*m*u,this._w=l*h*u+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=i*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Co.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Co.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ns.copy(this).projectOnVector(t),this.sub(Ns)}reflect(t){return this.sub(Ns.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new b,Co=new Wi;class Xi{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xe):Xe.fromBufferAttribute(s,o),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ji.copy(n.boundingBox)),ji.applyMatrix4(t.matrixWorld),this.union(ji)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Di),Ki.subVectors(this.max,Di),Jn.subVectors(t.a,Di),Qn.subVectors(t.b,Di),ti.subVectors(t.c,Di),yn.subVectors(Qn,Jn),Sn.subVectors(ti,Qn),Un.subVectors(Jn,ti);let e=[0,-yn.z,yn.y,0,-Sn.z,Sn.y,0,-Un.z,Un.y,yn.z,0,-yn.x,Sn.z,0,-Sn.x,Un.z,0,-Un.x,-yn.y,yn.x,0,-Sn.y,Sn.x,0,-Un.y,Un.x,0];return!Fs(e,Jn,Qn,ti,Ki)||(e=[1,0,0,0,1,0,0,0,1],!Fs(e,Jn,Qn,ti,Ki))?!1:(Zi.crossVectors(yn,Sn),e=[Zi.x,Zi.y,Zi.z],Fs(e,Jn,Qn,ti,Ki))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const on=[new b,new b,new b,new b,new b,new b,new b,new b],Xe=new b,ji=new Xi,Jn=new b,Qn=new b,ti=new b,yn=new b,Sn=new b,Un=new b,Di=new b,Ki=new b,Zi=new b,Nn=new b;function Fs(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Nn.fromArray(r,s);const a=i.x*Math.abs(Nn.x)+i.y*Math.abs(Nn.y)+i.z*Math.abs(Nn.z),c=t.dot(Nn),l=e.dot(Nn),h=n.dot(Nn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Ml=new Xi,Ui=new b,Os=new b;class Ps{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ml.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ui.subVectors(t,this.center);const e=Ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ui,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Os.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ui.copy(t.center).add(Os)),this.expandByPoint(Ui.copy(t.center).sub(Os))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new b,Bs=new b,Ji=new b,wn=new b,ks=new b,Qi=new b,Gs=new b;class so{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Bs.copy(t).add(e).multiplyScalar(.5),Ji.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(Bs);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ji),a=wn.dot(this.direction),c=-wn.dot(Ji),l=wn.lengthSq(),h=Math.abs(1-o*o);let u,p,m,g;if(h>0)if(u=o*c-a,p=o*a-c,g=s*h,u>=0)if(p>=-g)if(p<=g){const _=1/h;u*=_,p*=_,m=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=s,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;else p=-s,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-o*s+a)),p=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+l):(u=Math.max(0,-(o*s+a)),p=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+p*(p+2*c)+l);else p=o>0?-s:s,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Bs).addScaledVector(Ji,p),m}intersectSphere(t,e){an.subVectors(t.center,this.origin);const n=an.dot(this.direction),i=an.dot(an)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,i=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,i=(t.min.x-p.x)*l),h>=0?(s=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,i,s){ks.subVectors(e,t),Qi.subVectors(n,t),Gs.crossVectors(ks,Qi);let o=this.direction.dot(Gs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,t);const c=a*this.direction.dot(Qi.crossVectors(wn,Qi));if(c<0)return null;const l=a*this.direction.dot(ks.cross(wn));if(l<0||c+l>o)return null;const h=-a*wn.dot(Gs);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,i,s,o,a,c,l,h,u,p,m,g,_,d){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,u,p,m,g,_,d)}set(t,e,n,i,s,o,a,c,l,h,u,p,m,g,_,d){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=p,f[3]=m,f[7]=g,f[11]=_,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ei.setFromMatrixColumn(t,0).length(),s=1/ei.setFromMatrixColumn(t,1).length(),o=1/ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const p=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=p-_*l,e[9]=-a*c,e[2]=_-p*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*h,m=c*u,g=l*h,_=l*u;e[0]=p+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*h,m=c*u,g=l*h,_=l*u;e[0]=p-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=p*l+_,e[1]=c*u,e[5]=_*l+p,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-p*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=p-_*u}else if(t.order==="XZY"){const p=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=p*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yl,t,Sl)}lookAt(t,e,n){const i=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),En.crossVectors(n,Ne),En.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),En.crossVectors(n,Ne)),En.normalize(),ts.crossVectors(Ne,En),i[0]=En.x,i[4]=ts.x,i[8]=Ne.x,i[1]=En.y,i[5]=ts.y,i[9]=Ne.y,i[2]=En.z,i[6]=ts.z,i[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],m=n[13],g=n[2],_=n[6],d=n[10],f=n[14],S=n[3],E=n[7],v=n[11],L=n[15],C=i[0],A=i[4],P=i[8],w=i[12],M=i[1],R=i[5],z=i[9],k=i[13],X=i[2],$=i[6],W=i[10],J=i[14],B=i[3],rt=i[7],dt=i[11],Mt=i[15];return s[0]=o*C+a*M+c*X+l*B,s[4]=o*A+a*R+c*$+l*rt,s[8]=o*P+a*z+c*W+l*dt,s[12]=o*w+a*k+c*J+l*Mt,s[1]=h*C+u*M+p*X+m*B,s[5]=h*A+u*R+p*$+m*rt,s[9]=h*P+u*z+p*W+m*dt,s[13]=h*w+u*k+p*J+m*Mt,s[2]=g*C+_*M+d*X+f*B,s[6]=g*A+_*R+d*$+f*rt,s[10]=g*P+_*z+d*W+f*dt,s[14]=g*w+_*k+d*J+f*Mt,s[3]=S*C+E*M+v*X+L*B,s[7]=S*A+E*R+v*$+L*rt,s[11]=S*P+E*z+v*W+L*dt,s[15]=S*w+E*k+v*J+L*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],p=t[10],m=t[14],g=t[3],_=t[7],d=t[11],f=t[15];return g*(+s*c*u-i*l*u-s*a*p+n*l*p+i*a*m-n*c*m)+_*(+e*c*m-e*l*p+s*o*p-i*o*m+i*l*h-s*c*h)+d*(+e*l*u-e*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+f*(-i*a*h-e*c*u+e*a*p+i*o*u-n*o*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],p=t[10],m=t[11],g=t[12],_=t[13],d=t[14],f=t[15],S=u*d*l-_*p*l+_*c*m-a*d*m-u*c*f+a*p*f,E=g*p*l-h*d*l-g*c*m+o*d*m+h*c*f-o*p*f,v=h*_*l-g*u*l+g*a*m-o*_*m-h*a*f+o*u*f,L=g*u*c-h*_*c-g*a*p+o*_*p+h*a*d-o*u*d,C=e*S+n*E+i*v+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=S*A,t[1]=(_*p*s-u*d*s-_*i*m+n*d*m+u*i*f-n*p*f)*A,t[2]=(a*d*s-_*c*s+_*i*l-n*d*l-a*i*f+n*c*f)*A,t[3]=(u*c*s-a*p*s-u*i*l+n*p*l+a*i*m-n*c*m)*A,t[4]=E*A,t[5]=(h*d*s-g*p*s+g*i*m-e*d*m-h*i*f+e*p*f)*A,t[6]=(g*c*s-o*d*s-g*i*l+e*d*l+o*i*f-e*c*f)*A,t[7]=(o*p*s-h*c*s+h*i*l-e*p*l-o*i*m+e*c*m)*A,t[8]=v*A,t[9]=(g*u*s-h*_*s-g*n*m+e*_*m+h*n*f-e*u*f)*A,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*f+e*a*f)*A,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*m-e*a*m)*A,t[12]=L*A,t[13]=(h*_*i-g*u*i+g*n*p-e*_*p-h*n*d+e*u*d)*A,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*d-e*a*d)*A,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*p+e*a*p)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,p=s*l,m=s*h,g=s*u,_=o*h,d=o*u,f=a*u,S=c*l,E=c*h,v=c*u,L=n.x,C=n.y,A=n.z;return i[0]=(1-(_+f))*L,i[1]=(m+v)*L,i[2]=(g-E)*L,i[3]=0,i[4]=(m-v)*C,i[5]=(1-(p+f))*C,i[6]=(d+S)*C,i[7]=0,i[8]=(g+E)*A,i[9]=(d-S)*A,i[10]=(1-(p+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ei.set(i[0],i[1],i[2]).length();const o=ei.set(i[4],i[5],i[6]).length(),a=ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],qe.copy(this);const l=1/s,h=1/o,u=1/a;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=u,qe.elements[9]*=u,qe.elements[10]*=u,e.setFromRotationMatrix(qe),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=pn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),p=(n+i)/(n-i);let m,g;if(a===pn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Es)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=pn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-s),p=(e+t)*l,m=(n+i)*h;let g,_;if(a===pn)g=(o+s)*u,_=-2*u;else if(a===Es)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ei=new b,qe=new le,yl=new b(0,0,0),Sl=new b(1,1,1),En=new b,ts=new b,Ne=new b,Ro=new le,Po=new Wi;class en{constructor(t=0,e=0,n=0,i=en.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],p=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Te(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ro.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ro,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Po.setFromEuler(this),this.setFromQuaternion(Po,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class ro{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wl=0;const Io=new b,ni=new Wi,cn=new le,es=new b,Ni=new b,El=new b,Tl=new Wi,Lo=new b(1,0,0),Do=new b(0,1,0),Uo=new b(0,0,1),No={type:"added"},bl={type:"removed"},ii={type:"childadded",child:null},zs={type:"childremoved",child:null};class de extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new b,e=new en,n=new Wi,i=new b(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new le},normalMatrix:{value:new Ot}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.multiply(ni),this}rotateOnWorldAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.premultiply(ni),this}rotateX(t){return this.rotateOnAxis(Lo,t)}rotateY(t){return this.rotateOnAxis(Do,t)}rotateZ(t){return this.rotateOnAxis(Uo,t)}translateOnAxis(t,e){return Io.copy(t).applyQuaternion(this.quaternion),this.position.add(Io.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lo,t)}translateY(t){return this.translateOnAxis(Do,t)}translateZ(t){return this.translateOnAxis(Uo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?es.copy(t):es.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Ni,es,this.up):cn.lookAt(es,Ni,this.up),this.quaternion.setFromRotationMatrix(cn),i&&(cn.extractRotation(i.matrixWorld),ni.setFromRotationMatrix(cn),this.quaternion.premultiply(ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(No),ii.child=t,this.dispatchEvent(ii),ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bl),zs.child=t,this.dispatchEvent(zs),zs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(No),ii.child=t,this.dispatchEvent(ii),ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,El),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,Tl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}de.DEFAULT_UP=new b(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new b,ln=new b,Hs=new b,hn=new b,si=new b,ri=new b,Fo=new b,Vs=new b,Ws=new b,Xs=new b,qs=new se,Ys=new se,$s=new se;class $e{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ye.subVectors(t,e),i.cross(Ye);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ye.subVectors(i,e),ln.subVectors(n,e),Hs.subVectors(t,e);const o=Ye.dot(Ye),a=Ye.dot(ln),c=Ye.dot(Hs),l=ln.dot(ln),h=ln.dot(Hs),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const p=1/u,m=(l*c-a*h)*p,g=(o*h-a*c)*p;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,hn.x),c.addScaledVector(o,hn.y),c.addScaledVector(a,hn.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return qs.setScalar(0),Ys.setScalar(0),$s.setScalar(0),qs.fromBufferAttribute(t,e),Ys.fromBufferAttribute(t,n),$s.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(qs,s.x),o.addScaledVector(Ys,s.y),o.addScaledVector($s,s.z),o}static isFrontFacing(t,e,n,i){return Ye.subVectors(n,e),ln.subVectors(t,e),Ye.cross(ln).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Ye.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;si.subVectors(i,n),ri.subVectors(s,n),Vs.subVectors(t,n);const c=si.dot(Vs),l=ri.dot(Vs);if(c<=0&&l<=0)return e.copy(n);Ws.subVectors(t,i);const h=si.dot(Ws),u=ri.dot(Ws);if(h>=0&&u<=h)return e.copy(i);const p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(si,o);Xs.subVectors(t,s);const m=si.dot(Xs),g=ri.dot(Xs);if(g>=0&&m<=g)return e.copy(s);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ri,a);const d=h*g-m*u;if(d<=0&&u-h>=0&&m-g>=0)return Fo.subVectors(s,i),a=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(Fo,a);const f=1/(d+_+p);return o=_*f,a=p*f,e.copy(n).addScaledVector(si,o).addScaledVector(ri,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},ns={h:0,s:0,l:0};function js(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=io(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=js(o,s,t+1/3),this.g=js(o,s,t),this.b=js(o,s,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ge){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=Xa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mn(t.r),this.g=mn(t.g),this.b=mn(t.b),this}copyLinearToSRGB(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return qt.fromWorkingColorSpace(ye.copy(this),t),Math.round(Te(ye.r*255,0,255))*65536+Math.round(Te(ye.g*255,0,255))*256+Math.round(Te(ye.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,i=ye.g,s=ye.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=Ge){qt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,i=ye.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL(ns);const n=zi(Tn.h,ns.h,e),i=zi(Tn.s,ns.s,e),s=zi(Tn.l,ns.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Tt;Tt.NAMES=Xa;let Al=0;class Ai extends Ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Al++}),this.uuid=bi(),this.name="",this.blending=fi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cr,this.blendDst=lr,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kn,this.stencilZFail=Kn,this.stencilZPass=Kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cr&&(n.blendSrc=this.blendSrc),this.blendDst!==lr&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ze extends Ai{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new b,is=new Ht;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vo,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)is.fromBufferAttribute(this,e),is.applyMatrix3(t),this.setXY(e,is.x,is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vo&&(t.usage=this.usage),t}}class qa extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ya extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Cl=0;const ke=new le,Ks=new de,oi=new b,Fe=new Xi,Fi=new Xi,_e=new b;class Le extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cl++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ha(t)?Ya:qa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return Ks.lookAt(t),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Fe.setFromBufferAttribute(s),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Fi.setFromBufferAttribute(a),this.morphTargetsRelative?(_e.addVectors(Fe.min,Fi.min),Fe.expandByPoint(_e),_e.addVectors(Fe.max,Fi.max),Fe.expandByPoint(_e)):(Fe.expandByPoint(Fi.min),Fe.expandByPoint(Fi.max))}Fe.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)_e.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(_e));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)_e.fromBufferAttribute(a,l),c&&(oi.fromBufferAttribute(t,l),_e.add(oi)),i=Math.max(i,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new b,c[P]=new b;const l=new b,h=new b,u=new b,p=new Ht,m=new Ht,g=new Ht,_=new b,d=new b;function f(P,w,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),p.fromBufferAttribute(s,P),m.fromBufferAttribute(s,w),g.fromBufferAttribute(s,M),h.sub(l),u.sub(l),m.sub(p),g.sub(p);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(R),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(R),a[P].add(_),a[w].add(_),a[M].add(_),c[P].add(d),c[w].add(d),c[M].add(d))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,w=S.length;P<w;++P){const M=S[P],R=M.start,z=M.count;for(let k=R,X=R+z;k<X;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const E=new b,v=new b,L=new b,C=new b;function A(P){L.fromBufferAttribute(i,P),C.copy(L);const w=a[P];E.copy(w),E.sub(L.multiplyScalar(L.dot(w))).normalize(),v.crossVectors(C,w);const R=v.dot(c[P])<0?-1:1;o.setXYZW(P,E.x,E.y,E.z,R)}for(let P=0,w=S.length;P<w;++P){const M=S[P],R=M.start,z=M.count;for(let k=R,X=R+z;k<X;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const i=new b,s=new b,o=new b,a=new b,c=new b,l=new b,h=new b,u=new b;if(t)for(let p=0,m=t.count;p<m;p+=3){const g=t.getX(p+0),_=t.getX(p+1),d=t.getX(p+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,d),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let p=0,m=e.count;p<m;p+=3)i.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,d=c.length;_<d;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let f=0;f<h;f++)p[g++]=l[m++]}return new He(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const p=l[h],m=t(p,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oo=new le,Fn=new so,ss=new Ps,Bo=new b,rs=new b,os=new b,as=new b,Zs=new b,cs=new b,ko=new b,ls=new b;class D extends de{constructor(t=new Le,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){cs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Zs.fromBufferAttribute(u,t),o?cs.addScaledVector(Zs,h):cs.addScaledVector(Zs.sub(e),h))}e.add(cs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(s),Fn.copy(t.ray).recast(t.near),!(ss.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(ss,Bo)===null||Fn.origin.distanceToSquared(Bo)>(t.far-t.near)**2))&&(Oo.copy(s).invert(),Fn.copy(t.ray).applyMatrix4(Oo),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fn)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const d=p[g],f=o[d.materialIndex],S=Math.max(d.start,m.start),E=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let v=S,L=E;v<L;v+=3){const C=a.getX(v),A=a.getX(v+1),P=a.getX(v+2);i=hs(this,f,t,n,l,h,u,C,A,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let d=g,f=_;d<f;d+=3){const S=a.getX(d),E=a.getX(d+1),v=a.getX(d+2);i=hs(this,o,t,n,l,h,u,S,E,v),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const d=p[g],f=o[d.materialIndex],S=Math.max(d.start,m.start),E=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let v=S,L=E;v<L;v+=3){const C=v,A=v+1,P=v+2;i=hs(this,f,t,n,l,h,u,C,A,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let d=g,f=_;d<f;d+=3){const S=d,E=d+1,v=d+2;i=hs(this,o,t,n,l,h,u,S,E,v),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}}}function Rl(r,t,e,n,i,s,o,a){let c;if(t.side===Ce?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===In,a),c===null)return null;ls.copy(a),ls.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(ls);return l<e.near||l>e.far?null:{distance:l,point:ls.clone(),object:r}}function hs(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,rs),r.getVertexPosition(c,os),r.getVertexPosition(l,as);const h=Rl(r,t,e,n,rs,os,as,ko);if(h){const u=new b;$e.getBarycoord(ko,rs,os,as,u),i&&(h.uv=$e.getInterpolatedAttribute(i,a,c,l,u,new Ht)),s&&(h.uv1=$e.getInterpolatedAttribute(s,a,c,l,u,new Ht)),o&&(h.normal=$e.getInterpolatedAttribute(o,a,c,l,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new b,materialIndex:0};$e.getNormal(rs,os,as,p.normal),h.face=p,h.barycoord=u}return h}class at extends Le{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let p=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function g(_,d,f,S,E,v,L,C,A,P,w){const M=v/A,R=L/P,z=v/2,k=L/2,X=C/2,$=A+1,W=P+1;let J=0,B=0;const rt=new b;for(let dt=0;dt<W;dt++){const Mt=dt*R-k;for(let Nt=0;Nt<$;Nt++){const Yt=Nt*M-z;rt[_]=Yt*S,rt[d]=Mt*E,rt[f]=X,l.push(rt.x,rt.y,rt.z),rt[_]=0,rt[d]=0,rt[f]=C>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Nt/A),u.push(1-dt/P),J+=1}}for(let dt=0;dt<P;dt++)for(let Mt=0;Mt<A;Mt++){const Nt=p+Mt+$*dt,Yt=p+Mt+$*(dt+1),q=p+(Mt+1)+$*(dt+1),Q=p+(Mt+1)+$*dt;c.push(Nt,Yt,Q),c.push(Yt,q,Q),B+=6}a.addGroup(m,B,w),m+=B,p+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new at(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Si(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ee(r){const t={};for(let e=0;e<r.length;e++){const n=Si(r[e]);for(const i in n)t[i]=n[i]}return t}function Pl(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function $a(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Il={clone:Si,merge:Ee};var Ll=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends Ai{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ll,this.fragmentShader=Dl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.uniformsGroups=Pl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ja extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bn=new b,Go=new Ht,zo=new Ht;class be extends ja{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=yi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yi*2*Math.atan(Math.tan(Gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bn.x,bn.y).multiplyScalar(-t/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bn.x,bn.y).multiplyScalar(-t/bn.z)}getViewSize(t,e){return this.getViewBounds(t,Go,zo),e.subVectors(zo,Go)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ai=-90,ci=1;class Ul extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new be(ai,ci,t,e);i.layers=this.layers,this.add(i);const s=new be(ai,ci,t,e);s.layers=this.layers,this.add(s);const o=new be(ai,ci,t,e);o.layers=this.layers,this.add(o);const a=new be(ai,ci,t,e);a.layers=this.layers,this.add(a);const c=new be(ai,ci,t,e);c.layers=this.layers,this.add(c);const l=new be(ai,ci,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,p,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ka extends Ie{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:_i,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nl extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ka(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new at(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:Rn});s.uniforms.tEquirect.value=e;const o=new D(i,s),a=e.minFilter;return e.minFilter===Xn&&(e.minFilter=tn),new Ul(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Js=new b,Fl=new b,Ol=new Ot;class Gn{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Js.subVectors(n,e).cross(Fl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Js),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ol.getNormalMatrix(t),i=this.coplanarPoint(Js).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new Ps,us=new b;class oo{constructor(t=new Gn,e=new Gn,n=new Gn,i=new Gn,s=new Gn,o=new Gn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],p=i[7],m=i[8],g=i[9],_=i[10],d=i[11],f=i[12],S=i[13],E=i[14],v=i[15];if(n[0].setComponents(c-s,p-l,d-m,v-f).normalize(),n[1].setComponents(c+s,p+l,d+m,v+f).normalize(),n[2].setComponents(c+o,p+h,d+g,v+S).normalize(),n[3].setComponents(c-o,p-h,d-g,v-S).normalize(),n[4].setComponents(c-a,p-u,d-_,v-E).normalize(),e===pn)n[5].setComponents(c+a,p+u,d+_,v+E).normalize();else if(e===Es)n[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(us.x=i.normal.x>0?t.max.x:t.min.x,us.y=i.normal.y>0?t.max.y:t.min.y,us.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Za(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Bl(r){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,p=r.createBuffer();r.bindBuffer(c,p),r.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=r.SHORT;else if(l instanceof Uint32Array)m=r.UNSIGNED_INT;else if(l instanceof Int32Array)m=r.INT;else if(l instanceof Int8Array)m=r.BYTE;else if(l instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<u.length;m++){const g=u[p],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,u[p]=_)}u.length=p+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class gn extends Le{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,p=e/c,m=[],g=[],_=[],d=[];for(let f=0;f<h;f++){const S=f*p-o;for(let E=0;E<l;E++){const v=E*u-s;g.push(v,-S,0),_.push(0,0,1),d.push(E/a),d.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){const E=S+l*f,v=S+l*(f+1),L=S+1+l*(f+1),C=S+1+l*f;m.push(E,v,C),m.push(v,L,C)}this.setIndex(m),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.width,t.height,t.widthSegments,t.heightSegments)}}var kl=`#ifdef USE_ALPHAHASH
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
#endif`,Hl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vl=`#ifdef USE_ALPHATEST
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
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vh=`#ifdef USE_LOGDEPTHBUF
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
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vu=`uniform samplerCube tCube;
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
}`,kt={alphahash_fragment:kl,alphahash_pars_fragment:Gl,alphamap_fragment:zl,alphamap_pars_fragment:Hl,alphatest_fragment:Vl,alphatest_pars_fragment:Wl,aomap_fragment:Xl,aomap_pars_fragment:ql,batching_pars_vertex:Yl,batching_vertex:$l,begin_vertex:jl,beginnormal_vertex:Kl,bsdfs:Zl,iridescence_fragment:Jl,bumpmap_pars_fragment:Ql,clipping_planes_fragment:th,clipping_planes_pars_fragment:eh,clipping_planes_pars_vertex:nh,clipping_planes_vertex:ih,color_fragment:sh,color_pars_fragment:rh,color_pars_vertex:oh,color_vertex:ah,common:ch,cube_uv_reflection_fragment:lh,defaultnormal_vertex:hh,displacementmap_pars_vertex:uh,displacementmap_vertex:dh,emissivemap_fragment:fh,emissivemap_pars_fragment:ph,colorspace_fragment:mh,colorspace_pars_fragment:gh,envmap_fragment:_h,envmap_common_pars_fragment:xh,envmap_pars_fragment:vh,envmap_pars_vertex:Mh,envmap_physical_pars_fragment:Ih,envmap_vertex:yh,fog_vertex:Sh,fog_pars_vertex:wh,fog_fragment:Eh,fog_pars_fragment:Th,gradientmap_pars_fragment:bh,lightmap_pars_fragment:Ah,lights_lambert_fragment:Ch,lights_lambert_pars_fragment:Rh,lights_pars_begin:Ph,lights_toon_fragment:Lh,lights_toon_pars_fragment:Dh,lights_phong_fragment:Uh,lights_phong_pars_fragment:Nh,lights_physical_fragment:Fh,lights_physical_pars_fragment:Oh,lights_fragment_begin:Bh,lights_fragment_maps:kh,lights_fragment_end:Gh,logdepthbuf_fragment:zh,logdepthbuf_pars_fragment:Hh,logdepthbuf_pars_vertex:Vh,logdepthbuf_vertex:Wh,map_fragment:Xh,map_pars_fragment:qh,map_particle_fragment:Yh,map_particle_pars_fragment:$h,metalnessmap_fragment:jh,metalnessmap_pars_fragment:Kh,morphinstance_vertex:Zh,morphcolor_vertex:Jh,morphnormal_vertex:Qh,morphtarget_pars_vertex:tu,morphtarget_vertex:eu,normal_fragment_begin:nu,normal_fragment_maps:iu,normal_pars_fragment:su,normal_pars_vertex:ru,normal_vertex:ou,normalmap_pars_fragment:au,clearcoat_normal_fragment_begin:cu,clearcoat_normal_fragment_maps:lu,clearcoat_pars_fragment:hu,iridescence_pars_fragment:uu,opaque_fragment:du,packing:fu,premultiplied_alpha_fragment:pu,project_vertex:mu,dithering_fragment:gu,dithering_pars_fragment:_u,roughnessmap_fragment:xu,roughnessmap_pars_fragment:vu,shadowmap_pars_fragment:Mu,shadowmap_pars_vertex:yu,shadowmap_vertex:Su,shadowmask_pars_fragment:wu,skinbase_vertex:Eu,skinning_pars_vertex:Tu,skinning_vertex:bu,skinnormal_vertex:Au,specularmap_fragment:Cu,specularmap_pars_fragment:Ru,tonemapping_fragment:Pu,tonemapping_pars_fragment:Iu,transmission_fragment:Lu,transmission_pars_fragment:Du,uv_pars_fragment:Uu,uv_pars_vertex:Nu,uv_vertex:Fu,worldpos_vertex:Ou,background_vert:Bu,background_frag:ku,backgroundCube_vert:Gu,backgroundCube_frag:zu,cube_vert:Hu,cube_frag:Vu,depth_vert:Wu,depth_frag:Xu,distanceRGBA_vert:qu,distanceRGBA_frag:Yu,equirect_vert:$u,equirect_frag:ju,linedashed_vert:Ku,linedashed_frag:Zu,meshbasic_vert:Ju,meshbasic_frag:Qu,meshlambert_vert:td,meshlambert_frag:ed,meshmatcap_vert:nd,meshmatcap_frag:id,meshnormal_vert:sd,meshnormal_frag:rd,meshphong_vert:od,meshphong_frag:ad,meshphysical_vert:cd,meshphysical_frag:ld,meshtoon_vert:hd,meshtoon_frag:ud,points_vert:dd,points_frag:fd,shadow_vert:pd,shadow_frag:md,sprite_vert:gd,sprite_frag:_d},ot={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Qe={basic:{uniforms:Ee([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ee([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ee([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ee([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ee([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ee([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ee([ot.points,ot.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ee([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ee([ot.common,ot.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ee([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ee([ot.sprite,ot.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Ee([ot.common,ot.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Ee([ot.lights,ot.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Qe.physical={uniforms:Ee([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const ds={r:0,b:0,g:0},Bn=new en,xd=new le;function vd(r,t,e,n,i,s,o){const a=new Tt(0);let c=s===!0?0:1,l,h,u=null,p=0,m=null;function g(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?e:t).get(E)),E}function _(S){let E=!1;const v=g(S);v===null?f(a,c):v&&v.isColor&&(f(v,1),E=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function d(S,E){const v=g(E);v&&(v.isCubeTexture||v.mapping===Cs)?(h===void 0&&(h=new D(new at(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Si(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Bn.copy(E.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xd.makeRotationFromEuler(Bn)),h.material.toneMapped=qt.getTransfer(v.colorSpace)!==ne,(u!==v||p!==v.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,p=v.version,m=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new D(new gn(2,2),new nn({name:"BackgroundMaterial",uniforms:Si(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=qt.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||p!==v.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,p=v.version,m=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,E){S.getRGB(ds,$a(r)),n.buffers.color.setClear(ds.r,ds.g,ds.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),c=E,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(a,c)},render:_,addToRenderList:d}}function Md(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=p(null);let s=i,o=!1;function a(M,R,z,k,X){let $=!1;const W=u(k,z,R);s!==W&&(s=W,l(s.object)),$=m(M,k,z,X),$&&g(M,k,z,X),X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(M,R,z,k),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,R,z){const k=z.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let $=X[R.id];$===void 0&&($={},X[R.id]=$);let W=$[k];return W===void 0&&(W=p(c()),$[k]=W),W}function p(M){const R=[],z=[],k=[];for(let X=0;X<e;X++)R[X]=0,z[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:k,object:M,attributes:{},index:null}}function m(M,R,z,k){const X=s.attributes,$=R.attributes;let W=0;const J=z.getAttributes();for(const B in J)if(J[B].location>=0){const dt=X[B];let Mt=$[B];if(Mt===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),dt===void 0||dt.attribute!==Mt||Mt&&dt.data!==Mt.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function g(M,R,z,k){const X={},$=R.attributes;let W=0;const J=z.getAttributes();for(const B in J)if(J[B].location>=0){let dt=$[B];dt===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));const Mt={};Mt.attribute=dt,dt&&dt.data&&(Mt.data=dt.data),X[B]=Mt,W++}s.attributes=X,s.attributesNum=W,s.index=k}function _(){const M=s.newAttributes;for(let R=0,z=M.length;R<z;R++)M[R]=0}function d(M){f(M,0)}function f(M,R){const z=s.newAttributes,k=s.enabledAttributes,X=s.attributeDivisors;z[M]=1,k[M]===0&&(r.enableVertexAttribArray(M),k[M]=1),X[M]!==R&&(r.vertexAttribDivisor(M,R),X[M]=R)}function S(){const M=s.newAttributes,R=s.enabledAttributes;for(let z=0,k=R.length;z<k;z++)R[z]!==M[z]&&(r.disableVertexAttribArray(z),R[z]=0)}function E(M,R,z,k,X,$,W){W===!0?r.vertexAttribIPointer(M,R,z,X,$):r.vertexAttribPointer(M,R,z,k,X,$)}function v(M,R,z,k){_();const X=k.attributes,$=z.getAttributes(),W=R.defaultAttributeValues;for(const J in $){const B=$[J];if(B.location>=0){let rt=X[J];if(rt===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){const dt=rt.normalized,Mt=rt.itemSize,Nt=t.get(rt);if(Nt===void 0)continue;const Yt=Nt.buffer,q=Nt.type,Q=Nt.bytesPerElement,xt=q===r.INT||q===r.UNSIGNED_INT||rt.gpuType===Zr;if(rt.isInterleavedBufferAttribute){const ut=rt.data,Rt=ut.stride,It=rt.offset;if(ut.isInstancedInterleavedBuffer){for(let Bt=0;Bt<B.locationSize;Bt++)f(B.location+Bt,ut.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Bt=0;Bt<B.locationSize;Bt++)d(B.location+Bt);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let Bt=0;Bt<B.locationSize;Bt++)E(B.location+Bt,Mt/B.locationSize,q,dt,Rt*Q,(It+Mt/B.locationSize*Bt)*Q,xt)}else{if(rt.isInstancedBufferAttribute){for(let ut=0;ut<B.locationSize;ut++)f(B.location+ut,rt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ut=0;ut<B.locationSize;ut++)d(B.location+ut);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let ut=0;ut<B.locationSize;ut++)E(B.location+ut,Mt/B.locationSize,q,dt,Mt*Q,Mt/B.locationSize*ut*Q,xt)}}else if(W!==void 0){const dt=W[J];if(dt!==void 0)switch(dt.length){case 2:r.vertexAttrib2fv(B.location,dt);break;case 3:r.vertexAttrib3fv(B.location,dt);break;case 4:r.vertexAttrib4fv(B.location,dt);break;default:r.vertexAttrib1fv(B.location,dt)}}}}S()}function L(){P();for(const M in n){const R=n[M];for(const z in R){const k=R[z];for(const X in k)h(k[X].object),delete k[X];delete R[z]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const z in R){const k=R[z];for(const X in k)h(k[X].object),delete k[X];delete R[z]}delete n[M.id]}function A(M){for(const R in n){const z=n[R];if(z[M.id]===void 0)continue;const k=z[M.id];for(const X in k)h(k[X].object),delete k[X];delete z[M.id]}}function P(){w(),o=!0,s!==i&&(s=i,l(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:d,disableUnusedAttributes:S}}function yd(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function c(l,h,u,p){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*p[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Sd(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==je&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==_n&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fn&&!P)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),d=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:L,maxSamples:C}}function wd(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Gn,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||i;return i=p,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,m){const g=u.clippingPlanes,_=u.clipIntersection,d=u.clipShadows,f=r.get(u);if(!i||g===null||g.length===0||s&&!d)s?h(null):l();else{const S=s?0:n,E=S*4;let v=f.clippingState||null;c.value=v,v=h(g,p,E,m);for(let L=0;L!==E;++L)v[L]=e[L];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,m,g){const _=u!==null?u.length:0;let d=null;if(_!==0){if(d=c.value,g!==!0||d===null){const f=m+_*4,S=p.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<f)&&(d=new Float32Array(f));for(let E=0,v=m;E!==_;++E,v+=4)o.copy(u[E]).applyMatrix4(S,a),o.normal.toArray(d,v),d[v+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function Ed(r){let t=new WeakMap;function e(o,a){return a===_r?o.mapping=_i:a===xr&&(o.mapping=xi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===_r||a===xr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Nl(c.height);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ja extends ja{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const di=4,Ho=[.125,.215,.35,.446,.526,.582],Vn=20,Qs=new Ja,Vo=new Tt;let tr=null,er=0,nr=0,ir=!1;const zn=(1+Math.sqrt(5))/2,li=1/zn,Wo=[new b(-zn,li,0),new b(zn,li,0),new b(-li,0,zn),new b(li,0,zn),new b(0,zn,-li),new b(0,zn,li),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class Xo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){tr=this._renderer.getRenderTarget(),er=this._renderer.getActiveCubeFace(),nr=this._renderer.getActiveMipmapLevel(),ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tr,er,nr),this._renderer.xr.enabled=ir,t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tr=this._renderer.getRenderTarget(),er=this._renderer.getActiveCubeFace(),nr=this._renderer.getActiveMipmapLevel(),ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Vi,format:je,colorSpace:Ei,depthBuffer:!1},i=qo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Td(s)),this._blurMaterial=bd(s,t,e)}return i}_compileMaterial(t){const e=new D(this._lodPlanes[0],t);this._renderer.compile(e,Qs)}_sceneToCubeUV(t,e,n,i){const a=new be(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Vo),h.toneMapping=Pn,h.autoClear=!1;const m=new ze({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new D(new at,m);let _=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(Vo),_=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const E=this._cubeSize;fs(i,S*E,f>2?E:0,E,E),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===_i||t.mapping===xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$o()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yo());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new D(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;fs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Qs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wo[(i-s-1)%Wo.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new D(this._lodPlanes[i],l),p=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Vn-1),_=s/g,d=isFinite(s)?1+Math.floor(h*_):Vn;d>Vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Vn}`);const f=[];let S=0;for(let A=0;A<Vn;++A){const P=A/_,w=Math.exp(-P*P/2);f.push(w),A===0?S+=w:A<d&&(S+=2*w)}for(let A=0;A<f.length;A++)f[A]=f[A]/S;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:E}=this;p.dTheta.value=g,p.mipInt.value=E-n;const v=this._sizeLods[i],L=3*v*(i>E-di?i-E+di:0),C=4*(this._cubeSize-v);fs(e,L,C,3*v,2*v),c.setRenderTarget(e),c.render(u,Qs)}}function Td(r){const t=[],e=[],n=[];let i=r;const s=r-di+1+Ho.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-di?c=Ho[o-r+di-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,d=2,f=1,S=new Float32Array(_*g*m),E=new Float32Array(d*g*m),v=new Float32Array(f*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,P=C>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];S.set(w,_*g*C),E.set(p,d*g*C);const M=[C,C,C,C,C,C];v.set(M,f*g*C)}const L=new Le;L.setAttribute("position",new He(S,_)),L.setAttribute("uv",new He(E,d)),L.setAttribute("faceIndex",new He(v,f)),t.push(L),i>di&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qo(r,t,e){const n=new Yn(r,t,e);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function bd(r,t,e){const n=new Float32Array(Vn),i=new b(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ao(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Yo(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function $o(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ao(){return`

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
	`}function Ad(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===_r||c===xr,h=c===_i||c===xi;if(l||h){let u=t.get(a);const p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Xo(r)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return l&&m&&m.height>0||h&&m&&i(m)?(e===null&&(e=new Xo(r)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Cd(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Bi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rd(r,t,e,n){const i={},s=new WeakMap;function o(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let d=0,f=_.length;d<f;d++)t.remove(_[d])}p.removeEventListener("dispose",o),delete i[p.id];const m=s.get(p);m&&(t.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return i[p.id]===!0||(p.addEventListener("dispose",o),i[p.id]=!0,e.memory.geometries++),p}function c(u){const p=u.attributes;for(const g in p)t.update(p[g],r.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let d=0,f=_.length;d<f;d++)t.update(_[d],r.ARRAY_BUFFER)}}function l(u){const p=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let E=0,v=S.length;E<v;E+=3){const L=S[E+0],C=S[E+1],A=S[E+2];p.push(L,C,C,A,A,L)}}else if(g!==void 0){const S=g.array;_=g.version;for(let E=0,v=S.length/3-1;E<v;E+=3){const L=E+0,C=E+1,A=E+2;p.push(L,C,C,A,A,L)}}else return;const d=new(Ha(p)?Ya:qa)(p,1);d.version=_;const f=s.get(u);f&&t.remove(f),s.set(u,d)}function h(u){const p=s.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Pd(r,t,e){let n;function i(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,m){r.drawElements(n,m,s,p*o),e.update(m,n,1)}function l(p,m,g){g!==0&&(r.drawElementsInstanced(n,m,s,p*o,g),e.update(m,n,g))}function h(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,p,0,g);let d=0;for(let f=0;f<g;f++)d+=m[f];e.update(d,n,1)}function u(p,m,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<p.length;f++)l(p[f]/o,m[f],_[f]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,s,p,0,_,0,g);let f=0;for(let S=0;S<g;S++)f+=m[S]*_[S];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Id(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ld(r,t,e){const n=new WeakMap,i=new se;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var m=M;p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),d===!0&&(v=3);let L=a.attributes.position.count*v,C=1;L>t.maxTextureSize&&(C=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*C*4*u),P=new Wa(A,L,C,u);P.type=fn,P.needsUpdate=!0;const w=v*4;for(let R=0;R<u;R++){const z=f[R],k=S[R],X=E[R],$=L*C*4*R;for(let W=0;W<z.count;W++){const J=W*w;g===!0&&(i.fromBufferAttribute(z,W),A[$+J+0]=i.x,A[$+J+1]=i.y,A[$+J+2]=i.z,A[$+J+3]=0),_===!0&&(i.fromBufferAttribute(k,W),A[$+J+4]=i.x,A[$+J+5]=i.y,A[$+J+6]=i.z,A[$+J+7]=0),d===!0&&(i.fromBufferAttribute(X,W),A[$+J+8]=i.x,A[$+J+9]=i.y,A[$+J+10]=i.z,A[$+J+11]=X.itemSize===4?i.w:1)}}p={count:u,texture:P,size:new Ht(L,C)},n.set(a,p),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let d=0;d<l.length;d++)g+=l[d];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:s}}function Dd(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==l&&(p.update(),i.set(p,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Qa extends Ie{constructor(t,e,n,i,s,o,a,c,l,h=pi){if(h!==pi&&h!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===pi&&(n=qn),n===void 0&&h===Mi&&(n=vi),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ke,this.minFilter=c!==void 0?c:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tc=new Ie,jo=new Qa(1,1),ec=new Wa,nc=new vl,ic=new Ka,Ko=[],Zo=[],Jo=new Float32Array(16),Qo=new Float32Array(9),ta=new Float32Array(4);function Ci(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Ko[i];if(s===void 0&&(s=new Float32Array(i),Ko[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function me(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ge(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Is(r,t){let e=Zo[t];e===void 0&&(e=new Int32Array(t),Zo[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Ud(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Nd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2fv(this.addr,t),ge(e,t)}}function Fd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;r.uniform3fv(this.addr,t),ge(e,t)}}function Od(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4fv(this.addr,t),ge(e,t)}}function Bd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;ta.set(n),r.uniformMatrix2fv(this.addr,!1,ta),ge(e,n)}}function kd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Qo.set(n),r.uniformMatrix3fv(this.addr,!1,Qo),ge(e,n)}}function Gd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Jo.set(n),r.uniformMatrix4fv(this.addr,!1,Jo),ge(e,n)}}function zd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Hd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2iv(this.addr,t),ge(e,t)}}function Vd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;r.uniform3iv(this.addr,t),ge(e,t)}}function Wd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4iv(this.addr,t),ge(e,t)}}function Xd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function qd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2uiv(this.addr,t),ge(e,t)}}function Yd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;r.uniform3uiv(this.addr,t),ge(e,t)}}function $d(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4uiv(this.addr,t),ge(e,t)}}function jd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(jo.compareFunction=za,s=jo):s=tc,e.setTexture2D(t||s,i)}function Kd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||nc,i)}function Zd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ic,i)}function Jd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ec,i)}function Qd(r){switch(r){case 5126:return Ud;case 35664:return Nd;case 35665:return Fd;case 35666:return Od;case 35674:return Bd;case 35675:return kd;case 35676:return Gd;case 5124:case 35670:return zd;case 35667:case 35671:return Hd;case 35668:case 35672:return Vd;case 35669:case 35673:return Wd;case 5125:return Xd;case 36294:return qd;case 36295:return Yd;case 36296:return $d;case 35678:case 36198:case 36298:case 36306:case 35682:return jd;case 35679:case 36299:case 36307:return Kd;case 35680:case 36300:case 36308:case 36293:return Zd;case 36289:case 36303:case 36311:case 36292:return Jd}}function tf(r,t){r.uniform1fv(this.addr,t)}function ef(r,t){const e=Ci(t,this.size,2);r.uniform2fv(this.addr,e)}function nf(r,t){const e=Ci(t,this.size,3);r.uniform3fv(this.addr,e)}function sf(r,t){const e=Ci(t,this.size,4);r.uniform4fv(this.addr,e)}function rf(r,t){const e=Ci(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function of(r,t){const e=Ci(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function af(r,t){const e=Ci(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function cf(r,t){r.uniform1iv(this.addr,t)}function lf(r,t){r.uniform2iv(this.addr,t)}function hf(r,t){r.uniform3iv(this.addr,t)}function uf(r,t){r.uniform4iv(this.addr,t)}function df(r,t){r.uniform1uiv(this.addr,t)}function ff(r,t){r.uniform2uiv(this.addr,t)}function pf(r,t){r.uniform3uiv(this.addr,t)}function mf(r,t){r.uniform4uiv(this.addr,t)}function gf(r,t,e){const n=this.cache,i=t.length,s=Is(e,i);me(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||tc,s[o])}function _f(r,t,e){const n=this.cache,i=t.length,s=Is(e,i);me(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||nc,s[o])}function xf(r,t,e){const n=this.cache,i=t.length,s=Is(e,i);me(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ic,s[o])}function vf(r,t,e){const n=this.cache,i=t.length,s=Is(e,i);me(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ec,s[o])}function Mf(r){switch(r){case 5126:return tf;case 35664:return ef;case 35665:return nf;case 35666:return sf;case 35674:return rf;case 35675:return of;case 35676:return af;case 5124:case 35670:return cf;case 35667:case 35671:return lf;case 35668:case 35672:return hf;case 35669:case 35673:return uf;case 5125:return df;case 36294:return ff;case 36295:return pf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return _f;case 35680:case 36300:case 36308:case 36293:return xf;case 36289:case 36303:case 36311:case 36292:return vf}}class yf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qd(e.type)}}class Sf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mf(e.type)}}class wf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const sr=/(\w+)(\])?(\[|\.)?/g;function ea(r,t){r.seq.push(t),r.map[t.id]=t}function Ef(r,t,e){const n=r.name,i=n.length;for(sr.lastIndex=0;;){const s=sr.exec(n),o=sr.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ea(e,l===void 0?new yf(a,r,t):new Sf(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new wf(a),ea(e,u)),e=u}}}class ws{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Ef(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function na(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Tf=37297;let bf=0;function Af(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ia=new Ot;function Cf(r){qt._getMatrix(ia,qt.workingColorSpace,r);const t=`mat3( ${ia.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(r)){case Rs:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function sa(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Af(r.getShaderSource(t),o)}else return i}function Rf(r,t){const e=Cf(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pf(r,t){let e;switch(t){case Lc:e="Linear";break;case Dc:e="Reinhard";break;case Uc:e="Cineon";break;case Ca:e="ACESFilmic";break;case Fc:e="AgX";break;case Oc:e="Neutral";break;case Nc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ps=new b;function If(){qt.getLuminanceCoefficients(ps);const r=ps.x.toFixed(4),t=ps.y.toFixed(4),e=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lf(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ki).join(`
`)}function Df(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Uf(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function ki(r){return r!==""}function ra(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oa(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yr(r){return r.replace(Nf,Of)}const Ff=new Map;function Of(r,t){let e=kt[t];if(e===void 0){const n=Ff.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yr(e)}const Bf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function aa(r){return r.replace(Bf,kf)}function kf(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ca(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function Gf(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ta?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ba?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function zf(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case _i:case xi:t="ENVMAP_TYPE_CUBE";break;case Cs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hf(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case xi:t="ENVMAP_MODE_REFRACTION";break}return t}function Vf(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Aa:t="ENVMAP_BLENDING_MULTIPLY";break;case Pc:t="ENVMAP_BLENDING_MIX";break;case Ic:t="ENVMAP_BLENDING_ADD";break}return t}function Wf(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xf(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Gf(e),l=zf(e),h=Hf(e),u=Vf(e),p=Wf(e),m=Lf(e),g=Df(s),_=i.createProgram();let d,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ki).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ki).join(`
`),f.length>0&&(f+=`
`)):(d=[ca(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),f=[ca(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?Pf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Rf("linearToOutputTexel",e.outputColorSpace),If(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ki).join(`
`)),o=Yr(o),o=ra(o,e),o=oa(o,e),a=Yr(a),a=ra(a,e),a=oa(a,e),o=aa(o),a=aa(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",e.glslVersion===Mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=S+d+o,v=S+f+a,L=na(i,i.VERTEX_SHADER,E),C=na(i,i.FRAGMENT_SHADER,v);i.attachShader(_,L),i.attachShader(_,C),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(R){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(L).trim(),X=i.getShaderInfoLog(C).trim();let $=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,L,C);else{const J=sa(i,L,"vertex"),B=sa(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+J+`
`+B)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||X==="")&&(W=!1);W&&(R.diagnostics={runnable:$,programLog:z,vertexShader:{log:k,prefix:d},fragmentShader:{log:X,prefix:f}})}i.deleteShader(L),i.deleteShader(C),P=new ws(i,_),w=Uf(i,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Tf)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}let qf=0;class Yf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $f(t),e.set(t,n)),n}}class $f{constructor(t){this.id=qf++,this.code=t,this.usedTimes=0}}function jf(r,t,e,n,i,s,o){const a=new ro,c=new Yf,l=new Set,h=[],u=i.logarithmicDepthBuffer,p=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function d(w,M,R,z,k){const X=z.fog,$=k.geometry,W=w.isMeshStandardMaterial?z.environment:null,J=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),B=J&&J.mapping===Cs?J.image.height:null,rt=g[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Mt=dt!==void 0?dt.length:0;let Nt=0;$.morphAttributes.position!==void 0&&(Nt=1),$.morphAttributes.normal!==void 0&&(Nt=2),$.morphAttributes.color!==void 0&&(Nt=3);let Yt,q,Q,xt;if(rt){const $t=Qe[rt];Yt=$t.vertexShader,q=$t.fragmentShader}else Yt=w.vertexShader,q=w.fragmentShader,c.update(w),Q=c.getVertexShaderID(w),xt=c.getFragmentShaderID(w);const ut=r.getRenderTarget(),Rt=r.state.buffers.depth.getReversed(),It=k.isInstancedMesh===!0,Bt=k.isBatchedMesh===!0,re=!!w.map,Vt=!!w.matcap,he=!!J,N=!!w.aoMap,Re=!!w.lightMap,Gt=!!w.bumpMap,Wt=!!w.normalMap,bt=!!w.displacementMap,Zt=!!w.emissiveMap,yt=!!w.metalnessMap,T=!!w.roughnessMap,x=w.anisotropy>0,O=w.clearcoat>0,K=w.dispersion>0,Z=w.iridescence>0,Y=w.sheen>0,vt=w.transmission>0,ct=x&&!!w.anisotropyMap,gt=O&&!!w.clearcoatMap,Xt=O&&!!w.clearcoatNormalMap,tt=O&&!!w.clearcoatRoughnessMap,mt=Z&&!!w.iridescenceMap,Ct=Z&&!!w.iridescenceThicknessMap,Pt=Y&&!!w.sheenColorMap,ft=Y&&!!w.sheenRoughnessMap,zt=!!w.specularMap,Ut=!!w.specularColorMap,te=!!w.specularIntensityMap,I=vt&&!!w.transmissionMap,st=vt&&!!w.thicknessMap,V=!!w.gradientMap,j=!!w.alphaMap,lt=w.alphaTest>0,ht=!!w.alphaHash,Lt=!!w.extensions;let ee=Pn;w.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ee=r.toneMapping);const fe={shaderID:rt,shaderType:w.type,shaderName:w.name,vertexShader:Yt,fragmentShader:q,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:xt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Bt,batchingColor:Bt&&k._colorsTexture!==null,instancing:It,instancingColor:It&&k.instanceColor!==null,instancingMorph:It&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ei,alphaToCoverage:!!w.alphaToCoverage,map:re,matcap:Vt,envMap:he,envMapMode:he&&J.mapping,envMapCubeUVHeight:B,aoMap:N,lightMap:Re,bumpMap:Gt,normalMap:Wt,displacementMap:p&&bt,emissiveMap:Zt,normalMapObjectSpace:Wt&&w.normalMapType===zc,normalMapTangentSpace:Wt&&w.normalMapType===Ga,metalnessMap:yt,roughnessMap:T,anisotropy:x,anisotropyMap:ct,clearcoat:O,clearcoatMap:gt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:tt,dispersion:K,iridescence:Z,iridescenceMap:mt,iridescenceThicknessMap:Ct,sheen:Y,sheenColorMap:Pt,sheenRoughnessMap:ft,specularMap:zt,specularColorMap:Ut,specularIntensityMap:te,transmission:vt,transmissionMap:I,thicknessMap:st,gradientMap:V,opaque:w.transparent===!1&&w.blending===fi&&w.alphaToCoverage===!1,alphaMap:j,alphaTest:lt,alphaHash:ht,combine:w.combine,mapUv:re&&_(w.map.channel),aoMapUv:N&&_(w.aoMap.channel),lightMapUv:Re&&_(w.lightMap.channel),bumpMapUv:Gt&&_(w.bumpMap.channel),normalMapUv:Wt&&_(w.normalMap.channel),displacementMapUv:bt&&_(w.displacementMap.channel),emissiveMapUv:Zt&&_(w.emissiveMap.channel),metalnessMapUv:yt&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:ct&&_(w.anisotropyMap.channel),clearcoatMapUv:gt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ft&&_(w.sheenRoughnessMap.channel),specularMapUv:zt&&_(w.specularMap.channel),specularColorMapUv:Ut&&_(w.specularColorMap.channel),specularIntensityMapUv:te&&_(w.specularIntensityMap.channel),transmissionMapUv:I&&_(w.transmissionMap.channel),thicknessMapUv:st&&_(w.thicknessMap.channel),alphaMapUv:j&&_(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Wt||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(re||j),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Nt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ee,decodeVideoTexture:re&&w.map.isVideoTexture===!0&&qt.getTransfer(w.map.colorSpace)===ne,decodeVideoTextureEmissive:Zt&&w.emissiveMap.isVideoTexture===!0&&qt.getTransfer(w.emissiveMap.colorSpace)===ne,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ae,flipSided:w.side===Ce,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Lt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&w.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function f(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)M.push(R),M.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(S(M,w),E(M,w),M.push(r.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function S(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function E(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const M=g[w.type];let R;if(M){const z=Qe[M];R=Il.clone(z.uniforms)}else R=w.uniforms;return R}function L(w,M){let R;for(let z=0,k=h.length;z<k;z++){const X=h[z];if(X.cacheKey===M){R=X,++R.usedTimes;break}}return R===void 0&&(R=new Xf(r,M,w,s),h.push(R)),R}function C(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function A(w){c.remove(w)}function P(){c.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:v,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:h,dispose:P}}function Kf(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Zf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function la(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ha(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,p,m,g,_,d){let f=r[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:d},r[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=d),t++,f}function a(u,p,m,g,_,d){const f=o(u,p,m,g,_,d);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function c(u,p,m,g,_,d){const f=o(u,p,m,g,_,d);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function l(u,p){e.length>1&&e.sort(u||Zf),n.length>1&&n.sort(p||la),i.length>1&&i.sort(p||la)}function h(){for(let u=t,p=r.length;u<p;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function Jf(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new ha,r.set(n,[o])):i>=s.length?(o=new ha,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Qf(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new Tt};break;case"SpotLight":e={position:new b,direction:new b,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new b,halfWidth:new b,halfHeight:new b};break}return r[t.id]=e,e}}}function tp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let ep=0;function np(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ip(r){const t=new Qf,e=tp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);const i=new b,s=new le,o=new le;function a(l){let h=0,u=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,g=0,_=0,d=0,f=0,S=0,E=0,v=0,L=0,C=0,A=0;l.sort(np);for(let w=0,M=l.length;w<M;w++){const R=l[w],z=R.color,k=R.intensity,X=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*k,u+=z.g*k,p+=z.b*k;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],k);A++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,B=e.get(R);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=R.shadow.matrix,S++}n.directional[m]=W,m++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(z).multiplyScalar(k),W.distance=X,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[_]=W;const J=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,J.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[_]=J.matrix,R.castShadow){const B=e.get(R);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=$,v++}_++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(z).multiplyScalar(k),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[d]=W,d++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const J=R.shadow,B=e.get(R);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,B.shadowCameraNear=J.camera.near,B.shadowCameraFar=J.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(k),W.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[f]=W,f++}}d>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const P=n.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==d||P.hemiLength!==f||P.numDirectionalShadows!==S||P.numPointShadows!==E||P.numSpotShadows!==v||P.numSpotMaps!==L||P.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=d,P.hemiLength=f,P.numDirectionalShadows=S,P.numPointShadows=E,P.numSpotShadows=v,P.numSpotMaps=L,P.numLightProbes=A,n.version=ep++)}function c(l,h){let u=0,p=0,m=0,g=0,_=0;const d=h.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){const E=l[f];if(E.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(d),u++}else if(E.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(d),v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(d),m++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(d),o.identity(),s.copy(E.matrixWorld),s.premultiply(d),o.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const v=n.point[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(d),p++}else if(E.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(d),_++}}}return{setup:a,setupView:c,state:n}}function ua(r){const t=new ip(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function sp(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new ua(r),t.set(i,[a])):s>=o.length?(a=new ua(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class rp extends Ai{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class op extends Ai{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ap=`void main() {
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
}`;function lp(r,t,e){let n=new oo;const i=new Ht,s=new Ht,o=new se,a=new rp({depthPacking:Gc}),c=new op,l={},h=e.maxTextureSize,u={[In]:Ce,[Ce]:In,[Ae]:Ae},p=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:ap,fragmentShader:cp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Le;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new D(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ta;let f=this.type;this.render=function(C,A,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;const w=r.getRenderTarget(),M=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Rn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=f!==un&&this.type===un,X=f===un&&this.type!==un;for(let $=0,W=C.length;$<W;$++){const J=C[$],B=J.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const rt=B.getFrameExtents();if(i.multiply(rt),s.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/rt.x),i.x=s.x*rt.x,B.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/rt.y),i.y=s.y*rt.y,B.mapSize.y=s.y)),B.map===null||k===!0||X===!0){const Mt=this.type!==un?{minFilter:Ke,magFilter:Ke}:{};B.map!==null&&B.map.dispose(),B.map=new Yn(i.x,i.y,Mt),B.map.texture.name=J.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const dt=B.getViewportCount();for(let Mt=0;Mt<dt;Mt++){const Nt=B.getViewport(Mt);o.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),z.viewport(o),B.updateMatrices(J,Mt),n=B.getFrustum(),v(A,P,B.camera,J,this.type)}B.isPointLightShadow!==!0&&this.type===un&&S(B,P),B.needsUpdate=!1}f=this.type,d.needsUpdate=!1,r.setRenderTarget(w,M,R)};function S(C,A){const P=t.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Yn(i.x,i.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(A,null,P,p,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(A,null,P,m,_,null)}function E(C,A,P,w){let M=null;const R=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?c:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=M.uuid,k=A.uuid;let X=l[z];X===void 0&&(X={},l[z]=X);let $=X[k];$===void 0&&($=M.clone(),X[k]=$,A.addEventListener("dispose",L)),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,w===un?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=r.properties.get(M);z.light=P}return M}function v(C,A,P,w,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===un)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const k=t.update(C),X=C.material;if(Array.isArray(X)){const $=k.groups;for(let W=0,J=$.length;W<J;W++){const B=$[W],rt=X[B.materialIndex];if(rt&&rt.visible){const dt=E(C,rt,w,M);C.onBeforeShadow(r,C,A,P,k,dt,B),r.renderBufferDirect(P,null,k,dt,C,B),C.onAfterShadow(r,C,A,P,k,dt,B)}}}else if(X.visible){const $=E(C,X,w,M);C.onBeforeShadow(r,C,A,P,k,$,null),r.renderBufferDirect(P,null,k,$,C,null),C.onAfterShadow(r,C,A,P,k,$,null)}}const z=C.children;for(let k=0,X=z.length;k<X;k++)v(z[k],A,P,w,M)}function L(C){C.target.removeEventListener("dispose",L);for(const P in l){const w=l[P],M=C.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const hp={[hr]:ur,[dr]:mr,[fr]:gr,[gi]:pr,[ur]:hr,[mr]:dr,[gr]:fr,[pr]:gi};function up(r,t){function e(){let I=!1;const st=new se;let V=null;const j=new se(0,0,0,0);return{setMask:function(lt){V!==lt&&!I&&(r.colorMask(lt,lt,lt,lt),V=lt)},setLocked:function(lt){I=lt},setClear:function(lt,ht,Lt,ee,fe){fe===!0&&(lt*=ee,ht*=ee,Lt*=ee),st.set(lt,ht,Lt,ee),j.equals(st)===!1&&(r.clearColor(lt,ht,Lt,ee),j.copy(st))},reset:function(){I=!1,V=null,j.set(-1,0,0,0)}}}function n(){let I=!1,st=!1,V=null,j=null,lt=null;return{setReversed:function(ht){if(st!==ht){const Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const ee=lt;lt=null,this.setClear(ee)}st=ht},getReversed:function(){return st},setTest:function(ht){ht?ut(r.DEPTH_TEST):Rt(r.DEPTH_TEST)},setMask:function(ht){V!==ht&&!I&&(r.depthMask(ht),V=ht)},setFunc:function(ht){if(st&&(ht=hp[ht]),j!==ht){switch(ht){case hr:r.depthFunc(r.NEVER);break;case ur:r.depthFunc(r.ALWAYS);break;case dr:r.depthFunc(r.LESS);break;case gi:r.depthFunc(r.LEQUAL);break;case fr:r.depthFunc(r.EQUAL);break;case pr:r.depthFunc(r.GEQUAL);break;case mr:r.depthFunc(r.GREATER);break;case gr:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=ht}},setLocked:function(ht){I=ht},setClear:function(ht){lt!==ht&&(st&&(ht=1-ht),r.clearDepth(ht),lt=ht)},reset:function(){I=!1,V=null,j=null,lt=null,st=!1}}}function i(){let I=!1,st=null,V=null,j=null,lt=null,ht=null,Lt=null,ee=null,fe=null;return{setTest:function($t){I||($t?ut(r.STENCIL_TEST):Rt(r.STENCIL_TEST))},setMask:function($t){st!==$t&&!I&&(r.stencilMask($t),st=$t)},setFunc:function($t,Se,Oe){(V!==$t||j!==Se||lt!==Oe)&&(r.stencilFunc($t,Se,Oe),V=$t,j=Se,lt=Oe)},setOp:function($t,Se,Oe){(ht!==$t||Lt!==Se||ee!==Oe)&&(r.stencilOp($t,Se,Oe),ht=$t,Lt=Se,ee=Oe)},setLocked:function($t){I=$t},setClear:function($t){fe!==$t&&(r.clearStencil($t),fe=$t)},reset:function(){I=!1,st=null,V=null,j=null,lt=null,ht=null,Lt=null,ee=null,fe=null}}}const s=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},p=new WeakMap,m=[],g=null,_=!1,d=null,f=null,S=null,E=null,v=null,L=null,C=null,A=new Tt(0,0,0),P=0,w=!1,M=null,R=null,z=null,k=null,X=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=J>=1):B.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=J>=2);let rt=null,dt={};const Mt=r.getParameter(r.SCISSOR_BOX),Nt=r.getParameter(r.VIEWPORT),Yt=new se().fromArray(Mt),q=new se().fromArray(Nt);function Q(I,st,V,j){const lt=new Uint8Array(4),ht=r.createTexture();r.bindTexture(I,ht),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Lt=0;Lt<V;Lt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(st,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(st+Lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return ht}const xt={};xt[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(r.DEPTH_TEST),o.setFunc(gi),Gt(!1),Wt(po),ut(r.CULL_FACE),N(Rn);function ut(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function Rt(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function It(I,st){return u[I]!==st?(r.bindFramebuffer(I,st),u[I]=st,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=st),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=st),!0):!1}function Bt(I,st){let V=m,j=!1;if(I){V=p.get(st),V===void 0&&(V=[],p.set(st,V));const lt=I.textures;if(V.length!==lt.length||V[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,Lt=lt.length;ht<Lt;ht++)V[ht]=r.COLOR_ATTACHMENT0+ht;V.length=lt.length,j=!0}}else V[0]!==r.BACK&&(V[0]=r.BACK,j=!0);j&&r.drawBuffers(V)}function re(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const Vt={[Hn]:r.FUNC_ADD,[fc]:r.FUNC_SUBTRACT,[pc]:r.FUNC_REVERSE_SUBTRACT};Vt[mc]=r.MIN,Vt[gc]=r.MAX;const he={[_c]:r.ZERO,[xc]:r.ONE,[vc]:r.SRC_COLOR,[cr]:r.SRC_ALPHA,[Tc]:r.SRC_ALPHA_SATURATE,[wc]:r.DST_COLOR,[yc]:r.DST_ALPHA,[Mc]:r.ONE_MINUS_SRC_COLOR,[lr]:r.ONE_MINUS_SRC_ALPHA,[Ec]:r.ONE_MINUS_DST_COLOR,[Sc]:r.ONE_MINUS_DST_ALPHA,[bc]:r.CONSTANT_COLOR,[Ac]:r.ONE_MINUS_CONSTANT_COLOR,[Cc]:r.CONSTANT_ALPHA,[Rc]:r.ONE_MINUS_CONSTANT_ALPHA};function N(I,st,V,j,lt,ht,Lt,ee,fe,$t){if(I===Rn){_===!0&&(Rt(r.BLEND),_=!1);return}if(_===!1&&(ut(r.BLEND),_=!0),I!==dc){if(I!==d||$t!==w){if((f!==Hn||v!==Hn)&&(r.blendEquation(r.FUNC_ADD),f=Hn,v=Hn),$t)switch(I){case fi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mo:r.blendFunc(r.ONE,r.ONE);break;case go:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _o:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case fi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case go:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _o:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,E=null,L=null,C=null,A.set(0,0,0),P=0,d=I,w=$t}return}lt=lt||st,ht=ht||V,Lt=Lt||j,(st!==f||lt!==v)&&(r.blendEquationSeparate(Vt[st],Vt[lt]),f=st,v=lt),(V!==S||j!==E||ht!==L||Lt!==C)&&(r.blendFuncSeparate(he[V],he[j],he[ht],he[Lt]),S=V,E=j,L=ht,C=Lt),(ee.equals(A)===!1||fe!==P)&&(r.blendColor(ee.r,ee.g,ee.b,fe),A.copy(ee),P=fe),d=I,w=!1}function Re(I,st){I.side===Ae?Rt(r.CULL_FACE):ut(r.CULL_FACE);let V=I.side===Ce;st&&(V=!V),Gt(V),I.blending===fi&&I.transparent===!1?N(Rn):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const j=I.stencilWrite;a.setTest(j),j&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Zt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):Rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(I){M!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),M=I)}function Wt(I){I!==hc?(ut(r.CULL_FACE),I!==R&&(I===po?r.cullFace(r.BACK):I===uc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Rt(r.CULL_FACE),R=I}function bt(I){I!==z&&(W&&r.lineWidth(I),z=I)}function Zt(I,st,V){I?(ut(r.POLYGON_OFFSET_FILL),(k!==st||X!==V)&&(r.polygonOffset(st,V),k=st,X=V)):Rt(r.POLYGON_OFFSET_FILL)}function yt(I){I?ut(r.SCISSOR_TEST):Rt(r.SCISSOR_TEST)}function T(I){I===void 0&&(I=r.TEXTURE0+$-1),rt!==I&&(r.activeTexture(I),rt=I)}function x(I,st,V){V===void 0&&(rt===null?V=r.TEXTURE0+$-1:V=rt);let j=dt[V];j===void 0&&(j={type:void 0,texture:void 0},dt[V]=j),(j.type!==I||j.texture!==st)&&(rt!==V&&(r.activeTexture(V),rt=V),r.bindTexture(I,st||xt[I]),j.type=I,j.texture=st)}function O(){const I=dt[rt];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xt(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(I){Yt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Yt.copy(I))}function ft(I){q.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function zt(I,st){let V=l.get(st);V===void 0&&(V=new WeakMap,l.set(st,V));let j=V.get(I);j===void 0&&(j=r.getUniformBlockIndex(st,I.name),V.set(I,j))}function Ut(I,st){const j=l.get(st).get(I);c.get(st)!==j&&(r.uniformBlockBinding(st,j,I.__bindingPointIndex),c.set(st,j))}function te(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},rt=null,dt={},u={},p=new WeakMap,m=[],g=null,_=!1,d=null,f=null,S=null,E=null,v=null,L=null,C=null,A=new Tt(0,0,0),P=0,w=!1,M=null,R=null,z=null,k=null,X=null,Yt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ut,disable:Rt,bindFramebuffer:It,drawBuffers:Bt,useProgram:re,setBlending:N,setMaterial:Re,setFlipSided:Gt,setCullFace:Wt,setLineWidth:bt,setPolygonOffset:Zt,setScissorTest:yt,activeTexture:T,bindTexture:x,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:mt,texImage3D:Ct,updateUBOMapping:zt,uniformBlockBinding:Ut,texStorage2D:Xt,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:vt,compressedTexSubImage2D:ct,compressedTexSubImage3D:gt,scissor:Pt,viewport:ft,reset:te}}function da(r,t,e,n){const i=dp(n);switch(e){case Da:return r*t;case Na:return r*t;case Fa:return r*t*2;case Oa:return r*t/i.components*i.byteLength;case to:return r*t/i.components*i.byteLength;case Ba:return r*t*2/i.components*i.byteLength;case eo:return r*t*2/i.components*i.byteLength;case Ua:return r*t*3/i.components*i.byteLength;case je:return r*t*4/i.components*i.byteLength;case no:return r*t*4/i.components*i.byteLength;case xs:case vs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ms:case ys:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sr:case Er:return Math.max(r,16)*Math.max(t,8)/4;case yr:case wr:return Math.max(r,8)*Math.max(t,8)/2;case Tr:case br:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ar:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rr:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Pr:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ir:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Lr:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Dr:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Nr:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Fr:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Or:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Br:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case kr:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Gr:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case zr:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ss:case Hr:case Vr:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ka:case Wr:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Xr:case qr:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dp(r){switch(r){case _n:case Pa:return{byteLength:1,components:1};case Hi:case Ia:case Vi:return{byteLength:2,components:1};case Jr:case Qr:return{byteLength:2,components:4};case qn:case Zr:case fn:return{byteLength:4,components:1};case La:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function fp(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ht,h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return m?new OffscreenCanvas(T,x):Ts("canvas")}function _(T,x,O){let K=1;const Z=yt(T);if((Z.width>O||Z.height>O)&&(K=O/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(K*Z.width),vt=Math.floor(K*Z.height);u===void 0&&(u=g(Y,vt));const ct=x?g(Y,vt):u;return ct.width=Y,ct.height=vt,ct.getContext("2d").drawImage(T,0,0,Y,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+vt+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function d(T){return T.generateMipmaps}function f(T){r.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(T,x,O,K,Z=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=x;if(x===r.RED&&(O===r.FLOAT&&(Y=r.R32F),O===r.HALF_FLOAT&&(Y=r.R16F),O===r.UNSIGNED_BYTE&&(Y=r.R8)),x===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.R8UI),O===r.UNSIGNED_SHORT&&(Y=r.R16UI),O===r.UNSIGNED_INT&&(Y=r.R32UI),O===r.BYTE&&(Y=r.R8I),O===r.SHORT&&(Y=r.R16I),O===r.INT&&(Y=r.R32I)),x===r.RG&&(O===r.FLOAT&&(Y=r.RG32F),O===r.HALF_FLOAT&&(Y=r.RG16F),O===r.UNSIGNED_BYTE&&(Y=r.RG8)),x===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RG8UI),O===r.UNSIGNED_SHORT&&(Y=r.RG16UI),O===r.UNSIGNED_INT&&(Y=r.RG32UI),O===r.BYTE&&(Y=r.RG8I),O===r.SHORT&&(Y=r.RG16I),O===r.INT&&(Y=r.RG32I)),x===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),O===r.UNSIGNED_INT&&(Y=r.RGB32UI),O===r.BYTE&&(Y=r.RGB8I),O===r.SHORT&&(Y=r.RGB16I),O===r.INT&&(Y=r.RGB32I)),x===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),O===r.UNSIGNED_INT&&(Y=r.RGBA32UI),O===r.BYTE&&(Y=r.RGBA8I),O===r.SHORT&&(Y=r.RGBA16I),O===r.INT&&(Y=r.RGBA32I)),x===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),x===r.RGBA){const vt=Z?Rs:qt.getTransfer(K);O===r.FLOAT&&(Y=r.RGBA32F),O===r.HALF_FLOAT&&(Y=r.RGBA16F),O===r.UNSIGNED_BYTE&&(Y=vt===ne?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(T,x){let O;return T?x===null||x===qn||x===vi?O=r.DEPTH24_STENCIL8:x===fn?O=r.DEPTH32F_STENCIL8:x===Hi&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===qn||x===vi?O=r.DEPTH_COMPONENT24:x===fn?O=r.DEPTH_COMPONENT32F:x===Hi&&(O=r.DEPTH_COMPONENT16),O}function L(T,x){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ke&&T.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function C(T){const x=T.target;x.removeEventListener("dispose",C),P(x),x.isVideoTexture&&h.delete(x)}function A(T){const x=T.target;x.removeEventListener("dispose",A),M(x)}function P(T){const x=n.get(T);if(x.__webglInit===void 0)return;const O=T.source,K=p.get(O);if(K){const Z=K[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(T),Object.keys(K).length===0&&p.delete(O)}n.remove(T)}function w(T){const x=n.get(T);r.deleteTexture(x.__webglTexture);const O=T.source,K=p.get(O);delete K[x.__cacheKey],o.memory.textures--}function M(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let Z=0;Z<x.__webglFramebuffer[K].length;Z++)r.deleteFramebuffer(x.__webglFramebuffer[K][Z]);else r.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)r.deleteFramebuffer(x.__webglFramebuffer[K]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=T.textures;for(let K=0,Z=O.length;K<Z;K++){const Y=n.get(O[K]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(T)}let R=0;function z(){R=0}function k(){const T=R;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),R+=1,T}function X(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function $(T,x){const O=n.get(T);if(T.isVideoTexture&&bt(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,T,x);return}}e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+x)}function W(T,x){const O=n.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,x);return}e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+x)}function J(T,x){const O=n.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,x);return}e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+x)}function B(T,x){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Q(O,T,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+x)}const rt={[vr]:r.REPEAT,[Wn]:r.CLAMP_TO_EDGE,[Mr]:r.MIRRORED_REPEAT},dt={[Ke]:r.NEAREST,[Bc]:r.NEAREST_MIPMAP_NEAREST,[$i]:r.NEAREST_MIPMAP_LINEAR,[tn]:r.LINEAR,[Ls]:r.LINEAR_MIPMAP_NEAREST,[Xn]:r.LINEAR_MIPMAP_LINEAR},Mt={[Hc]:r.NEVER,[$c]:r.ALWAYS,[Vc]:r.LESS,[za]:r.LEQUAL,[Wc]:r.EQUAL,[Yc]:r.GEQUAL,[Xc]:r.GREATER,[qc]:r.NOTEQUAL};function Nt(T,x){if(x.type===fn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===Ls||x.magFilter===$i||x.magFilter===Xn||x.minFilter===tn||x.minFilter===Ls||x.minFilter===$i||x.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,rt[x.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,rt[x.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,rt[x.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,dt[x.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,dt[x.minFilter]),x.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,Mt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ke||x.minFilter!==$i&&x.minFilter!==Xn||x.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");r.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Yt(T,x){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",C));const K=x.source;let Z=p.get(K);Z===void 0&&(Z={},p.set(K,Z));const Y=X(x);if(Y!==T.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[Y].usedTimes++;const vt=Z[T.__cacheKey];vt!==void 0&&(Z[T.__cacheKey].usedTimes--,vt.usedTimes===0&&w(x)),T.__cacheKey=Y,T.__webglTexture=Z[Y].texture}return O}function q(T,x,O){let K=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=r.TEXTURE_3D);const Z=Yt(T,x),Y=x.source;e.bindTexture(K,T.__webglTexture,r.TEXTURE0+O);const vt=n.get(Y);if(Y.version!==vt.__version||Z===!0){e.activeTexture(r.TEXTURE0+O);const ct=qt.getPrimaries(qt.workingColorSpace),gt=x.colorSpace===Cn?null:qt.getPrimaries(x.colorSpace),Xt=x.colorSpace===Cn||ct===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let tt=_(x.image,!1,i.maxTextureSize);tt=Zt(x,tt);const mt=s.convert(x.format,x.colorSpace),Ct=s.convert(x.type);let Pt=E(x.internalFormat,mt,Ct,x.colorSpace,x.isVideoTexture);Nt(K,x);let ft;const zt=x.mipmaps,Ut=x.isVideoTexture!==!0,te=vt.__version===void 0||Z===!0,I=Y.dataReady,st=L(x,tt);if(x.isDepthTexture)Pt=v(x.format===Mi,x.type),te&&(Ut?e.texStorage2D(r.TEXTURE_2D,1,Pt,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,Pt,tt.width,tt.height,0,mt,Ct,null));else if(x.isDataTexture)if(zt.length>0){Ut&&te&&e.texStorage2D(r.TEXTURE_2D,st,Pt,zt[0].width,zt[0].height);for(let V=0,j=zt.length;V<j;V++)ft=zt[V],Ut?I&&e.texSubImage2D(r.TEXTURE_2D,V,0,0,ft.width,ft.height,mt,Ct,ft.data):e.texImage2D(r.TEXTURE_2D,V,Pt,ft.width,ft.height,0,mt,Ct,ft.data);x.generateMipmaps=!1}else Ut?(te&&e.texStorage2D(r.TEXTURE_2D,st,Pt,tt.width,tt.height),I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,tt.width,tt.height,mt,Ct,tt.data)):e.texImage2D(r.TEXTURE_2D,0,Pt,tt.width,tt.height,0,mt,Ct,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ut&&te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,st,Pt,zt[0].width,zt[0].height,tt.depth);for(let V=0,j=zt.length;V<j;V++)if(ft=zt[V],x.format!==je)if(mt!==null)if(Ut){if(I)if(x.layerUpdates.size>0){const lt=da(ft.width,ft.height,x.format,x.type);for(const ht of x.layerUpdates){const Lt=ft.data.subarray(ht*lt/ft.data.BYTES_PER_ELEMENT,(ht+1)*lt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,ht,ft.width,ft.height,1,mt,Lt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,ft.width,ft.height,tt.depth,mt,ft.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,V,Pt,ft.width,ft.height,tt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?I&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,ft.width,ft.height,tt.depth,mt,Ct,ft.data):e.texImage3D(r.TEXTURE_2D_ARRAY,V,Pt,ft.width,ft.height,tt.depth,0,mt,Ct,ft.data)}else{Ut&&te&&e.texStorage2D(r.TEXTURE_2D,st,Pt,zt[0].width,zt[0].height);for(let V=0,j=zt.length;V<j;V++)ft=zt[V],x.format!==je?mt!==null?Ut?I&&e.compressedTexSubImage2D(r.TEXTURE_2D,V,0,0,ft.width,ft.height,mt,ft.data):e.compressedTexImage2D(r.TEXTURE_2D,V,Pt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?I&&e.texSubImage2D(r.TEXTURE_2D,V,0,0,ft.width,ft.height,mt,Ct,ft.data):e.texImage2D(r.TEXTURE_2D,V,Pt,ft.width,ft.height,0,mt,Ct,ft.data)}else if(x.isDataArrayTexture)if(Ut){if(te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,st,Pt,tt.width,tt.height,tt.depth),I)if(x.layerUpdates.size>0){const V=da(tt.width,tt.height,x.format,x.type);for(const j of x.layerUpdates){const lt=tt.data.subarray(j*V/tt.data.BYTES_PER_ELEMENT,(j+1)*V/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,mt,Ct,lt)}x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,Ct,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,tt.width,tt.height,tt.depth,0,mt,Ct,tt.data);else if(x.isData3DTexture)Ut?(te&&e.texStorage3D(r.TEXTURE_3D,st,Pt,tt.width,tt.height,tt.depth),I&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,Ct,tt.data)):e.texImage3D(r.TEXTURE_3D,0,Pt,tt.width,tt.height,tt.depth,0,mt,Ct,tt.data);else if(x.isFramebufferTexture){if(te)if(Ut)e.texStorage2D(r.TEXTURE_2D,st,Pt,tt.width,tt.height);else{let V=tt.width,j=tt.height;for(let lt=0;lt<st;lt++)e.texImage2D(r.TEXTURE_2D,lt,Pt,V,j,0,mt,Ct,null),V>>=1,j>>=1}}else if(zt.length>0){if(Ut&&te){const V=yt(zt[0]);e.texStorage2D(r.TEXTURE_2D,st,Pt,V.width,V.height)}for(let V=0,j=zt.length;V<j;V++)ft=zt[V],Ut?I&&e.texSubImage2D(r.TEXTURE_2D,V,0,0,mt,Ct,ft):e.texImage2D(r.TEXTURE_2D,V,Pt,mt,Ct,ft);x.generateMipmaps=!1}else if(Ut){if(te){const V=yt(tt);e.texStorage2D(r.TEXTURE_2D,st,Pt,V.width,V.height)}I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,mt,Ct,tt)}else e.texImage2D(r.TEXTURE_2D,0,Pt,mt,Ct,tt);d(x)&&f(K),vt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Q(T,x,O){if(x.image.length!==6)return;const K=Yt(T,x),Z=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+O);const Y=n.get(Z);if(Z.version!==Y.__version||K===!0){e.activeTexture(r.TEXTURE0+O);const vt=qt.getPrimaries(qt.workingColorSpace),ct=x.colorSpace===Cn?null:qt.getPrimaries(x.colorSpace),gt=x.colorSpace===Cn||vt===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Xt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,mt=[];for(let j=0;j<6;j++)!Xt&&!tt?mt[j]=_(x.image[j],!0,i.maxCubemapSize):mt[j]=tt?x.image[j].image:x.image[j],mt[j]=Zt(x,mt[j]);const Ct=mt[0],Pt=s.convert(x.format,x.colorSpace),ft=s.convert(x.type),zt=E(x.internalFormat,Pt,ft,x.colorSpace),Ut=x.isVideoTexture!==!0,te=Y.__version===void 0||K===!0,I=Z.dataReady;let st=L(x,Ct);Nt(r.TEXTURE_CUBE_MAP,x);let V;if(Xt){Ut&&te&&e.texStorage2D(r.TEXTURE_CUBE_MAP,st,zt,Ct.width,Ct.height);for(let j=0;j<6;j++){V=mt[j].mipmaps;for(let lt=0;lt<V.length;lt++){const ht=V[lt];x.format!==je?Pt!==null?Ut?I&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,0,0,ht.width,ht.height,Pt,ht.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,zt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,0,0,ht.width,ht.height,Pt,ft,ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,zt,ht.width,ht.height,0,Pt,ft,ht.data)}}}else{if(V=x.mipmaps,Ut&&te){V.length>0&&st++;const j=yt(mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,st,zt,j.width,j.height)}for(let j=0;j<6;j++)if(tt){Ut?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,mt[j].width,mt[j].height,Pt,ft,mt[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,zt,mt[j].width,mt[j].height,0,Pt,ft,mt[j].data);for(let lt=0;lt<V.length;lt++){const Lt=V[lt].image[j].image;Ut?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,0,0,Lt.width,Lt.height,Pt,ft,Lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,zt,Lt.width,Lt.height,0,Pt,ft,Lt.data)}}else{Ut?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pt,ft,mt[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,zt,Pt,ft,mt[j]);for(let lt=0;lt<V.length;lt++){const ht=V[lt];Ut?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,0,0,Pt,ft,ht.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,zt,Pt,ft,ht.image[j])}}}d(x)&&f(r.TEXTURE_CUBE_MAP),Y.__version=Z.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function xt(T,x,O,K,Z,Y){const vt=s.convert(O.format,O.colorSpace),ct=s.convert(O.type),gt=E(O.internalFormat,vt,ct,O.colorSpace),Xt=n.get(x),tt=n.get(O);if(tt.__renderTarget=x,!Xt.__hasExternalTextures){const mt=Math.max(1,x.width>>Y),Ct=Math.max(1,x.height>>Y);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,gt,mt,Ct,x.depth,0,vt,ct,null):e.texImage2D(Z,Y,gt,mt,Ct,0,vt,ct,null)}e.bindFramebuffer(r.FRAMEBUFFER,T),Wt(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,Z,tt.__webglTexture,0,Gt(x)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,Z,tt.__webglTexture,Y),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(T,x,O){if(r.bindRenderbuffer(r.RENDERBUFFER,T),x.depthBuffer){const K=x.depthTexture,Z=K&&K.isDepthTexture?K.type:null,Y=v(x.stencilBuffer,Z),vt=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=Gt(x);Wt(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,Y,x.width,x.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,Y,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Y,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,T)}else{const K=x.textures;for(let Z=0;Z<K.length;Z++){const Y=K[Z],vt=s.convert(Y.format,Y.colorSpace),ct=s.convert(Y.type),gt=E(Y.internalFormat,vt,ct,Y.colorSpace),Xt=Gt(x);O&&Wt(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,gt,x.width,x.height):Wt(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt,gt,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,gt,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Rt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const Z=K.__webglTexture,Y=Gt(x);if(x.depthTexture.format===pi)Wt(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(x.depthTexture.format===Mi)Wt(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function It(T){const x=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=K}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Rt(x.__webglFramebuffer,T)}else if(O){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=r.createRenderbuffer(),ut(x.__webglDepthbuffer[K],T,!1);else{const Z=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),ut(x.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Z)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(T,x,O){const K=n.get(T);x!==void 0&&xt(K.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&It(T)}function re(T){const x=T.texture,O=n.get(T),K=n.get(x);T.addEventListener("dispose",A);const Z=T.textures,Y=T.isWebGLCubeRenderTarget===!0,vt=Z.length>1;if(vt||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=x.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let gt=0;gt<x.mipmaps.length;gt++)O.__webglFramebuffer[ct][gt]=r.createFramebuffer()}else O.__webglFramebuffer[ct]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)O.__webglFramebuffer[ct]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(vt)for(let ct=0,gt=Z.length;ct<gt;ct++){const Xt=n.get(Z[ct]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),o.memory.textures++)}if(T.samples>0&&Wt(T)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<Z.length;ct++){const gt=Z[ct];O.__webglColorRenderbuffer[ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);const Xt=s.convert(gt.format,gt.colorSpace),tt=s.convert(gt.type),mt=E(gt.internalFormat,Xt,tt,gt.colorSpace,T.isXRRenderTarget===!0),Ct=Gt(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,mt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),ut(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Nt(r.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)xt(O.__webglFramebuffer[ct][gt],T,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,gt);else xt(O.__webglFramebuffer[ct],T,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);d(x)&&f(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ct=0,gt=Z.length;ct<gt;ct++){const Xt=Z[ct],tt=n.get(Xt);e.bindTexture(r.TEXTURE_2D,tt.__webglTexture),Nt(r.TEXTURE_2D,Xt),xt(O.__webglFramebuffer,T,Xt,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,0),d(Xt)&&f(r.TEXTURE_2D)}e.unbindTexture()}else{let ct=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ct,K.__webglTexture),Nt(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)xt(O.__webglFramebuffer[gt],T,x,r.COLOR_ATTACHMENT0,ct,gt);else xt(O.__webglFramebuffer,T,x,r.COLOR_ATTACHMENT0,ct,0);d(x)&&f(ct),e.unbindTexture()}T.depthBuffer&&It(T)}function Vt(T){const x=T.textures;for(let O=0,K=x.length;O<K;O++){const Z=x[O];if(d(Z)){const Y=S(T),vt=n.get(Z).__webglTexture;e.bindTexture(Y,vt),f(Y),e.unbindTexture()}}}const he=[],N=[];function Re(T){if(T.samples>0){if(Wt(T)===!1){const x=T.textures,O=T.width,K=T.height;let Z=r.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=n.get(T),ct=x.length>1;if(ct)for(let gt=0;gt<x.length;gt++)e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let gt=0;gt<x.length;gt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,vt.__webglColorRenderbuffer[gt]);const Xt=n.get(x[gt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xt,0)}r.blitFramebuffer(0,0,O,K,0,0,O,K,Z,r.NEAREST),c===!0&&(he.length=0,N.length=0,he.push(r.COLOR_ATTACHMENT0+gt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(he.push(Y),N.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ct)for(let gt=0;gt<x.length;gt++){e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,vt.__webglColorRenderbuffer[gt]);const Xt=n.get(x[gt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,Xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function Gt(T){return Math.min(i.maxSamples,T.samples)}function Wt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function bt(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Zt(T,x){const O=T.colorSpace,K=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ei&&O!==Cn&&(qt.getTransfer(O)===ne?(K!==je||Z!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function yt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=B,this.rebindTextures=Bt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Wt}function pp(r,t){function e(n,i=Cn){let s;const o=qt.getTransfer(i);if(n===_n)return r.UNSIGNED_BYTE;if(n===Jr)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Qr)return r.UNSIGNED_SHORT_5_5_5_1;if(n===La)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Pa)return r.BYTE;if(n===Ia)return r.SHORT;if(n===Hi)return r.UNSIGNED_SHORT;if(n===Zr)return r.INT;if(n===qn)return r.UNSIGNED_INT;if(n===fn)return r.FLOAT;if(n===Vi)return r.HALF_FLOAT;if(n===Da)return r.ALPHA;if(n===Ua)return r.RGB;if(n===je)return r.RGBA;if(n===Na)return r.LUMINANCE;if(n===Fa)return r.LUMINANCE_ALPHA;if(n===pi)return r.DEPTH_COMPONENT;if(n===Mi)return r.DEPTH_STENCIL;if(n===Oa)return r.RED;if(n===to)return r.RED_INTEGER;if(n===Ba)return r.RG;if(n===eo)return r.RG_INTEGER;if(n===no)return r.RGBA_INTEGER;if(n===xs||n===vs||n===Ms||n===ys)if(o===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ms)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ys)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yr||n===Sr||n===wr||n===Er)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===yr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Er)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tr||n===br||n===Ar)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Tr||n===br)return o===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ar)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cr||n===Rr||n===Pr||n===Ir||n===Lr||n===Dr||n===Ur||n===Nr||n===Fr||n===Or||n===Br||n===kr||n===Gr||n===zr)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Cr)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rr)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pr)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ir)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lr)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dr)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ur)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nr)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fr)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Or)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Br)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kr)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gr)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zr)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ss||n===Hr||n===Vr)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ss)return o===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ka||n===Wr||n===Xr||n===qr)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ss)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qr)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class mp extends be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _t extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gp={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,n),f=this._getHandJoint(l,_);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&p>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _p=`
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

}`;class vp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ie,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new nn({vertexShader:_p,fragmentShader:xp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new D(new gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mp extends Ti{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,m=null,g=null;const _=new vp,d=e.getContextAttributes();let f=null,S=null;const E=[],v=[],L=new Ht;let C=null;const A=new be;A.viewport=new se;const P=new be;P.viewport=new se;const w=[A,P],M=new mp;let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=E[q];return Q===void 0&&(Q=new rr,E[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=E[q];return Q===void 0&&(Q=new rr,E[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=E[q];return Q===void 0&&(Q=new rr,E[q]=Q),Q.getHandSpace()};function k(q){const Q=v.indexOf(q.inputSource);if(Q===-1)return;const xt=E[Q];xt!==void 0&&(xt.update(q.inputSource,q.frame,l||o),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",$);for(let q=0;q<E.length;q++){const Q=v[q];Q!==null&&(v[q]=null,E[q].disconnect(Q))}R=null,z=null,_.reset(),t.setRenderTarget(f),m=null,p=null,u=null,i=null,S=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",X),i.addEventListener("inputsourceschange",$),d.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){const Q={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Yn(m.framebufferWidth,m.framebufferHeight,{format:je,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let Q=null,xt=null,ut=null;d.depth&&(ut=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=d.stencil?Mi:pi,xt=d.stencil?vi:qn);const Rt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};u=new XRWebGLBinding(i,e),p=u.createProjectionLayer(Rt),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new Yn(p.textureWidth,p.textureHeight,{format:je,type:_n,depthTexture:new Qa(p.textureWidth,p.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(q){for(let Q=0;Q<q.removed.length;Q++){const xt=q.removed[Q],ut=v.indexOf(xt);ut>=0&&(v[ut]=null,E[ut].disconnect(xt))}for(let Q=0;Q<q.added.length;Q++){const xt=q.added[Q];let ut=v.indexOf(xt);if(ut===-1){for(let It=0;It<E.length;It++)if(It>=v.length){v.push(xt),ut=It;break}else if(v[It]===null){v[It]=xt,ut=It;break}if(ut===-1)break}const Rt=E[ut];Rt&&Rt.connect(xt)}}const W=new b,J=new b;function B(q,Q,xt){W.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(xt.matrixWorld);const ut=W.distanceTo(J),Rt=Q.projectionMatrix.elements,It=xt.projectionMatrix.elements,Bt=Rt[14]/(Rt[10]-1),re=Rt[14]/(Rt[10]+1),Vt=(Rt[9]+1)/Rt[5],he=(Rt[9]-1)/Rt[5],N=(Rt[8]-1)/Rt[0],Re=(It[8]+1)/It[0],Gt=Bt*N,Wt=Bt*Re,bt=ut/(-N+Re),Zt=bt*-N;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Zt),q.translateZ(bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const yt=Bt+bt,T=re+bt,x=Gt-Zt,O=Wt+(ut-Zt),K=Vt*re/T*yt,Z=he*re/T*yt;q.projectionMatrix.makePerspective(x,O,K,Z,yt,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,xt=q.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(xt=_.depthFar)),M.near=P.near=A.near=Q,M.far=P.far=A.far=xt,(R!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,z=M.far),A.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const ut=q.parent,Rt=M.cameras;rt(M,ut);for(let It=0;It<Rt.length;It++)rt(Rt[It],ut);Rt.length===2?B(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),dt(q,M,ut)};function dt(q,Q,xt){xt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=yi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(q){c=q,p!==null&&(p.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Mt=null;function Nt(q,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){const xt=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let ut=!1;xt.length!==M.cameras.length&&(M.cameras.length=0,ut=!0);for(let It=0;It<xt.length;It++){const Bt=xt[It];let re=null;if(m!==null)re=m.getViewport(Bt);else{const he=u.getViewSubImage(p,Bt);re=he.viewport,It===0&&(t.setRenderTargetTextures(S,he.colorTexture,p.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(S))}let Vt=w[It];Vt===void 0&&(Vt=new be,Vt.layers.enable(It),Vt.viewport=new se,w[It]=Vt),Vt.matrix.fromArray(Bt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Bt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(re.x,re.y,re.width,re.height),It===0&&(M.matrix.copy(Vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ut===!0&&M.cameras.push(Vt)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const It=u.getDepthInformation(xt[0]);It&&It.isValid&&It.texture&&_.init(t,It,i.renderState)}}for(let xt=0;xt<E.length;xt++){const ut=v[xt],Rt=E[xt];ut!==null&&Rt!==void 0&&Rt.update(ut,Q,l||o)}Mt&&Mt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Yt=new Za;Yt.setAnimationLoop(Nt),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}}const kn=new en,yp=new le;function Sp(r,t){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,$a(r)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function i(d,f,S,E,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(d,f):f.isMeshToonMaterial?(s(d,f),u(d,f)):f.isMeshPhongMaterial?(s(d,f),h(d,f)):f.isMeshStandardMaterial?(s(d,f),p(d,f),f.isMeshPhysicalMaterial&&m(d,f,v)):f.isMeshMatcapMaterial?(s(d,f),g(d,f)):f.isMeshDepthMaterial?s(d,f):f.isMeshDistanceMaterial?(s(d,f),_(d,f)):f.isMeshNormalMaterial?s(d,f):f.isLineBasicMaterial?(o(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?c(d,f,S,E):f.isSpriteMaterial?l(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Ce&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Ce&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const S=t.get(f),E=S.envMap,v=S.envMapRotation;E&&(d.envMap.value=E,kn.copy(v),kn.x*=-1,kn.y*=-1,kn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),d.envMapRotation.value.setFromMatrix4(yp.makeRotationFromEuler(kn)),d.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function o(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function c(d,f,S,E){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*S,d.scale.value=E*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function l(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function h(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function p(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,S){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ce&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function _(d,f){const S=t.get(f).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wp(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,E){const v=E.program;n.uniformBlockBinding(S,v)}function l(S,E){let v=i[S.id];v===void 0&&(g(S),v=h(S),i[S.id]=v,S.addEventListener("dispose",d));const L=E.program;n.updateUBOMapping(S,L);const C=t.render.frame;s[S.id]!==C&&(p(S),s[S.id]=C)}function h(S){const E=u();S.__bindingPointIndex=E;const v=r.createBuffer(),L=S.__size,C=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,L,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const E=i[S.id],v=S.uniforms,L=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let C=0,A=v.length;C<A;C++){const P=Array.isArray(v[C])?v[C]:[v[C]];for(let w=0,M=P.length;w<M;w++){const R=P[w];if(m(R,C,w,L)===!0){const z=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let $=0;$<k.length;$++){const W=k[$],J=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,z+X,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(S,E,v,L){const C=S.value,A=E+"_"+v;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const P=L[A];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return L[A]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(S){const E=S.uniforms;let v=0;const L=16;for(let A=0,P=E.length;A<P;A++){const w=Array.isArray(E[A])?E[A]:[E[A]];for(let M=0,R=w.length;M<R;M++){const z=w[M],k=Array.isArray(z.value)?z.value:[z.value];for(let X=0,$=k.length;X<$;X++){const W=k[X],J=_(W),B=v%L,rt=B%J.boundary,dt=B+rt;v+=rt,dt!==0&&L-dt<J.storage&&(v+=L-dt),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=J.storage}}}const C=v%L;return C>0&&(v+=L-C),S.__size=v,S.__cache={},this}function _(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function d(S){const E=S.target;E.removeEventListener("dispose",d);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function f(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:c,update:l,dispose:f}}class fa{constructor(t={}){const{canvas:e=ul(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let d=null,f=null;const S=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=Pn,this.toneMappingExposure=1;const v=this;let L=!1,C=0,A=0,P=null,w=-1,M=null;const R=new se,z=new se;let k=null;const X=new Tt(0);let $=0,W=e.width,J=e.height,B=1,rt=null,dt=null;const Mt=new se(0,0,W,J),Nt=new se(0,0,W,J);let Yt=!1;const q=new oo;let Q=!1,xt=!1;const ut=new le,Rt=new le,It=new b,Bt=new se,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function he(){return P===null?B:1}let N=n;function Re(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kr}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),N===null){const U="webgl2";if(N=Re(U,y),N===null)throw Re(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Gt,Wt,bt,Zt,yt,T,x,O,K,Z,Y,vt,ct,gt,Xt,tt,mt,Ct,Pt,ft,zt,Ut,te,I;function st(){Gt=new Cd(N),Gt.init(),Ut=new pp(N,Gt),Wt=new Sd(N,Gt,t,Ut),bt=new up(N,Gt),Wt.reverseDepthBuffer&&p&&bt.buffers.depth.setReversed(!0),Zt=new Id(N),yt=new Kf,T=new fp(N,Gt,bt,yt,Wt,Ut,Zt),x=new Ed(v),O=new Ad(v),K=new Bl(N),te=new Md(N,K),Z=new Rd(N,K,Zt,te),Y=new Dd(N,Z,K,Zt),Pt=new Ld(N,Wt,T),tt=new wd(yt),vt=new jf(v,x,O,Gt,Wt,te,tt),ct=new Sp(v,yt),gt=new Jf,Xt=new sp(Gt),Ct=new vd(v,x,O,bt,Y,m,c),mt=new lp(v,Y,Wt),I=new wp(N,Zt,Wt,bt),ft=new yd(N,Gt,Zt),zt=new Pd(N,Gt,Zt),Zt.programs=vt.programs,v.capabilities=Wt,v.extensions=Gt,v.properties=yt,v.renderLists=gt,v.shadowMap=mt,v.state=bt,v.info=Zt}st();const V=new Mp(v,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=Gt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Gt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(y){y!==void 0&&(B=y,this.setSize(W,J,!1))},this.getSize=function(y){return y.set(W,J)},this.setSize=function(y,U,G=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,J=U,e.width=Math.floor(y*B),e.height=Math.floor(U*B),G===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(W*B,J*B).floor()},this.setDrawingBufferSize=function(y,U,G){W=y,J=U,B=G,e.width=Math.floor(y*G),e.height=Math.floor(U*G),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(Mt)},this.setViewport=function(y,U,G,H){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,U,G,H),bt.viewport(R.copy(Mt).multiplyScalar(B).round())},this.getScissor=function(y){return y.copy(Nt)},this.setScissor=function(y,U,G,H){y.isVector4?Nt.set(y.x,y.y,y.z,y.w):Nt.set(y,U,G,H),bt.scissor(z.copy(Nt).multiplyScalar(B).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(y){bt.setScissorTest(Yt=y)},this.setOpaqueSort=function(y){rt=y},this.setTransparentSort=function(y){dt=y},this.getClearColor=function(y){return y.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(y=!0,U=!0,G=!0){let H=0;if(y){let F=!1;if(P!==null){const et=P.texture.format;F=et===no||et===eo||et===to}if(F){const et=P.texture.type,pt=et===_n||et===qn||et===Hi||et===vi||et===Jr||et===Qr,St=Ct.getClearColor(),wt=Ct.getClearAlpha(),Dt=St.r,Ft=St.g,Et=St.b;pt?(g[0]=Dt,g[1]=Ft,g[2]=Et,g[3]=wt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Dt,_[1]=Ft,_[2]=Et,_[3]=wt,N.clearBufferiv(N.COLOR,0,_))}else H|=N.COLOR_BUFFER_BIT}U&&(H|=N.DEPTH_BUFFER_BIT),G&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),gt.dispose(),Xt.dispose(),yt.dispose(),x.dispose(),O.dispose(),Y.dispose(),te.dispose(),I.dispose(),vt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Ln),V.removeEventListener("sessionend",Dn),Ze.stop()};function j(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=Zt.autoReset,U=mt.enabled,G=mt.autoUpdate,H=mt.needsUpdate,F=mt.type;st(),Zt.autoReset=y,mt.enabled=U,mt.autoUpdate=G,mt.needsUpdate=H,mt.type=F}function ht(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Lt(y){const U=y.target;U.removeEventListener("dispose",Lt),ee(U)}function ee(y){fe(y),yt.remove(y)}function fe(y){const U=yt.get(y).programs;U!==void 0&&(U.forEach(function(G){vt.releaseProgram(G)}),y.isShaderMaterial&&vt.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,G,H,F,et){U===null&&(U=re);const pt=F.isMesh&&F.matrixWorld.determinant()<0,St=ac(y,U,G,H,F);bt.setMaterial(H,pt);let wt=G.index,Dt=1;if(H.wireframe===!0){if(wt=Z.getWireframeAttribute(G),wt===void 0)return;Dt=2}const Ft=G.drawRange,Et=G.attributes.position;let jt=Ft.start*Dt,oe=(Ft.start+Ft.count)*Dt;et!==null&&(jt=Math.max(jt,et.start*Dt),oe=Math.min(oe,(et.start+et.count)*Dt)),wt!==null?(jt=Math.max(jt,0),oe=Math.min(oe,wt.count)):Et!=null&&(jt=Math.max(jt,0),oe=Math.min(oe,Et.count));const ae=oe-jt;if(ae<0||ae===1/0)return;te.setup(F,H,St,G,wt);let Pe,Jt=ft;if(wt!==null&&(Pe=K.get(wt),Jt=zt,Jt.setIndex(Pe)),F.isMesh)H.wireframe===!0?(bt.setLineWidth(H.wireframeLinewidth*he()),Jt.setMode(N.LINES)):Jt.setMode(N.TRIANGLES);else if(F.isLine){let At=H.linewidth;At===void 0&&(At=1),bt.setLineWidth(At*he()),F.isLineSegments?Jt.setMode(N.LINES):F.isLineLoop?Jt.setMode(N.LINE_LOOP):Jt.setMode(N.LINE_STRIP)}else F.isPoints?Jt.setMode(N.POINTS):F.isSprite&&Jt.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const At=F._multiDrawStarts,rn=F._multiDrawCounts,Qt=F._multiDrawCount,We=wt?K.get(wt).bytesPerElement:1,jn=yt.get(H).currentProgram.getUniforms();for(let Ue=0;Ue<Qt;Ue++)jn.setValue(N,"_gl_DrawID",Ue),Jt.render(At[Ue]/We,rn[Ue])}else if(F.isInstancedMesh)Jt.renderInstances(jt,ae,F.count);else if(G.isInstancedBufferGeometry){const At=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,rn=Math.min(G.instanceCount,At);Jt.renderInstances(jt,ae,rn)}else Jt.render(jt,ae)};function $t(y,U,G){y.transparent===!0&&y.side===Ae&&y.forceSinglePass===!1?(y.side=Ce,y.needsUpdate=!0,xn(y,U,G),y.side=In,y.needsUpdate=!0,xn(y,U,G),y.side=Ae):xn(y,U,G)}this.compile=function(y,U,G=null){G===null&&(G=y),f=Xt.get(G),f.init(U),E.push(f),G.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),y!==G&&y.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const H=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const et=F.material;if(et)if(Array.isArray(et))for(let pt=0;pt<et.length;pt++){const St=et[pt];$t(St,G,F),H.add(St)}else $t(et,G,F),H.add(et)}),E.pop(),f=null,H},this.compileAsync=function(y,U,G=null){const H=this.compile(y,U,G);return new Promise(F=>{function et(){if(H.forEach(function(pt){yt.get(pt).currentProgram.isReady()&&H.delete(pt)}),H.size===0){F(y);return}setTimeout(et,10)}Gt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Se=null;function Oe(y){Se&&Se(y)}function Ln(){Ze.stop()}function Dn(){Ze.start()}const Ze=new Za;Ze.setAnimationLoop(Oe),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(y){Se=y,V.setAnimationLoop(y),y===null?Ze.stop():Ze.start()},V.addEventListener("sessionstart",Ln),V.addEventListener("sessionend",Dn),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,U,P),f=Xt.get(y,E.length),f.init(U),E.push(f),Rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Rt),xt=this.localClippingEnabled,Q=tt.init(this.clippingPlanes,xt),d=gt.get(y,S.length),d.init(),S.push(d),V.enabled===!0&&V.isPresenting===!0){const et=v.xr.getDepthSensingMesh();et!==null&&sn(et,U,-1/0,v.sortObjects)}sn(y,U,0,v.sortObjects),d.finish(),v.sortObjects===!0&&d.sort(rt,dt),Vt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Vt&&Ct.addToRenderList(d,y),this.info.render.frame++,Q===!0&&tt.beginShadows();const G=f.state.shadowsArray;mt.render(G,y,U),Q===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=d.opaque,F=d.transmissive;if(f.setupLights(),U.isArrayCamera){const et=U.cameras;if(F.length>0)for(let pt=0,St=et.length;pt<St;pt++){const wt=et[pt];Pi(H,F,y,wt)}Vt&&Ct.render(y);for(let pt=0,St=et.length;pt<St;pt++){const wt=et[pt];Ri(d,y,wt,wt.viewport)}}else F.length>0&&Pi(H,F,y,U),Vt&&Ct.render(y),Ri(d,y,U);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(v,y,U),te.resetDefaultState(),w=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],Q===!0&&tt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?d=S[S.length-1]:d=null};function sn(y,U,G,H){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){H&&Bt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Rt);const pt=Y.update(y),St=y.material;St.visible&&d.push(y,pt,St,G,Bt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){const pt=Y.update(y),St=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Bt.copy(y.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Bt.copy(pt.boundingSphere.center)),Bt.applyMatrix4(y.matrixWorld).applyMatrix4(Rt)),Array.isArray(St)){const wt=pt.groups;for(let Dt=0,Ft=wt.length;Dt<Ft;Dt++){const Et=wt[Dt],jt=St[Et.materialIndex];jt&&jt.visible&&d.push(y,pt,jt,G,Bt.z,Et)}}else St.visible&&d.push(y,pt,St,G,Bt.z,null)}}const et=y.children;for(let pt=0,St=et.length;pt<St;pt++)sn(et[pt],U,G,H)}function Ri(y,U,G,H){const F=y.opaque,et=y.transmissive,pt=y.transparent;f.setupLightsView(G),Q===!0&&tt.setGlobalState(v.clippingPlanes,G),H&&bt.viewport(R.copy(H)),F.length>0&&Ve(F,U,G),et.length>0&&Ve(et,U,G),pt.length>0&&Ve(pt,U,G),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Pi(y,U,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new Yn(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Vi:_n,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const et=f.state.transmissionRenderTarget[H.id],pt=H.viewport||R;et.setSize(pt.z,pt.w);const St=v.getRenderTarget();v.setRenderTarget(et),v.getClearColor(X),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),Vt&&Ct.render(G);const wt=v.toneMapping;v.toneMapping=Pn;const Dt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),Q===!0&&tt.setGlobalState(v.clippingPlanes,H),Ve(y,G,H),T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Et=0,jt=U.length;Et<jt;Et++){const oe=U[Et],ae=oe.object,Pe=oe.geometry,Jt=oe.material,At=oe.group;if(Jt.side===Ae&&ae.layers.test(H.layers)){const rn=Jt.side;Jt.side=Ce,Jt.needsUpdate=!0,De(ae,G,H,Pe,Jt,At),Jt.side=rn,Jt.needsUpdate=!0,Ft=!0}}Ft===!0&&(T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et))}v.setRenderTarget(St),v.setClearColor(X,$),Dt!==void 0&&(H.viewport=Dt),v.toneMapping=wt}function Ve(y,U,G){const H=U.isScene===!0?U.overrideMaterial:null;for(let F=0,et=y.length;F<et;F++){const pt=y[F],St=pt.object,wt=pt.geometry,Dt=H===null?pt.material:H,Ft=pt.group;St.layers.test(G.layers)&&De(St,U,G,wt,Dt,Ft)}}function De(y,U,G,H,F,et){y.onBeforeRender(v,U,G,H,F,et),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(v,U,G,H,y,et),F.transparent===!0&&F.side===Ae&&F.forceSinglePass===!1?(F.side=Ce,F.needsUpdate=!0,v.renderBufferDirect(G,U,H,F,y,et),F.side=In,F.needsUpdate=!0,v.renderBufferDirect(G,U,H,F,y,et),F.side=Ae):v.renderBufferDirect(G,U,H,F,y,et),y.onAfterRender(v,U,G,H,F,et)}function xn(y,U,G){U.isScene!==!0&&(U=re);const H=yt.get(y),F=f.state.lights,et=f.state.shadowsArray,pt=F.state.version,St=vt.getParameters(y,F.state,et,U,G),wt=vt.getProgramCacheKey(St);let Dt=H.programs;H.environment=y.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(y.isMeshStandardMaterial?O:x).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Dt===void 0&&(y.addEventListener("dispose",Lt),Dt=new Map,H.programs=Dt);let Ft=Dt.get(wt);if(Ft!==void 0){if(H.currentProgram===Ft&&H.lightsStateVersion===pt)return $n(y,St),Ft}else St.uniforms=vt.getUniforms(y),y.onBeforeCompile(St,v),Ft=vt.acquireProgram(St,wt),Dt.set(wt,Ft),H.uniforms=St.uniforms;const Et=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Et.clippingPlanes=tt.uniform),$n(y,St),H.needsLights=lc(y),H.lightsStateVersion=pt,H.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMap.value=F.state.directionalShadowMap,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotShadowMap.value=F.state.spotShadowMap,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMap.value=F.state.pointShadowMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ft,H.uniformsList=null,Ft}function Yi(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=ws.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function $n(y,U){const G=yt.get(y);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function ac(y,U,G,H,F){U.isScene!==!0&&(U=re),T.resetTextureUnits();const et=U.fog,pt=H.isMeshStandardMaterial?U.environment:null,St=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ei,wt=(H.isMeshStandardMaterial?O:x).get(H.envMap||pt),Dt=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ft=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Et=!!G.morphAttributes.position,jt=!!G.morphAttributes.normal,oe=!!G.morphAttributes.color;let ae=Pn;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ae=v.toneMapping);const Pe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Jt=Pe!==void 0?Pe.length:0,At=yt.get(H),rn=f.state.lights;if(Q===!0&&(xt===!0||y!==M)){const Be=y===M&&H.id===w;tt.setState(H,y,Be)}let Qt=!1;H.version===At.__version?(At.needsLights&&At.lightsStateVersion!==rn.state.version||At.outputColorSpace!==St||F.isBatchedMesh&&At.batching===!1||!F.isBatchedMesh&&At.batching===!0||F.isBatchedMesh&&At.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&At.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&At.instancing===!1||!F.isInstancedMesh&&At.instancing===!0||F.isSkinnedMesh&&At.skinning===!1||!F.isSkinnedMesh&&At.skinning===!0||F.isInstancedMesh&&At.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&At.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&At.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&At.instancingMorph===!1&&F.morphTexture!==null||At.envMap!==wt||H.fog===!0&&At.fog!==et||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==tt.numPlanes||At.numIntersection!==tt.numIntersection)||At.vertexAlphas!==Dt||At.vertexTangents!==Ft||At.morphTargets!==Et||At.morphNormals!==jt||At.morphColors!==oe||At.toneMapping!==ae||At.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,At.__version=H.version);let We=At.currentProgram;Qt===!0&&(We=xn(H,U,F));let jn=!1,Ue=!1,Ii=!1;const ce=We.getUniforms(),Je=At.uniforms;if(bt.useProgram(We.program)&&(jn=!0,Ue=!0,Ii=!0),H.id!==w&&(w=H.id,Ue=!0),jn||M!==y){bt.buffers.depth.getReversed()?(ut.copy(y.projectionMatrix),fl(ut),pl(ut),ce.setValue(N,"projectionMatrix",ut)):ce.setValue(N,"projectionMatrix",y.projectionMatrix),ce.setValue(N,"viewMatrix",y.matrixWorldInverse);const vn=ce.map.cameraPosition;vn!==void 0&&vn.setValue(N,It.setFromMatrixPosition(y.matrixWorld)),Wt.logarithmicDepthBuffer&&ce.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ce.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Ue=!0,Ii=!0)}if(F.isSkinnedMesh){ce.setOptional(N,F,"bindMatrix"),ce.setOptional(N,F,"bindMatrixInverse");const Be=F.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ce.setValue(N,"boneTexture",Be.boneTexture,T))}F.isBatchedMesh&&(ce.setOptional(N,F,"batchingTexture"),ce.setValue(N,"batchingTexture",F._matricesTexture,T),ce.setOptional(N,F,"batchingIdTexture"),ce.setValue(N,"batchingIdTexture",F._indirectTexture,T),ce.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&ce.setValue(N,"batchingColorTexture",F._colorsTexture,T));const Li=G.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Pt.update(F,G,We),(Ue||At.receiveShadow!==F.receiveShadow)&&(At.receiveShadow=F.receiveShadow,ce.setValue(N,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Je.envMap.value=wt,Je.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Je.envMapIntensity.value=U.environmentIntensity),Ue&&(ce.setValue(N,"toneMappingExposure",v.toneMappingExposure),At.needsLights&&cc(Je,Ii),et&&H.fog===!0&&ct.refreshFogUniforms(Je,et),ct.refreshMaterialUniforms(Je,H,B,J,f.state.transmissionRenderTarget[y.id]),ws.upload(N,Yi(At),Je,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ws.upload(N,Yi(At),Je,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ce.setValue(N,"center",F.center),ce.setValue(N,"modelViewMatrix",F.modelViewMatrix),ce.setValue(N,"normalMatrix",F.normalMatrix),ce.setValue(N,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Be=H.uniformsGroups;for(let vn=0,Mn=Be.length;vn<Mn;vn++){const fo=Be[vn];I.update(fo,We),I.bind(fo,We)}}return We}function cc(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function lc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,U,G){yt.get(y.texture).__webglTexture=U,yt.get(y.depthTexture).__webglTexture=G;const H=yt.get(y);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const G=yt.get(y);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,G=0){P=y,C=U,A=G;let H=!0,F=null,et=!1,pt=!1;if(y){const wt=yt.get(y);if(wt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(N.FRAMEBUFFER,null),H=!1;else if(wt.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(wt.__hasExternalTextures)T.rebindTextures(y,yt.get(y.texture).__webglTexture,yt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Et=y.depthTexture;if(wt.__boundDepthTexture!==Et){if(Et!==null&&yt.has(Et)&&(y.width!==Et.image.width||y.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}const Dt=y.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(pt=!0);const Ft=yt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?F=Ft[U][G]:F=Ft[U],et=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?F=yt.get(y).__webglMultisampledFramebuffer:Array.isArray(Ft)?F=Ft[G]:F=Ft,R.copy(y.viewport),z.copy(y.scissor),k=y.scissorTest}else R.copy(Mt).multiplyScalar(B).floor(),z.copy(Nt).multiplyScalar(B).floor(),k=Yt;if(bt.bindFramebuffer(N.FRAMEBUFFER,F)&&H&&bt.drawBuffers(y,F),bt.viewport(R),bt.scissor(z),bt.setScissorTest(k),et){const wt=yt.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,G)}else if(pt){const wt=yt.get(y.texture),Dt=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,wt.__webglTexture,G||0,Dt)}w=-1},this.readRenderTargetPixels=function(y,U,G,H,F,et,pt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=yt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(St=St[pt]),St){bt.bindFramebuffer(N.FRAMEBUFFER,St);try{const wt=y.texture,Dt=wt.format,Ft=wt.type;if(!Wt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-H&&G>=0&&G<=y.height-F&&N.readPixels(U,G,H,F,Ut.convert(Dt),Ut.convert(Ft),et)}finally{const wt=P!==null?yt.get(P).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(y,U,G,H,F,et,pt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=yt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(St=St[pt]),St){const wt=y.texture,Dt=wt.format,Ft=wt.type;if(!Wt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-H&&G>=0&&G<=y.height-F){bt.bindFramebuffer(N.FRAMEBUFFER,St);const Et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Et),N.bufferData(N.PIXEL_PACK_BUFFER,et.byteLength,N.STREAM_READ),N.readPixels(U,G,H,F,Ut.convert(Dt),Ut.convert(Ft),0);const jt=P!==null?yt.get(P).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,jt);const oe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await dl(N,oe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,et),N.deleteBuffer(Et),N.deleteSync(oe),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,G=0){y.isTexture!==!0&&(Bi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const H=Math.pow(2,-G),F=Math.floor(y.image.width*H),et=Math.floor(y.image.height*H),pt=U!==null?U.x:0,St=U!==null?U.y:0;T.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,pt,St,F,et),bt.unbindTexture()},this.copyTextureToTexture=function(y,U,G=null,H=null,F=0){y.isTexture!==!0&&(Bi("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1],U=arguments[2],F=arguments[3]||0,G=null);let et,pt,St,wt,Dt,Ft,Et,jt,oe;const ae=y.isCompressedTexture?y.mipmaps[F]:y.image;G!==null?(et=G.max.x-G.min.x,pt=G.max.y-G.min.y,St=G.isBox3?G.max.z-G.min.z:1,wt=G.min.x,Dt=G.min.y,Ft=G.isBox3?G.min.z:0):(et=ae.width,pt=ae.height,St=ae.depth||1,wt=0,Dt=0,Ft=0),H!==null?(Et=H.x,jt=H.y,oe=H.z):(Et=0,jt=0,oe=0);const Pe=Ut.convert(U.format),Jt=Ut.convert(U.type);let At;U.isData3DTexture?(T.setTexture3D(U,0),At=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),At=N.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),At=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const rn=N.getParameter(N.UNPACK_ROW_LENGTH),Qt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),We=N.getParameter(N.UNPACK_SKIP_PIXELS),jn=N.getParameter(N.UNPACK_SKIP_ROWS),Ue=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ae.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ae.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,wt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Dt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ft);const Ii=y.isDataArrayTexture||y.isData3DTexture,ce=U.isDataArrayTexture||U.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Je=yt.get(y),Li=yt.get(U),Be=yt.get(Je.__renderTarget),vn=yt.get(Li.__renderTarget);bt.bindFramebuffer(N.READ_FRAMEBUFFER,Be.__webglFramebuffer),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let Mn=0;Mn<St;Mn++)Ii&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.get(y).__webglTexture,F,Ft+Mn),y.isDepthTexture?(ce&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.get(U).__webglTexture,F,oe+Mn),N.blitFramebuffer(wt,Dt,et,pt,Et,jt,et,pt,N.DEPTH_BUFFER_BIT,N.NEAREST)):ce?N.copyTexSubImage3D(At,F,Et,jt,oe+Mn,wt,Dt,et,pt):N.copyTexSubImage2D(At,F,Et,jt,oe+Mn,wt,Dt,et,pt);bt.bindFramebuffer(N.READ_FRAMEBUFFER,null),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ce?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(At,F,Et,jt,oe,et,pt,St,Pe,Jt,ae.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(At,F,Et,jt,oe,et,pt,St,Pe,ae.data):N.texSubImage3D(At,F,Et,jt,oe,et,pt,St,Pe,Jt,ae):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,Et,jt,et,pt,Pe,Jt,ae.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,Et,jt,ae.width,ae.height,Pe,ae.data):N.texSubImage2D(N.TEXTURE_2D,F,Et,jt,et,pt,Pe,Jt,ae);N.pixelStorei(N.UNPACK_ROW_LENGTH,rn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,We),N.pixelStorei(N.UNPACK_SKIP_ROWS,jn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ue),F===0&&U.generateMipmaps&&N.generateMipmap(At),bt.unbindTexture()},this.copyTextureToTexture3D=function(y,U,G=null,H=null,F=0){return y.isTexture!==!0&&(Bi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,y=arguments[2],U=arguments[3],F=arguments[4]||0),Bi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,G,H,F)},this.initRenderTarget=function(y){yt.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),bt.unbindTexture()},this.resetState=function(){C=0,A=0,P=null,bt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class bs{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new bs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pa extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sc extends Ai{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ma=new le,$r=new so,ms=new Ps,gs=new b;class Ep extends de{constructor(t=new Le,e=new sc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(i),ms.radius+=s,t.ray.intersectsSphere(ms)===!1)return;ma.copy(i).invert(),$r.copy(t.ray).applyMatrix4(ma);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const p=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=p,_=m;g<_;g++){const d=l.getX(g);gs.fromBufferAttribute(u,d),ga(gs,d,c,i,t,e,this)}}else{const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=p,_=m;g<_;g++)gs.fromBufferAttribute(u,g),ga(gs,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ga(r,t,e,n,i,s,o){const a=$r.distanceSqToPoint(r);if(a<e){const c=new b;$r.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class co extends Le{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new b,h=new Ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){const m=n+u/e*i;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new co(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Kt extends Le{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],p=[],m=[];let g=0;const _=[],d=n/2;let f=0;S(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(p,3)),this.setAttribute("uv",new ue(m,2));function S(){const v=new b,L=new b;let C=0;const A=(e-t)/n;for(let P=0;P<=s;P++){const w=[],M=P/s,R=M*(e-t)+t;for(let z=0;z<=i;z++){const k=z/i,X=k*c+a,$=Math.sin(X),W=Math.cos(X);L.x=R*$,L.y=-M*n+d,L.z=R*W,u.push(L.x,L.y,L.z),v.set($,A,W).normalize(),p.push(v.x,v.y,v.z),m.push(k,1-M),w.push(g++)}_.push(w)}for(let P=0;P<i;P++)for(let w=0;w<s;w++){const M=_[w][P],R=_[w+1][P],z=_[w+1][P+1],k=_[w][P+1];(t>0||w!==0)&&(h.push(M,R,k),C+=3),(e>0||w!==s-1)&&(h.push(R,z,k),C+=3)}l.addGroup(f,C,0),f+=C}function E(v){const L=g,C=new Ht,A=new b;let P=0;const w=v===!0?t:e,M=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,d*M,0),p.push(0,M,0),m.push(.5,.5),g++;const R=g;for(let z=0;z<=i;z++){const X=z/i*c+a,$=Math.cos(X),W=Math.sin(X);A.x=w*W,A.y=d*M,A.z=w*$,u.push(A.x,A.y,A.z),p.push(0,M,0),C.x=$*.5+.5,C.y=W*.5*M+.5,m.push(C.x,C.y),g++}for(let z=0;z<i;z++){const k=L+z,X=R+z;v===!0?h.push(X,X+1,k):h.push(X+1,X,k),P+=3}l.addGroup(f,P,v===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ie extends Kt{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ie(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lo extends Le{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ue(s,3)),this.setAttribute("normal",new ue(s.slice(),3)),this.setAttribute("uv",new ue(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const E=new b,v=new b,L=new b;for(let C=0;C<e.length;C+=3)m(e[C+0],E),m(e[C+1],v),m(e[C+2],L),c(E,v,L,S)}function c(S,E,v,L){const C=L+1,A=[];for(let P=0;P<=C;P++){A[P]=[];const w=S.clone().lerp(v,P/C),M=E.clone().lerp(v,P/C),R=C-P;for(let z=0;z<=R;z++)z===0&&P===C?A[P][z]=w:A[P][z]=w.clone().lerp(M,z/R)}for(let P=0;P<C;P++)for(let w=0;w<2*(C-P)-1;w++){const M=Math.floor(w/2);w%2===0?(p(A[P][M+1]),p(A[P+1][M]),p(A[P][M])):(p(A[P][M+1]),p(A[P+1][M+1]),p(A[P+1][M]))}}function l(S){const E=new b;for(let v=0;v<s.length;v+=3)E.x=s[v+0],E.y=s[v+1],E.z=s[v+2],E.normalize().multiplyScalar(S),s[v+0]=E.x,s[v+1]=E.y,s[v+2]=E.z}function h(){const S=new b;for(let E=0;E<s.length;E+=3){S.x=s[E+0],S.y=s[E+1],S.z=s[E+2];const v=d(S)/2/Math.PI+.5,L=f(S)/Math.PI+.5;o.push(v,1-L)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){const E=o[S+0],v=o[S+2],L=o[S+4],C=Math.max(E,v,L),A=Math.min(E,v,L);C>.9&&A<.1&&(E<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),L<.2&&(o[S+4]+=1))}}function p(S){s.push(S.x,S.y,S.z)}function m(S,E){const v=S*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function g(){const S=new b,E=new b,v=new b,L=new b,C=new Ht,A=new Ht,P=new Ht;for(let w=0,M=0;w<s.length;w+=9,M+=6){S.set(s[w+0],s[w+1],s[w+2]),E.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),C.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),L.copy(S).add(E).add(v).divideScalar(3);const R=d(L);_(C,M+0,S,R),_(A,M+2,E,R),_(P,M+4,v,R)}}function _(S,E,v,L){L<0&&S.x===1&&(o[E]=S.x-1),v.x===0&&v.z===0&&(o[E]=L/2/Math.PI+.5)}function d(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lo(t.vertices,t.indices,t.radius,t.details)}}class ve extends lo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ve(t.radius,t.detail)}}class wi extends Le{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new b,p=new b,m=[],g=[],_=[],d=[];for(let f=0;f<=n;f++){const S=[],E=f/n;let v=0;f===0&&o===0?v=.5/e:f===n&&c===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){const C=L/e;u.x=-t*Math.cos(i+C*s)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(i+C*s)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),d.push(C+v,1-E),S.push(l++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const E=h[f][S+1],v=h[f][S],L=h[f+1][S],C=h[f+1][S+1];(f!==0||o>0)&&m.push(E,v,C),(f!==n-1||c<Math.PI)&&m.push(v,L,C)}this.setIndex(m),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ho extends Le{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new b,u=new b,p=new b;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*s,d=m/n*Math.PI*2;u.x=(t+e*Math.cos(d))*Math.cos(_),u.y=(t+e*Math.cos(d))*Math.sin(_),u.z=e*Math.sin(d),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,d=(i+1)*(m-1)+g-1,f=(i+1)*(m-1)+g,S=(i+1)*m+g;o.push(_,d,S),o.push(d,f,S)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class nt extends Ai{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qi extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Tp extends qi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const or=new le,_a=new b,xa=new b;class uo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oo,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_a.setFromMatrixPosition(t.matrixWorld),e.position.copy(_a),xa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xa),e.updateMatrixWorld(),or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(or),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(or)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class bp extends uo{constructor(){super(new be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=yi*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ap extends qi{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new bp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const va=new le,Oi=new b,ar=new b;class Cp extends uo{constructor(){super(new be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ht(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Oi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Oi),ar.copy(n.position),ar.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ar),n.updateMatrixWorld(),i.makeTranslation(-Oi.x,-Oi.y,-Oi.z),va.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va)}}class As extends qi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Rp extends uo{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rc extends qi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new Rp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class oc extends qi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ma(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ma();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ma(){return performance.now()}const ya=new le;class Ip{constructor(t,e,n=0,i=1/0){this.ray=new so(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ya.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ya),this}intersectObject(t,e=!0,n=[]){return jr(t,this,n,e),n.sort(Sa),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)jr(t[i],this,n,e);return n.sort(Sa),n}}function Sa(r,t){return r.distance-t.distance}function jr(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)jr(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kr);class Lp{constructor(){this.ctx=null,this.masterGain=null,this.sfxGain=null,this.ambientGain=null,this.masterVolume=.8,this.sfxVolume=.9,this.ambientVolume=.5,this.oceanNode=null,this.fireNode=null,this.isMuted=!1,this.initialized=!1}init(){if(!this.initialized)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.masterVolume,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.setValueAtTime(this.sfxVolume,this.ctx.currentTime),this.sfxGain.connect(this.masterGain),this.ambientGain=this.ctx.createGain(),this.ambientGain.gain.setValueAtTime(this.ambientVolume,this.ctx.currentTime),this.ambientGain.connect(this.masterGain),this.initialized=!0,this.startOceanAmbience()}catch(t){console.warn("Web Audio API not supported or blocked",t)}}ensureContext(){this.initialized||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.masterVolume,this.ctx.currentTime)}setSfxVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sfxGain&&this.ctx&&this.sfxGain.gain.setValueAtTime(this.sfxVolume,this.ctx.currentTime)}setAmbientVolume(t){this.ambientVolume=Math.max(0,Math.min(1,t)),this.ambientGain&&this.ctx&&this.ambientGain.gain.setValueAtTime(this.ambientVolume,this.ctx.currentTime)}createNoiseBuffer(t=3){if(!this.ctx)return null;const e=this.ctx.sampleRate*t,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);let s=0;for(let o=0;o<e;o++){const a=Math.random()*2-1;i[o]=(s+.02*a)/1.02,s=i[o],i[o]*=3.5}return n}startOceanAmbience(){if(!this.ctx||this.oceanNode)return;const t=this.createNoiseBuffer(5);if(!t)return;const e=this.ctx.createBufferSource();e.buffer=t,e.loop=!0;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(250,this.ctx.currentTime);const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(.12,this.ctx.currentTime),this.ctx.createGain().gain.setValueAtTime(200,this.ctx.currentTime),i.connect(n.frequency),i.start();const o=this.ctx.createGain();o.gain.setValueAtTime(.35,this.ctx.currentTime),e.connect(n),n.connect(o),o.connect(this.ambientGain),e.start(),this.oceanNode={noiseSource:e,lfo:i,filter:n,volGain:o}}playFootstep(t="sand"){if(this.ensureContext(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.ctx.createBiquadFilter();let o=70,a=.12;t==="water"?(o=160,s.type="bandpass",s.frequency.setValueAtTime(400,e),s.Q.setValueAtTime(2,e),a=.2):t==="wood"?(o=110,s.type="lowpass",s.frequency.setValueAtTime(500,e)):(o=80+Math.random()*20,s.type="lowpass",s.frequency.setValueAtTime(320,e)),n.type="triangle",n.frequency.setValueAtTime(o,e),n.frequency.exponentialRampToValueAtTime(30,e+a),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.001,e+a),n.connect(s),s.connect(i),i.connect(this.sfxGain),n.start(e),n.stop(e+a)}playChop(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(140+Math.random()*40,t),e.frequency.exponentialRampToValueAtTime(35,t+.15),n.gain.setValueAtTime(.6,t),n.gain.exponentialRampToValueAtTime(.01,t+.15);const i=this.createNoiseBuffer(.2);if(i){const s=this.ctx.createBufferSource();s.buffer=i;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(900,t),o.Q.setValueAtTime(3,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.5,t),a.gain.exponentialRampToValueAtTime(.01,t+.12),s.connect(o),o.connect(a),a.connect(this.sfxGain),s.start(t),s.stop(t+.15)}e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.15)}playMine(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(550+Math.random()*120,t),e.frequency.exponentialRampToValueAtTime(120,t+.18),n.gain.setValueAtTime(.35,t),n.gain.exponentialRampToValueAtTime(.01,t+.18),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.18)}playSplash(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.createNoiseBuffer(.4);if(!e)return;const n=this.ctx.createBufferSource();n.buffer=e;const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(600,t),i.frequency.exponentialRampToValueAtTime(200,t+.35),i.Q.setValueAtTime(1.5,t);const s=this.ctx.createGain();s.gain.setValueAtTime(.4,t),s.gain.exponentialRampToValueAtTime(.01,t+.35),n.connect(i),i.connect(s),s.connect(this.sfxGain),n.start(t),n.stop(t+.35)}playSwing(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(260,t),e.frequency.exponentialRampToValueAtTime(80,t+.12),n.gain.setValueAtTime(.2,t),n.gain.exponentialRampToValueAtTime(.01,t+.12),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.12)}playAnimalGrunt(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(120,t),e.frequency.setValueAtTime(160,t+.08),e.frequency.exponentialRampToValueAtTime(60,t+.25),n.gain.setValueAtTime(.4,t),n.gain.exponentialRampToValueAtTime(.01,t+.25),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.25)}playLeopardRoar(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();e.type="sawtooth",e.frequency.setValueAtTime(95,t),e.frequency.linearRampToValueAtTime(140,t+.2),e.frequency.exponentialRampToValueAtTime(45,t+.7),i.type="lowpass",i.frequency.setValueAtTime(260,t),n.gain.setValueAtTime(.65,t),n.gain.exponentialRampToValueAtTime(.01,t+.7),e.connect(i),i.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.7)}playCrabSnap(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(480,t),e.frequency.exponentialRampToValueAtTime(90,t+.08),n.gain.setValueAtTime(.4,t),n.gain.exponentialRampToValueAtTime(.01,t+.08),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.08)}playDolphinWhistle(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1200,t),e.frequency.linearRampToValueAtTime(2200,t+.15),e.frequency.linearRampToValueAtTime(1600,t+.35),n.gain.setValueAtTime(.25,t),n.gain.exponentialRampToValueAtTime(.01,t+.38),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.38)}playAnimalHit(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(320,t),e.frequency.exponentialRampToValueAtTime(140,t+.2),n.gain.setValueAtTime(.5,t),n.gain.exponentialRampToValueAtTime(.01,t+.2),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.2)}playSharkWarning(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(80,t),e.frequency.exponentialRampToValueAtTime(45,t+.8);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(180,t),n.gain.setValueAtTime(.7,t),n.gain.exponentialRampToValueAtTime(.01,t+.8),e.connect(i),i.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.8)}playPlayerHurt(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(160,t),e.frequency.exponentialRampToValueAtTime(70,t+.25),n.gain.setValueAtTime(.6,t),n.gain.exponentialRampToValueAtTime(.01,t+.25),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.25)}playPickup(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(440,t),e.frequency.exponentialRampToValueAtTime(880,t+.1),n.gain.setValueAtTime(.3,t),n.gain.exponentialRampToValueAtTime(.01,t+.12),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.12)}playCraft(){if(this.ensureContext(),!this.ctx)return;[440,554,659].forEach((e,n)=>{const i=this.ctx.currentTime+n*.08,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(e,i),o.gain.setValueAtTime(.25,i),o.gain.exponentialRampToValueAtTime(.01,i+.2),s.connect(o),o.connect(this.sfxGain),s.start(i),s.stop(i+.25)})}playEat(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime;for(let e=0;e<3;e++){const n=t+e*.08,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(220+Math.random()*80,n),i.frequency.exponentialRampToValueAtTime(100,n+.06),s.gain.setValueAtTime(.2,n),s.gain.exponentialRampToValueAtTime(.01,n+.06),i.connect(s),s.connect(this.sfxGain),i.start(n),i.stop(n+.06)}}playDrink(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(300,t),e.frequency.exponentialRampToValueAtTime(150,t+.15),n.gain.setValueAtTime(.35,t),n.gain.exponentialRampToValueAtTime(.01,t+.18),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.18)}playFishBite(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(700,t),e.frequency.exponentialRampToValueAtTime(350,t+.2),n.gain.setValueAtTime(.3,t),n.gain.exponentialRampToValueAtTime(.01,t+.25),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.25)}playBeaconIgnite(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.createNoiseBuffer(1.5);if(e){const n=this.ctx.createBufferSource();n.buffer=e;const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(200,t),i.frequency.linearRampToValueAtTime(1200,t+.5),i.frequency.exponentialRampToValueAtTime(200,t+1.5);const s=this.ctx.createGain();s.gain.setValueAtTime(.7,t),s.gain.exponentialRampToValueAtTime(.01,t+1.5),n.connect(i),i.connect(s),s.connect(this.sfxGain),n.start(t),n.stop(t+1.5)}}playShipFoghorn(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime;[110,138].forEach(e=>{const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(e,t),i.gain.setValueAtTime(.001,t),i.gain.linearRampToValueAtTime(.4,t+.4),i.gain.setValueAtTime(.4,t+2),i.gain.exponentialRampToValueAtTime(.01,t+3);const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(450,t),n.connect(s),s.connect(i),i.connect(this.sfxGain),n.start(t),n.stop(t+3)})}playVictory(){if(this.ensureContext(),!this.ctx)return;[261.63,329.63,392,523.25].forEach((e,n)=>{const i=this.ctx.currentTime+n*.15,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(e,i),o.gain.setValueAtTime(.35,i),o.gain.exponentialRampToValueAtTime(.01,i+1.2),s.connect(o),o.connect(this.sfxGain),s.start(i),s.stop(i+1.2)}),setTimeout(()=>this.playShipFoghorn(),1200)}playGameOver(){if(this.ensureContext(),!this.ctx)return;[220,207.65,196,174.61].forEach((e,n)=>{const i=this.ctx.currentTime+n*.3,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(e,i),o.gain.setValueAtTime(.4,i),o.gain.exponentialRampToValueAtTime(.01,i+.6),s.connect(o),o.connect(this.sfxGain),s.start(i),s.stop(i+.6)})}}const xe=new Lp,dn={wood:{id:"wood",name:"Cành Gỗ",icon:"🪵",maxStack:50,description:"Gỗ khô nhặt từ đất hoặc chặt từ cây cọ."},stone:{id:"stone",name:"Viên Đá",icon:"🪨",maxStack:50,description:"Đá thô dùng chế tạo công cụ và xây lò sưởi."},palm_leaf:{id:"palm_leaf",name:"Lá Cọ",icon:"🌿",maxStack:50,description:"Lá cọ bền dai dùng bện dây, lợp mái lều."},coconut:{id:"coconut",name:"Quả Dừa",icon:"🥥",maxStack:20,description:"Dừa tươi ngọt mát. Ăn/uống hồi 15 No, 25 Nước, 5 Máu.",consumable:{food:15,water:25,health:5}},raw_meat:{id:"raw_meat",name:"Thịt Sống",icon:"🥩",maxStack:20,description:"Thịt thú săn. Nên nướng chín trước khi ăn!",consumable:{food:20,health:-5}},cooked_meat:{id:"cooked_meat",name:"Thịt Nướng",icon:"🍖",maxStack:20,description:"Thịt nướng thơm ngon trên lửa trại. Hồi 45 No và 20 Máu.",consumable:{food:45,health:20}},raw_fish:{id:"raw_fish",name:"Cá Tươi",icon:"🐟",maxStack:20,description:"Cá tươi mới câu được. Nướng chín để ngon hơn.",consumable:{food:15,health:2}},cooked_fish:{id:"cooked_fish",name:"Cá Nướng",icon:"🍱",maxStack:20,description:"Cá nướng béo ngậy. Hồi 40 No và 15 Máu.",consumable:{food:40,health:15}},scrap_metal:{id:"scrap_metal",name:"Sắt Vụn",icon:"⚙️",maxStack:20,description:"Mảnh kim loại từ rương xác tàu đắm. Cần cho đài cứu hộ."},pickaxe:{id:"pickaxe",name:"Búa Đào",icon:"⛏️",maxStack:1,type:"tool",power:45,description:"Búa đào đá thô & khoáng sản. Khai thác mỏm đá siêu nhanh và tăng mạnh sát thương cận chiến."},axe:{id:"axe",name:"Rìu Đá",icon:"🪓",maxStack:1,type:"tool",power:30,description:"Chặt cây siêu nhanh và tăng sát thương cận chiến."},spear:{id:"spear",name:"Giáo Săn",icon:"🗡️",maxStack:1,type:"weapon",power:45,description:"Đâm cá và săn thú hoang từ cự ly an toàn."},torch:{id:"torch",name:"Đuốc Lửa",icon:"🔥",maxStack:1,type:"tool",description:"Soi sáng ban đêm và sưởi ấm, xua tan giá lạnh."},fishing_rod:{id:"fishing_rod",name:"Cần Câu",icon:"🎣",maxStack:1,type:"tool",description:"Đứng sát mép nước bấm [F] để câu cá."},campfire_item:{id:"campfire_item",name:"Lửa Trại",icon:"⛺",maxStack:5,type:"buildable",buildType:"campfire",description:"Đặt xuống đất: sưởi ấm và nướng thịt/cá chín."},shelter_item:{id:"shelter_item",name:"Lều Trú Ẩn",icon:"🛖",maxStack:5,type:"buildable",buildType:"shelter",description:"Đặt xuống đất: ngủ qua đêm và đặt điểm hồi sinh."},workbench_item:{id:"workbench_item",name:"Bàn Cơ Khí",icon:"🛠️",maxStack:5,type:"buildable",buildType:"workbench",description:"Đặt xuống đất: mở khóa chế tạo Đài Cứu Hộ."},beacon_item:{id:"beacon_item",name:"Đài Cứu Hộ",icon:"🗼",maxStack:1,type:"buildable",buildType:"beacon",description:"Đặt bên bờ biển rồi thắp sáng để gọi tàu cứu hộ tới giải cứu!"}},Dp=[{id:"pickaxe",resultId:"pickaxe",count:1,req:{wood:4,stone:3},category:"tools"},{id:"axe",resultId:"axe",count:1,req:{wood:3,stone:2},category:"tools"},{id:"spear",resultId:"spear",count:1,req:{wood:4,stone:2,palm_leaf:1},category:"tools"},{id:"torch",resultId:"torch",count:1,req:{wood:2,palm_leaf:2},category:"tools"},{id:"fishing_rod",resultId:"fishing_rod",count:1,req:{wood:3,palm_leaf:2},category:"tools"},{id:"campfire_item",resultId:"campfire_item",count:1,req:{wood:5,stone:5},category:"structures"},{id:"shelter_item",resultId:"shelter_item",count:1,req:{wood:8,palm_leaf:6},category:"structures"},{id:"workbench_item",resultId:"workbench_item",count:1,req:{wood:6,stone:4},category:"structures"},{id:"beacon_item",resultId:"beacon_item",count:1,req:{wood:10,stone:8,scrap_metal:4},requiresWorkbench:!0,category:"rescue"}];class Up{constructor(){this.player={gender:"male",health:100,maxHealth:100,stamina:100,maxStamina:100,food:100,maxFood:100,water:100,maxWater:100,oxygen:100,maxOxygen:100,isUnderwater:!1,isWarm:!1,isFreezing:!1,respawnPos:{x:0,y:3,z:25},currentPos:{x:0,y:3,z:25}},this.isNearWorkbench=!1,this.inventory=Array.from({length:24},()=>null),this.activeHotbarIndex=0,this.dayTime=.3,this.dayLength=360,this.dayCount=1,this.quests=[{id:"gather_starter",title:"Thu thập sinh tồn ban đầu",desc:"Nhặt 3 Cành gỗ, 3 Viên đá và 2 Quả dừa",completed:!1,progress:{wood:0,stone:0,coconut:0},goals:{wood:3,stone:3,coconut:2}},{id:"craft_tools",title:"Chế tạo công cụ sinh tồn",desc:"Chế tạo 1 Rìu đá và 1 Đuốc lửa",completed:!1,progress:{axe:0,torch:0},goals:{axe:1,torch:1}},{id:"build_base",title:"Thiết lập cứ địa sinh tồn",desc:"Dựng 1 Lửa trại và 1 Lều trú ẩn",completed:!1,progress:{campfire:0,shelter:0},goals:{campfire:1,shelter:1}},{id:"explore_shipwreck",title:"Thám hiểm xác tàu đắm",desc:"Bơi ra xác tàu ngoài khơi, cẩn thận cá mập, mở Rương báu vật thu Sắt vụn",completed:!1,progress:{scrap:0},goals:{scrap:4}},{id:"ignite_beacon",title:"Thắp sáng Đài hiệu cứu hộ",desc:"Chế tạo Đài hiệu tại Bàn cơ khí, đặt ở bờ biển và thắp sáng bằng Đuốc",completed:!1,progress:{ignited:0},goals:{ignited:1}}],this.stats={daysSurvived:1,animalsHunted:0,fishCaught:0,treesChopped:0,structuresBuilt:0,startTime:Date.now()},this.settings={graphicsPreset:"balanced",mouseSensitivity:1,touchSensitivity:1.2,masterVolume:.8,isMuted:!1},this.listeners=new Set,this.setupStarterItems()}setupStarterItems(){this.inventory[0]={id:"pickaxe",count:1},this.inventory[1]={id:"coconut",count:2}}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notify(t,e){this.listeners.forEach(n=>{try{n(t,e)}catch(i){console.error(i)}})}getActiveItem(){return this.inventory[this.activeHotbarIndex]||null}getActiveItemDef(){const t=this.getActiveItem();return t&&dn[t.id]||null}setActiveHotbarIndex(t){t>=0&&t<6&&(this.activeHotbarIndex=t,this.notify("hotbarChange",{index:t,item:this.getActiveItem()}))}addItem(t,e=1){const n=dn[t];if(!n)return!1;let i=e;for(let s=0;s<this.inventory.length;s++){const o=this.inventory[s];if(o&&o.id===t&&o.count<n.maxStack){const a=n.maxStack-o.count,c=Math.min(a,i);if(o.count+=c,i-=c,i<=0)break}}if(i>0){for(let s=0;s<this.inventory.length;s++)if(!this.inventory[s]){const o=Math.min(n.maxStack,i);if(this.inventory[s]={id:t,count:o},i-=o,i<=0)break}}return this.checkQuestProgress(),this.notify("inventoryUpdate",this.inventory),i<e}removeItem(t,e=1){let n=e;for(let i=this.inventory.length-1;i>=0;i--){const s=this.inventory[i];if(s&&s.id===t){if(s.count>n){s.count-=n,n=0;break}else if(n-=s.count,this.inventory[i]=null,n<=0)break}}return this.notify("inventoryUpdate",this.inventory),n===0}getItemCount(t){let e=0;for(const n of this.inventory)n&&n.id===t&&(e+=n.count);return e}canCraft(t){if(t.requiresWorkbench&&!this.isNearWorkbench)return!1;for(const[e,n]of Object.entries(t.req))if(this.getItemCount(e)<n)return!1;return!0}craft(t){if(!this.canCraft(t))return!1;for(const[e,n]of Object.entries(t.req))this.removeItem(e,n);return this.addItem(t.resultId,t.count||1),t.resultId==="axe"&&this.updateQuestObjective("craft_tools","axe",1),t.resultId==="torch"&&this.updateQuestObjective("craft_tools","torch",1),this.notify("crafted",t),!0}useSlot(t){const e=this.inventory[t];if(!e)return!1;const n=dn[e.id];return n&&n.consumable?(n.consumable.food&&(this.player.food=Math.min(this.player.maxFood,this.player.food+n.consumable.food)),n.consumable.water&&(this.player.water=Math.min(this.player.maxWater,this.player.water+n.consumable.water)),n.consumable.health&&(this.player.health=Math.max(0,Math.min(this.player.maxHealth,this.player.health+n.consumable.health))),e.count-=1,e.count<=0&&(this.inventory[t]=null),this.notify("consumed",{item:n,stats:this.player}),this.notify("inventoryUpdate",this.inventory),!0):!1}updateQuestObjective(t,e,n=1){const i=this.quests.find(s=>s.id===t);!i||i.completed||i.progress[e]!==void 0&&(i.progress[e]=Math.min(i.goals[e],i.progress[e]+n),Object.keys(i.goals).every(o=>i.progress[o]>=i.goals[o])?(i.completed=!0,this.notify("questCompleted",i)):this.notify("questUpdated",i))}checkQuestProgress(){const t=this.quests[0];t.completed||(t.progress.wood=Math.min(t.goals.wood,this.getItemCount("wood")),t.progress.stone=Math.min(t.goals.stone,this.getItemCount("stone")),t.progress.coconut=Math.min(t.goals.coconut,this.getItemCount("coconut")),t.progress.wood>=t.goals.wood&&t.progress.stone>=t.goals.stone&&t.progress.coconut>=t.goals.coconut?(t.completed=!0,this.notify("questCompleted",t)):this.notify("questUpdated",t));const e=this.quests[3];e.completed||(e.progress.scrap=Math.min(e.goals.scrap,this.getItemCount("scrap_metal")),e.progress.scrap>=e.goals.scrap?(e.completed=!0,this.notify("questCompleted",e)):this.notify("questUpdated",e))}tick(t){const e=this.dayTime;this.dayTime=(this.dayTime+t/this.dayLength)%1,this.dayTime<e&&(this.dayCount+=1,this.stats.daysSurvived=this.dayCount,this.notify("newDay",this.dayCount));const n=this.dayTime>.75||this.dayTime<.25,i=this.getActiveItem(),s=i&&i.id==="torch";n&&!this.player.isWarm&&!s?this.player.isFreezing=!0:this.player.isFreezing=!1;const o=this.player.isFreezing?.35:.22;this.player.food=Math.max(0,this.player.food-t*o),this.player.water=Math.max(0,this.player.water-t*.28),this.player.isUnderwater?(this.player.oxygen=Math.max(0,this.player.oxygen-t*14),this.player.oxygen<=0&&(this.player.health=Math.max(0,this.player.health-t*10))):this.player.oxygen=Math.min(this.player.maxOxygen,this.player.oxygen+t*40),this.player.isFreezing&&(this.player.health=Math.max(0,this.player.health-t*1.5)),(this.player.food<=0||this.player.water<=0)&&(this.player.health=Math.max(0,this.player.health-t*2.5)),this.player.food>75&&this.player.water>75&&!this.player.isFreezing&&!this.player.isUnderwater&&(this.player.health=Math.min(this.player.maxHealth,this.player.health+t*1.2)),this.player.stamina=Math.min(this.player.maxStamina,this.player.stamina+t*15)}drinkFreshwater(){this.player.water=Math.min(this.player.maxWater,this.player.water+40),this.notify("drankWater")}sleep(){this.dayTime=.25,this.dayCount+=1,this.stats.daysSurvived=this.dayCount,this.player.health=this.player.maxHealth,this.player.stamina=this.player.maxStamina,this.player.food=Math.max(20,this.player.food-15),this.player.water=Math.max(20,this.player.water-20),this.notify("slept")}}const it=new Up,_s="primitive_island_save_v1",wa="primitive_island_settings_v1";class hi{static saveGame(t,e=[]){try{const n={version:1,savedAt:Date.now(),player:{gender:t.player.gender,health:t.player.health,stamina:t.player.stamina,food:t.player.food,water:t.player.water,respawnPos:t.player.respawnPos,currentPos:t.player.currentPos},inventory:t.inventory,activeHotbarIndex:t.activeHotbarIndex,dayTime:t.dayTime,dayCount:t.dayCount,quests:t.quests,stats:t.stats,structures:e.map(i=>({type:i.type,x:i.position.x,y:i.position.y,z:i.position.z,rotationY:i.rotation.y,isLit:i.isLit||!1}))};return localStorage.setItem(_s,JSON.stringify(n)),!0}catch(n){return console.warn("Failed to save game to localStorage",n),!1}}static hasSave(){return!!localStorage.getItem(_s)}static loadGame(t){try{const e=localStorage.getItem(_s);if(!e)return null;const n=JSON.parse(e);return n?(n.player&&Object.assign(t.player,n.player),Array.isArray(n.inventory)&&(t.inventory=n.inventory),n.activeHotbarIndex!==void 0&&(t.activeHotbarIndex=n.activeHotbarIndex),n.dayTime!==void 0&&(t.dayTime=n.dayTime),n.dayCount!==void 0&&(t.dayCount=n.dayCount),Array.isArray(n.quests)&&(t.quests=n.quests),n.stats&&Object.assign(t.stats,n.stats),n.structures||[]):null}catch(e){return console.error("Failed to load save from localStorage",e),null}}static clearSave(){localStorage.removeItem(_s)}static saveSettings(t){try{localStorage.setItem(wa,JSON.stringify(t))}catch(e){console.warn("Failed to save settings",e)}}static loadSettings(){try{const t=localStorage.getItem(wa);return t?JSON.parse(t):null}catch{return null}}}class Np{constructor(t){this.scene=t,this.islandRadius=75,this.terrainSize=340,this.segments=130,this.terrainMesh=null,this.oceanMesh=null,this.freshwaterPool=null,this.skyDome=null,this.stars=null,this.sunMesh=null,this.moonMesh=null,this.sunLight=null,this.ambientLight=null,this.hemiLight=null,this.waveTime=0,this.waterUniforms=null,this.skyUniforms=null,this.rescueShip=null,this.isRescueShipSailing=!1,this.rescueShipProgress=0,this.init()}init(){this.setupLighting(),this.createSkyAndCelestials(),this.createTerrain(),this.createFreshwaterPool(),this.createOcean(),this.createClouds(),this.createRescueShipModel()}getHeightAt(t,e){let i=1-Math.hypot(t,e)/this.islandRadius;i=Math.max(-.6,Math.min(1,i));const s=Math.sin(t*.04)*Math.cos(e*.04)*4.5,o=Math.sin(t*.09+1.2)*Math.sin(e*.09-.7)*2.2,a=Math.cos(t*.18+e*.12)*1.1;let c=-3.5;i>0?c=Math.pow(i,1.4)*11+(s+o+a)*i:c=-.5+i*4;const l=Math.hypot(t,e);if(l<12){const u=Math.sin(l/12*Math.PI*.5);c=An.lerp(1.2,c,u)}const h=Math.hypot(t-120,e- -95);if(h<35){const u=Math.max(0,1-h/35);c=Math.max(c,-3.2+u*2.5)}return c}getNormalAt(t,e){const i=this.getHeightAt(t-.5,e),s=this.getHeightAt(t+.5,e),o=this.getHeightAt(t,e-.5),a=this.getHeightAt(t,e+.5);return new b(i-s,2*.5,o-a).normalize()}createTerrain(){const t=new gn(this.terrainSize,this.terrainSize,this.segments,this.segments);t.rotateX(-Math.PI/2);const e=t.attributes.position,n=e.count,i=new Float32Array(n*3),s=new Tt(1653578),o=new Tt(15057794),a=new Tt(12230766),c=new Tt(5211959),l=new Tt(6332226),h=new Tt(7435125),u=new Tt(5198164),p=new Tt;for(let g=0;g<n;g++){const _=e.getX(g),d=e.getZ(g),f=this.getHeightAt(_,d);e.setY(g,f);const E=1-this.getNormalAt(_,d).y;if(f<-.2)p.copy(s).lerp(a,Math.max(0,(f+3)/3));else if(f<1.3){const v=(f+.2)/1.5;p.copy(a).lerp(o,v)}else if(f<6.5)if(E>.45)p.copy(h);else{const v=Math.sin(_*.2)*.2+.5;p.copy(c).lerp(l,v)}else p.copy(E>.35?u:h);i[g*3]=p.r,i[g*3+1]=p.g,i[g*3+2]=p.b}t.setAttribute("color",new He(i,3)),t.computeVertexNormals();const m=new nt({vertexColors:!0,flatShading:!0,roughness:.85,metalness:.05});this.terrainMesh=new D(t,m),this.terrainMesh.receiveShadow=!0,this.terrainMesh.castShadow=!0,this.scene.add(this.terrainMesh)}createFreshwaterPool(){const t=new co(7.2,24);t.rotateX(-Math.PI/2);const e=new nt({color:5099745,transparent:!0,opacity:.85,roughness:.1,metalness:.15,flatShading:!0});this.freshwaterPool=new D(t,e),this.freshwaterPool.position.set(0,1.45,0),this.freshwaterPool.userData={type:"freshwater_pool",name:"Suối Nước Ngọt Tự Nhiên",hint:"[E] Uống Nước Suối Trong Lành"},this.scene.add(this.freshwaterPool);const n=new nt({color:5923672,flatShading:!0,roughness:.9}),i=new _t,s=18;for(let o=0;o<s;o++){const a=o/s*Math.PI*2+(Math.random()-.5)*.3,c=6.8+Math.random()*1.4,l=Math.cos(a)*c,h=Math.sin(a)*c,u=this.getHeightAt(l,h),p=new ve(.5+Math.random()*.6,0),m=new D(p,n);m.position.set(l,u+.2,h),m.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),m.castShadow=!0,m.receiveShadow=!0,i.add(m)}this.scene.add(i)}createOcean(){const t=new gn(650,650,80,80);t.rotateX(-Math.PI/2),this.waterUniforms={uTime:{value:0},uSunDir:{value:new b(.5,.8,.5).normalize()},uDeepColor:{value:new Tt(933723)},uShallowColor:{value:new Tt(2665401)},uFoamColor:{value:new Tt(16777215)},uSunColor:{value:new Tt(16774097)}};const e=new nn({uniforms:this.waterUniforms,vertexShader:`
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
      `,transparent:!0,flatShading:!0});this.oceanMesh=new D(t,e),this.oceanMesh.position.set(0,0,0),this.oceanMesh.receiveShadow=!0,this.scene.add(this.oceanMesh)}setupLighting(){this.ambientLight=new oc(14676223,.45),this.scene.add(this.ambientLight),this.hemiLight=new Tp(16774630,1784655,.35),this.scene.add(this.hemiLight),this.sunLight=new rc(16775917,1.25),this.sunLight.position.set(60,90,60),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=280;const t=65;this.sunLight.shadow.camera.left=-t,this.sunLight.shadow.camera.right=t,this.sunLight.shadow.camera.top=t,this.sunLight.shadow.camera.bottom=-t,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target)}createSkyAndCelestials(){const t=new wi(380,24,16);this.skyUniforms={uTopColor:{value:new Tt(3703495)},uBottomColor:{value:new Tt(10211575)},uSunPos:{value:new b(0,1,0)},uSunColor:{value:new Tt(16775917)}};const e=new nn({uniforms:this.skyUniforms,vertexShader:`
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
      `,side:Ce});this.skyDome=new D(t,e),this.scene.add(this.skyDome);const n=new Le,i=650,s=new Float32Array(i*3);for(let u=0;u<i;u++){const p=Math.random(),m=Math.random(),g=p*2*Math.PI,_=Math.acos(2*m-1),d=360;s[u*3]=d*Math.sin(_)*Math.cos(g),s[u*3+1]=Math.abs(d*Math.cos(_))+10,s[u*3+2]=d*Math.sin(_)*Math.sin(g)}n.setAttribute("position",new He(s,3));const o=new sc({color:16777215,size:1.8,transparent:!0,opacity:0});this.stars=new Ep(n,o),this.scene.add(this.stars);const a=new ve(8,1),c=new ze({color:16774056});this.sunMesh=new D(a,c),this.scene.add(this.sunMesh);const l=new ve(6,1),h=new ze({color:14544639});this.moonMesh=new D(l,h),this.scene.add(this.moonMesh)}createClouds(){this.cloudsGroup=new _t;const t=new nt({color:16777215,roughness:.9,flatShading:!0,transparent:!0,opacity:.88});for(let e=0;e<12;e++){const n=new _t,i=4+Math.floor(Math.random()*4);for(let a=0;a<i;a++){const c=new ve(4+Math.random()*3,1),l=new D(c,t);l.position.set((a-i/2)*4.5,(Math.random()-.5)*2,(Math.random()-.5)*4),n.add(l)}const s=e/12*Math.PI*2,o=60+Math.random()*70;n.position.set(Math.cos(s)*o,45+Math.random()*15,Math.sin(s)*o),n.userData={speed:.04+Math.random()*.04,radius:o,angle:s},this.cloudsGroup.add(n)}this.scene.add(this.cloudsGroup)}createRescueShipModel(){this.rescueShip=new _t;const t=new nt({color:1779768,roughness:.7,flatShading:!0}),e=new nt({color:15857145,roughness:.6,flatShading:!0}),n=new nt({color:10120003,roughness:.85,flatShading:!0}),i=new nt({color:11149858,roughness:.8}),s=new nt({color:13938487,roughness:.3,metalness:.8}),o=new at(5.2,2.2,18),a=new D(o,i);a.position.set(0,.4,0),this.rescueShip.add(a);const c=new at(5.6,2,18.4),l=new D(c,t);l.position.set(0,2.2,0),this.rescueShip.add(l);const h=new ie(2.8,4.5,4);h.rotateX(Math.PI/2);const u=new D(h,t);u.position.set(0,1.8,10.8),this.rescueShip.add(u);const p=new at(5.4,.2,18.2),m=new D(p,n);m.position.set(0,3.25,0),this.rescueShip.add(m);const g=new at(3.6,2.6,6.2),_=new D(g,e);_.position.set(0,4.55,-1),this.rescueShip.add(_);const d=new nt({color:3718648,roughness:.2,metalness:.7}),f=new at(3.65,.8,5.8),S=new D(f,d);S.position.set(0,4.8,-1),this.rescueShip.add(S);const E=new Kt(.45,.5,2.4,8),v=new nt({color:11149858,roughness:.7}),L=new D(E,v);L.position.set(0,6.8,-2.8),this.rescueShip.add(L);const C=new D(E,v);C.position.set(0,6.8,-4.6),this.rescueShip.add(C);const A=new Kt(.48,.48,.6,8),P=new nt({color:1118481,roughness:.8}),w=new D(A,P);w.position.set(0,7.8,-2.8),this.rescueShip.add(w);const M=new D(A,P);M.position.set(0,7.8,-4.6),this.rescueShip.add(M);const R=new Kt(.1,.14,5.5,6),z=new D(R,s);z.position.set(0,8.2,1.2),this.rescueShip.add(z);const k=new gn(1.6,1),X=new ze({color:16096779,side:Ae}),$=new D(k,X);$.position.set(.8,10.2,1.2),this.rescueShip.add($);const W=new ho(.35,.1,6,12),J=new nt({color:16347926,roughness:.5});[-2.8,2.8].forEach(Yt=>{for(let q of[-2,2,5]){const Q=new D(W,J);Q.position.set(Yt,3.8,q),Q.rotation.y=Math.PI/2,this.rescueShip.add(Q)}}),this.searchlightGroup=new _t,this.searchlightGroup.position.set(0,6,1.8),this.rescueShip.add(this.searchlightGroup);const B=new Kt(.35,.45,.6,8);B.rotateX(Math.PI/2);const rt=new D(B,s);this.searchlightGroup.add(rt),this.searchlightSpot=new Ap(16775917,8,120,Math.PI/6,.3,1.2),this.searchlightSpot.position.set(0,0,.3),this.searchlightTarget=new de,this.searchlightTarget.position.set(0,-5,40),this.searchlightGroup.add(this.searchlightSpot),this.searchlightGroup.add(this.searchlightTarget),this.searchlightSpot.target=this.searchlightTarget;const dt=new ie(8,35,12,1,!0);dt.rotateX(-Math.PI/2),dt.translate(0,0,17.5);const Mt=new ze({color:16775917,transparent:!0,opacity:.18,side:Ae}),Nt=new D(dt,Mt);this.searchlightGroup.add(Nt),this.rescueShip.position.set(220,0,180),this.rescueShip.visible=!1,this.scene.add(this.rescueShip)}startRescueShipCutscene(t){this.isRescueShipSailing=!0,this.rescueShipProgress=0,this.rescueShipStartPos=new b(160,0,140),this.rescueShipTargetPos=t?t.clone().add(new b(15,0,15)):new b(25,0,45),this.rescueShip.position.copy(this.rescueShipStartPos),this.rescueShip.visible=!0;const e=new b().subVectors(this.rescueShipTargetPos,this.rescueShipStartPos).normalize();this.rescueShip.rotation.y=Math.atan2(e.x,e.z)}updateRescueShip(t){if(!this.isRescueShipSailing||!this.rescueShip)return;this.rescueShipProgress=Math.min(1,this.rescueShipProgress+t*.08);const e=1-Math.pow(1-this.rescueShipProgress,2);this.rescueShip.position.lerpVectors(this.rescueShipStartPos,this.rescueShipTargetPos,e);const n=Math.sin(Date.now()*.003)*.22,i=Math.sin(Date.now()*.0025)*.04;this.rescueShip.position.y=n,this.rescueShip.rotation.x=i,this.searchlightGroup&&(this.searchlightGroup.rotation.y=Math.sin(Date.now()*.002)*.55)}updateDayNight(t,e){const n=t*Math.PI*2-Math.PI/2,i=240,s=Math.cos(n)*i,o=Math.sin(n)*i,a=Math.sin(n*.5)*60;this.sunMesh.position.set(e.x+s,e.y+o,e.z+a),this.moonMesh.position.set(e.x-s,e.y-o,e.z-a),o>0?(this.sunLight.position.set(e.x+s,e.y+o,e.z+a),this.sunLight.target.position.copy(e),this.sunLight.target.updateMatrixWorld()):(this.sunLight.position.set(e.x-s,e.y-o,e.z-a),this.sunLight.target.position.copy(e),this.sunLight.target.updateMatrixWorld());const l=new Tt(3703495),h=new Tt(10211575),u=new Tt(4335160),p=new Tt(14707514),m=new Tt(132626),g=new Tt(660518);let _=new Tt,d=new Tt,f=1.25,S=.45,E=0;if(t>=.28&&t<=.72)_.copy(l),d.copy(h),f=1.35,S=.5,E=0;else if(t>.72&&t<=.8){const v=(t-.72)/.08;_.copy(l).lerp(u,v),d.copy(h).lerp(p,v),f=An.lerp(1.35,.35,v),S=An.lerp(.5,.25,v),E=v*.4}else if(t>.8&&t<=.88){const v=(t-.8)/.08;_.copy(u).lerp(m,v),d.copy(p).lerp(g,v),f=An.lerp(.35,.12,v),S=An.lerp(.25,.1,v),E=.4+v*.6}else if(t>.88||t<.2)_.copy(m),d.copy(g),f=.12,S=.1,E=1;else{const v=(t-.2)/.08;_.copy(m).lerp(l,v),d.copy(g).lerp(h,v),f=An.lerp(.12,1.25,v),S=An.lerp(.1,.45,v),E=1-v}this.skyUniforms&&(this.skyUniforms.uTopColor.value.copy(_),this.skyUniforms.uBottomColor.value.copy(d),this.skyUniforms.uSunPos.value.set(s,o,a)),this.waterUniforms&&this.waterUniforms.uSunDir.value.set(s,Math.max(.1,o),a).normalize(),this.scene.fog=new bs(d.getHex(),.0032),this.sunLight.intensity=f,this.ambientLight.intensity=S,this.stars.material.opacity=E}setUnderwaterMode(t){t?(this.scene.fog=new bs(935260,.045),this.ambientLight.color.setHex(1664640)):this.ambientLight.color.setHex(14676223)}update(t,e,n){this.waveTime+=t*1.5,this.waterUniforms&&(this.waterUniforms.uTime.value=this.waveTime),this.cloudsGroup&&this.cloudsGroup.children.forEach(i=>{i.userData.angle+=i.userData.speed*t*.1,i.position.x=Math.cos(i.userData.angle)*i.userData.radius,i.position.z=Math.sin(i.userData.angle)*i.userData.radius}),this.updateRescueShip(t),this.updateDayNight(e,n)}}class Fp{constructor(t,e){this.scene=t,this.islandWorld=e,this.trees=[],this.rocks=[],this.pickups=[],this.interactiveObjects=[],this.swayFoliage=[],this.swaySeaweed=[],this.windTime=0,this.shipwreckGroup=null,this.shipwreckChest=null,this.materials=this.createMaterials(),this.init()}createMaterials(){return{trunk:new nt({color:8016432,roughness:.9,flatShading:!0}),leaves:new nt({color:4029998,roughness:.7,flatShading:!0,side:Ae}),fernLeaf:new nt({color:2389296,roughness:.65,flatShading:!0,side:Ae}),bushGreen:new nt({color:3042088,roughness:.8,flatShading:!0}),coconut:new nt({color:5847837,roughness:.8,flatShading:!0}),rock:new nt({color:7238005,roughness:.85,flatShading:!0}),woodPickup:new nt({color:9132587,roughness:.8,flatShading:!0}),shipWood:new nt({color:4863784,roughness:.95,flatShading:!0}),shipChest:new nt({color:9200185,metalness:.3,roughness:.6,flatShading:!0}),metalTrim:new nt({color:13938487,metalness:.8,roughness:.4}),flowerRed:new nt({color:15680580,roughness:.5,flatShading:!0}),flowerYellow:new nt({color:16436245,roughness:.5,flatShading:!0}),flowerPurple:new nt({color:11032055,roughness:.5,flatShading:!0}),flowerWhite:new nt({color:16317180,roughness:.5,flatShading:!0}),flowerStem:new nt({color:1409085,roughness:.8}),mushroomRed:new nt({color:14232864,roughness:.4,flatShading:!0}),mushroomGold:new nt({color:14251782,roughness:.5,flatShading:!0}),mushroomStem:new nt({color:14870768,roughness:.8}),coralPink:new nt({color:16007006,roughness:.7,flatShading:!0}),coralCyan:new nt({color:440020,roughness:.7,flatShading:!0}),coralOrange:new nt({color:16347926,roughness:.7,flatShading:!0}),seaweed:new nt({color:1467700,roughness:.4,flatShading:!0,side:Ae,transparent:!0,opacity:.9})}}init(){this.spawnPalmTrees(45),this.spawnRocks(30),this.spawnGroundPickups(50),this.createShipwreck(),this.spawnFernsAndBushes(75),this.spawnFlowerPatches(50),this.spawnMushroomClusters(35),this.spawnCoralReefs(40),this.spawnSeaweedBeds(45)}createPalmTreeMesh(){const t=new _t,e=7,n=1.1;let i=new b(0,0,0);const s=new b((Math.random()-.5)*.4,1,(Math.random()-.5)*.4).normalize();for(let a=0;a<e;a++){const c=.32*(1-a*.06),l=.38*(1-a*.05),h=new Kt(c,l,n,6),u=new D(h,this.materials.trunk);u.castShadow=!0,u.receiveShadow=!0,u.position.copy(i).addScaledVector(s,n*.5),u.quaternion.setFromUnitVectors(new b(0,1,0),s),t.add(u),i.addScaledVector(s,n),s.x+=(Math.random()-.5)*.12,s.z+=(Math.random()-.5)*.12,s.normalize()}const o=7;for(let a=0;a<o;a++){const c=a/o*Math.PI*2,l=new ie(.8,3.2,4);l.translate(0,1.6,0),l.rotateX(Math.PI/2.6);const h=new D(l,this.materials.leaves);h.rotation.y=c,h.position.copy(i),h.castShadow=!0,t.add(h)}for(let a=0;a<3;a++){const c=new ve(.24,0),l=new D(c,this.materials.coconut),h=a/3*Math.PI*2+.3;l.position.set(i.x+Math.cos(h)*.45,i.y-.25,i.z+Math.sin(h)*.45),l.castShadow=!0,t.add(l)}return{group:t,topPos:i}}spawnPalmTrees(t){for(let e=0;e<t;e++){const n=Math.random()*Math.PI*2,i=16+Math.random()*42,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>.4&&a<6.5){const{group:c}=this.createPalmTreeMesh(),l=.85+Math.random()*.35;c.scale.set(l,l,l),c.position.set(s,a,o),c.rotation.y=Math.random()*Math.PI*2;const h={type:"tree",name:"Cây Cọ Bờ Biển",health:100,maxHealth:100,group:c,position:new b(s,a,o),hint:"[E] Chặt Cây Cọ (100/100 HP)"};c.userData=h,this.scene.add(c),this.trees.push(h),this.interactiveObjects.push(c)}}}spawnRocks(t){for(let e=0;e<t;e++){const n=Math.random()*Math.PI*2,i=12+Math.random()*55,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>.1){const c=new ve(1.2+Math.random()*.9,0),l=c.attributes.position;for(let p=0;p<l.count;p++)l.setX(p,l.getX(p)*(.8+Math.random()*.4)),l.setY(p,l.getY(p)*(.7+Math.random()*.5)),l.setZ(p,l.getZ(p)*(.8+Math.random()*.4));c.computeVertexNormals();const h=new D(c,this.materials.rock);h.position.set(s,a+.6,o),h.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),h.castShadow=!0,h.receiveShadow=!0;const u={type:"rock",name:"Mỏm Đá Thô",health:120,maxHealth:120,mesh:h,position:new b(s,a,o),hint:"[E] Đập Đá Khai Thác (120/120 HP)"};h.userData=u,this.scene.add(h),this.rocks.push(u),this.interactiveObjects.push(h)}}}spawnGroundPickups(t){const e=["wood","stone","coconut"];for(let n=0;n<t;n++){const i=e[Math.floor(Math.random()*e.length)],s=Math.random()*Math.PI*2,o=8+Math.random()*56,a=Math.cos(s)*o,c=Math.sin(s)*o,l=this.islandWorld.getHeightAt(a,c);if(l>.15){let h=null,u="";if(i==="wood"){const m=new Kt(.08,.08,1.2,5);m.rotateZ(Math.PI/2.2),h=new D(m,this.materials.woodPickup),u="[E] Nhặt Cành Gỗ"}else if(i==="stone"){const m=new ve(.3,0);h=new D(m,this.materials.rock),u="[E] Nhặt Viên Đá"}else{const m=new ve(.28,0);h=new D(m,this.materials.coconut),u="[E] Nhặt Quả Dừa Tươi"}h.position.set(a,l+.15,c),h.rotation.set(0,Math.random()*Math.PI,0),h.castShadow=!0;const p={type:"pickup",itemId:i,name:i==="wood"?"Cành Gỗ":i==="stone"?"Viên Đá":"Quả Dừa",mesh:h,position:new b(a,l,c),hint:u};h.userData=p,this.scene.add(h),this.pickups.push(p),this.interactiveObjects.push(h)}}}createShipwreck(){this.shipwreckGroup=new _t;const t=new b(120,-1.2,-95),e=16,n=new at(7,4.5,e),i=new D(n,this.materials.shipWood);i.position.set(0,1.5,0),i.rotation.set(.15,.3,.25),i.castShadow=!0,i.receiveShadow=!0,this.shipwreckGroup.add(i);const s=new Kt(.3,.45,12,6),o=new D(s,this.materials.shipWood);o.position.set(1.5,6.5,-2),o.rotation.set(.35,0,.4),o.castShadow=!0,this.shipwreckGroup.add(o);for(let _=0;_<4;_++){const d=new at(1.2,1.2,1.2),f=new D(d,this.materials.shipWood);f.position.set((_-2)*1.5,2.5,_*1.2-2),f.rotation.set(Math.random()*.3,Math.random()*.5,0),f.castShadow=!0,this.shipwreckGroup.add(f)}const a=new _t,c=new at(1.4,.8,.9),l=new D(c,this.materials.shipChest);l.castShadow=!0,a.add(l);const h=new Kt(.48,.48,1.4,8,1,!1,0,Math.PI);h.rotateZ(Math.PI/2);const u=new D(h,this.materials.shipChest);u.position.set(0,.4,0),u.castShadow=!0,a.add(u);const p=new at(.18,.25,.1),m=new D(p,this.materials.metalTrim);m.position.set(0,.25,.46),a.add(m),a.position.set(.5,3.2,1.5),a.rotation.set(.15,.3,.25);const g={type:"chest",name:"Rương Báu Xác Tàu Đắm",isOpened:!1,group:a,hint:"[E] Lục Rương Sắt Xác Tàu"};a.userData=g,this.shipwreckChest=g,this.shipwreckGroup.add(a),this.interactiveObjects.push(a),this.shipwreckGroup.position.copy(t),this.scene.add(this.shipwreckGroup)}damageTree(t,e=25){return t.health-=e,t.hint=`[E] Chặt Cây Cọ (${Math.max(0,t.health)}/${t.maxHealth} HP)`,t.group.rotation.z+=.08,setTimeout(()=>{t.group&&(t.group.rotation.z-=.08)},120),t.health<=0?(this.destroyTree(t),!0):!1}destroyTree(t){this.scene.remove(t.group);const e=this.trees.indexOf(t);e!==-1&&this.trees.splice(e,1);const n=this.interactiveObjects.indexOf(t.group);n!==-1&&this.interactiveObjects.splice(n,1),this.spawnDrop(t.position.x+.5,t.position.z,"wood",3),this.spawnDrop(t.position.x-.5,t.position.z+.4,"palm_leaf",2),this.spawnDrop(t.position.x,t.position.z-.6,"coconut",1)}damageRock(t,e=25){return t.health-=e,t.hint=`[E] Đập Đá Khai Thác (${Math.max(0,t.health)}/${t.maxHealth} HP)`,t.health<=0?(this.destroyRock(t),!0):!1}destroyRock(t){this.scene.remove(t.mesh);const e=this.rocks.indexOf(t);e!==-1&&this.rocks.splice(e,1);const n=this.interactiveObjects.indexOf(t.mesh);n!==-1&&this.interactiveObjects.splice(n,1),this.spawnDrop(t.position.x,t.position.z,"stone",4)}spawnDrop(t,e,n,i=1){const s=this.islandWorld.getHeightAt(t,e);let o=null;if(n==="wood"){const a=new Kt(.08,.08,1,5);a.rotateZ(Math.PI/2),o=new D(a,this.materials.woodPickup)}else if(n==="stone"){const a=new ve(.28,0);o=new D(a,this.materials.rock)}else if(n==="palm_leaf"){const a=new ie(.4,1.2,3);o=new D(a,this.materials.leaves)}else if(n==="coconut"){const a=new ve(.26,0);o=new D(a,this.materials.coconut)}else if(n==="raw_meat"){const a=new at(.35,.2,.45);o=new D(a,new nt({color:11149858,flatShading:!0}))}else if(n==="raw_fish"){const a=new ie(.2,.7,4);a.rotateZ(Math.PI/2),o=new D(a,new nt({color:3377339,flatShading:!0}))}if(o){o.position.set(t,Math.max(.1,s+.15),e),o.castShadow=!0;const a={type:"pickup",itemId:n,count:i,name:n,mesh:o,position:new b(t,s,e),hint:`[E] Nhặt x${i} ${n}`};o.userData=a,this.scene.add(o),this.pickups.push(a),this.interactiveObjects.push(o)}}removePickup(t){this.scene.remove(t.mesh);const e=this.pickups.indexOf(t);e!==-1&&this.pickups.splice(e,1);const n=this.interactiveObjects.indexOf(t.mesh);n!==-1&&this.interactiveObjects.splice(n,1)}createFernMesh(){const t=new _t,e=7,n=[];for(let i=0;i<e;i++){const s=i/e*Math.PI*2,o=new ie(.35,1.6,3);o.translate(0,.8,0),o.rotateX(Math.PI/3.2);const a=new D(o,this.materials.fernLeaf);a.rotation.y=s,a.castShadow=!0,t.add(a),n.push(a)}return{group:t,fronds:n}}createBushMesh(){const t=new _t,e=3+Math.floor(Math.random()*3);for(let n=0;n<e;n++){const i=.5+Math.random()*.45,s=new ve(i,0),o=new D(s,this.materials.bushGreen);o.position.set((Math.random()-.5)*.6,i*.8,(Math.random()-.5)*.6),o.castShadow=!0,t.add(o)}return t}spawnFernsAndBushes(t){for(let e=0;e<t;e++){const n=Math.random()*Math.PI*2,i=10+Math.random()*50,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>.6&&a<6.8)if(Math.random()>.45){const{group:c,fronds:l}=this.createFernMesh(),h=.7+Math.random()*.5;c.scale.set(h,h,h),c.position.set(s,a,o),this.scene.add(c),this.swayFoliage.push({mesh:c,fronds:l,speed:1.2+Math.random()*.5,offset:Math.random()*Math.PI})}else{const c=this.createBushMesh();c.position.set(s,a,o),this.scene.add(c)}}}createFlowerPatch(){const t=new _t,e=[this.materials.flowerRed,this.materials.flowerYellow,this.materials.flowerPurple,this.materials.flowerWhite],n=e[Math.floor(Math.random()*e.length)],i=4+Math.floor(Math.random()*5);for(let s=0;s<i;s++){const o=new Kt(.02,.02,.35,4);o.translate(0,.17,0);const a=new D(o,this.materials.flowerStem),c=new ve(.12,0),l=new D(c,n);l.position.set(0,.36,0),a.add(l),a.position.set((Math.random()-.5)*1.4,0,(Math.random()-.5)*1.4),a.rotation.y=Math.random()*Math.PI,t.add(a)}return t}spawnFlowerPatches(t){for(let e=0;e<t;e++){const n=Math.random()*Math.PI*2,i=8+Math.random()*45,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>.8&&a<5.5){const c=this.createFlowerPatch();c.position.set(s,a,o),this.scene.add(c),this.swayFoliage.push({mesh:c,speed:2,offset:Math.random()*5})}}}createMushroomCluster(){const t=new _t,e=3+Math.floor(Math.random()*4),i=Math.random()>.5?this.materials.mushroomRed:this.materials.mushroomGold;for(let s=0;s<e;s++){const o=.18+Math.random()*.22,a=new Kt(.04,.05,o,5);a.translate(0,o*.5,0);const c=new D(a,this.materials.mushroomStem),l=new ie(.16,.12,6),h=new D(l,i);h.position.set(0,o,0),c.add(h),c.position.set((Math.random()-.5)*.8,0,(Math.random()-.5)*.8),t.add(c)}return t}spawnMushroomClusters(t){for(let e=0;e<t;e++){const n=Math.random()*Math.PI*2,i=12+Math.random()*42,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>1&&a<6){const c=this.createMushroomCluster();c.position.set(s,a,o),this.scene.add(c)}}}createCoralMesh(){const t=new _t,e=[this.materials.coralPink,this.materials.coralCyan,this.materials.coralOrange],n=e[Math.floor(Math.random()*e.length)],i=4+Math.floor(Math.random()*4);for(let s=0;s<i;s++){const o=.8+Math.random()*1.2,a=new ie(.12,o,5);a.translate(0,o*.5,0);const c=new D(a,n);c.position.set((Math.random()-.5)*.6,0,(Math.random()-.5)*.6),c.rotation.set((Math.random()-.5)*.4,Math.random()*Math.PI,(Math.random()-.5)*.4),t.add(c)}return t}spawnCoralReefs(t){for(let e=0;e<t;e++){const n=Math.random()*Math.PI*2,i=50+Math.random()*40,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a<-.4&&a>-4.5){const c=this.createCoralMesh();c.position.set(s,a,o),this.scene.add(c)}}}createSeaweedCluster(){const t=new _t,e=5+Math.floor(Math.random()*4),n=[];for(let i=0;i<e;i++){const s=2+Math.random()*1.8,o=new at(.14,s,.04);o.translate(0,s*.5,0);const a=new D(o,this.materials.seaweed);a.position.set((Math.random()-.5)*1.2,0,(Math.random()-.5)*1.2),t.add(a),n.push(a)}return{group:t,ribbons:n}}spawnSeaweedBeds(t){for(let e=0;e<t;e++){const n=Math.random()*Math.PI*2,i=52+Math.random()*45,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a<-.8&&a>-4){const{group:c,ribbons:l}=this.createSeaweedCluster();c.position.set(s,a,o),this.scene.add(c),this.swaySeaweed.push({ribbons:l,offset:Math.random()*Math.PI})}}}update(t){this.windTime+=t*1.8,Math.sin(this.windTime),this.swayFoliage.forEach(e=>{const n=Math.sin(this.windTime*e.speed+e.offset)*.08;e.mesh.rotation.z=n,e.fronds&&e.fronds.forEach((i,s)=>{i.rotation.z=Math.sin(this.windTime*1.2+s)*.05+.9})}),this.swaySeaweed.forEach(e=>{const n=Math.sin(this.windTime*.9+e.offset)*.28;e.ribbons.forEach((i,s)=>{i.rotation.z=n+Math.sin(this.windTime+s)*.1})})}}class Ea{constructor(t,e,n,i="male"){this.scene=t,this.camera=e,this.islandWorld=n,this.gender=i,this.viewMode="first_person",this.position=new b(0,3,25),this.velocity=new b,this.rotationY=0,this.pitch=0,this.currentBodyYaw=0,this.targetBodyYaw=0,this.smoothedCamPos=new b,this.hasInitializedCam=!1,this.isGrounded=!0,this.wasGrounded=!0,this.landingTimer=0,this.isSwimming=!1,this.isUnderwater=!1,this.isSprinting=!1,this.isCrouching=!1,this.isSwinging=!1,this.swingProgress=0,this.punchHand=0,this.walkSpeed=5.5,this.runSpeed=9.2,this.swimSpeed=4.4,this.jumpForce=7.6,this.gravity=-20,this.modelGroup=new _t,this.heldItemSlot=new _t,this.torchLight=null,this.bones={},this.equippedItemId="pickaxe",this.animTime=0,this.stepTimer=0,this.bubbles=[],this.bubbleTimer=0,this.init()}init(){this.buildProceduralCharacter(),this.scene.add(this.modelGroup),this.setupTorchLight(),this.setupUnderwaterBubbles(),this.updateViewMode()}setGender(t){for(this.gender=t;this.modelGroup.children.length>0;)this.modelGroup.remove(this.modelGroup.children[0]);this.buildProceduralCharacter(),this.setupTorchLight(),this.updateViewMode()}buildProceduralCharacter(){const t=this.gender==="male",e=t?13607546:14660748,n=t?8145186:2578748,i=4335893,s=t?2036750:3349521,o=t?11817737:165063,a=new nt({color:e,roughness:.75,flatShading:!0}),c=new nt({color:n,roughness:.85,flatShading:!0}),l=new nt({color:i,roughness:.8,flatShading:!0}),h=new nt({color:s,roughness:.9,flatShading:!0}),u=new nt({color:o,roughness:.7,flatShading:!0}),p=new ze({color:16777215}),m=new ze({color:988970}),g=new nt({color:10180685,roughness:.6}),_=new _t;_.position.set(0,.95,0),this.modelGroup.add(_);const d=new at(t?.48:.44,.22,.28),f=new D(d,c);f.position.set(0,0,0),f.castShadow=!0,_.add(f);const S=new at(t?.52:.48,.1,.32),E=new D(S,l);E.position.set(0,.08,0),_.add(E);const v=new at(.12,.08,.04),L=new nt({color:13273604,metalness:.6,roughness:.4}),C=new D(v,L);C.position.set(0,.08,.17),_.add(C);const A=new at(.24,.32,.04);A.translate(0,-.16,0);const P=new D(A,l);P.position.set(0,.06,.15),_.add(P);const w=new _t;w.position.set(0,.12,0),_.add(w);const M=t?.64:.52,R=.55,z=.34,k=new at(M,R,z);k.translate(0,R*.5,0);const X=new D(k,c);if(X.castShadow=!0,w.add(X),t){const Ve=new at(.16,.65,.06),De=new D(Ve,l);De.position.set(0,.3,.16),De.rotation.z=.45,w.add(De)}const $=new _t;$.position.set(0,R+.02,0),w.add($);const W=new Kt(.12,.14,.14,6);W.translate(0,.07,0);const J=new D(W,a);$.add(J);const B=new _t;B.position.set(0,.14,0),$.add(B);const rt=new at(.34,.36,.34);rt.translate(0,.18,0);const dt=new D(rt,a);dt.castShadow=!0,B.add(dt);const Mt=new at(.065,.045,.02),Nt=new at(.035,.035,.025),Yt=new D(Mt,p);Yt.position.set(-.08,.21,.18),B.add(Yt);const q=new D(Nt,m);q.position.set(-.08,.21,.185),B.add(q);const Q=new D(Mt,p);Q.position.set(.08,.21,.18),B.add(Q);const xt=new D(Nt,m);xt.position.set(.08,.21,.185),B.add(xt);const ut=new at(.055,.09,.06),Rt=new D(ut,a);Rt.position.set(0,.17,.2),B.add(Rt);const It=new at(.1,.03,.02),Bt=new D(It,g);Bt.position.set(0,.09,.18),B.add(Bt);const re=new at(.04,.08,.06),Vt=new D(re,a);Vt.position.set(-.19,.2,0),B.add(Vt);const he=new D(re,a);he.position.set(.19,.2,0),B.add(he);const N=new at(.38,.15,.38);N.translate(0,.38,0);const Re=new D(N,h);B.add(Re);const Gt=new at(.39,.06,.39);Gt.translate(0,.28,0);const Wt=new D(Gt,u);if(B.add(Wt),t){const Ve=new at(.3,.16,.18),De=new D(Ve,h);De.position.set(0,.05,.12),B.add(De)}else{const Ve=new at(.09,.5,.09),De=new D(Ve,h);De.position.set(-.14,.05,-.16),De.rotation.x=-.2,B.add(De);const xn=new D(Ve,h);xn.position.set(.14,.05,-.16),xn.rotation.x=-.2,B.add(xn);const Yi=new ie(.05,.3,4),$n=new D(Yi,u);$n.position.set(.2,.36,-.05),$n.rotation.z=-.4,B.add($n)}const bt=t?.09:.075,Zt=.34,yt=.34,T=new _t;T.position.set(-M*.56,R*.88,0),w.add(T);const x=new _t;T.add(x);const O=new at(bt*2,Zt,bt*2);O.translate(0,-Zt*.5,0);const K=new D(O,a);K.castShadow=!0,x.add(K);const Z=new _t;Z.position.set(0,-Zt,0),x.add(Z);const Y=new at(bt*1.8,yt,bt*1.8);Y.translate(0,-yt*.5,0);const vt=new D(Y,a);vt.castShadow=!0,Z.add(vt);const ct=new at(bt*2.1,.16,bt*2.1),gt=new D(ct,l);gt.position.set(0,-yt*.55,0),Z.add(gt);const Xt=new at(.12,.12,.12),tt=new D(Xt,a);tt.position.set(0,-yt,0),Z.add(tt);const mt=new _t;mt.position.set(M*.56,R*.88,0),w.add(mt);const Ct=new _t;mt.add(Ct);const Pt=new D(O,a);Pt.castShadow=!0,Ct.add(Pt);const ft=new _t;ft.position.set(0,-Zt,0),Ct.add(ft);const zt=new D(Y,a);zt.castShadow=!0,ft.add(zt);const Ut=new D(ct,l);Ut.position.set(0,-yt*.55,0),ft.add(Ut);const te=new D(Xt,a);te.position.set(0,-yt,0),ft.add(te),this.heldItemSlot=new _t,this.heldItemSlot.position.set(0,-yt-.04,.1),ft.add(this.heldItemSlot);const I=t?.18:.16,st=.44,V=.42,j=new _t;j.position.set(-.16,-.05,0),_.add(j);const lt=new _t;j.add(lt);const ht=new at(I,st,I);ht.translate(0,-st*.5,0);const Lt=new D(ht,a);Lt.castShadow=!0,lt.add(Lt);const ee=new _t;ee.position.set(0,-st,0),lt.add(ee);const fe=new at(I*.95,V,I*.95);fe.translate(0,-V*.5,0);const $t=new D(fe,a);$t.castShadow=!0,ee.add($t);const Se=new at(I*1.1,.22,I*1.5);Se.translate(0,-V+.08,.04);const Oe=new D(Se,l);Oe.castShadow=!0,ee.add(Oe);const Ln=new _t;Ln.position.set(.16,-.05,0),_.add(Ln);const Dn=new _t;Ln.add(Dn);const Ze=new D(ht,a);Ze.castShadow=!0,Dn.add(Ze);const sn=new _t;sn.position.set(0,-st,0),Dn.add(sn);const Ri=new D(fe,a);Ri.castShadow=!0,sn.add(Ri);const Pi=new D(Se,l);Pi.castShadow=!0,sn.add(Pi),this.bones={pelvis:_,torsoGroup:w,neckGroup:$,headGroup:B,leftShoulder:T,leftUpperArm:x,leftElbow:Z,rightShoulder:mt,rightUpperArm:Ct,rightElbow:ft,leftHip:j,leftThigh:lt,leftKnee:ee,rightHip:Ln,rightThigh:Dn,rightKnee:sn,loincloth:P}}setupTorchLight(){this.torchLight=new As(16755268,0,16,1.8),this.torchLight.position.set(0,.4,.2),this.torchLight.castShadow=!1,this.heldItemSlot.add(this.torchLight)}setupUnderwaterBubbles(){const t=new wi(.045,4,4),e=new nt({color:13626110,roughness:.1,metalness:.8,transparent:!0,opacity:.75});for(let n=0;n<15;n++){const i=new D(t,e);i.visible=!1,this.scene.add(i),this.bubbles.push({mesh:i,active:!1,velocity:new b,life:0})}}emitUnderwaterBubble(){const t=this.bubbles.find(e=>!e.active);t&&(t.active=!0,t.mesh.visible=!0,t.mesh.position.set(this.position.x+(Math.random()-.5)*.3,this.position.y+1.45,this.position.z+(Math.random()-.5)*.3),t.velocity.set((Math.random()-.5)*.3,1.8+Math.random()*.8,(Math.random()-.5)*.3),t.life=1.6)}updateUnderwaterBubbles(t){this.bubbles.forEach(e=>{e.active&&(e.life-=t,e.mesh.position.addScaledVector(e.velocity,t),e.mesh.position.x+=Math.sin(Date.now()*.01)*.01,(e.life<=0||e.mesh.position.y>=.05)&&(e.active=!1,e.mesh.visible=!1))})}setEquippedItem(t){for(;this.heldItemSlot.children.length>0;){const n=this.heldItemSlot.children[0];if(n===this.torchLight){this.heldItemSlot.remove(n);break}this.heldItemSlot.remove(n)}if(this.heldItemSlot.children.includes(this.torchLight)||this.heldItemSlot.add(this.torchLight),!t){this.equippedItemId="fist",this.torchLight.intensity=0;return}const e=t.id;if(this.equippedItemId=e,e==="pickaxe"){const n=new _t,i=new Kt(.035,.045,.95,5),s=new nt({color:8146724,roughness:.9}),o=new D(i,s);o.position.set(0,.22,0),n.add(o);const a=new at(.12,.16,.16),c=new nt({color:4674921,roughness:.6,metalness:.5}),l=new D(a,c);l.position.set(0,.6,0),n.add(l);const h=new ie(.065,.45,4);h.rotateZ(-Math.PI/2.2);const u=new nt({color:3359061,roughness:.5,metalness:.6,flatShading:!0}),p=new D(h,u);p.position.set(.24,.6,0),n.add(p);const m=new at(.22,.1,.11),g=new D(m,u);g.position.set(-.15,.6,0),n.add(g),n.rotation.x=-Math.PI/2.5,this.heldItemSlot.add(n),this.torchLight.intensity=0}else if(e==="axe"){const n=new _t,i=new Kt(.04,.05,.9,5),s=new nt({color:9066537,roughness:.9}),o=new D(i,s);o.position.set(0,.2,0),n.add(o);const a=new at(.1,.28,.35),c=new nt({color:7238005,roughness:.7,flatShading:!0}),l=new D(a,c);l.position.set(0,.55,.1),n.add(l),n.rotation.x=-Math.PI/2.5,this.heldItemSlot.add(n),this.torchLight.intensity=0}else if(e==="spear"){const n=new _t,i=new Kt(.03,.035,1.9,5),s=new nt({color:9066537,roughness:.9}),o=new D(i,s);o.position.set(0,.45,0),n.add(o);const a=new ie(.075,.38,4),c=new nt({color:5921886,roughness:.5,metalness:.5,flatShading:!0}),l=new D(a,c);l.position.set(0,1.45,0),n.add(l),n.rotation.x=-Math.PI/2.6,this.heldItemSlot.add(n),this.torchLight.intensity=0}else if(e==="torch"){const n=new _t,i=new Kt(.045,.055,.75,5),s=new nt({color:6503964,roughness:.9}),o=new D(i,s);o.position.set(0,.2,0),n.add(o);const a=new ve(.14,0),c=new ze({color:16746496}),l=new D(a,c);l.position.set(0,.6,0),n.add(l),n.rotation.x=-Math.PI/3,this.heldItemSlot.add(n),this.torchLight.intensity=2.4}else if(e==="fishing_rod"){const n=new _t,i=new Kt(.025,.04,2.2,5),s=new nt({color:10252859,roughness:.8}),o=new D(i,s);o.position.set(0,.7,0),n.add(o),n.rotation.x=-Math.PI/2.5,this.heldItemSlot.add(n),this.torchLight.intensity=0}else this.torchLight.intensity=0}triggerSwing(){this.isSwinging||(this.isSwinging=!0,this.swingProgress=0,this.punchHand=1-this.punchHand)}toggleViewMode(){this.viewMode=this.viewMode==="first_person"?"third_person":"first_person",this.updateViewMode()}updateViewMode(){this.viewMode==="first_person"?(this.modelGroup.traverse(t=>{t.isMesh&&t!==this.heldItemSlot&&(t.castShadow=!0,this.heldItemSlot.children.some(e=>e===t||e.getObjectById(t.id))||(t.visible=!1))}),this.bones.rightUpperArm&&this.bones.rightUpperArm.traverse(t=>{t.isMesh&&(t.visible=!0)})):this.modelGroup.traverse(t=>{t.isMesh&&(t.visible=!0)})}update(t,e,n,i,s,o){this.isSprinting=n,this.isCrouching=s;const a=this.islandWorld.getHeightAt(this.position.x,this.position.z),c=0,l=c-this.position.y;this.isSwimming=l>.4,this.isUnderwater=l>1.5;let h=this.walkSpeed;this.isSwimming?h=this.isUnderwater?this.swimSpeed*1.15:this.swimSpeed:this.isSprinting&&!this.isCrouching?h=this.runSpeed:this.isCrouching&&(h=this.walkSpeed*.55);const u=new b(0,0,-1).applyAxisAngle(new b(0,1,0),this.rotationY),p=new b(1,0,0).applyAxisAngle(new b(0,1,0),this.rotationY),m=new b;if(m.addScaledVector(u,e.z),m.addScaledVector(p,e.x),m.lengthSq()>.001&&m.normalize(),this.velocity.x=m.x*h,this.velocity.z=m.z*h,this.isSwimming)if(i)this.velocity.y=3.8;else if(s)this.velocity.y=-3.8;else if(this.isUnderwater)m.lengthSq()>.01?this.velocity.y=Math.sin(this.pitch)*h:this.velocity.y*=.9;else{const f=c-.7;this.velocity.y=(f-this.position.y)*3.2}else this.isGrounded?i?(this.velocity.y=this.jumpForce,this.isGrounded=!1):this.velocity.y=0:this.velocity.y+=this.gravity*t;if(this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.position.z+=this.velocity.z*t,this.wasGrounded=this.isGrounded,this.position.y<=a?(this.position.y=a,this.isGrounded=!0,this.velocity.y=0,!this.wasGrounded&&!this.isSwimming&&(this.landingTimer=.22)):!this.isSwimming&&this.position.y-a>.2&&(this.isGrounded=!1),this.landingTimer>0&&(this.landingTimer-=t),this.isUnderwater&&(this.bubbleTimer+=t,this.bubbleTimer>=.28&&(this.bubbleTimer=0,this.emitUnderwaterBubble())),this.updateUnderwaterBubbles(t),this.modelGroup.position.copy(this.position),this.viewMode==="third_person"){this.isSwinging?this.targetBodyYaw=this.rotationY:m.lengthSq()>.001&&(this.targetBodyYaw=Math.atan2(m.x,m.z));let f=(this.targetBodyYaw-this.currentBodyYaw+Math.PI)%(Math.PI*2)-Math.PI;f<-Math.PI&&(f+=Math.PI*2),this.currentBodyYaw+=f*Math.min(1,t*14),this.modelGroup.rotation.y=this.currentBodyYaw}else this.modelGroup.rotation.y=this.rotationY,this.currentBodyYaw=this.rotationY,this.targetBodyYaw=this.rotationY;const g=m.lengthSq()>.1;if(g&&this.isGrounded){if(this.stepTimer+=t*(this.isSprinting?2.6:1.6),this.stepTimer>=1){this.stepTimer=0;const f=a<.2?"water":"sand";o&&o.playFootstep(f)}}else g&&this.isSwimming&&!this.isUnderwater&&(this.stepTimer+=t*1.5,this.stepTimer>=1&&(this.stepTimer=0,o&&o.playSplash()));this.animTime+=t*(this.isSprinting?12.5:7.2);const _=Math.sin(this.animTime);Math.cos(this.animTime);const d=this.bones;if(d.pelvis)if(this.isSwimming){this.isUnderwater?(d.pelvis.rotation.x=Math.PI/2+this.pitch*.75,d.neckGroup.rotation.x=0):(d.pelvis.rotation.x=Math.PI/2.3,d.neckGroup.rotation.x=-.55),d.pelvis.position.y=.95,d.torsoGroup.rotation.set(0,0,0);const f=Math.sin(this.animTime*1.4);if(d.leftThigh.rotation.x=f*.35,d.leftKnee.rotation.x=Math.max(0,-f*.55),d.rightThigh.rotation.x=-f*.35,d.rightKnee.rotation.x=Math.max(0,f*.55),!this.isSwinging){const S=Math.sin(this.animTime*1.1);d.leftUpperArm.rotation.x=S*1.4,d.leftElbow.rotation.x=Math.max(0,Math.cos(this.animTime*1.1)*.9),d.rightUpperArm.rotation.x=-S*1.4,d.rightElbow.rotation.x=Math.max(0,-Math.cos(this.animTime*1.1)*.9)}}else if(!this.isGrounded)d.pelvis.rotation.x=-.15,d.pelvis.position.y=.95,d.neckGroup.rotation.x=.1,d.leftThigh.rotation.x=-.45,d.leftKnee.rotation.x=.75,d.rightThigh.rotation.x=.3,d.rightKnee.rotation.x=.4,d.leftUpperArm.rotation.x=-.6,d.leftUpperArm.rotation.z=-.4,d.leftElbow.rotation.x=.5,this.isSwinging||(d.rightUpperArm.rotation.x=-.6,d.rightUpperArm.rotation.z=.4,d.rightElbow.rotation.x=.5);else if(g){const f=this.isSprinting,S=f?.85:.5;d.pelvis.rotation.x=f?.24:.08,d.pelvis.position.y=.95+Math.abs(Math.sin(this.animTime))*(f?.1:.04),d.torsoGroup.rotation.y=-_*(f?.16:.08),d.leftThigh.rotation.x=_*S,d.leftKnee.rotation.x=Math.max(0,-_*S*1.4),d.rightThigh.rotation.x=-_*S,d.rightKnee.rotation.x=Math.max(0,_*S*1.4),d.leftUpperArm.rotation.x=-_*S*.9,d.leftUpperArm.rotation.z=-.18,d.leftElbow.rotation.x=f?1.4:.65,this.isSwinging||(d.rightUpperArm.rotation.x=_*S*.9,d.rightUpperArm.rotation.z=.18,d.rightElbow.rotation.x=f?1.4:.65),d.loincloth&&(d.loincloth.rotation.x=-Math.abs(_)*.4)}else{const f=this.landingTimer>0?this.landingTimer/.22*.14:0;d.pelvis.position.y=.95-f+Math.sin(this.animTime*.35)*.02,d.pelvis.rotation.set(f*.8,0,0),d.torsoGroup.rotation.set(-f*.5,0,0),d.neckGroup.rotation.x=Math.sin(this.animTime*.35)*.02,d.leftThigh.rotation.x=f*.6,d.leftKnee.rotation.x=f*1.2,d.rightThigh.rotation.x=f*.6,d.rightKnee.rotation.x=f*1.2,d.leftUpperArm.rotation.set(0,0,-.15),d.leftElbow.rotation.x=.3,this.isSwinging||(d.rightUpperArm.rotation.set(0,0,.15),d.rightElbow.rotation.x=.3),d.loincloth&&(d.loincloth.rotation.x=0)}if(this.isSwinging){const f=this.equippedItemId==="spear"?6.5:this.equippedItemId==="pickaxe"?7.2:8.5;if(this.swingProgress+=t*f,this.swingProgress<=1){const S=this.swingProgress;if(this.equippedItemId==="spear")if(S<.3){const E=S/.3;d.rightUpperArm.rotation.set(-.7*E,0,.2),d.rightElbow.rotation.x=1.2*E,d.torsoGroup.rotation.y=-.3*E}else if(S<.65){const E=(S-.3)/.35;d.rightUpperArm.rotation.set(-.7-.8*E,0,.1),d.rightElbow.rotation.x=1.2-1.1*E,d.torsoGroup.rotation.y=-.3+.45*E}else{const E=(S-.65)/.35;d.rightUpperArm.rotation.set(-1.5*(1-E),0,.15),d.rightElbow.rotation.x=.3*E,d.torsoGroup.rotation.y=.15*(1-E)}else if(this.equippedItemId==="pickaxe"||this.equippedItemId==="axe"){const E=Math.sin(S*Math.PI);d.rightUpperArm.rotation.x=-Math.PI/1.7*E,d.rightElbow.rotation.x=-.5*Math.sin(S*Math.PI*2),d.torsoGroup.rotation.x=(S<.5?-.15:.25)*E}else{const E=Math.sin(S*Math.PI);this.punchHand===0?(d.rightUpperArm.rotation.x=-1.4*E,d.rightElbow.rotation.x=.1*E,d.torsoGroup.rotation.y=.25*E):(d.leftUpperArm.rotation.x=-1.4*E,d.leftElbow.rotation.x=.1*E,d.torsoGroup.rotation.y=-.25*E)}}else this.isSwinging=!1,this.swingProgress=0}this.updateCamera(t)}updateCamera(t=.016){const e=this.isCrouching?1.15:1.7;if(this.viewMode==="first_person")this.camera.position.set(this.position.x,this.position.y+e,this.position.z),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.rotationY,this.camera.rotation.x=this.pitch;else{const n=new b(this.position.x,this.position.y+1.25,this.position.z),i=4.2,s=Math.cos(this.pitch),o=Math.sin(this.pitch),a=Math.sin(this.rotationY),c=Math.cos(this.rotationY),l=new b(a*s,-o,c*s),h=n.clone().addScaledVector(l,i).add(new b(0,.95,0)),u=this.islandWorld.getHeightAt(h.x,h.z);h.y<u+.5&&(h.y=u+.5),this.hasInitializedCam?this.smoothedCamPos.lerp(h,Math.min(1,t*14)):(this.smoothedCamPos.copy(h),this.hasInitializedCam=!0),this.camera.position.copy(this.smoothedCamPos);const p=new b(-a*s,o,-c*s),m=n.clone().addScaledVector(p,25).add(new b(0,.4,0));this.camera.lookAt(m)}}addRotation(t,e){this.rotationY-=t,this.pitch-=e,this.pitch=Math.max(-Math.PI/2.1,Math.min(Math.PI/2.1,this.pitch))}}class Op{constructor(t,e,n,i){this.scene=t,this.islandWorld=e,this.foliageManager=n,this.soundManager=i,this.landAnimals=[],this.seaAnimals=[],this.fishSchools=[],this.interactiveEntities=[],this.boars=[],this.shark=null,this.materials=this.createMaterials(),this.init()}createMaterials(){return{boarBody:new nt({color:4862745,roughness:.9,flatShading:!0}),boarSnout:new nt({color:7227427,roughness:.8,flatShading:!0}),tusk:new nt({color:15262936,roughness:.4}),deerCoat:new nt({color:11037755,roughness:.85,flatShading:!0}),deerSpots:new nt({color:16117467,roughness:.8}),deerAntler:new nt({color:5915698,roughness:.9,flatShading:!0}),bunnyFur:new nt({color:15394527,roughness:.9,flatShading:!0}),bunnyPink:new nt({color:16037301,roughness:.8}),crabShell:new nt({color:14238758,roughness:.7,flatShading:!0}),crabClaw:new nt({color:15491125,roughness:.6,flatShading:!0}),monkeyFur:new nt({color:6899240,roughness:.9,flatShading:!0}),monkeyFace:new nt({color:13935475,roughness:.8}),leopardCoat:new nt({color:14259515,roughness:.85,flatShading:!0}),leopardSpots:new nt({color:3022351,roughness:.9}),fishBlue:new nt({color:2263261,roughness:.3,flatShading:!0}),fishOrange:new nt({color:15628066,roughness:.3,flatShading:!0}),fishYellow:new nt({color:16106776,roughness:.3,flatShading:!0}),sharkSkin:new nt({color:4016722,roughness:.6,flatShading:!0}),sharkBelly:new nt({color:12897748,roughness:.6,flatShading:!0}),turtleShell:new nt({color:4020790,roughness:.8,flatShading:!0}),turtleSkin:new nt({color:7703642,roughness:.7,flatShading:!0}),mantaBack:new nt({color:2108216,roughness:.6,flatShading:!0}),mantaBelly:new nt({color:14739181,roughness:.6,flatShading:!0}),dolphinSkin:new nt({color:4877708,roughness:.4,flatShading:!0}),dolphinBelly:new nt({color:14083309,roughness:.4,flatShading:!0})}}init(){this.spawnBoars(4),this.spawnDeers(4),this.spawnBunnies(5),this.spawnCrabs(5),this.spawnMonkeys(4),this.spawnLeopards(3),this.spawnFishSchools(8),this.spawnSeaTurtles(3),this.spawnGreatShark(),this.spawnMantaRays(3),this.spawnDolphins(3)}createBoarModel(){const t=new _t,e=new at(.85,.7,1.4),n=new D(e,this.materials.boarBody);n.position.set(0,.65,0),n.castShadow=!0,t.add(n);const i=new _t;i.position.set(0,.75,.75),t.add(i);const s=new at(.55,.55,.65),o=new D(s,this.materials.boarBody);o.castShadow=!0,i.add(o);const a=new at(.35,.28,.35),c=new D(a,this.materials.boarSnout);c.position.set(0,-.1,.45),c.castShadow=!0,i.add(c);const l=new ie(.06,.25,4);l.rotateX(Math.PI/4);const h=new D(l,this.materials.tusk);h.position.set(-.2,-.05,.45),i.add(h);const u=h.clone();u.position.set(.2,-.05,.45),i.add(u);const p=[],m=new at(.18,.5,.18);m.translate(0,-.25,0);const g=[[-.32,.45,.45],[.32,.45,.45],[-.32,.45,-.45],[.32,.45,-.45]];for(let _ of g){const d=new D(m,this.materials.boarBody);d.position.set(..._),d.castShadow=!0,t.add(d),p.push(d)}return{group:t,legs:p,headGroup:i}}spawnBoars(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+Math.random()*.4,i=24+Math.random()*28,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>.8){const{group:c,legs:l,headGroup:h}=this.createBoarModel();c.position.set(s,a,o),this.scene.add(c);const u={category:"wildlife",subCategory:"land",type:"boar",name:"Lợn Rừng Đảo",icon:"🐗",health:80,maxHealth:80,group:c,legs:l,headGroup:h,state:"patrol",isAggro:!1,targetPos:new b(s,a,o),speed:2.2,chargeSpeed:5.5,attackCooldown:0,attackDamage:16,animCycle:Math.random()*10,drops:[{id:"raw_meat",count:2},{id:"stone",count:1}],hint:"[E/Click] Tấn Công Lợn Rừng (80/80 HP)"};c.userData=u,this.landAnimals.push(u),this.boars.push(u),this.interactiveEntities.push(c)}}}createDeerModel(){const t=new _t,e=new at(.65,.65,1.35),n=new D(e,this.materials.deerCoat);n.position.set(0,.95,0),n.castShadow=!0,t.add(n);const i=new at(.12,.12,.12);for(let g=-.4;g<=.4;g+=.35){const _=new D(i,this.materials.deerSpots);_.position.set(-.33,1.05,g),t.add(_);const d=new D(i,this.materials.deerSpots);d.position.set(.33,1.05,g),t.add(d)}const s=new at(.32,.75,.35);s.translate(0,.35,0);const o=new D(s,this.materials.deerCoat);o.position.set(0,1,.65),o.rotation.x=-Math.PI/6,o.castShadow=!0,t.add(o);const a=new at(.34,.34,.5),c=new D(a,this.materials.deerCoat);c.position.set(0,.75,.15),o.add(c);const l=new D(new ie(.04,.6,4),this.materials.deerAntler);l.position.set(-.16,.35,-.05),l.rotation.z=-.4,c.add(l);const h=new D(new ie(.04,.6,4),this.materials.deerAntler);h.position.set(.16,.35,-.05),h.rotation.z=.4,c.add(h);const u=[],p=new at(.12,.85,.12);p.translate(0,-.42,0);const m=[[-.24,.75,.45],[.24,.75,.45],[-.24,.75,-.45],[.24,.75,-.45]];for(let g of m){const _=new D(p,this.materials.deerCoat);_.position.set(...g),_.castShadow=!0,t.add(_),u.push(_)}return{group:t,legs:u,neck:o}}spawnDeers(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+.3,i=20+Math.random()*26,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>1){const{group:c,legs:l,neck:h}=this.createDeerModel();c.position.set(s,a,o),this.scene.add(c);const u={category:"wildlife",subCategory:"land",type:"deer",name:"Hươu Sao Nhiệt Đới",icon:"🦌",health:60,maxHealth:60,group:c,legs:l,neck:h,state:"patrol",isAggro:!1,isPassive:!0,targetPos:new b(s,a,o),speed:2.4,fleeSpeed:7.2,animCycle:Math.random()*10,drops:[{id:"raw_meat",count:2}],hint:"[E/Click] Săn Hươu Sao (60/60 HP)"};c.userData=u,this.landAnimals.push(u),this.interactiveEntities.push(c)}}}createBunnyModel(){const t=new _t,e=new at(.38,.35,.55),n=new D(e,this.materials.bunnyFur);n.position.set(0,.28,0),n.castShadow=!0,t.add(n);const i=new at(.28,.28,.3),s=new D(i,this.materials.bunnyFur);s.position.set(0,.42,.28),s.castShadow=!0,t.add(s);const o=new at(.08,.08,.08),a=new D(o,this.materials.bunnyPink);a.position.set(0,.4,.45),t.add(a);const c=new at(.07,.35,.1),l=new D(c,this.materials.bunnyFur);l.position.set(-.1,.68,.25),l.rotation.z=-.15,t.add(l);const h=new D(c,this.materials.bunnyFur);h.position.set(.1,.68,.25),h.rotation.z=.15,t.add(h);const u=new ve(.09,0),p=new D(u,this.materials.bunnyFur);p.position.set(0,.32,-.32),t.add(p);const m=[],g=new at(.1,.18,.14),_=[[-.14,.1,.18],[.14,.1,.18],[-.16,.12,-.18],[.16,.12,-.18]];for(let d of _){const f=new D(g,this.materials.bunnyFur);f.position.set(...d),t.add(f),m.push(f)}return{group:t,legs:m,head:s}}spawnBunnies(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+Math.random()*.5,i=14+Math.random()*24,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>.6){const{group:c,legs:l,head:h}=this.createBunnyModel();c.position.set(s,a,o),this.scene.add(c);const u={category:"wildlife",subCategory:"land",type:"bunny",name:"Thỏ Bông Đảo",icon:"🐇",health:30,maxHealth:30,group:c,legs:l,head:h,state:"patrol",isAggro:!1,isPassive:!0,targetPos:new b(s,a,o),speed:1.8,fleeSpeed:8,animCycle:Math.random()*10,drops:[{id:"raw_meat",count:1}],hint:"[E/Click] Bắt Thỏ Bông (30/30 HP)"};c.userData=u,this.landAnimals.push(u),this.interactiveEntities.push(c)}}}createCrabModel(){const t=new _t,e=new Kt(.65,.75,.3,7),n=new D(e,this.materials.crabShell);n.position.set(0,.35,0),n.castShadow=!0,t.add(n);const i=new wi(.08,6,6),s=new ze({color:1118481}),o=new D(i,s);o.position.set(-.25,.52,.5),t.add(o);const a=new D(i,s);a.position.set(.25,.52,.5),t.add(a);const c=new at(.35,.22,.45),l=new _t;l.position.set(-.6,.38,.5);const h=new D(c,this.materials.crabClaw);h.position.set(0,0,.2),l.add(h),t.add(l);const u=new _t;u.position.set(.6,.38,.5);const p=new D(c,this.materials.crabClaw);p.position.set(0,0,.2),u.add(p),t.add(u);const m=[],g=new at(.1,.1,.55),_=[-1,1];for(let d of _)for(let f=-1;f<=1;f++){const S=new D(g,this.materials.crabShell);S.position.set(d*.7,.2,f*.35),S.rotation.z=d*.4,t.add(S),m.push(S)}return{group:t,legs:m,clawLGroup:l,clawRGroup:u}}spawnCrabs(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+.2,i=45+Math.random()*12,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>=.1&&a<=1.4){const{group:c,legs:l,clawLGroup:h,clawRGroup:u}=this.createCrabModel();c.position.set(s,a,o),this.scene.add(c);const p={category:"wildlife",subCategory:"land",type:"crab",name:"Cua Biển Khổng Lồ",icon:"🦀",health:70,maxHealth:70,group:c,legs:l,clawLGroup:h,clawRGroup:u,state:"patrol",isAggro:!1,targetPos:new b(s,a,o),speed:1.6,chargeSpeed:4.5,attackCooldown:0,attackDamage:12,animCycle:Math.random()*10,drops:[{id:"raw_meat",count:2}],hint:"[E/Click] Tấn Công Cua Biển (70/70 HP)"};c.userData=p,this.landAnimals.push(p),this.interactiveEntities.push(c)}}}createMonkeyModel(){const t=new _t,e=new at(.42,.55,.38),n=new D(e,this.materials.monkeyFur);n.position.set(0,.5,0),n.castShadow=!0,t.add(n);const i=new at(.34,.34,.32),s=new D(i,this.materials.monkeyFur);s.position.set(0,.88,.1),t.add(s);const o=new at(.24,.22,.14),a=new D(o,this.materials.monkeyFace);a.position.set(0,.84,.24),t.add(a);const c=new Kt(.04,.04,.7,4),l=new D(c,this.materials.monkeyFur);l.position.set(0,.55,-.35),l.rotation.x=-Math.PI/3,t.add(l);const h=[],u=new at(.12,.55,.12);u.translate(0,-.22,0);const p=new D(u,this.materials.monkeyFur);p.position.set(-.28,.65,.05),t.add(p),h.push(p);const m=new D(u,this.materials.monkeyFur);m.position.set(.28,.65,.05),t.add(m),h.push(m);const g=new at(.13,.45,.13);g.translate(0,-.2,0);const _=new D(g,this.materials.monkeyFur);_.position.set(-.16,.32,-.05),t.add(_),h.push(_);const d=new D(g,this.materials.monkeyFur);return d.position.set(.16,.32,-.05),t.add(d),h.push(d),{group:t,limbs:h,tail:l,head:s}}spawnMonkeys(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+.5,i=30+Math.random()*18,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>1.2){const{group:c,limbs:l,tail:h,head:u}=this.createMonkeyModel();c.position.set(s,a,o),this.scene.add(c);const p={category:"wildlife",subCategory:"land",type:"monkey",name:"Khỉ Đảo Tinh Nghịch",icon:"🐒",health:50,maxHealth:50,group:c,limbs:l,tail:h,head:u,state:"patrol",isAggro:!1,targetPos:new b(s,a,o),speed:2.5,chargeSpeed:5.2,attackCooldown:0,attackDamage:10,animCycle:Math.random()*10,drops:[{id:"coconut",count:1},{id:"palm_leaf",count:2}],hint:"[E/Click] Tấn Công Khỉ Đảo (50/50 HP)"};c.userData=p,this.landAnimals.push(p),this.interactiveEntities.push(c)}}}createLeopardModel(){const t=new _t,e=new at(.68,.6,1.6),n=new D(e,this.materials.leopardCoat);n.position.set(0,.72,0),n.castShadow=!0,t.add(n);const i=new at(.12,.12,.12);for(let d=-.55;d<=.55;d+=.3){const f=new D(i,this.materials.leopardSpots);f.position.set(-.35,.8,d),t.add(f);const S=new D(i,this.materials.leopardSpots);S.position.set(.35,.8,d),t.add(S)}const s=new _t;s.position.set(0,.88,.85),t.add(s);const o=new at(.48,.44,.52),a=new D(o,this.materials.leopardCoat);a.castShadow=!0,s.add(a);const c=new ie(.08,.16,4),l=new D(c,this.materials.leopardSpots);l.position.set(-.18,.26,0),s.add(l);const h=new D(c,this.materials.leopardSpots);h.position.set(.18,.26,0),s.add(h);const u=new Kt(.05,.04,1.1,4);u.translate(0,.45,0);const p=new D(u,this.materials.leopardCoat);p.position.set(0,.75,-.8),p.rotation.x=-Math.PI/3,t.add(p);const m=[],g=new at(.18,.65,.2);g.translate(0,-.3,0);const _=[[-.26,.55,.55],[.26,.55,.55],[-.26,.55,-.55],[.26,.55,-.55]];for(let d of _){const f=new D(g,this.materials.leopardCoat);f.position.set(...d),f.castShadow=!0,t.add(f),m.push(f)}return{group:t,legs:m,tail:p,headGroup:s}}spawnLeopards(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+1.1,i=28+Math.random()*20,s=Math.cos(n)*i,o=Math.sin(n)*i,a=this.islandWorld.getHeightAt(s,o);if(a>2){const{group:c,legs:l,tail:h,headGroup:u}=this.createLeopardModel();c.position.set(s,a,o),this.scene.add(c);const p={category:"wildlife",subCategory:"land",type:"leopard",name:"Báo Rừng Đốm",icon:"🐆",health:120,maxHealth:120,group:c,legs:l,tail:h,headGroup:u,state:"patrol",isAggro:!1,targetPos:new b(s,a,o),speed:2.6,chargeSpeed:6.8,attackCooldown:0,attackDamage:22,animCycle:Math.random()*10,drops:[{id:"raw_meat",count:3}],hint:"[E/Click] Tấn Công Báo Rừng (120/120 HP)"};c.userData=p,this.landAnimals.push(p),this.interactiveEntities.push(c)}}}createFishSchool(t){const e=new _t,n=6+Math.floor(Math.random()*4),i=[],s=new ie(.12,.55,4);s.rotateZ(Math.PI/2);for(let a=0;a<n;a++){const c=Math.random(),l=c<.4?this.materials.fishBlue:c<.75?this.materials.fishOrange:this.materials.fishYellow,h=new D(s,l),u=new b((Math.random()-.5)*3,-.4-Math.random()*.8,(Math.random()-.5)*3);h.position.copy(u),e.add(h),i.push({mesh:h,offset:u,speed:1.2+Math.random()*.8,angle:Math.random()*Math.PI*2})}e.position.copy(t),this.scene.add(e);const o={category:"wildlife",subCategory:"sea",type:"fish_school",name:"Đàn Cá Biển Nhiệt Đới",icon:"🐟",group:e,fishes:i,center:t.clone(),orbitRadius:4+Math.random()*4,angle:Math.random()*Math.PI*2,hint:"[F] Thả Cần Câu Bắt Cá"};e.userData=o,this.fishSchools.push(o),this.interactiveEntities.push(e)}spawnFishSchools(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2,i=52+Math.random()*42,s=Math.cos(n)*i,o=Math.sin(n)*i,a=-.6;this.createFishSchool(new b(s,a,o))}}createTurtleModel(){const t=new _t,e=new Kt(1,1.25,.55,8),n=new D(e,this.materials.turtleShell);n.position.set(0,0,0),n.castShadow=!0,t.add(n);const i=new wi(.32,6,6),s=new D(i,this.materials.turtleSkin);s.position.set(0,.1,1.35),t.add(s);const o=new at(1.2,.08,.45),a=new D(o,this.materials.turtleSkin);a.position.set(-1.1,0,.6),a.rotation.y=-.3,t.add(a);const c=new D(o,this.materials.turtleSkin);c.position.set(1.1,0,.6),c.rotation.y=.3,t.add(c);const l=new at(.5,.06,.35),h=new D(l,this.materials.turtleSkin);h.position.set(-.7,-.05,-1),t.add(h);const u=new D(l,this.materials.turtleSkin);return u.position.set(.7,-.05,-1),t.add(u),{group:t,flipperL:a,flipperR:c,head:s}}spawnSeaTurtles(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+.8,i=60+Math.random()*30,s=Math.cos(n)*i,o=Math.sin(n)*i,a=-1.2,{group:c,flipperL:l,flipperR:h,head:u}=this.createTurtleModel();c.position.set(s,a,o),this.scene.add(c);const p={category:"wildlife",subCategory:"sea",type:"turtle",name:"Rùa Biển Cổ Đại",icon:"🐢",health:100,maxHealth:100,group:c,flipperL:l,flipperR:h,head:u,center:new b(s,a,o),orbitRadius:18+Math.random()*10,angle:Math.random()*Math.PI*2,speed:1.5,state:"patrol",isPassive:!0,drops:[{id:"raw_meat",count:2}],hint:"[E/Click] Săn Rùa Biển (100/100 HP)"};c.userData=p,this.seaAnimals.push(p),this.interactiveEntities.push(c)}}spawnGreatShark(){const t=new _t,e=new ie(1.2,5.5,6);e.rotateX(Math.PI/2);const n=new D(e,this.materials.sharkSkin);n.castShadow=!0,t.add(n);const i=new ie(.35,1.4,4);i.rotateZ(Math.PI/6);const s=new D(i,this.materials.sharkSkin);s.position.set(0,.9,-.4),s.castShadow=!0,t.add(s);const o=new at(.18,1.6,1),a=new D(o,this.materials.sharkSkin);a.position.set(0,0,-2.6),a.castShadow=!0,t.add(a);const c=new ie(.8,1.2,5);c.rotateX(-Math.PI/2);const l=new D(c,this.materials.sharkBelly);l.position.set(0,-.2,2.2),t.add(l);const h=new b(120,-.45,-95);t.position.copy(h),this.scene.add(t);const u={category:"wildlife",subCategory:"sea",type:"shark",name:"Cá Mập Trắng Đại Dương",icon:"🦈",health:180,maxHealth:180,group:t,tail:a,center:h,patrolRadius:30,angle:0,speed:3.5,chargeSpeed:7.2,state:"patrol",isAggro:!1,attackCooldown:0,attackDamage:28,drops:[{id:"raw_meat",count:4}],hint:"[E/Click] Tấn Công Cá Mập (180/180 HP)"};t.userData=u,this.shark=u,this.seaAnimals.push(u),this.interactiveEntities.push(t)}createMantaModel(){const t=new _t,e=new ie(2.4,3.2,4);e.rotateX(Math.PI/2),e.scale(1,.12,1);const n=new D(e,this.materials.mantaBack);n.castShadow=!0,t.add(n);const i=new ie(2.3,3.1,4);i.rotateX(Math.PI/2),i.scale(1,.08,1);const s=new D(i,this.materials.mantaBelly);s.position.set(0,-.06,0),t.add(s);const o=new Kt(.04,.02,3.2,4);o.rotateX(Math.PI/2);const a=new D(o,this.materials.mantaBack);return a.position.set(0,0,-2.2),t.add(a),{group:t,wings:n,tail:a}}spawnMantaRays(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+1.6,i=68+Math.random()*25,s=Math.cos(n)*i,o=Math.sin(n)*i,a=-2.2,{group:c,wings:l,tail:h}=this.createMantaModel();c.position.set(s,a,o),this.scene.add(c);const u={category:"wildlife",subCategory:"sea",type:"manta",name:"Cá Đuối Khổng Lồ",icon:"🐟",health:90,maxHealth:90,group:c,wings:l,tail:h,center:new b(s,a,o),orbitRadius:22+Math.random()*12,angle:Math.random()*Math.PI*2,speed:2.2,state:"patrol",isAggro:!1,attackCooldown:0,attackDamage:14,drops:[{id:"raw_meat",count:2}],hint:"[E/Click] Tấn Công Cá Đuối (90/90 HP)"};c.userData=u,this.seaAnimals.push(u),this.interactiveEntities.push(c)}}createDolphinModel(){const t=new _t,e=new ie(.65,3.2,6);e.rotateX(Math.PI/2);const n=new D(e,this.materials.dolphinSkin);n.castShadow=!0,t.add(n);const i=new ie(.22,.6,5);i.rotateX(Math.PI/2);const s=new D(i,this.materials.dolphinSkin);s.position.set(0,-.05,1.8),t.add(s);const o=new ie(.25,.8,4);o.rotateZ(Math.PI/4);const a=new D(o,this.materials.dolphinSkin);a.position.set(0,.55,-.2),t.add(a);const c=new at(.9,.08,.35),l=new D(c,this.materials.dolphinSkin);return l.position.set(0,0,-1.65),t.add(l),{group:t,flukes:l}}spawnDolphins(t){for(let e=0;e<t;e++){const n=e/t*Math.PI*2+2.4,i=58+Math.random()*26,s=Math.cos(n)*i,o=Math.sin(n)*i,a=-.8,{group:c,flukes:l}=this.createDolphinModel();c.position.set(s,a,o),this.scene.add(c);const h={category:"wildlife",subCategory:"sea",type:"dolphin",name:"Cá Heo Đảo Xanh",icon:"🐬",health:80,maxHealth:80,group:c,flukes:l,center:new b(s,a,o),orbitRadius:26+Math.random()*12,angle:Math.random()*Math.PI*2,speed:3.8,state:"patrol",isPassive:!0,leapProgress:0,drops:[{id:"raw_meat",count:1}],hint:"[E/Click] Quan Sát Cá Heo Đảo"};c.userData=h,this.seaAnimals.push(h),this.interactiveEntities.push(c)}}update(t,e,n){this.updateLandAnimals(t,e,n),this.updateFishSchools(t),this.updateSeaAnimals(t,e,n)}updateLandAnimals(t,e,n){this.landAnimals.forEach(i=>{i.animCycle+=t*(i.state==="charge"?12:5);const s=Math.sin(i.animCycle);i.legs&&i.legs.length>=4?(i.legs[0].rotation.x=s*.6,i.legs[1].rotation.x=-s*.6,i.legs[2].rotation.x=-s*.6,i.legs[3].rotation.x=s*.6):i.legs&&i.legs.length===6&&i.legs.forEach((c,l)=>{c.rotation.z=Math.sin(i.animCycle+l*.5)*.35+(l<3?-.4:.4)}),i.tail&&(i.tail.rotation.y=Math.sin(i.animCycle*1.4)*.35),i.clawLGroup&&i.clawRGroup&&(i.clawLGroup.rotation.y=Math.sin(i.animCycle)*.3,i.clawRGroup.rotation.y=-Math.sin(i.animCycle)*.3),i.attackCooldown>0&&(i.attackCooldown-=t);const o=i.group.position.distanceTo(e.position);if(i.state==="patrol"){const c=new b().subVectors(i.targetPos,i.group.position);if(c.y=0,c.length()<1.5){const l=i.group.position.x+(Math.random()-.5)*25,h=i.group.position.z+(Math.random()-.5)*25,u=this.islandWorld.getHeightAt(l,h);u>.3&&i.targetPos.set(l,u,h)}else c.normalize(),i.group.position.addScaledVector(c,i.speed*t),i.group.rotation.y=Math.atan2(c.x,c.z)}else if(i.state==="charge"){const c=new b().subVectors(e.position,i.group.position);c.y=0,c.normalize();const l=i.chargeSpeed||5.5;if(i.group.position.addScaledVector(c,l*t),i.group.rotation.y=Math.atan2(c.x,c.z),o<2.2&&i.attackCooldown<=0){i.attackCooldown=1.8;const h=i.attackDamage||16;n(h,`Bị ${i.name} phản công!`),i.type==="boar"?this.soundManager.playAnimalGrunt():i.type==="leopard"?this.soundManager.playLeopardRoar():i.type==="crab"?this.soundManager.playCrabSnap():this.soundManager.playAnimalHit()}o>30&&(i.state="patrol",i.isAggro=!1)}else if(i.state==="flee"){const c=new b().subVectors(i.group.position,e.position);c.y=0,c.normalize();const l=i.fleeSpeed||7;i.group.position.addScaledVector(c,l*t),i.group.rotation.y=Math.atan2(c.x,c.z),o>35&&(i.state="patrol")}const a=this.islandWorld.getHeightAt(i.group.position.x,i.group.position.z);i.group.position.y=Math.max(.1,a)})}updateFishSchools(t){this.fishSchools.forEach(e=>{e.angle+=t*.35,e.group.position.x=e.center.x+Math.cos(e.angle)*e.orbitRadius,e.group.position.z=e.center.z+Math.sin(e.angle)*e.orbitRadius,e.group.rotation.y=e.angle+Math.PI/2,e.fishes.forEach((n,i)=>{n.mesh.rotation.y=Math.sin(Date.now()*.006+i)*.35})})}updateSeaAnimals(t,e,n){const i=e.position.y<.2;this.seaAnimals.forEach(s=>{const o=s.group.position.distanceTo(e.position);if(s.attackCooldown>0&&(s.attackCooldown-=t),s.type==="shark"){if(s.tail.rotation.y=Math.sin(Date.now()*.007)*.45,s.state==="charge"){const a=new b().subVectors(e.position,s.group.position);a.y=0,a.normalize(),s.group.position.addScaledVector(a,s.chargeSpeed*t),s.group.rotation.y=Math.atan2(a.x,a.z)+Math.PI,o<3.2&&i&&s.attackCooldown<=0&&(s.attackCooldown=2,n(s.attackDamage,"Bị Cá Mập Trắng tấn công cắn xé!"),this.soundManager.playSharkWarning()),(o>48||!i)&&(s.state="patrol",s.isAggro=!1)}else if(s.state==="flee"){const a=new b().subVectors(s.group.position,e.position);a.y=0,a.normalize(),s.group.position.addScaledVector(a,5*t),o>40&&(s.state="patrol")}else s.angle+=t*.35,s.group.position.x=s.center.x+Math.cos(s.angle)*s.patrolRadius,s.group.position.z=s.center.z+Math.sin(s.angle)*s.patrolRadius,s.group.rotation.y=-s.angle;s.group.position.y=-.45}else if(s.type==="turtle"){const a=Math.sin(Date.now()*.003)*.35;s.flipperL.rotation.z=a,s.flipperR.rotation.z=-a,s.state==="flee"?(s.angle+=t*.6,s.group.position.x=s.center.x+Math.cos(s.angle)*(s.orbitRadius+15),s.group.position.z=s.center.z+Math.sin(s.angle)*(s.orbitRadius+15),s.group.rotation.y=-s.angle,o>30&&(s.state="patrol")):(s.angle+=t*.2,s.group.position.x=s.center.x+Math.cos(s.angle)*s.orbitRadius,s.group.position.z=s.center.z+Math.sin(s.angle)*s.orbitRadius,s.group.rotation.y=-s.angle),s.group.position.y=-1.2}else if(s.type==="manta"){const a=Math.sin(Date.now()*.004)*.25;if(s.wings.rotation.z=a,s.tail.rotation.y=Math.sin(Date.now()*.006)*.3,s.state==="charge"){const c=new b().subVectors(e.position,s.group.position);c.y=0,c.normalize(),s.group.position.addScaledVector(c,4*t),s.group.rotation.y=Math.atan2(c.x,c.z),o<3&&s.attackCooldown<=0&&(s.attackCooldown=2.2,n(s.attackDamage,"Bị Cá Đuối quất đuôi tự vệ!"),this.soundManager.playAnimalHit()),(o>28||!i)&&(s.state="patrol")}else s.angle+=t*.25,s.group.position.x=s.center.x+Math.cos(s.angle)*s.orbitRadius,s.group.position.z=s.center.z+Math.sin(s.angle)*s.orbitRadius,s.group.rotation.y=-s.angle;s.group.position.y=-2.2}else if(s.type==="dolphin"){s.flukes.rotation.x=Math.sin(Date.now()*.008)*.45,s.angle+=t*.38,s.leapProgress+=t*.8;const a=Math.sin(s.leapProgress)*1.5-.7;s.group.position.x=s.center.x+Math.cos(s.angle)*s.orbitRadius,s.group.position.z=s.center.z+Math.sin(s.angle)*s.orbitRadius,s.group.position.y=a,s.group.rotation.y=-s.angle,s.group.rotation.x=Math.cos(s.leapProgress)*.4}})}damageEntity(t,e){if(!t)return{killed:!1};if(t.health-=e,this.soundManager.playAnimalHit(),t.hint=`[E/Click] Tấn Công ${t.name} (${Math.max(0,t.health)}/${t.maxHealth} HP)`,t.health<=0){this.scene.remove(t.group);const n=this.landAnimals.indexOf(t);n!==-1&&this.landAnimals.splice(n,1);const i=this.seaAnimals.indexOf(t);i!==-1&&this.seaAnimals.splice(i,1);const s=this.boars.indexOf(t);s!==-1&&this.boars.splice(s,1),this.shark===t&&(this.shark=null);const o=this.interactiveEntities.indexOf(t.group);return o!==-1&&this.interactiveEntities.splice(o,1),(t.drops||[{id:"raw_meat",count:2}]).forEach((c,l)=>{this.foliageManager.spawnDrop(t.group.position.x+l*.35,t.group.position.z+l*.35,c.id,c.count)}),{killed:!0,data:t}}return t.isPassive?t.state="flee":(t.state=t.health<25?"flee":"charge",t.isAggro=!0,t.type==="boar"?this.soundManager.playAnimalGrunt():t.type==="leopard"?this.soundManager.playLeopardRoar():t.type==="shark"?this.soundManager.playSharkWarning():t.type==="crab"?this.soundManager.playCrabSnap():t.type==="dolphin"&&this.soundManager.playDolphinWhistle()),{killed:!1,data:t}}damageBoar(t,e){return this.damageEntity(t,e).killed}damageShark(t){return this.shark?this.damageEntity(this.shark,t).killed:!1}}class Bp{constructor(t,e,n){this.scene=t,this.islandWorld=e,this.soundManager=n,this.structures=[],this.interactiveStructures=[],this.materials=this.createMaterials()}createMaterials(){return{stone:new nt({color:6382438,roughness:.9,flatShading:!0}),wood:new nt({color:7885102,roughness:.9,flatShading:!0}),leaves:new nt({color:4750645,roughness:.7,flatShading:!0,side:Ae}),flame:new ze({color:16742144}),ash:new nt({color:2829099,roughness:1}),table:new nt({color:8541226,roughness:.8,flatShading:!0})}}buildStructure(t,e,n=0){let i=null;return t==="campfire"?i=this.createCampfire(e):t==="shelter"?i=this.createShelter(e,n):t==="workbench"?i=this.createWorkbench(e,n):t==="beacon"&&(i=this.createRescueBeacon(e,n)),i?(this.structures.push(i),this.interactiveStructures.push(i.group),this.soundManager.playCraft(),i):null}createCampfire(t){const e=new _t,n=8;for(let c=0;c<n;c++){const l=c/n*Math.PI*2,h=new ve(.28,0),u=new D(h,this.materials.stone);u.position.set(Math.cos(l)*.85,.15,Math.sin(l)*.85),u.castShadow=!0,e.add(u)}for(let c=0;c<4;c++){const l=new Kt(.08,.08,1,5),h=new D(l,this.materials.wood);h.rotation.set(Math.PI/4,c/4*Math.PI*2,0),h.position.set(0,.2,0),h.castShadow=!0,e.add(h)}const i=new ie(.35,.9,5),s=new D(i,this.materials.flame);s.position.set(0,.6,0),e.add(s);const o=new As(16742178,2.5,14,1.5);o.position.set(0,.8,0),e.add(o),e.position.copy(t),this.scene.add(e);const a={type:"campfire",name:"Lửa Trại Sưởi Ấm",group:e,flameMesh:s,light:o,position:t.clone(),rotation:e.rotation,hint:"[E] Sưởi Ấm / Nấu Nướng Thực Phẩm"};return e.userData=a,a}createShelter(t,e=0){const n=new _t,i=new Kt(.07,.08,3.2,5),s=new D(i,this.materials.wood);s.rotation.set(0,0,Math.PI/4.5),s.position.set(-.9,1.2,1),s.castShadow=!0,n.add(s);const o=new D(i,this.materials.wood);o.rotation.set(0,0,-Math.PI/4.5),o.position.set(.9,1.2,1),o.castShadow=!0,n.add(o);const a=new D(i,this.materials.wood);a.rotation.set(0,0,Math.PI/4.5),a.position.set(-.9,1.2,-1),a.castShadow=!0,n.add(a);const c=new D(i,this.materials.wood);c.rotation.set(0,0,-Math.PI/4.5),c.position.set(.9,1.2,-1),c.castShadow=!0,n.add(c);const l=new Kt(.08,.08,2.6,5);l.rotateX(Math.PI/2);const h=new D(l,this.materials.wood);h.position.set(0,2.2,0),h.castShadow=!0,n.add(h);const u=new gn(2.4,2.6);u.rotateX(-Math.PI/2.8);const p=new D(u,this.materials.leaves);p.position.set(-.7,1.2,0),p.castShadow=!0,n.add(p);const m=new gn(2.4,2.6);m.rotateX(Math.PI/2.8);const g=new D(m,this.materials.leaves);g.position.set(.7,1.2,0),g.castShadow=!0,n.add(g);const _=new at(1.4,.15,2),d=new D(_,this.materials.leaves);d.position.set(0,.1,0),n.add(d),n.position.copy(t),n.rotation.y=e,this.scene.add(n);const f={type:"shelter",name:"Lều Trú Ẩn Lá Cọ",group:n,position:t.clone(),rotation:n.rotation,hint:"[E] Ngủ Qua Đêm & Đặt Điểm Hồi Sinh"};return n.userData=f,f}createWorkbench(t,e=0){const n=new _t,i=new at(2.2,.2,1.3),s=new D(i,this.materials.table);s.position.set(0,.9,0),s.castShadow=!0,n.add(s);const o=new at(.18,.8,.18);[[-.9,.45,-.45],[.9,.45,-.45],[-.9,.45,.45],[.9,.45,.45]].forEach(h=>{const u=new D(o,this.materials.wood);u.position.set(...h),u.castShadow=!0,n.add(u)});const a=new at(.3,.15,.15),c=new D(a,this.materials.stone);c.position.set(.4,1.05,.2),n.add(c),n.position.copy(t),n.rotation.y=e,this.scene.add(n);const l={type:"workbench",name:"Bàn Cơ Khí",group:n,position:t.clone(),rotation:n.rotation,hint:"[E] Mở Bàn Chế Tạo Cơ Khí"};return n.userData=l,l}createRescueBeacon(t,e=0){const n=new _t,i=new Kt(.1,.15,5.2,5);for(let g=0;g<3;g++){const _=g/3*Math.PI*2,d=new D(i,this.materials.wood);d.position.set(Math.cos(_)*1.1,2.5,Math.sin(_)*1.1),d.rotation.set(-Math.sin(_)*.25,0,Math.cos(_)*.25),d.castShadow=!0,n.add(d)}const s=new Kt(1.2,.8,.8,6),o=new D(s,this.materials.stone);o.position.set(0,4.9,0),o.castShadow=!0,n.add(o);const a=new ie(1.2,3.2,6),c=new D(a,this.materials.flame);c.position.set(0,6.6,0),c.visible=!1,n.add(c);const l=new As(16750848,0,45,1.2);l.position.set(0,7,0),n.add(l);const h=new Kt(1.8,.4,28,8),u=new ze({color:13421772,transparent:!0,opacity:.65}),p=new D(h,u);p.position.set(0,20,0),p.visible=!1,n.add(p),n.position.copy(t),n.rotation.y=e,this.scene.add(n);const m={type:"beacon",name:"Đài Hiệu Cứu Hộ",group:n,flame:c,light:l,smoke:p,isLit:!1,position:t.clone(),rotation:n.rotation,hint:"[E] Thắp Sáng Bằng Đuốc Cứu Hộ"};return n.userData=m,m}igniteBeacon(t){t.isLit||(t.isLit=!0,t.flame.visible=!0,t.smoke.visible=!0,t.light.intensity=5,t.hint="Đài Hiệu Đang Rực Cháy Kêu Cứu!",this.soundManager.playBeaconIgnite(),this.soundManager.playShipFoghorn())}update(t,e){const n=Date.now()*.008;this.structures.forEach(i=>{if(i.type==="campfire"&&i.flameMesh){const s=1+Math.sin(n*3)*.12+Math.cos(n*5.2)*.08;i.flameMesh.scale.set(s,s*1.1,s),i.light.intensity=2.5+Math.sin(n*4)*.5}else if(i.type==="beacon"&&i.isLit){const s=1+Math.sin(n*4)*.15;i.flame.scale.set(s,s,s),i.light.intensity=5+Math.sin(n*6)*1}})}isPlayerNearCampfire(t,e=12){for(const n of this.structures)if(n.type==="campfire"&&n.position.distanceTo(t)<=e)return!0;return!1}}class kp{constructor(t,e){this.domElement=t,this.onActionCallback=e||(()=>{}),this.moveVector={x:0,z:0},this.isSprint=!1,this.isJump=!1,this.isCrouch=!1,this.deltaYaw=0,this.deltaPitch=0,this.keys={},this.controlMode="auto",this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>0||window.innerWidth<=1024,this.isPointerLocked=!1,this.joystick={active:!1,touchId:null,startX:0,startY:0,currentX:0,currentY:0,maxRadius:55},this.touchLook={active:!1,touchId:null,lastX:0,lastY:0},this.mouseSensitivity=.0022,this.touchSensitivity=.0045,this.init()}init(){this.bindKeyboard(),this.bindMouse(),this.bindTouch(),this.updateControlModeUI(),this.checkOrientation(),window.addEventListener("resize",()=>{this.checkOrientation(),this.controlMode==="auto"&&this.updateControlModeUI()}),window.addEventListener("orientationchange",()=>this.checkOrientation())}setControlMode(t){this.controlMode=t,t==="touch"?this.isTouchDevice=!0:t==="pc"?this.isTouchDevice=!1:this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>0||window.innerWidth<=1024,this.updateControlModeUI()}toggleControlMode(){return this.isTouchDevice?this.setControlMode("pc"):this.setControlMode("touch"),this.isTouchDevice}updateControlModeUI(){if(this.isTouchDevice){document.body.classList.add("touch-mode"),document.body.classList.remove("pc-mode");const t=document.getElementById("btn-toggle-control-mode");t&&(t.innerText="💻",t.title="Đang ở chế độ Cảm ứng. Bấm để chuyển sang Bàn phím & Chuột (PC)")}else{document.body.classList.add("pc-mode"),document.body.classList.remove("touch-mode");const t=document.getElementById("btn-toggle-control-mode");t&&(t.innerText="📱",t.title="Đang ở chế độ PC. Bấm để chuyển sang Cảm ứng Mobile/Tablet")}}bindKeyboard(){window.addEventListener("keydown",t=>{if(this.keys[t.code]=!0,t.code==="KeyE")this.onActionCallback("interact");else if(t.code==="KeyF")this.onActionCallback("fish");else if(t.code==="Tab")t.preventDefault(),this.onActionCallback("toggleInventory");else if(t.code==="KeyV")this.onActionCallback("toggleView");else if(t.code==="KeyQ")this.onActionCallback("toggleQuests");else if(t.code==="Escape")this.onActionCallback("pause");else if(t.code.startsWith("Digit")){const e=parseInt(t.code.replace("Digit",""),10);e>=1&&e<=6&&this.onActionCallback("hotbarSelect",e-1)}}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1})}bindMouse(){this.domElement.addEventListener("click",t=>{var e,n;if(!this.isPointerLocked&&!this.isTouchDevice)try{(n=(e=this.domElement).requestPointerLock)==null||n.call(e)}catch(i){console.warn("PointerLock request failed:",i)}}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===this.domElement}),document.addEventListener("mousemove",t=>{this.isPointerLocked&&(this.deltaYaw+=t.movementX*this.mouseSensitivity,this.deltaPitch+=t.movementY*this.mouseSensitivity)}),document.addEventListener("mousedown",t=>{this.isPointerLocked&&t.button===0&&this.onActionCallback("attack")})}bindTouch(){const t=document.getElementById("touch-zone-left"),e=document.getElementById("touch-zone-right"),n=document.getElementById("joystick-base"),i=document.getElementById("joystick-knob");if(!t||!e)return;t.addEventListener("touchstart",a=>{a.preventDefault();for(let c of a.changedTouches)if(!this.joystick.active){this.joystick.active=!0,this.joystick.touchId=c.identifier,this.joystick.startX=c.clientX,this.joystick.startY=c.clientY,this.joystick.currentX=c.clientX,this.joystick.currentY=c.clientY,n&&i&&(n.style.display="block",n.style.left=`${c.clientX}px`,n.style.top=`${c.clientY}px`,i.style.transform="translate(-50%, -50%)");break}},{passive:!1}),t.addEventListener("touchmove",a=>{if(a.preventDefault(),!!this.joystick.active){for(let c of a.changedTouches)if(c.identifier===this.joystick.touchId){const l=c.clientX-this.joystick.startX,h=c.clientY-this.joystick.startY,u=Math.hypot(l,h),p=Math.atan2(h,l),m=Math.min(u,this.joystick.maxRadius),g=Math.cos(p)*m,_=Math.sin(p)*m;i&&(i.style.transform=`translate(calc(-50% + ${g}px), calc(-50% + ${_}px))`);const d=m/this.joystick.maxRadius;this.moveVector.x=Math.cos(p)*d,this.moveVector.z=-Math.sin(p)*d,this.isSprint=d>.8;break}}},{passive:!1});const s=a=>{for(let c of a.changedTouches)if(c.identifier===this.joystick.touchId){this.joystick.active=!1,this.joystick.touchId=null,this.moveVector.x=0,this.moveVector.z=0,this.isSprint=!1,n&&(n.style.display="none");break}};t.addEventListener("touchend",s),t.addEventListener("touchcancel",s),e.addEventListener("touchstart",a=>{a.preventDefault();for(let c of a.changedTouches)if(!this.touchLook.active){this.touchLook.active=!0,this.touchLook.touchId=c.identifier,this.touchLook.lastX=c.clientX,this.touchLook.lastY=c.clientY;break}},{passive:!1}),e.addEventListener("touchmove",a=>{if(a.preventDefault(),!!this.touchLook.active){for(let c of a.changedTouches)if(c.identifier===this.touchLook.touchId){const l=c.clientX-this.touchLook.lastX,h=c.clientY-this.touchLook.lastY;this.deltaYaw+=l*this.touchSensitivity,this.deltaPitch+=h*this.touchSensitivity,this.touchLook.lastX=c.clientX,this.touchLook.lastY=c.clientY;break}}},{passive:!1});const o=a=>{for(let c of a.changedTouches)if(c.identifier===this.touchLook.touchId){this.touchLook.active=!1,this.touchLook.touchId=null;break}};e.addEventListener("touchend",o),e.addEventListener("touchcancel",o),this.bindTapButton("btn-action-primary",()=>this.onActionCallback("interact")),this.bindHoldButton("btn-action-jump",a=>{this.isJump=a}),this.bindHoldButton("btn-action-crouch",a=>{this.isCrouch=a}),this.bindTapButton("btn-action-fish",()=>this.onActionCallback("fish")),this.bindTapButton("btn-action-view",()=>this.onActionCallback("toggleView")),this.bindTapButton("btn-toggle-inventory",()=>this.onActionCallback("toggleInventory")),this.bindTapButton("btn-toggle-quests",()=>this.onActionCallback("toggleQuests")),this.bindTapButton("btn-toggle-settings",()=>this.onActionCallback("pause")),this.bindTapButton("btn-toggle-control-mode",()=>{const a=this.toggleControlMode();this.onActionCallback("toast",{text:`Chế độ điều khiển: ${a?"📱 Cảm ứng Mobile/Tablet":"💻 Bàn phím & Chuột PC"}`,type:"info"})})}bindHoldButton(t,e){const n=document.getElementById(t);if(!n)return;const i=o=>{o.preventDefault(),o.stopPropagation(),n.classList.add("active"),e(!0)},s=o=>{o.preventDefault(),o.stopPropagation(),n.classList.remove("active"),e(!1)};n.addEventListener("pointerdown",i),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),n.addEventListener("pointerleave",s)}bindTapButton(t,e){const n=document.getElementById(t);if(!n)return;let i=0;const s=o=>{o.preventDefault(),o.stopPropagation();const a=performance.now();a-i<140||(i=a,n.classList.add("active"),setTimeout(()=>n.classList.remove("active"),120),e())};n.addEventListener("pointerdown",s)}checkOrientation(){const t=window.innerHeight>window.innerWidth&&this.isTouchDevice,e=document.getElementById("landscape-warning");e&&(e.style.display=t?"flex":"none")}getFrameInput(){this.joystick.active||(this.moveVector.x=0,this.moveVector.z=0,this.keys.KeyW&&(this.moveVector.z+=1),this.keys.KeyS&&(this.moveVector.z-=1),this.keys.KeyA&&(this.moveVector.x-=1),this.keys.KeyD&&(this.moveVector.x+=1),this.isSprint=!!this.keys.ShiftLeft||!!this.keys.ShiftRight,this.isJump=!!this.keys.Space,this.isCrouch=!!this.keys.ControlLeft||!!this.keys.KeyZ);const t=this.deltaYaw,e=this.deltaPitch;return this.deltaYaw=0,this.deltaPitch=0,{move:this.moveVector,isSprint:this.isSprint,isJump:this.isJump,isCrouch:this.isCrouch,deltaYaw:t,deltaPitch:e}}}class Gp{constructor(t,e,n,i,s,o,a){this.camera=t,this.islandWorld=e,this.foliageManager=n,this.wildlifeManager=i,this.structuresManager=s,this.gameState=o,this.soundManager=a,this.raycaster=new Ip,this.raycaster.far=4.8,this.currentTarget=null,this.targetData=null,this.hintEl=document.getElementById("crosshair-hint"),this.crosshairEl=document.getElementById("crosshair"),this.mobileActionBtn=document.getElementById("btn-action-primary"),this.mobileActionLabel=document.getElementById("mobile-action-label"),this.mobileActionIcon=document.getElementById("mobile-action-icon")}findInteractiveRoot(t){let e=t;for(;e;){if(e.userData&&e.userData.type)return e;e=e.parent}return null}update(t){this.raycaster.setFromCamera(new Ht(0,0),this.camera);const e=[...this.foliageManager.interactiveObjects,...this.wildlifeManager.interactiveEntities,...this.structuresManager.interactiveStructures];this.islandWorld.freshwaterPool&&e.push(this.islandWorld.freshwaterPool);const n=this.raycaster.intersectObjects(e,!0);if(n.length>0){const i=n[0],s=this.findInteractiveRoot(i.object);if(s&&s.userData){this.currentTarget=s,this.targetData=s.userData,this.updateHintUI(this.targetData,t);return}}this.currentTarget=null,this.targetData=null,this.resetHintUI()}updateHintUI(t,e){this.crosshairEl&&this.crosshairEl.classList.add("targeted"),this.mobileActionBtn&&this.mobileActionBtn.classList.add("targeted");let n=t.hint||t.name||"",i="👊",s="HÀNH ĐỘNG";if(t.type==="tree")i="🪓",s="CHẶT CÂY";else if(t.type==="rock")i="⛏️",s="ĐẬP ĐÁ";else if(t.type==="pickup")i="✋",s="NHẶT ĐỒ";else if(t.type==="freshwater_pool")i="💧",s="UỐNG NƯỚC";else if(t.type==="fish_school")i="🎣",s="CÂU CÁ";else if(t.category==="wildlife"||t.type==="boar"||t.type==="shark")i=t.icon||"⚔️",s="TẤN CÔNG";else if(t.type==="chest")i="📦",s="LỤC RƯƠNG";else if(t.type==="campfire"){const o=this.gameState.getItemCount("raw_meat")>0,a=this.gameState.getItemCount("raw_fish")>0;o||a?(n="[E] Nướng Thịt / Nướng Cá Chín",i="🥩",s="NẤU NƯỚNG"):(n="[E] Sưởi Ấm Bên Lửa Trại",i="🔥",s="SƯỞI ẤM")}else t.type==="shelter"?(i="🛖",s="ĐI NGỦ"):t.type==="workbench"?(i="🛠️",s="CHẾ TẠO"):t.type==="beacon"&&(i="🗼",s="THẮP SÁNG");this.hintEl&&(this.hintEl.innerText=n,this.hintEl.style.display="block"),this.mobileActionLabel&&(this.mobileActionLabel.innerText=s),this.mobileActionIcon&&(this.mobileActionIcon.innerText=i)}resetHintUI(){this.crosshairEl&&this.crosshairEl.classList.remove("targeted"),this.mobileActionBtn&&this.mobileActionBtn.classList.remove("targeted"),this.hintEl&&(this.hintEl.style.display="none"),this.mobileActionLabel&&(this.mobileActionLabel.innerText="TƯƠNG TÁC"),this.mobileActionIcon&&(this.mobileActionIcon.innerText="👊")}handleInteract(t,e){if(t.triggerSwing(),this.gameState.player.stamina<5){this.gameState.notify("toast",{text:"⚡ Bạn đang kiệt sức! Hãy nghỉ ngơi để hồi thể lực.",type:"warn"});return}this.gameState.player.stamina=Math.max(0,this.gameState.player.stamina-4),this.gameState.getActiveItem();const n=this.gameState.getActiveItemDef();let i=20;if(n&&(n.id==="pickaxe"?i=45:n.id==="axe"?i=35:n.id==="spear"&&(i=50)),!this.targetData){this.soundManager.playSwing();return}const s=this.targetData;if(s.type==="tree"){this.soundManager.playChop();const o=n&&n.id==="axe"?40:20;this.foliageManager.damageTree(s,o)&&(this.gameState.stats.treesChopped+=1,this.gameState.notify("toast",{text:"🌴 Cây cọ đổ xuống! Gỗ và lá đã rơi ra.",type:"info"}),this.currentTarget=null,this.targetData=null,this.resetHintUI())}else if(s.type==="rock"){this.soundManager.playMine();const o=n&&n.id==="pickaxe"?55:n&&n.id==="axe"?40:25;this.foliageManager.damageRock(s,o)&&(this.gameState.notify("toast",{text:"🪨 Mỏm đá vỡ vụn! Bạn nhận được đá thô.",type:"info"}),this.currentTarget=null,this.targetData=null,this.resetHintUI())}else if(s.type==="pickup")this.gameState.addItem(s.itemId,s.count||1)?(this.soundManager.playPickup(),this.gameState.notify("toast",{text:`+${s.count||1} ${s.name}`,type:"success"}),this.foliageManager.removePickup(s),this.currentTarget=null,this.targetData=null,this.resetHintUI()):this.gameState.notify("toast",{text:"🎒 Túi đồ đã đầy!",type:"warn"});else if(s.type==="freshwater_pool")this.soundManager.playDrink(),this.gameState.drinkFreshwater(),this.gameState.notify("toast",{text:"💧 Đã uống nước suối mát lạnh (+40 Nước)",type:"info"});else if(s.category==="wildlife"||s.type==="boar"||s.type==="shark"){const o=this.wildlifeManager.damageEntity(s,i);o&&o.killed&&(this.gameState.stats.animalsHunted+=1,this.gameState.notify("toast",{text:`⚔️ Bạn đã hạ gục ${s.name}! Vật phẩm đã rơi ra.`,type:"success"}),this.currentTarget=null,this.targetData=null,this.resetHintUI())}else s.type==="chest"?s.isOpened?this.gameState.notify("toast",{text:"Rương này đã được mở rồi.",type:"info"}):(s.isOpened=!0,this.soundManager.playVictory(),this.gameState.addItem("scrap_metal",4),s.hint="Rương báu xác tàu đã mở",this.gameState.notify("toast",{text:"💎 Đã mở Rương Xác Tàu: Nhận +4 Sắt Vụn!",type:"success"})):s.type==="campfire"?this.gameState.getItemCount("raw_meat")>0?(this.gameState.removeItem("raw_meat",1),this.gameState.addItem("cooked_meat",1),this.soundManager.playEat(),this.gameState.notify("toast",{text:"🍖 Nướng thành công: +1 Thịt Nướng thơm ngon!",type:"success"})):this.gameState.getItemCount("raw_fish")>0?(this.gameState.removeItem("raw_fish",1),this.gameState.addItem("cooked_fish",1),this.soundManager.playEat(),this.gameState.notify("toast",{text:"🍱 Nướng thành công: +1 Cá Nướng béo ngậy!",type:"success"})):(this.gameState.player.isWarm=!0,this.gameState.notify("toast",{text:"🔥 Ngọn lửa trại ấm áp sưởi ấm cơ thể bạn.",type:"info"})):s.type==="shelter"?(this.gameState.sleep(),this.gameState.player.respawnPos={x:t.position.x,y:t.position.y,z:t.position.z},this.gameState.notify("toast",{text:"🛖 Đã ngủ qua đêm đến bình minh 06:00! Máu và thể lực đã hồi phục.",type:"success"})):s.type==="workbench"?(this.gameState.isNearWorkbench=!0,this.gameState.notify("openWorkbench")):s.type==="beacon"&&(this.gameState.getItemCount("torch")>0||n&&n.id==="torch"?(this.structuresManager.igniteBeacon(s),this.gameState.updateQuestObjective("ignite_beacon","ignited",1),this.gameState.notify("toast",{text:"🗼 ĐÀI HIỆU ĐÃ ĐƯỢC THẮP SÁNG! TÀU CỨU HỘ ĐANG TỚI!",type:"success"}),e&&e()):this.gameState.notify("toast",{text:"🔥 Bạn cần cầm theo Đuốc Lửa để thắp sáng Đài Hiệu!",type:"warn"}))}handleFishing(t){const e=this.gameState.getActiveItemDef();if(!e||e.id!=="fishing_rod"){this.gameState.notify("toast",{text:"🎣 Bạn cần trang bị Cần Câu để câu cá!",type:"warn"});return}if(!(this.islandWorld.getHeightAt(t.position.x,t.position.z)<.6||t.position.distanceTo(new b(0,1.45,0))<12)){this.gameState.notify("toast",{text:"🌊 Bạn cần đứng sát mép biển hoặc suối nước ngọt để câu cá!",type:"warn"});return}t.triggerSwing(),this.soundManager.playSplash(),this.gameState.notify("toast",{text:"🎣 Đang thả mồi câu cá... Hãy kiên nhẫn...",type:"info"}),setTimeout(()=>{this.soundManager.playFishBite(),this.gameState.addItem("raw_fish",1),this.gameState.stats.fishCaught+=1,this.gameState.notify("toast",{text:"🐟 Cắn câu rồi! Bạn đã bắt được 1 Con Cá Tươi!",type:"success"})},1800)}}class zp{constructor(t,e){this.canvas=t,this.ctx=t.getContext("2d"),this.islandWorld=e,this.width=t.width||130,this.height=t.height||130,this.cx=this.width/2,this.cy=this.height/2,this.radius=this.width/2-4,this.zoom=1.1,this.radarAngle=0,this.coordsEl=document.getElementById("minimap-coords"),this.northEl=document.getElementById("minimap-north"),this.islandCanvas=null,this.islandSize=320,this.islandResolution=256,this.initIslandMap()}initIslandMap(){this.islandCanvas=document.createElement("canvas"),this.islandCanvas.width=this.islandResolution,this.islandCanvas.height=this.islandResolution;const t=this.islandCanvas.getContext("2d"),e=this.islandResolution,n=this.islandSize/2,i=t.createImageData(e,e),s=i.data;for(let o=0;o<e;o++)for(let a=0;a<e;a++){const c=a/e*this.islandSize-n,l=o/e*this.islandSize-n,h=this.islandWorld.getHeightAt(c,l),u=(o*e+a)*4;h<0?h<-2?(s[u]=12,s[u+1]=45,s[u+2]=85,s[u+3]=255):(s[u]=22,s[u+1]=95,s[u+2]=135,s[u+3]=255):h<.8?(s[u]=210,s[u+1]=185,s[u+2]=130,s[u+3]=255):h<3.2?(s[u]=45,s[u+1]=125,s[u+2]=55,s[u+3]=255):(s[u]=95,s[u+1]=105,s[u+2]=115,s[u+3]=255),Math.hypot(c,l)<6.5&&(s[u]=56,s[u+1]=189,s[u+2]=248,s[u+3]=255)}t.putImageData(i,0,0)}update(t,e,n){if(!this.ctx||!t)return;const i=this.ctx,s=t.position.x,o=t.position.z,a=t.rotationY;if(this.coordsEl&&(this.coordsEl.innerText=`X: ${Math.round(s)} | Z: ${Math.round(o)}`),i.clearRect(0,0,this.width,this.height),i.save(),i.beginPath(),i.arc(this.cx,this.cy,this.radius,0,Math.PI*2),i.clip(),i.fillStyle="#0c2d48",i.fillRect(0,0,this.width,this.height),this.islandCanvas){i.save(),i.translate(this.cx,this.cy);const m=this.islandResolution/this.islandSize*(1/this.zoom),g=this.islandSize*m,_=(-this.islandSize/2-s)*m,d=(-this.islandSize/2-o)*m;i.drawImage(this.islandCanvas,_,d,g,g),i.restore()}const c=(m,g)=>{const _=(m-s)*(1/this.zoom),d=(g-o)*(1/this.zoom);return{x:this.cx+_,y:this.cy+d,inBounds:Math.hypot(_,d)<=this.radius-2}},l=c(0,0);l.inBounds&&(i.fillStyle="#38bdf8",i.beginPath(),i.arc(l.x,l.y,4,0,Math.PI*2),i.fill());const h=c(120,-95);h.inBounds&&(i.fillStyle="#f59e0b",i.beginPath(),i.arc(h.x,h.y,4,0,Math.PI*2),i.fill(),i.strokeStyle="#fff",i.lineWidth=1,i.stroke()),n&&n.structures&&n.structures.forEach(m=>{const g=c(m.position.x,m.position.z);g.inBounds&&(i.beginPath(),m.type==="campfire"?(i.fillStyle="#ef4444",i.arc(g.x,g.y,3.5,0,Math.PI*2)):m.type==="shelter"?(i.fillStyle="#10b981",i.arc(g.x,g.y,4,0,Math.PI*2)):m.type==="workbench"?(i.fillStyle="#8b5cf6",i.arc(g.x,g.y,3.5,0,Math.PI*2)):m.type==="beacon"&&(i.fillStyle=m.isLit?"#fbbf24":"#64748b",i.arc(g.x,g.y,5,0,Math.PI*2)),i.fill())}),e&&(e.landAnimals&&e.landAnimals.forEach(m=>{const g=c(m.group.position.x,m.group.position.z);g.inBounds&&(i.beginPath(),i.arc(g.x,g.y,2.5,0,Math.PI*2),i.fillStyle=m.state==="charge"?"#ef4444":m.isPassive?"#a3e635":"#fbbf24",i.fill())}),e.seaAnimals&&e.seaAnimals.forEach(m=>{const g=c(m.group.position.x,m.group.position.z);g.inBounds&&(i.beginPath(),i.arc(g.x,g.y,m.type==="shark"?3.5:2.5,0,Math.PI*2),i.fillStyle=m.type==="shark"?m.state==="charge"?"#dc2626":"#f97316":"#38bdf8",i.fill())})),this.radarAngle+=.035,i.save(),i.translate(this.cx,this.cy),i.rotate(this.radarAngle);const u=i.createLinearGradient(0,0,this.radius,0);u.addColorStop(0,"rgba(56, 189, 248, 0.25)"),u.addColorStop(1,"rgba(56, 189, 248, 0.0)"),i.fillStyle=u,i.beginPath(),i.moveTo(0,0),i.arc(0,0,this.radius,0,.45),i.lineTo(0,0),i.fill(),i.restore(),i.save(),i.translate(this.cx,this.cy);const p=-a-Math.PI/2;i.beginPath(),i.moveTo(0,0),i.arc(0,0,24,p-.45,p+.45),i.lineTo(0,0),i.fillStyle="rgba(56, 189, 248, 0.35)",i.fill(),i.rotate(p),i.beginPath(),i.moveTo(7,0),i.lineTo(-4,-4),i.lineTo(-2,0),i.lineTo(-4,4),i.closePath(),i.fillStyle="#38bdf8",i.fill(),i.strokeStyle="#ffffff",i.lineWidth=1,i.stroke(),i.restore(),i.restore(),i.beginPath(),i.arc(this.cx,this.cy,this.radius,0,Math.PI*2),i.strokeStyle="rgba(56, 189, 248, 0.5)",i.lineWidth=2,i.stroke(),i.beginPath(),i.arc(this.cx,this.cy,this.radius*.5,0,Math.PI*2),i.strokeStyle="rgba(255, 255, 255, 0.12)",i.lineWidth=1,i.stroke(),i.fillStyle="#38bdf8",i.font="bold 10px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("N",this.cx,9)}}class Hp{constructor(){this.container=document.getElementById("canvas-container"),this.clock=new Pp,this.isPlaying=!1,this.isPaused=!1,this.selectedInvSlot=null,this.isCutsceneActive=!1,this.cutsceneTimer=0,this.cutsceneVictoryPlayed=!1,this.initThree(),this.initSystems(),this.initUI(),this.initCharacterPreview(),this.checkSavedGame(),window.addEventListener("resize",()=>this.onWindowResize()),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}initThree(){this.scene=new pa,this.camera=new be(70,window.innerWidth/window.innerHeight,.1,800),this.renderer=new fa({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ba,this.renderer.toneMapping=Ca,this.renderer.toneMappingExposure=1.1,this.container.appendChild(this.renderer.domElement)}initSystems(){this.islandWorld=new Np(this.scene),this.foliageManager=new Fp(this.scene,this.islandWorld),this.structuresManager=new Bp(this.scene,this.islandWorld,xe),this.wildlifeManager=new Op(this.scene,this.islandWorld,this.foliageManager,xe),this.player=new Ea(this.scene,this.camera,this.islandWorld,it.player.gender),this.player.position.copy(it.player.respawnPos),this.player.position.y=this.islandWorld.getHeightAt(this.player.position.x,this.player.position.z)+.1,this.interactionSystem=new Gp(this.camera,this.islandWorld,this.foliageManager,this.wildlifeManager,this.structuresManager,it,xe),this.inputManager=new kp(this.renderer.domElement,(e,n)=>{this.handleGameAction(e,n)});const t=document.getElementById("minimap-canvas");t&&(this.minimap=new zp(t,this.islandWorld)),setInterval(()=>{this.isPlaying&&!this.isPaused&&!this.isCutsceneActive&&hi.saveGame(it,this.structuresManager.structures)},25e3)}handleGameAction(t,e){!this.isPlaying||this.isCutsceneActive||(t==="interact"||t==="attack"?(xe.ensureContext(),this.interactionSystem.handleInteract(this.player,()=>this.startRescueCutscene())):t==="fish"?(xe.ensureContext(),this.interactionSystem.handleFishing(this.player)):t==="toggleInventory"?this.toggleInventory():t==="toggleView"?(this.player.toggleViewMode(),this.showToast(`Góc nhìn: ${this.player.viewMode==="first_person"?"Thứ nhất (1st)":"Thứ ba (3rd)"}`)):t==="toggleQuests"?this.toggleQuestsPanel():t==="pause"?this.toggleSettingsModal():t==="hotbarSelect"?it.setActiveHotbarIndex(e):t==="toast"&&this.showToast(e.text,e.type))}initCharacterPreview(){const t=document.getElementById("char-preview-canvas");if(!t)return;const e=t.clientWidth||180,n=t.clientHeight||220;this.previewScene=new pa,this.previewCamera=new be(48,e/n,.1,50),this.previewCamera.position.set(0,1.25,2.7),this.previewCamera.lookAt(0,.95,0),this.previewRenderer=new fa({canvas:t,alpha:!0,antialias:!0}),this.previewRenderer.setSize(e,n,!1),this.previewRenderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=new rc(16775917,1.4);i.position.set(2,3,2),this.previewScene.add(i);const s=new oc(14676223,.7);this.previewScene.add(s);const o=new As(16096779,1.2,5);o.position.set(0,.1,.8),this.previewScene.add(o);const a=new Kt(.85,.95,.18,16),c=new nt({color:4674921,roughness:.9,flatShading:!0}),l=new D(a,c);l.position.set(0,-.09,0),this.previewScene.add(l),this.previewPlayer=new Ea(this.previewScene,this.previewCamera,this.islandWorld,it.player.gender),this.previewPlayer.viewMode="third_person",this.previewPlayer.updateViewMode(),this.previewPlayer.position.set(0,0,0)}updateCharacterPreview(t){this.previewPlayer&&this.previewRenderer&&(this.previewPlayer.modelGroup.rotation.y+=t*.8,this.previewPlayer.bones.pelvis&&(this.previewPlayer.bones.pelvis.position.y=.95+Math.sin(Date.now()*.003)*.02),this.previewRenderer.render(this.previewScene,this.previewCamera))}initUI(){var a,c,l,h,u,p,m,g,_,d,f,S,E,v;const t=document.getElementById("gender-male-btn"),e=document.getElementById("gender-female-btn");t==null||t.addEventListener("click",()=>{var L;t.classList.add("active"),e.classList.remove("active"),it.player.gender="male",this.player.setGender("male"),(L=this.previewPlayer)==null||L.setGender("male")}),e==null||e.addEventListener("click",()=>{var L;e.classList.add("active"),t.classList.remove("active"),it.player.gender="female",this.player.setGender("female"),(L=this.previewPlayer)==null||L.setGender("female")}),(a=document.getElementById("btn-start-game"))==null||a.addEventListener("click",()=>{this.startGame(!1)}),(c=document.getElementById("btn-continue-game"))==null||c.addEventListener("click",()=>{this.startGame(!0)}),(l=document.getElementById("quests-header"))==null||l.addEventListener("click",()=>{this.toggleQuestsPanel()}),(h=document.getElementById("btn-close-inventory"))==null||h.addEventListener("click",()=>{this.toggleInventory(!1)}),(u=document.getElementById("btn-close-settings"))==null||u.addEventListener("click",()=>{this.toggleSettingsModal(!1)}),(p=document.getElementById("btn-open-settings"))==null||p.addEventListener("click",()=>{this.toggleSettingsModal(!0)}),(m=document.getElementById("btn-resume-game"))==null||m.addEventListener("click",()=>{this.toggleSettingsModal(!1)}),(g=document.getElementById("btn-save-quit"))==null||g.addEventListener("click",()=>{hi.saveGame(it,this.structuresManager.structures),location.reload()}),(_=document.getElementById("btn-skip-cutscene"))==null||_.addEventListener("click",()=>{this.endRescueCutscene()});const n=document.getElementById("tab-backpack"),i=document.getElementById("tab-crafting"),s=document.getElementById("view-backpack"),o=document.getElementById("view-crafting");n==null||n.addEventListener("click",()=>{n.classList.add("active"),i.classList.remove("active"),s.style.display="grid",o.style.display="none",this.renderInventory()}),i==null||i.addEventListener("click",()=>{i.classList.add("active"),n.classList.remove("active"),s.style.display="none",o.style.display="grid",this.renderCrafting()}),(d=document.getElementById("btn-item-use"))==null||d.addEventListener("click",()=>{this.selectedInvSlot!==null&&it.useSlot(this.selectedInvSlot)&&(xe.playEat(),this.renderInventory(),this.updateItemDetail(this.selectedInvSlot))}),(f=document.getElementById("btn-item-build"))==null||f.addEventListener("click",()=>{this.selectedInvSlot!==null&&this.buildHeldStructure(this.selectedInvSlot)}),(S=document.getElementById("btn-respawn"))==null||S.addEventListener("click",()=>{this.respawnPlayer()}),(E=document.getElementById("btn-continue-freeplay"))==null||E.addEventListener("click",()=>{document.getElementById("screen-victory").style.display="none",this.isPaused=!1,document.getElementById("hud-overlay").style.display="flex"}),(v=document.getElementById("btn-restart-game"))==null||v.addEventListener("click",()=>{hi.clearSave(),location.reload()}),this.bindSettingsControls(),it.subscribe((L,C)=>{L==="hotbarChange"?(this.player.setEquippedItem(it.getActiveItemDef()),this.renderHotbar()):L==="inventoryUpdate"?(this.renderHotbar(),this.renderInventory(),this.renderCrafting()):L==="toast"?this.showToast(C.text,C.type):L==="questCompleted"?(this.showToast(`⭐ HOÀN THÀNH NHIỆM VỤ: ${C.title}!`,"success"),xe.playCraft(),this.renderQuests()):L==="questUpdated"?this.renderQuests():L==="newDay"?this.showToast(`🌅 Bình minh Ngày ${C}! Một ngày sinh tồn mới bắt đầu.`,"info"):L==="openWorkbench"&&(this.toggleInventory(!0),i.click())}),this.renderHotbar(),this.renderQuests()}bindSettingsControls(){const t=document.getElementById("setting-graphics"),e=document.getElementById("setting-control-mode"),n=document.getElementById("setting-vol-master"),i=document.getElementById("setting-vol-sfx"),s=document.getElementById("setting-vol-ambient"),o=document.getElementById("setting-sens-mouse"),a=document.getElementById("setting-sens-touch");t==null||t.addEventListener("change",c=>{const l=c.target.value;l==="low"?(this.renderer.setPixelRatio(1),this.renderer.shadowMap.enabled=!1):l==="balanced"?(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),this.renderer.shadowMap.enabled=!0):(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.shadowMap.enabled=!0)}),e==null||e.addEventListener("change",c=>{this.inputManager.setControlMode(c.target.value)}),n==null||n.addEventListener("input",c=>{xe.setMasterVolume(c.target.value/100)}),i==null||i.addEventListener("input",c=>{xe.setSfxVolume(c.target.value/100)}),s==null||s.addEventListener("input",c=>{xe.setAmbientVolume(c.target.value/100)}),o==null||o.addEventListener("input",c=>{this.inputManager.mouseSensitivity=c.target.value/10*.0022}),a==null||a.addEventListener("input",c=>{this.inputManager.touchSensitivity=c.target.value/10*.0035})}checkSavedGame(){if(hi.hasSave()){const t=document.getElementById("btn-continue-game");t&&(t.style.display="inline-block")}}startGame(t=!1){if(xe.init(),t){const e=hi.loadGame(it);e&&e.length>0&&e.forEach(n=>{this.structuresManager.buildStructure(n.type,new b(n.x,n.y,n.z),n.rotationY)}),this.player.position.set(it.player.currentPos.x,it.player.currentPos.y,it.player.currentPos.z)}document.getElementById("screen-start").style.display="none",document.getElementById("hud-overlay").style.display="flex",this.isPlaying=!0,this.isPaused=!1,this.player.setEquippedItem(it.getActiveItemDef()),this.showToast("🏝️ Chào mừng đến với Kỷ Nguyên Đồ Đá! Hãy bắt đầu nhặt cành gỗ và đá cuội.","info")}buildHeldStructure(t){const e=it.inventory[t];if(!e)return;const n=dn[e.id];if(!n||n.type!=="buildable")return;const i=new b(0,0,-1).applyAxisAngle(new b(0,1,0),this.player.rotationY),s=this.player.position.clone().addScaledVector(i,2.5);if(s.y=this.islandWorld.getHeightAt(s.x,s.z),s.y<.2){this.showToast("⚠️ Bạn không thể xây dựng công trình dưới biển!","warn");return}this.structuresManager.buildStructure(n.buildType,s,this.player.rotationY)&&(it.removeItem(e.id,1),it.stats.structuresBuilt+=1,n.buildType==="campfire"&&it.updateQuestObjective("build_base","campfire",1),n.buildType==="shelter"&&it.updateQuestObjective("build_base","shelter",1),this.showToast(`Đã xây dựng thành công: ${n.name}!`,"success"),this.toggleInventory(!1),hi.saveGame(it,this.structuresManager.structures))}toggleInventory(t){const e=document.getElementById("modal-inventory"),n=e.style.display!=="none",i=t!==void 0?t:!n;e.style.display=i?"flex":"none",this.isPaused=i,i&&(document.exitPointerLock&&document.exitPointerLock(),this.renderInventory(),this.renderCrafting())}toggleQuestsPanel(){const t=document.getElementById("quests-container"),e=document.getElementById("quests-toggle-icon");t&&(t.classList.toggle("collapsed"),e&&(e.innerText=t.classList.contains("collapsed")?"▼":"▲"))}toggleSettingsModal(t){const e=document.getElementById("modal-settings"),n=e.style.display!=="none",i=t!==void 0?t:!n;e.style.display=i?"flex":"none",this.isPaused=i}renderHotbar(){const t=document.getElementById("hotbar");if(t){t.innerHTML="";for(let e=0;e<6;e++){const n=it.inventory[e],i=n?dn[n.id]:null,s=document.createElement("div");s.className=`hotbar-slot ${e===it.activeHotbarIndex?"active":""}`,s.innerHTML=`
        <span class="slot-key">${e+1}</span>
        <span class="slot-icon">${i?i.icon:""}</span>
        ${n&&n.count>1?`<span class="slot-count">${n.count}</span>`:""}
      `,s.addEventListener("click",()=>{it.setActiveHotbarIndex(e)}),t.appendChild(s)}}}renderInventory(){const t=document.getElementById("inv-grid-hotbar"),e=document.getElementById("inv-grid-backpack");if(!(!t||!e)){t.innerHTML="",e.innerHTML="";for(let n=0;n<24;n++){const i=it.inventory[n],s=i?dn[i.id]:null,o=document.createElement("div");o.className=`hotbar-slot ${this.selectedInvSlot===n?"active":""}`,o.innerHTML=`
        <span class="slot-icon">${s?s.icon:""}</span>
        ${i&&i.count>1?`<span class="slot-count">${i.count}</span>`:""}
      `,o.addEventListener("click",()=>{this.selectedInvSlot=n,this.renderInventory(),this.updateItemDetail(n)}),n<6?t.appendChild(o):e.appendChild(o)}}}updateItemDetail(t){const e=it.inventory[t],n=e?dn[e.id]:null,i=document.getElementById("item-detail-icon"),s=document.getElementById("item-detail-name"),o=document.getElementById("item-detail-desc"),a=document.getElementById("btn-item-use"),c=document.getElementById("btn-item-build");if(!n){i.innerText="🎒",s.innerText="Ô Trống",o.innerText="Không có vật phẩm nào trong ô này.",a.disabled=!0,c.style.display="none";return}i.innerText=n.icon,s.innerText=`${n.name} ${e.count>1?`(x${e.count})`:""}`,o.innerText=n.description,n.consumable?(a.disabled=!1,a.style.display="block",a.innerText="SỬ DỤNG / ĂN",c.style.display="none"):n.type==="buildable"?(a.style.display="none",c.style.display="block"):(a.disabled=!0,a.style.display="block",a.innerText="ĐÃ TRANG BỊ",c.style.display="none")}renderCrafting(){const t=document.getElementById("crafting-recipe-list");t&&(t.innerHTML="",Dp.forEach(e=>{var c;const n=dn[e.resultId],i=it.canCraft(e);let s=Object.entries(e.req).map(([l,h])=>{var u;return`${((u=dn[l])==null?void 0:u.name)||l}: ${it.getItemCount(l)}/${h}`}).join(" | ");const o=e.requiresWorkbench?it.isNearWorkbench?' • <span style="color:#10b981;">(Đã ở gần Bàn Cơ Khí)</span>':' • <span style="color:#f87171;">(Cần Bàn Cơ Khí)</span>':"",a=document.createElement("div");a.className=`recipe-item ${i?"":"disabled"}`,a.innerHTML=`
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">${(n==null?void 0:n.icon)||"🔨"}</span>
          <div>
            <div style="font-weight: 700; font-size: 13px;">${(n==null?void 0:n.name)||e.resultId}</div>
            <div style="font-size: 11px; color: #94a3b8;">${s}${o}</div>
          </div>
        </div>
        <button class="recipe-btn" ${i?"":"disabled"}>Chế tạo</button>
      `,(c=a.querySelector("button"))==null||c.addEventListener("click",l=>{l.stopPropagation(),it.craft(e)&&(xe.playCraft(),this.showToast(`Đã chế tạo thành công: ${n.name}!`,"success"),this.renderCrafting(),this.renderInventory())}),t.appendChild(a)}))}renderQuests(){const t=document.getElementById("quest-list");t&&(t.innerHTML="",it.quests.forEach(e=>{const n=document.createElement("div");n.className=`quest-item ${e.completed?"completed":""}`,n.innerHTML=`
        <span class="quest-check">${e.completed?"✅":"⬜"}</span>
        <div>
          <div style="font-weight: 700;">${e.title}</div>
          <div style="font-size: 11px; opacity: 0.85;">${e.desc}</div>
        </div>
      `,t.appendChild(n)}))}updateHUD(){const t=document.getElementById("compass-tape"),e=document.getElementById("shipwreck-dist-text"),i=(An.radToDeg(this.player.rotationY)%360+360)%360,s=["N","NE","E","SE","S","SW","W","NW"],o=Math.round(i/45)%8;t&&(t.innerText=`• • ${s[o]} • • (${Math.round(i)}°)`);const a=Math.round(this.player.position.distanceTo(new b(120,-1.2,-95)));e&&(e.innerText=`${a}m`);const c=document.getElementById("day-badge"),l=document.getElementById("time-badge"),h=it.dayTime*24,u=Math.floor(h),p=Math.floor((h-u)*60),m=it.dayTime>.75||it.dayTime<.25;if(c&&(c.innerText=`Ngày ${it.dayCount}`),l){const v=String(u).padStart(2,"0"),L=String(p).padStart(2,"0");l.innerText=`${v}:${L} ${m?"🌙":"☀️"}`}const g=(v,L,C)=>{const A=document.getElementById(`bar-${v}`),P=document.getElementById(`val-${v}`),w=Math.max(0,Math.min(100,L/C*100));A&&(A.style.width=`${w}%`),P&&(P.innerText=Math.round(L))};g("health",it.player.health,it.player.maxHealth),g("stamina",it.player.stamina,it.player.maxStamina),g("food",it.player.food,it.player.maxFood),g("water",it.player.water,it.player.maxWater);const _=document.getElementById("oxygen-row");_&&(_.style.display=it.player.isUnderwater?"flex":"none",it.player.isUnderwater&&g("oxygen",it.player.oxygen,it.player.maxOxygen));const d=document.getElementById("temp-badge");d&&(it.player.isFreezing?(d.className="temp-cold",d.innerText="❄️ Đang Bị Lạnh Giá!"):it.player.isWarm?(d.className="temp-warm",d.innerText="🔥 Ấm Áp"):(d.className="temp-warm",d.innerText="☀️ Thân Nhiệt Ổn Định"));const f=document.getElementById("frost-overlay");f&&f.classList.toggle("active",it.player.isFreezing);const S=document.getElementById("warmth-overlay");S&&S.classList.toggle("active",it.player.isWarm&&!it.player.isFreezing);const E=document.getElementById("underwater-overlay");E&&E.classList.toggle("active",it.player.isUnderwater),this.islandWorld.setUnderwaterMode(it.player.isUnderwater),it.player.health<=0&&this.isPlaying&&this.triggerGameOver("Bạn đã gục ngã vì kiệt sức hoặc bị thú dữ tấn công!")}showToast(t,e="info"){const n=document.getElementById("toast-container");if(!n)return;const i=document.createElement("div");i.className=`toast ${e}`,i.innerText=t,n.appendChild(i),setTimeout(()=>{i.parentNode&&i.parentNode.removeChild(i)},3200)}onPlayerDamage(t,e){it.player.health=Math.max(0,it.player.health-t),xe.playPlayerHurt();const n=document.getElementById("hud-overlay");n&&(n.style.boxShadow="inset 0 0 80px rgba(239, 68, 68, 0.7)",setTimeout(()=>{n.style.boxShadow="none"},350)),this.showToast(`⚠️ -${t} Máu! ${e}`,"warn"),it.player.health<=0&&this.triggerGameOver(e)}triggerGameOver(t){this.isPlaying=!1,xe.playGameOver(),document.getElementById("hud-overlay").style.display="none";const e=document.getElementById("screen-gameover");e&&(e.style.display="flex",document.getElementById("gameover-reason").innerText=t,document.getElementById("go-stat-days").innerText=`${it.stats.daysSurvived} Ngày`,document.getElementById("go-stat-hunts").innerText=`${it.stats.animalsHunted} Con`,document.getElementById("go-stat-trees").innerText=`${it.stats.treesChopped} Cây`)}respawnPlayer(){it.player.health=80,it.player.food=60,it.player.water=60,it.player.stamina=100,this.player.position.set(it.player.respawnPos.x,it.player.respawnPos.y,it.player.respawnPos.z),document.getElementById("screen-gameover").style.display="none",document.getElementById("hud-overlay").style.display="flex",this.isPlaying=!0,this.showToast("🔄 Bạn đã hồi sinh an toàn! Hãy tiếp tục sinh tồn.","success")}startRescueCutscene(){if(this.isCutsceneActive)return;this.isCutsceneActive=!0,this.cutsceneTimer=0,this.cutsceneVictoryPlayed=!1,document.getElementById("hud-overlay").style.display="none";const t=document.getElementById("cutscene-container");t&&(t.style.display="flex"),this.islandWorld.startRescueShipCutscene(this.player.position),xe.playShipFoghorn()}updateRescueCutscene(t){this.cutsceneTimer+=t,this.islandWorld.update(t,it.dayTime,this.player.position),this.structuresManager.update(t,this.player.position);const n=(this.structuresManager.structures.find(o=>o.type==="beacon"&&o.isLit)||{position:this.player.position}).position,i=this.islandWorld.rescueShip,s=i?i.position:this.player.position;if(this.cutsceneTimer<3.5){const o=this.cutsceneTimer*.5;this.camera.position.set(n.x+Math.cos(o)*14,n.y+6+Math.sin(this.cutsceneTimer*.4)*2,n.z+Math.sin(o)*14),this.camera.lookAt(n.x,n.y+4.5,n.z)}else if(this.cutsceneTimer<9.5){const o=new b(s.x+18,9,s.z+18);this.camera.position.lerp(o,.08),this.camera.lookAt(s.x,s.y+3,s.z)}else this.cutsceneTimer<11.5?(this.cutsceneVictoryPlayed||(this.cutsceneVictoryPlayed=!0,xe.playVictory()),this.camera.position.set(n.x+12,n.y+4,n.z+10),this.camera.lookAt(s.x,s.y+3,s.z)):this.endRescueCutscene()}endRescueCutscene(){this.isCutsceneActive=!1;const t=document.getElementById("cutscene-container");t&&(t.style.display="none"),this.showVictoryScreen()}showVictoryScreen(){this.isPaused=!0,xe.playVictory();const t=document.getElementById("screen-victory");t&&(t.style.display="flex",document.getElementById("vic-stat-days").innerText=`${it.stats.daysSurvived} Ngày`,document.getElementById("vic-stat-hunts").innerText=`${it.stats.animalsHunted} Con`,document.getElementById("vic-stat-structs").innerText=`${it.stats.structuresBuilt} Công Trình`,document.getElementById("vic-stat-fish").innerText=`${it.stats.fishCaught} Con Cá`)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.1);if(this.previewPlayer&&this.updateCharacterPreview(t),this.isCutsceneActive){this.updateRescueCutscene(t),this.renderer.render(this.scene,this.camera);return}if(!this.isPlaying||this.isPaused)return;const e=this.inputManager.getFrameInput();this.player.addRotation(e.deltaYaw,e.deltaPitch);const n=this.structuresManager.isPlayerNearCampfire(this.player.position);it.player.isWarm=n,it.player.currentPos={x:this.player.position.x,y:this.player.position.y,z:this.player.position.z},it.player.isUnderwater=this.player.isUnderwater;const i=this.structuresManager.structures.some(s=>s.type==="workbench"&&s.position.distanceTo(this.player.position)<4);it.isNearWorkbench=i,it.tick(t),this.player.update(t,e.move,e.isSprint,e.isJump,e.isCrouch,xe),this.islandWorld.update(t,it.dayTime,this.player.position),this.foliageManager.update(t),this.structuresManager.update(t,this.player.position),this.wildlifeManager.update(t,this.player,(s,o)=>this.onPlayerDamage(s,o)),this.interactionSystem.update(this.player),this.minimap&&this.minimap.update(this.player,this.wildlifeManager,this.structuresManager),this.updateHUD(),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new Hp});
