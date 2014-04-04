window.addEventListener('load', function load(event) {
	window.removeEventListener('load', load, false);
	markdownviewer.init();
}, false);

if (typeof markdownviewer === 'undefined') {
	var markdownviewer = {

		init: function() {
			var appcontent = document.getElementById('appcontent');
			if (appcontent) {
				appcontent.addEventListener('DOMContentLoaded', this.onPageLoad, true);
			}
		},

		onPageLoad: function(aEvent) {
			var document = aEvent.originalTarget,
			    regexpMdFile = /\.m(arkdown|kdn?|do?(wn)?)$/i;

			if (regexpMdFile.test(document.location)) {
				marked.setOptions({
					langPrefix: 'prettyprint linenums lang-'
				});

				var content = document.firstChild;
				content.innerHTML = '<!DOCTYPE html>' +
				                    '<head>' +
                                    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >'+
				                    '    <title>Markdown Viewer</title>' +
				                    '    <link rel="stylesheet" type="text/css" href="resource://mdskin/bootstrap.css">' +
						    '    <link rel="stylesheet" type="text/css" href="resource://mdskin/jquery.jqTOC.css">' +
						    '    <link rel="stylesheet" type="text/css" href="resource://mdskin/prettify.css">' +
				                    '</head>' +
				                    '<body class="container">' +
				                        marked(content.textContent) +
				                    '</body>';
				var loadjsfile=function(doc, jsfile){
                    console.log('loadjsfile %o', jsfile);
					var script = doc.createElement("script");
					script.type = "text/javascript";
					script.src = "resource://mdskin/"+jsfile;
					var head = doc.getElementsByTagName("head")[0] || doc.documentElement;
					head.insertBefore(script, head.firstChild);
				};
				loadjsfile(document, 'bootall.js');
			}
		}
	};
}
