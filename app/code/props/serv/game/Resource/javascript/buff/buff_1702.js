importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//浴血，每损失13%血减少1攻速
function OnAdd(fightsystem,self, buff, fv,timer)
{
    if(self.AtkTime < LogicTool.Int((self.MaxHP-self.HP)/self.MaxHP/*100/13))
    {
        buff.SaveData = self.AtkTime - 1;
        self.AtkTime -= buff.SaveData;
    }
    else 
    {
        buff.SaveData = LogicTool.Int((self.MaxHP-self.HP)/self.MaxHP/*100/7);
        self.AtkTime -= buff.SaveData;
    }
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.AtkTime += buff.SaveData;   
}