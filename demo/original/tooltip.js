/*
---
description: accessible tooltip based on ascribe dialog

license: MIT-style

authors:
- Christian Merz

requires:
- core/1.3: '*'
- more/1.2.4: Fx.Elements

provides: accessible tooltip

version: 1.0
...
 */
window.addEvent('domready', function(){

var tooltip1 = new AscTip($('tooltipDemo1'), 'This input field has no functionality');
var tooltip2 = new AscTip($('tooltipDemo2'), 'The official Aegis Logo');
var tooltip3 = new AscTip($('tooltipDemo3'), 'This button has no functionality');
var tooltip4 = new AscTip($('tooltipDemo4'), 'This section contains dummy text');
});
