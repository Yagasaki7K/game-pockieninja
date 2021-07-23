/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */
// 野外探索钥匙

importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Kernel.KernelPublic);

//var ary = new Object();
//
//ary["i150046"] = {searchid:21012};
//ary["i150047"] = {searchid:21022};
//ary["i150048"] = {searchid:21032};
//ary["i150049"] = {searchid:22012};
//ary["i150050"] = {searchid:22022};
//ary["i150051"] = {searchid:22032};
//ary["i150052"] = {searchid:23012};
//ary["i150053"] = {searchid:23022};
//ary["i150054"] = {searchid:23032};
//ary["i150055"] = {searchid:24012};
//ary["i150056"] = {searchid:24022};
//ary["i150057"] = {searchid:24032};
//ary["i150058"] = {searchid:25012};
//ary["i150059"] = {searchid:25022};
//ary["i150060"] = {searchid:25032};
//ary["i150061"] = {searchid:26012};
//ary["i150062"] = {searchid:26052};
//ary["i150063"] = {searchid:26022};
//ary["i150064"] = {searchid:26032};
//ary["i150065"] = {searchid:26042};
//ary["i150066"] = {searchid:27012};
//ary["i150067"] = {searchid:27022};
//ary["i150068"] = {searchid:27032};
//ary["i150069"] = {searchid:27042};

//不可以使用钥匙的场景编号
var LimitScene = new Array(3101, 3102,111,121,131,141,151,161,171);



//野外探索钥匙
// self:道具
// user:玩家
function OnUse(jssystem, self, user)
{
    var kernel = jssystem.GetKernel();
    if (! kernel.Exists(self))
        return;

    if (! kernel.Exists(user))
        return;

//    var itemconfig = kernel.GetConfig(self);
//    var obj = ary[itemconfig];
//    if(obj == null)
//    {
//        return;
//    }
//
//    var searchid = obj["searchid"];
//    if(searchid == null || searchid <= 0)
//    {
//        return;
//    }

    var curSceneId = kernel.QueryInt(user, PropertyIndex.LogicSceneID);

    for(var i = 0; i < LimitScene.length; i++)
    {
        if(curSceneId == LimitScene[i])
        {
            //kernel.SysInfo(user, SysInfoType.SYSINFO_CHAT, "FeedBack_Common_170", null);
            kernel.ShowMsgBox(user, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "FeedBack_Common_170", null, null);
            return;
        }
    }

    var searchid = kernel.QueryInt(self, PropertyIndex.GetItemsId);
    if(searchid <= 0)
    {
        return;
    }

    var outsearchsystem = jssystem.GetOutSearchSystem();

    if(outsearchsystem.UseOutSearchKey(user, searchid))
    {
        kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1);
    }

}

