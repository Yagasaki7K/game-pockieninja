importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

var NeedLevel = 10;

function OnSelect(jssystem, self, send, type)
{
    var kernel = jssystem.GetKernel();

    if (type == 1)
    {
        kernel.BeginMenu(self);
        kernel.AddTitle(self, "DailyTask_Npc_100", null);
        kernel.AddMenu(self, "DailyTask_Npc_101", 10, null);
        kernel.AddMenu(self, "close", 2, null);
        kernel.EndMenu(self, send);
    }
    else if (type == 2)
    {
        kernel.CloseMenu(send);
    }
    else if (type == 10)
    {
        var level = kernel.QueryInt(send, PropertyIndex.Level);
        if (level < NeedLevel)
        {
            kernel.BeginMenu(self);

            var vars = new VarList();
            vars.AddInt(NeedLevel);
            kernel.AddTitle(self, "DailyTask_Npc_102", vars);

            kernel.AddMenu(self, "close", 2, null);
            kernel.EndMenu(self, send);
            return;
        }

        kernel.OpenUI(send, "UI_DayTask_Xml");
        kernel.CloseMenu(send);
    }
}
