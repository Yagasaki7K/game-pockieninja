importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//千鸟
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 2);
    var ThunderDamage = 0;
    var ParalysisTime = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            ThunderDamage = 1.6;
            ParalysisTime = 350;
            break;
        }
        case 2: 
        {
            ThunderDamage = 1.6;
            ParalysisTime = 350;
            break;
        } 
        case 3: 
        {
            ThunderDamage = 2.55;
            ParalysisTime = 0;
            break;
        } 
        case 4: 
        {
            ThunderDamage = 2.74;
            ParalysisTime = 0;
            break;
        } 
        case 5: 
        {
            ThunderDamage = 2.94;
            ParalysisTime = 0;
            break;
        }
        case 6: 
        {
            ThunderDamage = 3.13;
            ParalysisTime = 0;
            break;
        }
        case 7: 
        {
            ThunderDamage = 3.32;
            ParalysisTime = 0;
            break;
        } 
        case 8: 
        {
            ThunderDamage = 3.52;
            ParalysisTime = 0;
            break;
        }
        case 9: 
        {
            ThunderDamage = 3.71;
            ParalysisTime = 0;
            break;
        } 
        case 10: 
        {
            ThunderDamage = 3.91;
            ParalysisTime = 0;
            break;
        }
        case 11: 
        {
            ThunderDamage = 4.1;
            ParalysisTime = 0;
            break;
        }
        case 12: 
        {
            ThunderDamage = 4.3;
            ParalysisTime = 0;
            break;
        }
        case 13: 
        {
            ThunderDamage = 4.49;
            ParalysisTime = 0;
            break;
        }  
        default: ;
    }
    ThunderDamage = ThunderDamage * (1+0.01*LogicTool.ToInt(self.SkillAdd3*0.01));
    //检查自己的套子
    var BuffSelfCap = fightsystem.GetBuff(self,11831);
    if(BuffSelfCap != null)
    {
        ThunderDamage = ThunderDamage * 1.2;
        ParalysisTime = ParalysisTime * 1.2;
    }
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }
    var BuffSeal = fightsystem.GetBuff(self, 11812);
    if(BuffSeal != null)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    if(self.MP < MPCost)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    var InitBuff = fightsystem.GetBuff(target,8888);
    if(InitBuff == null)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }  
    else
    {     
        var IsMelt = 0;
        var BuffSunSet = fightsystem.GetBuff(self, 11822);
        if(BuffSunSet != null)
        {
            if(LogicTool.RandInt(0, 99) < BuffSunSet.SaveData)
            {
                IsMelt = 1;
            }
        }
        var AttackDamage = fightsystem.GetDamage(self)*ThunderDamage*(1+IsMelt);
        //检查套子
        var BuffTargetCap = fightsystem.GetBuff(target,11831);
        if(BuffTargetCap != null)
        {
            //虚拟命中
            fightsystem.Attack(self,target,0,0,fv,timer);
            if(fv.IsHit == 1)
            {   
                ThunderDamage = ThunderDamage/3;
                target.ShieldDamage += ThunderDamage;
                fightsystem.ChangeHit(self,self.HitMulMul,self.HitMulAdd+999);
                fightsystem.Attack(self,target,AttackDamage,0,fv,timer);
                fv.TargetShield -= ThunderDamage;
                fightsystem.ChangeHit(self,self.HitMulMul,self.HitMulAdd-999);
            }
        }
        else
        {
            var BackDamage = 0;
            var BuffWarmBlooded = fightsystem.GetBuff(self,11814);
            if(BuffWarmBlooded != null)
            {
                BackDamage = AttackDamage*0.2;
            }
            var BuffPeg = fightsystem.GetBuff(target,11840);
            fightsystem.Attack(self,target,AttackDamage,BackDamage,fv,timer);
            if((fv.IsHit == 1)&&(BuffPeg == null))
            {                       
                var BuffDizzy = fightsystem.GetBuff(target,11813);
                if(BuffDizzy != null)   
                {
                    fightsystem.RemoveBuff(target,11813,timer,fv);
                }
                if(InitBuff.SaveData%1000/100 < 4)
                {
                    var BuffFreeze = fightsystem.GetBuff(target,11802);
                    if(BuffFreeze == null)
                    {
                        fightsystem.ChangeNextAtkTime(target,ParalysisTime);
                        //检查重复状态
                        var BuffParalysis = fightsystem.GetBuff(target,11801);
                        if(BuffParalysis != null)
                        {          
                            fightsystem.RemoveBuff(target,11801,timer,fv);
                        }
                        fightsystem.AddBuff(target,11801,timer,fv);
                        InitBuff.SaveData += 100;
                    }
                }       
            }
        }
        self.MP -= MPCost;
        fv.DecMP = MPCost;
        if(IsMelt != 0)
            fv.IsNeglectDef = 1;  
        var BuffDrain = fightsystem.GetBuff(self, 11836);
        if(BuffDrain != null)
        {
            fightsystem.RemoveBuff(self,11836,timer,fv);
        }
        return UserSkillReturn.SKILL_SUCCESS;
    }
}