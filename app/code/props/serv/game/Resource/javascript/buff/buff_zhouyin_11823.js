importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//天之咒印
function OnAdd(fightsystem, self, buff, fv, timer)
{
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
    var EffectBonus = 1+0.01*LogicTool.ToInt(self.SkillAdd7*0.01);
    var AttackBonusRate = 50*(1 - self.HP/self.MaxHP)*EffectBonus;
    fightsystem.ChangeAtk(self,self.MinAtkMul+AttackBonusRate-buff.SaveData1,self.MinAtkAdd,self.MaxAtkMul+AttackBonusRate-buff.SaveData1,self.MaxAtkAdd);
    buff.SaveData1 = AttackBonusRate;
}

function OnRemove(fightsystem, self, buff, fv, timer)
{   
    fightsystem.ChangeAtk(self,self.MinAtkMul-buff.SaveData1,self.MinAtkAdd,self.MaxAtkMul-buff.SaveData1,self.MaxAtkAdd);
}