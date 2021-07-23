/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */
// 开启宝箱

importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(java.util);

// 开启宝箱
// self:道具
// user:玩家
function OnUse(jssystem, self, user, capitalType)
{
    var kernel = jssystem.GetKernel();
    if (! kernel.Exists(self))
        return;

    if (! kernel.Exists(user))
        return;

    var itemconfig = kernel.GetConfig(self);

    if(itemconfig.length <= 0)
    {
        return;
    }
    //检测背包容量是否足够
    var shapelist = jssystem.GetIntAyyayList();

    jssystem.ArrayListAddInt(shapelist, ContainerDefine.ITEMSHAPESIX);
    var packsystem = jssystem.GetPackSystem();
    if (!packsystem.CheckPlacePackItemList(user, shapelist))
    {
        kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "lg_Depot_Sysinfo_010", null);
        return;
    }
    var openBoxSystem = jssystem.GetOpenBoxSystem();
    
    openBoxSystem.UseBox(user, self, capitalType);
}

