importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

var NeedLevel = 18;

function OnSelect(jssystem, self, send, type)
{
    var kernel = jssystem.GetKernel();

    if (type == 1)
    {
        kernel.BeginMenu(self);
        var v = new VarList();
        kernel.AddTitle(self, "Slave_Npc_100", null);
        kernel.AddMenu(self, "Slave_Npc_101", 10, null);
        kernel.AddMenu(self, "close", 2, null);
        kernel.EndMenu(self, send);
    }
    else if (type == 2)
    {
        kernel.CloseMenu(send);
    }
    else if (type == 10)
    {
        if (kernel.QueryInt(send, PropertyIndex.Level) < NeedLevel)
        {
            var vars = new VarList();
            vars.AddInt(NeedLevel);

            kernel.BeginMenu(self);
            kernel.AddTitle(self, "Slave_Npc_102", vars);
            kernel.AddMenu(self, "close", 2, null);
            kernel.EndMenu(self, send);
            return;
        }

        kernel.OpenUI(send, "UI_SalveRoom_Xml");
        kernel.CloseMenu(send);
    }
}
