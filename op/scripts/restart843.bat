:::restart843
netstat -nao | grep :843 | gawk "{print$5}" > 843.log
set /p aa=<843.log
echo %aa%
taskkill /f /fi "pid eq %aa%"
start D:\app\PolicyServer\policy-server.bat
::sleep  60
::goto :restart843

