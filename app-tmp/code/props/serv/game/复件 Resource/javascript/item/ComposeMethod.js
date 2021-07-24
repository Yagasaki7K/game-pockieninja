/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

// 合成配方道具脚步

importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);

// item:道具
// player:玩家
function OnUse(jssystem, item, player)
{
    var kernel = jssystem.GetKernel();
    if (!kernel.IsClass(item, ClassIndex.CLASS_COMPOSEMETHODITEM))
    {
        return;
    }

    var ComposeMethod = kernel.QueryInt(item, PropertyIndex.ComposeMethodID);
    if (ComposeMethod == 0)
    {
        return;
    }

    var findRow = kernel.FindRecordInt(player, RecordIndex.ComposeMethod, 0, ComposeMethod);
    if (findRow >= 0)
    {
        // 减叠加数量
        kernel.IncInt(item, PropertyIndex.ItemFoldNum, -1);
        kernel.SysInfo(player, SysInfoType.SYSINFO_TOP, "ComposeMethodIDAlreadyExists", null);
        return;
    }

    var ComposeIDVar = new VarList();
    ComposeIDVar.AddInt(ComposeMethod);
    // 添加到
    if (kernel.AddRecordRows(player, RecordIndex.ComposeMethod, -1, ComposeIDVar))
    {
        // 减叠加数量
        kernel.IncInt(item, PropertyIndex.ItemFoldNum, -1);

        var msg = new VarList();
        msg.AddInt(ComposeMethod);
        kernel.Custom(player, ServerCustomDefine.SERVER_CUSTOM_CUSTOM_COMPOSEAPPENDNEWEMETHOD, msg);
    }
}