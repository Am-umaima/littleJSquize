function Effacer()
{
	formEX.reset();
}
function verifier()
{
	if(document.getElementById("choix1").checked)
	{
		document.getElementById("answer").value="la reponse est fausse";
	}
	if(document.getElementById("choix2").checked)
	{
		document.getElementById("answer").value="la reponse est vrais";
	}
	if(document.getElementById("choix3").checked)
	{
		document.getElementById("answer").value="la reponse est fausse";
	}
}
//ex2
function Reponse()
{
	var nbr;
	if(document.getElementById("choix2").checked )
	{
		nbr+=1;
	}
	else if( document.getElementById("choix1").checked)
	{
		nbr+=0;
	}
	else//choix3
	{
		nbr+=0;
	}
	if(nbr=0)
	{
		alert("bonne reponse");
	}
	else if(nbr=1)
	{
		alert("bad reponse");
	}

}