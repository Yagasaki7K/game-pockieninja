@echo off 
set SSH=C:\cwRsyncServer\bin\ssh
@echo checking start-svr
taskkill /f /im ssh.exe >nul 2>&1
set bin=D:/app/bin
set scripts=D:/op/scripts
for /f "eol=; tokens=1,2,3,4,5,6 delims=," %%i in (game.txt) do call :start-result %%i %%j %%k %%l %%m %%n
pause
exit /b 
:start-result
%SSH% %1 tasklist | egrep "java.exe|DmEnter.exe" | wc -l > .\log\%2.log
set /p result=< .\log\%2.log
if %result% equ %3 (echo %2 %3 %result% ok) else (echo %2 %3 %result% error)
%SSH% %1 %scripts%/check_game.bat

exit /b 