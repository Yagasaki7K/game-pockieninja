@echo off
:7002
d:
cd D:\app\bin
set aa=
netstat -nao | grep :7002 | gawk "{print$5}" > 7002.log
set /p aa=<7002.log
echo %aa%
if not defined aa (start D:\app\bin\proxy02.bat) else (echo ok)
sleep 5
goto :7002