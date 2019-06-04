function Accordion_JS(id,style){
	[].forEach.call(document.querySelectorAll('.panel-title'), function(item) {
	item.addEventListener('click', function(e) {
		display=(this.nextElementSibling.style.display=='block') ? 'none' : 'block';
		[].forEach.call(this.parentNode.querySelectorAll('.panel-body'), function(panels) {
			panels.style.cssText=style;
		});
		this.nextElementSibling.style.display=display;
	});
});
}


function Accordion_Jquery(id,style){
	$(document).ready(function() {
	$('#accordeon '+id).css(style);
    $('#accordeon '+id).on('click', f_acc);
});

function f_acc(){
  $('#accordeon .acc-body').not($(this).next()).slideUp();
    $(this).next().slideToggle();
}
}


  Accordion_JS('panel-title',"display: none; padding: 15px;border: 1px solid #ddd;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;  margin-bottom: 10px;background: #fff;");
  Accordion_Jquery(".acc-head",{"padding": "10px 15px","background-color": "#f5f5f5","border": "1px solid #ddd","font-size": "16px"});