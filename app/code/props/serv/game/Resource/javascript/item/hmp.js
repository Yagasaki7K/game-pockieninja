/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Public);

//增加查克拉
// self :道具
// user:玩家
function OnUse(jssystem, self, user)
{
    var kernel = jssystem.GetKernel();
    var mpIndex = PropertyIndex.MP;
    var hpIndex = PropertyIndex.HP;
    var MP_INC = kernel.QueryInt(self, PropertyIndex.ItemMP);
    var HP_INC = kernel.QueryInt(self, PropertyIndex.ItemHP);

    var maxMP = kernel.QueryInt(user, PropertyIndex.MaxMP);
    var mp = kernel.QueryInt(user, mpIndex);
    //var cmp = kernel.QueryInt(user, PropertyIndex.MPContainerValue);
    //var cmpMax = kernel.QueryInt(user, PropertyIndex.MPContainerMax);

    var maxHP = kernel.QueryInt(user, PropertyIndex.MaxHP);
    var hp = kernel.QueryInt(user, hpIndex);
    //var chp = kernel.QueryInt(user, PropertyIndex.HPContainerValue);
    //var chpMax = kernel.QueryInt(user, PropertyIndex.HPContainerMax);

    if(MP_INC <= 0 && HP_INC <= 0)
    {
        return;
    }

    if (hp >= maxHP && mp >= maxMP)
    {
        kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_066", null);
        return;
    }

    var newMp = mp + MP_INC;
    //var resMP = newMp - maxMP;
    newMp = newMp > maxMP ? maxMP : newMp;
    kernel.SetInt(user, mpIndex, newMp);
//    if (resMP > 0)
//    {
//        var newCMP = resMP + cmp;
//        newCMP = newCMP > cmpMax ? cmpMax : newCMP;
//        kernel.SetInt(user, PropertyIndex.MPContainerValue, newCMP);
//    }


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

