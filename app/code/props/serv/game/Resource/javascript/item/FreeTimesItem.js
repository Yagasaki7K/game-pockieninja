/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);

// 免费次数道具脚步

// 单个使用道具
// item:道具
// player:玩家

function OnUse(jssystem, item, player)
{
    //
    var kernel = jssystem.GetKernel();
    var classindex = kernel.FindClass("Player");

    if (!kernel.IsClass(item, ClassIndex.CLASS_FREETIMESITEM))
    {
        return;
    }

    var freePropName = kernel.QueryString(item, PropertyIndex.ItemFreePropName);
    var PropIndex = kernel.FindPropertyIndex(classindex, freePropName);
    if (PropIndex == -1)
        return;

    var FreeTimes = kernel.QueryInt(item, PropertyIndex.ItemFreeTimes);

    kernel.IncInt(player, PropIndex, FreeTimes);

    var SysInfoVar = new VarList();
    SysInfoVar.AddInt(FreeTimes);
    SysInfoVar.AddString("FreePropName_" + freePropName);
    kernel.SysInfo(player, SysInfoType.SYSINFO_CHAT, "UseFreeItemTimes", SysInfoVar);

    kernel.IncInt(item, PropertyIndex.ItemFoldNum, -1);
}

// 批量使用道具
// item:道具
// player:玩家
// foldNum:使用道具数量
function OnBatchUse(jssystem, item, player, foldNum)
{
    var kernel = jssystem.GetKernel();
    if (!kernel.IsClass(item, ClassIndex.CLASS_FREETIMESITEM))
    {
        return;
    }

    var freePropName = kernel.QueryString(item, PropertyIndex.ItemFreePropName);
    var classindex = kernel.FindClass("Player");
    var PropIndex = kernel.FindPropertyIndex(classindex, freePropName);
    if (PropIndex == -1)
        return;

    var FreeTimes = (kernel.QueryInt(item, PropertyIndex.ItemFreeTimes)) * foldNum;

    kernel.IncInt(player, PropIndex, FreeTimes);

    var SysInfoVar = new VarList();
    SysInfoVar.AddInt(FreeTimes);
    SysInfoVar.AddString("FreePropName_" + freePropName);
    kernel.SysInfo(player, SysInfoType.SYSINFO_CHAT, "UseFreeItemTimes", SysInfoVar);

    kernel.IncInt(item, PropertyIndex.ItemFoldNum, -foldNum);
}