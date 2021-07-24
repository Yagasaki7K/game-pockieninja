importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);

// 春节礼包
var petdrop = 1000652;
var avatardrop = 1000651;
var equipdrop30 = 1000653;
var equipdrop40 = 1000654;
var equipdrop50 = 1000655;

// 放置掉落的道具
function PutDrop(jssystem,self,user,dropip,bro)
{
    var dropsystem = jssystem.GetDropSystem();
    var shapelist = jssystem.GetIntAyyayList();
    var kernel = jssystem.GetKernel();

    //for (var i = 0; i < 1; i++)
    {
        jssystem.ArrayListAddInt(shapelist, ContainerDefine.ITEMSHAPESIX);
    }

    var packsystem = jssystem.GetPackSystem();
    if (!packsystem.CheckPlacePackItemList(user, shapelist))
    {
        kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_071", null);
        return;
    }

    kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1);

    var dropitemlist = dropsystem.GetDropItems(user, dropip);

    for (var i = 0; i < dropitemlist.size(); i++)
    {
        var item = dropitemlist.get(i);
        var item = dropitemlist.get(i);
        var s = new VarList();
        s.AddInt(1);
        s.AddString(kernel.GetConfig(item));
        //s.AddString(kernel.QueryString(item, PropertyIndex.ItemName));
        //kernel.SysInfo(user, SysInfoType.SYSINFO_CHAT, "FeedBack_Common_119", s);
        kernel.Custom(user,ServerCustomDefine.SERVER_CUSTOM_CHUNJIELIBAO,s);

        if(bro == 1)
        {
            var identifysystem = jssystem.GetIdentifySystem();
            identifysystem.FlushEquipIdentifyProp(item);
            //装备 要全副播报
            if(kernel.QueryInt(item,PropertyIndex.EquipIdentifyPropCount) >= 4)
            {
                //橙色的 广播一下
                var lookSystem = jssystem.GetLookSystem();
                lookSystem.ShowItems(user, CommonDefine.ItemLinkShow_ChunJie, item, null, true);
            }
        }
        else if(bro == 2)
        {
            //宠物
            var config = kernel.GetConfig(item);
            if(config == "i281008" || config == "i283034")
            {
                var lookSystem = jssystem.GetLookSystem();
                lookSystem.ShowItems(user, CommonDefine.ItemLinkShow_ChunJie, item, null, true);
            }
        }
        else if(bro == 3)
        {
            //外套
            if(kernel.QueryInt(item, PropertyIndex.ItemColor) == 2)
            {
                var lookSystem = jssystem.GetLookSystem();
                lookSystem.ShowItems(user, CommonDefine.ItemLinkShow_ChunJie, item, null, false);
            }
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

function PutExp(jssystem,user)
{
    var kernel = jssystem.GetKernel();
    var level = kernel.QueryInt(user,PropertyIndex.Level);
    var levelsystem = jssystem.GetLevelSystem();
    
    var rand = LogicTool.RandInt(1,100);
    var count = 100;
    var expm = levelsystem.GetExpLevelMul(user);
    if(rand > 80 && rand <= 98)
    {
        count = 300;
    }
    else if(rand > 98)
    {
        count = 600;
        var exp = expm * count;
        var varlist = new VarList();
        varlist.AddString(kernel.QueryString(user,PropertyIndex.Name));
        varlist.AddInt(exp * 0.01);
        kernel.SysInfoByWorld(SysInfoType.SYSINFO_TOPRUNANDCHAT, "Common_ChunJieGiftLinkShow", varlist);
    }

    levelsystem.AddExpByLevelMul(user, count);

    var varlist = new VarList();
    varlist.AddInt(2);
    varlist.AddInt(expm * count * 0.01);
    kernel.Custom(user,ServerCustomDefine.SERVER_CUSTOM_CHUNJIELIBAO,varlist);
    //kernel.SysInfo(user,SysInfoType.SYSINFO_CHAT, "Level_Sysinfo_010", varlist);
}

function OnUse(jssystem, self, user,type)
{
    var kernel = jssystem.GetKernel();


    switch(type)
    {
        case 2:
        {
            //宠物
            PutDrop(jssystem,self,user,petdrop,2);
            break;
        }
        case 3:
        {
            //外套
            PutDrop(jssystem,self,user,avatardrop,3);
            break;
        }
        case 4:
        {
            //经验
            kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1);
            PutExp(jssystem,user);
            break;
        }
        case 5:
        {
            //装备
            var level = kernel.QueryInt(user,PropertyIndex.Level);
            if(level < 40)
            {
                PutDrop(jssystem,self,user,equipdrop30,1);
            }
            else if(level >= 40 && level < 50)
            {
                PutDrop(jssystem,self,user,equipdrop40,1);
            }
            else if(level > 50)
            {
                PutDrop(jssystem,self,user,equipdrop50,1);
            }
            break;
        }
        default:
        {
            return;
        }
    }


}