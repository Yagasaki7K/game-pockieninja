/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);

var ary = new Object();

//time:hour
ary["i150343"] = {time:1};
ary["i150344"] = {time:4};
ary["i150399"] = {time:8};


//训练保护符
// self:道具
// user:玩家
function OnUse(jssystem, self, user)
{
    var kernel = jssystem.GetKernel();
    if (! kernel.Exists(self))
        return;

    if (! kernel.Exists(user))
        return;

    var itemconfig = kernel.GetConfig(self);
    var obj = ary[itemconfig];
    if (obj == null)
    {
        return;
    }

    var availTime = obj["time"];
    if (availTime == null || availTime <= 0)
    {
        return;
    }

    var addtime = availTime * 3600;

    var TrainSystem = jssystem.GetTrainSystem();

    if(!TrainSystem.UseProtItem(user, addtime))
    {
        return;
    }

    //删除物品
    if (kernel.QueryInt(self, PropertyIndex.ItemFoldNum) > 1)
    {
        kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1);
    }
    else
    {
        kernel.DestroySelf(self);
    }

    var infoVars = new VarList();
    infoVars.AddInt(availTime);
    kernel.ShowMsgBox(user, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "Train_Sysinfo_310", infoVars, null);    

    //增加日志
    kernel.SavePlayerLog(user, LogDefine.LOG_TYPE_USEITEM, kernel.GetConfig(self), String(kernel.QueryInt(user, PropertyIndex.Level)), String(availTime), "", kernel.GetUID(self), "");

}

