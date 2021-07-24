importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//重伤lv1
function OnAdd(fightsystem,self, buff, fv,timer)
{
    self.DecDamage = self.DecDamage - 30;
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.DecDamage = self.DecDamage + 30;
}