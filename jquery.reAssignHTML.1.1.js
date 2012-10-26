/*
 * jQuery Reassign HTML Plugin
 *
 * Authors:  @colecmc, Mark Hanson
 * Version:  1.1 (09-18-12)
 * Requires: jQuery v1.6 or later
\*

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
                media:      ".video iframe",    //  typically a iframe
                heading:    "h3",   //  title
                content:    "p",    //  description or content
                moreButton: "a"     //  where read more link will go
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
            { content:  "#content" }); //   description or content
        });
    </script>
 
/****************************<->*****************************\
\*                      CHANGE LOG                          */
/*	1.1  Added ability to assign different elements         *\
\*	     as [media:], just add class 'reassign'             */
/*						                                    *\
\****************************>-<*****************************/


(function($, window, document, undefined)
{  
	$.fn.extend(
	{
		reAssignHTML: function(settings) 
		{
			var colecmc_defaults =
			{
				media:		"",
				heading:	"",
				content:	"",
				unDefined:	"Sorry that's not available.",	/*	not working yet	*/
				moreButton:	""
			},
				colecmc_options =  $.extend({},colecmc_defaults, settings);

			function fadeThis(setting, mapTo)
			{
				$(setting).fadeOut("fast", function()
				{
					$(this).html("" + mapTo + "").fadeIn("fast")
				});
			}
			
			return this.each(function()
			{                     
				
				var colecmc_o				= colecmc_options,
					colecmc_obj				= $(this),
					colecmc_mediaSrc		= colecmc_obj.attr("href"),
					colecmc_buttonLink		= colecmc_obj.attr("title"),
					colecmc_contentText		= colecmc_obj.find("img, .reassign").attr("rel"),
					colecmc_headingText		= colecmc_obj.find("img, .reassign").attr("title")

				colecmc_obj.on('click', function(e)
				{
					e.preventDefault();
					var isActive	= true,
						activated	= $(this).isActive;

					if( $(colecmc_o.media) === undefined )
					{
						$(colecmc_o.media).attr(
						{
							src:	colecmc_0.unDefined + ".jpg",
							title:	colecmc_0.unDefined
						});
					}

					else
					{
						$(colecmc_o.media).fadeOut("fast", function()
						{
							$(colecmc_o.media).attr({ src: colecmc_mediaSrc }).fadeIn("slow");
						});										
					}

					if( $(colecmc_o.moreButton) === undefined )
					{
						$(colecmc_o.moreButton).attr(
						{
							href:	"#" + colecmc_0.unDefined,
							title:	colecmc_0.unDefined
						});
					}
					else { $(colecmc_o.moreButton).attr({ href: colecmc_buttonLink }); }
					
					if( $(colecmc_o.heading) === undefined ) { console.log(colecmc_0.unDefined); $(colecmc_o.heading).attr({ title: colecmc_0.unDefined }); }
					else { fadeThis(colecmc_o.heading, colecmc_headingText); }
					
					if( $(colecmc_o.content) === undefined )
					{
						console.log(colecmc_0.unDefined);
						fadeThis(colecmc_o.content, colecmc_o.unDefined);
					}
					else { fadeThis(colecmc_o.content, colecmc_contentText); }

					if(! activated)
					{
						$(colecmc_obj).parent().siblings().find("img, .reassign").removeClass("selected active");			
						$(colecmc_obj).children().addClass("selected");

						return false;
					} else
					{ return false; }
				});

				colecmc_obj.on('mouseenter mouseleave', colecmc_obj, function (ev)
				{
					if( ev.type === 'mouseenter' )
					{ $(colecmc_obj).children().removeClass("notactive").addClass("active"); }

					else { $(colecmc_obj).children().removeClass("active").addClass("notactive"); }
				});

			});
		}
	});    
})
(jQuery, window, document, undefined);