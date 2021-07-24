:::restart7003
netstat -nao | gawk "$2 ~ /:7003/" | gawk "{print$5}" > 7003.log
set /p aa=<7003.log
echo %aa%
taskkill /f /fi "pid eq %aa%"
start D:\app\bin\proxy03.bat
::sleep  60
::goto :restart7003

