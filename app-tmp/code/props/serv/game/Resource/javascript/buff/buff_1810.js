importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//迟缓
function OnAdd(fightsystem, self, buff, fv, timer)
{
    self.AtkTimeAdd += 5;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
    self.AtkTimeAdd -= 5;
}