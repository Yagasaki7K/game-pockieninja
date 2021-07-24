@echo off
xcopy /e /q /y d:\app\bin\log\*.log d:\log-bak\
::rsync -av --progress --delete --exclude="*.zip" /cygdrive/d/app/bin/log/  /cygdrive/d/log-bak/
rm -rf d:/app/bin/log/*_*.log
zip -mj  d:\log-bak\log_"%date:~0,4%%date:~5,2%%date:~8,2%%time:~0,2%%time:~3,2%%time:~6,2%".zip  d:\log-bak\*.log