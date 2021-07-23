importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//按正面状态传SaveData按光环等级传SaveData1
function OnAdd(fightsystem, self, buff, fv, timer)
{
    buff.LifeTime = buff.SaveData;
    fightsystem.ChangeAtk(self,self.MinAtkMul+buff.SaveData1,self.MinAtkAdd,self.MaxAtkMul+buff.SaveData1,self.MaxAtkAdd);
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
    fightsystem.ChangeAtk(self,self.MinAtkMul-buff.SaveData1,self.MinAtkAdd,self.MaxAtkMul-buff.SaveData1,self.MaxAtkAdd);
}
