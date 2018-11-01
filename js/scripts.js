
/*
* Placeholder plugin for jQuery
* ---
* Copyright 2010, Daniel Stocks (http://webcloud.se)
* Released under the MIT, BSD, and GPL Licenses.
*/
$(function(){(function(e){function t(t){this.input=t;if(t.attr("type")=="password"){this.handlePassword()}e(t[0].form).submit(function(){if(t.hasClass("placeholder")&&t[0].value==t.attr("placeholder")){t[0].value=""}})}t.prototype={show:function(e){if(this.input[0].value===""||e&&this.valueIsPlaceholder()){if(this.isPassword){try{this.input[0].setAttribute("type","text")}catch(t){this.input.before(this.fakePassword.show()).hide()}}this.input.addClass("placeholder");this.input[0].value=this.input.attr("placeholder")}},hide:function(){if(this.valueIsPlaceholder()&&this.input.hasClass("placeholder")){this.input.removeClass("placeholder");this.input[0].value="";if(this.isPassword){try{this.input[0].setAttribute("type","password")}catch(e){}this.input.show();this.input[0].focus()}}},valueIsPlaceholder:function(){return this.input[0].value==this.input.attr("placeholder")},handlePassword:function(){var t=this.input;t.attr("realType","password");this.isPassword=true;if(e.browser.msie&&t[0].outerHTML){var n=e(t[0].outerHTML.replace(/type=(['"])?password\1/gi,"type=$1text$1"));this.fakePassword=n.val(t.attr("placeholder")).addClass("placeholder").focus(function(){t.trigger("focus");e(this).hide()});e(t[0].form).submit(function(){n.remove();t.show()})}}};var n=!!("placeholder"in document.createElement("input"));e.fn.placeholder=function(){return n?this:this.each(function(){var n=e(this);var r=new t(n);r.show(true);n.focus(function(){r.hide()});n.blur(function(){r.show(false)});if(e.browser.msie){e(window).load(function(){if(n.val()){n.removeClass("placeholder")}r.show(true)});n.focus(function(){if(this.value==""){var e=this.createTextRange();e.collapse(true);e.moveStart("character",0);e.select()}})}})}})(jQuery)});


$(function() {

	/*---------------------------------------------------*/

	$('input[placeholder], textarea[placeholder]').placeholder();
	


	init();
});

function init() {
	$(".header").load("components/header.html"); 
	$(".footer").load("components/footer.html"); 

	$(".content").load("components/terminal.html");
}

function goto(page) {
	$(".content").load("components/" + page + ".html"); 
}