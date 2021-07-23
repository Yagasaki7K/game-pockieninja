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

    var tailbeastSystem = jssystem.GetTailBeastSystem();

    if (type == 1)
    {
        kernel.BeginMenu(self);
        kernel.AddTitle(self, "NpcMenu_Tail_Title", null);
        kernel.AddMenu(self, "NpcMenu_Tail_Enter", 10, null);//进入尾兽场景
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

        var detectSwitch = kernel.QueryDomainInt(DomainDefine.SERVER_TOLLGATE, DomainDefine.TOLLGATE_FIELD_TAILBEAST, DomainRecordDefine.TOLLGATE_TAILBEAST_DETECT);
        if (detectSwitch == 0)
        {
            kernel.ShowMsgBox(send, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, LangCfgDefine.Tail_Title_011, null, null);
        }
        else
        {
            tailbeastSystem.EntryTailScene(send);
        }
    }
}

