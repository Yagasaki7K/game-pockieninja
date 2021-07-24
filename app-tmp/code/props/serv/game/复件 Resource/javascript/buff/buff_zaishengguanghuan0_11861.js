importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//跳动+buff.SaveData1操作牺牲, buff.SaveData个位和十位操作状态抵抗，buff.SaveData百位和千位操作无生命体
function OnAdd(fightsystem, self, buff, fv, timer)
{
    buff.SaveData1 = 0;
    buff.SaveData = 0;
    self.SkillAdd6 += 0;
    //控制治疗量 
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
    if(self.HP < self.MaxHP*0.2)
    {
       if(buff.SaveData1 != 0)
       {
           var Heal = LogicTool.ToInt(self.MaxHP*buff.SaveData1*0.01);
           self.HP += Heal;
           fv.IncHP = Heal;
           fightsystem.RemoveBuff(self,11861,timer,fv);
       }
    }
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
    self.SkillAdd6 -= 100*LogicTool.ToInt(buff.SaveData*0.01);
}