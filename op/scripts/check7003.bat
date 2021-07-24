@echo off
:7003
d:
cd D:\app\bin
set aa=
netstat -nao | grep :7003 | gawk "{print$5}" > 7003.log
set /p aa=<7003.log
echo %aa%
if not defined aa (start D:\app\bin\proxy03.bat) else (echo ok)
sleep 5
goto :7003