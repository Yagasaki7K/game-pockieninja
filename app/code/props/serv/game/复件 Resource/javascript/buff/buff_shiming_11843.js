importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//失明
function OnAdd(fightsystem,self, buff, fv,timer)
{
     fightsystem.ChangeHit(self,self.HitMulMul,self.HitMulAdd - buff.SaveData);
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    fightsystem.ChangeHit(self,self.HitMulMul,self.HitMulAdd + buff.SaveData);
}
