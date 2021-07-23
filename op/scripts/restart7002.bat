:::restart7002
netstat -nao | gawk "$2 ~ /:7002/" | gawk "{print$5}" > 7002.log
set /p aa=<7002.log
echo %aa%
taskkill /f /fi "pid eq %aa%"
start D:\app\bin\proxy02.bat
::sleep  60
::goto :restart7002

