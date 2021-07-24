importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//日落
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 3.4);
    var SunSetTime = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            SunSetTime = 3;
            break;
        }
        case 2: 
        {
            SunSetTime = 4;
            break;
        } 
        case 3: 
        {
            SunSetTime = 6;
            break;
        } 
        case 4: 
        {
            SunSetTime = 7;
            break;
        } 
        case 5: 
        {
            SunSetTime = 8;
            break;
        }
        case 6: 
        {
            SunSetTime = 9;
            break;
        }
        case 7: 
        {
            SunSetTime = 5.747;
            break;
        } 
        case 8: 
        {
            SunSetTime = 5.988;
            break;
        }
        case 9: 
        {
            SunSetTime = 6.211;
            break;
        } 
        case 10: 
        {
            SunSetTime = 6.41;
            break;
        } 
        case 11: 
        {
            SunSetTime = 6.608;
            break;
        } 
        case 12: 
        {
            SunSetTime = 6.787;
            break;
        } 
        case 13: 
        {
            SunSetTime = 6.961;
            break;
        }   
        default: ;
    }
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }
    var BuffSeal = fightsystem.GetBuff(self, 11812);
    if(BuffSeal != null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    if(self.MP < MPCost)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else
    {      
        var BuffSunSet = fightsystem.GetBuff(self,11822);
        if(BuffSunSet == null)
        {
            //抵消自己的雾
            var BuffSelfFog = fightsystem.GetBuff(self,11821);
            if(BuffSelfFog != null)
            {
                fightsystem.RemoveBuff(self,11821,timer,fv);
                var BuffSelfKangFeng = fightsystem.GetBuff(self,11880);
                if((BuffSelfKangFeng != null)&&(BuffSelfKangFeng.SaveData == 999998))
                {
                    fightsystem.RemoveBuff(self,11880,timer,fv);
                }
                return UserSkillReturn.SKILL_SUCCESS;
            }
            //清对方的雾
            var BuffTargetFog = fightsystem.GetBuff(target,11821);
            if(BuffTargetFog != null)
            {
                fightsystem.RemoveBuff(target,11821,timer,fv);
                var BuffTargetKangFeng = fightsystem.GetBuff(target,11880);
                if((BuffTargetKangFeng != null)&&(BuffTargetKangFeng.SaveData == 999998))
                {
                    fightsystem.RemoveBuff(target,11880,timer,fv);
                }
                return UserSkillReturn.SKILL_SUCCESS;
            }
            fightsystem.AddBuff(self,11822,timer,fv);
            self.MP -= MPCost;
            fv.DecMP = MPCost; 
            var BuffDrain = fightsystem.GetBuff(self, 11836);
            if(BuffDrain != null)
            {
                fightsystem.RemoveBuff(self,11836,timer,fv);
            }
            var BuffKangFeng = fightsystem.GetBuff(self,11880);
            if(BuffKangFeng == null)
            {
                //判断是否有亢奋+任意一个级别的杀戮光环
                var BuffShaLuGuangHuan0 = fightsystem.GetBuff(self,11853);
                var BuffShaLuGuangHuan1 = fightsystem.GetBuff(self,11854);
                var BuffShaLuGuangHuan2 = fightsystem.GetBuff(self,11855);
                if((BuffShaLuGuangHuan0 != null)&&(BuffShaLuGuangHuan0.SaveData != 0))
                {
                    fightsystem.AddBuff(self,11880,timer,fv,999998,BuffShaLuGuangHuan0.SaveData);
                }
                else if((BuffShaLuGuangHuan1 != null)&&(BuffShaLuGuangHuan1.SaveData != 0))
                {
                    fightsystem.AddBuff(self,11880,timer,fv,999998,BuffShaLuGuangHuan1.SaveData);
                }
                else if((BuffShaLuGuangHuan2 != null)&&(BuffShaLuGuangHuan2.SaveData != 0))
                {
                    fightsystem.AddBuff(self,11880,timer,fv,999998,BuffShaLuGuangHuan2.SaveData);
                }
            }
            return UserSkillReturn.SKILL_SUCCESS;
        }
        else
        { 
            //不放了  
            return UserSkillReturn.SKILL_LOSE;
        }
    }
}