/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);

var ary = new Object();

//time:day
ary["i152039"] = {time:7};
//VIP礼包
function OnUse(jssystem, self, user)
{
    var kernel = jssystem.GetKernel();
    //kernel.Trace("开始执行closefight.js脚本");
    if (! kernel.Exists(self))
    {
        //kernel.Trace(self);
        return;
    }
    if (! kernel.Exists(user))
    {
        //kernel.Trace(user);
        return;
    }
    var itemconfig = kernel.GetConfig(self);
    var obj = ary[itemconfig];
    if (obj == null)
    {
        //kernel.Trace("obj:" + obj);
        return;
    }

    var availTime = obj["time"];
    if (availTime == null || availTime <= 0)
    {
        return;
    }

    var addtime = availTime * 24 * 3600;
    var nowTime = kernel.GetGameWorldNow();
    var lastTime = kernel.QueryInt(user, PropertyIndex.CloseFightLastTime);
    var remainTime = lastTime - nowTime;
    //为过期的道具时间累加
    if (remainTime > 0)
    {
        kernel.SetInt(user, PropertyIndex.CloseFightLastTime, (nowTime + addtime + remainTime));
    }
    else
    {
        kernel.SetInt(user, PropertyIndex.CloseFightLastTime, (nowTime + addtime));
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

