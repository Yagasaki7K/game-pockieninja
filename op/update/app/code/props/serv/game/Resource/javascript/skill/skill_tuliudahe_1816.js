importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//土流大河，减速
function OnUser(fightsystem, self, target, skill, fv,timer)
{ 
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 1.9);
    var SlowTime = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            SlowTime = 1200;
            break;
        }
        case 2: 
        {
            SlowTime = 1200;
            break;
        } 
        case 3: 
        {
            SlowTime = 9;
            break;
        } 
        case 4: 
        {
            SlowTime = 11;
            break;
        } 
        case 5: 
        {
            SlowTime = 13;
            break;
        }
        case 6: 
        {
            SlowTime = 15;
            break;
        }
        case 7: 
        {
            SlowTime = 5.172;
            break;
        } 
        case 8: 
        {
            SlowTime = 5.389;
            break;
        }
        case 9: 
        {
            SlowTime = 5.59;
            break;
        } 
        case 10: 
        {
            SlowTime = 5.769;
            break;
        }
        case 11: 
        {
            SlowTime = 5.947;
            break;
        }
        case 12: 
        {
            SlowTime = 6.109;
            break;
        }
        case 13: 
        {
            SlowTime = 6.265;
            break;
        }   
        default: ;
    }
    SlowTime = SlowTime * (1+0.01*LogicTool.ToInt(self.SkillAdd2*0.01));
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
        if(InitBuff.SaveData1%1000/100 < 1)
        {
            var BuffSlow = fightsystem.GetBuff(target,11810);
            if(BuffSlow == null)
            {       
                fightsystem.AddBuff(target,11810,timer,fv,SlowTime,0);
                //直接生效
                var DelayTime = target.AtkTime*0.5;
                fightsystem.ChangeNextAtkTime(target,DelayTime);
                InitBuff.SaveData1 += 100;
                self.MP -= MPCost;
                fv.DecMP = MPCost;  
                var BuffDrain = fightsystem.GetBuff(self, 11836);
                if(BuffDrain != null)
                    fightsystem.RemoveBuff(self,11836,timer,fv);  
                return UserSkillReturn.SKILL_SUCCESS;
            }
        }            
        return UserSkillReturn.SKILL_LOSE;
    }
}