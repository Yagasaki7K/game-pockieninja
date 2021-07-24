importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

function OnAdd(fightsystem, self, buff, fv, timer)
{   
    buff.LifeTime = buff.SaveData;
    var RateBonus = 1+0.01*LogicTool.ToInt(buff.SaveData1*0.01);
    self.SkillAdd0 += 15*RateBonus;
    self.SkillAdd1 += 15*RateBonus;
    self.SkillAdd2 += 15*RateBonus;
    self.SkillAdd3 += 15*RateBonus;
    self.SkillAdd4 += 15*RateBonus;
    self.SkillAdd5 += 15*RateBonus;
    self.SkillAdd6 += 15*RateBonus;
    self.SkillAdd7 += 15*RateBonus;
    self.SkillAdd8 += 15*RateBonus;
    self.SkillAdd9 += 15*RateBonus;
    buff.SaveData1 = RateBonus;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    var RateBonus = buff.SaveData1;
    self.SkillAdd0 -= 15*RateBonus;
    self.SkillAdd1 -= 15*RateBonus;
    self.SkillAdd2 -= 15*RateBonus;
    self.SkillAdd3 -= 15*RateBonus;
    self.SkillAdd4 -= 15*RateBonus;
    self.SkillAdd5 -= 15*RateBonus;
    self.SkillAdd6 -= 15*RateBonus;
    self.SkillAdd7 -= 15*RateBonus;
    self.SkillAdd8 -= 15*RateBonus;
    self.SkillAdd9 -= 15*RateBonus;
    //检查亢奋buff
    var BuffKangFeng = fightsystem.GetBuff(self,11880);
    if((BuffKangFeng != null)&&(BuffKangFeng.SaveData == 999997))
    {
        var BuffQiDao = fightsystem.GetBuff(self,11832);
        var BuffJiFeng = fightsystem.GetBuff(self,11825);
        var BuffYuHe = fightsystem.GetBuff(self,11834);
        if((BuffQiDao == null)&&(BuffJiFeng == null)&&(BuffYuHe == null))
        {
            fightsystem.RemoveBuff(self,11880,timer,fv);
        }
    }    
}