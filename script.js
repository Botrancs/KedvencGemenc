let openMD = false;
let filtSM = false;

function OpenCloseMDSMMenu() {
  if (openMD)
  {
    if (!(document.documentElement.clientWidth < 576))
    {
      document.getElementById("overlayMD").style.height = "0%";
      document.getElementById("opencloseOverlaySVG");
      opencloseOverlaySVG.style.animation = "quarterSpinBack 0.5s linear 1 forwards";
    }
    else
    {
      document.getElementById("overlaySM").style.height = "0%";
      document.getElementById("opencloseOverlaySVG_SM");
      opencloseOverlaySVG_SM.style.animation = "quarterSpinBack 0.5s linear 1 forwards";
    }
    openMD = false;
  }
  else
  {
    if (!(document.documentElement.clientWidth < 576))
    {
      document.getElementById("overlayMD").style.height = "100%";
      document.getElementById("opencloseOverlaySVG");
      opencloseOverlaySVG.style.animation = "quarterSpinForw 0.5s linear 1 forwards";
    }
    else
    {
      document.getElementById("overlaySM").style.height = "100%";
      document.getElementById("opencloseOverlaySVG_SM");
      opencloseOverlaySVG_SM.style.animation = "quarterSpinForw 0.5s linear 1 forwards";
    }
    openMD = true;
  }
}


function OpenCloseFiltersSM(){
    if (filtSM) {
        let filt = document.getElementById("filterSMSVG");
        filt.style.animation = "halfSpinBack 0.2s linear 1 forwards"

        document.getElementById("filterek").style.display = "none";

        filtSM = false;
    }
    else{
        let filt = document.getElementById("filterSMSVG");
        filt.style.animation = "halfSpinForw 0.2s linear 1 forwards"

        document.getElementById("filterek").style.display = "flex";

        filtSM = true;
    }
}