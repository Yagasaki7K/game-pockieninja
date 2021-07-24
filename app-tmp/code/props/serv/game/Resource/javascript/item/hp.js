/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */
importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);

// 增加生命道具
// self:道具
// user:玩家
function OnUse(jssystem, self, user)
{
    var kernel = jssystem.GetKernel();
    var hpIndex = PropertyIndex.HP;
    var HP_INC = kernel.QueryInt(self, PropertyIndex.ItemHP);
    var maxHP = kernel.QueryInt(user, PropertyIndex.MaxHP);
    var hp = kernel.QueryInt(user, hpIndex);
    //var chp = kernel.QueryInt(user, PropertyIndex.HPContainerValue);
    //var chpMax = kernel.QueryInt(user, PropertyIndex.HPContainerMax);
    if(HP_INC <= 0)
    {
        return;
    }

    if (hp >= maxHP)
    {
        kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_064", null);
        return;
    }
    var newHp = hp + HP_INC;
    //var resHP = newHp - maxHP;
    newHp = newHp > maxHP ? maxHP : newHp;
    kernel.SetInt(user, hpIndex, newHp);

//    if (resHP > 0)
//    {
//        var newCHP = resHP + chp;
//        newCHP = newCHP > chpMax ? chpMax : newCHP;
//        kernel.SetInt(user, PropertyIndex.HPContainerValue, newCHP);
//    }

    kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1);
}