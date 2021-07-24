importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//兽血沸腾依附尾兽光环才能生效，处于负面状态时，会伴随激发狂暴状态，按百分比提升速度和攻击，基础光环5%，高级光环8%，专家光环10%)
function OnUser(fightsystem, self, target, skill, fv,timer)
{
	var BuffChongGaoGuangHuan0 = fightsystem.GetBuff(self,11898);
    var BuffChongGaoGuangHuan1 = fightsystem.GetBuff(self,11899);
    var BuffChongGaoGuangHuan2 = fightsystem.GetBuff(self,11900);
	var AddRecover = 0;
	var Buff1 = fightsystem.GetBuff(self,11902);
	if ((Buff1 != null) || (LogicTool.RandInt(0, 99) > 30) || ((BuffChongGaoGuangHuan0 == null) && (BuffChongGaoGuangHuan1 == null) && (BuffChongGaoGuangHuan0 == null)))
	{
		return UserSkillReturn.SKILL_LOSE;	
	}
	else
	{
		if((Buff1 == null) && (BuffChongGaoGuangHuan0 != null))
    	{
			AddRecover += 20;
			fightsystem.ChangeAtkTime(self,self.AtkTimeMul,self.AtkTimeAdd-AddRecover*0.01*self.AtkTimeAdd);
			fightsystem.ChangeAtk(self,self.MinAtkMul,self.MinAtkAdd+AddRecover*0.01,self.MaxAtkMul,self.MaxAtkAdd+AddRecover*0.01);
			fightsystem.AddBuff(self,11902,timer,fv);
			//fightsystem.RemoveBuff(self,11898,timer,fv);
        	return UserSkillReturn.SKILL_SUCCESS;
    	}
    	else if((Buff1 == null) && (BuffChongGaoGuangHuan1 != null))
    	{
			AddRecover += 25;
			fightsystem.ChangeAtkTime(self,self.AtkTimeMul,self.AtkTimeAdd-AddRecover*0.01*self.AtkTimeAdd);
			fightsystem.ChangeAtk(self,self.MinAtkMul,self.MinAtkAdd+AddRecover*0.01,self.MaxAtkMul,self.MaxAtkAdd+AddRecover*0.01);
			fightsystem.AddBuff(self,11902,timer,fv);
			//fightsystem.RemoveBuff(self,11898,timer,fv);
        	return UserSkillReturn.SKILL_SUCCESS;
    	}
    	else if((Buff1 == null) && (BuffChongGaoGuangHuan2 != null))
    	{
			AddRecover += 30;
			fightsystem.ChangeAtkTime(self,self.AtkTimeMul,self.AtkTimeAdd-AddRecover*0.01*self.AtkTimeAdd);
			fightsystem.ChangeAtk(self,self.MinAtkMul,self.MinAtkAdd+AddRecover*0.01,self.MaxAtkMul,self.MaxAtkAdd+AddRecover*0.01);
			fightsystem.AddBuff(self,11902,timer,fv);
			//fightsystem.RemoveBuff(self,11898,timer,fv);
        	return UserSkillReturn.SKILL_SUCCESS;
    	}
		return UserSkillReturn.SKILL_SUCCESS;
	}
}