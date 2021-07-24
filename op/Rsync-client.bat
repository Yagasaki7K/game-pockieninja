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

set UpdateMode=-av --progress --delete

@echo game update.... 


d:
cd %path%

@echo apache update....

del /q /s %path%\deploy\apache*.txt


%SSHpath%\ls -Rl /cygdrive/d/op/update/apache | %win%\egrep -v ".rar|.log|.dmp|.zip" | %win%\grep "^-" | %win%\gawk "{print $5,$6,$7,$8,$9 }" > .\deploy\apache-source.txt


del /q /s %path%\deploy\apache.txt
del /q /s D:\op\deploy\apache-rsynclog
%Rsync% %UpdateMode%  --log-file="./deploy/apache-rsynclog"  --include="*"   %APACHE-SP%  %APACHE-DP%

%SSHpath%\ls -Rl /cygdrive/d/apache | %win%\egrep -v ".rar|.log|.dmp|.zip" | %win%\grep "^-" | %win%\gawk "{print $5,$6,$7,$8,$9 }" > %path%\deploy\tmp\apache.txt
copy %path%\deploy\tmp\apache.txt %path%\deploy\