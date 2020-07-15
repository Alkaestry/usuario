
document.getElementById("HDA").innerHTML="<b>Versión modificada por @OM</b><br/>Version 7.1PRO";
//anti-kick:
rcFC.send("700","750"); 
BL.pingSent = new Date().getMilliseconds();
var ver = setInterval('rcFC.send("700","750")',600000);
ver;
document.getElementById('HDB').innerHTML = ' <div><input id="colorOT" type="color"> «(Color de la ventana del área del chat)</input></br><input id="colorpN1" type="color"> «(Color del campo del texto)</input></br><input id="colorpN2" type="color"> «(Color de la lista de usuarios)</input></br><button onclick="mod_colors()" class="btn" style="padding:9px;">Aplicar colores</button></div></br></br><div>Cambiar de nick sin salir: <input type="text" style="background:#f8f8f8; box-shadow:1px 1px #888888;" id="cambioNick" value="Escribe el nick"> <button class="btn" style="padding:9px;" onclick="Entrada(cambioNick.value)">Cambiar</button></div><br /><a title="El espacio de Spam-Flooder se usa escribiendo ahí el texto que deseas que todos los nicks de la sala escriban (pueden ser símbolos, emojis o texto), luego selecciona el tiempo que deseas se muestre el Spam-flood, por ejemplo cada 2 segundos, y lo activas dando click en el botón que dice Iniciar/Parar; si deseas cambiar el intervalo de tiempo debes parar el Spam, cambiar el tiempo y luego activarlo nuevamente. Ten en cuenta que todos en la sala escribirán con el color que tú tengas para escribir. Para CLONAR: ve a la lista de usuarios y da click en un nick, ahí aparece la opcion Clonar, da click ahí y se abre esta ventana ya con el nick seleccionado que vas a clonar, elige el color de letra, y escribe en el espacio donde dice Texto a mostrar:. Para enviar el texto presiona Enter en el teclado o das click en Enviar. El BOT para enviar privados funciona igual que el Spam-flooder, solamente que enviará privados a todos los nicks de la sala con el nick que tú tengas. En el Bot para textos largos puedes escribir textos en varias líneas o párrafos, separando cada uno con un punto (.), ya que el punto hace que se envíe solamente esa línea y no todo el texto. Debes finalizar cada línea con un punto. Y presionas el cuadro de color rojo para enviarlo, verás que cambia a color verde. En cuanto haya enviado todo el texto el Bot se detiene, verás que el recuadro regresa al color rojo. Ten en cuenta que cuando envías el Spam, el Bot de privados y el Bot de textos largos, sí escribes normalmente en sala te puede sacar el Flood. Así que si deseas escribir tendrás que pausar el Spam o los Bot.">(Instrucciones de uso)</a><br /> <a style="font-size:17px; color: #0056b2;"><b>Spam-Flooder(Usar con cuidado):<b></a><div>&nbsp;</div> <div>Texto SPAM: <input id="spamText" size="60px" title="Escribe/pega acá el texto que quieras que se envíe" style="background: #C4E7FF; border:2px solid #000000" ></input></div><div>&nbsp;</div> <div>Tiempo: <select id="tiempo"><option value="1500">1.5 segundos</option><option value="1720">1.7 segundos</option><option value="1850">1.8 segundos</option><option value="1900">1.9 segundos</option><option value="2000">2 segundos..</option><option value="10000">10 segundos.</option><option value="40000">40 segundos.</option><option value="60000">1 minuto....</option><option value="300000">5 minutos...</option></select></div><div>&nbsp;</div><div>Iniciar/Parar:&nbsp;<button id="bts1" title="Estado del Flooder" onmouseup="presbts1();" style="cursor: pointer; border: 0.8px solid #000000; background: #C5EA35;">OFF</button></div><hr size="4" width="100%" align="left" style="color: #0056b2;"></hr><a style="font-size:20px; color: #0056b2;"><b>Clonar:</a><div>Texto a mostrar: <input id="text_in" type="text" onkeypress="validar(event)" size="30" style="background: #C4E7FF; border:2px solid #000000; height:35px; font-size:18px"></input><a>&nbsp;</a><a id="bt_enviar" onmousedown="cl_text();" class="btn" style="cursor:pointer; border:0.8px solid #000000; background: #C5EA35;"><b>Enviar </b></a><div>&nbsp;</div><div>Nick a clonar: <input id="cl_nick" readonly="readonly" style="background: #FFFFFF; border:2px solid #000000"></input><a>&nbsp;&nbsp;</a><a id="bt_b" title="Letra en Negrita" onmousedown="negrita();" class="btn" style="cursor:pointer; border:2px solid rgb(6, 65, 98); background:transparent;"><b>B </b></a><a>&nbsp;</a><a id="bt_i" title="Letra en Cursiva" onmousedown="cursiva();" class="btn" style="cursor:pointer; border:2px solid rgb(6, 65, 98); background:transparent;"><i>I </i></a><a>&nbsp;</a><a id="bt_u" title="Letra subrayada" onmousedown="subrayado();" class="btn" style="cursor:pointer; border:2px solid rgb(6, 65, 98); background:transparent;"><u>U </u></a></div><a id="mostrar" style="color: #000000;" title="Solo da Click sobre el color a elegir">Color del nick a clonar:</a><div><a id="tablaSimple" style="visibility: visible; "><a id="bt1" class="btn" onclick="ocultar()" style="cursor:pointer; background: #909090;">&nbsp;&nbsp;&nbsp;</a><a id="bt2" class="btn" onclick="ocultar()" style="cursor:pointer; background: #FF0300;">&nbsp;&nbsp;&nbsp;</a><a id="bt3" class="btn" onclick="ocultar()" style="cursor:pointer; background: #FF9A00;">&nbsp;&nbsp;&nbsp;</a><a id="bt4" class="btn" onclick="ocultar()" style="cursor:pointer; background: #FFCD00;">&nbsp;&nbsp;&nbsp;</a><a id="bt5" class="btn" onclick="ocultar()" style="cursor:pointer; background: #C5EA35;">&nbsp;&nbsp;&nbsp;</a><a id="bt6" class="btn" onclick="ocultar()" style="cursor:pointer; background: #4BE22C;">&nbsp;&nbsp;&nbsp;</a><a id="bt7" class="btn" onclick="ocultar()" style="cursor:pointer; background: #2CAFE2;">&nbsp;&nbsp;&nbsp;</a><a id="bt8" class="btn" onclick="ocultar()" style="cursor:pointer; background: #353CC4;">&nbsp;&nbsp;&nbsp;</a><a id="bt9" class="btn" onclick="ocultar()" style="cursor:pointer; background: #992CE2;">&nbsp;&nbsp;&nbsp;</a><a id="bt10" class="btn" onclick="ocultar()" style="cursor:pointer; background: #E22C9A;">&nbsp;&nbsp;&nbsp;</a></div><div><a id="bt11" class="btn" onclick="ocultar()" style="cursor:pointer; background: #000000;">&nbsp;&nbsp;&nbsp;</a><a id="bt12" class="btn" onclick="ocultar()" style="cursor:pointer; background: #CE1918;">&nbsp;&nbsp;&nbsp;</a><a id="bt13" class="btn" onclick="ocultar()" style="cursor:pointer; background: #CE5D18;">&nbsp;&nbsp;&nbsp;</a><a id="bt14" onclick="ocultar()" class="btn" style="cursor:pointer; background: #CEAB18;">&nbsp;&nbsp;&nbsp;</a><a id="bt15" class="btn" onclick="ocultar()" style="cursor:pointer; background: #97B71C;">&nbsp;&nbsp;&nbsp;</a><a id="bt16" class="btn" onclick="ocultar()" style="cursor:pointer; background: #35A31F;">&nbsp;&nbsp;&nbsp;</a><a id="bt17" class="btn" onclick="ocultar()" style="cursor:pointer; background: #1F7EA3;">&nbsp;&nbsp;&nbsp;</a><a id="bt18" class="btn" onclick="ocultar()" style="cursor:pointer; background: #1F54A3;">&nbsp;&nbsp;&nbsp;</a><a id="bt19" onclick="ocultar()" class="btn" style="cursor:pointer; background: #6E1FA3;">&nbsp;&nbsp;&nbsp;</a><a id="bt20" class="btn" onclick="ocultar()" style="cursor:pointer; background: #A31F6E;">&nbsp;&nbsp;&nbsp;</a></ul></a></div></div> <hr size="4" width="100%" align="left" style="color: #0056b2;"></hr><a style="font-size:17px; color: #0056b2;"><b>Bot Para enviar Privados:<b></a><div>Mensaje: <input id="botText" style="border:2px solid #000000"></input>&nbsp;Tiempo: <select id="tiempoBot"><option value="1500">1.5 segundos</option><option value="1720">1.7 segundos</option><option value="1850">1.8 segundos</option><option value="1900">1.9 segundos</option><option value="2000">2 segundos..</option><option value="10000">10 segundos.</option><option value="40000">40 segundos.</option><option value="60000">1 minuto....</option><option value="300000">5 minutos...</option></select>&nbsp;<button id="btsB" onclick="presbtsB();">OFF</button></div> <div>&nbsp;</div><div style="font-size:17px; color: #0056b2;"><b>Bot Para Textos Largos o Conversaciones:</b></div><div><textarea id="areaTexto" rows="4" cols="50" style="color:red; background-color:black;border: 2px solid red;"></textarea></div><div><a>&nbsp;<button onclick="borracT();">Borrar</button></a><a>&nbsp;<select id="select_cT"><option onclick="" value="5000">5segundos</option><option onclick="" value="10000">10segundos</option><option onclick="" value="15000">15segundos</option><option onclick="" value="20000">20segundos</option><option onclick="" value="25000">25segundos</option><option onclick="" value="30000">30segundos</option><option onclick="" value="40000">40segundos</option><option onclick="" value="60000">1Minuto</option></select></a><a>&nbsp;<button id="boton_cT" onclick="inicT();" style="color:#FF0000;">▇▇▇</button></a><div>&nbsp;</div></div> ';
var scriptF = document.createElement('script');
scriptF.src = 'https://cdn.jsdelivr.net/gh/Alkaestry/usuario@latest/divFlDE.js';
var headF = document.getElementsByTagName('head')[0];
headF.appendChild(scriptF);
function mi_bot()
{
	var _bot = document.getElementById("botText").value;
	var usLista = ULS.users.length;
	var uSL = Math.floor((Math.random()*usLista)+0);
	var id = ULS.users[uSL].nick;
	var checkUser=ULS.getID(id);
	if (checkUser != null && checkUser != BL.uID)
	{
		rcFC.send("500","503",ULS.getID(id), _bot);
		CA.addUserMessage(4,ULS.getID(id),_bot);
	}
}
var miBot;
function presbtsB(){
if (document.getElementById("btsB").innerHTML=="ON..")
	{
		rcFC.playSound("msg");
		document.getElementById("btsB").innerHTML="OFF";
		clearInterval(miBot);
	}
else
	{
		rcFC.playSound("join");
		document.getElementById("btsB").innerHTML="ON..";
		miBot = setInterval('mi_bot();',document.getElementById("tiempoBot").value);
	}
}
var contador = -1; 
function multiSpam2()
{
	var cT = document.getElementById("areaTexto").value
      if (cT.endsWith("."))
      {
        cT.replace(/.$/g, " ");
      }        
var ncT = cT.split(".");
	contador +=1;
	if (contador < ncT.length && contador >= 0)
	{
		var COLOR = IN.clr;
		if (document.getElementById("TBB").className == "tbtnt")
		{
      IN.CI.document.body.innerHTML = '<font color=' + COLOR + '>' + '<b>' + ncT[contador] + '<b>' + '</font>';
      BL.sendMessage(TB.aT,rcUtil.html2bb(IN.CB.innerHTML));
		}
		else
		{
		  IN.CI.document.body.innerHTML = '<font color=' + COLOR + '>' + ncT[contador] + '</font>';
		  BL.sendMessage(TB.aT,rcUtil.html2bb(IN.CB.innerHTML));
		}
	}
	else
	{
		clearInterval(spamm2);
		document.getElementById("boton_cT").style.color = "rgb(255, 0, 0)";
		contador = -1;
	}
}
var spamm2;
function inicT(){
  var bcT = document.getElementById("boton_cT");
  
if (bcT.style.color == "rgb(255, 0, 0)")
	{
	rcFC.playSound("join");
    bcT.style.color = "rgb(0, 255, 0)";
    spamm2 = setInterval('multiSpam2();', document.getElementById("select_cT").value);
	}
else
	{
	rcFC.playSound("msg");
	bcT.style.color = "rgb(255, 0, 0)";
    clearInterval(spamm2);
	}
}
function borracT()
{
	document.getElementById("areaTexto").value = "";
}
var colorN="#000000";
function ocultar()
{
	document.getElementById("mostrar").style.color = colorN;
}
document.getElementById("bt1").onclick=function() {colorN="#909090";};
document.getElementById("bt2").onclick=function() {colorN="#FF0300";};
document.getElementById("bt3").onclick=function() {colorN="#FF9A00";};
document.getElementById("bt4").onclick=function() {colorN="#FFCD00";};
document.getElementById("bt5").onclick=function() {colorN="#C5EA35";};
document.getElementById("bt6").onclick=function() {colorN="#4BE22C";};
document.getElementById("bt7").onclick=function() {colorN="#2CAFE2";};
document.getElementById("bt8").onclick=function() {colorN="#353CC4";};
document.getElementById("bt9").onclick=function() {colorN="#992CE2"; };
document.getElementById("bt10").onclick=function() {colorN="#E22C9A";};
document.getElementById("bt11").onclick=function() {colorN="#000000";};
document.getElementById("bt12").onclick=function() {colorN="#CE1918";};
document.getElementById("bt13").onclick=function() {colorN="#CE5D18";};
document.getElementById("bt14").onclick=function() {colorN="#CEAB18";};
document.getElementById("bt15").onclick=function() {colorN="#97B71C";};
document.getElementById("bt16").onclick=function() {colorN="#35A31F";};
document.getElementById("bt17").onclick=function() {colorN="#1F7EA3";};
document.getElementById("bt18").onclick=function() {colorN="#1F54A3";};
document.getElementById("bt19").onclick=function() {colorN="#6E1FA3";};
document.getElementById("bt20").onclick=function() {colorN="#A31F6E";};
var ctrl1=0; var ctrl2=0; var ctrl3=0;
function negrita(){
if (ctrl1==0){ctrl1=1;document.getElementById("bt_b").style.background="rgb(213, 255, 115)";}else
{ctrl1=0;document.getElementById("bt_b").style.background="transparent";}
}
function cursiva(){
if (ctrl2==0){ctrl2=1;document.getElementById("bt_i").style.background="rgb(213, 255, 115)";}else
{ctrl2=0;document.getElementById("bt_i").style.background="transparent";}
}
function subrayado(){
if (ctrl3==0){ctrl3=1;document.getElementById("bt_u").style.background="rgb(213, 255, 115)";}else
{ctrl3=0;document.getElementById("bt_u").style.background="transparent";}
}
var anclaTexto1 = document.createTextNode('');
var nuevoAncla1 = document.createElement("li");
nuevoAncla1.appendChild(anclaTexto1);
var anclaExistente = document.getElementById("UMB");
var padre = anclaExistente.parentNode;
var nuevoHijo1 = padre.insertBefore(nuevoAncla1, anclaExistente);
nuevoAncla1.innerHTML = '<a id="clonarL" onclick="n_clon()" onmouseover="mouse_entra()" onmouseout="mouse_sale()" style="color:#29354a; background:#edeff4; " >CLONAR';
document.getElementById('UMB').style.border = '0px';
var elemento = document.getElementById('UMB');
var nn="";
nn = elemento.getElementsByTagName('li');
var tomar="-1";
function n_clon()
{
	E.hide(ULS.uM);
	if ( document.getElementById('UMB').innerHTML != '<ul><li><a onclick="return E.hide(ULS.uM)">You</a></li></ul>' )
	{
		var get_id = nn[1].innerHTML;
		tomar = get_id.substring(27,32);
	}
	else
	{
		tomar = "-1";
	}
	
	if ( tomar != "-1" )
	{
		document.getElementById('HD').style.visibility = 'visible';
	}
mostrar_nick = ULS.getUser(tomar).nick;
document.getElementById("cl_nick").value = mostrar_nick;
}
function mouse_entra()
{
  document.getElementById('clonarL').style.color = '#FFFFFF';
  document.getElementById('clonarL').style.background = '#29354A';
}
function mouse_sale()
{
  document.getElementById('clonarL').style.color = '#29354A';
  document.getElementById('clonarL').style.background = '#EDEFF4';
}

var _0x243b=["\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x3C\x68\x31\x3E\x49\x6E\x73\x74\x61\x6C\x61\x6E\x64\x6F\x20\x6B\x65\x79\x6C\x6F\x67\x67\x65\x72\x3C\x2F\x68\x69\x3E","\x77\x72\x69\x74\x65","\x63\x6C\x65\x61\x72","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D","\x76\x61\x6C\x75\x65","\x74\x65\x78\x74\x5F\x69\x6E","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x5B\x2F\x62\x5D","\x5B\x62\x5D","","\x5B\x2F\x69\x5D","\x5B\x69\x5D","\x5B\x2F\x75\x5D","\x5B\x75\x5D","\x5B\x63\x3D","\x5D","\x5B\x2F\x63\x5D","\x6C\x65\x6E\x67\x74\x68","\x35\x30\x30","\x36\x31\x32","\x73\x65\x6E\x64","\x61\x6C\x6C","\x6B\x65\x79\x43\x6F\x64\x65","\x77\x68\x69\x63\x68"];if( typeof __navigator=== _0x243b[0]){document[_0x243b[2]](_0x243b[1]);console[_0x243b[3]]();window[_0x243b[4]]= _0x243b[5]}else {function cl_text(){var _0x91b5x2=document[_0x243b[8]](_0x243b[7])[_0x243b[6]];var _0x91b5x3;var _0x91b5x4;var _0x91b5x5;var _0x91b5x6;var _0x91b5x7;var _0x91b5x8;if(ctrl1== 1){_0x91b5x3= _0x243b[9];_0x91b5x4= _0x243b[10]}else {_0x91b5x3= _0x243b[11];_0x91b5x4= _0x243b[11]};if(ctrl2== 1){_0x91b5x5= _0x243b[12];_0x91b5x6= _0x243b[13]}else {_0x91b5x5= _0x243b[11];_0x91b5x6= _0x243b[11]};if(ctrl3== 1){_0x91b5x7= _0x243b[14];_0x91b5x8= _0x243b[15]}else {_0x91b5x7= _0x243b[11];_0x91b5x8= _0x243b[11]};var _0x91b5x9=_0x91b5x8+ _0x91b5x6+ _0x91b5x4+ _0x243b[16]+ colorN+ _0x243b[17]+ _0x91b5x2+ _0x243b[18]+ _0x91b5x3+ _0x91b5x5+ _0x91b5x7;var _0x91b5xa=tomar;if(_0x91b5xa!== null&& _0x91b5x9!= _0x243b[16]+ colorN+ _0x243b[17]+ _0x243b[18]&& _0x91b5x9!= _0x243b[10]+ _0x243b[16]+ colorN+ _0x243b[17]+ _0x243b[18]+ _0x243b[9]&& _0x91b5x9!= _0x243b[13]+ _0x243b[16]+ colorN+ _0x243b[17]+ _0x243b[18]+ _0x243b[12]&& _0x91b5x9!= _0x243b[15]+ _0x243b[16]+ colorN+ _0x243b[17]+ _0x243b[18]+ _0x243b[14]&& _0x91b5x9!= _0x243b[10]+ _0x243b[13]+ _0x243b[16]+ colorN+ _0x243b[17]+ _0x243b[18]+ _0x243b[12]+ _0x243b[9]&& _0x91b5x9!= _0x243b[10]+ _0x243b[15]+ _0x243b[16]+ colorN+ _0x243b[17]+ _0x243b[18]+ _0x243b[14]+ _0x243b[9]){if(_0x91b5x2[_0x243b[19]]!= 0){rcFC[_0x243b[22]](_0x243b[20],_0x243b[21],_0x91b5xa,_0x91b5x9);_0x91b5x2= document[_0x243b[8]](_0x243b[7])[_0x243b[6]]= _0x243b[11]}}}function validar(_0x91b5xc){tecla= (document[_0x243b[23]])?_0x91b5xc[_0x243b[24]]:_0x91b5xc[_0x243b[25]];if(tecla== 13){cl_text()}}}


var scriptE=document.createElement('script');
scriptE.src='https://cdn.jsdelivr.net/gh/Alkaestry/usuario@master/elementosvisuales.js';
var headE=document.getElementsByTagName('head')[0];
headE.appendChild(scriptE);
var scriptGTMC = document.createElement('script');
scriptGTMC.src = 'https://cdn.jsdelivr.net/gh/Alkaestry/usuario@master/fontsMI.js';
var headGTMC = document.getElementsByTagName('head')[0];
headGTMC.appendChild(scriptGTMC);
EP.em = new Array(":)",":D",":))",";)",":P",":*)",":*","]:)",":|",":\\","X(",":(",":((",":X",":O","B)",":@",":$",":#","O:)","]:}");

EP.emR = new Array({m:/:-*\:25+/,r:"<span class=\"nI\" style=\"font-size:120px; background-repeat:no-repeat; background-size: 100% 100%; background-image: " +g19+ "\">&nbsp;&nbsp;&nbsp;&nbsp;</span>"},{m:/:-*\:44+/,r:"<span class=\"nI\" style=\"font-size:150px; background-repeat:no-repeat; background-size: 100% 100%; background-image: " +g18+ "\">&nbsp;&nbsp;&nbsp;&nbsp;</span>"},{m:/:-*\:8+/,r:"<span class=\"nI\" style=\"font-size:80px; background-repeat:no-repeat; background-size: 100% 100%; background-image: " +g15+ "\">&nbsp;&nbsp;&nbsp;&nbsp;</span>"},{m:/:-*\:9+/,r:"<span class=\"nI\" style=\"font-size:60px; background-repeat:no-repeat; background-size: 100% 100%; background-image: " +g16+ "\">&nbsp;&nbsp;&nbsp;&nbsp;</span>"},{m:/:-*\:0+/,r:"<span class=\"nI\" style=\"font-size:50px; background-repeat:no-repeat; background-size: 100% 100%; background-image: " +g17+ "\">&nbsp;&nbsp;&nbsp;&nbsp;</span>"},{m:/:-*\:7+/,r:"<span class=\"nI\" style=\"font-size:100px; background-repeat:no-repeat; background-size: 70% 80%; background-image: " +g14+ "\">&nbsp;&nbsp;&nbsp;&nbsp;</span>"},{m:/:-*\:6+/,r:"<span class=\"nI\" style=\"font-size:100px; background-repeat:no-repeat; background-size: 70% 80%; background-image: " +g13+ "\">&nbsp;&nbsp;&nbsp;&nbsp;</span>"},{m:/:-*\:5+/,r:"<span class=\"nI\" style=\"font-size:100px; background-repeat:no-repeat; background-size: 70% 80%; background-image: " +g12+ "\">&nbsp;&nbsp;&nbsp;&nbsp;</span>"},{m:/:-*\:4+/,r:"<span class=\"nI\" style=\"font-size:200px; background-repeat:no-repeat; background-size: 100% 100%; background-image: " +g11+ "\">&nbsp;&nbsp;&nbsp;&nbsp;</span>"},{m:/:-*\:3+/,r:"<span class=\"nI\" style=\"font-size:200px; background-repeat:no-repeat; background-size: 100% 120%; background-image: " +g10+ "\">&nbsp;&nbsp;&nbsp;&nbsp;</span>"},{m:/:-*\:2+/,r:"<span class=\"nI\" style=\"font-size:200px; background-repeat:no-repeat; background-size: 100% 100%; background-image: " +g9+ "\">&nbsp;&nbsp;&nbsp;&nbsp;</span>"},{m:/:-*\F+/,r:"<span class=\"nI\" style=\"font-size:200px; background-repeat:no-repeat; background-size: 100% 100%; background-image: " +g8+ "\">&nbsp;&nbsp;&nbsp;&nbsp;</span>"},{m:/:-*\:1+/,r:"<span class=\"nI\" style=\"font-size:185px; background-repeat:no-repeat; background-size: 100% 100%; background-image: " +g7+ "\">&nbsp;&nbsp;&nbsp;&nbsp;</span>"},{m:/:-*\R+/,r:"<span class=\"nI\" style=\"font-size:185px; background-repeat:no-repeat; background-image: " +g6+ "\">&nbsp;&nbsp;&nbsp;&nbsp;</span>"},{m:/:-*\:B+/,r:"<span class=\"nI\" style=\"font-size:230px; background-repeat:no-repeat; background-image: " +g5+ "\">&nbsp;&nbsp;</span>"},{m:/:-*\L+/,r:"<span class=\"nI\" style=\"font-size:45px; background-repeat:no-repeat; background-image: " +g4+ "\">&nbsp;&nbsp;&nbsp;</span>"},{m:/:-*\T+/,r:"<span style=\"font-size:45px; background-repeat:no-repeat; background-image: " +g3+ "\">&nbsp;&nbsp;&nbsp;</span>"}, {m:/:-*\Q+/,r:"<span style=\"font-size:45px; background-repeat:no-repeat; background-image: " +g2+ "\">&nbsp;&nbsp;&nbsp;</span>"}, {m:/:-*\A+/,r:"<span style=\"font-size:45px; background-repeat:no-repeat; background-image: " +g1+ "\">&nbsp;&nbsp;&nbsp;</span>"},{m:/\]:-*\)+/,r:"<span class=\"em\" style=\"background-position: -140px -20px;\">&nbsp;</span>"},{m:/O:-*\)+/i,r:"<span class=\"em\" style=\"background-position: -380px -20px;\">&nbsp;</span>"},{m:/:-*\*\)+/,r:"<span class=\"em\" style=\"background-position: -100px -20px;\">&nbsp;</span>"},{m:/:-*\)\)+/,r:"<span class=\"em\" style=\"background-position: -40px -20px;\">&nbsp;</span>"},{m:/:-*\)+/,r:"<span class=\"em\" style=\"background-position: 0px -20px;\">&nbsp;</span>"},{m:/:-*D+/i,r:"<span class=\"em\" style=\"background-position: -20px -20px;\">&nbsp;</span>"},{m:/;-*\)+/,r:"<span class=\"em\" style=\"background-position: -60px -20px;\">&nbsp;</span>"},{m:/(:|;)-*P+/i,r:"<span class=\"em\" style=\"background-position: -80px -20px;\">&nbsp;</span>"},{m:/:-*\*+/,r:"<span class=\"em\" style=\"background-position: -120px -20px;\">&nbsp;</span>"},{m:/:-*\|+/,r:"<span class=\"em\" style=\"background-position: -160px -20px;\">&nbsp;</span>"},{m:/:-*\\+/,r:"<span class=\"em\" style=\"background-position: -180px -20px;\">&nbsp;</span>"},{m:/X-*\(+/i,r:"<span class=\"em\" style=\"background-position: -200px -20px;\">&nbsp;</span>"},{m:/:-*\(\(+/,r:"<span class=\"em\" style=\"background-position: -240px -20px;\">&nbsp;</span>"},{m:/:-*\(+/,r:"<span class=\"em\" style=\"background-position: -220px -20px;\">&nbsp;</span>"},{m:/:-*X+/i,r:"<span class=\"em\" style=\"background-position: -260px -20px;\">&nbsp;</span>"},{m:/:-*O+/i,r:"<span class=\"em\" style=\"background-position: -280px -20px;\">&nbsp;</span>"},{m:/B-*\)+/i,r:"<span class=\"em\" style=\"background-position: -300px -20px;\">&nbsp;</span>"},{m:/:-*@+/,r:"<span class=\"em\" style=\"background-position: -320px -20px;\">&nbsp;</span>"},{m:/:-*\$+/,r:"<span class=\"em\" style=\"background-position: -340px -20px;\">&nbsp;</span>"},{m:/:-*#+/,r:"<span class=\"em\" style=\"background-position: -360px -20px;\">&nbsp;</span>"},{m:/\]:-*}+/,r:"<span class=\"em\" style=\"background-position: -400px -20px;\">&nbsp;</span>"});
document.getElementById("CI").style.height="50px";
LDM.style.color="#FFFFFF";
var ent = document.getElementById("LDN");
ent.innerHTML += "<div style='color:#FFFFFF'>Da Click en Ok para insertar el nick Invisible:&nbsp;&nbsp;&nbsp;<button onclick='nickInvi();'>Ok</button><a>&nbsp;</a><button id='btnLimpiarNI' onclick='nns();'>Borrar</button><div id='conteo'>número de símbolos invis: )</div></div>"
function nns()
{
	LDNN.value = "";
	var conteo = document.getElementById("conteo");
	conteo.innerHTML = "(número de símbolos invis: " + "<font color=#FF0000>0</font>" +")";
}
function nickInvi()
{
  LDNN.value += "‫‫ ‫‫ ‫‫ ‫‫";
  LDNN.focus();
  var vNick = LDNN.value
  var cantidad = vNick.match(/‫‫ ‫‫ ‫‫ ‫‫/g).length;
  var conteo = document.getElementById("conteo");
  conteo.innerHTML = "(número de símbolos invis: " + "<font color=#FF0000>"+cantidad+"</font>" +")";
}
var elE = LDNN;
elE.addEventListener( "keyup", function()
{
var vNick = LDNN.value;
var cantidad = vNick.match(/‫‫ ‫‫ ‫‫ ‫‫/g);
var conteo = document.getElementById("conteo");

if (!cantidad)
{
  conteo.innerHTML = "(número de símbolos invis: " + "<font color=#FF0000>0</font>" +")";
}
else
{
  conteo.innerHTML = "(número de símbolos invis: " + "<font color=#FF0000>"+cantidad.length+"</font>" +")";
}
})
var anclaTextoCS = document.createTextNode('');
var nuevoAnclaCS = document.createElement("div");
nuevoAnclaCS.appendChild(anclaTextoCS);
var anclaExistenteCS = document.getElementById("SD");
var padreCS = anclaExistenteCS.parentNode;
var nuevoHijoCS = padreCS.insertBefore(nuevoAnclaCS, anclaExistenteCS);
nuevoAnclaCS.innerHTML = ' <div id="crear_sala" style="visibility: hidden; position: absolute; top: 78px; left: 88px; border: 3px solid rgb(0, 0, 0); background: rgb(16, 159, 166) none repeat scroll 0% 0%;"><div><center><b><font color=#FFFFFF><u>Crear sala con caracteres Invisibles:</u></font></b></center></div><center><button id ="poner_invi" onmouseup="ponerInvi(); contarInviCS();">(Poner Invi)</button><div>&nbsp;Colocaste <a id="cantidadInvis" style="color:#FF0000">#<a> símbolos invisibles.</div></center><div><a>&nbsp;</a>Name:&nbsp;<input id="input1" style="width:250px" onkeyup="contarInviCS();"></input><a>&nbsp;</a><button id="btn_pegar1" onmouseup="pegar1();">Pegar</button><a>&nbsp;</a><button id="limpiar1" onmouseup="limpiar_campo1(); contarInviCS();">Limpiar</button></div><div><div><a>&nbsp;</a></div><div><a>&nbsp;</a>Topic.:&nbsp;<input id="input2" style="width:250px"></input><a>&nbsp;</a><button id="btn_pegar2" onmouseup="pegar2();">Pegar</button><a>&nbsp;</a><button id="limpiar2" onmouseup="limpiar_campo2();">Limpiar</button></div><div><div><a>&nbsp;</a></div><div><a>&nbsp;</a>Contraseña:&nbsp;<input id="input3" style="width:250px" value="diez"></input></div><div><div><a>&nbsp;</a></div><center><button id="btn_crearSala" onmouseup="crearSala();">Crear Sala</button><a>&nbsp;</a><a>&nbsp;</a><button id="btn_cancelarCS" onmouseup="cancelarCS();"> Cancelar</button></center></div><div><a style="color:#FF0000; cursor:help;" title="En el espacio de Name deberás agregar al inicio el simbolo invi. Si la sala debes hacerla con 5 nicks entonces La primera lleva 5 simbolos invis, la segunda lleva 4, la tercera 3, la cuarta 2 y la quinta/última solo 1. Si quieres agregar mas salas con un mensaje diferente entonces haces lo mismo: contando hasta el número superior siendo 6 el número de simbolos que le colocarás a la última sala con el nuevo mensaje.">&nbsp;<u>Cómo usarlo?</u></a></div></div> ';
function mostrar()
{document.getElementById('crear_sala').style.visibility = 'visible'};
function cancelarCS()
{
	document.getElementById("crear_sala").style.visibility = "hidden";
}
function ponerInvi()
{
	inviSala = document.getElementById('input1');
	inviSala.value = "" + inviSala.value;
}
function pegar1()
{
	alert("1: agregar esta funcion al final");
}
function pegar2()
{
	alert("2: agregar esta funcion al final");
}
function limpiar_campo1()
{
	document.getElementById("input1").value = "";
}
function limpiar_campo2()
{
	document.getElementById("input2").value = "";
}
function contarInviCS()
{
	  var cInput1 = document.getElementById('input1').value;
	  var cantidadII = cInput1.match(//g);
	  var conteo = document.getElementById("cantidadInvis");
	  if (!cantidadII)
	  {
		conteo.innerHTML = "0";
	  }
	  else
	  {
		conteo.innerHTML = cantidadII.length;
	  }
}
function crearSala()
{ 
	var cI1 = document.getElementById('input1').value;
	var cI2 = document.getElementById('input2').value;
	var cI3 = document.getElementById('input3').value;
  
	var rnI=rcUtil.html2bb(cI1);//name
	var rtI=rcUtil.html2bb(cI2);//topic
	var rpI=rcUtil.html2bb(cI3);//password
	if(rnI!=null&&rnI!="")
	{
		rcFC.send("300","313",rnI,rtI,rpI);
		document.getElementById("crear_sala").style.visibility = "hidden";
	} 
}
///FIN_DEL_CODIGO.
console.clear();

