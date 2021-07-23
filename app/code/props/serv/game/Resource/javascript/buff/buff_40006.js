importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//宠物格挡
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    self.Parry = 30;
    self.SaveSkillID = 40006;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    self.Parry = 0;
    self.SaveSkillID = 0;
}



