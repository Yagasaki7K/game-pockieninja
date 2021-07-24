importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//酒，强化灼烧，降低命中
function OnAdd(fightsystem, self, buff, fv, timer)
{
    self.HitMul -= 30;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
    self.HitMul += 30;
}