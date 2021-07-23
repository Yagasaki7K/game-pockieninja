/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);

var ary = new Object();
//time:hour, expmul:+XX%
ary["i150400"] = {time:1, expmul:30};
ary["i150401"] = {time:4, expmul:30};
ary["i150402"] = {time:8, expmul:30};


//大厅加经验物品脚本
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

    var addMul = obj["expmul"];
    if (addMul == null || addMul <= 0)
    {
        return;
    }

    var addtime = availTime * 3600;

    var TrainSystem = jssystem.GetTrainSystem();

    if(!TrainSystem.UseExpItem(user, addtime, addMul))
    {
        return;
    }

    //增加日志
    kernel.SavePlayerLog(user, LogDefine.LOG_TYPE_USEITEM, kernel.GetConfig(self), String(kernel.QueryInt(user, PropertyIndex.Level)), String(availTime), "", kernel.GetUID(self), "");

    //删除物品
    if (kernel.QueryInt(self, PropertyIndex.ItemFoldNum) > 1)
    {
        kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1);
    }
    else
    {
        kernel.DestroySelf(self);
    }


}

