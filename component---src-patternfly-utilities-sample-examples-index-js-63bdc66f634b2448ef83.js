webpackJsonp([0x7e8f791aa034],{599:function(e,t){e.exports="<h2 id=overview>Overview</h2> <p>Only if needed write a short description with implementation notes. Design and interaction notes are already written on the design specs, don&#39;t repeat information.</p> <p>For example for buttons: Always add a modifier class to add color to the button. Never use the class <code>.btn</code> on its own.</p> <h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>role</code> or <code>aria</code></td> <td><code>pf-u-sample</code></td> <td>accessibility notes.</td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.class-name-here</code></td> <td><code>&lt;tags-here&gt;</code></td> <td>Outcome and remarks.</td> </tr> <tr> <td>Example: <code>.btn</code></td> <td><code>&lt;button&gt;</code></td> <td>Initiates a button. Always use it with a modifier class.</td> </tr> </tbody> </table> "},600:function(e,t){e.exports="<p>Description or additional help text for the utility can go here.</p> "},236:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Docs=void 0;var o=a(3),l=n(o),r=a(8),i=n(r),d=a(9),s=n(d),p=a(803),u=n(p),c=a(804),f=n(c),m=a(551),h=n(m),v=a(552),b=n(v),x=a(600),g=n(x),y=a(599),E=n(y);a(723);var _=t.Docs=E.default;t.default=function(){var e=(0,h.default)(),t=(0,b.default)();return l.default.createElement(i.default,{docs:_},l.default.createElement(s.default,{heading:"Sample Example 1",handlebars:u.default,docs:g.default},e),l.default.createElement(s.default,{heading:"Sample Example 2",handlebars:f.default},t))}},551:function(e,t,a){var n=a(1);e.exports=(n.default||n).template({1:function(e,t,a,n,o){return"  Example 1 Content\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,o,l){var r;return null!=(r=e.invokePartial(a(185),t,{name:"sample",fn:e.program(1,l,0),inverse:e.noop,data:l,helpers:n,partials:o,decorators:e.decorators}))?r:""},usePartial:!0,useData:!0})},803:function(e,t){e.exports="{{#> sample}}\n  Example 1 Content\n{{/sample}}\n"},552:function(e,t,a){var n=a(1);e.exports=(n.default||n).template({1:function(e,t,a,n,o){return"  Example 2 Content\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,o,l){var r;return null!=(r=e.invokePartial(a(185),t,{name:"sample",fn:e.program(1,l,0),inverse:e.noop,data:l,helpers:n,partials:o,decorators:e.decorators}))?r:""},usePartial:!0,useData:!0})},804:function(e,t){e.exports="{{#> sample}}\n  Example 2 Content\n{{/sample}}\n"},185:function(e,t,a){var n=a(1);e.exports=(n.default||n).template({1:function(e,t,a,n,o){var l;return'    id="'+e.escapeExpression((l=null!=(l=a["pf-u-sample__id"]||(null!=t?t["pf-u-sample__id"]:t))?l:a.helperMissing,"function"==typeof l?l.call(null!=t?t:e.nullContext||{},{name:"pf-u-sample__id",hash:{},data:o}):l))+'"\n  '},compiler:[7,">= 4.0.0"],main:function(e,t,a,n,o){var l,r,i=null!=t?t:e.nullContext||{};return'<div class="pf-u-sample '+e.escapeExpression((r=null!=(r=a["pf-u-sample--modifier"]||(null!=t?t["pf-u-sample--modifier"]:t))?r:a.helperMissing,"function"==typeof r?r.call(i,{name:"pf-u-sample--modifier",hash:{},data:o}):r))+'"\n'+(null!=(l=a.if.call(i,null!=t?t["pf-u-sample__id"]:t,{name:"if",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o}))?l:"")+">\n"+(null!=(l=e.invokePartial(n["@partial-block"],t,{name:"@partial-block",data:o,indent:"  ",helpers:a,partials:n,decorators:e.decorators}))?l:"")+"</div>\n"},usePartial:!0,useData:!0})},723:function(e,t){}});
//# sourceMappingURL=component---src-patternfly-utilities-sample-examples-index-js-63bdc66f634b2448ef83.js.map