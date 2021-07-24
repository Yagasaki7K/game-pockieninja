/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

// 免费装备附魔 分别给以一个附魔石和一个免费附魔道具

function OnTestTaskAccept(jssystem, player, task, ItemList)
{
    var ItemInfo1 = new PlaceItemInfo("i400000", 1);
    jssystem.ItemListAddItemPlaceInfo(ItemList, ItemInfo1);
    var ItemInfo2 = new PlaceItemInfo("i161020", 1);
    jssystem.ItemListAddItemPlaceInfo(ItemList, ItemInfo2);
}

function OnAfterTaskAccept(jssystem, player, task)
{
    var kernel = jssystem.GetKernel();

    var ItemList = jssystem.GetPlaceItemList();

    var ItemInfo1 = new PlaceItemInfo("i400000", 1);
    ItemInfo1.SetIntProp(LogicTool.ToInt(PropertyIndex.ItemBindingStatus), LogicTool.ToInt(CommonDefine.BandingState_Yet));
    jssystem.ItemListAddItemPlaceInfo(ItemList, ItemInfo1);

    var ItemInfo2 = new PlaceItemInfo("i161020", 1);
    ItemInfo2.SetIntProp(LogicTool.ToInt(PropertyIndex.ItemBindingStatus), LogicTool.ToInt(CommonDefine.BandingState_Yet));
    jssystem.ItemListAddItemPlaceInfo(ItemList, ItemInfo2);

    var packsystem = jssystem.GetPackSystem();
    if (!packsystem.CheckItemListPlacePack(player, ItemList))
    {
        kernel.SysInfo(player, SysInfoType.SYSINFO_TOP, "Task_Err_PackFullFailAccept", null);
        return;
    }

    // 放置道具
    packsystem.PlacePackItemList(player, ItemList);
}