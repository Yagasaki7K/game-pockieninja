/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

// 已废弃不用
importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

function OnUse(jssystem, self, user)
{
    var kernel = jssystem.GetKernel();
    var buffSystem = jssystem.GetBuffSystem();

    buffSystem.AddBuff(user, 4000);
    
    kernel.IncInt(self, PropertyIndex.ItemFoldNum,-1);
}