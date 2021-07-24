/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);

// 炸弹 脚本
function OnUse(jssystem, item, player)
{
    var kernel = jssystem.GetKernel();
    var hpIndex = PropertyIndex.HP;
    var hp = kernel.QueryInt(player, hpIndex);
    var newHp = LogicTool.ToInt(hp * 0.3);  //当前血量的30%
    var IncHp = hp - newHp;
    if (IncHp < 1)
    {
        kernel.SetInt(player, hpIndex, 1);
    }
    else
    {
        kernel.IncInt(player, hpIndex, -newHp);
    }
    kernel.IncInt(item, PropertyIndex.ItemFoldNum, -1);
}