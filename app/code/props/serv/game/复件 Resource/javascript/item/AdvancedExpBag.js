importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);
importPackage(java.util);

// 至尊经验袋

var ary = new Object();
//add mul
ary["i150433"] = {addmul:3.74};
ary["i150434"] = {addmul:20};
ary["i150435"] = {addmul:30};

// self :道具
// user: 玩家
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

