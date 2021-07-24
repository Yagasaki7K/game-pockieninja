importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//雾
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 3.4);
    var FogTime = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            FogTime = 6;
            break;
        }
        case 2: 
        {
            FogTime = 8;
            break;
        } 
        case 3: 
        {
            FogTime = 10;
            break;
        } 
        case 4: 
        {
            FogTime = 13;
            break;
        } 
        case 5: 
        {
            FogTime = 15;
            break;
        }
        case 6: 
        {
            FogTime = 18;
            break;
        }
        case 7: 
        {
            FogTime = 6.513;
            break;
        } 
        case 8: 
        {
            FogTime = 6.786;
            break;
        }
        case 9: 
        {
            FogTime = 7.039;
            break;
        } 
        case 10: 
        {
            FogTime = 7.265;
            break;
        }
        case 11: 
        {
            FogTime = 7.489;
            break;
        }
        case 12: 
        {
            FogTime = 7.692;
            break;
        }
        case 13: 
        {
            FogTime = 7.889;
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
        var BuffFog = fightsystem.GetBuff(self,11821);
        if(BuffFog == null)
        {
            //抵消自己的日落
            var BuffSelfSunSet = fightsystem.GetBuff(self,11822);
            if(BuffSelfSunSet != null)
            {
                fightsystem.RemoveBuff(self,11822,timer,fv);
                var BuffSelfKangFeng = fightsystem.GetBuff(self,11880);
                if((BuffSelfKangFeng != null)&&(BuffSelfKangFeng.SaveData == 999998))
                {
                    fightsystem.RemoveBuff(self,11880,timer,fv);
                }
                return UserSkillReturn.SKILL_SUCCESS;
            }
            //抵消对方的日落
            var BuffTargetSunSet = fightsystem.GetBuff(target,11822);
            if(BuffTargetSunSet != null)
            {
                fightsystem.RemoveBuff(target,11822,timer,fv);
                var BuffTargetKangFeng = fightsystem.GetBuff(target,11880);
                if((BuffTargetKangFeng != null)&&(BuffTargetKangFeng.SaveData == 999998))
                {
                    fightsystem.RemoveBuff(target,11880,timer,fv);
                }
                return UserSkillReturn.SKILL_SUCCESS;
            }
            //添加
            fightsystem.AddBuff(self,11821,timer,fv);          
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