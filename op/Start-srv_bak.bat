@echo off 
::@echo change apache-directory
::c:
::cd C:\Apache2.2\conf\extra\
::net stop NGINX
::sed -i "s/maintenance/apache/" httpd-vhosts.conf
::sed -i "s/$/\r/" httpd-vhosts.conf
::net start NGINX

@echo starting svr
set bin=D:/app/bin
set path=D:\op
set SSH=C:\cwRsyncServer\bin\ssh
set win=C:\UnxUtils\usr\local\wbin
set kill=C:\WINDOWS\system32\taskkill
d:
cd %path% 

for /f "eol=; tokens=1,2,3 delims=," %%i in (start.txt) do call :start %%i %%j %%k

exit /b 
:start 
start %SSH% %1 "%3/%2" 
%win%\sleep 20

exit /b 




