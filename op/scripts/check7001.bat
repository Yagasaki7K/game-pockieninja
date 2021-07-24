@echo off
:7001
d:
cd D:\app\bin
set aa=
netstat -nao | grep :7001 | gawk "{print$5}" > 7001.log
set /p aa=<7001.log
echo %aa%
if not defined aa (start D:\app\bin\proxy01.bat) else (echo ok)
sleep 5
goto :7001