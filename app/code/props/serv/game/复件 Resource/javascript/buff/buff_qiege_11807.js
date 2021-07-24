importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//减防
function OnAdd(fightsystem, self, buff, fv, timer)
{
    buff.LifeTime = buff.SaveData+1;
    fightsystem.ChangeDefense(self,self.DefenseMul-buff.SaveData1,self.DefenseAdd);
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
    fightsystem.ChangeDefense(self,self.DefenseMul+buff.SaveData1,self.DefenseAdd);
}