importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//祈祷
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 0.8);
    var BlessTime = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            BlessTime = 900;
            break;
        }
        case 2: 
        {
            BlessTime = 900;
            break;
        } 
        case 3: 
        {
            BlessTime = 190;
            break;
        } 
        case 4: 
        {
            BlessTime = 209;
            break;
        } 
        case 5: 
        {
            BlessTime = 229;
            break;
        }
        case 6: 
        {
            BlessTime = 248;
            break;
        }
        case 7: 
        {
            BlessTime = 267;
            break;
        } 
        case 8: 
        {
            BlessTime = 286;
            break;
        }
        case 9: 
        {
            BlessTime = 305;
            break;
        } 
        case 10: 
        {
            BlessTime = 324;
            break;
        }
        case 11: 
        {
            BlessTime = 343;
            break;
        }
        case 12: 
        {
            BlessTime = 362;
            break;
        }
        case 13: 
        {
            BlessTime = 381;
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
    var InitBuff = fightsystem.GetBuff(self,8888);
    if(InitBuff == null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    if(!(InitBuff.SaveData1%1000000/100000 < 1))
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    if(self.MP < MPCost)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else
    { 
        var BuffBless = fightsystem.GetBuff(self,11832);
        if(BuffBless == null)
        {
            fightsystem.AddBuff(self,11832,timer,fv,BlessTime,0);
            InitBuff.SaveData1 += 100000;
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
        else
        { 
            //不放了
            return UserSkillReturn.SKILL_LOSE;
        }
    }    
}