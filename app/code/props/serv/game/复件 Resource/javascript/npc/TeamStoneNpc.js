/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

function OnSelect(jssystem, npc, player, type)
{
    var kernel = jssystem.GetKernel();
    var TeamSystem = jssystem.GetTeamSystem();
    if (type == 1)
    {
        kernel.BeginMenu(npc);
        kernel.AddTitle(npc, kernel.QueryString(npc,PropertyIndex.NpcSay), null);
        kernel.AddMenu(npc, "NpcMenu_EntryTeamStone", 10, null);  // 进入组队集结石
        kernel.AddMenu(npc, "NpcMenu_Hotel", 19, null);         // 进入休息间
        kernel.AddMenu(npc, "close", 2, null);
        kernel.EndMenu(npc, player);
    }
    else if (type == 2)
    {
        kernel.CloseMenu(player);
    }
    else if (type == 10)
    {
        kernel.CloseMenu(player);
        if(TeamSystem.IsInTeam(player))
        {
            if (!TeamSystem.IsCatpain(player))
            {
                kernel.ShowMsgBox(player, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "TeamStone_ForbidEntry", null, null);
                return;     
            }
        }

        kernel.OpenUI(player, "UI_TeamFrame_Xml");
    }
    else if (type == 19)
    {
        kernel.BeginMenu(npc);
        kernel.AddTitle(npc, "NpcMenuTitle_Build_Hotel", null);
        kernel.AddMenu(npc, "NpcMenu_Hotel_HMP", 11, null);
        kernel.AddMenu(npc, "close", 2, null);
        kernel.EndMenu(npc, player);
    }
    else if (type == 11)
    {
        var parmlist = new VarList();
        var level = kernel.QueryInt(player, PropertyIndex.Level);
        var cost = 0;
        if (level > 10)
        {
            cost = -0.005 * level * level + 1.593 * level + 61.72;
        }
        parmlist.AddInt(cost);

        kernel.BeginMenu(npc);
        kernel.AddTitle(npc, "NpcMenuTitle_Hotel_HMP", parmlist);
        kernel.AddMenu(npc, "NpcMenu_Hotel_OK", 50, null);
        kernel.AddMenu(npc, "close", 2, null);
        kernel.EndMenu(npc, player);
    }
    else if (type == 50)
    {
        kernel.CloseMenu(player);
        var maxhp = kernel.QueryInt(player, PropertyIndex.MaxHP);
        var maxmp = kernel.QueryInt(player, PropertyIndex.MaxMP);
        var hp = kernel.QueryInt(player, PropertyIndex.HP);
        var mp = kernel.QueryInt(player, PropertyIndex.MP);

        if (hp >= maxhp && mp >= maxmp)
        {
            kernel.SysInfo(player, SysInfoType.SYSINFO_TOP, "FeedBack_Common_130", null);
            return;
        }

        var capitalsystem = jssystem.GetCapitalSystem();

        var level = kernel.QueryInt(player, PropertyIndex.Level);
        var cost = 0;
        if (level > 10)
        {
            cost = -0.005 * level * level + 1.593 * level + 61.72;
        }

        var dec_money = capitalsystem.CanDecCapital(player, CapitalDefine.CAPITALTYPE_0, cost, CapitalDefine.CAPITAL_REASON_HALLHPMP);
        if (dec_money < parseInt(cost))
        {
            kernel.SysInfo(player, SysInfoType.SYSINFO_TOP, "FeedBack_Common_128", null);
            return;
        }

        capitalsystem.DecCapital(player, CapitalDefine.CAPITALTYPE_0, cost, CapitalDefine.CAPITAL_REASON_HALLHPMP, "");

        kernel.SetInt(player, PropertyIndex.HP, maxhp);
        kernel.SetInt(player, PropertyIndex.MP, maxmp);
        kernel.SysInfo(player, SysInfoType.SYSINFO_TOP, "FeedBack_Common_129", null);
    }
}