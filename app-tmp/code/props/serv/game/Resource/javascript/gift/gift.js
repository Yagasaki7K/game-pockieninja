importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);


//升级礼包处理
function LevelUp(level, oldlevel)
{
    var v = new VarList();
    if (level >= 10 && oldlevel < 20)
    {
        v.AddString("20001");
    }

    if (level >= 20 && oldlevel < 30)
    {
        v.AddString("20002");
    }

    if (level >= 30 && oldlevel < 40)
    {
        v.AddString("20003");
    }

    if (level >= 40 && oldlevel < 50)
    {
        v.AddString("20004");
    }

    if (level >= 50 && oldlevel < 60)
    {
        v.AddString("20005");
    }
    if (level >= 60 && oldlevel < 70)
    {
        v.AddString("20006");
    }
    if (level >= 70 && oldlevel < 80)
    {
        v.AddString("20007");
    }
    if (level >= 80 && oldlevel < 90)
    {
        v.AddString("20008");
    }
    if (level >= 90 && oldlevel < 100)
    {
        v.AddString("20009");
    }

    return v;
}

//重复领取处理
function Repeat(jssystem, player, giftid)
{
    var kernel = jssystem.GetKernel();
    if (giftid == "50001")
    {
        var rows = kernel.FindRecordString(player, RecordIndex.PastGiftRecord, 0, giftid);
        if (rows != -1)
        {
            var time = kernel.QueryRecordInt(player, RecordIndex.PastGiftRecord, rows, 1);
            var now = LogicTool.GetTaday(kernel);
            if (time < now)
            {
                kernel.DelRecordRows(player, RecordIndex.PastGiftRecord, rows);
            }
        }
    }
    else
    {
        var rows = kernel.FindRecordString(player, RecordIndex.PastGiftRecord, 0, giftid);
        if (rows != -1)
        {
            kernel.DelRecordRows(player, RecordIndex.PastGiftRecord, rows);
        }
    }
}

//条件判断
function CanUse(jssystem, player, giftid,isget)
{
    var kernel = jssystem.GetKernel();
    if (giftid == "20001")
    {
        //10级别礼包
        if (kernel.QueryInt(player, PropertyIndex.Level) < 10)
        {
            return 0;
        }
    }
    else if (giftid == "20002")
    {
        //20级别礼包
        if (kernel.QueryInt(player, PropertyIndex.Level) < 20)
        {
            return 0;
        }
    }
    else if (giftid == "20003")
    {
        //30级礼包
        if (kernel.QueryInt(player, PropertyIndex.Level) < 30)
        {
            return 0;
        }
    }
    else if (giftid == "20004")
    {
        //40级礼包
        if (kernel.QueryInt(player, PropertyIndex.Level) < 40)
        {
            return 0;
        }
    }
    else if (giftid == "20005")
    {
        //50级礼包
        if (kernel.QueryInt(player, PropertyIndex.Level) < 50)
        {
            return 0;
        }
    }
    else if (giftid == "20006")
    {
        //60级礼包
        if (kernel.QueryInt(player, PropertyIndex.Level) < 60)
        {
            return 0;
        }
    }
    else if (giftid == "20007")
    {
        //70级礼包
        if (kernel.QueryInt(player, PropertyIndex.Level) < 70)
        {
            return 0;
        }
    }
    else if (giftid == "20008")
    {
        //80级礼包
        if (kernel.QueryInt(player, PropertyIndex.Level) < 80)
        {
            return 0;
        }
    }
    else if (giftid == "20009")
    {
        //90级礼包
        if (kernel.QueryInt(player, PropertyIndex.Level) < 90)
        {
            return 0;
        }
    }
    else if (giftid == "30001")
    {
        //在线10分钟
        if(isget == 1)
        {
            if(kernel.FindRecordString(player,RecordIndex.GiftRecord,0, "30001") != -1)
            {
                var now = kernel.GetGameWorldNow();
                kernel.SetInt(player,PropertyIndex.LastGiftTime,now);
                kernel.SetInt(player,PropertyIndex.GiftTime,0);
                return 1;
            }
            return 0;
        }

        var onlinetime = kernel.QueryInt(player, PropertyIndex.GiftTime) + (kernel.GetGameWorldNow() - kernel.QueryInt(player, PropertyIndex.LastGiftTime));
        if (onlinetime < 10 * 60)
        {
            return 0;
        }
    }
    else if (giftid == "30002")
    {
        //在线30分钟
        if(isget == 1)
        {
            if(kernel.FindRecordString(player,RecordIndex.GiftRecord,0, "30002") != -1)
            {
                var now = kernel.GetGameWorldNow();
                kernel.SetInt(player,PropertyIndex.LastGiftTime,now);
                kernel.SetInt(player,PropertyIndex.GiftTime,0);
                return 1;
            }
            return 0;
        }

        var onlinetime = kernel.QueryInt(player, PropertyIndex.GiftTime) + (kernel.GetGameWorldNow() - kernel.QueryInt(player, PropertyIndex.LastGiftTime));
        var finindex = kernel.FindRecordString(player,RecordIndex.PastGiftRecord,0, "30001");
        if (onlinetime < 30 * 60 || finindex == -1)
        {
            return 0;
        }
        //kernel.SetInt(player,PropertyIndex.GiftTime,kernel.QueryInt(player, PropertyIndex.NowLoginTime) - kernel.GetGameWorldNow());
    }
    else if (giftid == "30003")
    {
        //在线60分钟
        if(isget == 1)
        {
            if(kernel.FindRecordString(player,RecordIndex.GiftRecord,0, "30003") != -1)
            {
                var now = kernel.GetGameWorldNow();
                kernel.SetInt(player,PropertyIndex.LastGiftTime,now);
                kernel.SetInt(player,PropertyIndex.GiftTime,0);
                return 1;
            }
            return 0;
        }

        var onlinetime = kernel.QueryInt(player, PropertyIndex.GiftTime) + (kernel.GetGameWorldNow() - kernel.QueryInt(player, PropertyIndex.LastGiftTime));
        var finindex = kernel.FindRecordString(player,RecordIndex.PastGiftRecord,0, "30002");
        if (onlinetime < 60 * 60 || finindex == -1)
        {
            return 0;
        }
        //kernel.SetInt(player,PropertyIndex.GiftTime,kernel.QueryInt(player, PropertyIndex.NowLoginTime) - kernel.GetGameWorldNow());
    }
    else if (giftid == "30004")
    {
        //在线120分钟
        if(isget == 1)
        {
            if(kernel.FindRecordString(player,RecordIndex.GiftRecord,0, "30004") != -1)
            {
                var now = kernel.GetGameWorldNow();
                kernel.SetInt(player,PropertyIndex.LastGiftTime,now);
                kernel.SetInt(player,PropertyIndex.GiftTime,0);
                return 1;
            }
            return 0;
        }

        var onlinetime = kernel.QueryInt(player, PropertyIndex.GiftTime) + (kernel.GetGameWorldNow() - kernel.QueryInt(player, PropertyIndex.LastGiftTime));
        var finindex = kernel.FindRecordString(player,RecordIndex.PastGiftRecord,0, "30003");
        if (onlinetime < 120 * 60 || finindex == -1)
        {
            return 0;
        }
        //kernel.SetInt(player,PropertyIndex.GiftTime,kernel.QueryInt(player, PropertyIndex.NowLoginTime) - kernel.GetGameWorldNow());
    }

    return 1;
}