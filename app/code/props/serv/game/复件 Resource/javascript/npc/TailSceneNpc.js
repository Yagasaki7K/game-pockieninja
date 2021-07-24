/*
 * Copyright 2009-2010 Dream2 Network Technology, Inc. All rights reserved.
 */
//五影会议室
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);


function OnSelect(jssystem, self, send, type)
{
    var kernel = jssystem.GetKernel();

    var tailbeastSystem = jssystem.GetTailBeastSystem();

    if (type == 1)
    {
        kernel.BeginMenu(self);
        kernel.AddTitle(self, "NpcMenu_Tail_Title", null);
        kernel.AddMenu(self, "NpcMenu_Tail_Enter", 10, null);//进入铸造屋
        kernel.AddMenu(self, "close", 2, null);
        kernel.EndMenu(self, send);
    }
    else if (type == 2)
    {
        kernel.CloseMenu(send);
    }
    else if (type == 10)
    {
        kernel.CloseMenu(send);
        tailbeastSystem.EntryTailScene(send);
    }
}

