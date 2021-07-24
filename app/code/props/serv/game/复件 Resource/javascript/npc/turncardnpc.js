/*
 * Copyright 2009-2010 Dream2 Network Technology, Inc. All rights reserved.
 */
//宠物追踪
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);


function OnSelect(jssystem, self, send, type)
{
    var kernel = jssystem.GetKernel();

    if (type == 10)
    {
        kernel.BeginMenu(self);
        var v = new VarList();
        kernel.AddTitle(self, "Slave_Npc_100", null);
        kernel.AddMenu(self, "Slave_Npc_101", 10, null);
        kernel.AddMenu(self, "close", 2, null);
        kernel.EndMenu(self, send);
    }
    else if (type == 2)
    {
        kernel.CloseMenu(send);
    }
    else if (type == 1)
    {
        kernel.OpenUI(send, "UI_CardLinkPlay_Xml");
        kernel.CloseMenu(send);
    }
}

