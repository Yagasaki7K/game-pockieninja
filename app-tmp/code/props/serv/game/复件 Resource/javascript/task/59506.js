/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

function OnTestTaskAccept(jssystem, player, task, ItemList)
{
    var kernel = jssystem.GetKernel();
    var AvatarID = kernel.QueryString(player, PropertyIndex.FristSelectAvatarID);

    var ItemInfo1 = new PlaceItemInfo(AvatarID, 1);
    jssystem.ItemListAddItemPlaceInfo(ItemList, ItemInfo1);

    var ItemInfo2 = new PlaceItemInfo(AvatarID, 1);
    jssystem.ItemListAddItemPlaceInfo(ItemList, ItemInfo2);

    var ItemInfo3 = new PlaceItemInfo(AvatarID, 1);
    jssystem.ItemListAddItemPlaceInfo(ItemList, ItemInfo3);
}

// 给予三件外套
function OnAfterTaskAccept(jssystem, player, task)
{
    var kernel = jssystem.GetKernel();
    var ItemList = jssystem.GetPlaceItemList();

    var AvatarID = kernel.QueryString(player, PropertyIndex.FristSelectAvatarID);
    var ItemInfo1 = new PlaceItemInfo(AvatarID, 1);
    ItemInfo1.SetIntProp(LogicTool.ToInt(PropertyIndex.ItemBindingStatus), LogicTool.ToInt(CommonDefine.BandingState_Yet));
    jssystem.ItemListAddItemPlaceInfo(ItemList, ItemInfo1);

    var ItemInfo2 = new PlaceItemInfo(AvatarID, 1);
    ItemInfo2.SetIntProp(LogicTool.ToInt(PropertyIndex.ItemBindingStatus), LogicTool.ToInt(CommonDefine.BandingState_Yet));
    jssystem.ItemListAddItemPlaceInfo(ItemList, ItemInfo2);

    var ItemInfo3 = new PlaceItemInfo(AvatarID, 1);
    ItemInfo3.SetIntProp(LogicTool.ToInt(PropertyIndex.ItemBindingStatus), LogicTool.ToInt(CommonDefine.BandingState_Yet));
    jssystem.ItemListAddItemPlaceInfo(ItemList, ItemInfo3);

    var packsystem = jssystem.GetPackSystem();
    if (!packsystem.CheckItemListPlacePack(player, ItemList))
    {
        kernel.SysInfo(player, SysInfoType.SYSINFO_TOP, "Task_Err_PackFullFailAccept", null);
        return;
    }

    packsystem.PlacePackItemList(player, ItemList);
}

