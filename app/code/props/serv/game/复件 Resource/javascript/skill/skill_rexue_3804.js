importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//热血，提高攻击
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 2.3);
    var WarmBloodedTime = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            WarmBloodedTime = 2100;
            break;
        }
        case 2: 
        {
            WarmBloodedTime = 2100;
            break;
        } 
        case 3: 
        {
            WarmBloodedTime = 26;
            break;
        } 
        case 4: 
        {
            WarmBloodedTime = 28;
            break;
        } 
        case 5: 
        {
            WarmBloodedTime = 31;
            break;
        }
        case 6: 
        {
            WarmBloodedTime = 33;
            break;
        }
        case 7: 
        {
            WarmBloodedTime = 35;
            break;
        } 
        case 8: 
        {
            WarmBloodedTime = 37;
            break;
        }
        case 9: 
        {
            WarmBloodedTime = 40;
            break;
        } 
        case 10: 
        {
            WarmBloodedTime = 42;
            break;
        }
        case 11: 
        {
            WarmBloodedTime = 44;
            break;
        }
        case 12: 
        {
            WarmBloodedTime = 46;
            break;
        }
        case 13: 
        {
            WarmBloodedTime = 48;
            break;
        } 
        default: ;
    }
    WarmBloodedTime = WarmBloodedTime * (1+0.01*LogicTool.ToInt(self.SkillAdd0*0.01));
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
    var InitBuff = fightsystem.GetBuff(self,8888);
    if(InitBuff == null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else
    {
        if(InitBuff.SaveData1%100/10 < 1)
        {      
            var BuffWarmBlooded = fightsystem.GetBuff(self,11814);
            if(BuffWarmBlooded == null)
            {
                //添加
                fightsystem.AddBuff(self,11814,timer,fv,WarmBloodedTime,0);
                InitBuff.SaveData1 += 10; 
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
                        fightsystem.AddBuff(self,11880,timer,fv,999997,BuffShaLuGuangHuan0.SaveData);
                    }
                    else if((BuffShaLuGuangHuan1 != null)&&(BuffShaLuGuangHuan1.SaveData != 0))
                    {
                        fightsystem.AddBuff(self,11880,timer,fv,999997,BuffShaLuGuangHuan1.SaveData);
                    }
                    else if((BuffShaLuGuangHuan2 != null)&&(BuffShaLuGuangHuan2.SaveData != 0))
                    {
                        fightsystem.AddBuff(self,11880,timer,fv,999997,BuffShaLuGuangHuan2.SaveData);
                    }
                }
                else if(BuffKangFeng.SaveData == 1)
                {
                    BuffKangFeng.SaveData = 999997;
                    BuffKangFeng.LifeTime = 999997;
                }
                return UserSkillReturn.SKILL_SUCCESS;
            }
        }
        return UserSkillReturn.SKILL_LOSE;  
    }
}