/************************************************
Editor de esTilos
Se agregaron nuevos colores para las fuentes
Author: ++
modificado el 6/Jul/2020
************************************************/

//Nota para version modificada: creo que este script ya es innecesario. Revisar luego si lo puedo eliminar.
/*
//++ Nuevos colores:
document.getElementById('CP').innerHTML = '<table border="0" cellspacing="2" cellpadding="0"><tbody><tr><td><a onclick="newColor_3L1();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #25BCFF;">&nbsp;</a></td><td><a onclick="newColor_3L2();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #69CFFC;">&nbsp;</a></td><td><a onclick="newColor_3L3();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #698AFC;">&nbsp;</a></td><td><a onclick="newColor_3L4();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #C469FC;">&nbsp;</a></td><td><a onclick="newColor_3L5();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #FF00FF;">&nbsp;</a></td><td><a onclick="newColor_3L6();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #BE067A;">&nbsp;</a></td><td><a onclick="newColor_3L7();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #B40850;">&nbsp;</a></td><td><a onclick="newColor_3L8();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #B53951;">&nbsp;</a></td><td><a onclick="newColor_3L9();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #CDFF00;">&nbsp;</a></td><td><a onclick="newColor_3L10();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #FF7900;">&nbsp;</a></td></tr><tr><td><a onclick="newColor_L1();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #3f3151;">&nbsp;</a></td><td><a onclick="newColor_L2();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #5f497a;">&nbsp;</a></td><td><a onclick="newColor_L3();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #8064a2;">&nbsp;</a></td><td><a onclick="newColor_L4();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #b2a1c7;">&nbsp;</a></td><td><a onclick="newColor_L5();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #ccc0d9;">&nbsp;</a></td><td><a onclick="newColor_L6();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #e5dfec;">&nbsp;</a></td><td><a onclick="newColor_L7();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #c9a3f6;">&nbsp;</a></td><td><a onclick="newColor_L8();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #be8cf9;">&nbsp;</a></td><td><a onclick="newColor_L9();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #d5bbf3;">&nbsp;</a></td><td><a onclick="newColor_L10();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #c08efa;">&nbsp;</a></td></tr><tr><td><a onclick="newColor1();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #109FA6;">&nbsp;</a></td><td><a onclick="newColor2();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #B300B3;">&nbsp;</a></td><td><a onclick="newColor3();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #FF99E5;">&nbsp;</a></td><td><a onclick="newColor4();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #FF4000;">&nbsp;</a></td><td><a onclick="newColor5();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #238C00;">&nbsp;</a></td><td><a onclick="newColor6();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #FF037F;">&nbsp;</a></td><td><a onclick="newColor7();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #00FFFF;">&nbsp;</a></td><td><a onclick="newColor8();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #007BFF;">&nbsp;</a></td><td><a onclick="newColor9();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #14CCD6;">&nbsp;</a></td><td><a onclick="newColor10();" style="display: block; width: 18px; height: 22px; font-size:1px; background: #5AE0E1;">&nbsp;</a></td></tr><tr><td><a onclick="return IN.sCol(27);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #909090;">&nbsp;</a></td><td><a onclick="return IN.sCol(28);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #FF0300;">&nbsp;</a></td><td><a onclick="return IN.sCol(29);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #FF9A00;">&nbsp;</a></td><td><a onclick="return IN.sCol(30);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #FFCD00;">&nbsp;</a></td><td><a onclick="return IN.sCol(31);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #C5EA35;">&nbsp;</a></td><td><a onclick="return IN.sCol(32);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #4BE22C;">&nbsp;</a></td><td><a onclick="return IN.sCol(33);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #2CAFE2;">&nbsp;</a></td><td><a onclick="return IN.sCol(34);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #353CC4;">&nbsp;</a></td><td><a onclick="return IN.sCol(35);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #992CE2;">&nbsp;</a></td><td><a onclick="return IN.sCol(36);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #E22C9A;">&nbsp;</a></td></tr><tr><td><a onclick="return IN.sCol(37);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #000000;">&nbsp;</a></td><td><a onclick="return IN.sCol(38);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #CE1918;">&nbsp;</a></td><td><a onclick="return IN.sCol(39);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #CE5D18;">&nbsp;</a></td><td><a onclick="return IN.sCol(40);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #CEAB18;">&nbsp;</a></td><td><a onclick="return IN.sCol(41);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #97B71C;">&nbsp;</a></td><td><a onclick="return IN.sCol(42);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #35A31F;">&nbsp;</a></td><td><a onclick="return IN.sCol(43);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #1F7EA3;">&nbsp;</a></td><td><a onclick="return IN.sCol(44);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #1F54A3;">&nbsp;</a></td><td><a onclick="return IN.sCol(45);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #6E1FA3;">&nbsp;</a></td><td><a onclick="return IN.sCol(46);" style="display: block; width: 18px; height: 22px; font-size:1px; background: #A31F6E;">&nbsp;</a></td></tr></tbody></table>';

//++ Funciones para elegir los colores:
function newColor1()
{
	IN.doFocus();
	IN.clr="#109FA6";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor2()
{
	IN.doFocus();
	IN.clr="#B300B3";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor3()
{
	IN.doFocus();
	IN.clr="#FF99E5";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor4()
{
	IN.doFocus();
	IN.clr="#FF4000";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor5()
{
	IN.doFocus();
	IN.clr="#238C00";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor6()
{
	IN.doFocus();
	IN.clr="#FF037F";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor7()
{
	IN.doFocus();
	IN.clr="#00FFFF";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor8()
{
	IN.doFocus();
	IN.clr="#007BFF";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor9()
{
	IN.doFocus();
	IN.clr="#14CCD6";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
};
function newColor10()
{
	IN.doFocus();
	IN.clr = "#5AE0E1";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}
////////////////
//TERCERA LINEA:
///////////////

function newColor_L1()
{
	IN.doFocus();
	IN.clr = "#3f3151";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_L2()
{
	IN.doFocus();
	IN.clr = "#5f497a";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_L3()
{
	IN.doFocus();
	IN.clr = "#8064a2";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_L4()
{
	IN.doFocus();
	IN.clr = "#b2a1c7";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_L5()
{
	IN.doFocus();
	IN.clr = "#ccc0d9";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_L6()
{
	IN.doFocus();
	IN.clr = "#e5dfec";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_L7()
{
	IN.doFocus();
	IN.clr = "#c9a3f6";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_L8()
{
	IN.doFocus();
	IN.clr = "#be8cf9";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_L9()
{
	IN.doFocus();
	IN.clr = "#d5bbf3";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_L10()
{
	IN.doFocus();
	IN.clr = "#c08efa";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}
//tercera(cuarta-quinta) línea:

function newColor_3L1()
{
	IN.doFocus();
	IN.clr = "#25BCFF";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_3L2()
{
	IN.doFocus();
	IN.clr = "#69CFFC";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_3L3()
{
	IN.doFocus();
	IN.clr = "#698AFC";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_3L4()
{
	IN.doFocus();
	IN.clr = "#C469FC";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_3L5()
{
	IN.doFocus();
	IN.clr = "#FF00FF";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_3L6()
{
	IN.doFocus();
	IN.clr = "#BE067A";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_3L7()
{
	IN.doFocus();
	IN.clr = "#B53951";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_3L8()
{
	IN.doFocus();
	IN.clr = "#B53951";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_3L9()
{
	IN.doFocus();
	IN.clr = "#CDFF00";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}

function newColor_3L10()
{
	IN.doFocus();
	IN.clr = "#FF7900";
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}
//Fin de nuevos colores.
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
*/


//+ NUEVA EDICION DE ESTILOS:
LDM.style.color="#FFFFFF";
document.getElementById("PCLL").style.color='#FFFFFF';

// agregamos el script del color picker:
var scriptCP=document.createElement('script');
scriptCP.src='https://cdn.jsdelivr.net/gh/Alkaestry/estilos@latest/color.js';
var head=document.getElementsByTagName('head')[0];
head.appendChild(scriptCP);

// Modificaciones generales fijas:
	  //cambiar el color morado de fondo por color negro:
document.body.style.background="rgb(0,0,0)";
	  //cambiar los colores de los botones de "enviar" y "disponible":
document.getElementsByClassName("btn")[0].style = 'background: rgba(255, 255, 255, 0); background-image: url("./gl/glyphs.png!120617083118"); background-repeat: repeat-x; background-position: 0 -97px;';
document.getElementsByClassName("btn")[1].style = 'background: rgba(255, 255, 255, 0); background-image: url("./gl/glyphs.png!120617083118"); background-repeat: repeat-x; background-position: 0 -97px;';

// +función para aplicar cambios+:
function mod_colors()
{
	//variable para el color de OT:
	var color_OT = document.getElementById("colorOT").value;
	//variable para el color de pN1:
	var color_pN1 = document.getElementById("colorpN1").value;
	//variable para el color de pN2:
	var color_pN2 = document.getElementById("colorpN2").value;
	
	//modificar pantalla de salida de texto:
	OT.style = "background: " + color_OT + "; background-image: url('./gl/glyphs.png!120617083118'); background-repeat: repeat-x; background-position: 0 -97px;";
	//modificar el color de donde escribo:
	document.getElementsByClassName("pN")[1].style = "background: " + color_pN1 + "; background-image: url('./gl/glyphs.png!120617083118'); background-repeat: repeat-x; background-position: 0 -97px;";
	//modificar el color de la lista de usuarios:
	document.getElementsByClassName("pN")[2].style = "background: " + color_pN2 + "; background-image: url('./gl/glyphs.png!120617083118'); background-repeat: repeat-x; background-position: 0 -97px;";
	//modificar la clase .body del color de otras ventanas:
	document.getElementsByClassName("body")[2].style = "background: " + color_OT + "; background-image: url('./gl/glyphs.png!120617083118'); background-repeat: repeat-x; background-position: 0 -97px;";
	document.getElementsByClassName("body")[3].style = "background: " + color_OT + "; background-image: url('./gl/glyphs.png!120617083118'); background-repeat: repeat-x; background-position: 0 -97px;";
	document.getElementsByClassName("body")[4].style = "background: " + color_OT + "; background-image: url('./gl/glyphs.png!120617083118'); background-repeat: repeat-x; background-position: 0 -97px;";
}
// fin_función_aplicar_cambios.

/*
	AGREGAR LA PALETA DE COLORES AL CUADRO DE SELECCION DE COLOR
	PARA ELEGIR EL COLOR CON QUE DESEO ESCRIBIR:
	VAMOS A MODIFICAR EL ELEMENTO CD a TRAVES DE .innerHTML
	Y LUEGO CREAMOS LA funcion PARA EL BOTON QUE ASIGNA EL COLOR:
*/
document.getElementById("CD").innerHTML = '<input id="c_Tsimple" type="color"></input><button class="btn" onclick="mod_colorTexto()">«-Aplicar color de letra</button> <div class=\"body\"> <div id=\"CP\"><table cellspacing=\"2\" cellpadding=\"0\" border=\"0\"><tbody><tr><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #909090;\" onclick=\"return IN.sCol(27);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #FF0300;\" onclick=\"return IN.sCol(28);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #FF9A00;\" onclick=\"return IN.sCol(29);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #FFCD00;\" onclick=\"return IN.sCol(30);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #C5EA35;\" onclick=\"return IN.sCol(31);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #4BE22C;\" onclick=\"return IN.sCol(32);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #2CAFE2;\" onclick=\"return IN.sCol(33);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #353CC4;\" onclick=\"return IN.sCol(34);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #992CE2;\" onclick=\"return IN.sCol(35);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #E22C9A;\" onclick=\"return IN.sCol(36);\">&nbsp;</a></td></tr><tr><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #000000;\" onclick=\"return IN.sCol(37);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #CE1918;\" onclick=\"return IN.sCol(38);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #CE5D18;\" onclick=\"return IN.sCol(39);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #CEAB18;\" onclick=\"return IN.sCol(40);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #97B71C;\" onclick=\"return IN.sCol(41);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #35A31F;\" onclick=\"return IN.sCol(42);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #1F7EA3;\" onclick=\"return IN.sCol(43);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #1F54A3;\" onclick=\"return IN.sCol(44);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #6E1FA3;\" onclick=\"return IN.sCol(45);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #A31F6E;\" onclick=\"return IN.sCol(46);\">&nbsp;</a></td></tr></tbody></table></div> </div>';
//funcion para el boton que asigna el color con que escribiré:
function mod_colorTexto()
{
	IN.doFocus();
	IN.clr= document.getElementById("c_Tsimple").value;
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}
//fin_funcion_del_boton_para_asignar_color...

/*
	FUNCION PARA EL CAMBIO RAPIDO DE NICK:
*/
function Entrada(nn)
{
	var pu=""; var nn;
	au=rcUtil.trim(E.get(LDL.lDAU)); 
	if(au.length>3&&au.indexOf("http://")!=0){ au="http://"+au; } 
	if(pu.length>3&&pu.indexOf("http://")!=0){ pu="http://"+pu; } 
	if(nn.length<1||nn.length>BL.nL||pu.length>BL.puL||au.length>BL.auL)
	E.set(LDL.lDNN,nn); 
	E.set(LDL.lDPU,pu); 
	E.set(LDL.lDAU,au);
	rcCookie.set("n",nn,365); 
	rcCookie.set("pu",pu,365); 
	rcCookie.set("au",au,365); 
	LDL.warn(rcLn["LDC"]); 
	if(LDL.o){ LDL.shOpts(); } 
	E.hide(LDL.lDD); 
	BL.nick=nn; 
	BL.pu=pu; BL.au=au; BL.dE=false; LDL.aC(); 
}








//FIN_de_EDICION_DE_ESTILOS
