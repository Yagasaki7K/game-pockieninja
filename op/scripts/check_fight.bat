@echo off
@echo check delete
for   /f   %%i   in   (day.txt)   do call :check %%i

exit /b
:check
if not exist D:\apache\fight\%1 (echo  %1 successful) else (echo %1 failure)
exit /b