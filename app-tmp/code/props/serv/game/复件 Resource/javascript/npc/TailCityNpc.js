/*
 * Copyright 2009-2010 Dream2 Network Technology, Inc. All rights reserved.
 */
//五影会议室
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);


function OnSelect(jssystem, self, send, type)
{
    var kernel = jssystem.GetKernel();

    if (type == 1)
    {
        kernel.BeginMenu(self);
        kernel.AddTitle(self, "NpcMenu_TailHonor_Title", null);
        kernel.AddMenu(self, "NpcMenu_TailHonor_Enter", 10, null);//进入铸造屋
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
        var cVar = new VarList();
        cVar.AddString(kernel.QueryString(send, PropertyIndex.Name));
        cVar.AddInt(2);     //查询冠军们的详细信息
        kernel.SendToDomain(DomainDefine.SERVER_TOLLGATE, DomainDefine.TAILBEAST_MSG_GET_WINNERS, cVar);
    }
}