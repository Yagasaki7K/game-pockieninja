importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

//回复体力的钱
var g_dec_money = 0;

//回复精力需要的金子
var g_capital2 = 188;
//回复精力需要的礼券
var g_capital3 = 188;
//每天可以回复的次数
var g_energycount = 2;

function OnSelect(jssystem, self, send, type)
{
    var kernel = jssystem.GetKernel();
    var energysystem = jssystem.GetEnergySystem();
    //var sceneid = kernel.QueryInt(self,PropertyIndex.SwitchSceneID);
    //var scenesystem = jssystem.GetSceneSystem();
    //scenesystem.SwitchScene(send,sceneid);

    if (type == 1)
    {
        kernel.BeginMenu(self);
        var v = new VarList();
        kernel.AddTitle(self, "NpcMenuTitle_Build_Hall", null);
        kernel.AddMenu(self, "NpcMenu_Hotel", 19, null);
        kernel.AddMenu(self, "NpcMenu_Hall_Enter", 10, null);
        kernel.AddMenu(self, "NpcMenu_Hall_StoreHouse", 23, null); //打开扩展仓库界面
        kernel.AddMenu(self, "close", 2, null);
        kernel.EndMenu(self, send);
    }
    else if (type == 2)
    {
        kernel.CloseMenu(send);
    }
    else if (type == 10)
    {
        kernel.CloseMenu(send);
        //kernel.OpenUI(send, "UI_MainCityHall_Xml");
        //新大厅训练界面
        kernel.OpenUI(send, "UI_HallTrain_Xml");
    }
    else if (type == 19)
    {
        //旅店
        kernel.BeginMenu(self);
        kernel.AddTitle(self, "NpcMenuTitle_Build_Hotel", null);
        kernel.AddMenu(self, "NpcMenu_Hotel_HMP", 11, null);
        kernel.AddMenu(self, "NpcMenu_Hotel_VP", 20, null);
        kernel.AddMenu(self, "close", 2, null);
        kernel.EndMenu(self, send);
    }
    else if (type == 11)
    {
        var parmlist = new VarList();
        var level = kernel.QueryInt(send, PropertyIndex.Level);
        var modify = 1;
        if (level <= 10)
        {
            modify = 0;
        }
        else if (level <= 20)
        {
            modify = 0.3;
        }
        else if (level <= 30)
        {
            modify = 0.6;
        }
        var cost = modify * (-0.005 * level * level + 1.593 * level + 61.72);
        parmlist.AddInt(cost);

        kernel.BeginMenu(self);
        kernel.AddTitle(self, "NpcMenuTitle_Hotel_HMP", parmlist);
        kernel.AddMenu(self, "NpcMenu_Hotel_OK", 50, null);
        kernel.AddMenu(self, "close", 2, null);
        kernel.EndMenu(self, send);
    }
    else if (type == 50)
    {
        kernel.CloseMenu(send);
        var maxhp = kernel.QueryInt(send, PropertyIndex.MaxHP);
        var maxmp = kernel.QueryInt(send, PropertyIndex.MaxMP);
        var hp = kernel.QueryInt(send, PropertyIndex.HP);
        var mp = kernel.QueryInt(send, PropertyIndex.MP);

        if (hp >= maxhp && mp >= maxmp)
        {
            kernel.SysInfo(send, SysInfoType.SYSINFO_TOP, "FeedBack_Common_130", null);
            return;
        }

        var capitalsystem = jssystem.GetCapitalSystem();

        var level = kernel.QueryInt(send, PropertyIndex.Level);
        var cost = 0;
        var modify = 1;
        if (level <= 10)
        {
            modify = 0;
        }
        else if (level <= 20)
        {
            modify = 0.3;
        }
        else if (level <= 30)
        {
            modify = 0.6;
        }

        var cost = modify * (-0.005 * level * level + 1.593 * level + 61.72);

        var dec_money = capitalsystem.CanDecCapital(send, CapitalDefine.CAPITALTYPE_0, cost, CapitalDefine.CAPITAL_REASON_HALLHPMP);
        if (dec_money < parseInt(cost))
        {
            kernel.SysInfo(send, SysInfoType.SYSINFO_TOP, "FeedBack_Common_128", null);
            return;
        }

        capitalsystem.DecCapital(send, CapitalDefine.CAPITALTYPE_0, cost, CapitalDefine.CAPITAL_REASON_HALLHPMP, "");

        kernel.SetInt(send, PropertyIndex.HP, maxhp);
        kernel.SetInt(send, PropertyIndex.MP, maxmp);
        kernel.SysInfo(send, SysInfoType.SYSINFO_TOP, "FeedBack_Common_129", null);
    }
    else if (type == 20)
    {
//        kernel.BeginMenu(self);
//        kernel.AddTitle(self, "NpcMenuTitle_Build_Hotel", null);
//        var parmlist = new VarList();
//        parmlist.AddString(LogicTool.GetCapitalName(2));
//        kernel.AddMenu(self, "NpcMenu_Hotel_VP_Type", 21, parmlist);
//        var parmlist1 = new VarList();
//        parmlist1.AddString(LogicTool.GetCapitalName(3));
//        kernel.AddMenu(self, "NpcMenu_Hotel_VP_Type", 22, parmlist1);
//        kernel.AddMenu(self, "close", 2, null);
//        kernel.EndMenu(self, send);

        //energysystem.TestAddEnergyTime(send);

        if (!energysystem.CanUseEnergyItem(send, 1))
        {
            kernel.BeginMenu(self);
            kernel.AddTitle(self, "Common_CantFullVP", null);
            kernel.AddMenu(self, "close", 2, null);
            kernel.EndMenu(self, send);
        }
        else
        {
            kernel.CloseMenu(send);
            kernel.OpenUI(send, "UI_RoleUseSP_Xml");
        }
    }
    else if (type == 21 || type == 22)
    {
        var captype = type - 20 + 1;

        var energysystem = jssystem.GetEnergySystem();
        var inc_value = energysystem.CanIncEnergy(send);
        var dec_money = g_capital2;
        if (captype == 2)
        {
            dec_money = g_capital2;
        }
        else
        {
            dec_money = g_capital3;
        }

        var parmlist = new VarList();
        parmlist.AddInt(dec_money);
        parmlist.AddString(LogicTool.GetCapitalName(captype));
        parmlist.AddInt(inc_value);


        kernel.BeginMenu(self);
        kernel.AddTitle(self, "NpcMenuTitle_Hotel_VP", parmlist);
        kernel.AddMenu(self, "NpcMenu_Hotel_OK", 50 + captype, null);
        kernel.AddMenu(self, "close", 2, null);
        kernel.EndMenu(self, send);
    }
    else if (type == 52 || type == 53)
    {
        var captype = type - 50;
        kernel.CloseMenu(send);

        var energysystem = jssystem.GetEnergySystem();
        energysystem.TestAddEnergyTime(send);

        if (kernel.QueryInt(send, PropertyIndex.IncEnergyCount) >= g_energycount)
        {
            var vl = new VarList();
            vl.AddInt(g_energycount);
            kernel.SysInfo(send, SysInfoType.SYSINFO_TOP, "FeedBack_Common_134", vl);
            return;
        }


        var inc_value = energysystem.CanIncEnergy(send);
        if (inc_value <= 0)
        {
            kernel.SysInfo(send, SysInfoType.SYSINFO_TOP, "FeedBack_Common_132", null);
            return;
        }

        var dec_money = g_capital2;
        if (captype == 2)
        {
            dec_money = g_capital2;
        }
        else
        {
            dec_money = g_capital3;
        }

        var capitalsystem = jssystem.GetCapitalSystem();
        if (capitalsystem.CanDecCapital(send, captype, dec_money, CapitalDefine.CAPITAL_REASON_ENERGY) < dec_money)
        {
            kernel.SysInfo(send, SysInfoType.SYSINFO_TOP, "FeedBack_Common_128", null);
            return;
        }

        capitalsystem.DecCapital(send, captype, dec_money, CapitalDefine.CAPITAL_REASON_ENERGY, "hotel energy +" + inc_value);
        energysystem.IncEnrgy(send, inc_value);
        kernel.IncInt(send, PropertyIndex.IncEnergyCount, 1);

        var send_money = new VarList();
        send_money.AddInt(dec_money);
        send_money.AddString(CapitalDefine.SYSINFO_TYPE + captype);
        send_money.AddInt(inc_value);
        kernel.SysInfo(send, SysInfoType.SYSINFO_TOP, "FeedBack_Common_133", send_money);
    }
    else if (type == 23)
    {
        //打开扩展仓库界面
        kernel.CloseMenu(send);
        kernel.OpenUI(send, "UI_Depot_Xml");
    }
}

//function OnFullEnergy(jssystem, player, needType)
//{
//    var needCapital = 1000;
//
//    if(needType == CapitalDefine.CAPITALTYPE_2)
//    {
//        needCapital = g_capital2;
//    }
//    else if(needType == CapitalDefine.CAPITALTYPE_3)
//    {
//        needCapital = g_capital3;
//    }
//    else
//    {
//        return;
//    }
//
//    var kernel = jssystem.GetKernel();
//
//    var energysystem = jssystem.GetEnergySystem();
//    energysystem.TestAddEnergyTime(player);
//
//    if (kernel.QueryInt(player, PropertyIndex.IncEnergyCount) >= g_energycount)
//    {
//        var vl = new VarList();
//        vl.AddInt(g_energycount);
//        kernel.SysInfo(player, SysInfoType.SYSINFO_TOP, "FeedBack_Common_134", vl);
//        return;
//    }
//
//    var inc_value = energysystem.CanIncEnergy(player);
//    if (inc_value <= 0)
//    {
//        kernel.SysInfo(player, SysInfoType.SYSINFO_TOP, "FeedBack_Common_132", null);
//        return;
//    }
//
//    var capitalsystem = jssystem.GetCapitalSystem();
//    if (capitalsystem.CanDecCapital(player, needType, needCapital, CapitalDefine.CAPITAL_REASON_ENERGY) < needCapital)
//    {
//        kernel.SysInfo(player, SysInfoType.SYSINFO_TOP, "FeedBack_Common_128", null);
//        return;
//    }
//
//    capitalsystem.DecCapital(player, needType, needCapital, CapitalDefine.CAPITAL_REASON_ENERGY, "button energy +" + inc_value);
//    energysystem.IncEnrgy(player, inc_value);
//    kernel.IncInt(player, PropertyIndex.IncEnergyCount, 1);
//
//    var send_money = new VarList();
//    send_money.AddInt(needCapital);
//    kernel.SysInfo(player, SysInfoType.SYSINFO_TOP, "FeedBack_Common_133", send_money);
//}
