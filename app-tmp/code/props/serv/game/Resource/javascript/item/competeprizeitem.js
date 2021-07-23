importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);

// 免费砸罐子
// self ：道具
// user : 玩家

var ary = new Object();

ary["i161006"] = {mid:"9",count:1};
//count:1

// 单个使用
function OnUse(jssystem, self, user)
{
    var kernel = jssystem.GetKernel();

    var itemconfig = kernel.GetConfig(self);
    var obj = ary[itemconfig];
    if (obj == null)
    {
        return;
    }

    var id = obj["mid"];
    if (id == null)
    {
        return;
    }

    var count = obj["count"];

    var rows = kernel.FindRecordString(user,RecordIndex.CompetePrizeRec,0,id);
    if(rows == -1)
    {
        var varlist = new VarList();
        varlist.AddString(id);
        varlist.AddInt(count);
        kernel.AddRecordRows(user, RecordIndex.CompetePrizeRec, -1, varlist);
    }
    else
    {
        var nowcount = kernel.QueryRecordInt(user,RecordIndex.CompetePrizeRec,rows,1);
        nowcount += count;
        kernel.SetRecordInt(user,RecordIndex.CompetePrizeRec,rows,1,nowcount);
    }

    kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1);
}

// 批量使用
// self ：道具
// user : 玩家
// foldNum:使用数量
function OnBatchUse(jssystem, self, user, foldNum)
{
    var kernel = jssystem.GetKernel();

    var itemconfig = kernel.GetConfig(self);
    var obj = ary[itemconfig];
    if (obj == null)
    {
        return;
    }

    var id = obj["mid"];
    if (id == null)
    {
        return;
    }

    var count = obj["count"] * foldNum;

    var rows = kernel.FindRecordString(user,RecordIndex.CompetePrizeRec,0,id);
    if(rows == -1)
    {
        var varlist = new VarList();
        varlist.AddString(id);
        varlist.AddInt(count);
        kernel.AddRecordRows(user, RecordIndex.CompetePrizeRec, -1, varlist);
    }
    else
    {
        var nowcount = kernel.QueryRecordInt(user,RecordIndex.CompetePrizeRec,rows,1);
        nowcount += count;
        kernel.SetRecordInt(user,RecordIndex.CompetePrizeRec,rows,1,nowcount);
    }

    kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1 * foldNum);    
}