/* Included after reveal.js */
Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,

	keyboard: {
    		40: 'next',
    		38: 'prev'
  	},

	transition: 'slide', // none/fade/slide/convex/concave/zoom

	// Optional reveal.js plugins
	dependencies: [
		{ src: 'node_modules/reveal.js/lib/js/classList.js', condition: function() {
			return !document.body.classList; }
		},
		{ src: 'node_modules/reveal.js/plugin/markdown/marked.js', condition: function() {
			return !!document.querySelector( '[data-markdown]' ); }
		},
		{ src: 'node_modules/reveal.js/plugin/markdown/markdown.js', condition: function() {
			return !!document.querySelector( '[data-markdown]' ); }
		},
		{ src: 'node_modules/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() {
			hljs.initHighlightingOnLoad(); }
		},
		{ src: 'node_modules/reveal.js/plugin/zoom-js/zoom.js', async: true },
		{ src: 'node_modules/reveal.js/plugin/notes/notes.js', async: true }
	]
});

function followFooter(event) {
	var slide = event.currentSlide;
	var list = document.getElementsByClassName("reveal");
	if (slide.classList.contains("follow-along"))
		list[0].classList.add("following");
	else
		list[0].classList.remove("following");
}

Reveal.addEventListener('slidechanged', followFooter);
Reveal.addEventListener('ready', followFooter);

/* Printing and PDF exports */
var link = document.createElement( 'link' );
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match( /print-pdf/gi ) ? 'node_modules/reveal.js/css/print/pdf.css' : 'node_modules/reveal.js/css/print/paper.css';
document.getElementsByTagName( 'head' )[0].appendChild( link );
