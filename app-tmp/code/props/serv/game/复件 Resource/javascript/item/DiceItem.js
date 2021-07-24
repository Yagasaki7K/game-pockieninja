/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

// 骰子道具

importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);

// item:道具
// player:玩家
function OnUse(jssystem, item, player)
{
    var kernel = jssystem.GetKernel();
    if (! kernel.Exists(item))
        return;

    if (! kernel.Exists(player))
        return;

    if (!kernel.IsClass(item, ClassIndex.CLASS_DICEITEM))
    {
        return;
    }

    kernel.IncInt(item, PropertyIndex.ItemFoldNum, -1);

    var ThrowDices = "";
    var TotalDiceCnt = 0;
    for (var i = 0; i < 6; ++i)
    {
        var tempStr = "";
        var curDice = LogicTool.RandInt(1, 6);
        if (i == 5)
        {
            tempStr = curDice;
        }
        else
        {
            tempStr = curDice + "、";
        }
        ThrowDices += tempStr;

        TotalDiceCnt += curDice;
    }

    var msg = new VarList();
    msg.AddString(ThrowDices);
    msg.AddInt(TotalDiceCnt);

    if (CheckAngelWish(TotalDiceCnt))
    {
        GetAngelWish(jssystem, player, ThrowDices, TotalDiceCnt, msg);
        return;
    }
    else if (CheckLowWish(TotalDiceCnt))
    {
        GetLowWish(jssystem, player, ThrowDices, TotalDiceCnt, msg);
        return;
    }
    else if (CheckBelialCurse(TotalDiceCnt))
        {
            GetBelialCurse(jssystem, player, ThrowDices, TotalDiceCnt, msg);
            return;
        }
        else if (CheckLowCurse(TotalDiceCnt))
            {
                GetLowWish(jssystem, player, ThrowDices, TotalDiceCnt, msg);
                return;
            }

    // 给队伍其他成员播报
    var SelfName = kernel.QueryString(player, PropertyIndex.Name);
    var rows = kernel.GetRecordRows(player, RecordIndex.TeamRec);
    if (rows > 0)
    {
        var otherMsg = new VarList();
        otherMsg.AddString(SelfName);
        otherMsg.AddString(ThrowDices);
        otherMsg.AddInt(TotalDiceCnt);

        for (var j = 0; j < rows; ++j)
        {
            var MemberName = kernel.QueryRecordString(player, RecordIndex.TeamRec, j, 0);
            if (!MemberName.equals(SelfName))
            {
                kernel.SysInfoByName(MemberName, SysInfoType.SYSINFO_TEAM, "OtherUseDiceItemResult", otherMsg);
            }
        }
    }

    kernel.ShowMsgBox(player, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "DiceBuffNothingExplain", msg, null);
    // 骰子成就完成
    if (TotalDiceCnt >= 36)
    {
        var EffortMsg = new VarList();
        EffortMsg.AddInt(CommonDefine.EffortSubType_UesItem);
        EffortMsg.AddInt(2);
        EffortMsg.AddInt(TotalDiceCnt);
        kernel.Command(player, CommandDefine.COMMAND_EFFORT_REFRESH, EffortMsg);
    }


}

// 天使祝福 条件
function CheckAngelWish(TotalDiceCnt)
{
    if (TotalDiceCnt == 6 || TotalDiceCnt == 16 || TotalDiceCnt == 26 || TotalDiceCnt == 36)
    {
        return true;
    }
    return false;
}

// 低级祝福 条件
function CheckLowWish(TotalDiceCnt)
{
    if (TotalDiceCnt >= 28 && TotalDiceCnt != 34 && TotalDiceCnt != 36)
    {
        return true;
    }
    return false;
}

// 恶魔诅咒 条件
function CheckBelialCurse(TotalDiceCnt)
{
    if (TotalDiceCnt == 14 || TotalDiceCnt == 24 || TotalDiceCnt == 34)
    {
        return true;
    }
    return false;
}

// 低级诅咒 条件
function CheckLowCurse(TotalDiceCnt)
{
    if (TotalDiceCnt < 14 && TotalDiceCnt != 6)
    {
        return true;
    }
    return false;
}

// 得到天使祝福
function GetAngelWish(jssystem, player, StrThrowDices, TotalDiceCnt, msg)
{
    var buffSystem = jssystem.GetBuffSystem();
    var kernel = jssystem.GetKernel();

    buffSystem.AddBuff(player, 80102, 21600); // 添加 80102 buff 版小时

    kernel.ShowMsgBox(player, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "DiceBuff80102Explain", msg, null);
    return false;
}

//得到 低级祝福
function GetLowWish(jssystem, player, StrThrowDices, TotalDiceCnt, msg)
{
    var buffSystem = jssystem.GetBuffSystem();
    var kernel = jssystem.GetKernel();

    buffSystem.AddBuff(player, 80101, 7200); // 添加 80101 buff 半小时

    kernel.ShowMsgBox(player, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "DiceBuff80101Explain", msg, null);
    return false;
}

//得到 恶魔诅咒
function GetBelialCurse(jssystem, player, StrThrowDices, TotalDiceCnt, msg)
{
    var buffSystem = jssystem.GetBuffSystem();
    var kernel = jssystem.GetKernel();

    buffSystem.AddBuff(player, 80202, 21600); // 添加 80202 buff 半小时

    kernel.ShowMsgBox(player, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "DiceBuff80202Explain", msg, null);
    return false;
}

//得到 低级诅咒
function GetLowCurse(jssystem, player, StrThrowDices, TotalDiceCnt, msg)
{
    var buffSystem = jssystem.GetBuffSystem();
    var kernel = jssystem.GetKernel();

    buffSystem.AddBuff(player, 80201, 7200); // 添加 80201 buff 版小时

    kernel.ShowMsgBox(player, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "DiceBuff80201Explain", msg, null);
    return false;
}

