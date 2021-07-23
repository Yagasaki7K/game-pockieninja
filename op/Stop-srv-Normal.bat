@echo off
@echo begin to stop svr
set bin=D:/op/scripts
set sleep=C:/UnxUtils/usr/local/wbin/sleep
set ssh=C:/cwRsyncServer/bin/ssh
@echo begin stop gamesvr
::for /f "eol=; tokens=1,2,3,4 delims=," %%i in (game.txt) do call :stop %%i %%j %%k %%l
for /f "eol=; tokens=1,2,3,4 " %%a in ('gawk -F "," "$1 !~ /^;/ {print$1}" game.txt ^| xargs -n2') do  call :stop %%a %%b

@echo stop-game has completed!!
@pause
exit /b 

:stop
start %ssh% %1 "%bin%/k-dm.bat" 
set n=300
:loop
@echo pls wait, gamedb also left  %n%s off...
set /a n-=1
if %n%==0  goto next
%sleep% 1
goto loop

:next
start %ssh% %1 "%bin%/k-gamedb.bat" 

set p=300
:loop1
@echo pls wait, pubdata also left  %p%s off ...
set /a p-=1
if  %p%==0  goto next1
%sleep% 1
goto loop1
:next1
start %ssh% %1 "%bin%/k-java.bat"
exit /b 
