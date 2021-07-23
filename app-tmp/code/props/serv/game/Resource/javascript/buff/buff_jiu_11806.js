importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//酒，降低命中，+火=燃烧
function OnAdd(fightsystem, self, buff, fv, timer)
{
    fightsystem.ChangeHit(self,self.HitMulMul,self.HitMulAdd-buff.SaveData);
    self.CritMul += buff.SaveData1;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
    fightsystem.ChangeHit(self,self.HitMulMul,self.HitMulAdd+buff.SaveData);
    self.CritMul -= buff.SaveData1;
}