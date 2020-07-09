LDM.style.color="#FFFFFF";
document.getElementById("PCLL").style.color='#FFFFFF';
var scriptCP=document.createElement('script');
scriptCP.src='https://cdn.jsdelivr.net/gh/Alkaestry/estilos@latest/color.js';
var head=document.getElementsByTagName('head')[0];
head.appendChild(scriptCP);
document.body.style.background="rgb(0,0,0)";
document.getElementsByClassName("btn")[0].style = 'background: rgba(255, 255, 255, 0); background-image: url("./gl/glyphs.png!120617083118"); background-repeat: repeat-x; background-position: 0 -97px;';
document.getElementsByClassName("btn")[1].style = 'background: rgba(255, 255, 255, 0); background-image: url("./gl/glyphs.png!120617083118"); background-repeat: repeat-x; background-position: 0 -97px;';
function mod_colors()
{
	var color_OT = document.getElementById("colorOT").value;
	var color_pN1 = document.getElementById("colorpN1").value;
	var color_pN2 = document.getElementById("colorpN2").value;
	OT.style = "background: " + color_OT + "; background-image: url('./gl/glyphs.png!120617083118'); background-repeat: repeat-x; background-position: 0 -97px;";
	document.getElementsByClassName("pN")[1].style = "background: " + color_pN1 + "; background-image: url('./gl/glyphs.png!120617083118'); background-repeat: repeat-x; background-position: 0 -97px;";
	document.getElementsByClassName("pN")[2].style = "background: " + color_pN2 + "; background-image: url('./gl/glyphs.png!120617083118'); background-repeat: repeat-x; background-position: 0 -97px;";
	document.getElementsByClassName("body")[2].style = "background: " + color_OT + "; background-image: url('./gl/glyphs.png!120617083118'); background-repeat: repeat-x; background-position: 0 -97px;";
	document.getElementsByClassName("body")[3].style = "background: " + color_OT + "; background-image: url('./gl/glyphs.png!120617083118'); background-repeat: repeat-x; background-position: 0 -97px;";
	document.getElementsByClassName("body")[4].style = "background: " + color_OT + "; background-image: url('./gl/glyphs.png!120617083118'); background-repeat: repeat-x; background-position: 0 -97px;";
}
document.getElementById("CD").innerHTML = '<input id="c_Tsimple" type="color"></input><button class="btn" onclick="mod_colorTexto()">«-Aplicar color de letra</button> <div class=\"body\"> <div id=\"CP\"><table cellspacing=\"2\" cellpadding=\"0\" border=\"0\"><tbody><tr><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #909090;\" onclick=\"return IN.sCol(27);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #FF0300;\" onclick=\"return IN.sCol(28);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #FF9A00;\" onclick=\"return IN.sCol(29);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #FFCD00;\" onclick=\"return IN.sCol(30);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #C5EA35;\" onclick=\"return IN.sCol(31);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #4BE22C;\" onclick=\"return IN.sCol(32);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #2CAFE2;\" onclick=\"return IN.sCol(33);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #353CC4;\" onclick=\"return IN.sCol(34);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #992CE2;\" onclick=\"return IN.sCol(35);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #E22C9A;\" onclick=\"return IN.sCol(36);\">&nbsp;</a></td></tr><tr><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #000000;\" onclick=\"return IN.sCol(37);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #CE1918;\" onclick=\"return IN.sCol(38);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #CE5D18;\" onclick=\"return IN.sCol(39);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #CEAB18;\" onclick=\"return IN.sCol(40);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #97B71C;\" onclick=\"return IN.sCol(41);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #35A31F;\" onclick=\"return IN.sCol(42);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #1F7EA3;\" onclick=\"return IN.sCol(43);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #1F54A3;\" onclick=\"return IN.sCol(44);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #6E1FA3;\" onclick=\"return IN.sCol(45);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #A31F6E;\" onclick=\"return IN.sCol(46);\">&nbsp;</a></td></tr></tbody></table></div> </div>';
function mod_colorTexto()
{
	IN.doFocus();
	IN.clr= document.getElementById("c_Tsimple").value;
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}
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
//FIN.
