/*global $:false */
/*global _:false */
/*jshint strict:false */
/*jshint quotmark:false */
$(document).ready(function(){
	var cursor = {};
	AddDoc();
	AddDoc();
});

var DocTagString = function(text){
	return  '<div class="project">\n'+ 
						'<a class="bullet">-</a>\n'+
						'<div class="content" >'+text+'</div>\n'+
				  '</div>';
};

var AddDoc = function(){
	$('.root').append(DocTagString('Blank'));
};

var AddDocAfterCursor 

var textNodeOf = function(node) { 
	return _.findWhere(node.childNodes, 
		function(child){
			return child.nodeType==3;
		}
	);
};

var colorSelected = function(){
	var s = window.getSelection();
	$(s.anchorNode.parentElement).addClass('selected');
}