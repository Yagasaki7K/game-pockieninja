@echo off
@echo stop svr
set bin=D:/op/scripts

for /f "eol=; tokens=1,2,3,4 delims=," %%i in (game.txt) do call :stop %%i %%j %%k %%l


exit /b 

:stop
start ssh %1 "%bin%/n-stop.bat" 
exit /b 