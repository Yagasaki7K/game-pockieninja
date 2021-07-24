importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//净化
function OnAdd(fightsystem,self, buff, fv,timer)
{
    self.DecDamage += 50;
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.DecDamage -= 50;
}
