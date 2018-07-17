webpackJsonp([82764348170609],{577:function(a,e){a.exports="<h2 id=overview>Overview</h2> <p>The vertical navigation list contains list items, links, icons and text. Icons are optional, but recommended. Text must be included. The chevron is required for list items containing subnavigation. </p> <h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>aria-label</code></td> <td><code>&lt;nav&gt;</code></td> <td>Describes <code>&lt;nav&gt;</code> landmark.</td> </tr> <tr> <td><code>role=&quot;navigation&quot;</code></td> <td><code>&lt;nav&gt;</code></td> <td>Defines <code>&lt;nav&gt;</code> as a navigational.</td> </tr> <tr> <td><code>aria-current=&quot;page&quot;</code></td> <td><code>.pf-c-vertical-nav__link</code></td> <td>Defines link as current page. Do not expose <code>aria-current=&quot;false&quot;</code> or <code>aria-current</code> on noncurrent pages.</td> </tr> <tr> <td><code>aria-disabled</code></td> <td><code>.pf-c-vertical-nav__link</code></td> <td>Defines <code>&lt;a&gt;</code> elements as disabled, value is <code>true</code> when element is disabled.</td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-vertical-nav</code></td> <td><code>&lt;nav&gt;</code></td> <td>Initiates vertical navigation. Always use it with a list. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-vertical-nav__item</code></td> <td><code>&lt;li&gt;</code></td> <td>Initiates navigation items. Always use it with a list item. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-vertical-nav__link</code></td> <td><code>&lt;a&gt;</code></td> <td>Initiates link. Always use it with an <code>&lt;a&gt;</code>. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-vertical-nav__link-text</code></td> <td><code>&lt;span&gt;</code></td> <td>Initiates link text. It is required. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-m-hover</code></td> <td><code>.pf-c-vertical-nav__link</code></td> <td>Modifies for pf-c-vertical-nav__link :after, background-color and color.</td> </tr> <tr> <td><code>.pf-m-active</code></td> <td><code>.pf-c-vertical-nav__link</code></td> <td>Modifies for pf-c-vertical-nav__link :after, background-color and color.</td> </tr> <tr> <td><code>.pf-m-focus</code></td> <td><code>.pf-c-vertical-nav__link</code></td> <td>Modifies for pf-c-vertical-nav__link :after, background-color and color.</td> </tr> <tr> <td><code>.pf-m-disabled</code></td> <td><code>.pf-c-vertical-nav__link</code></td> <td>Modifies for pf-c-vertical-nav__link :after, background-color and color.</td> </tr> </tbody> </table> "},219:function(a,e,t){"use strict";function r(a){return a&&a.__esModule?a:{default:a}}e.__esModule=!0,e.Docs=void 0;var n=t(3),o=r(n),i=t(8),l=r(i),c=t(9),d=r(c),s=t(577),u=r(s),v=t(508),p=r(v);t(695);var f=e.Docs=u.default;e.default=function(){var a=(0,p.default)();return o.default.createElement(l.default,{docs:f},o.default.createElement(d.default,{heading:"VerticalNav Basic Example"},a))}},508:function(a,e,t){var r=t(1);a.exports=(r.default||r).template({1:function(a,e,r,n,o){var i;return(null!=(i=a.invokePartial(t(65),e,{name:"vertical-nav-item",hash:{current:"true"},fn:a.program(2,o,0),inverse:a.noop,data:o,helpers:r,partials:n,decorators:a.decorators}))?i:"")+(null!=(i=a.invokePartial(t(65),e,{name:"vertical-nav-item",hash:{disabled:"true"},fn:a.program(6,o,0),inverse:a.noop,data:o,helpers:r,partials:n,decorators:a.decorators}))?i:"")+(null!=(i=a.invokePartial(t(65),e,{name:"vertical-nav-item",fn:a.program(10,o,0),inverse:a.noop,data:o,helpers:r,partials:n,decorators:a.decorators}))?i:"")+(null!=(i=a.invokePartial(t(65),e,{name:"vertical-nav-item",fn:a.program(14,o,0),inverse:a.noop,data:o,helpers:r,partials:n,decorators:a.decorators}))?i:"")+(null!=(i=a.invokePartial(t(65),e,{name:"vertical-nav-item",fn:a.program(18,o,0),inverse:a.noop,data:o,helpers:r,partials:n,decorators:a.decorators}))?i:"")},2:function(a,e,r,n,o){var i;return null!=(i=a.invokePartial(t(67),e,{name:"vertical-nav-link",hash:{url:"#"},fn:a.program(3,o,0),inverse:a.noop,data:o,helpers:r,partials:n,decorators:a.decorators}))?i:""},3:function(a,e,r,n,o){var i;return"      "+(null!=(i=a.invokePartial(t(66),e,{name:"vertical-nav-link-text",fn:a.program(4,o,0),inverse:a.noop,data:o,helpers:r,partials:n,decorators:a.decorators}))?i:"")+"\n"},4:function(a,e,t,r,n){return"Home"},6:function(a,e,r,n,o){var i;return null!=(i=a.invokePartial(t(67),e,{name:"vertical-nav-link",hash:{url:"#"},fn:a.program(7,o,0),inverse:a.noop,data:o,helpers:r,partials:n,decorators:a.decorators}))?i:""},7:function(a,e,r,n,o){var i;return"      "+(null!=(i=a.invokePartial(t(66),e,{name:"vertical-nav-link-text",fn:a.program(8,o,0),inverse:a.noop,data:o,helpers:r,partials:n,decorators:a.decorators}))?i:"")+"\n"},8:function(a,e,t,r,n){return"Unnecessarily long name extending to 2 lines"},10:function(a,e,r,n,o){var i;return null!=(i=a.invokePartial(t(67),e,{name:"vertical-nav-link",hash:{url:"#"},fn:a.program(11,o,0),inverse:a.noop,data:o,helpers:r,partials:n,decorators:a.decorators}))?i:""},11:function(a,e,r,n,o){var i;return"      "+(null!=(i=a.invokePartial(t(66),e,{name:"vertical-nav-link-text",fn:a.program(12,o,0),inverse:a.noop,data:o,helpers:r,partials:n,decorators:a.decorators}))?i:"")+"\n"},12:function(a,e,t,r,n){return"Monitoring"},14:function(a,e,r,n,o){var i;return null!=(i=a.invokePartial(t(67),e,{name:"vertical-nav-link",hash:{url:"#"},fn:a.program(15,o,0),inverse:a.noop,data:o,helpers:r,partials:n,decorators:a.decorators}))?i:""},15:function(a,e,r,n,o){var i;return"      "+(null!=(i=a.invokePartial(t(66),e,{name:"vertical-nav-link-text",fn:a.program(16,o,0),inverse:a.noop,data:o,helpers:r,partials:n,decorators:a.decorators}))?i:"")+"\n"},16:function(a,e,t,r,n){return"Builds"},18:function(a,e,r,n,o){var i;return null!=(i=a.invokePartial(t(67),e,{name:"vertical-nav-link",hash:{url:"#"},fn:a.program(19,o,0),inverse:a.noop,data:o,helpers:r,partials:n,decorators:a.decorators}))?i:""},19:function(a,e,r,n,o){var i;return"      "+(null!=(i=a.invokePartial(t(66),e,{name:"vertical-nav-link-text",fn:a.program(20,o,0),inverse:a.noop,data:o,helpers:r,partials:n,decorators:a.decorators}))?i:"")+"\n"},20:function(a,e,t,r,n){return"Resources"},compiler:[7,">= 4.0.0"],main:function(a,e,r,n,o){var i;return null!=(i=a.invokePartial(t(509),e,{name:"vertical-nav",fn:a.program(1,o,0),inverse:a.noop,data:o,helpers:r,partials:n,decorators:a.decorators}))?i:""},usePartial:!0,useData:!0})},695:function(a,e){},65:function(a,e,t){var r=t(1);a.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(a,e,t,r,n){var o,i;return'<li class="pf-c-vertical-nav__item '+a.escapeExpression((i=null!=(i=t["pf-c-vertical-nav--modifier"]||(null!=e?e["pf-c-vertical-nav--modifier"]:e))?i:t.helperMissing,"function"==typeof i?i.call(null!=e?e:a.nullContext||{},{name:"pf-c-vertical-nav--modifier",hash:{},data:n}):i))+'">\n'+(null!=(o=a.invokePartial(r["@partial-block"],e,{name:"@partial-block",data:n,indent:"  ",helpers:t,partials:r,decorators:a.decorators}))?o:"")+"</li>\n"},usePartial:!0,useData:!0})},66:function(a,e,t){var r=t(1);a.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(a,e,t,r,n){var o,i;return'<span class="pf-c-vertical-nav__link-text '+a.escapeExpression((i=null!=(i=t["pf-c-vertical-nav--modifier"]||(null!=e?e["pf-c-vertical-nav--modifier"]:e))?i:t.helperMissing,"function"==typeof i?i.call(null!=e?e:a.nullContext||{},{name:"pf-c-vertical-nav--modifier",hash:{},data:n}):i))+'">'+(null!=(o=a.invokePartial(r["@partial-block"],e,{name:"@partial-block",data:n,helpers:t,partials:r,decorators:a.decorators}))?o:"")+"</span>\n"},usePartial:!0,useData:!0})},67:function(a,e,t){var r=t(1);a.exports=(r.default||r).template({1:function(a,e,t,r,n){return" pf-m-active"},3:function(a,e,t,r,n){return" pf-m-disabled"},5:function(a,e,t,r,n){return' aria-current="page" '},7:function(a,e,t,r,n){return'aria-disabled="true"'},compiler:[7,">= 4.0.0"],main:function(a,e,t,r,n){var o,i,l=null!=e?e:a.nullContext||{},c=t.helperMissing,d="function",s=a.escapeExpression;return'<a href="'+s((i=null!=(i=t.url||(null!=e?e.url:e))?i:c,typeof i===d?i.call(l,{name:"url",hash:{},data:n}):i))+'" class="pf-c-vertical-nav__link'+(null!=(o=t.if.call(l,null!=e?e.current:e,{name:"if",hash:{},fn:a.program(1,n,0),inverse:a.noop,data:n}))?o:"")+(null!=(o=t.if.call(l,null!=e?e.disabled:e,{name:"if",hash:{},fn:a.program(3,n,0),inverse:a.noop,data:n}))?o:"")+" "+s((i=null!=(i=t["pf-c-vertical-nav--modifier"]||(null!=e?e["pf-c-vertical-nav--modifier"]:e))?i:c,typeof i===d?i.call(l,{name:"pf-c-vertical-nav--modifier",hash:{},data:n}):i))+'" '+(null!=(o=t.if.call(l,null!=e?e.current:e,{name:"if",hash:{},fn:a.program(5,n,0),inverse:a.noop,data:n}))?o:"")+" "+(null!=(o=t.if.call(l,null!=e?e.disabled:e,{name:"if",hash:{},fn:a.program(7,n,0),inverse:a.noop,data:n}))?o:"")+">\n"+(null!=(o=a.invokePartial(r["@partial-block"],e,{name:"@partial-block",data:n,indent:"  ",helpers:t,partials:r,decorators:a.decorators}))?o:"")+"</a>\n"},usePartial:!0,useData:!0})},509:function(a,e,t){var r=t(1);a.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(a,e,t,r,n){var o,i;return'<nav class="pf-c-vertical-nav '+a.escapeExpression((i=null!=(i=t["pf-c-vertical-nav--modifier"]||(null!=e?e["pf-c-vertical-nav--modifier"]:e))?i:t.helperMissing,"function"==typeof i?i.call(null!=e?e:a.nullContext||{},{name:"pf-c-vertical-nav--modifier",hash:{},data:n}):i))+'" role="navigation" aria-label="Some Navigation Region">\n  <ul>\n'+(null!=(o=a.invokePartial(r["@partial-block"],e,{name:"@partial-block",data:n,indent:"    ",helpers:t,partials:r,decorators:a.decorators}))?o:"")+"  </ul>\n</nav>"},usePartial:!0,useData:!0})}});
//# sourceMappingURL=component---src-patternfly-components-vertical-nav-examples-index-js-41f3731edad1e8be15da.js.map