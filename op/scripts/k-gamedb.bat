@echo off 
d:
cd D:\op\scripts
set sleep=C:/UnxUtils/usr/local/wbin
netstat -noa | gawk "$2 ~ /:10800$/ {print$5}"  > pid.txt  
set /p aa=<pid.txt
taskkill /f /fi "pid eq %aa%" 




