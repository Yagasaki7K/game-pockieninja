@ECHO OFF
color 3e
chmod -R 777 D:\op\update\apache 
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

@echo game update.... 


d:
cd %path%

@echo apache update....
del /q /s %path%\deploy\apache*.txt
del /q /s %path%\deploy\game*.txt
::%wincommand%\net stop Apache2.2
%wincommand%\taskkill /F /IM "nginx.exe"
%wincommand%\net stop nginx
%SSHpath%\ls -Rl /cygdrive/d/op/update/apache | %win%\egrep -v ".rar|.log|.dmp|.zip" | %win%\grep "^-" | %win%\gawk "{print $5,$6,$7,$8,$9 }" > .\deploy\apache-source.txt
%win%\mv d:\apache d:\apache-tmp\
%win%\mv D:\op\update\apache d:\apache\
%win%\mv d:\apache-tmp D:\op\update\apache\

::start %wincommand%\xcopy /e /s  d:\apache D:\op\update\apache\


::del /q /s D:\op\apache-rsynclog
del /q /s %path%\deploy\apache.txt
::for /f "eol=; tokens=1,2 delims=," %%i in (apache.txt) do Start %path%\deploy\rsync-apache.bat %%i %%j 
::%ssh% 127.0.0.1 "ls -Rl /cygdrive/d/apache | egrep -v '.rar|.log|.dmp|.zip' | grep '^-' | %unix%/gawk '{print $5,$6,$7,$8,$9 }' " > %path%\deploy\tmp\apache.txt
%SSHpath%\ls -Rl /cygdrive/d/apache | %win%\egrep -v ".rar|.log|.dmp|.zip" | %win%\grep "^-" | %win%\gawk "{print $5,$6,$7,$8,$9 }" > %path%\deploy\tmp\apache.txt
copy %path%\deploy\tmp\apache.txt %path%\deploy\
::%wincommand%\net start Apache2.2
%wincommand%\net start nginx


@ECHO game update...
del /q /s %path%\deploy\app-tmp-rsynclog > nul 2>&1
%SSHpath%\ls -Rl /cygdrive/d/op/update/app | %win%\egrep -v ".rar|.log|.dmp|.zip" | %win%\grep "^-" | %win%\gawk "{print $5,$6,$7,$8,$9 }" > .\deploy\app-source.txt
%Rsync% -av --exclude-from="./exclude.txt"  --log-file=./deploy/app-tmp-rsynclog /cygdrive/d/app/ /cygdrive/d/app-tmp/ > nul 2>&1
for /f "eol=; tokens=1,2 delims=," %%i in (game.txt) do Start %path%\deploy\rsync-game.bat %%i %%j







