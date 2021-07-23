importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);


//杜门
function OnAdd(fightsystem, self, buff, fv, timer)
{   
    fightsystem.ChangeAtkTime(self,self.AtkTimeMul+50,self.AtkTimeAdd);
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    fightsystem.ChangeAtkTime(self,self.AtkTimeMul-50,self.AtkTimeAdd);
}