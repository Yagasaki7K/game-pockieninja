importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//色诱，丧失行动能力
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    self.CanAttack -= 1;
    self.CanUseSkill -= 1;
    self.DodgeMul -= 999;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    self.CanAttack += 1;
    self.CanUseSkill += 1;
    self.DodgeMul += 999;
}