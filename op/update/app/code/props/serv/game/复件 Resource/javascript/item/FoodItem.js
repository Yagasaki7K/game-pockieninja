/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

// 食物加buffer脚本

importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

// item:道具
// player:玩家
function OnUse(jssystem, item, player)
{
    var kernel = jssystem.GetKernel();
    
    var playerLevel = kernel.QueryInt(player, PropertyIndex.Level);
    var itemUseLevel = kernel.QueryInt(item, PropertyIndex.ItemUseLevel);
    if (itemUseLevel > playerLevel)
    {
        return;
    }

    var buffSystem = jssystem.GetBuffSystem();

    var itemConfig = kernel.GetConfig(item);
    var BufferID = kernel.QueryConfigInt(itemConfig, PropertyIndex.ItemBufferID);
    var BufferLastTime = kernel.QueryConfigInt(itemConfig, PropertyIndex.ItemBufferLastTime);

    buffSystem.AddBuff(player, BufferID, BufferLastTime);

    kernel.IncInt(item, PropertyIndex.ItemFoldNum, -1);

    // 使用食物任务
    var TaskMsg = new VarList();
    TaskMsg.AddInt(RookieTaskCommandType.RookieCommand_UseFoodItem);
    kernel.Command(player, CommandDefine.COMMAND_ROOKIECOMMAND, TaskMsg);
}