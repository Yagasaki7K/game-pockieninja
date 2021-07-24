importPackage(com.d2.serv.game.Kernel.Tools);

function OnSelect(jssystem, self, send, type)
{
    var kernel = jssystem.GetKernel();
    var refreshShopSystem = jssystem.GetRefreshShopSystem();

    if (type == 1)
    {
        kernel.BeginMenu(self);
        kernel.AddTitle(self, "NpcMenuTitle_Build_Magic", null);
        kernel.AddMenu(self, "NpcMenu_Magic_Enter", 10, null);
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
        var v = new VarList();
        v.AddInt(2);
        refreshShopSystem.OpenRefreshShop(send, v);
    }
}
