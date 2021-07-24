@echo off 
d:
cd D:\op\scripts
set sleep=C:/UnxUtils/usr/local/wbin
taskkill /f /im "DmEnter.exe"
::sleep 300
netstat -noa | grep "10800" | gawk "{print $5}" > pid.txt  
set /p aa=<pid.txt
taskkill /f /fi "pid eq %aa%" 
::sleep 30
taskkill /f /im "java.exe"

::taskkill /f /im "bash.exe"

::taskkill /f /im "cmd.exe"




