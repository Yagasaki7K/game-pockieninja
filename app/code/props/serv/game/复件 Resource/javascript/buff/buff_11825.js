importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//眩晕
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    self.CanAttack -= 1;
    self.CanUseSkill -= 1;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    self.CanAttack += 1;
    self.CanUseSkill += 1;
}