/*
 * Copyright 2009-2010 Dream2 Network Technology, Inc. All rights reserved.
 */
//五影会议室
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.KernelPublic);


function OnSelect(jssystem, self, send, type)
{
    var kernel = jssystem.GetKernel();

    if (type == 1)
    {
        kernel.BeginMenu(self);
        kernel.AddTitle(self, "NpcMenu_TailCity_Title", null);
        kernel.AddMenu(self, "NpcMenu_TailCity_Enter", 10, null);           //进入铸造屋
        kernel.AddMenu(self, "NpcMenu_TailBeast_Description", 11, null);    //什么是尾兽攻城
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
        var activesSwitch = kernel.QueryDomainInt(DomainDefine.SERVER_TOLLGATE, DomainDefine.TOLLGATE_FIELD_TAILBEAST, DomainRecordDefine.TOLLGATE_TAILBEAST_SWITCH);
        if (activesSwitch == 0)
        {
            kernel.ShowMsgBox(send, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, LangCfgDefine.Tail_Title_002, null, null);
        }
        else
        {
            //通知客户端打开尾兽地图
            kernel.Custom(send, ServerCustomDefine.SERVER_CUSTOM_TBEAST_OPEN_MAP, null);
        }
    }
    else if (type == 11)
    {
        kernel.BeginMenu(self);
        kernel.AddTitle(self, "NpcMenu_Tail_FAQ", null);
        kernel.AddMenu(self, "NpcMenu_Tail_HowToJoin", 21, null);        //如何参加尾兽攻城
        kernel.AddMenu(self, "NpcMenu_Tail_HowToBeNation", 22, null);    //怎么才能成为影
        kernel.AddMenu(self, "NpcMenu_Tail_WhatIsWinCond", 23, null);    //怎样才算胜利
        kernel.AddMenu(self, "close", 2, null);
        kernel.EndMenu(self, send);
    }
    else if (type == 21)
    {
        kernel.ShowMsgBox(send, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "Tail_HowToJoin", null, null);     //如何参加尾兽攻城
        kernel.CloseMenu(send);
    }
    else if (type == 22)
    {
        kernel.ShowMsgBox(send, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "Tail_HowToBeNation", null, null);     //怎么才能成为影
        kernel.CloseMenu(send);
    }
    else if (type == 23)
    {
        kernel.ShowMsgBox(send, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "Tail_WhatIsWinCond", null, null);     //怎样才算胜利
        kernel.CloseMenu(send);
    }
}

