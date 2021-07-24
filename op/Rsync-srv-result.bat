@echo off
:recheck
@echo off
set path=D:\op
set command=%SystemRoot%\system32
set unix=C:\UnxUtils\usr\local\wbin
d:
cd %path%

(%command%\fc deploy\game1.txt deploy\app-source.txt > deploy\game1-fc.log 2>&1 &&echo 相同||echo 不同) >deploy\templog.txt
if ERRORLEVEL 2  goto a

(%command%\fc deploy\game2.txt deploy\app-source.txt > deploy\game2-fc.log 2>&1&&echo 相同||echo 不同) >>deploy\templog.txt
if ERRORLEVEL 2  goto a

(%command%\fc deploy\gamedb.txt deploy\app-source.txt > deploy\gamedb-fc.log 2>&1&&echo 相同||echo 不同) >>deploy\templog.txt
if ERRORLEVEL 2  goto a

(%command%\fc deploy\apache.txt deploy\apache-source.txt > deploy\apache-fc.log 2>&1&&echo 相同||echo 不同) >>deploy\templog.txt
if ERRORLEVEL 2  goto a
if ERRORLEVEL 1  goto b
if ERRORLEVEL 0  goto b


:a
@echo checking..
@echo Game updated
%unix%\sleep 10
goto :recheck
exit

:b
(%command%\findstr "不同" deploy\templog.txt>nul&&echo error ||echo ok) > %path%\deploy\result.txt
@echo Game updated >> %path%\deploy\result.txt
%unix%\cat %path%\deploy\result.txt

exit