importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//酸液腐蚀
function OnAdd(fightsystem,self, buff, fv,timer)
{
	self.MaxAtk=self.MaxAtk*0.7
	self.MinAtk=self.MinAtk*0.7
	self.Defense=self.Defense*0.7;
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
	self.MaxAtk=self.MaxAtk/0.7
	self.MinAtk=self.MinAtk/0.7
	self.Defense=self.Defense/0.7;
}