importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//人柱力
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
	//技能判断开始
	var BuffChongGaoGuangHuan0 = fightsystem.GetBuff(self,11898);
    var BuffChongGaoGuangHuan1 = fightsystem.GetBuff(self,11899);
    var BuffChongGaoGuangHuan2 = fightsystem.GetBuff(self,11900);
	var BuffBless = fightsystem.GetBuff(self,11901);
	var BlessTime = 0;
	var InitBuff = fightsystem.GetBuff(self,8888);
	if(((InitBuff == null)||(BuffBless != null))||(BuffChongGaoGuangHuan0 == null && BuffChongGaoGuangHuan1 == null && BuffChongGaoGuangHuan2 == null)||(LogicTool.RandInt(0, 99) > 20)||(InitBuff.SaveData9 %1000/100 >= 3))
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else 
	{
	//(LogicTool.RandInt(0, 99) < 20)
		if((InitBuff.SaveData9 %1000/100 < 3)&&(BuffChongGaoGuangHuan0 != null)&&(BuffBless == null))
		{
			fightsystem.AddBuff(self,11901,timer,fv);
			InitBuff.SaveData9 += 100;
    		var BuffDrain = fightsystem.GetBuff(self, 11836);
    		if(BuffDrain != null)
    		{ 
   				fightsystem.RemoveBuff(self,11836,timer,fv);
    		}
        		return UserSkillReturn.SKILL_SUCCESS;
		}
    	else if((InitBuff.SaveData9 %1000/100 < 3)&&(BuffChongGaoGuangHuan1 != null)&&(BuffBless == null))
    	{
			fightsystem.AddBuff(self,11901,timer,fv);
			InitBuff.SaveData9 += 100;
            var BuffDrain = fightsystem.GetBuff(self, 11836);
            if(BuffDrain != null)
            {
                fightsystem.RemoveBuff(self,11836,timer,fv);
            }
				return UserSkillReturn.SKILL_SUCCESS;
    	}
    	else if((InitBuff.SaveData9 %1000/100 < 3)&&(BuffChongGaoGuangHuan2 != null)&&(BuffBless == null))
    	{
			fightsystem.AddBuff(self,11901,timer,fv);
            var BuffDrain = fightsystem.GetBuff(self, 11836);
			InitBuff.SaveData9 += 100;
            if(BuffDrain != null)
            {
                fightsystem.RemoveBuff(self,11836,timer,fv);
            }
				return UserSkillReturn.SKILL_SUCCESS;
    	}
		return UserSkillReturn.SKILL_SUCCESS;
	}	
}