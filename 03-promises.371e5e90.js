!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("h6c0i"),l={formEl:document.querySelector("form"),inputDelayEl:document.getElementsByName("delay")[0],inputStepEl:document.getElementsByName("step")[0],inputAmountEl:document.getElementsByName("amount")[0],btnSubmitEL:document.querySelector("button")};function u(e,t){return new Promise((function(n,o){setInterval((function(){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}l.formEl.addEventListener("submit",(function(e){e.preventDefault();for(var t={delay:Number(l.inputDelayEl.value),step:Number(l.inputStepEl.value),amount:Number(l.inputAmountEl.value)},n=t.delay,o=0;o<t.amount;o++)n+=t.step,console.log(n),u(o+1,n-t.step).then((function(e){var t=e.position,n=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;i.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}));l.formEl.reset()}))}();
//# sourceMappingURL=03-promises.371e5e90.js.map