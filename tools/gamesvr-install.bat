@echo off

::checksystem  调整磁盘分区-->内存报错设置-->关闭自动播放-->设置虚拟内存-->网络最大吞吐量设置-->禁止wan打印和文件共享-->生成sshkey-->check自动更新和时间时`区设置
@echo install winrar
wrar380sc.exe -s

@echo install java
jdk-6u20-windows-x64.exe

@echo install Rsync and ssh
RsyncServer.exe
xcopy /y /e D:\tools\UnxUtils %systemdrive%\UnxUtils\
regedit -s sec.reg 
copy /y D:\tools\activate-user.sh c:\cwRsyncServer\bin\
copy /y C:\WINDOWS\system32\wbem\framedyn.dll C:\WINDOWS\system32\
C:\UnxUtils\usr\local\wbin\mv C:\UnxUtils\usr\local\wbin\date.exe C:\UnxUtils\usr\local\wbin\udate.exe
md d:\fight\apache
copy /y d:\tools\crossdomain.xml d:\fight\apache

@echo install nginx
%systemdrive%\UnxUtils\usr\local\wbin\unzip D:\tools\nginx-0.8.53.zip -d c:\
C:\nginx\instsrv NGINX c:\nginx\srvany.exe 
regedit /s C:\nginx\nginx.reg

for /f %%i in ('whoami ^| %systemdrive%\UnxUtils\usr\local\wbin\gawk -F \ "{print$2}"') do set username=%%i

SET /P NEWPW=input %username% passwd:
SC CONFIG NGINX OBJ= .\%username% PASSWORD= %NEWPW%
net start nginx
schtasks /create /sc daily /st 00:00  /tn "cut-log" /tr C:\nginx\cut-log.bat /ru %username% /rp %NEWPW%

@echo install op-scripts
%systemdrive%\UnxUtils\usr\local\wbin\unzip D:\tools\op.zip -d d:\

@echo install .net
d:\op\scripts\WIC_x64_enu.exe
d:\op\scripts\dotNetFx40_Full_x86_x64.exe


SET /P gameip=plz input gameip:
SET /P gamedbip=plz input gamedbip:
C:\cwRsyncServer\bin\sed -i "s/gameip/%gameip%/" d:/op/*.txt
C:\cwRsyncServer\bin\sed -i "s/gamedbip/%gamedbip%/" d:/op/*.txt
C:\cwRsyncServer\bin\sed -i "s/$/\r/" d:/op/*.txt

