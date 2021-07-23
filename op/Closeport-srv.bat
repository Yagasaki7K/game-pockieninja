@ECHO OFF
color 3e
::@echo change apache-directory
::c:
::cd C:\Apache2.2\conf\extra\
::net stop Apache2.2
::sed -i "s/apache/maintenance/" httpd-vhosts.conf
::sed -i "s/$/\r/" httpd-vhosts.conf
::net start Apache2.2

set SSH=C:\cwRsyncServer\bin\ssh
set path=D:\op

@ECHO. ¡­¡­¡­¡­begin close entry¡­¡­¡­¡­
d:
cd %path%

@ECHO close port...
for /f "eol=; tokens=1,2,3 delims=," %%i in (game.txt) do call :closeport %%i %%j %%k

exit /b
:closeport

%SSH% %1 "netsh ipsec static set rule name=entry  policy=Gamesvr activate =no"
%SSH% %1 "netsh ipsec static show rule name=entry  policy=Gamesvr | grep ÒÑ¼¤»î | gawk -F [:] '{print $2}' "  > .\log\%2.log
set /p port=< .\log\%2.log
if %port% equ ·ñ (echo %2 ok) else (echo %2 error)

exit /b