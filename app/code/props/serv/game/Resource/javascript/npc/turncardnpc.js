/*
 * Copyright 2009-2010 Dream2 Network Technology, Inc. All rights reserved.
 */
//我的卡屋
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);


function OnSelect(jssystem, self, send, type)
{
    var kernel = jssystem.GetKernel();

    if (type == 1)
    {
        kernel.OpenUI(send, "UI_Card_Main_Xml");
        kernel.CloseMenu(send);
    }
    else if (type == 2)
    {
        kernel.CloseMenu(send);
    }
}

