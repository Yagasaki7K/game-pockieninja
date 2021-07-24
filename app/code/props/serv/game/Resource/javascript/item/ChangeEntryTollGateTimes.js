/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */
importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);

// 已废弃

function OnUse(jssystem, self, user)
{
    var kernel = jssystem.GetKernel();
    kernel.SetInt(user, PropertyIndex.EntryTollGateSceneTimes, 0);
    kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1);
}