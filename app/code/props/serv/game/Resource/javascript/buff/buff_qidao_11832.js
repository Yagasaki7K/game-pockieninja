importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//祈祷
function OnAdd(fightsystem,self, buff, fv,timer)
{
    buff.LifeTime = buff.SaveData;
    self.DecDamage += 100;
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.DecDamage -= 100;
    //检查亢奋buff
    var BuffKangFeng = fightsystem.GetBuff(self,11880);
    if((BuffKangFeng != null)&&(BuffKangFeng.SaveData == 999997))
    {
        var BuffReXue = fightsystem.GetBuff(self,11814);
        var BuffJiFeng = fightsystem.GetBuff(self,11825);
        var BuffYuHe = fightsystem.GetBuff(self,11834);
        if((BuffReXue == null)&&(BuffJiFeng == null)&&(BuffYuHe == null))
        {
            fightsystem.RemoveBuff(self,11880,timer,fv);
        }
    }
}
