@ECHO OFF
color 3e
::chmod -R 777 D:\op\update\apache 
set APP-SP=/cygdrive/d/op/update/app/
set APP-DP=/cygdrive/d/app/
set APACHE-SP=/cygdrive/d/op/update/apache/
set APACHE-DP=/cygdrive/d/apache/
set Rsync=C:\cwRsyncServer\bin\Rsync
set SSH=C:\cwRsyncServer\bin\ssh
set SSHpath=C:\cwRsyncServer\bin
set path=D:\op
set unix=/cygdrive/C/UnxUtils/usr/local/wbin
set win=C:\UnxUtils\usr\local\wbin
set wincommand=C:\WINDOWS\system32

set UpdateMode=-av --progress  --delete --exclude-from="./exclude.txt"  



d:
cd %path%
del /q /s %path%\deploy\game*.txt
@ECHO game update...
del /q /s %path%\deploy\app-tmp-rsynclog > nul 2>&1
%SSHpath%\ls -Rl /cygdrive/d/op/update/app | %win%\egrep -v ".rar|.log|.dmp|.zip" | %win%\grep "^-" | %win%\gawk "{print $5,$6,$7,$8,$9 }" > .\deploy\app-source.txt
%Rsync% -av --exclude-from="./exclude.txt"  --log-file=./deploy/app-tmp-rsynclog /cygdrive/d/app/ /cygdrive/d/app-tmp/ > nul 2>&1
for /f "eol=; tokens=1,2 delims=," %%i in (game.txt) do Start %path%\deploy\rsync-game.bat %%i %%j







