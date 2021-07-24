::@echo off 
d:
cd D:\op
for /f "eol=; tokens=1,2 delims=," %%i in (game.txt) do start .\deploy\rsync-bat.bat %%i %%j


