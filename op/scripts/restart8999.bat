:::restart8999
netstat -nao |  gawk "$2 ~ /:8999/" | gawk "{print$5}" > 8999.log
set /p aa=<8999.log
echo %aa%
taskkill /f /fi "pid eq %aa%"
start D:\app\bin\interior.bat
::sleep  60
::goto :restart8999

