importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//水龙波
function OnAdd(fightsystem,self, buff, fv,timer)
{
	self.DodgeMul -= 200;
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.DodgeMul += 200;
}