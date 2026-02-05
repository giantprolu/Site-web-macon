import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_BMbQ90zO.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B-Hh9EHy.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/nathn/Desktop/Projet/Macon/","cacheDir":"file:///C:/Users/nathn/Desktop/Projet/Macon/node_modules/.astro/","outDir":"file:///C:/Users/nathn/Desktop/Projet/Macon/dist/","srcDir":"file:///C:/Users/nathn/Desktop/Projet/Macon/src/","publicDir":"file:///C:/Users/nathn/Desktop/Projet/Macon/public/","buildClientDir":"file:///C:/Users/nathn/Desktop/Projet/Macon/dist/client/","buildServerDir":"file:///C:/Users/nathn/Desktop/Projet/Macon/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"mentions-legales/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/mentions-legales","isIndex":false,"type":"page","pattern":"^\\/mentions-legales\\/?$","segments":[[{"content":"mentions-legales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mentions-legales.astro","pathname":"/mentions-legales","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://btp-sand.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/nathn/Desktop/Projet/Macon/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/nathn/Desktop/Projet/Macon/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/nathn/Desktop/Projet/Macon/src/pages/mentions-legales.astro",{"propagation":"none","containsHead":true}],["C:/Users/nathn/Desktop/Projet/Macon/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/mentions-legales@_@astro":"pages/mentions-legales.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_t30AiCPY.mjs","C:/Users/nathn/Desktop/Projet/Macon/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_PkQl9Cc4.mjs","C:/Users/nathn/Desktop/Projet/Macon/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.NFJdFCve.js","C:/Users/nathn/Desktop/Projet/Macon/src/components/Map.astro?astro&type=script&index=0&lang.ts":"_astro/Map.astro_astro_type_script_index_0_lang.BKHWyBGA.js","C:/Users/nathn/Desktop/Projet/Macon/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DLoEhdrI.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/nathn/Desktop/Projet/Macon/src/pages/contact.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"contact-form\"),e=s?.querySelector(\".form__submit\"),r=document.getElementById(\"form-status\"),a=e?.textContent||\"Envoyer ma demande\";function i(n,t){r&&(r.innerHTML=`\n      <div class=\"form__message form__message--${t?\"success\":\"error\"}\" role=\"alert\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n          ${t?'<path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"/><polyline points=\"22 4 12 14.01 9 11.01\"/>':'<circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"/><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"/>'}\n        </svg>\n        <span>${n}</span>\n      </div>\n    `,r.focus(),t&&setTimeout(()=>{r.innerHTML=\"\"},1e4))}function c(){r&&(r.innerHTML='<p class=\"form__loading\">Envoi de votre demande en cours...</p>')}s?.addEventListener(\"submit\",async n=>{n.preventDefault(),e&&(e.disabled=!0,e.setAttribute(\"aria-busy\",\"true\"),e.innerHTML=`\n        <svg class=\"spinner\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n          <circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"32\" stroke-dashoffset=\"12\"/>\n        </svg>\n        Envoi en cours...\n      `),c();try{const t=new FormData(s),o=await(await fetch(\"/api/contact\",{method:\"POST\",body:t})).json();o.success?(i(o.message,!0),s.reset()):i(o.message||\"Une erreur est survenue. Veuillez réessayer.\",!1)}catch(t){console.error(\"Erreur:\",t),i(\"Impossible de contacter le serveur. Vérifiez votre connexion internet.\",!1)}finally{e&&(e.disabled=!1,e.removeAttribute(\"aria-busy\"),e.textContent=a)}});"],["C:/Users/nathn/Desktop/Projet/Macon/src/components/Map.astro?astro&type=script&index=0&lang.ts","async function c(){const e=document.getElementById(\"map\");if(!e)return;const o=parseFloat(e.dataset.lat||\"46.1847\"),t=parseFloat(e.dataset.lng||\"-0.4833\"),d=parseInt(e.dataset.zoom||\"10\",10),p=parseInt(e.dataset.radius||\"50000\",10),m=e.dataset.title||\"EIRL REPAIN\",h=e.dataset.address||\"\";try{const r=document.createElement(\"link\");r.rel=\"stylesheet\",r.href=\"https://unpkg.com/leaflet@1.9.4/dist/leaflet.css\",r.integrity=\"sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=\",r.crossOrigin=\"\",document.head.appendChild(r);const n=await y();await new Promise(f=>setTimeout(f,100));const s=e.querySelector(\".map__loading\");s&&s.remove();const a=n.map(\"map\",{center:[o,t],zoom:d,scrollWheelZoom:!1});a.on(\"click\",()=>{a.scrollWheelZoom.enable()}),a.on(\"mouseout\",()=>{a.scrollWheelZoom.disable()}),n.tileLayer(\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\",{attribution:'&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>',maxZoom:18}).addTo(a);const u=n.divIcon({className:\"custom-marker\",html:`\n          <svg width=\"40\" height=\"48\" viewBox=\"0 0 40 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M20 0C8.954 0 0 8.954 0 20c0 14 20 28 20 28s20-14 20-28C40 8.954 31.046 0 20 0z\" fill=\"#000000\"/>\n            <path d=\"M20 4C11.163 4 4 11.163 4 20c0 11 16 22 16 22s16-11 16-22c0-8.837-7.163-16-16-16z\" fill=\"#FFE600\"/>\n            <circle cx=\"20\" cy=\"18\" r=\"6\" fill=\"#000000\"/>\n          </svg>\n        `,iconSize:[40,48],iconAnchor:[20,48],popupAnchor:[0,-48]}),g=n.marker([o,t],{icon:u}).addTo(a),w=`\n        <div class=\"custom-popup\">\n          <strong>${m}</strong>\n          <span>${h}</span>\n          <a href=\"https://www.google.com/maps/dir/?api=1&destination=${o},${t}\" target=\"_blank\" rel=\"noopener\">\n            Itinéraire\n          </a>\n        </div>\n      `;g.bindPopup(w),n.circle([o,t],{radius:p,color:\"#FFE600\",fillColor:\"#FFE600\",fillOpacity:.1,weight:2,dashArray:\"8, 8\"}).addTo(a);const i=document.createElement(\"style\");i.textContent=`\n        .custom-marker {\n          background: transparent;\n          border: none;\n        }\n        .custom-marker svg {\n          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));\n        }\n      `,document.head.appendChild(i)}catch(r){console.error(\"Erreur lors du chargement de la carte:\",r);const n=e.querySelector(\".map__loading\");n&&(n.innerHTML=`\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#FFE600\" stroke-width=\"1.5\">\n            <path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"/>\n            <circle cx=\"12\" cy=\"10\" r=\"3\"/>\n          </svg>\n          <p>530 Route nationale, 79360 Beauvoir sur Niort</p>\n        `)}}function y(){return new Promise((e,o)=>{if(window.L){e(window.L);return}const t=document.createElement(\"script\");t.src=\"https://unpkg.com/leaflet@1.9.4/dist/leaflet.js\",t.integrity=\"sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=\",t.crossOrigin=\"\",t.onload=()=>e(window.L),t.onerror=o,document.head.appendChild(t)})}const l=document.getElementById(\"map\");if(l&&\"IntersectionObserver\"in window){const e=new IntersectionObserver(o=>{o.forEach(t=>{t.isIntersecting&&(c(),e.disconnect())})},{rootMargin:\"200px\"});e.observe(l)}else c();"],["C:/Users/nathn/Desktop/Projet/Macon/src/components/Header.astro?astro&type=script&index=0&lang.ts","const n=document.querySelector(\".header__burger\"),t=document.querySelector(\".mobile-menu\");document.querySelector(\".header\");let i=[],l=null,s=null;function o(){t&&(i=Array.from(t.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex=\"-1\"])')),l=i[0]||null,s=i[i.length-1]||null)}function u(){n?.setAttribute(\"aria-expanded\",\"true\"),n?.setAttribute(\"aria-label\",\"Fermer le menu\"),t?.classList.add(\"is-open\"),t?.setAttribute(\"aria-hidden\",\"false\"),document.body.style.overflow=\"hidden\",o(),setTimeout(()=>l?.focus(),100)}function r(){n?.setAttribute(\"aria-expanded\",\"false\"),n?.setAttribute(\"aria-label\",\"Ouvrir le menu\"),t?.classList.remove(\"is-open\"),t?.setAttribute(\"aria-hidden\",\"true\"),document.body.style.overflow=\"\",n?.focus()}n?.addEventListener(\"click\",()=>{n.getAttribute(\"aria-expanded\")===\"true\"?r():u()});t?.addEventListener(\"keydown\",e=>{e.key===\"Tab\"&&(o(),e.shiftKey?document.activeElement===l&&(e.preventDefault(),s?.focus()):document.activeElement===s&&(e.preventDefault(),l?.focus()))});document.addEventListener(\"keydown\",e=>{e.key===\"Escape\"&&t?.classList.contains(\"is-open\")&&r()});document.querySelectorAll(\".mobile-menu__link, .mobile-menu__cta\").forEach(e=>{e.addEventListener(\"click\",r)});window.addEventListener(\"resize\",()=>{window.innerWidth>768&&t?.classList.contains(\"is-open\")&&r()});"]],"assets":["/_astro/contact.BR9dabbF.css","/_astro/contact.SWHqvUZN.css","/_astro/index.BxCDEDYl.css","/apple-touch-icon.svg","/favicon.ico","/favicon.svg","/og-image.svg","/robots.txt","/contact/index.html","/mentions-legales/index.html","/services/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"tS3ncF3z5NUYbh3MRZsSlLW13IkCDDttnGDmczlCvGs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
