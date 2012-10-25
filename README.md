reAssignHTML
============

Place html from one tag into several places.

USAGE:

  In your HTML:
		- URL GOES IN HREF OF media LINK
		- READ MORE LINK GOES IN TITLE OF media LINK
		- DESCRIPTION TITLE GOES IN media TITLE
		- DESCRIPTION GOES IN REL TAG OF media

		EXAMPLE 1: video and media
		<div class="selector">
			<a href="http://player.vimeo.com/video/6572882" target="_blank" title="http://read-more-link">
				<img class="active" alt="Dynamic Video Title" src="http://b.vimeocdn.com/ts/253/009/25300965_100.jpg" width="125" height="70" title="Description Title" rel="This is the Description. <p title='HTML can be written here in the REL'>But use single quotes instead.</p>" />
			</a>
		</div>

		<!-- Initiate in your HTML page: -->

		<script>
			jQuery(document).ready(function($)
			{
				$('.selector a').reAssignHTML(
				{
					media:		".video iframe",	//	typically a iframe
					heading:	"h3",	//	title
					content:	"p",	//	description or content
					moreButton:	"a"		//	where read more link will go
				});
			});
		</script>

		EXAMPLE 2: content
		<nav class="content browse-list">
			<a href="#" class="heading">a
				<span class="reassign display-none" rel="
					<ul class='container content no-list-style'>
						<li><a href='#' title=''>Sun Spots</a></li>
						<li><a href='#' title=''>Skin - Allergy</a></li>
					</ul>">A
				</span>
			</a>
		</nav>
		<div id="content">
			<p id="default">Lorem ipsum dolor sit amet</p>
		</div>

		<!-- Initiate in your HTML page: -->

		<script>
			jQuery(document).ready(function($)
			{
				$('.browse-list li a').reAssignHTML(
				{ content:	"#content" }); //	description or content
			});
		</script>