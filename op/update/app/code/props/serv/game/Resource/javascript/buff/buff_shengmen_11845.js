importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);


//门
function OnAdd(fightsystem, self, buff, fv, timer)
{   
    fightsystem.ChangeAtkTime(self,self.AtkTimeMul+30,self.AtkTimeAdd);
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    fightsystem.ChangeAtkTime(self,self.AtkTimeMul-30,self.AtkTimeAdd);
}