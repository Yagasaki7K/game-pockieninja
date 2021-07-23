/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */
importPackage(com.d2.serv.game.Public);
var ary = new Object();

ary["i160221"] = {level:1, value:60};
ary["i160222"] = {level:2, value:120};
ary["i160223"] = {level:3, value:240};
ary["i160224"] = {level:4, value:480};
ary["i160225"] = {level:5, value:960};
ary["i160226"] = {level:6, value:1920};
ary["i160227"] = {level:7, value:3840};
ary["i160228"] = {level:8, value:7680};
ary["i160229"] = {level:9, value:15360};
ary["i160230"] = {level:10, value:30720};

var maxLevel = 10;
function OnUse(jssystem,self,user){
	//���������
    var kernel = jssystem.GetKernel();
    var conLevel = kernel.QueryInt(user,PropertyIndex.MPContainerLevel);
    var itemconfig = kernel.GetConfig(self);
    var obj = ary[itemconfig];
    var tlevel = obj["level"];
    if (conLevel == maxLevel)
    {
        kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_054", null);
        return;
    }
    if (tlevel <= conLevel)
    {
        kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_055", null);
        return;
    }
    if (tlevel > conLevel + 1)
    {
        kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_055", null);
        return;
    }
    //使用
    kernel.SetInt(user,PropertyIndex.MPContainerLevel,tlevel);
    kernel.SetInt(user,PropertyIndex.MPContainerMax,obj["value"]);
    kernel.DestroySelf(self);
}