// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7Aums":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
// Register a service worker
console.log("[App] Register a Service worker.");
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(require("abe7e16ab117bf3"));
    console.log("[App] Succesfully registered a service worker.");
} else console.error("[App] The app will not work offline: the browser does not support Service workers.");
window.addEventListener("DOMContentLoaded", (event)=>{
    console.log("[App] DOM fully loaded and parsed, starting dynamic content.");
    const SCHEMA_VERSION = 1;
    const list = document.querySelector("#list");
    const form = document.querySelector("form");
    const dateInput = document.querySelector("#datePicker");
    const ammountInput = document.querySelector("#ammount");
    const commentInput = document.querySelector("#comment");
    const imageInput = document.querySelector("#image");
    const accountInput = document.querySelector("#account");
    const categoryInput = document.querySelector("#category");
    const submitBtn = document.querySelector("#submit");
    // Create an instance of a db object for us to store the open database in
    let db;
    // Open our database; it is created if it doesn't already exist
    // (see the upgradeneeded handler below)
    const openRequest = window.indexedDB.open("expenses_db", SCHEMA_VERSION);
    // Handle errors
    // `error` handle signifies that the database didn't open successfully
    openRequest.addEventListener("error", ()=>{
        console.error("Database failed to open");
        alert("Database could not open for some reason!");
    });
    // `success` handler signifies that the database opened successfully
    openRequest.addEventListener("success", ()=>{
        console.log("[App] Database opened successfully.");
        // Store the opened database object in the db variable. This is used a lot below
        db = openRequest.result;
        // Run the displayData() function to display the notes already in the IDB
        displayData();
    });
    // `upgradeneeded` handler signifies that the requested database does not exists yet
    // Set up the database tables if this has not already been done
    openRequest.addEventListener("upgradeneeded", (e)=>{
        // Grab a reference to the opened database
        db = e.target.result;
        // Create an objectStore to store our notes in (basically like a single table)
        // including a auto-incrementing key
        const objectStore = db.createObjectStore("expenses_object_store", {
            keyPath: "id",
            autoIncrement: true
        });
        // Schema definition
        // Define what data items the objectStore will contain
        objectStore.createIndex("date", "date", {
            unique: false
        });
        objectStore.createIndex("ammount", "ammount", {
            unique: false
        });
        objectStore.createIndex("comment", "comment", {
            unique: false
        });
        objectStore.createIndex("image", "image", {
            unique: false
        });
        objectStore.createIndex("account", "account", {
            unique: false
        });
        objectStore.createIndex("category", "category", {
            unique: false
        });
        console.log("[App] Database setup complete.");
    });
    // Add entry
    // Create a submit event handler so that when the form is submitted the addData() function is run
    form.addEventListener("submit", addData);
    function addData(e) {
        console.log("[App] Add new entry to the database.");
        // prevent default - we don't want the form to submit in the conventional way
        e.preventDefault();
        // grab the values entered into the form fields and store them in an object ready for being inserted into the DB
        const newItem = {
            date: dateInput.value,
            ammount: ammountInput.value,
            comment: commentInput.value,
            image: imageInput.value,
            account: accountInput.value,
            category: categoryInput.value
        };
        // open a read/write db transaction, ready for adding the data
        const transaction = db.transaction([
            "expenses_object_store"
        ], "readwrite");
        // call an object store that's already been added to the database
        const objectStore = transaction.objectStore("expenses_object_store");
        // Make a request to add our newItem object to the object store
        const addRequest = objectStore.add(newItem);
        addRequest.addEventListener("success", ()=>{
            // Clear the form, ready for adding the next entry
            const reset_button = document.getElementById("reset");
            reset_button.click();
        });
        // Report on the success of the transaction completing, when everything is done
        transaction.addEventListener("complete", ()=>{
            console.log("[App] Added new entry to database.");
            // update the display of data to show the newly added item, by running displayData() again.
            displayData();
        });
        transaction.addEventListener("error", ()=>console.log("Transaction not opened due to error."));
    }
    // Display data in database
    function displayData() {
        console.log("[App] Display data in the database.");
        // Empty the contents of the list element
        // If you didn't do this, you'd get duplicates listed each time a new note is added
        while(list.firstChild)list.removeChild(list.firstChild);
        // Open our object store and then get a cursor - which iterates through all the
        // different data items in the store
        const objectStore = db.transaction("expenses_object_store").objectStore("expenses_object_store");
        objectStore.openCursor().addEventListener("success", (e)=>{
            // Get a reference to the cursor
            const cursor = e.target.result;
            // If there is still another data item to iterate through, keep running this code
            if (cursor) {
                // grab the values entered into the form fields and store them in an object ready for being inserted into the DB
                const entry = {
                    date: cursor.value.date,
                    ammount: cursor.value.ammount,
                    comment: cursor.value.comment,
                    image: cursor.value.image,
                    account: cursor.value.account,
                    category: cursor.value.category
                };
                // Create a list item, h3, and p to put each data item inside when displaying it
                // structure the HTML fragment, and append it inside the list
                const listItem = document.createElement("li");
                // Display structure of an entry 
                const heading = document.createElement("h2");
                const money = document.createElement("p");
                const details = document.createElement("details");
                const summary = document.createElement("summary");
                const comment = document.createElement("p");
                const image = document.createElement("p");
                const account = document.createElement("p");
                const category = document.createElement("p");
                // Put the data from the cursor inside the h3 and para
                const categoryEmoji = document.querySelector("option[value=" + entry.category + "]").textContent;
                heading.textContent = entry.date;
                money.textContent = entry.ammount;
                summary.textContent = entry.account.toString() + ", " + categoryEmoji;
                comment.textContent = entry.comment;
                image.textContent = entry.image;
                account.textContent = entry.account;
                category.textContent = categoryEmoji;
                details.appendChild(summary);
                details.appendChild(comment);
                details.appendChild(image);
                details.appendChild(account);
                details.appendChild(category);
                listItem.appendChild(heading);
                listItem.appendChild(money);
                listItem.appendChild(details);
                list.appendChild(listItem);
                // Store the ID of the data item inside an attribute on the listItem, so we know
                // which item it corresponds to. This will be useful later when we want to delete items
                listItem.setAttribute("data-entry-id", cursor.value.id);
                // Create a button and place it inside each listItem
                const deleteBtn = document.createElement("button");
                listItem.appendChild(deleteBtn);
                deleteBtn.textContent = "Delete";
                deleteBtn.setAttribute("class", "delete");
                // Create a button and place it inside each listItem
                const editBtn = document.createElement("button");
                listItem.appendChild(editBtn);
                editBtn.textContent = "Edit";
                // Set an event handler so that when the button is clicked, the deleteItem()
                // function is run
                deleteBtn.addEventListener("click", deleteEntry);
                editBtn.addEventListener("click", editEntry);
                // Iterate to the next item in the cursor
                cursor.continue();
            } else {
                // Again, if list item is empty, display a 'No notes stored' message
                if (!list.firstChild) {
                    const listItem1 = document.createElement("li");
                    listItem1.textContent = "No entries stored.";
                    list.appendChild(listItem1);
                }
                // if there are no more cursor items to iterate through, say so
                console.log("[App] All notes displayed.");
            }
        });
    }
    // Delete entry
    function deleteEntry(e) {
        // Retrieve the name of the task we want to delete. We need
        // to convert it to a number before trying to use it with IDB; IDB key
        // values are type-sensitive.
        const entryId = Number(e.target.parentNode.getAttribute("data-entry-id"));
        console.log(`[App] Delete entry ${entryId}.`);
        // open a database transaction and delete the task, finding it using the id we retrieved above
        const transaction = db.transaction([
            "expenses_object_store"
        ], "readwrite");
        const objectStore = transaction.objectStore("expenses_object_store");
        const deleteRequest = objectStore.delete(entryId);
        // report that the data item has been deleted
        transaction.addEventListener("complete", ()=>{
            // delete the parent of the button
            // which is the list item, so it is no longer displayed
            if (e.target.parentNode.parentNode) {
                e.target.parentNode.parentNode.removeChild(e.target.parentNode);
                console.log(`[App] Entry ${entryId} deleted.`);
            }
            // Again, if list item is empty, display a 'No notes stored' message
            if (!list.firstChild) {
                const listItem = document.createElement("li");
                listItem.textContent = "No entries stored.";
                list.appendChild(listItem);
            }
        });
    }
    // Delete entry
    function editEntry(e) {
        alert("WIP");
    }
    /////////////////////////////////////////////
    // Actionable buttons
    /////////////////////////////////////////////
    // Set date automatically
    function getDate() {
        console.log("[App] Set today.");
        const today = new Date();
        document.getElementById("datePicker").value = today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2);
        console.log("[App] Setted today.");
    }
    getDate();
    // Reset button
    const reset_button = document.getElementById("reset");
    reset_button.addEventListener("click", (event)=>{
        console.log("[App] Reset form.");
        getDate();
        document.getElementById("ammount").value = 0.00;
        document.getElementById("comment").value = "";
        document.getElementById("image").value = "";
        console.log("[App] Reseted form.");
    });
    // Download button
    const button = document.getElementById("download");
    button.addEventListener("click", (event)=>{
        console.log("[App] Download start.");
        // Function to download data to a file
        function download(data, filename, type) {
            var file = new Blob([
                data
            ], {
                type: type
            });
            var a = document.createElement("a"), url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
        // Retrieve content
        var content = [];
        // Open our object store and then get a cursor - which iterates through all the
        // different data items in the store
        const objectStore2 = db.transaction("expenses_object_store").objectStore("expenses_object_store");
        // Open our object store and then get a cursor - which iterates through all the
        // different data items in the store
        objectStore2.openCursor().addEventListener("success", (e)=>{
            // Get a reference to the cursor
            const cursor = e.target.result;
            // If there is still another data item to iterate through, keep running this code
            if (cursor) {
                const entry = {
                    date: cursor.value.date.toString(),
                    ammount: cursor.value.ammount.toString(),
                    comment: cursor.value.comment.toString(),
                    image: cursor.value.image.toString(),
                    account: cursor.value.account.toString(),
                    category: cursor.value.category.toString()
                };
                content.push(entry);
                // Iterate to the next item in the cursor
                cursor.continue();
            } else {
                console.log("[App] All data was collected.");
                // Define name
                const today = new Date();
                const filename = today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2) + "-database.json";
                download(JSON.stringify(content), filename, "application/json");
                console.log("[App] Downloaded data.");
            }
        });
    });
    // Clear button
    // Clears the database
    const clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", (event)=>{
        console.log("[App] Clear database.");
        const deleteButtons = document.querySelectorAll(".delete");
        deleteButtons.forEach((deleteButton)=>{
            deleteButton.click();
        });
        console.log("[App] Cleared database.");
        // Run the displayData() function to display the notes already in the IDB
        displayData();
    });
});

},{"abe7e16ab117bf3":"es18N"}],"es18N":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("lPpKD") + "service-worker.js" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["7Aums","bNKaB"], "bNKaB", "parcelRequire6a59")

//# sourceMappingURL=index.0641b553.js.map
