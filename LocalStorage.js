var sessionStorage;
if(sessionStorage.ClickCount)
{
    sessionStorage.ClickCount = Number(sessionStorage.ClickCount)+1;
}
else
{
    sessionStorage.ClickCount=1;
}
document.getElementById("LocalStorage").innerHTML=" "+sessionStorage.ClickCount+" ";