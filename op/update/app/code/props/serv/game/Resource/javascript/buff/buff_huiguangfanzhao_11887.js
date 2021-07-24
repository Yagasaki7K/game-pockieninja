importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);


//提升攻击和速度
function OnAdd(fightsystem, self, buff, fv, timer)
{   
    fightsystem.ChangeAtk(self,self.MinAtkMul+buff.SaveData,self.MinAtkAdd,self.MaxAtkMul+buff.SaveData,self.MaxAtkAdd);
    fightsystem.ChangeAtkTime(self,self.AtkTimeMul+buff.SaveData,self.AtkTimeAdd);
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    fightsystem.ChangeAtk(self,self.MinAtkMul-buff.SaveData,self.MinAtkAdd,self.MaxAtkMul-buff.SaveData,self.MaxAtkAdd);
    fightsystem.ChangeAtkTime(self,self.AtkTimeMul-buff.SaveData,self.AtkTimeAdd);
}