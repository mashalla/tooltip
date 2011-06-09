Accessible Tooltip
===========

This class provides accessible tooltip with various effects and possibilites.

Widget based on <a href="http://mootools.net/forge/p/ascribe_dialog">Ascribe Dialog</a>

![Screenshot](http://www.accessiblemootoolsdemo.iao.fraunhofer.de/Mootools_Widgets/img/Tooltip.png)

How to use
----------

Individual tool tips

	#HTML
	var tooltip = new AscTip($('id_of_element_to_target'), 'Text of tooltip goes here');

By default, the tooltips will use a CSS class called "AscPop". But you can customize the class or use multiple styles of tooltips on the same page. To use a CSS class called "YourPop", use the classPrefix option when instantiated the AscTip class. 

	#HTML
	var tooltipiwthyourcss = new AscTip($('id_of_element_to_target'), 'Text of tooltip goes here', 'n', {classPrefix: 'Your'});

To add multiple tooltips at a time, use the AscTips class. 

	#HTML
	var asc_tooltips = new AscTips([
		{ id:"id_of_element_to_target", msg:"Tooltip message", align:'nw },
		{ id:"id_of_element_to_target", msg:"Tooltip message", align:'nw },
		{ id:"id_of_element_to_target", msg:"Tooltip message", align:'nw }
	]); 

To customize how you wish the tooltip to be aligned to the target element use the following values:

When the tooltip is to align itself outside the target:

	#HTML
	nw - northwest
	n - north
	ne - northeast
	en - east north
	e - east
	es - east south
	se - south east
	s - south
	sw - southwest
	ws - westsouth
	w  -west
	wn - west north

If the tooltip is to position itself within a target: 

	#HTML
	nw - northwest
	n - north
	ne - northeast
	e - east
	se - south east
	s - south
	sw - southwest
	w  -west
