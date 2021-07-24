

for /f "eol=; tokens=1,2 delims=," %%i in (game.txt) do ssh %%i "netsh ipsec static add filter filterlist=company  srcaddr=124.74.9.226 dstaddr=me description=company protocol=any mirrored=yes"