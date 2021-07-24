importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//疾风，提高速度
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    fightsystem.ChangeAtkTime(self,self.AtkTimeMul,self.AtkTimeAdd+buff.SaveData);
    fightsystem.ChangeAtk(self,self.MinAtkMul-buff.SaveData1,self.MinAtkAdd,self.MaxAtkMul-buff.SaveData1,self.MaxAtkAdd);
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    fightsystem.ChangeAtkTime(self,self.AtkTimeMul,self.AtkTimeAdd-buff.SaveData);
    fightsystem.ChangeAtk(self,self.MinAtkMul+buff.SaveData1,self.MinAtkAdd,self.MaxAtkMul+buff.SaveData1,self.MaxAtkAdd);
}