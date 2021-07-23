@echo off 
@echo deleting.... 
::del /s /q fight.log
d:
cd D:\op\scripts
C:\UnxUtils\usr\local\wbin\find.exe D:\apache\fight -maxdepth 1 -mtime +6 -type d | gawk -F \ "{print $4}" | grep -v private >> day.txt 2>&1
sed -i "s/$/\r/" day.txt

for   /f   %%i   in   ( day.txt)   do  @rd   /s  /q  D:\apache\fight\%%i > nul 2>&1

for   /f   %%i   in   ( day.txt)   do call :check %%i

:check
if not exist D:\apache\fight\%1 (echo  %1 É¾³ý³É¹¦ ) else (echo %1 É¾³ýÊ§°Ü )
exit /b
