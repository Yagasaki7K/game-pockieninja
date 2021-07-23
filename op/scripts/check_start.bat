@echo off
set win=C:\UnxUtils\usr\local\wbin
::for /f %%a in ('udate +%%Y-%%m-%%d') do set  date=%%a
d:
cd D:\app\bin\log

ls -lt | head -n %1 | gawk "{print$9}" > D:\op\scripts\game.txt

for /f %%i in (D:\op\scripts\game.txt) do findstr "except" %%i > nul 2>&1&&echo %%i is error||echo %%i is ok
