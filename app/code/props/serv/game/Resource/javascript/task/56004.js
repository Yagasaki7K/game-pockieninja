/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

function OnTestTaskAccept(jssystem, player, task, ItemList)
{

}
// 免费给予一次附魔次数
function OnAfterTaskAccept(jssystem, player, task)
{
    //var kernel = jssystem.GetKernel();
    var capitalSystem = jssystem.GetCapitalSystem();
    if (capitalSystem.CanIncCapital(player, CapitalDefine.CAPITALTYPE_3, 10, CapitalDefine.CAPITAL_REASON_TASK_ACCEPET) < 10)
    {
        return;
    }

    capitalSystem.IncCapital(player, CapitalDefine.CAPITALTYPE_3, 10, CapitalDefine.CAPITAL_REASON_TASK_ACCEPET, String(task.ID), "");
}