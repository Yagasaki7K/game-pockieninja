importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//瞬步
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 1.1);
    var DamageReduce = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            DamageReduce = 35;
            break;
        }
        case 2: 
        {
            DamageReduce = 35;
            break;
        } 
        case 3: 
        {
            DamageReduce = 9;
            break;
        } 
        case 4: 
        {
            DamageReduce = 11;
            break;
        } 
        case 5: 
        {
            DamageReduce = 13;
            break;
        }
        case 6: 
        {
            DamageReduce = 4.945;
            break;
        }
        case 7: 
        {
            DamageReduce = 5.172;
            break;
        } 
        case 8: 
        {
            DamageReduce = 5.389;
            break;
        }
        case 9: 
        {
            DamageReduce = 5.59;
            break;
        } 
        case 10: 
        {
            DamageReduce = 5.769;
            break;
        }
        case 11: 
        {
            DamageReduce = 5.947;
            break;
        }
        case 12: 
        {
            DamageReduce = 6.109;
            break;
        }
        case 13: 
        {
            DamageReduce = 6.265;
            break;
        }            
        default: ;
    }
    var BuffGhost = fightsystem.GetBuff(self, 11808);
    if(BuffGhost != null)
    {
        DamageReduce = 0;
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
        var BuffAccelerate = fightsystem.GetBuff(self,11825);
        if(BuffAccelerate == null)
        {
            var AccelerateTime = self.AtkTime-1;
            fightsystem.AddBuff(self,11825,timer,fv,AccelerateTime,DamageReduce);
            fightsystem.ChangeNextAtkTime(target,1);
            //因为是加速，所以不需要手动改下次行动时间
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
                    fightsystem.AddBuff(self,11880,timer,fv,1,BuffShaLuGuangHuan0.SaveData);
                }
                else if((BuffShaLuGuangHuan1 != null)&&(BuffShaLuGuangHuan1.SaveData != 0))
                {
                    fightsystem.AddBuff(self,11880,timer,fv,1,BuffShaLuGuangHuan1.SaveData);
                }
                else if((BuffShaLuGuangHuan2 != null)&&(BuffShaLuGuangHuan2.SaveData != 0))
                {
                    fightsystem.AddBuff(self,11880,timer,fv,1,BuffShaLuGuangHuan2.SaveData);
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