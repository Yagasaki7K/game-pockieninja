importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

function OnSelect(jssystem, npc, player, type)
{
    var kernel = jssystem.GetKernel();
    var TollGateSystem = jssystem.GetTollgateCloneScene();

    // 进入次数重置
    var time = kernel.QueryInt(player, PropertyIndex.TollGatePerDayFlush);
    var zreoTime = LogicTool.GetTaday(kernel);
    if (zreoTime != time)
    {
        kernel.SetInt(player, PropertyIndex.TollGatePerDayFlush, zreoTime);
        kernel.SetInt(player, PropertyIndex.EntryTollGateSceneTimes, 0);
    }

    if (type == 1)
    {
        kernel.BeginMenu(npc);
        kernel.AddTitle(npc, "NpcMenuTitle_Build_EntryCloneScene", null);

        var MaxTimes = TollGateSystem.GetEntryTollGateMaxTimes();
        var CurTimes = kernel.QueryInt(player, PropertyIndex.EntryTollGateSceneTimes);
        var HintSysInfo = new VarList();
        var subTimes = (MaxTimes - CurTimes >= 0) ? (MaxTimes - CurTimes) : 0;
        HintSysInfo.AddInt(subTimes);

        kernel.AddMenu(npc, "NpcMenu_ExchangeItem", 11, null);
        kernel.AddMenu(npc, "NpcMenu_EntryClonScene", 10, HintSysInfo);
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
            TollGateSystem.OnEntryTollGateLobbyScene(player, 3102);
        }
        else if (type == 11)
            {
                kernel.CloseMenu(player);
                kernel.OpenUI(player, "UI_ItemExchange_Xml");
            }
}