$(document).ready(function()
{
	var pulmon = $(".pulmon");
	var altura_pulmon = parseInt(pulmon.css("width").substring(0, pulmon.css("width").length-2));
	pulmon.css("height", altura_pulmon * 2.5);
	$(".pulmones").css("height", altura_pulmon * 2.5)
	$(".pulmones").css("width", altura_pulmon*2+ parseInt($(".izq").css("marginRight").substring(0, $(".izq").css("marginRight").length-2))+ 4);
	var deterioroX, deterioroY, deterioroX_val, deterioroY_val, x, y, tabaco, marihuana, otros, porciento,  red, green, blue, once;
	deterioroX = $(".deterioro_izq");
	deterioroY = $(".deterioro_der");
	deterioroX_val = 0;
	deterioroY_val = 0;
	tabaco = 15;
	marihuana = 3;
	otros = 50;
	x = 0;
	y = 0;
	red = 0;
	green = 255;
	blue = 0;
	once = 0;
	function intoxicar(sustancia)
	{
			var i = 0;
			var animacion = setInterval(
				function()
				{
					porcentaje();
					color();
					if(x > altura_pulmon * 2.5)
					{
						y++;
						deterioroY.css("height", y);
						x--;
					}
					i++;
					x++;
					deterioroX.css("height", x);
					if(i == sustancia)
					{
						clearTimeout(animacion);
					}
				}, 50)
	}
	function color()
	{
		$(".vida").css("color", "rgb(" + red + ", " + green + ", " + blue + ")");
		red+=0.5;
		green-=0.5;
	}
	$(".tabaco").click(function()
	{
		intoxicar(tabaco);
	});
	$(".marihuana").click(function()
	{
		intoxicar(marihuana);
	});
	$(".otros").click(function()
	{
		intoxicar(otros);
	});
	function porcentaje()
	{
		porciento = ((x+y)/(altura_pulmon*2.5*2)*100).toFixed(0);
		if(porciento < 100)
		{
			$(".vida").html("Funcionalidad: " + (100 - porciento) + "%");
		}
		else
		{
			$(".vida").html("Funcionalidad: Nula");
			if(once == 0)
			{
				once++;
				falloPulmonar();
			}
		}
	}
	var degX, degY, m, rojo,  verde, azul;
	degX = 0;
	degY = 0;
	m = 0;
	rojo = 255;
	verde = 255;
	azul = 255;
	function falloPulmonar()
	{
		var fail = setInterval(function()
			{
				$(".izq").css("transform", "rotate(" + degX + "deg)");
				$(".izq").css("marginRight", -m);
				$(".der").css("transform", "rotate(" + -degY + "deg)");
				$(".der").css("marginLeft", -m);
				$(".pulmones").css("left", "30px");
				$(".izq").css("backgroundColor","rgb(" + rojo + ", " + verde + ", " + azul + ")");
				$(".izq").css("borderColor","rgb(" + rojo + ", " + verde + ", " + azul + ")");
				$(".der").css("backgroundColor","rgb(" + rojo + ", " + verde + ", " + azul + ")");
				$(".der").css("borderColor","rgb(" + rojo + ", " + verde + ", " + azul + ")");
				deterioroX.css("backgroundColor","rgb(" + rojo + ", " + verde + ", " + azul + ")");
				deterioroY.css("backgroundColor","rgb(" + rojo + ", " + verde + ", " + azul + ")");
				degX++;
				degY++;
				m+=(50/45);
				verde-=6;
				azul-=6;
				if(degX == 45)
				{
					clearInterval(fail);
				}
			}, 30);
	}
});