@echo off
d:
cd D:\op\scripts
set sleep=C:/UnxUtils/usr/local/wbin
taskkill /f /im "DmEnter.exe" 2> nul
for /f "tokens=1,2 delims=," %%i in (port.txt) do call :kill %%i %%j


exit /b

:kill
netstat -noa | findstr "LISTENING" | findstr "%2" | gawk "{print $5}" > pid.txt  
set /p aa=<pid.txt
taskkill /f /fi "pid eq %aa%" 1> nul 2>&1
exit /b