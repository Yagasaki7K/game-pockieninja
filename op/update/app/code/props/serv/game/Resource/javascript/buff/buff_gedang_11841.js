importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//格挡, SaveData记录了DelayTime
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    self.Parry = 40;
    self.SaveSkillID = 7777;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    self.Parry = 0;
    self.SaveSkillID = 0;
    fightsystem.AddBuff(self,11851,timer,fv);
    fightsystem.ChangeNextAtkTime(self.Target,buff.SaveData);
}



