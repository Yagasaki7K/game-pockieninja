/*
 * Copyright 2011 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

function UseDiceMain(jssystem, player, RandomDiceList)
{
    var kernel = jssystem.GetKernel();
    var TotalDiceCnt = 0;

    var msg = new VarList();
    for (var i = 0; i < RandomDiceList.size(); ++i)
    {
        var curDice = RandomDiceList.get(i);
        TotalDiceCnt = TotalDiceCnt + LogicTool.ToInt(curDice);

        msg.AddInt(LogicTool.ToInt(curDice));
    }

    if (CheckAngelWish(TotalDiceCnt))
    {
        GetAngelWish(jssystem, player, TotalDiceCnt, msg);
    }
    else if (CheckLowWish(TotalDiceCnt))
    {
        GetLowWish(jssystem, player, TotalDiceCnt, msg);
    }
    else if (CheckBelialCurse(TotalDiceCnt))
        {
            GetBelialCurse(jssystem, player, TotalDiceCnt, msg);
        }
        else if (CheckLowCurse(TotalDiceCnt))
            {
                GetLowCurse(jssystem, player, TotalDiceCnt, msg);
            }
            else
            {
                msg.AddInt(0);
            }

    kernel.Custom(player, ServerCustomDefine.SERVER_CUSTOM_THROWDICEINFO, msg);

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
function GetAngelWish(jssystem, player, TotalDiceCnt, msg)
{
    var buffSystem = jssystem.GetBuffSystem();
    //var kernel = jssystem.GetKernel();

    buffSystem.AddBuff(player, 80102, 21600); // 添加 50003 buff 一小时
    msg.AddInt(80102);
    //kernel.ShowMsgBox(player, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "DiceBuff80102Explain", msg, null);
    return false;
}

//得到 低级祝福
function GetLowWish(jssystem, player, TotalDiceCnt, msg)
{
    var buffSystem = jssystem.GetBuffSystem();
    //var kernel = jssystem.GetKernel();

    buffSystem.AddBuff(player, 80101, 7200); // 添加 50003 buff 一小时
    msg.AddInt(80101);
    //kernel.ShowMsgBox(player, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "DiceBuff80101Explain", msg, null);
    return false;
}

//得到 恶魔诅咒
function GetBelialCurse(jssystem, player, TotalDiceCnt, msg)
{
    var buffSystem = jssystem.GetBuffSystem();
    //var kernel = jssystem.GetKernel();

    buffSystem.AddBuff(player, 80202, 21600); // 添加 50003 buff 一小时
    msg.AddInt(80202);
    //kernel.ShowMsgBox(player, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "DiceBuff80202Explain", msg, null);
    return false;
}

//得到 低级诅咒
function GetLowCurse(jssystem, player, TotalDiceCnt, msg)
{
    var buffSystem = jssystem.GetBuffSystem();
    //var kernel = jssystem.GetKernel();

    buffSystem.AddBuff(player, 80201, 7200); // 添加 50003 buff 一小时
    msg.AddInt(80201);
    //kernel.ShowMsgBox(player, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "DiceBuff80201Explain", msg, null);
    return false;
}

var ClearBufferIDList = new Object();
ClearBufferIDList[0] = 80202;    // 恶魔诅咒
ClearBufferIDList[1] = 80201;    // 低级诅咒

// 清除指定buffer
function CanClearDiceBuffer(jssystem, player)
{
    var kernel = jssystem.GetKernel();

    var capitalsystem = jssystem.GetCapitalSystem();

    // 检查金子是否够
    if (capitalsystem.CanDecCapital(player, CapitalDefine.CAPITALTYPE_2, 28, CapitalDefine.CAPITAL_REASON_CLEARDICEBUFFER) < 28)
    {
        return false;
    }

    var IsExistFindBuffID = false;
    var rows = kernel.GetRecordRows(player, RecordIndex.BuffRecord);
    for (var i = 0; i < rows; ++i)
    {
        var buffid = kernel.QueryRecordInt(player, RecordIndex.BuffRecord, i, RecordClos.BUFF_ID);
        for (var j = 0; j < 2; ++j)
        {
            if (buffid == ClearBufferIDList[j])
            {
                IsExistFindBuffID = true;
            }
        }
    }

    // 是否存在要删除的buff
    if (!IsExistFindBuffID)
    {
        return false;
    }

    return true;
}

// 清除指定buffer
function ClearDiceBuffer(jssystem, player)
{
    var kernel = jssystem.GetKernel();
    if (!CanClearDiceBuffer(jssystem, player))
    {
        return false;
    }

    // 删除buff
    var buffid = 0;
    var rows = kernel.GetRecordRows(player, RecordIndex.BuffRecord);
    for (var i = 0; i < rows; ++i)
    {
        buffid = kernel.QueryRecordInt(player, RecordIndex.BuffRecord, i, RecordClos.BUFF_ID);
        for (var j = 0; j < 2; ++j)
        {
            if (buffid == ClearBufferIDList[j])
            {
                if (kernel.DelRecordRows(player, RecordIndex.BuffRecord, i))
                {
                    --i;
                    --rows;
                    var refreshSystem = jssystem.GetRefreshSystem();
                    refreshSystem.RefreshRoleProperty(player, RefreshReason.PLAYER_BUFF);
                }
            }
        }
    }

    // 扣除资金
    var capitalsystem = jssystem.GetCapitalSystem();
    capitalsystem.DecCapital(player, CapitalDefine.CAPITALTYPE_2, 28, CapitalDefine.CAPITAL_REASON_CLEARDICEBUFFER, "DelBuff" + buffid);

    return true;
}