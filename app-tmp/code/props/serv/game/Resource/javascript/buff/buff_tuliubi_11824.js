importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//土流壁
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    self.Parry = 40;
    self.ReboundAttach += 60;
    self.SaveSkillID = 3806;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    self.Parry = 0;
    self.ReboundAttach -= 60;
    self.SaveSkillID = 0;
}



