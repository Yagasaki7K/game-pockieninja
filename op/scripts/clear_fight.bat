@echo off 
@echo deleting.... 
::del /s /q fight.log
d:
cd D:\op\scripts
C:\UnxUtils\usr\local\wbin\find.exe D:\apache\fight -maxdepth 1 -mtime +7 -type d | gawk -F \ "{print $4}" | grep -v private >> day.txt 2>&1


for   /f   %%i   in   ( day.txt)   do start rd.bat %%i 
