importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//人柱力
function OnAdd(fightsystem,self, buff, fv,timer)
{
	self.DecDamage += 100;
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.DecDamage -= 100;
}