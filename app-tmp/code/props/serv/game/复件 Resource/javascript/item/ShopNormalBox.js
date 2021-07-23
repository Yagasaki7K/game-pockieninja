/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

// 商场盒子
importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);
importPackage(java.util);

// item:道具
// player:玩家
function OnUse(jssystem, item, player)
{
    var kernel = jssystem.GetKernel();
    if (!kernel.IsClass(item, ClassIndex.CLASS_DEBRISITEM))
    {
        return;
    }

    var dropid = kernel.QueryInt(item, PropertyIndex.BoxDropID);
    var dropcount = kernel.QueryInt(item, PropertyIndex.DropMaxCount);

    if (dropid != 0)
    {
        var packsystem = jssystem.GetPackSystem();
        var dropsystem = jssystem.GetDropSystem();

        var shapelist = jssystem.GetIntAyyayList();
        for (var i = 0; i < dropcount; i++)
        {
            jssystem.ArrayListAddInt(shapelist, ContainerDefine.ITEMSHAPESIX);
        }

        if (!packsystem.CheckPlacePackItemList(player, shapelist))
        {
            kernel.SysInfo(player, SysInfoType.SYSINFO_TOP, "FeedBack_Common_071", null);
            return;
        }

        var dropitemlist = dropsystem.GetDropItems(player, dropid);

        var lookSystem = jssystem.GetLookSystem();
        var SrcBandingStatus = kernel.QueryInt(item, PropertyIndex.ItemBindingStatus);
        for (var i = 0; i < dropitemlist.size(); i++)
        {
            // 设置与盒子道具一样的绑定类型
            var dItem = dropitemlist.get(i);
            kernel.SetInt(dItem, PropertyIndex.ItemBindingStatus, SrcBandingStatus);

            var s = new VarList();
            s.AddString(kernel.QueryString(dropitemlist.get(i), PropertyIndex.ItemName));
            kernel.SysInfo(player, SysInfoType.SYSINFO_CHAT, "FeedBack_Common_119", s);

            var PetConfig = kernel.GetConfig(dItem);
            if (kernel.GetClassIndex(dItem) == ClassIndex.CLASS_PETITEM && PetConfig.equals("i281008"))
            {
                lookSystem.ShowItems(player, CommonDefine.ItemLinkShow_PetEggBox, dItem, null, false);
            }
        }

        packsystem.AutoPlacePackItems(player, dropitemlist);
    }

    kernel.IncInt(item, PropertyIndex.ItemFoldNum, -1);
}
  