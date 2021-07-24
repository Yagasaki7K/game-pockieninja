importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

function OnSelect(jssystem, self, send, type)
{
    var kernel = jssystem.GetKernel();
    //var sceneid = kernel.QueryInt(self,PropertyIndex.SwitchSceneID);
    //var scenesystem = jssystem.GetSceneSystem();
    //scenesystem.SwitchScene(send,sceneid);

    if (type == 1)
    {
        kernel.BeginMenu(self);
        var v = new VarList();
        kernel.AddTitle(self, "NpcMenuTitle_Build_Foundry", null);
        kernel.AddMenu(self, "NpcMenu_Foundry_Enter", 10, null);
        kernel.AddMenu(self, "NpcMenu_Change_Avater_Enter", 11, null);//增加新的Menu,"进入转换小屋"
        kernel.AddMenu(self, "NpcMenu_Change_AdvancedAvater_Enter", 12, null);//增加新的Menu,"进入高级转换小屋"
        if (kernel.QueryInt(send, PropertyIndex.FreeAddMagic) > 0)
        {
            //附魔
            var varlist = new VarList();
            varlist.AddInt(kernel.QueryInt(send, PropertyIndex.FreeAddMagic));
            kernel.AddMenu(self, "lg_NpcMenu_Foundry_Exchange3", 20, varlist);
        }
        if (kernel.QueryInt(send, PropertyIndex.FreeConsolidate) > 0)
        {
            //强化
            var varlist = new VarList();
            varlist.AddInt(kernel.QueryInt(send, PropertyIndex.FreeConsolidate));
            kernel.AddMenu(self, "lg_NpcMenu_Foundry_Exchange1", 21, varlist);
        }
        if (kernel.QueryInt(send, PropertyIndex.FreeIdentify) > 0)
        {
            //洗练
            var varlist = new VarList();
            varlist.AddInt(kernel.QueryInt(send, PropertyIndex.FreeIdentify));
            kernel.AddMenu(self, "lg_NpcMenu_Foundry_Exchange2", 22, varlist);
        }
        if (kernel.QueryInt(send, PropertyIndex.FreeAddHole) > 0)
        {
            //打孔
            var varlist = new VarList();
            varlist.AddInt(kernel.QueryInt(send, PropertyIndex.FreeAddHole));
            kernel.AddMenu(self, "lg_NpcMenu_Foundry_Exchange4", 23, varlist);
        }

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
        kernel.OpenUI(send, "UI_EquipMakeRoom_Xml");
    }
    else if (type == 11)
    {
        kernel.CloseMenu(send);
        kernel.OpenUI(send, "UI_ItemTransform_Xml");
    }
    else if (type == 12)
    {
        kernel.CloseMenu(send);
        kernel.OpenUI(send, "UI_AvatarTransition_Xml");
    }
    else if (type == 20)
    {
        kernel.CloseMenu(send);
        //附魔
        var count = kernel.QueryInt(send, PropertyIndex.FreeAddMagic);

        var packsystem = jssystem.GetPackSystem();
        if (packsystem.CheckItemAutoToBox(send, ContainerDefine.ITEMSHAPEONE) < 0)
        {
        kernel.SysInfo(send, SysInfoType.SYSINFO_TOP, "lg_lang_PackageFull", null);
        return;
        }

        var item = kernel.Create("i161001");
        if (!kernel.Exists(item))
        {
            return;
        }

        var itemname = kernel.QueryString(item, PropertyIndex.ItemName);
        kernel.SetInt(item, PropertyIndex.ItemFoldNum, count);
        kernel.SetInt(item, PropertyIndex.ItemBindingStatus, 1);
        kernel.SetInt(send, PropertyIndex.FreeAddMagic, 0);
        packsystem.AutoPlaceItemToBox(send, item);

        var varlist = new VarList();
        varlist.AddString(itemname);
        varlist.AddInt(count);
        //kernel.SysInfo(send, SysInfoType.SYSINFO_TOP, "lg_Common_DropItem", varlist);
        kernel.ShowMsgBox(send, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "lg_Common_DropItem", varlist, null);
    }
    else if (type == 21)
    {
        kernel.CloseMenu(send);
        //强化
        var count = kernel.QueryInt(send, PropertyIndex.FreeConsolidate);

        var packsystem = jssystem.GetPackSystem();
        if (packsystem.CheckItemAutoToBox(send, ContainerDefine.ITEMSHAPEONE) < 0)
        {
            kernel.SysInfo(send, SysInfoType.SYSINFO_TOP, "lg_lang_PackageFull", null);
            return;
        }

        var item = kernel.Create("i161003");
        if (!kernel.Exists(item))
        {
            return;
        }

        var itemname = kernel.QueryString(item, PropertyIndex.ItemName);
        kernel.SetInt(item, PropertyIndex.ItemFoldNum, count);
        kernel.SetInt(item, PropertyIndex.ItemBindingStatus, 1);
        kernel.SetInt(send, PropertyIndex.FreeConsolidate, 0);
        packsystem.AutoPlaceItemToBox(send, item);

        var varlist = new VarList();
        varlist.AddString(itemname);
        varlist.AddInt(count);
        //kernel.SysInfo(send, SysInfoType.SYSINFO_TOP, "lg_Common_DropItem", varlist);
        kernel.ShowMsgBox(send, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "lg_Common_DropItem", varlist, null);
    }
    else if (type == 22)
    {
        kernel.CloseMenu(send);
        var count = kernel.QueryInt(send, PropertyIndex.FreeIdentify);

        var packsystem = jssystem.GetPackSystem();
        if (packsystem.CheckItemAutoToBox(send, ContainerDefine.ITEMSHAPEONE) < 0)
        {
            kernel.SysInfo(send, SysInfoType.SYSINFO_TOP, "lg_lang_PackageFull", null);
            return;
        }

        var item = kernel.Create("i161004");
        if (!kernel.Exists(item))
        {
            return;
        }

        var itemname = kernel.QueryString(item, PropertyIndex.ItemName);
        kernel.SetInt(item, PropertyIndex.ItemFoldNum, count);
        kernel.SetInt(item, PropertyIndex.ItemBindingStatus, 1);
        kernel.SetInt(send, PropertyIndex.FreeIdentify, 0);
        packsystem.AutoPlaceItemToBox(send, item);

        var varlist = new VarList();
        varlist.AddString(itemname);
        varlist.AddInt(count);
        //kernel.SysInfo(send, SysInfoType.SYSINFO_TOP, "lg_Common_DropItem", varlist);
        kernel.ShowMsgBox(send, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "lg_Common_DropItem", varlist, null);
}
    else if (type == 23)
    {
        kernel.CloseMenu(send);
        var count = kernel.QueryInt(send, PropertyIndex.FreeAddHole);

        var packsystem = jssystem.GetPackSystem();
        if (packsystem.CheckItemAutoToBox(send, ContainerDefine.ITEMSHAPEONE) < 0)
        {
            kernel.SysInfo(send, SysInfoType.SYSINFO_TOP, "lg_lang_PackageFull", null);
            return;
        }

        var item = kernel.Create("i161002");
        if (!kernel.Exists(item))
        {
            return;
        }

        var itemname = kernel.QueryString(item, PropertyIndex.ItemName);
        kernel.SetInt(item, PropertyIndex.ItemFoldNum, count);
        kernel.SetInt(item, PropertyIndex.ItemBindingStatus, 1);
        kernel.SetInt(send, PropertyIndex.FreeAddHole, 0);
        packsystem.AutoPlaceItemToBox(send, item);

        var varlist = new VarList();
        varlist.AddString(itemname);
        varlist.AddInt(count);
        kernel.ShowMsgBox(send, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "lg_Common_DropItem", varlist, null);
    }
}
