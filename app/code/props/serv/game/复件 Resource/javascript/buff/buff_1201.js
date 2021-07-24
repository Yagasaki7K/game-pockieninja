importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//破防
function OnAdd(fightsystem,self, buff, fv,timer)
{
    self.Defense = self.Defense - 2000;
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.Defense = self.Defense + 2000;
}