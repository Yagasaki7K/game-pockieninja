importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//减防
function OnAdd(fightsystem, self, buff, fv, timer)
{
    self.Defense -= 150;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
    self.Defense += 150;
}