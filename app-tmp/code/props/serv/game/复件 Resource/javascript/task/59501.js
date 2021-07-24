/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

// 免费强化装备任务

// 接受任务时检查背包是否放得下
function OnTestTaskAccept(jssystem, player, task, ItemList)
{
    var ItemInfo1 = new PlaceItemInfo("i161060", 1);
    jssystem.ItemListAddItemPlaceInfo(ItemList, ItemInfo1);
}

// 接受任务后给予免费强化道具
function OnAfterTaskAccept(jssystem, player, task)
{
    var kernel = jssystem.GetKernel();
    var ItemList = jssystem.GetPlaceItemList();

    var ItemInfo1 = new PlaceItemInfo("i161060", 1);
    ItemInfo1.SetIntProp(LogicTool.ToInt(PropertyIndex.ItemBindingStatus), LogicTool.ToInt(CommonDefine.BandingState_Yet));
    jssystem.ItemListAddItemPlaceInfo(ItemList, ItemInfo1);

    var packsystem = jssystem.GetPackSystem();
    if (!packsystem.CheckItemListPlacePack(player, ItemList))
    {
        kernel.SysInfo(player, SysInfoType.SYSINFO_TOP, "Task_Err_PackFullFailAccept", null);
        return;
    }

    packsystem.PlacePackItemList(player, ItemList);
}