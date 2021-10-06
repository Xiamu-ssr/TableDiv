window.onload=function()
{resize();}

window.onresize=function()
{resize();}

function resize()
{
    var w=window.innerWidth;
    var h=window.innerHeight;
    var bk=document.getElementById('bodybackg');
    var bk_rate=parseFloat(1080/1920);
    var win_rate=parseFloat(h/w);
    var t=document.getElementById('table');
    if(win_rate>bk_rate)
    {
        bk.style.backgroundSize='auto '+h+'px';
        bk.style.backgroundPositionX=(w-h/bk_rate)/2+'px';
        bk.style.backgroundPositionY='0px';
    }   
    else
    {
        bk.style.backgroundSize=w+'px auto';
        bk.style.backgroundPositionY=(h-w*bk_rate)/2+'px';
        bk.style.backgroundPositionX='0px';
    }

    var body=document.getElementById('bodybackg');
    if(w<1350)
    {
        body.style.display='inline';
    }
    else
    {
      body.style.display='flex';
    }

}
