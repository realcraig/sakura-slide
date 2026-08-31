(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=`attached`,r=1e3,i=1001,a=1002,o=1003,s=1004,c=1005,l=1006,u=1007,d=1008,f=1009,p=1010,m=1011,h=1012,g=1013,_=1014,v=1015,y=1016,b=1017,x=1018,S=1020,C=35902,w=35899,T=1021,E=1022,D=1023,O=1026,k=1027,A=1028,j=1029,M=1030,N=1031,ee=1033,P=33776,F=33777,te=33778,ne=33779,re=35840,ie=35841,ae=35842,oe=35843,se=36196,I=37492,ce=37496,le=37488,ue=37489,de=37490,fe=37491,pe=37808,L=37809,R=37810,me=37811,he=37812,ge=37813,_e=37814,ve=37815,ye=37816,be=37817,xe=37818,Se=37819,Ce=37820,we=37821,Te=36492,Ee=36494,De=36495,Oe=36283,ke=36284,z=36285,Ae=36286,je=2201,Me=2202,B=2300,Ne=2301,V=2302,Pe=2303,Fe=2400,Ie=2401,Le=2402,Re=2500,ze=2501,Be=3200,Ve=`srgb`,He=`srgb-linear`,Ue=`linear`,We=`srgb`,Ge=7680,Ke=35044,qe=35048,Je=2e3;function Ye(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Xe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ze(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Qe(){let e=Ze(`canvas`);return e.style.display=`block`,e}var $e={};function et(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function tt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function H(...e){e=tt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function U(...e){e=tt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function nt(...e){let t=e.join(` `);t in $e||($e[t]=!0,H(...e))}function rt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var it={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},at=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ot=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),st=1234567,ct=Math.PI/180,lt=180/Math.PI;function ut(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ot[e&255]+ot[e>>8&255]+ot[e>>16&255]+ot[e>>24&255]+`-`+ot[t&255]+ot[t>>8&255]+`-`+ot[t>>16&15|64]+ot[t>>24&255]+`-`+ot[n&63|128]+ot[n>>8&255]+`-`+ot[n>>16&255]+ot[n>>24&255]+ot[r&255]+ot[r>>8&255]+ot[r>>16&255]+ot[r>>24&255]).toLowerCase()}function W(e,t,n){return Math.max(t,Math.min(n,e))}function dt(e,t){return(e%t+t)%t}function ft(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function pt(e,t,n){return e===t?0:(n-e)/(t-e)}function mt(e,t,n){return(1-n)*e+n*t}function ht(e,t,n,r){return mt(e,t,1-Math.exp(-n*r))}function gt(e,t=1){return t-Math.abs(dt(e,t*2)-t)}function _t(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function yt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function bt(e,t){return e+Math.random()*(t-e)}function xt(e){return e*(.5-Math.random())}function St(e){e!==void 0&&(st=e);let t=st+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ct(e){return e*ct}function wt(e){return e*lt}function Tt(e){return!(e&e-1)&&e!==0}function Et(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Dt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ot(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:H(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function kt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var G={DEG2RAD:ct,RAD2DEG:lt,generateUUID:ut,clamp:W,euclideanModulo:dt,mapLinear:ft,inverseLerp:pt,lerp:mt,damp:ht,pingpong:gt,smoothstep:_t,smootherstep:vt,randInt:yt,randFloat:bt,randFloatSpread:xt,seededRandom:St,degToRad:Ct,radToDeg:wt,isPowerOfTwo:Tt,ceilPowerOfTwo:Et,floorPowerOfTwo:Dt,setQuaternionFromProperEuler:Ot,normalize:At,denormalize:kt},K=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:H(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(W(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mt.copy(this).projectOnVector(e),this.sub(Mt)}reflect(e){return this.sub(Mt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mt=new q,Nt=new jt,Pt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return nt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ft.makeScale(e,t)),this}rotate(e){return nt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ft.makeRotation(-e)),this}translate(e,t){return nt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ft.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ft=new Pt,It=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lt=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rt(){let e={enabled:!0,workingColorSpace:He,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Bt(e.r),e.g=Bt(e.g),e.b=Bt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ue:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return nt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return nt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[He]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:It,fromXYZ:Lt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:r,transfer:We,toXYZ:It,fromXYZ:Lt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),e}var zt=Rt();function Bt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Vt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ht,Ut=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ht===void 0&&(Ht=Ze(`canvas`)),Ht.width=e.width,Ht.height=e.height;let t=Ht.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ht}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ze(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Bt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Bt(t[e]/255)*255):t[e]=Bt(t[e]);return{data:t,width:e.width,height:e.height}}return H(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Wt=0,Gt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wt++}),this.uuid=ut(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Kt(r[t].image)):e.push(Kt(r[t]))}else e=Kt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Kt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ut.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(H(`Texture: Unable to serialize Texture.`),{})}var qt=0,Jt=new q,Yt=class e extends at{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=i,a=i,o=l,s=d,c=D,u=f,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qt++}),this.uuid=ut(),this.name=``,this.source=new Gt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=u,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jt).x}get height(){return this.source.getSize(Jt).y}get depth(){return this.source.getSize(Jt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){H(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){H(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case r:e.x-=Math.floor(e.x);break;case i:e.x=e.x<0?0:1;break;case a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case r:e.y-=Math.floor(e.y);break;case i:e.y=e.y<0?0:1;break;case a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null,Yt.DEFAULT_MAPPING=300,Yt.DEFAULT_ANISOTROPY=1;var Xt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this.w=W(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this.w=W(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zt=class extends at{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:l,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];let r=new Yt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:l,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Gt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Qt=class extends Zt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$t=class extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=o,this.minFilter=o,this.wrapR=i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},en=class extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=o,this.minFilter=o,this.wrapR=i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},J=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/tn.setFromMatrixColumn(e,0).length(),i=1/tn.setFromMatrixColumn(e,1).length(),a=1/tn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rn,e,an)}lookAt(e,t,n){let r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),on.crossVectors(n,cn),on.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),on.crossVectors(n,cn)),on.normalize(),sn.crossVectors(cn,on),r[0]=on.x,r[4]=sn.x,r[8]=cn.x,r[1]=on.y,r[5]=sn.y,r[9]=cn.y,r[2]=on.z,r[6]=sn.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],P=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=tn.set(r[0],r[1],r[2]).length(),o=tn.set(r[4],r[5],r[6]).length(),s=tn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),nn.copy(this);let c=1/a,l=1/o,u=1/s;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=l,nn.elements[5]*=l,nn.elements[6]*=l,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,t.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Je,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Je,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},tn=new q,nn=new J,rn=new q(0,0,0),an=new q(1,1,1),on=new q,sn=new q,cn=new q,ln=new J,un=new jt,dn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(W(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-W(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(W(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-W(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(W(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-W(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:H(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ln.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ln,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return un.setFromEuler(this),this.setFromQuaternion(un,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER=`XYZ`;var fn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},pn=0,mn=new q,hn=new jt,gn=new J,_n=new q,vn=new q,yn=new q,bn=new jt,xn=new q(1,0,0),Sn=new q(0,1,0),Cn=new q(0,0,1),wn={type:`added`},Tn={type:`removed`},En={type:`childadded`,child:null},Dn={type:`childremoved`,child:null},On=class e extends at{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pn++}),this.uuid=ut(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new dn,r=new jt,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new J},normalMatrix:{value:new Pt}}),this.matrix=new J,this.matrixWorld=new J,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.multiply(hn),this}rotateOnWorldAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.premultiply(hn),this}rotateX(e){return this.rotateOnAxis(xn,e)}rotateY(e){return this.rotateOnAxis(Sn,e)}rotateZ(e){return this.rotateOnAxis(Cn,e)}translateOnAxis(e,t){return mn.copy(e).applyQuaternion(this.quaternion),this.position.add(mn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xn,e)}translateY(e){return this.translateOnAxis(Sn,e)}translateZ(e){return this.translateOnAxis(Cn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_n.copy(e):_n.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(vn,_n,this.up):gn.lookAt(_n,vn,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),hn.setFromRotationMatrix(gn),this.quaternion.premultiply(hn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(U(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null):U(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,e,yn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,bn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};On.DEFAULT_UP=new q(0,1,0),On.DEFAULT_MATRIX_AUTO_UPDATE=!0,On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=class extends On{constructor(){super(),this.isGroup=!0,this.type=`Group`}},An={type:`move`},jn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(An)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Mn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Pn={h:0,s:0,l:0};function Fn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Y=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=zt.workingColorSpace){if(e=dt(e,1),t=W(t,0,1),n=W(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Fn(i,r,e+1/3),this.g=Fn(i,r,e),this.b=Fn(i,r,e-1/3)}return zt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ve){function n(t){t!==void 0&&parseFloat(t)<1&&H(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:H(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);H(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){let n=Mn[e.toLowerCase()];return n===void 0?H(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bt(e.r),this.g=Bt(e.g),this.b=Bt(e.b),this}copyLinearToSRGB(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return zt.workingToColorSpace(In.copy(this),e),Math.round(W(In.r*255,0,255))*65536+Math.round(W(In.g*255,0,255))*256+Math.round(W(In.b*255,0,255))}getHexString(e=Ve){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace(In.copy(this),t);let n=In.r,r=In.g,i=In.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Ve){zt.workingToColorSpace(In.copy(this),e);let t=In.r,n=In.g,r=In.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Pn);let n=mt(Nn.h,Pn.h,t),r=mt(Nn.s,Pn.s,t),i=mt(Nn.l,Pn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new Y;Y.NAMES=Mn;var Ln=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new Y(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rn=class extends On{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},zn=new q,Bn=new q,Vn=new q,Hn=new q,Un=new q,Wn=new q,Gn=new q,Kn=new q,qn=new q,Jn=new q,Yn=new Xt,Xn=new Xt,Zn=new Xt,Qn=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zn.subVectors(e,t),r.cross(zn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){zn.subVectors(r,t),Bn.subVectors(n,t),Vn.subVectors(e,t);let a=zn.dot(zn),o=zn.dot(Bn),s=zn.dot(Vn),c=Bn.dot(Bn),l=Bn.dot(Vn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Hn)!==null&&Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Hn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Hn.x),s.addScaledVector(a,Hn.y),s.addScaledVector(o,Hn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Yn.setScalar(0),Xn.setScalar(0),Zn.setScalar(0),Yn.fromBufferAttribute(e,t),Xn.fromBufferAttribute(e,n),Zn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Yn,i.x),a.addScaledVector(Xn,i.y),a.addScaledVector(Zn,i.z),a}static isFrontFacing(e,t,n,r){return zn.subVectors(n,t),Bn.subVectors(e,t),zn.cross(Bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),zn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Un.subVectors(r,n),Wn.subVectors(i,n),Kn.subVectors(e,n);let s=Un.dot(Kn),c=Wn.dot(Kn);if(s<=0&&c<=0)return t.copy(n);qn.subVectors(e,r);let l=Un.dot(qn),u=Wn.dot(qn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Un,a);Jn.subVectors(e,i);let f=Un.dot(Jn),p=Wn.dot(Jn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Wn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Gn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Gn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Un,a).addScaledVector(Wn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$n=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,tr):tr.fromBufferAttribute(r,t),tr.applyMatrix4(e.matrixWorld),this.expandByPoint(tr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),ur.subVectors(this.max,lr),rr.subVectors(e.a,lr),ir.subVectors(e.b,lr),ar.subVectors(e.c,lr),or.subVectors(ir,rr),sr.subVectors(ar,ir),cr.subVectors(rr,ar);let t=[0,-or.z,or.y,0,-sr.z,sr.y,0,-cr.z,cr.y,or.z,0,-or.x,sr.z,0,-sr.x,cr.z,0,-cr.x,-or.y,or.x,0,-sr.y,sr.x,0,-cr.y,cr.x,0];return!pr(t,rr,ir,ar,ur)||(t=[1,0,0,0,1,0,0,0,1],!pr(t,rr,ir,ar,ur))?!1:(dr.crossVectors(or,sr),t=[dr.x,dr.y,dr.z],pr(t,rr,ir,ar,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},er=[new q,new q,new q,new q,new q,new q,new q,new q],tr=new q,nr=new $n,rr=new q,ir=new q,ar=new q,or=new q,sr=new q,cr=new q,lr=new q,ur=new q,dr=new q,fr=new q;function pr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){fr.fromArray(e,a);let o=i.x*Math.abs(fr.x)+i.y*Math.abs(fr.y)+i.z*Math.abs(fr.z),s=t.dot(fr),c=n.dot(fr),l=r.dot(fr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var mr=new q,hr=new K,gr=0,_r=class extends at{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ke,this.updateRanges=[],this.gpuType=v,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXYZ(t,mr.x,mr.y,mr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix4(e),this.setXYZ(t,mr.x,mr.y,mr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyNormalMatrix(e),this.setXYZ(t,mr.x,mr.y,mr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.transformDirection(e),this.setXYZ(t,mr.x,mr.y,mr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kt(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kt(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kt(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},vr=class extends _r{constructor(e,t,n){super(new Uint16Array(e),t,n)}},yr=class extends _r{constructor(e,t,n){super(new Uint32Array(e),t,n)}},X=class extends _r{constructor(e,t,n){super(new Float32Array(e),t,n)}},br=new $n,xr=new q,Sr=new q,Cr=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?br.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(xr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Sr)),this.expandByPoint(xr.copy(e.center).sub(Sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wr=0,Tr=new J,Er=new On,Dr=new q,Or=new $n,kr=new $n,Ar=new q,jr=class e extends at{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wr++}),this.uuid=ut(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ye(e)?yr:vr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Pt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tr.makeRotationFromQuaternion(e),this.applyMatrix4(Tr),this}rotateX(e){return Tr.makeRotationX(e),this.applyMatrix4(Tr),this}rotateY(e){return Tr.makeRotationY(e),this.applyMatrix4(Tr),this}rotateZ(e){return Tr.makeRotationZ(e),this.applyMatrix4(Tr),this}translate(e,t,n){return Tr.makeTranslation(e,t,n),this.applyMatrix4(Tr),this}scale(e,t,n){return Tr.makeScale(e,t,n),this.applyMatrix4(Tr),this}lookAt(e){return Er.lookAt(e),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new X(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&H(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){U(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Or.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(this.boundingBox.min,Or.min),this.boundingBox.expandByPoint(Ar),Ar.addVectors(this.boundingBox.max,Or.max),this.boundingBox.expandByPoint(Ar)):(this.boundingBox.expandByPoint(Or.min),this.boundingBox.expandByPoint(Or.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&U(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){U(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);return}if(e){let n=this.boundingSphere.center;if(Or.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(Or.min,kr.min),Or.expandByPoint(Ar),Ar.addVectors(Or.max,kr.max),Or.expandByPoint(Ar)):(Or.expandByPoint(kr.min),Or.expandByPoint(kr.max))}Or.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ar.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ar));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ar.fromBufferAttribute(a,t),o&&(Dr.fromBufferAttribute(e,t),Ar.add(Dr)),r=Math.max(r,n.distanceToSquared(Ar))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&U(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){U(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new _r(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let c=new q,l=new q,u=new q,d=new K,f=new K,p=new K,m=new q,h=new q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new q,y=new q,b=new q,x=new q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new _r(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ar.fromBufferAttribute(e,t),Ar.normalize(),e.setXYZ(t,Ar.x,Ar.y,Ar.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new _r(a,r,i)}if(this.index===null)return H(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ke,this.updateRanges=[],this.version=0,this.uuid=ut()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ut()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ut()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nr=new q,Pr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix4(e),this.setXYZ(t,Nr.x,Nr.y,Nr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyNormalMatrix(e),this.setXYZ(t,Nr.x,Nr.y,Nr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.transformDirection(e),this.setXYZ(t,Nr.x,Nr.y,Nr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){et(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new _r(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){et(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fr=0,Ir=class extends at{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fr++}),this.uuid=ut(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ge,this.stencilZFail=Ge,this.stencilZPass=Ge,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){H(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){H(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Y().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new K().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Lr=new q,Rr=new q,zr=new q,Br=new q,Vr=new q,Hr=new q,Ur=new q,Wr=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Rr.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(Rr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=Br.dot(this.direction),s=-Br.dot(zr),c=Br.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Rr).addScaledVector(zr,d),f}intersectSphere(e,t){Lr.subVectors(e.center,this.origin);let n=Lr.dot(this.direction),r=Lr.dot(Lr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,n,r,i){Vr.subVectors(t,e),Hr.subVectors(n,e),Ur.crossVectors(Vr,Hr);let a=this.direction.dot(Ur),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Br.subVectors(this.origin,e);let s=o*this.direction.dot(Hr.crossVectors(Br,Hr));if(s<0)return null;let c=o*this.direction.dot(Vr.cross(Br));if(c<0||s+c>a)return null;let l=-o*Br.dot(Ur);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gr=class extends Ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Kr=new J,qr=new Wr,Jr=new Cr,Yr=new q,Xr=new q,Zr=new q,Qr=new q,$r=new q,ei=new q,ti=new q,ni=new q,Z=class extends On{constructor(e=new jr,t=new Gr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ei.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&($r.fromBufferAttribute(s,e),a?ei.addScaledVector($r,r):ei.addScaledVector($r.sub(t),r))}t.add(ei)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),qr.copy(e.ray).recast(e.near),!(Jr.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Jr,Yr)===null||qr.origin.distanceToSquared(Yr)>(e.far-e.near)**2))&&(Kr.copy(i).invert(),qr.copy(e.ray).applyMatrix4(Kr),(n.boundingBox===null||qr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ii(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ii(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ii(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ii(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function ri(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ni.copy(s),ni.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ni);return l<n.near||l>n.far?null:{distance:l,point:ni.clone(),object:e}}function ii(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Xr),e.getVertexPosition(c,Zr),e.getVertexPosition(l,Qr);let u=ri(e,t,n,r,Xr,Zr,Qr,ti);if(u){let e=new q;Qn.getBarycoord(ti,Xr,Zr,Qr,e),i&&(u.uv=Qn.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=Qn.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=Qn.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};Qn.getNormal(Xr,Zr,Qr,t.normal),u.face=t,u.barycoord=e}return u}var ai=new Xt,oi=new Xt,si=new Xt,ci=new Xt,li=new J,ui=new q,di=new Cr,fi=new J,pi=new Wr,mi=class extends Z{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=n,this.bindMatrix=new J,this.bindMatrixInverse=new J,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $n),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,ui),this.boundingBox.expandByPoint(ui)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,ui),this.boundingSphere.expandByPoint(ui)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),di.copy(this.boundingSphere),di.applyMatrix4(r),e.ray.intersectsSphere(di)!==!1&&(fi.copy(r).invert(),pi.copy(e.ray).applyMatrix4(fi),(this.boundingBox===null||pi.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,pi)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Xt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():H(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;oi.fromBufferAttribute(r.attributes.skinIndex,e),si.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(ai.copy(t),t.set(0,0,0,0)):(ai.set(...t,1),t.set(0,0,0)),ai.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=si.getComponent(e);if(r!==0){let i=oi.getComponent(e);li.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(ci.copy(ai).applyMatrix4(li),r)}}return t.isVector4&&(t.w=ai.w),t.applyMatrix4(this.bindMatrixInverse)}},hi=class extends On{constructor(){super(),this.isBone=!0,this.type=`Bone`}},gi=class extends Yt{constructor(e=null,t=1,n=1,r,i,a,s,c,l=o,u=o,d,f){super(null,a,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_i=new J,vi=new J,yi=class e{constructor(e=[],t=[]){this.uuid=ut(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){H(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new J)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new J;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:vi;_i.multiplyMatrices(i,t[r]),_i.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new gi(t,e,e,D,v);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(H(`Skeleton: No bone found with UUID:`,r),i=new hi),this.bones.push(i),this.boneInverses.push(new J().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},bi=class extends _r{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xi=new J,Si=new J,Ci=[],wi=new $n,Ti=new J,Ei=new Z,Di=new Cr,Oi=class extends Z{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ti)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),wi.copy(e.boundingBox).applyMatrix4(xi),this.boundingBox.union(wi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),Di.copy(e.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(Di)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ei.geometry=this.geometry,Ei.material=this.material,Ei.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Di.copy(this.boundingSphere),Di.applyMatrix4(n),e.ray.intersectsSphere(Di)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,xi),Si.multiplyMatrices(n,xi),Ei.matrixWorld=Si,Ei.raycast(e,Ci);for(let e=0,n=Ci.length;e<n;e++){let n=Ci[e];n.instanceId=i,n.object=this,t.push(n)}Ci.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new gi(new Float32Array(r*this.count),r,this.count,A,v));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ki=new q,Ai=new q,ji=new Pt,Mi=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ki.subVectors(n,t).cross(Ai.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ki),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ji.getNormalMatrix(e),r=this.coplanarPoint(ki).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ni=new Cr,Pi=new K(.5,.5),Fi=new q,Ii=class{constructor(e=new Mi,t=new Mi,n=new Mi,r=new Mi,i=new Mi,a=new Mi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Je,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476+Pi.distanceTo(e.center),Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Fi.x=r.normal.x>0?e.max.x:e.min.x,Fi.y=r.normal.y>0?e.max.y:e.min.y,Fi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Li=class extends Ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Y(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ri=new q,zi=new q,Bi=new J,Vi=new Wr,Hi=new Cr,Ui=new q,Wi=new q,Gi=class extends On{constructor(e=new jr,t=new Li){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ri.fromBufferAttribute(t,e-1),zi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ri.distanceTo(zi);e.setAttribute(`lineDistance`,new X(n,1))}else H(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hi.copy(n.boundingSphere),Hi.applyMatrix4(r),Hi.radius+=i,e.ray.intersectsSphere(Hi)===!1)return;Bi.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(Bi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ki(this,e,Vi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ki(this,e,Vi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ki(this,e,Vi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ki(this,e,Vi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ki(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ri.fromBufferAttribute(s,i),zi.fromBufferAttribute(s,a),n.distanceSqToSegment(Ri,zi,Ui,Wi)>r)return;Ui.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ui);if(!(c<t.near||c>t.far))return{distance:c,point:Wi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var qi=new q,Ji=new q,Yi=class extends Gi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)qi.fromBufferAttribute(t,e),Ji.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+qi.distanceTo(Ji);e.setAttribute(`lineDistance`,new X(n,1))}else H(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Xi=class extends Gi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},Zi=class extends Ir{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qi=new J,$i=new Wr,ea=new Cr,ta=new q,na=class extends On{constructor(e=new jr,t=new Zi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),ea.radius+=i,e.ray.intersectsSphere(ea)===!1)return;Qi.copy(r).invert(),$i.copy(e.ray).applyMatrix4(Qi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ta.fromBufferAttribute(l,n),ra(ta,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ta.fromBufferAttribute(l,a),ra(ta,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ra(e,t,n,r,i,a,o){let s=$i.distanceSqToPoint(e);if(s<n){let n=new q;$i.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ia=class extends Yt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},aa=class extends Yt{constructor(e,t,n=_,r,i,a,s=o,c=o,l,u=O,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},oa=class extends aa{constructor(e,t=_,n=301,r,i,a=o,s=o,c,l=O){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,a,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},sa=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ca=class e extends jr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new X(c,3)),this.setAttribute(`normal`,new X(l,3)),this.setAttribute(`uv`,new X(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},la=class e extends jr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new q,l=new K;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new X(a,3)),this.setAttribute(`normal`,new X(o,3)),this.setAttribute(`uv`,new X(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ua=class e extends jr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new X(u,3)),this.setAttribute(`normal`,new X(d,3)),this.setAttribute(`uv`,new X(f,2));function _(){let a=new q,_=new q,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new K,m=new q,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},da=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){H(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new K:new q);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new q,r=[],i=[],a=[],o=new q,s=new J;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new q)}i[0]=new q,a[0]=new q;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(W(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(W(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function fa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var pa=new q,ma=new q,ha=new fa,ga=new fa,_a=new fa,va=class extends da{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new q){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ma.subVectors(r[0],r[1]).add(r[0]),c=ma);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(pa.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=pa),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ha.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ga.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),_a.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ha.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ga.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),_a.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ha.calc(s),ga.calc(s),_a.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new q().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},ya=class e extends jr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new X(p,3)),this.setAttribute(`normal`,new X(m,3)),this.setAttribute(`uv`,new X(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ba=class e extends jr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new q,p=new K;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new X(s,3)),this.setAttribute(`normal`,new X(c,3)),this.setAttribute(`uv`,new X(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},xa=class e extends jr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new q,d=new q,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new X(p,3)),this.setAttribute(`normal`,new X(m,3)),this.setAttribute(`uv`,new X(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Sa=class e extends jr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new q,f=new q,p=new q;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new X(c,3)),this.setAttribute(`normal`,new X(l,3)),this.setAttribute(`uv`,new X(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function Ca(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ta(i))i.isRenderTargetTexture?(H(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(Ta(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function wa(e){let t={};for(let n=0;n<e.length;n++){let r=Ca(e[n]);for(let e in r)t[e]=r[e]}return t}function Ta(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ea(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Da(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}var Oa={clone:Ca,merge:wa},ka=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Aa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ja=class extends Ir{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ka,this.fragmentShader=Aa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ca(e.uniforms),this.uniformsGroups=Ea(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Y().setHex(r.value);break;case`v2`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Pt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new J().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ma=class extends ja{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Na=class extends Ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Y(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pa=class extends Na{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return W(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Y(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Y(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Y(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Fa=class extends Ir{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ia=class extends Ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Be,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},La=class extends Ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ra(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function za(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Ba(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Va(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0)if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}var Ha=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ua=class extends Ha{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fe,endingEnd:Fe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ie:i=e,o=2*t-n;break;case Le:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ie:a=e,s=2*n-t;break;case Le:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Wa=class extends Ha{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ga=class extends Ha{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ka=class extends Ha{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},qa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ra(t,this.TimeBufferType),this.values=Ra(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ra(e.times,Array),values:Ra(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ka(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case B:t=this.InterpolantFactoryMethodDiscrete;break;case Ne:t=this.InterpolantFactoryMethodLinear;break;case V:t=this.InterpolantFactoryMethodSmooth;break;case Pe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return H(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return B;case this.InterpolantFactoryMethodLinear:return Ne;case this.InterpolantFactoryMethodSmooth:return V;case this.InterpolantFactoryMethodBezier:return Pe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(U(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(U(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){U(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){U(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Xe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){U(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===V,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};qa.prototype.ValueTypeName=``,qa.prototype.TimeBufferType=Float32Array,qa.prototype.ValueBufferType=Float32Array,qa.prototype.DefaultInterpolation=Ne;var Ja=class extends qa{constructor(e,t,n){super(e,t,n)}};Ja.prototype.ValueTypeName=`bool`,Ja.prototype.ValueBufferType=Array,Ja.prototype.DefaultInterpolation=B,Ja.prototype.InterpolantFactoryMethodLinear=void 0,Ja.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends qa{constructor(e,t,n,r){super(e,t,n,r)}};Ya.prototype.ValueTypeName=`color`;var Xa=class extends qa{constructor(e,t,n,r){super(e,t,n,r)}};Xa.prototype.ValueTypeName=`number`;var Za=class extends Ha{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)jt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Qa=class extends qa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Za(this.times,this.values,this.getValueSize(),e)}};Qa.prototype.ValueTypeName=`quaternion`,Qa.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends qa{constructor(e,t,n){super(e,t,n)}};$a.prototype.ValueTypeName=`string`,$a.prototype.ValueBufferType=Array,$a.prototype.DefaultInterpolation=B,$a.prototype.InterpolantFactoryMethodLinear=void 0,$a.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends qa{constructor(e,t,n,r){super(e,t,n,r)}};eo.prototype.ValueTypeName=`vector`;var to=class{constructor(e=``,t=-1,n=[],r=Re){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ut(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(ro(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(qa.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=za(o);o=Ba(o,1,c),s=Ba(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new Xa(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function no(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return Xa;case`vector`:case`vector2`:case`vector3`:case`vector4`:return eo;case`color`:return Ya;case`quaternion`:return Qa;case`bool`:case`boolean`:return Ja;case`string`:return $a}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function ro(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=no(e.type);if(e.times===void 0){let t=[],n=[];Va(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var io={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(ao(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!ao(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function ao(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var oo=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},so=class{constructor(e){this.manager=e===void 0?oo:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};so.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var co={},lo=class extends Error{constructor(e,t){super(e),this.response=t}},uo=class extends so{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=io.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(co[e]!==void 0){co[e].push({onLoad:t,onProgress:n,onError:r});return}co[e]=[],co[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&H(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=co[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new lo(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{io.add(`file:${e}`,t);let n=co[e];delete co[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=co[e];if(n===void 0)throw this.manager.itemError(e),t;delete co[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},fo=new WeakMap,po=class extends so{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=io.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=fo.get(a);e===void 0&&(e=[],fo.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Ze(`img`);function s(){l(),t&&t(this);let n=fo.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}fo.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),io.remove(`image:${e}`);let n=fo.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}fo.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),io.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},mo=class extends so{constructor(e){super(e)}load(e,t,n,r){let i=new Yt,a=new po(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},ho=class extends On{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Y(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},go=class extends ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Y(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},_o=new J,vo=new q,yo=new q,bo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=f,this.map=null,this.mapPass=null,this.matrix=new J,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ii,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;vo.setFromMatrixPosition(e.matrixWorld),t.position.copy(vo),yo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yo),t.updateMatrixWorld(),_o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xo=new q,So=new jt,Co=new q,wo=class extends On{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new J,this.projectionMatrix=new J,this.projectionMatrixInverse=new J,this.coordinateSystem=Je,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xo,So,Co),Co.x===1&&Co.y===1&&Co.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,So,Co.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xo,So,Co),Co.x===1&&Co.y===1&&Co.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,So,Co.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},To=new q,Eo=new K,Do=new K,Oo=class extends wo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ct*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lt*2*Math.atan(Math.tan(ct*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){To.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(To.x,To.y).multiplyScalar(-e/To.z),To.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(To.x,To.y).multiplyScalar(-e/To.z)}getViewSize(e,t){return this.getViewBounds(e,Eo,Do),t.subVectors(Do,Eo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ct*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ko=class extends bo{constructor(){super(new Oo(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=lt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ao=class extends ho{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new ko}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},jo=class extends bo{constructor(){super(new Oo(90,1,.5,500)),this.isPointLightShadow=!0}},Mo=class extends ho{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new jo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},No=class extends wo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Po=class extends bo{constructor(){super(new No(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fo=class extends ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new Po}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Io=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Lo=new WeakMap,Ro=class extends so{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&H(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&H(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=io.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{Lo.has(a)===!0?(r&&r(Lo.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(i.options,{colorSpaceConversion:`none`}))}).then(function(n){io.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e)}).catch(function(t){r&&r(t),Lo.set(s,t),io.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});io.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},zo=-90,Bo=1,Vo=class extends On{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Oo(zo,Bo,e,t);r.layers=this.layers,this.add(r);let i=new Oo(zo,Bo,e,t);i.layers=this.layers,this.add(i);let a=new Oo(zo,Bo,e,t);a.layers=this.layers,this.add(a);let o=new Oo(zo,Bo,e,t);o.layers=this.layers,this.add(o);let s=new Oo(zo,Bo,e,t);s.layers=this.layers,this.add(s);let c=new Oo(zo,Bo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ho=class extends Oo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Uo=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,i,a;switch(t){case`quaternion`:r=this._slerp,i=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case`string`:case`bool`:r=this._select,i=this._select,a=this._setAdditiveIdentityOther,this.buffer=Array(n*5);break;default:r=this._lerp,i=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=i,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,i=e*r+r,a=this.cumulativeWeight;if(a===0){for(let e=0;e!==r;++e)n[i+e]=n[e];a=t}else{a+=t;let e=t/a;this._mixBufferRegion(n,i,0,e,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,i=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){let e=t*this._origIndex;this._mixBufferRegion(n,r,e,1-i,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let e=t,i=t+t;e!==i;++e)if(n[e]!==n[e+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let e=n,i=r;e!==i;++e)t[e]=t[r+e%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,i){if(r>=.5)for(let r=0;r!==i;++r)e[t+r]=e[n+r]}_slerp(e,t,n,r){jt.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,i){let a=this._workIndex*i;jt.multiplyQuaternionsFlat(e,a,e,t,e,n),jt.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,i){let a=1-r;for(let o=0;o!==i;++o){let i=t+o;e[i]=e[i]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,i){for(let a=0;a!==i;++a){let i=t+a;e[i]=e[i]+e[n+a]*r}}},Wo=`\\[\\]\\.:\\/`,Go=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ko=`[^\\[\\]\\.:\\/]`,qo=`[^`+Wo.replace(`\\.`,``)+`]`,Jo=`((?:WC+[\\/:])*)`.replace(`WC`,Ko),Yo=`(WCOD+)?`.replace(`WCOD`,qo),Xo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ko),Zo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ko),Qo=RegExp(`^`+Jo+Yo+Xo+Zo+`$`),$o=[`material`,`materials`,`bones`,`map`],es=class{constructor(e,t,n){let r=n||ts.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ts=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Go,``)}static parseTrackName(e){let t=Qo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);$o.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){H(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){U(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){U(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){U(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){U(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){U(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;U(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ts.Composite=es,ts.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ts.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ts.prototype.GetterByBindingType=[ts.prototype._getValue_direct,ts.prototype._getValue_array,ts.prototype._getValue_arrayElement,ts.prototype._getValue_toArray],ts.prototype.SetterByBindingTypeAndVersioning=[[ts.prototype._setValue_direct,ts.prototype._setValue_direct_setNeedsUpdate,ts.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ts.prototype._setValue_array,ts.prototype._setValue_array_setNeedsUpdate,ts.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ts.prototype._setValue_arrayElement,ts.prototype._setValue_arrayElement_setNeedsUpdate,ts.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ts.prototype._setValue_fromArray,ts.prototype._setValue_fromArray_setNeedsUpdate,ts.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ns=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let i=t.tracks,a=i.length,o=Array(a),s={endingStart:Fe,endingEnd:Fe};for(let e=0;e!==a;++e){let t=i[e].createInterpolant(null);o[e]=t,t.settings=s}this._interpolantSettings=s,this._interpolants=o,this._propertyBindings=Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=je,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let n=this._clip.duration,r=e._clip.duration,i=r/n,a=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,i,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,i=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let s=o.parameterPositions,c=o.sampleValues;return s[0]=i,s[1]=i+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let i=this._startTime;if(i!==null){let r=(e-i)*n;r<0||n===0?t=0:(this._startTime=null,t=n*r)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let e=this._interpolants,t=this._propertyBindings;switch(this.blendMode){case ze:for(let n=0,r=e.length;n!==r;++n)e[n].evaluate(a),t[n].accumulateAdditive(o);break;case Re:default:for(let n=0,i=e.length;n!==i;++n)e[n].evaluate(a),t[n].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,i=this._loopCount,a=n===Me;if(e===0)return i===-1?r:a&&(i&1)==1?t-r:r;if(n===2200){i===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));handle_stop:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break handle_stop}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e<0?-1:1})}}else{if(i===-1&&(e>=0?(i=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let n=Math.floor(r/t);r-=t*n,i+=Math.abs(n);let o=this.repetitions-i;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e>0?1:-1});else{if(o===1){let t=e<0;this._setEndings(t,!t,a)}else this._setEndings(!1,!1,a);this._loopCount=i,this.time=r,this._mixer.dispatchEvent({type:`loop`,action:this,loopDelta:n})}}else this._loopCount=i,this.time=r;if(a&&(i&1)==1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Ie,r.endingEnd=Ie):(r.endingStart=e?this.zeroSlopeAtStart?Ie:Fe:Le,r.endingEnd=t?this.zeroSlopeAtEnd?Ie:Fe:Le)}_scheduleFading(e,t,n){let r=this._mixer,i=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,s=a.sampleValues;return o[0]=i,s[0]=t,o[1]=i+e,s[1]=n,this}},rs=new Float32Array(1),is=class extends at{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,i=r.length,a=e._propertyBindings,o=e._interpolants,s=n.uuid,c=this._bindingsByRootAndName,l=c[s];l===void 0&&(l={},c[s]=l);for(let e=0;e!==i;++e){let i=r[e],c=i.name,u=l[c];if(u!==void 0)++u.referenceCount,a[e]=u;else{if(u=a[e],u!==void 0){u._cacheIndex===null&&(++u.referenceCount,this._addInactiveBinding(u,s,c));continue}let r=t&&t._propertyBindings[e].binding.parsedPath;u=new Uo(ts.create(n,c,r),i.ValueTypeName,i.getValueSize()),++u.referenceCount,this._addInactiveBinding(u,s,c),a[e]=u}o[e].resultBuffer=u.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let t=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,t)}let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,i=this._actionsByClip,a=i[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=a;else{let t=a.knownActions;e._byClipCacheIndex=t.length,t.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let i=e._clip.uuid,a=this._actionsByClip,o=a[i],s=o.knownActions,c=s[s.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,s[l]=c,s.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],s.length===0&&delete a[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,i=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,i=n.path,a=this._bindingsByRootAndName,o=a[r],s=t[t.length-1],c=e._cacheIndex;s._cacheIndex=c,t[c]=s,t.pop(),delete o[i],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Wa(new Float32Array(2),new Float32Array(2),1,rs),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,i=t[r];e.__cacheIndex=r,t[r]=e,i.__cacheIndex=n,t[n]=i}clipAction(e,t,n){let r=t||this._root,i=r.uuid,a=typeof e==`string`?to.findByName(r,e):e,o=a===null?e:a.uuid,s=this._actionsByClip[o],c=null;if(n===void 0&&(n=a===null?Re:a.blendMode),s!==void 0){let e=s.actionByRoot[i];if(e!==void 0&&e.blendMode===n)return e;c=s.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let l=new ns(this,a,t,n);return this._bindAction(l,c),this._addInactiveAction(l,o,i),l}existingAction(e,t){let n=t||this._root,r=n.uuid,i=typeof e==`string`?to.findByName(n,e):e,a=i?i.uuid:e,o=this._actionsByClip[a];return o===void 0?null:o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,i=Math.sign(e),a=this._accuIndex^=1;for(let o=0;o!==n;++o)t[o]._update(r,e,i,a);let o=this._bindings,s=this._nActiveBindings;for(let e=0;e!==s;++e)o[e].apply(a);return this}setTime(e){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,i=r[n];if(i!==void 0){let e=i.knownActions;for(let n=0,r=e.length;n!==r;++n){let r=e[n];this._deactivateAction(r);let i=r._cacheIndex,a=t[t.length-1];r._cacheIndex=null,r._byClipCacheIndex=null,a._cacheIndex=i,t[i]=a,t.pop(),this._removeInactiveBindingsForAction(r)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let e in n){let r=n[e].actionByRoot[t];r!==void 0&&(this._deactivateAction(r),this._removeInactiveAction(r))}let r=this._bindingsByRootAndName[t];if(r!==void 0)for(let e in r){let t=r[e];t.restoreOriginalState(),this._removeInactiveBinding(t)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},as=new J,os=class{constructor(e,t,n=0,r=1/0){this.ray=new Wr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new fn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):U(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return as.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(as),this}intersectObject(e,t=!0,n=[]){return cs(e,this,n,t),n.sort(ss),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)cs(e[r],this,n,t);return n.sort(ss),n}};function ss(e,t){return e.distance-t.distance}function cs(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)cs(r[e],t,n,!0)}}var ls=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=W(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(W(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var us=class extends at{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){H(`Controls: connect() now requires an element.`);return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ds(e,t,n,r){let i=fs(r);switch(n){case T:return e*t;case A:return e*t/i.components*i.byteLength;case j:return e*t/i.components*i.byteLength;case M:return e*t*2/i.components*i.byteLength;case N:return e*t*2/i.components*i.byteLength;case E:return e*t*3/i.components*i.byteLength;case D:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case P:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case te:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ie:case oe:return Math.max(e,16)*Math.max(t,8)/4;case re:case ae:return Math.max(e,8)*Math.max(t,8)/2;case se:case I:case le:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case L:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case R:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Te:case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*8;case z:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function fs(e){switch(e){case f:case p:return{byteLength:1,components:1};case h:case m:case y:return{byteLength:2,components:1};case b:case x:return{byteLength:2,components:4};case _:case g:case v:return{byteLength:4,components:1};case C:case w:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?H(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function ps(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ms(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var hs={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Q={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},gs={basic:{uniforms:wa([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:hs.meshbasic_vert,fragmentShader:hs.meshbasic_frag},lambert:{uniforms:wa([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},envMapIntensity:{value:1}}]),vertexShader:hs.meshlambert_vert,fragmentShader:hs.meshlambert_frag},phong:{uniforms:wa([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:hs.meshphong_vert,fragmentShader:hs.meshphong_frag},standard:{uniforms:wa([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:hs.meshphysical_vert,fragmentShader:hs.meshphysical_frag},toon:{uniforms:wa([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new Y(0)}}]),vertexShader:hs.meshtoon_vert,fragmentShader:hs.meshtoon_frag},matcap:{uniforms:wa([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:hs.meshmatcap_vert,fragmentShader:hs.meshmatcap_frag},points:{uniforms:wa([Q.points,Q.fog]),vertexShader:hs.points_vert,fragmentShader:hs.points_frag},dashed:{uniforms:wa([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:hs.linedashed_vert,fragmentShader:hs.linedashed_frag},depth:{uniforms:wa([Q.common,Q.displacementmap]),vertexShader:hs.depth_vert,fragmentShader:hs.depth_frag},normal:{uniforms:wa([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:hs.meshnormal_vert,fragmentShader:hs.meshnormal_frag},sprite:{uniforms:wa([Q.sprite,Q.fog]),vertexShader:hs.sprite_vert,fragmentShader:hs.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:hs.background_vert,fragmentShader:hs.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:hs.backgroundCube_vert,fragmentShader:hs.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:hs.cube_vert,fragmentShader:hs.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:hs.equirect_vert,fragmentShader:hs.equirect_frag},distance:{uniforms:wa([Q.common,Q.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:hs.distance_vert,fragmentShader:hs.distance_frag},shadow:{uniforms:wa([Q.lights,Q.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:hs.shadow_vert,fragmentShader:hs.shadow_frag}};gs.physical={uniforms:wa([gs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:hs.meshphysical_vert,fragmentShader:hs.meshphysical_frag};var _s={r:0,b:0,g:0},vs=new J,ys=new Pt;ys.set(-1,0,0,0,1,0,0,0,1);function bs(e,t,n,r,i,a){let o=new Y(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Z(new ca(1,1,1),new ja({name:`BackgroundCubeMaterial`,uniforms:Ca(gs.backgroundCube.uniforms),vertexShader:gs.backgroundCube.vertexShader,fragmentShader:gs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(vs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ys),l.material.toneMapped=zt.getTransfer(i.colorSpace)!==We,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Z(new ya(2,2),new ja({name:`BackgroundMaterial`,uniforms:Ca(gs.background.uniforms),vertexShader:gs.background.vertexShader,fragmentShader:gs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=zt.getTransfer(i.colorSpace)!==We,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(_s,Da(e)),n.buffers.color.setClear(_s.r,_s.g,_s.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function xs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ss(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Cs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(H(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&H(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ws(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Mi,s=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ts=4,Es=[.125,.215,.35,.446,.526,.582],Ds=20,Os=256,ks=new No,As=new Y,js=null,Ms=0,Ns=0,Ps=!1,Fs=new q,Is=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Fs}=i;js=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),Ns=this._renderer.getActiveMipmapLevel(),Ps=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Us(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(js,Ms,Ns),this._renderer.xr.enabled=Ps,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),js=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),Ns=this._renderer.getActiveMipmapLevel(),Ps=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:l,minFilter:l,generateMipmaps:!1,type:y,format:D,colorSpace:He,depthBuffer:!1},r=Rs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rs(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ls(r)),this._blurMaterial=Vs(r,e,t),this._ggxMaterial=Bs(r,e,t)}return r}_compileMaterial(e){let t=new Z(new jr,e);this._renderer.compile(t,ks)}_sceneToCubeUV(e,t,n,r,i){let a=new Oo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(As),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Z(new ca,new Gr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(As),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;zs(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Us()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hs());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;zs(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ks)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ts?n-d+Ts:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,zs(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,ks),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,zs(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,ks)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&U(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Ds;m>Ds&&H(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ds}`);let h=[],g=0;for(let e=0;e<Ds;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];zs(t,3*v*(r>_-Ts?r-_+Ts:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,ks)}};function Ls(e){let t=[],n=[],r=[],i=e,a=e-Ts+1+Es.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Ts?s=Es[o-e+Ts-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new jr;h.setAttribute(`position`,new _r(f,3)),h.setAttribute(`uv`,new _r(p,2)),h.setAttribute(`faceIndex`,new _r(m,1)),r.push(new Z(h,null)),i>Ts&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Rs(e,t,n){let r=new Qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function zs(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Bs(e,t,n){return new ja({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ws(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vs(e,t,n){let r=new Float32Array(Ds),i=new q(0,1,0);return new ja({name:`SphericalGaussianBlur`,defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ws(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Hs(){return new ja({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ws(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Us(){return new ja({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ws(){return`

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
	`}var Gs=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ia(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ca(5,5,5),i=new ja({name:`CubemapFromEquirect`,uniforms:Ca(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Z(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=l),new Vo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Ks(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new Gs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Is(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Is(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function qs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&nt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Js(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?yr:vr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ys(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Xs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:U(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Zs(e,t,n){let r=new WeakMap,i=new Xt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new $t(h,p,m,u);g.type=v,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new K(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Qs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var $s={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ec(e,t,n,r,i,a){let o=new Qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new aa(t,n):void 0}),s=new Qt(t,n,{type:y,depthBuffer:!1,stencilBuffer:!1}),c=new jr;c.setAttribute(`position`,new X([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new X([0,2,0,0,2,0],2));let l=new Ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Z(c,l),d=new No(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],v=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},zt.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=$s[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var tc=new Yt,nc=new aa(1,1),rc=new $t,ic=new en,ac=new ia,oc=[],sc=[],cc=new Float32Array(16),lc=new Float32Array(9),uc=new Float32Array(4);function dc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=oc[i];if(a===void 0&&(a=new Float32Array(i),oc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function fc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function pc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function mc(e,t){let n=sc[t];n===void 0&&(n=new Int32Array(t),sc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function hc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fc(n,t))return;e.uniform2fv(this.addr,t),pc(n,t)}}function _c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(fc(n,t))return;e.uniform3fv(this.addr,t),pc(n,t)}}function vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fc(n,t))return;e.uniform4fv(this.addr,t),pc(n,t)}}function yc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),pc(n,t)}else{if(fc(n,r))return;uc.set(r),e.uniformMatrix2fv(this.addr,!1,uc),pc(n,r)}}function bc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),pc(n,t)}else{if(fc(n,r))return;lc.set(r),e.uniformMatrix3fv(this.addr,!1,lc),pc(n,r)}}function xc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),pc(n,t)}else{if(fc(n,r))return;cc.set(r),e.uniformMatrix4fv(this.addr,!1,cc),pc(n,r)}}function Sc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fc(n,t))return;e.uniform2iv(this.addr,t),pc(n,t)}}function wc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fc(n,t))return;e.uniform3iv(this.addr,t),pc(n,t)}}function Tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fc(n,t))return;e.uniform4iv(this.addr,t),pc(n,t)}}function Ec(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fc(n,t))return;e.uniform2uiv(this.addr,t),pc(n,t)}}function Oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fc(n,t))return;e.uniform3uiv(this.addr,t),pc(n,t)}}function kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fc(n,t))return;e.uniform4uiv(this.addr,t),pc(n,t)}}function Ac(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(nc.compareFunction=n.isReversedDepthBuffer()?518:515,a=nc):a=tc,n.setTexture2D(t||a,i)}function jc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ic,i)}function Mc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ac,i)}function Nc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||rc,i)}function Pc(e){switch(e){case 5126:return hc;case 35664:return gc;case 35665:return _c;case 35666:return vc;case 35674:return yc;case 35675:return bc;case 35676:return xc;case 5124:case 35670:return Sc;case 35667:case 35671:return Cc;case 35668:case 35672:return wc;case 35669:case 35673:return Tc;case 5125:return Ec;case 36294:return Dc;case 36295:return Oc;case 36296:return kc;case 35678:case 36198:case 36298:case 36306:case 35682:return Ac;case 35679:case 36299:case 36307:return jc;case 35680:case 36300:case 36308:case 36293:return Mc;case 36289:case 36303:case 36311:case 36292:return Nc}}function Fc(e,t){e.uniform1fv(this.addr,t)}function Ic(e,t){let n=dc(t,this.size,2);e.uniform2fv(this.addr,n)}function Lc(e,t){let n=dc(t,this.size,3);e.uniform3fv(this.addr,n)}function Rc(e,t){let n=dc(t,this.size,4);e.uniform4fv(this.addr,n)}function zc(e,t){let n=dc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Bc(e,t){let n=dc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Vc(e,t){let n=dc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Hc(e,t){e.uniform1iv(this.addr,t)}function Uc(e,t){e.uniform2iv(this.addr,t)}function Wc(e,t){e.uniform3iv(this.addr,t)}function Gc(e,t){e.uniform4iv(this.addr,t)}function Kc(e,t){e.uniform1uiv(this.addr,t)}function qc(e,t){e.uniform2uiv(this.addr,t)}function Jc(e,t){e.uniform3uiv(this.addr,t)}function Yc(e,t){e.uniform4uiv(this.addr,t)}function Xc(e,t,n){let r=this.cache,i=t.length,a=mc(n,i);fc(r,a)||(e.uniform1iv(this.addr,a),pc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?nc:tc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Zc(e,t,n){let r=this.cache,i=t.length,a=mc(n,i);fc(r,a)||(e.uniform1iv(this.addr,a),pc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ic,a[e])}function Qc(e,t,n){let r=this.cache,i=t.length,a=mc(n,i);fc(r,a)||(e.uniform1iv(this.addr,a),pc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ac,a[e])}function $c(e,t,n){let r=this.cache,i=t.length,a=mc(n,i);fc(r,a)||(e.uniform1iv(this.addr,a),pc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||rc,a[e])}function el(e){switch(e){case 5126:return Fc;case 35664:return Ic;case 35665:return Lc;case 35666:return Rc;case 35674:return zc;case 35675:return Bc;case 35676:return Vc;case 5124:case 35670:return Hc;case 35667:case 35671:return Uc;case 35668:case 35672:return Wc;case 35669:case 35673:return Gc;case 5125:return Kc;case 36294:return qc;case 36295:return Jc;case 36296:return Yc;case 35678:case 36198:case 36298:case 36306:case 35682:return Xc;case 35679:case 36299:case 36307:return Zc;case 35680:case 36300:case 36308:case 36293:return Qc;case 36289:case 36303:case 36311:case 36292:return $c}}var tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pc(t.type)}},nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=el(t.type)}},rl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},il=/(\w+)(\])?(\[|\.)?/g;function al(e,t){e.seq.push(t),e.map[t.id]=t}function ol(e,t,n){let r=e.name,i=r.length;for(il.lastIndex=0;;){let a=il.exec(r),o=il.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){al(n,l===void 0?new tl(s,e,t):new nl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new rl(s),al(n,e)),n=e}}}var sl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ol(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function cl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ll=37297,ul=0;function dl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var fl=new Pt;function pl(e){zt._getMatrix(fl,zt.workingColorSpace,e);let t=`mat3( ${fl.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(e)){case Ue:return[t,`LinearTransferOETF`];case We:return[t,`sRGBTransferOETF`];default:return H(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ml(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+dl(e.getShaderSource(t),r)}return i}function hl(e,t){let n=pl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var gl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function _l(e,t){let n=gl[t];return n===void 0?(H(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var vl=new q;function yl(){return zt.getLuminanceCoefficients(vl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${vl.x.toFixed(4)}, ${vl.y.toFixed(4)}, ${vl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function bl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Cl).join(`
`)}function xl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Sl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Cl(e){return e!==``}function wl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var El=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(e){return e.replace(El,kl)}var Ol=new Map;function kl(e,t){let n=hs[t];if(n===void 0){let e=Ol.get(t);if(e!==void 0)n=hs[e],H(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Dl(n)}var Al=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(e){return e.replace(Al,Ml)}function Ml(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Nl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Pl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Fl(e){return Pl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Il={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Ll(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Il[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Rl={302:`ENVMAP_MODE_REFRACTION`};function zl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Rl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Bl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Vl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Bl[e.combine]||`ENVMAP_BLENDING_NONE`}function Hl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ul(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Fl(n),l=Ll(n),u=zl(n),d=Vl(n),f=Hl(n),p=bl(n),m=xl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Cl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Cl).join(`
`),_.length>0&&(_+=`
`)):(g=[Nl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Cl).join(`
`),_=[Nl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:hs.tonemapping_pars_fragment,n.toneMapping===0?``:_l(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,hs.colorspace_pars_fragment,hl(`linearToOutputTexel`,n.outputColorSpace),yl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Cl).join(`
`)),o=Dl(o),o=wl(o,n),o=Tl(o,n),s=Dl(s),s=wl(s,n),s=Tl(s,n),o=jl(o),s=jl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=cl(i,i.VERTEX_SHADER,y),S=cl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ml(i,x,`vertex`),n=ml(i,S,`fragment`);U(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):H(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new sl(i,h),T=Sl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,ll)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ul++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Wl=0,Gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kl(e),t.set(e,n)),n}},Kl=class{constructor(e){this.id=Wl++,this.code=e,this.usedTimes=0}};function ql(e){return e===1030||e===37490||e===36285}function Jl(e,t,n,r,i,a){let o=new fn,s=new Gl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&H(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=gs[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,ee=h.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,te=!!x,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,I=!!i.metalnessMap,ce=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,de=i.dispersion>0,fe=i.iridescence>0,pe=i.sheen>0,L=i.transmission>0,R=le&&!!i.anisotropyMap,me=ue&&!!i.clearcoatMap,he=ue&&!!i.clearcoatNormalMap,ge=ue&&!!i.clearcoatRoughnessMap,_e=fe&&!!i.iridescenceMap,ve=fe&&!!i.iridescenceThicknessMap,ye=pe&&!!i.sheenColorMap,be=pe&&!!i.sheenRoughnessMap,xe=!!i.specularMap,Se=!!i.specularColorMap,Ce=!!i.specularIntensityMap,we=L&&!!i.transmissionMap,Te=L&&!!i.thicknessMap,Ee=!!i.gradientMap,De=!!i.alphaMap,Oe=i.alphaTest>0,ke=!!i.alphaHash,z=!!i.extensions,Ae=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ee,batchingColor:ee&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&ql(i.normalMap.format),metalnessMap:I,roughnessMap:ce,anisotropy:le,anisotropyMap:R,clearcoat:ue,clearcoatMap:me,clearcoatNormalMap:he,clearcoatRoughnessMap:ge,dispersion:de,iridescence:fe,iridescenceMap:_e,iridescenceThicknessMap:ve,sheen:pe,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ce,transmission:L,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:ke,combine:i.combine,mapUv:P&&m(i.map.channel),aoMapUv:ne&&m(i.aoMap.channel),lightMapUv:re&&m(i.lightMap.channel),bumpMapUv:ie&&m(i.bumpMap.channel),normalMapUv:ae&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:se&&m(i.emissiveMap.channel),metalnessMapUv:I&&m(i.metalnessMap.channel),roughnessMapUv:ce&&m(i.roughnessMap.channel),anisotropyMapUv:R&&m(i.anisotropyMap.channel),clearcoatMapUv:me&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(i.sheenRoughnessMap.channel),specularMapUv:xe&&m(i.specularMap.channel),specularColorMapUv:Se&&m(i.specularColorMap.channel),specularIntensityMapUv:Ce&&m(i.specularIntensityMap.channel),transmissionMapUv:we&&m(i.transmissionMap.channel),thicknessMapUv:Te&&m(i.thicknessMap.channel),alphaMapUv:De&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ae||le),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(P||De),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&zt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&zt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:z&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(z&&i.extensions.multiDraw===!0||ee)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=gs[t];n=Oa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Ul(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Yl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Xl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Zl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ql(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Xl),r.length>1&&r.sort(t||Zl),i.length>1&&i.sort(t||Zl),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function $l(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ql,e.set(t,[i])):n>=r.length?(i=new Ql,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function eu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new q,color:new Y};break;case`SpotLight`:n={position:new q,direction:new q,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new Y,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new Y,groundColor:new Y};break;case`RectAreaLight`:n={color:new Y,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function tu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var nu=0;function ru(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function iu(e){let t=new eu,n=tu(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new J,o=new J;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(ru);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=nu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function au(e){let t=new iu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ou(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new au(e),t.set(n,[a])):r>=i.length?(a=new au(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var su=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lu=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],uu=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],du=new J,fu=new q,pu=new q;function mu(e,t,n){let r=new Ii,i=new K,a=new K,s=new Xt,c=new Ia,u=new La,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:su,fragmentShader:cu}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new jr;g.setAttribute(`position`,new _r(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Z(g,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,c){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(H(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){H(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){H(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Qt(i.x,i.y,{format:M,type:y,minFilter:l,magFilter:l,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new aa(i.x,i.y,v),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=O,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o}else d.isPointLight?(p.map=new Gs(i.x),p.map.depthTexture=new oa(i.x,_)):(p.map=new Qt(i.x,i.y),p.map.depthTexture=new aa(i.x,i.y,_)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=O,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=l,p.map.depthTexture.magFilter=l):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(s)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),fu.setFromMatrixPosition(d.matrixWorld),e.position.copy(fu),pu.copy(e.position),pu.add(lu[t]),e.up.copy(uu[t]),e.lookAt(pu),e.updateMatrixWorld(),n.makeTranslation(-fu.x,-fu.y,-fu.z),du.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(du,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);r=p.getFrustum(),T(n,c,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,c),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Qt(i.x,i.y,{format:M,type:y})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function hu(e,t){function n(){let t=!1,n=new Xt,r=null,i=new Xt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=it[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=ee>=1);let F=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Xt().fromArray(ne),ae=new Xt().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),me(!1),he(1),I(e.CULL_FACE),L(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ce(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return h!==t&&(e.useProgram(t),h=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function L(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ce(e.BLEND),g=!1);return}if(g===!1&&(I(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:U(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:U(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:U(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:U(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(fe[n],fe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function R(t,n){t.side===2?ce(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),me(r),t.blending===1&&t.transparent===!1?L(0):L(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function me(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function he(t){t===0?ce(e.CULL_FACE):(I(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ge(t){t!==k&&(N&&e.lineWidth(t),k=t)}function _e(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ce(e.POLYGON_OFFSET_FILL)}function ve(t){t?I(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+M-1),F!==t&&(e.activeTexture(t),F=t)}function be(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+M-1:F);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function xe(){let t=te[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ce(){try{e.compressedTexImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function z(){try{e.texImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ae(){try{e.texImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function B(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function Ne(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function V(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Pe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,te={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:ce,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:L,setMaterial:R,setFlipSided:me,setCullFace:he,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:ve,activeTexture:ye,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:Ce,texImage2D:z,texImage3D:Ae,pixelStorei:Me,getParameter:je,updateUBOMapping:V,uniformBlockBinding:Pe,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:we,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:B,viewport:Ne,reset:Fe}}function gu(e,t,n,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new K,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ze(`canvas`)}function T(e,t,n){let r=1,i=je(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),H(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&H(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];H(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||H(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ue:zt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function j(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,H(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function M(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),P(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),te(t)}function P(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&F(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function F(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function te(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let ne=0;function re(){ne=0}function ie(){return ne}function ae(e){ne=e}function oe(){let e=ne;return e>=p.maxTextures&&H(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ne+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function I(t,r){let i=f.get(t);if(t.isVideoTexture&&z(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&i.__version!==t.version){let e=t.image;if(e===null)H(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)H(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ge(i,t,r);return}}else t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,i.__webglTexture,e.TEXTURE0+r)}function ce(t,r){let i=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version){ge(i,t,r);return}t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,i.__webglTexture,e.TEXTURE0+r)}function le(t,r){let i=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version){ge(i,t,r);return}n.bindTexture(e.TEXTURE_3D,i.__webglTexture,e.TEXTURE0+r)}function ue(t,r){let i=f.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&i.__version!==t.version){_e(i,t,r);return}n.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture,e.TEXTURE0+r)}let de={[r]:e.REPEAT,[i]:e.CLAMP_TO_EDGE,[a]:e.MIRRORED_REPEAT},fe={[o]:e.NEAREST,[s]:e.NEAREST_MIPMAP_NEAREST,[c]:e.NEAREST_MIPMAP_LINEAR,[l]:e.LINEAR,[u]:e.LINEAR_MIPMAP_NEAREST,[d]:e.LINEAR_MIPMAP_LINEAR},pe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function L(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&H(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,de[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,de[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,de[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,fe[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,fe[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,pe[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function R(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,N));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=se(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&F(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function me(e,t,n){return Math.floor(Math.floor(e/n)/t)}function he(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=me(n.start,r.width,4),c=me(t.start,r.width,4);n.start<=i+1&&a===c&&me(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ge(t,r,i){let a=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(a=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(a=e.TEXTURE_3D);let o=R(t,r),s=r.source;n.bindTexture(a,t.__webglTexture,e.TEXTURE0+i);let c=f.get(s);if(s.version!==c.__version||o===!0){if(n.activeTexture(e.TEXTURE0+i),!(typeof ImageBitmap<`u`&&r.image instanceof ImageBitmap)){let t=zt.getPrimaries(zt.workingColorSpace),i=r.colorSpace===``?null:zt.getPrimaries(r.colorSpace),a=r.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let t=T(r.image,!1,p.maxTextureSize);t=Ae(r,t);let l=m.convert(r.format,r.colorSpace),u=m.convert(r.type),d=A(r.internalFormat,l,u,r.normalized,r.colorSpace,r.isVideoTexture);L(a,r);let f,h=r.mipmaps,g=r.isVideoTexture!==!0,_=c.__version===void 0||o===!0,v=s.dataReady,y=M(r,t);if(r.isDepthTexture)d=j(r.format===k,r.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,d,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,l,u,null));else if(r.isDataTexture)if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,l,u,f.data);r.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height),v&&he(r,t,l,u)):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,l,u,t.data);else if(r.isCompressedTexture)if(r.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(f=h[i],r.format!==1023)if(l!==null)if(g){if(v)if(r.layerUpdates.size>0){let t=ds(f.width,f.height,r.format,r.type);for(let a of r.layerUpdates){let r=f.data.subarray(a*t/f.data.BYTES_PER_ELEMENT,(a+1)*t/f.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,f.width,f.height,1,l,r)}r.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,f.width,f.height,t.depth,l,f.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,d,f.width,f.height,t.depth,0,f.data,0,0);else H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,f.width,f.height,t.depth,l,u,f.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,d,f.width,f.height,t.depth,0,l,u,f.data)}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)f=h[t],r.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,l,u,f.data):l===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,f.data):n.compressedTexImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,f.data)}else if(r.isDataArrayTexture)if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,t.width,t.height,t.depth),v)if(r.layerUpdates.size>0){let i=ds(t.width,t.height,r.format,r.type);for(let a of r.layerUpdates){let r=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,l,u,r)}r.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,l,u,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,d,t.width,t.height,t.depth,0,l,u,t.data);else if(r.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,d,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,l,u,t.data)):n.texImage3D(e.TEXTURE_3D,0,d,t.width,t.height,t.depth,0,l,u,t.data);else if(r.isFramebufferTexture){if(_)if(g)n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height);else{let r=t.width,i=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,d,r,i,0,l,u,null),r>>=1,i>>=1}}else if(r.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(r),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=je(h[0]);n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height)}for(let t=0,r=h.length;t<r;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,l,u,f):n.texImage2D(e.TEXTURE_2D,t,d,l,u,f);r.generateMipmaps=!1}else if(g){if(_){let r=je(t);n.texStorage2D(e.TEXTURE_2D,y,d,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,l,u,t)}else n.texImage2D(e.TEXTURE_2D,0,d,l,u,t);E(r)&&D(a),c.__version=s.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function _e(t,r,i){if(r.image.length!==6)return;let a=R(t,r),o=r.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+i);let s=f.get(o);if(o.version!==s.__version||a===!0){n.activeTexture(e.TEXTURE0+i);let t=zt.getPrimaries(zt.workingColorSpace),c=r.colorSpace===``?null:zt.getPrimaries(r.colorSpace),l=r.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=r.isCompressedTexture||r.image[0].isCompressedTexture,d=r.image[0]&&r.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!u&&!d?f[e]=T(r.image[e],!0,p.maxCubemapSize):f[e]=d?r.image[e].image:r.image[e],f[e]=Ae(r,f[e]);let h=f[0],g=m.convert(r.format,r.colorSpace),_=m.convert(r.type),v=A(r.internalFormat,g,_,r.normalized,r.colorSpace),y=r.isVideoTexture!==!0,b=s.__version===void 0||a===!0,x=o.dataReady,S=M(r,h);L(e.TEXTURE_CUBE_MAP,r);let C;if(u){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let i=0;i<C.length;i++){let a=C[i];r.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,_,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,g,_,a.data):g===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,a.data)}}}else{if(C=r.mipmaps,y&&b){C.length>0&&S++;let t=je(f[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(d){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(r)&&D(e.TEXTURE_CUBE_MAP),s.__version=o.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function ve(t,r,i,a,o,s){let c=m.convert(i.format,i.colorSpace),l=m.convert(i.type),u=A(i.internalFormat,c,l,i.normalized,i.colorSpace),d=f.get(r),p=f.get(i);if(p.__renderTarget=r,!d.__hasExternalTextures){let t=Math.max(1,r.width>>s),i=Math.max(1,r.height>>s);o===e.TEXTURE_3D||o===e.TEXTURE_2D_ARRAY?n.texImage3D(o,s,u,t,i,r.depth,0,c,l,null):n.texImage2D(o,s,u,t,i,0,c,l,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),ke(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,a,o,p.__webglTexture,0,Oe(r)):(o===e.TEXTURE_2D||o>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&o<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,a,o,p.__webglTexture,s),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=j(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ke(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=A(a.internalFormat,o,s,a.normalized,a.colorSpace);ke(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function be(t,r,i){let a=r.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let o=f.get(r.depthTexture);if(o.__renderTarget=r,(!o.__webglTexture||r.depthTexture.image.width!==r.width||r.depthTexture.image.height!==r.height)&&(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),a){if(o.__webglInit===void 0&&(o.__webglInit=!0,r.depthTexture.addEventListener(`dispose`,N)),o.__webglTexture===void 0){o.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture),L(e.TEXTURE_CUBE_MAP,r.depthTexture);let t=m.convert(r.depthTexture.format),i=m.convert(r.depthTexture.type),a;r.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:r.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,a,r.width,r.height,0,t,i,null)}}else I(r.depthTexture,0);let s=o.__webglTexture,c=Oe(r),l=a?e.TEXTURE_CUBE_MAP_POSITIVE_X+i:e.TEXTURE_2D,u=r.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(r.depthTexture.format===1026)ke(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else if(r.depthTexture.format===1027)ke(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function xe(t){let r=f.get(t),i=t.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),e){let t=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),r.__depthDisposeCallback=t}r.__boundDepthTexture=e}if(t.depthTexture&&!r.__autoAllocateDepthBuffer)if(i)for(let e=0;e<6;e++)be(r.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?be(r.__webglFramebuffer[0],t,0):be(r.__webglFramebuffer,t,0)}else if(i){r.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[i]),r.__webglDepthbuffer[i]===void 0)r.__webglDepthbuffer[i]=e.createRenderbuffer(),ye(r.__webglDepthbuffer[i],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=r.__webglDepthbuffer[i];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let i=t.texture.mipmaps;if(i&&i.length>0?n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),ye(r.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,i)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,r){let i=f.get(t);n!==void 0&&ve(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&xe(t)}function Ce(t){let r=t.texture,i=f.get(t),a=f.get(r);t.addEventListener(`dispose`,ee);let o=t.textures,s=t.isWebGLCubeRenderTarget===!0,c=o.length>1;if(c||(a.__webglTexture===void 0&&(a.__webglTexture=e.createTexture()),a.__version=r.version,h.memory.textures++),s){i.__webglFramebuffer=[];for(let t=0;t<6;t++)if(r.mipmaps&&r.mipmaps.length>0){i.__webglFramebuffer[t]=[];for(let n=0;n<r.mipmaps.length;n++)i.__webglFramebuffer[t][n]=e.createFramebuffer()}else i.__webglFramebuffer[t]=e.createFramebuffer()}else{if(r.mipmaps&&r.mipmaps.length>0){i.__webglFramebuffer=[];for(let t=0;t<r.mipmaps.length;t++)i.__webglFramebuffer[t]=e.createFramebuffer()}else i.__webglFramebuffer=e.createFramebuffer();if(c)for(let t=0,n=o.length;t<n;t++){let n=f.get(o[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&ke(t)===!1){i.__webglMultisampledFramebuffer=e.createFramebuffer(),i.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,i.__webglMultisampledFramebuffer);for(let n=0;n<o.length;n++){let r=o[n];i.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,i.__webglColorRenderbuffer[n]);let a=m.convert(r.format,r.colorSpace),s=m.convert(r.type),c=A(r.internalFormat,a,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),l=Oe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,i.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(i.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(i.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(s){n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),L(e.TEXTURE_CUBE_MAP,r);for(let n=0;n<6;n++)if(r.mipmaps&&r.mipmaps.length>0)for(let a=0;a<r.mipmaps.length;a++)ve(i.__webglFramebuffer[n][a],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,a);else ve(i.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(r)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(c){for(let r=0,a=o.length;r<a;r++){let a=o[r],s=f.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,s.__webglTexture),L(c,a),ve(i.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+r,c,0),E(a)&&D(c)}n.unbindTexture()}else{let o=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(o=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(o,a.__webglTexture),L(o,r),r.mipmaps&&r.mipmaps.length>0)for(let n=0;n<r.mipmaps.length;n++)ve(i.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,o,n);else ve(i.__webglFramebuffer,t,r,e.COLOR_ATTACHMENT0,o,0);E(r)&&D(o),n.unbindTexture()}t.depthBuffer&&xe(t)}function we(e){let t=e.textures;for(let r=0,i=t.length;r<i;r++){let i=t[r];if(E(i)){let t=O(e),r=f.get(i).__webglTexture;n.bindTexture(t,r),D(t),n.unbindTexture()}}}let Te=[],Ee=[];function De(t){if(t.samples>0){if(ke(t)===!1){let r=t.textures,i=t.width,a=t.height,o=e.COLOR_BUFFER_BIT,s=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=f.get(t),l=r.length>1;if(l)for(let t=0;t<r.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,c.__webglMultisampledFramebuffer);let u=t.texture.mipmaps;u&&u.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer);for(let n=0;n<r.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(o|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(o|=e.STENCIL_BUFFER_BIT)),l){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,c.__webglColorRenderbuffer[n]);let t=f.get(r[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,i,a,0,0,i,a,o,e.NEAREST),_===!0&&(Te.length=0,Ee.length=0,Te.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Te.push(s),Ee.push(s),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ee)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),l)for(let t=0;t<r.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,c.__webglColorRenderbuffer[t]);let i=f.get(r[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,i,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Oe(e){return Math.min(p.maxSamples,e.samples)}function ke(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function z(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ae(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(zt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&H(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):U(`WebGLTextures: Unsupported texture color space:`,n)),t}function je(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=oe,this.resetTextureUnits=re,this.getTextureUnits=ie,this.setTextureUnits=ae,this.setTexture2D=I,this.setTexture2DArray=ce,this.setTexture3D=le,this.setTextureCube=ue,this.rebindTextures=Se,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function _u(e,t){function n(n,r=``){let i,a=zt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var vu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yu=`
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

}`,bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new sa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ja({vertexShader:vu,fragmentShader:yu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Z(new ya(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xu=class extends at{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,g=new bu,v={},y=t.getContextAttributes(),b=null,x=null,C=[],w=[],T=new K,E=null,A=new Oo;A.viewport=new Xt;let j=new Oo;j.viewport=new Xt;let M=[A,j],N=new Ho,ee=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new jn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new jn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new jn,C[e]=t),t.getHandSpace()};function F(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,F),r.removeEventListener(`selectstart`,F),r.removeEventListener(`selectend`,F),r.removeEventListener(`squeeze`,F),r.removeEventListener(`squeezestart`,F),r.removeEventListener(`squeezeend`,F),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ee=null,P=null,g.reset();for(let e in v)delete v[e];e.setRenderTarget(b),p=null,d=null,u=null,r=null,x=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?p:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,F),r.addEventListener(`selectstart`,F),r.addEventListener(`selectend`,F),r.addEventListener(`squeeze`,F),r.addEventListener(`squeezestart`,F),r.addEventListener(`squeezeend`,F),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,ne),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?k:O,a=y.stencil?S:_);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Qt(d.textureWidth,d.textureHeight,{format:D,type:f,depthTexture:new aa(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Qt(p.framebufferWidth,p.framebufferHeight,{format:D,type:f,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let re=new q,ie=new q;function ae(e,t,n){re.setFromMatrixPosition(t.matrixWorld),ie.setFromMatrixPosition(n.matrixWorld);let r=re.distanceTo(ie),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),N.near=j.near=A.near=t,N.far=j.far=A.far=n,(ee!==N.near||P!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),ee=N.near,P=N.far),N.layers.mask=e.layers.mask|6,A.layers.mask=N.layers.mask&-5,j.layers.mask=N.layers.mask&-3;let i=e.parent,a=N.cameras;oe(N,i);for(let e=0;e<a.length;e++)oe(a[e],i);a.length===2?ae(N,A,j):N.projectionMatrix.copy(A.projectionMatrix),se(e,N,i)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=lt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(d!==null||p!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(e){return v[e]};let I=null;function ce(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=M[n];o===void 0&&(o=new Oo,o.layers.enable(n),o.viewport=new Xt,M[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new sa,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}I&&I(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let le=new ps;le.setAnimationLoop(ce),this.setAnimationLoop=function(e){I=e},this.dispose=function(){}}},Su=new J,Cu=new Pt;Cu.set(-1,0,0,0,1,0,0,0,1);function wu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Da(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Su.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Cu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Tu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return U(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?H(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):H(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Eu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Du=null;function Ou(){return Du===null&&(Du=new gi(Eu,16,16,M,y),Du.name=`DFG_LUT`,Du.minFilter=l,Du.magFilter=l,Du.wrapS=i,Du.wrapT=i,Du.generateMipmaps=!1,Du.needsUpdate=!0),Du}var ku=class{constructor(e={}){let{canvas:t=Qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:m=f}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);g=n.getContextAttributes().alpha}else g=a;let v=m,C=new Set([ee,N,j]),w=new Set([f,_,h,S,b,x]),T=new Uint32Array(4),E=new Int32Array(4),D=new q,O=null,k=null,A=[],M=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,te=!1,ne=null,re=null,ie=null,ae=null;this._outputColorSpace=Ve;let oe=0,se=0,I=null,ce=-1,le=null,ue=new Xt,de=new Xt,fe=null,pe=new Y(0),L=0,R=t.width,me=t.height,he=1,ge=null,_e=null,ve=new Xt(0,0,R,me),ye=new Xt(0,0,R,me),be=!1,xe=new Ii,Se=!1,Ce=!1,we=new J,Te=new q,Ee=new Xt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function ke(){return I===null?he:1}let z=n;function Ae(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),z===null){let t=`webgl2`;if(z=Ae(t,e),z===null)throw Ae(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw U(`WebGLRenderer: `+e.message),e}let je,Me,B,Ne,V,Pe,Fe,Ie,Le,Re,ze,Be,He,Ue,We,Ge,Ke,qe,Ye,Xe,Ze,$e,tt;function nt(){je=new qs(z),je.init(),Ze=new _u(z,je),Me=new Cs(z,je,e,Ze),B=new hu(z,je),Me.reversedDepthBuffer&&p&&B.buffers.depth.setReversed(!0),re=z.createFramebuffer(),ie=z.createFramebuffer(),ae=z.createFramebuffer(),Ne=new Xs(z),V=new Yl,Pe=new gu(z,je,B,V,Me,Ze,Ne),Fe=new Ks(F),Ie=new ms(z),$e=new xs(z,Ie),Le=new Js(z,Ie,Ne,$e),Re=new Qs(z,Le,Ie,$e,Ne),qe=new Zs(z,Me,Pe),We=new ws(V),ze=new Jl(F,Fe,je,Me,$e,We),Be=new wu(F,V),He=new $l,Ue=new ou(je),Ke=new bs(F,Fe,B,Re,g,s),Ge=new mu(F,Re,Me),tt=new Tu(z,Ne,Me,B),Ye=new Ss(z,je,Ne),Xe=new Ys(z,je,Ne),Ne.programs=ze.programs,F.capabilities=Me,F.extensions=je,F.properties=V,F.renderLists=He,F.shadowMap=Ge,F.state=B,F.info=Ne}nt(),v!==1009&&(P=new ec(v,t.width,t.height,o,r,i));let it=new xu(F,z);this.xr=it,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=je.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=je.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(R,me,!1))},this.getSize=function(e){return e.set(R,me)},this.setSize=function(e,n,r=!0){if(it.isPresenting){H(`WebGLRenderer: Can't change size while VR device is presenting.`);return}R=e,me=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(R*he,me*he).floor()},this.setDrawingBufferSize=function(e,n,r){R=e,me=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(v===1009){U(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){H(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}P.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ue)},this.getViewport=function(e){return e.copy(ve)},this.setViewport=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),B.viewport(ue.copy(ve).multiplyScalar(he).round())},this.getScissor=function(e){return e.copy(ye)},this.setScissor=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),B.scissor(de.copy(ye).multiplyScalar(he).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(e){B.setScissorTest(be=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(I!==null){let t=I.texture.format;e=C.has(t)}if(e){let e=I.texture.type,t=w.has(e),n=Ke.getClearColor(),r=Ke.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,z.clearBufferuiv(z.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,z.clearBufferiv(z.COLOR,0,E))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ne=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Ke.dispose(),He.dispose(),Ue.dispose(),V.dispose(),Fe.dispose(),Re.dispose(),$e.dispose(),tt.dispose(),ze.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,pt),it.removeEventListener(`sessionend`,mt),ht.stop()};function at(e){e.preventDefault(),et(`WebGLRenderer: Context Lost.`),te=!0}function ot(){et(`WebGLRenderer: Context Restored.`),te=!1;let e=Ne.autoReset,t=Ge.enabled,n=Ge.autoUpdate,r=Ge.needsUpdate,i=Ge.type;nt(),Ne.autoReset=e,Ge.enabled=t,Ge.autoUpdate=n,Ge.needsUpdate=r,Ge.type=i}function st(e){U(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){ut(e),V.remove(e)}function ut(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){ze.releaseProgram(e)}),e.isShaderMaterial&&ze.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=De);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Tt(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Le.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;$e.setup(i,r,s,n,c);let h,g=Ye;if(c!==null&&(h=Ie.get(c),g=Xe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*ke()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*ke()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh)if(je.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ie.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function W(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,xt(e,t,n),e.side=0,e.needsUpdate=!0,xt(e,t,n),e.side=2):xt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),k=Ue.get(n),k.init(t),M.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];W(a,n,e),r.add(a)}else W(t,n,e),r.add(t)}),k=M.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){V.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}je.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new ps;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){dt=e,it.setAnimationLoop(e),e===null?ht.stop():ht.start()},it.addEventListener(`sessionstart`,pt),it.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){U(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;ne!==null&&ne.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=P!==null&&(I===null||n)&&P.begin(F,I);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(F,e,t,I),k=Ue.get(e,M.length),k.init(t),k.state.textureUnits=Pe.getTextureUnits(),M.push(k),we.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),xe.setFromProjectionMatrix(we,Je,t.reversedDepth),Ce=this.localClippingEnabled,Se=We.init(this.clippingPlanes,Ce),O=He.get(e,A.length),O.init(),A.push(O),it.enabled===!0&&it.isPresenting===!0){let e=F.xr.getDepthSensingMesh();e!==null&&gt(e,t,-1/0,F.sortObjects)}gt(e,t,0,F.sortObjects),O.finish(),F.sortObjects===!0&&O.sort(ge,_e,t.reversedDepth),Oe=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Oe&&Ke.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Se===!0&&We.beginShadows();let i=k.state.shadowsArray;if(Ge.render(i,e,t),Se===!0&&We.endShadows(),(r&&P.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];vt(n,r,e,a)}Oe&&Ke.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];_t(O,e,n,n.viewport)}}else r.length>0&&vt(n,r,e,t),Oe&&Ke.render(e),_t(O,e,t)}I!==null&&se===0&&(Pe.updateMultisampleRenderTarget(I),Pe.updateRenderTargetMipmap(I)),r&&P.end(F),e.isScene===!0&&e.onAfterRender(F,e,t),$e.resetDefaultState(),ce=-1,le=null,M.pop(),M.length>0?(k=M[M.length-1],Pe.setTextureUnits(k.state.textureUnits),Se===!0&&We.setGlobalState(F.clippingPlanes,k.state.camera)):k=null,A.pop(),O=A.length>0?A[A.length-1]:null,ne!==null&&ne.renderEnd()};function gt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||xe.intersectsSprite(e)){r&&Ee.setFromMatrixPosition(e.matrixWorld).applyMatrix4(we);let t=Re.update(e),i=e.material;i.visible&&O.push(e,t,i,n,Ee.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||xe.intersectsObject(e))){let t=Re.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Ee.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ee.copy(e.boundingSphere.center)),Ee.applyMatrix4(e.matrixWorld).applyMatrix4(we)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&O.push(e,t,s,n,Ee.z,o)}}else i.visible&&O.push(e,t,i,n,Ee.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)gt(i[e],t,n,r)}function _t(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Se===!0&&We.setGlobalState(F.clippingPlanes,n),r&&B.viewport(ue.copy(r)),i.length>0&&yt(i,t,n),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function vt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=je.has(`EXT_color_buffer_half_float`)||je.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Qt(1,1,{generateMipmaps:!0,type:e?y:f,minFilter:d,samples:Math.max(4,Me.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||ue;a.setSize(o.z*F.transmissionResolutionScale,o.w*F.transmissionResolutionScale);let s=F.getRenderTarget(),c=F.getActiveCubeFace(),l=F.getActiveMipmapLevel();F.setRenderTarget(a),F.getClearColor(pe),L=F.getClearAlpha(),L<1&&F.setClearColor(16777215,.5),F.clear(),Oe&&Ke.render(n);let u=F.toneMapping;F.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Se===!0&&We.setGlobalState(F.clippingPlanes,r),yt(e,n,r),Pe.updateMultisampleRenderTarget(a),Pe.updateRenderTargetMipmap(a),je.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,bt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Pe.updateMultisampleRenderTarget(a),Pe.updateRenderTargetMipmap(a))}F.setRenderTarget(s,c,l),F.setClearColor(pe,L),p!==void 0&&(r.viewport=p),F.toneMapping=u}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&bt(o,t,n,s,l,c)}}function bt(e,t,n,r,i,a){e.onBeforeRender(F,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(F,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=2):F.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(F,t,n,r,i,a)}function xt(e,t,n){t.isScene!==!0&&(t=De);let r=V.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=ze.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=ze.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Fe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ct(e,s),d}else s.uniforms=ze.getUniforms(e),ne!==null&&e.isNodeMaterial&&ne.build(e,n,s),e.onBeforeCompile(s,F),d=ze.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=We.uniform),Ct(e,s),r.needsLights=Dt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function St(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=sl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ct(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function wt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Tt(e,t,n,r,i){t.isScene!==!0&&(t=De),Pe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=I===null?F.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:zt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Fe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(h=F.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=V.get(r),y=k.state.lights;if(Se===!0&&(Ce===!0||e!==le)){let t=e===le&&r.id===ce;We.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==We.numPlanes||v.numIntersection!==We.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=xt(r,t,i),ne&&r.isNodeMaterial&&ne.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(B.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ce&&(ce=r.id,C=!0),v.needsLights){let e=wt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||le!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(z,`projectionMatrix`,e.projectionMatrix),T.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(z,Te.setFromMatrixPosition(e.matrixWorld)),Me.logarithmicDepthBuffer&&T.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(z,`directionalShadowMap`,y.state.directionalShadowMap,Pe),y.state.spotShadowMap.length>0&&T.setValue(z,`spotShadowMap`,y.state.spotShadowMap,Pe),y.state.pointShadowMap.length>0&&T.setValue(z,`pointShadowMap`,y.state.pointShadowMap,Pe)),i.isSkinnedMesh){T.setOptional(z,i,`bindMatrix`),T.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(z,`boneTexture`,e.boneTexture,Pe))}i.isBatchedMesh&&(T.setOptional(z,i,`batchingTexture`),T.setValue(z,`batchingTexture`,i._matricesTexture,Pe),T.setOptional(z,i,`batchingIdTexture`),T.setValue(z,`batchingIdTexture`,i._indirectTexture,Pe),T.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(z,`batchingColorTexture`,i._colorsTexture,Pe));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&qe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Ou()),C){if(T.setValue(z,`toneMappingExposure`,F.toneMappingExposure),v.needsLights&&Et(E,w),a&&r.fog===!0&&Be.refreshFogUniforms(E,a),Be.refreshMaterialUniforms(E,r,he,me,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}sl.upload(z,St(v),E,Pe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(sl.upload(z,St(v),E,Pe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(z,`center`,i.center),T.setValue(z,`modelViewMatrix`,i.modelViewMatrix),T.setValue(z,`normalMatrix`,i.normalMatrix),T.setValue(z,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,x),tt.bind(n,x)}}return x}function Et(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){I=e,oe=t,se=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest,B.viewport(ue),B.scissor(de),B.setScissorTest(fe),ce=-1;return}if(o.__webglFramebuffer===void 0)Pe.setupRenderTarget(e);else if(o.__hasExternalTextures)Pe.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Pe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Pe.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest}else ue.copy(ve).multiplyScalar(he).floor(),de.copy(ye).multiplyScalar(he).floor(),fe=be;if(n!==0&&(r=re),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(ue),B.scissor(de),B.setScissorTest(fe),i){let r=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}ce=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){B.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s),!Me.textureFormatReadable(c)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Me.textureTypeReadable(l)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,Ze.convert(c),Ze.convert(l),a)}finally{let e=I===null?null:V.get(I).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s),!Me.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Me.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,d),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,Ze.convert(l),Ze.convert(u),0);let f=I===null?null:V.get(I).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,f);let p=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await rt(z,p,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,d),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.deleteBuffer(d),z.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Pe.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ze.convert(t.format),_=Ze.convert(t.type),v;t.isData3DTexture?(Pe.setTexture3D(t,0),v=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Pe.setTexture2DArray(t,0),v=z.TEXTURE_2D_ARRAY):(Pe.setTexture2D(t,0),v=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(z.UNPACK_ROW_LENGTH),b=B.getParameter(z.UNPACK_IMAGE_HEIGHT),x=B.getParameter(z.UNPACK_SKIP_PIXELS),S=B.getParameter(z.UNPACK_SKIP_ROWS),C=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,l),B.pixelStorei(z.UNPACK_SKIP_ROWS,u),B.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,o,s,f,p,o,s,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,ie),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),T?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?T?z.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(v,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,o,s,f,p,o,s,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(z.UNPACK_ROW_LENGTH,y),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(z.UNPACK_SKIP_PIXELS,x),B.pixelStorei(z.UNPACK_SKIP_ROWS,S),B.pixelStorei(z.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&z.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&Pe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Pe.setTextureCube(e,0):e.isData3DTexture?Pe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Pe.setTexture2DArray(e,0):Pe.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){oe=0,se=0,I=null,B.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}},Au={type:`change`},ju={type:`start`},Mu={type:`end`},Nu=new Wr,Pu=new Mi,Fu=Math.cos(70*G.DEG2RAD),Iu=new q,Lu=2*Math.PI,Ru={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zu=1e-6,Bu=class extends us{constructor(n,r=null){super(n,r),this.state=Ru.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new jt,this._lastTargetPosition=new q,this._quat=new jt().setFromUnitVectors(n.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ls,this._sphericalDelta=new ls,this._scale=1,this._panOffset=new q,this._rotateStart=new K,this._rotateEnd=new K,this._rotateDelta=new K,this._panStart=new K,this._panEnd=new K,this._panDelta=new K,this._dollyStart=new K,this._dollyEnd=new K,this._dollyDelta=new K,this._dollyDirection=new q,this._mouse=new K,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Hu.bind(this),this._onPointerDown=Vu.bind(this),this._onPointerUp=Uu.bind(this),this._onContextMenu=Xu.bind(this),this._onMouseWheel=Ku.bind(this),this._onKeyDown=qu.bind(this),this._onTouchStart=Ju.bind(this),this._onTouchMove=Yu.bind(this),this._onMouseDown=Wu.bind(this),this._onMouseMove=Gu.bind(this),this._interceptControlDown=Zu.bind(this),this._interceptControlUp=Qu.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=``}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Au),this.update(),this.state=Ru.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Iu.copy(t).sub(this.target),Iu.applyQuaternion(this._quat),this._spherical.setFromVector3(Iu),this.autoRotate&&this.state===Ru.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Lu:n>Math.PI&&(n-=Lu),r<-Math.PI?r+=Lu:r>Math.PI&&(r-=Lu),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Iu.setFromSpherical(this._spherical),Iu.applyQuaternion(this._quatInverse),t.copy(this.target).add(Iu),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Iu.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new q(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new q(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Iu.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Nu.origin.copy(this.object.position),Nu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nu.direction))<Fu?this.object.lookAt(this.target):(Pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nu.intersectPlane(Pu,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>zu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zu||this._lastTargetPosition.distanceToSquared(this.target)>zu?(this.dispatchEvent(Au),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Lu/60/60*this.autoRotateSpeed:Lu/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Iu.setFromMatrixColumn(t,0),Iu.multiplyScalar(-e),this._panOffset.add(Iu)}_panUp(e,t){this.screenSpacePanning===!0?Iu.setFromMatrixColumn(t,1):(Iu.setFromMatrixColumn(t,0),Iu.crossVectors(this.object.up,Iu)),Iu.multiplyScalar(e),this._panOffset.add(Iu)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Iu.copy(r).sub(this.target);let i=Iu.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Lu*this._rotateDelta.x/t.clientHeight),this._rotateUp(Lu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Lu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Lu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Lu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Lu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Lu*this._rotateDelta.x/t.clientHeight),this._rotateUp(Lu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new K,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Vu(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Hu(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Uu(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Mu),this.state=Ru.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Wu(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Ru.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Ru.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Ru.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Ru.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Ru.PAN}break;default:this.state=Ru.NONE}this.state!==Ru.NONE&&this.dispatchEvent(ju)}function Gu(e){switch(this.state){case Ru.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Ru.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Ru.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Ku(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Ru.NONE&&(e.preventDefault(),this.dispatchEvent(ju),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Mu))}function qu(e){this.enabled!==!1&&this._handleKeyDown(e)}function Ju(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Ru.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Ru.TOUCH_PAN;break;default:this.state=Ru.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Ru.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Ru.TOUCH_DOLLY_ROTATE;break;default:this.state=Ru.NONE}break;default:this.state=Ru.NONE}this.state!==Ru.NONE&&this.dispatchEvent(ju)}function Yu(e){switch(this._trackPointer(e),this.state){case Ru.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Ru.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Ru.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Ru.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Ru.NONE}}function Xu(e){this.enabled!==!1&&e.preventDefault()}function Zu(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Qu(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var $u=class extends Rn{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new ca;e.deleteAttribute(`uv`);let t=new Na({side:1}),n=new Na,r=new Mo(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new Z(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new Oi(e,n,6),o=new On;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new Z(e,ed(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new Z(e,ed(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new Z(e,ed(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new Z(e,ed(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Z(e,ed(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Z(e,ed(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ed(e){return new Fa({color:0,emissive:16777215,emissiveIntensity:e})}function td(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new jr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=nd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=nd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function nd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new _r(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function rd(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function id(e){let t=new Map,n=new Map,r=e.clone();return ad(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function ad(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)ad(e.children[r],t.children[r],n)}var od=class extends so{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new pd(e)}),this.register(function(e){return new md(e)}),this.register(function(e){return new Cd(e)}),this.register(function(e){return new wd(e)}),this.register(function(e){return new Td(e)}),this.register(function(e){return new gd(e)}),this.register(function(e){return new _d(e)}),this.register(function(e){return new vd(e)}),this.register(function(e){return new yd(e)}),this.register(function(e){return new fd(e)}),this.register(function(e){return new bd(e)}),this.register(function(e){return new hd(e)}),this.register(function(e){return new Sd(e)}),this.register(function(e){return new xd(e)}),this.register(function(e){return new ud(e)}),this.register(function(e){return new Ed(e,ld.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Ed(e,ld.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Dd(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=Io.extractUrlBase(e);a=Io.resolveURL(t,this.path)}else a=Io.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new uo(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(s.decode(new Uint8Array(e,0,4))===Od){try{a[ld.KHR_BINARY_GLTF]=new jd(e)}catch(e){r&&r(e);return}i=JSON.parse(a[ld.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e));else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new rf(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case ld.KHR_MATERIALS_UNLIT:a[t]=new dd;break;case ld.KHR_DRACO_MESH_COMPRESSION:a[t]=new Md(i,this.dracoLoader);break;case ld.KHR_TEXTURE_TRANSFORM:a[t]=new Nd;break;case ld.KHR_MESH_QUANTIZATION:a[t]=new Pd;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function sd(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function cd(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var ld={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},ud=class{constructor(e){this.parser=e,this.name=ld.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new Y(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],He);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new Fo(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new Mo(s),o.distance=c;break;case`spot`:o=new Ao(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),Yd(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},dd=class{constructor(){this.name=ld.KHR_MATERIALS_UNLIT}getMaterialType(){return Gr}extendParams(e,t,n){let r=[];e.color=new Y(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],He),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,Ve))}return Promise.all(r)}},fd=class{constructor(e){this.parser=e,this.name=ld.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=cd(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},pd=class{constructor(e){this.parser=e,this.name=ld.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return cd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=cd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new K(e,e)}return Promise.all(r)}},md=class{constructor(e){this.parser=e,this.name=ld.KHR_MATERIALS_DISPERSION}getMaterialType(e){return cd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=cd(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},hd=class{constructor(e){this.parser=e,this.name=ld.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return cd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=cd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},gd=class{constructor(e){this.parser=e,this.name=ld.KHR_MATERIALS_SHEEN}getMaterialType(e){return cd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=cd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new Y(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],He)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,Ve)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},_d=class{constructor(e){this.parser=e,this.name=ld.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return cd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=cd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},vd=class{constructor(e){this.parser=e,this.name=ld.KHR_MATERIALS_VOLUME}getMaterialType(e){return cd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=cd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new Y().setRGB(i[0],i[1],i[2],He),Promise.all(r)}},yd=class{constructor(e){this.parser=e,this.name=ld.KHR_MATERIALS_IOR}getMaterialType(e){return cd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=cd(this.parser,e,this.name);return n===null?Promise.resolve():(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3),Promise.resolve())}},bd=class{constructor(e){this.parser=e,this.name=ld.KHR_MATERIALS_SPECULAR}getMaterialType(e){return cd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=cd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new Y().setRGB(i[0],i[1],i[2],He),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,Ve)),Promise.all(r)}},xd=class{constructor(e){this.parser=e,this.name=ld.EXT_MATERIALS_BUMP}getMaterialType(e){return cd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=cd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},Sd=class{constructor(e){this.parser=e,this.name=ld.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return cd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=cd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},Cd=class{constructor(e){this.parser=e,this.name=ld.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},wd=class{constructor(e){this.parser=e,this.name=ld.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Td=class{constructor(e){this.parser=e,this.name=ld.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Ed=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},Dd=class{constructor(e){this.name=ld.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==Rd.TRIANGLES&&e.mode!==Rd.TRIANGLE_STRIP&&e.mode!==Rd.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new J,n=new q,a=new jt,s=new q(1,1,1),c=new Oi(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));for(let t in o)if(t===`_COLOR_0`){let e=o[t];c.instanceColor=new bi(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,o[t]);On.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},Od=`glTF`,kd=12,Ad={JSON:1313821514,BIN:5130562},jd=class{constructor(e){this.name=ld.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,kd),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Od)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-kd,i=new DataView(e,kd),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Ad.JSON){let r=new Uint8Array(e,kd+a,t);this.content=n.decode(r)}else if(r===Ad.BIN){let n=kd+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},Md=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=ld.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=Ud[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=Ud[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=zd[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,He,n)})})}},Nd=class{constructor(){this.name=ld.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0?e:(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0,e)}},Pd=class{constructor(){this.name=ld.KHR_MESH_QUANTIZATION}},Fd=class extends Ha{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},Id=new jt,Ld=class extends Fd{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return Id.fromArray(i).normalize().toArray(i),i}},Rd={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zd={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bd={9728:o,9729:l,9984:s,9985:u,9986:c,9987:d},Vd={33071:i,33648:a,10497:r},Hd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ud={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Wd={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},Gd={CUBICSPLINE:void 0,LINEAR:Ne,STEP:B},Kd={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function qd(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Na({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function Jd(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function Yd(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function Xd(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function Zd(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function Qd(e){let t,n=e.extensions&&e.extensions[ld.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+$d(n.attributes):e.indices+`:`+$d(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+$d(e.targets[n]);return t}function $d(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function ef(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function tf(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var nf=new J,rf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sd,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new mo(this.options.manager):new Ro(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new uo(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return Jd(i,a,r),Yd(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ld.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(Io.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=Hd[r.type],t=zd[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new _r(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=Hd[r.type],o=zd[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new Mr(f,u/s),t.cache.add(n,c)),p=new Pr(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new _r(f,a,d);if(r.sparse!==void 0){let t=Hd.SCALAR,n=zd[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new _r(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=Bd[n.magFilter]||1006,t.minFilter=Bd[n.minFilter]||1008,t.wrapS=Vd[n.wrapS]||1e3,t.wrapT=Vd[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new Yt(e);t.needsUpdate=!0,n(t)}),t.load(Io.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),Yd(e,a),e.userData.mimeType=a.mimeType||tf(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[ld.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[ld.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[ld.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Zi,Ir.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Li,Ir.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return Na}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[ld.KHR_MATERIALS_UNLIT]){let e=r[ld.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new Y(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],He),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,Ve)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||Kd.OPAQUE;if(l===Kd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Kd.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==Gr&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new K(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==Gr&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==Gr){let e=i.emissiveFactor;o.emissive=new Y().setRGB(e[0],e[1],e[2],He)}return i.emissiveTexture!==void 0&&a!==Gr&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,Ve)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),Yd(n,i),t.associations.set(n,{materials:e}),i.extensions&&Jd(r,n,i),n})}createUniqueName(e){let t=ts.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[ld.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return of(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=Qd(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[ld.KHR_DRACO_MESH_COMPRESSION]?i(o):of(new jr,o,t),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?qd(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===Rd.TRIANGLES||u.mode===Rd.TRIANGLE_STRIP||u.mode===Rd.TRIANGLE_FAN||u.mode===void 0)d=i.isSkinnedMesh===!0?new mi(l,f):new Z(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),u.mode===Rd.TRIANGLE_STRIP?d.geometry=rd(d.geometry,1):u.mode===Rd.TRIANGLE_FAN&&(d.geometry=rd(d.geometry,2));else if(u.mode===Rd.LINES)d=new Yi(l,f);else if(u.mode===Rd.LINE_STRIP)d=new Gi(l,f);else if(u.mode===Rd.LINE_LOOP)d=new Xi(l,f);else if(u.mode===Rd.POINTS)d=new na(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&Zd(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),Yd(d,i),u.extensions&&Jd(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&Jd(r,c[0],i),c[0];let l=new kn;i.extensions&&Jd(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new Oo(G.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new No(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yd(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new J;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new yi(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new to(i,void 0,l);return Yd(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,nf)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new q().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new hi:t.length>1?new kn:t.length===1?t[0]:new On,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),Yd(o,i),i.extensions&&Jd(n,o,i),i.matrix!==void 0){let e=new J;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new kn;n.name&&(i.name=r.createUniqueName(n.name)),Yd(i,n),n.extensions&&Jd(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(id(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof Ir||e instanceof Yt)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}Wd[i.path]===Wd.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(Wd[i.path]){case Wd.weights:l=Xa;break;case Wd.rotation:l=Qa;break;case Wd.translation:case Wd.scale:l=eo;break;default:switch(n.itemSize){case 1:l=Xa;break;default:l=eo}}let u=r.interpolation===void 0?Ne:Gd[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+Wd[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=ef(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof Qa?Ld:Fd)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function af(e,t,n){let r=t.attributes,i=new $n;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new q(t[0],t[1],t[2]),new q(a[0],a[1],a[2])),e.normalized){let t=ef(zd[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new q,t=new q;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=ef(zd[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new Cr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function of(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=Ud[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return zt.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${zt.workingColorSpace}" not supported.`),Yd(e,t),af(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:Xd(e,t.targets,n)})}var sf={skater:`/sakura-slide/assets/models/skater_character_animated_v4.glb`,skateboard:`/sakura-slide/assets/models/skateboard.glb`,teaHouse:`/sakura-slide/assets/models/tea_house.glb`,shop:`/sakura-slide/assets/models/village_shop.glb`,teaInterior:`/sakura-slide/assets/models/tea_house_interior.glb`,shopInterior:`/sakura-slide/assets/models/shop_interior.glb`,villageHouse:`/sakura-slide/assets/models/village_house.glb`,sakuraTree:`/sakura-slide/assets/models/sakura_tree.glb`,cedarTree:`/sakura-slide/assets/models/cedar_tree.glb`,camphorTree:`/sakura-slide/assets/models/painterly_camphor_tree.glb`,bush:`/sakura-slide/assets/models/flowering_bush.glb`,flowers:`/sakura-slide/assets/models/wildflower_cluster.glb`,villagerIndigo:`/sakura-slide/assets/models/villager_indigo.glb`,villagerOchre:`/sakura-slide/assets/models/villager_ochre.glb`,cat:`/sakura-slide/assets/models/village_cat.glb`,dog:`/sakura-slide/assets/models/village_dog.glb`,car:`/sakura-slide/assets/models/tiny_village_car.glb`,torii:`/sakura-slide/assets/models/torii_shrine.glb`,bridge:`/sakura-slide/assets/models/wooden_bridge.glb`,guardrail:`/sakura-slide/assets/models/weathered_guardrail.glb`,groundcover:`/sakura-slide/assets/models/dense_roadside_groundcover.glb`,utilityPole:`/sakura-slide/assets/models/japanese_utility_pole.glb`,irrigationChannel:`/sakura-slide/assets/models/stone_irrigation_channel.glb`,produceStall:`/sakura-slide/assets/models/village_produce_stall.glb`,shrineCorner:`/sakura-slide/assets/models/roadside_shrine_corner.glb`,cedarForestCluster:`/sakura-slide/assets/models/dense_cedar_forest_cluster.glb`,springForestCluster:`/sakura-slide/assets/models/mixed_spring_forest_cluster.glb`,coin:`/sakura-slide/assets/models/japanese_gold_coin.glb`,fallenCedarBranch:`/sakura-slide/assets/models/fallen_cedar_branch.glb`,mossyRoadRock:`/sakura-slide/assets/models/mossy_road_rock_cluster.glb`,roadsideBuddha:`/sakura-slide/assets/models/roadside/seated_buddha_figure.glb`,roadsideShrine:`/sakura-slide/assets/models/roadside/wooden_forest_shrine.glb`,roadsideTreeLowPoly:`/sakura-slide/assets/models/roadside/stylized_low_poly_tree.glb`,roadsideTreeGreen:`/sakura-slide/assets/models/roadside/stylized_green_tree.glb`},cf=new class{loader=new od;cache=new Map;textureLimit=1/0;resizedTextureImages=0;estimatedDecodedBytesSaved=0;setTextureLimit(e){let t=Number.isFinite(e)?Math.max(256,Math.floor(e)):1/0;t>=this.textureLimit||(this.textureLimit=t,this.cache.forEach(e=>{e.then(e=>this.resizeTextures(e.scene))}))}getTextureDiagnostics(){return{maximumDimension:Number.isFinite(this.textureLimit)?this.textureLimit:`original`,resizedTextureImages:this.resizedTextureImages,estimatedDecodedBytesSaved:this.estimatedDecodedBytesSaved}}resizeTextures(e){if(!Number.isFinite(this.textureLimit))return;let t=new Set;e.traverse(e=>{e instanceof Z&&(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{Object.values(e).forEach(e=>{e instanceof Yt&&t.add(e)})})});let n=new Map;t.forEach(e=>{let t=e.image;if(!t)return;let r=t.naturalWidth??t.width??0,i=t.naturalHeight??t.height??0,a=Math.max(r,i);if(a<=this.textureLimit||r<=0||i<=0)return;let o=n.get(t);if(!o){let e=this.textureLimit/a;o=document.createElement(`canvas`),o.width=Math.max(1,Math.round(r*e)),o.height=Math.max(1,Math.round(i*e));let s=o.getContext(`2d`,{alpha:!0});if(!s)return;s.drawImage(t,0,0,o.width,o.height),n.set(t,o),this.resizedTextureImages+=1,this.estimatedDecodedBytesSaved+=(r*i-o.width*o.height)*4}e.image=o,e.needsUpdate=!0}),n.forEach((e,t)=>{t.close?.()})}preload(e){return Promise.all(e.map(e=>this.load(e)))}async load(e){let t=this.cache.get(e);if(t)return t;let n=this.loader.loadAsync(sf[e]).then(e=>{this.resizeTextures(e.scene);let t=!1;e.scene.traverse(e=>{t||=e instanceof mi,e instanceof Z&&(e.castShadow=!0,e.receiveShadow=!0,e.frustumCulled=!0)}),e.scene.updateMatrixWorld(!0);let n=new $n().setFromObject(e.scene),r=n.getSize(new q);return{scene:e.scene,animations:e.animations,rigged:t,bounds:n,size:r}});return this.cache.set(e,n),n}async instance(e,t={}){let n=await this.load(e),r=new kn;r.name=`${e}-mesh`;let i=n.rigged?id(n.scene):n.scene.clone(!0);r.add(i);let a=[t.height&&n.size.y>0?t.height/n.size.y:void 0,t.width&&n.size.x>0?t.width/n.size.x:void 0,t.depth&&n.size.z>0?t.depth/n.size.z:void 0].filter(e=>e!==void 0&&Number.isFinite(e)),o=a.length?Math.min(...a):1;i.scale.set(o*(t.scaleX??1),o*(t.scaleY??1),o*(t.scaleZ??1));let s=t.rotationY??0;i.rotation.y=s;let c=n.bounds.getCenter(new q).multiply(i.scale).applyAxisAngle(new q(0,1,0),s);return i.position.x-=c.x,i.position.z-=c.z,i.position.y-=n.bounds.min.y*i.scale.y,{root:r,animations:n.animations}}async instanced(e,t,n={}){let r=await this.load(e);r.scene.updateMatrixWorld(!0);let i=[n.height&&r.size.y>0?n.height/r.size.y:void 0,n.width&&r.size.x>0?n.width/r.size.x:void 0,n.depth&&r.size.z>0?n.depth/r.size.z:void 0].filter(e=>e!==void 0&&Number.isFinite(e)),a=i.length?Math.min(...i):1,o=n.rotationY??0,s=new jt().setFromAxisAngle(new q(0,1,0),o),c=new q(a*(n.scaleX??1),a*(n.scaleY??1),a*(n.scaleZ??1)),l=r.bounds.getCenter(new q).multiply(c).applyQuaternion(s),u=new q(-l.x,-r.bounds.min.y*c.y,-l.z),d=new J().compose(u,s,c),f=new kn;f.name=`${e}-instances`;let p=[];r.scene.traverse(n=>{if(!(n instanceof Z))return;let r=new Oi(n.geometry,n.material,t);r.name=`${e}-instance-part`,r.instanceMatrix.setUsage(qe),r.castShadow=n.castShadow,r.receiveShadow=n.receiveShadow,r.frustumCulled=!0,p.push({mesh:r,localMatrix:d.clone().multiply(n.matrixWorld)}),f.add(r)});let m=new J;return{root:f,meshes:p.map(({mesh:e})=>e),setMatrixAt:(e,t)=>{p.forEach(({mesh:n,localMatrix:r})=>n.setMatrixAt(e,m.multiplyMatrices(t,r)))},commit:(e=!1)=>{p.forEach(({mesh:t})=>{t.instanceMatrix.needsUpdate=!0,e&&t.computeBoundingSphere()})}}}};function lf(e,t){let n=t.map.image,r=new ya(n.width/n.height,1).translate(0,.5,0),i=r.clone().rotateY(Math.PI/2),a=td([r,i]);r.dispose(),i.dispose();let o=Array.from(a.index.array);for(let e=o.length-3;e>=0;e-=3)o.push(o[e+2],o[e+1],o[e]);a.setIndex(o);let s=a.getAttribute(`position`),c=a.getAttribute(`normal`),l=[];for(let e=0;e<s.count;e+=1){c.setXYZ(e,0,1,0);let t=.62+s.getY(e)*.38;l.push(t,t,t)}a.setAttribute(`color`,new X(l,3));let u=new Oi(a,t,e.length);u.receiveShadow=!0;let d=new On,f=new q(0,1,0),p=new jt;return e.forEach((e,t)=>{d.position.set(e.x,e.y,e.z),p.setFromAxisAngle(f,e.rotation),d.quaternion.copy(p),e.normal&&d.quaternion.setFromUnitVectors(f,e.normal).multiply(p),d.scale.setScalar(e.height),d.updateMatrix(),u.setMatrixAt(t,d.matrix)}),u.instanceMatrix.needsUpdate=!0,u.computeBoundingBox(),u.computeBoundingSphere(),u}var uf=[{id:`aoi-flowers`,npcId:`aoi`,title:`Flowers for the tea room`,itemName:`Wildflower bunches`,itemKind:`flowers`,route:`sakura-ridge`,required:3,fractions:[.14,.46,.8,.29,.6,.91],reward:40,request:`The tea room could use some fresh flowers. Could you bring me three bunches from Sakura Ridge? I'll put aside 40 coins for you.`,thanks:`Just right for the window table. Thank you! Here are your 40 coins.`},{id:`haru-kindling`,npcId:`haru`,title:`Kindling for the shop`,itemName:`Cedar twig bundles`,itemKind:`branches`,route:`cedar-stream`,required:2,fractions:[.16,.56,.34,.84],reward:35,request:`My little stove is nearly out of kindling. Bring back two bundles of fallen cedar twigs from Cedar Stream and I'll pay you 35 coins.`,thanks:`That will keep the shop warm this evening. You've earned 35 coins.`},{id:`nori-flowers`,npcId:`nori`,title:`A brighter market stall`,itemName:`Wildflower bunches`,itemKind:`flowers`,route:`sakura-ridge`,required:2,fractions:[.23,.59,.4,.85],reward:30,request:`I'd like some flowers beside the fruit baskets. Two bunches from Sakura Ridge would do. There's 30 coins in it for you.`,thanks:`Much better. The stall needed a little color. Here are 30 coins.`},{id:`emi-flowers`,npcId:`emi`,title:`Mountain flowers for the garden`,itemName:`Wildflower bunches`,itemKind:`flowers`,route:`sakura-ridge`,required:3,fractions:[.38,.64,.91,.18,.49,.77],reward:45,request:`I'm comparing the flowers up on Sakura Ridge with the ones here. Could you collect three bunches? I'll give you 45 coins for the trip.`,thanks:`Look at those petals. These are exactly what I needed. Your 45 coins, as promised.`},{id:`kiyo-wood`,npcId:`kiyo`,title:`Wood for a small project`,itemName:`Cedar twig bundles`,itemKind:`branches`,route:`cedar-stream`,required:3,fractions:[.25,.46,.83,.15,.59,.92],reward:50,request:`I'm making a little model of the bridge. Three bundles of fallen twigs from Cedar Stream should be enough. I'll pay you 50 coins.`,thanks:`Good, straight pieces. I can get started now. Take these 50 coins.`},{id:`yui-stones`,npcId:`yui`,title:`Stones for the pottery bench`,itemName:`Smooth stone sets`,itemKind:`stones`,route:`hairpin-pass`,required:3,fractions:[.15,.45,.8,.3,.61,.91],reward:50,request:`I use smooth stones to polish my pots. Could you find three small sets on Hairpin Pass? I'll trade you 50 coins.`,thanks:`These will leave a lovely finish. Thank you. Here are 50 coins.`},{id:`ren-stones`,npcId:`ren`,title:`A pair of doorstops`,itemName:`Smooth stone sets`,itemKind:`stones`,route:`hairpin-pass`,required:2,fractions:[.24,.57,.4,.86],reward:30,request:`The wind keeps shutting my garden doors. Bring me two small sets of stones from Hairpin Pass and I'll give you 30 coins.`,thanks:`Those doors won't be going anywhere now. Here's your 30 coins.`},{id:`yuna-wood`,npcId:`yuna`,title:`Markers for the orchard`,itemName:`Cedar twig bundles`,itemKind:`branches`,route:`cedar-stream`,required:2,fractions:[.4,.76,.21,.59],reward:35,request:`I need markers for the new orchard beds. Could you bring two bundles of cedar twigs from Cedar Stream? I can pay 35 coins.`,thanks:`Now I can keep the new beds straight. Thanks for the help. Here are 35 coins.`},{id:`taro-stones`,npcId:`taro`,title:`Weights for the market signs`,itemName:`Smooth stone sets`,itemKind:`stones`,route:`hairpin-pass`,required:2,fractions:[.4,.91,.22,.67],reward:35,request:`Our paper signs keep blowing away. Two small sets of stones from Hairpin Pass would hold them down. I'll have 35 coins ready.`,thanks:`No more chasing signs through the square. You've earned these 35 coins.`},{id:`sora-flowers`,npcId:`sora`,title:`Flowers for the shrine`,itemName:`Wildflower bunches`,itemKind:`flowers`,route:`sakura-ridge`,required:2,fractions:[.53,.75,.28,.9],reward:35,request:`Would you bring two bunches of wildflowers from Sakura Ridge for the shrine? I'll thank you with 35 coins.`,thanks:`I'll arrange these by the entrance. Thank you for bringing them home. Here are 35 coins.`}],df=`sakura-player-v1`;function ff(e,t){let n=e.quests[t.id];return n?n.delivered?`completed`:n.collected.length>=t.required&&!n.collected.some(e=>(n.unsecured?.[e]??0)>0)?`ready`:`active`:`available`}function pf(e,t){return!uf.some(e=>e.id===t)||e.quests[t]?!1:(e.quests[t]={collected:[],delivered:!1},!0)}function mf(e,t,n,r){let i=uf.find(e=>e.id===t),a=e.quests[t];return!i||i.route!==r||!a||a.delivered||!Number.isInteger(n)||n<0||n>=i.fractions.length||a.collected.length>=i.required||a.collected.includes(n)?!1:(a.collected.push(n),a.unsecured??={},a.unsecured[n]=3,!0)}function hf(e,t){let n=0;for(let r of uf){let i=e.quests[r.id];if(!i?.unsecured)continue;let a=!1;for(let e in i.unsecured){let r=Number(e),o=i.unsecured[r]-t;o>0?(i.unsecured[r]=o,a=!0):(delete i.unsecured[r],n+=1)}a||delete i.unsecured}return n}function gf(e){let t=0;for(let n of uf){let r=e.quests[n.id];if(!r?.unsecured||r.delivered)continue;let i=r.collected.filter(e=>(r.unsecured?.[e]??0)<=0);t+=r.collected.length-i.length,r.collected=i,delete r.unsecured}return t}function _f(e,t,n){let r=uf.find(e=>e.id===t);return!r||r.npcId!==n||ff(e,r)!==`ready`?0:(e.quests[t]={collected:[],delivered:!0},e.coins+=r.reward,r.reward)}function vf(e){let t={coins:0,quests:{}};if(!e)return t;try{let n=JSON.parse(e);if(!n||typeof n!=`object`||(Number.isSafeInteger(n.coins)&&n.coins>=0&&(t.coins=n.coins),!n.quests||typeof n.quests!=`object`))return t;for(let e of uf){let r=n.quests[e.id];if(!r||typeof r!=`object`||!Array.isArray(r.collected))continue;let i=r.collected.filter(t=>typeof t==`number`&&Number.isInteger(t)&&t>=0&&t<e.fractions.length);t.quests[e.id]={collected:r.delivered===!0?[]:[...new Set(i)].slice(0,e.required),delivered:r.delivered===!0}}}catch{}return t}function yf(){try{return vf(localStorage.getItem(df))}catch{return vf(null)}}function bf(e){try{let t={};for(let n of uf){let r=e.quests[n.id];r&&(t[n.id]={collected:r.collected.filter(e=>(r.unsecured?.[e]??0)<=0),delivered:r.delivered})}return localStorage.setItem(df,JSON.stringify({coins:e.coins,quests:t})),!0}catch{return!1}}function xf(e,t,n,r,i){if(n<t)return!1;let a=n-t,o=i-r,s=a*a+o*o,c=s>0?Math.max(0,Math.min(1,((e.distance-t)*a+(e.lateral-r)*o)/s)):0;return Math.hypot(e.distance-t-a*c,e.lateral-r-o*c)<=.65}var Sf=.01,Cf=.0805,wf=.052500000000000005,Tf=Cf,Ef={x:0,z:1054},Df={south:{id:`south`,position:{x:-12,z:991},inward:{x:.18,z:.984}},north:{id:`north`,position:{x:10,z:1117},inward:{x:-.08,z:-.997}},east:{id:`east`,position:{x:38,z:1060},inward:{x:-.992,z:.124}},west:{id:`west`,position:{x:-38,z:1078},inward:{x:1,z:0}}},Of={minX:-52,maxX:51,minZ:983,maxZ:1125},kf={x:0,z:1007,halfWidth:2.1,halfLength:4.45},Af={x:-3.8,z:1039,heading:.16},jf=G.clamp,Mf=G.smoothstep;function Nf(){let e=[{id:`south-entry`,halfWidth:2.9,entry:`south`,points:[[-12,107],[-10.74,113.89],[-4.5,117],[0,119],[0,123],[0,128],[0,134]]},{id:`market-street`,halfWidth:2.9,points:[[0,129],[-.6,136],[-3.8,151],[-3,159],[0,168],[4,178],[4.7,189],[1,202],[1,210],[4,216]]},{id:`north-entry`,halfWidth:2.9,entry:`north`,points:[[10,233],[9.36,225.02],[5.5,218.5],[1.6,212],[1,205]]},{id:`east-entry`,halfWidth:2.8,entry:`east`,points:[[38,176],[30.064,176.992],[22,180],[13,181],[4,178]]},{id:`garden-lane`,halfWidth:1.95,points:[[-2.2,142],[-12,141],[-23,151],[-27,164],[-26,180],[-21,197],[-12,205],[1,204]]},{id:`orchard-lane`,halfWidth:1.85,points:[[-.3,167],[12,158],[24,152],[31,159],[30,171],[26,183],[26,198],[19,211],[5,218]]},{id:`market-lane`,halfWidth:2.1,points:[[-26.5,176],[-19,179],[-10,180],[-2,177.5],[4,178]]},{id:`shrine-path`,halfWidth:1.15,points:[[22,207],[28,211],[31,219]]}],t=(e,t,n,r)=>{let i=new va(t.map(([e,t])=>new q(e,0,t+884)),!1,`centripetal`);i.arcLengthDivisions=600;let a=i.getLength(),o=Math.max(16,Math.ceil(a/.65)),s=i.getSpacedPoints(o).map((t,s)=>{let c=i.getTangentAt(s/o).setY(0).normalize(),l=a*s/o,u=n;return r&&(u=G.lerp(4,n,Mf(l,0,15))),e===`south-entry`&&(u=G.lerp(2.04,u,Mf(Math.abs(t.z-kf.z),4.5,9))),e===`stream`&&(u+=(Math.sin(l*.085)*.28+Math.sin(l*.21)*.12)*Mf(Math.abs(t.x-kf.x),6,16)),{x:t.x,z:t.z,rightX:c.z,rightZ:-c.x,halfWidth:u,distance:l}});if(r){let e=Df[r],t=Math.hypot(e.inward.x,e.inward.z),n=e.inward.z/t,i=-e.inward.x/t;Object.assign(s[0],{rightX:n,rightZ:i,halfWidth:4}),s.unshift({...s[0],x:e.position.x-e.inward.x/t*.35,z:e.position.z-e.inward.z/t*.35,distance:-.35})}return{id:e,samples:s,length:a}};return{roads:Object.fromEntries(e.map(e=>[e.id,t(e.id,e.points,e.halfWidth,e.entry)])),stream:t(`stream`,[[-74,112],[-56,115],[-37,118],[-19,121],[0,123],[17,121],[33,124],[48,131],[66,143],[78,148]],2.15)}}function Pf(e,t,n){let r=1/0,i=0,a=0,o=0,s=0,c=0,l=0,u=e.samples;for(let e=0;e<u.length-1;e+=1){let d=u[e],f=u[e+1],p=f.x-d.x,m=f.z-d.z,h=p*p+m*m,g=jf(((t-d.x)*p+(n-d.z)*m)/Math.max(1e-5,h),0,1),_=d.x+p*g,v=d.z+m*g,y=(t-_)**2+(n-v)**2;if(y>=r)continue;r=y,i=_,a=v,o=G.lerp(d.distance,f.distance,g),s=G.lerp(d.halfWidth,f.halfWidth,g);let b=Math.sqrt(h)||1;c=m/b,l=-p/b}return{x:i,z:a,distance:Math.sqrt(r),along:o,halfWidth:s,rightX:c,rightZ:l}}function Ff(e,t,n){let r=Pf(e.roads[`market-street`],t,n);for(let i of Object.values(e.roads)){let e=Pf(i,t,n);e.distance-e.halfWidth<r.distance-r.halfWidth&&(r=e)}return r}function If(e,t,n,r){let i=e.samples,a=0,o=i.length-1,s=jf(t,0,e.length);for(;o-a>1;){let e=a+o>>1;i[e].distance<s?a=e:o=e}let c=i[a],l=i[o],u=jf((s-c.distance)/Math.max(1e-5,l.distance-c.distance),0,1),d=G.lerp(c.rightX,l.rightX,u),f=G.lerp(c.rightZ,l.rightZ,u);return r.set(G.lerp(c.x,l.x,u)+d*n,Cf,G.lerp(c.z,l.z,u)+f*n),Math.atan2(-f,d)}function Lf(e,t,n){let r=Pf(e.stream,t,n),i=Mf(r.distance,r.halfWidth-.55,r.halfWidth+1.95);return G.lerp(-.72,Sf,i)}function Rf(e,t){return e>=Of.minX&&e<=Of.maxX&&t>=Of.minZ&&t<=Of.maxZ}function zf(e,t){let n=t-884;return n<132?`Stream bridge`:n>226?`North gate`:e>34&&n<188?`Cedar gate`:e>24&&n>207?`Shrine garden`:n>172&&n<186&&e>-17&&e<12?`Market square`:e<-15?`Garden lane`:e>16?`Orchard lane`:`Market street`}function Bf(e,t,n,r){let i=e-r.position.x,a=t-r.position.z;if(r.kind===`circle`)return i*i+a*a<(n+r.radius)**2;let o=Math.cos(r.rotation),s=Math.sin(r.rotation),c=o*i-s*a,l=s*i+o*a,u=Math.max(0,Math.abs(c)-r.halfX),d=Math.max(0,Math.abs(l)-r.halfZ);return u*u+d*d<n*n}function Vf(e,t,n,r,i,a){let o=e.x,s=e.z,c=Math.max(1,Math.ceil(Math.hypot(t,n)/.18));for(let o=0;o<c;o+=1){e.x+=t/c,e.z+=n/c;for(let t=0;t<3;t+=1)for(let t of i.colliders){if(t.id===a||!Bf(e.x,e.z,r,t))continue;let n=e.x-t.position.x,i=e.z-t.position.z;if(t.kind===`circle`){let a=Math.hypot(n,i),o=r+t.radius-a+1e-4;e.x+=(a>1e-5?n/a:1)*o,e.z+=(a>1e-5?i/a:0)*o;continue}let o=Math.cos(t.rotation),s=Math.sin(t.rotation),c=o*n-s*i,l=s*n+o*i,u=c-jf(c,-t.halfX,t.halfX),d=l-jf(l,-t.halfZ,t.halfZ),f=Math.hypot(u,d),p=r-f+1e-4;f>1e-5?(u/=f,d/=f):t.halfX-Math.abs(c)<t.halfZ-Math.abs(l)?(u=c<0?-1:1,d=0,p=t.halfX-Math.abs(c)+r+1e-4):(u=0,d=l<0?-1:1,p=t.halfZ-Math.abs(l)+r+1e-4),e.x+=(o*u+s*d)*p,e.z+=(-s*u+o*d)*p}if(!(Math.abs(e.x-kf.x)<kf.halfWidth&&Math.abs(e.z-kf.z)<kf.halfLength+.6)){let t=Pf(i.plan.stream,e.x,e.z),n=t.halfWidth+r+.35;if(t.distance<n){let r=Math.max(1e-5,t.distance);e.x+=(e.x-t.x)/r*(n-t.distance),e.z+=(e.z-t.z)/r*(n-t.distance)}}e.x=jf(e.x,Of.minX+r,Of.maxX-r),e.z=jf(e.z,Of.minZ+r,Of.maxZ-r)}return Math.hypot(e.x-o,e.z-s)}function Hf(e,t,n,r){let i=Math.max(1,Math.ceil(Math.hypot(t.x-e.x,t.z-e.z)/.3));for(let a=1;a<i;a+=1){let o=G.lerp(e.x,t.x,a/i),s=G.lerp(e.z,t.z,a/i);if(n.some(e=>e.id!==r&&Bf(o,s,.05,e)))return!1}return!0}async function Uf(){let e=new mo,[t,n,i]=await Promise.all([e.loadAsync(`/sakura-slide/assets/textures/painterly_meadow_ground.png`),e.loadAsync(`/sakura-slide/assets/textures/painterly_village_path.png`),e.loadAsync(`/sakura-slide/assets/textures/painterly_meadow_clump.png`)]);for(let e of[t,n,i])e.colorSpace=Ve,e.anisotropy=4;for(let e of[t,n])e.wrapS=e.wrapT=r;let a=new Na({name:`Painted sage meadow`,map:t,color:9087616,roughness:1,envMapIntensity:.45}),o=new Na({name:`Warm fine-gravel village paths`,map:n,color:10460049,roughness:1,envMapIntensity:.45,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),s=o.clone();s.name=`Broken meadow-to-gravel edges`,s.alphaTest=.35,s.polygonOffsetFactor=s.polygonOffsetUnits=-3;for(let e of[a,o,s]){let n=e===a,r=e===s;e.customProgramCacheKey=()=>e.name,e.onBeforeCompile=e=>{e.vertexShader=`varying vec2 vVillageUv;\n${e.vertexShader}`,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
vVillageUv = (modelMatrix * vec4(transformed, 1.0)).xz * 0.25;`),e.fragmentShader=`varying vec2 vVillageUv;\n${e.fragmentShader}`,(n||r)&&(e.fragmentShader=`
    vec3 sampleMeadow(sampler2D meadowMap, vec2 groundUv) {
      vec2 rotatedUv = mat2(0.8, -0.6, 0.6, 0.8) * groundUv * 0.61 + vec2(0.37, 0.19);
      vec3 detail = texture2D(meadowMap, groundUv).rgb;
      vec3 broad = texture2D(meadowMap, rotatedUv).rgb;
      float variation = sin(groundUv.x * 0.37 + sin(groundUv.y * 0.42) * 2.0) * cos(groundUv.y * 0.31);
      return mix(detail, broad, 0.55) * (0.95 + variation * 0.075);
    }
  \n${e.fragmentShader}`);let i=`
        vec4 sampledDiffuseColor = texture2D(map, vVillageUv);
        diffuseColor *= sampledDiffuseColor;
      `;n&&(i=`diffuseColor *= vec4(sampleMeadow(map, vVillageUv), 1.0);`),r&&(e.uniforms.uVillageMeadow={value:t},e.uniforms.uVillageMeadowTint={value:a.color},e.fragmentShader=`uniform sampler2D uVillageMeadow;\nuniform vec3 uVillageMeadowTint;\n${e.fragmentShader}`,i+=`
          float edge = abs(vMapUv.x - 0.5) * 2.0;
          float brokenEdge = edge + sin(vVillageUv.x * 23.0) * sin(vVillageUv.y * 19.0) * 0.035;
          vec3 meadowColor = sampleMeadow(uVillageMeadow, vVillageUv) * uVillageMeadowTint;
          diffuseColor.rgb = mix(diffuseColor.rgb, meadowColor, smoothstep(0.72, 0.97, brokenEdge));
          diffuseColor.a *= 1.0 - smoothstep(0.94, 1.02, brokenEdge);
        `),e.fragmentShader=e.fragmentShader.replace(`#include <map_fragment>`,i)}}return{ground:a,path:o,verge:s,meadow:new Na({name:`Painted meadow grass and wildflowers`,map:i,color:10007688,roughness:1,envMapIntensity:.45,alphaTest:.4,vertexColors:!0})}}function Wf(e,t,n,r,i,a){let o={high:.75,mobile:1,safe:1.7}[i],s=a.map.image,c=s.width/s.height,l=r.map(e=>{let n=Ff(t,e.x,e.z),r=e.x-n.x,i=e.z-n.z;return{x:n.x,z:n.z,dx:r,dz:i,lengthSquared:r*r+i*i}}),u=[];for(let e=990;e<1123;e+=o)for(let r=-49;r<49;r+=o){let i=Math.sin(r*127.1+e*311.7)*43758.5453,a=Math.sin(r*269.5+e*183.3)*43758.5453,s=i-Math.floor(i),d=a-Math.floor(a),f=r+(s-.5)*o*.85,p=e+(d-.5)*o*.85,m=Ff(t,f,p),h=m.distance-m.halfWidth,g=.42+s*.44,_=g*c*.5;if(h<.72+_)continue;let v=Math.sin(f*.23+Math.sin(p*.11)*2.4)*Math.cos(p*.19);if(h>5.5&&v<.34||h<=5.5&&d<.12||((f+1.4)/8.2)**2+((p-884-178)/6.3)**2<1)continue;let y=Pf(t.stream,f,p);y.distance<y.halfWidth+1.3+_||n.some(e=>Bf(f,p,_+.4,e))||l.some(e=>{let t=G.clamp(((f-e.x)*e.dx+(p-e.z)*e.dz)/Math.max(.01,e.lengthSquared),0,1);return Math.hypot(f-e.x-e.dx*t,p-e.z-e.dz*t)<1.25+_})||u.push({x:f,y:Lf(t,f,p)-.055,z:p,height:g,rotation:d*Math.PI})}let d=lf(u,a);d.name=`Hanasato meadow planting`,e.add(d)}var Gf={high:190,mobile:230,safe:280},Kf=[`sakura-ridge`,`hairpin-pass`,`cedar-stream`],qf=.095,Jf=12,Yf=240,Xf=200,Zf=.02,Qf=[{id:`maple-west`,name:`Maple Crown`,x:-430,z:690,height:200,radiusX:350,radiusZ:390},{id:`mist-north`,name:`Mist Peak`,x:-170,z:1530,height:200,radiusX:450,radiusZ:470},{id:`sunrise-east`,name:`Sunrise Peak`,x:420,z:1390,height:190,radiusX:370,radiusZ:380},{id:`cedar-south`,name:`Cedar Crown`,x:420,z:650,height:210,radiusX:370,radiusZ:420}],$f={"sakura-ridge":{name:`Sakura Ridge`,subtitle:`Open sky · broad ridge`,peakId:`maple-west`,entryId:`south`,halfWidth:2.65,controlPoints:[[-430,690],[-360,650],[-300,675],[-350,735],[-420,770],[-380,820],[-300,790],[-240,825],[-285,875],[-340,900],[-260,925],[-180,930],[-220,965],[-140,975],[-70,985],[-12,991]]},"hairpin-pass":{name:`Hairpin Pass`,subtitle:`Big switchbacks · northern pass`,peakId:`mist-north`,entryId:`north`,halfWidth:2.4,controlPoints:[[-170,1530],[-80,1605],[85,1570],[175,1515],[190,1450],[155,1400],[0,1370],[-155,1340],[-188,1288],[-150,1240],[-90,1228],[-64,1224],[-40,1213],[-19,1196],[-3,1173],[11,1146],[10,1117]]},"cedar-stream":{name:`Cedar Stream`,subtitle:`Rapid turns · eastern watershed`,peakId:`cedar-south`,entryId:`east`,halfWidth:2.5,controlPoints:[[420,650],[350,610],[300,650],[340,710],[420,750],[380,810],[300,785],[250,835],[300,885],[360,925],[300,970],[220,1e3],[150,1025],[90,1045],[38,1060]]}},ep=.08,tp=.14,np=.58,rp=.7,ip=15.5,ap=96,op=.7,sp=.95,cp=12.5,lp=4,up={"sakura-ridge":.3,"hairpin-pass":.24,"cedar-stream":.3},dp={"sakura-ridge":0,"hairpin-pass":0,"cedar-stream":0},fp={"sakura-ridge":.008,"hairpin-pass":.012,"cedar-stream":.01},pp=.45,mp=(e,t,n)=>Math.max(t,Math.min(n,e));function hp(e,t,n){let r=new Map;e.traverse(e=>{e instanceof hi&&r.set(e.name,{bone:e,position:e.position.clone(),quaternion:e.quaternion.clone()})});let i=new dn,a=new jt,o=(e,t,n,o)=>{let s=r.get(e);s&&(i.set(t,n,o),a.setFromEuler(i),s.bone.quaternion.multiply(a))},s=n%4,c=n%2==0?1:-1,l=.9+s*.045,u=.88+s*.08;return e=>{r.forEach(({bone:e,position:t,quaternion:n})=>{e.position.copy(t),e.quaternion.copy(n)});let n=e*l+t,i=(Math.sin(n*1.62)+Math.sin(n*3.24+.7)*.22)*u,a=(Math.sin(n*.56+.3)+Math.sin(n*.23+1.4)*.32)*u,d=(Math.sin(n*.31+s*.9)+Math.sin(n*.13+t)*.38)*c,f=Math.sin(n*(.82+s*.07)+1.1)*u,p=s===2?Math.sin(n*.48+2.2)*.012:0,m=s===1?f*.018:f*.008;o(`Hips`,i*.003,d*.005,a*.014),o(`Spine02`,i*.014,d*.007,-a*.011),o(`Spine01`,i*.01,d*.011,-a*.007),o(`Spine`,i*.006+p,d*.014,a*.005),o(`neck`,-i*.004,d*.032,-a*.007),o(`Head`,i*.002,d*.012,a*.004),o(`LeftShoulder`,p,0,i*-.004),o(`RightShoulder`,-p,0,i*.004),o(`LeftArm`,i*.004,0,.52+m),o(`RightArm`,i*-.004,0,-.52-m*.82),o(`LeftForeArm`,-.1+f*.006,0,0),o(`RightForeArm`,-.1-f*.005,0,0),o(`LeftUpLeg`,0,0,a*.004),o(`RightUpLeg`,0,0,-a*.004)}}function gp(e){let t=new Map;e.traverse(e=>{e instanceof hi&&t.set(e.name,e)});let n=new dn,r=new jt;return(e,i,a,o)=>{let s=t.get(e);s&&(n.set(i,a,o),r.setFromEuler(n),s.quaternion.multiply(r))}}var _p={"sakura-ridge":{turnouts:[{center:.2,length:42,side:-1,amount:.88},{center:.5,length:34,side:1,amount:.7},{center:.77,length:38,side:-1,amount:.62}],pinches:[{center:.3,length:74,side:1,amount:.38},{center:.63,length:58,side:-1,amount:.34},{center:.88,length:46,side:1,amount:.3}]},"cedar-stream":{turnouts:[{center:.18,length:38,side:1,amount:.78},{center:.48,length:44,side:-1,amount:.68},{center:.74,length:34,side:1,amount:.58}],pinches:[{center:.32,length:66,side:-1,amount:.36},{center:.61,length:52,side:1,amount:.32},{center:.85,length:48,side:-1,amount:.38}]},"hairpin-pass":{turnouts:[{center:.3,length:38,side:-1,amount:.62},{center:.5,length:38,side:1,amount:.62},{center:.7,length:38,side:-1,amount:.58}],pinches:[{center:.22,length:48,side:1,amount:.28},{center:.41,length:48,side:-1,amount:.3},{center:.6,length:48,side:1,amount:.3},{center:.79,length:48,side:-1,amount:.28}]}};function vp(e,t,n){let r=n.length*.5,i=Math.abs(e-t*n.center);if(i>=r)return 0;let a=i/r;return(.5+Math.cos(a*Math.PI)*.5)**2}function yp(e,t,n){let r=mp((n-e)/(t-e),0,1);return r*r*(3-2*r)}function bp(e,t,n){let r=mp((n-e)/(t-e),0,1);return r*r*r*(r*(r*6-15)+10)}function xp(e,t){let n=e-Ef.x,r=t-Ef.z,i=Math.hypot(n/360,r/440),a=yp(.18,.72,i),o=-1.2+yp(.2,.78,i)*18+yp(.62,1.55,i)*34,s=(Math.sin(e*.013+t*.008)*7+Math.cos(t*.012-e*.006)*5+Math.sin(e*.035+t*.027)*2.8)*a,c=Qf.reduce((n,r)=>{let i=(e-r.x)/r.radiusX,a=(t-r.z)/r.radiusZ;return Math.max(n,Math.exp(-(i*i+a*a)*1.5)*r.height)},0);return o+s+c*a}function Sp(e,t,n,r=0){let i=Math.max(.001,Math.hypot(e.tangent.x,e.tangent.z)),a=e.tangent.x/i,o=e.tangent.z/i,s=t-e.position.x,c=n-e.position.z,l=s*a+c*o,u=s*e.right.x+c*e.right.z,d=e.tangent.y/i;return e.position.y+l*d+u*e.bankSlope+r}function Cp(e,t,n=qf){return new q(e,xp(e,t)+n,t)}function wp(e,t,n,r,i){let a=e.map(e=>e.y),o=e=>{let t=e.map((t,n)=>{let r=n===0||n===e.length-1?1e6:1;return{start:n,end:n,weight:r,sum:t*r}});for(let e=1;e<t.length;e+=1)for(;e>0&&t[e-1].sum/t[e-1].weight<t[e].sum/t[e].weight;)t[e-1].end=t[e].end,t[e-1].sum+=t[e].sum,t[e-1].weight+=t[e].weight,t.splice(e,1),--e;let n=Array(e.length);return t.forEach(e=>{let t=e.sum/e.weight;for(let r=e.start;r<=e.end;r+=1)n[r]=t}),n},s=n>0?[...a]:o(a);for(let e=0;e<3;e+=1){let e=s.map((e,t)=>{if(t===0||t===s.length-1)return e;let n=0,r=0;for(let e=-6;e<=6;e+=1){let i=mp(t+e,0,s.length-1),a=7-Math.abs(e);n+=s[i]*a,r+=a}return n/r});e[0]=a[0],e[e.length-1]=Tf,s=n>0?e:o(e)}let c=e.slice(1).map((t,n)=>Math.hypot(t.x-e[n].x,t.z-e[n].z)),l=e=>{let n=bp(i,Math.max(i+1,c.length-1),e);return{minimum:G.lerp(r,0,n),maximum:G.lerp(t,Zf,n)}};for(let e=0;e<32;e+=1){for(let e=1;e<s.length-1;e+=1)s[e]=Math.min(s[e],a[e]+pp);s[0]=a[0];for(let e=1;e<s.length;e+=1){let t=e>=i?0:n,r=l(e-1);s[e]=Math.min(s[e],s[e-1]+t*c[e-1]),s[e]=Math.min(s[e],s[e-1]-r.minimum*c[e-1]),s[e]=Math.max(s[e],s[e-1]-r.maximum*c[e-1])}s[s.length-1]=Tf;for(let e=s.length-2;e>=0;--e){let t=e+1>=i?0:n,r=l(e);s[e]=Math.max(s[e],s[e+1]-t*c[e]),s[e]=Math.max(s[e],s[e+1]+r.minimum*c[e]),s[e]=Math.min(s[e],s[e+1]+r.maximum*c[e])}}let u=c.map((e,t)=>{let n=l(t);return mp((s[t]-s[t+1])/Math.max(.001,e),n.minimum,n.maximum)});for(let e=0;e<4;e+=1)u=u.map((e,t)=>{let n=0,r=0;for(let e=-9;e<=9;e+=1){let i=mp(t+e,0,u.length-1),a=10-Math.abs(e);n+=u[i]*a,r+=a}let i=l(t);return mp(n/r,i.minimum,i.maximum)});let d=a[0]-Tf;for(let e=0;e<64;e+=1){for(let e=1;e<u.length;e+=1){let t=.004*(c[e-1]+c[e])*.5,n=l(e);u[e]=mp(u[e],Math.max(n.minimum,u[e-1]-t),Math.min(n.maximum,u[e-1]+t))}for(let e=u.length-2;e>=0;--e){let t=.004*(c[e]+c[e+1])*.5,n=l(e);u[e]=mp(u[e],Math.max(n.minimum,u[e+1]-t),Math.min(n.maximum,u[e+1]+t))}let e=d-u.reduce((e,t,n)=>e+t*c[n],0);if(Math.abs(e)<1e-4)break;let t=u.reduce((t,n,r)=>{let i=l(r);return(e>0?n<i.maximum-1e-6:n>i.minimum+1e-6)?t+c[r]:t},0);if(t<=.001)break;let n=e/t;u=u.map((e,t)=>{let r=l(t);return mp(e+n,r.minimum,r.maximum)})}s[0]=a[0];for(let e=0;e<u.length;e+=1)s[e+1]=s[e]-u[e]*c[e];s[s.length-1]=Tf,e.forEach((e,t)=>{e.y=s[t]})}function Tp(e){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Ep(e){let t=$f[e],n=Df[t.entryId],r=new K(n.inward.x,n.inward.z).normalize(),i=t.halfWidth,a=new va(t.controlPoints.map(([e,n],r)=>Cp(e,n,r===t.controlPoints.length-1?.02:qf)),!1,`catmullrom`,.45),o=a.getLength(),s=Math.max(0,o-Yf),c=Math.ceil(o/1.8),l=[];for(let e=0;e<=c;e+=1){let t=e/c,n=a.getPointAt(t);l.push(n)}for(let e=0;e<3;e+=1){let e=l.map((e,t)=>{if(t===0||t===l.length-1)return e.clone();let n=0,r=0,i=0;for(let e=-6;e<=6;e+=1){let a=mp(t+e,0,l.length-1),o=7-Math.abs(e);n+=l[a].x*o,r+=l[a].z*o,i+=o}return new q(n/i,e.y,r/i)});l.forEach((t,n)=>{t.x=e[n].x,t.z=e[n].z})}let u=null;l.forEach((t,i)=>{let a=i/c*o,l=o-a,d=e===`hairpin-pass`?0:bp(s,o,a),f=n.position.x-r.x*l,p=n.position.z-r.y*l;t.x=G.lerp(t.x,f,d),t.z=G.lerp(t.z,p,d);let m=xp(t.x,t.z)+qf;if(a>=s){u??=m;let e=yp(s,o,a);t.y=G.lerp(u,Tf,e)}else t.y=m}),wp(l,up[e],dp[e],fp[e],Math.floor(s/o*c));let d=[];for(let e=0;e<=c;e+=1){let t=l[e],n=l[Math.max(0,e-1)],r=l[Math.min(c,e+1)].clone().sub(n).normalize(),a=new q(r.z,0,-r.x).normalize(),s=t.clone().addScaledVector(a,-i),u=t.clone().addScaledVector(a,i),f=(xp(u.x,u.z)-xp(s.x,s.z))/(i*2),p=e/c*o,m=yp(o-Xf,o,p);d.push({position:t,tangent:r,right:a,grade:-r.y,bankSlope:G.lerp(mp(f,-.08,ep),0,m),rawTerrainBankSlope:f})}let f=e=>{let t=mp(e/o,0,1)*c,n=Math.floor(t),r=Math.min(c,n+1),i=t-n,a=d[n],s=d[r],l=a.position.clone().lerp(s.position,i),u=a.tangent.clone().lerp(s.tangent,i).normalize();return{position:l,tangent:u,right:new q(u.z,0,-u.x).normalize(),grade:G.lerp(a.grade,s.grade,i),bankSlope:G.lerp(a.bankSlope,s.bankSlope,i),rawTerrainBankSlope:G.lerp(a.rawTerrainBankSlope,s.rawTerrainBankSlope,i)}};return{id:e,name:t.name,subtitle:t.subtitle,peakId:t.peakId,entryId:t.entryId,length:o,halfWidth:i,curve:a,samples:d,sampleAt:f,roadProfileAt:t=>{let n=mp(t,0,o),r=e===`sakura-ridge`?.7:e===`hairpin-pass`?3.35:2.15,a=f(n),s=f(Math.max(0,n-14)).tangent.clone().setY(0).normalize(),c=f(Math.min(o,n+14)).tangent.clone().setY(0).normalize(),l=s.z*c.x-s.x*c.z,u=mp(Math.abs(l)*3.2,0,1),d=i+Math.sin(n*.0065+r)*.18+Math.sin(n*.023+r*1.9)*.08+Math.sin(n*.091+.4)*.035,p=i+Math.sin(n*.0072+r+2.4)*.16+Math.sin(n*.019+r*.8)*.09+Math.sin(n*.083+1.8)*.04;l>0?(d+=u*.38,p+=u*.1):(p+=u*.38,d+=u*.1);let m=mp((Math.abs(a.rawTerrainBankSlope)-ep)/.34,0,1);a.rawTerrainBankSlope>0?p-=m*.24:d-=m*.24;let h=_p[e],g=0,_=0,v=0,y=0;for(let e of h.turnouts){let t=vp(n,o,e)*e.amount;e.side<0?g+=t:_+=t}for(let e of h.pinches){let t=vp(n,o,e)*e.amount;e.side<0?v+=t:y+=t}d=mp(d+g-v,1.95,3.65),p=mp(p+_-y,1.95,3.65);let b=.38+Math.sin(n*.011+r*1.3)*.16+Math.sin(n*.047+2.1)*.07+g*.22-v*.18,x=.34+Math.sin(n*.009+r+1.1)*.15+Math.sin(n*.053+.5)*.08+_*.22-y*.18;a.rawTerrainBankSlope>0?(x-=m*.15,b+=m*.11):(b-=m*.15,x+=m*.11);let S=yp(o-Xf,o,n);return{leftWidth:G.lerp(d,4,S),rightWidth:G.lerp(p,4,S),leftShoulder:G.lerp(mp(b,.1,.95),.65,S),rightShoulder:G.lerp(mp(x,.1,.95),.65,S)}},nearestAt:e=>{let t=0,n=1/0;return d.forEach((r,i)=>{let a=r.position.x-e.x,o=r.position.z-e.z,s=a*a+o*o;s>=n||(n=s,t=i)}),{distance:t/c*o,separation:Math.sqrt(n),sample:d[t]}}}}var Dp=new q;function Op(e,t,n,r,i){let a=e.roadProfileAt(n),o=mp(((r-t.position.x)*t.right.x+(i-t.position.z)*t.right.z+a.leftWidth)/Math.max(.1,a.leftWidth+a.rightWidth),0,1),s=e.id===`sakura-ridge`?.45:e.id===`hairpin-pass`?3.1:1.9,c=tp+(Math.sin(n*.008+s)*.5+.5)*.1,l=tp+(Math.sin(n*.0067+s+2.2)*.5+.5)*.1,u=np-(Math.sin(n*.0049+.8)*.5+.5)*.14,d=np-(Math.sin(n*.0056+2.7)*.5+.5)*.14,f=G.lerp(c,l,o),p=G.lerp(u,d,o);return mp(Sp(t,r,i)-xp(r,i),f,p)}function kp(e,t,n,r,i){return Sp(t,r,i)-Op(e,t,n,r,i)}function Ap(e,t,n,r){let i=e.roadProfileAt(n),a=r<0?i.leftWidth:i.rightWidth,o=r<0?i.leftShoulder:i.rightShoulder,s=a+Math.min(rp,o),c=t.position.x+t.right.x*r*s,l=t.position.z+t.right.z*r*s,u=mp(Math.abs(kp(e,t,n,c,l)-xp(c,l))/op,ip,ap);return{roadEdge:a,innerEdge:s,outerEdge:s+u,blendWidth:u}}function jp(e,t,n,r,i,a){let o=xp(i,a),s=Ap(e,t,n,(i-t.position.x)*t.right.x+(a-t.position.z)*t.right.z<0?-1:1);if(r>=s.outerEdge)return o;let c=kp(e,t,n,i,a);if(r<=s.innerEdge)return c;let l=yp(s.innerEdge,s.outerEdge,r);return G.lerp(c,o,l)}function Mp(e,t,n){let r=e.nearestAt(Dp.set(t,0,n));return jp(e,r.sample,r.distance,r.separation,t,n)}function Np(e,t,n){let r=e[0],i=r.nearestAt(Dp.set(t,0,n));for(let a=1;a<e.length;a+=1){let o=e[a],s=o.nearestAt(Dp.set(t,0,n));s.separation>=i.separation||(r=o,i=s)}return{route:r,nearest:i}}function Pp(e,t,n){let{route:r,nearest:i}=Np(e,t,n);return jp(r,i.sample,i.distance,i.separation,t,n)}var Fp=new q;function Ip(e,t,n,r=0){return Fp.set(t,0,n),e.reduce((e,i)=>{let a=i.nearestAt(Fp),o=i.roadProfileAt(a.distance),s=(t-a.sample.position.x)*a.sample.right.x+(n-a.sample.position.z)*a.sample.right.z<0?o.leftWidth+o.leftShoulder:o.rightWidth+o.rightShoulder;return Math.min(e,a.separation-s-r)},1/0)}function Lp(e,t,n=1){t.updateMatrixWorld(!0);let r=new $n().setFromObject(t),i=r.getCenter(new q),a=r.getSize(new q),o=Math.max(a.x,a.z)*.5*n;return Ip(e,i.x,i.z,o)}function Rp(e,t,n,r,i){return jp(e,t,n,Math.hypot(r-t.position.x,i-t.position.z),r,i)}function zp(e,t,n){let r=xp(t,n),{route:i,nearest:a}=Np(e,t,n),o=(t-a.sample.position.x)*a.sample.right.x+(n-a.sample.position.z)*a.sample.right.z,s=Ap(i,a.sample,a.distance,o<0?-1:1);if(a.separation>=s.outerEdge)return r;let c=1-yp(Math.min(s.outerEdge,s.roadEdge+sp+cp),s.outerEdge,a.separation),l=jp(i,a.sample,a.distance,a.separation,t,n);return Math.min(r,l-lp*c)}function Bp(){return new ja({fog:!0,lights:!0,vertexColors:!0,uniforms:Oa.merge([Q.fog,Q.lights,{uSun:{value:new q(-92,128,-72).normalize()}}]),vertexShader:`
      varying vec3 vColor;
      varying vec3 vNormal;
      varying vec3 vWorld;
      #include <common>
      #include <fog_pars_vertex>
      #include <shadowmap_pars_vertex>
      #undef HAS_NORMAL
      void main() {
        vColor = color;
        vNormal = normalize(mat3(modelMatrix) * normal);
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorld = worldPosition.xyz;
        vec4 mvPosition = viewMatrix * worldPosition;
        gl_Position = projectionMatrix * mvPosition;
        #include <shadowmap_vertex>
        #include <fog_vertex>
      }
    `,fragmentShader:`
      uniform vec3 uSun;
      varying vec3 vColor;
      varying vec3 vNormal;
      varying vec3 vWorld;
      #include <common>
      #include <packing>
      #include <lights_pars_begin>
      #include <shadowmap_pars_fragment>
      #include <shadowmask_pars_fragment>
      #include <fog_pars_fragment>
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      void main() {
        float sunFacing = max(0.0, dot(normalize(vNormal), uSun));
        float light = 0.54 + sunFacing * 0.78;
        float grass = noise(vWorld.xz * 1.7) * 0.05;
        float broad = noise(vWorld.xz * 0.08) * 0.08;
        vec3 detailWeights = abs(normalize(vNormal));
        detailWeights /= dot(detailWeights, vec3(1.0));
        float canopy = dot(vec3(noise(vWorld.yz * 0.34), noise(vWorld.xz * 0.34), noise(vWorld.xy * 0.34)), detailWeights);
        canopy = smoothstep(0.3, 0.7, canopy);
        float forestMottle = sin(vWorld.x * 0.052 + vWorld.z * 0.037) * 0.5 + 0.5;
        forestMottle *= sin(vWorld.z * 0.083 - vWorld.x * 0.019) * 0.5 + 0.5;
        float slope = 1.0 - clamp(normalize(vNormal).y, 0.0, 1.0);
        float rockNoise = noise(vWorld.xz * 0.34);
        float rockMask = smoothstep(0.14, 0.46, slope) * (0.62 + rockNoise * 0.38);
        vec3 mossRock = mix(vec3(0.115, 0.15, 0.13), vec3(0.32, 0.36, 0.25), broad);
        vec3 color = mix(vColor * (light + grass + broad), mossRock * (0.82 + light * 0.32), rockMask * 0.84);
        color = mix(color, color * vec3(0.58, 0.72, 0.64), smoothstep(0.12, 0.68, forestMottle) * 0.36);
        color *= mix(0.86, 1.14, canopy);
        color *= mix(vec3(0.68, 0.79, 0.76), vec3(1.1, 1.04, 0.9), smoothstep(0.08, 0.82, sunFacing));
        float shadow = mix(0.33, 1.0, getShadowMask());
        gl_FragColor = vec4(color * shadow, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }
    `})}function Vp(e,t,n,r){let i=160,a=210;n===`high`?(i=220,a=260):n===`safe`&&(i=90,a=120);let o=new ya(1500,1800,i,a);o.rotateX(-Math.PI/2),o.translate(Ef.x,0,Ef.z);let s=o.attributes.position,c=[],l=new Y(3563088),u=new Y(7966828),d=0,f=0;for(let e=0;e<s.count;e+=1){let n=s.getX(e),r=s.getZ(e),i=xp(n,r),a=Pp(t,n,r),o=zp(t,n,r)-.015;d=Math.max(d,i-a),f=Math.max(f,a-i),s.setY(e,o);let p=mp((o+4)/85,0,1)*.42+(Math.sin(n*.025+r*.021)+1)*.035,m=l.clone().lerp(u,p);c.push(m.r,m.g,m.b)}o.setAttribute(`color`,new X(c,3)),o.computeVertexNormals();let p=new Z(o,r);return p.name=`Buried terrain underlay`,p.receiveShadow=!0,e.add(p),{maximumCutDepth:d,maximumFillDepth:f}}function Hp(e,t,n,r,i){let a=Math.max(420,Math.ceil(t.length/1.7)),o=20;r===`high`&&(o=24),r===`safe`&&(o=14);let s=new Y(3563088),c=new Y(7966828),l=0,u=0;for(let r of[-1,1]){let d=[],f=[],p=[],m=[];for(let e=0;e<=a;e+=1){let i=e/a*t.length,h=t.sampleAt(i),g=Ap(t,h,i,r);for(let e=0;e<=o;e+=1){let a=e/o,m=a<.48?G.lerp(0,g.innerEdge,a/.48):G.lerp(g.innerEdge,g.outerEdge,(a-.48)/.52),_=h.position.clone().addScaledVector(h.right,r*m),v=jp(t,h,i,m,_.x,_.z),y=Pp(n,_.x,_.z);y<v-.001&&(l+=1),_.y=Math.min(v,y)-.015,u+=1,d.push(_.x,_.y,_.z),p.push(a,i/12);let b=mp((_.y+4)/85,0,1)*.42+(Math.sin(_.x*.11+_.z*.06)+1)*.075,x=s.clone().lerp(c,b);f.push(x.r,x.g,x.b)}if(e>=a)continue;let _=o+1;for(let t=0;t<o;t+=1){let n=e*_+t;r>0?m.push(n,n+_,n+1,n+_,n+_+1,n+1):m.push(n,n+1,n+_,n+_,n+1,n+_+1)}}let h=new jr;h.setAttribute(`position`,new X(d,3)),h.setAttribute(`color`,new X(f,3)),h.setAttribute(`uv`,new X(p,2)),h.setIndex(m),h.computeVertexNormals();let g=new Z(h,i);g.name=r>0?`Road cut terrain right`:`Road cut terrain left`,g.receiveShadow=!0,e.add(g)}return{protectedVertices:l,vertexCount:u,crossSegments:o}}function Up(e,t,n){let r=[],i=[],a=[],o=[],s=[],c=Math.max(420,Math.ceil(e.length/1.7)),l=t===`road`?10:8,u=l+1,d=c*l*6;for(let s=0;s<=c;s+=1){let u=s/c*e.length,d=e.sampleAt(u),f=e.roadProfileAt(u),p=f.leftWidth+(t===`shoulder`?f.leftShoulder:0),m=f.rightWidth+(t===`shoulder`?f.rightShoulder:0);for(let s=0;s<=l;s+=1){let c=s/l,f=d.position.clone().addScaledVector(d.right,G.lerp(-p,m,c));f.y=Sp(d,f.x,f.z,n-qf),r.push(f.x,f.y,f.z),a.push(c,u/10),t===`road`&&(i.push(f.x,kp(e,d,u,f.x,f.z),f.z),o.push(c,u/10))}}for(let e=0;e<c;e+=1)for(let t=0;t<l;t+=1){let n=e*u+t;s.push(n,n+u,n+1,n+u,n+u+1,n+1)}if(t===`road`){let e=r.length/3;r.push(...i),a.push(...o);for(let t=0;t<c;t+=1){for(let n=0;n<l;n+=1){let r=e+t*u+n;s.push(r,r+1,r+u,r+u,r+1,r+u+1)}let n=t*u,r=(t+1)*u,i=e+t*u,a=e+(t+1)*u;s.push(n,i,r,r,i,a);let o=t*u+l,c=(t+1)*u+l,d=e+t*u+l,f=e+(t+1)*u+l;s.push(o,c,d,c,f,d)}for(let t=0;t<l;t+=1){let n=t,r=e+t;s.push(n,n+1,r,n+1,r+1,r);let i=c*u+t,a=e+c*u+t;s.push(i,a,i+1,i+1,a,a+1)}}let f=new jr;f.setAttribute(`position`,new X(r,3)),f.setAttribute(`uv`,new X(a,2)),f.setIndex(s);let p=Math.max(0,Math.floor((e.length-Jf)/e.length*c))*l*6;return f.addGroup(0,p,0),f.addGroup(p,d-p,t===`road`?2:1),t===`road`&&f.addGroup(d,s.length-d,1),f.computeVertexNormals(),f}function Wp(){return new Na({color:4932664,roughness:1,metalness:0})}var Gp=`
  uniform vec3 uBase;
  uniform int uShoulder;
  uniform int uJunction;
  float roadHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
  float roadNoise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(roadHash(i), roadHash(i + vec2(1,0)), f.x), mix(roadHash(i + vec2(0,1)), roadHash(i + vec2(1,1)), f.x), f.y);
  }
  vec3 roadSurfaceColor(vec2 roadUv, vec3 world, vec3 worldNormal) {
    float fine = roadNoise(world.xz * 3.8);
    float broad = roadNoise(world.xz * 0.048);
    float aggregate = roadNoise(world.xz * 7.5 + vec2(17.0, 9.0));
    float edge = uJunction == 1 ? 0.0 : smoothstep(0.72, 1.0, abs(roadUv.x - 0.5) * 2.0);
    vec3 color = uBase * (0.86 + fine * 0.14 + broad * 0.14);
    if (uShoulder == 0) {
      float repaired = smoothstep(0.61, 0.78, roadNoise(world.xz * 0.105 + vec2(11.0, 3.0)));
      vec2 patchCoordinate = uJunction == 1 ? world.xz * 0.17 : vec2(roadUv.y * 0.17, floor(roadUv.x * 5.0));
      float brokenPatch = smoothstep(0.69, 0.82, roadNoise(patchCoordinate + vec2(4.0, 19.0)));
      float crackCluster = smoothstep(0.72, 0.86, roadNoise(world.xz * 0.21 + vec2(8.0, 2.0)));
      float crackBreakup = smoothstep(0.62, 0.82, roadNoise(world.xz * 0.47 + vec2(2.0, 13.0)));
      float hairline = (1.0 - smoothstep(0.004, 0.013, abs(roadNoise(world.xz * 4.8) - 0.5))) * crackCluster * crackBreakup;
      float wheelWear = uJunction == 1 ? 0.0 : 1.0 - smoothstep(0.09, 0.19, min(abs(roadUv.x - 0.31), abs(roadUv.x - 0.69)));
      float edgeDirt = edge * (0.35 + roadNoise(world.xz * 0.7) * 0.65);
      float paleStone = smoothstep(0.82, 0.96, aggregate) * (1.0 - edge * 0.72);
      float tarSpeck = 1.0 - smoothstep(0.035, 0.09, aggregate);
      color = mix(color, vec3(0.30, 0.31, 0.29), repaired * 0.34);
      color = mix(color, vec3(0.24, 0.25, 0.23), brokenPatch * 0.28);
      color = mix(color, vec3(0.46, 0.47, 0.43), paleStone * 0.12);
      color *= 1.0 - tarSpeck * 0.045;
      color *= 1.0 - hairline * 0.065 - wheelWear * 0.055;
      color = mix(color, vec3(0.31, 0.28, 0.20), edgeDirt * 0.62);
    } else {
      float dirt = roadNoise(world.xz * 0.58);
      color = mix(color, vec3(0.28, 0.25, 0.18), 0.28 + dirt * 0.24);
      color = mix(color, vec3(0.24, 0.36, 0.21), edge * (0.45 + dirt * 0.25));
    }
    float sunFacing = max(0.0, dot(normalize(worldNormal), normalize(vec3(-92.0, 128.0, -72.0))));
    float light = 0.7 + sunFacing * 0.52;
    color *= mix(vec3(0.68, 0.78, 0.77), vec3(1.08, 1.03, 0.92), smoothstep(0.08, 0.82, sunFacing));
    float shadow = mix(0.32, 1.0, getShadowMask());
    return color * light * shadow;
  }
`;function Kp(e,t=!1,n=!1){return new ja({fog:!0,lights:!0,polygonOffset:!0,polygonOffsetFactor:n?t?-3:-4:t?-1:-2,polygonOffsetUnits:n?t?-3:-4:t?-1:-2,uniforms:Oa.merge([Q.fog,Q.lights,{uBase:{value:new Y(e)},uShoulder:{value:+!!t},uJunction:{value:+!!n}}]),vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorld;
      varying vec3 vNormal;
      #include <common>
      #include <fog_pars_vertex>
      #include <shadowmap_pars_vertex>
      #undef HAS_NORMAL
      void main() {
        vUv = uv;
        vNormal = normalize(mat3(modelMatrix) * normal);
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorld = worldPosition.xyz;
        vec4 mvPosition = viewMatrix * worldPosition;
        gl_Position = projectionMatrix * mvPosition;
        #include <shadowmap_vertex>
        #include <fog_vertex>
      }
    `,fragmentShader:`
      varying vec2 vUv;
      varying vec3 vWorld;
      varying vec3 vNormal;
      #include <common>
      #include <packing>
      #include <lights_pars_begin>
      #include <shadowmap_pars_fragment>
      #include <shadowmask_pars_fragment>
      #include <fog_pars_fragment>
      ${Gp}
      void main() {
        gl_FragColor = vec4(roadSurfaceColor(vUv, vWorld, vNormal), 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }
    `})}function qp(e,t,n){let r=t.clone();return r.name=`${t.name} route transition`,r.depthWrite=!0,r.flatShading=!0,r.polygonOffsetFactor=e.polygonOffsetFactor,r.polygonOffsetUnits=e.polygonOffsetUnits,r.customProgramCacheKey=()=>`route-gravel-${t.customProgramCacheKey()}`,r.onBeforeCompile=(r,i)=>{t.onBeforeCompile(r,i),r.uniforms.uBase=e.uniforms.uBase,r.uniforms.uShoulder=e.uniforms.uShoulder,r.uniforms.uJunction=e.uniforms.uJunction,r.uniforms.uRouteLength={value:n};let a=`varying vec2 vRouteUv;
varying vec3 vRouteWorld;
varying vec3 vRouteNormal;
`;r.vertexShader=a+r.vertexShader,r.vertexShader=r.vertexShader.replace(`#include <begin_vertex>`,`
      #include <begin_vertex>
      vRouteUv = uv;
      vRouteWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
      vRouteNormal = normalize(mat3(modelMatrix) * normal);
    `),r.fragmentShader=`${a}uniform float uRouteLength;\n${r.fragmentShader}`,r.fragmentShader=r.fragmentShader.replace(`void main() {`,`
      #include <shadowmask_pars_fragment>
      ${Gp}
      void main() {
        float progress = 1.0 - smoothstep(1.0, ${Jf.toFixed(1)}, uRouteLength - vRouteUv.y * 10.0);
        float edgeReach = smoothstep(0.2, 1.0, abs(vRouteUv.x - 0.5) * 2.0) * 0.2;
        float wheelTracks = 1.0 - smoothstep(0.07, 0.18, min(abs(vRouteUv.x - 0.31), abs(vRouteUv.x - 0.69)));
        float coverage = progress + (edgeReach - wheelTracks * 0.1) * 4.0 * progress * (1.0 - progress);
        float patches = roadNoise(vRouteWorld.xz * 1.15) * 0.7 + roadNoise(vRouteWorld.xz * 6.0) * 0.3;
        float gravelBlend = smoothstep(patches - 0.14, patches + 0.14, coverage * 1.32 - 0.16);
    `),r.fragmentShader=r.fragmentShader.replace(`#include <alphatest_fragment>`,`
      diffuseColor.a = mix(1.0, diffuseColor.a, gravelBlend);
      #include <alphatest_fragment>
    `),r.fragmentShader=r.fragmentShader.replace(`#include <opaque_fragment>`,`
      outgoingLight = mix(roadSurfaceColor(vRouteUv, vRouteWorld, vRouteNormal), outgoingLight, gravelBlend);
      #include <opaque_fragment>
    `)},r}function Jp(){return new ja({fog:!0,side:2,uniforms:Oa.merge([Q.fog]),vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorld;
      varying vec3 vNormal;
      #include <fog_pars_vertex>
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vec4 mvPosition = viewMatrix * world;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }
    `,fragmentShader:`
      varying vec2 vUv;
      varying vec3 vWorld;
      varying vec3 vNormal;
      #include <fog_pars_fragment>
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      void main() {
        float aggregate = hash(floor(vWorld.xz * 4.5 + vWorld.y * 1.7));
        float verticalJoint = 1.0 - smoothstep(0.035, 0.07, abs(fract(vUv.x * 1.4) - 0.5));
        float horizontalJoint = 1.0 - smoothstep(0.035, 0.075, abs(fract(vUv.y * 3.0) - 0.5));
        float joint = max(verticalJoint * 0.45, horizontalJoint * 0.6);
        float moss = smoothstep(0.55, 1.0, vUv.y) * (0.35 + hash(floor(vWorld.xz * 1.4)) * 0.65);
        vec3 concrete = mix(vec3(0.29, 0.31, 0.29), vec3(0.43, 0.45, 0.4), aggregate * 0.55);
        concrete = mix(concrete, vec3(0.18, 0.25, 0.16), moss * 0.58);
        concrete *= 1.0 - joint * 0.2;
        float light = 0.76 + max(0.0, dot(normalize(vNormal), normalize(vec3(-0.35, 0.8, -0.28)))) * 0.3;
        gl_FragColor = vec4(concrete * light, 1.0);
        #include <fog_fragment>
      }
    `})}function Yp(){return new ja({transparent:!0,depthWrite:!1,fog:!0,uniforms:Oa.merge([Q.fog,{uTime:{value:0}}]),vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorld;
      #include <fog_pars_vertex>
      void main() {
        vUv = uv;
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vec4 mvPosition = viewMatrix * world;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }
    `,fragmentShader:`
      uniform float uTime;
      varying vec2 vUv;
      varying vec3 vWorld;
      #include <fog_pars_fragment>
      float hash(vec2 p) { return fract(sin(dot(p, vec2(41.7, 289.3))) * 43758.5453); }
      void main() {
        float ripple = sin(vUv.y * 18.0 - uTime * 2.4 + sin(vWorld.x * 0.7)) * 0.5 + 0.5;
        float glint = smoothstep(0.78, 0.98, ripple) * (0.42 + hash(floor(vWorld.xz * 2.0)) * 0.28);
        float bank = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
        vec3 deep = vec3(0.16, 0.47, 0.50);
        vec3 pale = vec3(0.52, 0.84, 0.82);
        vec3 color = mix(deep, pale, glint + (1.0 - bank) * 0.18);
        gl_FragColor = vec4(color, 0.82 * bank + 0.12);
        #include <fog_fragment>
      }
    `})}function Xp(e,t){let n=[],r=[],i=[];e.forEach((a,o)=>{let s=e[Math.max(0,o-1)],c=e[Math.min(e.length-1,o+1)].clone().sub(s).setY(0).normalize(),l=new q(c.z,0,-c.x),u=typeof t==`number`?t:t[o],d=a.clone().addScaledVector(l,-u),f=a.clone().addScaledVector(l,u);n.push(d.x,d.y,d.z,f.x,f.y,f.z);let p=o/Math.max(1,e.length-1);if(r.push(0,p*18,1,p*18),o<e.length-1){let e=o*2;i.push(e,e+2,e+1,e+2,e+3,e+1)}});let a=new jr;return a.setAttribute(`position`,new X(n,3)),a.setAttribute(`uv`,new X(r,2)),a.setIndex(i),a.computeVertexNormals(),a}function Zp(e,t,n){let r=Kp(7431758,!0),i=Kp(t.id===`sakura-ridge`?6711906:t.id===`hairpin-pass`?6446937:6121058),a=new Z(Up(t,`shoulder`,.067),[r,qp(r,n.verge,t.length)]),o=new Z(Up(t,`road`,qf),[i,Wp(),qp(i,n.path,t.length)]);a.receiveShadow=!0,o.receiveShadow=!0,e.add(a,o)}async function Qp(e,t,n,r,i=0){let a=await cf.instance(t,{...r,rotationY:i});return a.root.userData.animations=a.animations,a.root.position.copy(n),e.add(a.root),a.root}function $p(e,t,n,r,i=0){e.updateMatrixWorld(!0);let a=new $n().setFromObject(e),o=a.getCenter(new q),s=n*Math.SQRT1_2,c=[[0,0],[n,0],[-n,0],[0,n],[0,-n],[s,s],[s,-s],[-s,s],[-s,-s]].map(([e,n])=>t(o.x+e,o.z+n)+i),l=Math.min(...c)-r;e.position.y+=l-a.min.y,e.updateMatrixWorld(!0);let u=new $n().setFromObject(e).min.y;return e.userData.grounding={maximumBaseGapM:Math.max(0,...c.map(e=>u-e)),minimumBurialM:Math.min(...c.map(e=>e-u))},e}async function em(e,t,n,r,i,a,o,s,c,l,u,d,f=0){let p=n.roadProfileAt(a),m=o<0?p.leftWidth:p.rightWidth,h=i.position.clone().addScaledVector(i.right,o*(m+s));h.y=Pp(r,h.x,h.z)+f;let g=await Qp(e,t,h,c,l);g.updateMatrixWorld(!0);let _=new $n().setFromObject(g),v=_.getCenter(new q),y=_.getSize(new q),b=(Math.abs(i.right.x)*y.x+Math.abs(i.right.z)*y.z)*.5*d,x=v.clone().sub(i.position).dot(i.right)*o,S=m+u+b,C=Math.max(0,S-x);C>0&&(g.position.addScaledVector(i.right,o*C),g.position.y=Pp(r,g.position.x,g.position.z)+f,g.updateMatrixWorld(!0));let w=Lp(r,g,d);for(let e=0;e<5&&w<u;e+=1)g.position.addScaledVector(i.right,o*(u-w+.35)),g.updateMatrixWorld(!0),w=Lp(r,g,d);let T=t===`cedarTree`||t===`sakuraTree`?{radius:.45,burial:.16}:t===`bush`?{radius:.55,burial:.12}:t===`cedarForestCluster`||t===`springForestCluster`?{radius:3.5,burial:.22}:t===`groundcover`?{radius:.75,burial:.04}:{radius:.35,burial:.05};return $p(g,(e,t)=>Pp(r,e,t),T.radius,T.burial,f),w=Lp(r,g,d),w<u&&e.remove(g),g.userData.roadClearanceM=w,g.userData.roadsideAssetKey=t,(t===`cedarTree`||t===`sakuraTree`||t===`cedarForestCluster`||t===`springForestCluster`)&&(g.userData.vegetationKind=t),g.userData.routeDistanceM=a,g.userData.routeSide=o,g}async function tm(e,t,n,r,i,a,o=(e,t)=>Pp(i,e,t)){let s=await cf.load(t),c=s.size.x/Math.max(.001,s.size.y),l=s.size.z/Math.max(.001,s.size.y),u=a.flatMap(e=>{let t=r.sampleAt(e.routeDistance),n=r.roadProfileAt(e.routeDistance),a=e.side<0?n.leftWidth:n.rightWidth,o=c*e.height,s=l*e.height,u=new q(Math.cos(e.rotationY),0,-Math.sin(e.rotationY)),d=new q(Math.sin(e.rotationY),0,Math.cos(e.rotationY)),f=(Math.abs(t.right.dot(u))*o+Math.abs(t.right.dot(d))*s)*.5*e.footprintScale,p=a+e.edgeOffset,m=a+e.clearance+f,h=Math.max(p,m),g=t.position.clone().addScaledVector(t.right,e.side*h),_=Math.max(o,s)*.5*e.footprintScale,v=Ip(i,g.x,g.z,_);return v<e.clearance?[]:[{placement:e,sample:t,roadEdge:a,width:o,depth:s,footprintExtent:f,centerDistance:h,position:g,allRoadClearance:v}]});if(!u.length){let t=new kn;return t.userData.roadsidePropKind=n,t.userData.roadsidePropCount=0,t.userData.roadClearanceM=1/0,t.userData.grounding={maximumBaseGapM:0,minimumBurialM:0},e.add(t),t}let d=await cf.instanced(t,u.length,{height:1}),f=new J,p=new jt,m=new q,h=new q,g=1/0,_=0,v=1/0,y=[];return u.forEach((e,r)=>{let{placement:i,width:a,depth:s,position:c,allRoadClearance:l}=e;h.copy(c);let u=t===`camphorTree`?.55:Math.max(.25,Math.min(a,s)*.28),b=u*Math.SQRT1_2,x=[[0,0],[u,0],[-u,0],[0,u],[0,-u],[b,b],[b,-b],[-b,b],[-b,-b]].map(([e,t])=>o(h.x+e,h.z+t));h.y=Math.min(...x)-i.burialDepth,p.setFromAxisAngle(new q(0,1,0),i.rotationY),m.setScalar(i.height),f.compose(h,p,m),d.setMatrixAt(r,f),g=Math.min(g,l),_=Math.max(_,...x.map(e=>Math.max(0,h.y-e))),v=Math.min(v,...x.map(e=>e-h.y)),i.interestClearingRadius&&y.push({kind:n,x:h.x,z:h.z,radius:i.interestClearingRadius})}),d.commit(!0),d.root.userData.roadsidePropKind=n,d.root.userData.roadsidePropCount=u.length,d.root.userData.roadClearanceM=g,d.root.userData.grounding={maximumBaseGapM:_,minimumBurialM:v},(n===`stylized-low-poly-tree`||n===`stylized-green-tree`||t===`camphorTree`)&&(d.root.userData.vegetationKind=n),d.root.userData.roadsideInterestPlacements=y,e.add(d.root),d.root}function nm(e,t,n,r){for(let i=0;i<8;i+=1){e.updateMatrixWorld(!0);let i=new $n().setFromObject(e),a=i.getCenter(new q),o=i.getSize(new q),s=0,c=0,l=0;for(let e of t){let t=e.end.x-e.start.x,i=e.end.z-e.start.z,u=t*t+i*i,d=u>0?mp(((a.x-e.start.x)*t+(a.z-e.start.z)*i)/u,0,1):0,f=e.start.x+t*d,p=e.start.z+i*d,m=a.x-f,h=a.z-p,g=Math.hypot(m,h);if(g<.001){let e=Math.sqrt(u)||1;m=-i/e,h=t/e,g=0}else m/=g,h/=g;let _=(Math.abs(m)*o.x+Math.abs(h)*o.z)*.5*r,v=e.halfWidth+n+_-g;v<=l||(l=v,s=m*v,c=h*v)}if(l<=0)break;e.position.x+=s,e.position.z+=c}e.updateMatrixWorld(!0);let i=new $n().setFromObject(e),a=i.getCenter(new q),o=i.getSize(new q),s=1/0;for(let e of t){let t=e.end.x-e.start.x,n=e.end.z-e.start.z,i=t*t+n*n,c=i>0?mp(((a.x-e.start.x)*t+(a.z-e.start.z)*n)/i,0,1):0,l=e.start.x+t*c,u=e.start.z+n*c,d=a.x-l,f=a.z-u,p=Math.hypot(d,f),m=p>.001?d/p:1,h=p>.001?f/p:0,g=(Math.abs(m)*o.x+Math.abs(h)*o.z)*.5*r;s=Math.min(s,p-g-e.halfWidth)}return e.userData.roadClearanceM=s,e}function rm(e){return e.traverse(e=>{e instanceof Z&&(e.castShadow=!1)}),e}function im(e){let t=e.tangent.clone().normalize(),n=new q(e.right.x,e.bankSlope,e.right.z).normalize().clone().negate(),r=new q().crossVectors(n,t).normalize();return n.crossVectors(t,r).normalize(),{xAxis:t,yAxis:r,zAxis:n}}function am(e,t){let n=t+8,r=e.position.clone().addScaledVector(e.right,n),i=e.position.clone().addScaledVector(e.right,-n),a=xp(r.x,r.z)>=xp(i.x,i.z)?1:-1;return{uphill:a,downhill:-a}}async function om(e,t,n,r,i){let a=Tp(t.id===`sakura-ridge`?11277:t.id===`hairpin-pass`?52711:8831),o={"sakura-ridge":.2,"hairpin-pass":.1,"cedar-stream":.075},s=[],c=320;r===`high`&&(c=500),r===`safe`&&(c=130);for(let r=0;r<c;r+=1){let l=t.length*((r+.25+a()*.5)/c),u=t.sampleAt(l),d=r%2==0?-1:1,f=a(),p=f<.58?2.2+a()*8:f<.86?10+a()*22:32+a()*58,m=a()<o[t.id]?`sakuraTree`:`cedarTree`,h=f<.58?7.5+a()*5.5:f<.86?9+a()*6.5:11+a()*8;s.push(em(e,m,t,n,u,l,d,p,{height:h},a()*Math.PI*2,.45,1).then(t=>(t.parent===e&&m===`sakuraTree`&&f<.58&&i.push({routeDistance:l,side:d}),f<.58?t:rm(t))))}let l=155;r===`high`&&(l=240),r===`safe`&&(l=60);for(let r=0;r<l;r+=1){let r=a()*t.length,i=t.sampleAt(r),o=a()<.5?-1:1;s.push(em(e,`bush`,t,n,i,r,o,1.2+a()*13,{height:1.25+a()*1.1},a()*Math.PI*2,.55,1).then(rm))}let u=68;r===`high`&&(u=115),r===`safe`&&(u=26);for(let r=0;r<u;r+=1){let r=a()*t.length,i=t.sampleAt(r),o=a()<.5?-1:1;s.push(em(e,`flowers`,t,n,i,r,o,.7+a()*8.5,{width:1.1+a()*1.5},a()*Math.PI*2,.65,1).then(rm))}let d=105;r===`high`&&(d=180),r===`safe`&&(d=34);for(let r=0;r<d;r+=1){let i=t.length*((r+.15+a()*.7)/d),o=t.sampleAt(i),c=r%2==0?-1:1;s.push(em(e,`groundcover`,t,n,o,i,c,.75+a()*6.2,{width:2.4+a()*3.8},a()*Math.PI*2,.75,1,-.02).then(rm))}let f=r===`high`?16:r===`safe`?4:10,p=[];for(let e=0;e<f;e+=1){let n=t.length*((e+.6)/(f+.75)),r=t.sampleAt(n),i=e%2==0?-1:1,o=r.right.clone().multiplyScalar(-i);p.push({routeDistance:n,side:i,edgeOffset:1.1+a()*1.4,height:1.45+a()*.4,rotationY:Math.atan2(o.x,o.z),clearance:.9,footprintScale:1,burialDepth:.08,interestClearingRadius:4.5})}let m=r===`high`?11:r===`safe`?3:7,h=[];for(let e=0;e<m;e+=1){let n=t.length*((e+.9)/(m+1.15)),r=t.sampleAt(n),i=e%2==0?1:-1,o=r.right.clone().multiplyScalar(-i);h.push({routeDistance:n,side:i,edgeOffset:1.8+a()*1.8,height:2.45+a()*.7,rotationY:Math.atan2(o.x,o.z),clearance:1.1,footprintScale:1,burialDepth:.12,interestClearingRadius:6})}let g=[...p,...h],_=r===`high`?150:r===`safe`?36:96,v=[],y=[];for(let e=0;e<_;e+=1){let n=t.length*((e+.2+a()*.6)/_),r=e%2==0?-1:1;g.find(e=>e.side===r&&Math.abs(e.routeDistance-n)<10)&&(n=Math.min(t.length-20,n+11));let i=a(),o=i<.56?2+a()*8:i<.86?10+a()*18:28+a()*35,s={routeDistance:n,side:r,edgeOffset:o,height:7.6+a()*5.8,rotationY:a()*Math.PI*2,clearance:.75,footprintScale:1,burialDepth:.16};e%5<3?v.push(s):y.push(s)}s.push(tm(e,`roadsideTreeLowPoly`,`stylized-low-poly-tree`,t,n,v)),s.push(tm(e,`roadsideTreeGreen`,`stylized-green-tree`,t,n,y)),s.push(tm(e,`roadsideBuddha`,`seated-buddha`,t,n,p)),s.push(tm(e,`roadsideShrine`,`wooden-forest-shrine`,t,n,h)),await Promise.all(s)}async function sm(e,t,n,r,i,a,o){let s={"sakura-ridge":31907,"hairpin-pass":72161,"cedar-stream":57347}[t.id],c=Tp(s),l={high:1,mobile:1.4,safe:2.5}[r],u=Gf[r],d=Array.from({length:Math.ceil(t.length/u)},()=>({meadow:[],trees:[],minimumMeadowClearance:1/0})),f=i.map.image,p=f.width/f.height;for(let e=12;e<t.length-18;e+=l){let r=t.sampleAt(e),i=t.roadProfileAt(e),o=t.sampleAt(e-9).tangent,s=t.sampleAt(e+9).tangent,l=o.x*s.z-o.z*s.x,f=d[Math.floor(e/u)];for(let t of[-1,1]){let o=l*t<-.16,s=t<0?i.leftWidth+i.leftShoulder:i.rightWidth+i.rightShoulder;for(let i=0;i<3;i+=1){let l=Math.sin(e*.073+t*1.9)+Math.sin(e*.19+i*1.4);if(c()<.18||i>0&&l<-.2)continue;let u=o?.3+c()*.15:.38+c()*.3,d=u*(p*.5+.6),m=o?2.1:1.1,h=s+m+d+i*1.35+c()*.7,g=r.position.x+r.right.x*t*h,_=r.position.z+r.right.z*t*h;if(Math.abs(g-Ef.x)<58&&Math.abs(_-Ef.z)<82||a.some(e=>Math.hypot(g-e.x,_-e.z)<e.radius+d))continue;let v=Ip(n,g,_,d);if(v<m)continue;let y=Pp(n,g,_),b=Pp(n,g-d,_),x=Pp(n,g+d,_),S=Pp(n,g,_-d),C=Pp(n,g,_+d),w=(x-b)/(2*d),T=(C-S)/(2*d);if(Math.hypot(w,T)>.7)continue;let E=Math.min(y,b+w*d,x-w*d,S+T*d,C-T*d);y-E>.16||(f.meadow.push({x:g,y:E-.07,z:_,height:u,rotation:c()*Math.PI,normal:new q(-w,1,-T).normalize()}),f.minimumMeadowClearance=Math.min(f.minimumMeadowClearance,v))}}}let m=Tp(s+107),h={"sakura-ridge":34,"hairpin-pass":44,"cedar-stream":52}[t.id]*{high:.8,mobile:1,safe:1.8}[r],g=await cf.load(`camphorTree`),_=Math.hypot(g.size.x,g.size.z)/g.size.y*.5,v=e.children.filter(e=>e.userData.roadsideAssetKey===`cedarTree`||e.userData.roadsideAssetKey===`sakuraTree`),y=0;for(let e=24;e<t.length-35;e+=h){let r=e+m()*h*.35,i=t.sampleAt(r),o=t.roadProfileAt(r),s=y++%2==0?-1:1,c=t.sampleAt(r-18).tangent,l=t.sampleAt(r+24).tangent;if((c.x*l.z-c.z*l.x)*s<-.18)continue;let f=6.4+m()*2.5,p=f*_,g=10+f*.35+m()*4,b=s<0?o.leftWidth:o.rightWidth,x=i.position.x+i.right.x*s*(b+g),S=i.position.z+i.right.z*s*(b+g);if(Math.abs(x-Ef.x)<65&&Math.abs(S-Ef.z)<90||Ip(n,x,S,p)<3.5||a.some(e=>Math.hypot(x-e.x,S-e.z)<e.radius+p)||v.some(e=>Math.hypot(x-e.position.x,S-e.position.z)<3.4))continue;let C=[Pp(n,x-.55,S),Pp(n,x+.55,S),Pp(n,x,S-.55),Pp(n,x,S+.55)];Math.max(...C)-Math.min(...C)>.9||d[Math.floor(r/u)].trees.push({routeDistance:r,side:s,edgeOffset:g,height:f,rotationY:m()*Math.PI*2,clearance:3.5,footprintScale:1,burialDepth:.16})}let b=new os(new q,new q(0,-1,0)),x=Math.max(...o.map(e=>new $n().setFromObject(e).max.y))+1;for(let[r,a]of d.entries()){let s=Math.min(t.length,(r+.5)*u);if(a.meadow.length){let n=lf(a.meadow,i);n.name=`${t.name} meadow verge ${r+1}`,n.userData.routeDistanceM=s,n.userData.roadClearanceM=a.minimumMeadowClearance,e.add(n)}if(a.trees.length){let i=await tm(e,`camphorTree`,`painterly-camphor-tree`,t,n,a.trees,(e,t)=>(b.ray.origin.set(e,x,t),b.intersectObjects(o,!1)[0].point.y));i.name=`${t.name} camphor grove ${r+1}`,i.userData.routeDistanceM=s}}}async function cm(e,t,n,r){let i=Tp(t.id===`sakura-ridge`?71293:t.id===`hairpin-pass`?26891:46117),a=175;r===`high`&&(a=260),r===`safe`&&(a=0);let o=[];for(let r=0;r<a;r+=1){let s=t.length*((r+.2+i()*.6)/a),c=t.sampleAt(s),l=r%2==0?-1:1,u=i(),d=t.halfWidth+(u<.58?7+i()*18:u<.86?25+i()*40:65+i()*78),f=t.id===`sakura-ridge`&&i()<.14;o.push(em(e,f?`springForestCluster`:`cedarForestCluster`,t,n,c,s,l,d-t.halfWidth,{height:15+i()*11},i()*Math.PI*2,1,1,-.12).then(rm))}await Promise.all(o)}async function lm(e,t,n){let r=35;n===`high`&&(r=55),n===`safe`&&(r=0);let i=[];Qf.forEach((n,a)=>{let o=Tp(39127+a*18457),s=new K(n.x-Ef.x,n.z-Ef.z),c=s.length();s.normalize();let l=new K(-s.y,s.x),u=0,d=0;for(;u<r&&d<r*10;){d+=1;let r=G.lerp(.2,.62,o()**.82),a=Math.min(n.radiusX,n.radiusZ)*.3*(.62+r*.38),f=(o()*2-1)*a,p=new q(Ef.x+s.x*c*r+l.x*f,0,Ef.z+s.y*c*r+l.y*f);if(Ip(t,p.x,p.z,12)<5)continue;p.y=Pp(t,p.x,p.z)-.18;let m=n.id===`maple-west`&&o()<.12;i.push(Qp(e,m?`springForestCluster`:`cedarForestCluster`,p,{height:22+o()*14},o()*Math.PI*2).then(n=>{let r=1.12+o()*.32;n.scale.set(r,1,r),$p(n,(e,n)=>Pp(t,e,n),3.8,.3);let i=Lp(t,n);return n.userData.roadClearanceM=i,n.userData.vegetationKind=m?`springForestCluster`:`cedarForestCluster`,n.userData.distantHillForest=!0,i<5&&e.remove(n),rm(n)})),u+=1}}),await Promise.all(i)}function um(e,t,n){let r=e.sampleAt(t),i=e.roadProfileAt(t),a=n<0?i.leftWidth:i.rightWidth,o=n<0?i.leftShoulder:i.rightShoulder,s=r.position.clone().addScaledVector(r.right,n*(a+o+.08));s.y=Sp(r,s.x,s.z)-.018;let{xAxis:c,yAxis:l,zAxis:u}=im(r);return{base:s,tangent:c,up:l,outward:u.multiplyScalar(-n).normalize()}}function dm(e,t,n,r,i,a,o,s,c){let l=Math.max(2,Math.ceil((n-t)/i)),u=[],d=[],f=[];for(let i=0;i<=l;i+=1){let p=G.lerp(t,n,i/l),m=um(e,p,r),h=m.base.clone().addScaledVector(m.up,s).addScaledVector(m.outward,c),g=h.clone().addScaledVector(m.up,-a*.5).addScaledVector(m.outward,-o*.5),_=h.clone().addScaledVector(m.up,a*.5).addScaledVector(m.outward,-o*.5),v=h.clone().addScaledVector(m.up,-a*.5).addScaledVector(m.outward,o*.5),y=h.clone().addScaledVector(m.up,a*.5).addScaledVector(m.outward,o*.5);for(let e of[g,_,v,y])u.push(e.x,e.y,e.z);let b=(p-t)/3;if(d.push(b,0,b,1,b,0,b,1),i>=l)continue;let x=i*4,S=x+4;f.push(x,S,x+1,S,S+1,x+1,x+2,x+3,S+2,S+2,x+3,S+3,x+1,S+1,x+3,S+1,S+3,x+3,x,x+2,S,S,x+2,S+2)}f.push(0,1,2,2,1,3);let p=l*4;f.push(p,p+2,p+1,p+2,p+3,p+1);let m=new jr;return m.setAttribute(`position`,new X(u,3)),m.setAttribute(`uv`,new X(d,2)),m.setIndex(f),m.computeVertexNormals(),m}function fm(e,t,n,r,i,a,o,s){let c=Math.floor((r-n)/a)+1,l=new ca(.13,.88,.15),u=new ca(.32,.05,.28),d=new ua(.036,.036,.03,10),f=new ca(.085,.17,.025),p=new Oi(l,o,c),m=new Oi(u,o,c),h=new Oi(d,o,c*2),g=new Oi(f,s,Math.ceil(c/3)),_=new J,v=new q(1,1,1),y=new q(0,1,0),b=0;for(let e=0;e<c;e+=1){let o=um(t,Math.min(r,n+e*a),i),s=o.tangent.clone().multiplyScalar(i);_.makeBasis(o.outward,o.up,s).setPosition(o.base.clone().addScaledVector(o.up,.44)),p.setMatrixAt(e,_),_.makeBasis(o.outward,o.up,s).setPosition(o.base.clone().addScaledVector(o.up,.025)),m.setMatrixAt(e,_);let c=o.outward.clone().negate(),l=new jt().setFromUnitVectors(y,c);for(let t=0;t<2;t+=1){let n=o.base.clone().addScaledVector(o.up,.72+(t===0?-.09:.09)).addScaledVector(c,.048);_.compose(n,l,v),h.setMatrixAt(e*2+t,_)}if(e%3==0){let e=o.base.clone().addScaledVector(o.up,.72).addScaledVector(c,.055);_.makeBasis(s,o.up,c).setPosition(e),g.setMatrixAt(b,_),b+=1}}for(let t of[p,m,h,g])t.castShadow=!0,t.receiveShadow=!0,t.instanceMatrix.needsUpdate=!0,e.add(t);return c}async function pm(e,t,n){let r=t.id===`sakura-ridge`?[[.1,.16],[.4,.47],[.7,.76]]:t.id===`hairpin-pass`?[[.12,.18],[.27,.33],[.42,.48],[.57,.63],[.72,.78],[.84,.9]]:[[.17,.23],[.45,.52],[.71,.77]],i=n===`high`?.9:1.25,a=n===`high`?2.05:2.25,o=new Na({color:13093315,metalness:.78,roughness:.42,side:2}),s=new Na({color:4935758,metalness:.7,roughness:.5}),c=new Na({color:15986400,emissive:6643014,emissiveIntensity:.28,roughness:.35}),l=0,u=0;for(let[n,d]of r){let r=t.length*((n+d)*.5),f=t.sampleAt(Math.max(0,r-16)).tangent,p=t.sampleAt(Math.min(t.length,r+16)).tangent,m=f.z*p.x-f.x*p.z,h=am(t.sampleAt(r),t.halfWidth).downhill||-(Math.sign(m)||1),g=t.length*n,_=t.length*d,v=new kn;v.name=`Road-aligned guardrail ${n.toFixed(2)}-${d.toFixed(2)}`;let y=new Z(dm(t,g,_,h,i,.34,.06,.72,0),o),b=new Z(dm(t,g,_,h,i,.055,.11,.82,-.045),o),x=new Z(dm(t,g,_,h,i,.055,.11,.62,-.045),o);for(let e of[y,b,x])e.castShadow=!0,e.receiveShadow=!0,v.add(e);l+=fm(v,t,g,_,h,a,s,c),u+=Math.ceil((_-g)/i),e.add(v)}e.userData.guardrailEngineering={sections:r.length,posts:l,continuousBeamSegments:u,maximumRoadFrameAlignmentErrorM:0}}async function mm(e,t,n){let r=t.id===`sakura-ridge`?[[.08,.15],[.16,.24],[.31,.39],[.55,.63],[.8,.87]]:t.id===`hairpin-pass`?[[.1,.17],[.24,.31],[.38,.45],[.52,.59],[.66,.73],[.8,.87]]:[[.12,.2],[.36,.44],[.61,.69],[.82,.89]],i=Jp();for(let[a,o]of r){let r=t.length*((a+o)*.5),s=am(t.sampleAt(r),t.halfWidth).uphill,c=[],l=[],u=[],d=t.length*a,f=t.length*o,p=Math.max(8,Math.ceil((f-d)/(n===`high`?2.5:3.2)));for(let e=0;e<=p;e+=1){let n=G.lerp(d,f,e/p),r=t.sampleAt(n),i=t.roadProfileAt(n),a=s<0?i.leftWidth:i.rightWidth,o=s<0?i.leftShoulder:i.rightShoulder,m=r.position.clone().addScaledVector(r.right,s*(a+o+.18));m.y=Rp(t,r,n,m.x,m.z)-.02;let h=1.4+Math.sin(n*.04)*.22;c.push(m.x,m.y,m.z,m.x,m.y+h,m.z);let g=(n-d)/3.5;if(l.push(g,0,g,1),e<p){let t=e*2;u.push(t,t+2,t+1,t+2,t+3,t+1)}}let m=new jr;m.setAttribute(`position`,new X(c,3)),m.setAttribute(`uv`,new X(l,2)),m.setIndex(u),m.computeVertexNormals();let h=new Z(m,i);h.castShadow=!0,h.receiveShadow=!0,e.add(h)}}async function hm(e,t,n,r,i,a){if(t.id===`sakura-ridge`){let r=t.sampleAt(t.length*.31),i=r.position.clone().addScaledVector(r.right,-10);i.y=Mp(t,i.x,i.z),n.push({id:`cloud-overlook`,label:`Notice the cloud overlook`,kind:`discovery`,position:i,keepsake:{title:`Cloud Overlook`,text:`For a moment, the road and the clouds seemed to bend together.`,icon:`☁`}});let o=t.sampleAt(t.length*.62),s=o.position.clone().addScaledVector(o.right,9);s.y=Mp(t,s.x,s.z),await Qp(e,`torii`,s,{height:5.4},Math.atan2(o.tangent.x,o.tangent.z)),a.push({x:s.x,z:s.z,radius:5});return}if(t.id===`hairpin-pass`){let r=t.sampleAt(t.length*.47),i=r.position.clone().addScaledVector(r.right,10);i.y=Mp(t,i.x,i.z),n.push({id:`switchback-view`,label:`Look back across the switchbacks`,kind:`discovery`,position:i,keepsake:{title:`Switchback View`,text:`The road folded across the mountain like a ribbon.`,icon:`↶`}});let o=t.sampleAt(t.length*.73),s=o.position.clone().addScaledVector(o.right,-11);s.y=Mp(t,s.x,s.z),await Qp(e,`torii`,s,{height:5.1},Math.atan2(o.tangent.x,o.tangent.z)),a.push({x:s.x,z:s.z,radius:5});return}let o=[];for(let e=0;e<64;e+=1){let n=t.sampleAt(t.length*(.14+e/63*.6)),r=n.position.clone().addScaledVector(n.right,12+Math.sin(e*.55)*2.5);r.y=Mp(t,r.x,r.z)+.15,o.push(r)}for(let e=1;e<o.length;e+=1){let t=o[e-1],n=o[e],r=Math.max(1,Math.ceil(Math.hypot(n.x-t.x,n.z-t.z)/2));for(let e=0;e<=r;e+=1)a.push({x:G.lerp(t.x,n.x,e/r),z:G.lerp(t.z,n.z,e/r),radius:2.4})}let s=Yp();i.push(s);let c=new Z(Xp(o,1.35),s);r.copy(o[Math.floor(o.length*.55)]),e.add(c);let l=t.sampleAt(t.length*.7),u=l.position.clone().addScaledVector(l.right,-9);u.y=Mp(t,u.x,u.z),await Qp(e,`torii`,u,{height:5.4},Math.atan2(l.tangent.x,l.tangent.z)),a.push({x:u.x,z:u.z,radius:5}),n.push({id:`stream-stones`,label:`Listen beside the stream`,kind:`discovery`,position:r.clone(),keepsake:{title:`Stream Stones`,text:`Clear water made every small stone look carefully placed.`,icon:`≈`}})}function gm(e,t,n){let r=t===`high`?64:t===`safe`?24:46,i=[...n].sort((e,t)=>e.routeDistance-t.routeDistance),a=new jr,o=[],s=[],c=[],l=[],u=[],d=Tp(70413);i.forEach(t=>{let n=u.length,i=[],a=e.sampleAt(t.routeDistance),f=a.position.clone();for(let a=0;a<r;a+=1){let r=mp(t.routeDistance+(d()-.5)*10,0,e.length),a=e.sampleAt(r),u=e.roadProfileAt(r),f;if(d()<.5){let e=t.side<0?u.leftWidth:u.rightWidth,n=t.side<0?u.leftShoulder:u.rightShoulder;f=t.side*(Math.max(.4,e-1.05)+d()*(n+1.65))}else{let e=(d()+d())*.5;f=G.lerp(-u.leftWidth+.4,u.rightWidth-.4,e)}let p=a.position.clone().addScaledVector(a.right,f),m=f<0?u.leftWidth:u.rightWidth,h=f<0?u.leftShoulder:u.rightShoulder;p.y=Math.abs(f)<=m?Sp(a,p.x,p.z,.024):Math.abs(f)<=m+h?Sp(a,p.x,p.z,-.004):Rp(e,a,r,p.x,p.z)+.024;let g=d(),_=l.length;l.push({home:p,position:p.clone(),velocity:new q,patchIndex:n,seed:g,age:0,airborne:!1}),i.push(_),o.push(p.x,p.y,p.z),s.push(g),c.push(0)}u.push({routeDistance:t.routeDistance,center:f,tangent:a.tangent.clone().setY(0).normalize(),right:a.right.clone(),particleIndices:i,armed:t.routeDistance>=24})});let f=new X(o,3);f.setUsage(qe);let p=new X(c,1);p.setUsage(qe),a.setAttribute(`position`,f),a.setAttribute(`aSeed`,new X(s,1)),a.setAttribute(`aAirborne`,p);let m=new mo().load(`/sakura-slide/assets/images/cherry_petal_sprite.png`);m.colorSpace=Ve;let h=new ja({transparent:!0,depthWrite:!1,blending:1,fog:!0,uniforms:Oa.merge([Q.fog,{uTime:{value:0},uPixelRatio:{value:Math.min(devicePixelRatio,1.5)},uPetal:{value:m}}]),vertexShader:`
      uniform float uTime;
      uniform float uPixelRatio;
      attribute float aSeed;
      attribute float aAirborne;
      varying float vSeed;
      varying float vAirborne;
      #include <fog_pars_vertex>
      void main() {
        vSeed = aSeed;
        vAirborne = aAirborne;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        float size = mix(6.0 + aSeed * 4.0, 10.0 + aSeed * 6.0, aAirborne);
        gl_PointSize = clamp(size * uPixelRatio / max(1.0, -mvPosition.z * 0.06), 1.5, 13.0);
        #include <fog_vertex>
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform sampler2D uPetal;
      varying float vSeed;
      varying float vAirborne;
      #include <fog_pars_fragment>
      void main() {
        vec2 p = gl_PointCoord - 0.5;
        float angle = vSeed * 12.0 + uTime * (0.8 + vSeed * 1.5) * vAirborne;
        mat2 turn = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
        p = turn * p;
        vec2 petalUv = p + 0.5;
        vec4 petal = texture2D(uPetal, petalUv);
        vec3 color = mix(petal.rgb, vec3(1.0, 0.84, 0.9), vSeed * 0.16);
        gl_FragColor = vec4(color, petal.a * mix(0.7, 0.96, vAirborne));
        if (gl_FragColor.a < 0.04) discard;
        #include <fog_fragment>
      }
    `}),g=new na(a,h);g.renderOrder=8;let _=a.getAttribute(`position`),v=a.getAttribute(`aAirborne`),y={patchCount:u.length,particleCount:l.length,restingCount:l.length,airborneCount:0,triggerLeadM:10,startSafeDistanceM:24,activationDelaySeconds:1.25,maximumLaunchStaggerSeconds:.435,opposingSwirlDirections:!0,patchDistancesM:u.slice(0,10).map(e=>Number(e.routeDistance.toFixed(1)))};return{points:g,material:h,stats:y,update:(e,t,n,r,i)=>{if(h.uniforms.uTime.value=e,l.length===0)return;u.forEach(t=>{let a=t.routeDistance-r,o=t.center.distanceTo(n);e>y.activationDelaySeconds&&t.armed&&i>3.5&&a>-2.5&&a<y.triggerLeadM&&o<20&&(t.armed=!1,t.particleIndices.forEach(e=>{let r=l[e],a=r.seed*Math.PI*2,o=r.seed*73.17%1,s=r.seed*197.83%1,c=r.home.clone().sub(n).setY(0);c.lengthSq()<.01&&c.copy(t.right).multiplyScalar(Math.sin(a)<0?-1:1),c.normalize(),r.velocity.copy(t.tangent).multiplyScalar(.25+i*(.045+r.seed*.055)),r.velocity.addScaledVector(c,.35+o*2.65),r.velocity.addScaledVector(t.right,Math.sin(a*3.1)*(.55+s*2.75)),r.velocity.y=2.5+o*4.1+r.seed*1.25+Math.min(1.5,i*.055),r.age=-(.035+s*.4),r.airborne=!0})),!t.armed&&a<-30&&o>36&&(t.armed=!0)});let a=0,o=!1;l.forEach((n,r)=>{if(!n.airborne)return;if(o=!0,n.age+=t,n.age<0){_.setXYZ(r,n.home.x,n.home.y,n.home.z),v.setX(r,0);return}a+=1;let i=u[n.patchIndex],s=n.seed*73.17%1,c=n.seed*197.83%1,l=s<.5?-1:1,d=1.2+s*1.2+c*.45,f=e*(4.8+n.seed*7.4+c*3)*l+n.seed*53,p=Math.cos(e*(7.8+s*6.2)+n.seed*67);if(n.age<d){n.velocity.addScaledVector(i.right,Math.cos(f)*t*(7+c*12)),n.velocity.addScaledVector(i.tangent,Math.sin(f)*t*(5+s*10));let e=Math.hypot(n.velocity.x,n.velocity.z);if(e>.01){let r=l*t*(3+c*7),i=n.velocity.x;n.velocity.x+=-n.velocity.z/e*r,n.velocity.z+=i/e*r}n.velocity.y+=(Math.sin(f*1.37+c*19)*(1.4+c*2.2)+p*(.7+s*1.5)-(2.65+s*1.7))*t;let r=Math.exp(-t*(.2+n.seed*.34));n.velocity.x*=r,n.velocity.z*=r,n.position.addScaledVector(n.velocity,t)}else{let e=1-Math.exp(-t*(1.05+s*1.35));n.position.lerp(n.home,e),n.position.y+=Math.max(0,p)*t*(.035+n.seed*.045),(n.age>d+2.3+s*1.35||n.position.distanceToSquared(n.home)<.006)&&(n.position.copy(n.home),n.velocity.set(0,0,0),n.airborne=!1,--a)}_.setXYZ(r,n.position.x,n.position.y,n.position.z),v.setX(r,n.airborne?mp((n.position.y-n.home.y)/.5,.25,1):0)}),y.airborneCount=a,y.restingCount=l.length-a,o&&(_.needsUpdate=!0,v.needsUpdate=!0)}}}var _m=[.095,.18,.265,.35,.435,.52,.605,.69,.775,.86];async function vm(e,t){let n={flowers:`flowers`,branches:`fallenCedarBranch`,stones:`mossyRoadRock`},r=[],i=new kn;i.name=`${t.name} request items`,e.add(i);let a=new ba(.72,.8,40),o=new Gr({color:16045192,side:2,transparent:!0,opacity:.85,depthWrite:!1});for(let e of uf.filter(e=>e.route===t.id))for(let s=0;s<e.fractions.length;s+=1){let c=await cf.instance(n[e.itemKind],{width:1.05,height:.85,depth:.9}),l=new kn;l.name=`${e.title} · item ${s+1}`,l.scale.setScalar(.6);let u=new Z(a,o);u.position.y=1.02,c.root.position.y=.55,l.add(u,c.root),l.visible=!1,i.add(l),r.push({questId:e.id,index:s,routeId:t.id,fraction:e.fractions[s],distance:0,lateral:0,root:l,visual:c.root,active:!1})}return{pickups:r,place:e=>{let n=e.flatMap(e=>[-10,-6,6,10].map(t=>({obstacle:e,distance:e.distance+Math.sign(t)*e.halfLength+t})));for(let e of r){let r=t.length*e.fraction;n.sort((e,t)=>Math.abs(e.distance-r)-Math.abs(t.distance-r));let i=n.shift();if(!i)throw Error(`${t.name} has too few obstacle approaches for its request items`);e.distance=i.distance;let a=t.sampleAt(e.distance),o=t.roadProfileAt(e.distance),s=Math.sign(i.obstacle.lateral),c=s<0?o.leftWidth:o.rightWidth;e.lateral=s*mp(Math.abs(i.obstacle.lateral),.95,c-.65),e.root.position.copy(a.position).addScaledVector(a.right,e.lateral),e.root.position.y=Sp(a,e.root.position.x,e.root.position.z,.025);let{xAxis:l,yAxis:u,zAxis:d}=im(a);e.root.quaternion.setFromRotationMatrix(new J().makeBasis(d.clone().negate(),u,l))}},update:(e,t)=>{for(let n of r)n.root.visible=n.active&&n.distance>t-15&&n.distance<t+170,n.root.visible&&(n.visual.position.y=.55+Math.sin(e*1.8+n.index)*.07,n.visual.rotation.y=e*.55+n.index)}}}async function ym(e,t,n){let[r,i]=await Promise.all([cf.load(`fallenCedarBranch`),cf.load(`mossyRoadRock`)]),a={branch:r,rock:i},o=n===`safe`?_m.filter((e,t)=>t%2==0):n===`mobile`?_m.filter((e,t)=>t%4!=3):_m,s={"sakura-ridge":[1,-1,1,1,-1,-1,1,-1,-1,1],"hairpin-pass":[-1,1,1,-1,1,-1,-1,1,-1,1],"cedar-stream":[1,1,-1,1,-1,-1,1,-1,1,-1]},c=[];for(let n=0;n<o.length;n+=1){let r=n%2==0?`branch`:`rock`,i=t.length*o[n],l=t.sampleAt(i),u=t.roadProfileAt(i),d=s[t.id][n]??(n%2==0?1:-1),f=r===`branch`?2.1:1.3,p=a[r],m=p.size.x>=p.size.z?`x`:`z`,h=f/Math.max(.001,Math.max(p.size.x,p.size.z)),g=Math.min(p.size.x,p.size.z)*h,_=(n%3-1)*(r===`branch`?.14:.08),v=Math.abs(Math.cos(_))*f*.5+Math.abs(Math.sin(_))*g*.5,y=Math.abs(Math.sin(_))*f*.5+Math.abs(Math.cos(_))*g*.5,b=d<0?u.leftWidth:u.rightWidth,x=d*Math.max(.45,b-v-.28),S=l.position.clone().addScaledVector(l.right,x);S.y=Sp(l,S.x,S.z,.012);let C=r===`branch`?`fallenCedarBranch`:`mossyRoadRock`,w=m===`x`?{width:f}:{depth:f,rotationY:Math.PI/2},T=await cf.instance(C,w),{xAxis:E,yAxis:D,zAxis:O}=im(l),k=new jt().setFromRotationMatrix(new J().makeBasis(O.clone().negate(),D,E)),A=new jt().setFromAxisAngle(new q(0,1,0),_);T.root.position.copy(S),T.root.quaternion.copy(k).multiply(A),T.root.name=`${t.name} ${r} obstacle ${n+1}`,T.root.userData.routeDistanceM=i,T.root.userData.roadObstacleKind=r,T.root.userData.roadObstacleLateralM=x,e.add(T.root);let j=x-v+u.leftWidth,M=u.rightWidth-x-v;c.push({id:`${t.id}-${r}-${n+1}`,kind:r,label:r===`branch`?`Fallen branch`:`Rockfall`,root:T.root,runId:null,runIndex:0,runSize:1,distance:i,lateral:x,width:f,depth:g,halfLength:y,halfWidth:v}),T.root.userData.clearLaneWidthM=Math.max(j,M)}let l=()=>c.map(e=>{let n=t.roadProfileAt(e.distance),r=e.lateral-e.halfWidth+n.leftWidth,i=n.rightWidth-e.lateral-e.halfWidth;return{id:e.id,kind:e.kind,runId:e.runId,runIndex:e.runIndex,runSize:e.runSize,distanceM:Number(e.distance.toFixed(2)),lateralM:Number(e.lateral.toFixed(2)),halfLengthM:Number(e.halfLength.toFixed(2)),halfWidthM:Number(e.halfWidth.toFixed(2)),clearLaneWidthM:Number(Math.max(r,i).toFixed(2))}}),u=l(),d={runSeed:0,count:c.length,branches:c.filter(e=>e.kind===`branch`).length,rocks:c.filter(e=>e.kind===`rock`).length,minimumClearLaneWidthM:Math.min(...u.map(e=>e.clearLaneWidthM)),sourceModelSizes:{branch:{x:Number(r.size.x.toFixed(3)),y:Number(r.size.y.toFixed(3)),z:Number(r.size.z.toFixed(3))},rock:{x:Number(i.size.x.toFixed(3)),y:Number(i.size.y.toFixed(3)),z:Number(i.size.z.toFixed(3))}},consecutiveRuns:[],minimumConsecutiveSpacingM:0,separateJumpsRequired:!0,placements:u};return{stats:d,hit:(e,t,n)=>{let r=Math.min(e,t)-.58,i=Math.max(e,t)+.58;return c.find(e=>e.distance+e.halfLength>=r&&e.distance-e.halfLength<=i&&Math.abs(n-e.lateral)<=e.halfWidth+.42)??null},reroll:n=>{let r=Tp(n),i=new q(0,1,0),a=c.length>=8?[3,3]:[2,2],o=a.reduce((e,t)=>e+t,0),s=Math.max(0,c.length-o),u=s<=1?[.1]:s===2?[.1,.87]:s===3?[.1,.5,.87]:[.1,.18,.5,.87],f=[...a.map((e,n)=>({id:`${t.id}-run-${n+1}`,size:e,centerFraction:(n===0?.31:.69)+(r()-.5)*.036})),...u.slice(0,s).map((e,n)=>({id:`${t.id}-single-${n+1}`,size:1,centerFraction:e+(r()-.5)*.018}))].sort((e,t)=>e.centerFraction-t.centerFraction).flatMap(e=>{let n=e.size>1?24+r()*5:0,i=t.length*e.centerFraction-n*(e.size-1)*.5;return Array.from({length:e.size},(r,a)=>({runId:e.size>1?e.id:null,runIndex:a,runSize:e.size,distance:mp(i+n*a,t.length*.07,t.length*.91)}))}),p=new Map;c.forEach((e,n)=>{let a=f[n];e.runId=a.runId,e.runIndex=a.runIndex,e.runSize=a.runSize,e.distance=a.distance;let o=t.sampleAt(e.distance),s=t.roadProfileAt(e.distance),c;e.runId?(c=p.get(e.runId)??(r()<.5?-1:1),p.set(e.runId,c)):c=r()<.5?-1:1;let l=(r()-.5)*(e.kind===`branch`?.3:.2);e.halfWidth=Math.abs(Math.cos(l))*e.width*.5+Math.abs(Math.sin(l))*e.depth*.5,e.halfLength=Math.abs(Math.sin(l))*e.width*.5+Math.abs(Math.cos(l))*e.depth*.5;let u=c<0?s.leftWidth:s.rightWidth;e.lateral=c*Math.max(.45,u-e.halfWidth-.28);let d=o.position.clone().addScaledVector(o.right,e.lateral);d.y=Sp(o,d.x,d.z,.012);let{xAxis:m,yAxis:h,zAxis:g}=im(o),_=new jt().setFromRotationMatrix(new J().makeBasis(g.clone().negate(),h,m));e.root.position.copy(d),e.root.quaternion.copy(_).multiply(new jt().setFromAxisAngle(i,l)),e.root.userData.routeDistanceM=e.distance,e.root.userData.roadObstacleLateralM=e.lateral;let v=e.lateral-e.halfWidth+s.leftWidth,y=s.rightWidth-e.lateral-e.halfWidth;e.root.userData.clearLaneWidthM=Math.max(v,y)});let m=l(),h=a.map((e,n)=>{let r=`${t.id}-run-${n+1}`,i=c.filter(e=>e.runId===r),a=i.map(e=>Number(e.distance.toFixed(2)));return{id:r,obstacleIds:i.map(e=>e.id),distancesM:a,side:Math.sign(i[0]?.lateral??0),spacingsM:a.slice(1).map((e,t)=>Number((e-a[t]).toFixed(2)))}});d.runSeed=n,d.minimumClearLaneWidthM=Math.min(...m.map(e=>e.clearLaneWidthM)),d.placements.splice(0,d.placements.length,...m),d.consecutiveRuns.splice(0,d.consecutiveRuns.length,...h),d.minimumConsecutiveSpacingM=Math.min(...h.flatMap(e=>e.spacingsM)),e.updateMatrixWorld(!0)},avoidance:()=>c.map(e=>({distance:e.distance,lateral:e.lateral,halfLength:e.halfLength,halfWidth:e.halfWidth}))}}var bm=[.04,.085,.13,.175,.22,.265,.31,.355,.4,.445,.49,.535,.58,.625,.67,.715,.76,.805,.85,.895,.94],xm=null;function Sm(){if(xm)return xm;let e=(e,t)=>{let n=td(t,!1);if(!n)throw Error(`Unable to assemble ${e}`);return n.computeBoundingBox(),n.computeBoundingSphere(),n},t=new ua(.36,.36,.09,16,1,!1);t.rotateZ(Math.PI/2);let n=new Sa(.315,.032,6,16);n.rotateY(Math.PI/2),n.translate(.052,0,0);let r=n.clone();r.translate(-.104,0,0);let i=new ua(.285,.285,.014,16,1,!1);i.rotateZ(Math.PI/2),i.translate(.05,0,0);let a=i.clone();a.translate(-.1,0,0);let o=[];for(let e of[-.061,.061]){for(let t=0;t<5;t+=1){let n=t/5*Math.PI*2,r=new xa(1,8,4);r.scale(.014,.11,.055),r.translate(0,.115,0),r.rotateX(n),r.translate(e,0,0),o.push(r)}let t=new xa(1,8,4);t.scale(.016,.05,.05),t.translate(e,0,0),o.push(t)}let s=new Na({name:`Stylized coin ochre body`,color:12088613,metalness:.22,roughness:.72,envMapIntensity:.62,flatShading:!0}),c=new Na({name:`Stylized coin honey face`,color:14261053,metalness:.16,roughness:.76,envMapIntensity:.55,flatShading:!0}),l=new Na({name:`Stylized coin sakura emblem`,color:15779439,metalness:.08,roughness:.8,envMapIntensity:.48,emissive:4925192,emissiveIntensity:.035,flatShading:!0});return xm=[{name:`body-and-rim`,geometry:e(`stylized coin body`,[t,n,r]),material:s},{name:`inset-faces`,geometry:e(`stylized coin faces`,[i,a]),material:c},{name:`sakura-emblem`,geometry:e(`stylized coin emblem`,o),material:l}],xm}function Cm(e){let t=new kn;t.name=`stylized-sakura-coin-instances`;let n=Sm().map(n=>{let r=new Oi(n.geometry,n.material,e);return r.name=`stylized-coin-${n.name}`,r.instanceMatrix.setUsage(qe),r.castShadow=!1,r.receiveShadow=!0,r.renderOrder=2,t.add(r),r});return{root:t,meshes:n,setMatrixAt:(e,t)=>n.forEach(n=>n.setMatrixAt(e,t)),commit:(e=!1)=>{n.forEach(t=>{t.instanceMatrix.needsUpdate=!0,e&&t.computeBoundingSphere()})}}}async function wm(e,t,n){let r=n===`high`?bm:n===`safe`?bm.filter((e,t)=>t%2==0):bm.filter((e,t)=>t%5!=4),i=n===`high`?7:n===`safe`?5:6,a=t.id===`sakura-ridge`?[0,-1,1,0,1,-1,0,-1,1,0,1,-1,0,1]:t.id===`hairpin-pass`?[0,1,1,-1,-1,0,1,-1,0,1,-1,-1,1,0]:[0,1,-1,0,-1,1,0,1,-1,0,-1,1,0,-1],o=[],s=n===`safe`?2.45:2.25;for(let n=0;n<r.length;n+=1){let c=t.length*r[n],l=a[n]??0,u=c-(i-1)*s/2,d=[];for(let e=0;e<i;e+=1){let r=mp(u+e*s,0,t.length),i=t.sampleAt(r),a=t.roadProfileAt(r),o=l<0?-a.leftWidth*.53:l>0?a.rightWidth*.53:0,c=im(i),f=i.position.clone().addScaledVector(i.right,o);f.y=Sp(i,f.x,f.z,.48);let p=new J().makeBasis(c.zAxis.clone().negate(),c.yAxis,c.xAxis);d.push({active:!0,position:f,up:c.yAxis.clone(),baseRotation:new jt().setFromRotationMatrix(p),phase:n*.71})}let f=Cm(d.length);f.meshes.forEach(e=>{e.castShadow=!1,e.receiveShadow=!0,e.renderOrder=2}),f.root.name=`Coin row ${n+1}`,f.root.userData.routeDistanceM=c,e.add(f.root);let p=t.roadProfileAt(c),m=l<0?-p.leftWidth*.53:l>0?p.rightWidth*.53:0;o.push({distance:c,lane:l,lateral:m,pickups:d,instances:f})}let c=new J,l=new jt,u=new jt,d=new q(0,1,0),f=new q(1,0,0),p=new jt,m=new q,h=new q(1,1,1),g=new q(0,0,0),_=new jt,v=n===`high`?90:n===`safe`?45:60,y=n===`high`?240:n===`safe`?120:170,b=n===`high`?0:n===`safe`?1/20:1/30,x=-1/0,S=(e,t,n=!1)=>{e.pickups.forEach((n,r)=>{if(!n.active){c.compose(n.position,_,g),e.instances.setMatrixAt(r,c);return}m.copy(n.position).addScaledVector(n.up,Math.sin(t*1.7+n.phase)*.07),l.setFromAxisAngle(d,t*1.55+n.phase),u.setFromAxisAngle(f,Math.sin(t*.95+n.phase*.7)*.08),p.copy(n.baseRotation).multiply(l).multiply(u),c.compose(m,p,h),e.instances.setMatrixAt(r,c)}),e.instances.commit(n)},C=(e,t,n=!1)=>{let r=n||e-x>=b,i=0,a=0;o.forEach(o=>{let s=o.pickups.every(e=>!e.active),c=o.distance>=t-v&&o.distance<=t+y;o.instances.root.visible=!s&&c,o.instances.root.visible&&(i+=1,r&&(S(o,e,n),a+=1))}),r&&(x=e),D.visibleRows=i,D.animatedRowsLastUpdate=a,D.dynamicBufferUploadsLastUpdate=a*(o[0]?.instances.meshes.length??0)},w=o.reduce((e,t)=>e+t.pickups.length,0),T=new $n;Sm().forEach(e=>{e.geometry.boundingBox&&T.union(e.geometry.boundingBox)});let E=T.getSize(new q),D={runSeed:0,rowCount:o.length,totalCoins:w,activeCoins:w,collectedCoins:0,pointsPerCoin:100,collectionRadiusM:1.05,renderBehindM:v,renderAheadM:y,animationRateHz:b>0?Math.round(1/b):`display`,visibleRows:0,animatedRowsLastUpdate:0,dynamicBufferUploadsLastUpdate:0,rowDistancesM:o.map(e=>Number(e.distance.toFixed(1))),rowPlacements:o.map(e=>({distanceM:Number(e.distance.toFixed(2)),lane:e.lane,lateralM:Number(e.lateral.toFixed(2))})),style:`procedural low-poly sakura token`,sourceModelSize:{x:Number(E.x.toFixed(3)),y:Number(E.y.toFixed(3)),z:Number(E.z.toFixed(3))},meshPartsPerRow:o[0]?.instances.meshes.length??0,radialSegments:16,materials:Sm().map(e=>({name:e.material.name,color:`#${e.material.color.getHexString()}`,metalness:e.material.metalness,roughness:e.material.roughness,textured:!1}))},O=(n,a)=>{let c=Tp(n),l=(i-1)*s*.5,u=new J;o.forEach((e,n)=>{e.distance=mp(t.length*r[n]+(c()-.5)*28,24,t.length-54);let i=a.find(t=>Math.abs(t.distance-e.distance)<=l+t.halfLength+4);if(i)e.lane=i.lateral>=0?-1:1;else{let t=c();e.lane=t<.34?-1:t<.67?0:1}let o=t.roadProfileAt(e.distance);e.lateral=e.lane<0?-o.leftWidth*.53:e.lane>0?o.rightWidth*.53:0,e.instances.root.userData.routeDistanceM=e.distance;let d=e.distance-l,f=c()*Math.PI*2;e.pickups.forEach((n,r)=>{let i=mp(d+r*s,0,t.length),a=t.sampleAt(i),o=t.roadProfileAt(i),c=e.lane<0?-o.leftWidth*.53:e.lane>0?o.rightWidth*.53:0,l=im(a);n.position.copy(a.position).addScaledVector(a.right,c),n.position.y=Sp(a,n.position.x,n.position.z,.48),n.up.copy(l.yAxis),u.makeBasis(l.zAxis.clone().negate(),l.yAxis,l.xAxis),n.baseRotation.setFromRotationMatrix(u),n.phase=f,n.active=!0}),S(e,0,!0)}),D.runSeed=n,D.activeCoins=w,D.collectedCoins=0,D.rowDistancesM.splice(0,D.rowDistancesM.length,...o.map(e=>Number(e.distance.toFixed(1)))),D.rowPlacements.splice(0,D.rowPlacements.length,...o.map(e=>({distanceM:Number(e.distance.toFixed(2)),lane:e.lane,lateralM:Number(e.lateral.toFixed(2))}))),x=-1/0,C(0,0),e.updateMatrixWorld(!0)},k=(e,t)=>{let n=0;return o.forEach(r=>{if(Math.abs(r.distance-t)>12)return;let i=r.instances.root;for(;i?.visible;)i=i.parent;i||r.pickups.forEach(t=>{if(!t.active)return;let r=t.position.x-e.x,i=t.position.z-e.z;r*r+i*i>D.collectionRadiusM*D.collectionRadiusM||(t.active=!1,n+=1)})}),n>0&&(D.activeCoins-=n,D.collectedCoins+=n),n};o.forEach(e=>S(e,0,!0)),C(0,0),e.updateMatrixWorld(!0);let A=new $n;o.forEach(e=>A.expandByObject(e.instances.root));let j=A.getSize(new q),M=(o[0]?new $n().setFromObject(o[0].instances.root):new $n).getSize(new q),N=new q,ee=new q,P=o[0]?.instances.meshes[0];if(P&&(P.geometry.computeBoundingBox(),P.getMatrixAt(0,c),P.geometry.boundingBox)){let e=P.geometry.boundingBox.clone().applyMatrix4(c);e.getSize(N),e.getCenter(ee)}let F=o[0]?.pickups[0]?.position??new q;return Object.assign(D,{renderedFieldSize:{x:Number(j.x.toFixed(2)),y:Number(j.y.toFixed(2)),z:Number(j.z.toFixed(2))},firstRowRenderedSize:{x:Number(M.x.toFixed(2)),y:Number(M.y.toFixed(2)),z:Number(M.z.toFixed(2))},firstCoinRenderedSize:{x:Number(Math.abs(N.x).toFixed(3)),y:Number(Math.abs(N.y).toFixed(3)),z:Number(Math.abs(N.z).toFixed(3))},firstCoinPositionOffset:{x:Number((ee.x-F.x).toFixed(3)),y:Number((ee.y-F.y).toFixed(3)),z:Number((ee.z-F.z).toFixed(3))}}),{stats:D,collect:k,update:C,reroll:O}}function Tm(e,t,n){let r=new Na({color:5522235,roughness:.9}),i=new Na({color:15969638,emissive:15302975,emissiveIntensity:1.1,roughness:.55});for(let[a,o]of[[-7.6,155],[8.8,190],[-3.5,210],[34,170]]){let s=new Z(new ua(.08,.1,3.1,8),r);s.position.set(a,1.55,o+t);let c=new Z(new xa(.3,10,8),i);c.scale.y=1.3,c.position.set(a,2.82,o+t),e.add(s,c),n.push({id:`lantern-${o}`,kind:`circle`,position:s.position,radius:.12})}}async function Em(e,t,n,r,i,a,o,s){let c=e=>e+884,l=Nf(),u=[],d=[],f=[],p=Sf,m=wf,h=Cf,g=new ya(152,192,152,192).rotateX(-Math.PI/2);g.translate(0,0,c(168));let _=g.attributes.position;for(let e=0;e<_.count;e+=1){let t=_.getX(e),n=_.getZ(e),r=yp(.78,1,Math.max(Math.abs(t)/(67+Math.sin(n*.047)*4),Math.abs(n-c(169))/89)),i=Lf(l,t,n);_.setY(e,G.lerp(i,Math.min(i,xp(t,n)-.04),r))}g.computeVertexNormals();let v=new Z(g,s.ground);v.name=`Hanasato meadow and recessed stream bed`,v.receiveShadow=!0,v.userData.surfaceVariation={textureTileSizeM:4,receivesShadows:!0},e.add(v),e.userData.villageGroundSurface=v.userData.surfaceVariation;let y=[],b=Tp(53102),x=120;t===`high`&&(x=160),t===`safe`&&(x=48);let S=0;for(;y.length<x&&S<x*20;){S+=1;let t=Qf[Math.floor(b()*Qf.length)],r=b()*Math.PI*2,i=.28+b()*.62,a=t.x+Math.cos(r)*t.radiusX*i,o=t.z+Math.sin(r)*t.radiusZ*i;if(Math.hypot(a-Ef.x,o-Ef.z)<165||Ip(n,a,o,6)<1.5)continue;let s=Pp(n,a,o)-.2,c=b()<.08?`sakuraTree`:`cedarTree`;y.push(Qp(e,c,new q(a,s,o),{height:9+b()*7},b()*Math.PI*2).then(t=>{$p(t,(e,t)=>Pp(n,e,t),.45,.18);let r=Lp(n,t);return t.userData.roadClearanceM=r,t.userData.vegetationKind=c,r<1.5&&e.remove(t),rm(t)}))}await Promise.all(y);let C=s.path,w=s.verge,T=[],E=[];Object.values(l.roads).forEach(t=>{for(let e=0;e<t.samples.length-1;e+=1){let n=t.samples[e],r=t.samples[e+1];T.push({start:new q(n.x,h,n.z),end:new q(r.x,h,r.z),halfWidth:Math.max(n.halfWidth,r.halfWidth)})}for(let n of[!0,!1]){let r=[],i=[],a=[];t.samples.forEach((e,o)=>{let s=e.halfWidth+(n?.65:0),c=n?m:h;if(r.push(e.x-e.rightX*s,c,e.z-e.rightZ*s,e.x+e.rightX*s,c,e.z+e.rightZ*s),i.push(0,e.distance/10,1,e.distance/10),o===t.samples.length-1)return;let l=t.samples[o+1];if(t.id===`south-entry`&&e.z>kf.z-kf.halfLength+.2&&l.z<kf.z+kf.halfLength-.2)return;let u=o*2;a.push(u,u+2,u+1,u+2,u+3,u+1)});let o=new jr;o.setAttribute(`position`,new X(r,3)),o.setAttribute(`uv`,new X(i,2)),o.setIndex(a),o.computeVertexNormals();let s=new Z(o,n?w:C);s.name=`${t.id} ${n?`verge`:`road`}`,s.receiveShadow=!0,s.renderOrder=n?10:20,E.push(s),e.add(s)}});let D=new Z(new la(6.1,48).rotateX(-Math.PI/2),C);D.name=`Market meeting square`,D.position.set(-1.4,h,c(178)),D.scale.set(1.18,1,.87),D.receiveShadow=!0,D.renderOrder=20,e.add(D),T.push({start:D.position.clone(),end:D.position.clone(),halfWidth:6.5}),e.userData.villageRoadSurfaces={groundY:p,mainShoulderY:m,mainStreetY:h,layout:`curved market street with garden and orchard loops`,roads:Object.values(l.roads).map(e=>({id:e.id,lengthM:e.length,samples:e.samples.length})),minimumSurfaceClearanceM:m-p,routeTransition:{sharedEntryAnchors:!0,overlapM:.35,entries:n.map(e=>{let t=Df[e.entryId],n=e.sampleAt(e.length),r=e.roadProfileAt(e.length);return{route:e.id,endpointGapM:Math.hypot(n.position.x-t.position.x,n.position.z-t.position.z),heightErrorM:Math.abs(n.position.y-h),widthErrorM:Math.max(Math.abs(r.leftWidth-4),Math.abs(r.rightWidth-4))}})}};let O=[{name:`tea-house`,key:`teaHouse`,position:new q(-12.5,0,c(131.5)),fit:{height:6.6},frontDirection:new q(1,0,.12),burialDepth:.36},{name:`shop`,key:`shop`,position:new q(12.4,0,c(168.8)),fit:{height:6.2},frontDirection:new q(-1,0,-.2),burialDepth:.1},{name:`maple-cottage`,key:`villageHouse`,position:new q(-30.3,0,c(148)),fit:{height:5.7},burialDepth:.06},{name:`weaver-house`,key:`villageHouse`,position:new q(-35.2,0,c(166.1)),fit:{height:6.2},burialDepth:.06},{name:`garden-house`,key:`villageHouse`,position:new q(-30.1,0,c(196.3)),fit:{height:5.8},burialDepth:.06},{name:`north-cottage`,key:`villageHouse`,position:new q(-14.8,0,c(212.7)),fit:{height:6.1},burialDepth:.06},{name:`blossom-cottage`,key:`villageHouse`,position:new q(-11.6,0,c(160.4)),fit:{height:5.5},burialDepth:.06},{name:`market-house`,key:`villageHouse`,position:new q(-11.7,0,c(195.7)),fit:{height:5.6},burialDepth:.06},{name:`cedar-cottage`,key:`villageHouse`,position:new q(38.7,0,c(156.2)),fit:{height:5.7},burialDepth:.06},{name:`orchard-house`,key:`villageHouse`,position:new q(34.5,0,c(195.8)),fit:{height:6.3},burialDepth:.06},{name:`potter-house`,key:`villageHouse`,position:new q(17.35,0,c(198.9)),fit:{height:5.6},burialDepth:.06},{name:`hill-cottage`,key:`villageHouse`,position:new q(20,0,c(234)),fit:{height:5.9},burialDepth:.06}],k=e=>{let t=Ff(l,e.x,e.z);return new q(t.x-e.x,0,t.z-e.z).normalize()},A=[],j=new Map,M=await Promise.all(O.map(async t=>{let n=(t.frontDirection??k(t.position)).clone().normalize(),r=Math.atan2(-n.z,n.x),i=await Qp(e,t.key,t.position.clone(),t.fit);i.name=t.name,i.updateMatrixWorld(!0);let a=new $n().setFromObject(i),o=a.getSize(new q),s=p;i.position.y+=s-t.burialDepth-a.min.y,i.rotation.y=r,i.updateMatrixWorld(!0);let c=new $n().setFromObject(i),d=new q(1,0,0).applyAxisAngle(new q(0,1,0),r),f={id:t.name,kind:`box`,position:i.position,halfX:o.x*.46,halfZ:o.z*.46,rotation:r};u.push(f);let g=i.position.clone().addScaledVector(d,o.x*.5+1.15);g.y=h,j.set(t.name,g);let _=Ff(l,g.x,g.z),v=new Z(Xp(new va([new q(_.x,m,_.z),g.clone().addScaledVector(d,1.1).setY(m),g.clone().addScaledVector(d,-1.35).setY(m)],!1,`centripetal`).getPoints(16),.85),w);v.name=`${t.name} doorstep path`,v.receiveShadow=!0,e.add(v);let y=1/0;for(let e of[-1,1])for(let t=0;t<=8;t+=1){let n=t/4-1;for(let[t,a]of[[f.halfX*e,f.halfZ*n],[f.halfX*n,f.halfZ*e]]){let e=i.position.x+Math.cos(r)*t+Math.sin(r)*a,n=i.position.z-Math.sin(r)*t+Math.cos(r)*a,o=Ff(l,e,n);y=Math.min(y,o.distance-o.halfWidth)}}i.userData.townFootprint=f,A.push({name:t.name,facingErrorDegrees:G.radToDeg(d.angleTo(n)),baseGapM:Math.max(0,c.min.y-s),burialM:Math.max(0,s-c.min.y),roadClearanceM:y,door:g});for(let t of[-1,1]){let n=g.clone().add(new q(-d.z*t*2,0,d.x*t*2)),i=Ff(l,n.x,n.z);i.distance<i.halfWidth+.8||(n.y=p-.02,await Qp(e,`flowers`,n,{width:1.15},r))}return i}));if(e.userData.villageBuildings={total:M.length,maximumFacingErrorDegrees:Math.max(...A.map(e=>e.facingErrorDegrees)),maximumBaseGapM:Math.max(...A.map(e=>e.baseGapM)),minimumBurialM:Math.min(...A.map(e=>e.burialM)),minimumRoadClearanceM:Math.min(...A.map(e=>e.roadClearanceM)),placements:A},(await Promise.all([Qp(e,`produceStall`,new q(-11,0,c(186)),{height:3.4},Math.PI/2),Qp(e,`shrineCorner`,new q(35.5,0,c(224)),{width:7},Math.PI*.3)])).forEach(e=>{e.updateMatrixWorld(!0);let t=new $n().setFromObject(e),n=t.getSize(new q);u.push({id:e.name,kind:`box`,position:t.getCenter(new q),halfX:n.x*.5,halfZ:n.z*.5,rotation:0})}),t!==`safe`)for(let[t,n,r]of[[-8.5,150,.14],[9.5,189,-.2],[-20,183,.12]]){let i=await Qp(e,`utilityPole`,new q(t,p,c(n)),{height:6.1},r);u.push({id:`pole-${n}`,kind:`circle`,position:i.position,radius:.2})}let N=new Na({color:7753785,roughness:.86}),ee=new Na({color:4336933,roughness:.9}),P=(t,n,r)=>{let i=new kn;i.name=t;let a=new Z(new ca(1.75,.14,.5),N);a.position.y=.47;let o=new Z(new ca(1.75,.48,.12),N);o.position.set(0,.76,-.22);let s=new Z(new ca(.14,.47,.42),ee);s.position.set(-.62,.235,0);let c=s.clone();c.position.x=.62;for(let e of[a,o,s,c])e.castShadow=!0,e.receiveShadow=!0,i.add(e);i.position.copy(n),i.rotation.y=r,e.add(i),nm(i,T,.55,1),i.updateMatrixWorld(!0);let l=new $n().setFromObject(i),d=l.getSize(new q);return u.push({id:t,kind:`box`,position:l.getCenter(new q),halfX:d.x*.5,halfZ:d.z*.5,rotation:0}),i},F=P(`West garden bench`,new q(-14,0,c(150)),Math.PI/2),te=P(`East garden bench`,new q(13,0,c(209)),-Math.PI/2),ne=[];[[-40,132,9],[20,134,8],[45,140,8.5],[-44,183,9],[-41,215,9.4],[-25,234,8.8],[-3,235,9],[41,236,8.6],[48,213,8.4],[46,174,8],[5.5,146,7.6],[-14,174,7.4],[14,185,7.8],[8,220,6.7],[-47,154,8.5],[46,225,9.5],[-13,140,8.7],[21,157,8.4],[-30,176,10],[29,208,8.8],[-30,226,10],[32,132,9]].forEach(([t,n,r],i)=>{let a=`camphorTree`;i%3==0?a=`sakuraTree`:i%5==0&&(a=`cedarTree`),ne.push(Qp(e,a,new q(t,0,c(n)),{height:r},i*.73).then(t=>(nm(t,T,1.25,a===`camphorTree`?.28:1),u.some(e=>Bf(t.position.x,t.position.z,1.1,e))?(e.remove(t),t):($p(t,()=>.01,.45,.14),t.userData.vegetationKind=a,u.push({id:`tree-${i}`,kind:`circle`,position:t.position,radius:r*.065}),t))))});let re=[{id:`aoi`,name:`Aoi`,role:`Tea house keeper`,kind:`host`,position:j.get(`tea-house`).clone().add(new q(0,0,1.8)),rotation:Math.PI/2,dialogue:`Welcome home. The kettle is on. Come through the front door when you need a rest.`},{id:`haru`,name:`Haru`,role:`Shopkeeper`,kind:`host`,position:j.get(`shop`).clone().add(new q(0,0,1.8)),rotation:-Math.PI/2,dialogue:`Every mountain road brings something different into the village. I like hearing what riders found up there.`},{id:`nori`,name:`Nori`,role:`Produce seller`,kind:`stall`,position:new q(-10.5,p,c(182.8)),rotation:0,dialogue:`I set up here by the square every morning. The mountain air is good for the fruit, and for the journey home.`},{id:`emi`,name:`Emi`,role:`Gardener`,kind:`garden`,position:new q(-19.6,p,c(163)),rotation:Math.PI/2,dialogue:`These beds need a little attention each day. You can usually find me here beside the blossom cottage.`},{id:`kiyo`,name:`Kiyo`,role:`Retired carpenter`,kind:`sit-west`,dialogue:`That bridge has carried a lot of muddy boots. Take the garden lane if you want the quieter way around.`},{id:`yui`,name:`Yui`,role:`Potter`,kind:`sit-east`,dialogue:`The shrine garden is just up the lane. I come here between firings to listen to the birds.`},{id:`ren`,name:`Ren`,role:`Neighbour`,kind:`walk`,path:l.roads[`garden-lane`],destinations:[`Tea house lane`,`North gardens`],speed:.8,dialogue:`I'm taking the long way through the gardens. There's no rush once you're home.`},{id:`yuna`,name:`Yuna`,role:`Orchard tender`,kind:`walk`,path:l.roads[`orchard-lane`],destinations:[`Market street`,`Orchard gardens`],speed:.76,dialogue:`I'm on my way between the orchard and the market. Stop me any time.`},{id:`taro`,name:`Taro`,role:`Market helper`,kind:`walk`,path:l.roads[`market-lane`],destinations:[`Garden lane`,`Market square`],speed:.72,dialogue:`Nori's stall is just off the square. I help keep an eye on things along this lane.`},{id:`sora`,name:`Sora`,role:`Shrine caretaker`,kind:`shrine`,position:new q(30,p,c(220)),rotation:Math.PI*.25,dialogue:`A quiet moment before the next descent? The garden is open to everyone.`}];re.forEach((n,o)=>{let s=n.position?.clone()??F.position.clone();n.kind===`sit-east`&&s.copy(te.position),n.path&&If(n.path,n.path.length*.35,.7,s);let c=t!==`high`||o%2==0?`villagerIndigo`:`villagerOchre`;ne.push(Qp(e,c,s,{height:1.7},0).then(e=>{e.name=`${n.name} / ${n.role}`,e.userData.activity=n.kind,e.userData.residentId=n.id;let t={id:n.id,name:n.name,role:n.role,object:e,destination:n.destinations?.[1]??n.role,activity:n.path?`walking`:`working`};d.push(t),n.kind.startsWith(`sit-`)||u.push({id:n.id,kind:`circle`,position:e.position,radius:.34}),r.push({id:n.id,label:`Talk to ${n.name}`,kind:`npc`,position:e.position,dialogue:n.dialogue});let s=e.userData.animations,c=new is(e),l=s.find(e=>/idle|base/i.test(e.name))??s[0]??null,f=s.find(e=>/walk/i.test(e.name))??l,p=l?c.clipAction(l):null,m=f?c.clipAction(f):p,h=p;p?.play(),i.push(c);let g=(e,t)=>{e&&(h!==e&&(h?.fadeOut(.2),e.reset().fadeIn(.2).play(),h=e),e.timeScale=t)},_=hp(e,o*.83,o),v=gp(e);if(a.push((r,i,a)=>{let o=Math.hypot(a.x-e.position.x,a.z-e.position.z);if(e.userData.approached=o<2.8,e.userData.approached&&(t.activity=`greeting`),n.kind.startsWith(`sit-`)||n.kind===`walk`)return;let s=e.userData.approached?Math.atan2(a.x-e.position.x,a.z-e.position.z):n.rotation??0,c=Math.atan2(Math.sin(s-e.rotation.y),Math.cos(s-e.rotation.y));e.rotation.y+=mp(c,-i*2.5,i*2.5)}),n.kind===`walk`&&n.path){let r=n.path,i=r.length-3,s=r.length*.35,c=1,l=0,d=new q;return e.rotation.y=If(r,s,.7,e.position),e.userData.activityPath=r.id,a.push((a,f,h)=>{let v=If(r,s,.7,d);c<0&&(v+=Math.PI),e.userData.approached&&(v=Math.atan2(h.x-e.position.x,h.z-e.position.z));let y=Math.atan2(Math.sin(v-e.rotation.y),Math.cos(v-e.rotation.y));if(e.rotation.y+=mp(y,-f*2.6,f*2.6),e.userData.approached||l>0||Math.abs(y)>.65){l=Math.max(0,l-f),g(p,1),_(a),t.activity=e.userData.approached?`greeting`:`resting`;return}let b=mp(s+c*(n.speed??.76)*f,3,i);if(If(r,b,.7,d),u.some(e=>e.id!==n.id&&Bf(d.x,d.z,.37,e))){g(p,1),_(a),t.activity=`resting`;return}s=b,e.position.copy(d),t.activity=`walking`,g(m,(n.speed??.76)/.95),(s===i||s===3)&&(l=2.8+o*.12,c*=-1,t.destination=n.destinations[+(c>0)])}),e}if(n.kind===`sit-west`||n.kind===`sit-east`){let r=n.kind===`sit-west`?F:te;return e.position.copy(r.localToWorld(new q(0,-.285,.08))),e.rotation.y=r.rotation.y,a.push(n=>{g(p,1),_(n),t.activity=e.userData.approached?`greeting`:`resting`;let r=Math.sin(n*.72+o*.9);v(`Hips`,-.07,0,0),v(`Spine02`,.14,r*.012,0),v(`Spine01`,.05,0,0),v(`LeftUpLeg`,-1.38,-.04,-.035),v(`RightUpLeg`,-1.38,.04,.035),v(`LeftLeg`,1.3,0,0),v(`RightLeg`,1.3,0,0),v(`LeftFoot`,-.18,0,0),v(`RightFoot`,-.18,0,0),v(`LeftArm`,-.18+r*.006,0,-.08),v(`RightArm`,-.18-r*.006,0,.08),v(`LeftForeArm`,-.42,0,0),v(`RightForeArm`,-.42,0,0)}),e}return e.rotation.y=n.rotation??0,a.push(r=>{if(g(p,1),_(r),t.activity=e.userData.approached?`greeting`:`working`,e.userData.approached)return;let i=Math.sin(r*1.25+o*.7);if(n.kind===`garden`)v(`Hips`,-.08,0,0),v(`Spine02`,.32+i*.025,0,0),v(`Spine01`,.14,0,0),v(`neck`,-.12,i*.03,0),v(`LeftArm`,-.42,0,-.28),v(`RightArm`,-.36,0,.28),v(`LeftForeArm`,-.58+i*.08,0,0),v(`RightForeArm`,-.52-i*.08,0,0);else if(n.kind===`stall`)v(`Spine02`,.1,i*.035,0),v(`LeftArm`,-.3,0,-.22),v(`RightArm`,-.22,0,.2),v(`LeftForeArm`,-.62+i*.12,0,0),v(`RightForeArm`,-.5-i*.1,0,0);else if(n.kind===`shrine`){let e=(Math.sin(r*.58+.7)+1)*.5;v(`Hips`,-e*.08,0,0),v(`Spine02`,e*.34,0,0),v(`Spine01`,e*.14,0,0),v(`neck`,e*.1,0,0),v(`LeftForeArm`,-.28,0,0),v(`RightForeArm`,-.28,0,0)}}),e}))}),[[-8,128],[7,132],[-19,134],[18,141],[-32,137],[36,147],[-8.5,160],[7,155],[-20,170],[20,174],[-9,187],[8,181],[-31,181],[34,187],[-20,204],[9,205],[-28,215],[23,217],[-3,225],[13,227],[-43,173],[44,205],[-16,146],[18,210]].forEach(([t,n],r)=>{ne.push(Qp(e,r%4==0?`bush`:`flowers`,new q(t,0,c(n)),r%4==0?{height:1.35}:{width:1.55},r*.4).then(t=>(nm(t,T,.6,.9),u.some(e=>Bf(t.position.x,t.position.z,.75,e))?(e.remove(t),t):$p(t,()=>.01,r%4==0?.5:.3,r%4==0?.1:.04))))}),await Promise.all(ne),await Qp(e,`flowers`,new q(-18.8,p,c(163)),{width:1.6},.3),e.userData.villageActivities={totalActors:re.length,walkers:re.filter(e=>e.kind===`walk`).length,seated:re.filter(e=>e.kind.startsWith(`sit-`)).length,workers:re.filter(e=>[`garden`,`stall`,`host`,`shrine`].includes(e.kind)).length,benches:2,movement:`distance along shared street curves, endpoint rests, approach yielding`,residents:d.map(({id:e,name:t,role:n})=>({id:e,name:t,role:n}))};let ie=await Qp(e,`cat`,new q(-11,p,c(147)),{height:.7},-.4),ae=await Qp(e,`dog`,new q(18,p,c(205)),{height:.86},Math.PI*.8);r.push({id:`mikan-cat`,label:`Greet Mikan`,kind:`cat`,position:ie.position.clone(),keepsake:{title:`Mikan's Hello`,text:`A small calico cat approved of your quiet arrival.`,icon:`♧`}}),r.push({id:`kumo-dog`,label:`Say hello to Kumo`,kind:`dog`,position:ae.position.clone(),keepsake:{title:`Kumo's Welcome`,text:`A tiny village dog offered one soft woof and a wag.`,icon:`◡`}}),u.push({id:`mikan-cat`,kind:`circle`,position:ie.position,radius:.3},{id:`kumo-dog`,kind:`circle`,position:ae.position,radius:.38});let oe=.01,se=[];for(let[t,n,r,i]of[[`Orchard delivery car`,34.8,188,Math.PI*.48],[`Garden resident car`,-33,180,Math.PI*.54]]){let a=await Qp(e,`car`,new q(n,m-oe,c(r)),{height:1.4,scaleX:1.25}),o=new $n().setFromObject(a).getSize(new q);a.name=t,a.rotation.y=i,a.userData.parked=!0,u.push({id:t,kind:`box`,position:a.position,halfX:o.x*.5,halfZ:o.z*.5,rotation:i});let s=new Z(new la(2.9,32).rotateX(-Math.PI/2),w);s.name=`${t} parking bay`,s.position.set(n,m,c(r)),s.scale.set(1,1,.72),s.receiveShadow=!0,e.add(s),a.updateMatrixWorld(!0);let l=new $n().setFromObject(a).min.y;se.push({name:t,roadY:m,tireBottomY:l,tirePenetrationM:Math.max(0,m-l),tireGapM:Math.max(0,l-m)})}e.userData.villageCarContact={targetTireInsetM:oe,maximumTirePenetrationM:Math.max(...se.map(e=>e.tirePenetrationM)),maximumTireGapM:Math.max(...se.map(e=>e.tireGapM)),cars:se};let I=await Qp(e,`bridge`,new q(kf.x,0,kf.z),{height:1.2,scaleX:2.6,scaleZ:2.8});I.name=`Hanasato stream bridge`,I.updateMatrixWorld(!0);let ce=new $n().setFromObject(I),le=new os,ue=new q,de=new q(0,-1,0),fe=[],pe=[];for(let e=0;e<=100;e+=1){let t=G.lerp(ce.min.z+.04,ce.max.z-.04,e/100),n=-1/0;for(let e of[0,-.04,.04])ue.set(e,ce.max.y+1,t),le.set(ue,de),fe.length=0,le.intersectObject(I,!0,fe),fe[0]&&(n=Math.max(n,fe[0].point.y));pe.push(Number.isFinite(n)?n:pe[e-1]??h)}let L=h-Math.min(pe[0],pe[100]);I.position.y+=L,pe.forEach((e,t)=>{pe[t]=e+L}),I.updateMatrixWorld(!0);let R={minX:-kf.halfWidth,maxX:kf.halfWidth,minZ:ce.min.z+.04,maxZ:ce.max.z-.04,heightAt:(e,t)=>{if(Math.abs(e)>kf.halfWidth)return null;let n=mp((t-R.minZ)/(R.maxZ-R.minZ),0,1)*100,r=Math.min(99,Math.floor(n));return G.lerp(pe[r],pe[r+1],n-r)}};f.push(R);let me=R.heightAt(0,kf.z);e.userData.bridgeWalkSurface={minX:R.minX,maxX:R.maxX,minZ:R.minZ,maxZ:R.maxZ,centerDeckHeightM:me,sampledPoints:pe.length,minimumDeckHeightM:Math.min(...pe),maximumDeckHeightM:Math.max(...pe),maximumSampleStepM:Math.max(...pe.slice(1).map((e,t)=>Math.abs(e-pe[t])))};for(let e of[-1,1])u.push({id:`bridge-rail-${e}`,kind:`box`,position:new q(e*2.36,0,kf.z),halfX:.17,halfZ:kf.halfLength-.1,rotation:0});let he=(e,t)=>Math.abs(e)>3?h:t<R.minZ&&t>R.minZ-2.4?G.lerp(h,pe[0],yp(R.minZ-2.4,R.minZ,t)):t>R.maxZ&&t<R.maxZ+2.4?G.lerp(pe[100],h,yp(R.maxZ,R.maxZ+2.4,t)):t>=R.minZ&&t<=R.maxZ?R.heightAt(mp(e,-2,2),t):h;E.forEach(e=>{let t=e.geometry.attributes.position,n=e.name.endsWith(`verge`);for(let e=0;e<t.count;e+=1)t.setY(e,he(t.getX(e),t.getZ(e))-(n?.028:0));t.needsUpdate=!0,e.geometry.computeVertexNormals()});let ge=Yp();ge.fragmentShader=`
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vWorld;
    #include <fog_pars_fragment>
    void main() {
      float edge = pow(abs(vUv.x - 0.5) * 2.0, 3.0);
      float flow = sin(vUv.y * 5.5 - uTime * 0.85 + sin(vUv.x * 12.0) * 0.6);
      float crossRipple = sin(vUv.x * 25.0 + vUv.y * 3.0 + uTime * 0.3);
      float light = pow(max(0.0, flow * crossRipple), 12.0) * 0.16;
      vec3 color = mix(vec3(0.09, 0.26, 0.25), vec3(0.29, 0.46, 0.36), edge * 0.7);
      color += vec3(0.47, 0.62, 0.57) * light;
      gl_FragColor = vec4(color, 0.9);
      #include <fog_fragment>
    }
  `,o.push(ge);let _e=new Z(Xp(l.stream.samples.map(e=>new q(e.x,-.25,e.z)),l.stream.samples.map(e=>e.halfWidth)),ge);_e.name=`Curved Hanasato stream`,_e.renderOrder=3,e.add(_e);let ve=Kp(10656642,!0,!0);for(let t of[-1,1]){let n=[],r=[],i=[];l.stream.samples.forEach((e,a)=>{let o=e.halfWidth+1.7+Math.sin(e.distance*.4)*.22;for(let[i,a]of[[e.halfWidth-.07,-.31],[e.halfWidth+.75,-.11],[o,.014]])n.push(e.x+e.rightX*i*t,a,e.z+e.rightZ*i*t),r.push(i/4,e.distance/10);if(a!==l.stream.samples.length-1)for(let e=0;e<2;e+=1){let n=a*3+e;t>0?i.push(n,n+3,n+1,n+3,n+4,n+1):i.push(n,n+1,n+3,n+3,n+1,n+4)}});let a=new jr;a.setAttribute(`position`,new X(n,3)),a.setAttribute(`uv`,new X(r,2)),a.setIndex(i),a.computeVertexNormals();let o=new Z(a,ve);o.name=`Sloped gravel stream bank ${t}`,o.receiveShadow=!0,e.add(o)}let ye=[],be=Tp(84192);for(let t=0;t<12;t+=1){let n=(t+.15+be()*.7)/12*l.stream.length,r=be()<.5?-1:1,i=2+Math.floor(be()*3);for(let a=0;a<i;a+=1){let i=new q,o=2.5+be()*1.1;if(If(l.stream,n+(be()-.5)*4.8,r*o,i),Math.abs(i.x)<6.5)continue;i.y=G.lerp(-.24,0,yp(2.3,4,o))-.06;let s=.35+be()*.45;ye.push(Qp(e,`mossyRoadRock`,i,{height:s},be()*Math.PI*2).then(e=>(u.push({id:`stream-rock-${t}-${a}`,kind:`circle`,position:e.position,radius:s*.75}),e)))}if(t%3!=1){let i=new q;If(l.stream,n+1.6,r*(4.2+be()),i),i.y=p-.04;let a=Ff(l,i.x,i.z);a.distance>a.halfWidth+1.5&&ye.push(Qp(e,`groundcover`,i,{width:2+be()*1.4},t))}}await Promise.all(ye),Tm(e,884,u),Wf(e,l,u,[...j.values()],t,s.meadow),r.push({id:`tea-house`,label:`Enter the tea house`,kind:`tea-house`,position:j.get(`tea-house`)}),r.push({id:`shop`,label:`Enter the little shop`,kind:`shop`,position:j.get(`shop`)});let xe=(e,t)=>{for(let n of f)if(e>=n.minX&&e<=n.maxX&&t>=n.minZ&&t<=n.maxZ){let r=n.heightAt(e,t);if(r!==null)return r}let n=Ff(l,e,t);return n.distance<=n.halfWidth?he(e,t):((e+1.4)/7.2)**2+((t-c(178))/5.3)**2<=1?h:n.distance<=n.halfWidth+.65?m:Lf(l,e,t)};return d.forEach(({object:e})=>{String(e.userData.activity).startsWith(`sit-`)||(e.position.y=xe(e.position.x,e.position.z))}),e.userData.townCollision={solids:u.length,playerRadiusM:.38,streamBlocked:!0,bridgePassageWidthM:kf.halfWidth*2},e.userData.townStream={lengthM:l.stream.length,waterY:-.25,bedY:-.72,bankWidthM:1.7,profileSamples:pe.length},{plan:l,colliders:u,residents:d,heightAt:xe}}async function Dm(e){let t=new kn;t.visible=!1;let n=e===`shopInterior`,r=await Qp(t,e,new q(0,0,n?2.6:0),{width:n?5.4:14.5},Math.PI);r.name=e;let i=new Na({color:e===`teaInterior`?14271649:13942163,roughness:.96}),a=new Na({color:e===`teaInterior`?9598036:8609347,roughness:1}),o=new Z(new ca(18,.25,28),a);o.position.set(0,-.18,-3);let s=new Z(new ca(18,8,.3),i);s.position.set(0,4,8.8);let c=new Z(new ca(.3,8,22),i);c.position.set(-9,4,-2);let l=c.clone();l.position.x=9;let u=new Z(new ca(18,.3,22),new Na({color:7294264,roughness:1}));u.position.set(0,8,-2),t.add(o,s,c,l,u);let d=new Mo(e===`teaInterior`?16763274:16757879,18,22,2);return d.position.set(0,5,1.5),t.add(d),t}function Om(e,t,n){let r=Gf[n],i=Math.max(1,Math.ceil(t.length/r)),a=Array.from({length:i},(e,n)=>{let i=Math.min(t.length,(n+.5)*r),a=new kn;return a.name=`${t.name} detail chunk ${n+1}`,{group:a,center:t.sampleAt(i).position,routeDistance:i}}),o=new $n,s=new q,c=[...e.children];return e.clear(),a.forEach(t=>e.add(t.group)),c.forEach(e=>{e.updateWorldMatrix(!0,!0),o.setFromObject(e),o.isEmpty()?s.copy(e.position):o.getCenter(s);let n=Number.isFinite(e.userData.routeDistanceM)?Number(e.userData.routeDistanceM):t.nearestAt(s).distance,c=mp(Math.floor(n/r),0,i-1);a[c].group.add(e)}),a}function km(e){let t=new kn;t.name=`Mountain overview map`,t.visible=!1;let n={"sakura-ridge":15304090,"hairpin-pass":14785099,"cedar-stream":4033922};Qf.forEach(e=>{let n=new Z(new la(1,48).rotateX(-Math.PI/2),new Gr({color:2575160,transparent:!0,opacity:.46,depthTest:!1}));n.name=`${e.name} overview footprint`,n.position.set(e.x,2,e.z),n.scale.set(e.radiusX*.72,1,e.radiusZ*.72),n.renderOrder=997,t.add(n)}),Kf.forEach(r=>{let i=e[r],a=new Z(Xp(i.samples.filter((e,t)=>t%8==0||t===i.samples.length-1).map(e=>e.position.clone().add(new q(0,4.5,0))),6.5),new Gr({color:n[r],transparent:!0,opacity:.96,depthTest:!1}));a.name=`${i.name} overview ribbon`,a.renderOrder=1e3,t.add(a)});let r=new Z(new ya(92,142).rotateX(-Math.PI/2),new Gr({color:15915429,transparent:!0,opacity:.94,depthTest:!1}));r.name=`Hanasato overview footprint`,r.position.set(Ef.x,6,Ef.z),r.renderOrder=999;let i=new Z(new ba(6,11,24).rotateX(-Math.PI/2),new Gr({color:16777215,side:2,depthTest:!1}));return i.name=`Overview player marker`,i.renderOrder=1002,t.add(r,i),t.userData.playerMarker=i,t.userData.worldTopology={layout:`organic-four-peak-ring`,villageCenter:Ef,peaks:Qf.map(({id:e,name:t,x:n,z:r,height:i})=>({id:e,name:t,x:n,z:r,height:i})),entries:Object.values(Df).map(({id:e,position:t,inward:n})=>({id:e,position:t,inward:n})),routeAssignments:Object.fromEntries(Kf.map(e=>[e,{peakId:$f[e].peakId,entryId:$f[e].entryId}]))},t}function Am(e,t,n){let r=Df[e.entryId],i=new q(r.inward.x,0,r.inward.z).normalize(),a=e.samples.map((t,n)=>e.roadProfileAt(n/Math.max(1,e.samples.length-1)*e.length)),o=Math.max(0,e.length-Yf),s=Math.floor(o/e.length*(e.samples.length-1)),c=e.samples.slice(s),l=e.sampleAt(e.length),u=e.roadProfileAt(e.length),d=l.tangent.clone().setY(0).normalize(),f=e.samples.map(e=>e.position.y-xp(e.position.x,e.position.z)),p=e.samples.flatMap((t,n)=>{let r=n/Math.max(1,e.samples.length-1)*e.length;return[Ap(e,t,r,-1).blendWidth,Ap(e,t,r,1).blendWidth]}),m=f.filter(e=>e>0),h=f.reduce((e,t,n)=>t>f[e]?n:e,0),g=f.reduce((e,t,n)=>t<f[e]?n:e,0),_=0,v=0,y=0,b=e.length/Math.max(1,e.samples.length-1),x=0,S=0,C=0,w=0;for(let t=1;t<e.samples.length;t+=1){let n=e.samples[t-1].tangent.clone().setY(0).normalize(),r=e.samples[t].tangent.clone().setY(0).normalize(),i=n.angleTo(r);if(_+=i,i<G.degToRad(.08))continue;let a=Math.sign(n.z*r.x-n.x*r.z);y!==0&&a!==y&&(v+=1),y=a,e.samples[t].grade<-.001?(S+=b,x=Math.max(x,S)):S=0,e.samples[t].grade<.006?(w+=b,C=Math.max(C,w)):w=0}return{maximumAllowedBankPercent:ep*100,maximumRoadBankPercent:Math.max(...e.samples.map(e=>Math.abs(e.bankSlope)))*100,maximumRawTerrainBankPercent:Math.max(...e.samples.map(e=>Math.abs(e.rawTerrainBankSlope)))*100,maximumTerrainCutDepthM:t,maximumTerrainFillDepthM:n,maximumCenterlineFillM:Math.max(0,...f),maximumCenterlineCutM:Math.max(0,...f.map(e=>-e)),maximumCenterlineFillDistanceM:h/Math.max(1,e.samples.length-1)*e.length,maximumCenterlineFillPosition:e.samples[h].position,maximumCenterlineCutDistanceM:g/Math.max(1,e.samples.length-1)*e.length,maximumCenterlineCutPosition:e.samples[g].position,meanPositiveCenterlineFillM:m.length>0?m.reduce((e,t)=>e+t,0)/m.length:0,centerlineShareAboveOneMeterPercent:f.filter(e=>e>1).length/f.length*100,maximumDownhillGradePercent:Math.max(...e.samples.map(e=>e.grade))*100,maximumUphillGradePercent:Math.max(0,-Math.min(...e.samples.map(e=>e.grade)))*100,uphillSharePercent:e.samples.filter(e=>e.grade<-.001).length/e.samples.length*100,longestUphillRunM:x,nearFlatSharePercent:e.samples.filter(e=>e.grade<.006).length/e.samples.length*100,longestNearFlatRunM:C,totalPlanTurnDegrees:G.radToDeg(_),directionChanges:v,terrainUnderlayDepthM:lp,terrainBlendTargetGradePercent:op*100,maximumTerrainBlendWidthM:Math.max(...p),minimumRoadWidthM:Math.min(...a.map(e=>e.leftWidth+e.rightWidth)),maximumRoadWidthM:Math.max(...a.map(e=>e.leftWidth+e.rightWidth)),minimumShoulderWidthM:Math.min(...a.flatMap(e=>[e.leftShoulder,e.rightShoulder])),maximumShoulderWidthM:Math.max(...a.flatMap(e=>[e.leftShoulder,e.rightShoulder])),villageTransition:{peakId:e.peakId,entryId:e.entryId,approachStartDistanceM:o,approachLengthM:Yf,routeEndpointWorldX:l.position.x,routeEndpointWorldZ:l.position.z,villageEntryWorldX:r.position.x,villageEntryWorldZ:r.position.z,villageEntryRoadY:Tf,endpointHeightErrorM:Math.abs(l.position.y-Tf),endpointPlanErrorM:Math.hypot(l.position.x-r.position.x,l.position.z-r.position.z),planAlignmentErrorDegrees:G.radToDeg(d.angleTo(i)),leftWidthErrorM:Math.abs(u.leftWidth-4),rightWidthErrorM:Math.abs(u.rightWidth-4),leftShoulderErrorM:Math.abs(u.leftShoulder-.65),rightShoulderErrorM:Math.abs(u.rightShoulder-.65),endpointBankPercent:Math.abs(l.bankSlope)*100,maximumApproachGradePercent:Math.max(...c.map(e=>{let t=Math.max(.001,Math.hypot(e.tangent.x,e.tangent.z));return Math.abs(e.tangent.y/t)}))*100}}}async function jm(e,t,n,r={}){let i=r.onProgress??(()=>void 0),a=r.serialBuild??n!==`high`;i(`Preparing complete mountain map`);let o=Object.fromEntries(Kf.map(e=>[e,Ep(e)])),s=Kf.map(e=>o[e]),c=[`sakuraTree`,`cedarTree`,`camphorTree`,`bush`,`flowers`,`teaHouse`,`shop`,`villageHouse`,`cat`,`dog`,`car`,`torii`,`bridge`,`groundcover`,`fallenCedarBranch`,`mossyRoadRock`,`roadsideBuddha`,`roadsideShrine`,`roadsideTreeLowPoly`,`roadsideTreeGreen`];n!==`safe`&&c.push(`villagerIndigo`,`utilityPole`,`irrigationChannel`,`produceStall`,`shrineCorner`,`cedarForestCluster`,`springForestCluster`),n===`high`&&c.push(`villagerOchre`);let l=Array.from(new Set(c));if(a)for(let e of l)i(`Loading model: ${e}`),await cf.preload([e]);else i(`Loading world models`),await cf.preload(l);i(`Loading painted landscape textures`);let u=await Uf(),d=new kn;d.name=`Complete Sakura Slide world`;let f=new kn;f.name=`Shared mountain terrain`;let p=new kn;p.name=`Shared Hanasato Village`;let m=km(o),h=[],g=[],_,v=[],y=[],b=[],x=new q(999,999,999),S={},C={};Kf.forEach(e=>{let t=new kn;t.name=`${o[e].name} permanent geometry`;let n=new kn;n.name=`${o[e].name} spatial detail`;let r=new kn;r.name=o[e].name,r.add(t,n),d.add(r),C[e]=r,S[e]={base:t,detail:n,chunks:[],hotspots:[],streamPosition:new q(999,999,999),blossoms:null,coins:null,questItems:null,obstacles:null}}),i(`Building shared mountain terrain`);let w=Bp(),T=Vp(f,s,n,w);d.userData.worldTopology=m.userData.worldTopology,d.add(f,p,m),Kf.forEach(e=>{S[e].base.userData.terrainOverhangProtection=Hp(S[e].base,o[e],s,n,w),Zp(S[e].base,o[e],u),S[e].base.userData.roadEngineering=Am(o[e],T.maximumCutDepth,T.maximumFillDepth)});let E=[f,...Kf.map(e=>S[e].base)].flatMap(e=>e.children.filter(e=>e instanceof Z&&e.material===w));E.forEach(e=>e.updateWorldMatrix(!0,!1));let D=async e=>{let t=o[e],r=S[e],c=[],l=[],d=[[`Planting ${t.name} vegetation`,()=>om(r.detail,t,s,n,c)],[`Building ${t.name} near forest`,()=>cm(r.detail,t,s,n)],[`Building ${t.name} guardrails`,()=>pm(r.detail,t,n)],[`Building ${t.name} retaining walls`,()=>mm(r.detail,t,n)],[`Placing ${t.name} landmarks`,()=>hm(r.detail,t,r.hotspots,r.streamPosition,b,l)],[`Placing ${t.name} road obstacles`,async()=>{r.obstacles=await ym(r.detail,t,n),r.detail.userData.roadObstacles=r.obstacles.stats}]];if(a)for(let[e,t]of d)i(e),await t();else await Promise.all(d.map(([,e])=>e()));let f=r.detail.children.flatMap(e=>e.userData.roadsideInterestPlacements??[]);r.detail.children.filter(e=>e.userData.roadsideAssetKey?f.some(t=>Math.hypot(e.position.x-t.x,e.position.z-t.z)<t.radius):!1).forEach(e=>r.detail.remove(e)),i(`Planting ${t.name} meadow verges and camphor groves`),await sm(r.detail,t,s,n,u.meadow,[...f,...l,...r.hotspots.map(e=>({x:e.position.x,z:e.position.z,radius:6}))],E),r.blossoms=gm(t,n,c),r.detail.userData.blossomDynamics=r.blossoms.stats,i(`Placing ${t.name} collectible coin rows`),r.coins=await wm(r.detail,t,n),r.detail.userData.coinCollection=r.coins.stats,r.chunks=Om(r.detail,t,n),r.detail.add(r.blossoms.points),r.questItems=await vm(r.detail,t),r.questItems.place(r.obstacles?.avoidance()??[])};if(a){i(`Planting persistent hillside forest`),await lm(f,s,n);for(let e of Kf)await D(e);i(`Building shared Hanasato Village`),_=await Em(p,n,s,h,v,y,b,u)}else i(`Building all three roads and Hanasato Village`),[_]=await Promise.all([Em(p,n,s,h,v,y,b,u),...Kf.map(e=>D(e)),lm(f,s,n)]);i(`Auditing combined world placement`);let O=[];d.traverse(e=>{e.userData.grounding&&O.push(e.userData.grounding)}),d.userData.vegetationGrounding={checkedObjects:O.length,maximumBaseGapM:O.length?Math.max(...O.map(e=>e.maximumBaseGapM)):0,minimumBurialM:O.length?Math.min(...O.map(e=>e.minimumBurialM)):0};let k=[];d.traverse(e=>{Number.isFinite(e.userData.roadClearanceM)&&k.push(e.userData.roadClearanceM)}),d.userData.roadwayClearance={checkedObjects:k.length,minimumClearanceM:k.length?Math.min(...k):0};let A=[];d.traverse(e=>{e.userData.vegetationKind&&A.push(e)});let j=A.map(e=>Number(e.userData.roadClearanceM)).filter(Number.isFinite),M=A.map(e=>e.userData.grounding).filter(e=>!!e);d.userData.treePlacement={checkedObjects:A.length,treeCount:A.reduce((e,t)=>e+Number(t.userData.roadsidePropCount??1),0),minimumRoadClearanceM:j.length?Math.min(...j):0,maximumBaseGapM:M.length?Math.max(...M.map(e=>e.maximumBaseGapM)):0,minimumBurialM:M.length?Math.min(...M.map(e=>e.minimumBurialM)):0};let N=[];d.traverse(e=>{e.userData.roadsidePropKind&&N.push(e)});let ee=N.reduce((e,t)=>{let n=String(t.userData.roadsidePropKind);return e[n]=(e[n]??0)+Number(t.userData.roadsidePropCount??1),e},{}),P=N.map(e=>Number(e.userData.roadClearanceM)),F=N.map(e=>e.userData.grounding);d.userData.roadsideProps={count:N.reduce((e,t)=>e+Number(t.userData.roadsidePropCount??1),0),kinds:ee,minimumRoadClearanceM:P.length?Math.min(...P):0,maximumBaseGapM:F.length?Math.max(...F.map(e=>e.maximumBaseGapM)):0,minimumBurialM:F.length?Math.min(...F.map(e=>e.minimumBurialM)):0},[`villageRoadSurfaces`,`villageCarContact`,`villageGroundSurface`,`villageActivities`,`villageBuildings`,`bridgeWalkSurface`,`townCollision`,`townStream`].forEach(e=>{d.userData[e]=p.userData[e]}),i(`Preparing interiors`);let[te,ne]=await Promise.all([Dm(`teaInterior`),Dm(`shopInterior`)]);i(`Attaching world to scene`),e.add(d,te,ne);let re=0,ie=0,ae=t,oe=!1,se=!1,I=new q(Ef.x,0,Ef.z),ce=n===`high`?440:n===`mobile`?350:280,le=()=>{Kf.forEach(e=>{C[e].visible=!oe&&(se||n===`high`||e===ae)})},ue=e=>{se=Math.abs(e.x-Ef.x)<=58&&Math.abs(e.z-Ef.z)<=82,le(),Kf.forEach(t=>{S[t].chunks.forEach(n=>{n.group.visible=!oe&&!se&&t===ae&&n.center.distanceTo(e)<ce}),S[t].blossoms&&(S[t].blossoms.points.visible=!oe&&!se&&t===ae)}),p.visible=!oe&&I.distanceTo(e)<ce+260;let t=m.userData.playerMarker;t&&t.position.set(e.x,Math.max(8,xp(e.x,e.z)+8),e.z)},de={quality:n,routes:o,route:o[t],outdoor:d,teaHouse:te,shop:ne,overview:m,hotspots:g,town:_,questPickups:Kf.flatMap(e=>S[e].questItems?.pickups??[]),syncQuestItems:e=>{for(let t of de.questPickups){let n=uf.find(e=>e.id===t.questId),r=e.quests[t.questId];t.active=!!(r&&!r.delivered&&r.collected.length<n.required&&!r.collected.includes(t.index)),t.root.visible=!1}},streamPosition:x,collectCoins:(e,t)=>S[ae].coins?.collect(e,t)??0,hitRoadObstacle:(e,t,n)=>S[ae].obstacles?.hit(e,t,n)??null,updateAmbient:(e,t,n,r)=>{let i=Math.min(.05,Math.max(0,e-re));re=e,ie+=i,ue(t),p.visible&&(v.forEach(e=>e.update(i)),y.forEach(n=>n(e,i,t))),b.forEach(t=>{t.uniforms.uTime.value=e}),S[ae].blossoms?.update(ie,i,t,n,r),S[ae].coins?.update(e,n),S[ae].questItems?.update(e,n)},setRoute:e=>{ae=e,de.route=o[e],de.questPickups.forEach(e=>{e.root.visible=!1}),le(),g.splice(0,g.length,...S[e].hotspots,...h),x.copy(S[e].streamPosition),d.userData.roadEngineering=S[e].base.userData.roadEngineering,d.userData.terrainOverhangProtection=S[e].base.userData.terrainOverhangProtection,d.userData.guardrailEngineering=S[e].detail.userData.guardrailEngineering,d.userData.blossomDynamics=S[e].detail.userData.blossomDynamics,d.userData.coinCollection=S[e].detail.userData.coinCollection,d.userData.roadObstacles=S[e].detail.userData.roadObstacles,d.userData.routeRun=null},startRouteRun:(e,t)=>{let n=(t??Math.floor(Math.random()*4294967296))>>>0,r=(n^2738958700)>>>0,i=(n^3355524772)>>>0;de.setRoute(e);let a=S[e];return a.obstacles?.reroll(r),a.questItems?.place(a.obstacles?.avoidance()??[]),a.coins?.reroll(i,a.obstacles?.avoidance()??[]),d.userData.routeRun={routeId:e,seed:n,obstacleSeed:r,coinSeed:i},n},setOverview:e=>{oe=e,m.visible=e,le(),ue(de.route.sampleAt(0).position)},setZone:e=>{d.visible=e===`outdoor`,te.visible=e===`tea-house`,ne.visible=e===`shop`}};return de.setRoute(t),ue(de.route.sampleAt(0).position),de}async function Mm(){await cf.preload([`skater`,`skateboard`]);let[e,t]=await Promise.all([cf.instance(`skater`,{height:1.78,rotationY:0}),cf.instance(`skateboard`,{width:.95,rotationY:Math.PI/2})]),n=new kn,r=new kn,i=new kn,a=new kn,o=e.root,s=t.root,c=Math.PI;o.position.y=.04,s.position.set(0,.025,.035),s.scale.set(1.2,1,1.488*.8),s.rotation.y=c;let l=s.scale.clone();a.add(o),i.add(a),r.add(s,i),n.add(r),n.updateMatrixWorld(!0);let u=new $n().setFromObject(s),d=u.getSize(new q),f={halfTrack:d.x*.42,halfWheelbase:d.z*.36,wheelBottomOffset:u.min.y};n.traverse(e=>{e instanceof Z&&(e.castShadow=!0,e.receiveShadow=!0,e.frustumCulled=!1,(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.shadowSide=2,t instanceof Na&&(t.emissive.setHex(0),t.emissiveIntensity=0,t.metalness=e instanceof mi?.02:.18,t.roughness=e instanceof mi?.84:.72,t.envMapIntensity=e instanceof mi?.35:.45)}))});let p=new is(o),m=e.animations,h=m.find(e=>/carve|crouch|downhill|skate.?ride/i.test(e.name)&&e.duration>.5)??null,g=m.find(e=>/slide|brake|powerslide/i.test(e.name)&&e.duration>.5)??null,_=m.find(e=>/idle|base/i.test(e.name))??null,v=m.find(e=>/walk/i.test(e.name))??null,y=h?p.clipAction(h):null,b=g?p.clipAction(g):null,x=_?p.clipAction(_):null,S=v?p.clipAction(v):null,C=s.children[0],w=C.rotation.y,T=null,E=null,D=0,O=0,k=null,A=new J,j=new q,M=new Map;o.traverse(e=>{e instanceof hi&&M.set(e.name,{bone:e,position:e.position.clone(),quaternion:e.quaternion.clone()})});let N=hp(o,.35,0),ee=M.get(`Spine01`)?.bone??M.get(`Spine`)?.bone??null,P=new kn,F=new q(-.45,.893,0),te=new q(0,0,1),ne=te.clone().cross(F).normalize(),re=new jt().setFromRotationMatrix(new J().makeBasis(ne,te,F));if(ee){ee.add(P),ee.updateWorldMatrix(!0,!1);let e=ee.getWorldScale(new q);P.position.set(0,-11,-43),P.scale.set(1/e.x,1/e.y,1/e.z)}let ie=new dn,ae=new jt,oe=new q,se=new jt,I=new jt,ce=new q,le=new J,ue=new q,de=new q,fe=new q(0,1,0),pe=()=>{M.forEach(({bone:e,position:t,quaternion:n})=>{e.position.copy(t),e.quaternion.copy(n)})},L=(e,t,n,r)=>{let i=M.get(e);i&&(ie.set(t,n,r),ae.setFromEuler(ie),i.bone.quaternion.copy(i.quaternion).multiply(ae))},R=(e,t,n,r)=>{let i=M.get(e)?.bone;i&&(ie.set(t,n,r),ae.setFromEuler(ie),i.quaternion.multiply(ae))},me=(e,t,i,a,o)=>{let s=M.get(e),c=s?.bone.parent;!s||!c||Math.abs(o)<1e-6||(n.updateMatrixWorld(!0),r.getWorldQuaternion(se),c.getWorldQuaternion(I).invert(),oe.set(t,i,a).applyQuaternion(se).applyQuaternion(I).normalize(),ae.setFromAxisAngle(oe,o),s.bone.quaternion.premultiply(ae))},he=(e,t,n,r)=>{let i=M.get(e);i&&i.bone.position.copy(i.position).add(new q(t,n,r))},ge=(e,t,i,a)=>{let o=M.get(e),s=o?.bone.parent;!o||!s||(n.updateMatrixWorld(!0),r.getWorldQuaternion(se),s.getWorldQuaternion(I).invert(),s.getWorldScale(ce),oe.set(t,i,a).applyQuaternion(se).applyQuaternion(I).divide(ce),o.bone.position.copy(o.position).add(oe))},_e=()=>{n.updateMatrixWorld(!0),A.copy(n.matrixWorld).invert();let e=1/0;return o.traverse(t=>{if(!(t instanceof mi))return;let n=t.geometry.getAttribute(`position`),r=t.geometry.getAttribute(`skinIndex`),i=t.geometry.getAttribute(`skinWeight`);if(!n||!r||!i)return;let a=new Set;if(t.skeleton.bones.forEach((e,t)=>{/^(hips|spine\d*)$/i.test(e.name)&&a.add(t)}),a.size!==0){t.skeleton.update();for(let o=0;o<n.count;o+=1){let s=0;a.has(r.getX(o))&&(s+=i.getX(o)),a.has(r.getY(o))&&(s+=i.getY(o)),a.has(r.getZ(o))&&(s+=i.getZ(o)),a.has(r.getW(o))&&(s+=i.getW(o)),!(s<.45)&&(j.fromBufferAttribute(n,o),t.applyBoneTransform(o,j),j.applyMatrix4(t.matrixWorld).applyMatrix4(A),e=Math.min(e,j.y))}}}),e},ve=(e,t)=>e?(e!==E&&(E?.fadeOut(.16),e.reset().fadeIn(.16).play(),E=e),e.timeScale=t,!0):(E?.fadeOut(.12),E=null,!1);return{root:n,contactPatch:f,setMode:(e,t,u,d,f,m=0)=>{let h=Math.min(.05,Math.max(0,t-D));if(D=t,e===`walk`){let n=d>.12;ve(n?S:x,n?Math.max(.5,d*.3):1),p.update(h),n||N(t),T=e,k=null,r.rotation.set(0,0,0),i.position.set(0,0,0),i.rotation.set(0,0,0),a.position.set(0,0,0),a.rotation.set(0,0,0),o.position.set(0,.03,0),o.rotation.set(.02,0,-u*.04),s.visible=!0,ee?(s.parent!==P&&P.add(s),s.position.set(0,0,0),s.quaternion.copy(re)):(s.parent!==r&&r.add(s),s.position.set(0,1.18,-.22),s.rotation.set(Math.PI/2,c,.58)),s.scale.copy(l),C.rotation.y=w;return}let g=+(e===`slide`),_=+(e===`push`),v=+(e===`jump`);_&&T!==`push`&&(O=t);let E=g*(Math.sign(u)||1)*Math.PI*.36,A=mp(m,0,1),j=(e,t,n)=>A<t?yp(e,t,A):1-yp(t,n,A),F=v*j(0,.14,.34),te=v*j(.18,.48,.76),ne=v*j(.58,.86,1),ie=v*Math.sin(A*Math.PI),ae=-F*.24+te*.02+ne*.14,oe=ie*(Math.sign(u)||1)*.3,se=_?(t-O)*1.12%1:0,I=_*yp(.03,.24,se)*(1-yp(.76,.98,se)),ce=_*yp(.2,.34,se)*(1-yp(.68,.82,se)),_e=yp(.3,.7,se);a.position.set(0,0,0),a.rotation.set(0,0,0);let ye=ve(_?null:g?b:y,g?.86:.78+Math.min(d,15)*.018);if(p.update(h),ye)o.position.set(0,.1,g*.05),o.rotation.set(0,-1.02,-u*(.08+g*.08)),R(`Spine02`,.12+g*.08,0,-u*.025),R(`LeftArm`,-.2,.04,.44-g*.18),R(`RightArm`,-.2,-.04,-.44+g*.18),R(`LeftForeArm`,-.46-g*.08,.04,0),R(`RightForeArm`,-.46-g*.08,-.04,0);else{pe();let e=g?1:_?.62:.82,n=Math.sin(t*(1.45+d*.025))*(.05+Math.min(d,14)*.0025);he(`RightUpLeg`,0,0,-.1-g*.05),L(`Hips`,-.1-e*.05,E*-.05,u*-.03),L(`Spine02`,.68+e*.12,n*.18-E*.06,-u*.035),L(`Spine01`,-.06-e*.04,n*.16,0),L(`Spine`,-.1-e*.04,n*.2-E*.04,-u*.03),L(`LeftUpLeg`,-1.18-e*.1,.02-g*.05,-.16),L(`RightUpLeg`,-.42-e*.1,.15+g*.05,-.08),L(`LeftLeg`,1.4+e*.12,0,0),L(`RightLeg`,1.4+e*.12,0,0),L(`LeftFoot`,-.32,0,0),L(`RightFoot`,-1.1,0,0),L(`LeftShoulder`,0,0,-.12-g*.06),L(`RightShoulder`,0,0,.12+g*.06),L(`LeftArm`,-.32-g*.04,.08,.42-g*.18+n*.06),L(`RightArm`,-.32-g*.04,-.08,-.42+g*.18-n*.06),L(`LeftForeArm`,-.64-g*.08,.08,.02),L(`RightForeArm`,-.64-g*.08,-.08,-.02),L(`neck`,.04,-n*.2,u*.025),o.position.set(0,-.132+g*.01,g*.025),o.rotation.set(.04,-.94-E*.12+n*.04,-u*(.08+g*.1))}if(R(`Spine`,0,.18,0),R(`Spine01`,0,.16,0),R(`Spine02`,0,.14,0),R(`neck`,0,.42,0),R(`Head`,0,.1,0),R(`LeftFoot`,0,.22,0),_){let e=(-.46+_e*.88)*I,t=G.lerp(.38,.5,_e);R(`RightUpLeg`,e,0,0),me(`RightUpLeg`,0,0,1,I*(.44-_e*.52)),R(`RightLeg`,-ce*t,0,0),R(`RightFoot`,ce*.48,0,0)}if(v){let e=F*.55+te*.42+ne*.32;R(`Hips`,-e*.14,oe*.38,0),R(`Spine`,F*.12-ne*.08,oe*.28,0),R(`Spine01`,F*.1-ne*.06,oe*.22,0),R(`Spine02`,F*.16-ne*.08,oe*.18,0),R(`LeftUpLeg`,-e*.34,0,-ie*.035),R(`RightUpLeg`,-e*.28+F*.12,0,ie*.035),R(`LeftLeg`,e*.52,0,0),R(`RightLeg`,e*.48-F*.18,0,0),R(`LeftArm`,-te*.16,0,ie*.48),R(`RightArm`,-te*.16,0,-ie*.48),R(`LeftForeArm`,-ne*.12,0,ie*.08),R(`RightForeArm`,-ne*.12,0,-ie*.08),o.position.y-=F*.055+te*.19+ne*.085}if(ge(`LeftUpLeg`,.11,0,0),_){let e=M.get(`LeftFoot`)?.bone;e&&(n.updateMatrixWorld(!0),le.copy(i.matrixWorld).invert(),e.getWorldPosition(ue).applyMatrix4(le),a.rotation.y=I*.7,de.copy(ue).applyAxisAngle(fe,a.rotation.y),a.position.copy(ue).sub(de))}T=e,k=null,r.rotation.set(ae,E+oe,0),i.position.set(0,0,0),i.rotation.set(0,0,-f*.82),s.visible=!0,s.parent!==r&&r.add(s),s.position.set(0,.025,.035),s.rotation.set(.015,c,-u*.05),s.scale.copy(l),C.rotation.y=w},setCrashPose:(e,t,n)=>{T!==`crash`&&(p.stopAllAction(),E=null,T=`crash`,k=null),pe();let u=mp(e/.55,0,1),d=u*u*(3-2*u);if(L(`LeftArm`,-.08,.02,-2.02),L(`RightArm`,-.08,-.02,2.02),L(`LeftForeArm`,-.04,.02,.04),L(`RightForeArm`,-.04,-.02,-.04),L(`LeftUpLeg`,-.04,.04,-.2),L(`RightUpLeg`,.04,-.04,.2),L(`LeftLeg`,.08,0,0),L(`RightLeg`,.08,0,0),r.rotation.set(0,0,0),i.position.set(t*d*.12,k??d*.46,d*.18),i.rotation.set(d*Math.PI*.5,t*d*.1,t*d*.08),a.position.set(0,0,0),a.rotation.set(0,0,0),o.position.set(0,.03,0),o.rotation.set(0,0,0),s.visible=!0,s.parent!==r&&r.add(s),s.position.set(t*d*.95,.025,.035+n*.48),s.rotation.set(.015,c+t*d*.22,-t*d*.06),s.scale.copy(l),C.rotation.y=w,k===null&&u>=.7){let e=_e();if(Number.isFinite(e)){let t=f.wheelBottomOffset-.012;i.position.y+=t-e,u>=1&&(k=i.position.y)}}}}}var Nm=`sakura-settings-v2`,Pm=`sakura-load-diagnostic`,Fm={steering:1,motion:.65,music:.6,sound:.75,reducedMotion:!1,quality:`auto`},Im=5.8,Lm=.12,Rm=.45,zm=.55,Bm=4.8,Vm=.96,Hm=.92,Um=.55,Wm=.16,Gm=.1,Km=.985,qm=0,Jm=850,Ym=68,Xm=72;function Zm(){try{let e=JSON.parse(localStorage.getItem(Nm)??`null`);if(!e)return{...Fm};let t=[`auto`,`high`,`mobile`,`safe`].includes(e.quality??``)?e.quality:`auto`;return{...Fm,...e,quality:t}}catch{return{...Fm}}}function Qm(e){try{localStorage.setItem(Nm,JSON.stringify(e))}catch{}}var $=e=>{let t=document.querySelector(e);if(!t)throw Error(`Missing required element ${e}`);return t},$m=(e,t,n)=>Math.max(t,Math.min(n,e)),eh=(e,t,n,r)=>G.lerp(e,t,1-Math.exp(-n*r)),th=1.2,nh=100,rh=class{canvas;steer=0;slideHeld=!1;slidePulse=0;jumpQueued=!1;pushHeld=!1;pushPulse=0;walkForward=0;pointerId=null;pointerType=`mouse`;startX=0;startY=0;currentX=0;currentY=0;downAt=0;lastTapAt=-1/0;lastTapX=0;lastTapY=0;state=`menu`;classification=`pending`;pointerDown=!1;keyLeft=!1;keyRight=!1;keyUp=!1;keyDown=!1;keySlide=!1;constructor(e){this.canvas=e,e.style.touchAction=`none`,e.addEventListener(`pointerdown`,this.onDown),e.addEventListener(`pointermove`,this.onMove),e.addEventListener(`pointerup`,this.onUp),e.addEventListener(`pointercancel`,this.onCancel),e.addEventListener(`dblclick`,this.onDoubleClick),window.addEventListener(`blur`,this.cancel),window.addEventListener(`keydown`,this.onKeyDown),window.addEventListener(`keyup`,this.onKeyUp)}get isTouchSteering(){return this.pointerDown&&this.pointerType===`touch`&&this.classification===`steer`}update(e,t){this.state=e;let n=(this.keyLeft?-1:0)+ +!!this.keyRight;if((n!==0||this.keyLeft||this.keyRight)&&(this.steer=n),this.pushHeld=this.keyDown,this.slideHeld=this.keySlide,(e===`walking`||e===`interior`)&&(this.walkForward=+!!this.keyUp),!this.pointerDown||this.pointerType!==`touch`)return;let r=this.currentX-this.startX,i=this.currentY-this.startY,a=Math.hypot(r,i);if(e===`riding`||e===`offroad`){let t=Math.abs(i)>Math.abs(r)*1.08;this.classification===`pending`&&a>(t?14:8)&&(t?(this.classification=i<0?`ollie`:`push`,this.classification===`ollie`&&e===`riding`&&(this.jumpQueued=!0)):this.classification=`steer`),this.classification===`steer`&&(this.steer=$m(r/Math.max(48,this.canvas.clientWidth*.14),-1,1)),this.pushHeld||=this.classification===`push`}else(e===`walking`||e===`interior`)&&(this.classification===`pending`&&a>8&&(this.classification=`walk`),this.classification===`walk`?(this.steer=$m(r/Math.max(72,this.canvas.clientWidth*.24),-1,1),this.walkForward=$m(-i/80,.18,1)):t-this.downAt>120&&(this.walkForward=.55))}consumeSlidePulse(e){let t=this.slidePulse>0;return this.slidePulse=Math.max(0,this.slidePulse-e),t}consumePushPulse(e){let t=this.pushPulse>0;return this.pushPulse=Math.max(0,this.pushPulse-e),t}consumeJump(){let e=this.jumpQueued;return this.jumpQueued=!1,e}cancel=()=>{this.pointerId=null,this.pointerDown=!1,this.slideHeld=!1,this.pushHeld=!1,this.slidePulse=0,this.jumpQueued=!1,this.pushPulse=0,this.walkForward=0,this.classification=`pending`,this.keyLeft=!1,this.keyRight=!1,this.keyUp=!1,this.keyDown=!1,this.keySlide=!1,this.lastTapAt=-1/0,this.steer=0};onDown=e=>{e.pointerType!==`touch`||this.pointerId!==null||e.target.closest(`button, input, select, label`)||(this.pointerId=e.pointerId,this.pointerType=e.pointerType,this.startX=this.currentX=e.clientX,this.startY=this.currentY=e.clientY,this.downAt=performance.now(),this.classification=`pending`,this.pointerDown=!0,e.isTrusted&&this.canvas.setPointerCapture(e.pointerId))};onMove=e=>{e.pointerId===this.pointerId&&e.pointerType===`touch`&&(this.currentX=e.clientX,this.currentY=e.clientY)};onUp=e=>{if(e.pointerId!==this.pointerId)return;let t=performance.now(),n=performance.now()-this.downAt,r=Math.hypot(this.currentX-this.startX,this.currentY-this.startY);if(this.pointerType===`touch`&&this.state===`riding`&&this.classification===`pending`&&n<320&&r<14){let n=Math.hypot(e.clientX-this.lastTapX,e.clientY-this.lastTapY);t-this.lastTapAt<=340&&n<=32?(this.slidePulse=.55,this.lastTapAt=-1/0):(this.lastTapAt=t,this.lastTapX=e.clientX,this.lastTapY=e.clientY)}this.pointerType===`touch`&&this.classification===`push`&&(this.pushPulse=.38),this.pointerId=null,this.pointerDown=!1,this.slideHeld=!1,this.pushHeld=!1,this.walkForward=0,this.classification=`pending`,this.pointerType===`touch`&&(this.steer=0)};onCancel=e=>{e.pointerId===this.pointerId&&this.cancel()};onDoubleClick=e=>{this.state===`riding`&&(e.preventDefault(),this.slidePulse=.55)};onKeyDown=e=>{if(e.target instanceof Element&&e.target.closest(`input, select, textarea`))return;if(e.code===`Space`){this.state===`riding`&&(this.keySlide=!0),e.preventDefault();return}let t=e.key.toLowerCase();[`arrowleft`,`arrowright`,`arrowup`,`arrowdown`,`a`,`d`,`w`,`s`].includes(t)&&(e.preventDefault(),t===`arrowleft`||t===`a`?this.keyLeft=!0:t===`arrowright`||t===`d`?this.keyRight=!0:t===`arrowup`||t===`w`?(this.keyUp=!0,this.state===`riding`&&!e.repeat&&(this.jumpQueued=!0)):(t===`arrowdown`||t===`s`)&&(this.keyDown=!0))};onKeyUp=e=>{if(e.code===`Space`){this.keySlide=!1,e.preventDefault();return}let t=e.key.toLowerCase();[`arrowleft`,`arrowright`,`arrowup`,`arrowdown`,`a`,`d`,`w`,`s`].includes(t)&&(e.preventDefault(),t===`arrowleft`||t===`a`?this.keyLeft=!1:t===`arrowright`||t===`d`?this.keyRight=!1:t===`arrowup`||t===`w`?this.keyUp=!1:(t===`arrowdown`||t===`s`)&&(this.keyDown=!1),!this.keyLeft&&!this.keyRight&&(this.steer=0),this.keyDown||(this.pushHeld=!1))}},ih={coin:`coin_collect_3.mp3`,crash:`skater_oof_fall.mp3`,jump:`skate_jump_pop.mp3`},ah=class{tracks={};audioContext=null;musicMasterGain=null;soundMasterGain=null;bufferedSfx={};bufferedSfxPromises={};sources=new WeakMap;gains=new WeakMap;logicalVolumes=new WeakMap;outputGroups=new WeakMap;connectedElements=new Set;musicVolume=1;soundVolume=1;unlocked=!1;currentMusic=`sakura-ridge`;constructor(){Object.entries({"sakura-ridge":[`sakura_ridge_music.mp3`,!0],"hairpin-pass":[`hairpin_pass_music.mp3`,!0],"cedar-stream":[`cedar_stream_music.mp3`,!0],village:[`village_music.mp3`,!0],wheel:[`wheel_asphalt_rumble_loop.mp3`,!0],slide:[`slide_friction_loop.mp3`,!0],wind:[`spring_wind_loop.mp3`,!0],birds:[`birds_insects_loop.mp3`,!0],stream:[`stream_loop.mp3`,!0],ambience:[`village_ambience_loop.mp3`,!0],door:[`door_interior_transition.mp3`,!1],cat:[`cat_greeting.mp3`,!1],dog:[`dog_greeting.mp3`,!1],cloth:[`cloth_board_movement.mp3`,!1]}).forEach(([e,[t,n]])=>{let r=new Audio(`/sakura-slide/assets/audio/${t}`);r.loop=n,r.preload=`auto`,this.tracks[e]=r})}unlock(){this.initializeAudioGraph(),this.audioContext?.resume().catch(()=>void 0),Object.keys(ih).forEach(e=>this.loadBufferedSfx(e)),!this.unlocked&&(this.unlocked=!0,[`sakura-ridge`,`hairpin-pass`,`cedar-stream`,`village`,`wheel`,`slide`,`wind`,`birds`,`stream`,`ambience`].forEach(e=>{let t=this.tracks[e];this.setElementVolume(t,0),t.play().catch(()=>void 0)}))}update(e,t,n,r,i,a,o,s,c){if(this.setMasterVolumes(s.music,s.sound),!this.unlocked)return;let l=t!==`outdoor`||o;this.currentMusic=l?`village`:n;let u=.52;this.setVolume(`sakura-ridge`,this.currentMusic===`sakura-ridge`?u:0,c,1.2),this.setVolume(`hairpin-pass`,this.currentMusic===`hairpin-pass`?u:0,c,1.2),this.setVolume(`cedar-stream`,this.currentMusic===`cedar-stream`?u:0,c,1.2),this.setVolume(`village`,this.currentMusic===`village`?u*.9:0,c,1.2);let d=e===`riding`&&!i&&r>.35,f=d?.32+$m((r-3.5)/18,0,1)*.1:0;this.setVolume(`wheel`,f,c,d?7:10),this.setVolume(`slide`,i?.48:0,c,7),this.setVolume(`wind`,t===`outdoor`?.14+$m(r/22,0,.42):0,c,1.8),this.setVolume(`birds`,t===`outdoor`?.28:0,c,1.5),this.setVolume(`stream`,t===`outdoor`?$m(1-a/38,0,.5):0,c,2.5),this.setVolume(`ambience`,e===`walking`&&t===`outdoor`?.35:0,c,1.8)}setMasterVolumes(e,t){if(this.musicVolume=$m(e,0,1),this.soundVolume=$m(t,0,1),this.musicMasterGain&&this.soundMasterGain&&this.audioContext){this.musicMasterGain.gain.setValueAtTime(this.musicVolume,this.audioContext.currentTime),this.soundMasterGain.gain.setValueAtTime(this.soundVolume,this.audioContext.currentTime);return}this.connectedElements.forEach(e=>this.applyFallbackVolume(e))}oneShot(e,t){if(!this.unlocked)return;if(e in ih){this.playBufferedSfx(e,t);return}let n=this.tracks[e].cloneNode(!0);this.connectElement(n,`sound`),this.setElementVolume(n,t,`sound`),n.addEventListener(`ended`,()=>this.disconnectElement(n),{once:!0}),n.play().catch(()=>void 0)}setVolume(e,t,n,r){let i=this.tracks[e],a=this.isMusicTrack(e)?`music`:`sound`,o=this.logicalVolumes.get(i)??0;this.setElementVolume(i,eh(o,t,r,n),a)}loadBufferedSfx(e){if(!this.audioContext||this.bufferedSfx[e]||this.bufferedSfxPromises[e])return;let t=this.audioContext;this.bufferedSfxPromises[e]=fetch(`/sakura-slide/assets/audio/${ih[e]}`).then(t=>{if(!t.ok)throw Error(`Unable to load ${e} sound (${t.status})`);return t.arrayBuffer()}).then(e=>t.decodeAudioData(e)).then(t=>{this.bufferedSfx[e]=t}).catch(t=>{delete this.bufferedSfxPromises[e],console.warn(`Unable to decode ${e} sound`,t)})}playBufferedSfx(e,t){let n=this.bufferedSfx[e];if(!this.audioContext||!this.soundMasterGain||!n)return;let r=this.audioContext.createBufferSource(),i=this.audioContext.createGain();r.buffer=n,i.gain.value=$m(t,0,1),r.connect(i).connect(this.soundMasterGain),r.addEventListener(`ended`,()=>{r.disconnect(),i.disconnect()},{once:!0}),r.start()}initializeAudioGraph(){if(this.audioContext)return;let e=window.AudioContext??window.webkitAudioContext;if(e)try{this.audioContext=new e,this.musicMasterGain=this.audioContext.createGain(),this.soundMasterGain=this.audioContext.createGain(),this.musicMasterGain.gain.value=this.musicVolume,this.soundMasterGain.gain.value=this.soundVolume,this.musicMasterGain.connect(this.audioContext.destination),this.soundMasterGain.connect(this.audioContext.destination),Object.entries(this.tracks).forEach(([e,t])=>{t.loop&&this.connectElement(t,this.isMusicTrack(e)?`music`:`sound`)})}catch(e){this.audioContext=null,this.musicMasterGain=null,this.soundMasterGain=null,console.warn(`Web Audio volume control unavailable; using media element volume`,e)}}connectElement(e,t){if(!(!this.audioContext||this.gains.has(e)))try{let n=this.audioContext.createMediaElementSource(e),r=this.audioContext.createGain();r.gain.value=this.logicalVolumes.get(e)??e.volume,n.connect(r).connect(t===`music`?this.musicMasterGain:this.soundMasterGain),e.volume=1,this.sources.set(e,n),this.gains.set(e,r),this.outputGroups.set(e,t),this.connectedElements.add(e)}catch(e){console.warn(`Unable to route audio through Web Audio`,e)}}disconnectElement(e){this.sources.get(e)?.disconnect(),this.gains.get(e)?.disconnect(),this.sources.delete(e),this.gains.delete(e),this.logicalVolumes.delete(e),this.outputGroups.delete(e),this.connectedElements.delete(e)}setElementVolume(e,t,n=this.outputGroups.get(e)??`sound`){let r=$m(t,0,1);this.logicalVolumes.set(e,r),this.outputGroups.set(e,n),this.connectedElements.add(e);let i=this.gains.get(e);if(i){i.gain.value=r;return}this.applyFallbackVolume(e)}applyFallbackVolume(e){let t=(this.outputGroups.get(e)??`sound`)===`music`?this.musicVolume:this.soundVolume;e.volume=$m((this.logicalVolumes.get(e)??e.volume)*t,0,1)}isMusicTrack(e){return e===`sakura-ridge`||e===`hairpin-pass`||e===`cedar-stream`||e===`village`}},oh=class{frames=[];startedAt=performance.now();worst=0;hitches=0;navigationToInteractiveMs=0;worldBuildMs=0;shaderWarmupMs=0;record(e){this.frames.push(e),this.frames.length>1800&&this.frames.shift(),this.worst=Math.max(this.worst,e),e>50&&(this.hitches+=1)}reset(){this.frames=[],this.startedAt=performance.now(),this.worst=0,this.hitches=0}markInteractive(){this.navigationToInteractiveMs=performance.now()}setLoadTimings(e,t){this.worldBuildMs=e,this.shaderWarmupMs=t}snapshot(e,t){let n=[...this.frames].sort((e,t)=>e-t),r=e=>n.length?n[Math.min(n.length-1,Math.floor(n.length*e))]:0,i={capturedAt:new Date().toISOString(),sampleCount:n.length,p50FrameMs:Number(r(.5).toFixed(2)),p95FrameMs:Number(r(.95).toFixed(2)),p99FrameMs:Number(r(.99).toFixed(2)),worstFrameMs:Number(this.worst.toFixed(2)),hitchesOver50Ms:this.hitches,runtimeSeconds:Number(((performance.now()-this.startedAt)/1e3).toFixed(1)),navigationToInteractiveMs:Number(this.navigationToInteractiveMs.toFixed(2)),worldBuildMs:Number(this.worldBuildMs.toFixed(2)),shaderWarmupMs:Number(this.shaderWarmupMs.toFixed(2)),drawCalls:e.info.render.calls,triangles:e.info.render.triangles,geometries:e.info.memory.geometries,textures:e.info.memory.textures,jsHeapBytes:performance.memory?.usedJSHeapSize??`unavailable`,state:t};return localStorage.setItem(`sakura-progress`,JSON.stringify(i)),i}},sh=class{canvas=$(`#game`);mobileRuntime=navigator.maxTouchPoints>0||matchMedia(`(pointer: coarse)`).matches;renderer=new ku({canvas:this.canvas,antialias:!this.mobileRuntime,alpha:!0,powerPreference:this.mobileRuntime?`default`:`high-performance`});scene=new Rn;camera=new Oo(55,1,.1,900);inspectionControls=new Bu(this.camera,this.canvas);overviewCamera=new No(-500,500,950,-950,1,3e3);gameplayFog=new Ln(11586508,85,680);input=new rh(this.canvas);audio=new ah;metrics=new oh;rider=null;sun=new Fo(16773073,3.6);sunOffset=new q(-92,128,-72);shadowFocus=new q;shadowLeadM=0;sky;skyDirection=new q;previousSkyCameraYaw=null;accumulatedSkyCameraYaw=0;world=null;state=`menu`;stateBeforeModal=`riding`;zone=`outdoor`;routeId=`sakura-ridge`;distance=0;lateral=0;lateralVelocity=0;cameraSteer=0;speed=4*th;exitCharge=0;worldPosition=new q;heading=0;riderPoseSteer=0;activeHotspot=null;actionMode=`none`;keepsakes=[];playerProgress=yf();conversationNpcId=null;trackedQuestId=null;saveWarningShown=!1;score=0;coinsCollected=0;obstacleHits=0;obstacleImpactCooldown=0;crashElapsed=0;crashSide=1;crashBoardGap=0;crashResumeSpeed=0;crashSlideSpeed=0;crashRemountRequested=!1;jumpActive=!1;jumpElapsed=0;jumpHeight=0;obstaclesCleared=0;lastFrame=performance.now();elapsed=0;sliding=!1;pushing=!1;arrivalSlideActive=!1;arrivalSlideDirection=1;arrivalStopTimer=0;mountDistance=0;presentation=`landscape`;quality=`high`;toastTimer=0;metricsTimer=0;hintTimer=0;villageArrived=!1;savedOutdoorPosition=new q;cameraPosition=new q(0,8,-14);cameraTarget=new q;roadPlanView=!1;roadSectionView=!1;overviewActive=!1;inspectionActive=!1;settings=Zm();settingsFromMenu=!1;activeLoadDiagnostic=null;menu=$(`#menu`);hud=$(`#hud`);pausePanel=$(`#pausePanel`);journalPanel=$(`#journal`);npcDialogue=$(`#npcDialogue`);npcQuestAction=$(`#npcQuestAction`);npcQuestRoute=$(`#npcQuestRoute`);questTracker=$(`#questTracker`);questTrackerLabel=$(`#questTrackerLabel`);questTrackerTitle=$(`#questTrackerTitle`);questTrackerDetail=$(`#questTrackerDetail`);actionButton=$(`#action`);hint=$(`#hint`);routePosition=$(`#routePosition`);routeLabel=$(`#routeLabel`);routeDistance=$(`#routeDistance`);modeLabel=$(`#modeLabel`);fade=$(`#fade`);toast=$(`#toast`);resumeButton=$(`#resume`);continueButton=$(`#continue`);settingsTitle=$(`#settingsTitle`);scoreDisplay=$(`#scoreDisplay`);scoreValue=$(`#scoreValue`);coinCount=$(`#coinCount`);rideTelemetry=$(`#rideTelemetry`);speedValue=$(`#speedValue`);gradientValue=$(`#gradientValue`);mapToggle=$(`#mapToggle`);cameraToggle=$(`#cameraToggle`);inspectionToggle=$(`#inspectionToggle`);overviewLegend=$(`#overviewLegend`);constructor(){this.scene.background=null,this.renderer.setClearColor(8636644,0),this.renderer.outputColorSpace=Ve,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.05;let e=new Is(this.renderer);this.scene.environment=e.fromScene(new $u,.04).texture,this.scene.environmentIntensity=.65,e.dispose(),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.canvas.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),console.error(`Sakura Slide lost its WebGL context`),this.recordLoadDiagnostic(`context-lost`,`WebGL context lost`,`Safari released the graphics context.`),this.showToast(`Graphics paused. Safari is restoring the mountain…`,20)}),this.canvas.addEventListener(`webglcontextrestored`,()=>{this.renderer.resetState(),this.showToast(`The mountain is ready again.`,3)}),this.scene.fog=this.gameplayFog;let t=new go(13034224,6518362,1.35);this.sun.position.copy(this.sunOffset),this.sun.castShadow=!0;let n=this.mobileRuntime?1024:2048;this.sun.shadow.mapSize.set(n,n),this.sun.shadow.camera.left=-64,this.sun.shadow.camera.right=82,this.sun.shadow.camera.top=64,this.sun.shadow.camera.bottom=-58,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=260,this.sun.shadow.bias=-12e-5,this.sun.shadow.normalBias=.006,this.sun.shadow.radius=.9,this.sky=this.createParallaxSky(),this.inspectionControls.enabled=!1,this.inspectionControls.enableDamping=!0,this.inspectionControls.dampingFactor=.08,this.inspectionControls.enablePan=!0,this.inspectionControls.screenSpacePanning=!0,this.inspectionControls.minDistance=2.2,this.inspectionControls.maxDistance=120,this.inspectionControls.minPolarAngle=.08,this.inspectionControls.maxPolarAngle=Math.PI*.92,this.overviewCamera.position.set(0,1500,1054),this.overviewCamera.up.set(0,0,1),this.overviewCamera.lookAt(0,0,1054),this.scene.add(this.sky,t,this.sun,this.sun.target),this.bindUI(),this.resize(),this.quality=this.settings.quality===`auto`?this.presentation===`portrait`?`mobile`:`high`:this.settings.quality,cf.setTextureLimit(this.mobileRuntime?this.quality===`safe`?512:1024:1/0),this.renderer.shadowMap.enabled=this.quality!==`safe`,this.resize(),window.addEventListener(`error`,e=>{this.recordLoadDiagnostic(`error`,`JavaScript error`,e.message||`Unknown window error`)}),window.addEventListener(`unhandledrejection`,e=>{let t=e.reason instanceof Error?e.reason.message:String(e.reason);this.recordLoadDiagnostic(`error`,`Unhandled promise rejection`,t)}),window.addEventListener(`resize`,this.resize),window.addEventListener(`orientationchange`,this.resize),window.__SAKURA__={getState:()=>this.stateSnapshot(),getMetrics:()=>this.metrics.snapshot(this.renderer,this.stateSnapshot()),resetMetrics:()=>this.metrics.reset(),setEvidenceScene:e=>this.setEvidenceScene(e),step:e=>this.stepDebug(e)},this.metrics.markInteractive(),requestAnimationFrame(this.frame)}createParallaxSky(){let e=new mo().load(`/sakura-slide/assets/images/distant_mountain_panorama.png`);e.colorSpace=Ve,e.wrapS=a,e.repeat.set(2,2),e.offset.set(0,-.65),e.anisotropy=Math.min(this.mobileRuntime?4:8,this.renderer.capabilities.getMaxAnisotropy());let t=new Gr({map:e,side:1,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}),n=new Z(new xa(Jm,128,64),t);return n.name=`Parallax sky panorama`,n.position.y=qm,n.renderOrder=-1e3,n.frustumCulled=!1,n}updateParallaxSky(e){this.camera.getWorldDirection(this.skyDirection);let t=Math.atan2(this.skyDirection.x,this.skyDirection.z);this.previousSkyCameraYaw===null&&(this.previousSkyCameraYaw=t);let n=Math.atan2(Math.sin(t-this.previousSkyCameraYaw),Math.cos(t-this.previousSkyCameraYaw));this.accumulatedSkyCameraYaw+=n,this.previousSkyCameraYaw=t,this.sky.rotation.y=eh(this.sky.rotation.y,this.accumulatedSkyCameraYaw*Gm,2.8,e),this.sky.position.set(this.camera.position.x*Km,this.camera.position.y+qm,this.camera.position.z*Km),this.sky.userData.cameraYaw=t,this.sky.userData.panoramaYaw=this.sky.rotation.y}beginLoadDiagnostic(e,t,n){let r=new Date().toISOString();this.activeLoadDiagnostic={status:`loading`,phase:`Starting world load`,route:e,startInTown:t,quality:n,startedAt:r,updatedAt:r,elapsedMs:0},this.persistLoadDiagnostic()}recordLoadDiagnostic(e,t,n){let r=Date.now(),i=this.activeLoadDiagnostic?.startedAt??new Date(r).toISOString();this.activeLoadDiagnostic={status:e,phase:t,route:this.activeLoadDiagnostic?.route??this.routeId,startInTown:this.activeLoadDiagnostic?.startInTown??!1,quality:this.activeLoadDiagnostic?.quality??this.quality,startedAt:i,updatedAt:new Date(r).toISOString(),elapsedMs:Math.max(0,r-Date.parse(i)),...n?{message:n}:{}},this.persistLoadDiagnostic()}persistLoadDiagnostic(){if(this.activeLoadDiagnostic)try{localStorage.setItem(Pm,JSON.stringify(this.activeLoadDiagnostic))}catch{}}bindUI(){document.querySelectorAll(`[data-route]`).forEach(e=>{e.addEventListener(`click`,()=>{this.start(e.dataset.route)})}),$(`#startTown`).addEventListener(`click`,()=>{this.start(`sakura-ridge`,!0)}),$(`#menuSettings`).addEventListener(`click`,()=>this.openMenuSettings()),$(`#pause`).addEventListener(`click`,()=>this.openPause()),this.continueButton.addEventListener(`click`,()=>this.closePause()),$(`#restart`).addEventListener(`click`,()=>{this.start(this.routeId)}),$(`#toMenu`).addEventListener(`click`,()=>this.returnToMenu()),this.resumeButton.addEventListener(`click`,()=>this.resumeJourney()),$(`#journalButton`).addEventListener(`click`,()=>this.openJournal()),this.questTracker.addEventListener(`click`,()=>this.openJournal()),$(`#closeJournal`).addEventListener(`click`,()=>this.closeJournal()),$(`#questEntries`).addEventListener(`click`,e=>{if(this.state!==`journal`)return;let t=e.target.closest(`button[data-quest]`),n=uf.find(e=>e.id===t?.dataset.quest);!t||!n||(this.trackedQuestId=n.id,t.dataset.action===`ride`&&ff(this.playerProgress,n)===`active`?this.start(n.route):t.dataset.action===`track`&&(this.closeJournal(),this.updateQuestTracker()))}),this.actionButton.addEventListener(`click`,e=>{e.stopPropagation(),this.performAction()}),this.npcQuestAction.addEventListener(`click`,()=>this.performQuestAction()),this.npcQuestRoute.addEventListener(`click`,()=>{let e=uf.find(e=>e.npcId===this.conversationNpcId);!e||ff(this.playerProgress,e)!==`active`||(this.trackedQuestId=e.id,this.start(e.route))}),$(`#closeNpcDialogue`).addEventListener(`click`,()=>this.npcDialogue.close()),this.npcDialogue.addEventListener(`close`,()=>{this.conversationNpcId=null,this.input.cancel(),this.updateActionPrompt()}),this.mapToggle.addEventListener(`click`,()=>this.toggleOverview()),this.cameraToggle.addEventListener(`click`,()=>{this.closePause(),this.toggleTopDownCamera()}),this.inspectionToggle.addEventListener(`click`,()=>{this.closePause(),this.toggleInspection()}),window.addEventListener(`keydown`,e=>{if(this.npcDialogue.open)return;if(this.state===`crashed`&&!e.repeat&&!e.target?.matches(`input, select, textarea`)){e.preventDefault(),this.requestCrashRemount();return}if(e.target?.matches(`input, select, textarea`)||e.repeat)return;let t=e.key.toLowerCase();if(t===`j`){this.state===`journal`?this.closeJournal():this.state!==`paused`&&this.openJournal();return}if(t===`escape`&&this.state===`journal`){this.closeJournal();return}if(t===`e`&&this.actionMode!==`none`){e.preventDefault(),this.performAction();return}if(t===`c`){this.toggleTopDownCamera();return}if(t===`f`){this.toggleInspection();return}t===`m`&&this.toggleOverview()}),this.canvas.addEventListener(`pointerdown`,e=>{this.state===`crashed`&&e.button===0&&(e.preventDefault(),this.requestCrashRemount())});let e=$(`#steering`),t=$(`#motion`),n=$(`#music`),r=$(`#sound`),i=$(`#reducedMotion`),a=$(`#quality`);e.value=String(this.settings.steering),t.value=String(this.settings.motion),n.value=String(this.settings.music),r.value=String(this.settings.sound),i.checked=this.settings.reducedMotion,a.value=this.settings.quality;let o=()=>{Qm(this.settings)};e.addEventListener(`input`,()=>{this.settings.steering=Number(e.value),o()}),t.addEventListener(`input`,()=>{this.settings.motion=Number(t.value),o()}),n.addEventListener(`input`,()=>{this.settings.music=Number(n.value),this.audio.setMasterVolumes(this.settings.music,this.settings.sound),o()}),r.addEventListener(`input`,()=>{this.settings.sound=Number(r.value),this.audio.setMasterVolumes(this.settings.music,this.settings.sound),o()}),i.addEventListener(`change`,()=>{this.settings.reducedMotion=i.checked,o()}),a.addEventListener(`change`,()=>{this.settings.quality=a.value,this.quality=this.settings.quality===`auto`?this.presentation===`portrait`?`mobile`:`high`:this.settings.quality,cf.setTextureLimit(this.mobileRuntime?this.quality===`safe`?512:1024:1/0),this.renderer.shadowMap.enabled=this.quality!==`safe`,this.resize(),o()}),matchMedia(`(prefers-reduced-motion: reduce)`).matches&&(this.settings.reducedMotion=!0,i.checked=!0,o())}async start(e,t=!1){this.npcDialogue.close(),this.input.cancel(),this.audio.unlock(),this.setInspection(!1,!1),this.setOverview(!1),this.roadSectionView=!1,this.setTopDownCamera(!1),this.routeId=e,this.quality=this.settings.quality===`auto`?this.presentation===`portrait`?`mobile`:`high`:this.settings.quality,cf.setTextureLimit(this.mobileRuntime?this.quality===`safe`?512:1024:1/0),this.renderer.shadowMap.enabled=this.quality!==`safe`,this.resize(),this.beginLoadDiagnostic(e,t,this.quality);let n=[...document.querySelectorAll(`[data-route]`),$(`#startTown`),$(`#menuSettings`)];n.forEach(e=>{e.disabled=!0}),this.menu.dataset.loading=`true`;let r=!this.world||this.world.quality!==this.quality,i=e===`sakura-ridge`?`Sakura Ridge`:e===`hairpin-pass`?`Hairpin Pass`:`Cedar Stream`;this.showToast(r?`Preparing the complete mountain map…`:`Turning toward ${i}…`,20),r&&this.world&&(this.scene.remove(this.world.outdoor,this.world.teaHouse,this.world.shop),this.world=null);let a=performance.now();try{if(r){let t=this.rider;if(this.mobileRuntime||this.quality===`safe`)t||=(this.recordLoadDiagnostic(`loading`,`Loading skater and skateboard`),await Mm()),this.world=await jm(this.scene,e,this.quality,{serialBuild:!0,onProgress:e=>this.recordLoadDiagnostic(`loading`,e)});else{let[n,r]=await Promise.all([jm(this.scene,e,this.quality,{onProgress:e=>this.recordLoadDiagnostic(`loading`,e)}),t?Promise.resolve(t):Mm()]);this.world=n,t=r}!this.rider&&t&&(this.rider=t,this.scene.add(this.rider.root))}}catch(e){console.error(`Unable to prepare Sakura Slide`,e),this.recordLoadDiagnostic(`error`,`World load failed`,e instanceof Error?e.message:String(e)),this.showToast(`The mountain road could not be prepared. Please try again.`,6),n.forEach(e=>{e.disabled=!1}),delete this.menu.dataset.loading;return}if(!this.world||!this.rider)return;let o=gf(this.playerProgress);o&&this.persistPlayerProgress(),t?this.world.setRoute(e):this.world.startRouteRun(e),this.world.syncQuestItems(this.playerProgress),this.recordLoadDiagnostic(`loading`,`Preparing first frame`);let s=r?performance.now()-a:0;this.world.setZone(`outdoor`),this.zone=`outdoor`,this.distance=0,this.lateral=0,this.lateralVelocity=0,this.cameraSteer=0,this.speed=4.2*th,this.exitCharge=0,this.villageArrived=!1,this.sliding=!1,this.pushing=!1,this.riderPoseSteer=0,this.arrivalSlideActive=!1,this.arrivalSlideDirection=e===`sakura-ridge`?1:-1,this.arrivalStopTimer=0,this.keepsakes=[],this.score=0,this.coinsCollected=0,this.obstacleHits=0,this.obstacleImpactCooldown=0,this.crashElapsed=0,this.crashBoardGap=0,this.crashResumeSpeed=0,this.crashSlideSpeed=0,this.crashRemountRequested=!1,this.jumpActive=!1,this.jumpElapsed=0,this.jumpHeight=0,this.obstaclesCleared=0,this.state=`riding`,this.rider.root.visible=!0;let c=this.world.route.sampleAt(0);this.worldPosition.copy(c.position),this.heading=Math.atan2(c.tangent.x,c.tangent.z),this.rider.root.position.copy(this.worldPosition),this.cameraPosition.copy(c.position).addScaledVector(c.tangent,-8).add(new q(0,4.2,0)),this.camera.position.copy(this.cameraPosition),this.menu.classList.add(`hidden`),this.pausePanel.classList.add(`hidden`),this.journalPanel.classList.add(`hidden`),this.hud.classList.remove(`hidden`),this.routeLabel.textContent=this.world.route.name,this.hint.textContent=this.presentation===`portrait`?`Swipe sideways · swipe down to push · swipe up to ollie · double-tap to slide`:`←/A →/D steer · ↓/S push · ↑/W ollie · Space slide · C camera · F inspect`,this.hint.classList.remove(`hidden`),this.hintTimer=7,this.resumeButton.classList.remove(`hidden`),n.forEach(e=>{e.disabled=!1}),delete this.menu.dataset.loading,this.updateJournalUI();let l=performance.now();if(r&&!this.mobileRuntime)try{this.renderer.compile(this.scene,this.camera)}catch(e){console.warn(`Shader warmup was skipped after a renderer error`,e)}this.metrics.setLoadTimings(s,performance.now()-l),t?(this.distance=this.world.route.length-2,this.arriveVillage(),this.worldPosition.set(Af.x,this.world.town.heightAt(Af.x,Af.z)+.03,Af.z),this.heading=Af.heading,this.rider.root.position.copy(this.worldPosition),this.cameraPosition.copy(this.worldPosition).add(new q(0,3.7,-6.2)),this.cameraTarget.copy(this.worldPosition).add(new q(0,1.8,3.2)),this.updateRiderAndCamera(2),this.updateActionPrompt(),this.updateHUD(),this.showToast(`Hanasato Village. Talk to residents for route requests.`,3.2)):this.showToast(`${this.world.route.name} — take your time`,2.6),o&&this.showToast(`Fresh pickups were not secured. Find them again on this run.`,4),this.updateRiderAndCamera(2),this.world.updateAmbient(this.elapsed,this.worldPosition,this.distance,this.speed),this.recordLoadDiagnostic(`loading`,`Rendering first frame`),this.mobileRuntime?await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(()=>e()))):this.renderer.render(this.scene,this.camera),this.recordLoadDiagnostic(`ready`,`World entered successfully`)}returnToMenu(){this.npcDialogue.close(),this.setInspection(!1,!1),this.setOverview(!1),this.roadSectionView=!1,this.setTopDownCamera(!1),this.state!==`menu`&&(this.stateBeforeModal=this.state===`paused`?this.stateBeforeModal:this.state),this.state=`menu`,this.settingsFromMenu=!1,this.pausePanel.dataset.context=`pause`,this.hud.classList.add(`hidden`),this.pausePanel.classList.add(`hidden`),this.journalPanel.classList.add(`hidden`),this.menu.classList.remove(`hidden`),this.input.cancel()}openMenuSettings(){this.settingsFromMenu=!0,this.pausePanel.dataset.context=`menu`,this.settingsTitle.textContent=`Settings`,this.continueButton.textContent=`Back to main menu`,this.menu.classList.add(`hidden`),this.pausePanel.classList.remove(`hidden`),this.input.cancel()}resumeJourney(){this.world&&(this.state=this.stateBeforeModal===`menu`?`riding`:this.stateBeforeModal,this.menu.classList.add(`hidden`),this.hud.classList.remove(`hidden`))}openPause(){this.state!==`menu`&&this.state!==`paused`&&(this.setInspection(!1),this.setOverview(!1),this.settingsFromMenu=!1,this.pausePanel.dataset.context=`pause`,this.settingsTitle.textContent=`Comfort & sound`,this.continueButton.textContent=`Continue`,this.stateBeforeModal=this.state,this.state=`paused`,this.pausePanel.classList.remove(`hidden`),this.actionButton.classList.add(`hidden`),this.input.cancel())}closePause(){if(this.settingsFromMenu){this.settingsFromMenu=!1,this.pausePanel.classList.add(`hidden`),this.menu.classList.remove(`hidden`);return}this.state===`paused`&&(this.state=this.stateBeforeModal,this.pausePanel.classList.add(`hidden`))}openJournal(){this.state!==`menu`&&this.state!==`journal`&&(this.setInspection(!1),this.setOverview(!1),this.stateBeforeModal=this.state,this.state=`journal`,this.toastTimer=0,this.toast.classList.add(`hidden`),this.updateJournalUI(),this.journalPanel.classList.remove(`hidden`),this.actionButton.classList.add(`hidden`),this.input.cancel())}closeJournal(){this.state===`journal`&&(this.state=this.stateBeforeModal,this.journalPanel.classList.add(`hidden`))}toggleOverview(){this.setOverview(!this.overviewActive)}toggleTopDownCamera(){!this.world||this.overviewActive||this.inspectionActive||this.zone!==`outdoor`||this.state!==`riding`&&this.state!==`offroad`||(this.setTopDownCamera(!this.roadPlanView,!0),this.showToast(this.roadPlanView?`Top-down camera`:`Follow camera`,1.4))}setTopDownCamera(e,t=!1){this.roadPlanView=e,e&&(this.roadSectionView=!1),this.syncCameraToggle(),t&&this.world&&this.rider?.root.visible&&this.updateRiderAndCamera(2)}syncCameraToggle(){let e=this.state===`paused`?this.stateBeforeModal:this.state,t=!this.overviewActive&&!this.inspectionActive&&this.zone===`outdoor`&&(e===`riding`||e===`offroad`);this.cameraToggle.classList.toggle(`hidden`,!t),this.cameraToggle.textContent=this.roadPlanView?`Follow camera`:`Top-down camera`,this.cameraToggle.setAttribute(`aria-label`,this.roadPlanView?`Switch to follow camera`:`Switch to top-down camera`),this.cameraToggle.setAttribute(`aria-pressed`,String(this.roadPlanView))}toggleInspection(){this.setInspection(!this.inspectionActive)}setInspection(e,t=!0){if(!(e&&(!this.world||this.overviewActive||this.zone!==`outdoor`||![`riding`,`offroad`,`walking`].includes(this.state)))){if(e===this.inspectionActive){this.syncInspectionToggle();return}if(this.inspectionActive=e,this.input.cancel(),this.inspectionControls.enabled=e,e){this.roadSectionView=!1,this.setTopDownCamera(!1,!0),this.camera.up.set(0,1,0),this.inspectionControls.target.copy(this.worldPosition).add(new q(0,1.05,0));let e=this.camera.position.clone().sub(this.inspectionControls.target);e.lengthSq()<.001&&e.set(0,2.5,-6),e.length()<6&&this.camera.position.copy(this.inspectionControls.target).add(e.setLength(6)),this.inspectionControls.update(),this.cameraPosition.copy(this.camera.position),this.cameraTarget.copy(this.inspectionControls.target),this.actionButton.classList.add(`hidden`),this.hint.textContent=`Inspection frozen · drag to orbit · scroll or pinch to zoom · F resumes`,this.hint.classList.remove(`hidden`),this.hintTimer=0,this.showToast(`Inspection mode — the mountain is frozen`,1.8)}else this.inspectionControls.enabled=!1,t&&this.world&&this.rider?.root.visible&&this.updateRiderAndCamera(2),this.hintTimer=.1;this.syncInspectionToggle(),this.syncCameraToggle()}}syncInspectionToggle(){let e=this.state===`paused`?this.stateBeforeModal:this.state,t=!this.overviewActive&&this.zone===`outdoor`&&[`riding`,`offroad`,`walking`].includes(e);this.inspectionToggle.classList.toggle(`hidden`,!t&&!this.inspectionActive),this.inspectionToggle.textContent=this.inspectionActive?`Resume gameplay`:`Inspect scene`,this.inspectionToggle.setAttribute(`aria-label`,this.inspectionActive?`Resume gameplay`:`Freeze and inspect the scene`),this.inspectionToggle.setAttribute(`aria-pressed`,String(this.inspectionActive)),this.mapToggle.classList.toggle(`hidden`,this.inspectionActive)}setOverview(e){e&&(!this.world||this.zone!==`outdoor`||[`menu`,`paused`,`journal`,`interior`].includes(this.state))||(e&&this.setInspection(!1),this.overviewActive=e,this.world?.setOverview(e),this.scene.fog=e?null:this.gameplayFog,this.sky.visible=!e,this.rider&&(this.rider.root.visible=!e&&this.state!==`menu`),this.mapToggle.textContent=e?`Return`:`Map`,this.mapToggle.setAttribute(`aria-pressed`,String(e)),this.syncCameraToggle(),this.syncInspectionToggle(),this.overviewLegend.classList.toggle(`hidden`,!e),this.hud.toggleAttribute(`data-overview`,e),e?(this.input.cancel(),this.actionButton.classList.add(`hidden`),this.toastTimer=0,this.toast.classList.add(`hidden`),this.hint.textContent=`Three routes descend from four peaks · press M or Return to continue`,this.hint.classList.remove(`hidden`),this.hintTimer=0):this.world&&(this.world.updateAmbient(this.elapsed,this.worldPosition,this.distance,this.speed),this.hintTimer=.1))}frame=e=>{requestAnimationFrame(this.frame);let t=Math.min(100,e-this.lastFrame),n=Math.min(.05,t/1e3);this.lastFrame=e,this.inspectionActive||(this.elapsed+=n),this.metrics.record(t),this.update(n,e),this.renderer.render(this.scene,this.overviewActive?this.overviewCamera:this.camera)};update(e,t){if(this.world?.updateAmbient(this.elapsed,this.worldPosition,this.distance,this.speed),this.toastTimer>0&&(this.toastTimer-=e,this.toastTimer<=0&&this.toast.classList.add(`hidden`)),this.hintTimer>0&&(this.hintTimer-=e,this.hintTimer<=0&&this.hint.classList.add(`hidden`)),this.metricsTimer+=e,this.metricsTimer>2&&(this.metricsTimer=0,this.metrics.snapshot(this.renderer,this.stateSnapshot())),!this.world){this.state===`menu`&&(this.camera.fov=eh(this.camera.fov,this.presentation===`portrait`?Xm:Ym,4,e),this.camera.updateProjectionMatrix()),this.updateParallaxSky(e);return}if(this.overviewActive){this.updateHUD();return}if(this.inspectionActive){this.inspectionControls.update(),this.cameraPosition.copy(this.camera.position),this.cameraTarget.copy(this.inspectionControls.target),this.shadowFocus.copy(this.inspectionControls.target),this.sun.position.copy(this.shadowFocus).add(this.sunOffset),this.sun.target.position.copy(this.shadowFocus),this.sun.target.updateMatrixWorld(),this.updateParallaxSky(e),this.updateHUD();return}if(![`menu`,`paused`,`journal`].includes(this.state)&&!this.npcDialogue.open){let n=hf(this.playerProgress,e);n&&(this.persistPlayerProgress(),this.updateJournalUI(),this.showToast(n===1?`Pickup secured. Safe from later falls.`:`Pickups secured. Safe from later falls.`,2.4)),this.input.update(this.state,t),this.state===`riding`?this.updateRiding(e):this.state===`crashed`?this.updateCrash(e):this.state===`offroad`?this.updateOffroad(e):(this.state===`walking`||this.state===`interior`)&&this.updateWalking(e),this.updateActionPrompt()}this.updateRiderAndCamera(e),this.updateParallaxSky(e);let n=this.villageArrived?Pf(this.world.town.plan.stream,this.worldPosition.x,this.worldPosition.z).distance:this.worldPosition.distanceTo(this.world.streamPosition);this.audio.update(this.state,this.zone,this.routeId,this.speed,this.sliding,n,this.villageArrived,this.settings,e),this.updateHUD()}updateRiding(e){if(!this.world)return;let t=this.world.route,n=this.distance,r=this.lateral;this.obstacleImpactCooldown=Math.max(0,this.obstacleImpactCooldown-e);let i=t.sampleAt(this.distance),a=t.length-Lm,o=Math.max(0,a-this.distance);!this.arrivalSlideActive&&!this.villageArrived&&o<=Math.max(10,this.speed*this.speed/(2*Im)+1.4)&&(this.arrivalSlideActive=!0,this.arrivalSlideDirection=Math.sign(this.riderPoseSteer)||(t.id===`sakura-ridge`?1:-1),this.arrivalStopTimer=0,this.exitCharge=0,this.showToast(`Hanasato ahead — sliding to a stop`,2.2));let s=this.input.consumeJump();if(this.arrivalSlideActive&&this.jumpActive?(this.jumpActive=!1,this.jumpElapsed=0,this.jumpHeight=0):s&&!this.jumpActive&&(this.jumpActive=!0,this.jumpElapsed=0,this.audio.oneShot(`jump`,.78)),this.jumpActive){this.jumpElapsed+=e;let t=$m(this.jumpElapsed/Vm,0,1),n=$m((t-Wm)/.84,0,1),r=Math.max(0,Math.sin(n*Math.PI));this.jumpHeight=r**.68*Hm,t>=1&&(this.jumpActive=!1,this.jumpElapsed=0,this.jumpHeight=0)}let c=this.input.consumeSlidePulse(e);this.sliding=this.arrivalSlideActive||!this.jumpActive&&(this.input.slideHeld||c);let l=this.input.consumePushPulse(e);this.pushing=!this.arrivalSlideActive&&!this.jumpActive&&!this.sliding&&(this.input.pushHeld||l);let u=this.routeId===`cedar-stream`,d=this.routeId===`hairpin-pass`,f=(u?16.2:d?13.2:12.7)*th,p=Math.max(0,i.grade),m=Math.max(0,-i.grade),h=((m>.001?0:.7)+p*18-m*28)*th*(u?1.3:d?1:.92),g=this.pushing?6.2*th:0,_=.5*th,v=this.speed*this.speed*(.004/th),y=this.sliding&&!this.arrivalSlideActive?14.5*th:0,b=this.obstacleImpactCooldown>0?6.5*th:0,x=Math.max(0,this.speed-f)*1.7,S=0;!this.arrivalSlideActive&&m<=.002&&(S=this.obstacleImpactCooldown>0?.8*th:(this.sliding?2.1:3.35)*th);let C=$m(this.speed+(h+g-_-v-y-b-x)*e,S,f+1.3*th);this.speed=this.arrivalSlideActive?Math.min(C,Math.sqrt(2*Im*o)):C;let w=new q(1,0,0).applyQuaternion(this.camera.quaternion).setY(0).normalize(),T=Math.sign(i.right.dot(w))||1,E=this.input.steer*this.settings.steering*T,D=this.riderPoseSteer;if(this.arrivalSlideActive)this.riderPoseSteer=eh(this.riderPoseSteer,this.arrivalSlideDirection*.72,5.5,e),D=this.riderPoseSteer,this.lateralVelocity=eh(this.lateralVelocity,0,7,e),this.lateral=eh(this.lateral,0,1.8,e),this.exitCharge=0;else{let t=Math.abs(this.riderPoseSteer)>.08&&Math.abs(E)>.08&&Math.sign(this.riderPoseSteer)!==Math.sign(E)?10.5:Math.abs(E)<.01?9.5:8.8,n=this.input.isTouchSteering;this.riderPoseSteer=eh(this.riderPoseSteer,E,t*(n?1.65:1),e),D=this.riderPoseSteer,this.lateralVelocity+=D*(n?22:13.2)*e,this.lateralVelocity*=Math.exp(-4.4*e),this.lateral+=this.lateralVelocity*e}let O=t.roadProfileAt(this.distance),k=(this.lateral<0?O.leftWidth:O.rightWidth)*.58,A=Math.sign(D)===Math.sign(this.lateral)&&Math.abs(D)>.72;this.arrivalSlideActive||(A&&Math.abs(this.lateral)>k?this.exitCharge+=e:this.exitCharge=Math.max(0,this.exitCharge-e*1.4),Math.abs(this.lateral)>k&&this.exitCharge<.9&&(this.lateralVelocity+=-Math.sign(this.lateral)*(Math.abs(this.lateral)-k)*4.8*e)),this.lateral=$m(this.lateral,-O.leftWidth*1.65,O.rightWidth*1.65),this.distance=this.arrivalSlideActive?Math.min(a,this.distance+this.speed*e):this.distance+this.speed*e;let j=t.sampleAt(this.distance),M=t.roadProfileAt(this.distance),N=this.lateral<0?M.leftWidth:M.rightWidth;this.worldPosition.copy(j.position).addScaledVector(j.right,this.lateral),this.worldPosition.y=j.position.y,this.heading=Math.atan2(j.tangent.x,j.tangent.z);let ee=this.obstacleImpactCooldown<=0?this.world.hitRoadObstacle(n,this.distance,this.lateral):null;if(ee)if(this.jumpActive&&this.jumpHeight>=Um)this.obstaclesCleared+=1,this.obstacleImpactCooldown=.75;else{this.startCrash(ee.lateral);return}let P=this.world.collectCoins(this.worldPosition,this.distance);P>0&&(this.coinsCollected+=P,this.playerProgress.coins+=P,this.persistPlayerProgress(),this.score+=P*nh,this.audio.oneShot(`coin`,1),this.scoreDisplay.querySelector(`img`)?.animate([{transform:`scale(1) rotate(0deg)`},{transform:`scale(1.18) rotate(-6deg)`,offset:.45},{transform:`scale(1) rotate(0deg)`}],{duration:260,easing:`ease-out`}));for(let e of this.world.questPickups)!e.active||e.routeId!==this.routeId||!xf(e,n,this.distance,r,this.lateral)||!mf(this.playerProgress,e.questId,e.index,this.routeId)||(this.trackedQuestId=e.questId,this.audio.oneShot(`coin`,.8),this.persistPlayerProgress(),this.world.syncQuestItems(this.playerProgress),this.updateJournalUI());!this.arrivalSlideActive&&this.exitCharge>.95&&Math.abs(this.lateral)>N*.98&&(this.state=`offroad`,this.sliding=!1,this.jumpActive=!1,this.jumpElapsed=0,this.jumpHeight=0,this.showToast(`The grass slows you gently`,2.4)),this.arrivalSlideActive&&this.distance>=a-.005&&(this.distance=a,this.speed=0,this.arrivalStopTimer+=e,this.arrivalStopTimer>=Rm&&this.arriveVillage())}startCrash(e){let t=gf(this.playerProgress);t&&(this.persistPlayerProgress(),this.world?.syncQuestItems(this.playerProgress),this.updateJournalUI());let n=this.speed;this.state=`crashed`,this.crashElapsed=0,this.crashSide=-Math.sign(e)||1,this.crashBoardGap=0,this.crashResumeSpeed=Math.max(3.4,n*.38),this.crashSlideSpeed=$m(n*.58,3.8,8.5),this.crashRemountRequested=!1,this.obstacleImpactCooldown=1.1,this.obstacleHits+=1,this.speed=0,this.lateralVelocity=0,this.riderPoseSteer=0,this.sliding=!1,this.pushing=!1,this.jumpActive=!1,this.jumpElapsed=0,this.jumpHeight=0,this.input.cancel(),this.audio.oneShot(`crash`,1),this.showToast(t?`Slid out! Dropped ${t} fresh ${t===1?`pickup`:`pickups`}. Retry next run. Press any key or tap to get up.`:`Slid out! Press any key or tap to get back on`,8)}updateCrash(e){if(!this.world)return;this.crashElapsed+=e;let t=$m(this.crashElapsed/zm,0,1);this.crashBoardGap=G.lerp(0,.85,1-(1-t)**2);let n=this.world.route.length-Lm;this.distance=Math.min(n,this.distance+this.crashSlideSpeed*e),this.crashSlideSpeed=Math.max(0,this.crashSlideSpeed-Bm*e);let r=this.world.route.sampleAt(this.distance),i=this.world.route.roadProfileAt(this.distance),a=-i.leftWidth+.65,o=i.rightWidth-.65;this.lateral=$m(this.lateral,a,o),this.worldPosition.copy(r.position).addScaledVector(r.right,this.lateral),this.worldPosition.y=Sp(r,this.worldPosition.x,this.worldPosition.z),this.heading=Math.atan2(r.tangent.x,r.tangent.z),t>=1&&this.crashRemountRequested&&this.remountAfterCrash()}requestCrashRemount(){this.state===`crashed`&&(this.crashElapsed>=zm?this.remountAfterCrash():this.crashRemountRequested=!0)}remountAfterCrash(){if(this.state!==`crashed`||!this.world)return;let e=this.world.route.sampleAt(this.distance),t=this.world.route.roadProfileAt(this.distance);this.lateral=$m(this.lateral,-t.leftWidth*.55,t.rightWidth*.55),this.worldPosition.copy(e.position).addScaledVector(e.right,this.lateral),this.worldPosition.y=Sp(e,this.worldPosition.x,this.worldPosition.z),this.state=`riding`,this.speed=this.crashResumeSpeed,this.crashElapsed=0,this.crashBoardGap=0,this.crashSlideSpeed=0,this.crashRemountRequested=!1,this.obstacleImpactCooldown=1.1,this.toastTimer=0,this.toast.classList.add(`hidden`),this.input.cancel(),this.audio.oneShot(`cloth`,.8)}updateOffroad(e){if(!this.world)return;this.sliding=!1,this.pushing=!1,this.riderPoseSteer=eh(this.riderPoseSteer,0,4,e);let t=this.world.route.sampleAt(this.distance),n=t.tangent.clone().setY(0).normalize().addScaledVector(t.right,this.lateralVelocity*.08).normalize();this.worldPosition.addScaledVector(n,this.speed*e),this.worldPosition.y=Mp(this.world.route,this.worldPosition.x,this.worldPosition.z)+.03,this.heading=Math.atan2(n.x,n.z),this.speed=Math.max(0,this.speed-(3.7+Math.abs(this.lateral)*.06)*e),this.speed<=.38&&(this.speed=0,this.state=`walking`,this.roadSectionView=!1,this.setTopDownCamera(!1),this.audio.oneShot(`cloth`,.7),this.showToast(`Board in hand — wander anywhere nearby`,3.2))}updateWalking(e){if(!this.world)return;let t=this.world;this.pushing=!1;let n=this.worldPosition.clone(),r=this.input.steer*this.settings.steering;this.heading-=r*1.85*e;let i=this.input.walkForward*3.25;this.speed=eh(this.speed,i,6,e);let a=new q(Math.sin(this.heading),0,Math.cos(this.heading));if(this.worldPosition.addScaledVector(a,this.speed*e),this.zone===`outdoor`){if(!this.villageArrived&&Rf(this.worldPosition.x,this.worldPosition.z)){let e=t.route.sampleAt(t.route.length);this.worldPosition.distanceTo(e.position)<12&&this.arriveVillage(this.worldPosition)}if(this.villageArrived){let r=this.worldPosition.x-n.x,i=this.worldPosition.z-n.z;this.worldPosition.copy(n);let a=Vf(this.worldPosition,r,i,.38,t.town);this.speed=Math.min(this.speed,a/Math.max(.001,e)),this.worldPosition.y=t.town.heightAt(this.worldPosition.x,this.worldPosition.z)+.03}else{let e=t.route.nearestAt(this.worldPosition),n=t.route.roadProfileAt(e.distance),r=this.worldPosition.clone().sub(e.sample.position).dot(e.sample.right),i=r<0?n.leftWidth+n.leftShoulder:n.rightWidth+n.rightShoulder,a=Math.abs(r)<=i?Sp(e.sample,this.worldPosition.x,this.worldPosition.z):Mp(t.route,this.worldPosition.x,this.worldPosition.z);this.worldPosition.y=a+.03}}else this.worldPosition.x=$m(this.worldPosition.x,-7.6,7.6),this.worldPosition.z=$m(this.worldPosition.z,-7.8,6.4),this.worldPosition.y=0}arriveVillage(e){if(!this.world||this.villageArrived)return;this.villageArrived=!0,this.state=`walking`,this.roadSectionView=!1,this.setTopDownCamera(!1),this.speed=0,this.sliding=!1,this.pushing=!1,this.arrivalSlideActive=!1,this.arrivalStopTimer=0,this.riderPoseSteer=0,this.jumpActive=!1,this.jumpElapsed=0,this.jumpHeight=0;let t=this.world.route.sampleAt(this.world.route.length);this.worldPosition.copy(e??t.position),this.worldPosition.y=this.world.town.heightAt(this.worldPosition.x,this.worldPosition.z)+.03,this.heading=Math.atan2(t.tangent.x,t.tangent.z),this.lateral=0;let n=uf.filter(e=>ff(this.playerProgress,e)===`ready`);this.showToast(n.length?`Welcome home. ${n.length} request${n.length===1?` is`:`s are`} ready to deliver.`:`Hanasato Village. Talk to residents for route requests.`,4),this.addKeepsake({id:`arrival-${this.routeId}`,title:this.world.route.name,text:`A mountain road remembered by the shape of its turns.`,icon:`⌁`},!1)}updateRiderAndCamera(e){if(!this.world||!this.rider?.root.visible)return;let t=this.state===`riding`||this.state===`crashed`||this.state===`offroad`,n=0;if(t){let e=this.world.route.sampleAt(this.distance),t=e.tangent.clone().setY(0).normalize(),r=e.right.clone().setY(0).normalize(),{halfTrack:i,halfWheelbase:a,wheelBottomOffset:o}=this.rider.contactPatch,s=(n,i)=>{let a=this.worldPosition.x+t.x*n+r.x*i,o=this.worldPosition.z+t.z*n+r.z*i;return this.state===`riding`||this.state===`crashed`?Sp(e,a,o):Mp(this.world.route,a,o)+.03},c=s(a,-i),l=s(a,i),u=s(-a,-i),d=s(-a,i),f=(c+l+u+d)*.25,p=(c+l-(u+d))/(4*a),m=(l+d-(c+u))/(4*i),h=t.clone().setY(p).normalize(),g=r.clone().setY(m).normalize(),_=h.clone().cross(g).normalize();g.crossVectors(_,h).normalize(),n=Math.atan2(new q().crossVectors(r,g).dot(h),r.dot(g)),this.rider.root.position.set(this.worldPosition.x,f,this.worldPosition.z).addScaledVector(_,-o),this.state===`riding`&&this.jumpActive&&this.rider.root.position.addScaledVector(_,this.jumpHeight),this.rider.root.quaternion.setFromRotationMatrix(new J().makeBasis(g,_,h));let v=0;for(let t of[-1,1])for(let n of[-1,1]){let r=t*a,o=n*i,s=this.worldPosition.x+h.x*r+g.x*o,c=f+h.y*r+g.y*o,l=this.worldPosition.z+h.z*r+g.z*o,u=this.state===`riding`||this.state===`crashed`?Sp(e,s,l):Mp(this.world.route,s,l)+.03;v=Math.max(v,Math.abs(c-u))}this.rider.root.userData.surfaceBank=n,this.rider.root.userData.wheelContactError=v,this.rider.root.userData.jumpHeightM=this.state===`riding`?this.jumpHeight:0}else this.rider.root.position.copy(this.worldPosition),this.rider.root.rotation.set(0,this.heading,0),this.rider.root.userData.surfaceBank=0,this.rider.root.userData.wheelContactError=0,this.rider.root.userData.jumpHeightM=0;if(this.state===`crashed`)this.rider.setCrashPose(this.crashElapsed,this.crashSide,this.crashBoardGap);else{let e=this.state===`riding`&&this.jumpActive?`jump`:this.state===`riding`&&this.sliding?`slide`:this.state===`riding`&&this.pushing?`push`:this.state===`riding`||this.state===`offroad`?`ride`:`walk`,r=t?this.riderPoseSteer:this.input.steer,i=this.state===`paused`?0:this.speed,a=this.jumpActive?$m(this.jumpElapsed/Vm,0,1):0;this.rider.setMode(e,this.elapsed,r,i,n,a)}if(this.roadPlanView){let e=this.world.route.sampleAt(this.distance),t=e.tangent.clone().setY(0).normalize(),n=e.position.clone();this.camera.up.copy(t),this.cameraPosition.copy(n).add(new q(0,92,0)),this.cameraTarget.copy(n),this.camera.position.copy(this.cameraPosition),this.camera.lookAt(this.cameraTarget),this.camera.fov=44,this.camera.updateProjectionMatrix(),this.shadowLeadM=0,this.sun.position.copy(n).add(this.sunOffset),this.sun.target.position.copy(n),this.sun.target.updateMatrixWorld();return}if(this.roadSectionView){let e=this.world.route.sampleAt(this.distance),t=e.rawTerrainBankSlope>0?-1:1,n=e.position.clone().addScaledVector(e.right,t*.5);this.camera.up.set(0,1,0),this.cameraPosition.copy(n).addScaledVector(e.right,t*10).addScaledVector(e.tangent.clone().setY(0).normalize(),-3).add(new q(0,1.2,0)),this.cameraTarget.copy(n).add(new q(0,-.25,0)),this.camera.position.copy(this.cameraPosition),this.camera.lookAt(this.cameraTarget),this.camera.fov=38,this.camera.updateProjectionMatrix(),this.shadowLeadM=0,this.sun.position.copy(n).add(this.sunOffset),this.sun.target.position.copy(n),this.sun.target.updateMatrixWorld();return}this.camera.up.set(0,1,0);let r;r=(this.state===`riding`||this.state===`crashed`)&&this.world?this.world.route.sampleAt(this.distance).tangent.clone().setY(0).normalize():new q(Math.sin(this.heading),0,Math.cos(this.heading));let i=this.presentation===`portrait`,a=t,o=this.state===`crashed`,s=a&&this.quality===`high`&&!i,c=i?3.25:2.95,l=i?1.7:1.55,u=3.4;if(this.state===`interior`)c=6,l=4.2;else if(this.villageArrived&&this.state===`walking`)c=i?5:5.6,l=i?2.7:2.8,u=3.1;else if(o)c=i?5.6:6.4,l=i?2.4:2.6;else if(this.state===`riding`){let e=$m(12+this.speed*.7,12,26),t=this.world.route.sampleAt(Math.min(this.world.route.length,this.distance+e)).tangent.clone().setY(0).normalize(),n=$m((1-r.dot(t))*2.5,0,1);c=(i?3.8:4.5)+n*1.1,l=(i?1.75:1.6)+n*.9,u=(i?13:15)+this.speed*.55,u*=1-n*.25}else a&&(c=i?2.7:3.35,l=i?1.2:1.3,s&&(c=4.35,l=1.16));let d=this.state===`riding`?this.riderPoseSteer:0;this.cameraSteer=eh(this.cameraSteer,d,d===0?7:5.5,e);let f=this.cameraSteer*(i?.42:s?.52:.62),p,m;if(o)p=this.worldPosition.clone().addScaledVector(r,-c).add(new q(0,l,0)),m=this.worldPosition.clone().addScaledVector(r,.65).add(new q(0,.8,0));else if(a){let e=Math.max(0,this.distance-c),t=this.world.route.sampleAt(e),n=this.world.route.sampleAt(Math.min(this.world.route.length,this.distance+u));if(m=n.position.clone().addScaledVector(n.right,this.lateral*.32),m.y+=s?.54:.72,this.state===`riding`){let e=m.clone().sub(this.worldPosition).setY(0);e.lengthSq()<.001&&e.copy(r),e.normalize(),p=this.worldPosition.clone().addScaledVector(e,-c),p.y=t.position.y}else p=t.position.clone().addScaledVector(t.right,this.lateral*.58),this.distance<c&&p.addScaledVector(t.tangent,-(c-this.distance));p.y+=l+(s&&!this.settings.reducedMotion?Math.sin(this.elapsed*(4.2+this.speed*.12))*.018:0)}else p=this.worldPosition.clone().addScaledVector(r,-c).add(new q(0,l,0)),m=this.worldPosition.clone().addScaledVector(r,u).add(new q(0,this.state===`interior`?2.1:.9,0));if(p.x+=Math.cos(this.heading)*f,p.z-=Math.sin(this.heading)*f,this.zone===`outdoor`){let e=this.villageArrived?this.world.town.heightAt(p.x,p.z):Mp(this.world.route,p.x,p.z);if(p.y=Math.max(p.y,e+l),o){let e=this.world.route.nearestAt(m).sample;m.y=Sp(e,m.x,m.z)+.8}else if(a){let e=this.world.route.nearestAt(m).sample;m.y=Sp(e,m.x,m.z)+.72}else{let e=this.villageArrived?this.world.town.heightAt(m.x,m.z):Mp(this.world.route,m.x,m.z);m.y=e+1.1}}let h=this.settings.reducedMotion?.35:this.settings.motion,g=G.lerp(3.5,7.8,h);if(this.cameraPosition.lerp(p,1-Math.exp(-g*e)),this.cameraTarget.lerp(m,1-Math.exp(-g*1.2*e)),this.camera.position.copy(this.cameraPosition),this.camera.lookAt(this.cameraTarget),s&&!this.settings.reducedMotion){let e=$m(-this.riderPoseSteer*.052-n*.2,-.075,.075)*h;this.camera.rotateZ(e)}let _=this.settings.reducedMotion?0:$m((this.speed-5.5)*(s?.68:.45),0,s?8:5)*h,v=this.state===`menu`?i?Xm:Ym:(i?58:s?57:55)+_;this.camera.fov=eh(this.camera.fov,v,4,e),this.camera.updateProjectionMatrix(),this.shadowLeadM=a?$m(32+this.speed*.9,36,46):10,this.shadowFocus.copy(this.worldPosition).addScaledVector(r,this.shadowLeadM),this.sun.position.copy(this.shadowFocus).add(this.sunOffset),this.sun.target.position.copy(this.shadowFocus),this.sun.target.updateMatrixWorld()}updateActionPrompt(){if(this.world){if(this.activeHotspot=null,this.actionMode=`none`,this.mountDistance=this.distance,this.state===`crashed`||this.npcDialogue.open){this.actionButton.classList.add(`hidden`);return}if(this.state===`interior`)this.actionMode=`leave`,this.actionButton.textContent=`Return outside`;else{let e=null,t=1/0;for(let n of this.world.hotspots){if(this.keepsakes.some(e=>e.id===n.id)&&n.kind===`discovery`)continue;let r=n.position.distanceTo(this.worldPosition),i=this.state===`walking`||n.kind===`discovery`,a=n.kind===`discovery`?11.5:2.5;n.kind!==`discovery`&&this.villageArrived&&!Hf(this.worldPosition,n.position,this.world.town.colliders,n.kind===`tea-house`||n.kind===`shop`?void 0:n.id)||i&&r<a&&r<t&&(e=n,t=r)}if(e){this.activeHotspot=e,this.actionMode=`hotspot`,this.actionButton.textContent=e.label;let t=uf.find(t=>t.npcId===e.id);if(t&&ff(this.playerProgress,t)===`ready`){let t=this.world.town.residents.find(t=>t.id===e.id);this.actionButton.textContent=`Deliver to ${t.name}`}}else if(this.state===`walking`&&!this.villageArrived&&this.zone===`outdoor`){let e=this.world.route.nearestAt(this.worldPosition),t=this.world.route.roadProfileAt(e.distance),n=this.worldPosition.clone().sub(e.sample.position).dot(e.sample.right)<0?t.leftWidth:t.rightWidth;e.separation<n+5.5&&(this.mountDistance=e.distance,this.actionMode=`mount`,this.actionButton.textContent=`Set the board down`)}}this.actionButton.classList.toggle(`hidden`,this.actionMode===`none`)}}performAction(){if(!this.world||this.npcDialogue.open||this.overviewActive||this.inspectionActive||![`riding`,`walking`,`interior`].includes(this.state))return;if(this.audio.unlock(),this.actionMode===`mount`){this.distance=this.mountDistance;let e=this.world.route.sampleAt(this.distance);this.worldPosition.copy(e.position),this.lateral=0,this.lateralVelocity=0,this.exitCharge=0,this.speed=3.4,this.state=`riding`,this.heading=Math.atan2(e.tangent.x,e.tangent.z),this.audio.oneShot(`cloth`,.8),this.showToast(`A quiet push, and the road carries you again`,2.8),this.updateRiderAndCamera(2),this.updateActionPrompt(),this.updateHUD(),this.world.updateAmbient(this.elapsed,this.worldPosition,this.distance,this.speed),this.renderer.render(this.scene,this.camera);return}if(this.actionMode===`leave`){this.transitionZone(`outdoor`);return}if(!this.activeHotspot)return;let e=this.activeHotspot;if(e.kind===`npc`&&e.dialogue){let t=this.world.town.residents.find(t=>t.id===e.id);if(!t)return;$(`#npcName`).textContent=t.name,$(`#npcRole`).textContent=t.role,$(`#npcWords`).textContent=e.dialogue,this.conversationNpcId=t.id,this.updateNpcQuest(),this.speed=0,this.input.cancel(),this.actionButton.classList.add(`hidden`),this.npcDialogue.showModal()}else e.kind===`tea-house`?this.transitionZone(`tea-house`):e.kind===`shop`?this.transitionZone(`shop`):(e.keepsake&&this.addKeepsake({id:e.id,...e.keepsake}),e.kind===`cat`&&this.audio.oneShot(`cat`,.75),e.kind===`dog`&&this.audio.oneShot(`dog`,.75))}updateNpcQuest(){let e=uf.find(e=>e.npcId===this.conversationNpcId);if($(`#npcQuest`).classList.toggle(`hidden`,!e),this.npcQuestAction.classList.toggle(`hidden`,!e),this.npcQuestRoute.classList.add(`hidden`),!e||!this.world)return;let t=ff(this.playerProgress,e),n=this.playerProgress.quests[e.id]?.collected.length??0,r=e.required,i=this.world.routes[e.route].name,a=e.request;t===`active`?a=`You have ${n} of the ${r} items. Look for gold rings beside obstacles on ${i}. Stay upright for 3 seconds after each grab to keep it, then bring the items back to me.`:t===`ready`?a=`You've found everything! Hand over the ${e.itemName.toLowerCase()} and I'll give you ${e.reward} coins.`:t===`completed`&&(a=e.thanks),$(`#npcWords`).textContent=a,$(`#npcQuestTitle`).textContent=e.title,$(`#npcQuestDetails`).textContent=t===`completed`?`${e.itemName} delivered. Request complete.`:`${e.itemName} · ${n}/${r} collected · ${i} · ${e.fractions.length} pickups per run`,$(`#npcQuestReward`).textContent=t===`completed`?`${e.reward} coins received`:`Reward: ${e.reward} coins on delivery`;let o={available:`Accept request`,active:`Request accepted`,ready:`Give items · +${e.reward} coins`,completed:`Delivered`};this.npcQuestAction.textContent=o[t],this.npcQuestAction.disabled=t===`active`||t===`completed`,t===`active`&&(this.npcQuestRoute.textContent=`Ride ${i}`,this.npcQuestRoute.classList.remove(`hidden`))}performQuestAction(){if(!this.world||!this.npcDialogue.open||!this.conversationNpcId||this.state!==`walking`)return;let e=uf.find(e=>e.npcId===this.conversationNpcId),t=this.world.town.residents.find(e=>e.id===this.conversationNpcId);if(!e||!t||this.worldPosition.distanceTo(t.object.position)>2.8||!Hf(this.worldPosition,t.object.position,this.world.town.colliders,t.id))return;let n=ff(this.playerProgress,e);if(n===`available`){if(!pf(this.playerProgress,e.id))return;this.trackedQuestId=e.id,this.showToast(`Request accepted: ${e.title}`,2.5)}else if(n===`ready`){let n=_f(this.playerProgress,e.id,t.id);if(!n)return;this.trackedQuestId=null,this.audio.oneShot(`coin`,1),this.showToast(`${t.name} gave you ${n} coins.`,3.5)}else return;this.persistPlayerProgress(),this.world.syncQuestItems(this.playerProgress),this.updateNpcQuest(),this.updateJournalUI(),this.updateHUD()}persistPlayerProgress(){bf(this.playerProgress)||this.saveWarningShown||(this.saveWarningShown=!0,this.showToast(`Browser storage is unavailable. Coins and requests will last for this session only.`,6))}updateQuestTracker(){if(!this.world||this.overviewActive||this.inspectionActive||this.npcDialogue.open){this.questTracker.classList.add(`hidden`);return}let e=uf.filter(e=>{let t=ff(this.playerProgress,e);return t===`active`||t===`ready`}),t=e.find(e=>e.id===this.trackedQuestId&&(this.villageArrived||e.route===this.routeId));if(!t&&!this.villageArrived&&(t=e.find(e=>e.route===this.routeId&&ff(this.playerProgress,e)===`active`)),t??=e.find(e=>ff(this.playerProgress,e)===`ready`)??e[0],this.questTracker.classList.toggle(`hidden`,!t&&!this.villageArrived),this.questTracker.dataset.ready=`false`,this.questTracker.dataset.risk=`false`,!t){let e=uf.every(e=>ff(this.playerProgress,e)===`completed`);this.questTrackerLabel.textContent=`VILLAGE REQUESTS`,this.questTrackerTitle.textContent=e?`Every request delivered`:`A little help for Hanasato`,this.questTrackerDetail.textContent=e?`Open the journal to revisit your deliveries.`:`Approach a resident and talk to accept a request.`;return}let n=this.world.town.residents.find(e=>e.id===t.npcId),r=ff(this.playerProgress,t)===`ready`,i=this.playerProgress.quests[t.id].collected.length;this.questTracker.dataset.ready=String(r),this.questTrackerLabel.textContent=`FOR ${n.name.toUpperCase()} · ${t.reward} COINS`,this.questTrackerTitle.textContent=r?`Return to ${n.name}`:`${t.itemName} ${i}/${t.required}`;let a=0,o=0;for(let e of uf){let t=this.playerProgress.quests[e.id]?.unsecured;for(let e in t)a+=1,o=Math.max(o,t[Number(e)])}if(this.questTracker.dataset.risk=String(a>0),a>0)this.questTrackerDetail.textContent=`${a} fresh ${a===1?`pickup`:`pickups`} at risk · Stay upright ${(Math.ceil(o*10)/10).toFixed(1)}s`;else if(r){let e=zf(n.object.position.x,n.object.position.z),t=Math.round(n.object.position.distanceTo(this.worldPosition));this.zone===`outdoor`?this.villageArrived?this.questTrackerDetail.textContent=`${e} · ${t} m away · Talk to deliver`:this.questTrackerDetail.textContent=`Finish your run, then talk to them in Hanasato.`:this.questTrackerDetail.textContent=`Return outside to find ${n.name}.`}else if(!this.villageArrived&&t.route===this.routeId){let e=1/0;for(let n of this.world.questPickups)n.questId===t.id&&n.active&&n.distance>=this.distance-1.2&&(e=Math.min(e,n.distance));this.questTrackerDetail.textContent=Number.isFinite(e)?`Next gold-ring pickup in ${Math.max(0,Math.round(e-this.distance))} m`:`Missed an item? Open the journal to restart this route.`}else this.questTrackerDetail.textContent=`${this.world.routes[t.route].name} · Open the journal to ride`}transitionZone(e){this.world&&(this.audio.oneShot(`door`,.75),this.fade.classList.add(`active`),window.setTimeout(()=>{this.world&&(e===`outdoor`?(this.zone=`outdoor`,this.world.setZone(`outdoor`),this.worldPosition.copy(this.savedOutdoorPosition),this.state=`walking`):(this.savedOutdoorPosition.copy(this.worldPosition),this.zone=e,this.world.setZone(e),this.worldPosition.set(0,0,-7.2),this.heading=0,this.state=`interior`,this.keepsakes.some(t=>t.id===e)||this.addKeepsake(e===`tea-house`?{id:e,title:`Tea Steam`,text:`Warm cups, worn wood, and a room that asked you to stay awhile.`,icon:`◌`}:{id:e,title:`Paper Parcel`,text:`A little shop wrapped ordinary things as if they mattered.`,icon:`□`},!1)),this.toastTimer=0,this.toast.classList.add(`hidden`),this.updateRiderAndCamera(2),this.updateActionPrompt(),this.updateHUD(),this.world.updateAmbient(this.elapsed,this.worldPosition,this.distance,this.speed),this.renderer.render(this.scene,this.camera),window.setTimeout(()=>this.fade.classList.remove(`active`),260))},260))}addKeepsake(e,t=!0){this.keepsakes.some(t=>t.id===e.id)||(this.keepsakes.push(e),this.updateJournalUI(),t&&this.showToast(`Keepsake: ${e.title}`,2.8))}updateJournalUI(){let e=uf.filter(e=>this.playerProgress.quests[e.id]),t=e.filter(e=>ff(this.playerProgress,e)!==`completed`);$(`#journalCount`).textContent=String(t.length+this.keepsakes.length),$(`#journalButton`).setAttribute(`aria-label`,`Open journal, ${t.length} requests and ${this.keepsakes.length} keepsakes`),$(`#journalWallet`).textContent=`${this.playerProgress.coins.toLocaleString()} coins saved · ${this.coinsCollected} collected this run`;let n={ready:0,active:1,completed:2,available:3};e.sort((e,t)=>n[ff(this.playerProgress,e)]-n[ff(this.playerProgress,t)]),$(`#questEntries`).innerHTML=e.length?e.map(e=>{let t=ff(this.playerProgress,e),n=this.world.town.residents.find(t=>t.id===e.npcId),r=this.world.routes[e.route].name,i=this.playerProgress.quests[e.id].collected.length,a=Object.values(this.playerProgress.quests[e.id].unsecured??{}),o=t===`ready`,s=t===`completed`,c=``;if(o)c=`<button data-quest="${e.id}" data-action="track">Find ${n.name}</button>`;else if(!s){let t=!this.villageArrived&&this.routeId===e.route?`Restart`:`Ride`;c=`<button data-quest="${e.id}" data-action="ride">${t} ${r}</button>`}return`<article class="quest-card" data-status="${t}">
        <small>${s?`Delivered`:o?`Ready to return`:`Collecting`} · ${n.name}</small>
        <strong>${e.title}</strong>
        <p>${e.itemName} · ${s?`Delivered`:`${i}/${e.required} collected`}<br>${r} · ${e.fractions.length} pickups per run</p>
        <p>${s?`${e.reward} coins received`:`Reward: ${e.reward} coins on delivery`}</p>
        ${a.length?`<p>${a.length} fresh ${a.length===1?`pickup`:`pickups`} still at risk. Stay upright ${(Math.ceil(Math.max(...a)*10)/10).toFixed(1)}s. The timer is paused here. Restarting or reloading now loses them.</p>`:``}
        ${o?`<p>Bring the items to ${n.name} in ${zf(n.object.position.x,n.object.position.z)}.</p>`:``}
        ${c}
      </article>`}).join(``):`<p class="empty">Talk to a resident in Hanasato to accept a request. Find their items on a mountain run, then bring them home for coins.</p>`;let r=$(`#journalEntries`);if(!this.keepsakes.length){r.innerHTML=`<p class="empty">Nothing collected yet. The road is in no hurry.</p>`;return}r.innerHTML=this.keepsakes.map(e=>`<article><span>${e.icon}</span><div><strong>${e.title}</strong><p>${e.text}</p></div></article>`).join(``)}updateHUD(){this.hud.toggleAttribute(`data-modal`,this.state===`paused`||this.state===`journal`);let e=this.overviewActive?`OVERVIEW`:this.inspectionActive?`INSPECT`:this.roadPlanView?`TOP VIEW`:this.state===`interior`?this.zone===`tea-house`?`TEA HOUSE`:`SHOP`:this.state.toUpperCase();if(this.modeLabel.textContent=e,this.modeLabel.classList.toggle(`hidden`,e===`RIDING`),this.world){let t=Math.round($m(this.distance,0,this.world.route.length)),n=Math.round(this.world.route.length),r={"tea-house":`Tea house`,shop:`Little shop`},i=this.world.route.name,a=`${t} / ${n} m`;this.villageArrived&&(i=`Hanasato Village`,a=zf(this.worldPosition.x,this.worldPosition.z)),this.zone!==`outdoor`&&(i=r[this.zone],a=`Hanasato Village`),this.routeLabel.textContent=i,this.routeDistance.textContent=a,this.routePosition.setAttribute(`aria-label`,`${i}, ${a}, ${e.toLowerCase()}`)}this.syncCameraToggle(),this.syncInspectionToggle(),this.updateQuestTracker();let t=this.state===`walking`||this.state===`interior`;this.hint.textContent=this.overviewActive?`Three routes descend from four peaks · press M or Return to continue`:this.inspectionActive?`Inspection frozen · drag to orbit · scroll or pinch to zoom · pause to return`:this.roadPlanView?`Top view · Pause → Scene tools → Follow camera`:this.state===`crashed`?`Press any key or tap to get back on`:this.presentation===`portrait`?t?`Swipe up to walk · swipe sideways to turn`:`Swipe sideways · swipe down to push · swipe up to ollie · double-tap to slide`:t?`←/A →/D turn · ↑/W walk · E interact · F inspect`:`←/A →/D steer · ↓/S push · ↑/W ollie · Space slide · C camera · F inspect`;let n=document.querySelectorAll(`#speedFlower i`),r=$m(Math.round(this.speed/3),0,n.length);n.forEach((e,t)=>e.classList.toggle(`lit`,t<r));let i=Math.round(this.speed*3.6),a=0;if(this.world){let e=Math.max(0,this.distance-2),t=Math.min(this.world.route.length,this.distance+18),n=this.world.route.sampleAt(e).position,r=this.world.route.sampleAt(t).position.y-n.y,i=t-e;a=r/Math.sqrt(Math.max(.001,i*i-r*r))*100}let o=Math.abs(a),s=o<.05?`0.0%`:`${a>0?`+`:`−`}${o.toFixed(1)}%`;this.speedValue.textContent=`${i} km/h`,this.gradientValue.textContent=s,this.rideTelemetry.setAttribute(`aria-label`,`Speed ${i} kilometers per hour`),this.scoreValue.textContent=this.score.toLocaleString(),this.coinCount.textContent=`${this.playerProgress.coins.toLocaleString()} coins`,this.scoreDisplay.setAttribute(`aria-label`,`Run score ${this.score}, saved wallet ${this.playerProgress.coins} coins`)}showToast(e,t){this.toast.textContent=e,this.toast.classList.remove(`hidden`),this.toastTimer=t}resize=()=>{let e=window.innerWidth,t=window.innerHeight,n=t>e?`portrait`:`landscape`;n!==this.presentation&&this.input.cancel(),this.presentation=n,document.documentElement.dataset.presentation=this.presentation;let r=this.presentation===`portrait`?1:1.5;this.quality===`safe`&&(r=.75),this.renderer.setPixelRatio(Math.min(devicePixelRatio,r)),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();let i=1900,a=e/t*i;this.overviewCamera.left=-a*.5,this.overviewCamera.right=a*.5,this.overviewCamera.top=i*.5,this.overviewCamera.bottom=-950,this.overviewCamera.updateProjectionMatrix()};stepDebug(e){let t=$m(e,0,5),n=Math.max(1,Math.ceil(t*60)),r=t/n,i=performance.now();for(let e=0;e<n;e+=1)this.inspectionActive||(this.elapsed+=r),this.update(r,i+e*r*1e3);this.renderer.render(this.scene,this.overviewActive?this.overviewCamera:this.camera)}stateSnapshot(){let e=this.worldPosition.clone().project(this.camera),t=this.rider?.root.children[0],n=t?.children[0],r=n?.getWorldPosition(new q).project(this.camera),i=n?.localToWorld(new q(0,0,1)).project(this.camera);return{state:this.state,route:this.world?.route.id??null,routeName:this.world?.route.name??null,overviewActive:this.overviewActive,inspectionActive:this.inspectionActive,worldRoutes:this.world?Object.keys(this.world.routes):[],worldTopology:this.world?.outdoor.userData.worldTopology??null,distanceM:Number(this.distance.toFixed(2)),routeLengthM:Number((this.world?.route.length??0).toFixed(2)),estimatedRideMinutes:this.world?Number((this.world.route.length/(12.4*th)/60).toFixed(1)):null,speedMps:Number(this.speed.toFixed(2)),lateralM:Number(this.lateral.toFixed(2)),lateralVelocityMps:Number(this.lateralVelocity.toFixed(3)),headingRad:Number(this.heading.toFixed(3)),worldPosition:{x:Number(this.worldPosition.x.toFixed(2)),y:Number(this.worldPosition.y.toFixed(2)),z:Number(this.worldPosition.z.toFixed(2))},cameraPosition:{x:Number(this.camera.position.x.toFixed(2)),y:Number(this.camera.position.y.toFixed(2)),z:Number(this.camera.position.z.toFixed(2))},cameraTarget:{x:Number(this.cameraTarget.x.toFixed(2)),y:Number(this.cameraTarget.y.toFixed(2)),z:Number(this.cameraTarget.z.toFixed(2))},inspectionCamera:this.inspectionActive?{target:{x:Number(this.inspectionControls.target.x.toFixed(2)),y:Number(this.inspectionControls.target.y.toFixed(2)),z:Number(this.inspectionControls.target.z.toFixed(2))},distanceM:Number(this.camera.position.distanceTo(this.inspectionControls.target).toFixed(2)),azimuthRad:Number(this.inspectionControls.getAzimuthalAngle().toFixed(3)),polarRad:Number(this.inspectionControls.getPolarAngle().toFixed(3))}:null,skyParallax:{cameraYawRad:Number((this.sky.userData.cameraYaw??0).toFixed(3)),panoramaYawRad:Number((this.sky.userData.panoramaYaw??0).toFixed(3)),yawFollow:Gm,translationFollow:Km},shadowCoverage:{leadM:Number(this.shadowLeadM.toFixed(2)),widthM:this.sun.shadow.camera.right-this.sun.shadow.camera.left,heightM:this.sun.shadow.camera.top-this.sun.shadow.camera.bottom},rider:this.rider?{visible:this.rider.root.visible,x:Number(this.rider.root.position.x.toFixed(2)),y:Number(this.rider.root.position.y.toFixed(2)),z:Number(this.rider.root.position.z.toFixed(2)),surfaceBankRad:Number((this.rider.root.userData.surfaceBank??0).toFixed(4)),wheelContactErrorM:Number((this.rider.root.userData.wheelContactError??0).toFixed(4)),effectivePoseSteer:Number(this.riderPoseSteer.toFixed(3)),screenX:Number(((e.x+1)*.5*innerWidth).toFixed(1)),poseYaw:Number((t?.rotation.y??0).toFixed(3)),posePitch:Number((t?.rotation.x??0).toFixed(3)),boardPitch:Number(((t?.rotation.x??0)+(n?.rotation.x??0)).toFixed(3)),boardAxisScreen:r&&i?{dx:Number(((i.x-r.x)*innerWidth*.5).toFixed(1)),dy:Number(((i.y-r.y)*innerHeight*-.5).toFixed(1))}:null}:null,zone:this.zone,villageArrived:this.villageArrived,presentation:this.presentation,viewport:`${innerWidth}x${innerHeight}`,dpr:this.renderer.getPixelRatio(),quality:this.quality,score:this.score,coinsCollected:this.coinsCollected,walletCoins:this.playerProgress.coins,conversationNpcId:this.conversationNpcId,quests:uf.map(e=>({id:e.id,npcId:e.npcId,title:e.title,itemName:e.itemName,route:e.route,reward:e.reward,status:ff(this.playerProgress,e),collected:this.playerProgress.quests[e.id]?.collected.length??0,required:e.required})),questPickups:this.world?.questPickups.filter(e=>e.routeId===this.routeId).map(e=>({questId:e.questId,index:e.index,distance:e.distance,lateral:e.lateral,active:e.active,visible:e.root.visible,position:{x:e.root.position.x,y:e.root.position.y,z:e.root.position.z}}))??[],obstacleHits:this.obstacleHits,obstacleImpactCooldown:Number(this.obstacleImpactCooldown.toFixed(3)),crash:{elapsedSeconds:Number(this.crashElapsed.toFixed(3)),side:this.crashSide,boardGapM:Number(this.crashBoardGap.toFixed(3)),slideSpeedMps:Number(this.crashSlideSpeed.toFixed(3)),remountRequested:this.crashRemountRequested},jump:{active:this.jumpActive,elapsedSeconds:Number(this.jumpElapsed.toFixed(3)),progress:Number((this.jumpElapsed/Vm).toFixed(3)),heightM:Number(this.jumpHeight.toFixed(3)),requiredClearanceM:Um,obstaclesCleared:this.obstaclesCleared},mobileRuntime:this.mobileRuntime,antialias:!this.mobileRuntime,environmentLighting:!!this.scene.environment,shaderWarmup:this.mobileRuntime?`deferred`:`eager`,cameraMode:this.roadPlanView?`top-down`:`follow`,roadPlanView:this.roadPlanView,roadSectionView:this.roadSectionView,roadProfile:this.world?this.world.route.roadProfileAt(this.distance):null,roadwayClearance:this.world?.outdoor.userData.roadwayClearance??null,villageRoadSurfaces:this.world?.outdoor.userData.villageRoadSurfaces??null,villageCarContact:this.world?.outdoor.userData.villageCarContact??null,villageGroundSurface:this.world?.outdoor.userData.villageGroundSurface??null,villageActivities:this.world?.outdoor.userData.villageActivities??null,villageBuildings:this.world?.outdoor.userData.villageBuildings??null,townCollision:this.world?.outdoor.userData.townCollision??null,townStream:this.world?.outdoor.userData.townStream??null,vegetationGrounding:this.world?.outdoor.userData.vegetationGrounding??null,treePlacement:this.world?.outdoor.userData.treePlacement??null,roadsideProps:this.world?.outdoor.userData.roadsideProps??null,blossomDynamics:this.world?.outdoor.userData.blossomDynamics??null,coinCollection:this.world?.outdoor.userData.coinCollection??null,roadObstacles:this.world?.outdoor.userData.roadObstacles??null,routeRun:this.world?.outdoor.userData.routeRun??null,bridgeWalkSurface:this.world?.outdoor.userData.bridgeWalkSurface??null,roadEngineering:this.world?.outdoor.userData.roadEngineering??null,terrainOverhangProtection:this.world?.outdoor.userData.terrainOverhangProtection??null,guardrailEngineering:this.world?.outdoor.userData.guardrailEngineering??null,keepsakes:this.keepsakes.map(e=>e.id),arrivalSequence:{slideActive:this.arrivalSlideActive,slideDirection:this.arrivalSlideDirection,stopHoldSeconds:Number(this.arrivalStopTimer.toFixed(3)),idleInVillage:this.villageArrived&&this.state===`walking`&&this.speed<=.12},input:{steer:Number(this.input.steer.toFixed(2)),cameraSteer:Number(this.cameraSteer.toFixed(3)),pushing:this.pushing,sliding:this.sliding}}}setEvidenceScene(e){if(!this.world)return!1;this.setInspection(!1,!1),this.setOverview(!1);let t=this.world.route;this.input.cancel(),this.roadPlanView=e.startsWith(`road-plan-`),this.roadSectionView=e===`road-section`||e===`guardrail-section`,this.arrivalSlideActive=!1,this.arrivalStopTimer=0,this.sliding=e===`slide-brake`,this.jumpActive=!1,this.jumpElapsed=0,this.jumpHeight=0,this.obstaclesCleared=0,this.exitCharge=0,[`downhill-vista`,`curve-at-speed`,`slide-brake`,`offroad-dismount`,`walk-remount`,`road-obstacle`,`road-obstacle-rock`,`road-obstacle-hit`,`road-obstacle-run`,`road-obstacle-clear`,`village-arrival`,`discoveries-journal`].includes(e)&&(this.villageArrived=!1);let n=this.world.outdoor.userData.roadObstacles?.placements??[],r=n[0],i=n.find(e=>e.kind===`rock`),a=this.world.outdoor.userData.roadObstacles?.consecutiveRuns?.[0]?.id,o=a?n.filter(e=>e.runId===a):[],s=this.world.outdoor.userData.coinCollection?.rowPlacements?.[0]??null,c={"downhill-vista":()=>{this.state=`riding`,this.distance=t.length*.18,this.speed=9,this.lateral=0},"curve-at-speed":()=>{this.state=`riding`,this.distance=t.length*.42,this.speed=11.5,this.lateral=0},"roadside-botany":()=>{this.state=`riding`,this.distance=Math.max(0,t.length*.095-12),this.speed=0,this.lateral=0},"roadside-interest":()=>{this.state=`riding`,this.distance=Math.max(0,t.length*.056-20),this.speed=0,this.lateral=0},"roadside-hokora":()=>{this.state=`riding`,this.distance=Math.max(0,t.length*.233-25),this.speed=0,this.lateral=0},"coin-row":()=>{this.state=`riding`,this.distance=Math.max(0,(s?.distanceM??t.length*.04)-8),this.speed=4.2,this.lateral=s?.lateralM??0,this.lateralVelocity=0},"slide-brake":()=>{this.state=`riding`,this.distance=t.length*.52,this.speed=13,this.lateral=0,this.input.steer=.62},"offroad-dismount":()=>{this.state=`riding`,this.distance=t.length*.36,this.speed=8,this.lateral=t.roadProfileAt(this.distance).rightWidth*.58},"walk-remount":()=>{this.state=`walking`,this.distance=t.length*.38;let e=t.sampleAt(this.distance),n=t.roadProfileAt(this.distance).rightWidth;this.worldPosition.copy(e.position).addScaledVector(e.right,n+1.8),this.speed=0,this.lateral=n+1.8,this.villageArrived=!1},"road-obstacle":()=>{r&&(this.state=`riding`,this.distance=Math.max(0,r.distanceM-8),this.speed=0,this.lateral=r.lateralM>0?-.45:.45,this.lateralVelocity=0,this.obstacleImpactCooldown=0,this.obstacleHits=0)},"road-obstacle-hit":()=>{r&&(this.state=`riding`,this.distance=Math.max(0,r.distanceM-5),this.speed=6,this.lateral=r.lateralM,this.lateralVelocity=0,this.obstacleImpactCooldown=0,this.obstacleHits=0)},"road-obstacle-run":()=>{let e=o[0];e&&(this.state=`riding`,this.distance=Math.max(0,e.distanceM-5),this.speed=6,this.lateral=e.lateralM,this.lateralVelocity=0,this.obstacleImpactCooldown=0,this.obstacleHits=0)},"road-obstacle-rock":()=>{i&&(this.state=`riding`,this.distance=Math.max(0,i.distanceM-8),this.speed=0,this.lateral=i.lateralM>0?-.45:.45,this.lateralVelocity=0,this.obstacleImpactCooldown=0,this.obstacleHits=0)},"road-obstacle-clear":()=>{if(!r)return;this.state=`riding`,this.distance=Math.max(0,r.distanceM-12),this.speed=4.2;let e=t.roadProfileAt(r.distanceM);this.lateral=r.lateralM>0?-e.leftWidth*.58:e.rightWidth*.58,this.lateralVelocity=0,this.obstacleImpactCooldown=0,this.obstacleHits=0},"village-arrival":()=>{this.state=`riding`,this.distance=t.length-20,this.speed=7,this.lateral=0},"populated-street":()=>{this.villageArrived=!1,this.arriveVillage(),this.worldPosition.set(Af.x,.11,Af.z),this.heading=Af.heading},"village-street":()=>{this.villageArrived=!1,this.arriveVillage(),this.worldPosition.set(2,.11,1057),this.heading=0},"village-side-lane":()=>{this.villageArrived=!1,this.arriveVillage(),this.worldPosition.set(-8,.11,1063),this.heading=-Math.PI/2},"npc-west-bench":()=>{this.villageArrived=!1,this.arriveVillage(),this.worldPosition.set(-11.8,.04,1034),this.heading=-Math.PI/2},"npc-work-yard":()=>{this.villageArrived=!1,this.arriveVillage(),this.worldPosition.set(-10,.11,1064.5),this.heading=0},"car-collision":()=>{this.villageArrived=!1,this.arriveVillage(),this.worldPosition.set(34.8,.04,1068),this.heading=0},"bridge-rail":()=>{this.villageArrived=!1,this.arriveVillage(),this.worldPosition.set(1.7,.11,1001.5),this.heading=0},"bridge-center":()=>{this.villageArrived=!1,this.arriveVillage(),this.worldPosition.set(0,.11,1000.5),this.heading=0},"cat-encounter":()=>{this.villageArrived=!1,this.arriveVillage(),this.worldPosition.set(-9.5,.04,1031),this.heading=-Math.PI/2},"dog-encounter":()=>{this.villageArrived=!1,this.arriveVillage(),this.worldPosition.set(18,.04,1087.2),this.heading=0},"tea-house":()=>{this.villageArrived=!1,this.arriveVillage(),this.worldPosition.copy(this.world.hotspots.find(e=>e.id===`tea-house`).position),this.heading=-Math.PI/2},shop:()=>{this.villageArrived=!1,this.arriveVillage(),this.worldPosition.copy(this.world.hotspots.find(e=>e.id===`shop`).position),this.heading=Math.PI/2},"discoveries-journal":()=>{this.state=`riding`,this.distance=t.length*(t.id===`sakura-ridge`?.31:t.id===`hairpin-pass`?.47:.53),this.speed=4,this.lateral=0,this.lateralVelocity=0},"road-plan-upper":()=>{this.state=`riding`,this.distance=t.length*.2,this.speed=3.35,this.lateral=0},"road-plan-middle":()=>{this.state=`riding`,this.distance=t.length*.5,this.speed=3.35,this.lateral=0},"road-plan-lower":()=>{this.state=`riding`,this.distance=t.length*.78,this.speed=3.35,this.lateral=0},"road-section":()=>{this.state=`riding`,this.distance=t.length*.2,this.speed=3.35,this.lateral=0},"guardrail-section":()=>{this.state=`riding`,this.distance=t.length*.42,this.speed=3.35,this.lateral=0}}[e];if(!c)return!1;c(),this.syncCameraToggle(),this.input.slideHeld=this.sliding,this.toastTimer=0,this.toast.classList.add(`hidden`);let l=t.sampleAt(this.distance);return this.state===`riding`&&(this.worldPosition.copy(l.position).addScaledVector(l.right,this.lateral),this.heading=Math.atan2(l.tangent.x,l.tangent.z)),this.elapsed+=.18,this.updateRiderAndCamera(2),this.updateActionPrompt(),this.updateHUD(),this.world.updateAmbient(this.elapsed,this.worldPosition,this.distance,this.speed),this.renderer.render(this.scene,this.camera),!0}},ch=`0.1.1`,lh=e=>{let t=document.querySelector(e);if(!t)throw Error(`Missing required element ${e}`);return t},uh={"sakura-ridge":{label:`Sakura Ridge`,detail:`OPEN SKY · BLOSSOM COUNTRY`,color:`#dd788d`},"hairpin-pass":{label:`Hairpin Pass`,detail:`WIDE TURNS · CENTRAL PASS`,color:`#d6944a`},"cedar-stream":{label:`Cedar Stream`,detail:`FAST LINE · FOREST WATER`,color:`#43877b`}},dh=class{canvas=lh(`#menuControls`);context=this.canvas.getContext(`2d`);menu=lh(`#menu`);panelTexture=new Image;actions=[];hitRegions=[];hovered=null;selectedIndex=0;pixelRatio=1;constructor(){document.querySelectorAll(`[data-route]`).forEach(e=>{let t=e.dataset.route??``,n=uh[t];n&&this.actions.push({id:t,...n,target:e})}),this.actions.push({id:`town`,label:`Hanasato Village`,detail:`SKIP TO TOWN`,color:`#6d8068`,target:lh(`#startTown`)}),this.actions.push({id:`settings`,label:`Settings`,detail:`COMFORT & SOUND`,color:`#647a74`,target:lh(`#menuSettings`)}),this.actions.push({id:`resume`,label:`Resume journey`,detail:`RETURN TO THE ROAD`,color:`#647a74`,target:lh(`#resume`)}),this.panelTexture.src=`/sakura-slide/assets/images/menu_panel_clean_asset_v2.png`,this.panelTexture.addEventListener(`load`,this.draw),this.panelTexture.addEventListener(`error`,this.draw),this.canvas.tabIndex=0,this.canvas.addEventListener(`pointermove`,this.onPointerMove),this.canvas.addEventListener(`pointerleave`,this.onPointerLeave),this.canvas.addEventListener(`pointerdown`,this.onPointerDown),this.canvas.addEventListener(`keydown`,this.onKeyDown),window.addEventListener(`resize`,this.resize),new MutationObserver(this.sync).observe(this.menu,{attributes:!0,subtree:!0,attributeFilter:[`class`,`disabled`,`data-loading`]}),this.resize(),this.sync()}visibleActions(){return this.actions.filter(e=>e.id!==`resume`||!e.target.classList.contains(`hidden`))}sync=()=>{let e=!this.menu.classList.contains(`hidden`);this.canvas.classList.toggle(`hidden`,!e),e&&(this.selectedIndex=Math.min(this.selectedIndex,this.visibleActions().length-1),this.draw())};resize=()=>{this.pixelRatio=Math.min(2,window.devicePixelRatio||1),this.canvas.width=Math.round(window.innerWidth*this.pixelRatio),this.canvas.height=Math.round(window.innerHeight*this.pixelRatio),this.canvas.style.width=`${window.innerWidth}px`,this.canvas.style.height=`${window.innerHeight}px`,this.context.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0),this.draw()};draw=()=>{let e=this.context,t=window.innerWidth,n=window.innerHeight;if(e.clearRect(0,0,t,n),this.canvas.classList.contains(`hidden`))return;let r=t<720,i=Math.min(r?t-24:438,t-32),a=r?56:60,o=r?6:7,s=!lh(`#resume`).classList.contains(`hidden`),c=r?396:416,l=r?(t-i)/2:Math.max(24,t*.04),u=r?Math.max(12,n-c-16):Math.max(24,(n-c)/2),d=r?20:24;e.save(),this.panelTexture.complete&&this.panelTexture.naturalWidth>0&&this.drawNineSlice(this.panelTexture,l,u,i,c,68,34,{x:0,y:117,width:512,height:278}),e.restore();let f=l+d,p=i-d*2;e.fillStyle=`#6b8178`,e.font=`700 10px ui-rounded, Avenir Next, system-ui, sans-serif`,e.letterSpacing=`2px`,e.fillText(`A QUIET DOWNHILL JOURNEY`,f,u+27),e.letterSpacing=`0px`,e.fillStyle=`#355b50`,e.font=`${r?30:34}px Iowan Old Style, Palatino Linotype, Georgia, serif`,e.fillText(`Sakura Slide`,f,u+59),e.fillStyle=`#60756e`,e.font=`13px ui-rounded, Avenir Next, system-ui, sans-serif`,e.fillText(`Choose a road. All lead home.`,f,u+79),this.hitRegions=[];let m=this.actions.slice(0,3),h=u+94;m.forEach((e,t)=>{this.drawRouteControl(e,f,h,p,a,t),h+=a+o}),this.drawUtilityControl(this.actions[3],f,h,p,42,`⌂`),h+=42+o;let g=s?[this.actions[5],this.actions[4]]:[this.actions[4]],_=s?(p-8)/2:Math.min(146,p);g.forEach((e,t)=>{this.drawFooterControl(e,f+t*(_+8),h,_,36)}),e.fillStyle=this.menu.dataset.loading===`true`?`#a15e51`:`#778b83`,e.font=`10px ui-rounded, Avenir Next, system-ui, sans-serif`;let v=this.menu.dataset.loading===`true`?`Preparing mountain meshes…`:`↑↓ choose · Enter ride`;e.fillText(v,f,u+c-13),e.save(),e.font=`12px ui-rounded, Avenir Next, system-ui, sans-serif`;let y=`v${ch}`,b=e.measureText(y).width;e.fillStyle=`rgba(32, 57, 49, .72)`,this.roundRect(t-b-36,n-42,b+20,26,8),e.fill(),e.fillStyle=`#fff9e8`,e.textAlign=`right`,e.fillText(y,t-26,n-25),e.restore()};drawRouteControl(e,t,n,r,i,a){let o=this.context,s=this.hovered===e.id||this.selectedIndex===a,c=e.target.disabled;o.save(),o.globalAlpha=c?.5:1,o.fillStyle=s?`rgba(255, 255, 249, .92)`:`rgba(255, 255, 249, .58)`,o.strokeStyle=s?e.color:`rgba(80, 111, 97, .2)`,o.lineWidth=s?2:1,this.roundRect(t,n,r,i,16),o.fill(),o.stroke();let l=t+27,u=n+i/2;o.fillStyle=e.color,o.beginPath(),o.arc(l,u,17,0,Math.PI*2),o.fill(),this.drawRouteGlyph(a,l,u),o.fillStyle=`#27443e`,o.font=`700 ${i<62?17:19}px Iowan Old Style, Palatino Linotype, Georgia, serif`,o.fillText(e.label,t+55,n+i/2-2),o.fillStyle=e.color,o.font=`700 8px ui-rounded, Avenir Next, system-ui, sans-serif`,o.letterSpacing=`1.15px`,o.fillText(e.detail,t+55,n+i/2+14),o.letterSpacing=`0px`,o.fillStyle=s?e.color:`#8a9b94`,o.font=`18px ui-rounded, system-ui, sans-serif`,o.fillText(`›`,t+r-24,n+i/2+6),o.restore(),this.hitRegions.push({action:e,x:t,y:n,width:r,height:i})}drawRouteGlyph(e,t,n){let r=this.context;if(r.save(),r.strokeStyle=`rgba(255, 250, 232, .96)`,r.fillStyle=`rgba(255, 250, 232, .96)`,r.lineWidth=2,r.lineCap=`round`,r.lineJoin=`round`,e===0){for(let e=0;e<5;e++){let i=-Math.PI/2+e*Math.PI*.4;r.beginPath(),r.ellipse(t+Math.cos(i)*6,n+Math.sin(i)*6,3.5,7,i,0,Math.PI*2),r.fill()}r.fillStyle=`#dd788d`,r.beginPath(),r.arc(t,n,2.2,0,Math.PI*2),r.fill()}else e===1?(r.beginPath(),r.moveTo(t-9,n-8),r.lineTo(t+7,n-8),r.lineTo(t+7,n),r.lineTo(t-7,n),r.lineTo(t-7,n+8),r.lineTo(t+9,n+8),r.stroke()):(r.beginPath(),r.moveTo(t-9,n-7),r.quadraticCurveTo(t-3,n-12,t+1,n-5),r.quadraticCurveTo(t+5,n+2,t+10,n-3),r.moveTo(t-10,n+5),r.quadraticCurveTo(t-3,n,t+1,n+7),r.quadraticCurveTo(t+5,n+12,t+10,n+6),r.stroke());r.restore()}drawUtilityControl(e,t,n,r,i,a){let o=this.context,s=this.hovered===e.id||this.selectedIndex===3;o.fillStyle=s?`rgba(86, 119, 91, .17)`:`rgba(255, 255, 249, .42)`,o.strokeStyle=s?e.color:`rgba(80, 111, 97, .2)`,o.lineWidth=s?2:1,this.roundRect(t,n,r,i,14),o.fill(),o.stroke(),o.fillStyle=e.color,o.font=`17px ui-rounded, system-ui, sans-serif`,o.fillText(a,t+15,n+i/2+6),o.fillStyle=`#304c45`,o.font=`700 14px ui-rounded, Avenir Next, system-ui, sans-serif`,o.fillText(e.label,t+39,n+i/2+1),o.fillStyle=`#758780`,o.font=`700 8px ui-rounded, Avenir Next, system-ui, sans-serif`,o.letterSpacing=`1px`,o.fillText(e.detail,t+39,n+i/2+13),o.letterSpacing=`0px`,this.hitRegions.push({action:e,x:t,y:n,width:r,height:i})}drawFooterControl(e,t,n,r,i){let a=this.context,o=this.visibleActions().findIndex(t=>t.id===e.id),s=this.hovered===e.id||this.selectedIndex===o;a.fillStyle=s?`#557761`:`rgba(51, 78, 69, .1)`,this.roundRect(t,n,r,i,13),a.fill(),a.fillStyle=s?`#fff9e8`:`#536b63`,a.font=`700 11px ui-rounded, Avenir Next, system-ui, sans-serif`,a.textAlign=`center`,a.fillText(e.label,t+r/2,n+i/2+4),a.textAlign=`left`,this.hitRegions.push({action:e,x:t,y:n,width:r,height:i})}drawNineSlice(e,t,n,r,i,a,o,s={x:0,y:0,width:e.naturalWidth,height:e.naturalHeight}){let c=this.context,l=e=>Math.round(e*this.pixelRatio)/this.pixelRatio,u=l(t),d=l(t+o),f=l(t+r-o),p=l(t+r),m=l(n),h=l(n+o),g=l(n+i-o),_=l(n+i),v=s.width-a*2,y=s.height-a*2,b=[[s.x,a,u,d-u],[s.x+a,v,d,f-d],[s.x+s.width-a,a,f,p-f]],x=[[s.y,a,m,h-m],[s.y+a,y,h,g-h],[s.y+s.height-a,a,g,_-g]];for(let[t,n,r,i]of b)for(let[a,o,s,l]of x)c.drawImage(e,t,a,n,o,r,s,i,l)}roundRect(e,t,n,r,i){this.context.beginPath(),this.context.roundRect(e,t,n,r,i)}pointFor(e){let t=this.canvas.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}onPointerMove=e=>{let t=this.pointFor(e),n=this.hitRegions.find(e=>t.x>=e.x&&t.x<=e.x+e.width&&t.y>=e.y&&t.y<=e.y+e.height),r=n?.action.id??null;r!==this.hovered&&(this.hovered=r,this.canvas.style.cursor=n&&!n.action.target.disabled?`pointer`:`default`,this.draw())};onPointerLeave=()=>{this.hovered&&(this.hovered=null,this.canvas.style.cursor=`default`,this.draw())};onPointerDown=e=>{if(e.button!==0)return;let t=this.pointFor(e),n=this.hitRegions.find(e=>t.x>=e.x&&t.x<=e.x+e.width&&t.y>=e.y&&t.y<=e.y+e.height);!n||n.action.target.disabled||(e.preventDefault(),this.selectedIndex=this.visibleActions().findIndex(e=>e.id===n.action.id),n.action.target.click())};onKeyDown=e=>{let t=this.visibleActions().filter(e=>!e.target.disabled);t.length&&(e.key===`ArrowDown`||e.key===`ArrowRight`?(e.preventDefault(),this.selectedIndex=(this.selectedIndex+1)%t.length,this.draw()):e.key===`ArrowUp`||e.key===`ArrowLeft`?(e.preventDefault(),this.selectedIndex=(this.selectedIndex-1+t.length)%t.length,this.draw()):(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),t[this.selectedIndex]?.target.click()))}};new sh,new dh;