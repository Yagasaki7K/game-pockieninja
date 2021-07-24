importPackage(com.d2.serv.game.Kernel.Tools);

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
        v.AddString("烂烂");
        v.AddInt(1);
        v.AddString("dfasg");
        kernel.AddTitle(self, "npc menu title", v);
        kernel.AddMenu(self, "this is a menu", 10, null);
        kernel.AddMenu(self, "close", 2, null);
        kernel.EndMenu(self, send);
    }
    else if (type == 2)
    {
        kernel.CloseMenu(send);
    }
    else if (type == 10)
        {
            kernel.BeginMenu(self);
            kernel.AddTitle(self, "second npc menu", null);
            kernel.AddMenu(self, "fanhui", 1, null);
            kernel.AddMenu(self, "close", 2, null);
            kernel.EndMenu(self, send);
        }
}