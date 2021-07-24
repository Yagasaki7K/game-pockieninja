importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);
importPackage(java.util);


// 随机开盒子道具
var ary = new Object();
ary["i152029"] = {systype:111};
ary["i152030"] = {systype:112};

// self:道具
// user:玩家
function OnUse(jssystem, self, user)
{
    var kernel = jssystem.GetKernel();
    if (!kernel.IsClass(self, ClassIndex.CLASS_DEBRISITEM))
    {
        return;
    }

    var dropid = kernel.QueryInt(self, PropertyIndex.BoxDropID);
    var dropcount = kernel.QueryInt(self, PropertyIndex.DropMaxCount);
    var droppropertytype = kernel.QueryInt(self, PropertyIndex.DropPropertyType);
    var droppropertyvalue = kernel.QueryInt(self, PropertyIndex.DropPropertyValue);
    var boxconfig = kernel.GetConfig(self);


    if (dropid != 0)
    {
        var packsystem = jssystem.GetPackSystem();
        var dropsystem = jssystem.GetDropSystem();

        var shapelist = jssystem.GetIntAyyayList();
        for (var i = 0; i < dropcount; i++)
        {
            jssystem.ArrayListAddInt(shapelist, ContainerDefine.ITEMSHAPESIX);
            //shapelist.add(LogicTool.ToInt(ContainerDefine.ITEMSHAPESIX));
        }

        if (!packsystem.CheckPlacePackItemList(user, shapelist))
        {
            kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_071", null);
            return;
        }

        var dropitemlist = dropsystem.GetDropItems(user, dropid);
        var selfConfig = kernel.GetConfig(self);
        var lookSystem = jssystem.GetLookSystem();


        //设置绑定属性
        var BandingStatus = kernel.QueryInt(self, PropertyIndex.ItemBindingStatus);


        for (var i = 0; i < dropitemlist.size(); i++)
        {
            var dItem = dropitemlist.get(i);

            //BandingStatus =  kernel.QueryInt(dItem, PropertyIndex.ItemBindingStatus);
             // 改变绑定状态
            //kernel.SetInt(dItem, PropertyIndex.ItemBindingStatus, BandingStatus);

            //是装备就鉴定
            var itemClass = kernel.GetClassIndex(dItem);
            if(itemClass == ClassIndex.CLASS_EQUIPITEM)
            {
                var identifysystem = jssystem.GetIdentifySystem();
                identifysystem.FlushEquipIdentifyProp(dItem);
            }

            var s = new VarList();
            s.AddString(kernel.QueryString(dropitemlist.get(i), PropertyIndex.ItemName));
            kernel.SysInfo(user, SysInfoType.SYSINFO_CHAT, "FeedBack_Common_119", s);

            if(selfConfig == "i150346")
            {
                //高级礼盒掉落是橙色外套,全服播报
                if (itemClass == ClassIndex.CLASS_AVATARITEM
                        && kernel.QueryInt(dItem, PropertyIndex.ItemColor) == 2)
                {
                    lookSystem.ShowItems(user, CommonDefine.ItemLinkShow_Gift, dItem, null, false);
                }
            }
            else if(selfConfig == "i152098")
            {
                //黄金宝物罐
		if( kernel.QueryInt(dItem, PropertyIndex.ItemIsBroadcast) == 1)
                   {
                       lookSystem.ShowItems(user, 123, dItem, null, false);
                   }
            }
            else if(selfConfig == "i152099")
            {
                //钻石宝物罐
		if( kernel.QueryInt(dItem, PropertyIndex.ItemIsBroadcast) == 1)
                   {
                       lookSystem.ShowItems(user, 124, dItem, null, false);
                   }
            }
            else if(selfConfig == "i152100")
            {
                //至尊宝物罐
		if( kernel.QueryInt(dItem, PropertyIndex.ItemIsBroadcast) == 1)
                   {
                       lookSystem.ShowItems(user, 125, dItem, null, false);
                   }
            }
            else if(selfConfig == "i152101")
            {
                //至尊宝石罐
		if( kernel.QueryInt(dItem, PropertyIndex.ItemIsBroadcast) == 1)
                   {
                       lookSystem.ShowItems(user, 126, dItem, null, false);
                   }
            }
            else if(selfConfig == "i150359")
            {
                //狂欢礼包
                var dropItemId = kernel.GetConfig(dItem);
                if ((itemClass == ClassIndex.CLASS_AVATARITEM && kernel.QueryInt(dItem, PropertyIndex.ItemColor) == 2)
                    || dropItemId == "i150270"    //3天VIP卡
                    || dropItemId == "i150272"    //30天VIP卡
                    || dropItemId == "i150078"    //恶魔讨伐证
                    || dropItemId == "i150302"    //幸运宝石
                    )
                {
                    lookSystem.ShowItems(user, CommonDefine.ItemLinkShow_NewYear, dItem, null, false);
                }
            }
            else if(selfConfig == "i150408")
            {
                //狂欢礼包(新增)
                var dropItemId = kernel.GetConfig(dItem);
                if ((itemClass == ClassIndex.CLASS_AVATARITEM && kernel.QueryInt(dItem, PropertyIndex.ItemColor) == 2)
                    || dropItemId == "i150270"    //3天VIP卡
                    || dropItemId == "i150272"    //30天VIP卡
                    || dropItemId == "i150302"    //幸运宝石
                    )
                {
                    lookSystem.ShowItems(user, CommonDefine.ItemLinkShow_GIFT1, dItem, null, false);
                }
            }
            else if(selfConfig == "i150415")
            {
                //六道仙人的勾玉
//                if(itemClass == ClassIndex.CLASS_EQUIPITEM)
//                {
//                    var identifysystem = jssystem.GetIdentifySystem();
//                    identifysystem.FlushEquipIdentifyProp(dItem);
//                }
                lookSystem.ShowItems(user, CommonDefine.ItemLinkShow_GouYu, dItem, null, false);
            }
            else if(selfConfig == "i150416")
            {
                //压岁钱红包
                var dropItemId = kernel.GetConfig(dItem);
                if (dropItemId == "i150422"     //666礼券
                    || dropItemId == "i150423"    //888礼券
                    || dropItemId == "i150424"    //1000礼券
                    )
                {
                    lookSystem.ShowItems(user, CommonDefine.ItemLinkShow_HongBao, dItem, null, false);
                }
            }
            else if(selfConfig == "i152029")
            {
                //星座称号礼盒
                lookSystem.ShowItems(user, 111, dItem, null, false);
            }
            else if(selfConfig == "i152030")
            {
                //属性称号礼盒
                lookSystem.ShowItems(user, 112, dItem, null, false);
            }
        }

        var toboxlist = packsystem.AutoPlacePackItems(user, dropitemlist);

        if (toboxlist.size() != dropitemlist.size())
        {
            for (var i = 0; i < dropitemlist.size(); i++)
            {
                var falg = 0;
                for (var j = 0; j < toboxlist.size(); j++)
                {
                    if (dropitemlist.get(i).equals(toboxlist.get(j)))
                    {
                        falg = 1;
                    }
                }

                if (falg == 0)
                {
                    kernel.DestroySelf(dropitemlist.get(i));
                }
            }
        }
    }

    if (droppropertytype != 0)
    {
        kernel.SavePlayerLog(user, LogDefine.LOG_TYPE_USEITEM, kernel.GetConfig(self), String(kernel.QueryInt(user, PropertyIndex.Level)), String(droppropertyvalue), "", kernel.GetUID(self), "");
        switch (droppropertytype)
                {
            case 1:
            {
                //石子
                var capitalsystem = jssystem.GetCapitalSystem();
                var addValue = capitalsystem.IncCapital(user, CapitalDefine.CAPITALTYPE_0, droppropertyvalue, CapitalDefine.CAPITAL_REASON_NORMALBOX, boxconfig, "");
                var s = new VarList();
                s.AddInt(addValue);
                kernel.SysInfo(user, SysInfoType.SYSINFO_CHAT, "FeedBack_Common_120", s);
                break;
            }
            case 2:
            {
                //礼券
                var capitalsystem = jssystem.GetCapitalSystem();
                capitalsystem.IncCapital(user, CapitalDefine.CAPITALTYPE_3, droppropertyvalue, CapitalDefine.CAPITAL_REASON_NORMALBOX, boxconfig, "");
                var s = new VarList();
                s.AddInt(droppropertyvalue);
                kernel.SysInfo(user, SysInfoType.SYSINFO_CHAT, "FeedBack_Common_121", s);
                break;
            }
            case 3:
            {
                //竞技场牌子
                kernel.IncInt(user, PropertyIndex.Honor, droppropertyvalue);
                var s = new VarList();
                s.AddInt(droppropertyvalue);
                kernel.SysInfo(user, SysInfoType.SYSINFO_CHAT, "FeedBack_Common_117", s);

                break;
            }
            case 4:
            {
                //积分
                var competesystem = jssystem.GetCompeteSystem();
                competesystem.AddScore(user, droppropertyvalue);
                var s = new VarList();
                s.AddInt(droppropertyvalue * 0.01);
                kernel.SysInfo(user, SysInfoType.SYSINFO_CHAT, "FeedBack_Common_118", s);
                break;
            }
            case 5:
            {
                //经验
                if (kernel.QueryInt(user, PropertyIndex.IsCompleteRookieTask) == CommonDefine.COMMAND_TASK_ROOKIESTATE)
                {
                    kernel.SysInfo(user, SysInfoType.SYSINFO_CHAT, "FeedBack_Common_068", null);
                    return;
                }
                var levelsystem = jssystem.GetLevelSystem();
                levelsystem.AddExp(user, droppropertyvalue);
                break;
            }
        }
    }


    kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1);
}

// 批量使用道具
// self： 道具
// user: 玩家
// foldNum:使用数量
function OnBatchUse(jssystem, self, user, foldNum)
{
    var kernel = jssystem.GetKernel();
    if (!kernel.IsClass(self, ClassIndex.CLASS_DEBRISITEM))
    {
        return;
    }

    var dropid = kernel.QueryInt(self, PropertyIndex.BoxDropID);
    var dropcount = kernel.QueryInt(self, PropertyIndex.DropMaxCount);
    var droppropertytype = kernel.QueryInt(self, PropertyIndex.DropPropertyType);
    var droppropertyvalue = kernel.QueryInt(self, PropertyIndex.DropPropertyValue) * foldNum;
    var boxconfig = kernel.GetConfig(self);

    if (droppropertytype != 0)
    {
        kernel.SavePlayerLog(user, LogDefine.LOG_TYPE_USEITEM, kernel.GetConfig(self), String(kernel.QueryInt(user, PropertyIndex.Level)), String(droppropertyvalue), String(foldNum), kernel.GetUID(self), "");
        switch (droppropertytype)
                {
            case 1:
            {
                //石子
                var capitalsystem = jssystem.GetCapitalSystem();
                var addValue = capitalsystem.IncCapital(user, CapitalDefine.CAPITALTYPE_0, droppropertyvalue, CapitalDefine.CAPITAL_REASON_NORMALBOX, boxconfig, "");
                var s = new VarList();
                s.AddInt(addValue);
                kernel.SysInfo(user, SysInfoType.SYSINFO_CHAT, "FeedBack_Common_120", s);
                break;
            }
            case 2:
            {
                //礼券
                var capitalsystem = jssystem.GetCapitalSystem();
                capitalsystem.IncCapital(user, CapitalDefine.CAPITALTYPE_3, droppropertyvalue, CapitalDefine.CAPITAL_REASON_NORMALBOX, boxconfig, "");
                var s = new VarList();
                s.AddInt(droppropertyvalue);
                kernel.SysInfo(user, SysInfoType.SYSINFO_CHAT, "FeedBack_Common_121", s);
                break;
            }
            case 3:
            {
                //竞技场牌子
                kernel.IncInt(user, PropertyIndex.Honor, droppropertyvalue);
                var s = new VarList();
                s.AddInt(droppropertyvalue);
                kernel.SysInfo(user, SysInfoType.SYSINFO_CHAT, "FeedBack_Common_117", s);
                break;
            }
            case 4:
            {
                //积分
                var competesystem = jssystem.GetCompeteSystem();
                competesystem.AddScore(user, droppropertyvalue);
                var s = new VarList();
                s.AddInt(droppropertyvalue * 0.01);
                kernel.SysInfo(user, SysInfoType.SYSINFO_CHAT, "FeedBack_Common_118", s);
                break;
            }
            case 5:
            {
                //经验
                if (kernel.QueryInt(user, PropertyIndex.IsCompleteRookieTask) == CommonDefine.COMMAND_TASK_ROOKIESTATE)
                {
                    kernel.SysInfo(user, SysInfoType.SYSINFO_CHAT, "FeedBack_Common_068", null);
                    return;
                }
                var levelsystem = jssystem.GetLevelSystem();
                levelsystem.AddExp(user, droppropertyvalue);
                break;
            }
        }
    }


    kernel.IncInt(self, PropertyIndex.ItemFoldNum, -foldNum);
}