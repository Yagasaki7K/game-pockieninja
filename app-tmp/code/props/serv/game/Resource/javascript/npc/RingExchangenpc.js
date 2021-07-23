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
        kernel.AddTitle(npc, kernel.QueryString(npc, PropertyIndex.NpcSay), null);
        kernel.AddMenu(npc, "ExChange20Ringe", 10, null);  // 兑换20级
        kernel.AddMenu(npc, "ExChange30Ringe", 11, null);  // 兑换30级
        kernel.AddMenu(npc, "ExChange40Ringe", 12, null);  // 兑换40级
        kernel.AddMenu(npc, "ExChange50Ringe", 13, null);  // 兑换50级
        kernel.AddMenu(npc, "ExChange60Ringe", 14, null);  // 兑换60级
        kernel.AddMenu(npc, "ExChange70Ringe", 15, null);  // 兑换70级
        kernel.AddMenu(npc, "ExChange80Ringe", 16, null);  // 兑换80级
        kernel.AddMenu(npc, "close", 2, null);
        kernel.EndMenu(npc, player);
    }
    else if (type == 2)
    {
        kernel.CloseMenu(player);
    }
    else if (type == 10 || type == 11 || type == 12 || type == 13 || type == 14 ||  type == 15 || type == 16)
        {
            kernel.CloseMenu(player);
            var RingExchangeSystem = jssystem.GetRingExchangeSystem();
            RingExchangeSystem.OnSelectExChangeLevel(player, type);
        }
}