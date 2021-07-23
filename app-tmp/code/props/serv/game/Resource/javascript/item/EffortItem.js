/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

// 成就道具

importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);

function OnUse(jssystem, item, player)
{
    var kernel = jssystem.GetKernel();
    if (! kernel.Exists(item))
        return;

    if (! kernel.Exists(player))
        return;

    if (!kernel.IsClass(item, ClassIndex.CLASS_EFFORITEM))
    {
        return;
    }

    var EffortID = kernel.QueryInt(item, PropertyIndex.ItemAddEffortID);

    kernel.IncInt(item, PropertyIndex.ItemFoldNum, -1);

    var EffortMsg = new VarList();
    EffortMsg.AddInt(CommonDefine.EffortSubType_UesItem);
    EffortMsg.AddInt(1);
    EffortMsg.AddInt(EffortID);
    kernel.Command(player, CommandDefine.COMMAND_EFFORT_REFRESH, EffortMsg);
}
