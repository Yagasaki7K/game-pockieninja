importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);
importPackage(java.util);

// 仙人灵药
var ary = new Object();
//add mul
ary["i152026"] = {addmul:0.7};
ary["i152028"] = {addmul:7};


// 单个使用
//self:道具
//user:玩家
function OnUse(jssystem, self, user)
{
    var kernel = jssystem.GetKernel();

    var itemconfig = kernel.GetConfig(self);
    var obj = ary[itemconfig];
    if (obj == null)
    {
        return;
    }

    var addmul = obj["addmul"];
    if (addmul == null || addmul <= 0)
    {
        return;
    }    

    var levelsystem = jssystem.GetLevelSystem();
    var baseExp = levelsystem.GetExpLevelMul(user);
    if(baseExp <= 0)
    {
        return;
    }

    var addExp = baseExp * addmul;

    if(kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1))
    {
        levelsystem.AddExp(user, addExp);        
    }
}

// 批量使用
//self:道具
//user:玩家
//foldNum:使用数量
function OnBatchUse(jssystem, self, user, foldNum)
{
    var kernel = jssystem.GetKernel();
    var itemconfig = kernel.GetConfig(self);
    var obj = ary[itemconfig];
    if (obj == null)
    {
        return;
    }

    var addmul = obj["addmul"];
    if (addmul == null || addmul <= 0)
    {
        return;
    }

    var levelsystem = jssystem.GetLevelSystem();
    var baseExp = levelsystem.GetExpLevelMul(user);
    if(baseExp <= 0)
    {
        return;
    }

    var addExp = baseExp * addmul;
    
    if(kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1 * foldNum))
    {
        levelsystem.AddExp(user, addExp * foldNum);        
    }
}