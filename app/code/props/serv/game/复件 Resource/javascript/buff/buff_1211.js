importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//中毒
function OnAdd(fightsystem,self, buff, fv,timer)
{
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
    fightsystem.Damage(self,30);
    fv.Damage = 30;
    fv.SelfLastDamage += 30;
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
}