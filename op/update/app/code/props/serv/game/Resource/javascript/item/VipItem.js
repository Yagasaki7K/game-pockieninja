/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);

var ary = new Object();

//time:day
ary["i150270"] = {time:3};
ary["i150271"] = {time:7};
ary["i150272"] = {time:30};
ary["i150273"] = {time:90};

//VIP礼包
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

    var addtime = availTime * 24 * 3600;
    var nowTime = kernel.GetGameWorldNow();
    var lastTime = kernel.QueryInt(user, PropertyIndex.VipLastTime);

    if (kernel.QueryInt(user, PropertyIndex.VipRefreshTime) == 0)
    {
        kernel.SetInt(user, PropertyIndex.VipRefreshTime, nowTime);
    }

    var refreshtime = kernel.QueryInt(user, PropertyIndex.VipRefreshTime);
    if (nowTime > refreshtime)
    {
        var decTime = nowTime - refreshtime;
        if (lastTime > decTime)
        {
            kernel.IncInt(user, PropertyIndex.VipLastTime, -1 * decTime);
        }
        else
        {
            kernel.SetInt(user, PropertyIndex.VipLastTime, 0);
        }
    }

    kernel.IncInt(user, PropertyIndex.VipLastTime, addtime);

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

    if (!kernel.FindHeartBeat(user, HeartDefine.HEART_VIP_AVAIL))
    {
        kernel.AddClientHeartBeat(user, HeartDefine.HEART_VIP_AVAIL, 60 * 1000);
        var competesystem = jssystem.GetCompeteSystem();
        competesystem.AddVipCount(user);
    }


    var vars = new VarList();
    vars.AddInt(availTime);
    if (kernel.QueryInt(user, PropertyIndex.IsVip) == 0)
    {
        kernel.SysInfo(user, 1, "Vip_Sysinfo_100", vars);
        kernel.SetInt(user, PropertyIndex.IsVip, 1);
    }
    else
    {
        kernel.SysInfo(user, 1, "Vip_Sysinfo_101", vars);
    }

    var EffortMsg = new VarList();
    EffortMsg.AddInt(CommonDefine.EffortSubType_VIP);
    EffortMsg.AddInt(availTime);
    kernel.Command(user, CommandDefine.COMMAND_EFFORT_REFRESH, EffortMsg);
}

