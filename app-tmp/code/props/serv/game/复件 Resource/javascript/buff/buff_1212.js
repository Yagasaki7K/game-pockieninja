importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//失力
function OnAdd(fightsystem,self, buff, fv,timer)
{
    fightsystem.ChangeAtk(self,self.MinAtkMul-buff.SaveData,self.MinAtkAdd,self.MaxAtkMul-buff.SaveData,self.MaxAtkAdd);  
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    fightsystem.ChangeAtk(self,self.MinAtkMul+buff.SaveData,self.MinAtkAdd,self.MaxAtkMul+buff.SaveData,self.MaxAtkAdd);
}