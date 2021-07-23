@echo off 
set SSH=C:\cwRsyncServer\bin\ssh
@echo checking start-svr
set bin=D:/app/bin
set scripts=D:/op/scripts
for /f "eol=; tokens=1,2,3,4,5,6 delims=," %%i in (game.txt) do call :start-result %%i %%j %%k %%l %%m %%n

exit /b 
:start-result
%SSH% %1 %scripts%/check_start.bat %5

exit /b 