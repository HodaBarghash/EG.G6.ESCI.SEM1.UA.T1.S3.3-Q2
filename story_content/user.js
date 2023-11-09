function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5gU6FJJacGr":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyWDW_5WavF_MlhrHPEFKIzoMew3TMwm4lKrUPVzoBkBsv1Z4HvpOSVk7afxGFosdmCIg/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v2q2attempts:player.GetVar("v2q2attempts"),v2q2answeredcorrect:player.GetVar("v2q2answeredcorrect")})
	}
	)
}

