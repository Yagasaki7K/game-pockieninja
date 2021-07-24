/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);

function OnUse(jssystem, self, user)
{
    //
    var kernel = jssystem.GetKernel();
    var mpIndex = PropertyIndex.MP;
    var MP_INC = kernel.QueryInt(self, PropertyIndex.ItemMP);
    var maxMP = kernel.QueryInt(user, PropertyIndex.MaxMP);
    var mp = kernel.QueryInt(user, mpIndex);
    var newMp = mp + MP_INC;
    //var cmp = kernel.QueryInt(user, PropertyIndex.MPContainerValue);
    //var cmpMax = kernel.QueryInt(user, PropertyIndex.MPContainerMax);
    if(MP_INC <= 0)
    {
        return;
    }

    if (mp >= maxMP)
    {
        kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_065", null);
        return;
    }
    //var resMP = newMp - maxMP;
    newMp = newMp > maxMP ? maxMP : newMp;
    kernel.SetInt(user, mpIndex, newMp);

//    if (resMP > 0)
//    {
//        var newCMP = resMP + cmp;
//        newCMP = newCMP > cmpMax ? cmpMax : newCMP;
//        kernel.SetInt(user, PropertyIndex.MPContainerValue, newCMP);
//    }

    kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1);

}