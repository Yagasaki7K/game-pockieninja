importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//五行封印，封印技能
function OnAdd(fightsystem, self, buff, fv, timer)
{
    self.CanUseSkill -= 1;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
    self.CanUseSkill += 1;
}