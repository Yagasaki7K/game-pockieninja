importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

function OnSelect(jssystem, npc, player, type)
{
    var kernel = jssystem.GetKernel();

    if (type == 1)
    {
        var ActiveInfo = new VarList();
        ActiveInfo.AddInt(6);
        ActiveInfo.AddInt(CommonDefine.BSType_Compete);
        ActiveInfo.AddInt(kernel.QueryInt(player, PropertyIndex.BSCompeteCTimes));
        ActiveInfo.AddInt(CommonDefine.BSType_KillMonster);
        ActiveInfo.AddInt(kernel.QueryInt(player, PropertyIndex.BSVHGCTimes));
        ActiveInfo.AddInt(CommonDefine.BSType_CollectBianPao);
        ActiveInfo.AddInt(kernel.QueryInt(player, PropertyIndex.BSLSCTimes));
        ActiveInfo.AddInt(CommonDefine.BSType_NowtChristmasFather);
        ActiveInfo.AddInt(kernel.QueryInt(player, PropertyIndex.BSNCFCTimes));
        ActiveInfo.AddInt(CommonDefine.BSType_CollectMedel);
        ActiveInfo.AddInt(kernel.QueryInt(player, PropertyIndex.BSWSMCTimes));
        ActiveInfo.AddInt(CommonDefine.BSType_LogicDays);
        ActiveInfo.AddInt(kernel.QueryInt(player, PropertyIndex.BSSSCTimes));
        kernel.Custom(player, ServerCustomDefine.SERVER_CUSTOM_CHRISTMASTIMES, ActiveInfo);
    }
    else if (type == 2)
    {
        kernel.CloseMenu(player);
    }
    else if (type == 10)
        {
            kernel.CloseMenu(player);
        }
}