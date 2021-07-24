importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//土墙
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    self.Parry = 70;
    self.SaveSkillID = 31806;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    self.Parry = 0;
    self.SaveSkillID = 0;
}