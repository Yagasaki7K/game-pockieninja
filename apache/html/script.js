$(function()
{
	flashInit();
});

function flashInit()
{
	var flash = {
			url: "DM.swf",
			id: "dreamFlash",
			width: "100%",
			height: "100%",
			ver: "10.0",
			vars: {},
			params: {wmode:"cpu"},
			attrs: {} 
		};
	with (flash)
		swfobject.embedSWF(url, id, width, height, ver, null, vars, params, attrs, function(e)
		{
			if (!e.success)
			{
				var tishiWrapper = $("#tishiWrapper");
				$(document.body).css("background-color", "#DCDCDC");
				$("#tishi", tishiWrapper).css({"background-image": "url(html/bg.jpg)"});
				tishiWrapper.fadeIn("normal");
				setInterval(function()
				{
					swfobject.embedSWF(url, id, width, height, ver, null, vars, params, attrs, null);
				}, 10000);
			}
		});
}
