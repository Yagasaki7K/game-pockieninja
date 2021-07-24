:::restart7001
netstat -nao | gawk "$2 ~ /:7001/" | gawk "{print$5}" > 7001.log
set /p aa=<7001.log
echo %aa%
taskkill /f /fi "pid eq %aa%"
start D:\app\bin\proxy01.bat
::sleep  60
::goto :restart7001

