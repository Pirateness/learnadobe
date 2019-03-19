
var dimmed = 0;
function toggleLights()
{
	var dimmer = document.getElementById("dimmer");
	if(dimmed == 0) dimmed = 1;
	else dimmed = 0;

	if(dimmed == 1)
	{
		dimmer.style.opacity = 0.7;
		dimmer.style.visibility = "visible";

	}

	if(dimmed == 0)
	{
		dimmer.style.opacity = 0.0;
		dimmer.style.visibility = "hidden";
	}
}
