/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

// 生命便携包

importPackage(com.d2.serv.game.Public);
var ary = new Object();
ary["i160201"] = {level:1, value:100};
ary["i160202"] = {level:2, value:200};
ary["i160203"] = {level:3, value:400};
ary["i160204"] = {level:4, value:800};
ary["i160205"] = {level:5, value:1600};
ary["i160206"] = {level:6, value:3200};
ary["i160207"] = {level:7, value:6400};
ary["i160208"] = {level:8, value:12800};
ary["i160209"] = {level:9, value:25600};
ary["i160210"] = {level:10, value:51200};

var maxLevel = 10;
function OnUse(jssystem,self,user){
	//���������
    var kernel = jssystem.GetKernel();
    var conLevel = kernel.QueryInt(user,PropertyIndex.HPContainerLevel);
    var itemconfig = kernel.GetConfig(self);
    var obj = ary[itemconfig];
    var tlevel = obj["level"];
    if (conLevel == maxLevel)
    {
         kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_052", null);
        return;
    }
    if (tlevel <= conLevel)
    {
        kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_053", null);
        return;
    }
    if (tlevel > conLevel + 1)
    {
        kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_053", null);
        return;
    }
    //使用
    kernel.SetInt(user,PropertyIndex.HPContainerLevel,tlevel);
    kernel.SetInt(user,PropertyIndex.HPContainerMax,obj["value"]);
    kernel.DestroySelf(self);
}