importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

var NeedLevel = 13;         //进入所需等级
//var MaxEntryCount = 2;      //最大进入次数
//var ReliveCnt = 1;          //初始可复活次数

function OnSelect(jssystem, self, send, type)
{
    var kernel = jssystem.GetKernel();
    var gateSystem = jssystem.GetSingleGateSystem();
    var capitalSystem = jssystem.GetCapitalSystem();
    var maxEntryCnt = gateSystem.GetMaxEntryGateCnt();

    if (type == 1)
    {
        kernel.BeginMenu(self)

        //等级限制
        if (kernel.QueryInt(send, PropertyIndex.Level) < NeedLevel)
        {
            var vars = new VarList();
            vars.AddInt(NeedLevel);
            kernel.AddTitle(self, "SingleGate_100", vars);
            kernel.AddMenu(self, "close", 2, null);
            kernel.EndMenu(self, send);
            return;
        }

        //次数限制
        var zeroTime = LogicTool.GetTaday(kernel);
        if (kernel.QueryInt(send, PropertyIndex.SGateTime) != zeroTime)
        {
            kernel.SetInt(send, PropertyIndex.SGateTime, zeroTime);
            kernel.SetInt(send, PropertyIndex.SGateCount, 0);
        }

        var sgatecnt = kernel.QueryInt(send, PropertyIndex.SGateCount);
        if (sgatecnt >= maxEntryCnt)
        {
            var vars = new VarList();
            vars.AddInt(maxEntryCnt);
            kernel.AddTitle(self, "SingleGate_101", vars);
            kernel.AddMenu(self, "close", 2, null);
            kernel.EndMenu(self, send);
            return;
        }

        //查看是否是重新开始的
        var curOrder = kernel.QueryInt(send, PropertyIndex.SGateCurOrder);
        if (curOrder <= 0)
        {
            //重新开始
            var vars = new VarList();
            vars.AddInt(maxEntryCnt - sgatecnt);
            kernel.AddTitle(self, "SingleGate_102", null);
            kernel.AddMenu(self, "SingleGate_216", 22, vars);
            kernel.AddMenu(self, "close", 2, null);
            kernel.EndMenu(self, send);

            /*
             for (var i = 1; i <= 3; i++)
             {
             var v = new VarList();
             v.AddInt(capitalary[i]["value"]);
             v.AddString("Common_Money" + capitalary[i]["type"]);
             v.AddInt(capitalary[i]["floor"]);
             kernel.AddMenu(self, "SingleGate_103", 10 + i, v);
             }

             kernel.AddMenu(self, "close", 2, null);
             kernel.EndMenu(self, send);
             */
        }
        else
        {
            //继续原来的关卡
            var vars = new VarList();
            vars.AddInt(curOrder);
            kernel.AddTitle(self, "SingleGate_105", vars);
            kernel.AddMenu(self, "SingleGate_106", 20, null);

            var curType = kernel.QueryInt(send, PropertyIndex.SGateType);
            if (curType != 1)
            {
                kernel.AddMenu(self, "SingleGate_107", 30, null);
            }

            kernel.AddMenu(self, "close", 2, null);
            kernel.EndMenu(self, send);
        }
    }
    else if (type == 2)
    {
        kernel.CloseMenu(send);
    }
    else if (type == 22)
    {
        if (kernel.QueryInt(send, PropertyIndex.SGateCount) >= maxEntryCnt)
        {
            var vars = new VarList();
            vars.AddInt(maxEntryCnt);
            kernel.BeginMenu(self)
            kernel.AddTitle(self, "SingleGate_101", vars);
            kernel.AddMenu(self, "close", 2, null);
            kernel.EndMenu(self, send);
            return;
        }

        //检查是否可以开始
        /*
         var maxFloor = kernel.QueryInt(send, PropertyIndex.SGateMaxFloor);
         if (maxFloor < startFloor)
         {
         kernel.BeginMenu(self)
         var vars = new VarList();
         vars.AddInt(startFloor);
         kernel.AddTitle(self, "SingleGate_212", vars);
         kernel.AddMenu(self, "close", 2, null);
         kernel.EndMenu(self, send);
         return;
         }
         */


        gateSystem.EntrySingleGate(send, false);
    }
    else if (type == 20)
    {
        if (kernel.QueryInt(send, PropertyIndex.SGateCount) >= maxEntryCnt)
        {
            var vars = new VarList();
            vars.AddInt(maxEntryCnt);
            kernel.BeginMenu(self)
            kernel.AddTitle(self, "SingleGate_101", vars);
            kernel.AddMenu(self, "close", 2, null);
            kernel.EndMenu(self, send);
            return;
        }

        //继续挑战
        gateSystem.EntrySingleGate(send, false);
    }
    else if (type == 21)
    {
        kernel.BeginMenu(self)
        if (kernel.QueryInt(send, PropertyIndex.SGateCount) >= maxEntryCnt)
        {
            var vars = new VarList();
            vars.AddInt(maxEntryCnt);
            kernel.AddTitle(self, "SingleGate_101", vars);
            kernel.AddMenu(self, "close", 2, null);
            kernel.EndMenu(self, send);
            return;
        }

        //重新开始
        gateSystem.ResetSingleGate(send)

        var sgatecnt = kernel.QueryInt(send, PropertyIndex.SGateCount);
        if (sgatecnt >= maxEntryCnt)
        {
            var vars = new VarList();
            vars.AddInt(maxEntryCnt);
            kernel.AddTitle(self, "SingleGate_101", vars);
            kernel.AddMenu(self, "close", 2, null);
            kernel.EndMenu(self, send);
            return;
        }

        //重新开始
        var vars = new VarList();
        vars.AddInt(maxEntryCnt - sgatecnt);
        kernel.AddTitle(self, "SingleGate_102", null);
        kernel.AddMenu(self, "SingleGate_216", 22, vars);
        kernel.AddMenu(self, "close", 2, null);
        kernel.EndMenu(self, send);
    }
    else if (type == 30)
    {
        kernel.BeginMenu(self);
        var allexp = kernel.QueryInt(send, PropertyIndex.SGateExp);
        var vars = new VarList();
        vars.AddInt(allexp);
        kernel.AddTitle(self, "SingleGate_215", vars);
        kernel.AddMenu(self, "SingleGate_214", 21, null);
        kernel.AddMenu(self, "back", 1, null);
        kernel.AddMenu(self, "close", 2, null);
        kernel.EndMenu(self, send);
    }
}
