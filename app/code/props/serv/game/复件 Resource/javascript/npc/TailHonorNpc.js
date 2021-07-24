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
        kernel.AddMenu(self, "NpcMenu_TailCity_Enter", 10, null);//进入铸造屋
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
}

