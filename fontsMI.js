	function funcMCol()
	{
	ele_boton = document.getElementById("form_colores");
		if ( ele_boton.style.visibility == "hidden" )
		{
		ele_boton.style.visibility = "visible";
		}
		else
		{
		ele_boton.style.visibility = "hidden";
		}
	}
	function consEs(miVariable)
	{
	var miVariable; 
	if ( miVariable.value == "" )
	{miVariable.style.background = "#FFFFFF";}
	else
	{miVariable.style.background = "#"+miVariable.value;}
	return;
	}
	function col_sel1()
	{
		var sel1 = document.getElementById("sel1");
		consEs(sel1);
	}
	function col_sel2()
	{
		var sel2 = document.getElementById("sel2");
		consEs(sel2);
	}
	function col_sel3()
	{
		var sel3 = document.getElementById("sel3");
		consEs(sel3);
	}
	function col_sel4()
	{
		var sel4 = document.getElementById("sel4");
		consEs(sel4);
	}
	function col_sel5()
	{
		var sel5 = document.getElementById("sel5");
		consEs(sel5);
	}
	function col_sel6()
	{
		var sel6 = document.getElementById("sel6");
		consEs(sel6);
	}
function cambiar_modo()
{
  var t_ele = document.getElementById("c_btn");
  
  if ( t_ele.innerHTML == "Modo1" )
  {
    t_ele.innerHTML = "Modo2";
  }
  else
  {
    t_ele.innerHTML = "Modo1";
  }
}
function abrirPag()
{
window.open("", "_blank");
}
function abrirF(){document.getElementById("flores").style.visibility="visible";}
function cerrarF(){document.getElementById("flores").style.visibility="hidden";}
function F_1(){IN.set(' [b][c=#FF037F]❀❀[/c][c=#238C00]ಮ[/c][/b] ');}
function F_2(){IN.set(' [b][c=#FF037F]✿✿[/c][c=#238C00]ಮ[/c][/b] ');}
function F_3(){IN.set(' [b][c=#FF037F]✿[/c][c=#238C00]ಮ[/c][/b] ');}
function F_4(){IN.set(' [b][c=#B300B3]✿✿[/c][c=#238C00]ಮ[/c][/b] ');}
function F_5(){IN.set(' [b][c=#FF99E5]✿✿[/c][c=#238C00]ಮ[/c][/b] ');}
function F_6(){IN.set(' [b][c=#FFCD00]✿✿[/c][c=#238C00]ಮ[/c][/b] ');}
function F_7(){IN.set(' [b][c=#FF037F]இ[/c][c=#238C00]ڿڰۣ-ڰۣ—[/c][/b] ');}
function F_8(){IN.set(' [b][c=#238C00]--------{---([/c][c=#FF037F]@[/c][/b] ');}
function F_9(){IN.set(' [b][c=#B300B3]இ[/c][c=#238C00]ڿڰۣ-ڰۣ—[/c][/b] ');}
function F_10(){IN.set(' [b][c=#B300B3]❁[/c][c=#238C00]ಮ[/c][/b] ');}
function F_14(){IN.set(' [b][c=#FF037F]✿[/c][c=#238C00]ڿڰۣ-ڰۣ—[/c][/b] ');}
function d_color_1()
{
var rrrr = document.getElementById("tMC_1")
rrrr.style.background = rrrr.value;
}
function d_color_2()
{
var rrrr = document.getElementById("tMC_2")
rrrr.style.background = rrrr.value;
}
// funcion para insertar simbolos:
function insertS1()
{
IN.set(' ♫♬♪ ');
}
var myTe;
var r3;
var r3G;
var adiciones = "#000000 #000000";
var  limpia = 0;
function colPred1()
	{
	limpia = 1;
	document.getElementById("form_colores").style.visibility = "hidden";
	}
	function colPred2()
	{
	limpia = 2;
	document.getElementById("form_colores").style.visibility = "hidden";
	}
	function colPred3()
	{
	limpia = 3;
	document.getElementById("form_colores").style.visibility = "hidden";
	}
var salidaTexto;
function pSMas()
{
  myTe = CI.window.document.getElementById("B").innerHTML;//debe ir dentro de la funcion.
  function fuentes(a)
{
		var nuevasFuentes = a;
		n_t = nuevasFuentes.split("");
		var rText = myTe.replace(/a/g, n_t[0]).replace(/b/g, n_t[1]).replace(/c/g, n_t[2]).replace(/d/g, n_t[3]).replace(/e/g, n_t[4]).replace(/f/g, n_t[5]).replace(/g/g, n_t[6]).replace(/h/g, n_t[7]).replace(/i/g, n_t[8]).replace(/j/g, n_t[9]).replace(/k/g, n_t[10]).replace(/l/g, n_t[11]).replace(/m/g, n_t[12]).replace(/n/g, n_t[13]).replace(/ñ/g, n_t[14]).replace(/o/g, n_t[15]).replace(/p/g,n_t[16]).replace(/q/g,n_t[17]).replace(/r/g, n_t[18]).replace(/s/g, n_t[19]).replace(/t/g, n_t[20]).replace(/u/g, n_t[21]).replace(/v/g, n_t[22]).replace(/w/g, n_t[23]).replace(/x/g, n_t[24]).replace(/y/g, n_t[25]).replace(/z/g, n_t[26]).replace(/A/g, n_t[27]).replace(/B/g, n_t[28]).replace(/C/g, n_t[29]).replace(/D/g, n_t[30]).replace(/E/g, n_t[31]).replace(/F/g, n_t[32]).replace(/G/g, n_t[33]).replace(/H/g, n_t[34]).replace(/I/g, n_t[35]).replace(/J/g, n_t[36]).replace(/K/g, n_t[37]).replace(/L/g, n_t[38]).replace(/M/g, n_t[39]).replace(/N/g, n_t[40]).replace(/Ñ/g, n_t[41]).replace(/O/g, n_t[42]).replace(/P/g, n_t[43]).replace(/Q/g, n_t[44]).replace(/R/g, n_t[45]).replace(/S/g, n_t[46]).replace(/T/g, n_t[47]).replace(/U/g, n_t[48]).replace(/V/g, n_t[49]).replace(/W/g, n_t[50]).replace(/X/g, n_t[51]).replace(/Y/g, n_t[52]).replace(/Z/g, n_t[53]);
		var r2= rText;
		r3 = r2.replace("+", "").replace(/&nbsp;/g, " ").replace(/&ՌβϚƿ;/g, " ").replace(/&ภ๒รթ;/g, " ").replace(/&ᾖḇṧῤ;/g, " ").replace(/&ᏁbsᏢ;/g, " ").replace(/&ՌᏰຮᑬ;/g, " ").replace(/&Ǹʙ＄ƿ;/g, " ").replace(/&Ǹʙ＄ƿ;/g, " ").replace(/&ɲℬᏕ℘;/g, " ").replace(/&ո♭Ֆр;/g, " ").replace(/&ᶮᵇᶳᵖ;/g, " ").replace(/&Ոცﻯƿ;/g, " ").replace(/&ṈᏰຮᑬ;/g, " ").replace(/&ⁿᵇˢᵖ;/g, " ").replace(/&иჩჰρ;/g, " ").replace(/&ИßՏP;/g, " ").replace(/&ИßSṖ;/g, " ").replace(/&ᏁᏰᏕᎮ;/g, " ").replace(/&ивѕρ;/g, " ").replace(/&nᏰຮᑬ;/g, " ").replace(/&הЪ૬Ϸ;/g, " ").replace(/&ՌՅՏρ;/g, " ").replace(/&И85P;/g, " ").replace(/&ⓝⓑⓢⓟ;/g, " ").replace(/&ηbSǷ;/g, " ").replace(/&ﾢҌଌϸ;/g, " ").replace(/&ᑎᙖᔕᑭ;/g, " ").replace(/&uqsd;/g, " ").replace(/&nbsd;/g, " ").replace(/&ᴎBSԀ;/g, " ").replace(/&ղҍʂք;/g, " ").replace(/&ｎｂｓｐ;/g, " ").replace(/&ȠცƧק;/g, " ");
		//Excepciones:
		salidaTexto = r3.replace(/<Ᏸᖇ>|<ჩΓ>|<ßR>|<ßŔ>|<ᏰᏒ>|<вя>|<ЪЯ>|<Յʀ>|<8Я>|<ⓑⓡ>|<br>|<ҌЯ>|<ᙖᖇ>|<ᵇʳ>|<bɹ>|<Bᴚ>|<ҍɾ>|<ｂｒ>|<ცԄ>|<ʙr>|<ℬℛ>|<bᏒ>|<♭r>|<βЯ>|<๒г>|<ḇṝ>|<ც२>/, "");
		
		// Enviar texto ya cambiado cuando la fuente elegida no tiene 2 caracteres en 1:
		var texto = salidaTexto.replace(/<Ᏸ>|<ჩ>|<ß>|<ß>|<Ᏸ>|<в>|<Ъ>|<Յ>|<8>|<ⓑ>|<Ҍ>|<ᙖ>|<ᵇ>|<q>|<B>|<ҍ>|<ｂ>|<ც>|<ʙ>|<β>|<๒>|<ḇ>/, "<b>").replace(/<\u002FᏰ>|<\u002Fჩ>|<\u002Fß>|<\u002Fß>|<\u002FᏰ>|<\u002Fв>|<\u002FЪ>|<\u002FՅ>|<\u002F8>|<\u002Fⓑ>|<\u002FҌ>|<\u002Fᙖ>|<\u002Fᵇ>|<\u002Fq>|<\u002FB>|<\u002Fҍ>|<\u002Fｂ>|<\u002Fც>|<\u002Fʙ>|<\u002Fβ>|<\u002F๒>|<\u002Fḇ>/, "</b>");
		var stexto = texto.split("");
		
		var tColor1 = document.getElementById("tMC_1").value;
		var tColor2 = document.getElementById("tMC_2").value;
		var nm;

		for (var i=0; i<stexto.length; i++)
		{
			if ( i % 2 == 0 )//si el indice(i) es par:
			{
				var nn = "<font color=" + tColor1 + ">" + stexto[i] + "</font>";
				nm += nn;
			}
			else // si i no es par:
			{
				var nt = "<font color=" + tColor2 + ">" + stexto[i] + "</font>";
				nm += nt;
			}
		var salidaD2Colores = nm.replace("undefined", "");
		}

		if ( texto != "" )
		{
			if (document.getElementById('TBB').className == "tbtn")//si no está en negrita:
			{
				var nnt = salidaD2Colores;
				var salidaF = nnt;
			}
			else//entonces, si lo está:
			{
				var nnt = salidaD2Colores ;
				var partir = nnt.slice(84,nnt.length-112)
				var salidaF = "<b>" + partir + "</b>";
			}

		var nb = salidaF.replace("undefined", "");
		return BL.sendMessage(TB.aT,rcUtil.html2bb(nb));
      console.log(nb)
		IN.CI.document.body.innerHTML="";
		nm="";
		}
}
	switch( document.getElementById("newFont").value )
	{
		//here
		case "_uno":
		salidaTexto = myTe.replace("+", "").replace(/a/g, "𝔞").replace(/b/g, "𝔟").replace(/c/g, "𝔠").replace(/d/g, "𝔡").replace(/e/g, "𝔢").replace(/f/g, "𝔣").replace(/g/g, "𝔤").replace(/h/g, "𝔥").replace(/i/g, "𝔦").replace(/j/g, "𝔧").replace(/k/g, "𝑘").replace(/l/g, "𝔩").replace(/m/g, "𝔪").replace(/n/g, "𝔫").replace(/ñ/g, "ῆ").replace(/o/g, "𝔬").replace(/p/g, "𝔭").replace(/q/g, "𝔮").replace(/r/g, "𝔯").replace(/s/g, "𝔰").replace(/t/g, "𝔱").replace(/u/g, "𝔲").replace(/v/g, "𝔳").replace(/w/g, "𝔴").replace(/x/g, "𝔵").replace(/y/g, "𝑦").replace(/z/g, "𝔷").replace(/A/g, "𝔄").replace(/B/g, "𝔅").replace(/C/g, "𝓒").replace(/D/g, "𝔇").replace(/E/g, "𝔈").replace(/F/g, "𝔉").replace(/G/g, "𝔊").replace(/H/g, "𝓗").replace(/I/g, "𝓘").replace(/J/g, "𝔍").replace(/K/g, "𝔎").replace(/L/g, "𝔏").replace(/M/g, "𝔐").replace(/N/g, "𝔑").replace(/N/g, "ῆ").replace(/O/g, "𝔒").replace(/P/g, "𝔓").replace(/Q/g, "𝔔").replace(/R/g, "𝓡").replace(/S/g, "𝔖").replace(/T/g, "𝔗").replace(/U/g, "𝔘").replace(/V/g, "𝔙").replace(/W/g, "𝔚").replace(/X/g, "𝔛").replace(/Y/g, "𝔜").replace(/Z/g, "𝓩");
		var texto = salidaTexto.replace("<𝔟𝔯>", "").replace(/&𝔫𝔟𝔰𝔭;/g, "");
		var stexto = texto.split(" ");

		var tColor1 = document.getElementById("tMC_1").value;
		var tColor2 = document.getElementById("tMC_2").value;
		var nm;

		for (var i=0; i<stexto.length; i++)
		{
			if ( i % 2 == 0 )//si el indice(i) es par:
			{
				var nn = "<font color=" + tColor1 + ">" + stexto[i] + "</font>";
				nm += nn + " ";
			}
			else // si i no es par:
			{
				var nt = "<font color=" + tColor2 + ">" + stexto[i] + "</font>";
				nm += nt + " ";
			}
		var salidaD2Colores = nm.replace("undefined", "").replace(/&𝔫𝔟𝔰𝔭;/g, "")//.replace(/<𝔟𝔯>/g, "<br>").replace(/<\u2F/g, "</b>");
		}

		if ( texto != "" )
		{
			if (document.getElementById('TBB').className == "tbtn")//si no está en negrita:
			{
				var nnt = salidaD2Colores;
				var salidaF = nnt;
			}
			else//entonces, si lo está:
			{
				var nnt = salidaD2Colores ;
				var salidaF = "<b>" + nnt.replace(/<𝔟>/g, "").replace(/<\u002F𝔟>/g, "") + "</b>";//partir;
			}

		var nb = salidaF.replace("undefined", "");
		BL.sendMessage(TB.aT,rcUtil.html2bb(nb));
		IN.CI.document.body.innerHTML="";
		nm="";
		}
		
	break;
	case "_dos":
		//here
		salidaTexto = myTe.replace("+", "").replace(/a/g, "𝒶").replace(/b/g, "𝒷").replace(/c/g, "𝒸").replace(/d/g, "𝒹").replace(/e/g, "𝑒").replace(/f/g, "𝒻").replace(/g/g, "𝑔").replace(/h/g, "𝒽").replace(/i/g, "𝒾").replace(/j/g, "𝒿").replace(/k/g, "𝓀").replace(/l/g, "𝓁").replace(/m/g, "𝓂").replace(/n/g, "𝓃").replace(/ñ/g, "ῆ").replace(/o/g, "𝑜").replace(/p/g, "𝓅").replace(/q/g, "𝓆").replace(/r/g, "𝓇").replace(/s/g, "𝓈").replace(/t/g, "𝓉").replace(/u/g, "𝓊").replace(/v/g, "𝓋").replace(/w/g, "𝓌").replace(/x/g, "𝓍").replace(/y/g, "𝓎").replace(/z/g, "𝓏").replace(/A/g, "𝔄").replace(/B/g, "𝔅").replace(/C/g, "𝓒").replace(/D/g, "𝔇").replace(/E/g, "𝔈").replace(/F/g, "𝔉").replace(/G/g, "𝔊").replace(/H/g, "𝓗").replace(/I/g, "𝓘").replace(/J/g, "𝔍").replace(/K/g, "𝔎").replace(/L/g, "𝔏").replace(/M/g, "𝔐").replace(/N/g, "𝔑").replace(/N/g, "ῆ").replace(/O/g, "𝔒").replace(/P/g, "𝔓").replace(/Q/g, "𝔔").replace(/R/g, "𝓡").replace(/S/g, "𝔖").replace(/T/g, "𝔗").replace(/U/g, "𝔘").replace(/V/g, "𝔙").replace(/W/g, "𝔚").replace(/X/g, "𝔛").replace(/Y/g, "𝔜").replace(/Z/g, "𝓩");
		var texto = salidaTexto.replace("<𝒷𝓇>", "").replace(/&𝓃𝒷𝓈𝓅;/g, "");;
		var stexto = texto.split(" ");

		var tColor1 = document.getElementById("tMC_1").value;
		var tColor2 = document.getElementById("tMC_2").value;
		var nm;

		for (var i=0; i<stexto.length; i++)
		{
			if ( i % 2 == 0 )//si el indice(i) es par:
			{
				var nn = "<font color=" + tColor1 + ">" + stexto[i] + "</font>";
				nm += nn + " ";
			}
			else // si i no es par:
			{
				var nt = "<font color=" + tColor2 + ">" + stexto[i] + "</font>";
				nm += nt + " ";
			}
		var salidaD2Colores = nm.replace("undefined", "").replace(/<𝒷𝓇>/g, "<br>").replace(/&𝓃𝒷𝓈𝓅;/g, "");//.replace(/<\u2F/g, "</b>");
		}

		if ( texto != "" )
		{
			if (document.getElementById('TBB').className == "tbtn")//si no está en negrita:
			{
				var nnt = salidaD2Colores;
				var salidaF = nnt;
			}
			else//entonces, si lo está:
			{
				var nnt = salidaD2Colores ;
				var salidaF = "<b>" + nnt.replace(/<𝒷>/g, "").replace(/<\u002F𝒷>/g, "") + "</b>";//partir;
			}
		var nb = salidaF.replace("undefined", "");
		BL.sendMessage(TB.aT,rcUtil.html2bb(nb));
		IN.CI.document.body.innerHTML="";
		nm="";
		}
	break;
	case "_cero":
      fuentes("abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_tres":
	  fuentes("ᾀᏰᏨᕍ⁅ᖴgᏲḭʝḳ℄ḾṈῆṎᑬQᖇຮtᙈעᏔჯẙẔABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_cuatro":
      fuentes("მჩეძპfცhἶქκlოиῆᎤρგΓჰtυ√wჯყzABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_cinco":
      fuentes("ÂßĈÐЄŦǤĦĪʖҚĿ♏ИῆØPҨRՏ†ЦVЩX￥ẔABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_seis":
      fuentes("ΛßƇDƐFƓĤĪĴҠĿMИῆ♡ṖҨŔSƬƱѴѠӾYZABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_siete":
      fuentes("ᏗᏰՇᎴᏋƒĢᏂᎥᏠᏦᏝᎷᏁῆᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_ocho":
      fuentes("αвς∂εƒցнɪĵƙℓɱиῆσρףяѕтƲνωχϓՀABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_nueve":
      fuentes("ᎯᏰᏨᕍḕᖴgᏲḭǰḳl๓nῆ๏ᑬqᖇຮtᙈvᏔჯẙẔABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_diez":
      fuentes("નЪ૮ԁ૯ԲցસіڙқԼறהῆଇϷ૧Я૬ҬμνயϰϓｚABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_once":
      fuentes("ԹՅՇԺƐԲցɧᎥʝƙℓʍՌῆʘρφʀՏԵՄעաχՎʑABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_doce":
      fuentes("48CD3F6HIJK1MИÑ0PQЯ57UVWXY248CD3F6HIJKLMNÑ0PQR57UVWXYZ");
	break;
	  case "_trece":
      fuentes("ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝñⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_cato":
      fuentes("ªb¢ÞÈF૬ɧÎjΚĻмηῆ◊ǷƍrS⊥µ√w×ýzABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_quince":
      fuentes("ΔҌﾧdﾼԲɢￃΙۆӃﾤϺﾢῆﾷϸϘЯଌȚȗѵ￦ҲעŻABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_dseis":
      fuentes("ᗩᙖᙅᗪᙓᖴᘜᕼIᒍKᒪᙏᑎῆOᑭᑫᖇᔕTᙀᐯᙎ᙭YᘔABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_dsiete":
      fuentes("ᵃᵇᶜᵈᵉᶠᵍʰᶤʲᵏˡᵐⁿῆᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_docho":
      fuentes("ɐqɔpǝɟɓɥıſʞlɯuñodbɹsʇnʌʍxʎzABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_dnueve":
      fuentes("∀BɔDƎℲGHIſʞlWᴎñOԀQᴚS⊥∩ᴧMXʎZABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_veinte":
      fuentes("ąҍçժҽƒցհìʝҟӀʍղῆ✿քզɾʂէմѵա×վՀABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_vuno":
      fuentes("ａｂｃｄｅｆｇｈｉｊｋｌｍｎñｏｐｑｒｓｔｕｖｗｘｙｚABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_vdos":
      fuentes("ᕱცᕳᗬӬ∮ʛஅɪلɮᄂ♏ȠňФקϤԄƧてʊᏉʬϪץʑABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_vtres":
      fuentes("ąც८ძ૯ʄ૭ҺɿڽқℓɱՈῆరƿҩ२ﻯ੮υ౮ω૪ყζABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_vcuatro":
      fuentes("ₐᵇᵓᵈₑᶠᵍʰᵢᶨᵏᶫᶬᶮῆₒᵖᵩͬᶳᵗᵤᵛᵚ×ᵧᶼABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_vcinco":
      fuentes("ᾀᏰᏨᕍ⁅ᖴgᏲḭᏧḳ℄๓ՌñṎᑬQᖇຮtᙈvᏔჯẙẔABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_vseis":
      fuentes("Aʙඋd㉫ƒＧħÏﻝĸし๓Ǹñ✿ƿqr＄†µvŴxƴzABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_vsiete":
      fuentes("ᎪbᏟᎠᎬfᎶhᎥjᏦᏞmᏁñᎾᏢqᏒsᏆuᏉᎳxᎽᏃABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_vocho":
      fuentes("Ⱥβ↻DƐƑƓǶįلҠL♏ՌῆoƿףЯϚTԱVచჯӋʑABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_vnueve":
      fuentes("ค๒ς๔єŦɠђเןкl๓ภÑ๏թợгรtยvฬxץzABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	  case "_treinta":
      fuentes("ᾆḇḉḓễḟḡḧἷjḵḺḿᾖῇỠῤǬṝṧṯῠṽᾧẍỹẐABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
	break;
	}
////////////////////////////////////////////////////////////////////////////////////////////////

	IN.clear();
	IN.doFocus();
}
function pGrad()
{
  myTe = CI.window.document.getElementById("B").innerHTML;//debe ir dentro de la funcion.
  
  function fuentesG(a, b)
  {
	if (b == "1")
	{
		var nnG = a;
		var n_t = nnG.split("");

		var rTextG = myTe.replace(/a/g, n_t[0]).replace(/b/g, n_t[1]).replace(/c/g, n_t[2]).replace(/d/g, n_t[3]).replace(/e/g, n_t[4]).replace(/f/g, n_t[5]).replace(/g/g, n_t[6]).replace(/h/g, n_t[7]).replace(/i/g, n_t[8]).replace(/j/g, n_t[9]).replace(/k/g, n_t[10]).replace(/l/g, n_t[11]).replace(/m/g, n_t[12]).replace(/n/g, n_t[13]).replace(/ñ/g, n_t[14]).replace(/o/g, n_t[15]).replace(/p/g,n_t[16]).replace(/q/g,n_t[17]).replace(/r/g, n_t[18]).replace(/s/g, n_t[19]).replace(/t/g, n_t[20]).replace(/u/g, n_t[21]).replace(/v/g, n_t[22]).replace(/w/g, n_t[23]).replace(/x/g, n_t[24]).replace(/y/g, n_t[25]).replace(/z/g, n_t[26]).replace(/A/g, n_t[27]).replace(/B/g, n_t[28]).replace(/C/g, n_t[29]).replace(/D/g, n_t[30]).replace(/E/g, n_t[31]).replace(/F/g, n_t[32]).replace(/G/g, n_t[33]).replace(/H/g, n_t[34]).replace(/I/g, n_t[35]).replace(/J/g, n_t[36]).replace(/K/g, n_t[37]).replace(/L/g, n_t[38]).replace(/M/g, n_t[39]).replace(/N/g, n_t[40]).replace(/Ñ/g, n_t[41]).replace(/O/g, n_t[42]).replace(/P/g, n_t[43]).replace(/Q/g, n_t[44]).replace(/R/g, n_t[45]).replace(/S/g, n_t[46]).replace(/T/g, n_t[47]).replace(/U/g, n_t[48]).replace(/V/g, n_t[49]).replace(/W/g, n_t[50]).replace(/X/g, n_t[51]).replace(/Y/g, n_t[52]).replace(/Z/g, n_t[53]);

		var r2= rTextG;
		r3G = r2.replace("+", "").replace("undefined", "").replace(/&nbsp;/g, " ").replace(/&ՌβϚƿ;/g, " ").replace(/&ภ๒รթ;/g, " ").replace(/&ᾖḇṧῤ;/g, " ").replace(/&ᏁbsᏢ;/g, " ").replace(/&ՌᏰຮᑬ;/g, " ").replace(/&Ǹʙ＄ƿ;/g, " ").replace(/&Ǹʙ＄ƿ;/g, " ").replace(/&ɲℬᏕ℘;/g, " ").replace(/&ո♭Ֆр;/g, " ").replace(/&ᶮᵇᶳᵖ;/g, " ").replace(/&Ոცﻯƿ;/g, " ").replace(/&ṈᏰຮᑬ;/g, " ").replace(/&ⁿᵇˢᵖ;/g, " ").replace(/&иჩჰρ;/g, " ").replace(/&ИßՏP;/g, " ").replace(/&ИßSṖ;/g, " ").replace(/&ᏁᏰᏕᎮ;/g, " ").replace(/&ивѕρ;/g, " ").replace(/&nᏰຮᑬ;/g, " ").replace(/&הЪ૬Ϸ;/g, " ").replace(/&ՌՅՏρ;/g, " ").replace(/&И85P;/g, " ").replace(/&ⓝⓑⓢⓟ;/g, " ").replace(/&ηbSǷ;/g, " ").replace(/&ﾢҌଌϸ;/g, " ").replace(/&ᑎᙖᔕᑭ;/g, " ").replace(/&uqsd;/g, " ").replace(/&nbsd;/g, " ").replace(/&ᴎBSԀ;/g, " ").replace(/&ղҍʂք;/g, " ").replace(/&ｎｂｓｐ;/g, " ").replace(/&ȠცƧק;/g, " ");
		//Excepciones (cada vez que se agrega una fuente agregar su respectiva excepcion a <br>):
		r4G = r3G.replace("undefined", "").replace(/<Ᏸᖇ>|<ᵇ\u036C>|<ჩΓ>|<ßR>|<ßŔ>|<ᏰᏒ>|<вя>|<ЪЯ>|<Յʀ>|<8Я>|<ⓑⓡ>|<br>|<ҌЯ>|<ᙖᖇ>|<ᵇʳ>|<bɹ>|<Bᴚ>|<ҍɾ>|<ｂｒ>|<ცԄ>|<ʙr>|<ℬℛ>|<bᏒ>|<♭r>|<βЯ>|<๒г>|<ḇṝ>|<ც२>/, "").replace(/<ᵇ>|<Ᏸ>|<ჩ>|<ß>|<ß>|<Ᏸ>|<в>|<Ъ>|<Յ>|<8>|<ⓑ>|<Ҍ>|<ᙖ>|<ᵇ>|<q>|<B>|<ҍ>|<ｂ>|<ც>|<ʙ>|<β>|<๒>|<ḇ>/, "<b>").replace(/<\u002FᏰ>|<\u002Fჩ>|<\u002Fß>|<\u002Fß>|<\u002FᏰ>|<\u002Fв>|<\u002FЪ>|<\u002FՅ>|<\u002F8>|<\u002Fⓑ>|<\u002FҌ>|<\u002Fᙖ>|<\u002Fᵇ>|<\u002Fq>|<\u002FB>|<\u002Fҍ>|<\u002Fｂ>|<\u002Fც>|<\u002Fʙ>|<\u002Fβ>|<\u002F๒>|<\u002Fḇ>/, "</b>");
		var textoG = r4G;// SALIDA DE TEXTO YA CON LOS CARACTERES (la fuente) CAMBIADOS.
		var tohex = new Array(256);
		var hex = "0123456789ABCDEF";
		var count = 0;
		for (x=0; x<16; x++)
		{
			for (y=0; y<16; y++)
				{
					tohex[count] = hex.charAt(x) + hex.charAt(y);
					count++;
				}
		}
		function ColorCode(hexcode)
		{
			if (hexcode.length == 7)
			{
				this.r = parseInt(hexcode.substring(1,3),16);
				this.g = parseInt(hexcode.substring(3,5),16);
				this.b = parseInt(hexcode.substring(5,7),16);
			}
			else if (hexcode.length == 6)
			{
				this.r = parseInt(hexcode.substring(0,2),16);
				this.g = parseInt(hexcode.substring(2,4),16);
				this.b = parseInt(hexcode.substring(4,6),16);
			}
			else
			{
				this.r = this.g = this.b = 0;
				alert("Error: ColorCode constructor failed");
			}
			if (isNaN(this.r)||isNaN(this.g)||isNaN(this.b))
			alert("Error: ColorCode constructor failed");
		}

		// ColorList constructor
		function ColorList(hexcodes)
		{
			var i = 0;
			var c = 0;
			this.codes = new Array(Math.round(hexcodes.length/7));
			while (i < hexcodes.length)
			{
				if (isNaN(parseInt(hexcodes.substring(i,i+6),16))) ++i;
				else 
				{
					this.codes[c] = new ColorCode(hexcodes.substring(i,i+6));
					i += 7;
					++c;
				}
			}
			this.len = c;
		}

		function interpolate (x1, y1, x3, y3, x2)
		{
			if (x3 == x1) return y1
			else return (x2-x1)*(y3-y1)/(x3-x1) + y1
		}

		// x=index of letter, y=number of letters, z=number of colors
		function lowcolorindex (x, y, z)
		{
			if (y == 1) return 0
			else return Math.floor( (x*(z-1))/(y-1) )
		}

		function hicolorindex (x, y, z, low)
		{ 
			if ( low*(y-1) == x*(z-1) ) return low
			else if (y == 1) return 0
			else return Math.floor( (x*(z-1))/(y-1) + 1 )
		}

		/////////////////////////////////////////////////
		var nT;
		var nR;
		function gradient (thetext,thecolors) 
		{
			var colors = new ColorList(thecolors);
			var numcolors = colors.len;
			var numchars = thetext.length;
			var rr = 0;
			var gg = 0;
			var bb = 0;
			var lci = 0; //lower color index
			var hci = 0; //high color index

			for (i=0; i<numchars; ++i) 
			{
				lci = lowcolorindex(i, numchars, numcolors);
				hci = hicolorindex(i, numchars, numcolors, lci);
				rr = Math.round(interpolate( lci/(numcolors-1), colors.codes[lci].r, hci/(numcolors-1), colors.codes[hci].r, i/(numchars-1)));
				gg = Math.round(interpolate( lci/(numcolors-1), colors.codes[lci].g, hci/(numcolors-1), colors.codes[hci].g, i/(numchars-1)));
				bb = Math.round(interpolate( lci/(numcolors-1), colors.codes[lci].b, hci/(numcolors-1), colors.codes[hci].b, i/(numchars-1)));
				/////
				var salida = "<font color=#" + tohex[rr] + tohex[gg] + tohex[bb] + ">" + thetext.charAt(i) + "</font>";
				nT += salida
				nR = nT.replace("undefined", "");
			}
		if (document.getElementById('TBB').className == "tbtn")//si no está en negrita:
		{
			var salidaG = nR;
		}
		else
		{
			var salidaG = "<b>" + nR + "</b>";
		}
		
		var tN = salidaG;
		var uT = tN.replace("undefined", "");
		BL.sendMessage(TB.aT,rcUtil.html2bb(uT));
		IN.CI.document.body.innerHTML="";
		nT="";
		nR="";
		}
		
		if ( myTe != "" )
		{
			// Aqui tomamos el texto y se lo pasamos a la funcion de arriba:
			var e_text = textoG;
			var r_t = e_text.replace("undefined", "").replace("<br>", "").replace("<b>", "").replace("</b>", "").replace("<i>", "").replace("</i>", "").replace("<u>", "").replace("</u>", "");
			// id de los select:
			if ( limpia == 0 )
			{
				var _sel1 = document.getElementById("sel1").value;
				var _sel2 = document.getElementById("sel2").value;
				var _sel3 = document.getElementById("sel3").value;
				var _sel4 = document.getElementById("sel4").value;
				var _sel5 = document.getElementById("sel5").value;
				var _sel6 = document.getElementById("sel6").value;
				//adiciones.
				adiciones = _sel1 + _sel2 + _sel3 + _sel4 + _sel5 + _sel6;
			}
			if ( limpia == 1 )
			{adiciones = "EA112F FF037F 6F6EF1 02B5F3 00FF00 10650D 164CB2";}
			if ( limpia == 2 )
			{adiciones = "FF8888 FFFF88 88FF88 88FFFF 8888FF FF88FF";}
			if ( limpia == 3 )
			{adiciones = "884488 444488 448888 448844 888844 884444";}
			
		}
		gradient(r_t,adiciones);
	}
	else{
		if (b == "2")
		{
			var nnG = a;
			var n_t = nnG.split(" ");

			var rTextG = myTe.replace(/a/g, n_t[0]).replace(/b/g, n_t[1]).replace(/c/g, n_t[2]).replace(/d/g, n_t[3]).replace(/e/g, n_t[4]).replace(/f/g, n_t[5]).replace(/g/g, n_t[6]).replace(/h/g, n_t[7]).replace(/i/g, n_t[8]).replace(/j/g, n_t[9]).replace(/k/g, n_t[10]).replace(/l/g, n_t[11]).replace(/m/g, n_t[12]).replace(/n/g, n_t[13]).replace(/ñ/g, n_t[14]).replace(/o/g, n_t[15]).replace(/p/g,n_t[16]).replace(/q/g,n_t[17]).replace(/r/g, n_t[18]).replace(/s/g, n_t[19]).replace(/t/g, n_t[20]).replace(/u/g, n_t[21]).replace(/v/g, n_t[22]).replace(/w/g, n_t[23]).replace(/x/g, n_t[24]).replace(/y/g, n_t[25]).replace(/z/g, n_t[26]).replace(/A/g, n_t[27]).replace(/B/g, n_t[28]).replace(/C/g, n_t[29]).replace(/D/g, n_t[30]).replace(/E/g, n_t[31]).replace(/F/g, n_t[32]).replace(/G/g, n_t[33]).replace(/H/g, n_t[34]).replace(/I/g, n_t[35]).replace(/J/g, n_t[36]).replace(/K/g, n_t[37]).replace(/L/g, n_t[38]).replace(/M/g, n_t[39]).replace(/N/g, n_t[40]).replace(/Ñ/g, n_t[41]).replace(/O/g, n_t[42]).replace(/P/g, n_t[43]).replace(/Q/g, n_t[44]).replace(/R/g, n_t[45]).replace(/S/g, n_t[46]).replace(/T/g, n_t[47]).replace(/U/g, n_t[48]).replace(/V/g, n_t[49]).replace(/W/g, n_t[50]).replace(/X/g, n_t[51]).replace(/Y/g, n_t[52]).replace(/Z/g, n_t[53]);

			var r2= rTextG;
			//EXCEPCIONES de fuente:
			r3G = r2.replace("+", "").replace("undefined", "").replace(/&𝔫𝔟𝔰𝔭;/g, " ").replace(/&𝓃𝒷𝓈𝓅;/g, " ");
			//Excepciones (cada vez que se agrega una fuente agregar su respectiva excepcion a <br>):
			r4G = r3G.replace("undefined", "").replace(/<𝔟𝔯>|<𝒷𝓇>/, "").replace(/<𝒷>|<𝔟>/, "<b>").replace(/<\u002F𝒷>|<\u002F𝔟>/, "</b>");
			
			var textoG = r4G;// SALIDA DE TEXTO YA CON LOS CARACTERES (la fuente) CAMBIADOS.
		  
		// lookup table (SCTIOT DE Gradientes)
			var tohex = new Array(256);
			var hex = "0123456789ABCDEF";
			var count = 0;
			for (x=0; x<16; x++)
			{
				for (y=0; y<16; y++)
					{
						tohex[count] = hex.charAt(x) + hex.charAt(y);
						count++;
					}
			}

		//ColorCode constructor
			function ColorCode(hexcode)
			{
				if (hexcode.length == 7)
				{
					this.r = parseInt(hexcode.substring(1,3),16);
					this.g = parseInt(hexcode.substring(3,5),16);
					this.b = parseInt(hexcode.substring(5,7),16);
				}
				else if (hexcode.length == 6)
				{
					this.r = parseInt(hexcode.substring(0,2),16);
					this.g = parseInt(hexcode.substring(2,4),16);
					this.b = parseInt(hexcode.substring(4,6),16);
				}
				else
				{
					this.r = this.g = this.b = 0;
					alert("Error: ColorCode constructor failed");
				}
				if (isNaN(this.r)||isNaN(this.g)||isNaN(this.b))
				alert("Error: ColorCode constructor failed");
			}

			// ColorList constructor
			function ColorList(hexcodes)
			{
				var i = 0;
				var c = 0;
				this.codes = new Array(Math.round(hexcodes.length/7));
				while (i < hexcodes.length)
				{
					if (isNaN(parseInt(hexcodes.substring(i,i+6),16))) ++i;
					else 
					{
						this.codes[c] = new ColorCode(hexcodes.substring(i,i+6));
						i += 7;
						++c;
					}
				}
				this.len = c;
			}

			function interpolate (x1, y1, x3, y3, x2)
			{
				if (x3 == x1) return y1
				else return (x2-x1)*(y3-y1)/(x3-x1) + y1
			}

			// x=index of letter, y=number of letters, z=number of colors
			function lowcolorindex (x, y, z)
			{
				if (y == 1) return 0
				else return Math.floor( (x*(z-1))/(y-1) )
			}

			function hicolorindex (x, y, z, low)
			{ 
				if ( low*(y-1) == x*(z-1) ) return low
				else if (y == 1) return 0
				else return Math.floor( (x*(z-1))/(y-1) + 1 )
			}

			/////////////////////////////////////////////////
			var nT;
			var nR;
			function gradient (thetext,thecolors) 
			{
				var colors = new ColorList(thecolors);
				var numcolors = colors.len;
				var numchars = thetext.length;
				var rr = 0;
				var gg = 0;
				var bb = 0;
				var lci = 0; //lower color index
				var hci = 0; //high color index

				for (i=0; i<numchars; ++i) 
				{
					lci = lowcolorindex(i, numchars, numcolors);
					hci = hicolorindex(i, numchars, numcolors, lci);
					rr = Math.round(interpolate( lci/(numcolors-1), colors.codes[lci].r, hci/(numcolors-1), colors.codes[hci].r, i/(numchars-1)));
					gg = Math.round(interpolate( lci/(numcolors-1), colors.codes[lci].g, hci/(numcolors-1), colors.codes[hci].g, i/(numchars-1)));
					bb = Math.round(interpolate( lci/(numcolors-1), colors.codes[lci].b, hci/(numcolors-1), colors.codes[hci].b, i/(numchars-1)));
					/////
					var salida = "<font color=#" + tohex[rr] + tohex[gg] + tohex[bb] + ">" + thetext.charAt(i) + "</font>";
					nT += salida
					nR = nT.replace("undefined", "");
				}
				if (document.getElementById('TBB').className == "tbtn")//si no está en negrita:
				{
					var salidaG = nR;
				}
				else
				{
					var salidaG = "<b>" + nR + "</b>";
				}
				var tN = salidaG;
				var uT = tN.replace("undefined", "");
				BL.sendMessage(TB.aT,rcUtil.html2bb(uT));
				IN.CI.document.body.innerHTML="";
				nT="";
				nR="";
			}
			
			if ( myTe != "" )
			{
				// Aqui tomamos el texto y se lo pasamos a la funcion de arriba:
				var e_text = textoG;
				var r_t = e_text.replace("undefined", "").replace("<br>", "").replace("<b>", "").replace("</b>", "").replace("<i>", "").replace("</i>", "").replace("<u>", "").replace("</u>", "");
				// id de los select:
				if ( limpia == 0 )
				{
					var _sel1 = document.getElementById("sel1").value;
					var _sel2 = document.getElementById("sel2").value;
					var _sel3 = document.getElementById("sel3").value;
					var _sel4 = document.getElementById("sel4").value;
					var _sel5 = document.getElementById("sel5").value;
					var _sel6 = document.getElementById("sel6").value;
					//adiciones.
					adiciones = _sel1 + _sel2 + _sel3 + _sel4 + _sel5 + _sel6;
				}
				if ( limpia == 1 )
				{adiciones = "EA112F FF037F 6F6EF1 02B5F3 00FF00 10650D 164CB2";}
				if ( limpia == 2 )
				{adiciones = "FF8888 FFFF88 88FF88 88FFFF 8888FF FF88FF";}
				if ( limpia == 3 )
				{adiciones = "884488 444488 448888 448844 888844 884444";}
				
			}
			gradient(r_t,adiciones);
		}
	}
  }
	switch ( document.getElementById("newFont").value )
	{
		case "_cero":
		fuentesG("abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		case "_uno":
		fuentesG("𝔞 𝔟 𝔠 𝔡 𝔢 𝔣 𝔤 𝔥 𝔦 𝔧 𝑘 𝔩 𝔪 𝔫 ῆ 𝔬 𝔭 𝔮 𝔯 𝔰 𝔱 𝔲 𝔳 𝔴 𝔵 𝑦 𝔷 𝔄 𝔅 𝓒 𝔇 𝔈 𝔉 𝔊 𝓗 𝓘 𝔍 𝔎 𝔏 𝔐 𝔑 Ñ 𝔒 𝔓 𝔔 𝓡 𝔖 𝔗 𝔘 ℣ 𝔚 𝔛 𝔜 𝓩", "2");
		break;
		case "_dos":
		fuentesG("𝒶 𝒷 𝒸 𝒹 𝑒 𝒻 𝑔 𝒽 𝒾 𝒿 𝓀 𝓁 𝓂 𝓃 ῆ 𝑜 𝓅 𝓆 𝓇 𝓈 𝓉 𝓊 𝓋 𝓌 𝓍 𝓎 𝓏 𝒜 𝐵 𝒞 𝒟 𝐸 𝐹 𝒢 𝐻 𝐼 𝒥 𝒦 𝐿 𝑀 𝒩 Ñ 𝒪 𝒫 𝒬 𝑅 𝒮 𝒯 𝒰 𝒱 𝒲 𝒳 𝒴 𝒵", "2");
		break;
		case "_tres":
		fuentesG("ᾀᏰᏨᕍ⁅ᖴgᏲḭʝḳ℄ḾṈῆṎᑬQᖇຮtᙈעᏔჯẙẔABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		case "_cuatro":
		  fuentesG("მჩეძპfცhἶქκlოиῆᎤρგΓჰtυ√wჯყzABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_cinco":
		  fuentesG("ÂßĈÐЄŦǤĦĪʖҚĿ♏ИῆØPҨRՏ†ЦVЩX￥ẔABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_seis":
		  fuentesG("ΛßƇDƐFƓĤĪĴҠĿMИῆ♡ṖҨŔSƬƱѴѠӾYZABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_siete":
		  fuentesG("ᏗᏰՇᎴᏋƒĢᏂᎥᏠᏦᏝᎷᏁῆᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_ocho":
		  fuentesG("αвς∂εƒցнɪĵƙℓɱиῆσρףяѕтƲνωχϓՀABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_nueve":
		  fuentesG("ᎯᏰᏨᕍḕᖴgᏲḭǰḳl๓nῆ๏ᑬqᖇຮtᙈvᏔჯẙẔABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_diez":
		  fuentesG("નЪ૮ԁ૯ԲցસіڙқԼறהῆଇϷ૧Я૬ҬμνயϰϓｚABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_once":
		  fuentesG("ԹՅՇԺƐԲցɧᎥʝƙℓʍՌῆʘρφʀՏԵՄעաχՎʑABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_doce":
		  fuentesG("48CD3F6HIJK1MИÑ0PQЯ57UVWXY248CD3F6HIJKLMNÑ0PQR57UVWXYZ", "1");
		break;
		  case "_trece":
		  fuentesG("ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝñⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_cato":
		  fuentesG("ªb¢ÞÈF૬ɧÎjΚĻмηῆ◊ǷƍrS⊥µ√w×ýzABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_quince":
		  fuentesG("ΔҌﾧdﾼԲɢￃΙۆӃﾤϺﾢῆﾷϸϘЯଌȚȗѵ￦ҲעŻABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_dseis":
		  fuentesG("ᗩᙖᙅᗪᙓᖴᘜᕼIᒍKᒪᙏᑎῆOᑭᑫᖇᔕTᙀᐯᙎ᙭YᘔABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_dsiete":
		  fuentesG("ᵃᵇᶜᵈᵉᶠᵍʰᶤʲᵏˡᵐⁿῆᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_docho":
		  fuentesG("ɐqɔpǝɟɓɥıſʞlɯuñodbɹsʇnʌʍxʎzABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_dnueve":
		  fuentesG("∀BɔDƎℲGHIſʞlWᴎñOԀQᴚS⊥∩ᴧMXʎZABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_veinte":
		  fuentesG("ąҍçժҽƒցհìʝҟӀʍղῆ✿քզɾʂէմѵա×վՀABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_vuno":
		  fuentesG("ａｂｃｄｅｆｇｈｉｊｋｌｍｎñｏｐｑｒｓｔｕｖｗｘｙｚABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_vdos":
		  fuentesG("ᕱცᕳᗬӬ∮ʛஅɪلɮᄂ♏ȠňФקϤԄƧてʊᏉʬϪץʑABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_vtres":
		  fuentesG("ąც८ძ૯ʄ૭ҺɿڽқℓɱՈῆరƿҩ२ﻯ੮υ౮ω૪ყζABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_vcuatro":
		  fuentesG("ₐᵇᵓᵈₑᶠᵍʰᵢᶨᵏᶫᶬᶮῆₒᵖᵩͬᶳᵗᵤᵛᵚ×ᵧᶼABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_vcinco":
		  fuentesG("ᾀᏰᏨᕍ⁅ᖴgᏲḭᏧḳ℄๓ՌñṎᑬQᖇຮtᙈvᏔჯẙẔABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_vseis":
		  fuentesG("Aʙඋd㉫ƒＧħÏﻝĸし๓Ǹñ✿ƿqr＄†µvŴxƴzABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_vsiete":
		  fuentesG("ᎪbᏟᎠᎬfᎶhᎥjᏦᏞmᏁñᎾᏢqᏒsᏆuᏉᎳxᎽᏃABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_vocho":
		  fuentesG("Ⱥβ↻DƐƑƓǶįلҠL♏ՌῆoƿףЯϚTԱVచჯӋʑABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_vnueve":
		  fuentesG("ค๒ς๔єŦɠђเןкl๓ภÑ๏թợгรtยvฬxץzABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
		  case "_treinta":
		  fuentesG("ᾆḇḉḓễḟḡḧἷjḵḺḿᾖῇỠῤǬṝṧṯῠṽᾧẍỹẐABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "1");
		break;
	}

IN.clear();
IN.doFocus();
}
function sym1()
{IN.sEm(' ♫♬♪ ');}
function sym2()
{IN.sEm(' ❤ ');}
function sym3()
{IN.sEm(' ♡ ');}
function sym4()
{IN.sEm(' ❥ ');}
//*********************************************************************************************
function sym5()
{IN.sEm(' [b][c=#FF037F]✿[/c][c=#238C00]⊱╮[/c] [c=#FF037F]❀[/c][c=#238C00]⊱╮[/c][/b] ');}

function sym5_2()
{IN.sEm(' [b][c=#FF0000]✿[/c][c=#238C00]⊱╮[/c] [c=#FF0000]❀[/c][c=#238C00]⊱╮[/c][/b] ');}
//*********************************************************************************************
function sym6()
{IN.sEm(' ✿ ❀ ❁ ✾ ✽ ❃ ');}
function sym7()
{IN.sEm(' ♬♪♫ ヾ(*・。・)ﾉ ♬♪♫ ');}
function sym9()
{IN.sEm(' ︻┳═一 ');}
document.getElementById("EP").innerHTML += ' <tr><td><a style="border:1px solid #000000" onclick="sym1();">♫</a></td><a>&nbsp;</a><td><a style="border:1px solid #000000" onclick="sym2();">❤</a></td><a>&nbsp;</a><td><a style="border:1px solid #000000" onclick="sym3();">♡</a></td><a>&nbsp;</a><td><a style="border:1px solid #000000" onclick="sym4();">❥</a></td><a>&nbsp;</a><td><a style="border:1px solid #000000" onclick="sym5();">F1</a></td><a>&nbsp;</a><td><a style="border:1px solid #000000" onclick="sym5_2();">F2</a></td><a>&nbsp;</a><td><a style="border:1px solid #000000" onclick="sym6();">✿</a></td><a>&nbsp;</a><td><a style="border:1px solid #000000" onclick="sym7();">♪</a></td><td><a style="border:1px solid #000000" onclick="sym9();">☺</a></td></tr>';
//FIN_DEL_SCRIPT.
