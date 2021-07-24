importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//减速
function OnAdd(fightsystem,self, buff, fv,timer)
{
    self.AtkTime = self.AtkTime + 10;
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.AtkTime = self.AtkTime - 10;
}