netsh ipsec static delete all
netsh ipsec static add policy name=Gamesvr
netsh ipsec static add filterlist name=web
netsh ipsec static add filterlist name=permission
netsh ipsec static add filter filterlist=web  srcaddr=me dstaddr=any description=web protocol=tcp mirrored=yes dstport=80
netsh ipsec static add filter filterlist=permission  srcaddr=me dstaddr=192.16.17.59 description=80out protocol=tcp mirrored=yes dstport=80
netsh ipsec static add filteraction name=block  action=block
netsh ipsec static add filteraction name=allow  action=permit
netsh ipsec static add rule name=permission  policy=Gamesvr filterlist=permission filteraction=allow
netsh ipsec static add rule name=web  policy=Gamesvr filterlist=web filteraction=block
netsh ipsec static set policy name=Gamesvr assign=y