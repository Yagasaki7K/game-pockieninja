importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//网，本次攻击对方无法闪避
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    self.DodgeMul -= 999;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    self.DodgeMul += 999;
}