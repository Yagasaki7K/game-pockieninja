// 固定掉落脚步，主要用于宝石袋等道具


importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);
importPackage(java.util);

var ary = new Object();
ary["i152031"] = {systype:113};
ary["i152032"] = {systype:114};
ary["i152033"] = {systype:115};
ary["i152034"] = {systype:116};
ary["i152035"] = {systype:117};
ary["i152036"] = {systype:118};
ary["i152037"] = {systype:119};
ary["i152038"] = {systype:120};
ary["i159018"] = {systype:121};

// item:道具
// player:玩家
function OnUse(jssystem, item, player)
{
    var kernel = jssystem.GetKernel();
    if (!kernel.IsClass(item, ClassIndex.CLASS_DEBRISITEM))
    {
        return;
    }

    var FixDropID = kernel.QueryInt(item, PropertyIndex.BoxDropID);
    if (FixDropID == 0)
    {
        return;
    }

    var BandingStatus = kernel.QueryInt(item, PropertyIndex.ItemBindingStatus);
    var FixedDropSystem = jssystem.GetFixedDropSystem();
    var lookSystem = jssystem.GetLookSystem();

    // 得到固定掉落道具
    var FixedDropItemList = FixedDropSystem.GetCloneFixedDropItem(FixDropID);
    if(FixedDropItemList == null)
    {
        return;
    }
    // 设置掉落道具的属性
    FixedDropSystem.SetCloneFixedDropItem(FixedDropItemList, PropertyIndex.ItemBindingStatus, BandingStatus);
	if(kernel.QueryInt(item, PropertyIndex.ItemIsAppendLog) >  0)
    {
        kernel.SavePlayerLog(player, LogDefine.LOG_TYPE_USEITEM, kernel.GetConfig(item), String(kernel.QueryInt(player, PropertyIndex.Level)), "", "", kernel.GetUID(item), "");
    }
    if (FixedDropSystem.CheckFixedDropItem(player, FixedDropItemList))
    {
        // 放入背包
        var toboxlist = FixedDropSystem.PlaceFixedDropItem(player, FixedDropItemList);
        if(toboxlist.size() > 0)
        {
            var selfConfig = kernel.GetConfig(item);

            var itemList = new ArrayList();

            for (var i = 0; i < toboxlist.size(); i++)
            {

                var dItem = toboxlist.get(i);
              
                var broadItem = new ItemBroadcast();
                broadItem.config = dItem.config;

                //全服公告
                if (selfConfig == "i152031")
                {
                    //鹿丸的刃具袋
                    broadItem.type = 113;
                    itemList.add(broadItem);
                }
                else if (selfConfig == "i152032")
                {
                    //石田的工具箱
                    broadItem.type = 114;
                    itemList.add(broadItem);
                }
                else if (selfConfig == "i152033")
                {
                    //卡卡西的秘密收藏
                    broadItem.type = 115;
                    itemList.add(broadItem);
                }
                else if (selfConfig == "i152034")
                {
                    //小樱的爱心套件
                    broadItem.type = 116;
                    itemList.add(broadItem);
                }
                else if (selfConfig == "i152035")
                {
                    //蓝染的崩玉精化
                    broadItem.type = 117;
                    itemList.add(broadItem);
                }
                else if (selfConfig == "i152036")
                {
                    //浦原商店的兑换券
                    broadItem.type = 118;
                    itemList.add(broadItem);
                }
                else if (selfConfig == "i152037")
                {
                    //一护的魔法神灯
                    broadItem.type = 119;
                    itemList.add(broadItem);
                }
                else if (selfConfig == "i152038")
                {
                    //鸣人的仙人法宝
                    broadItem.type = 120;
                    itemList.add(broadItem);
                }
                else if (selfConfig == "i159019")
                {
                    //1000000石子袋
                    broadItem.type = 121;
                    itemList.add(broadItem);
                }
            }
            lookSystem.ShowMultiItems(player, itemList);
        }
        // 可以放置道具
        // 先减叠加数量
        kernel.IncInt(item, PropertyIndex.ItemFoldNum, -1);
    }
    else
    {
        kernel.SysInfo(player, SysInfoType.SYSINFO_TOP, "FeedBack_Common_071", null);
    }
}