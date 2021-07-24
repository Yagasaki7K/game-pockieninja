/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

function OnSelect(jssystem, npc, player, type)
{
    var kernel = jssystem.GetKernel();

    if (type == 1)
    {
        kernel.BeginMenu(npc);
        kernel.AddTitle(npc, "Say_n27002", null);
        kernel.AddMenu(npc, "close", 2, null);
        kernel.EndMenu(npc, player);
    }
    else if (type == 2)
    {
        kernel.CloseMenu(player);
    }
}