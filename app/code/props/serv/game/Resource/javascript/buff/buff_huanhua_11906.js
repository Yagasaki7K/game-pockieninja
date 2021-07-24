importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//幻化
function OnAdd(fightsystem,self, buff, fv,timer)
{
	self.Defense += 300;
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.Defense -= 300;
}