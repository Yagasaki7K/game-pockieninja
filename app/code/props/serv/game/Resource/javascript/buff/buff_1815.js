importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//色诱，本次攻击对方没有反应
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    self.CanUseSkill -= 1;
    self.DodgeMul -= 999;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    self.CanUseSkill += 1;
    self.DodgeMul += 999;
}