del /q /s D:\op\%2-rsynclog
del /q /s %path%\deploy\%2.txt

%Rsync% %UpdateMode%  --log-file="./%2-rsynclog"  --include="*"  -e "%SSHpath%\ssh -l ninjaidadmin -p 22" %APACHE-SP%  %1:%APACHE-DP%

%ssh% %1 "ls -Rl /cygdrive/d/apache | egrep -v '.rar|.log|.dmp|.zip' | grep '^-' | %unix%/gawk '{print $5,$6,$7,$8,$9 }' " > %path%\deploy\tmp\%2.txt
copy %path%\deploy\tmp\%2.txt %path%\deploy\

%win%\chmod -R 755 d:/apache

exit 