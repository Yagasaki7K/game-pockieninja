@echo off
@echo checking stop-game...
for /f "eol=; tokens=1,2,3,4 delims=," %%i in (game.txt) do call :check %%i %%j %%k %%l
pause
exit /b

:check
ssh %1 tasklist | egrep "java.exe|DmEnter.exe" | wc -l > .\log\stop.log
set /p stop=< .\log\stop.log
if %stop% equ %4 (echo %2 %4 %stop% ok) else (echo %2 %4 %stop% ERROR)
exit /b
