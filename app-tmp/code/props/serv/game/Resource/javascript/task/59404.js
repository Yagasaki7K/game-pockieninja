/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

function OnTestTaskAccept(jssystem, player, task, ItemList)
{
    var ItemInfo1 = new PlaceItemInfo("i170112", 6);
    jssystem.ItemListAddItemPlaceInfo(ItemList, ItemInfo1);
}

// i170112
function OnAfterTaskAccept(jssystem, player, task)
{
    var kernel = jssystem.GetKernel();
    var ItemList = jssystem.GetPlaceItemList();

    var ItemInfo1 = new PlaceItemInfo("i170112", 6);
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