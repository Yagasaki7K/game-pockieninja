importPackage(com.d2.serv.game.Kernel.Tools);

function OnSelect(jssystem, self, send, type)
{
    var kernel = jssystem.GetKernel();
    var refreshShopSystem = jssystem.GetRefreshShopSystem();
    //var sceneid = kernel.QueryInt(self,PropertyIndex.SwitchSceneID);
    //var scenesystem = jssystem.GetSceneSystem();
    //scenesystem.SwitchScene(send,sceneid);

    if (type == 1)
    {
        kernel.BeginMenu(self);
        //var v = new VarList();
        kernel.AddTitle(self, "NpcMenuTitle_Build_Equip", null);
        kernel.AddMenu(self, "NpcMenu_Equip_Enter", 10, null);//进入铸造屋
       // kernel.AddMenu(self, "NpcMenu_Change_Avater_Enter",11,null) ;//增加新的Menu,"进入转换小屋"
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
//        var v = new VarList();
//        v.AddInt(1);
//        refreshShopSystem.OpenRefreshShop(send, v);
        kernel.OpenUI(send,"UI_NpcShop_Xml");
    }
  /*  else if(type == 11)
    {
        kernel.CloseMenu(send);
        kernel.OpenUI(send,"UI_ItemTransform_Xml");
    }     */

}

