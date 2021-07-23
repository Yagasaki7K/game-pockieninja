importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//愈合
function OnAdd(fightsystem,self, buff, fv,timer)
{
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
    var Heal = buff.SaveData;
    if(self.HP + Heal > self.GetInitMaxHP())
    {
        Heal = self.GetInitMaxHP() - self.HP;
    }
    self.HP += Heal;
    var BuffPoison = fightsystem.GetBuff(self, 11811);
    if(BuffPoison != null)
    {
        fightsystem.RemoveBuff(self,11811,timer,fv);
    }
    fv.IncHP = Heal;
    buff.SaveData1 += 1;
    if(buff.SaveData1 > 1)
    {
        buff.LifeTime = 0;
    }
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    //检查亢奋buff
    var BuffKangFeng = fightsystem.GetBuff(self,11880);
    if((BuffKangFeng != null)&&(BuffKangFeng.SaveData == 999997))
    {
        var BuffQiDao = fightsystem.GetBuff(self,11832);
        var BuffJiFeng = fightsystem.GetBuff(self,11825);
        var BuffReXue = fightsystem.GetBuff(self,11814);
        if((BuffQiDao == null)&&(BuffJiFeng == null)&&(BuffReXue == null))
        {
            fightsystem.RemoveBuff(self,11880,timer,fv);
        }
    }
}
