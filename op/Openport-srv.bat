@ECHO OFF
color 3e

set SSH=C:\cwRsyncServer\bin\ssh
set path=D:\op


@ECHO. ¡­¡­¡­¡­begin Open entry¡­¡­¡­¡­

@ECHO open port...
for /f "eol=; tokens=1,2,3 delims=," %%i in (game.txt) do call :openport %%i %%j %%k

exit /b
:openport

%SSH% %1 "netsh ipsec static set rule name=entry  policy=Gamesvr activate =yes"
%SSH% %1 "netsh ipsec static show rule name=entry  policy=Gamesvr | grep ÒÑ¼¤»î | gawk -F [:] '{print $2}' "  > .\log\%2.log
set /p port=< .\log\%2.log
if %port% equ ÊÇ (echo %2 ok) else (echo %2 error)

exit /b