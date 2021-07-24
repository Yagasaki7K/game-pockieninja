@echo off
set win=C:\UnxUtils\usr\local\wbin
::for /f %%a in ('udate +%%Y-%%m-%%d') do set  date=%%a
d:
cd D:\app\bin\log

ls -l | egrep "game....log" | gawk "{print$9}" > D:\op\scripts\game.txt

for /f %%i in (D:\op\scripts\game.txt) do find "compete add success" %%i > nul 2>&1&&echo %%i gamestart ok||echo %%i gamestart error
for /f %%i in (D:\op\scripts\game.txt) do find "DmEnter connect success" %%i > nul 2>&1&&echo %%i DmEnterstart ok||echo %%i DmEnterstart error

ls -l | egrep "\+.log" | gawk "{print$9}" > D:\op\scripts\except.txt
for /f %%i in (D:\op\scripts\except.txt) do find "Except" %%i > nul 2>&1&&echo %%i Except-check is error||echo %%i Except-check is ok